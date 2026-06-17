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



      // 1. SYSTEM CLOCK / REC TIME PULSATOR
      let seconds = 0;
      setInterval(() => {
          seconds++;
          const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
          const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
          const secs = String(seconds % 60).padStart(2, '0');
          document.getElementById('rec-time').innerText = `${hrs}:${mins}:${secs}`;
      }, 1000);

      // 2. GENERATIVE HERO WAVEFORM CANVAS
      const canvas = document.getElementById('hero-waveform');
      const ctx = canvas.getContext('2d');
      let width, height;
      let animationFrameId;

      function resizeCanvas() {
          width = canvas.width = canvas.parentElement.clientWidth;
          height = canvas.height = canvas.parentElement.clientHeight;
      }
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();

      let time = 0;
      let scrollVelocity = 0;
      let lastScrollY = window.scrollY;

      // Monitor scroll velocity to expand the waveform dynamically
      window.addEventListener('scroll', () => {
          const currentScroll = window.scrollY;
          scrollVelocity = Math.abs(currentScroll - lastScrollY);
          lastScrollY = currentScroll;
      });

      function drawWaveform() {
          ctx.clearRect(0, 0, width, height);

          // Decelerating velocity factor
          scrollVelocity *= 0.95;

          // Waveform parameters
          const amplitude = 40 + (scrollVelocity * 4);
          const frequency = 0.003;

          // Draw Layer 1: Cool Plasma Cyan Wave
          ctx.strokeStyle = 'rgba(125, 249, 255, 0.2)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          for (let x = 0; x < width; x += 5) {
              const y = (height / 2) + Math.sin(x * frequency + time) * amplitude * Math.cos(x * 0.001);
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
          }
          ctx.stroke();

          // Draw Layer 2: Molten Amber Wave
          ctx.strokeStyle = 'rgba(255, 122, 26, 0.35)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          for (let x = 0; x < width; x += 5) {
              const y = (height / 2.05) + Math.cos(x * (frequency * 1.5) - time) * (amplitude * 1.2) * Math.sin(x * 0.0008);
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
          }
          ctx.stroke();

          time += 0.015;
          animationFrameId = requestAnimationFrame(drawWaveform);
      }
      drawWaveform();

      // 3. INTERACTIVE WAVEFORM SANDBOX GENERATION
      let timbreValue = 0.42;
      let densityValue = 0.78;
      let vectorValue = 0.15;

      const amberWavePath = document.getElementById('amber-wave');
      const cyanWavePath = document.getElementById('cyan-wave');

      function updateMockWaveforms() {
          let amberD = "M0,100 ";
          let cyanD = "M0,100 ";

          for (let i = 0; i <= 800; i += 10) {
              // Compose multi-phase equations modified by sliders
              const angle = (i / 800) * Math.PI * 8;
              const wave1 = Math.sin(angle * timbreValue) * 40 * densityValue;
              const wave2 = Math.cos(angle * 2.5 * vectorValue) * 20;
              const finalY = 100 + wave1 + wave2;

              amberD += `L${i},${finalY} `;

              // Subharmonic dashline wave
              const finalY2 = 100 + Math.sin((angle + Math.PI) * (timbreValue * 1.5)) * 30 * (1 - vectorValue);
              cyanD += `L${i},${finalY2} `;
          }

          amberWavePath.setAttribute('d', amberD);
          cyanWavePath.setAttribute('d', cyanD);
      }

      // Initialize Waveform
      updateMockWaveforms();

      // Interactive Sliders Event Processing
      function setupSlider(sliderId, barId, thumbId, valId, min, max, initial, updateFn) {
          const bg = document.getElementById(sliderId);
          const bar = document.getElementById(barId);
          const thumb = document.getElementById(thumbId);
          const valSpan = document.getElementById(valId);

          function updateSliderPosition(clientX) {
              const rect = bg.getBoundingClientRect();
              let pct = (clientX - rect.left) / rect.width;
              pct = Math.max(0, Math.min(1, pct));

              bar.style.width = `${pct * 100}%`;
              thumb.style.left = `calc(${pct * 100}% - 6px)`;

              const finalVal = (pct * (max - min) + min).toFixed(2);
              valSpan.innerText = finalVal;

              updateFn(parseFloat(finalVal));
          }

          bg.addEventListener('mousedown', (e) => {
              updateSliderPosition(e.clientX);

              function onMouseMove(moveEvent) {
                  updateSliderPosition(moveEvent.clientX);
              }

              function onMouseUp() {
                  window.removeEventListener('mousemove', onMouseMove);
                  window.removeEventListener('mouseup', onMouseUp);
              }

              window.addEventListener('mousemove', onMouseMove);
              window.addEventListener('mouseup', onMouseUp);
          });
      }

      setupSlider('timbre-slider-bg', 'timbre-slider-bar', 'timbre-thumb', 'timbre-val', 0.1, 1.5, timbreValue, (v) => {
          timbreValue = v;
          document.getElementById('scrub-line').style.left = `${(v / 1.5) * 100}%`;
          document.getElementById('scrub-line').querySelector('span').innerText = `NODE_X_${v.toFixed(2)}`;
          updateMockWaveforms();
      });

      setupSlider('density-slider-bg', 'density-slider-bar', 'density-thumb', 'density-val', 0.2, 2.0, densityValue, (v) => {
          densityValue = v;
          updateMockWaveforms();
      });

      setupSlider('vector-slider-bg', 'vector-slider-bar', 'vector-thumb', 'vector-val', 0.05, 1.0, vectorValue, (v) => {
          vectorValue = v;
          updateMockWaveforms();
      });

      // Toggle Actions
      const binauralToggle = document.getElementById('binaural-toggle');
      const binauralDot = document.getElementById('binaural-dot');
      let binauralActive = false;
      binauralToggle.addEventListener('click', () => {
          binauralActive = !binauralActive;
          binauralDot.style.transform = binauralActive ? 'translateX(1rem)' : 'translateX(0)';
          binauralDot.style.backgroundColor = binauralActive ? '#7DF9FF' : '#FF7A1A';
      });

      const residueToggle = document.getElementById('residue-toggle');
      const residueDot = document.getElementById('residue-dot');
      let residueActive = true;
      residueToggle.addEventListener('click', () => {
          residueActive = !residueActive;
          residueDot.style.transform = residueActive ? 'translateX(1rem)' : 'translateX(0)';
          residueDot.style.backgroundColor = residueActive ? '#7DF9FF' : '#FF7A1A';
      });

      // 4. EMBEDDED REALTIME AUDIO DRONE (WEB AUDIO API EASTER EGG)
      let audioCtx;
      function playDrone() {
          try {
              // Initialize Web Audio API on click
              if (!audioCtx) {
                  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
              }

              if (audioCtx.state === 'suspended') {
                  audioCtx.resume();
              }

              // Complex multi-node deep cinematic drone
              const osc1 = audioCtx.createOscillator();
              const osc2 = audioCtx.createOscillator();
              const filter = audioCtx.createBiquadFilter();
              const gainNode = audioCtx.createGain();

              osc1.type = 'sawtooth';
              osc2.type = 'triangle';

              // Pitch modulation (cinematic deep sub bass vector)
              osc1.frequency.setValueAtTime(55, audioCtx.currentTime); // Low A1
              osc2.frequency.setValueAtTime(55.4, audioCtx.currentTime); // Detuned relative

              filter.type = 'lowpass';
              filter.frequency.setValueAtTime(90, audioCtx.currentTime);
              filter.Q.setValueAtTime(5, audioCtx.currentTime);

              // Attack Decay Sustain Release (ADSR) envelope for drone simulation
              gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
              gainNode.gain.linearRampToValueAtTime(0.3, audioCtx.currentTime + 1.2); // Envelope Attack
              gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 4.0); // Release

              osc1.connect(filter);
              osc2.connect(filter);
              filter.connect(gainNode);
              gainNode.connect(audioCtx.destination);

              osc1.start();
              osc2.start();

              osc1.stop(audioCtx.currentTime + 4.2);
              osc2.stop(audioCtx.currentTime + 4.2);

          } catch (err) {
              console.warn("Web Audio API not supported on this framework/browser configuration", err);
          }
      }

      // Also bind the interactive soundwave itself to test triggers
      document.getElementById('demo').querySelector('svg').addEventListener('click', playDrone);
    


      (() => {
        const updateScrollEffects = () => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          const progress = maxScroll > 0 ? (scrollTop / maxScroll) * 100 : 0;
          document.body.style.setProperty('--scroll-progress', `${progress}%`);
        };
        updateScrollEffects();
        window.addEventListener('scroll', updateScrollEffects, { passive: true });

        const revealTargets = document.querySelectorAll('#target .grid > div, #features .grid > div, #demo .grid > div, #pricing .space-y-6 > div, #target h2, #features h2, #demo h2, #pricing h2');
        revealTargets.forEach((el, index) => {
          el.classList.add('reveal-elem');
          el.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
        });

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });

        revealTargets.forEach((el) => observer.observe(el));
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
      

