import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with custom stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Simple logic for ROI Calculator to make it feel interactive
        function updateROI(val) {
            document.getElementById('sliderValue').innerText = val;
            
            // Assume 1 long video = 10 clips
            const clips = val * 10;
            // Assume 1 video = 4 hours of human editing
            const hours = val * 4;
            // Assume $30/hour editor cost
            const cost = hours * 30;

            document.getElementById('valClips').innerText = clips;
            document.getElementById('valHours').innerText = hours + 'h';
            document.getElementById('valCost').innerText = '$' + cost.toLocaleString();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] flex justify-center overflow-hidden pointer-events-none">
<div className="w-[80vw] h-[50vh] bg-purple-900/20 blur-[120px] rounded-full absolute -top-[20vh] animate-glow"></div>
<div className="w-[60vw] h-[60vh] bg-blue-900/10 blur-[120px] rounded-full absolute top-[40vh] left-[-10vw]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="scissors"></i>
</div>
<span className="text-xl font-medium tracking-tight">ClipTeam</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg text-zinc-400 font-normal">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#agents">AI Agents</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-lg font-normal text-zinc-300 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black px-4 py-2 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors" href="#">Get started</a>
</div>
</div>
</nav>
<main className="pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300 mb-8 font-medium">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                #1 AI Video Automation Platform
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-tight mb-6">
                Turn long videos into <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">viral short content</span>
</h1>
<p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto font-normal mb-12">
                Upload a podcast or stream. Our AI finds the best moments, adds captions, and prepares them for every social platform automatically.
            </p>

<div className="max-w-2xl mx-auto p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col sm:flex-row items-center gap-2 relative shadow-2xl shadow-purple-900/20">
<div className="flex-1 flex items-center w-full bg-black/50 rounded-xl px-4 py-3 border border-white/5">
<i className="text-zinc-500 w-6 h-6 mr-3" data-lucide="link"></i>
<input className="bg-transparent border-none outline-none text-white w-full text-lg placeholder:text-zinc-600 font-normal" placeholder="Paste YouTube link or Google Drive URL..." type="text"/>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto">
<button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl text-lg font-medium hover:bg-zinc-200 transition-colors group">
                        Generate clips
                        <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/5 transition-colors text-zinc-300" title="Upload file">
<i className="w-6 h-6" data-lucide="upload"></i>
</button>
</div>
</div>
<p className="mt-4 text-base text-zinc-500 font-normal flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check"></i> No credit card required. Free 120 minutes.
            </p>
</section>

<section className="mt-24 relative w-full overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none"></div>
<div className="flex gap-6 overflow-x-auto hide-scrollbar px-6 md:px-[10vw] snap-x snap-mandatory pb-8">

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] rounded-3xl bg-zinc-900/50 border border-white/10 p-2 backdrop-blur-sm relative group">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
<div className="bg-black/40 rounded-2xl h-[400px] border border-white/5 p-6 flex flex-col relative overflow-hidden">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
<i className="w-6 h-6" data-lucide="scan-line"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight">AI Highlight Detection</h3>
</div>

<div className="flex-1 mt-auto relative bg-zinc-900 rounded-xl border border-white/10 p-4 flex flex-col justify-end">
<div className="absolute top-4 left-4 right-4 h-32 bg-zinc-800 rounded-lg overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-between px-2 opacity-30">
<div className="w-1 h-8 bg-white rounded-full"></div>
<div className="w-1 h-12 bg-white rounded-full"></div>
<div className="w-1 h-6 bg-white rounded-full"></div>
<div className="w-1 h-16 bg-white rounded-full"></div>
<div className="w-1 h-10 bg-white rounded-full"></div>
<div className="w-1 h-20 bg-white rounded-full"></div>
<div className="w-1 h-14 bg-white rounded-full"></div>
</div>
</div>

<div className="w-full h-12 bg-black rounded-lg border border-white/5 flex gap-1 p-1 mt-4 relative">
<div className="absolute top-0 bottom-0 left-[30%] w-0.5 bg-red-500 z-10 flex flex-col items-center">
<div className="w-3 h-3 bg-red-500 rounded-full -mt-1.5 shadow-[0_0_10px_rgba(239,68,68,1)]"></div>
</div>
<div className="h-full bg-zinc-800 w-1/4 rounded-md"></div>
<div className="h-full bg-gradient-to-r from-purple-600 to-blue-600 w-1/3 rounded-md relative flex items-center justify-center border border-purple-400/30">
<span className="text-xs font-medium text-white px-2 py-0.5 bg-black/50 rounded backdrop-blur-md">Viral Moment (Score: 98)</span>
</div>
<div className="h-full bg-zinc-800 flex-1 rounded-md"></div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] rounded-3xl bg-zinc-900/50 border border-white/10 p-2 backdrop-blur-sm relative group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
<div className="bg-black/40 rounded-2xl h-[400px] border border-white/5 p-6 flex flex-col relative overflow-hidden">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
<i className="w-6 h-6" data-lucide="crop"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight">Auto-Reframe to Vertical</h3>
</div>

