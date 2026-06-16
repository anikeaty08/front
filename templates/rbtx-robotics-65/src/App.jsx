import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
gray: {
50: '#f9fafb',
100: '#f3f4f6',
200: '#e5e7eb',
300: '#d1d5db',
400: '#9ca3af',
500: '#6b7280',
600: '#4b5563',
700: '#374151',
800: '#1f2937',
900: '#111827',
950: '#030712',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            const backdrop = modal.querySelector('.panel-backdrop');
            const panel = modal.querySelector('.panel-content');
            
            // Remove hidden to render element
            modal.classList.remove('hidden');
            
            // Small timeout to allow browser to register display:block before adding opacity/transform classes
            requestAnimationFrame(() => {
                backdrop.classList.remove('opacity-0');
                backdrop.classList.add('opacity-100');
                panel.classList.remove('translate-x-full');
            });

            // Prevent body scrolling
            document.body.style.overflow = 'hidden';
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            const backdrop = modal.querySelector('.panel-backdrop');
            const panel = modal.querySelector('.panel-content');
            
            // Start exit animations
            backdrop.classList.remove('opacity-100');
            backdrop.classList.add('opacity-0');
            panel.classList.add('translate-x-full');

            // Wait for transition to finish before hiding element
            setTimeout(() => {
                modal.classList.add('hidden');
                // Restore body scrolling
                document.body.style.overflow = '';
            }, 500); // Matches the duration-500 tailwind class
        }

        // Close modal on escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                const openModals = document.querySelectorAll('.fixed.inset-0.z-\\[100\\]:not(.hidden)');
                openModals.forEach(modal => closeModal(modal.id));
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-teal-100/40 mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
<div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-blue-100/40 mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-emerald-50/40 mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed w-full z-50 transition-all duration-300 glass-panel border-b-0 border-white/20">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<div className="flex-shrink-0">
<a className="text-2xl font-semibold tracking-tighter text-gray-900 flex items-center gap-2" href="#">
<iconify-icon className="text-teal-600" height="28" icon="solar:cpu-linear" width="28"></iconify-icon>
                        RBTX
                    </a>
</div>

<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8 text-sm font-medium">
<a className="text-gray-900 hover:text-teal-600 transition-colors px-3 py-2" href="#">Platform</a>
<a className="text-gray-500 hover:text-teal-600 transition-colors px-3 py-2" href="#">Hardware</a>
<a className="text-gray-500 hover:text-teal-600 transition-colors px-3 py-2" href="#">Solutions</a>
<a className="text-gray-500 hover:text-teal-600 transition-colors px-3 py-2" href="#">Research</a>
</div>
</div>

<div className="hidden md:flex items-center space-x-4">
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#">Sign In</a>
<a className="group relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)]" href="#">
                        Request Access
                        <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="-mr-2 flex md:hidden">
<button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500" type="button">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main>
<div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-6 text-center lg:text-left z-10">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-600 text-xs font-medium mb-8 tracking-wide">
<span className="w-2 h-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
                            Nexus OS 2.0 Now Available
                        </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-gray-900 tracking-tight leading-[1.1] mb-6">
                            Engineering the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Future</span> with Robotics
                        </h1>
<p className="mt-4 text-lg text-gray-500 font-medium max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed">
                            Deploy enterprise-grade autonomous systems in days, not months. Our intelligent hardware and neural-net architecture redefine industrial capabilities.
                        </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all duration-300 bg-teal-600 rounded-full hover:bg-teal-500 shadow-[0_0_20px_rgba(13,148,136,0.3)] hover:shadow-[0_0_30px_rgba(13,148,136,0.5)]" href="#">
                                Explore Platform
                            </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-gray-700 transition-all duration-300 bg-white rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm group" href="#">
<iconify-icon className="mr-2 text-gray-400 group-hover:text-teal-600 transition-colors" height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
                                Watch Demo
                            </a>
</div>
<div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-sm font-medium text-gray-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
                                99.9% Uptime
                            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-500" icon="solar:shield-check-linear"></iconify-icon>
                                ISO 27001 Certified
                            </div>
