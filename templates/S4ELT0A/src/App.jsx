import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    const c = document.getElementById('flower-bg');
    const ctx = c.getContext('2d');
    let w, h, dpr;

    function resize() {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      c.style.width = w + 'px';
      c.style.height = h + 'px';
      ctx.setTransform(1,0,0,1,0,0);
      ctx.scale(dpr, dpr);
    }
    window.addEventListener('resize', resize);
    resize();

    function drawFlower(time, cx, cy, scale, petals, baseHue, alpha) {
      for (let i = 0; i < petals; i++) {
        const a = (i/petals) * Math.PI*2 + time*0.15;
        const r = scale * (0.7 + 0.3*Math.sin(time*0.8 + i));
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;

        let petalTime = time + i*0.2;
        let pulsing = 0.18 + 0.12 * Math.sin(petalTime);
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(a + Math.sin(time*0.5 + i)*0.2);
        ctx.globalAlpha = alpha * (0.9 + 0.1*Math.sin(time + i));
        let grd = ctx.createRadialGradient(0,0,2,0,0,scale*0.28);
        grd.addColorStop(0, `hsla(${baseHue+20*Math.sin(time+i)},90%,95%,0.95)`);
        grd.addColorStop(0.6, `hsla(${baseHue+40*Math.sin(time+i)},80%,65%,0.5)`);
        grd.addColorStop(1, `hsla(${baseHue+60*Math.sin(time+i)},80%,55%,0)`);
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.ellipse(0, 0, scale*0.28, scale*pulsing, 0, 0, Math.PI*2);
        ctx.fill();
        ctx.restore();
      }
      // Center
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(cx, cy, scale*0.21, 0, Math.PI*2);
      ctx.closePath();
      ctx.fillStyle = `hsla(${baseHue+10*Math.sin(time)},90%,65%,0.13)`;
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      ctx.clearRect(0, 0, w, h);
      const t = performance.now()*.001;
      // Main flower
      drawFlower(t, w/2, h/2, Math.min(w,h)*0.35, 10, 245+30*Math.sin(t*0.35), 0.25);
      // Outer soft glow flowers
      drawFlower(t*0.9+1, w/2, h/2, Math.min(w,h)*0.47, 15, 200, 0.09);
      drawFlower(-t*0.8, w/2, h/2, Math.min(w,h)*0.6, 18, 220, 0.06);
      // Subtle background flowers
      drawFlower(t*0.6, w/2-w/4, h/2+h/5, Math.min(w,h)*0.22, 8, 180, 0.09);
      drawFlower(-t*0.7, w/2+w/3, h/2-h/4, Math.min(w,h)*0.18, 7, 320, 0.08);

      requestAnimationFrame(animate);
    }
    animate();

    // Slide-in sequence animation
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        document.getElementById('slide1').classList.add('slide-in');
      }, 100);
      setTimeout(() => {
        document.getElementById('slide2').classList.add('slide-in');
      }, 300);
      setTimeout(() => {
        document.getElementById('slide3').classList.add('slide-in');
      }, 500);
      setTimeout(() => {
        document.getElementById('slide4').classList.add('slide-right-in');
      }, 700);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 w-full h-full z-0" id="flower-bg" style={{display: 'block'}}></canvas>
<section className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 py-20 min-h-screen">

<div className="flex-1 max-w-xl">
<h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg slide-init" id="slide1">
        Step Into <span className="text-sky-400">Virtual Reality</span>
</h1>
<p className="text-lg md:text-2xl text-indigo-100 mb-8 max-w-lg slide-init" id="slide2">
        Experience a new dimension of interaction and immersion. Elevate your senses and explore limitless worlds, all from the comfort of your space.
      </p>
<div className="flex gap-4 slide-init" id="slide3">
<a className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl shadow-lg transition" href="#explore">
          Explore Now
        </a>
<a className="px-6 py-3 bg-white/10 border border-white/20 text-indigo-100 hover:bg-white/20 rounded-xl font-semibold transition" href="#learn-more">
          Learn More
        </a>
</div>
</div>

<div className="flex-1 flex items-center justify-center mt-12 md:mt-0">
<svg className="drop-shadow-2xl slide-right-init" fill="none" height="260" id="slide4" viewbox="0 0 380 260" width="380" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="190" cy="230" fill="#3b82f6" fillOpacity="0.15" rx="120" ry="25"></ellipse>
<g>

<rect fill="#312e81" height="100" rx="45" stroke="#6366f1" strokeWidth="6" width="280" x="50" y="70"></rect>

<rect fill="url(#visorGradient)" height="60" rx="30" width="240" x="70" y="90"></rect>
<rect fill="none" height="60" rx="30" stroke="#a5b4fc" strokeWidth="2" width="240" x="70" y="90"></rect>

<rect fill="#2563eb" height="20" rx="10" width="40" x="30" y="110"></rect>

<rect fill="#2563eb" height="20" rx="10" width="40" x="310" y="110"></rect>

<ellipse cx="110" cy="120" fill="#fff" fillOpacity="0.18" rx="18" ry="12"></ellipse>
<ellipse cx="270" cy="120" fill="#fff" fillOpacity="0.18" rx="18" ry="12"></ellipse>

<rect fill="#818cf8" fillOpacity="0.18" height="8" rx="4" width="140" x="120" y="155"></rect>
<rect fill="#a5b4fc" fillOpacity="0.12" height="5" rx="2.5" width="80" x="150" y="165"></rect>
</g>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="visorGradient" x1="70" x2="310" y1="120" y2="120">
<stop stop-color="#60a5fa"></stop>
<stop offset="1" stop-color="#818cf8"></stop>
</lineargradient>
</defs>
</svg>
</div>
</section>
<footer className="absolute bottom-2 w-full text-center text-indigo-200 text-xs opacity-80 select-none z-10">
    © 2024 Visionary VR. Crafted for immersive experiences.
  </footer>


    </>
  );
}
