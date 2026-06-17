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
      
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const progressBar = document.getElementById('progress-bar');
const navDotsContainer = document.getElementById('nav-dots');
// Create dots
slides.forEach((_, index) => {
const dot = document.createElement('button');
dot.className = `w-2 h-2 rounded-full transition-all duration-300 border border-[#D4AF37] ${index === 0 ? 'bg-[#D4AF37] scale-125' : 'bg-transparent opacity-50'}`;
dot.onclick = () => goToSlide(index);
if(navDotsContainer) navDotsContainer.appendChild(dot);
});
function updateSlides(direction) {
slides.forEach((slide, index) => {
slide.classList.remove('active', 'prev');
if (index === currentSlide) {
slide.classList.add('active');
} else if (index < currentSlide) {
slide.classList.add('prev');
}
});
const progress = ((currentSlide + 1) / slides.length) * 100;
progressBar.style.width = `${progress}%`;
if(navDotsContainer) {
Array.from(navDotsContainer.children).forEach((dot, index) => {
if(index === currentSlide) {
dot.className = 'w-2 h-2 rounded-full transition-all duration-300 border border-[#D4AF37] bg-[#D4AF37] scale-125';
} else {
dot.className = 'w-2 h-2 rounded-full transition-all duration-300 border border-[#D4AF37] bg-transparent opacity-50';
}
});
}
}
function nextSlide() {
if (currentSlide < slides.length - 1) {
currentSlide++;
updateSlides('next');
}
}
function prevSlide() {
if (currentSlide > 0) {
currentSlide--;
updateSlides('prev');
}
}
function goToSlide(index) {
if (index >= 0 && index < slides.length) {
currentSlide = index;
updateSlides('jump');
}
}
// Wheel/Scroll support
let isScrolling = false;
window.addEventListener('wheel', (e) => {
if (isScrolling) return;
isScrolling = true;
if (e.deltaY > 0) nextSlide();
else prevSlide();
setTimeout(() => { isScrolling = false; }, 1000);
}, { passive: true });
// Keyboard support
window.addEventListener('keydown', (e) => {
if(e.key === 'ArrowDown' || e.key === 'ArrowRight') nextSlide();
else if(e.key === 'ArrowUp' || e.key === 'ArrowLeft') prevSlide();
});
updateSlides();
const musicToggleBtn = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
let isPlaying = false;
musicToggleBtn.addEventListener('click', () => {
if (isPlaying) {
bgMusic.pause();
musicToggleBtn.innerHTML = '<iconify-icon icon="solar:music-note-linear" width="20" height="20" stroke-width="1.5"></iconify-icon>';
musicToggleBtn.classList.remove('bg-[#D4AF37]', 'text-[#5E1914]');
} else {
bgMusic.play().catch(e => console.log("Audio play failed due to browser policy."));
musicToggleBtn.innerHTML = '<iconify-icon icon="solar:stop-linear" width="20" height="20" stroke-width="1.5"></iconify-icon>';
musicToggleBtn.classList.add('bg-[#D4AF37]', 'text-[#5E1914]');
}
isPlaying = !isPlaying;
});
const weddingDate = new Date("April 19, 2026 00:00:00").getTime();
const countdownInterval = setInterval(() => {
const now = new Date().getTime();
const distance = weddingDate - now;
if (distance < 0) {
clearInterval(countdownInterval);
document.getElementById("days").innerText = "00";
document.getElementById("hours").innerText = "00";
document.getElementById("minutes").innerText = "00";
document.getElementById("seconds").innerText = "00";
return;
}
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);
document.getElementById("days").innerText = days.toString().padStart(2, '0');
document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}, 1000);



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Slide Navigation Logic
      let currentSlide = 0;
      const slides = document.querySelectorAll('.slide');
      const progressBar = document.getElementById('progress-bar');

      function updateSlides(direction) {
          slides.forEach((slide, index) => {
              slide.classList.remove('active', 'prev');
              if (index === currentSlide) {
                  slide.classList.add('active');
              } else if (index < currentSlide) {
                  slide.classList.add('prev');
              }
          });

          // Update Progress Bar
          const progress = ((currentSlide + 1) / slides.length) * 100;
          progressBar.style.width = `${progress}%`;
      }

      function nextSlide() {
          if (currentSlide < slides.length - 1) {
              currentSlide++;
              updateSlides('next');
          }
      }

      function prevSlide() {
          if (currentSlide > 0) {
              currentSlide--;
              updateSlides('prev');
          }
      }

      function goToSlide(index) {
          if (index >= 0 && index < slides.length) {
              currentSlide = index;
              updateSlides('jump');
          }
      }

      // Initialize progress bar
      updateSlides();

      // Music Toggle Logic
      const musicToggleBtn = document.getElementById('music-toggle');
      const bgMusic = document.getElementById('bg-music');
      let isPlaying = false;

      musicToggleBtn.addEventListener('click', () => {
          if (isPlaying) {
              bgMusic.pause();
              musicToggleBtn.innerHTML = '<iconify-icon icon="solar:music-note-linear" width="20" height="20" stroke-width="1.5"></iconify-icon>';
              musicToggleBtn.classList.remove('bg-[#D4AF37]', 'text-[#5E1914]');
          } else {
              bgMusic.play().catch(e => console.log("Audio play failed due to browser policy."));
              musicToggleBtn.innerHTML = '<iconify-icon icon="solar:stop-linear" width="20" height="20" stroke-width="1.5"></iconify-icon>';
              musicToggleBtn.classList.add('bg-[#D4AF37]', 'text-[#5E1914]');
          }
          isPlaying = !isPlaying;
      });

      // Countdown Timer Logic
      const weddingDate = new Date("April 19, 2026 00:00:00").getTime();

      const countdownInterval = setInterval(() => {
          const now = new Date().getTime();
          const distance = weddingDate - now;

          if (distance < 0) {
              clearInterval(countdownInterval);
              document.getElementById("days").innerText = "00";
              document.getElementById("hours").innerText = "00";
              document.getElementById("minutes").innerText = "00";
              document.getElementById("seconds").innerText = "00";
              return;
          }

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          document.getElementById("days").innerText = days.toString().padStart(2, '0');
          document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
          document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
          document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
      }, 1000);
    
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
      

