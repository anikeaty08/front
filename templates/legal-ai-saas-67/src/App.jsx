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



      document.addEventListener('DOMContentLoaded', () => {
          // Pricing Toggle
          const toggle = document.getElementById('billing-toggle');
          let isAnnual = false;

          if (toggle) {
              toggle.addEventListener('click', () => {
                  isAnnual = !isAnnual;
                  const knob = document.getElementById('toggle-knob');

                  if (isAnnual) {
                      knob.classList.add('translate-x-6');
                      document.getElementById('label-mensal').classList.add('text-[#FAF8F3]/40');
                      document.getElementById('label-anual').classList.remove('text-[#FAF8F3]/40');

                      document.getElementById('starter-old').classList.remove('hidden');
                      document.getElementById('starter-new').textContent = '$853';
                      document.getElementById('starter-unit').textContent = '/year per user';

                      document.getElementById('business-old').classList.remove('hidden');
                      document.getElementById('business-new').textContent = '$1069';
                      document.getElementById('business-unit').textContent = '/year per user';

                      document.getElementById('enterprise-old').classList.remove('hidden');
                      document.getElementById('enterprise-new').textContent = '$1501';
                      document.getElementById('enterprise-unit').textContent = '/year per user';

                      // Buttons
                      document.getElementById('starter-btn-monthly').classList.add('hidden');
                      document.getElementById('starter-btn-monthly').classList.remove('block');
                      document.getElementById('starter-btn-annual').classList.remove('hidden');
                      document.getElementById('starter-btn-annual').classList.add('block');

                      document.getElementById('business-btn-monthly').classList.add('hidden');
                      document.getElementById('business-btn-monthly').classList.remove('block');
                      document.getElementById('business-btn-annual').classList.remove('hidden');
                      document.getElementById('business-btn-annual').classList.add('block');

                      document.getElementById('enterprise-btn-monthly').classList.add('hidden');
                      document.getElementById('enterprise-btn-monthly').classList.remove('block');
                      document.getElementById('enterprise-btn-annual').classList.remove('hidden');
                      document.getElementById('enterprise-btn-annual').classList.add('block');
                  } else {
                      knob.classList.remove('translate-x-6');
                      document.getElementById('label-anual').classList.add('text-[#FAF8F3]/40');
                      document.getElementById('label-mensal').classList.remove('text-[#FAF8F3]/40');

                      document.getElementById('starter-old').classList.add('hidden');
                      document.getElementById('starter-new').textContent = '$79';
                      document.getElementById('starter-unit').textContent = '/month per user';

                      document.getElementById('business-old').classList.add('hidden');
                      document.getElementById('business-new').textContent = '$99';
                      document.getElementById('business-unit').textContent = '/month per user';

                      document.getElementById('enterprise-old').classList.add('hidden');
                      document.getElementById('enterprise-new').textContent = '$139';
                      document.getElementById('enterprise-unit').textContent = '/month per user';

                      // Buttons
                      document.getElementById('starter-btn-annual').classList.add('hidden');
                      document.getElementById('starter-btn-annual').classList.remove('block');
                      document.getElementById('starter-btn-monthly').classList.remove('hidden');
                      document.getElementById('starter-btn-monthly').classList.add('block');

                      document.getElementById('business-btn-annual').classList.add('hidden');
                      document.getElementById('business-btn-annual').classList.remove('block');
                      document.getElementById('business-btn-monthly').classList.remove('hidden');
                      document.getElementById('business-btn-monthly').classList.add('block');

                      document.getElementById('enterprise-btn-annual').classList.add('hidden');
                      document.getElementById('enterprise-btn-annual').classList.remove('block');
                      document.getElementById('enterprise-btn-monthly').classList.remove('hidden');
                      document.getElementById('enterprise-btn-monthly').classList.add('block');
                  }
              });
          }

          // Accordion Logic
          const faqButtons = document.querySelectorAll('.faq-button');
          faqButtons.forEach(btn => {
              btn.addEventListener('click', () => {
                  const content = btn.nextElementSibling;
                  const icon = btn.querySelector('iconify-icon');
                  const isOpen = content.classList.contains('is-open');

                  document.querySelectorAll('.faq-grid').forEach(grid => grid.classList.remove('is-open'));
                  document.querySelectorAll('.faq-button iconify-icon').forEach(i => i.style.transform = 'rotate(0deg)');
                  document.querySelectorAll('.faq-button').forEach(b => b.setAttribute('aria-expanded', 'false'));

                  if (!isOpen) {
                      content.classList.add('is-open');
                      icon.style.transform = 'rotate(180deg)';
                      btn.setAttribute('aria-expanded', 'true');
                  }
              });
          });

          // Scroll Visual Logic
          const textBlocks = document.querySelectorAll('.scroll-text-block');
          const visuals = document.querySelectorAll('.scroll-visual');

          if (textBlocks.length && visuals.length && 'IntersectionObserver' in window) {
              const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          const targetId = entry.target.getAttribute('data-target');

                          textBlocks.forEach(b => {
                              b.classList.remove('opacity-100');
                              b.classList.add('opacity-30');
                          });
                          entry.target.classList.remove('opacity-30');
                          entry.target.classList.add('opacity-100');

                          visuals.forEach(v => {
                              v.classList.remove('opacity-100', 'z-10');
                              v.classList.add('opacity-0', 'z-0');
                          });

                          const targetVisual = document.getElementById(targetId);
                          if (targetVisual) {
                              targetVisual.classList.remove('opacity-0', 'z-0');
                              targetVisual.classList.add('opacity-100', 'z-10');
                          }
                      }
                  });
              }, {
                  rootMargin: '-30% 0px -30% 0px'
              });

              textBlocks.forEach(block => observer.observe(block));
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 w-full z-10 px-6 py-6 flex items-center justify-between max-w-7xl mx-auto left-0 right-0">
<div className="inline-flex flex-col items-start relative cursor-pointer" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<img alt="Legau Logo" className="w-auto h-10 md:h-12 object-contain rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66b95995-6f55-4ee0-9329-b1945636400e_320w.png"/>
</div>
<a className="inline-flex items-center justify-center text-sm font-medium bg-[#23C4D6] text-[#06303A] px-5 py-2.5 rounded hover:bg-[#1FB0C0] transition-colors duration-200" href="#pricing">
        Try Legau free
      </a>
