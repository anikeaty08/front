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
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['Inter', 'sans-serif'],
},
colors: {
ivory: '#FDFCF8',
ink: '#121212',
stone: '#8A8580',
copper: '#9E7A5A',
line: '#EAE8E3'
}
}
}
}



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
      

<header className="fixed top-0 w-full z-50 bg-ivory/80 backdrop-blur-md border-b border-line transition-all duration-300">
<div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex justify-between items-center h-20">

<a className="font-serif text-xl tracking-tighter uppercase font-medium" href="#">
                V A L E R I A N
            </a>

<nav className="hidden md:flex items-center gap-12">
<a className="text-xs uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors duration-300" href="#">Selected Works</a>
<a className="text-xs uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors duration-300" href="#">Philosophy</a>
<a className="text-xs uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors duration-300" href="#">Studio</a>
<a className="text-xs uppercase tracking-[0.2em] text-stone hover:text-ink transition-colors duration-300" href="#">Contact</a>
</nav>

<button className="md:hidden text-ink flex items-center justify-center p-2">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</header>
<main className="pt-20">

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 pt-12 pb-24">
<div className="mb-12 md:mb-20 max-w-4xl">
<h1 className="font-serif text-5xl md:text-8xl tracking-tighter font-normal leading-[0.9] text-ink">
                    Shaping light,<br/>
<span className="text-stone italic font-light">defining space.</span>
</h1>
<p className="mt-8 text-base md:text-lg text-stone max-w-md font-light leading-relaxed">
                    We approach architecture as a quiet dialogue between raw materials, natural light, and human experience.
                </p>
</div>
<div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden group">
<img alt="Modern concrete architecture" className="w-full h-full object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-ink/10 mix-blend-overlay"></div>
</div>
<div className="flex justify-between items-center mt-6 border-b border-line pb-6">
<span className="text-xs uppercase tracking-[0.2em] text-stone">01 / Featured</span>
<span className="text-sm font-serif italic text-ink">The Brutalist Pavilion, Zurich</span>
</div>
</section>

<section className="py-32 px-6 lg:px-12 bg-[#F7F6F2]">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-5 flex justify-center md:justify-start">
<iconify-icon className="text-copper" height="48" icon="solar:leaf-linear" style={{strokeWidth: '1.0'}} width="48"></iconify-icon>
</div>
<div className="md:col-span-7">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight leading-tight font-normal text-ink">
                        True luxury resides in the invisible details—the exactness of a shadow, the texture of poured concrete, the silence of a well-proportioned room.
                    </h2>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-32">
<div className="flex justify-between items-end mb-16 border-b border-line pb-8">
<h3 className="font-serif text-4xl tracking-tight font-normal text-ink">Selected Archives</h3>
<a className="text-xs uppercase tracking-[0.2em] text-ink border-b border-ink pb-1 hover:text-stone hover:border-stone transition-colors hidden md:block" href="#">View all works</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-8 lg:gap-x-16">

<div className="md:col-span-8 group cursor-pointer">
<div className="overflow-hidden bg-[#F0F0F0]">
<img alt="Interior with wood and concrete" className="w-full aspect-[4/3] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline mt-6">
<div>
<h4 className="font-serif text-2xl tracking-tight font-normal text-ink group-hover:text-copper transition-colors">Casa Madera</h4>
<p className="text-xs text-stone mt-2 uppercase tracking-widest">Residential / 2023</p>
</div>
<iconify-icon className="text-stone group-hover:text-ink transition-colors" height="20" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>

<div className="md:col-span-4 md:mt-48 group cursor-pointer">
<div className="overflow-hidden bg-[#F0F0F0]">
<img alt="Minimalist staircase" className="w-full aspect-[3/4] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline mt-6">
<div>
<h4 className="font-serif text-xl tracking-tight font-normal text-ink group-hover:text-copper transition-colors">The Void</h4>
<p className="text-xs text-stone mt-2 uppercase tracking-widest">Cultural / 2022</p>
</div>
</div>
</div>

<div className="md:col-span-5 group cursor-pointer">
<div className="overflow-hidden bg-[#F0F0F0]">
<img alt="Clean kitchen architecture" className="w-full aspect-square object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-baseline mt-6">
<div>
<h4 className="font-serif text-xl tracking-tight font-normal text-ink group-hover:text-copper transition-colors">Aalto Residency</h4>
<p className="text-xs text-stone mt-2 uppercase tracking-widest">Interior / 2024</p>
</div>
</div>
</div>

