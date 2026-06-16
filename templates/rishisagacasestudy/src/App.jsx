import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<i className="w-5 h-5 text-[#1DB954]" data-lucide="disc" strokeWidth="1.5"></i>
<span className="font-medium tracking-tight text-sm">Spotify for Artists <span className="text-neutral-500 font-normal">/ Case Study</span></span>
</div>
<div className="flex items-center gap-6 text-xs font-medium tracking-wide hidden md:flex">
<a className="hover:text-white transition-colors" href="#">Overview</a>
<a className="hover:text-white transition-colors" href="#">Architecture</a>
<a className="hover:text-white transition-colors" href="#">Flows</a>
<a className="hover:text-white transition-colors" href="#">Solution</a>
<button className="text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all border border-white/5">
                    View Prototype
                </button>
</div>
</div>
</nav>

<header className="pt-32 pb-20 px-6 max-w-7xl mx-auto border-b border-white/5">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1DB954]/10 border border-[#1DB954]/20 text-[#1DB954] text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1DB954] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#1DB954]"></span>
</span>
                UX Research &amp; Redesign
            </div>
<h1 className="text-white text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] mb-8">
                Turning data into <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DB954] to-[#1ed760]">creative confidence.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl leading-relaxed font-light">
                Redesigning the Spotify for Artists dashboard to shift from raw metrics to narrative-driven insights, helping artists make smarter decisions faster.
            </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/5">
<div>
<div className="text-xs uppercase tracking-wider text-neutral-500 mb-2">Role</div>
<div className="text-white text-sm font-medium">Product Designer</div>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-neutral-500 mb-2">Timeline</div>
<div className="text-white text-sm font-medium">4 Weeks (Sprint)</div>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-neutral-500 mb-2">Platform</div>
<div className="text-white text-sm font-medium">Web &amp; Mobile App</div>
</div>
<div>
<div className="text-xs uppercase tracking-wider text-neutral-500 mb-2">Outcome</div>
<div className="text-white text-sm font-medium">+24% Engagement</div>
</div>
</div>
</header>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="sticky top-24">
<h2 className="text-3xl text-white font-medium tracking-tight mb-6">The Problem</h2>
<div className="prose prose-invert prose-lg text-neutral-400">
<p className="mb-6">
                        Artists are overwhelmed by data. The current dashboard presents a wall of numbers—streams, saves, listeners—without context. Independent artists, in particular, struggle to translate these metrics into actionable career moves.
                    </p>
<p>
                        The goal was to move from <span className="text-white">"What happened?"</span> to <span className="text-white">"Why it happened and what to do next."</span>
</p>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-[#1DB954]/20 to-purple-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative bg-[#121212] border border-white/10 rounded-xl p-8 overflow-hidden h-full min-h-[300px] flex items-center justify-center">
<div className="text-center space-y-2">
<i className="w-12 h-12 text-neutral-700 mx-auto mb-4" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<p className="text-white text-sm font-medium">Previous Dashboard</p>
<p className="text-neutral-500 text-xs">High Cognitive Load</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5 bg-[#0A0A0A]">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
<div>
<h2 className="text-3xl text-white font-medium tracking-tight mb-2">Core Task Flows</h2>
<p className="text-neutral-500">Mapping critical paths for two distinct personas: The Analyst (Aasman) &amp; The Creator (Sofia).</p>
</div>
<div className="flex gap-2">
<div className="h-1 w-8 bg-[#1DB954] rounded-full"></div>
<div className="h-1 w-2 bg-neutral-800 rounded-full"></div>
</div>
</div>
<div className="space-y-24">

<div className="relative">
<div className="flex items-center gap-4 mb-8">
<span className="w-8 h-8 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center text-xs font-semibold">01</span>
<div>
<h3 className="text-lg font-medium text-white">Persona: Aasman</h3>
<p className="text-xs text-neutral-500">The Analyst • Focus on data validation and campaign optimization</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">

<div className="hidden md:block absolute top-[2.75rem] left-0 w-full h-px bg-gradient-to-r from-white/10 via-white/5 to-transparent z-0"></div>

<div className="relative z-10 bg-[#121212] border border-white/10 p-5 rounded-xl hover:border-white/20 transition-colors group h-full">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-colors border border-white/5">
<i className="w-5 h-5" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Entry</div>
<div className="text-white text-sm font-medium">Open Today's Vibe</div>
<ul className="text-[10px] text-neutral-500 mt-2 space-y-1 list-disc list-inside opacity-80">
<li>Opens app</li>
<li>Checks Vibe</li>
</ul>
</div>

<div className="relative z-10 bg-[#121212] border border-white/10 p-5 rounded-xl hover:border-white/20 transition-colors group h-full">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-400 group-hover:text-black transition-colors border border-white/5">
<i className="w-5 h-5" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">5-10 Seconds</div>
<div className="text-white text-sm font-medium">Signal Check</div>
<p className="text-[10px] text-neutral-500 mt-2 leading-relaxed">Checks Vibe state (Upward/Stable). Decides: "Is this normal?"</p>
</div>

<div className="relative z-10 bg-[#121212] border border-white/10 p-5 rounded-xl hover:border-white/20 transition-colors group h-full">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-400 group-hover:text-black transition-colors border border-white/5">
<i className="w-5 h-5" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Context</div>
<div className="text-white text-sm font-medium">KPI Scan</div>
<p className="text-[10px] text-neutral-500 mt-2 leading-relaxed">Glances at Streams, Listeners, Saves. Validates if change is meaningful.</p>
</div>

<div className="relative z-10 bg-[#121212] border border-white/10 p-5 rounded-xl hover:border-white/20 transition-colors group h-full">
<div className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-400 group-hover:text-black transition-colors border border-white/5">
<i className="w-5 h-5" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Insight</div>
<div className="text-white text-sm font-medium">Read Narrative</div>
<p className="text-[10px] text-neutral-500 mt-2 leading-relaxed">Reads "Why" cards. Identifies primary driver &amp; confidence level.</p>
</div>

<div className="relative z-10 bg-[#121212] border border-[#1DB954]/30 p-5 rounded-xl hover:border-[#1DB954]/50 transition-colors group h-full shadow-[0_0_20px_rgba(29,185,84,0.05)]">
<div className="w-10 h-10 bg-[#1DB954]/20 text-[#1DB954] rounded-full flex items-center justify-center mb-4 border border-[#1DB954]/20">
<i className="w-5 h-5" data-lucide="arrow-right-circle" strokeWidth="1.5"></i>
</div>
<div className="text-xs text-[#1DB954] uppercase tracking-wider mb-1">Action</div>
<div className="text-white text-sm font-medium">Campaign Page</div>
<p className="text-[10px] text-neutral-500 mt-2 leading-relaxed">Locates specific campaign driver and navigates to details.</p>
</div>
</div>
</div>

<div className="relative pt-8 border-t border-white/5">
<div className="flex items-center gap-4 mb-8">
<span className="w-8 h-8 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center text-xs font-semibold">02</span>
<div>
<h3 className="text-lg font-medium text-white">Persona: Sofia</h3>
<p className="text-xs text-neutral-500">The Creator • Focus on reassurance and simple progress</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-y-8">

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-br from-white/5 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
<div className="relative bg-[#121212] border border-white/10 p-5 rounded-xl h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center text-white"><i className="w-4 h-4" data-lucide="log-in" strokeWidth="1.5"></i></div>
<span className="text-[10px] text-neutral-600 font-mono">01</span>
</div>
<div className="text-white text-sm font-medium mb-1">Entry</div>
<p className="text-[10px] text-neutral-500 leading-relaxed">Opens app to 'Simple Mode'. No charts on entry.</p>
</div>
</div>

<div className="relative group">
<div className="relative bg-[#121212] border border-white/10 p-5 rounded-xl h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 bg-purple-500/10 text-purple-400 rounded flex items-center justify-center"><i className="w-4 h-4" data-lucide="heart" strokeWidth="1.5"></i></div>
<span className="text-[10px] text-neutral-600 font-mono">02</span>
</div>
<div className="text-white text-sm font-medium mb-1">Emotional Check-In</div>
<p className="text-[10px] text-neutral-500 leading-relaxed">Sees "Building momentum". Friendly tone answers: "Am I okay?"</p>
</div>
</div>

<div className="relative group">
<div className="relative bg-[#121212] border border-white/10 p-5 rounded-xl h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center text-white"><i className="w-4 h-4" data-lucide="pie-chart" strokeWidth="1.5"></i></div>
<span className="text-[10px] text-neutral-600 font-mono">03</span>
</div>
<div className="text-white text-sm font-medium mb-1">Progress Snapshot</div>
<p className="text-[10px] text-neutral-500 leading-relaxed">Views 3-4 large, friendly stats (Streams, New Listeners).</p>
</div>
</div>

<div className="relative group">
<div className="relative bg-[#121212] border border-white/10 p-5 rounded-xl h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center text-white"><i className="w-4 h-4" data-lucide="lightbulb" strokeWidth="1.5"></i></div>
<span className="text-[10px] text-neutral-600 font-mono">04</span>
</div>
<div className="text-white text-sm font-medium mb-1">Guided Insight</div>
<p className="text-[10px] text-neutral-500 leading-relaxed">Reads "Why": "More listeners are saving your song..."</p>
</div>
</div>

<div className="relative group">
<div className="relative bg-[#121212] border border-white/10 p-5 rounded-xl h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center text-white"><i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i></div>
<span className="text-[10px] text-neutral-600 font-mono">05</span>
</div>
<div className="text-white text-sm font-medium mb-1">Discovery Highlight</div>
<p className="text-[10px] text-neutral-500 leading-relaxed">"Your song was discovered through listener playlists."</p>
</div>
</div>

<div className="relative group">
<div className="relative bg-[#121212] border border-white/10 p-5 rounded-xl h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<div className="w-8 h-8 bg-neutral-800 rounded flex items-center justify-center text-white"><i className="w-4 h-4" data-lucide="compass" strokeWidth="1.5"></i></div>
<span className="text-[10px] text-neutral-600 font-mono">06</span>
</div>
<div className="text-white text-sm font-medium mb-1">Gentle Guidance</div>
<p className="text-[10px] text-neutral-500 leading-relaxed">Suggested action: "Posting about this song could help."</p>
</div>
</div>

<div className="relative group md:col-span-2">
<div className="relative bg-[#121212] border border-[#1DB954]/30 p-5 rounded-xl h-full flex items-center gap-4 shadow-[0_0_20px_rgba(29,185,84,0.05)]">
<div className="w-12 h-12 bg-[#1DB954]/20 text-[#1DB954] rounded-full flex items-center justify-center border border-[#1DB954]/20 shrink-0">
<i className="w-6 h-6" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<div>
<div className="flex justify-between items-center mb-1">
<div className="text-white text-sm font-medium">Exit with Confidence</div>
<span className="text-[10px] text-[#1DB954] font-mono">07</span>
</div>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-sm">Closes app feeling reassured. Understands progress and leaves with one idea to try.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-3xl text-white font-medium tracking-tight mb-2">Information Architecture</h2>
<p className="text-neutral-500">Restructuring the platform to prioritize the "Today's Vibe" narrative while maintaining deep utility.</p>
</div>

<div className="w-full overflow-x-auto no-scrollbar pb-12">
<div className="min-w-[1000px] flex flex-col items-center">

<div className="relative z-10 mb-12">
<div className="px-8 py-3 bg-[#1DB954] text-black font-semibold rounded-lg shadow-[0_0_20px_rgba(29,185,84,0.3)] text-sm border border-[#1ed760] text-center">
                            Home / Today's Vibe<br/>
<span className="text-[10px] opacity-80 font-normal">Contextual Dashboard</span>
</div>

<div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-px bg-white/20"></div>
</div>

<div className="relative w-full max-w-6xl flex justify-between px-4">

<div className="absolute top-0 left-20 right-20 h-px bg-white/20 -translate-y-4"></div>

<div className="flex flex-col items-center relative flex-1">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 h-4 w-px bg-white/20"></div>
<div className="px-6 py-2 bg-[#121212] border border-white/10 text-white rounded-md text-sm font-medium mb-6 relative hover:border-[#1DB954]/50 transition-colors w-32 text-center">
                                Music
                            </div>
<div className="space-y-3 relative flex flex-col items-center">
<div className="absolute left-1/2 -translate-x-1/2 top-[-24px] bottom-4 w-px bg-white/10"></div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Catalog</div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Playlists</div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Upcoming Releases</div>
</div>
</div>

<div className="flex flex-col items-center relative flex-1">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 h-4 w-px bg-white/20"></div>
<div className="px-6 py-2 bg-[#121212] border border-white/10 text-white rounded-md text-sm font-medium mb-6 relative hover:border-[#1DB954]/50 transition-colors w-32 text-center">
                                Audience
                            </div>
<div className="space-y-3 relative flex flex-col items-center">
<div className="absolute left-1/2 -translate-x-1/2 top-[-24px] bottom-4 w-px bg-white/10"></div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Segments</div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Engagement Stats</div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Source of Stream</div>
</div>
</div>

<div className="flex flex-col items-center relative flex-1">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 h-4 w-px bg-white/20"></div>
<div className="px-6 py-2 bg-[#121212] border border-[#1DB954]/40 text-white rounded-md text-sm font-medium mb-6 relative shadow-[0_0_15px_rgba(29,185,84,0.1)] w-32 text-center">
                                Campaigns
                                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#1DB954] rounded-full"></div>
</div>
<div className="space-y-3 relative flex flex-col items-center">
<div className="absolute left-1/2 -translate-x-1/2 top-[-24px] bottom-4 w-px bg-white/10"></div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-white rounded text-xs w-36 text-center border-l-[#1DB954]">Marquee</div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Discovery Mode</div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Showcase</div>
</div>
</div>

<div className="flex flex-col items-center relative flex-1">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 h-4 w-px bg-white/20"></div>
<div className="px-6 py-2 bg-[#121212] border border-white/10 text-white rounded-md text-sm font-medium mb-6 relative hover:border-[#1DB954]/50 transition-colors w-32 text-center">
                                Commerce
                            </div>
<div className="space-y-3 relative flex flex-col items-center">
<div className="absolute left-1/2 -translate-x-1/2 top-[-24px] bottom-4 w-px bg-white/10"></div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Merch Store</div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Ticketing</div>
</div>
</div>

<div className="flex flex-col items-center relative flex-1">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 h-4 w-px bg-white/20"></div>
<div className="px-6 py-2 bg-[#121212] border border-white/10 text-white rounded-md text-sm font-medium mb-6 relative hover:border-[#1DB954]/50 transition-colors w-32 text-center">
                                Education
                            </div>
<div className="space-y-3 relative flex flex-col items-center">
<div className="absolute left-1/2 -translate-x-1/2 top-[-24px] bottom-4 w-px bg-white/10"></div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Masterclasses</div>
<div className="relative z-10 px-4 py-2 bg-[#18181B] border border-white/5 text-neutral-400 rounded text-xs w-36 text-center">Game Plan</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-4xl text-white font-semibold tracking-tighter mb-4">The Redesign</h2>
<p className="text-lg text-neutral-400">A modular, narrative-driven dashboard that prioritizes real-time signals and actionable context.</p>
</div>

<div className="relative bg-[#121212] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50 mx-auto max-w-5xl">

<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#18181B]">
<div className="flex items-center gap-4">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-neutral-500">artists.spotify.com/dashboard</div>
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10"></div>
</div>

<div className="flex h-[600px]">

<div className="w-64 border-r border-white/5 p-4 hidden md:flex flex-col gap-1 bg-[#121212]">
<div className="flex items-center gap-3 px-3 py-3 mb-6">
<div className="w-8 h-8 bg-[#1DB954] rounded flex items-center justify-center text-black font-bold">S</div>
<span className="text-white font-semibold tracking-tight text-sm">The Midnight</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5 text-white text-sm font-medium border border-white/5">
<i className="w-4 h-4" data-lucide="home" strokeWidth="1.5"></i> Home
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">
<i className="w-4 h-4" data-lucide="music" strokeWidth="1.5"></i> Music
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">
<i className="w-4 h-4" data-lucide="users" strokeWidth="1.5"></i> Audience
                            </div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors text-sm font-medium">
<i className="w-4 h-4" data-lucide="megaphone" strokeWidth="1.5"></i> Campaigns
                            </div>
</div>
<div className="mt-auto p-4 bg-gradient-to-br from-[#1DB954]/10 to-transparent rounded-xl border border-[#1DB954]/20">
<p className="text-xs text-[#1DB954] font-medium mb-1">New Milestone!</p>
<p className="text-xs text-white">1M Streams on "Sunset"</p>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-[#0A0A0A] p-8 relative">
<style>.no-scroll::-webkit-scrollbar { display: none; }</style>
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-white text-xl font-semibold tracking-tight">Good evening, The Midnight</h3>
<p className="text-xs text-neutral-500 mt-1">Today's Vibe: <span className="text-[#1DB954]">Building Momentum</span></p>
</div>
<button className="bg-white text-black px-4 py-2 rounded-full text-xs font-semibold hover:scale-105 transition-transform">Promote</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-[#18181B] p-6 rounded-xl border border-white/5 relative overflow-hidden group col-span-2">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#1DB954]/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-1">People listening now</p>
<h4 className="text-4xl text-white font-semibold tracking-tighter">842</h4>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#1DB954]/10 text-[#1DB954] text-[10px] font-bold uppercase tracking-widest border border-[#1DB954]/20">
<div className="w-1.5 h-1.5 bg-[#1DB954] rounded-full animate-pulse"></div> Live
                                    </div>
</div>

<div className="flex items-end gap-1 h-24 mt-4 w-full opacity-80">
<div className="flex-1 bg-white/5 hover:bg-[#1DB954] transition-colors rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-white/5 hover:bg-[#1DB954] transition-colors rounded-t-sm h-[60%]"></div>
<div className="flex-1 bg-white/5 hover:bg-[#1DB954] transition-colors rounded-t-sm h-[45%]"></div>
<div className="flex-1 bg-white/5 hover:bg-[#1DB954] transition-colors rounded-t-sm h-[70%]"></div>
<div className="flex-1 bg-white/5 hover:bg-[#1DB954] transition-colors rounded-t-sm h-[55%]"></div>
<div className="flex-1 bg-white/5 hover:bg-[#1DB954] transition-colors rounded-t-sm h-[80%]"></div>
<div className="flex-1 bg-white/5 hover:bg-[#1DB954] transition-colors rounded-t-sm h-[65%]"></div>
<div className="flex-1 bg-white/5 hover:bg-[#1DB954] transition-colors rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-white/5 hover:bg-[#1DB954] transition-colors rounded-t-sm h-[75%]"></div>
<div className="flex-1 bg-[#1DB954] rounded-t-sm h-[95%] shadow-[0_0_15px_rgba(29,185,84,0.5)]"></div>
</div>
</div>

<div className="bg-[#18181B] p-6 rounded-xl border border-white/5 flex flex-col justify-between">
<div>
<p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-4">Top Source</p>
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded flex items-center justify-center text-white text-xs font-bold shadow-lg">DW</div>
<div className="flex-1">
<p className="text-sm text-white font-medium">Discover Weekly</p>
<p className="text-xs text-neutral-500">+12% from last week</p>
</div>
</div>
</div>
<div className="text-xs text-neutral-400 leading-relaxed border-t border-white/5 pt-4">
                                    Your new track was added to <span className="text-white">14,203</span> Discover Weekly playlists today.
                                </div>
</div>
</div>

<div className="bg-[#18181B] rounded-xl border border-white/5 overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 flex justify-between items-center">
<h4 className="text-sm text-white font-medium">Top Songs (Last 24h)</h4>
<i className="text-neutral-500 w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</div>
<div className="p-2">
<div className="flex items-center justify-between p-3 hover:bg-white/5 rounded-lg transition-colors group cursor-pointer">
<div className="flex items-center gap-4">
<div className="text-xs text-neutral-500 w-4">1</div>
<div className="w-8 h-8 bg-neutral-700 rounded overflow-hidden">
<div className="w-full h-full bg-neutral-600"></div>
</div>
<div>
<div className="text-sm text-white font-medium">Deep Blue</div>
<div className="text-xs text-neutral-500">22,104 streams</div>
</div>
</div>
<div className="text-xs text-[#1DB954] font-medium">+14%</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<h2 className="text-3xl text-white font-medium tracking-tight mb-12">Design System Components</h2>
<div className="grid md:grid-cols-2 gap-12">

<div>
<h3 className="text-sm text-neutral-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Typography</h3>
<div className="space-y-6">
<div>
<div className="text-5xl text-white font-semibold tracking-tighter">Display 2X</div>
<div className="text-xs text-neutral-600 mt-1">Inter Semibold / Tracking -0.05em</div>
</div>
<div>
<div className="text-3xl text-white font-medium tracking-tight">Heading L</div>
<div className="text-xs text-neutral-600 mt-1">Inter Medium / Tracking -0.025em</div>
</div>
</div>
</div>

<div>
<h3 className="text-sm text-neutral-500 uppercase tracking-widest mb-6 border-b border-white/5 pb-2">Palette &amp; Elements</h3>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="h-20 bg-[#1DB954] rounded-lg border border-white/5 flex items-end p-3 text-white text-xs font-medium">Primary Green</div>
<div className="h-20 bg-[#121212] rounded-lg border border-white/10 flex items-end p-3 text-white text-xs font-medium">Surface 100</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between bg-[#121212] p-4 rounded-lg border border-white/10">
<span className="text-sm text-white">Toggle Component</span>
<div className="w-10 h-6 bg-[#1DB954] rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-neutral-500">
<i className="w-5 h-5" data-lucide="disc" strokeWidth="1.5"></i>
<span className="text-sm">Spotify for Artists Case Study</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Concept</a>
<a className="hover:text-white transition-colors" href="#">Process</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
