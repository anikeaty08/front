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
850: '#1f1f22',
950: '#09090b',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // 1. Scroll Reveal Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal-element').forEach((el) => {
            observer.observe(el);
        });

        // 2. Text Animation Splitter
        document.querySelectorAll('.clip-text-anim').forEach(el => {
            // Check if already processed to avoid duplication on re-runs
            if(el.querySelector('.text-clip-char')) return;
            
            const text = el.innerText;
            el.innerHTML = '';
            text.split('').forEach((char, index) => {
                const span = document.createElement('span');
                span.innerHTML = char === ' ' ? '&nbsp;' : char;
                span.className = 'text-clip-char';
                span.style.animationDelay = `${index * 0.03}s`; // Faster stagger
                el.appendChild(span);
            });
        });

        // 3. Flashlight Effect
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.flashlight-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // 4. Logo Marquee Population
        const logos = [
            '<path fill="currentColor" d="M12 2L2 7l10 5l10-5l-10-5zm0 9l2 1l-2 1l-2-1l2-1zm0 2l-5-2.5l-5 2.5l10 5l10-5l-5-2.5l-5 2.5z"/>', // Layers
            '<path fill="currentColor" d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm5.17 14.83l-4.42-2.55v-5.1l4.42 2.55v5.1z"/>', // Cube
            '<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>', // Globe
            '<path fill="currentColor" d="M12 2L1 21h22L12 2zm0 3.45l8.27 14.3H3.73L12 5.45zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>', // Triangle
            '<path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44A.996.996 0 0 1 12 2c.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5L12 10.85l5.96-3.35L12 4.15z"/>' // Hex
        ];
        const logoMarquee = document.getElementById('logo-marquee');
        const logoContent = logos.map(svg => `<div class="w-10 h-10 text-zinc-600 hover:text-white transition-colors duration-300"><svg viewBox="0 0 24 24">${svg}</svg></div>`).join('');
        logoMarquee.innerHTML = logoContent.repeat(8);

        // 5. Testimonial Marquee Population
        const testimonials = [
            { text: "It's like magic. Changed how we ship.", author: "Sarah Jenkins, CTO" },
            { text: "The performance gains are undeniable.", author: "Mark Davis, Dev" },
            { text: "Simply the best UI kit available.", author: "Elena Rodriguez, Design" },
            { text: "Clean, fast, and reliable.", author: "Alex Thompson, Lead" },
            { text: "Documentation is world class.", author: "Priya Patel, Eng" }
        ];
        const testMarquee = document.getElementById('testimonial-marquee');
        const testContent = testimonials.map(t => `
            <div class="flex-shrink-0 w-80 p-6 rounded-2xl bg-zinc-900 border border-white/5 mx-2 hover:border-white/10 transition-colors">
                <div class="flex gap-1 text-indigo-400 mb-3">
                    <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                    <i data-lucide="star" class="w-3 h-3 fill-current"></i>
                </div>
                <p class="text-zinc-300 text-base leading-relaxed">"${t.text}"</p>
                <p class="text-zinc-500 text-xs mt-4 font-mono uppercase tracking-wider">${t.author}</p>
            </div>
        `).join('');
        testMarquee.innerHTML = testContent.repeat(4);

        // 6. Card Rotator Logic
        const rotateCards = () => {
            const cards = document.querySelectorAll('.rotator-card');
            if(cards.length === 0) return;
            
            let activeIndex = parseInt(cards[0].parentElement.getAttribute('data-active') || '0');
            activeIndex = (activeIndex + 1) % 3;
            cards[0].parentElement.setAttribute('data-active', activeIndex);

            cards.forEach((card, index) => {
                // Determine position relative to active
                const diff = (index - activeIndex + 3) % 3;
                
                if (diff === 0) { // Front
                    card.style.zIndex = '30';
                    card.style.transform = 'scale(1) translateY(0)';
                    card.style.opacity = '1';
                } else if (diff === 1) { // Middle
                    card.style.zIndex = '20';
                    card.style.transform = 'scale(0.92) translateY(12px)';
                    card.style.opacity = '0.6';
                } else { // Back
                    card.style.zIndex = '10';
                    card.style.transform = 'scale(0.84) translateY(24px)';
                    card.style.opacity = '0.3';
                }
            });
        };
        setInterval(rotateCards, 3000);
        rotateCards(); // Init

        // Update Icons after dynamic content
        setTimeout(() => lucide.createIcons(), 100);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 font-semibold tracking-tight text-white">
