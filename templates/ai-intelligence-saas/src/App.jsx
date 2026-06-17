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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function () {
          const container = document.getElementById("g-container");
          const stack = document.getElementById("g-stack");
          if (!container || !stack) return;

          const layer1 = stack.querySelector(".g-layer-1");
          const layer2 = stack.querySelector(".g-layer-2");
          const layer3 = stack.querySelector(".g-layer-3");

          let expanded = false;
          let rect = stack.getBoundingClientRect();

          const state = {
            mx: 0,
            my: 0,
            tx: 0,
            ty: 0,
            l1x: 0,
            l1y: 0,
            l2x: 0,
            l2y: 0,
            l3x: 0,
            l3y: 0
          };

          function updateRect() {
            rect = stack.getBoundingClientRect();
          }

          function animate() {
            state.tx += (state.mx - state.tx) * 0.08;
            state.ty += (state.my - state.ty) * 0.08;

            state.l1x += (state.ty - state.l1x) * 0.12;
            state.l1y += (state.tx - state.l1y) * 0.12;

            state.l2x += (state.ty * 0.7 - state.l2x) * 0.08;
            state.l2y += (state.tx * 0.7 - state.l2y) * 0.08;

            state.l3x += (state.ty * 0.45 - state.l3x) * 0.06;
            state.l3y += (state.tx * 0.45 - state.l3y) * 0.06;

            if (!expanded) {
              stack.style.transform = `rotateX(${-state.tx}deg) rotateY(${state.ty}deg)`;
              layer1.style.transform = `translate3d(0, 0, 0) rotateX(${state.l1x * 0.35}deg) rotateY(${state.l1y * 0.35}deg)`;
              layer2.style.transform = `translate3d(0, 28px, -60px) scale(0.97) rotateX(${state.l2x * 0.25}deg) rotateY(${state.l2y * 0.25}deg)`;
              layer3.style.transform = `translate3d(0, 54px, -120px) scale(0.94) rotateX(${state.l3x * 0.2}deg) rotateY(${state.l3y * 0.2}deg)`;
            } else {
              stack.style.transform = `rotateX(${-state.tx * 0.35}deg) rotateY(${state.ty * 0.35}deg)`;
            }

            requestAnimationFrame(animate);
          }

          container.addEventListener("mousemove", (e) => {
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const px = (x / rect.width - 0.5) * 2;
            const py = (y / rect.height - 0.5) * 2;

            state.my = px * 10;
            state.mx = py * 8;
          });

          container.addEventListener("mouseleave", () => {
            state.mx = 0;
            state.my = 0;
          });

          container.addEventListener("click", () => {
            expanded = !expanded;
            stack.classList.toggle("is-expanded", expanded);
          });

          window.addEventListener("resize", updateRect);
          updateRect();
          animate();
        })();
      


        (function () {
          const stack = document.getElementById('pipeline-stack');
          const svg = document.getElementById('pipeline-svg');
          const pathBase = document.getElementById('pipeline-path-base');
          const pathGlow = document.getElementById('pipeline-path-glow');

          if (!stack) return;
          const cards = stack.querySelectorAll('.pipeline-card');

          // Function to dynamically draw the curved connecting line
          function drawCurve() {
            if (!svg || !pathBase || !pathGlow || cards.length < 2) return;

            const rect = stack.getBoundingClientRect();
            let d = '';

            // Calculate node positions relative to the SVG container
            const points = Array.from(cards).map(card => {
              const cardRect = card.getBoundingClientRect();
              const isLeft = card.classList.contains('self-start');
              // Node is horizontally centered on the edge (12px wide -> 6px offset)
              const x = isLeft ? (cardRect.right - rect.left) + 6 : (cardRect.left - rect.left) - 6;
              const y = (cardRect.top - rect.top) + (cardRect.height / 2);
              return { x, y, isLeft };
            });

            d += `M ${points[0].x} ${points[0].y} `;

            for (let i = 1; i < points.length; i++) {
              const prev = points[i - 1];
              const curr = points[i];

              // Adaptive curvature based on distance to ensure smooth sweeping curves
              const distY = curr.y - prev.y;
              const curveture = Math.max(Math.abs(curr.x - prev.x) * 0.45, distY * 0.4, 50);

              // Control points push horizontally outwards from the nodes
              const cp1x = prev.isLeft ? prev.x + curveture : prev.x - curveture;
              const cp2x = curr.isLeft ? curr.x + curveture : curr.x - curveture;

              d += `C ${cp1x} ${prev.y}, ${cp2x} ${curr.y}, ${curr.x} ${curr.y} `;
            }

            pathBase.setAttribute('d', d);
            pathGlow.setAttribute('d', d);

            // Prepare animation properties
            const length = pathBase.getTotalLength();
            pathGlow.style.strokeDasharray = length;
            updateScroll();
          }

          // Animate the line based on scroll progress
          function updateScroll() {
            if (!pathGlow) return;
            const rect = stack.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            // Start animation when top of stack enters view, end when bottom is in middle
            const start = rect.top - (viewHeight * 0.7);
            const end = rect.bottom - (viewHeight * 0.4);
            const total = end - start;

            let progress = -start / total;
            progress = Math.max(0, Math.min(1, progress));

            const length = pathBase.getTotalLength();
            if (length > 0) {
                pathGlow.style.strokeDashoffset = length * (1 - progress);
            }
          }

          // Intersection Observer for revealing cards and lighting up nodes
          const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const card = entry.target;
                card.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
                card.classList.add('opacity-100', 'translate-y-0', 'scale-100');

                const node = card.querySelector('.pipeline-side-node');
                if (node) {
                  node.classList.remove('border-white/20', 'bg-[#030304]');
                  node.classList.add(
                    'border-[#33D2FF]/60',
                    'bg-[#33D2FF]',
                    'shadow-[0_0_14px_rgba(51,210,255,0.6)]'
                  );
                }
                obs.unobserve(card);
              }
            });
          }, {
            threshold: 0.2,
            rootMargin: '0px 0px -15% 0px'
          });

          cards.forEach(card => observer.observe(card));

          // Re-draw curve on resize to keep connections exact
          if (window.ResizeObserver) {
            const resizeObs = new ResizeObserver(() => drawCurve());
            resizeObs.observe(stack);
          } else {
            window.addEventListener('resize', drawCurve);
          }

          window.addEventListener('scroll', updateScroll, { passive: true });

          // Initial calculation
          setTimeout(drawCurve, 100);
        })();
      


        (function () {
          const shell = document.getElementById('sec-slider-shell');
          const thumb = document.getElementById('sec-slider-thumb');
          const progress = document.getElementById('sec-slider-progress');
          const label = document.getElementById('sec-slider-label');

          if (!shell || !thumb || !progress || !label) return;

          let isDragging = false;
          let startX = 0;
          let currentX = 0;
          let maxX = 0;

          function updateBounds() {
            maxX = shell.clientWidth - thumb.offsetWidth - 8;
          }

          function setPosition(x) {
            const clamped = Math.max(0, Math.min(x, maxX));
            currentX = clamped;
            thumb.style.transform = `translateX(${clamped}px)`;
            progress.style.width = `${clamped + thumb.offsetWidth + 8}px`;

            const ratio = maxX > 0 ? clamped / maxX : 0;

            if (ratio > 0.92) {
              label.textContent = 'Armed';
              label.style.color = '#fff';
            } else if (ratio > 0.45) {
              label.textContent = 'Verifying...';
              label.style.color = '#d4d4d8';
            } else {
              label.textContent = 'Slide to Execute';
              label.style.color = '#a1a1aa';
            }
          }

          function resetSlider() {
            thumb.style.transition = 'transform 0.45s cubic-bezier(0.16,1,0.3,1)';
            progress.style.transition = 'width 0.45s cubic-bezier(0.16,1,0.3,1)';
            setPosition(0);
            setTimeout(() => {
              thumb.style.transition = '';
              progress.style.transition = '';
            }, 500);
          }

          function completeSlider() {
            thumb.style.transition = 'transform 0.35s cubic-bezier(0.16,1,0.3,1)';
            progress.style.transition = 'width 0.35s cubic-bezier(0.16,1,0.3,1)';
            setPosition(maxX);
            label.textContent = 'Executing';
            label.style.color = '#fff';

            setTimeout(() => {
              label.textContent = 'Consensus Locked';
            }, 900);

            setTimeout(() => {
              resetSlider();
            }, 2200);
          }

          function pointerX(event) {
            return event.touches ? event.touches[0].clientX : event.clientX;
          }

          function dragStart(event) {
            updateBounds();
            isDragging = true;
            thumb.style.transition = '';
            progress.style.transition = '';
            startX = pointerX(event) - currentX;
          }

          function dragMove(event) {
            if (!isDragging) return;
            const x = pointerX(event) - startX;
            setPosition(x);
          }

          function dragEnd() {
            if (!isDragging) return;
            isDragging = false;

            const ratio = maxX > 0 ? currentX / maxX : 0;
            if (ratio > 0.88) completeSlider();
            else resetSlider();
          }

          thumb.addEventListener('mousedown', dragStart);
          window.addEventListener('mousemove', dragMove);
          window.addEventListener('mouseup', dragEnd);

          thumb.addEventListener('touchstart', dragStart, { passive: true });
          window.addEventListener('touchmove', dragMove, { passive: true });
          window.addEventListener('touchend', dragEnd);

          window.addEventListener('resize', () => {
            updateBounds();
            resetSlider();
          });

          updateBounds();
          setPosition(0);
        })();
      


      document.addEventListener('DOMContentLoaded', () => {
        const header = document.getElementById('header');

        window.addEventListener('scroll', () => {
          if (window.scrollY > 50) header.classList.add('scrolled');
          else header.classList.remove('scrolled');
        });

        const revealObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

        /* HERO GLOBE */
        const canvas = document.getElementById('hero-globe');
        const ctx = canvas.getContext('2d');
        let width, height;

        const globeNodes = [];
        const arcs = [];
        const numNodes = 800;
        const globeRadius = 220;

        const phi = Math.PI * (3 - Math.sqrt(5));
        for (let i = 0; i < numNodes; i++) {
          const y = 1 - (i / (numNodes - 1)) * 2;
          const radius = Math.sqrt(1 - y * y);
          const theta = phi * i;

          const x = Math.cos(theta) * radius;
          const z = Math.sin(theta) * radius;
          const isHighlight = Math.random() > 0.92;

          const depthOffset = 1 + (Math.random() * 0.06 - 0.03);

          globeNodes.push({
            x: x * depthOffset,
            y: y * depthOffset,
            z: z * depthOffset,
            baseRadius: isHighlight ? 2 : 1,
            color: isHighlight ? '#33D2FF' : 'rgba(74, 140, 255, 0.8)'
          });
        }

        for (let i = 0; i < 18; i++) {
          arcs.push({
            n1: Math.floor(Math.random() * numNodes),
            n2: Math.floor(Math.random() * numNodes),
            progress: Math.random(),
            speed: 0.002 + Math.random() * 0.005
          });
        }

        const orbitalRings = [
          { radius: 1.3, tiltX: 0.2, tiltZ: 0.5, speed: 0.001, angle: 0 },
          { radius: 1.45, tiltX: -0.4, tiltZ: 0.2, speed: -0.0015, angle: Math.PI / 3 },
          { radius: 1.2, tiltX: 0.5, tiltZ: -0.3, speed: 0.002, angle: Math.PI / 1.5 }
        ];

        function resizeCanvas() {
          const parent = canvas.parentElement;
          width = parent.clientWidth;
          height = parent.clientHeight;

          const dpr = window.devicePixelRatio || 1;
          canvas.width = width * dpr;
          canvas.height = height * dpr;
          canvas.style.width = `${width}px`;
          canvas.style.height = `${height}px`;

          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.scale(dpr, dpr);
        }

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let angleY = 0;
        let angleX = 0.2;

        function renderGlobe() {
          ctx.clearRect(0, 0, width, height);
          angleY += 0.002;

          const cx = width / 2;
          const cy = height / 2;
          const fov = 800;

          const gradient = ctx.createRadialGradient(cx, cy, globeRadius * 0.4, cx, cy, globeRadius * 1.6);
          gradient.addColorStop(0, 'rgba(51, 210, 255, 0.15)');
          gradient.addColorStop(0.5, 'rgba(51, 210, 255, 0.04)');
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.fillRect(0, 0, width, height);

          const sinY = Math.sin(angleY);
          const cosY = Math.cos(angleY);
          const sinX = Math.sin(angleX);
          const cosX = Math.cos(angleX);

          ctx.lineWidth = 1;
          ctx.strokeStyle = 'rgba(74, 140, 255, 0.1)';
          ctx.setLineDash([2, 4]);

          for (let lat = -4; lat <= 4; lat++) {
            const y = lat * 0.22;
            const r = Math.sqrt(1 - y * y) * globeRadius;
            ctx.beginPath();
            for (let lon = 0; lon <= Math.PI * 2.01; lon += 0.1) {
              const x = Math.cos(lon) * r;
              const z = Math.sin(lon) * r;

              const x1 = x * cosY - z * sinY;
              const z1 = x * sinY + z * cosY;

              const y1 = (y * globeRadius) * cosX - z1 * sinX;
              const z2 = (y * globeRadius) * sinX + z1 * cosX;

              const scale = fov / (fov + z2);
              const px = cx + x1 * scale;
              const py = cy + y1 * scale;

              if (lon === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.stroke();
          }

          for (let lon = 0; lon < Math.PI; lon += Math.PI / 6) {
            ctx.beginPath();
            for (let lat = -Math.PI/2; lat <= Math.PI/2 + 0.01; lat += 0.1) {
              const y = Math.sin(lat) * globeRadius;
              const r = Math.cos(lat) * globeRadius;
              const x = Math.cos(lon) * r;
              const z = Math.sin(lon) * r;

              const x1 = x * cosY - z * sinY;
              const z1 = x * sinY + z * cosY;

              const y1 = y * cosX - z1 * sinX;
              const z2 = y * sinX + z1 * cosX;

              const scale = fov / (fov + z2);
              const px = cx + x1 * scale;
              const py = cy + y1 * scale;

              if (lat === -Math.PI/2) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.stroke();
          }

          ctx.setLineDash([]);

          const projectedNodes = [];

          for (let i = 0; i < numNodes; i++) {
            const n = globeNodes[i];

            const x1 = n.x * cosY - n.z * sinY;
            const z1 = n.x * sinY + n.z * cosY;

            const y1 = n.y * cosX - z1 * sinX;
            const z2 = n.y * sinX + z1 * cosX;

            const scale = fov / (fov + z2 * globeRadius);
            const px = cx + x1 * globeRadius * scale;
            const py = cy + y1 * globeRadius * scale;

            projectedNodes.push({
              px,
              py,
              z: z2,
              scale,
              color: n.color,
              r: n.baseRadius
            });
          }

          orbitalRings.forEach(ring => {
            ring.angle += ring.speed;
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(51, 210, 255, 0.2)';
            ctx.lineWidth = 1;
            for (let i = 0; i <= Math.PI * 2.01; i += 0.05) {
              const x = Math.cos(i) * globeRadius * ring.radius;
              const z = Math.sin(i) * globeRadius * ring.radius;

              const ty = x * ring.tiltX + z * ring.tiltZ;

              const x1 = x * Math.cos(ring.angle) - z * Math.sin(ring.angle);
              const z1 = x * Math.sin(ring.angle) + z * Math.cos(ring.angle);

              const px_rot = x1 * cosY - z1 * sinY;
              const pz_rot = x1 * sinY + z1 * cosY;

              const py_rot = ty * cosX - pz_rot * sinX;
              const final_z = ty * sinX + pz_rot * cosX;

              const scale = fov / (fov + final_z);
              const px = cx + px_rot * scale;
              const py = cy + py_rot * scale;

              if (i === 0) ctx.moveTo(px, py);
              else ctx.lineTo(px, py);
            }
            ctx.stroke();

            const dot_x = Math.cos(0) * globeRadius * ring.radius;
            const dot_z = Math.sin(0) * globeRadius * ring.radius;
            const dot_ty = dot_x * ring.tiltX + dot_z * ring.tiltZ;

            const dx1 = dot_x * Math.cos(ring.angle) - dot_z * Math.sin(ring.angle);
            const dz1 = dot_x * Math.sin(ring.angle) + dot_z * Math.cos(ring.angle);

            const px_rot_d = dx1 * cosY - dz1 * sinY;
            const pz_rot_d = dx1 * sinY + dz1 * cosY;
            const py_rot_d = dot_ty * cosX - pz_rot_d * sinX;
            const final_z_d = dot_ty * sinX + pz_rot_d * cosX;

            if (final_z_d > -globeRadius * 1.5) {
               const scale = fov / (fov + final_z_d);
               const pX = cx + px_rot_d * scale;
               const pY = cy + py_rot_d * scale;
               ctx.beginPath();
               ctx.arc(pX, pY, 2 * scale, 0, Math.PI * 2);
               ctx.fillStyle = '#33D2FF';
               ctx.fill();

               ctx.beginPath();
               ctx.arc(pX, pY, 6 * scale, 0, Math.PI * 2);
               ctx.fillStyle = 'rgba(51, 210, 255, 0.4)';
               ctx.fill();
            }
          });

          ctx.lineWidth = 1.5;

          arcs.forEach((arc) => {
            arc.progress += arc.speed;
            if (arc.progress > 1) arc.progress = 0;

            const pn1 = projectedNodes[arc.n1];
            const pn2 = projectedNodes[arc.n2];

            if (pn1.z > -0.5 && pn2.z > -0.5) {
              ctx.beginPath();
              ctx.moveTo(pn1.px, pn1.py);

              const mx = (pn1.px + pn2.px) / 2;
              const my = (pn1.py + pn2.py) / 2 - 20 * pn1.scale;

              ctx.quadraticCurveTo(mx, my, pn2.px, pn2.py);

              const grad = ctx.createLinearGradient(pn1.px, pn1.py, pn2.px, pn2.py);
              grad.addColorStop(0, 'rgba(51, 210, 255, 0)');
              grad.addColorStop(arc.progress, 'rgba(51, 210, 255, 0.8)');
              grad.addColorStop(Math.min(1, arc.progress + 0.1), 'rgba(51, 210, 255, 0)');

              ctx.strokeStyle = grad;
              ctx.stroke();
            }
          });

          projectedNodes.sort((a, b) => b.z - a.z);

          for (let i = 0; i < projectedNodes.length; i++) {
            const p = projectedNodes[i];
            const alpha = Math.min(1, Math.max(0.1, p.z + 1.2));

            const distFromCenter = Math.sqrt(Math.pow(p.px - cx, 2) + Math.pow(p.py - cy, 2));
            const edgeFactor = Math.min(1, distFromCenter / (globeRadius * 0.8));
            const finalAlpha = Math.min(1, alpha * (0.5 + edgeFactor * 0.5));

            ctx.beginPath();
            ctx.arc(p.px, p.py, p.r * p.scale, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = finalAlpha;
            ctx.fill();

            if (p.r > 1.5 && finalAlpha > 0.4) {
              ctx.beginPath();
              ctx.arc(p.px, p.py, p.r * 2.5 * p.scale, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(51, 210, 255, 0.3)';
              ctx.fill();
            }
          }

          ctx.globalAlpha = 1;
          requestAnimationFrame(renderGlobe);
        }

        renderGlobe();

        /* GRAVITY CARDS */
        const gContainer = document.getElementById('g-container');
        const gStack = document.getElementById('g-stack');
        const gLayers = document.querySelectorAll('.g-layer');

        let tX = 0;
        let tY = 0;
        let cX = [0, 0, 0];
        let cY = [0, 0, 0];
        const speeds = [0.1, 0.05, 0.02];

        if(gContainer) {
          gContainer.addEventListener('mousemove', (e) => {
            const rect = gContainer.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            gStack.style.transform = `rotateX(${-y * 15}deg) rotateY(${x * 15}deg)`;
            tX = x * 20;
            tY = y * 20;
          });

          gContainer.addEventListener('mouseleave', () => {
            gStack.style.transform = 'rotateX(0deg) rotateY(0deg)';
            tX = 0;
            tY = 0;
          });

          function renderGravity() {
            for (let i = 0; i < 3; i++) {
              cX[i] += (tX - cX[i]) * speeds[i];
              cY[i] += (tY - cY[i]) * speeds[i];

              const z = i === 0 ? 0 : i === 1 ? -20 : -40;
              const s = i === 0 ? 1 : i === 1 ? 0.95 : 0.9;
              gLayers[2 - i].style.transform = `translate3d(${cX[i]}px, ${cY[i]}px, ${z}px) scale(${s})`;
            }
            requestAnimationFrame(renderGravity);
          }

          renderGravity();
        }

        /* NEURAL PANEL */
        const inpFlux = document.getElementById('inp-flux');
        const valFlux = document.getElementById('val-flux');
        const modFlux = document.getElementById('mod-flux');
        const subFlux = document.getElementById('sub-flux');
        const pulseFlux = document.getElementById('pulse-flux');
        let fluxTimeout;

        if(inpFlux) {
          inpFlux.addEventListener('input', (e) => {
            valFlux.innerText = `${e.target.value}%`;
            pulseFlux.classList.remove('fire');
            void pulseFlux.offsetWidth;
            pulseFlux.classList.add('fire');

            modFlux.classList.add('active-blue');
            subFlux.innerText = `Ingesting ${e.target.value}TB...`;

            clearTimeout(fluxTimeout);
            fluxTimeout = setTimeout(() => {
              modFlux.classList.remove('active-blue');
              subFlux.innerText = `Steady at ${e.target.value}%.`;
            }, 800);
          });
        }

        const inpRelay = document.getElementById('inp-relay');
        const valRelay = document.getElementById('val-relay');
        const modRelay = document.getElementById('mod-relay');
        const subRelay = document.getElementById('sub-relay');
        const pulseRelay = document.getElementById('pulse-relay');
        let relayActive = false;

        if(inpRelay) {
          inpRelay.addEventListener('click', () => {
            relayActive = !relayActive;

            if (relayActive) {
              inpRelay.classList.add('active');
              valRelay.innerText = 'ON';
              valRelay.style.color = 'var(--accent-cyan)';
            } else {
              inpRelay.classList.remove('active');
              valRelay.innerText = 'OFF';
              valRelay.style.color = 'var(--text-dim)';
            }

            pulseRelay.classList.remove('fire');
            void pulseRelay.offsetWidth;
            pulseRelay.classList.add('fire');

            setTimeout(() => {
              if (relayActive) {
                modRelay.classList.add('active-cyan');
                subRelay.innerText = 'Bypass open. Traffic rerouted.';
              } else {
                modRelay.classList.remove('active-cyan');
                subRelay.innerText = 'Protocol locked.';
              }
            }, 400);
          });
        }

        /* TIMELINE */
        const tlItems = document.querySelectorAll('.tl-item');
        const tlProgress = document.getElementById('tl-progress');

        const tlObserver = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            if(tlProgress) tlProgress.style.height = '100%';
            tlItems.forEach((item, idx) => {
              setTimeout(() => item.classList.add('active'), 400 + idx * 500);
            });
            tlObserver.disconnect();
          }
        }, { threshold: 0.5 });

        const tlContainer = document.getElementById('tl-container');
        if(tlContainer) tlObserver.observe(tlContainer);

        /* SIGNAL BUTTON */
        const lsContainer = document.getElementById('ls-container');
        const lsBtn = document.getElementById('ls-btn');
        const lsText = document.getElementById('ls-text');

        if (lsText) {
          const textContent = lsText.innerText;
          lsText.innerHTML = '';

          function buildSignalText(text) {
            lsText.innerHTML = '';
            text.split('').forEach((char) => {
              const span = document.createElement('span');
              span.className = 'ls-char';
              span.innerText = char === ' ' ? '\u00A0' : char;
              span.style.setProperty('--rand', Math.random());
              lsText.appendChild(span);
            });
          }

          buildSignalText(textContent);

          if(lsBtn) {
            lsBtn.addEventListener('click', () => {
              const ring = document.createElement('div');
              ring.className = 'ls-burst-ring active';
              lsContainer.appendChild(ring);

              lsText.innerText = 'EXECUTING...';
              lsText.style.color = 'var(--accent-blue)';

              setTimeout(() => {
                buildSignalText(textContent);
                lsText.style.color = '#fff';
              }, 2000);

              setTimeout(() => ring.remove(), 800);
            });
          }
        }

        /* TESTIMONIALS */
        const orbitSystem = document.getElementById('orbit-system');
        const orbitRing = document.getElementById('orbit-ring');
        const orbitLines = document.getElementById('orbit-lines');
        const ocQuote = document.getElementById('oc-quote');
        const ocMeta = document.getElementById('oc-meta');
        const ocName = document.getElementById('oc-name');
        const ocRole = document.getElementById('oc-role');

        const testimonials = [
          {
            img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
            name: 'Sarah Jenkins',
            role: 'CTO, Nexus Corp',
            text: '"Aura has completely removed our deployment latency. It feels like the platform predicts our scaling needs before the metrics even spike."'
          },
          {
            img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
            name: 'David Chen',
            role: 'Lead Architect, Synthetix',
            text: '"The spatial logic interfaces are game-changing. Our engineers visually orchestrate pipelines in minutes instead of days."'
          },
          {
            img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
            name: 'Elena Rostova',
            role: 'VP Engineering, Vektor',
            text: '"Never seen a platform map neural logic so intuitively. It is literally a living map of our infrastructure."'
          },
          {
            img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
            name: 'Marcus Cole',
            role: 'DevOps Lead, Omni',
            text: '"Deterministic deployments with a single genesis command. Aura represents the pinnacle of modern enterprise tooling."'
          }
        ];

        if(orbitSystem) {
          const radius = window.innerWidth < 768 ? 140 : 260;
          const centerOffset = window.innerWidth < 768 ? 200 : 300;
          const orbitNodes = [];
          const orbitLinesList = [];

          testimonials.forEach((t, i) => {
            const angle = (i / testimonials.length) * Math.PI * 2;

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', centerOffset);
            line.setAttribute('y1', centerOffset);
            line.setAttribute('x2', centerOffset + Math.cos(angle) * radius);
            line.setAttribute('y2', centerOffset + Math.sin(angle) * radius);
            line.classList.add('orbit-line');
            if (i === 0) line.classList.add('active');
            orbitLines.appendChild(line);
            orbitLinesList.push(line);

            const node = document.createElement('div');
            node.className = `orbit-node ${i === 0 ? 'active' : ''}`;

            const img = document.createElement('img');
            img.src = t.img;
            node.appendChild(img);

            node.style.left = `${centerOffset + Math.cos(angle) * radius}px`;
            node.style.top = `${centerOffset + Math.sin(angle) * radius}px`;

            node.addEventListener('click', () => activateTestimonial(i));
            orbitRing.appendChild(node);

            orbitNodes.push({ el: node, angle });
          });

          function activateTestimonial(index) {
            orbitNodes.forEach((n) => n.el.classList.remove('active'));
            orbitLinesList.forEach((l) => l.classList.remove('active'));
            orbitNodes[index].el.classList.add('active');
            orbitLinesList[index].classList.add('active');

            ocQuote.style.opacity = 0;
            ocMeta.style.opacity = 0;

            setTimeout(() => {
              ocQuote.innerText = testimonials[index].text;
              ocName.innerText = testimonials[index].name;
              ocRole.innerText = testimonials[index].role;
              ocQuote.style.opacity = 1;
              ocMeta.style.opacity = 1;
            }, 300);
          }

          let orbAngle = 0;
          let orbSpeed = 0.1;

          orbitSystem.addEventListener('mouseenter', () => { orbSpeed = 0.02; });
          orbitSystem.addEventListener('mouseleave', () => { orbSpeed = 0.1; });

          function renderOrbit() {
            orbAngle = (orbAngle + orbSpeed) % 360;
            orbitRing.style.transform = `rotate(${orbAngle}deg)`;
            orbitLines.style.transform = `rotate(${orbAngle}deg)`;

            orbitNodes.forEach((n) => {
              n.el.style.transform = `rotate(${-orbAngle}deg) scale(${n.el.classList.contains('active') ? 1.2 : 1})`;
            });

            requestAnimationFrame(renderOrbit);
          }

          renderOrbit();
        }
      });
    


      (function() {
        const stack = document.querySelector('.testimonial-stack-wrap');
        if (!stack) return;

        const cards = Array.from(stack.querySelectorAll('.testimonial-stack-card'));
        let stateIndices = [2, 1, 0];

        let isDragging = false;
        let startX = 0;
        let currentX = 0;

        function getResponsiveStates() {
          const w = window.innerWidth;
          if (w <= 767) {
            return [
              { id: 'front', top: 86, scale: 1, rot: 0, op: 1, z: 3 },
              { id: 'back-right', top: 34, scale: 0.98, rot: 4, op: 0.68, z: 2 },
              { id: 'back-left', top: 18, scale: 0.96, rot: -4, op: 0.55, z: 1 }
            ];
          } else if (w <= 1024) {
            return [
              { id: 'front', top: 108, scale: 1, rot: 0, op: 1, z: 3 },
              { id: 'back-right', top: 44, scale: 0.97, rot: 5, op: 0.68, z: 2 },
              { id: 'back-left', top: 26, scale: 0.95, rot: -5, op: 0.55, z: 1 }
            ];
          }
          return [
            { id: 'front', top: 120, scale: 1, rot: 0, op: 1, z: 3 },
            { id: 'back-right', top: 54, scale: 0.95, rot: 6, op: 0.68, z: 2 },
            { id: 'back-left', top: 36, scale: 0.93, rot: -6, op: 0.55, z: 1 }
          ];
        }

        function updateCards(progress = 0) {
          const states = getResponsiveStates();
          cards.forEach((card, i) => {
            const stateIdx = stateIndices[i];
            let currentState = states[stateIdx];
            let nextState;

            if (progress < 0) {
              nextState = states[stateIdx === 0 ? 2 : (stateIdx === 1 ? 0 : 1)];
            } else if (progress > 0) {
              nextState = states[stateIdx === 0 ? 1 : (stateIdx === 2 ? 0 : 2)];
            } else {
              nextState = currentState;
            }

            const p = Math.abs(progress);

            const top = currentState.top + (nextState.top - currentState.top) * p;
            const scale = currentState.scale + (nextState.scale - currentState.scale) * p;
            let rot = currentState.rot + (nextState.rot - currentState.rot) * p;
            const op = currentState.op + (nextState.op - currentState.op) * p;

            let tx = 0;
            if (stateIdx === 0) {
              tx = currentX - startX;
              rot += (tx * 0.04);
            }

            card.style.top = `${top}px`;
            card.style.zIndex = stateIdx === 0 ? 3 : (p > 0.5 && nextState.id === 'front' ? 4 : currentState.z);
            card.style.opacity = op;
            card.style.transform = `translateX(calc(-50% + ${tx}px)) rotate(${rot}deg) scale(${scale})`;
          });
        }

        function onStart(e) {
          const card = e.target.closest('.testimonial-stack-card');
          if (!card) return;

          const index = cards.indexOf(card);
          if (stateIndices[index] !== 0) {
            if (stateIndices[index] === 1) {
               stateIndices = stateIndices.map(s => s === 0 ? 2 : (s === 1 ? 0 : 1));
            } else if (stateIndices[index] === 2) {
               stateIndices = stateIndices.map(s => s === 0 ? 1 : (s === 2 ? 0 : 2));
            }
            resetStyles();
            return;
          }

          isDragging = true;
          startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
          currentX = startX;

          cards.forEach(c => {
             c.className = 'testimonial-stack-card no-transition';
          });
          updateCards(0);
        }

        function onMove(e) {
          if (!isDragging) return;
          currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
          let dragDist = currentX - startX;
          let progress = dragDist / (window.innerWidth * 0.35);
          progress = Math.max(-1, Math.min(1, progress));
          updateCards(progress);
        }

        function resetStyles() {
           const states = getResponsiveStates();
           cards.forEach((c, i) => {
              c.removeAttribute('style');
              c.className = `testimonial-stack-card card-${states[stateIndices[i]].id}`;
           });
        }

        function onEnd(e) {
          if (!isDragging) return;
          isDragging = false;
          let dragDist = currentX - startX;

          if (dragDist < -60) {
             stateIndices = stateIndices.map(s => s === 0 ? 2 : (s === 1 ? 0 : 1));
          } else if (dragDist > 60) {
             stateIndices = stateIndices.map(s => s === 0 ? 1 : (s === 2 ? 0 : 2));
          }

          resetStyles();
        }

        stack.addEventListener('mousedown', onStart);
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onEnd);

        stack.addEventListener('touchstart', onStart, {passive: true});
        window.addEventListener('touchmove', onMove, {passive: true});
        window.addEventListener('touchend', onEnd);
      })();
    


      document.addEventListener('DOMContentLoaded', () => {
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileLinks = document.querySelectorAll('.mobile-link, .mobile-cta a');

        if (mobileBtn) {
          mobileBtn.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
          });

          mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
              document.body.classList.remove('menu-open');
            });
          });
        }
      });
    


      document.addEventListener('DOMContentLoaded', () => {
        if (typeof THREE === 'undefined') {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
          script.onload = initWave;
          document.head.appendChild(script);
        } else {
          initWave();
        }

        function initWave() {
          const container = document.getElementById('webgl-wave-container');
          if (!container) return;

          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 1, 10000);
          camera.position.z = 1000;
          camera.position.y = 300;
          camera.lookAt(scene.position);

          const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
          renderer.setPixelRatio(window.devicePixelRatio);
          renderer.setSize(container.clientWidth, container.clientHeight);
          container.appendChild(renderer.domElement);

          const SEPARATION = 70, AMOUNTX = 80, AMOUNTY = 60;
          const numParticles = AMOUNTX * AMOUNTY;
          const positions = new Float32Array(numParticles * 3);
          const scales = new Float32Array(numParticles);

          let i = 0, j = 0;
          for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
              positions[i] = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
              positions[i + 1] = 0;
              positions[i + 2] = iy * SEPARATION - ((AMOUNTY * SEPARATION) / 2);
              scales[j] = 1;
              i += 3;
              j++;
            }
          }

          const geometry = new THREE.BufferGeometry();
          geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
          geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

          const material = new THREE.ShaderMaterial({
            uniforms: {
              color: { value: new THREE.Color(0x33D2FF) },
            },
            vertexShader: `
              attribute float scale;
              void main() {
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = scale * (200.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
              }
            `,
            fragmentShader: `
              uniform vec3 color;
              void main() {
                if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
                gl_FragColor = vec4(color, 0.6);
              }
            `,
            transparent: true
          });

          const particles = new THREE.Points(geometry, material);
          scene.add(particles);

          let count = 0;
          function render() {
            requestAnimationFrame(render);
            const positions = particles.geometry.attributes.position.array;
            const scales = particles.geometry.attributes.scale.array;

            let i = 0, j = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
              for (let iy = 0; iy < AMOUNTY; iy++) {
                positions[i + 1] = (Math.sin((ix + count) * 0.3) * 50) +
                                   (Math.sin((iy + count) * 0.5) * 50);
                scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 4 +
                            (Math.sin((iy + count) * 0.5) + 1) * 4;
                i += 3;
                j++;
              }
            }

            particles.geometry.attributes.position.needsUpdate = true;
            particles.geometry.attributes.scale.needsUpdate = true;
            renderer.render(scene, camera);
            count += 0.04;
          }

          window.addEventListener('resize', () => {
            if(!container) return;
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
          });

          render();
        }
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
      
