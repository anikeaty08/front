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
zinc: {
850: '#1f1f22',
950: '#09090b',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-zinc-950">
<span className="iconify" data-icon="lucide:copyright" data-strokeWidth="2.5" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-white group-hover:opacity-80 transition-opacity">COPYRIGHT MASTER</span>
</a>

<div className="hidden md:flex items-center gap-2 text-xs text-zinc-500">
<span className="iconify" data-icon="lucide:slash" data-width="12"></span>
<span className="hover:text-zinc-300 transition-colors cursor-pointer">Module 1</span>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="text-zinc-200">Lesson 1.3</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-xs">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-zinc-300">Your Progress: 12%</span>
</div>
<button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-zinc-700 transition-colors">
<span className="iconify text-white" data-icon="lucide:user" data-width="14"></span>
</button>
</div>
</div>
</nav>

<div className="pt-24 pb-20 max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

<div className="lg:col-span-8">

<div className="relative w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl group mb-8">

<div className="absolute inset-0 bg-zinc-800 flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-50"></div>
<div className="absolute inset-0 bg-black/40"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<button className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
<span className="iconify ml-1" data-icon="lucide:play" data-strokeWidth="2" data-width="28"></span>
</button>
</div>

<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer overflow-hidden">
<div className="h-full w-1/3 bg-emerald-500 rounded-full relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100"></div>
</div>
</div>
<div className="flex items-center justify-between text-white">
<div className="flex items-center gap-4">
<button><span className="iconify" data-icon="lucide:play" data-width="18"></span></button>
<button><span className="iconify" data-icon="lucide:volume-2" data-width="18"></span></button>
<span className="text-xs font-medium">04:12 / 12:30</span>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium px-2 py-1 bg-white/10 rounded hover:bg-white/20">1x</button>
<button><span className="iconify" data-icon="lucide:maximize" data-width="18"></span></button>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 border-b border-white/5 pb-8">
<div>
<h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-2">Fair Use &amp; The Four Factors</h1>
<p className="text-sm text-zinc-500">Last updated October 2024</p>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 text-zinc-300 text-sm transition-colors">
<span className="iconify" data-icon="lucide:download" data-width="16"></span>
<span>Slides</span>
</button>
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-zinc-950 hover:bg-zinc-200 font-medium text-sm transition-colors">
<span>Next Lesson</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="max-w-2xl mx-auto">
<div className="flex items-center gap-3 mb-8">
<span className="text-xs font-semibold tracking-wider text-emerald-500 uppercase">Transcript</span>
<div className="h-px flex-grow bg-zinc-800"></div>
</div>
<article className="prose-custom text-zinc-300 text-base md:text-[1.0625rem] font-light tracking-normal">
<p className="text-white text-xl font-medium mb-8 leading-normal">
                            In this lesson, we are tackling the most misunderstood concept in all of copyright law: Fair Use.
                        </p>
<p>
                            If you've spent any time on YouTube or Twitter, you've heard people shout "Fair Use!" as a shield for almost any kind of copying. But the legal reality is far more nuanced. Fair use isn't a right; it's a <em>defensive argument</em> you make in court after you've been accused of infringement.
                        </p>
<h3 className="text-white font-medium text-lg">The Four Factors of Analysis</h3>
<p>
                            Courts in the United States look at four specific factors to determine if a use is fair. You cannot look at just one; you must weigh them all together.
                        </p>
<ul className="text-zinc-400 marker:text-zinc-600">
<li><strong>1. Purpose and Character:</strong> Is your work transformative? Does it add new meaning or expression? Commercial uses are less likely to be fair, while non-profit educational uses are more likely.</li>
<li><strong>2. Nature of the Copyrighted Work:</strong> Is the original work factual or highly creative? You have more leeway to use factual works.</li>
<li><strong>3. Amount and Substantiality:</strong> Did you take the "heart" of the work? Even a small clip can be infringing if it's the most important part.</li>
<li><strong>4. Effect on the Market:</strong> Does your use replace the need for the original? If people buy your version instead of the original, it's likely not fair use.</li>
</ul>
<h3 className="text-white font-medium text-lg">The Transformative Test</h3>
<p>
                            Since the Supreme Court ruling in <em>Campbell v. Acuff-Rose Music</em>, the concept of "transformativeness" has become the dominant factor. Essentially, does your work supersede the objects of the original creation, or does it add something new, with a further purpose or different character?
                        </p>

<div className="my-8 pl-6 border-l-2 border-emerald-500/50 italic text-zinc-400">
                            "The goal of copyright, to promote science and the arts, is generally furthered by the creation of transformative works."
                        </div>
<p>
                            However, simply adding commentary isn't always enough. In the recent <em>Warhol v. Goldsmith</em> case, the court tightened these restrictions significantly for visual arts. We will dive deeper into the Warhol case in module 4, but keep in mind: the "transformative" argument is not a magic wand.
                        </p>
<p>
                            When drafting your content strategy, always ask yourself: Am I creating something new, or am I just saving myself the effort of creating the original asset? If it's the latter, you are in dangerous territory.
                        </p>
</article>

<div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
<div className="flex gap-4">
<span className="text-xs text-zinc-500">Was this helpful?</span>
<button className="text-zinc-500 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:thumbs-up" data-width="16"></span></button>
<button className="text-zinc-500 hover:text-white transition-colors"><span className="iconify" data-icon="lucide:thumbs-down" data-width="16"></span></button>
</div>
<a className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-1" href="#">
                            Report an issue
                            <span className="iconify" data-icon="lucide:flag" data-width="12"></span>
</a>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="glass-panel p-5 rounded-xl flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex-shrink-0 border border-white/10 overflow-hidden">
<img alt="Instructor" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Sarah+K&amp;background=27272a&amp;color=fff"/>
</div>
<div>
<p className="text-xs text-zinc-500 mb-1">Instructor</p>
<h4 className="text-sm font-medium text-white">Sarah K. Legal</h4>
<p className="text-xs text-zinc-500">IP Attorney &amp; Founder</p>
</div>
</div>

<div className="bg-zinc-900/50 border border-white/5 rounded-xl overflow-hidden">
<div className="p-4 border-b border-white/5 flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Module 1: Foundations</h3>
<span className="text-xs text-zinc-500">3/8 Completed</span>
</div>
<div className="max-h-[600px] overflow-y-auto">

<a className="flex items-start gap-3 p-4 hover:bg-white/5 transition-colors group" href="#">
<div className="mt-0.5">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2" data-width="16"></span>
</div>
<div>
<h4 className="text-sm text-zinc-400 group-hover:text-zinc-300 line-through decoration-zinc-700">Introduction to IP</h4>
<span className="text-[10px] text-zinc-600 block mt-1">12:00</span>
</div>
</a>

<a className="flex items-start gap-3 p-4 hover:bg-white/5 transition-colors group" href="#">
<div className="mt-0.5">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle-2" data-width="16"></span>
</div>
<div>
<h4 className="text-sm text-zinc-400 group-hover:text-zinc-300 line-through decoration-zinc-700">Copyright vs Trademark</h4>
<span className="text-[10px] text-zinc-600 block mt-1">08:45</span>
</div>
</a>

<div className="flex items-start gap-3 p-4 bg-white/5 border-l-2 border-emerald-500">
<div className="mt-0.5">
<span className="iconify text-emerald-500" data-icon="lucide:play-circle" data-width="16"></span>
</div>
<div>
<h4 className="text-sm font-medium text-white">Fair Use Explained</h4>
<span className="text-[10px] text-emerald-500/80 block mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:bar-chart-2" data-width="10"></span>
                                    Now Playing
                                </span>
</div>
</div>

<a className="flex items-start gap-3 p-4 hover:bg-white/5 transition-colors group opacity-60" href="#">
<div className="mt-0.5">
<span className="iconify text-zinc-600" data-icon="lucide:lock" data-width="16"></span>
</div>
<div>
<h4 className="text-sm text-zinc-400 group-hover:text-zinc-300">Public Domain &amp; Creative Commons</h4>
<span className="text-[10px] text-zinc-600 block mt-1">15:30</span>
</div>
</a>

<a className="flex items-start gap-3 p-4 hover:bg-white/5 transition-colors group opacity-60" href="#">
<div className="mt-0.5">
<span className="iconify text-zinc-600" data-icon="lucide:lock" data-width="16"></span>
</div>
<div>
<h4 className="text-sm text-zinc-400 group-hover:text-zinc-300">International Treaties</h4>
<span className="text-[10px] text-zinc-600 block mt-1">22:15</span>
</div>
</a>
<a className="flex items-start gap-3 p-4 hover:bg-white/5 transition-colors group opacity-60" href="#">
<div className="mt-0.5">
<span className="iconify text-zinc-600" data-icon="lucide:lock" data-width="16"></span>
</div>
<div>
<h4 className="text-sm text-zinc-400 group-hover:text-zinc-300">Quiz: Module 1 Review</h4>
<span className="text-[10px] text-zinc-600 block mt-1">10 Questions</span>
</div>
</a>
</div>
</div>

<div className="border border-white/5 rounded-xl p-4">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Lesson Resources</h3>
<div className="space-y-3">
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group" href="#">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-width="14"></span>
</div>
<div>
<p className="text-xs text-zinc-300 font-medium">Fair Use Checklist.pdf</p>
<p className="text-[10px] text-zinc-600">2.4 MB</p>
</div>
<span className="iconify ml-auto text-zinc-600 group-hover:text-zinc-300" data-icon="lucide:download" data-width="14"></span>
</a>
<a className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group" href="#">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:link" data-width="14"></span>
</div>
<div>
<p className="text-xs text-zinc-300 font-medium">Case Study: Warhol v. Goldsmith</p>
<p className="text-[10px] text-zinc-600">External Link</p>
</div>
<span className="iconify ml-auto text-zinc-600 group-hover:text-zinc-300" data-icon="lucide:external-link" data-width="14"></span>
</a>
</div>
</div>
</div>
</div>
</div>

<footer className="border-t border-white/5 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-600">
                © 2024 Copyright Master LLC. All rights reserved.
            </p>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Help Center</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>

    </>
  );
}
