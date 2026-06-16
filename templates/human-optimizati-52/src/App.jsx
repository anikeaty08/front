import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Init Icons
        lucide.createIcons();

        // Scroll Reveal Animation (Intersection Observer)
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal');
            elements.forEach(el => observer.observe(el));
        });

        // Scroll Progress Bar
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("progress-bar").style.width = scrolled + "%";
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none -z-10 h-[60vh]"></div>

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-100 transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-5 h-5 bg-neutral-900 rounded-sm flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-neutral-900">WILL.</span>
</div>

<div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-neutral-500 tracking-tight">
<a className="hover:text-neutral-900 transition-colors duration-200" href="#">Product</a>
<a className="hover:text-neutral-900 transition-colors duration-200" href="#">Method</a>
<a className="hover:text-neutral-900 transition-colors duration-200" href="#">Customers</a>
<a className="hover:text-neutral-900 transition-colors duration-200" href="#">Pricing</a>
</div>

<div className="flex items-center gap-3">
<a className="text-[13px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors hidden sm:block tracking-tight" href="#">Log In</a>
<button className="bg-neutral-900 text-white px-3.5 py-1.5 text-[13px] font-medium tracking-tight hover:bg-neutral-800 transition-all rounded-md shadow-sm">
                    Get Access
                </button>
</div>
</div>

<div className="h-[1px] bg-neutral-100 w-full relative">
<div className="absolute left-0 top-0 h-full bg-neutral-900 w-0 transition-all duration-100" id="progress-bar"></div>
</div>
</nav>

<main className="flex-grow pt-32 pb-12 px-6 relative overflow-visible">
<div className="max-w-6xl mx-auto">

<div className="flex flex-col items-center text-center space-y-8 mb-20 max-w-3xl mx-auto z-10 relative reveal active">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-50 border border-neutral-200/60 shadow-sm transition-all hover:bg-white hover:border-neutral-300 cursor-default">
<span className="flex h-1.5 w-1.5 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-neutral-900"></span>
</span>
<span className="text-[11px] font-medium text-neutral-600 uppercase tracking-wide">WillOS 2.0 Live</span>
</div>

<h1 className="text-5xl sm:text-7xl font-semibold tracking-tighter text-neutral-900 leading-[1.05]">
                    Unlock your <br/>
<span className="text-neutral-400/80">biological potential.</span>
</h1>

<p className="text-neutral-500 text-[17px] font-normal leading-relaxed max-w-lg mx-auto tracking-tight">
                    The operating system for your health. Track, analyze, and optimize your cognitive and physical performance with precision data.
                </p>

<div className="flex items-center justify-center gap-3 pt-4">
<button className="group h-11 px-5 bg-neutral-900 text-white text-[13px] font-medium rounded-md hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-lg shadow-neutral-900/10 hover:shadow-neutral-900/20 tracking-tight">
                        Start Free Trial
                        <i className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="h-11 px-5 bg-white text-neutral-600 border border-neutral-200 text-[13px] font-medium rounded-md hover:bg-neutral-50 hover:text-neutral-900 transition-all shadow-sm tracking-tight">
                        View Demo
                    </button>
</div>

<div className="pt-8 flex items-center gap-5 text-neutral-400 grayscale opacity-60 hover:opacity-100 transition-opacity duration-500">
<div className="flex -space-x-2.5">
<div className="w-7 h-7 rounded-full border-[1.5px] border-white bg-neutral-100 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop"/>
</div>
<div className="w-7 h-7 rounded-full border-[1.5px] border-white bg-neutral-100 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;h=64&amp;fit=crop"/>
</div>
<div className="w-7 h-7 rounded-full border-[1.5px] border-white bg-neutral-100 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&amp;h=64&amp;fit=crop"/>
</div>
</div>
<span className="text-[11px] font-medium tracking-tight">Used by 2,000+ elite performers</span>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto mt-16 reveal delay-100">

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-neutral-100/80 to-transparent rounded-full blur-3xl -z-10 opacity-50"></div>

<div className="bg-white rounded-xl border border-neutral-200 shadow-subtle p-1.5 relative z-10 overflow-hidden">

<div className="h-9 bg-neutral-50/50 border-b border-neutral-100 rounded-t-lg flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-200/80"></div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 bg-white min-h-[400px]">

