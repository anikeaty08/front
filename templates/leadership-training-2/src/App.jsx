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
      

<nav className="w-full bg-white border-b border-slate-100 py-4 px-6 fixed top-0 z-50">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center gap-1">
<span className="text-lg font-semibold tracking-tight text-slate-900">Next Leader</span>
<span className="text-lg font-medium text-blue-600">OS</span>
</div>
<a className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-full hover:bg-blue-100 transition-colors" href="#">
<span className="w-2 h-2 rounded-full bg-blue-600"></span>
                Free Access
            </a>
</div>
</nav>

<main className="lg:pt-40 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

<div className="lg:col-span-7 flex flex-col gap-8">
<div className="">
<span className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-xs font-semibold tracking-wide uppercase rounded-md mb-6">
                        Video Training
                    </span>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                        The Shift from Doing to Directing that No One Teaches
                    </h1>
<p className="text-lg text-slate-500 mt-6 leading-relaxed max-w-2xl">
                        Discover why leadership feels harder after promotion and what is actually changing beneath the surface. Learn how to move from execution to direction, reduce mental load, and gain clarity in your role as a leader without losing yourself or burning out.
                    </p>
</div>

<div className="space-y-6 mt-2">

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
<svg className="lucide lucide-check w-3.5 h-3.5 text-blue-600 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-slate-900">The real reason leadership feels harder</h3>
<p className="text-base text-slate-500 mt-1 leading-normal">
                                Why capable engineers and new managers struggle after promotion even when their skills are strong.
                            </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
<svg className="lucide lucide-check w-3.5 h-3.5 text-blue-600 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-slate-900">Doing vs directing</h3>
<p className="text-base text-slate-500 mt-1 leading-normal">
                                Understand the difference between executing tasks and directing attention and why confusing the two leads to exhaustion.
                            </p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-1">
<svg className="lucide lucide-check w-3.5 h-3.5 text-blue-600 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-slate-900">The identity shift nobody prepares you for</h3>
<p className="text-base text-slate-500 mt-1 leading-normal">
                                Why leadership is not a role change but an internal transition and how to recognize when you are stuck in the old mode.
                            </p>
</div>
</div>
</div>

<div className="flex items-center gap-4 mt-4">
<div className="flex -space-x-3">
<img alt="User" className="opacity-80 w-10 h-10 object-cover bg-center border-white border-2 rounded-full grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4785e25-92ba-4d71-8f51-250083312dd9_320w.png"/>
<img alt="User" className="bg-center opacity-80 w-10 h-10 object-cover border-white border-2 rounded-full grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ea852f5c-e79c-40e9-ac28-a37bc41ead86_320w.png"/>
<img alt="User" className="bg-center opacity-80 w-10 h-10 object-cover border-white border-2 rounded-full grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a1c0ccbd-5317-40cd-a00d-022ca736ec22_320w.png"/>
</div>
<span className="text-sm font-medium text-slate-500" style={{}}>Joined by 400+ technical leaders</span>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg shadow-slate-200/50">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 group-hover:scale-110 transition-transform">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
<svg className="lucide lucide-play fill-slate-900 text-slate-900 w-5 h-5 ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div><img alt="Training Video Thumbnail" className="aspect-video group-hover:scale-105 transition-transform duration-500 bg-center opacity-90 w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/40ce13db-ae87-48b2-a28f-4e0ef1a34b90_1600w.png?w=800&amp;q=80"/>
</div>

<div className="bg-white rounded-2xl p-8 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.06)] border border-slate-100">
<div className="mb-2">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Watch the Training</h2>
<p className="text-sm text-slate-500 mt-2 mb-2">Enter your details to get instant access to the video training and leadership breakdown.</p>
</div>

