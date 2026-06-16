import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
document.addEventListener('DOMContentLoaded', () => {
const scrollContainer = document.getElementById('timeline-scroll');
const scrollTrackInner = document.getElementById('scroll-track-inner');
const scrollFill = document.getElementById('scroll-fill');
const desktopSlider = document.getElementById('desktop-slider');
const desktopTrackInner = document.getElementById('desktop-track-inner');
const desktopFill = document.getElementById('desktop-fill');
const mainText = document.getElementById('main-text');
const textContainer = document.getElementById('text-container');
const imgNight = document.getElementById('img-night');
const gradientParty = document.getElementById('gradient-party');
const instructionContainer = document.getElementById('instruction-container');
let previousValue = 1;
let audioCtx = null;
let confettiFired = false;
let isUpdating = false;
const totalSteps = 10;
const itemWidth = 96; // w-24 is 96px
const getOrdinal = (n) => {
const s = ["th", "st", "nd", "rd"];
const v = n % 100;
return n + (s[(v - 20) % 10] || s[v] || s[0]);
};
// Generate Timeline Items (Mobile & Desktop)
for (let i = 1; i <= totalSteps; i++) {
const dateStr = getOrdinal(i) + " Apr";
// Mobile Item
const mBlock = document.createElement('div');
mBlock.className = `w-24 shrink-0 snap-center flex flex-col items-center justify-start relative group cursor-pointer h-full mobile-item`;
mBlock.dataset.value = i;
mBlock.innerHTML = `
<div class="w-[2px] h-[10px] bg-zinc-700 rounded-full transition-all duration-300 tick-mark z-10 shadow-sm mt-[3px]"></div>
<span class="mt-4 text-sm font-normal text-zinc-500 whitespace-nowrap transition-all duration-300 date-label">${dateStr}</span>
`;
mBlock.addEventListener('click', () => {
initAudio();
scrollContainer.scrollTo({ left: (i - 1) * itemWidth, behavior: 'smooth' });
});
scrollTrackInner.appendChild(mBlock);
// Desktop Item
const dBlock = document.createElement('div');
dBlock.className = `w-[20px] h-[20px] relative group desktop-item`;
dBlock.dataset.value = i;
dBlock.innerHTML = `
<div class="absolute left-1/2 -translate-x-1/2 top-[6px] w-[2px] h-[8px] bg-zinc-700 rounded-full transition-all duration-300 tick-mark z-10"></div>
<span class="absolute left-1/2 -translate-x-1/2 top-[32px] text-xs font-normal text-zinc-500 whitespace-nowrap transition-all duration-300 date-label">${dateStr}</span>
`;
desktopTrackInner.appendChild(dBlock);
}
const itemsMobile = scrollTrackInner.querySelectorAll('.mobile-item');
const itemsDesktop = desktopTrackInner.querySelectorAll('.desktop-item');
function initAudio() {
if (!audioCtx) {
audioCtx = new (window.AudioContext || window.webkitAudioContext)();
}
if (audioCtx.state === 'suspended') audioCtx.resume();
}
function playTickSound(isSpecial = false) {
if (!audioCtx) return;
const osc = audioCtx.createOscillator();
const gain = audioCtx.createGain();
const filter = audioCtx.createBiquadFilter();
osc.type = 'sine';
if (isSpecial) {
osc.frequency.setValueAtTime(800, audioCtx.currentTime);
osc.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.08);
} else {
osc.frequency.setValueAtTime(1000, audioCtx.currentTime);
osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.04);
}
filter.type = 'lowpass';
filter.frequency.value = isSpecial ? 3000 : 2000;
gain.gain.setValueAtTime(isSpecial ? 0.08 : 0.03, audioCtx.currentTime);
gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (isSpecial ? 0.08 : 0.04));
osc.connect(filter);
filter.connect(gain);
gain.connect(audioCtx.destination);
osc.start();
osc.stop(audioCtx.currentTime + 0.1);
}
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let particles = [];
let animationId;
function resizeCanvas() {
if(!canvas) return;
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();
function fireConfetti() {
if (confettiFired) return;
confettiFired = true;
particles = [];
const colors = ['#ffffff', '#3b82f6', '#60a5fa', '#1e3a8a', '#e4e4e7'];
for (let i = 0; i < 150; i++) {
particles.push({
x: canvas.width / 2,
y: canvas.height,
vx: (Math.random() - 0.5) * 20,
vy: (Math.random() - 1) * 25 - 5,
size: Math.random() * 4 + 2,
color: colors[Math.floor(Math.random() * colors.length)],
rotation: Math.random() * 360,
rs: (Math.random() - 0.5) * 10
});
}
function animate() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
let activeParticles = 0;
particles.forEach(p => {
p.x += p.vx;
p.y += p.vy;
p.vy += 0.4;
p.rotation += p.rs;
if (p.y < canvas.height + 10) activeParticles++;
ctx.save();
ctx.translate(p.x, p.y);
ctx.rotate(p.rotation * Math.PI / 180);
ctx.fillStyle = p.color;
ctx.globalAlpha = Math.max(0, 1 - (p.y / (canvas.height * 1.5)));
if (Math.random() > 0.5) ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
else { ctx.beginPath(); ctx.arc(0, 0, p.size/1.5, 0, Math.PI * 2); ctx.fill(); }
ctx.restore();
});
if (activeParticles > 0) animationId = requestAnimationFrame(animate);
else ctx.clearRect(0, 0, canvas.width, canvas.height);
}
animate();
}
function updateUI(value, source = 'system') {
if (isUpdating) return;
isUpdating = true;
value = Math.max(1, Math.min(10, value));
// 1. Mobile Update
const fillWidth = (value - 1) * itemWidth;
scrollFill.style.width = `${fillWidth}px`;
itemsMobile.forEach((item, index) => {
const tickValue = index + 1;
const tickMark = item.querySelector('.tick-mark');
const label = item.querySelector('.date-label');
if (tickValue === value) {
item.classList.add('active');
tickMark.classList.replace('bg-zinc-700', 'bg-blue-500');
tickMark.style.height = '16px';
tickMark.style.marginTop = '-3px';
label.classList.add('text-blue-400', 'font-semibold', 'scale-110', 'translate-y-1');
label.classList.remove('text-zinc-500');
} else {
item.classList.remove('active');
tickMark.style.height = '10px';
tickMark.style.marginTop = '3px';
label.classList.remove('text-blue-400', 'font-semibold', 'scale-110', 'translate-y-1');
label.classList.add('text-zinc-500');
if (tickValue < value) tickMark.classList.replace('bg-zinc-700', 'bg-blue-500');
else tickMark.classList.replace('bg-blue-500', 'bg-zinc-700');
}
});
if (source !== 'mobile-scroll') {
scrollContainer.scrollTo({ left: (value - 1) * itemWidth, behavior: 'smooth' });
}
// 2. Desktop Update
if (desktopSlider) {
desktopSlider.value = value;
const percent = ((value - 1) / 9) * 100;
desktopFill.style.width = `${percent}%`;
itemsDesktop.forEach((item, index) => {
const tickValue = index + 1;
const tickMark = item.querySelector('.tick-mark');
const label = item.querySelector('.date-label');
if (tickValue === value) {
tickMark.classList.replace('bg-zinc-700', 'bg-blue-500');
tickMark.style.height = '12px';
tickMark.style.top = '4px';
label.classList.add('text-blue-400', 'font-semibold', 'scale-110');
label.classList.remove('text-zinc-500', 'font-normal');
} else {
tickMark.style.height = '8px';
tickMark.style.top = '6px';
label.classList.remove('text-blue-400', 'font-semibold', 'scale-110');
label.classList.add('text-zinc-500', 'font-normal');
if (tickValue < value) tickMark.classList.replace('bg-zinc-700', 'bg-blue-500');
else tickMark.classList.replace('bg-blue-500', 'bg-zinc-700');
}
});
}
// 3. Main Text / Effects Update
if (value !== previousValue || source === 'init') {
textContainer.style.opacity = '0';
textContainer.style.transform = 'translateY(10px)';
setTimeout(() => {
if (value < 10) {
const days = 10 - value;
mainText.innerHTML = `<span class="text-blue-500 font-semibold">${days}</span> day${days === 1 ? '' : 's'} to go`;
mainText.className = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white drop-shadow-xl";
imgNight.style.opacity = '0';
if (gradientParty) gradientParty.style.opacity = '0';
confettiFired = false;
ctx.clearRect(0, 0, canvas.width, canvas.height);
cancelAnimationFrame(animationId);
if (instructionContainer) instructionContainer.style.opacity = '1';
} else {
mainText.innerHTML = `Celebrating 6 years of <br class="md:hidden" /><span class="text-blue-500 tracking-tight font-semibold ml-2 text-glow">^atom</span>`;
mainText.className = "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white drop-shadow-2xl leading-tight";
imgNight.style.opacity = '1';
if (gradientParty) gradientParty.style.opacity = '1';
if (instructionContainer) instructionContainer.style.opacity = '0';
fireConfetti();
}
textContainer.style.opacity = '1';
textContainer.style.transform = 'translateY(0)';
}, 150);
if (source !== 'init') {
playTickSound(value === 10);
}
previousValue = value;
}
isUpdating = false;
}
// Mobile Scroll Logic
function calculateActiveItem() {
if (window.innerWidth >= 768) return; // Skip if on desktop view
const containerRect = scrollContainer.getBoundingClientRect();
const containerCenter = containerRect.left + containerRect.width / 2;
let minDistance = Infinity;
let activeIndex = 0;
itemsMobile.forEach((item, index) => {
const itemRect = item.getBoundingClientRect();
const itemCenter = itemRect.left + itemRect.width / 2;
const distance = Math.abs(containerCenter - itemCenter);
if (distance < minDistance) {
minDistance = distance;
activeIndex = index;
}
});
const newValue = activeIndex + 1;
if (newValue !== previousValue && !isUpdating) {
updateUI(newValue, 'mobile-scroll');
}
}
scrollContainer.addEventListener('scroll', () => {
requestAnimationFrame(calculateActiveItem);
});
scrollContainer.addEventListener('pointerdown', initAudio, { once: true });
// Desktop Slider Logic
desktopSlider.addEventListener('input', (e) => {
initAudio();
const newValue = parseInt(e.target.value, 10);
if (newValue !== previousValue) {
updateUI(newValue, 'desktop');
}
});
desktopSlider.addEventListener('pointerdown', initAudio, { once: true });
// Initialize accurately to day 1 (9 days to go)
updateUI(1, 'init');
setTimeout(() => { scrollContainer.scrollLeft = 0; }, 10);
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full max-w-5xl flex flex-col items-center justify-center gap-8 md:gap-12 relative z-10 my-auto">

