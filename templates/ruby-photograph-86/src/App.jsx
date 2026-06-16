import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
colors: {
base: '#0a0a0a',
surface: '#111111',
ink: '#e8e0d0',
accent: '#c98b5a',
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Syne"', 'sans-serif'],
},
animation: {
'shimmer': 'shimmer 2s infinite linear',
'fade-in-up': 'fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'fade-in': 'fadeIn 2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
shimmer: {
'0%': { backgroundPosition: '-1000px 0' },
'100%': { backgroundPosition: '1000px 0' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 w-full z-40 p-6 md:px-12 flex justify-between items-center mix-blend-difference">
<a className="font-serif text-xl tracking-tighter uppercase" href="#">Ruby</a>
<div className="hidden md:flex gap-8 text-sm tracking-wide">
<a className="hover:text-accent transition-colors duration-500" href="#portfolio">Selected Works</a>
<a className="hover:text-accent transition-colors duration-500" href="#about">About</a>
<a className="hover:text-accent transition-colors duration-500" href="#services">Disciplines</a>
<a className="hover:text-accent transition-colors duration-500" href="#contact">Inquire</a>
</div>
<a className="md:hidden" href="#contact">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</a>
</nav>

<section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-surface animate-shimmer placeholder-img">

<div className="absolute inset-0 bg-gradient-to-t from-base via-base/20 to-base/60"></div>
<div className="absolute inset-0 bg-gradient-to-b from-base/40 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 flex flex-col items-center px-6 mt-12 text-reveal-mask">
<h1 className="font-serif text-7xl md:text-8xl lg:text-9xl tracking-tighter mb-6 opacity-0 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                RUBY
            </h1>
<p className="font-sans text-xs md:text-sm tracking-widest uppercase text-ink/70 opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                Los Angeles <span className="mx-2 text-accent/50">·</span> Documentary <span className="mx-2 text-accent/50">·</span> Life <span className="mx-2 text-accent/50">·</span> Ceremony
            </p>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{animationDelay: '1.5s'}}>
<a className="text-ink/40 hover:text-accent transition-colors duration-500 flex flex-col items-center gap-2" href="#portfolio">
<span className="text-xs tracking-widest uppercase">Scroll</span>
<iconify-icon className="text-lg" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="pt-32 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto" id="portfolio">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight">Selected Works</h2>
<div className="flex flex-wrap gap-6 text-xs tracking-widest uppercase text-ink/50">
<button className="text-ink border-b border-ink/30 pb-1 hover:text-ink transition-colors duration-300">All</button>
<button className="hover:text-ink transition-colors duration-300">Street &amp; Doc</button>
<button className="hover:text-ink transition-colors duration-300">Events</button>
<button className="hover:text-ink transition-colors duration-300">Weddings</button>
<button className="hover:text-ink transition-colors duration-300">Commercial</button>
</div>
</div>

<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="group relative break-inside-avoid bg-surface aspect-[3/4] overflow-hidden cursor-crosshair animate-shimmer placeholder-img">
<div className="absolute inset-0 bg-base/0 group-hover:bg-base/60 transition-colors duration-700 ease-in-out z-10"></div>
<div className="absolute bottom-0 left-0 p-8 w-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out translate-y-4 group-hover:translate-y-0 z-20">
<p className="font-sans text-xs tracking-widest uppercase text-accent mb-2">DTLA, 2023</p>
<p className="font-serif text-2xl tracking-tight">After Hours</p>
</div>
</div>

<div className="group relative break-inside-avoid bg-surface aspect-[4/3] overflow-hidden cursor-crosshair animate-shimmer placeholder-img">
<div className="absolute inset-0 bg-base/0 group-hover:bg-base/60 transition-colors duration-700 ease-in-out z-10"></div>
<div className="absolute bottom-0 left-0 p-8 w-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out translate-y-4 group-hover:translate-y-0 z-20">
<p className="font-sans text-xs tracking-widest uppercase text-accent mb-2">Malibu, 2024</p>
<p className="font-serif text-2xl tracking-tight">Ceremony by the cliff</p>
</div>
</div>

<div className="group relative break-inside-avoid bg-surface aspect-square overflow-hidden cursor-crosshair animate-shimmer placeholder-img">
<div className="absolute inset-0 bg-base/0 group-hover:bg-base/60 transition-colors duration-700 ease-in-out z-10"></div>
<div className="absolute bottom-0 left-0 p-8 w-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out translate-y-4 group-hover:translate-y-0 z-20">
<p className="font-sans text-xs tracking-widest uppercase text-accent mb-2">Echo Park, 2023</p>
<p className="font-serif text-2xl tracking-tight">Sunday Market</p>
</div>
</div>

<div className="group relative break-inside-avoid bg-surface aspect-[2/3] overflow-hidden cursor-crosshair animate-shimmer placeholder-img">
<div className="absolute inset-0 bg-base/0 group-hover:bg-base/60 transition-colors duration-700 ease-in-out z-10"></div>
<div className="absolute bottom-0 left-0 p-8 w-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out translate-y-4 group-hover:translate-y-0 z-20">
<p className="font-sans text-xs tracking-widest uppercase text-accent mb-2">Studio, 2024</p>
<p className="font-serif text-2xl tracking-tight">Brand Campaign</p>
</div>
</div>

<div className="group relative break-inside-avoid bg-surface aspect-[3/2] overflow-hidden cursor-crosshair animate-shimmer placeholder-img">
<div className="absolute inset-0 bg-base/0 group-hover:bg-base/60 transition-colors duration-700 ease-in-out z-10"></div>
<div className="absolute bottom-0 left-0 p-8 w-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out translate-y-4 group-hover:translate-y-0 z-20">
<p className="font-sans text-xs tracking-widest uppercase text-accent mb-2">Silverlake, 2023</p>
<p className="font-serif text-2xl tracking-tight">Movement</p>
</div>
</div>

<div className="group relative break-inside-avoid bg-surface aspect-square overflow-hidden cursor-crosshair animate-shimmer placeholder-img">
<div className="absolute inset-0 bg-base/0 group-hover:bg-base/60 transition-colors duration-700 ease-in-out z-10"></div>
<div className="absolute bottom-0 left-0 p-8 w-full opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out translate-y-4 group-hover:translate-y-0 z-20">
<p className="font-sans text-xs tracking-widest uppercase text-accent mb-2">Hollywood, 2024</p>
<p className="font-serif text-2xl tracking-tight">Premiere Night</p>
</div>
</div>
</div>
<div className="mt-20 text-center">
<a className="inline-block border-b border-ink/20 pb-1 text-sm tracking-wide hover:border-accent hover:text-accent transition-colors duration-500" href="#">View Full Archive</a>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-surface/50 border-y border-ink/5" id="about">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
<div className="lg:col-span-5">
<div className="aspect-[4/5] bg-surface w-full overflow-hidden animate-shimmer placeholder-img relative">

<div className="absolute inset-0 bg-gradient-to-t from-base/40 to-transparent"></div>
</div>
</div>
<div className="lg:col-span-7 flex flex-col justify-center">
<p className="font-sans text-xs tracking-widest uppercase text-accent mb-6">The Photographer</p>
<h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-10">
                    "I photograph what most people walk past. The quiet intensity between the noise."
                </h2>
<div className="space-y-6 text-ink/70 text-sm md:text-base leading-relaxed max-w-2xl font-light">
<p>
                        Based in Los Angeles, my work spans the spectrum of human connection — from the unscripted theater of the streets to carefully orchestrated editorial campaigns. I approach every environment with a documentary ethos: observing deeply, manipulating little, and letting the light dictate the mood.
                    </p>
<p>
                        My aesthetic is rooted in cinematic contrast. Deep shadows, rich textures, and deliberate restraint. Whether documenting an intimate ceremony or executing a commercial vision, the goal remains the same: to create imagery that feels timeless, grounded, and undeniably real.
                    </p>
</div>
<div className="mt-12 flex flex-col sm:flex-row gap-8">
<div>
<p className="text-xs tracking-widest uppercase text-ink/40 mb-2">Approach</p>
<p className="text-sm">Digital Medium Format &amp; 35mm Film</p>
</div>
<div>
<p className="text-xs tracking-widest uppercase text-ink/40 mb-2">Base</p>
<p className="text-sm">Los Angeles / Available Worldwide</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto" id="services">
<div className="mb-16">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">Disciplines</h2>
<p className="text-sm text-ink/50 max-w-md font-light">Focused on narrative depth across four distinct areas of practice.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-surface border border-ink/5 p-8 flex flex-col h-full hover:border-ink/20 transition-colors duration-500">
<iconify-icon className="text-3xl text-accent mb-8" icon="solar:camera-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight mb-3">Street &amp; Doc</h3>
<p className="text-sm text-ink/60 mb-8 flex-grow font-light">Unobtrusive coverage of life as it unfolds. Personal projects and editorial commissions focusing on urban culture and subcultures.</p>
<a className="text-xs tracking-widest uppercase border-b border-transparent group-hover:border-accent text-ink/70 group-hover:text-accent transition-all duration-300 w-fit pb-1" href="#contact">Inquire</a>
</div>

<div className="group bg-surface border border-ink/5 p-8 flex flex-col h-full hover:border-ink/20 transition-colors duration-500">
<iconify-icon className="text-3xl text-accent mb-8" icon="solar:glass-water-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight mb-3">Events &amp; Lifestyle</h3>
<p className="text-sm text-ink/60 mb-8 flex-grow font-light">Elevated coverage for private gatherings, launch parties, and cultural events. Capturing atmosphere over simple documentation.</p>
<a className="text-xs tracking-widest uppercase border-b border-transparent group-hover:border-accent text-ink/70 group-hover:text-accent transition-all duration-300 w-fit pb-1" href="#contact">Starting at $1.5k</a>
</div>

<div className="group bg-surface border border-ink/5 p-8 flex flex-col h-full hover:border-ink/20 transition-colors duration-500 relative overflow-hidden">
<div className="absolute top-6 right-6 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
<span className="text-[10px] tracking-widest uppercase text-accent">Booking 25/26</span>
</div>
<iconify-icon className="text-3xl text-accent mb-8" icon="solar:rings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight mb-3">Weddings &amp; Couples</h3>
<p className="text-sm text-ink/60 mb-8 flex-grow font-light">An editorial, documentary-led approach to matrimony. For couples who value mood, candid emotion, and artful composition over tradition.</p>
<a className="text-xs tracking-widest uppercase border-b border-transparent group-hover:border-accent text-ink/70 group-hover:text-accent transition-all duration-300 w-fit pb-1" href="#contact">Request Guide</a>
</div>

<div className="group bg-surface border border-ink/5 p-8 flex flex-col h-full hover:border-ink/20 transition-colors duration-500">
<iconify-icon className="text-3xl text-accent mb-8" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight mb-3">Commercial &amp; Brand</h3>
<p className="text-sm text-ink/60 mb-8 flex-grow font-light">Translating brand identity into a distinct visual language. Lookbooks, campaigns, and moody, textural product narratives.</p>
<a className="text-xs tracking-widest uppercase border-b border-transparent group-hover:border-accent text-ink/70 group-hover:text-accent transition-all duration-300 w-fit pb-1" href="#contact">Custom Quoted</a>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-surface/30" id="contact">
<div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="flex flex-col justify-between">
<div>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">Let's capture something real.</h2>
<p className="text-sm text-ink/60 font-light max-w-md leading-relaxed mb-12">
                        Currently accepting commissions for late 2024 and 2025. Please provide as much detail as possible about your vision, timeline, and aesthetic goals.
                    </p>
</div>
<div className="space-y-6">
<div>
<p className="text-xs tracking-widest uppercase text-ink/40 mb-1">Email</p>
<a className="text-sm hover:text-accent transition-colors duration-300" href="mailto:studio@ruby626.com">studio@ruby626.com</a>
</div>
<div>
<p className="text-xs tracking-widest uppercase text-ink/40 mb-1">Instagram</p>
<a className="text-sm hover:text-accent transition-colors duration-300" href="#">@ruby626</a>
</div>
</div>
</div>

<form className="space-y-8 mt-8 lg:mt-0">
<div className="relative">
<input className="w-full bg-transparent border-b border-ink/20 py-4 text-sm focus:border-accent outline-none transition-colors duration-300 peer placeholder-transparent font-light" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 top-4 text-sm text-ink/40 transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-3 peer-valid:text-xs pointer-events-none uppercase tracking-widest" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="w-full bg-transparent border-b border-ink/20 py-4 text-sm focus:border-accent outline-none transition-colors duration-300 peer placeholder-transparent font-light" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 top-4 text-sm text-ink/40 transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-3 peer-valid:text-xs pointer-events-none uppercase tracking-widest" htmlFor="email">Email Address</label>
</div>
<div className="relative">

<select className="w-full bg-transparent border-b border-ink/20 py-4 text-sm focus:border-accent outline-none transition-colors duration-300 appearance-none font-light text-ink/80 cursor-pointer rounded-none" id="project">
<option className="bg-surface text-ink/50" disabled="" selected="" value="">Select Area of Interest</option>
<option className="bg-surface text-ink" value="wedding">Weddings &amp; Couples</option>
<option className="bg-surface text-ink" value="commercial">Commercial &amp; Brand</option>
<option className="bg-surface text-ink" value="events">Events &amp; Lifestyle</option>
<option className="bg-surface text-ink" value="editorial">Editorial / Documentary</option>
</select>
<div className="absolute right-0 top-4 pointer-events-none text-ink/40">
<iconify-icon className="text-lg" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative">
<textarea className="w-full bg-transparent border-b border-ink/20 py-4 text-sm focus:border-accent outline-none transition-colors duration-300 peer placeholder-transparent resize-none font-light" id="message" placeholder="Message" required="" rows="4"></textarea>
<label className="absolute left-0 top-4 text-sm text-ink/40 transition-all duration-300 peer-focus:-top-3 peer-focus:text-xs peer-focus:text-accent peer-valid:-top-3 peer-valid:text-xs pointer-events-none uppercase tracking-widest" htmlFor="message">Project Details</label>
</div>
<button className="w-full border border-ink/20 py-4 text-xs tracking-widest uppercase hover:bg-ink hover:text-base transition-colors duration-500 mt-4" type="submit">
                    Submit Inquiry
                </button>
</form>
</div>
</section>

<footer className="border-t border-ink/10 py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ink/40 tracking-widest uppercase">
<p>© 2024 Ruby. All rights reserved.</p>
<p>Los Angeles, CA</p>
<a className="hover:text-accent transition-colors duration-300" href="#">Instagram</a>
</footer>

    </>
  );
}
