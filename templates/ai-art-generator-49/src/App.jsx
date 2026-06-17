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
<span className="font-semibold text-base block md:inline">LoveArt.ai</span>
</div>
<button className="md:hidden text-2xl p-1 text-ink-black flex items-center justify-center">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
<nav className="hidden md:flex gap-8 items-center">
<a className="nav-item" href="#">Home</a>
<a className="nav-item" href="#">Style Explorer</a>
<a className="nav-item" href="#gallery">Gallery</a>
<a className="nav-item" href="#pricing">Pricing</a>
</nav>
<a className="btn-gold hidden md:inline-flex rounded-full px-6 py-3 text-xs" href="#">Launch Studio</a>
</header>
<main className="w-full mx-auto">

<section className="flex flex-col items-center justify-center text-center mb-20 md:mb-32 flex-shrink-0 relative mt-4 md:mt-0">
<p className="font-display italic text-gold text-lg md:text-2xl mb-6 animate-[slideUp_1s_ease_forwards]">Gallery-quality art</p>
<h1 className="hero-title mb-8 leading-none">LOVEART</h1>
<div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 animate-[slideUp_1.4s_ease_forwards] opacity-0" style={{animationDelay: '0.5s'}}>
<p className="font-sans text-xs md:text-sm text-gray-500 max-w-md leading-relaxed text-center md:text-left">
                        No Prompts Required. We create visceral digital masterpieces. Experience effortless art generation that connects emotionally and pushes creative boundaries.
                    </p>
<a className="group flex items-center gap-2 font-sans text-xs uppercase tracking-widest hover:text-gold transition-colors" href="#studio">
                        Start Creating for Free 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="masonry-gallery" id="gallery">
<div className="gallery-card aspect-[3/4]">
<img alt="Surreal Abstract Art" className="gallery-image object-cover w-full h-auto" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Surrealism</h3>
<p className="font-sans text-xs text-gray-300">Fluid dynamics &amp; abstract concepts.</p>
</div>
</div>
<div className="gallery-card aspect-[4/3]">
<img alt="Vibrant Digital Art" className="gallery-image object-cover w-full h-auto" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Vibrant Digital</h3>
<p className="font-sans text-xs text-gray-300">High-saturation aesthetic bursts.</p>
</div>
</div>
<div className="gallery-card aspect-square">
<img alt="Cyberpunk Aesthetic" className="gallery-image object-cover w-full h-auto" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Cyberpunk</h3>
<p className="font-sans text-xs text-gray-300">Neon-lit futuristic dimensions.</p>
</div>
</div>
<div className="gallery-card aspect-[3/4]">
<img alt="Classical Oil Style" className="gallery-image object-cover w-full h-auto" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Oil Canvas</h3>
<p className="font-sans text-xs text-gray-300">Renaissance meets machine learning.</p>
</div>
</div>
<div className="gallery-card aspect-square">
<img alt="Ethereal Lighting" className="gallery-image object-cover w-full h-auto" src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Ethereal</h3>
<p className="font-sans text-xs text-gray-300">Dreamlike atmospheres.</p>
</div>
</div>
<div className="gallery-card aspect-[4/5]">
<img alt="3D Masterpiece" className="gallery-image object-cover w-full h-auto" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="gallery-overlay">
<h3 className="font-display text-2xl md:text-3xl italic text-white mb-2 tracking-tight">Hyper-realistic</h3>
<p className="font-sans text-xs text-gray-300">Photorealistic depth and detail.</p>
</div>
</div>
</section>

<section className="mb-20 md:mb-32 px-2 md:px-0" id="studio">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
<div>
<h2 className="font-display text-3xl md:text-5xl italic tracking-tight mb-4">The Process</h2>
<p className="font-sans text-sm text-gray-500 max-w-sm leading-relaxed">From blank state to gallery-ready masterpiece in seconds. Engineered for pure creativity.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:text-gold transition-colors" href="#">Start Creating <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">