<div className="flex-1 flex gap-4">
<div className="w-1/2 bg-zinc-900 rounded-xl border border-white/10 relative overflow-hidden flex items-center justify-center">
<span className="text-zinc-600 text-base font-medium">Original 16:9</span>
<div className="absolute inset-4 border border-zinc-700 border-dashed rounded flex items-center justify-center">

<div className="w-16 h-24 border-2 border-green-500 rounded shadow-[0_0_15px_rgba(34,197,94,0.3)]"></div>
</div>
</div>
<div className="w-1/2 flex items-center justify-center">
<div className="w-2/3 h-full bg-zinc-900 rounded-xl border border-purple-500/50 relative overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.15)] flex items-center justify-center">
<span className="text-zinc-400 text-base font-medium absolute top-4">9:16 Shorts</span>
<div className="w-16 h-24 border-2 border-green-500 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] rounded-3xl bg-zinc-900/50 border border-white/10 p-2 backdrop-blur-sm relative group">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"></div>
<div className="bg-black/40 rounded-2xl h-[400px] border border-white/5 p-6 flex flex-col relative overflow-hidden">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
<i className="w-6 h-6" data-lucide="subtitles"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight">Dynamic Captions</h3>
</div>

<div className="flex-1 flex flex-col justify-center items-center bg-zinc-900 rounded-xl border border-white/10 p-6 relative">

<div className="w-48 h-[240px] bg-zinc-800 rounded-lg flex items-center justify-center relative overflow-hidden border border-white/5">
<div className="absolute bottom-12 w-full text-center px-4">
<span className="text-2xl font-semibold text-white drop-shadow-md tracking-tight block">This tool is</span>
<span className="text-3xl font-semibold text-yellow-400 drop-shadow-lg tracking-tight block mt-1 scale-110">INSANE</span>
</div>
</div>

<div className="absolute right-4 top-4 bottom-4 w-32 bg-black/60 backdrop-blur-md rounded-lg border border-white/10 p-3 flex flex-col gap-3">
<div className="text-xs text-zinc-500 font-medium">Style</div>
<div className="w-full h-8 bg-zinc-800 rounded border border-white/10"></div>
<div className="w-full h-8 bg-zinc-800 rounded border border-white/10 border-purple-500/50"></div>
<div className="w-full h-8 bg-zinc-800 rounded border border-white/10"></div>
<div className="mt-auto">
<div className="text-xs text-zinc-500 font-medium mb-1">Color</div>
<div className="flex gap-1">
<div className="w-6 h-6 rounded-full bg-white"></div>
<div className="w-6 h-6 rounded-full bg-yellow-400 border border-white/20"></div>
<div className="w-6 h-6 rounded-full bg-green-400"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-16 text-center">
<p className="text-base text-zinc-500 font-medium mb-8">Trusted by creators and media teams worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><i className="w-5 h-5" data-lucide="youtube"></i></div><span className="text-xl font-medium tracking-tight">CreatorHub</span></div>
<div className="flex items-center gap-2"><div className="w-8 h-8 rounded bg-white/20 flex items-center justify-center"><i className="w-5 h-5" data-lucide="mic"></i></div><span className="text-xl font-medium tracking-tight">PodNetwork</span></div>
<div className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center"><i className="w-5 h-5" data-lucide="briefcase"></i></div><span className="text-xl font-medium tracking-tight">MediaCorp</span></div>
<div className="flex items-center gap-2"><div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><i className="w-5 h-5" data-lucide="clapperboard"></i></div><span className="text-xl font-medium tracking-tight">StudioX</span></div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-40" id="features">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Content creation shouldn't be a bottleneck</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto font-normal">Traditional editing workflows are slow, expensive, and drain your creative energy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors">
<div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-400 mb-6 border border-red-500/20">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Hours of tedious editing</h3>
<p className="text-lg text-zinc-400 font-normal leading-relaxed">Sifting through hours of footage to find one good 30-second clip is a massive waste of time.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Missing viral moments</h3>
<p className="text-lg text-zinc-400 font-normal leading-relaxed">Humans miss context. You might leave the most engaging, algorithm-friendly hook on the cutting room floor.</p>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 hover:bg-zinc-900/80 transition-colors">
<div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-6 border border-yellow-500/20">
<i className="w-6 h-6" data-lucide="layout-template"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3">Formatting nightmare</h3>
<p className="text-lg text-zinc-400 font-normal leading-relaxed">Resizing for TikTok, burning in captions, and exporting multiple versions is repetitive busywork.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-40">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="flex-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm text-blue-400 mb-6 font-medium">
<i className="w-4 h-4" data-lucide="cpu"></i>
                        The AI Editor
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight">AI that actually understands your video.</h2>
<p className="text-xl text-zinc-400 font-normal mb-8 leading-relaxed">
                        Our models analyze visuals, context, speech, and emotion. It doesn't just cut at random timestamps—it finds the narrative arc that hooks viewers.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<span className="text-sm font-medium">1</span>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight mb-1">Analyze context</h4>