</div>
</div>

<div className="lg:col-span-6 mt-16 lg:mt-0 relative z-10">
<div className="relative w-full aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden glass-panel p-2 shadow-2xl">

<div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-gray-100">
<img alt="Advanced Robotic System" className="object-cover w-full h-full object-center scale-105 transition-transform duration-[10s] hover:scale-100" src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-gradient-to-tr from-gray-900/40 via-transparent to-teal-900/20 mix-blend-overlay"></div>
</div>

<div className="absolute top-8 -left-6 lg:-left-12 glass-panel rounded-2xl p-4 shadow-lg animate-float flex items-center gap-4 border border-white/40">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 font-medium">Efficiency</p>
<p className="text-sm font-semibold text-gray-900">+342%</p>
</div>
</div>

<div className="absolute bottom-12 -right-6 lg:-right-12 glass-panel rounded-2xl p-4 shadow-lg animate-float-slow flex flex-col gap-2 border border-white/40 min-w-[140px]">
<div className="flex justify-between items-center w-full">
<span className="text-xs text-gray-500 font-medium">System Status</span>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mt-1">
<div className="h-full bg-teal-500 w-[92%] rounded-full"></div>
</div>
<p className="text-xs font-semibold text-gray-900 mt-1">Optimal</p>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 mix-blend-overlay" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="circuit-line" d="M0,20 Q40,40 50,20 T100,50" fill="none" stroke="white" strokeWidth="0.5"></path>
<path className="circuit-line" d="M0,80 Q30,60 70,80 T100,20" fill="none" stroke="teal" strokeWidth="0.5" style={{animationDelay: '2s'}}></path>
</svg>
</div>
</div>
</div>
</div>
</div>

<section className="py-10 border-y border-gray-200/50 bg-white/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<p className="text-center text-xs font-semibold text-gray-400 tracking-widest uppercase mb-8">Powering next-gen facilities at</p>
<div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-semibold tracking-tighter text-xl text-gray-800"><iconify-icon icon="solar:infinity-linear" width="28"></iconify-icon> NEXA</div>
<div className="flex items-center gap-2 font-semibold tracking-tighter text-xl text-gray-800"><iconify-icon icon="solar:global-linear" width="28"></iconify-icon> AERO</div>
<div className="flex items-center gap-2 font-semibold tracking-tighter text-xl text-gray-800"><iconify-icon icon="solar:atom-linear" width="28"></iconify-icon> SYNTH</div>
<div className="flex items-center gap-2 font-semibold tracking-tighter text-xl text-gray-800"><iconify-icon icon="solar:shield-network-linear" width="28"></iconify-icon> VANGUARD</div>
<div className="flex items-center gap-2 font-semibold tracking-tighter text-xl text-gray-800 hidden sm:flex"><iconify-icon icon="solar:radar-linear" width="28"></iconify-icon> OMNI</div>
</div>
</div>
</section>

<section className="py-24 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-6">
                            Beyond human capabilities. <br/>Designed for scale.
                        </h2>
<p className="text-gray-500 font-medium leading-relaxed mb-8">
                            Our proprietary neural-mechanical framework bridges the gap between software intelligence and physical execution. We don't just build robots; we build autonomous workforces capable of learning, adapting, and operating in dynamic environments with millimeter precision.
                        </p>
