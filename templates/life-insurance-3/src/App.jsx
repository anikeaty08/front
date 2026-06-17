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
      

<header className="w-full py-6 px-6 md:px-12 lg:px-20 flex justify-between items-center max-w-7xl mx-auto">
<div className="flex items-center gap-12">

<a className="flex items-center gap-1 group" href="#">
<span className="font-extrabold text-3xl tracking-tighter text-peach">emma</span>
</a>

<nav className="hidden md:flex gap-8 text-sm font-medium text-dark/80">
<a className="hover:text-peach transition-colors" href="#">Life Insurance</a>
<a className="hover:text-peach transition-colors" href="#">Why Emma?</a>
<a className="hover:text-peach transition-colors" href="#">Blog</a>
</nav>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-bold text-dark/60 hover:text-dark transition-colors items-center gap-1">
                English <span className="iconify" data-icon="lucide:chevron-down" data-width="14"></span>
</button>
<button className="hidden md:flex text-sm font-bold text-dark/60 hover:text-dark transition-colors">
                Login
            </button>
<button className="bg-peach text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-[#ff8566] transition-colors shadow-sm">
                Get a quote
            </button>
</div>
</header>

<section className="w-full pt-12 pb-20 px-6 md:px-12 flex flex-col items-center text-center max-w-5xl mx-auto">

<div className="flex items-center gap-3 mb-8 opacity-90 hover:opacity-100 transition-opacity cursor-default">
<span className="iconify text-[#00b67a]" data-icon="simple-icons:trustpilot" data-width="28"></span>
<div className="flex flex-col items-start text-left">
<div className="flex gap-1 text-[#00b67a]">
<span className="iconify bg-[#00b67a] text-white p-0.5" data-icon="lucide:star" data-width="16" style={{fill: 'white'}}></span>
<span className="iconify bg-[#00b67a] text-white p-0.5" data-icon="lucide:star" data-width="16" style={{fill: 'white'}}></span>
<span className="iconify bg-[#00b67a] text-white p-0.5" data-icon="lucide:star" data-width="16" style={{fill: 'white'}}></span>
<span className="iconify bg-[#00b67a] text-white p-0.5" data-icon="lucide:star" data-width="16" style={{fill: 'white'}}></span>
<span className="iconify bg-[#00b67a] text-white p-0.5" data-icon="lucide:star" data-width="16" style={{fill: 'white'}}></span>
</div>
</div>
<span className="text-sm font-bold text-dark/70 mt-0.5">1,368 reviews</span>
</div>

<h1 className="text-5xl md:text-7xl font-extrabold text-dark tracking-tight leading-[1.1] mb-6 max-w-4xl">
            The smarter way to <br className="hidden md:block"/> get <span className="text-peach">life insurance</span>
</h1>
<p className="text-xl md:text-2xl text-dark/70 font-normal mb-10 max-w-2xl leading-relaxed">
            Compare 20+ life insurance quotes in one place.
        </p>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="bg-peach text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#ff8566] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2">
                Get a quote
                <span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
<button className="bg-transparent border-2 border-dark/10 text-dark px-8 py-4 rounded-full font-bold text-lg hover:border-dark/30 hover:bg-white/50 transition-all flex items-center justify-center">
                How it works
            </button>
</div>
</section>

<section className="w-full py-12 border-t border-dark/5 bg-white/40">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-bold uppercase tracking-widest text-dark/40 mb-8">Compare quotes from top insurers</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="font-bold text-xl flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-blue-600"></span>HUMANIA</div>
<div className="font-bold text-xl flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-green-600"></span>MANULIFE</div>
<div className="font-bold text-xl flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-yellow-500"></span>SUN LIFE</div>
<div className="font-bold text-xl flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-red-600"></span>CANADA LIFE</div>
<div className="font-bold text-xl flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-blue-800"></span>BMO</div>
<div className="font-bold text-xl flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-purple-600"></span>BENEVA</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1 space-y-8">
<span className="inline-block px-4 py-1.5 rounded-lg bg-blue-50 text-blue-600 font-bold text-sm tracking-wide">
                    100% online
                </span>
<h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-tight">
                    Personalized coverage at your fingertips.
                </h2>
