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
    // Copy snippet
    document.querySelector('.icon-btn').addEventListener('click', ()=> {
      navigator.clipboard.writeText(`import { auth } from '@zeroauth/sdk';\nawait auth.login('biometric');`);
    });
    // Chart
    const ctx=document.getElementById('signupChart').getContext('2d');
    new Chart(ctx,{type:'bar',
      data:{labels:['Passwords','Passkeys'],datasets:[{data:[60,100],backgroundColor:['#334155','#3b82f6'],borderWidth:0,barPercentage:.6}]},
      options:{responsive:true,plugins:{legend:{display:false}},scales:{y:{grid:{color:'#1e293b'},ticks:{color:'#94a3b8',stepSize:20,min:0,max:100}},x:{grid:{display:false},ticks:{color:'#94a3b8'}}}}
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
      

<header className="w-full backdrop-blur-md sticky top-0 z-20 border-b border-neutral-800">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
<span className="text-xl font-semibold tracking-tight">Ø Auth</span>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white/80 transition" href="#">Product</a>
<a className="hover:text-white/80 transition" href="#">Docs</a>
<a className="hover:text-white/80 transition" href="#">Pricing</a>
<a className="px-3 py-1.5 rounded-md border border-neutral-700 hover:border-neutral-500 transition" href="#">Sign in</a>
</nav>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 pt-24 pb-32 grid lg:grid-cols-2 gap-16">
<div className="animate-in">
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight">Auth that disappears.</h1>
<p className="mt-6 text-lg text-neutral-400 max-w-xl">
        Ship biometric, passwordless authentication your users forget even exists—integrate with one line, scale to millions.
      </p>
<div className="mt-8 flex gap-4">
<button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 transition text-sm font-medium">Get early access</button>
<button className="px-6 py-3 rounded-md border border-neutral-700 hover:border-neutral-500 transition text-sm font-medium">View docs</button>
</div>

<div className="mt-12 flex flex-wrap items-center gap-6 opacity-70">
<span className="text-neutral-400 text-sm">Backed by</span>
<div className="flex items-center gap-6">
<span className="text-lg font-semibold tracking-tight">KD</span>
<span className="text-lg font-semibold tracking-tight">MP</span>
<span className="text-lg font-semibold tracking-tight">RΛ</span>
<span className="text-lg font-semibold tracking-tight">NV</span>
</div>
</div>
</div>

<div className="animate-in animate-delay-2">
<div className="relative rounded-xl border border-neutral-800 overflow-hidden">
<div className="flex items-center justify-between px-4 py-2 bg-neutral-900 border-b border-neutral-800">
<span className="text-sm text-neutral-400">example.js</span>
<button className="icon-btn p-1 rounded-md transition" title="Copy">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="copy"></i>
</button>
</div>
<pre className="bg-neutral-950 p-6 text-sm leading-6 overflow-x-auto">
<span className="text-neutral-600">// One line to passwordless bliss</span>
<span className="text-green-400">import</span> <span className="text-yellow-400">{</span> auth<span className="text-yellow-400"> }</span> <span className="text-green-400">from</span> <span className="text-amber-400">'@zeroauth/sdk'</span><span className="text-pink-500">;</span>

<span className="text-blue-400">await</span> auth<span className="text-pink-500">.</span><span className="text-cyan-400">login</span><span className="text-pink-500">(</span><span className="text-sky-400">'biometric'</span><span className="text-pink-500">);</span>
        </pre>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-10">
<div className="animate-in animate-delay-1 border border-neutral-800 rounded-xl p-6 bg-neutral-900/50">
<i className="w-6 h-6 stroke-[1.5] text-blue-500" data-lucide="fingerprint"></i>
<h3 className="mt-4 text-lg font-medium">Biometric first</h3>
<p className="mt-2 text-sm text-neutral-400">Face ID, Touch ID, Windows Hello—native everywhere.</p>
</div>
<div className="animate-in animate-delay-2 border border-neutral-800 rounded-xl p-6 bg-neutral-900/50">
<i className="w-6 h-6 stroke-[1.5] text-blue-500" data-lucide="shield-check"></i>
<h3 className="mt-4 text-lg font-medium">Zero secrets</h3>
<p className="mt-2 text-sm text-neutral-400">No passwords, no OTPs, nothing to leak or phish.</p>
</div>
<div className="animate-in animate-delay-3 border border-neutral-800 rounded-xl p-6 bg-neutral-900/50">
<i className="w-6 h-6 stroke-[1.5] text-blue-500" data-lucide="code"></i>
<h3 className="mt-4 text-lg font-medium">1-line SDK</h3>
<p className="mt-2 text-sm text-neutral-400">Drop-in, auto-updates, supports web &amp; native frameworks.</p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32 grid lg:grid-cols-2 gap-16 items-center">
<div className="animate-in">
<h2 className="text-3xl font-semibold tracking-tight">40 % more sign-ups</h2>
<p className="mt-4 text-neutral-400 max-w-md text-sm">Users bounce when they forget passwords. Our passkey flow cuts the hassle and keeps them inside your product.</p>
</div>
<div className="animate-in animate-delay-1">
<div>
<div>
<canvas id="signupChart"></canvas>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32 text-center animate-in">
<div className="inline-block px-8 py-14 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md">
<h2 className="text-4xl font-semibold tracking-tight">Be first in line.</h2>
<p className="mt-4 text-neutral-400 max-w-lg mx-auto text-sm">Join the waitlist to receive early SDK access, docs, and an invite to private beta.</p>
<form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
<input className="w-64 sm:w-80 bg-neutral-800 border border-neutral-700 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-blue-500 placeholder:text-neutral-500" placeholder="you@company.com" required="" type="email"/>
<button className="px-6 py-3 rounded-md bg-blue-600 hover:bg-blue-500 transition text-sm font-medium">Request access</button>
</form>
</div>
</section>

<footer className="border-t border-neutral-800 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between gap-6">
<span className="text-neutral-500 text-sm">© 2024 Ø Auth</span>
<div className="flex gap-6 text-sm">
<a className="hover:text-neutral-300" href="#">Status</a>
<a className="hover:text-neutral-300" href="#">Terms</a>
<a className="hover:text-neutral-300" href="#">Privacy</a>
</div>
</div>
</footer>


    </>
  );
}
