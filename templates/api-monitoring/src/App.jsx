import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          !function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();
        


      (function() {
          const initChart = () => {
              const ctx = document.getElementById('apiMonitorChart');
              if(!ctx || !window.Chart) return;
              
              // Prevent re-initialization if already exists in this element
              if (window.apiMonitorChartInstance) {
                  window.apiMonitorChartInstance.destroy();
              }
              
              window.apiMonitorChartInstance = new Chart(ctx, {
                  type: 'line',
                  data: {
                      labels: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
                      datasets: [{
                          label: 'Requests/min',
                          type: 'bar',
                          data: [4200, 4800, 5100, 4900, 6200, 5800, 7100, 6900, 8200, 7800, 9100, 8800],
                          backgroundColor: 'rgba(59, 130, 246, 0.15)',
                          hoverBackgroundColor: 'rgba(59, 130, 246, 0.3)',
                          borderColor: 'rgba(59, 130, 246, 0.5)',
                          borderWidth: 1,
                          borderRadius: 2,
                          yAxisID: 'y'
                      }, {
                          label: 'P99 Latency (ms)',
                          type: 'line',
                          data: [120, 115, 140, 130, 180, 160, 210, 190, 150, 145, 135, 125],
                          borderColor: '#a855f7',
                          backgroundColor: 'transparent',
                          borderDash: [4, 4],
                          borderWidth: 2,
                          pointBackgroundColor: '#0A0A0A',
                          pointBorderColor: '#a855f7',
                          pointBorderWidth: 2,
                          pointRadius: 3,
                          pointHoverRadius: 5,
                          tension: 0.4,
                          yAxisID: 'y1'
                      }]
                  },
                  options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      interaction: { mode: 'index', intersect: false },
                      plugins: {
                          legend: { display: false },
                          tooltip: {
                              backgroundColor: 'rgba(10, 10, 10, 0.9)',
                              titleColor: '#9ca3af',
                              bodyColor: '#f3f4f6',
                              borderColor: 'rgba(255,255,255,0.1)',
                              borderWidth: 1,
                              padding: 12,
                              bodyFont: { family: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace', size: 12 },
                              titleFont: { size: 12, weight: 'normal' },
                              displayColors: true,
                              boxPadding: 4,
                              usePointStyle: true
                          }
                      },
                      scales: {
                          x: { 
                              grid: { display: false, drawBorder: false }, 
                              ticks: { color: '#6b7280', font: { family: 'ui-monospace, SFMono-Regular, monospace', size: 10 } } 
                          },
                          y: { 
                              type: 'linear', 
                              display: true, 
                              position: 'left', 
                              grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false }, 
                              ticks: { color: '#6b7280', font: { family: 'ui-monospace, SFMono-Regular, monospace', size: 10 }, maxTicksLimit: 6 } 
                          },
                          y1: { 
                              type: 'linear', 
                              display: true, 
                              position: 'right', 
                              grid: { display: false, drawBorder: false }, 
                              ticks: { color: '#6b7280', font: { family: 'ui-monospace, SFMono-Regular, monospace', size: 10 }, maxTicksLimit: 6 } 
                          }
                      }
                  }
              });
          };

          if (typeof Chart === 'undefined') {
              const s = document.createElement('script');
              s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
              s.onload = initChart;
              document.head.appendChild(s);
          } else {
              // Short timeout to ensure canvas is painted and sized correctly before drawing
              setTimeout(initChart, 50);
          }
      })();
    


      (function() {
          const initChart = () => {
              const ctx = document.getElementById('apiMonitorChart_Target');
              if(!ctx || !window.Chart) return;
              
              if (window.apiMonitorChartInstance_Target) {
                  window.apiMonitorChartInstance_Target.destroy();
              }

              const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
              gradient.addColorStop(0, 'rgba(59, 130, 246, 0.2)');
              gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
              
              window.apiMonitorChartInstance_Target = new Chart(ctx, {
                  type: 'line',
                  data: {
                      labels: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55'],
                      datasets: [{
                          label: 'Requests/min',
                          type: 'bar',
                          data: [4200, 4800, 5100, 4900, 6200, 5800, 7100, 6900, 8200, 7800, 9100, 8800],
                          backgroundColor: 'rgba(255, 255, 255, 0.03)',
                          hoverBackgroundColor: 'rgba(255, 255, 255, 0.08)',
                          borderRadius: 4,
                          barThickness: 'flex',
                          yAxisID: 'y'
                      }, {
                          label: 'Traffic Volume',
                          type: 'line',
                          data: [4500, 4900, 5300, 5100, 6400, 6000, 7300, 7100, 8400, 8000, 9300, 9000],
                          borderColor: '#3b82f6',
                          backgroundColor: gradient,
                          borderWidth: 2,
                          fill: true,
                          pointBackgroundColor: '#0A0A0A',
                          pointBorderColor: '#3b82f6',
                          pointBorderWidth: 2,
                          pointRadius: 0,
                          pointHoverRadius: 6,
                          tension: 0.4,
                          yAxisID: 'y'
                      }]
                  },
                  options: {
                      responsive: true,
                      maintainAspectRatio: false,
                      interaction: { mode: 'index', intersect: false },
                      plugins: {
                          legend: { display: false },
                          tooltip: {
                              backgroundColor: 'rgba(10, 10, 10, 0.95)',
                              titleColor: '#9ca3af',
                              bodyColor: '#fff',
                              borderColor: 'rgba(255,255,255,0.1)',
                              borderWidth: 1,
                              padding: 12,
                              bodyFont: { family: 'ui-sans-serif, system-ui, sans-serif', size: 13 },
                              titleFont: { size: 12, weight: 'normal' },
                              displayColors: true,
                              boxPadding: 4,
                              usePointStyle: true,
                              cornerRadius: 8
                          }
                      },
                      scales: {
                          x: { 
                              grid: { display: false, drawBorder: false }, 
                              ticks: { color: '#6b7280', font: { family: 'ui-mono, SFMono-Regular, monospace', size: 10 }, maxRotation: 0 } 
                          },
                          y: { 
                              type: 'linear', 
                              display: true, 
                              position: 'left', 
                              grid: { color: 'rgba(255,255,255,0.05)', drawBorder: false }, 
                              ticks: { color: '#6b7280', font: { family: 'ui-mono, SFMono-Regular, monospace', size: 10 }, maxTicksLimit: 5 },
                              border: { dash: [4, 4] }
                          }
                      }
                  }
              });
          };

          if (typeof Chart === 'undefined') {
              const s = document.createElement('script');
              s.src = 'https://cdn.jsdelivr.net/npm/chart.js';
              s.onload = initChart;
              document.head.appendChild(s);
          } else {
              setTimeout(initChart, 50);
          }
      })();
    


        document.addEventListener('DOMContentLoaded', () => {
            if (window.lucide) {
              window.lucide.createIcons();
            }

            const mainChart = document.getElementById('main-chart-bars');
            const sideChart = document.getElementById('side-chart-bars');
            if(mainChart) for(let i=0; i<40; i++) {
              const h = Math.random() * 60 + 20; const s = Math.random() * 0.6 + 0.2;
              const col = document.createElement('div'); col.className = 'flex-1 flex flex-col justify-end gap-[1px] h-full group cursor-pointer';
              const r = document.createElement('div'); r.className = 'w-full bg-sky-400/80 rounded-t-[1px]'; r.style.height = `${h * s}%`;
              const d = document.createElement('div'); d.className = 'w-full bg-indigo-500/90 rounded-b-[1px]'; d.style.height = `${h * (1-s)}%`;
              col.append(r, d); mainChart.appendChild(col);
            }
            if(sideChart) for(let i=0; i<12; i++) {
              const h = Math.random() * 70 + 10; const b = document.createElement('div');
              b.className = 'w-3 bg-indigo-500/70 hover:bg-indigo-400 rounded-t-sm transition-all cursor-pointer';
              b.style.height = `${h}%`; sideChart.appendChild(b);
            }
            const canvas = document.getElementById("glcanvas");
            const gl = canvas.getContext("webgl");
            if (gl) {
              const vs = `attribute vec4 p; void main() { gl_Position = p; }`;
              const fs = `precision mediump float; uniform vec2 r; uniform float t; float rnd(vec2 s) { return fract(sin(dot(s, vec2(12.98,78.23))) * 43758.54); } void main() { vec2 uv = gl_FragCoord.xy/r; float n = rnd(uv + t * 0.0001) * 0.04; vec3 c = vec3(0.04 + n, 0.05 + uv.y * 0.05 + n, 0.12 + uv.y * 0.08 + n); gl_FragColor = vec4(c, 1.0); }`;
              const s = (t, src) => { const sh = gl.createShader(t); gl.shaderSource(sh, src); gl.compileShader(sh); return sh; };
              const pr = gl.createProgram(); gl.attachShader(pr, s(gl.VERTEX_SHADER, vs)); gl.attachShader(pr, s(gl.FRAGMENT_SHADER, fs)); gl.linkProgram(pr);
              gl.useProgram(pr); const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b);
              gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([1,1,-1,1,1,-1,-1,-1]), gl.STATIC_DRAW);
              const draw = (time) => {
                if (canvas.width !== canvas.clientWidth) { canvas.width = canvas.clientWidth; canvas.height = canvas.clientHeight; gl.viewport(0, 0, canvas.width, canvas.height); }
                const vp = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(vp); gl.vertexAttribPointer(vp, 2, gl.FLOAT, false, 0, 0);
                gl.uniform2f(gl.getUniformLocation(pr, "r"), canvas.width, canvas.height);
                gl.uniform1f(gl.getUniformLocation(pr, "t"), time); gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4); requestAnimationFrame(draw);
              }; draw(0);
            }
          });
      


                    (function() {
                const testimonials = [{
                    q: '"Frame transformed our engineering culture. The design system they built didn\'t just look good—it became the scalable engine for our entire product roadmap."',
                    a: "ELENA RODRIGUEZ",
                    r: "VP PRODUCT, ACME CORP",
                    i: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d93fdd79-8748-45cc-bf20-725a75594265_320w.webp"
                  },
                  {
                    q: '"Their approach to AI-assisted workflows is unmatched. We managed to reduce our interface complexity by 40% while increasing user engagement."',
                    a: "MARCUS CHEN",
                    r: "HEAD OF DESIGN, NEXUS",
                    i: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=320&q=80"
                  },
                  {
                    q: '"The precision in their design language is incredible. Frame doesn\'t just build UI; they build logical systems that anticipate user needs."',
                    a: "SARAH JENKINS",
                    r: "CTO, FLUX",
                    i: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=320&q=80"
                  }
                ];

                let currentIdx = 0;
                const quoteWrapper = document.getElementById('quote-wrapper-aura');
                const authorWrapper = document.getElementById('author-wrapper-aura');
                const quoteText = document.getElementById('testimonial-quote-aura');
                const authorName = document.getElementById('testimonial-author-aura');
                const authorRole = document.getElementById('testimonial-role-aura');
                const authorAvatar = document.getElementById('testimonial-avatar-aura');

                function rotate() {
                  if (!quoteWrapper || !authorWrapper) return;

                  quoteWrapper.style.opacity = '0';
                  quoteWrapper.style.transform = 'translateY(12px)';
                  authorWrapper.style.opacity = '0';
                  authorWrapper.style.transform = 'translateY(12px)';

                  setTimeout(() => {
                    currentIdx = (currentIdx + 1) % testimonials.length;
                    const next = testimonials[currentIdx];

                    if (quoteText) quoteText.textContent = next.q;
                    if (authorName) authorName.textContent = next.a;
                    if (authorRole) authorRole.textContent = next.r;
                    if (authorAvatar) authorAvatar.src = next.i;

                    quoteWrapper.style.opacity = '1';
                    quoteWrapper.style.transform = 'translateY(0)';
                    authorWrapper.style.opacity = '1';
                    authorWrapper.style.transform = 'translateY(0)';
                  }, 750);
                }

                setInterval(rotate, 6000);

                if (window.lucide) {
                  window.lucide.createIcons();
                }
              })();
            


    document.addEventListener("DOMContentLoaded", function () {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const firstSection = document.querySelector("section");
      const heroShell = document.querySelector('div[class*="lg:px-10"][class*="-mt-20"]');
      const revealGroups = [
        ...document.querySelectorAll("nav, aside, section, footer"),
        ...document.querySelectorAll("section h1, section h2, section h3, section p"),
        ...document.querySelectorAll("section .grid > div, section .group, section button, footer .grid > div, section header, section article")
      ];

      const seen = new Set();
      const revealTargets = revealGroups.filter(function (node) {
        if (!node || seen.has(node)) return false;
        seen.add(node);
        return true;
      });

      revealTargets.forEach(function (node, index) {
        if (node.closest("nav")) {
          node.dataset.reveal = "nav";
        } else if (heroShell && (node === heroShell || heroShell.contains(node))) {
          node.dataset.reveal = node === heroShell ? "panel" : "hero";
        } else if (node.closest("section") === firstSection) {
          node.dataset.reveal = "hero";
        } else {
          node.dataset.reveal = "block";
        }

        node.style.setProperty("--reveal-delay", (index % 10) * 85 + "ms");
      });

      if (heroShell) {
        heroShell.classList.add("hero-shell");
      }

      if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        revealTargets.forEach(function (node) {
          node.classList.add("is-visible");
        });
        return;
      }

      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      }, {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px"
      });

      revealTargets.forEach(function (node) {
        observer.observe(node);
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<aside className="fixed hidden lg:flex flex-col bg-[#0B0F14] w-16 z-[60] pointer-events-auto border-white/10 border-r pt-6 pb-6 top-0 bottom-0 left-0 items-center justify-between" data-reveal="block" style={{-RevealDelay: '0ms'}}>
<div className="flex flex-col items-center gap-6">
<div className="w-4 h-4 bg-blue-500"></div>
<div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
</div>
<div className="rotate-180" style={{writingMode: 'vertical-rl'}}>
<span className="text-[10px] font-mono tracking-[0.3em] text-slate-500 uppercase">
          System_Core_01
        </span>
</div>
<div className="flex flex-col items-center gap-6">
<div className="w-px h-16 bg-gradient-to-t from-white/20 to-transparent"></div>
<div className="w-1.5 h-1.5 bg-slate-600 rounded-full"></div>
</div>
</aside>
<aside className="fixed right-0 top-0 bottom-0 w-16 border-l border-white/10 bg-[#0B0F14] z-[60] hidden lg:flex flex-col justify-between items-center py-6 pointer-events-auto" data-reveal="block" style={{-RevealDelay: '85ms'}}>
<div className="flex flex-col items-center gap-6">
<div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
</div>
<div className="rotate-180" style={{writingMode: 'vertical-rl'}}>
<span className="text-[10px] font-mono tracking-[0.3em] text-slate-500 uppercase">
          Live_Stream
        </span>
</div>
<div className="flex flex-col items-center gap-6">
<div className="w-px h-16 bg-gradient-to-t from-white/20 to-transparent"></div>
<div className="w-1.5 h-1.5 bg-blue-500 animate-pulse rounded-full"></div>
</div>
</aside>


<nav className="fixed z-50 top-0 right-0 left-0 backdrop-blur-md border-b border-white/10 bg-[#0B0F14]/80 lg:left-16 lg:right-16" data-reveal="nav" style={{-RevealDelay: '170ms'}}>
<div className="flex h-16 mr-auto ml-auto pr-6 pl-6 items-center justify-between lg:px-10 max-w-full">
<a className="flex items-center gap-3 uppercase text-xl font-black text-white tracking-[0.2em] font-sans group" href="#">
<span className="">Square</span>
</a>
<div className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-widest text-slate-400 uppercase">
<a className="hover:text-blue-400 transition-colors font-sans" href="#">
            Product
          </a>
<a className="hover:text-blue-400 transition-colors font-sans" href="#">
            Docs
          </a>
<a className="hover:text-blue-400 transition-colors font-sans" href="#">
            API
          </a>
<a className="hover:text-blue-400 transition-colors font-sans" href="#">
            Pricing
          </a>
</div>
<div className="flex items-center gap-4">
<a className="text-[11px] font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors mr-4 font-sans" href="#">
            Login
          </a>
<a className="text-[11px] font-mono font-bold bg-blue-600/10 border border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white px-6 py-2 transition-all uppercase tracking-widest shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] font-sans" href="#">
            Start Monitoring
          </a>
</div>
</div>
</nav>

<section className="bg-transparent w-full border border-white/10 pb-24 md:pb-32 mb-60 relative" data-reveal="hero" style={{-RevealDelay: '255ms'}}>

<div className="relative w-full h-[550px] lg:h-[700px] flex flex-col justify-center overflow-hidden">

<div className="absolute inset-0 w-full h-full -z-10" data-us-project="gPjOtmwSsPacwYjTiG41" style={{width: '100%', height: '100%'}}></div>

<div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0B0F14] to-transparent z-0 pointer-events-none"></div>

<div className="mx-auto px-6 lg:px-10 w-full relative z-10 pb-16 lg:pb-32 max-w-full">
<div className="flex flex-col lg:flex-row gap-x-8 gap-y-8 items-end justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-3 mb-6">
<div className="w-2 h-2 bg-blue-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-blue-400 tracking-[0.3em]">
                  System online • v4.2.0
                </span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter text-white leading-[0.9] font-manrope font-medium" data-reveal="hero" style={{-RevealDelay: '255ms'}}>
                Monitor API endpoints
                <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  with absolute precision
                </span>
</h1>
</div>
<div className="max-w-md">
<p className="mb-8 text-xs md:text-sm font-sans leading-relaxed text-slate-400" data-reveal="hero" style={{-RevealDelay: '340ms'}}>
                The ultimate telemetry platform for modern APIs. Track
                endpoints, debug complex requests, and monitor system health in
                real time through a unified command center.
              </p>
<div className="flex gap-4">
<button className="group relative inline-flex items-center gap-4 bg-blue-600 px-6 py-3 text-[11px] font-bold tracking-[0.2em] text-white transition-all hover:bg-blue-500 font-sans" data-reveal="hero" style={{-RevealDelay: '0ms'}}>
<span className="relative z-10">Initialize Dashboard</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7 7 7-7 7"></path>
</svg>
</button>
<button className="px-6 py-3 border border-white/20 text-white text-[11px] font-bold tracking-[0.2em] hover:bg-white/5 transition-colors font-sans" data-reveal="hero" style={{-RevealDelay: '85ms'}}>
                  Read Docs
                </button>
</div>
</div>
</div>
</div>
</div>

<div className="lg:px-10 -mt-20 lg:-mt-32 max-w-[1400px] z-20 mr-auto ml-auto pr-6 pl-6 relative hero-shell">
<div className="flex flex-col lg:flex-row overflow-hidden bg-[#0A0A0A] w-full lg:h-[850px] border border-white/10 shadow-2xl rounded-2xl relative">

<aside className="hidden lg:flex flex-col flex-shrink-0 bg-[#0A0A0A] w-64 h-full border-r border-white/10" data-reveal="hero" style={{-RevealDelay: '340ms'}}>
<div className="flex h-16 border-b border-white/10 px-6 items-center gap-3">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
<span className="text-sm font-medium tracking-tight text-white">API Monitor</span>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-4 space-y-6 hide-scrollbar" data-reveal="nav" style={{-RevealDelay: '425ms'}}>

<div className="">
<p className="px-3 text-xs font-medium text-gray-500 mb-2" data-reveal="nav" style={{-RevealDelay: '425ms'}}>Overview</p>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10 text-gray-100 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
<span className="text-[13px] font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-white/5 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
<span className="text-[13px] font-medium">Endpoints</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-white/5 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
<span className="text-[13px] font-medium">Traces</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-white/5 transition-colors" href="#">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
<span className="text-[13px] font-medium">Logs</span>
</a>
</div>
</div>

<div className="">
<p className="px-3 text-xs font-medium text-gray-500 mb-2" data-reveal="nav" style={{-RevealDelay: '510ms'}}>Infrastructure</p>
<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-white/5 transition-colors" href="#">
<svg className="" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="text-[13px] font-medium">Clusters</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-white/5 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-[13px] font-medium">Edge Nodes</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-white/5 transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-[13px] font-medium">Settings</span>
</a>
</div>
</div>
</nav>
<div className="p-4 border-t border-white/10">
<div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
<img alt="Profile" className="w-8 h-8 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="flex-1 min-w-0">
<p className="text-[13px] font-medium text-gray-200 truncate" data-reveal="hero" style={{-RevealDelay: '595ms'}}>Vercel Eng Team</p>
<p className="text-[11px] text-gray-500 truncate" data-reveal="hero" style={{-RevealDelay: '680ms'}}>Production</p>
</div>
<svg className="text-gray-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</div>
</aside>
<main className="flex-1 flex flex-col min-w-0 bg-[#000000]">

<header className="h-16 flex items-center justify-between px-6 lg:px-8 border-b border-white/10 bg-[#000000]/90 backdrop-blur-xl sticky top-0 z-20" data-reveal="hero" style={{-RevealDelay: '170ms'}}>
<div className="flex items-center gap-2 text-[13px] text-gray-400">
<span className="hover:text-gray-100 cursor-pointer transition-colors">Dashboard</span>
<span>/</span>
<span className="text-gray-100 font-medium">Telemetry</span>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-white/[0.03] border border-white/10 rounded-md px-3 py-1.5 focus-within:border-white/20 transition-all w-64 group" data-reveal="hero" style={{-RevealDelay: '255ms'}}>
<svg className="text-gray-500 mr-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="bg-transparent border-none outline-none text-[13px] text-gray-200 w-full placeholder:text-gray-600" placeholder="Search endpoints..." type="text"/>
<span className="text-[10px] font-medium text-gray-500 border border-white/10 rounded px-1.5 py-0.5">/</span>
</div>
<button className="w-8 h-8 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center hover:bg-white/[0.05] transition-colors relative" data-reveal="hero" style={{-RevealDelay: '340ms'}}>
<span className="absolute top-0 right-0 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#000000]"></span>
<svg className="text-gray-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-6 hide-scrollbar relative z-10">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-2">
<div className="">
<h1 className="text-2xl tracking-tight text-gray-100 font-medium mb-1" data-reveal="hero" style={{-RevealDelay: '765ms'}}>Network Status</h1>
<div className="flex items-center gap-2 text-[13px] text-gray-400">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              All systems operating normally
            </div>
</div>
<div className="flex items-center gap-3">
<div className="flex bg-white/[0.03] border border-white/10 rounded-lg p-0.5">
<button className="px-3 py-1.5 text-[13px] font-medium rounded-md bg-white/10 text-gray-100 shadow-sm" data-reveal="hero" style={{-RevealDelay: '425ms'}}>1H</button>
<button className="px-3 py-1.5 text-[13px] font-medium rounded-md text-gray-400 hover:text-gray-200 transition-colors" data-reveal="hero" style={{-RevealDelay: '510ms'}}>24H</button>
<button className="px-3 py-1.5 text-[13px] font-medium rounded-md text-gray-400 hover:text-gray-200 transition-colors" data-reveal="hero" style={{-RevealDelay: '595ms'}}>7D</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors" data-reveal="hero" style={{-RevealDelay: '680ms'}}>
<div className="flex items-center justify-between text-gray-400 mb-4">
<span className="text-[13px] font-medium">Total Requests</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium tracking-tight text-gray-100">142.4M</span>
<span className="text-xs font-medium text-emerald-400 flex items-center"><svg className="mr-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>12.4%</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors" data-reveal="hero" style={{-RevealDelay: '765ms'}}>
<div className="flex items-center justify-between text-gray-400 mb-4">
<span className="text-[13px] font-medium">P99 Latency</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium tracking-tight text-gray-100">124ms</span>
<span className="text-xs font-medium text-emerald-400 flex items-center"><svg className="mr-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m19 12-7 7-7-7"></path><path d="M12 5v14"></path></svg>5ms</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors" data-reveal="hero" style={{-RevealDelay: '0ms'}}>
<div className="flex items-center justify-between text-gray-400 mb-4">
<span className="text-[13px] font-medium">Error Rate</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium tracking-tight text-gray-100">0.04%</span>
<span className="text-xs font-medium text-gray-500 flex items-center"><svg className="mr-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line></svg>Flat</span>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-colors" data-reveal="hero" style={{-RevealDelay: '85ms'}}>
<div className="flex items-center justify-between text-gray-400 mb-4">
<span className="text-[13px] font-medium">Active Nodes</span>
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-medium tracking-tight text-gray-100">1,204</span>
<span className="text-xs font-medium text-emerald-400 flex items-center"><svg className="mr-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>12</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border border-white/10 bg-white/[0.01] p-6 flex flex-col h-[380px]" data-reveal="hero" style={{-RevealDelay: '170ms'}}>
<div className="flex justify-between items-center mb-6">
<h2 className="text-sm font-medium text-gray-100" data-reveal="hero" style={{-RevealDelay: '0ms'}}>Network Traffic &amp; Latency</h2>
</div>
<div className="relative flex-1 w-full h-full min-h-0">
<canvas className="" height="572" id="apiMonitorChart" style={{display: 'block', boxSizing: 'border-box', height: '286px', width: '607.3px'}} width="1214"></canvas>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.01] p-6 flex flex-col" data-reveal="hero" style={{-RevealDelay: '255ms'}}>
<div className="flex justify-between items-center mb-6">
<h2 className="text-sm font-medium text-gray-100" data-reveal="hero" style={{-RevealDelay: '85ms'}}>Highest Latency Endpoints</h2>
</div>
<div className="flex-1 flex flex-col justify-center space-y-6">
<div className="space-y-2">
<div className="flex justify-between items-end">
<span className="text-xs font-mono text-gray-300">POST /api/v1/checkout</span>
<span className="text-xs font-mono text-amber-400">842ms</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[84%] rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-end">
<span className="text-xs font-mono text-gray-300">GET /api/v1/search</span>
<span className="text-xs font-mono text-amber-400">620ms</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-amber-400 w-[62%] rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-end">
<span className="text-xs font-mono text-gray-300">POST /api/v1/webhooks</span>
<span className="text-xs font-mono text-blue-400">415ms</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[41%] rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-end">
<span className="text-xs font-mono text-gray-300">GET /api/v1/products</span>
<span className="text-xs font-mono text-emerald-400">180ms</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[18%] rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-end">
<span className="text-xs font-mono text-gray-300">GET /api/v1/users</span>
<span className="text-xs font-mono text-emerald-400">112ms</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[11%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-white/[0.01] overflow-hidden">
<div className="p-6 border-b border-white/10 flex items-center justify-between">
<h2 className="text-sm font-medium text-gray-100" data-reveal="hero" style={{-RevealDelay: '170ms'}}>Recent API Anomalies</h2>
<button className="text-xs font-medium text-gray-400 hover:text-gray-100 transition-colors" data-reveal="hero" style={{-RevealDelay: '340ms'}}>View all logs →</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-white/10">Method</th>
<th className="px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-white/10">Path</th>
<th className="px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-white/10">Status</th>
<th className="px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-white/10">Latency</th>
<th className="px-6 py-4 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-white/10 text-right">Time</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-emerald-400 font-mono text-xs">POST</td>
<td className="px-6 py-4 text-gray-300 font-mono text-xs">/api/v1/checkout</td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded-md bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">500 ERROR</span></td>
<td className="px-6 py-4 text-gray-400 font-mono text-xs">1,204ms</td>
<td className="px-6 py-4 text-gray-500 text-right font-mono text-xs">2m ago</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-blue-400 font-mono text-xs">GET</td>
<td className="px-6 py-4 text-gray-300 font-mono text-xs">/api/v1/search?q=query</td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 text-xs font-medium border border-amber-500/20">429 LIMIT</span></td>
<td className="px-6 py-4 text-gray-400 font-mono text-xs">45ms</td>
<td className="px-6 py-4 text-gray-500 text-right font-mono text-xs">15m ago</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-red-400 font-mono text-xs">DELETE</td>
<td className="px-6 py-4 text-gray-300 font-mono text-xs">/api/v1/users/u_123</td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded-md bg-gray-500/10 text-gray-400 text-xs font-medium border border-gray-500/20">401 UNAUTH</span></td>
<td className="px-6 py-4 text-gray-400 font-mono text-xs">12ms</td>
<td className="px-6 py-4 text-gray-500 text-right font-mono text-xs">1h ago</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 text-emerald-400 font-mono text-xs">POST</td>
<td className="px-6 py-4 text-gray-300 font-mono text-xs">/api/v1/webhooks/stripe</td>
<td className="px-6 py-4"><span className="px-2 py-0.5 rounded-md bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20">502 BAD_GATEWAY</span></td>
<td className="px-6 py-4 text-gray-400 font-mono text-xs">3,401ms</td>
<td className="px-6 py-4 text-gray-500 text-right font-mono text-xs">3h ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>


</div>
</div>
</section>


<section className="overflow-hidden w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full shadow-black/60 text-slate-300 bg-[#0B0F14] border-white/10 border mr-auto ml-auto shadow-2xl max-w-full" data-reveal="block" style={{-RevealDelay: '510ms'}}>
<div className="mx-auto flex flex-col">

<div className="lg:p-12 xl:p-16 bg-[#0B0F14] border-white/10 border-b pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-1.5 h-1.5 bg-blue-500 animate-pulse"></div>
<span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest font-sans">
              CAPABILITIES_OVERVIEW
            </span>
</div>
<h2 className="text-3xl md:text-5xl uppercase tracking-tight text-white leading-tight font-manrope font-medium" data-reveal="block" style={{-RevealDelay: '255ms'}}>
            System Architecture
            <br/>
<span className="font-medium text-slate-500 font-manrope">
              &amp; Core Modules
            </span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10">

<div className="bg-[#0B0F14] hover:bg-[#111827] transition-all duration-300 p-8 lg:p-10 flex flex-col justify-between min-h-[360px] relative group cursor-default" data-reveal="block" style={{-RevealDelay: '425ms'}}>
<div className="">
<div className="flex justify-between items-start mb-12">
<span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors font-sans">
                  MOD_01 // MONITOR
                </span>
<div className="w-1.5 h-1.5 bg-white/10 group-hover:bg-blue-500 transition-colors"></div>
</div>
<div className="h-20 flex flex-col justify-end mb-10">
<div className="flex items-end gap-1.5 h-full opacity-70 group-hover:opacity-100 transition-opacity">
<div className="w-1.5 bg-slate-700 h-[20%] group-hover:bg-blue-500/30 transition-colors"></div>
<div className="w-1.5 bg-slate-700 h-[40%] group-hover:bg-blue-500/50 transition-colors"></div>
<div className="w-1.5 bg-slate-700 h-[30%] group-hover:bg-blue-500/40 transition-colors"></div>
<div className="w-1.5 bg-slate-700 h-[60%] group-hover:bg-blue-500/60 transition-colors"></div>
<div className="w-1.5 bg-slate-700 h-[50%] group-hover:bg-blue-500/50 transition-colors"></div>
<div className="w-1.5 bg-slate-600 h-[80%] group-hover:bg-blue-400 transition-colors group-hover:shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>
<div className="w-1.5 bg-slate-700 h-[40%] group-hover:bg-blue-500/30 transition-colors"></div>
</div>
</div>
</div>
<div className="">
<h3 className="text-lg font-semibold uppercase tracking-tight text-white mb-3 font-sans" data-reveal="block" style={{-RevealDelay: '340ms'}}>
                Real-time Monitoring
              </h3>
<p className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-relaxed font-sans" data-reveal="block" style={{-RevealDelay: '425ms'}}>
                Continuous telemetry streaming with microsecond precision and
                latency tracking.
              </p>
</div>
</div>

<div className="bg-[#0B0F14] hover:bg-[#111827] transition-all duration-300 p-8 lg:p-10 flex flex-col justify-between min-h-[360px] relative group cursor-default" data-reveal="block" style={{-RevealDelay: '510ms'}}>
<div className="">
<div className="flex justify-between items-start mb-12">
<span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest group-hover:text-emerald-400 transition-colors font-sans">
                  003 THE ENGINEERS
                </span>
<div className="w-1.5 h-1.5 bg-white/10 group-hover:bg-emerald-500 transition-colors"></div>
</div>
<div className="h-20 flex flex-col justify-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity mb-10">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 bg-slate-600 group-hover:bg-emerald-400 transition-colors group-hover:shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
<div className="h-px w-12 bg-slate-700 group-hover:bg-emerald-500/30 transition-colors"></div>
<span className="text-[9px] font-mono text-slate-500 group-hover:text-emerald-400 transition-colors font-sans">
                    API_GATEWAY
                  </span>
</div>
<div className="flex items-center gap-3 pl-6">
<div className="w-1.5 h-1.5 bg-slate-700 group-hover:bg-slate-500 transition-colors"></div>
<div className="h-px w-8 bg-slate-800 group-hover:bg-slate-600 transition-colors"></div>
<span className="text-[9px] font-mono text-slate-600 group-hover:text-slate-400 transition-colors font-sans">
                    TASK_QUEUE
                  </span>
</div>
</div>
</div>
<div>
<h3 className="text-lg font-semibold uppercase tracking-tight text-white mb-3 font-sans" data-reveal="block" style={{-RevealDelay: '510ms'}}>
                Request Tracing
              </h3>
<p className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-relaxed font-sans" data-reveal="block" style={{-RevealDelay: '595ms'}}>
                Map API requests and trace complex execution paths across
                microservices.
              </p>
</div>
</div>

<div className="bg-[#0B0F14] hover:bg-[#111827] transition-all duration-300 p-8 lg:p-10 flex flex-col justify-between min-h-[360px] relative group cursor-default" data-reveal="block" style={{-RevealDelay: '595ms'}}>
<div className="">
<div className="flex justify-between items-start mb-12">
<span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors font-sans">
                  MOD_03 // ALERTS
                </span>
<div className="w-1.5 h-1.5 bg-white/10 group-hover:bg-blue-500 transition-colors"></div>
</div>
<div className="h-20 flex items-center gap-2 opacity-70 group-hover:opacity-100 transition-opacity mb-10">
<div className="px-2 py-1 bg-[#0B0F14] border border-slate-700 group-hover:border-slate-500 text-[9px] font-mono text-slate-500 group-hover:text-slate-300 transition-all font-sans">
                  RECV
                </div>
<span className="text-slate-700 group-hover:text-slate-500 text-[10px] font-sans">
                  &gt;
                </span>
<div className="px-2 py-1 bg-[#0B0F14] border border-slate-700 group-hover:border-blue-500/50 text-[9px] font-mono text-slate-500 group-hover:text-blue-400 transition-all group-hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] font-sans">
                  EXEC
                </div>
<span className="text-slate-700 group-hover:text-slate-500 text-[10px] font-sans">
                  &gt;
                </span>
<div className="px-2 py-1 bg-[#0B0F14] border border-slate-700 group-hover:border-slate-500 text-[9px] font-mono text-slate-500 group-hover:text-slate-300 transition-all font-sans">
                  SYNC
                </div>
</div>
</div>
<div className="">
<h3 className="text-lg font-semibold uppercase tracking-tight text-white mb-3 font-sans" data-reveal="block" style={{-RevealDelay: '680ms'}}>
                Automated Alerts
              </h3>
<p className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-relaxed font-sans" data-reveal="block" style={{-RevealDelay: '765ms'}}>
                Trigger reactive infrastructure changes and pipeline jobs based
                on API latency and errors.
              </p>
</div>
</div>

<div className="hover:bg-[#111827] transition-all duration-300 lg:p-10 flex flex-col min-h-[360px] group cursor-default bg-[#0B0F14] pt-8 pr-8 pb-8 pl-8 relative justify-between" data-reveal="block" style={{-RevealDelay: '680ms'}}>
<div className="">
<div className="flex justify-between items-start mb-12">
<span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest group-hover:text-red-400 transition-colors font-sans">
                  MOD_04 // ANOMALY
                </span>
<div className="w-1.5 h-1.5 bg-white/10 group-hover:bg-red-500 transition-colors"></div>
</div>
<div className="h-20 relative w-full flex items-end opacity-70 group-hover:opacity-100 transition-opacity border-b border-slate-800 group-hover:border-slate-600 pb-2 mb-10">
<div className="absolute top-[40%] left-0 w-full h-px bg-slate-800 group-hover:bg-red-500/20 border-t border-dashed border-slate-700 group-hover:border-red-500/40 transition-colors"></div>
<div className="flex items-end gap-1.5 w-full h-full z-10">
<div className="w-1 h-[20%] bg-slate-700 group-hover:bg-slate-500"></div>
<div className="w-1 h-[30%] bg-slate-700 group-hover:bg-slate-500"></div>
<div className="w-1 h-[25%] bg-slate-700 group-hover:bg-slate-500"></div>
<div className="w-1 h-[80%] bg-slate-600 group-hover:bg-red-500 transition-colors group-hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
<div className="w-1 h-[20%] bg-slate-700 group-hover:bg-slate-500"></div>
</div>
</div>
</div>
<div className="">
<h3 className="text-lg font-semibold uppercase tracking-tight text-white mb-3 font-sans" data-reveal="block" style={{-RevealDelay: '0ms'}}>
                Anomaly Detection
              </h3>
<p className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-relaxed font-sans" data-reveal="block" style={{-RevealDelay: '85ms'}}>
                Algorithmic identification of edge cases, timeout limits, and
                systemic deviations.
              </p>
</div>
</div>

<div className="bg-[#0B0F14] hover:bg-[#111827] transition-all duration-300 p-8 lg:p-10 flex flex-col justify-between min-h-[360px] relative group cursor-default" data-reveal="block" style={{-RevealDelay: '765ms'}}>
<div className="">
<div className="flex justify-between items-start mb-12">
<span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors font-sans">
                  MOD_05 // OBSERVE
                </span>
<div className="w-1.5 h-1.5 bg-white/10 group-hover:bg-blue-500 transition-colors"></div>
</div>
<div className="h-20 flex flex-col justify-end gap-3 font-mono text-[9px] w-full opacity-70 group-hover:opacity-100 transition-opacity mb-10">
<div className="flex justify-between items-center w-full">
<span className="text-slate-600 group-hover:text-slate-400 font-sans">
                    POST /v1/chat
                  </span>
<span className="text-slate-600 group-hover:text-emerald-400 font-sans">
                    200ms
                  </span>
</div>
<div className="flex justify-between items-center w-full">
<span className="text-slate-600 group-hover:text-slate-400 font-sans">
                    GET /v1/models
                  </span>
<span className="text-slate-600 group-hover:text-emerald-400 font-sans">
                    142ms
                  </span>
</div>
<div className="flex justify-between items-center w-full">
<span className="text-slate-600 group-hover:text-slate-400 font-sans">
                    POST /v1/train
                  </span>
<span className="text-slate-600 group-hover:text-amber-400 font-sans">
                    890ms
                  </span>
</div>
</div>
</div>
<div className="">
<h3 className="text-lg font-semibold uppercase tracking-tight text-white mb-3 font-sans" data-reveal="block" style={{-RevealDelay: '170ms'}}>
                API Observability
              </h3>
<p className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-relaxed font-sans" data-reveal="block" style={{-RevealDelay: '255ms'}}>
                Monitor endpoint health, routing latency, and overall payload
                characteristics.
              </p>
</div>
</div>

<div className="bg-[#0B0F14] hover:bg-[#111827] transition-all duration-300 p-8 lg:p-10 flex flex-col justify-between min-h-[360px] relative group cursor-default" data-reveal="block" style={{-RevealDelay: '0ms'}}>
<div className="">
<div className="flex justify-between items-start mb-12">
<span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest group-hover:text-blue-400 transition-colors font-sans">
                  MOD_06 // STREAM
                </span>
<div className="w-1.5 h-1.5 bg-white/10 group-hover:bg-blue-500 transition-colors"></div>
</div>
<div className="h-20 flex flex-col justify-start gap-1.5 font-mono text-[9px] w-full overflow-hidden relative opacity-70 group-hover:opacity-100 transition-opacity pt-2 mb-10">
<div className="text-slate-600 group-hover:text-slate-500 truncate font-sans">
                  &gt; SYS_INIT ok
                </div>
<div className="text-slate-600 group-hover:text-slate-400 truncate font-sans">
                  &gt; MEM_ALLOC 1024MB
                </div>
<div className="text-slate-600 group-hover:text-blue-400 truncate font-sans">
                  &gt; STREAM_CONNECTED...
                </div>
<div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-[#0B0F14] group-hover:from-[#111827] to-transparent transition-colors"></div>
</div>
</div>
<div className="">
<h3 className="text-lg font-semibold uppercase tracking-tight text-white mb-3 font-sans" data-reveal="block" style={{-RevealDelay: '340ms'}}>
                Log Streaming
              </h3>
<p className="text-xs font-mono text-slate-400 uppercase tracking-widest leading-relaxed font-sans" data-reveal="block" style={{-RevealDelay: '425ms'}}>
                Centralized ingestion of unstructured logs with real-time
                indexing capabilities.
              </p>
</div>
</div>
</div>
</div>
</section>
<div className="overflow-hidden text-slate-300 bg-[#0B0F14] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full mx-auto border border-white/10 shadow-2xl shadow-black/60 relative flex flex-col border-t-0 max-w-full">
<div className="lg:p-12 xl:p-16 bg-[#0B0F14] border-white/10 border-b pt-8 pr-8 pb-8 pl-8">
<div className="flex items-center gap-2 mb-6">
<div className="w-1.5 h-1.5 bg-blue-500 animate-pulse"></div>
<span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest font-sans">
            PRODUCT_PREVIEW
          </span>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
<h2 className="text-3xl md:text-5xl uppercase tracking-tight text-white leading-tight font-manrope font-medium">
            Command Center
            <br/>
<span className="text-slate-500 font-manrope font-medium">
              Experience the interface.
            </span>
</h2>
<p className="max-w-md text-sm font-mono text-slate-400 leading-relaxed uppercase tracking-widest font-sans">
            Dive into our powerful telemetry dashboard. Monitor real-time
            performance, analyze active subscriptions, and track system
            resources with absolute precision.
          </p>
</div>
</div>
<div className="z-20 mt-8 lg:mt-12 mb-0 relative w-full">
<div className="flex flex-col bg-[#050505] w-full border-t border-white/10 shadow-2xl overflow-hidden relative p-4 lg:p-8 space-y-6">

<header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-2 pb-2 pt-2">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-lg">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
</div>
<div>
<h1 className="text-white font-medium tracking-tight text-xl">Command Center</h1>
<div className="flex items-center gap-2 mt-0.5">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<p className="text-gray-400 text-xs font-medium">Production Cluster • All systems operational</p>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center bg-[#0F0F0F] border border-white/10 rounded-full px-4 py-2 hover:border-white/20 transition-colors">
<svg className="text-gray-500 mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="bg-transparent text-sm w-32 outline-none text-white placeholder:text-gray-600 font-medium" placeholder="Search..." type="text"/>
<span className="text-[10px] text-gray-500 font-medium bg-white/5 border border-white/10 px-1.5 rounded ml-2">/</span>
</div>
<button className="px-5 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-gray-200 transition-colors">
            Deploy
         </button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[180px]">

<div className="md:col-span-4 lg:col-span-4 row-span-2 rounded-[24px] bg-[#0A0A0A] border border-white/5 p-6 lg:p-8 flex flex-col relative overflow-hidden group hover:bg-[#0D0D0D] transition-colors shadow-sm">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-70 transition-opacity duration-500"></div>
<div className="flex flex-col gap-5 relative z-10">
<div className="flex justify-between items-start gap-4">
<div>
<p className="text-[10px] font-mono uppercase tracking-[0.25em] text-stone-500 mb-3">Traffic Overview</p>
<div className="flex items-baseline gap-2 mt-1">
<div className="text-4xl lg:text-5xl font-medium tracking-tight text-white">142.4M</div>
<span className="text-xs font-medium text-stone-300 bg-white/5 border border-white/10 px-1.5 py-0.5 rounded-md flex items-center">
<svg className="mr-0.5" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                        12.4%
                      </span>
</div>
<p className="text-sm text-stone-400 mt-3 max-w-xl">Request volume, throughput drift, and live cluster responsiveness across the active window.</p>
</div>
<div className="flex bg-white/5 border border-white/10 rounded-lg p-0.5">
<button className="px-3 py-1 text-xs font-medium rounded-md bg-white/10 text-white shadow-sm">1H</button>
<button className="px-3 py-1 text-xs font-medium rounded-md text-gray-400 hover:text-white transition-colors">24H</button>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="border border-white/10 bg-white/[0.03] px-4 py-3 rounded-2xl">
<p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-2">Peak Load</p>
<p className="text-xl text-white font-medium">9.3k/min</p>
</div>
<div className="border border-white/10 bg-white/[0.03] px-4 py-3 rounded-2xl">
<p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-2">Error Drift</p>
<p className="text-xl text-white font-medium">0.04%</p>
</div>
<div className="border border-white/10 bg-white/[0.03] px-4 py-3 rounded-2xl">
<p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mb-2">Availability</p>
<p className="text-xl text-white font-medium">99.98%</p>
</div>
</div>
</div>
<div className="flex-1 w-full relative z-10 min-h-0 mt-4">
<canvas height="140" id="apiMonitorChart_Target" style={{display: 'block', boxSizing: 'border-box', height: '70px', width: '997.3px'}} width="1994"></canvas>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 rounded-[24px] bg-[#0A0A0A] border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden group hover:bg-[#0D0D0D] transition-colors shadow-sm">
<div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl transition-colors duration-500"></div>
<div className="flex justify-between items-start z-10">
<div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-stone-300 transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<span className="text-[10px] font-mono font-medium text-stone-300 bg-white/5 border border-white/10 px-2 py-1 rounded-full uppercase tracking-wider">Stable</span>
</div>
<div className="z-10 mt-auto">
<h3 className="text-gray-400 text-sm font-medium mb-1">P99 Latency</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">124</span>
<span className="text-base font-medium text-gray-500">ms</span>
</div>
<p className="text-xs text-stone-500 mt-3 uppercase tracking-[0.2em]">Consistent under peak traffic</p>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 rounded-[24px] bg-[#0A0A0A] border border-white/5 p-6 flex flex-col justify-between relative overflow-hidden group hover:bg-[#0D0D0D] transition-colors shadow-sm">
<div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full blur-2xl transition-colors duration-500"></div>
<div className="flex justify-between items-start z-10">
<div className="p-2.5 bg-white/5 rounded-xl border border-white/10 text-stone-300 transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>
</div>
<span className="text-[10px] font-mono font-medium text-stone-300 bg-white/5 border border-white/10 px-2 py-1 rounded-full uppercase tracking-wider">Observed</span>
</div>
<div className="z-10 mt-auto">
<h3 className="text-gray-400 text-sm font-medium mb-1">Error Rate</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-medium tracking-tight text-white">0.04</span>
<span className="text-base font-medium text-gray-500">%</span>
</div>
<p className="text-xs text-stone-500 mt-3 uppercase tracking-[0.2em]">Well below alert threshold</p>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 row-span-1 rounded-[24px] bg-gradient-to-br from-[#111] to-[#0A0A0A] border border-white/5 p-6 flex items-center justify-between relative overflow-hidden group hover:border-white/10 transition-all shadow-sm">
<div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500" style={{backgroundImage: 'radial-gradient(rgba(245,245,244,0.18) 1px, transparent 1px)', backgroundSize: '16px 16px', backgroundPosition: '-8px -8px', maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'}}></div>
<div className="z-10 flex flex-col justify-center h-full">
<h3 className="text-stone-300 text-sm font-medium mb-1">Active Edge Nodes</h3>
<div className="text-4xl font-medium tracking-tight text-white">1,204</div>
<p className="text-xs text-stone-500 mt-3 uppercase tracking-[0.2em]">Distributed across 18 regions</p>
</div>
<div className="z-10 hidden sm:flex gap-1.5 pr-4">
<div className="w-1.5 h-6 bg-white/40 rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-10 bg-white/65 rounded-full animate-[pulse_1.8s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-4 bg-white/30 rounded-full animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-8 bg-white/50 rounded-full animate-[pulse_2s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-12 bg-white/70 rounded-full animate-[pulse_1.6s_ease-in-out_infinite]"></div>
<div className="w-1.5 h-5 bg-white/35 rounded-full animate-[pulse_1.4s_ease-in-out_infinite]"></div>
</div>
</div>

<div className="md:col-span-4 lg:col-span-3 row-span-2 rounded-[24px] bg-[#0A0A0A] border border-white/5 p-6 lg:p-7 flex flex-col relative overflow-hidden group hover:bg-[#0D0D0D] transition-colors shadow-sm">
<div className="flex justify-between items-center mb-6 z-10">
<div>
<h3 className="text-white font-medium">Endpoint Queue</h3>
<p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-1">Ranked by response time</p>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
<svg className="text-gray-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="flex-1 flex flex-col justify-center space-y-6 z-10 w-full">
<div className="space-y-2">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 text-stone-300 border border-white/10">POST</span>
<span className="text-sm font-mono text-gray-300">/api/v1/checkout</span>
</div>
<span className="text-sm font-mono text-stone-300">842ms</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-white/70 w-[84%] rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 text-stone-300 border border-white/10">GET</span>
<span className="text-sm font-mono text-gray-300">/api/v1/search</span>
</div>
<span className="text-sm font-mono text-stone-300">620ms</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-white/55 w-[62%] rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 text-stone-300 border border-white/10">POST</span>
<span className="text-sm font-mono text-gray-300">/api/v1/webhooks</span>
</div>
<span className="text-sm font-mono text-stone-300">415ms</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-white/40 w-[41%] rounded-full"></div>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/5 text-stone-300 border border-white/10">GET</span>
<span className="text-sm font-mono text-gray-300">/api/v1/products</span>
</div>
<span className="text-sm font-mono text-stone-400">180ms</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-white/20 w-[18%] rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-4 lg:col-span-3 row-span-2 rounded-[24px] bg-[#050505] border border-white/5 p-6 lg:p-7 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors shadow-sm">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)]" style={{backgroundSize: '100% 32px'}}></div>
<div className="flex justify-between items-center mb-4 z-10">
<div>
<h3 className="text-white font-medium">Live Stream Logs</h3>
<p className="text-[10px] uppercase tracking-[0.2em] text-stone-500 mt-1">Recent request activity</p>
</div>
<div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse"></span>
<span className="text-[10px] font-mono text-stone-300 uppercase font-bold tracking-widest">Active</span>
</div>
</div>
<div className="flex-1 flex flex-col font-mono text-xs z-10 overflow-hidden relative pt-2">
<div className="space-y-4">
<div className="flex items-start gap-3 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors cursor-default">
<span className="text-gray-500 mt-0.5 w-16">12:04:01</span>
<span className="text-stone-300 font-bold mt-0.5">200</span>
<div className="flex-1 min-w-0">
<p className="text-gray-300 truncate">GET /api/v1/users/u_123</p>
<p className="text-gray-600 truncate mt-1">user_agent: Mozilla/5.0 ...</p>
</div>
<span className="text-gray-500 mt-0.5">12ms</span>
</div>
<div className="flex items-start gap-3 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors cursor-default">
<span className="text-gray-500 mt-0.5 w-16">12:04:02</span>
<span className="text-stone-200 font-bold mt-0.5">500</span>
<div className="flex-1 min-w-0">
<p className="text-gray-300 truncate">POST /api/v1/checkout</p>
<p className="text-stone-500 truncate mt-1">err: connection_timeout at db_main</p>
</div>
<span className="text-stone-300 mt-0.5">1,204ms</span>
</div>
<div className="flex items-start gap-3 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors cursor-default">
<span className="text-gray-500 mt-0.5 w-16">12:04:05</span>
<span className="text-stone-300 font-bold mt-0.5">429</span>
<div className="flex-1 min-w-0">
<p className="text-gray-300 truncate">GET /api/v1/search?q=query</p>
<p className="text-gray-600 truncate mt-1">rate_limit_exceeded: tier_free</p>
</div>
<span className="text-gray-500 mt-0.5">45ms</span>
</div>
<div className="flex items-start gap-3 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors cursor-default">
<span className="text-gray-500 mt-0.5 w-16">12:04:08</span>
<span className="text-stone-300 font-bold mt-0.5">201</span>
<div className="flex-1 min-w-0">
<p className="text-gray-300 truncate">POST /api/v1/webhooks/stripe</p>
<p className="text-gray-600 truncate mt-1">payload: evt_1O4...</p>
</div>
<span className="text-gray-500 mt-0.5">142ms</span>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
</div>
</div>
</div>


</div>
</div>

</div>
<section className="overflow-hidden w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full shadow-black/60 text-slate-300 bg-[#0B0F14] border-white/10 border mr-auto ml-auto shadow-2xl border-t-0 max-w-full" data-reveal="block" style={{-RevealDelay: '595ms'}}>
<div className="mx-auto grid grid-cols-1 lg:grid-cols-4 lg:divide-x divide-white/10">
<div className="flex flex-col" data-reveal="block" style={{-RevealDelay: '85ms'}}>
<div className="hidden lg:block bg-[#0B0F14] w-full h-32"></div>
<div className="bg-[#111827]/30 p-8 lg:p-10 border-t border-white/10 flex-1 flex flex-col justify-between min-h-[450px] hover:bg-[#111827]/80 transition-colors">
<div className="">
<div className="flex justify-between items-start mb-8">
<span className="text-slate-600 text-xs font-mono tracking-widest font-sans">
                  |
                </span>
<span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase font-mono font-sans">
                  TELEMETRY
                </span>
</div>
<p className="text-sm font-mono text-slate-400 leading-relaxed uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '510ms'}}>
                Identifying high-value use cases and roadmapping your API
                infrastructure journey.
              </p>
</div>
<div className="mt-20 flex items-end justify-between">
<span className="text-6xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600 font-manrope font-medium">
                01
              </span>
<div className="text-right">
<div className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase leading-relaxed font-mono font-sans">
                  REAL-TIME
                </div>
</div>
</div>
</div>
</div>
<div className="flex flex-col" data-reveal="block" style={{-RevealDelay: '170ms'}}>
<div className="hidden lg:block h-80 w-full bg-[#0B0F14]"></div>
<div className="lg:p-10 flex-1 flex flex-col min-h-[450px] bg-[#111827]/30 border-white/10 border-t pt-8 pr-8 pb-8 pl-8 justify-between hover:bg-[#111827]/80 transition-colors">
<div className="">
<div className="flex justify-between items-start mb-8">
<span className="text-slate-600 text-xs font-mono tracking-widest font-sans">
                  ||
                </span>
<span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase font-mono font-sans">
                  INFRASTRUCTURE
                </span>
</div>
<p className="text-sm font-mono text-slate-400 leading-relaxed uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '595ms'}}>
                Crafting adaptive interfaces that evolve with user intent and
                context.
              </p>
</div>
<div className="mt-20 flex items-end justify-between">
<span className="text-6xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600 font-manrope font-medium">
                02
              </span>
<div className="text-right">
<div className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase leading-relaxed font-mono font-sans">
                  SCALABLE
                </div>
</div>
</div>
</div>
</div>
<div className="flex flex-col" data-reveal="block" style={{-RevealDelay: '255ms'}}>
<div className="p-10 pb-20 bg-[#0B0F14] relative z-20">
<div className="flex items-center gap-3 mb-10">
<div className="w-1.5 h-1.5 bg-blue-500 animate-pulse"></div>
<span className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em] font-mono font-sans">
                002 CORE PILLARS
              </span>
</div>
<h2 className="text-5xl lg:text-7xl tracking-tighter uppercase leading-[0.9] mb-8 text-white font-manrope font-medium whitespace-nowrap" data-reveal="block" style={{-RevealDelay: '680ms'}}>
              SYSTEM
              <br/>
              ARCHITECTURE
            </h2>
<p className="text-xs font-mono text-slate-400 leading-relaxed uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '765ms'}}>
              Where technical feasibility meets exceptional system reliability.
            </p>
</div>
<div className="bg-[#111827]/30 p-8 lg:p-10 border-t border-white/10 flex-1 flex flex-col justify-between min-h-[450px] hover:bg-[#111827]/80 transition-colors">
<div className="">
<div className="flex justify-between items-start mb-8">
<span className="text-slate-600 text-xs font-mono tracking-widest font-sans">
                  |||
                </span>
<span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase font-mono font-sans">
                  OBSERVABILITY
                </span>
</div>
<p className="text-sm font-mono text-slate-400 leading-relaxed uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '0ms'}}>
                Scalable frontend architectures for real-time generative
                experiences.
              </p>
</div>
<div className="mt-20 flex items-end justify-between">
<span className="text-6xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600 font-manrope font-medium">
                03
              </span>
<div className="text-right">
<div className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase leading-relaxed font-mono font-sans">
                  TRACING
                </div>
</div>
</div>
</div>
</div>
<div className="flex flex-col" data-reveal="block" style={{-RevealDelay: '340ms'}}>
<div className="hidden lg:block h-[348px] w-full bg-[#0B0F14]"></div>
<div className="bg-[#111827]/30 p-8 lg:p-10 border-t border-white/10 flex-1 flex flex-col justify-between min-h-[450px] hover:bg-[#111827]/80 transition-colors">
<div className="">
<div className="flex justify-between items-start mb-8">
<span className="text-slate-600 text-xs font-mono tracking-widest font-sans">
                  ||||
                </span>
<span className="text-[10px] font-bold tracking-[0.2em] text-blue-400 uppercase font-mono font-sans">
                  ORCHESTRATION
                </span>
</div>
<p className="text-sm font-mono text-slate-400 leading-relaxed uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '85ms'}}>
                Optimizing models and interfaces for production-grade
                performance.
              </p>
</div>
<div className="mt-20 flex items-end justify-between">
<span className="text-6xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-600 font-manrope font-medium">
                04
              </span>
<div className="text-right">
<div className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase leading-relaxed font-mono font-sans">
                  CONTROL
                </div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="overflow-hidden w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full shadow-black/60 text-slate-300 bg-[#0B0F14] border-white/10 border mr-auto ml-auto relative shadow-2xl border-t-0 max-w-full" data-reveal="block" style={{-RevealDelay: '680ms'}}>
<div className="mx-auto w-full">
<div className="grid grid-cols-1 lg:grid-cols-4">

<div className="lg:border-r lg:p-10 flex flex-col min-h-[500px] bg-[#0B0F14] border-white/10 border-b pt-8 pr-8 pb-8 pl-8 justify-between" data-reveal="block" style={{-RevealDelay: '425ms'}}>
<div className="">
<div className="flex items-center gap-3 mb-12">
<div className="w-1.5 h-1.5 bg-blue-500"></div>
<span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase font-mono font-sans">
                  004 ALLOCATION
                </span>
</div>
<h2 className="text-4xl lg:text-5xl uppercase tracking-tighter text-white mb-6 font-manrope font-medium" data-reveal="block" style={{-RevealDelay: '170ms'}}>
                SYSTEM
                <br/>
                RESOURCES
              </h2>
<p className="text-[11px] font-mono text-slate-400 leading-relaxed max-w-xs mb-8 uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '255ms'}}>
                Flexible compute and telemetry allocations designed to fit your
                cluster's stage and needs.
              </p>
<div className="inline-flex bg-[#0B0F14] p-1 border border-white/10">
<button className="px-4 py-1.5 bg-blue-600/20 border border-blue-500 text-[10px] font-mono font-bold uppercase tracking-widest text-blue-400 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.2)] font-sans" data-reveal="block" style={{-RevealDelay: '510ms'}}>
                  Monthly
                </button>
<button className="px-4 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors font-sans" data-reveal="block" style={{-RevealDelay: '595ms'}}>
                  Annual
                </button>
</div>
</div>
<div className="mt-12">
<div className="flex items-center gap-2 text-[9px] font-mono font-bold uppercase tracking-widest text-slate-500">
<svg className="w-3 h-3 text-blue-500" data-icon-set="solar" data-solar="info-circle-linear" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none">
<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M12 17v-6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
<circle cx="1" cy="1" fill="currentColor" r="1" transform="matrix(1 0 0 -1 11 9)"></circle>
</g>
</svg>
<span className="font-sans">SLA Guarantee Available</span>
</div>
</div>
</div>

<div className="border-b lg:border-r border-white/10 bg-[#111827]/30 hover:bg-[#111827]/80 p-8 lg:p-10 flex flex-col relative group transition-colors" data-reveal="block" style={{-RevealDelay: '680ms'}}>
<div className="mb-6">
<h3 className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 mb-4 font-sans" data-reveal="block" style={{-RevealDelay: '340ms'}}>
                / DEVELOPER
              </h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl lg:text-5xl text-white tracking-tighter uppercase font-manrope font-medium">
                  $49
                </span>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-sans">
                  /mo
                </span>
</div>
<p className="text-[10px] font-mono text-slate-400 mt-6 h-10 leading-relaxed uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '425ms'}}>
                Perfect for MVPs, proof of concepts, and specific feature
                designs.
              </p>
</div>
<div className="flex-grow space-y-4 mb-8 border-t border-white/10 pt-6">
<ul className="space-y-4 font-mono">
<li className="flex items-start gap-3 text-[10px] uppercase tracking-widest text-slate-300">
<span className="text-blue-500 font-bold mt-0.5 font-sans">
                    +
                  </span>
<span className="font-sans">100k events/mo</span>
</li>
<li className="flex items-start gap-3 text-[10px] uppercase tracking-widest text-slate-300">
<span className="text-blue-500 font-bold mt-0.5 font-sans">
                    +
                  </span>
<span className="font-sans">3 team members</span>
</li>
<li className="flex items-start gap-3 text-[10px] uppercase tracking-widest text-slate-300">
<span className="text-blue-500 font-bold mt-0.5 font-sans">
                    +
                  </span>
<span className="font-sans">7-day data retention</span>
</li>
<li className="flex items-start gap-3 text-[10px] uppercase tracking-widest text-slate-300">
<span className="text-blue-500 font-bold mt-0.5 font-sans">
                    +
                  </span>
<span className="font-sans">Basic tracing</span>
</li>
<li className="flex items-start gap-3 text-[10px] uppercase tracking-widest text-slate-500">
<span className="text-slate-600 font-bold mt-0.5 font-sans">
                    -
                  </span>
<span className="font-sans">No SLA guarantee</span>
</li>
</ul>
</div>
<button className="w-full py-3 border border-white/20 bg-transparent text-white text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2 group/btn font-sans" data-reveal="block" style={{-RevealDelay: '765ms'}}>
              Initialize
              <svg className="group-hover/btn:translate-x-1 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="border-b lg:border-r border-white/10 bg-[#111827]/50 hover:bg-[#111827] p-8 lg:p-10 flex flex-col relative overflow-hidden group transition-colors shadow-[0_0_30px_rgba(37,99,235,0.05)]" data-reveal="block" style={{-RevealDelay: '0ms'}}>
<div className="absolute top-0 right-0 bg-blue-600/20 border-b border-l border-blue-500 text-blue-400 text-[9px] font-mono font-bold uppercase tracking-widest px-3 py-1.5 font-sans">
              PRODUCTION
            </div>
<div className="mb-6">
<h3 className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-blue-400 mb-4 font-sans" data-reveal="block" style={{-RevealDelay: '510ms'}}>
                / CLUSTER
              </h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl lg:text-5xl text-white tracking-tighter uppercase font-manrope font-medium">
                  $299
                </span>
<span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-sans">
                  /mo
                </span>
</div>
<p className="text-[10px] font-mono text-slate-400 mt-6 h-10 leading-relaxed uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '595ms'}}>
                Long-term collaboration for scaling products and continuous
                improvement.
              </p>
</div>
<div className="flex-grow space-y-4 mb-8 border-t border-white/10 pt-6">
<ul className="space-y-4 font-mono">
<li className="flex items-start gap-3 text-[10px] uppercase tracking-widest text-slate-300">
<span className="text-blue-400 font-bold mt-0.5 font-sans">
                    +
                  </span>
<span className="font-sans">Unlimited events</span>
</li>
<li className="flex items-start gap-3 text-[10px] uppercase tracking-widest text-slate-300">
<span className="text-blue-400 font-bold mt-0.5 font-sans">
                    +
                  </span>
<span className="font-sans">Unlimited team members</span>
</li>
<li className="flex items-start gap-3 text-[10px] uppercase tracking-widest text-slate-300">
<span className="text-blue-400 font-bold mt-0.5 font-sans">
                    +
                  </span>
<span className="font-sans">90-day retention</span>
</li>
<li className="flex items-start gap-3 text-[10px] uppercase tracking-widest text-slate-300">
<span className="text-blue-400 font-bold mt-0.5 font-sans">
                    +
                  </span>
<span className="font-sans">Advanced distributed tracing</span>
</li>
<li className="flex items-start gap-3 text-[10px] uppercase tracking-widest text-slate-300">
<span className="text-blue-400 font-bold mt-0.5 font-sans">
                    +
                  </span>
<span className="font-sans">Custom alerts &amp; webhooks</span>
</li>
</ul>
</div>
<button className="w-full py-3 bg-blue-600/20 border border-blue-500 text-blue-400 text-[10px] font-mono font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group/btn font-sans" data-reveal="block" style={{-RevealDelay: '85ms'}}>
              Upgrade Cluster
              <svg className="group-hover/btn:translate-x-1 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="border-b border-white/10 bg-[#111827]/30 flex flex-col justify-between p-8 lg:p-10" data-reveal="block" style={{-RevealDelay: '170ms'}}>
<div className="space-y-8">
<div className="">
<h4 className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 flex items-center gap-2 font-sans">
<span className="w-1.5 h-1.5 bg-purple-500"></span>
                  Enterprise
                </h4>
<p className="text-[10px] font-mono text-slate-500 leading-relaxed uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '680ms'}}>
                  Need a dedicated infrastructure for large-scale
                  transformation? We offer custom enterprise agreements with SLA
                  guarantees.
                </p>
</div>
<div className="w-full h-px bg-white/10"></div>
<div className="">
<h4 className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-400 mb-4 flex items-center gap-2 font-sans">
<span className="w-1.5 h-1.5 bg-emerald-500"></span>
                  Support
                </h4>
<p className="text-[10px] font-mono text-slate-500 leading-relaxed uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '765ms'}}>
                  24/7 Priority support channel and dedicated engineering
                  workspace included in Enterprise plans.
                </p>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/10">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="Support" className="w-8 h-8 object-cover border border-[#0B0F14] grayscale opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4514320b-dec0-43a1-ac07-4ef303eba216_320w.webp"/>
<img alt="Support" className="w-8 h-8 object-cover border border-[#0B0F14] grayscale opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b3ae15e7-3ed1-4ca0-a1ee-341f034b1613_320w.webp"/>
<div className="w-8 h-8 border border-[#0B0F14] bg-[#111827] flex items-center justify-center text-[8px] text-slate-400 font-mono font-bold tracking-tighter font-sans">
                    +4
                  </div>
</div>
<div className="flex flex-col">
<span className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-300 font-sans">
                    L3 Support
                  </span>
<span className="text-[8px] font-mono text-emerald-500 flex items-center gap-1 font-sans">
<span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></span>
                    ONLINE
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full shadow-black/60 text-slate-300 bg-[#0B0F14] border-white/10 border border-t-0 mr-auto ml-auto relative shadow-2xl max-w-full" data-reveal="block" style={{-RevealDelay: '765ms'}}>
<div className="w-full mr-auto ml-auto">
<div className="grid grid-cols-1 lg:grid-cols-4">
<div className="lg:border-b-0 lg:border-r lg:p-10 flex flex-col bg-[#0B0F14] border-white/10 border-b pt-8 pr-8 pb-8 pl-8 justify-between" data-reveal="block" style={{-RevealDelay: '255ms'}}>
<div className="">
<div className="flex items-center gap-3 mb-12">
<div className="w-1.5 h-1.5 bg-purple-500"></div>
<span className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase font-mono font-sans">
                  005 INQUIRIES
                </span>
</div>
<h2 className="text-4xl lg:text-5xl uppercase tracking-tighter text-white mb-6 font-manrope font-medium" data-reveal="block" style={{-RevealDelay: '0ms'}}>
                SYSTEM
                <br/>
                FAQ
              </h2>
<p className="text-[11px] font-mono text-slate-400 leading-relaxed max-w-xs uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '85ms'}}>
                Common operational parameters and billing inquiries resolved.
              </p>
</div>
<div className="mt-12 lg:mt-0">
<button className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500 hover:text-white transition-colors group font-sans" data-reveal="block" style={{-RevealDelay: '340ms'}}>
                Read Full Docs
                <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 bg-[#111827]/30" data-reveal="block" style={{-RevealDelay: '425ms'}}>
<div className="p-8 lg:p-10 border-b border-white/10 md:border-r hover:bg-[#111827]/80 transition-colors group" data-reveal="block" style={{-RevealDelay: '510ms'}}>
<h4 className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-white mb-4 font-sans flex items-start gap-3">
<span className="text-blue-500 mt-0.5 group-hover:text-blue-400 transition-colors">
                  +
                </span>
                How are events calculated?
              </h4>
<p className="text-[10px] font-mono text-slate-500 leading-relaxed uppercase tracking-widest font-sans pl-5" data-reveal="block" style={{-RevealDelay: '170ms'}}>
                An event is any single telemetry data point logged to our
                ingress nodes. Distributed traces, spans, and metrics all count
                as individual events toward your monthly cluster allocation.
              </p>
</div>
<div className="p-8 lg:p-10 border-b border-white/10 hover:bg-[#111827]/80 transition-colors group" data-reveal="block" style={{-RevealDelay: '595ms'}}>
<h4 className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-white mb-4 font-sans flex items-start gap-3">
<span className="text-blue-500 mt-0.5 group-hover:text-blue-400 transition-colors">
                  +
                </span>
                Can I scale mid-cycle?
              </h4>
<p className="text-[10px] font-mono text-slate-500 leading-relaxed uppercase tracking-widest font-sans pl-5" data-reveal="block" style={{-RevealDelay: '255ms'}}>
                Yes, cluster upgrades are prorated automatically based on your
                timestamp. Downgrades take effect at the exact start of your
                next billing vector.
              </p>
</div>
<div className="p-8 lg:p-10 border-b md:border-b-0 border-white/10 md:border-r hover:bg-[#111827]/80 transition-colors group" data-reveal="block" style={{-RevealDelay: '680ms'}}>
<h4 className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-white mb-4 font-sans flex items-start gap-3">
<span className="text-blue-500 mt-0.5 group-hover:text-blue-400 transition-colors">
                  +
                </span>
                What happens on overage?
              </h4>
<p className="text-[10px] font-mono text-slate-500 leading-relaxed uppercase tracking-widest font-sans pl-5" data-reveal="block" style={{-RevealDelay: '340ms'}}>
                We never drop packets immediately. A 10% burst buffer is applied
                before rate limiting initiates. Custom webhooks and alerts will
                trigger automatically at 80% and 95% capacity.
              </p>
</div>
<div className="p-8 lg:p-10 hover:bg-[#111827]/80 transition-colors group" data-reveal="block" style={{-RevealDelay: '765ms'}}>
<h4 className="text-[11px] font-mono font-bold tracking-[0.15em] uppercase text-white mb-4 font-sans flex items-start gap-3">
<span className="text-blue-500 mt-0.5 group-hover:text-blue-400 transition-colors">
                  +
                </span>
                Is on-premise available?
              </h4>
<p className="text-[10px] font-mono text-slate-500 leading-relaxed uppercase tracking-widest font-sans pl-5" data-reveal="block" style={{-RevealDelay: '425ms'}}>
                Self-hosted, air-gapped instances are exclusively available for
                Enterprise clients. Contact your assigned L3 support
                representative to begin the deployment protocol.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden text-slate-300 bg-[#0B0F14] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full mx-auto border border-white/10 shadow-2xl shadow-black/60 relative border-t-0 max-w-full" data-reveal="block" style={{-RevealDelay: '0ms'}}>
<div className="flex flex-col w-full mr-auto ml-auto">

<div className="lg:p-12 xl:p-16 bg-[#0B0F14] border-white/10 border-b pt-8 pr-8 pb-8 pl-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="">
<div className="flex items-center gap-2 mb-6">
<div className="w-1.5 h-1.5 bg-blue-500 animate-pulse"></div>
<span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-widest font-sans">
                  003 THE BUILDERS
                </span>
</div>
<h2 className="text-3xl md:text-5xl uppercase tracking-tight text-white leading-tight font-manrope font-medium" data-reveal="block" style={{-RevealDelay: '510ms'}}>
                Operators, not just
                <br/>
<span className="text-slate-500 font-manrope font-medium">
                  observers.
                </span>
</h2>
</div>
<p className="max-w-md text-sm font-mono text-slate-400 leading-relaxed uppercase tracking-widest font-sans" data-reveal="block" style={{-RevealDelay: '595ms'}}>
              We are a compact team of senior practitioners. No account
              managers, no layers. You work directly with the people building
              your product.
            </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white/10 gap-[1px]">

<div className="group relative overflow-hidden bg-[#111827]/30 hover:bg-[#111827]/80 flex flex-col transition-colors cursor-default" data-reveal="block" style={{-RevealDelay: '0ms'}}>
<div className="aspect-square relative overflow-hidden border-b border-white/10">
<div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<img alt="Founder" className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d09b944c-c71d-4c2c-9c16-e6e662b4a9d2_800w.webp"/>
</div>
<div className="p-6 lg:p-8 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold uppercase tracking-tight text-white font-sans" data-reveal="block" style={{-RevealDelay: '680ms'}}>
                  Alex Chen
                </h3>
<svg className="text-slate-500 group-hover:text-blue-400 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<div className="flex items-center gap-2 mb-6">
<div className="w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_5px_rgba(59,130,246,0.8)]"></div>
<p className="text-[9px] font-mono font-semibold tracking-[0.2em] text-blue-400 uppercase font-sans" data-reveal="block" style={{-RevealDelay: '765ms'}}>
                  Systems Architect
                </p>
</div>
<div className="mt-auto flex flex-col gap-2 border-t border-white/10 pt-4">
<div className="flex justify-between items-center">
<span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                    SPEC
                  </span>
<span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest text-right">
                    Strategy, Systems, API
                  </span>
</div>
<div className="flex justify-between items-center">
<span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                    EXP
                  </span>
<span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest text-right">
                    12 Years
                  </span>
</div>
<div className="flex justify-between items-center">
<span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                    LOC
                  </span>
<span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest text-right">
                    San Francisco
                  </span>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#111827]/30 hover:bg-[#111827]/80 flex flex-col transition-colors cursor-default" data-reveal="block" style={{-RevealDelay: '85ms'}}>
<div className="aspect-square relative overflow-hidden border-b border-white/10">
<div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<img alt="Design Lead" className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd72a53b-6aa7-44f6-a2f5-c1f742587382_800w.webp"/>
</div>
<div className="p-6 lg:p-8 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold uppercase tracking-tight text-white font-sans" data-reveal="block" style={{-RevealDelay: '0ms'}}>
                  Sarah Voss
                </h3>
<svg className="text-slate-500 group-hover:text-purple-400 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<div className="flex items-center gap-2 mb-6">
<div className="w-1 h-1 bg-purple-500 rounded-full shadow-[0_0_5px_rgba(168,85,247,0.8)]"></div>
<p className="text-[9px] font-mono font-semibold tracking-[0.2em] text-purple-400 uppercase font-sans" data-reveal="block" style={{-RevealDelay: '85ms'}}>
                  Lead Backend Engineer
                </p>
</div>
<div className="mt-auto flex flex-col gap-2 border-t border-white/10 pt-4">
<div className="flex justify-between items-center">
<span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                    SPEC
                  </span>
<span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest text-right">
                    React, WebGL, AI
                  </span>
</div>
<div className="flex justify-between items-center">
<span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                    EXP
                  </span>
<span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest text-right">
                    9 Years
                  </span>
</div>
<div className="flex justify-between items-center">
<span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                    LOC
                  </span>
<span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest text-right">
                    Berlin
                  </span>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#111827]/30 hover:bg-[#111827]/80 flex flex-col transition-colors cursor-default" data-reveal="block" style={{-RevealDelay: '170ms'}}>
<div className="aspect-square relative overflow-hidden border-b border-white/10">
<div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<img alt="Product Lead" className="w-full h-full object-cover grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35c33838-487d-4efe-8088-d2ca9b056413_800w.webp"/>
</div>
<div className="p-6 lg:p-8 flex-grow flex flex-col">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold uppercase tracking-tight text-white font-sans" data-reveal="block" style={{-RevealDelay: '170ms'}}>
                  Marcus Ray
                </h3>
<svg className="text-slate-500 group-hover:text-emerald-400 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
<div className="flex items-center gap-2 mb-6">
<div className="w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
<p className="text-[9px] font-mono font-semibold tracking-[0.2em] text-emerald-400 uppercase font-sans" data-reveal="block" style={{-RevealDelay: '255ms'}}>
                  Infrastructure Lead
                </p>
</div>
<div className="mt-auto flex flex-col gap-2 border-t border-white/10 pt-4">
<div className="flex justify-between items-center">
<span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                    SPEC
                  </span>
<span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest text-right">
                    UX Research, Growth
                  </span>
</div>
<div className="flex justify-between items-center">
<span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                    EXP
                  </span>
<span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest text-right">
                    8 Years
                  </span>
</div>
<div className="flex justify-between items-center">
<span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                    LOC
                  </span>
<span className="text-[9px] font-mono text-slate-300 uppercase tracking-widest text-right">
                    London
                  </span>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden bg-[#0B0F14] hover:bg-[#111827]/80 flex flex-col justify-center items-center text-center p-8 transition-colors cursor-pointer min-h-[400px]" data-reveal="block" style={{-RevealDelay: '255ms'}}>
<div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mb-6 text-slate-500 group-hover:text-blue-400 group-hover:border-blue-500/50 transition-colors bg-[#111827]/30">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="M12 5v14"></path>
</svg>
</div>
<h3 className="text-xl font-semibold uppercase tracking-tight text-white mb-4 font-sans" data-reveal="block" style={{-RevealDelay: '340ms'}}>
              Join the Studio
            </h3>
<p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest leading-relaxed max-w-[200px] mb-8 font-sans" data-reveal="block" style={{-RevealDelay: '425ms'}}>
              We are always looking for obsessive designers and engineers to
              join our distributed team.
            </p>
<button className="px-6 py-3 border border-white/20 text-white text-[11px] font-semibold tracking-[0.2em] hover:bg-white/5 transition-colors font-sans flex items-center gap-2 group/btn" data-reveal="block" style={{-RevealDelay: '340ms'}}>
              View Openings
              <svg className="group-hover/btn:translate-x-1 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</section>
<section className="overflow-hidden text-slate-300 bg-[#0B0F14] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full mx-auto border border-white/10 shadow-2xl shadow-black/60 relative border-t-0 max-w-full" data-reveal="block" style={{-RevealDelay: '85ms'}}>
<div className="w-full mr-auto ml-auto">

<div className="grid grid-cols-1 lg:grid-cols-4">

<div className="lg:p-10 flex flex-col min-h-[500px] border-white/10 border-r border-b pt-8 pr-8 pb-8 pl-8 justify-between" data-reveal="block" style={{-RevealDelay: '425ms'}}>
<div className="flex items-center gap-3 mb-12">
<div className="w-1.5 h-1.5 bg-blue-500 animate-pulse"></div>
<span className="text-[10px] font-mono font-semibold text-slate-500 uppercase tracking-[0.2em] font-sans">
                003 REVIEWS
              </span>
</div>
<div className="relative w-full aspect-[4/3] group cursor-pointer overflow-hidden bg-[#111827] mt-auto border border-white/10" data-reveal="block" style={{-RevealDelay: '510ms'}}>
<div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<img alt="Client Project" className="contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9698e5e4-055e-43d4-a47f-32f16fa416c3_800w.webp"/>
<div className="flex absolute bottom-6 left-6 items-center z-20">
<div className="w-12 h-12 bg-[#0B0F14] border border-white/20 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all group-hover:border-blue-500 group-hover:bg-blue-600/20 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
<svg className="text-white group-hover:text-blue-400 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</div>
<div className="ml-4 flex flex-col">
<span className="text-[10px] font-mono font-bold text-white tracking-[0.15em] leading-none uppercase">
                    READ
                  </span>
<span className="text-[10px] font-mono font-bold text-white tracking-[0.15em] leading-none mt-1.5 uppercase">
                    CASE STUDY
                  </span>
</div>
</div>
</div>
</div>

<div className="hidden lg:block border-b border-r border-white/10 bg-[#0B0F14]" data-reveal="block" style={{-RevealDelay: '595ms'}}></div>

<div className="lg:col-span-2 flex flex-col border-white/10 border-b bg-[#0B0F14]" data-reveal="block" id="testimonial-container-aura" style={{-RevealDelay: '680ms'}}>
<div className="lg:p-16 lg:pb-24 flex-grow overflow-hidden pt-10 pr-10 pb-10 pl-10 relative">
<svg className="text-white/5 absolute top-10 left-8 lg:top-14 lg:left-12 -z-10 opacity-20" fill="currentColor" height="48" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
<path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2.003-2H16c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
</svg>
<div className="transition-all duration-700 ease-in-out opacity-100 transform translate-y-0" id="quote-wrapper-aura">
<p className="text-2xl lg:text-3xl font-manrope font-medium leading-[1.4] text-white max-w-2xl tracking-tight antialiased" data-reveal="block" id="testimonial-quote-aura" style={{-RevealDelay: '510ms'}}>"The precision in their design language is incredible. Frame doesn't just build UI; they build logical systems that anticipate user needs."</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 mt-auto border-t border-white/10">

<div className="border-r border-white/10 relative bg-[#111827]/30 group hover:bg-[#111827]/80 transition-colors cursor-pointer min-h-[100px] flex items-center px-8 justify-between" data-reveal="block" style={{-RevealDelay: '765ms'}}>
<div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500/50 group-hover:bg-blue-500 transition-colors shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-blue-400">
                  VIEW REPORT
                </span>
<svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>

<div className="p-8 lg:px-12 lg:py-6 flex items-center min-h-[100px] transition-all duration-700 ease-in-out opacity-100 transform translate-y-0 bg-[#0B0F14]" data-reveal="block" id="author-wrapper-aura" style={{-RevealDelay: '0ms'}}>
<div className="flex items-center gap-4">
<div className="w-10 h-10 border border-white/10 rounded-full overflow-hidden flex-shrink-0 bg-[#111827]">
<img alt="Profile" className="w-full h-full object-cover grayscale opacity-80" id="testimonial-avatar-aura" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=320&amp;q=80"/>
</div>
<div className="">
<h4 className="text-[10px] font-mono font-bold tracking-[0.1em] uppercase text-white" id="testimonial-author-aura">SARAH JENKINS</h4>
<p className="text-[9px] font-mono font-medium tracking-[0.15em] uppercase text-slate-500 mt-1" data-reveal="block" id="testimonial-role-aura" style={{-RevealDelay: '595ms'}}>CTO, FLUX</p>
</div>
</div>
</div>
</div>

</div>

<div className="border-r border-white/10 p-8 lg:p-10 flex flex-col justify-center min-h-[300px] bg-[#111827]/30 hover:bg-[#111827]/50 transition-colors" data-reveal="block" style={{-RevealDelay: '85ms'}}>
<div className="space-y-8">

<div className="flex gap-5 group cursor-default" data-reveal="block" style={{-RevealDelay: '170ms'}}>
<div className="w-8 h-8 rounded-full bg-[#0B0F14] border border-white/10 flex-shrink-0 flex items-center justify-center text-[10px] font-mono font-bold text-slate-400">
                  JD
                </div>
<div className="">
<div className="flex gap-1 mb-2">
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-xs font-sans text-slate-400 leading-relaxed" data-reveal="block" style={{-RevealDelay: '680ms'}}>
                    "Absolute clarity in execution. The team shipped 2x faster."
                  </p>
</div>
</div>

<div className="flex gap-5 group cursor-default" data-reveal="block" style={{-RevealDelay: '255ms'}}>
<div className="w-8 h-8 rounded-full bg-[#0B0F14] border border-white/10 flex-shrink-0 flex items-center justify-center text-[10px] font-mono font-bold text-slate-400">
                  MK
                </div>
<div className="">
<div className="flex gap-1 mb-2">
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-3 h-3 text-blue-500" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-xs font-sans text-slate-400 leading-relaxed" data-reveal="block" style={{-RevealDelay: '765ms'}}>
                    "A partnership that feels like an extension of our own
                    team."
                  </p>
</div>
</div>
</div>
</div>

<div className="hidden lg:block border-r border-white/10 bg-[#0B0F14]" data-reveal="block" style={{-RevealDelay: '340ms'}}></div>

<div className="lg:col-span-2 grid grid-rows-3 divide-y divide-white/10 bg-[#0B0F14]" data-reveal="block" style={{-RevealDelay: '425ms'}}>

<div className="grid grid-cols-2 divide-x divide-white/10 h-32 lg:h-auto bg-[#111827]/30 hover:bg-[#111827]/80 transition-colors group" data-reveal="block" style={{-RevealDelay: '510ms'}}>
<div className="px-10 lg:px-12 flex items-center border-l-0" data-reveal="block" style={{-RevealDelay: '595ms'}}>
<span className="text-4xl md:text-5xl lg:text-6xl font-manrope font-medium tracking-tight text-white">
                  98%
                </span>
</div>
<div className="px-10 lg:px-12 flex items-center" data-reveal="block" style={{-RevealDelay: '680ms'}}>
<span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 group-hover:text-blue-400 transition-colors">
                  RETENTION RATE
                </span>
</div>
</div>

<div className="grid grid-cols-2 divide-x divide-white/10 h-32 lg:h-auto bg-[#111827]/30 hover:bg-[#111827]/80 transition-colors group" data-reveal="block" style={{-RevealDelay: '765ms'}}>
<div className="px-10 lg:px-12 flex items-center" data-reveal="block" style={{-RevealDelay: '0ms'}}>
<span className="text-4xl md:text-5xl lg:text-6xl font-manrope font-medium tracking-tight text-white">
                  500+
                </span>
</div>
<div className="px-10 lg:px-12 flex items-center" data-reveal="block" style={{-RevealDelay: '85ms'}}>
<span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 group-hover:text-blue-400 transition-colors">
                  NPS SCORE
                </span>
</div>
</div>

<div className="grid grid-cols-2 divide-x divide-white/10 h-32 lg:h-auto bg-[#111827]/30 hover:bg-[#111827]/80 transition-colors group" data-reveal="block" style={{-RevealDelay: '170ms'}}>
<div className="px-10 lg:px-12 flex items-center" data-reveal="block" style={{-RevealDelay: '255ms'}}>
<span className="text-4xl md:text-5xl lg:text-6xl font-manrope font-medium tracking-tight text-white">
                  85+
                </span>
</div>
<div className="px-10 lg:px-12 flex items-center" data-reveal="block" style={{-RevealDelay: '340ms'}}>
<span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-slate-500 group-hover:text-blue-400 transition-colors">
                  HAPPY CLIENTS
                </span>
</div>
</div>
</div>
</div>
</div>
</section>




<footer className="bg-[#0B0F14] border border-white/10 pt-20 pb-4 flex flex-col items-center overflow-hidden w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] lg:w-full mx-auto shadow-2xl shadow-black/60 border-t-0 max-w-full" data-reveal="block" style={{-RevealDelay: '170ms'}}>
<div className="w-full mx-auto px-6 lg:px-10">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-16 md:mb-24">

<div className="lg:col-span-5 flex flex-col" data-reveal="block" style={{-RevealDelay: '425ms'}}>
<h3 className="text-base font-semibold text-white uppercase tracking-widest mb-8 font-sans">
              Monitor Different ™
            </h3>
<form className="flex flex-col sm:flex-row gap-4 mb-10 w-full max-w-lg">
<input className="bg-transparent border border-white/20 px-4 py-3 text-sm font-mono text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 w-full uppercase tracking-widest transition-colors" placeholder="EMAIL@DOMAIN.COM" type="email"/>
<button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 text-sm font-medium font-mono uppercase tracking-widest transition-colors whitespace-nowrap border border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] font-sans" type="button">
                Join For Free
              </button>
</form>
<div className="flex items-center gap-4">
<a className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-600/10 transition-all" href="#">
<svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-600/10 transition-all" href="#">
<svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-400 hover:bg-blue-600/10 transition-all" href="#">
<svg className="lucide lucide-mail" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</a>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10" data-reveal="block" style={{-RevealDelay: '510ms'}}>
<div className="" data-reveal="block" style={{-RevealDelay: '595ms'}}>
<h4 className="text-base font-semibold text-white uppercase tracking-widest mb-8 font-sans">
                Product
              </h4>
<ul className="space-y-5">
<li>
<a className="text-sm font-mono text-slate-400 hover:text-blue-400 uppercase tracking-widest transition-colors block font-sans" href="#">
                    Explore Features
                  </a>
</li>
<li>
<a className="text-sm font-mono text-slate-400 hover:text-blue-400 uppercase tracking-widest transition-colors block font-sans" href="#">
                    View Documentation
                  </a>
</li>
<li>
<a className="text-sm font-mono text-slate-400 hover:text-blue-400 uppercase tracking-widest transition-colors block font-sans" href="#">
                    Status Page
                  </a>
</li>
</ul>
</div>
<div className="" data-reveal="block" style={{-RevealDelay: '680ms'}}>
<h4 className="text-base font-semibold text-white uppercase tracking-widest mb-8 font-sans">
                Resources
              </h4>
<ul className="space-y-5">
<li className="">
<a className="text-sm font-mono text-slate-400 hover:text-blue-400 uppercase tracking-widest transition-colors block font-sans" href="#">
                    Learn More
                  </a>
</li>
<li className="">
<a className="text-sm font-mono text-slate-400 hover:text-blue-400 uppercase tracking-widest transition-colors block font-sans" href="#">
                    Sign up
                  </a>
</li>
</ul>
</div>
<div data-reveal="block" style={{-RevealDelay: '765ms'}}>
<h4 className="text-base font-semibold text-white uppercase tracking-widest mb-8 font-sans">
                Company
              </h4>
<ul className="space-y-5">
<li>
<a className="text-sm font-mono text-slate-400 hover:text-blue-400 uppercase tracking-widest transition-colors block font-sans" href="#">
                    About us
                  </a>
</li>
<li>
<a className="text-sm font-mono text-slate-400 hover:text-blue-400 uppercase tracking-widest transition-colors block font-sans" href="#">
                    Careers
                  </a>
</li>
<li>
<a className="text-sm font-mono text-slate-400 hover:text-blue-400 uppercase tracking-widest transition-colors block font-sans" href="#">
                    Contact
                  </a>
</li>
</ul>
</div>
</div>
</div>

<div className="w-full flex justify-center items-center mt-10">
<span className="text-[20vw] lg:text-[18vw] leading-[0.8] text-white tracking-tight uppercase select-none mix-blend-plus-lighter opacity-90 font-manrope font-medium">
            SQUARE
          </span>
</div>
</div>
</footer>


    </>
  );
}
