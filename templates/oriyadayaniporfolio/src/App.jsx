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
serif: ['Instrument Serif', 'serif'],
mono: ['Space Grotesk', 'monospace'],
},
colors: {
brand: {
accent: '#8b5cf6', // Violet for creativity
glow: '#a78bfa',
dark: '#020204',
panel: '#0A0A0F',
surface: '#121217'
}
},
backgroundImage: {
'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 40s linear infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            // Parallax Effect
            const bg = document.getElementById('parallax-bg');
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                if(bg) bg.style.transform = `translateY(${scrolled * 0.3}px)`;
            });

            // Reveal Animation
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="parallax-bg" id="parallax-bg"></div>

<nav className="fixed left-1/2 -translate-x-1/2 top-6 z-50 w-full max-w-[90vw] md:max-w-4xl">
<div className="glass-panel flex shadow-brand-accent/5 rounded-full p-2 shadow-2xl items-center justify-between pl-6">
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-brand-accent rounded-full shadow-[0_0_10px_rgba(139,92,246,1)] animate-pulse-slow"></div>
<span className="text-xs font-semibold tracking-tight text-white font-mono uppercase">
                    Oriya Dayani
                </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#work">Selected Work</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors" href="#process">Process</a>
</div>
<a className="bg-white text-black px-6 py-2 rounded-full text-xs font-semibold hover:bg-brand-accent hover:text-white transition-colors" href="#contact">
                Let's Talk
            </a>
</div>
</nav>
<main className="flex flex-col z-10 w-full pt-32 relative items-center">

<section className="container flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 mb-24 relative">

<div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

<div className="flex-1 md:pr-10 z-10 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/20 bg-brand-accent/5 backdrop-blur-sm mb-8 reveal active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-accent"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-accent"></span>
</span>
<span className="text-xs font-medium text-brand-accent tracking-wide uppercase">Available for new projects</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] reveal active delay-100 text-white tracking-tight font-serif mb-6">
                    Design. Code.
                    <br/>
<span className="italic text-white/40 font-sans font-light">Growth.</span>
</h1>
<p className="leading-relaxed reveal active delay-200 text-base md:text-lg font-light text-white/60 max-w-xl mb-10 mx-auto md:mx-0">
                    I bridge the gap between aesthetics and performance. A multidisciplinary expert scaling brands through bespoke web development, high-end design, and data-driven paid advertising.
                </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center md:justify-start reveal active delay-300">
<a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-brand-accent transition-all" href="#work">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000000_0%,#8b5cf6_50%,#000000_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0A0A0F] px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-3xl transition-all group-hover:bg-[#000000]">
                            View Portfolio
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</a>
<a className="px-8 py-3.5 rounded-full text-sm font-medium text-white/70 hover:text-white transition-colors border border-white/10 hover:border-white/30 hover:bg-white/5" href="#contact">
                        Contact Me
                    </a>
</div>
</div>

<div className="flex-1 mt-12 md:mt-0 relative reveal active delay-200 flex justify-center md:justify-end">
<div className="relative w-[280px] md:w-[400px] h-[350px] md:h-[500px]">

<div className="absolute inset-0 bg-gradient-to-tr from-brand-accent/20 to-transparent rounded-full blur-2xl"></div>
<div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#020204] via-[#020204]/80 to-transparent z-20"></div>

<img alt="Oriya Dayani" className="relative z-10 w-full h-full object-cover object-top drop-shadow-2xl mask-image-gradient" src="https://oriyadayani.co.il/wp-content/uploads/2025/12/Oriya-Dayani.png"/>

<div className="absolute bottom-10 -left-6 md:-left-12 z-30 glass-panel p-4 rounded-xl border border-white/10 animate-float">
<div className="flex items-center gap-3">
<div className="bg-brand-accent/20 p-2 rounded-lg text-brand-accent">
<span className="iconify" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<div>
<p className="text-xs text-white/50 uppercase tracking-wider">ROAS Optimized</p>
<p className="text-sm font-semibold text-white">Scale &amp; Convert</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-brand-surface/50 w-full border-white/5 pt-20 pb-20 relative">
<div className="container mx-auto px-6 text-center">
<h2 className="leading-snug reveal md:text-5xl text-2xl font-medium text-white/90 tracking-tight font-serif max-w-4xl mx-auto">
                    "I don't just design websites. I build 
                    <span className="text-gradient font-sans italic">digital ecosystems</span> 
                    that drive revenue."
                </h2>

<div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
<span className="iconify w-8 h-8 md:w-10 md:h-10" data-icon="logos:figma"></span>
<span className="iconify w-8 h-8 md:w-10 md:h-10" data-icon="logos:react"></span>
<span className="iconify w-8 h-8 md:w-10 md:h-10 text-white" data-icon="ri:nextjs-fill"></span>
<span className="iconify w-8 h-8 md:w-10 md:h-10" data-icon="logos:tailwindcss-icon"></span>
<span className="iconify w-8 h-8 md:w-10 md:h-10" data-icon="logos:google-ads"></span>
<span className="iconify w-8 h-8 md:w-10 md:h-10 text-white" data-icon="simple-icons:meta"></span>
</div>
</div>
</section>

