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



        document.addEventListener('DOMContentLoaded', () => {
            // Scroll Reveal Animation
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });

            // FAQ Accordion Logic
            const faqBtns = document.querySelectorAll('.faq-btn');
            faqBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const content = btn.nextElementSibling;
                    const icon = btn.querySelector('iconify-icon');
                    
                    const isOpen = content.style.maxHeight;
                    
                    document.querySelectorAll('.faq-content').forEach(item => {
                        item.style.maxHeight = null;
                    });
                    document.querySelectorAll('.faq-btn iconify-icon').forEach(item => {
                        item.style.transform = 'rotate(0deg)';
                    });

                    if (!isOpen) {
                        content.style.maxHeight = content.scrollHeight + "px";
                        icon.style.transform = 'rotate(180deg)';
                    }
                });
            });
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
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-[0.25]" style={{backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)', backgroundSize: '32px 32px', animation: 'pan-dots 60s linear infinite'}}></div>

<div className="fixed top-[10%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] pointer-events-none z-0">
<div className="w-full h-full rounded-full bg-[#FFD400]/5 blur-[120px]" style={{animation: 'float-glow 25s ease-in-out infinite'}}></div>
</div>

<header className="relative z-40 w-full flex justify-center py-6 px-6">
<div className="w-full max-w-7xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20 flex items-center justify-center">
<iconify-icon className="text-[#FFD400] text-lg" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-white font-light tracking-tight text-2xl sm:text-lg">Purposeful Performer</span>
</div>
<a className="hidden sm:inline-flex px-6 py-2.5 rounded-full bg-white/5 border border-white/5 text-white text-lg font-light hover:bg-white/10 transition-colors backdrop-blur-md" href="#book">
                Book a Conversation
            </a>
</div>
</header>
<main className="flex-grow flex flex-col relative z-10">

<section className="flex flex-col text-center w-full max-w-5xl mx-auto pt-20 px-6 pb-24 relative items-center justify-center min-h-[85vh]">
<h1 className="sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] sm:leading-[1.1] text-5xl font-light text-white tracking-tight reveal active">
                Sell With Purpose. <br className="hidden md:block"/>
<span className="block mt-2 sm:mt-4">
                    Perform With <span className="font-serif italic text-[#FFD400] pr-2">Impact.</span>
</span>
</h1>
<p className="sm:text-3xl leading-relaxed reveal delay-100 active text-2xl font-light text-gray-400 font-geist max-w-3xl mt-8">
<span className="text-white">Brandon Fluharty</span> helps modern sales professionals reconnect with purpose, build authentic relationships, and perform at their highest level.
            </p>
<div className="mt-14 w-full flex justify-center reveal delay-200 active">
<a className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#FFD400] text-black text-xl font-medium hover:bg-[#ffe033] transition-colors shadow-[0_0_30px_rgba(255,212,0,0.15)]" href="#book">
                    Book a Sales Conversation
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="w-full max-w-4xl mt-20 aspect-[16/9] rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center reveal delay-300 relative overflow-hidden group hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="relative z-10 flex flex-col items-center p-6 text-center">
<div className="w-16 h-16 rounded-full bg-[#FFD400]/10 border border-[#FFD400]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-[#FFD400]" icon="solar:play-linear"></iconify-icon>
</div>
<span className="text-[#FFD400]/80 text-xs font-light tracking-widest uppercase mb-3">Video Placeholder</span>
<h3 className="text-xl sm:text-2xl font-light text-white tracking-tight">Watch Brandon Explain The Purposeful Performer Mindset</h3>
</div>
</div>
</section>

<section className="relative w-full z-10 flex flex-col items-center justify-center text-center py-20 px-6 border-t border-white/5">
<div className="z-10 flex flex-col w-full max-w-5xl mx-auto relative items-center reveal">
<p className="uppercase text-sm font-light text-gray-500 tracking-widest font-geist mb-10">Organizations and professionals influenced by Brandon’s work</p>

