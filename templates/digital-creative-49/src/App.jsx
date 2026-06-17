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
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.05\"/%3E%3C/svg%3E')",
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;

            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();
    
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
      

<div className="fixed inset-0 pointer-events-none z-50 bg-noise opacity-40 mix-blend-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-white font-extrabold tracking-tighter text-xl z-50 mix-blend-difference" href="#">BW.</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
<a className="text-white hover:text-zinc-400 transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#about">Story</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#news">Gossip</a>
<a className="px-4 py-2 bg-white text-black rounded-full hover:bg-zinc-200 transition-colors font-semibold" href="#contact">Let's Talk</a>
</div>

<button className="md:hidden text-white p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-fuchsia-500/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center z-10 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs tracking-wide text-zinc-400 mb-4 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for new projects
            </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white tracking-tighter leading-[0.9] text-glow select-none">
                BLACK<br/>WEDNESDAY
            </h1>
<p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto tracking-tight">
                You’re looking for something <span className="text-white font-medium italic">magical</span>.
            </p>
<div className="pt-8 flex flex-wrap justify-center gap-12 border-t border-white/5 w-full max-w-4xl mx-auto mt-12 py-8">
<div className="text-center group cursor-default">
<div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">100+</div>
<div className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Projects Delivered</div>
</div>
<div className="text-center group cursor-default">
<div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">50+</div>
<div className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Happy Clients</div>
</div>
<div className="text-center group cursor-default">
<div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">10+</div>
<div className="text-xs uppercase tracking-widest text-zinc-500 font-medium">Years Experience</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight sticky top-32">
                        What Is <br/>Black Wednesday?
                    </h2>
</div>
<div className="space-y-8 reveal delay-100">
<div className="prose prose-lg prose-invert text-zinc-400 font-light leading-relaxed">
<p>
                            Black Wednesday was created to support brands as they try to build authentic and meaningful conversations and connections with their target audiences.
                        </p>
<p>
                            We offer marketing consultancy, small/medium sized business marketing strategy, organic social media strategy and management, public relations, and branding and design services.
                        </p>
<p className="text-white font-medium">
                            We see you, looking for something different. You are in the right place.
                        </p>
</div>
<div className="flex flex-wrap gap-4 pt-4">
<a className="px-6 py-3 glass-panel rounded-lg hover:bg-white/10 transition-all text-sm font-medium text-white flex items-center gap-2 group" href="#">
                            Full Story <i className="w-4 h-4 opacity-50 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
<a className="px-6 py-3 glass-panel rounded-lg hover:bg-white/10 transition-all text-sm font-medium text-white flex items-center gap-2 group" href="#">
                            Meet the Team <i className="w-4 h-4 opacity-50" data-lucide="users"></i>
</a>
<div className="px-6 py-3 border border-transparent text-sm font-medium text-zinc-500 italic cursor-default">
                            9 Years of Weird Vibes
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">

<div className="space-y-4 group reveal">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="ear"></i>
</div>
<h3 className="text-2xl font-bold text-white tracking-tight">We Listen</h3>
<p className="text-zinc-400 leading-relaxed text-sm">
                        Every great project starts with understanding. We dive deep into your vision, goals, and challenges to craft solutions that truly resonate.
                    </p>
</div>

<div className="space-y-4 group reveal delay-100">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="pen-tool"></i>
</div>
<h3 className="text-2xl font-bold text-white tracking-tight">We Design</h3>
<p className="text-zinc-400 leading-relaxed text-sm">
                        Beautiful interfaces meet powerful functionality. Our designs don't just look good—they solve problems and create memorable experiences.
                    </p>
</div>

<div className="space-y-4 group reveal delay-200">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="code-2"></i>
</div>
<h3 className="text-2xl font-bold text-white tracking-tight">We Build</h3>
<p className="text-zinc-400 leading-relaxed text-sm">
                        Using cutting-edge technology and best practices, we transform designs into robust, scalable digital products that stand the test of time.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center reveal">
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">What We Do</h2>
<p className="text-zinc-400 max-w-2xl mx-auto">Comprehensive digital solutions tailored to amplify your brand's voice.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group reveal">
<div className="mb-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="lightbulb"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Marketing Consultancy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Clear strategy to align your marketing, messaging, and priorities tailored for sustainable growth.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group reveal delay-100">
<div className="mb-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="megaphone"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Campaign Management</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Focused campaigns built around a single idea, executed end to end with precision.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group reveal delay-200">
<div className="mb-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="newspaper"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Public Relations</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Stories shaped and placed to earn credible media attention and elevate brand authority.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group reveal">
<div className="mb-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="palette"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Branding + Design</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Visual systems built for clarity, consistency, and impact across all mediums.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group reveal delay-100">
<div className="mb-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="share-2"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Social Media</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Purposeful content and management tailored to build community and engagement.
                    </p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all duration-300 group reveal delay-200">
<div className="mb-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
<i className="w-5 h-5" data-lucide="users-2"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Grassroots Marketing</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Real-world activations that connect brands to local communities meaningfully.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-zinc-900/20" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-16 mb-20">
<div className="lg:col-span-1 reveal">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8">Our Work</h2>
<p className="text-zinc-400 leading-relaxed mb-8">
                        Weirdos, at your service! We’re ready to jump in and help you do some cool and different shit.
                        <br/><br/>
                        We aren’t the type of agency that sits back and waits: we are proactive and we’re excited to take the lead. Some might call it… magic.
                    </p>
