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
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
white: '#ffffff',
dark: '#333333',
teal: '#0b2b2d', // Primary Dark
tealTrans: 'rgba(11, 43, 45, 0.95)',
limeLight: 'rgba(147, 186, 41, 0.1)',
lime: 'rgb(147, 186, 41)', // Action/Accent
gray: '#f0f0f0',
glass: 'rgba(255, 255, 255, 0.1)',
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(11, 43, 45, 0.05)',
'hover': '0 10px 25px -5px rgba(11, 43, 45, 0.1)',
}
}
}
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
      

<main className="w-full min-h-screen flex flex-col items-center justify-center py-12 md:py-20">

<div className="w-full max-w-6xl px-6 md:px-8 lg:px-10">

<nav className="flex items-center space-x-2 text-xs text-brand-teal/60 mb-8 tracking-wide">
<a className="hover:text-brand-teal transition-colors" href="#">Marketplace</a>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<a className="hover:text-brand-teal transition-colors" href="#">Cloud Solutions</a>
<span className="iconify" data-icon="lucide:chevron-right" data-width="12"></span>
<span className="font-medium text-brand-teal">App Hosting</span>
</nav>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-7 flex flex-col space-y-6">

<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-soft group border border-brand-teal/5 bg-brand-white">

<div className="absolute top-4 left-4 z-10 bg-brand-limeLight backdrop-blur-md border border-brand-lime/20 text-brand-teal text-xs font-medium px-3 py-1.5 rounded-full tracking-wide">
                            Enterprise Ready
                        </div>

<img alt="Cloud Server Infrastructure" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 img-fade-in opacity-90" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-brand-teal/5 pointer-events-none mix-blend-overlay"></div>
</div>

<div className="grid grid-cols-4 gap-4">
<div className="aspect-square rounded-xl bg-brand-white border border-brand-teal/5 flex items-center justify-center text-brand-teal/80 hover:border-brand-lime/50 transition-colors cursor-pointer shadow-sm">
<span className="iconify" data-icon="lucide:server" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div className="aspect-square rounded-xl bg-brand-white border border-brand-teal/5 flex items-center justify-center text-brand-teal/80 hover:border-brand-lime/50 transition-colors cursor-pointer shadow-sm">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div className="aspect-square rounded-xl bg-brand-white border border-brand-teal/5 flex items-center justify-center text-brand-teal/80 hover:border-brand-lime/50 transition-colors cursor-pointer shadow-sm">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="24"></span>
</div>
<div className="aspect-square rounded-xl bg-brand-white border border-brand-teal/5 flex items-center justify-center text-brand-teal/80 hover:border-brand-lime/50 transition-colors cursor-pointer shadow-sm">
<span className="iconify" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="24"></span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col h-full justify-between">
<div>
<h1 className="text-3xl md:text-4xl font-semibold text-brand-teal tracking-tight mb-2 leading-tight">
                            Cloud App Hosting
                        </h1>
<div className="flex items-center space-x-2 mb-6">
<div className="flex text-brand-lime">
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-inline="false" data-width="14"></span>
</div>
<span className="text-xs text-brand-dark/50 font-medium">No reviews yet</span>
</div>
<div className="flex items-baseline mb-6">
<span className="text-4xl font-semibold text-brand-teal">$250.00</span>
<span className="text-sm text-brand-dark/60 ml-2 font-medium">/ month</span>
</div>
<div className="prose prose-sm text-brand-dark/80 leading-relaxed mb-8">
<p>
                                Elevate your business infrastructure. Switching to our managed cloud hosting offers superior stability compared to shared environments, delivering lightning-fast performance and fortress-level security for your critical applications.
                            </p>
</div>

<ul className="space-y-3 mb-10">
<li className="flex items-start">
<span className="text-brand-lime mt-0.5 mr-3">
<span className="iconify" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="18"></span>
</span>
<span className="text-sm text-brand-dark/90">Dedicated resources for consistent speed</span>
</li>
<li className="flex items-start">
<span className="text-brand-lime mt-0.5 mr-3">
<span className="iconify" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="18"></span>
</span>
<span className="text-sm text-brand-dark/90">Automated daily backups &amp; recovery</span>
</li>
<li className="flex items-start">
<span className="text-brand-lime mt-0.5 mr-3">
<span className="iconify" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="18"></span>
</span>
<span className="text-sm text-brand-dark/90">Advanced DDoS protection included</span>
</li>
</ul>
</div>

<div className="p-6 rounded-xl bg-brand-white border border-brand-teal/5 shadow-soft">
<form action="" className="flex flex-col gap-4" enctype="multipart/form-data" method="post">

