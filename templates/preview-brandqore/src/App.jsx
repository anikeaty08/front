import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#0A0325',
accent: '#6E2BF9',
accentDark: '#431A99',
secondary: '#A987FF',
gray: '#D6D6E2',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
backgroundImage: {
'brand-gradient': 'linear-gradient(135deg, #0A0325 0%, #431A99 50%, #6E2BF9 100%)',
'subtle-glow': 'radial-gradient(circle at center, rgba(110, 43, 249, 0.15) 0%, rgba(10, 3, 37, 0) 70%)',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-primary/70 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-display text-xl tracking-tighter font-semibold hover:text-secondary transition-colors duration-300" href="#">
                BRAND QORE
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#portfolio">Work</a>
<a className="hover:text-white transition-colors" href="#testimonials">Reviews</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-semibold tracking-wide text-white transition-all duration-300 bg-white/10 border border-white/10 rounded-full hover:bg-accent hover:border-accent hover:shadow-[0_0_20px_rgba(110,43,249,0.4)]" href="#contact">
                Get Started
            </a>

<button className="md:hidden text-white p-2">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-secondary bg-secondary/10 border border-secondary/20 rounded-full">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
                Accepting new projects
            </div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/60">
                Creative Digital <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-accentDark">Solutions</span> For Your Brand
            </h1>
<p className="text-gray text-base md:text-lg max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                We transform ideas into digital reality. From pixel-perfect designs to high-performance code, we build the core of your digital identity.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative px-8 py-4 bg-white text-primary text-sm font-semibold rounded-full overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]" href="#contact">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
<span className="relative flex items-center gap-2">
                        Get Free Quote
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</span>
</a>
<a className="px-8 py-4 text-sm font-medium text-white border border-white/10 rounded-full hover:bg-white/5 transition-colors" href="#portfolio">
                    View Portfolio
                </a>
</div>
</div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
</section>

<section className="py-24 md:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">Our Expertise</h2>
<p className="text-gray text-sm max-w-md font-light">Comprehensive digital services designed to scale your business and enhance your brand presence.</p>
</div>
<a className="text-sm font-medium text-secondary hover:text-white transition-colors flex items-center gap-2 group" href="#contact">
                    Start a project 
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/50 transition-all duration-500 hover:bg-white/[0.04]">
<div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify" data-height="24" data-icon="lucide:pen-tool" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-display text-xl font-medium mb-3 tracking-tight">Graphic Design</h3>
<p className="text-gray/80 text-sm leading-relaxed font-light">
                        Visual storytelling that captures attention. Logos, branding kits, and marketing materials crafted with precision.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/50 transition-all duration-500 hover:bg-white/[0.04]">
<div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify" data-height="24" data-icon="lucide:clapperboard" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-display text-xl font-medium mb-3 tracking-tight">Video Editing</h3>
<p className="text-gray/80 text-sm leading-relaxed font-light">
                        Dynamic cuts, color grading, and motion graphics. We turn raw footage into compelling narratives for social and web.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-accent/50 transition-all duration-500 hover:bg-white/[0.04]">
<div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
<span className="iconify" data-height="24" data-icon="lucide:code-2" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-display text-xl font-medium mb-3 tracking-tight">Web Development</h3>
<p className="text-gray/80 text-sm leading-relaxed font-light">
                        Fast, responsive, and SEO-optimized websites built on modern frameworks. From landing pages to complex web apps.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-primary to-[#050114]" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-12 text-center">Selected Works</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] md:col-span-2">
<img alt="Web Development" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=2426&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2 block">Web Development</span>
<h3 className="text-2xl font-display font-medium tracking-tight">Fintech Dashboard</h3>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
<img alt="Brand Identity" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2 block">Branding</span>
<h3 className="text-xl font-display font-medium tracking-tight">Nebula System</h3>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02]">
<img alt="Video Production" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2 block">Video Editing</span>
<h3 className="text-xl font-display font-medium tracking-tight">Sport Reel 2024</h3>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] md:col-span-2">
<img alt="App Design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<span className="text-accent text-xs font-semibold uppercase tracking-wider mb-2 block">UI/UX Design</span>
<h3 className="text-2xl font-display font-medium tracking-tight">Mobile Commerce App</h3>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="testimonials">

<div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-16 text-center">Client Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
<div className="flex gap-1 text-secondary mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-lg font-light leading-relaxed mb-6 text-gray-200">"Brand Qore completely revamped our online presence. Their design team captured our vision perfectly, and the development was seamless."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">JD</div>
<div>
<p className="text-sm font-medium text-white">James Dalton</p>
<p className="text-xs text-gray/60">CEO, TechFlow</p>
</div>
</div>
</div>
<div className="p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
<div className="flex gap-1 text-secondary mb-6">
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-lg font-light leading-relaxed mb-6 text-gray-200">"The video editing service is top-notch. Fast turnaround and creative cuts that significantly increased our social engagement."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-semibold">SL</div>
<div>
<p className="text-sm font-medium text-white">Sarah Lee</p>
<p className="text-xs text-gray/60">Marketing Director, Vibe</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-4">Let's Work Together</h2>
<p className="text-gray text-sm font-light">Tell us about your project and we'll get back to you within 24 hours.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-gray uppercase tracking-wide" htmlFor="name">Name</label>
<input className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-white/20" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray uppercase tracking-wide" htmlFor="email">Email</label>
<input className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-white/20" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray uppercase tracking-wide">Service Interested In</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-sm text-gray hover:bg-white/[0.05] peer-checked:bg-accent/20 peer-checked:border-accent peer-checked:text-white transition-all">
                                Design
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-sm text-gray hover:bg-white/[0.05] peer-checked:bg-accent/20 peer-checked:border-accent peer-checked:text-white transition-all">
                                Development
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="service" type="radio"/>
<div className="text-center px-4 py-3 rounded-lg border border-white/10 bg-white/[0.02] text-sm text-gray hover:bg-white/[0.05] peer-checked:bg-accent/20 peer-checked:border-accent peer-checked:text-white transition-all">
                                Video
                            </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-gray uppercase tracking-wide" htmlFor="message">Project Details</label>
<textarea className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-white/20" id="message" placeholder="Tell us more about your goals..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-brand-gradient text-white font-medium rounded-lg hover:shadow-[0_0_20px_rgba(110,43,249,0.4)] hover:scale-[1.01] transition-all duration-300 text-sm" type="button">
                    Send Message
                </button>
</form>
</div>
</section>

<footer className="border-t border-white/10 bg-primary pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
<div className="text-center md:text-left">
<a className="font-display text-xl tracking-tighter font-semibold block mb-4" href="#">BRAND QORE</a>
<p className="text-gray/50 text-sm font-light max-w-xs">
                        Designing the future, one pixel at a time.
                    </p>
</div>
<div className="flex gap-6">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray hover:bg-white/10 hover:text-white transition-all hover:-translate-y-1" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray hover:bg-white/10 hover:text-white transition-all hover:-translate-y-1" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray hover:bg-white/10 hover:text-white transition-all hover:-translate-y-1" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-xs text-gray/40 font-light">
<p>© 2024 Brand Qore Agency. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
