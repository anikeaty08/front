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



    window.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll('.animate-slide-fade').forEach(el => {
        el.style.opacity = 1;
      });
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
      
<div className="relative flex items-center justify-center">

<div className="absolute pointer-events-none z-40" style={{width: `430px`, height: `900px`}}>
<div className="w-full h-full rounded-[2.7rem] border-[8px] border-gray-200/90 shadow-2xl ring-4 ring-blue-400/30"></div>
</div>

<div className="relative" style={{width: `402px`, height: `874px`, zIndex: `50`}}>
<div className="w-full h-full bg-black rounded-[2.5rem] shadow-xl border-8 border-gray-900 flex flex-col overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-3xl z-30"></div>

<div className="absolute top-0 left-0 w-full h-8 flex items-center justify-between px-4 pt-2 z-40 text-[13px] text-white font-semibold select-none">
<span className="tracking-wide">9:41</span>
<div className="flex items-center space-x-2">
<svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
<g>
<rect fill="#fff" height="5" opacity="0.4" rx="1" width="2" x="2" y="13"></rect>
<rect fill="#fff" height="8" opacity="0.6" rx="1" width="2" x="5" y="10"></rect>
<rect fill="#fff" height="11" opacity="0.7" rx="1" width="2" x="8" y="7"></rect>
<rect fill="#fff" height="14" rx="1" width="2" x="11" y="4"></rect>
<rect fill="#fff" height="17" rx="1" width="2" x="14" y="1"></rect>
</g>
</svg>
<svg className="w-5 h-5" fill="none" viewBox="0 0 20 20">
<path d="M3.5 8.5C7.5 5.5 12.5 5.5 16.5 8.5" stroke="#fff" strokeLinecap="round" strokeWidth="1.3"></path>
<path d="M6 11C9 9 11 9 14 11" stroke="#fff" strokeLinecap="round" strokeWidth="1.3"></path>
<path d="M8.5 13.5C9.5 12.5 10.5 12.5 11.5 13.5" stroke="#fff" strokeLinecap="round" strokeWidth="1.3"></path>
<circle cx="10" cy="16" fill="#fff" r="1"></circle>
</svg>
<svg className="w-7 h-5" fill="none" viewBox="0 0 28 13">
<rect fill="#222" height="9" rx="3" stroke="#fff" strokeWidth="1.4" width="24" x="1" y="2"></rect>
<rect fill="#fff" height="5" rx="2" width="20" x="3" y="4"></rect>
<rect fill="#fff" height="3" rx="1" width="2" x="25.5" y="5"></rect>
</svg>
</div>
</div>

<div className="absolute top-7 left-0 w-full z-40 flex items-center justify-between px-4 h-12 bg-[#181926]/80 backdrop-blur-sm">
<button aria-label="Back" className="flex items-center text-[#6ea8ff] font-semibold text-lg focus:outline-none">
<svg className="h-6 w-6 mr-1" fill="none" stroke="currentColor" strokeWidth="2.4" viewBox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<span className="text-white font-semibold text-lg tracking-tight">Payment</span>
<div className="flex items-center">
<img alt="Profile" className="w-8 h-8 rounded-full border-2 border-[#6ea8ff] shadow-sm object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" />
</div>
</div>

<div className="flex-1 w-full overflow-y-auto pt-20 pb-24 px-4 bg-[#181926] relative z-10 flex flex-col items-center">
<div className="w-full max-w-md mx-auto mt-4">

<div className="relative w-full h-[210px] rounded-[22px] overflow-hidden shadow-xl flex items-center justify-center mb-8 animate-slide-fade delay-0" style={{maxWidth: `370px`, minWidth: `260px`}}>

<div className="absolute inset-0 rounded-[22px] z-0" style={{background: `#221A46`}}></div>

<div className="absolute inset-0 pointer-events-none rounded-[22px] z-10" style={{border: `2px solid rgba(255,255,255,0.28)`}}></div>

