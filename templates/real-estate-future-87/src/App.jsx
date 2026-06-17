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



        lucide.createIcons();

        function handleForm(e) {
            e.preventDefault();
            const btn = document.getElementById('submitBtn');
            const originalContent = btn.innerHTML;
            
            // Loading State
            btn.innerHTML = '<span class="animate-pulse">Sending...</span>';
            btn.classList.add('opacity-75', 'cursor-not-allowed');
            
            // Simulate API Call
            setTimeout(() => {
                // Success State
                btn.innerHTML = `
                    <span>Message Sent</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                `;
                btn.classList.remove('bg-[#ff4d1c]', 'hover:bg-[#ff3300]', 'opacity-75', 'cursor-not-allowed');
                btn.classList.add('bg-green-600', 'hover:bg-green-700');
                
                // Reset form
                e.target.reset();

                // Reset Button after delay
                setTimeout(() => {
                    btn.innerHTML = originalContent;
                    btn.classList.remove('bg-green-600', 'hover:bg-green-700');
                    btn.classList.add('bg-[#ff4d1c]', 'hover:bg-[#ff3300]');
                    lucide.createIcons(); // Re-init icon inside button
                }, 3000);
            }, 1500);
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
      

<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 transition-all duration-300 backdrop-blur-sm bg-gradient-to-b from-black/50 to-transparent">

<button className="group flex items-center gap-2 text-xs uppercase tracking-widest hover:text-[#ff4d1c] transition-colors">
<span className="block w-6 h-[1.5px] bg-white group-hover:bg-[#ff4d1c] transition-colors"></span>
            Menu
        </button>

<div className="absolute left-1/2 -translate-x-1/2 font-semibold tracking-[0.2em] text-sm uppercase">
            Kontako
        </div>

<a className="bg-[#ff4d1c] hover:bg-[#ff3300] text-white text-xs font-semibold px-6 py-3 rounded-full uppercase tracking-wider transition-transform hover:scale-105" href="#contact">
            Contact Us
        </a>
</header>

<section className="relative h-screen w-full overflow-hidden flex flex-col justify-end pb-12 md:pb-24">

<div className="absolute inset-0 z-0">
<img alt="Luxury Glass House" className="w-full h-full object-cover brightness-[0.7]" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-[#0f0f0f]/40 to-transparent"></div>
</div>

<div className="relative z-10 px-6 md:px-12 w-full max-w-screen-2xl mx-auto flex flex-col md:flex-row items-end justify-between gap-8">
<div className="max-w-4xl">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold uppercase leading-[0.9] tracking-tighter text-white mb-6">
                    The Future <br/>
                    of Home Living<span className="text-[#ff4d1c]">.</span>
</h1>
<p className="text-neutral-300 text-sm md:text-base max-w-md font-light leading-relaxed">
                    Trust us with your dreams! We are ready to help you build the dream property that will be your future sanctuary.
                </p>
</div>

<a className="group relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-[#ff4d1c] rounded-full transition-transform hover:scale-110 hover:rotate-45" href="#vision">
<i className="w-8 h-8 text-white stroke-[1.5]" data-lucide="arrow-up-right"></i>
</a>
</div>
</section>

<section className="bg-[#f5f5f5] text-[#0f0f0f] py-24 md:py-32 px-6 md:px-12" id="vision">
<div className="max-w-4xl mx-auto text-center">
<span className="text-[#ff4d1c] text-xs font-semibold tracking-widest uppercase mb-8 block">Fulfil Your Dreams</span>
<h2 className="text-2xl md:text-4xl lg:text-5xl font-medium leading-tight tracking-tight mb-12">
                “Kontako is committed to providing the best service in meeting your property needs for your future.”
            </h2>
<div className="flex flex-col items-center gap-4">
<img alt="Founder" className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
<div className="text-center">
<p className="text-sm font-semibold text-[#0f0f0f]">Kianna Curtis</p>
<p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">Founder of Kontako</p>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f5f5] text-[#0f0f0f] pb-24 md:pb-32 px-6 md:px-12">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

<div className="lg:col-span-4 flex flex-col pt-12">
<p className="text-[#ff4d1c] text-xs font-semibold tracking-widest uppercase mb-8">Our Advantages</p>
<div className="flex flex-col border-t border-neutral-300">
<div className="group py-6 border-b border-neutral-300 flex justify-between items-center cursor-pointer hover:pl-4 transition-all duration-300">
<span className="text-xs md:text-sm font-medium uppercase text-neutral-400 group-hover:text-black">Modern Architecture &amp; Tech</span>
</div>
<div className="group py-6 border-b border-neutral-300 flex justify-between items-center cursor-pointer hover:pl-4 transition-all duration-300">
<span className="text-xs md:text-sm font-medium uppercase text-neutral-400 group-hover:text-black">Efficient Layout Design</span>
</div>
<div className="py-6 border-b border-neutral-300 flex justify-between items-center bg-neutral-100 -mx-4 px-4 shadow-sm">
<span className="text-xs md:text-sm font-semibold uppercase text-black">Short Implementation Time</span>
<i className="w-4 h-4 text-[#ff4d1c]" data-lucide="arrow-right"></i>
</div>
<div className="group py-6 border-b border-neutral-300 flex justify-between items-center cursor-pointer hover:pl-4 transition-all duration-300">
<span className="text-xs md:text-sm font-medium uppercase text-neutral-400 group-hover:text-black">Years of Guarantee</span>
</div>
<div className="group py-6 border-b border-neutral-300 flex justify-between items-center cursor-pointer hover:pl-4 transition-all duration-300">
<span className="text-xs md:text-sm font-medium uppercase text-neutral-400 group-hover:text-black">Modular Architecture</span>
</div>
</div>
</div>

<div className="lg:col-span-8 relative group overflow-hidden">
<img alt="Modern House Detail" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<h3 className="absolute top-12 right-12 text-white text-3xl md:text-5xl font-semibold uppercase text-right leading-none tracking-tight max-w-lg">
                    Take a big step<br/>into the future<br/>of living
                </h3>
<div className="absolute bottom-12 left-12 w-16 h-16 border border-white/30 flex items-center justify-center backdrop-blur-md">
<span className="text-white text-xs font-mono">04</span>
</div>
</div>
</div>
</section>

<section className="bg-[#141414] py-24 md:py-32 px-6 md:px-12 border-t border-white/5">
<div className="max-w-screen-2xl mx-auto">
<span className="text-[#ff4d1c] text-xs font-semibold tracking-widest uppercase mb-12 block">Innovation On Multiple Levels</span>
<div className="flex flex-col lg:flex-row h-auto lg:h-[600px] gap-0 border-t border-b border-white/10">

<div className="flex-1 border-r border-white/10 p-8 md:p-12 flex flex-col justify-between relative group">
<div>
<h3 className="text-3xl md:text-5xl font-semibold uppercase leading-none tracking-tight mb-4 text-white">Comfort <br/>&amp; Space</h3>
</div>
<div className="relative w-full h-64 mt-8 overflow-hidden">
<img className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="flex justify-between items-end mt-8">
<span className="text-white/40 text-sm font-mono">01</span>
<p className="text-xs text-white/60 max-w-[200px] text-right">Alkan house is an 84 m2 residential space with optimal layout.</p>
</div>
</div>

<div className="w-full lg:w-20 border-b lg:border-b-0 lg:border-r border-white/10 relative hover:bg-white/5 transition-colors cursor-pointer group flex lg:block justify-between items-center p-6 lg:p-0">
<span className="lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2 text-white/40 font-mono text-sm">02</span>
<span className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Quality &amp; Craftsmanship</span>
</div>
<div className="w-full lg:w-20 border-b lg:border-b-0 lg:border-r border-white/10 relative hover:bg-white/5 transition-colors cursor-pointer group flex lg:block justify-between items-center p-6 lg:p-0">
<span className="lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2 text-white/40 font-mono text-sm">03</span>
<span className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Web3 Ownership</span>
</div>
<div className="w-full lg:w-20 border-b lg:border-b-0 lg:border-r border-white/10 relative hover:bg-white/5 transition-colors cursor-pointer group flex lg:block justify-between items-center p-6 lg:p-0">
<span className="lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2 text-white/40 font-mono text-sm">04</span>
<span className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Energy Net Zero</span>
</div>
<div className="w-full lg:w-20 border-b lg:border-b-0 lg:border-r border-white/10 relative hover:bg-white/5 transition-colors cursor-pointer group flex lg:block justify-between items-center p-6 lg:p-0">
<span className="lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2 text-white/40 font-mono text-sm">05</span>
<span className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Marketplace</span>
</div>
<div className="w-full lg:w-20 relative hover:bg-white/5 transition-colors cursor-pointer group flex lg:block justify-between items-center p-6 lg:p-0">
<span className="lg:absolute lg:top-8 lg:left-1/2 lg:-translate-x-1/2 text-white/40 font-mono text-sm">06</span>
<span className="lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:-rotate-90 whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">Affordable Prices</span>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f5f5] text-[#0f0f0f] py-24 md:py-32 px-6 md:px-12">
<div className="max-w-screen-2xl mx-auto">
<span className="text-[#ff4d1c] text-xs font-semibold tracking-widest uppercase mb-12 block">Our Projects</span>

<div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-neutral-300 pb-8 mb-12">
<h2 className="text-4xl md:text-6xl font-medium uppercase tracking-tight">Pedro Residence</h2>
<div className="mt-6 md:mt-0 flex gap-6 items-center">
<p className="text-xs md:text-sm text-neutral-500 max-w-xs text-right">
                        Pedro Residence is a comfortable and elegant residence, offering spectacular views from its windows.
                    </p>
<div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-[#ff4d1c] hover:border-[#ff4d1c] hover:text-white transition-all cursor-pointer">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
<div className="md:col-span-3 h-64 md:h-96 relative overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<span className="absolute top-4 left-4 text-xs font-mono text-white mix-blend-difference">01</span>
</div>
<div className="md:col-span-4 h-64 md:h-96 relative overflow-hidden mt-0 md:mt-12 group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<span className="absolute top-4 left-4 text-xs font-mono text-white mix-blend-difference">02</span>
</div>
<div className="md:col-span-5 h-64 md:h-96 relative overflow-hidden group">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<span className="absolute top-4 left-4 text-xs font-mono text-white mix-blend-difference">03</span>
</div>
</div>

<div className="flex flex-col border-t border-neutral-300">
<a className="group py-10 border-b border-neutral-300 flex justify-between items-center" href="#">
<h3 className="text-2xl md:text-4xl font-light text-neutral-400 uppercase group-hover:text-black group-hover:font-normal transition-all tracking-tight">Sunset Plaza Drive</h3>
<span className="text-sm font-mono text-neutral-400">02</span>
</a>
<a className="group relative py-10 border-b border-neutral-300 flex justify-between items-center overflow-hidden" href="#">
<h3 className="relative z-10 text-2xl md:text-4xl font-light text-neutral-400 uppercase group-hover:text-white group-hover:font-normal transition-all tracking-tight mix-blend-difference">High-End Villa Overlooking</h3>
<span className="relative z-10 text-sm font-mono text-neutral-400 group-hover:text-white mix-blend-difference">03</span>
<div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<img className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-black/40"></div>
</div>
</a>
<a className="group py-10 border-b border-neutral-300 flex justify-between items-center" href="#">
<h3 className="text-2xl md:text-4xl font-light text-neutral-400 uppercase group-hover:text-black group-hover:font-normal transition-all tracking-tight">Cliffwood Avenue</h3>
<span className="text-sm font-mono text-neutral-400">04</span>
</a>
</div>
</div>
</section>

<section className="bg-[#f5f5f5] text-[#0f0f0f] pb-24 md:pb-32 px-6 md:px-12">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#ff4d1c] text-xs font-semibold tracking-widest uppercase mb-4 block">FAQs</span>
<h2 className="text-3xl md:text-4xl font-medium uppercase tracking-tight">Common Questions</h2>
</div>
<div className="space-y-4">
<details className="group border-b border-neutral-300 pb-4">
<summary className="flex justify-between items-center cursor-pointer py-4 list-none">
<span className="text-lg md:text-xl font-light group-hover:text-[#ff4d1c] transition-colors">Can the house be modified?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-500 text-sm md:text-base leading-relaxed mt-2 pl-0">
                        No. Without losing the warranty, modifications are not allowed and any modifications made will void the warranty on our workmanship. However, custom furniture can be installed.
                    </div>
</details>
<details className="group border-b border-neutral-300 pb-4">
<summary className="flex justify-between items-center cursor-pointer py-4 list-none">
<span className="text-lg md:text-xl font-light group-hover:text-[#ff4d1c] transition-colors">How does the construction process work?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-500 text-sm md:text-base leading-relaxed mt-2">
                        We begin with site analysis, followed by modular fabrication in our facility, and finally, rapid on-site assembly.
                    </div>
</details>
<details className="group border-b border-neutral-300 pb-4">
<summary className="flex justify-between items-center cursor-pointer py-4 list-none">
<span className="text-lg md:text-xl font-light group-hover:text-[#ff4d1c] transition-colors">Does the building site need to be equipped?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-500 text-sm md:text-base leading-relaxed mt-2">
                        Yes, basic foundation and utility connections must be prepared according to our technical specifications before delivery.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-[#141414] py-24 md:py-32 px-6 md:px-12 relative overflow-hidden border-t border-white/5" id="contact">
<div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-between">
<div>
<h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold uppercase leading-[0.9] tracking-tighter text-white mb-8">
                        Let's build <br /> your future<span className="text-[#ff4d1c]">.</span>
</br></h2>
<p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed max-w-md">
                        Have a project in mind? Fill out the form and our team of architects and engineers will get back to you within 24 hours.
                    </p>
</div>
<div className="space-y-6 mt-12 lg:mt-0">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#ff4d1c]">
<i className="w-4 h-4" data-lucide="mail"></i>
</div>
<div>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Email Us</p>
<a className="text-white hover:text-[#ff4d1c] transition-colors" href="mailto:hello@kontako.com">hello@kontako.com</a>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#ff4d1c]">
<i className="w-4 h-4" data-lucide="phone"></i>
</div>
<div>
<p className="text-xs text-neutral-500 uppercase tracking-widest">Call Us</p>
<a className="text-white hover:text-[#ff4d1c] transition-colors" href="tel:+1234567890">+1 (555) 123-4567</a>
</div>
</div>
</div>
</div>

<div className="bg-[#1a1a1a] p-8 md:p-10 border border-white/5 rounded-2xl shadow-2xl">
<form className="space-y-6" onsubmit="handleForm(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold" htmlFor="name">Name</label>
<input className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] focus:ring-1 focus:ring-[#ff4d1c] transition-all placeholder:text-neutral-600" id="name" placeholder="John Doe" required="" type="text"/>
</div>

<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold" htmlFor="email">Email</label>
<input className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] focus:ring-1 focus:ring-[#ff4d1c] transition-all placeholder:text-neutral-600" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>

<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold" htmlFor="phone">Phone</label>
<input className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] focus:ring-1 focus:ring-[#ff4d1c] transition-all placeholder:text-neutral-600" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>

<div className="space-y-3">
<span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold">Project Type</span>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<label className="cursor-pointer">
<input checked="" className="custom-radio hidden" name="project_type" type="radio" value="residential"/>
<div className="text-center py-2 px-1 border border-white/10 rounded-md text-xs text-neutral-400 hover:border-white/30 transition-all">Residential</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="project_type" type="radio" value="commercial"/>
<div className="text-center py-2 px-1 border border-white/10 rounded-md text-xs text-neutral-400 hover:border-white/30 transition-all">Commercial</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="project_type" type="radio" value="renovation"/>
<div className="text-center py-2 px-1 border border-white/10 rounded-md text-xs text-neutral-400 hover:border-white/30 transition-all">Renovation</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="project_type" type="radio" value="other"/>
<div className="text-center py-2 px-1 border border-white/10 rounded-md text-xs text-neutral-400 hover:border-white/30 transition-all">Other</div>
</label>
</div>
</div>

<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500 font-semibold" htmlFor="message">Message</label>
<textarea className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#ff4d1c] focus:ring-1 focus:ring-[#ff4d1c] transition-all placeholder:text-neutral-600 resize-none" id="message" placeholder="Tell us about your project details..." required="" rows="4"></textarea>
</div>

<button className="w-full bg-[#ff4d1c] hover:bg-[#ff3300] text-white font-semibold py-4 rounded-lg uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 mt-4 group" id="submitBtn" type="submit">
<span>Send Message</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-[#0f0f0f] border-t border-white/10 pt-16 pb-8 px-6 md:px-12 text-white">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
<div className="max-w-sm">
<p className="font-semibold tracking-[0.2em] text-sm uppercase mb-6">Kontako</p>
<h3 className="text-2xl font-medium uppercase text-neutral-400 leading-tight">
                    The Future of <br/> <span className="text-white">Home Living</span>
</h3>
</div>
<div className="flex gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms &amp; Condition</a>
<a className="hover:text-white transition-colors" href="#">About Us</a>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4d1c] transition-colors group" href="#">
<i className="w-4 h-4 text-white/60 group-hover:text-white" data-lucide="instagram"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4d1c] transition-colors group" href="#">
<i className="w-4 h-4 text-white/60 group-hover:text-white" data-lucide="facebook"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4d1c] transition-colors group" href="#">
<i className="w-4 h-4 text-white/60 group-hover:text-white" data-lucide="twitter"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#ff4d1c] transition-colors group" href="#">
<i className="w-4 h-4 text-white/60 group-hover:text-white" data-lucide="youtube"></i>
</a>
</div>
</div>
<div className="max-w-screen-2xl mx-auto mt-16 pt-8 border-t border-white/5 text-center md:text-right">
<p className="text-[10px] text-neutral-600 uppercase tracking-wider">© 2023 Skywinks Inc. All Rights Reserved.</p>
</div>
</footer>


    </>
  );
}
