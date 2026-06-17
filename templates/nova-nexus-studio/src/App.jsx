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
      
<div className="museum-frame shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),1px_1px_1px_-0.5px_rgba(0,0,0,0.06),3px_3px_3px_-1.5px_rgba(0,0,0,0.06),_6px_6px_6px_-3px_rgba(0,0,0,0.06),12px_12px_12px_-6px_rgba(0,0,0,0.06),24px_24px_24px_-12px_rgba(0,0,0,0.06)]">


<header className="flex flex-row justify-between items-center mb-10 md:mb-20 flex-shrink-0 sticky top-0 md:relative z-50 bg-[#FAF8F3] md:bg-transparent py-4 md:py-0 w-full border-b md:border-none border-gray-200">
<div className="flex justify-between w-full md:w-auto items-center">
<div className="font-sans text-xs uppercase tracking-widest leading-relaxed">
<span className="font-semibold text-base block md:inline">Nova Nexus</span>
</div>

<button className="md:hidden text-2xl p-1 text-ink-black flex items-center justify-center">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
<nav className="hidden md:flex gap-8 items-center">
<a className="nav-item" href="#">Services</a>
<a className="nav-item" href="#">Projects</a>
<a className="nav-item" href="#">Pricing</a>
<a className="nav-item" href="#">FAQ</a>
</nav>
<a className="btn-gold hidden md:inline-flex rounded-full px-6 py-3 text-xs" href="#">Start Project</a>
</header>
<main className="w-full mx-auto">

<section className="flex flex-col items-center justify-center text-center mb-20 md:mb-32 flex-shrink-0 relative mt-4 md:mt-0">
<p className="font-display italic text-gold text-lg md:text-2xl mb-6 animate-[slideUp_1s_ease_forwards]">Elevate Your Experience</p>
<h1 className="hero-title mb-8 leading-none">NEXUS</h1>
<div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 animate-[slideUp_1.4s_ease_forwards] opacity-0" style={{animationDelay: '0.5s'}}>
<p className="font-sans text-xs md:text-sm text-gray-500 max-w-md leading-relaxed text-center md:text-left">
                        We create visceral digital products. Experienced in crafting emotional connections and user-friendly designs that push new heights.
                    </p>
<a className="group flex items-center gap-2 font-sans text-xs uppercase tracking-widest hover:text-gold transition-colors" href="#work">
                        Scroll Down 
                        <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
</section>


<section className="masonry-gallery" id="work">
<div className="gallery-card aspect-[3/4]">
<img alt="Mobile Experience" className="gallery-image object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1a05190-ef94-4378-9bb1-c8906ae6cb23_1600w.jpg"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Mobile App</h3>
<p className="font-sans text-xs text-gray-300">Seamless wallet experience.</p>
</div>
</div>
<div className="gallery-card aspect-[4/3]">
<img alt="Exhibition" className="gallery-image object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe193e72-4704-449d-afd8-3798ebc44c49_1600w.jpg"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Exhibition Site</h3>
<p className="font-sans text-xs text-gray-300">Branding &amp; Copywriting.</p>
</div>
</div>
<div className="gallery-card aspect-square">
<img alt="Abstract" className="gallery-image object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe97dd19-49ad-41dc-80a7-ee01b45ae7b8_1600w.jpg"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Identity</h3>
<p className="font-sans text-xs text-gray-300">Visual Voice &amp; Art Direction.</p>
</div>
</div>
<div className="gallery-card aspect-[3/4]">
<img alt="Crypto" className="gallery-image object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11086c9b-dc51-4585-8815-64de5902df82_1600w.jpg"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Finance</h3>
<p className="font-sans text-xs text-gray-300">Dashboard Analytics.</p>
</div>
</div>
<div className="gallery-card aspect-square">
<img alt="Tech" className="gallery-image object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fadf94b1-b398-496f-b9fe-3baf74375bcc_1600w.jpg"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Development</h3>
<p className="font-sans text-xs text-gray-300">Code that engages.</p>
</div>
</div>
<div className="gallery-card aspect-[4/5]">
<img alt="Team" className="gallery-image grayscale object-cover w-full h-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b69128d6-8393-4270-a8e7-2c933bf498bf_1600w.webp"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Culture</h3>
<p className="font-sans text-xs text-gray-300">Behind the scenes.</p>
</div>
</div>
</section>

<section className="mb-20 md:mb-32 px-2 md:px-0">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
<div>
<h2 className="font-display text-3xl md:text-5xl italic tracking-tight mb-4">Our Expertise</h2>
<p className="font-sans text-sm text-gray-500 max-w-sm leading-relaxed">Bringing ideas to life through design. Dedicated to creating exceptional user experiences.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-gold transition-colors" href="#">View All Services <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">

<div className="feature-card group hover:bg-[#1A1818] hover:text-white transition-colors duration-500">
<div className="w-16 h-16 rounded-full border border-gray-200 group-hover:border-gray-700 flex flex-shrink-0 items-center justify-center text-gold text-2xl mb-6 md:mb-0">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div className="flex-1 md:pl-4">
<div className="font-display text-xl md:text-2xl italic mb-2 tracking-tight">Identity Design</div>
<p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed max-w-lg">
                                Crafting distinctive visual voices for modern brands. Logo, color systems, and brand guidelines that stand out.
                            </p>
