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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        (function() {
              const mobileMenuButton = document.getElementById('mobile-menu-button');
              const mobileCloseButton = document.getElementById('mobile-close-button');
              const mobileMenu = document.getElementById('mobile-menu');
              const menuIcon = document.getElementById('menu-icon');
              const closeIcon = document.getElementById('close-icon');
              const menuText = document.getElementById('menu-text');
              let isMenuOpen = false;
      
              function toggleMenu() {
                isMenuOpen = !isMenuOpen;
                
                if (isMenuOpen) {
                  // Open menu
                  mobileMenu.classList.remove('opacity-0', 'invisible');
                  mobileMenu.classList.add('opacity-100', 'visible');
                  menuIcon.classList.add('hidden');
                  closeIcon.classList.remove('hidden');
                  menuText.textContent = 'Close';
                  document.body.style.overflow = 'hidden';
                } else {
                  // Close menu
                  mobileMenu.classList.remove('opacity-100', 'visible');
                  mobileMenu.classList.add('opacity-0', 'invisible');
                  menuIcon.classList.remove('hidden');
                  closeIcon.classList.add('hidden');
                  menuText.textContent = 'Menu';
                  document.body.style.overflow = '';
                }
              }
      
              // Toggle menu on button click
              mobileMenuButton.addEventListener('click', toggleMenu);
      
              // Close menu on close button click
              mobileCloseButton.addEventListener('click', toggleMenu);
      
              // Close menu when clicking on links
              const mobileMenuLinks = mobileMenu.querySelectorAll('a');
              mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                  if (isMenuOpen) {
                    toggleMenu();
                  }
                });
              });
      
              // Close menu on escape key
              document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && isMenuOpen) {
                  toggleMenu();
                }
              });
      
              // Close menu when clicking outside (on the overlay)
              mobileMenu.addEventListener('click', (e) => {
                if (e.target === mobileMenu && isMenuOpen) {
                  toggleMenu();
                }
              });
            })();
      


    (function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const typingElements = entry.target.querySelectorAll('.typing-text');
            
            typingElements.forEach((element, index) => {
              const text = element.getAttribute('data-text');
              const delay = parseInt(element.getAttribute('data-delay')) || 0;
              const typedTextElement = element.querySelector('.typed-text');
              const speed = 100;
              
              typedTextElement.textContent = '';
              
              setTimeout(() => {
                let charIndex = 0;
                
                const typeChar = () => {
                  if (charIndex < text.length) {
                    typedTextElement.textContent += text.charAt(charIndex);
                    charIndex++;
                    setTimeout(typeChar, speed);
                  }
                };
                
                typeChar();
              }, delay);
            });
            
            observer.unobserve(entry.target);
          }
        });
      }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
      });
      
      const h1Element = document.querySelector('[data-element-id="aura-emgazc3ck"]');
      if (h1Element) {
        observer.observe(h1Element);
      }
    })();
  


    (function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const words = entry.target.querySelectorAll('.word-animate');
            
            words.forEach((word, index) => {
              setTimeout(() => {
                word.style.opacity = '1';
              }, index * 100);
            });
            
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.3,
        rootMargin: '0px 0px -10% 0px'
      });

      const headline = document.getElementById('animated-headline');
      if (headline) {
        observer.observe(headline);
      }
    })();
  


    (function(){
      const wrap = document.getElementById('feature-orbit');
      if (!wrap) return;
      const nodes = Array.from(wrap.querySelectorAll('[data-orbit-node]'));

      function layout(t = 0){
        const w = wrap.clientWidth || 800;
        const h = wrap.clientHeight || 240;
        const cx = w / 2;
        const cy = h * 0.80;
        const rx = Math.min(320, Math.max(180, w * 0.32));
        const ry = Math.min(140, Math.max(90, h * 0.40));
        const step = Math.PI / (nodes.length - 1);
        nodes.forEach((el, i) => {
          const a = -Math.PI - 0.15 + i * step + t;
          const x = cx + rx * Math.cos(a);
          const y = cy + ry * Math.sin(a);
          const depth = Math.sin(a);
          const scale = 0.9 + (depth + 1) * 0.08;
          
          let opacity;
          if (depth < -0.7) {
            opacity = 0;
          } else if (depth < 0) {
            opacity = (depth + 0.7) / 0.7 * 0.5;
          } else {
            opacity = 0.5 + depth * 0.5;
          }
          
          let blur;
          if (depth < -0.5) {
            blur = 8 + Math.abs(depth) * 8;
          } else if (depth < 0) {
            blur = 2 + Math.abs(depth) * 6;
          } else {
            blur = 0;
          }

          el.style.left = x + 'px';
          el.style.top = y + 'px';
          el.style.transform = 'translate(-50%,-50%) rotate(' + (Math.cos(a) * 8) + 'deg) scale(' + scale + ')';
          el.style.opacity = opacity.toFixed(3);
          el.style.zIndex = (100 + Math.round(depth * 50)).toString();
          el.style.filter = blur > 0 ? 'blur(' + blur.toFixed(1) + 'px)' : 'none';
        });
      }

      let rafId, start = performance.now();
      function animate(now){
        const elapsed = now - start;
        const t = (elapsed / 8000) % (Math.PI * 2);
        layout(t);
        rafId = requestAnimationFrame(animate);
      }

      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting){
            start = performance.now();
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(animate);
          } else {
            cancelAnimationFrame(rafId);
          }
        });
      }, { threshold: 0.2 });

      layout(0);
      io.observe(wrap);
      window.addEventListener('resize', () => layout());
    })();
    


    // Orbit animation for portrait tiles with enhanced blur and fade at back
    (function(){
      const wrap = document.getElementById('feature-orbit');
      if (!wrap) return;
      const nodes = Array.from(wrap.querySelectorAll('[data-orbit-node]'));

      function layout(t = 0){
        const w = wrap.clientWidth || 800;
        const h = wrap.clientHeight || 240;
        const cx = w / 2;
        const cy = h * 0.80;
        const rx = Math.min(320, Math.max(180, w * 0.32));
        const ry = Math.min(140, Math.max(90, h * 0.40));
        const step = Math.PI / (nodes.length - 1);
        nodes.forEach((el, i) => {
          const a = -Math.PI - 0.15 + i * step + t;
          const x = cx + rx * Math.cos(a);
          const y = cy + ry * Math.sin(a);
          const depth = Math.sin(a);
          const scale = 0.9 + (depth + 1) * 0.08;
          
          // Enhanced opacity calculation - images at the back become nearly invisible
          let opacity;
          if (depth < -0.7) {
            opacity = 0; // Fully invisible when far at back
          } else if (depth < 0) {
            // Gradual fade from invisible to visible as it comes forward
            opacity = (depth + 0.7) / 0.7 * 0.5;
          } else {
            // Front-facing images remain visible
            opacity = 0.5 + depth * 0.5;
          }
          
          // Enhanced blur calculation - stronger blur at the back
          let blur;
          if (depth < -0.5) {
            blur = 8 + Math.abs(depth) * 8; // Heavy blur at back (8-16px)
          } else if (depth < 0) {
            blur = 2 + Math.abs(depth) * 6; // Medium blur (2-8px)
          } else {
            blur = 0; // No blur at front
          }

          el.style.left = x + 'px';
          el.style.top = y + 'px';
          el.style.transform = 'translate(-50%,-50%) rotate(' + (Math.cos(a) * 8) + 'deg) scale(' + scale + ')';
          el.style.opacity = opacity.toFixed(3);
          el.style.zIndex = (100 + Math.round(depth * 50)).toString();
          el.style.filter = blur > 0 ? 'blur(' + blur.toFixed(1) + 'px)' : 'none';
        });
      }

      let rafId, start = performance.now();
      function animate(now){
        const elapsed = now - start;
        const t = (elapsed / 8000) % (Math.PI * 2);
        layout(t);
        rafId = requestAnimationFrame(animate);
      }

      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting){
            start = performance.now();
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(animate);
          } else {
            cancelAnimationFrame(rafId);
          }
        });
      }, { threshold: 0.2 });

      layout(0);
      io.observe(wrap);
      window.addEventListener('resize', () => layout());
    })();

    // Headline fade
    (function(){
      const headline = document.getElementById('animated-headline');
      if (!headline) return;
      const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            headline.style.opacity = '1';
            o.disconnect();
          }
        });
      }, { threshold: 0.3 });
      headline.style.opacity = '0.98';
      obs.observe(headline);
    })();
    


    // Orbit animation for portrait tiles
    (function(){
      const wrap = document.getElementById('feature-orbit');
      if (!wrap) return;
      const nodes = Array.from(wrap.querySelectorAll('[data-orbit-node]'));

      function layout(t = 0){
        const w = wrap.clientWidth || 800;
        const h = wrap.clientHeight || 240;
        const cx = w / 2;
        const cy = h * 0.80; // place arc lower to appear above headline
        const rx = Math.min(320, Math.max(180, w * 0.32));
        const ry = Math.min(140, Math.max(90, h * 0.40));
        const step = Math.PI / (nodes.length - 1); // semi-circle
        nodes.forEach((el, i) => {
          const a = -Math.PI - 0.15 + i * step + t; // slight offset
          // Only display near the top arc; fade others
          const x = cx + rx * Math.cos(a);
          const y = cy + ry * Math.sin(a);
          const depth = Math.sin(a); // -1..1
          const scale = 0.9 + (depth + 1) * 0.08; // 0.9..1.06
          const opacity = 0.25 + Math.max(0, depth) * 0.75;

          el.style.left = x + 'px';
          el.style.top = y + 'px';
          el.style.transform = 'translate(-50%,-50%) rotate(' + (Math.cos(a) * 8) + 'deg) scale(' + scale + ')';
          el.style.opacity = opacity.toFixed(2);
          el.style.zIndex = (100 + Math.round(depth * 50)).toString();
          el.style.filter = depth < 0 ? 'blur(0.5px)' : 'none';
        });
      }

      let rafId, start = performance.now();
      function animate(now){
        const elapsed = now - start;
        // Slow, smooth drift
        const t = (elapsed / 8000) % (Math.PI * 2);
        layout(t);
        rafId = requestAnimationFrame(animate);
      }

      // Observe visibility to pause when offscreen
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting){
            start = performance.now();
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(animate);
          } else {
            cancelAnimationFrame(rafId);
          }
        });
      }, { threshold: 0.2 });

      layout(0);
      io.observe(wrap);
      window.addEventListener('resize', () => layout());
    })();

    // Headline fade (kept minimal and conflict-safe)
    (function(){
      const headline = document.getElementById('animated-headline');
      if (!headline) return;
      const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            headline.style.opacity = '1';
            o.disconnect();
          }
        });
      }, { threshold: 0.3 });
      headline.style.opacity = '0.98';
      obs.observe(headline);
    })();
  


    // Orbit animation for portrait tiles
      (function(){
        const wrap = document.getElementById('feature-orbit');
        if (!wrap) return;
        const nodes = Array.from(wrap.querySelectorAll('[data-orbit-node]'));

        function layout(t = 0){
          const w = wrap.clientWidth || 800;
          const h = wrap.clientHeight || 240;
          const cx = w / 2;
          const cy = h * 0.80; // place arc lower to appear above headline
          const rx = Math.min(320, Math.max(180, w * 0.32));
          const ry = Math.min(140, Math.max(90, h * 0.40));
          const step = Math.PI / (nodes.length - 1); // semi-circle
          nodes.forEach((el, i) => {
            const a = -Math.PI - 0.15 + i * step + t; // slight offset
            // Only display near the top arc; fade others
            const x = cx + rx * Math.cos(a);
            const y = cy + ry * Math.sin(a);
            const depth = Math.sin(a); // -1..1
            const scale = 0.9 + (depth + 1) * 0.08; // 0.9..1.06
            const opacity = 0.25 + Math.max(0, depth) * 0.75;

            el.style.left = x + 'px';
            el.style.top = y + 'px';
            el.style.transform = 'translate(-50%,-50%) rotate(' + (Math.cos(a) * 8) + 'deg) scale(' + scale + ')';
            el.style.opacity = opacity.toFixed(2);
            el.style.zIndex = (100 + Math.round(depth * 50)).toString();
            el.style.filter = depth < 0 ? 'blur(0.5px)' : 'none';
          });
        }

        let rafId, start = performance.now();
        function animate(now){
          const elapsed = now - start;
          // Slow, smooth drift
          const t = (elapsed / 8000) % (Math.PI * 2);
          layout(t);
          rafId = requestAnimationFrame(animate);
        }

        // Observe visibility to pause when offscreen
        const io = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting){
              start = performance.now();
              cancelAnimationFrame(rafId);
              rafId = requestAnimationFrame(animate);
            } else {
              cancelAnimationFrame(rafId);
            }
          });
        }, { threshold: 0.2 });

        layout(0);
        io.observe(wrap);
        window.addEventListener('resize', () => layout());
      })();

      // Headline fade (kept minimal and conflict-safe)
      (function(){
        const headline = document.getElementById('animated-headline');
        if (!headline) return;
        const obs = new IntersectionObserver((entries, o) => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              headline.style.opacity = '1';
              o.disconnect();
            }
          });
        }, { threshold: 0.3 });
        headline.style.opacity = '0.98';
        obs.observe(headline);
      })();
  


    // Orbit animation for portrait tiles
    (function(){
      const wrap = document.getElementById('feature-orbit');
      if (!wrap) return;
      const nodes = Array.from(wrap.querySelectorAll('[data-orbit-node]'));

      function layout(t = 0){
        const w = wrap.clientWidth || 800;
        const h = wrap.clientHeight || 240;
        const cx = w / 2;
        const cy = h * 0.80; // place arc lower to appear above headline
        const rx = Math.min(320, Math.max(180, w * 0.32));
        const ry = Math.min(140, Math.max(90, h * 0.40));
        const step = Math.PI / (nodes.length - 1); // semi-circle
        nodes.forEach((el, i) => {
          const a = -Math.PI - 0.15 + i * step + t; // slight offset
          // Only display near the top arc; fade others
          const x = cx + rx * Math.cos(a);
          const y = cy + ry * Math.sin(a);
          const depth = Math.sin(a); // -1..1
          const scale = 0.9 + (depth + 1) * 0.08; // 0.9..1.06
          const opacity = 0.25 + Math.max(0, depth) * 0.75;

          el.style.left = x + 'px';
          el.style.top = y + 'px';
          el.style.transform = 'translate(-50%,-50%) rotate(' + (Math.cos(a) * 8) + 'deg) scale(' + scale + ')';
          el.style.opacity = opacity.toFixed(2);
          el.style.zIndex = (100 + Math.round(depth * 50)).toString();
          el.style.filter = depth < 0 ? 'blur(0.5px)' : 'none';
        });
      }

      let rafId, start = performance.now();
      function animate(now){
        const elapsed = now - start;
        // Slow, smooth drift
        const t = (elapsed / 8000) % (Math.PI * 2);
        layout(t);
        rafId = requestAnimationFrame(animate);
      }

      // Observe visibility to pause when offscreen
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting){
            start = performance.now();
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(animate);
          } else {
            cancelAnimationFrame(rafId);
          }
        });
      }, { threshold: 0.2 });

      layout(0);
      io.observe(wrap);
      window.addEventListener('resize', () => layout());
    })();

    // Headline fade (kept minimal and conflict-safe)
    (function(){
      const headline = document.getElementById('animated-headline');
      if (!headline) return;
      const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            headline.style.opacity = '1';
            o.disconnect();
          }
        });
      }, { threshold: 0.3 });
      headline.style.opacity = '0.98';
      obs.observe(headline);
    })();
  


    // Orbit animation for portrait tiles
      (function(){
        const wrap = document.getElementById('feature-orbit');
        if (!wrap) return;
        const nodes = Array.from(wrap.querySelectorAll('[data-orbit-node]'));

        function layout(t = 0){
          const w = wrap.clientWidth || 800;
          const h = wrap.clientHeight || 240;
          const cx = w / 2;
          const cy = h * 0.80; // place arc lower to appear above headline
          const rx = Math.min(320, Math.max(180, w * 0.32));
          const ry = Math.min(140, Math.max(90, h * 0.40));
          const step = Math.PI / (nodes.length - 1); // semi-circle
          nodes.forEach((el, i) => {
            const a = -Math.PI - 0.15 + i * step + t; // slight offset
            // Only display near the top arc; fade others
            const x = cx + rx * Math.cos(a);
            const y = cy + ry * Math.sin(a);
            const depth = Math.sin(a); // -1..1
            const scale = 0.9 + (depth + 1) * 0.08; // 0.9..1.06
            const opacity = 0.25 + Math.max(0, depth) * 0.75;

            el.style.left = x + 'px';
            el.style.top = y + 'px';
            el.style.transform = 'translate(-50%,-50%) rotate(' + (Math.cos(a) * 8) + 'deg) scale(' + scale + ')';
            el.style.opacity = opacity.toFixed(2);
            el.style.zIndex = (100 + Math.round(depth * 50)).toString();
            el.style.filter = depth < 0 ? 'blur(0.5px)' : 'none';
          });
        }

        let rafId, start = performance.now();
        function animate(now){
          const elapsed = now - start;
          // Slow, smooth drift
          const t = (elapsed / 8000) % (Math.PI * 2);
          layout(t);
          rafId = requestAnimationFrame(animate);
        }

        // Observe visibility to pause when offscreen
        const io = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting){
              start = performance.now();
              cancelAnimationFrame(rafId);
              rafId = requestAnimationFrame(animate);
            } else {
              cancelAnimationFrame(rafId);
            }
          });
        }, { threshold: 0.2 });

        layout(0);
        io.observe(wrap);
        window.addEventListener('resize', () => layout());
      })();

      // Headline fade (kept minimal and conflict-safe)
      (function(){
        const headline = document.getElementById('animated-headline');
        if (!headline) return;
        const obs = new IntersectionObserver((entries, o) => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              headline.style.opacity = '1';
              o.disconnect();
            }
          });
        }, { threshold: 0.3 });
        headline.style.opacity = '0.98';
        obs.observe(headline);
      })();
  


    (function() {
      const container = document.getElementById('card-orbit-container');
      if (!container) return;
      
      const cards = Array.from(container.querySelectorAll('.orbit-card'));
      const bubble1 = document.querySelector('.bubble-float-1');
      const bubble2 = document.querySelector('.bubble-float-2');
      const totalCards = cards.length;
      
      let animationTime = 0;
      const speed = 0.0008;
      
      function updateOrbit() {
        animationTime += speed;
        
        const containerWidth = container.offsetWidth;
        const containerHeight = container.offsetHeight;
        const centerX = containerWidth / 2;
        const centerY = containerHeight * 0.65;
        
        const radiusX = Math.min(containerWidth * 0.45, 400);
        const radiusY = Math.min(containerHeight * 0.35, 150);
        
        cards.forEach((card, index) => {
          const angleOffset = (index / totalCards) * Math.PI * 2;
          const angle = animationTime + angleOffset;
          
          const x = centerX + Math.cos(angle) * radiusX;
          const y = centerY + Math.sin(angle) * radiusY;
          
          const depth = Math.sin(angle);
          const scale = 0.85 + (depth + 1) * 0.15;
          const zIndex = Math.round(50 + depth * 50);
          
          const rotation = Math.cos(angle) * 12;
          
          let opacity, blur;
          if (depth < -0.5) {
            opacity = 0;
            blur = 4;
          } else if (depth < 0) {
            opacity = 0.5 + (depth + 0.5) * 1.0;
            blur = 2 + Math.abs(depth) * 2;
          } else {
            opacity = 0.5 + depth * 0.5;
            blur = 0;
          }
          
          card.style.left = x + 'px';
          card.style.top = y + 'px';
          card.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;
          card.style.opacity = opacity;
          card.style.zIndex = zIndex;
          card.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
          
          if (index === 0 && bubble1) {
            const bubbleY = Math.sin(animationTime * 2) * 10;
            bubble1.style.transform = `translateY(${bubbleY}px) rotate(-6deg)`;
          }
          
          if (index === 5 && bubble2) {
            const bubbleY = Math.sin((animationTime + 0.5) * 2) * 10;
            bubble2.style.transform = `translateY(${bubbleY}px) rotate(6deg)`;
          }
        });
        
        requestAnimationFrame(updateOrbit);
      }
      
      updateOrbit();
      
      window.addEventListener('resize', () => {});
    })();
  


      (function(){
      const wrap = document.getElementById('feature-orbit');
      if (!wrap) return;
      const nodes = Array.from(wrap.querySelectorAll('[data-orbit-node]'));

      function layout(t = 0){
        const w = wrap.clientWidth || 800;
        const h = wrap.clientHeight || 240;
        const cx = w / 2;
        const cy = h * 0.80;
        const rx = Math.min(320, Math.max(180, w * 0.32));
        const ry = Math.min(140, Math.max(90, h * 0.40));
        const step = Math.PI / (nodes.length - 1);
        nodes.forEach((el, i) => {
          const a = -Math.PI - 0.15 + i * step + t;
          const x = cx + rx * Math.cos(a);
          const y = cy + ry * Math.sin(a);
          const depth = Math.sin(a);
          const scale = 0.9 + (depth + 1) * 0.08;
          const opacity = 0.25 + Math.max(0, depth) * 0.75;

          el.style.left = x + 'px';
          el.style.top = y + 'px';
          el.style.transform = 'translate(-50%,-50%) rotate(' + (Math.cos(a) * 8) + 'deg) scale(' + scale + ')';
          el.style.opacity = opacity.toFixed(2);
          el.style.zIndex = (100 + Math.round(depth * 50)).toString();
          el.style.filter = depth < 0 ? 'blur(0.5px)' : 'none';
        });
      }

      let rafId, start = performance.now();
      function animate(now){
        const elapsed = now - start;
        const t = (elapsed / 8000) % (Math.PI * 2);
        layout(t);
        rafId = requestAnimationFrame(animate);
      }

      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting){
            start = performance.now();
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(animate);
          } else {
            cancelAnimationFrame(rafId);
          }
        });
      }, { threshold: 0.2 });

      layout(0);
      io.observe(wrap);
      window.addEventListener('resize', () => layout());
    })();

    (function(){
      const headline = document.getElementById('animated-headline');
      if (!headline) return;
      const obs = new IntersectionObserver((entries, o) => {
        entries.forEach(entry => {
          if (entry.isIntersecting){
            headline.style.opacity = '1';
            o.disconnect();
          }
        });
      }, { threshold: 0.3 });
      headline.style.opacity = '0.98';
      obs.observe(headline);
    })();
    


      (function(){
        const wrap = document.getElementById('feature-orbit');
        if (!wrap) return;
        const nodes = Array.from(wrap.querySelectorAll('[data-orbit-node]'));

        function layout(t = 0){
          const w = wrap.clientWidth || 800;
          const h = wrap.clientHeight || 240;
          const cx = w / 2;
          const cy = h * 0.80;
          const rx = Math.min(320, Math.max(180, w * 0.32));
          const ry = Math.min(140, Math.max(90, h * 0.40));
          const step = Math.PI / (nodes.length - 1);
          nodes.forEach((el, i) => {
            const a = -Math.PI - 0.15 + i * step + t;
            const x = cx + rx * Math.cos(a);
            const y = cy + ry * Math.sin(a);
            const depth = Math.sin(a);
            const scale = 0.9 + (depth + 1) * 0.08;
            const opacity = 0.25 + Math.max(0, depth) * 0.75;

            el.style.left = x + 'px';
            el.style.top = y + 'px';
            el.style.transform = 'translate(-50%,-50%) rotate(' + (Math.cos(a) * 8) + 'deg) scale(' + scale + ')';
            el.style.opacity = opacity.toFixed(2);
            el.style.zIndex = (100 + Math.round(depth * 50)).toString();
            el.style.filter = depth < 0 ? 'blur(0.5px)' : 'none';
          });
        }

        let rafId, start = performance.now();
        function animate(now){
          const elapsed = now - start;
          const t = (elapsed / 8000) % (Math.PI * 2);
          layout(t);
          rafId = requestAnimationFrame(animate);
        }

        const io = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            if (e.isIntersecting){
              start = performance.now();
              cancelAnimationFrame(rafId);
              rafId = requestAnimationFrame(animate);
            } else {
              cancelAnimationFrame(rafId);
            }
          });
        }, { threshold: 0.2 });

        layout(0);
        io.observe(wrap);
        window.addEventListener('resize', () => layout());
      })();

      (function(){
        const headline = document.getElementById('animated-headline');
        if (!headline) return;
        const obs = new IntersectionObserver((entries, o) => {
          entries.forEach(entry => {
            if (entry.isIntersecting){
              headline.style.opacity = '1';
              o.disconnect();
            }
          });
        }, { threshold: 0.3 });
        headline.style.opacity = '0.98';
        obs.observe(headline);
      })();
  


      // Lucide icons
      lucide.createIcons();

      // Mobile menu toggle
      const openBtn = document.getElementById('mobileOpen');
      const closeBtn = document.getElementById('mobileClose');
      const sheet = document.getElementById('mobileSheet');

      function toggleSheet(show) {
        if (!sheet) return;
        sheet.classList.toggle('hidden', !show);
      }

      openBtn?.addEventListener('click', () => toggleSheet(true));
      closeBtn?.addEventListener('click', () => toggleSheet(false));
      // Close on escape
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') toggleSheet(false);
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 fixed blur-2xl"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>

