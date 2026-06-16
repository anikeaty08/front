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
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();
// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
const menuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
if (menuBtn && mobileMenu) {
menuBtn.addEventListener("click", () => {
const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
menuBtn.setAttribute("aria-expanded", String(!isOpen));
mobileMenu.classList.toggle("hidden", isOpen);
});
}
});
// ROI Calculator Logic
function updateROI() {
const hours = document.getElementById('hours-input').value;
const rate = document.getElementById('rate-input').value;
document.getElementById('hours-display').innerText = hours;
document.getElementById('rate-display').innerText = '$' + rate;
const weeklySavings = hours * rate;
const yearlySavings = weeklySavings * 52;
// Animate numbers (simple visual update)
document.getElementById('yearly-savings').innerText = '$' + yearlySavings.toLocaleString();
}



// Voice AI Logic
let synth = window.speechSynthesis;
let voices = [];
function populateVoices() {
voices = synth.getVoices();
}
populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
speechSynthesis.onvoiceschanged = populateVoices;
}
function speakDemo(button) {
if (synth.speaking) {
console.error('speechSynthesis.speaking');
return;
}
// Visual playing state
const visualContainer = document.getElementById('audio-visual');
if(visualContainer) visualContainer.classList.add('playing');
button.innerText = "Playing...";
const text = "Hi there! I see you're interested in booking a consultation. Does Tuesday at 2 PM work for you?";
const utterThis = new SpeechSynthesisUtterance(text);
utterThis.onend = function (event) {
if(visualContainer) visualContainer.classList.remove('playing');
button.innerText = "Hear a Demo";
}
utterThis.onerror = function (event) {
console.error('SpeechSynthesisUtterance.onerror');
if(visualContainer) visualContainer.classList.remove('playing');
button.innerText = "Hear a Demo";
}
let selectedVoice = voices.find(voice => voice.name === 'Samantha') ||
voices.find(voice => voice.lang === 'en-AU') ||
voices.find(voice => voice.lang === 'en-GB') ||
voices[0];
utterThis.voice = selectedVoice;
utterThis.pitch = 1.1;
utterThis.rate = 1.05;
synth.speak(utterThis);
}



      function openPricingModal(html){const modal=document.getElementById('pricing-modal');const container=document.getElementById('pricing-modal-content');modal.classList.remove('hidden');modal.classList.add('flex');container.innerHTML=html;container.querySelectorAll('script').forEach(oldScript=>{const newScript=document.createElement('script');Array.from(oldScript.attributes).forEach(attr=>newScript.setAttribute(attr.name,attr.value));if(oldScript.src){newScript.src=oldScript.src}else{newScript.textContent=oldScript.textContent}oldScript.parentNode.replaceChild(newScript,oldScript)})}function closePricingModal(){const modal=document.getElementById('pricing-modal');const container=document.getElementById('pricing-modal-content');modal.classList.add('hidden');modal.classList.remove('flex');container.innerHTML=''}function openBasicPlan(){openPricingModal(`<iframe src="https://link.vel-ai.com.au/widget/form/c99rYtNAIYQU9UwlKwMN" style="width:100%;height:100%;border:none;border-radius:3px" id="inline-c99rYtNAIYQU9UwlKwMN" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Basic Plan Purchase Form" data-height="1236" data-layout-iframe-id="inline-c99rYtNAIYQU9UwlKwMN" data-form-id="c99rYtNAIYQU9UwlKwMN" title="Basic Plan Purchase Form" > </iframe> <script src="https://link.vel-ai.com.au/js/form_embed.js"><\/script>`)}function openProPlan(){openPricingModal(`<iframe src="https://link.vel-ai.com.au/widget/form/k5TWhYJxt380Rznfy3fS" style="width:100%;height:100%;border:none;border-radius:3px" id="inline-k5TWhYJxt380Rznfy3fS" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Professional Plan Purchase Form" data-height="1212" data-layout-iframe-id="inline-k5TWhYJxt380Rznfy3fS" data-form-id="k5TWhYJxt380Rznfy3fS" title="Professional Plan Purchase Form" > </iframe> <script src="https://link.vel-ai.com.au/js/form_embed.js"><\/script>`)}function openCustomPlan(){openPricingModal(`<iframe src="https://link.vel-ai.com.au/widget/form/pVVaj5kYdO3SPtePtam3" style="width:100%;height:100%;border:none;border-radius:3px" id="inline-pVVaj5kYdO3SPtePtam3" data-layout="{'id':'INLINE'}" data-trigger-type="alwaysShow" data-trigger-value="" data-activation-type="alwaysActivated" data-activation-value="" data-deactivation-type="neverDeactivate" data-deactivation-value="" data-form-name="Custom Plan Purchase Form" data-height="1212" data-layout-iframe-id="inline-pVVaj5kYdO3SPtePtam3" data-form-id="pVVaj5kYdO3SPtePtam3" title="Custom Plan Purchase Form" > </iframe> <script src="https://link.vel-ai.com.au/js/form_embed.js"><\/script>`)}
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<a className="skip-link" href="#main">Skip to content</a>

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-50">
<video autoplay="" className="absolute top-0 left-0 w-full h-full object-cover opacity-50" loop="" muted="" playsinline="">
<source src="https://storage.googleapis.com/msgsndr/L7Y66s0EQG26wkLzsRui/media/696016336eabe6b7ad36e0d1.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-black/60"></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]"></div>
</div>

