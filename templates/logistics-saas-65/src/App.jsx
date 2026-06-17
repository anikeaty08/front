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



        // Initialize Icons
        lucide.createIcons();

        // High-end Scroll Animations using Intersection Observer
        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-16', 'scale-[0.98]');
                        entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-anim').forEach(el => observer.observe(el));
        });

        // FAQ Toggle Logic
        function toggleFaq(element) {
            const isActive = element.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.group.active').forEach(el => {
                if (el !== element) {
                    el.classList.remove('active');
                }
            });

            // Toggle current
            if (!isActive) {
                element.classList.add('active');
            } else {
                element.classList.remove('active');
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
      

<nav className="fixed z-50 flex mix-blend-difference w-full pt-6 pr-10 pb-6 pl-10 top-0 left-0 items-center justify-between">
<div className="flex-1 flex justify-start">
<div className="uppercase text-4xl font-medium text-slate-50 tracking-tight font-['Space_Grotesk',sans-serif] border-0 rounded-none pt-0 pr-0 pb-0 pl-0 shadow">
        Grok</div>
</div>
<div className="flex-1 flex justify-end">
<button className="flex items-center gap-3 hover:opacity-70 transition-opacity">
<span className="text-xs uppercase tracking-widest hidden md:block font-light">Menu</span>
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<header className="min-h-screen md:px-6 md:pt-6 w-full pt-4 pr-4 pb-6 pl-4 relative">
<div className="md:rounded-b-[4rem] overflow-hidden scroll-anim transition-all duration-700 ease-out bg-zinc-900 opacity-100 w-full h-[95vh] rounded-b-[2rem] relative translate-y-0 scale-100">
<img alt="Modern American Truck" className="opacity-60 mix-blend-normal w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 scale-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/685fe4a8-6ee9-46ca-9dec-96907c0cf2f0_3840w.jpg"/>
<div className="md:bottom-24 md:left-12 max-w-4xl absolute bottom-16 left-6">
<p className="text-xs uppercase tracking-widest text-zinc-400 mb-6 font-light">Exploration Of</p>
<h1 className="md:text-7xl lg:text-8xl uppercase leading-[0.9] text-5xl font-medium tracking-tight font-['Space_Grotesk',sans-serif]">
                    Advanced<br/>Concepts<br/>In Logistics
                </h1>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
</div>
</div>
</header>

<section className="md:py-48 md:px-12 max-w-screen-lg border-white/5 border-b mr-auto ml-auto pt-32 pr-6 pb-32 pl-6">
<div className="flex flex-col scroll-anim transition-all duration-700 ease-out lg:flex-row lg:gap-32 gap-x-y-16 gap-y-16">
<div className="flex flex-col text-center w-full items-center justify-center">
<h3 className="md:text-5xl uppercase text-3xl font-medium tracking-tight font-['Space_Grotesk',sans-serif] mb-8">
            Systematic Freight</h3>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 max-w-full mb-12">
            Grok is a conceptual logistics infrastructure inspired by the relentless pace of modern supply chains. We
            merge financial technology with physical freight movement—creating an ecosystem where ELD data, fuel
            expenditure, and rapid factoring operate in perfect synthesis.
        </p>
<a className="flex items-center gap-3 uppercase hover:text-zinc-300 transition-colors group text-xs tracking-widest w-fit" href="#">Get a quote</a>
</div>
</div>
</section>

<div className="flex flex-col relative">

<section className="sticky z-10 min-h-screen flex bg-black w-full border-white/5 border-b top-0 items-center">
<div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-24">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 scroll-anim transition-all duration-700 ease-out">
<div className="w-full lg:w-1/3 flex flex-col">
<p className="uppercase text-xs font-light text-zinc-500 tracking-widest mb-4">Solutions</p>
<h2 className="md:text-8xl text-6xl font-light tracking-tight font-['Space_Grotesk',sans-serif] mb-16">01</h2>
<h3 className="md:text-4xl uppercase text-3xl font-medium tracking-tight font-['Space_Grotesk',sans-serif] mb-6">ELD
          &amp; Compliance</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-12">
          Advanced electronic logging devices designed for modern fleets. Ensure complete compliance, track hours of
          service autonomously, and optimize routing with our proprietary hardware and software ecosystem.
        </p>
<a className="flex items-center gap-3 uppercase hover:text-zinc-300 transition-colors group text-xs tracking-widest w-fit" href="#">get
          a quote</a>
</div>
<div className="w-full lg:w-2/3 mt-8 lg:mt-0">
<div className="aspect-[4/3] lg:aspect-[21/9] overflow-hidden group bg-zinc-900 w-full rounded-lg relative">
<img className="group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 transform opacity-50 mix-blend-luminosity w-full h-full object-cover" src="https://img.freepik.com/free-photo/white-semi-truck-driving-highway-sunset_23-2151998715.jpg?t=st=1772033374~exp=1772036974~hmac=5b600226f490a071d22b057e30783aa5d9dc13237ac2a62091c700209e0b4c61&amp;w=2000"/>
<div className="bg-gradient-to-t from-black/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</div>
</section>

<section className="sticky z-20 min-h-screen flex bg-black w-full border-white/5 border-b top-0 items-center">
<div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-24">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 scroll-anim transition-all duration-700 ease-out">
<div className="w-full lg:w-1/3 flex flex-col">
<p className="uppercase text-xs font-light text-zinc-500 tracking-widest mb-4">Solutions</p>
<h2 className="md:text-8xl text-6xl font-light tracking-tight font-['Space_Grotesk',sans-serif] mb-16">02</h2>
<h3 className="text-3xl md:text-4xl font-['Space_Grotesk',sans-serif] font-medium tracking-tight uppercase mb-6">
          Fuel Cards</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-12">
          Unlock deep discounts across a nationwide network. Our fuel cards provide instant authorization, spending
          controls, and unified billing to drastically reduce your largest operational expense.
        </p>
<a className="flex items-center gap-3 uppercase hover:text-zinc-300 transition-colors group text-xs tracking-widest w-fit" href="#">Get
          a quote</a>
</div>
<div className="w-full lg:w-2/3 mt-8 lg:mt-0">
<div className="w-full aspect-[4/3] lg:aspect-[21/9] overflow-hidden bg-zinc-900 rounded-lg relative group">
<img className="group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 transform opacity-50 mix-blend-luminosity w-full h-full object-cover" src="https://img.freepik.com/free-photo/charging-pistol-socket-charging-station_1303-31826.jpg?t=st=1772033455~exp=1772037055~hmac=623790504ac46839338f805bca4c75b63e5791e81b57a9a4b7ce65b55b32445a&amp;w=1480"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="sticky z-30 min-h-screen flex bg-black w-full border-white/5 border-b top-0 items-center">
<div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-24">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 scroll-anim transition-all duration-700 ease-out">
<div className="w-full lg:w-1/3 flex flex-col">
<p className="uppercase text-xs font-light text-zinc-500 tracking-widest mb-4">Solutions</p>
<h2 className="md:text-8xl text-6xl font-light tracking-tight font-['Space_Grotesk',sans-serif] mb-16">03</h2>
<h3 className="text-3xl md:text-4xl font-['Space_Grotesk',sans-serif] font-medium tracking-tight uppercase mb-6">
          Factoring</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-12">
          Turn invoices into immediate capital. Our intelligent factoring algorithm evaluates risk instantly, delivering
          funds within hours so your fleet never stops moving due to cash flow bottlenecks.
        </p>
<a className="flex items-center gap-3 uppercase hover:text-zinc-300 transition-colors group text-xs tracking-widest w-fit" href="#">Get
          a quote</a>
</div>
<div className="w-full lg:w-2/3 mt-8 lg:mt-0">
<div className="w-full aspect-[4/3] lg:aspect-[21/9] overflow-hidden bg-zinc-900 rounded-lg relative group">
<img className="group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 transform opacity-50 mix-blend-luminosity w-full h-full object-cover" src="https://img.freepik.com/free-photo/low-angle-shot-escalator-with-dirtproof-grating_181624-56931.jpg?t=st=1772033717~exp=1772037317~hmac=15f0d9ec1d0dfd08f2b0957ea2e836e118364e1989ec00f35dcec6f2513b7b41&amp;w=2000"/>
<div className="bg-gradient-to-t from-black/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</div>
</section>

<section className="sticky min-h-screen flex bg-black w-full z-40 border-white/5 border-b top-0 items-center">
<div className="w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-24">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 scroll-anim transition-all duration-700 ease-out">
<div className="lg:w-1/3 flex flex-col w-full">
<p className="uppercase text-xs font-light text-zinc-500 tracking-widest mb-4">Solutions</p>
<h2 className="md:text-8xl text-6xl font-light tracking-tight font-['Space_Grotesk',sans-serif] mb-16">04</h2>
<h3 className="text-3xl md:text-4xl font-['Space_Grotesk',sans-serif] font-medium tracking-tight uppercase mb-6">
          Insurance &amp; Loans</h3>
<p className="text-lg text-zinc-400 font-light leading-relaxed mb-12">
          Comprehensive coverage and strategic capital designed specifically for transportation. Protect your assets
          with custom policies and fuel growth with flexible, data-driven loan structures.
        </p>
<a className="flex items-center gap-3 uppercase hover:text-zinc-300 transition-colors group text-xs tracking-widest w-fit" href="#">ger
          a quote</a>
</div>
<div className="w-full lg:w-2/3 mt-8 lg:mt-0">
<div className="w-full aspect-[4/3] lg:aspect-[21/9] overflow-hidden bg-zinc-900 rounded-lg relative group">
<img className="group-hover:opacity-80 transition-opacity duration-700 group-hover:scale-105 transform opacity-50 mix-blend-luminosity w-full h-full object-cover" src="https://img.freepik.com/free-photo/truck-driver-occupation-service_342744-1317.jpg?t=st=1772033831~exp=1772037431~hmac=642458f0bd041d390f08bbd300bff10d3bc4127b0a68f26c1e44388aab9abad5&amp;w=2000"/>
<div className="bg-gradient-to-t from-black/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="py-32 px-6 md:px-12 max-w-screen-2xl mx-auto border-b border-white/5 relative z-50 bg-black">
<div className="mb-20 scroll-anim transition-all duration-700 ease-out">
<p className="uppercase text-xs font-light text-zinc-500 tracking-widest mb-4">Ecosystem Value</p>
<h2 className="text-4xl md:text-6xl font-['Space_Grotesk',sans-serif] font-medium tracking-tight uppercase">Why Partner<br/>With Grok</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
<div className="border border-white/10 p-10 rounded-2xl bg-zinc-950/50 hover:bg-zinc-900 transition-colors duration-500 scroll-anim transition-all duration-700 ease-out delay-100">
<i className="w-8 h-8 text-white mb-8" data-lucide="zap" strokeWidth="1.5"></i>
<h4 className="text-2xl font-['Space_Grotesk',sans-serif] font-medium tracking-tight mb-4">Instant Liquidity</h4>
<p className="text-lg text-zinc-400 font-light leading-relaxed">Our infrastructure eliminates waiting periods. Access funds from loads instantly upon delivery verification.</p>
</div>
<div className="border border-white/10 p-10 rounded-2xl bg-zinc-950/50 hover:bg-zinc-900 transition-colors duration-500 scroll-anim transition-all duration-700 ease-out delay-200">
<i className="w-8 h-8 text-white mb-8" data-lucide="globe" strokeWidth="1.5"></i>
<h4 className="text-2xl font-['Space_Grotesk',sans-serif] font-medium tracking-tight mb-4">Unified Network</h4>
<p className="text-lg text-zinc-400 font-light leading-relaxed">A single interconnected platform where ELD data feeds directly into factoring approvals and fuel authorizations.</p>
</div>
<div className="border border-white/10 p-10 rounded-2xl bg-zinc-950/50 hover:bg-zinc-900 transition-colors duration-500 scroll-anim transition-all duration-700 ease-out delay-300">
<i className="w-8 h-8 text-white mb-8" data-lucide="phone-call" strokeWidth="1.5"></i>
<h4 className="text-2xl font-['Space_Grotesk',sans-serif] font-medium tracking-tight mb-4">24/7 Operations</h4>
<p className="text-lg text-zinc-400 font-light leading-relaxed">Freight never sleeps. Our premium support and autonomous systems are active around the clock.</p>
</div>
</div>
</section>

<section className="md:py-48 md:px-12 z-50 text-center bg-black max-w-5xl border-white/5 border-b mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">
<p className="uppercase text-xs font-light text-zinc-500 tracking-widest mb-4">testimonials</p><div className="scroll-anim transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-5xl font-['Space_Grotesk',sans-serif] font-medium tracking-tight leading-tight mb-12">
                "Integrating Grok's ecosystem transformed our entire cash cycle. We scaled from 12 to over 50 trucks in under eighteen months solely because liquidity stopped being a constraint."
            </h2>
<div className="flex flex-col items-center gap-2">
<p className="text-lg font-medium tracking-tight uppercase">Marcus V.</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest font-light">Director of Operations, V-Freight</p>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-4xl mx-auto w-full border-b border-white/5 relative z-50 bg-black">
<div className="mb-16 text-center scroll-anim transition-all duration-700 ease-out">
<p className="text-xs uppercase tracking-widest text-zinc-500 mb-4 font-light">Intelligence</p>
<h2 className="text-3xl md:text-4xl font-['Space_Grotesk',sans-serif] font-medium tracking-tight uppercase">Frequently Asked</h2>
</div>
<div className="space-y-2">

<div className="border-b border-white/10 group cursor-pointer scroll-anim transition-all duration-700 ease-out" onclick="toggleFaq(this)">
<div className="flex justify-between items-center py-6 hover:text-zinc-300 transition-colors">
<h4 className="text-lg md:text-xl font-medium tracking-tight">How fast is the factoring approval process?</h4>
<i className="w-5 h-5 text-zinc-500 transition-transform duration-500 group-[.active]:rotate-45" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 opacity-0 group-[.active]:h-auto group-[.active]:opacity-100">
<p className="text-lg text-zinc-400 font-light pb-8">Approvals are processed algorithmically within hours. Once verified, funds are transferred instantly to your Grok fuel card or external bank account via same-day ACH.</p>
</div>
</div>

<div className="border-b border-white/10 group cursor-pointer scroll-anim transition-all duration-700 ease-out delay-100" onclick="toggleFaq(this)">
<div className="flex justify-between items-center py-6 hover:text-zinc-300 transition-colors">
<h4 className="text-lg md:text-xl font-medium tracking-tight">Do I need to use your ELD to get fuel cards?</h4>
<i className="w-5 h-5 text-zinc-500 transition-transform duration-500 group-[.active]:rotate-45" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 opacity-0 group-[.active]:h-auto group-[.active]:opacity-100">
<p className="text-lg text-zinc-400 font-light pb-8">No, our solutions are modular. You can utilize our fuel cards independently, though combining them with our ELD unlocks additional automation and risk-reduction discounts.</p>
</div>
</div>

<div className="border-b border-white/10 group cursor-pointer scroll-anim transition-all duration-700 ease-out delay-200" onclick="toggleFaq(this)">
<div className="flex justify-between items-center py-6 hover:text-zinc-300 transition-colors">
<h4 className="text-lg md:text-xl font-medium tracking-tight">What are the insurance requirements?</h4>
<i className="w-5 h-5 text-zinc-500 transition-transform duration-500 group-[.active]:rotate-45" data-lucide="plus" strokeWidth="1.5"></i>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 opacity-0 group-[.active]:h-auto group-[.active]:opacity-100">
<p className="text-lg text-zinc-400 font-light pb-8">We offer custom insurance policies based on your fleet size and safety scores. A baseline liability coverage is required, but integrating our ELD typically reduces premiums by up to 15%.</p>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden md:px-12 bg-black z-50 pt-32 pr-6 pb-0 pl-6 relative">
<div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center text-center z-10 relative scroll-anim transition-all duration-700 ease-out">
<h2 className="text-5xl md:text-7xl lg:text-8xl font-['Space_Grotesk',sans-serif] font-medium tracking-tight uppercase mb-12">Ready to Scale?</h2>
<a className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full text-xs uppercase tracking-widest hover:bg-zinc-200 hover:scale-105 transition-all duration-500 font-medium" href="#">
                Initialize Setup <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="flex flex-col scroll-anim transition-all duration-700 ease-out delay-200 w-full max-w-screen-2xl mt-20 mr-auto ml-auto">

<div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-24 mb-16 w-full">

<div className="w-full lg:w-1/3 flex flex-col gap-6">
<p className="leading-relaxed text-xl font-light text-zinc-300">Grok is engineering the future of automated logistics. By bridging the gap between comprehensive fleet telemetry and real-time capital allocation, we empower visionaries to scale seamlessly in a demanding industry.</p>
</div>

<div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 lg:justify-end text-lg text-zinc-500 font-light mt-4 lg:mt-0">

<div className="flex flex-col gap-5">
<p className="text-xs uppercase tracking-widest text-white mb-2 font-medium">Quick Links</p>
<a className="hover:text-white transition-colors duration-300" href="#">Solutions</a>
<a className="hover:text-white transition-colors duration-300" href="#">ELD Module</a>
<a className="hover:text-white transition-colors duration-300" href="#">Fuel Network</a>
<a className="hover:text-white transition-colors duration-300" href="#">Factoring</a>
<a className="hover:text-white transition-colors duration-300" href="#">Insurance</a>
</div>

<div className="flex flex-col gap-5">
<p className="text-xs uppercase tracking-widest text-white mb-2 font-medium">Legal</p>
<a className="hover:text-white transition-colors duration-300" href="#">Terms &amp; Conditions</a>
<a className="hover:text-white transition-colors duration-300" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors duration-300" href="#">Cookie Policy</a>
</div>

<div className="flex flex-col gap-5">
<p className="text-xs uppercase tracking-widest text-white mb-2 font-medium">Contacts</p>
<a className="hover:text-white transition-colors duration-300" href="mailto:hello@grok.logistics">hello@grok.logistics</a>
<a className="hover:text-white transition-colors duration-300" href="tel:+18005550199">+1 (800) 555-0199</a>
<p className="mt-2 text-sm leading-relaxed text-zinc-600">1200 Logistics Blvd<br/>Suite 400<br/>Chicago, IL 60601</p>
</div>
</div>
</div>

<div className="w-full h-px bg-white/10 mb-8"></div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
<p className="text-xs uppercase tracking-widest text-zinc-500 font-light text-center md:text-left">© 2026 Grok. All rights reserved.</p>
<p className="text-xs uppercase tracking-widest text-zinc-500 font-light text-center md:text-right">Developed by <a className="text-white hover:text-zinc-300 transition-colors" href="#">The Results Factory</a></p>
</div>

<div className="w-full overflow-hidden flex justify-center h-[10vw] md:h-[6vw] pointer-events-none select-none relative">
<h1 className="text-[25vw] md:text-[15vw] leading-[0.75] font-['Space_Grotesk',sans-serif] font-medium tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-800 absolute top-0">
            GROK
        </h1>
</div>
</div>
</footer>



    </>
  );
}