<audio id="bg-music" loop="">

<source src="https://assets.mixkit.co/music/preview/mixkit-wedding-dreams-227.mp3" type="audio/mpeg"/>
</audio>

<div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
<div className="h-full bg-[#D4AF37] w-0" id="progress-bar"></div>
</div>
<button className="fixed top-6 right-6 z-50 w-10 h-10 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] backdrop-blur-sm transition-all hover:bg-[#D4AF37] hover:text-[#5E1914]" id="music-toggle">
<iconify-icon height="20" icon="solar:music-note-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="fixed top-6 left-6 z-50 tracking-tight font-serif-en text-sm font-medium text-[#D4AF37] uppercase tracking-widest opacity-80">
      V
      <span className="text-xs opacity-50 mx-1">&amp;</span>
      R
    </div>

<div className="relative w-full h-full" id="slider-container">

<div className="slide active bg-[#5E1914] flex flex-col items-center justify-center p-6 text-center">
<div className="floral-bg"></div>
<div className="particles"></div>
<div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
<div className="mb-6 flex items-center gap-4 text-[#D4AF37]/60">
<div className="w-12 h-px bg-[#D4AF37]/40"></div>
<iconify-icon height="24" icon="solar:stars-linear" width="24"></iconify-icon>
<div className="w-12 h-px bg-[#D4AF37]/40"></div>
</div>
<h1 className="font-serif-en text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#D4AF37] mb-2 font-medium">
            VARSHA
          </h1>
<span className="font-serif-en text-2xl md:text-4xl text-[#D4AF37]/70 mb-2">
            ❤️
          </span>
<h1 className="font-serif-en text-5xl md:text-7xl lg:text-8xl tracking-tight text-[#D4AF37] mb-12 font-medium">
            RAVI
          </h1>
<p className="font-hindi text-sm md:text-base text-[#FAF3E0]/90 leading-relaxed mb-12 max-w-lg font-medium">
            "अपने परिवारों के साथ, हम आपको सादर आमंत्रित करते हैं कि हमारे जीवन
            के सबसे खास दिन का हिस्सा बनें और हमें अपना आशीर्वाद दें।"
          </p>
<button className="group glow-btn flex items-center gap-3 px-8 py-3 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] text-xs uppercase tracking-widest transition-all hover:bg-[#D4AF37] hover:text-[#5E1914]" onclick="nextSlide()">
<span>Enter Celebration</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="slide bg-[#FAF3E0] text-[#5E1914] flex flex-col items-center justify-center p-6 text-center">
<div className="max-w-3xl mx-auto w-full flex flex-col items-center">
<h2 className="font-serif-en text-4xl md:text-6xl tracking-tight mb-4 font-medium">
            A New Beginning
            <br/>
<span className="italic text-[#D4AF37]">of Forever</span>
</h2>
<div className="my-8 py-4 border-y border-[#5E1914]/10 w-full max-w-md">
<p className="font-serif-en text-2xl md:text-3xl tracking-tight text-[#5E1914] font-medium">
              19 April 2026
            </p>
</div>

<div className="grid grid-cols-4 gap-3 md:gap-6 mb-12 w-full max-w-lg">
<div className="flex flex-col items-center p-4 border border-[#5E1914]/10 rounded-2xl bg-white/50 backdrop-blur-sm">
<span className="text-3xl md:text-4xl font-serif-en tracking-tight font-medium text-[#5E1914]" id="days">
                00
              </span>
<span className="text-xs uppercase tracking-widest text-[#5E1914]/60 mt-1">
                Days
              </span>
</div>
<div className="flex flex-col items-center p-4 border border-[#5E1914]/10 rounded-2xl bg-white/50 backdrop-blur-sm">
<span className="text-3xl md:text-4xl font-serif-en tracking-tight font-medium text-[#5E1914]" id="hours">
                00
              </span>
<span className="text-xs uppercase tracking-widest text-[#5E1914]/60 mt-1">
                Hrs
              </span>
</div>
<div className="flex flex-col items-center p-4 border border-[#5E1914]/10 rounded-2xl bg-white/50 backdrop-blur-sm">
<span className="text-3xl md:text-4xl font-serif-en tracking-tight font-medium text-[#5E1914]" id="minutes">
                00
              </span>
<span className="text-xs uppercase tracking-widest text-[#5E1914]/60 mt-1">
                Mins
              </span>
</div>
<div className="flex flex-col items-center p-4 border border-[#5E1914]/10 rounded-2xl bg-white/50 backdrop-blur-sm">
<span className="text-3xl md:text-4xl font-serif-en tracking-tight font-medium text-[#5E1914]" id="seconds">
                00
              </span>
<span className="text-xs uppercase tracking-widest text-[#5E1914]/60 mt-1">
                Secs
              </span>
</div>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-[#5E1914]/20 flex items-center justify-center text-[#5E1914] transition-all hover:bg-[#5E1914]/5" onclick="prevSlide()">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="px-8 py-3 rounded-full bg-[#5E1914] text-[#FAF3E0] text-xs uppercase tracking-widest transition-all hover:bg-[#3A0F0C]" onclick="nextSlide()">
              Continue
            </button>
</div>
</div>
</div>

<div className="slide bg-[#FAF3E0] text-[#5E1914] flex flex-col items-center justify-center p-6">
<div className="w-full max-w-5xl h-[85vh] flex flex-col">
<h2 className="font-serif-en text-3xl md:text-5xl tracking-tight text-center mb-8 font-medium">
            Wedding Itinerary
          </h2>
<div className="flex-1 overflow-y-auto no-scrollbar relative px-2">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
<div className="bg-[#5E1914]/5 border border-[#D4AF37]/30 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] group">
<div className="w-12 h-12 mx-auto rounded-full bg-[#5E1914] flex items-center justify-center mb-4 text-[#D4AF37]">
<iconify-icon height="24" icon="solar:rings-linear" width="24"></iconify-icon>
</div>
<h3 className="font-hindi text-xl font-medium tracking-tight mb-2">
                  सगाई समारोह
                </h3>
<span className="font-serif-en text-base tracking-tight text-[#D4AF37]">
                  10 April 2026
                </span>
</div>
<div className="bg-[#5E1914]/5 border border-[#D4AF37]/30 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] group">
<div className="w-12 h-12 mx-auto rounded-full bg-[#5E1914] flex items-center justify-center mb-4 text-[#D4AF37]">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="font-hindi text-xl font-medium tracking-tight mb-2">
                  तिलक समारोह
                </h3>
<span className="font-serif-en text-base tracking-tight text-[#D4AF37]">
                  12 April 2026
                </span>
</div>
<div className="bg-[#5E1914]/5 border border-[#D4AF37]/30 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] group">
<div className="w-12 h-12 mx-auto rounded-full bg-[#5E1914] flex items-center justify-center mb-4 text-[#D4AF37]">
<iconify-icon height="24" icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="font-hindi text-xl font-medium tracking-tight mb-2">
                  मगरमाटी मंडप
                </h3>
<span className="font-serif-en text-base tracking-tight text-[#D4AF37]">
                  16 April 2026
                </span>
</div>
<div className="bg-[#5E1914]/5 border border-[#D4AF37]/30 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] group">
<div className="w-12 h-12 mx-auto rounded-full bg-[#5E1914] flex items-center justify-center mb-4 text-[#D4AF37]">
<iconify-icon height="24" icon="solar:sun-linear" width="24"></iconify-icon>
</div>
<h3 className="font-hindi text-xl font-medium tracking-tight mb-2">
                  मातृका पूजन एवं हल्दी
                </h3>
<span className="font-serif-en text-base tracking-tight text-[#D4AF37]">
                  18 April 2026
                </span>
</div>
<div className="bg-[#5E1914]/5 border border-[#D4AF37]/30 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] group">
<div className="w-12 h-12 mx-auto rounded-full bg-[#5E1914] flex items-center justify-center mb-4 text-[#D4AF37]">
<iconify-icon height="24" icon="solar:music-library-2-linear" width="24"></iconify-icon>
</div>
<h3 className="font-hindi text-xl font-medium tracking-tight mb-2">
                  बारात आगमन
                </h3>
<span className="font-serif-en text-base tracking-tight text-[#D4AF37]">
                  19 April 2026
                </span>
</div>
<div className="bg-[#5E1914]/5 border border-[#D4AF37]/30 rounded-2xl p-6 text-center hover:-translate-y-2 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] group">
<div className="w-12 h-12 mx-auto rounded-full bg-[#5E1914] flex items-center justify-center mb-4 text-[#D4AF37]">
<iconify-icon height="24" icon="solar:moon-stars-linear" width="24"></iconify-icon>
</div>
<h3 className="font-hindi text-xl font-medium tracking-tight mb-2">
                  विदाई
                </h3>
<span className="font-serif-en text-base tracking-tight text-[#D4AF37]">
                  20 April 2026
                </span>
</div>
</div>
</div>
<div className="flex justify-center gap-4 mt-6 pt-6 border-t border-[#5E1914]/10">
<button className="w-12 h-12 rounded-full border border-[#5E1914]/20 flex items-center justify-center text-[#5E1914] transition-all hover:bg-[#5E1914]/5" onclick="prevSlide()">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="glow-btn px-8 py-3 rounded-full bg-[#5E1914] text-[#FAF3E0] text-xs uppercase tracking-widest transition-all hover:bg-[#3A0F0C]" onclick="nextSlide()">
              Next
            </button>
</div>
</div>
</div>

<div className="slide bg-[#5E1914] text-[#FAF3E0] flex flex-col items-center justify-center p-6 text-center">
<div className="pattern-overlay"></div>
<div className="relative z-10 max-w-3xl mx-auto w-full flex flex-col items-center">
<iconify-icon className="text-[#D4AF37] mb-6" height="48" icon="solar:map-point-linear" width="48"></iconify-icon>
<h2 className="font-serif-en text-3xl md:text-5xl tracking-tight mb-6 font-medium">
            The Venue
          </h2>
<p className="text-lg md:text-2xl font-serif-en tracking-tight mb-12 px-4 py-6 border border-[#D4AF37]/30 rounded-2xl bg-[#3A0F0C]/50 backdrop-blur-md">
            Rampur Panchayat Malahdu Pali
            <br/>
<span className="text-[#D4AF37] text-base md:text-xl mt-2 inline-block">
              at Thakur Home
            </span>
</p>

<div className="w-full h-64 md:h-80 bg-[#FAF3E0]/5 rounded-2xl border border-[#FAF3E0]/10 flex flex-col items-center justify-center mb-12 relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-[#3A0F0C]/40 group-hover:bg-[#3A0F0C]/20 transition-colors"></div>
<iconify-icon className="text-[#D4AF37] mb-3 relative z-10" height="32" icon="solar:routing-2-linear" width="32"></iconify-icon>
<span className="text-xs uppercase tracking-widest text-[#FAF3E0]/80 relative z-10">
              View on Map
            </span>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] transition-all hover:bg-[#D4AF37]/10" onclick="prevSlide()">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="px-8 py-3 rounded-full border border-[#D4AF37] text-[#D4AF37] text-xs uppercase tracking-widest transition-all hover:bg-[#D4AF37] hover:text-[#5E1914]" onclick="nextSlide()">
              Our Story
            </button>
</div>
</div>
</div>

<div className="slide bg-[#FAF3E0] text-[#5E1914] flex flex-col items-center justify-center p-6 text-center">
<div className="max-w-2xl mx-auto w-full flex flex-col items-center relative">
<iconify-icon className="text-[#D4AF37]/20 absolute -top-12 -left-4 md:-left-12" height="64" icon="solar:quote-left-linear" width="64"></iconify-icon>
<p className="font-hindi text-xl md:text-3xl leading-relaxed font-medium tracking-tight mb-8 relative z-10">
            “दो दिल, दो परिवार और एक खूबसूरत सफर की शुरुआत। वर्षा और रवि अपने
            जीवन के इस नए अध्याय में आपके आशीर्वाद और प्यार की अपेक्षा करते
            हैं।”
          </p>
<div className="w-24 h-px bg-[#D4AF37] mb-12"></div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-[#5E1914]/20 flex items-center justify-center text-[#5E1914] transition-all hover:bg-[#5E1914]/5" onclick="prevSlide()">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="px-8 py-3 rounded-full bg-[#5E1914] text-[#FAF3E0] text-xs uppercase tracking-widest transition-all hover:bg-[#3A0F0C]" onclick="nextSlide()">
              View Gallery
            </button>
</div>
</div>
</div>

<div className="slide bg-[#FAF3E0] text-[#5E1914] flex flex-col items-center justify-center p-6">
<div className="w-full flex flex-col h-full justify-center max-w-7xl mx-auto py-12">
<div className="flex justify-center items-end mb-12">
<h2 className="font-serif-en text-3xl md:text-5xl tracking-tight font-medium">
              Gallery
            </h2>
</div>
<div className="w-full overflow-hidden relative py-4">
<div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#FAF3E0] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#FAF3E0] to-transparent z-10"></div>
<div className="gallery-track">
<div className="w-64 h-80 shrink-0 bg-[#5E1914]/10 rounded-2xl overflow-hidden group relative">
<div className="w-full h-full bg-[#5E1914]/20 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-[#5E1914]/50" height="32" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-80 shrink-0 bg-[#5E1914]/10 rounded-2xl overflow-hidden group relative">
<div className="w-full h-full bg-[#5E1914]/20 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-[#5E1914]/50" height="32" icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-80 shrink-0 bg-[#5E1914]/10 rounded-2xl overflow-hidden group relative">
<div className="w-full h-full bg-[#5E1914]/20 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-[#5E1914]/50" height="32" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-80 shrink-0 bg-[#5E1914]/10 rounded-2xl overflow-hidden group relative">
<div className="w-full h-full bg-[#5E1914]/20 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-[#5E1914]/50" height="32" icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-80 shrink-0 bg-[#5E1914]/10 rounded-2xl overflow-hidden group relative">
<div className="w-full h-full bg-[#5E1914]/20 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-[#5E1914]/50" height="32" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-80 shrink-0 bg-[#5E1914]/10 rounded-2xl overflow-hidden group relative">
<div className="w-full h-full bg-[#5E1914]/20 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-[#5E1914]/50" height="32" icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-80 shrink-0 bg-[#5E1914]/10 rounded-2xl overflow-hidden group relative">
<div className="w-full h-full bg-[#5E1914]/20 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-[#5E1914]/50" height="32" icon="solar:camera-linear" width="32"></iconify-icon>
</div>
</div>
<div className="w-64 h-80 shrink-0 bg-[#5E1914]/10 rounded-2xl overflow-hidden group relative">
<div className="w-full h-full bg-[#5E1914]/20 group-hover:scale-110 transition-transform duration-700 flex items-center justify-center">
<iconify-icon className="text-[#5E1914]/50" height="32" icon="solar:gallery-linear" width="32"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex justify-center gap-4 mt-12">
<button className="w-12 h-12 rounded-full border border-[#5E1914]/20 flex items-center justify-center text-[#5E1914] transition-all hover:bg-[#5E1914]/5" onclick="prevSlide()">
<iconify-icon height="20" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="glow-btn px-8 py-3 rounded-full bg-[#5E1914] text-[#FAF3E0] text-xs uppercase tracking-widest transition-all hover:bg-[#3A0F0C]" onclick="nextSlide()">
              Contact Details
            </button>
</div>
</div>
</div>

<div className="slide bg-[#5E1914] text-[#FAF3E0] flex flex-col items-center justify-center p-6 text-center">
<div className="pattern-overlay"></div>
<div className="relative z-10 max-w-md mx-auto w-full flex flex-col items-center">
<div className="w-16 h-16 rounded-full border border-[#D4AF37]/30 flex items-center justify-center mb-8 bg-[#3A0F0C]/50">
<iconify-icon className="text-[#D4AF37]" height="28" icon="solar:phone-calling-linear" width="28"></iconify-icon>
</div>
<h2 className="font-serif-en text-3xl md:text-5xl tracking-tight mb-10 font-medium">
            Join Us
          </h2>
<div className="flex flex-col gap-6 w-full mb-12">
<a className="flex items-center justify-between p-4 border border-[#D4AF37]/20 rounded-xl hover:bg-[#D4AF37]/5 transition-colors group" href="tel:9098435002">
<span className="text-sm uppercase tracking-widest text-[#FAF3E0]/60">
                RSVP
              </span>
<span className="font-serif-en text-xl tracking-tight text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                +91 9098435002
              </span>
</a>
<a className="flex items-center justify-between p-4 border border-[#D4AF37]/20 rounded-xl hover:bg-[#D4AF37]/5 transition-colors group" href="tel:7489008748">
<span className="text-sm uppercase tracking-widest text-[#FAF3E0]/60">
                RSVP
              </span>
<span className="font-serif-en text-xl tracking-tight text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                +91 7489008748
              </span>
</a>
<a className="flex items-center justify-between p-4 border border-[#D4AF37]/20 rounded-xl hover:bg-[#D4AF37]/5 transition-colors group" href="tel:9131812878">
<span className="text-sm uppercase tracking-widest text-[#FAF3E0]/60">
                RSVP
              </span>
<span className="font-serif-en text-xl tracking-tight text-[#D4AF37] group-hover:translate-x-1 transition-transform">
                +91 9131812878
              </span>
</a>
</div>
<p className="font-hindi text-lg text-[#D4AF37] mb-8 font-medium">
            धन्यवाद
          </p>
<button className="flex items-center gap-2 px-8 py-3 rounded-full border border-[#D4AF37]/50 text-[#D4AF37] text-xs uppercase tracking-widest transition-all hover:bg-[#D4AF37] hover:text-[#5E1914]" onclick="goToSlide(0)">
<iconify-icon height="16" icon="solar:restart-linear" width="16"></iconify-icon>
<span>Back to Start</span>
</button>
</div>
</div>
</div>

<div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 hidden md:flex" id="nav-dots"></div>

    </>
  );
}
