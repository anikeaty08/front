import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();

      // 1. Eye Tracking
      const eyeCard = document.getElementById('card-eye');
      const pupil = document.querySelector('.pupil');
      const limit = document.querySelector('.eye-limit');

      if(eyeCard) {
        eyeCard.addEventListener('mousemove', (e) => {
           const rect = limit.getBoundingClientRect();
           const centerX = rect.left + rect.width / 2;
           const centerY = rect.top + rect.height / 2;

           // Calculate distance limited to radius
           const maxDist = (rect.width / 2) - 16; // 16 is half pupil size + margin
           const deltaX = e.clientX - centerX;
           const deltaY = e.clientY - centerY;
           const distance = Math.min(Math.hypot(deltaX, deltaY), maxDist);
           const angle = Math.atan2(deltaY, deltaX);

           const x = Math.cos(angle) * distance;
           const y = Math.sin(angle) * distance;

           pupil.style.transform = `translate(${x}px, ${y}px)`;
        });

        eyeCard.addEventListener('mouseleave', () => {
           pupil.style.transform = `translate(0, 0)`;
        });
      }

      // 2. Dial Interaction (Drag to rotate)
      const dialCard = document.getElementById('card-dial');
      const dialKnob = document.getElementById('dial-knob');
      let isDraggingDial = false;
      let dialRotation = 0;
      let startAngle = 0;

      function getAngle(e, element) {
          const rect = element.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          return Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
      }

      dialCard.addEventListener('mousedown', (e) => {
          isDraggingDial = true;
          startAngle = getAngle(e, dialCard) - dialRotation;
          dialCard.style.cursor = 'grabbing';
      });

      window.addEventListener('mousemove', (e) => {
          if (!isDraggingDial) return;
          e.preventDefault();
          const currentAngle = getAngle(e, dialCard);
          dialRotation = currentAngle - startAngle;
          dialKnob.style.transform = `rotate(${dialRotation}deg)`;
      });

      window.addEventListener('mouseup', () => {
          isDraggingDial = false;
          dialCard.style.cursor = 'crosshair';
      });

      // Also support wheel for fine tuning
      dialCard.addEventListener('wheel', (e) => {
         e.preventDefault();
         dialRotation += e.deltaY * 0.2;
         dialKnob.style.transform = `rotate(${dialRotation}deg)`;
      });


      // 4. Parallax Grid
      const gridCard = document.getElementById('card-grid');
      const gridPattern = gridCard.querySelector('.grid-pattern');

      gridCard.addEventListener('mousemove', (e) => {
         const rect = gridCard.getBoundingClientRect();
         const x = (e.clientX - rect.left) / rect.width;
         const y = (e.clientY - rect.top) / rect.height;

         // Move pattern opposite to mouse
         gridPattern.style.transform = `translate(${-x * 60}px, ${-y * 60}px)`;
      });

      // 5. Morph Shape
      let shapeState = 0;
      function toggleShape(el) {
         const shape = el.querySelector('.shape-morph');
         shapeState = (shapeState + 1) % 4;

         if(shapeState === 0) {
            // Square
            shape.style.borderRadius = '0px';
            shape.style.transform = 'rotate(0deg) scale(1)';
         } else if (shapeState === 1) {
            // Circle
            shape.style.borderRadius = '50%';
            shape.style.transform = 'rotate(90deg) scale(0.8)';
         } else if (shapeState === 2) {
            // Pill
            shape.style.borderRadius = '999px';
            shape.style.width = '60%';
            shape.style.height = '100px';
            shape.style.transform = 'rotate(180deg)';
         } else {
            // Diamond
            shape.style.borderRadius = '10px';
            shape.style.width = '24px'; // w-24
            shape.style.height = '24px'; // h-24
            shape.style.transform = 'rotate(45deg) scale(0.9)';
         }

         // Reset dims if not pill state
         if(shapeState !== 2) {
             shape.style.width = '6rem';
             shape.style.height = '6rem';
         }
      }
      // Initialize styling
      const initialShape = document.querySelector('.shape-morph');
      if(initialShape) initialShape.style.borderRadius = '0px';

      // 6. Vertical Slider
      function updateVerticalBar(input) {
         const bar = document.getElementById('vert-bar-fill');
         bar.style.height = `${input.value}%`;
      }

      // 7. Clock Animation
      function updateClock() {
          const now = new Date();
          const seconds = now.getSeconds();
          const minutes = now.getMinutes();
          const hours = now.getHours();

          const secDeg = (seconds / 60) * 360;
          const minDeg = (minutes / 60) * 360 + (seconds/60)*6;
          const hourDeg = (hours / 12) * 360 + (minutes/60)*30;

          const hHand = document.getElementById('clock-hour');
          const mHand = document.getElementById('clock-minute');
          const sHand = document.getElementById('clock-second');

          if(hHand) hHand.style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;
          if(mHand) mHand.style.transform = `translate(-50%, 0) rotate(${minDeg}deg)`;
          if(sHand) sHand.style.transform = `translate(-50%, 0) rotate(${secDeg}deg)`;
      }
      setInterval(updateClock, 1000);
      updateClock();
    


      // 3. Global Color Toggle
      const toggleBtn = document.getElementById('toggle-3');
      const gridLayout = document.querySelector('.grid-layout');
      if(toggleBtn) {
        toggleBtn.addEventListener('change', () => {
          gridLayout.classList.toggle('hue-shifted');
        });
      }

      // 4. Purple Box 3D Tilt (Interactive Fix)
      const cardTilt = document.getElementById('card-grid');
      const tiltContent = cardTilt.querySelector('.z-10');
      if(cardTilt && tiltContent) {
        cardTilt.addEventListener('mousemove', (e) => {
          const rect = cardTilt.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width/2) / (rect.width/2);
          const y = (e.clientY - rect.top - rect.height/2) / (rect.height/2);
          tiltContent.style.transform = `rotateY(${x * 20}deg) rotateX(${-y * 20}deg) scale(1.1) translateZ(20px)`;
        });
        cardTilt.addEventListener('mouseleave', () => {
           tiltContent.style.transform = 'rotateY(0) rotateX(0) scale(1) translateZ(0)';
        });
      }

      // 9. Green Triangle Kinetic Zoom
      const cardZoom = document.getElementById('card-zoom');
      const zoomSvg = cardZoom ? cardZoom.querySelector('svg') : null;
      if(cardZoom && zoomSvg) {
         zoomSvg.style.transition = 'transform 0.1s ease-out';
         cardZoom.addEventListener('mousemove', (e) => {
            const rect = cardZoom.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width/2;
            const y = e.clientY - rect.top - rect.height/2;
            zoomSvg.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px) scale(2.5)`;
         });
         cardZoom.addEventListener('mouseleave', () => {
            zoomSvg.style.transform = 'translate(0,0) scale(1)';
         });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise"></div>
<main className="grid-layout">

<div className="card card-1 group" id="card-eye">
<div className="absolute inset-0 flex items-center justify-center">
<div className="eye-limit w-32 h-32 rounded-full border border-black/10 flex items-center justify-center relative">
<div className="pupil w-6 h-6 rounded-full shadow-lg absolute"></div>
</div>
</div>
<div className="absolute top-4 left-4">
<i className="w-6 h-6 text-black/40" data-lucide="scan-eye"></i>
</div>
</div>

<div className="card card-2" id="card-dial">
<div className="relative w-40 h-40 rounded-full border border-black/10 flex items-center justify-center cursor-crosshair">
<div className="w-full h-full rounded-full flex items-center justify-center transition-transform duration-75 ease-out" id="dial-knob">

<div className="absolute top-2 w-1.5 h-3 bg-black/20 rounded-full"></div>
<div className="w-24 h-24 rounded-full bg-[#ea4d3f] shadow-lg border-2 border-[#ea4d3f] flex items-center justify-center relative z-10">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
</div>

<div className="absolute inset-0 pointer-events-none opacity-20">
<div className="absolute top-1 left-1/2 -translate-x-1/2 w-px h-2 bg-black"></div>
<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-px h-2 bg-black"></div>
<div className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-px bg-black"></div>
<div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-px bg-black"></div>
</div>
</div>
</div>

<div className="card card-3">
<div className="flex items-center justify-center scale-150">
<input className="toggle-checkbox" id="toggle-3" type="checkbox"/>
<label className="toggle-label" htmlFor="toggle-3">
<div className="toggle-circle">
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="power"></i>
</div>
</label>
</div>
</div>

<div className="card card-4 relative group" id="card-grid">
<div className="grid-pattern opacity-30"></div>
<div className="relative z-10 w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
<i className="w-7 h-7 text-white" data-lucide="move-3d"></i>
</div>
</div>

<div className="card card-5 cursor-pointer" onclick="toggleShape(this)">
<div className="shape-morph w-24 h-24 shadow-2xl"></div>
</div>

<div className="card card-6">
<div className="vert-slider-container">
<input className="vert-input" max="100" min="0" oninput="updateVerticalBar(this)" orient="vertical" type="range" value="70"/>
<div className="vert-track">
<div className="vert-fill" id="vert-bar-fill" style={{height: '70%'}}></div>
</div>
</div>
</div>

<div className="card card-7">
<div className="w-48 h-48 rounded-full border border-white/20 relative flex items-center justify-center">

<div className="absolute w-1.5 h-14 bg-white rounded-full origin-bottom top-10 left-1/2 -translate-x-1/2 z-10 shadow-sm" id="clock-hour"></div>
<div className="absolute w-1 h-20 bg-white/80 rounded-full origin-bottom top-4 left-1/2 -translate-x-1/2 z-10" id="clock-minute"></div>
<div className="absolute w-0.5 h-20 bg-black/40 rounded-full origin-bottom top-4 left-1/2 -translate-x-1/2 z-20" id="clock-second"></div>
<div className="w-3 h-3 bg-white rounded-full z-30 shadow-md"></div>

<div className="absolute inset-0 opacity-40">
<div className="absolute top-3 left-1/2 w-0.5 h-3 bg-white -translate-x-1/2"></div>
<div className="absolute bottom-3 left-1/2 w-0.5 h-3 bg-white -translate-x-1/2"></div>
<div className="absolute left-3 top-1/2 h-0.5 w-3 bg-white -translate-y-1/2"></div>
<div className="absolute right-3 top-1/2 h-0.5 w-3 bg-white -translate-y-1/2"></div>
</div>
</div>
</div>

<div className="card card-8">
<div className="w-2/3 flex items-center justify-center">
<input className="w-full" max="100" min="0" type="range" value="45"/>
</div>
</div>

<div className="card card-9" id="card-zoom">
<svg className="text-white drop-shadow-md" fill="none" height="64" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 22H22L12 2Z" fill="currentColor" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
<circle cx="12" cy="15" fill="rgba(0,0,0,0.2)" r="3" stroke="none"></circle>
</svg>
</div>
</main>



    </>
  );
}
