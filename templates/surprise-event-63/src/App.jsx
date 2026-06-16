import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-neutral-950/60 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tighter font-medium text-neutral-50 uppercase flex items-center gap-2" href="#">
<iconify-icon height="20" icon="solar:stars-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                MC
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-light">
<a className="hover:text-neutral-50 transition-colors" href="#about">About</a>
<a className="hover:text-neutral-50 transition-colors" href="#services">Experiences</a>
<a className="hover:text-neutral-50 transition-colors" href="#gallery">Moments</a>
<a className="hover:text-neutral-50 transition-colors" href="#testimonials">Stories</a>
</div>
<a className="hidden md:flex text-xs tracking-wide uppercase font-medium bg-white text-neutral-950 px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#contact">
                Plan a Surprise
            </a>
<button className="md:hidden text-neutral-50">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Romantic Candlelight" className="w-full h-full object-cover object-center opacity-40" src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/80 to-neutral-950"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
<span className="text-amber-400/80 text-xs tracking-widest uppercase font-light mb-6 flex items-center gap-2">
<span className="w-8 h-[1px] bg-amber-400/50"></span>
                Based in Kolkata
                <span className="w-8 h-[1px] bg-amber-400/50"></span>
</span>
<h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight font-medium text-neutral-50 mb-6 leading-tight">
                Turn Your Special Moments <br className="hidden md:block"/> Into Unforgettable Memories
            </h1>
<p className="text-base md:text-lg text-neutral-400 font-light mb-10 max-w-2xl">
                We design and orchestrate magical surprises for your loved ones. From intimate candlelight dinners to grand anniversary setups, we handle the details so you can focus on the feeling.
            </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 bg-white text-neutral-950 text-sm font-medium px-8 py-3.5 rounded-full hover:bg-neutral-200 transition-all duration-300" href="#contact">
                    Book Your Experience
                    <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-neutral-900/50 border border-white/10 backdrop-blur-sm text-neutral-50 text-sm font-light px-8 py-3.5 rounded-full hover:bg-neutral-800 transition-all duration-300" href="#services">
                    Explore Services
                </a>
</div>
</div>
</header>

<section className="py-24 md:py-32 relative border-b border-white/5" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Couple laughing" className="relative rounded-2xl w-full aspect-[4/5] object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-neutral-50 mb-6">
                        We capture feelings, <br/>
<span className="text-neutral-500">not just moments.</span>
</h2>
<div className="space-y-6 text-sm md:text-base font-light text-neutral-400 leading-relaxed">
<p>
                            At Moments Catcher, we believe that love is best expressed through thoughtful actions. Based in the heart of Kolkata, we noticed how busy lives often get in the way of celebrating the people who matter most.
                        </p>
<p>
                            Whether it's a son planning a secret anniversary dinner for his parents, or a partner wanting to make a first date feel like a movie scene, we step in to make it happen flawlessly. We are not just event planners; we are storytellers creating the backdrop for your most genuine emotions.
                        </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
<div>
<p className="text-3xl tracking-tight font-medium text-neutral-50 mb-1">500+</p>
<p className="text-xs font-light uppercase tracking-wider text-neutral-500">Surprises Planned</p>
</div>
<div>
<p className="text-3xl tracking-tight font-medium text-neutral-50 mb-1">100%</p>
<p className="text-xs font-light uppercase tracking-wider text-neutral-500">Tears of Joy</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 md:mb-24">
<h2 className="text-3xl md:text-5xl tracking-tight font-medium text-neutral-50 mb-4">Curated Experiences</h2>
<p className="text-sm md:text-base text-neutral-400 font-light max-w-xl mx-auto">Select from our signature setups or let us custom-design a surprise tailored entirely to your story.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-neutral-900/30 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900/60 hover:border-amber-500/20 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
<iconify-icon height="64" icon="solar:gift-linear" style={{strokeWidth: '1'}} width="64"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-amber-100 group-hover:text-amber-400 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon height="24" icon="solar:gift-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-neutral-50 mb-3">Birthday Surprise</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">Midnight cake deliveries, magical room makeovers, or private venue bookings to make their day truly theirs.</p>
</div>
</div>

<div className="group relative bg-neutral-900/30 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900/60 hover:border-amber-500/20 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
<iconify-icon height="64" icon="solar:hearts-linear" style={{strokeWidth: '1'}} width="64"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-amber-100 group-hover:text-amber-400 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon height="24" icon="solar:hearts-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-neutral-50 mb-3">Anniversary Setup</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">Rekindle the romance with elegant candlelight dinners, pathway of roses, and nostalgic photo displays.</p>
</div>
</div>

