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
      

<nav className="fixed top-0 left-0 w-full z-50 border-b-2 border-neutral-800 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-cyan-400 border-2 border-white flex items-center justify-center group-hover:bg-violet-500 transition-colors duration-300">
<iconify-icon className="text-black" icon="lucide:zap" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tighter text-white uppercase group-hover:text-cyan-400 transition-colors">InPulze</span>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium hover:text-cyan-400 transition-colors" href="#features">Manifesto</a>
<a className="text-sm font-medium hover:text-violet-400 transition-colors" href="#artists">Artists</a>
<button className="bg-neutral-100 text-black border-2 border-black text-xs font-bold uppercase py-2 px-4 hover:bg-cyan-400 hover:border-cyan-400 transition-colors">
                    Login
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b-2 border-neutral-800 overflow-hidden">

<div className="absolute top-20 right-0 w-[600px] h-[600px] bg-violet-600 opacity-10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500 opacity-5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-cyan-500 bg-cyan-900/10 w-fit">
<span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Beta Access Open</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-5xl font-bold text-white tracking-tighter">THE GLOBAL <br/> <span className="text-gradient">GLUE</span> <br/> FOR MUSIC.</h1>
<p className="md:text-xl leading-relaxed text-lg text-neutral-400 max-w-xl">
                    The Universal Social network for your audio life. We decouple social networking from streaming so you can join the party regardless of whether you use Spotify, Apple Music, Tidal and more.
                </p>

<div className="mt-8 flex flex-col sm:flex-row gap-4 max-w-lg">
<input className="flex-1 bg-neutral-900 border-2 border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 h-[52px] focus:outline-none focus:border-cyan-400 focus:ring-0 transition-colors" placeholder="enter_your@email.com" type="email"/>
<button className="h-[52px] bg-cyan-400 text-black border-2 border-white font-bold uppercase tracking-wide px-8 neubrutalist-shadow-purple hover-lift active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-200 whitespace-nowrap">
                        Join the Beta
                    </button>
</div>
<div className="flex items-center gap-2 text-xs text-neutral-500 mt-2">
<iconify-icon className="text-violet-400" icon="lucide:ticket" width="16"></iconify-icon>
<span>Priority access granted for every friend you invite.</span>
</div>
</div>

<div className="lg:col-span-5 relative hidden lg:block">

<div className="absolute top-4 right-4 w-full h-full border-2 border-neutral-700 bg-neutral-900 z-0"></div>
<div className="absolute top-2 right-2 w-full h-full border-2 border-neutral-700 bg-neutral-800 z-10"></div>

<div className="relative w-full border-2 border-white bg-neutral-950 p-6 z-20 flex flex-col gap-4 neubrutalist-shadow-accent">
<div className="flex justify-between items-center border-b border-neutral-800 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-cyan-500 border border-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-violet-500 border border-neutral-800"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700 border border-neutral-800"></div>
</div>
<span className="text-xs font-mono text-neutral-500">LIVE_SESSION.exe</span>
</div>
<div className="flex items-center gap-4">
<div className="w-16 h-16 bg-neutral-800 border border-neutral-700 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-500/20"></div>
<iconify-icon className="text-cyan-400 animate-spin-slow relative z-10" icon="lucide:disc" width="32"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold text-white">Midnight City</div>
<div className="text-xs text-neutral-400">M83 • Hurry Up, We're Dreaming</div>
<div className="flex gap-2 mt-2">
<iconify-icon className="text-[#1DB954]" icon="lucide:music-2" width="12"></iconify-icon>
<iconify-icon className="text-[#FA243C]" icon="lucide:music" width="12"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:waves" width="12"></iconify-icon>
</div>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 p-3">
<div className="flex gap-3 mb-2">
<div className="w-6 h-6 bg-cyan-600 border border-black flex items-center justify-center text-[10px] font-bold text-black">A</div>
<p className="text-xs text-neutral-300"><span className="font-bold text-cyan-400">@alex:</span> That intro synth is timeless.</p>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 bg-violet-600 border border-black flex items-center justify-center text-[10px] font-bold text-white">S</div>
<p className="text-xs text-neutral-300"><span className="font-bold text-violet-400">@sarah:</span> Listening on Tidal, quality is insane.</p>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="w-full bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400 border-b-2 border-neutral-800 overflow-hidden py-3">
<div className="whitespace-nowrap flex gap-8 animate-marquee text-black font-bold uppercase tracking-tight text-sm">
<span>// Integrated with Spotify</span>
<span>// Integrated with Apple Music</span>
<span>// Integrated with Tidal</span>
<span>// Real-time Sync</span>
<span>// Blockchain Rewards</span>
<span>// Integrated with Spotify</span>
<span>// Integrated with Apple Music</span>
<span>// Integrated with Tidal</span>
<span>// Real-time Sync</span>
<span>// Blockchain Rewards</span>
<span>// Integrated with Spotify</span>
<span>// Integrated with Apple Music</span>
<span>// Integrated with Tidal</span>
<span>// Real-time Sync</span>
<span>// Blockchain Rewards</span>
</div>
</div>

