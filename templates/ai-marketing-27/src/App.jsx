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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const mobileMenu = document.getElementById('mobile-menu');
      let isMobileMenuOpen = false;

      function toggleMobileMenu() {
          isMobileMenuOpen = !isMobileMenuOpen;
          if (isMobileMenuOpen) {
              mobileMenu.classList.remove('hidden');
              void mobileMenu.offsetWidth;
              mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
              mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'flex');
          } else {
              mobileMenu.classList.remove('opacity-100', 'pointer-events-auto');
              mobileMenu.classList.add('opacity-0', 'pointer-events-none');
              setTimeout(() => {
                  mobileMenu.classList.add('hidden');
                  mobileMenu.classList.remove('flex');
              }, 300);
          }
      }

      function navigateMobile(pageId) {
          toggleMobileMenu();
          setTimeout(() => {
              navigate(pageId);
          }, 300);
      }

      function navigate(pageId) {
          const targetSection = document.getElementById(pageId);
          if(!targetSection || targetSection.classList.contains('page-active')) return;

          const currentActive = document.querySelector('.page-active');

          if(currentActive) {
              currentActive.classList.remove('page-active');
              currentActive.classList.add('page-exit');
              setTimeout(() => {
                  currentActive.classList.add('hidden');
              }, 700);
          }

          targetSection.classList.remove('hidden');
          void targetSection.offsetWidth;
          targetSection.classList.remove('page-exit');
          targetSection.classList.add('page-active');

          targetSection.scrollTop = 0;
          history.pushState(null, null, `#${pageId}`);
      }

      window.addEventListener('load', () => {
          const hash = window.location.hash.substring(1);
          if(hash && document.getElementById(hash)) {
              navigate(hash);
          }
      });

      function scrollToCalendar() {
          const homeSection = document.getElementById('home');
          if(!homeSection.classList.contains('page-active')) {
              navigate('home');
              setTimeout(() => {
                  document.getElementById('booking-calendar').scrollIntoView({ behavior: 'smooth' });
              }, 800);
          } else {
              document.getElementById('booking-calendar').scrollIntoView({ behavior: 'smooth' });
          }
      }

      const calendarModal = document.getElementById('calendar-modal');
      const calendarBackdrop = document.getElementById('calendar-backdrop');
      const calendarContent = document.getElementById('calendar-content');

      function openCalendarModal() {
          calendarModal.classList.remove('hidden');
          calendarModal.classList.add('flex');
          void calendarModal.offsetWidth;

          calendarBackdrop.classList.remove('opacity-0');
          calendarBackdrop.classList.add('opacity-100');

          calendarContent.classList.remove('opacity-0', 'scale-95');
          calendarContent.classList.add('opacity-100', 'scale-100');
      }

      function closeCalendarModal() {
          calendarBackdrop.classList.remove('opacity-100');
          calendarBackdrop.classList.add('opacity-0');

          calendarContent.classList.remove('opacity-100', 'scale-100');
          calendarContent.classList.add('opacity-0', 'scale-95');

          setTimeout(() => {
              calendarModal.classList.add('hidden');
              calendarModal.classList.remove('flex');
          }, 300);
      }

      const aiModal = document.getElementById('ai-modal');
      const aiBackdrop = document.getElementById('ai-backdrop');
      const aiContent = document.getElementById('ai-content');
      const chatMessages = document.getElementById('chat-messages');
      const chatInput = document.getElementById('chat-input');

      function openOleyAI() {
          aiModal.classList.remove('hidden');
          aiModal.classList.add('flex');
          void aiModal.offsetWidth;

          aiBackdrop.classList.remove('opacity-0');
          aiBackdrop.classList.add('opacity-100');

          aiContent.classList.remove('opacity-0', 'translate-y-8');
          aiContent.classList.add('opacity-100', 'translate-y-0');

          setTimeout(() => {
              chatInput.focus();
          }, 300);
      }

      function closeOleyAI() {
          aiBackdrop.classList.remove('opacity-100');
          aiBackdrop.classList.add('opacity-0');

          aiContent.classList.remove('opacity-100', 'translate-y-0');
          aiContent.classList.add('opacity-0', 'translate-y-8');

          setTimeout(() => {
              aiModal.classList.add('hidden');
              aiModal.classList.remove('flex');
          }, 300);
      }

      function handleChatSubmit(e) {
          e.preventDefault();
          const message = chatInput.value.trim();
          if(!message) return;

          const userMsgHtml = `
              <div class="flex gap-3 max-w-[85%] self-end flex-row-reverse chat-bubble">
                  <div class="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex-shrink-0 flex items-center justify-center text-zinc-400 mt-1">
                      <iconify-icon icon="solar:user-linear"></iconify-icon>
                  </div>
                  <div class="bg-teal-500/10 border border-teal-500/20 p-3.5 rounded-2xl rounded-tr-sm text-sm text-teal-50 font-light leading-relaxed">
                      ${message}
                  </div>
              </div>
          `;
          chatMessages.insertAdjacentHTML('beforeend', userMsgHtml);
          chatInput.value = '';
          scrollToBottom();

          const typingHtml = `
              <div id="typing-indicator" class="flex gap-3 max-w-[85%] chat-bubble">
                  <div class="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex-shrink-0 flex items-center justify-center text-teal-400 mt-1">
                      <iconify-icon icon="solar:cpu-setting-linear"></iconify-icon>
                  </div>
                  <div class="bg-white/[0.03] border border-white/[0.05] p-3.5 rounded-2xl rounded-tl-sm text-sm text-zinc-300 font-light flex items-center gap-1.5 w-16 h-[46px]">
                      <div class="w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-bounce" style="animation-delay: 0s"></div>
                      <div class="w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-bounce" style="animation-delay: 0.15s"></div>
                      <div class="w-1.5 h-1.5 bg-teal-400/60 rounded-full animate-bounce" style="animation-delay: 0.3s"></div>
                  </div>
              </div>
          `;

          setTimeout(() => {
              chatMessages.insertAdjacentHTML('beforeend', typingHtml);
              scrollToBottom();

              setTimeout(() => {
                  const typingIndicator = document.getElementById('typing-indicator');
                  if (typingIndicator) typingIndicator.remove();

                  const botMsgHtml = `
                      <div class="flex gap-3 max-w-[85%] chat-bubble">
                          <div class="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex-shrink-0 flex items-center justify-center text-teal-400 mt-1">
                              <iconify-icon icon="solar:cpu-setting-linear"></iconify-icon>
                          </div>
                          <div class="bg-white/[0.03] border border-white/[0.05] p-3.5 rounded-2xl rounded-tl-sm text-sm text-zinc-300 font-light leading-relaxed">
                              Processing command... I am currently operating in simulation mode. To deploy a live custom growth sequence for your business, please <a href="#" onclick="closeOleyAI(); openCalendarModal(); return false;" class="text-teal-400 hover:text-teal-300 transition-colors underline underline-offset-2">book a strategy call</a> with our human architects.
                          </div>
                      </div>
                  `;
                  chatMessages.insertAdjacentHTML('beforeend', botMsgHtml);
                  scrollToBottom();
              }, 1500);
          }, 300);
      }

      function scrollToBottom() {
          chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    


      const appModal = document.getElementById('app-modal');
      const appBackdrop = document.getElementById('app-backdrop');
      const appContent = document.getElementById('app-content');

      function openAppModal() {
          appModal.classList.remove('hidden');
          appModal.classList.add('flex');
          void appModal.offsetWidth;

          appBackdrop.classList.remove('opacity-0');
          appBackdrop.classList.add('opacity-100');

          appContent.classList.remove('opacity-0', 'scale-95');
          appContent.classList.add('opacity-100', 'scale-100');
      }

      function closeAppModal() {
          appBackdrop.classList.remove('opacity-100');
          appBackdrop.classList.add('opacity-0');

          appContent.classList.remove('opacity-100', 'scale-100');
          appContent.classList.add('opacity-0', 'scale-95');

          setTimeout(() => {
              appModal.classList.add('hidden');
              appModal.classList.remove('flex');
          }, 300);
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#030303]/80 backdrop-blur-2xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">
<div className="flex-shrink-0 flex items-center cursor-pointer group" onclick="navigate('home')">
<div className="flex flex-col">
<span className="text-xl font-medium text-white tracking-tighter leading-none">
                OLEY POWER
              </span>
<span className="text-xs font-normal tracking-widest text-zinc-500 uppercase mt-1">
                Marketing
              </span>
</div>
</div>
<div className="hidden md:flex items-center space-x-2 bg-white/[0.02] border border-white/[0.05] rounded-full px-2 py-1.5 backdrop-blur-md">
<button className="px-4 py-1.5 text-xs font-normal text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-full transition-all" onclick="navigate('services')">
              Services
            </button>
<button className="px-4 py-1.5 text-xs font-normal text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-full transition-all" onclick="navigate('results')">
              Results
            </button>
<button className="px-4 py-1.5 text-xs font-normal text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-full transition-all" onclick="navigate('career')">
              Career
            </button>
<button className="px-4 py-1.5 text-xs font-normal text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-full transition-all" onclick="navigate('about')">
              About
            </button>
<button className="px-4 py-1.5 text-xs font-normal text-zinc-400 hover:text-white hover:bg-white/[0.05] rounded-full transition-all" onclick="navigate('contact')">
              Contact
            </button>
</div>
<div className="flex items-center gap-4">
<button className="hidden sm:flex group px-5 py-2 rounded-full text-xs font-normal transition-all items-center gap-2 bg-white text-black hover:bg-zinc-200" onclick="openCalendarModal()">
              Book a Call
              <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="md:hidden w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 hover:text-white transition-colors" onclick="toggleMobileMenu()">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-[#030303]/95 backdrop-blur-2xl hidden flex-col justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none" id="mobile-menu">
<button className="absolute top-5 right-4 w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-zinc-400 hover:text-white transition-colors" onclick="toggleMobileMenu()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div className="flex flex-col items-center gap-8 text-lg font-normal tracking-tight w-full px-6">
<a className="text-zinc-400 hover:text-white transition-colors cursor-pointer w-full text-center py-2" onclick="navigateMobile('services')">
          Services
        </a>
<a className="text-zinc-400 hover:text-white transition-colors cursor-pointer w-full text-center py-2" onclick="navigateMobile('results')">
          Results
        </a>
<a className="text-zinc-400 hover:text-white transition-colors cursor-pointer w-full text-center py-2" onclick="navigateMobile('career')">
          Career
        </a>
<a className="text-zinc-400 hover:text-white transition-colors cursor-pointer w-full text-center py-2" onclick="navigateMobile('about')">
          About
        </a>
<a className="text-zinc-400 hover:text-white transition-colors cursor-pointer w-full text-center py-2" onclick="navigateMobile('contact')">
          Contact
        </a>
<button className="mt-4 w-full max-w-xs px-6 py-3.5 rounded-full bg-white text-black font-normal text-sm flex items-center justify-center gap-2" onclick="toggleMobileMenu(); openCalendarModal()">
          Book a Call
          <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<main className="page-container relative">

<div className="absolute inset-0 z-0 pointer-events-none fixed">
<div className="absolute inset-0 bg-grid opacity-40"></div>
<div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] mix-blend-screen"></div>
</div>

<div className="page-section page-exit" id="home">
<section className="pt-32 pb-20 lg:pt-40 lg:pb-32 max-w-7xl mx-auto px-4 relative flex flex-col items-center justify-center min-h-[90vh] shrink-0">
<div className="w-full max-w-4xl text-center z-20 flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/[0.05] text-xs font-normal tracking-widest mb-8 text-teal-400 uppercase backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
              Systems Online v2.0
            </div>
<h1 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-6 leading-[1.05]">
              AI-Powered Growth
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-300 glow-text">
                For Real Businesses
              </span>
</h1>
<p className="text-base md:text-lg text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Oley Power Marketing builds the digital infrastructure that
              predictable revenue demands. We turn cold traffic into closed
              deals using next-gen automation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<button className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white text-black font-normal text-sm hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="scrollToCalendar()">
                Book a Strategy Call
              </button>
<button className="sm:w-auto hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 flex group text-sm font-normal text-white w-full border border-white/10 rounded-full px-7 py-3.5 gap-x-2 items-center justify-center backdrop-blur-md" onclick="openOleyAI()">
<iconify-icon className="text-lg text-teal-400" icon="solar:chat-round-dots-linear"></iconify-icon>
                Ask Oley AI
              </button>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-4 pb-32 relative z-20 border-t border-white/[0.05] pt-24 mt-10 shrink-0">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-4xl font-normal tracking-tight text-white mb-4">
                Core Infrastructure
              </h2>
<p className="text-zinc-400 text-sm max-w-xl font-light">
                We don't just run ads. We architect end-to-end revenue machines
                designed to capture, nurture, and close leads on autopilot.
              </p>
</div>
<button className="flex items-center gap-2 text-xs font-normal text-teal-400 hover:text-teal-300 transition-colors group pb-1 uppercase tracking-widest" onclick="navigate('services')">
              Explore Packages
              <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="p-8 rounded-3xl glass-card transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6 group-hover:text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal tracking-tight text-white mb-2">
                Omnichannel Ads
              </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                Precision-targeted campaigns across Meta, Google, and TikTok to
                flood your funnel with high-intent prospects.
              </p>
</div>
<div className="p-8 rounded-3xl glass-card transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6 group-hover:text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:cpu-setting-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal tracking-tight text-white mb-2">
                AI Agents
              </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                Deploy custom AI architecture to instantly engage, qualify, and
                book appointments 24/7 without human delay.
              </p>
</div>
<div className="p-8 rounded-3xl glass-card transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6 group-hover:text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal tracking-tight text-white mb-2">
                CRM &amp; Automations
              </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                Seamlessly integrate lead flow into robust CRMs with automated
                sequences that prevent deals from slipping.
              </p>
</div>
<div className="p-8 rounded-3xl glass-card transition-all duration-300 group hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6 group-hover:text-teal-400 group-hover:scale-110 group-hover:bg-teal-500/10 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:sort-from-bottom-to-top-linear"></iconify-icon>
</div>
<h3 className="text-base font-normal tracking-tight text-white mb-2">
                Conversion Funnels
              </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">
                Custom-built landing pages engineered strictly for conversion
                rate optimization and maximizing your ROI.
              </p>
</div>
</div>
<div className="mt-32 pt-24 border-t border-white/[0.05] scroll-mt-24" id="booking-calendar">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-4">
                Initialize Growth
              </h2>
<p className="text-zinc-400 text-sm max-w-xl mx-auto font-light">
                Select a time below to see how we can architect your revenue
                machine.
              </p>
</div>
<div className="w-full max-w-4xl mx-auto glass-card rounded-3xl p-4 sm:p-8">
<iframe data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-unique-id-mapped="true" id="UGBPGc4JvHVoiaVku2XZ_1774623020977" scrolling="yes" src="https://api.leadconnectorhq.com/widget/booking/UGBPGc4JvHVoiaVku2XZ" style={{width: '100%', border: 'none', overflow: 'hidden', borderRadius: '1rem'}}></iframe>
<br/>

</div>
</div>
</section>

<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="services">
<section className="pt-36 pb-24 max-w-7xl mx-auto px-4 relative shrink-0 flex-1 w-full">
<div className="text-center mb-16">
<div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase mb-4">
              Oley Power Marketing LLC
            </div>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-4">
              Deployment Tiers
            </h2>
<p className="text-zinc-400 max-w-xl mx-auto text-sm font-light">
              Automated systems engineered to scale your revenue to the next
              tier.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 relative z-10">

<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300 relative">
<div className="mb-5">
<h3 className="text-base font-normal tracking-tight text-white mb-1">
                  Starter Package
                </h3>
<p className="text-xs text-zinc-500">Entry / Local Businesses</p>
</div>
<div className="mb-5 pb-5 border-b border-white/[0.05]">
<div className="text-3xl font-normal tracking-tight text-white group-hover:text-teal-400 transition-colors">
                  $1,000
                  <span className="text-sm text-zinc-500 font-normal">
                    – $2,500
                  </span>
</div>
<div className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-normal">
                  Per Month
                </div>
</div>
<div className="mb-6">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-3">
                  Perfect For
                </div>
<div className="text-xs text-zinc-400 leading-relaxed font-light">
                  Small businesses, Realtors, local shops, and startups.
                </div>
</div>
<div className="flex-1">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-4">
                  Includes
                </div>
<ul className="space-y-3.5 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Social media management (8–12 posts)
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Basic ads setup (Facebook/IG)
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Light SEO / Google presence
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Monthly report
                    </span>
</li>
</ul>
</div>
<div className="mt-auto pt-4 border-t border-white/[0.05] text-xs font-light text-zinc-500">
                👉 Aligns with small business budgets ($1K–$4K typical)
              </div>
</div>

<div className="p-8 rounded-3xl bg-white/[0.03] border border-teal-500/20 flex flex-col h-full relative shadow-[0_0_30px_rgba(45,212,191,0.03)] transform md:-translate-y-2 group hover:border-teal-500/40 transition-all duration-300">
<div className="absolute -top-3 left-8 bg-teal-500/10 border border-teal-500/30 text-teal-400 px-3 py-1 rounded-full text-xs font-normal tracking-widest uppercase backdrop-blur-md">
                Your Sweet Spot
              </div>
<div className="mb-5 mt-2">
<h3 className="text-base font-normal tracking-tight text-white mb-1">
                  Growth Package
                </h3>
<p className="text-xs text-teal-200/60">Agencies Live Here</p>
</div>
<div className="mb-5 pb-5 border-b border-white/[0.05]">
<div className="text-3xl font-normal tracking-tight text-teal-400">
                  $3,000
                  <span className="text-sm text-zinc-400 font-normal">
                    – $6,000
                  </span>
</div>
<div className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-normal">
                  Per Month
                </div>
</div>
<div className="mb-6">
<div className="text-xs font-normal uppercase tracking-widest text-teal-500/70 mb-3">
                  Perfect For
                </div>
<div className="text-xs text-zinc-300 leading-relaxed font-light">
                  Businesses ready to scale, credit repair, travel, real estate,
                  and dealerships.
                </div>
</div>
<div className="flex-1">
<div className="text-xs font-normal uppercase tracking-widest text-teal-500/70 mb-4">
                  Includes
                </div>
<ul className="space-y-3.5 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-300 leading-relaxed font-light">
                      Paid ads (FB + Google)
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-300 leading-relaxed font-light">
                      Funnel / landing pages
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-300 leading-relaxed font-light">
                      CRM + lead automation
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-300 leading-relaxed font-light">
                      Content + creatives
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-300 leading-relaxed font-light">
                      Weekly optimization
                    </span>
</li>
</ul>
</div>
<div className="mt-auto pt-4 border-t border-teal-500/20 text-xs font-light text-teal-200/80">
                👉 Most agencies live here ($2.5K–$6K avg).
                <span className="font-normal text-teal-400 block mt-1">
                  💡 This is where YOU should focus closing deals.
                </span>
</div>
</div>

<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300 relative">
<div className="mb-5">
<h3 className="text-base font-normal tracking-tight text-white mb-1">
                  Authority Package
                </h3>
<p className="text-xs text-zinc-500">High-Ticket Clients</p>
</div>
<div className="mb-5 pb-5 border-b border-white/[0.05]">
<div className="text-3xl font-normal tracking-tight text-white group-hover:text-teal-400 transition-colors">
                  $7,500
                  <span className="text-sm text-zinc-500 font-normal">– $15k</span>
</div>
<div className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-normal">
                  Per Month
                </div>
</div>
<div className="mb-6">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-3">
                  Perfect For
                </div>
<div className="text-xs text-zinc-400 leading-relaxed font-light">
                  Call centers, multi-location businesses, and high-ticket
                  industries (legal, finance, timeshare).
                </div>
</div>
<div className="flex-1">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-4">
                  Includes
                </div>
<ul className="space-y-3.5 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Full funnel system (ads + CRM + automation)
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      AI chatbot (your specialty 🔥)
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Email/SMS campaigns
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Retargeting systems
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Sales consulting
                    </span>
</li>
</ul>
</div>
<div className="mt-auto pt-4 border-t border-white/[0.05] text-xs font-light text-zinc-500">
                👉 Scaling businesses commonly invest $5K–$15K/month.
              </div>
</div>

<div className="p-8 rounded-3xl glass-card flex flex-col h-full group hover:-translate-y-1 transition-transform duration-300 relative">
<div className="mb-5">
<h3 className="text-base font-normal tracking-tight text-white mb-1">
                  Elite / Performance
                </h3>
<p className="text-xs text-zinc-500">Your CEO Level</p>
</div>
<div className="mb-5 pb-5 border-b border-white/[0.05]">
<div className="text-3xl font-normal tracking-tight text-white group-hover:text-teal-400 transition-colors">
                  $15k
                  <span className="text-sm text-zinc-500 font-normal">– $50k+</span>
</div>
<div className="text-xs text-zinc-500 mt-2 uppercase tracking-widest font-normal">
                  Per Month
                </div>
</div>
<div className="mb-6">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-3">
                  Perfect For
                </div>
<div className="text-xs text-zinc-400 leading-relaxed font-light">
                  National brands, enterprise operations, and revenue share
                  deals.
                </div>
</div>
<div className="flex-1">
<div className="text-xs font-normal uppercase tracking-widest text-zinc-600 mb-4">
                  Includes
                </div>
<ul className="space-y-3.5 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Full marketing team
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      AI systems + automation
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Call center integration
                    </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 text-sm shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400 leading-relaxed font-light">
                      Performance-based scaling
                    </span>
</li>
</ul>
</div>
<div className="mt-auto pt-4 border-t border-white/[0.05] text-xs font-light text-zinc-500">
                👉 Enterprise campaigns can hit $50K/month+
              </div>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="results">
<section className="pt-36 pb-20 max-w-7xl mx-auto px-4 flex-1 shrink-0 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center min-h-[70vh]">
<div>
<h2 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6 leading-[1.1]">
                Proven Protocol.
                <br/>
                Real Revenue.
              </h2>
<p className="text-zinc-400 mb-12 text-sm leading-relaxed font-light">
                We don't measure "likes" or "impressions." Our KPIs are strictly
                tied to your bottom line. Since 2022, we've deployed over $5M in
                ad spend with sustained profitability.
              </p>
<div className="grid grid-cols-2 gap-8">
<div className="border-l border-white/10 pl-6">
<div className="text-4xl font-normal text-white mb-2 tracking-tight">
                    $12M+
                  </div>
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest">
                    Revenue Tracked
                  </div>
</div>
<div className="border-l border-white/10 pl-6">
<div className="text-4xl font-normal text-white mb-2 tracking-tight">
                    84k
                  </div>
<div className="text-xs font-normal text-zinc-500 uppercase tracking-widest">
                    Leads Generated
                  </div>
</div>
</div>
</div>
<div className="space-y-4 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-teal-500/5 blur-3xl rounded-full"></div>
<div className="p-6 rounded-3xl glass-card relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-normal text-white block">
                      Solar Energy Group
                    </span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                      B2C Conversion
                    </span>
</div>
</div>
<p className="text-xs text-zinc-400 mb-5 font-light">
                  Reduced cost-per-lead by 38% while increasing appointment set
                  rate by 2.5x using AI follow-up.
                </p>
<div className="h-1 w-full bg-white/[0.05] rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[85%] rounded-full"></div>
</div>
</div>
<div className="p-6 rounded-3xl glass-card relative z-10">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
<iconify-icon className="text-xl" icon="solar:globus-linear"></iconify-icon>
</div>
<div>
<span className="text-sm font-normal text-white block">
                      E-commerce Tech
                    </span>
<span className="text-xs text-zinc-500 uppercase tracking-widest">
                      MRR Scaling
                    </span>
</div>
</div>
<p className="text-xs text-zinc-400 mb-5 font-light">
                  Scaled from $50k to $240k MRR in 7 months through automated
                  outbound systems.
                </p>
<div className="h-1 w-full bg-white/[0.05] rounded-full overflow-hidden">
<div className="h-full bg-teal-400 w-[60%] rounded-full"></div>
</div>
</div>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section page-active" id="career">
<section className="pt-32 pb-24 lg:pt-40 max-w-4xl mx-auto px-4 relative z-20 flex-1 shrink-0 w-full">
<div className="mb-12">
<h1 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
              Join Our Network
            </h1>
<p className="text-zinc-400 text-base font-light">
              We partner with top-tier companies looking for hungry, driven
              individuals to scale their operations.
            </p>
</div>


<div className="p-8 md:p-10 rounded-3xl glass-card relative overflow-hidden group mt-10">
<div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none transform rotate-12">
<iconify-icon className="text-[240px]" icon="solar:card-linear"></iconify-icon>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/[0.05] text-xs font-normal tracking-widest mb-6 text-teal-400 uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
              Now Hiring
            </div>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-2">
              Sales Representatives
            </h2>
<div className="flex items-center gap-2 mb-8">
<span className="text-lg text-white font-normal">
                True Credit Advisors AI
              </span>
<span className="text-zinc-600 text-sm">•</span>
<span className="text-sm text-zinc-400 font-light">
                Commission-Only
              </span>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 border-b border-white/[0.05] pb-8">
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<span>
                  4000 Hollywood Ave, Suite 555-S
                  <br/>
                  Hollywood, FL
                </span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:calendar-linear"></iconify-icon>
</div>
<span>
                  Monday through Friday
                  <br/>
                  (Flexible Hours)
                </span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<span>High-Commission</span>
</div>
</div>
<div className="space-y-8 text-sm font-light text-zinc-400 leading-relaxed relative z-10">
<p className="text-base text-zinc-300">
                True Credit Advisors AI is looking for motivated, driven, and
                confident Sales Representatives to join our elite team of
                advocates and credit advisors.
              </p>
<p>
                This is a high-commission, commission-only opportunity for
                individuals who are hungry to grow, close deals, and earn based
                on performance. If you are self-motivated, love helping people,
                and want unlimited income potential, this could be the perfect
                fit.
              </p>
<div className="grid md:grid-cols-2 gap-8 pt-4">
<div>
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    What we're looking for:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Strong communication and people skills</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Sales experience is a plus</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Self-driven and goal-oriented mindset</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Professional attitude and strong work ethic</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Passion for helping clients improve their financial
                        future
                      </span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    What we offer:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>High commission earning potential</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Flexible Monday through Friday schedule</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Set your own hours</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>
                        Opportunity to work with a fast-growing company
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>
                        Be part of an elite team focused on changing lives
                        through credit education and solutions
                      </span>
</li>
</ul>
</div>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.03] mt-8">
<p className="text-zinc-300">
                  If you are ready to join a company that values ambition,
                  leadership, and results, apply today and become part of True
                  Credit Advisors AI.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="px-7 py-3.5 rounded-full bg-white text-black font-normal text-sm hover:scale-[1.02] transition-transform duration-300 text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="openAppModal()">
                  Submit Application
                </button>
</div>
<div className="flex flex-wrap gap-2 pt-6">
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #NowHiring
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #SalesJobs
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #TrueCreditAdvisorsAI
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #HollywoodFL
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #CommissionOnly
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #CreditAdvisors
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #FloridaJobs
                </span>
</div>
</div>
</div>

<div className="p-8 md:p-10 rounded-3xl glass-card relative overflow-hidden group mt-10">
<div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none transform rotate-12">
<iconify-icon className="text-[240px]" icon="solar:globus-linear"></iconify-icon>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/[0.05] text-xs font-normal tracking-widest mb-6 text-teal-400 uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
              Now Hiring
            </div>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-2">
              Work From Home Vacation Planners
            </h2>
<div className="flex items-center gap-2 mb-8">
<span className="text-lg text-white font-normal">
                DD Vacations Club
              </span>
<span className="text-zinc-600 text-sm">•</span>
<span className="text-sm text-zinc-400 font-light">
                Commission-Only
              </span>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 border-b border-white/[0.05] pb-8">
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:home-smile-linear"></iconify-icon>
</div>
<span>
                  Work From Home
                  <br/>
<span className="text-zinc-500 text-xs">
                    (Main Hub: Hollywood, FL)
                  </span>
</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:calendar-linear"></iconify-icon>
</div>
<span>
                  Flexible Hours
                  <br/>
<span className="text-zinc-500 text-xs">
                    (Set your own schedule)
                  </span>
</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<span>Strictly Commission-Based</span>
</div>
</div>
<div className="space-y-8 text-sm font-light text-zinc-400 leading-relaxed relative z-10">
<p className="text-base text-zinc-300">
                DD Vacations Club is looking for motivated, energetic, and
                money-driven individuals to join our team as Vacation Planners /
                Vacation Package Specialists.
              </p>
<p>
                This is a work-from-home career opportunity with the main hub
                based in Hollywood, Florida. We are looking for people who are
                ready to grow, enjoy helping others plan memorable vacations,
                and want the chance to build real income while working
                independently. No ladder campaign — straight into the role of
                Vacation Planner / Vacation Package Provider.
              </p>
<p>
                This is more than just a job — it’s an opportunity to step into
                a role where you can grow, enjoy great perks, and even position
                yourself to become your own boss.
              </p>
<div className="grid md:grid-cols-2 gap-8 pt-4">
<div>
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    What we're looking for:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Strong communication skills</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Sales or customer service experience preferred
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Positive, professional attitude</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Self-motivated and goal-oriented mindset</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Comfortable working in a commission-based role
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Someone who enjoys speaking with people and helping them
                        secure vacation packages
                      </span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    What we offer:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Work-from-home opportunity</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Great perks</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Performance-based earning potential</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Opportunity for personal growth</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>
                        The chance to build toward becoming your own boss
                      </span>
</li>
</ul>
</div>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.03] mt-8">
<p className="text-zinc-300">
                  If you are ready to start a new career, work from home, and
                  become part of a company focused on travel, opportunity, and
                  growth, we would love to hear from you. Message us today to
                  request an application and apply.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="px-7 py-3.5 rounded-full bg-white text-black font-normal text-sm hover:scale-[1.02] transition-transform duration-300 text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="openAppModal()">
                  Submit Application
                </button>
