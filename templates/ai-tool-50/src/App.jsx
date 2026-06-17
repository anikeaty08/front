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



          document.addEventListener('DOMContentLoaded', () => {
              // Initialize ParticlesJS
              particlesJS('particles-js', {
                  particles: {
                      number: { value: 80, density: { enable: true, value_area: 800 } },
                      color: { value: "#ffffff" },
                      shape: { type: "circle" },
                      opacity: { value: 0.5, random: false },
                      size: { value: 3, random: true },
                      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                      move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
                  },
                  interactivity: {
                      detect_on: "canvas",
                      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                      modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
                  },
                  retina_detect: true
              });

              const sections = document.querySelectorAll('.section');
              const dots = document.querySelectorAll('.progress-dot');
              const magneticElements = document.querySelectorAll('.magnetic');
              let currentIndex = 0;
              let isScrolling = false;
              let touchStartY = 0;

              // Initialize
              updateActiveDot(currentIndex);

              // Magnetic effect
              magneticElements.forEach(el => {
                  el.addEventListener('mousemove', (e) => {
                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left - rect.width / 2;
                      const y = e.clientY - rect.top - rect.height / 2;
                      el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
                  });

                  el.addEventListener('mouseleave', () => {
                      el.style.transform = 'translate(0px, 0px)';
                  });
              });

              // Scroll event
              window.addEventListener('wheel', (e) => {
                  if (isScrolling) return;

                  isScrolling = true;
                  if (e.deltaY > 0) {
                      if (currentIndex < sections.length - 1) {
                          currentIndex++;
                          changeSection(currentIndex);
                      }
                  } else {
                      if (currentIndex > 0) {
                          currentIndex--;
                          changeSection(currentIndex);
                      }
                  }

                  setTimeout(() => {
                      isScrolling = false;
                  }, 1200);
              });

              // Touch events
              document.addEventListener('touchstart', (e) => {
                  touchStartY = e.touches[0].clientY;
              });

              document.addEventListener('touchend', (e) => {
                  if (isScrolling) return;

                  const touchEndY = e.changedTouches[0].clientY;
                  const diff = touchStartY - touchEndY;

                  isScrolling = true;
                  if (diff > 50) {
                      if (currentIndex < sections.length - 1) {
                          currentIndex++;
                          changeSection(currentIndex);
                      }
                  } else if (diff < -50) {
                      if (currentIndex > 0) {
                          currentIndex--;
                          changeSection(currentIndex);
                      }
                  }

                  setTimeout(() => {
                      isScrolling = false;
                  }, 1200);
              });

              // Click on dots
              dots.forEach(dot => {
                  dot.addEventListener('click', () => {
                      const index = parseInt(dot.getAttribute('data-index'));
                      currentIndex = index;
                      changeSection(currentIndex);
                  });
              });

              function changeSection(index) {
                  sections.forEach(section => {
                      section.classList.remove('active');
                  });

                  sections[index].classList.add('active');
                  updateActiveDot(index);

                  const reveals = sections[index].querySelectorAll('.reveal');
                  reveals.forEach((el, i) => {
                      setTimeout(() => {
                          el.classList.add('active');
                      }, i * 150);
                  });

                  sections.forEach((section, i) => {
                      if (i !== index) {
                          const otherReveals = section.querySelectorAll('.reveal');
                          otherReveals.forEach(el => {
                              el.classList.remove('active');
                          });
                      }
                  });
              }

              function updateActiveDot(index) {
                  dots.forEach(dot => {
                      dot.classList.remove('active');
                  });
                  dots[index].classList.add('active');
              }
          });
        


        document.addEventListener("DOMContentLoaded", function () {
          const toggle = document.getElementById("mobile-menu-toggle");
          const menu = document.getElementById("mobile-menu");
          const openIcon = toggle.querySelector('[data-menu-icon="open"]');
          const closeIcon = toggle.querySelector('[data-menu-icon="close"]');

          toggle.addEventListener("click", function () {
            const isOpen = !menu.classList.contains("hidden");
            menu.classList.toggle("hidden", isOpen);
            openIcon.classList.toggle("hidden", !isOpen);
            closeIcon.classList.toggle("hidden", isOpen);
          });
        });
      


                  (function (card) {
                    if (!card || !window.Chart) return;
                    const el = card.querySelector('canvas[data-canvas="rev"]');
                    if (!el) return;
                    const ctx = el.getContext('2d');
                    const color = 'rgba(255,115,80,1)';
                    const g = ctx.createLinearGradient(0, 0, 0, 140);
                    g.addColorStop(0, 'rgba(255,115,80,0.35)');
                    g.addColorStop(1, 'rgba(255,115,80,0)');
                    new Chart(ctx, {
                      type: 'line',
                      data: {
                        labels: Array.from({ length: 24 }, (_, i) => i + 1),
                        datasets: [{
                          data: [5,6,5,7,6,8,10,9,11,10,12,13,14,16,15,17,18,19,21,20,23,24,26,28],
                          borderColor: color,
                          backgroundColor: g,
                          tension: 0.35,
                          borderWidth: 2,
                          pointRadius: 0,
                          fill: true
                        }]
                      },
                      options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false }, tooltip: { enabled: true, intersect: false, mode: 'index' } },
                        scales: { x: { display: false }, y: { display: false } }
                      }
                    });
                  })(document.currentScript.closest('[data-card="revenue"]'));
                


                  (function (card) {
                    if (!card || !window.Chart) return;
                    const el = card.querySelector('canvas[data-canvas="growth"]');
                    if (!el) return;
                    const ctx = el.getContext('2d');
                    new Chart(ctx, {
                      type: 'bar',
                      data: {
                        labels: ['Mo','Tu','We','Th','Fr','Sa','Su'],
                        datasets: [{
                          data: [12,18,14,26,34,22,20],
                          backgroundColor: 'rgba(244,63,94,1)',
                          borderRadius: 6,
                          maxBarThickness: 18
                        }]
                      },
                      options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: { legend: { display: false }, tooltip: { enabled: true } },
                        scales: { x: { display: false }, y: { display: false } }
                      }
                    });
                  })(document.currentScript.closest('[data-card="growth"]'));
                


                  const btn = document.querySelector('.glow-btn');
                                  btn.addEventListener('mousemove', (e) => {
                                    const rect = btn.getBoundingClientRect();
                                    const x = e.clientX - rect.left;
                                    const y = e.clientY - rect.top;
                                    btn.style.setProperty('--x', x + 'px');
                                    btn.style.setProperty('--y', y + 'px');
                                  });
                


                (function (container) {
                      if (!container || !window.Chart) return;
                      const lineEl = container.querySelector('canvas[data-canvas="hero-line"]');
                      const barEl = container.querySelector('canvas[data-canvas="hero-bars"]');
                      if (!lineEl || !barEl) return;

                      const lctx = lineEl.getContext('2d');
                      const bctx = barEl.getContext('2d');

                      const lineColor = 'rgba(244,63,94,1)'; // rose-500
                      const lg = lctx.createLinearGradient(0, 0, 0, 120);
                      lg.addColorStop(0, 'rgba(244,63,94,0.35)');
                      lg.addColorStop(1, 'rgba(244,63,94,0)');

                      new Chart(lctx, {
                        type: 'line',
                        data: {
                          labels: Array.from({ length: 14 }, (_, i) => i + 1),
                          datasets: [{
                            data: [42,45,44,46,49,53,52,55,58,60,64,63,68,72],
                            borderColor: lineColor,
                            backgroundColor: lg,
                            tension: 0.35,
                            borderWidth: 2,
                            pointRadius: 0,
                            fill: true
                          }]
                        },
                        options: {
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: { legend: { display: false }, tooltip: { enabled: true, intersect: false, mode: 'index' } },
                          scales: { x: { display: false }, y: { display: false } }
                        }
                      });

                      new Chart(bctx, {
                        type: 'bar',
                        data: {
                          labels: ['Mo','Tu','We','Th','Fr','Sa','Su'],
                          datasets: [{
                            data: [12,18,14,22,36,28,24],
                            backgroundColor: 'rgba(244,63,94,1)',
                            borderRadius: 6,
                            maxBarThickness: 18
                          }]
                        },
                        options: {
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: { legend: { display: false }, tooltip: { enabled: true } },
                          scales: { x: { display: false }, y: { display: false } }
                        }
                      });
                    })(document.currentScript.closest('[data-card="hero-feature"]'));
              


              (function (container) {
                if (!container || !window.Chart) return;
                const el = container.querySelector('canvas[data-canvas="ss-lines"]');
                if (!el) return;
                const ctx = el.getContext('2d');

                const mkGrad = (c, color) => {
                  const g = c.createLinearGradient(0, 0, 0, 140);
                  g.addColorStop(0, color.replace('1)', '0.35)'));
                  g.addColorStop(1, color.replace('1)', '0)'));
                  return g;
                };

                const r1 = 'rgba(251,113,133,1)'; // rose-400
                const r2 = 'rgba(244,63,94,1)'; // rose-500
                const r3 = 'rgba(253,164,175,1)';  // rose-300

                new Chart(ctx, {
                  type: 'line',
                  data: {
                    labels: Array.from({ length: 24 }, (_, i) => i + 1),
                    datasets: [
                      { data: [22,24,20,26,28,25,29,31,30,34,36,33,38,41,40,44,47,46,49,52,51,55,57,60], borderColor: r1, backgroundColor: mkGrad(ctx, r1), tension: 0.35, borderWidth: 2, pointRadius: 0, fill: true },
                      { data: [8,10,9,12,14,13,15,18,16,20,21,20,22,24,23,25,28,26,29,31,30,33,35,34], borderColor: r2, backgroundColor: mkGrad(ctx, r2), tension: 0.35, borderWidth: 2, pointRadius: 0, fill: true },
                      { data: [5,6,7,9,8,10,11,12,13,12,14,15,16,17,18,17,19,21,20,22,24,23,25,27], borderColor: r3, backgroundColor: mkGrad(ctx, r3), tension: 0.35, borderWidth: 2, pointRadius: 0, fill: true }
                    ]
                  },
                  options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: true, intersect: false, mode: 'index' } },
                    scales: { x: { display: false }, y: { display: false } }
                  }
                });
              })(document.currentScript.closest('[data-card="scalable-solutions"]'));
            


              const card = document.getElementById('pricing-card-free');
              const glow = card.querySelector('.absolute.inset-0');
              const bounds = 12;
              const set = (x = 0, y = 0) => {
                card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg)`;
              };
              card.addEventListener('pointermove', (e) => {
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width;
                const py = (e.clientY - r.top) / r.height;
                const rx = (px - 0.5) * 2 * bounds;
                const ry = -(py - 0.5) * 2 * bounds;
                set(rx, ry);

                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                glow.style.background = `radial-gradient(120% 120% at ${x}% ${y}%, rgba(244,63,94,0.25) 0%, rgba(244,63,94,0.12) 35%, rgba(244,63,94,0.05) 55%, rgba(0,0,0,0) 75%)`;
                glow.style.opacity = '1';
              });
              card.addEventListener('pointerleave', () => {
                card.style.transition = 'transform 300ms ease';
                glow.style.opacity = '0';
                set(0, 0);
                setTimeout(() => (card.style.transition = ''), 320);
              });
            


              const card = document.getElementById('pricing-card-pro');
              const glow = card.querySelector('.absolute.inset-0');
              const bounds = 12;
              const set = (x = 0, y = 0) => {
                card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg)`;
              };
              card.addEventListener('pointermove', (e) => {
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width;
                const py = (e.clientY - r.top) / r.height;
                const rx = (px - 0.5) * 2 * bounds;
                const ry = -(py - 0.5) * 2 * bounds;
                set(rx, ry);

                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                glow.style.background = `radial-gradient(120% 120% at ${x}% ${y}%, rgba(244,63,94,0.25) 0%, rgba(244,63,94,0.12) 35%, rgba(244,63,94,0.05) 55%, rgba(0,0,0,0) 75%)`;
              });
              card.addEventListener('pointerleave', () => {
                card.style.transition = 'transform 300ms ease';
                set(0, 0);
                setTimeout(() => (card.style.transition = ''), 320);
              });
            


              const card = document.getElementById('pricing-card-enterprise');
              const glow = card.querySelector('.absolute.inset-0');
              const bounds = 12;
              const set = (x = 0, y = 0) => {
                card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg)`;
              };
              card.addEventListener('pointermove', (e) => {
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width;
                const py = (e.clientY - r.top) / r.height;
                const rx = (px - 0.5) * 2 * bounds;
                const ry = -(py - 0.5) * 2 * bounds;
                set(rx, ry);

                const x = ((e.clientX - r.left) / r.width) * 100;
                const y = ((e.clientY - r.top) / r.height) * 100;
                glow.style.background = `radial-gradient(120% 120% at ${x}% ${y}%, rgba(244,63,94,0.25) 0%, rgba(244,63,94,0.12) 35%, rgba(244,63,94,0.05) 55%, rgba(0,0,0,0) 75%)`;
                glow.style.opacity = '1';
              });
              card.addEventListener('pointerleave', () => {
                card.style.transition = 'transform 300ms ease';
                glow.style.opacity = '0';
                set(0, 0);
                setTimeout(() => (card.style.transition = ''), 320);
              });
            


          (function() {
            const container = document.querySelector('[data-element-id="aura-emhr19l2w4ql1uvgv"]');
            if (!container) return;

            const btnMonthly = container.querySelector('button[data-billing="monthly"]');
            const btnAnnual = container.querySelector('button[data-billing="annual"]');
            const priceEls = container.querySelectorAll('[data-plan-price]');
            const billingCopies = container.querySelectorAll('[data-billing-copy]');

            let currentMode = 'monthly';

            function updatePricing(mode) {
              currentMode = mode;

              // Update button states
              const isMonthly = mode === 'monthly';

              btnMonthly.setAttribute('aria-selected', isMonthly ? 'true' : 'false');
              btnAnnual.setAttribute('aria-selected', isMonthly ? 'false' : 'true');

              if (isMonthly) {
                btnMonthly.classList.add('bg-white', 'text-neutral-900');
                btnMonthly.classList.remove('bg-white/5', 'text-neutral-300');
                btnAnnual.classList.remove('bg-white', 'text-neutral-900');
                btnAnnual.classList.add('bg-white/5', 'text-neutral-300');
              } else {
                btnAnnual.classList.add('bg-white', 'text-neutral-900');
                btnAnnual.classList.remove('bg-white/5', 'text-neutral-300');
                btnMonthly.classList.remove('bg-white', 'text-neutral-900');
                btnMonthly.classList.add('bg-white/5', 'text-neutral-300');
              }

              // Update prices
              priceEls.forEach(el => {
                const monthlyPrice = el.dataset.monthly;
                const annualPrice = el.dataset.annual;
                const newPrice = isMonthly ? monthlyPrice : annualPrice;
                el.textContent = `$${newPrice}`;
              });

              // Update billing copy
              billingCopies.forEach(el => {
                el.textContent = isMonthly ? 'billed monthly' : 'billed annually';
              });
            }

            // Add click event listeners
            btnMonthly.addEventListener('click', () => updatePricing('monthly'));
            btnAnnual.addEventListener('click', () => updatePricing('annual'));

            // Initialize with monthly
            updatePricing('monthly');
          })();
        


        (function (section) {
          if (!section) return;

          // Handle billing toggle
          const btnMonthly = section.querySelector('button[data-billing="monthly"]');
          const btnAnnual  = section.querySelector('button[data-billing="annual"]');
          const priceEls   = section.querySelectorAll('[data-plan-price]');
          const billingCopies = section.querySelectorAll('[data-billing-copy]');

          let mode = 'monthly'; // default

          function setMode(next) {
            mode = next;
            // Toggle button visual state
            [btnMonthly, btnAnnual].forEach(btn => {
              const active = btn.dataset.billing === mode;
              btn.setAttribute('aria-selected', active ? 'true' : 'false');
              btn.classList.toggle('bg-white', active);
              btn.classList.toggle('text-neutral-900', active);
              btn.classList.toggle('text-neutral-300', !active);
            });

            // Update prices
            priceEls.forEach(el => {
              const m = el.dataset.monthly;
              const a = el.dataset.annual;
              const val = mode === 'annual' ? a : m;
              el.textContent = `$${val}`;
            });

            // Update "billed ..." copy
            billingCopies.forEach(el => {
              el.textContent = mode === 'annual' ? ' billed annually' : ' billed monthly';
            });
          }

          btnMonthly && btnMonthly.addEventListener('click', () => setMode('monthly'));
          btnAnnual && btnAnnual.addEventListener('click', () => setMode('annual'));

          // Initialize once
          setMode('monthly');
        })(document.currentScript.closest('section[data-element-id="aura-emhpbaq7s5oe0a9e"]'));
      


        (function(section) {
          if (!section) return;

          // Hydrate lucide icons within this section
          if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons({ attrs: { 'stroke-width': 2 } });
          }

          // Accessibility + subtle interactions per card
          const cards = section.querySelectorAll('[data-card="testimonial"]');
          cards.forEach((card) => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'article');
            card.addEventListener('focus', () => card.classList.add('ring-1', 'ring-white/20'));
            card.addEventListener('blur', () => card.classList.remove('ring-1', 'ring-white/20'));
            card.addEventListener('mousemove', (e) => {
              const r = card.getBoundingClientRect();
              const x = ((e.clientX - r.left) / r.width) * 100;
              const y = ((e.clientY - r.top) / r.height) * 100;
              card.style.backgroundImage = `radial-gradient(120px 120px at ${x}% ${y}%, rgba(244,63,94,0.10), transparent 60%)`;
            });
            card.addEventListener('mouseleave', () => {
              card.style.backgroundImage = '';
            });
          });
        })(document.currentScript.closest('section[data-element-id="aura-emhpci91e70us1px"]'));
      


          (function (card) {
            if (!card) return;
            const pulse = () => {
              card.classList.add('ring-1','ring-white/15');
              setTimeout(() => card.classList.remove('ring-1','ring-white/15'), 220);
            };
            ['primary','secondary'].forEach(key => {
              const btn = card.querySelector(`[data-cta="${key}"]`);
              btn && btn.addEventListener('click', pulse);
            });
          })(document.currentScript.closest('[data-card="cta-primary"]'));
        


          (function (footer) {
            if (!footer) return;
            if (window.lucide && typeof window.lucide.createIcons === 'function') {
              window.lucide.createIcons({ attrs: { 'stroke-width': 2 } });
            }
          })(document.currentScript.closest('[data-card="site-footer"]'));
        


      // Simple sparkline charts
      function makeGradient(ctx, color) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, color.replace('1)', '0.35)'));
        gradient.addColorStop(1, color.replace('1)', '0)'));
        return gradient;
      }

      document.addEventListener('DOMContentLoaded', () => {
        const revCtx = document.getElementById('revChart').getContext('2d');
        const growthCtx = document.getElementById('growthChart').getContext('2d');

        const revColor = 'rgba(16, 185, 129, 1)'; // emerald-500
        const growthColor = 'rgba(56, 189, 248, 1)'; // sky-400

        new Chart(revCtx, {
          type: 'line',
          data: {
            labels: Array.from({ length: 24 }, (_, i) => i + 1),
            datasets: [{
              data: [12,10,11,13,12,14,18,16,17,19,18,21,24,22,25,28,26,27,29,32,30,34,36,39],
              borderColor: revColor,
              backgroundColor: makeGradient(revCtx, revColor),
              fill: true,
              tension: 0.35,
              borderWidth: 2,
              pointRadius: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: true, intersect: false, mode: 'index' } },
            scales: { x: { display: false }, y: { display: false } }
          }
        });

        new Chart(growthCtx, {
          type: 'bar',
          data: {
            labels: ['M','T','W','T','F','S','S'],
            datasets: [{
              data: [8,12,9,14,18,22,20],
              backgroundColor: growthColor,
              borderRadius: 6,
              maxBarThickness: 18
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false }, tooltip: { enabled: true } },
            scales: { x: { display: false }, y: { display: false } }
          }
        });
      });
    


      (function() {
              const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                    const el = entry.target;

                    if (el.hasAttribute('data-scroll-animate-children')) {
                      const children = Array.from(el.children);
                      children.forEach((child, index) => {
                        setTimeout(() => {
                          child.style.opacity = '1';
                          child.style.transform = 'translateY(0)';
                        }, index * 100);
                      });
                      el.classList.add('in-view');
                    } else {
                      el.classList.add('in-view');
                    }

                    observer.unobserve(entry.target);
                  }
                });
              }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
              });

              const animatedElements = document.querySelectorAll('[data-scroll-animate], [data-scroll-animate-children]');
              animatedElements.forEach(el => observer.observe(el));
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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute opacity-30" data-alpha-mask="0" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 0%, transparent)'}}>
<div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="862" style={{width: '100%', height: '100%'}} width="1341"></canvas></div>
</div>
<div className="bg-center opacity-70 w-full h-screen bg-cover absolute top-0 blur-sm" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c595d20b-42ec-4942-a0cd-07031086f442_3840w.jpg")', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" style={{}}>
<div className="absolute inset-0 opacity-[0.13] bg-cover bg-center bg-[url(default)]" style={{}}></div>
</div>
<header className="sticky top-0 inset-x-0 z-[9999] backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b w-full border-white/5" style={{}}>
<div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">

<a className="inline-flex items-center justify-center bg-center font-bold w-[100px] h-[40px] rounded" href="#">Marqait</a>

<nav className="hidden lg:flex gap-x-8 items-center">
<a className="text-sm transition text-neutral-300 hover:text-white" href="#" style={{}}>
            About
          </a>
<a className="text-sm transition text-neutral-300 hover:text-white" href="#" style={{}}>
            Benefits
          </a>
<a className="text-sm transition text-neutral-300 hover:text-white" href="#" style={{}}>
            Features
          </a>
<a className="text-sm transition text-neutral-300 hover:text-white" href="#" style={{}}>
            Pricing
          </a>
<a className="text-sm transition text-neutral-300 hover:text-white" href="#" style={{}}>
            FAQ
          </a>
</nav>

<div className="flex items-center gap-3">

<button className="inline-flex transition overflow-hidden group text-sm font-medium rounded-full pt-2 pr-4 pb-2 pl-4 relative gap-x-2 items-center" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.2)'; this.querySelector('.text-gradient').style.backgroundPosition='0% center'; this.querySelector('.arrow-icon').style.filter='drop-shadow(0 0 0px rgba(255,255,255,0))'; this.querySelector('.arrow-icon').style.transform='translateX(0)';" onmouseover="this.style.borderColor='rgba(255, 255, 255, 0.4)'; this.querySelector('.text-gradient').style.backgroundPosition='200% center'; this.querySelector('.arrow-icon').style.filter='drop-shadow(0 0 8px rgba(255,255,255,0.8))'; this.querySelector('.arrow-icon').style.transform='translateX(2px)';" style={{background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.2)'}}>
<svg className="lucide lucide-arrow-right arrow-icon relative z-10" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
<span className="text-gradient relative z-10" style={{background: 'linear-gradient(90deg, rgb(255, 255, 255) 0%, rgba(255, 182, 193, 0.9) 50%, rgb(255, 255, 255) 100%) 0% center / 200% 100% text', WebkitTextFillColor: 'transparent'}}>
              Get started
            </span>
</button>

<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Toggle menu" className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg transition text-neutral-300 hover:text-white hover:bg-white/5" id="mobile-menu-toggle" style={{}}>

<svg className="lucide lucide-menu block" data-menu-icon="open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>

<svg className="lucide lucide-x hidden" data-menu-icon="close" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
</div>

<div className="lg:hidden hidden absolute top-16 left-0 right-0 backdrop-blur-xl border-b shadow-2xl animate-slideDown bg-neutral-950/95 border-white/10" id="mobile-menu" style={{}}>
<nav className="flex flex-col px-4 py-6 space-y-4">
<a className="text-base transition py-2 px-3 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5" href="#" style={{}}>
            About
          </a>
<a className="text-base transition py-2 px-3 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5" href="#" style={{}}>
            Benefits
          </a>
<a className="text-base transition py-2 px-3 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5" href="#" style={{}}>
            Features
          </a>
<a className="text-base transition py-2 px-3 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5" href="#" style={{}}>
            Pricing
          </a>
<a className="text-base transition py-2 px-3 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5" href="#" style={{}}>
            FAQ
          </a>
</nav>
</div>
<style>
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      </style>

</header>

<section className="pb-12 relative">
<div className="sm:px-6 lg:px-8 sm:pt-24 max-w-3xl mr-auto ml-auto pt-16 pr-4 pl-4 in-view" data-scroll-animate-children="">
<div className="flex sm:gap-3 w-max rounded-full mr-auto ml-auto pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center justify-center in-view bg-white/5" data-scroll-animate="fade-up" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px'}}>
<span className="inline-flex -space-x-2 pr-2">
<img alt="Customer 1" className="w-6 h-6 object-cover rounded-full ring-2 ring-neutral-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d65d3ad-0fbe-4a33-88e6-e2f43acfa643_800w.webp" style={{}}/>
<img alt="Customer 2" className="h-6 w-6 rounded-full ring-2 object-cover ring-neutral-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/61563867-d875-4481-bc33-80e5be1f705a_320w.webp" style={{}}/>
<img alt="Customer 3" className="w-6 h-6 object-cover ring-2 rounded-full ring-neutral-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eacb0d5f-9d72-4b22-be01-fb1e118870a7_320w.webp" style={{}}/>
<img alt="Customer 4" className="w-6 h-6 object-cover rounded-full ring-2 ring-neutral-900/95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6ed20ae5-f8be-4c56-abdd-7784974ad093_320w.webp" style={{}}/>
</span>
<svg aria-hidden="true" className="iconify text-[18px] iconify--solar text-emerald-400" data-icon="solar:shield-check-bold" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M3.378 5.082C3 5.62 3 7.22 3 10.417v1.574c0 5.638 4.239 8.375 6.899 9.536c.721.315 1.082.473 2.101.473c1.02 0 1.38-.158 2.101-.473C16.761 20.365 21 17.63 21 11.991v-1.574c0-3.198 0-4.797-.378-5.335c-.377-.537-1.88-1.052-4.887-2.081l-.573-.196C13.595 2.268 12.812 2 12 2s-1.595.268-3.162.805L8.265 3c-3.007 1.03-4.51 1.545-4.887 2.082M15.06 10.5a.75.75 0 0 0-1.12-.999l-3.011 3.374l-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
<span className="text-sm text-neutral-300" style={{}}>
            Trusted by 210,000+ teams
          </span>
</div>
<h1 className="sm:text-6xl md:text-7xl in-view text-4xl font-semibold tracking-tight text-center mt-2 mb-2" data-scroll-animate="blur-up" style={{opacity: '1', transform: 'translateY(0px)', maskImage: 'linear-gradient(90deg, transparent, black 55%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 55%, black 60%, transparent)'}}>
          AI‑driven analytics that 4× your growth
        </h1>
<p className="sm:text-lg in-view text-base text-neutral-300 text-center mt-5" data-scroll-animate="fade-up" style={{opacity: '1', transform: 'translateY(0px)', maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)'}}>Turn scattered data into clear decisions. Marqait reveals patterns, forecasts outcomes, and helps you ship what actually moves the metrics.</p>
<div className="flex flex-col sm:flex-row gap-3 mt-8 gap-x-3 gap-y-3 items-center justify-center in-view" data-scroll-animate="fade-up" style={{opacity: '1', transform: 'translateY(0px)'}}>
<button className="inline-flex transition overflow-hidden group text-sm font-medium rounded-full pt-3 pr-5 pb-3 pl-5 relative gap-x-2 gap-y-1 items-center text-white" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.5)';" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.6), 0 0 0 2px rgba(244,63,94,0.3)';" style={{background: 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(10, 10, 10) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 8px 32px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset, rgba(0, 0, 0, 0.5) 0px -1px 0px inset', transform: 'translateY(0px)'}}>
<div className="loader" style={{position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', zIndex: '1', backgroundColor: 'transparent', mask: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)', WebkitMask: 'repeating-linear-gradient(90deg, transparent 0, transparent 6px, black 7px, black 8px)'}}>
<div className="" style={{content: '\'\'', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle at 50% 50%, #f43f5e 0%, transparent 50%), radial-gradient(circle at 45% 45%, #ef4444 0%, transparent 45%), radial-gradient(circle at 55% 55%, #fb7185 0%, transparent 45%), radial-gradient(circle at 45% 55%, #f87171 0%, transparent 45%), radial-gradient(circle at 55% 45%, #dc2626 0%, transparent 45%)', mask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)', WebkitMask: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 10%, black 25%)', animation: 'transform-animation 2s infinite alternate, opacity-animation 4s infinite', animationTimingFunction: 'cubic-bezier(0.6, 0.8, 0.5, 1)', filter: 'drop-shadow(0 0 8px rgba(244, 63, 94, 0.6))'}}></div>
</div>
<span className="" style={{position: 'relative', zIndex: '2', fontFamily: '\'Inter\', sans-serif', fontSize: '1em', fontWeight: '600', userSelect: 'none', color: '#fff', display: 'flex', gap: '0.5rem'}}>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.1s'}}>
                S
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.205s'}}>
                t
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.31s'}}>
                a
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.415s'}}>
                r
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.521s'}}>
                t
              </span>
<span className="" style={{display: 'inline-block', width: '0.3rem'}}></span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.626s'}}>
                f
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.731s'}}>
                r
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.837s'}}>
                e
              </span>
<span className="loader-letter" style={{display: 'inline-block', opacity: '0', animation: 'loader-letter-anim 4s infinite linear', animationDelay: '0.942s'}}>
                e
              </span>
</span>
<style>
              @keyframes transform-animation {
                0% {
                  transform: translate(-55%);
                }
                100% {
                  transform: translate(55%);
                }
              }

              @keyframes opacity-animation {
                0%, 100% {
                  opacity: 0;
                }
                15% {
                  opacity: 1;
                }
                65% {
                  opacity: 0;
                }
              }

              @keyframes loader-letter-anim {
                0% {
                  opacity: 0;
                }
                5% {
                  opacity: 1;
                  text-shadow: 0 0 8px #f43f5e, 0 0 12px #f43f5e;
                  transform: scale(1.1) translateY(-2px);
                }
                20% {
                  opacity: 0.2;
                }
                100% {
                  opacity: 0;
                }
              }
            </style>
</button>
<button className="inline-flex transition overflow-hidden group text-sm rounded-full pt-3 pr-10 pb-3 pl-10 relative gap-x-2 gap-y-2 items-center text-white/90" onmousemove="const rect = this.getBoundingClientRect(); const x = event.clientX - rect.left; const y = event.clientY - rect.top; const centerX = rect.width / 2; const centerY = rect.height / 2; const rotateX = ((y - centerY) / centerY) * -15; const rotateY = ((x - centerX) / centerX) * 15; this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(25px)`; this.style.setProperty('--x', ((x / rect.width) * 100) + '%'); this.style.setProperty('--y', ((y / rect.height) * 100) + '%');" onmouseout="this.style.transform='perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(15px)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1) inset'; this.querySelector('.inner-layer-1').style.opacity='0.6'; this.querySelector('.inner-layer-2').style.opacity='0.4'; this.querySelector('.light-sweep').style.transform='translate(-150%, 150%) rotate(45deg)'; this.querySelector('.depth-shadow').style.opacity='0.5';" onmouseover="this.style.transform='perspective(1000px) rotateX(-10deg) rotateY(8deg) translateZ(25px)'; this.style.boxShadow='0 20px 60px rgba(0,0,0,0.4), inset 0 3px 6px rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.2) inset, 0 0 60px rgba(244,63,94,0.4)'; this.querySelector('.inner-layer-1').style.opacity='1'; this.querySelector('.inner-layer-2').style.opacity='0.8'; this.querySelector('.light-sweep').style.transform='translate(150%, -150%) rotate(45deg)'; this.querySelector('.depth-shadow').style.opacity='1';" style={{'--x': '70.57612485170128%', '--y': '47.99081903026007%', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(255, 255, 255, 0.4) 0px 2px 4px inset, rgba(0, 0, 0, 0.2) 0px -2px 4px inset, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', backdropFilter: 'blur(20px)', transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(15px)'}}>
<div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.05) 100%)', pointerEvents: 'none', zIndex: '1'}}></div>
<div className="inner-layer-1 absolute inset-0 rounded-full" style={{background: 'radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)', opacity: '0.6', pointerEvents: 'none', zIndex: '2'}}></div>
<div className="inner-layer-2 absolute inset-0 rounded-full" style={{background: 'radial-gradient(ellipse at var(--x) var(--y), rgba(244, 63, 94, 0.4) 0%, rgba(251, 113, 133, 0.2) 30%, transparent 60%)', opacity: '0.4', pointerEvents: 'none', filter: 'blur(8px)', zIndex: '3'}}></div>
<div className="light-sweep absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)', transform: 'translate(-150%, 150%) rotate(45deg)', pointerEvents: 'none', filter: 'blur(6px)', width: '200%', height: '200%', top: '-50%', left: '-50%', zIndex: '4'}}></div>
<div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 100%)', pointerEvents: 'none', zIndex: '5'}}></div>
<div className="absolute top-1/4 left-1/4 right-1/4 h-px rounded-full" style={{background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)', pointerEvents: 'none', filter: 'blur(1px)', zIndex: '6'}}></div>
<div className="depth-shadow absolute inset-0 rounded-full" style={{boxShadow: 'rgba(0, 0, 0, 0.3) 0px -4px 8px inset, rgba(255, 255, 255, 0.3) 0px 4px 8px inset', opacity: '0.5', pointerEvents: 'none', zIndex: '7'}}></div>
<span aria-hidden="true" className="iconify text-[18px] relative z-10" data-icon="solar:video-play-bold" style={{textShadow: '0 1px 3px rgba(0,0,0,0.4), 0 0 8px rgba(255,255,255,0.3)', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))'}}></span>
<span className="z-10 relative" style={{textShadow: '0 1px 3px rgba(0, 0, 0, 0.4), 0 0 8px rgba(255,255,255,0.2)'}}>
              Watch demo
            </span>
<div className="absolute -inset-2 rounded-full" style={{background: 'radial-gradient(circle, rgba(244, 63, 94, 0.4) 0%, rgba(251, 113, 133, 0.2) 40%, transparent 70%)', opacity: '0', filter: 'blur(20px)', pointerEvents: 'none', zIndex: '-1'}}></div>
<style>
              button[data-element-id="aura-emhrz05k76ejwhhy1"]:active {
                transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(8px) scale(0.97) !important;
                transition: all 0.15s ease !important;
              }
            </style>
</button>
</div>
</div>

<div className="sm:px-6 lg:px-8 sm:mt-16 max-w-6xl mt-12 mr-auto ml-auto pr-4 pl-4">
<div className="rounded-2xl shadow-2xl backdrop-blur in-view bg-neutral-900/60" data-scroll-animate="blur-up" style={{position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(251, 113, 133, 0), rgba(255, 133, 133, 0.6), rgba(225, 29, 72, 0))', '--border-radius-before': '16px'}}>

<div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-500 to-rose-500 ring-1 ring-white/15" style={{}}>
<svg aria-hidden="true" className="lucide lucide-star w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="star" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</span>
<span className="font-medium">Marqait Console</span>
<span className="ml-2 hidden sm:inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs ring-1 bg-emerald-400/10 text-emerald-300 ring-emerald-400/30" style={{}}>
<svg className="lucide lucide-radical lucide-activity w-[14px] h-[14px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="radical" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(110, 231, 183)', width: '14px', height: '14px'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"></path></svg>
                Live
              </span>
</div>
<div className="hidden md:flex items-center gap-3">
<div className="relative">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(163, 163, 163)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="w-64 rounded-lg pl-9 pr-3 py-2 text-sm placeholder:text-neutral-400 border focus:outline-none focus:ring-2 focus:ring-white/20 bg-white/5 border-white/10" placeholder="Search anything..." style={{}}/>
</div>
<button aria-label="Notifications" className="p-2 rounded-lg transition hover:bg-white/5">
<svg className="lucide lucide-bell" data-icon-replaced="true" data-icon-set="lucide" data-lucide="bell" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(212, 212, 212)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</button>
<img alt="Riley Park" className="h-8 w-8 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=256&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:p-6 pt-4 pr-4 pb-4 pl-4 gap-x-4 gap-y-4">

<aside className="lg:col-span-1 relative" style={{'--main-color': '#f43f5e', '--main-color-opacity': 'rgba(244, 63, 94, 0.11)', '--total-radio': '4'}}>
<style>
                .radio-nav-container {
                  display: flex;
                  flex-direction: column;
                  position: relative;
                  padding-left: 0.5rem;
                }
                .radio-nav-container input {
                  cursor: pointer;
                  appearance: none;
                  position: absolute;
                  opacity: 0;
                  pointer-events: none;
                }
                .radio-nav-container .glider-container {
                  position: absolute;
                  left: 0;
                  top: 0;
                  bottom: 0;
                  background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0) 0%,
                    rgba(27, 27, 27, 1) 50%,
                    rgba(0, 0, 0, 0) 100%
                  );
                  width: 1px;
                  pointer-events: none;
                }
                .radio-nav-container .glider-container .glider {
                  position: relative;
                  height: calc(100% / var(--total-radio));
                  width: 100%;
                  background: linear-gradient(
                    0deg,
                    rgba(0, 0, 0, 0) 0%,
                    var(--main-color) 50%,
                    rgba(0, 0, 0, 0) 100%
                  );
                  transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56);
                }
                .radio-nav-container .glider-container .glider::before {
                  content: "";
                  position: absolute;
                  height: 60%;
                  width: 300%;
                  top: 50%;
                  transform: translateY(-50%);
                  background: var(--main-color);
                  filter: blur(10px);
                }
                .radio-nav-container .glider-container .glider::after {
                  content: "";
                  position: absolute;
                  left: 0;
                  height: 100%;
                  width: 150px;
                  background: linear-gradient(
                    90deg,
                    var(--main-color-opacity) 0%,
                    rgba(0, 0, 0, 0) 100%
                  );
                }
                .radio-nav-container label {
                  cursor: pointer;
                  padding: 0.75rem;
                  position: relative;
                  color: rgb(163, 163, 163);
                  transition: all 0.3s ease-in-out;
                  border-radius: 0.75rem;
                  border: 1px solid transparent;
                  display: flex;
                  align-items: center;
                  gap: 0.5rem;
                }
                .radio-nav-container input:checked + label {
                  color: var(--main-color);
                  background: rgba(255, 255, 255, 0.05);
                  border-color: rgba(255, 255, 255, 0.1);
                }
                .radio-nav-container input:nth-of-type(1):checked ~ .glider-container .glider {
                  transform: translateY(0);
                }
                .radio-nav-container input:nth-of-type(2):checked ~ .glider-container .glider {
                  transform: translateY(100%);
                }
                .radio-nav-container input:nth-of-type(3):checked ~ .glider-container .glider {
                  transform: translateY(200%);
                }
                .radio-nav-container input:nth-of-type(4):checked ~ .glider-container .glider {
                  transform: translateY(300%);
                }
              </style>