<div className="ambient-glow"></div>
<div className="grid-layer"></div>
<div className="noise-layer"></div>
<header className="fixed z-[1000] flex transition-all duration-500 h-[90px] top-0 right-0 left-0 items-center" id="header">
<div className="absolute inset-0 bg-[#050507]/80 backdrop-blur-xl border-b border-white/[0.04] opacity-0 transition-opacity duration-500 pointer-events-none" id="header-bg">
<div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#33D2FF]/25 to-transparent"></div>
<div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_top,rgba(51,210,255,0.06)_0%,transparent_70%)]"></div>
</div>
<div className="container relative z-10 flex justify-between items-center w-full">

<a className="block w-[110px] h-[36px] bg-left bg-no-repeat bg-contain bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d29ebd67-b00e-4ac9-9354-280fd04105d3_1600w.png')] hover:opacity-80 transition-opacity duration-300" href="/home"></a>

<nav className="hidden md:flex items-center gap-10">
<a className="group text-[13px] hover:text-white transition-colors duration-300 uppercase font-semibold text-[#888894] tracking-wide relative" href="/platform" style={{fontFamily: 'var(--font-display)'}}>
            Platform
            <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#33D2FF] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(51,210,255,0.6)]"></span>
</a>
<a className="group text-[13px] hover:text-white transition-colors duration-300 uppercase font-semibold text-[#888894] tracking-wide relative" href="/features" style={{fontFamily: 'var(--font-display)'}}>
            Features
            <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#33D2FF] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(51,210,255,0.6)]"></span>
