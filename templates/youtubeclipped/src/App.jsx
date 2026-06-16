import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Render icons with 1.5 stroke width
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="border-b border-white/10">
<div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight">YCD</span>
</div>
<div className="flex flex-col">
<span className="text-sm text-slate-300">YouTube Clip Downloader</span>
<span className="text-xs text-slate-400">Trim any segment by URL and timecodes</span>
</div>
</div>
<nav className="hidden sm:flex items-center gap-4 text-sm">
<a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Docs</a>
<a className="text-slate-400 hover:text-slate-200 transition-colors" href="#">Support</a>
</nav>
</div>
</header>
<main className="flex-1">
<section className="max-w-3xl mx-auto px-6 py-10 md:py-14">
<div className="mb-6">
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight">YouTube Clip Downloader</h1>
<p className="mt-2 text-slate-400 text-sm md:text-base">Paste a video link, set start and end times (HH:MM:SS), and download just the part you need.</p>
</div>
<form action="/download" className="space-y-6" id="clip-form" method="post">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 md:p-6">
<div className="space-y-5">
<div className="space-y-2">
<label className="block text-sm text-slate-300" htmlFor="url">YouTube URL</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="link-2"></i>
<input autocomplete="off" className="w-full rounded-md bg-slate-900/60 text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/70 px-10 py-2.5" id="url" inputmode="url" name="url" placeholder="https://www.youtube.com/watch?v=XXXXXXXXXXX" required="" type="url"/>
</div>
<p className="text-xs text-slate-500">Supports standard and shortened links.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="block text-sm text-slate-300" htmlFor="start">Start Time (HH:MM:SS)</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="clock-4"></i>
<input autocomplete="off" className="w-full rounded-md bg-slate-900/60 text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/70 px-10 py-2.5" id="start" inputmode="numeric" name="start" pattern="^([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9]$" placeholder="00:00:00" title="Use HH:MM:SS, e.g., 00:00:03" type="text"/>
</div>
<p className="text-xs text-slate-500">Example: 00:00:05</p>
</div>
<div className="space-y-2">
<label className="block text-sm text-slate-300" htmlFor="end">End Time (HH:MM:SS or MM:SS)</label>
<div className="relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="clock"></i>
<input autocomplete="off" className="w-full rounded-md bg-slate-900/60 text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/70 px-10 py-2.5" id="end" inputmode="numeric" name="end" oninput="this.value=this.value.trim()" pattern="^(?:[0-9]{1,2}:)?[0-5]?[0-9]:[0-5]?[0-9]$" placeholder="00:01:30" title="Use HH:MM:SS or MM:SS, e.g., 00:01:30 or 1:30" type="text"/>
</div>
<p className="text-xs text-slate-500">Leave blank to download from start time to the end. Supports HH:MM:SS or MM:SS.</p>
</div>
</div>
<div className="pt-1 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md bg-blue-600 text-white px-4 py-2.5 text-sm font-medium hover:bg-blue-500 active:bg-blue-600/90 transition-colors ring-1 ring-inset ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70" type="submit">
<i className="text-white" data-lucide="scissors"></i>
<span>Download Clip</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 text-slate-200 px-4 py-2.5 text-sm hover:bg-white/10 transition-colors ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70" id="preview-btn" type="button">
<i className="text-slate-200" data-lucide="play"></i>
<span>Preview Clip</span>
</button>
</div>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4 flex items-start gap-3">
<i className="mt-0.5 text-slate-400" data-lucide="info"></i>
<p className="text-xs text-slate-400">
              Times use 24-hour HH:MM:SS. If you only set Start Time, the clip runs to the end of the video.
            </p>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4 flex items-start gap-3">
<i className="mt-0.5 text-slate-400" data-lucide="shield"></i>
<p className="text-xs text-slate-400">
              Use this tool only for content you have rights to download and clip.
            </p>
