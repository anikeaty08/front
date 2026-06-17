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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg">B</div>
<span className="font-semibold tracking-tight text-white group-hover:text-white/90 transition-colors">Black Grapes Softech</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="px-4 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors" href="#contact">Contact Us</a>
</nav>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px]"></div>
<div className="absolute bottom-20 right-10 w-80 h-80 bg-amber-600/10 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-medium tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Innovation Meets Excellence
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-white">
                    Innovate. Integrate. <br/>
<span className="text-gradient">Elevate.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl leading-relaxed font-light">
                    Digitalize your ideas into success with Black Grapes Softech. We are your innovation partner, crafting solutions from Web &amp; Mobile Apps to AI &amp; IoT that push the boundaries of what's possible.
                </p>
<div className="flex flex-wrap gap-4">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-6 font-medium text-neutral-950 transition-all duration-300 hover:bg-white/90 hover:ring-2 hover:ring-white hover:ring-offset-2 hover:ring-offset-black" href="#contact">
<span className="mr-2">Get Started</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex h-12 items-center justify-center rounded-md border border-white/10 bg-white/5 px-6 font-medium text-white transition-colors hover:bg-white/10" href="#">
                        View Portfolio
                    </a>
</div>
<div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-8">
<div>
<div className="text-2xl font-semibold text-white">800+</div>
<div className="text-sm text-neutral-500">Global Clients</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">545+</div>
<div className="text-sm text-neutral-500">Projects Done</div>
</div>
<div>
<div className="text-2xl font-semibold text-white">100+</div>
<div className="text-sm text-neutral-500">Experts</div>
</div>
</div>
</div>
<div className="relative hidden lg:block">

<div className="relative z-10 bg-neutral-900 border border-white/10 rounded-xl p-6 shadow-2xl shadow-orange-900/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-4 mb-6">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-700"></div>
<div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-600"></div>
<div className="w-8 h-8 rounded-full border-2 border-neutral-900 bg-neutral-500"></div>
</div>
<div className="h-2 w-24 bg-neutral-800 rounded-full"></div>
</div>
<div className="space-y-3">
<div className="h-32 rounded-lg bg-gradient-to-r from-neutral-800 to-neutral-800/50 w-full animate-pulse"></div>
<div className="grid grid-cols-2 gap-3">
<div className="h-20 rounded-lg bg-neutral-800/50 w-full"></div>
<div className="h-20 rounded-lg bg-neutral-800/50 w-full"></div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-neutral-950 border border-white/10 p-4 rounded-lg shadow-lg flex items-center gap-3">
<div className="p-2 bg-green-500/10 rounded-full text-green-500">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-500">Security</div>
<div className="text-sm font-semibold text-white">100% Secure</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">Our Expertise</h2>
<p className="text-neutral-400 max-w-2xl font-light">
                    We provide best quality services and products at affordable prices. From customized software to digital marketing dominance.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:bg-white/[0.07]">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:code-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Software Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Customized software solutions that align perfectly with your business goals using cutting-edge technologies.
                    </p>
</div>

<div className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:bg-white/[0.07]">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Mobile App Dev</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Native and hybrid mobile applications for Android and iOS that provide seamless user experiences.
                    </p>
</div>

<div className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:bg-white/[0.07]">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Web Design &amp; Dev</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Responsive, fast, and SEO-friendly websites designed to convert visitors into loyal customers.
                    </p>
</div>

<div className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:bg-white/[0.07]">
<div className="w-12 h-12 rounded-lg bg-pink-500/10 text-pink-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Digital Marketing</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Strategic marketing to boost your online presence through SEO, SMM, and targeted campaigns.
                    </p>
</div>

<div className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:bg-white/[0.07]">
<div className="w-12 h-12 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">CRM Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Streamline your customer relationships with bespoke CRM software tailored to your workflow.
                    </p>
</div>

<div className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:bg-white/[0.07]">
<div className="w-12 h-12 rounded-lg bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:gamepad-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Game Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Engaging and immersive game development services for mobile and desktop platforms.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">Why Choose Us?</h2>
<p className="text-neutral-400">To be the most admired creative and affordable IT solutions company.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="text-center p-6">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 border border-white/10 text-white mb-6">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Security Assurance</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        We never compromise with security. We use best technology with expert developers to ensure your data is safe.
                    </p>
</div>

<div className="text-center p-6 relative">

