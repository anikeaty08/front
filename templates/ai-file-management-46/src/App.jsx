import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#ad4b05', // Updated Color
secondary: '#2F2B28', // Soft Charcoal Grey
accent: '#B9ADA2', // Muted Warm Taupe
'dark-charcoal': '#1F1E1C',
'hover-charcoal': '#2A241F',
'bg-cream': '#FBF9F6',
'bg-ivory': '#F4F1EC',
'bg-warm-grey': '#ECE8E2',
'tool-clay': '#E7A09A',
'tool-sky': '#AFC6E9',
'tool-sage': '#A9C8B2',
'tool-lavender': '#C6BFE2',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
boxShadow: {
'premium': '0 10px 40px -10px rgba(173, 75, 5, 0.08)',
'card': '0 4px 6px -1px rgba(47, 43, 40, 0.02), 0 2px 4px -1px rgba(47, 43, 40, 0.02)',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 backdrop-blur-md bg-bg-cream/80 border-b border-accent/20">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<iconify-icon className="text-primary" icon="solar:heart-bold" width="24"></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-secondary">iLoveFiles</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-secondary/80">
<a className="hover:text-primary transition-colors" href="#">PDF Tools</a>
<a className="hover:text-primary transition-colors" href="#">Image Tools</a>
<a className="hover:text-primary transition-colors" href="#">Pricing</a>
<a className="hover:text-primary transition-colors" href="#">Business</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:block text-sm font-medium text-secondary hover:text-primary transition-colors">Log in</button>
<button className="bg-dark-charcoal text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-hover-charcoal transition-colors shadow-lg shadow-secondary/10">Sign up</button>
</div>
</div>
</nav>

<header className="pt-24 pb-16 px-6 text-center relative overflow-hidden">
<div className="absolute top-10 left-10 opacity-50 rotate-12 animate-pulse">
<iconify-icon className="text-accent/30" icon="solar:document-text-linear" width="48"></iconify-icon>
</div>
<div className="absolute bottom-10 right-10 opacity-50 -rotate-12">
<iconify-icon className="text-accent/30" icon="solar:gallery-wide-linear" width="64"></iconify-icon>
</div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-accent/30 text-xs font-medium text-secondary mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Introducing AI-Powered Enhancements
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-secondary">
                Complete harmony for your <br/>
<span className="font-serif italic text-primary font-medium">Documents &amp; Images</span>
</h1>
<p className="text-lg md:text-xl text-secondary/70 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Merge, compress, create, and convert with unprecedented ease. The intelligence of iLovePDF meets aesthetic perfection.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#8e3e04] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group">
                    Explore PDF Tools
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white text-secondary border border-accent/30 px-8 py-4 rounded-full text-base font-medium hover:bg-bg-ivory transition-colors shadow-sm">
                    Switch to Image Tools
                </button>
</div>
<div className="flex items-center justify-center gap-8 text-xs font-medium text-accent uppercase tracking-widest">
<span className="flex items-center gap-2"><iconify-icon className="text-primary" icon="solar:shield-check-linear" width="16"></iconify-icon> 100% Secure</span>
<span className="flex items-center gap-2"><iconify-icon className="text-primary" icon="solar:tag-price-linear" width="16"></iconify-icon> Free to use</span>
<span className="flex items-center gap-2"><iconify-icon className="text-primary" icon="solar:cloud-check-linear" width="16"></iconify-icon> Cloud Processing</span>
</div>
</div>
</header>

<section className="py-20 px-6">
<div className="max-w-7xl mx-auto">

<div className="flex justify-center mb-16">
<div className="bg-white p-1.5 rounded-full shadow-sm border border-accent/20 inline-flex">
<button className="px-6 py-2 rounded-full bg-secondary text-white text-sm font-medium shadow-md">All Tools</button>
<button className="px-6 py-2 rounded-full text-secondary/60 hover:text-secondary text-sm font-medium transition-colors">Image Tools</button>
<button className="px-6 py-2 rounded-full text-secondary/60 hover:text-secondary text-sm font-medium transition-colors">PDF Tools</button>
</div>
</div>
<div className="text-center mb-12">
<h2 className="font-serif text-3xl md:text-4xl text-secondary mb-4">Image Tools</h2>
<p className="text-secondary/60 max-w-lg mx-auto text-lg">Your curated suite for photo manipulation. Simple, fast, and beautiful.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-accent/30 cursor-pointer relative overflow-hidden">
<div className="w-12 h-12 rounded-xl bg-tool-sage/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#5A7A63]" icon="solar:minimize-square-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2 tracking-tight">Compress Image</h3>
<p className="text-sm text-secondary/60 leading-relaxed">Compress JPG, PNG, SVG or GIF with the best quality and compression.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-accent/30 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-tool-clay/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#A8645E]" icon="solar:maximize-square-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2 tracking-tight">Resize Image</h3>
<p className="text-sm text-secondary/60 leading-relaxed">Define your dimensions, by percentage or pixels, and resize your images.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-accent/30 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-tool-sky/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#6A81A3]" icon="solar:crop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2 tracking-tight">Crop Image</h3>
<p className="text-sm text-secondary/60 leading-relaxed">Crop JPG, PNG or GIFs with ease; Choose pixels to define your rectangle.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-accent/30 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-tool-lavender/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#7E74A8]" icon="solar:file-send-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2 tracking-tight">Convert to JPG</h3>
<p className="text-sm text-secondary/60 leading-relaxed">Turn PNG, GIF, TIF, PSD, SVG, WEBP, HEIC or RAW format images to JPG.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-accent/30 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-tool-clay/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#A8645E]" icon="solar:file-receive-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2 tracking-tight">Convert from JPG</h3>
<p className="text-sm text-secondary/60 leading-relaxed">Turn JPG images to PNG and GIF. Select multiple JPG images at once.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-accent/30 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-tool-sky/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#6A81A3]" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2 tracking-tight">Photo Editor</h3>
<p className="text-sm text-secondary/60 leading-relaxed">Spice up your photos with text, effects, frames or stickers. Simple editing tools.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-accent/30 cursor-pointer relative">
<span className="absolute top-4 right-4 bg-primary/10 text-primary text-[10px] font-semibold px-2 py-1 rounded-full uppercase tracking-wider">New</span>
<div className="w-12 h-12 rounded-xl bg-tool-sage/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#5A7A63]" icon="solar:copyright-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2 tracking-tight">Watermark Image</h3>
<p className="text-sm text-secondary/60 leading-relaxed">Stamp an image or text over your images in seconds. Choose typography.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-accent/30 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-tool-lavender/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#7E74A8]" icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2 tracking-tight">Rotate Image</h3>
<p className="text-sm text-secondary/60 leading-relaxed">Rotate your images just the way you want them. Landscape or Portrait.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-accent/30 cursor-pointer">
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-primary" icon="solar:code-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2 tracking-tight">HTML to Image</h3>
<p className="text-sm text-secondary/60 leading-relaxed">Convert webpages in HTML to JPG or SVG. Paste the URL.</p>
</div>

<div className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-accent/30 cursor-pointer relative">
<span className="absolute top-4 right-4 bg-primary/10 text-primary text-[10px] font-semibold px-2 py-1 rounded-full uppercase tracking-wider">New</span>
<div className="w-12 h-12 rounded-xl bg-tool-clay/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-[#A8645E]" icon="solar:user-block-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2 tracking-tight">Blur Face</h3>
<p className="text-sm text-secondary/60 leading-relaxed">Easily blur out faces in photos for privacy and security.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-accent/10">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-secondary mb-4">Why Millions Trust <span className="text-primary italic">iLoveFiles</span></h2>
<p className="text-secondary/60 max-w-xl mx-auto text-lg">The luxury standard for productivity. Experience workflow perfection.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">

<div className="p-8 rounded-2xl bg-bg-cream border border-transparent hover:border-accent/20 transition-all">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
<iconify-icon className="text-primary" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Bank-Level Security</h3>
<p className="text-sm text-secondary/70 leading-relaxed">All files are processed using 256-bit SSL encryption and deleted automatically after 2 hours.</p>
</div>

<div className="p-8 rounded-2xl bg-bg-cream border border-transparent hover:border-accent/20 transition-all">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
<iconify-icon className="text-primary" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Lightning Fast</h3>
<p className="text-sm text-secondary/70 leading-relaxed">Processing speeds that save you time. Optimized for large documents and high-res images.</p>
</div>

<div className="p-8 rounded-2xl bg-bg-cream border border-transparent hover:border-accent/20 transition-all">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-6">
<iconify-icon className="text-primary" icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-3 tracking-tight">Premium Quality</h3>
<p className="text-sm text-secondary/70 leading-relaxed">Maintain the highest quality standards. No loss in clarity when compressing or converting.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-ivory relative">
<div className="max-w-6xl mx-auto px-6 text-center">
<h2 className="font-serif text-3xl text-secondary mb-20">How It Works</h2>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-accent/30 -z-10"></div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 rounded-full bg-white border-4 border-bg-cream shadow-lg flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-primary" icon="solar:cursor-square-linear" width="32"></iconify-icon>
<span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold border-4 border-bg-ivory">1</span>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2">Choose Your Tool</h3>
<p className="text-sm text-secondary/60 max-w-xs leading-relaxed">Select from our suite of premium tools tailored for your specific needs.</p>
</div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 rounded-full bg-white border-4 border-bg-cream shadow-lg flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-primary" icon="solar:upload-track-linear" width="32"></iconify-icon>
<span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold border-4 border-bg-ivory">2</span>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2">Upload Your Files</h3>
<p className="text-sm text-secondary/60 max-w-xs leading-relaxed">Drag and drop documents or images. We support all major formats.</p>
</div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 rounded-full bg-white border-4 border-bg-cream shadow-lg flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-primary" icon="solar:download-square-linear" width="32"></iconify-icon>
<span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-sm font-bold border-4 border-bg-ivory">3</span>
</div>
<h3 className="text-lg font-semibold text-secondary mb-2">Download Results</h3>
<p className="text-sm text-secondary/60 max-w-xs leading-relaxed">Get processed results instantly. Fast, private, and efficient.</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-dark-charcoal text-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
<div>
<p className="text-3xl md:text-4xl font-serif text-primary mb-1">50M+</p>
<p className="text-xs text-white/60 uppercase tracking-widest">Happy Monthly Users</p>
</div>
<div>
<p className="text-3xl md:text-4xl font-serif text-primary mb-1">2000M+</p>
<p className="text-xs text-white/60 uppercase tracking-widest">Files Processed</p>
</div>
<div>
<p className="text-3xl md:text-4xl font-serif text-primary mb-1">35+</p>
<p className="text-xs text-white/60 uppercase tracking-widest">Professional Tools</p>
</div>
<div>
<p className="text-3xl md:text-4xl font-serif text-primary mb-1">99.9%</p>
<p className="text-xs text-white/60 uppercase tracking-widest">Uptime Guarantee</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-b from-bg-cream to-bg-warm-grey">
<div className="max-w-5xl mx-auto text-center mb-12">
<h2 className="font-serif text-3xl md:text-4xl text-secondary mb-4">Take Your Tools Everywhere</h2>
<p className="text-secondary/60 text-lg">Seamlessly transition between web and desktop for ultimate productivity.</p>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-3xl shadow-premium border border-accent/20 flex flex-col items-start h-full">
<div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
<iconify-icon className="text-primary" icon="solar:monitor-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-secondary mb-4">Desktop App</h3>
<ul className="space-y-3 mb-8 text-sm text-secondary/70">
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-circle-linear" width="16"></iconify-icon> Offline access to all heavy-duty tools</li>
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-circle-linear" width="16"></iconify-icon> Organize and manage files locally</li>
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-circle-linear" width="16"></iconify-icon> Faster processing speed for bulk actions</li>
</ul>
<div className="mt-auto flex gap-4">
<button className="bg-secondary text-white px-5 py-3 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-hover-charcoal transition-colors">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="16"></iconify-icon> Download for macOS
                    </button>
<button className="bg-secondary text-white px-5 py-3 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-hover-charcoal transition-colors">
<iconify-icon icon="mdi:microsoft-windows" width="16"></iconify-icon> Windows
                    </button>
</div>
</div>

<div className="bg-white p-10 rounded-3xl shadow-premium border border-accent/20 flex flex-col items-start h-full">
<div className="w-12 h-12 rounded-xl bg-tool-clay/20 flex items-center justify-center mb-6">
<iconify-icon className="text-[#A8645E]" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-secondary mb-4">Mobile App</h3>
<ul className="space-y-3 mb-8 text-sm text-secondary/70">
<li className="flex items-center gap-3"><iconify-icon className="text-[#A8645E]" icon="solar:check-circle-linear" width="16"></iconify-icon> Scan and edit documents on the go</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#A8645E]" icon="solar:check-circle-linear" width="16"></iconify-icon> Sign PDFs directly on your phone</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#A8645E]" icon="solar:check-circle-linear" width="16"></iconify-icon> Sync with cloud storage instantly</li>
</ul>
<div className="mt-auto flex gap-4">
<button className="bg-secondary text-white px-5 py-3 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-hover-charcoal transition-colors">
<iconify-icon icon="mdi:apple" width="16"></iconify-icon> App Store
                    </button>
<button className="bg-secondary text-white px-5 py-3 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-hover-charcoal transition-colors">
<iconify-icon icon="mdi:google-play" width="16"></iconify-icon> Google Play
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-secondary mb-4">Choose Your Plan</h2>
<p className="text-secondary/60 text-lg">Simple, transparent pricing for everyone.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

<div className="p-8 border border-accent/20 rounded-2xl hover:shadow-lg transition-shadow">
<h3 className="text-lg font-semibold text-secondary mb-2">Free</h3>
<div className="text-4xl font-serif font-medium mb-6">$0 <span className="text-sm font-sans text-secondary/50 font-normal">/mo</span></div>
<p className="text-sm text-secondary/60 mb-8 border-b border-accent/20 pb-8">For casual users and quick tasks.</p>
<ul className="space-y-4 text-sm text-secondary/70 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear" width="16"></iconify-icon> Access to all tools</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear" width="16"></iconify-icon> Limited daily tasks</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear" width="16"></iconify-icon> Standard processing speed</li>
</ul>
<button className="w-full py-3 rounded-lg border border-accent/40 text-secondary font-medium hover:bg-bg-ivory transition-colors">Get Started</button>
</div>

<div className="relative p-10 bg-bg-cream rounded-2xl shadow-xl border border-primary/30 z-10 transform md:scale-105">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-widest shadow-lg">Most Popular</div>
<h3 className="text-lg font-semibold text-primary mb-2">Premium</h3>
<div className="text-5xl font-serif font-medium mb-6">$7 <span className="text-sm font-sans text-secondary/50 font-normal">/mo</span></div>
<p className="text-sm text-secondary/60 mb-8 border-b border-accent/20 pb-8">Full access to iLoveFiles tools.</p>
<ul className="space-y-4 text-sm text-secondary mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-circle-linear" width="16"></iconify-icon> Unlimited document tasks</li>
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-circle-linear" width="16"></iconify-icon> Highest quality processing</li>
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-circle-linear" width="16"></iconify-icon> Priority support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-circle-linear" width="16"></iconify-icon> No ads</li>
<li className="flex items-center gap-3"><iconify-icon className="text-primary" icon="solar:check-circle-linear" width="16"></iconify-icon> Desktop &amp; Mobile access</li>
</ul>
<button className="w-full py-3.5 rounded-lg bg-primary text-white font-medium hover:bg-[#8e3e04] shadow-lg shadow-primary/20 transition-all">Go Premium</button>
</div>

<div className="p-8 border border-accent/20 rounded-2xl hover:shadow-lg transition-shadow">
<h3 className="text-lg font-semibold text-secondary mb-2">Business</h3>
<div className="text-4xl font-serif font-medium mb-6">Custom</div>
<p className="text-sm text-secondary/60 mb-8 border-b border-accent/20 pb-8">For teams and organizations.</p>
<ul className="space-y-4 text-sm text-secondary/70 mb-8">
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear" width="16"></iconify-icon> Team management</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear" width="16"></iconify-icon> API Access</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear" width="16"></iconify-icon> Dedicated support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-accent" icon="solar:check-circle-linear" width="16"></iconify-icon> Custom contracts</li>
</ul>
<button className="w-full py-3 rounded-lg border border-accent/40 text-secondary font-medium hover:bg-bg-ivory transition-colors">Contact Sales</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-warm-grey/30 relative overflow-hidden">
<div className="absolute top-20 left-10 opacity-5 -z-10 rotate-12">
<iconify-icon className="text-secondary" icon="solar:quote-up-square-linear" width="256"></iconify-icon>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl text-secondary mb-4">Loved by Millions</h2>
<p className="text-secondary/60 text-lg">Join the community of satisfied users.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-accent/20">
<div className="flex gap-1 text-primary mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-secondary/70 leading-relaxed mb-6">"Everything I need for work is right here. The interface is stunning and the tools work flawlessly. Totally worth the premium."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center font-serif">JD</div>
<div>
<p className="text-sm font-semibold text-secondary">Jane Doe</p>
<p className="text-xs text-secondary/50">Graphic Designer</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-accent/20">
<div className="flex gap-1 text-primary mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-secondary/70 leading-relaxed mb-6">"A life saver for handling PDF contracts. The security features give me peace of mind when handling sensitive client data."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-serif">AS</div>
<div>
<p className="text-sm font-semibold text-secondary">Alex Smith</p>
<p className="text-xs text-secondary/50">Legal Consultant</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-accent/20">
<div className="flex gap-1 text-primary mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-secondary/70 leading-relaxed mb-6">"The image compression tool is magic. It reduces file size significantly without losing visible quality. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-serif">MK</div>
<div>
<p className="text-sm font-semibold text-secondary">Maria K.</p>
<p className="text-xs text-secondary/50">Photographer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-serif text-3xl text-secondary text-center mb-4">Frequently Asked Questions</h2>
<p className="text-center text-secondary/60 mb-12">Have questions? We're here to help.</p>
<div className="space-y-4">
<div className="border border-accent/20 rounded-lg p-4 bg-bg-cream/50 cursor-pointer flex justify-between items-center group">
<span className="font-medium text-secondary text-sm">Is my data secure?</span>
<iconify-icon className="text-accent group-hover:text-primary transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="border border-accent/20 rounded-lg p-4 bg-bg-cream/50 cursor-pointer flex justify-between items-center group">
<span className="font-medium text-secondary text-sm">Are the basic tools free to use?</span>
<iconify-icon className="text-accent group-hover:text-primary transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="border border-accent/20 rounded-lg p-4 bg-bg-cream/50 cursor-pointer flex justify-between items-center group">
<span className="font-medium text-secondary text-sm">How do I cancel my subscription?</span>
<iconify-icon className="text-accent group-hover:text-primary transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="border border-accent/20 rounded-lg p-4 bg-bg-cream/50 cursor-pointer flex justify-between items-center group">
<span className="font-medium text-secondary text-sm">What happens to my files after processing?</span>
<iconify-icon className="text-accent group-hover:text-primary transition-colors" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-gradient-to-r from-[#8e3e04] to-primary text-white text-center">
<div className="max-w-4xl mx-auto">
<h2 className="font-serif text-3xl md:text-4xl mb-6">Ready to Transform Your Files?</h2>
<p className="text-white/80 mb-10 max-w-xl mx-auto">Join 50 million users who trust iLoveFiles for all their PDF and image needs. Start your premium experience today.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-bg-ivory transition-colors shadow-lg">Get Started Free</button>
<button className="bg-transparent border border-white/40 text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">View Pricing</button>
</div>
</div>
</section>

<footer className="bg-dark-charcoal pt-20 pb-10 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 mb-16 text-sm">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-primary" icon="solar:heart-bold" width="20"></iconify-icon>
<span className="text-lg font-semibold text-white">iLoveFiles</span>
</div>
<p className="text-accent/60 mb-6">The seamless solution for your PDF and image workflows.</p>
<div className="flex gap-4">
<iconify-icon className="text-accent hover:text-white cursor-pointer transition-colors" icon="mdi:twitter" width="16"></iconify-icon>
<iconify-icon className="text-accent hover:text-white cursor-pointer transition-colors" icon="mdi:facebook" width="16"></iconify-icon>
<iconify-icon className="text-accent hover:text-white cursor-pointer transition-colors" icon="mdi:instagram" width="16"></iconify-icon>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">PDF Tools</h4>
<ul className="space-y-3 text-accent/60">
<li className="hover:text-primary cursor-pointer transition-colors">Merge PDF</li>
<li className="hover:text-primary cursor-pointer transition-colors">Split PDF</li>
<li className="hover:text-primary cursor-pointer transition-colors">Compress PDF</li>
<li className="hover:text-primary cursor-pointer transition-colors">Convert PDF</li>
<li className="hover:text-primary cursor-pointer transition-colors">Edit PDF</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Image Tools</h4>
<ul className="space-y-3 text-accent/60">
<li className="hover:text-primary cursor-pointer transition-colors">Compress Image</li>
<li className="hover:text-primary cursor-pointer transition-colors">Resize Image</li>
<li className="hover:text-primary cursor-pointer transition-colors">Crop Image</li>
<li className="hover:text-primary cursor-pointer transition-colors">Convert to JPG</li>
<li className="hover:text-primary cursor-pointer transition-colors">Photo Editor</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Company</h4>
<ul className="space-y-3 text-accent/60">
<li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
<li className="hover:text-primary cursor-pointer transition-colors">Stories</li>
<li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
<li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
<li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Legal</h4>
<ul className="space-y-3 text-accent/60">
<li className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</li>
<li className="hover:text-primary cursor-pointer transition-colors">Terms of Service</li>
<li className="hover:text-primary cursor-pointer transition-colors">Cookie Policy</li>
<li className="hover:text-primary cursor-pointer transition-colors">Security</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-accent/40">
<p>© 2023 iLoveFiles. All rights reserved.</p>
<div className="flex items-center gap-2">
<span>English</span>
<iconify-icon icon="solar:globe-linear" width="12"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
