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
      

<div className="bg-gray-900 text-white text-xs py-2.5 text-center px-4 font-medium tracking-wide">
<span className="opacity-80">[New &amp; Summer Only]:</span> We'll build your Maximus Profit &amp; Expansion System™ and give you €300 in AD credits - for instant results
    </div>

<header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-gray-100 transition-all duration-300 mt-[38px]">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter text-gray-900 uppercase flex items-center gap-2" href="#">
<span className="iconify" data-height="20" data-icon="lucide:layers" data-width="20"></span>
                MAXIMUS
            </a>

<nav className="hidden xl:flex items-center gap-6 text-xs font-medium text-gray-500 uppercase tracking-wide">
<a className="hover:text-gray-900 transition-colors" href="#">Home</a>
<a className="hover:text-gray-900 transition-colors" href="#">Kickstart</a>
<a className="hover:text-gray-900 transition-colors" href="#">Scale</a>
<a className="hover:text-gray-900 transition-colors" href="#">Partnership™</a>
<a className="hover:text-gray-900 transition-colors" href="#">Agency</a>
<a className="hover:text-gray-900 transition-colors" href="#">Case studies</a>
<a className="hover:text-gray-900 transition-colors" href="#">Events</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-xs font-medium text-gray-600 hover:text-gray-900" href="tel:02519811567158">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
                    (0251) 981 156 7158
                </a>
<button className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium py-2 px-4 rounded-lg transition-all flex items-center gap-2">
                    Request conversation
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
<button className="xl:hidden text-gray-600">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</header>
<main className="pt-[38px]">

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 subtle-gradient">
<div className="max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Ready for your next growth spurt?
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-6 leading-[1.1]">
                    We'll build you a lucrative <br className="hidden md:block"/> online business
                </h1>
<p className="text-lg md:text-xl text-gray-500 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
                    That will not only bring you more customers, but also a life full of prosperity, impact &amp; boundless freedom.
                </p>
<p className="text-sm text-gray-400 max-w-2xl mx-auto mb-10">
                    Benefit now, like <span className="text-gray-900 font-medium">211+ enthusiastic participants</span>, from the first holistic entrepreneurial coaching program that combines professional online marketing, automated AI systems &amp; inner identity work.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="w-full sm:w-auto bg-gray-900 text-white h-12 px-8 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gray-200">
                        Request an expansion call now
                        <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto bg-white text-gray-700 border border-gray-200 h-12 px-8 rounded-lg text-sm font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                        Watch strategy video (8 min)
                    </button>
</div>
<div className="flex items-center justify-center gap-6 text-xs text-gray-400 font-medium tracking-wide uppercase">
<div className="flex items-center gap-2">
<span className="iconify text-gray-900" data-icon="lucide:check-circle" data-width="14"></span> More Customers
                    </div>
<div className="flex items-center gap-2">
<span className="iconify text-gray-900" data-icon="lucide:check-circle" data-width="14"></span> More Revenue
                    </div>
<div className="flex items-center gap-2">
<span className="iconify text-gray-900" data-icon="lucide:check-circle" data-width="14"></span> No Tech Frustration
                    </div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-white">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 divide-x divide-gray-100 border-x border-gray-100">
<div className="p-8 text-center group hover:bg-gray-50 transition-colors">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-1">302<span className="text-gray-400 font-light">+</span></div>
<div className="text-xs text-gray-500 uppercase tracking-wide">ProfitExpansion-Funnel</div>
</div>
<div className="p-8 text-center group hover:bg-gray-50 transition-colors">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-1">2.9<span className="text-gray-400 font-light">x</span></div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Increased sales</div>
</div>
<div className="p-8 text-center group hover:bg-gray-50 transition-colors">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-1">7<span className="text-gray-400 font-light">M</span></div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Revenue Achieved</div>
</div>
<div className="p-8 text-center group hover:bg-gray-50 transition-colors">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-1">95<span className="text-gray-400 font-light">%</span></div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Immediate Leads</div>
</div>
<div className="col-span-2 md:col-span-1 p-8 text-center group hover:bg-gray-50 transition-colors">
<div className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-1">211<span className="text-gray-400 font-light">+</span></div>
<div className="text-xs text-gray-500 uppercase tracking-wide">Participants</div>
</div>
</div>
</section>

