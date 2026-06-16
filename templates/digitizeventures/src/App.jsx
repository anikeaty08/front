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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Instrument Sans"', 'sans-serif'],
serif: ['"Instrument Serif"', 'serif'],
},
colors: {
bg: '#06060C',
'bg-elevated': '#0B0B14',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", function() {
          const containers = document.querySelectorAll('.fundinho');
          containers.forEach(container => {
              if(!container.querySelector('.particulas-rapidas')) {
                  container.insertAdjacentHTML('afterbegin', `
                      <div class="particulas-rapidas"></div>
                      <div class="particulas-lentas"></div>
                  `);
              }
          });

          const menuBtn = document.getElementById('mobile-menu-btn');
          const mobileMenu = document.getElementById('mobile-menu');
          if (menuBtn && mobileMenu) {
              menuBtn.addEventListener('click', () => {
                  mobileMenu.classList.toggle('hidden');
                  const icon = mobileMenu.classList.contains('hidden') ? 'solar:hamburger-menu-linear' : 'solar:close-circle-linear';
                  menuBtn.innerHTML = `<iconify-icon icon="${icon}" width="24" height="24"></iconify-icon>`;
              });
          }

          const faqBtns = document.querySelectorAll('.faq-btn');
          faqBtns.forEach(btn => {
              btn.addEventListener('click', () => {
                  const content = btn.nextElementSibling;
                  const iconElement = btn.querySelector('iconify-icon');
                  const isHidden = content.classList.contains('hidden');
                  document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
                  document.querySelectorAll('.faq-btn iconify-icon').forEach(i => {
                      i.setAttribute('icon', 'solar:alt-arrow-down-linear');
                  });
                  if (isHidden) {
                      content.classList.remove('hidden');
                      iconElement.setAttribute('icon', 'solar:alt-arrow-up-linear');
                  }
              });
          });

          const applicationForm = document.getElementById('application-form');
          const applicationSuccess = document.getElementById('application-success');
          if (applicationForm && applicationSuccess) {
              applicationForm.addEventListener('submit', function(e) {
                  e.preventDefault();
                  applicationForm.classList.add('hidden');
                  applicationSuccess.classList.remove('hidden');
              });
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-[#06060C]/70 backdrop-blur-xl border-b border-white/[0.04]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-1 font-semibold text-lg tracking-wide" href="#home">
          Digitize Ventures
        </a>
<div className="hidden md:flex items-center bg-white/[0.04] rounded-full px-2 py-1.5">
<a className="px-4 py-1.5 text-sm font-medium bg-white/[0.08] rounded-full text-white" href="#home">
            Home
          </a>
<a className="px-4 py-1.5 text-sm font-medium text-white/60" href="#how-it-works">
            How It Works
          </a>
<a className="px-4 py-1.5 text-sm font-medium text-white/60" href="#apply">
            Apply
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-block border border-white/10 rounded-full px-5 py-2 text-sm text-white/70 font-medium hover:bg-white/[0.02] transition-colors" href="#apply">
            Apply
          </a>
<button className="md:hidden text-white p-2" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="hidden md:hidden bg-[#0B0B14] border-b border-white/[0.04] px-6 py-4 flex flex-col gap-4" id="mobile-menu">
<a className="text-sm font-medium text-white" href="#home">Home</a>
<a className="text-sm font-medium text-white/60" href="#how-it-works">
          How It Works
        </a>
<a className="text-sm font-medium text-white/60" href="#apply">Apply</a>
<a className="border border-white/10 rounded-full px-5 py-2 text-sm text-white/70 font-medium text-center mt-2" href="#apply">
          Apply
        </a>
</div>
</nav>

<header className="relative min-h-screen overflow-hidden flex flex-col items-center pt-36 pb-20 w-full fundinho z-0" id="home">
<div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-6xl">
<div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-2.5 text-sm font-medium mb-10">
<span className="bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">
            ✦
          </span>
<span className="bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent">
            VENTURE STUDIO · KINGSTON, JAMAICA
          </span>
</div>
<h1 className="flex flex-col md:flex-row items-center justify-center text-center leading-[0.95] tracking-tighter text-[clamp(3.5rem,7vw,6.5rem)] font-semibold mt-2" style={{overflow: 'visible'}}>
<span className="text-white relative">Build</span>
<div className="hidden md:flex items-center justify-center mx-4 lg:mx-8 relative w-16 lg:w-32 opacity-80">
<div className="w-full h-[2px] bg-white/[0.08] rounded-full relative overflow-hidden">
<div className="absolute left-0 top-0 h-full w-full spark-h"></div>
</div>
<div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(56,189,248,1)]"></div>
<div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-blue-400/30"></div>
</div>
<div className="md:hidden flex items-center justify-center my-4 h-12 relative opacity-80">
<div className="h-full w-[2px] bg-white/[0.08] rounded-full relative overflow-hidden">
<div className="absolute left-0 top-0 w-full h-full spark-v"></div>
</div>
<div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(56,189,248,1)]"></div>
<div className="absolute top-0 w-1.5 h-1.5 rounded-full bg-blue-400/30"></div>
</div>
<span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent relative drop-shadow-[0_0_30px_rgba(37,99,235,0.2)]" style={{paddingRight: '0.12em'}}>
            Fund
          </span>
<div className="hidden md:flex items-center justify-center mx-4 lg:mx-8 relative w-16 lg:w-32 opacity-80">
<div className="w-full h-[2px] bg-white/[0.08] rounded-full relative overflow-hidden">
<div className="absolute left-0 top-0 h-full w-full spark-h" style={{animationDelay: '1s'}}></div>
</div>
<div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(56,189,248,1)]"></div>
<div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-blue-400/30"></div>
</div>
<div className="md:hidden flex items-center justify-center my-4 h-12 relative opacity-80">
<div className="h-full w-[2px] bg-white/[0.08] rounded-full relative overflow-hidden">
<div className="absolute left-0 top-0 w-full h-full spark-v" style={{animationDelay: '1s'}}></div>
</div>
<div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(56,189,248,1)]"></div>
<div className="absolute top-0 w-1.5 h-1.5 rounded-full bg-blue-400/30"></div>
</div>
<span className="text-white relative">Scale</span>
</h1>
<p className="mt-8 max-w-xl mx-auto text-lg leading-relaxed bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent">
          Digitize Ventures is a venture studio that gives early-stage founders
          everything they need to grow — funding, technology, strategy, and the
          people to back them.
        </p>