<nav className="sticky flex bg-black/80 max-w-6xl z-50 border-white/10 border rounded-2xl mr-auto ml-auto pt-2 pr-2 pb-2 pl-2 top-4 shadow-2xl backdrop-blur-xl items-center justify-between">
<a className="flex items-center gap-2 hover:opacity-80 transition-opacity pr-4 pl-4" href="/">
<div className="flex bg-center w-20 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/456543f5-8622-4d7b-843f-21c7d5300517_320w.png)] bg-cover rounded-lg items-center justify-center"></div>
<span className="text-xl font-semibold text-white tracking-tight font-oswald">
          Vel AI Consulting
        </span>
</a>
<button aria-controls="mobile-menu" aria-expanded="false" className="md:hidden px-3 py-2 rounded-xl border border-white/10 bg-white/5 text-sm focus-ring" id="mobile-menu-btn" type="button">
        Menu
      </button>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium text-white hover:bg-white/10 rounded-xl transition-all font-sans focus-ring" href="https://vel-ai.com.au/">
          Home
        </a>
<a className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-all focus-ring" href="https://vel-ai.com.au/about-us">
          About Us
        </a>
<a className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-all focus-ring" href="https://vel-ai.com.au/services">
          Services
        </a>
<a className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 rounded-xl transition-all focus-ring" href="https://vel-ai.com.au/contact">
          Contact
        </a>
</div>
<div className="flex items-center gap-4"></div>
</nav>

<div className="md:hidden hidden mx-auto max-w-6xl px-3" id="mobile-menu">
<div className="mt-2 rounded-2xl border border-white/10 bg-black/80 backdrop-blur-xl p-2">
<a className="block px-4 py-3 rounded-xl hover:bg-white/10 focus-ring" href="https://vel-ai.com.au/">
          Home
        </a>
<a className="block px-4 py-3 rounded-xl hover:bg-white/10 focus-ring" href="https://vel-ai.com.au/about-us">
          About Us
        </a>
<a className="block px-4 py-3 rounded-xl hover:bg-white/10 focus-ring" href="https://vel-ai.com.au/services">
          Services
        </a>
<a className="block px-4 py-3 rounded-xl hover:bg-white/10 focus-ring" href="https://vel-ai.com.au/contact">
          Contact
        </a>
</div>
</div>


<div className="page-section animate-entry" id="home-section">

<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pt-24 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-20 pl-6 relative items-center" id="main">

<div className="lg:col-span-7 flex flex-col z-10 relative items-start">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-neutral-300 animate-entry delay-100">
<svg className="w-3 h-3 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
<path d="M6 6h.01"></path>
<path d="M6 18h.01"></path>
<path d="M18 18h.01"></path>
<path d="M18 6h.01"></path>
</svg>
<span className="font-sans">Built for Businesses, Not Sales Tools</span>
</div>

<h1 className="lg:text-[76px] leading-[1.05] animate-entry delay-150 text-5xl text-white max-w-2xl mb-6 font-oswald font-light">
            Stop Juggling.
            <br/>
<span className="bg-clip-text font-normal text-transparent font-oswald bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Start Growing.
            </span>
</h1>

<p className="leading-relaxed animate-entry delay-200 text-lg text-neutral-300 max-w-xl mb-10">
            The All-In-One Platform Built for Solo Entrepreneurs and Small
            Business Owners. Replace 8+ tools with one powerful system.
          </p>

<div className="flex flex-wrap gap-6 items-center animate-entry delay-300"></div>
</div>

<div className="lg:col-span-5 flex lg:justify-end lg:mt-0 animate-entry delay-500 z-10 mt-12 relative justify-center">

<div className="electric-card overflow-hidden bg-neutral-900 w-[360px] rounded-[32px] pt-[2px] pr-[2px] pb-[2px] pl-[2px] relative">

<div className="absolute inset-0 bg-gradient-to-b to-transparent opacity-80 z-0 from-purple-500 via-blue-600 from-blue-600/10"></div>

<div className="z-10 flex flex-col overflow-hidden bg-[#0A0A0A] h-full rounded-[30px] pt-8 pr-8 pb-8 pl-8 relative items-start">

<div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b from-purple-500/10 to-transparent"></div>

<div className="flex justify-between w-full items-center mb-6 relative">
<span className="text-[10px] uppercase text-neutral-400 border border-white/10 px-2 py-1 rounded bg-white/5 flex items-center gap-1.5 font-sans">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                  System Active
                </span>
<span className="text-[10px] font-mono text-purple-400 tracking-wider font-sans bg-purple-500/10 px-2 py-1 rounded">
                  LIVE
                </span>
</div>
<h3 className="text-xl text-white mb-1 tracking-tight font-sans">
                Business Pulse
              </h3>
<p className="text-xs text-neutral-400 mb-6 leading-relaxed font-sans">
                Your automated systems are running 24/7.
              </p>

<div className="grid grid-cols-2 gap-3 w-full mb-6">
<div className="bg-white/5 p-3 rounded-xl border border-white/5">
<div className="text-[10px] text-neutral-500 uppercase font-sans">
                    New Leads
                  </div>