<svg className="absolute inset-0 w-full h-full z-10" fill="none" height="210" style={{pointerEvents: `none`}} viewBox="0 0 561 355" width="370" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter filterunits="userSpaceOnUse" height="334" id="blur1" width="440" x="-100" y="-180">
<fegaussianblur stddeviation="60"></fegaussianblur>
</filter>
<filter filterunits="userSpaceOnUse" height="240" id="blur2" width="320" x="300" y="40">
<fegaussianblur stddeviation="60"></fegaussianblur>
</filter>
<filter filterunits="userSpaceOnUse" height="180" id="blur3" width="240" x="300" y="-60">
<fegaussianblur stddeviation="40"></fegaussianblur>
</filter>
<filter filterunits="userSpaceOnUse" height="180" id="blur4" width="400" x="90" y="-10">
<fegaussianblur stddeviation="46"></fegaussianblur>
</filter>
<filter filterunits="userSpaceOnUse" height="120" id="blur5" width="220" x="-15" y="30">
<fegaussianblur stddeviation="36"></fegaussianblur>
</filter>
<filter filterunits="userSpaceOnUse" height="80" id="blur6" width="160" x="320" y="-40">
<fegaussianblur stddeviation="30"></fegaussianblur>
</filter>
</defs>
<g className="mesh1"><ellipse cx="213" cy="-60" fill="#1050B9" fillOpacity="0.5" filter="url(#blur1)" rx="230" ry="140"></ellipse></g>
<g className="mesh2"><ellipse cx="440" cy="160" fill="#500CE9" fillOpacity="0.33" filter="url(#blur2)" rx="160" ry="120"></ellipse></g>
<g className="mesh3"><ellipse cx="420" cy="80" fill="#3200CE" fillOpacity="0.26" filter="url(#blur3)" rx="120" ry="90"></ellipse></g>
<g className="mesh4"><ellipse cx="280" cy="60" fill="#5CD8FF" fillOpacity="0.27" filter="url(#blur4)" rx="180" ry="80"></ellipse></g>
<g className="mesh5"><ellipse cx="95" cy="110" fill="#23BCD7" fillOpacity="0.25" filter="url(#blur5)" rx="110" ry="60"></ellipse></g>
<g className="mesh6"><ellipse cx="380" cy="20" fill="#4575EC" fillOpacity="0.20" filter="url(#blur6)" rx="80" ry="40"></ellipse></g>
</svg>

<div className="noise"></div>

<div className="relative z-20 flex flex-col justify-between h-full w-full px-5 pt-4 pb-4">

<div className="flex flex-row justify-between items-center w-full">

<div className="flex items-center h-[38px]">
<svg fill="none" height="38" viewBox="0 0 29 38" width="29" xmlns="http://www.w3.org/2000/svg">
<path d="M22.3394 0.829144C23.0434 0.470734 23.7368 0.713322 23.982 1.19927L23.9929 1.22069L24.0047 1.24114C27.0022 6.44739 28.7633 12.4001 28.7973 18.8583C28.8314 25.3098 27.1362 31.2749 24.1994 36.5092C23.8265 37.1037 23.2012 37.2703 22.5671 36.974C21.9891 36.5955 21.8319 35.9691 22.1307 35.3356C24.9599 30.4841 26.4842 24.8629 26.4526 18.8709C26.421 12.8635 24.7039 7.26458 21.9613 2.46107C21.6177 1.75992 21.8598 1.07342 22.3394 0.829144ZM15.051 4.66702C15.7424 4.33518 16.4167 4.57832 16.6576 5.05589L16.6734 5.08706L16.6911 5.11724C19.1646 9.16931 20.5393 13.8432 20.566 18.9024C20.5927 23.9592 19.2689 28.6461 16.8404 32.7233C16.468 33.3248 15.8394 33.4939 15.2022 33.1959C14.6223 32.8162 14.4667 32.1874 14.7697 31.5517C16.835 27.8664 18.1187 23.5231 18.0944 18.9156C18.0701 14.3287 16.877 9.99247 14.632 6.30698C14.3284 5.67783 14.4782 5.05111 15.051 4.66702ZM7.67755 8.47313C8.0742 8.18524 8.81896 8.28681 9.26079 8.88166C11.0862 11.7917 12.1885 15.3097 12.2077 18.9471C12.2276 22.7089 11.163 26.1129 9.36667 29.0445C8.95117 29.619 8.31574 29.7799 7.76726 29.4544C7.17256 29.0166 7.06384 28.2708 7.34577 27.8697L7.35933 27.8501L7.37192 27.8295C8.9626 25.2689 9.88001 22.1785 9.86304 18.9596C9.84598 15.7417 8.8968 12.6627 7.28002 10.1198C6.92979 9.56162 7.08721 8.90181 7.67755 8.47313ZM0.479434 12.2012C1.03452 11.7985 1.75108 11.9245 2.07511 12.3752L2.08691 12.3908C2.80449 13.3416 3.39292 14.3983 3.74466 15.4347C4.11489 16.654 4.35116 17.834 4.35726 18.9901C4.36365 20.2064 4.24776 21.3578 3.80354 22.4911C3.31965 23.7256 2.85113 24.6719 2.15697 25.6123L2.14534 25.628C1.82602 26.0822 1.10997 26.2161 0.550624 25.8191C0.103192 25.5013 -0.0311244 24.7936 0.34984 24.2342C0.918763 23.5056 1.33228 22.653 1.60367 21.8203C1.88609 20.9535 2.01763 19.9686 2.01257 19.0026C2.00747 18.0364 1.86549 17.0524 1.57382 16.1885C1.29366 15.3587 0.871059 14.5116 0.294487 13.7891C-0.0926567 13.2336 0.0350617 12.5237 0.479434 12.2012Z" fill="white"></path>
</svg>
</div>

