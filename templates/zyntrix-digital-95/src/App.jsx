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
dark: '#030304',
charcoal: '#0A0A0C',
neon: {
purple: '#A855F7',
cyan: '#06B6D4',
orange: '#F97316',
blue: '#3B82F6' // Messenger Blue
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 15s linear infinite',
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



        // 1. Reveal Text Animation (Word/Letter Logic simplified)
        document.addEventListener('DOMContentLoaded', () => {
            const title = document.getElementById('hero-title');
            const words = title.innerText.split(' '); // Simple split for this demo
            title.innerHTML = '';
            
            // Reconstruct with spans for animation
            const originalContent = "Powering the <br> <span class='text-gradient-accent font-medium'>Future</span> of <br> Digital Services";
            // For the sake of the HTML structure preservation, we simply add class to existing triggers
            title.innerHTML = originalContent;
            
            // Trigger standard reveals
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Add visible class to text-reveal spans if we split them
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.scroll-reveal, .reveal-text').forEach(el => observer.observe(el));
        });

        // 2. Magnetic Button Effect
        const btns = document.querySelectorAll('.magnetic-btn');
        btns.forEach(btn => {
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                btn.style.setProperty('--x', x + 'px');
                btn.style.setProperty('--y', y + 'px');
            });
        });

        // 3. 3D Tilt Effect on Cards
        const cards = document.querySelectorAll('.tilt-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
            });
        });

        // 4. Navbar Scroll Blur
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('bg-dark/90', 'shadow-lg');
            } else {
                nav.classList.remove('bg-dark/90', 'shadow-lg');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise"></div>

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[120px] animate-pulse-slow"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-cyan-900/10 rounded-full blur-[120px] animate-pulse-slow" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-orange-900/5 rounded-full blur-[100px] animate-float"></div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-dark/70 border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="flex bg-gradient-to-tr from-cyan-500 to-purple-600 w-8 h-8 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)] items-center justify-center">
<span className="text-xs font-bold text-white tracking-tighter">Z</span>
</div>
<span className="font-light tracking-[0.2em] text-sm text-white/90 group-hover:text-white transition-colors duration-300">ZYNTRIX</span>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group" href="https://www.facebook.com/profile.php?id=61586103045245" target="_blank">
<span className="text-xs font-light text-white/80 group-hover:text-white tracking-wide">Contact</span>
<iconify-icon className="text-white/50 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="container max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 scroll-reveal active visible">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-cyan-200/80 font-medium">System Online</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.1] mb-6 reveal-text active visible" id="hero-title">Powering the <br/> <span className="text-gradient-accent font-medium">Future</span> of <br/> Digital Services</h1>
<p className="text-lg md:text-xl text-white/50 font-light tracking-wide max-w-lg mb-10 scroll-reveal delay-100">
                    Premium subscriptions, AI solutions, and instant digital services — built for speed, automation, and trust.
                </p>

<div className="scroll-reveal delay-200 relative group w-full max-w-md">
<div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-500"></div>
<a className="magnetic-btn relative flex items-center p-4 bg-[#0F0F12] rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.3)] hover:-translate-y-1" href="https://www.facebook.com/profile.php?id=61586103045245" target="_blank">

<div className="w-12 h-12 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 flex items-center justify-center shadow-lg relative overflow-hidden shrink-0">
<iconify-icon className="text-white text-2xl relative z-10" icon="solar:chat-round-dots-bold"></iconify-icon>
<div className="absolute inset-0 bg-white/20 animate-pulse-slow"></div>
</div>
<div className="ml-5 flex-1 text-left">
<div className="text-sm text-blue-400 font-medium tracking-wide mb-0.5 flex items-center gap-2">
                                Start Live Chat
                                <iconify-icon className="text-yellow-400 animate-pulse" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="text-white text-lg font-light tracking-tight">Connect via Messenger</div>
</div>
<div className="pr-2">
<iconify-icon className="text-white/30 text-2xl group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
<div className="absolute -bottom-8 left-0 w-full text-center lg:text-left">
<span className="text-[10px] text-white/30 tracking-widest uppercase flex items-center justify-center lg:justify-start gap-2">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
                            Avg. Response: Instant
                        </span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 flex lg:justify-end scroll-reveal delay-300 active relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full animate-spin-slow pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse] pointer-events-none"></div>

<div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">

<div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 blur-xl animate-pulse"></div>

<div className="w-full h-full rounded-full p-[2px] bg-gradient-to-b from-white/30 via-white/5 to-transparent neon-ring backdrop-blur-sm relative z-10 overflow-hidden">
<div className="w-full h-full rounded-full bg-black relative overflow-hidden">

<img alt="ZYNTRIX Brand" className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="bg-gradient-to-t from-black/80 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>

