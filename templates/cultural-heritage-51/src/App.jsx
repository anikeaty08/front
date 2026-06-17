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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#FCFBF9]/80 border-b border-gray-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-gray-900 uppercase flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-rose-800"></span>
                    VEZILKA
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
<a className="text-gray-900 transition-colors" href="#">The Mission</a>
<a className="hover:text-gray-900 transition-colors" href="#">Contribute</a>
<a className="hover:text-gray-900 transition-colors" href="#">Corpus</a>
<a className="hover:text-gray-900 transition-colors" href="#">Partners</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm font-medium">
<a className="hidden sm:block text-gray-500 hover:text-gray-900 transition-colors" href="#">Sign in</a>
<button className="bg-gray-900 text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all shadow-sm">
                    Start Contributing
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-mesh">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-100 text-rose-800 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
                National Digitization Initiative
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-gray-900 leading-[1.05] mb-6">
                Preserve the Macedonian <br className="hidden md:block"/> language for tomorrow.
            </h1>
<p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Thousands of books, manuscripts, and voices exist only in physical form. Join a national movement to digitize, correct, and protect our cultural heritage before it fades from the digital future.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-rose-900 text-white px-8 py-3.5 rounded-full hover:bg-rose-800 transition-all shadow-lg shadow-rose-900/20 text-sm font-medium flex items-center justify-center gap-2">
                    Contribute Now
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white text-gray-700 border border-gray-200 px-8 py-3.5 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-medium">
                    See how it works
                </button>
</div>
</div>

<div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-3xl -z-10"></div>
<div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl -z-10"></div>
</section>

<section className="border-y border-gray-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-xs font-medium text-gray-400 uppercase tracking-widest text-center mb-8">Collective Impact to Date</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-1">2.4M</div>
<div className="text-sm text-gray-500 font-medium">Pages Digitized</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-1">840k</div>
<div className="text-sm text-gray-500 font-medium">Words Corrected</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-1">12.5k</div>
<div className="text-sm text-gray-500 font-medium">Manuscripts Transcribed</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-1">450h</div>
<div className="text-sm text-gray-500 font-medium">Audio Donated</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-4">Every action matters.</h2>
<p className="text-base text-gray-600 font-light leading-relaxed">
                    Choose how you want to help. Whether you have 2 minutes to verify a word or an hour to transcribe a manuscript, your contribution builds the open digital corpus of our language.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<a className="group block p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-300 transition-all duration-300 flex flex-col h-full" href="#">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-rose-50">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-rose-800" icon="solar:scanner-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">Digitize Print</h3>
<p className="text-sm text-gray-500 mb-6 font-light flex-grow">Upload scanned books or documents. Our system extracts the text automatically.</p>
<div className="flex items-center text-sm font-medium text-rose-800 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        Start uploading <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group block p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-300 transition-all duration-300 flex flex-col h-full" href="#">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-rose-50">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-rose-800" icon="solar:spell-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-2">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Correct Text</h3>
<span className="bg-amber-100 text-amber-800 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">Fast</span>
</div>
<p className="text-sm text-gray-500 mb-6 font-light flex-grow">Help fix mistakes made by the computer when reading scanned pages.</p>
<div className="flex items-center text-sm font-medium text-rose-800 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        Start correcting <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group block p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-300 transition-all duration-300 flex flex-col h-full relative overflow-hidden" href="#">
<div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-amber-100">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-amber-800" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center gap-2 mb-2">
<h3 className="text-lg font-medium text-gray-900 tracking-tight">Transcribe</h3>
<span className="bg-gray-100 text-gray-600 text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">High Need</span>
</div>
<p className="text-sm text-gray-500 mb-6 font-light flex-grow">Read historical handwritten documents and type what you see.</p>
<div className="flex items-center text-sm font-medium text-amber-700 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        Start transcribing <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>

<a className="group block p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:shadow-gray-200/50 hover:border-gray-300 transition-all duration-300 flex flex-col h-full" href="#">
<div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-rose-50">
<iconify-icon className="text-2xl text-gray-700 group-hover:text-rose-800" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">Donate Voice</h3>
<p className="text-sm text-gray-500 mb-6 font-light flex-grow">Read short text passages aloud to help build speech recognition for Macedonian.</p>
<div className="flex items-center text-sm font-medium text-rose-800 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                        Start recording <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(136,19,55,0.15)_0,transparent_100%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-white">Start fast. Stay guided.</h2>
<p className="text-base text-gray-400 font-light">
                        We designed the tools to be entirely frictionless. No technical knowledge required. Just read, type, and help preserve history. Here is what transcribing looks like.
                    </p>
