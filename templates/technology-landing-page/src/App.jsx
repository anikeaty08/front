import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  (function () {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const openIcon = document.getElementById('menu-icon-open');
    const closeIcon = document.getElementById('menu-icon-close');

    if (!menuBtn || !mobileMenu || !openIcon || !closeIcon) return;

    let isOpen = false;

    function setMenuState(open) {
      isOpen = open;

      if (isOpen) {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
        openIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      } else {
        mobileMenu.classList.add('translate-x-full');
        mobileMenu.classList.remove('translate-x-0');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    menuBtn.addEventListener('click', function () {
      setMenuState(!isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', function () {
        setMenuState(false);
      });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 768) {
        setMenuState(false);
      }
    });
  })();



          // Shared Canvas Setup Utility
          const setupCanvas = (id, renderFn) => {
              const canvas = document.getElementById(id);
              if (!canvas) return;
              const ctx = canvas.getContext('2d', { alpha: true });
              let w, h, time = 0;
              const resize = () => {
                  const rect = canvas.parentElement.getBoundingClientRect();
                  w = rect.width; h = rect.height;
                  const dpr = window.devicePixelRatio || 1;
                  canvas.width = w * dpr; canvas.height = h * dpr;
                  ctx.scale(dpr, dpr);
              };
              window.addEventListener('resize', resize);
              resize();
              const loop = () => {
                  time += 0.01;
                  ctx.clearRect(0, 0, w, h);
                  ctx.save();
                  ctx.translate(w / 2, h / 2);
                  renderFn(ctx, time, w, h);
                  ctx.restore();
                  requestAnimationFrame(loop);
              };
              loop();
          };

          // Canvas 1: SYS-01 - Rotating Geometric Lattice
          setupCanvas('canvas-core', (ctx, t) => {
              const radius = 60;
              const sides = 6;
              const rings = 3;

              ctx.lineWidth = 1;

              for (let r = 1; r <= rings; r++) {
                  const currentRadius = radius + (r * 15);
                  ctx.save();
                  // Alternate rotation direction and speed
                  const rotation = t * (r % 2 === 0 ? 0.5 : -0.3) * r;
                  ctx.rotate(rotation);

                  ctx.beginPath();
                  for (let i = 0; i <= sides; i++) {
                      const angle = (i * 2 * Math.PI) / sides;
                      const x = currentRadius * Math.cos(angle);
                      const y = currentRadius * Math.sin(angle);

                      // Add subtle breathing effect
                      const scale = 1 + Math.sin(t * 2 + r) * 0.05;
                      const sx = x * scale;
                      const sy = y * scale;

                      if (i === 0) ctx.moveTo(sx, sy);
                      else ctx.lineTo(sx, sy);

                      // Draw connection nodes
                      if (i < sides) {
                          ctx.fillStyle = `rgba(52,211,153,${0.2 + (r*0.1)})`;
                          ctx.fillRect(sx - 1.5, sy - 1.5, 3, 3);
                      }
                  }
                  ctx.strokeStyle = `rgba(52,211,153, ${0.1 + (0.05 * r)})`;
                  ctx.stroke();

                  // Inner connecting lines
                  if (r > 1) {
                      ctx.beginPath();
                      for(let i=0; i<sides; i++) {
                          const angle = (i * 2 * Math.PI) / sides;
                          ctx.moveTo((currentRadius-15) * Math.cos(angle), (currentRadius-15) * Math.sin(angle));
                          ctx.lineTo(currentRadius * Math.cos(angle), currentRadius * Math.sin(angle));
                      }
                      ctx.strokeStyle = `rgba(52,211,153, 0.05)`;
                      ctx.stroke();
                  }
                  ctx.restore();
              }

              // Central core
              const corePulse = Math.abs(Math.sin(t * 3)) * 4;
              ctx.beginPath();
              ctx.arc(0, 0, 12, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(2,8,4,1)';
              ctx.fill();
              ctx.strokeStyle = 'rgba(52,211,153,0.5)';
              ctx.stroke();

              ctx.beginPath();
              ctx.arc(0, 0, 4 + corePulse, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(52,211,153,0.8)';
              ctx.shadowColor = 'rgba(52,211,153,0.8)';
              ctx.shadowBlur = 10;
              ctx.fill();
              ctx.shadowBlur = 0; // reset
          });

          // Canvas 2: NET-02 - Animated Circuit Paths
          const circuitLines = Array.from({length: 12}, () => ({
              x: (Math.random() - 0.5) * 160,
              y: (Math.random() - 0.5) * 160,
              dir: Math.floor(Math.random() * 4), // 0: up, 1: right, 2: down, 3: left
              length: 30 + Math.random() * 50,
              speed: 0.5 + Math.random() * 1.5,
              offset: Math.random() * 100
          }));

          setupCanvas('canvas-network', (ctx, t, w, h) => {
              ctx.lineWidth = 1;

              // Draw base grid structure
              ctx.strokeStyle = 'rgba(52,211,153,0.03)';
              ctx.beginPath();
              for(let i = -100; i <= 100; i += 20) {
                  ctx.moveTo(i, -100); ctx.lineTo(i, 100);
                  ctx.moveTo(-100, i); ctx.lineTo(100, i);
              }
              ctx.stroke();

              // Draw animated active paths
              circuitLines.forEach((line, i) => {
                  const progress = ((t * 60 * line.speed) + line.offset) % 200;

                  let dx = 0, dy = 0;
                  if(line.dir === 0) dy = -1;
                  else if(line.dir === 1) dx = 1;
                  else if(line.dir === 2) dy = 1;
                  else dx = -1;

                  // Path background
                  ctx.beginPath();
                  ctx.moveTo(line.x, line.y);
                  ctx.lineTo(line.x + dx * line.length, line.y + dy * line.length);
                  ctx.strokeStyle = 'rgba(52,211,153,0.1)';
                  ctx.stroke();

                  // Moving glowing packet
                  if (progress < line.length + 20) {
                      const startP = Math.max(0, progress - 20);
                      const endP = Math.min(line.length, progress);

                      if (startP < endP) {
                          ctx.beginPath();
                          ctx.moveTo(line.x + dx * startP, line.y + dy * startP);
                          ctx.lineTo(line.x + dx * endP, line.y + dy * endP);
                          ctx.strokeStyle = 'rgba(52,211,153,0.8)';
                          ctx.shadowColor = 'rgba(52,211,153,0.6)';
                          ctx.shadowBlur = 8;
                          ctx.stroke();
                          ctx.shadowBlur = 0; // reset
                      }
                  }

                  // End node
                  ctx.fillStyle = 'rgba(2,8,4,1)';
                  ctx.strokeStyle = 'rgba(52,211,153,0.4)';
                  ctx.beginPath();
                  ctx.arc(line.x + dx * line.length, line.y + dy * line.length, 3, 0, Math.PI*2);
                  ctx.fill();
                  ctx.stroke();
              });
          });

          // Canvas 3: OPS-03 - Orbiting Telemetry Elements
          setupCanvas('canvas-orbit', (ctx, t) => {
              const numOrbits = 4;
              ctx.lineWidth = 1;

              for(let i = 1; i <= numOrbits; i++) {
                  const radius = i * 25;
                  const speed = (numOrbits - i + 1) * 0.2;
                  const angleOffset = t * speed * (i % 2 === 0 ? 1 : -1);

                  ctx.save();
                  ctx.rotate(angleOffset);

                  // Base orbit track
                  ctx.beginPath();
                  ctx.arc(0, 0, radius, 0, Math.PI * 2);
                  ctx.strokeStyle = `rgba(52,211,153, ${0.05 + i*0.02})`;
                  if (i % 2 !== 0) ctx.setLineDash([4, 4]); // Dashed tracks
                  ctx.stroke();
                  ctx.setLineDash([]);

                  // Orbiting data fragments
                  const fragments = i + 1;
                  for(let f = 0; f < fragments; f++) {
                      const fAngle = (f / fragments) * Math.PI * 2;
                      const fx = radius * Math.cos(fAngle);
                      const fy = radius * Math.sin(fAngle);

                      // Draw segment arc
                      ctx.beginPath();
                      ctx.arc(0, 0, radius, fAngle - 0.2, fAngle + 0.2);
                      ctx.strokeStyle = `rgba(52,211,153, ${0.3 + (Math.sin(t*3 + f)*0.3)})`;
                      ctx.lineWidth = 2;
                      ctx.stroke();
                      ctx.lineWidth = 1;

                      // Draw node blip
                      ctx.beginPath();
                      ctx.arc(fx, fy, 2, 0, Math.PI * 2);
                      ctx.fillStyle = 'rgba(52,211,153, 0.8)';
                      ctx.fill();
                  }
                  ctx.restore();
              }
              /* Wave animation removed */
          });
        


    (function () {
            const script = document.currentScript;
            const section = script ? script.closest("section") : null;
            if (!section) return;
      
            const container = section.querySelector("#cta-canvas-container");
            if (!container || typeof THREE === "undefined") return;
      
            // prevent duplicate renderers if Aura re-renders
            if (container.dataset.initialized === "true") return;
            container.dataset.initialized = "true";
            container.innerHTML = "";
      
            const scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x000000, 0.04);
      
            const camera = new THREE.PerspectiveCamera(
              60,
              Math.max(container.clientWidth, 1) / Math.max(container.clientHeight, 1),
              0.1,
              100
            );
            camera.position.set(0, 3, 15);
            camera.lookAt(0, -2, 0);
      
            const renderer = new THREE.WebGLRenderer({
              antialias: true,
              alpha: true
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(container.clientWidth, container.clientHeight);
            renderer.domElement.style.display = "block";
            renderer.domElement.style.width = "100%";
            renderer.domElement.style.height = "100%";
            container.appendChild(renderer.domElement);
      
            const geometry = new THREE.PlaneGeometry(50, 25, 60, 30);
            const material = new THREE.MeshBasicMaterial({
              color: 0x059669,
              wireframe: true,
              transparent: true,
              opacity: 0.15,
              side: THREE.DoubleSide
            });
      
            const plane = new THREE.Mesh(geometry, material);
            plane.rotation.x = -Math.PI / 2.2;
            plane.position.y = -3;
            scene.add(plane);
      
            const positionAttribute = geometry.attributes.position;
            const vertexData = [];
      
            for (let i = 0; i < positionAttribute.count; i++) {
              vertexData.push({
                x: positionAttribute.getX(i),
                y: positionAttribute.getY(i),
                z: positionAttribute.getZ(i),
                phase: Math.random() * Math.PI * 2,
                speed: 0.1 + Math.random() * 0.1
              });
            }
      
            const clock = new THREE.Clock();
            let frameId = null;
      
            function animate() {
              frameId = requestAnimationFrame(animate);
      
              const time = clock.getElapsedTime();
      
              for (let i = 0; i < positionAttribute.count; i++) {
                const data = vertexData[i];
      
                const wave1 = Math.sin(data.x * 0.15 + time * 0.3) * 1.2;
                const wave2 = Math.cos(data.y * 0.1 + time * 0.2) * 0.8;
                const wave3 = Math.sin((data.x + data.y) * 0.05 + time * 0.1) * 1.5;
                const noise = Math.sin(time * data.speed + data.phase) * 0.2;
      
                positionAttribute.setZ(i, wave1 + wave2 + wave3 + noise);
              }
      
              positionAttribute.needsUpdate = true;
              plane.rotation.z = Math.sin(time * 0.05) * 0.05;
      
              renderer.render(scene, camera);
            }
      
            animate();
      
            const resizeObserver = new ResizeObserver((entries) => {
              for (const entry of entries) {
                const width = Math.max(entry.contentRect.width, 1);
                const height = Math.max(entry.contentRect.height, 1);
      
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
              }
            });
      
            resizeObserver.observe(container);
      
            // optional cleanup if Aura swaps nodes
            section.__ctaCleanup = () => {
              if (frameId) cancelAnimationFrame(frameId);
              resizeObserver.disconnect();
              geometry.dispose();
              material.dispose();
              renderer.dispose();
            };
          })();
  


      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      const canvas = document.getElementById("bg-canvas");
      const ctx = canvas.getContext("2d");
      let width, height;
      let time = 0;

      const particles = Array.from({ length: 60 }, () => ({
        x: Math.random(),
        y: Math.random(),
        size: Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2
      }));

      const beams = Array.from({ length: 8 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        len: Math.random() * 150 + 50,
        speed: Math.random() * 3 + 1.5
      }));

      function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
      }

      window.addEventListener("resize", resize);
      resize();

      function draw() {
        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, width, height);

        time += 0.008;

        ctx.fillStyle = "rgba(52, 211, 153, 0.3)";
        particles.forEach((p) => {
          p.x += (p.vx / width) * 10;
          p.y += (p.vy / height) * 10;
          if (p.x < 0) p.x = 1;
          if (p.x > 1) p.x = 0;
          if (p.y < 0) p.y = 1;
          if (p.y > 1) p.y = 0;
          ctx.beginPath();
          ctx.arc(p.x * width, p.y * height, p.size, 0, Math.PI * 2);
          ctx.fill();
        });

        beams.forEach((b) => {
          b.x += b.speed;
          if (b.x - b.len > width) {
            b.x = -b.len;
            b.y = Math.random() * height;
            b.speed = Math.random() * 3 + 1.5;
          }

          const grad = ctx.createLinearGradient(b.x - b.len, b.y, b.x, b.y);
          grad.addColorStop(0, "rgba(16, 185, 129, 0)");
          grad.addColorStop(0.8, "rgba(52, 211, 153, 0.4)");
          grad.addColorStop(1, "rgba(255, 255, 255, 0.6)");

          ctx.beginPath();
          ctx.moveTo(b.x - b.len, b.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.stroke();
        });

        requestAnimationFrame(draw);
      }
      draw();

      (function () {
        const sectionId = "docs";

        function escapeHtml(str) {
          return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        }

        function highlightCode(line) {
          let html = escapeHtml(line);
          html = html.replace(/\b(import|from|const|new|await)\b/g, '<span class="text-emerald-300/50">$1</span>');
          html = html.replace(/('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")/g, '<span class="text-emerald-400/60">$1</span>');
          return html;
        }

        function typeLine(lineEl, text, speed) {
          return new Promise((resolve) => {
            lineEl.classList.add("is-visible");
            lineEl.classList.remove("done");

            const typed = document.createElement("span");
            typed.className = "typed-text";

            const caret = document.createElement("span");
            caret.className = "caret";
            caret.textContent = "|";

            lineEl.innerHTML = "";
            lineEl.appendChild(typed);
            lineEl.appendChild(caret);

            let index = 0;

            function step() {
              index++;
              typed.innerHTML = highlightCode(text.slice(0, index));
              if (index < text.length) {
                setTimeout(step, speed);
              } else {
                lineEl.classList.add("done");
                resolve();
              }
            }

            setTimeout(step, speed);
          });
        }

        async function playTyping(section) {
          const shell = section.querySelector(".code-shell");
          const lines = Array.from(section.querySelectorAll(".code-line"));
          if (!shell || !lines.length) return;

          shell.classList.add("is-playing");
          lines.forEach((line) => {
            line.classList.remove("is-visible", "done");
            line.innerHTML = "";
          });

          for (const line of lines) {
            const text = line.getAttribute("data-text") || "";
            await typeLine(line, text, 16);
            await new Promise((r) => setTimeout(r, 90));
          }

          shell.classList.remove("is-playing");
        }

        function initTypingAnimation() {
          const section = document.getElementById(sectionId);
          if (!section) return;

          let hasPlayed = false;
          const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (!entry || !entry.isIntersecting) return;
            if (!hasPlayed) {
              hasPlayed = true;
              playTyping(section);
            }
          }, { threshold: 0.35 });

          observer.observe(section);
        }

        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", initTypingAnimation);
        } else {
          requestAnimationFrame(() => requestAnimationFrame(initTypingAnimation));
        }
      })();

      document.addEventListener("DOMContentLoaded", () => {
        const dial = document.getElementById("compass-dial");
        const degDisplay = document.getElementById("display-degree");
        const dirDisplay = document.getElementById("display-dir");
        const ticksGroup = document.getElementById("dial-ticks");
        const labelsGroup = document.getElementById("dial-labels");
        const container = document.getElementById("hero-compass-container");

        if (!dial || !ticksGroup || !labelsGroup || !container) return;

        const cx = 100;
        const cy = 100;
        const radius = 94;

        let ticksHtml = "";
        let labelsHtml = "";

        for (let i = 0; i < 360; i += 5) {
          const rad = (i - 90) * (Math.PI / 180);
          const isMajor = i % 30 === 0;
          const tickLen = isMajor ? 5 : 2;

          const x1 = cx + radius * Math.cos(rad);
          const y1 = cy + radius * Math.sin(rad);
          const x2 = cx + (radius - tickLen) * Math.cos(rad);
          const y2 = cy + (radius - tickLen) * Math.sin(rad);

          ticksHtml += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${isMajor ? "rgba(52,211,153,0.4)" : "rgba(52,211,153,0.15)"}" stroke-width="${isMajor ? 1.5 : 1}" stroke-linecap="round" />`;

          if (isMajor) {
            const labelRadius = radius - 15;
            const lx = cx + labelRadius * Math.cos(rad);
            const ly = cy + labelRadius * Math.sin(rad);
            const textRot = i + 90;
            labelsHtml += `<text x="${lx}" y="${ly}" transform="rotate(${textRot} ${lx} ${ly})">${i}</text>`;
          }
        }

        ticksGroup.innerHTML = ticksHtml;
        labelsGroup.innerHTML = labelsHtml;

        let currentAngle = 0;
        let targetAngle = -352;
        let isHovering = false;

        function getDir(deg) {
          const dirs = ["N", "NE", "E", "SE", "S", "SW", "W", "NW", "N"];
          return dirs[Math.round((deg % 360) / 45)];
        }

        container.addEventListener("mousemove", (e) => {
          isHovering = true;
          const rect = dial.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const dx = e.clientX - centerX;
          const dy = e.clientY - centerY;

          let deg = (Math.atan2(dy, dx) * 180 / Math.PI) + 90;
          if (deg < 0) deg += 360;
          targetAngle = -deg;
        });

        container.addEventListener("mouseleave", () => {
          isHovering = false;
        });

        function animateCompass() {
          if (!isHovering) {
            targetAngle -= 0.05;
          }

          let diff = targetAngle - currentAngle;
          let shortestDiff = ((diff % 360) + 540) % 360 - 180;
          currentAngle += shortestDiff * 0.08;

          let displayDeg = Math.round(-currentAngle) % 360;
          if (displayDeg < 0) displayDeg += 360;

          dial.style.transform = `rotate(${currentAngle}deg)`;
          degDisplay.textContent = `${displayDeg}°`;
          dirDisplay.textContent = getDir(displayDeg);

          requestAnimationFrame(animateCompass);
        }

        animateCompass();
      });
    


      import * as THREE from 'https://cdn.skypack.dev/three@0.136.0';

      const container = document.getElementById('three-container');

      if (container) {
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x020503, 0.015);

        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const geometry = new THREE.IcosahedronGeometry(8, 2);
        const material = new THREE.MeshBasicMaterial({
          color: 0x10b981,
          wireframe: true,
          transparent: true,
          opacity: 0.15
        });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        const innerGeo = new THREE.IcosahedronGeometry(7.5, 1);
        const innerMat = new THREE.MeshBasicMaterial({ color: 0x050a06 });
        const innerSphere = new THREE.Mesh(innerGeo, innerMat);
        scene.add(innerSphere);

        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCount = 800;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i += 3) {
          const r = 15 + Math.random() * 25;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.acos((Math.random() * 2) - 1);

          posArray[i] = r * Math.sin(phi) * Math.cos(theta);
          posArray[i + 1] = r * Math.sin(phi) * Math.sin(theta);
          posArray[i + 2] = r * Math.cos(phi);
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.15,
          color: 0x34d399,
          transparent: true,
          opacity: 0.6,
          blending: THREE.AdditiveBlending
        });

        const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particlesMesh);

        let mouseX = 0;
        let mouseY = 0;

        container.addEventListener('mousemove', (event) => {
          const rect = container.getBoundingClientRect();
          mouseX = event.clientX - rect.left - container.clientWidth / 2;
          mouseY = event.clientY - rect.top - container.clientHeight / 2;
        });

        window.addEventListener('resize', () => {
          camera.aspect = container.clientWidth / container.clientHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(container.clientWidth, container.clientHeight);
        });

        const clock = new THREE.Clock();

        function animate() {
          requestAnimationFrame(animate);

          const elapsedTime = clock.getElapsedTime();

          sphere.rotation.y += 0.002;
          sphere.rotation.x += 0.001;
          innerSphere.rotation.y -= 0.001;
          particlesMesh.rotation.y = elapsedTime * 0.05;
          particlesMesh.rotation.x = elapsedTime * 0.02;

          camera.position.x += (mouseX * 0.01 - camera.position.x) * 0.05;
          camera.position.y += (-mouseY * 0.01 - camera.position.y) * 0.05;
          camera.lookAt(scene.position);

          renderer.render(scene, camera);
        }

        animate();
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 w-full border-b border-emerald-900/30 top-0 backdrop-blur-xl transition-all duration-500 hover:border-emerald-500/40 hover:shadow-[0_4px_30px_rgba(16,185,129,0.15)] group bg-black/80 hover:bg-black/95">
<div className="md:px-12 flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 text-emerald-400 group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-all duration-500" href="#">
<svg className="lucide lucide-hexagon w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="text-lg font-normal text-white tracking-tight">
            TrueNorth
          </span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-emerald-50/70">