<div className="flex items-center h-[38px]">
<svg fill="none" height="24" style={{width: `76px`, height: `23.337px`}} viewBox="0 0 76 24" width="76" xmlns="http://www.w3.org/2000/svg">
<path d="M26.9862 23.6692L30.8262 1.03337H36.966L33.1249 23.6692H26.9862ZM55.2796 1.52995C53.5176 0.888606 51.6563 0.566786 49.7823 0.579478C43.723 0.579478 39.4543 3.64575 39.4175 8.04126C39.3842 11.29 42.4656 13.102 44.7918 14.1829C47.179 15.2916 47.9813 15.9984 47.9698 16.9882C47.9549 18.5034 46.0631 19.1951 44.3011 19.1951C41.8461 19.1951 40.5427 18.8487 38.5279 18.0091L37.7384 17.6499L36.8775 22.7107C38.3095 23.3412 40.9588 23.8887 43.708 23.9164C50.1547 23.9164 54.3394 20.8859 54.3877 16.1924C54.4107 13.6205 52.7787 11.663 49.2387 10.0496C47.0952 9.01017 45.7826 8.30569 45.7964 7.24665C45.7964 6.30773 46.9078 5.30302 49.3088 5.30302C50.8819 5.26764 52.445 5.56265 53.8981 6.16919L54.4475 6.43017L55.2796 1.52995ZM71.0532 1.03337H66.3294C64.8663 1.03337 63.7709 1.43529 63.1284 2.902L54.0486 23.5537H60.5114C60.5114 23.5537 61.5458 20.8074 61.7837 20.2045L69.5269 20.2138C69.7073 20.9945 70.2624 23.5537 70.2624 23.5537H76L71.0532 1.03337ZM63.5422 15.585C64.0491 14.2823 65.9857 9.2654 65.9857 9.2654C65.949 9.32545 66.4891 7.95576 66.7983 7.10692L67.2132 9.05641C67.2132 9.05641 68.3878 14.4532 68.6327 15.585H63.5422ZM21.7762 1.03337L15.7859 16.4153L15.148 13.2891C14.0331 9.68582 10.5587 5.7823 6.67389 3.82823L12.1517 23.5537L18.6248 23.5468L28.2574 1.03337H21.7464" fill="url(#paint0_linear_84_233)"></path>
<path d="M9.92571 1.03317H0.0792979L0 1.50319C7.6937 3.37526 12.7841 7.89783 14.8977 13.3304L12.7473 2.93642C12.3761 1.50551 11.3003 1.0782 9.96825 1.02854" fill="url(#paint1_linear_84_233)"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_84_233" x1="41.3369" x2="41.3369" y1="0.579117" y2="23.9164">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="white" stop-opacity="0.75"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="paint1_linear_84_233" x1="7.44887" x2="7.44887" y1="1.02854" y2="13.3304">
<stop stop-color="white"></stop>
<stop offset="1" stop-color="white" stop-opacity="0.75"></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>

