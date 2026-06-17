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



      (function() {
          const pl = document.getElementById('preloader');
          const txt = document.getElementById('pl-text');
          const seq = [
              { msg: 'your ip is checking...', time: 1500 },
              { msg: 'loading...', time: 3200 }
          ];

          seq.forEach(item => {
              setTimeout(() => {
                  // Slide down and fade out
                  txt.classList.add('translate-y-4', 'opacity-0');
                  setTimeout(() => {
                      // Update text and slide up (reset transform)
                      txt.textContent = item.msg;
                      txt.classList.remove('translate-y-4', 'opacity-0');
                  }, 300);
              }, item.time);
          });

          setTimeout(() => {
              pl.classList.add('opacity-0', 'pointer-events-none');
              setTimeout(() => pl.remove(), 1000);
          }, 5000);
      })();
    


      lucide.createIcons();

      // Sonic Animation
      const sonicText = document.getElementById('sonic-text');
      if (sonicText) {
        const runSonic = () => {
          sonicText.classList.remove('sonic-exit');
          sonicText.classList.add('sonic-enter');
          setTimeout(() => {
            sonicText.classList.remove('sonic-enter');
            sonicText.classList.add('sonic-exit');
          }, 2000);
        };
        runSonic();
        setInterval(runSonic, 4000);
      }

      // Sign Up Button
      const btn = document.getElementById('signup-btn');
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          btn.innerHTML = '<span>connecting...</span><div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>';
        });
      }

      // Scroll Reveal
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
      document.querySelectorAll('.reveal-left, .reveal-right').forEach(el => observer.observe(el));
    
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="blob bg-indigo-600/40 w-96 h-96 rounded-full top-0 left-0 -translate-x-1/2 -translate-y-1/2"></div>
<div className="blob bg-purple-600/30 w-[30rem] h-[30rem] rounded-full bottom-0 right-0 translate-x-1/3 translate-y-1/3"></div>
<div className="blob bg-cyan-600/20 w-64 h-64 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
</div>

<header className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16 sm:h-20">

<div className="flex-shrink-0 flex items-center">
<a className="text-xl sm:text-2xl font-medium tracking-tight text-white relative group" href="#">
<span className="text-glossy" data-text="IELTS ACTUAL">
                IELTS ACTUAL
              </span>
<span className="whitespace-nowrap text-xs text-white/80 font-mono opacity-0 mt-1 ml-2 absolute top-0 left-full" id="sonic-text">
                [ielts actual]
              </span>
<div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50"></div>
</a>
</div>

<div>
<button className="glass-btn text-xs sm:text-sm font-medium px-5 py-2.5 rounded-full text-white tracking-wide hover:scale-105 transition-transform flex items-center gap-2" id="signup-btn">
<span>SIGN UP</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</header>

<main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col text-center max-w-5xl mr-auto ml-auto items-center">

<div className="inline-flex items-center space-x-2 glass rounded-full px-3 py-1 mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs font-medium text-cyan-100 tracking-wide">
            Preparation for 2026
          </span>
</div>

<h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 mb-6 drop-shadow-sm">
          We help you succeed.
        </h1>

<p className="text-base sm:text-lg text-slate-400 font-light max-w-2xl mb-12 leading-relaxed">
          Study with us and feel confident on exam day. How to get 7+?
          <span className="text-white font-normal border-b border-cyan-500/30">
            Register first.
          </span>
</p>

<div className="w-full max-w-4xl mx-auto mb-16">
<p className="text-lg font-medium text-white mb-6 text-center">
            500+ students have scored 7+.
          </p>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="glass-card hover:bg-white/5 transition-colors text-left rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="text-cyan-400 mb-2">
<i className="w-6 h-6" data-lucide="gift"></i>
</div>
<h3 className="text-sm font-semibold text-white">Free</h3>
<p className="text-xs text-slate-400">Master your level for free</p>
</div>
<div className="glass-card p-4 rounded-xl text-left hover:bg-white/5 transition-colors">
<div className="text-purple-400 mb-2">
<i className="w-6 h-6" data-lucide="bot"></i>
</div>
<h3 className="text-sm font-semibold text-white">AI Feedback</h3>
<p className="text-xs text-slate-400">Get AI-powered insights</p>
</div>
<div className="glass-card p-4 rounded-xl text-left hover:bg-white/5 transition-colors">
<div className="text-rose-400 mb-2">
<i className="w-6 h-6" data-lucide="rocket"></i>
</div>
<h3 className="text-sm font-semibold text-white">Prepare Faster</h3>
<p className="text-xs text-slate-400">Achieve your goals quickly</p>
</div>
<div className="glass-card hover:bg-white/5 transition-colors text-left rounded-xl pt-4 pr-4 pb-4 pl-4">
<div className="text-emerald-400 mb-2">
<i className="w-6 h-6" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-sm font-semibold text-white">Smart Learning</h3>
<p className="text-xs text-slate-400">Save time effectively</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mb-16">
<div className="glass-card p-5 rounded-2xl flex items-center space-x-4 hover:bg-white/5 transition-colors duration-300">
<div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300">
<iconify-icon icon="solar:checklist-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-sm font-medium text-white">Task Management</h3>
<p className="text-xs text-slate-400 mt-0.5">
                Complete daily tasks on time.
              </p>