<div className="group relative bg-neutral-900/30 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900/60 hover:border-amber-500/20 transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
<iconify-icon height="64" icon="solar:wineglass-triangle-linear" style={{strokeWidth: '1'}} width="64"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-amber-100 group-hover:text-amber-400 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon height="24" icon="solar:wineglass-triangle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-neutral-50 mb-3">First Date Special</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">Make a lasting impression. We arrange unique settings that spark conversation and genuine connection.</p>
</div>
</div>

<div className="group relative bg-neutral-900/30 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900/60 hover:border-amber-500/20 transition-all duration-500 overflow-hidden md:col-span-2 lg:col-span-1">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity">
<iconify-icon height="64" icon="solar:home-smile-linear" style={{strokeWidth: '1'}} width="64"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-amber-100 group-hover:text-amber-400 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon height="24" icon="solar:home-smile-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-neutral-50 mb-3">Room Decoration</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">Transform an ordinary space into a sanctuary of love with balloons, warm lights, and custom messages.</p>
</div>
</div>

<div className="group relative bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-500 overflow-hidden lg:col-span-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div className="relative z-10 max-w-md">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center mb-6 text-amber-100 group-hover:text-amber-400 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-neutral-50 mb-3">Custom Masterpiece</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Have a wild idea? A proposal under the stars or a flash mob in Kolkata? Let's write a story that has never been told before.</p>
</div>
<a className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-white text-neutral-950 hover:scale-110 transition-transform" href="#contact">
<iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-y border-white/5 bg-neutral-950">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-900/50 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20">