<a className="hover:text-emerald-300 transition-colors duration-300 hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-emerald-400/80 after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_8px_rgba(52,211,153,0.8)] relative" href="/platform">
            Platform
          </a>
<a className="hover:text-emerald-300 transition-colors duration-300 hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-emerald-400/80 after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_8px_rgba(52,211,153,0.8)] relative" href="/developers">
            Developers
          </a>
<a className="relative hover:text-emerald-300 transition-colors duration-300 hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-emerald-400/80 after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_8px_rgba(52,211,153,0.8)]" href="/solutions">
            Solutions
          </a>
<a className="hover:text-emerald-300 transition-colors duration-300 hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-emerald-400/80 after:transition-all after:duration-300 hover:after:w-full hover:after:shadow-[0_0_8px_rgba(52,211,153,0.8)] relative" href="/pricing">
            Pricing
          </a>
</div>
<div className="flex items-center gap-4 sm:gap-6">
<a className="hover:text-emerald-300 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.8)] hidden sm:block text-sm font-light text-emerald-50/70" href="/sign-in">
            Sign In
          </a>
<button className="group/btn overflow-hidden hover:text-emerald-50 transition-all duration-300 hover:border-emerald-400/60 hover:shadow-[0_0_20px_rgba(16,185,129,0.3),inset_0_0_10px_rgba(16,185,129,0.1)] text-sm font-light text-emerald-400 bg-emerald-500/10 border-emerald-500/30 border rounded-none pt-2 pr-5 pb-2 pl-5 relative backdrop-blur-sm">
<span className="flex items-center gap-1.5 z-10 relative">
              Get Started
              <svg className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>

<button className="md:hidden flex items-center justify-center text-emerald-400 hover:text-emerald-300 transition-colors ml-1 z-50" id="mobile-menu-btn">
<svg className="w-6 h-6" fill="none" height="24" id="menu-icon-open" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
<svg className="w-6 h-6 hidden" fill="none" height="24" id="menu-icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-[#020503]/95 backdrop-blur-xl transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden flex flex-col px-6 pt-24 pb-8 border-l border-emerald-900/30" id="mobile-menu">
<div className="flex flex-col gap-6 mt-8">
<a className="text-3xl font-light tracking-tight text-white hover:text-emerald-400 transition-colors w-max" href="/platform">Platform</a>
<a className="text-3xl font-light tracking-tight text-white hover:text-emerald-400 transition-colors w-max" href="/developers">Developers</a>
<a className="text-3xl font-light tracking-tight text-white hover:text-emerald-400 transition-colors w-max" href="/solutions">Solutions</a>
<a className="text-3xl font-light tracking-tight text-white hover:text-emerald-400 transition-colors w-max" href="/pricing">Pricing</a>
</div>
<div className="w-full h-px bg-emerald-900/30 my-8"></div>
<a className="text-xl font-light text-emerald-50/70 hover:text-emerald-400 transition-colors sm:hidden w-max" href="/sign-in">Sign In</a>
</div>