<p className="text-xl text-dark/70 leading-relaxed">
                    This was overdue. Life insurance should be accessible from the comfort of your own home (and couch).
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 pt-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-peach/10 flex items-center justify-center text-peach">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="3" data-width="20"></span>
</div>
<span className="font-bold text-dark text-lg">Term life insurance</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-peach/10 flex items-center justify-center text-peach">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="3" data-width="20"></span>
</div>
<span className="font-bold text-dark text-lg">Whole life insurance</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-peach/10 flex items-center justify-center text-peach">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="3" data-width="20"></span>
</div>
<span className="font-bold text-dark text-lg">Child rider</span>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-peach/10 flex items-center justify-center text-peach">
<span className="iconify" data-icon="lucide:check" data-strokeWidth="3" data-width="20"></span>
</div>
<span className="font-bold text-dark text-lg">Cancer rider</span>
</div>
</div>
<div className="pt-6">
<button className="text-peach font-bold text-lg hover:text-[#ff8566] transition-colors flex items-center gap-2 group">
                        Get a quote
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
</div>
</div>

<div className="order-1 md:order-2 flex justify-center">
<div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] border-[8px] border-dark shadow-2xl overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark rounded-b-2xl z-20"></div>

<div className="w-full h-full bg-[#FAFAFA] flex flex-col pt-12 px-6">
<div className="flex justify-between items-center mb-8">
<span className="font-extrabold text-xl text-peach">emma</span>
<div className="w-8 h-8 rounded-full bg-gray-200"></div>
</div>
<div className="space-y-4">
<div className="text-2xl font-bold text-dark">Hi, Sarah! 👋</div>
<div className="text-sm text-gray-500 mb-4">Your personalized quote is ready.</div>

<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
<div className="flex justify-between mb-2">
<span className="font-bold text-dark">Term 20</span>
<span className="text-green-600 font-bold">$24/mo</span>
</div>
<div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
<div className="bg-peach h-full w-3/4 rounded-full"></div>
</div>
</div>

<div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
<div className="flex justify-between mb-2">
<span className="font-bold text-dark">Coverage</span>
<span className="text-dark font-medium">$500,000</span>
</div>
<div className="flex items-center gap-2 mt-3">
<div className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md font-bold">Recommended</div>
</div>
</div>
<button className="w-full bg-peach text-white py-3 rounded-xl font-bold mt-4 shadow-lg shadow-peach/30">
                                Apply Now
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white/50 rounded-[3rem] my-12">
<div className="grid md:grid-cols-2 gap-20 items-start">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4 hover:-translate-y-1 transition-transform duration-300">
<div className="flex text-[#FFB800] gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<p className="text-dark/80 text-sm leading-relaxed">
                        "I am about to have a baby and absolutely needed to make sure I had updated life insurance. The application process was easy."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-600">SM</div>
<span className="font-bold text-sm text-dark">Steph M.</span>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4 mt-0 sm:mt-12 hover:-translate-y-1 transition-transform duration-300">
<div className="flex text-[#FFB800] gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<p className="text-dark/80 text-sm leading-relaxed">
                        "Life insurance made simple! Least stressful or confusing process I've seen. Highly recommended."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-600">RM</div>
<span className="font-bold text-sm text-dark">Ravi M.</span>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4 hover:-translate-y-1 transition-transform duration-300">
<div className="flex text-[#FFB800] gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<p className="text-dark/80 text-sm leading-relaxed">
                        "No phone call, all online, just a new-school way of doing things. So easy. Way to revolutionize life insurance."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600">KD</div>
<span className="font-bold text-sm text-dark">Kelsie D.</span>
</div>
</div>

<div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 space-y-4 mt-0 sm:mt-12 hover:-translate-y-1 transition-transform duration-300">
<div className="flex text-[#FFB800] gap-1">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor'}}></span>
</div>
<p className="text-dark/80 text-sm leading-relaxed">
                        "Michael was extremely helpful and answered all my questions! Happy to have peace of mind."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-xs font-bold text-yellow-600">AS</div>
<span className="font-bold text-sm text-dark">Alexa S.</span>
</div>
</div>
</div>