</nav>

<section className="overflow-hidden bg-[#06303A] relative">
<div className="md:pt-48 md:pb-32 pt-32 px-6 pb-24">
<div className="grid md:grid-cols-[1fr_1fr] max-w-7xl mx-auto gap-x-12 gap-y-12 items-center">
<div className="max-w-xl z-10">
<span className="uppercase block text-xs font-light text-[#E89B5A] tracking-widest mb-6">
              — For Solo Practitioners
            </span>
<h1 className="md:text-7xl leading-[1.05] animate-fade-in text-5xl font-extralight text-[#FAF8F3] tracking-tight font-serif opacity-0 mb-6 translate-y-2">
              Be a
              <span className="italic">lawyer</span>
              again.
            </h1>
<p className="md:text-xl leading-[1.6] text-lg font-light text-[#B5D8DD] max-w-[540px] mb-10 tracking-tight">
              Legau is the leverage you've never had on drafting and reviewing
              legal work.
            </p>
<div className="flex flex-col sm:flex-row sm:items-center mb-4 gap-x-6 gap-y-6 items-start">
<a className="inline-flex hover:bg-[#1FB0C0] transition-colors duration-200 sm:w-auto text-base font-light text-[#06303A] font-inter bg-[#23C4D6] w-full rounded pt-3.5 pr-7 pb-3.5 pl-7 items-center justify-center cursor-pointer" href="#pricing">
                Try Legau free
              </a>
<a className="underline underline-offset-4 decoration-[#FAF8F3]/30 hover:decoration-[#FAF8F3] transition-colors duration-200 text-sm text-[#FAF8F3] font-light" href="#video">
                See how it works →
              </a>
</div>
<p className="text-xs font-extralight text-[#B5D8DD]/80">
              No credit card. Works inside Word and Outlook.
            </p>
</div>

<div className="relative w-full flex transform md:rotate-1 md:hover:rotate-0 transition-transform duration-500 bg-transparent">
<img alt="Legau Legal AI Interface and Document Viewer" className="w-full h-auto object-cover bg-transparent transform scale-125 md:scale-150 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7565058f-45b6-4cc1-9728-ba98e0008a37_1600w.png"/>
</div>
</div>
</div>

<div className="bg-[#FAF8F3] w-full pt-16 md:pt-24 pb-16 md:pb-24 px-6 border-t border-[#06303A]/10">
<div className="flex flex-col items-center w-full max-w-7xl mx-auto">
<span className="uppercase block text-xs font-normal text-[#E89B5A] tracking-widest font-sans text-center mb-8">
            LEGAU IN THE PRESS
          </span>
<div className="flex flex-wrap w-full mb-12 gap-x-12 gap-y-12 items-center justify-center">
<a className="opacity-60 hover:opacity-100 transition-opacity duration-150 ease-out flex items-center justify-center" href="https://www.law.com" rel="noopener" target="_blank">
<img alt="Law.com" className="h-5 md:h-[26px] w-auto object-contain brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e8c247f-58c9-4587-bc1b-79cfcba5385a_320w.png"/>
</a>
<a className="opacity-60 hover:opacity-100 transition-opacity duration-150 ease-out flex items-center justify-center" href="https://www.law360.com" rel="noopener" target="_blank">
<img alt="Law360" className="h-5 md:h-[26px] w-auto object-contain brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c60008e0-c401-4765-bf51-88b500939730_320w.png"/>
</a>
<a className="opacity-60 hover:opacity-100 transition-opacity duration-150 ease-out flex items-center justify-center" href="https://abovethelaw.com" rel="noopener" target="_blank">
<img alt="Above the Law" className="h-5 md:h-[26px] w-auto object-contain brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c49e1ae0-46be-4057-a6f0-654172773fcc_320w.png"/>
</a>
<a className="opacity-60 hover:opacity-100 transition-opacity duration-150 ease-out flex items-center justify-center" href="https://www.lawnext.com" rel="noopener" target="_blank">
<img alt="LawSites" className="h-5 md:h-[26px] w-auto object-contain brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a848370-213e-4af3-b9ca-275141b07af4_320w.png"/>
</a>
<a className="opacity-60 hover:opacity-100 transition-opacity duration-150 ease-out flex items-center justify-center" href="https://www.artificiallawyer.com" rel="noopener" target="_blank">
<img alt="Artificial Lawyer" className="h-5 md:h-[26px] w-auto object-contain brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/567b7aa6-2b21-44cb-b4e8-1bd7a51acc8d_320w.png"/>
</a>
</div>
<p className="text-base md:text-xl leading-relaxed font-extralight text-[#06303A] tracking-tight font-serif text-center w-full max-w-2xl mb-4">
            "A versatile tool that takes a somewhat unique approach to legal
            drafting."
          </p>
<span className="uppercase block text-xs font-normal text-[#06303A]/60 tracking-widest font-sans text-center">
            — LAWSITES, Bob Ambrogi
          </span>
</div>
</div>
</section>

<section className="text-[#FAF8F3] bg-[#06303A] border-[#FAF8F3]/10 border-t-4 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-4xl mx-auto">
<span className="uppercase block text-xs font-light text-[#E89B5A] tracking-widest mb-6">
          — the reality
        </span>
<h2 className="md:text-5xl leading-tight text-3xl font-thin text-[#FAF8F3] tracking-tight font-serif mb-12">
          Legal work gets the leftover hours.
        </h2>