<a className="inline-flex items-center text-teal-600 font-semibold text-sm group" href="#">
                            Read our whitepaper 
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 gap-px bg-gray-200/50 rounded-2xl overflow-hidden border border-gray-200/50">
<div className="bg-white/80 backdrop-blur-sm p-8 hover:bg-white transition-colors duration-300">
<p className="text-4xl font-semibold text-gray-900 tracking-tighter mb-2">0.2<span className="text-xl text-teal-500">ms</span></p>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Inference Latency</p>
</div>
<div className="bg-white/80 backdrop-blur-sm p-8 hover:bg-white transition-colors duration-300">
<p className="text-4xl font-semibold text-gray-900 tracking-tighter mb-2">99.9<span className="text-xl text-teal-500">%</span></p>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Task Accuracy</p>
</div>
<div className="bg-white/80 backdrop-blur-sm p-8 hover:bg-white transition-colors duration-300">
<p className="text-4xl font-semibold text-gray-900 tracking-tighter mb-2">24<span className="text-xl text-teal-500">/7</span></p>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Continuous Ops</p>
</div>
<div className="bg-white/80 backdrop-blur-sm p-8 hover:bg-white transition-colors duration-300">
<p className="text-4xl font-semibold text-gray-900 tracking-tighter mb-2">10k<span className="text-xl text-teal-500">+</span></p>
<p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Units Deployed</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-t border-gray-200/50 relative">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Intelligent Systems</h2>
<p className="text-gray-500 font-medium">Modular hardware powered by a unified cognitive architecture.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(20,184,166,0.08)] hover:border-teal-100 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors mb-6">
<iconify-icon icon="solar:armchair-linear" width="24"></iconify-icon>
<iconify-icon className="absolute" icon="solar:settings-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Industrial Arms</h3>
<p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                            High-payload robotic manipulators with sub-millimeter precision. Ideal for assembly, welding, and material handling in complex environments.
                        </p>
<div className="mt-auto">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-400 group-hover:border-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(37,99,235,0.08)] hover:border-blue-100 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors mb-6">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Humanoid Bipeds</h3>
<p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                            Versatile general-purpose robots designed to navigate human-centric spaces. Features advanced balancing and dexterous manipulation.
                        </p>
<div className="mt-auto">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-400 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(16,185,129,0.08)] hover:border-emerald-100 transition-all duration-500 hover:-translate-y-1">
<div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-900 group-hover:bg-emerald-50 group-hover:text-emerald-500 transition-colors mb-6">
<iconify-icon icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Nexus OS Core</h3>
<p className="text-sm text-gray-500 font-medium leading-relaxed mb-6">
                            The intelligence layer. A fleet management and cognitive processing platform that connects and orchestrates all your robotic assets seamlessly.
                        </p>
<div className="mt-auto">
<a className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-400 group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300" href="#">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden relative bg-gray-950 text-white">
<div className="absolute inset-0 opacity-20">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500 rounded-full mix-blend-screen filter blur-[150px]"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[150px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="lg:flex lg:items-center lg:justify-between">
<div className="lg:w-1/2 mb-12 lg:mb-0 pr-8">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300 text-xs font-medium mb-6">
<iconify-icon className="mr-2 text-teal-400" icon="solar:code-scan-linear"></iconify-icon>
                            Proprietary Architecture
                        </div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">
                            Silicon meets <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">Synapse</span>
</h2>
<p className="text-gray-400 font-medium leading-relaxed mb-8 text-lg">
                            Our robotic systems don't just follow programmed paths. They utilize real-time spatial mapping, predictive kinematics, and edge-AI to understand their surroundings and optimize workflows dynamically.
                        </p>