</div>
<div className="flex flex-wrap gap-2 pt-6">
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #NowHiring
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #WorkFromHome
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #VacationPlanner
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #DDVacationsClub
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #TravelJobs
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #CommissionBased
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #HiringNow
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #FloridaOpportunity
                </span>
</div>
</div>
</div>
<div className="p-8 md:p-10 rounded-3xl glass-card relative overflow-hidden group mt-10">
<div className="absolute -right-10 -top-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none transform rotate-12">
<iconify-icon className="text-[240px]" icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/[0.05] text-xs font-normal tracking-widest mb-6 text-teal-400 uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
              Now Hiring
            </div>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-2">
              Timeshare Cancellation Specialist
            </h2>
<div className="flex items-center gap-2 mb-8">
<span className="text-lg text-white font-normal">
                Timeshare Cancellation Now LLC
              </span>
<span className="text-zinc-600 text-sm">•</span>
<span className="text-sm text-zinc-400 font-light">
                Commission-Based Only
              </span>
</div>
<div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-10 border-b border-white/[0.05] pb-8">
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:home-smile-linear"></iconify-icon>
</div>
<span>
                  Remote / Work From Home
                  <br/>
<span className="text-zinc-500 text-xs">
                    (Independent Contractor)
                  </span>
</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:calendar-linear"></iconify-icon>
</div>
<span>Flexible Schedule</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-300 font-light">
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0">
<iconify-icon className="text-teal-400 text-lg" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<span>Unlimited Commission Potential</span>
</div>
</div>
<div className="space-y-8 text-sm font-light text-zinc-400 leading-relaxed relative z-10">
<p className="text-base text-zinc-300">
                Timeshare Cancellation Now LLC helps clients explore solutions
                for exiting unwanted timeshare obligations. Our team works with
                consumers who are looking for relief from rising maintenance
                fees, financial hardship, inheritance concerns, and long-term
                vacation ownership commitments.
              </p>
