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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, { 
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            });

            document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
        });
    
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
      

<div className="bg-[#7B2D8B] text-[#FFFFFF] py-2 px-4 flex justify-center items-center text-xs w-full z-50 relative">
<div className="flex items-center gap-2 text-center opacity-90">
<iconify-icon className="text-[#C89AD4] text-sm" icon="solar:check-circle-linear"></iconify-icon>
<span>TouchPro certified · Established 1991 · London-based, available UK-wide</span>
</div>
</div>

<nav className="sticky top-0 bg-[#FFFFFF]/90 backdrop-blur-md z-40 border-b border-[#E8D5F0]/30 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex-shrink-0 flex items-center group" href="#">
<span className="text-xl md:text-2xl font-semibold tracking-tighter text-[#7B2D8B] group-hover:opacity-80 transition-opacity">STRESSBUSTERS</span>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-[#333333] hover:text-[#7B2D8B] transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#7B2D8B] transition-colors" href="#">What We Do</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#7B2D8B] transition-colors" href="#">About</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#7B2D8B] transition-colors" href="#">Blog</a>
<a className="text-sm font-medium text-[#333333] hover:text-[#7B2D8B] transition-colors" href="#">Contact</a>
</div>

<div className="hidden md:flex items-center">
<a className="bg-[#7B2D8B] text-[#FFFFFF] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#4A1A5C] transition-colors duration-300 shadow-sm hover:shadow-md" href="#">
                        Get a Quote
                    </a>
</div>

<div className="flex items-center md:hidden">
<button aria-controls="mobile-menu" aria-expanded="false" className="text-[#333333] hover:text-[#7B2D8B] focus:outline-none" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden bg-[#FFFFFF] border-b border-[#E8D5F0]" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1 flex flex-col shadow-lg">
<a className="block px-3 py-3 text-base font-medium text-[#333333] hover:bg-[#FAF7F2] hover:text-[#7B2D8B] rounded-lg" href="#">Home</a>
<a className="block px-3 py-3 text-base font-medium text-[#333333] hover:bg-[#FAF7F2] hover:text-[#7B2D8B] rounded-lg" href="#">What We Do</a>
<a className="block px-3 py-3 text-base font-medium text-[#333333] hover:bg-[#FAF7F2] hover:text-[#7B2D8B] rounded-lg" href="#">About</a>
<a className="block px-3 py-3 text-base font-medium text-[#333333] hover:bg-[#FAF7F2] hover:text-[#7B2D8B] rounded-lg" href="#">Blog</a>
<a className="block px-3 py-3 text-base font-medium text-[#333333] hover:bg-[#FAF7F2] hover:text-[#7B2D8B] rounded-lg" href="#">Contact</a>
<a className="mt-4 block text-center bg-[#7B2D8B] text-[#FFFFFF] text-base font-medium px-6 py-3 rounded-full hover:bg-[#4A1A5C] transition-colors" href="#">
                    Get a Quote
                </a>
</div>
</div>
</nav>

<header className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Professional office massage" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-[#111111]/55 backdrop-blur-[2px]"></div>
</div>

<div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center mt-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#FFFFFF] mb-6 leading-tight">
                Work Never Felt So Good
            </h1>
<p className="text-lg md:text-xl font-normal text-[#FFFFFF]/90 mb-10 max-w-2xl leading-relaxed">
                Stressbusters brings professional massage and workplace wellbeing to your office. Trusted by London businesses since 1991.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-[#7B2D8B] text-[#FFFFFF] text-base font-medium px-8 py-3.5 rounded-full hover:bg-[#4A1A5C] transition-colors duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform" href="#">
                    Get in Touch
                </a>
<a className="w-full sm:w-auto bg-transparent border border-[#FFFFFF]/80 text-[#FFFFFF] text-base font-medium px-8 py-3.5 rounded-full hover:bg-[#FFFFFF] hover:text-[#333333] transition-all duration-300 hover:-translate-y-0.5 transform" href="#">
                    What We Do
                </a>
</div>
</div>
</header>

<section className="bg-[#FFFFFF] border-y border-[#E8D5F0]/50 relative z-20 -mt-1 shadow-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 md:py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 md:divide-x divide-[#E8D5F0] text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
<div className="flex flex-col items-center justify-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-[#7B2D8B] mb-1">30+</span>
<span className="text-xs text-[#888888] font-medium uppercase tracking-widest">Years in business</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-[#7B2D8B] mb-1">#1</span>
<span className="text-xs text-[#888888] font-medium uppercase tracking-widest">First in the UK</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-3xl md:text-4xl font-semibold tracking-tight text-[#7B2D8B] mb-1">100%</span>
<span className="text-xs text-[#888888] font-medium uppercase tracking-widest">TouchPro certified</span>
</div>
<div className="flex flex-col items-center justify-center">
<span className="text-lg md:text-xl font-semibold tracking-tight text-[#7B2D8B] mb-1 leading-tight mt-1">London-based</span>
<span className="text-xs text-[#888888] font-medium uppercase tracking-widest">Available UK-wide</span>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-24 md:py-32">
<div className="max-w-3xl mx-auto px-6 lg:px-8 text-center animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-[#7B2D8B] mb-6 leading-tight">
                Your team is working hard.<br className="hidden md:block"/> Are you looking after them?
            </h2>
<p className="text-base md:text-lg text-[#666666] leading-relaxed">
                Workplace stress costs UK businesses billions every year in lost productivity, sick days and staff turnover. The solution doesn't have to be complicated. Sometimes it's an hour, a chair, and hands that know exactly what they're doing.
            </p>
</div>
</section>

<section className="bg-[#FAF7F2] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#7B2D8B]">Three ways we help.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#FFFFFF] rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_-12px_rgba(232,213,240,0.6)] hover:-translate-y-2 hover:shadow-[0_16px_40px_-12px_rgba(200,154,212,0.4)] transition-all duration-400 ease-out flex flex-col animate-on-scroll opacity-0 translate-y-8">
<div className="h-14 w-14 bg-[#FAF7F2] rounded-xl flex items-center justify-center mb-8 border border-[#E8D5F0]/50 text-[#7B2D8B]">
<iconify-icon className="text-2xl" icon="solar:chair-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#333333] mb-4 uppercase text-sm tracking-wider">Massage at Work</h3>
<p className="text-sm md:text-base text-[#666666] mb-8 flex-grow leading-relaxed">
                        Chair and table massage delivered directly to your office. Fully clothed, no disruption, no equipment to worry about. Sessions from 10 minutes.
                    </p>
<a className="inline-flex items-center text-sm font-semibold text-[#7B2D8B] group mt-auto w-fit" href="#">
                        Find out more
                        <iconify-icon className="ml-2 text-lg transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-[#FFFFFF] rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_-12px_rgba(232,213,240,0.6)] hover:-translate-y-2 hover:shadow-[0_16px_40px_-12px_rgba(200,154,212,0.4)] transition-all duration-400 ease-out flex flex-col animate-on-scroll opacity-0 translate-y-8 delay-100">
<div className="h-14 w-14 bg-[#FAF7F2] rounded-xl flex items-center justify-center mb-8 border border-[#E8D5F0]/50 text-[#7B2D8B]">
<iconify-icon className="text-2xl" icon="solar:hand-stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#333333] mb-4 uppercase text-sm tracking-wider">Bodywork &amp; Therapies</h3>
<p className="text-sm md:text-base text-[#666666] mb-8 flex-grow leading-relaxed">
                        Reflexology, Indian head massage, acupressure and more. A wider menu of complementary treatments for teams who want to go a little deeper.
                    </p>
<a className="inline-flex items-center text-sm font-semibold text-[#7B2D8B] group mt-auto w-fit" href="#">
                        Find out more
                        <iconify-icon className="ml-2 text-lg transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-[#FFFFFF] rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_-12px_rgba(232,213,240,0.6)] hover:-translate-y-2 hover:shadow-[0_16px_40px_-12px_rgba(200,154,212,0.4)] transition-all duration-400 ease-out flex flex-col animate-on-scroll opacity-0 translate-y-8 delay-200">
<div className="h-14 w-14 bg-[#FAF7F2] rounded-xl flex items-center justify-center mb-8 border border-[#E8D5F0]/50 text-[#7B2D8B]">
<iconify-icon className="text-2xl" icon="solar:brain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#333333] mb-4 uppercase text-sm tracking-wider">Mindwork &amp; Workshops</h3>
<p className="text-sm md:text-base text-[#666666] mb-8 flex-grow leading-relaxed">
                        Stress management, mindfulness and resilience workshops that tackle workplace pressure at the root. Practical and grounded.
                    </p>
<a className="inline-flex items-center text-sm font-semibold text-[#7B2D8B] group mt-auto w-fit" href="#">
                        Find out more
                        <iconify-icon className="ml-2 text-lg transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-24 md:py-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#7B2D8B] mb-8 leading-tight">
                        The original. Still the best.
                    </h2>
<div className="space-y-6 text-base md:text-lg text-[#666666] leading-relaxed mb-10">
<p>
                            We started in 1991 — before workplace wellness was a buzzword, before it was a budget line, before anyone had a Chief Wellbeing Officer. We did it because we believed people deserved to feel good at work. We still do.
                        </p>
<p>
                            Our practitioners are trained through TouchPro — the gold standard in chair massage, affiliated with the original school founded by David Palmer, the man who invented chair massage. Our training is the most rigorous in the industry.
                        </p>
<p>
                            Three decades in, we're still here. Still showing up. Still making offices feel better.
                        </p>
</div>
<div className="flex flex-wrap gap-4 mb-10">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF7F2] text-[#7B2D8B] text-xs font-semibold border border-[#E8D5F0]">1991 Founded</span>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF7F2] text-[#7B2D8B] text-xs font-semibold border border-[#E8D5F0]">#1 First in the UK</span>
<span className="inline-flex items-center px-3 py-1 rounded-full bg-[#FAF7F2] text-[#7B2D8B] text-xs font-semibold border border-[#E8D5F0]">100% TouchPro trained</span>
</div>
<a className="inline-flex items-center text-base font-semibold text-[#7B2D8B] group border-b-2 border-transparent hover:border-[#7B2D8B] pb-1 transition-all" href="#">
                        About Us
                        <iconify-icon className="ml-2 text-lg transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="order-1 lg:order-2 relative animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
<div className="absolute inset-0 bg-[#E8D5F0] rounded-[2rem] transform translate-x-4 translate-y-4 -z-10"></div>
<img alt="Professional massage therapist arriving at office" className="rounded-[2rem] shadow-xl w-full object-cover aspect-[4/5] lg:aspect-square" src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="bg-[#FAF7F2] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#7B2D8B]">Built for the people who look after people.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">

<div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-[#E8D5F0]"></div>
<div className="text-center md:text-left relative z-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="h-3 w-3 bg-[#C89AD4] rounded-full mx-auto md:mx-0 mb-6 ring-4 ring-[#FAF7F2]"></div>
<h3 className="text-sm font-semibold tracking-widest uppercase text-[#333333] mb-4">HR Managers</h3>
<p className="text-sm md:text-base text-[#666666] leading-relaxed">
                        Building a wellbeing programme that actually gets used. We make it easy to set up, simple to repeat, and straightforward to justify to leadership.
                    </p>
</div>
<div className="text-center md:text-left relative z-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100">
<div className="h-3 w-3 bg-[#C89AD4] rounded-full mx-auto md:mx-0 mb-6 ring-4 ring-[#FAF7F2]"></div>
<h3 className="text-sm font-semibold tracking-widest uppercase text-[#333333] mb-4">Event Planners</h3>
<p className="text-sm md:text-base text-[#666666] leading-relaxed">
                        Looking for something that lands well and gets people talking. Massage at an event is memorable, inclusive and genuinely appreciated every time.
                    </p>
</div>
<div className="text-center md:text-left relative z-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
<div className="h-3 w-3 bg-[#C89AD4] rounded-full mx-auto md:mx-0 mb-6 ring-4 ring-[#FAF7F2]"></div>
<h3 className="text-sm font-semibold tracking-widest uppercase text-[#333333] mb-4">PAs &amp; Office Managers</h3>
<p className="text-sm md:text-base text-[#666666] leading-relaxed">
                        Want to give the team a proper treat without the headache? One conversation and we handle everything from there.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#7B2D8B]">What our clients say.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-[#FAF7F2] rounded-2xl p-8 lg:p-10 relative group hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-8">
<iconify-icon className="absolute top-6 left-6 text-6xl text-[#C89AD4]/30 -z-0 group-hover:scale-110 transition-transform duration-500" icon="solar:quote-left-linear"></iconify-icon>
<div className="relative z-10 flex flex-col h-full">
<p className="text-base md:text-lg text-[#333333] mb-8 font-medium leading-relaxed italic">
                            "The team absolutely loved it. We've booked Stressbusters four times now and the feedback is always the same — when are they coming back?"
                        </p>
<div className="mt-auto">
<p className="text-sm font-semibold text-[#7B2D8B]">Sarah T.</p>
<p className="text-xs text-[#666666]">HR Manager, London</p>
</div>
</div>
</div>

<div className="bg-[#FAF7F2] rounded-2xl p-8 lg:p-10 relative group hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 delay-100">
<iconify-icon className="absolute top-6 left-6 text-6xl text-[#C89AD4]/30 -z-0 group-hover:scale-110 transition-transform duration-500" icon="solar:quote-left-linear"></iconify-icon>
<div className="relative z-10 flex flex-col h-full">
<p className="text-base md:text-lg text-[#333333] mb-8 font-medium leading-relaxed italic">
                            "Professional, punctual and genuinely brilliant. Exactly what our wellness day needed."
                        </p>
<div className="mt-auto">
<p className="text-sm font-semibold text-[#7B2D8B]">James K.</p>
<p className="text-xs text-[#666666]">Events Director, London</p>
</div>
</div>
</div>

<div className="bg-[#FAF7F2] rounded-2xl p-8 lg:p-10 relative group hover:shadow-lg transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 delay-200">
<iconify-icon className="absolute top-6 left-6 text-6xl text-[#C89AD4]/30 -z-0 group-hover:scale-110 transition-transform duration-500" icon="solar:quote-left-linear"></iconify-icon>
<div className="relative z-10 flex flex-col h-full">
<p className="text-base md:text-lg text-[#333333] mb-8 font-medium leading-relaxed italic">
                            "People were calmer, more focused. We're making it a monthly thing."
                        </p>
<div className="mt-auto">
<p className="text-sm font-semibold text-[#7B2D8B]">Claire M.</p>
<p className="text-xs text-[#666666]">People &amp; Culture Lead</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#7B2D8B] py-24 md:py-32 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[50%] h-[150%] bg-[#4A1A5C]/20 blur-3xl rounded-full transform rotate-12"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[40%] h-[100%] bg-[#C89AD4]/10 blur-3xl rounded-full"></div>
</div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#FFFFFF] mb-6 leading-tight">
                Ready to give your team a break they'll remember?
            </h2>
<p className="text-lg md:text-xl text-[#F0E8F8] mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
                It starts with a conversation. No hard sell, no complicated setup — just a quick chat about what your team needs and how we can help.
            </p>
<a className="inline-block bg-[#FFFFFF] text-[#7B2D8B] text-base font-semibold px-10 py-4 rounded-full hover:bg-[#FAF7F2] transition-colors duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1 transform mb-8" href="#">
                Get a Quote Today
            </a>
<div className="flex items-center justify-center gap-2 text-xs md:text-sm text-[#D4B8E0] font-medium">
<iconify-icon className="text-lg" icon="solar:info-circle-linear"></iconify-icon>
<span>Based in London · Available across the UK · Responding within one working day</span>
</div>
</div>
</section>

<footer className="bg-[#4A1A5C] text-[#FFFFFF] pt-20 pb-0">
<div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

<div className="flex flex-col space-y-6">
<span className="text-2xl font-semibold tracking-tighter text-[#FFFFFF]">STRESSBUSTERS</span>
<p className="text-[#E8D5F0] text-sm leading-relaxed max-w-xs">
                        Work Never Felt So Good
                    </p>
<div className="flex space-x-4 pt-2">
<a className="text-[#D4B8E0] hover:text-[#FFFFFF] transition-colors hover:-translate-y-1 transform inline-block" href="#">
<iconify-icon className="text-2xl" icon="solar:instagram-linear"></iconify-icon>
</a>
<a className="text-[#D4B8E0] hover:text-[#FFFFFF] transition-colors hover:-translate-y-1 transform inline-block" href="#">
<iconify-icon className="text-2xl" icon="solar:linkedin-linear"></iconify-icon>
</a>
<a className="text-[#D4B8E0] hover:text-[#FFFFFF] transition-colors hover:-translate-y-1 transform inline-block" href="#">
<iconify-icon className="text-2xl" icon="solar:facebook-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-[#FFFFFF] font-semibold tracking-tight text-base mb-6">Services</h4>
<ul className="space-y-4 text-sm text-[#E8D5F0]">
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">What We Do</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Massage at Work</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Bodywork &amp; Therapies</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Mindwork &amp; Workshops</a></li>
</ul>
</div>

<div>
<h4 className="text-[#FFFFFF] font-semibold tracking-tight text-base mb-6">Company</h4>
<ul className="space-y-4 text-sm text-[#E8D5F0]">
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors flex items-center group" href="#">
                            TouchPro Training 
                            <iconify-icon className="ml-1 opacity-70 group-hover:opacity-100" icon="solar:arrow-right-up-linear"></iconify-icon>
</a></li>
</ul>
</div>

<div>
<h4 className="text-[#FFFFFF] font-semibold tracking-tight text-base mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-[#E8D5F0]">
<li><a className="hover:text-[#FFFFFF] transition-colors" href="mailto:hello@stressbusters.co.uk">hello@stressbusters.co.uk</a></li>
<li><a className="hover:text-[#FFFFFF] transition-colors" href="tel:+442012345678">020 1234 5678</a></li>
<li className="pt-2 opacity-80 flex items-start">
<iconify-icon className="mt-0.5 mr-2 text-lg shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>London-based, available UK-wide</span>
</li>
</ul>
</div>
</div>
</div>

<div className="bg-[#3D1550] py-6 border-t border-[#4A1A5C]">
<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center text-[#A888BC] text-xs">
                © 2026 Stressbusters. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