<div className="radio-nav-container">
<input checked="" id="nav-home" name="nav-menu" type="radio"/>
<label className="text-sm" htmlFor="nav-home">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
                  Home
                </label>
<input id="nav-dashboard" name="nav-menu" type="radio"/>
<label className="text-sm" htmlFor="nav-dashboard">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
<rect height="12" rx="1" width="4" x="15" y="5"></rect>
<rect height="9" rx="1" width="4" x="7" y="8"></rect>
</svg>
                  Dashboard
                </label>
<input id="nav-calendar" name="nav-menu" type="radio"/>
<label className="text-sm" htmlFor="nav-calendar">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
<path d="M8 14h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 18h.01"></path>
<path d="M12 18h.01"></path>
<path d="M16 18h.01"></path>
</svg>
                  Calendar
                </label>
<input id="nav-projects" name="nav-menu" type="radio"/>
<label className="text-sm" htmlFor="nav-projects">
<svg className="w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"></path>
<path d="M8 10h8"></path>
<path d="M8 18h8"></path>
<path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"></path>
<path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"></path>
</svg>
                  Projects
                </label>
<div className="glider-container">
<div className="glider"></div>
</div>
</div>
</aside>

<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="sm:p-5 border rounded-xl pt-4 pr-4 pb-4 pl-4 bg-white/5 border-white/10" data-card="revenue">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-activity w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path>
</svg>
<h3 className="text-sm font-medium">Total Revenue</h3>
</div>
<span className="text-xs ring-1 px-2 py-0.5 rounded-full text-emerald-300 bg-emerald-400/10 ring-emerald-400/30">
                    ↑ 80%
                  </span>