<div className="flex justify-between items-center mb-2">
<label className="text-xs font-semibold uppercase tracking-wider text-brand-teal/70">Quantity</label>
</div>
<div className="flex gap-4">

<div className="relative flex items-center w-32">
<button className="absolute left-0 w-10 h-full text-brand-teal hover:bg-brand-gray rounded-l-lg flex items-center justify-center transition-colors" onclick="this.parentNode.querySelector('input[type=number]').stepDown()" type="button">
<span className="iconify" data-icon="lucide:minus" data-width="14"></span>
</button>
<input className="w-full h-12 text-center text-brand-teal font-semibold bg-brand-gray/50 border-0 rounded-lg focus:ring-1 focus:ring-brand-lime text-base" id="quantity" min="1" name="quantity" type="number" value="1"/>
<button className="absolute right-0 w-10 h-full text-brand-teal hover:bg-brand-gray rounded-r-lg flex items-center justify-center transition-colors" onclick="this.parentNode.querySelector('input[type=number]').stepUp()" type="button">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</button>
</div>

<button className="flex-1 h-12 bg-brand-teal text-brand-white text-sm font-medium rounded-lg shadow-lg shadow-brand-teal/20 hover:shadow-brand-teal/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group" name="add-to-cart" type="submit" value="854">
<span>Add to Cart</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
<div className="w-full h-px bg-brand-gray my-1"></div>

<div className="flex justify-center gap-6">
<div className="flex items-center gap-2 text-brand-teal/60">
<span className="iconify" data-icon="lucide:shield-check" data-width="14"></span>
<span className="text-xs">Secure Payment</span>
</div>
<div className="flex items-center gap-2 text-brand-teal/60">
<span className="iconify" data-icon="lucide:headset" data-width="14"></span>
<span className="text-xs">24/7 Support</span>
</div>
</div>
</form>
</div>
</div>
</div>

<div className="my-20 w-full h-px bg-gradient-to-r from-transparent via-brand-teal/10 to-transparent"></div>

<div className="w-full">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-semibold text-brand-teal tracking-tight mb-4">Why choose Cloud Hosting?</h2>
<p className="text-brand-dark/70 text-sm leading-relaxed">
                        Scale your operations without the technical overhead. We manage the infrastructure so you can focus on growing your business.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 rounded-2xl bg-brand-white border border-brand-teal/5 shadow-soft hover:shadow-hover transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-brand-limeLight flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:cpu" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-brand-teal mb-3">Superior Performance</h3>
<p className="text-sm text-brand-dark/70 leading-relaxed">
                            Unlike shared hosting, cloud resources are dedicated to you. Experience faster load times and the ability to handle high-traffic spikes without crashing.
                        </p>
</div>

<div className="group p-8 rounded-2xl bg-brand-white border border-brand-teal/5 shadow-soft hover:shadow-hover transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-brand-limeLight flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-brand-teal mb-3">Seamless Scalability</h3>
<p className="text-sm text-brand-dark/70 leading-relaxed">
                            Start small and grow big. Our virtual server architecture allows you to instantly upgrade resources as your business needs expand, without migration headaches.
                        </p>
</div>

<div className="group p-8 rounded-2xl bg-brand-white border border-brand-teal/5 shadow-soft hover:shadow-hover transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-brand-limeLight flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-brand-teal mb-3">Managed Security</h3>
<p className="text-sm text-brand-dark/70 leading-relaxed">
                            We handle the technical heavy lifting. From server maintenance to firewalls and regular security patches, your data remains protected around the clock.
                        </p>
</div>

<div className="group p-8 rounded-2xl bg-brand-white border border-brand-teal/5 shadow-soft hover:shadow-hover transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-brand-limeLight flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:wallet" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-brand-teal mb-3">Cost Efficient</h3>
<p className="text-sm text-brand-dark/70 leading-relaxed">
                            Avoid the massive upfront cost of physical data centers. Cloud hosting provides an affordable, predictable monthly model that fits small to medium business budgets.
                        </p>
</div>
</div>
</div>

<div className="mt-16 pt-10 border-t border-brand-teal/10">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 bg-brand-teal rounded-2xl p-8 text-brand-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime opacity-10 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
<div className="relative z-10">
<h3 className="text-lg font-medium mb-1">Have custom requirements?</h3>
<p className="text-sm text-brand-white/70">We configure servers for specific enterprise needs.</p>
</div>
<button className="relative z-10 px-6 py-3 bg-brand-lime text-brand-teal font-medium text-sm rounded-lg hover:bg-white transition-colors duration-300">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</main>

    </>
  );
}