<div className="sticky top-16 z-40 bg-white/90 backdrop-blur border-b border-gray-100 overflow-x-auto no-scrollbar">
<div className="max-w-7xl mx-auto px-6 flex items-center gap-8 h-12 text-xs font-medium text-gray-500 whitespace-nowrap">
<a className="text-gray-900" href="#">Top</a>
<a className="hover:text-gray-900 transition-colors" href="#products">Our products</a>
<a className="hover:text-gray-900 transition-colors" href="#problems">The problem</a>
<a className="hover:text-gray-900 transition-colors" href="#">The participant</a>
<a className="hover:text-gray-900 transition-colors" href="#">What's inside?</a>
<a className="hover:text-gray-900 transition-colors" href="#">The steps</a>
<a className="hover:text-gray-900 transition-colors" href="#">Testimonials</a>
<a className="hover:text-gray-900 transition-colors" href="#">FAQ</a>
</div>
</div>

<section className="py-24 px-6 bg-gray-50" id="products">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">What do we do at Maximus?</h2>
<p className="text-gray-500 font-light max-w-2xl">Holistic entrepreneurial solutions ranging from mentoring to full-service agency work.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl border border-gray-200 flex flex-col hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
<span className="iconify" data-icon="lucide:rocket" data-width="20"></span>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-1">Maximus x KickstartMentoring</h3>
<p className="text-sm text-gray-500 mb-6 leading-relaxed font-light">
                            Do you want to start an online business but lack a clear system? We'll develop your positioning, product, and acquisition system in weeks.
                        </p>
<div className="mt-auto">
<div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-50">
<strong className="text-gray-900 font-medium">Ideal for:</strong> Starting online entrepreneurs.
                            </div>
<a className="text-xs font-medium text-gray-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                Click here to learn more <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 flex flex-col hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
<span className="iconify" data-icon="lucide:trending-up" data-width="20"></span>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-1">Maximus x ScaleMentoring</h3>
<p className="text-sm text-gray-500 mb-6 leading-relaxed font-light">
                            Your business is running, but you want more. We optimize offering, automate marketing, and build scalable sales systems.
                        </p>
<div className="mt-auto">
<div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-50">
<strong className="text-gray-900 font-medium">Ideal for:</strong> Revenue €15k+ scaling to €100k+.
                            </div>
<a className="text-xs font-medium text-gray-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                Click here to learn more <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 flex flex-col hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-gray-900 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-lg">Popular</div>
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
<span className="iconify" data-icon="lucide:handshake" data-width="20"></span>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-1">Maximus x Partnership™</h3>
<p className="text-sm text-gray-500 mb-6 leading-relaxed font-light">
                            Not coaching, but a commitment. We build your scalable business together on a profit-sharing basis. No risk, full power.
                        </p>
<div className="mt-auto">
<div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-50">
<strong className="text-gray-900 font-medium">Ideal for:</strong> Revenue 20k+ aiming for 1M+.
                            </div>
<a className="text-xs font-medium text-gray-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                Click here to learn more <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 flex flex-col hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
<span className="iconify" data-icon="lucide:briefcase" data-width="20"></span>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-1">Maximus x Agency</h3>
<p className="text-sm text-gray-500 mb-6 leading-relaxed font-light">
                            Full-service marketing without chaos. Paid ads, content, funnels &amp; social media from a single source.
                        </p>
<div className="mt-auto">
<div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-50">
<strong className="text-gray-900 font-medium">Ideal for:</strong> Entrepreneurs needing first-class service.
                            </div>
<a className="text-xs font-medium text-gray-900 flex items-center gap-1 hover:gap-2 transition-all" href="#">
                                Click here to learn more <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-gray-200 flex flex-col hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 text-gray-900">
<span className="iconify" data-icon="lucide:sun" data-width="20"></span>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-1">Maximus x Finca Consulting</h3>
<p className="text-sm text-gray-500 mb-6 leading-relaxed font-light">
                            Two exclusive days in Mallorca. Deep dive into brand foundation, strategy, and next-level transformation.
                        </p>
<div className="mt-auto">
<div className="text-xs text-gray-400 mb-4 pt-4 border-t border-gray-50">
<strong className="text-gray-900 font-medium">Ideal for:</strong> A real strategic leap.
                            </div>
<a className="text-xs font-medium text-green-600 flex items-center gap-1 hover:gap-2 transition-all" href="#">
<span className="iconify" data-icon="lucide:message-circle" data-width="12"></span>
                                Write to us on WhatsApp
                            </a>
</div>
</div>