</div>
<div className="flex gap-2 mt-3 gap-x-2 gap-y-2 items-baseline">
<span className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    $6,577.44
                  </span>
<span className="text-xs text-neutral-400" style={{}}>
                    vs previous 28 days
                  </span>
</div>
<div className="mt-4">
<div className="h-28 rounded-lg border p-2 relative overflow-hidden bg-neutral-900/70 border-white/10" style={{background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.08) 0%, rgba(251, 113, 133, 0.05) 100%)'}}>
<div className="h-full">
<canvas aria-label="Revenue chart" data-canvas="rev" height="118" style={{display: 'block', boxSizing: 'border-box', height: '94px', width: '291px'}} width="363"></canvas>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{mixBlendMode: 'screen', opacity: '0.45'}}>
<div className="warp-loader">
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
<div className="core-glow"></div>
</div>
</div>
<style>
                      .warp-loader {
                        position: relative;
                        width: 160px;
                        height: 160px;
                      }

                      .ring {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        background: radial-gradient(
                          circle,
                          rgba(244, 63, 94, 0.15) 30%,
                          transparent 70%
                        );
                        animation: pulse 2.2s ease-out infinite;
                        opacity: 0;
                        box-shadow:
                          0 0 12px rgba(244, 63, 94, 0.4),
                          0 0 24px rgba(244, 63, 94, 0.2);
                        border: 2px solid rgba(244, 63, 94, 0.2);
                      }

                      .ring:nth-child(1) {
                        animation-delay: 0s;
                      }
                      .ring:nth-child(2) {
                        animation-delay: 0.4s;
                      }
                      .ring:nth-child(3) {
                        animation-delay: 0.8s;
                      }
                      .ring:nth-child(4) {
                        animation-delay: 1.2s;
                      }

                      @keyframes pulse {
                        0% {
                          transform: translate(-50%, -50%) scale(0.3);
                          opacity: 1;
                        }
                        70% {
                          transform: translate(-50%, -50%) scale(1.1);
                          opacity: 0.15;
                        }
                        100% {
                          transform: translate(-50%, -50%) scale(1.4);
                          opacity: 0;
                        }
                      }

                      .core-glow {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 24px;
                        height: 24px;
                        transform: translate(-50%, -50%);
                        border-radius: 50%;
                        background: radial-gradient(circle at center, #f43f5e, #dc2626);
                        box-shadow:
                          0 0 25px #f43f5e,
                          0 0 60px rgba(244, 63, 94, 0.5),
                          0 0 100px rgba(244, 63, 94, 0.2);
                        animation: corePulse 1.6s ease-in-out infinite;
                      }

                      @keyframes corePulse {
                        0%,
                        100% {
                          transform: translate(-50%, -50%) scale(1);
                        }
                        50% {
                          transform: translate(-50%, -50%) scale(1.2);
                        }
                      }
                    </style>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-sm">
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<div className="text-xs text-neutral-400" style={{}}>Earnings</div>
<div className="font-medium mt-1">$4,210</div>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<div className="text-xs text-neutral-400" style={{}}>Profit</div>
<div className="font-medium mt-1">$1,950</div>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<div className="text-xs text-neutral-400" style={{}}>Cashback</div>
<div className="font-medium mt-1">$417</div>
</div>
</div>


</div>

<div className="rounded-xl border p-4 sm:p-5 border-white/10 bg-white/5" data-card="growth">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-chart-no-axes-column lucide-trending-up w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="chart-no-axes-column" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(56, 189, 248)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="18" y1="20" y2="10"></line><line x1="12" x2="12" y1="20" y2="4"></line><line x1="6" x2="6" y1="20" y2="14"></line></svg>
<h3 className="text-sm font-medium">Revenue Growth</h3>
</div>
<span className="text-xs ring-1 px-2 py-0.5 rounded-full text-sky-300 bg-sky-400/10 ring-sky-400/30" style={{}}>
                    ↑ 78%
                  </span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<div className="text-xs text-neutral-400" style={{}}>Weekly report</div>
<div className="font-medium mt-1">$6,812.31</div>
</div>
<div className="rounded-lg border p-3 bg-white/5 border-white/10">
<div className="text-xs text-neutral-400" style={{}}>Qualified</div>
<div className="font-medium mt-1">8,214</div>
</div>
</div>
<div className="mt-4">
<div className="h-28 rounded-lg border p-2 bg-neutral-900/70 border-white/10" style={{}}>
<div className="h-full">
<canvas className="" data-canvas="growth" height="118" style={{display: 'block', boxSizing: 'border-box', height: '94px', width: '291px'}} width="363"></canvas>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-sm text-neutral-300" style={{}}>
<svg className="lucide lucide-badge lucide-target w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="badge" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path></svg>
                  Projected week revenue:
                  <span className="font-medium text-white">$7,204.12</span>
</div>



</div>

<div className="md:col-span-2 rounded-xl border p-4 sm:p-5 border-white/10 bg-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-alarm-clock-check lucide-clock w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="alarm-clock-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(167, 139, 250)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8"></circle><path d="M5 3 2 6"></path><path d="m22 6-3-3"></path><path d="M6.38 18.7 4 21"></path><path d="M17.64 18.67 20 21"></path><path d="m9 13 2 2 4-4"></path></svg>
<h3 className="text-sm font-medium">Today</h3>
</div>
<button className="text-xs rounded-lg border px-2.5 py-1 transition border-white/10 bg-white/5 hover:bg-white/10">
                    View all
                  </button>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-lg border p-3 bg-neutral-900/70 border-white/10" style={{}}>
<div className="text-xs text-neutral-400" style={{}}>9:00 AM</div>
<div className="mt-1 font-medium">Standup with Platform</div>
<div className="mt-1 text-xs flex items-center gap-1 text-neutral-400" style={{}}>
<svg className="lucide lucide-users" fill="none" height="16" stroke="currentColor" strokeWidth="2" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-44v2"></path>
<circle cx="12" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M6 17.13A4 4 0 0 0 3 19v2"></path>
</svg>
                      10 attendees
                    </div>
</div>
<div className="rounded-lg border p-3 bg-neutral-900/70 border-white/10" style={{}}>
<div className="text-xs text-neutral-400" style={{}}>11:30 AM</div>
<div className="mt-1 font-medium">Roadmap grooming</div>
<div className="mt-1 text-xs flex items-center gap-1 text-neutral-400" style={{}}>
<svg className="lucide lucide-flask-conical" fill="none" height="16" stroke="currentColor" strokeWidth="2" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M10 2v8"></path>
<path d="M8.5 2h3"></path>
<path d="M5 22h14"></path>
<path d="M19 10H5"></path>
<path d="M6 20l-1-4l6-6l6 6l-1 4"></path>
</svg>
                      A/B rollout plan
                    </div>
</div>
<div className="rounded-lg border p-3 bg-neutral-900/70 border-white/10" style={{}}>
<div className="text-xs text-neutral-400" style={{}}>2:15 PM</div>
<div className="mt-1 font-medium">Finance update draft</div>
<div className="mt-1 text-xs flex items-center gap-1 text-neutral-400" style={{}}>
<svg className="lucide lucide-file-text" fill="none" height="16" stroke="currentColor" strokeWidth="2" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14 2H6a2 2 0 0 0-2 2v16l4-4h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path>
<path className="" d="M8 7h8"></path>
<path d="M8 11h8"></path>
</svg>
                      ARR target: $3.8M
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="pointer-events-none w-full h-px bg-white/10"></div>
<section className="sm:py-24 pt-16 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12" data-scroll-animate-children="">
<span className="text-sm font-medium text-center text-rose-400" style={{}}>
            Features
          </span>
<h2 className="sm:text-4xl md:text-5xl text-3xl font-semibold tracking-tight text-center mt-2" style={{opacity: '1', transform: 'translateY(0px)'}}>
            Sharper features for faster decisions
          </h2>
<p className="sm:text-lg text-base text-center mt-4 text-neutral-300" style={{opacity: '1', transform: 'translateY(0px)'}}>
            Opinionated defaults, clear insights, and embedded intelligence so
            every team can move with confidence.
          </p>
</div>

<div className="overflow-hidden sm:p-8 bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e462543-eb2b-45e3-ab99-f68cecbaef90_1600w.jpg)] max-w-fit bg-cover border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative bg-neutral-900/70 border-white/10" data-card="hero-feature" data-scroll-animate="fade-up" style={{}}>
<div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none" style={{background: 'radial-gradient(120% 120% at 50% 120%, rgba(244,63,94,0.25) 0%, rgba(244,63,94,0.12) 35%, rgba(244,63,94,0.05) 55%, rgba(0,0,0,0) 75%)'}}></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
<div className="">
<h3 className="text-xl font-medium">
                Transparent Reporting Made Simple
              </h3>
<p className="mt-3 text-sm text-neutral-300" style={{}}>
                Build shareable reports your whole org understands. No hidden
                metrics—just precise, readable insights your team can act on.
              </p>
<div className="slide-up stagger-3 flex flex-col sm:flex-row gap-4 gap-x-4 gap-y-4 justify-start">
<title>Purple Glow-Follow Button</title>
<style>
                  :root {
                    --glow-core: rgba(255, 255, 255, 0.8);
                    --glow-color: rgba(192, 132, 252, 0.35);
                    /* soft purple */
                    --glow-color-strong: rgba(192, 132, 252, 0.55);
                    /* stronger purple */
                  }

                  body {
                    min-height: 100vh;
                    display: grid;
                    place-items: center;
                    background: #0d1117;
                    margin: 0;
                    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
                  }

                  .glow-btn {
                    --x: 50%;
                    --y: 50%;
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    appearance: none;
                    border: 1px solid #e5e7eb;
                    background: #fff;
                    color: #111827;
                    padding: 14px 28px;
                    font-weight: 700;
                    border-radius: 9999px;
                    /* fully round */
                    cursor: pointer;
                    letter-spacing: .2px;
                    transition: transform .2s ease, border-color .2s ease;
                    box-shadow: 0 1px 2px rgba(0, 0, 0, .05), 0 8px 24px rgba(0, 0, 0, .08);
                    isolation: isolate;
                  }

                  .glow-btn:hover {
                    transform: translateY(-1px);
                    border-color: #d1d5db;
                  }

                  .glow-btn::before,
                  .glow-btn::after {
                    content: "";
                    position: absolute;
                    inset: -4px;
                    border-radius: inherit;
                    pointer-events: none;
                    opacity: 0;
                    transition: opacity .2s ease;
                    will-change: background;
                    z-index: -1;
                  }

                  .glow-btn::before {
                    background:
                      radial-gradient(90px 90px at var(--x) var(--y),
                        var(--glow-core) 0%,
                        rgba(255, 255, 255, 0.25) 45%,
                        transparent 70%),
                      radial-gradient(140px 140px at var(--x) var(--y),
                        var(--glow-color-strong) 0%,
                        transparent 75%);
                    mix-blend-mode: screen;
                  }

                  .glow-btn::after {
                    inset: -8px;
                    border-radius: inherit;
                    background:
                      radial-gradient(200px 200px at var(--x) var(--y),
                        var(--glow-color) 0%,
                        transparent 80%);
                    filter: blur(20px);
                    z-index: -2;
                  }

                  .glow-btn:hover::before,
                  .glow-btn:hover::after {
                    opacity: 1;
                  }

                  .icon-box {
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                  }

                  .icon-box svg {
                    width: 20px;
                    height: 20px;
                    stroke: currentColor;
                  }
                </style>
<button className="glow-btn my-6" style={{'--x': '135px', '--y': '10.25px'}}>
<span className="icon-box">

<svg className="lucide lucide-arrow-right w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(17, 24, 39)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
                  Get Started
                </button>

</div>
</div>
<div className="relative">

<div className="-top-2 [--fx-filter:blur(10px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] sm:w-80 w-64 border rounded-xl px-4 py-4 absolute right-0 backdrop-blur bg-neutral-900/20 border-white/10" style={{}}>
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-300" style={{}}>Total Revenue</span>
<button aria-label="More" className="p-1 rounded transition hover:bg-white/5">
<svg className="lucide lucide-more-horizontal w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="mingcute" data-mingcute="more-1-line" fill="none" height="18" stroke="currentColor" strokeWidth="1" style={{width: '18px', height: '18px', color: 'rgb(245, 245, 245)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none">
<path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
<path d="M6 10.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m6 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" fill="#f5f5f5"></path>
</g>
</svg>
</button>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">
                  $86,577.41
                </div>
<div className="mt-3 h-24 rounded-lg border p-2 bg-neutral-900/70 border-white/10" style={{}}>
<div className="h-full">
<canvas className="" data-canvas="hero-line" height="98" style={{display: 'block', boxSizing: 'border-box', height: '78px', width: '268px'}} width="336"></canvas>
</div>
</div>
</div>

<div className="sm:mt-32 lg:mt-24 w-full max-w-sm border ring-1 rounded-xl mt-32 pt-4 pr-4 pb-4 pl-4 relative backdrop-blur [--fx-filter:blur(13px)_liquid-glass(5,10)_saturate(1.25)_noise(0.5,1,0)] bg-neutral-900/10 border-white/10 ring-white/10" style={{}}>
<div className="text-xs text-neutral-300" style={{}}>Revenue Growth</div>
<div className="text-[13px] text-neutral-400" style={{}}>Weekly report</div>
<div className="mt-2 flex items-baseline gap-2">
<div className="text-3xl font-semibold tracking-tight">
                    $6,742.77
                  </div>
<span className="inline-flex items-center gap-1 text-xs ring-1 px-1.5 py-0.5 rounded-full text-emerald-300 bg-emerald-400/10 ring-emerald-400/30" style={{}}>
                    8.0%
                  </span>
</div>
<div className="h-28 border rounded-lg mt-3 pt-2 pr-2 pb-2 pl-2 overflow-hidden relative bg-neutral-900/70 border-white/10" style={{background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.1) 0%, rgba(56, 189, 248, 0.1) 100%)'}}>
<div className="h-full relative">
<canvas className="" data-canvas="hero-bars" height="118" style={{display: 'block', boxSizing: 'border-box', height: '94px', width: '332px'}} width="416"></canvas>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{mixBlendMode: 'screen', opacity: '0.3'}}>
<defs className=""></defs>