</a>
<a className="group text-[13px] hover:text-white transition-colors duration-300 uppercase font-semibold text-[#888894] tracking-wide relative" href="/pricing" style={{fontFamily: 'var(--font-display)'}}>
            Pricing
            <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#33D2FF] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(51,210,255,0.6)]"></span>
</a>
<a className="group relative text-[13px] font-semibold text-[#888894] hover:text-white transition-colors duration-300 tracking-wide uppercase" href="/blog" style={{fontFamily: 'var(--font-display)'}}>
            Blog
            <span className="absolute -bottom-2 left-0 w-0 h-[1.5px] bg-[#33D2FF] transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(51,210,255,0.6)]"></span>
</a>
</nav>

<div className="hidden md:flex items-center">
<a className="group inline-flex items-center justify-center border-white/[0.08] text-[13px] transition-all duration-500 hover:bg-[#33D2FF]/10 hover:border-[#33D2FF]/40 hover:shadow-[0_0_20px_rgba(51,210,255,0.2)] hover:-translate-y-[1px] font-semibold text-white tracking-wide h-10 border rounded-full pr-6 pl-6 relative" href="/request-access" style={{fontFamily: 'var(--font-body)'}}>
<span className="z-10 relative drop-shadow-md cursor-pointer" onclick="window.location.href='/request-access'" role="button">
              Request Access
            </span>
