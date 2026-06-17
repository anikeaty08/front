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


document.write(new Date().getFullYear())
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
      

<div className="fixed bottom-6 left-4 right-4 z-50 md:hidden">
<a className="flex items-center justify-center w-full gap-2 bg-orange-600 hover:bg-orange-500 text-white py-4 rounded-lg font-semibold shadow-lg shadow-orange-900/40 border border-orange-500 transition-transform active:scale-95" href="tel:8324692855">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="20"></iconify-icon>
<span>Call Now (24/7)</span>
</a>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<iconify-icon className="text-orange-500" icon="lucide:flame" width="20"></iconify-icon>
                STEADY FABBIN
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-neutral-100 hover:bg-white text-neutral-900 px-4 py-2 rounded text-sm font-medium transition-colors" href="tel:8324692855">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon>
                (832) 469-2855
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-neutral-950 bg-grain">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-orange-600/10 blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-neutral-800/20 blur-[100px]"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/20 bg-orange-500/10 text-orange-400 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Available 24/7 for Emergency Welding
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]">
                Mobile Welding Done Right.<br/>
<span className="text-neutral-500">On Time, Every Time.</span>
</h1>
<p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Professional mobile welding in Houston with clear communication, fair pricing, and quality work. We bring the shop to you.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auto">
<a className="w-full md:w-auto flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)]" href="tel:8324692855">
<iconify-icon icon="lucide:phone-call" width="18"></iconify-icon>
                    Call Now
                </a>
<a className="w-full md:w-auto flex items-center justify-center gap-2 bg-transparent border border-neutral-700 hover:bg-neutral-900 text-white px-8 py-3.5 rounded-lg font-medium transition-all" href="#contact">
                    Get a Fast Quote
                    <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</a>
</div>
<div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-neutral-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="lucide:map-pin"></iconify-icon>
                    Serving Houston &amp; Surrounding Areas
                </div>
<div className="hidden md:block w-1 h-1 bg-neutral-800 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="lucide:check-circle-2"></iconify-icon>
                    Licensed &amp; Insured
                </div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900 border-y border-neutral-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col gap-4 p-6 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-orange-500/30 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-semibold tracking-tight text-lg">On-Time &amp; Dependable</h3>
<p className="text-sm text-neutral-400 leading-relaxed">We show up when we say we will. No waiting around wondering if your welder is coming.</p>
</div>

<div className="flex flex-col gap-4 p-6 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-orange-500/30 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="lucide:message-square" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-semibold tracking-tight text-lg">Clear Communication</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Direct contact from start to finish. We keep you informed on progress and pricing.</p>
</div>

<div className="flex flex-col gap-4 p-6 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-orange-500/30 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="lucide:badge-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-semibold tracking-tight text-lg">Professional Quality</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Elite craftsmanship on every weld. We take pride in doing the job right the first time.</p>
</div>

<div className="flex flex-col gap-4 p-6 rounded-xl bg-neutral-950 border border-neutral-800 hover:border-orange-500/30 transition-colors group">
<div className="w-12 h-12 rounded-lg bg-neutral-900 flex items-center justify-center border border-neutral-800 group-hover:bg-orange-500/10 group-hover:text-orange-500 transition-colors">
<iconify-icon icon="lucide:truck" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-white font-semibold tracking-tight text-lg">We Come To You</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Full mobile service. Whether it's a job site, home, or business, we bring the gear.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Industrial Grade Services</h2>
<p className="text-neutral-400">Comprehensive mobile welding and fabrication solutions tailored to your needs.</p>
</div>
<a className="inline-flex items-center text-orange-500 hover:text-orange-400 font-medium transition-colors" href="#contact">
                    Get a Quote <iconify-icon className="ml-2" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 hover:bg-neutral-900">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-orange-500/20 transition-colors">
<iconify-icon icon="lucide:wrench" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Equipment Repair</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 pr-8">Heavy machinery and equipment welding repairs to reduce downtime and get you back to work fast.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-neutral-500">
<iconify-icon className="mr-2 text-orange-500" icon="lucide:check" width="12"></iconify-icon> Excavators &amp; Loaders
                        </li>
<li className="flex items-center text-xs text-neutral-500">
<iconify-icon className="mr-2 text-orange-500" icon="lucide:check" width="12"></iconify-icon> Farm Equipment
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 hover:bg-neutral-900">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-orange-500/20 transition-colors">
<iconify-icon icon="lucide:container" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Trailer Repair</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 pr-8">Complete structural repairs, axle reinforcement, and hinge welding for all trailer types.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-neutral-500">
<iconify-icon className="mr-2 text-orange-500" icon="lucide:check" width="12"></iconify-icon> Utility &amp; Flatbed
                        </li>