<p className="text-lg text-zinc-500 font-normal">Detects speakers, topics, and high-emotion moments.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
<span className="text-sm font-medium">2</span>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight mb-1">Extract highlights</h4>
<p className="text-lg text-zinc-500 font-normal">Generates self-contained clips with a clear beginning, middle, and end.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/30 text-purple-400">
<span className="text-sm font-medium">3</span>
</div>
<div>
<h4 className="text-xl font-medium tracking-tight mb-1 text-white">Ready to publish</h4>
<p className="text-lg text-zinc-500 font-normal">Auto-framed, captioned, and scored for virality potential.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full">
<div className="bg-zinc-900 rounded-3xl border border-white/10 p-2 relative shadow-2xl shadow-blue-900/20">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-purple-500/10 rounded-3xl pointer-events-none"></div>
<div className="bg-black/80 rounded-2xl border border-white/5 p-4 backdrop-blur-md">

<div className="flex items-center justify-between mb-4 border-b border-white/5 pb-4">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-zinc-400" data-lucide="video"></i>
<span className="text-base font-medium">Podcast_Episode_42.mp4</span>
</div>
<div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded border border-green-500/20">Analysis Complete</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="bg-zinc-900 rounded-xl border border-white/5 p-3 hover:border-purple-500/50 transition-colors cursor-pointer group">
<div className="w-full aspect-[9/16] bg-zinc-800 rounded-lg mb-3 relative overflow-hidden">
<div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-xs font-medium text-white border border-white/10">0:45</div>
<div className="absolute inset-0 flex flex-col justify-end p-2 bg-gradient-to-t from-black/80 to-transparent">
<span className="text-center text-sm font-semibold text-yellow-400 drop-shadow">"The secret is..."</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-zinc-300 line-clamp-1">The secret to growth</span>
<span className="text-xs font-medium text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">99</span>
</div>
</div>

<div className="bg-zinc-900 rounded-xl border border-white/5 p-3 opacity-70">
<div className="w-full aspect-[9/16] bg-zinc-800 rounded-lg mb-3 relative">
<div className="absolute top-2 right-2 px-2 py-0.5 bg-black/60 backdrop-blur-md rounded text-xs font-medium text-white border border-white/10">0:32</div>
</div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-zinc-300 line-clamp-1">Early mistakes</span>
<span className="text-xs font-medium text-green-400 bg-green-400/10 px-1.5 py-0.5 rounded">87</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-40" id="agents">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-6 font-medium">
<i className="w-4 h-4" data-lucide="bot"></i>
                    Automation System
                </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Build an autonomous content pipeline.</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto font-normal">
                    Don't just edit faster. Automate the entire process. Connect custom AI agents to act as your tireless production team.
                </p>
</div>

<div className="bg-zinc-900/50 rounded-3xl border border-white/10 p-8 md:p-12 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">

<div className="w-full md:w-64 bg-black rounded-2xl border border-white/10 p-5 shadow-lg">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
<i className="w-4 h-4" data-lucide="youtube"></i>
</div>
<span className="text-lg font-medium tracking-tight">Source Trigger</span>
</div>
<div className="text-sm text-zinc-500 font-normal">When new video is published on channel</div>
</div>

<div className="hidden md:flex flex-1 items-center justify-center">
<div className="w-full h-0.5 bg-gradient-to-r from-zinc-700 via-purple-500 to-zinc-700 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]"></div>
</div>
</div>
<div className="md:hidden w-0.5 h-10 bg-zinc-700"></div>