</div>
<div className="mt-8 md:mt-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-100 group-hover:border-gray-800 pt-4 md:pt-0 md:pl-8 flex justify-between md:justify-center items-center">
<span className="text-xs uppercase tracking-widest opacity-60 md:hidden">Learn More</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="feature-card group hover:bg-[#1A1818] hover:text-white transition-colors duration-500">
<div className="w-16 h-16 rounded-full border border-gray-200 group-hover:border-gray-700 flex flex-shrink-0 items-center justify-center text-gold text-2xl mb-6 md:mb-0">
<iconify-icon icon="solar:laptop-minimalistic-linear"></iconify-icon>
</div>
<div className="flex-1 md:pl-4">
<div className="font-display text-xl md:text-2xl italic mb-2 tracking-tight">Web Experience</div>
<p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed max-w-lg">
                                Engaging websites that tell your story. Immersive interactions and responsive layouts optimized for all devices.
                            </p>
</div>
<div className="mt-8 md:mt-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-100 group-hover:border-gray-800 pt-4 md:pt-0 md:pl-8 flex justify-between md:justify-center items-center">
<span className="text-xs uppercase tracking-widest opacity-60 md:hidden">Learn More</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="feature-card group hover:bg-[#1A1818] hover:text-white transition-colors duration-500">
<div className="w-16 h-16 rounded-full border border-gray-200 group-hover:border-gray-700 flex flex-shrink-0 items-center justify-center text-gold text-2xl mb-6 md:mb-0">
<iconify-icon icon="solar:code-circle-linear"></iconify-icon>
</div>
<div className="flex-1 md:pl-4">
<div className="font-display text-xl md:text-2xl italic mb-2 tracking-tight">Development</div>
<p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed max-w-lg">
                                Robust code that scales. Frontend and backend solutions for complex digital products and applications.
                            </p>
</div>
<div className="mt-8 md:mt-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-100 group-hover:border-gray-800 pt-4 md:pt-0 md:pl-8 flex justify-between md:justify-center items-center">
<span className="text-xs uppercase tracking-widest opacity-60 md:hidden">Learn More</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="mb-20 md:mb-32 px-2 md:px-0">
<div className="text-center mb-16">
<h2 className="font-display text-3xl md:text-5xl italic tracking-tight mb-4">Investment</h2>
<p className="font-sans text-sm text-gray-500 max-w-lg mx-auto">Transparent pricing for world-class design and development.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

<div className="p-8 border border-gray-200 rounded-2xl bg-white hover:border-gold transition-colors duration-300">
<div className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Starter</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-display font-medium tracking-tight">$2,900</span>
<span className="text-sm text-gray-400">/project</span>
</div>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">Perfect for early-stage startups needing a solid visual foundation.</p>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Brand Identity</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Landing Page</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Mobile Responsive</li>
<li className="flex items-center gap-3 text-gray-300"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> CMS Integration</li>
</ul>
<a className="btn-gold w-full text-center" href="#">Get Started</a>
</div>

<div className="p-8 border border-gray-200 rounded-2xl bg-[#1A1818] text-white relative transform md:-translate-y-4 shadow-xl">
<div className="absolute top-0 right-0 bg-gold text-[#1A1818] text-[0.6rem] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-lg rounded-tr-lg">Popular</div>
<div className="font-sans text-xs font-bold uppercase tracking-widest text-gold mb-4">Professional</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-display font-medium tracking-tight">$5,500</span>
<span className="text-sm text-gray-400">/project</span>
</div>
<p className="text-sm text-gray-400 mb-8 leading-relaxed">Comprehensive solution for growing businesses needing scale.</p>
<ul className="space-y-4 mb-8 text-sm text-gray-300">
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Full Identity System</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> 5-Page Website</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> CMS Integration</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> SEO Optimization</li>
</ul>
<a className="btn-gold w-full text-center bg-gold border-gold hover:bg-white hover:text-black" href="#">Select Plan</a>
</div>

<div className="p-8 border border-gray-200 rounded-2xl bg-white hover:border-gold transition-colors duration-300">
<div className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Enterprise</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-display font-medium tracking-tight">Custom</span>
</div>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">Tailored solutions for large-scale applications and platforms.</p>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Design System</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Full Stack Dev</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Priority Support</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Analytics Dashboard</li>
</ul>
<a className="btn-gold w-full text-center" href="#">Contact Sales</a>
</div>
</div>
</section>

<section className="mb-20 md:mb-32">
<div className="bg-[#F3F0E9] rounded-[24px] p-8 md:p-16 relative overflow-hidden">

<div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
<iconify-icon className="text-9xl" icon="solar:quote-up-square-linear"></iconify-icon>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<div className="flex gap-1 text-gold mb-6 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<h3 className="font-display text-2xl md:text-3xl italic leading-tight mb-8">
                                "Nova Nexus transformed our vague concept into a digital masterpiece. The attention to detail is simply unmatched in the industry."
                            </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/825d51b6-17fd-4fb3-9acc-6e49cccef80e_320w.jpg"/>