<li className="flex items-center text-xs text-neutral-500">
<iconify-icon className="mr-2 text-orange-500" icon="lucide:check" width="12"></iconify-icon> Livestock Trailers
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 hover:bg-neutral-900">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-orange-500/20 transition-colors">
<iconify-icon icon="lucide:door-open" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Gate &amp; Fence Welding</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 pr-8">On-site repair and installation of steel gates, iron fences, and security barriers.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-neutral-500">
<iconify-icon className="mr-2 text-orange-500" icon="lucide:check" width="12"></iconify-icon> Hinge Repair
                        </li>
<li className="flex items-center text-xs text-neutral-500">
<iconify-icon className="mr-2 text-orange-500" icon="lucide:check" width="12"></iconify-icon> Security Bars
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 hover:bg-neutral-900">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-orange-500/20 transition-colors">
<iconify-icon icon="lucide:construction" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Structural Welding</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 pr-8">Column reinforcement, beam welding, and on-site structural modifications.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-neutral-500">
<iconify-icon className="mr-2 text-orange-500" icon="lucide:check" width="12"></iconify-icon> Commercial &amp; Residential
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-orange-500/50 transition-all duration-300 hover:bg-neutral-900">
<div className="absolute top-8 right-8 text-neutral-700 group-hover:text-orange-500/20 transition-colors">
<iconify-icon icon="lucide:hammer" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight">Custom Fabrication</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 pr-8">Bespoke metal solutions designed and built to your exact specifications.</p>
<ul className="space-y-2">
<li className="flex items-center text-xs text-neutral-500">
<iconify-icon className="mr-2 text-orange-500" icon="lucide:check" width="12"></iconify-icon> Racks, Mounts &amp; Frames
                        </li>
</ul>
</div>

<div className="group relative p-8 rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-900 border border-orange-900/30 hover:border-orange-500 transition-all duration-300">
<div className="absolute top-8 right-8 text-orange-900 group-hover:text-orange-500/20 transition-colors">
<iconify-icon icon="lucide:siren" strokeWidth="1" width="48"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 tracking-tight flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                        Emergency Welding
                    </h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-6 pr-8">24/7 Availability for critical failures. We mobilize immediately to fix urgent issues.</p>
<a className="inline-flex items-center justify-center w-full py-2 bg-orange-600/10 text-orange-500 border border-orange-500/20 rounded hover:bg-orange-600 hover:text-white transition-colors text-sm font-medium" href="tel:8324692855">
                        Call (832) 469-2855
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-800 bg-neutral-950" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
<div className="relative bg-neutral-900 rounded-2xl border border-neutral-800 p-8 md:p-12 overflow-hidden">
<iconify-icon className="text-neutral-800 absolute -bottom-6 -right-6 rotate-[-15deg]" icon="lucide:hard-hat" width="200"></iconify-icon>
<h3 className="text-2xl font-semibold text-white mb-4 relative z-10">Owner Operated.</h3>
<p className="text-neutral-400 mb-6 relative z-10 leading-relaxed">
                             Steady Fabbin Mobile Welding isn't a franchise. It's built on the sweat and integrity of its owner, Alan. When you call, you're speaking to the person who will handle your project.
                         </p>
<div className="flex items-center gap-4 relative z-10">
<div className="h-12 w-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-xl">A</div>
<div>
<p className="text-white font-medium">Alan</p>
<p className="text-neutral-500 text-sm">Owner &amp; Operator</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 text-xs font-medium mb-6">
                        About The Company
                    </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Built on Reliability &amp; Craftsmanship.</h2>
<p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                        We are a locally owned and operated business serving Houston, TX. In an industry where showing up is half the battle, we pride ourselves on being 100% reliable.
                    </p>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                        No fluff, no gimmicks—just honest work at a fair price. Whether it's a simple hinge repair or a complex structural modification, we bring the same level of focus and intensity to every job.
                    </p>
