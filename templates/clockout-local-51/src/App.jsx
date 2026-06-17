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
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
nunito: ['Nunito', 'sans-serif'],
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 1s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' }
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' }
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener("DOMContentLoaded", function () {
      const carousel = document.getElementById("awHeroCarousel");
      if (!carousel) return;

      const slides = carousel.querySelectorAll("[data-aw-hero-slide]");
      const dots = carousel.querySelectorAll("[data-aw-hero-dot]");

      if (!slides.length || !dots.length) return;

      let currentSlide = 0;
      let timer = null;

      function showSlide(index) {
        currentSlide = index;

        slides.forEach(function (slide, i) {
          slide.classList.toggle("aw-active", i === index);
        });

        dots.forEach(function (dot, i) {
          dot.classList.toggle("aw-active", i === index);
        });
      }

      function startTimer() {
        if (timer) clearInterval(timer);

        timer = setInterval(function () {
          const nextSlide = (currentSlide + 1) % slides.length;
          showSlide(nextSlide);
        }, 5000);
      }

      dots.forEach(function (dot) {
        dot.addEventListener("click", function () {
          const index = Number(dot.getAttribute("data-aw-hero-dot"));
          showSlide(index);
          startTimer();
        });
      });

      showSlide(0);
      startTimer();
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
      
<div className="flex flex-col min-h-screen z-10 relative">

<nav className="md:px-12 flex animate-fade-in w-full max-w-7xl mx-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full flex items-center justify-center bg-black">
<div className="w-2 h-2 rounded-full bg-white"></div>
</div>
<span className="text-xl font-medium tracking-tight font-nunito text-slate-900">AfterWordsAI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-slate-700">
<a className="transition-colors hover:text-black" href="#features">Features</a>
<a className="transition-colors hover:text-black" href="#reports">Reports</a>
<a className="transition-colors hover:text-black" href="#emails">Emails</a>
<a className="transition-colors hover:text-black" href="#integrations">Integrations</a>
</div>
<button className="bg-[#1A1A1A] text-base font-normal px-6 py-2.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-white hover:bg-black">
        Try AfterWordsAI
      </button>
</nav>

<section className="flex-grow flex flex-col lg:flex-row md:px-12 gap-12 w-full max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-12 pl-6 items-center">

<div className="animate-slide-up text-center lg:text-left w-full lg:w-1/2 lg:pr-6" style={{animationDelay: '0.1s'}}>
<p className="text-[11px] font-bold tracking-[0.26em] uppercase text-[#2563eb] mb-5">
</p>
<h1 className="md:text-6xl lg:text-6xl leading-[1.05] text-5xl font-medium text-[#1A1A1A] tracking-tight font-nunito text-left mb-6">
          No After Meeting Work - AfterWords
        </h1>
<p className="md:text-xl leading-relaxed text-lg font-normal font-sans max-w-xl mx-auto lg:mx-0 mb-8 text-[#2563eb]">
          AfterWordsAI turns meetings into executive reports, emails, and action items automatically.
        </p>
<div className="mt-6 flex justify-center lg:justify-start">
<div className="flex flex-col xl:flex-row xl:gap-4 lg:-ml-2 pt-2 pb-2 pl-14 gap-x-1 gap-y-1 items-center">
<span className="text-base font-normal text-slate-700">No prompts</span>
<span className="hidden xl:block w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-base font-normal text-slate-700">No formatting</span>
<span className="hidden xl:block w-1 h-1 rounded-full bg-slate-300"></span>
<span className="text-base font-normal text-slate-700">Just click and send</span>
</div>
</div>
</div>

<div className="animate-slide-up w-full lg:w-1/2 flex flex-col gap-4 relative" style={{animationDelay: '0.2s'}}>
<div className="bg-[#1A1A1A] rounded-[24px] shadow-xl relative overflow-hidden w-full h-[260px] md:h-[280px] shrink-0 border border-slate-800/60" id="awHeroCarousel">

<div className="aw-hero-carousel-slide aw-active absolute inset-0" data-aw-hero-slide="0">
<div className="absolute top-4 left-4 md:top-6 md:left-6 z-30 text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase font-sans bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              Any person, any meeting
            </div>
<img alt="Executive in office" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/20"></div>
<div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-8 w-full md:w-[85%] pt-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20 shadow-lg mt-1">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight font-nunito text-white mb-2 leading-tight">
                    Executives
                  </h3>
<p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed">
                    Get clear executive briefs without digging through notes.
                  </p>
</div>
</div>
</div>
</div>

<div className="aw-hero-carousel-slide absolute inset-0" data-aw-hero-slide="1">
<div className="absolute top-4 left-4 md:top-6 md:left-6 z-30 text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase font-sans bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              Any person, any meeting
            </div>
<img alt="Managers collaborating" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/20"></div>
<div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-8 w-full md:w-[85%] pt-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20 shadow-lg mt-1">
<iconify-icon icon="lucide:users" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight font-nunito text-white mb-2 leading-tight">
                    Managers
                  </h3>
<p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed">
                    Capture decisions, blockers, owners, and next steps instantly.
                  </p>
</div>
</div>
</div>
</div>

<div className="aw-hero-carousel-slide absolute inset-0" data-aw-hero-slide="2">
<div className="absolute top-4 left-4 md:top-6 md:left-6 z-30 text-white text-[10px] md:text-xs font-semibold tracking-widest uppercase font-sans bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              Any person, any meeting
            </div>
<img alt="Associates working" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/20"></div>
<div className="relative z-10 h-full flex flex-col justify-center p-6 md:p-8 w-full md:w-[85%] pt-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 shrink-0 rounded-xl bg-white/10 flex items-center justify-center text-white backdrop-blur-md border border-white/20 shadow-lg mt-1">
<iconify-icon icon="lucide:circle-user" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-2xl md:text-3xl font-medium tracking-tight font-nunito text-white mb-2 leading-tight">
                    Associates
                  </h3>
<p className="text-slate-300 font-normal text-sm md:text-base leading-relaxed">
                    Turn follow-ups into ready-to-send work after every meeting.
                  </p>
</div>
</div>
</div>
</div>

<div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-40">
<button aria-label="Show Executives slide" className="aw-hero-carousel-dot aw-active" data-aw-hero-dot="0" type="button"></button>
<button aria-label="Show Managers slide" className="aw-hero-carousel-dot" data-aw-hero-dot="1" type="button"></button>
<button aria-label="Show Associates slide" className="aw-hero-carousel-dot" data-aw-hero-dot="2" type="button"></button>
</div>
</div>
</div>
</section>

<section className="relative w-full flex justify-center px-6 md:px-12 py-12 overflow-hidden bg-[#050816]" id="features">
<div className="w-full max-w-7xl mx-auto">
<div className="aw-automation-section">
<div className="aw-section-header">
<p className="aw-section-kicker">Problem Solving</p>
<h2 className="aw-section-title">
              Stop turning meetings into more manual work - AfterWordsAI
            </h2>
</div>
<div className="aw-left-boxes">
<div className="stack-card">
<div className="stack-card-header">
<h3 className="">Creates the output</h3>
<p className="">AfterWordsAI automates output generation to effectively eliminate after meeting work.  </p>
</div>
<div className="stack-inner">
<h4>Auto Generation</h4>
<div className="stack-row">
<span>Reports</span>
<div className="toggle-pill"></div>
</div>
<div className="stack-row">
<span>Email Drafts</span>
<div className="toggle-pill"></div>
</div>
<div className="stack-row">
<span className="">Jira Tasks</span>
<div className="toggle-pill"></div>
</div>
</div>
</div>
<div className="stack-card">
<div className="stack-card-header">
<h3 className="">Solves the follow-up gap</h3>
<p className="">
                  AfterWordsAI captures decisions, owners, risks, and next steps before they get lost.
                </p>
</div>
<div className="stack-inner">
<h4 className="">Intelligence</h4>
<div className="stack-row">
<span>Risks</span>
<div className="toggle-pill"></div>
</div>
<div className="stack-row">
<span>Decisions</span>
<div className="toggle-pill"></div>
</div>
<div className="stack-row">
<span>Next Steps</span>
<div className="toggle-pill"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full flex justify-center px-6 md:px-12 py-14 overflow-hidden bg-white">
<div className="w-full max-w-7xl mx-auto">
<style>
      .aw-intelligence-section {
        max-width: 1160px;
        margin: 0 auto;
      }

      .aw-word-header {
        text-align: center;
        margin-bottom: 36px;
      }

      .aw-word-kicker {
        font-size: 11px;
        font-weight: 800;
        color: #2563eb;
        text-transform: uppercase;
        letter-spacing: 0.22em;
        margin: 0;
        text-align: center;
      }

      .aw-word-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 38px 74px;
        align-items: start;
        justify-content: center;
      }

      .aw-copy-line {
        border-left: 3px solid #2563eb;
        padding-left: 24px;
      }

      .aw-copy-line h3 {
        font-size: 31px;
        line-height: 1.08;
        font-weight: 760;
        letter-spacing: -0.045em;
        color: #0f172a;
        margin: 0 0 10px 0;
      }

      .aw-copy-line p {
        font-size: 17px;
        line-height: 1.46;
        color: #334155;
        margin: 0;
      }

      .aw-copy-line strong {
        color: #0f172a;
        font-weight: 750;
      }

      @media (max-width: 1024px) {
        .aw-word-grid {
          grid-template-columns: 1fr;
          gap: 28px;
        }

        .aw-copy-line h3 {
          font-size: 26px;
        }

        .aw-copy-line p {
          font-size: 16px;
        }
      }
    </style>
<div className="aw-intelligence-section">
<div className="aw-word-header">
<p className="aw-word-kicker">Meeting Intelligence</p>
</div>
<div className="aw-word-grid">
<div className="aw-copy-line">
<h3>Capture without a bot</h3>
<p>
            AfterWordsAI automates transcript, audio, video, or document upload when your meeting ends without entering your meeting.
          </p>
</div>
<div className="aw-copy-line">
<h3>No prompts needed</h3>
<p>
            AfterWordsAI automatically finds <strong>decisions, owners, deadlines, risks, action items, and follow-up drafts.</strong>
</p>
</div>
<div className="aw-copy-line">
<h3>Teach your AI</h3>
<p>
            Add acronyms, client names, project terms, and internal language so the AI understands your business.
          </p>
</div>
<div className="aw-copy-line">
<h3>Built for execution</h3>
<p>
            Generation activates as soon as the meeting concludes with results taking just a minute. 
          </p>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 z-10 w-full max-w-7xl mx-auto pt-16 pr-4 pb-16 pl-4 relative" id="reports">
<div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-28">

<div className="w-full lg:w-[40%]">
<span className="text-xs font-medium tracking-widest uppercase mb-4 block font-sans aw-blue">
        Professional Reports
      </span>
<h2 className="lg:text-5xl text-4xl font-medium text-[#1A1A1A] tracking-tight font-nunito mb-6 leading-tight">
        Auto-generated reports
      </h2>
<p className="text-lg font-normal mb-8 leading-relaxed font-sans text-slate-600">
        AfterWordsAI turns meetings into clear, ready-to-use reports for all situations. 
      </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
<div>
<h4 className="text-base font-medium uppercase tracking-wider mb-3 text-slate-900">
            It identifies:
          </h4>
<ul className="space-y-2 text-base font-normal text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Key themes
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Decisions
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Owners and risks
            </li>
</ul>
</div>
<div>
<h4 className="text-base font-medium uppercase tracking-wider mb-3 text-slate-900">
            It generates:
          </h4>
<ul className="space-y-2 text-base font-normal text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Executive reports
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Meeting minutes
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Action reports
            </li>
</ul>
</div>
</div>
</div>

<div className="w-full lg:w-[60%]">
<div className="aw-report-stage">
<div className="aw-report-fan">
<div className="aw-report-shell">
<div className="aw-report-card">
<div className="aw-report-head">
<div className="aw-report-title-wrap">
<div className="aw-report-icon">
<iconify-icon icon="lucide:file-text" style={{strokeWidth: '1.6px'}} width="19"></iconify-icon>
</div>
<div>
<h3>Executive Report</h3>
<p>Leadership summary</p>
</div>
</div>
<div className="aw-status-pill">Ready</div>
</div>
<div className="aw-report-lines">
<div className="aw-line dark" style={{width: '42%'}}></div>
<div className="aw-line" style={{width: '100%'}}></div>
<div className="aw-line" style={{width: '86%'}}></div>
<div className="aw-line" style={{width: '70%'}}></div>
</div>
<div className="aw-report-bullets">
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '82%'}}></div>
</div>
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '62%'}}></div>
</div>
</div>
</div>
</div>
<div className="aw-report-shell">
<div className="aw-report-card">
<div className="aw-report-head">
<div className="aw-report-title-wrap">
<div className="aw-report-icon">
<iconify-icon icon="lucide:list-checks" style={{strokeWidth: '1.6px'}} width="19"></iconify-icon>
</div>
<div>
<h3>Meeting Minutes</h3>
<p>Decisions captured</p>
</div>
</div>
<div className="aw-status-pill">Auto</div>
</div>
<div className="aw-report-lines">
<div className="aw-line dark" style={{width: '48%'}}></div>
<div className="aw-line" style={{width: '100%'}}></div>
<div className="aw-line" style={{width: '90%'}}></div>
<div className="aw-line" style={{width: '74%'}}></div>
</div>
<div className="aw-report-bullets">
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '78%'}}></div>
</div>
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '55%'}}></div>
</div>
</div>
</div>
</div>
<div className="aw-report-shell">
<div className="aw-report-card">
<div className="aw-report-head">
<div className="aw-report-title-wrap">
<div className="aw-report-icon">
<iconify-icon icon="lucide:clipboard-check" style={{strokeWidth: '1.6px'}} width="19"></iconify-icon>
</div>
<div>
<h3>Action Report</h3>
<p>Owners and next steps</p>
</div>
</div>
<div className="aw-status-pill">Assigned</div>
</div>
<div className="aw-report-lines">
<div className="aw-line dark" style={{width: '38%'}}></div>
<div className="aw-line" style={{width: '86%'}}></div>
<div className="aw-line" style={{width: '100%'}}></div>
<div className="aw-line" style={{width: '64%'}}></div>
</div>
<div className="aw-report-bullets">
<div className="aw-bullet-row">
<div className="aw-dot green"></div>
<div className="aw-line" style={{width: '82%'}}></div>
</div>
<div className="aw-bullet-row">
<div className="aw-dot green"></div>
<div className="aw-line" style={{width: '66%'}}></div>
</div>
</div>
</div>
</div>
<div className="aw-report-shell">
<div className="aw-report-card">
<div className="aw-report-head">
<div className="aw-report-title-wrap">
<div className="aw-report-icon">
<iconify-icon icon="lucide:alert-triangle" style={{strokeWidth: '1.6px'}} width="19"></iconify-icon>
</div>
<div>
<h3>Incident Report</h3>
<p>Risks and root causes</p>
</div>
</div>
<div className="aw-status-pill">Drafted</div>
</div>
<div className="aw-report-lines">
<div className="aw-line dark" style={{width: '44%'}}></div>
<div className="aw-line" style={{width: '100%'}}></div>
<div className="aw-line" style={{width: '82%'}}></div>
<div className="aw-line" style={{width: '70%'}}></div>
</div>
<div className="aw-report-bullets">
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '78%'}}></div>
</div>
<div className="aw-bullet-row">
<div className="aw-dot"></div>
<div className="aw-line" style={{width: '56%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 w-full max-w-7xl z-10 mx-auto pt-16 pr-4 pb-16 pl-4 relative" id="emails">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

<div className="w-full lg:w-[55%]">
<div className="aw-email-stack">
<div className="aw-email-shell">
<div className="aw-email-card">
<div>
<div className="aw-email-head">
<div className="aw-email-icon">
<iconify-icon icon="lucide:mail-check" style={{strokeWidth: '1.6px'}} width="20"></iconify-icon>
</div>
<div>
<h3>Follow-Up Email</h3>
<p>Summary and next steps</p>
<div className="aw-email-status">Ready</div>
</div>
</div>
</div>
<div className="aw-email-content">
<div className="aw-email-lines">
<div className="aw-email-line dark" style={{width: '42%'}}></div>
<div className="aw-email-line" style={{width: '100%'}}></div>
<div className="aw-email-line" style={{width: '86%'}}></div>
<div className="aw-email-line" style={{width: '70%'}}></div>
</div>
<div className="aw-email-bullets">
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '82%'}}></div>
</div>
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '62%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="aw-email-shell">
<div className="aw-email-card">
<div>
<div className="aw-email-head">
<div className="aw-email-icon">
<iconify-icon icon="lucide:list-todo" style={{strokeWidth: '1.6px'}} width="20"></iconify-icon>
</div>
<div>
<h3>Action Item Email</h3>
<p>Owners and deadlines</p>
<div className="aw-email-status">Assigned</div>
</div>
</div>
</div>
<div className="aw-email-content">
<div className="aw-email-lines">
<div className="aw-email-line dark" style={{width: '48%'}}></div>
<div className="aw-email-line" style={{width: '100%'}}></div>
<div className="aw-email-line" style={{width: '90%'}}></div>
<div className="aw-email-line" style={{width: '74%'}}></div>
</div>
<div className="aw-email-bullets">
<div className="aw-email-bullet-row">
<div className="aw-email-dot green"></div>
<div className="aw-email-line" style={{width: '78%'}}></div>
</div>
<div className="aw-email-bullet-row">
<div className="aw-email-dot green"></div>
<div className="aw-email-line" style={{width: '55%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="aw-email-shell">
<div className="aw-email-card">
<div>
<div className="aw-email-head">
<div className="aw-email-icon">
<iconify-icon icon="lucide:briefcase-business" style={{strokeWidth: '1.6px'}} width="20"></iconify-icon>
</div>
<div>
<h3>Client Recap Email</h3>
<p>Decisions and alignment</p>
<div className="aw-email-status">Drafted</div>
</div>
</div>
</div>
<div className="aw-email-content">
<div className="aw-email-lines">
<div className="aw-email-line dark" style={{width: '38%'}}></div>
<div className="aw-email-line" style={{width: '86%'}}></div>
<div className="aw-email-line" style={{width: '100%'}}></div>
<div className="aw-email-line" style={{width: '64%'}}></div>
</div>
<div className="aw-email-bullets">
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '82%'}}></div>
</div>
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '66%'}}></div>
</div>
</div>
</div>
</div>
</div>
<div className="aw-email-shell">
<div className="aw-email-card">
<div>
<div className="aw-email-head">
<div className="aw-email-icon">
<iconify-icon icon="lucide:circle-alert" style={{strokeWidth: '1.6px'}} width="20"></iconify-icon>
</div>
<div>
<h3>Escalation Email</h3>
<p>Risks and decisions</p>
<div className="aw-email-status">Priority</div>
</div>
</div>
</div>
<div className="aw-email-content">
<div className="aw-email-lines">
<div className="aw-email-line dark" style={{width: '44%'}}></div>
<div className="aw-email-line" style={{width: '100%'}}></div>
<div className="aw-email-line" style={{width: '82%'}}></div>
<div className="aw-email-line" style={{width: '70%'}}></div>
</div>
<div className="aw-email-bullets">
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '78%'}}></div>
</div>
<div className="aw-email-bullet-row">
<div className="aw-email-dot"></div>
<div className="aw-email-line" style={{width: '56%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-[45%]">
<span className="text-xs font-medium tracking-widest uppercase mb-4 block font-sans aw-blue">
        Email Generation
      </span>
<h2 className="lg:text-5xl text-4xl font-medium text-[#1A1A1A] tracking-tight font-nunito mb-6 leading-tight">
        Auto-generated emails
      </h2>
<p className="leading-relaxed text-xl font-normal text-slate-600 font-sans mb-8">
        AfterWordsAI turns meeting decisions, owners, risks, and next steps into ready-to-send email drafts.
      </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-10">
<div>
<h4 className="text-base font-medium uppercase tracking-wider mb-3 text-slate-900">
            It identifies:
          </h4>
<ul className="space-y-2 text-base font-normal text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Decisions
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Owners
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="aw-blue mt-0.5" icon="lucide:check-circle" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Risks and next steps
            </li>
</ul>
</div>
<div>
<h4 className="text-base font-medium uppercase tracking-wider mb-3 text-slate-900">
            It generates:
          </h4>
<ul className="space-y-2 text-base font-normal text-slate-600">
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Follow-up emails
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Action emails
            </li>
<li className="flex items-start gap-2">
<iconify-icon className="text-green-500 mt-0.5" icon="lucide:file" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
              Escalations
            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="w-full relative pb-20 pt-14 z-10 overflow-hidden bg-white" id="integrations">
<div className="text-center mb-10 max-w-3xl mx-auto px-6">
<p className="text-[11px] font-bold tracking-[0.26em] uppercase aw-integrations-section-title mb-4">
          Workflow Integrations
        </p>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 font-nunito mb-4">
          Integrations that move with your workflow
        </h3>
<p className="text-lg text-slate-600 font-normal">
          Connect meeting intelligence to the tools your team already uses.
        </p>
</div>
<div className="aw-integrations-marquee">
<div className="aw-integrations-track">
<div className="aw-integrations-group">
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill"><div className="aw-integration-dot"></div><span>Video</span></div>
<div className="aw-integration-logo"><iconify-icon icon="logos:zoom-icon" width="68"></iconify-icon></div>
<div className="aw-integration-name">Zoom</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill"><div className="aw-integration-dot"></div><span>Video</span></div>
<div className="aw-integration-logo"><iconify-icon icon="logos:microsoft-teams" width="68"></iconify-icon></div>
<div className="aw-integration-name">Teams</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill"><div className="aw-integration-dot"></div><span>Video</span></div>
<div className="aw-integration-logo"><iconify-icon icon="logos:google-meet" width="68"></iconify-icon></div>
<div className="aw-integration-name">Google Meet</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill"><div className="aw-integration-dot"></div><span>Tasks</span></div>
<div className="aw-integration-logo"><iconify-icon icon="logos:jira" width="68"></iconify-icon></div>
<div className="aw-integration-name">Jira</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill"><div className="aw-integration-dot"></div><span>Email</span></div>
<div className="aw-integration-logo"><iconify-icon icon="logos:google-gmail" width="72"></iconify-icon></div>
<div className="aw-integration-name">Gmail</div>
</div>
</div>
</div>
</div>
<div className="aw-integrations-group">
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill"><div className="aw-integration-dot"></div><span>Video</span></div>
<div className="aw-integration-logo"><iconify-icon icon="logos:zoom-icon" width="68"></iconify-icon></div>
<div className="aw-integration-name">Zoom</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill"><div className="aw-integration-dot"></div><span>Video</span></div>
<div className="aw-integration-logo"><iconify-icon icon="logos:microsoft-teams" width="68"></iconify-icon></div>
<div className="aw-integration-name">Teams</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill"><div className="aw-integration-dot"></div><span>Video</span></div>
<div className="aw-integration-logo"><iconify-icon icon="logos:google-meet" width="68"></iconify-icon></div>
<div className="aw-integration-name">Google Meet</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill"><div className="aw-integration-dot"></div><span>Tasks</span></div>
<div className="aw-integration-logo"><iconify-icon icon="logos:jira" width="68"></iconify-icon></div>
<div className="aw-integration-name">Jira</div>
</div>
</div>
</div>
<div className="aw-integration-card">
<div className="aw-integration-outer"></div>
<div className="aw-integration-inner">
<div className="aw-integration-card-body">
<div className="aw-integration-pill"><div className="aw-integration-dot"></div><span>Email</span></div>
<div className="aw-integration-logo"><iconify-icon icon="logos:google-gmail" width="72"></iconify-icon></div>
<div className="aw-integration-name">Gmail</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full border-t border-slate-200 bg-[#FDFBF9] pt-12 pb-8 px-6 mt-12 relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full flex items-center justify-center bg-black">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
</div>
<span className="text-lg font-semibold tracking-tight font-nunito text-slate-900">
            AfterWordsAI
          </span>
</div>
<div className="text-sm font-medium text-slate-500">
          © 2026 AfterWordsAI. All rights reserved.
        </div>
</div>
</footer>
</div>




```

    </>
  );
}
