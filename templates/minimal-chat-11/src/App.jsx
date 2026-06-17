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
      

<div bis_size='{"x":0,"y":0,"w":1425,"h":41,"abs_x":480,"abs_y":43}' className="hidden lg:flex w-full bg-white border-b border-neutral-200 text-sm py-2.5 px-6 justify-between items-center text-neutral-500">
<div bis_size='{"x":24,"y":10,"w":472,"h":20,"abs_x":504,"abs_y":53}' className="flex items-center gap-8">
<div bis_size='{"x":24,"y":10,"w":151,"h":20,"abs_x":504,"abs_y":53}' className="flex items-center gap-2">
<svg bis_size='{"x":24,"y":12,"w":16,"h":16,"abs_x":504,"abs_y":55}' className="lucide lucide-mail w-4 h-4 text-neutral-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span bis_size='{"x":48,"y":10,"w":127,"h":20,"abs_x":528,"abs_y":53}' className="tracking-tight">hello@aura-app.com</span>
</div>
<div bis_size='{"x":207,"y":10,"w":99,"h":20,"abs_x":687,"abs_y":53}' className="flex items-center gap-2">
<svg bis_size='{"x":207,"y":12,"w":16,"h":16,"abs_x":687,"abs_y":55}' className="lucide lucide-phone w-4 h-4 text-neutral-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span bis_size='{"x":231,"y":10,"w":75,"h":20,"abs_x":711,"abs_y":53}' className="tracking-tight">Get Support</span>
</div>
<div bis_size='{"x":338,"y":10,"w":158,"h":20,"abs_x":818,"abs_y":53}' className="flex items-center gap-2">
<svg bis_size='{"x":338,"y":12,"w":16,"h":16,"abs_x":818,"abs_y":55}' className="lucide lucide-clock w-4 h-4 text-neutral-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span bis_size='{"x":362,"y":10,"w":134,"h":20,"abs_x":842,"abs_y":53}' className="tracking-tight">24/7 Global Availability</span>
</div>
</div>
<div bis_size='{"x":1321,"y":12,"w":80,"h":16,"abs_x":1801,"abs_y":55}' className="flex items-center gap-4">
<a bis_size='{"x":1321,"y":12,"w":16,"h":16,"abs_x":1801,"abs_y":55}' className="hover:text-neutral-800 transition-colors" href="#"><svg bis_size='{"x":1321,"y":12,"w":16,"h":16,"abs_x":1801,"abs_y":55}' className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a bis_size='{"x":1353,"y":12,"w":16,"h":16,"abs_x":1833,"abs_y":55}' className="hover:text-neutral-800 transition-colors" href="#"><svg bis_size='{"x":1353,"y":12,"w":16,"h":16,"abs_x":1833,"abs_y":55}' className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a bis_size='{"x":1385,"y":12,"w":16,"h":16,"abs_x":1865,"abs_y":55}' className="hover:text-neutral-800 transition-colors" href="#"><svg bis_size='{"x":1385,"y":12,"w":16,"h":16,"abs_x":1865,"abs_y":55}' className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>

<nav bis_size='{"x":0,"y":41,"w":1425,"h":81,"abs_x":480,"abs_y":84}' className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200">
<div bis_size='{"x":0,"y":41,"w":1425,"h":80,"abs_x":480,"abs_y":84}' className="flex w-full h-20 items-stretch justify-between">

