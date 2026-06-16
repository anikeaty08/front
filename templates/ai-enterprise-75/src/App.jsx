import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
lemon: {
400: '#EDF22C',
500: '#D9DE20',
600: '#c5cc10', // Darker for light mode text
glow: 'rgba(237, 242, 44, 0.15)'
},
zinc: {
850: '#1f1f22',
950: '#0c0c0e',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
},
}
}
}
// Theme Toggle Logic
function toggleTheme() {
const html = document.documentElement;
const isDark = html.classList.toggle('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
// Update icons
document.getElementById('icon-sun').classList.toggle('hidden');
document.getElementById('icon-moon').classList.toggle('hidden');
}
// Initialize Theme
document.addEventListener('DOMContentLoaded', () => {
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
document.documentElement.classList.add('dark');
document.getElementById('icon-sun').classList.remove('hidden');
document.getElementById('icon-moon').classList.add('hidden');
} else {
document.documentElement.classList.remove('dark');
document.getElementById('icon-sun').classList.add('hidden');
document.getElementById('icon-moon').classList.remove('hidden');
}
});



        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.spotlight-card');
            document.addEventListener('mousemove', e => {
                for(const card of cards) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<div className="bg-grain"></div>
<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[-1]">

<div className="hidden dark:block absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-lemon-400/5 rounded-full blur-[100px] opacity-60"></div>
<div className="hidden dark:block absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[120px]"></div>

<div className="dark:hidden absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-gray-200 to-transparent rounded-full blur-[80px] opacity-60"></div>
<div className="dark:hidden absolute top-[10%] right-[-10%] w-[500px] h-[500px] bg-lemon-400/10 rounded-full blur-[100px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-white/5 bg-white/70 dark:bg-[#030303]/70 backdrop-blur-xl transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group relative" href="#">

<div className="relative w-8 h-8 flex items-center justify-center">
<svg className="w-full h-full transition-transform duration-500 group-hover:scale-110" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">

<circle className="text-zinc-300 dark:text-zinc-700 logo-mark opacity-50" cx="20" cy="20" r="18" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5"></circle>

<path className="text-zinc-900 dark:text-white" d="M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>

<path className="text-zinc-900 dark:text-white" d="M20 20L28 12" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<circle className="fill-lemon-400 stroke-none animate-pulse-slow" cx="28" cy="12" r="3"></circle>
</svg>
</div>
<div className="relative flex flex-col justify-center">
<span className="text-lg font-bold tracking-tighter text-zinc-900 dark:text-white leading-none">
                        LemonStalk
                    </span>
<span className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 font-medium">Enterprise AI</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors" href="#about">About</a>
<a className="text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors" href="#products">Products</a>
<div className="w-px h-4 bg-zinc-300 dark:bg-zinc-800"></div>
<button className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition-all hover:ring-1 ring-zinc-200 dark:ring-zinc-700" onclick="toggleTheme()">
<iconify-icon className="hidden" icon="lucide:sun" id="icon-sun" width="16"></iconify-icon>
<iconify-icon icon="lucide:moon" id="icon-moon" width="16"></iconify-icon>
</button>
<a className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black rounded-full hover:bg-zinc-700 dark:hover:bg-lemon-400 transition-colors text-xs font-semibold" href="#contact">
                    Contact Us
                </a>
</div>

<div className="flex items-center gap-4 md:hidden">
<button className="text-zinc-900 dark:text-white" onclick="toggleTheme()">
<iconify-icon icon="lucide:sun-moon" width="20"></iconify-icon>
</button>
<button className="text-zinc-900 dark:text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<main>
<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-xs font-medium text-zinc-800 dark:text-lemon-400 mb-8 backdrop-blur-sm shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lemon-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lemon-500 dark:bg-lemon-400"></span>
</span>
                    AI-Driven Enterprise Architecture
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-zinc-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                    Empowering enterprises with <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-zinc-900 to-zinc-600 dark:from-zinc-400 dark:via-zinc-200 dark:to-zinc-500 animate-pulse-slow">intelligent technology.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
                    We partner with organizations to modernize operations, enhance efficiency, and accelerate growth in an increasingly digital world.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative w-full sm:w-auto px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-semibold rounded-md overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]" href="#contact">
<span className="relative z-10 flex items-center justify-center gap-2">
                            Start Transformation
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</span>
</a>
<a className="w-full sm:w-auto px-6 py-3 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-black dark:hover:text-white transition-all" href="#about">
                        Explore Vision
                    </a>
</div>
</div>

<div className="max-w-5xl mx-auto mt-24 border-t border-zinc-200 dark:border-white/5 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="group cursor-default">
<div className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight group-hover:text-lemon-600 dark:group-hover:text-lemon-400 transition-colors duration-300">20+</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Years Experience</div>
</div>
<div className="group cursor-default">
<div className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight group-hover:text-lemon-600 dark:group-hover:text-lemon-400 transition-colors duration-300">100+</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Digital Solutions</div>
</div>
<div className="group cursor-default">
<div className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight group-hover:text-lemon-600 dark:group-hover:text-lemon-400 transition-colors duration-300">99.9%</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Client Satisfaction</div>
</div>
<div className="group cursor-default">
<div className="text-2xl md:text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight group-hover:text-lemon-600 dark:group-hover:text-lemon-400 transition-colors duration-300">2030</div>
<div className="text-xs text-zinc-500 uppercase tracking-widest mt-2">Vision Goal</div>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-[#050505] transition-colors duration-500" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 spotlight-card p-8 md:p-10 rounded-2xl group">
<div className="absolute top-8 right-8 p-4 opacity-5 group-hover:opacity-10 transition-opacity duration-700 transform group-hover:scale-110 group-hover:rotate-12 dark:invert-0 invert">
<iconify-icon icon="lucide:cpu" strokeWidth="1" width="140"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6 flex items-center gap-3">
                            About LemonStalk
                            <span className="w-2 h-2 rounded-full bg-lemon-500 dark:bg-lemon-400 animate-pulse"></span>
</h2>
<div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base relative z-10">
<p>
                                Lemonstalk is a forward-looking technology company specializing in the development of custom AI-powered enterprise applications and resilient technology infrastructure.
                            </p>
<p>
                                Our leadership team brings more than two decades of cross-border, multi-industry experience across business transformation, financial advisory, real estate, software engineering, and systems integration.
                            </p>
</div>
</div>

<div className="lg:col-span-4 spotlight-card p-8 md:p-10 rounded-2xl flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-lemon-100 dark:bg-lemon-400/10 flex items-center justify-center text-lemon-600 dark:text-lemon-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:target" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white tracking-tight mb-3">Our Mission</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                To collaborate with our clients to achieve defined business outcomes by delivering exceptional, cost-effective, and innovation-driven technology solutions.
                            </p>
</div>
</div>

<div className="lg:col-span-4 spotlight-card p-8 md:p-10 rounded-2xl flex flex-col justify-between">
<div>
<div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:telescope" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white tracking-tight mb-3">Our Vision</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                To become a leading and trusted name in digital business transformation for organizations of all sizes across Nigeria and Africa by 2030.
                            </p>
</div>
</div>

<div className="lg:col-span-8 spotlight-card p-8 md:p-10 rounded-2xl">
<h3 className="text-xl font-medium text-zinc-900 dark:text-white tracking-tight mb-4">Strategic Approach</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                            Our mission is to transform business processes through AI-enabled innovation, foster operational excellence through cultural and organizational reform, and drive sustainable cost optimization through strategic partnerships.
                         </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-gray-50 dark:bg-[#030303] transition-colors duration-500">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-4">Core Values</h2>
<p className="text-zinc-500">The principles that drive our innovation and client relationships.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="spotlight-card p-6 rounded-xl group hover:-translate-y-1 transition-transform duration-300">
<div className="mb-4 text-zinc-400 group-hover:text-lemon-500 dark:group-hover:text-lemon-400 transition-colors">
<iconify-icon icon="lucide:heart-handshake" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight mb-2">Trust</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            We cultivate a culture of collaborative excellence, leveraging individual strengths to challenge convention and deliver value.
                        </p>
</div>

<div className="spotlight-card p-6 rounded-xl group hover:-translate-y-1 transition-transform duration-300">
<div className="mb-4 text-zinc-400 group-hover:text-lemon-500 dark:group-hover:text-lemon-400 transition-colors">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight mb-2">Resilience</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            We are relentlessly committed to client success. We remain adaptable, solution-oriented, and unwavering in the face of complexity.
                        </p>
</div>

<div className="spotlight-card p-6 rounded-xl group hover:-translate-y-1 transition-transform duration-300">
<div className="mb-4 text-zinc-400 group-hover:text-lemon-500 dark:group-hover:text-lemon-400 transition-colors">
<iconify-icon icon="lucide:gauge" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 dark:text-white tracking-tight mb-2">Efficiency</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            We execute with discipline and precision, combining best-in-class tools and top industry talent to achieve superior outcomes.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white dark:bg-[#080808] border-y border-zinc-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500" id="expertise">

<div className="absolute inset-0 opacity-10 dark:opacity-10" style={{backgroundImage: 'linear-gradient(rgba(120, 120, 120, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(120, 120, 120, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
<div className="lg:w-1/2">
<h2 className="text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">Why LemonStalk?</h2>
<p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                        In a world of rapid digital evolution, you need a partner that understands not just the technology, but the business context behind it. We bring enterprise-grade discipline to agile innovation.
                    </p>
<div className="p-6 bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200 dark:border-white/5 rounded-xl hover:border-lemon-400/30 transition-colors duration-300">
<div className="flex items-start gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-lemon-100 dark:bg-lemon-400/10 flex items-center justify-center text-lemon-600 dark:text-lemon-400 shrink-0">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-900 dark:text-white font-medium text-sm">Expert Team</h4>
<p className="text-xs text-zinc-500 mt-1">Senior professionals with over 20 years of experience in enterprise-grade systems delivery.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-lemon-100 dark:bg-lemon-400/10 flex items-center justify-center text-lemon-600 dark:text-lemon-400 shrink-0">
<iconify-icon icon="lucide:globe-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-zinc-900 dark:text-white font-medium text-sm">Global Network</h4>
<p className="text-xs text-zinc-500 mt-1">Access to highly skilled domain and technology experts worldwide.</p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2">
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 group">
<iconify-icon className="text-zinc-400 dark:text-zinc-600 group-hover:text-lemon-500 dark:group-hover:text-lemon-400 transition-colors" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
                            Track record of successfully implementing 100+ digital solutions
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 group">
<iconify-icon className="text-zinc-400 dark:text-zinc-600 group-hover:text-lemon-500 dark:group-hover:text-lemon-400 transition-colors" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
                            AI-centric and Agile-driven delivery approach
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 group">
<iconify-icon className="text-zinc-400 dark:text-zinc-600 group-hover:text-lemon-500 dark:group-hover:text-lemon-400 transition-colors" icon="lucide:check-circle-2" strokeWidth="1.5" width="18"></iconify-icon>
                            Enterprise architecture and governance-as-a-service
                        </li>
</ul>
<div className="mt-10 pt-10 border-t border-zinc-200 dark:border-white/5">
<h3 className="text-xs uppercase tracking-widest text-zinc-500 mb-6">Partners</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="spotlight-card p-4 rounded-lg flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
<iconify-icon icon="lucide:scale" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-900 dark:text-white">Regentcomply.ai</div>
<p className="text-[10px] text-zinc-500">AI Regulatory Compliance</p>
</div>
</div>
<div className="spotlight-card p-4 rounded-lg flex items-center gap-3 group cursor-pointer">
<div className="w-8 h-8 rounded bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
<iconify-icon icon="lucide:layout-grid" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-900 dark:text-white">SpreadDigital.co</div>
<p className="text-[10px] text-zinc-500">Low-code Automation</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-50 dark:bg-[#030303] transition-colors duration-500" id="products">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-2">Our Products</h2>
<p className="text-zinc-500">Proprietary solutions designed for the modern enterprise.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-lemon-600 dark:hover:text-lemon-400 transition-colors mt-4 md:mt-0 group" href="#contact">
                        Request Demo <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="spotlight-card rounded-2xl group">

<div className="h-48 bg-zinc-100 dark:bg-[#0F0F0F] relative w-full overflow-hidden border-b border-zinc-200 dark:border-white/5 p-6 transition-colors duration-500">
<div className="w-full h-full border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900/50 p-4 transform group-hover:scale-[1.02] group-hover:rotate-1 transition-all duration-500 ease-out origin-bottom shadow-sm">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
<div className="space-y-3">
<div className="w-full h-12 bg-zinc-50 dark:bg-zinc-800/50 rounded flex items-center px-3 border border-zinc-200 dark:border-white/5 group-hover:border-lemon-400/20 transition-colors">
<div className="w-2 h-2 rounded-full bg-lemon-500 dark:bg-lemon-400 mr-3 shadow-[0_0_8px_rgba(237,242,44,0.5)]"></div>
<div className="w-1/2 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
</div>
<div className="w-full h-12 bg-zinc-50/50 dark:bg-zinc-800/30 rounded flex items-center px-3 border border-transparent">
<div className="w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-600 mr-3"></div>
<div className="w-1/3 h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded"></div>
</div>
</div>
</div>
</div>
<div className="relative z-20 p-8">
<div className="inline-block px-2 py-1 bg-lemon-100 dark:bg-lemon-400/10 text-lemon-700 dark:text-lemon-400 text-[10px] font-semibold uppercase tracking-wider rounded mb-4 border border-lemon-400/20">SaaS Platform</div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3 tracking-tight group-hover:text-lemon-600 dark:group-hover:text-lemon-400 transition-colors">AutomatePro</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                                A no-code, enterprise-grade workflow automation platform. AutomatePro supports centralized document management and enables automation across ERP functions.
                            </p>
<div className="flex items-center gap-2 text-xs text-zinc-900 dark:text-white font-medium group-hover:translate-x-1 transition-transform">
                                Learn more <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight-card rounded-2xl group">

<div className="h-48 bg-zinc-100 dark:bg-[#0F0F0F] relative w-full overflow-hidden border-b border-zinc-200 dark:border-white/5 p-6 transition-colors duration-500">
<div className="grid grid-cols-3 gap-3 h-full transform group-hover:scale-[1.02] group-hover:-rotate-1 transition-all duration-500 ease-out origin-bottom">
<div className="col-span-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900/50 p-3 relative overflow-hidden shadow-sm">
<div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent"></div>
<div className="flex justify-between mb-3">
<div className="w-8 h-8 rounded-full border border-purple-400/30 flex items-center justify-center bg-purple-500/10">
<iconify-icon className="text-purple-500 dark:text-purple-400" icon="lucide:bot" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded animate-pulse"></div>
<div className="w-2/3 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded"></div>
<div className="w-3/4 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded"></div>
</div>
</div>
<div className="border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900/30 p-3 flex flex-col justify-end shadow-sm">
<div className="w-full h-8 bg-purple-100 dark:bg-purple-500/20 rounded mb-2 border border-purple-200 dark:border-purple-500/30"></div>
<div className="w-full h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded mb-1"></div>
</div>
</div>
</div>
<div className="relative z-20 p-8">
<div className="inline-block px-2 py-1 bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 text-[10px] font-semibold uppercase tracking-wider rounded mb-4 border border-purple-400/20">AI Compliance</div>
<h3 className="text-xl font-medium text-zinc-900 dark:text-white mb-3 tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Regentcomply.ai</h3>
<p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                                An AI-powered compliance automation platform for regulated industries, enabling intelligent workflows, proactive monitoring, and streamlined regulatory reporting.
                            </p>
<div className="flex items-center gap-2 text-xs text-zinc-900 dark:text-white font-medium group-hover:translate-x-1 transition-transform">
                                Learn more <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-[#030303] pt-20 pb-10 px-6 relative overflow-hidden transition-colors duration-500" id="contact">

<div className="hidden dark:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-lemon-400/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-white tracking-tight mb-6">Ready to transform your enterprise?</h2>
<p className="text-zinc-600 dark:text-zinc-400 max-w-md mb-8">
                            Join the leading organizations leveraging LemonStalk's AI-driven solutions for sustainable growth.
                        </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md">
<input className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-md text-sm text-zinc-900 dark:text-white focus:outline-none focus:border-lemon-500 dark:focus:border-lemon-400/50 focus:bg-white dark:focus:bg-zinc-900/80 transition-all placeholder:text-zinc-500" placeholder="Enter your work email" type="email"/>
<button className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-semibold rounded-md hover:bg-lemon-500 dark:hover:bg-lemon-400 hover:scale-105 transition-all whitespace-nowrap shadow-lg" type="button">
                                Get in touch
                            </button>
</form>
</div>
<div className="grid grid-cols-2 gap-8 text-sm">
<div>
<h4 className="text-zinc-900 dark:text-white font-medium mb-4">Company</h4>
<ul className="space-y-3 text-zinc-500">
<li><a className="hover:text-lemon-600 dark:hover:text-lemon-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-lemon-600 dark:hover:text-lemon-400 transition-colors" href="#">Values</a></li>
<li><a className="hover:text-lemon-600 dark:hover:text-lemon-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-lemon-600 dark:hover:text-lemon-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-zinc-900 dark:text-white font-medium mb-4">Solutions</h4>
<ul className="space-y-3 text-zinc-500">
<li><a className="hover:text-lemon-600 dark:hover:text-lemon-400 transition-colors" href="#">AutomatePro</a></li>
<li><a className="hover:text-lemon-600 dark:hover:text-lemon-400 transition-colors" href="#">Regentcomply.ai</a></li>
<li><a className="hover:text-lemon-600 dark:hover:text-lemon-400 transition-colors" href="#">Consulting</a></li>
<li><a className="hover:text-lemon-600 dark:hover:text-lemon-400 transition-colors" href="#">Infrastructure</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-zinc-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-600">
<div className="flex items-center gap-2 group cursor-default">
<span className="font-semibold tracking-tighter text-zinc-700 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">LemonStalk</span>
<span>© 2030 LemonStalk Inc.</span>
</div>
<div className="flex gap-6">
<a className="hover:text-zinc-900 dark:hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900 dark:hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