<div className="mt-10 flex flex-row items-center justify-center gap-4">
<a className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-shadow" href="#apply">
            Apply to the Studio
          </a>
<a className="border border-white/10 text-white/70 font-medium px-8 py-4 rounded-xl text-base bg-transparent hover:bg-white/[0.02] transition-colors" href="#how-it-works">
            How It Works
          </a>
</div>
<div className="mt-20 w-full max-w-5xl mx-auto relative" style={{maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'}}>
<div className="rounded-2xl border border-white/[0.08] bg-[#0B0B14] overflow-hidden shadow-[0_20px_80px_-20px_rgba(30,80,200,0.15)] flex flex-col text-left relative z-10">
<div className="h-11 bg-[#0B0B14] border-b border-white/[0.05] flex items-center px-5 gap-2 relative z-10">
<div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]"></div>
</div>
<div className="w-full relative aspect-[16/9] bg-black/50 flex items-center justify-center">
<div className="text-center px-6">
<div className="text-[clamp(2.5rem,8vw,5rem)] font-semibold tracking-tight text-white">
                  BUILD.
                </div>
<div className="text-[clamp(2.5rem,8vw,5rem)] font-semibold tracking-tight bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent font-serif italic">
                  FUND.
                </div>
<div className="text-[clamp(2.5rem,8vw,5rem)] font-semibold tracking-tight text-white">
                  SCALE.
                </div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-white/[0.04] bg-[#06060C] overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<h2 className="text-xs uppercase tracking-widest text-white/25 font-semibold mb-8 text-center">
          Integra com
        </h2>
<div className="relative w-full flex items-center before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-[#06060C] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-[#06060C] after:to-transparent">
<div className="flex items-center w-max animate-carousel hover:[animation-play-state:paused]">

<div className="flex items-center justify-center gap-16 px-8">
<span className="text-2xl font-semibold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">
                Salesforce
              </span>
<span className="text-2xl font-bold tracking-tight text-white/30 transition-colors hover:text-white/60 cursor-default">
                HubSpot
              </span>
<span className="text-2xl font-black tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">
                GONG
              </span>
<span className="text-2xl font-bold tracking-tight text-white/30 transition-colors hover:text-white/60 cursor-default">
                Clari
              </span>
<span className="text-2xl font-bold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">
                slack
              </span>
<span className="text-2xl font-bold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">
                zoom
              </span>
<span className="text-xs font-semibold tracking-widest uppercase border border-white/10 rounded-full px-5 py-2 text-white/30 whitespace-nowrap cursor-default hover:bg-white/[0.02] hover:text-white/60 transition-all">
                +40 ferramentas
              </span>
</div>

<div className="flex items-center justify-center gap-16 px-8">
<span className="text-2xl font-semibold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">
                Salesforce
              </span>
<span className="text-2xl font-bold tracking-tight text-white/30 transition-colors hover:text-white/60 cursor-default">
                HubSpot
              </span>
<span className="text-2xl font-black tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">
                GONG
              </span>
<span className="text-2xl font-bold tracking-tight text-white/30 transition-colors hover:text-white/60 cursor-default">
                Clari
              </span>
<span className="text-2xl font-bold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">
                slack
              </span>
<span className="text-2xl font-bold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">
                zoom
              </span>
<span className="text-xs font-semibold tracking-widest uppercase border border-white/10 rounded-full px-5 py-2 text-white/30 whitespace-nowrap cursor-default hover:bg-white/[0.02] hover:text-white/60 transition-all">
                +40 ferramentas
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="agentes">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<span className="text-xs uppercase tracking-widest font-semibold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-5 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
          Manifesto
        </span>
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white">
          We believe Jamaica is ready.
        </h2>
<p className="mt-6 max-w-3xl text-center text-lg leading-[1.7] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent">
          Entrepreneurship is the most powerful tool for building a stronger
          Jamaica. Digitize Ventures exists to find the founders who are serious
          about that — and give them everything they need to actually do it. We
          don't advise from the sidelines. We get in and build with you.
        </p>
<div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-16 w-full">
<div className="bg-[#0B0B14] border border-white/[0.04] rounded-[24px] p-8 text-center">
<div className="text-4xl font-semibold tracking-tight text-white mb-2">
              5+
            </div>
<p className="text-sm text-white/60">Portfolio Companies</p>
</div>
<div className="bg-[#0B0B14] border border-white/[0.04] rounded-[24px] p-8 text-center">
<div className="text-4xl font-semibold tracking-tight text-white mb-2">
              10+
            </div>
<p className="text-sm text-white/60">Tools &amp; Resources</p>
</div>
<div className="bg-[#0B0B14] border border-white/[0.04] rounded-[24px] p-8 text-center">
<div className="text-4xl font-semibold tracking-tight text-white mb-2">
              100%
            </div>
<p className="text-sm text-white/60">Jamaica-Focused</p>
</div>
<div className="bg-[#0B0B14] border border-white/[0.04] rounded-[24px] p-8 text-center">
<div className="text-4xl font-semibold tracking-tight text-white mb-2">
              1-on-1
            </div>
<p className="text-sm text-white/60">Mentorship</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#0B0B14]/50 border-t border-white/[0.02] relative" id="how-it-works">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
<span className="text-xs uppercase tracking-widest font-semibold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-5 flex items-center gap-2">
<iconify-icon height="16" icon="solar:cpu-bolt-linear" width="16"></iconify-icon>
          THE PROCESS
        </span>
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white mb-8">
          No fluff. Here's exactly how it works.
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mt-10">
<div className="bg-[#0B0B14]/80 backdrop-blur-xl border border-white/[0.08] rounded-[24px] p-8">
<div className="text-sm text-blue-400 font-semibold mb-3">
              01 — Apply
            </div>
<p className="text-sm leading-[1.8] text-white/70">
              Fill out a short application about your startup and where you are
              right now. It takes less than 10 minutes. We read every one.
            </p>
</div>
<div className="bg-[#0B0B14]/80 backdrop-blur-xl border border-white/[0.08] rounded-[24px] p-8">
<div className="text-sm text-blue-400 font-semibold mb-3">
              02 — Review
            </div>
<p className="text-sm leading-[1.8] text-white/70">
              Our team reviews your application within 5–7 business days. We
              look at your traction, your team, and whether we're the right fit
              for each other.
            </p>
</div>
<div className="bg-[#0B0B14]/80 backdrop-blur-xl border border-white/[0.08] rounded-[24px] p-8">
<div className="text-sm text-blue-400 font-semibold mb-3">
              03 — Onboard
            </div>
<p className="text-sm leading-[1.8] text-white/70">
              If accepted, we move fast. You'll be matched with tools,
              resources, a tech setup plan, funding guidance, and a dedicated
              mentor.
            </p>
</div>
<div className="bg-[#0B0B14]/80 backdrop-blur-xl border border-white/[0.08] rounded-[24px] p-8">
<div className="text-sm text-blue-400 font-semibold mb-3">
              04 — Scale
            </div>
<p className="text-sm leading-[1.8] text-white/70">
              We work alongside you — removing blockers, making introductions,
              implementing solutions, and helping you hit every next milestone.
            </p>
</div>
</div>
<div className="w-full mt-20">
<h3 className="text-2xl font-semibold tracking-tight text-white text-center mb-10">
            What's included when you're accepted.
          </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-2xl border border-white/[0.05] bg-[#0B0B14] px-5 py-4 text-white/80">
              Funding Access &amp; Preparation
            </div>
<div className="rounded-2xl border border-white/[0.05] bg-[#0B0B14] px-5 py-4 text-white/80">
              Full Technology Stack Implementation
            </div>
<div className="rounded-2xl border border-white/[0.05] bg-[#0B0B14] px-5 py-4 text-white/80">
              Business Strategy Development
            </div>
<div className="rounded-2xl border border-white/[0.05] bg-[#0B0B14] px-5 py-4 text-white/80">
              Legal &amp; Compliance Guidance
            </div>
<div className="rounded-2xl border border-white/[0.05] bg-[#0B0B14] px-5 py-4 text-white/80">
              Premium Tools &amp; Software Access
            </div>
<div className="rounded-2xl border border-white/[0.05] bg-[#0B0B14] px-5 py-4 text-white/80">
              1-on-1 Mentorship Sessions
            </div>
<div className="rounded-2xl border border-white/[0.05] bg-[#0B0B14] px-5 py-4 text-white/80">
              Network &amp; Introductions
            </div>
<div className="rounded-2xl border border-white/[0.05] bg-[#0B0B14] px-5 py-4 text-white/80">
              Operational Support
            </div>
<div className="rounded-2xl border border-white/[0.05] bg-[#0B0B14] px-5 py-4 text-white/80">
              Brand &amp; Marketing Guidance
            </div>
<div className="rounded-2xl border border-white/[0.05] bg-[#0B0B14] px-5 py-4 text-white/80">
              Finance &amp; Admin Setup
            </div>
</div>
</div>
<div className="w-full mt-20">
<h3 className="text-2xl font-semibold tracking-tight text-white text-center mb-8">
            Who should apply?
          </h3>
<div className="flex flex-wrap justify-center gap-3">
<span className="text-sm font-medium text-white/70 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-2">
              Early-Stage Startup
            </span>
<span className="text-sm font-medium text-white/70 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-2">
              Based in Jamaica
            </span>
<span className="text-sm font-medium text-white/70 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-2">
              Has Traction or a Validated Idea
            </span>
<span className="text-sm font-medium text-white/70 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-2">
              Ready to Execute
            </span>
<span className="text-sm font-medium text-white/70 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-2">
              Open to Being Challenged
            </span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="resultados">
<div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
<span className="text-xs uppercase tracking-widest font-semibold text-white/30 mb-5">
          Home
        </span>
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white mb-6">
          We meet you
          <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">
            where you are
          </span>
          .
        </h2>
<p className="max-w-3xl text-center text-lg leading-[1.7] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-14">
          Whether you're finding your footing or pushing for your next milestone
          — we have a path for you.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
<div className="card-glow-wrapper delay-1">
<div className="card-glow-inner p-8">
<div className="text-sm text-blue-400 font-semibold mb-3">
                Stage 01 — Validate
              </div>
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.8]">
                You have traction and a real idea. We help you stress-test it,
                structure it, and get it ready to move.
              </p>
</div>
</div>
<div className="card-glow-wrapper delay-2">
<div className="card-glow-inner p-8">
<div className="text-sm text-blue-400 font-semibold mb-3">
                Stage 02 — Build
              </div>
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.8]">
                Your foundation is set. We plug in the technology, systems, and
                strategy to build the right way.
              </p>
</div>
</div>
<div className="card-glow-wrapper delay-3">
<div className="card-glow-inner p-8">
<div className="text-sm text-blue-400 font-semibold mb-3">
                Stage 03 — Scale
              </div>
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.8]">
                You're moving. We help you access funding, expand operations,
                and hit the milestones that matter.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-white/[0.02] relative overflow-hidden bg-gradient-to-b from-[#0B0B14]/30 to-[#06060C]">
<div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
<span className="text-xs uppercase tracking-widest font-semibold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-4">
          O Novo Padrão
        </span>
<h2 className="text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-tight text-white mb-14 text-center">
          A janela de oportunidade
          <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">
            está fechando
          </span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="group relative bg-[#0B0B14]/80 backdrop-blur-md border border-white/[0.04] rounded-[32px] p-10 flex flex-col justify-between overflow-hidden hover:border-white/[0.08] transition-all duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon className="text-white" height="64" icon="solar:chart-2-linear" width="64"></iconify-icon>
</div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
<div className="relative z-10 mb-10">
<div className="text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-4 block">
                67
                <span className="text-4xl text-blue-400 align-top">%</span>
</div>
<div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></div>
</div>
<div className="relative z-10 mt-auto">
<p className="text-sm md:text-base text-white/80 leading-[1.8] mb-6">
                "dos líderes de operações de vendas afirmam que fazer forecasts
                precisos está mais difícil hoje do que há três anos."
              </p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-xs text-white/40 uppercase tracking-widest font-semibold">
                  Gartner, 2025
                </span>
</div>
</div>
</div>

<div className="group relative bg-[#0B0B14]/80 backdrop-blur-md border border-white/[0.04] rounded-[32px] p-10 flex flex-col justify-between overflow-hidden hover:border-white/[0.08] transition-all duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon className="text-white" height="64" icon="solar:target-linear" width="64"></iconify-icon>
</div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
<div className="relative z-10 mb-10">
<div className="text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-4 block">
                75
                <span className="text-4xl text-blue-400 align-top">%</span>
</div>
<div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></div>
</div>
<div className="relative z-10 mt-auto">
<p className="text-sm md:text-base text-white/80 leading-[1.8] mb-6">
                "das empresas B2B terão IA para otimização de funil implementada
                até o fim de 2025. O atraso gerará desvantagem permanente."
              </p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-xs text-white/40 uppercase tracking-widest font-semibold">
                  IDC FutureScape
                </span>
</div>
</div>
</div>

<div className="group relative bg-[#0B0B14]/80 backdrop-blur-md border border-white/[0.04] rounded-[32px] p-10 flex flex-col justify-between overflow-hidden hover:border-white/[0.08] transition-all duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon className="text-white" height="64" icon="solar:danger-triangle-linear" width="64"></iconify-icon>
</div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
<div className="relative z-10 mb-10">
<div className="text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-4 block">
                25
                <span className="text-4xl text-blue-400 align-top">%</span>
</div>
<div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></div>
</div>
<div className="relative z-10 mt-auto">
<p className="text-sm md:text-base text-white/80 leading-[1.8] mb-6">
                "da receita potencial pode ser perdida por problemas de
                qualidade de dados e processos desalinhados, sem a adoção de
                orquestração."
              </p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-xs text-white/40 uppercase tracking-widest font-semibold">
                  Forrester, 2025
                </span>
</div>
</div>
</div>
</div>
<a className="mt-14 bg-white text-black font-semibold px-8 py-4 rounded-full text-base inline-flex hover:scale-105 transition-transform" href="#demo">
          Proteger minha receita
        </a>
</div>
</section>

<section className="py-32 px-6" id="sobre">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<span className="text-xs uppercase tracking-widest font-semibold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-5">
          Platform Breakdown
        </span>
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white mb-6">
          One studio.
          <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">
            Everything you need
          </span>
          .
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full">
<div className="rounded-[32px] border border-white/[0.04] bg-[#0B0B14] p-8">
<h3 className="text-xl font-semibold text-white mb-3">
              Capital Access
            </h3>
<p className="text-sm leading-[1.8] text-white/70">
              We help you identify and prepare for the right funding
              opportunities.
            </p>
</div>
<div className="rounded-[32px] border border-white/[0.04] bg-[#0B0B14] p-8">
<h3 className="text-xl font-semibold text-white mb-3">Technology</h3>
<p className="text-sm leading-[1.8] text-white/70">
              We implement your full tech stack — tools, software, and
              infrastructure.
            </p>
</div>
<div className="rounded-[32px] border border-white/[0.04] bg-[#0B0B14] p-8">
<h3 className="text-xl font-semibold text-white mb-3">
              Operational Support
            </h3>
<p className="text-sm leading-[1.8] text-white/70">
              We work with you at the execution level, not just the advisory
              level.
            </p>
</div>
<div className="rounded-[32px] border border-white/[0.04] bg-[#0B0B14] p-8">
<h3 className="text-xl font-semibold text-white mb-3">
              Network &amp; Introductions
            </h3>
<p className="text-sm leading-[1.8] text-white/70">
              We open doors to the right people, partners, and opportunities in
              Jamaica.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/[0.02]">
<div className="max-w-6xl mx-auto flex flex-col items-center">
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white mb-14">
          Como os agentes funcionam
          <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">
            na prática
          </span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
<div className="aspect-video rounded-[24px] border border-white/[0.04] bg-[#0B0B14] flex items-center justify-center text-white/20 text-sm">
            Caso de Uso 1
          </div>
<div className="aspect-video rounded-[24px] border border-white/[0.04] bg-[#0B0B14] flex items-center justify-center text-white/20 text-sm">
            Caso de Uso 2
          </div>
<div className="aspect-video rounded-[24px] border border-white/[0.04] bg-[#0B0B14] flex items-center justify-center text-white/20 text-sm">
            Caso de Uso 3
          </div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-[#0B0B14]/50 border-t border-white/[0.02]" id="apply">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
<span className="text-xs uppercase tracking-widest font-semibold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-5">
          OPEN APPLICATIONS
        </span>
<h2 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold text-center leading-tight tracking-tight text-white mb-4">
          Apply to
          <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">
            Digitize Ventures
          </span>
          .
        </h2>
<p className="text-lg text-center bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-10">
          Tell us about your startup. Be honest. Be specific.
        </p>
<div className="w-full max-w-3xl mx-auto rounded-[24px] border border-white/[0.04] bg-[#06060C] shadow-2xl relative overflow-hidden p-8 md:p-10">
<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
<div className="hidden text-center py-16" id="application-success">
<h3 className="text-3xl font-semibold tracking-tight text-white mb-4">
              Application Received.
            </h3>
<p className="text-white/60">
              We'll review your submission and get back to you within 5–7
              business days. Keep building.
            </p>
</div>
<form className="grid grid-cols-1 md:grid-cols-2 gap-5" id="application-form">
<div>
<label className="block text-sm text-white/70 mb-2">Full Name</label>
<input className="w-full rounded-xl bg-[#0B0B14] border border-white/10 px-4 py-3 text-white outline-none" name="full_name" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-white/70 mb-2">
                Email Address
              </label>
<input className="w-full rounded-xl bg-[#0B0B14] border border-white/10 px-4 py-3 text-white outline-none" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-sm text-white/70 mb-2">
                Startup Name
              </label>
<input className="w-full rounded-xl bg-[#0B0B14] border border-white/10 px-4 py-3 text-white outline-none" name="startup_name" required="" type="text"/>
</div>
<div>
<label className="block text-sm text-white/70 mb-2">
                Industry / Sector
              </label>
<select className="w-full rounded-xl bg-[#0B0B14] border border-white/10 px-4 py-3 text-white outline-none" name="industry" required="">
<option value="">Select</option>
<option>Technology</option>
<option>Retail &amp; E-Commerce</option>
<option>Food &amp; Beverage</option>
<option>Logistics &amp; Delivery</option>
<option>Finance &amp; Fintech</option>
<option>Health &amp; Wellness</option>
<option>Real Estate</option>
<option>Other</option>
</select>
</div>
<div className="md:col-span-2">
<label className="block text-sm text-white/70 mb-2">
                What does your startup do?
              </label>
<textarea className="w-full rounded-xl bg-[#0B0B14] border border-white/10 px-4 py-3 text-white outline-none" name="startup_description" required="" rows="4"></textarea>
</div>
<div>
<label className="block text-sm text-white/70 mb-2">
                How long have you been operating?
              </label>
<select className="w-full rounded-xl bg-[#0B0B14] border border-white/10 px-4 py-3 text-white outline-none" name="operating_length" required="">
<option value="">Select</option>
<option>Less than 6 months</option>
<option>6–12 months</option>
<option>1–2 years</option>
<option>2+ years</option>
</select>
</div>
<div>
<label className="block text-sm text-white/70 mb-2">
                Current monthly revenue, if any
              </label>
<select className="w-full rounded-xl bg-[#0B0B14] border border-white/10 px-4 py-3 text-white outline-none" name="revenue" required="">
<option value="">Select</option>
<option>No revenue yet</option>
<option>Under $50K JMD</option>
<option>$50K–$200K JMD</option>
<option>$200K+ JMD</option>
</select>
</div>
<div className="md:col-span-2">
<label className="block text-sm text-white/70 mb-2">
                What do you need most? (select all that apply)
              </label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-white/80">
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B0B14] px-4 py-3">
<input name="needs" type="checkbox" value="Funding Access"/>
                  Funding Access
                </label>
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B0B14] px-4 py-3">
<input name="needs" type="checkbox" value="Technology Implementation"/>
                  Technology Implementation
                </label>
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B0B14] px-4 py-3">
<input name="needs" type="checkbox" value="Business Strategy"/>
                  Business Strategy
                </label>
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B0B14] px-4 py-3">
<input name="needs" type="checkbox" value="Legal &amp; Compliance"/>
                  Legal &amp; Compliance
                </label>
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B0B14] px-4 py-3">
<input name="needs" type="checkbox" value="Mentorship"/>
                  Mentorship
                </label>
