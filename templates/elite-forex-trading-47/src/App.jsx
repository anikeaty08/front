import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Smooth reveal on scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
            observer.observe(el);
        });

        // Simple lightweight particle background generator
        const particleContainer = document.getElementById('particles');
        const particleCount = 40;

        for (let i = 0; i < particleCount; i++) {
            createParticle();
        }

        function createParticle() {
            const p = document.createElement('div');
            p.classList.add('particle', 'bg-[#d4af37]');
            
            // Randomize size using tailwind classes approx
            const sizeClass = Math.random() > 0.5 ? 'w-1 h-1' : (Math.random() > 0.8 ? 'w-1.5 h-1.5' : 'w-0.5 h-0.5');
            p.className += ` ${sizeClass}`;
            
            p.style.left = `${Math.random() * 100}vw`;
            
            // Random animation duration and delay
            const duration = Math.random() * 15 + 10; // 10 to 25 seconds
            const delay = Math.random() * 20;
            
            p.style.animation = `float-up ${duration}s linear ${delay}s infinite`;
            
            particleContainer.appendChild(p);
        }

        // Mouse hover light reflection effect on glass panels
        document.querySelectorAll('.glass-panel').forEach(panel => {
            panel.addEventListener('mousemove', (e) => {
                const rect = panel.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Create a subtle spotlight effect
                panel.style.background = `
                    radial-gradient(
                        circle at ${x}px ${y}px, 
                        rgba(255, 255, 255, 0.08) 0%, 
                        rgba(255, 255, 255, 0.02) 50%,
                        rgba(255, 255, 255, 0.01) 100%
                    )
                `;
            });
            
            panel.addEventListener('mouseleave', () => {
                panel.style.background = 'rgba(255, 255, 255, 0.02)';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

<div className="absolute top-[-10%] left-[-10%] w-3/4 aspect-square rounded-full bg-[#3b0a0a] blur-[150px] opacity-20 bg-ambient"></div>

<div className="absolute bottom-[-20%] right-[-10%] w-2/3 aspect-square rounded-full bg-[#6a0dad] blur-[150px] opacity-10 bg-ambient" style={{animationDelay: '-10s'}}></div>

<div className="absolute inset-0" id="particles"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-t-0 border-l-0 border-r-0">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<iconify-icon className="text-3xl text-[#d4af37] group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-all duration-500" icon="solar:crown-line" strokeWidth="1.5"></iconify-icon>
<span className="font-royal font-medium text-xl tracking-tighter text-gradient-gold">RS</span>
</div>
<div className="hidden md:flex gap-8 text-sm tracking-wide text-gray-400">
<a className="hover:text-[#d4af37] transition-colors" href="#about">About</a>
<a className="hover:text-[#d4af37] transition-colors" href="#services">Services</a>
<a className="hover:text-[#d4af37] transition-colors" href="#community">Community</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium border border-[#00cfff]/30 bg-[#00cfff]/5 text-[#00cfff] px-5 py-2 rounded-full btn-glow-blue tracking-wide" href="https://t.me/rstrading0009" target="_blank">
                Join Telegram
            </a>

<button className="md:hidden text-[#d4af37] text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<main className="relative z-10 flex flex-col">

<section className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none z-[-1]">
<iconify-icon className="text-[40rem] text-[#d4af37]" icon="solar:shield-star-line-duotone"></iconify-icon>
</div>
<div className="max-w-4xl w-full text-center flex flex-col items-center gap-8 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/5 text-xs text-[#d4af37] tracking-wider uppercase mb-4 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] animate-pulse"></span>
                    Algo Trading Launching Soon
                </div>
<h1 className="font-royal font-medium text-5xl md:text-7xl lg:text-8xl tracking-tighter text-gradient-gold leading-tight drop-shadow-2xl">
                    Trading With RS <span className="text-[#00cfff] animate-pulse inline-block text-4xl md:text-6xl align-middle ml-2">🚀</span>
</h1>
<p className="text-lg md:text-2xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto">
                    Trade Smart <span className="text-[#d4af37]/50 mx-2">|</span> Stay Consistent <span className="text-[#d4af37]/50 mx-2">|</span> Dominate the Market
                </p>
<div className="flex flex-col sm:flex-row gap-5 mt-8 w-full sm:w-auto">
<a className="group relative flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[#00cfff]/50 bg-gradient-to-r from-[#00cfff]/10 to-transparent text-[#00cfff] text-base font-medium tracking-wide btn-glow-blue overflow-hidden" href="https://t.me/rstrading0009" target="_blank">
<div className="absolute inset-0 bg-[#00cfff]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<iconify-icon className="text-xl relative z-10" icon="solar:plain-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="relative z-10">Join Telegram Now</span>
</a>
<a className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-[#d4af37]/30 bg-white/5 text-[#d4af37] text-base font-medium tracking-wide btn-glow-gold hover:bg-[#d4af37]/10 transition-colors" href="https://whatsapp.com/channel/0029VbBaytw9MF9ATP9H0i17" target="_blank">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<span>Follow WhatsApp Channel</span>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="about">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative reveal-on-scroll">

<div className="aspect-square w-full max-w-md mx-auto relative rounded-3xl glass-panel p-8 flex flex-col justify-center items-center text-center overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-[#3b0a0a]/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-7xl text-[#d4af37] mb-6 opacity-80 group-hover:scale-110 transition-transform duration-700" icon="solar:hourglass-line-duotone" strokeWidth="1"></iconify-icon>
<h3 className="font-royal text-3xl tracking-tight text-[#d4af37] mb-2">4 Years</h3>
<p className="text-sm text-gray-400 tracking-widest uppercase">Forex Experience</p>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8 reveal-on-scroll">
<h2 className="font-royal font-medium text-4xl md:text-5xl tracking-tighter text-white">
                        Meet <span className="text-gradient-gold">Rishabh Sharma</span>
</h2>
<div className="space-y-4 text-gray-400 font-light text-lg leading-relaxed">
<p>
                            Trading is not about getting rich quick; it’s an art of discipline. With over four years navigating the complex landscapes of Forex markets, I've distilled trading down to its purest elements: strict risk management, psychological resilience, and unwavering patience.
                        </p>
<p className="text-xl font-medium text-[#e5e7eb] border-l-2 border-[#d4af37] pl-6 py-2 my-6 bg-gradient-to-r from-[#d4af37]/5 to-transparent">
                            "Consistency Over Hype."
                        </p>
<p>
                            My approach strips away the noise. No empty promises, just structured, analytical frameworks designed to protect capital first and grow it steadily. Join a mindset focused on long-term wealth building.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-black/40 border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto space-y-16">
<div className="text-center space-y-4 reveal-on-scroll">
<h2 className="font-royal font-medium text-4xl md:text-5xl tracking-tighter text-white">Elite <span className="text-gradient-gold">Services</span></h2>
<p className="text-gray-400 text-base max-w-xl mx-auto font-light">Comprehensive solutions engineered for serious traders seeking an edge in the markets.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel glass-card-hover rounded-2xl p-8 reveal-on-scroll group">
<div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 border border-[#d4af37]/20 group-hover:bg-[#d4af37]/20 transition-colors">
<iconify-icon className="text-2xl text-[#d4af37]" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Forex Signals</h3>
<p className="text-gray-400 text-sm font-light leading-relaxed">High-probability setups with precise entry, stop-loss, and take-profit zones based on rigorous technical analysis.</p>
</div>

<div className="glass-panel glass-card-hover rounded-2xl p-8 reveal-on-scroll group" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 border border-[#d4af37]/20 group-hover:bg-[#d4af37]/20 transition-colors">
<iconify-icon className="text-2xl text-[#d4af37]" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Mentorship</h3>
<p className="text-gray-400 text-sm font-light leading-relaxed">Direct guidance to recalibrate your trading psychology, refine your strategy, and eliminate emotional decision-making.</p>
</div>

<div className="glass-panel glass-card-hover rounded-2xl p-8 reveal-on-scroll group" style={{transitionDelay: '200ms'}}>
<div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 border border-[#d4af37]/20 group-hover:bg-[#d4af37]/20 transition-colors">
<iconify-icon className="text-2xl text-[#d4af37]" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Funded Account Help</h3>
<p className="text-gray-400 text-sm font-light leading-relaxed">Strategic assistance and risk parameters designed specifically to help you pass prop firm challenges and secure capital.</p>
</div>

<div className="glass-panel glass-card-hover rounded-2xl p-8 reveal-on-scroll group lg:col-span-1 md:col-span-2 lg:col-start-1" style={{transitionDelay: '300ms'}}>
<div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 border border-[#d4af37]/20 group-hover:bg-[#d4af37]/20 transition-colors">
<iconify-icon className="text-2xl text-[#d4af37]" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Risk Management</h3>
<p className="text-gray-400 text-sm font-light leading-relaxed">The cornerstone of longevity. Learn to calculate position sizes dynamically and protect your equity curve against drawdowns.</p>
</div>

<div className="glass-panel rounded-2xl p-8 reveal-on-scroll relative overflow-hidden lg:col-span-2 md:col-span-2 border-[#00cfff]/30 shadow-[0_0_30px_rgba(0,207,255,0.05)]" style={{transitionDelay: '400ms'}}>
<div className="absolute top-0 right-0 w-64 h-64 bg-[#00cfff]/10 rounded-full blur-[80px]"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00cfff]/30 bg-[#00cfff]/10 text-xs text-[#00cfff] tracking-wider mb-6">
                                    Coming Soon 🔜
                                </div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-3">Algo Trading</h3>
<p className="text-gray-400 text-sm font-light leading-relaxed max-w-md">Automate your edge. We are developing institutional-grade algorithmic systems to remove human error and execute strategies with millimeter precision 24/5.</p>
</div>
<div className="mt-6 flex items-center text-[#00cfff] text-sm tracking-wide gap-2 opacity-70">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
                                Under Development
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center space-y-12 reveal-on-scroll">
<iconify-icon className="text-6xl text-[#d4af37] opacity-50 mx-auto" icon="solar:star-fall-line-duotone"></iconify-icon>
<h2 className="font-royal font-medium text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white leading-tight">
                    "Consistency builds wealth, <br/> <span className="text-gradient-gold italic">not luck.</span>"
                </h2>

<div className="pt-8 flex flex-col md:flex-row gap-8 justify-center items-center">
<div className="w-full max-w-xs space-y-2 text-left">
<div className="flex justify-between text-xs tracking-wider text-gray-400 uppercase">
<span>Discipline</span>
<span className="text-[#d4af37]">100%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#3b0a0a] to-[#d4af37] w-full relative">
<div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]"></div>
</div>
</div>
</div>
<div className="w-full max-w-xs space-y-2 text-left">
<div className="flex justify-between text-xs tracking-wider text-gray-400 uppercase">
<span>Emotion</span>
<span className="text-[#00cfff]">0%</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#00cfff] w-[5%] shadow-[0_0_10px_#00cfff]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-20" id="community">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3b0a0a]/10 to-transparent pointer-events-none"></div>
<div className="max-w-5xl mx-auto glass-panel rounded-[2rem] p-8 md:p-16 border-[#d4af37]/20 shadow-[0_0_50px_rgba(212,175,55,0.05)] text-center space-y-12 reveal-on-scroll relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl aspect-square bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 space-y-4">
<h2 className="font-royal font-medium text-4xl md:text-5xl lg:text-6xl tracking-tighter text-white">
                        🚀 Join My Trading <span className="text-gradient-gold">Community</span> Now
                    </h2>
<p className="text-gray-400 text-base font-light max-w-2xl mx-auto">Connect with a network of driven traders. Get real-time updates, market breakdowns, and exclusive insights directly from RS.</p>
</div>
<div className="relative z-10 grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">

<a className="flex items-center p-4 rounded-xl glass-panel border-[#00cfff]/20 hover:border-[#00cfff]/50 hover:bg-[#00cfff]/5 transition-all group btn-glow-blue" href="https://t.me/rstrading0009" target="_blank">
<div className="w-12 h-12 rounded-full bg-[#00cfff]/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-[#00cfff]" icon="solar:plain-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-left">
<h4 className="text-white text-base font-medium tracking-tight">Telegram Channel</h4>
<p className="text-xs text-gray-500 mt-0.5">Primary Signals &amp; Updates</p>
</div>
<iconify-icon className="ml-auto text-gray-600 group-hover:text-[#00cfff] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>

<a className="flex items-center p-4 rounded-xl glass-panel border-[#25D366]/20 hover:border-[#25D366]/50 hover:bg-[#25D366]/5 transition-all group shadow-[0_0_15px_rgba(37,211,102,0.1)] hover:shadow-[0_0_25px_rgba(37,211,102,0.3)]" href="https://whatsapp.com/channel/0029VbBaytw9MF9ATP9H0i17" target="_blank">
<div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-[#25D366]" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-left">
<h4 className="text-white text-base font-medium tracking-tight">WhatsApp Channel</h4>
<p className="text-xs text-gray-500 mt-0.5">Quick Alerts &amp; News</p>
</div>
<iconify-icon className="ml-auto text-gray-600 group-hover:text-[#25D366] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>

<a className="flex items-center p-4 rounded-xl glass-panel border-[#1877F2]/20 hover:border-[#1877F2]/50 hover:bg-[#1877F2]/5 transition-all group shadow-[0_0_15px_rgba(24,119,242,0.1)] hover:shadow-[0_0_25px_rgba(24,119,242,0.2)]" href="https://www.facebook.com/share/16dYM9U4tm/" target="_blank">
<div className="w-12 h-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-[#1877F2]" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-left">
<h4 className="text-white text-base font-medium tracking-tight">Facebook</h4>
<p className="text-xs text-gray-500 mt-0.5">Community &amp; Content</p>
</div>
<iconify-icon className="ml-auto text-gray-600 group-hover:text-[#1877F2] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>

<a className="flex items-center p-4 rounded-xl glass-panel border-[#d4af37]/20 hover:border-[#d4af37]/50 hover:bg-[#d4af37]/5 transition-all group btn-glow-gold" href="https://linktr.ee/tradingwithrs0009" target="_blank">
<div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl text-[#d4af37]" icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="text-left">
<h4 className="text-white text-base font-medium tracking-tight">Linktree</h4>
<p className="text-xs text-gray-500 mt-0.5">All Official Links</p>
</div>
<iconify-icon className="ml-auto text-gray-600 group-hover:text-[#d4af37] transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden hidden md:block"> 
<div className="max-w-7xl mx-auto reveal-on-scroll">
<h3 className="text-center text-sm tracking-widest text-gray-500 uppercase mb-12">Client Success</h3>
<div className="flex gap-6 overflow-x-auto pb-8 snap-x" style={{scrollbarWidth: 'none'}}>

<div className="min-w-[300px] glass-panel p-6 rounded-2xl snap-center border-l-2 border-l-[#d4af37]">
<div className="flex gap-1 mb-4 text-[#d4af37]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-300 font-light mb-4">"The approach to risk management taught here completely changed how I view the charts. Finally seeing consistent growth."</p>
<p className="text-xs text-gray-500 font-medium tracking-wide">- Funded Trader</p>
</div>

<div className="min-w-[300px] glass-panel p-6 rounded-2xl snap-center border-l-2 border-l-[#00cfff]">
<div className="flex gap-1 mb-4 text-[#d4af37]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-300 font-light mb-4">"Signals are precise, but the psychology lessons are where the real value lies. No fluff, just pure discipline."</p>
<p className="text-xs text-gray-500 font-medium tracking-wide">- Community Member</p>
</div>

<div className="min-w-[300px] glass-panel p-6 rounded-2xl snap-center border-l-2 border-l-[#6a0dad]">
<div className="flex gap-1 mb-4 text-[#d4af37]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-300 font-light mb-4">"Passed my challenge using RS's risk parameters. The focus on preserving capital over wild gains is exactly what I needed."</p>
<p className="text-xs text-gray-500 font-medium tracking-wide">- Prop Firm Trader</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative z-10 bg-black/50">
<div className="max-w-3xl mx-auto text-center space-y-8 reveal-on-scroll">
<h2 className="font-royal font-medium text-3xl md:text-4xl tracking-tight text-white">Any Questions?</h2>
<p className="text-gray-400 text-base font-light">Reach out directly for mentorship inquiries or support.</p>
<a className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[#25D366]/50 bg-[#25D366]/10 text-white text-base font-medium tracking-wide shadow-[0_0_20px_rgba(37,211,102,0.2)] hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:bg-[#25D366]/20 transition-all duration-300 transform hover:-translate-y-1" href="https://wa.me/916396848396" target="_blank">
<iconify-icon className="text-2xl text-[#25D366]" icon="solar:phone-calling-rounded-bold-duotone"></iconify-icon>
                    Contact on WhatsApp <span className="text-gray-400 font-normal ml-2 text-sm">+91 6396848396</span>
</a>
</div>
</section>
</main>

<footer className="border-t border-[#d4af37]/20 bg-[#0a0a0a] relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col items-center justify-center space-y-6">
<div className="flex items-center gap-2 opacity-50 mb-4">
<iconify-icon className="text-xl text-[#d4af37]" icon="solar:crown-line"></iconify-icon>
<span className="font-royal font-medium text-lg tracking-tighter text-[#d4af37]">RS</span>
</div>
<p className="text-center text-sm md:text-base font-royal text-[#d4af37] tracking-wide max-w-lg opacity-80">
                "Consistency is the real key to success in trading."
            </p>
<div className="h-px w-24 bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent my-4"></div>
<div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-600 tracking-wider uppercase">
<p>© 2023 Trading With RS. All rights reserved.</p>
<span className="hidden sm:inline">|</span>
<a className="text-[#00cfff] hover:text-white transition-colors flex items-center gap-1" href="https://t.me/rstrading0009" target="_blank">
<iconify-icon icon="solar:plain-3-linear"></iconify-icon> Join Community
                </a>
</div>
</div>
</footer>



    </>
  );
}
