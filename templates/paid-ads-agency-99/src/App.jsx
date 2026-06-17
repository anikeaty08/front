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
      

<nav className="border-b border-gray-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
<div className="flex items-center gap-4 lg:gap-8">
<a className="" href="index.html">
<img alt="agencyprices.com" className="sm:h-7 w-auto h-6 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa4f9cf4-1be6-4525-9191-619cd7c5ea0a_1600w.png"/>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="hover:text-gray-900 transition-colors text-sm text-gray-600" href="#how-it-works">
              How It Works
            </a>
<a className="hover:text-gray-900 transition-colors text-sm text-gray-600" href="/for-agencies">
              For Agencies
            </a>
<a className="hover:text-gray-900 transition-colors text-sm text-gray-600" href="#reviews">
              Reviews
            </a>
</div>
</div>
<a className="hidden sm:inline-block hover:bg-blue-600 transition-colors lg:px-5 lg:py-2.5 text-sm font-medium text-white bg-blue-500 rounded-lg pt-2 pr-4 pb-2 pl-4" href="https://dtc.agencyprices.com/1">
          Get Free Quotes
        </a>

<button className="md:hidden p-2 -mr-2 text-gray-600">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
<div className="max-w-3xl mx-auto text-center">

<div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gray-50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8">
<div className="flex items-center gap-0.5">
<iconify-icon className="text-amber-400 text-sm sm:text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm sm:text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm sm:text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm sm:text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm sm:text-base" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs sm:text-sm text-gray-700">
<span className="font-medium">4.9</span>
            from 200+ reviews
          </span>
</div>

<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4 sm:mb-6 leading-tight">
          Find the
          <span className="text-blue-500 italic">Perfect</span>
          Paid Ads Agency for Your Brand
        </h1>

<p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto px-2">
          Compare offers from top 1% vetted agencies, maximize your ad spend,
          and get
          <a className="text-blue-500 underline decoration-1 underline-offset-2 hover:text-blue-600" href="https://dtc.agencyprices.com/1">
            3 free quotes
          </a>
          within 24 hours.
        </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
<a className="sm:w-auto hover:bg-blue-600 transition-colors sm:px-8 sm:py-4 text-base font-medium text-white text-center bg-blue-500 w-full rounded-xl pt-3.5 pr-6 pb-3.5 pl-6" href="https://dtc.agencyprices.com/1">
            Get Free Quotes Now
          </a>
<a className="flex items-center justify-center gap-2 hover:text-gray-900 transition-colors sm:py-4 text-base font-medium text-gray-600 pt-3.5 pr-6 pb-3.5 pl-6" href="#how-it-works">
<iconify-icon className="text-xl" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
            See How It Works
          </a>
</div>

<p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-4">
          Takes 1 minute • 100% free • No obligations
        </p>
</div>
</section>

<section className="bg-gray-50 py-12 sm:py-16" id="reviews">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<p className="text-xs sm:text-sm text-gray-900 text-center mb-6 sm:mb-8">
          Trusted by
          <span className="text-blue-500 underline decoration-1 underline-offset-2">
            8-9 Figure DTC
          </span>
          Brands
        </p>

<div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
<span className="text-gray-400 font-semibold text-base sm:text-lg tracking-wide">
            bueno
          </span>
<span className="text-gray-400 font-bold text-base sm:text-lg tracking-wider">
            OOFOS
          </span>
<span className="text-gray-400 font-medium text-base sm:text-lg tracking-widest uppercase">
            Vionic
          </span>
<span className="text-gray-400 font-medium text-base sm:text-lg hidden sm:inline">
            GIGI
            <span className="font-normal">MODA</span>
</span>
<span className="text-gray-400 font-medium text-base sm:text-lg tracking-widest uppercase">
            Taft
          </span>
<span className="text-gray-400 font-bold text-base sm:text-lg hidden sm:inline">
            ketch.
          </span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

<div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100">
<div className="flex items-center gap-0.5 mb-3 sm:mb-4">
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-700 leading-relaxed mb-4 sm:mb-5">
              "Saved $2,000/mo &amp; the new agency is already outperforming the
              old one. The matching process was incredibly smooth."
            </p>
<div className="flex items-center gap-3">
<img alt="Martin M." className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=face" style={{}}/>
<div>
<p className="text-sm font-medium text-gray-900">Martin M.</p>
<p className="text-xs text-gray-500">Founder, Vemni Products</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100">
<div className="flex items-center gap-0.5 mb-3 sm:mb-4">
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-700 leading-relaxed mb-4 sm:mb-5">
              "Within 48 hours we had 3 amazing proposals. Our ROAS improved by
              40% in the first month with the new agency."
            </p>
<div className="flex items-center gap-3">
<img alt="Sarah K." className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=face" style={{}}/>
<div>
<p className="text-sm font-medium text-gray-900">Sarah K.</p>
<p className="text-xs text-gray-500">CMO, Luxe Apparel</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 md:col-span-2 lg:col-span-1">
<div className="flex items-center gap-0.5 mb-3 sm:mb-4">
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-amber-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-700 leading-relaxed mb-4 sm:mb-5">
              "Best decision we made this year. The vetting process gave us
              confidence we were choosing a top-tier agency."
            </p>
