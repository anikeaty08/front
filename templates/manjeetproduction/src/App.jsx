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
brand: {
gold: '#f59e0b', // Matches the logo "PRODUCTIONS" color
},
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'float': 'float 6s ease-in-out infinite',
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



        // Initialize Lucide Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black opacity-70"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl filter opacity-10"></div>
<div className="absolute top-1/4 right-0 w-[300px] h-[300px] bg-blue-900/10 rounded-full blur-3xl filter opacity-20"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl supports-[backdrop-filter]:bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex flex-col items-center justify-center group" href="#">
<div className="flex items-center gap-1 mb-1">
<div className="relative">
<i className="w-8 h-8 text-white fill-current" data-lucide="video"></i>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-3 h-3 text-black fill-brand-gold stroke-none ml-0.5" data-lucide="play"></i>
</div>
</div>
<i className="w-6 h-6 text-white/80" data-lucide="film"></i>
</div>
<div className="leading-none text-center">
<span className="block text-xl font-semibold text-white tracking-tight leading-none">Manjeet</span>
<span className="block text-[0.5rem] font-bold text-brand-gold tracking-[0.2em] uppercase leading-none mt-1 group-hover:tracking-[0.3em] transition-all duration-300">Productions</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-200 uppercase tracking-wide" href="#work">Work</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-200 uppercase tracking-wide" href="#services">Services</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors duration-200 uppercase tracking-wide" href="#about">Studio</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-semibold bg-white text-black px-5 py-2.5 rounded-full hover:bg-brand-gold hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#contact">
                Book Now
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-white hover:text-brand-gold transition-colors">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<main className="relative z-10 pt-36 pb-20 md:pt-52 md:pb-32 px-6 perspective-1000">
<div className="max-w-7xl mx-auto text-center relative">

<div className="hidden lg:block absolute -left-20 top-10 w-24 h-24 glass-panel rounded-2xl animate-float" style={{animationDelay: '0s'}}>
<div className="w-full h-full flex items-center justify-center">
<i className="w-8 h-8 text-brand-gold/80" data-lucide="music"></i>
</div>
</div>
<div className="hidden lg:block absolute -right-12 top-20 w-20 h-20 glass-panel rounded-full animate-float" style={{animationDelay: '2s'}}>
<div className="w-full h-full flex items-center justify-center">
<i className="w-8 h-8 text-blue-400/80" data-lucide="aperture"></i>
</div>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/10 text-xs text-brand-gold mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(245,158,11,0.2)]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
</span>
                Now accepting bookings for 2024
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[0.95] drop-shadow-2xl">
                Defining the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">Visual Standard.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                From music videos to brand distribution, <span className="text-white font-medium">Manjeet Production</span> creates immersive visual experiences that amplify your voice.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1">
<i className="w-5 h-5 fill-black text-white" data-lucide="play-circle"></i>
                    Watch Showreel
                </button>
<button className="w-full md:w-auto px-8 py-3.5 border border-white/10 bg-white/5 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm hover:border-brand-gold/50 hover:text-brand-gold">
                    View Services
                </button>
</div>
</div>

<div className="mt-20 md:mt-32 max-w-6xl mx-auto relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-gold via-purple-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-1000"></div>
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-zinc-900 flex items-center justify-center tilt-card shadow-2xl">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80')] bg-cover bg-center opacity-60 grayscale group-hover:grayscale-0 transition duration-700 transform group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.1)]">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs text-zinc-500 mb-8 tracking-widest uppercase">Powering Visionaries &amp; Artists</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 hover:opacity-100 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter text-white">T-SERIES</span>
<span className="text-xl font-bold tracking-tighter text-white">SPEED RECORDS</span>
<span className="text-xl font-bold tracking-tighter text-white">ZEE MUSIC</span>
<span className="text-xl font-bold tracking-tighter text-white">SONY MUSIC</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10" id="services">
<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative">
<div className="mb-16 md:flex justify-between items-end">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">Our Services</h2>
<p className="text-zinc-400 max-w-md text-sm leading-relaxed">End-to-end production solutions tailored for artists and brands.</p>
</div>
<div className="flex gap-2">
<span className="h-px w-20 bg-gradient-to-r from-transparent to-brand-gold self-center"></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl glass-panel hover:bg-zinc-900/80 hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-brand-gold w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center text-white mb-6 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-shadow duration-300">
<i className="w-6 h-6 text-brand-gold" data-lucide="music-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Music Video Shoot</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">Complete production for music videos. Concept, location scouting, 4K shooting, and direction that captures the rhythm.</p>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:bg-zinc-900/80 hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-brand-gold w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center text-white mb-6 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-shadow duration-300">
<i className="w-6 h-6 text-blue-400" data-lucide="scissors"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Video Editing &amp; VFX</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">Professional cuts, color grading, visual effects, and sound design to turn raw footage into a polished masterpiece.</p>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:bg-zinc-900/80 hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-brand-gold w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center text-white mb-6 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-shadow duration-300">
<i className="w-6 h-6 text-purple-400" data-lucide="camera"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Commercial &amp; Events</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">High-end coverage for commercial ads, interviews, events, and any custom video requirements.</p>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:bg-zinc-900/80 hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-brand-gold w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center text-white mb-6 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-shadow duration-300">
<i className="w-6 h-6 text-green-400" data-lucide="image"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Thumbnail &amp; Poster Design</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors">Click-worthy thumbnails and cinematic posters that grab attention before the play button is even hit.</p>
</div>