<div bis_size='{"x":0,"y":41,"w":176,"h":80,"abs_x":480,"abs_y":84}' className="flex lg:px-12 lg:border-none min-w-max cursor-pointer border-neutral-100 border-r pr-6 pl-6 items-center" onclick="window.location.href='/www.techplay.pl'" role="button">
<a bis_size='{"x":48,"y":65,"w":80,"h":32,"abs_x":528,"abs_y":108}' className="flex items-center gap-2 group" href="#">
<div bis_size='{"x":48,"y":65,"w":32,"h":32,"abs_x":528,"abs_y":108}' className="flex group-hover:bg-neutral-800 transition-colors bg-neutral-900 w-8 h-8 rounded-lg shadow-sm items-center justify-center">
<svg bis_size='{"x":56,"y":73,"w":16,"h":16,"abs_x":536,"abs_y":116}' className="lucide lucide-sparkles w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path className="" d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span bis_size='{"x":88,"y":67,"w":40,"h":28,"abs_x":568,"abs_y":110}' className="cursor-pointer text-xl font-semibold text-neutral-900 tracking-tight font-jakarta" onclick="window.location.href='/www.techplay.pl'" role="button">aura</span>
</a>
</div>

<div bis_size='{"x":176,"y":41,"w":1025,"h":80,"abs_x":656,"abs_y":84}' className="hidden lg:flex flex-1 gap-10 gap-x-10 gap-y-10 items-center justify-center">
<a bis_size='{"x":476,"y":67,"w":67,"h":28,"abs_x":956,"abs_y":110}' className="hover:text-neutral-600 transition-colors text-lg font-medium text-neutral-900" href="#">Product</a>
<a bis_size='{"x":583,"y":67,"w":84,"h":28,"abs_x":1063,"abs_y":110}' className="hover:text-neutral-900 transition-colors text-lg font-medium text-neutral-500" href="#">Manifesto</a>
<div bis_size='{"x":708,"y":67,"w":94,"h":28,"abs_x":1188,"abs_y":110}' className="relative group cursor-pointer flex items-center gap-1 text-lg font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
<span bis_size='{"x":708,"y":67,"w":74,"h":28,"abs_x":1188,"abs_y":110}' className="">Features</span>
<svg bis_size='{"x":787,"y":74,"w":16,"h":16,"abs_x":1267,"abs_y":117}' className="lucide lucide-chevron-down w-4 h-4 mt-0.5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<a bis_size='{"x":843,"y":67,"w":58,"h":28,"abs_x":1323,"abs_y":110}' className="hover:text-neutral-900 transition-colors text-lg font-medium text-neutral-500" href="/#">Pricing</a>
</div>

<div bis_size='{"x":1201,"y":41,"w":223,"h":80,"abs_x":1681,"abs_y":84}' className="flex items-center px-6 lg:px-12 lg:border-l border-neutral-100">
<a bis_size='{"x":1250,"y":67,"w":126,"h":28,"abs_x":1730,"abs_y":110}' className="hidden lg:flex text-lg font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">
                    Download Beta
                </a>
<button bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lg:hidden p-2 text-neutral-500">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":480,"abs_y":43}' className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<header bis_size='{"x":0,"y":122,"w":1425,"h":800,"abs_x":480,"abs_y":165}' className="relative w-full h-auto min-h-screen lg:min-h-[800px] flex items-center bg-neutral-50 overflow-hidden">

<div bis_size='{"x":0,"y":122,"w":1425,"h":800,"abs_x":480,"abs_y":165}' className="absolute inset-0 z-0">

<img alt="Minimalist Architecture" bis_size='{"x":0,"y":122,"w":1425,"h":800,"abs_x":480,"abs_y":165}' className="grayscale-[20%] opacity-80 mix-blend-multiply w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div bis_size='{"x":0,"y":122,"w":1425,"h":800,"abs_x":480,"abs_y":165}' className="absolute inset-0 bg-gradient-to-r from-neutral-100 via-neutral-100/90 to-transparent"></div>
<div bis_size='{"x":0,"y":122,"w":1425,"h":800,"abs_x":480,"abs_y":165}' className="bg-gradient-to-t from-neutral-100 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div bis_size='{"x":72,"y":241,"w":1280,"h":562,"abs_x":552,"abs_y":284}' className="z-10 lg:px-12 lg:py-0 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative">
<div bis_size='{"x":120,"y":241,"w":672,"h":562,"abs_x":600,"abs_y":284}' className="max-w-2xl flex flex-col items-start space-y-8">

