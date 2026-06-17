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
      

<div className="max-w-xl mx-auto flex justify-between items-center mb-6 text-xs text-slate-400">
<p>Premium Refurbished Laser Equipment at up to 70% Off.</p>
<a className="underline hover:text-slate-600 transition-colors" href="#">View in browser</a>
</div>

<div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

<div className="flex justify-center py-8 border-b border-slate-100 bg-white">
<div className="flex items-center gap-2">
<div className="bg-slate-900 p-1 rounded-md">
<i className="w-5 h-5 text-green-500 fill-current" data-lucide="layout-grid"></i>
</div>
<span className="text-sm font-semibold tracking-wide text-slate-900 uppercase">The Laser Agent</span>
</div>
</div>

<div className="relative bg-slate-50 border-b border-slate-100">
<img alt="Abstract fashion" className="w-full h-64 object-cover object-top opacity-90 mix-blend-multiply filter grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
</div>

<div className="px-8 py-10 text-center">
<div className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium border border-green-100 mb-6">
                New Arrivals • October 2023
            </div>
<h1 className="text-4xl text-slate-900 font-semibold tracking-tight mb-2">
                Premium Inventory
            </h1>
<h2 className="text-4xl text-green-600 font-semibold tracking-tight mb-6">
                Just Arrived
            </h2>
<p className="text-lg leading-relaxed text-slate-500 mb-8 max-w-sm mx-auto">
                We've just restocked our warehouse with certified pre-owned Candela, Cutera, and Cynosure units. Inspect them today before they're gone.
            </p>
<a className="inline-block w-full sm:w-auto px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors shadow-sm shadow-green-200" href="#">
                View All Inventory
            </a>
</div>

<div className="px-6 py-8 border-t border-slate-100 bg-slate-50/50">
<h3 className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6 pl-2">Featured Deals</h3>
<div className="space-y-4">

<div className="group bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-green-200 transition-all flex flex-col sm:flex-row gap-5">
<div className="w-full sm:w-24 h-24 bg-slate-100 rounded-lg shrink-0 overflow-hidden relative">
<img alt="Laser Machine" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-0 left-0 w-full h-full bg-slate-900/5"></div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-lg font-semibold text-slate-900">Candela GentleMax Pro</h4>
<span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-red-50 text-red-600 border border-red-100">Save 30%</span>
</div>
<p className="text-xs text-slate-400 mb-2">2019 Model • Fully Refurbished</p>
<p className="text-sm text-slate-600 leading-snug mb-3">
                            The gold standard for laser hair removal. Includes 2-year warranty and new handpieces.
                        </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-lg font-semibold text-slate-900">$45,000</span>
<a className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">
                                View Details <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="group bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-green-200 transition-all flex flex-col sm:flex-row gap-5">
<div className="w-full sm:w-24 h-24 bg-slate-100 rounded-lg shrink-0 overflow-hidden relative">
<img alt="Medical Device" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-0 left-0 w-full h-full bg-slate-900/5"></div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-lg font-semibold text-slate-900">Cutera Excel V</h4>
<span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-600 border border-slate-200">Low Stock</span>
</div>
<p className="text-xs text-slate-400 mb-2">2020 Model • Certified</p>
<p className="text-sm text-slate-600 leading-snug mb-3">
                            Premier vascular and pigmentation treatment system. Excellent condition.
                        </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-lg font-semibold text-slate-900">$52,000</span>
<a className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">
                                View Details <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>

<div className="group bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md hover:border-green-200 transition-all flex flex-col sm:flex-row gap-5">
<div className="w-full sm:w-24 h-24 bg-slate-100 rounded-lg shrink-0 overflow-hidden relative">
<img alt="Medical Equipment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=300"/>
<div className="absolute top-0 left-0 w-full h-full bg-slate-900/5"></div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-1">
<h4 className="text-lg font-semibold text-slate-900">Lumenis M22</h4>
<span className="inline-block px-2 py-0.5 rounded text-[10px] font-medium bg-blue-50 text-blue-600 border border-blue-100">Restocked</span>
</div>
<p className="text-xs text-slate-400 mb-2">2021 Model • Like New</p>
<p className="text-sm text-slate-600 leading-snug mb-3">
                            Multi-application platform for the treatment of over 30 skin conditions.
                        </p>
<div className="flex items-center justify-between mt-auto">
<span className="text-lg font-semibold text-slate-900">$38,500</span>
<a className="text-sm font-medium text-green-600 hover:text-green-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">
                                View Details <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-4 px-6 py-10 border-t border-slate-100 bg-white">
<div className="text-center flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-green-600" data-lucide="shield-check"></i>
</div>
<h5 className="text-sm font-semibold text-slate-900">2-Year</h5>
<p className="text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">Warranty</p>
</div>
<div className="text-center flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-green-600" data-lucide="truck"></i>
</div>
<h5 className="text-sm font-semibold text-slate-900">Free</h5>
<p className="text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">Shipping</p>
</div>
<div className="text-center flex flex-col items-center">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-green-600" data-lucide="wrench"></i>
</div>
<h5 className="text-sm font-semibold text-slate-900">Certified</h5>
<p className="text-[10px] uppercase tracking-wider text-slate-400 mt-0.5">Service</p>
</div>
</div>

<div className="bg-slate-50 border-t border-slate-100 px-8 py-10 text-center">
<h4 className="text-lg font-semibold text-slate-900 mb-2">Have questions about equipment?</h4>
<p className="text-base text-slate-500 mb-6 max-w-sm mx-auto">
                Our laser specialists are available 24/7 to help you find the perfect match for your clinic.
            </p>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 text-slate-900 font-medium rounded-lg transition-colors shadow-sm w-full sm:w-auto" href="tel:4634665620">
<i className="w-4 h-4 text-slate-400" data-lucide="phone"></i>
                (463) 466-5620
            </a>
</div>

<div className="bg-white border-t border-slate-100 px-8 py-8 text-center">
<div className="flex justify-center gap-4 mb-8">
<a className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="x"></i>
</a>
<a className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
<a className="p-2 rounded-full bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
</div>
<p className="text-sm font-medium text-slate-900 mb-1">The Laser Agent</p>
<p className="text-xs text-slate-400 leading-relaxed mb-6">
                123 Medical Drive, Suite 100<br/>
                Indianapolis, IN 46240
            </p>
<div className="flex justify-center gap-4 text-xs text-slate-400">
<a className="hover:text-slate-600 underline decoration-slate-200" href="#">Unsubscribe</a>
<span>•</span>
<a className="hover:text-slate-600 underline decoration-slate-200" href="#">Privacy Policy</a>
<span>•</span>
<a className="hover:text-slate-600 underline decoration-slate-200" href="#">Terms of Service</a>
</div>
</div>
</div>


    </>
  );
}
