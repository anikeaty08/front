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
                // Initialize Chart 1: Adoption
                const canvas1 = document.getElementById('adoptionRevenueChart');
                if (canvas1) {
                    const existingChart = Chart.getChart(canvas1);
                    if (existingChart) existingChart.destroy();

                    const ctx1 = canvas1.getContext('2d');
                    const adoptionGradient = ctx1.createLinearGradient(0, 0, 0, 300);
                    adoptionGradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
                    adoptionGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                    
                    const revenueGradient = ctx1.createLinearGradient(0, 0, 0, 300);
                    revenueGradient.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
                    revenueGradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

                    new Chart(ctx1, {
                        type: 'line',
                        data: {
                            labels: ['2020', '2021', '2022', '2023', '2024'],
                            datasets: [
                                {
                                    label: 'AI Adoption',
                                    data: [15, 32, 58, 78, 94],
                                    borderColor: '#3b82f6',
                                    backgroundColor: adoptionGradient,
                                    borderWidth: 2,
                                    pointBackgroundColor: '#09090b',
                                    pointBorderColor: '#3b82f6',
                                    pointBorderWidth: 2,
                                    pointRadius: 4,
                                    pointHoverRadius: 6,
                                    fill: true,
                                    tension: 0.4,
                                    yAxisID: 'y'
                                },
                                {
                                    label: 'Revenue Lift',
                                    data: [8, 25, 52, 98, 165],
                                    borderColor: '#10b981',
                                    backgroundColor: revenueGradient,
                                    borderWidth: 2,
                                    pointBackgroundColor: '#09090b',
                                    pointBorderColor: '#10b981',
                                    pointBorderWidth: 2,
                                    pointRadius: 4,
                                    pointHoverRadius: 6,
                                    borderDash: [4, 4],
                                    fill: true,
                                    tension: 0.4,
                                    yAxisID: 'y1'
                                }
                            ]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            interaction: { mode: 'index', intersect: false },
                            plugins: {
                                legend: {
                                    display: true, position: 'top', align: 'end',
                                    labels: { color: '#a3a3a3', usePointStyle: true, boxWidth: 6, padding: 10, font: { family: "'Inter', sans-serif", size: 10, weight: 500 } }
                                },
                                tooltip: {
                                    backgroundColor: 'rgba(23, 23, 23, 0.95)', titleColor: '#fff', bodyColor: '#a3a3a3',
                                    borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, padding: 12,
                                    titleFont: { family: "'Inter', sans-serif", size: 12, weight: 600 },
                                    bodyFont: { family: "'Inter', sans-serif", size: 11 },
                                    cornerRadius: 8, displayColors: true, boxPadding: 4
                                }
                            },
                            scales: {
                                x: { grid: { display: false }, ticks: { color: '#737373', font: { family: "'Inter', sans-serif", size: 10 } } },
                                y: { display: false, position: 'left' },
                                y1: { display: false, position: 'right' }
                            }
                        }
                    });
                }

                // Initialize Chart 2: Efficiency
                const canvas2 = document.getElementById('timeEfficiencyGraph');
                if (canvas2) {
                    const existingChart = Chart.getChart(canvas2);
                    if (existingChart) existingChart.destroy();

                    const ctx = canvas2.getContext('2d');
                    
                    const gradientAi = ctx.createLinearGradient(0, 0, 0, 400);
                    gradientAi.addColorStop(0, '#60a5fa'); 
                    gradientAi.addColorStop(1, '#a855f7'); 

                    const gradientManual = ctx.createLinearGradient(0, 0, 0, 400);
                    gradientManual.addColorStop(0, 'rgba(82, 82, 82, 0.5)');
                    gradientManual.addColorStop(1, 'rgba(82, 82, 82, 0.2)');

                    new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['Manual', 'Arc AI'],
                            datasets: [{
                                data: [18, 432],
                                backgroundColor: [gradientManual, gradientAi],
                                hoverBackgroundColor: [gradientManual, gradientAi],
                                borderRadius: { topLeft: 8, topRight: 8, bottomLeft: 4, bottomRight: 4 },
                                borderSkipped: false,
                                barThickness: 'flex',
                                maxBarThickness: 60,
                                minBarLength: 10
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            layout: { padding: { top: 20 } },
                            animation: {
                                duration: 2000,
                                easing: 'easeOutElastic',
                                delay: (context) => {
                                    let delay = 0;
                                    if (context.type === 'data' && context.mode === 'default') {
                                        delay = context.dataIndex * 300 + context.datasetIndex * 100;
                                    }
                                    return delay;
                                },
                            },
                            plugins: {
                                legend: { display: false },
                                tooltip: {
                                    enabled: true,
                                    backgroundColor: 'rgba(23, 23, 23, 0.95)',
                                    titleColor: '#fff',
                                    bodyColor: '#cbd5e1',
                                    titleFont: { family: "'Inter', sans-serif", size: 12, weight: 600 },
                                    bodyFont: { family: "'Inter', sans-serif", size: 11 },
                                    padding: 12,
                                    cornerRadius: 8,
                                    borderColor: 'rgba(255,255,255,0.1)',
                                    borderWidth: 1,
                                    displayColors: false,
                                    callbacks: {
                                        label: function(context) {
                                            return context.raw + ' Leads Processed / Hour';
                                        }
                                    }
                                }
                            },
                            scales: {
                                y: {
                                    beginAtZero: true,
                                    grid: {
                                        color: 'rgba(255, 255, 255, 0.03)',
                                        drawBorder: false
                                    },
                                    ticks: {
                                        color: '#737373',
                                        font: { family: "'Inter', sans-serif", size: 10 },
                                        callback: function(value) { return value + '/hr'; }
                                    },
                                    border: { display: false }
                                },
                                x: {
                                    grid: { display: false },
                                    ticks: {
                                        color: '#a3a3a3',
                                        font: { family: "'Inter', sans-serif", size: 11, weight: 500 }
                                    },
                                    border: { display: false }
                                }
                            }
                        }
                    });
                }
            })();
          


        (function() {
            // Chart 1: Adoption
            const canvas1 = document.getElementById('adoptionRevenueChart');
            if (canvas1) {
                const ctx1 = canvas1.getContext('2d');
                const adoptionGradient = ctx1.createLinearGradient(0, 0, 0, 300);
                adoptionGradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
                adoptionGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
                
                const revenueGradient = ctx1.createLinearGradient(0, 0, 0, 300);
                revenueGradient.addColorStop(0, 'rgba(16, 185, 129, 0.3)');
                revenueGradient.addColorStop(1, 'rgba(16, 185, 129, 0)');

                new Chart(ctx1, {
                    type: 'line',
                    data: {
                        labels: ['2020', '2021', '2022', '2023', '2024'],
                        datasets: [
                            {
                                label: 'AI Adoption',
                                data: [15, 32, 58, 78, 94],
                                borderColor: '#3b82f6',
                                backgroundColor: adoptionGradient,
                                borderWidth: 2,
                                pointBackgroundColor: '#09090b',
                                pointBorderColor: '#3b82f6',
                                pointBorderWidth: 2,
                                pointRadius: 4,
                                pointHoverRadius: 6,
                                fill: true,
                                tension: 0.4,
                                yAxisID: 'y'
                            },
                            {
                                label: 'Revenue Lift',
                                data: [8, 25, 52, 98, 165],
                                borderColor: '#10b981',
                                backgroundColor: revenueGradient,
                                borderWidth: 2,
                                pointBackgroundColor: '#09090b',
                                pointBorderColor: '#10b981',
                                pointBorderWidth: 2,
                                pointRadius: 4,
                                pointHoverRadius: 6,
                                borderDash: [4, 4],
                                fill: true,
                                tension: 0.4,
                                yAxisID: 'y1'
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        interaction: { mode: 'index', intersect: false },
                        plugins: {
                            legend: {
                                display: true, position: 'top', align: 'end',
                                labels: { color: '#a3a3a3', usePointStyle: true, boxWidth: 6, padding: 10, font: { family: "'Inter', sans-serif", size: 10, weight: 500 } }
                            },
                            tooltip: {
                                backgroundColor: 'rgba(23, 23, 23, 0.95)', titleColor: '#fff', bodyColor: '#a3a3a3',
                                borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, padding: 12,
                                titleFont: { family: "'Inter', sans-serif", size: 12, weight: 600 },
                                bodyFont: { family: "'Inter', sans-serif", size: 11 },
                                cornerRadius: 8, displayColors: true, boxPadding: 4
                            }
                        },
                        scales: {
                            x: { grid: { display: false }, ticks: { color: '#737373', font: { family: "'Inter', sans-serif", size: 10 } } },
                            y: { display: false, position: 'left' },
                            y1: { display: false, position: 'right' }
                        }
                    }
                });
            }

            // Chart 2: Efficiency
            const canvas2 = document.getElementById('timeEfficiencyGraph');
            if (canvas2) {
                const ctx2 = canvas2.getContext('2d');
                const gradientAi = ctx2.createLinearGradient(0, 0, 0, 400);
                gradientAi.addColorStop(0, '#3b82f6'); 
                gradientAi.addColorStop(1, '#8b5cf6'); 

                new Chart(ctx2, {
                    type: 'bar',
                    data: {
                        labels: ['Manual Entry', 'Arc AI Automation'],
                        datasets: [{
                            data: [18, 432],
                            backgroundColor: ['rgba(82, 82, 82, 0.3)', gradientAi],
                            hoverBackgroundColor: ['rgba(82, 82, 82, 0.5)', gradientAi],
                            borderRadius: 6, borderSkipped: false, barThickness: 45, maxBarThickness: 60
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                enabled: true, backgroundColor: 'rgba(23, 23, 23, 0.95)', titleColor: '#fff', bodyColor: '#a3a3a3',
                                titleFont: { family: "'Inter', sans-serif", size: 12, weight: 600 },
                                bodyFont: { family: "'Inter', sans-serif", size: 11 },
                                padding: 12, cornerRadius: 8, borderColor: 'rgba(255,255,255,0.1)', borderWidth: 1, displayColors: false,
                                callbacks: { label: function(context) { return context.raw + ' Leads Processed / Hour'; } }
                            }
                        },
                        scales: {
                            y: {
                                beginAtZero: true, grid: { color: 'rgba(255, 255, 255, 0.05)', drawBorder: false },
                                ticks: { color: '#737373', font: { family: "'Inter', sans-serif", size: 10 }, callback: function(value) { return value + '/hr'; } },
                                border: { display: false }
                            },
                            x: {
                                grid: { display: false },
                                ticks: { color: '#a3a3a3', font: { family: "'Inter', sans-serif", size: 11, weight: 500 } },
                                border: { display: false }
                            }
                        },
                        animation: { duration: 1500, easing: 'easeOutQuart' }
                    }
                });
            }
        })();
    


  // Initialize Lucide Icons for this section
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Chart Configuration
  document.addEventListener('DOMContentLoaded', function() {
    Chart.defaults.color = '#525252';
    Chart.defaults.font.family = "'Inter', sans-serif";
    
    // Adoption Chart
    const ctxAdoption = document.getElementById('adoptionChart').getContext('2d');
    
    // Create gradient
    const gradientAdoption = ctxAdoption.createLinearGradient(0, 0, 0, 300);
    gradientAdoption.addColorStop(0, 'rgba(59, 130, 246, 0.5)'); // Blue
    gradientAdoption.addColorStop(1, 'rgba(59, 130, 246, 0)');

    new Chart(ctxAdoption, {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [{
          label: 'AI Integration',
          data: [12, 19, 35, 65, 92],
          borderColor: '#3b82f6',
          backgroundColor: gradientAdoption,
          borderWidth: 2,
          pointBackgroundColor: '#000',
          pointBorderColor: '#3b82f6',
          pointBorderWidth: 2,
          pointRadius: 4,
          pointHoverRadius: 6,
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#fff',
            bodyColor: '#cbd5e1',
            padding: 12,
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            displayColors: false,
          }
        },
        scales: {
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)',
              drawBorder: false,
            },
            ticks: { display: false }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#737373' }
          }
        }
      }
    });

    // Efficiency Chart
    const ctxEfficiency = document.getElementById('efficiencyChart').getContext('2d');
    
    new Chart(ctxEfficiency, {
      type: 'bar',
      data: {
        labels: ['Manual', 'Legacy Tools', 'Arc AI'],
        datasets: [{
          label: 'Tasks Per Hour',
          data: [8, 25, 140],
          backgroundColor: [
            'rgba(115, 115, 115, 0.3)',
            'rgba(115, 115, 115, 0.3)', 
            '#fbbf24' // Amber
          ],
          borderRadius: 4,
          borderSkipped: false,
          barPercentage: 0.6,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            padding: 12,
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            displayColors: false,
            callbacks: {
              label: function(context) {
                return context.parsed.y + ' Tasks/hr';
              }
            }
          }
        },
        scales: {
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)',
              drawBorder: false,
            },
            ticks: { color: '#737373' }
          },
          x: {
            grid: { display: false },
            ticks: { color: '#a3a3a3', font: { weight: 500 } }
          }
        }
      }
    });
  });



      lucide.createIcons();

      // Canvas Animation Script
      const canvas = document.getElementById('networkCanvas');
      const ctx = canvas.getContext('2d');
      let width, height;
      let particles = [];

      // Mouse tracking
      let mouse = { x: 0, y: 0 };
      let targetMouse = { x: 0, y: 0 };

      // Scroll tracking
      let scrollY = 0;

      window.addEventListener('mousemove', (e) => {
          targetMouse.x = e.clientX;
          targetMouse.y = e.clientY;

          // Move the cursor glow div
          const glow = document.getElementById('cursor-glow');
          glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      });

      window.addEventListener('scroll', () => {
          scrollY = window.scrollY;
      });

      function resize() {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
          initParticles();
      }

      class Particle {
          constructor() {
              this.x = Math.random() * width;
              this.y = Math.random() * height;
              this.vx = (Math.random() - 0.5) * 0.5;
              this.vy = (Math.random() - 0.5) * 0.5;
              this.size = Math.random() * 2;
              this.baseX = this.x;
              this.baseY = this.y;
          }

          update() {
              // Smooth mouse movement interpolation
              mouse.x += (targetMouse.x - mouse.x) * 0.1;
              mouse.y += (targetMouse.y - mouse.y) * 0.1;

              // Move based on velocity
              this.x += this.vx;
              this.y += this.vy;

              // Mouse interaction (repel)
              let dx = mouse.x - this.x;
              let dy = mouse.y - this.y;
              let distance = Math.sqrt(dx * dx + dy * dy);
              let forceDirectionX = dx / distance;
              let forceDirectionY = dy / distance;
              let maxDistance = 200;
              let force = (maxDistance - distance) / maxDistance;

              if (distance < maxDistance) {
                  this.x -= forceDirectionX * force * 2;
                  this.y -= forceDirectionY * force * 2;
              }

              // Scroll interaction (parallax)
              this.y -= scrollY * 0.002; // Slight movement on scroll

              // Wrap around screen
              if (this.x < 0) this.x = width;
              if (this.x > width) this.x = 0;
              if (this.y < 0) this.y = height;
              if (this.y > height) this.y = 0;
          }

          draw() {
              ctx.fillStyle = 'rgba(59, 130, 246, 0.5)'; // Blue tint
              ctx.beginPath();
              ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
              ctx.fill();
          }
      }

      function initParticles() {
          particles = [];
          const numberOfParticles = (width * height) / 15000;
          for (let i = 0; i < numberOfParticles; i++) {
              particles.push(new Particle());
          }
      }

      function animate() {
          ctx.clearRect(0, 0, width, height);

          // Draw connections
          for (let i = 0; i < particles.length; i++) {
              for (let j = i; j < particles.length; j++) {
                  let dx = particles[i].x - particles[j].x;
                  let dy = particles[i].y - particles[j].y;
                  let distance = Math.sqrt(dx * dx + dy * dy);

                  if (distance < 150) {
                      ctx.beginPath();
                      ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 - distance/1500})`;
                      ctx.lineWidth = 1;
                      ctx.moveTo(particles[i].x, particles[i].y);
                      ctx.lineTo(particles[j].x, particles[j].y);
                      ctx.stroke();
                  }
              }
              particles[i].update();
              particles[i].draw();
          }
          requestAnimationFrame(animate);
      }

      window.addEventListener('resize', resize);
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
      
<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NMlvqnkICwYYJ6lYb064">
<div data-darkreader-inline-color="" data-us-text="id-e4g1y4ansvwqbxm34ejw" style={{width: '5px', top: '398.905px', left: '522.264px', fontSize: '10px', lineHeight: '65.1906px', letterSpacing: '0px', fontFamily: 'Inter', fontWeight: '400', textAlign: 'left', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2', '--darkreader-inline-color': 'transparent'}}>
            .
          </div>
</div>

</div>
</div>

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-40" height="852" id="networkCanvas" width="393"></canvas>

<div className="fixed w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out will-change-transform" id="cursor-glow" style={{transform: 'translate(92px, 265px) translate(-50%, -50%)'}}></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">

<div className="relative w-6 h-4 overflow-hidden flex items-end justify-center"></div>
<span className="group-hover:text-blue-200 transition-colors text-sm font-semibold text-white tracking-wide">
            Arc Ai
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="/#">Home</a>
<a className="hover:text-white transition-colors" href="/section 2">
            About
          </a>
<a className="hover:text-white transition-colors" href="#">Safety</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-xs font-medium text-neutral-400 hover:text-white transition-colors">
            Sign In
          </button>
<button className="hidden md:flex text-xs font-medium bg-white text-black hover:bg-neutral-200 px-4 py-2 rounded-full transition-all">
            Get Started
          </button>
<button className="md:hidden text-neutral-400">
<svg className="lucide lucide-menu w-5 h-5" data-darkreader-inline-stroke="" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</nav>

<section className="min-h-screen flex flex-col text-center z-10 pt-20 pr-6 pl-6 relative items-center justify-center">

<div className="relative mb-12 animate-float">

<div className="w-[280px] h-[140px] md:w-[400px] md:h-[200px] absolute -top-[60px] md:-top-[90px] left-1/2 -translate-x-1/2 rounded-t-full border-t-[1px] border-transparent bg-gradient-to-r from-blue-600 via-cyan-400 to-amber-500 [mask-image:linear-gradient(to_bottom,black_40%,transparent_100%)] opacity-80 blur-[1px]"></div>
<div className="md:w-[400px] md:h-[200px] -top-[60px] md:-top-[90px] -translate-x-1/2 border-t-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-30 w-[280px] h-[140px] border-transparent rounded-t-full absolute left-1/2"></div>

<h1 className="md:text-9xl text-6xl font-semibold tracking-tighter bg-gradient-to-b from-white via-neutral-200 to-neutral-600 mix-blend-overlay z-10 pb-2 relative">
          Arc Ai
        </h1>
</div>
<h2 className="md:text-4xl leading-tight text-2xl font-medium text-white tracking-tight max-w-3xl mr-auto mb-6 ml-auto" style={{}}>
        Strategic AI Sales System
      </h2>
<p className="md:text-lg leading-relaxed text-sm font-light text-neutral-400 max-w-xl mr-auto mb-10 ml-auto">
        We Architect AI systems that turn dormant leads into 6 figure revenue.
        No Headcount. No Hype. Just Margins.
      </p>

<div className="flex flex-col md:flex-row items-center gap-4">
<button className="group relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#3B82F6_50%,#E2E8F0_100%)]"></span>
<span className="inline-flex items-center justify-center transition-colors group-hover:bg-neutral-900 text-sm font-medium text-white bg-black w-full h-full rounded-full pt-1 pr-8 pb-1 pl-8 backdrop-blur-3xl">
            Audit Your Leads
          </span>
</button>
<button className="hover:text-white transition-colors text-sm font-medium text-neutral-400 pt-3 pr-6 pb-3 pl-6">
          Schedule A Demo
        </button>
</div>
</section>


<section className="z-10 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="md:flex md:justify-between md:items-end mb-16">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight mb-4">
            Core Solutions
          </h2>
<p className="text-sm text-neutral-500" style={{}}></p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-heart-pulse" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="heart-pulse" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(94, 177, 250)', '--darkreader-inline-stroke': 'currentColor', '--darkreader-inline-color': 'var(--darkreader-text-5eb1fa, #5db5fa)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2" style={{}}>
              Database Reactivation
            </h3>
<p className="leading-relaxed text-sm font-light text-neutral-400">
              Pull fresh sales from leads you’ve already paid for and haven’t
              bought, using conversational AI
            </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 hover:border-amber-500/30 transition-all duration-300 overflow-hidden">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-phone-incoming" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="phone-incoming" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(251, 196, 52)', '--darkreader-inline-stroke': 'currentColor', '--darkreader-inline-color': 'var(--darkreader-text-fbc434, #fbc73f)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 2v6h6"></path><path d="m22 2-6 6"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Voice Agents</h3>
<p className="leading-relaxed text-sm font-light text-neutral-400">
              Use AI to handle inbound calls to redirect and qualify leads, take
              information and arrange appointments
            </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-dock" data-darkreader-inline-color="" data-darkreader-inline-stroke="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="dock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(71, 215, 163)', '--darkreader-inline-stroke': 'currentColor', '--darkreader-inline-color': 'var(--darkreader-text-47d7a3, #54daaa)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 8h20"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="M6 16h12"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Automated Proposals
            </h3>
<p className="leading-relaxed text-sm font-light text-neutral-400">
              Instant Proposals turn every hot lead into a perfectly branded,
              ready-to-sign contract in under 12 minutes — auto-sent,
              auto-tracked, and auto-deposited while you sleep.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950/50 z-10 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium text-center mb-16 tracking-tight">
          Deployment Protocol
        </h2>
<div className="relative space-y-8">
<div className="absolute left-[27px] top-4 bottom-4 w-[2px] bg-white/10"></div>

<div className="relative flex gap-8 group">
<div className="flex-none w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 group-hover:border-blue-500 transition-colors">
<span className="font-mono text-sm text-neutral-500 group-hover:text-blue-500">
                01
              </span>
</div>
<div className="pt-2">
<h3 className="text-lg font-medium text-white mb-2">Audit</h3>
<p className="text-sm font-light text-neutral-400 max-w-lg">Schedule a 15-min audit of your current database. Live walk through demo of how the AI automations work. </p>
</div>
</div>

<div className="relative flex gap-8 group">
<div className="flex-none w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 group-hover:border-amber-500 transition-colors">
<span className="font-mono text-sm text-neutral-500 group-hover:text-amber-500">
                02
              </span>
</div>
<div className="pt-2">
<h3 className="text-lg font-medium text-white mb-2" style={{}}>Test</h3>
<p className="text-sm font-light text-neutral-400 max-w-lg">We'll test our automations on a small test batch of 50-100 leads with 0 obligations or upfront cost. </p>
</div>
</div>

<div className="relative flex gap-8 group">
<div className="flex-none w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center z-10 group-hover:border-white transition-colors">
<span className="font-mono text-sm text-neutral-500 group-hover:text-white">
                03
              </span>
</div>
<div className="pt-2">
<h3 className="text-lg font-medium text-white mb-2">Execute</h3>
<p className="text-sm font-light text-neutral-400 max-w-lg">Once we have determined if we are a good fit for each other, we will scale up appropriately to  your entire database.  </p>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 overflow-hidden bg-black border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
<div className="grid lg:grid-cols-2 max-w-7xl z-10 mr-auto ml-auto relative gap-x-16 gap-y-16 items-center">

<div className="flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium w-fit mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
            Live Demonstration
          </div>
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-6">
            How It's Done
          </h2>
<p className="leading-relaxed text-lg font-light text-neutral-400 mb-8">
            This demo gives a taster of how AI engages with customers in a
            natural way and bears the brunt of repetitive tasks, so you and your
            team can focus on the things you love most.
          </p>
<div className="space-y-4 mb-10">
<div className="flex items-start gap-3">
<div className="mt-1 p-1 rounded-full bg-neutral-900 border border-white/10 text-white">
<svg className="lucide lucide-check" data-darkreader-inline-stroke="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-neutral-300">
                Reactivate 20–40 % of dead leads into booked calls — fully
                automated.
              </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 p-1 rounded-full bg-neutral-900 border border-white/10 text-white">
<svg className="lucide lucide-check" data-darkreader-inline-stroke="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-neutral-300">
                Hyper-personal SMS + email sequences that reference past quotes
                &amp; visits.
              </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 p-1 rounded-full bg-neutral-900 border border-white/10 text-white">
<svg className="lucide lucide-check" data-darkreader-inline-stroke="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-neutral-300">
                Others spam. Arc AI studies lead history and sales techniques -
                coverts 3-5x harder.
              </span>
</div>
</div>
</div>

<div className="relative group cursor-pointer">

<div className="absolute -inset-0.5 bg-gradient-to-br from-white/20 to-white/0 rounded-2xl blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative aspect-video bg-neutral-900 rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">

<img alt="Arc Interface Demo" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>

<div className="absolute top-4 left-4 flex gap-2">
<div className="h-2 w-2 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="h-2 w-2 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="h-2 w-2 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div className="bg-black/50 backdrop-blur-md border border-white/10 rounded px-2 py-1">
<p className="text-[10px] font-mono text-blue-400">
                  STATUS: PROCESSING_VECTORS
                </p>
</div>
<div className="text-[10px] font-mono text-neutral-500">
                01:24 / 03:00
              </div>
</div>

<div className="absolute inset-0 flex items-center justify-center cursor-pointer z-20 group/play" onclick="this.parentElement.innerHTML = '&lt;iframe src=\'https://player.vimeo.com/video/1142575321?autoplay=1&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479\' width=\'100%\' height=\'100%\' frameborder=\'0\' allow=\'autoplay; fullscreen; picture-in-picture\' allowfullscreen class=\'w-full h-full rounded-xl\'&gt;&lt;/iframe&gt;'">
<div className="flex group-hover/play:scale-110 group-hover/play:bg-white/20 transition-all duration-300 bg-white/10 w-16 h-16 border-white/20 border rounded-full backdrop-blur-md items-center justify-center">
<svg className="lucide lucide-play ml-1 text-white" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" fill="currentColor" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor', '--darkreader-inline-fill': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="6 3 20 12 6 21 6 3"></polygon>
</svg>
</div>
</div>
</div>

<div className="flex justify-between items-center mt-4 px-1">
<span className="text-xs font-mono text-neutral-500">
              v2.4.0-stable
            </span>
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
<span className="text-xs text-neutral-500 uppercase tracking-wider">
                System Active
              </span>
</div>
</div>
</div>
</div>
</section><section className="z-10 bg-black border-t border-white/5 pt-24 pb-24 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-blue-900/10 to-transparent blur-[120px] rounded-full pointer-events-none"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto relative">

<div className="text-center max-w-5xl mx-auto mb-16 md:mb-24 px-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-white/10 text-neutral-400 text-xs font-medium mb-8 hover:bg-neutral-800 transition-colors cursor-default">
<svg className="lucide lucide-zap w-3 h-3 text-amber-400" data-darkreader-inline-stroke="" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span>Workforce Evolution</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
        "People won't be replaced by AI. 
        <span className="text-neutral-500 transition-colors duration-500 hover:text-neutral-300">People will be replaced by people using AI."</span>
</h2>
<p className="text-lg text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
        The gap between traditional workflows and AI-augmented operations is widening exponentially. Adaptation isn't just a competitive advantage—it is the new survival baseline for modern enterprise.
      </p>
</div>

<div className="grid lg:grid-cols-2 gap-6 md:gap-8 px-4 md:px-0">

<div className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/0 hover:from-blue-500/20 transition-all duration-500">
<div className="absolute inset-0 bg-neutral-900/90 rounded-3xl z-0"></div>
<div className="relative z-10 bg-black/40 backdrop-blur-xl rounded-[22px] border border-white/5 p-5 md:p-8 h-full flex flex-col">
<div className="flex justify-between items-start mb-6 md:mb-8">
<div className="">
<div className="flex items-center gap-2 mb-2">
<div className="p-1.5 bg-blue-500/10 rounded-lg border border-blue-500/20">
<svg className="lucide lucide-trending-up w-4 h-4 text-blue-400" data-darkreader-inline-stroke="" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-sm font-semibold text-white tracking-wide uppercase">Adoption Velocity</h3>
</div>
<p className="text-sm text-neutral-500">Enterprise integration rate (YoY)</p>
</div>
<div className="text-right">
<div className="text-3xl font-medium text-white tracking-tight">84%</div>
<div className="text-xs text-emerald-500 flex items-center justify-end gap-1 font-medium mt-1">
<svg className="lucide lucide-arrow-up-right w-3 h-3" data-darkreader-inline-stroke="" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg> Growth
              </div>
</div>
</div>
<div className="relative w-full h-[220px] md:h-[280px] lg:h-[320px] mt-auto overflow-hidden">
<div className="w-full h-full relative group">
<canvas className="w-full h-full block" height="440" id="adoptionRevenueChart" style={{display: 'block', boxSizing: 'border-box', height: '220px', width: '263px'}} width="526"></canvas>
</div>
</div>
</div>
</div>

<div className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/0 hover:from-amber-500/20 transition-all duration-500">
<div className="absolute inset-0 bg-neutral-900/90 rounded-3xl z-0"></div>
<div className="z-10 flex flex-col p-5 md:p-8 bg-black/40 h-full border-white/5 border rounded-[22px] relative backdrop-blur-xl group overflow-hidden">

<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-700 pointer-events-none"></div>

<div className="flex justify-between items-start mb-6 md:mb-8 relative z-10">
<div className="">
<div className="flex gap-2 mb-1 gap-x-2 gap-y-2 items-center">
<div className="p-1 rounded bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-500/40 transition-colors duration-300">
<svg className="text-blue-400" data-darkreader-inline-stroke="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xs font-semibold text-white uppercase tracking-wide group-hover:text-blue-200 transition-colors">Time Efficiency</h3>
</div>
<p className="text-xs text-neutral-500">Processing velocity (Leads/hr)</p>
</div>
<div className="text-right">
<div className="text-2xl font-semibold text-white tracking-tight">24x</div>
<div className="text-[10px] text-emerald-500 font-medium flex items-center justify-end gap-1 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 mt-1">
<svg className="animate-bounce" data-darkreader-inline-stroke="" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                    Faster
                </div>
</div>
</div>

<div className="relative w-full h-[220px] md:h-[280px] lg:h-[320px] mt-auto z-10 overflow-hidden">
<canvas className="w-full h-full block" height="440" id="timeEfficiencyGraph" style={{display: 'block', boxSizing: 'border-box', height: '220px', width: '263px'}} width="526"></canvas>
</div>


</div>
</div>
</div>


</div>
</section>

<footer className="relative z-10 bg-black border-t border-white/10 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-20">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-4 h-4 bg-gradient-to-tr from-blue-500 to-amber-400 rounded-full"></div>
<span className="text-sm font-semibold tracking-wide text-white">
              Arc Ai
            </span>
</div>
<p className="text-xs text-neutral-500 leading-relaxed">
            Pioneering the next era of machine intelligence. Built for builders,
            designed for scale.
          </p>
</div>
<div className="flex gap-12 md:gap-24">
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Product
            </h4>
<a className="text-xs text-neutral-400 hover:text-blue-400 transition-colors" href="#">
              Engine
            </a>
<a className="text-xs text-neutral-400 hover:text-blue-400 transition-colors" href="#">
              API
            </a>
<a className="text-xs text-neutral-400 hover:text-blue-400 transition-colors" href="#">
              Pricing
            </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
<a className="text-xs text-neutral-400 hover:text-blue-400 transition-colors" href="#">
              About
            </a>
<a className="text-xs text-neutral-400 hover:text-blue-400 transition-colors" href="#">
              Blog
            </a>
<a className="text-xs text-neutral-400 hover:text-blue-400 transition-colors" href="#">
              Careers
            </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Legal
            </h4>
<a className="text-xs text-neutral-400 hover:text-blue-400 transition-colors" href="#">
              Privacy
            </a>
<a className="text-xs text-neutral-400 hover:text-blue-400 transition-colors" href="#">
              Terms
            </a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<p className="text-[10px] text-neutral-600">
          © 2024 Arc Intelligence Inc. All rights reserved.
        </p>
<div className="flex gap-4">
<svg className="lucide lucide-twitter w-4 h-4 text-neutral-600 hover:text-white transition-colors cursor-pointer" data-darkreader-inline-stroke="" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-github w-4 h-4 text-neutral-600 hover:text-white transition-colors cursor-pointer" data-darkreader-inline-stroke="" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<svg className="lucide lucide-linkedin w-4 h-4 text-neutral-600 hover:text-white transition-colors cursor-pointer" data-darkreader-inline-stroke="" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{'--darkreader-inline-stroke': 'currentColor'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
</footer>


    </>
  );
}