<canvas className="absolute inset-0 w-full h-300 z-0 pointer-events-none" height="818" id="bg-canvas" width="1096"></canvas>

<div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05),transparent_65%)]"></div>

<div className="flex flex-col min-h-screen md:px-12 lg:px-24 z-10 w-full pt-24 pr-6 pl-6 relative items-center">

<main className="relative w-full max-w-6xl mt-16 mb-8">
<div className="absolute -top-1 -left-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20"></div>
<div className="flex flex-col overflow-hidden md:flex-row md:p-16 lg:pl-0 lg:pr-0 lg:pt-12 lg:pb-12 w-full border-emerald-900/30 border pt-12 pr-12 pb-12 pl-12 relative items-center justify-between" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.00) 100%)'}}>
<div className="max-w-xl lg:ml-8 relative z-10 w-full md:w-1/2">
<div className="w-10 h-10 bg-emerald-500/10 rounded-md flex items-center justify-center mb-8 border border-emerald-400/20 backdrop-blur-sm">
<i className="text-emerald-400 w-5 h-5" data-lucide="leaf"></i>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.1] mb-8">
              Navigate your
              <span className="block">event with</span>
<span className="block text-emerald-300">confidence.</span>
</h1>
<p className="md:text-2xl leading-relaxed text-xl font-thin text-emerald-50/60 max-w-lg mb-10">
              TrueNorth routes, transforms, and delivers critical events across
              every channel with precision, observability, and reliability built
              for modern engineering teams.
            </p>
<button className="group flex transition-all duration-500 ease-out hover:bg-[#050a06] hover:border-emerald-400/80 hover:shadow-[inset_0_0_30px_rgba(16,185,129,0.2),0_0_30px_rgba(52,211,153,0.4)] hover:-translate-y-0.5 cursor-pointer font-light text-emerald-50 tracking-wide bg-[#030704]/90 border-emerald-500/40 border rounded-none pt-3 pr-8 pb-3 pl-8 shadow-[inset_0_0_20px_rgba(16,185,129,0.15),0_0_15px_rgba(16,185,129,0.2)] backdrop-blur-md gap-x-2 gap-y-x-2 items-center justify-center">
              Start Building
              <i className="w-4 h-4 text-black/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</button>
</div>

<div className="w-full md:w-1/2 h-[350px] md:h-[450px] lg:h-[550px] relative z-10 mt-12 md:mt-0 flex items-center justify-center cursor-crosshair" id="hero-compass-container">
<div className="relative w-72 h-72 md:w-80 md:h-80 flex items-center justify-center select-none">
<div className="absolute inset-[-30%] pointer-events-none opacity-25" style={{backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '24px 24px', maskImage: 'radial-gradient(circle, black 40%, transparent 65%)', WebkitMaskImage: 'radial-gradient(circle, black 40%, transparent 65%)'}}></div>
<div className="absolute inset-0 rounded-full bg-[#030704]/90 border border-emerald-900/40 shadow-[inset_0_4px_30px_rgba(0,0,0,0.9)]"></div>
<div className="absolute inset-4 rounded-full border border-emerald-800/20 bg-gradient-to-br from-white/[0.01] to-transparent">
<span className="absolute top-2 left-1/2 -translate-x-1/2 text-emerald-400 text-sm font-light z-10 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">
                  N
                </span>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-100/20 text-sm font-light z-10">
                  E
                </span>
<span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-emerald-100/20 text-sm font-light z-10">
                  S
                </span>
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-100/20 text-sm font-light z-10">
                  W
                </span>
<div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-2.5 bg-emerald-400/80"></div>
<div className="absolute right-8 top-1/2 -translate-y-1/2 w-2.5 h-px bg-emerald-100/20"></div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-px h-2.5 bg-emerald-100/20"></div>
<div className="absolute left-8 top-1/2 -translate-y-1/2 w-2.5 h-px bg-emerald-100/20"></div>
</div>
<div className="absolute inset-[50px] rounded-full border border-emerald-800/30 bg-[#040805] shadow-[inset_0_0_20px_rgba(16,185,129,0.03)] will-change-transform" id="compass-dial">
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 200 200">
<g className="" id="dial-ticks"><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="100" x2="100" y1="6" y2="11"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="108.19263981827987" x2="108.01832833278455" y1="6.357698379375918" y2="8.350087775559416"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="116.32292870069146" x2="115.9756323453576" y1="7.4280712168524445" y2="9.397686722876855"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="124.32899023963695" x2="123.81135214943191" y1="9.202972328827585" y2="11.134823981405717"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="132.14989347261286" x2="131.46585318596152" y1="11.668893646124616" y2="13.54827888769644"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="139.72611660362574" x2="138.88088008014435" y1="14.8070680185549" y2="16.619683592628206"></line><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="147" x2="144.5" y1="18.59361204426277" y2="22.923739063184968"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="153.91618501699833" x2="152.76903214429626" y1="22.999707836834773" y2="24.638011925412755"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="160.4220353105347" x2="159.1364600911616" y1="27.991822346816065" y2="29.523911233054022"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="166.4680374315355" x2="165.0538238691624" y1="33.531962568464536" y2="34.94617613083763"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="172.00817765318394" x2="170.47608876694596" y1="39.57796468946531" y2="40.86353990883839"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="177.00029216316523" x2="175.36198807458726" y1="46.08381498300167" y2="47.23096785570377"></line><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="181.40638795573724" x2="177.07626093681506" y1="53.00000000000001" y2="55.50000000000001"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="185.1929319814451" x2="183.3803164073718" y1="60.27388339637425" y2="61.11911991985565"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="188.33110635387538" x2="186.45172111230357" y1="67.85010652738714" y2="68.53414681403848"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="190.79702767117243" x2="188.8651760185943" y1="75.67100976036305" y2="76.18864785056809"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="192.57192878314754" x2="190.60231327712313" y1="83.67707129930855" y2="84.0243676546424"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="193.6423016206241" x2="191.64991222444058" y1="91.80736018172013" y2="91.98167166721545"></line><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="194" x2="189" y1="100" y2="100"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="193.6423016206241" x2="191.64991222444058" y1="108.19263981827987" y2="108.01832833278455"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="192.57192878314754" x2="190.60231327712313" y1="116.32292870069145" y2="115.9756323453576"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="190.79702767117243" x2="188.8651760185943" y1="124.32899023963695" y2="123.81135214943191"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="188.33110635387538" x2="186.45172111230357" y1="132.14989347261286" y2="131.46585318596152"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="185.1929319814451" x2="183.3803164073718" y1="139.72611660362574" y2="138.88088008014435"></line><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="181.40638795573724" x2="177.07626093681506" y1="147" y2="144.5"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="177.00029216316523" x2="175.36198807458726" y1="153.91618501699833" y2="152.76903214429623"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="172.00817765318394" x2="170.47608876694596" y1="160.42203531053468" y2="159.1364600911616"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="166.4680374315355" x2="165.0538238691624" y1="166.46803743153546" y2="165.0538238691624"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="160.4220353105347" x2="159.1364600911616" y1="172.00817765318394" y2="170.47608876694596"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="153.91618501699833" x2="152.76903214429626" y1="177.00029216316523" y2="175.36198807458726"></line><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="147" x2="144.5" y1="181.40638795573722" y2="177.07626093681503"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="139.72611660362574" x2="138.88088008014435" y1="185.1929319814451" y2="183.3803164073718"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="132.14989347261286" x2="131.46585318596152" y1="188.33110635387538" y2="186.45172111230357"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="124.32899023963695" x2="123.81135214943191" y1="190.79702767117243" y2="188.8651760185943"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="116.32292870069146" x2="115.9756323453576" y1="192.57192878314754" y2="190.60231327712313"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="108.19263981827987" x2="108.01832833278455" y1="193.6423016206241" y2="191.64991222444058"></line><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="100" x2="100" y1="194" y2="189"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="91.80736018172013" x2="91.98167166721544" y1="193.6423016206241" y2="191.64991222444058"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="83.67707129930855" x2="84.02436765464242" y1="192.57192878314754" y2="190.60231327712313"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="75.67100976036303" x2="76.18864785056809" y1="190.79702767117243" y2="188.8651760185943"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="67.85010652738714" x2="68.53414681403848" y1="188.33110635387538" y2="186.45172111230357"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="60.273883396374266" x2="61.11911991985566" y1="185.1929319814451" y2="183.38031640737182"></line><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="53.00000000000002" x2="55.50000000000002" y1="181.40638795573724" y2="177.07626093681506"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="46.08381498300166" x2="47.23096785570375" y1="177.00029216316523" y2="175.36198807458723"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="39.5779646894653" x2="40.863539908838376" y1="172.00817765318394" y2="170.47608876694596"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="33.531962568464536" x2="34.94617613083763" y1="166.4680374315355" y2="165.0538238691624"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="27.99182234681608" x2="29.523911233054037" y1="160.4220353105347" y2="159.13646009116164"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="22.99970783683476" x2="24.63801192541274" y1="153.91618501699833" y2="152.76903214429623"></line><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="18.593612044262755" x2="22.923739063184954" y1="147" y2="144.5"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="14.8070680185549" x2="16.619683592628206" y1="139.72611660362577" y2="138.88088008014435"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="11.668893646124616" x2="13.54827888769644" y1="132.14989347261286" y2="131.46585318596152"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="9.202972328827585" x2="11.13482398140573" y1="124.32899023963698" y2="123.81135214943194"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="7.4280712168524445" x2="9.397686722876855" y1="116.32292870069145" y2="115.97563234535758"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="6.357698379375918" x2="8.350087775559416" y1="108.19263981827987" y2="108.01832833278455"></line><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="6" x2="11" y1="100.00000000000001" y2="100.00000000000001"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="6.357698379375918" x2="8.350087775559416" y1="91.80736018172016" y2="91.98167166721547"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="7.4280712168524445" x2="9.397686722876855" y1="83.67707129930854" y2="84.02436765464239"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="9.202972328827585" x2="11.134823981405717" y1="75.67100976036305" y2="76.18864785056809"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="11.668893646124602" x2="13.548278887696426" y1="67.85010652738714" y2="68.53414681403848"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="14.8070680185549" x2="16.619683592628192" y1="60.273883396374266" y2="61.11911991985566"></line><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="18.59361204426277" x2="22.923739063184968" y1="52.99999999999999" y2="55.49999999999999"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="22.999707836834773" x2="24.638011925412755" y1="46.08381498300166" y2="47.23096785570375"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="27.991822346816065" x2="29.523911233054022" y1="39.57796468946531" y2="40.86353990883839"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="33.53196256846452" x2="34.946176130837614" y1="33.531962568464536" y2="34.94617613083763"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="39.57796468946529" x2="40.86353990883837" y1="27.99182234681608" y2="29.523911233054037"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="46.08381498300164" x2="47.23096785570373" y1="22.999707836834787" y2="24.63801192541277"></line><line stroke="rgba(52,211,153,0.4)" strokeLinecap="round" strokeWidth="1.5" x1="52.99999999999996" x2="55.49999999999996" y1="18.593612044262798" y2="22.923739063184982"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="60.27388339637428" x2="61.11911991985568" y1="14.8070680185549" y2="16.619683592628192"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="67.85010652738715" x2="68.5341468140385" y1="11.668893646124602" y2="13.548278887696426"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="75.67100976036306" x2="76.1886478505681" y1="9.202972328827585" y2="11.134823981405717"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="83.67707129930855" x2="84.0243676546424" y1="7.4280712168524445" y2="9.397686722876855"></line><line stroke="rgba(52,211,153,0.15)" strokeLinecap="round" strokeWidth="1" x1="91.80736018172013" x2="91.98167166721544" y1="6.357698379375918" y2="8.350087775559416"></line></g>
<g className="text-xs fill-white/40 font-thin" dominant-baseline="middle" id="dial-labels" text-anchor="middle"><text transform="rotate(90 100 21)" x="100" y="21">0</text><text transform="rotate(120 139.5 31.58399310102935)" x="139.5" y="31.58399310102935">30</text><text transform="rotate(150 168.41600689897066 60.50000000000001)" x="168.41600689897066" y="60.50000000000001">60</text><text transform="rotate(180 179 100)" x="179" y="100">90</text><text transform="rotate(210 168.41600689897066 139.5)" x="168.41600689897066" y="139.5">120</text><text transform="rotate(240 139.5 168.41600689897064)" x="139.5" y="168.41600689897064">150</text><text transform="rotate(270 100 179)" x="100" y="179">180</text><text transform="rotate(300 60.500000000000014 168.41600689897066)" x="60.500000000000014" y="168.41600689897066">210</text><text transform="rotate(330 31.583993101029336 139.5)" x="31.583993101029336" y="139.5">240</text><text transform="rotate(360 21 100.00000000000001)" x="21" y="100.00000000000001">270</text><text transform="rotate(390 31.58399310102935 60.49999999999999)" x="31.58399310102935" y="60.49999999999999">300</text><text transform="rotate(420 60.499999999999964 31.583993101029364)" x="60.499999999999964" y="31.583993101029364">330</text></g>
</svg>
</div>
<div className="absolute top-[44px] left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
<div className="w-16 h-8 bg-emerald-400/20 blur-[12px] rounded-full absolute -top-4"></div>
<div className="w-[2px] h-6 bg-emerald-200 shadow-[0_0_10px_2px_rgba(52,211,153,0.9)]"></div>
</div>
<div className="absolute inset-[85px] rounded-full bg-gradient-to-b from-[#0e2114] to-[#030604] border border-[#1a3621] shadow-[0_15px_30px_rgba(0,0,0,0.9),inset_0_2px_5px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center z-30">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-12 bg-emerald-400/10 blur-xl rounded-full"></div>
<div className="text-5xl font-thin text-white tracking-tight mt-1 leading-none" id="display-degree">359°</div>
<div className="text-xs font-thin text-emerald-500/80 tracking-[0.2em] uppercase mt-2" id="display-dir">N</div>
</div>
</div>
</div>
</div>
</main>

