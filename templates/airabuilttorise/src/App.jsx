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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="font-serif text-lg font-medium tracking-tight text-slate-900" href="#">Prerna Pawar</a>
<div className="hidden md:flex items-center gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#knowledge">Knowledge</a>
<a className="hover:text-slate-900 transition-colors" href="#tutorials">Learning</a>
<a className="hover:text-slate-900 transition-colors" href="#resources">Resources</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</div>
<button className="md:hidden text-slate-500">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</nav>
<main className="w-full">

<section className="min-h-[85vh] flex flex-col justify-center px-6 pt-20 pb-12 max-w-5xl mx-auto" id="home">
<div className="max-w-3xl space-y-8 animate-fade-in-up">

<div className="w-12 h-1 bg-slate-200 rounded-full mb-4"></div>
<h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] text-slate-900">
                    I break down finance, analytics, and technology into clear, practical thinking.
                </h1>
<p className="text-lg md:text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
                    MBA in Finance <span className="mx-2 text-slate-300">|</span> Interested in how data and technology shape real decisions
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="group inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 transition-all" href="#knowledge">
                        Read my notes
                        <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex items-center gap-2 text-slate-600 px-5 py-2.5 rounded-lg text-sm font-medium border border-slate-200 hover:bg-slate-50 transition-colors" href="#tutorials">
                        Explore my work
                    </a>
</div>
</div>

<div className="absolute right-0 top-1/2 -translate-y-1/2 -z-10 opacity-30 blur-3xl pointer-events-none">
<div className="w-96 h-96 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
<div className="w-96 h-96 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -ml-20 -mt-20"></div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50/50" id="about">
<div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="font-serif text-3xl text-slate-900 tracking-tight sticky top-24">How I Think</h2>
</div>
<div className="md:col-span-8 space-y-8 text-lg text-slate-600 font-light leading-relaxed">
<p className="first-letter:text-5xl first-letter:font-serif first-letter:text-slate-900 first-letter:float-left first-letter:mr-3 first-letter:mt-[-4px]">
                        I’m interested in finance not as formulas, but as decision-making under uncertainty. Analytics helps — but only when judgment comes first.
                    </p>
<p>
                        In a world overflowing with raw data, the ability to synthesize noise into signal is the only true competitive advantage. I don't just run models; I question the assumptions behind them.
                    </p>
<div className="bg-white p-6 rounded-xl border border-slate-200 mt-8 shadow-sm">
<h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Focus Areas</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-800 mt-0.5" data-lucide="check"></i>
<span className="text-slate-800 text-sm">Solving complex valuation problems</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-800 mt-0.5" data-lucide="check"></i>
<span className="text-slate-800 text-sm">Bridging the gap between Python scripts and P&amp;L statements</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-slate-300 mt-0.5" data-lucide="x"></i>
<span className="text-slate-400 text-sm decoration-slate-300 line-through">Memorizing textbook definitions without context</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="knowledge">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-12 flex items-end justify-between">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight mb-2">Knowledge Hub</h2>
<p className="text-slate-500 text-sm">Notes on finance, systems, and mental models.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-slate-600 hover:text-slate-900" href="#">
                        View Archive <i className="ml-1 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="hover-card group relative bg-white rounded-2xl border border-slate-200 p-6 flex flex-col h-full cursor-pointer">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] uppercase tracking-wide font-semibold rounded">Finance Explained</span>
<span className="text-slate-400 text-xs">5 min read</span>
</div>
<h3 className="font-serif text-xl font-medium text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">The Art of Valuation</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                            Why DCF models fail when you ignore the narrative. A breakdown of how qualitative factors drive quantitative outcomes.
                        </p>
<div className="pt-4 border-t border-slate-50 flex items-center gap-2 text-xs text-slate-400 font-medium">
<span>Key Takeaway:</span>
<span className="text-slate-700">Story drives value.</span>
</div>
</article>

<article className="hover-card group relative bg-white rounded-2xl border border-slate-200 p-6 flex flex-col h-full cursor-pointer">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 bg-purple-50 text-purple-700 text-[10px] uppercase tracking-wide font-semibold rounded">Analytics</span>
<span className="text-slate-400 text-xs">8 min read</span>
</div>
<h3 className="font-serif text-xl font-medium text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">Decision Thinking vs. Data Mining</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                            More data doesn't mean better decisions. How to use mental models to filter signal from noise in financial datasets.
                        </p>
<div className="pt-4 border-t border-slate-50 flex items-center gap-2 text-xs text-slate-400 font-medium">
<span>Key Takeaway:</span>
<span className="text-slate-700">Invert the problem.</span>
</div>
</article>

<article className="hover-card group relative bg-white rounded-2xl border border-slate-200 p-6 flex flex-col h-full cursor-pointer">
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-[10px] uppercase tracking-wide font-semibold rounded">Technology</span>
<span className="text-slate-400 text-xs">4 min read</span>
</div>
<h3 className="font-serif text-xl font-medium text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">Python for Finance Rookies</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4 flex-grow">
                            Moving beyond Excel. Simple scripts to automate financial statement analysis and visualization.
                        </p>