<g className="schema-lines" style={{animation: 'schemaFloat 4s ease-in-out infinite'}}>
<line className="" filter="url(#glow)" opacity="0.6" stroke="url(#schemaGrad1)" strokeWidth="1.5" style={{animation: 'schemaPulse 2s ease-in-out infinite'}} x1="10%" x2="30%" y1="20%" y2="50%"></line>
<line className="" filter="url(#glow)" opacity="0.6" stroke="url(#schemaGrad1)" strokeWidth="1.5" style={{animation: 'schemaPulse 2s ease-in-out 0.3s infinite'}} x1="30%" x2="50%" y1="50%" y2="30%"></line>
<line className="" filter="url(#glow)" opacity="0.6" stroke="url(#schemaGrad1)" strokeWidth="1.5" style={{animation: 'schemaPulse 2s ease-in-out 0.6s infinite'}} x1="50%" x2="70%" y1="30%" y2="60%"></line>
<line className="" filter="url(#glow)" opacity="0.6" stroke="url(#schemaGrad1)" strokeWidth="1.5" style={{animation: 'schemaPulse 2s ease-in-out 0.9s infinite'}} x1="70%" x2="90%" y1="60%" y2="40%"></line>
</g>

<circle className="" cx="10%" cy="20%" fill="rgb(244,63,94)" filter="url(#glow)" r="3" style={{animation: 'schemaNode 2s ease-in-out infinite'}}></circle>
<circle className="" cx="30%" cy="50%" fill="rgb(168,85,247)" filter="url(#glow)" r="3" style={{animation: 'schemaNode 2s ease-in-out 0.3s infinite'}}></circle>
<circle className="" cx="50%" cy="30%" fill="rgb(56,189,248)" filter="url(#glow)" r="3" style={{animation: 'schemaNode 2s ease-in-out 0.6s infinite'}}></circle>
<circle className="" cx="70%" cy="60%" fill="rgb(251,191,36)" filter="url(#glow)" r="3" style={{animation: 'schemaNode 2s ease-in-out 0.9s infinite'}}></circle>
<circle className="" cx="90%" cy="40%" fill="rgb(52,211,153)" filter="url(#glow)" r="3" style={{animation: 'schemaNode 2s ease-in-out 1.2s infinite'}}></circle>
</svg>
</div>
<style>
                    @keyframes schemaFloat {

                      0%,
                      100% {
                        transform: translateY(0px);
                      }

                      50% {
                        transform: translateY(-3px);
                      }
                    }

                    @keyframes schemaPulse {

                      0%,
                      100% {
                        opacity: 0.4;
                        stroke-width: 1.5;
                      }

                      50% {
                        opacity: 0.8;
                        stroke-width: 2;
                      }
                    }

                    @keyframes schemaNode {

                      0%,
                      100% {
                        transform: scale(1);
                        opacity: 0.8;
                      }

                      50% {
                        transform: scale(1.4);
                        opacity: 1;
                      }
                    }
                  </style>
