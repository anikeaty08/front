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



        // Reveal on scroll
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        };

        const revealObserver = new IntersectionObserver(revealCallback, {
            root: null,
            threshold: 0.1,
            rootMargin: "0px"
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

        // FAQ Accordion
        const accordions = document.querySelectorAll('.accordion-btn');
        
        accordions.forEach(acc => {
            acc.addEventListener('click', function() {
                // Toggle active class on parent for rotation
                this.parentElement.classList.toggle('active');
                
                // Toggle panel height
                const panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
                
                // Optional: Close other accordions
                accordions.forEach(otherAcc => {
                    if (otherAcc !== acc && otherAcc.parentElement.classList.contains('active')) {
                        otherAcc.parentElement.classList.remove('active');
                        otherAcc.nextElementSibling.style.maxHeight = null;
                    }
                });
            });
        });
    
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
      
<div className="grain-overlay"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-lg font-medium text-white tracking-tight" href="#" style={{}}>Aura Studio<span className="flex items-center justify-center text-xs text-white tracking-tighter bg-white/10 w-8 h-8 rounded">AS</span></a>
<div className="hidden md:flex items-center gap-8 text-sm font-light">
<a className="hover:text-white transition-colors duration-300" href="#work">Selected Work</a>
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#faq">FAQ</a>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-white bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 rounded-full transition-all duration-300" href="#contact">
<span>Book a Call</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="reveal md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] -z-10 opacity-50"></div>
<div className="flex flex-col text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-indigo-300 mb-8 font-light tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Accepting new projects for Q4
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[1.1] mb-8">
                Crafting visuals that <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-500">demand attention.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed mb-10">
                Premium video editing and content strategy for creators and brands. We turn raw footage into compelling narratives that drive engagement and growth.
            </p>
<div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
<a className="flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors duration-300 text-sm font-medium text-black bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#work">Start project</a>
</div>
</div>
</section>

<section className="reveal border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col items-center md:items-start">
<span className="md:text-4xl text-3xl font-medium text-white tracking-tighter">50M+</span>
<span className="text-sm text-neutral-500 mt-1 font-light">Views Generated</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-3xl md:text-4xl text-white font-medium tracking-tighter">150+</span>
<span className="text-sm text-neutral-500 mt-1 font-light">Projects Delivered</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-3xl md:text-4xl text-white font-medium tracking-tighter">48h</span>
<span className="text-sm text-neutral-500 mt-1 font-light">Avg. Turnaround</span>
</div>
<div className="flex flex-col items-center md:items-start">
<span className="text-3xl md:text-4xl text-white font-medium tracking-tighter">100%</span>
<span className="text-sm text-neutral-500 mt-1 font-light">Client Satisfaction</span>
</div>
</div>
</div>
</section>

<section className="reveal md:py-32 pt-24 pb-24" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div className="">
<h2 className="text-3xl md:text-5xl text-white font-medium tracking-tighter mb-4">Selected Work</h2>
<p className="text-neutral-400 font-light max-w-md">A curated collection of long-form storytelling, high-paced commercials, and viral short-form content.</p>
</div>
<a className="text-white text-sm border-b border-white/30 pb-1 hover:border-white transition-colors" href="#">View All Projects</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-neutral-950 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 z-20 opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2310680-9421-43ea-8b48-63f1ec82705a_1600w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="w-full z-20 pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<div className="flex justify-between items-end">
<div className="">
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Tech Documentary</h3>
<p className="text-sm text-neutral-400 font-light">Long-form Editing / Sound Design</p>
</div>
<span className="text-xs border border-white/20 px-2 py-1 rounded text-white/80">12:45</span>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 to-neutral-950 group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 z-20 opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f402e795-4886-4f64-abad-f9cae46ebb93_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon className="" icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 z-20 w-full">
<h3 className="text-xl text-white font-medium tracking-tight mb-1">Lifestyle Reels</h3>
<p className="text-xs text-neutral-400 font-light">Vertical Content / Motion Graphics</p>
</div>
</div>

<div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<div className="absolute inset-0 bg-neutral-900 group-hover:bg-neutral-800 transition-colors duration-500">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</div>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 z-20 opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08e0d7be-ab43-4f31-8421-2f7f95df2cc8_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 z-20 w-full">
<h3 className="text-xl text-white font-medium tracking-tight mb-1">Brand Identity</h3>
<p className="text-xs text-neutral-400 font-light">Commercial / Color Grading</p>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
<div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black group-hover:scale-105 transition-transform duration-700 ease-out"></div>
<div className="flex group-hover:opacity-100 transition-opacity duration-300 z-20 opacity-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3b99fe4d-2a11-4ad9-8d52-175a5a7cd5b0_1600w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex bg-center text-white bg-white/10 w-16 h-16 border-white/20 border rounded-full backdrop-blur-md items-center justify-center">
<iconify-icon className="" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex items-end justify-between">
<div>
<h3 className="text-2xl text-white font-medium tracking-tight mb-2">Travel Cinematic</h3>
<p className="text-sm text-neutral-400 font-light">Narrative / Visual FX</p>
</div>
<span className="text-xs border border-white/20 px-2 py-1 rounded text-white/80">08:20</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="reveal py-24 bg-neutral-950 relative overflow-hidden" id="services">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl text-white font-medium tracking-tighter mb-16 text-center">Expertise</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:scissors-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Video Editing</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Precision cutting, pacing, and storytelling for YouTube, documentaries, and commercials. We maintain viewer retention through strategic visual flow.
                    </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Narrative Structure
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Color Grading
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Sound Design
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Short Form Content</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        High-impact vertical videos optimized for TikTok, Reels, and Shorts. Designed to stop the scroll and convert viewers into followers.
                    </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Captions &amp; Hooks
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Trend Adaptation
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Motion Graphics
                        </li>
</ul>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-white/[0.04] transition-colors duration-300">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:clapperboard-edit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-3">Creative Strategy</h3>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                        Beyond the edit, we help plan your content calendar, refine your visual identity, and analyze performance to improve future uploads.
                    </p>
<ul className="mt-6 space-y-2">
<li className="flex items-center gap-2 text-xs text-neutral-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Content Audit
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Thumbnail Consulting
                        </li>
<li className="flex items-center gap-2 text-xs text-neutral-400">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon> Workflow Optimization
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="reveal py-24 border-t border-white/5 relative" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl text-white font-medium tracking-tighter mb-12 text-center">Questions</h2>
<div className="space-y-4">

<div className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden group">
<button className="accordion-btn w-full flex items-center justify-between p-5 text-left text-white hover:bg-white/[0.02] transition-colors">
<span className="font-medium text-sm md:text-base">What is your typical turnaround time?</span>
<iconify-icon className="text-neutral-500 text-xl transition-transform duration-300 group-[.active]:rotate-45 group-[.active]:text-white" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                            For standard YouTube videos (8-12 mins), our turnaround is typically 48-72 hours after footage receipt. Short-form content batches are usually delivered within 24-48 hours. Complex documentaries may require 5-7 days.
                        </div>
</div>
</div>

<div className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden group">
<button className="accordion-btn w-full flex items-center justify-between p-5 text-left text-white hover:bg-white/[0.02] transition-colors">
<span className="font-medium text-sm md:text-base">Do you offer revisions?</span>
<iconify-icon className="text-neutral-500 text-xl transition-transform duration-300 group-[.active]:rotate-45 group-[.active]:text-white" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                            Yes, absolutely. All packages include up to two rounds of revisions. We use Frame.io for precise, timestamped feedback to ensure the final cut matches your vision perfectly.
                        </div>
</div>
</div>

<div className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden group">
<button className="accordion-btn w-full flex items-center justify-between p-5 text-left text-white hover:bg-white/[0.02] transition-colors">
<span className="font-medium text-sm md:text-base">How do we transfer large files?</span>
<iconify-icon className="text-neutral-500 text-xl transition-transform duration-300 group-[.active]:rotate-45 group-[.active]:text-white" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                            We provide a dedicated Google Drive or Dropbox upload link for every client. For larger projects, we can set up a custom MASV portal to ensure high-speed, secure transfers of raw footage.
                        </div>
</div>
</div>

<div className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden group">
<button className="accordion-btn w-full flex items-center justify-between p-5 text-left text-white hover:bg-white/[0.02] transition-colors">
<span className="font-medium text-sm md:text-base">Do you offer monthly retainers?</span>
<iconify-icon className="text-neutral-500 text-xl transition-transform duration-300 group-[.active]:rotate-45 group-[.active]:text-white" icon="solar:add-circle-linear"></iconify-icon>
</button>
<div className="accordion-content">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                            Yes, most of our clients are on monthly retainers. This secures your spot in our calendar and provides better pricing per video. Retainers start at $2,000/month for consistent output.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="reveal py-24 border-t border-white/5">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-neutral-600 mb-6 text-4xl" icon="solar:quote-up-linear"></iconify-icon>
<h3 className="md:text-4xl leading-normal text-2xl font-light text-white tracking-tight mb-8" style={{}}>"Aura doesn't just edit videos; he understands the psychology of the viewer. The retention rates on our channel increased by 40% within the first month of working together."</h3>
<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-neutral-800 rounded-full mb-3 overflow-hidden">

<div className="w-full h-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
</div>
<span className="text-white font-medium text-sm">Alex Rivera</span>
<span className="text-neutral-500 text-xs mt-1">Tech Creator (1.2M Subs)</span>
</div>
</div>
</section>

<section className="reveal overflow-hidden pt-24 pb-24 relative" id="contact">
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl text-white font-medium tracking-tighter mb-6">Ready to create?</h2>
<p className="text-neutral-400 font-light mb-10 text-lg">Let's discuss how we can elevate your content and reach your audience effectively.</p>
<form className="text-left bg-white/[0.02] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wide">Name</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" type="text"/>
</div>
<div className="">
<label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wide">Email</label>
<input className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="mb-6">
<label className="block text-xs text-neutral-400 mb-2 uppercase tracking-wide">Project Details</label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors h-32" placeholder="Tell me about your channel, style, and goals..."></textarea>
</div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">

<label className="flex items-center gap-2 cursor-pointer group">
<div className="w-4 h-4 rounded border border-white/20 bg-neutral-900 group-hover:border-indigo-500 transition-colors relative flex items-center justify-center">
<input className="peer appearance-none absolute inset-0 w-full h-full cursor-pointer" type="checkbox"/>
<iconify-icon className="text-indigo-400 opacity-0 peer-checked:opacity-100 text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-neutral-500 selection:bg-none">I agree to the privacy policy</span>
</label>
</div>
<button className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-lg font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" type="button">
                        Send Message
                        <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer className="pt-12 pb-8 border-t border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="flex items-center justify-center text-[10px] text-white tracking-tighter bg-white/10 w-6 h-6 rounded">AS</span>
<span className="text-sm text-neutral-500">© 2026 Aura Studio.</span>
</div>
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:youtube" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="mt-8 text-center md:text-left">
<p className="text-[10px] text-neutral-700 uppercase tracking-widest font-medium">Designed with precision.</p>
</div>
</div>
</footer>


    </>
  );
}