<div className="col-span-1 space-y-6">
<div>
<h3 className="text-[11px] font-semibold text-neutral-400 uppercase tracking-widest mb-4">Current Status</h3>
<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors cursor-default group">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-white rounded-[6px] border border-neutral-200 shadow-sm text-neutral-600 group-hover:scale-105 transition-transform duration-300">
<i className="w-3.5 h-3.5" data-lucide="zap"></i>
</div>
<span className="text-[13px] font-medium text-neutral-600 tracking-tight">Energy</span>
</div>
<span className="text-[13px] font-semibold text-neutral-900 tracking-tight">94%</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors cursor-default group">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-white rounded-[6px] border border-neutral-200 shadow-sm text-neutral-600 group-hover:scale-105 transition-transform duration-300">
<i className="w-3.5 h-3.5" data-lucide="moon"></i>
</div>
<span className="text-[13px] font-medium text-neutral-600 tracking-tight">Recovery</span>
</div>
<span className="text-[13px] font-semibold text-neutral-900 tracking-tight">8.2h</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors cursor-default group">
<div className="flex items-center gap-3">
<div className="p-1.5 bg-white rounded-[6px] border border-neutral-200 shadow-sm text-neutral-600 group-hover:scale-105 transition-transform duration-300">
<i className="w-3.5 h-3.5" data-lucide="brain"></i>
</div>
<span className="text-[13px] font-medium text-neutral-600 tracking-tight">Focus</span>
</div>
<div className="flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-[13px] font-semibold text-neutral-900 tracking-tight">Peak</span>
</div>
</div>
</div>
</div>
<div className="pt-5 border-t border-neutral-100">
<div className="flex items-center gap-3 mb-3">
<div className="h-7 w-7 rounded-full bg-neutral-900 text-white flex items-center justify-center text-[10px] font-semibold">AI</div>
<div>
<p className="text-[13px] font-medium text-neutral-900 tracking-tight">Will Assistant</p>
<p className="text-[10px] text-neutral-500 tracking-tight">Just now</p>
</div>
</div>
<div className="bg-neutral-50 p-3.5 rounded-lg rounded-tl-none border border-neutral-100 relative group">
<p className="text-[12px] text-neutral-600 leading-relaxed tracking-tight">Your HRV is trending up significantly. Based on your calendar, I suggest increasing workout intensity by 15% today.</p>
<div className="absolute -right-1 -top-1 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-2 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-lg font-semibold text-neutral-900 tracking-tight">Performance</h3>
<p className="text-[11px] text-neutral-500 tracking-tight">Last 7 Days vs. Baseline</p>
</div>
<div className="flex gap-2">
<button className="p-1.5 rounded-md hover:bg-neutral-100 transition-colors">
<i className="w-3.5 h-3.5 text-neutral-500" data-lucide="calendar"></i>
</button>
<button className="p-1.5 rounded-md hover:bg-neutral-100 transition-colors">
<i className="w-3.5 h-3.5 text-neutral-500" data-lucide="download"></i>
</button>
</div>
</div>

