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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      UnicornStudio.init();
    


        function toggleMobileMenu() {
          var menu = document.getElementById('mobile-menu');
          var btn = document.getElementById('mobile-menu-btn');
          var burger = document.getElementById('burger-icon');
          var close = document.getElementById('close-icon');
          var isOpen = !menu.classList.contains('hidden');
          if (isOpen) {
            menu.classList.add('hidden');
            burger.classList.remove('hidden');
            close.classList.add('hidden');
            btn.setAttribute('aria-expanded', 'false');
          } else {
            menu.classList.remove('hidden');
            burger.classList.add('hidden');
            close.classList.remove('hidden');
            btn.setAttribute('aria-expanded', 'true');
          }
        }
      


        (function() {
          function initWhySection() {
            if (typeof lucide !== 'undefined') {
              lucide.createIcons();
            } else {
              setTimeout(initWhySection, 100);
            }
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initWhySection);
          } else {
            initWhySection();
          }
        })();
      


        (function() {
          // Set correct initial state immediately
          var contentF = document.getElementById('content-freelancer');
          var contentC = document.getElementById('content-client');
          if (contentF) {
            contentF.style.opacity = '1';
            contentF.style.transform = 'translateY(0)';
            contentF.style.pointerEvents = 'auto';
            contentF.style.visibility = 'visible';
          }
          if (contentC) {
            contentC.style.opacity = '0';
            contentC.style.transform = 'translateY(24px)';
            contentC.style.pointerEvents = 'none';
            contentC.style.visibility = 'hidden';
          }

          setTimeout(function() {
            if (typeof lucide !== 'undefined') lucide.createIcons();
          }, 50);
        })();

        function switchHowItWorksTab(tab) {
          var btnF = document.getElementById('tab-freelancer');
          var btnC = document.getElementById('tab-client');
          var hl = document.getElementById('tab-highlight');
          var contentF = document.getElementById('content-freelancer');
          var contentC = document.getElementById('content-client');

          if (tab === 'freelancer') {
            btnF.classList.add('text-white');
            btnF.classList.remove('text-zinc-400', 'hover:text-zinc-200');
            btnC.classList.add('text-zinc-400', 'hover:text-zinc-200');
            btnC.classList.remove('text-white');
            hl.style.transform = 'translateX(0)';

            contentC.style.opacity = '0';
            contentC.style.transform = 'translateY(24px)';
            contentC.style.pointerEvents = 'none';
            contentC.style.visibility = 'hidden';

            contentF.style.opacity = '1';
            contentF.style.transform = 'translateY(0)';
            contentF.style.pointerEvents = 'auto';
            contentF.style.visibility = 'visible';
          } else {
            btnC.classList.add('text-white');
            btnC.classList.remove('text-zinc-400', 'hover:text-zinc-200');
            btnF.classList.add('text-zinc-400', 'hover:text-zinc-200');
            btnF.classList.remove('text-white');
            hl.style.transform = 'translateX(100%)';

            contentF.style.opacity = '0';
            contentF.style.transform = 'translateY(24px)';
            contentF.style.pointerEvents = 'none';
            contentF.style.visibility = 'hidden';

            contentC.style.opacity = '1';
            contentC.style.transform = 'translateY(0)';
            contentC.style.pointerEvents = 'auto';
            contentC.style.visibility = 'visible';
          }
        }
      


        (function() {
          function initFaqFlashlight() {
            var cards = document.querySelectorAll('#faq .faq-card');
            cards.forEach(function(card) {
              card.addEventListener('mousemove', function(e) {
                var rect = card.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var xPct = (x / rect.width) * 100;
                var yPct = (y / rect.height) * 100;
                card.style.setProperty('--mouse-x', xPct + '%');
                card.style.setProperty('--mouse-y', yPct + '%');
                var glow = card.querySelector('.faq-glow');
                if (glow) {
                  glow.style.background = 'radial-gradient(380px circle at ' + xPct + '% ' + yPct + '%, rgba(34,197,94,0.13), rgba(74,222,128,0.05) 45%, transparent 70%)';
                  glow.style.opacity = '1';
                  glow.style.boxShadow = '0 0 60px 0 rgba(34,197,94,0.07) inset';
                }
              });
              card.addEventListener('mouseleave', function() {
                card.style.setProperty('--mouse-x', '50%');
                card.style.setProperty('--mouse-y', '50%');
                var glow = card.querySelector('.faq-glow');
                if (glow) {
                  glow.style.opacity = '0';
                }
              });
              card.addEventListener('mouseenter', function(e) {
                var rect = card.getBoundingClientRect();
                var x = e.clientX - rect.left;
                var y = e.clientY - rect.top;
                var xPct = (x / rect.width) * 100;
                var yPct = (y / rect.height) * 100;
                card.style.setProperty('--mouse-x', xPct + '%');
                card.style.setProperty('--mouse-y', yPct + '%');
              });
            });
          }
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initFaqFlashlight);
          } else {
            initFaqFlashlight();
          }
        })();
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 opacity-50 brightness-200 fixed" data-alpha-mask="79" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 79%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 79%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="EET25BiXxR2StNXZvAzF"></div>

</div>
</div>
<div data-us-project="PlkhmBU6W8nQoH86qVhH" style={{width: '100%', height: '100%'}}></div>