</div>
</div>

<div className="rounded-2xl border border-gray-700 bg-[#1A1D24] shadow-2xl overflow-hidden flex flex-col">

<div className="h-12 border-b border-gray-800 flex items-center justify-between px-4 bg-[#14161B]">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-gray-700"></div>
<div className="w-3 h-3 rounded-full bg-gray-700"></div>
<div className="w-3 h-3 rounded-full bg-gray-700"></div>
</div>
<span className="text-xs font-medium text-gray-400 ml-2 border-l border-gray-700 pl-4">Task: Handwritten Transcription</span>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-gray-400">
<span className="flex items-center gap-1"><iconify-icon className="text-sm" icon="solar:info-circle-linear"></iconify-icon> Need help?</span>
<button className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-md text-white transition-colors">Exit</button>
</div>
</div>

<div className="flex flex-col md:flex-row h-[500px]">

<div className="w-full md:w-1/2 border-r border-gray-800 bg-[#1A1D24] relative flex flex-col">
<div className="p-3 border-b border-gray-800 flex justify-between items-center">
<span className="text-xs text-gray-400 font-medium">Original Document</span>
<div className="flex items-center gap-2">
<button className="p-1.5 rounded hover:bg-gray-800 text-gray-400 transition-colors"><iconify-icon icon="solar:minus-circle-linear"></iconify-icon></button>
<span className="text-xs text-gray-500">100%</span>
<button className="p-1.5 rounded hover:bg-gray-800 text-gray-400 transition-colors"><iconify-icon icon="solar:add-circle-linear"></iconify-icon></button>
</div>
</div>
<div className="flex-grow p-6 flex items-center justify-center overflow-hidden relative">

<div className="w-full h-full max-w-sm paper-texture rounded shadow-lg p-8 relative rotate-1">
<div className="space-y-4 opacity-70">
<div className="h-3 w-3/4 bg-gray-800/20 rounded blur-[1px]"></div>
<div className="h-3 w-full bg-gray-800/20 rounded blur-[1px]"></div>
<div className="h-3 w-5/6 bg-gray-800/20 rounded blur-[1px]"></div>
<div className="h-3 w-full bg-gray-800/20 rounded blur-[1px]"></div>
<div className="h-3 w-4/5 bg-gray-800/20 rounded blur-[1px]"></div>
</div>

