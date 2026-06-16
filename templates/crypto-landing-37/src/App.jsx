import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Unlink Particle Network Animation
      const canvas = document.getElementById('dotGrid');
      const ctx = canvas.getContext('2d');
      let particles = [];
      const particleCount = 100;
      let mouse = { x: -1000, y: -1000 };

      function resizeCanvas() {
          canvas.width = window.innerWidth * window.devicePixelRatio;
          canvas.height = window.innerHeight * window.devicePixelRatio;
          canvas.style.width = window.innerWidth + 'px';
          canvas.style.height = window.innerHeight + 'px';
          ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
          initParticles();
      }

      function initParticles() {
          particles = [];
          for (let i = 0; i < particleCount; i++) {
              particles.push({
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  vx: (Math.random() - 0.5) * 0.4,
                  vy: (Math.random() - 0.5) * 0.4,
                  radius: Math.random() * 1.5 + 0.5
              });
          }
      }

      window.addEventListener('mousemove', (e) => {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
      });

      window.addEventListener('mouseout', () => {
          mouse.x = -1000;
          mouse.y = -1000;
      });

      function drawParticles() {
          ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

          for (let i = 0; i < particleCount; i++) {
              let p = particles[i];
              p.x += p.vx;
              p.y += p.vy;

              if (p.x < 0) { p.x = 0; p.vx *= -1; }
              if (p.x > window.innerWidth) { p.x = window.innerWidth; p.vx *= -1; }
              if (p.y < 0) { p.y = 0; p.vy *= -1; }
              if (p.y > window.innerHeight) { p.y = window.innerHeight; p.vy *= -1; }

              let dx = mouse.x - p.x;
              let dy = mouse.y - p.y;
              let dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 200) {
                  let angle = Math.atan2(dy, dx);
                  let force = (200 - dist) / 200;
                  p.x -= Math.cos(angle) * force * 1.5;
                  p.y -= Math.sin(angle) * force * 1.5;
              }
          }

          for (let i = 0; i < particleCount; i++) {
              for (let j = i + 1; j < particleCount; j++) {
                  let p1 = particles[i];
                  let p2 = particles[j];
                  let dx = p1.x - p2.x;
                  let dy = p1.y - p2.y;
                  let dist = Math.sqrt(dx * dx + dy * dy);

                  if (dist < 150) {
                      let opacity = (1 - dist / 150) * 0.25;
                      ctx.beginPath();
                      ctx.moveTo(p1.x, p1.y);
                      ctx.lineTo(p2.x, p2.y);
                      ctx.strokeStyle = `rgba(161, 161, 170, ${opacity})`;
                      ctx.lineWidth = 1;
                      ctx.stroke();
                  }
              }
          }

          for (let i = 0; i < particleCount; i++) {
              let p = particles[i];
              ctx.beginPath();
              ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(228, 228, 231, 0.5)`;
              ctx.fill();
          }

          requestAnimationFrame(drawParticles);
      }

      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      requestAnimationFrame(drawParticles);

      // Badge pulse
      const badge = document.getElementById('hackathonBadge');
      badge.style.animation = 'badgePulse 3s ease-in-out infinite';

      // Cipher decrypt animation
      const finalText = "Unlink makes public blockchains private.";
      const cipherChars = "0123456789abcdef!@#$%^&*(){}[]|;:<>?/";
      const headlineEl = document.getElementById('headlineText');
      const cursorEl = document.getElementById('cursor');
      const ctaEl = document.getElementById('cta');

      let resolvedCount = 0;
      let displayChars = [];
      const totalChars = finalText.length;

      for (let i = 0; i < totalChars; i++) {
          if (finalText[i] === ' ') {
              displayChars.push(' ');
          } else {
              displayChars.push(cipherChars[Math.floor(Math.random() * cipherChars.length)]);
          }
      }

      function renderHeadline() {
          let html = '';
          for (let i = 0; i < displayChars.length; i++) {
              if (i < resolvedCount) {
                  html += `<span style="color: #e4e4e7;">${finalText[i]}</span>`;
              } else {
                  html += `<span style="color: #52525b;">${displayChars[i]}</span>`;
              }
          }
          headlineEl.innerHTML = html;
      }

      let scrambleInterval = setInterval(() => {
          for (let i = resolvedCount; i < totalChars; i++) {
              if (finalText[i] !== ' ') {
                  displayChars[i] = cipherChars[Math.floor(Math.random() * cipherChars.length)];
              }
          }
          renderHeadline();
      }, 50);

      setTimeout(() => {
          let decryptInterval = setInterval(() => {
              if (resolvedCount < totalChars) {
                  displayChars[resolvedCount] = finalText[resolvedCount];
                  resolvedCount++;
              } else {
                  clearInterval(scrambleInterval);
                  clearInterval(decryptInterval);
                  renderHeadline();
                  setTimeout(() => {
                      cursorEl.style.transition = 'opacity 0.5s ease';
                      cursorEl.style.opacity = '0';
                      ctaEl.style.opacity = '1';
                      ctaEl.style.transform = 'translateY(0)';
                      ctaEl.style.pointerEvents = 'auto';
                  }, 300);
              }
          }, 60);
      }, 1000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="dotGrid" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', zIndex: '0'}}></canvas>

<div style={{position: 'relative', zIndex: '1', height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.5rem 2rem'}}>

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

<a href="https://unlink.xyz" onmouseout="this.style.opacity='0.7'" onmouseover="this.style.opacity='1'" style={{textDecoration: 'none', color: '#e4e4e7', fontSize: '1.125rem', fontWeight: '500', letterSpacing: '-0.025em', opacity: '0.7', transition: 'opacity 0.3s ease'}}>
          un
        </a>

<a className="text-xs" href="https://docs.unlink.xyz" onmouseout="this.style.color='#71717a'; this.style.opacity='0.7'" onmouseover="this.style.color='#e4e4e7'; this.style.opacity='1'" style={{textDecoration: 'none', color: '#71717a', fontWeight: '400', transition: 'color 0.3s ease, opacity 0.3s ease', opacity: '0.7'}}>
          Docs
        </a>
</div>

<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: '1', gap: '2rem', marginTop: '-2rem'}}>

<a className="text-xs" href="https://hackathon.unlink.xyz" id="hackathonBadge" onmouseout="this.style.borderColor='#27272a'; this.style.color='#71717a'" onmouseover="this.style.borderColor='#3f3f46'; this.style.color='#a1a1aa'" style={{textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.375rem 1rem', borderRadius: '9999px', border: '1px solid #27272a', color: '#71717a', transition: 'all 0.3s ease', position: 'relative'}}>
<span id="badgeDot" style={{width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block', position: 'relative', boxShadow: '0 0 8px rgba(34, 197, 94, 0.6)'}}></span>
          Unlink Hackathon is live
        </a>

<div style={{textAlign: 'center', maxWidth: '52rem', padding: '0 1rem'}}>
<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" id="headline" style={{fontWeight: '500', letterSpacing: '-0.04em', lineHeight: '1.15', color: '#e4e4e7', margin: '0'}}>
<span id="headlineText"></span>
<span id="cursor" style={{display: 'inline-block', width: '2px', height: '1em', backgroundColor: '#e4e4e7', marginLeft: '2px', verticalAlign: 'text-bottom', animation: 'blink 0.6s step-end infinite'}}></span>
</h1>
</div>

<a className="text-sm" href="https://docs.unlink.xyz" id="cta" onmouseout="this.style.backgroundColor='#e4e4e7'" onmouseover="this.style.backgroundColor='#ffffff'" style={{textDecoration: 'none', color: '#0a0a0a', backgroundColor: '#e4e4e7', fontWeight: '500', opacity: '0', transform: 'translateY(10px)', transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)', padding: '0.75rem 1.5rem', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', pointerEvents: 'none'}}>
          Start Building
          <iconify-icon icon="ri:arrow-right-line"></iconify-icon>
</a>
</div>

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

<a className="text-xs" href="https://feedback.unlink.xyz" onmouseout="this.style.color='#71717a'; this.style.opacity='0.7'" onmouseover="this.style.color='#e4e4e7'; this.style.opacity='1'" style={{textDecoration: 'none', color: '#71717a', fontWeight: '400', transition: 'color 0.3s ease, opacity 0.3s ease', opacity: '0.7'}}>
          Feedback
        </a>

<a href="https://x.com/unlink_xyz" onmouseout="this.style.color='#71717a'; this.style.opacity='0.7'" onmouseover="this.style.color='#e4e4e7'; this.style.opacity='1'" style={{textDecoration: 'none', color: '#71717a', transition: 'color 0.3s ease, opacity 0.3s ease', opacity: '0.7', display: 'flex', alignItems: 'center'}} target="_blank">
<iconify-icon height="16" icon="ri:twitter-x-line" width="16"></iconify-icon>
</a>
</div>
</div>
<style>
      @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
      }

      @keyframes badgePulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(113, 113, 122, 0.3); }
          50% { box-shadow: 0 0 12px 2px rgba(113, 113, 122, 0.15); }
      }

      @keyframes dotPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
      }

      * {
          box-sizing: border-box;
      }

      ::selection {
          background: #27272a;
          color: #e4e4e7;
      }
    </style>


    </>
  );
}