<p>
                We are expanding nationwide and actively seeking motivated,
                professional, and goal-oriented sales representatives to join
                our growing remote team. This is a 100% commission-based
                opportunity with no hourly pay or base salary.
              </p>
<div className="grid md:grid-cols-2 gap-8 pt-4">
<div>
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    Responsibilities:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Handle inbound and outbound leads &amp; speak with
                        potential clients
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Explain company services professionally and ethically
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Maintain accurate customer notes and submissions
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Follow company compliance guidelines</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Meet weekly production goals &amp; maintain excellent
                        communication
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Attend optional virtual training sessions</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    Qualifications &amp; Ideal For:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Strong communication, people skills, and comfortable on
                        the phone
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Self-motivated, goal-oriented, and ability to work
                        independently
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Reliable internet and phone access (Must be 18+)
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Ideal for sales professionals, closers, and appointment
                        setters
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-teal-400 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>
                        Great for hospitality/travel industry pros or
                        entrepreneurs
                      </span>
</li>
</ul>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 pt-4">
<div>
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    What We Offer:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>
                        Work remotely from anywhere with a flexible schedule
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>
                        Weekly commission payouts and high-income potential
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>
                        Professional training, support, and access to proven
                        scripts
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Leadership advancement opportunities</span>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-normal mb-4 text-base tracking-tight">
                    Compensation Structure:
                  </h4>