</div></div>

<header className="fixed top-0 inset-x-0 z-50 bg-white/5 backdrop-blur-xl">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex pt-6 pb-6 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/40a9834a-36af-4a0b-90b1-e452d0568c2e_3840w.png)] bg-cover rounded" href="/"></a>

<nav className="hidden lg:flex items-center gap-8">
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/#home">Home</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/#about">About</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/#features">Features</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/#service">Service</a>
<a className="hover:text-white/90 transition text-sm font-normal text-white/80 font-geist" href="/support">Faq</a>
<button className="inline-flex gap-2 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur gap-x-2 gap-y-2 items-center">Get in Touch</button>
</nav>

<button className="lg:hidden inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4 backdrop-blur gap-x-2 gap-y-2 items-center" id="mobile-menu-button">
<svg className="lucide lucide-menu w-[16px] h-[16px]" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x w-[16px] h-[16px]" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>
<span id="menu-text">Close</span>
</button>
</div>

<div className="lg:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-50 transition-all duration-300 ease-out" id="mobile-menu">
<div className="flex flex-col h-full pt-6 pr-6 pb-8 pl-6">

<div className="flex justify-end mb-8">
<button className="inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-sm font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-3 pb-3 pl-3 backdrop-blur" id="mobile-close-button">
<svg className="lucide lucide-x w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="m18 6-12 12"></path><path className="" d="m6 6 12 12"></path></svg>
</button>
</div>
<nav className="flex-1 sm:px-4 sm:py-4 sm:bg-black/100 max-w-full rounded-3xl pt-4 pr-4 pb-4 pl-4" data-element-id="aura-emgaz66zw">
<div className="space-y-6">
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/#home">Home</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/#about">About</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/#features">Features</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="/#service">Service</a>
<a className="block hover:text-white transition text-2xl font-normal text-white/80 font-geist" href="#support">Faq</a>
</div>
<div className="border-white/10 border-t mt-12 pt-8">
<button className="inline-flex transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 text-base font-normal text-white/90 font-geist bg-white/10 border-white/10 border rounded-full pt-3 pr-6 pb-3 pl-6 w-full backdrop-blur gap-x-2 gap-y-2 items-center justify-center">
                    Get in Touch
                  </button>
