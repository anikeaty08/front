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
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9184aad8-b784-4d01-bf3b-708f6d39df1e_1600w.png?w=800&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed top-0 w-full bg-[#FAFAFA]/80 backdrop-blur-md z-50 border-b border-slate-200/50">
<div className="lg:px-8 flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-yellow-400 flex items-center justify-center shadow-sm">
<iconify-icon className="text-white text-2xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<span className="text-2xl font-semibold tracking-tight text-slate-900">$SolFam</span>
</div>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">About</a>
<a className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Community</a>
<a className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Tokenomics</a>
</div>
<div className="flex items-center gap-4">
<a className="p-2 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 rounded-lg shadow-sm transition-all hover:shadow-md flex items-center justify-center" href="#">
<iconify-icon className="text-xl" icon="solar:hashtag-linear"></iconify-icon>
</a>
<button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg font-medium text-lg hover:bg-slate-800 transition-colors shadow-sm">
                    Join Network
                    <iconify-icon className="text-lg text-slate-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-[url('https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center">

<div className="lg:bg-gradient-to-r lg:from-[#FAFAFA] lg:via-[#FAFAFA]/95 lg:to-transparent bg-[#FAFAFA]/90 absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="max-w-2xl">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
</span>
<span className="text-sm font-medium text-slate-700">The Heartbeat of Solana</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-8">
                    Not a project.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">This is a movement.</span>
</h1>
<p className="text-2xl font-medium tracking-tight text-slate-800 mb-6 leading-snug">
                    $SolFam isn’t just another meme coin — it’s the social layer of Solana.
                </p>
<div className="space-y-6 text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
<p className="">
                        In a space driven by speed, innovation, and culture, one thing has always been missing: a true sense of belonging. $SolFam fills that gap by uniting the entire ecosystem under one banner — builders, traders, creators, and every community that made this chain what it is today.
                    </p>
<p>
                        We represent the idea that no matter what token you hold, you’re part of something bigger. It turns competition into collaboration, hype into loyalty, and isolated communities into one unstoppable network effect.
                    </p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-slate-900 text-white rounded-xl font-medium text-lg hover:bg-slate-800 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group">
                        Become a Member
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-4 bg-white text-slate-900 rounded-xl font-medium text-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm flex items-center justify-center gap-2">
<iconify-icon className="text-xl text-slate-500" icon="solar:book-2-linear"></iconify-icon>
                        Read Manifesto
                    </button>
</div>
</div>

<div className="hidden lg:flex absolute right-8 bottom-8 bg-slate-900/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl items-center gap-3 border border-white/10">
<div className="w-3 h-3 rounded-full bg-green-400"></div>
<span className="text-sm font-medium text-white">Network Active</span>
</div>
</div>
</main>

<section className="border-t border-slate-200/60 bg-white py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Redefining Ecosystem Culture</h2>
<p className="text-lg text-slate-600 font-medium">We are building the foundational social infrastructure where every community thrives together.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 lg:gap-12">

<div className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-purple-600" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">True Belonging</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Creating a unified home for everyone on the network, breaking down silos between different projects and communities.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-blue-600" icon="solar:hand-shake-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Radical Collaboration</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Shifting the paradigm from zero-sum competition to positive-sum collaboration across the entire chain.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-[#FAFAFA] border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-orange-600" icon="solar:fire-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Unstoppable Effects</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Transforming short-term attention into long-term loyalty, creating a network effect that benefits all participants.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-slate-400" icon="solar:sun-2-linear"></iconify-icon>
<span className="text-lg font-medium text-slate-900 tracking-tight">$SolFam</span>
</div>
<p className="text-lg text-slate-500 font-medium text-center md:text-left">
                © 2024 The Social Layer of Solana. All rights reserved.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors flex items-center justify-center" href="#">
<iconify-icon className="text-xl" icon="solar:hashtag-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors flex items-center justify-center" href="#">
<iconify-icon className="text-xl" icon="solar:code-circle-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