<link href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist" rel="stylesheet"/>
<style className="" id="all-fonts-style-font-geist">
      .font-geist { font-family: 'Geist', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-roboto" rel="stylesheet"/>
<style id="all-fonts-style-font-roboto">
      .font-roboto { font-family: 'Roboto', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-montserrat" rel="stylesheet"/>
<style id="all-fonts-style-font-montserrat">
      .font-montserrat { font-family: 'Montserrat', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-poppins" rel="stylesheet"/>
<style id="all-fonts-style-font-poppins">
      .font-poppins { font-family: 'Poppins', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;900&amp;display=swap" id="all-fonts-link-font-playfair" rel="stylesheet"/>
<style id="all-fonts-style-font-playfair">
      .font-playfair { font-family: 'Playfair Display', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-instrument-serif" rel="stylesheet"/>
<style id="all-fonts-style-font-instrument-serif">
      .font-instrument-serif { font-family: 'Instrument Serif', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&amp;display=swap" id="all-fonts-link-font-merriweather" rel="stylesheet"/>
<style id="all-fonts-style-font-merriweather">
      .font-merriweather { font-family: 'Merriweather', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-bricolage" rel="stylesheet"/>
<style id="all-fonts-style-font-bricolage">
      .font-bricolage { font-family: 'Bricolage Grotesque', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-jakarta" rel="stylesheet"/>
<style id="all-fonts-style-font-jakarta">
      .font-jakarta { font-family: 'Plus Jakarta Sans', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-manrope" rel="stylesheet"/>
<style id="all-fonts-style-font-manrope">
      .font-manrope { font-family: 'Manrope', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-space-grotesk" rel="stylesheet"/>
<style id="all-fonts-style-font-space-grotesk">
      .font-space-grotesk { font-family: 'Space Grotesk', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-work-sans" rel="stylesheet"/>
<style id="all-fonts-style-font-work-sans">
      .font-work-sans { font-family: 'Work Sans', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@400;700&amp;display=swap" id="all-fonts-link-font-pt-serif" rel="stylesheet"/>
<style id="all-fonts-style-font-pt-serif">
      .font-pt-serif { font-family: 'PT Serif', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-geist-mono" rel="stylesheet"/>
<style id="all-fonts-style-font-geist-mono">
      .font-geist-mono { font-family: 'Geist Mono', monospace !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&amp;display=swap" id="all-fonts-link-font-space-mono" rel="stylesheet"/>
<style id="all-fonts-style-font-space-mono">
      .font-space-mono { font-family: 'Space Mono', monospace !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-quicksand" rel="stylesheet"/>
<style id="all-fonts-style-font-quicksand">
      .font-quicksand { font-family: 'Quicksand', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&amp;display=swap" id="all-fonts-link-font-nunito" rel="stylesheet"/>
<style id="all-fonts-style-font-nunito">
      .font-nunito { font-family: 'Nunito', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Newsreader:opsz,wght@6..72,400..800&amp;display=swap" id="all-fonts-link-font-newsreader" rel="stylesheet"/>
<style id="all-fonts-style-font-newsreader">
      .font-newsreader { font-family: 'Newsreader', serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:wght@400;500;600;700&amp;display=swap" id="all-fonts-link-font-google-sans-flex" rel="stylesheet"/>
<style id="all-fonts-style-font-google-sans-flex">
      .font-google-sans-flex { font-family: 'Google Sans Flex', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-oswald" rel="stylesheet"/>
<style id="all-fonts-style-font-oswald">
      .font-oswald { font-family: 'Oswald', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-dm-sans" rel="stylesheet"/>
<style id="all-fonts-style-font-dm-sans">
      .font-dm-sans { font-family: 'DM Sans', sans-serif !important; }
    </style>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&amp;display=swap" id="all-fonts-link-font-cormorant" rel="stylesheet"/>
<style id="all-fonts-style-font-cormorant">
      .font-cormorant { font-family: 'Cormorant Garamond', serif !important; }
    </style>

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
<div className="absolute top-0 w-[800px] h-[500px] blur-[150px] rounded-full mix-blend-screen bg-green-600/10"></div>
<div className="absolute top-[-20%] left-[-10%] w-[500px] h-[400px] blur-[100px] rounded-full bg-zinc-800/20"></div>
</div>

<header className="relative z-50 w-full border-b backdrop-blur-md border-white/5 bg-zinc-950/50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 text-lg font-medium text-white tracking-tighter font-sans" href="/home">
          Kodash
        </a>

<nav className="hidden gap-8 md:flex items-center text-green-50">
<a className="transition-colors hover:text-zinc-100 text-sm font-medium text-zinc-50 tracking-tighter font-sans" href="/pricing">
            Pricing
          </a>
<a className="transition-colors hover:text-zinc-100 text-sm font-medium text-zinc-50 tracking-tighter font-sans" href="/blog">
            Blog
          </a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="transition-colors hover:text-white text-sm font-medium text-zinc-300 tracking-tighter font-sans" href="/login">
            Log in
          </a>
<a className="inline-flex items-center justify-center uppercase transition-all duration-150 active:translate-y-[4px] active:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(34,197,94,0.25),0_0px_0_rgb(21,128,61),0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zinc-950 hover:brightness-110 text-sm font-medium text-green-400 tracking-tighter font-sans bg-zinc-800 h-9 border-zinc-700/50 border rounded-full pr-4 pl-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(34,197,94,0.25),0_4px_0_rgb(21,128,61),0_8px_16px_rgba(0,0,0,0.6)]" href="/signup">
            Sign up
          </a>
</div>

<button aria-expanded="false" aria-label="Toggle menu" className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-zinc-900/60 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<svg fill="none" height="18" id="burger-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
<svg className="hidden" fill="none" height="18" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>

<div className="md:hidden hidden border-t border-white/5 bg-zinc-950/95 backdrop-blur-md" id="mobile-menu">
<div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
<a className="flex items-center px-3 py-3 rounded-xl text-sm font-medium text-zinc-300 tracking-tighter font-sans hover:text-white hover:bg-zinc-800/60 transition-colors" href="/pricing">
            Pricing
          </a>
<a className="flex items-center px-3 py-3 rounded-xl text-sm font-medium text-zinc-300 tracking-tighter font-sans hover:text-white hover:bg-zinc-800/60 transition-colors" href="/blog">
            Blog
          </a>
<div className="h-px bg-white/5 my-2"></div>
<a className="flex items-center px-3 py-3 rounded-xl text-sm font-medium text-zinc-300 tracking-tighter font-sans hover:text-white hover:bg-zinc-800/60 transition-colors" href="/login">
            Log in
          </a>
<a className="mt-1 inline-flex items-center justify-center uppercase transition-all duration-150 focus:outline-none hover:brightness-110 text-sm font-medium text-green-400 tracking-tighter font-sans bg-zinc-800 h-11 border-zinc-700/50 border rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(34,197,94,0.25),0_4px_0_rgb(21,128,61),0_8px_16px_rgba(0,0,0,0.6)]" href="/signup">
            Sign up
          </a>
</div>
</div>

</header>

<main className="flex-grow flex flex-col text-green-500 z-10 pt-24 pr-6 pb-32 pl-6 relative items-center">

<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-sm text-xs transition-colors mb-8 group font-sans font-medium tracking-tighter text-zinc-300 bg-zinc-900/50 hover:bg-zinc-800 border-zinc-800" href="#">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
        Introducing milestone protection
        <iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors group-hover:translate-x-0.5 duration-300" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>

<div className="flex flex-col text-base text-center max-w-4xl items-center">
<h1 className="bg-clip-text leading-[1.1] sm:text-6xl md:text-7xl text-5xl font-bold text-transparent tracking-tight font-manrope text-center bg-gradient-to-b to-zinc-500 mb-6 from-white via-white" style={{maskImage: 'linear-gradient(180deg, transparent, black 30%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 30%, black 100%, transparent)'}}>
          Freelance work,
          <br className="hidden sm:block"/>
          securely guaranteed.
        </h1>
<p className="sm:text-lg leading-relaxed text-base max-w-2xl mb-10 font-sans font-medium tracking-tighter text-zinc-400">Kodash holds project funds in a secure escrow until the job is done right. Complete peace of mind, ensuring freelancers get paid and clients get what they asked for in time.</p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<meta charset="utf-8" className=""/>
<meta charset="utf-8" className=""/>
<a className="sm:w-auto inline-flex items-center justify-center uppercase transition-all duration-150 active:translate-y-[4px] active:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(34,197,94,0.25),0_0px_0_rgb(21,128,61),0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zinc-950 hover:brightness-110 text-sm font-medium text-green-400 tracking-tighter font-sans bg-zinc-800 w-full h-14 border-zinc-700/50 border rounded-full pr-10 pl-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(34,197,94,0.25),0_4px_0_rgb(21,128,61),0_8px_16px_rgba(0,0,0,0.6)]" href="/signup">
            Get started
          </a>
<a className="sm:w-auto inline-flex items-center justify-center uppercase transition-all duration-150 active:scale-95 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-zinc-950 hover:border-zinc-500 hover:text-white hover:bg-zinc-800 text-sm font-medium text-zinc-300 tracking-tighter font-sans bg-transparent w-full h-14 border-zinc-700 border rounded-full pr-10 pl-10" href="/login">
            See how it works
          </a>
</div>
</div>

<div className="md:mt-28 group w-full max-w-4xl mt-20 mr-auto ml-auto relative" style={{perspective: '1200px'}}>
<style>
          @keyframes auraCardEnter {
            0% { opacity: 0; transform: rotateX(10deg) scale(0.95) translateY(40px); }
            100% { opacity: 1; transform: rotateX(4deg) scale(0.98) translateY(0); }
          }
          @keyframes auraFadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes auraScaleIn {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
          }
          @keyframes auraGrowX {
            0% { opacity: 0; transform: scaleX(0); }
            100% { opacity: 1; transform: scaleX(1); }
          }
        </style>
<div className="absolute inset-0 bg-gradient-to-tr from-green-500/20 via-transparent to-green-500/10 blur-[100px] -z-10 rounded-full opacity-60"></div>
<div className="transition-all duration-700 ease-out group-hover:rotate-0 w-full rounded-[24px] pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative shadow-2xl" style={{transform: 'rotateX(4deg) scale(0.98)'}}>
<div className="absolute inset-0 rounded-[24px] bg-gradient-to-br opacity-70 group-hover:opacity-100 transition-opacity duration-500 from-zinc-500/10 via-transparent to-zinc-500/5"></div>
<div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent to-transparent blur-[1px] animate-pulse via-green-400"></div>
<div className="overflow-hidden flex flex-col w-full h-full rounded-[24px] relative shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.05),inset_0_0_20px_rgba(255,255,255,0.02)] backdrop-blur-3xl border border-white/[0.05] bg-zinc-950/80" style={{animation: 'lottieCardSpring 1s cubic-bezier(0.22, 1, 0.36, 1) forwards', animationTimeline: 'view()', animationRange: 'entry 0% cover 35%', transformOrigin: 'center bottom'}}>
<style>
              @keyframes lottieCardSpring {
                0% { opacity: 0; transform: translateY(120px) scale(0.8) rotateX(15deg); filter: blur(12px); }
                40% { opacity: 1; transform: translateY(-15px) scale(1.02) rotateX(-5deg); filter: blur(0); }
                70% { transform: translateY(6px) scale(0.98) rotateX(2deg); }
                100% { opacity: 1; transform: translateY(0) scale(1) rotateX(0); }
              }
              @keyframes lottieSlideUpSpring {
                0% { opacity: 0; transform: translateY(40px) scale(0.95); filter: blur(4px); }
                50% { opacity: 1; transform: translateY(-5px) scale(1.02); filter: blur(0); }
                75% { transform: translateY(2px) scale(0.99); }
                100% { opacity: 1; transform: translateY(0) scale(1); }
              }
              @keyframes lottieBounceSpring {
                0% { opacity: 0; transform: scale(0.6) rotate(-10deg); filter: blur(4px); }
                50% { opacity: 1; transform: scale(1.1) rotate(5deg); filter: blur(0); }
                75% { transform: scale(0.95) rotate(-2deg); }
                100% { opacity: 1; transform: scale(1) rotate(0); }
              }
              @keyframes lottieGrowSpring {
                0% { opacity: 0; transform: scaleX(0); filter: blur(4px); }
                50% { opacity: 1; transform: scaleX(1.05); filter: blur(0); }
                75% { transform: scaleX(0.98); }
                100% { opacity: 1; transform: scaleX(1); }
              }
              @keyframes beam-top {
                0% { transform: translateX(-100%); opacity: 0; }
                2% { opacity: 1; }
                23% { opacity: 1; }
                25% { transform: translateX(100%); opacity: 0; }
                100% { transform: translateX(100%); opacity: 0; }
              }
              @keyframes beam-right {
                0% { transform: translateY(-100%); opacity: 0; }
                25% { transform: translateY(-100%); opacity: 0; }
                27% { opacity: 1; }
                48% { opacity: 1; }
                50% { transform: translateY(100%); opacity: 0; }
                100% { transform: translateY(100%); opacity: 0; }
              }
              @keyframes beam-bottom {
                0% { transform: translateX(100%); opacity: 0; }
                50% { transform: translateX(100%); opacity: 0; }
                52% { opacity: 1; }
                73% { opacity: 1; }
                75% { transform: translateX(-100%); opacity: 0; }
                100% { transform: translateX(-100%); opacity: 0; }
              }
              @keyframes beam-left {
                0% { transform: translateY(100%); opacity: 0; }
                75% { transform: translateY(100%); opacity: 0; }
                77% { opacity: 1; }
                98% { opacity: 1; }
                100% { transform: translateY(-100%); opacity: 0; }
              }
            </style>

<div className="absolute inset-0 opacity-[0.04] mix-blend-overlay z-0 pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>

<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-transparent z-50 pointer-events-none opacity-80 via-green-400" style={{animation: 'beam-top 4s linear infinite'}}></div>
<div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-transparent to-transparent z-50 pointer-events-none opacity-80 via-green-400" style={{animation: 'beam-right 4s linear infinite'}}></div>
<div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent to-transparent z-50 pointer-events-none opacity-80 via-green-400" style={{animation: 'beam-bottom 4s linear infinite'}}></div>
<div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-transparent to-transparent z-50 pointer-events-none opacity-80 via-green-400" style={{animation: 'beam-left 4s linear infinite'}}></div>
<div className="border-white/[0.06] flex border-b pt-4 pr-6 pb-4 pl-6 items-center justify-between relative z-10 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)] bg-zinc-900/50" style={{animation: 'lottieSlideUpSpring 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards', animationTimeline: 'view()', animationRange: 'entry 5% cover 25%'}}>
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] bg-zinc-800 border-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] bg-zinc-800 border-white/10"></div>
<div className="w-2.5 h-2.5 rounded-full border shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] bg-zinc-800 border-white/10"></div>
</div>
<div className="flex items-center gap-2 text-[11px] bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.15),inset_0_1px_1px_rgba(255,255,255,0.1)] font-sans font-normal tracking-tight backdrop-blur-md text-green-300">
<svg fill="none" height="13" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="13" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
                Secured Escrow Contract
              </div>
<div className="w-[42px] flex justify-end">
<svg className="text-zinc-500 transition-colors cursor-pointer hover:text-zinc-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</div>
</div>
<div className="sm:p-12 z-10 flex flex-col pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative border border-white/[0.08] rounded-2xl p-8 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl bg-zinc-900/40">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse duration-[4000ms]"></div>
<div className="flex flex-col sm:flex-row gap-10 sm:gap-0 z-10 relative gap-x-10 gap-y-10 items-center justify-between">
<div className="flex flex-col items-center sm:items-start gap-4 z-10 group/item">
<div className="opacity-0 w-14 h-14 rounded-[14px] border border-white/[0.15] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(0,0,0,0.5)] backdrop-blur-2xl relative overflow-hidden transition-transform duration-300 group-hover/item:-translate-y-1 bg-zinc-800/50 text-zinc-300" style={{animation: 'lottieBounceSpring 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards', animationTimeline: 'view()', animationRange: 'entry 5% cover 25%'}}>
<div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
<svg className="relative z-10 opacity-0 group-hover/item:text-green-300 group-hover/item:drop-shadow-[0_0_8px_rgba(74,222,128,0.5)] transition-all duration-300" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{animation: 'lottieBounceSpring 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
<path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
<path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
<path d="M10 6h4"></path>
<path d="M10 10h4"></path>
<path d="M10 14h4"></path>
<path d="M10 18h4"></path>
</svg>
</div>
<div className="text-center sm:text-left opacity-0" style={{animation: 'lottieSlideUpSpring 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards', animationTimeline: 'view()', animationRange: 'entry 5% cover 25%'}}>
<p className="text-base font-sans tracking-tight font-light drop-shadow-sm text-zinc-100">
                        TechFlow Inc.
                      </p>
<p className="text-[10px] mt-1.5 font-sans font-light tracking-widest uppercase text-zinc-400">
                        Client (Depositor)
                      </p>
</div>
</div>
<div className="flex-1 w-full flex flex-col items-center justify-center relative min-h-[100px] z-10 opacity-0" style={{animation: 'lottieBounceSpring 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards', animationTimeline: 'view()', animationRange: 'entry 5% cover 25%'}}>
<div className="absolute top-[40%] left-6 right-6 h-[2px] -translate-y-1/2 overflow-hidden opacity-0" style={{animation: 'lottieGrowSpring 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.6s forwards', transformOrigin: 'left center'}}>
<div className="absolute top-1/2 -translate-y-1/2 w-full border-t border-dashed border-green-500/40"></div>
<div className="absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-gradient-to-r from-transparent to-transparent opacity-0 via-green-400" style={{animation: 'beam-top 2s linear infinite 1s'}}></div>
</div>
<div className="px-6 py-3 border border-green-500/30 rounded-full flex items-center gap-3 shadow-[0_0_40px_rgba(34,197,94,0.3),inset_0_1px_1px_rgba(255,255,255,0.1)] backdrop-blur-2xl relative group/lock cursor-pointer hover:shadow-[0_0_50px_rgba(34,197,94,0.4)] transition-all duration-300 overflow-hidden bg-zinc-950/80 hover:border-green-400/50">
<div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full mix-blend-screen opacity-70"></div>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover/lock:translate-x-full transition-transform duration-1000 ease-in-out via-white/10"></div>
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500/20 to-green-500/10 blur-md -z-10 opacity-60 group-hover/lock:opacity-100 transition-opacity duration-300"></div>
<div className="relative">
<div className="absolute inset-0 blur-md rounded-full animate-pulse bg-green-400/30"></div>
<svg className="group-hover/lock:scale-110 drop-shadow-[0_0_8px_rgba(134,239,172,0.6)] transition-all duration-300 relative z-10 text-green-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<span className="text-base font-sans tracking-tight font-light relative z-10 flex items-center drop-shadow-md text-white">
                        $4,500.00
                      </span>
<div className="absolute inset-0 rounded-full border border-green-400/40" style={{animation: 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite', animationDelay: '1.5s'}}></div>
</div>
<p className="text-[10px] mt-6 uppercase font-sans font-normal tracking-widest bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.1)] opacity-0 text-green-300" style={{animation: 'lottieSlideUpSpring 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.8s forwards'}}>
                      Funds Locked
                    </p>
</div>
<div className="flex flex-col items-center sm:items-end gap-4 z-10 group/item">
<div className="opacity-0 w-14 h-14 rounded-[14px] border border-white/[0.15] flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(0,0,0,0.5)] backdrop-blur-2xl relative overflow-hidden transition-transform duration-300 group-hover/item:-translate-y-1 bg-zinc-800/50 text-zinc-300" style={{animation: 'lottieBounceSpring 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards', animationTimeline: 'view()', animationRange: 'entry 5% cover 25%'}}>
<div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300"></div>
<svg className="relative z-10 opacity-0 group-hover/item:text-green-300 group-hover/item:drop-shadow-[0_0_8px_rgba(74,222,128,0.5)] transition-all duration-300" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{animation: 'lottieBounceSpring 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s forwards'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div className="text-center sm:text-right opacity-0" style={{animation: 'lottieSlideUpSpring 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards', animationTimeline: 'view()', animationRange: 'entry 5% cover 25%'}}>
<p className="text-base font-sans tracking-tight font-light drop-shadow-sm text-zinc-100">
                        Elena M.
                      </p>
<p className="text-[10px] mt-1.5 font-sans font-light tracking-widest uppercase text-zinc-400">
                        Freelancer (Payee)
                      </p>
</div>
</div>
</div>
</div>
<div className="sm:px-8 mt-14 pr-2 pl-2 relative">
<style>
                  @keyframes drawProgressLine {
                    0% { transform: scaleX(0); opacity: 0; }
                    5% { transform: scaleX(0); opacity: 1; }
                    60% { transform: scaleX(1); opacity: 1; }
                    85% { transform: scaleX(1); opacity: 1; }
                    100% { transform: scaleX(1); opacity: 0; }
                  }
                  @keyframes nodePop {
                    0%, 100% { transform: scale(1); filter: brightness(1); }
                    15% { transform: scale(1.15); filter: brightness(1.3); }
                    30% { transform: scale(1); filter: brightness(1); }
                  }
                </style>
<div className="absolute top-4 left-4 right-4 h-[2px] rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(0,0,0,1)] bg-zinc-800/80"></div>
<div className="absolute top-4 left-4 right-4 h-[2px] bg-gradient-to-r from-green-500 rounded-full -z-10 shadow-[0_0_24px_rgba(34,197,94,0.8),0_0_8px_rgba(134,239,172,0.8)] via-green-400 to-green-300" style={{animation: 'drawProgressLine 3s ease-out infinite', transformOrigin: 'left'}}></div>
<div className="flex justify-between items-start">
<div className="flex flex-col items-center gap-3 w-20 relative z-10" style={{animation: 'nodePop 3s ease-out infinite 0s'}}>
<div className="w-8 h-8 rounded-full bg-gradient-to-b flex items-center justify-center shadow-[0_0_24px_rgba(34,197,94,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)] border-2 relative z-10 from-green-400 to-green-600 border-zinc-950">
<svg className="text-zinc-950" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-xs font-sans font-normal tracking-tight drop-shadow-sm text-zinc-200">
                        Funded
                      </span>
<span className="text-[9px] text-zinc-500 font-normal tracking-wider mt-1 uppercase">
                        10:42 AM
                      </span>
</div>
</div>
<div className="flex flex-col items-center gap-3 w-24 relative z-10" style={{animation: 'nodePop 3s ease-out infinite 0.9s'}}>
<div className="absolute top-0 w-20 h-20 bg-green-500/20 blur-xl rounded-full animate-pulse pointer-events-none -translate-y-6"></div>
<div className="w-8 h-8 rounded-full border-[3px] flex items-center justify-center shadow-[0_0_24px_rgba(34,197,94,0.6),inset_0_0_10px_rgba(34,197,94,0.3)] relative z-10 bg-zinc-950 border-green-400">
<div className="absolute inset-0 rounded-full border scale-[1.3] animate-ping opacity-50 duration-1000 border-green-400"></div>
<div className="absolute inset-0 rounded-full bg-green-500/30 animate-pulse blur-sm"></div>
<div className="w-2.5 h-2.5 rounded-full shadow-[0_0_12px_rgba(134,239,172,1)] relative z-10 bg-green-300"></div>
</div>
<div className="flex flex-col items-center text-center relative z-10">
<span className="text-xs font-sans font-normal tracking-tight drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] text-green-300">
                        In Progress
                      </span>
<span className="text-[9px] font-normal tracking-wider mt-1 uppercase text-zinc-400">
                        Awaiting
                      </span>
</div>
</div>
<div className="flex flex-col items-center gap-3 w-20 relative z-10" style={{animation: 'nodePop 3s ease-out infinite 1.8s'}}>
<div className="w-8 h-8 rounded-full border-[2px] border-green-500/30 flex items-center justify-center z-10 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_1px_1px_rgba(255,255,255,0.05),0_0_12px_rgba(34,197,94,0.2)] bg-zinc-900 text-green-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
<path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
<path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
</svg>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-xs font-sans font-normal tracking-tight drop-shadow-[0_0_8px_rgba(34,197,94,0.4)] text-green-400">
                        Payout
                      </span>
<span className="text-[9px] text-green-500/70 font-normal tracking-wider mt-1 uppercase">
                        Pending
                      </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-10 border-t w-full flex flex-col items-center border-white/5">
<p className="text-xs text-zinc-500 uppercase mb-6 text-center font-sans font-medium tracking-tighter">
          Trusted by forward-thinking teams
        </p>
<div className="flex flex-wrap justify-center gap-8 sm:gap-16 opacity-40 grayscale">

<span className="text-lg font-sans font-medium tracking-tighter text-white">
            AcmeCorp
          </span>
<span className="text-lg font-sans font-medium tracking-tighter text-white">
            GlobalNet
          </span>
<span className="text-lg font-sans font-medium tracking-tighter text-white">
            Vanguard
          </span>
<span className="text-lg font-sans font-medium tracking-tighter text-white">
            Nexus
          </span>
<span className="text-lg hidden sm:block font-sans font-medium tracking-tighter text-white">
            Synergy
          </span>
</div>
</div>
</main>
<section className="flex flex-col overflow-hidden bg-zinc-950 w-full z-10 border-white/5 border-t pt-32 pb-24 relative items-center">

<div className="z-10 w-full max-w-[1200px] mr-auto ml-auto pr-6 pl-6 relative">
<style>
          @keyframes gridBeamH {
            0% { transform: translateX(-100%); opacity: 0; }
            5% { opacity: 1; }
            45% { opacity: 1; }
            50% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          @keyframes gridBeamH2 {
            0% { transform: translateX(100%); opacity: 0; }
            55% { transform: translateX(100%); opacity: 0; }
            60% { opacity: 1; }
            95% { opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
          }
          @keyframes gridBeamV {
            0% { transform: translateY(-100%); opacity: 0; }
            5% { opacity: 1; }
            45% { opacity: 1; }
            50% { transform: translateY(100%); opacity: 0; }
            100% { transform: translateY(100%); opacity: 0; }
          }
          @keyframes gridBeamV2 {
            0% { transform: translateY(100%); opacity: 0; }
            55% { transform: translateY(100%); opacity: 0; }
            60% { opacity: 1; }
            95% { opacity: 1; }
            100% { transform: translateY(-100%); opacity: 0; }
          }

          .grid-card-bg {
            background-image:
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
            background-size: 32px 32px;
            background-position: center center;
          }

          .grid-card-beam-h1 {
            position: absolute;
            left: 0; right: 0;
            height: 1px;
            overflow: hidden;
            pointer-events: none;
            z-index: 5;
          }
          .grid-card-beam-h1::after {
            content: '';
            display: block;
            width: 40%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(74,222,128,0.8) 50%, transparent);
            animation: gridBeamH 5s linear infinite;
            filter: blur(0.5px);
            box-shadow: 0 0 8px rgba(74,222,128,0.6);
          }
          .grid-card-beam-h2 {
            position: absolute;
            left: 0; right: 0;
            height: 1px;
            overflow: hidden;
            pointer-events: none;
            z-index: 5;
          }
          .grid-card-beam-h2::after {
            content: '';
            display: block;
            width: 30%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(74,222,128,0.6) 50%, transparent);
            animation: gridBeamH2 7s linear infinite;
            animation-delay: 1.5s;
            filter: blur(0.5px);
          }
          .grid-card-beam-h3 {
            position: absolute;
            left: 0; right: 0;
            height: 1px;
            overflow: hidden;
            pointer-events: none;
            z-index: 5;
          }
          .grid-card-beam-h3::after {
            content: '';
            display: block;
            width: 25%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(74,222,128,0.5) 50%, transparent);
            animation: gridBeamH 6s linear infinite;
            animation-delay: 3s;
            filter: blur(0.5px);
          }
          .grid-card-beam-v1 {
            position: absolute;
            top: 0; bottom: 0;
            width: 1px;
            overflow: hidden;
            pointer-events: none;
            z-index: 5;
          }
          .grid-card-beam-v1::after {
            content: '';
            display: block;
            width: 100%;
            height: 40%;
            background: linear-gradient(180deg, transparent, rgba(74,222,128,0.7) 50%, transparent);
            animation: gridBeamV 6s linear infinite;
            animation-delay: 0.5s;
            filter: blur(0.5px);
          }
          .grid-card-beam-v2 {
            position: absolute;
            top: 0; bottom: 0;
            width: 1px;
            overflow: hidden;
            pointer-events: none;
            z-index: 5;
          }
          .grid-card-beam-v2::after {
            content: '';
            display: block;
            width: 100%;
            height: 30%;
            background: linear-gradient(180deg, transparent, rgba(74,222,128,0.5) 50%, transparent);
            animation: gridBeamV2 8s linear infinite;
            animation-delay: 2s;
            filter: blur(0.5px);
          }

          .red-grid-card-bg {
            background-image:
              linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
            background-size: 32px 32px;
            background-position: center center;
          }
          .red-beam-h::after {
            background: linear-gradient(90deg, transparent, rgba(248,113,113,0.7) 50%, transparent) !important;
            box-shadow: 0 0 8px rgba(248,113,113,0.5) !important;
          }
          .red-beam-v::after {
            background: linear-gradient(180deg, transparent, rgba(248,113,113,0.6) 50%, transparent) !important;
          }
        </style>

<div className="flex flex-col items-center text-center mb-20 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-xs font-sans font-medium text-zinc-300 tracking-tight">
              Our Mission
            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-medium text-transparent bg-clip-text bg-gradient-to-b tracking-tight mb-6 from-white to-zinc-400">
            Why Kodash exists
          </h2>
<p className="text-base md:text-lg font-sans font-normal tracking-tight leading-relaxed text-zinc-400 max-w-2xl">
            Freelancing is broken. Payments are delayed, scope creep goes
            unchecked, and trust is a luxury. We built Kodash to fix that —
            permanently.
          </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">

<div className="group relative flex flex-col p-8 md:p-10 rounded-[28px] border border-white/[0.05] bg-zinc-900/40 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.3)] overflow-hidden transition-all duration-500 hover:bg-zinc-800/50 hover:border-white/10 red-grid-card-bg">

<div className="grid-card-beam-h1 red-beam-h" style={{top: '32px'}}></div>
<div className="grid-card-beam-h2 red-beam-h" style={{top: '96px', animationDelay: '2s'}}></div>
<div className="grid-card-beam-h3 red-beam-h" style={{top: '192px', animationDelay: '4s'}}></div>
<div className="grid-card-beam-v1 red-beam-v" style={{left: '32px'}}></div>
<div className="grid-card-beam-v2 red-beam-v" style={{left: '128px'}}></div>
<div className="grid-card-beam-v1 red-beam-v" style={{right: '64px', left: 'auto', animationDelay: '3s'}}></div>
<div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[1]"></div>
<div className="absolute -top-6 -right-6 text-[140px] font-manrope font-medium text-white/[0.015] pointer-events-none leading-none select-none z-[1]">
              ?
            </div>
<div className="w-12 h-12 rounded-2xl border border-red-500/20 bg-red-500/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(239,68,68,0.1)] shrink-0 relative z-10">
<svg aria-hidden="true" className="w-5 h-5 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
</div>
<h3 className="text-xl md:text-2xl font-manrope font-medium tracking-tight mb-4 text-zinc-100 relative z-10">
              The old way is broken
            </h3>
<p className="font-sans text-sm md:text-base leading-relaxed tracking-tight text-zinc-400 mb-8 relative z-10">
              Freelancers do the work and wait — sometimes forever. Clients pay
              upfront and get burned. Without a neutral party holding both sides
              accountable, every project is a leap of faith.
            </p>
<div className="flex flex-col gap-3 mt-auto relative z-10">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
<svg aria-hidden="true" className="w-3 h-3 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<span className="text-sm font-sans text-zinc-400 tracking-tight leading-snug">
                  Invoices ignored, payments delayed by weeks or months
                </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
<svg aria-hidden="true" className="w-3 h-3 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<span className="text-sm font-sans text-zinc-400 tracking-tight leading-snug">
                  Vague scope evolves into endless unpaid revisions
                </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full border border-red-500/30 bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
<svg aria-hidden="true" className="w-3 h-3 text-red-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<span className="text-sm font-sans text-zinc-400 tracking-tight leading-snug">
                  No recourse when either party walks away mid-project
                </span>
</div>
</div>
</div>

<div className="group relative flex flex-col p-8 md:p-10 rounded-[28px] border border-green-500/10 bg-zinc-900/40 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.3),0_0_40px_rgba(34,197,94,0.05)] overflow-hidden transition-all duration-500 hover:bg-zinc-800/50 hover:border-green-500/20 grid-card-bg">

<div className="grid-card-beam-h1" style={{top: '32px'}}></div>
<div className="grid-card-beam-h2" style={{top: '128px', animationDelay: '1s'}}></div>
<div className="grid-card-beam-h3" style={{top: '224px', animationDelay: '3.5s'}}></div>
<div className="grid-card-beam-v1" style={{left: '64px'}}></div>
<div className="grid-card-beam-v2" style={{left: '160px', animationDelay: '2.5s'}}></div>
<div className="grid-card-beam-v1" style={{right: '96px', left: 'auto', animationDelay: '4s'}}></div>
<div className="absolute inset-0 bg-gradient-to-br from-green-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-[1]"></div>
<div className="absolute -top-6 -right-6 text-[140px] font-manrope font-medium text-green-500/[0.04] pointer-events-none leading-none select-none group-hover:text-green-500/[0.07] transition-colors duration-500 z-[1]">
              ✓
            </div>
<div className="w-12 h-12 rounded-2xl border border-green-500/20 bg-green-500/10 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.15)] shrink-0 relative z-10">
<svg aria-hidden="true" className="w-5 h-5 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-xl md:text-2xl font-manrope font-medium tracking-tight mb-4 text-zinc-100 relative z-10">
              The Kodash way
            </h3>
<p className="font-sans text-sm md:text-base leading-relaxed tracking-tight text-zinc-400 mb-8 relative z-10">
              We sit in the middle — not as a middleman, but as a guardian.
              Funds are locked, milestones are clear, and both parties are
              protected from the moment the contract is signed.
            </p>
<div className="flex flex-col gap-3 mt-auto relative z-10">
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
<svg aria-hidden="true" className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-sans text-zinc-400 tracking-tight leading-snug">
                  Funds locked in escrow the moment work begins
                </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
<svg aria-hidden="true" className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-sans text-zinc-400 tracking-tight leading-snug">
                  Milestones define exactly when and how you get paid
                </span>
</div>
<div className="flex items-start gap-3">
<div className="w-5 h-5 rounded-full border border-green-500/30 bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
<svg aria-hidden="true" className="w-3 h-3 text-green-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm font-sans text-zinc-400 tracking-tight leading-snug">
                  Dispute resolution if things ever go sideways
                </span>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:p-14 border-white/[0.08] overflow-hidden text-center border rounded-[28px] pt-10 pr-10 pb-10 pl-10 relative items-center grid-card-bg" style={{backgroundColor: 'rgba(13,13,16,0.98)', backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '32px 32px', backgroundPosition: 'center center', backdropFilter: 'blur(24px)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.05), 0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)'}}>

<div className="absolute inset-0 pointer-events-none z-[1]" style={{background: 'radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.10) 0%, rgba(15,15,18,0.85) 55%)'}}></div>

<div className="grid-card-beam-h1" style={{top: '64px', zIndex: '6'}}></div>
<div className="grid-card-beam-h2" style={{top: '160px', zIndex: '6', animationDelay: '2s'}}></div>
<div className="grid-card-beam-h1" style={{bottom: '64px', top: 'auto', zIndex: '6', animationDelay: '3s'}}></div>
<div className="grid-card-beam-v1" style={{left: '96px', zIndex: '6', animationDelay: '1s'}}></div>
<div className="grid-card-beam-v2" style={{right: '96px', left: 'auto', zIndex: '6', animationDelay: '2.5s'}}></div>
<div className="grid-card-beam-v1" style={{left: '50%', zIndex: '6', animationDelay: '4s'}}></div>

<div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none z-[7]" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(34,197,94,0.12) 20%, rgba(74,222,128,0.4) 50%, rgba(34,197,94,0.12) 80%, transparent 100%)'}}></div>

<div className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none z-[7]" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.3) 50%, transparent 100%)'}}></div>

<div className="absolute top-5 left-5 flex items-center gap-1.5 pointer-events-none z-[7]">
<div className="w-7 h-7 rounded-md border border-green-500/40 bg-green-500/20"></div>
<div className="w-7 h-7 rounded-md border border-green-500/40 bg-green-500/20"></div>
</div>

<div className="absolute inset-0 opacity-[0.025] mix-blend-overlay pointer-events-none z-[2]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E\')'}}></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[2]" style={{width: '500px', height: '250px', background: 'radial-gradient(ellipse, rgba(34,197,94,0.07) 0%, transparent 70%)', filter: 'blur(50px)'}}></div>
<div className="relative z-10 max-w-2xl flex flex-col items-center w-full">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-green-400" style={{boxShadow: '0 0 6px rgba(74,222,128,0.8)'}}></span>
<span className="text-xs font-sans font-medium text-green-300 tracking-tight">
                Founder's Message
              </span>
</div>

<div className="flex items-center gap-1.5 mb-8">
<svg className="text-green-400" fill="currentColor" height="18" style={{filter: 'drop-shadow(0 0 5px rgba(74,222,128,0.7))'}} viewbox="0 0 24 24" width="18">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-green-400" fill="currentColor" height="18" style={{filter: 'drop-shadow(0 0 5px rgba(74,222,128,0.7))'}} viewbox="0 0 24 24" width="18">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-green-400" fill="currentColor" height="18" style={{filter: 'drop-shadow(0 0 5px rgba(74,222,128,0.7))'}} viewbox="0 0 24 24" width="18">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-green-400" fill="currentColor" height="18" style={{filter: 'drop-shadow(0 0 5px rgba(74,222,128,0.7))'}} viewbox="0 0 24 24" width="18">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="text-green-400" fill="currentColor" height="18" style={{filter: 'drop-shadow(0 0 5px rgba(74,222,128,0.7))'}} viewbox="0 0 24 24" width="18">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>

<p className="md:text-xl lg:text-2xl leading-relaxed text-lg font-medium text-white tracking-tight font-manrope mb-10">
              Every freelancer deserves to be paid for their work. Every client
              deserves what they paid for. We built the infrastructure that
              makes both true,
              <span className="text-green-400" style={{filter: 'drop-shadow(0 0 8px rgba(74,222,128,0.5))'}}>
                at the same time.
              </span>
</p>

<div className="w-full max-w-xs h-[1px] mb-8 pointer-events-none" style={{background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 50%, transparent)'}}></div>

<div className="flex items-center justify-center gap-4">
<div className="relative shrink-0">
<div className="absolute inset-0 rounded-full" style={{background: 'conic-gradient(from 0deg, rgba(74,222,128,0.8), rgba(34,197,94,0.2), rgba(74,222,128,0.8))', padding: '2px', borderRadius: '9999px', filter: 'blur(1px)'}}></div>
<div className="w-14 h-14 rounded-full p-[2px] relative" style={{background: 'linear-gradient(135deg, rgba(74,222,128,0.9), rgba(22,163,74,0.9))', boxShadow: '0 0 20px rgba(34,197,94,0.4), 0 0 40px rgba(34,197,94,0.15)'}}>
<div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center overflow-hidden">
<img alt="Founder" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca3e93b8-f1d2-4554-ac5b-8dcbf399f996_320w.jpg"/>
</div>
</div>
<div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 rounded-full border-2 border-zinc-950 bg-green-500 flex items-center justify-center" style={{boxShadow: '0 0 8px rgba(74,222,128,0.8)'}}>
<svg fill="none" height="9" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="9">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
<div className="flex flex-col items-start gap-0.5">
<span className="text-base font-medium text-white tracking-tight font-manrope">
                  Madueke Henry
                </span>
<span className="text-sm text-zinc-400 tracking-tight font-sans">
                  Founder &amp; CEO, Kodash
                </span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute top-0 w-full max-w-3xl h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/3 blur-[150px] rounded-full pointer-events-none translate-x-1/3 translate-y-1/3"></div>

</section>
<section className="flex flex-col overflow-hidden bg-zinc-950 w-full z-10 border-white/5 border-t pt-32 pb-24 relative items-center">
<div className="absolute top-0 w-full max-w-3xl h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/3 blur-[150px] rounded-full pointer-events-none -translate-x-1/3 translate-y-1/3"></div>
<div className="z-10 w-full max-w-[1200px] mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-xs font-sans font-medium text-zinc-300 tracking-tight">
              Made For You
            </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-manrope font-medium text-transparent bg-clip-text bg-gradient-to-b tracking-tight mb-6 from-white to-zinc-400">
            Who Kodash is for
          </h2>
<p className="text-base md:text-lg font-sans font-normal tracking-tight leading-relaxed text-zinc-400 max-w-2xl">
            Whether you're a solo creator or a growing team, Kodash is built to
            protect the people who build things and the people who commission
            them.
          </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-500" style={{background: 'linear-gradient(145deg, rgba(24,24,27,0.9) 0%, rgba(17,17,20,0.95) 100%)', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 1px 1px rgba(255,255,255,0.03) inset, 0 20px 40px rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(ellipse at 0% 0%, rgba(34,197,94,0.08) 0%, transparent 70%)'}}></div>
<div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(34,197,94,0.4) 50%, transparent 100%)'}}></div>

<div className="absolute top-5 right-6 text-[11px] font-sans font-medium text-zinc-700 tracking-widest select-none">
              01
            </div>
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, rgba(34,197,94,0.05) 100%)', border: '1px solid rgba(34,197,94,0.2)', boxShadow: '0 0 20px rgba(34,197,94,0.1)'}}>
<svg className="text-green-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
<div className="w-px h-8 bg-white/[0.04]"></div>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.08)', color: 'rgba(74,222,128,0.9)'}}>
                  Full-stack
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  Mobile
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  Web3
                </span>
</div>
</div>
<h3 className="text-base font-manrope font-semibold tracking-tight mb-2 text-zinc-100 relative z-10">
              Freelance Developers
            </h3>
<p className="font-sans text-sm leading-relaxed text-zinc-500 relative z-10">
              Build software with confidence. Every sprint and milestone is
              backed by locked funds — no more chasing invoices after shipping
              code.
            </p>
<div className="mt-5 pt-4 flex items-center gap-2 relative z-10" style={{borderTop: '1px solid rgba(255,255,255,0.04)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-green-500/60"></div>
<span className="text-[11px] font-sans text-zinc-600 tracking-tight">
                Milestone-gated escrow
              </span>
</div>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-500" style={{background: 'linear-gradient(145deg, rgba(24,24,27,0.9) 0%, rgba(17,17,20,0.95) 100%)', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 1px 1px rgba(255,255,255,0.03) inset, 0 20px 40px rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(ellipse at 0% 0%, rgba(168,85,247,0.08) 0%, transparent 70%)'}}></div>
<div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(168,85,247,0.4) 50%, transparent 100%)'}}></div>
<div className="absolute top-5 right-6 text-[11px] font-sans font-medium text-zinc-700 tracking-widest select-none">
              02
            </div>
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(168,85,247,0.15) 0%, rgba(168,85,247,0.05) 100%)', border: '1px solid rgba(168,85,247,0.2)', boxShadow: '0 0 20px rgba(168,85,247,0.1)'}}>
<svg className="text-purple-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle>
<circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle>
<circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle>
<circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle>
<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
</svg>
</div>
<div className="w-px h-8 bg-white/[0.04]"></div>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(168,85,247,0.2)', background: 'rgba(168,85,247,0.08)', color: 'rgba(192,132,252,0.9)'}}>
                  UI/UX
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  Brand
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  Motion
                </span>
</div>
</div>
<h3 className="text-base font-manrope font-semibold tracking-tight mb-2 text-zinc-100 relative z-10">
              Designers &amp; Creatives
            </h3>
<p className="font-sans text-sm leading-relaxed text-zinc-500 relative z-10">
              From brand identities to motion graphics — define revision limits
              upfront, get paid per milestone, and never deliver finals without
              guaranteed payment.
            </p>
<div className="mt-5 pt-4 flex items-center gap-2 relative z-10" style={{borderTop: '1px solid rgba(255,255,255,0.04)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-purple-500/60"></div>
<span className="text-[11px] font-sans text-zinc-600 tracking-tight">
                Revision limits built-in
              </span>
</div>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-500" style={{background: 'linear-gradient(145deg, rgba(24,24,27,0.9) 0%, rgba(17,17,20,0.95) 100%)', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 1px 1px rgba(255,255,255,0.03) inset, 0 20px 40px rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(ellipse at 0% 0%, rgba(245,158,11,0.08) 0%, transparent 70%)'}}></div>
<div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(245,158,11,0.4) 50%, transparent 100%)'}}></div>
<div className="absolute top-5 right-6 text-[11px] font-sans font-medium text-zinc-700 tracking-widest select-none">
              03
            </div>
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, rgba(245,158,11,0.05) 100%)', border: '1px solid rgba(245,158,11,0.2)', boxShadow: '0 0 20px rgba(245,158,11,0.1)'}}>
<svg className="text-amber-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h9"></path>
<path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
</svg>
</div>
<div className="w-px h-8 bg-white/[0.04]"></div>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.08)', color: 'rgba(251,191,36,0.9)'}}>
                  Copywriting
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  SEO
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  Ghostwriting
                </span>
</div>
</div>
<h3 className="text-base font-manrope font-semibold tracking-tight mb-2 text-zinc-100 relative z-10">
              Writers &amp; Content Creators
            </h3>
<p className="font-sans text-sm leading-relaxed text-zinc-500 relative z-10">
              Pitch, draft, and deliver with peace of mind. Set word counts,
              deadlines, and approval criteria in the contract — and get paid
              the moment your work is accepted.
            </p>
<div className="mt-5 pt-4 flex items-center gap-2 relative z-10" style={{borderTop: '1px solid rgba(255,255,255,0.04)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-amber-500/60"></div>
<span className="text-[11px] font-sans text-zinc-600 tracking-tight">
                Criteria-based approval
              </span>
</div>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-500" style={{background: 'linear-gradient(145deg, rgba(24,24,27,0.9) 0%, rgba(17,17,20,0.95) 100%)', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 1px 1px rgba(255,255,255,0.03) inset, 0 20px 40px rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(ellipse at 0% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)'}}></div>
<div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.4) 50%, transparent 100%)'}}></div>
<div className="absolute top-5 right-6 text-[11px] font-sans font-medium text-zinc-700 tracking-widest select-none">
              04
            </div>
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(59,130,246,0.05) 100%)', border: '1px solid rgba(59,130,246,0.2)', boxShadow: '0 0 20px rgba(59,130,246,0.1)'}}>
<svg className="text-blue-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
<polyline points="9 22 9 12 15 12 15 22"></polyline>
</svg>
</div>
<div className="w-px h-8 bg-white/[0.04]"></div>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(59,130,246,0.2)', background: 'rgba(59,130,246,0.08)', color: 'rgba(96,165,250,0.9)'}}>
                  Hiring
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  Contractors
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  Agencies
                </span>
</div>
</div>
<h3 className="text-base font-manrope font-semibold tracking-tight mb-2 text-zinc-100 relative z-10">
              Startups &amp; Small Businesses
            </h3>
<p className="font-sans text-sm leading-relaxed text-zinc-500 relative z-10">
              Hire contractors without the risk. Your budget stays protected in
              escrow until each deliverable meets your standard — so every
              dollar spent is a dollar earned back in results.
            </p>
<div className="mt-5 pt-4 flex items-center gap-2 relative z-10" style={{borderTop: '1px solid rgba(255,255,255,0.04)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500/60"></div>
<span className="text-[11px] font-sans text-zinc-600 tracking-tight">
                Protected budget escrow
              </span>
</div>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-500" style={{background: 'linear-gradient(145deg, rgba(24,24,27,0.9) 0%, rgba(17,17,20,0.95) 100%)', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 1px 1px rgba(255,255,255,0.03) inset, 0 20px 40px rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(ellipse at 0% 0%, rgba(236,72,153,0.08) 0%, transparent 70%)'}}></div>
<div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(236,72,153,0.4) 50%, transparent 100%)'}}></div>
<div className="absolute top-5 right-6 text-[11px] font-sans font-medium text-zinc-700 tracking-widest select-none">
              05
            </div>
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(236,72,153,0.15) 0%, rgba(236,72,153,0.05) 100%)', border: '1px solid rgba(236,72,153,0.2)', boxShadow: '0 0 20px rgba(236,72,153,0.1)'}}>
<svg className="text-pink-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</div>
<div className="w-px h-8 bg-white/[0.04]"></div>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(236,72,153,0.2)', background: 'rgba(236,72,153,0.08)', color: 'rgba(244,114,182,0.9)'}}>
                  Growth
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  Ads
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  Strategy
                </span>
</div>
</div>
<h3 className="text-base font-manrope font-semibold tracking-tight mb-2 text-zinc-100 relative z-10">
              Marketing &amp; Social Media
            </h3>
<p className="font-sans text-sm leading-relaxed text-zinc-500 relative z-10">
              Campaigns, ad creatives, social strategies — tie payment to
              performance benchmarks or content delivery, not just promises.
              Both sides stay accountable.
            </p>
<div className="mt-5 pt-4 flex items-center gap-2 relative z-10" style={{borderTop: '1px solid rgba(255,255,255,0.04)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-pink-500/60"></div>
<span className="text-[11px] font-sans text-zinc-600 tracking-tight">
                Performance-tied payouts
              </span>
</div>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-500" style={{background: 'linear-gradient(145deg, rgba(24,24,27,0.9) 0%, rgba(17,17,20,0.95) 100%)', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 1px 1px rgba(255,255,255,0.03) inset, 0 20px 40px rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(ellipse at 0% 0%, rgba(249,115,22,0.08) 0%, transparent 70%)'}}></div>
<div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(249,115,22,0.4) 50%, transparent 100%)'}}></div>
<div className="absolute top-5 right-6 text-[11px] font-sans font-medium text-zinc-700 tracking-widest select-none">
              06
            </div>
<div className="flex items-center gap-3 mb-5">
<div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 relative z-10 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0.05) 100%)', border: '1px solid rgba(249,115,22,0.2)', boxShadow: '0 0 20px rgba(249,115,22,0.1)'}}>
<svg className="text-orange-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<polygon points="23 7 16 12 23 17 23 7"></polygon>
<rect height="14" rx="2" ry="2" width="15" x="1" y="5"></rect>
</svg>
</div>
<div className="w-px h-8 bg-white/[0.04]"></div>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(249,115,22,0.2)', background: 'rgba(249,115,22,0.08)', color: 'rgba(251,146,60,0.9)'}}>
                  Video
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  Podcast
                </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                  Music
                </span>
</div>
</div>
<h3 className="text-base font-manrope font-semibold tracking-tight mb-2 text-zinc-100 relative z-10">
              Video &amp; Audio Producers
            </h3>
<p className="font-sans text-sm leading-relaxed text-zinc-500 relative z-10">
              Pre-production, edits, final delivery — structure your contract
              around production phases and protect your time-intensive work with
              milestone-gated payments.
            </p>
<div className="mt-5 pt-4 flex items-center gap-2 relative z-10" style={{borderTop: '1px solid rgba(255,255,255,0.04)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500/60"></div>
<span className="text-[11px] font-sans text-zinc-600 tracking-tight">
                Phase-based contracts
              </span>
</div>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-500 sm:col-span-1 lg:col-span-2" style={{background: 'linear-gradient(145deg, rgba(24,24,27,0.9) 0%, rgba(17,17,20,0.95) 100%)', border: '1px solid rgba(255,255,255,0.06)', boxShadow: '0 1px 1px rgba(255,255,255,0.03) inset, 0 20px 40px rgba(0,0,0,0.4)'}}>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(ellipse at 0% 0%, rgba(20,184,166,0.08) 0%, transparent 70%)'}}></div>
<div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(20,184,166,0.4) 50%, transparent 100%)'}}></div>
<div className="absolute top-5 right-6 text-[11px] font-sans font-medium text-zinc-700 tracking-widest select-none">
              07
            </div>
<div className="flex flex-col md:flex-row md:items-start gap-6">
<div className="flex flex-col gap-4 shrink-0">
<div className="w-10 h-10 rounded-xl flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(20,184,166,0.15) 0%, rgba(20,184,166,0.05) 100%)', border: '1px solid rgba(20,184,166,0.2)', boxShadow: '0 0 20px rgba(20,184,166,0.1)'}}>
<svg className="text-teal-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
</div>
<div className="flex-1 relative z-10">
<h3 className="text-base font-manrope font-semibold tracking-tight mb-2 text-zinc-100">
                  Consultants &amp; Business Coaches
                </h3>
<p className="font-sans text-sm leading-relaxed text-zinc-500 mb-5">
                  Whether you're advising on strategy, finance, or operations —
                  Kodash lets you lock in retainer agreements and session-based
                  contracts so your expertise is always compensated fairly, on
                  time, without awkward follow-ups.
                </p>
<div className="flex items-center gap-3 flex-wrap">
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(20,184,166,0.2)', background: 'rgba(20,184,166,0.08)', color: 'rgba(45,212,191,0.9)'}}>
                      Retainers
                    </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                      Strategy
                    </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                      Finance
                    </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                      HR
                    </span>
</div>
</div>
<div className="mt-5 pt-4 flex items-center gap-2" style={{borderTop: '1px solid rgba(255,255,255,0.04)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-teal-500/60"></div>
<span className="text-[11px] font-sans text-zinc-600 tracking-tight">
                    Session &amp; retainer contracts
                  </span>
</div>
</div>
</div>
</div>

<div className="group relative flex flex-col p-6 rounded-2xl overflow-hidden transition-all duration-500" style={{background: 'linear-gradient(145deg, rgba(17,24,19,0.95) 0%, rgba(12,18,14,0.98) 100%)', border: '1px solid rgba(34,197,94,0.12)', boxShadow: '0 1px 1px rgba(74,222,128,0.04) inset, 0 20px 50px rgba(0,0,0,0.5), 0 0 60px rgba(34,197,94,0.05)'}}>
<div className="absolute inset-0 opacity-60 pointer-events-none" style={{background: 'radial-gradient(ellipse at 10% 10%, rgba(34,197,94,0.07) 0%, transparent 60%)'}}></div>
<div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(74,222,128,0.3) 50%, transparent 100%)'}}></div>
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(ellipse at 0% 0%, rgba(34,197,94,0.1) 0%, transparent 70%)'}}></div>
<div className="flex flex-col md:flex-row md:items-start gap-6">
<div className="flex flex-col gap-4 shrink-0">
<div className="w-10 h-10 rounded-xl flex items-center justify-center relative z-10 transition-all duration-500 group-hover:scale-110" style={{background: 'linear-gradient(135deg, rgba(34,197,94,0.2) 0%, rgba(34,197,94,0.08) 100%)', border: '1px solid rgba(34,197,94,0.25)', boxShadow: '0 0 24px rgba(34,197,94,0.15)'}}>
<svg className="text-green-400" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
</div>
<div className="flex-1 relative z-10">
<div className="flex items-center gap-3 mb-2 flex-wrap">
<h3 className="text-base font-manrope font-semibold tracking-tight text-zinc-100">
                    Enterprise &amp; Growing Teams
                  </h3>
<span className="text-[10px] font-sans font-semibold tracking-tight px-2.5 py-1 rounded-full" style={{border: '1px solid rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.12)', color: 'rgba(74,222,128,1)', boxShadow: '0 0 12px rgba(34,197,94,0.15)'}}>
                    Most Popular
                  </span>
</div>
<p className="font-sans text-sm leading-relaxed text-zinc-500 mb-5">
                  Managing multiple contractors across departments? Kodash gives
                  your finance team full visibility, audit trails, and
                  structured payout schedules — all without a single spreadsheet
                  or manual wire transfer.
                </p>
<div className="flex flex-wrap gap-1.5">
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(34,197,94,0.2)', background: 'rgba(34,197,94,0.08)', color: 'rgba(74,222,128,0.9)'}}>
                    Multi-contractor
                  </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                    Audit Trails
                  </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                    Bulk Payouts
                  </span>
<span className="text-[10px] font-sans font-medium tracking-tight px-2 py-0.5 rounded-full" style={{border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.03)', color: 'rgba(161,161,170,0.8)'}}>
                    Finance API
                  </span>
</div>
<div className="mt-5 pt-4 flex items-center gap-2" style={{borderTop: '1px solid rgba(34,197,94,0.08)'}}>
<div className="w-1.5 h-1.5 rounded-full bg-green-400/70"></div>
<span className="text-[11px] font-sans text-zinc-500 tracking-tight">
                    Full audit visibility &amp; structured payouts
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 flex flex-col bg-zinc-950 w-full border-white/5 border-t mt-12 pt-32 pb-24 relative items-center">

<div className="absolute top-0 w-full max-w-3xl h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
<div className="w-full max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">

<div className="lg:col-span-4 flex flex-col items-start relative mb-4 lg:mb-0">
<div className="lg:sticky lg:top-32 w-full">
<h2 className="text-4xl md:text-5xl font-manrope font-medium text-transparent bg-clip-text bg-gradient-to-b tracking-tight mb-6 from-white to-zinc-400">
              How it works
            </h2>
<p className="text-base md:text-lg font-sans font-normal tracking-tight leading-relaxed mb-10 text-zinc-400">
              The most secure way to handle freelance payments, uniquely
              tailored to protect both sides of the contract.
            </p>

<div className="relative flex flex-col items-start p-1.5 backdrop-blur-xl border rounded-2xl w-full shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] bg-zinc-900/60 border-white/10">
<div className="flex w-full relative">
<div className="absolute left-0 top-0 bottom-0 w-1/2 border rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_8px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] bg-zinc-800 border-white/10" id="tab-highlight"></div>
<button className="relative z-10 flex-1 py-3 text-sm font-sans font-normal tracking-tight rounded-xl transition-colors duration-300 focus:outline-none text-white" id="tab-freelancer" onclick="switchHowItWorksTab('freelancer')">
                  For Freelancers
                </button>
<button className="relative z-10 flex-1 py-3 text-sm font-sans font-normal tracking-tight rounded-xl transition-colors duration-300 focus:outline-none text-zinc-400 hover:text-zinc-200" id="tab-client" onclick="switchHowItWorksTab('client')">
                  For Clients
                </button>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 relative">

<div className="relative w-full grid" style={{gridTemplateAreas: '\'stack\''}}>

<div className="flex flex-col gap-8 md:gap-10 w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] relative" id="content-freelancer" style={{gridArea: 'stack', pointerEvents: 'auto'}}>

<div className="absolute left-[27px] md:left-[39px] top-8 md:top-10 bottom-8 md:bottom-10 w-[2px] bg-gradient-to-b from-transparent to-transparent z-0 via-white/10"></div>

<div className="relative flex gap-4 md:gap-8 items-center group/card">
<div className="relative z-10 w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl border flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)] group-hover/card:scale-110 group-hover/card:text-green-400 transition-all duration-500 group-hover/card:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(34,197,94,0.15)] group-hover/card:border-green-500/20 bg-zinc-950 border-white/10 text-zinc-400">
<svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<div className="flex-1 relative flex flex-col p-6 md:p-8 rounded-[24px] border border-white/[0.05] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md overflow-hidden bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-transparent to-transparent group-hover/card:h-[80%] transition-all duration-700 ease-out opacity-0 group-hover/card:opacity-100 via-green-400"></div>
<div className="text-6xl md:text-8xl font-manrope font-medium text-white/[0.02] absolute -top-2 md:-top-4 -right-2 md:-right-4 pointer-events-none group-hover/card:text-green-500/5 transition-colors duration-500">01</div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-2 relative z-10 text-zinc-100">Create or Join a Workspace</h3>
<p className="font-sans text-sm md:text-base leading-relaxed relative z-10 tracking-tight text-zinc-400">Set up your dedicated hub for the project. Access tools, contracts, and communication all in one centralized workspace.</p>
</div>
</div>

<div className="relative flex gap-4 md:gap-8 items-center group/card">
<div className="relative z-10 w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl border flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)] group-hover/card:scale-110 group-hover/card:text-green-400 transition-all duration-500 group-hover/card:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(34,197,94,0.15)] group-hover/card:border-green-500/20 bg-zinc-950 border-white/10 text-zinc-400">
<svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<div className="flex-1 relative flex flex-col p-6 md:p-8 rounded-[24px] border border-white/[0.05] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md overflow-hidden bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-transparent to-transparent group-hover/card:h-[80%] transition-all duration-700 ease-out opacity-0 group-hover/card:opacity-100 via-green-400"></div>
<div className="text-6xl md:text-8xl font-manrope font-medium text-white/[0.02] absolute -top-2 md:-top-4 -right-2 md:-right-4 pointer-events-none group-hover/card:text-green-500/5 transition-colors duration-500">02</div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-2 relative z-10 text-zinc-100">Bring Your Client Onboard</h3>
<p className="font-sans text-sm md:text-base leading-relaxed relative z-10 tracking-tight text-zinc-400">Send a quick invite to your client. They can join effortlessly to review scopes and approve terms without friction.</p>
</div>
</div>

<div className="relative flex gap-4 md:gap-8 items-center group/card">
<div className="relative z-10 w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl border flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)] group-hover/card:scale-110 group-hover/card:text-green-400 transition-all duration-500 group-hover/card:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(34,197,94,0.15)] group-hover/card:border-green-500/20 bg-zinc-950 border-white/10 text-zinc-400">
<svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.364 13.634a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506l4.013-4.009a1 1 0 0 0-3.004-3.004z"></path><path d="M14.487 7.858A1 1 0 0 1 14 7V2"></path><path d="M20 19.645V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l2.516 2.516"></path><path d="M8 18h1"></path></svg>
</div>
<div className="flex-1 relative flex flex-col p-6 md:p-8 rounded-[24px] border border-white/[0.05] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md overflow-hidden bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-transparent to-transparent group-hover/card:h-[80%] transition-all duration-700 ease-out opacity-0 group-hover/card:opacity-100 via-green-400"></div>
<div className="text-6xl md:text-8xl font-manrope font-medium text-white/[0.02] absolute -top-2 md:-top-4 -right-2 md:-right-4 pointer-events-none group-hover/card:text-green-500/5 transition-colors duration-500">03</div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-2 relative z-10 text-zinc-100">Define the Work Clearly</h3>
<p className="font-sans text-sm md:text-base leading-relaxed relative z-10 tracking-tight text-zinc-400">Detail the deliverables, timelines, and milestones. Establish a clear agreement to ensure both parties are fully aligned.</p>
</div>
</div>

<div className="relative flex gap-4 md:gap-8 items-center group/card">
<div className="relative z-10 w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl border flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)] group-hover/card:scale-110 group-hover/card:text-green-400 transition-all duration-500 group-hover/card:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(34,197,94,0.15)] group-hover/card:border-green-500/20 bg-zinc-950 border-white/10 text-zinc-400">
<svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="flex-1 relative flex flex-col p-6 md:p-8 rounded-[24px] border border-white/[0.05] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md overflow-hidden bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-transparent to-transparent group-hover/card:h-[80%] transition-all duration-700 ease-out opacity-0 group-hover/card:opacity-100 via-green-400"></div>
<div className="text-6xl md:text-8xl font-manrope font-medium text-white/[0.02] absolute -top-2 md:-top-4 -right-2 md:-right-4 pointer-events-none group-hover/card:text-green-500/5 transition-colors duration-500">04</div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-2 relative z-10 text-zinc-100">Work with Confidence</h3>
<p className="font-sans text-sm md:text-base leading-relaxed relative z-10 tracking-tight text-zinc-400">With funds held securely in escrow, you can focus entirely on creating your best work without worrying about payment delays.</p>
</div>
</div>

<div className="relative flex gap-4 md:gap-8 items-center group/card">
<div className="relative z-10 w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl border flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)] group-hover/card:scale-110 group-hover/card:text-green-400 transition-all duration-500 group-hover/card:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(34,197,94,0.15)] group-hover/card:border-green-500/20 bg-zinc-950 border-white/10 text-zinc-400">
<svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="flex-1 relative flex flex-col p-6 md:p-8 rounded-[24px] border border-white/[0.05] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md overflow-hidden bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-transparent to-transparent group-hover/card:h-[80%] transition-all duration-700 ease-out opacity-0 group-hover/card:opacity-100 via-green-400"></div>
<div className="text-6xl md:text-8xl font-manrope font-medium text-white/[0.02] absolute -top-2 md:-top-4 -right-2 md:-right-4 pointer-events-none group-hover/card:text-green-500/5 transition-colors duration-500">05</div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-2 relative z-10 text-zinc-100">Deliver &amp; Refine</h3>
<p className="font-sans text-sm md:text-base leading-relaxed relative z-10 tracking-tight text-zinc-400">Submit your final work for review. Handle any requested tweaks, and upon approval, watch the funds land in your wallet.</p>
</div>
</div>
</div>

<div className="flex flex-col gap-8 md:gap-10 w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] relative" id="content-client" style={{gridArea: 'stack', pointerEvents: 'none'}}>

<div className="absolute left-[27px] md:left-[39px] top-8 md:top-10 bottom-8 md:bottom-10 w-[2px] bg-gradient-to-b from-transparent to-transparent z-0 via-white/10"></div>

<div className="relative flex gap-4 md:gap-8 items-center group/card">
<div className="relative z-10 w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl border flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)] group-hover/card:scale-110 group-hover/card:text-green-400 transition-all duration-500 group-hover/card:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(34,197,94,0.15)] group-hover/card:border-green-500/20 bg-zinc-950 border-white/10 text-zinc-400">
<svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
</div>
<div className="flex-1 relative flex flex-col p-6 md:p-8 rounded-[24px] border border-white/[0.05] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md overflow-hidden bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-transparent to-transparent group-hover/card:h-[80%] transition-all duration-700 ease-out opacity-0 group-hover/card:opacity-100 via-green-400"></div>
<div className="text-6xl md:text-8xl font-manrope font-medium text-white/[0.02] absolute -top-2 md:-top-4 -right-2 md:-right-4 pointer-events-none group-hover/card:text-green-500/5 transition-colors duration-500">01</div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-2 relative z-10 text-zinc-100">Start a Workspace</h3>
<p className="font-sans text-sm md:text-base leading-relaxed relative z-10 tracking-tight text-zinc-400">Create a new project environment. This will serve as your single source of truth for all deliverables, terms, and payments.</p>
</div>
</div>

<div className="relative flex gap-4 md:gap-8 items-center group/card">
<div className="relative z-10 w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl border flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)] group-hover/card:scale-110 group-hover/card:text-green-400 transition-all duration-500 group-hover/card:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(34,197,94,0.15)] group-hover/card:border-green-500/20 bg-zinc-950 border-white/10 text-zinc-400">
<svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="19" x2="19" y1="8" y2="14"></line><line x1="22" x2="16" y1="11" y2="11"></line></svg>
</div>
<div className="flex-1 relative flex flex-col p-6 md:p-8 rounded-[24px] border border-white/[0.05] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md overflow-hidden bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-transparent to-transparent group-hover/card:h-[80%] transition-all duration-700 ease-out opacity-0 group-hover/card:opacity-100 via-green-400"></div>
<div className="text-6xl md:text-8xl font-manrope font-medium text-white/[0.02] absolute -top-2 md:-top-4 -right-2 md:-right-4 pointer-events-none group-hover/card:text-green-500/5 transition-colors duration-500">02</div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-2 relative z-10 text-zinc-100">Invite Your Freelancer</h3>
<p className="font-sans text-sm md:text-base leading-relaxed relative z-10 tracking-tight text-zinc-400">Bring your chosen talent into the workspace. A simple email invite gets them synced up with your project instantly.</p>
</div>
</div>

<div className="relative flex gap-4 md:gap-8 items-center group/card">
<div className="relative z-10 w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl border flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)] group-hover/card:scale-110 group-hover/card:text-green-400 transition-all duration-500 group-hover/card:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(34,197,94,0.15)] group-hover/card:border-green-500/20 bg-zinc-950 border-white/10 text-zinc-400">
<svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<div className="flex-1 relative flex flex-col p-6 md:p-8 rounded-[24px] border border-white/[0.05] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md overflow-hidden bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-transparent to-transparent group-hover/card:h-[80%] transition-all duration-700 ease-out opacity-0 group-hover/card:opacity-100 via-green-400"></div>
<div className="text-6xl md:text-8xl font-manrope font-medium text-white/[0.02] absolute -top-2 md:-top-4 -right-2 md:-right-4 pointer-events-none group-hover/card:text-green-500/5 transition-colors duration-500">03</div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-2 relative z-10 text-zinc-100">Agree on the Work</h3>
<p className="font-sans text-sm md:text-base leading-relaxed relative z-10 tracking-tight text-zinc-400">Review and sign off on the proposed scope. Ensure all milestones and deadlines match your exact expectations before starting.</p>
</div>
</div>

<div className="relative flex gap-4 md:gap-8 items-center group/card">
<div className="relative z-10 w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl border flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)] group-hover/card:scale-110 group-hover/card:text-green-400 transition-all duration-500 group-hover/card:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(34,197,94,0.15)] group-hover/card:border-green-500/20 bg-zinc-950 border-white/10 text-zinc-400">
<svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="flex-1 relative flex flex-col p-6 md:p-8 rounded-[24px] border border-white/[0.05] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md overflow-hidden bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-transparent to-transparent group-hover/card:h-[80%] transition-all duration-700 ease-out opacity-0 group-hover/card:opacity-100 via-green-400"></div>
<div className="text-6xl md:text-8xl font-manrope font-medium text-white/[0.02] absolute -top-2 md:-top-4 -right-2 md:-right-4 pointer-events-none group-hover/card:text-green-500/5 transition-colors duration-500">04</div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-2 relative z-10 text-zinc-100">Secure the Payment Upfront</h3>
<p className="font-sans text-sm md:text-base leading-relaxed relative z-10 tracking-tight text-zinc-400">Deposit the project funds into our smart escrow. The money is securely held and completely protected until you are satisfied.</p>
</div>
</div>

<div className="relative flex gap-4 md:gap-8 items-center group/card">
<div className="relative z-10 w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-2xl border flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_4px_12px_rgba(0,0,0,0.5)] group-hover/card:scale-110 group-hover/card:text-green-400 transition-all duration-500 group-hover/card:shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_8px_20px_rgba(34,197,94,0.15)] group-hover/card:border-green-500/20 bg-zinc-950 border-white/10 text-zinc-400">
<svg aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div className="flex-1 relative flex flex-col p-6 md:p-8 rounded-[24px] border border-white/[0.05] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md overflow-hidden bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 bg-gradient-to-b from-transparent to-transparent group-hover/card:h-[80%] transition-all duration-700 ease-out opacity-0 group-hover/card:opacity-100 via-green-400"></div>
<div className="text-6xl md:text-8xl font-manrope font-medium text-white/[0.02] absolute -top-2 md:-top-4 -right-2 md:-right-4 pointer-events-none group-hover/card:text-green-500/5 transition-colors duration-500">05</div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-2 relative z-10 text-zinc-100">Review and Release Funds</h3>
<p className="font-sans text-sm md:text-base leading-relaxed relative z-10 tracking-tight text-zinc-400">Evaluate the submitted work. Once it meets your standards, approve the milestone to instantly release payment to the freelancer.</p>
</div>
</div>
</div>
</div>
</div>
</div>


</section>
<section className="z-10 flex flex-col bg-zinc-950 w-full border-white/5 border-t pt-32 pb-24 relative items-center" id="faq">
<div className="absolute top-0 w-full max-w-3xl h-[400px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2"></div>
<div className="w-full max-w-[800px] mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-manrope font-medium text-transparent bg-clip-text bg-gradient-to-b tracking-tight mb-6 from-white to-zinc-400">
            Frequently Asked Questions
          </h2>
<p className="text-base md:text-lg font-sans font-normal tracking-tight text-zinc-400">
            Everything you need to know about secure freelance payments with
            Kodash.
          </p>
</div>
<div className="flex flex-col gap-4">
<div className="faq-card border border-white/[0.05] rounded-[24px] p-6 md:p-8 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10 relative overflow-hidden" style={{-MouseX: '50%', -MouseY: '50%'}}>
<div className="faq-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 rounded-[24px]" style={{background: 'radial-gradient(400px circle at 50% 50%, rgba(34,197,94,0.12), transparent 70%)'}}></div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-3 text-zinc-100 relative z-10">
              How does the escrow work?
            </h3>
<p className="font-sans text-sm md:text-base leading-relaxed tracking-tight text-zinc-400 relative z-10">
              The client deposits funds into a secure smart contract before work
              begins. Once the agreed-upon milestones are met and approved by
              the client, the funds are automatically released to the
              freelancer. This guarantees payment for the freelancer and ensures
              quality for the client.
            </p>
</div>
<div className="faq-card border border-white/[0.05] rounded-[24px] p-6 md:p-8 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10 relative overflow-hidden" style={{-MouseX: '50%', -MouseY: '50%'}}>
<div className="faq-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 rounded-[24px]" style={{background: 'radial-gradient(400px circle at 50% 50%, rgba(34,197,94,0.12), transparent 70%)'}}></div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-3 text-zinc-100 relative z-10">
              What happens if there's a dispute?
            </h3>
<p className="font-sans text-sm md:text-base leading-relaxed tracking-tight text-zinc-400 relative z-10">
              If there's a disagreement over the deliverables, our impartial
              dispute resolution team will review the initial agreement,
              communications, and submitted work to make a fair decision on how
              the funds should be distributed.
            </p>
</div>
<div className="faq-card border border-white/[0.05] rounded-[24px] p-6 md:p-8 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10 relative overflow-hidden" style={{-MouseX: '50%', -MouseY: '50%'}}>
<div className="faq-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 rounded-[24px]" style={{background: 'radial-gradient(400px circle at 50% 50%, rgba(34,197,94,0.12), transparent 70%)'}}></div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-3 text-zinc-100 relative z-10">
              Are there any fees?
            </h3>
<p className="font-sans text-sm md:text-base leading-relaxed tracking-tight text-zinc-400 relative z-10">
              We charge a transparent flat fee of 2.9% on transactions, which
              can be paid by the client, the freelancer, or split evenly between
              both parties during the contract setup phase.
            </p>
</div>
<div className="faq-card border border-white/[0.05] rounded-[24px] p-6 md:p-8 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02),0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-md bg-zinc-900/40 hover:bg-zinc-800/60 hover:border-white/10 relative overflow-hidden" style={{-MouseX: '50%', -MouseY: '50%'}}>
<div className="faq-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 rounded-[24px]" style={{background: 'radial-gradient(400px circle at 50% 50%, rgba(34,197,94,0.12), transparent 70%)'}}></div>
<h3 className="text-lg md:text-xl font-manrope font-medium tracking-tight mb-3 text-zinc-100 relative z-10">
              Which payment methods are supported?
            </h3>
<p className="font-sans text-sm md:text-base leading-relaxed tracking-tight text-zinc-400 relative z-10">
              We support major credit cards, bank transfers (ACH), and popular
              cryptocurrencies (USDC, ETH) for funding the escrow. Payouts can
              be made directly to a bank account or crypto wallet.
            </p>
</div>
</div>
</div>
<style>
        .faq-card {
          isolation: isolate;
        }
        .faq-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.4s ease;
          background: radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(34,197,94,0.10), transparent 65%);
          pointer-events: none;
          z-index: 0;
        }
        .faq-card:hover::before {
          opacity: 1;
        }
        .faq-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.4s ease;
          background: radial-gradient(200px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(74,222,128,0.18), transparent 60%);
          pointer-events: none;
          z-index: 0;
        }
        .faq-card:hover::after {
          opacity: 1;
        }
      </style>

</section>
<section className="flex flex-col bg-zinc-950 w-full z-10 pt-12 pr-6 pb-32 pl-6 relative items-center">
<div className="w-full max-w-[1200px] mx-auto">
<div className="group border-white/[0.08] md:p-12 lg:p-16 overflow-hidden bg-zinc-900/60 w-full max-w-6xl border rounded-[32px] mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_24px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
<style>
            @keyframes beam-top {
              0% { transform: translateX(-100%); opacity: 0; }
              5% { opacity: 1; }
              20% { opacity: 1; }
              25% { transform: translateX(100%); opacity: 0; }
              100% { transform: translateX(100%); opacity: 0; }
            }
            @keyframes beam-right {
              0% { transform: translateY(-100%); opacity: 0; }
              25% { transform: translateY(-100%); opacity: 0; }
              30% { opacity: 1; }
              45% { opacity: 1; }
              50% { transform: translateY(100%); opacity: 0; }
              100% { transform: translateY(100%); opacity: 0; }
            }
            @keyframes beam-bottom {
              0% { transform: translateX(100%); opacity: 0; }
              50% { transform: translateX(100%); opacity: 0; }
              55% { opacity: 1; }
              70% { opacity: 1; }
              75% { transform: translateX(-100%); opacity: 0; }
              100% { transform: translateX(-100%); opacity: 0; }
            }
            @keyframes beam-left {
              0% { transform: translateY(100%); opacity: 0; }
              75% { transform: translateY(100%); opacity: 0; }
              80% { opacity: 1; }
              95% { opacity: 1; }
              100% { transform: translateY(-100%); opacity: 0; }
            }
            @keyframes flashlight {
              0% { transform: translate(-50%, -50%) scale(1); opacity: 0.1; }
              50% { transform: translate(-30%, -60%) scale(1.2); opacity: 0.3; }
              100% { transform: translate(-70%, -40%) scale(0.9); opacity: 0.1; }
            }
          </style>

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-400 to-transparent z-50 pointer-events-none opacity-80" style={{animation: 'beam-top 6s linear infinite'}}></div>
<div className="absolute top-0 right-0 h-full w-[1px] bg-gradient-to-b from-transparent via-green-400 to-transparent z-50 pointer-events-none opacity-80" style={{animation: 'beam-right 6s linear infinite'}}></div>
<div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-transparent via-green-400 to-transparent z-50 pointer-events-none opacity-80" style={{animation: 'beam-bottom 6s linear infinite'}}></div>
<div className="absolute bottom-0 left-0 h-full w-[1px] bg-gradient-to-t from-transparent via-green-400 to-transparent z-50 pointer-events-none opacity-80" style={{animation: 'beam-left 6s linear infinite'}}></div>

<div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-green-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-1000" style={{animation: 'flashlight 8s ease-in-out infinite alternate'}}></div>
<div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen translate-x-1/3 -translate-y-1/3"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
<span className="text-xs font-sans font-medium text-zinc-300">
                  Escrow Platform
                </span>
</div>
<h2 className="md:text-5xl lg:text-6xl bg-clip-text text-4xl font-semibold text-transparent tracking-tight font-manrope bg-gradient-to-b from-white to-zinc-400 mb-6" style={{maskImage: 'linear-gradient(100deg, transparent, black 15%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(100deg, transparent, black 15%, black 100%, transparent)'}}>
                Secure your work,
                <br/>
                own your peace of mind.
              </h2>
<p className="lg:text-xl text-lg font-normal text-zinc-400 tracking-tight font-sans max-w-lg mb-8">
                Our platform is fully dedicated to helping freelancers and
                clients collaborate with absolute financial security at every
                stage of the project lifecycle.
              </p>
<p className="text-sm font-sans font-medium text-zinc-500 mb-6">
                Feel free to have a demo scheduled to discuss.
              </p>
<div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto">
<a className="sm:w-auto inline-flex items-center justify-center uppercase transition-all duration-150 active:translate-y-[4px] active:shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-2px_4px_rgba(34,197,94,0.25),0_0px_0_rgb(21,128,61),0_2px_4px_rgba(0,0,0,0.6)] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-zinc-950 hover:brightness-110 text-sm font-medium text-green-400 tracking-tighter font-sans bg-zinc-800 w-full h-14 border-zinc-700/50 border rounded-full pr-10 pl-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),inset_0_-4px_8px_rgba(34,197,94,0.25),0_4px_0_rgb(21,128,61),0_8px_16px_rgba(0,0,0,0.6)]" href="/login">
                  Create your workspace
                </a>
<span className="flex items-center gap-2 text-sm font-medium text-zinc-400 font-sans">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
                  Free platform access
                </span>
</div>
</div>
<div className="lg:h-[500px] flex lg:mt-0 w-full h-[400px] mt-8 relative items-center justify-center" style={{overflow: 'visible'}}>
<style>
                @keyframes springDropCard {
                  0%   { transform: translateY(-160px) rotate(-2deg); opacity: 0; }
                  35%  { transform: translateY(28px) rotate(-3deg); opacity: 1; }
                  52%  { transform: translateY(-14px) rotate(-1.5deg); }
                  65%  { transform: translateY(8px) rotate(-2.2deg); }
                  75%  { transform: translateY(-4px) rotate(-1.8deg); }
                  83%  { transform: translateY(2px) rotate(-2deg); }
                  90%  { transform: translateY(-1px) rotate(-2deg); }
                  95%  { transform: translateY(0.5px) rotate(-2deg); }
                  100% { transform: translateY(0px) rotate(-2deg); opacity: 1; }
                }
                @keyframes springDropTag1 {
                  0%   { transform: translateY(-140px) rotate(6deg); opacity: 0; }
                  35%  { transform: translateY(24px) rotate(7.5deg); opacity: 1; }
                  52%  { transform: translateY(-12px) rotate(5.5deg); }
                  65%  { transform: translateY(7px) rotate(6.3deg); }
                  75%  { transform: translateY(-3px) rotate(5.8deg); }
                  85%  { transform: translateY(1.5px) rotate(6deg); }
                  92%  { transform: translateY(-0.5px) rotate(6deg); }
                  100% { transform: translateY(0px) rotate(6deg); opacity: 1; }
                }
                @keyframes springDropTag2 {
                  0%   { transform: translateY(-120px) rotate(-4deg); opacity: 0; }
                  35%  { transform: translateY(22px) rotate(-5.5deg); opacity: 1; }
                  52%  { transform: translateY(-11px) rotate(-3.5deg); }
                  65%  { transform: translateY(6px) rotate(-4.2deg); }
                  75%  { transform: translateY(-3px) rotate(-3.8deg); }
                  85%  { transform: translateY(1.5px) rotate(-4deg); }
                  92%  { transform: translateY(-0.5px) rotate(-4deg); }
                  100% { transform: translateY(0px) rotate(-4deg); opacity: 1; }
                }
                @keyframes springDropAvatars {
                  0%   { transform: translateY(-100px); opacity: 0; }
                  35%  { transform: translateY(20px); opacity: 1; }
                  52%  { transform: translateY(-10px); }
                  65%  { transform: translateY(6px); }
                  75%  { transform: translateY(-3px); }
                  85%  { transform: translateY(1.5px); }
                  92%  { transform: translateY(-0.5px); }
                  100% { transform: translateY(0px); opacity: 1; }
                }
              </style>

<div className="z-10 sm:w-[320px] flex flex-col transform transition-transform duration-500 hover:rotate-0 bg-zinc-950/80 w-[280px] h-[380px] border-white/10 border rounded-2xl p-6 relative shadow-[0_24px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] backdrop-blur-xl overflow-hidden" style={{animation: 'springDropCard 2.8s cubic-bezier(0.22,1,0.36,1) both infinite', animationDelay: '0s'}}>
<div className="absolute -top-20 -left-20 w-48 h-48 bg-green-500/10 rounded-full blur-3xl pointer-events-none"></div>

<div className="flex items-center justify-between mb-6 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-green-400 to-green-600 p-[1px] shadow-lg">
<div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-400 tracking-tight">
                        Total in Escrow
                      </span>
<span className="text-lg font-semibold tracking-tight text-white">
                        $12,450.00
                      </span>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer shadow-sm">
<svg className="text-zinc-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</div>
</div>

<div className="overflow-hidden group cursor-pointer w-full border-white/5 border rounded-xl mb-6 pt-4 pr-4 pb-4 pl-4 relative shadow-inner">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="relative z-10 flex justify-between items-end mb-2">
<span className="text-xs font-medium text-zinc-300">
                      Project Alpha
                    </span>
<span className="text-xs font-medium text-green-400">85%</span>
</div>
<div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden relative z-10">
<div className="h-full bg-gradient-to-r from-green-500 to-green-300 w-[85%] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
</div>
<div className="flex z-10 mt-3 relative items-center justify-between">
<span className="text-[10px] text-zinc-500 font-medium">
                      Milestone 3 of 4
                    </span>
<span className="text-[10px] text-zinc-300 font-medium border border-white/10 bg-white/5 px-2 py-0.5 rounded-md">
                      Pending Review
                    </span>
</div>
</div>

<div className="flex flex-col gap-3 relative z-10">
<span className="text-xs font-medium text-zinc-500 mb-1">
                    Auto Payout
                  </span>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<div className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="text-[11px] font-medium text-zinc-200">
                          Jack Davis
                        </span>
<span className="text-[10px] text-zinc-500 font-medium">
                          2h ago
                        </span>
</div>
<span className="text-[10px] text-zinc-400">
                        $4,000 has been released
                      </span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
<svg className="text-green-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="flex flex-col flex-1">
<div className="flex items-center justify-between">
<span className="text-[11px] font-medium text-zinc-200">
                          Johnson Enoch
                        </span>
<span className="text-[10px] text-zinc-500 font-medium">
                          Yesterday
                        </span>
</div>
<span className="text-[10px] text-zinc-400">
                        Approved • $2,500
                      </span>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</div>
</section>
<footer className="w-full bg-zinc-950 border-t border-white/[0.05] py-12 px-6 z-10 relative">
<div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center sm:items-start gap-1">
<a className="text-base font-medium tracking-tighter text-white font-sans" href="#">
            Kodash
          </a>
<p className="text-xs text-zinc-500 font-sans tracking-tight">
            © 2025 Kodash Inc. All rights reserved.
          </p>
</div>
<nav className="flex items-center gap-6">
<a className="text-xs font-sans font-medium tracking-tight text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Privacy
          </a>
<a className="text-xs font-sans font-medium tracking-tight text-zinc-500 hover:text-zinc-300 transition-colors" href="#">
            Terms
          </a>
<a className="text-xs font-sans font-medium tracking-tight text-zinc-500 hover:text-zinc-300 transition-colors" href="#faq">
            FAQ
          </a>
<a className="text-xs font-sans font-medium tracking-tight text-zinc-500 hover:text-zinc-300 transition-colors" href="mailto:hello@kodash.com">
            Contact
          </a>
</nav>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
<span className="text-xs font-sans font-medium text-zinc-500 tracking-tight">
            All systems operational
          </span>
</div>
</div>
</footer>

    </>
  );
}