<ul className="space-y-3">
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>
                        Commissions based on completed sales and enrollments
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>
                        Top performers qualify for increased commission
                        percentages
                      </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>Team leadership positions</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-emerald-400 text-lg shrink-0 mt-0.5" icon="solar:star-circle-linear"></iconify-icon>
<span>
                        Bonus incentives &amp; additional campaign opportunities
                      </span>
</li>
</ul>
</div>
</div>
<div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.03] mt-8">
<p className="text-zinc-300">
                  At Timeshare Cancellation Now LLC, we are building a motivated
                  team focused on helping clients find solutions while creating
                  strong income opportunities for our representatives. If you
                  are ambitious, coachable, and ready to grow in a fast-paced
                  remote environment, apply today.
                </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="px-7 py-3.5 rounded-full bg-white text-black font-normal text-sm hover:scale-[1.02] transition-transform duration-300 text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="openAppModal()">
                  Submit Application
                </button>
</div>
<div className="flex flex-wrap gap-2 pt-6">
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #NowHiring
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #RemoteWork
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #SalesJobs
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #TimeshareCancellation
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #CommissionOnly
                </span>
<span className="px-3 py-1 bg-white/[0.03] border border-white/[0.05] rounded-full text-xs text-zinc-500">
                  #FlexibleSchedule
                </span>
