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
      

<nav className="w-full py-6 px-6 lg:px-8 absolute top-0 z-50">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-[#A76A3A]" data-lucide="cookie" strokeWidth="1.5"></i>
<span className="font-serif text-xl tracking-tight font-medium text-[#A76A3A]">Golden Batch Co</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-[#A76A3A]">
<a className="hover:opacity-70 transition-opacity" href="#">Recipes</a>
<a className="hover:opacity-70 transition-opacity" href="#">About</a>
<a className="hover:opacity-70 transition-opacity" href="#">FAQ</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-base font-medium rounded-full bg-[#A76A3A] text-white hover:bg-[#8F5930] transition-colors shadow-sm" href="/shop">
                Shop Now
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-8 overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="flex-1 text-center lg:text-left z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-[#A76A3A]/20 text-[#A76A3A] text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
<span>Premium Digital Recipe Collection</span>
</div>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight font-medium text-[#A76A3A] leading-[1.1]">
                    Bake NYC-Style Cookies at Home
                </h1>
<p className="mt-6 text-lg md:text-xl text-[#5A4A45] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                    Unlock premium step-by-step cookie recipes designed to deliver dramatic molten centers, bold flavors, and that signature New York bakery thickness — every single time.
                </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-[#A76A3A] text-white hover:bg-[#8F5930] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="/shop">
                        Download Your Collection
                        <i className="w-5 h-5 ml-2" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="flex-1 w-full relative z-10">
<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
<img alt="Thick gooey chocolate chip cookie split in half" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent mix-blend-overlay"></div>
</div>

<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-[#F2E2D0] rounded-full blur-3xl opacity-60 -z-10"></div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-8 bg-white border-t border-[#A76A3A]/10">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-medium text-[#A76A3A]">
                    Why Bakers Love Golden Batch Co
                </h2>
<p className="mt-4 text-lg text-[#5A4A45]">The secret to bakery-level results in your home kitchen.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-[#F6EBDD] flex items-center justify-center mb-6 ring-1 ring-[#A76A3A]/20">
<i className="w-6 h-6 text-[#A76A3A]" data-lucide="layers" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#A76A3A] mb-3">Thick NYC Texture</h3>
<p className="text-lg text-[#5A4A45] leading-relaxed">Perfect rise, crisp edges, soft chewy center — just like high-end NYC bakeries.</p>
</div>

<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-[#F6EBDD] flex items-center justify-center mb-6 ring-1 ring-[#A76A3A]/20">
<i className="w-6 h-6 text-[#A76A3A]" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#A76A3A] mb-3">Step-by-Step Guidance</h3>
<p className="text-lg text-[#5A4A45] leading-relaxed">Clear instructions, timing tips, and pro baking secrets included.</p>
</div>

<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-[#F6EBDD] flex items-center justify-center mb-6 ring-1 ring-[#A76A3A]/20">
<i className="w-6 h-6 text-[#A76A3A]" data-lucide="droplets" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#A76A3A] mb-3">Gooey Molten Centers</h3>
<p className="text-lg text-[#5A4A45] leading-relaxed">Master the art of perfectly stuffed, flowing cookie fillings.</p>
</div>

<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-[#F6EBDD] flex items-center justify-center mb-6 ring-1 ring-[#A76A3A]/20">
<i className="w-6 h-6 text-[#A76A3A]" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#A76A3A] mb-3">Precise Measurements</h3>
<p className="text-lg text-[#5A4A45] leading-relaxed">Includes grams + cups for consistent, reliable bakery-level results.</p>
</div>

<div className="flex flex-col items-start">
<div className="w-12 h-12 rounded-xl bg-[#F6EBDD] flex items-center justify-center mb-6 ring-1 ring-[#A76A3A]/20">
<i className="w-6 h-6 text-[#A76A3A]" data-lucide="hand" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#A76A3A] mb-3">Beginner Friendly</h3>
<p className="text-lg text-[#5A4A45] leading-relaxed">Designed for home bakers but delivers professional, impressive outcomes.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-8 bg-[#F2E2D0] relative">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A76A3A]/30 to-transparent"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 lg:mb-20">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-medium text-[#A76A3A]">
                    See the Gooey Difference
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 bg-white">
<img alt="Split molten cookie center" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 bg-white md:translate-y-8">
<img alt="Top down view of perfect cookies" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 bg-white">
<img alt="Macro texture of baked cookie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="mt-24 text-center">
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full bg-[#A76A3A] text-white hover:bg-[#8F5930] transition-colors shadow-sm" href="/shop">
                    Get The Recipes
                </a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-8 bg-white border-y border-[#A76A3A]/10">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 lg:mb-20">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight font-medium text-[#A76A3A]">
                    Trusted by Home Bakers Worldwide
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#F6EBDD] p-8 lg:p-10 rounded-3xl border border-[#A76A3A]/20 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-[#A76A3A] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#2D2422] font-serif italic leading-relaxed">
                            “I followed the recipe exactly and my cookies looked like a professional bakery. The gooey center was perfect!”
                        </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#A76A3A]/10 flex items-center justify-center text-[#A76A3A] font-medium text-base">SM</div>
<span className="text-base font-medium text-[#A76A3A]">Sarah M.</span>
</div>
</div>

<div className="bg-[#F6EBDD] p-8 lg:p-10 rounded-3xl border border-[#A76A3A]/20 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-[#A76A3A] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#2D2422] font-serif italic leading-relaxed">
                            “These are the thickest cookies I’ve ever baked at home. Clear instructions and amazing results.”
                        </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#A76A3A]/10 flex items-center justify-center text-[#A76A3A] font-medium text-base">LR</div>
<span className="text-base font-medium text-[#A76A3A]">Lina R.</span>
</div>
</div>

<div className="bg-[#F6EBDD] p-8 lg:p-10 rounded-3xl border border-[#A76A3A]/20 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-[#A76A3A] mb-6">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-[#2D2422] font-serif italic leading-relaxed">
                            “Worth every dollar. My family thought I bought them from a NYC bakery.”
                        </p>
</div>
<div className="mt-8 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#A76A3A]/10 flex items-center justify-center text-[#A76A3A] font-medium text-base">AK</div>
<span className="text-base font-medium text-[#A76A3A]">Amanda K.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-8 bg-[#A76A3A] text-center relative overflow-hidden flex-grow flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)]"></div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="font-serif text-5xl md:text-6xl tracking-tight font-medium text-white mb-10 leading-tight">
                Ready to Bake Like a NYC Bakery?
            </h2>
<a className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium rounded-full bg-[#F6EBDD] text-[#A76A3A] hover:bg-white transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1" href="/shop">
                Download the Collection
                <i className="w-5 h-5 ml-2" data-lucide="download" strokeWidth="1.5"></i>
</a>
</div>
</section>

<footer className="bg-[#A76A3A] text-[#F6EBDD]/70 py-8 text-center text-base border-t border-white/10">
<p>© 2024 Golden Batch Co. All rights reserved.</p>
</footer>


    </>
  );
}