</div>
</nav>
</div>
</div>

</div>
</header>

<main className="">
<section className="overflow-visible md:pt-36 md:pb-0 pt-36 pb-0 relative" id="home">

<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex gap-3 overflow-hidden bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#000000] to-[#000000]/5 w-fit border-white/10 border rounded-full mr-auto mb-8 ml-auto pt-2.5 pr-3 pb-2.5 pl-3 relative shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<span className="inline-flex items-center gap-1 rounded-full bg-violet-600/20 px-2 py-0.5 text-[11px] font-semibold text-violet-300 ring-1 ring-inset ring-violet-500/30">

              2025
            </span>
<span className="text-xs font-medium text-white/70">Next-Gen Digital Studio</span>
</div>

<h1 className="leading-tight sm:text-6xl md:text-7xl text-5xl font-semibold tracking-tight max-w-4xl mr-auto ml-auto" data-element-id="aura-emgazc3ck">
<span className="typing-text" data-delay="0" data-text="Digital Excellence">
<span className="typed-text"></span>
</span>
<span className="block font-light text-white/60">
<span className="typing-text" data-delay="2000" data-text="Design. Build. Scale.">
<span className="typed-text"></span>
</span>
</span>
<style>
    .typing-text {
      display: inline-block;
    }
    
    .typed-text {
      opacity: 1;
    }
  </style>

</h1>

<p className="leading-relaxed text-base text-white/60 max-w-2xl mt-5 mr-auto ml-auto">Auralith transform ambitious into
    scalable digital product.
    Partner with a team that understands velocity, quality, and growth.</p>
<meta charset="utf-8" className=""/>
<title className="">Glitch Button</title>

<style className="">
    /* custom glitch animation */
    @keyframes glitch_4011 {
      0% {
        clip-path: var(--move1);
        transform: translate(0px, -10px);
      }

      10% {
        clip-path: var(--move2);
        transform: translate(-10px, 10px);
      }

      20% {
        clip-path: var(--move3);
        transform: translate(10px, 0px);
      }

      30% {
        clip-path: var(--move4);
        transform: translate(-10px, 10px);
      }

      40% {
        clip-path: var(--move5);
        transform: translate(10px, -10px);
      }

      50% {
        clip-path: var(--move6);
        transform: translate(-10px, 10px);
      }

      60% {
        clip-path: var(--move1);
        transform: translate(10px, -10px);
      }

      70% {
        clip-path: var(--move3);
        transform: translate(-10px, 10px);
      }

      80% {
        clip-path: var(--move2);
        transform: translate(10px, -10px);
      }

      90% {
        clip-path: var(--move4);
        transform: translate(-10px, 10px);
      }

      100% {
        clip-path: var(--move1);
        transform: translate(0);
      }
    }

    /* base + pseudo element */
    .glitch-btn::after {
      --move1: inset(50% 50% 50% 50%);
      --move2: inset(31% 0 40% 0);
      --move3: inset(39% 0 15% 0);
      --move4: inset(45% 0 40% 0);
      --move5: inset(45% 0 6% 0);
      --move6: inset(14% 0 61% 0);
      clip-path: var(--move1);
      content: '';
      position: absolute;
      inset: 0;
      display: block;
    }

    .glitch-btn:hover::after {
      animation: glitch_4011 1s steps(2, end);
      text-shadow: -3px -3px 0px #7D39ED, 3px 3px 0px #E94BE8;
      border: 3px solid rgb(208, 203, 255);
    }
  </style>
