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
      

<main className="max-w-2xl mx-auto bg-[#FFFFFF] shadow-sm overflow-hidden relative">

<section className="text-center pt-6 pr-6 pb-2 pl-6" data-component="top-bar">
<a className="text-xs text-gray-500 underline hover:text-gray-800 transition-colors" href="#">View this email in your
        browser</a>
</section>

<section className="flex pt-0 pr-0 pb-0 justify-center" data-component="header-logo">
<img alt="Mabel Logo" className="w-[41%] h-auto max-w-[270px] object-contain" src="https://mcusercontent.com/da442c1e24560e9ce3ef10059/images/86b33685-e443-563c-b285-22a9e7444d52.png"/>
</section>

<section className="text-center pt-0 pr-10 pb-10 pl-10" data-component="hero-intro">
<p className="text-xl italic text-gray-800" style={{fontFamily: 'Georgia, Times, serif'}}>Welcome to radical wellbeing</p>
</section>

<hr className="border-t border-gray-900 mx-6"/>

<section className="flex flex-col md:pt-6 md:pl-10 md:pr-10 md:pb-12 text-center pt-6 pr-10 pb-12 pl-10 items-center" data-component="hero-titles">
<h2 className="text-5xl tracking-tight" style={{fontFamily: '\'Gilda Display\', serif'}}>Celebrate Spring <br/>with a 20% discount
</h2>
<p className="text-2xl text-gray-800 tracking-tight mt-8" style={{fontFamily: '"Gilda Display", serif'}}>until Sunday, 15th at midnight CET</p>
<p className="leading-relaxed text-lg text-gray-800 max-w-lg mt-10 mr-auto ml-auto" style={{fontFamily: '\'Gilda Display\', serif'}}>Spring's energy is here. Gentle, awakening, unstoppable. A moment to let new intentions rise and embrace the growth waiting within.</p>
</section>

<section className="px-4 pb-10" data-component="hero-image">
<img alt="Editorial featuring Fire Horse concept" className="w-full h-auto object-cover rounded-sm" src="https://i.imgur.com/Q9FUwAg.jpeg"/>
</section>

<section className="px-6 md:px-12 pb-12 text-center" data-component="promo-text">
<p className="leading-relaxed text-lg text-gray-800 mb-6" style={{fontFamily: '\'Gilda Display\', serif'}}>Make this transition yours.</p>
<p className="leading-relaxed text-lg text-gray-800" style={{fontFamily: '\'Gilda Display\', serif'}}>
                Use code <a className="font-semibold underline hover:text-gray-500 transition-colors" href="#">FLOURISH</a> at checkout, until Sunday midnight CET.
            </p>
</section>

<section className="bg-[#FFFFFF]" data-component="product-selection">

<div className="py-8 px-6 text-center">
<h3 className="text-3xl text-gray-900 tracking-tight" style={{fontFamily: 'Georgia, Times, serif'}}>Our selection for you</h3>
</div>
<hr className="border-t border-gray-900 mx-6 mb-8"/>

<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 px-8 pb-14">

<div className="flex flex-col items-center group">
<img alt="Mindful Microdosing Product Shot" className="w-full h-auto object-cover rounded-sm mb-5 group-hover:opacity-90 transition-opacity cursor-pointer" src="https://mcusercontent.com/da442c1e24560e9ce3ef10059/images/61ac0996-acde-77df-c2b2-be115c21523f.png"/>
<h4 className="text-lg text-center mb-1 text-gray-900" style={{fontFamily: '\'Gilda Display\', serif'}}>Mindful Microdosing</h4>
<p className="text-sm text-center mb-6 text-gray-800">Break patterns. Unlock clarity.</p>
<a className="inline-block border border-gray-900 rounded-full px-8 py-3.5 text-base hover:bg-gray-900 hover:text-[#909c6c] transition-colors w-max text-gray-900 mt-auto" href="#">Shop now</a>
</div>

<div className="flex flex-col items-center group">
<img alt="Morning &amp; Midnight Manna Product Shot" className="w-full h-auto object-cover rounded-sm mb-5 group-hover:opacity-90 transition-opacity cursor-pointer" src="https://mcusercontent.com/da442c1e24560e9ce3ef10059/images/3237a890-2076-36bb-c6d4-2fa72dad60ab.png"/>
<h4 className="text-lg text-center mb-1 text-gray-900" style={{fontFamily: '\'Gilda Display\', serif'}}>Morning &amp; Midnight Manna</h4>
<p className="text-sm text-center mb-6 text-gray-800">Balance your day. Restore your night.</p>
<a className="inline-block border border-gray-900 rounded-full px-8 py-3.5 text-base hover:bg-gray-900 hover:text-[#da9539] transition-colors w-max text-gray-900 mt-auto" href="#">Shop now</a>
</div>