</div>
</div>
</form>
<div className="mt-6 rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden hidden" id="preview-card">
<div className="px-5 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-slate-300" data-lucide="monitor-play"></i>
</div>
<div>
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Clip preview</h2>
<p className="text-xs text-slate-400" id="preview-meta">Start — End</p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors rounded-md px-2.5 py-1 ring-1 ring-white/10 hover:ring-white/20" id="close-preview">
<i className="w-4 h-4" data-lucide="x"></i>
<span>Close</span>
</button>
</div>
<div className="border-t border-white/10">
<div className="p-0">
<div className="w-full aspect-video bg-slate-900">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" id="preview-iframe" src="" title="YouTube video preview"></iframe>
</div>
</div>
</div>
</div>
<div className="mt-6 rounded-xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="px-5 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-slate-300" data-lucide="server-cog"></i>
</div>
<div>
<h2 className="text-lg md:text-xl font-semibold tracking-tight">Make it work: backend setup</h2>
<p className="text-xs text-slate-400">This page submits to a server at <code className="px-1 py-0.5 rounded bg-white/5 ring-1 ring-white/10 text-[11px]">/download</code>. Run one locally or deploy it.</p>
</div>
</div>
<button className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors rounded-md px-2.5 py-1 ring-1 ring-white/10 hover:ring-white/20" id="toggle-setup">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
<span>Show</span>
</button>
</div>
<div className="border-t border-white/10 hidden" id="setup-body">
<div className="px-5 py-5 space-y-5">
<div className="grid md:grid-cols-3 gap-4">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-slate-200 text-sm">
<i className="w-4 h-4" data-lucide="package"></i>
<span>1) Install prerequisites</span>
</div>
<p className="mt-2 text-xs text-slate-400">No coding required. You’ll run a few commands to install three tools that this page uses to cut videos.</p>
<div className="mt-3 grid gap-2">
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-slate-400 mt-0.5" data-lucide="film"></i>
<p className="text-xs text-slate-300">
                      ffmpeg — does the actual cutting and converting of video and audio.
                    </p>
</div>
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-slate-400 mt-0.5" data-lucide="download"></i>
<p className="text-xs text-slate-300">
                      yt-dlp — fetches the video from YouTube.
                    </p>
</div>
<div className="flex items-start gap-2">
<i className="w-4 h-4 text-slate-400 mt-0.5" data-lucide="server"></i>
<p className="text-xs text-slate-300">
                      Python + Flask — a tiny app that listens for your clip request.
                    </p>
</div>
</div>
<div className="mt-4 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-300" data-lucide="terminal"></i>
<span className="text-xs text-slate-200">Open your command line</span>
</div>
<ul className="mt-2 space-y-1.5 text-xs text-slate-400">
<li><span className="text-slate-300">macOS:</span> Click the magnifying glass (top right), type “Terminal”, press Enter.</li>
<li><span className="text-slate-300">Windows:</span> Press Start, type “PowerShell”, open “Windows PowerShell”.</li>
<li><span className="text-slate-300">Ubuntu/Debian:</span> Press Ctrl + Alt + T to open Terminal.</li>
</ul>
</div>
<p className="mt-3 text-xs text-slate-400">Copy the commands for your computer. Paste into the window you opened and press Enter after each line.</p>
<div className="mt-3 rounded-md bg-slate-900/60 ring-1 ring-white/10 overflow-x-auto">
<pre className="text-[11px] leading-relaxed p-3 whitespace-pre" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
# macOS
brew install ffmpeg
python3 -m pip install -U yt-dlp flask

# Ubuntu/Debian
sudo apt-get update &amp;&amp; sudo apt-get install -y ffmpeg
python3 -m pip install -U yt-dlp flask

# Windows (PowerShell)
winget install Gyan.FFmpeg
py -m pip install -U yt-dlp flask
                  </pre>
</div>
<div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-green-400" data-lucide="check-circle-2"></i>
<span className="text-xs text-slate-200">Verify it worked</span>
</div>
<p className="mt-1 text[11px] text-slate-400">Run these checks. If you see version numbers, you’re good.</p>
<div className="mt-2 rounded-md bg-slate-900/60 ring-1 ring-white/10 overflow-x-auto">
<pre className="text-[11px] leading-relaxed p-3 whitespace-pre" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
ffmpeg -version
yt-dlp --version
# macOS/Linux:
python3 --version
# Windows:
py -V
                    </pre>
</div>
</div>
<div className="mt-3 rounded-lg bg-white/5 ring-1 ring-white/10 p-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-slate-300" data-lucide="help-circle"></i>
<span className="text-xs text-slate-200">If you hit a snag</span>
</div>
<ul className="mt-2 text-[11px] text-slate-400 space-y-1.5">
<li>“command not found”: Close and reopen Terminal/PowerShell, then try again.</li>
<li>On Windows, if winget isn’t found, update the Microsoft Store App Installer.</li>
<li>If Python is missing, install it from python.org, then repeat the commands.</li>
</ul>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4 md:col-span-2">
<div className="flex items-center gap-2 text-slate-200 text-sm">
<i className="w-4 h-4" data-lucide="code-2"></i>
<span>2) Minimal server (Python)</span>
</div>
<p className="mt-2 text-xs text-slate-400">Save as <span className="text-slate-300">app.py</span>. Requires ffmpeg in PATH.</p>
<div className="mt-3 rounded-md bg-slate-900/60 ring-1 ring-white/10 overflow-x-auto">
<pre className="text-[11px] leading-relaxed p-3 whitespace-pre" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
from flask import Flask, request, send_file, abort, make_response
import tempfile, subprocess, os, glob