<div className="flex flex-wrap gap-4">
<div className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded text-sm text-neutral-300">Locally Owned</div>
<div className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded text-sm text-neutral-300">Certified Welder</div>
<div className="bg-neutral-900 border border-neutral-800 px-4 py-2 rounded text-sm text-neutral-300">24/7 Service</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="flex items-center justify-center gap-1 text-orange-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Trusted Across Houston</h2>
<p className="text-neutral-400">5.0 Star Rating on Google Reviews</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between">
<div>
<div className="mb-4 text-orange-500">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-neutral-300 leading-relaxed mb-6">
                            "10/10 experience overall. Great communication from the start, answered all my questions and was on time. Will definitely be calling back in the future!"
                        </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-neutral-800/50">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">C</div>
<span className="text-sm font-medium text-white">Customer</span>
</div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10 md:-mt-4">
<div>
<div className="mb-4 text-orange-500">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-neutral-300 leading-relaxed mb-6">
                            "Alan was prompt, communicated well, and did quality work once arrived with a fair price. 5 stars."
                        </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-neutral-800/50">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">C</div>
<span className="text-sm font-medium text-white">Customer</span>
</div>
</div>

<div className="bg-neutral-900/50 border border-neutral-800 p-8 rounded-2xl flex flex-col justify-between">
<div>
<div className="mb-4 text-orange-500">
<iconify-icon icon="lucide:quote" width="24"></iconify-icon>
</div>
<p className="text-neutral-300 leading-relaxed mb-6">
                            "Kept to his word… showed up and showed out!! Very professional… in and out in less than ten minutes."
                        </p>
</div>
<div className="flex items-center gap-3 pt-6 border-t border-neutral-800/50">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-white">C</div>
<span className="text-sm font-medium text-white">Customer</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-neutral-800 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden flex flex-col md:flex-row">
<div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
<h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Serving Houston &amp; Beyond</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 bg-neutral-800 p-2 rounded text-orange-500">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Headquarters</h4>
<p className="text-neutral-400 text-sm mt-1">13025 Verdun Dr<br/>Houston, TX 77049</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-neutral-800 p-2 rounded text-orange-500">
<iconify-icon icon="lucide:navigation" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium">Mobile Service Area</h4>
<p className="text-neutral-400 text-sm mt-1">We travel to job sites, residential homes, and commercial businesses throughout the greater Houston area.</p>
</div>
</div>
</div>
</div>

<div className="md:w-1/2 bg-neutral-800 relative min-h-[300px]">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3460.867907578334!2d-95.17646692361834!3d29.839070875027584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640a3c200000001%3A0x0!2s13025%20Verdun%20Dr%2C%20Houston%2C%20TX%2077049!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0', filter: 'grayscale(100%) invert(90%) contrast(85%)'}} width="100%">
</iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden" id="contact">
<div className="max-w-3xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Let's Get To Work</h2>
<p className="text-neutral-400 text-lg">
                    Need a quote or emergency repair? Call us directly for the fastest response, or drop a message below.
                </p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-10 shadow-2xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
<a className="flex flex-col items-center justify-center p-6 bg-orange-600 hover:bg-orange-500 rounded-xl transition-colors text-white group cursor-pointer" href="tel:8324692855">
<iconify-icon className="mb-3" icon="lucide:phone-call" width="32"></iconify-icon>
<span className="font-semibold text-lg">Call Now</span>
<span className="text-orange-100 text-sm">(832) 469-2855</span>
</a>
<div className="flex flex-col items-center justify-center p-6 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-300">
<iconify-icon className="mb-3 text-orange-500" icon="lucide:clock" width="32"></iconify-icon>
<span className="font-semibold text-lg text-white">Open 24 Hours</span>
<span className="text-neutral-500 text-sm">Always Available</span>
</div>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-400">Name</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Your Name" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-400">Phone</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="(555) 555-5555" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-neutral-400">Job Description</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Tell us what you need welded or repaired..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-neutral-950 hover:bg-neutral-200 font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2" type="button">
                        Send Request
                        <iconify-icon icon="lucide:send" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-800 py-12 pb-24 md:pb-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-2 md:text-left text-center">
<span className="text-white font-semibold tracking-tight text-lg flex items-center justify-center md:justify-start gap-2">
<iconify-icon className="text-orange-500" icon="lucide:flame" width="18"></iconify-icon>
                    STEADY FABBIN
                </span>
<p className="text-neutral-500 text-sm">Mobile Welding &amp; Fabrication in Houston, TX.</p>
</div>
<div className="flex gap-6 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="text-neutral-600 text-sm">
                ©  Steady Fabbin.
            </div>
</div>
</footer>

    </>
  );
}