<div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-[#33D2FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
</a>
</div>

<button className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full bg-white/[0.02] border border-white/[0.06] relative z-[1001] transition-all duration-300 hover:bg-white/[0.06]" id="mobile-menu-btn">
<span className="absolute w-[16px] h-[1.5px] bg-white rounded-full transition-transform duration-300 -translate-y-[6px]"></span>
<span className="absolute w-[16px] h-[1.5px] bg-white rounded-full transition-opacity duration-300"></span>
<span className="absolute w-[16px] h-[1.5px] bg-white rounded-full transition-transform duration-300 translate-y-[6px]"></span>
</button>
</div>
</header>

<div className="fixed inset-0 z-[999] bg-[#030304]/95 backdrop-blur-3xl opacity-0 pointer-events-none transition-opacity duration-500 flex flex-col pt-28 px-8 pb-12 overflow-hidden border-t border-[#33D2FF]/10" id="mobile-menu">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(51,210,255,0.1)_0%,transparent_60%)] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#33D2FF]/20 to-transparent"></div>
<nav className="flex flex-col gap-8 relative z-10 mt-8">
<a className="mobile-link text-3xl font-normal text-white/70 hover:text-white hover:pl-2 transition-all duration-300 tracking-tight transform translate-y-4 opacity-0 border-b border-white/[0.04] pb-4" href="/platform" style={{fontFamily: 'var(--font-display)'}}>
          Platform
        </a>
<a className="mobile-link text-3xl font-normal text-white/70 hover:text-white hover:pl-2 transition-all duration-300 tracking-tight transform translate-y-4 opacity-0 border-b border-white/[0.04] pb-4" href="/features" style={{fontFamily: 'var(--font-display)'}}>
          Features
        </a>
<a className="mobile-link text-3xl font-normal text-white/70 hover:text-white hover:pl-2 transition-all duration-300 tracking-tight transform translate-y-4 opacity-0 border-b border-white/[0.04] pb-4" href="/pricing" style={{fontFamily: 'var(--font-display)'}}>
          Pricing
        </a>
<a className="mobile-link text-3xl font-normal text-white/70 hover:text-white hover:pl-2 transition-all duration-300 tracking-tight transform translate-y-4 opacity-0 border-b border-white/[0.04] pb-4" href="/blog" style={{fontFamily: 'var(--font-display)'}}>
          Blog
        </a>
</nav>
<div className="mt-auto relative z-10 transform translate-y-4 opacity-0 mobile-cta">
<a className="flex items-center justify-center w-full h-14 rounded-xl bg-white/[0.05] border border-[#33D2FF]/30 text-white text-[15px] font-medium tracking-wide shadow-[0_0_20px_rgba(51,210,255,0.1)] hover:bg-[#33D2FF]/10 hover:shadow-[0_0_30px_rgba(51,210,255,0.2)] transition-all duration-300" href="/request-access">
          Request Access
        </a>
</div>
</div>
<section className="hero">
<div className="container hero-grid">
<div className="hero-content reveal visible">
<div className="tagline">Intelligence Platform</div>
<h1 className="">Architect the Invisible.</h1>
<p className="">
            Omi is the unified intelligence layer for spatial computing and
            autonomous enterprise workflows. Build systems that anticipate
            intent and execute with deterministic precision.
          </p>
<div className="hero-actions">
<a className="group relative inline-flex h-[52px] rounded-full no-underline cursor-pointer outline-none text-[14px] font-medium" href="/request-access" style={{fontFamily: 'var(--font-body)', WebkitTapHighlightColor: 'transparent'}}>

<div className="absolute inset-[-4px] bg-[rgba(74,140,255,0)] blur-[16px] opacity-0 rounded-full transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 translate-y-[2px] scale-95 pointer-events-none group-hover:opacity-100 group-hover:bg-[rgba(51,210,255,0.35)] group-hover:translate-y-[4px] group-hover:scale-[1.02] group-hover:blur-[20px]"></div>

<div className="relative z-10 flex h-full rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_10px_24px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.02)] group-hover:-translate-y-[2px] group-hover:shadow-[0_14px_32px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05)]">

<div className="w-[48px] h-full rounded-l-full relative border border-white/[0.08] border-r-black overflow-hidden z-20 bg-[linear-gradient(180deg,#42424a_0%,#202025_35%,#0f0f13_100%)] shadow-[inset_4px_0_8px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.12),inset_0_-3px_6px_rgba(0,0,0,0.9)]">

<div className="absolute top-[2px] left-[6px] right-[2px] h-[16px] rounded-full pointer-events-none mix-blend-overlay bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_70%)]"></div>
</div>

<div className="flex items-center pl-[8px] pr-[32px] h-full backdrop-blur-[12px] border border-[#33D2FF]/15 border-l-0 rounded-r-full relative z-10 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-[#33D2FF]/40 bg-[linear-gradient(90deg,rgba(20,24,32,0.7)_0%,rgba(10,14,20,0.5)_100%)] group-hover:bg-[linear-gradient(90deg,rgba(20,28,40,0.85)_0%,rgba(10,16,26,0.6)_100%)] shadow-[inset_0_0_20px_rgba(51,210,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:shadow-[inset_0_0_30px_rgba(51,210,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.25)]">

<div className="absolute top-[1px] left-0 right-[2px] h-[40%] rounded-tr-full pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)]"></div>

<div className="absolute -left-[10px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] opacity-60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none mix-blend-screen bg-[radial-gradient(circle,rgba(51,210,255,0.4)_0%,transparent_70%)] group-hover:opacity-100 group-hover:w-[60px] group-hover:h-[60px] group-hover:bg-[radial-gradient(circle,rgba(51,210,255,0.7)_0%,transparent_70%)]"></div>

<div className="flex items-center relative z-30 gap-[10px]">

<div className="w-[24px] h-[24px] -ml-[20px] text-white/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center drop-shadow-[0_0_4px_rgba(51,210,255,0)] group-hover:text-white/90 group-hover:drop-shadow-[0_0_8px_rgba(51,210,255,0.8)]">
<svg fill="none" height="24" strokeWidth="2" viewbox="0 0 28 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M-4 12 h 12 c 3 0, 3 -4.5, 6 -4.5 c 3 0, 3 9, 0 9 c -3 0, -3 -4.5, 0 -4.5 h 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>

<span className="text-white/80 tracking-[0.5px] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [text-shadow:0_0_10px_rgba(51,210,255,0)] group-hover:text-white group-hover:[text-shadow:0_0_12px_rgba(51,210,255,0.6)]">
                      Explore More
                    </span>
</div>
</div>
</div>
</a>
<a className="btn btn-secondary rounded-full text-center" href="/request-access">
              Documentation
            </a>