<a className="inline-flex items-center text-white border-b border-white pb-1 hover:text-zinc-300 hover:border-zinc-300 transition-all text-sm font-medium tracking-wide" href="#">
                        View All Case Studies
                    </a>
</div>

<div className="lg:col-span-2 grid md:grid-cols-2 gap-8">

<div className="group relative aspect-[4/3] bg-zinc-800 rounded-xl overflow-hidden cursor-pointer reveal delay-100">

<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-black/20 z-10"></div>
<img alt="Henrietta's" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute bottom-0 left-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-xl font-bold text-white">Henrietta’s</h4>
<p className="text-xs text-zinc-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-75">PR &amp; Influencer Relations</p>
</div>
</div>

<div className="group relative aspect-[4/3] bg-zinc-800 rounded-xl overflow-hidden cursor-pointer reveal delay-200">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-black/20 z-10"></div>
<img alt="Sharigato" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute bottom-0 left-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-xl font-bold text-white">Sharigato</h4>
<p className="text-xs text-zinc-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-75">PR &amp; Social Media</p>
</div>
</div>

<div className="group relative aspect-[4/3] bg-zinc-800 rounded-xl overflow-hidden cursor-pointer reveal">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-900/40 to-black/20 z-10"></div>
<img alt="Rally" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute bottom-0 left-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-xl font-bold text-white">Rally</h4>
<p className="text-xs text-zinc-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-75">Public Relations</p>
</div>
</div>

<div className="group relative aspect-[4/3] bg-zinc-800 rounded-xl overflow-hidden cursor-pointer reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-tr from-teal-900/40 to-black/20 z-10"></div>
<img alt="Blinders" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute bottom-0 left-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-xl font-bold text-white">Blinders Sports Lounge</h4>
<p className="text-xs text-zinc-300 mt-1 opacity-0 group-hover:opacity-100 transition-opacity delay-75">PR, Social &amp; Graphic Design</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="news">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight text-center mb-16 reveal">Black Wednesday in The News</h2>
<div className="space-y-4">

<a className="group block glass-panel rounded-xl p-6 hover:bg-white/5 transition-all duration-300 reveal" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-6">
<span className="text-sm font-mono text-zinc-500">2024</span>
<div className="w-px h-8 bg-white/10 hidden md:block"></div>
<div>
<div className="text-xs uppercase tracking-wider text-purple-400 mb-1">Travel + Leisure</div>
<h3 className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">Black Wednesday mentioned in Travel + Leisure</h3>
</div>
</div>
<div className="self-end md:self-center">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</a>

<a className="group block glass-panel rounded-xl p-6 hover:bg-white/5 transition-all duration-300 reveal delay-75" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-6">
<span className="text-sm font-mono text-zinc-500">2024</span>
<div className="w-px h-8 bg-white/10 hidden md:block"></div>
<div>
<div className="text-xs uppercase tracking-wider text-blue-400 mb-1">Charlotte Observer</div>
<h3 className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors">Charlotte Observer and BW put on Charlotte Influencer Event</h3>
</div>
</div>
<div className="self-end md:self-center">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</a>

<a className="group block glass-panel rounded-xl p-6 hover:bg-white/5 transition-all duration-300 reveal delay-150" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-6">
<span className="text-sm font-mono text-zinc-500">2023</span>
<div className="w-px h-8 bg-white/10 hidden md:block"></div>
<div>
<div className="text-xs uppercase tracking-wider text-pink-400 mb-1">Campaign Lunch</div>
<h3 className="text-lg font-medium text-white group-hover:text-pink-300 transition-colors">BW launches She’s Giving campaign during WHM via WCCB</h3>
</div>
</div>
<div className="self-end md:self-center">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</a>

<a className="group block glass-panel rounded-xl p-6 hover:bg-white/5 transition-all duration-300 reveal delay-200" href="#">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-center gap-6">
<span className="text-sm font-mono text-zinc-500">2021</span>
<div className="w-px h-8 bg-white/10 hidden md:block"></div>
<div>
<div className="text-xs uppercase tracking-wider text-green-400 mb-1">Charlotte Business Journal</div>
<h3 className="text-lg font-medium text-white group-hover:text-green-300 transition-colors">BW featured in Charlotte Business Journal</h3>
</div>
</div>
<div className="self-end md:self-center">
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
<i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20">
<div className="reveal">
<h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-8 leading-[0.9]">
                        Let’s Make<br/>Magic Together
                    </h2>
<p className="text-lg text-zinc-400 leading-relaxed mb-12 max-w-md">
                        Complete the form to share more information and we’ll see how we can help.
                    </p>
<div className="space-y-2 text-sm text-zinc-500">
<p>Not a project inquiry?</p>
<p>Email <a className="text-white hover:underline decoration-zinc-500 underline-offset-4" href="mailto:magic@blackwednesday.co">magic@blackwednesday.co</a></p>
</div>
</div>
<form className="space-y-6 reveal delay-100">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">First Name</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-colors" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Last Name</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Email</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-colors" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Phone</label>
<input className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-colors" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">How can we help?</label>
<textarea className="w-full bg-zinc-900 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/30 focus:bg-zinc-800 transition-colors resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-all transform hover:scale-[1.01] active:scale-[0.99]" type="button">
                        Submit
                    </button>
</form>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-2xl font-extrabold tracking-tighter text-white">BW.</div>
<div className="text-sm text-zinc-600">
                © 2024 Black Wednesday. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</footer>



    </>
  );
}