<div className="flex flex-col items-center group">
<img alt="Morning Coffee Product Shot" className="w-full h-auto object-cover rounded-sm mb-5 group-hover:opacity-90 transition-opacity cursor-pointer" src="https://mcusercontent.com/da442c1e24560e9ce3ef10059/images/66ca8058-5e49-b930-e41a-ab11cbba1538.png"/>
<h4 className="text-lg text-center mb-1 text-gray-900" style={{fontFamily: '\'Gilda Display\', serif'}}>Morning Coffee</h4>
<p className="text-sm text-center mb-6 text-gray-800">Boost energy. Skip the crash.</p>
<a className="inline-block border border-gray-900 rounded-full px-8 py-3.5 text-base hover:bg-gray-900 hover:text-[#909c6c] transition-colors w-max text-gray-900 mt-auto" href="#">Shop now</a>
</div>

<div className="flex flex-col items-center group">
<img alt="Midnight Cacao Product Shot" className="w-full h-auto object-cover rounded-sm mb-5 group-hover:opacity-90 transition-opacity cursor-pointer" src="https://mcusercontent.com/da442c1e24560e9ce3ef10059/images/af78f503-56b6-e92e-7e14-44606aae7a28.png"/>
<h4 className="text-lg text-center mb-1 text-gray-900" style={{fontFamily: '\'Gilda Display\', serif'}}>Midnight Cacao</h4>
<p className="text-sm text-center mb-6 text-gray-800">Soften down. Sleep deeper.</p>
<a className="inline-block border border-gray-900 rounded-full px-8 py-3.5 text-base hover:bg-gray-900 hover:text-[#909c6c] transition-colors w-max text-gray-900 mt-auto" href="#">Shop now</a>
</div>
</div>
</section>

<section className="p-8 pb-12 pt-12" data-component="global-cta">
<a className="block w-full max-w-md mx-auto text-center border border-gray-900 rounded-full py-4 text-base hover:bg-gray-900 hover:text-white transition-colors bg-[#FFFFFF] text-gray-900" href="#">Get 20% off sitewide</a>
</section>

<section className="px-8 pb-8 text-center" data-component="sign-off">
<p className="text-lg mb-4 text-gray-800" style={{fontFamily: '\'Gilda Display\', serif'}}>We're here if you need us. Please write us at <a className="underline hover:text-gray-500 transition-colors" href="mailto:info@mabel.life">info@mabel.life</a></p>
<p className="text-lg mt-8 text-gray-800" style={{fontFamily: '\'Gilda Display\', serif'}}>With Love,</p>
<p className="text-lg font-semibold text-gray-900" style={{fontFamily: '\'Gilda Display\', serif'}}>Pernille</p>
</section>
<hr className="border-t border-gray-900 mx-6 mb-10"/>

<section className="pb-12 flex flex-col items-center" data-component="footer">
<img alt="Mabel Icon" className="w-20 h-auto mb-5 object-contain" src="https://brand-assets.mailchimp.com/01JSMRSKW0T9CXG8GTA202H933.png"/>
<p className="text-lg font-semibold mb-8 text-gray-900" style={{fontFamily: '\'Gilda Display\', serif'}}>Your place of transformation</p>

<div className="flex items-center space-x-6 mb-10">
<a aria-label="Instagram" className="text-gray-900 hover:text-gray-500 transition-colors" href="#">
<iconify-icon className="" height="20" icon="lucide:instagram" strokeWidth="1.5" style={{color: 'rgb(55, 65, 81)'}} width="20"></iconify-icon>
</a>
<a aria-label="LinkedIn" className="text-gray-900 hover:text-gray-500 transition-colors" href="#">
<iconify-icon className="" height="20" icon="lucide:linkedin" strokeWidth="1.5" style={{color: 'rgb(55, 65, 81)'}} width="20"></iconify-icon>
</a>
<a aria-label="Website" className="text-gray-900 hover:text-gray-500 transition-colors" href="#">
<iconify-icon className="" height="20" icon="lucide:globe" strokeWidth="1.5" style={{color: 'rgb(55, 65, 81)'}} width="20"></iconify-icon>
</a>
</div>

<div className="text-xs text-gray-500 text-center space-y-3 px-6 leading-relaxed">
<p className="italic">Copyright © Mabel 2026. All rights reserved.</p>
<p>Our mailing address is:<br/>The Entrance 201, 1101 HG, Amsterdam, Netherlands</p>
<p className="pt-2">Want to change how you receive these emails?<br/>
                You can <a className="underline hover:text-gray-800 transition-colors" href="#">update your preferences</a> or <a className="underline hover:text-gray-800 transition-colors" href="#">unsubscribe</a></p>
</div>
</section>
</main>

    </>
  );
}