<div className="mt-6 mb-1 select-none">
<span className="inter font-bold text-[27px] leading-[32px] tracking-[0.06em] text-[#e8e8e8] shadow-outer-faint shadow-inner-faint" style={{textShadow: `0 2px 5px rgba(23,23,23,0.4), 0 4px 4px rgba(174,174,174,0.25) inset`, letterSpacing: `1.2px`}}>
                    3455 4562 7710 3507
                  </span>
</div>

<div className="flex flex-row w-full items-center mt-3">
<div className="flex flex-col">
<span className="inter text-[10px] text-white/80 leading-[12px]">Card holder name</span>
<span className="inter text-[14px] font-bold text-white leading-[17px] mt-0.5" style={{textShadow: `0 4px 4px rgba(174,174,174,0.25) inset, 0 4px 4px rgba(23,23,23,0.16)`}}>
                      John Carter
                    </span>
</div>
<div className="flex flex-col ml-10">
<span className="inter text-[10px] text-white/80 leading-[12px]">Expiry date</span>
<span className="inter text-[14px] font-bold text-white leading-[17px] mt-0.5" style={{textShadow: `0 4px 4px rgba(174,174,174,0.25) inset, 0 4px 4px rgba(23,23,23,0.16)`}}>
                      02/30
                    </span>
</div>

<div className="relative ml-auto flex items-center" style={{width: `58px`, height: `44.404px`, flexShrink: `0`}}>

<svg fill="none" height="44.404" style={{display: `block`}} viewBox="0 0 130 100" width="58" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="chipMetal" x1="0" x2="0" y1="0" y2="100">
<stop stop-color="white" stop-opacity="0.44"></stop>
<stop offset="0.15" stop-color="#C9C96" stop-opacity="0.30"></stop>
<stop offset="0.4" stop-color="#A7A7C1" stop-opacity="0.18"></stop>
<stop offset="0.7" stop-color="#C9C9E6" stop-opacity="0.33"></stop>
<stop offset="1" stop-color="white" stop-opacity="0.32"></stop>
</lineargradient>
</defs>
<rect fill="url(#chipMetal)" height="86" rx="18" stroke="white" strokeOpacity="0.59" strokeWidth="3.5" width="116" x="7" y="7"></rect>
<rect fill="none" height="60" rx="11" stroke="white" strokeOpacity="0.19" strokeWidth="2" width="90" x="20" y="20"></rect>
<rect fill="none" height="60" rx="4.5" stroke="white" strokeOpacity="0.64" strokeWidth="2.5" width="12" x="59" y="20"></rect>
<g stroke="white" strokeOpacity="0.38" strokeWidth="2">
<rect fill="none" height="7" rx="3.2" width="29" x="26" y="28"></rect>
<rect fill="none" height="7" rx="3.2" width="29" x="75" y="28"></rect>
<rect fill="none" height="7" rx="3.2" width="29" x="26" y="46"></rect>
<rect fill="none" height="7" rx="3.2" width="29" x="75" y="46"></rect>
<rect fill="none" height="7" rx="3.2" width="29" x="26" y="63"></rect>
<rect fill="none" height="7" rx="3.2" width="29" x="75" y="63"></rect>
</g>
<g stroke="white" strokeLinecap="round" strokeOpacity="0.22" strokeWidth="2.2">
<line x1="55" x2="59" y1="31.5" y2="31.5"></line>
<line x1="75" x2="71" y1="31.5" y2="31.5"></line>
<line x1="55" x2="59" y1="49.5" y2="49.5"></line>
<line x1="75" x2="71" y1="49.5" y2="49.5"></line>
<line x1="55" x2="59" y1="66.5" y2="66.5"></line>
<line x1="75" x2="71" y1="66.5" y2="66.5"></line>
</g>
<g stroke="white" strokeLinecap="round" strokeOpacity="0.31" strokeWidth="1.4">
<line x1="30" x2="30" y1="35" y2="25"></line>
<line x1="37" x2="37" y1="35" y2="23"></line>
<line x1="124" x2="108" y1="35"></line>
<line x1="115" x2="115" y1="35" y2="25"></line>
<line x1="33" x2="33" y1="70" y2="80"></line>
<line x1="48" x2="48" y1="70" y2="83"></line>
<line x1="91" x2="91" y1="70" y2="83"></line>
<line x1="102" x2="102" y1="70" y2="81"></line>
</g>
<g stroke="white" strokeLinecap="round" strokeOpacity="0.23" strokeWidth="1">
<line x1="65" x2="65" y1="25" y2="77"></line>
<line x1="63" x2="63" y1="25" y2="77"></line>
<line x1="68" x2="68" y1="25" y2="77"></line>
</g>
</svg>
</div>
</div>
</div>
</div>

