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



      lucide.createIcons();
    


            (function(){
        const initBeforeAfter = () => {
          const track = document.getElementById('ba-track');
          if(!track) return;
          lucide.createIcons();

          const containers = document.querySelectorAll('.ba-container');
          containers.forEach(container => {
            const beforeImg = container.querySelector('.ba-before-img');
            const divider = container.querySelector('.ba-divider');
            let isDragging = false;

            const moveDivider = (e) => {
              if(!isDragging) return;
              const rect = container.getBoundingClientRect();
              let x = e.clientX || (e.touches && e.touches[0].clientX);
              if(x === undefined) return;
              let position = ((x - rect.left) / rect.width) * 100;
              position = Math.max(0, Math.min(100, position));
              beforeImg.style.clipPath = `polygon(0 0, ${position}% 0, ${position}% 100%, 0 100%)`;
              divider.style.left = `${position}%`;
            };

            container.addEventListener('mousedown', () => isDragging = true);
            container.addEventListener('touchstart', () => isDragging = true, {passive: true});
            window.addEventListener('mouseup', () => isDragging = false);
            window.addEventListener('touchend', () => isDragging = false);
            window.addEventListener('mousemove', moveDivider);
            window.addEventListener('touchmove', moveDivider, {passive: true});
          });

          const prevBtn = document.getElementById('prev-slide');
          const nextBtn = document.getElementById('next-slide');
          const dots = document.querySelectorAll('#ba-dots button');
          let currentIndex = 0;

          const updateCarousel = () => {
            let itemsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
            let maxIndex = Math.max(0, containers.length - itemsPerView);
            if(currentIndex > maxIndex) currentIndex = maxIndex;

            const slideElement = containers[0].parentElement;
            const slideWidth = slideElement.offsetWidth;
            const moveX = currentIndex * (slideWidth + 24);
            track.style.transform = `translateX(-${moveX}px)`;

            dots.forEach((dot, i) => {
              if(i === currentIndex) {
                dot.classList.replace('bg-white/20', 'bg-[#BF6955]');
                dot.classList.remove('hover:bg-white/50');
              } else {
                dot.classList.replace('bg-[#BF6955]', 'bg-white/20');
                dot.classList.add('hover:bg-white/50');
              }

              if (i > maxIndex) {
                dot.style.display = 'none';
              } else {
                dot.style.display = 'block';
              }
            });

            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= maxIndex;
            if(prevBtn.disabled) { prevBtn.classList.add('opacity-50', 'cursor-not-allowed'); } else { prevBtn.classList.remove('opacity-50', 'cursor-not-allowed'); }
            if(nextBtn.disabled) { nextBtn.classList.add('opacity-50', 'cursor-not-allowed'); } else { nextBtn.classList.remove('opacity-50', 'cursor-not-allowed'); }
          };

          prevBtn.addEventListener('click', () => {
            if(currentIndex > 0) {
              currentIndex--;
              updateCarousel();
            }
          });

          nextBtn.addEventListener('click', () => {
            let itemsPerView = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
            let maxIndex = Math.max(0, containers.length - itemsPerView);
            if(currentIndex < maxIndex) {
              currentIndex++;
              updateCarousel();
            }
          });

          dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
              currentIndex = parseInt(e.target.dataset.index);
              updateCarousel();
            });
          });

          window.addEventListener('resize', updateCarousel);
          updateCarousel();
        };

        if(document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', initBeforeAfter);
        } else {
          initBeforeAfter();
        }
      })();
    
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
      

<div className="bg-[#1a1a1a] text-white text-xs uppercase tracking-widest py-2.5 text-center px-4 font-light">
      Consult with Noida's Leading Aesthetic &amp; Plastic Surgeon
    </div>

