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



            document.write(new Date().getFullYear())
          


      // Initialize Lucide Icons
      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', function() {
          const forms = document.querySelectorAll('.signup-form');
          const webhookUrl = 'https://hooks.zapier.com/hooks/catch/27612702/4yjqtir/';
          const params = new URLSearchParams(window.location.search);

          forms.forEach(form => {
              const utmSource = form.querySelector('.utm_source');
              if(utmSource) utmSource.value = params.get('utm_source') || '';

              const utmMedium = form.querySelector('.utm_medium');
              if(utmMedium) utmMedium.value = params.get('utm_medium') || '';

              const utmCampaign = form.querySelector('.utm_campaign');
              if(utmCampaign) utmCampaign.value = params.get('utm_campaign') || '';

              const utmContent = form.querySelector('.utm_content');
              if(utmContent) utmContent.value = params.get('utm_content') || '';

              const utmTerm = form.querySelector('.utm_term');
              if(utmTerm) utmTerm.value = params.get('utm_term') || '';

              const landingPageUrl = form.querySelector('.landing_page_url');
              if(landingPageUrl) landingPageUrl.value = window.location.href;

              const referrerUrl = form.querySelector('.referrer');
              if(referrerUrl) referrerUrl.value = document.referrer || '';

              form.addEventListener('submit', async function(event) {
                  event.preventDefault();

                  const errorMessage = form.querySelector('.form-error-message');
                  if(errorMessage) {
                      errorMessage.classList.add('hidden');
                      errorMessage.style.display = 'none';
                  }

                  const formData = new FormData(form);

                  try {
                      await fetch(webhookUrl, {
                          method: 'POST',
                          mode: 'no-cors',
                          body: formData
                      });

                      form.style.display = 'none';
                      const successMessage = form.nextElementSibling;
                      if(successMessage && (successMessage.id === 'success-msg-hero' || successMessage.id === 'success-msg-bottom')) {
                          successMessage.classList.remove('hidden');
                          successMessage.style.display = 'block';
                      }
                  } catch (error) {
                      if(errorMessage) {
                          errorMessage.classList.remove('hidden');
                          errorMessage.style.display = 'block';
                      }
                  }
              });
          });
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
      

<nav className="absolute top-0 w-full z-50 py-6 px-6 lg:px-12 flex justify-between items-center">
<a className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity" href="#">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="text-xl tracking-tight font-medium">ForestFoods</span>
</a>
<a className="hidden md:flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors" href="https://www.forestfoods.co.ke/" rel="noopener noreferrer" target="_blank">
        Main Website
        <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</nav>

<header className="relative bg-[#0A120E] min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Aerial view of dense forest" className="w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A120E] via-[#0A120E]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A120E] via-transparent to-transparent opacity-80"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
<div className="max-w-2xl animate-fade-in text-white">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-8 backdrop-blur-md">
<span className="w-2 h-2 rounded-full bg-[#E5E7EB] animate-pulse"></span>
            Indiegogo Campaign Coming Soon
          </div>
<h1 className="text-5xl lg:text-7xl tracking-tight font-medium text-balance leading-[1.1] mb-8">
            Help Grow a Living Food Forest in
            <span className="text-[#D4BFA4]">Shimba Hills</span>
            .
          </h1>
