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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="noise-overlay"></div>

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] glow-blue rounded-full pointer-events-none blur-3xl z-0"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] glow-red rounded-full pointer-events-none blur-3xl z-0"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="text-2xl font-medium tracking-tight text-white italic group-hover:text-red-400 transition-colors duration-500">DR GPT</span>
<span className="text-xs font-normal uppercase tracking-widest text-red-500 leading-tight flex flex-col opacity-80">
<span>Harvey</span>
<span>Castro MD</span>
</span>
</a>
<div className="hidden lg:flex items-center gap-8 bg-black/20 px-8 py-2.5 rounded-full border border-white/5 backdrop-blur-md">
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors" href="#">Speaking</a>
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors" href="#">Services</a>
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors" href="#">Advisory</a>
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-xs font-normal text-zinc-400 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="hidden md:flex items-center gap-6">
<div className="flex items-center gap-4 text-zinc-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:linkedin-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:youtube-linear"></iconify-icon></a>
</div>
<a className="relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-medium text-white transition-all duration-200 bg-red-600/90 border border-red-500/50 rounded-full hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:-translate-y-0.5 uppercase tracking-widest" href="#">
                    Book DR GPT
                </a>
</div>
</div>
</nav>

<header className="relative pt-40 pb-32 px-6 min-h-screen flex items-center overflow-hidden">
<div className="absolute inset-0 z-0 bg-grid"></div>
<div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-3/5 space-y-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-normal text-zinc-300 uppercase tracking-widest">Available for Keynotes</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight uppercase italic leading-[0.95] text-white">
<span className="bg-gradient-to-br from-white via-white to-zinc-500 bg-clip-text text-transparent">DRGPT™</span><br/>
<span className="text-3xl md:text-5xl lg:text-6xl text-zinc-500 not-italic font-light tracking-tight mt-4 block">
                        AI &amp; Healthcare<br/>
                        Advisory Services
                    </span>
</h1>
<p className="text-sm md:text-base text-zinc-400 font-light leading-relaxed max-w-xl">
                    Professional services brand providing AI strategy, healthcare innovation consulting, clinical advisory services, and executive education for organizations navigating artificial intelligence in medicine.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="bg-white text-black text-xs font-medium uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-all hover:scale-105" href="#">
                        Work With DR. GPT
                    </a>
<a className="glass-panel text-white text-xs font-normal uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-white/10 transition-all flex items-center gap-2" href="#">
                        Explore Services <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="w-full lg:w-2/5 hidden md:block relative">
<div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-blue-500/20 rounded-[2rem] blur-2xl transform rotate-3 z-0"></div>
<div className="relative z-10 glass-panel rounded-[2rem] p-4 transform transition-transform duration-700 hover:scale-[1.02]">
<div className="aspect-[3/4] rounded-[1.5rem] overflow-hidden relative">
<img alt="Dr Harvey Castro" className="w-full h-full object-cover grayscale opacity-80 mix-blend-lighten" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

<div className="absolute bottom-6 left-6 right-6 glass-panel rounded-xl p-4 flex items-center justify-between">
<div className="space-y-1">
<p className="text-xs font-medium text-white tracking-widest uppercase">Harvey Castro MD</p>
<p className="text-xs font-light text-zinc-400">Chief Clinical AI Officer</p>
</div>
<div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-32 px-6 relative z-10 border-t border-white/5">
<div className="max-w-7xl mx-auto space-y-16">
<div className="flex flex-col md:flex-row justify-between items-end gap-8">
<div className="space-y-4">
<h2 className="text-sm font-normal tracking-widest text-red-500 uppercase">Expertise</h2>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                        Transforming Medicine <br/><span className="text-zinc-500">Through Artificial Intelligence</span>
</h3>
</div>
<p className="text-xs text-zinc-400 font-light leading-relaxed max-w-md">
                    Dive into pioneering research, insightful publications, and dynamic presentations that underscore the significance of AI in healthcare.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 glass-panel rounded-3xl p-8 md:p-12 card-hover relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col justify-between space-y-12">
<iconify-icon className="text-4xl text-zinc-400" icon="solar:screencast-linear"></iconify-icon>
<div className="space-y-4">
<h4 className="text-2xl md:text-3xl font-medium tracking-tight text-white">AI Strategy &amp; Healthcare Consulting</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed max-w-lg">Strategic guidance for healthcare organizations implementing artificial intelligence responsibly and effectively. Navigating the intersection of technology and patient safety.</p>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 card-hover relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col justify-between space-y-12">
<iconify-icon className="text-4xl text-zinc-400" icon="solar:chat-round-dots-linear"></iconify-icon>
<div className="space-y-4">
<h4 className="text-xl font-medium tracking-tight text-white">Executive Education</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Briefings for boards and leadership teams on AI readiness and transformation.</p>
</div>
</div>
</div>