<ul className="space-y-4">
<li className="flex items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30 mt-0.5">
<iconify-icon className="text-teal-400" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<p className="ml-3 text-sm text-gray-300 font-medium">Lidar &amp; RGB-D sensor fusion</p>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30 mt-0.5">
<iconify-icon className="text-teal-400" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<p className="ml-3 text-sm text-gray-300 font-medium">Distributed swarm intelligence</p>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center border border-teal-500/30 mt-0.5">
<iconify-icon className="text-teal-400" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<p className="ml-3 text-sm text-gray-300 font-medium">Self-healing mechanical redundancy</p>
</li>
</ul>
</div>
<div className="lg:w-1/2 relative">
<div className="relative rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 p-2 shadow-2xl aspect-square md:aspect-[4/3] lg:aspect-square flex items-center justify-center">
<div className="relative z-10 w-32 h-32 rounded-full border border-teal-500/30 bg-gray-950 flex items-center justify-center shadow-[0_0_50px_rgba(20,184,166,0.2)] animate-pulse-glow">
<iconify-icon className="text-teal-400" icon="solar:cpu-bold" width="48"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center animate-[spin_20s_linear_infinite]">
<div className="w-[60%] h-[60%] rounded-full border border-gray-800 border-dashed relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-900 rounded-full border border-gray-700 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:eye-linear" width="12"></iconify-icon>
</div>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-gray-900 rounded-full border border-gray-700 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:database-linear" width="12"></iconify-icon>
</div>
</div>
</div>
<div className="absolute inset-0 flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
<div className="w-[85%] h-[85%] rounded-full border border-gray-800 relative">
<div className="absolute top-1/2 -left-3 -translate-y-1/2 w-6 h-6 bg-gray-900 rounded-full border border-gray-700 flex items-center justify-center text-teal-400">
<iconify-icon icon="solar:network-linear" width="12"></iconify-icon>
</div>
</div>
</div>
<svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
<path className="circuit-line" d="M 10 10 L 100 100 L 200 50 L 300 150" fill="transparent" stroke="#0ea5e9" strokeWidth="1"></path>
<path className="circuit-line" d="M 400 300 L 300 200 L 250 250 L 150 150" fill="transparent" stroke="#14b8a6" strokeWidth="1" style={{animationDuration: '7s'}}></path>
<circle cx="100" cy="100" fill="#0ea5e9" r="2"></circle>
<circle cx="200" cy="50" fill="#0ea5e9" r="2"></circle>
<circle cx="300" cy="200" fill="#14b8a6" r="2"></circle>
</svg>
<img alt="Tech Abstract" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-gray-950 text-white overflow-hidden" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'0.03\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')', backgroundAttachment: 'fixed'}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-4">Hardware Lineup</h2>
<p className="text-gray-400 font-medium text-lg">Select a unit to explore detailed specifications and capabilities.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="group relative rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:-translate-y-2 cursor-pointer" onclick="openModal('modal-atlas')">
<div className="aspect-[4/5] relative overflow-hidden">

<div className="absolute inset-0 bg-gray-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Atlas-V Humanoid" className="object-cover w-full h-full object-center transition-transform duration-[1.5s] group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 transform transition-transform duration-500">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></span>
<span className="text-blue-400 text-xs font-semibold tracking-widest uppercase">Bipedal Series</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-1">Atlas-V</h3>
<p className="text-gray-400 text-sm font-medium">General-purpose humanoid</p>
</div>

<div className="absolute top-6 right-6 z-20">
<div className="relative flex items-center justify-end h-10">

<div className="absolute w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>

<button className="h-10 px-5 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center gap-2 transform translate-x-4 opacity-0 scale-95 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 shadow-[0_4px_14px_rgba(59,130,246,0.4)]">
                                    View Specs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 transition-all duration-500 hover:border-teal-500/50 hover:shadow-[0_0_40px_rgba(20,184,166,0.25)] hover:-translate-y-2 cursor-pointer" onclick="openModal('modal-titan')">
<div className="aspect-[4/5] relative overflow-hidden">
<div className="absolute inset-0 bg-gray-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Titan-X Industrial Arm" className="object-cover w-full h-full object-center transition-transform duration-[1.5s] group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 transform transition-transform duration-500">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.8)]"></span>
<span className="text-teal-400 text-xs font-semibold tracking-widest uppercase">Manipulator Series</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-1">Titan-X</h3>
<p className="text-gray-400 text-sm font-medium">High-payload precision arm</p>
</div>

<div className="absolute top-6 right-6 z-20">
<div className="relative flex items-center justify-end h-10">
<div className="absolute w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
<button className="h-10 px-5 rounded-full bg-teal-600 text-white text-xs font-semibold flex items-center gap-2 transform translate-x-4 opacity-0 scale-95 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 shadow-[0_4px_14px_rgba(20,184,166,0.4)]">
                                    View Specs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden bg-gray-900 border border-gray-800 transition-all duration-500 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:-translate-y-2 cursor-pointer" onclick="openModal('modal-courier')">
