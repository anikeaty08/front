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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
pink: '#e88e8e',
light: '#fafafa'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="flex items-center gap-8">
<a className="font-serif font-medium text-xl tracking-tight italic" href="#">Natura AI</a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm text-gray-600 hover:text-gray-900 transition" href="#">Platform</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition" href="#">How It Works</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition" href="#">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50 transition" href="#">
                Explore Platform <i className="w-4 h-4 text-gray-400" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<button className="md:hidden text-gray-600 hover:text-gray-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<section className="lg:px-8 flex flex-col overflow-hidden bg-center text-center bg-[url(https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=3840&amp;q=80)] bg-cover pt-40 pr-6 pb-24 pl-6 relative items-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-pink/10 via-white to-white -z-10 opacity-70"></div>
<div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center mt-12 md:mt-20">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-light border border-gray-200 mb-8 hover:bg-gray-50 transition shadow-sm" href="#">
<span className="w-2 h-2 rounded-full bg-brand-pink animate-pulse"></span>
<span className="text-xs font-medium text-gray-600">Natura AI 2.0 is now live</span>
<i className="w-3 h-3 text-gray-400" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
<h1 className="text-5xl sm:text-7xl lg:text-[6rem] leading-[1.05] font-semibold tracking-tighter mb-8 text-gray-900">
                Generate images<br/>
                that feel <span className="font-serif italic text-brand-pink font-medium pr-2">alive.</span>
</h1>
<p className="md:text-xl text-lg font-medium text-slate-950 max-w-2xl mb-12">
                Describe your vision. NaturaAI renders it beautifully — atmosphere, light, and texture included.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition shadow-lg shadow-gray-900/10 w-full sm:w-auto" href="#">
                    Start Generating
                </a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-gray-900 text-sm font-medium hover:bg-gray-50 transition border border-gray-200 w-full sm:w-auto shadow-sm" href="#">
                    View Examples
                </a>
</div>
<div className="mt-16 relative w-full max-w-4xl rounded-2xl overflow-hidden border border-gray-100 shadow-2xl">
<div className="absolute inset-0 bg-gray-900/5 z-10 rounded-2xl pointer-events-none"></div>
</div>
</div>
</section>

<div className="relative z-20 bg-white border-y border-gray-100 py-4 overflow-hidden flex whitespace-nowrap">
<div className="animate-marquee flex gap-12 items-center text-xs font-medium tracking-widest uppercase text-gray-400">
<span>120,000+ Images Generated</span>
<span>•</span>
<span>4.9 Stars</span>
<span>•</span>
<span>Free to Start</span>
<span>•</span>
<span>Loved by 40k Creators</span>
<span>•</span>
<span>120,000+ Images Generated</span>
<span>•</span>
<span>4.9 Stars</span>
<span>•</span>
<span>Free to Start</span>
<span>•</span>
<span>Loved by 40k Creators</span>
<span>•</span>
<span>120,000+ Images Generated</span>
<span>•</span>
<span>4.9 Stars</span>
<span>•</span>
<span>Free to Start</span>
<span>•</span>
<span>Loved by 40k Creators</span>
</div>
</div>

<section className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
<div className="sticky top-32">
<div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
<span className="w-1 h-1 rounded-full bg-gray-400"></span> About the Platform <span className="w-1 h-1 rounded-full bg-gray-400"></span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                    Built for <span className="font-serif italic text-brand-pink font-normal">creative</span><br/>minds.
                </h2>
<p className="text-lg text-gray-500 mb-12 max-w-md">
                    Our AI understands atmosphere, light, and feeling — not just pixel content. Designed for photographers, designers, and visual storytellers who demand more.
                </p>