<style>@import url(https://fonts.bunny.net/css?family=cabin:700|roboto:400,600|IBM+Plex+Sans:400);</style>
<style>
                    #_form_4_{font-size:14px;line-height:1.6;font-family:arial, helvetica, sans-serif;margin:0}._form_hide{display:none;visibility:hidden}._form_show{display:block;visibility:visible}#_form_4_._form-top{top:0}#_form_4_._form-bottom{bottom:0}#_form_4_._form-left{left:0}#_form_4_._form-right{right:0}#_form_4_ input[type="text"],#_form_4_ input[type="tel"],#_form_4_ input[type="date"],#_form_4_ textarea{padding:6px;height:auto;border:#979797 1px solid;border-radius:4px;color:#000 !important;font-size:14px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}#_form_4_ textarea{resize:none}#_form_4_ ._submit{-webkit-appearance:none;cursor:pointer;font-family:arial, sans-serif;font-size:14px;text-align:center;background:#0b66c2 !important;border:0 !important;-moz-border-radius:6px !important;-webkit-border-radius:6px !important;border-radius:6px !important;width:100%;color:#ffffff !important;padding:12px !important}#_form_4_ ._submit:disabled{cursor:not-allowed;opacity:0.4}#_form_4_ ._submit.processing{position:relative}#_form_4_ ._submit.processing::before{content:"";width:1em;height:1em;position:absolute;z-index:1;top:50%;left:50%;border:double 3px transparent;border-radius:50%;background-image:linear-gradient(#0b66c2, #0b66c2), conic-gradient(#0b66c2, #ffffff);background-origin:border-box;background-clip:content-box, border-box;animation:1200ms ease 0s infinite normal none running _spin}#_form_4_ ._submit.processing::after{content:"";position:absolute;top:0;bottom:0;left:0;right:0}@keyframes _spin{0%{transform:translate(-50%, -50%) rotate(90deg)}100%{transform:translate(-50%, -50%) rotate(450deg)}}#_form_4_ ._close-icon{cursor:pointer;background-image:url("https://d226aj4ao1t61q.cloudfront.net/esfkyjh1u_forms-close-dark.png");background-repeat:no-repeat;background-size:14.2px 14.2px;position:absolute;display:block;top:11px;right:9px;overflow:hidden;width:16.2px;height:16.2px}#_form_4_ ._close-icon:before{position:relative}#_form_4_ ._form-body{margin-bottom:30px}#_form_4_ ._form-image-left{width:150px;float:left}#_form_4_ ._form-content-right{margin-left:164px}#_form_4_ ._form-branding{color:#fff;font-size:10px;clear:both;text-align:left;margin-top:30px;font-weight:100}#_form_4_ ._form-branding ._logo{display:block;width:130px;height:14px;margin-top:6px;background-image:url("https://d226aj4ao1t61q.cloudfront.net/hh9ujqgv5_aclogo_li.png");background-size:130px auto;background-repeat:no-repeat}#_form_4_ .form-sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}#_form_4_ ._form-label,#_form_4_ ._form_element ._form-label{font-weight:bold;margin-bottom:5px;display:block}#_form_4_._dark ._form-branding{color:#333}#_form_4_._dark ._form-branding ._logo{background-image:url("https://d226aj4ao1t61q.cloudfront.net/jftq2c8s_aclogo_dk.png")}#_form_4_ ._form_element{position:relative;margin-bottom:10px;font-size:0;max-width:100%}#_form_4_ ._form_element *{font-size:14px}#_form_4_ ._form_element._clear{clear:both;width:100%;float:none}#_form_4_ ._form_element._clear:after{clear:left}#_form_4_ ._form_element input[type="text"],#_form_4_ ._form_element input[type="phone"],#_form_4_ ._form_element input[type="email"]{background:white;color:#333333 !important;border-top:1px solid #e0e0e0;border-left:1px solid #e0e0e0;border-right:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;border-radius:4px;padding:12px}#_form_4_ ._form_element input[type="text"],#_form_4_ ._form_element input[type="date"],#_form_4_ ._form_element select,#_form_4_ ._form_element textarea:not(.g-recaptcha-response){display:block;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-family:inherit}#_form_4_ ._field-wrapper{position:relative}#_form_4_ ._inline-style{float:left}#_form_4_ ._inline-style input[type="text"]{width:150px}#_form_4_ ._inline-style:not(._clear){margin-right:20px}#_form_4_ ._form_element img._form-image{max-width:100%}#_form_4_ ._form_element ._form-fieldset{border:0;padding:0.01em 0 0 0;margin:0;min-width:0}#_form_4_ ._clear-element{clear:left}#_form_4_ ._full_width{width:100%}#_form_4_ ._form_full_field{display:block;width:100%;margin-bottom:10px}#_form_4_ input[type="text"]._has_error,#_form_4_ textarea._has_error{border:#F37C7B 1px solid}#_form_4_ input[type="checkbox"]._has_error{outline:#F37C7B 1px solid}#_form_4_ ._show_be_error{float:left}#_form_4_ ._error{display:block;position:absolute;font-size:14px;z-index:10000001}#_form_4_ ._error._above{padding-bottom:4px;bottom:39px;right:0}#_form_4_ ._error._below{padding-top:8px;top:100%;right:0}#_form_4_ ._error._above ._error-arrow{bottom:-4px;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #FFDDDD}#_form_4_ ._error._below ._error-arrow{top:0;right:15px;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:8px solid #FFDDDD}#_form_4_ ._error-inner{padding:12px 12px 12px 36px;background-color:#FFDDDD;background-image:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM9 3V9H7V3H9ZM9 13V11H7V13H9Z' fill='%23CA0000'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:12px center;font-size:14px;font-family:arial, sans-serif;font-weight:600;line-height:16px;color:#000;text-align:center;text-decoration:none;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;box-shadow:0 1px 4px rgba(31, 33, 41, 0.298295)}@media only screen and (max-width:319px){#_form_4_ ._error-inner{padding:7px 7px 7px 25px;font-size:12px;line-height:12px;background-position:4px center;max-width:100px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}}#_form_4_ ._error-inner._form_error{margin-bottom:5px;text-align:left}#_form_4_ ._button-wrapper ._error-inner._form_error{position:static}#_form_4_ ._error-inner._no_arrow{margin-bottom:10px}#_form_4_ ._error-arrow{position:absolute;width:0;height:0}#_form_4_ ._error-html{margin-bottom:10px}.pika-single{z-index:10000001 !important}#_form_4_ input[type="text"].datetime_date{width:69%;display:inline}#_form_4_ select.datetime_time{width:29%;display:inline;height:32px}#_form_4_ input[type="date"].datetime_date{width:69%;display:inline-flex}#_form_4_ input[type="time"].datetime_time{width:29%;display:inline-flex}@media (min-width:320px) and (max-width:667px){::-webkit-scrollbar{display:none}#_form_4_{margin:0;width:100%;min-width:100%;max-width:100%;box-sizing:border-box}#_form_4_ *{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:1em}#_form_4_ ._form-content{margin:0;width:100%}#_form_4_ ._form-inner{display:block;min-width:100%}#_form_4_ ._form-title,#_form_4_ ._inline-style{margin-top:0;margin-right:0;margin-left:0}#_form_4_ ._form-title{font-size:1.2em}#_form_4_ ._form_element{margin:0 0 20px;padding:0;width:100%}#_form_4_ ._form-element,#_form_4_ ._inline-style,#_form_4_ input[type="text"],#_form_4_ label,#_form_4_ p,#_form_4_ textarea:not(.g-recaptcha-response){float:none;display:block;width:100%}#_form_4_ ._row._checkbox-radio label{display:inline}#_form_4_ ._row,#_form_4_ p,#_form_4_ label{margin-bottom:0.7em;width:100%}#_form_4_ ._row input[type="checkbox"],#_form_4_ ._row input[type="radio"]{margin:0 !important;vertical-align:middle !important}#_form_4_ ._row input[type="checkbox"]+span label{display:inline}#_form_4_ ._row span label{margin:0 !important;width:initial !important;vertical-align:middle !important}#_form_4_ ._form-image{max-width:100%;height:auto !important}#_form_4_ input[type="text"]{padding-left:10px;padding-right:10px;font-size:16pxline-height:1.3em;-webkit-appearance:none}#_form_4_ input[type="radio"],#_form_4_ input[type="checkbox"]{display:inline-block;width:1.3em;height:1.3em;vertical-align:top;margin-top:3px}#_form_4_ button[type="submit"]{margin-top:10px}}</style>
<div className="_form _form_4 _inline-form _inline-style _dark" id="_form_4_">
<div className="_form-content">
<div className="_form_element _x98734265 _full_width">
<label className="_form-label" htmlFor="fullname">
                                    Full Name
                                </label>
<div className="_field-wrapper">
<input id="fullname" name="fullname" placeholder="Type your name" type="text"/>
</div>
</div>
<div className="_form_element _x19632734 _full_width">
<label className="_form-label" htmlFor="email">
                                    Email Address*
                                </label>
<div className="_field-wrapper">
<input id="email" name="email" placeholder="Type your email" required="" type="text"/>
</div>
</div>
<div className="_button-wrapper _full_width">
<a className="_submit" href="https://www.youtube.com/watch?v=PY_KNp6ttTg" target="_blank">
                                    Get Instant Access
                                </a>
</div>
<div className="_clear-element"></div>
</div>
</div>

</div>

<div className="flex items-center justify-center gap-2 text-slate-400 text-xs text-center">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span>Your data is secure. Unsubscribe at any time.</span>
</div>
</div>
</div>
</main>

<footer className="border-t border-slate-200 bg-white mt-auto py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-slate-500" style={{}}>© 2026 Next Leader OS. All rights reserved.</p>
<div className="flex gap-6 text-sm text-slate-500">
</div>
</div>
</footer>


    </>
  );
}
