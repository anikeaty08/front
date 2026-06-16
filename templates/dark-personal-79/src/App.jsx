import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
page: '#08090A',
card: '#111214',
cardHover: '#161719',
border: '#1F2125',
primary: '#E1E7EF',
secondary: '#7F8590',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-[420px] flex flex-col gap-8 relative z-10">

<header className="flex flex-col items-center text-center space-y-4 animate-fade-in-up">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-50 blur-sm group-hover:opacity-75 transition duration-500"></div>
<img alt="Profile" className="relative w-24 h-24 rounded-full object-cover border border-white/10 shadow-2xl" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="absolute bottom-0 right-0 bg-page border border-border p-1.5 rounded-full flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-center gap-2">
<h1 className="text-xl font-medium text-white tracking-tight">Alex Morgan</h1>
<iconify-icon className="text-blue-400 text-lg" icon="lucide:badge-check" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-secondary leading-relaxed text-sm font-normal max-w-[280px] mr-auto ml-auto">
                    Digital Designer &amp; Developer building interfaces that feel invisible. Currently shipping at Vercel.
                </p>
</div>

<div className="flex items-center gap-2 pt-2">
<a className="p-2.5 rounded-xl bg-card border border-border text-secondary hover:text-white hover:bg-cardHover hover:border-white/10 transition-all duration-300 group" href="#">
<iconify-icon height="18" icon="lucide:twitter" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="p-2.5 rounded-xl bg-card border border-border text-secondary hover:text-white hover:bg-cardHover hover:border-white/10 transition-all duration-300 group" href="#">
<iconify-icon height="18" icon="lucide:github" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="p-2.5 rounded-xl bg-card border border-border text-secondary hover:text-white hover:bg-cardHover hover:border-white/10 transition-all duration-300 group" href="#">
<iconify-icon height="18" icon="lucide:linkedin" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="p-2.5 rounded-xl bg-card border border-border text-secondary hover:text-white hover:bg-cardHover hover:border-white/10 transition-all duration-300 group" href="#">
<iconify-icon height="18" icon="lucide:mail" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</header>

<div className="grid grid-cols-2 gap-3">

<a className="col-span-2 relative group overflow-hidden rounded-2xl bg-card border border-border h-48" href="#">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition duration-500 ease-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 mb-1">
<span className="px-2 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-medium tracking-wide uppercase text-white">Latest Ship</span>
</div>
<h3 className="text-sm font-medium text-white tracking-tight">Design System v2.0</h3>
<p className="text-xs text-gray-400 mt-0.5">Figma &amp; React Components</p>
</div>
<div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md border border-white/10 rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition duration-300 translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-white text-xs block" icon="lucide:arrow-up-right" strokeWidth="1.5"></iconify-icon>
</div>
</a>

<div className="col-span-1 rounded-2xl bg-card border border-border p-4 flex flex-col justify-between hover:border-white/10 transition duration-300 group">
<div className="flex justify-between items-start">
<iconify-icon className="text-secondary group-hover:text-emerald-400 transition-colors" icon="lucide:map-pin" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-secondary font-normal mb-1">Based in</p>
<p className="text-sm font-medium text-white tracking-tight">San Francisco</p>
<p className="text-[10px] text-emerald-500 mt-1 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> 08:42 AM
                    </p>
</div>
</div>

<div className="col-span-1 rounded-2xl bg-card border border-border p-4 flex flex-col justify-between hover:border-white/10 transition duration-300">
<div className="flex -space-x-2">
<div className="w-7 h-7 rounded-full bg-[#1e1e1e] border border-border flex items-center justify-center text-[10px] text-white">TS</div>
<div className="w-7 h-7 rounded-full bg-[#1e1e1e] border border-border flex items-center justify-center text-[10px] text-white">Re</div>
<div className="w-7 h-7 rounded-full bg-[#1e1e1e] border border-border flex items-center justify-center text-[10px] text-white">Tw</div>
</div>
<div>
<p className="text-xs text-secondary font-normal mb-1">Stack</p>
<p className="text-sm font-medium text-white tracking-tight">Full Stack</p>
</div>
</div>
</div>

<nav className="flex flex-col gap-3">
<a className="group relative flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:bg-cardHover hover:border-white/10 transition-all duration-200" href="#">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 transition duration-300">
<iconify-icon icon="lucide:briefcase" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white tracking-tight">View Portfolio</span>
<span className="text-xs text-secondary font-light">Case studies &amp; experiments</span>
</div>
</div>
<iconify-icon className="text-secondary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200" icon="lucide:chevron-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="group relative flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:bg-cardHover hover:border-white/10 transition-all duration-200" href="#">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 transition duration-300">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white tracking-tight">Read my Blog</span>
<span className="text-xs text-secondary font-light">Thoughts on UI engineering</span>
</div>
</div>
<iconify-icon className="text-secondary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200" icon="lucide:chevron-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="group relative flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:bg-cardHover hover:border-white/10 transition-all duration-200" href="#">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/10 transition duration-300">
<iconify-icon icon="lucide:coffee" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white tracking-tight">Buy me a Coffee</span>
<span className="text-xs text-secondary font-light">Support my open source work</span>
</div>
</div>
<iconify-icon className="text-secondary opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition duration-200" icon="lucide:external-link" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</nav>

<div className="rounded-xl border border-border bg-gradient-to-b from-card to-page p-6 space-y-4">
<div className="flex items-center gap-3">
<div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20 text-purple-400">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white tracking-tight">Join the newsletter</h3>
</div>
<p className="text-xs text-secondary font-light leading-relaxed">
                Get weekly insights on frontend development, design systems, and career growth. No spam, ever.
            </p>
<form className="flex gap-2" onsubmit="event.preventDefault();">
<input className="w-full bg-page border border-border rounded-lg px-3 py-2 text-sm text-white placeholder-secondary/50 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/10 transition duration-200" placeholder="email@example.com" type="email"/>
<button className="bg-white text-black text-xs font-medium px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200 flex items-center gap-2" type="submit">
                    Subscribe
                </button>
</form>
</div>

<footer className="mt-8 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition duration-500">
<div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
<div className="flex items-center gap-1 text-[10px] text-secondary tracking-wide uppercase font-medium">
<iconify-icon icon="lucide:command" strokeWidth="1.5" width="12"></iconify-icon>
<span>Alex Morgan © 2024</span>
</div>
</footer>
</main>

    </>
  );
}