<div className="fixed inset-0 pointer-events-none z-0 bg-[#121214]">
<img alt="Airline Background" className="absolute inset-0 w-full h-full object-cover opacity-25 grayscale" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&amp;fit=crop&amp;w=2074&amp;q=80"/>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#f5f1e803_1px,transparent_1px),linear-gradient(to_bottom,#f5f1e803_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
</div>


<section className="min-h-screen flex flex-col overflow-hidden md:px-12 z-10 font-fredoka w-full border-[#F5F1E8]/10 border-b pt-6 pr-4 pb-6 pl-4 relative justify-between">

<div className="absolute inset-x-0 top-1/4 bottom-1/4 flex flex-col justify-between pointer-events-none opacity-20">
<div className="w-full h-[1px] bg-[#F5F1E8]/30"></div>
<div className="w-full h-[1px] bg-[#F5F1E8]/30"></div>
<div className="w-full h-[1px] bg-[#F5F1E8]/30"></div>
<div className="w-full h-[1px] bg-[#F5F1E8]/30"></div>
</div>

<canvas className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen z-0" height="686" id="hero-waveform" width="1041"></canvas>

<header className="relative w-full flex items-center justify-between z-20">
<a className="logo group flex items-center no-underline" href="#">
<img alt="JEJUAIr" className="block h-[54px] w-auto transition-all duration-300 ease-out group-hover:-translate-y-[1px] group-hover:scale-105 group-hover:drop-shadow-[0_8px_16px_rgba(255,80,0,0.16)] filter" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
<nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#F5F1E8]/60">
<a className="hover:text-[#FF7A1A] transition-colors duration-300" href="#service-intro">
            서비스 소개
          </a>
