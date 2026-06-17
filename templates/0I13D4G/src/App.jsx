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
      
    // Lucide icons
    lucide.createIcons();

    // ParticlesJS
    particlesJS("particles-js", {
      particles: {
        number: { value: 38, density: { enable: true, value_area: 800 } },
        color: { value: "#a78bfa" },
        shape: { type: "circle" },
        opacity: { value: 0.13, random: true },
        size: { value: 4, random: true },
        line_linked: { enable: true, distance: 150, color: "#7c3aed", opacity: 0.18, width: 1 },
        move: { enable: true, speed: 1.3, direction: "none", random: false, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: false } },
        modes: { repulse: { distance: 90, duration: 0.4 } }
      },
      retina_detect: true
    });

    // Sequential fade in (stagger effect)
    document.querySelectorAll('.fade-in-up').forEach((el, idx) => {
      setTimeout(() => el.style.opacity = 1, 200 + idx * 120);
    });

    // Loader logic
    const form = document.getElementById('key-form');
    const btn = document.getElementById('submit-btn');
    const loader = document.getElementById('loader');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      btn.disabled = true;
      loader.style.display = 'block';
      setTimeout(() => {
        loader.style.display = 'none';
        btn.disabled = false;
        // Here you can add further logic (success, error, etc)
      }, 2200);
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
      

<div className="fixed inset-0 z-0 pointer-events-none" id="particles-js"></div>
<main className="relative z-10 w-full max-w-md">
<div className="glass p-8 sm:p-10 w-full flex flex-col items-center gap-8 fade-in-up" style={{animationDelay: '0.15s'}}>
<div className="w-16 h-16 flex items-center justify-center bg-gradient-to-tr from-[#a78bfa] via-[#8b5cf6] to-[#6d28d9] rounded-full shadow-md fade-in-up" style={{animationDelay: '0.25s'}}>
<i className="lucide lucide-key text-white" id="key-icon" style={{width: '32px', height: '32px'}}></i>
</div>
<h2 className="text-3xl tracking-tight font-semibold text-white fade-in-up" style={{animationDelay: '0.35s'}}>
        Введите ключ доступа
      </h2>
<p className="text-base text-violet-100 font-normal text-center fade-in-up" style={{animationDelay: '0.45s'}}>
        Для продолжения работы введите свой персональный ключ. Безопасно и конфиденциально.
      </p>

<form autocomplete="off" className="w-full flex flex-col gap-5 fade-in-up" id="key-form" style={{animationDelay: '0.65s'}}>
<div className="relative">
<input className="w-full px-5 py-3 rounded-xl bg-gradient-to-br from-[#29225a]/60 to-[#1e183b]/60 border-2 border-transparent border-gradient text-white text-[1.07rem] font-medium focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-violet-500 transition placeholder-violet-400/80 shadow-sm" id="key-input" placeholder="Ваш ключ..." required="" style={{backdropFilter: 'blur(8px)'}} type="text"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-violet-300 pointer-events-none">
<i className="lucide lucide-lock" style={{width: '20px', height: '20px'}}></i>
</span>
</div>
<button className="w-full py-3 flex items-center justify-center rounded-xl bg-gradient-to-tr from-[#a78bfa] via-[#8b5cf6] to-[#6d28d9] font-semibold text-lg tracking-tight text-white shadow-lg hover:from-[#c4b5fd] hover:to-[#7c3aed] hover:ring-2 hover:ring-violet-400/60 transition-all duration-150 outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2" id="submit-btn" type="submit">
<span className="mr-2">Продолжить</span>
<i className="lucide lucide-arrow-right" style={{width: '22px', height: '22px'}}></i>
</button>
<div className="loader mt-3" id="loader" style={{display: 'none'}}></div>
</form>
</div>
<div className="w-full flex justify-center mt-8 fade-in-up" style={{animationDelay: '0.95s'}}>
<div className="text-xs text-violet-300/60 font-medium tracking-wide">
        Ваш ключ никому не передаётся
      </div>
</div>
</main>



    </>
  );
}