<div className="flex gap-4">
<img alt="Interior UI" className="w-40 h-32 object-cover rounded-2xl shadow-sm border border-gray-100" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Modern Interior" className="w-40 h-32 object-cover rounded-2xl shadow-sm border border-gray-100" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="flex flex-col gap-12">
<div className="group border-b border-gray-100 pb-12">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-medium tracking-tight">Atmosphere-First Design</h3>
<img alt="Thumbnail" className="w-16 h-10 object-cover rounded-lg shadow-sm" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-lg text-gray-500 mb-6 max-w-sm">Our model captures light, mood, and feeling — not just pixel content. Every render breathes.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-brand-pink group-hover:text-gray-900 transition" href="#">Learn More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
<div className="group border-b border-gray-100 pb-12 relative overflow-hidden rounded-3xl p-8 bg-brand-light">
<div className="relative z-10">
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 block">Quality</span>
<h3 className="text-xl font-medium tracking-tight mb-2">Built for Scale</h3>
<p className="text-lg text-gray-500 mb-6 max-w-sm">Full resolution, commercially licensed, watermark-free. Every plan, every output.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-brand-pink transition" href="#">Learn More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
<img alt="Background detail" className="absolute bottom-0 right-0 w-3/4 h-32 object-cover object-top opacity-50 translate-y-4 translate-x-4 rounded-tl-3xl" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group border-b border-gray-100 pb-12">
<div className="flex justify-between items-start mb-4">
<div>
<span className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 block">Speed</span>
<h3 className="text-xl font-medium tracking-tight">3-Second Generation</h3>
</div>
<img alt="Thumbnail" className="w-16 h-10 object-cover rounded-lg shadow-sm" src="https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-lg text-gray-300 max-w-sm">From prompt to polished image in under 3 seconds. No queue. No waiting. Just art.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">

<div className="relative h-[600px] w-full flex justify-center items-center">
<div className="absolute w-16 h-[500px] bg-gray-100 rounded-[2rem] -left-8 md:left-0 opacity-50 overflow-hidden">
<img alt="Stack 3" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute w-24 h-[550px] bg-gray-200 rounded-[2rem] left-0 md:left-12 opacity-80 shadow-lg overflow-hidden z-10">
<img alt="Stack 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative w-full max-w-sm h-full bg-white rounded-[2rem] shadow-2xl overflow-hidden z-20 border border-gray-100 ml-12 md:ml-32">
<img alt="Main Architecture Image" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div>
<div className="flex items-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
<span className="w-1 h-1 rounded-full bg-gray-400"></span> The Platform <span className="w-1 h-1 rounded-full bg-gray-400"></span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">
                    Manage images as<br/>
<span className="font-serif italic text-brand-pink font-normal">one system.</span>
</h2>
<div className="flex flex-wrap gap-2 mb-8">
<button className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-medium">Text to Image</button>
<button className="px-4 py-2 rounded-full bg-brand-light text-gray-600 text-sm font-medium border border-gray-100 hover:bg-gray-100 transition">Image to Image</button>
<button className="px-4 py-2 rounded-full bg-brand-light text-gray-600 text-sm font-medium border border-gray-100 hover:bg-gray-100 transition">Style Transfer</button>
</div>
<h3 className="text-xl font-medium tracking-tight mb-4">Describe any scene</h3>
<p className="text-lg text-gray-500 mb-10 max-w-md">
                    Type a prompt — a mood, a landscape, a feeling. NaturaAI renders your words into a full-resolution image in seconds. Every output captures atmosphere, texture, and depth.
                </p>
<div className="grid grid-cols-3 gap-6 border-t border-gray-100 pt-8 mb-8">
<div>
<div className="text-2xl font-serif italic mb-1"><span className="text-base font-sans font-normal text-gray-400 not-italic mr-1">&lt;</span>3s</div>
<div className="text-xs text-gray-500">Generation time</div>
</div>
<div>
<div className="text-2xl font-serif italic mb-1">4K</div>
<div className="text-xs text-gray-500">Max resolution</div>
</div>
<div>
<div className="text-2xl font-serif italic mb-1">99.9%</div>
<div className="text-xs text-gray-500">Uptime SLA</div>
</div>
</div>
<a className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-600 transition" href="#">Learn More <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i></a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
<span className="w-1 h-1 rounded-full bg-gray-400"></span> How It Works <span className="w-1 h-1 rounded-full bg-gray-400"></span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                From Prompt to a<br/>
<span className="font-serif italic text-brand-pink font-normal">Perfect Image.</span>
</h2>
<p className="text-lg text-gray-500 max-w-md mx-auto">
                Three steps, zero friction. Describe, generate, download — and own every pixel you create.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="bg-brand-light rounded-3xl p-8 flex flex-col justify-between border border-gray-100">