<label className="flex items-center gap-3 rounded-xl border border-white/10 bg-[#0B0B14] px-4 py-3">
<input name="needs" type="checkbox" value="All of the above"/>
                  All of the above
                </label>
</div>
</div>
<div>
<label className="block text-sm text-white/70 mb-2">
                Have you registered your company in Jamaica?
              </label>
<select className="w-full rounded-xl bg-[#0B0B14] border border-white/10 px-4 py-3 text-white outline-none" name="registered_company" required="">
<option value="">Select</option>
<option>Yes</option>
<option>No</option>
<option>In Progress</option>
</select>
</div>
<div>
<label className="block text-sm text-white/70 mb-2">
                Why Digitize Ventures?
              </label>
<input className="w-full rounded-xl bg-[#0B0B14] border border-white/10 px-4 py-3 text-white outline-none" name="why_digitize" required="" type="text"/>
</div>
<div className="md:col-span-2">
<label className="block text-sm text-white/70 mb-2">
                Anything else we should know?
                <span className="text-white/40">(optional)</span>
</label>
<textarea className="w-full rounded-xl bg-[#0B0B14] border border-white/10 px-4 py-3 text-white outline-none" name="anything_else" rows="4"></textarea>
</div>
<div className="md:col-span-2">
<button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-shadow" type="submit">
                Submit My Application
              </button>