<button className="glitch-btn transition-all duration-300 hover:border-violet-600 hover:shadow-[0_10px_10px_-10px_rgb(87,42,192)] hover:[text-shadow:-1px_-1px_0px_#1df2f0,1px_1px_0px_#291C6C] group text-sm font-semibold text-white bg-transparent border-transparent border rounded-md mt-8 mb-8 pt-3 pr-12 pb-3 pl-12 relative">
  Let's Talk
  
  
<div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-600/30 to-violet-600/50" style={{animation: 'glowSlideDown 0.5s ease-out forwards'}}></div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-72">
<div className="absolute inset-x-0 bottom-0 h-full" style={{background: 'radial-gradient(70% 100% at 50% 100%, rgba(88, 28, 135, 0.35) 0%, rgba(24, 24, 32, 0.0) 60%)', filter: 'blur(24px)'}}></div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}></div>
<style className="">
    @keyframes glowSlideDown {
      0% {
        clip-path: inset(0 0 100% 0);
      }
      100% {
        clip-path: inset(0 0 0 0);
      }
    }
  </style>
</button>

<section className="z-10 sm:py-24 fade-in fade-in-delay-4 max-w-fit pt-8 pb-8 relative" style={{opacity: '1', transform: 'translateY(0px)'}}>
<div className="max-w-7xl mr-auto ml-auto pr-4 pl-4 sm:px-6 lg:pl-0 lg:pr-0">
<div className="text-center mb-12">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-wide">Trusted by teams at</p>
</div>

<div className="relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style="-webkit-mask-image:linear-gradient(to right, transparent, black);
                    mask-image:linear-gradient(to right, transparent, black);
                    -webkit-mask-repeat:no-repeat;
                    mask-repeat:no-repeat;
                    -webkit-mask-size:100% 100%;
                    mask-size:100% 100%;
                    background:transparent;">
</div>
<div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style="-webkit-mask-image:linear-gradient(to left, transparent, black);
                    mask-image:linear-gradient(to left, transparent, black);
                    -webkit-mask-repeat:no-repeat;
                    mask-repeat:no-repeat;
                    -webkit-mask-size:100% 100%;
                    mask-size:100% 100%;
                    background:transparent;">
</div>

<div className="relative overflow-hidden" style="
               -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
               mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
               -webkit-mask-repeat: no-repeat;
               mask-repeat: no-repeat;
               -webkit-mask-size: 100% 100%;
               mask-size: 100% 100%;
             ">

<div className="ticker-track flex gap-16 max-w-fit pt-2 pb-2 items-center">

<div className="flex gap-16 shrink-0 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>

<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>
</div>
</div>
<style>
          @keyframes ticker {
            0% {
              transform: translateX(0);
            }
        
            100% {
              transform: translateX(-100%);
            }
          }
        
          .ticker-track {
            animation: ticker 40s linear infinite;
            width: calc(200% + 16px);
          }
        
          .ticker-track:hover {
            animation-play-state: paused;
          }
        </style></div></div></section>
<div className="sm:mt-16 md:mt-24 sm:mb-16 md:mb-24 sm:px-6 text-center max-w-5xl mt-16 mr-auto mb-16 ml-auto pr-4 pl-4 relative" id="about">

<div className="flex overflow-hidden bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#000000] to-[#000000]/5 w-fit border-white/10 border rounded-full mr-auto mb-8 ml-auto pt-2.5 pr-3 pb-2.5 pl-3 relative shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm gap-x-2 gap-y-3 items-center" style={{boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 24px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}>
</div>
<div className="flex w-6 h-6 rounded-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 2px 8px rgba(124, 58, 237, 0.4)'}}>
<svg className="lucide lucide-user w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="user" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<span className="text-xs font-medium text-white tracking-wide">Our Story</span>
</div>

<h1 className="leading-tight sm:text-6xl md:text-4xl md:font-thin text-5xl font-semibold tracking-tight max-w-4xl mb-6" id="animated-headline" style={{opacity: '0.98'}}>
<span className="block">
<span className="word-animate" style={{opacity: '0.6', transition: 'opacity 0.3s ease'}}>Forged</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> by</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> innovation,</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> powered</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> by</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> intelligence,</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> and</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> driven</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> by</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> velocity,</span>
</span>
<span className="block">
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}>Auralith</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> is</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> a</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> forward-thinking</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> product</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> studio</span>
</span>
<span className="block text-white/60">
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}>engineering</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> tomorrow's</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> adaptive</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> experiences</span>
<span className="word-animate" style={{opacity: '1', transition: 'opacity 0.3s'}}> today.</span>
</span>
</h1>

<div className="mt-12">
<div className="inline-block group relative">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" style={{'--x': '199.6484375px', '--y': '12px', '--o': '0'}}>
<span className="z-10 inline-flex items-center gap-2 font-semibold relative">Learn More<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>

</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-72">
</div>
</div></section><section className="overflow-visible md:pt-20 md:pb-0 pt-20 pb-0 relative" id="features">

<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="xl:pt-24 text-center max-w-7xl mt-24 mr-auto mb-24 ml-auto pt-24 pr-6 pl-6 relative">


<div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.6) 20%, rgba(167, 139, 250, 0.8) 50%, rgba(139, 92, 246, 0.6) 80%, rgba(139, 92, 246, 0) 100%, transparent 100%)', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 16px rgba(139, 92, 246, 0.3))'}}>
</div>