<div className="flex-grow w-full relative h-48 border-b border-l border-neutral-100 group cursor-crosshair">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-neutral-50"></div>
<div className="w-full h-px bg-neutral-50"></div>
<div className="w-full h-px bg-neutral-50"></div>
<div className="w-full h-px bg-neutral-50"></div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#171717" stop-opacity="0.08"></stop>
<stop offset="100%" stop-color="#171717" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M0 150 C 50 150, 80 120, 120 130 S 180 160, 220 140 S 280 80, 350 90 S 420 110, 480 80 S 550 40, 600 50 S 650 20, 700 30 V 200 H 0 Z" fill="url(#chartGradient)"></path>
<path d="M0 150 C 50 150, 80 120, 120 130 S 180 160, 220 140 S 280 80, 350 90 S 420 110, 480 80 S 550 40, 600 50 S 650 20, 700 30" fill="none" stroke="#171717" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>

<g className="transition-transform duration-300 hover:scale-110 origin-center">
<circle cx="480" cy="80" fill="#ffffff" r="4" stroke="#171717" strokeWidth="1.5"></circle>
<circle className="animate-pulse" cx="480" cy="80" fill="#171717" fillOpacity="0.1" r="12"></circle>
</g>
</svg>

<div className="absolute top-[45px] left-[65%] bg-neutral-900 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                                    Score: 98.4
                                    <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45"></div>
</div>
</div>

<div className="flex justify-between mt-3 text-[10px] text-neutral-400 font-medium px-1 tracking-tight">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
<span>Fri</span>
<span>Sat</span>
<span>Sun</span>
</div>
</div>
</div>
</div>

<div className="absolute -right-12 top-24 bg-white p-3.5 rounded-lg shadow-card border border-neutral-100 animate-float hidden lg:block w-[180px]">
<div className="flex items-center gap-3 mb-2">
<div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-3.5 h-3.5" data-lucide="droplets"></i>
</div>
<div>
<p className="text-[11px] font-semibold text-neutral-900 tracking-tight">Hydration</p>
<p className="text-[9px] text-neutral-500 tracking-tight">Optimal level</p>
</div>
</div>
<div className="w-full bg-neutral-100 rounded-full h-1 mt-1 overflow-hidden">
<div className="bg-blue-500 h-1 rounded-full w-[85%]"></div>
</div>
</div>
<div className="absolute -left-10 bottom-20 bg-white p-3.5 rounded-lg shadow-card border border-neutral-100 animate-float-delayed hidden lg:block w-[180px]">
<div className="flex items-center gap-2.5">
<div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
<p className="text-[11px] font-semibold text-neutral-900 tracking-tight">Live Sync Active</p>
</div>
<p className="text-[9px] text-neutral-500 mt-1 pl-4 tracking-tight">Oura Ring connected</p>
</div>
</div>
</div>
</main>

<section className="py-24 bg-white border-t border-neutral-100 overflow-hidden relative">
<div className="max-w-6xl mx-auto px-6 mb-12 text-center reveal">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-3">Loved by high performers</h2>
<p className="text-sm text-neutral-500 tracking-tight">From professional athletes to software engineers.</p>
</div>

<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

<div className="flex w-full overflow-hidden gap-6 mb-6 pause-on-hover reveal delay-100">
<div className="flex gap-6 animate-scroll-left min-w-max">


<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"Since using Will, my HRV is up 15%. The actionable insights are actually actionable, not just raw data dumps."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Alex M.</p>
<p className="text-[10px] text-neutral-500">Product Designer</p>
</div>
</div>
</div>

<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"The focus metrics are insanely accurate. It knows when I'm in flow state before I do."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Sarah K.</p>
<p className="text-[10px] text-neutral-500">Triathlete</p>
</div>
</div>
</div>

<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"Finally, a health dashboard that feels like it was designed by humans, not robots. Clean and fast."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">James L.</p>
<p className="text-[10px] text-neutral-500">Founder</p>
</div>
</div>
</div>

<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"I've tried Whoop and Oura apps, but this aggregates everything into a much clearer picture."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Marcus R.</p>
<p className="text-[10px] text-neutral-500">Engineer</p>
</div>
</div>
</div>

<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"Since using Will, my HRV is up 15%. The actionable insights are actually actionable."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Alex M.</p>
<p className="text-[10px] text-neutral-500">Product Designer</p>
</div>
</div>
</div>
<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"The focus metrics are insanely accurate. It knows when I'm in flow state before I do."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Sarah K.</p>
<p className="text-[10px] text-neutral-500">Triathlete</p>
</div>
</div>
</div>
<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"Finally, a health dashboard that feels like it was designed by humans, not robots."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">James L.</p>
<p className="text-[10px] text-neutral-500">Founder</p>
</div>
</div>
</div>
<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"I've tried Whoop and Oura apps, but this aggregates everything into a much clearer picture."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Marcus R.</p>
<p className="text-[10px] text-neutral-500">Engineer</p>
</div>
</div>
</div>
</div>
</div>

<div className="flex w-full overflow-hidden gap-6 pause-on-hover reveal delay-200">
<div className="flex gap-6 animate-scroll-right min-w-max">


<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"Recovery score is spot on. I pushed too hard yesterday and WillOS told me to rest today."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Elena R.</p>
<p className="text-[10px] text-neutral-500">Yoga Instructor</p>
</div>
</div>
</div>

<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"The best investment I've made for my biological health this year."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">David C.</p>
<p className="text-[10px] text-neutral-500">VC Partner</p>
</div>
</div>
</div>

<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"It's like having a dedicated performance coach in my pocket 24/7."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Tom H.</p>
<p className="text-[10px] text-neutral-500">Marathon Runner</p>
</div>
</div>
</div>

<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"Simple, elegant, and effective. The data visualization is top tier."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Lisa P.</p>
<p className="text-[10px] text-neutral-500">Architect</p>
</div>
</div>
</div>

<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"Recovery score is spot on. I pushed too hard yesterday and WillOS told me to rest today."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Elena R.</p>
<p className="text-[10px] text-neutral-500">Yoga Instructor</p>
</div>
</div>
</div>
<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"The best investment I've made for my biological health this year."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">David C.</p>
<p className="text-[10px] text-neutral-500">VC Partner</p>
</div>
</div>
</div>
<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"It's like having a dedicated performance coach in my pocket 24/7."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Tom H.</p>
<p className="text-[10px] text-neutral-500">Marathon Runner</p>
</div>
</div>
</div>
<div className="w-80 bg-neutral-50 border border-neutral-100 p-5 rounded-lg">
<p className="text-[13px] text-neutral-700 leading-relaxed mb-4 tracking-tight">"Simple, elegant, and effective. The data visualization is top tier."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden"><img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&amp;h=64&amp;fit=crop"/></div>
<div>
<p className="text-[11px] font-semibold text-neutral-900">Lisa P.</p>
<p className="text-[10px] text-neutral-500">Architect</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-100 bg-white py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-[11px] text-neutral-400 tracking-tight">© 2024 Will Optimization Inc.</p>
<div className="flex items-center gap-6">
<a className="text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors tracking-tight" href="#">Privacy</a>
<a className="text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors tracking-tight" href="#">Terms</a>
<a className="text-[11px] text-neutral-400 hover:text-neutral-900 transition-colors tracking-tight" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