<div className="group p-8 rounded-2xl glass-panel hover:bg-zinc-900/80 hover:border-brand-gold/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden md:col-span-2 lg:col-span-2">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="text-brand-gold w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-zinc-800 to-black border border-white/10 flex items-center justify-center text-white shrink-0 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-shadow duration-300">
<i className="w-6 h-6 text-pink-400" data-lucide="globe"></i>
</div>
<div>
<h3 className="text-xl font-medium text-white mb-2">Song Distribution &amp; Artist Services</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-300 transition-colors max-w-lg">We don't just create; we deliver. Get your music on all major platforms (Spotify, Apple Music, YouTube Music). Comprehensive artist branding and launch strategies included.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-950" id="work">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-12">Selected Works</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="group cursor-pointer perspective-1000">
<div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-6 border border-white/5 tilt-card shadow-lg">
<img alt="Music Video" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700 ease-out" src="https://images.unsplash.com/photo-1598899134739-9609c961130c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs text-white border border-white/10">Music Video</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold text-white group-hover:text-brand-gold transition-colors">Midnight Rhythm</h3>
<p className="text-sm text-zinc-500 mt-1">Shoot • Edit • VFX</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-black transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-16 perspective-1000">
<div className="relative overflow-hidden rounded-xl aspect-[16/9] mb-6 border border-white/5 tilt-card shadow-lg">
<img alt="Poster Design" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-700 ease-out" src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs text-white border border-white/10">Poster Design</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-semibold text-white group-hover:text-brand-gold transition-colors">Neon Dreams</h3>
<p className="text-sm text-zinc-500 mt-1">Graphic Design • Branding</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-black transition-all">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5" href="#">
                    View All Projects
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-gold/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="p-6 rounded-2xl hover:bg-white/5 transition-colors">
<h4 className="text-4xl font-semibold text-white tracking-tight mb-2">100+</h4>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Projects Delivered</p>
</div>
<div className="p-6 rounded-2xl hover:bg-white/5 transition-colors">
<h4 className="text-4xl font-semibold text-white tracking-tight mb-2">50+</h4>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Artists Managed</p>
</div>
<div className="p-6 rounded-2xl hover:bg-white/5 transition-colors">
<h4 className="text-4xl font-semibold text-white tracking-tight mb-2">4K</h4>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Production Quality</p>
</div>
<div className="p-6 rounded-2xl hover:bg-white/5 transition-colors">
<h4 className="text-4xl font-semibold text-white tracking-tight mb-2">24/7</h4>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-medium">Support</p>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/50 pointer-events-none"></div>
<div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-6">
<i className="w-3 h-3 text-brand-gold" data-lucide="mail"></i>
                    Get in touch
                </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to create?</h2>
<p className="text-zinc-400 mb-10 leading-relaxed">Let's turn your concept into a visual reality. Reach out for quotes, collaborations, or general inquiries.</p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-colors">
<div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Call Us / WhatsApp</p>
<a className="text-lg text-white font-medium hover:text-brand-gold transition-colors" href="tel:9306363476">9306363476</a>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-brand-gold/30 transition-colors">
<div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<p className="text-xs text-zinc-500 uppercase tracking-wide mb-1">Email Us</p>
<a className="text-lg text-white font-medium hover:text-brand-gold transition-colors break-all" href="mailto:officialmanjeetproductions@gmail.com">officialmanjeetproductions@gmail.com</a>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl shadow-2xl backdrop-blur-sm">
<form className="space-y-5">
<div className="group">
<label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wide">Name</label>
<input className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" required="" type="text"/>
</div>
<div className="group">
<label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wide">Email</label>
<input className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all" required="" type="email"/>
</div>
<div className="group">
<label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wide">Service Interest</label>
<select className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all appearance-none">
<option>Music Video Shoot</option>
<option>Video Editing &amp; VFX</option>
<option>Thumbnail/Poster Design</option>
<option>Song Distribution</option>
<option>Other</option>
</select>
</div>
<div className="group">
<label className="block text-xs text-zinc-500 mb-2 uppercase tracking-wide">Message</label>
<textarea className="w-full bg-black/50 border border-zinc-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none" rows="3"></textarea>
</div>
<button className="w-full bg-white text-black font-semibold text-sm py-4 rounded-lg hover:bg-brand-gold hover:text-black transition-all shadow-lg hover:shadow-brand-gold/20 flex items-center justify-center gap-2 mt-4" type="button">
                        Send Message
                        <i className="w-4 h-4" data-lucide="send"></i>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
<div className="mb-8 md:mb-0">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-brand-gold" data-lucide="video"></i>
<h5 className="text-lg font-bold tracking-tight text-white">MANJEET PRODUCTION</h5>
</div>
<p className="text-xs text-zinc-500">Visualizing the future of entertainment.</p>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-brand-gold transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10" href="https://www.instagram.com/manjeet_productions/" target="_blank">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-zinc-500 hover:text-brand-gold transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-zinc-500 hover:text-brand-gold transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10" href="#">
<i className="w-5 h-5" data-lucide="youtube"></i>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 border-t border-white/5 pt-8">
<p>© 2024 Manjeet Production. All rights reserved.</p>
<div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">
<div className="flex gap-6">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>

<span className="text-zinc-700 px-3 py-1 bg-zinc-900 rounded-full border border-zinc-800">Designed by <span className="text-zinc-400 font-semibold">GAURAV ALIRYA</span></span>
</div>
</div>
</div>
</footer>


    </>
  );
}