</div>
</div>



</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 gap-x-6 gap-y-6">

<div className="border rounded-2xl pt-6 pr-6 pb-6 pl-6 bg-neutral-900/70 border-white/10" data-card="advanced-analytics" style={{}}>
<h3 className="text-xl font-medium">Advanced analytics</h3>
<p className="mt-3 text-sm text-neutral-300" style={{}}>
              Adapt dashboards to your team's process with metrics, segments,
              and cohorts that match how you work.
            </p>
<div className="border rounded-xl mt-5 pt-4 pr-4 pb-4 pl-4 bg-neutral-900/70 border-white/10" style={{}}>
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300" style={{}}>Earning Reports</div>
<span className="text-xs ring-1 px-2 py-0.5 rounded-full text-amber-300 bg-amber-400/10 ring-amber-400/30" style={{}}>
                  78%
                </span>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">
                $8,214.61
              </div>
<div className="overflow-hidden flex h-40 border rounded-lg mt-3 pt-4 pr-4 pb-4 pl-4 relative items-center justify-center bg-neutral-900/70 border-white/10" style={{background: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 30%, transparent 70%)'}}>

<div className="loader-main" style={{position: 'relative', width: '140px', height: '140px', borderRadius: '50%', overflow: 'hidden'}}>

<div style={{position: 'absolute', inset: '0', borderRadius: '50%', border: '4px solid transparent', borderTopColor: 'rgba(244, 63, 94, 0.6)', animation: 'loader-spin 2s linear infinite'}}></div>

<div style={{position: 'absolute', inset: '10%', borderRadius: '50%', background: 'conic-gradient(from 90deg, rgba(244, 63, 94, 0.3), transparent)', filter: 'blur(2px)', animation: 'loader-spin-reverse 1.5s linear infinite'}}></div>

<div style={{position: 'absolute', top: '50%', left: '50%', width: '50px', height: '50px', background: 'rgba(244, 63, 94, 0.9)', borderRadius: '50%', transform: 'translate(-50%, -50%)', boxShadow: '0 0 15px rgba(244, 63, 94, 0.6)', animation: 'loader-pulse 1s ease-in-out infinite', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<span style={{fontSize: '16px', fontWeight: '600', color: 'white', fontFamily: 'Inter, system-ui'}}>
                      78%
                    </span>
</div>

<div style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', animation: 'orbit-rotate 3s linear infinite'}}>

<div style={{position: 'absolute', left: '50%', top: '50%', width: '8px', height: '8px', background: 'rgba(244, 63, 94, 0.8)', borderRadius: '50%', transform: 'rotate(0deg) translate(60px)', boxShadow: '0 0 8px rgba(244, 63, 94, 0.6)'}}></div>
<div style={{position: 'absolute', left: '50%', top: '50%', width: '8px', height: '8px', background: 'rgba(251, 113, 133, 0.8)', borderRadius: '50%', transform: 'rotate(90deg) translate(60px)', boxShadow: '0 0 8px rgba(251, 113, 133, 0.6)'}}></div>
<div style={{position: 'absolute', left: '50%', top: '50%', width: '8px', height: '8px', background: 'rgba(252, 165, 165, 0.8)', borderRadius: '50%', transform: 'rotate(180deg) translate(60px)', boxShadow: '0 0 8px rgba(252, 165, 165, 0.6)'}}></div>
<div style={{position: 'absolute', left: '50%', top: '50%', width: '8px', height: '8px', background: 'rgba(244, 63, 94, 0.8)', borderRadius: '50%', transform: 'rotate(270deg) translate(60px)', boxShadow: '0 0 8px rgba(244, 63, 94, 0.6)'}}></div>
</div>

<div style={{position: 'absolute', inset: '0', borderRadius: '50%', background: 'radial-gradient(circle at center, rgba(244, 63, 94, 0.2) 0%, transparent 70%)', animation: 'loader-pulse 2s ease-in-out infinite'}}></div>
</div>
<style>
                  @keyframes loader-spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }

                  @keyframes loader-spin-reverse {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(-360deg); }
                  }

                  @keyframes loader-pulse {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
                    50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.9; }
                  }

                  @keyframes orbit-rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                  }
                </style>
</div>
</div>
</div>

<div className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="scalable-solutions" style={{}}>
<h3 className="text-xl font-medium">Scalable Solutions</h3>
<p className="mt-3 text-sm text-neutral-300" style={{}}>
              Grow without rewrites. Our pipelines scale from thousands to
              billions of events with the same interface.
            </p>
<div className="mt-5 rounded-xl border p-4 border-white/10 bg-neutral-900/70" style={{}}>
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300" style={{}}>Activities</div>
<div className="flex items-center gap-2 text-xs text-neutral-400" style={{}}>
<span className="inline-flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-rose-400" style={{}}></span>
                    Legend 1
                  </span>
<span className="inline-flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-rose-500" style={{}}></span>
                    Legend 2
                  </span>
<span className="inline-flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-rose-300" style={{}}></span>
                    Legend 3
                  </span>
</div>
</div>
<div className="mt-3 h-36 rounded-lg border p-2 relative overflow-hidden bg-neutral-900/70 border-white/10" style={{background: 'linear-gradient(135deg, rgba(244, 63, 94, 0.08) 0%, rgba(251, 113, 133, 0.05) 100%)'}}>
<div className="h-full">
<canvas className="" data-canvas="ss-lines" height="158" style={{display: 'block', boxSizing: 'border-box', height: '126px', width: '391px'}} width="489"></canvas>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{mixBlendMode: 'screen', opacity: '0.3'}}>
<defs></defs>