<div className="bg-gray-900 text-white p-8 rounded-xl border border-gray-800 flex flex-col hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center mb-6 text-white">
<span className="iconify" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-1">Maximus x AI Solutions</h3>
<p className="text-sm text-gray-400 mb-6 leading-relaxed font-light">
                            We implement every process for you: automation, lead scoring, and intelligent agents. We ensure AI works for you.
                        </p>
<div className="mt-auto">
<div className="text-xs text-gray-500 mb-4 pt-4 border-t border-gray-800">
<strong className="text-white font-medium">Ideal for:</strong> Unlocking full AI potential.
                            </div>
<a className="text-xs font-medium text-white flex items-center gap-1 hover:gap-2 transition-all" href="#">
<span className="iconify" data-icon="lucide:message-circle" data-width="12"></span>
                                Write to us on WhatsApp
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-gray-100" id="problems">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 mb-16 items-start">
<div className="md:w-1/3">
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">But do these problems sound familiar to you?</h2>
<div className="w-12 h-1 bg-gray-900 rounded-full mb-6"></div>
</div>
<div className="md:w-2/3">
<p className="text-lg text-gray-500 font-light leading-relaxed">
                            Have you ever considered that it's not your fault you haven't yet achieved your goals 100%? It's probably simply because you're letting one (or more) of these 6 problems hold you back:
                        </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group">
<div className="flex items-center gap-4 mb-3">
<span className="text-gray-200 font-bold text-4xl group-hover:text-gray-900 transition-colors">01</span>
<div className="h-px bg-gray-100 flex-1"></div>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">No Clarity.</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                            Tried many things, believing the new strategy would be the breakthrough? Uncertainty on the next step kills progress.
                        </p>
</div>

<div className="group">
<div className="flex items-center gap-4 mb-3">
<span className="text-gray-200 font-bold text-4xl group-hover:text-gray-900 transition-colors">02</span>
<div className="h-px bg-gray-100 flex-1"></div>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Lack of Skills.</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                            Missing out on potential because attention was split. Focus on one skill brings mastery, but lack of focus brings mediocrity.
                        </p>
</div>

<div className="group">
<div className="flex items-center gap-4 mb-3">
<span className="text-gray-200 font-bold text-4xl group-hover:text-gray-900 transition-colors">03</span>
<div className="h-px bg-gray-100 flex-1"></div>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Unoptimized Sales.</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                            Customers come in small amounts. Lack of predictability and security due to a less-than-ideal sales process.
                        </p>
</div>

<div className="group">
<div className="flex items-center gap-4 mb-3">
<span className="text-gray-200 font-bold text-4xl group-hover:text-gray-900 transition-colors">04</span>
<div className="h-px bg-gray-100 flex-1"></div>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">No Sparring Partner.</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                            Knowing how isn't enough. You need an experienced partner to overcome obstacles efficiently, not just theory.
                        </p>
</div>

<div className="group">
<div className="flex items-center gap-4 mb-3">
<span className="text-gray-200 font-bold text-4xl group-hover:text-gray-900 transition-colors">05</span>
<div className="h-px bg-gray-100 flex-1"></div>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">No Time, But Overhaul.</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                            Too many tasks, too little focus. We bring order to chaos and show exactly where the greatest leverage lies.
                        </p>
</div>

<div className="group">
<div className="flex items-center gap-4 mb-3">
<span className="text-gray-200 font-bold text-4xl group-hover:text-gray-900 transition-colors">06</span>
<div className="h-px bg-gray-100 flex-1"></div>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Mindset Hurdles.</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">
                            Plenty of knowledge, lack of implementation. We ensure you take action and stick with it, 24/7.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-200">
<div className="max-w-4xl mx-auto text-center px-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">Start your expansion today.</h2>
<p className="text-gray-500 text-lg mb-10 font-light">Join the 211+ participants who have transformed their businesses.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-gray-900 text-white h-12 px-8 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg">
                        Request free consultation
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<p className="text-xs text-gray-400 mt-4 sm:mt-0 sm:ml-4 flex items-center gap-1">
<span className="iconify" data-icon="lucide:clock" data-width="12"></span> Limited Offer
                    </p>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-gray-900 font-semibold tracking-tighter uppercase text-sm">
<span className="iconify" data-icon="lucide:layers" data-width="16"></span>
                MAXIMUS
            </div>
<div className="text-xs text-gray-400">
                © 2024 Maximus Profit &amp; Expansion System™. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:youtube" data-width="20"></span></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
</div>
</div>
</footer>

    </>
  );
}