<div className="w-full flex justify-center py-12 relative z-10 pointer-events-none">
<div className="w-full max-w-5xl h-px opacity-60" style={{backgroundImage: 'repeating-linear-gradient(to right, #10b981, #10b981 2px, transparent 2px, transparent 6px)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}></div>
</div>

<section className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 z-10">
<div className="relative w-full group">
<div className="absolute -top-1 -left-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="border border-emerald-900/30 p-8 h-full bg-gradient-to-b from-white/[0.02] to-transparent hover:bg-emerald-900/10 transition-colors duration-500">
<div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5 text-emerald-400" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-light tracking-tight mb-4 text-white">
              Sub-second Latency
            </h3>
<p className="text-lg font-thin text-emerald-50/50 leading-relaxed">
              Our globally distributed edge network delivers events instantly
              across regions with consistent low latency.
            </p>
</div>
</div>
<div className="relative w-full group">
<div className="absolute -top-1 -left-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="border border-emerald-900/30 p-8 h-full bg-gradient-to-b from-white/[0.02] to-transparent hover:bg-emerald-900/10 transition-colors duration-500">
<div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5 text-emerald-400" data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-light tracking-tight mb-4 text-white">
              Cryptographic Security
            </h3>
<p className="text-lg font-thin text-emerald-50/50 leading-relaxed">
              Every payload is signed and verifiable, giving teams strong
              guarantees around integrity and trusted delivery.
            </p>
</div>
</div>
<div className="relative w-full group">
<div className="absolute -top-1 -left-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-emerald-500/30 bg-[#050a06] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="border border-emerald-900/30 p-8 h-full bg-gradient-to-b from-white/[0.02] to-transparent hover:bg-emerald-900/10 transition-colors duration-500">
<div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center mb-6">
<i className="w-5 h-5 text-emerald-400" data-lucide="git-merge"></i>
</div>
<h3 className="text-2xl font-light tracking-tight mb-4 text-white">
              Infinite Retries
            </h3>
<p className="text-lg font-thin text-emerald-50/50 leading-relaxed">
              Smart retry queues, dead-letter handling, and observability ensure
              events are recovered and delivered reliably.
            </p>
</div>
</div>
</section>

<section className="relative w-full max-w-6xl mb-24 z-10">
<div className="absolute -top-1 -left-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20"></div>
<div className="w-full border border-emerald-900/30 bg-black/40 p-1 flex flex-col md:flex-row relative overflow-hidden backdrop-blur-md">
<div className="w-full md:w-1/3 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-emerald-900/30 bg-gradient-to-r from-white/[0.02] to-transparent">
<div className="flex items-center gap-2 mb-4 text-emerald-400">
<i className="w-4 h-4" data-lucide="activity"></i>
<span className="text-xs font-light tracking-widest uppercase">
                Live Network Topology
              </span>
</div>
<h2 className="text-3xl font-light tracking-tight mb-4 text-white">
              Observe event flow in real time.
            </h2>
<p className="text-lg font-thin text-emerald-50/50 leading-relaxed mb-8">
              Monitor how events move through distributed gateways and delivery
              nodes with live throughput, latency, and activity signals.
            </p>
<div className="space-y-4">
<div className="flex justify-between items-center text-sm border-b border-emerald-900/30 pb-2">
<span className="font-thin text-gray-400">Active Nodes</span>
<span className="font-light text-emerald-400">2,408</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-emerald-900/30 pb-2">
<span className="font-thin text-gray-400">Events / Sec</span>
<span className="font-light text-emerald-400">14.2M</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="font-thin text-gray-400">Avg Latency</span>
<span className="font-light text-emerald-400">12ms</span>
</div>
</div>
</div>
<div className="w-full md:w-2/3 h-[400px] md:h-auto relative bg-[#020503] cursor-crosshair" id="three-container">
<div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] z-10"></div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mb-24 z-10 relative" id="platform">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
            A unified event delivery platform
          </h2>
<p className="text-lg font-thin text-emerald-50/60 max-w-2xl mx-auto leading-relaxed">
            TrueNorth gives teams the control layer for transforming, routing,
            and delivering mission-critical events.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border border-emerald-900/30 p-8 bg-gradient-to-br from-white/[0.02] to-transparent relative group">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-10 h-10 bg-emerald-500/10 border border-emerald-400/20 rounded-md flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:routing-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-light tracking-tight mb-3 text-white">
              Intelligent Routing
            </h3>
<p className="text-base font-thin text-emerald-50/60 leading-relaxed">
              Build routing rules that forward events based on payload content,
              headers, origin, or custom delivery logic.
            </p>
</div>
<div className="border border-emerald-900/30 p-8 bg-gradient-to-bl from-white/[0.02] to-transparent relative group">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="w-10 h-10 bg-emerald-500/10 border border-emerald-400/20 rounded-md flex items-center justify-center mb-6">
<iconify-icon className="text-emerald-400 text-xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-light tracking-tight mb-3 text-white">
              Schema Transformation
            </h3>
<p className="text-base font-thin text-emerald-50/60 leading-relaxed">
              Modify, enrich, and sanitize payloads in real time before delivery
              using a flexible transformation layer.
            </p>
</div>
</div>
</section>

<section className="z-10 group w-full max-w-6xl mb-24 relative" id="docs">
<div className="absolute -top-1 -left-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20 transition-transform duration-700 group-hover:scale-150"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20 transition-transform duration-700 group-hover:scale-150"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20 transition-transform duration-700 group-hover:scale-150"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border border-emerald-500/50 bg-[#050a06] z-20 transition-transform duration-700 group-hover:scale-150"></div>
<style>
          #docs .code-shell {
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(16, 185, 129, 0.16);
            background: linear-gradient(180deg, rgba(10, 20, 14, 0.96) 0%, rgba(4, 10, 7, 0.98) 100%);
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02), 0 20px 60px rgba(0, 0, 0, 0.35);
          }

          #docs .code-shell::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: linear-gradient(180deg, rgba(16, 185, 129, 0.035), transparent 35%, transparent 100%);
          }

          #docs .code-panel {
            position: relative;
          }

          #docs .code-line {
            opacity: 0;
            min-height: 1.6em;
            white-space: pre-wrap;
            word-break: break-word;
            transform: translateY(8px);
            transition: opacity 0.35s ease, transform 0.35s ease;
          }

          #docs .code-line.is-visible {
            opacity: 1;
            transform: translateY(0);
          }

          #docs .code-line .typed-text {
            display: inline;
          }

          #docs .code-line .caret {
            display: inline-block;
            width: 0.6ch;
            margin-left: 1px;
            color: rgba(52, 211, 153, 0.95);
            animation: docsCaretBlink 0.9s steps(1) infinite;
          }

          #docs .code-line.done .caret {
            display: none;
          }

          #docs .code-glow {
            position: absolute;
            inset: auto 10% -18% 10%;
            height: 140px;
            border-radius: 999px;
            background: radial-gradient(circle, rgba(16, 185, 129, 0.16) 0%, rgba(16, 185, 129, 0.05) 35%, transparent 72%);
            filter: blur(32px);
            pointer-events: none;
          }

          #docs .code-scan {
            position: absolute;
            inset: 0;
            pointer-events: none;
            opacity: 0;
            background: linear-gradient(180deg,
                transparent 0%,
                rgba(52, 211, 153, 0.02) 45%,
                rgba(52, 211, 153, 0.08) 50%,
                rgba(52, 211, 153, 0.02) 55%,
                transparent 100%);
          }

          #docs .code-shell.is-playing .code-scan {
            animation: docsScan 3.2s linear infinite;
            opacity: 1;
          }

          @keyframes docsCaretBlink {

            0%,
            49% {
              opacity: 1;
            }

            50%,
            100% {
              opacity: 0;
            }
          }

          @keyframes docsScan {
            0% {
              transform: translateY(-100%);
            }

            100% {
              transform: translateY(100%);
            }
          }
        </style>
<div className="flex flex-col md:flex-row transition-all duration-700 hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] hover:-translate-y-1 bg-black/40 w-full border-emerald-900/30 border pt-1 pr-1 pb-1 pl-1 relative backdrop-blur-md">
<div className="md:w-1/2 md:p-12 flex flex-col md:border-b-0 md:border-r bg-gradient-to-r from-white/[0.02] to-transparent w-full border-emerald-900/30 border-b pt-8 pr-8 pb-8 pl-8 justify-center">
<div className="flex items-center gap-2 mb-4 text-emerald-400">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<path d="M10 13a5 5 0 0 0-7.54.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
<path d="M14 11a5 5 0 0 0 7.54-.54l3-3a5 5 0 0 0-7.07-7.07l-1.71 1.71"></path>
</svg>
<span className="text-xs font-light tracking-widest uppercase">
                Developer API
              </span>
</div>
<h2 className="text-3xl font-light tracking-tight mb-4 text-white">
              Integrate in minutes.
            </h2>
<p className="text-lg font-thin text-emerald-50/60 leading-relaxed mb-6">
              Ship event publishing quickly with official SDKs, type-safe
              helpers, and a clean API built for production systems.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm font-thin text-emerald-50/80">
<svg className="text-emerald-500 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Type-safe payload validation and auto-completion
              </li>
<li className="flex items-center gap-3 text-sm font-thin text-emerald-50/80">
<svg className="text-emerald-500 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Idempotency keys to prevent duplicate processing
              </li>
<li className="flex items-center gap-3 text-sm font-thin text-emerald-50/80">
<svg className="text-emerald-500 w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Real-time delivery status webhooks
              </li>
