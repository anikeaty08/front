import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
heading: ["'Instrument Serif'", "serif"],
body: ["'Barlow'", "sans-serif"]
},
colors: {
background: "hsl(var(--background))",
foreground: "hsl(var(--foreground))",
card: "hsl(var(--card))",
'card-foreground': "hsl(var(--card-foreground))",
primary: "hsl(var(--primary))",
'primary-foreground': "hsl(var(--primary-foreground))",
secondary: "hsl(var(--secondary))",
'secondary-foreground': "hsl(var(--secondary-foreground))",
muted: "hsl(var(--muted))",
'muted-foreground': "hsl(var(--muted-foreground))",
accent: "hsl(var(--accent))",
'accent-foreground': "hsl(var(--accent-foreground))",
destructive: "hsl(var(--destructive))",
border: "var(--border)",
input: "var(--input)",
ring: "var(--ring)",
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // HLS Video Support
        document.addEventListener('DOMContentLoaded', () => {
            const videos = document.querySelectorAll('video[data-src]');
            videos.forEach(video => {
                const src = video.getAttribute('data-src');
                if (src) {
                    if (Hls.isSupported()) {
                        const hls = new Hls({
                            startLevel: 2,
                            capLevelToPlayerSize: true
                        });
                        hls.loadSource(src);
                        hls.attachMedia(video);
                    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                        video.src = src;
                    }
                }
            });

            // Blur Text Animation Logic
            const blurTexts = document.querySelectorAll('.blur-text');
            blurTexts.forEach(el => {
                const words = el.innerText.trim().split(' ');
                el.innerHTML = '';
                words.forEach((word, i) => {
                    const span = document.createElement('span');
                    span.innerText = word + ' ';
                    span.className = 'blur-word';
                    span.style.transitionDelay = `${i * 100}ms`;
                    el.appendChild(span);
                });
            });

            // Intersection Observer for scroll animations
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Optional: unobserve after animating once
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe standard fade-ups
            document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
            
            // Observe blur text containers
            document.querySelectorAll('.blur-text').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-4 left-0 right-0 z-50 px-6 lg:px-16 py-3 flex items-center justify-between pointer-events-none">
<div className="pointer-events-auto flex items-center gap-2">
<span className="text-white font-body font-medium text-sm tracking-[0.2em]">P L U M M Y</span>
</div>
<div className="hidden md:flex pointer-events-auto liquid-glass rounded-full px-1.5 py-1 items-center">
<a className="px-4 py-2 text-sm font-light text-white/80 hover:text-white transition-colors" href="#">Home</a>
<a className="px-4 py-2 text-sm font-light text-white/80 hover:text-white transition-colors" href="#">Services</a>
<a className="px-4 py-2 text-sm font-light text-white/80 hover:text-white transition-colors" href="#">Emergency</a>
<a className="px-4 py-2 text-sm font-light text-white/80 hover:text-white transition-colors" href="#">Process</a>
<a className="px-4 py-2 text-sm font-light text-white/80 hover:text-white transition-colors mr-2" href="#">Pricing</a>
<a className="bg-white text-black hover:bg-white/90 transition-colors rounded-full px-4 py-2 text-sm font-medium flex items-center gap-1" href="#">
                Book a Plumber
                <iconify-icon height="16" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative w-full h-[1000px] flex flex-col items-center overflow-hidden">

<div className="absolute inset-0 z-0 w-full h-full flex items-center justify-center pointer-events-none">
<video autoplay="" className="absolute left-0 w-full h-auto min-h-full object-cover top-[10%] md:top-[20%] opacity-60" loop="" muted="" playsinline="" poster="/images/hero_bg.jpeg" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4">
</video>
</div>
<div className="absolute inset-0 bg-black/10 z-0 pointer-events-none"></div>
<div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent z-0 pointer-events-none"></div>

<div className="relative z-10 flex flex-col items-center justify-start text-center w-full max-w-5xl px-6 pt-[180px] md:pt-[220px]">
<div className="liquid-glass rounded-full px-1.5 py-1.5 flex items-center gap-3 mb-8 fade-in-up">
<span className="bg-white text-black rounded-full px-3 py-1 text-xs font-medium">24/7</span>
<span className="text-xs font-light text-white pr-3">Premium Plumbing Service in London.</span>
</div>
<h1 className="blur-text text-[3.5rem] md:text-7xl lg:text-[6rem] font-heading italic text-white leading-[0.85] tracking-[-0.04em] max-w-3xl mb-8">
                The Plumbing Service London Deserves
            </h1>
<p className="fade-in-up delay-800 text-sm md:text-base text-white/70 font-body font-light leading-relaxed max-w-xl mb-10">
                Impeccable craftsmanship. Lightning-fast response. Built by master experts, refined by decades of experience. This is plumbing, wildly reimagined.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 fade-in-up delay-1100">
<a className="liquid-glass-strong rounded-full px-6 py-3.5 flex items-center gap-2 text-sm font-medium hover:scale-105 transition-transform duration-300" href="#">
                    Book an Engineer
                    <iconify-icon height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a className="rounded-full px-6 py-3.5 flex items-center gap-2 text-sm font-light text-white/80 hover:text-white transition-colors group" href="#">
<span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
<iconify-icon height="12" icon="solar:play-bold" width="12"></iconify-icon>
</span>
                    Watch the Film
                </a>
</div>
</div>

<div className="relative z-10 mt-auto pb-12 pt-16 flex flex-col items-center w-full px-6 fade-in-up delay-300">
<div className="liquid-glass rounded-full px-5 py-2 mb-8">
<span className="text-xs font-light text-white/60 uppercase tracking-widest">Trusted by estates in</span>
</div>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 mix-blend-screen">
<span className="text-2xl md:text-3xl font-heading italic tracking-tight">Mayfair</span>
<span className="text-2xl md:text-3xl font-heading italic tracking-tight">Chelsea</span>
<span className="text-2xl md:text-3xl font-heading italic tracking-tight">Kensington</span>
<span className="text-2xl md:text-3xl font-heading italic tracking-tight">Soho</span>
<span className="text-2xl md:text-3xl font-heading italic tracking-tight">Westminster</span>
</div>
</div>
</section>

<section className="relative w-full min-h-[600px] flex flex-col items-center justify-center py-32 overflow-hidden bg-black">
<div className="absolute inset-0 z-0 pointer-events-none">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-40" data-src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8" loop="" muted="" playsinline="">
</video>
<div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent"></div>
<div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto fade-in-up">
<div className="liquid-glass rounded-full px-4 py-1.5 mb-8">
<span className="text-xs font-medium text-white">Emergency Response</span>
</div>
<h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-heading italic tracking-[-0.03em] leading-[0.9] mb-6">
                You call.<br/>We arrive.
            </h2>
<p className="text-sm md:text-base text-white/60 font-light max-w-lg mb-10">
                Share your issue. Our master plumbers handle the rest—diagnostics, repair, testing, cleanup. All in hours, not days. Zero disruption to your life.
            </p>
<a className="liquid-glass-strong rounded-full px-8 py-4 text-sm font-medium hover:scale-105 transition-transform duration-300" href="#">
                Request Immediate Callout
            </a>
</div>
</section>

<section className="relative w-full py-32 px-6 lg:px-16 max-w-7xl mx-auto bg-black">
<div className="flex flex-col items-center text-center mb-24 fade-in-up">
<div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
<span className="text-xs font-medium text-white">Capabilities</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-[-0.03em] leading-tight">
                Premium service.<br/>Zero complexity.
            </h2>
</div>

<div className="flex flex-col lg:flex-row items-center gap-16 mb-32 fade-in-up">
<div className="w-full lg:w-1/2 flex flex-col items-start text-left">
<h3 className="text-3xl md:text-4xl font-heading italic tracking-tight mb-4">
                    Engineered to last. Built to perform.
                </h3>
<p className="text-white/60 font-light text-sm md:text-base leading-relaxed mb-8 max-w-md">
                    Every joint is intentional. Our engineers use the highest-grade copper and state-of-the-art fittings to ensure your system doesn't just work—it outlasts the property itself.
                </p>
<a className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2" href="#">
                    Explore Our Standards
                    <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="w-full lg:w-1/2">
<div className="liquid-glass rounded-3xl overflow-hidden aspect-[4/3] p-1 relative">
<img alt="Premium Plumbing" className="w-full h-full object-cover rounded-[1.25rem] opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse items-center gap-16 fade-in-up">
<div className="w-full lg:w-1/2 flex flex-col items-start text-left">
<h3 className="text-3xl md:text-4xl font-heading italic tracking-tight mb-4">
                    Smart diagnostics. Zero guesswork.
                </h3>
<p className="text-white/60 font-light text-sm md:text-base leading-relaxed mb-8 max-w-md">
                    We don't break walls to find a leak. Using thermal imaging and acoustic sensors, we pinpoint issues with millimeter precision. Faster resolution, immaculate homes.
                </p>
<a className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2" href="#">
                    See the Technology
                    <iconify-icon height="16" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="w-full lg:w-1/2">
<div className="liquid-glass rounded-3xl overflow-hidden aspect-[4/3] p-1 relative">
<img alt="Diagnostic Technology" className="w-full h-full object-cover rounded-[1.25rem] opacity-80 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700" src="https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif"/>
</div>
</div>
</div>
</section>

<section className="relative w-full py-32 px-6 lg:px-16 max-w-7xl mx-auto bg-black">
<div className="flex flex-col items-center text-center mb-16 fade-in-up">
<div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
<span className="text-xs font-medium text-white">Why Us</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-[-0.03em] leading-tight">
                The difference is everything.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="liquid-glass rounded-2xl p-8 flex flex-col items-start fade-in-up delay-100 hover:-translate-y-1 transition-transform duration-300">
<div className="liquid-glass-strong w-12 h-12 rounded-full flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-3 tracking-tight">Hours, Not Days</h4>
<p className="text-white/60 font-light text-sm leading-relaxed">
                    From call to resolution at a pace that redefines fast. Because waiting with a leak isn't a strategy.
                </p>
</div>

<div className="liquid-glass rounded-2xl p-8 flex flex-col items-start fade-in-up delay-200 hover:-translate-y-1 transition-transform duration-300">
<div className="liquid-glass-strong w-12 h-12 rounded-full flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:pipette-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-3 tracking-tight">Obsessively Crafted</h4>
<p className="text-white/60 font-light text-sm leading-relaxed">
                    Every pipe aligned. Every seal perfected. Installations so precise, they feel inevitable.
                </p>
</div>

<div className="liquid-glass rounded-2xl p-8 flex flex-col items-start fade-in-up delay-300 hover:-translate-y-1 transition-transform duration-300">
<div className="liquid-glass-strong w-12 h-12 rounded-full flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-3 tracking-tight">Built for London</h4>
<p className="text-white/60 font-light text-sm leading-relaxed">
                    Solutions informed by historic architecture. Decisions backed by local engineering codes.
                </p>
</div>

<div className="liquid-glass rounded-2xl p-8 flex flex-col items-start fade-in-up delay-300 hover:-translate-y-1 transition-transform duration-300">
<div className="liquid-glass-strong w-12 h-12 rounded-full flex items-center justify-center mb-6">
<iconify-icon height="24" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium mb-3 tracking-tight">Secure by Default</h4>
<p className="text-white/60 font-light text-sm leading-relaxed">
                    Enterprise-grade insurance comes standard. Fully certified, comprehensive warranties. All included.
                </p>
</div>
</div>
</section>

<section className="relative w-full py-32 overflow-hidden bg-black">
<div className="absolute inset-0 z-0 pointer-events-none">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale saturate-0" data-src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8" loop="" muted="" playsinline="">
</video>
<div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent"></div>
<div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-6 fade-in-up">
<div className="liquid-glass rounded-[2rem] p-12 md:p-16 w-full">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center md:text-left">
<div className="flex flex-col gap-2">
<span className="text-5xl md:text-6xl font-heading italic tracking-tight">5k+</span>
<span className="text-white/60 font-light text-sm tracking-wide uppercase">Repairs Completed</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-5xl md:text-6xl font-heading italic tracking-tight">99%</span>
<span className="text-white/60 font-light text-sm tracking-wide uppercase">Client Satisfaction</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-5xl md:text-6xl font-heading italic tracking-tight">45m</span>
<span className="text-white/60 font-light text-sm tracking-wide uppercase">Average Response</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-5xl md:text-6xl font-heading italic tracking-tight">24/7</span>
<span className="text-white/60 font-light text-sm tracking-wide uppercase">Availability</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full py-32 px-6 lg:px-16 max-w-7xl mx-auto bg-black">
<div className="flex flex-col items-center text-center mb-16 fade-in-up">
<div className="liquid-glass rounded-full px-4 py-1.5 mb-6">
<span className="text-xs font-medium text-white">What They Say</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-heading italic tracking-[-0.03em] leading-tight">
                Don't take our word for it.
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="liquid-glass rounded-2xl p-8 flex flex-col justify-between min-h-[240px] fade-in-up delay-100">
<p className="text-white/80 font-light text-sm leading-relaxed italic mb-8">
                    "A complete pipe rebuild in our Kensington property in under a week. The cleanliness and precision outperformed everything we'd experienced with contractors before."
                </p>
<div>
<h5 className="text-white font-medium text-sm">Sarah Chen</h5>
<span className="text-white/50 font-light text-xs">Property Developer, Luminary</span>
</div>
</div>
<div className="liquid-glass rounded-2xl p-8 flex flex-col justify-between min-h-[240px] fade-in-up delay-200">
<p className="text-white/80 font-light text-sm leading-relaxed italic mb-8">
                    "Emergency boiler replacement at 3 AM. They arrived in 40 minutes. The system just works differently when it's installed by absolute professionals."
                </p>
<div>
<h5 className="text-white font-medium text-sm">Marcus Webb</h5>
<span className="text-white/50 font-light text-xs">Homeowner, Chelsea</span>
</div>
</div>
<div className="liquid-glass rounded-2xl p-8 flex flex-col justify-between min-h-[240px] fade-in-up delay-300">
<p className="text-white/80 font-light text-sm leading-relaxed italic mb-8">
                    "They didn't just fix the leak. They redesigned our entire water management system. World-class doesn't begin to cover it."
                </p>
<div>
<h5 className="text-white font-medium text-sm">Elena Voss</h5>
<span className="text-white/50 font-light text-xs">Estates Director, Helix Mayfair</span>
</div>
</div>
</div>
</section>

<section className="relative w-full pt-32 pb-8 overflow-hidden bg-black flex flex-col items-center justify-end min-h-[80vh]">
<div className="absolute inset-0 z-0 pointer-events-none">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-40" data-src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8" loop="" muted="" playsinline="">
</video>
<div className="absolute top-0 w-full h-[200px] bg-gradient-to-b from-black to-transparent"></div>
<div className="absolute bottom-0 w-full h-[300px] bg-gradient-to-t from-black to-transparent"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl w-full fade-in-up">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-heading italic tracking-[-0.04em] leading-[0.85] mb-6">
                Your next repair starts here.
            </h2>
<p className="text-sm md:text-base text-white/60 font-light mb-10 max-w-md mx-auto">
                Book a free site survey. See what elite plumbing can do for your property. No commitment, no pressure. Just perfection.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-32">
<a className="liquid-glass-strong rounded-full px-8 py-4 text-sm font-medium hover:scale-105 transition-transform duration-300" href="#">
                    Book a Call
                </a>
<a className="bg-white text-black rounded-full px-8 py-4 text-sm font-medium hover:bg-white/90 transition-colors" href="#">
                    View Pricing
                </a>
</div>

<div className="w-full border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 mt-auto">
<span className="text-white/40 text-xs font-light tracking-wide">© 2026 Plummy London. All rights reserved.</span>
<div className="flex items-center gap-6">
<a className="text-white/40 text-xs font-light hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-white/40 text-xs font-light hover:text-white transition-colors" href="#">Terms</a>
<a className="text-white/40 text-xs font-light hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</section>



    </>
  );
}