<circle cx="50%" cy="50%" fill="rgb(244,63,94)" filter="url(#glowRed2)" r="4" style={{animation: 'schemaCentralPulse 3s ease-in-out infinite'}}></circle>
<circle cx="50%" cy="50%" fill="none" opacity="0.4" r="8" stroke="rgb(244,63,94)" strokeWidth="0.5" style={{animation: 'schemaRipple 3s ease-out infinite'}}></circle>
<circle cx="50%" cy="50%" fill="none" opacity="0.3" r="12" stroke="rgb(251,113,133)" strokeWidth="0.5" style={{animation: 'schemaRipple 3s ease-out 0.5s infinite'}}></circle>

<g style={{animation: 'schemaRotate 20s linear infinite'}}>
<line filter="url(#glowRed2)" opacity="0.5" stroke="url(#schemaRadialRed)" strokeWidth="1" style={{animation: 'schemaPulseRadial 2s ease-in-out infinite'}} x1="50%" x2="20%" y1="50%" y2="20%"></line>
<line filter="url(#glowRed2)" opacity="0.5" stroke="url(#schemaRadialRed)" strokeWidth="1" style={{animation: 'schemaPulseRadial 2s ease-in-out 0.3s infinite'}} x1="50%" x2="80%" y1="50%" y2="25%"></line>
<line filter="url(#glowRed2)" opacity="0.5" stroke="url(#schemaRadialRed)" strokeWidth="1" style={{animation: 'schemaPulseRadial 2s ease-in-out 0.6s infinite'}} x1="50%" x2="85%" y1="50%" y2="70%"></line>
<line filter="url(#glowRed2)" opacity="0.5" stroke="url(#schemaRadialRed)" strokeWidth="1" style={{animation: 'schemaPulseRadial 2s ease-in-out 0.9s infinite'}} x1="50%" x2="25%" y1="50%" y2="75%"></line>
</g>

<circle cx="20%" cy="20%" fill="rgb(251,113,133)" filter="url(#glowRed2)" r="2.5" style={{animation: 'schemaNodePulse 2s ease-in-out infinite'}}></circle>
<circle cx="80%" cy="25%" fill="rgb(244,63,94)" filter="url(#glowRed2)" r="2.5" style={{animation: 'schemaNodePulse 2s ease-in-out 0.3s infinite'}}></circle>
<circle cx="85%" cy="70%" fill="rgb(251,113,133)" filter="url(#glowRed2)" r="2.5" style={{animation: 'schemaNodePulse 2s ease-in-out 0.6s infinite'}}></circle>
<circle cx="25%" cy="75%" fill="rgb(244,63,94)" filter="url(#glowRed2)" r="2.5" style={{animation: 'schemaNodePulse 2s ease-in-out 0.9s infinite'}}></circle>

<circle cx="50%" cy="50%" fill="rgb(252,165,165)" opacity="0.8" r="3" style={{animation: 'schemaTransmit 3s ease-out infinite'}}>
<animate attributename="r" dur="3s" repeatcount="indefinite" values="3;18;3"></animate>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.8;0;0.8"></animate>
</circle>
<circle cx="50%" cy="50%" fill="rgb(254,202,202)" opacity="0.6" r="3" style={{animation: 'schemaTransmit 3s ease-out 1s infinite'}}>
<animate attributename="r" dur="3s" repeatcount="indefinite" values="3;18;3"></animate>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.6;0;0.6"></animate>
</circle>

<text fill="rgb(244,63,94)" fontFamily="monospace" fontSize="6" opacity="0.4" style={{animation: 'schemaBinary 4s linear infinite'}} x="10%" y="15%">
                    1010
                  </text>
<text fill="rgb(251,113,133)" fontFamily="monospace" fontSize="6" opacity="0.4" style={{animation: 'schemaBinary 4s linear 0.5s infinite'}} x="85%" y="18%">
                    0110
                  </text>
<text fill="rgb(244,63,94)" fontFamily="monospace" fontSize="6" opacity="0.4" style={{animation: 'schemaBinary 4s linear 1s infinite'}} x="88%" y="80%">
                    1100
                  </text>
<text fill="rgb(251,113,133)" fontFamily="monospace" fontSize="6" opacity="0.4" style={{animation: 'schemaBinary 4s linear 1.5s infinite'}} x="15%" y="85%">
                    0101
                  </text>
</svg>
<style>
                  @keyframes schemaCentralPulse {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.3); opacity: 0.8; }
                  }

                  @keyframes schemaRipple {
                    0% { r: 8; opacity: 0.4; }
                    100% { r: 24; opacity: 0; }
                  }

                  @keyframes schemaRotate {
                    from { transform: rotate(0deg); transform-origin: center; }
                    to { transform: rotate(360deg); transform-origin: center; }
                  }

                  @keyframes schemaPulseRadial {
                    0%, 100% { opacity: 0.3; stroke-width: 0.5; }
                    50% { opacity: 0.7; stroke-width: 1.2; }
                  }

                  @keyframes schemaNodePulse {
                    0%, 100% { transform: scale(1); opacity: 0.8; }
                    50% { transform: scale(1.4); opacity: 1; }
                  }

                  @keyframes schemaTransmit {
                    0% { transform: scale(1); }
                    100% { transform: scale(6); }
                  }

                  @keyframes schemaBinary {
                    0%, 100% { opacity: 0; }
                    10%, 90% { opacity: 0.4; }
                    50% { opacity: 0.6; }
                  }
                </style>
</div>
</div>


</div>
</div>
</div>
</section>
<div className="pointer-events-none w-full h-px bg-white/10"></div>
<section className="sm:py-24 pt-16 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="mb-12 text-center" data-scroll-animate="fade-up" data-scroll-animate-children="">
<span className="text-sm font-medium text-rose-400" style={{}}>Pricing</span>
<h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight" style={{opacity: '1', transform: 'translateY(0px)'}}>
            Know exactly what you pay, no hidden fees, no surprises.
          </h2>
<p className="mt-4 text-base sm:text-lg text-neutral-300" style={{opacity: '1', transform: 'translateY(0px)'}}>
            Switch billing anytime. Save more on annual plans.
          </p>

<div aria-label="Billing period" className="inline-flex overflow-hidden rounded-lg mt-6" role="tablist" style={{position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(248, 113, 113, 0), rgba(220, 38, 38, 0.25))', '--border-radius-before': '8px', opacity: '1', transform: 'translateY(0px)'}}>
<button aria-controls="pricing-grid" aria-selected="true" className="px-4 py-2 text-sm font-medium bg-white text-neutral-900" data-billing="monthly" style={{}}>
              Monthly
            </button>
<button aria-controls="pricing-grid" aria-selected="false" className="transition text-sm font-medium bg-[radial-gradient(circle_at_right,var(--tw-gradient-stops))] pt-2 pr-4 pb-2 pl-4 hover:bg-white/5 text-neutral-300 from-red-400/10 to-red-600/0" data-billing="annual" style={{}}>
              Annual
            </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6" data-scroll-animate-children="" id="pricing-grid">

<div className="flex flex-col overflow-hidden bg-gradient-to-br rounded-2xl pt-6 pr-6 pb-6 pl-6 from-white/10 to-white/0" data-card="plan-free" id="pricing-card-free" style={{position: 'relative', transformStyle: 'preserve-3d', transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)'}}>
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(120% 120% at 93.917% 7.53579%, rgba(244, 63, 94, 0.25) 0%, rgba(244, 63, 94, 0.12) 35%, rgba(244, 63, 94, 0.05) 55%, rgba(0, 0, 0, 0) 75%)', opacity: '0'}}></div>
<div className="text-sm relative text-neutral-300" style={{}}>Free</div>
<div className="mt-2 flex items-baseline gap-2 relative">
<div aria-atomic="true" aria-live="polite" className="text-3xl font-semibold tracking-tight">
                $0
              </div>
<div className="text-sm text-neutral-400" style={{}}>per user/month</div>
</div>
<div className="mt-1 text-xs relative text-neutral-400" style={{}}>
<span data-billing-copy="">billed monthly</span>
</div>
<div className="mt-5 text-xs uppercase relative text-neutral-400" style={{}}>
              For students
            </div>
<ul className="mt-3 space-y-2 text-sm relative text-neutral-300" style={{}}>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Basic analytics and reporting
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Essential features
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Community support
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Limited customization
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Single project
              </li>
</ul>
<div className="mt-6 pt-4 relative">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition border-rose-400/40 text-rose-400 hover:bg-white/5" style={{}}>
                Get started
              </button>
</div>

</div>

<div className="overflow-hidden flex flex-col rounded-2xl ring-1 pt-6 pr-6 pb-6 pl-6 relative bg-neutral-900/80 ring-white/10" data-card="plan-pro" id="pricing-card-pro" style={{position: 'relative', '--border-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '16px', transformStyle: 'preserve-3d', transform: 'translateY(0px)', opacity: '1'}}>

<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(120% 120% at 79.7819% 94.743%, rgba(244, 63, 94, 0.25) 0%, rgba(244, 63, 94, 0.12) 35%, rgba(244, 63, 94, 0.05) 55%, rgba(0, 0, 0, 0) 75%)'}}></div>
<div className="relative flex items-center justify-between">
<div className="text-sm text-neutral-300" style={{}}>Pro</div>
<span className="inline-flex items-center gap-1 text-xs bg-rose-500 px-2 py-0.5 rounded-full ring-1 text-white ring-white/20" style={{}}>
                Popular
              </span>
</div>
<div className="relative mt-2 flex items-baseline gap-2">
<div aria-atomic="true" aria-live="polite" className="text-3xl font-semibold tracking-tight">
<span data-annual="15" data-monthly="19" data-plan-price="">
                  $19
                </span>
</div>
<div className="text-sm text-neutral-400" style={{}}>per user/month</div>
</div>
<div className="relative mt-1 text-xs text-neutral-400" style={{}}>
<span data-billing-copy="">billed monthly</span>
</div>
<div className="relative text-neutral-400" style={{}}>For growing teams</div>
<ul className="relative mt-3 space-y-2 text-sm text-neutral-300" style={{}}>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Custom dashboards and segments
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Role‑based access &amp; SSO
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Priority support
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Advanced analytics
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                API &amp; webhooks
              </li>
</ul>
<div className="relative mt-6 pt-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition bg-white text-neutral-900 hover:bg-neutral-100" style={{}}>
                Get started
              </button>
</div>

</div>

<div className="flex flex-col overflow-hidden bg-gradient-to-br rounded-2xl pt-6 pr-6 pb-6 pl-6 from-white/10 to-white/0" data-card="plan-enterprise" id="pricing-card-enterprise" style={{position: 'relative', transformStyle: 'preserve-3d', transform: 'translateY(0px)', opacity: '1'}}>
<div className="absolute inset-0 pointer-events-none" style={{background: 'radial-gradient(120% 120% at 37.4425% 95.515%, rgba(244, 63, 94, 0.25) 0%, rgba(244, 63, 94, 0.12) 35%, rgba(244, 63, 94, 0.05) 55%, rgba(0, 0, 0, 0) 75%)', opacity: '0'}}></div>
<div className="text-sm relative text-neutral-300" style={{}}>Enterprise</div>
<div className="mt-2 flex items-baseline gap-2 relative">
<div aria-atomic="true" aria-live="polite" className="text-3xl font-semibold tracking-tight">
<span className="" data-annual="99" data-monthly="129" data-plan-price="">
                  $129
                </span>
</div>
<div className="text-sm text-neutral-400" style={{}}>per user/month</div>
</div>
<div className="mt-1 text-xs relative text-neutral-400" style={{}}>
<span data-billing-copy="">billed monthly</span>
</div>
<div className="mt-5 text-xs uppercase relative text-neutral-400" style={{}}>
              For large organizations
            </div>
<ul className="mt-3 space-y-2 text-sm relative text-neutral-300" style={{}}>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Enterprise‑grade analytics
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Tailored solutions &amp; SLAs
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Dedicated Customer Success
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                SSO/SAML &amp; advanced permissions
              </li>
<li className="flex items-start gap-2">
<svg className="lucide lucide-check mt-0.5" fill="none" height="18" stroke="currentColor" strokeWidth="2" width="18" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
                Custom pricing
              </li>
</ul>
<div className="mt-6 pt-4 relative">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition border-rose-400/40 text-rose-400 hover:bg-white/5" style={{}}>
                Get started
              </button>
</div>

</div>
</div>

</div>



</section>
<div className="pointer-events-none w-full h-px bg-white/10"></div>
<section className="sm:py-24 pt-16 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12" data-scroll-animate-children="">
<span className="text-sm font-medium text-rose-400" style={{}}>Testimonials</span>
<h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight" style={{opacity: '1', transform: 'translateY(0px)'}}>
            Real stories from teams who transformed their analytics.
          </h2>
<div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 border-white/10 bg-white/5" style={{opacity: '1', transform: 'translateY(0px)'}}>
<span className="inline-flex items-center -space-x-2">
<img alt="Reviewer 1" className="w-6 h-6 object-cover ring-2 rounded-full ring-neutral-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11f35e13-4c7b-438c-b1cc-8f7b6e822e1b_320w.webp" style={{}}/>
<img alt="Reviewer 2" className="w-6 h-6 object-cover ring-2 rounded-full ring-neutral-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c97346f-367a-4525-88c9-983c427260ae_320w.webp" style={{}}/>
<img alt="Reviewer 3" className="w-6 h-6 object-cover ring-2 rounded-full ring-neutral-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ea4b3ee-c3f5-4111-8dde-ef8bea1bc03a_320w.webp" style={{}}/>
<img alt="Reviewer 4" className="w-6 h-6 object-cover rounded-full ring-2 ring-neutral-900" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58d960c3-f652-497d-9e25-a9bc4d765213_320w.webp" style={{}}/>
</span>
<span className="ml-2 inline-flex items-center gap-1 text-sm text-neutral-300" style={{}}>
<svg className="lucide lucide-star w-4 h-4 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star-half w-4 h-4 text-amber-300" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"></path></svg>
<span className="ml-1">4.9/5 • 2,431 reviews</span>
</span>
</div>
</div>
<style>
          @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-33.33%); }
          }

          @keyframes scrollDown {
            0% { transform: translateY(-33.33%); }
            100% { transform: translateY(0); }
          }

          [data-scroll-column="1"] {
            animation: scrollUp 20s linear infinite;
          }

          [data-scroll-column="2"] {
            animation: scrollDown 20s linear infinite;
          }

          [data-scroll-column="3"] {
            animation: scrollUp 20s linear infinite;
          }

          [data-scroll-column]:hover {
            animation-play-state: paused;
          }
        </style>
<div className="grid grid-cols-1 overflow-hidden md:grid-cols-3 py-12 gap-x-6 gap-y-6" style={{maskImage: 'linear-gradient(180deg, transparent, black 45%, black 45%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 45%, black 45%, transparent)'}}>

<div className="overflow-hidden">
<div className="space-y-6" data-scroll-column="1">
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "The instant setup let our team start tracking KPIs in
                    minutes, not days. It changed how we plan every sprint."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Aisha Green" className="w-10 h-10 object-cover ring-2 rounded-full ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43fc57bc-1266-44cf-a579-3f8ec64d4431_320w.webp"/>
<div className="">
<div className="text-sm font-medium">Aisha Green</div>
<div className="text-xs text-neutral-400" style={{}}>
                      Head of Business Intelligence
                    </div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Reporting is effortless now. Our team shares concise
                    insights in seconds—no confusion, no wasted time."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Priya Patel" className="w-10 h-10 object-cover ring-2 rounded-full ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg"/>
<div className="">
<div className="text-sm font-medium">Priya Patel</div>
<div className="text-xs text-neutral-400" style={{}}>
                      Marketing Director
                    </div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "From trial to rollout took under a week. Dashboards finally
                    match how our teams actually work."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Jonas Weber" className="w-10 h-10 object-cover ring-2 rounded-full ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4ee565a-2084-483b-8358-9fc06da5ee99_320w.jpg"/>
<div className="">
<div className="text-sm font-medium">Jonas Weber</div>
<div className="text-xs text-neutral-400" style={{}}>Operations Lead</div>
</div>
</div>
</article>

<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "The instant setup let our team start tracking KPIs in
                    minutes, not days. It changed how we plan every sprint."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Aisha Green" className="w-10 h-10 object-cover rounded-full ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f19d9627-4570-4c87-b42e-f42bc9d1bc31_320w.jpg"/>
<div className="">
<div className="text-sm font-medium">Aisha Green</div>
<div className="text-xs text-neutral-400" style={{}}>
                      Head of Business Intelligence
                    </div>
</div>
</div>
</article>
</div>
</div>

<div className="overflow-hidden">
<div className="space-y-6" data-scroll-column="2">
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Clear, trustworthy reports across the org—security
                    included. We cut weekly review time by 62%."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Michael Chen" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f804111a-fe24-4660-b754-0f3654213f91_320w.jpg" style={{}}/>
<div className="">
<div className="text-sm font-medium">Michael Chen</div>
<div className="text-xs text-neutral-400" style={{}}>IT Security Lead</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Integrations were seamless. No extra IT tickets, and we
                    saved 120+ hours in the first quarter."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Rachel Adams" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/decdab76-d615-4089-a761-525ee4dc4a0f_320w.webp" style={{}}/>
<div className="">
<div className="text-sm font-medium">Rachel Adams</div>
<div className="text-xs text-neutral-400" style={{}}>Product Manager</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Support is outstanding. Every question had a thoughtful
                    answer within minutes."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Liam O'Connor" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17d18233-806b-40ae-aeda-9251f822ee0a_320w.webp"/>
<div className="">
<div className="text-sm font-medium">Liam O'Connor</div>
<div className="text-xs text-neutral-400" style={{}}>
                      Customer Success Manager
                    </div>
</div>
</div>
</article>

<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Clear, trustworthy reports across the org—security
                    included. We cut weekly review time by 62%."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Michael Chen" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4bda977-4e02-4ce3-b6d3-1f8a5d3197db_320w.jpg" style={{}}/>
<div className="">
<div className="text-sm font-medium">Michael Chen</div>
<div className="text-xs text-neutral-400" style={{}}>IT Security Lead</div>
</div>
</div>
</article>
</div>
</div>

<div className="overflow-hidden">
<div className="space-y-6" data-scroll-column="3">
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Switching platforms was our best decision this
                    year—intuitive, secure, and measurable results."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Carlos Rivera" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05c24471-1ab5-4e25-ab8c-e6fd10e1f913_320w.jpg" style={{}}/>
<div className="">
<div className="text-sm font-medium">Carlos Rivera</div>
<div className="text-xs text-neutral-400" style={{}}>CEO</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Transparency removed all doubt. We always know where
                    metrics stand and what to do next."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Sofia Martinez" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f5162d4-7171-4641-9041-6611d52f432e_320w.webp" style={{}}/>
<div className="">
<div className="text-sm font-medium">Sofia Martinez</div>
<div className="text-xs text-neutral-400" style={{}}>Analytics Lead</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Predictive models helped us spot trends early and act
                    faster. It's like a compass for growth."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Noah Bennett" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1080949-1bf1-41d5-b2fb-6ff27d985c7d_320w.jpg" style={{}}/>
<div className="">
<div className="text-sm font-medium">Noah Bennett</div>
<div className="text-xs text-neutral-400" style={{}}>
                      Strategy Director
                    </div>
</div>
</div>
</article>

<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial" style={{}}>
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100" style={{}}>
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Switching platforms was our best decision this
                    year—intuitive, secure, and measurable results."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Carlos Rivera" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58013d7d-eac3-419f-81c0-aaf209ded685_320w.webp" style={{}}/>
<div className="">
<div className="text-sm font-medium">Carlos Rivera</div>
<div className="text-xs text-neutral-400" style={{}}>CEO</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>



</section>
<div className="pointer-events-none w-full h-px bg-white/10"></div>
<style className="">
      @keyframes slideIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); }}
    </style>