</ul>
<a className="text-emerald-400 font-light text-sm flex items-center gap-2 hover:text-emerald-300 transition-all duration-300 w-max group/link" href="#">
              View API Documentation
              <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="md:w-1/2 md:p-12 flex bg-[#020503] w-full pt-8 pr-8 pb-8 pl-8 items-center justify-center">
<div className="relative w-full max-w-md">
<div className="code-shell code-panel w-full transition-all duration-500 hover:scale-[1.02] hover:border-emerald-500/50 hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)]">
<div className="code-scan"></div>
<div className="h-10 border-b border-emerald-900/40 bg-[#070e0a] flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-900/60 transition-colors duration-300 hover:bg-red-500/80 cursor-pointer"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-900/60 transition-colors duration-300 hover:bg-yellow-500/80 cursor-pointer"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-900/60 transition-colors duration-300 hover:bg-emerald-500/80 cursor-pointer"></div>
<span className="ml-4 text-xs font-mono text-emerald-50/30">
                    publisher.ts
                  </span>
</div>
<div className="p-6 font-mono text-xs md:text-sm leading-loose">
<div className="text-emerald-400/80 code-line" data-text="import { TrueNorth } from '@truenorth/sdk';">
<span className="typed-text"></span>
<span className="caret">|</span>
</div>
<br/>
<div className="text-emerald-50/70 code-line" data-text="const client = new TrueNorth({"></div>
<div className="text-emerald-50/70 pl-6 code-line" data-text="apiKey: process.env.TRUENORTH_KEY,"></div>
<div className="text-emerald-50/70 pl-6 code-line" data-text="environment: 'production'"></div>
<div className="text-emerald-50/70 code-line" data-text="});"></div>
<br/>
<div className="text-emerald-50/70 code-line" data-text="await client.events.publish({"></div>
<div className="text-emerald-50/70 pl-6 code-line" data-text="topic: 'user.created',"></div>
<div className="text-emerald-50/70 pl-6 code-line" data-text="payload: {"></div>
<div className="text-emerald-50/70 pl-12 code-line" data-text="id: 'usr_9x8f',"></div>
<div className="text-emerald-50/70 pl-12 code-line" data-text="plan: 'enterprise'"></div>
<div className="text-emerald-50/70 pl-6 code-line" data-text="},"></div>
<div className="text-emerald-50/70 pl-6 code-line" data-text="idempotencyKey: 'req_123'"></div>
<div className="text-emerald-50/70 code-line" data-text="});"></div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
<div className="bg-black/40 border border-emerald-900/30 p-8 relative backdrop-blur-md transition-all duration-700 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:-translate-y-2 group flex flex-col justify-between cursor-default">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="">
<div className="w-10 h-10 bg-emerald-500/10 border border-emerald-400/20 rounded-md flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-2xl font-light tracking-tight mb-3 text-white group-hover:text-emerald-50 transition-colors duration-300">
                Enterprise-Grade Security
              </h3>
<p className="text-base font-thin text-emerald-50/60 leading-relaxed mb-6">
                Protect event delivery with encrypted transport, trusted
                signatures, and verification workflows built for production
                systems.
              </p>
</div>
<a className="text-emerald-400 font-light text-sm flex items-center gap-2 hover:text-emerald-300 transition-all duration-300 w-max group/btn" href="#">
              Read Security Docs
              <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
<div className="bg-black/40 border border-emerald-900/30 p-8 relative backdrop-blur-md transition-all duration-700 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] hover:-translate-y-2 group flex flex-col justify-between cursor-default">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="">
<div className="w-10 h-10 bg-emerald-500/10 border border-emerald-400/20 rounded-md flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-500">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<h3 className="text-2xl font-light tracking-tight mb-3 text-white group-hover:text-emerald-50 transition-colors duration-300">
                Multi-Language SDKs
              </h3>
<p className="text-base font-thin text-emerald-50/60 leading-relaxed mb-6">
                Use official SDKs across Node.js, Python, Go, and Rust to
                integrate event publishing with minimal friction.
              </p>
</div>
<a className="text-emerald-400 font-light text-sm flex items-center gap-2 hover:text-emerald-300 transition-all duration-300 w-max group/btn" href="#">
              Explore Libraries
              <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</section>
<section className="z-10 group w-full max-w-6xl mb-24 relative" id="docs">
<main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col items-center justify-center min-h-screen">

<header className="text-center mb-24 md:mb-32 max-w-2xl w-full z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#34d399]/20 bg-[#34d399]/[0.02] mb-6 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
<span className="text-xs font-mono tracking-widest text-[#34d399] uppercase">
                Architecture Overview
              </span>
</div>
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
              Distributed Core Infrastructure
            </h2>
<p className="text-base md:text-lg font-light text-white/40 leading-relaxed">
              A highly resilient, globally dispersed system topology designed
              for automated scaling, intelligent traffic routing, and
              sub-millisecond telemetry processing.
            </p>
</header>

<div className="relative w-full z-20">

<div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-[#34d399]/10 -translate-y-1/2 z-0">
<div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#34d399]/40 to-transparent animate-[flowRight_4s_linear_infinite]"></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 w-full relative z-10">

<article className="flex flex-col group lg:-mt-16 overflow-hidden hover:border-[#34d399]/30 transition-colors duration-500 bg-[#040c07]/80 max-h-fit border-[#34d399]/10 border rounded-none relative backdrop-blur-xl">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#34d399]/[0.03] to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex z-10 border-[#34d399]/10 border-b pt-8 pr-8 pb-0 pl-8 relative items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-[#34d399]" icon="solar:globus-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-mono tracking-widest text-white/50">
                      SYS-01
                    </span>
</div>
</div>
<div className="relative h-64 w-full flex items-center justify-center border-b border-[#34d399]/10 bg-black/20">
<canvas className="absolute inset-0 w-full h-full" height="512" id="canvas-core" style={{touchAction: 'none'}} width="470"></canvas>

<div className="absolute top-2 left-2 w-1 h-1 border-t border-l border-[#34d399]/40"></div>
<div className="absolute bottom-2 right-2 w-1 h-1 border-b border-r border-[#34d399]/40"></div>
</div>
<div className="p-8 relative z-10">
<h3 className="text-xl font-normal tracking-tight text-white/90 mb-3">
                    Computational Matrix
                  </h3>
<p className="text-sm font-light text-white/40 leading-relaxed">
                    Decentralized processing clusters execute instructions
                    concurrently. The grid dynamically reallocates computational
                    weight based on real-time task complexity.
                  </p>
</div>
</article>

<article className="flex flex-col group lg:mt-16 overflow-hidden hover:border-[#34d399]/30 transition-colors duration-500 bg-[#040c07]/80 border-[#34d399]/10 border rounded-none relative backdrop-blur-xl">

<div className="hidden lg:block absolute -top-16 left-1/2 w-px h-16 bg-[#34d399]/20 -translate-x-1/2">
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-[#34d399]/60 to-transparent animate-[flowDown_3s_linear_infinite]"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-[#34d399]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="p-8 pb-0 flex items-center justify-between border-b border-[#34d399]/10 relative z-10">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-[#34d399]" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-mono tracking-widest text-white/50">
                      NET-02
                    </span>
</div>
</div>
<div className="flex bg-black/20 w-full h-64 border-[#34d399]/10 border-b relative items-center justify-center">
<canvas className="w-full h-full absolute top-0 right-0 bottom-0 left-0" height="512" id="canvas-network" style={{touchAction: 'none'}} width="470"></canvas>
<div className="absolute top-2 right-2 w-1 h-1 border-t border-r border-[#34d399]/40"></div>
<div className="absolute bottom-2 left-2 w-1 h-1 border-b border-l border-[#34d399]/40"></div>
</div>
<div className="p-8 relative z-10">
<h3 className="text-xl font-normal tracking-tight text-white/90 mb-3">
                    Neural Routing
                  </h3>
<p className="text-sm font-light text-white/40 leading-relaxed">
                    Autonomous algorithms monitor packet transit across all
                    nodes, instantly establishing optimal pathways to circumvent
                    hardware latency or geographic isolation.
                  </p>
</div>
</article>

<article className="flex flex-col group lg:-mt-8 overflow-hidden hover:border-[#34d399]/30 transition-colors duration-500 bg-[#040c07]/80 max-h-fit border-[#34d399]/10 border rounded-none relative backdrop-blur-xl">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[#34d399]/[0.03] to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="p-8 pb-0 flex items-center justify-between border-b border-[#34d399]/10 relative z-10">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-[#34d399]" icon="solar:radar-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-mono tracking-widest text-white/50">
                      OPS-03
                    </span>
</div>
</div>
<div className="relative h-64 w-full flex items-center justify-center border-b border-[#34d399]/10 bg-black/20">
<canvas className="w-full h-full absolute top-0 right-0 bottom-0 left-0" height="512" id="canvas-orbit" style={{touchAction: 'none'}} width="470"></canvas>
<div className="absolute top-2 left-2 w-1 h-1 border-t border-l border-[#34d399]/40"></div>
<div className="absolute bottom-2 right-2 w-1 h-1 border-b border-r border-[#34d399]/40"></div>
</div>
<div className="z-10 pt-8 pr-8 pb-8 pl-8 relative">
<h3 className="text-xl font-normal tracking-tight text-white/90 mb-3">
                    State Telemetry
                  </h3>
<p className="text-sm font-light text-white/40 leading-relaxed">
                    Continuous extraction of infrastructural vitals. Orbital
                    logging mechanisms isolate anomalies before they propagate,
                    maintaining absolute operational harmony.
                  </p>
</div>
</article>
</div>
</div>
</main>
<style>
          @keyframes flowRight {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(300%); }
          }
          @keyframes flowDown {
              0% { transform: translateY(-100%); }
              100% { transform: translateY(200%); }
          }
        </style>



</section>

<section className="w-full max-w-6xl mb-24 z-10 relative" id="use-cases">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
            Built for modern applications
          </h2>
<p className="text-lg font-thin text-emerald-50/60 max-w-2xl mx-auto leading-relaxed">
            Power critical event delivery across industries that depend on
            reliability and scale.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="border border-emerald-900/30 bg-[#050a06]/50 p-8 hover:bg-emerald-900/10 transition-colors duration-300">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-emerald-400 text-2xl" icon="solar:wallet-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-light tracking-tight text-white">
                Fintech
              </h3>
</div>
<p className="text-base font-thin text-emerald-50/60 leading-relaxed">
              Deliver transaction alerts, risk events, and compliance
              notifications with guaranteed observability and auditability.
            </p>
</div>
<div className="border border-emerald-900/30 bg-[#050a06]/50 p-8 hover:bg-emerald-900/10 transition-colors duration-300">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-emerald-400 text-2xl" icon="solar:cart-large-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-light tracking-tight text-white">
                E-Commerce
              </h3>
</div>
<p className="text-base font-thin text-emerald-50/60 leading-relaxed">
              Coordinate order, inventory, and fulfillment events across
              thousands of merchants and downstream systems.
            </p>
</div>
<div className="border border-emerald-900/30 bg-[#050a06]/50 p-8 hover:bg-emerald-900/10 transition-colors duration-300">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-emerald-400 text-2xl" icon="solar:cloud-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg font-light tracking-tight text-white">
                SaaS Platforms
              </h3>
</div>
<p className="text-base font-thin text-emerald-50/60 leading-relaxed">
              Offer customers dependable webhooks and system notifications
              without running complex event infrastructure yourself.
            </p>
</div>
</div>
</section>
<section className="w-full max-w-6xl mb-24 z-10 relative" id="integrations">
<div className="text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/[0.02] mb-6 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
<span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              Integrations
            </span>
</div>
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4">
            Connect your entire stack
          </h2>
<p className="text-lg font-thin text-emerald-50/60 max-w-2xl mx-auto leading-relaxed">
            Plug into dozens of destinations instantly. TrueNorth handles the
            authentication, retries, and formatting.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
<div className="border border-emerald-900/30 bg-[#050a06]/50 p-6 flex flex-col items-center text-center hover:bg-emerald-900/20 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] transition-all duration-300 group cursor-pointer relative">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="w-12 h-12 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-emerald-400 relative z-10">
<iconify-icon className="text-2xl" height="24" icon="logos:aws-amplify" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-normal text-white mb-1 relative z-10">
              AWS EventBridge
            </h3>
<p className="text-xs font-thin text-emerald-50/50 relative z-10">
              Native bi-directional sync
            </p>
</div>
<div className="border border-emerald-900/30 bg-[#050a06]/50 p-6 flex flex-col items-center text-center hover:bg-emerald-900/20 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] transition-all duration-300 group cursor-pointer relative">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="w-12 h-12 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon className="text-2xl" height="24" icon="logos:datadog-icon" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-normal text-white mb-1 relative z-10">
              Datadog
            </h3>
<p className="text-xs font-thin text-emerald-50/50 relative z-10">
              Real-time metrics &amp; logs
            </p>
</div>
<div className="border border-emerald-900/30 bg-[#050a06]/50 p-6 flex flex-col items-center text-center hover:bg-emerald-900/20 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] transition-all duration-300 group cursor-pointer relative">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="w-12 h-12 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon className="text-2xl" icon="logos:slack-icon"></iconify-icon>
</div>
<h3 className="text-sm font-normal text-white mb-1 relative z-10">
              Slack
            </h3>
<p className="text-xs font-thin text-emerald-50/50 relative z-10">
              Alerts &amp; Notifications
            </p>
</div>
<div className="border border-emerald-900/30 bg-[#050a06]/50 p-6 flex flex-col items-center text-center hover:bg-emerald-900/20 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] transition-all duration-300 group cursor-pointer relative">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="flex group-hover:scale-110 transition-transform duration-300 z-10 bg-emerald-500/5 w-12 h-12 border-emerald-500/10 border rounded-xl mb-4 relative items-center justify-center">
<svg className="text-2xl w-[14px] h-[24px]" data-icon-replaced="true" data-icon-set="logos" data-logos="apache-camel" height="24" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '14px', height: '24px'}} viewbox="0 0 256 256" width="14" xmlns="http://www.w3.org/2000/svg"><defs><lineargradient id="SVGAfsXdeyn" x1="-12.564%" x2="101.304%" y1="108.214%" y2="-1.964%"><stop offset="0%" stop-color="#F69923"></stop><stop offset="10.996%" stop-color="#F79A23"></stop><stop offset="94.502%" stop-color="#E97826"></stop></lineargradient><lineargradient id="SVGGVhU3tLG" x1="-12.564%" x2="101.304%" y1="108.214%" y2="-1.964%"><stop offset="0%" stop-color="#F69923"></stop><stop offset="8.048%" stop-color="#F79A23"></stop><stop offset="41.874%" stop-color="#E97826"></stop></lineargradient><lineargradient id="SVGYiHt9bps" x1="74.724%" x2="6.653%" y1="-3.059%" y2="100.066%"><stop offset="0%" stop-color="#F6E423"></stop><stop offset="41.191%" stop-color="#F79A23"></stop><stop offset="73.271%" stop-color="#E97826"></stop></lineargradient><circle cx="128" cy="128" id="SVGMFHNZdYm" r="128"></circle></defs><mask fill="#fff" id="SVGalfYF1HT"><use href="#SVGMFHNZdYm"></use></mask><circle cx="127.994" cy="127.994" fill="url(#SVGAfsXdeyn)" mask="url(#SVGalfYF1HT)" r="123.111"></circle><path d="M128 256C57.308 256 0 198.692 0 128S57.308 0 128 0s128 57.308 128 128s-57.308 128-128 128m0-9.768c65.298 0 118.232-52.934 118.232-118.232S193.298 9.768 128 9.768S9.768 62.702 9.768 128S62.702 246.232 128 246.232" fill="url(#SVGGVhU3tLG)" mask="url(#SVGalfYF1HT)"></path><path d="M98.044 75.517c-1.751-.002-3.524.01-5.292.061c-2.056.06-4.817.713-8 1.785c53.775 40.834 73.108 114.497 39.875 178.514c1.129.03 2.249.123 3.385.123c60.736 0 111.492-42.323 124.609-99.071c-38.542-45.178-90.813-81.314-154.578-81.412" fill="url(#SVGYiHt9bps)" mask="url(#SVGalfYF1HT)" opacity=".75"></path><path d="M84.752 77.368C66.895 83.378 32.83 104.546.079 132.81c2.487 67.334 57.028 121.313 124.548 123.07c33.233-64.016 13.901-137.68-39.875-178.513" fill="#28170B" mask="url(#SVGalfYF1HT)" opacity=".75"></path><path d="M128.747 54.005c-10.985 5.495 0 27.466 0 27.466C95.774 108.954 102.78 155.9 64.312 155.9c-20.97 0-42.242-24.077-64.233-38.828c-.283 3.479-.785 6.972-.785 10.524c0 48.095 26.263 89.924 65.42 111.897c10.952-1.38 22.838-4.114 31.05-9.592c43.146-28.765 53.857-83.491 71.487-109.925c10.979-16.492 62.434-15.061 65.906-22.01c5.502-10.991-10.99-27.467-16.491-27.467h-43.958c-3.071 0-7.897-5.456-10.974-5.456h-16.492s-7.307-11.085-13.794-11.526c-.93-.066-1.83.053-2.7.488" fill="#FFF" mask="url(#SVGalfYF1HT)"></path></svg>
</div>
<h3 className="text-sm font-normal text-white mb-1 relative z-10">
              Apache Kafka
            </h3>