<div className="feature-card group hover:bg-[#1A1818] hover:text-white transition-colors duration-500">
<div className="w-16 h-16 rounded-full border border-gray-200 group-hover:border-gray-700 flex flex-shrink-0 items-center justify-center text-gold text-2xl mb-6 md:mb-0">
<iconify-icon icon="solar:gallery-linear"></iconify-icon>
</div>
<div className="flex-1 md:pl-4">
<div className="font-display text-xl md:text-2xl italic mb-2 tracking-tight">1. Choose Canvas</div>
<p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed max-w-lg">
                                Select your aspect ratio and dimensions. Whether it's a cinematic 16:9 wallpaper or a 4:5 social media portrait, your canvas awaits.
                            </p>
</div>
<div className="mt-8 md:mt-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-100 group-hover:border-gray-800 pt-4 md:pt-0 md:pl-8 flex justify-between md:justify-center items-center">
<span className="text-xs uppercase tracking-widest opacity-60 md:hidden">Learn More</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="feature-card group hover:bg-[#1A1818] hover:text-white transition-colors duration-500">
<div className="w-16 h-16 rounded-full border border-gray-200 group-hover:border-gray-700 flex flex-shrink-0 items-center justify-center text-gold text-2xl mb-6 md:mb-0">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<div className="flex-1 md:pl-4">
<div className="font-display text-xl md:text-2xl italic mb-2 tracking-tight">2. Select Vibe</div>
<p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed max-w-lg">
                                Browse our curated Style Explorer. Pick from hyper-realistic, neo-impressionism, dark fantasy, or let the AI blend aesthetics for you.
                            </p>
</div>
<div className="mt-8 md:mt-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-100 group-hover:border-gray-800 pt-4 md:pt-0 md:pl-8 flex justify-between md:justify-center items-center">
<span className="text-xs uppercase tracking-widest opacity-60 md:hidden">Learn More</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="feature-card group hover:bg-[#1A1818] hover:text-white transition-colors duration-500">
<div className="w-16 h-16 rounded-full border border-gray-200 group-hover:border-gray-700 flex flex-shrink-0 items-center justify-center text-gold text-2xl mb-6 md:mb-0">
<iconify-icon icon="solar:text-square-linear"></iconify-icon>
</div>
<div className="flex-1 md:pl-4">
<div className="font-display text-xl md:text-2xl italic mb-2 tracking-tight">3. Human Prompts</div>
<p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed max-w-lg">
                                No complex syntax needed. Just describe what you want to see in plain, human language. Our engine translates concepts into visual poetry.
                            </p>
</div>
<div className="mt-8 md:mt-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-100 group-hover:border-gray-800 pt-4 md:pt-0 md:pl-8 flex justify-between md:justify-center items-center">
<span className="text-xs uppercase tracking-widest opacity-60 md:hidden">Learn More</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="feature-card group hover:bg-[#1A1818] hover:text-white transition-colors duration-500">
<div className="w-16 h-16 rounded-full border border-gray-200 group-hover:border-gray-700 flex flex-shrink-0 items-center justify-center text-gold text-2xl mb-6 md:mb-0">
<iconify-icon icon="solar:sparkles-linear"></iconify-icon>
</div>
<div className="flex-1 md:pl-4">
<div className="font-display text-xl md:text-2xl italic mb-2 tracking-tight">4. Masterpiece Output</div>
<p className="font-sans text-sm text-gray-500 group-hover:text-gray-400 leading-relaxed max-w-lg">
                                Within seconds, witness your imagination materialized in striking 4K resolution. Ready to download, print, or share with the world.
                            </p>