<div className="absolute top-[4.5rem] left-6 right-6 h-6 border-2 border-amber-500/50 bg-amber-500/10 rounded animate-pulse pointer-events-none"></div>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-gray-800 border border-gray-700 p-4 rounded-xl shadow-xl flex gap-3 items-start">
<div className="mt-0.5 text-amber-500"><iconify-icon className="text-xl" icon="solar:lightbulb-bolt-linear"></iconify-icon></div>
<div>
<p className="text-sm font-medium text-white mb-1">Type exactly what you see</p>
<p className="text-xs text-gray-400">Include mistakes or old spellings. Do not correct the grammar. Your transcription helps train systems to read historical texts.</p>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 bg-[#0E1015] flex flex-col">
<div className="p-3 border-b border-gray-800">
<span className="text-xs text-gray-400 font-medium">Your Transcription</span>
</div>
<div className="flex-grow p-6 flex flex-col">
<textarea className="w-full flex-grow bg-transparent border-none text-gray-200 text-lg leading-relaxed focus:ring-0 resize-none placeholder-gray-700 outline-none" placeholder="Start typing here..."></textarea>
<div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-800">
<label className="flex items-center cursor-pointer gap-2">
<div className="relative">
<input className="sr-only custom-toggle" type="checkbox"/>
<div className="block bg-gray-700 w-8 h-5 rounded-full transition-colors">
<div className="absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition-transform"></div>
</div>
</div>
<span className="text-xs font-medium text-gray-400">Unreadable word?</span>
</label>
<div className="flex gap-3">
<button className="px-4 py-2 rounded-lg text-xs font-medium text-gray-400 hover:text-white transition-colors">Skip</button>
<button className="bg-white text-gray-900 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
                                        Submit <iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-gray-200">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-xs font-medium mb-6">
<iconify-icon icon="solar:cup-star-linear"></iconify-icon>
                    Community Recognition
                </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-gray-900 mb-6">Your personal impact, visualized.</h2>
<p className="text-base text-gray-600 font-light mb-8 leading-relaxed">
                    By creating an account, you join a community of guardians. Track your contributions, maintain streaks, earn meaningful badges, and see how your individual effort builds a national resource.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-rose-800 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-700 font-medium">Personal dashboard with detailed statistics</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-rose-800 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-700 font-medium">Earn titles like "Manuscript Guardian" or "Voice of Macedonian"</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-rose-800 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-700 font-medium">Participate in weekly community challenges</span>
</li>
</ul>
<button className="bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all text-sm font-medium shadow-sm">
                    Create free account
                </button>
<p className="mt-4 text-xs text-gray-500 font-light">Or contribute anonymously. Every action counts.</p>
</div>

<div className="w-full lg:w-1/2 relative">

<div className="absolute inset-0 bg-gray-50 rounded-3xl transform rotate-3 scale-105 -z-10 border border-gray-100"></div>
<div className="bg-white border border-gray-200 rounded-2xl shadow-xl p-6 md:p-8">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-rose-100 text-rose-800 flex items-center justify-center font-semibold text-lg border border-rose-200">
                                AM
                            </div>
<div>
<h4 className="font-medium text-gray-900">Ana M.</h4>
<p className="text-xs text-gray-500">Joined Oct 2023</p>
</div>
</div>
<div className="flex items-center gap-1.5 bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full border border-orange-100">
<iconify-icon className="text-base" icon="solar:fire-bold"></iconify-icon>
<span className="text-xs font-semibold">12 Day Streak</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
<p className="text-xs text-gray-500 font-medium mb-1">Total Contributions</p>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">1,204</p>
</div>
<div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
<p className="text-xs text-gray-500 font-medium mb-1">Global Rank</p>
<p className="text-2xl font-semibold text-gray-900 tracking-tight">#142</p>
</div>
</div>
<div>
<h5 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">Recent Badges</h5>
<div className="flex gap-4">
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-amber-800" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-gray-600 text-center leading-tight">Manuscript<br/>Guardian</span>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-100 to-rose-200 border border-rose-300 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-rose-800" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-gray-600 text-center leading-tight">Voice of<br/>Macedonian</span>
</div>
<div className="flex flex-col items-center gap-2 opacity-40">
<div className="w-14 h-14 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
<iconify-icon className="text-xl text-gray-400" icon="solar:lock-linear"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-gray-400 text-center leading-tight">OCR<br/>Master</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#FCFBF9] pt-20 pb-10 px-6 border-t border-gray-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-gray-900 uppercase flex items-center gap-2 mb-4" href="#">
<span className="w-2 h-2 rounded-full bg-rose-800"></span>
                        VEZILKA
                    </a>
<p className="text-sm text-gray-500 font-light max-w-sm leading-relaxed mb-6">
                        A national platform dedicated to preserving, enriching, and digitizing the Macedonian language and cultural heritage through community-powered contributions.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:link-linear"></iconify-icon>
</a>
</div>
</div>
<div>
<h6 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">Contribute</h6>
<ul className="space-y-3 text-sm font-medium text-gray-500">
<li><a className="hover:text-rose-800 transition-colors" href="#">Digitize Books</a></li>
<li><a className="hover:text-rose-800 transition-colors" href="#">Correct OCR</a></li>
<li><a className="hover:text-rose-800 transition-colors" href="#">Transcribe Manuscripts</a></li>
<li><a className="hover:text-rose-800 transition-colors" href="#">Donate Audio</a></li>
</ul>
</div>
<div>
<h6 className="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-4">Initiative</h6>
<ul className="space-y-3 text-sm font-medium text-gray-500">
<li><a className="hover:text-gray-900 transition-colors" href="#">About the Mission</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Cultural Partners</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Open Data Access</a></li>
<li><a className="hover:text-gray-900 transition-colors" href="#">Terms &amp; Privacy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400 font-medium">© 2023 Vezilka Initiative. All contributions are open source.</p>
<div className="flex items-center gap-6 text-xs font-medium text-gray-400">
<span>Designed for accessibility</span>
<span>High contrast mode</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
