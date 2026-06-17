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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Password Visibility Toggle
        const togglePasswordBtn = document.getElementById('togglePasswordBtn');
        const passkeyInput = document.getElementById('passkeyInput');
        const eyeIcon = document.getElementById('eyeIcon');

        togglePasswordBtn.addEventListener('click', () => {
            if (passkeyInput.type === 'password') {
                passkeyInput.type = 'text';
                eyeIcon.setAttribute('icon', 'solar:eye-closed-linear');
            } else {
                passkeyInput.type = 'password';
                eyeIcon.setAttribute('icon', 'solar:eye-linear');
            }
        });

        // Form Validation Logic
        const authForm = document.getElementById('authForm');
        const identityInput = document.getElementById('identityInput');
        const submitBtn = document.getElementById('submitBtn');
        const btnText = document.getElementById('btnText');
        const btnIcon = document.getElementById('btnIcon');

        // Initial styling classes
        const defaultBtnClass = "w-full bg-white text-black hover:bg-zinc-200 font-medium text-sm py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]";

        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const identity = identityInput.value.trim();
            const passkey = passkeyInput.value.trim();

            if (identity === 'admin_sigma' && passkey === 'vault123') {
                // Success State
                submitBtn.className = "w-full bg-emerald-500 text-white font-medium text-sm py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)]";
                btnText.textContent = "Access Granted";
                btnIcon.setAttribute('icon', 'solar:check-circle-linear');
                btnIcon.classList.remove('group-hover:translate-x-1');
            } else {
                // Error State
                submitBtn.className = "w-full bg-red-500 text-white font-medium text-sm py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shake shadow-[0_0_20px_rgba(239,68,68,0.3)]";
                btnText.textContent = "Access Denied";
                btnIcon.setAttribute('icon', 'solar:close-circle-linear');
                btnIcon.classList.remove('group-hover:translate-x-1');

                // Reset Button after 2 seconds
                setTimeout(() => {
                    submitBtn.className = defaultBtnClass;
                    btnText.textContent = "Initialize Link";
                    btnIcon.setAttribute('icon', 'solar:arrow-right-linear');
                    btnIcon.classList.add('group-hover:translate-x-1');
                }, 2000);
            }
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
      

<video autoplay="" className="absolute inset-0 w-full h-full object-cover -z-30 opacity-25 mix-blend-screen pointer-events-none" loop="" muted="" playsinline="">
<source src="https://assets.codepen.io/3364143/7btrrd.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(39,39,42,0.3)_0%,_#000000_80%)] -z-20 pointer-events-none"></div>
<div className="absolute inset-0 bg-grid -z-10 pointer-events-none"></div>

<header className="h-16 z-50 flex items-center justify-between px-6 shrink-0 relative w-full">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center">
<iconify-icon className="text-black text-sm" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="tracking-tight text-sm font-medium">HS_VAULT</span>
</div>
<div className="flex items-center gap-4">
<span className="text-xs text-zinc-500 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></span>
                System Secure
            </span>
</div>
</header>

<main className="flex-1 w-full h-full flex items-center justify-center relative vault-space overflow-hidden">

<div className="absolute left-1/2 top-1/2 -ml-[380px] -mt-[180px] w-64 h-80 bg-zinc-900/20 backdrop-blur-sm border border-white/[0.03] rounded-3xl bg-element z-0 pointer-events-none flex items-center justify-center overflow-hidden" style={{'--rx': '15deg', '--ry': '25deg', '--tz': '-200px'}}>
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50"></div>
<svg className="text-white/20 animate-[spin_40s_linear_infinite]" fill="none" height="120" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100" width="120">
<circle cx="50" cy="50" r="40" stroke-dasharray="2 4"></circle>
<circle cx="50" cy="50" r="30" stroke-dasharray="1 6"></circle>
<rect height="30" transform="rotate(45 50 50)" width="30" x="35" y="35"></rect>
</svg>
</div>

<div className="absolute left-1/2 top-1/2 ml-[140px] -mt-[220px] w-72 h-96 bg-indigo-500/[0.02] backdrop-blur-sm border border-white/[0.03] rounded-3xl bg-element z-0 pointer-events-none" style={{'--rx': '-10deg', '--ry': '-20deg', '--tz': '-300px', animationDelay: '-3s'}}>
<div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/10 to-transparent opacity-30"></div>
</div>

<div className="relative w-full max-w-[360px] z-10 login-card px-4 sm:px-0">

<div className="absolute inset-0 bg-white/5 blur-2xl rounded-3xl"></div>

<div className="relative bg-zinc-950/70 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col gap-6">

<div className="text-center flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-4 shadow-inner relative group cursor-default">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
<iconify-icon className="text-white text-xl" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-lg font-medium tracking-tight">Access Portal</h1>
<p className="text-[0.65rem] text-zinc-400 mt-1">Mock Data: <span className="text-white">admin_sigma</span> / <span className="text-white">vault123</span></p>
</div>

<form className="flex flex-col gap-4" id="authForm">

<div className="space-y-1.5">
<label className="text-[0.65rem] text-zinc-500 uppercase tracking-widest ml-1 block">Identity</label>
<div className="relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-white transition-colors">
<iconify-icon className="text-sm" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>

<input className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-4 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] ring-1 ring-transparent focus:ring-white/10" id="identityInput" placeholder="Admin_ID or Email" type="text" value="admin_sigma"/>
</div>
</div>

<div className="space-y-1.5">
<div className="flex justify-between items-center ml-1">
<label className="text-[0.65rem] text-zinc-500 uppercase tracking-widest block">Passkey</label>
<a className="text-[0.65rem] text-zinc-400 hover:text-white transition-colors" href="#">Recover?</a>
</div>
<div className="relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-zinc-500 group-focus-within:text-white transition-colors">
<iconify-icon className="text-sm" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
</div>

<input className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-9 pr-10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] ring-1 ring-transparent focus:ring-white/10" id="passkeyInput" placeholder="••••••••" type="password" value="vault123"/>
<button className="absolute inset-y-0 right-3 flex items-center text-zinc-500 hover:text-white transition-colors" id="togglePasswordBtn" type="button">
<iconify-icon className="text-sm" icon="solar:eye-linear" id="eyeIcon" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center justify-between mt-1 mb-2">
<label className="flex items-center gap-2 cursor-pointer custom-checkbox group">
<input className="hidden" type="checkbox"/>
<div className="w-3.5 h-3.5 rounded-sm border border-white/20 bg-white/5 flex items-center justify-center group-hover:border-white/40 transition-colors">
<iconify-icon className="text-black text-[0.65rem] opacity-0 transition-opacity" icon="solar:check-read-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-xs text-zinc-400 group-hover:text-white transition-colors select-none">Remember device</span>
</label>
</div>

<button className="w-full bg-white text-black hover:bg-zinc-200 font-medium text-sm py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]" id="submitBtn" type="submit">
<span id="btnText">Initialize Link</span>
<iconify-icon className="text-sm group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" id="btnIcon" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
</main>


    </>
  );
}
