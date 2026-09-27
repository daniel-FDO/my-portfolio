# Daniel Fasan — digital portfolio

Open `index.html` to start. The five pages are plain HTML and link to each other directly; no build step or package install is required.

The supplied project screenshots are in `assets/` and appear in the project rail, gallery and expanded project views. The Contact wall footage is streamed from Pexels and needs an internet connection.

The existing music player now contains **DF: IN MOTION**, with 13 unique tracks. The 12 supplied files are copied from `C:/Users/danie/Music/` to `assets/music/` with their exact filenames. The existing Bad Bunny track is retained. The supplied Inner Lights is byte-identical to the original asset and appears only once in the playlist. Its MP4 contains AAC audio and plays directly, without conversion. No supplied tracks were skipped.

Edit `playlist` in `app.js` to manage titles, artists and source paths. The supplied filenames use **Title - Artist**; Inner Lights has no supplied artist and displays only its title. To add artwork, put the image in `assets/` and set **`playlistConfig.cover` in `app.js`** to its real relative URL. It defaults to `null`, with no image request or empty artwork frame.

Queue selection starts the chosen track. Shuffle uses a shuffled bag, visiting each available song before repeating, with previous-track history. Repeat cycles playlist → song → off; the default is playlist. Manual next wraps; automatic next stops at the last track when repeat is off. Previous restarts after three seconds, otherwise moves back. Music off pauses without losing position. Track, time, volume, mute, shuffle and repeat are stored under `df-in-motion-v1`; refresh restores them paused. Failed tracks are disabled, named in the player and excluded from the available count. Playback uses one audio element, audio events and a small CSS equaliser, with no added animation frame loop.

For a local HTTP preview with media seeking, run `python tests/serve.py` and open `http://127.0.0.1:8765`. The preview server supports byte ranges; production hosting should support them too. There is no application build step or runtime dependency.

Browser regression checks: install the optional test dependencies with `python -m pip install playwright` and `python -m playwright install chromium`, start the preview server, then run `python tests/music-player.py`. This checks real playback for all files, controls, shuffle, actual track endings/repeat, themes, scrolling, Project Mode, car dragging, footer, mobile, persistence and failure recovery. Screenshots are written to `tests/artifacts/`. The pre-existing external Pexels poster/video currently return 404/403; the checks report these separately from JavaScript and local resource errors.

Pages: `index.html`, `projects.html`, `about.html`, `experience.html`, `contact.html`.
