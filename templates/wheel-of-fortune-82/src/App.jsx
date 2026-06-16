import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // --- State & Data ---
      let items = [
          { id: 1, text: "AirPods Pro", weight: 2, color: "#f8fafc", icon: "🎧" },
          { id: 2, text: "$50 Credit", weight: 5, color: "#f1f5f9", icon: "💳" },
          { id: 3, text: "Try Again", weight: 12, color: "#e2e8f0", icon: "🔄" },
          { id: 4, text: "Mystery Box", weight: 3, color: "#f8fafc", icon: "🎁" },
          { id: 5, text: "Free Shipping", weight: 8, color: "#f1f5f9", icon: "📦" },
          { id: 6, text: "10% Discount", weight: 10, color: "#e2e8f0", icon: "🎟️" }
      ];

      const colors = ["#f8fafc", "#f1f5f9", "#e2e8f0", "#cbd5e1"];

      let isSpinning = false;
      let currentRotation = 0;

      // Audio globals
      let audioCtx = null;
      let masterGain = null;

      let totalWeight = 0;
      let lastTickSlice = -1;

      // --- DOM Elements ---
      const canvas = document.getElementById('wheelCanvas');
      const ctx = canvas.getContext('2d');
      const wheelContainer = document.getElementById('wheelContainer');
      const configList = document.getElementById('configList');
      const spinBtn = document.getElementById('spinBtn');
      const resultBanner = document.getElementById('resultBanner');
      const resultText = document.getElementById('resultText');
      const resultIcon = document.getElementById('resultIcon');
      const pointer = document.getElementById('pointer');

      // --- Audio Setup (Subtle Tick) ---
      function initAudio() {
          if (!audioCtx) {
              audioCtx = new (window.AudioContext || window.webkitAudioContext)();
              masterGain = audioCtx.createGain();
              masterGain.gain.value = 0.4;
              masterGain.connect(audioCtx.destination);
          }
          if (audioCtx.state === 'suspended') {
              audioCtx.resume();
          }
      }

      function playTickSound(intensity = 1.0) {
          if (!audioCtx) return;

          const time = audioCtx.currentTime;
          const osc = audioCtx.createOscillator();
          const gain = audioCtx.createGain();

          osc.type = 'sine';
          osc.frequency.setValueAtTime(800, time);
          osc.frequency.exponentialRampToValueAtTime(100, time + 0.03);

          gain.gain.setValueAtTime(0, time);
          gain.gain.linearRampToValueAtTime(0.5 * intensity, time + 0.002);
          gain.gain.exponentialRampToValueAtTime(0.001, time + 0.03);

          osc.connect(gain);
          gain.connect(masterGain);
          osc.start(time);
          osc.stop(time + 0.04);
      }

      // --- Configuration UI Rendering ---
      function renderConfig() {
          configList.innerHTML = '';
          totalWeight = items.reduce((sum, item) => sum + parseInt(item.weight), 0);

          items.forEach((item, index) => {
              const percentage = Math.round((item.weight / totalWeight) * 100);

              const row = document.createElement('div');
              row.className = 'flex items-center gap-4 p-3 rounded-2xl border border-transparent hover:border-zinc-200 hover:bg-zinc-50/50 transition-colors group';
              row.innerHTML = `
                  <div class="w-10 h-10 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center text-lg shrink-0">
                      ${item.icon}
                  </div>
                  <div class="flex-1 flex flex-col justify-center min-w-0">
                      <input type="text" value="${item.text}" data-index="${index}" class="item-text-input bg-transparent border-none text-sm font-medium text-zinc-900 p-0 focus:ring-0 outline-none w-full truncate mb-1">
                      <div class="flex items-center gap-3">
                          <input type="range" min="1" max="50" value="${item.weight}" data-index="${index}" class="item-weight-input w-full h-1.5 bg-zinc-200 rounded-full appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-zinc-300 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-sm">
                          <span class="text-xs text-zinc-500 font-medium w-8 text-right shrink-0">${percentage}%</span>
                      </div>
                  </div>
              `;
              configList.appendChild(row);
          });

          document.querySelectorAll('.item-text-input').forEach(input => {
              input.addEventListener('input', (e) => {
                  items[e.target.dataset.index].text = e.target.value;
                  drawWheel();
              });
          });

          document.querySelectorAll('.item-weight-input').forEach(input => {
              input.addEventListener('input', (e) => {
                  items[e.target.dataset.index].weight = parseInt(e.target.value);
                  renderConfig();
                  drawWheel();
              });
          });
      }

      // --- Canvas Drawing Logic ---
      function drawWheel() {
          totalWeight = items.reduce((sum, item) => sum + parseInt(item.weight), 0);

          const dpr = window.devicePixelRatio || 1;
          const internalSize = 800;

          canvas.width = internalSize * dpr;
          canvas.height = internalSize * dpr;

          ctx.scale(dpr, dpr);
          ctx.clearRect(0, 0, internalSize, internalSize);

          const centerX = internalSize / 2;
          const centerY = internalSize / 2;
          const radius = internalSize / 2 - 2;

          let currentDrawAngle = 0;

          items.forEach((item, i) => {
              const sliceAngle = (item.weight / totalWeight) * 2 * Math.PI;

              item.startAngle = currentDrawAngle;
              item.endAngle = currentDrawAngle + sliceAngle;

              ctx.beginPath();
              ctx.moveTo(centerX, centerY);
              ctx.arc(centerX, centerY, radius, currentDrawAngle, currentDrawAngle + sliceAngle);
              ctx.fillStyle = colors[i % colors.length];
              ctx.fill();

              ctx.lineWidth = 4;
              ctx.strokeStyle = '#ffffff';
              ctx.stroke();

              ctx.save();
              ctx.translate(centerX, centerY);
              ctx.rotate(currentDrawAngle + sliceAngle / 2);

              ctx.textAlign = "right";
              ctx.textBaseline = "middle";

              const textOuterMargin = 60;

              ctx.fillStyle = "#18181b";

              ctx.font = "32px sans-serif";
              ctx.fillText(item.icon, radius - textOuterMargin, 0);

              ctx.font = "500 24px Inter, sans-serif";
              ctx.fillText(item.text, radius - textOuterMargin - 45, 0);

              ctx.restore();
              currentDrawAngle += sliceAngle;
          });
      }

      // --- Animation & Physics ---
      function easeOutQuart(x) {
          return 1 - Math.pow(1 - x, 4);
      }

      function checkTick(progress = 0) {
          let pointerAngle = (-Math.PI / 2) - currentRotation;

          pointerAngle = pointerAngle % (2 * Math.PI);
          if (pointerAngle < 0) pointerAngle += 2 * Math.PI;

          let currentSlice = -1;
          for (let i = 0; i < items.length; i++) {
              if (pointerAngle >= items[i].startAngle && pointerAngle < items[i].endAngle) {
                  currentSlice = i;
                  break;
              }
          }

          if (currentSlice !== lastTickSlice && lastTickSlice !== -1 && isSpinning) {
              // Map the animation progress (0 to 1) inversely to intensity (1 to ~0.15)
              // This makes the clicks feel naturally softer as the wheel slows down.
              const intensity = Math.max(0.15, Math.pow(1 - progress, 1.5));
              playTickSound(intensity);

              // Trigger flap animation on pointer
              pointer.classList.remove('animate-flap');
              void pointer.offsetWidth;
              pointer.classList.add('animate-flap');
          }

          lastTickSlice = currentSlice;
          return currentSlice;
      }

      function startSpin() {
          if (isSpinning) return;
          initAudio();

          resultBanner.style.opacity = '0';
          resultBanner.style.transform = 'translateY(10px)';
          setTimeout(() => { resultBanner.classList.add('hidden'); }, 300);

          isSpinning = true;
          spinBtn.disabled = true;
          spinBtn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="text-lg animate-spin"></iconify-icon> Spinning...';
          spinBtn.classList.replace('bg-zinc-900', 'bg-zinc-400');

          const startRotation = currentRotation;
          const randomExtra = Math.random() * Math.PI * 2;
          const targetRotation = startRotation + (Math.PI * 2 * 6) + randomExtra;

          const duration = 5000;
          let startTime = null;

          function animate(currentTime) {
              if (!startTime) startTime = currentTime;
              const timeElapsed = currentTime - startTime;
              let progress = Math.min(timeElapsed / duration, 1);

              const easedProgress = easeOutQuart(progress);
              currentRotation = startRotation + (targetRotation - startRotation) * easedProgress;

              wheelContainer.style.transform = `rotate(${currentRotation}rad)`;

              // Pass progress into checkTick to calculate click intensity
              const winningSliceIndex = checkTick(progress);

              if (progress < 1) {
                  requestAnimationFrame(animate);
              } else {
                  finishSpin(winningSliceIndex);
              }
          }

          requestAnimationFrame(animate);
      }

      function finishSpin(winningIndex) {
          isSpinning = false;
          spinBtn.disabled = false;
          spinBtn.innerHTML = '<iconify-icon icon="solar:refresh-circle-linear" class="text-lg"></iconify-icon> Spin Again';
          spinBtn.classList.replace('bg-zinc-400', 'bg-zinc-900');

          // Fallback in case calculation fails right at the end
          if (winningIndex === -1) winningIndex = checkTick(1);

          const winner = items[winningIndex];

          resultText.innerText = winner.text;
          resultIcon.innerText = winner.icon;
          resultBanner.classList.remove('hidden');

          void resultBanner.offsetWidth;

          resultBanner.style.opacity = '1';
          resultBanner.style.transform = 'translateY(0)';
      }

      // --- Initialization ---
      spinBtn.addEventListener('click', startSpin);

      window.addEventListener('resize', () => {
          if(!isSpinning) drawWheel();
      });

      renderConfig();
      setTimeout(drawWheel, 50);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-white rounded-3xl shadow-sm border border-zinc-200 w-full max-w-5xl flex flex-col lg:flex-row overflow-hidden relative">