<div className="w-full md:w-80 bg-black rounded-2xl border border-purple-500/30 p-5 shadow-[0_0_30px_rgba(168,85,247,0.1)] relative">
<div className="absolute -top-3 right-4 bg-purple-500 text-white text-xs font-medium px-2 py-0.5 rounded-full">AI Agents active</div>
<div className="space-y-3 mt-2">
<div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
<div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center"><i className="w-3 h-3" data-lucide="scissors"></i></div>
<span className="text-sm font-medium">Clip Agent</span>
<span className="ml-auto text-xs text-zinc-500">Finds top 5</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
<div className="w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center"><i className="w-3 h-3" data-lucide="type"></i></div>
<span className="text-sm font-medium">Caption Agent</span>
<span className="ml-auto text-xs text-zinc-500">Alex Hormozi style</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
<div className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center"><i className="w-3 h-3" data-lucide="file-text"></i></div>
<span className="text-sm font-medium">Copy Agent</span>
<span className="ml-auto text-xs text-zinc-500">Writes description</span>
</div>
</div>
</div>

<div className="hidden md:flex flex-1 items-center justify-center">
<div className="w-full h-0.5 bg-gradient-to-r from-zinc-700 via-blue-500 to-zinc-700 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500 rotate-45"></div>
</div>
</div>
<div className="md:hidden w-0.5 h-10 bg-zinc-700"></div>

<div className="w-full md:w-64 bg-black rounded-2xl border border-white/10 p-5 shadow-lg">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400">
<i className="w-4 h-4" data-lucide="send"></i>
</div>
<span className="text-lg font-medium tracking-tight">Publisher</span>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center"><i className="w-4 h-4" data-lucide="instagram"></i></div>
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center"><i className="w-4 h-4" data-lucide="youtube"></i></div>
<div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center">

<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 text-center flex flex-col items-center">
<p className="text-lg text-zinc-400 font-normal mb-6">Connects seamlessly with your existing stack</p>
<div className="flex gap-4 md:gap-8 opacity-60">
<span className="text-lg font-medium tracking-tight flex items-center gap-2"><i className="w-5 h-5" data-lucide="folder-sync"></i> Google Drive</span>
<span className="text-lg font-medium tracking-tight flex items-center gap-2"><i className="w-5 h-5" data-lucide="cloud"></i> Dropbox</span>
<span className="text-lg font-medium tracking-tight flex items-center gap-2"><i className="w-5 h-5" data-lucide="slack"></i> Slack</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-40" id="pricing">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Simple pricing, massive ROI.</h2>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto font-normal">Start for free, scale when you see results.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 items-center">

<div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 h-fit">
<h3 className="text-2xl font-medium tracking-tight mb-2">Starter</h3>
<p className="text-base text-zinc-400 font-normal mb-6">For individual creators.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight">$19</span>
<span className="text-base text-zinc-500 font-normal">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-lg text-zinc-300 font-normal">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-500" data-lucide="check"></i> AI Editor access</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-500" data-lucide="check"></i> 10 hours upload /mo</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-500" data-lucide="check"></i> Standard templates</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-medium transition-colors">Start Starter</button>
</div>

<div className="bg-zinc-900 border border-purple-500/50 rounded-3xl p-8 relative shadow-[0_0_40px_rgba(168,85,247,0.15)] transform md:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">Most Popular</div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Pro</h3>
<p className="text-base text-zinc-400 font-normal mb-6">For serious creators &amp; small teams.</p>
<div className="mb-6">
<span className="text-5xl font-semibold tracking-tight">$49</span>
<span className="text-base text-zinc-500 font-normal">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-lg text-zinc-200 font-normal">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-purple-400" data-lucide="check"></i> Everything in Starter</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-purple-400" data-lucide="check"></i> Basic Automation</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-purple-400" data-lucide="check"></i> 30 hours upload /mo</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-purple-400" data-lucide="check"></i> Export to Premiere/FCP</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white text-black hover:bg-zinc-200 font-medium transition-colors">Start Free Trial</button>
</div>

<div className="bg-zinc-900/40 border border-white/10 rounded-3xl p-8 h-fit">
<h3 className="text-2xl font-medium tracking-tight mb-2">Automation</h3>
<p className="text-base text-zinc-400 font-normal mb-6">For agencies and media companies.</p>
<div className="mb-6">
<span className="text-4xl font-semibold tracking-tight">$149</span>
<span className="text-base text-zinc-500 font-normal">/mo</span>
</div>
<ul className="space-y-4 mb-8 text-lg text-zinc-300 font-normal">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-500" data-lucide="check"></i> Full AI Agent System</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-500" data-lucide="check"></i> Unlimited hours</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-500" data-lucide="check"></i> Custom Agent Training</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-zinc-500" data-lucide="check"></i> API Access</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-medium transition-colors">Contact Sales</button>
</div>
</div>