</div>
</div>
<div className="hero-visual reveal delay-2 visible overflow-visible">
<canvas className="" height="1200" id="hero-globe" style={{width: '698px', height: '600px'}} width="1396"></canvas>
</div>
</div>
</section>
<section className="section-padding" id="platform">
<style>
                /* ==========================================================================
                   PLATFORM SECTION LAYOUT
                   ========================================================================== */
                #platform .split-section {
                  display: grid;
                  grid-template-columns: minmax(320px, 1fr) minmax(320px, 520px);
                  gap: 64px;
                  align-items: center;
                }

                #platform .section-visual {
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  min-height: 620px;
                }

                /* ==========================================================================
                   GRAVITY FOLD CARDS
                   ========================================================================== */
                #platform .g-container {
                  perspective: 1500px;
                  width: 100%;
                  height: 100%;
                  min-height: 560px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                }

                #platform .g-stack {
                  position: relative;
                  width: 380px;
                  height: 520px;
                  transform-style: preserve-3d;
                  transition: transform 0.2s linear;
                }

                #platform .g-layer {
                  position: absolute;
                  inset: 0;
                  border-radius: 28px;
                  transform-style: preserve-3d;
                  background:
                    linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.015)),
                    linear-gradient(135deg, rgba(24, 24, 30, 0.86) 0%, rgba(10, 10, 14, 0.94) 100%);
                  border: 1px solid rgba(255, 255, 255, 0.08);
                  backdrop-filter: blur(12px);
                  -webkit-backdrop-filter: blur(12px);
                  box-shadow:
                    0 20px 40px rgba(0,0,0,0.45),
                    inset 0 1px 0 rgba(255,255,255,0.05);
                  transition:
                    transform 0.6s var(--easing, cubic-bezier(0.22, 1, 0.36, 1)),
                    box-shadow 0.6s var(--easing, cubic-bezier(0.22, 1, 0.36, 1)),
                    opacity 0.6s var(--easing, cubic-bezier(0.22, 1, 0.36, 1));
                  display: flex;
                  flex-direction: column;
                  padding: 34px 32px 28px;
                  overflow: hidden;
                }

                #platform .g-layer::before {
                  content: "";
                  position: absolute;
                  inset: 0;
                  border-radius: 28px;
                  padding: 1px;
                  background: linear-gradient(135deg, rgba(255,255,255,0.28), rgba(255,255,255,0));
                  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                  pointer-events: none;
                }

                #platform .g-layer::after {
                  content: "";
                  position: absolute;
                  inset: 0;
                  border-radius: inherit;
                  pointer-events: none;
                  background:
                    radial-gradient(circle at 20% 15%, rgba(255,255,255,0.08), transparent 24%),
                    linear-gradient(135deg, rgba(255,255,255,0.06), transparent 20%, transparent 78%, rgba(255,255,255,0.03));
                  opacity: 0.75;
                  mix-blend-mode: screen;
                }

                #platform .g-layer-3 {
                  opacity: 0.32;
                  transform: translate3d(0, 54px, -120px) scale(0.94);
                }

                #platform .g-layer-2 {
                  opacity: 0.56;
                  transform: translate3d(0, 28px, -60px) scale(0.97);
                }

                #platform .g-layer-1 {
                  z-index: 3;
                  transform: translate3d(0, 0, 0) scale(1);
                }

                /* ==========================================================================
                   CARD CONTENT
                   ========================================================================== */
                #platform .g-header {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  font-size: 13px;
                  color: var(--accent-cyan, #22d3ee);
                  letter-spacing: 0.22em;
                  text-transform: uppercase;
                  margin-bottom: 52px;
                  position: relative;
                  z-index: 2;
                }

                #platform .g-icon {
                  width: 56px;
                  height: 56px;
                  background: rgba(0, 240, 255, 0.08);
                  border: 1px solid rgba(0, 240, 255, 0.08);
                  border-radius: 999px;
                  display: grid;
                  place-items: center;
                  color: var(--accent-cyan, #22d3ee);
                  box-shadow: 0 0 30px rgba(0, 240, 255, 0.06);
                  flex: 0 0 auto;
                }

                #platform .g-body {
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  justify-content: center;
                  position: relative;
                  z-index: 2;
                }

                #platform .g-title {
                  font-size: clamp(2.2rem, 4vw, 3.6rem);
                  line-height: 1.02;
                  letter-spacing: -0.05em;
                  margin-bottom: 12px;
                  transform: translateZ(20px);
                  color: rgba(255,255,255,0.96);
                  font-weight: 400;
                }

                #platform .g-desc {
                  font-size: 1rem;
                  color: var(--text-dim, rgba(255,255,255,0.55));
                  transform: translateZ(10px);
                  margin-bottom: 42px;
                }

                #platform .g-graph {
                  height: 2px;
                  margin-top: 12px;
                  background: rgba(255,255,255,0.09);
                  position: relative;
                  overflow: visible;
                }

                #platform .g-graph::after {
                  content: "";
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 62%;
                  height: 100%;
                  background: var(--accent-cyan, #22d3ee);
                  box-shadow:
                    0 0 10px var(--accent-cyan, #22d3ee),
                    0 0 24px rgba(34, 211, 238, 0.35);
                }
        .testimonial-stack-card:hover {
            z-index: 20;
          }
                #platform .g-details {
                  position: absolute;
                  bottom: 28px;
                  left: 32px;
                  right: 32px;
                  opacity: 0;
                  transform: translateY(22px);
                  transition: all 0.4s var(--easing, cubic-bezier(0.22, 1, 0.36, 1));
                  z-index: 2;
                }

                #platform .g-details-row {
                  display: flex;
                  justify-content: space-between;
                  font-size: 0.88rem;
                  color: var(--text-dim, rgba(255,255,255,0.55));
                  border-top: 1px solid rgba(255,255,255,0.06);
                  padding-top: 14px;
                  margin-top: 14px;
                }

                #platform .g-details-row strong {
                  font-weight: 500;
                  color: #fff;
                }

                #platform .g-details-row .accent {
                  color: var(--accent-cyan, #22d3ee);
                }

                /* ==========================================================================
                   EXPANDED STATE
                   ========================================================================== */
                #platform .g-stack.is-expanded .g-layer-1 {
                  transform: translateZ(50px) translateY(-14px) !important;
                  box-shadow:
                    0 30px 60px rgba(0,0,0,0.72),
                    0 0 40px rgba(34, 211, 238, 0.04);
                }

                #platform .g-stack.is-expanded .g-layer-2 {
                  transform: translateZ(-80px) translateY(72px) rotateX(6deg) scale(0.98) !important;
                  opacity: 0.74;
                }

                #platform .g-stack.is-expanded .g-layer-3 {
                  transform: translateZ(-160px) translateY(136px) rotateX(11deg) scale(0.95) !important;
                  opacity: 0.5;
                }

                #platform .g-stack.is-expanded .g-details {
                  opacity: 1;
                  transform: translateY(0);
                  transition-delay: 0.2s;
                }

                @media (max-width: 980px) {
                  #platform .split-section {
                    grid-template-columns: 1fr;
                  }

                  #platform .section-visual {
                    min-height: 540px;
                  }

                  #platform .g-stack {
                    width: min(100%, 380px);
                    height: 500px;
                  }

                  #platform .g-layer {
                    padding: 28px 24px 24px;
                  }

                  #platform .g-details {
                    left: 24px;
                    right: 24px;
                  }
                }
      </style>
<div className="container split-section">
<div className="section-info reveal">
<div className="tagline">Spatial Interface</div>
<h2 className="">Contextual Depth Simulation.</h2>
<p className="">
            Interfaces that understand priority. Data is layered dynamically
            based on operational weight, mimicking physical tension to draw
            focus naturally to critical anomalies.
          </p>
<ul className="feature-list">
<li className="">
<div className="feature-icon">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<span>Real-time variable z-index architecture.</span>
</li>
<li className="">
<div className="feature-icon">
<svg fill="none" height="14" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="14">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18M9 21V9"></path>
</svg>
</div>
<span>Elastic lag interpolation for fluid UX.</span>
</li>
</ul>
</div>
<div className="section-visual reveal delay-2">
<div className="g-container" id="g-container">
<div className="g-stack" id="g-stack">
<div className="g-layer g-layer-3"></div>
<div className="g-layer g-layer-2"></div>
<div className="g-layer g-layer-1">
<div className="g-header">
<span>SECTOR 04</span>
<div className="g-icon">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
</div>
<div className="g-body">
<div className="g-title">Core Subsystem</div>
<div className="g-desc">Spatial depth simulation active.</div>
<div className="g-graph"></div>
</div>
<div className="g-details">
<div className="g-details-row">
<span>LATENCY</span>
</div>
<div className="g-details-row">
<span>PACKET LOSS</span>
</div>
<div className="g-details-row">
<span>UPLINK</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="section-padding" id="orchestration">
<div className="container split-section reverse">
<div className="section-info reveal">
<div className="tagline">Neural Logic</div>
<h2>Autonomous Routing.</h2>
<p>
            Synaptic load balancing across your entire infrastructure. Visual
            nodes represent live micro-services that react instantly to
            parameter shifts.
          </p>
<a className="btn btn-secondary" href="#">View Architecture</a>
</div>
<div className="section-visual reveal delay-2">
<div className="neural-panel">
<div className="np-header">
<div className="np-title">Active Mesh Network</div>
<div className="np-live">Monitoring Live</div>
</div>
<div className="np-row">
<div className="np-control">
<div className="np-label">
<span>Packet Flux</span>
<span className="np-val" id="val-flux">50%</span>
</div>
<input className="np-slider" id="inp-flux" max="100" min="0" type="range" value="50"/>
</div>
<div className="np-connector">
<div className="np-pulse blue" id="pulse-flux"></div>
</div>
<div className="np-module" id="mod-flux">
<div className="np-status-light"></div>
<div className="">
<div className="np-mod-text">Ingestion Layer</div>
<div className="np-mod-sub" id="sub-flux">
                    Awaiting manual override...
                  </div>
</div>
</div>
</div>
<div className="np-row">
<div className="np-control">
<div className="np-label">
<span>Bypass Protocol</span>
<span className="np-val" id="val-relay">OFF</span>
</div>
<div className="np-toggle" id="inp-relay">
<div className="np-toggle-thumb"></div>
</div>
</div>
<div className="np-connector">
<div className="np-pulse cyan" id="pulse-relay"></div>
</div>
<div className="np-module" id="mod-relay">
<div className="np-status-light"></div>
<div className="">
<div className="np-mod-text">Security Daemon</div>
<div className="np-mod-sub" id="sub-relay">Protocol locked.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section-padding">
<div className="container split-section" style={{alignItems: 'flex-start'}}>

<div className="section-info sticky top-32 reveal">
<div className="tagline">Deployment</div>
<h2 className="">Deterministic Pipelines.</h2>
<p className="">
            Fragmented operational processes lock into a seamless structural
            narrative as execution occurs. Total transparency from origin to
            deployment.
          </p>
</div>

<div className="section-visual flex justify-center w-full relative">
<div className="relative w-full flex flex-col gap-24 py-16 md:py-24 max-w-2xl mx-auto" id="pipeline-stack">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" id="pipeline-svg">
<defs>
<filter height="200%" id="glow-line" width="200%" x="-50%" y="-50%">
<fegaussianblur result="blur" stddeviation="5"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
<lineargradient id="glow-grad" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="rgba(51, 210, 255, 0.2)"></stop>
<stop offset="50%" stop-color="rgba(51, 210, 255, 1)"></stop>
<stop offset="100%" stop-color="rgba(51, 210, 255, 0.2)"></stop>
</lineargradient>
</defs>
<path d="M 218.0703125 217.625 C 350.4703125 217.625, 120.803125 548.625, 253.203125 548.625 C 124.103125 548.625, 347.1703125 871.375, 218.0703125 871.375 C 332.5203125 871.375, 138.753125 1157.5, 253.203125 1157.5 C 126.35312499999999 1157.5, 344.9203125 1474.625, 218.0703125 1474.625 " fill="none" id="pipeline-path-base" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5"></path>
<path d="M 218.0703125 217.625 C 350.4703125 217.625, 120.803125 548.625, 253.203125 548.625 C 124.103125 548.625, 347.1703125 871.375, 218.0703125 871.375 C 332.5203125 871.375, 138.753125 1157.5, 253.203125 1157.5 C 126.35312499999999 1157.5, 344.9203125 1474.625, 218.0703125 1474.625 " fill="none" filter="url(#glow-line)" id="pipeline-path-glow" stroke="url(#glow-grad)" strokeWidth="2" style={{transition: 'stroke-dashoffset 0.1s ease-out', strokeDasharray: '1476.35', strokeDashoffset: '0'}}></path>
</svg>