</div>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="about">
<section className="pt-40 pb-20 max-w-5xl mx-auto px-4 text-center flex-1 shrink-0 w-full">
<div className="mb-12 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase">
            The Mission
          </div>
<h2 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-8 leading-[1.1]">
            Performance is the
            <br/>
            only language we speak.
          </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 text-left border-t border-white/[0.05] pt-16">
<div>
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6">
<span className="text-xs font-normal">01</span>
</div>
<h3 className="text-white font-normal mb-3 text-sm tracking-wide">
                Strategy
              </h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">
                We don't guess. We build models based on historical data and
                market arbitrage opportunities. Every campaign starts with a
                deep dive into your unit economics.
              </p>
</div>
<div>
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6">
<span className="text-xs font-normal">02</span>
</div>
<h3 className="text-white font-normal mb-3 text-sm tracking-wide">
                Engineering
              </h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">
                Marketing is now a software problem. We treat your growth stack
                like a codebase: tested, scalable, and continuously optimized
                for zero downtime.
              </p>
</div>
<div>
<div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-zinc-400 mb-6">
<span className="text-xs font-normal">03</span>
</div>
<h3 className="text-white font-normal mb-3 text-sm tracking-wide">
                Execution
              </h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">
                Our team works as an extension of yours. We operate with the
                speed of a startup and the precision of a laboratory. If it
                doesn't scale, we don't build it.
              </p>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="contact">