<p className="text-lg lg:text-xl text-white/70 leading-relaxed mb-10 text-pretty">
            Forest Foods is preparing to launch its Indiegogo campaign to
            support the next stage of its regenerative agroforestry expansion. A
            campaign to restore land, grow food, train farmers, and build a
            system that creates impact for generations.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-white text-[#0A120E] px-6 py-4 rounded-xl text-base font-medium hover:bg-gray-100 transition-colors shadow-lg shadow-white/5" href="#join-list">
              Join the Early Supporter List
              <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="lg:justify-self-end w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-2xl animate-fade-in" style={{animationDelay: '0.2s'}}>
<h3 className="text-2xl tracking-tight font-medium text-white mb-2">
            Be Notified at Launch
          </h3>
<p className="text-base text-white/60 mb-8">
            Early supporters receive the launch link first.
          </p>
<form className="space-y-4 signup-form" id="forest-foods-signup-form-hero">
<div>
<label className="sr-only" htmlFor="first_name_hero">First Name</label>
<input className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#D4BFA4]/50 focus:border-transparent transition-all text-base" id="first_name_hero" name="first_name" placeholder="First Name" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="email_hero">Email address</label>
<input className="w-full bg-white/5 border border-white/20 text-white placeholder:text-white/40 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#D4BFA4]/50 focus:border-transparent transition-all text-base" id="email_hero" name="email" placeholder="Email Address" required="" type="email"/>
</div>
<div className="relative">
<select className="w-full bg-white/5 border border-white/20 text-white/80 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#D4BFA4]/50 focus:border-transparent transition-all text-base appearance-none cursor-pointer" id="supporter_type_hero" name="supporter_type" required="">
<option className="text-gray-500" disabled="" selected="" value="">
                  I'm interested as...
                </option>
<option className="text-black" value="Supporter">Supporter</option>
<option className="text-black" value="Partner">Partner</option>
<option className="text-black" value="Investor">Investor</option>
<option className="text-black" value="Media">Media</option>
<option className="text-black" value="Other">Other</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
<i className="w-5 h-5 text-white/40" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#D4BFA4] focus:ring-[#D4BFA4]/50 focus:ring-offset-0 cursor-pointer" id="marketing_consent_hero" name="marketing_consent" required="" type="checkbox" value="TRUE"/>
<label className="text-sm text-white/80 leading-snug cursor-pointer" htmlFor="marketing_consent_hero">
                I agree to receive updates about the Forest Foods Shimba Hills
                campaign.
              </label>
</div>
<input name="source" type="hidden" value="Aura Landing Page"/>
<input name="campaign" type="hidden" value="Forest Foods Shimba Hills Indiegogo Coming Soon"/>
<input name="page" type="hidden" value="Coming Soon Landing Page"/>
<input className="utm_source" name="utm_source" type="hidden"/>
<input className="utm_medium" name="utm_medium" type="hidden"/>
<input className="utm_campaign" name="utm_campaign" type="hidden"/>
<input className="utm_content" name="utm_content" type="hidden"/>
<input className="utm_term" name="utm_term" type="hidden"/>
<input className="landing_page_url" name="landing_page_url" type="hidden"/>
<input className="referrer" name="referrer" type="hidden"/>
<button className="w-full bg-[#D4BFA4] text-[#0A120E] px-6 py-4 rounded-xl text-base font-medium hover:bg-[#c2a98b] transition-colors mt-2" type="submit">
              Join the Early Supporter List
            </button>
<p className="form-error-message hidden text-sm text-red-400 mt-2 text-center">
              Something went wrong. Please try again.
            </p>
</form>
<div className="hidden text-center py-6" id="success-msg-hero">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1A2E20]/20 text-[#D4BFA4] mb-4">
<i className="w-6 h-6" data-lucide="check" strokeWidth="1.5"></i>
</div>
<p className="text-base font-medium text-white">Thank you.</p>
<p className="text-base text-white/70 mt-1">
              You'll be the first to know when we launch.
            </p>
</div>
</div>
</div>
</header>

<section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<h2 className="text-4xl lg:text-5xl tracking-tight font-medium mb-8 text-balance text-[#111827]">
            Why Shimba Hills Matters
          </h2>
<div className="space-y-6 text-lg text-[#4B5563] leading-relaxed">
<p>
              Shimba Hills is a place of extraordinary ecological value, but
              like many landscapes, it faces growing pressure from changing land
              use, degraded soil, climate stress, and fragile food systems.
            </p>
<p>
              Forest Foods sees an opportunity to help create something lasting:
              a regenerative model that restores soil health, supports local
              farmers, increases biodiversity, and produces food in a way that
              works with the land rather than against it.
            </p>
<p className="font-medium text-[#111827]">
              This campaign is about helping that system take root.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mt-12 pt-12 border-t border-gray-200">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#8B7355]" data-lucide="droplets" strokeWidth="1.5"></i>
<span className="text-base font-medium">Restore soil biology</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#8B7355]" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-base font-medium">Support farmer training</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#8B7355]" data-lucide="sprout" strokeWidth="1.5"></i>
<span className="text-base font-medium">Grow regenerative food</span>
</div>
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#8B7355]" data-lucide="bird" strokeWidth="1.5"></i>
<span className="text-base font-medium">Protect biodiversity</span>
</div>
</div>
</div>
<div className="relative h-[500px] lg:h-[700px] rounded-2xl overflow-hidden bg-[#E5E7EB]">
<img alt="Rich soil and hands working the land" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#F3F4F6] px-6 lg:px-12 border-y border-gray-200">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16">
<h2 className="text-4xl lg:text-5xl tracking-tight font-medium mb-6 text-[#111827]">
            A Proven Model for Regenerative Growth
          </h2>
<p className="text-lg text-[#4B5563] leading-relaxed">
            Forest Foods has spent years developing practical, on-the-ground
            regenerative systems. Its work brings together agroforestry, organic
            farming, soil restoration, farmer education, and ecological
            stewardship.
            <strong className="font-medium text-[#111827]">
              This is not a one-off planting project. It is a living system
              designed to grow stronger over time.
            </strong>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

<div>
<div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-[#1A2E20]" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-medium mb-3 text-[#111827]">
              10+ Years of Work
            </h3>
<p className="text-base text-[#6B7280]">
              Practical, on-the-ground experience developing systems that work
              in real-world conditions.
            </p>
</div>

<div>
<div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-[#1A2E20]" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-medium mb-3 text-[#111827]">
              Certified Systems
            </h3>
<p className="text-base text-[#6B7280]">
              Organic farming systems developed, tested, and certified to
              export-grade operational standards.
            </p>
</div>

<div>
<div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-[#1A2E20]" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-medium mb-3 text-[#111827]">
              Thousands Trained
            </h3>
<p className="text-base text-[#6B7280]">
              Empowering local communities with the knowledge to maintain and
              scale regenerative practices.
            </p>
</div>

<div>
<div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-[#1A2E20]" data-lucide="microscope" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-medium mb-3 text-[#111827]">
              Measured Soil Health
            </h3>
<p className="text-base text-[#6B7280]">
              Proven, measurable improvements in soil biology, structure, and
              water retention over time.
            </p>
</div>

<div>
<div className="w-12 h-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center mb-6 shadow-sm">
<i className="w-6 h-6 text-[#1A2E20]" data-lucide="expand" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-medium mb-3 text-[#111827]">
              Ready to Scale
            </h3>
<p className="text-base text-[#6B7280]">
              A practical, foundational model that is now prepared to expand
              into the Shimba Hills landscape.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl lg:text-5xl tracking-tight font-medium mb-6 text-[#111827]">
          Ways to Support the Campaign
        </h2>
<p className="text-lg text-[#4B5563] leading-relaxed">
          The campaign will include a range of supporter tiers, from funding
          seedlings to sponsoring larger areas of land restoration.
          <br className="hidden sm:block"/>
<span className="text-sm text-[#6B7280] mt-2 block">
            Final reward tiers will be confirmed when the Indiegogo campaign
            goes live.
          </span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/50 transition-all flex flex-col">
<div className="w-14 h-14 rounded-full bg-[#1A2E20] text-white flex items-center justify-center mb-6 shadow-md border-4 border-white">
<i className="w-6 h-6" data-lucide="sprout" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#111827] mb-2">
            Forest Starter
          </h3>
<p className="text-sm text-[#6B7280] mb-8 pb-8 border-b border-gray-100 flex-grow italic">
            Supporting the establishment of living soil and early plant life.
          </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">
                10 seedlings in your name
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="monitor" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">
                Digital supporters wall
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="mail" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">Campaign updates</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/50 transition-all flex flex-col">
<div className="w-14 h-14 rounded-full bg-[#1A2E20] text-white flex items-center justify-center mb-6 shadow-md border-4 border-white">
<i className="w-6 h-6" data-lucide="shovel" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#111827] mb-2">
            Soil Builder
          </h3>
<p className="text-sm text-[#6B7280] mb-8 pb-8 border-b border-gray-100 flex-grow italic">
            Building the biological foundation of the system.
          </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">
                1 youth trainee sponsored
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="award" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">
                Trainee story &amp; certificate
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="calendar-clock" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">6 months of updates</span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl border border-[#1A2E20] p-8 hover:shadow-lg hover:shadow-gray-100/50 transition-all flex flex-col relative">
<div className="absolute top-0 right-8 -translate-y-1/2 bg-[#1A2E20] text-white text-xs font-medium px-3 py-1 rounded-full">
            Popular
          </div>
<div className="w-14 h-14 rounded-full bg-[#1A2E20] text-white flex items-center justify-center mb-6 shadow-md border-4 border-white">
<i className="w-6 h-6" data-lucide="trees" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#111827] mb-2">
            Forest Builder
          </h3>
<p className="text-sm text-[#6B7280] mb-8 pb-8 border-b border-gray-100 flex-grow italic">
            Enabling productive, diverse agroforestry systems.
          </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="map" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">
                ¼ acre named plot &amp; footage
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="file-badge" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">
                Digital forest certificate
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="flask-conical" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">
                Soil report &amp; website recognition
              </span>
</li>
</ul>
</div>

<div className="bg-white rounded-2xl border border-gray-200 p-8 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/50 transition-all flex flex-col">
<div className="w-14 h-14 rounded-full bg-gray-500 text-white flex items-center justify-center mb-6 shadow-md border-4 border-white">
<i className="w-6 h-6" data-lucide="globe-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#111827] mb-2">
            Land Steward
          </h3>
<p className="text-sm text-[#6B7280] mb-8 pb-8 border-b border-gray-100 flex-grow italic">
            Supporting the development of structured landscapes.
          </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">1 acre named plot</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">
                Annual soil/canopy reports
              </span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#8B7355] shrink-0 mt-0.5" data-lucide="tent" strokeWidth="1.5"></i>
<span className="text-sm text-[#374151]">Farm visit invitation</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 lg:py-40 bg-[#0A120E] text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-20">
<img alt="Natural textures" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl lg:text-6xl tracking-tight font-medium mb-10 text-balance leading-tight">
          More Than a Campaign.
          <br/>
<span className="text-[#D4BFA4]">A Living System.</span>
</h2>
<p className="text-xl lg:text-2xl text-white/80 leading-relaxed font-light text-balance mx-auto">
          Every contribution will help Forest Foods build something physical,
          measurable, and lasting. Trees in the ground. Farmers trained. Soil
          restored. Food grown. Biodiversity protected. A landscape strengthened
          for future generations.
        </p>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-12 bg-white" id="join-list">
<div className="max-w-3xl mx-auto text-center">
<div className="w-16 h-16 bg-[#1A2E20]/10 rounded-full flex items-center justify-center mx-auto mb-8">
<i className="w-8 h-8 text-[#1A2E20]" data-lucide="mail-plus" strokeWidth="1.5"></i>
</div>
<h2 className="text-4xl lg:text-5xl tracking-tight font-medium mb-6 text-[#111827]">
          Be Part of the Next Chapter
        </h2>
<p className="text-lg text-[#4B5563] mb-12">
          Join the early supporter list and be the first to know when the Shimba
          Hills campaign goes live on Indiegogo.
        </p>
<form className="max-w-md mx-auto space-y-4 text-left signup-form" id="forest-foods-signup-form-bottom">
<div>
<label className="sr-only" htmlFor="first_name_bottom">First Name</label>
<input className="w-full bg-[#F9FAFB] border border-gray-200 text-[#111827] placeholder:text-gray-400 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1A2E20] focus:border-transparent transition-all text-base" id="first_name_bottom" name="first_name" placeholder="First Name" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="email_bottom">Email address</label>
<input className="w-full bg-[#F9FAFB] border border-gray-200 text-[#111827] placeholder:text-gray-400 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1A2E20] focus:border-transparent transition-all text-base" id="email_bottom" name="email" placeholder="Email Address" required="" type="email"/>
</div>
<div className="relative">
<select className="w-full bg-[#F9FAFB] border border-gray-200 text-[#4B5563] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#1A2E20] focus:border-transparent transition-all text-base appearance-none cursor-pointer" id="supporter_type_bottom" name="supporter_type" required="">
<option disabled="" selected="" value="">
                I'm interested as...
              </option>
<option value="Supporter">Supporter</option>
<option value="Partner">Partner</option>
<option value="Investor">Investor</option>
<option value="Media">Media</option>
<option value="Other">Other</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
<i className="w-5 h-5 text-gray-400" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex items-start gap-3 pt-2">
<input className="mt-1 w-4 h-4 rounded border-gray-300 text-[#1A2E20] focus:ring-[#1A2E20] focus:ring-offset-0 cursor-pointer" id="marketing_consent_bottom" name="marketing_consent" required="" type="checkbox" value="TRUE"/>
<label className="text-sm text-[#4B5563] leading-snug cursor-pointer" htmlFor="marketing_consent_bottom">
              I agree to receive updates about the Forest Foods Shimba Hills
              campaign.
            </label>
</div>
<input name="source" type="hidden" value="Aura Landing Page"/>
<input name="campaign" type="hidden" value="Forest Foods Shimba Hills Indiegogo Coming Soon"/>
<input name="page" type="hidden" value="Coming Soon Landing Page"/>
<input className="utm_source" name="utm_source" type="hidden"/>
<input className="utm_medium" name="utm_medium" type="hidden"/>
<input className="utm_campaign" name="utm_campaign" type="hidden"/>
<input className="utm_content" name="utm_content" type="hidden"/>
<input className="utm_term" name="utm_term" type="hidden"/>
<input className="landing_page_url" name="landing_page_url" type="hidden"/>
<input className="referrer" name="referrer" type="hidden"/>
<button className="w-full bg-[#1A2E20] text-white px-6 py-4 rounded-xl text-base font-medium hover:bg-[#111f15] transition-colors mt-4 shadow-lg shadow-[#1A2E20]/20" type="submit">
            Join the Early Supporter List
          </button>
<p className="form-error-message hidden text-sm text-red-500 mt-2 text-center">
            Something went wrong. Please try again.
          </p>
</form>
<div className="hidden bg-[#F9FAFB] border border-gray-200 rounded-2xl p-8 max-w-md mx-auto" id="success-msg-bottom">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1A2E20]/10 text-[#1A2E20] mb-4">
<i className="w-6 h-6" data-lucide="check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl tracking-tight font-medium text-[#111827] mb-2">
            You're on the list.
          </h3>
<p className="text-base text-[#4B5563]">
            Thank you. We will email you the moment the Indiegogo campaign is
            live.
          </p>
</div>
</div>
</section>

<footer className="bg-[#FAFAFA] border-t border-gray-200 py-12 px-6 lg:px-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-[#111827]">
<i className="w-5 h-5" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="text-lg tracking-tight font-medium">ForestFoods</span>
</div>
<div className="text-sm text-[#6B7280]">
          ©
          
          Forest Foods. All rights reserved.
        </div>
<div className="flex items-center gap-6 text-sm">
<a className="text-[#4B5563] hover:text-[#111827] transition-colors font-medium" href="https://www.forestfoods.co.ke/" rel="noopener noreferrer" target="_blank">
            Visit Main Site
          </a>
</div>
</div>
</footer>



    </>
  );
}