<div className="text-xl font-semibold text-white mt-1 font-sans">
                    24
                  </div>
<div className="text-[10px] text-green-400 mt-1 font-sans flex items-center gap-1">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10">
<path d="M12 19V5"></path>
<path d="m5 12 7-7 7 7"></path>
</svg>
                    +12%
                  </div>
</div>
<div className="bg-white/5 p-3 rounded-xl border border-white/5">
<div className="text-[10px] text-neutral-500 uppercase font-sans">
                    Revenue
                  </div>
<div className="text-xl font-semibold text-white mt-1 font-sans">
                    $8.2k
                  </div>
<div className="text-[10px] text-green-400 mt-1 font-sans flex items-center gap-1">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10">
<path d="M12 19V5"></path>
<path d="m5 12 7-7 7 7"></path>
</svg>
                    +8%
                  </div>
</div>
</div>

<div className="w-full mb-8 space-y-3">
<div className="text-[10px] text-neutral-500 uppercase tracking-widest font-sans mb-2">
                  Recent Automations
                </div>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>
<div className="relative flex items-center gap-3 p-3 rounded-xl bg-[#121212] border border-white/10 shadow-lg">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.4)] text-white">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm text-white font-medium font-sans">
                        AI Booking Assistant
                      </span>
<span className="text-[10px] text-neutral-500 font-sans">
                        Booked call with Lead #4092
                      </span>
</div>
<span className="ml-auto text-[10px] text-purple-400 font-mono font-sans">
                      Now
                    </span>
</div>
</div>

<div className="flex items-center gap-3 group px-2">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm text-neutral-300 font-sans">
                      Drip Campaign
                    </span>
<span className="text-[10px] text-neutral-600 font-sans">
                      Sent to 142 prospects
                    </span>
</div>
<span className="ml-auto text-[10px] text-neutral-600 font-mono font-sans">
                    5m ago
                  </span>
</div>
</div>

<a className="flex items-center justify-center hover:brightness-110 transition-all text-sm text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 w-full border-white/20 rounded-full border-t pt-3 pb-3 shadow-[0_4px_15px_rgba(168,85,247,0.4)]" href="/contact">
                Open Dashboard
              </a>
</div>
</div>
</div>
</main>

<div className="w-full bg-black/80 border-y border-white/5 py-10 overflow-hidden relative backdrop-blur-md">
<div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050505] via-transparent to-[#050505] pointer-events-none"></div>
<div className="flex whitespace-nowrap animate-scroll hover:pause">

<div className="flex items-center gap-16 mx-8">
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-slack w-6 h-6" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
              Slack
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
              Gmail
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-calendar w-6 h-6" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
              GCal
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
              Instagram
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
              Meta
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-message-square w-6 h-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
              WhatsApp
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-credit-card w-6 h-6" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
              Stripe
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-video w-6 h-6" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
<rect height="12" rx="2" width="14" x="2" y="6"></rect>
</svg>
              Zoom
            </div>
</div>

<div className="flex items-center gap-16 mx-8">
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-slack w-6 h-6" data-lucide="slack" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
              Slack
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-mail w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
              Gmail
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-calendar w-6 h-6" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</svg>
              GCal
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
              Instagram
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
              Meta
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-message-square w-6 h-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
</svg>
              WhatsApp
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-credit-card w-6 h-6" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
              Stripe
            </div>
<div className="flex items-center gap-2 text-neutral-400 font-bold text-xl">
<svg className="lucide lucide-video w-6 h-6" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
<rect height="12" rx="2" width="14" x="2" y="6"></rect>
</svg>
              Zoom
            </div>
</div>
</div>
</div>

<section className="max-w-6xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative">
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] text-center mb-16 animate">
<h2 className="md:text-5xl text-3xl font-light text-white font-oswald mb-6">
            You're Doing
            <span className="bg-clip-text font-normal text-transparent bg-gradient-to-r from-red-500 to-orange-500 -multi">
              Too Much.
            </span>
</h2>
<p className="text-lg text-neutral-400 max-w-2xl mr-auto ml-auto">
            It's 11 PM and you're still responding to emails. That lead from
            yesterday? Still sitting in your inbox. Your seven different apps
            aren't talking to each other.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] animate">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<h3 className="text-white text-lg font-medium mb-2 font-sans">
              Juggling 8+ Tools
            </h3>
<p className="text-sm text-neutral-400 font-sans">
              Paying subscription fees for tools that create more work, not
              less.
            </p>
</div>

<div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] animate">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<h3 className="text-white text-lg font-medium mb-2 font-sans">
              Manual Follow-ups
            </h3>
<p className="text-sm text-neutral-400 font-sans">
              Wasting hours typing emails while leads slip through the cracks.
            </p>
</div>

<div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] animate">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<h3 className="text-white text-lg font-medium mb-2 font-sans">
              Amateur Systems
            </h3>
<p className="text-sm text-neutral-400 font-sans">
              Losing high-ticket clients because your onboarding feels
              disjointed.
            </p>
</div>

<div className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] animate">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mb-4">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</div>
<h3 className="text-white text-lg font-medium mb-2 font-sans">
              Admin Overload
            </h3>
<p className="text-sm text-neutral-400 font-sans">
              Spending more time on data entry than actually growing your
              business.
            </p>