<div className="grid grid-cols-1 gap-16 items-start">
<div className="space-y-6 text-[#B5D8DD] text-lg font-extralight leading-relaxed">
<p className="text-xl font-extralight tracking-tight">
              5.7 hours of every day go into admin, business, and marketing
              work. You went solo to practice law on your terms, but now you're
              only practicing it in the margins. Legau makes that time count for
              more.
            </p>
</div>
</div>
</div>
</section>

<section className="md:pb-32 md:pt-0 text-[#FAF8F3] bg-[#06303A] pt-0 pr-6 pb-24 pl-6">
<div className="grid md:grid-cols-[320px_1fr] gap-12 md:gap-16 max-w-5xl mx-auto items-center">
<div className="aspect-[4/5] w-full max-w-sm mx-auto md:mx-0 bg-[#FAF8F3]/5 border border-[#FAF8F3]/10 rounded-xl overflow-hidden flex items-center justify-center relative shadow-2xl group">
<iconify-icon className="text-6xl text-[#FAF8F3]/10" icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute inset-0 overflow-hidden">
<img alt="Founder" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74c3cf9a-72fa-436d-a652-bbab272aaca7_800w.png"/>
<div className="bg-gradient-to-t from-[#06303A]/90 via-[#06303A]/20 to-transparent absolute inset-0"></div>
</div>
<div className="absolute bottom-6 left-6 flex flex-col items-start z-10">
<span className="text-xl md:text-xl font-extralight text-[#FAF8F3] tracking-tight font-serif mb-1">
              Luís Alves Dias
            </span>
<span className="text-xs font-thin text-[#FAF8F3] tracking-tight">
              Ex-Lawyer, CEO &amp; Co-Founder
            </span>
<div className="w-1.5 h-1.5 rounded-full bg-[#23C4D6] mt-2"></div>
</div>
</div>
<div className="space-y-6">
<span className="uppercase block text-xs font-extralight text-[#E89B5A] tracking-widest">
            — A Note from the Founder
          </span>
<h2 className="font-serif font-thin text-3xl tracking-tight leading-tight text-[#FAF8F3] md:text-4xl">
            I built Legau so lawyers can spend more time doing the legal work
            only they can do.
          </h2>
<div className="space-y-6 text-[#B5D8DD] text-xl font-serif font-thin leading-relaxed pt-2">
<p className="">
              I know how much of legal work happens before the final answer. The
              searching. The drafting. The redlines. The clause you know you
              wrote before but cannot find when you need it. The pressure of
              getting your advice right while the rest of the day keeps moving.
            </p>
<p>
              That is the work I knew as a lawyer and the work Legau was built
              to support by bringing reliable legal leverage into Word and
              Outlook, where the work already happens.
            </p>
</div>
</div>
</div>
</section>

<section className="md:py-32 text-[#06303A] bg-[#FAF8F3] border-[#06303A] border-t-4 pt-16 pr-6 pb-16 pl-6" id="walkthrough">
<div className="max-w-6xl mx-auto">
<span className="uppercase block text-xs font-normal text-[#E89B5A] tracking-widest text-center mb-6">
          — What Legau Does
        </span>
<h2 className="md:text-5xl leading-tight text-3xl font-light text-[#06303A] tracking-tight font-serif text-center max-w-2xl mx-auto mb-24">
          The
          <span className="italic">leverage</span>
          , built into the work.
        </h2>
<div className="flex flex-col md:flex-row gap-12 items-start relative pb-0 md:pb-32">

<div className="w-full md:w-[40%] flex flex-col space-y-16 md:space-y-[40vh] py-0 md:py-[20vh] z-20 relative order-2 md:order-1 pr-0 md:pr-8">

<div className="scroll-text-block transition-opacity duration-500 max-md:!opacity-100" data-target="visual-0">
<span className="text-[#06303A] font-normal text-xs uppercase tracking-widest block mb-6">
                More legal work done
              </span>
<h3 className="font-serif font-light text-2xl md:text-3xl tracking-tight mb-4 text-[#06303A]">
                Drafts that move when your day is already full
              </h3>
<p className="leading-relaxed text-sm md:text-base font-light text-[#06303A] max-w-md">
                Create contracts, motions, memos, and other legal documents
                directly inside Microsoft Word, with the right context already
                there to help the work move faster.
              </p>
<div className="md:hidden w-[calc(100%+3rem)] -ml-6 mt-8 flex">
<img alt="Legau AI Legal Drafting Interface" className="w-full h-auto object-contain max-h-[60vh] drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c7fd152-55fe-43fc-a9db-2edf372077f8_800w.png"/>
</div>
</div>

<div className="scroll-text-block transition-opacity duration-500 max-md:!opacity-100" data-target="visual-1">
<span className="text-[#06303A] font-normal text-xs uppercase tracking-widest block mb-6">
                Review with peace of mind
              </span>
<h3 className="font-serif font-light text-2xl md:text-3xl tracking-tight mb-4 text-[#06303A]">
                Review without carrying every line alone
              </h3>
<p className="leading-relaxed text-sm md:text-base font-light text-[#06303A] max-w-md">
                Compare documents, catch legal risks, generate redlines, and get
                a second set of eyes, so review feels less like another thing
                weighing on you only.
              </p>
<div className="md:hidden w-[calc(100%+3rem)] -ml-6 mt-8 flex">
<img alt="Legau AI Contract Analysis Interface" className="w-full h-auto object-contain max-h-[60vh] drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15a19bea-605d-493e-be5a-b19b99e6575d_800w.png"/>
</div>
</div>

<div className="scroll-text-block transition-opacity duration-500 max-md:!opacity-100" data-target="visual-2">
<span className="text-[#06303A] font-normal text-xs uppercase tracking-widest block mb-6">
                The inbox stops eating your morning
              </span>
<h3 className="font-serif font-light text-2xl md:text-3xl tracking-tight mb-4 text-[#06303A]">
                Get from thread to answer faster.
              </h3>
<p className="leading-relaxed text-sm md:text-base font-light text-[#06303A] max-w-md">
                Summarize long threads, draft replies, create legal emails from
                scratch, analyze documents, and save your own templates without
                leaving Outlook.
              </p>
