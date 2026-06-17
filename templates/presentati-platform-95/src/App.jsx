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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
slate: {
850: '#1e293b',
900: '#0f172a',
}
}
}
}
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
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<span className="iconify text-slate-900" data-icon="lucide:layers" data-width="24"></span>
<span className="font-semibold tracking-tight text-lg">DECK</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#explore">Explore</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-gray-500 hover:text-slate-900" href="#">Sign in</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-sm" href="#">
                    Upload deck
                </a>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 border-b border-gray-100">
<div className="max-w-4xl mx-auto text-center">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-slate-900 leading-[1.1] mb-6">
                Share presentations <br className="hidden md:block"/> beautifully, anywhere.
            </h1>
<p className="text-lg md:text-xl text-gray-500 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
                The content-first platform for professionals to publish, embed, and share high-quality slide decks without the clutter.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-base font-medium px-8 py-3 rounded-lg transition-all shadow-sm flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:upload-cloud" data-width="18"></span>
                    Upload your first deck
                </button>
<button className="w-full sm:w-auto bg-white border border-gray-200 hover:border-gray-300 text-slate-700 text-base font-medium px-8 py-3 rounded-lg transition-all flex items-center justify-center gap-2">
                    Explore presentations
                </button>
</div>

<div className="relative w-full max-w-3xl mx-auto aspect-[16/9] bg-gray-50 rounded-xl border border-gray-200 shadow-2xl shadow-gray-200/50 overflow-hidden group">

<div className="h-8 bg-white border-b border-gray-100 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
</div>

<div className="absolute inset-0 top-8 flex items-center justify-center bg-white">
<div className="text-center space-y-4 opacity-50">
<div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
<span className="iconify text-gray-400" data-icon="lucide:image" data-width="32"></span>
</div>
<div className="h-4 bg-gray-100 rounded w-48 mx-auto"></div>
<div className="h-3 bg-gray-50 rounded w-32 mx-auto"></div>
</div>
</div>

<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500 flex items-center justify-center">
<div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<span className="bg-white text-slate-900 px-4 py-2 rounded-md font-medium text-sm shadow-lg">Preview Slide</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-gray-100 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-8">Trusted by people who share ideas for a living</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60">

<div className="flex items-center gap-2 text-lg font-bold text-slate-800 tracking-tight"><span className="iconify" data-icon="lucide:hexagon" data-width="24"></span> ACME</div>
<div className="flex items-center gap-2 text-lg font-bold text-slate-800 tracking-tight"><span className="iconify" data-icon="lucide:triangle" data-width="24"></span> VERTEX</div>
<div className="flex items-center gap-2 text-lg font-bold text-slate-800 tracking-tight"><span className="iconify" data-icon="lucide:circle-dashed" data-width="24"></span> ORBIT</div>
<div className="flex items-center gap-2 text-lg font-bold text-slate-800 tracking-tight"><span className="iconify" data-icon="lucide:box" data-width="24"></span> CUBE</div>
<div className="flex items-center gap-2 text-lg font-bold text-slate-800 tracking-tight"><span className="iconify" data-icon="lucide:command" data-width="24"></span> COMMAND</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="features">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900">
                    The easiest way to share slide decks online.
                </h2>
<p className="text-gray-500 text-lg leading-relaxed">
                    Stop sending large attachments. Upload your PDF presentation once and get a beautiful, embeddable link that looks great on any device. We optimize every slide for speed and clarity.
                </p>
<ul className="space-y-3 pt-4">
<li className="flex items-center gap-3 text-slate-700 font-medium">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="20"></span>
                        High-fidelity rendering
                    </li>
<li className="flex items-center gap-3 text-slate-700 font-medium">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="20"></span>
                        SEO-optimized text extraction
                    </li>
<li className="flex items-center gap-3 text-slate-700 font-medium">
<span className="iconify text-green-600" data-icon="lucide:check" data-width="20"></span>
                        Mobile responsive player
                    </li>
</ul>
</div>
<div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden">