<div className="w-full lg:w-1/2 p-8 lg:p-12 bg-zinc-50/50 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-zinc-100">
<div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center">

<div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 drop-shadow-[0_6px_8px_rgba(0,0,0,0.15)]" id="pointer">
<svg fill="none" height="44" viewbox="0 0 32 44" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M16 42L4.5 24.5C2 21 2 17.5 2 14C2 6.5 8 2 16 2C24 2 30 6.5 30 14C30 17.5 30 21 27.5 24.5L16 42Z" fill="#18181b" stroke="white" strokeLinejoin="round" strokeWidth="4"></path>
<circle cx="16" cy="14" fill="#ffffff" fillOpacity="0.2" r="4"></circle>
<circle cx="16" cy="14" fill="#ffffff" r="2"></circle>
</svg>
</div>

<div className="w-full h-full relative rounded-full shadow-[0_0_40px_rgba(0,0,0,0.04)] border-[6px] border-white z-10" id="wheelContainer" style={{transform: 'rotate(0deg)'}}>
<canvas className="w-full h-full rounded-full block" id="wheelCanvas"></canvas>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-sm border-4 border-zinc-100 z-20 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-zinc-300"></div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col h-full bg-white">

<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center font-semibold text-base tracking-tighter">
            WF
          </div>
<div>
<h1 className="text-xl font-semibold tracking-tight text-zinc-900">
              Wheel of Fortune
            </h1>
<p className="text-sm text-zinc-500 mt-0.5">
              Customize items and spin to win
            </p>
</div>
</div>

<div className="hidden mb-6 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center gap-4 transition-all opacity-0 translate-y-2" id="resultBanner">
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-2xl border border-zinc-100" id="resultIcon">
            🎉
          </div>
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-0.5">
              Winner
            </p>
<h2 className="text-lg font-semibold tracking-tight text-zinc-900" id="resultText">
              Prize Name
            </h2>
</div>
</div>

<div className="flex-1 overflow-y-auto pr-2 -mr-2 mb-8 space-y-2" id="configList">

</div>

<div className="pt-6 border-t border-zinc-100 mt-auto">
<button className="w-full py-3.5 px-6 rounded-xl bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-sm" id="spinBtn">
<iconify-icon className="text-lg" icon="solar:refresh-circle-linear"></iconify-icon>
            Spin the Wheel
          </button>
</div>
</div>
</div>


    </>
  );
}