<div bis_size='{"x":120,"y":241,"w":269,"h":20,"abs_x":600,"abs_y":284}' className="flex items-center gap-3">
<div bis_size='{"x":120,"y":250,"w":32,"h":1,"abs_x":600,"abs_y":293}' className="h-px w-8 bg-neutral-400"></div>
<span bis_size='{"x":164,"y":241,"w":225,"h":20,"abs_x":644,"abs_y":284}' className="text-sm font-semibold tracking-widest uppercase text-neutral-500">Essential Communication</span>
</div>

<h1 bis_size='{"x":120,"y":293,"w":448,"h":216,"abs_x":600,"abs_y":336}' className="font-jakarta text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-[1.1]">
                    Aura brings <br bis_size='{"x":490,"y":283,"w":0,"h":91,"abs_x":970,"abs_y":326}'/>
<span bis_size='{"x":120,"y":355,"w":438,"h":91,"abs_x":600,"abs_y":398}' className="text-neutral-400">radical clarity</span> <br bis_size='{"x":558,"y":355,"w":0,"h":91,"abs_x":1038,"abs_y":398}'/>
                    to your chats.
                </h1>

<p bis_size='{"x":120,"y":541,"w":512,"h":96,"abs_x":600,"abs_y":584}' className="text-xl sm:text-2xl text-neutral-600 font-normal leading-relaxed max-w-lg">
                    Remove the noise. Aura is a minimalist chat experience designed to help you focus on the people that matter, distraction-free.
                </p>

<div bis_size='{"x":120,"y":669,"w":291,"h":134,"abs_x":600,"abs_y":712}' className="pt-4">
<a bis_size='{"x":120,"y":685,"w":227,"h":54,"abs_x":600,"abs_y":728}' className="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-neutral-900 text-neutral-900 rounded-full hover:bg-neutral-900 hover:text-white transition-all duration-300" href="#">
<span bis_size='{"x":153,"y":702,"w":133,"h":20,"abs_x":633,"abs_y":745}' className="text-sm font-semibold tracking-wide">GET EARLY ACCESS</span>
<svg bis_size='{"x":298,"y":704,"w":16,"h":16,"abs_x":778,"abs_y":747}' className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div bis_size='{"x":120,"y":771,"w":291,"h":32,"abs_x":600,"abs_y":814}' className="mt-8 flex items-center gap-4 text-sm text-neutral-400">
<div bis_size='{"x":120,"y":771,"w":80,"h":32,"abs_x":600,"abs_y":814}' className="flex -space-x-2">
<div bis_size='{"x":120,"y":771,"w":32,"h":32,"abs_x":600,"abs_y":814}' className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-neutral-50 overflow-hidden">
<img bis_size='{"x":122,"y":773,"w":28,"h":28,"abs_x":602,"abs_y":816}' className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/100?img=33"/>
</div>
<div bis_size='{"x":144,"y":771,"w":32,"h":32,"abs_x":624,"abs_y":814}' className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-neutral-50 overflow-hidden">
<img bis_size='{"x":146,"y":773,"w":28,"h":28,"abs_x":626,"abs_y":816}' className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/100?img=47"/>
</div>
<div bis_size='{"x":168,"y":771,"w":32,"h":32,"abs_x":648,"abs_y":814}' className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-neutral-50 overflow-hidden">
<img bis_size='{"x":170,"y":773,"w":28,"h":28,"abs_x":650,"abs_y":816}' className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/100?img=12"/>
</div>
</div>
<span bis_size='{"x":216,"y":777,"w":195,"h":20,"abs_x":696,"abs_y":820}' className="font-medium">Joined by 10,000+ minimalists</span>
</div>
</div>
</div>
</div>
</header>


    </>
  );
}