<div className="space-y-8 sticky top-24">
<span className="inline-block px-4 py-1.5 rounded-lg bg-green-50 text-green-600 font-bold text-sm tracking-wide">
                    Free support
                </span>
<h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight leading-tight">
                    Powered by human certified advisors.
                </h2>
<p className="text-xl text-dark/70 leading-relaxed">
                    Life insurance can be tricky at times. That’s why we have a team of real financial advisors available at all times to guide you through the process, jargon-free.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<div className="bg-white border border-gray-200 px-6 py-4 rounded-xl flex items-center gap-3">
<span className="iconify text-peach" data-icon="lucide:award" data-width="24"></span>
<div>
<div className="font-bold text-dark text-sm">AMF Certified</div>
<div className="text-xs text-gray-500">License #603236</div>
</div>
</div>
</div>
<div className="pt-6">
<button className="bg-white border-2 border-dark/10 text-dark px-8 py-3 rounded-full font-bold text-lg hover:border-dark/30 hover:bg-white transition-all flex items-center gap-2">
                        Get a quote
                    </button>
</div>
</div>
</div>
</section>

<section className="w-full py-20 px-6 max-w-4xl mx-auto text-left md:text-center">
<h2 className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight mb-6">
            Protect what is most important <br className="hidden md:block"/> in your life.
        </h2>
<p className="text-xl text-dark/70 mb-10 max-w-2xl mx-auto">
            You’ve made it to the end! Now, here’s the easy part: get your quote in just 5 minutes.
        </p>
<div className="flex justify-start md:justify-center">
<button className="bg-peach text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#ff8566] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Get a quote
            </button>
</div>
</section>

<footer className="w-full py-16 px-6 md:px-12 bg-white mt-12 border-t border-dark/5">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="col-span-1 space-y-6">
<a className="font-extrabold text-3xl tracking-tighter text-peach" href="#">emma</a>
<div className="text-sm font-medium text-dark/60 space-y-1">
<p>7900-300 Boul. Pierre-Bertrand</p>
<p>Quebec, Qc, G2J 0C5</p>
</div>
<div className="text-sm font-bold text-dark space-y-1">
<p>(438) 806-7227</p>
<a className="hover:text-peach underline decoration-2 decoration-peach/30 hover:decoration-peach transition-all" href="mailto:hello@emma.ca">hello@emma.ca</a>
</div>
<div className="flex gap-4 pt-2">
<a className="text-dark/40 hover:text-blue-600 transition-colors" href="#"><span className="iconify" data-icon="simple-icons:facebook" data-width="20"></span></a>
<a className="text-dark/40 hover:text-pink-600 transition-colors" href="#"><span className="iconify" data-icon="simple-icons:instagram" data-width="20"></span></a>
<a className="text-dark/40 hover:text-blue-700 transition-colors" href="#"><span className="iconify" data-icon="simple-icons:linkedin" data-width="20"></span></a>
<a className="text-dark/40 hover:text-red-600 transition-colors" href="#"><span className="iconify" data-icon="simple-icons:youtube" data-width="20"></span></a>
</div>
</div>

<div className="col-span-1 md:col-span-3 flex flex-col md:flex-row justify-end gap-12 md:gap-24">
<div className="flex flex-col gap-4 text-sm font-bold text-dark">
<a className="hover:text-peach" href="#">Why Emma?</a>
<a className="hover:text-peach" href="#">Blog</a>
<a className="hover:text-peach" href="#">Careers</a>
</div>
<div className="flex flex-col gap-4 text-sm font-bold text-dark">
<a className="hover:text-peach" href="#">About us</a>
<a className="hover:text-peach" href="#">Support</a>
<a className="hover:text-peach" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4 text-sm font-bold text-dark">
<a className="hover:text-peach" href="#">Login</a>
<a className="hover:text-peach text-peach" href="#">Get a quote</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-12 mt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs font-medium text-dark/40">
<p>2025 © Emma Services Financiers inc. AMF Certificate Registration no.: 603236</p>
<div className="flex gap-6">
<a className="hover:text-dark transition-colors" href="#">Privacy</a>
<a className="hover:text-dark transition-colors" href="#">Terms</a>
<a className="hover:text-dark transition-colors" href="#">Complaint</a>
</div>
</div>
</footer>

    </>
  );
}