<div className="pointer-events-none w-full h-px bg-white/10"></div>

<div className="pointer-events-none w-full h-px bg-white/10"></div>
<footer className="sm:px-6 lg:pl-0 lg:pr-0 w-full max-w-7xl mr-auto ml-auto pt-10 pr-0 pb-10 pl-0">

<div className="rounded-2xl border overflow-hidden border-white/10 bg-neutral-900/70" data-card="cta-primary" data-scroll-animate="blur-up" style={{}}>
<div className="sm:pb-44 sm:pt-44 pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute inset-0 bg-center bg-cover" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp'}}></div>
<div className="bg-center bg-neutral-950/50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37503864-ed52-4579-b3a4-02e1397fe2d3_3840w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative text-center max-w-3xl mx-auto">
<h2 className="sm:text-4xl md:text-5xl text-3xl font-semibold tracking-tight text-neutral-50" style={{}}>
              Make analytics effortless risk‑free.
            </h2>
<p className="mt-4 text-sm sm:text-base text-neutral-300" style={{}}>
              Start your 14‑day free trial and unlock sharper insights today.
            </p>
<div className="flex flex-col sm:flex-row gap-3 mt-8 gap-x-3 gap-y-3 items-center justify-center">
<button className="inline-flex transition overflow-hidden group text-sm font-medium rounded-full pt-3 pr-5 pb-3 pl-5 relative gap-x-2 gap-y-2 items-center text-white" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.5)'; this.querySelector('.glow-ring-effect').style.opacity='0'; this.querySelector('.sparkle-container').style.opacity='0.6'; this.querySelector('.scan-light').style.animation='none'; this.querySelector('.scan-light').style.left='-100%';" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(0,0,0,0.6), 0 0 0 2px rgba(255,255,255,0.2)'; this.querySelector('.glow-ring-effect').style.opacity='1'; this.querySelector('.sparkle-container').style.opacity='1'; this.querySelector('.scan-light').style.animation='scanSweep 1.5s ease-out forwards';" style={{background: 'linear-gradient(135deg, rgb(26, 26, 26) 0%, rgb(10, 10, 10) 100%)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 8px 32px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset, rgba(0, 0, 0, 0.5) 0px -1px 0px inset', transform: 'translateY(0px)'}}>
<svg aria-hidden="true" className="lucide lucide-arrow-right iconify iconify--solar" data-icon="solar:rocket-bold" data-icon-replaced="true" data-icon-set="lucide" data-lucide="arrow-right" fill="none" height="18" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span className="" style={{textShadow: '0 1px 2px rgba(0,0,0,0.5)', position: 'relative', zIndex: '2'}}>
                  Start free
                </span>

<div className="scan-light" style={{position: 'absolute', top: '0px', bottom: '0px', left: '-100%', width: '3px', background: 'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.9) 50%, rgba(244, 63, 94, 0.7), rgba(255, 255, 255, 0.9) 50%, transparent)', filter: 'blur(1px)', boxShadow: 'rgba(255, 255, 255, 0.8) 0px 0px 10px, rgba(244, 63, 94, 0.6) 0px 0px 15px', pointerEvents: 'none', zIndex: '10', animation: 'auto ease 0s 1 normal none running none'}}></div>

<div className="sparkle-container" style={{position: 'absolute', inset: '0px', borderRadius: 'inherit', overflow: 'hidden', pointerEvents: 'none', opacity: '0.6'}}>
<div className="sparkle" style={{position: 'absolute', width: '3px', height: '3px', background: 'white', borderRadius: '50%', boxShadow: '0 0 6px rgba(255,255,255,0.8)', animation: 'driftSparkle1 4s ease-in-out infinite'}}></div>
<div className="sparkle" style={{position: 'absolute', width: '2px', height: '2px', background: 'white', borderRadius: '50%', boxShadow: '0 0 4px rgba(255,255,255,0.8)', animation: 'driftSparkle2 5s ease-in-out infinite'}}></div>
<div className="sparkle" style={{position: 'absolute', width: '2.5px', height: '2.5px', background: 'white', borderRadius: '50%', boxShadow: '0 0 5px rgba(255,255,255,0.8)', animation: 'driftSparkle3 4.5s ease-in-out infinite'}}></div>
<div className="sparkle" style={{position: 'absolute', width: '2px', height: '2px', background: 'white', borderRadius: '50%', boxShadow: '0 0 4px rgba(255,255,255,0.8)', animation: 'driftSparkle4 5.5s ease-in-out infinite'}}></div>
<div className="sparkle" style={{position: 'absolute', width: '3px', height: '3px', background: 'white', borderRadius: '50%', boxShadow: '0 0 6px rgba(255,255,255,0.8)', animation: 'driftSparkle5 6s ease-in-out infinite'}}></div>
</div>

<svg className="orbit-sparkles" style={{position: 'absolute', inset: '-20px', width: 'calc(100% + 40px)', height: 'calc(100% + 40px)', pointerEvents: 'none', opacity: '0'}} viewbox="0 0 200 100">
<circle className="orbit-sparkle" cx="100" cy="50" fill="white" r="2" style={{animation: 'orbitSparkle1 2s linear infinite', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8))'}}></circle>
<circle className="orbit-sparkle" cx="100" cy="50" fill="white" r="1.5" style={{animation: 'orbitSparkle2 2s linear 0.5s infinite', filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.8))'}}></circle>
<circle className="orbit-sparkle" cx="100" cy="50" fill="white" r="2" style={{animation: 'orbitSparkle3 2s linear 1s infinite', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.8))'}}></circle>
<circle className="orbit-sparkle" cx="100" cy="50" fill="white" r="1.5" style={{animation: 'orbitSparkle4 2s linear 1.5s infinite', filter: 'drop-shadow(0 0 3px rgba(255,255,255,0.8))'}}></circle>
</svg>

<div className="glow-ring-effect" style={{position: 'absolute', inset: '-3px', borderRadius: 'inherit', background: 'transparent', opacity: '0'}}></div>

