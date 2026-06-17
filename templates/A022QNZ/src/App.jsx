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
      
    // Particles.js config for ethereal cosmos
    particlesJS("particles-js", {
      particles: {
        number: { value: 90, density: { enable: true, value_area: 1400 } },
        color: { value: ["#a78bfa", "#6366f1", "#c7d2fe", "#fff"] },
        shape: { type: "circle" },
        opacity: { value: 0.21, random: true },
        size: { value: 2.7, random: true },
        line_linked: { enable: true, distance: 100, color: "#a78bfa", opacity: 0.12, width: 1 },
        move: { enable: true, speed: 0.5, direction: "none", random: false, straight: false, out_mode: "out" }
      },
      interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
      },
      retina_detect: true
    });

    // Flow logic for demo: Welcome > Onboarding > Inbox > Feedback
    const cta = document.getElementById('cta-make-contact');
    const welcome = document.getElementById('welcome');
    const onboarding = document.getElementById('onboarding-chat');
    const inbox = document.getElementById('inbox');
    const feedback = document.getElementById('feedback');

    cta.addEventListener('click', () => {
      welcome.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        welcome.style.display = 'none';
        onboarding.classList.remove('hidden');
        onboarding.classList.add('fadein');
        setTimeout(() => {
          onboarding.classList.remove('fadein');
        }, 1200);
      }, 650);
    });

    // Simulate onboarding chat submit > inbox open
    document.getElementById('chat-input-form').addEventListener('submit', e => {
      e.preventDefault();
      onboarding.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        onboarding.style.display = 'none';
        inbox.classList.remove('hidden');
        inbox.classList.add('fadein');
        setTimeout(() => {
          inbox.classList.remove('fadein');
        }, 1200);
      }, 500);
    });

    // Demo: clicking Symme chat moves to feedback loop
    document.querySelector('.inbox-active').addEventListener('click', () => {
      inbox.classList.add('opacity-0', 'pointer-events-none');
      setTimeout(() => {
        inbox.style.display = 'none';
        feedback.classList.remove('hidden');
        feedback.classList.add('fadein');
        setTimeout(() => {
          feedback.classList.remove('fadein');
        }, 1200);
      }, 420);
    });

    // Lucide icons (for future: enable if used dynamically)
    // lucide.createIcons();
  
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
      

<div className="fixed inset-0 z-0" id="particles-js"></div>

<div className="w-full max-w-lg mx-auto relative z-10">

<main className="w-full flex flex-col items-center justify-center min-h-screen" id="welcome">
<div className="fadein fadein-1 w-full flex justify-center mb-10">
<span className="arrival-logo font-cosmic tracking-tight text-center">contact</span>
</div>
<h2 className="fadein fadein-2 font-cosmic text-2xl md:text-3xl font-semibold tracking-tight text-slate-100 text-center mb-6">
        one conversation could change your life.<br/>make contact.
      </h2>
<button aria-label="make contact" className="slidein-up slidein-up-1 btn-glass font-cosmic px-8 py-4 text-lg font-semibold tracking-tight shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all" id="cta-make-contact">
        make contact
      </button>
<div className="fadein fadein-3 text-center mt-20">
<span className="font-cosmic text-xs font-medium text-[#a78bfa]/70 tracking-wider">
          encrypted. anonymous. no profiles. no ghosting.
        </span>
</div>
</main>

<section className="hidden flex flex-col min-h-screen pt-8" id="onboarding-chat">

<div className="flex items-center justify-center mb-8">
<div className="breathing w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-800 shadow-lg">
<svg className="mx-auto" fill="none" height="28" viewbox="0 0 24 24" width="28">
<circle cx="12" cy="12" opacity="0.55" r="9.5" stroke="#e0e7ff" strokeWidth="1.5"></circle>
<path d="M12 6v6l4 2" stroke="#a78bfa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></path>
</svg>
</div>
</div>
<div className="glass-card px-6 py-4 mb-4 flex flex-col gap-2 items-center">
<span className="font-cosmic text-base font-semibold text-slate-100 tracking-tight">symme</span>
<span className="font-cosmic text-xs font-medium text-[#a78bfa]/80">ai conversationalist</span>
</div>

<div className="chat-scroll flex-1 overflow-y-auto px-1 py-2 mb-3" id="chat-messages">
<div className="fadein fadein-1 mb-6 flex">
<div className="flex items-end">
<div className="mr-2 flex items-center">
<div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#6366f1] shadow-md animate-pulse"></div>
</div>
<div className="glass-card px-5 py-3 rounded-2xl max-w-xs font-cosmic text-base font-medium text-slate-100 shadow">
              how do you feel when you make art?
            </div>