<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-medium text-neutral-50 mb-12">The Journey of a Surprise</h2>
<div className="space-y-12">
<div className="flex gap-6 relative">
<div className="absolute top-10 left-[23px] w-[1px] h-full bg-neutral-800 -z-10"></div>
<div className="shrink-0 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-200">
<iconify-icon height="20" icon="solar:pen-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-neutral-200 mb-2">1. Share Your Vision</h4>
<p className="text-sm font-light text-neutral-400">Tell us about the person, the occasion, and the emotion you want to evoke. We listen closely to every detail.</p>
</div>
</div>
<div className="flex gap-6 relative">
<div className="absolute top-10 left-[23px] w-[1px] h-full bg-neutral-800 -z-10"></div>
<div className="shrink-0 w-12 h-12 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-amber-200">
<iconify-icon height="20" icon="solar:calendar-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-neutral-200 mb-2">2. We Orchestrate</h4>
<p className="text-sm font-light text-neutral-400">Our team designs the setup, coordinates vendors, and ensures perfect timing across Kolkata.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 w-12 h-12 rounded-full bg-neutral-900 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
<iconify-icon height="20" icon="solar:heart-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-neutral-200 mb-2">3. Experience the Magic</h4>
<p className="text-sm font-light text-neutral-400">Arrive at the location and watch their face light up. You take the credit, we stay behind the scenes.</p>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-medium text-neutral-50 mb-12">Why Moments Catcher?</h2>
<div className="grid sm:grid-cols-2 gap-6">
<div className="p-6 bg-neutral-900/20 border border-white/5 rounded-2xl">
<iconify-icon className="text-neutral-300 mb-4" height="24" icon="solar:user-speak-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h4 className="text-sm font-medium text-neutral-200 mb-2">Emotional Approach</h4>
<p className="text-xs font-light text-neutral-500">We design based on feelings, not just aesthetics.</p>
</div>
<div className="p-6 bg-neutral-900/20 border border-white/5 rounded-2xl">
<iconify-icon className="text-neutral-300 mb-4" height="24" icon="solar:crown-star-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h4 className="text-sm font-medium text-neutral-200 mb-2">Premium Quality</h4>
<p className="text-xs font-light text-neutral-500">Affordable luxury with high-end decor and service.</p>
</div>
<div className="p-6 bg-neutral-900/20 border border-white/5 rounded-2xl">
<iconify-icon className="text-neutral-300 mb-4" height="24" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h4 className="text-sm font-medium text-neutral-200 mb-2">Local Experts</h4>
<p className="text-xs font-light text-neutral-500">Trusted network across all locations in Kolkata.</p>
</div>
<div className="p-6 bg-neutral-900/20 border border-white/5 rounded-2xl">
<iconify-icon className="text-neutral-300 mb-4" height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<h4 className="text-sm font-medium text-neutral-200 mb-2">Stress-Free</h4>
<p className="text-xs font-light text-neutral-500">You just show up. We handle 100% of the execution.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-5xl tracking-tight font-medium text-neutral-50 mb-4">Captured Feelings</h2>
<p className="text-sm text-neutral-400 font-light">Glimpses of genuine reactions and beautiful setups.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 md:col-span-2">
<img alt="Surprise Dinner" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-xs font-medium text-amber-200 uppercase tracking-widest mb-1">Anniversary</p>
<p className="text-lg text-white font-medium">Private Rooftop Dinner</p>
</div>
</div>
<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900">
<img alt="Room Decoration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-xs font-medium text-amber-200 uppercase tracking-widest mb-1">Birthday</p>
<p className="text-lg text-white font-medium">Midnight Room Setup</p>
</div>
</div>
<div className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-900">
<img alt="Couple" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
</div>
<div className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-900 md:col-span-2">
<img alt="Gifts" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="text-xs font-medium text-amber-200 uppercase tracking-widest mb-1">Proposal</p>
<p className="text-lg text-white font-medium">The Big Question</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5" id="testimonials">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-neutral-50 mb-16">Words from the Heart</h2>
<div className="grid md:grid-cols-3 gap-6 text-left">
<div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5">
<div className="flex gap-1 text-amber-400 mb-6">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-light italic mb-6">"I wanted to do something special for my parents' 25th anniversary but had no time. Moments Catcher handled everything in Kolkata perfectly. Seeing my mother cry tears of joy was priceless."</p>
<p className="text-xs font-medium text-neutral-50 uppercase tracking-widest">Rahul M.</p>
</div>
<div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5 relative top-0 md:top-8">
<div className="flex gap-1 text-amber-400 mb-6">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-light italic mb-6">"The room decoration was beyond what I imagined. The attention to detail, the warm lights, and the photos hanging... my girlfriend was absolutely mesmerized. Thank you for making our day."</p>
<p className="text-xs font-medium text-neutral-50 uppercase tracking-widest">Aritra D.</p>
</div>
<div className="p-8 rounded-2xl bg-neutral-900/30 border border-white/5">
<div className="flex gap-1 text-amber-400 mb-6">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-300 font-light italic mb-6">"Highly professional and deeply empathetic team. They don't just set up balloons; they curate an entire vibe. Best surprise planning service in the city, hands down."</p>
<p className="text-xs font-medium text-neutral-50 uppercase tracking-widest">Sneha S.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-neutral-900/20 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-5xl tracking-tight font-medium text-neutral-50 mb-6">Let's plan something beautiful.</h2>
<p className="text-base text-neutral-400 font-light mb-12 max-w-md">Reach out to us to discuss your ideas. We are excited to help you create an unforgettable memory.</p>
<div className="space-y-8">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-amber-400 group-hover:border-amber-400/50 transition-colors">
<iconify-icon height="20" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-light text-neutral-500 uppercase tracking-widest mb-1">Call / WhatsApp</p>
<a className="text-lg font-medium text-neutral-200 hover:text-white transition-colors" href="tel:7679752971">7679 752 971</a>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-amber-400 group-hover:border-amber-400/50 transition-colors">
<iconify-icon height="20" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-light text-neutral-500 uppercase tracking-widest mb-1">Email Us</p>
<a className="text-lg font-medium text-neutral-200 hover:text-white transition-colors" href="mailto:roysatadip2@gmail.com">roysatadip2@gmail.com</a>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-amber-400 group-hover:border-amber-400/50 transition-colors">
<iconify-icon height="20" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-light text-neutral-500 uppercase tracking-widest mb-1">Location</p>
<p className="text-lg font-medium text-neutral-200">Kolkata, West Bengal</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-950 border border-white/5 rounded-3xl p-8 md:p-10 shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1" htmlFor="name">Your Name</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1" htmlFor="phone">Phone Number</label>
<input className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all" id="phone" placeholder="+91 XXXXX XXXXX" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1" htmlFor="occasion">Occasion</label>
<div className="relative">
<select className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-200 appearance-none focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all" id="occasion">
<option disabled="" selected="" value="">Select an event type</option>
<option value="birthday">Birthday Surprise</option>
<option value="anniversary">Anniversary Setup</option>
<option value="date">Romantic Date</option>
<option value="other">Custom / Other</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-neutral-400 ml-1" htmlFor="message">Tell us your idea</label>
<textarea className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all resize-none" id="message" placeholder="Briefly describe what you have in mind..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-neutral-950 font-medium text-sm py-3.5 rounded-xl hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="button">
                            Send Request
                            <iconify-icon height="18" icon="solar:plain-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="text-2xl tracking-tighter font-medium text-neutral-50 mb-4">MOMENTS CATCHER</div>
<p className="text-sm font-light text-neutral-400 italic mb-8">"We Capture Feelings, Not Just Moments"</p>
<div className="flex gap-4 mb-12">
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all" href="#">
<iconify-icon height="18" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all" href="#">
<iconify-icon height="18" icon="solar:video-frame-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs font-light text-neutral-600">
<p>© 2023 Moments Catcher. All rights reserved.</p>
<p className="mt-2 md:mt-0">Serving exclusively in Kolkata.</p>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-110 hover:bg-emerald-400 transition-all duration-300 group" href="https://wa.me/917679752971" target="_blank">
<iconify-icon height="28" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<span className="absolute right-full mr-4 bg-neutral-900 text-neutral-50 text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
            Chat with us
        </span>
</a>

    </>
  );
}