<div className="relative w-full aspect-[4/5] sm:aspect-[16/10] md:aspect-video max-h-[75vh] md:max-h-[65vh] rounded-3xl overflow-hidden shadow-[0_0_50px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/5 bg-zinc-900 flex-shrink-0" style={{transform: 'translateZ(0)'}}>
<div className="absolute inset-0 w-full h-full">
<img alt="Modern Office Interior with City View" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100 brightness-[0.8]" id="img-day" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37df9b9c-6860-40ad-928b-23e85832d1bf_1600w.jpg"/>
<img alt="Office Party Dance Floor at Night" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-0" id="img-night" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12832136-803b-424f-9712-cbc9768da354_1600w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/80 pointer-events-none transition-opacity duration-1000"></div>
<div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay opacity-0 transition-opacity duration-1000" id="gradient-party"></div>
<canvas className="absolute inset-0 w-full h-full pointer-events-none z-10" id="confetti"></canvas>
<div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-center px-8">
<div className="transition-all duration-500 ease-premium transform translate-y-0 opacity-100 flex flex-col items-center gap-2" id="text-container">
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white drop-shadow-xl" id="main-text">
<span className="text-blue-500 font-semibold">9</span> days to go
            </h1>
</div>
</div>
</div>

<div className="w-full max-w-4xl mx-auto relative flex flex-col items-center">

