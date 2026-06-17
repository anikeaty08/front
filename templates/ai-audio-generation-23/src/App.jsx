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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="lucide:waves" strokeWidth="2" width="18"></iconify-icon>
</div>
<span className="self-center text-lg font-medium whitespace-nowrap text-white tracking-tighter group-hover:text-indigo-300 transition-colors">KLANG</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-white/5 hover:bg-white/10 focus:ring-4 focus:outline-none focus:ring-white/20 font-medium rounded-full text-sm px-5 py-2.5 text-center inline-flex items-center transition-all border border-white/10" type="button">
                    Get access
                    <iconify-icon className="ml-2" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-800 rounded-lg bg-gray-900/50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a aria-current="page" className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-indigo-400 transition-colors" href="#">Product</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#">Research</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#">Company</a>
</li>
<li>
<a className="block py-2 px-3 text-gray-400 rounded hover:bg-gray-800 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#">Pricing</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10 opacity-30 animate-blob"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[100px] -z-10 animate-blob animation-delay-2000"></div>
<div className="container mx-auto px-4 text-center z-10">

<div className="inline-flex items-center gap-x-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-3 py-1 mb-8 hover:border-indigo-500/50 transition-colors cursor-pointer group">
<span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Introducing Neural Audio 2.0</span>
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors" icon="lucide:chevron-right" strokeWidth="1.5" width="12"></iconify-icon>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                Audio generation <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">reimagined.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Create lifelike speech, sound effects, and music with our next-generation AI model. Designed for developers, creators, and visionaries.
            </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all hover:bg-gray-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-900" href="#">
<span className="mr-2">Start Creating</span>
<iconify-icon className="transition-transform group-hover:rotate-12" icon="lucide:sparkles" strokeWidth="1.5" width="16"></iconify-icon>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-10"></div>
</a>
<a className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 focus:outline-none focus:ring-2 focus:ring-gray-700" href="#">
                    Read the Research
                </a>
</div>

<div className="relative max-w-4xl mx-auto mt-12 p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-indigo-500/20 blur-[50px]"></div>
<div className="bg-[#0A0A0A] rounded-xl border border-white/5 overflow-hidden shadow-2xl relative">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs text-gray-500 font-mono">klang_model_v2.wav</div>
<iconify-icon className="text-gray-600" icon="lucide:more-horizontal" width="16"></iconify-icon>
</div>

<div className="h-64 flex items-center justify-center gap-1 px-8 py-12 relative group cursor-pointer">

<div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[1px]">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-lg hover:scale-110 transition-transform">
<iconify-icon className="text-white fill-white ml-1" icon="lucide:play" width="24"></iconify-icon>
</div>
</div>

<div className="w-1.5 bg-indigo-500/80 rounded-full wave-bar" style={{animationDuration: '0.8s', height: '40%'}}></div>
<div className="w-1.5 bg-indigo-500/80 rounded-full wave-bar" style={{animationDuration: '1.1s', height: '70%'}}></div>
<div className="w-1.5 bg-indigo-400/80 rounded-full wave-bar" style={{animationDuration: '1.3s', height: '50%'}}></div>
<div className="w-1.5 bg-purple-500/80 rounded-full wave-bar" style={{animationDuration: '0.9s', height: '90%'}}></div>
<div className="w-1.5 bg-purple-400/80 rounded-full wave-bar" style={{animationDuration: '1.5s', height: '30%'}}></div>
<div className="w-1.5 bg-pink-500/80 rounded-full wave-bar" style={{animationDuration: '1.0s', height: '60%'}}></div>
<div className="w-1.5 bg-indigo-500/80 rounded-full wave-bar" style={{animationDuration: '1.2s', height: '80%'}}></div>
<div className="w-1.5 bg-indigo-400/80 rounded-full wave-bar" style={{animationDuration: '1.4s', height: '45%'}}></div>
<div className="w-1.5 bg-purple-500/80 rounded-full wave-bar" style={{animationDuration: '0.7s', height: '75%'}}></div>
<div className="w-1.5 bg-purple-400/80 rounded-full wave-bar" style={{animationDuration: '1.6s', height: '25%'}}></div>
<div className="w-1.5 bg-pink-500/80 rounded-full wave-bar" style={{animationDuration: '1.1s', height: '65%'}}></div>
<div className="w-1.5 bg-indigo-500/80 rounded-full wave-bar" style={{animationDuration: '0.9s', height: '85%'}}></div>
<div className="w-1.5 bg-indigo-400/80 rounded-full wave-bar" style={{animationDuration: '1.3s', height: '55%'}}></div>
<div className="w-1.5 bg-purple-500/80 rounded-full wave-bar" style={{animationDuration: '1.0s', height: '40%'}}></div>
<div className="w-1.5 bg-purple-400/80 rounded-full wave-bar" style={{animationDuration: '1.4s', height: '95%'}}></div>
<div className="w-1.5 bg-pink-500/80 rounded-full wave-bar" style={{animationDuration: '0.8s', height: '50%'}}></div>

<div className="absolute inset-0 w-full h-full pointer-events-none" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
</div>
</div>

<div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs text-gray-400">Prompt</span>
<span className="text-sm text-gray-200">"Cinematic drone soundscape with deep bass and ethereal synth pads"</span>
</div>
<div className="flex items-center gap-3">
<button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white">
<iconify-icon icon="lucide:download" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="p-2 hover:bg-white/5 rounded-lg transition-colors text-gray-400 hover:text-white">
<iconify-icon icon="lucide:share-2" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
<p className="mt-8 text-xs text-gray-600 font-mono">TRUSTED BY INNOVATIVE TEAMS WORLDWIDE</p>
<div className="mt-6 flex flex-wrap justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">