<div className="absolute inset-x-0 top-0 h-32 pointer-events-none opacity-60" style={{background: 'radial-gradient(50% 100% at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 100%)'}}></div>
<div className="flex overflow-hidden bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#000000] to-[#000000]/5 w-fit border-white/10 border rounded-full mr-auto mb-8 ml-auto pt-2.5 pr-3 pb-2.5 pl-3 relative shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm gap-x-2 gap-y-3 items-center" style={{boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 24px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}>
</div>
<div className="flex w-6 h-6 rounded-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 2px 8px rgba(124, 58, 237, 0.4)'}}>
<svg className="lucide lucide-sparkles w-[14px] h-[14px]" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-xs font-medium text-white tracking-wide">Features</span>
</div>

<div className="space-y-6">


<div className="md:h-64 w-full h-56 max-w-5xl mr-auto ml-auto relative" id="feature-orbit">

<div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-[1200px] blur-2xl" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(124, 58, 237, 0.35) 0%, rgba(59, 130, 246, 0.18) 50%, rgba(0,0,0,0) 72%)', mixBlend: 'screen'}}>
</div>

<div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg" data-orbit-node="" style={{left: '195.593px', top: '220.102px', transform: 'translate(-50%, -50%) rotate(-7.91017deg) scale(0.991955)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.36', zIndex: '107', filter: 'none'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/614b6cfb-1fd2-4c28-8aba-f7b691c905fd_3840w.jpg"/>
</div>
<div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg" data-orbit-node="" style={{left: '194.937px', top: '190.957px', transform: 'translate(-50%, -50%) rotate(-7.92656deg) scale(0.969185)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.25', zIndex: '93', filter: 'blur(0.5px)'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0e8233e6-2828-4a6d-a82d-9984eb89f257_3840w.jpg"/>
</div>
<div className="md:w-20 md:h-20 overflow-hidden w-16 h-16 ring-white/10 ring-1 rounded-xl absolute shadow-lg" data-orbit-node="" style={{left: '219.968px', top: '162.933px', transform: 'translate(-50%, -50%) rotate(-7.3008deg) scale(0.947292)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.25', zIndex: '80', filter: 'blur(0.5px)'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0794dc4e-47ff-4812-91f3-3095646debe3_3840w.jpg"/>
</div>
<div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg" data-orbit-node="" style={{left: '268.658px', top: '138.301px', transform: 'translate(-50%, -50%) rotate(-6.08356deg) scale(0.928048)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.25', zIndex: '68', filter: 'blur(0.5px)'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/716d4c2c-28c6-4040-9bc5-bce9eadbf299_3840w.jpg"/>
</div>
<div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg" data-orbit-node="" style={{left: '337.061px', top: '119.056px', transform: 'translate(-50%, -50%) rotate(-4.37347deg) scale(0.913013)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.25', zIndex: '58', filter: 'blur(0.5px)'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/05195a8d-eb48-4912-b6c2-91d8ec5a7b7c_3840w.jpg"/>
</div>
<div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg" data-orbit-node="" style={{left: '419.637px', top: '106.758px', transform: 'translate(-50%, -50%) rotate(-2.30907deg) scale(0.903405)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.25', zIndex: '52', filter: 'blur(0.5px)'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/614b6cfb-1fd2-4c28-8aba-f7b691c905fd_3840w.jpg"/>
</div>
<div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg" data-orbit-node="" style={{left: '509.696px', top: '102.403px', transform: 'translate(-50%, -50%) rotate(-0.0576022deg) scale(0.900002)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.25', zIndex: '50', filter: 'blur(0.5px)'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0415ae4b-2c65-41d6-92b9-3b67dc5d66ab_3840w.jpg"/>
</div>
<div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg" data-orbit-node="" style={{left: '599.941px', top: '106.343px', transform: 'translate(-50%, -50%) rotate(2.19853deg) scale(0.90308)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.25', zIndex: '52', filter: 'blur(0.5px)'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/346c8983-c047-4169-902a-df1305819be6_3840w.jpg"/>
</div>
<div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg" data-orbit-node="" style={{left: '683.062px', top: '118.259px', transform: 'translate(-50%, -50%) rotate(4.27656deg) scale(0.91239)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.25', zIndex: '58', filter: 'blur(0.5px)'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2af3cf9a-d369-4b3a-a069-0929f336cc04_3840w.jpg"/>
</div>
<div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg" data-orbit-node="" style={{left: '752.325px', top: '137.187px', transform: 'translate(-50%, -50%) rotate(6.00812deg) scale(0.927177)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.25', zIndex: '67', filter: 'blur(0.5px)'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/adb083e8-58e1-46e8-9937-dfa98eac9c6b_3840w.jpg"/>
</div>
<div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg" data-orbit-node="" style={{left: '802.118px', top: '161.592px', transform: 'translate(-50%, -50%) rotate(7.25294deg) scale(0.946244)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.25', zIndex: '79', filter: 'blur(0.5px)'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/890b16bf-eac1-46aa-b8b5-b74ae7a0d51a_3840w.jpg"/>
</div>
<div className="absolute w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-lg" data-orbit-node="" style={{left: '828.407px', top: '189.498px', transform: 'translate(-50%, -50%) rotate(7.91017deg) scale(0.968045)', background: 'linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))', opacity: '0.25', zIndex: '93', filter: 'blur(0.5px)'}}>
<img alt="" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7dfd4bd5-b8bf-4782-b24e-a6705213b9a5_3840w.jpg"/>
</div>

</div>
<div className="xl:py-20 pt-20 pb-20 space-y-6">
<h1 className="leading-tight sm:text-6xl md:text-4xl md:font-thin text-5xl font-semibold tracking-tight max-w-4xl mx-auto mb-3" id="animated-headline">Packed with Innovation.</h1>
<p className="leading-relaxed text-base text-white/60 max-w-2xl mr-auto ml-auto">Auralith is packed with
        cutting‑edge features designed to elevate your agency or portfolio.</p>
<div className="inline-block bg-transparent rounded-full">
<style className="">
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');

          @property --gradient-angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }

          @property --gradient-angle-offset {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
          }

          @property --gradient-percent {
            syntax: "<percentage>";
            initial-value: 20%;
            inherits: false;
          }

          @property --gradient-shine {
            syntax: "<color>";
            initial-value: #8484ff;
            inherits: false;
          }

          .shiny-cta {
            --gradient-angle: 0deg;
            --gradient-angle-offset: 0deg;
            --gradient-percent: 20%;
            --gradient-shine: #8484ff;
            --shadow-size: 2px;
            position: relative;
            overflow: hidden;
            border-radius: 9999px;
            padding: 1.25rem 2.5rem;
            font-size: 1.125rem;
            line-height: 1.2;
            font-weight: 500;
            color: #ffffff;
            background: linear-gradient(#000000, #000000) padding-box, conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #1d4ed8 5%, var(--gradient-shine) 15%, #1d4ed8 30%, transparent 40%, transparent 100%) border-box;
            border: 2px solid transparent;
            box-shadow: inset 0 0 0 1px #1a1818;
            outline: none;
            transition: --gradient-angle-offset 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-percent 800ms cubic-bezier(0.25, 1, 0.5, 1), --gradient-shine 800ms cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s;
            cursor: pointer;
            isolation: isolate;
            outline-offset: 4px;
            font-family: 'Inter', 'Helvetica Neue', sans-serif;
            z-index: 0;
            animation: border-spin 2.5s linear infinite;
          }

          @keyframes border-spin {
            to {
              --gradient-angle: 360deg;
            }
          }

          .shiny-cta:active {
            transform: translateY(1px);
          }

          .shiny-cta::before {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            --size: calc(100% - 6px);
            --position: 2px;
            --space: 4px;
            width: var(--size);
            height: var(--size);
            background: radial-gradient(circle at var(--position) var(--position), white 0.5px, transparent 0) padding-box;
            background-size: var(--space) var(--space);
            background-repeat: space;
            mask-image: conic-gradient(from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black);
            border-radius: inherit;
            opacity: 0.4;
            pointer-events: none;
          }

          .shiny-cta::after {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            width: 100%;
            aspect-ratio: 1;
            background: linear-gradient(-50deg, transparent, #1d4ed8, transparent);
            mask-image: radial-gradient(circle at bottom, transparent 40%, black);
            opacity: 0.6;
            animation: shimmer 4s linear infinite;
            animation-play-state: running;
          }

          .shiny-cta span {
            position: relative;
            z-index: 2;
            display: inline-block;
          }

          .shiny-cta span::before {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            --size: calc(100% + 1rem);
            width: var(--size);
            height: var(--size);
            box-shadow: inset 0 -1ex 2rem 4px #1d4ed8;
            opacity: 0;
            border-radius: inherit;
            transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1);
            animation: breathe 4.5s linear infinite;
          }

          @keyframes shimmer {
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }

          @keyframes breathe {

            0%,
            100% {
              transform: translate(-50%, -50%) scale(1);
            }

            50% {
              transform: translate(-50%, -50%) scale(1.20);
            }
          }
        </style>
<div className="inline-block group relative">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" style={{'--x': '199.6484375px', '--y': '12px', '--o': '0'}}>
<span className="relative z-10 inline-flex items-center gap-2 font-semibold" style={{}}>Book A Free Call<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>

<div className="xl:pt-0 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">

<div className="grid grid-cols-1 md:grid-cols-3 lg:gap-12 gap-x-8 gap-y-8">

<div className="group flex flex-col transition-all duration-300 hover:scale-[1.02] text-center w-full h-[460px] rounded-3xl pt-8 pr-8 pb-8 pl-8 relative items-center" style={{background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)', border: '1px solid rgba(139, 92, 246, 0.2)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.1) inset', backdropFilter: 'blur(12px)'}}>

<div className="transition-all duration-300 hover:translate-y-[-6px] opacity-[0.15] rounded-3xl absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.12) 1px, transparent 0)', backgroundSize: '24px 24px'}}>
</div>

<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.08), transparent 40%)'}}>
</div>

<div className="flex transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 w-14 h-14 rounded-2xl mb-6 relative items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 8px 24px rgba(124, 58, 237, 0.5), 0 0 60px rgba(124, 58, 237, 0.2)'}}>
<svg className="lucide lucide-zap text-white" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>

<h3 className="text-2xl font-semibold tracking-tight text-white mb-3 leading-tight relative z-10">
            Seamless APIIntegrations
          </h3>

<p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-[280px] relative z-10">Connect your stack to
            major platforms with stable, versioned endpoints</p>

<div className="flex-1 flex flex-col items-center justify-center w-full relative z-10">

<div className="flex items-center gap-4 mb-8 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-semibold text-white/90 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/15">
                A</div>
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-semibold text-white/90 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/15">
                G</div>
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-semibold text-white/90 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/15">
                S</div>
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-sm font-semibold text-white/90 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-white/15">
                M</div>
</div>

<div className="relative flex flex-col items-center">

<div className="flex gap-8 mb-4">
<div className="w-px h-16 bg-gradient-to-b from-purple-400 via-purple-500 to-transparent"></div>
<div className="w-px h-16 bg-gradient-to-b from-purple-400 via-purple-500 to-transparent"></div>
<div className="w-px h-16 bg-gradient-to-b from-purple-400 via-purple-500 to-transparent"></div>
</div>

<div className="w-5 h-5 rounded-full animate-pulse" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 0 30px rgba(124, 58, 237, 0.8), 0 0 60px rgba(124, 58, 237, 0.4)'}}>
</div>
</div>
</div>
</div>

<div className="group flex flex-col transition-all duration-300 hover:scale-[1.02] text-center w-full h-[460px] rounded-3xl pt-8 pr-8 pb-8 pl-8 relative items-center" style={{background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)', border: '1px solid rgba(139, 92, 246, 0.2)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.1) inset', backdropFilter: 'blur(12px)'}}>

<div className="opacity-[0.15] rounded-3xl absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.12) 1px, transparent 0)', backgroundSize: '24px 24px'}}>
</div>

<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.08), transparent 40%)'}}>
</div>

<div className="flex transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 w-14 h-14 rounded-2xl mb-6 relative items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 8px 24px rgba(124, 58, 237, 0.5), 0 0 60px rgba(124, 58, 237, 0.2)'}}>
<svg className="lucide lucide-mic text-white" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"></path>
<path className="" d="M19 10a7 7 0 0 1-14 0"></path>
<path className="" d="M12 19v4"></path>
</svg>
</div>

<h3 className="leading-tight z-10 text-2xl font-semibold text-white tracking-tight mb-3 relative">AI‑Speech
            Recognition</h3>

<p className="leading-relaxed text-sm text-gray-400 mb-8 max-w-[280px] relative z-10">Enable voice control and
            realtime analysis across Auralith experiences</p>

<div className="flex-1 flex flex-col z-10 w-full relative items-center justify-center">
<div className="w-full max-w-[300px] px-4">

<div className="flex mb-6 relative justify-center">
<span className="inline-flex items-center text-xs font-semibold text-white tracking-tight bg-violet-600 rounded-full px-4 py-1.5 relative shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:shadow-violet-500/30">
            Speech Recognition
          </span>
<span className="absolute left-1/2 -translate-x-1/2 -bottom-1 h-2 w-2 rotate-45 rounded-[2px] bg-violet-600"></span>
</div>

<div className="relative group/pill">

<div className="relative h-16 rounded-[28px] bg-black/70 ring-1 ring-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06),0_12px_32px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover/pill:ring-violet-500/30 xl:gap-x-0">

<div className="ring-white/5 ring-1 bg-gradient-to-b from-white/5 to-black/60 rounded-[24px] absolute top-1 right-1 bottom-1 left-1 space-x-0">
</div>

<button className="absolute left-2 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.7)] ring-1 ring-black/70 bg-gradient-to-b from-[#1a1a1d] to-[#0d0d10] transition-all duration-300 hover:scale-105">
<span className="absolute inset-[6px] rounded-full flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_0_0_8px_rgba(124,58,237,0.3)] transition-all duration-300 hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15),0_0_0_10px_rgba(124,58,237,0.4)]" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'}}>
<svg className="lucide lucide-mic text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3Z"></path>
<path d="M19 10a7 7 0 0 1-14 0"></path>
<path d="M12 19v4"></path>
</svg>
</span>
</button>