<div>
<span className="text-brand-pink font-serif text-3xl leading-none">“</span>
<h3 className="text-xl tracking-tight font-medium mt-2"><span className="font-serif italic text-brand-pink font-normal mr-1">Describe</span> Your Vision</h3>
</div>
<p className="text-sm text-gray-500">Write a prompt — a mood, a landscape, a feeling. The more vivid and specific, the more alive the result. No technical knowledge required.</p>
</div>

<div className="relative rounded-3xl overflow-hidden group">
<img alt="Landscape output" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> AI-GENERATED OUTPUT
                </div>
</div>

<div className="bg-brand-light rounded-3xl p-8 flex flex-col justify-between border border-gray-100">
<div>
<span className="text-gray-400 font-serif text-3xl leading-none">“</span>
<h3 className="text-xl tracking-tight font-medium mt-2"><span className="font-serif italic text-gray-500 font-normal mr-1">Generate</span> in Seconds</h3>
</div>
<p className="text-sm text-gray-500">NaturaAI renders your vision with atmosphere, light, and texture built-in. Every output is unique — generation in under 3 seconds.</p>
</div>

<div className="relative rounded-3xl overflow-hidden group">
<img alt="Interior pink sofa" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> AI-GENERATED OUTPUT
                </div>
</div>

<div className="bg-white rounded-3xl p-8 flex flex-col justify-between border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div>
<span className="text-brand-pink font-serif text-3xl leading-none">”</span>
<h3 className="text-xl tracking-tight font-medium mt-2"><span className="font-serif italic text-brand-pink font-normal mr-1">Download</span> &amp; Own It</h3>
</div>
<p className="text-sm text-gray-500">Full resolution, no watermarks, commercial use included. Download instantly and use anywhere — print, web, or campaign.</p>
</div>

<div className="relative rounded-3xl overflow-hidden group">
<img alt="Train passing cherry blossoms" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span> AI-GENERATED OUTPUT
                </div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 lg:px-8 max-w-5xl mx-auto relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] font-serif text-brand-light leading-none -z-10 select-none">“</div>
<div className="text-center mb-12">
<div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
<span className="w-1 h-1 rounded-full bg-gray-400"></span> Creator Testimonials <span className="w-1 h-1 rounded-full bg-gray-400"></span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                Empowering Creative<br/>
<span className="font-serif italic text-brand-pink font-normal">Minds Daily.</span>
</h2>
</div>
<div className="flex items-center justify-between gap-8">
<button className="w-10 h-10 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition shadow-lg hidden md:flex">
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<div className="flex flex-col items-center text-center">
<div className="flex gap-1 text-brand-pink mb-8">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
<p className="text-2xl md:text-3xl font-medium tracking-tight leading-relaxed mb-10 max-w-3xl">
                    We generate 50+ editorial images per week and our visual language has never been more consistent. <span className="text-gray-400 font-serif italic font-normal">The model understands tone and mood in a way that feels almost collaborative rather than generated —</span> the only AI tool that actually matches our brand standards.
                </p>
<div className="flex items-center gap-3">
<img alt="Priya S." className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="text-left">
<div className="text-sm font-medium">Priya S.</div>
<div className="text-xs text-gray-400">Creative Director, Editorial</div>
</div>
</div>
</div>
<button className="w-10 h-10 shrink-0 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition shadow-lg hidden md:flex">
<i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</section>

<section className="py-24 md:py-32 px-6 lg:px-8 max-w-7xl mx-auto">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-400 uppercase tracking-widest mb-6">
<span className="w-1 h-1 rounded-full bg-gray-400"></span> Pricing <span className="w-1 h-1 rounded-full bg-gray-400"></span>
</div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
                Simple, transparent<br/>
