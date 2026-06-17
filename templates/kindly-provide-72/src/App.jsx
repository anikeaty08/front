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



        // Initialize Lucide icons
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
      

<header className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-white sticky top-0 z-10">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center text-violet-600 bg-violet-100 rounded p-1">
<i className="w-5 h-5 fill-violet-600" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-gray-900">BookPackfly</span>
</div>
<div className="flex items-center gap-4">
<button className="flex items-center gap-1 text-base font-medium text-gray-700">
                USD
                <i className="w-4 h-4 text-gray-500" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
<button className="p-1 -mr-1 text-gray-700">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<section className="bg-violet-500 py-12 px-4 text-center shrink-0">
<h1 className="text-3xl font-semibold tracking-tight text-white">Terms &amp; Conditions</h1>
</section>

<main className="flex flex-col flex-1 w-full max-w-md mx-auto">

<nav className="flex overflow-x-auto no-scrollbar gap-6 px-4 py-5 border-b border-gray-100 bg-gray-50/50 shadow-sm shrink-0">
<a className="flex items-center gap-2 whitespace-nowrap text-violet-600 font-medium text-base" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-violet-600"></span>
                Overview
            </a>
<a className="flex items-center gap-2 whitespace-nowrap text-gray-600 font-medium text-base hover:text-gray-900" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                Using Our Service
            </a>
<a className="flex items-center gap-2 whitespace-nowrap text-gray-600 font-medium text-base hover:text-gray-900" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                Payment
            </a>
<a className="flex items-center gap-2 whitespace-nowrap text-gray-600 font-medium text-base hover:text-gray-900" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                Cancellations
            </a>
<a className="flex items-center gap-2 whitespace-nowrap text-gray-600 font-medium text-base hover:text-gray-900" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                Travel Terms
            </a>
</nav>

<article className="px-4 py-8 space-y-8">
<header className="border-b border-dashed border-gray-200 pb-6">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Overview</h2>
<p className="text-base text-gray-500">Effective Date: March 18, 2025</p>
</header>
<div className="space-y-6 text-base text-gray-700 leading-relaxed">
<p>Welcome to Bookpackfly. We appreciate you reviewing these Terms of Service (“Terms”). These Terms, along with your booking confirmation email (“Booking Confirmation”), establish the legal agreement between you and Bookpackfly regarding your use of our services and the Travel Services provided through our platform. They also govern any communications or interactions you have with us while using our services.</p>
<div className="pt-2">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Acceptance of Terms</h3>
<p className="mb-4">By accessing or using our services, you agree to be bound by these Terms. If you do not accept these Terms, please discontinue using our services and refrain from booking any Travel Services.</p>
<p className="mb-4">We reserve the right to update these Terms at any time. Your continued use of our services after changes are made constitutes acceptance of the revised Terms. We recommend that you save or print a copy of these Terms for future reference.</p>
<p className="text-gray-600 bg-gray-50 p-4 rounded-lg border border-gray-100">Important Notice: Section 14 contains provisions for arbitration and a class action waiver that apply to claims brought against us in the United States. Please review this section carefully.</p>
</div>
<div className="pt-2">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Definitions</h3>
<ul className="list-disc pl-5 space-y-3 marker:text-gray-400">
<li>"We", "us", "our" refers to Bookpackfly, the provider of the services described herein.</li>
<li>"Our Service" refers to our websites, applications, and online tools that enable travel bookings.</li>
<li>"Travel Provider" means the supplier of the Travel Services (e.g., airlines, hotels, car rental companies) offered through our platform.</li>
<li>"Travel Services" include flights, accommodations, car rentals, and other related travel experiences made available through our platform.</li>
<li>"You" refers to the individual accessing our services or making Travel Service bookings through us.</li>
</ul>
</div>
<div className="pt-2 border-t border-gray-100 mt-8">
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3 pt-6">Rules and Restrictions</h3>
<p className="mb-4">In addition to these Terms, your booking is subject to the Travel Provider’s specific terms and conditions—referred to collectively as “Rules and Restrictions.” These may include, but are not limited to, payment obligations, refund policies, penalties, usage limitations, and availability constraints.</p>
<p>When you make a booking with Bookpackfly, you acknowledge and agree to abide by the applicable Rules and Restrictions of...</p>
</div>
</div>
</article>
</main>


    </>
  );
}