<div className="flex items-center gap-3">
<img alt="David L." className="w-9 h-9 sm:w-10 sm:h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=face" style={{}}/>
<div className="">
<p className="text-sm font-medium text-gray-900">David L.</p>
<p className="text-xs text-gray-500">CEO, Modern Home Co.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 lg:py-24" id="how-it-works">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="text-center mb-10 sm:mb-12 lg:mb-16">
<p className="text-xs font-semibold text-blue-500 tracking-wide uppercase mb-2 sm:mb-3">
            How It Works
          </p>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Get matched in
            <span className="text-blue-500 italic">3 simple</span>
            steps
          </h2>
<p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto px-2">
            Our
            <span className="text-blue-500 underline decoration-1 underline-offset-2">
              21-step vetting
            </span>
            process ensures you only work with top 1% agencies.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">

<div className="text-center">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5">
<iconify-icon className="text-blue-500 text-xl sm:text-2xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-1.5 sm:mb-2">
              Step 1
            </p>
<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2 tracking-tight">
              Tell Us Your Needs
            </h3>
<p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
              Fill out a quick 1-minute form about your brand, budget, and
              goals.
            </p>
</div>

<div className="text-center">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5">
<iconify-icon className="text-blue-500 text-xl sm:text-2xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-1.5 sm:mb-2">
              Step 2
            </p>
<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2 tracking-tight">
              Get Matched
            </h3>
<p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
              We match you with 3 vetted agencies that fit your specific
              requirements.
            </p>
</div>

<div className="text-center">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5">
<iconify-icon className="text-blue-500 text-xl sm:text-2xl" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-1.5 sm:mb-2">
              Step 3
            </p>
<h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2 tracking-tight">
              Compare &amp; Choose
            </h3>
<p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">
              Review proposals and pick the agency that best fits your needs.
            </p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 lg:py-20">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="bg-gray-900 rounded-2xl sm:rounded-3xl px-6 sm:px-10 lg:px-16 py-10 sm:py-12 lg:py-16 text-center">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-3 sm:mb-4">
            Ready to find your
            <span className="text-blue-400 italic">perfect</span>
            agency?
          </h2>
<p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-lg mx-auto">
            Join 500+ DTC brands who found their ideal paid ads partner through
            our platform.
          </p>
<a className="inline-block bg-blue-500 hover:bg-blue-600 transition-colors text-white font-medium text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg sm:rounded-xl mb-4 sm:mb-5" href="https://dtc.agencyprices.com/1">
            Get Your 3 Free Quotes
          </a>
<p className="text-xs text-gray-500 mb-6 sm:mb-8">
            Takes 1 minute • 100% free • No obligations
          </p>
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-base sm:text-lg" icon="logos:meta-icon"></iconify-icon>
<span className="text-xs sm:text-sm text-gray-400">
              All agencies are verified Meta Business Partners
            </span>
</div>
</div>
</div>
</section>
<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

<div className="md:col-span-5 flex flex-col gap-4">
<a className="text-xl font-semibold tracking-tight inline-flex" href="index.html">
<span className="text-blue-600">agencyprices</span>
<span className="text-gray-900">.com</span>
</a>
<p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              Data-driven agency matchmaking for DTC brands. We help you find
              the perfect marketing partner based on verified performance data.
            </p>
<div className="flex items-center gap-4 mt-2">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:brand-twitter-linear"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:brand-linkedin-linear"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:brand-instagram-linear"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-1"></div>

<div className="md:col-span-6 grid grid-cols-2 gap-8">

<div>
<h4 className="font-semibold text-gray-900 text-sm mb-4">Platform</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1.5 group" href="https://dtc.agencyprices.com/1">
                    Get a Quote
                    <iconify-icon className="text-xs opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
<li>
<a className="text-sm text-gray-500 hover:text-blue-600 transition-colors" href="#how-it-works">
                    How it Works
                  </a>
</li>
<li>
<a className="text-sm text-gray-500 hover:text-blue-600 transition-colors" href="/for-agencies">
                    For Agencies
                  </a>
</li>
</ul>
</div>

<div>
<h4 className="font-semibold text-gray-900 text-sm mb-4">Legal</h4>
<ul className="space-y-3">
<li>
<a className="text-sm text-gray-500 hover:text-blue-600 transition-colors" href="/legal">
                    Privacy Policy
                  </a>
</li>
<li>
<a className="text-sm text-gray-500 hover:text-blue-600 transition-colors" href="/legal">
                    Terms of Service
                  </a>
</li>
<li>
<a className="text-sm text-gray-500 hover:text-blue-600 transition-colors" href="/legal">
                    Cookie Policy
                  </a>
</li>
</ul>
</div>
</div>
</div>

<div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400">
            © 2025 AgencyPrices Inc. All rights reserved.
          </p>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-gray-500 font-medium">
                System Operational
              </span>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