<div className="flex flex-col items-center gap-2 mb-4 md:mb-6 text-blue-400 transition-opacity duration-700 animate-bounce" id="instruction-container">
<div className="flex items-center gap-2.5 bg-blue-500/10 px-5 py-2.5 rounded-full border border-blue-500/20 shadow-[0_0_20px_rgba(37,99,235,0.15)] backdrop-blur-sm">
<iconify-icon className="text-blue-400" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
<p className="text-sm font-normal tracking-wide text-zinc-200">
<span className="md:hidden">Swipe</span><span className="hidden md:inline">Slide</span> to 10th April
            </p>
</div>
</div>

<div className="md:hidden relative w-full h-28 overflow-hidden touch-pan-x select-none">

<div className="absolute top-1 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none drop-shadow-[0_2px_8px_rgba(59,130,246,0.5)]">
<iconify-icon className="text-blue-500 mt-1" height="24" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>

<div className="w-full h-full overflow-x-auto snap-x no-scrollbar flex items-start pt-8 mask-edges cursor-grab active:cursor-grabbing relative z-20" id="timeline-scroll" style={{scrollBehavior: 'smooth'}}>

<div className="shrink-0 pointer-events-none" style={{width: 'calc(50% - 48px)'}}></div>

<div className="flex items-start h-full relative pointer-events-auto" id="scroll-track-inner">

