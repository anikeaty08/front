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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="iconify text-neutral-900" data-height="20" data-icon="lucide:presentation" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-semibold tracking-tight">Speaker Deck</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Explore</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Pricing</a>
<a className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Log in</a>
<a className="text-xs font-medium bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors" href="#">Sign up</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-neutral-50 to-transparent -z-10 pointer-events-none opacity-50"></div>
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-900 leading-[1.1] mb-6">
                Share presentations <br className="hidden md:block"/> beautifully, anywhere.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
                Publish, embed, and share slide decks online with clean design, fast loading, and full control over visibility.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                    Upload your first deck
                    <span className="iconify" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-neutral-200 text-neutral-600 rounded-full text-sm font-medium hover:border-neutral-300 hover:text-neutral-900 transition-colors">
                    Explore presentations
                </button>
</div>
</div>
</section>

<section className="py-20 px-6 border-b border-neutral-100">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">
                        The easiest way to share slide decks online
                    </h2>
<p className="text-neutral-500 leading-relaxed text-base mb-8">
                        Speaker Deck is a presentation sharing platform built for professionals who want their slides to look great, load fast, and be easy to share. Upload your deck once and publish it anywhere.
                    </p>
<div className="flex items-center gap-2 text-sm font-medium text-neutral-900">
<span className="iconify text-green-600" data-icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></span>
<span>Zero configuration hosting</span>
</div>
</div>

<div className="relative bg-neutral-50 border border-neutral-200 rounded-xl p-2 shadow-sm">
<div className="absolute top-4 left-4 flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200"></div>
</div>
<div className="bg-white rounded-lg shadow-sm border border-neutral-100 aspect-video flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 flex flex-col justify-center px-12">
<div className="w-1/3 h-6 bg-neutral-100 rounded mb-4"></div>
<div className="w-2/3 h-3 bg-neutral-50 rounded mb-2"></div>
<div className="w-1/2 h-3 bg-neutral-50 rounded"></div>

<div className="absolute right-12 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-neutral-100 flex items-center justify-center">
<div className="w-full h-full rounded-full border-t-4 border-r-4 border-neutral-900 rotate-45"></div>
</div>
</div>
</div>
<div className="flex justify-between items-center px-4 py-3">
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-200"></div>
<div className="w-24 h-2 bg-neutral-100 rounded my-auto"></div>
</div>
<div className="w-6 h-6 text-neutral-300">
<span className="iconify" data-icon="lucide:share-2" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 bg-white">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-8">Trusted by people who share ideas for a living</h2>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">

<span className="text-xl font-bold tracking-tighter text-neutral-800">ACME</span>
<span className="text-xl font-medium tracking-wide text-neutral-800 italic">Venture</span>
<span className="text-lg font-semibold tracking-normal text-neutral-800 flex items-center gap-1">
<div className="w-4 h-4 bg-neutral-800 rounded-sm"></div> Layers
                </span>
<span className="text-xl font-light tracking-tight text-neutral-800">horizon</span>
<span className="text-xl font-bold text-neutral-800">STACK</span>
</div>
<p className="mt-10 text-sm text-neutral-500 max-w-2xl mx-auto">
                From conference speakers and educators to designers, developers, and startup teams, Speaker Deck is used around the world to publish and share presentations.
            </p>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50">
<div className="max-w-6xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Who uses Speaker Deck</h2>
<p className="text-neutral-500">Speaker Deck is built for anyone who needs to share presentations publicly or privately.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 text-neutral-900">
<span className="iconify" data-icon="lucide:palette" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Designers and creatives</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Share visual work, talks, and portfolios in a clean, distraction-free format.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 text-neutral-900">
<span className="iconify" data-icon="lucide:code-2" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Developers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Publish technical talks, meetups, and conference presentations with easy embeds.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 text-neutral-900">
<span className="iconify" data-icon="lucide:graduation-cap" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Educators and students</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Share lectures, class materials, and learning resources online.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 text-neutral-900">
<span className="iconify" data-icon="lucide:rocket" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Founders</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Host pitch decks, internal presentations, and product talks.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
<div className="w-10 h-10 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 text-neutral-900">
<span className="iconify" data-icon="lucide:megaphone" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Marketers and consultants</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Publish thought leadership, workshops, and client presentations.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-neutral-100">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-6">Why Speaker Deck</h2>
<p className="text-neutral-500 text-lg leading-relaxed mb-8">
                    Speaker Deck focuses on what matters most when sharing presentations: clarity, control, and reliability.
                </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 min-w-[24px]">