</div>
<div className="mt-8 md:mt-0 w-full md:w-auto border-t md:border-t-0 md:border-l border-gray-100 group-hover:border-gray-800 pt-4 md:pt-0 md:pl-8 flex justify-between md:justify-center items-center">
<span className="text-xs uppercase tracking-widest opacity-60 md:hidden">Learn More</span>
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="mb-20 md:mb-32 px-2 md:px-0" id="pricing">
<div className="text-center mb-16">
<h2 className="font-display text-3xl md:text-5xl italic tracking-tight mb-4">Plans</h2>
<p className="font-sans text-sm text-gray-500 max-w-lg mx-auto">Access top-tier generation models at a price that fits your creative journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">

<div className="p-8 border border-gray-200 rounded-2xl bg-white hover:border-gold transition-colors duration-300">
<div className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Free</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-display font-medium tracking-tight">$0</span>
<span className="text-sm text-gray-400">/month</span>
</div>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">Perfect for casual creators wanting to explore AI art.</p>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> 25 Generations Daily</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Standard Resolution</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Community Gallery</li>
<li className="flex items-center gap-3 text-gray-300"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> Commercial License</li>
</ul>
<a className="btn-gold w-full text-center" href="#">Start for Free</a>
</div>

<div className="p-8 border border-gray-200 rounded-2xl bg-[#1A1818] text-white relative transform md:-translate-y-4 shadow-xl">
<div className="absolute top-0 right-0 bg-gold text-[#1A1818] text-[0.6rem] uppercase font-bold tracking-widest px-3 py-1 rounded-bl-lg rounded-tr-lg">Popular</div>
<div className="font-sans text-xs font-bold uppercase tracking-widest text-gold mb-4">Pro</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-display font-medium tracking-tight">$15</span>
<span className="text-sm text-gray-400">/month</span>
</div>
<p className="text-sm text-gray-400 mb-8 leading-relaxed">For dedicated artists who need higher quality and fewer limits.</p>
<ul className="space-y-4 mb-8 text-sm text-gray-300">
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> 500 Generations Daily</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> 4K Upscaling</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Commercial License</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Fast GPU Priority</li>
</ul>
<a className="btn-gold w-full text-center bg-gold border-gold hover:bg-white hover:text-black" href="#">Upgrade to Pro</a>
</div>

<div className="p-8 border border-gray-200 rounded-2xl bg-white hover:border-gold transition-colors duration-300">
<div className="font-sans text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Plus</div>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-display font-medium tracking-tight">$49</span>
<span className="text-sm text-gray-400">/month</span>
</div>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">The ultimate toolkit for agencies and power users.</p>
<ul className="space-y-4 mb-8 text-sm text-gray-600">
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Unlimited Generations</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Private Mode</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> API Access</li>
<li className="flex items-center gap-3"><iconify-icon className="text-gold" icon="solar:check-circle-linear"></iconify-icon> Custom Model Training</li>
</ul>
<a className="btn-gold w-full text-center" href="#">Get Plus</a>
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
                                "LoveArt.ai completely removed the barrier between my imagination and the canvas. The quality is truly gallery-worthy out of the box."
                            </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
<img alt="Digital Artist" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="font-bold text-sm tracking-wide">Amara Vance</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Digital Artist</div>
</div>
</div>
</div>
<div className="hidden md:grid grid-cols-1 gap-4">

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<p className="text-sm text-gray-600 mb-4 leading-relaxed">"I have zero design skills, but now our marketing team produces award-winning visual assets in minutes. A total game-changer."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
<img alt="Marketing Manager" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs font-bold">David Chen <span className="text-gray-400 font-normal">— Marketing Manager</span></div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm opacity-80">
<p className="text-sm text-gray-600 mb-4 leading-relaxed">"The way it handles complex, surreal prompts without breaking a sweat is mind-blowing. It's like having a master painter on call."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
<img alt="Concept Illustrator" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=320&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-xs font-bold">Julia Roberts <span className="text-gray-400 font-normal">— Concept Illustrator</span></div>
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
<span>Who owns the copyright to generated art?</span>
<iconify-icon className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-gray-500 leading-relaxed max-w-2xl">
                            With our Pro and Plus plans, you own full commercial rights to the artwork you generate. You are free to sell, print, and use the images for any business purpose.
                        </div>