<div className="md:col-span-7 md:mt-[-10%] group cursor-pointer">
<div className="overflow-hidden bg-[#F0F0F0]">
<img alt="Modern living room" className="w-full aspect-[16/9] object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-baseline mt-6">
<div>
<h4 className="font-serif text-2xl tracking-tight font-normal text-ink group-hover:text-copper transition-colors">Horizon Villa</h4>
<p className="text-xs text-stone mt-2 uppercase tracking-widest">Residential / 2021</p>
</div>
</div>
</div>
</div>
<div className="mt-16 md:hidden">
<a className="text-xs uppercase tracking-[0.2em] text-ink border-b border-ink pb-1 block w-fit" href="#">View all works</a>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<h3 className="font-serif text-2xl tracking-tight font-normal text-ink mb-8">Expertise</h3>
</div>
<div className="md:col-span-3">
<ul className="flex flex-col">
<li className="border-t border-line py-8 flex justify-between items-center group cursor-pointer hover:bg-[#F7F6F2] transition-colors -mx-6 px-6 lg:-mx-12 lg:px-12">
<span className="font-serif text-2xl md:text-3xl tracking-tight font-normal text-ink group-hover:text-copper transition-colors">Residential Architecture</span>
<iconify-icon className="text-stone opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" height="24" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</li>
<li className="border-t border-line py-8 flex justify-between items-center group cursor-pointer hover:bg-[#F7F6F2] transition-colors -mx-6 px-6 lg:-mx-12 lg:px-12">
<span className="font-serif text-2xl md:text-3xl tracking-tight font-normal text-ink group-hover:text-copper transition-colors">Interior Spatial Design</span>
<iconify-icon className="text-stone opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" height="24" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</li>
<li className="border-t border-line py-8 flex justify-between items-center group cursor-pointer hover:bg-[#F7F6F2] transition-colors -mx-6 px-6 lg:-mx-12 lg:px-12">
<span className="font-serif text-2xl md:text-3xl tracking-tight font-normal text-ink group-hover:text-copper transition-colors">Commercial &amp; Cultural</span>
<iconify-icon className="text-stone opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" height="24" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</li>
<li className="border-t border-b border-line py-8 flex justify-between items-center group cursor-pointer hover:bg-[#F7F6F2] transition-colors -mx-6 px-6 lg:-mx-12 lg:px-12">
<span className="font-serif text-2xl md:text-3xl tracking-tight font-normal text-ink group-hover:text-copper transition-colors">Bespoke Furniture</span>
<iconify-icon className="text-stone opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300" height="24" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</li>
</ul>
</div>
</div>
</section>
</main>

<footer className="bg-ink text-ivory pt-32 pb-12 px-6 lg:px-12">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 mb-32">
<div>
<h2 className="font-serif text-5xl md:text-7xl tracking-tighter font-normal leading-none mb-8">
                    Start a <br/>conversation.
                </h2>
<a className="text-sm border-b border-stone/50 pb-1 text-stone hover:text-ivory hover:border-ivory transition-colors" href="mailto:studio@valerian.com">studio@valerian.com</a>
</div>
<div className="grid grid-cols-2 gap-8 md:justify-self-end text-sm text-stone font-light">
<div className="flex flex-col gap-4">
<h5 className="text-xs uppercase tracking-widest text-stone/50 mb-2">Location</h5>
<p>14 Avenue de l'Opéra<br/>75001 Paris, France</p>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-xs uppercase tracking-widest text-stone/50 mb-2">Social</h5>
<a className="hover:text-ivory transition-colors" href="#">Instagram</a>
<a className="hover:text-ivory transition-colors" href="#">Pinterest</a>
<a className="hover:text-ivory transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
<div className="max-w-[1600px] mx-auto border-t border-stone/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone/60 uppercase tracking-widest">
<span>© 2024 Valerian Architecture</span>
<div className="flex gap-8">
<a className="hover:text-ivory transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-ivory transition-colors" href="#">Legal Mentions</a>
</div>
</div>
</footer>

    </>
  );
}
