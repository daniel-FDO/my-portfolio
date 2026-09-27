"""Local preview server with byte-range support for media seeking."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import re

class MediaHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(Path(__file__).resolve().parents[1]), **kwargs)

    def send_head(self):
        self.byte_count = None
        path = Path(self.translate_path(self.path))
        match = re.fullmatch(r'bytes=(\d+)-(\d*)', self.headers.get('Range', ''))
        if not match or not path.is_file():
            return super().send_head()
        size = path.stat().st_size
        start = int(match[1])
        end = min(int(match[2]) if match[2] else size - 1, size - 1)
        if start > end:
            self.send_error(416)
            return None
        self.send_response(206)
        self.send_header('Content-Type', self.guess_type(str(path)))
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
        self.byte_count = end - start + 1
        self.send_header('Content-Length', str(self.byte_count))
        self.end_headers()
        stream = path.open('rb')
        stream.seek(start)
        return stream

    def copyfile(self, source, outputfile):
        try:
            if self.byte_count is None:
                return super().copyfile(source, outputfile)
            remaining = self.byte_count
            while remaining > 0:
                chunk = source.read(min(65536, remaining))
                if not chunk: break
                outputfile.write(chunk)
                remaining -= len(chunk)
        except (ConnectionResetError, ConnectionAbortedError, BrokenPipeError):
            pass  # Browsers cancel downloads when switching songs.

    def log_message(self, *args):
        pass

if __name__ == '__main__':
    ThreadingHTTPServer(('127.0.0.1', 8765), MediaHandler).serve_forever()