<div className="md:hidden w-[calc(100%+3rem)] -ml-6 mt-8 flex">
<img alt="Legau AI Contract Analysis Interface" className="w-full h-auto object-contain max-h-[60vh] drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c73202cf-5dcf-4453-bd0e-4e739b3d2525_800w.png"/>
</div>
</div>

<div className="scroll-text-block transition-opacity duration-500 max-md:!opacity-100" data-target="visual-3">
<span className="text-[#06303A] font-normal text-xs uppercase tracking-widest block mb-6">
                Built for solo practice
              </span>
<h3 className="font-serif font-light text-2xl md:text-3xl tracking-tight mb-4 text-[#06303A]">
                No IT department. No implementation team. Serious about
                confidentiality.
              </h3>
<p className="leading-relaxed text-sm md:text-base font-light text-[#06303A] max-w-md">
                Works inside the tools you already have. You're running it the
                same day you sign up. And because simple still has to be safe,
                Legau keeps client data isolated, grounds answers in legal
                context, and shows sources when it matters.
              </p>
<div className="md:hidden w-[calc(100%+3rem)] -ml-6 mt-8 flex items-center justify-center relative overflow-hidden">
<img alt="Legau AI Legal Document Analysis Interface" className="w-full h-auto object-contain max-h-[60vh] drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e56705cb-4082-4e20-8957-8877c84378cb_800w.png"/>
</div>
</div>
</div>

<div className="hidden md:flex md:w-[60%] sticky md:top-24 md:h-[75vh] order-1 md:order-2 w-full z-10 items-center justify-center">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute inset-0 scroll-visual transition-opacity duration-500 flex" id="visual-0">
<img alt="Drafting Interface" className="w-full h-full object-contain scale-125 drop-shadow-2xl transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8c7fd152-55fe-43fc-a9db-2edf372077f8_1600w.png"/>
</div>
<div className="absolute inset-0 scroll-visual transition-opacity duration-500 flex" id="visual-1">
<img alt="Contract Analysis" className="w-full h-full object-contain scale-125 drop-shadow-2xl transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15a19bea-605d-493e-be5a-b19b99e6575d_1600w.png"/>
</div>
<div className="absolute inset-0 scroll-visual transition-opacity duration-500 flex" id="visual-2">
<img alt="Inbox Analysis" className="w-full h-full object-contain scale-125 drop-shadow-2xl transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c73202cf-5dcf-4453-bd0e-4e739b3d2525_1600w.png"/>
</div>
<div className="absolute inset-0 scroll-visual transition-opacity duration-500 flex items-center justify-center overflow-hidden" id="visual-3">
<img alt="Document Analysis" className="w-full h-full object-contain scale-125 drop-shadow-2xl transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e56705cb-4082-4e20-8957-8877c84378cb_1600w.png"/>
</div>
</div>
</div>
</div>
<div className="md:pt-16 flex flex-col text-center w-full max-w-5xl mx-auto pt-8 pb-8 items-center">
<span className="uppercase block text-xs font-normal text-[#5A6B73] tracking-widest text-center mb-8">
            — Grounded in real law, not guesses
          </span>
