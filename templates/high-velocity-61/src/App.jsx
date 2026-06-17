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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Interactive Network Background
      const canvas = document.getElementById('networkCanvas');
      const ctx = canvas.getContext('2d');
      let width, height;

      // Mouse interaction
      let mouse = { x: null, y: null, radius: 200 };
      window.addEventListener('mousemove', (event) => {
          mouse.x = event.x;
          mouse.y = event.y;
      });

      // Resize
      function resize() {
          width = window.innerWidth;
          height = window.innerHeight;
          canvas.width = width * window.devicePixelRatio;
          canvas.height = height * window.devicePixelRatio;
          ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
          canvas.style.width = width + 'px';
          canvas.style.height = height + 'px';
          init(); // Re-init particles on resize
      }

      let particles = [];
      // More particles for better effect - Increased density for more connectors
      const particleCount = 160;

      class Particle {
          constructor() {
              this.x = Math.random() * width;
              this.y = Math.random() * height;
              this.vx = (Math.random() - 0.5) * 0.5; // slow speed
              this.vy = (Math.random() - 0.5) * 0.5;
              this.size = Math.random() * 2 + 1;
          }

          update() {
              // Move
              this.x += this.vx;
              this.y += this.vy;

              // Bounce off edges
              if (this.x < 0 || this.x > width) this.vx *= -1;
              if (this.y < 0 || this.y > height) this.vy *= -1;

              // Interaction with mouse
              let dx = mouse.x - this.x;
              let dy = mouse.y - this.y;
              let distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < mouse.radius) {
                  if (mouse.x < this.x && this.x < width - 10) this.x += 2;
                  if (mouse.x > this.x && this.x > 10) this.x -= 2;
                  if (mouse.y < this.y && this.y < height - 10) this.y += 2;
                  if (mouse.y > this.y && this.y > 10) this.y -= 2;
              }
          }

          draw() {
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx.fillStyle = '#ffffff';
              ctx.fill();
          }
      }

      function init() {
          particles = [];
          for (let i = 0; i < particleCount; i++) {
              particles.push(new Particle());
          }
      }

      function animate() {
          requestAnimationFrame(animate);
          ctx.clearRect(0, 0, width, height);

          for (let i = 0; i < particles.length; i++) {
              particles[i].update();
              particles[i].draw();

              // Connect particles
              for (let j = i; j < particles.length; j++) {
                  let dx = particles[i].x - particles[j].x;
                  let dy = particles[i].y - particles[j].y;
                  let distance = Math.sqrt(dx*dx + dy*dy);

                  if (distance < 160) {
                      ctx.beginPath();
                      ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance/160})`;
                      ctx.lineWidth = 0.5;
                      ctx.moveTo(particles[i].x, particles[i].y);
                      ctx.lineTo(particles[j].x, particles[j].y);
                      ctx.stroke();
                  }
              }

              // Connect to mouse
              if (mouse.x != null) {
                  let dx = particles[i].x - mouse.x;
                  let dy = particles[i].y - mouse.y;
                  let distance = Math.sqrt(dx*dx + dy*dy);
                  if (distance < 200) {
                       ctx.beginPath();
                      ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance/200})`;
                      ctx.lineWidth = 0.8;
                      ctx.moveTo(particles[i].x, particles[i].y);
                      ctx.lineTo(mouse.x, mouse.y);
                      ctx.stroke();
                  }
              }
          }
      }

      window.addEventListener('resize', resize);
      window.addEventListener('mouseout', () => {
          mouse.x = null;
          mouse.y = null;
      });

      resize();
      animate();
    
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
      

<div className="absolute inset-0 z-0 h-screen w-full overflow-hidden pointer-events-none">
<canvas className="w-full h-full opacity-60" id="networkCanvas"></canvas>
<div className="absolute inset-0 bg-gradient-to-t from-[#474DEF] via-[#474DEF]/20 to-transparent"></div>
</div>




    </>
  );
}