</div>
</div>
<div className="fadein fadein-2 mb-6 flex justify-end">
<div className="glass-card bg-[#27204b] px-5 py-3 rounded-2xl max-w-xs font-cosmic text-base font-medium text-indigo-200 shadow">
            well, I was born in new york. i am 33 years old.
          </div>
</div>
<div className="fadein fadein-3 mb-6 flex">
<div className="flex items-end">
<div className="mr-2 flex items-center">
<div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#6366f1] shadow-md animate-pulse"></div>
</div>
<div className="glass-card px-5 py-3 rounded-2xl max-w-xs font-cosmic text-base font-medium text-slate-100 shadow">
              would you be open to finding someone to share your work with?
            </div>
</div>
</div>
</div>

<form className="w-full flex items-center gap-2 mt-auto py-3 px-2" id="chat-input-form">
<input autocomplete="off" className="flex-1 rounded-full px-6 py-3 font-cosmic text-base text-slate-100 bg-[#23203c]/60 placeholder-[#a78bfa]/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" id="chat-input" placeholder="type your response…"/>
<button className="btn-glass rounded-full w-11 h-11 flex items-center justify-center hover:scale-105 focus:outline-none" type="submit">
<svg fill="none" height="22" viewbox="0 0 24 24" width="22"><path d="M22 2 11 13" stroke="#a78bfa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></path><path d="m22 2-7.5 20-4.5-9-9-4.5Z" stroke="#e0e7ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></path></svg>
</button>
</form>
</section>

<section className="hidden flex flex-col min-h-screen pt-10" id="inbox">
<h2 className="font-cosmic text-lg font-semibold tracking-tight text-indigo-100 mb-7 text-center fadein fadein-1">
        inbox
      </h2>

<div className="inbox-row inbox-active glass-card px-4 py-4 mb-4 flex items-center gap-3 relative cursor-pointer outline-glow fadein fadein-2">
<div className="breathing w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-800 shadow-md">
<svg className="mx-auto" fill="none" height="20" viewbox="0 0 24 24" width="20">
<circle cx="12" cy="12" opacity="0.55" r="9.5" stroke="#e0e7ff" strokeWidth="1.3"></circle>
<path d="M12 6v6l4 2" stroke="#a78bfa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>
<div className="flex-1 flex flex-col">
<span className="font-cosmic text-base font-semibold text-slate-100">symme</span>
<span className="font-cosmic text-sm text-slate-400 truncate">what did you think of allison?</span>
</div>
<span className="relative"><svg fill="none" height="18" stroke="#a78bfa" viewbox="0 0 24 24" width="18"><path d="m21 15-5-5-5 5" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
<span className="ml-2"><svg fill="none" height="16" stroke="#fff" viewbox="0 0 24 24" width="16"><circle cx="12" cy="12" fill="#a78bfa" opacity="0.74" r="6"></circle></svg></span>
</div>

<div className="flex flex-col gap-2">

<div className="inbox-row glass-card px-4 py-3 flex items-center gap-3 cursor-pointer relative fadein fadein-3">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#23203c] to-[#a78bfa]/60 flex items-center justify-center">
<span className="font-cosmic text-sm font-semibold text-indigo-100">star</span>
</div>
<div className="flex-1 flex flex-col justify-center">
<span className="font-cosmic text-base text-indigo-100 font-semibold">star</span>
<span className="font-cosmic text-xs text-slate-400 truncate">"i always wanted to try painting."</span>
</div>
<span className="timer-gradient mr-2" title="active">⏳ 23:18:42</span>
<span><svg fill="none" height="19" stroke="#a78bfa" viewbox="0 0 24 24" width="19"><circle cx="12" cy="12" r="8" strokeWidth="1.5"></circle></svg></span>
</div>

<div className="inbox-row glass-card px-4 py-3 flex items-center gap-3 locked fadein fadein-4">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#23203c] to-[#a78bfa]/40 flex items-center justify-center">
<span className="font-cosmic text-sm font-semibold text-indigo-100">sufi lover</span>
</div>
<div className="flex-1 flex flex-col justify-center">
<span className="font-cosmic text-base text-indigo-100 font-semibold">sufi lover</span>
<span className="font-cosmic text-xs text-slate-400 truncate">[locked] new match—awaiting consent.</span>
</div>
<span className="ml-2" title="locked"><svg fill="none" height="18" stroke="#a78bfa" viewbox="0 0 24 24" width="18"><rect height="8" rx="2" strokeWidth="1.5" width="12" x="6" y="10"></rect><path d="M9 10V7a3 3 0 1 1 6 0v3" strokeWidth="1.5"></path></svg></span>
</div>