<div className="-translate-y-1/2 flex group-hover/pill:opacity-100 transition-opacity xl:gap-y-2 opacity-60 max-w-none absolute top-1/2 left-[86px] gap-x-1 gap-y-2 items-center">
<div className="animate-pulse bg-violet-400 w-1 h-3 rounded-full" style={{animationDelay: '0s', animationDuration: '0.8s'}}>
</div>
<div className="animate-pulse bg-violet-400 w-1 h-3 rounded-full" style={{animationDelay: '0s', animationDuration: '0.8s'}}>
</div>
<div className="animate-pulse bg-violet-400 w-1 h-5 rounded-full" style={{animationDelay: '0.1s', animationDuration: '0.8s'}}></div>
<div className="animate-pulse bg-violet-400 w-1 h-5 rounded-full" style={{animationDelay: '0.1s', animationDuration: '0.8s'}}></div>
<div className="animate-pulse bg-violet-400 w-1 h-4 rounded-full" style={{animationDelay: '0.2s', animationDuration: '0.8s'}}></div>
<div className="animate-pulse bg-violet-400 w-1 h-4 rounded-full" style={{animationDelay: '0.2s', animationDuration: '0.8s'}}></div>
<div className="animate-pulse bg-violet-400 w-1 h-6 rounded-full" style={{animationDelay: '0.3s', animationDuration: '0.8s'}}></div>
<div className="animate-pulse bg-violet-400 w-1 h-6 rounded-full" style={{animationDelay: '0.3s', animationDuration: '0.8s'}}></div>
<div className="animate-pulse bg-violet-400 w-1 h-6 rounded-full" style={{animationDelay: '0.3s', animationDuration: '0.8s'}}></div>
<div className="animate-pulse bg-violet-400 w-1 h-3 rounded-full" style={{animationDelay: '0.4s', animationDuration: '0.8s'}}></div>
<div className="animate-pulse bg-violet-400 w-1 h-3 rounded-full" style={{animationDelay: '0.4s', animationDuration: '0.8s'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group flex flex-col transition-all duration-300 hover:scale-[1.02] text-center w-full h-[460px] rounded-3xl pt-8 pr-8 pb-8 pl-8 relative items-center" style={{background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)', border: '1px solid rgba(139, 92, 246, 0.2)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(139, 92, 246, 0.1) inset', backdropFilter: 'blur(12px)'}}>

<div className="opacity-[0.15] rounded-3xl absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.12) 1px, transparent 0)', backgroundSize: '24px 24px'}}>
</div>

<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.08), transparent 40%)'}}>
</div>

<div className="flex transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 w-14 h-14 rounded-2xl mb-6 px-2 py-4 relative items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 8px 24px rgba(124, 58, 237, 0.5), 0 0 60px rgba(124, 58, 237, 0.2)'}}>
<svg className="lucide lucide-shield-check text-white" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>

<h3 className="leading-tight z-10 text-2xl font-semibold text-white tracking-tight mb-3 relative">Trusted
            Authentication</h3>

<p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-[280px] relative z-10">SAML, OAuth2, and
            passkeys—enterprise roles, orgs, and audit trails by default</p>

<div className="flex-1 flex flex-col z-10 w-full relative items-center justify-center">


<div className="flex gap-2 mb-8">
<div className="px-4 py-2 rounded-full bg-white/10 text-xs font-medium text-white/60 border border-white/10 transition-all duration-300 hover:bg-white/15 hover:border-white/20">
                Login</div>
<div className="px-4 py-2 rounded-full bg-purple-600/30 text-xs font-medium text-purple-200 border border-purple-500/30 shadow-lg shadow-purple-500/20 transition-all duration-300 hover:bg-purple-600/40">
                Passkey</div>
</div>

<div className="space-y-3 w-full max-w-[160px]">
<div className="h-3 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/10 transition-all duration-300 group-hover:border-violet-500/30">
</div>
<div className="h-3 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/10 transition-all duration-300 group-hover:border-violet-500/30">
</div>
<div className="h-3 rounded-lg bg-gradient-to-r from-white/10 to-white/5 border border-white/10 w-3/4 transition-all duration-300 group-hover:border-violet-500/30">
</div>
</div>
</div>
</div>
</div>
</div>

</div>

</div>

</section><section className="overflow-visible md:pb-0 pt-0 pb-0 relative" id="service">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(88,28,135,0.12),rgba(17,17,23,0.0))]">
</div>
<div className="overflow-visible text-center max-w-fit mt-24 mr-auto mb-24 ml-auto pt-24 pr-6 pb-24 pl-6 relative xl:mb-0 xl:pb-0 xl:pt-24 xl:mt-0">


<div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.6) 20%, rgba(167, 139, 250, 0.8) 50%, rgba(139, 92, 246, 0.6) 80%, rgba(139, 92, 246, 0) 100%, transparent 100%)', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 16px rgba(139, 92, 246, 0.3))'}}></div>

<div className="absolute inset-x-0 top-0 h-32 pointer-events-none opacity-60" style={{background: 'radial-gradient(50% 100% at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 100%)'}}></div>
<div className="flex overflow-hidden bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#000000] to-[#000000]/5 w-fit border-white/10 border rounded-full mr-auto mb-8 ml-auto pt-2.5 pr-3 pb-2.5 pl-3 relative shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm gap-x-2 gap-y-3 items-center" style={{boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 24px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)'}}>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}>
</div>
<div className="flex w-6 h-6 rounded-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 2px 8px rgba(124, 58, 237, 0.4)'}}>
<svg className="lucide lucide-sparkles w-[14px] h-[14px]" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-xs font-medium text-white tracking-wide">Services</span>
</div>

<div className="space-y-6">


<div className="xl:pb-0 xl:pt-0 pt-20 pb-20 space-y-6">
<h1 className="leading-tight sm:text-6xl md:text-4xl md:font-thin text-5xl font-semibold tracking-tight max-w-4xl mr-auto mb-3 ml-auto" id="animated-headline">Packed with Innovation.</h1>
<p className="leading-relaxed text-base text-white/60 max-w-2xl mr-auto ml-auto">Auralith is packed with
        cutting‑edge features designed to elevate your agency or portfolio.</p>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 gap-x-6 gap-y-6">

<div className="group flex flex-col transition-all duration-300 hover:scale-[1.02] text-left rounded-3xl p-6 sm:p-8 relative items-start h-full min-h-[420px]" style={{background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.6) 0%, rgba(10, 10, 10, 0.7) 100%)', border: '1px solid rgba(139, 92, 246, 0.25)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.15) inset', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
<div className="opacity-[0.08] rounded-3xl absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.12), transparent 40%)'}}></div>
<button className="inline-flex hover:bg-white/10 transition bg-white/5 w-8 h-8 border-white/10 border rounded-lg absolute top-4 right-4 items-center justify-center z-10">
<svg className="lucide lucide-arrow-up-right text-white/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2 leading-tight relative z-10">AI‑Powered Development</h3>
<p className="text-white/70 text-sm mb-4 relative z-10">Smart Websites</p>
<p className="text-gray-400 text-sm leading-relaxed relative z-10 mb-6">We build AI‑driven websites that adapt to users and automation.</p>
<div className="mt-auto w-full relative z-10">
<div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-white/10 bg-white/5" style={{backdropFilter: 'blur(10px)'}}>
<img alt="Modern home exterior" className="w-full h-full max-h-none object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/58ca0a4c-6b78-452c-94ae-dd0a77ae52c0_800w.jpg"/>
</div>
</div>
</div>

<div className="group flex flex-col transition-all duration-300 hover:scale-[1.02] text-left rounded-3xl p-6 sm:p-8 relative items-start h-full min-h-[420px]" style={{background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.6) 0%, rgba(10, 10, 10, 0.7) 100%)', border: '1px solid rgba(139, 92, 246, 0.25)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.15) inset', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
<div className="opacity-[0.08] rounded-3xl absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.12), transparent 40%)'}}></div>
<button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition z-10">
<svg className="lucide lucide-arrow-up-right text-white/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2 leading-tight relative z-10">AI Chatbots</h3>
<p className="text-white/70 text-sm mb-4 relative z-10">24/7 Customer Support</p>
<p className="text-gray-400 text-sm leading-relaxed relative z-10 mb-6">Instant AI‑powered chatbots that automate responses.</p>
<div className="mt-auto w-full relative z-10">
<div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-white/10 bg-white/5" style={{backdropFilter: 'blur(10px)'}}>
<img alt="Sport car profile shot" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/705077de-3642-457d-bce7-77cf913ea9b5_800w.jpg"/>
</div>
</div>
</div>

<div className="group flex flex-col transition-all duration-300 hover:scale-[1.02] text-left rounded-3xl p-6 sm:p-8 relative items-start h-full min-h-[420px]" style={{background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.6) 0%, rgba(10, 10, 10, 0.7) 100%)', border: '1px solid rgba(139, 92, 246, 0.25)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.15) inset', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
<div className="opacity-[0.08] rounded-3xl absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.12), transparent 40%)'}}></div>
<button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition z-10">
<svg className="lucide lucide-arrow-up-right text-white/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2 leading-tight relative z-10">Predictive Analytics</h3>
<p className="text-white/70 text-sm mb-4 relative z-10">Driven Decisions</p>
<p className="text-gray-400 text-sm leading-relaxed relative z-10 mb-6">Leverage AI to analyze trends and predict outcomes for smarter moves.</p>
<div className="mt-auto w-full relative z-10">
<div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-white/10 bg-white/5" style={{backdropFilter: 'blur(10px)'}}>
<img alt="Abstract blue water and object" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/960ca130-f19f-48bc-b627-3f56cc8f7751_800w.jpg"/>
</div>
</div>
</div>

<div className="group flex flex-col transition-all duration-300 hover:scale-[1.02] sm:p-8 min-h-[420px] text-left h-full rounded-3xl pt-6 pr-6 pb-6 pl-6 relative items-start" style={{background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.6) 0%, rgba(10, 10, 10, 0.7) 100%)', border: '1px solid rgba(139, 92, 246, 0.25)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.15) inset', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
<div className="opacity-[0.08] rounded-3xl absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.12), transparent 40%)'}}></div>
<button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition z-10">
<svg className="lucide lucide-arrow-up-right text-white/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2 leading-tight relative z-10">Computer Vision Solutions</h3>
<p className="text-white/70 text-sm mb-4 relative z-10">World Through AI</p>
<p className="text-gray-400 text-sm leading-relaxed relative z-10 mb-6">AI‑based facial recognition, image analysis, and automation solutions.</p>
<div className="mt-auto w-full relative z-10">
<div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-white/10 bg-white/5" style={{backdropFilter: 'blur(10px)'}}>
<img alt="Portrait with sunglasses" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/82c25706-40b4-4059-97f0-e144a657fb10_800w.webp"/>
</div>
</div>
</div>