</div>
</form>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/[0.02]" id="faq">
<div className="max-w-3xl mx-auto flex flex-col items-center">
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white mb-4">
          Common
          <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">
            questions
          </span>
          .
        </h2>
<p className="text-lg text-center bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-10">
          Answers for founders considering the studio.
        </p>
<div className="w-full flex flex-col">
<div className="border-b border-white/[0.05]">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left text-base font-medium text-white focus:outline-none hover:text-blue-400 transition-colors">
<span>Do I need to have a registered company to apply?</span>
<iconify-icon className="text-white/30" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content hidden pb-5">
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">
                No. You can apply at any stage of formation. We'll help you get
                properly set up as part of the onboarding process.
              </p>
</div>
</div>
<div className="border-b border-white/[0.05]">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left text-base font-medium text-white focus:outline-none hover:text-blue-400 transition-colors">
<span>Is this only for tech startups?</span>
<iconify-icon className="text-white/30" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content hidden pb-5">
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">
                No. We work with founders across industries — retail, logistics,
                services, food, and more. If there's a technology component we
                can plug in, we're interested.
              </p>
</div>
</div>
<div className="border-b border-white/[0.05]">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left text-base font-medium text-white focus:outline-none hover:text-blue-400 transition-colors">
<span>What does Digitize Ventures get in return?</span>
<iconify-icon className="text-white/30" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content hidden pb-5">
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">
                We work on a partnership basis. Terms are discussed individually
                during the review stage — we'll be upfront about everything
                before you commit to anything.
              </p>
