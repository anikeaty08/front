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
neutral: {
850: '#1f1f1f',
950: '#0a0a0a',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tight text-white hover:text-violet-400 transition-colors" href="#">
                MUNEZERO<span className="text-neutral-500">.ALPHA</span>
</a>
<div className="hidden md:flex gap-8">
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#stack">Stack</a>
<a className="text-sm font-normal text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-all" href="#contact">
                Let's Talk
            </a>
<button className="md:hidden text-neutral-400">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-0 right-0 w-3/4 h-3/4 bg-violet-900/10 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-900/5 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

<div className="order-2 lg:order-1 flex flex-col gap-8 animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
</span>
<span className="text-xs font-medium text-violet-300 tracking-wide uppercase">Available for hire</span>
</div>
<h1 className="text-5xl sm:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Digital Architect <br/>
<span className="text-neutral-500">for the future.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-lg leading-relaxed font-normal">
                    I am Munezero Alpha. I engineer scalable systems and craft intuitive interfaces with precision. Transforming complex problems into elegant solutions.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-2">
<button className="px-8 py-4 bg-white text-black text-base font-medium rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 group">
                        View Projects
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="px-8 py-4 bg-transparent border border-neutral-800 text-white text-base font-medium rounded-lg hover:bg-neutral-900 transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
                        Download CV
                    </button>
</div>
<div className="flex gap-6 mt-6 pt-8 border-t border-white/5">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg></a>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center lg:justify-end relative animate-fade-in">
<div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 group">

<div className="z-10 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>

<img alt="Munezero Alpha" className="object-center group-hover:scale-105 transition-transform duration-700 ease-out hover:grayscale-0 w-full h-full object-cover z-10 grayscale scale-100" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 z-20 p-4 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl">
<div className="flex items-center gap-3">
<div className="p-2.5 bg-violet-600 rounded-lg text-white shadow-lg shadow-violet-900/20">
<svg className="lucide lucide-code-2 w-5 h-5" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white tracking-tight">Full Stack Developer</p>
<p className="text-xs text-neutral-400">5+ Years Experience</p>
</div>
</div>
</div>
</div>

<div className="absolute -inset-4 bg-violet-600/20 blur-3xl -z-10 rounded-full opacity-50"></div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-neutral-950" id="stack">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 mb-12 tracking-wider uppercase">Powered by modern technologies</p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center justify-center gap-2 group cursor-default">
<svg className="lucide lucide-zap w-5 h-5 text-yellow-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> <span className="text-base font-medium group-hover:text-white transition-colors">Next.js</span>
</div>
<div className="flex items-center justify-center gap-2 group cursor-default">
<svg className="lucide lucide-file-code-2 w-5 h-5 text-blue-400" data-lucide="file-code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m5 16-3 3 3 3"></path><path d="m9 22 3-3-3-3"></path></svg> <span className="text-base font-medium group-hover:text-white transition-colors">React</span>
</div>
<div className="flex items-center justify-center gap-2 group cursor-default">
<svg className="lucide lucide-box w-5 h-5 text-sky-400" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg> <span className="text-base font-medium group-hover:text-white transition-colors">Tailwind</span>
</div>
<div className="flex items-center justify-center gap-2 group cursor-default">
<svg className="lucide lucide-server w-5 h-5 text-green-400" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg> <span className="text-base font-medium group-hover:text-white transition-colors">Node</span>
</div>
<div className="flex items-center justify-center gap-2 group cursor-default">
<svg className="lucide lucide-database w-5 h-5 text-orange-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> <span className="text-base font-medium group-hover:text-white transition-colors">SQL</span>
</div>
<div className="flex items-center justify-center gap-2 group cursor-default">
<svg className="lucide lucide-figma w-5 h-5 text-purple-400" data-lucide="figma" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path></svg> <span className="text-base font-medium group-hover:text-white transition-colors">Figma</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4">Selected Work</h2>
<p className="text-lg text-neutral-400 max-w-xl font-normal">
                        A curation of projects focusing on user experience, performance, and scalability.
                    </p>
</div>
<a className="text-neutral-400 hover:text-white flex items-center gap-2 text-sm font-medium transition-colors group" href="#">
                    View all projects <svg className="lucide lucide-arrow-up-right w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-900/10">
<div className="aspect-video bg-neutral-800 relative overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/20 via-neutral-900 to-black"></div>
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'0.4\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'3\\'/%3E%3Ccircle cx=\\'13\\' cy=\\'13\\' r=\\'3\\'/%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
<span className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition-transform">View Case Study</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-medium text-white tracking-tight">FinStack App</h3>
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 border border-white/10 px-2 py-1 rounded">React</span>
</div>
</div>
<p className="text-base text-neutral-400 line-clamp-2 leading-relaxed">
                            Real-time financial data visualization with advanced filtering, analytics and export capabilities for enterprise.
                        </p>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10">
<div className="aspect-video bg-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-neutral-900 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
<span className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition-transform">View Case Study</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-medium text-white tracking-tight">Nexus AI</h3>
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 border border-white/10 px-2 py-1 rounded">Python</span>
</div>
</div>
<p className="text-base text-neutral-400 line-clamp-2 leading-relaxed">
                            A conversational interface for managing complex datasets using natural language processing and transformer models.
                        </p>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10">
<div className="aspect-video bg-neutral-800 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-neutral-900 to-black"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
<span className="px-5 py-2.5 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition-transform">View Case Study</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-3">
<h3 className="text-lg font-medium text-white tracking-tight">Orbit Design</h3>
<div className="flex gap-2">
<span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 border border-white/10 px-2 py-1 rounded">Figma</span>
</div>
</div>
<p className="text-base text-neutral-400 line-clamp-2 leading-relaxed">
                            A comprehensive component library for building consistent, accessible, and themeable user interfaces at scale.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Technical Expertise</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5">
<svg className="lucide lucide-layout w-6 h-6 text-violet-400" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white">Frontend Engineering</h3>
<p className="text-base text-neutral-400 leading-relaxed">Building responsive, pixel-perfect web applications using React, Vue, and modern CSS frameworks like Tailwind.</p>
</div>
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5">
<svg className="lucide lucide-server-cog w-6 h-6 text-violet-400" data-lucide="server-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.852 14.772-.383.923"></path><path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923"></path><path d="m13.148 9.228.383-.923"></path><path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544"></path><path d="m14.772 10.852.923-.383"></path><path d="m14.772 13.148.923.383"></path><path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"></path><path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"></path><path d="M6 18h.01"></path><path d="M6 6h.01"></path><path d="m9.228 10.852-.923-.383"></path><path d="m9.228 13.148-.923.383"></path></svg>
</div>
<h3 className="text-xl font-medium text-white">Backend Architecture</h3>
<p className="text-base text-neutral-400 leading-relaxed">Designing robust APIs and database structures that scale securely with your user base.</p>
</div>
<div className="flex flex-col gap-4">
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center border border-white/5">
<svg className="lucide lucide-smartphone w-6 h-6 text-violet-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-xl font-medium text-white">Mobile Development</h3>
<p className="text-base text-neutral-400 leading-relaxed">Creating seamless cross-platform mobile experiences that feel native and fluid on all devices.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-violet-600/10 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">Ready to build the future?</h2>
<p className="text-lg text-neutral-400 mb-12 max-w-xl mx-auto">I'm currently available for freelance projects and open to new opportunities. Let's create something extraordinary.</p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-base font-medium hover:bg-neutral-200 transition-colors" href="mailto:contact@munezero.alpha">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                Start a conversation
            </a>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-violet-600 rounded-full"></div>
<span className="text-sm font-medium text-neutral-300 tracking-tight">Munezero Alpha</span>
</div>
<div className="text-neutral-600 text-xs">
                © 2024 All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</footer>


    </>
  );
}
