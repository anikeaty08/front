import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
800: '#27272a',
900: '#18181b',
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-[1400px] h-[95vh] sm:h-[90vh] bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-zinc-200 flex flex-col overflow-hidden relative animate-rotate-sequence perspective-distant">

<div className="h-14 sm:h-12 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between px-4 sm:px-6 shrink-0 z-30">
<div className="flex items-center gap-4">

<div className="hidden sm:flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>

<div className="flex sm:hidden items-center gap-2">
<div className="w-7 h-7 bg-zinc-900 rounded-md flex items-center justify-center text-white">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
</div>
<span className="font-heading font-medium text-sm tracking-tight text-zinc-900">Lumina</span>
</div>
</div>

<div className="flex-1 max-w-2xl bg-white border border-zinc-200 rounded-md h-8 flex items-center justify-center text-xs text-zinc-400 font-sans tracking-wide mx-4 hidden sm:flex">
<svg className="mr-2 opacity-50" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                lumina.design/journal
            </div>

<label className="sm:hidden p-2 text-zinc-600 hover:bg-zinc-200 rounded-md cursor-pointer" htmlFor="mobile-menu-toggle">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
</label>

<div className="w-10 hidden sm:block"></div>
</div>

<div className="flex-1 flex overflow-hidden relative">

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<div className="mobile-menu-overlay fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-300 sm:hidden"></div>
<div className="mobile-menu-content fixed inset-y-0 left-0 w-64 bg-white z-50 transform -translate-x-full transition-transform duration-300 shadow-2xl sm:hidden flex flex-col p-6 border-r border-zinc-200">
<label className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-900" htmlFor="mobile-menu-toggle">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</label>

<div className="mt-8 space-y-2">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-900" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
<span className="font-heading text-sm tracking-tight">Journal</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:bg-zinc-100" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<span className="font-heading text-sm tracking-tight">Back to Site</span>
</a>
</div>
</div>

<aside className="w-64 bg-zinc-50/50 border-r border-zinc-200 flex-col py-8 px-6 justify-between backdrop-blur-sm z-10 hidden md:flex">
<div>

<div className="flex items-center gap-2 mb-12">
<div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
</div>
<span className="font-heading font-medium text-lg tracking-tight text-zinc-900">Lumina</span>
</div>

<nav className="space-y-1">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white border border-zinc-200 shadow-sm text-zinc-900 transition-all group" href="#">
<svg className="text-zinc-900 group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
<span className="font-heading text-sm tracking-tight">Journal</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors group" href="#">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
<span className="font-heading text-sm tracking-tight">Back to Site</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 transition-colors group" href="#">
<svg className="group-hover:scale-110 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="font-heading text-sm tracking-tight">Support</span>
</a>
</nav>

<div className="mt-10">
<p className="px-3 text-xs font-heading font-medium text-zinc-400 uppercase tracking-widest mb-4">Topics</p>
<div className="space-y-1 pl-3 border-l border-zinc-200 ml-3">
<a className="block px-3 py-1.5 text-zinc-600 hover:text-zinc-900 text-sm hover:translate-x-1 transition-transform" href="#">Typography</a>
<a className="block px-3 py-1.5 text-zinc-600 hover:text-zinc-900 text-sm hover:translate-x-1 transition-transform" href="#">Interface Design</a>
<a className="block px-3 py-1.5 text-zinc-600 hover:text-zinc-900 text-sm hover:translate-x-1 transition-transform" href="#">Process</a>
<a className="block px-3 py-1.5 text-zinc-600 hover:text-zinc-900 text-sm hover:translate-x-1 transition-transform" href="#">Case Studies</a>
</div>
</div>
</div>

<div className="flex items-center gap-3 px-3 pt-6 border-t border-zinc-200">
<div className="w-8 h-8 rounded-full bg-zinc-200 border border-white shadow-sm overflow-hidden shrink-0">
<img alt="User" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
</div>
<div className="flex flex-col min-w-0">
<span className="text-xs font-heading font-medium text-zinc-900 truncate">Guest User</span>
<span className="text-[10px] text-zinc-500 truncate">View Profile</span>
</div>
</div>
</aside>

<main className="flex-1 overflow-y-auto bg-zinc-100 scroll-smooth w-full">
<div className="max-w-4xl mx-auto px-6 py-8 md:px-12 md:py-16 animate-rotate-sequence">

<header className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
<div>
<span className="font-heading text-[10px] sm:text-xs font-medium tracking-[0.2em] text-zinc-400 uppercase mb-3 block">The Blog</span>
<h1 className="font-heading text-3xl sm:text-4xl md:text-[40px] font-medium text-zinc-900 tracking-tight leading-none">
                                Insights &amp; <br className="hidden sm:block"/> Perspectives
                            </h1>
</div>
<div className="hidden sm:block">
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-zinc-200 shadow-sm text-sm text-zinc-500 font-heading">
<span>Sort by</span>
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</header>