<div style={{position: 'absolute', inset: '0', borderRadius: 'inherit', background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%, rgba(255,255,255,0.05) 100%)', pointerEvents: 'none', zIndex: '1'}}></div>
<style>
                  @keyframes scanSweep {
                    0% {
                      left: -100%;
                      opacity: 0;
                    }
                    5% {
                      opacity: 1;
                    }
                    95% {
                      opacity: 1;
                    }
                    100% {
                      left: calc(100% + 100px);
                      opacity: 0;
                    }
                  }

                  @keyframes driftSparkle1 {
                    0% { left: 10%; top: 20%; opacity: 0; }
                    10% { opacity: 1; }
                    50% { left: 85%; top: 70%; opacity: 1; }
                    90% { opacity: 0; }
                    100% { left: 90%; top: 80%; opacity: 0; }
                  }
                  @keyframes driftSparkle2 {
                    0% { left: 70%; top: 15%; opacity: 0; }
                    10% { opacity: 1; }
                    50% { left: 20%; top: 80%; opacity: 1; }
                    90% { opacity: 0; }
                    100% { left: 15%; top: 85%; opacity: 0; }
                  }
                  @keyframes driftSparkle3 {
                    0% { left: 40%; top: 10%; opacity: 0; }
                    10% { opacity: 1; }
                    50% { left: 60%; top: 85%; opacity: 1; }
                    90% { opacity: 0; }
                    100% { left: 65%; top: 90%; opacity: 0; }
                  }
                  @keyframes driftSparkle4 {
                    0% { left: 80%; top: 60%; opacity: 0; }
                    10% { opacity: 1; }
                    50% { left: 30%; top: 25%; opacity: 1; }
                    90% { opacity: 0; }
                    100% { left: 25%; top: 20%; opacity: 0; }
                  }
                  @keyframes driftSparkle5 {
                    0% { left: 50%; top: 75%; opacity: 0; }
                    10% { opacity: 1; }
                    50% { left: 75%; top: 30%; opacity: 1; }
                    90% { opacity: 0; }
                    100% { left: 80%; top: 25%; opacity: 0; }
                  }

                  @keyframes orbitSparkle1 {
                    0% {
                      cx: 150; cy: 50;
                      opacity: 0;
                    }
                    10% { opacity: 1; }
                    25% { cx: 100; cy: 10; }
                    50% { cx: 50; cy: 50; }
                    75% { cx: 100; cy: 90; }
                    90% { opacity: 1; }
                    100% {
                      cx: 150; cy: 50;
                      opacity: 0;
                    }
                  }
                  @keyframes orbitSparkle2 {
                    0% {
                      cx: 100; cy: 10;
                      opacity: 0;
                    }
                    10% { opacity: 1; }
                    25% { cx: 50; cy: 50; }
                    50% { cx: 100; cy: 90; }
                    75% { cx: 150; cy: 50; }
                    90% { opacity: 1; }
                    100% {
                      cx: 100; cy: 10;
                      opacity: 0;
                    }
                  }
                  @keyframes orbitSparkle3 {
                    0% {
                      cx: 50; cy: 50;
                      opacity: 0;
                    }
                    10% { opacity: 1; }
                    25% { cx: 100; cy: 90; }
                    50% { cx: 150; cy: 50; }
                    75% { cx: 100; cy: 10; }
                    90% { opacity: 1; }
                    100% {
                      cx: 50; cy: 50;
                      opacity: 0;
                    }
                  }
                  @keyframes orbitSparkle4 {
                    0% {
                      cx: 100; cy: 90;
                      opacity: 0;
                    }
                    10% { opacity: 1; }
                    25% { cx: 150; cy: 50; }
                    50% { cx: 100; cy: 10; }
                    75% { cx: 50; cy: 50; }
                    90% { opacity: 1; }
                    100% {
                      cx: 100; cy: 90;
                      opacity: 0;
                    }
                  }

                  @keyframes ringPulse {
                    0%, 100% {
                      transform: scale(1);
                      opacity: 0.4;
                    }
                    50% {
                      transform: scale(1.05);
                      opacity: 0.8;
                    }
                  }

                  button[data-element-id="aura-emhryb3x165dep6if"]:hover .orbit-sparkles {
                    opacity: 1 !important;
                  }

                  button[data-element-id="aura-emhryb3x165dep6if"]:hover .sparkle-container {
                    opacity: 1 !important;
                  }

                  button[data-element-id="aura-emhryb3x165dep6if"]:active {
                    transform: translateY(0) scale(0.98) !important;
                  }
                </style>
</button>
<button className="inline-flex transition overflow-hidden group text-sm rounded-full pt-3 pr-5 pb-3 pl-5 relative gap-x-2 gap-y-2 items-center text-white/90" onmousemove="const rect = this.getBoundingClientRect(); const x = event.clientX - rect.left; const y = event.clientY - rect.top; const centerX = rect.width / 2; const centerY = rect.height / 2; const rotateX = ((y - centerY) / centerY) * -15; const rotateY = ((x - centerX) / centerX) * 15; this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(25px)`; this.style.setProperty('--x', ((x / rect.width) * 100) + '%'); this.style.setProperty('--y', ((y / rect.height) * 100) + '%');" onmouseout="this.style.transform='perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(15px)'; this.style.boxShadow='0 8px 32px rgba(0,0,0,0.3), inset 0 2px 4px rgba(255,255,255,0.4), inset 0 -2px 4px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1) inset'; this.querySelector('.inner-layer-1').style.opacity='0.6'; this.querySelector('.inner-layer-2').style.opacity='0.4'; this.querySelector('.light-sweep').style.transform='translate(-150%, 150%) rotate(45deg)'; this.querySelector('.depth-shadow').style.opacity='0.5';" onmouseover="this.style.transform='perspective(1000px) rotateX(-10deg) rotateY(8deg) translateZ(25px)'; this.style.boxShadow='0 20px 60px rgba(0,0,0,0.4), inset 0 3px 6px rgba(255,255,255,0.5), inset 0 -3px 6px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.2) inset, 0 0 60px rgba(244,63,94,0.4)'; this.querySelector('.inner-layer-1').style.opacity='1'; this.querySelector('.inner-layer-2').style.opacity='0.8'; this.querySelector('.light-sweep').style.transform='translate(150%, -150%) rotate(45deg)'; this.querySelector('.depth-shadow').style.opacity='1';" style={{'--x': '97.23839606494748%', '--y': '31.254402809449015%', background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.05) 100%)', border: '1px solid rgba(255, 255, 255, 0.3)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 8px 32px, rgba(255, 255, 255, 0.4) 0px 2px 4px inset, rgba(0, 0, 0, 0.2) 0px -2px 4px inset, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', backdropFilter: 'blur(20px)', transformStyle: 'preserve-3d', transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(15px)'}}>
<div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.05) 100%)', pointerEvents: 'none', zIndex: '1'}}></div>
<div className="inner-layer-1 absolute inset-0 rounded-full" style={{background: 'radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 40%, transparent 70%)', opacity: '0.6', pointerEvents: 'none', zIndex: '2'}}></div>
<div className="inner-layer-2 absolute inset-0 rounded-full" style={{background: 'radial-gradient(ellipse at var(--x) var(--y), rgba(244, 63, 94, 0.4) 0%, rgba(251, 113, 133, 0.2) 30%, transparent 60%)', opacity: '0.4', pointerEvents: 'none', filter: 'blur(8px)', zIndex: '3'}}></div>
<div className="light-sweep absolute inset-0 rounded-full" style={{background: 'linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)', transform: 'translate(-150%, 150%) rotate(45deg)', pointerEvents: 'none', filter: 'blur(6px)', width: '200%', height: '200%', top: '-50%', left: '-50%', zIndex: '4'}}></div>
<div className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 100%)', pointerEvents: 'none', zIndex: '5'}}></div>
<div className="absolute top-1/4 left-1/4 right-1/4 h-px rounded-full" style={{background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent)', pointerEvents: 'none', filter: 'blur(1px)', zIndex: '6'}}></div>
<div className="depth-shadow absolute inset-0 rounded-full" style={{boxShadow: 'rgba(0, 0, 0, 0.3) 0px -4px 8px inset, rgba(255, 255, 255, 0.3) 0px 4px 8px inset', opacity: '0.5', pointerEvents: 'none', zIndex: '7'}}></div>
<span aria-hidden="true" className="iconify text-[18px] relative z-10" data-icon="solar:video-play-bold" style={{textShadow: '0 1px 3px rgba(0,0,0,0.4), 0 0 8px rgba(255,255,255,0.3)', filter: 'drop-shadow(0 0 4px rgba(255,255,255,0.5))'}}></span>
<span className="z-10 relative" style={{textShadow: '0 1px 3px rgba(0, 0, 0, 0.4), 0 0 8px rgba(255,255,255,0.2)'}}>
                  Schedule demo
                </span>
<div className="absolute -inset-2 rounded-full" style={{background: 'radial-gradient(circle, rgba(244, 63, 94, 0.4) 0%, rgba(251, 113, 133, 0.2) 40%, transparent 70%)', opacity: '0', filter: 'blur(20px)', pointerEvents: 'none', zIndex: '-1'}}></div>
<style>
                  button[data-element-id="aura-emhrz05k76ejwhhy1"]:active {
                    transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(8px) scale(0.97) !important;
                    transition: all 0.15s ease !important;
                  }
                </style>
</button>
</div>
</div>
</div>


</div>

<div className="h-px w-full mt-10 mb-10 bg-white/10"></div>

<div className="space-y-8" data-card="site-footer" data-scroll-animate="fade-up">
<div className="flex flex-col md:flex-row gap-6 px-6 gap-x-6 gap-y-6 items-center justify-between">

<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bcb70761-6a38-4c33-b473-8ad0ac012039_1600w.png)] bg-cover rounded" href="#"></a>

<nav className="grid grid-cols-3 sm:flex sm:flex-row items-center gap-4 text-sm">
<a className="transition text-neutral-300 hover:text-white" href="#" style={{}}>
              Why us
            </a>
<a className="transition text-neutral-300 hover:text-white" href="#" style={{}}>
              Benefits
            </a>
<a className="transition text-neutral-300 hover:text-white" href="#" style={{}}>
              Features
            </a>
<a className="transition text-neutral-300 hover:text-white" href="#" style={{}}>
              Pricing
            </a>
<a className="transition text-neutral-300 hover:text-white" href="#" style={{}}>
              FAQ
            </a>
</nav>
</div>
<div className="w-full h-px bg-white/10"></div>
<div className="flex flex-col sm:flex-row gap-4 px-6 gap-x-4 gap-y-4 items-center justify-between">
<div className="text-sm text-neutral-400" style={{}}>
            Crafted by Marqait. All rights reserved. © 2026
          </div>
<div className="flex items-center gap-3">
<a aria-label="LinkedIn" className="inline-flex items-center justify-center w-6 h-6 rounded bg-rose-500 hover:opacity-90 transition text-white" href="#" style={{}}>
<svg className="lucide lucide-linkedin w-3.5 h-3.5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Instagram" className="inline-flex items-center justify-center w-6 h-6 rounded border transition border-white/10 text-neutral-300 hover:text-white hover:bg-white/5" href="#" style={{}}>
<svg className="lucide lucide-instagram w-3.5 h-3.5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Twitter" className="inline-flex items-center justify-center w-6 h-6 rounded border transition border-white/10 text-neutral-300 hover:text-white hover:bg-white/5" href="#" style={{}}>
<svg className="lucide lucide-twitter w-3.5 h-3.5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>



</div>
</footer>

<div className="pointer-events-none fixed inset-0 z-50">
<div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 relative">
<div className="absolute left-0 top-16 bottom-0 w-px bg-white/10">
<div className="absolute w-full h-32 bg-gradient-to-b to-transparent from-white via-white" style={{animation: 'glowUp 4s ease-in-out infinite', filter: 'blur(2px)', opacity: '0.8'}}></div>
</div>
<div className="absolute right-0 top-16 bottom-0 w-px bg-white/10">
<div className="absolute w-full h-32 bg-gradient-to-t from-rose-500 via-rose-500 to-transparent" style={{animation: '4s ease-in-out 0s infinite normal none running glowDown', filter: 'blur(2px)', opacity: '0.8'}}></div>
</div>
</div>
<div className="absolute top-16 left-0 right-0 h-px bg-white/10"></div>
<style className="">
        @keyframes glowUp { 0%, 100% { top: 100%; opacity: 0; } 10% { opacity: 0.8; } 50% { top: 0%; opacity: 0.8; } 90% { opacity: 0; } } @keyframes glowDown { 0%, 100% { bottom: 100%; opacity: 0; } 10% { opacity: 0.8; } 50% { bottom: 0%; opacity: 0.8; } 90% { opacity: 0; } }
      </style>
</div>


    </>
  );
}