<div className="w-full h-32 sm:h-40 rounded-2xl bg-white/[0.02] border border-white/5 border-dashed flex items-center justify-center backdrop-blur-sm">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-3xl text-gray-600" icon="solar:gallery-wide-linear"></iconify-icon>
<span className="text-gray-500 font-light tracking-widest uppercase text-xs">Image Placeholder</span>
</div>
</div>
</div>
</section>

<section className="relative w-full z-10 py-32 px-6 border-t border-white/5">
<div className="relative z-10 w-full max-w-7xl mx-auto">
<div className="mb-20 text-center max-w-3xl mx-auto flex flex-col items-center reveal">
<p className="text-[#FFD400]/80 text-sm font-light tracking-widest uppercase mb-4">The Challenge</p>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1]">
                        Why Modern Sellers <br className="hidden sm:block"/>
<span className="font-serif italic text-[#FFD400] pr-2">Feel Disconnected</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white/[0.01] border border-white/5 backdrop-blur-sm p-10 sm:p-12 rounded-[2rem] relative overflow-hidden hover:bg-white/[0.02] transition-colors duration-500 reveal">
<h3 className="sm:text-3xl text-2xl font-light text-white tracking-tight mb-4">Loss of Purpose</h3>
<p className="sm:text-xl leading-relaxed text-lg font-light text-gray-400 font-geist">Many sales professionals struggle to connect their work to meaningful impact.</p>
</div>

<div className="bg-white/[0.01] border border-white/5 backdrop-blur-sm p-10 sm:p-12 rounded-[2rem] relative overflow-hidden hover:bg-white/[0.02] transition-colors duration-500 reveal delay-100">
<h3 className="text-2xl sm:text-3xl font-light mb-4 tracking-tight text-white">Transactional Conversations</h3>
<p className="sm:text-xl leading-relaxed text-lg font-light text-gray-400 font-geist">Sales interactions feel forced instead of authentic.</p>
</div>

<div className="bg-white/[0.01] border border-white/5 backdrop-blur-sm p-10 sm:p-12 rounded-[2rem] relative overflow-hidden hover:bg-white/[0.02] transition-colors duration-500 reveal">
<h3 className="text-2xl sm:text-3xl font-light mb-4 tracking-tight text-white">Burnout</h3>
<p className="sm:text-xl leading-relaxed text-lg font-light text-gray-400 font-geist">Constant pressure causes sellers to disconnect from why they started.</p>
</div>

<div className="bg-white/[0.01] border border-white/5 backdrop-blur-sm p-10 sm:p-12 rounded-[2rem] relative overflow-hidden hover:bg-white/[0.02] transition-colors duration-500 reveal delay-100">
<h3 className="text-2xl sm:text-3xl font-light mb-4 tracking-tight text-white">Weak Buyer Relationships</h3>
<p className="sm:text-xl leading-relaxed text-lg font-light text-gray-400 font-geist">Without trust, deals stall and relationships fail to grow.</p>
</div>
</div>
</div>
</section>

<section className="relative w-full z-10 py-32 px-6 border-t border-white/5">
<div className="relative z-10 w-full max-w-7xl mx-auto">
<div className="mb-20 text-center flex flex-col items-center reveal">
<p className="text-[#FFD400]/80 text-sm font-light tracking-widest uppercase mb-4">The Solution</p>
<h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1] max-w-3xl">
                        Why Sales Professionals Follow <span className="font-serif italic text-[#FFD400]">Brandon Fluharty</span>
</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-auto">

<div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.01] p-10 flex flex-col gap-6 backdrop-blur-sm hover:bg-white/[0.02] transition-colors duration-300 reveal">
<div className="w-12 h-12 rounded-full border border-[#FFD400]/20 bg-[#FFD400]/5 flex items-center justify-center text-[#FFD400]">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-light text-white tracking-tight">Purpose-Driven Philosophy</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 font-geist">Sales becomes powerful when it is aligned with purpose.</p>
</div>