<p className="text-xs font-thin text-emerald-50/50 relative z-10">
              High-throughput streaming
            </p>
</div>
<div className="border border-emerald-900/30 bg-[#050a06]/50 p-6 flex flex-col items-center text-center hover:bg-emerald-900/20 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] transition-all duration-300 group cursor-pointer relative">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="w-12 h-12 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10">
<iconify-icon className="text-2xl" icon="logos:pagerduty-icon"></iconify-icon>
</div>
<h3 className="text-sm font-normal text-white mb-1 relative z-10">
              PagerDuty
            </h3>
<p className="text-xs font-thin text-emerald-50/50 relative z-10">
              Incident orchestration
            </p>
</div>
<div className="border border-emerald-900/30 bg-[#050a06]/50 p-6 flex flex-col items-center text-center hover:bg-emerald-900/20 hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(16,185,129,0.05)] transition-all duration-300 group cursor-pointer relative">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
<div className="w-12 h-12 bg-emerald-500/5 border border-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 text-emerald-400 relative z-10">
<svg className="lucide lucide-webhook w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="logos" data-logos="webhooks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(52, 211, 153)', width: '24px', height: '24px'}} viewbox="0 0 256 239" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M119.54 100.503c-10.61 17.836-20.775 35.108-31.152 52.25c-2.665 4.401-3.984 7.986-1.855 13.58c5.878 15.454-2.414 30.493-17.998 34.575c-14.697 3.851-29.016-5.808-31.932-21.543c-2.584-13.927 8.224-27.58 23.58-29.757c1.286-.184 2.6-.205 4.762-.367l23.358-39.168C73.612 95.465 64.868 78.39 66.803 57.23c1.368-14.957 7.25-27.883 18-38.477c20.59-20.288 52.002-23.573 76.246-8.001c23.284 14.958 33.948 44.094 24.858 69.031c-6.854-1.858-13.756-3.732-21.343-5.79c2.854-13.865.743-26.315-8.608-36.981c-6.178-7.042-14.106-10.733-23.12-12.093c-18.072-2.73-35.815 8.88-41.08 26.618c-5.976 20.13 3.069 36.575 27.784 48.967" fill="#C73A63"></path><path d="M149.841 79.41c7.475 13.187 15.065 26.573 22.587 39.836c38.02-11.763 66.686 9.284 76.97 31.817c12.422 27.219 3.93 59.457-20.465 76.25c-25.04 17.238-56.707 14.293-78.892-7.851c5.654-4.733 11.336-9.487 17.407-14.566c21.912 14.192 41.077 13.524 55.305-3.282c12.133-14.337 11.87-35.714-.615-49.75c-14.408-16.197-33.707-16.691-57.035-1.143c-9.677-17.168-19.522-34.199-28.893-51.491c-3.16-5.828-6.648-9.21-13.77-10.443c-11.893-2.062-19.571-12.275-20.032-23.717c-.453-11.316 6.214-21.545 16.634-25.53c10.322-3.949 22.435-.762 29.378 8.014c5.674 7.17 7.477 15.24 4.491 24.083c-.83 2.466-1.905 4.852-3.07 7.774" fill="#4B4B4B"></path><path className="" d="M167.707 187.21h-45.77c-4.387 18.044-13.863 32.612-30.19 41.876c-12.693 7.2-26.373 9.641-40.933 7.29c-26.808-4.323-48.728-28.456-50.658-55.63c-2.184-30.784 18.975-58.147 47.178-64.293c1.947 7.071 3.915 14.21 5.862 21.264c-25.876 13.202-34.832 29.836-27.59 50.636c6.375 18.304 24.484 28.337 44.147 24.457c20.08-3.962 30.204-20.65 28.968-47.432c19.036 0 38.088-.197 57.126.097c7.434.117 13.173-.654 18.773-7.208c9.22-10.784 26.191-9.811 36.121.374c10.148 10.409 9.662 27.157-1.077 37.127c-10.361 9.62-26.73 9.106-36.424-1.26c-1.992-2.136-3.562-4.673-5.533-7.298" fill="#4A4A4A"></path></svg>
</div>
<h3 className="text-sm font-normal text-white mb-1 relative z-10">
              Webhooks
            </h3>
<p className="text-xs font-thin text-emerald-50/50 relative z-10">
              Connect any HTTP endpoint
            </p>
</div>
</div>
</section>

<section className="z-10 w-full max-w-6xl mb-24 relative" id="testimonials">
<style>
          @keyframes scroll-x {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          @keyframes scroll-x-reverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          .animate-scroll {
            animation: scroll-x 45s linear infinite;
          }

          .animate-scroll-reverse {
            animation: scroll-x-reverse 50s linear infinite;
          }

          .scroll-group:hover .animate-scroll,
          .scroll-group:hover .animate-scroll-reverse {
            animation-play-state: paused;
          }

          .scroll-group:hover .testimonial-card {
            opacity: 0.3;
            transform: scale(0.98) translateZ(0);
            filter: blur(2px);
          }

          .scroll-group .testimonial-card:hover {
            opacity: 1;
            transform: scale(1.02) translateZ(0);
            filter: blur(0px);
            z-index: 20;
            border-color: rgba(52, 211, 153, 0.4);
            box-shadow: 0 20px 40px -10px rgba(16, 185, 129, 0.15),
              inset 0 0 20px rgba(16, 185, 129, 0.05);
          }

          .testimonial-card::before {
            content: "";
            position: absolute;
            top: -1px;
            left: -100%;
            width: 50%;
            height: 1px;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(52, 211, 153, 0.9),
              transparent
            );
            animation: event-scan 6s linear infinite;
            animation-delay: var(--delay, 0s);
            z-index: 30;
          }

          @keyframes event-scan {
            0% {
              left: -100%;
            }
            100% {
              left: 200%;
            }
          }
        </style>
<div className="text-center mb-16 relative z-10 px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/[0.02] mb-6 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
<span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              Community
            </span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mb-4">
            Trusted by engineering teams
          </h2>
<p className="text-lg font-thin text-emerald-50/60 max-w-2xl mx-auto leading-relaxed">
            Leading companies rely on TrueNorth for mission-critical event
            delivery, unparalleled observability, and resilient architectures.
          </p>
</div>
<div className="relative w-full overflow-hidden scroll-group py-4" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>

