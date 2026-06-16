import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'Inter', 'sans-serif'],
display: ['Geist', 'Inter', 'sans-serif'],
},
colors: {
verina: {
50: '#f5f3ff',
100: '#ede9fe',
200: '#ddd6fe',
300: '#c4b5fd',
400: '#a78bfa',
500: '#8b5cf6',
600: '#7c3aed',
700: '#6d28d9',
800: '#5b21b6',
900: '#4c1d95',
},
neutral: {
850: '#1f1f1f',
}
},
letterSpacing: {
tightest: '-.075em',
tighter: '-.05em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'float-slow': 'float 8s ease-in-out infinite',
'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
pulseGlow: {
'0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
'50%': { opacity: '0.8', transform: 'scale(1.1)' },
},
shimmer: {
'0%': { backgroundPosition: '-200% 0' },
'100%': { backgroundPosition: '200% 0' },
}
}
}
}
}



        // Spotlight Effect Logic
        function handleSpotlight(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-neutral-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="lucide:hexagon" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900">Verina<span className="font-normal text-neutral-500 ml-1">Ethos Studio</span></span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#build">Build</a>
<a className="hover:text-neutral-900 transition-colors" href="#design">Design</a>
<a className="hover:text-neutral-900 transition-colors" href="#labs">Labs</a>
<a className="hover:text-neutral-900 transition-colors" href="#cloud">Cloud</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-600 hover:text-neutral-900" href="#">Sign in</a>
<button className="bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-medium px-4 py-2 rounded-full transition-all flex items-center gap-2">
                    Start Project
                    <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="pt-32 pb-16 px-6 relative">

<div className="absolute inset-0 top-0 h-[80vh] grid-bg -z-10 pointer-events-none"></div>
<section className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm text-xs font-medium text-neutral-600 mx-auto">
<span className="w-1.5 h-1.5 rounded-full bg-verina-600 animate-pulse"></span>
                Now accepting new enterprise partners
            </div>
<h1 className="text-5xl sm:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.1]">
                Technology Built on <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900">Trust, Ethics &amp; Results.</span>
</h1>
<p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed font-light">
                Verina Ethos Studio creates modern digital ecosystems. From custom software development to AI automation, we build the infrastructure for your growth.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="shimmer-btn animate-shimmer text-white px-8 py-3.5 rounded-full text-sm font-medium hover:scale-[1.02] transition-transform active:scale-95 shadow-lg shadow-neutral-500/20 flex items-center gap-2">
                    Explore Capabilities
                    <iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</button>
<button className="px-8 py-3.5 rounded-full text-sm font-medium text-neutral-600 border border-neutral-200 bg-white hover:bg-neutral-50 transition-colors flex items-center gap-2">
<iconify-icon icon="lucide:play-circle" strokeWidth="1.5" width="16"></iconify-icon>
                    Watch Showreel
                </button>
</div>
</section>

<section className="max-w-7xl mx-auto mt-24 sm:mt-32" id="products">
<div className="flex items-end justify-between mb-12 px-2">
<div>
<h2 className="text-3xl font-medium tracking-tight text-neutral-900">The Verina Ecosystem</h2>
<p className="text-neutral-500 mt-2 text-sm">Comprehensive digital solutions across five key pillars.</p>
</div>
<div className="hidden sm:flex gap-2">
<div className="w-2 h-2 rounded-full bg-neutral-200"></div>
<div className="w-2 h-2 rounded-full bg-neutral-200"></div>
<div className="w-2 h-2 rounded-full bg-neutral-900"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">

<div className="lg:col-span-7 group relative overflow-hidden rounded-[32px] bg-white border border-neutral-200 p-8 sm:p-10 flex flex-col justify-between min-h-[480px] card-hover-effect spotlight-card" onmousemove="handleSpotlight(event)">
<div className="spotlight-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
<iconify-icon icon="lucide:code-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-2">Verina Build</h3>
<p className="text-neutral-500 text-sm max-w-md leading-relaxed">
                            Complete digital development. From complex web applications to native mobile experiences.
                        </p>
<div className="flex flex-wrap gap-2 mt-6">
<span className="text-xs font-medium bg-neutral-50 border border-neutral-100 text-neutral-600 px-3 py-1 rounded-full">Websites</span>
<span className="text-xs font-medium bg-neutral-50 border border-neutral-100 text-neutral-600 px-3 py-1 rounded-full">Web Apps</span>
<span className="text-xs font-medium bg-neutral-50 border border-neutral-100 text-neutral-600 px-3 py-1 rounded-full">Mobile Apps</span>
<span className="text-xs font-medium bg-neutral-50 border border-neutral-100 text-neutral-600 px-3 py-1 rounded-full">Custom Software</span>
</div>
</div>

<div className="relative mt-10 w-full h-full min-h-[200px] bg-neutral-900 rounded-t-xl overflow-hidden shadow-2xl border border-neutral-800 transform group-hover:scale-[1.02] group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center gap-1.5 px-4 py-3 border-b border-neutral-800">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
</div>
<div className="p-5 font-mono text-xs text-neutral-400 space-y-2">
<div className="flex"><span className="text-purple-400 mr-2">const</span> <span className="text-blue-400">VerinaApp</span> <span className="text-white mr-2">=</span> <span className="text-yellow-300">()</span> <span className="text-purple-400">=&gt;</span> <span className="text-yellow-300">{</span></div>
<div className="pl-4 flex"><span className="text-purple-400 mr-2">return</span> <span className="text-blue-300">(</span></div>
<div className="pl-8 flex"><span className="text-gray-500">&lt;</span><span className="text-pink-400">DigitalEcosystem</span></div>
<div className="pl-12 flex"><span className="text-green-400">performance</span>=<span className="text-blue-300">{100}</span></div>
<div className="pl-12 flex"><span className="text-green-400">security</span>=<span className="text-blue-300">"enterprise"</span></div>
<div className="pl-8 flex"><span className="text-gray-500">/&gt;</span></div>
<div className="pl-4 flex"><span className="text-blue-300">)</span>;</div>
<div className="flex"><span className="text-yellow-300">}</span>;</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 blur-[60px]"></div>
</div>
</div>

<div className="lg:col-span-5 group relative overflow-hidden rounded-[32px] bg-neutral-50 border border-neutral-200 p-8 flex flex-col min-h-[480px] card-hover-effect" id="design">
<div className="absolute top-0 right-0 p-12 opacity-5">
<iconify-icon icon="lucide:pen-tool" width="200"></iconify-icon>
</div>
<div className="relative z-10 mb-8">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-100 flex items-center justify-center text-neutral-900 mb-6 shadow-sm">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-2">Verina Design</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-4">
                            UI/UX &amp; Branding. We craft visual identities and design systems that scale.
                        </p>
<ul className="space-y-2">
<li className="flex items-center text-xs font-medium text-neutral-600 gap-2">
<iconify-icon className="text-neutral-400" icon="lucide:check"></iconify-icon> Brand Identity
                            </li>
<li className="flex items-center text-xs font-medium text-neutral-600 gap-2">
<iconify-icon className="text-neutral-400" icon="lucide:check"></iconify-icon> Design Systems
                            </li>
<li className="flex items-center text-xs font-medium text-neutral-600 gap-2">
<iconify-icon className="text-neutral-400" icon="lucide:check"></iconify-icon> Visual Design
                            </li>
</ul>
</div>

<div className="relative flex-1 w-full bg-white rounded-xl shadow-sm border border-neutral-100 p-4 overflow-hidden group-hover:shadow-md transition-shadow">

<div className="absolute inset-0 grid grid-cols-2 gap-4 p-6 opacity-80">
<div className="bg-neutral-50 rounded-lg h-24 w-full"></div>
<div className="bg-neutral-100 rounded-lg h-24 w-full"></div>
<div className="bg-neutral-900 rounded-lg h-32 w-full col-span-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-verina-600 to-purple-400 opacity-20"></div>
</div>
</div>

<div className="absolute bottom-10 right-10 bg-black text-white px-3 py-1 rounded-full text-[10px] font-bold shadow-xl z-20 animate-float-slow flex items-center gap-1">
<iconify-icon icon="lucide:mouse-pointer-2" width="10"></iconify-icon> Ethan
                        </div>
</div>
</div>

<div className="lg:col-span-4 group relative overflow-hidden rounded-[32px] bg-neutral-900 text-white p-8 flex flex-col justify-between min-h-[400px] card-hover-effect">
<div className="absolute top-0 right-0 w-full h-full overflow-hidden">
<div className="absolute -top-20 -right-20 w-64 h-64 bg-verina-600 rounded-full blur-[80px] opacity-30 group-hover:opacity-40 transition-opacity"></div>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/10">
<iconify-icon icon="lucide:film" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Verina Motion</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            Video &amp; Visual Media. Explainer videos, motion graphics, and product demos that convert.
                        </p>
</div>
<div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm group-hover:bg-white/10 transition-colors">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center pl-1">
<iconify-icon icon="lucide:play" width="16"></iconify-icon>
</div>
<div className="space-y-1">
<div className="h-1.5 w-24 bg-neutral-500 rounded-full"></div>
<div className="h-1.5 w-16 bg-neutral-600 rounded-full"></div>
</div>
<div className="ml-auto flex gap-0.5 items-end h-4">
<div className="w-1 bg-verina-500 h-2 animate-pulse"></div>
<div className="w-1 bg-verina-500 h-4 animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-verina-500 h-3 animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-verina-500 h-2 animate-pulse" style={{animationDelay: '0.3s'}}></div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 group relative overflow-hidden rounded-[32px] bg-gradient-to-b from-white to-neutral-50 border border-neutral-200 p-8 flex flex-col justify-between min-h-[400px] card-hover-effect" id="labs">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-2xl bg-verina-50 border border-verina-100 flex items-center justify-center text-verina-600">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="bg-orange-100 text-orange-600 border border-orange-200 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="lucide:flame" width="10"></iconify-icon> Hot
                            </span>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">Verina Labs</h3>
<p className="text-neutral-500 text-sm leading-relaxed">
                            AI, Automation &amp; Chatbots.
                        </p>
<div className="mt-4 space-y-2">
<div className="bg-white border border-neutral-100 p-2.5 rounded-lg shadow-sm text-xs text-neutral-600 flex items-center gap-2">
<iconify-icon className="text-verina-500" icon="lucide:message-square"></iconify-icon> WhatsApp Chatbot Dev
                            </div>
<div className="bg-white border border-neutral-100 p-2.5 rounded-lg shadow-sm text-xs text-neutral-600 flex items-center gap-2">
<iconify-icon className="text-verina-500" icon="lucide:zap"></iconify-icon> Process Automation
                            </div>
<div className="bg-white border border-neutral-100 p-2.5 rounded-lg shadow-sm text-xs text-neutral-600 flex items-center gap-2">
<iconify-icon className="text-verina-500" icon="lucide:bar-chart-3"></iconify-icon> Business Dashboards
                            </div>
</div>
</div>
</div>

<div className="lg:col-span-4 group relative overflow-hidden rounded-[32px] bg-white border border-neutral-200 p-8 flex flex-col justify-between min-h-[400px] card-hover-effect">
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-900 mb-6">
<iconify-icon icon="lucide:cloud" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">Verina Cloud</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-6">
                            Hosting, Deployment &amp; Support. Scalable infrastructure for modern startups.
                        </p>
</div>

<div className="bg-neutral-50 border border-neutral-100 rounded-xl p-4 relative z-10">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-semibold text-neutral-700">System Status</span>
<span className="flex items-center gap-1.5 text-[10px] text-green-600 font-medium bg-green-50 px-1.5 py-0.5 rounded border border-green-100">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Operational
                            </span>
</div>
<div className="space-y-2">
<div className="h-1 w-full bg-neutral-200 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[98%] rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-400 font-mono">
<span>Uptime</span>
<span>99.99%</span>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="h-8 bg-white border border-neutral-100 rounded flex items-center justify-center"><iconify-icon className="text-neutral-400" icon="simple-icons:aws" width="16"></iconify-icon></div>
<div className="h-8 bg-white border border-neutral-100 rounded flex items-center justify-center"><iconify-icon className="text-neutral-900" icon="simple-icons:vercel" width="16"></iconify-icon></div>
<div className="h-8 bg-white border border-neutral-100 rounded flex items-center justify-center"><iconify-icon className="text-neutral-400" icon="simple-icons:googlecloud" width="16"></iconify-icon></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto mt-24">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-neutral-200 py-12">
<div className="text-center md:text-left space-y-1">
<h4 className="text-3xl font-medium text-neutral-900 tracking-tight">100+</h4>
<p className="text-sm text-neutral-500">Digital Products Shipped</p>
</div>
<div className="text-center md:text-left space-y-1">
<h4 className="text-3xl font-medium text-neutral-900 tracking-tight">99.9%</h4>
<p className="text-sm text-neutral-500">Uptime Guarantee</p>
</div>
<div className="text-center md:text-left space-y-1">
<h4 className="text-3xl font-medium text-neutral-900 tracking-tight">24/7</h4>
<p className="text-sm text-neutral-500">Support &amp; Monitoring</p>
</div>
<div className="text-center md:text-left space-y-1">
<h4 className="text-3xl font-medium text-neutral-900 tracking-tight">Global</h4>
<p className="text-sm text-neutral-500">Client Base</p>
</div>
</div>
</section>

<section className="w-full mt-24 mb-24 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10"></div>
<p className="text-center text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-8">Trusted by innovators</p>
<div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
<div className="flex items-center gap-16 px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="simple-icons:stripe" width="60"></iconify-icon>
<iconify-icon icon="simple-icons:airbnb" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:spotify" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:slack" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="35"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:loom" width="80"></iconify-icon>
</div>

<div className="flex items-center gap-16 px-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="simple-icons:stripe" width="60"></iconify-icon>
<iconify-icon icon="simple-icons:airbnb" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:spotify" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:slack" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:notion" width="35"></iconify-icon>
<iconify-icon icon="simple-icons:linear" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:loom" width="80"></iconify-icon>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="relative overflow-hidden rounded-[32px] bg-neutral-900 text-white p-12 lg:p-24 text-center">

<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-verina-900/40 via-neutral-900 to-transparent"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-8">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tight">Ready to build the future?</h2>
<p className="text-lg text-neutral-400 font-light">
                        Transform your ideas into high-performance digital reality. Partner with Verina Ethos Studio today.
                    </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-neutral-900 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-100 transition-colors shadow-xl">
                            Start a Project
                        </button>
<button className="bg-transparent border border-neutral-700 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white/5 transition-colors">
                            View Case Studies
                        </button>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto px-6 pb-12">
<div className="border-t border-neutral-200 pt-12 flex flex-col md:flex-row justify-between gap-12">
<div className="space-y-4 max-w-xs">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-neutral-900 rounded flex items-center justify-center text-white">
<iconify-icon icon="lucide:hexagon" width="12"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tight">Verina</span>
</div>
<p className="text-sm text-neutral-500">
                        Technology Built on Trust, Ethics &amp; Results.
                        <br/>San Francisco, CA.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Development</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">UI/UX Design</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Motion Graphics</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">AI &amp; Labs</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-neutral-100 mt-12 pt-8 text-center text-xs text-neutral-400">
                © 2024 Verina Ethos Studio Technology. All rights reserved.
            </div>
</footer>
</main>


    </>
  );
}