<div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.01] p-10 flex flex-col gap-6 backdrop-blur-sm hover:bg-white/[0.02] transition-colors duration-300 reveal delay-100">
<div className="w-12 h-12 rounded-full border border-[#FFD400]/20 bg-[#FFD400]/5 flex items-center justify-center text-[#FFD400]">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-light text-white tracking-tight">Authentic Buyer Engagement</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 font-geist">Real conversations build stronger relationships.</p>
</div>

<div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.01] p-10 flex flex-col gap-6 backdrop-blur-sm hover:bg-white/[0.02] transition-colors duration-300 reveal">
<div className="w-12 h-12 rounded-full border border-[#FFD400]/20 bg-[#FFD400]/5 flex items-center justify-center text-[#FFD400]">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-light text-white tracking-tight">Modern Sales Leadership</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 font-geist">Helping professionals navigate today’s buyer environment.</p>
</div>

<div className="relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/[0.01] p-10 flex flex-col gap-6 backdrop-blur-sm hover:bg-white/[0.02] transition-colors duration-300 reveal delay-100">
<div className="w-12 h-12 rounded-full border border-[#FFD400]/20 bg-[#FFD400]/5 flex items-center justify-center text-[#FFD400]">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-light text-white tracking-tight">Personal Growth Focus</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 font-geist">Mindset and performance are connected.</p>
</div>
</div>
</div>
</section>

<section className="relative w-full z-10 flex flex-col items-center justify-center text-center py-32 px-6 border-t border-white/5">
<div className="z-10 flex flex-col w-full max-w-4xl mx-auto relative items-center reveal">
<h3 className="text-3xl sm:text-4xl leading-[1.3] font-light text-gray-300 tracking-tight mb-16 max-w-3xl">
                    Professionals around the world follow Brandon Fluharty’s ideas on <span className="font-serif italic text-white">purposeful selling and authentic engagement.</span>
</h3>

<div className="w-full aspect-[21/9] sm:aspect-[21/7] rounded-3xl bg-white/[0.02] border border-white/5 border-dashed flex items-center justify-center backdrop-blur-sm">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-4xl text-gray-600" icon="solar:chat-square-like-linear"></iconify-icon>
<span className="uppercase text-xs font-light text-gray-500 tracking-widest font-geist mt-2">Image Placeholder</span>
<span className="text-sm font-light text-gray-600 font-geist">Community feedback and audience insights</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-24 reveal">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1]">
                        The Purposeful Performer <span className="font-serif italic text-[#FFD400]">Approach</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">

<div className="bg-white/[0.01] rounded-[2rem] border border-white/5 p-10 relative overflow-hidden backdrop-blur-sm reveal flex flex-col justify-center min-h-[320px]">
<div className="absolute -right-6 -top-6 text-[180px] font-light text-white/[0.02] leading-none pointer-events-none">1</div>
<div className="relative z-10">
<h3 className="text-2xl sm:text-3xl font-light mb-5 tracking-tight text-white">Reconnect With Purpose</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 font-geist">
                                Understand why you sell and who you serve.
                            </p>
</div>
</div>

<div className="bg-white/[0.01] rounded-[2rem] border border-white/5 p-10 relative overflow-hidden backdrop-blur-sm reveal delay-100 flex flex-col justify-center min-h-[320px]">
<div className="absolute -right-6 -top-6 text-[180px] font-light text-white/[0.02] leading-none pointer-events-none">2</div>
<div className="relative z-10">
<h3 className="text-2xl sm:text-3xl font-light mb-5 tracking-tight text-white">Strengthen Authentic Conversations</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 font-geist">
                                Build genuine trust with buyers.
                            </p>
</div>
</div>

<div className="bg-white/[0.01] rounded-[2rem] border border-white/5 p-10 relative overflow-hidden backdrop-blur-sm reveal delay-200 flex flex-col justify-center min-h-[320px]">
<div className="absolute -right-6 -top-6 text-[180px] font-light text-white/[0.02] leading-none pointer-events-none">3</div>
<div className="relative z-10">
<h3 className="text-2xl sm:text-3xl font-light mb-5 tracking-tight text-white">Perform With Confidence</h3>
<p className="leading-relaxed text-lg font-light text-gray-400 font-geist">
                                Apply purpose-driven sales techniques that produce results.
                            </p>
