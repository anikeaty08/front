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
      
<section className="py-16 px-4 overflow-hidden">
<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Trusted by subscription businesses worldwide
                </h2>
<p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    Join thousands of companies already streamlining their subscription management with our platform
                </p>
</div>

<div className="relative">

<div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

<div className="flex gap-8 overflow-hidden">

<div className="flex gap-8 animate-[marquee_40s_linear_infinite]">

<div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<p className="text-slate-700 mb-4">
                                "This subscription manager has transformed how we handle recurring billing. The analytics dashboard gives us insights we never had before."
                            </p>
<div className="flex items-center">
<img alt="Emma Thompson" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" />
<div>
<h4 className="font-medium text-slate-900">Emma Thompson</h4>
<a className="text-sm text-slate-500" href="#">@emmafintech</a>
</div>
</div>
</div>
<div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<p className="text-slate-700 mb-4">
                                "The dunning management alone saved us 15% in recovered revenue. Customer retention has never been higher."
                            </p>
<div className="flex items-center">
<img alt="David Park" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
<div>
<h4 className="font-medium text-slate-900">David Park</h4>
<a className="text-sm text-slate-500" href="#">@davidsubscribe</a>
</div>
</div>
</div>
<div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<p className="text-slate-700 mb-4">
                                "We've reduced churn by 23% since implementing this subscription manager. The customer portal is intuitive and our support tickets have dropped dramatically."
                            </p>
<div className="flex items-center">
<img alt="Sofia Rodriguez" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" />
<div>
<h4 className="font-medium text-slate-900">Sofia Rodriguez</h4>
<span className="text-sm text-slate-500">@sofiarevenue</span>
</div>
</div>
</div>
<div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<p className="text-slate-700 mb-4">
                                "The flexibility in pricing models has allowed us to experiment with different tiers and bundles. Our ARPU has increased by 27%."
                            </p>
<div className="flex items-center">
<img alt="Michael Chen" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" />
<div>
<h4 className="font-medium text-slate-900">Michael Chen</h4>
<a className="text-sm text-slate-500" href="#">@michaelsaas</a>
</div>
</div>
</div>
</div>

<div aria-hidden="true" className="flex gap-8 animate-[marquee_40s_linear_infinite]">
<div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<p className="text-slate-700 mb-4">
                                "This subscription manager has transformed how we handle recurring billing. The analytics dashboard gives us insights we never had before."
                            </p>
<div className="flex items-center">
<img alt="Emma Thompson" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" />
<div>
<h4 className="font-medium text-slate-900">Emma Thompson</h4>
<a className="text-sm text-slate-500" href="#">@emmafintech</a>
</div>
</div>
</div>
<div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<p className="text-slate-700 mb-4">
                                "The dunning management alone saved us 15% in recovered revenue. Customer retention has never been higher."
                            </p>
<div className="flex items-center">
<img alt="David Park" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
<div>
<h4 className="font-medium text-slate-900">David Park</h4>
<a className="text-sm text-slate-500" href="#">@davidsubscribe</a>
</div>
</div>
</div>
<div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<p className="text-slate-700 mb-4">
                                "We've reduced churn by 23% since implementing this subscription manager. The customer portal is intuitive and our support tickets have dropped dramatically."
                            </p>
<div className="flex items-center">
<img alt="Sofia Rodriguez" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" />
<div>
<h4 className="font-medium text-slate-900">Sofia Rodriguez</h4>
<span className="text-sm text-slate-500">@sofiarevenue</span>
</div>
</div>
</div>
<div className="flex-shrink-0 w-80 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<p className="text-slate-700 mb-4">
                                "The flexibility in pricing models has allowed us to experiment with different tiers and bundles. Our ARPU has increased by 27%."
                            </p>
<div className="flex items-center">
<img alt="Michael Chen" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face" />
<div>
<h4 className="font-medium text-slate-900">Michael Chen</h4>
<a className="text-sm text-slate-500" href="#">@michaelsaas</a>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 space-y-6 md:hidden">
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<p className="text-slate-700 mb-4">
                        "This subscription manager has transformed how we handle recurring billing. The analytics dashboard gives us insights we never had before."
                    </p>
<div className="flex items-center">
<img alt="Emma Thompson" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face" />
<div>
<h4 className="font-medium text-slate-900">Emma Thompson</h4>
<a className="text-sm text-slate-500" href="#">@emmafintech</a>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<p className="text-slate-700 mb-4">
                        "The dunning management alone saved us 15% in recovered revenue. Customer retention has never been higher."
                    </p>
<div className="flex items-center">
<img alt="David Park" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face" />
<div>
<h4 className="font-medium text-slate-900">David Park</h4>
<a className="text-sm text-slate-500" href="#">@davidsubscribe</a>
</div>
</div>
</div>
<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
<p className="text-slate-700 mb-4">
                        "We've reduced churn by 23% since implementing this subscription manager. The customer portal is intuitive and our support tickets have dropped dramatically."
                    </p>
<div className="flex items-center">
<img alt="Sofia Rodriguez" className="w-10 h-10 rounded-full mr-3" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face" />
<div>
<h4 className="font-medium text-slate-900">Sofia Rodriguez</h4>
<span className="text-sm text-slate-500">@sofiarevenue</span>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