</div>
</div>
<div className="border-b border-white/[0.05]">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left text-base font-medium text-white focus:outline-none hover:text-blue-400 transition-colors">
<span>How long does the programme last?</span>
<iconify-icon className="text-white/30" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content hidden pb-5">
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">
                There's no fixed end date. We stay involved as long as we're
                adding value. Our goal is long-term growth, not a 12-week
                sprint.
              </p>
</div>
</div>
<div className="border-b border-white/[0.05]">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left text-base font-medium text-white focus:outline-none hover:text-blue-400 transition-colors">
<span>
                Can I apply if my startup is already generating revenue?
              </span>
<iconify-icon className="text-white/30" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content hidden pb-5">
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">
                Yes. In fact, some traction makes your application stronger. We
                work with founders at various stages of early growth.
              </p>
</div>
</div>
<div className="border-b border-white/[0.05]">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left text-base font-medium text-white focus:outline-none hover:text-blue-400 transition-colors">
<span>What happens if I'm not accepted?</span>
<iconify-icon className="text-white/30" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content hidden pb-5">
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">
                We'll let you know within 5–7 business days. If it's not the
                right time, we'll tell you why and what we'd need to see before
                reconsidering.
              </p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.04] py-14 px-6 bg-[#06060C]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div>
<div className="font-semibold text-lg tracking-wide text-white">
              Digitize Ventures
            </div>
<p className="text-sm text-white/50 mt-3">
              A Venture Studio. Kingston, Jamaica.
            </p>
<p className="text-sm text-white/30 mt-2">
              Building the next generation of Jamaican startups.
            </p>
</div>
<div>
<div className="text-sm font-medium text-white mb-3">Quick Links</div>
<div className="flex flex-col gap-2 text-sm text-white/50">
<a className="hover:text-white transition-colors" href="#home">
                Home
              </a>
<a className="hover:text-white transition-colors" href="#how-it-works">
                How It Works
              </a>
<a className="hover:text-white transition-colors" href="#apply">
                Apply
              </a>
</div>
</div>
<div>
<div className="text-sm font-medium text-white mb-3">Contact</div>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="mailto:hello@digitizeventures.com">
              hello@digitizeventures.com
            </a>
</div>
<div>
<div className="text-sm font-medium text-white mb-3">Social</div>
<div className="flex flex-col gap-2 text-sm text-white/50">
<a className="hover:text-white transition-colors" href="#">
                LinkedIn
              </a>
<a className="hover:text-white transition-colors" href="#">
                Instagram
              </a>
<a className="hover:text-white transition-colors" href="#">X</a>
</div>
</div>
</div>
<div className="text-center text-xs text-white/20">
          © 2025 Digitize Ventures. All rights reserved.
        </div>
</div>
</footer>


    </>
  );
}