</div>
</div>
</div>
<div className="flex justify-center reveal delay-300">
<a className="inline-flex items-center justify-center gap-3 hover:bg-[#ffe033] transition-colors text-lg font-medium text-black font-montserrat bg-[#FFD400] rounded-full pt-4 pr-8 pb-4 pl-8" href="#book">
                        Begin Your Purposeful Sales Journey
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative z-10">
<div className="max-w-4xl mx-auto relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="sm:text-5xl leading-[1.1] text-4xl font-light text-white tracking-tight">
                        What's Included
                    </h2>
</div>
<div className="bg-white/[0.01] rounded-[2rem] border border-white/5 p-10 sm:p-14 reveal relative overflow-hidden backdrop-blur-sm">
<div className="absolute inset-0 bg-[#FFD400]/5 blur-3xl opacity-50"></div>
<ul className="sm:space-y-8 z-10 relative space-y-6">
<li className="flex gap-5 items-center">
<div className="w-10 h-10 rounded-full border border-[#FFD400]/20 bg-[#FFD400]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#FFD400]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="sm:text-2xl text-xl font-light text-gray-200 tracking-tight font-geist">Purpose-Driven Sales Coaching</span>
</li>
<li className="flex gap-5 items-center">
<div className="w-10 h-10 rounded-full border border-[#FFD400]/20 bg-[#FFD400]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#FFD400]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="sm:text-2xl text-xl font-light text-gray-200 tracking-tight font-geist">Authentic Buyer Engagement Frameworks</span>
</li>
<li className="flex gap-5 items-center">
<div className="w-10 h-10 rounded-full border border-[#FFD400]/20 bg-[#FFD400]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#FFD400]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="sm:text-2xl text-xl font-light text-gray-200 tracking-tight font-geist">Sales Mindset Development</span>
</li>
<li className="flex gap-5 items-center">
<div className="w-10 h-10 rounded-full border border-[#FFD400]/20 bg-[#FFD400]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#FFD400]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="sm:text-2xl text-xl font-light text-gray-200 tracking-tight font-geist">Modern Selling Strategies</span>
</li>
<li className="flex gap-5 items-center">
<div className="w-10 h-10 rounded-full border border-[#FFD400]/20 bg-[#FFD400]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-[#FFD400]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="sm:text-2xl text-xl font-light text-gray-200 tracking-tight font-geist">Performance Coaching</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative z-10">
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<div className="w-full aspect-[4/5] rounded-[2rem] bg-white/[0.02] border border-white/5 border-dashed flex flex-col items-center justify-center backdrop-blur-sm overflow-hidden">
<iconify-icon className="text-6xl text-gray-600 mb-4" icon="solar:user-linear"></iconify-icon>
<span className="text-gray-500 font-light tracking-widest uppercase text-xs">Image Placeholder</span>
</div>
</div>
<div className="flex flex-col gap-8 reveal delay-100">
<h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight">
                            Hi, I’m <span className="font-serif italic text-[#FFD400]">Brandon Fluharty.</span>
</h2>
<div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
<p className="font-geist">
                                Through Purposeful Performer, I help sales professionals reconnect with their purpose and build the mindset needed to perform at their highest level.
                            </p>
<p className="font-geist">
                                My mission is simple: help sellers create authentic relationships and make meaningful impact through their work.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 relative z-10">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1] mb-20 text-center reveal">
                    Frequently Asked Questions
                </h2>
<div className="space-y-4 reveal">

<div className="faq-item bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden transition-colors hover:bg-white/[0.02]">
<button className="faq-btn w-full px-8 py-6 flex items-center justify-between text-left">
<span className="font-light text-xl text-white">Who is this designed for?</span>
<iconify-icon className="text-2xl text-gray-500 transition-transform duration-300 transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<p className="px-8 pb-6 text-gray-400 text-lg font-light leading-relaxed">
                                Sales professionals and leaders seeking purpose-driven performance.
                            </p>