<div className="glass-panel rounded-3xl p-8 card-hover relative overflow-hidden group">
<div className="relative z-10 h-full flex flex-col justify-between space-y-12">
<iconify-icon className="text-4xl text-zinc-400" icon="solar:heart-pulse-linear"></iconify-icon>
<div className="space-y-4">
<h4 className="text-xl font-medium tracking-tight text-white">Clinical Advisory</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">Physician-led advisory focused on patient safety, ethics, and clinical integration.</p>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-3xl p-2 card-hover relative overflow-hidden group flex flex-col md:flex-row gap-6">
<div className="w-full md:w-1/2 aspect-video md:aspect-auto rounded-2xl overflow-hidden relative">
<img alt="Speaking" className="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] pointer-events-none"></div>
</div>
<div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center space-y-4">
<h4 className="text-2xl font-medium tracking-tight text-white">Keynote Speaking</h4>
<p className="text-sm text-zinc-400 font-light leading-relaxed">National and international speaking engagements on AI, medicine, innovation, and the future of healthcare.</p>
<div className="pt-4">
<a className="text-xs font-medium text-white uppercase tracking-widest flex items-center gap-2 hover:text-red-400 transition-colors" href="#">
                                View Engagements <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 relative overflow-hidden border-y border-white/5 bg-[#030303]">
<div className="absolute inset-0 bg-grid opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">

<div className="relative w-32 h-32 mx-auto mb-16 flex items-center justify-center">

<div className="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-2 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
<div className="relative w-16 h-16 glass-panel rounded-2xl shadow-2xl flex items-center justify-center transform rotate-45 group hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-2xl text-white -rotate-45 group-hover:scale-110 transition-transform" icon="solar:cpu-linear"></iconify-icon>
</div>
</div>
<div className="space-y-6">
<h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                    Experience <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent italic">DR. GPT</span><br/>
<span className="text-zinc-600">Artificial Intelligence</span>
</h2>
<p className="text-sm text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
                    Interact directly with Dr. Harvey Castro's digital twin. A specialized AI model trained on his publications, methodologies, and clinical insights.
                </p>
</div>
<div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
<button className="glass-panel text-white text-xs font-normal uppercase tracking-widest px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                    Initialize Chat
                </button>
</div>
</div>

<div className="max-w-7xl mx-auto mt-32 relative z-10">
<p className="text-center text-[10px] font-normal tracking-[0.3em] text-zinc-600 uppercase mb-8">Featured In &amp; Trusted By</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale transition-all duration-500">
<iconify-icon className="text-white text-3xl" icon="solar:global-linear"></iconify-icon>
<iconify-icon className="text-white text-3xl" icon="solar:tv-linear"></iconify-icon>
<iconify-icon className="text-white text-3xl" icon="solar:radio-linear"></iconify-icon>
<iconify-icon className="text-white text-3xl" icon="solar:satellite-linear"></iconify-icon>
<iconify-icon className="text-white text-3xl" icon="solar:wi-fi-linear"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10">
<div className="max-w-7xl mx-auto space-y-32">

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1 group">
<div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden glass-panel p-2">
<img alt="Dr Castro on stage" className="w-full h-full object-cover rounded-[1.5rem] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
<div className="space-y-8 order-1 lg:order-2 lg:pl-12">
<div className="flex items-center gap-4">
<span className="w-8 h-[1px] bg-red-500"></span>
<h2 className="text-xs font-normal tracking-[0.2em] text-zinc-500 uppercase">Speaking Engagements</h2>
</div>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                        A Trailblazer in AI and <br/>
<span className="text-zinc-500 italic">Healthcare Leadership</span>
</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Dr. Harvey Castro stands out as a distinguished speaker, offering profound insights into the seamless integration of artificial intelligence in the healthcare sector. His presentations are more than lectures; they are invitations to pioneer change and adapt AI with vision and confidence.
                    </p>
<div className="pt-4">
<a className="inline-flex items-center gap-3 text-xs font-medium text-white uppercase tracking-widest hover:text-red-400 transition-colors border-b border-white/20 pb-2 hover:border-red-400/50" href="#">
                            Book for your next event <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 lg:pr-12">
<div className="flex items-center gap-4">
<span className="w-8 h-[1px] bg-red-500"></span>
<h2 className="text-xs font-normal tracking-[0.2em] text-zinc-500 uppercase">The Visionary</h2>
</div>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                        About Harvey Castro <br/>
<span className="text-zinc-500 italic">MD, MBA, FACEP</span>
</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Embark on the inspiring journey of Dr. Harvey Castro, whose path from facing early challenges to becoming a luminary in healthcare technology exemplifies the power of resilience and innovation. Uncover his academic achievements, pivotal medical roles, and groundbreaking entrepreneurial ventures.
                    </p>
<div className="pt-4 flex gap-4">
<button className="bg-white text-black text-xs font-medium uppercase tracking-widest px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-all">
                            Full Biography
                        </button>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-4 bg-gradient-to-l from-white/5 to-transparent rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="aspect-[4/3] rounded-[2rem] overflow-hidden glass-panel p-2">
<img alt="Event setup" className="w-full h-full object-cover rounded-[1.5rem] grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative bg-gradient-to-b from-transparent to-black">
<div className="max-w-7xl mx-auto space-y-24">

<div className="max-w-4xl mx-auto text-center space-y-12">
<iconify-icon className="text-4xl text-white/20" icon="solar:quote-right-linear"></iconify-icon>
<p className="text-xl md:text-3xl font-light leading-relaxed text-zinc-300">
                    "I left knowing that AI is coming and it's time for me to get ahead of it... The conversational nature of his presentation left me inspired and knowledgeable about all the tools we have to optimize our workflow."
                </p>
<div className="space-y-2">
<p className="text-xs font-medium text-white uppercase tracking-widest">Ahad Fazal, PharmD</p>
<p className="text-xs text-zinc-600 font-normal tracking-[0.2em] uppercase">VCU Health</p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel rounded-3xl p-3 group cursor-pointer hover:bg-white/5 transition-all duration-500">
<div className="aspect-[16/10] rounded-2xl overflow-hidden relative mb-6">
<img alt="Testimonial" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1376&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white backdrop-blur-md transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<div className="px-4 pb-4">
<p className="text-sm text-zinc-400 font-light line-clamp-2">"Left the audience feeling energized, very engaging and he's a pioneer in this space."</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-3 group cursor-pointer hover:bg-white/5 transition-all duration-500">
<div className="aspect-[16/10] rounded-2xl overflow-hidden relative mb-6">
<img alt="Testimonial" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white backdrop-blur-md transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<div className="px-4 pb-4">
<p className="text-sm text-zinc-400 font-light line-clamp-2">"It was amazing! The amount of engagement we got from the audience was great."</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-3 group cursor-pointer hover:bg-white/5 transition-all duration-500">
<div className="aspect-[16/10] rounded-2xl overflow-hidden relative mb-6">
<img alt="Testimonial" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1374&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-white backdrop-blur-md transform group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl ml-1" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>
<div className="px-4 pb-4">
<p className="text-sm text-zinc-400 font-light mb-2">"A very rare kind of person... maybe a one in the world kind of person."</p>
<p className="text-[10px] font-normal text-zinc-600 uppercase tracking-widest">Michael Gorton, Teladoc</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20"></div>
<div className="max-w-7xl mx-auto relative z-10 glass-panel rounded-[2rem] p-8 md:p-16">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
<div className="space-y-10">
<div className="space-y-4">
<h2 className="text-xs font-normal tracking-[0.2em] text-red-500 uppercase">Connect</h2>
<h3 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.1]">
                            Initiate a <span className="text-zinc-500 italic">Conversation</span>