<div className="w-6 h-6 bg-white text-black rounded flex items-center justify-center text-xs font-bold">D</div>
<span>DesignSystem</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Testimonials</a>
<a className="hover:text-white transition-colors" href="#">Resources</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
</div>
<main className="relative z-10 flex flex-col items-center w-full">

<section className="w-full min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 reveal-element">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                v2.0 is now available
            </div>
<h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-white mb-8 leading-tight">
<span className="clip-text-anim">Design</span> <span className="text-zinc-500 clip-text-anim" style={{animationDelay: '0.1s'}}>Engineered</span><br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 clip-text-anim" style={{animationDelay: '0.2s'}}>For Speed.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed font-light reveal-element" style={{transitionDelay: '200ms'}}>
                The ultimate toolkit for building fluid, interactive interfaces. Deployed to the edge in seconds.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 reveal-element" style={{transitionDelay: '300ms'}}>
<button className="px-8 py-3 bg-white text-black font-semibold text-sm rounded-full hover:bg-zinc-200 transition-all hover:scale-105 flex items-center gap-2">
                    Start Building <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-3 bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium text-sm rounded-full hover:bg-zinc-800 hover:text-white transition-all flex items-center gap-2 group">
                    Documentation <span className="bg-zinc-800 text-zinc-400 text-[10px] px-1.5 py-0.5 rounded border border-zinc-700 group-hover:border-zinc-600 transition-colors">CMD+K</span>
</button>
</div>

<div className="mt-20 w-full max-w-4xl aspect-[16/9] relative rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm overflow-hidden shadow-2xl reveal-element flashlight-card">
<div className="flashlight-bg"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

<div className="absolute inset-0 p-8 flex gap-4 opacity-50">
<div className="w-1/4 h-full border border-white/5 rounded-lg bg-white/5"></div>
<div className="flex-1 h-full border border-white/5 rounded-lg bg-white/5 flex flex-col gap-4 p-4">
<div className="w-full h-32 border border-white/5 rounded bg-white/5"></div>
<div className="flex gap-4 h-full">
<div className="flex-1 h-full border border-white/5 rounded bg-white/5"></div>
<div className="flex-1 h-full border border-white/5 rounded bg-white/5"></div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-white/5 bg-black/40 py-12 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<p className="text-sm text-zinc-500 font-medium">Trusted by innovative teams worldwide</p>
</div>
<div className="relative w-full mask-gradient">
<div className="flex items-center gap-16 w-max animate-marquee" id="logo-marquee">

</div>
</div>
</section>

<section className="w-full py-32 px-6 max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 reveal-element">Everything you need.</h2>
<p className="text-lg text-zinc-400 max-w-2xl reveal-element">Component driven architecture designed for the modern web stack.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="md:col-span-2 relative rounded-3xl border border-white/10 bg-zinc-900/50 overflow-hidden flashlight-card group reveal-element">
<div className="flashlight-bg"></div>
<div className="absolute inset-0 p-8 flex flex-col z-10">
<div className="flex items-start justify-between mb-8">
<div>
<h3 className="text-xl font-medium text-white">Interactive States</h3>
<p className="text-sm text-zinc-400 mt-1">Seamless transitions between data views.</p>
</div>
<div className="p-2 rounded-lg bg-white/5 border border-white/10"><i className="text-indigo-400" data-lucide="layers"></i></div>
</div>
<div className="relative flex-1 w-full flex items-center justify-center">
<div className="relative w-full max-w-sm h-48" id="card-rotator">
<div className="rotator-card absolute inset-0 bg-zinc-800 border border-white/10 rounded-xl p-5 shadow-xl flex flex-col justify-between transition-all duration-500" data-index="0">
<div className="flex justify-between items-center"><span className="text-sm text-zinc-400">Revenue</span><span className="text-green-400 text-xs">+12%</span></div>
<div className="w-full h-16 flex items-end gap-1">
<div className="w-1/5 h-[40%] bg-zinc-600 rounded-sm"></div>
<div className="w-1/5 h-[60%] bg-zinc-600 rounded-sm"></div>
<div className="w-1/5 h-[30%] bg-zinc-600 rounded-sm"></div>
<div className="w-1/5 h-[80%] bg-indigo-500 rounded-sm"></div>
<div className="w-1/5 h-[50%] bg-zinc-600 rounded-sm"></div>
</div>
</div>
<div className="rotator-card absolute inset-0 bg-zinc-800 border border-white/10 rounded-xl p-5 shadow-xl flex flex-col justify-between transition-all duration-500" data-index="1">
<div className="flex justify-between items-center"><span className="text-sm text-zinc-400">Users</span><span className="text-blue-400 text-xs">Active</span></div>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-600 border border-zinc-800"></div>
<div className="w-8 h-8 rounded-full bg-zinc-500 border border-zinc-800"></div>
<div className="w-8 h-8 rounded-full bg-zinc-400 border border-zinc-800"></div>
</div>
</div>
<div className="rotator-card absolute inset-0 bg-zinc-800 border border-white/10 rounded-xl p-5 shadow-xl flex flex-col justify-between transition-all duration-500" data-index="2">
<div className="flex justify-between items-center"><span className="text-sm text-zinc-400">System</span><span className="text-green-400 text-xs">98/100</span></div>
<div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden"><div className="w-[90%] h-full bg-green-500"></div></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 relative rounded-3xl border border-white/10 bg-zinc-900/50 overflow-hidden flashlight-card group reveal-element">
<div className="flashlight-bg"></div>
<div className="absolute inset-0 p-8 flex flex-col z-10">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-medium text-white">Global Edge</h3>
<p className="text-sm text-zinc-400 mt-1">Latency in single digits.</p>
</div>
<div className="p-2 rounded-lg bg-white/5 border border-white/10"><i className="text-amber-400" data-lucide="zap"></i></div>
</div>
<div className="mt-auto relative h-40 flex items-end justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-indigo-500/20 to-transparent blur-xl"></div>
<div className="text-6xl font-semibold text-white tracking-tighter">14<span className="text-lg text-zinc-500 font-medium">ms</span></div>
</div>
</div>
</div>