</details>
<details className="group border-b border-gray-200">
<summary className="flex justify-between items-center py-6 text-lg md:text-xl font-display cursor-pointer hover:text-gold transition-colors">
<span>Do I need to know how to write complex prompts?</span>
<iconify-icon className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-gray-500 leading-relaxed max-w-2xl">
                            Not at all. Our backend engine is specifically trained to understand natural, human language. Just describe what you want to see as if talking to a friend.
                        </div>
</details>
<details className="group border-b border-gray-200">
<summary className="flex justify-between items-center py-6 text-lg md:text-xl font-display cursor-pointer hover:text-gold transition-colors">
<span>What resolution are the final downloads?</span>
<iconify-icon className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-gray-500 leading-relaxed max-w-2xl">
                            Free users can download standard HD resolutions. Pro and Plus members have access to our AI upscaler, providing pristine 4K resolution suitable for large-format printing.
                        </div>
</details>
<details className="group border-b border-gray-200">
<summary className="flex justify-between items-center py-6 text-lg md:text-xl font-display cursor-pointer hover:text-gold transition-colors">
<span>Can I train my own custom styles?</span>
<iconify-icon className="text-2xl text-gray-400 group-open:rotate-45 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</summary>
<div className="pb-6 text-sm text-gray-500 leading-relaxed max-w-2xl">
                            Yes, our Plus tier includes the ability to fine-tune custom models based on your own portfolio, ensuring the AI strictly adheres to your specific brand guidelines or aesthetic.
                        </div>
</details>
</div>
</section>

<footer className="pt-12 md:pt-16 border-t border-[var(--ink-black)] mt-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.5fr] gap-10 md:gap-24 mb-16">

<div>
<h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-3">
<li><a className="nav-item text-gray-600 hover:text-gold text-sm" href="#">Style Explorer</a></li>
<li><a className="nav-item text-gray-600 hover:text-gold text-sm" href="#">Hall of Fame</a></li>
<li><a className="nav-item text-gray-600 hover:text-gold text-sm" href="#">Terms of Service</a></li>
<li><a className="nav-item text-gray-600 hover:text-gold text-sm" href="#">Privacy Policy</a></li>
</ul>
</div>

<div>
<h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-6">Newsletter</h4>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Join our circle for exclusive prompts and model updates.
                        </p>
<form className="flex items-end gap-2">
<input className="newsletter-input text-sm" placeholder="email@example.com" type="email"/>
<button className="border-b border-ink pb-2 font-bold text-sm hover:text-gold transition-colors" type="submit">JOIN</button>
</form>
<div className="mt-8">
<h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-4">Follow</h4>
<div className="flex gap-4">
<a className="text-lg hover:text-gold transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-lg hover:text-gold transition-colors" href="#"><iconify-icon icon="ri:behance-line"></iconify-icon></a>
<a className="text-lg hover:text-gold transition-colors" href="#"><iconify-icon icon="ri:twitter-x-line"></iconify-icon></a>
</div>
</div>
</div>

<div>
<h4 className="font-sans font-bold text-xs uppercase tracking-widest mb-6">Headquarters</h4>
<p className="text-sm text-gray-600 mb-4">LoveArt Studios, Digital District, AI 10012</p>
<div className="w-full h-40 bg-gray-200 rounded-xl overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<img alt="Server Map" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white p-2 rounded-full shadow-lg text-ink flex items-center justify-center">
<iconify-icon icon="solar:map-point-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 text-[0.65rem] text-gray-400 uppercase tracking-widest">
<span className="mb-2 md:mb-0">© 2026 LoveArt.ai. All Rights Reserved.</span>
<div className="flex gap-6">
<span>#LoveArt</span>
<span>Made with AI</span>
</div>
</div>
</footer>
</main>
</div>

    </>
  );
}