<div className="hidden md:block absolute top-10 bottom-10 left-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="hidden md:block absolute top-10 bottom-10 right-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 border border-white/10 text-white mb-6">
<iconify-icon icon="solar:medal-star-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Quality Assurance</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        We are known for providing best services and top-notch software quality. Maintaining quality is our priority.
                    </p>
</div>

<div className="text-center p-6">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-900 border border-white/10 text-white mb-6">
<iconify-icon icon="solar:hand-shake-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">Good Relationship</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        We maintain the best relationships with our clients to work together and grow businesses mutually.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-2">Featured Projects</h2>
<p className="text-neutral-400">A glimpse into our portfolio of success.</p>
</div>
<a className="text-sm text-orange-500 hover:text-orange-400 flex items-center gap-1 font-medium" href="#">
                    View All Projects <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl bg-neutral-900 border border-white/10">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-6 left-6 z-20">
<div className="text-xs font-medium text-orange-400 mb-2">E-Commerce</div>
<h3 className="text-xl font-semibold text-white">Borit Online Store</h3>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-xl bg-neutral-900 border border-white/10">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<div className="text-xs font-medium text-blue-400 mb-2">Mobile App</div>
<h3 className="text-lg font-semibold text-white">Eduvacancy App</h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-neutral-900 border border-white/10">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<div className="text-xs font-medium text-purple-400 mb-2">Web App</div>
<h3 className="text-lg font-semibold text-white">DBT 24/7</h3>
</div>
</div>

<div className="relative group overflow-hidden rounded-xl bg-neutral-900 border border-white/10">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<img alt="Project" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<div className="text-xs font-medium text-green-400 mb-2">FinTech</div>
<h3 className="text-lg font-semibold text-white">Stavanger Pay</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-16 text-center">What People Are Saying</h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="flex gap-1 text-orange-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        "I have had the pleasure of working with Black Grapes Softech for the past few years. Their software solutions have significantly transformed our business operations and boosted our efficiency."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">SB</div>
<div>
<div className="text-sm font-medium text-white">Subodh Bhandari</div>
<div className="text-xs text-neutral-500">Business Owner</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="flex gap-1 text-orange-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        "They demonstrated a deep understanding of our unique business needs. The level of customization and flexibility they provided was truly impressive."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">KM</div>
<div>
<div className="text-sm font-medium text-white">Kartik Mali</div>
<div className="text-xs text-neutral-500">Client</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5">
<div className="flex gap-1 text-orange-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                        "Preparing for your success trusted source in IT services. The team is dedicated and the delivery was on time."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">AH</div>
<div>
<div className="text-sm font-medium text-white">Ashley Hoyt</div>
<div className="text-xs text-neutral-500">Designer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-6">
                Assess Your Business <br/> <span className="text-neutral-500">Potentials Now.</span>
</h2>
<p className="text-lg text-neutral-400 mb-10 font-light">
                Take care of what matters most. Let us handle the digital transformation of your business.
            </p>
<a className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-orange-600 to-amber-600 px-8 text-lg font-medium text-white shadow-lg shadow-orange-900/20 transition-transform hover:scale-105" href="#contact">
                Get Started Now
            </a>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white text-xs font-bold">B</div>
<span className="font-semibold text-white tracking-tight">Black Grapes Softech</span>
</div>
<div className="space-y-4 text-sm text-neutral-400">
<p className="flex items-start gap-3">
<iconify-icon className="mt-1 shrink-0 text-orange-500" icon="solar:map-point-linear"></iconify-icon>
                            252-F/H Scheme No 54, Vijaynagar, Indore-452010, Madhya Pradesh, India
                        </p>
<p className="flex items-center gap-3">
<iconify-icon className="shrink-0 text-orange-500" icon="solar:letter-linear"></iconify-icon>
                            info@blackgrapessoftech.com
                        </p>
<p className="flex items-center gap-3">
<iconify-icon className="shrink-0 text-orange-500" icon="solar:phone-calling-linear"></iconify-icon>
                            +91 7470997884
                        </p>
</div>

<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="logos:twitter" width="20"></iconify-icon></a> 
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Industries</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Healthcare</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Food Delivery</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">E-Commerce</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Transportation</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Education</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Real Estate</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Services</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">Web Development</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">App Development</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Digital Marketing</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Graphic Design</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">CRM Software</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Game Dev</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-orange-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2024 Black Grapes Softech. All rights reserved.</p>
<div className="flex items-center gap-6 text-xs text-neutral-600">
<a className="hover:text-neutral-400" href="#">Privacy</a>
<a className="hover:text-neutral-400" href="#">Terms</a>
<a className="hover:text-neutral-400" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