<div className="group flex flex-col transition-all duration-300 hover:scale-[1.02] text-left rounded-3xl p-6 sm:p-8 relative items-start h-full min-h-[420px]" style={{background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.6) 0%, rgba(10, 10, 10, 0.7) 100%)', border: '1px solid rgba(139, 92, 246, 0.25)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.15) inset', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
<div className="opacity-[0.08] rounded-3xl absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.12), transparent 40%)'}}></div>
<button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition z-10">
<svg className="lucide lucide-arrow-up-right text-white/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2 leading-tight relative z-10">Speech Recognition</h3>
<p className="text-white/70 text-sm mb-4 relative z-10">Smart Actions</p>
<p className="text-gray-400 text-sm leading-relaxed relative z-10 mb-6">Develop voice assistants, transcriptions, and speech‑to‑AI workflows.</p>
<div className="mt-auto w-full relative z-10">
<div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-white/10 bg-white/5" style={{backdropFilter: 'blur(10px)'}}>
<img alt="Minimal interior with microphone vibes" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/57bf511d-f419-45a6-adc3-e20c0c7f1767_800w.jpg"/>
</div>
</div>
</div>

<div className="group flex flex-col transition-all duration-300 hover:scale-[1.02] text-left rounded-3xl p-6 sm:p-8 relative items-start h-full min-h-[420px]" style={{background: 'linear-gradient(135deg, rgba(15, 15, 15, 0.6) 0%, rgba(10, 10, 10, 0.7) 100%)', border: '1px solid rgba(139, 92, 246, 0.25)', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.15) inset', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)'}}>
<div className="opacity-[0.08] rounded-3xl absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,.15) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(139, 92, 246, 0.12), transparent 40%)'}}></div>
<button className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition z-10">
<svg className="lucide lucide-arrow-up-right text-white/80" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2 leading-tight relative z-10">AI‑Driven Automation</h3>
<p className="text-white/70 text-sm mb-4 relative z-10">Streamlined Ops</p>
<p className="text-gray-400 text-sm leading-relaxed relative z-10 mb-6">Automate tasks, reduce costs, and improve productivity with AI solutions.</p>
<div className="mt-auto w-full relative z-10">
<div className="h-32 sm:h-36 rounded-xl overflow-hidden border border-white/10 bg-white/5" style={{backdropFilter: 'blur(10px)'}}>
<img alt="Electric car in studio" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/d7dab73b-a64e-4634-a1c4-23db2c706e19_800w.jpg"/>
</div>
</div>
</div>
</div>

<div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-3">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10 transition" style={{backdropFilter: 'blur(10px)'}}>
<svg className="lucide lucide-sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
      AI Content Generation
    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10 transition" style={{backdropFilter: 'blur(10px)'}}>
<svg className="lucide lucide-shield" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
      Cybersecurity
    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10 transition" style={{backdropFilter: 'blur(10px)'}}>
<svg className="lucide lucide-sliders-horizontal" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><line x1="21" x2="14" y1="4" y2="4"></line><line x1="10" x2="3" y1="4" y2="4"></line><line x1="21" x2="12" y1="12" y2="12"></line><line x1="8" x2="3" y1="12" y2="12"></line><line x1="21" x2="16" y1="20" y2="20"></line><line x1="12" x2="3" y1="20" y2="20"></line><circle cx="12" cy="4" r="2"></circle><circle cx="8" cy="12" r="2"></circle><circle cx="16" cy="20" r="2"></circle></svg>
      UX/UI Optimization
    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10 transition" style={{backdropFilter: 'blur(10px)'}}>
<svg className="lucide lucide-database" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"></path></svg>
      Data Insight
    </span>
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10 transition" style={{backdropFilter: 'blur(10px)'}}>
<svg className="lucide lucide-pie-chart" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M21.21 15.89A10 10 0 1 1 8.11 2.79"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>
      Analytics
    </span>
</div>
</div>
</div>

</div>

</section><section className="overflow-hidden md:pb-28 md:pt-0 pt-0 pb-28 relative">

<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(88,28,135,0.12),rgba(17,17,23,0.0))]">
</div>
<div className="xl:mt-0 text-center max-w-fit mt-24 mr-auto mb-24 ml-auto pt-24 pr-6 pl-6 relative">


<div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.6) 20%, rgba(167, 139, 250, 0.8) 50%, rgba(139, 92, 246, 0.6) 80%, rgba(139, 92, 246, 0) 100%, transparent 100%)', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 16px rgba(139, 92, 246, 0.3))'}}></div>

<div className="absolute inset-x-0 top-0 h-32 pointer-events-none opacity-60" style={{background: 'radial-gradient(50% 100% at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 100%)'}}></div>
<div className="flex overflow-hidden bg-[radial-gradient(circle_at_top,var(--tw-gradient-stops))] from-[#000000] to-[#000000]/5 w-fit border-white/10 border rounded-full mr-auto mb-8 ml-auto pt-2.5 pr-3 pb-2.5 pl-3 relative shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm gap-x-2 gap-y-3 items-center animate-badge" style={{boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 24px rgba(124, 58, 237, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)', animation: 'fadeSlideDown 0.8s ease-out'}}>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}>
</div>
<div className="flex w-6 h-6 rounded-full shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 2px 8px rgba(124, 58, 237, 0.4)', animation: 'pulse 2s ease-in-out infinite'}}>
<svg className="lucide lucide-sparkles w-[14px] h-[14px]" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(255, 255, 255)', animation: 'sparkle 1.5s ease-in-out infinite'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-xs font-medium text-white tracking-wide">AI Chatbots</span>
</div>

<div className="space-y-6">


<div className="xl:pb-2 xl:pt-2 pt-2 pb-2 space-y-6">
<h1 className="leading-tight sm:text-6xl md:text-4xl md:font-thin text-5xl font-semibold tracking-tight max-w-4xl mr-auto mb-3 ml-auto" id="animated-headline" style={{animation: 'fadeSlideUp 1s ease-out 0.2s both'}}>Packed with Innovation.</h1>
<p className="leading-relaxed text-base text-white/60 max-w-2xl mr-auto ml-auto" style={{animation: 'fadeSlideUp 1s ease-out 0.4s both'}}>Auralith is packed with cutting‑edge
          features designed to elevate your agency or portfolio.</p>
<div className="inline-block group relative">
<button className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" onmouseenter="this.style.setProperty('--o','1')" onmouseleave="this.style.setProperty('--o','0')" onmousemove="btnMove(event)" style={{'--x': '199.6484375px', '--y': '12px', '--o': '0'}}>
<span className="z-10 inline-flex items-center gap-2 font-semibold relative" style={{}}>Book your call<svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path className="" d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg></span>
<span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
<span aria-hidden="true" className="glow pointer-events-none absolute inset-0 -z-10" style={{transform: 'scale(0.95) translate(0px, -24px)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(255, 255, 255, .55), rgba(255, 255, 255, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>

<div className="xl:pt-18 max-w-full mr-auto ml-auto pt-18 pr-6 pb-24 pl-6">

<div className="grid grid-cols-1 md:grid-cols-3 lg:gap-12 max-w-full gap-x-8 gap-y-8">

<div className="md:col-span-3 col-span-1 w-full space-y-12">

<div className="max-w-6xl mr-auto ml-auto relative">
<span className="hidden items-center -top-6 -left-2 bubble-float-1 sm:inline-flex text-xs font-semibold tracking-tight rounded-2xl pt-2 pr-3 pb-2 pl-3 absolute" style={{background: 'linear-gradient(135deg, rgb(30, 144, 255) 0%, rgb(18, 115, 234) 100%)', color: 'rgb(255, 255, 255)', boxShadow: 'rgba(18, 115, 234, 0.35) 0px 10px 24px', transform: 'translateY(0.0159999px) rotate(-6deg)', animation: '3s ease-in-out 0s infinite normal none running floatBubble1'}}>AI Chat Support<i className="w-2 h-2 bg-current absolute -bottom-1 left-6 rotate-45 rounded-[2px]" style={{background: '#1273ea'}}></i></span>
<span className="hidden sm:inline-flex items-center -top-12 text-xs font-semibold tracking-tight rounded-2xl pt-2 pr-3 pb-2 pl-3 absolute right-0 bubble-float-2" style={{background: 'linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(124, 58, 237) 100%)', color: 'rgb(255, 255, 255)', boxShadow: 'rgba(124, 58, 237, 0.35) 0px 10px 24px', transform: 'translateY(8.42334px) rotate(6deg)', animation: '3s ease-in-out 0.5s infinite normal none running floatBubble2'}}>
          Problem Solved
          <i className="w-2 h-2 bg-current absolute -bottom-1 right-6 rotate-45 rounded-[2px]" style={{background: '#7c3aed'}}></i>
</span>

<div className="flex min-h-[400px] sm:px-6 sm:mt-0 sm:mb-40 mt-0 mb-40 pr-4 pl-4 relative gap-x-0 gap-y-0 items-end justify-center" id="card-orbit-container">

<div className="orbit-card group absolute w-[180px] sm:w-[220px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 transition-all duration-100 hover:-translate-y-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.5)]" data-orbit-index="0" style={{left: '966px', top: '260.112px', transform: 'translate(-50%, -50%) rotate(12deg) scale(1.00012)', opacity: '0.5004', zIndex: '50', filter: 'none'}}>
<img alt="Minimal bag on moss" className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/149e33ce-f3dc-40ee-b985-cb0735411ff5_800w.jpg"/>
<div className="absolute inset-0 rounded-3xl" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.6)'}}></div>
<div className="transition-all duration-100 group-hover:bg-black/20 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="orbit-card group absolute w-[190px] sm:w-[240px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.55)] transition-all duration-100 hover:-translate-y-[6px]" data-orbit-index="1" style={{left: '765.723px', top: '381.3px', transform: 'translate(-50%, -50%) rotate(5.99168deg) scale(1.12996)', opacity: '0.933213', zIndex: '93', filter: 'none'}}>
<img alt="Sports car at sunset" className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/be34e0e0-bfda-49c7-b231-b353206dd7a2_800w.jpg"/>
<div className="absolute inset-0 rounded-3xl" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.6)'}}></div>
<div className="transition-all duration-100 group-hover:bg-black/20 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="orbit-card group absolute w-[200px] sm:w-[260px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_24px_60px_rgba(0,0,0,0.6)] hover:z-10 transition-all duration-100 hover:scale-105 hover:-translate-y-[6px]" data-orbit-index="2" style={{left: '365.723px', top: '381.188px', transform: 'translate(-50%, -50%) rotate(-6.00831deg) scale(1.12984)', opacity: '0.932813', zIndex: '93', filter: 'none'}}>
<img alt="Citrus still life with dropper bottle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4c9c20c8-e367-4ade-a102-dda55d03765d_800w.jpg"/>
<div className="transition-all duration-100 absolute top-0 right-0 bottom-0 left-0" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.55)'}}>
<div className="transition-all duration-100 group-hover:bg-black/20 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(600px circle at 50% 30%, rgba(139 transparent 40%)'}}></div>
</div>