<div className="pipeline-card self-start w-[85%] md:w-[45%] max-w-[340px] ml-4 md:ml-0 mr-auto relative bg-[#111116]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-all duration-700 ease-out hover:bg-[#111116] hover:-translate-y-1 hover:border-[#33D2FF]/30 hover:shadow-[0_15px_40px_-10px_rgba(51,210,255,0.15)] cursor-pointer z-10" data-index="0">
<div className="pipeline-side-node absolute top-1/2 -translate-y-1/2 -right-[6px] w-3 h-3 rounded-full border z-20 transition-all duration-700"></div>
<div className="text-[#33D2FF] text-[11px] uppercase tracking-[2px] mb-2" style={{fontFamily: 'var(--font-display)'}}>
                Stage 01 // Provisioning
              </div>
<div className="text-[20px] text-white tracking-tight mb-2" style={{fontFamily: 'var(--font-display)'}}>
                Environment Synthesis
              </div>
<div className="text-[14px] text-[#888894] leading-relaxed">
                Automated sandbox creation and isolated key generation.
              </div>
</div>

<div className="pipeline-card self-end w-[85%] md:w-[45%] max-w-[340px] mr-4 md:mr-0 ml-auto relative bg-[#111116]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-all duration-700 ease-out hover:bg-[#111116] hover:-translate-y-1 hover:border-[#33D2FF]/30 hover:shadow-[0_15px_40px_-10px_rgba(51,210,255,0.15)] cursor-pointer z-10" data-index="1">
<div className="pipeline-side-node absolute top-1/2 -translate-y-1/2 -left-[6px] w-3 h-3 rounded-full border z-20 transition-all duration-700"></div>
<div className="text-[#33D2FF] text-[11px] uppercase tracking-[2px] mb-2" style={{fontFamily: 'var(--font-display)'}}>
                Stage 02 // Binding
              </div>
<div className="text-[20px] text-white tracking-tight mb-2" style={{fontFamily: 'var(--font-display)'}}>
                Logic Matrix Alignment
              </div>
<div className="text-[14px] text-[#888894] leading-relaxed">
                Event loops synchronized to enterprise webhooks.
              </div>
</div>

<div className="pipeline-card self-start w-[85%] md:w-[45%] max-w-[340px] ml-4 md:ml-0 mr-auto relative bg-[#111116]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-all duration-700 ease-out hover:bg-[#111116] hover:-translate-y-1 hover:border-[#33D2FF]/30 hover:shadow-[0_15px_40px_-10px_rgba(51,210,255,0.15)] cursor-pointer z-10" data-index="2">
<div className="pipeline-side-node absolute top-1/2 -translate-y-1/2 -right-[6px] w-3 h-3 rounded-full border z-20 transition-all duration-700"></div>
<div className="text-[#33D2FF] text-[11px] uppercase tracking-[2px] mb-2" style={{fontFamily: 'var(--font-display)'}}>
                Stage 03 // Live
              </div>
<div className="text-[20px] text-white tracking-tight mb-2" style={{fontFamily: 'var(--font-display)'}}>
                Global Propagation
              </div>
<div className="text-[14px] text-[#888894] leading-relaxed">
                Edge networks fully populated and serving traffic.
              </div>
</div>

<div className="pipeline-card self-end w-[85%] md:w-[45%] max-w-[340px] mr-4 md:mr-0 ml-auto relative bg-[#111116]/80 backdrop- ease-out hover:bg-[#111116] hover:-translate-y-1 hover:border-[#33D2FF]/30 hover:shadow-[0_15px_40px_-10px_rgba(51,210,255,0.15)] cursor-pointer z-10" data-index="3">
<div className="pipeline-side-node absolute top-1/2 -translate-y-1/2 -left-[6px] w-3 h-3 rounded-full border z-20 transition-all duration-700"></div>
<div className="text-[#33D2FF] text-[11px] uppercase tracking-[2px] mb-2" style={{fontFamily: 'var(--font-display)'}}>
                Stage 04 // Validation
              </div>
<div className="text-[20px] text-white tracking-tight mb-2" style={{fontFamily: 'var(--font-display)'}}>
                Integrity Verification
              </div>
<div className="text-[14px] text-[#888894] leading-relaxed">
                Runtime dependencies, policy checks, and configuration states
                are validated before release.
              </div>
</div>

<div className="pipeline-card self-start w-[85%] md:w-[45%] max-w-[340px] ml-4 md:ml-0 mr-auto relative bg-[#111116]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-8 transition-all duration-700 ease-out hover:bg-[#111116] hover:-translate-y-1 hover:border-[#33D2FF]/30 hover:shadow-[0_15px_40px_-10px_rgba(51,-y-8" data-index="4">
<div className="pipeline-side-node absolute top-1/2 -translate-y-1/2 -right-[6px] w-3 h-3 rounded-full border z-20 transition-all duration-700"></div>
<div className="text-[#33D2FF] text-[11px] uppercase tracking-[2px] mb-2" style={{fontFamily: 'var(--font-display)'}}>
                Stage 05 // Optimization
              </div>
<div className="text-[20px] text-white tracking-tight mb-2" style={{fontFamily: 'var(--font-display)'}}>
                Adaptive Load Tuning
              </div>
<div className="text-[14px] text-[#888894] leading-relaxed">
                Traffic distribution and compute allocation are refined
                continuously for peak efficiency.
              </div>
</div>
</div>
</div>
</div>

</section>
<section className="overflow-hidden border-y border-white/[0.04] bg-[#040507] pt-32 pb-32 relative">
<style>
        @keyframes subtleDrift {
          0% {
            transform: translate(0, 0) scale(1);
          }

          50% {
            transform: translate(2%, 3%) scale(1.05);
          }

          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(34, 211, 238, 0.24);
          }

          70% {
            transform: scale(1);
            box-shadow: 0 0 0 15px rgba(34, 211, 238, 0);
          }

          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(34, 211, 238, 0);
          }
        }

        @keyframes secScan {
          0% {
            transform: translateY(-100%);
            opacity: 0;
          }

          20% {
            opacity: 0.85;
          }

          80% {
            opacity: 0.75;
          }

          100% {
            transform: translateY(200%);
            opacity: 0;
          }
        }

        .data-stream::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 58%, rgba(5, 8, 12, 0.96));
          pointer-events: none;
        }

        #sec-slider-thumb {
          touch-action: none;
          user-select: none;
          -webkit-user-select: none;
        }
      </style>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 opacity-70" style={{backgroundImage: 'url(\'data:image/svg+xml', maskImage: 'linear-gradient(to bottom, white, transparent)', WebkitMaskImage: 'linear-gradient(to bottom,white,transparent)'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full blur-[120px] animate-[subtleDrift_15s_ease-in-out_infinite]" style={{background: 'radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(59,130,246,0.08) 35%, transparent 72%)'}}></div>
<div className="absolute top-[20%] right-[12%] w-[380px] h-[380px] rounded-full blur-[100px]" style={{background: 'radial-gradient(circle, rgba(34,211,238,0.10) 0%, transparent 70%)'}}></div>
</div>
<div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-7xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
<span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-[pulseRing_2s_infinite]"></span>
<span className="text-xs font-medium tracking-wide uppercase text-zinc-300">
                Security Protocol
              </span>
</div>
<h2 className="text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6 leading-tight">
              Execution without compromise.
            </h2>
<p className="text-lg text-zinc-300 leading-relaxed mb-12 max-w-lg">
              Cryptographically secured execution environments. Validated by
              hardware-gated consensus, completely eliminating ambient risk
              vectors.
            </p>
<div className="flex flex-col gap-8 w-full">
<div className="group flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 text-zinc-300 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-colors shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<div>
<h4 className="text-white text-base font-medium mb-1.5 tracking-tight">
                    Cryptographic Verification
                  </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Payload hashes and trust signatures are immutably validated
                    before memory allocation.
                  </p>
</div>
</div>
<div className="group flex items-start gap-5">
<div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center flex-shrink-0 text-zinc-300 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-colors shadow-sm">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20"></path>
<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
</svg>
</div>
<div>
<h4 className="text-white text-base font-medium mb-1.5 tracking-tight">
                    Biometric Consensus
                  </h4>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Final execution mandates physical verification through
                    multi-actor hardware authorization.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] max-w-2xl mx-auto">

<div className="border-white/[0.08] flex flex-col border rounded-[32px] pt-[7px] pr-[7px] pb-[8px] pl-[7px] absolute top-0 right-0 bottom-0 left-0 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-3xl">
<div className="flex-1 rounded-[26px] bg-[radial-gradient(circle_at_top,rgba(26,36,48,0.95),rgba(7,10,14,0.98)_45%,rgba(4,6,9,1)_100%)] border border-white/[0.08] relative overflow-hidden flex flex-col shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">

<div className="absolute inset-0 pointer-events-none bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_30%,transparent_70%,rgba(34,211,238,0.04))]"></div>

<div className="h-12 flex items-center justify-between px-5 border-b border-white/[0.06] bg-white/[0.03]">
<div className="flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-400/30"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-400/30"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-400/30"></div>
</div>
<div className="ml-4 text-[10px] uppercase tracking-widest text-zinc-400 font-mono">
                      Kernel.sys
                    </div>
</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
</span>
<span className="text-[10px] text-cyan-300 font-mono uppercase tracking-widest">
                      Active
                    </span>
</div>
</div>

<div className="flex-1 p-6 relative flex flex-col lg:flex-row gap-6">

<div className="flex-1 flex flex-col items-center justify-center relative">
<div className="relative w-44 h-44 flex items-center justify-center mb-6">
<div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-2xl"></div>
<div className="absolute inset-0 border border-white/[0.10] rounded-full"></div>
<div className="absolute inset-2 border border-dashed border-cyan-300/[0.18] rounded-full animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-6 border border-white/[0.08] rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),rgba(255,255,255,0.02)_35%,rgba(14,21,29,0.88)_100%)] rounded-full flex items-center justify-center border border-white/[0.10] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_0_30px_rgba(34,211,238,0.08)]">
<svg className="text-cyan-200" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
<div className="absolute inset-4 overflow-hidden rounded-full pointer-events-none">
<div className="w-full h-1/2 bg-gradient-to-b from-cyan-500/0 via-cyan-400/20 to-cyan-400/10 blur-md animate-[secScan_3s_ease-in-out_infinite]"></div>
</div>
</div>
<div className="text-center">
<div className="text-xs text-white tracking-wider font-mono mb-1">
                        STATE: SECURE
                      </div>
<div className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">
                        Awaiting Input
                      </div>
</div>
</div>

