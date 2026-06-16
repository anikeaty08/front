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



      lucide.createIcons({
        attrs: {
          "stroke-width": 1.5
        }
      });

      const menuButton = document.getElementById("menuButton");
      const mobileMenu = document.getElementById("mobileMenu");

      menuButton.addEventListener("click", () => {
        const isHidden = mobileMenu.classList.toggle("hidden");
        menuButton.setAttribute("aria-expanded", String(!isHidden));
        menuButton.innerHTML = isHidden
          ? '<i data-lucide="menu" class="h-5 w-5"></i>'
          : '<i data-lucide="x" class="h-5 w-5"></i>';
        lucide.createIcons({
          attrs: {
            "stroke-width": 1.5
          }
        });
      });

      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileMenu.classList.add("hidden");
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.innerHTML = '<i data-lucide="menu" class="h-5 w-5"></i>';
          lucide.createIcons({
            attrs: {
              "stroke-width": 1.5
            }
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-[#1f4e57] text-[#f7efe4]">
<div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-3 text-sm">
<span className="text-center font-medium tracking-tight">
          Welcome to Fable Arc — where creativity meets innovation, amplified by
          technology.
        </span>
</div>
</div>
<header className="sticky top-0 z-50 border-b border-[#173f47]/10 bg-[#fbf7ee]/85 backdrop-blur-xl">
<nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
<a className="group flex items-center gap-3" href="#home">
<div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1f4e57] shadow-sm ring-1 ring-[#173f47]/10">
<span className="absolute bottom-2 h-1 w-7 rounded-full bg-[#25a8bc]"></span>
<span className="absolute bottom-3 h-1 w-7 rounded-full bg-[#c22a8d]"></span>
<span className="absolute bottom-4 h-1 w-7 rounded-full bg-[#b8cc26]"></span>
<span className="-mt-1 text-2xl font-semibold leading-none text-[#fbf7ee]">
              A
            </span>
</div>
<div className="leading-none">
<p className="text-lg font-semibold tracking-tight text-[#173f47]">
              Fable Arc
            </p>
<p className="mt-1 text-xs font-medium text-[#5f767b]">
              Storytelling + Technology
            </p>
</div>
</a>
<div className="hidden items-center gap-1 md:flex">
<a className="rounded-full px-4 py-2 text-sm font-medium text-[#173f47] transition hover:bg-[#173f47]/5" href="#home">
            Home
          </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-[#173f47] transition hover:bg-[#173f47]/5" href="#services">
            Services
          </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-[#173f47] transition hover:bg-[#173f47]/5" href="#about">
            About
          </a>
<a className="rounded-full px-4 py-2 text-sm font-medium text-[#173f47] transition hover:bg-[#173f47]/5" href="#contact">
            Contact
          </a>
</div>
<div className="hidden md:block">
<a className="inline-flex items-center gap-2 rounded-full bg-[#173f47] px-5 py-2.5 text-sm font-semibold text-[#fbf7ee] shadow-sm shadow-[#173f47]/20 transition hover:-translate-y-0.5 hover:bg-[#245a64]" href="#contact">
            Get in touch
            <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>
<button aria-expanded="false" aria-label="Open menu" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#173f47]/10 bg-white/60 text-[#173f47] shadow-sm md:hidden" id="menuButton" type="button">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</nav>
<div className="hidden border-t border-[#173f47]/10 bg-[#fbf7ee] px-6 py-4 md:hidden" id="mobileMenu">
<div className="grid gap-2">
<a className="rounded-2xl px-4 py-3 text-sm font-medium text-[#173f47] hover:bg-[#173f47]/5" href="#home">
            Home
          </a>
<a className="rounded-2xl px-4 py-3 text-sm font-medium text-[#173f47] hover:bg-[#173f47]/5" href="#services">
            Services
          </a>
<a className="rounded-2xl px-4 py-3 text-sm font-medium text-[#173f47] hover:bg-[#173f47]/5" href="#about">
            About
          </a>
<a className="rounded-2xl px-4 py-3 text-sm font-medium text-[#173f47] hover:bg-[#173f47]/5" href="#contact">
            Contact
          </a>
</div>
</div>
</header>
<main>
<section className="relative overflow-hidden" id="home">
<div className="absolute left-1/2 top-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#b8cc26]/20 blur-3xl animate-pulse"></div>
<div className="absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-[#c22a8d]/10 blur-3xl animate-pulse"></div>
<div className="absolute bottom-10 left-10 -z-10 h-80 w-80 rounded-full bg-[#25a8bc]/10 blur-3xl animate-pulse"></div>
<div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-[#173f47]/10 bg-white/70 px-4 py-2 shadow-sm backdrop-blur">
<span className="flex h-2 w-2 rounded-full bg-[#b8cc26]"></span>
<span className="text-sm font-medium text-[#46656b]">
                Registered Non-Profit Company
              </span>
</div>
<h1 className="mt-8 max-w-3xl text-5xl font-semibold tracking-tight text-[#173f47] sm:text-6xl lg:text-7xl">
              Storytelling for a new digital age.
            </h1>
<p className="mt-6 max-w-2xl text-lg leading-8 text-[#46656b] sm:text-xl">
              Fable Arc connects the power of storytelling with cutting-edge
              technology, creating a space where creativity and innovation
              converge.
            </p>
<p className="mt-4 max-w-2xl text-lg leading-8 text-[#46656b] sm:text-xl">
              Through AI, emerging media and inclusive story programmes, we
              amplify voices, inspire narratives and empower creators across
              South Africa and beyond.
            </p>
<div className="mt-9 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#173f47] px-6 py-3 text-base font-semibold text-[#fbf7ee] shadow-lg shadow-[#173f47]/20 transition hover:-translate-y-0.5 hover:bg-[#245a64]" href="#services">
                Explore programmes
                <i className="h-4 w-4" data-lucide="sparkles"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-full border border-[#173f47]/10 bg-white/70 px-6 py-3 text-base font-semibold text-[#173f47] shadow-sm transition hover:-translate-y-0.5 hover:bg-white" href="#about">
                Our story
                <i className="h-4 w-4" data-lucide="book-open"></i>
</a>
</div>
<div className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl">
<div className="rounded-3xl border border-[#173f47]/10 bg-white/65 p-4 shadow-sm backdrop-blur">
<p className="text-2xl font-semibold tracking-tight text-[#173f47]">
                  AI
                </p>
<p className="mt-1 text-sm text-[#5f767b]">Story tools</p>
</div>
<div className="rounded-3xl border border-[#173f47]/10 bg-white/65 p-4 shadow-sm backdrop-blur">
<p className="text-2xl font-semibold tracking-tight text-[#173f47]">
                  8
                </p>
<p className="mt-1 text-sm text-[#5f767b]">Objectives</p>
</div>
<div className="rounded-3xl border border-[#173f47]/10 bg-white/65 p-4 shadow-sm backdrop-blur">
<p className="text-2xl font-semibold tracking-tight text-[#173f47]">
                  2025
                </p>
<p className="mt-1 text-sm text-[#5f767b]">Founded</p>
</div>
</div>
</div>
<div className="relative mx-auto w-full max-w-2xl">
<div className="relative rounded-[2rem] border border-white/40 bg-[#1f4e57] p-4 shadow-2xl shadow-[#173f47]/25">
<div className="overflow-hidden rounded-[1.5rem] bg-[#123b42]">
<div className="relative aspect-[4/3]">
<div className="absolute inset-x-8 bottom-8 h-28 rounded-full bg-[#25a8bc]/10 blur-2xl"></div>
<div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#f7efe4]/10 animate-spin" style={{animationDuration: '18s'}}></div>
<div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#25a8bc]/20 bg-[#25a8bc]/5 blur-sm"></div>
<div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-[#f7efe4]/15 bg-[#fbf7ee]/10 text-[#fbf7ee] shadow-2xl shadow-black/30 backdrop-blur">
<div className="absolute inset-4 rounded-2xl border border-[#25a8bc]/20"></div>
<i className="h-12 w-12 text-[#b8cc26]" data-lucide="bot"></i>
<span className="mt-2 text-3xl font-semibold tracking-tight">
                      AI
                    </span>
<span className="mt-1 text-xs font-medium uppercase tracking-widest text-[#d8e4df]">
                      Story engine
                    </span>
</div>
<div className="absolute left-1/2 top-1/2 h-px w-80 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#25a8bc]/50 to-transparent"></div>
<div className="absolute left-1/2 top-1/2 h-80 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#c22a8d]/45 to-transparent"></div>
<div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#b8cc26]/15"></div>
<div className="absolute left-14 top-14 rounded-3xl border border-[#f7efe4]/15 bg-[#0f2d33]/90 p-4 shadow-xl backdrop-blur animate-pulse">
<div className="flex items-center gap-2 text-[#d8e4df]">
<i className="h-4 w-4 text-[#b8cc26]" data-lucide="sparkles"></i>
<span className="text-xs font-semibold uppercase tracking-widest">
                        Prompt
                      </span>
</div>
<p className="mt-2 text-sm font-medium text-[#fbf7ee]">
                      Turn memory into scene
                    </p>
</div>
<div className="absolute right-10 top-24 rounded-3xl border border-[#f7efe4]/15 bg-[#0f2d33]/90 p-4 shadow-xl backdrop-blur animate-pulse">
<div className="flex items-center gap-2 text-[#d8e4df]">
<i className="h-4 w-4 text-[#25a8bc]" data-lucide="network"></i>
<span className="text-xs font-semibold uppercase tracking-widest">
                        Model
                      </span>
</div>
<p className="mt-2 text-sm font-medium text-[#fbf7ee]">
                      Map voice, tone and world
                    </p>
</div>
<div className="absolute bottom-12 left-1/2 w-72 -translate-x-1/2 rounded-3xl border border-[#f7efe4]/15 bg-[#0f2d33]/90 p-4 shadow-xl backdrop-blur">
<div className="flex items-center justify-between gap-3">
<span className="h-2 w-2 rounded-full bg-[#b8cc26]"></span>
<span className="h-2 w-20 rounded-full bg-[#f7efe4]/20"></span>
<span className="h-2 w-12 rounded-full bg-[#c22a8d]"></span>
<span className="h-2 w-16 rounded-full bg-[#25a8bc]"></span>
</div>
<p className="mt-3 text-center text-sm font-semibold text-[#fbf7ee]">
                      Narrative intelligence in motion
                    </p>
</div>
<div className="absolute left-24 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#b8cc26] shadow-lg shadow-[#b8cc26]/40 animate-ping"></div>
<div className="absolute right-28 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-[#25a8bc] shadow-lg shadow-[#25a8bc]/40 animate-ping"></div>
<div className="absolute left-1/2 top-12 h-4 w-4 -translate-x-1/2 rounded-full bg-[#c22a8d] shadow-lg shadow-[#c22a8d]/40 animate-ping"></div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-4 hidden rounded-3xl border border-[#173f47]/10 bg-white/85 p-5 shadow-xl backdrop-blur sm:block">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#b8cc26]/20 text-[#173f47]">
<i className="h-5 w-5" data-lucide="video"></i>
</div>
<div>
<p className="text-sm font-semibold text-[#173f47]">
                    Studio-ready
                  </p>
<p className="text-sm text-[#5f767b]">
                    Stage, cameras and story labs
                  </p>
</div>
</div>
</div>
<div className="absolute -right-4 -top-6 hidden rounded-3xl border border-[#173f47]/10 bg-white/85 p-5 shadow-xl backdrop-blur sm:block">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#25a8bc]/20 text-[#173f47]">
<i className="h-5 w-5" data-lucide="cpu"></i>
</div>
<div>
<p className="text-sm font-semibold text-[#173f47]">AI-powered</p>
<p className="text-sm text-[#5f767b]">Emerging media tools</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
<div className="grid gap-5 lg:grid-cols-3">
<div className="rounded-[2rem] border border-[#173f47]/10 bg-[#1f4e57] p-8 text-[#fbf7ee] shadow-sm lg:col-span-1">
<div className="flex min-h-64 flex-col justify-between">
<div>
<p className="text-sm font-semibold uppercase tracking-widest text-[#b8cc26]">
                  Logo &amp; palette
                </p>
<div className="mt-8">
<div className="text-6xl font-semibold tracking-tight sm:text-7xl">
                    fable Arc
                  </div>
<div className="mx-auto mt-6 flex max-w-xs flex-col items-center gap-1">
<div className="h-2 w-28 rounded-full bg-[#b8cc26]"></div>
<div className="h-2 w-36 rounded-full bg-[#c22a8d]"></div>
<div className="h-2 w-44 rounded-full bg-[#25a8bc]"></div>
</div>
</div>
</div>
<p className="mt-10 text-sm font-medium text-[#d8e4df]">
                Where creativity meets innovation, amplified by technology.
              </p>
</div>
</div>
<div className="rounded-[2rem] border border-[#173f47]/10 bg-white/70 p-8 shadow-sm lg:col-span-2">
<div className="grid gap-5 sm:grid-cols-2">
<div className="min-h-64 rounded-[1.5rem] border border-dashed border-[#173f47]/15 bg-[#fbf7ee] p-6">
<div className="flex h-full flex-col items-center justify-center text-center">
<i className="h-8 w-8 text-[#5f767b]" data-lucide="image-plus"></i>
<p className="mt-4 text-base font-semibold text-[#173f47]">
                    Image space
                  </p>
<p className="mt-2 max-w-xs text-sm leading-6 text-[#5f767b]">
                    Add workshop, studio or community programme photography
                    here.
                  </p>
</div>
</div>
<div className="min-h-64 rounded-[1.5rem] border border-dashed border-[#173f47]/15 bg-[#fbf7ee] p-6">
<div className="flex h-full flex-col items-center justify-center text-center">
<i className="h-8 w-8 text-[#5f767b]" data-lucide="film"></i>
<p className="mt-4 text-base font-semibold text-[#173f47]">
                    Media showcase
                  </p>
<p className="mt-2 max-w-xs text-sm leading-6 text-[#5f767b]">
                    Feature stage moments, behind-the-scenes production and
                    creator stories.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8" id="services">
<div className="max-w-3xl">
<p className="text-sm font-semibold uppercase tracking-widest text-[#c22a8d]">
            Services
          </p>
<h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#173f47] sm:text-5xl">
            Programmes that turn stories into creative futures.
          </h2>
<p className="mt-5 text-lg leading-8 text-[#46656b]">
            We create accessible learning spaces for storytellers, filmmakers,
            writers, youth, entrepreneurs and community organisations.
          </p>
</div>
<div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
<article className="rounded-[2rem] border border-[#173f47]/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b8cc26]/20 text-[#173f47]">
<i className="h-6 w-6" data-lucide="messages-square"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-[#173f47]">
              Story Circles
            </h3>
<p className="mt-3 text-base leading-7 text-[#5f767b]">
              Facilitated community storytelling workshops that create trust,
              connection and shared narratives.
            </p>
</article>
<article className="rounded-[2rem] border border-[#173f47]/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25a8bc]/20 text-[#173f47]">
<i className="h-6 w-6" data-lucide="rocket"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-[#173f47]">
              Storypreneurship
            </h3>
<p className="mt-3 text-base leading-7 text-[#5f767b]">
              Training young entrepreneurs to leverage storytelling in business,
              advocacy and creative ventures.
            </p>
</article>
<article className="rounded-[2rem] border border-[#173f47]/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c22a8d]/20 text-[#173f47]">
<i className="h-6 w-6" data-lucide="pen-tool"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-[#173f47]">
              Youth Story Labs
            </h3>
<p className="mt-3 text-base leading-7 text-[#5f767b]">
              Creative writing, digital storytelling and new media labs for
              young creators.
            </p>
</article>
<article className="rounded-[2rem] border border-[#173f47]/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#173f47]/10 text-[#173f47]">
<i className="h-6 w-6" data-lucide="graduation-cap"></i>
</div>
<h3 className="mt-5 text-xl font-semibold tracking-tight text-[#173f47]">
              Masterclasses
            </h3>
<p className="mt-3 text-base leading-7 text-[#5f767b]">
              Practical sessions unpacking storytelling techniques with current
              AI tools and creative apps.
            </p>
</article>
</div>
</section>
<section className="bg-[#173f47] py-20 text-[#fbf7ee]" id="about">
<div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
<div>
<p className="text-sm font-semibold uppercase tracking-widest text-[#b8cc26]">
              About
            </p>
<h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
              Born from a passion for empowerment, education and heritage.
            </h2>
</div>
<div className="space-y-6 text-lg leading-8 text-[#d8e4df]">
<p>
              Based in South Africa, Fable Arc was created to uplift
              marginalised voices and drive social transformation through
              innovative, technology-driven storytelling programmes.
            </p>
<p>
              Our vision is to cultivate inclusive spaces where the craft of
              storytelling is curated with new media tools such as AI, digital
              platforms and emerging creative technologies.
            </p>
</div>
</div>
<div className="mx-auto mt-14 grid max-w-7xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-8">
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<i className="h-6 w-6 text-[#b8cc26]" data-lucide="megaphone"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight">
              Inclusivity
            </h3>
<p className="mt-2 text-sm leading-6 text-[#d8e4df]">
              Amplifying diverse voices.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<i className="h-6 w-6 text-[#25a8bc]" data-lucide="heart-handshake"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Empathy</h3>
<p className="mt-2 text-sm leading-6 text-[#d8e4df]">
              Building bridges through shared narratives.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<i className="h-6 w-6 text-[#c22a8d]" data-lucide="shield-check"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Integrity</h3>
<p className="mt-2 text-sm leading-6 text-[#d8e4df]">
              Upholding transparency and trust.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<i className="h-6 w-6 text-[#b8cc26]" data-lucide="palette"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight">
              Creativity
            </h3>
<p className="mt-2 text-sm leading-6 text-[#d8e4df]">
              Harnessing innovation in storytelling.
            </p>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5 sm:col-span-2 lg:col-span-1">
<i className="h-6 w-6 text-[#25a8bc]" data-lucide="users"></i>
<h3 className="mt-4 text-lg font-semibold tracking-tight">Community</h3>
<p className="mt-2 text-sm leading-6 text-[#d8e4df]">
              Strengthening bonds through collective action.
            </p>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
<div className="grid gap-10 lg:grid-cols-3">
<div>
<p className="text-sm font-semibold uppercase tracking-widest text-[#25a8bc]">
              Objectives
            </p>
<h2 className="mt-3 text-4xl font-semibold tracking-tight text-[#173f47]">
              What Fable Arc sets out to do.
            </h2>
</div>
<div className="grid gap-4 lg:col-span-2">
<div className="grid gap-4 md:grid-cols-2">
<div className="rounded-3xl border border-[#173f47]/10 bg-white/70 p-5 shadow-sm">
<p className="text-sm font-semibold text-[#c22a8d]">01</p>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-[#173f47]">
                  Workshops &amp; masterclasses
                </h3>
<p className="mt-2 text-base leading-7 text-[#5f767b]">
                  Hands-on learning in storytelling tools, AI, digital platforms
                  and emerging formats.
                </p>
</div>
<div className="rounded-3xl border border-[#173f47]/10 bg-white/70 p-5 shadow-sm">
<p className="text-sm font-semibold text-[#c22a8d]">02</p>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-[#173f47]">
                  AI in storytelling
                </h3>
<p className="mt-2 text-base leading-7 text-[#5f767b]">
                  Inspiring creators to use artificial intelligence to enhance
                  narrative creation.
                </p>
</div>
<div className="rounded-3xl border border-[#173f47]/10 bg-white/70 p-5 shadow-sm">
<p className="text-sm font-semibold text-[#c22a8d]">03</p>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-[#173f47]">
                  Technology story labs
                </h3>
<p className="mt-2 text-base leading-7 text-[#5f767b]">
                  Collaborative labs exploring new storytelling techniques,
                  codes and tools.
                </p>
</div>
<div className="rounded-3xl border border-[#173f47]/10 bg-white/70 p-5 shadow-sm">
<p className="text-sm font-semibold text-[#c22a8d]">04</p>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-[#173f47]">
                  New media writers
                </h3>
<p className="mt-2 text-base leading-7 text-[#5f767b]">
                  Training writers for video games, interactive platforms and
                  immersive experiences.
                </p>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8" id="contact">
<div className="overflow-hidden rounded-[2rem] bg-[#1f4e57] shadow-2xl shadow-[#173f47]/20">
<div className="grid gap-0 lg:grid-cols-2">
<div className="p-8 text-[#fbf7ee] sm:p-12">
<p className="text-sm font-semibold uppercase tracking-widest text-[#b8cc26]">
                Contact
              </p>
<h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Let’s build the next story space together.
              </h2>
<p className="mt-5 text-lg leading-8 text-[#d8e4df]">
                Opportunities exist for sponsorships, partnerships, grants and
                tax deductible donations.
              </p>
<div className="mt-10 grid gap-4">
<a className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10" href="mailto:hello@fablearc.org.za">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#b8cc26]/20">
<i className="h-5 w-5 text-[#b8cc26]" data-lucide="mail"></i>
</div>
<div>
<p className="text-sm text-[#d8e4df]">Email</p>
<p className="text-base font-semibold">hello@fablearc.org.za</p>
</div>
</a>
<a className="flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10" href="tel:+27763968198">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25a8bc]/20">
<i className="h-5 w-5 text-[#25a8bc]" data-lucide="phone"></i>
</div>
<div>
<p className="text-sm text-[#d8e4df]">Phone</p>
<p className="text-base font-semibold">+27 76 396 8198</p>
</div>
</a>
</div>
</div>
<div className="bg-[#123b42] p-8 sm:p-12">
<div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
<h3 className="text-2xl font-semibold tracking-tight text-[#fbf7ee]">
                  Who we serve
                </h3>
<div className="mt-6 grid gap-3">
<div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
<i className="mt-1 h-5 w-5 text-[#b8cc26]" data-lucide="check-circle-2"></i>
<p className="text-base leading-7 text-[#d8e4df]">
                      Youth from under-resourced communities
                    </p>
</div>
<div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
<i className="mt-1 h-5 w-5 text-[#b8cc26]" data-lucide="check-circle-2"></i>
<p className="text-base leading-7 text-[#d8e4df]">
                      Women-led organisations
                    </p>
</div>
<div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
<i className="mt-1 h-5 w-5 text-[#b8cc26]" data-lucide="check-circle-2"></i>
<p className="text-base leading-7 text-[#d8e4df]">
                      Emerging entrepreneurs and activists
                    </p>
</div>
<div className="flex items-start gap-3 rounded-2xl bg-white/5 p-4">
<i className="mt-1 h-5 w-5 text-[#b8cc26]" data-lucide="check-circle-2"></i>
<p className="text-base leading-7 text-[#d8e4df]">
                      NGOs and community groups seeking storytelling skills
                    </p>
</div>
</div>
</div>
</div>
</div>
<footer className="border-t border-white/10 px-8 py-6 sm:px-12">
<div className="flex flex-col gap-3 text-sm text-[#d8e4df] sm:flex-row sm:items-center sm:justify-between">
<p>© 2025 Fable Arc. All rights reserved.</p>
<p>
                Registered Non-Profit Company — Registration No: 2025/048980/08
              </p>
</div>
</footer>
</div>
</section>
</main>
<div className="mx-auto max-w-7xl px-6 pb-8 text-center text-sm text-[#5f767b]">
      Fable Arc is ready to turn powerful stories into inclusive digital
      experiences.
    </div>

<style>
      @keyframes fableArcBgPulse {
        0%, 100% { background-color: #fbf7ee; }
        28% { background-color: #f4f8df; }
        56% { background-color: #f8eef5; }
        78% { background-color: #edf8fa; }
      }

      body {
        animation: fableArcBgPulse 14s ease-in-out infinite;
      }

      @media (prefers-reduced-motion: reduce) {
        body { animation: none !important; }
      }
    </style>

    </>
  );
}