</div>
</div>
</section>
<section className="max-w-4xl mr-auto ml-auto pr-6 pb-24 pl-6 pt-24">
<div className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
<div className="relative z-10">
<h2 className="text-3xl font-light text-white font-oswald text-center mb-8">
              Automation that cuts busywork, saves money, and tracks your ROI.
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-8">
<div className="">
<div className="flex justify-between mb-4">
<label className="text-sm text-neutral-400 font-sans">
                      Hours spent on admin/week
                    </label>
<span className="text-white font-mono" id="hours-display">
                      10
                    </span>
</div>
<input className="" id="hours-input" max="40" min="1" oninput="updateROI()" type="range" value="10"/>
</div>
<div className="">
<div className="flex justify-between mb-4">
<label className="text-sm text-neutral-400 font-sans">
                      Your Hourly Value
                    </label>
<span className="text-white font-mono" id="rate-display">
                      $100
                    </span>
</div>
<input className="" id="rate-input" max="500" min="20" oninput="updateROI()" step="10" type="range" value="100"/>
</div>
</div>
<div className="flex flex-col items-center justify-center bg-black/40 rounded-2xl border border-white/5 p-6">
<div className="text-sm text-neutral-400 mb-2 font-sans uppercase tracking-widest">
                  Yearly Value Saved
                </div>
<div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 font-oswald" id="yearly-savings">
                  $52,000
                </div>
<p className="text-xs text-neutral-500 mt-4 text-center font-sans">
                  That's profit you're leaving on the table.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="-mt-4 animate-entry delay-700 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate max-w-7xl mr-auto ml-auto pt-0 pr-2.5 pb-24 pl-2.5 relative lg:-mt-8 lg:px-0 lg:pb-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] blur-[100px] rounded-full z-0 bg-blue-900/20"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<div className="overflow-hidden md:col-span-2 lg:col-span-3 lg:bg-black/80 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] bg-neutral-900/80 rounded-2xl ring-white/10 ring-1 relative backdrop-blur-sm animate">

<div className="-top-10 -right-10 w-56 h-56 rounded-full absolute blur-3xl bg-purple-500/20"></div>

<div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-90 z-30"></div>
<div className="absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-purple-500/20 via-blue-600/10 to-transparent opacity-90 pointer-events-none z-20"></div>


</div>
</div>
</section>


<section className="max-w-7xl mx-auto px-6 py-24 relative z-10">

<div className="text-center mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<h2 className="text-4xl lg:text-5xl font-oswald font-light text-white mb-6">
            Everything Your Business Needs.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-normal">
              One Platform. Zero Excuses.
            </span>
</h2>
<p className="text-lg text-neutral-400 max-w-2xl mx-auto font-sans">
            Stop duct-taping software together. Get the complete business
            toolkit that actually works together.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both]">

<div className="col-span-1 md:col-span-2 bg-neutral-900/50 border border-white/10 rounded-[32px] p-8 relative overflow-hidden bento-card group h-[400px]">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
<svg className="lucide lucide-users" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3 className="text-xl text-white font-medium font-oswald">
                  Smart CRM That Actually Gets Used
                </h3>
</div>
<p className="text-neutral-400 text-sm mb-6 max-w-sm font-sans">
                Simple pipeline your team updates. Full contact history, every
                interaction logged. No more lost leads in spreadsheets.
              </p>

<div className="mt-auto flex gap-4 overflow-hidden mask-image-b-0">

<div className="w-48 bg-[#151515] rounded-t-xl border border-white/5 p-3 flex flex-col gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
<div className="h-2 w-20 bg-white/10 rounded mb-2"></div>
<div className="bg-white/5 p-2 rounded border border-white/5">
<div className="h-1.5 w-12 bg-white/20 rounded mb-1"></div>
<div className="h-1.5 w-8 bg-purple-500/40 rounded"></div>
</div>
<div className="bg-white/5 p-2 rounded border border-white/5">
<div className="h-1.5 w-10 bg-white/20 rounded mb-1"></div>
</div>
</div>

<div className="w-48 bg-[#151515] rounded-t-xl border border-white/5 p-3 flex flex-col gap-2 transform translate-y-6 group-hover:translate-y-2 transition-transform delay-75">
<div className="h-2 w-20 bg-white/10 rounded mb-2"></div>
<div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-2 rounded border border-purple-500/20">
<div className="h-1.5 w-16 bg-white/20 rounded mb-1"></div>
<div className="flex gap-1">
<div className="h-1.5 w-4 bg-green-400 rounded"></div>
</div>
</div>
</div>

<div className="w-48 bg-[#151515] rounded-t-xl border border-white/5 p-3 flex flex-col gap-2 transform translate-y-10 group-hover:translate-y-4 transition-transform delay-100">
<div className="h-2 w-20 bg-white/10 rounded mb-2"></div>
<div className="bg-white/5 p-2 rounded border border-white/5"></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 bg-neutral-900/50 border border-white/10 rounded-[32px] p-8 relative overflow-hidden bento-card group h-[400px]">
<div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<svg className="lucide lucide-zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<h3 className="text-xl text-white font-medium font-oswald leading-tight">
                  Automation That Runs While You Sleep
                </h3>
