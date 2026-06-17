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



        const form = document.getElementById('loginForm');
        const submitBtn = document.getElementById('submitBtn');
        const btnText = document.getElementById('btn-text');
        const btnLoading = document.getElementById('btn-loading');
        const errorAlert = document.getElementById('error-alert');
        const errorText = document.getElementById('error-text');
        
        // Mock State Variables
        let loading = false;
        let error = null;

        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get values
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Set Loading State
            loading = true;
            updateUI();

            // Simulate API Call
            setTimeout(() => {
                loading = false;
                
                // Simple validation to match "Development mode" logic from prompt
                if (username === password && username.length > 0) {
                    // Success simulation
                    error = null;
                    // In React: nav("/dashboard")
                    window.location.hash = "#dashboard"; 
                    alert("Redirecting to /dashboard...");
                } else {
                    // Error simulation
                    error = "用户名或密码错误";
                }
                updateUI();
            }, 1500);
        });

        function updateUI() {
            if (loading) {
                submitBtn.disabled = true;
                submitBtn.classList.add('opacity-80', 'cursor-not-allowed');
                btnText.classList.add('hidden');
                btnLoading.classList.remove('hidden');
                btnLoading.classList.add('flex');
            } else {
                submitBtn.disabled = false;
                submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');
                btnText.classList.remove('hidden');
                btnLoading.classList.add('hidden');
                btnLoading.classList.remove('flex');
            }

            if (error) {
                errorAlert.classList.remove('hidden');
                errorText.textContent = error;
            } else {
                errorAlert.classList.add('hidden');
            }
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
      

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full blur-[120px] mix-blend-screen opacity-40 bg-indigo-400/20"></div>
<div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] rounded-full blur-[100px] mix-blend-screen opacity-30 bg-violet-400/10"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>

<main className="w-full max-w-[400px] p-6 relative z-10">

<div className="text-center mb-8 space-y-2">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-b border shadow-lg mb-4 group from-neutral-200 to-neutral-100 border-black/10">
<svg aria-hidden="true" className="iconify group-hover:text-indigo-300 transition-colors duration-300 iconify--lucide w-[24px] h-[24px]" data-height="24" data-icon="lucide:flask-conical" data-icon-replaced="true" data-icon-set="lucide" data-lucide="activity" data-strokeWidth="1.5" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(165, 180, 252)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h1 className="text-xl font-semibold text-zinc-900 tracking-tight">OSRI-CTS</h1>
<p className="uppercase text-xs font-medium text-neutral-500 tracking-wide"></p>
</div>

<div className="backdrop-blur-xl border rounded-2xl shadow-2xl overflow-hidden bg-neutral-100/60 border-black/5 shadow-white/50">

<form className="sm:p-8 pt-6 pr-6 pb-6 pl-6 space-y-5" id="loginForm">

<div className="space-y-1.5 input-group">
<label className="transition-colors duration-200 text-xs font-medium ml-1 text-neutral-600" htmlFor="username">用户名</label>
<div className="relative group">
<input autofocus="" className="placeholder-neutral-600 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200 text-sm w-full border rounded-lg pt-2.5 pr-4 pb-2.5 pl-10 text-black bg-neutral-50/50 border-neutral-200" id="username" name="username" placeholder="输入 LDAP 用户名" required="" type="text"/>
<span className="absolute left-3 top-1/2 -translate-y-1/2 input-icon transition-colors duration-200 text-neutral-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</span>
</div>
</div>

<div className="space-y-1.5 input-group">
<label className="text-xs font-medium transition-colors duration-200 ml-1 text-neutral-600" htmlFor="password">密码</label>
<div className="relative group">
<input className="w-full text-sm placeholder-neutral-600 border rounded-lg pl-10 pr-4 py-2.5 outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200 bg-neutral-50/50 text-black border-neutral-200" id="password" name="password" placeholder="输入密码" required="" type="password"/>
<span className="absolute left-3 top-1/2 -translate-y-1/2 input-icon transition-colors duration-200 text-neutral-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path className="" d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
</span>
</div>
</div>


<div className="hidden flex items-start gap-3 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-800" id="error-alert">
<svg aria-hidden="true" className="iconify mt-0.5 shrink-0 iconify--lucide text-red-600" data-icon="lucide:alert-circle" data-strokeWidth="1.5" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v4m0 4h.01"></path></g></svg>
<span id="error-text">登录失败，请检查用户名或密码。</span>
</div>

<button className="group relative w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-gradient-to-r hover:from-indigo-500 hover:to-violet-500 text-sm font-medium shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)] border transition-all duration-200 overflow-hidden from-indigo-400 to-violet-400 text-black border-black/10" id="submitBtn" type="submit">
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-[#5c697a]/20 absolute top-0 right-0 bottom-0 left-0 blur-md translate-y-full"></div>
<span className="flex items-center gap-2 font-merriweather relative" id="btn-text">Login</span>
<span className="hidden relative items-center gap-2" id="btn-loading">
<svg aria-hidden="true" className="iconify animate-spin iconify--lucide" data-icon="lucide:loader-2" data-strokeWidth="1.5" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        登录中...
                    </span>
</button>
</form>

</div>

<div className="mt-8 text-center">
<p className="text-[10px] tracking-wider text-neutral-400">© By OSRI V1.0.0</p>
</div>
</main>



    </>
  );
}