<div className="aspect-[4/5] relative overflow-hidden">
<div className="absolute inset-0 bg-gray-950/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Courier-Pro Logistics Bot" className="object-cover w-full h-full object-center transition-transform duration-[1.5s] group-hover:scale-105 filter grayscale-[30%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent z-10"></div>
</div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 transform transition-transform duration-500">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
<span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">Logistics Series</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-1">Courier-Pro</h3>
<p className="text-gray-400 text-sm font-medium">Autonomous payload transport</p>
</div>

<div className="absolute top-6 right-6 z-20">
<div className="relative flex items-center justify-end h-10">
<div className="absolute w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:opacity-0 group-hover:scale-75">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
<button className="h-10 px-5 rounded-full bg-emerald-600 text-white text-xs font-semibold flex items-center gap-2 transform translate-x-4 opacity-0 scale-95 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100 shadow-[0_4px_14px_rgba(16,185,129,0.4)]">
                                    View Specs <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gray-50"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-100/50 rounded-full filter blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 tracking-tight mb-6">
                    Ready to automate your future?
                </h2>
<p className="text-lg text-gray-500 font-medium mb-10 max-w-2xl mx-auto">
                    Join industry leaders leveraging RBTX systems to multiply productivity and eliminate operational bottlenecks.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white transition-all duration-300 bg-gray-900 rounded-full hover:bg-gray-800 hover:shadow-[0_0_30px_rgba(0,0,0,0.15)] overflow-hidden" href="#">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-teal-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative z-10 flex items-center">
                            Contact Sales
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</div>
</section>


<div className="fixed inset-0 z-[100] hidden" id="modal-atlas">

<div className="absolute inset-0 bg-gray-950/60 backdrop-blur-md opacity-0 transition-opacity duration-300 panel-backdrop" onclick="closeModal('modal-atlas')"></div>

<div className="absolute inset-y-0 right-0 w-full max-w-3xl bg-white shadow-2xl flex flex-col transform translate-x-full transition-transform duration-500 panel-ease panel-content border-l border-gray-200">

<div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">System Specs</span>
</div>
<button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors" onclick="closeModal('modal-atlas')">
<iconify-icon icon="solar:close-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto">

<div className="relative w-full aspect-video bg-gray-900 overflow-hidden group cursor-pointer">
<img alt="Atlas-V in action" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="p-8">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Atlas-V</h2>
<p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed">The most advanced general-purpose humanoid robot. Designed to navigate complex environments, adapt to dynamic obstacles, and perform tasks requiring human-level dexterity.</p>
<h3 className="text-sm font-semibold tracking-tight text-gray-900 mb-4 border-b border-gray-100 pb-2">Technical Specifications</h3>
<div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10">
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Degrees of Freedom</p>
<p className="text-base font-semibold text-gray-900">28 (Full Body)</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Payload Capacity</p>
<p className="text-base font-semibold text-gray-900">20 kg (44 lbs)</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Battery Life</p>
<p className="text-base font-semibold text-gray-900">8 Hours (Continuous)</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Sensory Suite</p>
<p className="text-base font-semibold text-gray-900">Lidar, 4x RGB-D, Force</p>
</div>
</div>
<a className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-semibold text-white transition-all duration-300 bg-blue-600 rounded-xl hover:bg-blue-700 shadow-sm" href="#">
                            Request Quote
                        </a>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden" id="modal-titan">
<div className="absolute inset-0 bg-gray-950/60 backdrop-blur-md opacity-0 transition-opacity duration-300 panel-backdrop" onclick="closeModal('modal-titan')"></div>
<div className="absolute inset-y-0 right-0 w-full max-w-3xl bg-white shadow-2xl flex flex-col transform translate-x-full transition-transform duration-500 panel-ease panel-content border-l border-gray-200">
<div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
<span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">System Specs</span>
</div>
<button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors" onclick="closeModal('modal-titan')">
<iconify-icon icon="solar:close-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto">
<div className="relative w-full aspect-video bg-gray-900 overflow-hidden group cursor-pointer">
<img alt="Titan-X in action" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" src="https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="p-8">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Titan-X</h2>
<p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed">A high-performance industrial robotic arm engineered for extreme precision and heavy-duty manufacturing. Integrates seamlessly with existing assembly lines via Nexus OS.</p>
<h3 className="text-sm font-semibold tracking-tight text-gray-900 mb-4 border-b border-gray-100 pb-2">Technical Specifications</h3>
<div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10">
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Reach Radius</p>
<p className="text-base font-semibold text-gray-900">1.8 Meters</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Payload Capacity</p>
<p className="text-base font-semibold text-gray-900">80 kg</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Repeatability</p>
<p className="text-base font-semibold text-gray-900">±0.02 mm</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Axes</p>
<p className="text-base font-semibold text-gray-900">6-Axis Articulated</p>
</div>
</div>
<a className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-semibold text-white transition-all duration-300 bg-teal-600 rounded-xl hover:bg-teal-700 shadow-sm" href="#">
                            Request Quote
                        </a>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden" id="modal-courier">