<div className="absolute -bottom-4 right-4 bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl shadow-2xl z-20 flex items-center gap-3 transform hover:scale-105 transition-transform cursor-default">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium text-white tracking-widest">ONLINE</span>
</div>
</div>
</div>
</div>
</section>

<div className="w-full bg-white/[0.02] border-y border-white/5 py-8 overflow-hidden relative z-20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-0">
<div className="flex flex-col items-center md:items-start scroll-reveal">
<span className="text-2xl md:text-3xl font-semibold text-white tracking-tight">99.9%</span>
<span className="text-xs text-white/40 uppercase tracking-widest mt-1">Uptime Guaranteed</span>
</div>
<div className="h-8 w-px bg-white/10 hidden md:block"></div>
<div className="flex flex-col items-center md:items-start scroll-reveal delay-75">
<span className="text-2xl md:text-3xl font-semibold text-white tracking-tight">24/7</span>
<span className="text-xs text-white/40 uppercase tracking-widest mt-1">Automated Support</span>
</div>
<div className="h-8 w-px bg-white/10 hidden md:block"></div>
<div className="flex flex-col items-center md:items-start scroll-reveal delay-150">
<span className="text-2xl md:text-3xl font-semibold text-white tracking-tight">10k+</span>
<span className="text-xs text-white/40 uppercase tracking-widest mt-1">Orders Processed</span>
</div>
</div>
</div>

<section className="py-32 relative z-10">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-sm font-medium text-purple-400 tracking-[0.3em] uppercase mb-4 scroll-reveal">About Zyntrix</h2>
<h3 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-8 leading-tight scroll-reveal delay-75">
                Redefining the standard of <br/>
<span className="text-white/40">digital excellence.</span>
</h3>
<p className="text-lg text-white/60 font-light leading-relaxed scroll-reveal delay-150">
                We are not just a shop; we are a digital infrastructure. ZYNTRIX SHOP delivers next-generation digital services focused on speed, automation, and premium user experiences. From AI implementations to high-tier subscriptions, every interaction is engineered for perfection.
            </p>
</div>
</section>

