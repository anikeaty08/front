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
      

<nav className="bg-[#3A3A3E] text-white w-full z-50">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-[#FF6301] rounded-sm"></div>
<span className="text-xl font-semibold tracking-tight">repeatable.</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base text-gray-300">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">How We Work</a>
<a className="hover:text-white transition-colors" href="#">Results</a>
<a className="hover:text-white transition-colors" href="#">About</a>
</div>
<div>
<a className="hidden md:inline-flex items-center justify-center border border-white/30 hover:bg-white/10 transition-colors px-5 py-2.5 rounded-lg text-base font-medium" href="#">
                    Book a call
                </a>
</div>
</div>
</nav>

<section className="bg-[#3A3A3E] text-white py-24 lg:py-32">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 border border-white/20 bg-white/5 rounded-full px-4 py-1.5 mb-8">
<div className="w-2 h-2 rounded-full bg-[#FF6301]"></div>
<span className="text-sm font-medium text-gray-300">Trusted by growing service businesses</span>
</div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] mb-8 text-gray-50">
                    Most businesses do not fail because of lack of opportunity.<br/>
                    They fail because nothing runs properly behind the scenes.
                </h1>
<p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-3xl mb-10 font-normal">
                    We go into your business, fix what is slowing it down, and build the systems that let you scale without the chaos.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center bg-[#FF6301] hover:bg-[#E55A00] transition-colors text-white px-7 py-3.5 rounded-lg text-lg font-medium" href="#">
                        Book a 15-Minute Call
                    </a>
<a className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 transition-colors text-white px-7 py-3.5 rounded-lg text-lg font-medium" href="#">
                        See How It Works
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-gray-50">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-gray-900 mb-6">
                        You are growing. But it feels harder than it should.
                    </h2>
</div>
<div className="space-y-6 text-lg text-gray-600 leading-relaxed font-normal">
<p>
                        You have got revenue coming in. Opportunities are there. But behind the scenes, things are messier than they should be at this stage.
                    </p>
<p>
                        Processes are inconsistent. Teams rely on the same few people to hold everything together. When something breaks, it takes longer to fix than it should. Growth feels like it is happening despite the operation, not because of it.
                    </p>
<p className="text-gray-900 font-medium">
                        Working harder does not fix this. Structure does.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#1A1A1E] text-white">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="max-w-3xl mb-16">
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-6">
<div className="w-2 h-2 rounded-full bg-[#FF6301]"></div>
<span className="text-sm font-medium text-gray-300 uppercase tracking-widest">Our Approach</span>
</div>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight leading-tight mb-8">
                    We do not advise from a distance. We get involved.
                </h2>
<div className="space-y-6 text-lg text-gray-400 leading-relaxed font-normal">
<p>
                        Repeatable Solutions is not a traditional consultancy. We do not produce reports and leave. We come into your business, look at how it actually runs, and help identify and address what is in the way.
                    </p>
<p>
                        That means identifying where things are breaking down, designing processes that work in the real world, and staying until your team can run those systems independently — without needing us to hold them together.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-b border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">How it works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

<div className="relative">
<div className="text-[#FF6301] text-2xl font-semibold mb-4 tracking-tight">01</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Diagnose</h3>
<p className="text-lg text-gray-600 leading-relaxed font-normal">
                        We understand how your operation actually runs today.
                    </p>
</div>

<div className="relative">
<div className="text-[#FF6301] text-2xl font-semibold mb-4 tracking-tight">02</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Design</h3>
<p className="text-lg text-gray-600 leading-relaxed font-normal">
                        We build clear, structured processes tailored to your business.
                    </p>
</div>

<div className="relative">
<div className="text-[#FF6301] text-2xl font-semibold mb-4 tracking-tight">03</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Implement</h3>
<p className="text-lg text-gray-600 leading-relaxed font-normal">
                        We work alongside your team to put it into practice.
                    </p>
</div>

<div className="relative">
<div className="text-[#FF6301] text-2xl font-semibold mb-4 tracking-tight">04</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Sustain</h3>
<p className="text-lg text-gray-600 leading-relaxed font-normal">
                        We leave when your team can run it without us. That is the whole point.
                    </p>
</div>
</div>
<div className="mt-16">
<a className="inline-flex items-center gap-2 text-[#FF6301] font-medium text-lg hover:text-[#E55A00] transition-colors" href="#">
                    See the full process <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-gray-900 mb-6">
                        Built for businesses that are ready to run properly.
                    </h2>
</div>
<div className="space-y-6 text-lg text-gray-600 leading-relaxed font-normal">
<p>
                        We work with service businesses that have already gained traction but are feeling the pressure that comes with growth — companies where the systems have not kept up with the pace.
                    </p>
<p>
                        Our core experience is in asset-heavy sectors — engineering, plant and hire, field services — where planning, utilisation, and operational control are critical. The approach works in any business where people, processes, and performance need to work better together.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-gray-50 border-t border-gray-200">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">What you end up with.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
<i className="w-6 h-6 text-[#FF6301]" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-gray-700 leading-relaxed font-normal pt-1">
                        A business that runs more smoothly and scales more predictably.
                    </p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
<i className="w-6 h-6 text-[#FF6301]" data-lucide="users" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-gray-700 leading-relaxed font-normal pt-1">
                        Teams that work from clear systems rather than relying on individuals.
                    </p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
<i className="w-6 h-6 text-[#FF6301]" data-lucide="line-chart" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-gray-700 leading-relaxed font-normal pt-1">
                        Decisions that are easier because the information is cleaner.
                    </p>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-white p-2 rounded-lg shadow-sm border border-gray-100 shrink-0">
<i className="w-6 h-6 text-[#FF6301]" data-lucide="user-check" strokeWidth="1.5"></i>
</div>
<p className="text-lg text-gray-700 leading-relaxed font-normal pt-1">
                        A founder who runs the business — not the other way around.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#1A1A1E] text-white text-center px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight leading-tight mb-8">
                If things are working but not working properly — that is exactly where we come in.
            </h2>
<p className="text-xl text-gray-400 mb-10 font-normal">
                No hard sell. Just a practical conversation about your operation.
            </p>
<a className="inline-flex items-center justify-center bg-[#FF6301] hover:bg-[#E55A00] transition-colors text-white px-8 py-4 rounded-lg text-lg font-medium" href="#">
                Book a 15-Minute Call
            </a>
</div>
</section>

<footer className="bg-[#111114] text-gray-400 py-16 border-t border-white/10">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 bg-[#FF6301] rounded-sm"></div>
<span className="text-xl font-semibold text-white tracking-tight">repeatable.</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                        Building repeatable processes and systems for service-based businesses.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-base tracking-tight">Services</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Operations Diagnostics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Workflow Improvement</a></li>
<li><a className="hover:text-white transition-colors" href="#">Process Design &amp; Implementation</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-base tracking-tight">Company</h4>
<ul className="space-y-4 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">How We Work</a></li>
<li><a className="hover:text-white transition-colors" href="#">Results</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6 text-base tracking-tight">Contact</h4>
<ul className="space-y-4 text-sm">
<li>01284 66 45 11</li>
<li>hello@repeatable-solutions.co.uk</li>
<li className="leading-relaxed">Unit 20, The Hub, Park Farm Business Centre<br/>Fornham St Genevieve, Bury St Edmunds, IP28 6TS</li>
</ul>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
<p>© Repeatable 2026</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