</div>
<p className="text-neutral-400 text-sm mb-6 font-sans">
                Automated follow-ups, instant triggers, and task management.
              </p>
<div className="mt-auto relative w-full h-32 flex items-center justify-center">
<div className="absolute w-24 h-24 border border-white/10 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute w-16 h-16 border border-blue-500/30 rounded-full animate-[spin_5s_linear_infinite_reverse]"></div>
<div className="w-8 h-8 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)] animate-pulse"></div>

<div className="absolute top-0 right-0 bg-white/10 backdrop-blur text-[10px] px-2 py-1 rounded text-white border border-white/5 animate-bounce delay-100 font-sans">
                  Email Sent
                </div>
<div className="absolute bottom-0 left-0 bg-white/10 backdrop-blur text-[10px] px-2 py-1 rounded text-white border border-white/5 animate-bounce delay-300 font-sans">
                  Task Added
                </div>
</div>
</div>
</div>

<div className="col-span-1 bg-neutral-900/50 border border-white/10 rounded-[32px] p-8 relative overflow-hidden bento-card group h-[340px]">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400">
<svg className="lucide lucide-layout-template" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
</div>
<h3 className="text-lg text-white font-medium font-oswald">
                Unlimited Funnels
              </h3>
</div>
<p className="text-neutral-400 text-xs mb-4 font-sans">
              Build high-converting pages. A/B test everything. Mobile-ready
              designs.
            </p>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-[#1a1a1a] rounded-t-xl border border-white/10 shadow-2xl group-hover:scale-105 transition-transform">
<div className="w-full h-4 bg-white/5 border-b border-white/5 flex gap-1 items-center px-2">
<div className="w-1.5 h-1.5 rounded-full bg-red-500/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50"></div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500/50"></div>
</div>
<div className="p-3 flex flex-col items-center gap-2">
<div className="w-16 h-2 bg-white/20 rounded"></div>
<div className="w-24 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded border border-white/5"></div>
<div className="w-20 h-2 bg-white/10 rounded"></div>
</div>
</div>
</div>

<div className="col-span-1 bg-neutral-900/50 border border-white/10 rounded-[32px] p-8 relative overflow-hidden bento-card group h-[340px]">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<svg className="lucide lucide-shield-check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-lg text-white font-medium font-oswald">
                Client Portal
              </h3>
</div>
<p className="text-neutral-400 text-xs mb-4 font-sans">
              Give clients their own branded login. They see results, you keep
              control.
            </p>
<div className="mt-6 flex justify-center">
<div className="relative w-32 h-24 bg-white/5 rounded-lg border border-white/10 flex flex-col items-center justify-center gap-2 group-hover:border-green-500/30 transition-colors">
<div className="w-8 h-8 rounded-full bg-white/10"></div>
<div className="w-16 h-1.5 bg-white/20 rounded-full"></div>
<div className="absolute -right-2 -top-2 bg-green-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                  VIP
                </div>
</div>
</div>
</div>

<div className="col-span-1 bg-neutral-900/50 border border-white/10 rounded-[32px] p-8 relative overflow-hidden bento-card group h-[340px]">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
<svg className="lucide lucide-message-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
</svg>
</div>
<h3 className="text-lg text-white font-medium font-oswald">
                Unified Inbox
              </h3>
</div>
<p className="text-neutral-400 text-xs mb-6 font-sans">
              SMS, email, voice, and chat—all in one place. Never miss a lead.
            </p>
<div className="relative h-32 w-full">
<div className="absolute top-0 left-0 bg-blue-600 p-2 rounded-xl rounded-bl-none text-[10px] w-3/4 shadow-lg group-hover:-translate-y-1 transition-transform font-sans">
                Hi, I'm interested in your services.
              </div>
<div className="absolute top-8 right-0 bg-neutral-700 p-2 rounded-xl rounded-br-none text-[10px] w-3/4 shadow-lg group-hover:-translate-y-1 transition-transform delay-75 font-sans">
                Great! Let's get you booked in.
              </div>
<div className="absolute top-16 left-0 bg-green-600 p-2 rounded-xl rounded-bl-none text-[10px] w-1/2 shadow-lg group-hover:-translate-y-1 transition-transform delay-150 flex items-center gap-1 font-sans">
<svg fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
                Call started
              </div>
</div>
</div>

<div className="col-span-1 md:col-span-3 bg-neutral-900/50 border border-white/10 rounded-[32px] p-8 relative overflow-hidden bento-card group h-[300px] flex flex-col md:flex-row items-center gap-8">
<div className="flex-1 z-10">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
<svg className="lucide lucide-bar-chart-3" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v18h18"></path>
<path d="M18 17V9"></path>
<path d="M13 17V5"></path>
<path d="M8 17v-3"></path>
</svg>
</div>
<h3 className="text-2xl text-white font-medium font-oswald">
                  Reporting That Makes Clients Say "Wow"
                </h3>
</div>
<p className="text-neutral-400 text-sm max-w-lg font-sans">
                Custom dashboards that prove your value instantly. Automated
                reports clients actually read. Track ROI down to the dollar and
                watch retention skyrocket.
              </p>
</div>
<div className="flex-1 w-full h-full relative">
<div className="absolute inset-0 bg-gradient-to-l from-cyan-900/10 to-transparent"></div>

<div className="w-full h-full flex items-end justify-around pb-4 px-4 gap-2">
<div className="w-1/6 bg-white/5 rounded-t-lg h-[40%] group-hover:h-[45%] transition-all duration-500 relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-neutral-500 font-sans opacity-0 group-hover:opacity-100 transition-opacity">
                    $2k
                  </div>
</div>
<div className="w-1/6 bg-white/5 rounded-t-lg h-[55%] group-hover:h-[60%] transition-all duration-500 delay-75 relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-neutral-500 font-sans opacity-0 group-hover:opacity-100 transition-opacity">
                    $4k
                  </div>
</div>
<div className="w-1/6 bg-white/5 rounded-t-lg h-[45%] group-hover:h-[50%] transition-all duration-500 delay-100 relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-neutral-500 font-sans opacity-0 group-hover:opacity-100 transition-opacity">
                    $3k
                  </div>
</div>
<div className="w-1/6 bg-white/5 rounded-t-lg h-[70%] group-hover:h-[75%] transition-all duration-500 delay-150 relative">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-neutral-500 font-sans opacity-0 group-hover:opacity-100 transition-opacity">
                    $8k
                  </div>
</div>
<div className="w-1/6 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t-lg h-[85%] group-hover:h-[95%] transition-all duration-700 delay-200 shadow-[0_0_20px_rgba(6,182,212,0.3)] relative">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded font-sans">
                    $12k
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center mb-16 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both]">
<h2 className="text-4xl lg:text-5xl font-oswald font-light text-white mb-4">
            Transparent Pricing
          </h2>