<section className="py-20 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16 scroll-reveal">
<div>
<h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Our Ecosystem</h2>
</div>
<div className="hidden md:block text-right">
<p className="text-white/40 text-sm tracking-wide">Explore our premium solutions</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="tilt-card group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 overflow-hidden cursor-default scroll-reveal">
<div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-[60px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-500"></div>
<iconify-icon className="text-4xl text-cyan-400 mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:laptop-minimalistic-linear"></iconify-icon>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Web &amp; Landing Solutions</h3>
<p className="text-white/50 text-sm font-light leading-relaxed">High-conversion, cinematic websites designed to dominate your market niche.</p>
</div>

<div className="tilt-card group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 overflow-hidden cursor-default scroll-reveal delay-75">
<div className="absolute top-0 right-0 p-32 bg-purple-500/10 blur-[60px] rounded-full group-hover:bg-purple-500/20 transition-all duration-500"></div>
<iconify-icon className="text-4xl text-purple-400 mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:crown-star-linear"></iconify-icon>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Premium Subscriptions</h3>
<p className="text-white/50 text-sm font-light leading-relaxed">Access to world-class software and streaming services at unbeatable rates.</p>
</div>

<div className="tilt-card group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 overflow-hidden cursor-default scroll-reveal delay-100">
<div className="absolute top-0 right-0 p-32 bg-orange-500/10 blur-[60px] rounded-full group-hover:bg-orange-500/20 transition-all duration-500"></div>
<iconify-icon className="text-4xl text-orange-400 mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">AI Tools &amp; Prompts</h3>
<p className="text-white/50 text-sm font-light leading-relaxed">Cutting-edge AI configurations and prompt engineering for maximum productivity.</p>
</div>

<div className="tilt-card group relative p-8 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-500 overflow-hidden cursor-default scroll-reveal delay-150">
<div className="absolute top-0 right-0 p-32 bg-green-500/10 blur-[60px] rounded-full group-hover:bg-green-500/20 transition-all duration-500"></div>
<iconify-icon className="text-4xl text-green-400 mb-6 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:gamepad-linear"></iconify-icon>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Game Top-Up</h3>
<p className="text-white/50 text-sm font-light leading-relaxed">Instant delivery for in-game currency. Secure, fast, and reliable transaction flow.</p>
</div>

<div className="md:col-span-2 tilt-card group relative p-8 rounded-2xl bg-gradient-to-br from-blue-900/10 to-transparent border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 overflow-hidden cursor-pointer scroll-reveal delay-200">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<a className="flex flex-col md:flex-row items-center justify-between gap-6 h-full" href="https://www.facebook.com/profile.php?id=61586103045245" target="_blank">
<div className="text-left">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-4xl text-blue-400" icon="solar:chat-line-linear"></iconify-icon>
<span className="px-2 py-1 bg-blue-500/20 rounded text-[10px] text-blue-300 uppercase tracking-widest">Core Feature</span>
</div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Facebook Messenger Order System</h3>
<p className="text-white/50 text-sm font-light">Experience the fastest way to order. Direct communication, instant processing.</p>
</div>
<div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 relative z-10 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/[0.02] to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-20 items-center">
<div className="scroll-reveal">
<h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-8">
                        Built for <br/>
<span className="text-gradient-accent">Speed &amp; Trust</span>
</h2>
<div className="space-y-8">
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-cyan-500/50 transition-colors duration-300">
<iconify-icon className="text-2xl text-cyan-400" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-2">Secure Systems</h4>
<p className="text-white/40 text-sm font-light">Bank-grade encryption protocols ensuring your data and transactions remain private.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-purple-500/50 transition-colors duration-300">
<iconify-icon className="text-2xl text-purple-400" icon="solar:smartphone-2-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-2">Mobile-First Design</h4>
<p className="text-white/40 text-sm font-light">Optimized entirely for mobile devices, ensuring a seamless experience on the go.</p>
</div>
</div>
<div className="flex gap-6 group">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:border-orange-500/50 transition-colors duration-300">
<iconify-icon className="text-2xl text-orange-400" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-2">Ultra-Fast Response</h4>
<p className="text-white/40 text-sm font-light">Our team operates with zero lag. Messages and orders are processed in real-time.</p>
</div>
</div>
</div>
</div>
<div className="relative h-[500px] w-full bg-white/5 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden scroll-reveal delay-200">

<div className="absolute inset-0 bg-gradient-to-br from-black/50 to-transparent z-10"></div>
<div className="absolute top-10 left-10 right-10 bottom-10 border border-white/10 rounded-xl p-6 flex flex-col gap-4 opacity-60">
<div className="h-4 w-1/3 bg-white/10 rounded-full animate-pulse"></div>
<div className="h-32 w-full bg-white/5 rounded-lg"></div>
<div className="flex gap-4">
<div className="h-20 w-1/2 bg-white/5 rounded-lg"></div>
<div className="h-20 w-1/2 bg-white/5 rounded-lg"></div>
</div>
</div>

<div className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-[2px] top-1/4 left-1/4 animate-float"></div>
<div className="absolute w-1 h-1 bg-purple-400 rounded-full blur-[1px] bottom-1/3 right-1/4 animate-pulse"></div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 relative bg-charcoal/50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-center text-2xl font-light text-white mb-16 tracking-tight scroll-reveal">Trusted by the Elite</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 bg-black/40 border border-white/5 rounded-xl hover:border-white/20 transition-all duration-300 scroll-reveal">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-white/80 font-light text-sm italic mb-4">"Feels like a global brand. The process was smooth, fast, and premium."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<span className="text-xs text-white/40">Sarah L.</span>
</div>
</div>

<div className="p-6 bg-black/40 border border-white/5 rounded-xl hover:border-white/20 transition-all duration-300 scroll-reveal delay-100">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-white/80 font-light text-sm italic mb-4">"Next-level digital experience. Zyntrix sets the bar for automation."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<span className="text-xs text-white/40">David K.</span>
</div>
</div>

<div className="p-6 bg-black/40 border border-white/5 rounded-xl hover:border-white/20 transition-all duration-300 scroll-reveal delay-200">
<div className="flex gap-1 text-yellow-500 mb-4 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-white/80 font-light text-sm italic mb-4">"Incredible attention to detail. The support is instantaneous."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<span className="text-xs text-white/40">Michael R.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 text-center relative z-10">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight scroll-reveal">Ready to Upgrade?</h2>
<div className="flex justify-center scroll-reveal">
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium tracking-wide overflow-hidden transition-all hover:scale-105" href="https://www.facebook.com/profile.php?id=61586103045245" target="_blank">
<span className="relative z-10 flex items-center gap-2">
                        Message Us Now 
                        <iconify-icon className="text-lg" icon="solar:chat-round-dots-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</a>
</div>
</div>
</section>

<footer className="bg-black border-t-2 border-cyan-500/50 pt-16 pb-8 relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_#06b6d4]"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center">
<span className="font-bold text-white text-[10px]">Z</span>
</div>
<span className="text-xl font-light tracking-widest text-white">ZYNTRIX</span>
</div>
<div className="flex gap-6">
<a className="text-white/40 hover:text-white transition-colors text-sm" href="#">Services</a>
<a className="text-white/40 hover:text-white transition-colors text-sm" href="#">Legal</a>
<a className="text-white/40 hover:text-white transition-colors text-sm" href="https://www.facebook.com/profile.php?id=61586103045245">Contact</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 font-light">
<p>© 2026 — ZYNTRIX SHOP | Premium Digital Experience Platform</p>
<p>Designed for the Future.</p>
</div>
</div>
</footer>



    </>
  );
}