<div className="absolute inset-0 bg-gray-950/60 backdrop-blur-md opacity-0 transition-opacity duration-300 panel-backdrop" onclick="closeModal('modal-courier')"></div>
<div className="absolute inset-y-0 right-0 w-full max-w-3xl bg-white shadow-2xl flex flex-col transform translate-x-full transition-transform duration-500 panel-ease panel-content border-l border-gray-200">
<div className="flex items-center justify-between px-8 py-6 border-b border-gray-100">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-semibold text-gray-500 tracking-widest uppercase">System Specs</span>
</div>
<button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-500 transition-colors" onclick="closeModal('modal-courier')">
<iconify-icon icon="solar:close-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto">
<div className="relative w-full aspect-video bg-gray-900 overflow-hidden group cursor-pointer">
<img alt="Courier-Pro in action" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/40 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="p-8">
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-2">Courier-Pro</h2>
<p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed">Intelligent autonomous mobile robot (AMR) built for warehouse automation. Features dynamic pathfinding, obstacle avoidance, and rapid charging capabilities.</p>
<h3 className="text-sm font-semibold tracking-tight text-gray-900 mb-4 border-b border-gray-100 pb-2">Technical Specifications</h3>
<div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10">
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Max Speed</p>
<p className="text-base font-semibold text-gray-900">2.5 m/s</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Payload Capacity</p>
<p className="text-base font-semibold text-gray-900">1,200 kg</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Navigation</p>
<p className="text-base font-semibold text-gray-900">SLAM / V-SLAM</p>
</div>
<div>
<p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">Charge Time</p>
<p className="text-base font-semibold text-gray-900">45 Mins (0-100%)</p>
</div>
</div>
<a className="inline-flex items-center justify-center w-full px-6 py-4 text-sm font-semibold text-white transition-all duration-300 bg-emerald-600 rounded-xl hover:bg-emerald-700 shadow-sm" href="#">
                            Request Quote
                        </a>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2 pr-8">
<a className="text-2xl font-semibold tracking-tighter text-gray-900 flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-teal-600" icon="solar:cpu-linear" width="28"></iconify-icon>
                        RBTX
                    </a>
<p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 max-w-xs">
                        Engineering autonomous solutions for enterprise scale. Building the hardware and software of tomorrow.
                    </p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:global-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 tracking-tight mb-4">Hardware</h4>
<ul className="space-y-3 text-sm text-gray-500 font-medium">
<li><a className="hover:text-teal-600 transition-colors" href="#">Industrial Arms</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Bipedal Series</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Sensors &amp; Vision</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Custom Builds</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 tracking-tight mb-4">Software</h4>
<ul className="space-y-3 text-sm text-gray-500 font-medium">
<li><a className="hover:text-teal-600 transition-colors" href="#">Nexus OS</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Fleet Management</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Simulation</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">API Docs</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-gray-900 tracking-tight mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-500 font-medium">
<li><a className="hover:text-teal-600 transition-colors" href="#">About</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Research</a></li>
<li><a className="hover:text-teal-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400 font-medium">
                    © 2024 RBTX Robotics Inc. All rights reserved.
                </p>
<div className="flex space-x-6 text-xs text-gray-400 font-medium">
<a className="hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