<a className="hover:text-[#FF7A1A] transition-colors duration-300" href="#process">
            프로세스
          </a>
<a className="hover:text-[#FF7A1A] transition-colors duration-300" href="#core-values">
            핵심 가치
          </a>
<a className="hover:text-[#FF7A1A] transition-colors duration-300" href="#reviews">
            기대평
          </a>
<a className="hover:text-[#FF7A1A] transition-colors duration-300" href="#faq">
            FAQ
          </a>
</nav>
</header>

<main className="relative my-auto py-16 flex flex-col justify-center items-start z-10 max-w-5xl">
<div className="uppercase leading-relaxed break-keep text-xs font-bold text-[#FF7A1A] tracking-normal font-fredoka max-w-2xl mb-6">
          떠나고는 싶지만 일정 짜기는 막막하신가요?
          <br/>
          포털 검색과 리뷰 지옥에서 벗어나, 오직 여행의 설렘에만 집중해보세요.
        </div>
<div className="reveal-text overflow-hidden mb-12">
<h1 className="leading-[1.1] break-keep md:text-7xl lg:text-6xl text-5xl font-bold text-[#F5F1E8] tracking-normal font-fredoka">
            계획은 우리가 할게요,
            <br/>
<span className="font-bold text-[#F5F1E8]/90 font-fredoka">
              당신은 설렘만 가져가세요.
            </span>