<p className="text-neutral-400 font-sans">
            Experience complete price transparency, so you’re always aware of
            your costs.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="hover:border-blue-500/50 transition-all duration-300 group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] animate bg-neutral-900/50 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="text-xl font-medium text-white mb-2 font-oswald">
              Basic Plan
            </div>
<div className="text-4xl font-bold text-white mb-6 font-oswald">
              $199
              <span className="text-lg text-neutral-500 font-normal">/mo</span>
</div>
<p className="text-sm text-neutral-400 mb-8 font-sans">
              Perfect for solo entrepreneurs starting out.
            </p>
<ul className="text-sm text-neutral-300 mb-8 space-y-4">
<li className="flex gap-3">
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                1 CRM Account
              </li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                1 Funnel Page
              </li>
<li className="flex gap-3">
<svg className="text-blue-500 w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                1 FAQ Chatbot
              </li>
<li className="flex gap-3">
<svg className="text-blue-500 w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                1 Form
              </li>
<li className="flex gap-3">
<svg className="text-blue-500 w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                1 Automation
              </li>
<p className="text-sm text-neutral-400 mb-8 font-sans">
                * Retainer price not included
              </p>
</ul>
<button className="flex items-center justify-center hover:brightness-110 transition-all text-sm text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 w-full border-white/20 rounded-full border-t pt-3 pb-3 shadow-[0_4px_15px_rgba(168,85,247,0.4)] cursor-pointer" onclick="openBasicPlan()">
              Get Basic Plan
            </button>
</div>

<div className="bg-neutral-900/80 border border-purple-500/50 rounded-3xl p-8 transform scale-105 shadow-[0_0_30px_rgba(168,85,247,0.15)] relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] animate">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full font-sans uppercase tracking-wider">
              Most Popular
            </div>
<div className="text-xl font-medium text-white mb-2 font-oswald">
              Pro Plan
            </div>
<div className="text-4xl font-bold text-white mb-6 font-oswald">
              $499
              <span className="text-lg text-neutral-500 font-normal">/mo</span>
</div>
<p className="text-sm text-neutral-400 mb-8 font-sans">
              For growing businesses needing automation.
            </p>
<ul className="space-y-4 mb-8 text-sm text-neutral-300 font-sans">
<li className="flex gap-3">
<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                1 CRM Account
              </li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                3 Funnel Pages
              </li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                1 FAQ Chat Bot
              </li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                1 Voice AI
              </li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                1 Sales AI
              </li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                3 Automations
              </li>
</ul>
<button className="flex items-center justify-center hover:brightness-110 transition-all text-sm text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 w-full border-white/20 rounded-full border-t pt-3 pb-3 shadow-[0_4px_15px_rgba(168,85,247,0.4)] cursor-pointer" onclick="openProPlan()">
              Get Pro Plan
            </button>
</div>

<div className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all duration-300 group animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] animate">
<div className="text-xl font-medium text-white mb-2 font-oswald">
              Premium Plan
            </div>
<div className="text-4xl font-bold text-white mb-6 font-oswald">
              Custom
            </div>
<p className="text-sm text-neutral-400 mb-8 font-sans">
              Maximum scale for agencies &amp; enterprises.
            </p>
<ul className="space-y-4 mb-8 text-sm text-neutral-300 font-sans">
<li className="flex gap-3">
<svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Pro Plan +
              </li>
<li className="flex gap-3">
<svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                Custom Requests
              </li>
</ul>
<button className="flex items-center justify-center hover:brightness-110 transition-all text-sm text-white bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 w-full border-white/20 rounded-full border-t pt-3 pb-3 shadow-[0_4px_15px_rgba(168,85,247,0.4)] cursor-pointer" onclick="openCustomPlan()">
              Get Premium Plan
            </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 relative overflow-hidden min-h-[800px] flex flex-col items-center justify-center">