<div className="inbox-row glass-card px-4 py-3 flex items-center gap-3 inbox-expired fadein fadein-5">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#23203c] to-[#a78bfa]/10 flex items-center justify-center">
<span className="font-cosmic text-sm font-semibold text-indigo-100">lone wolf</span>
</div>
<div className="flex-1 flex flex-col justify-center">
<span className="font-cosmic text-base text-indigo-100 font-semibold">lone wolf</span>
<span className="font-cosmic text-xs text-slate-400 truncate">chat expired. want to continue?</span>
</div>
<button className="btn-glass px-4 py-2 text-xs font-semibold font-cosmic ml-2">reopen</button>
<span className="ml-2" title="expired"><svg fill="none" height="18" stroke="#333" viewbox="0 0 24 24" width="18"><circle cx="12" cy="12" r="8" strokeWidth="1.5"></circle><path d="M16 16 8 8m8 0-8 8" strokeWidth="1.5"></path></svg></span>
</div>
</div>

<div className="mt-7 mb-2">
<input className="w-full font-cosmic rounded-full px-5 py-3 text-base bg-[#23203c]/80 text-indigo-100 placeholder-[#a78bfa]/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="search chats…"/>
</div>

<div className="font-cosmic text-xs text-[#a78bfa]/70 text-center mt-4 mb-2 flex flex-wrap justify-center gap-3">
<span>🔒 locked</span>
<span>⏳ active</span>
<span>🌑 expired</span>
<span>🔔 unread</span>
<span>♾️ unlocked</span>
<span>💬 reopen</span>
</div>
</section>

<section className="hidden flex flex-col min-h-screen pt-8" id="feedback">
<div className="flex items-center justify-center mb-8">
<div className="breathing w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-800 shadow-lg">
<svg className="mx-auto" fill="none" height="28" viewbox="0 0 24 24" width="28">
<circle cx="12" cy="12" opacity="0.55" r="9.5" stroke="#e0e7ff" strokeWidth="1.5"></circle>
<path d="M12 6v6l4 2" stroke="#a78bfa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7"></path>
</svg>
</div>
</div>
<div className="glass-card px-6 py-4 mb-4 flex flex-col gap-2 items-center">
<span className="font-cosmic text-base font-semibold text-slate-100 tracking-tight">symme</span>
<span className="font-cosmic text-xs font-medium text-[#a78bfa]/80">ai conversationalist</span>
</div>

<div className="chat-scroll flex-1 overflow-y-auto px-1 py-2 mb-3">
<div className="mb-6 flex">
<div className="flex items-end">
<div className="mr-2 flex items-center">
<div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#6366f1] shadow-md animate-pulse"></div>
</div>
<div className="glass-card px-5 py-3 rounded-2xl max-w-xs font-cosmic text-base font-medium text-slate-100 shadow">
              what did you think of allison?
            </div>
</div>
</div>
<div className="mb-6 flex justify-end">
<div className="glass-card bg-[#27204b] px-5 py-3 rounded-2xl max-w-xs font-cosmic text-base font-medium text-indigo-200 shadow">
            she totally inspired me. i have so much respect for anyone dedicating their life to healing others.
          </div>
</div>
<div className="mb-6 flex">
<div className="flex items-end">
<div className="mr-2 flex items-center">
<div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#a78bfa] to-[#6366f1] shadow-md animate-pulse"></div>
</div>
<div className="glass-card px-5 py-3 rounded-2xl max-w-xs font-cosmic text-base font-medium text-slate-100 shadow">
              did you learn anything from her?
            </div>
</div>
</div>
</div>
<form className="w-full flex items-center gap-2 mt-auto py-3 px-2">
<input autocomplete="off" className="flex-1 rounded-full px-6 py-3 font-cosmic text-base text-slate-100 bg-[#23203c]/60 placeholder-[#a78bfa]/50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" placeholder="type your reflection…"/>
<button className="btn-glass rounded-full w-11 h-11 flex items-center justify-center hover:scale-105 focus:outline-none" type="submit">
<svg fill="none" height="22" viewbox="0 0 24 24" width="22"><path d="M22 2 11 13" stroke="#a78bfa" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></path><path d="m22 2-7.5 20-4.5-9-9-4.5Z" stroke="#e0e7ff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6"></path></svg>
</button>
</form>
</section>
</div>


    </>
  );
}