<header className="absolute top-10 w-full z-50 px-6 lg:px-12 flex justify-between items-center max-w-[1600px] mx-auto left-0 right-0">
<a className="flex items-center gap-2 text-[#1a1a1a]" href="#">
<i className="text-[#BF6955] w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl tracking-tight font-light uppercase">ELIXIR</span>
</a>
<div className="hidden lg:flex items-center gap-8 xl:gap-12">
<nav className="flex gap-6 xl:gap-10 text-sm uppercase tracking-widest font-light text-[#6b6b6b] items-center">
<a className="text-[#BF6955] py-2" href="#">Home</a>
<div className="relative group py-2">
<a className="hover:text-[#BF6955] transition-colors cursor-pointer flex items-center gap-1" href="#about">
              About
              <i className="w-4 h-4 ml-0.5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<div className="dropdown-menu absolute top-full left-0 hidden bg-white shadow-xl min-w-[200px] py-4 rounded-xl border border-[#e5e5e5]/50">
<a className="block px-6 py-2 hover:text-[#BF6955] transition-colors" href="#about">
                Elixir Healthcare
              </a>
<a className="block px-6 py-2 hover:text-[#BF6955] transition-colors" href="#about-doctor">
                Dr. Saurabh K Gupta
              </a>
</div>
</div>
<div className="relative group py-2">
<a className="hover:text-[#BF6955] transition-colors cursor-pointer flex items-center gap-1" href="#services">
              Treatments
              <i className="w-4 h-4 ml-0.5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<div className="dropdown-menu absolute top-full left-1/2 -translate-x-1/2 hidden bg-white shadow-xl min-w-[240px] py-4 rounded-xl border border-[#e5e5e5]/50">
<a className="block px-6 py-2 hover:text-[#BF6955] transition-colors" href="#services">
                Skin &amp; Aesthetics
              </a>
<a className="block px-6 py-2 hover:text-[#BF6955] transition-colors" href="#services">
                Cosmetic Surgery
              </a>
<a className="block px-6 py-2 hover:text-[#BF6955] transition-colors" href="#services">
                Hair &amp; Regenerative
              </a>
</div>
</div>
<div className="relative group py-2">
<a className="hover:text-[#BF6955] transition-colors cursor-pointer flex items-center gap-1" href="#services">
              Women's Health
              <i className="w-4 h-4 ml-0.5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</a>
<div className="dropdown-menu absolute top-full right-0 hidden bg-white shadow-xl min-w-[240px] py-4 rounded-xl border border-[#e5e5e5]/50">
<a className="block px-6 py-2 hover:text-[#BF6955] transition-colors" href="#services">
                Cosmetic Gynecology
              </a>
<a className="block px-6 py-2 hover:text-[#BF6955] transition-colors" href="#services">
                Gynecology &amp; Obstetrics
              </a>
<a className="block px-6 py-2 hover:text-[#BF6955] transition-colors" href="#services">
                Fertility Surgery
              </a>
</div>
</div>
<a className="py-2 hover:text-[#BF6955] transition-colors" href="#gallery">
            Gallery
          </a>
</nav>
<div className="flex items-center gap-4">
<a className="bg-[#1a1a1a] text-white px-7 py-3 text-sm uppercase tracking-widest font-light hover:bg-black transition-colors" href="#book">
            Book Appointment
          </a>
</div>
</div>
<button className="lg:hidden text-[#1a1a1a] p-2">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</header>

<section className="lg:pt-40 lg:px-12 grid lg:grid-cols-2 max-w-[1600px] mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative gap-x-16 gap-y-16 items-center">
<div className="max-w-xl z-10">
<h1 className="text-5xl lg:text-7xl tracking-tight font-light text-[#1a1a1a] leading-[1.1] mb-6 font-serif">
          Enhance Your Natural Beauty with Expert Precision
        </h1>
<p className="text-lg lg:text-xl text-[#6b6b6b] mb-10 leading-relaxed font-extralight">
          Advanced Aesthetic, Cosmetic &amp; Hair Treatments in Noida. Take the
          first step towards confidence and transformation with Dr. Saurabh K
          Gupta today.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<a className="inline-flex justify-center items-center bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-widest font-light hover:bg-black transition-colors shadow-lg shadow-[#1a1a1a]/10" href="#book">
            Book Appointment
          </a>
<a className="inline-flex justify-center items-center gap-3 bg-[#BF6955] text-white px-8 py-4 text-sm uppercase tracking-widest font-light hover:bg-[#A65644] transition-colors shadow-lg shadow-[#BF6955]/20" href="https://wa.me/1234567890" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle" strokeWidth="1.5"></i>
            WhatsApp Now
          </a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-[#e5e5e5] pt-8">
<div>
<p className="text-2xl tracking-tight font-light text-[#1a1a1a] mb-1 font-serif">
              15+
            </p>
<p className="text-sm uppercase tracking-widest text-[#6b6b6b] font-light">
              Years Exp.
            </p>
</div>
<div>
<p className="text-2xl tracking-tight font-light text-[#1a1a1a] mb-1 font-serif">
              1000+
            </p>
<p className="text-sm uppercase tracking-widest text-[#6b6b6b] font-light">
              Happy Patients
            </p>
</div>
<div>
<p className="text-2xl tracking-tight font-light text-[#1a1a1a] mb-1 font-serif">
              Global
            </p>
<p className="text-sm uppercase tracking-widest text-[#6b6b6b] font-light">
              Training
            </p>
</div>
<div className="">
<p className="text-2xl tracking-tight font-light text-[#1a1a1a] mb-1 font-serif">
              Latest
            </p>
<p className="text-sm uppercase tracking-widest text-[#6b6b6b] font-light">
              Technology
            </p>
</div>
</div>
</div>
<div className="relative h-[600px] lg:h-[700px] w-full">
<div className="absolute inset-0 bg-[#f4ece3] rounded-t-[200px] rounded-b-3xl transform translate-x-4 translate-y-4"></div>
<img alt="Aesthetic Care" className="absolute inset-0 w-full h-full object-cover rounded-t-[200px] rounded-b-3xl shadow-sm z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6e8264d-dd56-4aca-961c-2a156c342ff1_1600w.jpg"/>
<div className="absolute top-20 -left-4 lg:-left-12 bg-white/95 backdrop-blur px-5 py-4 rounded-xl shadow-xl z-20 flex items-center gap-3 max-w-[240px]">
<div className="w-10 h-10 rounded-full bg-[#BF6955]/10 flex items-center justify-center shrink-0">
<i className="text-[#BF6955] w-5 h-5" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-[#1a1a1a] leading-tight font-extralight">
            Safe, natural &amp;
            <span className="font-normal text-[#BF6955]">long-lasting</span>
            results.
          </p>
</div>
</div>
</section>

<section className="bg-[#f4ece3]/50 py-16 border-y border-[#e5e5e5]/50">
<div className="max-w-[1400px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-5 gap-10">
<div className="flex flex-col items-center text-center gap-4">
<div className="w-14 h-14 rounded-full border border-[#BF6955]/30 flex items-center justify-center text-[#BF6955] bg-white">
<i className="w-6 h-6" data-lucide="user-check" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-[#1a1a1a] uppercase tracking-widest font-light">
            Expert
            <br/>
            Surgeon
          </p>
</div>
<div className="flex flex-col items-center text-center gap-4">
<div className="w-14 h-14 rounded-full border border-[#BF6955]/30 flex items-center justify-center text-[#BF6955] bg-white">
<i className="w-6 h-6" data-lucide="aperture" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-[#1a1a1a] uppercase tracking-widest font-light">
            Advanced
            <br/>
            Technology
          </p>
</div>
<div className="flex flex-col items-center text-center gap-4">
<div className="w-14 h-14 rounded-full border border-[#BF6955]/30 flex items-center justify-center text-[#BF6955] bg-white">
<i className="w-6 h-6" data-lucide="heart-handshake" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-[#1a1a1a] uppercase tracking-widest font-light">
            Personalized
            <br/>
            Care
          </p>
</div>
<div className="flex flex-col items-center text-center gap-4">
<div className="w-14 h-14 rounded-full border border-[#BF6955]/30 flex items-center justify-center text-[#BF6955] bg-white">
<i className="w-6 h-6" data-lucide="briefcase-medical" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-[#1a1a1a] uppercase tracking-widest font-light">
            Safe &amp;
            <br/>
            Hygienic
          </p>
</div>
<div className="flex flex-col items-center text-center gap-4 col-span-2 lg:col-span-1">
<div className="w-14 h-14 rounded-full border border-[#BF6955]/30 flex items-center justify-center text-[#BF6955] bg-white">
<i className="w-6 h-6" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-[#1a1a1a] uppercase tracking-widest font-light">
            Natural
            <br/>
            Results
          </p>
</div>
</div>
</section>

<section className="py-24 lg:py-32 max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center" id="about">
<div className="relative h-[500px] lg:h-[600px] flex gap-4 lg:gap-6">
<div className="w-1/2 h-[80%] mt-[20%] rounded-t-[100px] rounded-b-[100px] overflow-hidden shadow-xl">
<img alt="Clinic" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c7fc7af-724b-4042-86d7-0a5a54076b63_800w.jpg"/>
</div>
<div className="w-1/2 h-[80%] rounded-t-[100px] rounded-b-[100px] overflow-hidden shadow-xl">
<img alt="Facilities" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c826478b-6cd4-4352-ac1e-42af1c3a68bc_1600w.jpg"/>
</div>
</div>
<div>
<h4 className="text-[#BF6955] text-xs uppercase tracking-widest font-light mb-6">
          About Elixir
        </h4>
<h2 className="text-4xl lg:text-5xl tracking-tight font-light text-[#1a1a1a] mb-8 font-serif leading-tight">
          Trust in medical excellence.
        </h2>
<p className="text-lg text-[#6b6b6b] mb-6 leading-relaxed font-extralight">
          At Elixir Healthcare, we combine medical expertise with aesthetic
          precision to deliver natural, safe, and long-lasting results. With a
          focus on patient satisfaction and advanced treatments, we help you
          look and feel your best.
        </p>
<p className="text-lg text-[#6b6b6b] mb-10 leading-relaxed font-extralight">
          Our clinic is equipped with FDA-approved technologies and
          state-of-the-art facilities to ensure the highest standards of safety
          and care.
        </p>
<a className="inline-flex justify-center items-center bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-widest font-light hover:bg-black transition-colors mb-16" href="#services">
          Explore Treatments
        </a>
<div className="flex items-center gap-6 p-6 bg-[#f4ece3]/50 rounded-2xl w-fit border border-[#e5e5e5]/50">
<div className="w-16 h-16 rounded-full bg-[#1a1a1a] text-[#BF6955] flex items-center justify-center">
<i className="w-7 h-7" data-lucide="award" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-lg tracking-tight font-light text-[#1a1a1a]">
              Certified Excellence
            </p>
<p className="text-xs text-[#6b6b6b] mt-1 uppercase tracking-widest">
              Global Standards
            </p>
</div>
</div>
</div>
</section>

<section className="bg-black py-24 lg:py-32 border-t border-[#1a1a1a]" id="about-doctor">
<div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
<div className="lg:col-span-7 order-2 lg:order-1">
<h4 className="text-[#BF6955] text-xs uppercase tracking-widest font-light mb-6">
            Chief Surgeon
          </h4>
<h2 className="lg:text-6xl leading-tight text-4xl font-light text-white tracking-tight font-serif mb-10">
            Meet Dr. Saurabh
          </h2>
<div className="space-y-6 text-lg text-[#a0a0a0] leading-relaxed font-extralight">
<p className="">
              Dr. Saurabh is a cosmetic architect with unmatched skills that can
              give you your dream skin and looks. He creates beauty and is an
              exceedingly reliable name in the field of plastic surgery.
            </p>
<p className="">
              He has been trained from the top institutes and is holding
              fellowships from well-regarded universities of Taiwan, Germany,
              Netherlands. His vast knowledge together with his 14 years of
              experience in plastic surgery guarantees paramount outcomes with
              ease and confidence.
            </p>
<p className="">
              He is having in-depth knowledge of the subject and uses it for the
              welfare of his patients. He has been giving his services to the
              international clients as well.
            </p>
</div>
<div className="mt-12 flex flex-wrap gap-8">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#BF6955] bg-white/5">
<i className="w-6 h-6" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-white text-base font-light">
                  Global Fellowships
                </p>
<p className="text-xs text-[#a0a0a0] uppercase tracking-widest mt-1">
                  Taiwan, Germany
                </p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-[#BF6955] bg-white/5">
<i className="w-6 h-6" data-lucide="award" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-white text-base font-light">14+ Years Exp.</p>
<p className="text-xs text-[#a0a0a0] uppercase tracking-widest mt-1">
                  Plastic Surgery
                </p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 order-1 lg:order-2 relative">
<div className="aspect-[4/5] rounded-t-[100px] rounded-b-2xl overflow-hidden shadow-2xl relative border border-white/10 group">
<img alt="Dr. Saurabh" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6232714c-de76-4f7e-8301-e7947885713b_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-full p-8 text-center">
<p className="text-white text-2xl font-serif font-light mb-2 tracking-tight">
                Dr. Saurabh K Gupta
              </p>
<p className="text-[#BF6955] text-xs uppercase tracking-widest font-light">
                Cosmetic Architect
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1a1a1a] py-24 lg:py-32 text-white border-t border-[#BF6955]/20" id="services">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-16">
<h4 className="text-[#BF6955] text-xs uppercase tracking-widest font-light mb-6">
            Our Expertise
          </h4>
<h2 className="text-4xl lg:text-5xl tracking-tight font-light mb-6 font-serif">
            Comprehensive aesthetic care
          </h2>
<p className="text-lg text-[#a0a0a0] max-w-2xl mx-auto font-extralight leading-relaxed">
            We offer a complete range of aesthetic, cosmetic, and medical
            treatments tailored to reveal your most radiant self.
          </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
<a className="group block text-center" href="#book">
<div className="aspect-[3/4] rounded-t-[100px] rounded-b-2xl overflow-hidden mb-6 relative border border-white/5">
<img alt="Skin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c7fc7af-724b-4042-86d7-0a5a54076b63_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<h3 className="text-base uppercase tracking-widest font-light mb-2">
              Skin Rejuvenation
            </h3>
<p className="text-sm text-[#BF6955] flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity font-light">
              Discover
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</p>
</a>
<a className="group block text-center lg:mt-12" href="#book">
<div className="aspect-[3/4] rounded-t-[100px] rounded-b-2xl overflow-hidden mb-6 relative border border-white/5">
<img alt="Cosmetic Surgery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7dfe0d1-c247-41a2-b250-fac173dca5d9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<h3 className="text-base uppercase tracking-widest font-light mb-2">
              Cosmetic Surgery
            </h3>
<p className="text-sm text-[#BF6955] flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity font-light">
              Discover
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</p>
</a>
<a className="group block text-center" href="#book">
<div className="aspect-[3/4] rounded-t-[100px] rounded-b-2xl overflow-hidden mb-6 relative border border-white/5">
<img alt="Hair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34d9779b-f747-41f5-8bf8-db5157cd7517_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<h3 className="text-base uppercase tracking-widest font-light mb-2">
              Hair Restoration
            </h3>
<p className="text-sm text-[#BF6955] flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity font-light">
              Discover
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</p>
</a>
<a className="group block text-center lg:mt-12" href="#book">
<div className="aspect-[3/4] rounded-t-[100px] rounded-b-2xl overflow-hidden mb-6 relative border border-white/5">
<img alt="Gynecology" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8d0c80e-9792-4663-b72a-7ac89ad0767b_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>
<h3 className="text-base uppercase tracking-widest font-light mb-2">
              Women's Health
            </h3>
<p className="text-sm text-[#BF6955] flex items-center justify-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity font-light">
              Discover
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-[#e5e5e5]/50" id="gallery">
<div className="max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h4 className="text-[#BF6955] text-xs uppercase tracking-widest font-light mb-6">
            Before &amp; After
          </h4>
<h2 className="text-4xl lg:text-5xl tracking-tight font-light text-[#1a1a1a] mb-8 font-serif leading-tight">
            Transformation gallery
          </h2>
<p className="text-lg text-[#6b6b6b] mb-10 leading-relaxed max-w-md font-extralight">
            Our expert treatments are tailored to bring out the best version of
            you. View our stunning natural outcomes and see the Elixir
            difference.
          </p>
<ul className="space-y-4 mb-12">
<li className="flex items-center gap-3 text-base font-light text-[#1a1a1a]">
<i className="text-[#BF6955] w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
              Real Patient Results
            </li>
<li className="flex items-center gap-3 text-base font-light text-[#1a1a1a]">
<i className="text-[#BF6955] w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
              FDA Approved Tech
            </li>
<li className="flex items-center gap-3 text-base font-light text-[#1a1a1a]">
<i className="text-[#BF6955] w-5 h-5" data-lucide="check-circle-2" strokeWidth="1.5"></i>
              Invisible Scarring Techniques
            </li>
</ul>
<a className="inline-flex justify-center items-center bg-[#1a1a1a] text-white px-8 py-4 text-sm uppercase tracking-widest font-light hover:bg-black transition-colors" href="#book">
            Start Your Journey
          </a>
</div>
<div className="relative flex gap-6 h-[400px] lg:h-[500px]">
<img alt="Before" className="w-1/2 h-[90%] object-cover rounded-t-[100px] rounded-b-xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/681812bd-51f2-49a1-87f1-de629fa44600_800w.jpg"/>
<img alt="After" className="w-1/2 h-[90%] object-cover rounded-t-[100px] rounded-b-xl mt-[10%] shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80df2227-f7a6-4452-9c3b-4bcc3b1ce747_800w.jpg"/>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center z-10 text-[#1a1a1a]">
<i className="w-6 h-6" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#1a1a1a] text-white border-t border-[#BF6955]/20 overflow-hidden" id="before-after">
<div className="max-w-[1400px] mx-auto px-6 text-center relative">
<h4 className="text-[#BF6955] text-xs uppercase tracking-widest font-light mb-4">
          Real Results
        </h4>
<h2 className="text-4xl lg:text-5xl tracking-tight font-light mb-16 font-serif">
          See the transformation
        </h2>
<div className="relative w-full overflow-hidden pb-4">
<div className="flex gap-6 transition-transform duration-500 ease-in-out" id="ba-track">
<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0">
<div className="relative w-full rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] group cursor-ew-resize select-none touch-none ba-container">
<img alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none ba-after-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80df2227-f7a6-4452-9c3b-4bcc3b1ce747_800w.jpg"/>
<img alt="Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none ba-before-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/681812bd-51f2-49a1-87f1-de629fa44600_800w.jpg" style={{clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'}}/>
<div className="absolute inset-y-0 -ml-[1px] w-[2px] bg-white z-20 pointer-events-none ba-divider" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a1a1a] shadow-xl">
<i className="w-4 h-4" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full font-light z-20 pointer-events-none">
                  Before
                </div>
<div className="absolute top-4 right-4 bg-[#BF6955]/90 backdrop-blur text-white px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full font-light z-20 pointer-events-none">
                  After
                </div>
</div>
</div>
<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0">
<div className="relative w-full rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] group cursor-ew-resize select-none touch-none ba-container">
<img alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none ba-after-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7dfe0d1-c247-41a2-b250-fac173dca5d9_800w.jpg"/>
<img alt="Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none ba-before-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c7fc7af-724b-4042-86d7-0a5a54076b63_800w.jpg" style={{clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'}}/>
<div className="absolute inset-y-0 -ml-[1px] w-[2px] bg-white z-20 pointer-events-none ba-divider" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a1a1a] shadow-xl">
<i className="w-4 h-4" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full font-light z-20 pointer-events-none">
                  Before
                </div>
<div className="absolute top-4 right-4 bg-[#BF6955]/90 backdrop-blur text-white px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full font-light z-20 pointer-events-none">
                  After
                </div>
</div>
</div>
<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0">
<div className="relative w-full rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] group cursor-ew-resize select-none touch-none ba-container">
<img alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none ba-after-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8d0c80e-9792-4663-b72a-7ac89ad0767b_800w.jpg"/>
<img alt="Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none ba-before-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34d9779b-f747-41f5-8bf8-db5157cd7517_800w.jpg" style={{clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'}}/>
<div className="absolute inset-y-0 -ml-[1px] w-[2px] bg-white z-20 pointer-events-none ba-divider" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a1a1a] shadow-xl">
<i className="w-4 h-4" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full font-light z-20 pointer-events-none">
                  Before
                </div>
<div className="absolute top-4 right-4 bg-[#BF6955]/90 backdrop-blur text-white px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full font-light z-20 pointer-events-none">
                  After
                </div>
</div>
</div>
<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0">
<div className="relative w-full rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5] group cursor-ew-resize select-none touch-none ba-container">
<img alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none ba-after-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6232714c-de76-4f7e-8301-e7947885713b_1600w.jpg"/>
<img alt="Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none ba-before-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c826478b-6cd4-4352-ac1e-42af1c3a68bc_1600w.jpg" style={{clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'}}/>
<div className="absolute inset-y-0 -ml-[1px] w-[2px] bg-white z-20 pointer-events-none ba-divider" style={{left: '50%'}}>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#1a1a1a] shadow-xl">
<i className="w-4 h-4" data-lucide="arrow-left-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="absolute top-4 left-4 bg-black/50 backdrop-blur text-white px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full font-light z-20 pointer-events-none">
                  Before
                </div>
<div className="absolute top-4 right-4 bg-[#BF6955]/90 backdrop-blur text-white px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full font-light z-20 pointer-events-none">
                  After
                </div>
</div>
</div>
</div>
</div>
<div className="flex justify-center items-center gap-6 mt-10">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all text-white disabled:opacity-50 disabled:cursor-not-allowed" id="prev-slide">
<i className="w-6 h-6" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<div className="flex gap-2" id="ba-dots">
<button className="w-2.5 h-2.5 rounded-full bg-[#BF6955] transition-colors" data-index="0"></button>
<button className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50 transition-colors" data-index="1"></button>
<button className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50 transition-colors" data-index="2"></button>
<button className="w-2.5 h-2.5 rounded-full bg-white/20 hover:bg-white/50 transition-colors" data-index="3"></button>
</div>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white transition-all text-white disabled:opacity-50 disabled:cursor-not-allowed" id="next-slide">
<i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</section>

<section className="py-24 bg-[#f4ece3]/50" id="reviews">
<div className="max-w-[1000px] mx-auto px-6 text-center">
<h4 className="text-[#BF6955] text-xs uppercase tracking-widest font-light mb-4">
          Patient Stories
        </h4>
<h2 className="text-4xl lg:text-5xl tracking-tight font-light text-[#1a1a1a] mb-12 font-serif">
          Built on trust &amp; results
        </h2>
<div className="bg-white p-12 lg:p-16 rounded-[40px] shadow-sm relative border border-[#e5e5e5]/50">
<div className="text-[#BF6955] mb-8 flex justify-center gap-1.5">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-2xl lg:text-3xl font-extralight text-[#1a1a1a] leading-relaxed mb-10 font-serif max-w-3xl mx-auto">
            "Dr. Saurabh Gupta is extremely skilled and caring. The entire
            clinic environment feels premium and safe. My results look
            completely natural and I feel much more confident. Highly
            recommended!"
          </p>
<div className="flex items-center justify-center gap-4">
<div className="w-14 h-14 rounded-full bg-[#f4ece3] flex items-center justify-center text-[#BF6955]">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div className="text-left">
<p className="text-base font-light text-[#1a1a1a] uppercase tracking-widest">
                Priya S.
              </p>
<p className="text-sm text-[#6b6b6b] mt-1 font-extralight">
                Cosmetic Surgery Patient
              </p>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-8">
<button className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a]"></button>
<button className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5] hover:bg-[#BF6955] transition-colors"></button>
<button className="w-2.5 h-2.5 rounded-full bg-[#e5e5e5] hover:bg-[#BF6955] transition-colors"></button>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-[#e5e5e5]/50" id="faq">
<div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
<div className="order-2 md:order-1">
<h4 className="text-[#BF6955] text-xs uppercase tracking-widest font-light mb-4">
            Support
          </h4>
<h2 className="text-4xl tracking-tight font-light text-[#1a1a1a] mb-10 font-serif">
            Popular questions
          </h2>
<div className="space-y-6">
<div className="border-b border-[#e5e5e5] pb-6">
<h4 className="text-lg font-light text-[#1a1a1a] flex justify-between items-center cursor-pointer">
                Is the consultation private and confidential?
                <i className="text-[#BF6955] w-5 h-5" data-lucide="chevron-up" strokeWidth="1.5"></i>
</h4>
<p className="text-lg text-[#6b6b6b] mt-4 leading-relaxed font-extralight">
                Absolutely. We prioritize your privacy above all. Every
                consultation and treatment is completely confidential, conducted
                in a discreet and comfortable environment.
              </p>
</div>
<div className="border-b border-[#e5e5e5] pb-6">
<h4 className="text-lg font-light text-[#1a1a1a] flex justify-between items-center cursor-pointer hover:text-[#BF6955] transition-colors">
                What is the recovery time for cosmetic procedures?
                <i className="text-[#1a1a1a] w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</h4>
</div>
<div className="border-b border-[#e5e5e5] pb-6">
<h4 className="text-lg font-light text-[#1a1a1a] flex justify-between items-center cursor-pointer hover:text-[#BF6955] transition-colors">
                Are the results permanent?
                <i className="text-[#1a1a1a] w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</h4>
</div>
</div>
</div>
<div className="order-1 md:order-2 relative rounded-t-[150px] rounded-b-2xl overflow-hidden aspect-[4/5] w-full max-w-md mx-auto shadow-xl border border-[#e5e5e5]/50">
<img alt="Consultation" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c826478b-6cd4-4352-ac1e-42af1c3a68bc_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 bg-[#1a1a1a] text-white" id="book">
<div className="max-w-[1200px] mx-auto px-6">
<div className="bg-white text-[#1a1a1a] rounded-[40px] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
<div className="lg:w-1/2 relative min-h-[400px] lg:min-h-[650px] bg-[#f4ece3]">
<img alt="Clinic Interior" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f5251b4e-ddf3-4876-87b0-60294de375ca_1600w.webp"/>
<div className="flex flex-col text-white bg-gradient-to-t from-[#1a1a1a]/80 to-transparent pt-10 pr-10 pb-10 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-end">
<h3 className="text-3xl tracking-tight font-serif font-light mb-2">
                Visit our clinic
              </h3>
<p className="text-base font-extralight opacity-90 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i>
                Premium Sector, Noida, India
              </p>
</div>
</div>
<div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center bg-white relative">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#f4ece3] to-transparent rounded-bl-full opacity-50"></div>
<h4 className="text-[#BF6955] text-xs uppercase tracking-widest font-light mb-4">
              Reservation
            </h4>
<h2 className="text-4xl tracking-tight font-light text-[#1a1a1a] mb-4 font-serif">
              Book your consultation
            </h2>
<p className="text-lg text-[#6b6b6b] mb-10 font-extralight leading-relaxed">
              Take the first step towards confidence and transformation.
              Schedule a private consultation today.
            </p>
<form action="#" className="space-y-8 relative z-10">
<div className="">
<input className="focus:outline-none focus:border-[#BF6955] transition-colors placeholder:text-[#a0a0a0] text-lg text-[#1a1a1a] font-extralight bg-transparent w-full border-[#e5e5e5] border-b pt-3 pb-3" placeholder="Full Name" required="" type="text"/>
</div>
<div className="">
<input className="focus:outline-none focus:border-[#BF6955] transition-colors placeholder:text-[#a0a0a0] text-lg text-[#1a1a1a] font-extralight bg-transparent w-full border-[#e5e5e5] border-b pt-3 pb-3" placeholder="Phone Number" required="" type="tel"/>
</div>
<div className="relative">
<select className="w-full border-b border-[#e5e5e5] py-3 text-lg text-[#a0a0a0] font-extralight focus:text-[#1a1a1a] focus:outline-none focus:border-[#BF6955] bg-transparent appearance-none cursor-pointer transition-colors" required="">
<option disabled="" selected="" value="">
                    Select Treatment Interest
                  </option>
<option value="skin">Skin &amp; Aesthetic Treatments</option>
<option value="cosmetic">
                    Cosmetic &amp; Plastic Surgery
                  </option>
<option value="hair">Hair Transplant &amp; PRP</option>
<option value="gynecology">Cosmetic Gynecology</option>
<option value="fertility">Fertility Procedures</option>
<option value="other">General Consultation</option>
</select>
<i className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a0a0a0] pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="relative">
<input className="w-full border-b border-[#e5e5e5] py-3 text-lg text-[#a0a0a0] font-extralight focus:text-[#1a1a1a] focus:outline-none focus:border-[#BF6955] bg-transparent transition-colors" required="" type="date"/>
</div>
<button className="w-full bg-[#1a1a1a] text-white py-5 text-sm uppercase tracking-widest font-light hover:bg-[#BF6955] transition-colors mt-4 flex items-center justify-center gap-2 shadow-lg shadow-[#1a1a1a]/10" type="submit">
                Confirm Booking
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-[#1a1a1a] text-[#a0a0a0] py-20 border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-16">
<div className="lg:col-span-1">
<a className="flex items-center gap-2 text-white mb-6" href="#">
<i className="text-[#BF6955] w-5 h-5" data-lucide="sparkles" strokeWidth="1.5"></i>
<span className="text-2xl tracking-tight font-light uppercase">
              ELIXIR
            </span>
</a>
<p className="text-base leading-relaxed mb-8 font-extralight">
            Enhancing your natural beauty with expert care, advanced technology,
            and safe surgical practices.
          </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#BF6955] hover:border-[#BF6955] transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#BF6955] hover:border-[#BF6955] transition-all" href="#">
<i className="w-5 h-5" data-lucide="globe" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="">
<h5 className="text-white text-xs uppercase tracking-widest font-light mb-6">
            Quick Links
          </h5>
<ul className="space-y-4 text-base font-extralight">
<li>
<a className="hover:text-white transition-colors" href="#">Home</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#about">
                About Elixir
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#about-doctor">
                Dr. Saurabh K Gupta
              </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white text-xs uppercase tracking-widest font-light mb-6">
            Treatments
          </h5>
<ul className="space-y-4 text-base font-extralight">
<li>
<a className="hover:text-white transition-colors" href="#services">
                Skin &amp; Aesthetics
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#services">
                Cosmetic &amp; Plastic Surgery
              </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#services">
                Hair Transplant
              </a>
</li>
</ul>
</div>
<div>
<h5 className="text-white text-xs uppercase tracking-widest font-light mb-6">
            Contact
          </h5>
<ul className="space-y-4 text-base font-extralight">
<li className="flex items-start gap-3">
<i className="w-6 h-6 shrink-0 text-[#BF6955]" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>
                Elixir Healthcare,
                <br/>
                Premium Sector, Noida, UP
              </span>
</li>
<li className="flex items-center gap-3">
<i className="w-6 h-6 shrink-0 text-[#BF6955]" data-lucide="phone" strokeWidth="1.5"></i>
<span>+91 98765 43210</span>
</li>
<li className="flex items-center gap-3">
<i className="w-6 h-6 shrink-0 text-[#BF6955]" data-lucide="mail" strokeWidth="1.5"></i>
<span>contact@elixirhealthcare.com</span>
</li>
</ul>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs uppercase tracking-widest font-extralight">
          © 2023 Elixir Healthcare. All rights reserved.
        </p>
<div className="flex gap-6 text-xs uppercase tracking-widest font-extralight">
<a className="hover:text-white transition-colors" href="#">
            Privacy Policy
          </a>
<a className="hover:text-white transition-colors" href="#">
            Terms of Service
          </a>
</div>
</div>
</footer>

<a className="fixed bottom-8 right-8 bg-[#BF6955] text-white p-4 rounded-full shadow-2xl flex items-center justify-center z-50 hover:-translate-y-1 hover:bg-[#A65644] transition-all duration-300 group" href="https://wa.me/1234567890" target="_blank">
<i className="w-6 h-6" data-lucide="message-circle" strokeWidth="1.5"></i>
<span className="absolute right-full mr-4 bg-[#1a1a1a] text-white text-xs uppercase tracking-widest font-light px-4 py-2 rounded opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap">
        WhatsApp Us
      </span>
</a>



    </>
  );
}