<span className="font-serif italic text-brand-pink font-normal">pricing.</span>
</h2>
<p className="text-lg text-gray-500">Start free. Grow on your own terms. Cancel anytime.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="bg-brand-light rounded-[2rem] p-8 border border-gray-100 flex flex-col h-full">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Free</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-5xl font-medium tracking-tight">$0</span>
<span className="text-sm text-gray-500">/ forever</span>
</div>
<p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200/60 flex-grow">Start creating immediately. No credit card required.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                        20 image generations / day
                    </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                        Standard resolution (1024x1024)
                    </li>
</ul>
<button className="w-full py-3 rounded-full bg-white border border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-50 transition mt-auto">Get Started Free</button>
</div>

<div className="relative bg-white rounded-[2rem] p-8 border border-brand-pink/20 shadow-2xl scale-100 md:scale-105 z-10 flex flex-col h-full">
<div className="absolute inset-0 bg-gradient-to-br from-brand-pink/5 via-transparent to-brand-pink/5 rounded-[2rem] pointer-events-none"></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-pink text-white text-[10px] font-medium uppercase tracking-widest px-3 py-1 rounded-full">Most Popular</div>
<div className="text-xs font-medium text-brand-pink uppercase tracking-widest mb-4">Pro</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-5xl font-medium tracking-tight">$19</span>
<span className="text-sm text-gray-500">/ per month</span>
</div>
<p className="text-sm text-gray-600 mb-8 pb-8 border-b border-gray-100 flex-grow">Unlimited power for professionals and serious creators.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-800">
<i className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                        Unlimited generations
                    </li>
<li className="flex items-start gap-3 text-sm text-gray-800">
<i className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                        Ultra-HD resolution (4096x4096)
                    </li>
</ul>
<button className="w-full py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition shadow-lg shadow-gray-900/20 mt-auto flex justify-center items-center gap-2">
                    Start Pro Trial <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="bg-brand-light rounded-[2rem] p-8 border border-gray-100 flex flex-col h-full">
<div className="text-xs font-medium text-gray-400 uppercase tracking-widest mb-4">Enterprise</div>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-5xl font-medium tracking-tight">$79</span>
<span className="text-sm text-gray-500">/ per user</span>
</div>
<p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-200/60 flex-grow">Custom scale and workflows for studios and teams.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                        Everything in Pro
                    </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<i className="w-4 h-4 text-brand-pink shrink-0 mt-0.5" data-lucide="check" strokeWidth="2"></i>
                        Custom fine-tuned models
                    </li>
</ul>
<button className="w-full py-3 rounded-full bg-white border border-gray-200 text-gray-900 text-sm font-medium hover:bg-gray-50 transition mt-auto">Contact Sales</button>
</div>
</div>
</section>

<footer className="border-t border-gray-100 bg-white pt-20 pb-10 px-6 lg:px-8">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-16">

<div className="col-span-2 lg:col-span-2">
<a className="font-serif font-medium text-xl tracking-tight italic text-gray-900 mb-4 block" href="#">Natura AI</a>
<p className="text-sm text-gray-500 mb-6 max-w-xs leading-relaxed">
                        Generate images that feel alive. High-fidelity rendering with atmosphere, light, and texture built-in.
                    </p>
<div className="flex items-center gap-4">
<a className="text-gray-400 hover:text-gray-900 transition" href="#">
<i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="text-gray-400 hover:text-gray-900 transition" href="#">
<i className="w-5 h-5" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a className="text-gray-400 hover:text-gray-900 transition" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-gray-900 mb-4 tracking-tight">Product</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Text to Image</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Image to Image</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-medium text-gray-900 mb-4 tracking-tight">Resources</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Documentation</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Prompt Guide</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-medium text-gray-900 mb-4 tracking-tight">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">About Us</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Careers <span className="ml-1 text-[10px] uppercase tracking-wider bg-brand-light text-gray-600 px-1.5 py-0.5 rounded-full border border-gray-200">We're hiring</span></a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-medium text-gray-900 mb-4 tracking-tight">Legal</h3>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Terms of Service</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-sm text-gray-400">
                    © 2024 NaturaAI Inc. All rights reserved.
                </div>
<div className="flex items-center gap-2 text-sm text-gray-400">
<span className="w-2 h-2 rounded-full bg-green-400"></span>
                    All systems operational
                </div>
</div>
</div>
</footer>


    </>
  );
}