<span className="iconify text-neutral-900" data-icon="lucide:monitor" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-base font-semibold text-neutral-900 mb-1">Beautiful by default</h3>
<p className="text-sm text-neutral-500">Your presentations are displayed cleanly on desktop, tablet, and mobile, without clutter or distractions.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 min-w-[24px]">
<span className="iconify text-neutral-900" data-icon="lucide:share-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-base font-semibold text-neutral-900 mb-1">Built for sharing</h3>
<p className="text-sm text-neutral-500">Share a link or embed your deck on websites, blogs, and documentation.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 min-w-[24px]">
<span className="iconify text-neutral-900" data-icon="lucide:lock" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-base font-semibold text-neutral-900 mb-1">Public or private presentations</h3>
<p className="text-sm text-neutral-500">Choose whether your decks are public, private, or password-protected.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 min-w-[24px]">
<span className="iconify text-neutral-900" data-icon="lucide:server" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<h3 className="text-base font-semibold text-neutral-900 mb-1">Reliable presentation hosting</h3>
<p className="text-sm text-neutral-500">Fast loading, stable hosting, and long-term access to your work.</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="relative bg-white shadow-lg border border-neutral-100 rounded-lg w-3/4 aspect-[4/3] flex flex-col">
<div className="h-8 border-b border-neutral-100 flex items-center px-4 gap-2">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="flex-1 p-8 flex flex-col items-center justify-center">
<div className="w-16 h-16 bg-neutral-100 rounded-full mb-4 flex items-center justify-center">
<span className="iconify text-neutral-400" data-icon="lucide:play" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="w-3/4 h-3 bg-neutral-100 rounded mb-2"></div>
<div className="w-1/2 h-3 bg-neutral-50 rounded"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 text-center mb-16">How Speaker Deck works</h2>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-neutral-100 -z-10"></div>

<div className="relative bg-white pt-4">
<div className="w-12 h-12 bg-white border border-neutral-200 text-neutral-900 rounded-full flex items-center justify-center text-sm font-semibold mb-6 mx-auto md:mx-0">1</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 text-center md:text-left">Upload your presentation</h3>
<p className="text-neutral-500 text-sm text-center md:text-left">Upload your slide deck in seconds. We handle the processing and optimization.</p>
</div>

<div className="relative bg-white pt-4">
<div className="w-12 h-12 bg-white border border-neutral-200 text-neutral-900 rounded-full flex items-center justify-center text-sm font-semibold mb-6 mx-auto md:mx-0">2</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 text-center md:text-left">Choose how it’s shared</h3>
<p className="text-neutral-500 text-sm text-center md:text-left">Set visibility, privacy, and sharing options to match your needs.</p>
</div>