<div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 max-w-sm mx-auto">
<div className="border-2 border-dashed border-gray-200 rounded-lg h-48 flex flex-col items-center justify-center gap-3 bg-gray-50/50">
<div className="p-3 bg-white rounded-full shadow-sm">
<span className="iconify text-slate-900" data-icon="lucide:file-up" data-width="24"></span>
</div>
<div className="text-center">
<p className="text-sm font-medium text-slate-900">Drop PDF here</p>
<p className="text-xs text-gray-400 mt-1">Max file size 50MB</p>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="h-2 bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-900 w-2/3"></div>
</div>
<div className="flex justify-between text-xs text-gray-500 font-medium">
<span>Uploading...</span>
<span>67%</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-12 text-center">Who uses Speaker Deck?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-purple-600" data-icon="lucide:pen-tool" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 mb-1">Designers</h3>
<p className="text-xs text-gray-500 leading-relaxed">Sharing portfolios and case studies.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-blue-600" data-icon="lucide:code-2" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 mb-1">Developers</h3>
<p className="text-xs text-gray-500 leading-relaxed">Tech talks, docs, and tutorials.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-amber-600" data-icon="lucide:graduation-cap" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 mb-1">Educators</h3>
<p className="text-xs text-gray-500 leading-relaxed">Lectures and course materials.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-green-600" data-icon="lucide:rocket" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 mb-1">Founders</h3>
<p className="text-xs text-gray-500 leading-relaxed">Pitch decks and company updates.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<span className="iconify text-red-600" data-icon="lucide:megaphone" data-width="20"></span>
</div>
<h3 className="font-medium text-slate-900 mb-1">Marketers</h3>
<p className="text-xs text-gray-500 leading-relaxed">Sales collateral and reports.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Why use Speaker Deck?</h2>
<p className="text-gray-500">We focus on one thing: making your slides look perfect on the web.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-start">
<div className="mb-4 p-3 rounded-lg bg-slate-50 border border-slate-100">
<span className="iconify text-slate-900" data-icon="lucide:layout" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Clean, distraction-free</h3>
<p className="text-sm text-gray-500 leading-relaxed">Your content takes center stage. No annoying popups, aggressive ads, or cluttered interfaces to distract your audience.</p>
</div>
<div className="flex flex-col items-start">
<div className="mb-4 p-3 rounded-lg bg-slate-50 border border-slate-100">
<span className="iconify text-slate-900" data-icon="lucide:share-2" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Embed anywhere</h3>
<p className="text-sm text-gray-500 leading-relaxed">Our responsive player works seamlessly on WordPress, Medium, Notion, and custom websites with a simple snippet.</p>
</div>
<div className="flex flex-col items-start">
<div className="mb-4 p-3 rounded-lg bg-slate-50 border border-slate-100">
<span className="iconify text-slate-900" data-icon="lucide:search" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Search indexed</h3>
<p className="text-sm text-gray-500 leading-relaxed">We extract text from your slides automatically, making your presentations discoverable by search engines.</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-slate-700 -z-10"></div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6">
<span className="text-2xl font-bold font-mono">1</span>
</div>
<h3 className="text-lg font-medium mb-2">Upload PDF</h3>
<p className="text-sm text-slate-400 max-w-xs">Export your Keynote, PowerPoint, or Figma deck to PDF and drag it in.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6">
<span className="text-2xl font-bold font-mono">2</span>
</div>
<h3 className="text-lg font-medium mb-2">Customize</h3>
<p className="text-sm text-slate-400 max-w-xs">Add a title, description, and choose between private or public visibility.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center mb-6">
<span className="text-2xl font-bold font-mono">3</span>
</div>
<h3 className="text-lg font-medium mb-2">Publish</h3>
<p className="text-sm text-slate-400 max-w-xs">Your deck is live. Share the link or copy the embed code immediately.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="explore">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Explore presentations</h2>
<p className="text-gray-500">Hand-picked decks from our community.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-slate-700 transition-colors" href="#">
                Browse all
                <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4 relative shadow-sm border border-gray-100">