<div className="flex gap-6 mb-6 w-max animate-scroll">
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '0s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "Since switching to TrueNorth, our event delivery rate has
                  stayed incredibly stable and our routing logic became far
                  easier to manage across all global regions."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Alex Rivera" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25df7579-09f7-4c8c-bb39-18a974a980d0_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Alex Rivera
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Lead Platform Engineer
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '1.2s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "The transformation layer is a massive win for our team. We
                  can sanitize and reshape sensitive payloads before they ever
                  leave our edge network."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Priya Patel" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a9f2a6f7-f473-484f-9db4-504cae45afd1_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Priya Patel
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    VP of Engineering
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '2.4s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "Integration took minutes, not weeks. The live topology view
                  instantly gave our operations team the observability we had
                  been missing for years."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Marcus Johnson" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b202409f-816e-4451-8ac9-bd0b04439d1b_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Marcus Johnson
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Systems Architect
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '3.6s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "We were dropping 2% of critical webhooks before TrueNorth.
                  Now we have cryptographic proof of every delivery, ensuring
                  zero data loss."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Sarah Chen" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8322831-e2ba-4007-9960-8e7e82b00480_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Sarah Chen
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Chief Technology Officer
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '4.8s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "The sub-second latency across dispersed regions is exactly
                  what our algorithmic trading platform needed to maintain a
                  competitive edge."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="David Kim" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd0dc97c-a094-49ac-8265-f47f1efa3939_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    David Kim
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Senior Backend Engineer
                  </p>
</div>
</div>
</div>

<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '0s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "Since switching to TrueNorth, our event delivery rate has
                  stayed incredibly stable and our routing logic became far
                  easier to manage across all global regions."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Alex Rivera" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2dbcdf02-39a2-4c13-95f7-3118cc995fa0_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Alex Rivera
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Lead Platform Engineer
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '1.2s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "The transformation layer is a massive win for our team. We
                  can sanitize and reshape sensitive payloads before they ever
                  leave our edge network."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Priya Patel" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e69e5f8e-07cd-4ef2-97e3-d4bcfccc3881_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Priya Patel
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    VP of Engineering
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '2.4s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "Integration took minutes, not weeks. The live topology view
                  instantly gave our operations team the observability we had
                  been missing for years."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Marcus Johnson" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eae5dceb-fa80-4934-b110-86decb2f64ac_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Marcus Johnson
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Systems Architect
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '3.6s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "We were dropping 2% of critical webhooks before TrueNorth.
                  Now we have cryptographic proof of every delivery, ensuring
                  zero data loss."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Sarah Chen" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Sarah Chen
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Chief Technology Officer
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '4.8s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "The sub-second latency across dispersed regions is exactly
                  what our algorithmic trading platform needed to maintain a
                  competitive edge."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="David Kim" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39e15168-9f77-4837-9a4b-89c74b8bc38b_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    David Kim
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Senior Backend Engineer
                  </p>
</div>
</div>
</div>
</div>

<div className="flex gap-6 w-max animate-scroll-reverse" style={{marginLeft: '-200px'}}>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '0.5s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "Infinite retries and dead-letter queues out of the box saved
                  us months of engineering. We can finally trust our async
                  workflows."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Elena Rodriguez" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/23c92345-65be-44d2-b48a-3073db88554d_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Elena Rodriguez
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Data Infrastructure Lead
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '1.7s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "Intelligent routing based on payload contents completely
                  eliminated our custom middleware. TrueNorth operates
                  flawlessly at scale."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="James Wilson" className="group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500 opacity-60 w-11 h-11 object-cover border-emerald-500/20 border rounded-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4ee565a-2084-483b-8358-9fc06da5ee99_320w.jpg"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    James Wilson
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    SRE Staff Engineer
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '2.9s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "A true game-changer for cross-service event choreography. The
                  developer experience is unmatched by anything else we
                  evaluated."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Maya Thompson" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8b9d8c98-705c-47b5-b1e4-c379f48796be_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Maya Thompson
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Head of DevOps
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '4.1s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "Finally, an event router that treats security and compliance
                  as first-class citizens instead of afterthoughts. Essential
                  for Fintech."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Thomas Weber" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce35a1f3-3bf2-436d-a76f-d9e534612f5e_320w.jpg"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Thomas Weber
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Principal Architect
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '5.3s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "TrueNorth's telemetry streams give us insights into our
                  microservices that we didn't even realize we were missing.
                  Absolutely vital."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Nina Desai" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7fac4589-f18c-4e9a-b68d-c56fb2ab4a91_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Nina Desai
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Platform Architect
                  </p>
</div>
</div>
</div>

<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '0.5s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "Infinite retries and dead-letter queues out of the box saved
                  us months of engineering. We can finally trust our async
                  workflows."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Elena Rodriguez" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99667665-1a71-4064-bf58-4743bb9e0ebc_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Elena Rodriguez
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Data Infrastructure Lead
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '1.7s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "Intelligent routing based on payload contents completely
                  eliminated our custom middleware. TrueNorth operates
                  flawlessly at scale."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="James Wilson" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43fc57bc-1266-44cf-a579-3f8ec64d4431_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    James Wilson
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    SRE Staff Engineer
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '2.9s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "A true game-changer for cross-service event choreography. The
                  developer experience is unmatched by anything else we
                  evaluated."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Maya Thompson" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6d87d18-41f2-4c59-9e4e-3805a4e595d1_320w.jpg"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Maya Thompson
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Head of DevOps
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '4.1s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "Finally, an event router that treats security and compliance
                  as first-class citizens instead of afterthoughts. Essential
                  for Fintech."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Thomas Weber" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b202409f-816e-4451-8ac9-bd0b04439d1b_320w.webp"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Thomas Weber
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Principal Architect
                  </p>
</div>
</div>
</div>
<div className="testimonial-card w-[320px] md:w-[420px] shrink-0 border border-emerald-900/30 bg-[#050a06]/80 backdrop-blur-xl p-8 transition-all duration-500 rounded-2xl relative flex flex-col justify-between group/card" style={{-Delay: '5.3s'}}>
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
<div className="relative z-10 flex-grow">
<div className="mb-6 flex gap-1 opacity-80">
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-emerald-400 text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-base font-thin text-emerald-50/80 leading-relaxed mb-8">
                  "TrueNorth's telemetry streams give us insights into our
                  microservices that we didn't even realize we were missing.
                  Absolutely vital."
                </p>
</div>
<div className="flex items-center gap-4 relative z-10 mt-auto">
<img alt="Nina Desai" className="w-11 h-11 rounded-full border border-emerald-500/20 object-cover grayscale opacity-60 group-hover/card:grayscale-0 group-hover/card:opacity-100 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b2a2db8a-0a4f-418c-8c03-a56eb9ab6ae0_320w.jpg"/>
<div>
<h4 className="text-sm font-normal tracking-tight text-white">
                    Nina Desai
                  </h4>
<p className="text-xs font-thin text-emerald-50/50">
                    Platform Architect
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 w-full max-w-6xl mb-32 relative" id="pricing">
<style>
          @keyframes pricingPulse {
            0%, 100% {
              opacity: 0.28;
              transform: scaleY(0.92);
            }
            50% {
              opacity: 0.9;
              transform: scaleY(1.08);
            }
          }

          @keyframes pricingDotPulse {
            0%, 100% {
              opacity: 0.35;
              transform: translate(-50%, -50%) scale(0.9);
            }
            50% {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1.12);
            }
          }

          @keyframes pricingLineFlow {
            0% {
              transform: translateX(-18px);
              opacity: 0.18;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              transform: translateX(18px);
              opacity: 0.18;
            }
          }

          .pricing-schema-bars .bar {
            transform-origin: bottom;
            animation: pricingPulse 2.8s ease-in-out infinite;
          }

          .pricing-schema-bars .bar:nth-child(1) { animation-delay: 0s; }
          .pricing-schema-bars .bar:nth-child(2) { animation-delay: 0.18s; }
          .pricing-schema-bars .bar:nth-child(3) { animation-delay: 0.36s; }
          .pricing-schema-bars .bar:nth-child(4) { animation-delay: 0.54s; }
          .pricing-schema-bars .bar:nth-child(5) { animation-delay: 0.72s; }
          .pricing-schema-bars .bar:nth-child(6) { animation-delay: 0.9s; }
          .pricing-schema-bars .bar:nth-child(7) { animation-delay: 1.08s; }
          .pricing-schema-bars .bar:nth-child(8) { animation-delay: 1.26s; }

          .pricing-schema-network .node {
            animation: pricingDotPulse 2.6s ease-in-out infinite;
          }

          .pricing-schema-network .node:nth-child(2) { animation-delay: 0.25s; }
          .pricing-schema-network .node:nth-child(3) { animation-delay: 0.5s; }

          .pricing-schema-network .flow {
            animation: pricingLineFlow 3s ease-in-out infinite;
          }
        </style>

<div className="absolute inset-0 pointer-events-none flex justify-center z-0">
<div className="w-full max-w-lg h-full bg-emerald-500/[0.02] blur-[100px] rounded-full"></div>
</div>
<div className="text-center mb-20 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/[0.02] mb-6 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
<span className="text-xs font-mono tracking-widest text-emerald-400 uppercase">
              Resource Allocation
            </span>
</div>
<h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-6">
            Simple, transparent pricing
          </h2>
<p className="text-lg font-thin text-emerald-50/50 max-w-xl mx-auto leading-relaxed">
            Start small, scale confidently, and move to enterprise-grade
            throughput when your event traffic grows.
          </p>
</div>
<div className="relative w-full max-w-5xl mx-auto z-10">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 items-stretch">

<div className="group flex flex-col h-full bg-[#030604]/90 border border-emerald-900/30 backdrop-blur-xl p-8 pt-16 relative transition-all duration-500 hover:border-emerald-500/30 rounded-sm">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#020503] border border-emerald-900/50 rounded-full flex items-center justify-center z-10 group-hover:border-emerald-500/30 transition-colors duration-500">
<div className="relative flex items-center justify-center">
<div className="absolute w-8 h-8 bg-emerald-500/10 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
<div className="w-2.5 h-2.5 bg-emerald-400/80 rounded-full group-hover:shadow-[0_0_10px_rgba(52,211,153,0.45)] transition-shadow duration-500"></div>
</div>
</div>
<h3 className="font-mono text-emerald-400/60 text-[10px] tracking-[0.2em] uppercase text-center mb-6">
                Prototype_Node
              </h3>
<div className="text-center mb-8">
<span className="text-5xl font-light tracking-tight text-white">
                  $0
                </span>
<span className="text-sm font-thin text-emerald-50/40 ml-1">
                  /mo
                </span>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent mb-8"></div>
<div className="space-y-3 mb-8">
<div className="flex justify-between items-end border-b border-white/[0.02] pb-2">
<span className="text-xs text-emerald-50/40 font-thin">
                    Capacity
                  </span>
<span className="text-sm text-emerald-200/80 font-mono">
                    10K/mo
                  </span>
</div>
<div className="flex justify-between items-end border-b border-white/[0.02] pb-2">
<span className="text-xs text-emerald-50/40 font-thin">
                    Retention
                  </span>
<span className="text-sm text-emerald-200/80 font-mono">
                    3 Days
                  </span>
</div>
</div>
<p className="text-sm font-thin text-emerald-50/60 mb-6 flex-1">
                Perfect for prototypes and side projects.
              </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-500/80 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm font-thin text-emerald-50/80">
                    10,000 events / month
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-500/80 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm font-thin text-emerald-50/80">
                    3 days log retention
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-500/80 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm font-thin text-emerald-50/80">
                    Standard retries
                  </span>
</li>
</ul>

<div className="pricing-schema-bars flex items-end gap-[2px] h-6 mb-6 opacity-35 px-2">
<div className="bar flex-1 bg-emerald-500/40" style={{height: '10%'}}></div>
<div className="bar flex-1 bg-emerald-500/40" style={{height: '25%'}}></div>
<div className="bar flex-1 bg-emerald-500/40" style={{height: '15%'}}></div>
<div className="bar flex-1 bg-emerald-500/40" style={{height: '40%'}}></div>
<div className="bar flex-1 bg-emerald-500/40" style={{height: '20%'}}></div>
<div className="bar flex-1 bg-emerald-500/40" style={{height: '35%'}}></div>
<div className="bar flex-1 bg-emerald-500/40" style={{height: '10%'}}></div>
<div className="bar flex-1 bg-emerald-500/40" style={{height: '20%'}}></div>
</div>
<button className="w-full py-3 border border-emerald-900/40 text-emerald-50/60 text-sm font-light hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-300 transition-all duration-300 rounded-sm">
                Initialize Hobby
              </button>