<div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 opacity-80 grayscale-[20%]">
<div className="flex items-center gap-2.5 text-[#E89B5A]">
<iconify-icon className="text-xl text-[#B8472D]" icon="solar:book-bookmark-linear"></iconify-icon>
<span className="text-xs font-medium text-[#06303A]">
                Court Decisions
              </span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-xl text-[#E89B5A]" icon="solar:document-linear"></iconify-icon>
<span className="text-xs font-medium text-[#06303A]">
                Current Legislation
              </span>
</div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-xl text-[#5A6B73]" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="text-xs font-medium text-[#06303A]">
                Your Knowledge &amp; Context
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#06303A] pt-32 pr-6 pb-32 pl-6" id="video">
<div className="text-center max-w-5xl mx-auto">
<span className="uppercase block text-xs font-light text-[#E89B5A] tracking-widest mb-6">
          — See it for yourself
        </span>
<h2 className="md:text-5xl text-3xl font-thin text-[#FAF8F3] tracking-tight font-serif mb-12">
          Inside
          <span className="italic">Word</span>
          and
          <span className="italic">Outlook</span>
          . Inside your day.
        </h2>
<div className="max-w-4xl mx-auto group cursor-pointer relative rounded-xl border border-[#23C4D6] bg-[#06303A] aspect-video flex items-center justify-center overflow-hidden transition-colors duration-300">
<div className="absolute inset-0 bg-[#F0EBE0]/5 opacity-50 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<div className="w-full h-full relative z-20">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full absolute inset-0 rounded-xl" frameborder="0" src="https://www.youtube.com/embed/EqvYdNXAAMA" title="YouTube video player"></iframe>
</div>
</div>
<div className="relative z-10 w-20 h-20 bg-[#23C4D6] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
<iconify-icon className="w-8 h-8 text-[#06303A] ml-1" icon="solar:play-circle-linear"></iconify-icon>
</div>
</div>
<div className="mt-12 flex justify-center">
<a className="inline-flex items-center justify-center bg-[#23C4D6] text-[#06303A] hover:bg-[#1FB0C0] transition-colors duration-200 font-light rounded py-3 px-8 text-sm w-auto" href="#pricing">
            Try Legau free
          </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#FAF8F3]" id="comparison">
<div className="flex flex-col max-w-5xl mx-auto px-6 items-center">
<div className="w-full max-w-2xl flex flex-col items-center text-center mb-12">
<span className="uppercase text-xs font-normal text-[#E89B5A] tracking-widest text-center mb-6">
            — Why not just ChatGPT
          </span>
<h2 className="text-4xl md:text-5xl leading-tight font-extralight text-[#06303A] tracking-tight font-serif text-center mb-6">
            Legal
            <i className="italic">knowledge</i>
            . Your judgment.
          </h2>
</div>
<div className="w-full relative border border-[#E0E0E0] rounded-lg bg-[#FAF8F3]">
<div className="overflow-x-auto md:p-8 w-full p-5 relative">
<table className="w-full text-left border-collapse table-fixed">
<caption className="sr-only">
                Comparison of General AI and Legau
              </caption>
<thead className="">
<tr className="">
<th className="w-[30%] md:w-[25%] bg-[#FAF8F3] border-b border-[#E0E0E0] pt-4 pb-5 pr-2 md:pr-4 align-bottom" scope="col"></th>
<th className="w-[35%] md:w-[35%] align-bottom border-b border-[#E0E0E0] pt-4 pr-2 md:pr-4 pb-5" scope="col">
<div className="uppercase text-xs font-normal text-[#06303A] tracking-widest">
                      General AI
                      <span className="normal-case tracking-normal text-[#5A6B73] text-xs font-light block mt-1">
                        (like ChatGPT or Claude)
                      </span>
</div>
</th>
<th className="w-[35%] md:w-[40%] align-bottom border-b border-[#E0E0E0] pt-4 px-2 md:px-4 pb-5" scope="col">
<div className="uppercase text-xs font-normal text-[#06303A] tracking-widest border-[#23C4D6] border-t-2 pt-1">
                      Legau
                      <span className="normal-case tracking-normal text-[#5A6B73] text-xs font-light block mt-1">
                        (legal AI for solos)
                      </span>
</div>
</th>
</tr>
</thead>
<tbody className="">
<tr className="border-b border-[#E0E0E0] last:border-0">
<th className="bg-[#FAF8F3] py-4 font-light text-[#06303A] text-sm pr-2 md:pr-4 text-left font-sans align-top break-words" scope="row">
                    Focus
                  </th>
<td className="py-4 text-[#5A6B73] text-sm leading-relaxed pr-2 md:pr-4 align-top break-words">
                    Broad, generalized knowledge for everyday tasks
                  </td>
<td className="py-4 text-[#06303A] text-sm leading-relaxed px-2 md:px-4 align-top break-words">
                    Purpose-built exclusively for solo legal practitioners
                  </td>
</tr>
<tr className="border-b border-[#E0E0E0] last:border-0">
<th className="bg-[#FAF8F3] py-4 font-light text-[#06303A] text-sm pr-2 md:pr-4 text-left font-sans align-top break-words" scope="row">
                    Training Data
                  </th>
<td className="py-4 text-[#5A6B73] text-sm leading-relaxed pr-2 md:pr-4 align-top break-words">
                    Scraped from unverified open internet sources
                  </td>
<td className="py-4 text-[#06303A] text-sm leading-relaxed px-2 md:px-4 align-top break-words">
                    Trained strictly on verified, high-quality legal documents
                  </td>
</tr>
<tr className="border-b border-[#E0E0E0] last:border-0">
<th className="bg-[#FAF8F3] py-4 font-light text-[#06303A] text-sm pr-2 md:pr-4 text-left font-sans align-top break-words" scope="row">
                    Workflow
                  </th>
<td className="py-4 text-[#5A6B73] text-sm leading-relaxed pr-2 md:pr-4 align-top break-words">
                    Manual prompting; good only for rough first drafts
                  </td>
<td className="py-4 text-[#06303A] text-sm leading-relaxed px-2 md:px-4 align-top break-words">
                    End-to-end automation tailored to solo legal workflows
                  </td>
</tr>
<tr className="border-b border-[#E0E0E0] last:border-0">
<th className="bg-[#FAF8F3] py-4 font-light text-[#06303A] text-sm pr-2 md:pr-4 text-left font-sans align-top break-words" scope="row">
                    Jurisdiction Knowledge
                  </th>
<td className="py-4 text-[#5A6B73] text-sm leading-relaxed pr-2 md:pr-4 align-top break-words">
                    Lacks local nuance, risking non-compliance
                  </td>
<td className="py-4 text-[#06303A] text-sm leading-relaxed px-2 md:px-4 align-top break-words">
                    Hyper-localized expertise tailored to your specific
                    jurisdiction
                  </td>
</tr>
<tr className="border-b border-[#E0E0E0] last:border-0">
<th className="bg-[#FAF8F3] py-4 font-light text-[#06303A] text-sm pr-2 md:pr-4 text-left font-sans align-top break-words" scope="row">
                    Privacy &amp; Safety
                  </th>
<td className="py-4 text-[#5A6B73] text-sm leading-relaxed pr-2 md:pr-4 align-top break-words">
                    Often exposes sensitive client data to public models
                  </td>
<td className="py-4 text-[#06303A] text-sm leading-relaxed px-2 md:px-4 align-top break-words">
                    Bank-grade security; zero data retention for complete
                    confidentiality
                  </td>
</tr>
<tr className="border-b border-[#E0E0E0] last:border-0">
<th className="bg-[#FAF8F3] py-4 font-light text-[#06303A] text-sm pr-2 md:pr-4 text-left font-sans align-top break-words" scope="row">
                    Accuracy &amp; Sources
                  </th>
<td className="py-4 text-[#5A6B73] text-sm leading-relaxed pr-2 md:pr-4 align-top break-words">
                    Prone to hallucinations and incorrect legal citations
                  </td>
<td className="py-4 text-[#06303A] text-sm leading-relaxed px-2 md:px-4 align-top break-words">
                    Highly accurate legal analysis with transparent, verifiable
                    citations
                  </td>
</tr>
<tr className="border-b border-[#E0E0E0] last:border-0">
<th className="bg-[#FAF8F3] py-4 font-light text-[#06303A] text-sm pr-2 md:pr-4 text-left font-sans align-top break-words" scope="row">
                    Setup &amp; Pricing
                  </th>
<td className="py-4 text-[#5A6B73] text-sm leading-relaxed pr-2 md:pr-4 align-top break-words">
                    Requires heavy customization and endless prompt engineering
                  </td>
<td className="py-4 text-[#06303A] text-sm leading-relaxed px-2 md:px-4 align-top break-words">
                    Ready to use workflows with transparent, solo-friendly
                    pricing
                  </td>
</tr>
</tbody>
</table>
</div>
<div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#FAF8F3] to-transparent pointer-events-none md:hidden rounded-r-lg z-30"></div>
</div>
<a className="mt-12 inline-flex items-center justify-center bg-[#23C4D6] text-[#06303A] hover:bg-[#1FB0C0] transition-colors duration-200 font-normal rounded py-3 px-6 text-sm w-auto" href="#pricing">
          Start with Legau free
        </a>
</div>
</section>

<section className="bg-[#06303A] border-[#FAF8F3]/20 border-t-4 pt-32 pr-6 pb-24 pl-6 text-[#FAF8F3]" id="pricing">
<div className="max-w-7xl mx-auto text-center">
<span className="uppercase block text-xs font-light text-[#E89B5A] tracking-widest mb-6">
          — Pricing
        </span>
<h2 className="md:text-5xl inline-block text-4xl font-thin text-[#FAF8F3] tracking-tight font-serif relative mb-16">
          Pricing built for
          <i className="italic">solo</i>
          practice.
        </h2>
<div className="flex mb-16 gap-x-4 gap-y-4 items-center justify-center">
<span className="text-sm font-thin transition-colors" id="label-mensal">
            Monthly
          </span>
<button className="w-14 h-8 rounded-full bg-[#23C4D6] relative flex items-center px-1 transition-colors focus:outline-none" id="billing-toggle">
<div className="w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform duration-300 translate-x-0" id="toggle-knob"></div>
</button>
<span className="text-sm font-thin transition-colors text-[#FAF8F3]/40" id="label-anual">
            Annual
            <span className="text-[#23C4D6] font-extralight ml-1">(-10%)</span>
</span>
</div>
<div className="grid md:grid-cols-3 lg:gap-8 text-left gap-x-6 gap-y-6 items-start">

<div className="bg-[#06303A] border border-[#FAF8F3]/20 rounded-2xl p-8 shadow-sm flex flex-col h-full">
<h3 className="text-2xl font-serif font-thin tracking-tight mb-2">
              Starter
            </h3>
<div className="mb-2 min-h-[80px]">
<div className="flex flex-wrap gap-x-2 gap-y-2 items-end">
<span className="text-xl font-thin text-[#FAF8F3]/60 line-through mb-1 hidden" id="starter-old">
                  $948
                </span>
<span className="text-4xl font-serif font-thin tracking-tight text-[#E89B5A]" id="starter-new">
                  $79
                </span>
<span className="text-xs font-thin text-[#FAF8F3]/60 mb-1" id="starter-unit">
                  /month per user
                </span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1 text-xs font-thin">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>10 requests per month per user</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Court Decisions Library</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Legal Papers Engine</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Favorites</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Automatic Quoting</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Support by email</span>
</li>
</ul>
<a className="block hover:opacity-90 transition-opacity cursor-pointer font-extralight text-[#06303A] text-center text-sm bg-[#23C4D6] w-full rounded-md py-3" href="https://my.legau.com/onboarding/?trial=true&amp;plan=starter&amp;billing=monthly" id="starter-btn-monthly">
              Subscribe 14 days for free
            </a>
<a className="hidden hover:opacity-90 transition-opacity cursor-pointer font-extralight text-[#06303A] text-center text-sm bg-[#23C4D6] w-full rounded-md py-3" href="https://my.legau.com/onboarding/?trial=true&amp;plan=starter&amp;billing=yearly" id="starter-btn-annual">
              Subscribe 14 days for free
            </a>
</div>

<div className="bg-[#06303A] border-2 border-[#23C4D6] rounded-2xl p-8 shadow-lg flex flex-col h-full relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#23C4D6] text-[#06303A] text-[10px] font-extralight uppercase tracking-widest px-3 py-1 rounded-full">
              Recommended
            </div>
<h3 className="text-2xl font-serif font-thin tracking-tight mb-2">
              Business
            </h3>
<div className="mb-2 min-h-[80px]">
<div className="flex gap-2 gap-x-2 gap-y-2 items-end flex-wrap">
<span className="text-xl font-thin text-[#FAF8F3]/60 line-through mb-1 hidden" id="business-old">
                  $1188
                </span>
<span className="text-4xl font-serif font-thin tracking-tight text-[#E89B5A]" id="business-new">
                  $99
                </span>
<span className="text-xs font-thin text-[#FAF8F3]/60 mb-1" id="business-unit">
                  /month per user
                </span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1 text-xs font-thin">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">50 requests per month per user</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Everything in Starter</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>300 Segmented Documents</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Legal Documents Workflow</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>AI Assistant</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="">
                  Integration with Document Management System
                </span>
</li>
</ul>
<a className="block hover:opacity-90 transition-opacity cursor-pointer font-extralight text-[#06303A] text-center text-sm bg-[#23C4D6] w-full rounded-md py-3" href="https://my.legau.com/onboarding/?trial=true&amp;plan=business&amp;billing=monthly" id="business-btn-monthly">
              Subscribe 14 days for free
            </a>
<a className="hidden hover:opacity-90 transition-opacity cursor-pointer font-extralight text-[#06303A] text-center text-sm bg-[#23C4D6] w-full rounded-md py-3" href="https://my.legau.com/onboarding/?trial=true&amp;plan=business&amp;billing=yearly" id="business-btn-annual">
              Subscribe 14 days for free
            </a>
</div>

<div className="bg-[#06303A] border border-[#FAF8F3]/20 rounded-2xl p-8 shadow-sm flex flex-col h-full">
<h3 className="text-2xl font-serif font-thin tracking-tight mb-2">
              Enterprise
            </h3>
<div className="mb-2 min-h-[80px]">
<div className="flex items-end gap-2 flex-wrap">
<span className="text-xl font-thin text-[#FAF8F3]/60 line-through mb-1 hidden" id="enterprise-old">
                  $1668
                </span>
<span className="text-4xl font-serif font-thin tracking-tight text-[#E89B5A]" id="enterprise-new">
                  $139
                </span>
<span className="text-xs font-thin text-[#FAF8F3]/60 mb-1" id="enterprise-unit">
                  /month per user
                </span>
</div>
</div>
<ul className="space-y-4 mb-10 flex-1 text-xs font-thin">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Everything in Business</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>600 Segmented Documents</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Unlimited AI Assistant requests</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#23C4D6] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>Dedicated Success Manager</span>
</li>
</ul>
<a className="block hover:opacity-90 transition-opacity cursor-pointer font-extralight text-[#06303A] text-center text-sm bg-[#23C4D6] w-full rounded-md py-3" href="https://my.legau.com/onboarding/?trial=true&amp;plan=enterprise&amp;billing=monthly" id="enterprise-btn-monthly">
              Subscribe 14 days for free
            </a>
<a className="hidden hover:opacity-90 transition-opacity cursor-pointer font-extralight text-[#06303A] text-center text-sm bg-[#23C4D6] w-full rounded-md py-3" href="https://my.legau.com/onboarding/?trial=true&amp;plan=enterprise&amp;billing=yearly" id="enterprise-btn-annual">
              Subscribe 14 days for free
            </a>
</div>
</div>
</div>
</section>

<section className="bg-[#FAF8F3] border-[#06303A]/10 border-t pt-32 pr-6 pb-32 pl-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 max-w-3xl mx-auto">
<span className="uppercase block text-xs font-normal text-[#E89B5A] tracking-widest font-inter mb-6">
            — Testimonials
          </span>
<h2 className="md:text-5xl text-3xl text-[#06303A] tracking-tight font-serif font-light">
            What solo practitioners are
            <span className="italic">saying</span>
            .
          </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white border border-[#E0E0E0] p-8 rounded-lg flex flex-col justify-between h-full shadow-md">
<p className="font-serif italic font-light text-lg leading-relaxed mb-8 text-[#06303A]">
              "I used to spend three hours on a Saturday reviewing opposing
              counsel's revisions just to make sure defined terms didn't break.
              Legau does the mechanical check in seconds, so I can just read for
              intent."
            </p>
<div className="uppercase text-xs tracking-widest text-[#5A6B73] font-normal">
              Daniel M. Real Estate • Chicago, IL
            </div>
</div>
<div className="bg-white border border-[#E0E0E0] p-8 rounded-lg flex flex-col justify-between h-full shadow-md">
<p className="font-serif italic font-light text-lg leading-relaxed mb-8 text-[#06303A]">
              "The integration is what sold me. I didn't want another login. It
              just sits right there in Word, and when I'm stuck staring at a
              blank non-compete clause, it pulls exactly how I drafted it for my
              last three clients."
            </p>
<div className="uppercase text-xs tracking-widest text-[#5A6B73] font-normal">
              Sarah T. Small-firm Civil • Austin, TX
            </div>
</div>
<div className="bg-white border border-[#E0E0E0] p-8 rounded-lg flex flex-col justify-between h-full shadow-md">
<p className="font-serif italic font-light text-lg leading-relaxed mb-8 text-[#06303A]">
              "It actually feels like having an eager junior associate who has
              memorized every document I've written since 2018. It doesn't write
              my arguments, but it sets the table perfectly every time."
            </p>
<div className="uppercase text-xs tracking-widest text-[#5A6B73] font-normal">
              John P. Estate/Probate • Miami, FL
            </div>
</div>
</div>
</div>
</section>

<section className="text-[#FAF8F3] bg-[#06303A] border-[#FAF8F3]/20 border-t-4 pt-32 pr-6 pb-32 pl-6">
<div className="max-w-3xl mx-auto">
<span className="uppercase block text-xs font-normal text-[#E89B5A] tracking-widest text-center mb-4">
          — Things Solos Ask First
        </span>
<h2 className="text-3xl text-[#FAF8F3] tracking-tight font-serif font-thin text-center mb-16 md:text-5xl">
          The questions that
          <span className="italic">matter</span>
          before you sign up.
        </h2>
<div className="border-t border-[#FAF8F3]/20">
<div className="group border-[#FAF8F3]/20 border-b py-5">
<button aria-expanded="false" className="faq-button w-full flex items-center justify-between text-left focus:outline-none">
<span className="md:text-2xl group-hover:text-[#23C4D6] transition-colors text-xl font-extralight text-[#FAF8F3] tracking-tight font-serif pr-6">
                Will this replace my professional judgment?
              </span>
<iconify-icon className="text-2xl text-[#FAF8F3]/40 transform transition-transform duration-200 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-grid">
<div className="faq-inner">
<p className="pt-4 text-[#FAF8F3]/80 font-extralight leading-relaxed pr-12 text-sm font-sans">
                  No. Legau is built to give you leverage, not to replace you.
                  It drafts, reviews, and surfaces legal context, but the final
                  judgment and the responsibility stay with you. That's the only
                  way legal AI works for a solo, and it's how we built it.
                </p>
</div>
</div>
</div>
<div className="border-b border-[#FAF8F3]/20 py-5 group">
<button aria-expanded="false" className="faq-button w-full flex items-center justify-between text-left focus:outline-none">
<span className="font-serif font-extralight text-xl md:text-2xl text-[#FAF8F3] group-hover:text-[#23C4D6] transition-colors pr-6 tracking-tight">
                How do you reduce hallucinations?
              </span>
<iconify-icon className="text-2xl text-[#FAF8F3]/40 transform transition-transform duration-200 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-grid">
<div className="faq-inner">
<p className="pt-4 text-[#FAF8F3]/80 font-extralight leading-relaxed pr-12 text-sm font-sans">
                  Two ways. First, every answer Legau gives is grounded in real
                  legal sources (court decisions, doctrine, current
                  legislation). Second, Legau shows you its sources so you can
                  verify before you sign anything.
                </p>
</div>
</div>
</div>
<div className="border-b border-[#FAF8F3]/20 py-5 group">
<button aria-expanded="false" className="faq-button w-full flex items-center justify-between text-left focus:outline-none">
<span className="font-serif font-extralight text-xl md:text-2xl text-[#FAF8F3] group-hover:text-[#23C4D6] transition-colors pr-6 tracking-tight">
                Is my client data secure? Is it used to train AI?
              </span>
<iconify-icon className="text-2xl text-[#FAF8F3]/40 transform transition-transform duration-200 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-grid">
<div className="faq-inner">
<p className="pt-4 text-[#FAF8F3]/80 font-extralight leading-relaxed pr-12 text-sm font-sans">
                  Yes, secure. No, not used to train. Your data is encrypted in
                  transit and at rest, isolated from other users, and never used
                  to train models. Confidentiality is the only way this product
                  can exist for lawyers, so we built it that way from day one.
                </p>
</div>
</div>
</div>
<div className="border-b border-[#FAF8F3]/20 py-5 group">
<button aria-expanded="false" className="faq-button w-full flex items-center justify-between text-left focus:outline-none">
<span className="font-serif font-extralight text-xl md:text-2xl text-[#FAF8F3] group-hover:text-[#23C4D6] transition-colors pr-6 tracking-tight">
                We don't have IT. Is this hard to install?
              </span>
<iconify-icon className="text-2xl text-[#FAF8F3]/40 transform transition-transform duration-200 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-grid">
<div className="faq-inner">
<p className="pt-4 text-[#FAF8F3]/80 font-extralight leading-relaxed pr-12 text-sm font-sans">
                  Under 5 minutes. Legau works directly inside Microsoft Word
                  and Outlook.
                </p>
</div>
</div>
</div>
<div className="border-b border-[#FAF8F3]/20 py-5 group">
<button aria-expanded="false" className="faq-button w-full flex items-center justify-between text-left focus:outline-none">
<span className="md:text-2xl group-hover:text-[#23C4D6] transition-colors text-xl font-extralight text-[#FAF8F3] font-serif pr-6 tracking-tight">
                What practice areas does Legau support?
              </span>
<iconify-icon className="text-2xl text-[#FAF8F3]/40 transform transition-transform duration-200 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-grid">
<div className="faq-inner">
<p className="pt-4 text-[#FAF8F3]/80 font-extralight leading-relaxed pr-12 text-sm font-sans">
                  Legau works across most areas of solo practice: estate and
                  probate, family, immigration, criminal defense, real estate,
                  civil litigation, and general small-firm work. The deeper
                  Legau goes with you (your templates, your past work, your
                  DMS), the more it specializes to your area.
                </p>
</div>
</div>
</div>
<div className="border-b border-[#FAF8F3]/20 py-5 group">
<button aria-expanded="false" className="faq-button w-full flex items-center justify-between text-left focus:outline-none">
<span className="font-serif font-extralight text-xl md:text-2xl text-[#FAF8F3] group-hover:text-[#23C4D6] transition-colors pr-6 tracking-tight">
                Can I cancel anytime?
              </span>
<iconify-icon className="text-2xl text-[#FAF8F3]/40 transform transition-transform duration-200 shrink-0" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-grid">
<div className="faq-inner">
<p className="pt-4 text-[#FAF8F3]/80 font-extralight leading-relaxed pr-12 text-sm font-sans">
                  Yes. The paid plans (monthly, quarterly, yearly) can be
                  cancelled or paused at any time, and you keep access through
                  the end of the period you've paid for.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="text-center bg-[#FAF8F3] pt-40 pr-6 pb-40 pl-6" id="signup-section">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto">
<div className="w-full flex flex-col items-center mb-10">
<h2 className="md:text-6xl text-5xl font-thin text-[#06303A] tracking-tight font-serif mb-6">
            Try it on
            <span className="italic">real work</span>
            .
          </h2>
<p className="text-xl text-[#06303A]/80 font-extralight max-w-lg mx-auto mb-8">
            Bring it into one matter. Keep it if it earns its place.
          </p>
<p className="text-xs text-[#06303A]/60 font-extralight">
            No credit card. Works inside the tools you already use.
          </p>
</div>
<div className="mx-auto">
<a className="hover:bg-[#1FB0C0] transition-colors duration-200 text-sm font-normal text-[#06303A] bg-[#23C4D6] rounded py-3.5 px-8 cursor-pointer inline-flex items-center justify-center" href="#pricing">
            Start with Legau free
          </a>
</div>
</div>
</section>

<footer className="bg-[#03252D] border-[#FAF8F3]/10 border-t pt-16 pr-6 pb-16 pl-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8">
<div className="flex flex-col items-start">
<img alt="Legau Logo" className="w-auto h-10 md:h-12 object-contain rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66b95995-6f55-4ee0-9329-b1945636400e_320w.png"/>
<span className="text-[#B5D8DD] text-xs uppercase tracking-widest font-light mt-2">
            Be a lawyer again.
          </span>
</div>
<div className="">
<ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-[#B5D8DD] text-xs font-light">
<li className="">
<a className="hover:text-[#F0EBE0] transition-colors" href="https://legau.com/privacy-policy/">
                Privacy Policy
              </a>
</li>
<li className="">
<a className="hover:text-[#F0EBE0] transition-colors" href="https://legau.com/cookies-policy/">
                Cookie Policy
              </a>
</li>
<li className="">
<a className="hover:text-[#F0EBE0] transition-colors" href="https://legau.com/terms-and-conditions/">
                Terms of Use
              </a>
</li>
</ul>
</div>
</div>
<div className="text-xs font-light text-[#B5D8DD]/60 text-center max-w-7xl border-[#FAF8F3]/10 border-t mt-16 mx-auto pt-8">
        © 2026 Legau. All rights reserved.
      </div>
</footer>



    </>
  );
}
