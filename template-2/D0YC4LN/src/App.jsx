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



      // Initialize lucide icons
      function renderIcons() {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      }

      document.addEventListener("DOMContentLoaded", () => {
        // Icons
        renderIcons();

        // Password toggle
        const pwd = document.getElementById("password");
        const toggle = document.getElementById("togglePassword");
        toggle?.addEventListener("click", () => {
          const isHidden = pwd.type === "password";
          pwd.type = isHidden ? "text" : "password";
          const icon = toggle.querySelector("i[data-lucide]");
          if (icon) {
            icon.setAttribute("data-lucide", isHidden ? "eye-off" : "eye");
            renderIcons();
          }
        });

        // Enable/disable submit button
        const email = document.getElementById("email");
        const submit = document.getElementById("submitBtn");
        function validate() {
          const ok = (email.value || "").trim().length > 2 && (pwd.value || "").length >= 6;
          submit.disabled = !ok;
        }
        email.addEventListener("input", validate);
        pwd.addEventListener("input", validate);
        validate();

        // Prevent default form submit for demo
        document.querySelector("form")?.addEventListener("submit", (e) => {
          e.preventDefault();
          submit.classList.add("scale-[.99]");
          setTimeout(() => submit.classList.remove("scale-[.99]"), 120);
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
      

<div className="fixed inset-0 -z-10">
<img alt="" className="h-full w-full object-cover object-center opacity-100" src="/assets/22df5474-7a3a-4fea-b5c6-e2980964892d_3840w.jpg" />
</div>

<main className="relative flex min-h-screen items-center justify-center p-4 sm:p-6">


<div className="relative z-10 w-full max-w-3xl">
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl shadow-black/40 ring-1 ring-white/10 transition-all duration-300 hover:border-white/20 hover:ring-white/20 shadow-[0_0_40px_rgba(249,115,22,0.35)] hover:shadow-[0_0_64px_rgba(0,0,0,0.55)]">

<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="relative flex flex-col sm:flex-row">

<div className="relative w-full sm:w-1/2 h-48 sm:h-auto" data-animate="" style={{transitionDelay: `60ms`}}>
<img alt="Futuristic render" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bc0e3057-c73b-46a1-a617-dceb564857f0_800w.jpg" />
<div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/30 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-white/10 bg-black/30 px-3 py-2 backdrop-blur-md">
<div className="flex items-center gap-2 text-xs text-white/75">
<svg className="lucide lucide-image h-3.5 w-3.5" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
                  Visual channel
                </div>
<span className="text-[11px] text-white/60">1:1 layout</span>
</div>
</div>

<div className="p-6 sm:p-8 w-full sm:w-1/2">
<div className="mb-6 flex items-center justify-between">

<div className="flex items-center gap-3" data-animate="">
<div className="grid h-10 w-10 place-items-center shadow-black/30 text-white/90 bg-stone-400/20 border-white/15 border rounded-xl shadow-sm">
<svg className="lucide lucide-message-square h-5 w-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<div className="">
<div className="text-sm tracking-widest text-white/60">CH</div>
<div className="text-[22px] tracking-tight font-semibold">Chatter</div>
</div>
</div>

<div className="text-xs text-white/50" data-animate="" style={{transitionDelay: `60ms`}}>v1.0</div>
</div>
<div className="mb-6" data-animate="" style={{transitionDelay: `80ms`}}>
<h1 className="text-[26px] font-semibold tracking-tight">Welcome back</h1>
<p className="mt-1.5 text-sm text-white/60">Sign in to continue your conversation.</p>
</div>

<form className="space-y-4">

<div className="space-y-2" data-animate="" style={{transitionDelay: `120ms`}}>
<label className="block text-sm text-white/80" htmlFor="email">Email or username</label>
<div className="group/input relative flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition-all hover:border-white/20 focus-within:border-white/25 focus-within:bg-white/[0.07]">
<svg className="lucide lucide-mail mr-2 h-4.5 w-4.5 text-white/60" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input autocomplete="username" className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none" id="email" inputmode="email" placeholder="you@domain.com" type="text" />
<div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-orange-400/0 transition-all group-focus-within/input:ring-2 group-focus-within/input:ring-orange-400/25"></div>
</div>
</div>

<div className="space-y-2" data-animate="" style={{transitionDelay: `160ms`}}>
<div className="flex items-center justify-between">
<label className="block text-sm text-white/80" htmlFor="password">Password</label>
<a className="text-xs text-orange-300/80 hover:text-orange-300 hover:underline underline-offset-4 transition-colors" href="#">Forgot?</a>
</div>
<div className="group/input relative flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 transition-all hover:border-white/20 focus-within:border-white/25 focus-within:bg-white/[0.07]">
<svg className="lucide lucide-lock mr-2 h-4.5 w-4.5 text-white/60" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<input autocomplete="current-password" className="w-full bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none" id="password" placeholder="••••••••" type="password" />
<button aria-label="Toggle password visibility" className="ml-2 grid h-8 w-8 place-items-center rounded-lg text-white/70 hover:text-white/90 hover:bg-white/10 transition-colors" id="togglePassword" type="button">
<svg className="lucide lucide-eye h-4.5 w-4.5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-orange-400/0 transition-all group-focus-within/input:ring-2 group-focus-within/input:ring-orange-400/25"></div>
</div>
</div>

<div className="flex items-center justify-between pt-1" data-animate="" style={{transitionDelay: `200ms`}}>
<label className="inline-flex cursor-pointer select-none items-center gap-2">
<input className="peer sr-only" id="remember" type="checkbox" />
<span className="grid h-5 w-5 place-items-center rounded-md border border-white/15 bg-white/5 transition-all peer-checked:bg-orange-500 peer-checked:border-orange-400 peer-checked:shadow-[0_0_0_3px_rgba(249,115,22,0.25)]">
<svg aria-hidden="true" className="h-3.5 w-3.5 opacity-0 transition-opacity duration-200 peer-checked:opacity-100" viewBox="0 0 24 24">
<path d="M20 6 9 17l-5-5" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
<span className="text-sm text-white/80">Remember me</span>
</label>
<a className="text-sm text-white/60 hover:text-white/80 hover:underline underline-offset-4 transition-colors" href="#">Need help?</a>
</div>

<div className="relative" data-animate="" style={{transitionDelay: `220ms`}}>
<div className="my-2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>

<div className="grid gap-3" data-animate="" style={{transitionDelay: `240ms`}}>
<button className="group relative inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-orange-900/30 outline-none ring-1 ring-orange-400/30 transition-all hover:shadow-orange-900/40 focus-visible:ring-2 focus-visible:ring-orange-300 disabled:cursor-not-allowed disabled:opacity-60 hover:brightness-110 hover:saturate-125" disabled id="submitBtn" style={{background: `radial-gradient(120% 120% at 0% 0%, rgba(251,146,60,1) 0%, rgba(249,115,22,1) 36%, rgba(251,146,60,0.25) 60%), radial-gradient(120% 120% at 100% 0%, rgba(245,158,11,1) 0%, rgba(251,146,60,0.9) 45%, rgba(245,158,11,0.25) 70%), radial-gradient(140% 140% at 100% 100%, rgba(249,115,22,1) 10%, rgba(234,88,12,1) 45%, rgba(154,52,18,1) 85%)`}} type="submit">
<span className="absolute inset-0 -z-10 rounded-xl bg-orange-400/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100"></span>
<svg className="lucide lucide-log-in mr-2 h-4.5 w-4.5" data-lucide="log-in" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10 17 5-5-5-5"></path><path d="M15 12H3"></path><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path></svg>
                    Sign in
                  </button>
<p className="text-center text-xs text-white/55">New here? <a className="text-orange-300/90 hover:text-orange-300 underline underline-offset-4" href="#">Create an account</a></p>
</div>
</form>
</div>
</div>

<div className="flex items-center justify-between rounded-b-2xl border-t border-white/10 bg-white/[0.04] px-6 py-3 text-[11px] text-white/55">
<div className="flex items-center gap-2" data-animate="" style={{transitionDelay: `260ms`}}>
<svg className="lucide lucide-shield h-3.5 w-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span>End‑to‑end ready</span>
</div>
<div className="flex items-center gap-2" data-animate="" style={{transitionDelay: `280ms`}}>
<svg className="lucide lucide-clock h-3.5 w-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Fast handoff</span>
</div>
</div>
</div>
</div>
</main>




    </>
  );
}
