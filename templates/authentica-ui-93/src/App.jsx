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



        function togglePanel() {
            const container = document.getElementById('container');
            container.classList.toggle('right-panel-active');
        }
    
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
      

<div className="group relative bg-white w-full max-w-[900px] min-h-[600px] rounded-[2rem] shadow-lg shadow-gray-200/50 border border-gray-100 overflow-hidden flex flex-col md:block" id="container">

<div className="absolute inset-0 md:h-full transition-all duration-700 ease-in-out md:left-0 md:w-1/2 opacity-0 z-10 md:group-[.right-panel-active]:translate-x-[100%] group-[.right-panel-active]:opacity-100 group-[.right-panel-active]:z-50 pointer-events-none group-[.right-panel-active]:pointer-events-auto bg-white flex flex-col justify-center px-8 sm:px-14">
<form className="flex flex-col w-full max-w-sm mx-auto" onsubmit="event.preventDefault();">
<div className="mb-8 text-center md:text-left">
<div className="font-['Lexend_Deca',_serif] font-semibold tracking-tighter text-lg text-[#1A1A2E] mb-6 flex items-center justify-center md:justify-start gap-1.5">
<div className="w-8 h-8 rounded-lg bg-[#D4AF37] flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:crown-linear"></iconify-icon>
</div>
<span className="tracking-tighter">LC</span>
</div>
<h1 className="font-['Lexend_Deca',_serif] text-3xl md:text-4xl font-semibold text-[#1A1A2E] mb-2">Create Account</h1>
<p className="text-sm text-gray-500">Join our premium community today.</p>
</div>
<div className="space-y-4">
<div className="relative flex items-center w-full">
<iconify-icon className="absolute left-4 text-gray-400 text-lg pointer-events-none" icon="solar:user-linear"></iconify-icon>
<input className="w-full bg-white border border-gray-200 focus:border-transparent focus:ring-2 focus:ring-[#D4AF37] rounded-xl py-3 pl-11 pr-4 outline-none transition-all duration-200 text-sm text-[#1A1A2E] placeholder:text-gray-400 shadow-sm" placeholder="Full Name" type="text"/>
</div>
<div className="relative flex items-center w-full">
<iconify-icon className="absolute left-4 text-gray-400 text-lg pointer-events-none" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-white border border-gray-200 focus:border-transparent focus:ring-2 focus:ring-[#D4AF37] rounded-xl py-3 pl-11 pr-4 outline-none transition-all duration-200 text-sm text-[#1A1A2E] placeholder:text-gray-400 shadow-sm" placeholder="Email Address" type="email"/>
</div>
<div className="relative flex items-center w-full">
<iconify-icon className="absolute left-4 text-gray-400 text-lg pointer-events-none" icon="solar:lock-keyhole-linear"></iconify-icon>
<input className="w-full bg-white border border-gray-200 focus:border-transparent focus:ring-2 focus:ring-[#D4AF37] rounded-xl py-3 pl-11 pr-4 outline-none transition-all duration-200 text-sm text-[#1A1A2E] placeholder:text-gray-400 shadow-sm" placeholder="Password" type="password"/>
</div>
</div>
<button className="mt-8 bg-[#D4AF37] hover:bg-[#C99E2E] active:bg-[#B8932A] text-white rounded-xl py-3.5 px-4 w-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2" type="submit">
<iconify-icon className="text-lg" icon="solar:sparkles-linear"></iconify-icon>
                    Sign Up
                </button>

<div className="mt-8 text-center md:hidden">
<p className="text-sm text-gray-500">
                        Already have an account? 
                        <button className="text-[#1A1A2E] font-medium underline underline-offset-4 decoration-gray-300 hover:text-[#D4AF37] hover:decoration-[#D4AF37] transition-colors" onclick="togglePanel()" type="button">Sign In</button>
</p>
</div>
</form>
</div>

<div className="absolute inset-0 md:h-full transition-all duration-700 ease-in-out md:left-0 md:w-1/2 z-20 md:group-[.right-panel-active]:translate-x-[100%] group-[.right-panel-active]:opacity-0 pointer-events-auto group-[.right-panel-active]:pointer-events-none bg-white flex flex-col justify-center px-8 sm:px-14">
<form className="flex flex-col w-full max-w-sm mx-auto" onsubmit="event.preventDefault();">
<div className="mb-8 text-center md:text-left">
<div className="font-['Lexend_Deca',_serif] font-semibold tracking-tighter text-lg text-[#1A1A2E] mb-6 flex items-center justify-center md:justify-start gap-1.5">
<div className="w-8 h-8 rounded-lg bg-[#D4AF37] flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:crown-linear"></iconify-icon>
</div>
<span className="tracking-tighter">LC</span>
</div>
<h1 className="font-['Lexend_Deca',_serif] text-3xl md:text-4xl font-semibold text-[#1A1A2E] mb-2">Welcome Back</h1>
<p className="text-sm text-gray-500">Please enter your details to sign in.</p>
</div>
<div className="space-y-4">
<div className="relative flex items-center w-full">
<iconify-icon className="absolute left-4 text-gray-400 text-lg pointer-events-none" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-white border border-gray-200 focus:border-transparent focus:ring-2 focus:ring-[#D4AF37] rounded-xl py-3 pl-11 pr-4 outline-none transition-all duration-200 text-sm text-[#1A1A2E] placeholder:text-gray-400 shadow-sm" placeholder="Email Address" type="email"/>
</div>
<div className="relative flex items-center w-full">
<iconify-icon className="absolute left-4 text-gray-400 text-lg pointer-events-none" icon="solar:lock-keyhole-linear"></iconify-icon>
<input className="w-full bg-white border border-gray-200 focus:border-transparent focus:ring-2 focus:ring-[#D4AF37] rounded-xl py-3 pl-11 pr-4 outline-none transition-all duration-200 text-sm text-[#1A1A2E] placeholder:text-gray-400 shadow-sm" placeholder="Password" type="password"/>
</div>
</div>
<div className="flex items-center justify-between mt-5 w-full">
<label className="flex items-center gap-2.5 cursor-pointer group/check">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none w-4 h-4 border border-gray-300 rounded-[5px] bg-gray-50 checked:bg-[#D4AF37] checked:border-[#D4AF37] transition-colors cursor-pointer shrink-0" type="checkbox"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none text-xs transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-500 group-hover/check:text-[#1A1A2E] transition-colors select-none">Remember for 30 days</span>
</label>
<a className="text-sm font-medium text-[#1A1A2E] hover:text-[#D4AF37] transition-colors" href="#">Forgot password?</a>
</div>
<button className="mt-8 bg-[#D4AF37] hover:bg-[#C99E2E] active:bg-[#B8932A] text-white rounded-xl py-3.5 px-4 w-full text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2" type="submit">
                    Sign In
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>

<div className="mt-8 text-center md:hidden">
<p className="text-sm text-gray-500">
                        Don't have an account? 
                        <button className="text-[#1A1A2E] font-medium underline underline-offset-4 decoration-gray-300 hover:text-[#D4AF37] hover:decoration-[#D4AF37] transition-colors" onclick="togglePanel()" type="button">Sign Up</button>
</p>
</div>
</form>
</div>

<div className="hidden md:block absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-[100] group-[.right-panel-active]:-translate-x-full rounded-2xl md:rounded-none">

<div className="relative -left-full w-[200%] h-full bg-[#1A1A2E] text-white transition-transform duration-700 ease-in-out group-[.right-panel-active]:translate-x-1/2 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.08),_transparent_60%)]"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>

<div className="absolute flex items-center justify-center flex-col px-12 text-center top-0 h-full w-1/2 transform transition-transform duration-700 ease-in-out group-[.right-panel-active]:translate-x-0 -translate-x-[20%]">
<iconify-icon className="text-5xl text-[#D4AF37] mb-6 drop-shadow-lg" icon="solar:shield-check-linear"></iconify-icon>
<h2 className="font-['Lexend_Deca',_serif] text-3xl font-semibold text-white mb-3">Welcome Back!</h2>
<p className="text-sm text-gray-300 mb-10 max-w-[280px] leading-relaxed">To keep connected with us please login with your personal information.</p>
<button className="rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#1A1A2E] hover:border-white transition-all duration-300 px-10 py-3 text-sm font-medium tracking-wide" onclick="togglePanel()" type="button">
                        Sign In
                    </button>
</div>

<div className="absolute flex items-center justify-center flex-col px-12 text-center top-0 h-full w-1/2 right-0 transform transition-transform duration-700 ease-in-out translate-x-0 group-[.right-panel-active]:translate-x-[20%]">
<iconify-icon className="text-5xl text-[#D4AF37] mb-6 drop-shadow-lg" icon="solar:hearts-linear"></iconify-icon>
<h2 className="font-['Lexend_Deca',_serif] text-3xl font-semibold text-white mb-3">Hello, Friend!</h2>
<p className="text-sm text-gray-300 mb-10 max-w-[280px] leading-relaxed">Enter your personal details and start your journey with our premium platform today.</p>
<button className="rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white hover:text-[#1A1A2E] hover:border-white transition-all duration-300 px-10 py-3 text-sm font-medium tracking-wide" onclick="togglePanel()" type="button">
                        Sign Up
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