app = Flask(__name__)

def hms_to_seconds(hms):
    parts = [int(p) for p in hms.split(":")]
    while len(parts) &lt; 3:
        parts.insert(0, 0)
    h, m, s = parts
    return h*3600 + m*60 + s

@app.after_request
def add_cors_headers(resp):
    resp.headers["Access-Control-Allow-Origin"] = "*"
    resp.headers["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS"
    resp.headers["Access-Control-Allow-Headers"] = "Content-Type"
    return resp

@app.get("/health")
def health():
    return "ok", 200

@app.post("/download")
def download():
    url = request.form.get("url", "")
    start = request.form.get("start", "") or "00:00:00"
    end = request.form.get("end", "")

    if not url or "youtube.com" not in url and "youtu.be" not in url:
        return abort(400, "Invalid URL")

    with tempfile.TemporaryDirectory() as tmp:
        # 1) Download the source video
        template = os.path.join(tmp, "video.%(ext)s")
        subprocess.check_call(["yt-dlp", "-f", "bv*+ba/b", "-o", template, url])
        files = glob.glob(os.path.join(tmp, "video.*"))
        if not files:
            return abort(500, "Download failed")
        src = files[0]

        # 2) Build trim arguments
        ss = hms_to_seconds(start)
        ff_args = ["-ss", str(ss)]
        if end:
            to = hms_to_seconds(end)
            if to &lt;= ss:
                return abort(400, "End must be after start")
            ff_args += ["-to", str(to)]

        # 3) Transcode a precise clip
        out = os.path.join(tmp, "clip.mp4")
        cmd = ["ffmpeg", *ff_args, "-i", src, "-c:v", "libx264", "-preset", "veryfast", "-crf", "22",
               "-c:a", "aac", "-movflags", "+faststart", "-y", out]
        subprocess.check_call(cmd)

        return send_file(out, as_attachment=True, download_name="clip.mp4", mimetype="video/mp4")

if __name__ == "__main__":
    # Run: python3 app.py
    app.run(host="0.0.0.0", port=5050)
</pre>
</div>
<p className="mt-2 text[11px] text-slate-500">If hosting on a different origin than this page, CORS headers above keep the test button happy.</p>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2 text-slate-200 text-sm">
<i className="w-4 h-4" data-lucide="play-circle"></i>
<span>3) Run and connect</span>
</div>
<div className="mt-3 grid sm:grid-cols-2 gap-3">
<div className="rounded-md bg-slate-900/60 ring-1 ring-white/10 overflow-x-auto">
<pre className="text-[11px] leading-relaxed p-3 whitespace-pre" style={{fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \'Liberation Mono\', \'Courier New\', monospace'}}>
python3 app.py
# Server listening on http://localhost:5050
                  </pre>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 flex-wrap">
<div className="flex items-center gap-2">
<label className="text-[11px] text-slate-400" htmlFor="port-input">Port</label>
<input className="w-20 rounded-md bg-slate-900/60 text-slate-100 ring-1 ring-white/10 px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/70" id="port-input" max="65535" min="1" type="number" value="5050"/>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10 transition-colors ring-1 ring-white/10" id="test-localhost">
<i className="w-4 h-4" data-lucide="satellite"></i>
<span>Test Local Server</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10 transition-colors ring-1 ring-white/10" id="use-localhost">
<i className="w-4 h-4" data-lucide="wrench"></i>
<span>Use localhost backend</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-xs text-slate-200 hover:bg-white/10 transition-colors ring-1 ring-white/10" id="reset-endpoint">
<i className="w-4 h-4" data-lucide="rotate-ccw"></i>
<span>Reset</span>
</button>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-slate-400">Status:</span>
<span className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-slate-800 ring-1 ring-white/10 text-slate-300" id="local-status">
<span className="inline-block h-1.5 w-1.5 rounded-full bg-slate-500"></span>
                      Not connected
                    </span>
</div>
<p className="text-[11px] text-slate-400">This sets the form action to <code className="px-1 py-0.5 rounded bg-white/5 ring-1 ring-white/10">http://localhost:<span id="port-pill">5050</span>/download</code> when connected. Reset returns to <code className="px-1 py-0.5 rounded bg-white/5 ring-1 ring-white/10">/download</code>.</p>
<div className="text-[11px] text-slate-300">Current form action: <span className="text-slate-200" id="action-display"></span></div>
</div>
</div>
<p className="mt-3 text-[11px] text-slate-500">Tip: On Windows, if you see a firewall popup, click “Allow”. Keep the terminal window open while using this page.</p>
</div>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10">
<div className="max-w-3xl mx-auto px-6 py-6 text-xs text-slate-500">
      Built for personal use. No affiliation with YouTube.
    </div>
</footer>


    </>
  );
}
