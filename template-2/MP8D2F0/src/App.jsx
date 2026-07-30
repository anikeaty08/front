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



    // Animated Headline for Features
    document.addEventListener('DOMContentLoaded', () => {
      const headlineElement = document.querySelector('.headline');
      const headlineText = "Our Features";
      // highlight the word "Features"
      const wordToHighlight = "Features";
      let parts = headlineText.split(wordToHighlight);
      let finalHTML = '';
      // Before "Features"
      if (parts[0]) {
        finalHTML += parts[0].split('').map(char => char === ' ' ? ' ' : '<span class="char">' + char + '</span>').join('');
      }
      finalHTML += '<span class="highlight">' + wordToHighlight + '</span>';
      // After "Features"
      if (parts[1]) {
        finalHTML += parts[1].split('').map(char => char === ' ' ? ' ' : '<span class="char">' + char + '</span>').join('');
      }
      headlineElement.innerHTML = finalHTML;
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
      
<div className="w-full max-w-5xl mx-auto rounded-3xl shadow-xl bg-white/80 p-8 md:p-12 border border-orange-100">
<h2 className="headline text-4xl md:text-5xl font-extrabold mb-6 text-center"></h2>
<div className="grid gap-8 md:gap-10">

<div className="grid md:grid-cols-3 gap-6 items-stretch">

<div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-6 md:p-8 text-center">
<div className="mb-3 text-4xl text-[#f0ad4e]">

<svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 32 32"><path d="M17.3 4.3l3.8 3.8c.4.4.4 1 0 1.4l-1.1 1.1 4.2 4.2c.2.2.2.5 0 .7l-9.2 9.2c-.2.2-.5.2-.7 0l-4.2-4.2-1.1 1.1c-.4.4-1 .4-1.4 0l-3.8-3.8c-.4-.4-.4-1 0-1.4l12.5-12.5c.4-.4 1-.4 1.4 0z" fill="#f0ad4e"></path><circle cx="10.5" cy="21.5" fill="#9B51E0" r="2.5"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-1 text-[#3a3a3a]">Blazing Fast Launch</h3>
<p className="text-[#5c5c5c] text-base">Get your projects off the ground in record time with our streamlined process.</p>
</div>

<div className="md:col-span-2 flex items-center justify-center">
<img alt="Rocket Launch" className="rounded-2xl object-cover h-48 md:h-64 w-full shadow-sm border border-orange-50" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" />
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 items-stretch">

<div className="md:col-span-2 flex items-center justify-center order-2 md:order-1">
<img alt="Collaboration" className="rounded-2xl object-cover h-48 md:h-64 w-full shadow-sm border border-purple-100" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" />
</div>

<div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-6 md:p-8 text-center order-1 md:order-2">
<div className="mb-3 text-4xl text-[#9B51E0]">

<svg className="w-10 h-10 mx-auto" fill="none" viewBox="0 0 32 32"><circle cx="10" cy="13" fill="#9B51E0" r="4"></circle><circle cx="22" cy="13" fill="#6FCF97" r="4"></circle><rect fill="#e9d8fd" height="5" rx="2.5" width="24" x="4" y="21"></rect></svg>
</div>
<h3 className="text-xl font-semibold mb-1 text-[#3a3a3a]">Effortless Collaboration</h3>
<p className="text-[#5c5c5c] text-base">Work seamlessly with your team, share updates, and keep everyone in sync.</p>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6 items-stretch">

<div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-6 md:p-8 text-center">
<div className="mb-3 text-4xl text-[#6FCF97]">

<svg className="h-10 w-10 mx-auto" fill="none" viewBox="0 0 32 32"><path d="M16 4l10 4v7c0 7.2-4.6 12.9-10 15-5.4-2.1-10-7.8-10-15V8l10-4z" fill="#6FCF97"></path><path d="M16 4v22c5.4-2.1 10-7.8 10-15V8l-10-4z" fill="#9B51E0" fillOpacity=".18"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-1 text-[#3a3a3a]">Secure By Design</h3>
<p className="text-[#5c5c5c] text-base">Your data and privacy are protected at every step, so you can focus on what matters.</p>
</div>

<div className="md:col-span-2 flex items-center justify-center">
<img alt="Security" className="rounded-2xl object-cover h-48 md:h-64 w-full shadow-sm border border-green-100" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" />
</div>
</div>
</div>
</div>


    </>
  );
}