</h1>
</div>
<div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 w-full">
<div className="">
<a className="group inline-flex items-center justify-center bg-[#ff5000] text-[#ffffff] px-[36px] py-[16px] text-[1.1rem] font-bold rounded-[30px] no-underline transition-all duration-300 ease-in-out shadow-[0_4px_14px_rgba(255,80,0,0.3)] border-none cursor-pointer hover:bg-[#e64800] btn-shine-effect" href="#" onclick="alert('JEJUAIr 초개인화 서비스 오픈 알림 신청이 완료되었습니다! 조금만 기다려주세요.'); return false;">
              설렘 시작하기
              <iconify-icon className="ml-2 text-base transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="leading-relaxed break-keep text-sm text-[#F5F1E8]/80 font-fredoka max-w-xs">
            떠나기 전부터 시작된다.
            <br/>
            어디로 갈지 고르는 첫 순간,
            <br/>
            여행의 설렘을 함께 나눈다.
          </div>
</div>
</main>

</section>

<section className="md:px-12 z-10 font-fredoka border-[#F5F1E8]/10 border-b pt-20 pr-4 pb-20 pl-4 relative bg-[#18181A]" id="target">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
<div className="w-full lg:w-1/3">
<h2 className="break-keep leading-tight md:text-4xl text-2xl font-bold text-[#F5F1E8] tracking-tight font-fredoka">
            혹시 이런 이유로
            <br/>
            여행을 시작하기도 전에
            <br/>
            지치고 계시나요?
          </h2>
</div>
<div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="border border-[#F5F1E8]/10 p-6 hover:border-[#FF7A1A]/50 transition-colors duration-300 bg-[#121214]/50">
<h3 className="text-[#FF7A1A] text-xs tracking-widest mb-4 font-fredoka">
              바쁜 직장인
            </h3>
<p className="leading-relaxed break-keep text-sm text-[#F5F1E8]/60 font-fredoka">
              여행은 가고 싶지만, 퇴근 후 맛집과 숙소를 검색하며 에너지를 쏟을
              시간이 부족함
            </p>
</div>
<div className="border border-[#F5F1E8]/10 p-6 hover:border-[#FF7A1A]/50 transition-colors duration-300 bg-[#121214]/50">
<h3 className="text-[#FF7A1A] text-xs tracking-widest mb-4 font-fredoka">
              선택 장애 여행자
            </h3>
<p className="leading-relaxed break-keep text-sm text-[#F5F1E8]/60 font-fredoka">
              넘쳐나는 광고성 정보와 수많은 리뷰 속에서 진짜 가야 할 곳을
              고르기가 피로함
            </p>
</div>
<div className="border border-[#F5F1E8]/10 p-6 hover:border-[#FF7A1A]/50 transition-colors duration-300 bg-[#121214]/50">
<h3 className="text-[#FF7A1A] text-xs tracking-widest mb-4 font-fredoka">
              개성 있는 여행자
            </h3>
<p className="leading-relaxed break-keep text-sm text-[#F5F1E8]/60 font-fredoka">
              흔한 패키지나 뻔한 추천 코스가 아니라, 내 취향이 온전히 반영된
              하루를 보내고 싶음
            </p>
</div>
</div>
</div>
</section>

<section className="border-b border-[#F5F1E8]/10 px-4 md:px-12 py-24 z-10 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="text-xs text-[#FF7A1A] uppercase tracking-widest mb-8 font-fredoka">
          // 서비스 소개
        </div>
<h2 className="md:text-5xl break-keep text-3xl font-semibold text-[#F5F1E8] tracking-tight mb-16 font-fredoka">
          나보다 내 취향을 더 잘 아는 스마트 여행 메이트, JEJUAIr
        </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#F5F1E8]/10">
<div className="py-8 lg:py-0 lg:px-8 first:pl-0 last:pr-0 flex flex-col min-h-[200px]">
<h3 className="text-xl font-light text-[#F5F1E8] tracking-tight font-fredoka mb-4">
              취향 저격 일정 추천
            </h3>
<p className="leading-relaxed break-keep text-sm text-[#F5F1E8]/60 font-fredoka">
              복잡한 조건 입력 없이, 몇 가지 카드 선택만으로 내 마음에 쏙 드는
              여행 계획을 마주합니다.
            </p>
</div>
<div className="py-8 lg:py-0 lg:px-8 flex flex-col min-h-[200px]">
<h3 className="text-xl font-light text-[#F5F1E8] mb-4 tracking-tight font-fredoka">
              여행 전담 큐레이터
            </h3>
<p className="text-sm text-[#F5F1E8]/60 leading-relaxed break-keep font-fredoka">
              수많은 블로그와 SNS를 헤매지 않도록, 꼭 필요한 정보만 선별하여
              제안합니다.
            </p>
</div>
<div className="py-8 lg:py-0 lg:px-8 flex flex-col min-h-[200px]">
<h3 className="text-xl font-light text-[#F5F1E8] mb-4 tracking-tight font-fredoka">
              나다운 여행의 완성
            </h3>
<p className="text-sm text-[#F5F1E8]/60 leading-relaxed break-keep font-fredoka">
              남들의 추천 코스를 그대로 따르는 것이 아닌, 나만의 속도와 취향에
              맞춘 여정을 선사합니다.
            </p>
</div>
</div>
</div>
</section>

<section className="border-b border-[#F5F1E8]/10 px-4 md:px-12 py-24 z-10 relative" id="demo">
<div className="max-w-7xl mx-auto">
<div className="text-xs text-[#FF7A1A] uppercase tracking-widest mb-4 font-fredoka">
          // 진행 방식
        </div>
<div className="mb-16">
<h2 className="break-keep md:text-5xl text-3xl font-bold text-[#F5F1E8] tracking-tight font-fredoka">
            단 몇 번의 터치로 완성되는 나만의 여행
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-[#222224] rounded-[32px] p-8 md:p-10 relative overflow-hidden group transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full">
<div className="inline-flex items-center justify-center px-4 py-2 bg-[#FF7A1A]/10 text-[#FF7A1A] text-[11px] font-bold rounded-full mb-8 tracking-widest self-start font-fredoka">
              STEP 01
            </div>
<h3 className="md:text-3xl leading-snug break-keep text-2xl font-bold text-[#F5F1E8] font-fredoka z-10 mb-4 relative">
              내 취향 카드 선택하기
            </h3>
<p className="leading-relaxed break-keep text-base text-[#F5F1E8]/60 font-fredoka z-10 relative">
              가볍게 카드를 고르며 내가 선호하는 여행 스타일과 분위기를
              알려주세요.
            </p>
<iconify-icon className="absolute -bottom-4 -right-4 text-8xl text-[#F5F1E8]/5 group-hover:text-[#F5F1E8]/10 transition-colors duration-300 z-0" icon="solar:gallery-bold-duotone"></iconify-icon>
</div>
<div className="bg-[#222224] rounded-[32px] p-8 md:p-10 relative overflow-hidden group transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full">
<div className="inline-flex items-center justify-center px-4 py-2 bg-[#FF7A1A]/10 text-[#FF7A1A] text-[11px] font-bold rounded-full mb-8 tracking-widest self-start font-fredoka">
              STEP 02
            </div>
<h3 className="md:text-3xl leading-snug break-keep z-10 text-2xl font-bold text-[#F5F1E8] font-fredoka mb-4 relative">
              AI 나만을 위한 매칭
            </h3>
<p className="leading-relaxed break-keep text-base text-[#F5F1E8]/60 font-fredoka z-10 relative">
              JEJUAIr의 AI가 당신의 선택을 분석하여 가장 알맞은 장소와 동선을
              조합합니다.
            </p>
<iconify-icon className="absolute -bottom-4 -right-4 text-8xl text-[#F5F1E8]/5 group-hover:text-[#F5F1E8]/10 transition-colors duration-300 z-0" icon="solar:magic-stick-3-bold-duotone"></iconify-icon>
</div>
<div className="bg-[#222224] rounded-[32px] p-8 md:p-10 relative overflow-hidden group transition-transform duration-300 hover:-translate-y-2 flex flex-col h-full">
<div className="inline-flex items-center justify-center px-4 py-2 bg-[#FF7A1A]/10 text-[#FF7A1A] text-[11px] font-bold rounded-full mb-8 tracking-widest self-start font-fredoka">
              STEP 03
            </div>
<h3 className="md:text-3xl leading-snug break-keep text-2xl font-bold text-[#F5F1E8] font-fredoka z-10 mb-4 relative">
              나만의 맞춤 일정 확인
            </h3>
<p className="leading-relaxed break-keep text-base text-[#F5F1E8]/60 font-fredoka z-10 relative">
              검색할 필요 없이, 동선부터 스케줄까지 한눈에 확인하고 가벼운
              마음으로 떠납니다.
            </p>
<iconify-icon className="absolute -bottom-4 -right-4 text-8xl text-[#F5F1E8]/5 group-hover:text-[#F5F1E8]/10 transition-colors duration-300 z-0" icon="solar:map-bold-duotone"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="border-b border-[#F5F1E8]/10 px-4 md:px-12 py-32 z-10 relative overflow-hidden bg-[#18181A]">

<div className="absolute -right-16 -bottom-16 text-[24rem] text-[#F5F1E8]/5 pointer-events-none leading-none select-none font-fredoka">
        Ω
      </div>
<div className="max-w-5xl mx-auto flex flex-col items-start">
<div className="text-xs text-[#FF7A1A] uppercase tracking-[0.2em] mb-12">
          // 04 — THE PHILOSOPHY
        </div>
<blockquote className="leading-[1.05] md:text-5xl text-4xl font-bold text-[#F5F1E8]/95 tracking-tight mb-8 font-fredoka">
          “더 넓은 하늘을 향한 도전으로 더 많은 사람들과
          <span className="text-[#FF7A1A]">행복</span>
          한 여행의 경험을 나눈다.”
        </blockquote>
</div>
</section>

<section className="border-b border-[#F5F1E8]/10 px-4 md:px-12 py-24 z-10 relative" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="max-w-4xl mx-auto">
<div className="text-xs text-[#FF7A1A] uppercase tracking-widest mb-4 text-center font-fredoka">
            // FAQ
          </div>
<h2 className="break-keep md:text-5xl text-3xl font-bold text-[#F5F1E8] tracking-tight text-center mb-16 font-fredoka">
            자주 묻는 질문을 확인해보세요
          </h2>
<div className="space-y-6">
<div className="border border-[#F5F1E8]/10 p-6 md:p-8 bg-[#18181A]">
<h3 className="text-lg text-[#F5F1E8] mb-4 flex gap-4 font-fredoka">
<span className="text-[#FF7A1A] font-medium">Q.</span>
<span className="break-keep">
                  AI 일정 추천은 어떤 원리로 이루어지나요?
                </span>
</h3>
<div className="text-sm text-[#F5F1E8]/60 leading-relaxed flex gap-4 break-keep font-fredoka">
<span className="text-[#F5F1E8]/30 font-medium">A.</span>
<span className="">
                  사용자가 선택한 취향 카드의 데이터와 여행 스타일 패턴을
                  분석하여, 개인의 성향에 가장 잘 맞는 장소와 최적의 이동 동선을
                  조합해 추천합니다.
                </span>
</div>
</div>
<div className="border border-[#F5F1E8]/10 p-6 md:p-8 bg-[#18181A]">
<h3 className="text-lg text-[#F5F1E8] mb-4 flex gap-4 font-fredoka">
<span className="text-[#FF7A1A] font-medium">Q.</span>
<span className="break-keep">
                  추천된 일정을 제 마음에 들게 직접 수정할 수도 있나요?
                </span>
</h3>
<div className="text-sm text-[#F5F1E8]/60 leading-relaxed flex gap-4 break-keep font-fredoka">
<span className="text-[#F5F1E8]/30 font-medium">A.</span>
<span className="">
                  네, 기본적으로 추천된 맞춤 일정 안에서 사용자의 선호에 맞춰
                  세부 사항을 조율하고 관리할 수 있도록 지원합니다.
                </span>
</div>
</div>
<div className="border border-[#F5F1E8]/10 p-6 md:p-8 bg-[#18181A]">
<h3 className="text-lg text-[#F5F1E8] mb-4 flex gap-4 font-fredoka">
<span className="text-[#FF7A1A] font-medium">Q.</span>
<span className="break-keep">
                  검색 앱이나 다른 가이드 서비스와 무엇이 다른가요?
                </span>
</h3>
<div className="text-sm text-[#F5F1E8]/60 leading-relaxed flex gap-4 break-keep font-fredoka">
<span className="text-[#F5F1E8]/30 font-medium">A.</span>
<span className="">
                  일일이 텍스트로 검색하고 비교하는 번거로움 없이, "빠르게",
                  "나답게", "믿을 수 있게" 직관적인 카드 선택만으로 나만의 AI
                  일정을 받아볼 수 있다는 점이 다릅니다.
                </span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-b border-[#F5F1E8]/10 px-4 md:px-12 py-32 z-10 relative text-center flex flex-col items-center justify-center bg-[#18181A]" id="closing">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<h2 className="break-keep leading-snug text-3xl font-bold text-[#F5F1E8] mb-10 tracking-wide md:text-4xl font-fredoka">
          여행을 준비하는 시간은 숙제나 노동이 아니라,
          <br/>
          그 자체로 이미 설레는 여행의 시작이어야 합니다.
        </h2>
<p className="text-sm md:text-base text-[#F5F1E8]/60 leading-relaxed break-keep mb-12 max-w-2xl font-fredoka">
          더 넓은 하늘을 향한 도전으로 더 많은 사람들과 행복한 여행의 경험을
          나눈다.
          <br/>
<br/>
          JEJUAIr 팀은 정보의 홍수 속에서 길을 잃은 여행자들이 다시금 온전한
          설렘을 되찾을 수 있도록 돕고자 합니다. 복잡한 탐색과 빽빽한 일정
          계획은 저희에게 맡겨두고, 당신은 오직 떠나기 전의 두근거림과 행복한
          상상만 가져가세요.
        </p>
<div className="text-xl font-black text-[#FF7A1A] tracking-normal mb-10 font-fredoka">
          지금, 나만의 설레는 여정을 시작해볼까요?
        </div>
<a className="group inline-flex items-center justify-center bg-[#ff5000] text-[#ffffff] px-[36px] py-[16px] text-[1.1rem] font-bold rounded-[30px] no-underline transition-all duration-300 ease-in-out shadow-[0_4px_14px_rgba(255,80,0,0.3)] border-none cursor-pointer hover:bg-[#e64800] btn-shine-effect" href="#" onclick="alert('JEJUAIr 초개인화 서비스 오픈 알림 신청이 완료되었습니다! 조금만 기다려주세요.'); return false;">
          설렘 시작하기
          <iconify-icon className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<footer className="relative border-t border-[#F5F1E8]/10 py-16 px-4 md:px-12 overflow-hidden bg-[#0F0F11]">
<div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10 pt-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-4">
<div className="space-y-4">
<h4 className="text-[#F5F1E8] font-medium mb-4 text-sm">서비스</h4>
<ul className="space-y-3 text-[13px] text-[#F5F1E8]/60">
<li>
<a className="hover:text-[#F5F1E8] transition-colors" href="#">
                  서비스 소개
                </a>
</li>
<li>
<a className="hover:text-[#F5F1E8] transition-colors" href="#">
                  맞춤 일정 추천
                </a>
</li>
<li>
<a className="hover:text-[#F5F1E8] transition-colors" href="#">
                  AI 큐레이션
                </a>
</li>
<li>
<a className="hover:text-[#F5F1E8] transition-colors" href="#">
                  여행 가이드
                </a>
</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-[#F5F1E8] font-medium mb-4 text-sm">고객지원</h4>
<ul className="space-y-3 text-[13px] text-[#F5F1E8]/60">
<li>
<a className="hover:text-[#F5F1E8] transition-colors" href="#">
                  자주 묻는 질문
                </a>
</li>
<li>
<a className="hover:text-[#F5F1E8] transition-colors" href="#">
                  1:1 문의
                </a>
</li>
<li>
<a className="hover:text-[#F5F1E8] transition-colors" href="#">
                  제휴 문의
                </a>
</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-[#F5F1E8] font-medium mb-4 text-sm">회사 소개</h4>
<ul className="space-y-3 text-[13px] text-[#F5F1E8]/60">
<li>
<a className="hover:text-[#F5F1E8] transition-colors" href="#">
                  JEJUAIr 팀
                </a>
</li>
<li>
<a className="hover:text-[#F5F1E8] transition-colors" href="#">
                  채용 안내
                </a>
</li>
<li>
<a className="hover:text-[#F5F1E8] transition-colors" href="#">
                  공지사항
                </a>
</li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-[#F5F1E8] font-medium mb-4 text-sm">정책</h4>
<ul className="space-y-3 text-[13px] text-[#F5F1E8]/60">
<li>
<a className="hover:text-[#F5F1E8] transition-colors" href="#">
                  이용약관
                </a>
</li>
<li>
<a className="hover:text-[#F5F1E8] transition-colors font-medium" href="#">
                  개인정보처리방침
                </a>
</li>
</ul>
</div>
</div>
<div className="w-full h-px bg-[#F5F1E8]/10 mt-4"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-8">
<div className="text-[13px] text-[#F5F1E8]/50 space-y-2 leading-relaxed">
<div className="text-xl font-medium tracking-tight text-[#F5F1E8] uppercase font-fredoka mb-4">
              JEJUAIr
            </div>
<p className="break-keep">
              상호명: JEJUAIr 팀  |  이메일: contact@jejuair-team.com
            </p>
<p className="break-keep">주소: 서울특별시 강서구 공항대로 310</p>
<p className="mt-6 text-[#F5F1E8]/30">
              © 2026 JEJUAIr. All rights reserved.
            </p>
</div>
<div className="flex items-center gap-4 text-[#F5F1E8]/50">
<a className="hover:text-[#F5F1E8] transition-colors p-2 bg-[#F5F1E8]/5 rounded-full" href="#">
<iconify-icon className="text-xl" icon="ic:baseline-facebook"></iconify-icon>
</a>
<a className="hover:text-[#F5F1E8] transition-colors p-2 bg-[#F5F1E8]/5 rounded-full" href="#">
<iconify-icon className="text-xl" icon="mdi:instagram"></iconify-icon>
</a>
<a className="hover:text-[#F5F1E8] transition-colors p-2 bg-[#F5F1E8]/5 rounded-full" href="#">
<iconify-icon className="text-xl" icon="mdi:youtube"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="absolute bottom-0 inset-x-0 h-1 bg-[#FF7A1A]"></div>
</footer>




    </>
  );
}