<section className="pt-36 pb-20 max-w-7xl mx-auto px-4 flex-1 shrink-0 w-full">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
<div>
<div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase">
                Communication Link
              </div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
                Ready to scale?
                <br/>
                Let's talk.
              </h2>
<p className="text-zinc-400 text-sm mb-12 max-w-md leading-relaxed font-light">
                Whether you have a question about our revenue systems or want to
                explore a partnership, our team is ready to assist you.
              </p>
<div className="space-y-8">
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center text-zinc-400 border border-white/[0.05]">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<div className="text-xs uppercase font-normal text-zinc-600 tracking-widest mb-1">
                      Email
                    </div>
<a className="text-sm font-normal text-white hover:text-teal-400 transition-colors" href="mailto:info@oleypower.com">
                      info@oleypower.com
                    </a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center text-zinc-400 border border-white/[0.05]">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<div className="text-xs uppercase font-normal text-zinc-600 tracking-widest mb-1">
                      Phone
                    </div>
<a className="text-sm font-normal text-white hover:text-teal-400 transition-colors" href="tel:+18883336314">
                      888-333-6314
                    </a>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-white/[0.03] flex items-center justify-center text-zinc-400 border border-white/[0.05]">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<div className="text-xs uppercase font-normal text-zinc-600 tracking-widest mb-1">
                      HQ
                    </div>
<div className="text-sm font-normal text-white">Miami, FL</div>
</div>
</div>
</div>
</div>
<div className="glass-card rounded-3xl p-4 md:p-8 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 w-full rounded-2xl overflow-hidden min-h-[600px] bg-white/[0.01]">
<div className="ep-iFrameContainer" id="inline-rMki37LyxYem47LoP6LL-div" style={{borderRadius: '3px', display: 'block'}}>
<div className="ep-wrapper" id="inline-rMki37LyxYem47LoP6LL-wrapper" style={{borderRadius: '3px'}}>
<iframe data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-unique-id-mapped="true" id="inline-rMki37LyxYem47LoP6LL" scrolling="yes" src="https://api.leadconnectorhq.com/widget/form/rMki37LyxYem47LoP6LL" style={{width: '100%', height: '100%', borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'initial', pointerEvents: 'none', left: '-9999px', position: 'absolute', overflow: 'auto'}} title="Contact Us Form"></iframe>
</div>
</div>

</div>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="privacy">
<section className="pt-36 pb-20 max-w-4xl mx-auto px-4 flex-1 shrink-0 w-full">
<div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase">
            Legal Protocol
          </div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
            Privacy Policy
          </h2>
<p className="text-sm text-zinc-500 mb-16 font-light">
            Last Updated: March 2026
          </p>
<div className="space-y-12 text-sm text-zinc-400 font-light leading-relaxed pb-12">
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                1. Information Architecture
              </h3>