<div className="bg-black border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-3xl font-medium tracking-tight text-center mb-10">Calculate your ROI</h3>
<div className="max-w-2xl mx-auto mb-12">
<div className="flex justify-between items-end mb-4">
<label className="text-lg text-zinc-400 font-normal">Long videos per month</label>
<span className="text-3xl font-semibold tracking-tight" id="sliderValue">10</span>
</div>
<input className="w-full" id="roiSlider" max="50" min="1" oninput="updateROI(this.value)" type="range" value="10"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
<div className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
<div className="text-4xl font-semibold tracking-tight text-purple-400 mb-2" id="valClips">100</div>
<div className="text-base text-zinc-500 font-medium">Shorts Generated</div>
</div>
<div className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
<div className="text-4xl font-semibold tracking-tight text-blue-400 mb-2" id="valHours">40h</div>
<div className="text-base text-zinc-500 font-medium">Editing Hours Saved</div>
</div>
<div className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-white/5">
<div className="text-4xl font-semibold tracking-tight text-green-400 mb-2" id="valCost">$1,200</div>
<div className="text-base text-zinc-500 font-medium">Estimated Value ($)</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mt-40">
<h2 className="text-4xl font-semibold tracking-tight text-center mb-12">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group bg-zinc-900/40 border border-white/10 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-xl font-medium tracking-tight">
                        How accurate is the AI highlight detection?
                        <i className="w-5 h-5 text-zinc-500 transition-transform duration-300 group-open:-rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-400 font-normal leading-relaxed">
                        Our models are trained on millions of viral videos. They don't just look for loud noises; they analyze transcript context, speaker emotion, and narrative structure to find hooks that actually perform well on algorithms.
                    </div>
</details>
<details className="group bg-zinc-900/40 border border-white/10 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-xl font-medium tracking-tight">
                        Which platforms can I publish to automatically?
                        <i className="w-5 h-5 text-zinc-500 transition-transform duration-300 group-open:-rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-400 font-normal leading-relaxed">
                        Currently, our automation agents can post directly to YouTube Shorts, TikTok, and Instagram Reels. You can also route files to Google Drive or Dropbox for manual review before posting.
                    </div>
</details>
<details className="group bg-zinc-900/40 border border-white/10 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-xl font-medium tracking-tight">
                        Can I customize the workflow and caption styles?
                        <i className="w-5 h-5 text-zinc-500 transition-transform duration-300 group-open:-rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-400 font-normal leading-relaxed">
                        Yes. You have full control in the AI Editor to adjust brand colors, fonts, and safe zones. In the Team plan, you can save these as global templates for your agents to use automatically.
                    </div>
</details>
<details className="group bg-zinc-900/40 border border-white/10 rounded-2xl [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer text-xl font-medium tracking-tight">
                        Do I need video editing experience?
                        <i className="w-5 h-5 text-zinc-500 transition-transform duration-300 group-open:-rotate-180" data-lucide="chevron-down"></i>
</summary>
<div className="px-6 pb-6 text-lg text-zinc-400 font-normal leading-relaxed">
                        None at all. The interface is designed to be as simple as a chat prompt. You paste a link, and the AI does the timeline work. If you want to tweak things, our editor is intuitive and block-based.
                    </div>
</details>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mt-40 mb-20">
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black py-20 px-6 text-center shadow-[0_0_100px_rgba(168,85,247,0.15)]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-[100px] pointer-events-none z-0"></div>
<div className="relative z-10">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight mb-6">Turn every long video into <br className="hidden md:block"/>viral content today.</h2>
<p className="text-xl text-zinc-400 font-normal mb-10 max-w-2xl mx-auto">Stop spending hours in Premiere. Let AI scale your content production while you focus on creating.</p>
<button className="bg-white text-black px-8 py-4 rounded-full text-xl font-medium hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
                        Start generating clips with AI
                    </button>
<p className="mt-6 text-base text-zinc-500 font-normal">Free 120 minutes • No credit card required</p>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/10 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-base text-zinc-500 font-normal">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-zinc-400" data-lucide="scissors"></i>
<span className="font-medium text-zinc-300">ClipTeam AI</span>
<span>© 2024</span>
</div>
<div className="flex gap-6">
<a className="hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-300 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>


    </>
  );
}