<div className="z-20 text-center relative max-w-xl animate-on-scroll [animation:animationIn_0.8s_ease-out_0.1s_both] animate mb-12 lg:mb-0">
<h2 className="text-5xl md:text-6xl font-oswald font-light text-white mb-4 leading-tight">
            Loved by businesses.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-normal">
              Trusted by owners.
            </span>
</h2>
<p className="text-neutral-400 text-sm mb-8 font-sans">
            Join thousands of businesses using Vel AI to streamline their
            workflows, unify data, and focus on what matters most.
          </p>
<button className="px-6 py-2.5 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition flex items-center gap-2 mx-auto font-sans">
            See all reviews
            <svg className="" fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="relative w-full lg:h-[800px] flex flex-col gap-6 lg:block lg:absolute lg:inset-0 pointer-events-none">

<div className="w-full max-w-sm mx-auto lg:absolute lg:top-0 lg:left-0 animate-entry delay-200 pointer-events-auto">
<div className="bg-black border border-white/10 p-6 rounded-2xl relative">
<p className="text-sm text-neutral-300 font-sans leading-relaxed">
                "The automated workflow orchestration saved our team 20+ hours
                per week. It's not just a tool, it's a productivity multiplier."
              </p>
<div className="absolute -bottom-2 left-8 w-4 h-4 bg-black border-r border-b border-white/10 transform rotate-45"></div>
</div>
<div className="flex items-center gap-3 mt-4 ml-4">
<img alt="User" className="w-10 h-10 rounded-full border border-white/20 grayscale" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&amp;h=150&amp;fit=crop"/>
<div className="">
<div className="text-white text-sm font-semibold font-sans">
                  Jessica Wu
                </div>
<div className="text-neutral-500 text-xs font-sans">
                  Head of Ops at Stripe
                </div>
</div>
</div>
</div>

<div className="w-full max-w-sm mx-auto lg:absolute lg:top-20 lg:right-0 animate-entry delay-300 pointer-events-auto">
<div className="bg-black border border-white/10 p-6 rounded-2xl relative">
<p className="text-sm text-neutral-300 font-sans leading-relaxed">
                "We replaced three different tools with Vel AI. The unified data
                view has completely transformed our decision-making process."
              </p>
<div className="absolute -bottom-2 right-8 w-4 h-4 bg-black border-r border-b border-white/10 transform rotate-45"></div>
</div>
<div className="flex items-center gap-3 mt-4 justify-end mr-4">
<div className="text-right">
<div className="text-white text-sm font-semibold font-sans">
                  Alex Thompson
                </div>
<div className="text-neutral-500 text-xs font-sans">
                  CTO at Linear
                </div>
</div>
<img alt="User" className="w-10 h-10 rounded-full border border-white/20 grayscale" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&amp;h=150&amp;fit=crop"/>
</div>
</div>

<div className="w-full max-w-sm mx-auto lg:absolute lg:bottom-20 lg:left-10 animate-entry delay-500 pointer-events-auto">
<div className="flex items-center gap-3 mb-4 ml-4">
<img alt="User" className="w-10 h-10 rounded-full border border-white/20 grayscale" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&amp;h=150&amp;fit=crop"/>
<div className="">
<div className="text-white text-sm font-semibold font-sans">
                  Emily Clark
                </div>
<div className="text-neutral-500 text-xs font-sans">
                  VP Product at Vercel
                </div>
</div>
</div>
<div className="bg-black border border-white/10 p-6 rounded-2xl relative">
<div className="absolute -top-2 left-8 w-4 h-4 bg-black border-l border-t border-white/10 transform rotate-45"></div>
<p className="text-sm text-neutral-300 font-sans leading-relaxed">
                "Deployment velocity increased by 3x after adopting Vel AI. The
                insights it provides are invaluable for our growth."
              </p>
</div>
</div>

<div className="w-full max-w-sm mx-auto lg:absolute lg:bottom-0 lg:right-10 animate-entry delay-700 pointer-events-auto">
<div className="flex items-center gap-3 mb-4 justify-end mr-4">
<div className="text-right">
<div className="text-white text-sm font-semibold font-sans">
                  Ryan Park
                </div>
<div className="text-neutral-500 text-xs font-sans">
                  Design Lead at Airbnb
                </div>
</div>
<img alt="User" className="w-10 h-10 rounded-full border border-white/20 grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&amp;h=150&amp;fit=crop"/>
</div>
<div className="bg-black border border-white/10 p-6 rounded-2xl relative">
<div className="absolute -top-2 right-8 w-4 h-4 bg-black border-l border-t border-white/10 transform rotate-45"></div>
<p className="text-sm text-neutral-300 font-sans leading-relaxed">
                "The interface is beautiful and the performance is unmatched.
                Vel AI sets a new standard for enterprise software."
              </p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 pb-24">
<h2 className="text-3xl font-oswald font-light text-center mb-12">
          Frequently Asked Questions
        </h2>
<div className="space-y-4">

