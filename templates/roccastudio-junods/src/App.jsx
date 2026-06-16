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
serif: ['Playfair Display', 'serif'],
},
colors: {
electric: '#3046F8', // JunoDS Electric Blue
offwhite: '#F5F5F7',
deepblack: '#050505',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar Transition on Scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-sm');
                navbar.style.background = 'rgba(255, 255, 255, 0.9)';
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.style.background = 'rgba(255, 255, 255, 0.7)';
            }
        });

        // Simple Intersection Observer for Fade-in Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-enter-active');
                    entry.target.classList.remove('fade-enter');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => {
            el.classList.add('fade-enter');
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-500" id="navbar" style={{background: 'rgba(255, 255, 255, 0.9)'}}>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">

<svg className="group-hover:scale-105 transition-transform duration-300 w-[36px] h-[36px]" data-icon-replaced="true" fill="none" height="36" strokeWidth="2" style={{color: 'rgb(48, 70, 248)', width: '36px', height: '36px'}} viewbox="0 0 36 36" width="36" xmlns="http://www.w3.org/2000/svg">
<path d="M6 14C6 14 6 24 10 28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path>
<path className="" d="M18 10V30" stroke="currentColor" strokeLinecap="round" strokeWidth="5"></path>
<path className="" d="M30 14C30 14 30 24 26 28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5"></path>
</svg>
<span className="text-2xl tracking-tight font-medium text-deepblack">juno<span className="font-normal">ds</span></span>
</a>

<div className="hidden md:flex items-center space-x-10">
<a className="text-sm font-medium text-slate-600 hover:text-electric transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-electric transition-colors" href="#solutions">Solutions</a>
<a className="text-sm font-medium text-slate-600 hover:text-electric transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-electric transition-colors" href="#resources">Resources</a>
</div>

<div className="flex items-center">
<a className="hidden md:inline-flex bg-deepblack hover:bg-electric text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-blue-900/10 hover:shadow-electric/30" href="#">
                    Get Started
                </a>

<button className="md:hidden ml-4 text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-40 pb-20 relative items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/5 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
<div className="max-w-5xl mx-auto px-6 text-center z-10 scroll-reveal">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-offwhite border border-slate-200 mb-8 animate-float">
<span className="w-2 h-2 rounded-full bg-electric"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wide">Next Gen AI Platform</span>
</div>

<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-deepblack leading-[1.1] mb-8">
                Intelligence, evolved.<br/>
<span className="text-slate-400">Data, simplified.</span>
</h1>

<p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light mb-12">
                Empowering your enterprise with bespoke AI solutions and data science strategies designed for the modern world.
            </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex items-center justify-center bg-electric text-white text-base font-medium px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-electric/25 hover:-translate-y-1 overflow-hidden" href="#">
<span className="relative z-10 flex items-center gap-2">
                        Request a Demo
                        <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
</a>
<a className="inline-flex items-center justify-center bg-transparent border border-slate-200 text-slate-900 text-base font-medium px-8 py-4 rounded-full transition-all hover:bg-slate-50 hover:border-slate-300" href="#services">
                    View Our Services
                </a>
</div>
</div>

<div className="mt-24 w-full max-w-6xl px-6 scroll-reveal relative">
<div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden relative bg-gradient-to-b from-slate-50 to-white border border-slate-100 shadow-2xl">

<div className="absolute inset-0 flex items-center justify-center opacity-80">
<svg className="w-full h-full text-electric" fill="none" viewbox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
<path className="animate-[pulse_5s_ease-in-out_infinite]" d="M0 200 C200 200 300 100 400 200 C500 300 600 200 800 200" stroke="url(#paint0_linear)" strokeWidth="1.5"></path>
<path d="M0 220 C200 220 300 120 400 220 C500 320 600 220 800 220" opacity="0.5" stroke="url(#paint0_linear)" strokeWidth="1.5"></path>
<path d="M0 180 C200 180 300 80 400 180 C500 280 600 180 800 180" opacity="0.5" stroke="url(#paint0_linear)" strokeWidth="1.5"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear" x1="0" x2="800" y1="200" y2="200">
<stop stop-color="#3046F8" stop-opacity="0"></stop>
<stop offset="0.5" stop-color="#3046F8"></stop>
<stop offset="1" stop-color="#3046F8" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-2/3 bg-white rounded-t-xl shadow-[0_-20px_60px_-15px_rgba(48,70,248,0.15)] border-t border-l border-r border-slate-100 p-6 flex flex-col gap-4">
<div className="flex items-center justify-between border-b border-slate-100 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="h-2 w-24 bg-slate-100 rounded-full"></div>
</div>
<div className="grid grid-cols-3 gap-4 h-full">
<div className="bg-offwhite rounded-lg p-4 col-span-2"></div>
<div className="bg-offwhite rounded-lg p-4"></div>
<div className="bg-offwhite rounded-lg p-4"></div>
<div className="bg-offwhite rounded-lg p-4 col-span-2"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 scroll-reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-deepblack mb-4">Core Capabilities</h2>
<p className="text-xl text-slate-500 max-w-xl">Architecting the future of your business through three pillars of intelligence.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="group relative rounded-[2rem] bg-offwhite p-8 md:p-10 flex flex-col justify-between overflow-hidden hover:bg-[#F0F0F2] transition-colors duration-500 scroll-reveal">
<div>
<div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm text-electric">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-deepblack mb-3">AI Consulting</h3>
<p className="text-lg text-slate-500 leading-relaxed">Strategy first. We align advanced AI capabilities with your specific business goals to ensure ROI.</p>
</div>
<div className="relative h-32 w-full mt-4">
<div className="absolute inset-0 bg-gradient-to-t from-offwhite to-transparent z-10"></div>

<div className="absolute bottom-0 left-0 w-full h-full border border-slate-200 rounded-xl opacity-50 transform group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute bottom-4 left-4 w-3/4 h-full border border-electric/20 rounded-xl bg-electric/5"></div>
</div>
</div>

<div className="group relative rounded-[2rem] bg-deepblack p-8 md:p-10 flex flex-col justify-between overflow-hidden md:col-span-2 scroll-reveal text-white">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center mb-6 shadow-sm text-electric">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Machine Learning</h3>
<p className="text-lg text-slate-400 leading-relaxed max-w-lg">Predictive models that turn historical data into future foresight. From custom LLMs to computer vision.</p>
</div>

<div className="absolute right-0 bottom-0 w-1/2 h-full opacity-30 pointer-events-none">
<svg className="w-full h-full" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.3C87.4,-33.5,90.1,-18,88.8,-2.8C87.5,12.4,82.2,27.3,73.1,39.6C64,51.9,51.1,61.6,37.8,68.4C24.5,75.2,10.8,79.1,-1.3,81.3C-13.4,83.5,-25.1,84,-36.8,78.2C-48.5,72.4,-60.2,60.3,-69.3,46.9C-78.4,33.5,-84.9,18.8,-83.4,4.7C-81.9,-9.4,-72.4,-22.9,-62.3,-34.5C-52.2,-46.1,-41.5,-55.8,-29.9,-64.5C-18.3,-73.2,-5.8,-80.9,7.6,-81.4C21,-81.9,42,-75.2,44.7,-76.4Z" fill="#3046F8" transform="translate(100 100)"></path>
</svg>
</div>
</div>

<div className="md:col-span-3 group relative rounded-[2rem] border border-slate-100 bg-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 scroll-reveal">
<div className="md:w-1/2">
<div className="w-12 h-12 rounded-xl bg-offwhite flex items-center justify-center mb-6 text-electric">
<i className="w-6 h-6" data-lucide="database"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-deepblack mb-3">Data Engineering</h3>
<p className="text-lg text-slate-500 leading-relaxed">The foundation of intelligence. We build robust pipelines for seamless data flow, ensuring your infrastructure scales with your ambition.</p>
<div className="mt-8 flex gap-4">
<div className="px-4 py-2 bg-offwhite rounded-lg text-sm font-medium text-slate-600">ETL Pipelines</div>
<div className="px-4 py-2 bg-offwhite rounded-lg text-sm font-medium text-slate-600">Cloud Architecture</div>
</div>
</div>
<div className="md:w-1/2 h-64 w-full bg-offwhite rounded-2xl flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 grid grid-cols-6 gap-2 opacity-20">
<div className="col-span-1 bg-slate-300 h-full"></div>
<div className="col-span-1 bg-slate-300 h-4/5 mt-auto"></div>
<div className="col-span-1 bg-electric h-full animate-pulse"></div>
<div className="col-span-1 bg-slate-300 h-2/3 mt-auto"></div>
<div className="col-span-1 bg-slate-300 h-full"></div>
<div className="col-span-1 bg-slate-300 h-1/2 mt-auto"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-offwhite overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 scroll-reveal">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-deepblack mb-6">Beyond the Algorithm.</h2>
<p className="text-xl text-slate-500">We don't just deliver code. We deliver clarity. Our human-centric approach turns complex data sets into actionable, beautiful insights.</p>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200 scroll-reveal">

<div className="bg-white border-b border-slate-100 p-4 flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
</div>
<div className="flex-1 text-center text-xs font-medium text-slate-400">junods.ai/dashboard</div>
</div>

<div className="p-8 md:p-12">
<div className="flex items-center justify-between mb-10">
<div>
<h4 className="text-2xl font-semibold text-deepblack">Q3 Performance Prediction</h4>
<p className="text-slate-400 mt-1">Real-time inference • Updated 2m ago</p>
</div>
<button className="px-5 py-2 bg-electric text-white rounded-lg text-sm font-medium shadow-lg shadow-electric/20">Export Report</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="md:col-span-2 bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
<div className="flex justify-between items-center mb-8">
<span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Revenue Forecast</span>
<i className="w-5 h-5 text-electric" data-lucide="trending-up"></i>
</div>

<div className="h-64 flex items-end justify-between gap-2 md:gap-4">
<div className="w-full bg-slate-50 rounded-t-sm h-[40%] relative group"><div className="absolute bottom-0 w-full bg-electric opacity-10 h-0 group-hover:h-full transition-all duration-300"></div></div>
<div className="w-full bg-slate-50 rounded-t-sm h-[55%] relative group"><div className="absolute bottom-0 w-full bg-electric opacity-10 h-0 group-hover:h-full transition-all duration-300"></div></div>
<div className="w-full bg-slate-50 rounded-t-sm h-[45%] relative group"><div className="absolute bottom-0 w-full bg-electric opacity-10 h-0 group-hover:h-full transition-all duration-300"></div></div>
<div className="w-full bg-slate-50 rounded-t-sm h-[70%] relative group"><div className="absolute bottom-0 w-full bg-electric opacity-10 h-0 group-hover:h-full transition-all duration-300"></div></div>
<div className="w-full bg-electric rounded-t-sm h-[85%] relative shadow-[0_0_20px_rgba(48,70,248,0.3)]"></div>
<div className="w-full bg-slate-50 rounded-t-sm h-[60%] border-t-2 border-dashed border-slate-200"></div>
</div>
</div>

<div className="space-y-6">
<div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
<div className="text-sm font-semibold text-slate-500 mb-2">Accuracy Score</div>
<div className="text-4xl font-semibold text-deepblack">98.4<span className="text-electric">%</span></div>
<div className="mt-4 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-electric w-[98.4%]"></div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
<div className="text-sm font-semibold text-slate-500 mb-2">Data Points Processed</div>
<div className="text-4xl font-semibold text-deepblack">2.4<span className="text-slate-300">M</span></div>
<div className="mt-2 text-sm text-green-500 flex items-center gap-1">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i> +12% this week
                                </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-400 uppercase tracking-widest mb-16">Trusted by industry leaders</p>

<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-32 opacity-80">

<svg className="h-8 w-auto text-slate-300 hover:text-electric transition-colors duration-300 cursor-pointer" fill="currentColor" viewbox="0 0 100 30">
<rect height="20" rx="4" width="20" x="0" y="5"></rect>
<rect height="20" rx="4" width="75" x="25" y="5"></rect>
</svg>

<svg className="h-8 w-auto text-slate-300 hover:text-electric transition-colors duration-300 cursor-pointer" fill="currentColor" viewbox="0 0 100 30">
<circle cx="15" cy="15" r="10"></circle>
<rect height="14" rx="2" width="60" x="35" y="8"></rect>
</svg>

<svg className="h-8 w-auto text-slate-300 hover:text-electric transition-colors duration-300 cursor-pointer" fill="currentColor" viewbox="0 0 100 30">
<path d="M0 30L15 0L30 30H0Z"></path>
<rect height="14" rx="2" width="60" x="40" y="8"></rect>
</svg>

<svg className="h-8 w-auto text-slate-300 hover:text-electric transition-colors duration-300 cursor-pointer" fill="currentColor" viewbox="0 0 100 30">
<rect height="12" width="12" x="0" y="0"></rect>
<rect height="12" width="12" x="18" y="0"></rect>
<rect height="12" width="12" x="0" y="18"></rect>
<rect height="14" rx="2" width="60" x="35" y="8"></rect>
</svg>
</div>

<div className="max-w-4xl mx-auto text-center scroll-reveal">
<i className="w-12 h-12 text-electric/20 mx-auto mb-8 fill-current" data-lucide="quote"></i>
<blockquote className="text-4xl md:text-5xl font-serif text-deepblack leading-tight mb-8">
                    "JunoDS didn't just update our stack; they completely reimagined how we interpret value from our data."
                </blockquote>
</div>
</div>
</section>

<section className="py-32 bg-deepblack text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 scroll-reveal">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-8">Ready to transform your data?</h2>
<p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">Join the forward-thinking companies leveraging JunoDS to build the future.</p>
<a className="inline-flex items-center justify-center bg-electric text-white text-lg font-medium px-10 py-5 rounded-full transition-all hover:bg-white hover:text-electric hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]" href="#">
                Start your Project
            </a>
</div>
</section>

<footer className="bg-deepblack border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2 text-white">
<span className="text-xl font-medium tracking-tight">juno<span className="font-normal text-slate-400">ds</span></span>
</div>
<div className="flex gap-8 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-sm text-slate-600">
                © 2024 Juno Data Science.
            </div>
</div>
</footer>



    </>
  );
}