<form className="space-y-6 animate-slide-fade delay-1">
<div>
<label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="card-number">Card Number</label>
<div className="relative">
<input autocomplete="cc-number" className="w-full rounded-lg bg-[#23243a] text-white placeholder-gray-500 px-4 py-3 pr-12 border border-[#28427a] focus:ring-2 focus:ring-blue-400 focus:outline-none transition" id="card-number" inputmode="numeric" maxlength="19" name="card-number" placeholder="1234 5678 9012 3456" type="text" />
<span className="absolute right-3 top-1/2 -translate-y-1/2">
<svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
<rect height="14" rx="3" width="20" x="2" y="5"></rect>
<path d="M2 10h20"></path>
</svg>
</span>
</div>
</div>
<div className="flex space-x-3">
<div className="flex-1">
<label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="expiry">Expiry</label>
<input autocomplete="cc-exp" className="w-full rounded-lg bg-[#23243a] text-white placeholder-gray-500 px-4 py-3 border border-[#28427a] focus:ring-2 focus:ring-blue-400 focus:outline-none transition" id="expiry" inputmode="numeric" maxlength="5" name="expiry" placeholder="MM/YY" type="text" />
</div>
<div className="flex-1">
<label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="cvc">CVC</label>
<input autocomplete="cc-csc" className="w-full rounded-lg bg-[#23243a] text-white placeholder-gray-500 px-4 py-3 border border-[#28427a] focus:ring-2 focus:ring-blue-400 focus:outline-none transition" id="cvc" inputmode="numeric" maxlength="4" name="cvc" placeholder="123" type="text" />
</div>
</div>
<div>
<label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="cardholder">Card Holder Name</label>
<input autocomplete="cc-name" className="w-full rounded-lg bg-[#23243a] text-white placeholder-gray-500 px-4 py-3 border border-[#28427a] focus:ring-2 focus:ring-blue-400 focus:outline-none transition" id="cardholder" name="cardholder" placeholder="Alex Morgan" type="text" />
</div>
</form>

<div className="mt-10 mb-4 px-4 py-5 bg-[#23243a] rounded-xl shadow-lg animate-slide-fade delay-2">
<div className="flex items-center justify-between mb-2">
<span className="text-gray-400 text-sm">Amount</span>
<span className="text-gray-100 font-medium">$24.99</span>
</div>
<div className="flex items-center justify-between mb-2">
<span className="text-gray-400 text-sm">Service</span>
<span className="text-gray-100 font-medium">Spotify Premium</span>
</div>
<div className="flex items-center justify-between">
<span className="text-gray-400 text-sm">Next Due</span>
<span className="text-gray-100 font-medium">Jul 8, 2024</span>
</div>
</div>

<button className="mt-2 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 text-white font-bold text-lg shadow-md hover:from-blue-500 hover:to-blue-700 transition-all focus:outline-none animate-slide-fade delay-3">
              Pay Now $24.99
            </button>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gray-600 rounded-full z-50"></div>
</div>
</div>
</div>


    </>
  );
}