<section className="container max-w-6xl mx-auto px-6 pt-32 mb-24" id="services">
<div className="mb-16 md:text-center max-w-3xl mx-auto reveal">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-6 tracking-tight">
                    The Triad of Growth
                </h2>
<p className="text-lg text-white/50 leading-relaxed font-light">
                    A holistic approach combining creative vision, technical precision, and marketing intelligence.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal group p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-panel to-transparent hover:border-brand-accent/30 transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform group-hover:bg-brand-accent/20 group-hover:border-brand-accent/30">
<span className="iconify" data-icon="lucide:palette" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Branding &amp; Design</h3>
<ul className="text-sm text-white/50 space-y-2 leading-relaxed font-light">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span>UI/UX Design</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span>Visual Identity</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span>Marketing Assets</li>
</ul>
</div>

<div className="reveal delay-100 group p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-panel to-transparent hover:border-brand-accent/30 transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform group-hover:bg-brand-accent/20 group-hover:border-brand-accent/30">
<span className="iconify" data-icon="lucide:code-2" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Web Development</h3>
<ul className="text-sm text-white/50 space-y-2 leading-relaxed font-light">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span>Full Stack Development</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span>Landing Pages</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span>Performance Optimization</li>
</ul>
</div>

<div className="reveal delay-200 group p-8 rounded-2xl border border-white/10 bg-gradient-to-b from-brand-panel to-transparent hover:border-brand-accent/30 transition-all duration-500">
<div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform group-hover:bg-brand-accent/20 group-hover:border-brand-accent/30">
<span className="iconify" data-icon="lucide:megaphone" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Paid Advertising</h3>
<ul className="text-sm text-white/50 space-y-2 leading-relaxed font-light">
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span>PPC &amp; Social Ads</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span>Conversion Tracking</li>
<li className="flex items-center gap-2"><span className="w-1 h-1 bg-brand-accent rounded-full"></span>A/B Testing</li>
</ul>
</div>
</div>
</section>

<section className="container bg-brand-panel border-y border-white/5 max-w-full py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-medium mb-6">
<span className="iconify" data-icon="lucide:bar-chart-2"></span> Data-Driven Results
                        </div>
<h3 className="text-3xl md:text-4xl font-serif text-white mb-6">
                            Creativity backed by Metrics.
                        </h3>
<p className="text-white/60 mb-8 leading-relaxed font-light">
                            Beautiful design is useless if it doesn't convert. I build systems that track every interaction, ensuring your investment yields tangible returns.
                        </p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-accent/20 transition-colors">
<div className="p-2 bg-brand-accent/20 rounded-lg text-brand-accent">
<span className="iconify" data-icon="lucide:users"></span>
</div>
<div>
<div className="text-white font-medium text-sm">Audience Targeting</div>
<div className="text-white/40 text-xs">Precise segmentation for max ROI</div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-accent/20 transition-colors">
<div className="p-2 bg-brand-accent/20 rounded-lg text-brand-accent">
<span className="iconify" data-icon="lucide:layout"></span>
</div>
<div>
<div className="text-white font-medium text-sm">Responsive Architecture</div>
<div className="text-white/40 text-xs">Seamless experiences across all devices</div>
</div>
</div>
</div>
</div>

<div className="reveal delay-100 overflow-hidden group bg-[#0A0A0F] border-white/10 border rounded-xl relative shadow-2xl rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500">

<div className="flex border-white/5 border-b p-4 items-center justify-between bg-white/[0.02]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-xs font-mono text-white/30">analytics_dashboard.tsx</div>
</div>

<div className="p-6 grid grid-cols-2 gap-4">

<div className="col-span-2 bg-brand-surface border border-white/5 rounded-lg p-4 h-48 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 to-transparent"></div>
<div className="flex items-end justify-between h-full gap-2 pt-8">
<div className="w-full bg-brand-accent/20 h-[30%] rounded-t hover:h-[40%] transition-all"></div>
<div className="w-full bg-brand-accent/30 h-[50%] rounded-t hover:h-[60%] transition-all"></div>
<div className="w-full bg-brand-accent/40 h-[40%] rounded-t hover:h-[50%] transition-all"></div>
<div className="w-full bg-brand-accent/50 h-[70%] rounded-t hover:h-[80%] transition-all"></div>
<div className="w-full bg-brand-accent/60 h-[55%] rounded-t hover:h-[65%] transition-all"></div>
<div className="w-full bg-brand-accent h-[85%] rounded-t shadow-[0_0_15px_rgba(139,92,246,0.5)]"></div>
</div>
</div>

<div className="bg-brand-surface border border-white/5 rounded-lg p-4">
<div className="text-xs text-white/40 mb-1">Conversion Rate</div>
<div className="text-2xl font-mono text-white">4.8%</div>
<div className="text-[10px] text-green-400 mt-1 flex items-center gap-1">
<span className="iconify" data-icon="lucide:arrow-up-right"></span> +12% vs last month
                                </div>