</div>
</div>

<div className="faq-item bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden transition-colors hover:bg-white/[0.02]">
<button className="faq-btn w-full px-8 py-6 flex items-center justify-between text-left">
<span className="font-light text-xl text-white">Is this traditional sales training?</span>
<iconify-icon className="text-2xl text-gray-500 transition-transform duration-300 transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<p className="px-8 pb-6 text-gray-400 text-lg font-light leading-relaxed">
                                No. The focus is authentic engagement and purposeful selling.
                            </p>
</div>
</div>

<div className="faq-item bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden transition-colors hover:bg-white/[0.02]">
<button className="faq-btn w-full px-8 py-6 flex items-center justify-between text-left">
<span className="font-light text-xl text-white">Does this help experienced sellers?</span>
<iconify-icon className="text-2xl text-gray-500 transition-transform duration-300 transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<p className="px-8 pb-6 text-gray-400 text-lg font-light leading-relaxed">
                                Yes. The mindset and frameworks strengthen modern selling.
                            </p>
</div>
</div>

<div className="faq-item bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden transition-colors hover:bg-white/[0.02]">
<button className="faq-btn w-full px-8 py-6 flex items-center justify-between text-left">
<span className="font-light text-xl text-white">What makes Brandon’s approach different?</span>
<iconify-icon className="text-2xl text-gray-500 transition-transform duration-300 transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<p className="px-8 pb-6 text-gray-400 text-lg font-light leading-relaxed">
                                The integration of purpose, mindset, and performance.
                            </p>
</div>
</div>

<div className="faq-item bg-white/[0.01] border border-white/5 rounded-2xl overflow-hidden transition-colors hover:bg-white/[0.02]">
<button className="faq-btn w-full px-8 py-6 flex items-center justify-between text-left">
<span className="font-light text-xl text-white">How do I get started?</span>
<iconify-icon className="text-2xl text-gray-500 transition-transform duration-300 transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
<p className="px-8 pb-6 text-gray-400 text-lg font-light leading-relaxed">
                                Book a conversation to explore if the Purposeful Performer approach aligns with your goals.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-white/5 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]" id="book">
<div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
<div className="w-[600px] h-[400px] rounded-full bg-[#FFD400]/10 blur-[120px]"></div>
</div>
<div className="relative z-10 text-center flex flex-col items-center w-full max-w-4xl reveal">

<h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-8">
                    Start Your Purposeful <br/>
<span className="font-serif italic text-[#FFD400]">Sales Journey</span>
</h2>

<p className="leading-relaxed text-xl font-light text-gray-400 font-geist max-w-2xl mb-16">
                    Book a conversation to explore how Brandon Fluharty’s Purposeful Performer approach can help you sell with authenticity and confidence.
                </p>

<div className="w-full max-w-3xl aspect-[16/10] sm:aspect-[16/8] rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center mb-12 border-dashed">
<iconify-icon className="text-5xl text-gray-600 mb-4" icon="solar:calendar-date-linear"></iconify-icon>
<span className="uppercase text-xs font-light text-gray-500 tracking-widest font-geist mb-2">Calendly Placeholder</span>
<span className="text-sm font-light text-gray-600 font-geist">Interactive booking widget will appear here</span>
</div>

<button className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-[#FFD400] text-black text-xl font-medium hover:bg-[#ffe033] transition-colors shadow-[0_0_40px_rgba(255,212,0,0.15)]">
                    Book My Call
                    <iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>
</main>

<footer className="pt-20 pb-12 px-6 border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<div className="flex items-center gap-2 mb-4">
<span className="text-white font-light tracking-tight text-3xl">Purposeful Performer</span>
</div>
<p className="leading-relaxed text-lg font-light text-gray-500 font-geist max-w-md">
                        Helping modern sales professionals reconnect with purpose and perform at their highest level.
                    </p>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm font-light text-gray-600 font-geist">© 2024 Purposeful Performer. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/5 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:map-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