<div className="border-b border-white/10 pb-4">
<button className="flex w-full justify-between items-center text-left text-lg font-medium text-white hover:text-purple-400 transition font-sans" onclick="this.nextElementSibling.classList.toggle('hidden')">
              How much time will this actually save me?
              <svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<div className="hidden mt-3 text-neutral-400 text-sm leading-relaxed font-sans">
<p className="mb-2">
                Our average customer saves 15 to 20 hours per week on
                administrative tasks. Here’s the breakdown:
              </p>
<ul className="list-disc pl-5 space-y-1 mb-3 text-neutral-300">
<li>
                  Eliminates 5 to 8 hours per week of phone tag and manual
                  booking
                </li>
<li>Saves 4 to 6 hours per week of email writing</li>
</ul>
<p className="mb-2">
                At a $100 per hour value, that’s $52,000 per year back in your
                pocket, either as pure profit or time reinvested in high value
                activities like sales, strategy, and scaling.
              </p>
<p>
                The system runs 24/7, so you’re also capturing leads while you
                sleep that would otherwise go to competitors.
              </p>
</div>
</div>

<div className="border-b border-white/10 pb-4">
<button className="flex w-full justify-between items-center text-left text-lg font-medium text-white hover:text-purple-400 transition font-sans" onclick="this.nextElementSibling.classList.toggle('hidden')">
              What if I’m not technical, can I actually set this up myself?
              <svg className="" fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<div className="hidden mt-3 text-neutral-400 text-sm leading-relaxed font-sans">
<p className="mb-3">
                Absolutely. Vel AI is built for business owners, not engineers.
                Our onboarding wizard walks you through setup in under 20
                minutes, no coding required. You’ll connect your calendar,
                customize your AI receptionist’s script, and set up your first
                automation using simple point and click builders.
              </p>
<p className="mb-2">
                For Pro and Premium users, we do the heavy lifting:
              </p>
<ul className="list-disc pl-5 space-y-1 mb-3 text-neutral-300">
<li>
                  Free migration assistance to move your existing contacts and
                  data
                </li>
<li>
                  Pre-built automation templates for common workflows (lead
                  follow-up, appointment reminders, client onboarding)
                </li>
</ul>
<p>
                Most customers are fully operational within 24 hours. And if you
                ever get stuck, our support team responds in under 2 hours, not
                2 days.
              </p>
</div>
</div>

<div className="border-b border-white/10 pb-4">
<button className="flex w-full justify-between items-center text-left text-lg font-medium text-white hover:text-purple-400 transition font-sans" onclick="this.nextElementSibling.classList.toggle('hidden')">
              Will the AI receptionist sound robotic or confuse my customers?
              <svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<div className="hidden mt-3 text-neutral-400 text-sm leading-relaxed font-sans">
<p className="mb-3">
                Not at all. Our Voice AI is trained specifically for your
                business and sounds completely natural, most callers don’t
                realize they’re talking to AI. It understands context, handles
                interruptions, and can answer specific questions about your
                services.
              </p>
<p className="mb-2">Here’s what makes it different:</p>
<ul className="list-disc pl-5 space-y-1 mb-3 text-neutral-300">
<li>
                  Handles multiple calls simultaneously (no more missed
                  opportunities)
                </li>
<li>Instantly qualifies leads using your criteria</li>
</ul>
<p>
                Plus, you can review every call transcript and customize
                responses to match your brand voice perfectly. If a call needs
                human intervention, it seamlessly transfers to you.
              </p>
</div>
</div>

<div className="border-b border-white/10 pb-4">
<button className="flex w-full justify-between items-center text-left text-lg font-medium text-white hover:text-purple-400 transition font-sans" onclick="this.nextElementSibling.classList.toggle('hidden')">
              How is Vel AI different from piecing together separate tools?
              <svg fill="none" height="20" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="20">
<polyline points="6 9 12 15 18 9"></polyline>
</svg>
</button>
<div className="hidden mt-3 text-neutral-400 text-sm leading-relaxed font-sans">
<p className="mb-3">
                Most businesses use 8 or more disconnected tools (CRM, email,
                calendar, chat, etc.) that don’t talk to each other. You’re
                paying multiple subscriptions, manually copying data between
                platforms, and losing leads in the chaos.
              </p>
<p className="mb-3">
                Vel AI is a single platform where everything connects
                automatically. When your AI receptionist books a call, it
                instantly updates your CRM, sends confirmation emails, triggers
                follow-up sequences, and logs everything in your unified inbox,
                without you lifting a finger. One login. One subscription. Zero
                data entry.
              </p>
<p>
                Think of it this way: Instead of juggling Calendly + HubSpot +
                Zapier + Twilio + your email tool (and paying $400+ per month
                combined), you get all of it working together seamlessly for a
                fraction of the cost.
              </p>
</div>
</div>
</div>
</section>
</div>
<div className="fixed inset-0 z-[9999] hidden items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-entry" id="pricing-modal">
<div className="relative w-full max-w-4xl h-[85vh] bg-[#050505] rounded-2xl border border-white/10 overflow-hidden flex flex-col shadow-2xl">
<div className="flex justify-end p-2 border-b border-white/10 bg-black/50">
<button className="p-2 text-neutral-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors" onclick="closePricingModal()">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<div className="flex-1 w-full h-full bg-white overflow-auto" id="pricing-modal-content">

</div>
</div>
</div>


    </>
  );
}