</div>

<div className="group flex flex-col h-full bg-gradient-to-b from-[#050a06] to-[#0a170e] border border-emerald-500/30 backdrop-blur-xl p-8 pt-16 relative transition-all duration-500 rounded-sm z-20">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#020503] border border-emerald-400/40 rounded-full flex items-center justify-center z-10">
<div className="relative w-8 h-8" style={{animation: 'spin 8s linear infinite'}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.65)]"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.65)]"></div>
<div className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.65)]"></div>
<svg className="absolute inset-0 w-full h-full text-emerald-400/30" viewbox="0 0 32 32">
<polygon fill="none" points="16,2 4,30 28,30" stroke="currentColor" strokeWidth="1"></polygon>
</svg>
</div>
</div>
<h3 className="font-mono text-emerald-400 text-[10px] tracking-[0.2em] uppercase text-center mb-6">
                Production_Node
              </h3>
<div className="text-center mb-8">
<span className="text-6xl font-light tracking-tight text-white">
                  $49
                </span>
<span className="text-sm font-thin text-emerald-50/60 ml-1">
                  /mo
                </span>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent mb-8"></div>
<div className="space-y-3 mb-8">
<div className="flex justify-between items-end border-b border-white/[0.05] pb-2">
<span className="text-xs text-emerald-50/50 font-thin">
                    Capacity
                  </span>
<span className="text-sm text-emerald-400 font-mono">1M/mo</span>
</div>
<div className="flex justify-between items-end border-b border-white/[0.05] pb-2">
<span className="text-xs text-emerald-50/50 font-thin">
                    Retention
                  </span>
<span className="text-sm text-emerald-400 font-mono">
                    30 Days
                  </span>
</div>
</div>
<p className="text-sm font-thin text-emerald-50/70 mb-6 flex-1">
                Production-ready routing and retention.
              </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm font-thin text-white">
                    1,000,000 events / month
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm font-thin text-white">
                    30 days log retention
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm font-thin text-white">
                    Custom retry schedules
                  </span>
</li>
</ul>

<div className="pricing-schema-bars flex items-end gap-[2px] h-6 mb-6 opacity-50 px-2">
<div className="bar flex-1 bg-emerald-400/55" style={{height: '30%'}}></div>
<div className="bar flex-1 bg-emerald-400/55" style={{height: '55%'}}></div>
<div className="bar flex-1 bg-emerald-400/75" style={{height: '85%'}}></div>
<div className="bar flex-1 bg-emerald-400/55" style={{height: '40%'}}></div>
<div className="bar flex-1 bg-emerald-400/90" style={{height: '100%'}}></div>
<div className="bar flex-1 bg-emerald-400/55" style={{height: '70%'}}></div>
<div className="bar flex-1 bg-emerald-400/55" style={{height: '50%'}}></div>
</div>
<button className="w-full py-3 bg-emerald-500/10 border border-emerald-400/40 text-emerald-400 text-sm font-light hover:bg-emerald-500/15 transition-all duration-300 rounded-sm">
                Deploy Pro Node
              </button>
</div>

<div className="group flex flex-col h-full bg-[#030604]/90 border border-emerald-900/30 backdrop-blur-xl p-8 pt-16 relative transition-all duration-500 hover:border-emerald-500/30 rounded-sm">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#020503] border border-emerald-900/50 rounded-full flex items-center justify-center z-10 group-hover:border-emerald-500/30 transition-colors duration-500">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute inset-2 border-2 border-dashed border-emerald-500/30 rounded-full" style={{animation: 'spin 10s linear infinite'}}></div>
<div className="absolute inset-0 border border-emerald-500/20 rounded-full" style={{animation: 'spin 6s linear infinite reverse'}}>
<div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-x-1/2 translate-y-1/2"></div>
<div className="absolute top-1/2 left-0 w-1.5 h-1.5 bg-emerald-400 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute top-1/2 right-0 w-1.5 h-1.5 bg-emerald-400 rounded-full translate-x-1/2 -translate-y-1/2"></div>
</div>
<div className="w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse"></div>
</div>
</div>
<h3 className="font-mono text-emerald-400/60 text-[10px] tracking-[0.2em] uppercase text-center mb-6">
                Enterprise_Cluster
              </h3>
<div className="text-center mb-8">
<span className="text-4xl font-light tracking-tight text-white">
                  Custom
                </span>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-900/40 to-transparent mb-8"></div>
<div className="space-y-3 mb-8">
<div className="flex justify-between items-end border-b border-white/[0.02] pb-2">
<span className="text-xs text-emerald-50/40 font-thin">
                    Capacity
                  </span>
<span className="text-sm text-white font-mono flex items-center gap-1">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z"></path>
</svg>
                    Unlimited
                  </span>
</div>
<div className="flex justify-between items-end border-b border-white/[0.02] pb-2">
<span className="text-xs text-emerald-50/40 font-thin">
                    Retention
                  </span>
<span className="text-sm text-white font-mono">S3 Sync</span>
</div>
</div>
<p className="text-sm font-thin text-emerald-50/60 mb-6 flex-1">
                Dedicated infrastructure for massive throughput.
              </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-500/80 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm font-thin text-emerald-50/80">
                    Unlimited events
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-500/80 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm font-thin text-emerald-50/80">
                    Infinite retention (S3 sync)
                  </span>
</li>
<li className="flex items-start gap-3">
<svg className="w-4 h-4 text-emerald-500/80 mt-0.5 shrink-0" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="text-sm font-thin text-emerald-50/80">
                    Dedicated IP pools
                  </span>
</li>
</ul>

<div className="pricing-schema-network relative h-6 mb-6 opacity-35">
<div className="absolute inset-y-1/2 left-0 right-0 h-px bg-emerald-500/15"></div>
<div className="flow absolute inset-y-1/2 left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-emerald-400/35 to-transparent"></div>
<div className="node absolute top-1/2 left-[20%] w-2 h-2 bg-emerald-400/75 rounded-full"></div>
<div className="node absolute top-1/2 left-[50%] w-2 h-2 bg-emerald-400/75 rounded-full"></div>
<div className="node absolute top-1/2 left-[80%] w-2 h-2 bg-emerald-400/75 rounded-full"></div>
</div>
<button className="w-full py-3 border border-emerald-900/40 text-emerald-50/60 text-sm font-light hover:bg-emerald-500/10 hover:border-emerald-500/40 hover:text-emerald-300 transition-all duration-300 rounded-sm">
                Contact Sales
              </button>
</div>
</div>
</div>
</section>

<section className="flex flex-col sm:py-32 overflow-hidden text-center bg-[#030303] w-full max-w-6xl border-[#0f2e20] border pt-24 pr-6 pb-24 pl-6 relative shadow-2xl items-center" style={{boxShadow: '0 0 50px -12px rgba(4, 120, 87, 0.1)'}}>

<div className="absolute w-1.5 h-1.5 border border-[#1a4a35] bg-black" style={{top: '-1px', left: '-1px'}}></div>
<div className="absolute w-1.5 h-1.5 border border-[#1a4a35] bg-black" style={{top: '-1px', right: '-1px'}}></div>
<div className="absolute w-1.5 h-1.5 border border-[#1a4a35] bg-black" style={{bottom: '-1px', left: '-1px'}}></div>
<div className="absolute w-1.5 h-1.5 border border-[#1a4a35] bg-black" style={{bottom: '-1px', right: '-1px'}}></div>

<div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen" id="cta-canvas-container"></div>

<div className="absolute inset-0 z-10 pointer-events-none" style={{background: 'radial-gradient(circle at center, transparent 30%, #030303 100%)'}}></div>

<div className="relative z-20 flex flex-col items-center">

<div className="mb-8 flex items-center justify-center w-14 h-14 rounded-xl border border-[#064e3b] bg-[#022c22]/40 text-[#10b981] shadow-[inset_0_0_20px_rgba(16,185,129,0.05)] backdrop-blur-md">
<iconify-icon height="26" icon="solar:rocket-linear" width="26"></iconify-icon>
</div>

<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white mb-5 max-w-2xl leading-tight">
      Ready to route your events?
    </h2>

<p className="text-base sm:text-lg text-[#888888] font-light max-w-xl mx-auto mb-10 leading-relaxed">
      Join thousands of developers building scalable, resilient architectures with TrueNorth. Start building for
      free today.
    </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">

<a className="w-full sm:w-auto px-6 py-3 rounded bg-black text-[#10b981] text-sm font-medium border border-[#064e3b] hover:bg-[#022c22] hover:border-[#047857] transition-all flex items-center justify-center gap-2" href="/sign-up" style={{boxShadow: '0 0 20px -5px rgba(16, 185, 129, 0.2)'}}>

        Start Building Free
        <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<a className="w-full sm:w-auto px-6 py-3 rounded bg-transparent text-[#a1a1aa] text-sm font-medium border border-[#27272a] hover:text-white hover:border-[#3f3f46] hover:bg-white/[0.02] transition-colors" href="mailto:truenorth@hotmail.com">

        Contact Sales

      </a>
</div>
</div>




</section>

<footer className="w-full max-w-6xl relative z-10 pt-16 pb-8 border-t border-emerald-900/30 mt-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-2">
<a className="flex items-center gap-2 text-emerald-400 mb-6 w-max group" href="#">
<svg className="lucide lucide-hexagon w-6 h-6 group-hover:drop-shadow-[0_0_12px_rgba(52,211,153,0.4)] transition-all duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="text-lg font-normal text-white tracking-tight">
                TrueNorth
              </span>
</a>
<p className="text-sm font-thin text-emerald-50/50 max-w-xs leading-relaxed mb-8">
              Precision event routing, transformation, and delivery for modern
              engineering teams.
            </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-emerald-900/50 flex items-center justify-center text-emerald-50/50 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300" href="#">
<iconify-icon className="text-sm" icon="ri:twitter-x-fill"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-emerald-900/50 flex items-center justify-center text-emerald-50/50 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300" href="#">
<iconify-icon className="text-sm" icon="ri:github-fill"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-emerald-900/50 flex items-center justify-center text-emerald-50/50 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300" href="#">
<iconify-icon className="text-sm" icon="ri:linkedin-fill"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-emerald-900/50 flex items-center justify-center text-emerald-50/50 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all duration-300" href="#">
<iconify-icon className="text-sm" icon="ri:discord-fill"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="text-sm font-normal text-white mb-6 tracking-wide">
              Product
            </h3>
<ul className="space-y-4 text-sm font-thin text-emerald-50/60">
<li>
<a className="hover:text-emerald-400 transition-colors duration-300" href="#">
                  Event Router
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors duration-300" href="#">
                  Transformations
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors duration-300" href="#">
                  Observability
                </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-normal text-white mb-6 tracking-wide">
              Resources
            </h3>
<ul className="space-y-4 text-sm font-thin text-emerald-50/60">
<li>
<a className="hover:text-emerald-400 transition-colors duration-300" href="#">
                  Documentation
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors duration-300" href="#">
                  API Reference
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors duration-300" href="#">
                  SDKs
                </a>
</li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-normal text-white mb-6 tracking-wide">
              Company
            </h3>
<ul className="space-y-4 text-sm font-thin text-emerald-50/60">
<li>
<a className="hover:text-emerald-400 transition-colors duration-300" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors duration-300" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-emerald-400 transition-colors duration-300" href="#">
                  Customers
                </a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-emerald-900/30 text-xs text-emerald-50/40 font-thin gap-4">
<p>© 2024 TrueNorth Inc. All rights reserved.</p>
<div className="flex flex-wrap justify-center items-center gap-6">
<a className="hover:text-emerald-400 transition-colors duration-300" href="#">
              Privacy Policy
            </a>
<a className="hover:text-emerald-400 transition-colors duration-300" href="#">
              Terms of Service
            </a>
<a className="hover:text-emerald-400 transition-colors duration-300 flex items-center gap-2" href="#">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse"></span>
              All Systems Operational
            </a>
</div>
</div>
</footer>
</div>





    </>
  );
}
