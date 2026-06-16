import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    // Initial staggered animation
    window.addEventListener('load', () => {
      [...document.querySelectorAll('#card > div, #card > form, #card > p')]
        .forEach((el, i) => {
          setTimeout(() => {
            el.classList.remove('opacity-0', 'translate-y-3');
          }, 120 * i + 100);
        });
      lucide.createIcons({attrs: {'stroke-width': 1.5}});
    });

    // Toggle logic for forms
    const btnLogin  = document.getElementById('btn-login');
    const btnSignup = document.getElementById('btn-signup');
    const formLogin = document.getElementById('form-login');
    const formSignup= document.getElementById('form-signup');

    function activate(isLogin){
      btnLogin.dataset.active  = isLogin;
      btnSignup.dataset.active = !isLogin;
      formLogin.classList.toggle('hidden', !isLogin);
      formSignup.classList.toggle('hidden',  isLogin);
    }
    btnLogin.addEventListener('click', () => activate(true));
    btnSignup.addEventListener('click', () => activate(false));
    activate(true); // default

    // THEME TOGGLE
    const body     = document.body;
    const card     = document.getElementById('card');
    const backdrop = document.getElementById('backdrop');
    const themeTog = document.getElementById('theme-toggle');
    let   isDark   = true; // initial state

    function applyTheme(){
      // BODY
      body.classList.toggle('bg-neutral-950',  isDark);
      body.classList.toggle('text-neutral-100',isDark);
      body.classList.toggle('bg-neutral-50',  !isDark);
      body.classList.toggle('text-neutral-900',!isDark);

      // CARD
      card.classList.toggle('bg-neutral-900/90', isDark);
      card.classList.toggle('ring-neutral-800',  isDark);
      card.classList.toggle('bg-white',          !isDark);
      card.classList.toggle('ring-neutral-200',  !isDark);

      // BACKDROP visibility
      backdrop.classList.toggle('hidden', !isDark);

      // INPUTS
      document.querySelectorAll('#card input[type="email"], #card input[type="password"]').forEach(inp=>{
        inp.classList.toggle('bg-neutral-800/60', isDark);
        inp.classList.toggle('bg-neutral-100',    !isDark);
        inp.classList.toggle('text-neutral-800',  !isDark);
        inp.classList.toggle('placeholder-neutral-500', isDark);
        inp.classList.toggle('placeholder-neutral-400', !isDark);
      });

      // Checkbox ring color switch
      document.querySelectorAll('#card input[type="checkbox"]').forEach(box=>{
        box.classList.toggle('bg-neutral-800/60', isDark);
        box.classList.toggle('bg-neutral-100',    !isDark);
        box.classList.toggle('ring-neutral-700',  isDark);
        box.classList.toggle('ring-neutral-300',  !isDark);
      });

      // Move knob & change track color
      themeTog.querySelector('span').style.transform = isDark ? 'translateX(0)' : 'translateX(20px)';
      themeTog.classList.toggle('bg-neutral-700', isDark);
      themeTog.classList.toggle('bg-purple-600', !isDark);
    }

    themeTog.addEventListener('click', ()=>{
      isDark = !isDark;
      applyTheme();
    });

    applyTheme(); // initial theme setup
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 overflow-hidden pointer-events-none" id="backdrop">
<img alt="" className="w-full h-full object-cover object-center opacity-10 blur-sm scale-105" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&amp;fit=crop&amp;w=1050&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-br from-neutral-950/90 to-neutral-900/70"></div>
</div>

<div className="relative w-full max-w-md rounded-2xl bg-neutral-900/90 backdrop-blur-md ring-1 ring-neutral-800 overflow-hidden shadow-xl transition transform p-8 space-y-10" id="card">

<div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 translate-y-3 transition duration-700" style={{animationDelay: '0.1s'}}>
<i className="w-4 h-4 text-neutral-400 pointer-events-none" data-lucide="moon"></i>
<div className="w-10 h-5 rounded-full bg-neutral-700 relative cursor-pointer transition-colors" id="theme-toggle">
<span className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform"></span>
</div>
<i className="w-4 h-4 text-neutral-400 pointer-events-none" data-lucide="sun"></i>
</div>

<div className="flex items-center gap-2 select-none opacity-0 translate-y-3 transition duration-700" style={{animationDelay: '0.15s'}}>
<span className="text-lg font-semibold tracking-tight text-white">WS</span>
<span className="text-sm font-medium text-neutral-400">Web Scraper</span>
</div>

<div className="flex justify-center gap-6 text-sm font-medium opacity-0 translate-y-3 transition duration-700" style={{animationDelay: '0.25s'}}>
<button className="px-4 py-1 rounded-md transition-colors focus:outline-none ring-1 ring-transparent data-[active=true]:bg-neutral-800 data-[active=true]:ring-neutral-700 data-[active=true]:text-white data-[active=false]:text-neutral-400" id="btn-login">
        Log In
      </button>
<button className="px-4 py-1 rounded-md transition-colors focus:outline-none ring-1 ring-transparent data-[active=false]:text-neutral-400" id="btn-signup">
        Sign Up
      </button>
</div>
<div className="h-px bg-neutral-800"></div>

<form className="space-y-6 opacity-0 translate-y-3 transition duration-700" id="form-login" style={{animationDelay: '0.35s'}}>
<div className="relative">
<input className="peer w-full rounded-lg bg-neutral-800/60 py-3 pl-11 pr-4 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" placeholder="Email" required="" type="email"/>
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="mail"></i>
</div>
<div className="relative">
<input className="peer w-full rounded-lg bg-neutral-800/60 py-3 pl-11 pr-4 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" placeholder="Password" required="" type="password"/>
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="lock"></i>
</div>
<div className="flex items-center justify-between">
<label className="flex items-center gap-2 text-xs select-none">
<input className="appearance-none w-4 h-4 rounded bg-neutral-800/60 checked:bg-purple-600 ring-1 ring-neutral-700 transition" type="checkbox" />
<span className="text-neutral-400">Remember me</span>
</input></label>
<a className="text-xs text-purple-600 hover:underline" href="#">Forgot?</a>
</div>
<button className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-500 active:bg-purple-700 transition font-medium tracking-tight" type="submit">
        Continue
      </button>
</form>
<form className="hidden space-y-6 opacity-0 translate-y-3 transition duration-700" id="form-signup" style={{animationDelay: '0.35s'}}>
<div className="relative">
<input className="peer w-full rounded-lg bg-neutral-800/60 py-3 pl-11 pr-4 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" placeholder="Email" required="" type="email"/>
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="mail"></i>
</div>
<div className="relative">
<input className="peer w-full rounded-lg bg-neutral-800/60 py-3 pl-11 pr-4 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" placeholder="Password" required="" type="password"/>
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="lock"></i>
</div>
<div className="relative">
<input className="peer w-full rounded-lg bg-neutral-800/60 py-3 pl-11 pr-4 text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition" placeholder="Confirm Password" required="" type="password"/>
<i className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="lock"></i>
</div>
<button className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-500 active:bg-purple-700 transition font-medium tracking-tight" type="submit">
        Create Account
      </button>
</form>
<p className="text-xs text-center text-neutral-500 opacity-0 translate-y-3 transition duration-700" style={{animationDelay: '0.45s'}}>
      By continuing you agree to our <a className="underline hover:text-neutral-300" href="#">Terms</a>.
    </p>
</div>




    </>
  );
}