<span className="text-lg font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:triangle" width="16"></iconify-icon> ACME</span>
<span className="text-lg font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:hexagon" width="16"></iconify-icon> POLYGON</span>
<span className="text-lg font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:circle-dashed" width="16"></iconify-icon> ORBIT</span>
<span className="text-lg font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:box" width="16"></iconify-icon> CUBE</span>
<span className="text-lg font-bold tracking-tight text-white flex items-center gap-1"><iconify-icon icon="lucide:wind" width="16"></iconify-icon> AERO</span>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative">
<div className="container mx-auto px-4 max-w-6xl">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Designed for sonic precision</h2>
<p className="text-lg text-slate-400 max-w-xl mx-auto">We've built the most advanced audio engine to date, giving you control over every frequency, timbre, and emotion.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors h-96">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-6 text-indigo-400 border border-indigo-500/20">
<iconify-icon icon="lucide:mic-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Voice Cloning</h3>
<p className="text-sm text-slate-400 max-w-md">Instantly clone voices with just 3 seconds of audio. Our model captures the nuances, breath, and intonation perfectly.</p>
</div>

<div className="mt-8 flex gap-2 items-end h-24 w-full opacity-50">
<div className="flex-1 bg-gradient-to-t from-indigo-900/50 to-transparent rounded-t-sm h-[40%]"></div>
<div className="flex-1 bg-gradient-to-t from-indigo-800/50 to-transparent rounded-t-sm h-[70%]"></div>
<div className="flex-1 bg-gradient-to-t from-indigo-700/50 to-transparent rounded-t-sm h-[50%]"></div>
<div className="flex-1 bg-gradient-to-t from-indigo-600/50 to-transparent rounded-t-sm h-[90%]"></div>
<div className="flex-1 bg-gradient-to-t from-indigo-700/50 to-transparent rounded-t-sm h-[60%]"></div>
<div className="flex-1 bg-gradient-to-t from-indigo-800/50 to-transparent rounded-t-sm h-[80%]"></div>
<div className="flex-1 bg-gradient-to-t from-indigo-900/50 to-transparent rounded-t-sm h-[30%]"></div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors h-96">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 h-full flex flex-col relative z-10">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20">
<iconify-icon icon="lucide:music" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Music Generation</h3>
<p className="text-sm text-slate-400 mb-8">Generate royalty-free background music tailored to your content's mood and pace.</p>
<div className="mt-auto relative">
<div className="absolute w-24 h-24 bg-purple-500/30 rounded-full blur-[40px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
<iconify-icon className="text-gray-700 mx-auto animate-[spin_10s_linear_infinite]" icon="lucide:disc-3" strokeWidth="1" width="80"></iconify-icon>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors p-8">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400 border border-pink-500/20">
<iconify-icon icon="lucide:languages" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Multilingual</h3>
<p className="text-sm text-slate-400">Support for over 50 languages with native accents and dialects instantly.</p>
</div>

<div className="relative group overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors p-8">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Real-time API</h3>
<p className="text-sm text-slate-400">Low latency API designed for conversational agents and live streaming.</p>
</div>

<div className="relative group overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors p-8">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-400 border border-orange-500/20">
<iconify-icon icon="lucide:sliders" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Granular Control</h3>
<p className="text-sm text-slate-400">Adjust pitch, speed, and emotion intensity with simple slider controls.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-gradient-to-b from-[#050505] to-[#080808]">
<div className="container mx-auto px-4 max-w-4xl">
<div className="flex flex-col md:flex-row items-center justify-between gap-12">
<div className="flex-1">
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">Seamless integration</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-1">Python &amp; Node.js SDKs</h4>
<p className="text-sm text-gray-400">Get started in minutes with our well-documented libraries.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="flex-shrink-0 mt-1">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
<iconify-icon icon="lucide:check" width="14"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-1">Websockets</h4>
<p className="text-sm text-gray-400">Stream audio in real-time for conversational AI.</p>
</div>
</div>
</div>
</div>

<div className="flex-1 w-full">
<div className="rounded-xl border border-white/10 bg-[#0C0C0C] p-4 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20">
<iconify-icon icon="lucide:file-code" width="48"></iconify-icon>
</div>
<div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
<span className="text-xs font-mono text-indigo-400">generate.js</span>
</div>
<pre className="font-mono text-xs leading-relaxed text-gray-300 overflow-x-auto">
<span className="text-purple-400">import</span> { Klang } <span className="text-purple-400">from</span> <span className="text-green-400">'@klang/sdk'</span>;

<span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> Klang(process.env.API_KEY);

<span className="text-purple-400">const</span> audio = <span className="text-purple-400">await</span> client.generate({
  text: <span className="text-green-400">"Welcome to the future of sound."</span>,
  voice: <span className="text-green-400">"rachel_v2"</span>,
  emotion: <span className="text-green-400">"excited"</span>
});

<span className="text-gray-500">// Save to file</span>
audio.save(<span className="text-green-400">'output.mp3'</span>);
</pre>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="container mx-auto px-4 max-w-6xl">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center space-x-2 mb-4" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="lucide:waves" width="14"></iconify-icon>
</div>
<span className="text-lg font-medium text-white tracking-tighter">KLANG</span>
</a>
<p className="text-sm text-gray-500 mb-6">Generative audio for the next generation of creators.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Resources</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">© 2023 Klang AI Inc. All rights reserved.</p>
<div className="flex space-x-4">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
