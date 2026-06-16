import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => window.__inViewIO.observe(el));
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
if (entry.target.classList.contains('counter-trigger')) startCounters(entry.target);
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1 });
document.querySelectorAll(".counter-trigger").forEach((el) => observer.observe(el));
function startCounters(container) {
container.querySelectorAll('[data-target]').forEach(counter => {
const target = parseFloat(counter.getAttribute('data-target'));
const suffix = counter.getAttribute('data-suffix') || '';
const prefix = counter.getAttribute('data-prefix') || '';
const duration = 1500;
const startTime = performance.now();
function update(t) {
const p = Math.min((t - startTime) / duration, 1);
const ease = 1 - Math.pow(1 - p, 4);
counter.innerText = prefix + (target * ease).toFixed(target % 1 === 0 ? 0 : 1) + suffix;
if (p < 1) requestAnimationFrame(update);
}
requestAnimationFrame(update);
});
}
const textSection = document.getElementById('scroll-reveal-section');
const words = document.querySelectorAll('.reveal-word');
if (textSection) {
window.addEventListener('scroll', () => {
const rect = textSection.getBoundingClientRect();
const winH = window.innerHeight;
const startReveal = winH * 0.9;
const endReveal = winH * 0.4;
let progress = (startReveal - rect.top) / (startReveal - endReveal);
progress = Math.max(0, Math.min(1, progress));
const activeCount = Math.floor(progress * words.length);
words.forEach((w, i) => i < activeCount ? w.classList.add('active') : w.classList.remove('active'));
});
}
const workflowSteps = document.querySelectorAll('.workflow-step-content');
const stepIndicators = document.querySelectorAll('.step-trigger');
const workflowImages = document.querySelectorAll('.workflow-img');
const stepObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const index = entry.target.getAttribute('data-step');
stepIndicators.forEach(ind => {
const line = ind.querySelector('.step-indicator');
const text = ind.querySelector('.step-text');
if (ind.getAttribute('data-step') === index) {
line.classList.add('active');
text.classList.add('active');
} else {
line.classList.remove('active');
text.classList.remove('active');
}
});
workflowImages.forEach(img => {
if (img.getAttribute('data-step') === index) {
img.classList.remove('opacity-0', 'scale-95');
img.classList.add('opacity-100', 'scale-100');
} else {
img.classList.add('opacity-0', 'scale-95');
img.classList.remove('opacity-100', 'scale-100');
}
});
}
});
}, { rootMargin: "-40% 0px -40% 0px" });
workflowSteps.forEach(step => stepObserver.observe(step));
});



        function switchUseCase(type) {
          document.querySelectorAll('.use-case-tab').forEach(el => {
            el.classList.remove('bg-[#141414]', 'text-white', 'border-[#141414]');
            el.classList.add('bg-white', 'text-[#6B6B6B]', 'border-subtle');
            if(el.id === 'tab-' + type) {
              el.classList.remove('bg-white', 'text-[#6B6B6B]', 'border-subtle');
              el.classList.add('bg-[#141414]', 'text-white', 'border-[#141414]');
            }
          });
          document.querySelectorAll('.use-case-content').forEach(el => {
            el.classList.add('opacity-0', 'pointer-events-none', 'absolute', 'inset-0');
            el.classList.remove('opacity-100', 'relative', 'z-10');
            if(el.id === 'content-' + type) {
               el.classList.remove('opacity-0', 'pointer-events-none', 'absolute', 'inset-0');
               el.classList.add('opacity-100', 'relative', 'z-10');
            }
          });
        }
      


        function toggleFaq(btn) {
          const container = btn.closest('.space-y-1');
          const content = btn.nextElementSibling;
          const icon = btn.querySelector('.icon-plus');
          const isOpen = content.classList.contains('grid-rows-[1fr]');

          container.querySelectorAll('.faq-content').forEach(el => {
            el.classList.remove('grid-rows-[1fr]');
            el.classList.add('grid-rows-[0fr]');
          });
          container.querySelectorAll('.icon-plus').forEach(el => {
            el.classList.remove('rotate-45');
          });

          if (!isOpen) {
            content.classList.remove('grid-rows-[0fr]');
            content.classList.add('grid-rows-[1fr]');
            icon.classList.add('rotate-45');
          }
        }
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grid-overlay">
<div className="grid-inner">
<div className="grid-line-v"></div>
<div className="grid-line-v hidden md:block"></div>
<div className="grid-line-v hidden lg:block"></div>
<div className="grid-line-v"></div>
</div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<div className="border-subtle flex bg-white/90 w-full max-w-4xl border pt-2 pr-2 pb-2 pl-2 shadow-2xl backdrop-blur-xl gap-x-1 gap-y-1 items-center justify-center">
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-[#141414] px-4 py-2 text-xs tracking-widest uppercase transition-colors text-[#6B6B6B] font-geist" href="#strategy">
            Overview
          </a>
<a className="hover:text-[#141414] px-4 py-2 text-xs tracking-widest uppercase transition-colors text-[#6B6B6B] font-geist" href="#workflows">
            How It Works
          </a>
</div>
<div className="px-6 text-2xl text-[#141414] uppercase flex items-center gap-2 tracking-tighter font-space-grotesk font-light">
<div className="w-1.5 h-1.5 bg-[#115E59] animate-pulse shadow-[0_0_8px_rgba(22,163,74,0.35)]"></div>
          LEDGERLY
        </div>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-[#141414] px-4 py-2 text-xs tracking-widest uppercase transition-colors text-[#6B6B6B] font-geist" href="#results">
            Insights
          </a>
<a aria-label="Connect Accounts" className="hover:text-[#141414] px-4 py-2 text-xs tracking-widest uppercase transition-colors text-[#6B6B6B] font-geist" href="#contact">
            Get Started
          </a>
</div>
</div>
</nav>

<section className="md:pt-52 md:pb-32 overflow-hidden z-10 pt-40 pb-20 relative">
<div className="container mx-auto px-4 relative max-w-7xl">
<div className="flex flex-col text-center mb-24 relative space-y-0 items-center justify-center">
<div className="absolute -left-4 md:left-20 top-0 flex flex-col gap-2 opacity-60 hidden lg:flex [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate"></div>
<div className="flex flex-col w-full z-10 items-center justify-center">
<h1 className="uppercase leading-[0.85] flex flex-wrap justify-center gap-x-4 md:text-9xl mdgap-x-8 text-6xl font-semibold text-[#141414] tracking-tighter mt-8 mb-0">
<span className="[animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll tracking-tighter font-space-grotesk font-light animate">
                Financial
              </span>
<span className="text-gradient [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll font-light tracking-tighter font-space-grotesk animate">
                Clarity
              </span>
</h1>
</div>
<div className="flex flex-col md:flex-row md:mt-12 md:mb-12 z-10 w-full mt-10 mb-8 gap-x-6 gap-y-6 items-center justify-center">
<div className="[animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll group my-8 relative animate">
<div className="beam-border"></div>
<div className="border-subtle flex group-hover:bg-[#F3EEE6] transition-colors md:h-16 z-10 bg-white h-12 border rounded-full mt-[1px] mr-[1px] mb-[1px] ml-[1px] pr-6 pl-3 relative gap-x-4 gap-y-4 items-center">
<div className="md:w-10 md:h-10 overflow-hidden flex border-subtle text-[#141414] bg-[#F3EEE6] w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3f6038cb-af1c-4483-97bc-dd58d89c36ef_320w.jpg)] bg-cover bg-center border rounded-full relative items-center justify-center">
<iconify-icon className="text-lg text-[#0F766E]" icon="lucide:bot" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="flex flex-row items-center gap-x-2 text-left">
<span className="text-[10px] uppercase tracking-widest text-[#6B6B6B] font-geist">
                    System Status →
                  </span>
<span className="text-xs md:text-sm leading-none text-[#141414] font-geist">
                    Tracking
                  </span>
</div>
</div>
</div>
<h2 className="[animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll text-lg text-[#6B6B6B] tracking-tight font-space-grotesk md:text-3xl animate">
              Your personal finance control hub.
            </h2>
</div>
<div className="leading-relaxed [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll md:text-2xl text-xs text-[#6B6B6B] font-space-grotesk text-center max-w-lg pb-5 animate">
            See where your money goes, plan where it should go, and stay in
            control—without spreadsheets.
          </div>
<div className="mt-10 [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate">
<a className="group relative inline-block bg-[#0F766E] text-white px-10 py-4 text-sm font-semibold tracking-widest uppercase transition-transform overflow-hidden" href="#contact">
<span className="relative z-10 font-geist">Connect Accounts</span>
<div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-[#115E59]"></div>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-6xl mx-auto counter-trigger [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="bg-white border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-[#0F766E]/30 transition-colors">
<div className="absolute top-4 right-4 text-xs text-[#6B6B6B] font-geist">
              01
            </div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-[#141414]" icon="lucide:wallet" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="px-2 py-0.5 border border-[#16A34A]/30 bg-[#CCFBF1] text-[#0F766E] text-[10px] uppercase tracking-wider font-geist">
                Total
              </div>
</div>
<div className="">
<div className="text-4xl text-[#141414] mb-1 tracking-tighter font-space-grotesk font-light">
<span className="" data-prefix="$" data-suffix="" data-target="124560">
                  $124,560
                </span>
</div>
<h3 className="text-xs uppercase tracking-widest text-[#6B6B6B] font-geist">
                Money Tracked
              </h3>
</div>
</div>
<div className="bg-white border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-[#0F766E]/30 transition-colors">
<div className="absolute top-4 right-4 text-xs text-[#6B6B6B] font-geist">
              02
            </div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-[#141414]" icon="lucide:bar-chart-3" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-4xl text-[#141414] mb-1 tracking-tighter font-space-grotesk font-light">
<span data-prefix="+$" data-suffix="" data-target="1240">
                  +$1,240
                </span>
</div>
<h3 className="text-xs uppercase tracking-widest text-[#6B6B6B] font-geist">
                Monthly Savings Identified
              </h3>
</div>
</div>
<div className="bg-white border border-subtle p-8 flex flex-col justify-between min-h-[220px] relative group hover:border-[#0F766E]/30 transition-colors">
<div className="absolute top-4 right-4 text-xs text-[#6B6B6B] font-geist">
              03
            </div>
<div className="flex justify-between items-start">
<iconify-icon className="text-2xl text-[#141414]" icon="lucide:calendar" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<div className="text-4xl text-[#141414] mb-1 tracking-tighter font-space-grotesk font-light">
<span data-prefix="" data-suffix=" Active" data-target="18">
                  18 Active
                </span>
</div>
<h3 className="text-xs uppercase tracking-widest text-[#6B6B6B] font-geist">
                Bills &amp; Subscriptions Monitored
              </h3>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-subtle overflow-hidden bg-[#F3EEE6] pt-32 pb-32 relative" id="scroll-reveal-section">
<div className="container mx-auto px-4 relative z-10">
<div className="max-w-6xl mx-auto text-center leading-tight">
<h2 className="text-3xl md:text-5xl tracking-tight uppercase leading-[1.3] font-semibold text-[#141414]">
<span className="reveal-word font-space-grotesk font-light">Stop</span>
<span className="reveal-word font-space-grotesk font-light">
              guessing.
            </span>
<span className="reveal-word font-space-grotesk font-light">Start</span>
<span className="reveal-word inline-flex align-middle bg-[#CCFBF1] border border-subtle px-4 py-1 mx-1 text-[#141414] font-space-grotesk font-light">
<iconify-icon className="text-2xl mr-2 text-[#0F766E]" icon="lucide:wallet" style={{strokeWidth: '1.5'}}></iconify-icon>
              understanding
            </span>
<span className="reveal-word font-space-grotesk font-light">where</span>
<span className="reveal-word font-space-grotesk font-light">your</span>
<span className="reveal-word text-white bg-[#0F766E] px-4 py-1 mx-1 font-space-grotesk font-light">
              Personal Ledger
            </span>
<span className="reveal-word font-space-grotesk font-light">shows</span>
<span className="reveal-word font-space-grotesk font-light">your</span>
<span className="reveal-word inline-flex align-middle border border-subtle text-[#141414] bg-white px-4 py-1 mx-1">
<iconify-icon className="text-2xl text-[#0F766E]" icon="lucide:bar-chart-3" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span className="reveal-word font-space-grotesk font-light">
              spending
            </span>
<span className="reveal-word font-space-grotesk font-light">in</span>
<span className="reveal-word inline-flex align-middle border border-subtle text-[#141414] bg-white px-4 py-1 mx-1">
<iconify-icon className="text-2xl text-[#0F766E]" icon="lucide:calendar" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<span className="reveal-word font-space-grotesk font-light">real</span>
<span className="reveal-word font-space-grotesk font-light">time.</span>
</h2>
</div>
</div>
</section>

<section className="z-10 border-subtle bg-[#FAF7F2] border-b relative" id="workflows">
<div className="container mx-auto px-4 max-w-7xl">
<div className="flex flex-col lg:flex-row">
<div className="lg:w-1/2 lg:h-screen sticky top-0 flex flex-col justify-center py-12 lg:py-0 pr-0 lg:pr-20 border-r border-subtle/0 lg:border-subtle">
<h2 className="text-5xl md:text-6xl uppercase mb-8 lg:mb-8 text-[#141414] tracking-tighter font-space-grotesk font-light">
              Money
              <br/>
<span className="text-[#6B6B6B]">Protocol</span>
</h2>
<div className="space-y-6 relative mb-12 hidden lg:block">
<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="1">
<div className="h-12 w-[2px] bg-[#E6DED3] relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-[#0F766E]"></div>
</div>
<div className="">
<h3 className="text-xl uppercase tracking-widest text-[#141414] font-space-grotesk">
                    01 / Track
                  </h3>
<p className="step-text text-sm text-[#6B6B6B] font-geist">
                    Connect accounts. Auto-categorize spending. Real-time
                    balance view.
                  </p>
</div>
</div>
<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="2">
<div className="h-12 w-[2px] bg-[#E6DED3] relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-[#E6DED3]"></div>
</div>
<div className="">
<h3 className="text-xl uppercase tracking-widest text-[#141414] font-space-grotesk">
                    02 / Understand
                  </h3>
<p className="step-text text-sm text-[#6B6B6B] font-geist">
                    Monthly breakdowns. Spending patterns. Subscription
                    detection.
                  </p>
</div>
</div>
<div className="step-trigger group cursor-pointer flex items-center gap-6" data-step="3">
<div className="h-12 w-[2px] bg-[#E6DED3] relative overflow-hidden">
<div className="step-indicator absolute top-0 left-0 w-full h-full bg-[#E6DED3]"></div>
</div>
<div className="">
<h3 className="text-xl uppercase tracking-widest text-[#141414] font-space-grotesk">
                    03 / Plan
                  </h3>
<p className="step-text text-sm text-[#6B6B6B] font-geist">
                    Budget goals. Savings targets. Upcoming bills &amp;
                    forecasts.
                  </p>
</div>
</div>
</div>
<div className="w-full aspect-video bg-white border border-subtle relative overflow-hidden rounded-sm hidden lg:block">
<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-white" data-step="1">
<div className="absolute inset-0 bg-cover bg-center opacity-25 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/016bce7b-6e9c-4f55-810b-e3c8333d60c8_1600w.webp)]" style={{}}></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-[#141414] mb-2" icon="lucide:wallet" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs font-mono text-[#16A34A]">
                    SYNCING ACCOUNTS...
                  </div>
</div>
</div>
<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-white" data-step="2">
<div className="absolute inset-0 bg-cover bg-center opacity-25 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/296c40d2-ced0-483a-b0f0-35272b789c47_1600w.webp)]" style={{}}></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-[#141414] mb-2" icon="lucide:bar-chart-3" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs font-mono text-[#0F766E]">
                    ANALYZING SPEND...
                  </div>
</div>
</div>
<div className="workflow-img absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center bg-white" data-step="3">
<div className="absolute inset-0 bg-cover bg-center opacity-25 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ac27de6-317a-490a-a9b2-f8ab2a1506ce_1600w.webp)]" style={{}}></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-[#141414] mb-2" icon="lucide:calendar" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs font-mono text-[#0F766E]">
                    FORECAST READY
                  </div>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2">
<div className="h-[20vh] hidden lg:block"></div>
<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20 border-b border-subtle" data-step="1">
<span className="text-6xl text-[#141414]/10 mb-6 font-space-grotesk font-semibold">
                01
              </span>
<h3 className="text-3xl text-[#141414] mb-6 font-space-grotesk tracking-tight">
                Track Everything, Automatically
              </h3>
<div className="w-full aspect-video bg-white border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-white">
<div className="absolute inset-0 bg-cover bg-center opacity-25 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11443b2f-dfa8-4425-8445-0f952362cd0a_1600w.webp)]" style={{}}></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-[#141414] mb-2" icon="lucide:wallet" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs font-mono text-[#16A34A]">
                      SYNCING ACCOUNTS...
                    </div>
</div>
</div>
</div>
<p className="text-[#6B6B6B] leading-relaxed mb-8 font-geist">
                Connect your accounts and let Ledgerly keep everything in sync.
                Transactions are categorized automatically so you always know
                what’s happening—without manual entry or spreadsheets.
              </p>
<ul className="space-y-4 font-geist text-sm text-[#141414]">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#16A34A]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Connect accounts
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#16A34A]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Auto-categorize spending
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#16A34A]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Real-time balance view
                </li>
</ul>
</div>
<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20 border-b border-subtle" data-step="2">
<span className="text-6xl text-[#141414]/10 mb-6 font-space-grotesk font-semibold">
                02
              </span>
<h3 className="text-3xl text-[#141414] mb-6 font-space-grotesk tracking-tight">
                Understand Your Spending
              </h3>
<div className="w-full aspect-video bg-white border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-white">
<div className="absolute inset-0 bg-cover bg-center opacity-25 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/296c40d2-ced0-483a-b0f0-35272b789c47_1600w.webp)]" style={{}}></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-[#141414] mb-2" icon="lucide:bar-chart-3" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs font-mono text-[#0F766E]">
                      ANALYZING SPEND...
                    </div>
</div>
</div>
</div>
<p className="text-[#6B6B6B] leading-relaxed mb-8 font-geist">
                See clear monthly breakdowns and the patterns behind your spend.
                Ledgerly highlights trends and detects subscriptions so you can
                cut waste before it adds up.
              </p>
<ul className="space-y-4 font-geist text-sm text-[#141414]">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Monthly breakdowns
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Spending patterns
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Subscription detection
                </li>
</ul>
</div>
<div className="workflow-step-content min-h-[50vh] lg:min-h-[80vh] flex flex-col justify-center px-0 lg:px-20 py-12 lg:py-20" data-step="3">
<span className="text-6xl text-[#141414]/10 mb-6 font-space-grotesk font-semibold">
                03
              </span>
<h3 className="text-3xl text-[#141414] mb-6 font-space-grotesk tracking-tight">
                Plan What’s Next
              </h3>
<div className="w-full aspect-video bg-white border border-subtle relative overflow-hidden rounded-sm mb-8 block lg:hidden">
<div className="absolute inset-0 flex items-center justify-center bg-white">
<div className="absolute inset-0 bg-cover bg-center opacity-25 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ac27de6-317a-490a-a9b2-f8ab2a1506ce_1600w.webp)]" style={{}}></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-4xl text-[#141414] mb-2" icon="lucide:calendar" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-xs font-mono text-[#0F766E]">
                      FORECAST READY
                    </div>
</div>
</div>
</div>
<p className="text-[#6B6B6B] leading-relaxed mb-8 font-geist">
                Set budget goals and savings targets that match your reality.
                Upcoming bills and forecasts help you plan ahead—so you’re in
                control before decisions get made for you.
              </p>
<ul className="space-y-4 font-geist text-sm text-[#141414]">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#16A34A]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Budget goals
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#16A34A]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Savings targets
                </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#16A34A]" icon="lucide:check-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Upcoming bills &amp; forecasts
                </li>
</ul>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#FAF7F2] border-t border-subtle pt-24 pb-24 relative z-10">
<div className="container mx-auto px-4 max-w-7xl">
<div className="flex flex-col text-center mb-16 items-center justify-center">
<h2 className="text-3xl md:text-5xl uppercase text-[#141414] tracking-tighter font-space-grotesk font-light mb-4">
            Security &amp;
            <span className="text-[#6B6B6B]">Trust</span>
</h2>
<p className="text-lg text-[#6B6B6B] font-space-grotesk max-w-2xl mx-auto">
            Your data is protected by design — not promises.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
<div className="bg-white border border-subtle p-8 flex flex-col gap-4 hover:border-[#0F766E]/30 transition-colors">
<div className="w-10 h-10 bg-[#F3EEE6] rounded-full flex items-center justify-center text-[#0F766E]">
<iconify-icon className="text-xl" icon="lucide:lock" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-lg font-space-grotesk text-[#141414] mb-2">
                Read-Only Bank Connections
              </h3>
<p className="text-sm text-[#6B6B6B] font-geist leading-relaxed">
                Ledgerly can never move your money. We connect in read-only
                mode, so transactions can be viewed but never changed.
              </p>
</div>
</div>
<div className="bg-white border border-subtle p-8 flex flex-col gap-4 hover:border-[#0F766E]/30 transition-colors">
<div className="w-10 h-10 bg-[#F3EEE6] rounded-full flex items-center justify-center text-[#0F766E]">
<iconify-icon className="text-xl" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-lg font-space-grotesk text-[#141414] mb-2">
                End-to-End Encryption
              </h3>
<p className="text-sm text-[#6B6B6B] font-geist leading-relaxed">
                Your data stays encrypted at all times. Information is protected
                in transit and at rest using modern encryption standards.
              </p>
</div>
</div>
<div className="bg-white border border-subtle p-8 flex flex-col gap-4 hover:border-[#0F766E]/30 transition-colors">
<div className="w-10 h-10 bg-[#F3EEE6] rounded-full flex items-center justify-center text-[#0F766E]">
<iconify-icon className="text-xl" icon="lucide:eye-off" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-lg font-space-grotesk text-[#141414] mb-2">
                Privacy First
              </h3>
<p className="text-sm text-[#6B6B6B] font-geist leading-relaxed">
                Your financial data is yours — period. We never sell, share, or
                monetize your personal information.
              </p>
</div>
</div>
<div className="bg-white border border-subtle p-8 flex flex-col gap-4 hover:border-[#0F766E]/30 transition-colors">
<div className="w-10 h-10 bg-[#F3EEE6] rounded-full flex items-center justify-center text-[#0F766E]">
<iconify-icon className="text-xl" icon="lucide:landmark" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-space-grotesk text-[#141414] mb-2">
                Industry-Standard Security
              </h3>
<p className="text-sm text-[#6B6B6B] font-geist leading-relaxed">
                Built using trusted financial security practices. Ledgerly is
                designed with the same principles used by modern fintech
                platforms.
              </p>
</div>
</div>
</div>
<div className="border-t border-subtle pt-12 text-center">
<div className="flex flex-wrap justify-center gap-4 mb-8">
<span className="px-4 py-2 bg-white border border-subtle rounded-full text-xs uppercase tracking-widest text-[#141414] font-geist">
              Read-Only Access
            </span>
<span className="px-4 py-2 bg-white border border-subtle rounded-full text-xs uppercase tracking-widest text-[#141414] font-geist">
              256-bit Encryption
            </span>
<span className="px-4 py-2 bg-white border border-subtle rounded-full text-xs uppercase tracking-widest text-[#141414] font-geist">
              GDPR-Ready Architecture
            </span>
<span className="px-4 py-2 bg-white border border-subtle rounded-full text-xs uppercase tracking-widest text-[#141414] font-geist">
              SOC-Aligned Practices
            </span>
</div>
<p className="text-[10px] text-[#6B6B6B] uppercase tracking-widest font-geist mb-8 opacity-60">
            Security practices described reflect design principles, not formal
            certifications.
          </p>
<p className="text-lg md:text-xl text-[#141414] font-space-grotesk max-w-2xl mx-auto">
            Ledgerly is designed to help you understand your money — not control
            it.
          </p>
</div>
</div>
</section>

<section className="bg-[#FAF7F2] text-[#141414] pt-24 pb-12 border-t border-subtle relative z-10" id="results">
<div className="container max-w-7xl mx-auto px-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 pb-8 border-b border-subtle">
<div className="">
<h2 className="text-5xl md:text-7xl uppercase mb-2 text-[#141414] tracking-tighter font-space-grotesk font-light">
              What You See
            </h2>
<p className="text-xs uppercase tracking-widest text-[#6B6B6B] font-geist">
              / What you actually get / Tangible views
            </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 mb-20 items-stretch">
<div className="flex flex-col gap-1 h-full">
<div className="bg-white border border-subtle w-full aspect-[9/16] relative group overflow-hidden">
<div className="absolute top-4 right-4 z-20 text-[10px] text-[#6B6B6B] border border-subtle bg-white/80 px-2 py-0.5 font-geist">
                MOBILE
              </div>
<img alt="Mobile App View" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5692478f-1158-46d2-a363-0a846c4f7fcf_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-[#141414]">
                  Mobile App View
                </h3>
</div>
</div>
</div>
<div className="flex flex-col gap-1 h-full aspect-[9/16] md:aspect-auto">
<div className="relative flex-1 group overflow-hidden border border-subtle bg-white">
<div className="absolute top-4 right-4 z-20 text-[10px] text-[#6B6B6B] border border-subtle bg-white/80 px-2 py-0.5 font-geist">
                WEB
              </div>
<img alt="Spending Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1042d62-4402-4150-a295-c82f622f7b03_1600w.webp" style={{}}/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-[#141414]">
                  Spending Dashboard
                </h3>
</div>
</div>
<div className="relative flex-1 group overflow-hidden border border-subtle bg-white">
<div className="absolute top-4 right-4 z-20 text-[10px] text-[#6B6B6B] border border-subtle bg-white/80 px-2 py-0.5 font-geist">
                AI
              </div>
<img alt="Monthly Report" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20497d74-08db-4ff4-ac25-4356dfa5142e_1600w.webp" style={{}}/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-[#141414]">
                  Monthly Report
                </h3>
</div>
</div>
<div className="relative flex-1 group overflow-hidden border border-subtle bg-white">
<div className="absolute top-4 right-4 z-20 text-[10px] text-[#6B6B6B] border border-subtle bg-white/80 px-2 py-0.5 font-geist">
                DATA
              </div>
<img alt="Subscription List" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec5706fb-8976-4615-86fc-f10055753ac2_1600w.webp"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-[#141414]">
                  Subscription List
                </h3>
</div>
</div>
</div>
<div className="flex flex-col gap-1 h-full">
<div className="bg-white border border-subtle w-full aspect-[9/16] relative group overflow-hidden">
<div className="absolute top-4 right-4 z-20 text-[10px] text-[#6B6B6B] border border-subtle bg-white/80 px-2 py-0.5 font-geist">
                APP
              </div>
<img alt="Savings Forecast" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daabbcee-89b4-4e3b-94b4-eded9675c9fb_1600w.webp" style={{}}/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl uppercase tracking-tight font-space-grotesk text-[#141414]">
                  Savings Forecast
                </h3>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#FAF7F2] text-[#141414] pt-24 pb-24 border-t border-subtle relative z-10" id="use-cases">
<div className="container max-w-7xl mx-auto px-4">
<div className="text-center mb-16">
<h2 className="text-5xl md:text-7xl uppercase mb-4 text-[#141414] tracking-tighter font-space-grotesk font-light">
            Made for
            <span className="text-[#6B6B6B]">real life</span>
</h2>
<p className="text-lg text-[#6B6B6B] font-space-grotesk">
            Same system. Different ways to use it.
          </p>
</div>
<div className="flex flex-wrap justify-center gap-4 mb-12">
<button className="use-case-tab px-6 py-2 border border-[#141414] bg-[#141414] text-white text-xs uppercase tracking-widest font-geist transition-all" id="tab-individual" onclick="switchUseCase('individual')">
            Individuals
          </button>
<button className="use-case-tab border-subtle hover:text-[#141414] uppercase transition-all text-xs text-[#6B6B6B] tracking-widest font-geist bg-white border pt-2 pr-6 pb-2 pl-6" id="tab-couple" onclick="switchUseCase('couple')">
            Couples
          </button>
<button className="use-case-tab px-6 py-2 border border-subtle bg-white text-[#6B6B6B] hover:text-[#141414] text-xs uppercase tracking-widest font-geist transition-all" id="tab-family" onclick="switchUseCase('family')">
            Families
          </button>
</div>
<div className="max-w-4xl mx-auto relative min-h-[400px]">

<div className="use-case-content transition-opacity duration-500 opacity-100 relative z-10" id="content-individual">
<div className="bg-white border border-subtle p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<div className="w-12 h-12 bg-[#F3EEE6] rounded-full flex items-center justify-center text-[#0F766E] mb-6">
<iconify-icon className="text-2xl" icon="lucide:user" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-3xl font-space-grotesk text-[#141414] tracking-tight">
                  Clarity without effort.
                </h3>
<p className="text-[#6B6B6B] font-geist leading-relaxed">
                  Understand your spending, spot patterns, and build better
                  habits—without tracking every dollar manually.
                </p>
<ul className="space-y-3 text-sm font-geist text-[#141414] pt-2">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check"></iconify-icon>
                    Automatic spending categories
                  </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check"></iconify-icon>
                    Subscription and bill tracking
                  </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check"></iconify-icon>
                    Monthly summaries that make sense
                  </li>
</ul>
<div className="pt-6 border-t border-subtle mt-6">
<span className="text-[10px] uppercase tracking-widest text-[#6B6B6B] font-geist flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#0F766E] rounded-full"></span>
                    Personal monthly snapshot
                  </span>
</div>
</div>
<div className="w-full md:w-1/3 aspect-square bg-[#FAF7F2] border border-subtle flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ca2dff12-04ff-4713-9404-e3cb60f16c8a_3840w.jpg?w=800&amp;q=80)]" style={{}}></div>
<div className="relative z-10 bg-white border border-subtle px-4 py-2 text-xs uppercase tracking-widest font-geist shadow-lg">
                  Personal View
                </div>
</div>
</div>
</div>

<div className="use-case-content transition-opacity duration-500 opacity-0 absolute inset-0 pointer-events-none" id="content-couple">
<div className="bg-white border border-subtle p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<div className="w-12 h-12 bg-[#F3EEE6] rounded-full flex items-center justify-center text-[#0F766E] mb-6">
<iconify-icon className="text-2xl" icon="lucide:users" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-3xl font-space-grotesk text-[#141414] tracking-tight">
                  Shared money, no confusion.
                </h3>
<p className="text-[#6B6B6B] font-geist leading-relaxed">
                  Keep shared expenses transparent and aligned, while still
                  respecting individual accounts.
                </p>
<ul className="space-y-3 text-sm font-geist text-[#141414] pt-2">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check"></iconify-icon>
                    Shared bills and subscriptions
                  </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check"></iconify-icon>
                    Clear view of who paid what
                  </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check"></iconify-icon>
                    Planning without awkward conversations
                  </li>
</ul>
<div className="pt-6 border-t border-subtle mt-6">
<span className="text-[10px] uppercase tracking-widest text-[#6B6B6B] font-geist flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#0F766E] rounded-full"></span>
                    Shared expenses timeline
                  </span>
</div>
</div>
<div className="w-full md:w-1/3 aspect-square bg-[#FAF7F2] border border-subtle flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d668b8f4-f584-4c3e-b78c-2a0f6b6b2e5c_3840w.webp?w=800&amp;q=80)]" style={{}}></div>
<div className="relative z-10 bg-white border border-subtle px-4 py-2 text-xs uppercase tracking-widest font-geist shadow-lg">
                  Couples View
                </div>
</div>
</div>
</div>

<div className="use-case-content transition-opacity duration-500 opacity-0 absolute inset-0 pointer-events-none" id="content-family">
<div className="bg-white border border-subtle p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<div className="w-12 h-12 bg-[#F3EEE6] rounded-full flex items-center justify-center text-[#0F766E] mb-6">
<iconify-icon className="text-2xl" icon="lucide:home" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-3xl font-space-grotesk text-[#141414] tracking-tight">
                  Household finances, organized.
                </h3>
<p className="text-[#6B6B6B] font-geist leading-relaxed">
                  Manage bills, budgets, and long-term planning for your entire
                  household in one clear view.
                </p>
<ul className="space-y-3 text-sm font-geist text-[#141414] pt-2">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check"></iconify-icon>
                    Household-wide spending overview
                  </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check"></iconify-icon>
                    Recurring bills and due dates
                  </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#0F766E]" icon="lucide:check"></iconify-icon>
                    Planning ahead with confidence
                  </li>
</ul>
<div className="pt-6 border-t border-subtle mt-6">
<span className="text-[10px] uppercase tracking-widest text-[#6B6B6B] font-geist flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#0F766E] rounded-full"></span>
                    Household financial overview
                  </span>
</div>
</div>
<div className="w-full md:w-1/3 aspect-square bg-[#FAF7F2] border border-subtle flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-cover bg-center opacity-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b83dd0f6-5b13-4f4c-a16d-8458619d6d32_3840w.jpg?w=800&amp;q=80)]" style={{}}></div>
<div className="relative z-10 bg-white border border-subtle px-4 py-2 text-xs uppercase tracking-widest font-geist shadow-lg">
                  Family View
                </div>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<p className="text-xs uppercase tracking-widest text-[#6B6B6B] font-geist opacity-60">
            Switch perspectives anytime. Your data stays the same — only the
            lens changes.
          </p>
</div>
</div>

</section>

<section className="border-subtle overflow-hidden z-10 border-t pt-24 pb-24 relative bg-[#FAF7F2]">
<div className="container mx-auto px-4 max-w-7xl mb-12">
<h2 className="text-3xl md:text-5xl uppercase text-center text-[#141414] tracking-tighter font-space-grotesk font-light">
          User
          <span className="text-[#6B6B6B]">Stories</span>
</h2>
</div>
<div className="marquee-container w-full relative overflow-hidden py-10">
<div className="flex w-[200%] marquee-content hover:[animation-play-state:paused]">
<div className="flex w-1/2 justify-around gap-6 px-4">
<div className="w-[400px] border border-subtle p-8 bg-white shrink-0">
<p className="text-sm leading-relaxed mb-6 text-[#141414] font-geist">
                "I finally know where my money goes every month. Ledgerly made
                it obvious what to cut—and I’m saving without feeling
                restricted."
              </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-[#141414]" icon="lucide:briefcase" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-[#141414] uppercase font-semibold font-geist">
                    Maya
                  </div>
<div className="text-[10px] text-[#6B6B6B] uppercase font-geist">
                    Freelance Designer
                  </div>
</div>
</div>
</div>
<div className="w-[400px] border border-subtle p-8 bg-white shrink-0">
<p className="text-sm leading-relaxed mb-6 text-[#141414] font-geist">
                "Shared expenses used to be a constant back-and-forth. Now we’re
                aligned—bills, subscriptions, and spending are all in one
                place."
              </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-[#141414]" icon="lucide:users" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-[#141414] uppercase font-semibold font-geist">
                    Jordan &amp; Sam
                  </div>
<div className="text-[10px] text-[#6B6B6B] uppercase font-geist">
                    Couple managing shared expenses
                  </div>
</div>
</div>
</div>
<div className="w-[400px] border border-subtle p-8 bg-white shrink-0">
<p className="text-sm leading-relaxed mb-6 text-[#141414] font-geist">
                "I thought I was doing fine—until I saw my spending patterns.
                Ledgerly helped me set targets I can actually stick to."
              </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-[#141414]" icon="lucide:badge-dollar-sign" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-[#141414] uppercase font-semibold font-geist">
                    Alex
                  </div>
<div className="text-[10px] text-[#6B6B6B] uppercase font-geist">
                    Young professional
                  </div>
</div>
</div>
</div>
</div>
<div className="flex w-1/2 justify-around gap-6 px-4">
<div className="w-[400px] border border-subtle p-8 bg-white shrink-0">
<p className="text-sm leading-relaxed mb-6 text-[#141414] font-geist">
                "We finally have a clear picture of our household money. Bills
                are tracked, subscriptions don’t slip through, and we feel in
                control."
              </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-[#141414]" icon="lucide:home" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-[#141414] uppercase font-semibold font-geist">
                    The Patel Family
                  </div>
<div className="text-[10px] text-[#6B6B6B] uppercase font-geist">
                    Family household
                  </div>
</div>
</div>
</div>
<div className="w-[400px] border border-subtle p-8 bg-white shrink-0">
<p className="text-sm leading-relaxed mb-6 text-[#141414] font-geist">
                "I finally know where my money goes every month. The monthly
                view is simple, and the categories just make sense."
              </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-[#141414]" icon="lucide:wallet" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-[#141414] uppercase font-semibold font-geist">
                    Riley
                  </div>
<div className="text-[10px] text-[#6B6B6B] uppercase font-geist">
                    Freelancer
                  </div>
</div>
</div>
</div>
<div className="w-[400px] border border-subtle p-8 bg-white shrink-0">
<p className="text-sm leading-relaxed mb-6 text-[#141414] font-geist">
                "We stopped arguing about who paid for what. Now it’s
                transparent, and we can plan ahead without guessing."
              </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center">
<iconify-icon className="text-2xl text-[#141414]" icon="lucide:hand-coins" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-xs text-[#141414] uppercase font-semibold font-geist">
                    Taylor &amp; Casey
                  </div>
<div className="text-[10px] text-[#6B6B6B] uppercase font-geist">
                    Couple managing shared expenses
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-3 mt-8">
<button className="w-2 h-2 bg-[#0F766E] rounded-full"></button>
<button className="w-2 h-2 bg-[#E6DED3] hover:bg-[#D7CABC] transition-colors rounded-full"></button>
<button className="w-2 h-2 bg-[#E6DED3] hover:bg-[#D7CABC] transition-colors rounded-full"></button>
</div>
</section>

<section className="bg-[#FAF7F2] border-t border-subtle pt-24 pb-24 relative z-10" id="faq">
<div className="container mx-auto px-4 max-w-3xl">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl uppercase mb-4 text-[#141414] tracking-tighter font-space-grotesk font-light">
            Frequently asked
            <span className="text-[#6B6B6B]">questions</span>
</h2>
<p className="text-lg text-[#6B6B6B] font-space-grotesk">
            Clear answers, before you get started.
          </p>
</div>
<div className="space-y-1">

<div className="faq-item bg-white border border-subtle">
<button className="w-full flex items-center justify-between p-6 text-left group focus:outline-none" onclick="toggleFaq(this)" type="button">
<span className="text-lg font-space-grotesk text-[#141414]">
                Is my data safe?
              </span>
<span className="text-[#6B6B6B] text-2xl font-light transition-transform duration-300 icon-plus">
                +
              </span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="px-6 pb-6 text-sm text-[#6B6B6B] font-geist leading-relaxed">
                  Yes. Your data is protected by design. Ledgerly uses read-only
                  connections and modern encryption to keep your information
                  secure. Your financial data is encrypted in transit and at
                  rest, and access is strictly limited.
                </p>
</div>
</div>
</div>

<div className="faq-item bg-white border border-subtle">
<button className="w-full flex items-center justify-between p-6 text-left group focus:outline-none" onclick="toggleFaq(this)" type="button">
<span className="text-lg font-space-grotesk text-[#141414]">
                Is Ledgerly a bank?
              </span>
<span className="text-[#6B6B6B] text-2xl font-light transition-transform duration-300 icon-plus">
                +
              </span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="px-6 pb-6 text-sm text-[#6B6B6B] font-geist leading-relaxed">
                  No. Ledgerly is not a bank. We don’t hold your money, move
                  funds, or execute transactions. Ledgerly helps you understand
                  your finances by organizing and visualizing your data.
                </p>
</div>
</div>
</div>

<div className="faq-item bg-white border border-subtle">
<button className="w-full flex items-center justify-between p-6 text-left group focus:outline-none" onclick="toggleFaq(this)" type="button">
<span className="text-lg font-space-grotesk text-[#141414]">
                Can Ledgerly move my money?
              </span>
<span className="text-[#6B6B6B] text-2xl font-light transition-transform duration-300 icon-plus">
                +
              </span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="px-6 pb-6 text-sm text-[#6B6B6B] font-geist leading-relaxed">
                  No. Never. Ledgerly connects in read-only mode. We can see
                  transactions and balances, but we can’t make changes,
                  transfers, or payments.
                </p>
</div>
</div>
</div>

<div className="faq-item bg-white border border-subtle">
<button className="w-full flex items-center justify-between p-6 text-left group focus:outline-none" onclick="toggleFaq(this)" type="button">
<span className="text-lg font-space-grotesk text-[#141414]">
                Can I cancel anytime?
              </span>
<span className="text-[#6B6B6B] text-2xl font-light transition-transform duration-300 icon-plus">
                +
              </span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="px-6 pb-6 text-sm text-[#6B6B6B] font-geist leading-relaxed">
                  Yes. You’re always in control. You can disconnect accounts or
                  cancel your plan at any time, with no long-term commitments.
                </p>
</div>
</div>
</div>

<div className="faq-item bg-white border border-subtle">
<button className="w-full flex items-center justify-between p-6 text-left group focus:outline-none" onclick="toggleFaq(this)" type="button">
<span className="text-lg font-space-grotesk text-[#141414]">
                Is Ledgerly free?
              </span>
<span className="text-[#6B6B6B] text-2xl font-light transition-transform duration-300 icon-plus">
                +
              </span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="px-6 pb-6 text-sm text-[#6B6B6B] font-geist leading-relaxed">
                  Yes. You can get started for free. Ledgerly offers a free plan
                  to help you understand your finances. Advanced features may be
                  available with optional paid plans.
                </p>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<p className="text-xs uppercase tracking-widest text-[#6B6B6B] font-geist opacity-60">
            Ledgerly is designed to give you clarity — not lock you in.
          </p>
</div>
</div>

</section>
<section className="border-subtle bg-center z-10 border-t pt-32 pb-32 relative bg-[#FAF7F2]">
<div className="container mx-auto px-4 text-center max-w-4xl">
<h2 className="md:text-8xl uppercase text-5xl font-light text-[#141414] tracking-tighter font-space-grotesk mix-blend-multiply mb-8">
          Ready to
          <span className="text-[#6B6B6B]">feel in control?</span>
</h2>
<p className="text-xl text-[#6B6B6B] font-geist mix-blend-multiply max-w-xl mr-auto mb-10 ml-auto">
          Join thousands who replaced stress with clarity.
        </p>
<div className="">
<a className="inline-block bg-[#0F766E] text-white px-10 py-4 text-sm tracking-widest uppercase transition-colors font-geist font-semibold hover:bg-[#115E59]" href="#contact">
            Start Free
          </a>
<div className="mt-4 text-xs uppercase tracking-widest text-[#6B6B6B] font-geist">
            No credit card required
          </div>
</div>
</div>
</section>

<section className="py-24 relative z-10 border-t border-subtle bg-[#FAF7F2]" id="contact">
<div className="container mx-auto px-4 max-w-6xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16">
<div className="">
<h3 className="text-3xl uppercase text-[#141414] mb-6 tracking-tighter font-space-grotesk font-light">
              Create Your Ledger
            </h3>
<p className="text-sm text-[#6B6B6B] mb-8 leading-relaxed font-geist">
              Start step 1 of your account creation. Tell us who you are and
              what you want to achieve—then we’ll set up your personal ledger.
            </p>
<div className="space-y-4 font-geist-mono text-sm">
<div className="flex items-center gap-4 text-[#141414]">
<iconify-icon className="text-lg text-[#0F766E]" icon="lucide:mail" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-geist">hello@roar.growth</span>
</div>
<div className="flex items-center gap-4 text-[#141414]">
<iconify-icon className="text-lg text-[#0F766E]" icon="lucide:map-pin" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-geist">San Francisco, CA // Node 04</span>
</div>
</div>
</div>
<div className="">
<form className="space-y-8">
<div className="group relative">
<input className="outline-none focus:border-[#0F766E] transition-colors peer placeholder-transparent text-[#141414] font-geist-mono bg-transparent w-full border-[#E6DED3] border-b pt-3 pb-3" id="name" required="" type="text"/>
<label className="absolute left-0 -top-3 text-[10px] text-[#6B6B6B] uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#6B6B6B] peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#0F766E] font-geist" htmlFor="name">
                  Name
                </label>
</div>
<div className="group relative">
<input className="w-full bg-transparent border-b border-[#E6DED3] py-3 text-[#141414] outline-none focus:border-[#0F766E] transition-colors font-geist-mono peer placeholder-transparent" id="email" required="" type="email"/>
<label className="absolute left-0 -top-3 text-[10px] text-[#6B6B6B] uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#6B6B6B] peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#0F766E] font-geist" htmlFor="email">
                  Email Address
                </label>
</div>
<div className="group relative">
<input className="w-full bg-transparent border-b border-[#E6DED3] py-3 text-[#141414] outline-none focus:border-[#0F766E] transition-colors font-geist-mono peer placeholder-transparent" id="goal" type="text"/>
<label className="absolute left-0 -top-3 text-[10px] text-[#6B6B6B] uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#6B6B6B] peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-[#0F766E] font-geist" htmlFor="goal">
                  Financial goal
                  <span className="normal-case tracking-normal">(optional)</span>
</label>
</div>
<button className="group flex items-center gap-4 text-[#141414] uppercase tracking-widest text-xs font-semibold hover:text-[#0F766E] transition-colors pt-4" type="submit">
<span className="font-geist">Continue</span>
<iconify-icon className="transform group-hover:translate-x-1 transition-transform text-[#0F766E]" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-subtle bg-[#FAF7F2] pt-12 pb-8 relative z-10">
<div className="container mx-auto px-4 max-w-7xl">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div className="text-2xl text-[#141414] uppercase flex items-center gap-2 tracking-tighter font-space-grotesk font-light">
<div className="w-1.5 h-1.5 bg-[#0F766E]"></div>
            LEDGERLY
          </div>
<div className="flex gap-8 text-xs font-geist-mono text-[#6B6B6B] uppercase tracking-widest">
<a className="hover:text-[#141414] transition-colors font-geist" href="#">
              Security
            </a>
<a className="hover:text-[#141414] transition-colors font-geist" href="#">
              Data Privacy
            </a>
<a className="hover:text-[#141414] transition-colors font-geist" href="#">
              Bank-Level Encryption
            </a>
<a className="hover:text-[#141414] transition-colors font-geist" href="#">
              Privacy Protocol
            </a>
<a className="hover:text-[#141414] transition-colors font-geist" href="#">
              Terms of Service
            </a>
<a className="hover:text-[#141414] transition-colors font-geist" href="#">
              Service Status
            </a>
</div>
</div>
<div className="border-t border-subtle pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono uppercase tracking-widest text-[#6B6B6B]">
<p className="font-geist">© 2025 Ledgerly. // All Rights Reserved</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#141414] transition-colors flex items-center gap-2 font-geist" href="#">
<iconify-icon className="text-sm text-[#0F766E]" icon="lucide:twitter" style={{strokeWidth: '1.5'}}></iconify-icon>
              Twitter
            </a>
<a className="hover:text-[#141414] transition-colors flex items-center gap-2 font-geist" href="#">
<iconify-icon className="text-sm text-[#0F766E]" icon="lucide:linkedin" style={{strokeWidth: '1.5'}}></iconify-icon>
              LinkedIn
            </a>
<a className="hover:text-[#141414] transition-colors flex items-center gap-2 font-geist" href="#">
<iconify-icon className="text-sm text-[#0F766E]" icon="lucide:instagram" style={{strokeWidth: '1.5'}}></iconify-icon>
              Instagram
            </a>
</div>
</div>
</div>
</footer>

    </>
  );
}