<div className="orbit-card group absolute w-[190px] sm:w-[240px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_20px_50px_rgba(0,0,0,0.55)] transition-all duration-100 hover:-translate-y-[6px]" data-orbit-index="3" style={{left: '166px', top: '259.888px', transform: 'translate(-50%, -50%) rotate(-12deg) scale(0.99988)', opacity: '0.9992', zIndex: '50', filter: 'blur(2.0016px)'}}>
<img alt="Reflective sphere render on field" className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/986db8ed-1c5d-42fb-8c1d-4b3716d2e317_800w.jpg"/>
<div className="absolute inset-0 rounded-3xl" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.6)'}}></div>
<div className="transition-all duration-100 group-hover:bg-black/20 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="orbit-card group absolute w-[190px] sm:w-[240px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_22px_55px_rgba(0,0,0,0.55)] transition-all duration-100 hover:-translate-y-[6px]" data-orbit-index="4" style={{left: '366.277px', top: '138.7px', transform: 'translate(-50%, -50%) rotate(-5.99168deg) scale(0.870036)', opacity: '0', zIndex: '7', filter: 'blur(4px)'}}>
<img alt="Portrait fashion outdoors" className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/7a2dc7c2-23b6-422f-a823-9f6546bcaa1e_800w.jpg"/>
<div className="absolute inset-0 rounded-3xl" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.55)'}}></div>
<div className="transition-all duration-100 group-hover:bg-black/20 bg-black/0 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="orbit-card group absolute w-[200px] sm:w-[260px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_26px_70px_rgba(0,0,0,0.6)] hover:z-10 transition-all duration-100 hover:scale-105 hover:-translate-y-[6px]" data-orbit-index="5" style={{left: '766.277px', top: '138.812px', transform: 'translate(-50%, -50%) rotate(6.00831deg) scale(0.870156)', opacity: '0', zIndex: '7', filter: 'blur(4px)'}}>
<img alt="Perfume bottles product shot" className="w-full h-full object-cover transition-transform duration-100 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f5668c5-fc4a-44e0-bc5e-a664189d3c31_800w.jpg"/>
<div className="rounded-3xl absolute top-0 right-0 bottom-0 left-0" style={{boxShadow: 'inset 0 0 0 2px rgba(0,0,0,0.55)'}}></div>
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
</div>
<div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'radial-gradient(600px circle at 60% 30%, rgba(139,92,246,0.12), transparent 40%)'}}></div>
</div>
</div>
</div>


<div className="col-span-1 grid grid-cols-1 sm:px-6 md:col-span-3 md:grid-cols-3 md:pt-44 md:pb-20 w-full pt-44 pr-4 pb-20 pl-4 gap-x-6 gap-y-6">

<div className="group overflow-hidden transition-all duration-100 hover:translate-y-[-6px] bg-white/5 border-white/10 border rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative" style={{boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255,255,255,0.06)', animation: 'fadeSlideUp 0.8s ease-out 1.5s both'}}>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}>
</div>
<div className="absolute inset-0 pointer-events-none opacity-[0.12]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)', backgroundSize: '18px 18px'}}>
</div>
<div className="relative flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 8px 24px rgba(124,58,237,0.45)', animation: 'pulse 2s ease-in-out infinite 0.2s'}}>
<svg className="lucide lucide-message-circle-more text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12c0 1.7 1 3.3 2.7 4.5l-.7 3.5 3.5-.7C10.7 20 12.3 21 14 21c4.4 0 8-3.1 8-7s-3.6-7-8-7-8 3.1-8 7Z">
</path>
<path d="M8 12h.01"></path>
<path d="M12 12h.01"></path>
<path d="M16 12h.01"></path>
</svg>
</div>
<h3 className="text-white text-lg font-semibold tracking-tight">Fast Responses</h3>
</div>
<p className="relative text-white/70 text-sm leading-relaxed">Get timely answers to your questions.</p>
</div>

<div className="group overflow-hidden transition-all duration-300 hover:translate-y-[-6px] bg-white/5 border-white/10 border rounded-[28px] pt-6 pr-6 pb-6 pl-6 relative" style={{boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255,255,255,0.06)', animation: 'fadeSlideUp 0.8s ease-out 1.6s both'}}>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}>
</div>
<div className="absolute inset-0 pointer-events-none opacity-[0.12]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)', backgroundSize: '18px 18px'}}>
</div>
<div className="relative flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 8px 24px rgba(124,58,237,0.45)', animation: 'pulse 2s ease-in-out infinite 0.4s'}}>
<svg className="lucide lucide-sparkles text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z">
</path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<h3 className="text-white text-lg font-semibold tracking-tight">Expert Guidance</h3>
</div>
<p className="relative text-white/70 text-sm leading-relaxed">Our team understands both design and tech.</p>
</div>

<div className="group relative rounded-[28px] border border-white/10 bg-white/5 p-6 overflow-hidden transition-all duration-300 hover:translate-y-[-6px]" style={{boxShadow: '0 16px 40px rgba(0, 0, 0, 0.45), inset 0 0 0 1px rgba(255,255,255,0.06)', animation: 'fadeSlideUp 0.8s ease-out 1.7s both'}}>
<div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 right-0" style={{height: '1px', background: 'linear-gradient(90deg, rgba(124,58,237,0) 0%, rgba(167,139,250,0.9) 50%, rgba(124,58,237,0) 100%)', borderTopLeftRadius: '9999px', borderTopRightRadius: '9999px', opacity: '0.7', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.35))'}}>
</div>
<div className="absolute inset-0 pointer-events-none opacity-[0.12]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)', backgroundSize: '18px 18px'}}>
</div>
<div className="relative flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', boxShadow: '0 8px 24px rgba(124,58,237,0.45)', animation: 'pulse 2s ease-in-out infinite 0.6s'}}>
<svg className="lucide lucide-lock-keyhole text-white" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="16" r="1"></circle>
<rect height="12" rx="2" width="18" x="3" y="10"></rect>
<path d="M7 10V7a5 5 0 0 1 10 0v3"></path>
</svg>
</div>
<h3 className="text-white text-lg font-semibold tracking-tight">Continuous Help</h3>
</div>
<p className="relative text-white/70 text-sm leading-relaxed">Support doesn't stop after launch.</p>
</div>
</div>
</div>
</div>

<div className="flex justify-center mt-16">
<button aria-label="Scroll to top" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/20" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<svg className="lucide lucide-arrow-up transition-transform duration-300 group-hover:-translate-y-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m5 12 7-7 7 7"></path>
<path d="M12 19V5"></path>
</svg>
      Back to Top
    </button>
</div>
<style>
    @keyframes floatBubble1 {
      0%, 100% {
        transform: translateY(0px) rotate(-6deg);
      }
      50% {
        transform: translateY(-10px) rotate(-6deg);
      }
    }

    @keyframes floatBubble2 {
      0%, 100% {
        transform: translateY(0px) rotate(6deg);
      }
      50% {
        transform: translateY(-10px) rotate(6deg);
      }
    }
  </style>

</div>
</div>

</div>

</section>
</main>

<footer className="overflow-hidden border-white/10 border-t pt-16 pb-12 relative" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(10,10,12,0.6) 100%)'}}>

<div className="absolute inset-x-0 top-0 h-px pointer-events-none" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(139, 92, 246, 0) 0%, rgba(139, 92, 246, 0.6) 20%, rgba(167, 139, 250, 0.8) 50%, rgba(139, 92, 246, 0.6) 80%, rgba(139, 92, 246, 0) 100%, transparent 100%)', filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.5)) drop-shadow(0 0 16px rgba(139, 92, 246, 0.3))'}}></div>

<div className="absolute inset-x-0 top-0 h-32 pointer-events-none opacity-60" style={{background: 'radial-gradient(50% 100% at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 100%)'}}></div>
<div className="mx-auto max-w-7xl px-6 relative">

<div className="flex items-center justify-center mb-8">
<div className="flex gap-x-3 gap-y-3 items-center">
<div className="items-center">
<span className="text-[17px] xl:font-extrabold xl:ml-0 xl:pl-16 xl:pr-16 xl:pt-8 xl:pb-8 font-semibold text-white tracking-tight mix-blend-screen bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/40a9834a-36af-4a0b-90b1-e452d0568c2e_320w.png)] bg-cover ml-0 pt-8 pr-16 pb-8 pl-16 invert-0"></span>
<span className="block text-xs text-white/50 tracking-wide">Intelligent Products, Real Momentum</span>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-8">
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">Portfolio</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">Contact</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">Careers</a>
</div>

<div className="flex items-center justify-center gap-4 mb-8">
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:scale-110" href="#">
<svg className="lucide lucide-twitter text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:scale-110" href="#">
<svg className="lucide lucide-linkedin text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect className="" height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:scale-110" href="#">
<svg className="lucide lucide-github text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:scale-110" href="#">
<svg className="lucide lucide-instagram text-white/70" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>

<div className="h-px w-full mb-6" style={{background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'}}></div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-sm text-white/50">
<svg className="lucide lucide-copyright h-4 w-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12" r="10"></circle><path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path></svg>
<span className="">2025 Auralith. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-white/60 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">Cookie Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