<div className="md:col-span-1 relative rounded-3xl border border-white/10 bg-zinc-900/50 overflow-hidden flashlight-card group reveal-element">
<div className="flashlight-bg"></div>
<div className="absolute inset-0 p-8 flex flex-col z-10">
<div className="flex items-start justify-between">
<div>
<h3 className="text-xl font-medium text-white">Encrypted</h3>
<p className="text-sm text-zinc-400 mt-1">SOC2 Compliant.</p>
</div>
<div className="p-2 rounded-lg bg-white/5 border border-white/10"><i className="text-green-400" data-lucide="shield-check"></i></div>
</div>
<div className="mt-auto flex justify-center">
<i className="w-24 h-24 text-zinc-800" data-lucide="lock"></i>
</div>
</div>
</div>

<div className="md:col-span-2 relative rounded-3xl border border-white/10 bg-zinc-900/50 overflow-hidden flashlight-card group reveal-element">
<div className="flashlight-bg"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center z-10">
<div className="mb-4 p-3 rounded-full bg-white/5 border border-white/10"><i className="text-white" data-lucide="mouse-pointer-2"></i></div>
<h3 className="text-2xl font-medium text-white">Cursor Aware</h3>
<p className="text-zinc-400 mt-2 max-w-sm">Hover over any card in this grid to see the gradient lighting effect tracking your movement.</p>
</div>
</div>
</div>
</section>

<section className="w-full py-24 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white reveal-element">Community Feedback</h2>
</div>
<div className="relative w-full overflow-hidden mask-gradient">
<div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]" id="testimonial-marquee">

</div>
</div>
</section>

<section className="w-full py-32 px-6">
<div className="max-w-5xl mx-auto relative rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-zinc-900 to-black overflow-hidden text-center p-12 md:p-24 reveal-element">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">Ready to ship your next idea?</h2>
<p className="text-xl text-zinc-400 font-light mb-10 max-w-lg mx-auto">Join thousands of developers building the future of the web.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-8 py-4 bg-white text-black font-semibold text-base rounded-full hover:bg-zinc-200 transition-all transform hover:scale-105">
                            Get Started Now
                        </button>
<button className="px-8 py-4 bg-transparent border border-white/10 text-white font-medium text-base rounded-full hover:bg-white/5 transition-all">
                            Contact Sales
                        </button>
</div>
</div>
</div>
</section>

<footer className="w-full border-t border-white/10 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 font-semibold tracking-tight text-white mb-4">
<div className="w-5 h-5 bg-white text-black rounded flex items-center justify-center text-[10px] font-bold">D</div>
<span>DesignSystem</span>
</div>
<p className="text-xs text-zinc-500">
                        © 2024 Design Inc.<br/>All rights reserved.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Product</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
</footer>
</main>


    </>
  );
}