<div className="flex-1 flex flex-col justify-center border-l border-white/[0.06] pl-8 data-stream relative h-full overflow-hidden">
<div className="space-y-5 font-mono text-[11px] w-full">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-center text-zinc-300">
<span>&gt; root_hash</span>
<span className="text-zinc-100">0x9f...a12</span>
</div>
<div className="h-px w-full bg-white/[0.05] overflow-hidden rounded-full">
<div className="h-full w-full bg-zinc-400/60"></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-center text-zinc-300">
<span>&gt; dep_tree</span>
<span className="text-cyan-300">SYNCED</span>
</div>
<div className="h-px w-full bg-white/[0.05] overflow-hidden rounded-full">
<div className="h-full w-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between items-center text-zinc-300">
<span>&gt; policy_engine</span>
<span className="text-zinc-100">ENFORCED</span>
</div>
<div className="h-px w-full bg-white/[0.05] overflow-hidden rounded-full">
<div className="h-full w-full bg-zinc-400/60"></div>
</div>
</div>
<div className="flex flex-col gap-1.5 opacity-80">
<div className="flex justify-between items-center text-zinc-400">
<span>&gt; awaiting_signature</span>
<span className="animate-pulse text-cyan-300">_</span>
</div>
<div className="h-px w-full bg-white/[0.05] overflow-hidden rounded-full">
<div className="h-full w-[35%] bg-gradient-to-r from-cyan-400/70 to-transparent"></div>
</div>
</div>
</div>
</div>
</div>

<div className="border-white/[0.06] border-t mt-auto mb-2 px-4 py-4">
<div className="text-[9px] uppercase tracking-[3px] text-zinc-500 mb-3 text-center font-mono">
                    Manual Override Required
                  </div>
<div className="border-white/[0.08] overflow-hidden bg-[#030406] w-full h-14 border rounded-full mb-6 relative shadow-[inset_0_2px_12px_rgba(0,0,0,0.55)]" id="sec-slider-shell">
<div className="absolute left-0 top-0 bottom-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(34,211,238,0.10))] border-r border-white/[0.10]" id="sec-slider-progress" style={{width: '56px'}}></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-[11px] font-medium tracking-[2px] text-zinc-400 uppercase transition-colors duration-300" id="sec-slider-label" style={{color: 'rgb(161, 161, 170)'}}>
                        Slide to Execute
                      </span>
</div>
<button aria-label="Slide to execute" className="absolute left-1 top-1 bottom-1 w-12 rounded-full bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(255,255,255,0.16)] transition-transform duration-300 z-10 cursor-grab active:scale-95 border border-white/[0.15]" id="sec-slider-thumb" type="button">
<svg fill="none" height="10" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>

<div className="absolute -right-8 top-12 p-3 bg-[#0D1015]/88 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex items-center gap-3 animate-[subtleDrift_8s_ease-in-out_infinite] hidden md:flex">
<div className="w-8 h-8 rounded-full bg-cyan-500/12 flex items-center justify-center text-cyan-300 border border-cyan-400/20">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
</svg>
</div>
<div className="pr-2">
<div className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">
                  Node Policy
                </div>
<div className="text-xs text-zinc-100 font-medium tracking-tight">
                  Enforced
                </div>
</div>
</div>
<div className="absolute -left-6 bottom-24 p-3 bg-[#0D1015]/88 backdrop-blur-xl border border-white/[0.08] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex items-center gap-3 animate-[subtleDrift_10s_ease-in-out_infinite_reverse] hidden md:flex">
<div className="w-8 h-8 rounded-full bg-white/[0.05] flex items-center justify-center text-zinc-200 border border-white/[0.08]">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<div className="pr-2">
<div className="text-[9px] text-zinc-500 uppercase tracking-widest font-mono">
                  Data Flux
                </div>
<div className="text-xs text-zinc-100 font-medium tracking-tight">
                  Optimal
                </div>
</div>
</div>
</div>
</div>
</div>

</section>
<section className="pricing-section bg-alt" id="pricing">
<div className="container reveal">
<div className="pricing-header">
<div className="tagline">Scalable Architecture</div>
<h2 className="">Deploy at your pace.</h2>
<p className="">
            Elastic infrastructure that grows seamlessly alongside your
            operational demands.
          </p>
</div>
<div className="pricing-accordion">
<div className="pricing-card">
<div className="pc-top">
<h3 className="pc-title">Developer Node</h3>
<div className="pc-price">
                $0
                <span>/mo</span>
</div>
<div className="pc-desc">
                Perfect for isolated testing, single-user experimentation, and
                pipeline validation.
              </div>
</div>
<div className="pc-hidden-content">
<ul className="pc-features">
<li>Local environment synthesis</li>
<li>Community support forum</li>
</ul>
<a className="pc-btn" href="#">Start Building</a>
</div>
</div>
<div className="pricing-card">
<div className="pc-top">
<h3 className="pc-title">Enterprise Cluster</h3>
<div className="pc-price">
                $499
                <span>/mo</span>
</div>
<div className="pc-desc">
                Designed for scaling teams requiring high-availability routing
                and advanced logic orchestration.
              </div>
</div>
<div className="pc-hidden-content">
<ul className="pc-features">
<li className="">Autonomous multi-region routing</li>
<li className="">Priority incident response (SLA)</li>
</ul>
<a className="pc-btn" href="#" style={{background: 'var(--text-main)', color: 'var(--bg-base)', borderColor: 'transparent'}}>
                Deploy Cluster
              </a>
</div>
</div>
<div className="pricing-card">
<div className="pc-top">
<h3 className="pc-title">Global Network</h3>
<div className="pc-price">Custom</div>
<div className="pc-desc">
                Bespoke architecture for massive concurrency and edge-deployed
                intelligence models.
              </div>
</div>
<div className="pc-hidden-content">
<ul className="pc-features">
<li>Zero-latency edge distribution</li>
<li>Dedicated structural engineers</li>
</ul>
<a className="pc-btn" href="#">Contact Architecture Team</a>
</div>
</div>
</div>
</div>
</section>
<section className="testimonial-section overflow-hidden sm:py-32 bg-[#030304] pt-24 pb-24 relative" id="testimonials" style={{borderTop: '1px solid rgba(255,255,255,0.02)'}}>
<style>
        .testimonial-stack-wrap {
          position: relative;
          max-width: 880px;
          margin: 0 auto;
          min-height: 540px;
        }

        .testimonial-stack-card {
          position: absolute;
          width: 100%;
          max-width: 760px;
          left: 50%;
          transform-origin: center center;
        }

        .testimonial-stack-card.card-back-left {
          top: 36px;
          transform: translateX(-50%) rotate(-6deg) scale(0.96);
          opacity: 0.72;
          z-index: 1;
        }

        .testimonial-stack-card.card-back-right {
          top: 52px;
          transform: translateX(-50%) rotate(6deg) scale(0.96);
          opacity: 0.80;
          z-index: 2;
        }

        .testimonial-stack-card.card-front {
          top: 88px;
          transform: translateX(-50%) rotate(0deg) scale(1);
          z-index: 3;
        }

        .testimonial-stack-card .testimonial-premium-card {
          height: 370px;
          min-height: 370px;
          padding: 2rem;
          border-radius: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .testimonial-stack-card.card-front .testimonial-premium-card {
          box-shadow:
            0 30px 80px -35px rgba(0, 0, 0, 0.75),
            0 0 40px rgba(51, 210, 255, 0.05);
        }

        .testimonial-stack-card.card-front .testimonial-premium-card:hover {
          transform: translateY(-8px);
          border-color: rgba(51, 210, 255, 0.16) !important;
          background: rgba(255, 255, 255, 0.03) !important;
          box-shadow:
            0 36px 90px -34px rgba(0, 0, 0, 0.82),
            0 0 36px rgba(51, 210, 255, 0.08);
        }

        .testimonial-stack-card.card-back-left .testimonial-premium-card:hover,
        .testimonial-stack-card.card-back-right .testimonial-premium-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.08) !important;
        }

        @media (max-width: 1024px) {
          .testimonial-stack-wrap {
            min-height: 610px;
          }

          .testimonial-stack-card {
            max-width: 100%;
          }

          .testimonial-stack-card.card-back-left {
            top: 24px;
            transform: translateX(-50%) rotate(-5deg) scale(0.97);
          }

          .testimonial-stack-card.card-back-right {
            top: 38px;
            transform: translateX(-50%) rotate(5deg) scale(0.97);
          }

          .testimonial-stack-card.card-front {
            top: 78px;
          }

          .testimonial-stack-card .testimonial-premium-card {
            height: 390px;
            min-height: 390px;
            padding: 1.75rem;
          }
        }

        @media (max-width: 767px) {
          .testimonial-stack-wrap {
            min-height: 700px;
          }

          .testimonial-stack-card.card-back-left {
            top: 16px;
            transform: translateX(-50%) rotate(-4deg) scale(0.98);
          }

          .testimonial-stack-card.card-back-right {
            top: 28px;
            transform: translateX(-50%) rotate(4deg) scale(0.98);
          }

          .testimonial-stack-card.card-front {
            top: 62px;
          }

          .testimonial-stack-card .testimonial-premium-card {
            height: 430px;
            min-height: 430px;
            padding: 1.5rem;
          }
        }
      </style>