<p className="mb-4">
                At Oley Power Marketing, we respect your privacy and are
                committed to protecting your personal data. This privacy policy
                will inform you as to how we look after your personal data when
                you visit our website (regardless of where you visit it from)
                and tell you about your privacy rights and how the law protects
                you.
              </p>
<p>
                We may collect, use, store and transfer different kinds of
                personal data about you which we have grouped together follows:
                Identity Data, Contact Data, Technical Data, Usage Data, and
                Marketing and Communications Data.
              </p>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                2. Data Collection Methods
              </h3>
<p className="mb-4">
                We use different methods to collect data from and about you
                including through:
              </p>
<ul className="space-y-2 list-disc list-inside text-zinc-300">
<li>
<span className="text-zinc-400">Direct interactions:</span>
                  You may give us your Identity and Contact Data by filling in
                  forms or by corresponding with us by post, phone, email or
                  otherwise.
                </li>
<li>
<span className="text-zinc-400">Automated technologies:</span>
                  As you interact with our website, we will automatically
                  collect Technical Data about your equipment, browsing actions
                  and patterns.
                </li>
<li>
<span className="text-zinc-400">Third parties:</span>
                  We may receive personal data about you from various third
                  parties and public sources such as analytics providers.
                </li>
</ul>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                3. How We Use Your Data
              </h3>
<p className="mb-4">
                We will only use your personal data when the law allows us to.
                Most commonly, we will use your personal data in the following
                circumstances:
              </p>
<ul className="space-y-2 list-disc list-inside text-zinc-300">
<li>
                  Where we need to perform the contract we are about to enter
                  into or have entered into with you.
                </li>
<li>
                  Where it is necessary for our legitimate interests (or those
                  of a third party) and your interests and fundamental rights do
                  not override those interests.
                </li>
<li>Where we need to comply with a legal obligation.</li>
</ul>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                4. Data Security &amp; Storage
              </h3>
<p className="mb-4">
                We have put in place appropriate security measures to prevent
                your personal data from being accidentally lost, used or
                accessed in an unauthorised way, altered or disclosed. In
                addition, we limit access to your personal data to those
                employees, agents, contractors and other third parties who have
                a business need to know.
              </p>
<p>
                They will only process your personal data on our instructions
                and they are subject to a duty of confidentiality.
              </p>
</div>
<div>
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                5. Your Legal Rights
              </h3>
<p className="mb-4">
                Under certain circumstances, you have rights under data
                protection laws in relation to your personal data. You have the
                right to:
              </p>
<ul className="space-y-2 list-disc list-inside text-zinc-300 mb-6">
<li>Request access to your personal data.</li>
<li>Request correction of your personal data.</li>
<li>Request erasure of your personal data.</li>
<li>Object to processing of your personal data.</li>
<li>Request restriction of processing your personal data.</li>
</ul>
<p>
                If you wish to exercise any of the rights set out above, please
                contact us at
                <a className="text-teal-400 hover:text-teal-300 transition-colors" href="mailto:info@oleypower.com">
                  info@oleypower.com
                </a>
                .
              </p>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer text-teal-400" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="terms">
<section className="pt-36 pb-20 max-w-4xl mx-auto px-4 flex-1 shrink-0 w-full">
<div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase">
            Legal Protocol
          </div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
            Terms &amp; Conditions
          </h2>
<p className="text-sm text-zinc-500 mb-16 font-light">
            Last Updated: March 2026
          </p>
<div className="space-y-12 text-sm text-zinc-400 font-light leading-relaxed pb-12">
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                1. Agreement to Terms
              </h3>
<p className="mb-4">
                These Terms and Conditions constitute a legally binding
                agreement made between you, whether personally or on behalf of
                an entity ("you") and Oley Power Marketing ("Company," "we,"
                "us," or "our"), concerning your access to and use of our
                systems, services, and website. You agree that by accessing the
                site or utilizing our services, you have read, understood, and
                agreed to be bound by all of these Terms and Conditions.
              </p>
<p>
                If you do not agree with all of these Terms and Conditions, then
                you are expressly prohibited from using our services and must
                discontinue use immediately.
              </p>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                2. Intellectual Property Rights
              </h3>
<p className="mb-4">
                Unless otherwise indicated, the Site and our services are our
                proprietary property and all source code, databases,
                functionality, software, website designs, audio, video, text,
                photographs, and graphics onthe Site (collectively, the
                "Content") and the trademarks, service marks, and logos
                contained therein (the "Marks") are owned or controlled by us or
                licensed to us, and are protected by copyright and trademark
                laws and various other intellectual property rights and unfair
                competition laws of the United States, international copyright
                laws, and international conventions.
              </p>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                3. User Representations
              </h3>
<p className="mb-4">
                By using the Site, you represent and warrant that: (1) all
                registration information you submit will be true, accurate,
                current, and complete; (2) you will maintain the accuracy of
                such information and promptly update such registration
                information as necessary; (3) you have the legal capacity and
                you agree to comply with these Terms and Conditions; (4) you are
                not a minor in the jurisdiction in which you reside.
              </p>
</div>
<div>
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                4. Prohibited Activities
              </h3>
<p className="mb-4">
                You may not access or use the Site for any purpose other than
                that for which we make the Site available. The Site may not be
                usedin connection with any commercial endeavors except those
                that are specifically endorsed or approved by us.
              </p>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer text-teal-400" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>

<div className="page-section hidden page-exit" id="cancellation">
<section className="pt-36 pb-20 max-w-4xl mx-auto px-4 flex-1 shrink-0 w-full">
<div className="mb-8 inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.02] text-xs text-zinc-400 font-normal tracking-widest uppercase">
            Legal Protocol
          </div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
            Cancellation Policy
          </h2>
<p className="text-sm text-zinc-500 mb-16 font-light">
            Last Updated: March 2026
          </p>
<div className="space-y-12 text-sm text-zinc-400 font-light leading-relaxed pb-12">
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                1. Subscription Cancellations
              </h3>
<p className="mb-4">
                Clients may cancel their monthly recurring services at any time
                by providing a written notice of 30 days. This notice period is
                required to ensure proper offboarding, transition of assets, and
                termination of active campaigns without causing damage to the
                client's digital presence.
              </p>
</div>
<div className="pb-8 border-b border-white/[0.05]">
<h3 className="text-lg font-normal text-white mb-4 tracking-tight">
                2. Refund Policy
              </h3>
