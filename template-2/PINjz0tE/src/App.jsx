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
      
<div className="w-full max-w-4xl">
<h2 className="text-2xl font-semibold text-gray-900 text-center mb-10">Testimonials</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

<div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center">
<img alt="Olivia Martinez" className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-100 mb-4" src="https://randomuser.me/api/portraits/women/65.jpg" />
<div className="text-center">
<div className="font-semibold text-gray-900">Olivia Martinez</div>
<div className="text-sm text-gray-500 mb-3">Freelance UX Designer</div>
<p className="text-gray-700 text-base">As a designer, this marketplace helped me showcase my work and land exciting projects with global clients. The exposure and ease of connecting with clients have been invaluable to growing my freelance business.</p>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center">
<img alt="David Kim" className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-100 mb-4" src="https://randomuser.me/api/portraits/men/43.jpg" />
<div className="text-center">
<div className="font-semibold text-gray-900">David Kim</div>
<div className="text-sm text-gray-500 mb-3">Startup Founder</div>
<p className="text-gray-700 text-base">We quickly assembled a talented team for our app. The seamless hiring process and access to top-notch freelancers made all the difference in our launch success.</p>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center">
<img alt="Carlos Ruiz" className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-100 mb-4" src="https://randomuser.me/api/portraits/men/32.jpg" />
<div className="text-center">
<div className="font-semibold text-gray-900">Carlos Ruiz</div>
<div className="text-sm text-gray-500 mb-3">Front-End Developer</div>
<p className="text-gray-700 text-base">The projects here push me to grow. I found work that matches my skills and the payment system gives me peace of mind to focus on what I love: coding!</p>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center">
<img alt="Priya Sharma" className="w-16 h-16 rounded-full object-cover ring-2 ring-gray-100 mb-4" src="https://randomuser.me/api/portraits/women/44.jpg" />
<div className="text-center">
<div className="font-semibold text-gray-900">Priya Sharma</div>
<div className="text-sm text-gray-500 mb-3">Digital Marketer</div>
<p className="text-gray-700 text-base">I love the community here. It's easy to collaborate, learn from peers, and find new opportunities. My client list is stronger than ever!</p>
</div>
</div>
</div>
</div>

    </>
  );
}