<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(circle at center, rgba(51, 210, 255, 0.03) 0%, transparent 60%)'}}></div>
<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '44px 44px'}}></div>
<div className="absolute inset-0 pointer-events-none" id="webgl-wave-container" style={{zIndex: '0', opacity: '0.35', maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}></div>
<div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/[0.04] mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#33D2FF] shadow-[0_0_8px_rgba(51,210,255,0.45)]"></span>
<span className="text-xs font-medium tracking-widest text-zinc-400 uppercase">
              Consensus
            </span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
            Trusted by Visionaries.
          </h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Industry leaders rely on Omi to orchestrate their most critical
            spatial infrastructure with absolute precision.
          </p>
</div>

<div className="testimonial-stack-wrap">

<div className="testimonial-stack-card card-back-left">
<div className="testimonial-premium-card testimonial-float rounded-[28px] border border-white/[0.05] bg-white/[0.015] p-7 md:p-8 flex flex-col justify-between min-h-[250px]">
<div className="testimonial-scan"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex gap-1.5">
<svg className="w-4 h-4 text-[#33D2FF]/75" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-[#33D2FF]/75" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-[#33D2FF]/75" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-[#33D2FF]/75" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-[#33D2FF]/75" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<svg className="testimonial-quote-icon w-8 h-8 text-white/10 opacity-70" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17 6A5.001 5.001 0 0 0 3 11v7h7v-7H6.09A3.001 3.001 0 0 1 9 8V6H7.17zm10 0A5.001 5.001 0 0 0 13 11v7h7v-7h-3.91A3.001 3.001 0 0 1 19 8V6h-1.83z"></path>
</svg>
</div>
<p className="text-zinc-300 text-[15px] sm:text-base leading-relaxed font-light">
                  "The spatial logic interfaces are game-changing. Our engineers
                  visually orchestrate complex mesh networks in minutes instead
                  of days."
                </p>
</div>
<div className="flex items-center gap-4 mt-10">
<div className="relative">
<div className="testimonial-avatar-glow absolute inset-0 rounded-full bg-[#33D2FF]/12 blur-md"></div>
<img alt="David Chen" className="relative w-12 h-12 rounded-full object-cover border border-white/10 grayscale-[15%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/998a3ed3-8477-4804-81d2-52d524dffe92_320w.jpg"/>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight">
                    David Chen
                  </h4>
<p className="text-zinc-500 text-xs tracking-wide uppercase mt-0.5">
                    Lead Architect, Synthetix
                  </p>
</div>
</div>
</div>
</div>

<div className="testimonial-stack-card card-back-right">
<div className="testimonial-premium-card testimonial-float rounded-[28px] border border-white/[0.05] bg-white/[0.015] p-7 md:p-8 flex flex-col justify-between min-h-[250px]" style={{animationDelay: '-2.2s'}}>
<div className="testimonial-scan"></div>
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex gap-1.5">
<svg className="w-4 h-4 text-[#33D2FF]/75" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-[#33D2FF]/75" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-[#33D2FF]/75" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-[#33D2FF]/75" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4 text-[#33D2FF]/75" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<svg className="testimonial-quote-icon w-8 h-8 text-white/10 opacity-70" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17 6A5.001 5.001 0 0 0 3 11v7h7v-7H6.09A3.001 3.001 0 0 1 9 8V6H7.17zm10 0A5.001 5.001 0 0 0 13 11v7h7v-7h-3.91A3.001 3.001 0 0 1 19 8V6h-1.83z"></path>
</svg>
</div>
<p className="text-zinc-300 text-[15px] sm:text-base leading-relaxed font-light">
                  "Deterministic deployments with a single genesis command. Omi
                  represents the absolute pinnacle of modern enterprise
                  tooling."
                </p>
</div>
<div className="flex items-center gap-4 mt-10">
<div className="relative">
<div className="testimonial-avatar-glow absolute inset-0 rounded-full bg-[#33D2FF]/12 blur-md"></div>
<img alt="Marcus Cole" className="relative w-12 h-12 rounded-full object-cover border border-white/10 grayscale-[15%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4ee565a-2084-483b-8358-9fc06da5ee99_320w.jpg"/>
</div>
<div>
<h4 className="text-white text-sm font-medium tracking-tight">
                    Marcus Cole
                  </h4>
<p className="text-zinc-500 text-xs tracking-wide uppercase mt-0.5">
                    DevOps Lead, Omni
                  </p>
</div>
</div>
</div>
</div>

<div className="testimonial-stack-card card-front">
<div className="testimonial-premium-card md:p-10 lg:p-12 flex flex-col min-h-[320px] border-[#33D2FF]/10 border rounded-[34px] pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="testimonial-scan"></div>
<div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[70%] h-24 bg-[#33D2FF]/10 blur-3xl pointer-events-none"></div>
<div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#33D2FF]/40 to-transparent"></div>
<div className="flex items-center justify-between mb-10 relative z-10">
<svg className="testimonial-quote-icon w-10 h-10 text-[#33D2FF]/20" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17 6A5.001 5.001 0 0 0 3 11v7h7v-7H6.09A3.001 3.001 0 0 1 9 8V6H7.17zm10 0A5.001 5.001 0 0 0 13 11v7h7v-7h-3.91A3.001 3.001 0 0 1 19 8V6h-1.83z"></path>
</svg>
</div>
<div className="relative z-10">
<p className="text-zinc-300 text-[15px] sm:text-base leading-relaxed font-light">
                  "Omi has completely removed our deployment latency. It feels
                  like the platform predicts our scaling needs before the
                  metrics even spike. A truly paradigm-shifting tool for
                  mission-critical infrastructure."
                </p>
</div>
<div className="relative z-10 mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div className="flex items-center gap-4">
<div className="relative">
<div className="testimonial-avatar-glow absolute inset-0 rounded-full bg-[#33D2FF]/18 blur-lg"></div>
<img alt="Sarah Jenkins" className="relative w-14 h-14 rounded-full object-cover border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp"/>
</div>
<div>
<h4 className="text-white text-base font-medium tracking-tight">
                      Sarah Jenkins
                    </h4>
<p className="text-zinc-500 text-xs tracking-[0.18em] uppercase mt-1">
                      CTO, Nexus Corp
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="cta-section">
<div className="container reveal">
<h2 className="">Ready to transcend?</h2>
<p className="">
          Join the elite tier of engineering teams building the next generation
          of spatial software.
        </p>
<div className="hero-actions text-center justify-center">
<a className="group relative inline-flex h-[52px] rounded-full no-underline cursor-pointer outline-none text-[14px] font-medium" href="#platform" style={{fontFamily: 'var(--font-body)', WebkitTapHighlightColor: 'transparent'}}>

<div className="absolute inset-[-4px] bg-[rgba(74,140,255,0)] blur-[16px] opacity-0 rounded-full transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] z-0 translate-y-[2px] scale-95 pointer-events-none group-hover:opacity-100 group-hover:bg-[rgba(51,210,255,0.35)] group-hover:translate-y-[4px] group-hover:scale-[1.02] group-hover:blur-[20px]"></div>

<div className="relative z-10 flex h-full rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shadow-[0_10px_24px_rgba(0,0,0,0.6),inset_0_0_0_1px_rgba(255,255,255,0.02)] group-hover:-translate-y-[2px] group-hover:shadow-[0_14px_32px_rgba(0,0,0,0.8),inset_0_0_0_1px_rgba(255,255,255,0.05)]">

<div className="w-[48px] h-full rounded-l-full relative border border-white/[0.08] border-r-black overflow-hidden z-20 bg-[linear-gradient(180deg,#42424a_0%,#202025_35%,#0f0f13_100%)] shadow-[inset_4px_0_8px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.12),inset_0_-3px_6px_rgba(0,0,0,0.9)]">

<div className="absolute top-[2px] left-[6px] right-[2px] h-[16px] rounded-full pointer-events-none mix-blend-overlay bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_70%)]"></div>
</div>

<div className="flex items-center pl-[8px] pr-[32px] h-full backdrop-blur-[12px] border border-[#33D2FF]/15 border-l-0 rounded-r-full relative z-10 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-[#33D2FF]/40 bg-[linear-gradient(90deg,rgba(20,24,32,0.7)_0%,rgba(10,14,20,0.5)_100%)] group-hover:bg-[linear-gradient(90deg,rgba(20,28,40,0.85)_0%,rgba(10,16,26,0.6)_100%)] shadow-[inset_0_0_20px_rgba(51,210,255,0.05),inset_0_1px_1px_rgba(255,255,255,0.15)] group-hover:shadow-[inset_0_0_30px_rgba(51,210,255,0.15),inset_0_1px_1px_rgba(255,255,255,0.25)]">

<div className="absolute top-[1px] left-0 right-[2px] h-[40%] rounded-tr-full pointer-events-none bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0)_100%)]"></div>

<div className="absolute -left-[10px] top-1/2 -translate-y-1/2 w-[40px] h-[40px] opacity-60 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none mix-blend-screen bg-[radial-gradient(circle,rgba(51,210,255,0.4)_0%,transparent_70%)] group-hover:opacity-100 group-hover:w-[60px] group-hover:h-[60px] group-hover:bg-[radial-gradient(circle,rgba(51,210,255,0.7)_0%,transparent_70%)]"></div>

<div className="flex items-center relative z-30 gap-[10px]">

<div className="w-[24px] h-[24px] -ml-[20px] text-white/50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center drop-shadow-[0_0_4px_rgba(51,210,255,0)] group-hover:text-white/90 group-hover:drop-shadow-[0_0_8px_rgba(51,210,255,0.8)]">
<svg fill="none" height="24" strokeWidth="2" viewbox="0 0 28 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M-4 12 h 12 c 3 0, 3 -4.5, 6 -4.5 c 3 0, 3 9, 0 9 c -3 0, -3 -4.5, 0 -4.5 h 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</div>

<span className="transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [text-shadow:0_0_10px_rgba(51,210,255,0)] group-hover:text-white group-hover:[text-shadow:0_0_12px_rgba(51,210,255,0.6)] text-white/80 tracking-[0.5px]">
                    Start Free Trial
                  </span>
</div>
</div>
</div>
</a>
<a className="btn btn-secondary rounded-full" href="#docs">
            Contact Sales
          </a>
</div>
</div>
</section>
<footer className="relative overflow-hidden border-t border-white/[0.04] bg-[#030304] pt-24 pb-12 z-10" id="contact">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[100px] opacity-20" style={{background: 'radial-gradient(ellipse at top, rgba(51, 210, 255, 0.15) 0%, transparent 70%)'}}></div>
</div>
<div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-2">
<a className="block w-[110px] h-[36px] bg-left bg-no-repeat bg-contain bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d29ebd67-b00e-4ac9-9354-280fd04105d3_1600w.png')] mb-6" href="#"></a>
<p className="text-[#888894] text-sm leading-relaxed max-w-xs mb-8">
              The unified intelligence layer for spatial computing and
              autonomous enterprise workflows.
            </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[#888894] hover:text-[#33D2FF] hover:border-[#33D2FF]/30 hover:bg-[#33D2FF]/5 transition-all duration-300" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[#888894] hover:text-[#33D2FF] hover:border-[#33D2FF]/30 hover:bg-[#33D2FF]/5 transition-all duration-300" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
</a>
<a className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[#888894] hover:text-[#33D2FF] hover:border-[#33D2FF]/30 hover:bg-[#33D2FF]/5 transition-all duration-300" href="#">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>
</div>

<div className="lg:col-span-1">
<h4 className="text-white text-sm font-semibold tracking-wide uppercase mb-6" style={{fontFamily: 'var(--font-display)'}}>
              Platform
            </h4>
<ul className="space-y-4">
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  Architecture
                </a>
</li>
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  Orchestration
                </a>
</li>
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  Security
                </a>
</li>
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  Pricing
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="text-white text-sm font-semibold tracking-wide uppercase mb-6" style={{fontFamily: 'var(--font-display)'}}>
              Resources
            </h4>
<ul className="space-y-4">
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  API Reference
                </a>
</li>
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  Status
                </a>
</li>
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  Blog
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="text-white text-sm font-semibold tracking-wide uppercase mb-6" style={{fontFamily: 'var(--font-display)'}}>
              Company
            </h4>
<ul className="space-y-4">
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  About
                </a>
</li>
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  Careers
                </a>
</li>
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  Contact
                </a>
</li>
<li>
<a className="text-[#888894] hover:text-[#33D2FF] text-sm transition-colors duration-300" href="#">
                  Partners
                </a>
</li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="text-white text-sm font-semibold tracking-wide uppercase mb-6" style={{fontFamily: 'var(--font-display)'}}>
              Stay Updated
            </h4>
<p className="text-[#888894] text-sm mb-4">
              Subscribe to our engineering log.
            </p>
<form className="relative">
<input className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#555562] focus:outline-none focus:border-[#33D2FF]/50 transition-colors duration-300" placeholder="Email address" type="email"/>
<button className="absolute right-1 top-1 bottom-1 px-3 bg-[#33D2FF]/10 text-[#33D2FF] rounded hover:bg-[#33D2FF]/20 transition-colors duration-300 flex items-center justify-center" type="submit">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</form>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.06] gap-4">
<div className="text-[#555562] text-sm">
            © 2026 Omi Systems Inc. All rights reserved.
          </div>
<div className="flex items-center gap-6">
<a className="text-[#555562] hover:text-[#888894] text-sm transition-colors duration-300" href="#">
              Privacy Policy
            </a>
<a className="text-[#555562] hover:text-[#888894] text-sm transition-colors duration-300" href="#">
              Terms of Service
            </a>
<a className="text-[#555562] hover:text-[#888894] text-sm transition-colors duration-300" href="#">
              Cookie Setting
            </a>
</div>
</div>
</div>
</footer>





    </>
  );
}