<p className="mb-4">
                Due to the nature of our digital services and the immediate
                allocation of resources, labor, and ad spend upon commencement,
                we do not offer refunds for services already rendered or within
                the current billing cycle. Exceptions may be made strictly at
                the discretion of Oley Power Marketing management.
              </p>
</div>
</div>
</section>
<footer className="mt-auto shrink-0 w-full border-t border-white/[0.05] bg-[#030303] z-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pb-16 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigate('home')">
<span className="text-xs uppercase tracking-widest font-normal text-zinc-500 group-hover:text-zinc-300 transition-colors">
                Oley Power Marketing
              </span>
</div>
<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs uppercase tracking-widest font-normal text-zinc-500">
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('privacy')">
                Privacy Policy
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer" onclick="navigate('terms')">
                Terms
              </a>
<a className="hover:text-teal-400 transition-colors cursor-pointer text-teal-400" onclick="navigate('cancellation')">
                Cancellation
              </a>
</div>
<div className="text-xs uppercase tracking-widest font-normal text-zinc-600 hidden md:block">
              © 2026 All rights reserved.
            </div>
</div>
</footer>
</div>
</main>

<div className="fixed inset-0 z-[100] hidden items-center justify-center pointer-events-none" id="calendar-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="calendar-backdrop" onclick="closeCalendarModal()"></div>
<div className="glass-card w-full max-w-4xl h-[90vh] md:h-[80vh] m-4 rounded-3xl relative z-10 flex flex-col transform scale-95 opacity-0 transition-all duration-300 pointer-events-auto" id="calendar-content">
<div className="flex justify-between items-center p-4 border-b border-white/[0.05]">
<h3 className="text-white font-normal px-2 text-sm tracking-wide">
            Secure Your Growth Strategy Session
          </h3>
<button className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors" onclick="closeCalendarModal()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-hidden p-2 sm:p-4 rounded-b-3xl">
<iframe data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-unique-id-mapped="true" id="UGBPGc4JvHVoiaVku2XZ_modal" scrolling="yes" src="https://api.leadconnectorhq.com/widget/booking/UGBPGc4JvHVoiaVku2XZ" style={{width: '100%', height: '100%', border: 'none', borderRadius: '1rem'}}></iframe>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center pointer-events-none" id="app-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="app-backdrop" onclick="closeAppModal()"></div>
<div className="glass-card w-full max-w-4xl h-[90vh] md:h-[80vh] m-4 rounded-3xl relative z-10 flex flex-col transform scale-95 opacity-0 transition-all duration-300 pointer-events-auto" id="app-content">
<div className="flex justify-between items-center p-4 border-b border-white/[0.05]">
<h3 className="text-white font-normal px-2 text-sm tracking-wide">
            Submit Application
          </h3>
<button className="w-8 h-8 rounded-full bg-white/[0.05] hover:bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors" onclick="closeAppModal()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-2 sm:p-4 rounded-b-3xl custom-scrollbar">
<div className="ep-iFrameContainer" id="inline-zvO226t9xObsKSAmCLO7-div" style={{borderRadius: '3px', display: 'block'}}>
<div className="ep-wrapper" id="inline-zvO226t9xObsKSAmCLO7-wrapper" style={{borderRadius: '3px'}}>
<iframe data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-id="zvO226t9xObsKSAmCLO7" data-form-name="Application Form" data-height="794" data-iframe-resizer-initialized="true" data-initial-iframe-hidden="true" data-layout="{'id':'INLINE'}" data-layout-iframe-id="inline-zvO226t9xObsKSAmCLO7" data-trigger-type="alwaysShow" data-trigger-value="" data-unique-id-mapped="true" id="inline-zvO226t9xObsKSAmCLO7" scrolling="yes" src="https://api.leadconnectorhq.com/widget/form/zvO226t9xObsKSAmCLO7" style={{width: '100%', height: '100%', borderWidth: 'medium', borderStyle: 'none', borderColor: 'currentcolor', borderImage: 'initial', borderRadius: '3px', pointerEvents: 'none', left: '-9999px', position: 'absolute', overflow: 'auto'}} title="Application Form"></iframe>
</div>
</div>

</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center pointer-events-none" id="ai-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="ai-backdrop" onclick="closeOleyAI()"></div>
<div className="glass-card w-full max-w-lg m-4 rounded-3xl relative z-10 flex flex-col transform translate-y-8 opacity-0 transition-all duration-300 pointer-events-auto overflow-hidden shadow-[0_0_50px_rgba(45,212,191,0.1)]" id="ai-content">
<div className="flex justify-between items-center p-5 border-b border-white/[0.05] bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
<iconify-icon className="text-xl" icon="solar:cpu-setting-linear"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-teal-400 rounded-full border-2 border-[#030303]"></div>
</div>
<div>
<h3 className="text-white font-normal text-sm">Oley AI Assistant</h3>
<p className="text-xs text-teal-400 font-normal tracking-widest uppercase mt-0.5">
                Online • Ready
              </p>
</div>
</div>
<button className="w-8 h-8 rounded-full hover:bg-white/[0.05] flex items-center justify-center text-zinc-500 hover:text-white transition-colors" onclick="closeOleyAI()">
<iconify-icon className="text-2xl" icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="p-5 h-[400px] overflow-y-auto flex flex-col gap-4 bg-[#030303]/50 custom-scrollbar" id="chat-messages">
<div className="flex gap-3 max-w-[85%] chat-bubble">
<div className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/20 flex-shrink-0 flex items-center justify-center text-teal-400 mt-1">
<iconify-icon icon="solar:cpu-setting-linear"></iconify-icon>
</div>
<div className="bg-white/[0.03] border border-white/[0.05] p-3.5 rounded-2xl rounded-tl-sm text-sm text-zinc-300 font-light leading-relaxed">
              Initializing neural link... Welcome to Oley Power Marketing. I'm
              the automated intelligence agent. Are you looking to scale an
              existing business or architect a brand new revenue system?
            </div>
</div>
</div>
<div className="p-4 border-t border-white/[0.05] bg-[#030303]/80">
<form className="relative flex items-center" onsubmit="handleChatSubmit(event)">
<input autocomplete="off" className="w-full bg-white/[0.03] border border-white/[0.05] rounded-full pl-5 pr-12 py-3 text-sm text-white focus:outline-none focus:border-teal-500/50 transition-colors font-light placeholder:text-zinc-600" id="chat-input" placeholder="Enter command or question..." type="text"/>
<button className="absolute right-2 w-8 h-8 rounded-full bg-teal-500/20 hover:bg-teal-500/30 text-teal-400 flex items-center justify-center transition-colors" type="submit">
<iconify-icon className="text-lg" icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>



    </>
  );
}
