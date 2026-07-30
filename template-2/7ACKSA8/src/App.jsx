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
      
VANTA.HALO({el:'#vanta-wrapper',mouseControls:true,touchControls:true,minHeight:200,minWidth:200,baseColor:0x6366F1,backgroundColor:0x111827,amplitudeFactor:1.2,size:1.3});

document.addEventListener('DOMContentLoaded',()=>{
  const pwInput=document.getElementById('password'),pwToggle=document.getElementById('togglePw');
  pwToggle.addEventListener('click',()=>{
    const type=pwInput.type==='password'?'text':'password';
    pwInput.type=type;
    pwToggle.innerHTML=`<i data-lucide="${type==='password'?'eye-off':'eye'}" class="w-5 h-5"></i>`;
    lucide.createIcons();
  });

  const bar=document.getElementById('pw-bar'),label=document.getElementById('pw-label');
  pwInput.addEventListener('input',e=>{
    const v=e.target.value,l=v.length>5?1:0,u=/[A-Z]/.test(v)?1:0,n=/[0-9]/.test(v)?1:0,s=/[^A-Za-z0-9]/.test(v)?1:0,sc=l+u+n+s;
    bar.style.width=['0%','25%','50%','75%','100%'][sc];
    label.textContent=['Too weak','Weak','Fair','Strong','Excellent'][sc]||'Enter password';
  });

  const root=document.documentElement,toggle=document.getElementById('themeToggle'),
        apply=t=>{root.classList.toggle('dark',t==='dark');localStorage.setItem('theme',t);
          toggle.innerHTML=`<i data-lucide="${t==='dark'?'moon':'sun'}" class="w-4 h-4"></i>`;lucide.createIcons();};
  apply(localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'));
  toggle.addEventListener('click',()=>apply(root.classList.contains('dark')?'light':'dark'));

  lucide.createIcons();
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
      

<div className="spline-container fixed inset-0 -z-20">
<iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-Lb3VtL1bNaYUnirKNzn0FvaW" width="100%"></iframe>
</div>
<div className="fixed inset-0 bg-cover bg-center -z-30 opacity-20 dark:opacity-10" style={{backgroundImage: `url('https://images.unsplash.com/photo-1624359136353-f60129a367b9?w=3840&q=80')`}}></div>

<div aria-labelledby="main-heading" className="w-full max-w-5xl shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row ring-1 ring-neutral-200/60 dark:ring-neutral-700/40 bg-white/20 dark:bg-neutral-800/40 backdrop-blur-2xl" role="main">

<div aria-hidden="true" className="relative md:w-1/2 h-64 md:h-auto bg-neutral-900/30 backdrop-blur-xl" id="vanta-wrapper"><span style={{position: `relative`, zIndex: `1`}}>
</span><span style={{position: `relative`, zIndex: `1`}}>
</span><div className="absolute inset-0 z-10 bg-gradient-to-br from-transparent via-transparent to-neutral-900/70"></div><span style={{position: `relative`, zIndex: `1`}}>
</span><span style={{position: `relative`, zIndex: `1`}}>
</span><div className="absolute top-8 left-8 z-20">
<div className="flex items-center mb-6">
<div className="w-9 h-9 rounded-full bg-indigo-500 flex items-center justify-center">
<svg className="lucide lucide-shield w-4 h-4 text-white" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<span className="text-sm font-light tracking-tight ml-3 text-indigo-200 font-manrope" style={{}}>NEXUS</span>
</div>
<span className="inline-block text-[10px] tracking-tight rounded-full mb-2 px-2 py-1 text-indigo-200 bg-indigo-900/70 font-manrope" style={{}}>ACCESS NODE</span>
<h2 className="leading-snug text-4xl font-medium text-white tracking-tight font-montserrat" style={{}}>Secure Connect</h2>
<div className="w-16 h-0.5 mt-4 rounded-full bg-indigo-400"></div>
</div><span style={{position: `relative`, zIndex: `1`}}>
</span><span style={{position: `relative`, zIndex: `1`}}>
</span><div className="absolute bottom-8 left-8 z-20 space-y-4">

<div className="grid grid-cols-2 gap-4 max-w-xs">
<div className="bg-white/10 border-blue-200/20 border rounded-xl p-3 backdrop-blur-xl">
<p className="text-lg font-bold text-white font-manrope" style={{}}>14 ms</p>
<p className="text-[10px] mb-1 text-neutral-300 font-manrope" style={{}}>LATENCY</p>
</div>
<div className="bg-white/10 border-blue-200/20 border rounded-xl p-3 backdrop-blur-xl">
<p className="text-lg font-semibold text-white font-manrope" style={{}}>8.2 Gbps</p>
<p className="text-[10px] text-neutral-300 mb-1 font-manrope" style={{}}>THROUGHPUT</p>
</div>
</div>

<div className="bg-white/10 border-blue-200/20 border rounded-xl p-4 backdrop-blur-xl max-w-xs">
<ul className="space-y-3">
<li className="flex gap-2 items-start">
<svg className="lucide lucide-shield-check w-4 h-4 text-indigo-300 mt-[2px]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-[10px] leading-snug text-sm font-light text-neutral-300 font-manrope" style={{}}>Zero-trust token validation</span>
</li>
<li className="flex gap-2 items-start">
<svg className="lucide lucide-fingerprint w-4 h-4 text-indigo-300 mt-[2px]" data-lucide="fingerprint" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path><path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path><path d="M2 12a10 10 0 0 1 18-6"></path><path d="M2 16h.01"></path><path d="M21.8 16c.2-2 .131-5.354 0-6"></path><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path><path d="M8.65 22c.21-.66.45-1.32.57-2"></path><path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path></svg>
<span className="text-[10px] leading-snug text-sm font-light text-neutral-300 font-manrope" style={{}}>Biometric fallback</span>
</li>
<li className="flex gap-2 items-start">
<svg className="lucide lucide-alert-triangle w-4 h-4 text-orange-300 mt-[2px]" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<span className="text-[10px] leading-snug text-sm font-light text-neutral-300 font-manrope" style={{}}>Re-auth every 12 h for elevated roles</span>
</li>
</ul>
</div>
</div><span style={{position: `relative`, zIndex: `1`}}>
</span><span style={{position: `relative`, zIndex: `1`}}>
</span><canvas className="vanta-canvas" style={{position: `relative`, zIndex: `1`}}></canvas><span style={{position: `relative`, zIndex: `1`}}>
</span><canvas className="vanta-canvas" height="1364" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0`, left: `0`, width: `512px`, height: `682px`}} width="1024"></canvas><span style={{position: `relative`, zIndex: `1`}}>
</span><canvas className="vanta-canvas" height="1364" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `512px`, height: `682px`}} width="1024"></canvas><canvas className="vanta-canvas" height="1364" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `512px`, height: `682px`}} width="1024"></canvas><canvas className="vanta-canvas" height="1364" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `512px`, height: `682px`}} width="1024"></canvas><canvas className="vanta-canvas" height="1364" style={{display: `block`, position: `absolute`, zIndex: `0`, top: `0px`, left: `0px`, width: `512px`, height: `682px`}} width="1024"></canvas></div>

<div className="md:w-1/2 flex flex-col dark:bg-neutral-800/30 bg-white/40 pt-10 pr-10 pb-10 pl-10 backdrop-blur-xl justify-center">
<header className="flex items-start justify-between mb-6">
<div className="">
<h3 className="text-2xl tracking-tight font-medium text-neutral-800 dark:text-neutral-100 font-montserrat" id="main-heading" style={{}}>Sign in</h3>
<p className="text-neutral-500 dark:text-neutral-400 text-sm font-light font-manrope" style={{}}>Authorize to manage your infrastructure.</p>
</div>
<div className="flex items-center gap-4">
<a aria-label="Help and support" className="tooltip text-sm font-light relative flex items-center gap-1 text-indigo-600 hover:text-indigo-700 focus:outline-none" href="#">
<svg className="lucide lucide-life-buoy w-4 h-4" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
<span className="tooltip-content absolute -top-2 left-1/2 -translate-x-1/2 bg-cyan-800 text-white text-[10px] rounded px-2 py-1 opacity-0 pointer-events-none font-manrope" style={{}}>Contact support</span>
</a>
<button aria-label="Toggle dark mode" className="text-neutral-400 hover:text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-100 transition" id="themeToggle"><svg className="lucide lucide-moon w-4 h-4" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></button>
</div>
</header>
<form aria-describedby="security-note" className="space-y-7">

<div className="space-y-2">
<label className="block text-sm font-light text-neutral-700 dark:text-neutral-300 font-manrope" htmlFor="email" style={{}}>Email</label>
<div className="relative">
<svg className="lucide lucide-mail w-5 h-5 absolute left-3 input-icon text-gray-400 dark:text-neutral-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input autocomplete="username" className="w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm border rounded-full py-2.5 pl-11 pr-3 text-neutral-700 dark:text-neutral-200 bg-white/40 dark:bg-neutral-700/40 border-neutral-300/60 dark:border-neutral-600/50 backdrop-blur-sm" id="email" name="email" placeholder="dev@nexus.io" required type="email" />
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between">
<label className="text-sm font-light text-neutral-700 dark:text-neutral-300 font-manrope" htmlFor="password" style={{}}>Password</label>
<a className="hover:text-indigo-700 text-xs text-indigo-400 font-manrope" href="#" style={{}}>Forgot?</a>
</div>
<div className="relative">
<svg className="lucide lucide-lock w-5 h-5 absolute left-3 input-icon text-gray-400 dark:text-neutral-500" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<input aria-describedby="pw-strength" autocomplete="current-password" className="w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm border rounded-full py-2.5 pl-11 pr-10 text-neutral-700 dark:text-neutral-200 bg-white/40 dark:bg-neutral-700/40 border-neutral-300/60 dark:border-neutral-600/50 backdrop-blur-sm" id="password" name="current-password" placeholder="••••••••" required type="password" />
<button aria-label="Show password" className="absolute right-3 input-icon text-cyan-400 focus:outline-none" id="togglePw" type="button">
<svg className="lucide lucide-eye-off w-[20px] h-[20px] text-indigo-400" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `20px`, height: `20px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path className="" d="m2 2 20 20"></path></svg>
</button>
</div>
<div aria-live="polite" className="flex items-center gap-2 text-xs font-light text-neutral-600 dark:text-neutral-400 mt-1" id="pw-strength">
<div className="h-1.5 flex-1 rounded bg-neutral-100/60 dark:bg-neutral-700 overflow-hidden">
<div className="h-full w-0 bg-indigo-500 transition-all duration-300" id="pw-bar"></div>
</div>
<span className="font-manrope" id="pw-label" style={{}}>Enter password</span>
</div>
</div>

<div className="space-y-2">
<label className="block text-sm font-light text-neutral-700 dark:text-neutral-300 font-manrope" htmlFor="otp" style={{}}>One-time code</label>
<input aria-describedby="otp-help" className="w-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm border rounded-full py-2.5 pl-4 pr-4 text-neutral-700 dark:text-neutral-200 bg-white/40 dark:bg-neutral-700/40 border-neutral-300/60 dark:border-neutral-600/50 backdrop-blur-sm" id="otp" inputmode="numeric" maxlength="6" pattern="[0-9]*" placeholder="123 456" type="text" />
<p className="text-[11px] text-neutral-500 dark:text-neutral-400 font-light font-manrope" id="otp-help" style={{}}>Check your authenticator app.</p>
</div>

<label className="relative inline-flex items-center cursor-pointer select-none" htmlFor="remember">
<input aria-label="Remember this device" className="sr-only peer" id="remember" type="checkbox" />
<div className="w-10 h-5 rounded-full peer-checked:bg-indigo-600 transition-colors bg-neutral-200/60 dark:bg-neutral-700/60 backdrop-blur-sm"></div>
<div className="absolute left-1 top-[3px] w-4 h-4 rounded-full shadow peer-checked:translate-x-5 transition-transform bg-white dark:bg-neutral-200"></div>
<span className="ml-3 text-sm font-light text-neutral-600 dark:text-neutral-400 font-manrope" style={{}}>Remember me</span>
</label>

<button className="group w-full flex gap-2 transition hover:bg-indigo-700 active:scale-[.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-white font-manrope bg-gradient-to-tl from-violet-600 to-indigo-600 rounded-full pt-2.5 pb-2.5 items-center justify-center" style={{}} type="submit">
<svg className="lucide lucide-log-in w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
        Enter
      </button>
</form>
<div className="my-8 border-t border-neutral-200/60 dark:border-neutral-700/40"></div>
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-light font-manrope" style={{}}>
        New here?
        <a className="hover:text-indigo-700 text-indigo-400 font-manrope" href="#" style={{}}>Create account</a>
</p>
<div className="flex dark:text-neutral-400 text-xs font-light text-neutral-500 font-manrope space-x-5 items-center" id="security-note" style={{}}>
<svg className="lucide lucide-lock w-[16px] h-[16px] text-indigo-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: `16px`, height: `16px`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>SSL Secured
      </div>
</div>
</div>
</div>


    </>
  );
}
