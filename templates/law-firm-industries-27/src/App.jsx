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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-50/90 backdrop-blur-md border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tighter uppercase text-neutral-900" href="#">
                JENEI
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#">Home</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Services</a>
<a className="text-neutral-900" href="#">Industries</a>
<a className="hover:text-neutral-900 transition-colors" href="#">How It Works</a>
<a className="hover:text-neutral-900 transition-colors" href="#">About</a>
</div>
<a className="text-sm font-medium bg-[#657B3d] text-white px-5 py-2.5 rounded-full hover:bg-[#546632] transition-colors" href="#">
                Contact
            </a>
</div>
</nav>

<header className="pt-40 pb-24 px-6 bg-white border-b border-neutral-100">
<div className="max-w-7xl mx-auto">
<p className="text-sm font-medium text-[#657B3d] uppercase tracking-widest mb-6">Industries</p>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-neutral-900 leading-[1.05] mb-8 max-w-4xl">
                Experience across complex, innovation driven industries
            </h1>
<p className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-normal max-w-2xl">
                Jenei Law works with clients in technical fields where protecting an idea requires a clear understanding of how it works and what makes it valuable.
            </p>
</div>
</header>

<section className="py-24 px-6 bg-neutral-50 border-b border-neutral-100">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 mb-6">
                    Built for technical and specialized work
                </h2>
<p className="text-lg text-neutral-600 mb-6 leading-relaxed font-normal">
                    Some ideas are straightforward. Others involve complex systems, specialized processes, or regulated environments where the right approach is not immediately clear.
                </p>
<div className="pl-6 border-l border-neutral-200">
<p className="text-lg text-neutral-900 font-medium leading-relaxed">
                        In these situations, protection decisions depend on understanding how the product functions and where risk exists.
                    </p>
</div>
</div>
<div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-neutral-200/50 bg-neutral-100">
<img alt="Complex technological systems" className="absolute inset-0 w-full h-full object-cover filter grayscale-[10%]" src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-neutral-100">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-3xl">
<p className="text-sm font-medium text-[#657B3d] uppercase tracking-widest mb-6">Expertise</p>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 mb-6">
                    Industries served
                </h2>
<p className="text-lg text-neutral-600 leading-relaxed font-normal">
                    Jenei Law works with clients across a variety of advanced disciplines. Each engagement is approached based on the specific technical and commercial context, not a fixed category.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-neutral-50/50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<iconify-icon className="text-2xl text-neutral-900 mb-6" icon="solar:test-tube-linear"></iconify-icon>
<h3 className="text-lg tracking-tight font-medium text-neutral-900 mb-2">Medical &amp; Healthcare</h3>
<p className="text-base font-normal text-neutral-600">Medical devices and healthcare technologies.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-50/50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<iconify-icon className="text-2xl text-neutral-900 mb-6" icon="solar:settings-linear"></iconify-icon>
<h3 className="text-lg tracking-tight font-medium text-neutral-900 mb-2">Mechanical Systems</h3>
<p className="text-base font-normal text-neutral-600">Mechanical systems and industrial equipment.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-50/50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<iconify-icon className="text-2xl text-neutral-900 mb-6" icon="solar:monitor-smartphone-linear"></iconify-icon>
<h3 className="text-lg tracking-tight font-medium text-neutral-900 mb-2">Software &amp; Platforms</h3>
<p className="text-base font-normal text-neutral-600">Software, algorithms, and technology platforms.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-50/50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<iconify-icon className="text-2xl text-neutral-900 mb-6" icon="solar:box-linear"></iconify-icon>
<h3 className="text-lg tracking-tight font-medium text-neutral-900 mb-2">Consumer Products</h3>
<p className="text-base font-normal text-neutral-600">Consumer goods and physical product design.</p>
</div>

<div className="p-8 rounded-2xl bg-neutral-50/50 border border-neutral-100 hover:border-neutral-200 transition-colors">
<iconify-icon className="text-2xl text-neutral-900 mb-6" icon="solar:factory-linear"></iconify-icon>
<h3 className="text-lg tracking-tight font-medium text-neutral-900 mb-2">Manufacturing</h3>
<p className="text-base font-normal text-neutral-600">Manufacturing processes and engineered solutions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50 border-b border-neutral-100">
<div className="max-w-7xl mx-auto space-y-32">

<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-neutral-200/50 bg-neutral-100 order-2 md:order-1">
<img alt="Scientific research and context" className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%]" src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 mb-6">
                        Why industry context matters
                    </h2>
<p className="text-lg text-neutral-600 mb-6 leading-relaxed font-normal">
                        Understanding your industry changes how your situation is evaluated. It helps identify what is actually protectable, anticipate potential risks, and align protection with how products are developed and used. 
                    </p>
<p className="text-lg text-neutral-600 leading-relaxed font-normal">
                        This leads to clearer decisions and a more effective strategy.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 mb-6">
                        Not limited by category
                    </h2>
<p className="text-lg text-neutral-600 mb-6 leading-relaxed font-normal">
                        Many ideas do not fit neatly into one industry. They may combine physical products and software or apply across multiple use cases. 
                    </p>
<div className="pt-6 border-t border-neutral-200">
<p className="text-lg text-neutral-900 font-medium">
                            The focus is not on placing your work into a predefined category, but on understanding what you have created and determining the right way to protect it.
                        </p>
</div>
</div>
<div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-neutral-200/50 bg-neutral-100">
<img alt="Global connections representing cross-industry innovation" className="absolute inset-0 w-full h-full object-cover filter grayscale-[20%]" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-neutral-900 mb-6">
                Discuss your project
            </h2>
<p className="text-xl text-neutral-500 mb-10 leading-relaxed font-normal">
                Schedule a consultation to review your idea and determine the right approach.
            </p>
<a className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#657B3d] text-white text-sm font-medium hover:bg-[#546632] transition-colors" href="#">
                Schedule a consultation
            </a>
</div>
</section>

<footer className="py-10 border-t border-neutral-100 px-6 text-center text-sm font-normal text-neutral-400 bg-neutral-50">
<p>© 2024 Jenei Law. All rights reserved.</p>
</footer>

    </>
  );
}