<section className="py-24 px-6 border-b-2 border-neutral-800 bg-neutral-950 relative overflow-hidden">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16 relative z-10">
<h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                    THE SOCIAL LAYER <br/> <span className="text-gradient">FOR MUSIC</span>
</h2>
<div className="flex flex-wrap justify-center gap-4 mb-8">
<span className="px-4 py-1.5 border border-neutral-700 bg-neutral-900 rounded-full text-xs font-bold text-neutral-400 uppercase tracking-widest">
                        The Problem: Fragmented World
                    </span>
<iconify-icon className="text-neutral-600 hidden md:block mt-1" icon="lucide:arrow-right"></iconify-icon>
<span className="px-4 py-1.5 border border-violet-500/30 bg-violet-900/10 rounded-full text-xs font-bold text-violet-400 uppercase tracking-widest">
                        The Solution: InPulze Unites Everyone
                    </span>
</div>
</div>

<div className="relative w-full rounded-xl border-2 border-neutral-800 bg-neutral-900/50 p-4 md:p-6 neubrutalist-shadow-purple hover-lift-purple transition-all duration-500 group">

<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5 blur-3xl -z-10"></div>

<div className="relative overflow-hidden rounded border border-neutral-800 bg-neutral-950 aspect-[16/9] md:aspect-[2/1] flex items-center justify-center">
<img alt="InPulze Social Layer Diagram" className="group-hover:scale-[1.01] transition-transform duration-700 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://placehold.co/1200x600/0a0a0a/404040?text=InPulze+Diagram:+Social+Layer+Workflow"/>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-black/50 backdrop-blur-sm px-6 py-3 border border-white/10 rounded-full">
<span className="text-xs text-neutral-400 font-mono">REPLACE_WITH_DIAGRAM.PNG</span>
</div>
</div>
</div>

<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">

<div className="p-6 border border-neutral-800 bg-neutral-950/80 hover:border-cyan-400 hover:bg-neutral-900 transition-all duration-300 group/card">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-cyan-400 border border-white text-black font-bold flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] group-hover/card:shadow-none group-hover/card:translate-x-[2px] group-hover/card:translate-y-[2px] transition-all">1</div>
<h3 className="text-white font-bold tracking-tight text-lg">Listen Anywhere</h3>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">
                            A fan plays a new song on their preferred service (Spotify, Apple Music, etc). No platform lock-in required.
                        </p>
</div>

<div className="p-6 border border-neutral-800 bg-neutral-950/80 hover:border-violet-500 hover:bg-neutral-900 transition-all duration-300 group/card">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-violet-500 border border-white text-white font-bold flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] group-hover/card:shadow-none group-hover/card:translate-x-[2px] group-hover/card:translate-y-[2px] transition-all">2</div>
<h3 className="text-white font-bold tracking-tight text-lg">Tag the Moment</h3>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">
                            The user presses a button in InPulze, which uses acoustic fingerprinting to identify the song instantly.
                        </p>
</div>

<div className="p-6 border border-neutral-800 bg-neutral-950/80 hover:border-cyan-400 hover:bg-neutral-900 transition-all duration-300 group/card">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded bg-cyan-400 border border-white text-black font-bold flex items-center justify-center shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] group-hover/card:shadow-none group-hover/card:translate-x-[2px] group-hover/card:translate-y-[2px] transition-all">3</div>
<h3 className="text-white font-bold tracking-tight text-lg">Join the Party</h3>
</div>
<p className="text-neutral-400 text-sm leading-relaxed">
                            InPulze instantly places the user into a live "Listening Party" chatroom with the artist and other fans.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-6">UNCLUTTER THE <br/> NOISE.</h2>
<div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-violet-500"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="group relative bg-neutral-900 border-2 border-neutral-800 p-8 hover:border-cyan-400 transition-colors duration-300">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-cyan-400" icon="lucide:users" width="48"></iconify-icon>
</div>
<div className="mb-6 w-12 h-12 bg-neutral-800 border border-neutral-700 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors">
<iconify-icon icon="lucide:mic-2" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Listening Parties</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Experience intimate and accurate interaction with your favorite artists. Join live curated chatrooms while music plays in the background, synchronized across all platforms.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-300">
<iconify-icon className="text-cyan-400" icon="lucide:check"></iconify-icon> Real-time Sync
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-300">
<iconify-icon className="text-cyan-400" icon="lucide:check"></iconify-icon> Artist AMAs
                        </li>