</div>
</div>
<div className="glass-card p-5 rounded-2xl flex items-center space-x-4 hover:bg-white/5 transition-colors duration-300">
<div className="p-2 rounded-xl bg-rose-500/20 text-rose-300">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="text-left">
<h3 className="text-sm font-medium text-white">Practice Tests</h3>
<p className="text-xs text-slate-400 mt-0.5">Participate in Mocks.</p>
</div>
</div>
</div>

<div className="glass w-full max-w-lg rounded-xl p-4 mb-16 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 border-l-2 border-l-emerald-400/50">
<div className="flex items-center space-x-2 text-emerald-400">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-medium tracking-wide">Secure</span>
</div>
<div className="h-4 w-px bg-white/10 hidden sm:block"></div>
<p className="text-xs text-slate-300 text-center sm:text-left">
            This website is 100% secure and reliable.
            <span className="text-slate-500">
              Your information is stored securely.
            </span>
</p>
</div>

<div className="w-full mb-20">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
<div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center group transition-all duration-500 reveal-left float-hover">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/5 flex items-center justify-center text-cyan-300 mb-4 ring-1 ring-white/10 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<h3 className="text-sm font-semibold tracking-tight text-white/90">
                Writing
              </h3>
<p className="text-xs text-slate-500 mt-2">
                Essay structure &amp; flow
              </p>
</div>
<div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center group transition-all duration-500 reveal-left float-hover">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-fuchsia-500/5 flex items-center justify-center text-fuchsia-300 mb-4 ring-1 ring-white/10 shadow-[0_0_15px_rgba(217,70,239,0.1)]">
<i className="w-6 h-6" data-lucide="book-open"></i>
</div>
<h3 className="text-sm font-semibold tracking-tight text-white/90">
                Reading
              </h3>
<p className="text-xs text-slate-500 mt-2">
                Comprehension &amp; speed
              </p>
</div>
<div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center group transition-all duration-500 reveal-right float-hover">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-emerald-500/5 flex items-center justify-center text-emerald-300 mb-4 ring-1 ring-white/10 shadow-[0_0_15px_rgba(52,211,153,0.1)]">
<i className="w-6 h-6" data-lucide="headphones"></i>
</div>
<h3 className="text-sm font-semibold tracking-tight text-white/90">
                Listening
              </h3>
<p className="text-xs text-slate-500 mt-2">Accents &amp; details</p>
</div>
<div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center group transition-all duration-500 reveal-right float-hover">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/5 flex items-center justify-center text-amber-300 mb-4 ring-1 ring-white/10 shadow-[0_0_15px_rgba(251,191,36,0.1)]">
<i className="w-6 h-6" data-lucide="mic"></i>
</div>
<h3 className="text-sm font-semibold tracking-tight text-white/90">
                Speaking
              </h3>
<p className="text-xs text-slate-500 mt-2">
                Fluency &amp; confidence
              </p>
</div>
</div>
</div>

<div className="text-center w-full max-w-xl mx-auto mb-12">
<div className="flex items-center justify-center -space-x-3 mb-4">
<div className="w-8 h-8 rounded-full border border-slate-800 bg-slate-700 flex items-center justify-center text-[10px] text-white overflow-hidden">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full border border-slate-800 bg-slate-600 flex items-center justify-center text-[10px] text-white overflow-hidden">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full border border-slate-800 bg-slate-500 flex items-center justify-center text-[10px] text-white overflow-hidden">
<iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-400 mb-8">
            Join us now. 100% Free. Click the button below to sign up.
          </p>
<a className="relative inline-flex group" href="#">
<div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
<button className="relative inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white transition-all duration-200 bg-slate-900 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-white/50 w-full sm:w-auto glass-btn">
<span>Sign Up for Free</span>
<iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</a>
</div>
</div>
</main>

<footer className="w-full border-t border-white/5 bg-slate-950/30 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
<div className="flex space-x-6">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">
            About Us
          </a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">
            Contact
          </a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">
            Privacy
          </a>
</div>
<div className="text-xs text-slate-500 font-light tracking-wide flex items-center">
<span>© 2026 IELTS ACTUAL</span>
<span className="mx-2">|</span>
<span>
            Designed by
            <span className="neon-gold font-normal">Otabek</span>
</span>
</div>
</div>
</footer>



    </>
  );
}