<div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-gray-400" data-icon="lucide:image" data-width="32"></span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">The Future of Interface Design</h3>
<p className="text-xs text-gray-500">by Sarah Jenkins</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4 relative shadow-sm border border-gray-100">
<div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-gray-400" data-icon="lucide:image" data-width="32"></span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">Scaling React Applications</h3>
<p className="text-xs text-gray-500">by DevTeam One</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4 relative shadow-sm border border-gray-100">
<div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-gray-400" data-icon="lucide:image" data-width="32"></span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">Q3 Marketing Strategy</h3>
<p className="text-xs text-gray-500">by Growth Collective</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4 relative shadow-sm border border-gray-100">
<div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-gray-400" data-icon="lucide:image" data-width="32"></span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">Accessibility for Everyone</h3>
<p className="text-xs text-gray-500">by A11y Matters</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4 relative shadow-sm border border-gray-100">
<div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-gray-400" data-icon="lucide:image" data-width="32"></span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">Typography in 2024</h3>
<p className="text-xs text-gray-500">by Font Foundry</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4 relative shadow-sm border border-gray-100">
<div className="absolute inset-0 bg-gray-200/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<span className="iconify text-gray-400" data-icon="lucide:image" data-width="32"></span>
</div>
</div>
<h3 className="text-base font-medium text-slate-900 leading-tight mb-1 group-hover:text-blue-600 transition-colors">Zero to One: Startup Lessons</h3>
<p className="text-xs text-gray-500">by Founders Club</p>
</div>
</div>
<div className="mt-12 text-center sm:hidden">
<button className="border border-gray-200 text-slate-700 font-medium px-6 py-2.5 rounded-lg w-full">Browse presentations</button>
</div>
</section>

<section className="py-24 px-6 bg-gray-50 border-t border-gray-100" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Simple, transparent pricing</h2>
<div className="flex items-center justify-center gap-3">
<span className="text-sm font-medium text-gray-500">Monthly</span>
<label className="custom-toggle">
<input type="checkbox"/>
<span className="slider"></span>
</label>
<span className="text-sm font-medium text-slate-900">Yearly</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm relative">
<div className="mb-6">
<h3 className="text-lg font-semibold text-slate-900">Basic</h3>
<p className="text-gray-500 text-sm mt-1">For individuals just starting out.</p>
</div>
<div className="mb-8">
<span className="text-4xl font-semibold text-slate-900">$0</span>
<span className="text-gray-400 text-sm">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-700">
<span className="iconify text-slate-900 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Unlimited public uploads
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<span className="iconify text-slate-900 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Standard PDF rendering
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<span className="iconify text-slate-900 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Basic analytics
                        </li>
</ul>
<a className="block w-full py-3 text-center border border-gray-200 rounded-lg text-sm font-medium text-slate-900 hover:border-gray-300 transition-colors" href="#">
                        Get Started
                    </a>
</div>

<div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl relative text-white">
<div className="absolute top-0 right-0 m-4">
<span className="bg-blue-600 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Popular</span>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold text-white">Pro</h3>
<p className="text-slate-400 text-sm mt-1">For creators who need more control.</p>
</div>
<div className="mb-8">
<span className="text-4xl font-semibold text-white">$12</span>
<span className="text-slate-400 text-sm">/month</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-200">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Private decks
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Password protection
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Remove branding from player
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-200">
<span className="iconify text-blue-400 mt-0.5" data-icon="lucide:check" data-width="16"></span>
                            Advanced analytics
                        </li>
</ul>
<a className="block w-full py-3 text-center bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium text-white transition-colors" href="#">
                        Upgrade to Pro
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-gray-100">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Ready to share your ideas?</h2>
<p className="text-lg text-gray-500 mb-8">Join thousands of designers, developers, and educators sharing their work on Speaker Deck.</p>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-base font-medium px-8 py-3 rounded-lg transition-all shadow-md">
                Upload your deck now
            </button>
</div>
</section>

<footer className="py-12 px-6 border-t border-gray-100 bg-white">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-slate-900" data-icon="lucide:layers" data-width="20"></span>
<span className="font-semibold tracking-tight text-slate-900">DECK</span>
</div>
<div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
<a className="hover:text-slate-900 transition-colors" href="#">About</a>
<a className="hover:text-slate-900 transition-colors" href="#explore">Explore</a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
</div>
<div className="text-sm text-gray-400">
                © 2023 Deck Platform.
            </div>
</div>
</footer>

    </>
  );
}