<div className="relative bg-white pt-4">
<div className="w-12 h-12 bg-white border border-neutral-200 text-neutral-900 rounded-full flex items-center justify-center text-sm font-semibold mb-6 mx-auto md:mx-0">3</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2 text-center md:text-left">Share or embed anywhere</h3>
<p className="text-neutral-500 text-sm text-center md:text-left">Publish your presentation and share the link with confidence.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Explore presentations</h2>
<p className="text-neutral-500">Discover presentations from designers, developers, educators, and speakers around the world.</p>
</div>
<a className="text-sm font-medium text-neutral-900 border-b border-neutral-300 hover:border-neutral-900 transition-colors pb-0.5 inline-flex items-center gap-1" href="#">
                    Browse all
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="aspect-video bg-white border border-neutral-200 rounded-lg mb-3 overflow-hidden shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1 relative">
<div className="absolute inset-0 bg-neutral-100 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<span className="iconify" data-icon="lucide:code-2" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-1 truncate">State of React 2024</h3>
<p className="text-xs text-neutral-500">by Sarah Jenkins</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-white border border-neutral-200 rounded-lg mb-3 overflow-hidden shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1 relative">
<div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
<div className="text-white font-serif text-2xl italic">Type</div>
</div>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-1 truncate">Modern Typography Scale</h3>
<p className="text-xs text-neutral-500">by Design Dept</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-white border border-neutral-200 rounded-lg mb-3 overflow-hidden shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1 relative">
<div className="absolute inset-0 bg-neutral-50 flex items-center justify-center">
<div className="w-1/2 h-1/2 grid grid-cols-2 gap-2">
<div className="bg-neutral-200 rounded"></div>
<div className="bg-neutral-300 rounded"></div>
<div className="bg-neutral-300 rounded"></div>
<div className="bg-neutral-200 rounded"></div>
</div>
</div>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-1 truncate">Q4 Marketing Strategy</h3>
<p className="text-xs text-neutral-500">by Alex Rivera</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-white border border-neutral-200 rounded-lg mb-3 overflow-hidden shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1 relative">
<div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
<span className="iconify text-neutral-400" data-icon="lucide:zap" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<h3 className="text-sm font-medium text-neutral-900 mb-1 truncate">Startup Pitch Deck</h3>
<p className="text-xs text-neutral-500">by Founder Labs</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Free to start, powerful when you need more</h2>
<p className="text-neutral-500">Get started for free. Upgrade when you need more control over privacy and sharing.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-8 border border-neutral-200 rounded-2xl">
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Free</h3>
<p className="text-sm text-neutral-500 mb-6">Perfect for public speakers and open source.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-neutral-600">
<span className="iconify text-neutral-900 mt-0.5" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Public presentations
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<span className="iconify text-neutral-900 mt-0.5" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Easy sharing and embedding
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-600">
<span className="iconify text-neutral-900 mt-0.5" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Community discovery
                        </li>
</ul>
<a className="block w-full py-2.5 text-center text-sm font-medium text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors" href="#">Get started free</a>
</div>

<div className="p-8 border border-neutral-900 bg-neutral-900 text-white rounded-2xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
<h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
<p className="text-sm text-neutral-400 mb-6">For professionals who need control.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-white mt-0.5" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Private &amp; password-protected decks
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-white mt-0.5" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            No ads
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-white mt-0.5" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Advanced sharing controls
                        </li>
<li className="flex items-start gap-3 text-sm text-neutral-300">
<span className="iconify text-white mt-0.5" data-icon="lucide:check" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Scheduled publishing
                        </li>
</ul>
<a className="block w-full py-2.5 text-center text-sm font-medium text-neutral-900 bg-white hover:bg-neutral-100 rounded-full transition-colors" href="#">See Pro features</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-neutral-100 bg-neutral-50">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-neutral-900 mb-4">Start sharing your presentations today</h2>
<p className="text-neutral-500 mb-8">Upload your first deck in minutes. No credit card required.</p>
<button className="px-8 py-3 bg-neutral-900 text-white rounded-full text-sm font-medium hover:bg-neutral-800 transition-all hover:scale-[1.02]">
                Upload your first deck
            </button>
</div>
</section>

<footer className="bg-white py-12 px-6 border-t border-neutral-100">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<span className="iconify text-neutral-900" data-icon="lucide:presentation" data-width="20" style={{strokeWidth: '1.5'}}></span>
<span className="text-sm font-semibold tracking-tight">Speaker Deck</span>
</a>
<p className="text-xs text-neutral-500">
                    The easiest way to share presentations online.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Features</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Pricing</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Pro</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Community</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Explore</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Designers</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Developers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">About</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Terms</a></li>
<li><a className="text-sm text-neutral-500 hover:text-neutral-900" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-neutral-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-400">© 2024 Speaker Deck. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-neutral-400 hover:text-neutral-900" href="#"><span className="iconify" data-icon="lucide:github" data-width="16"></span></a>
</div>
</div>
</footer>

    </>
  );
}