<div className="pt-4 border-t border-slate-50 flex items-center gap-2 text-xs text-slate-400 font-medium">
<span>Key Takeaway:</span>
<span className="text-slate-700">Automate the boring.</span>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-50" id="tutorials">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-10">
<h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight mb-2">Learning Paths</h2>
<p className="text-slate-500 text-sm">Structured guides to help you understand what I understand.</p>
</div>
<div className="space-y-4">

<div className="group bg-white rounded-xl border border-slate-200 p-1 hover:border-slate-300 transition-colors">
<div className="flex flex-col md:flex-row md:items-center p-5 gap-6">
<div className="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-indigo-600" data-lucide="bar-chart-3"></i>
</div>
<div className="flex-grow">
<h3 className="text-lg font-medium text-slate-900">Understanding Financial Statements</h3>
<p className="text-sm text-slate-500 mt-1">From beginner concepts to advanced forensic analysis. Learn how to read between the lines of a 10-K.</p>
</div>
<div className="shrink-0">
<button className="text-sm font-medium text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg group-hover:bg-indigo-100 transition-colors">Start Path</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-1 hover:border-slate-300 transition-colors">
<div className="flex flex-col md:flex-row md:items-center p-5 gap-6">
<div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-orange-600" data-lucide="brain-circuit"></i>
</div>
<div className="flex-grow">
<h3 className="text-lg font-medium text-slate-900">Analytics for Finance Professionals</h3>
<p className="text-sm text-slate-500 mt-1">Bridging the gap between traditional finance and modern data science. SQL, Python, and Tableau basics.</p>
</div>
<div className="shrink-0">
<button className="text-sm font-medium text-orange-600 bg-orange-50 px-4 py-2 rounded-lg group-hover:bg-orange-100 transition-colors">Start Path</button>
</div>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 p-1 hover:border-slate-300 transition-colors">
<div className="flex flex-col md:flex-row md:items-center p-5 gap-6">
<div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
<i className="w-6 h-6 text-slate-600" data-lucide="hammer"></i>
</div>
<div className="flex-grow">
<h3 className="text-lg font-medium text-slate-900">Tools I Use to Think Better</h3>
<p className="text-sm text-slate-500 mt-1">A curated walkthrough of my digital brain. Notion setups, research workflows, and daily habits.</p>
</div>
<div className="shrink-0">
<button className="text-sm font-medium text-slate-600 bg-slate-100 px-4 py-2 rounded-lg group-hover:bg-slate-200 transition-colors">View Tools</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="resources">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight mb-2">Tools &amp; Resources</h2>
<p className="text-slate-500 text-sm">Things I personally use to get work done.</p>
</div>
<div className="mt-4 md:mt-0 text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">
<i className="w-3 h-3 inline mr-1" data-lucide="info"></i> Transparency: Some links may be affiliate links.
                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">Books</h3>
<a className="block group" href="#">
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Thinking, Fast and Slow</h4>
<p className="text-xs text-slate-500">Daniel Kahneman</p>
</a>
<a className="block group" href="#">
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">The Intelligent Investor</h4>
<p className="text-xs text-slate-500">Benjamin Graham</p>
</a>
<a className="block group" href="#">
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Poor Charlie's Almanack</h4>
<p className="text-xs text-slate-500">Charlie Munger</p>
</a>
</div>

<div className="space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">Tech Stack</h3>
<a className="block group" href="#">
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Notion</h4>
<p className="text-xs text-slate-500">Second brain &amp; project management</p>
</a>
<a className="block group" href="#">
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Python (Pandas)</h4>
<p className="text-xs text-slate-500">Data analysis</p>
</a>
<a className="block group" href="#">
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Perplexity AI</h4>
<p className="text-xs text-slate-500">Research assistant</p>
</a>
</div>

<div className="space-y-4">
<h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">Courses</h3>
<a className="block group" href="#">
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Damodaran on Valuation</h4>
<p className="text-xs text-slate-500">NYU Stern (Free)</p>
</a>
<a className="block group" href="#">
<h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors">Google Data Analytics</h4>
<p className="text-xs text-slate-500">Coursera</p>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100 bg-slate-900 text-white" id="contact">
<div className="max-w-5xl mx-auto px-6 text-center">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6">Let's build something thoughtful.</h2>
<p className="text-slate-400 text-lg font-light mb-10">Open to collaborations, research, and thoughtful projects.</p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
                        Connect on LinkedIn
                    </a>
<a className="inline-flex items-center gap-2 bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-slate-700 transition-colors" href="mailto:email@example.com">
<i className="w-4 h-4" data-lucide="mail"></i>
                        Send me an email
                    </a>
</div>
<div className="mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2025 Prerna Pawar. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-300 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