</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed max-w-md">
                            Elevate your next event or seek guidance on integrating AI in healthcare. Connect with our team to explore collaboration opportunities.
                        </p>
</div>
<div className="space-y-6 pt-8">
<div className="flex items-center gap-4 text-zinc-400">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-sm font-light">contact@harveycastro.md</span>
</div>
<div className="flex items-center gap-4 text-zinc-400">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-sm font-light">Global Availability</span>
</div>
</div>
</div>

<div className="bg-black/40 rounded-3xl p-8 border border-white/5">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">First Name</label>
<input className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white focus:border-white focus:outline-none transition-colors placeholder:text-zinc-700" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Last Name</label>
<input className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white focus:border-white focus:outline-none transition-colors placeholder:text-zinc-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Email Address</label>
<input className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-white focus:border-white focus:outline-none transition-colors placeholder:text-zinc-700" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-widest text-zinc-500">Inquiry Type</label>
<select className="w-full bg-transparent border-b border-white/10 pb-2 text-sm text-zinc-400 focus:border-white focus:outline-none transition-colors appearance-none">
<option className="bg-black">Speaking Engagement</option>
<option className="bg-black">Consulting</option>
<option className="bg-black">Media Inquiry</option>
<option className="bg-black">Other</option>
</select>
</div>
<div className="pt-8">
<button className="w-full bg-white text-black text-xs font-medium uppercase tracking-widest py-4 rounded-xl hover:bg-zinc-200 transition-all text-center" type="submit">
                                Submit Request
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 relative z-20 border-t border-white/10 bg-[#000]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<span className="text-xl font-medium tracking-tight text-white italic">DR GPT</span>
<span className="text-[10px] font-normal uppercase tracking-widest text-red-500 leading-tight">
                    Harvey Castro MD
                </span>
</a>
<div className="flex items-center gap-6 text-[10px] font-normal uppercase tracking-widest text-zinc-600">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<span>© 2024</span>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 group">
<div className="absolute inset-0 bg-red-500/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
<div className="relative glass-panel bg-black/80 p-2 pr-6 rounded-full flex items-center gap-4 cursor-pointer hover:border-white/20 transition-all shadow-2xl">
<div className="w-10 h-10 rounded-full overflow-hidden border border-white/10 relative">
<img alt="Avatar" className="w-full h-full object-cover grayscale mix-blend-lighten" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=100&amp;h=100"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black"></div>
</div>
<div className="space-y-0.5">
<p className="text-[10px] font-normal text-zinc-300 uppercase tracking-widest">DR GPT is online</p>
<div className="flex items-center gap-1.5 text-white">
<iconify-icon className="text-xs" icon="solar:chat-round-dots-linear"></iconify-icon>
<span className="text-xs font-medium">Start Session</span>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