</div>

<div className="bg-brand-surface border border-white/5 rounded-lg p-4">
<div className="text-xs text-white/40 mb-1">Active Users</div>
<div className="text-2xl font-mono text-white">12.5k</div>
<div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-brand-accent h-full w-[70%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 mb-32 pt-24 max-w-6xl" id="work">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<h2 className="text-3xl md:text-5xl font-serif text-white mb-4">Selected Work</h2>
<p className="text-white/50 font-light">Recent projects in branding, web, and marketing.</p>
</div>
<a className="mt-4 md:mt-0 text-sm border-b border-brand-accent pb-1 text-white hover:text-brand-accent transition-colors" href="https://www.behance.net/oriyakellydayani" target="_blank">
                    View Behance Profile -&gt;
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group reveal rounded-2xl bg-brand-surface border border-white/10 overflow-hidden relative">
<div className="aspect-video bg-[#1a1a1a] relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-4xl font-serif text-white/20 tracking-widest uppercase">ELDAR</span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium text-white group-hover:text-brand-accent transition-colors">ELDAR Real Estate</h3>
<span className="text-xs font-mono border border-white/10 px-2 py-1 rounded text-white/50">Branding</span>
</div>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                            Comprehensive brand identity and digital presence for a leading real estate group.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40">UX/UI</span>
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40">Identity</span>
</div>
</div>
</div>

<div className="group reveal delay-100 rounded-2xl bg-brand-surface border border-white/10 overflow-hidden relative">
<div className="aspect-video bg-[#1a1a1a] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-black group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="iconify text-white/20 w-16 h-16" data-icon="lucide:activity"></span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium text-white group-hover:text-brand-accent transition-colors">MedTech Solutions</h3>
<span className="text-xs font-mono border border-white/10 px-2 py-1 rounded text-white/50">Development</span>
</div>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                            Full-stack web application development for medical data visualization.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40">React</span>
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40">Dashboard</span>
</div>
</div>
</div>

<div className="group reveal rounded-2xl bg-brand-surface border border-white/10 overflow-hidden relative">
<div className="aspect-video bg-[#1a1a1a] relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-black group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 flex items-center justify-center">
<span className="iconify text-white/20 w-16 h-16" data-icon="lucide:shopping-bag"></span>
</div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-medium text-white group-hover:text-brand-accent transition-colors">E-Commerce Growth</h3>
<span className="text-xs font-mono border border-white/10 px-2 py-1 rounded text-white/50">Paid Ads</span>
</div>
<p className="text-sm text-white/50 leading-relaxed mb-4">
                            Strategic PPC campaign management resulting in 300% ROAS increase.
                        </p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40">Google Ads</span>
<span className="text-[10px] bg-white/5 px-2 py-1 rounded text-white/40">Social</span>
</div>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 mb-24 max-w-4xl text-center" id="contact">
<div className="reveal relative bg-gradient-to-b from-brand-accent/5 to-transparent p-12 md:p-20 rounded-[3rem] border border-brand-accent/20 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-accent/10 to-transparent opacity-50"></div>
<h2 className="text-4xl md:text-6xl font-serif text-white mb-8 relative z-10">
                    Ready to scale?
                </h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-6 relative z-10 mb-10">
<a className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 hover:border-brand-accent/50 transition-all" href="mailto:oriadayani@gmail.com">
<div className="bg-brand-accent/20 p-2 rounded-full text-brand-accent">
<span className="iconify" data-icon="lucide:mail"></span>
</div>
<div className="text-left">
<div className="text-xs text-white/40 uppercase">Email Me</div>
<div className="text-white font-medium">oriadayani@gmail.com</div>
</div>
</a>
<a className="group flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-4 rounded-xl hover:bg-white/10 hover:border-brand-accent/50 transition-all" href="tel:+972502525841">
<div className="bg-brand-accent/20 p-2 rounded-full text-brand-accent">
<span className="iconify" data-icon="lucide:phone"></span>
</div>
<div className="text-left">
<div className="text-xs text-white/40 uppercase">Call Me</div>
<div className="text-white font-medium">+972 50-252-5841</div>
</div>
</a>
</div>
<div className="relative z-10 text-white/40 text-sm">
                    Based in Israel. Working Globally.
                </div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#050508] pt-12 pb-8 px-6 relative z-10">
<div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-brand-accent rounded-full"></div>
<span className="text-sm font-semibold tracking-tight text-white font-mono uppercase">
                    Oriya Dayani
                </span>
</div>
<div className="text-xs text-white/30 font-light">
                © 2025 Oriya Dayani Studio. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-white/40 hover:text-white transition-colors" href="https://www.behance.net/oriyakellydayani" target="_blank">
<span className="iconify" data-icon="lucide:image" data-width="18"></span>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="mailto:oriadayani@gmail.com">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
</a>
</div>
</div>
</footer>



    </>
  );
}