</ul>
</article>

<article className="group relative bg-neutral-900 border-2 border-neutral-800 p-8 hover:border-violet-500 transition-colors duration-300">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-violet-500" icon="lucide:cpu" width="48"></iconify-icon>
</div>
<div className="mb-6 w-12 h-12 bg-neutral-800 border border-neutral-700 flex items-center justify-center text-violet-500 group-hover:text-white group-hover:bg-violet-500 transition-colors">
<iconify-icon icon="lucide:zap" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Powered by SensiML</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Cloud-independent intelligence. Our on-device ML identifies sound in real-time, even offline. Faster, private, and works without a signal.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-300">
<iconify-icon className="text-violet-500" icon="lucide:check"></iconify-icon> Zero Latency
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-300">
<iconify-icon className="text-violet-500" icon="lucide:check"></iconify-icon> Offline Recognition
                        </li>
</ul>
</article>

<article className="group relative bg-neutral-900 border-2 border-neutral-800 p-8 hover:border-cyan-400 transition-colors duration-300">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-cyan-400" icon="lucide:trophy" width="48"></iconify-icon>
</div>
<div className="mb-6 w-12 h-12 bg-neutral-800 border border-neutral-700 flex items-center justify-center text-cyan-400 group-hover:text-white group-hover:bg-cyan-500 transition-colors">
<iconify-icon icon="lucide:award" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Platinum Tonight</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        For the stans. We help mobilize global fanbases to drive streams and hit RIAA Gold/Platinum status within 24 hours of a release.
                    </p>
<div className="w-full bg-neutral-800 h-1 mt-4">
<div className="bg-gradient-to-r from-cyan-400 to-violet-500 h-1 w-[85%]"></div>
</div>
<div className="flex justify-between mt-1 text-[10px] text-neutral-500 uppercase font-mono">
<span>Goal</span>
<span className="">85% Complete</span>
</div>
</article>

<article className="group relative bg-neutral-900 border-2 border-neutral-800 p-8 hover:border-violet-500 transition-colors duration-300">
<div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-violet-500" icon="lucide:blocks" width="48"></iconify-icon>
</div>
<div className="mb-6 w-12 h-12 bg-neutral-800 border border-neutral-700 flex items-center justify-center text-violet-500 group-hover:text-white group-hover:bg-violet-500 transition-colors">
<iconify-icon icon="lucide:link" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Immutable Ledger</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        Your taste has value. Every like, click, and comment is recorded on-chain. Earn immutable rewards and prove you were a fan before they blew up.
                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-300">
<iconify-icon className="text-violet-500" icon="lucide:check"></iconify-icon> Verified Fandom
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-300">
<iconify-icon className="text-violet-500" icon="lucide:check"></iconify-icon> Tokenized Rewards
                        </li>
</ul>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 border-t-2 border-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-violet-600 opacity-[0.03] bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white mb-8">
                DON'T LISTEN <br/> ALONE.
            </h2>
<p className="text-neutral-400 mb-10 max-w-lg mx-auto">
                Join the waitlist. Invite friends. Help us build the future of music social networking.
            </p>
<form className="flex flex-col sm:flex-row gap-4 justify-center">
<input className="w-full sm:w-auto min-w-[300px] bg-neutral-900 border-2 border-neutral-700 text-white placeholder-neutral-500 px-6 py-4 focus:outline-none focus:border-cyan-400" placeholder="enter_your@email.com" type="email"/>
<button className="bg-cyan-400 text-black border-2 border-white font-bold uppercase tracking-wide px-8 py-4 neubrutalist-shadow-purple hover-lift active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-200">
                    Request Access
                </button>
</form>
</div>
</section>

<footer className="bg-neutral-950 border-t-2 border-neutral-800 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-neutral-800 border border-neutral-600 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="lucide:zap" width="14"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tighter text-white uppercase">InPulze</span>
</div>
<div className="flex flex-wrap gap-8 text-xs text-neutral-500 font-medium uppercase tracking-wider">
<a className="hover:text-cyan-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-cyan-400 transition-colors" href="#">Terms</a>
<a className="hover:text-violet-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-violet-400 transition-colors" href="#">Discord</a>
</div>
<div className="text-xs text-neutral-600">
                © 2024 InPulze Inc. All rights reserved.
            </div>
</div>
</footer>

<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 20s linear infinite;
        }
    </style>

    </>
  );
}