</div>
<div>
<div className="font-bold text-sm tracking-wide">Sarah Jenkins</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">CTO, Vertex Logic</div>
</div>
</div>
</div>
<div className="hidden md:grid grid-cols-1 gap-4">

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<p className="text-sm text-gray-600 mb-4 leading-relaxed">"Their approach to minimal design helped us increase conversion by 40%. Absolutely stellar work."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/85d1a045-0b29-49e3-ac10-a754b5fca03f_320w.jpg"/>
</div>
<div className="text-xs font-bold">Marcus Chen <span className="text-gray-400 font-normal">— Founder</span></div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm opacity-80">
<p className="text-sm text-gray-600 mb-4 leading-relaxed">"Fast, reliable, and incredibly creative. They didn't just build a site, they built a brand."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc75d62c-68d8-4593-88cb-73960a20b022_320w.webp"/>
</div>
<div className="text-xs font-bold">Elena Rodriguez <span className="text-gray-400 font-normal">— Art Director</span></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-20 md:mb-32 max-w-4xl mx-auto px-2 md:px-0">
<div className="text-center mb-12">
<h2 className="font-display text-3xl md:text-5xl italic tracking-tight mb-4">Common Questions</h2>
</div>
<div className="border-t border-gray-200">
<details className="group border-b border-gray-200">
<summary className="flex justify-between items-center py-6 text-lg md:text-xl font-display cursor-pointer hover:text-gold transition-colors">
<span>What is your typical timeline?</span>
<iconify-icon className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-gray-500 leading-relaxed max-w-2xl">
                            Our typical timeline for a branding and web project is 4-8 weeks. This allows sufficient time for research, design iterations, and development to ensure perfection.
                        </div>
</details>
<details className="group border-b border-gray-200">
<summary className="flex justify-between items-center py-6 text-lg md:text-xl font-display cursor-pointer hover:text-gold transition-colors">
<span>Do you work with startups?</span>
<iconify-icon className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-gray-500 leading-relaxed max-w-2xl">
                            Absolutely. We love the energy of early-stage companies. Our "Starter" package is specifically designed to get startups off the ground with professional assets.
                        </div>
</details>
<details className="group border-b border-gray-200">
<summary className="flex justify-between items-center py-6 text-lg md:text-xl font-display cursor-pointer hover:text-gold transition-colors">
<span>How do you handle post-launch support?</span>
<iconify-icon className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-gray-500 leading-relaxed max-w-2xl">
                            We offer ongoing maintenance packages to ensure your digital product remains secure and up-to-date. We're partners for the long haul.
                        </div>
</details>
<details className="group border-b border-gray-200">
<summary className="flex justify-between items-center py-6 text-lg md:text-xl font-display cursor-pointer hover:text-gold transition-colors">
<span>What technologies do you use?</span>
<iconify-icon className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-gray-500 leading-relaxed max-w-2xl">
                            We specialize in modern stacks including React, Vue, Tailwind CSS for frontend, and Node.js or Python for backend needs. We choose the best tool for the job.
                        </div>
</details>
</div>
</section>

<footer className="pt-12 md:pt-16 border-t border-[var(--ink-black)] mt-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr] gap-10 md:gap-24 mb-16">

<div>
<h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-3">
<li><a className="nav-item text-gray-600 hover:text-gold text-sm" href="#">Services</a></li>
<li><a className="nav-item text-gray-600 hover:text-gold text-sm" href="#">Case Studies</a></li>
<li><a className="nav-item text-gray-600 hover:text-gold text-sm" href="#">Pricing</a></li>
<li><a className="nav-item text-gray-600 hover:text-gold text-sm" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-6">Newsletter</h4>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Join our circle for exclusive access to new insights.
                        </p>
<form className="flex items-end gap-2">
<input className="newsletter-input text-sm" placeholder="email@example.com" type="email"/>
<button className="border-b border-ink pb-2 font-bold text-sm hover:text-gold transition-colors" type="submit">JOIN</button>
</form>
<div className="mt-8">
<h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-4">Follow</h4>
<div className="flex gap-4">
<a className="text-lg hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-lg hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:basketball-linear"></iconify-icon></a>
<a className="text-lg hover:text-gold transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect"></iconify-icon></a>
</div>
</div>
</div>

<div>
<h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-6">Studio</h4>
<p className="text-sm text-gray-600 mb-4">123 Design Avenue, Creative District, New York, 10012</p>
<div className="w-full h-40 bg-gray-200 rounded-xl overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<img alt="Map" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a7bc8d0c-e3b7-4b4f-a7d7-51c4c6ed8b20_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white p-2 rounded-full shadow-lg text-ink flex items-center justify-center">
<iconify-icon icon="solar:map-point-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-[0.65rem] text-gray-400 uppercase tracking-widest">
<span className="mb-2 md:mb-0">© 2024 Nova Nexus. All Rights Reserved.</span>
<div className="flex gap-6">
<span>#NovaNexus</span>
<span>Design by Nova</span>
</div>
</div>
</footer>
</main>
</div>

    </>
  );
}
