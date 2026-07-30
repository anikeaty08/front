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
      
<div className="max-w-2xl w-full bg-[#151515] rounded-xl overflow-hidden shadow-2xl border border-[#232323]">

<div className="px-8 pt-10 pb-6 border-b border-[#232323]">
<h1 className="faq-heading text-white font-semibold text-[48px] md:text-[64px] leading-tight mb-2">
        Frequently Asked Questions
      </h1>
<p className="faq-subheading text-gray-400 text-[16px] md:text-[20px] font-normal mb-1">
        Everything you need to know about using our service.
      </p>
</div>

<div className="divide-y divide-[#232323]">
<div className="px-8 py-8">
<h2 className="faq-q text-white font-semibold text-[18px] md:text-[20px] mb-2">
          How do I reset my password?
        </h2>
<p className="faq-a text-gray-300 text-[15px] leading-relaxed">
          Click on "Forgot Password" from the sign-in page. Enter your email address and follow the instructions sent to your inbox. If you don’t see the email, check your spam or contact support.
        </p>
</div>
<div className="px-8 py-8">
<h2 className="faq-q text-white font-semibold text-[18px] md:text-[20px] mb-2">
          Where can I find my past orders?
        </h2>
<p className="faq-a text-gray-300 text-[15px] leading-relaxed">
          All past orders are available in your Account Dashboard under the "Orders" section. There you can view, download invoices, or print receipts for your records.
        </p>
</div>
<div className="px-8 py-8">
<h2 className="faq-q text-white font-semibold text-[18px] md:text-[20px] mb-2">
          How do I contact customer support?
        </h2>
<p className="faq-a text-gray-300 text-[14px] md:text-[16px] leading-relaxed">
          Reach out via our help center chat bubble (bottom right), or email us at support@example.com. Customer support is available 24/7.
        </p>
</div>
<div className="px-8 py-8">
<h2 className="faq-q text-white font-semibold text-[18px] md:text-[20px] mb-2">
          Can I change my subscription plan later?
        </h2>
<p className="faq-a text-gray-300 text-[15px] leading-relaxed">
          Yes, you may upgrade or downgrade your subscription at any time from your Account Settings. Changes take effect immediately.
        </p>
</div>
</div>
</div>

    </>
  );
}