<article className="group relative bg-white rounded-xl overflow-hidden shadow-[0_2px_40px_-12px_rgba(0,0,0,0.08)] border border-zinc-100 mb-12 md:mb-16 hover-rotate-card cursor-pointer">
<div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden bg-zinc-100">
<img alt="Office" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 ease-in-out opacity-90 hover:opacity-100 transform hover:scale-105" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 md:p-10">
<div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6 text-[10px] md:text-xs font-heading text-zinc-400 uppercase tracking-widest">
<span className="text-zinc-900 font-medium">Featured</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span>Oct 12, 2023</span>
<span className="w-1 h-1 rounded-full bg-zinc-300"></span>
<span>6 min read</span>
</div>
<h2 className="font-heading text-2xl md:text-[32px] font-medium text-zinc-900 mb-3 md:mb-4 tracking-tight leading-tight group-hover:text-zinc-700 transition-colors">
                                The Psychology of Minimalist Interface Design
                            </h2>
<p className="font-body text-base md:text-[20px] text-zinc-600 leading-relaxed max-w-2xl mb-6 md:mb-8">
                                Why less is often more when it comes to user retention and cognitive load. Exploring the subtle art of reduction in modern digital products.
                            </p>
<div className="flex items-center gap-2 text-zinc-900 font-heading font-medium text-sm border-b border-zinc-900 pb-0.5 w-max group-hover:border-zinc-400 transition-colors">
                                Read Article
                                <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
</article>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16">

<article className="bg-transparent border-t border-zinc-200 pt-6 md:pt-8 group cursor-pointer hover:bg-white md:hover:p-6 hover:rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="mb-5 md:mb-6 overflow-hidden rounded-lg aspect-[3/2] bg-zinc-100">
<img alt="Abstract" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 mb-3 md:mb-4 text-[10px] font-heading text-zinc-400 uppercase tracking-widest">
<span>Typography</span>
<span className="w-px h-3 bg-zinc-200"></span>
<span>Sep 28</span>
</div>
<h3 className="font-heading text-xl md:text-[24px] font-medium text-zinc-900 mb-2 md:mb-3 tracking-tight leading-snug">
                                Serif Fonts in Digital Ages
                            </h3>
<p className="font-body text-base md:text-[18px] text-zinc-500 leading-relaxed mb-4 line-clamp-3">
                                Re-evaluating the role of serif typefaces in screen-first branding and editorial layouts.
                            </p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</article>

<article className="bg-transparent border-t border-zinc-200 pt-6 md:pt-8 group cursor-pointer hover:bg-white md:hover:p-6 hover:rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="mb-5 md:mb-6 overflow-hidden rounded-lg aspect-[3/2] bg-zinc-100">
<img alt="Workspace" className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center gap-3 mb-3 md:mb-4 text-[10px] font-heading text-zinc-400 uppercase tracking-widest">
<span>Workflow</span>
<span className="w-px h-3 bg-zinc-200"></span>
<span>Sep 15</span>
</div>
<h3 className="font-heading text-xl md:text-[24px] font-medium text-zinc-900 mb-2 md:mb-3 tracking-tight leading-snug">
                                Asynchronous Workflows
                            </h3>
<p className="font-body text-base md:text-[18px] text-zinc-500 leading-relaxed mb-4 line-clamp-3">
                                How to structure creative teams for deep work without the constant interruption of meetings.
                            </p>
<span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 text-zinc-400 group-hover:bg-zinc-900 group-hover:border-zinc-900 group-hover:text-white transition-all">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span>
</article>
</div>

<div className="bg-zinc-900 rounded-xl p-6 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-2xl relative overflow-hidden group">

<div className="absolute -right-10 -top-10 w-64 h-64 bg-zinc-800 rounded-full blur-3xl opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
<div className="relative z-10 w-full md:max-w-md">
<h3 className="font-heading text-xl md:text-[28px] font-medium text-white mb-2 tracking-tight">Stay in the loop</h3>
<p className="font-body text-sm md:text-lg text-zinc-400 leading-relaxed">Weekly curation of design resources and thoughts.</p>
</div>
<form className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-3">
<input className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all font-body w-full sm:w-64 text-sm" placeholder="email@address.com" type="email"/>
<button className="bg-white text-zinc-900 px-6 py-3 rounded-lg font-heading font-medium text-sm hover:bg-zinc-200 transition-colors whitespace-nowrap w-full sm:w-auto" type="button">
                                Subscribe
                            </button>
</form>
</div>

<footer className="mt-16 md:mt-20 pt-10 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-xs md:text-sm gap-4 text-center md:text-left">
<span className="font-body">© 2024 Lumina Creative Suite</span>
<div className="flex gap-6 font-heading">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Twitter</a>
</div>
</footer>
</div>
</main>
</div>
</div>


    </>
  );
}