<div className="absolute top-[7px] left-0 right-0 h-[2px] bg-zinc-800 rounded-full"></div>

<div className="absolute top-[7px] left-0 h-[2px] bg-blue-500 rounded-full transition-all duration-300" id="scroll-fill"></div>

</div>

<div className="shrink-0 pointer-events-none" style={{width: 'calc(50% - 48px)'}}></div>
</div>
</div>

<div className="hidden md:block relative w-full max-w-3xl mt-4 mb-8 h-20 select-none px-6">


<div className="absolute top-[10px] left-[34px] right-[34px] h-[2px]">
<div className="w-full h-full bg-zinc-800 rounded-full"></div>

<div className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-300 pointer-events-none" id="desktop-fill" style={{width: '0%'}}></div>
</div>

<input className="absolute top-[1px] left-[24px] right-[24px] w-[calc(100%-48px)] h-[20px] appearance-none bg-transparent cursor-pointer z-30 focus:outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-[20px] [&amp;::-webkit-slider-thumb]:h-[20px] [&amp;::-webkit-slider-thumb]:bg-blue-500 [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(59,130,246,0.6)] [&amp;::-moz-range-thumb]:appearance-none [&amp;::-moz-range-thumb]:w-[20px] [&amp;::-moz-range-thumb]:h-[20px] [&amp;::-moz-range-thumb]:bg-blue-500 [&amp;::-moz-range-thumb]:border-none [&amp;::-moz-range-thumb]:rounded-full [&amp;::-moz-range-thumb]:shadow-[0_0_15px_rgba(59,130,246,0.6)]" id="desktop-slider" max="10" min="1" step="1" type="range" value="1"/>

<div className="absolute top-[1px] left-[24px] right-[24px] h-[20px] flex justify-between pointer-events-none z-10" id="desktop-track-inner">

</div>
</div>
</div>
</main>

    </>
  );
}
