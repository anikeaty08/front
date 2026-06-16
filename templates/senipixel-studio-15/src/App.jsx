import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
},
colors: {
neutral: {
50: '#fafafa',
100: '#f5f5f5',
200: '#e5e5e5',
300: '#d4d4d4',
400: '#a3a3a3',
500: '#737373',
600: '#525252',
700: '#404040',
800: '#262626',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'blob': 'blob 7s infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        // Spotlight Logic
        function handleSpotlight(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }

        // Carousel Logic
        let currentIndex = 0;
        const cards = [
            document.getElementById('card-0'),
            document.getElementById('card-1'),
            document.getElementById('card-2')
        ];

        function rotateCarousel(direction) {
            cards.forEach(card => {
                card.classList.remove('active', 'prev', 'next');
                card.style.zIndex = '';
            });

            if (direction === 1) { 
                currentIndex = (currentIndex + 1) % cards.length;
            } else { 
                currentIndex = (currentIndex - 1 + cards.length) % cards.length;
            }

            const activeIndex = currentIndex;
            const nextIndex = (currentIndex + 1) % cards.length;
            const prevIndex = (currentIndex - 1 + cards.length) % cards.length;

            cards[activeIndex].classList.add('active');
            cards[nextIndex].classList.add('next');
            cards[prevIndex].classList.add('prev');
        }
        
        // Auto rotate
        setInterval(() => { rotateCarousel(1); }, 6000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-neutral-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
<div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-neutral-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-neutral-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{animationDelay: '4s'}}></div>
<div className="absolute inset-0 bg-grid z-[-1]"></div>
</div>

<div className="relative z-10 flex flex-col lg:flex-row min-h-screen max-w-[1600px] mx-auto">

<aside className="lg:w-72 lg:fixed lg:h-screen flex flex-col z-50 glass-panel lg:bg-white/50 lg:backdrop-blur-xl lg:border-r border-b border-neutral-200 p-8 justify-between">
<div className="">
<div className="mb-12 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<a className="block group" href="#">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white">
<iconify-icon height="18" icon="lucide:layers" width="18"></iconify-icon>
</div>
<span className="text-xl font-medium text-neutral-900 tracking-tight font-geist-mono" style={{}}>Senipixel</span>
</div>
</a>
</div>
<nav className="space-y-2 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-black bg-white/80 border border-neutral-200 rounded-xl shadow-sm font-geist-mono" href="#">
<iconify-icon className="" icon="lucide:home" width="16"></iconify-icon>
                        Home
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-500 hover:text-black hover:bg-white/50 rounded-xl transition-all font-geist-mono" href="#services">
<iconify-icon icon="lucide:grid" width="16"></iconify-icon>
                        Services
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-500 hover:text-black hover:bg-white/50 rounded-xl transition-all font-geist-mono" href="#work">
<iconify-icon icon="lucide:image" width="16"></iconify-icon>
                        Selected Work
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-500 hover:text-black hover:bg-white/50 rounded-xl transition-all font-geist-mono" href="#process">
<iconify-icon icon="lucide:git-commit" width="16"></iconify-icon>
                        Process
                    </a>
<a className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-neutral-500 hover:text-black hover:bg-white/50 rounded-xl transition-all font-geist-mono" href="#about">
<iconify-icon icon="lucide:info" width="16"></iconify-icon>
                        About Us
                    </a>
</nav>
</div>
<div className="hidden lg:block space-y-4 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200">
<p className="text-xs font-medium text-neutral-900 mb-2 font-geist-mono">Ready to start?</p>
<a className="flex items-center justify-center w-full py-2 bg-black text-white text-xs font-medium rounded-lg hover:bg-neutral-800 transition-colors shadow-sm font-geist-mono" href="#contact">
                        Get a Quote
                    </a>
</div>
<div className="flex items-center gap-2 px-2">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-neutral-500"></span>
</div>
<p className="text-xs text-neutral-500 font-geist-mono">Accepting new projects</p>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-72 p-6 lg:p-16 flex flex-col gap-24 overflow-hidden">

<section className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] pt-12 gap-x-12 gap-y-12 items-center">
<div className="lg:col-span-8 space-y-8 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
</span>
<span className="text-xs font-medium text-neutral-600 tracking-tight font-geist-mono">Based in Malaysia</span>
</div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-semibold text-black tracking-tighter font-geist-mono">
                        Professional Website, Print &amp; Design Solutions.
                    </h1>
<p className="text-lg lg:text-xl text-neutral-500 max-w-2xl font-normal leading-relaxed font-geist-mono">
                        Senipixel Studio helps companies build strong, consistent brand presence across digital platforms and printed materials.
                    </p>
<div className="flex flex-wrap gap-4 pt-2">
<button className="group relative px-6 py-3.5 bg-black text-white text-sm font-medium rounded-full shadow-lg shadow-neutral-500/10 hover:shadow-xl hover:shadow-neutral-500/20 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
<span className="flex items-center gap-2 font-geist-mono z-10 relative">
                                Get a Quote
                                <iconify-icon className="" icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
<button className="px-6 py-3.5 bg-white text-neutral-700 border border-neutral-200 text-sm font-medium rounded-full hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-300 font-geist-mono">
                            View Our Work
                        </button>
</div>

<div className="pt-12 border-t border-neutral-200">
<p className="text-xs text-neutral-400 font-medium mb-4 uppercase tracking-wider font-geist-mono">Trusted by Malaysian Businesses</p>
<div className="flex gap-8 opacity-40 grayscale hover:opacity-80 transition-all duration-500">
<iconify-icon icon="lucide:briefcase" width="24"></iconify-icon>
<iconify-icon icon="lucide:building-2" width="24"></iconify-icon>
<iconify-icon icon="lucide:store" width="24"></iconify-icon>
<iconify-icon icon="lucide:users" width="24"></iconify-icon>
<span className="text-sm font-medium self-center font-geist-mono">SMEs &amp; Corporate Clients</span>
</div>
</div>
</div>
</section>

<section className="animate-fade-in-up" id="services" style={{animationDelay: '0.2s'}}>
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl lg:text-4xl text-black tracking-tight mb-4 font-geist-mono font-semibold">Integrated Design Services</h2>
<p className="text-neutral-500 text-base leading-relaxed font-geist-mono">We offer integrated digital and print design services designed to support business growth and brand consistency.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-3xl group spotlight-card" onmousemove="handleSpotlight(event)">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon className="" icon="lucide:monitor" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-black mb-3 tracking-tight font-geist-mono">Website Design &amp; Development</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-geist-mono">Custom, responsive websites built for performance and user experience. Optimization and redesign services available.</p>
</div>

<div className="glass-card p-8 rounded-3xl group spotlight-card" onmousemove="handleSpotlight(event)">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-black mb-3 tracking-tight font-geist-mono">Branding &amp; Visual Identity</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-geist-mono">Comprehensive branding packages including logo design, typography systems, and brand guidelines.</p>
</div>

<div className="glass-card p-8 rounded-3xl group spotlight-card" onmousemove="handleSpotlight(event)">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon className="" icon="lucide:printer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-black mb-3 tracking-tight font-geist-mono">Print Design &amp; Artwork</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-geist-mono">Production-ready artwork for brochures, business cards, packaging, and marketing collateral.</p>
</div>

<div className="glass-card p-8 rounded-3xl group spotlight-card md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center gap-8" onmousemove="handleSpotlight(event)">
<div className="flex-1">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform shadow-sm">
<iconify-icon className="" icon="lucide:megaphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-black mb-3 tracking-tight font-geist-mono">Marketing &amp; Promotional Design</h3>
<p className="text-neutral-500 text-sm leading-relaxed max-w-2xl font-geist-mono">From digital ads to large format print banners, we ensure your promotional materials grab attention and drive action.</p>
</div>
<div className="hidden md:block w-32 h-32 opacity-10 bg-gradient-to-tr from-neutral-200 to-black rounded-full blur-3xl"></div>
</div>
</div>
</section>

<section className="py-12">
<div className="bg-black rounded-[32px] p-8 lg:p-16 relative overflow-hidden text-white shadow-2xl shadow-neutral-900/10">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16">
<div className="space-y-6">
<h2 className="text-3xl lg:text-4xl tracking-tight text-white font-geist-mono font-semibold">Why Choose Senipixel Studio</h2>
<p className="text-neutral-400 text-lg leading-relaxed font-geist-mono">
                                We are a Malaysia-based studio combining integrated digital &amp; print expertise with a business-focused design approach.
                            </p>
<div className="flex flex-col gap-4 pt-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
<iconify-icon className="text-white" icon="lucide:map-pin"></iconify-icon>
</div>
<span className="font-medium text-neutral-200 font-geist-mono">Malaysia-based local expertise</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
<iconify-icon className="text-white" icon="lucide:file-check"></iconify-icon>
</div>
<span className="font-medium text-neutral-200 font-geist-mono">Production-ready print artwork</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
<iconify-icon className="text-white" icon="lucide:message-circle"></iconify-icon>
</div>
<span className="font-medium text-neutral-200 font-geist-mono">Clear process &amp; communication</span>
</div>
</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-md flex flex-col justify-center items-center text-center">
<h3 className="text-5xl tracking-tight mb-2 text-white font-geist-mono font-semibold">100%</h3>
<p className="text-neutral-400 text-sm uppercase tracking-widest mb-8 font-geist-mono">Client Satisfaction Focus</p>
<p className="text-neutral-300 leading-relaxed max-w-sm font-geist-mono">We don't just design; we create assets that work for your business goals, ensuring clarity and quality in every deliverable.</p>
</div>
</div>
</div>
</section>

<section className="animate-fade-in-up" id="process">
<div className="flex flex-col items-center text-center mb-16">
<h2 className="text-3xl lg:text-4xl text-black tracking-tight mb-4 font-geist-mono font-semibold">Our Design Process</h2>
<p className="text-neutral-500 max-w-xl text-base font-geist-mono">A structured approach to delivering quality results.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative group">
<div className="glass-card p-8 rounded-3xl h-full border-t-4 border-t-black">
<div className="absolute -top-4 left-8 bg-neutral-50 border border-neutral-200 text-black text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-geist-mono">Step 1</div>
<div className="mb-6 mt-2">
<iconify-icon className="text-black" icon="lucide:search" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-black mb-3 font-geist-mono">Discovery &amp; Requirements</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-geist-mono">We deep dive to understand your business goals, target audience, and the full scope of the project.</p>
</div>

<div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-neutral-200 z-0"></div>
</div>

<div className="relative group">
<div className="glass-card p-8 rounded-3xl h-full border-t-4 border-t-neutral-300 group-hover:border-t-black transition-colors">
<div className="absolute -top-4 left-8 bg-white border border-neutral-200 text-neutral-500 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-geist-mono">Step 2</div>
<div className="mb-6 mt-2">
<iconify-icon className="text-black" icon="lucide:pen-tool" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-black mb-3 font-geist-mono">Design &amp; Development</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-geist-mono">We create structured, professional designs aligned with your brand, followed by feedback and refinement cycles.</p>
</div>

<div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[2px] bg-neutral-200 z-0"></div>
</div>

<div className="relative group">
<div className="glass-card p-8 rounded-3xl h-full border-t-4 border-t-neutral-300 group-hover:border-t-black transition-colors">
<div className="absolute -top-4 left-8 bg-white border border-neutral-200 text-neutral-500 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider font-geist-mono">Step 3</div>
<div className="mb-6 mt-2">
<iconify-icon className="text-black" icon="lucide:check-circle-2" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-black mb-3 font-geist-mono">Final Delivery</h3>
<p className="text-neutral-500 text-sm leading-relaxed font-geist-mono">We hand over optimized digital assets and production-ready print files, ensuring you are ready to launch.</p>
</div>
</div>
</div>
</section>

<section className="py-12 overflow-visible" id="work">
<div className="flex justify-between items-end mb-12 px-2">
<div className="">
<h2 className="text-3xl lg:text-4xl text-black tracking-tight mb-2 font-geist-mono font-semibold">Selected Work</h2>
<p className="text-neutral-500 font-geist-mono">Website, branding, and print projects for Malaysian businesses.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-300 transition-colors" onclick="rotateCarousel(-1)">
<iconify-icon icon="lucide:arrow-left" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-200 bg-white flex items-center justify-center hover:bg-neutral-50 hover:border-neutral-300 transition-colors" onclick="rotateCarousel(1)">
<iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
</div>
</div>
<div className="carousel-container flex w-full h-[400px] lg:h-[500px] relative items-center justify-center">

<div className="carousel-card w-full lg:w-4/5 h-full glass-panel rounded-3xl p-2 cursor-pointer prev" id="card-0">
<div className="w-full h-full bg-neutral-100 rounded-2xl overflow-hidden relative group">
<div className="absolute top-6 left-6 z-20">
<span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium border border-neutral-200 text-black font-geist-mono">Corporate Branding</span>
</div>
<div className="w-full h-full bg-neutral-100 flex items-center justify-center">

<div className="w-3/4 h-3/4 bg-white shadow-xl rounded-lg flex flex-col items-center justify-center p-8 text-center border border-neutral-100">
<div className="w-16 h-16 rounded-full bg-black mb-4"></div>
<h4 className="text-xl font-medium text-black font-geist-mono">TechStart Identity</h4>
<p className="text-neutral-400 text-sm mt-2 font-geist-mono">Visual System &amp; Stationery</p>
</div>
</div>
</div>
</div>

<div className="carousel-card w-full lg:w-4/5 h-full glass-panel rounded-3xl p-2 cursor-pointer active" id="card-1">
<div className="w-full h-full bg-neutral-100 rounded-2xl overflow-hidden relative group">
<div className="absolute top-6 left-6 z-20">
<span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium border border-neutral-200 text-black font-geist-mono">E-Commerce Website</span>
</div>
<div className="w-full h-full bg-neutral-50 flex items-center justify-center">
<div className="w-3/4 h-3/4 bg-white shadow-2xl rounded-lg border border-neutral-100 p-4">
<div className="w-full h-full bg-neutral-50 rounded flex items-center justify-center">
<p className="text-neutral-400 font-medium font-geist-mono">Retail Site Mockup</p>
</div>
</div>
</div>
</div>
</div>

<div className="carousel-card w-full lg:w-4/5 h-full glass-panel rounded-3xl p-2 cursor-pointer next" id="card-2">
<div className="w-full h-full bg-neutral-100 rounded-2xl overflow-hidden relative group">
<div className="absolute top-6 left-6 z-20">
<span className="bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-medium border border-neutral-200 text-black font-geist-mono">Print Campaign</span>
</div>
<div className="w-full h-full bg-neutral-200 flex items-center justify-center">
<div className="w-2/3 h-4/5 bg-white shadow-xl rotate-3 border border-neutral-100 p-6">
<div className="h-full border-2 border-dashed border-neutral-200 flex items-center justify-center">
<p className="text-neutral-400 font-geist-mono">Flyer Design</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid lg:grid-cols-2 gap-12 items-center bg-white border border-neutral-200 rounded-[32px] p-8 lg:p-12" id="about">
<div className="">
<h2 className="text-3xl text-black tracking-tight mb-6 font-geist-mono font-semibold">About Senipixel Studio</h2>
<div className="space-y-4 text-neutral-500 leading-relaxed text-base">
<p className="font-geist-mono">
                            Senipixel Studio is a multidisciplinary design studio based in Malaysia, providing integrated website, print, and branding solutions.
                        </p>
<p className="font-geist-mono">
                            We deliver reliable, high-quality design that helps businesses communicate clearly and look professional. Whether you are a startup needing a full identity or an SME looking to refresh your marketing materials, we focus on clarity, consistency, and business impact.
                        </p>
</div>
</div>
<div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100 flex flex-col justify-center items-center gap-6">
<div className="grid grid-cols-2 gap-4 w-full">
<div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-100 text-center">
<div className="text-2xl text-black mb-1 font-geist-mono font-semibold">5+</div>
<div className="text-xs text-neutral-400 uppercase tracking-wide font-geist-mono">Years Exp.</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-100 text-center">
<div className="text-2xl text-black mb-1 font-geist-mono font-semibold">100+</div>
<div className="text-xs text-neutral-400 uppercase tracking-wide font-geist-mono">Projects</div>
</div>
</div>
<div className="text-center">
<p className="text-sm font-medium text-neutral-700 font-geist-mono">Let's build something great.</p>
<p className="text-xs text-neutral-400 mt-1 font-geist-mono">Available for new collaborations</p>
</div>
</div>
</section>

<section className="py-12 mb-12" id="contact">
<div className="bg-black rounded-[32px] p-12 lg:p-20 text-center text-white relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-white/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-4xl lg:text-5xl tracking-tight mb-6 font-geist-mono font-semibold">Ready to Start Your Project?</h2>
<p className="text-lg text-neutral-400 mb-10 leading-relaxed font-geist-mono">Let’s discuss your website, branding, or print design requirements. We help you move from idea to execution.</p>
<button className="px-8 py-4 bg-white text-black text-base font-medium rounded-full hover:bg-neutral-200 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/50 font-geist-mono">
                            Request a Quote
                        </button>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 pt-12 pb-8">
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-black flex items-center justify-center text-white">
<span className="font-bold text-xs font-geist-mono">S</span>
</div>
<span className="text-lg font-medium tracking-tight text-black font-geist-mono">Senipixel Studio</span>
</div>
<p className="text-sm text-neutral-500 max-w-xs font-geist-mono">Professional digital and print solutions for Malaysian businesses.</p>
</div>
<div className="flex gap-12 text-sm">
<div className="space-y-3">
<h4 className="font-medium text-black font-geist-mono">Services</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-black transition-colors font-geist-mono" href="#">Website Design</a></li>
<li><a className="hover:text-black transition-colors font-geist-mono" href="#">Branding</a></li>
<li><a className="hover:text-black transition-colors font-geist-mono" href="#">Print Design</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="font-medium text-black font-geist-mono">Company</h4>
<ul className="space-y-2 text-neutral-500">
<li><a className="hover:text-black transition-colors font-geist-mono" href="#about">About</a></li>
<li><a className="hover:text-black transition-colors font-geist-mono" href="#contact">Contact</a></li>
<li><a className="hover:text-black transition-colors font-geist-mono" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-100 text-xs text-neutral-400">
<p className="font-geist-mono">© 2025 Senipixel Studio. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-neutral-600 transition-colors font-geist-mono" href="#">Instagram</a>
<a className="hover:text-neutral-600 transition-colors font-geist-mono" href="#">LinkedIn</a>
<a className="hover:text-neutral-600 transition-colors font-geist-mono" href="#">Facebook</a>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
