import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



document.addEventListener("DOMContentLoaded", () => {
window.scrollTo(0, 0);
const logoContainer = document.querySelector('.logo-center-init');
const mainBg = document.getElementById('main-background');
const guysImg = document.getElementById('hero-guys');
const heroText = document.getElementById('hero-text-container');
const bottomGradient = document.querySelector('.bg-gradient-to-t.entrance-fade-init');
const arrow = document.querySelector('.animate-bounce.entrance-fade-init');
setTimeout(() => {
if(logoContainer) {
logoContainer.classList.remove('logo-blinking');
logoContainer.classList.add('logo-move-animate');
}
setTimeout(() => {
if(mainBg) {
mainBg.classList.remove('entrance-bg-init');
mainBg.classList.add('entrance-bg-animate');
}
setTimeout(() => {
if(guysImg) {
guysImg.classList.remove('entrance-guys-init');
guysImg.classList.add('entrance-guys-animate');
}
setTimeout(() => {
if(heroText) {
heroText.classList.remove('entrance-text-init');
heroText.classList.add('entrance-text-animate');
}
if(bottomGradient) {
bottomGradient.classList.remove('entrance-fade-init');
bottomGradient.classList.add('entrance-fade-animate');
}
if(arrow) {
arrow.classList.remove('entrance-fade-init');
arrow.classList.add('entrance-fade-animate');
}
setTimeout(() => {
document.body.classList.remove('loading-locked');
if(mainBg) mainBg.classList.remove('entrance-bg-animate');
if(guysImg) guysImg.classList.remove('entrance-guys-animate');
if(heroText) heroText.classList.remove('entrance-text-animate');
if(logoContainer) logoContainer.classList.remove('logo-center-init', 'logo-move-animate');
if(bottomGradient) bottomGradient.classList.remove('entrance-fade-animate');
if(arrow) arrow.classList.remove('entrance-fade-animate');
window.dispatchEvent(new Event('scroll'));
}, 1000);
}, 1000);
}, 1000);
}, 1000);
}, 3000);
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {

          // Hero Scroll Animations
          const scrollContainer = document.getElementById('hero-scroll-container');
          const mainBg = document.getElementById('main-background');
          const textContainer = document.getElementById('hero-text-container');
          const guysImg = document.getElementById('hero-guys');

          if (scrollContainer && mainBg && textContainer && guysImg) {
              window.addEventListener('scroll', () => {
                  requestAnimationFrame(() => {
                      const scrollY = window.scrollY;
                      const heroHeight = window.innerHeight;

                      let progress = scrollY / heroHeight;
                      if (progress < 0) progress = 0;

                      // Background parallax: moves up
                      mainBg.style.transform = `translate3d(0, -${scrollY * 0.4}px, 0)`;

                      // Text: Zoom in and fade out
                      const textScale = 1 + (progress * 2);
                      const textOpacity = 1 - (progress * 1.5);
                      textContainer.style.transform = `scale(${textScale})`;
                      textContainer.style.opacity = Math.max(0, textOpacity);

                      // Guys: Slide down instead of zoom
                      const guysTranslateY = scrollY * 0.6;
                      guysImg.style.transform = `translate3d(-50%, ${guysTranslateY}px, 0)`;
                  });
              }, { passive: true });
          }

          // Reveal Animations Configuration
          const observerOptions = {
              root: null,
              rootMargin: '0px 0px -50px 0px',
              threshold: 0.15
          };

          // Get timeline reveals to exclude them from the default observer
          const timelineContainer = document.getElementById('steps-2-to-5-container');
          const timelineReveals = timelineContainer ? Array.from(timelineContainer.querySelectorAll('.reveal-item')) : [];

          const observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('is-visible');
                      observer.unobserve(entry.target);
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal-item').forEach(item => {
              // Only observe elements that are NOT part of the dynamic timeline scroll
              if (!timelineReveals.includes(item)) {
                  observer.observe(item);
              }
          });

          // Timeline Scroll Line & Dynamic Reveal Logic
          const lineWrapper = document.getElementById('timeline-line-wrapper');
          const scrollLine = document.getElementById('scroll-connecting-line');
          const steps = document.querySelectorAll('.step-container');
          let timelineTicking = false;

          if (timelineContainer && lineWrapper && scrollLine && steps.length > 0) {
              const updateLineAndSteps = () => {
                  const firstMarker = steps[0].querySelector('.step-marker');
                  const lastMarker = steps[steps.length - 1].querySelector('.step-marker');
                  const lastContent = lastMarker ? lastMarker.parentElement : null; // Parent holds the text of Step 5

                  if (!firstMarker || !lastMarker || !lastContent) {
                      timelineTicking = false;
                      return;
                  }

                  const containerRect = timelineContainer.getBoundingClientRect();
                  const firstMarkerRect = firstMarker.getBoundingClientRect();
                  const lastContentRect = lastContent.getBoundingClientRect();

                  // Position the wrapper perfectly starting exactly beside the STEP 2 marker
                  const wrapperTop = firstMarkerRect.top - containerRect.top;
                  lineWrapper.style.top = `${wrapperTop}px`;

                  // Constrain line Wrapper Height so it ends exactly at the bottom of the Step 5 content text
                  const wrapperHeight = lastContentRect.bottom - firstMarkerRect.top;
                  lineWrapper.style.height = `${wrapperHeight}px`;
                  lineWrapper.style.bottom = 'auto';

                  // Trigger point for the line's "drawing head" on the viewport
                  const viewportTriggerY = window.innerHeight * 0.6;

                  // Calculate how far down the line should be drawn
                  let requiredHeight = viewportTriggerY - firstMarkerRect.top;
                  const maxLineHeight = wrapperHeight;

                  if (requiredHeight < 0) requiredHeight = 0;
                  if (requiredHeight > maxLineHeight) requiredHeight = maxLineHeight;

                  scrollLine.style.height = `${requiredHeight}px`;

                  // Determine the absolute vertical position of the line's tip on the screen
                  const lineTipScreenY = firstMarkerRect.top + requiredHeight;

                  // Reveal steps exactly when the line tip hits their markers
                  steps.forEach((step) => {
                      const marker = step.querySelector('.step-marker');
                      if (marker) {
                          const markerRect = marker.getBoundingClientRect();
                          // Trigger entrance if the green line has started drawing and reached the text
                          if (requiredHeight > 0 && lineTipScreenY >= markerRect.top) {
                              const reveals = step.querySelectorAll('.reveal-item');
                              reveals.forEach(r => r.classList.add('is-visible'));
                          }
                      }
                  });

                  timelineTicking = false;
              };

              window.addEventListener('scroll', () => {
                  if (!timelineTicking) {
                      window.requestAnimationFrame(updateLineAndSteps);
                      timelineTicking = true;
                  }
              }, { passive: true });

              window.addEventListener('resize', updateLineAndSteps);

              // Allow a small delay for fonts and layout to finish rendering before first calculation
              setTimeout(updateLineAndSteps, 100);
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative w-full h-[70vh] md:h-[200vh] bg-[#000000]" id="hero-scroll-container">
<div className="sticky top-0 w-full h-[70vh] md:h-screen overflow-hidden flex flex-col items-center justify-center">

<div className="bg-center will-change-transform opacity-70 w-full h-[150%] bg-cover -z-20 absolute top-0 left-0 entrance-bg-init" id="main-background" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2c6fcccf-0b87-400a-ad54-0e92a5cc8908_3840w.png\')'}}></div>

<div className="absolute top-8 left-0 w-full flex justify-center z-30 logo-center-init logo-blinking">
<img alt="Hero's Collective Logo" className="h-16" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2430b552-f2c5-483e-a9ee-629ff40e323c_320w.png"/>
</div>

<div className="flex flex-col will-change-transform origin-center text-center w-full max-w-4xl z-10 mt-[-5vh] mb-24 pr-6 pl-6 entrance-text-init" id="hero-text-container">
<h1 className="uppercase md:text-6xl lg:text-9xl text-4xl font-extrabold text-white tracking-tight pb-6">
            HERO'S COLLECTIVE!
          </h1>
<p className="text-base md:text-lg text-zinc-300">
            A community for Filipino men centered around purpose.
          </p>
</div>

<img alt="Guys on mountain" className="-translate-x-1/2 object-bottom will-change-transform origin-bottom w-full object-contain z-20 absolute -bottom-[50px] left-1/2 h-[50vh] md:h-[65vh] entrance-guys-init" id="hero-guys" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0d8acc3-0466-4a74-98bc-d864a75a0268_3840w.png"/>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000000] to-transparent z-30 pointer-events-none entrance-fade-init"></div>

<div className="absolute bottom-12 w-full flex justify-center z-30 animate-bounce entrance-fade-init">
<svg className="lucide lucide-arrow-down text-zinc-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6 relative">
<div className="text-center max-w-4xl mr-auto ml-auto">
<h2 className="md:text-4xl uppercase text-2xl font-medium text-white tracking-tight mb-6 reveal-item">
          WE SEE YOUR DESIRE FOR PURPOSE!
        </h2>
<p className="md:text-lg leading-relaxed reveal-item text-base text-slate-50 max-w-2xl mx-auto" style={{transitionDelay: '100ms'}}>
          And we’re here to make that journey more alive, purposeful, and
          connecting - as Filipino men together.
        </p>

<div className="mt-16 aspect-video bg-[#050505] border border-zinc-800/80 rounded-2xl flex items-center justify-center relative overflow-hidden group glow-purple cursor-pointer transition-all duration-500 hover:border-[#3A07F8]/50 reveal-item" style={{transitionDelay: '200ms'}}>
<div className="absolute top-0 right-0 bottom-0 left-0 z-20 bg-[#050505]">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full border-0" frameborder="0" src="https://www.youtube.com/embed/2bi_vO8PASE?si=UVtNPhxovy8ruT3y" title="YouTube video player"></iframe>
</div>
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-white transition-colors duration-300">
<svg className="lucide lucide-play w-6 h-6 text-white group-hover:text-black transition-colors duration-300 ml-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="mb-16 md:mb-24 text-center md:text-left max-w-2xl">
<h2 className="text-2xl md:text-3xl font-medium uppercase tracking-tight text-white mb-6 reveal-item">
            THE COMMUNITY: WHAT DOES IT ENTAIL!
          </h2>
<p className="leading-relaxed reveal-item text-base text-slate-50" style={{transitionDelay: '100ms'}}>
            Hero’s collective consists of multiple elements that collectively
            help Filipino men pursue their purpose.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6">

<div className="md:p-8 hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col hover:border-[#19B75C]/50 hover:-translate-y-2 reveal-item bg-[#050505] h-full border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{transitionDelay: '50ms'}}>
<svg className="lucide lucide-sprout mb-4 w-[36px] h-[36px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '36px', height: '36px', color: 'rgb(25, 183, 92)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 20h10"></path>
<path d="M10 20c5.5-2.5.8-6.4 3-10"></path>
<path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"></path>
<path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"></path>
</svg>
<h3 className="uppercase text-sm font-medium text-white mb-4">
              1. THE PLAYGROUND.
            </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Want to create what is truly in alignment with your purpose?
            </p>
<p className="text-sm text-zinc-500 leading-relaxed mt-auto">
              Join a purpose-creation incubator to help you bring forward what
              is meant to come through you.
            </p>
</div>

<div className="md:p-8 hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col hover:border-[#3A07F8]/50 hover:-translate-y-2 reveal-item bg-[#050505] h-full border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{transitionDelay: '200ms'}}>
<svg className="lucide lucide-users mb-4 w-[36px] h-[36px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '36px', height: '36px', color: 'rgb(58, 7, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
<h3 className="uppercase text-sm font-medium text-white mb-4">
              2. THE CONNECTION!
            </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Feeling overwhelmed, stressed or not like yourself while pursuing
              your purpose?
            </p>
<p className="text-sm text-zinc-500 leading-relaxed mt-auto">
              Join a men’s circle to receive support from your peers who face
              similar challenges.
            </p>
</div>

<div className="md:p-8 hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col hover:border-[#19B75C]/50 hover:-translate-y-2 reveal-item bg-[#050505] h-full border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{transitionDelay: '300ms'}}>
<svg className="lucide lucide-bird mb-4 w-[36px] h-[36px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '36px', height: '36px', color: 'rgb(25, 183, 92)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h.01"></path>
<path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"></path>
<path d="m20 7 2 .5-2 .5"></path>
<path d="M10 18v3"></path>
<path d="M14 17.75V21"></path>
<path d="M7 18a6 6 0 0 0 3.84-10.61"></path>
</svg>
<h3 className="uppercase text-sm font-medium text-white mb-4">
              3. THE FREEDOM!
            </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Feeling stuck after countless attempts to better yourself or
              create along your purpose?
            </p>
<p className="text-sm text-zinc-500 leading-relaxed mt-auto">
              Join a systemic constellation workshop to help you return to inner
              peace and freedom.
            </p>
</div>

<div className="md:p-8 hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col hover:border-[#3A07F8]/50 hover:-translate-y-2 reveal-item bg-[#050505] h-full border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{transitionDelay: '400ms'}}>
<svg className="lucide lucide-globe mb-4 w-[36px] h-[36px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '36px', height: '36px', color: 'rgb(58, 7, 248)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path className="" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
<h3 className="uppercase text-sm font-medium text-white mb-4">
              4. THE COMMUNAL!
            </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Happy where you are and want to enjoy the company of others who
              feel, understand and know you?
            </p>
<p className="text-sm text-zinc-500 leading-relaxed mt-auto">
              Join an online open space to connect to others freely.
            </p>
</div>

<div className="md:p-8 hover:bg-[#0a0a0a] transition-all duration-500 flex flex-col hover:border-[#19B75C]/50 hover:-translate-y-2 reveal-item bg-[#050505] h-full border-zinc-800/60 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{transitionDelay: '500ms'}}>
<svg className="lucide lucide-mountain mb-4 w-[36px] h-[36px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '36px', height: '36px', color: 'rgb(25, 183, 92)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
</svg>
<h3 className="uppercase text-sm font-medium text-white mb-4">
              5. THE ENJOYMENT!
            </h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4">
              Wanting a break from purpose?
            </p>
<p className="text-sm text-zinc-500 leading-relaxed mt-auto">
              Join the enjoyment for hikes, international trips and other events
              for the purpose of joy - together.
            </p>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-[#000000] border-zinc-900/50 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="mr-auto ml-auto">
<div className="md:mb-24 text-center mb-16">
<h2 className="md:text-3xl uppercase reveal-item text-2xl font-medium text-white tracking-tight mb-6">
            THE JOURNEY: HOW DO I JOIN THE COLLECTIVE!
          </h2>
<p className="leading-relaxed text-base text-zinc-400 reveal-item" style={{transitionDelay: '100ms'}}>
            We want you to be here with us.
            <br/>
            Yet, there is a journey everyone follows.
          </p>
</div>
<div className="flex flex-col gap-x-6 gap-y-6">

<div className="md:py-20 flex flex-col md:flex-row md:gap-16 w-full max-w-7xl border-zinc-900 border-b mr-auto ml-auto pb-16 relative gap-x-8 gap-y-8 items-start justify-start">
<div className="md:top-20 bg-[#19B75C] w-1 h-24 rounded-r-full absolute top-16 left-0 shadow-[0_0_12px_rgba(25,183,92,0.6)]"></div>
<div className="md:w-5/12 shrink-0 md:pl-8 reveal-item pl-8 gap-x-8 gap-y-8 justify-start">
<span className="uppercase block text-sm font-medium text-[#19B75C] tracking-widest mb-3">
                STEP 1!
              </span>
<h3 className="md:text-4xl uppercase text-3xl font-medium text-white tracking-tight mb-4">
                JOIN AN HC EVENT!
              </h3>
<p className="md:text-lg leading-relaxed text-base text-zinc-400">
                Join one of our events &amp; explore what it is.
              </p>
</div>
</div>

<div className="flex flex-col md:flex-row md:gap-16 w-full mr-auto ml-auto pt-2 pb-8 relative gap-x-8 gap-y-8 justify-center">
<div className="md:px-0 overflow-hidden w-full max-w-7xl pr-6 pl-6 relative gap-x-8 gap-y-8">
<div className="flex md:pr-0 reveal-item mb-8 pr-6 items-center justify-between">
<h4 className="text-sm font-normal uppercase tracking-widest text-zinc-500">
                  LATEST ENTRIES
                </h4>
<div className="flex items-center gap-2">
<button aria-label="Previous" className="w-8 h-8 rounded-full border border-zinc-800 bg-[#050505] flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer">
<svg className="lucide lucide-arrow-left" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<button aria-label="Next" className="w-8 h-8 rounded-full border border-zinc-800 bg-[#050505] flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors cursor-pointer">
<svg className="lucide lucide-arrow-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m13 19 7-7-7-7"></path>
</svg>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar md:pr-0 w-full pr-0 pb-12 pl-0 gap-x-6 gap-y-6" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="snap-start shrink-0 sm:w-[400px] flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:border-zinc-700 group reveal-item bg-[#050505] w-[85vw] border-zinc-800/80 border rounded-2xl relative shadow-lg">
<div className="sm:h-56 overflow-hidden w-full h-48 border-zinc-800/80 border-b relative">
<div className="group-hover:bg-transparent transition-colors duration-500 bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Holding our reputation" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b39d491-6ea9-4c91-9439-e3f76f869d43_800w.jpg"/>
</div>
<div className="sm:p-8 flex flex-col flex-grow z-10 h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex text-xs uppercase text-zinc-500 tracking-widest font-sans border-zinc-800/80 border-b mb-6 pt-0 pb-6 items-end justify-between">
<div className="">
<span className="block text-zinc-300 mb-1">
                          april 15th – wednesday
                        </span>
<span className="block">time: 6:30–9:00 pm</span>
</div>
<span className="text-[#19B75C] bg-zinc-900 border-[#19B75C] border rounded pt-1 pr-2 pb-1 pl-2">
                        online
                      </span>
</div>
<h4 className="md:text-xl leading-[1.15] uppercase text-lg font-medium text-white mb-6 tracking-tight">
                      HOLDING OUR REPUTATION.
                      <br/>
                      THE COST OF CONSTANT PURSUIT.
                    </h4>
<div className="leading-[1.8] flex-grow text-base text-zinc-400 tracking-wide space-y-4">
                      Yet, a quiet stillness follows your achievement.
                      <br/>
                      a feeling of it not being enough.
                      <p className="">
                        You decide to move on &amp; chase the next.
                      </p>
<p className="">
                        Sounds familiar?
                        <br/>
                        what if there's pain waiting to be explored?
                      </p>
</div>
<button className="text-sm uppercase font-medium text-black tracking-widest bg-white w-full rounded mt-6 pt-3 pb-3 group relative overflow-hidden">
<span className="group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] bg-[#19B75C] absolute top-0 right-0 bottom-0 left-0 translate-y-full"></span>
<span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                        FIND OUT MORE
                      </span>
</button>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] sm:w-[400px] bg-[#050505] rounded-2xl flex flex-col relative border border-zinc-800/80 overflow-hidden shadow-lg transition-transform duration-500 hover:-translate-y-1 hover:border-zinc-700 group reveal-item" style={{transitionDelay: '100ms'}}>
<div className="w-full h-48 sm:h-56 overflow-hidden border-b border-zinc-800/80 relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
<img alt="The hope for impact" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ae3fd3c-b15e-421c-8298-1deb0d6432f4_800w.jpg"/>
</div>
<div className="sm:p-8 flex flex-col flex-grow z-10 h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex text-xs uppercase text-zinc-500 tracking-widest font-sans border-zinc-800/80 border-b mb-6 pb-6 items-end justify-between">
<div className="">
<span className="block mb-1 text-zinc-300">
                          may 13th – wednesday
                        </span>
<span className="block">time: 6:30–9:00 pm</span>
</div>
<span className="text-[#19B75C] bg-zinc-900 border-[#19B75C] border rounded px-2 py-1">
                        online
                      </span>
</div>
<h4 className="md:text-xl leading-[1.15] uppercase text-lg font-medium text-white mb-6 tracking-tight">
                      THE HOPE FOR IMPACT.
                      <br/>
                      A SILENT LONGING FOR PURPOSE.
                    </h4>
<div className="leading-[1.8] flex-grow text-base text-zinc-400 tracking-wide font-sans space-y-4">
<p className="">
                        The hope for meaning.
                        <br/>
                        wanting to be impactful.
                        <br/>
                        a constant desire to be of importance.
                      </p>
<p className="">
                        It's real.
                        <br/>
                        that desire is there &amp; it is to be proud of.
                      </p>
<p className="">
                        but what if there's something deeper within you calling?
                        <br/>
                        a pain that is hiding.
                      </p>
</div>
</div>
</div>

<div className="snap-start shrink-0 sm:w-[400px] flex flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-1 hover:border-zinc-700 group reveal-item bg-[#050505] w-[85vw] border-zinc-800/80 border rounded-2xl relative shadow-lg" style={{transitionDelay: '200ms'}}>
<div className="w-full h-48 sm:h-56 overflow-hidden border-b border-zinc-800/80 relative">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
<img alt="The constant state of improvement" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80edcac9-d4fc-486e-8268-8135c0b894c1_800w.jpg"/>
</div>
<div className="sm:p-8 flex flex-col flex-grow z-10 h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex text-xs uppercase text-zinc-500 tracking-widest font-sans border-zinc-800/80 border-t mb-6 pb-6 items-end justify-between">
<div className="">
<span className="block mb-1 text-zinc-300">
                          june 24th – wednesday
                        </span>
<span className="block">time: 6:30–9:00 pm</span>
</div>
<span className="text-[#19B75C] bg-zinc-900 border-[#19B75C] border rounded pt-1 pr-2 pb-1 pl-2">
                        online
                      </span>
</div>
<h4 className="md:text-xl leading-[1.15] uppercase text-lg font-medium text-white mb-6 tracking-tight">
                      THE CONSTANT STATE OF IMPROVEMENT.
                      <br/>
                      THE SUBTLE DESIRE TO BE BETTER EVERY DAY.
                    </h4>
<div className="text-base text-zinc-400 leading-[1.8] tracking-wide space-y-4 flex-grow font-sans">
<p className="">
                        Taking extra classes.
                        <br/>
                        reading self-help books.
                        <br/>
                        optimizing routines.
                      </p>
<p className="">
                        All for us to be ‘better’ or more efficient.
                      </p>
<p className="">
                        What if there's a deeper pain in you hiding?
                        <br/>
                        something driving this constant need to improve.
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full max-w-7xl mx-auto flex flex-col" id="steps-2-to-5-container">

<div className="absolute left-0 w-1 z-0" id="timeline-line-wrapper" style={{top: '134px', height: '2746px', bottom: 'auto'}}>
<div className="absolute top-0 left-0 w-full bg-[#19B75C] rounded-r-full shadow-[0_0_12px_rgba(25,183,92,0.6)] will-change-[height]" id="scroll-connecting-line" style={{height: '0px'}}></div>
</div>

<div className="step-container md:py-20 flex flex-col md:flex-row md:gap-16 w-full h-screen border-zinc-900 pt-20 pb-20 relative gap-x-8 gap-y-8 items-center justify-center">
<div className="md:w-5/12 shrink-0 md:pl-8 reveal-item pl-6 ![translate:-50px_0] [&amp;.is-visible]:![translate:0_0]">
<span className="step-marker uppercase block text-sm font-medium text-[#19B75C] tracking-widest mb-3">
                  STEP 2!
                </span>
<h3 className="text-3xl md:text-4xl font-medium uppercase tracking-tight text-white mb-4">
                  MEET WITH FOUNDER RYAN FOR AN INTAKE CONVERSATION!
                </h3>
<p className="md:text-lg leading-relaxed text-base text-zinc-400">
                  Discover whether the inner hero program and the collective
                  truly aligns with your potential &amp; what you’re searching
                  for in life.
                </p>
</div>
<div className="md:w-7/12 md:px-0 reveal-item w-full pr-6 pl-6 ![translate:50px_0] [&amp;.is-visible]:![translate:0_0]" style={{transitionDelay: '500ms'}}>
<div className="md:h-[800px] overflow-hidden group relative">
<div className="group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Intake Conversation" className="transition-transform duration-700 group-hover:scale-105 h-full object-cover rounded-2xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebf567c1-28d4-431d-8dc2-d55328b0d011_1600w.png"/>
</div>
</div>
</div>

<div className="step-container md:py-20 flex flex-col md:flex-row md:gap-16 w-full h-screen border-zinc-900 pt-16 pb-16 relative gap-x-8 gap-y-8 items-center">
<div className="md:w-5/12 shrink-0 pl-6 md:pl-8 reveal-item ![translate:-50px_0] [&amp;.is-visible]:![translate:0_0]">
<span className="step-marker uppercase block text-sm font-medium text-[#19B75C] tracking-widest mb-3">
                  STEP 3!
                </span>
<h3 className="md:text-4xl uppercase text-3xl font-medium text-white tracking-tight mb-4">
                  JOIN THE INNER HERO PROGRAM.
                </h3>
<p className="md:text-lg leading-relaxed text-base text-zinc-400">
                  An intensive 1.5 year program (including breaks) that help you
                  return to your inner purpose and gifts with the company of 7
                  other Filipino Men on the same journey as you.
                </p>
</div>
<div className="md:w-7/12 md:px-0 reveal-item w-full pr-6 pl-6 ![translate:50px_0] [&amp;.is-visible]:![translate:0_0]" style={{transitionDelay: '500ms'}}>
<div className="md:h-[800px] overflow-hidden group relative">
<div className="group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Intake Conversation" className="transition-transform duration-700 group-hover:scale-105 h-full object-cover rounded-2xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c5872636-36af-43dc-a9c1-8a760cc54841_1600w.jpg"/>
</div>
</div>
</div>

<div className="step-container flex flex-col md:flex-row md:gap-16 md:pt-20 w-full h-screen border-zinc-900 pt-16 pb-16 relative gap-x-8 gap-y-8 items-center">
<div className="md:w-5/12 shrink-0 pl-6 md:pl-8 reveal-item ![translate:-50px_0] [&amp;.is-visible]:![translate:0_0]">
<span className="step-marker uppercase block text-sm font-medium text-[#19B75C] tracking-widest mb-3">
                  STEP 4!
                </span>
<h3 className="md:text-4xl uppercase text-3xl font-medium text-white tracking-tight mb-4">
                  CELEBRATE COMPLETION.
                </h3>
<p className="md:text-lg leading-relaxed text-base text-zinc-400">
                  Come together with existing and soon-to-be members of the
                  collective to celebrate you joining the collective for life!
                </p>
</div>
<div className="md:w-7/12 md:px-0 reveal-item w-full pr-6 pl-6 ![translate:50px_0] [&amp;.is-visible]:![translate:0_0]" style={{transitionDelay: '500ms'}}>
<div className="md:h-[800px] overflow-hidden group relative">
<div className="group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Intake Conversation" className="transition-transform duration-700 group-hover:scale-105 h-full object-cover rounded-2xl relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74c79a36-0ad9-4866-a6e3-bb13fa5190bb_1600w.jpg"/>
</div>
</div>
</div>

<div className="step-container md:py-20 flex flex-col md:flex-row md:gap-16 w-full h-screen border-zinc-900 pt-16 pb-16 relative items-center">
<div className="md:w-5/12 shrink-0 md:pl-8 pl-6 reveal-item ![translate:-50px_0] [&amp;.is-visible]:![translate:0_0]">
<span className="step-marker uppercase block text-sm font-medium text-[#19B75C] tracking-widest mb-3">
                  STEP 5!
                </span>
<h3 className="md:text-4xl uppercase text-3xl font-medium text-white tracking-tight mb-4">
                  BE WARMLY WELCOMED INTO THE COLLECTIVE.
                </h3>
<p className="md:text-lg leading-relaxed text-base text-zinc-400">
                  A space you can always return to. Whatever you’re facing along
                  your journey of purpose. And beyond. the connection holds.
                </p>
</div>
<div className="md:w-7/12 w-full pr-6 pl-6 md:px-0 reveal-item ![translate:50px_0] [&amp;.is-visible]:![translate:0_0]" style={{transitionDelay: '500ms'}}>
<div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-zinc-800/80 group">
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
<img alt="Intake Conversation" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1265e29-d043-4e34-b928-8322c1cafc3f_1600w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="flex flex-col bg-[#000000] border-zinc-900 border-t pt-24 pr-6 pb-24 pl-6 items-center justify-center">
<a className="hover:opacity-75 transition-opacity reveal-item mb-8" href="#">
<img alt="Hero's Collective Logo" className="w-auto h-24" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2430b552-f2c5-483e-a9ee-629ff40e323c_320w.png"/>
</a>
<div className="text-center mb-8 reveal-item" style={{transitionDelay: '100ms'}}>
<p className="text-xl text-zinc-50 mb-1">
          Be welcomed, ready when you are.
        </p>
<p className="text-xl text-zinc-50">Follow us on our socials.</p>
</div>
<div className="flex reveal-item gap-x-6 items-center gap-y-6" style={{transitionDelay: '200ms'}}>
<a className="hover:text-white transition-colors duration-300 text-zinc-500" href="https://www.youtube.com/@HEROs-COLLECTIVE" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-2xl" height="24" icon="simple-icons:youtube" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</a>
<a className="hover:text-white transition-colors duration-300 text-zinc-500" href="https://www.tiktok.com/@heroscollective" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-2xl" height="24" icon="simple-icons:tiktok" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</a>
<a className="hover:text-white transition-colors duration-300 text-zinc-500" href="https://www.instagram.com/hero.s_collective/" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-2xl" height="24" icon="simple-icons:instagram" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon>
</a>
</div>
</footer>



    </>
  );
}
