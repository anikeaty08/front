import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Main Balance Chart with beautiful white gradient
    const mainCanvas = document.getElementById('mainChart');
    if (mainCanvas) {
      const ctx = mainCanvas.getContext('2d');
      
      // Create beautiful white gradient with low opacity
      const whiteGradient = ctx.createLinearGradient(0, 0, 0, mainCanvas.height || 200);
      whiteGradient.addColorStop(0, 'rgba(255,255,255,0.12)');
      whiteGradient.addColorStop(0.3, 'rgba(255,255,255,0.08)');
      whiteGradient.addColorStop(0.7, 'rgba(255,255,255,0.04)');
      whiteGradient.addColorStop(1, 'rgba(255,255,255,0.01)');

      const labels = ['Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug'];
      const data = [14000,14800,15200,16000,16500,17700,18300,18600,19100,19800,20500,22193];

      new Chart(ctx, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Balance',
            data,
            borderColor: 'rgba(255,255,255,0.85)',
            backgroundColor: whiteGradient,
            pointRadius: 2,
            pointBackgroundColor: 'rgba(255,255,255,0.95)',
            pointBorderColor: 'rgba(255,255,255,0.95)',
            pointBorderWidth: 1,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: '#ffffff',
            pointHoverBorderColor: 'rgba(16,185,129,0.8)',
            pointHoverBorderWidth: 2,
            tension: 0.4,
            fill: true,
            borderWidth: 2.5
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { intersect: false, mode: 'index' },
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(17,24,39,0.95)',
              borderColor: 'rgba(255,255,255,0.2)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#e2e8f0',
              cornerRadius: 12,
              padding: 16,
              displayColors: false,
              callbacks: {
                label: (ctx) => `€${ctx.parsed.y.toLocaleString()}`
              }
            }
          },
          scales: {
            x: {
              grid: { 
                color: 'rgba(255,255,255,0.08)', 
                borderDash: [2, 4],
                drawBorder: false
              },
              ticks: { 
                color: 'rgba(255,255,255,0.6)', 
                font: { size: 11 }
              },
              border: { display: false }
            },
            y: {
              grid: { 
                color: 'rgba(255,255,255,0.08)', 
                borderDash: [2, 4],
                drawBorder: false
              },
              ticks: { 
                color: 'rgba(255,255,255,0.5)', 
                callback: v => `€${v/1000}k`, 
                font: { size: 11 }
              },
              border: { display: false }
            }
          }
        }
      });
    }

    // Beautiful Pie Chart with white gradient theme
    const pieEl = document.getElementById('pieChart');
    if (pieEl) {
      const pieCtx = pieEl.getContext('2d');
      
      // Create gradients for each segment
      const whiteGradient1 = pieCtx.createLinearGradient(0, 0, 0, 200);
      whiteGradient1.addColorStop(0, 'rgba(255,255,255,0.95)');
      whiteGradient1.addColorStop(0.5, 'rgba(255,255,255,0.75)');
      whiteGradient1.addColorStop(1, 'rgba(255,255,255,0.6)');
      
      const whiteGradient2 = pieCtx.createLinearGradient(0, 0, 200, 0);
      whiteGradient2.addColorStop(0, 'rgba(255,255,255,0.8)');
      whiteGradient2.addColorStop(0.5, 'rgba(255,255,255,0.5)');
      whiteGradient2.addColorStop(1, 'rgba(255,255,255,0.3)');

      new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: ['Bitcoin','Ethereum','USDC','Others'],
          datasets: [{
            data: [45.2, 32.8, 14.7, 7.3],
            backgroundColor: [
              whiteGradient1,
              whiteGradient2,
              'rgba(107,114,128,0.9)',
              'rgba(75,85,99,0.7)'
            ],
            borderColor: [
              'rgba(255,255,255,0.4)',
              'rgba(255,255,255,0.3)',
              'rgba(107,114,128,0.6)',
              'rgba(75,85,99,0.4)'
            ],
            borderWidth: 1,
            hoverOffset: 8,
            hoverBorderColor: 'rgba(255,255,255,0.8)',
            hoverBorderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: 'rgba(17,24,39,0.95)',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#e2e8f0',
              cornerRadius: 8,
              padding: 12,
              displayColors: true,
              callbacks: {
                label: (ctx) => `${ctx.label}: ${ctx.parsed}%`
              }
            }
          },
          cutout: '65%',
          elements: {
            arc: {
              borderRadius: 4
            }
          },
          animation: {
            animateRotate: true,
            animateScale: true,
            duration: 1000
          }
        }
      });
    }
  


    (function() {
      const section = document.getElementById('aura-emfikcwfj');
      const svg = section.querySelector('#connection-svg');
      const path = section.querySelector('#connection-path');
      const startDot = section.querySelector('#connection-start');
      const endDot = section.querySelector('#connection-end');
      const midDot = section.querySelector('#node-mid');

      function setCircle(circle, x, y) {
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
      }

      function drawConnector() {
        const rect = section.getBoundingClientRect();
        const a = section.querySelector('#anchor-a').getBoundingClientRect();
        const b = section.querySelector('#anchor-b').getBoundingClientRect();

        const sx = a.left + a.width / 2 - rect.left;
        const sy = a.top + a.height / 2 - rect.top + 6; // nudge below
        const ex = b.left + b.width / 2 - rect.left;
        const ey = b.top + b.height / 2 - rect.top - 6; // nudge above

        // Control points to form a smooth S-shaped dashed connector with rounded corners
        const dx = Math.abs(ex - sx);
        const dy = Math.abs(ey - sy);
        const offsetX = Math.max(120, dx * 0.3);
        const offsetY = Math.max(100, dy * 0.35);

        const c1x = sx;
        const c1y = sy + offsetY;
        const c2x = sx + offsetX;
        const c2y = sy + offsetY;
        const c3x = ex - offsetX;
        const c3y = ey - offsetY;
        const c4x = ex;
        const c4y = ey - offsetY;

        const d = `M ${sx},${sy} C ${c1x},${c1y} ${c2x},${c2y} ${(sx+ex)/2},${(sy+ey)/2}
                   S ${c4x},${c4y} ${ex},${ey}`;
        path.setAttribute('d', d);

        // Position nodes
        setCircle(startDot, sx, sy);
        setCircle(endDot, ex, ey);
        setCircle(midDot, (sx + ex) / 2, (sy + ey) / 2);
      }

      // Initial draw + on resize
      window.addEventListener('load', drawConnector, { passive: true });
      window.addEventListener('resize', drawConnector, { passive: true });
      // If fonts cause reflow, redraw shortly after
      setTimeout(drawConnector, 200);
    })();
  


      (function() {
        const section = document.getElementById('aura-emfms84tu');
        
        // Elements
        const billingToggle = section.querySelector('#billingToggle');
        const cardToggles = section.querySelectorAll('[data-card-toggle]');
        const prices = section.querySelectorAll('.price');
        const billingLabels = section.querySelectorAll('.billing-label');
        const segPersonal = section.querySelector('#seg-personal');
        const segBusiness = section.querySelector('#seg-business');

        // State
        let isYearly = false;
        let currentSegment = 'personal';

        // Pricing data
        const pricingData = {
          personal: {
            mini: { monthly: 'US$9', yearly: 'US$7' },
            basic: { monthly: 'US$20', yearly: 'US$16' },
            pro: { monthly: 'US$41', yearly: 'US$33' }
          },
          business: {
            mini: { monthly: 'US$19', yearly: 'US$15' },
            basic: { monthly: 'US$49', yearly: 'US$39' },
            pro: { monthly: 'US$99', yearly: 'US$79' }
          }
        };

        function updatePricing() {
          const data = pricingData[currentSegment];
          const period = isYearly ? 'yearly' : 'monthly';
          
          prices.forEach((el, index) => {
            const planNames = ['mini', 'basic', 'pro'];
            const planName = planNames[index];
            if (data[planName]) {
              el.textContent = data[planName][period];
              el.setAttribute(`data-${period}`, data[planName][period]);
            }
          });
        }

        function updateBillingLabels() {
          const label = isYearly ? 'Yearly' : 'Monthly';
          billingLabels.forEach(el => {
            el.textContent = label;
          });
        }

        function setBilling(yearly) {
          isYearly = yearly;
          
          // Update knob positions
          const knobPos = yearly ? 'translateX(26px)' : 'translateX(4px)';
          const cardKnobPos = yearly ? 'translateX(22px)' : 'translateX(4px)';
          
          // Header toggle
          const headerKnob = billingToggle.querySelector('span.z-10');
          if (headerKnob) {
            headerKnob.style.transform = yearly ? 'translateX(26px)' : 'translateX(4px)';
          }
          
          // Card toggles
          cardToggles.forEach(btn => {
            const knob = btn.querySelector('span.z-10');
            if (knob) {
              knob.style.transform = yearly ? 'translateX(22px)' : 'translateX(4px)';
            }
          });
          
          billingToggle.setAttribute('aria-pressed', yearly ? 'true' : 'false');
          updatePricing();
          updateBillingLabels();
        }

        function setSegment(segment) {
          currentSegment = segment;
          
          // Update button styles
          if (segment === 'personal') {
            segPersonal.className = 'px-5 py-2 text-sm font-medium rounded-full text-white bg-white/10 border border-white/10 transition-all duration-200';
            segBusiness.className = 'px-5 py-2 text-sm font-medium rounded-full text-slate-300 hover:text-white transition-all duration-200';
          } else {
            segBusiness.className = 'px-5 py-2 text-sm font-medium rounded-full text-white bg-white/10 border border-white/10 transition-all duration-200';
            segPersonal.className = 'px-5 py-2 text-sm font-medium rounded-full text-slate-300 hover:text-white transition-all duration-200';
          }
          
          updatePricing();
        }

        // Event listeners
        billingToggle.addEventListener('click', () => {
          setBilling(!isYearly);
        });

        cardToggles.forEach(btn => {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            setBilling(!isYearly);
          });
        });

        segPersonal.addEventListener('click', () => {
          setSegment('personal');
        });

        segBusiness.addEventListener('click', () => {
          setSegment('business');
        });

        // Initialize
        setBilling(false);
        setSegment('personal');
      })();
    


    (function() {
      const section = document.getElementById('aura-emflrsdvz');
      const billingToggle = section.querySelector('#billingToggle');
      const cardToggles = section.querySelectorAll('[data-card-toggle]');
      const prices = section.querySelectorAll('.price');

      function setBilling(yearly) {
        prices.forEach(el => {
          el.textContent = yearly ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly');
        });
        // move knobs
        const knobPos = yearly ? 'translateX(22px)' : 'translateX(4px)';
        const proKnobPos = yearly ? 'translateX(22px)' : 'translateX(4px)';
        // header toggle
        const headerKnob = billingToggle.querySelector('span.z-10');
        headerKnob && (headerKnob.style.transform = yearly ? 'translateX(26px)' : 'translateX(4px)');
        // card toggles
        cardToggles.forEach(btn => {
          const k = btn.querySelector('span.z-10');
          if (k) k.style.transform = yearly ? 'translateX(22px)' : 'translateX(4px)';
        });
        billingToggle.setAttribute('aria-pressed', yearly ? 'true' : 'false');
      }

      // init
      setBilling(false);

      billingToggle.addEventListener('click', () => {
        const isYearly = billingToggle.getAttribute('aria-pressed') !== 'true';
        setBilling(isYearly);
      });

      cardToggles.forEach(btn => {
        btn.addEventListener('click', () => {
          const isYearly = billingToggle.getAttribute('aria-pressed') !== 'true';
          setBilling(!isYearly);
        });
      });
    })();
  


      // Initialize Lucide icons
      if (window.lucide) {
        lucide.createIcons();
      }

      // Add scroll-based animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      }, observerOptions);

      // Observe all animated elements
      document.querySelectorAll('[class*="animate-"]').forEach(el => {
        if (el.classList.contains('opacity-0')) {
          observer.observe(el);
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 z-10" style={{background: 'radial-gradient(ellipse 70% 60% at 50% 45%, transparent 0%, transparent 40%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.5) 100%)'}}></div>

<div className="pointer-events-none fixed inset-0 z-0">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] rounded-full opacity-40 blur-[140px]" style={{background: 'radial-gradient(closest-side, rgba(16,185,129,0.8) 0%, rgba(16,185,129,0.4) 30%, rgba(16,185,129,0.15) 60%, transparent 100%)'}}></div>
</div>

<div className="pointer-events-none fixed inset-0 z-5" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 25%, transparent 75%, rgba(255,255,255,0.04) 100%)'}}></div>

<header className="fixed top-0 left-0 right-0 z-40 animate-fadeInUp opacity-0 border-0 backdrop-blur-3xl" style={{animationDelay: '0.2s', animationPlayState: 'running'}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex pt-5 pb-5 items-center justify-between">
<div className="flex items-center gap-3">
<span className="text-2xl font-semibold text-white tracking-tight mix-blend-screen invert-0">Cryptix</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-[14.5px] text-neutral-300">
<a className="hover:text-white transition-colors duration-200" href="#">Features</a>
<a className="hover:text-white transition-colors duration-200" href="#">Security</a>
<a className="hover:text-white transition-colors duration-200" href="#">Trading</a>
<a className="hover:text-white transition-colors duration-200" href="#">API</a>
<a className="hover:text-white transition-colors duration-200" href="#">Support</a>
<a className="hover:text-white transition-colors duration-200" href="#">Enterprise</a>
<a className="hover:text-white transition-colors duration-200" href="#">About</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden md:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[13.5px] font-medium text-white/90 hover:bg-white/[0.08] hover:border-white/25 transition-all duration-200 backdrop-blur-sm">
<svg className="lucide lucide-download h-3.5 w-3.5" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
              Download App
            </button>
<button className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 p-2 hover:bg-white/[0.08] backdrop-blur-sm transition-all duration-200">
<svg className="lucide lucide-menu h-5 w-5 text-white/80" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden z-20">

<div className="pointer-events-none absolute inset-0">
<div className="absolute top-0 left-[10%] h-full opacity-30">
<div className="w-px h-30 bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent animate-pulse" style={{animation: 'fallDown 10s ease-out infinite', animationDelay: '0s'}}></div>
</div>
<div className="absolute top-0 left-[25%] h-full opacity-40">
<div className="w-px h-40 bg-gradient-to-b from-transparent via-emerald-400/80 to-transparent" style={{animation: 'fallDown 10s ease-out infinite', animationDelay: '0s'}}></div>
</div>
<div className="absolute top-0 left-[40%] h-full opacity-25">
<div className="w-px h-30 bg-gradient-to-b from-transparent via-emerald-400/50 to-transparent" style={{animation: 'fallDown 10s ease-out infinite', animationDelay: '1s'}}></div>
</div>
<div className="absolute top-0 left-[60%] h-full opacity-50">
<div className="w-px h-30 bg-gradient-to-b from-transparent via-emerald-400/70 to-transparent" style={{animation: 'fallDown 10s ease-out infinite', animationDelay: '1s'}}></div>
</div>
<div className="absolute top-0 left-[75%] h-full opacity-35">
<div className="w-px h-30 bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent" style={{animation: 'fallDown 10s ease-out infinite', animationDelay: '1s'}}></div>
</div>
<div className="absolute top-0 left-[90%] h-full opacity-20">
<div className="w-px h-30 bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" style={{animation: 'fallDown 10s ease-out infinite', animationDelay: '0s'}}></div>
</div>
</div>

<div className="pointer-events-none absolute inset-0" style={{background: 'radial-gradient(ellipse 65% 55% at 50% 50%, transparent 0%, transparent 25%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 75%, rgba(0,0,0,0.9) 95%)'}}></div>
<div className="relative mx-auto max-w-6xl px-6 pt-20 pb-6 sm:pt-24 sm:pb-8 md:pt-28">
<div className="mx-auto max-w-4xl text-center">
<h1 className="animate-fadeInUp delay-100 sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-4xl font-semibold text-white tracking-tight opacity-0 my-10" style={{animationPlayState: 'running'}}>Professional Grade  Management<br className="hidden sm:block"/><span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300" id="aura-emfmsid2u">Digital Asset</span></h1>
<p className="opacity-0 animate-fadeInUp delay-200 mt-6 text-base sm:text-lg lg:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed" style={{animationPlayState: 'running'}}>
            Experience institutional-grade security, lightning-fast transactions, and advanced portfolio analytics. 
            Join over 2.3 million traders who trust CryptoVault with their digital assets.
          </p>
<div className="opacity-0 animate-fadeInUp delay-300 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4" style={{animationPlayState: 'running'}}>
<a className="relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:ring-green-400/60 hover:shadow-[0_0_0_1px_rgba(16,185,129,0.35),0_40px_80px_rgba(16,185,129,0.18)] cursor-pointer uppercase text-base font-semibold text-white tracking-tight rounded-full pt-3 pr-3 pb-3 pl-3 shadow-2xl blur-none backdrop-blur-2xl" href="#contact" onmousedown="this.style.filter = 'hue-rotate(250deg)'" onmouseout="this.style.backgroundSize = 'cover, 15px 15px, 15px 15px'" onmouseover="this.style.backgroundSize = 'cover, 10px 10px, 10px 10px'" onmouseup="this.style.filter = 'hue-rotate(0deg)'" style={{-MainColor: 'rgb(46, 213, 115)', -MainBgColor: 'rgba(46, 213, 116, 0.36)', -PatternColor: 'rgba(46, 213, 116, 0.073)', filter: 'hue-rotate(0deg)', letterSpacing: '0.5rem', backgroundSize: 'cover, 15px 15px, 15px 15px', backgroundPosition: 'center center, center center, center center', borderImage: 'radial-gradient(circle, var(--main-color) 0%, rgba(0, 0, 0, 0) 100%) 1', borderWidth: '1px 0px', borderStyle: 'solid', color: 'var(--main-color)', padding: '1rem 3rem', fontWeight: '700', fontSize: '1.5rem'}}>
<span className="relative z-[1] text-sm">Get started</span>
<svg className="lucide lucide-arrow-right relative z-[1] w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" data-icon-replaced="true" data-lucide="arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'var(--main-color)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-fadeInUp" style={{animationPlayState: 'running'}}></span>
<span aria-hidden="true" className="pointer-events-none absolute inset-[1px] rounded-full" style={{background: 'radial-gradient(120% 80% at 50% -20%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.06) 55%, rgba(255,255,255,0) 60%), radial-gradient(90% 80% at 50% 120%, rgba(16,185,129,0.18) 0%, rgba(16,185,129,0) 60%)'}}></span>
</a>
<button className="group inline-flex gap-2 hover:bg-white/10 transition-all duration-300 hover:border-white/20 text-sm font-medium text-white/90 bg-white/25 mix-blend-overlay border-white/10 border rounded-full pt-3.5 pr-6 pb-3.5 pl-6 backdrop-blur-3xl items-center relative overflow-hidden" style={{width: 'auto', height: 'auto', cursor: 'pointer'}}>
<span className="text relative z-10">Watch Demo</span>
<svg className="lucide lucide-play w-4 h-4 group-hover:scale-110 transition-transform duration-200 relative z-10" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>

<div className="a l pointer-events-none absolute"></div>
<div className="a r pointer-events-none absolute"></div>
<div className="a t pointer-events-none absolute"></div>
<div className="a b pointer-events-none absolute"></div>
<style>
    #aura-emfl29n93::before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: 0;
      background: radial-gradient(
          circle at 50% 50%,
          transparent 0,
          transparent 20%,
          rgba(17,17,17,0.67) 50%
        ),
        radial-gradient(ellipse 100% 100%, #fff, rgba(255,255,255,0));
      background-size: 3px 3px, auto auto;
      transition: 0.3s;
      border-radius: inherit;
    }

    #aura-emfl29n93:hover::before {
      opacity: 0.3;
    }

    #aura-emfl29n93 .a {
      pointer-events: none;
      position: absolute;
      --w: 2px;
      --t: -40px;
      --s: calc(var(--t) * -1);
      --e: calc(100% + var(--t));
      --g: rgba(255,255,255,0), rgba(255,255,255,0.2) var(--s), rgba(255,255,255,0.63) var(--s), #fff, rgba(255,255,255,0.63) var(--e), rgba(255,255,255,0.2) var(--e), rgba(255,255,255,0);
    }

    #aura-emfl29n93 .a::before {
      content: "";
      position: absolute;
      inset: 0;
      background: inherit;
      filter: blur(4px);
      z-index: -2;
    }

    #aura-emfl29n93 .a::after {
      content: "";
      position: absolute;
      inset: 0;
      background: inherit;
      filter: blur(10px);
      opacity: 0;
      z-index: -2;
      transition: 0.3s;
    }

    #aura-emfl29n93:hover .a::after {
      opacity: 1;
    }

    #aura-emfl29n93 .l {
      left: -2px;
      background: linear-gradient(var(--g));
      top: var(--t);
      bottom: var(--t);
      width: var(--w);
    }

    #aura-emfl29n93 .r {
      right: -2px;
      background: linear-gradient(var(--g));
      top: var(--t);
      bottom: var(--t);
      width: var(--w);
    }

    #aura-emfl29n93 .t {
      top: -2px;
      background: linear-gradient(90deg, var(--g));
      left: var(--t);
      right: var(--t);
      height: var(--w);
    }

    #aura-emfl29n93 .b {
      bottom: -2px;
      background: linear-gradient(90deg, var(--g));
      left: var(--t);
      right: var(--t);
      height: var(--w);
    }

    @keyframes fallDown {
      0% {
        transform: translateY(-100vh);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(100vh);
        opacity: 0;
      }
    }
  </style>
</button>
</div>
<div className="opacity-0 animate-fadeInUp delay-400 mt-12 flex flex-col items-center gap-4 text-sm text-slate-400" style={{animationPlayState: 'running'}}>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-emerald-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Bank-Grade Security</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-4 h-4 text-emerald-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="">Instant Settlement</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4 text-emerald-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="">2.3M+ Users</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs">Trusted by professionals worldwide</span>
<div className="flex items-center gap-1 text-amber-400">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="ml-2 font-medium">4.9/5</span>
<span className="text-slate-500">(12,847 reviews)</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pb-24 pl-4">
<div className="animate-blurIn delay-500 relative overflow-hidden bg-gradient-to-br from-[#0e1311]/95 to-[#0b0f0d]/10 border-white/15 border rounded-2xl shadow-[0_0_80px_rgba(16,185,129,0.25)] backdrop-blur-xl">
<div className="pointer-events-none absolute inset-x-0 -top-1 h-10 rounded-t-2xl" style={{background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16,185,129,0.8) 0%, rgba(16,185,129,0.4) 40%, rgba(16,185,129,0.1) 80%, transparent 100%)'}}></div>
<div className="pointer-events-none absolute inset-x-4 top-1 h-[2px] rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
<div className="grid grid-cols-1 xl:grid-cols-12 gap-4 lg:gap-6 lg:p-6 pt-4 pr-4 pb-4 pl-4" style={{background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'}}>
<aside className="xl:col-span-3 2xl:col-span-2">
<div className="lg:p-5 bg-black/40 h-full border-white/15 border rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-inner backdrop-blur-sm" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px rgba(0,0,0,0.3)'}}>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/20 ring-1 ring-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.5)]">
<svg className="h-4 w-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-white">CryptoTrade</p>
<p className="text-xs text-slate-400">Trading Suite</p>
</div>
</div>
</div>
<nav className="space-y-1.5 text-sm">
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 bg-white/15 text-white font-medium backdrop-blur-sm shadow-sm border border-white/10 transition-all duration-200" href="#">
<svg className="w-4 h-4 text-emerald-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
      Dashboard
    </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 text-slate-300 backdrop-blur-sm transition-all duration-200 group" href="#">
<svg className="w-4 h-4 group-hover:text-white transition-colors duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v5l7-7"></path><path d="m14 5 4 4L7 20l-4-4"></path></svg>
      Trading
    </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 text-slate-300 backdrop-blur-sm transition-all duration-200 group" href="#">
<svg className="w-4 h-4 group-hover:text-white transition-colors duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
      Portfolio
    </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 text-slate-300 backdrop-blur-sm transition-all duration-200 group" href="#">
<svg className="w-4 h-4 group-hover:text-white transition-colors duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
      Analytics
    </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 text-slate-300 backdrop-blur-sm transition-all duration-200 group" href="#">
<svg className="w-4 h-4 group-hover:text-white transition-colors duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
      History
    </a>
<a className="flex items-center gap-3 rounded-lg px-3 py-2.5 hover:bg-white/10 text-slate-300 backdrop-blur-sm transition-all duration-200 group" href="#">
<svg className="w-4 h-4 group-hover:text-white transition-colors duration-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 12l2 2 4-4"></path><path d="M21 12c-.714 0-1.263-.008-1.263 0 0 4.5-3.5 7.5-7.66 8.95a1 1 0  1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v6"></path></svg>
      Security
    </a>
</nav>
<div className="mt-auto pt-4 border-t border-white/10">
<div className="flex items-center gap-3 mb-4">
<div className="ring-2 ring-emerald-400/40 flex w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/40430c9b-2a63-4dcf-b77b-a5d18739f948_320w.jpg)] bg-cover rounded-full items-center justify-center">
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">John Doe</p>
<p className="text-xs text-slate-400 truncate">john@example.com</p>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Account Status</span>
<div className="flex items-center gap-1">
<div className="h-2 w-2 bg-emerald-400 rounded-full shadow-[0_0_4px_rgba(16,185,129,0.8)]"></div>
<span className="text-emerald-300">Pro</span>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">2FA Status</span>
<div className="flex items-center gap-1">
<div className="h-2 w-2 bg-emerald-400 rounded-full"></div>
<span className="text-emerald-300">Active</span>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-slate-400">Last Sync</span>
<span className="text-slate-300">2 min ago</span>
</div>
</div>
<div className="mt-4 pt-3 border-t border-white/10">
<button className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group">
<svg className="w-3 h-3 group-hover:text-emerald-400 transition-colors duration-200" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
<polyline points="16,17 21,12 16,7"></polyline>
<line x1="21" x2="9" y1="12" y2="12"></line>
</svg>
        Sign Out
      </button>
</div>
</div>
</div></aside>
<main className="xl:col-span-9 2xl:col-span-10 space-y-6">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="">
<div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
<span>Trading</span>
<span>/</span>
<span>Dashboard</span>
</div>
<h1 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">Main Dashboard</h1>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full sm:w-48 lg:w-64 rounded-lg border border-white/15 bg-white/10 pl-9 pr-4 py-2.5 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 backdrop-blur-sm transition-all duration-200" placeholder="Search..."/>
</div>
<button className="rounded-lg p-2.5 hover:bg-white/10 backdrop-blur-sm transition-colors duration-200 relative">
<svg className="w-5 h-5 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute -top-1 -right-1 h-3 w-3 bg-emerald-400 rounded-full animate-pulse"></span>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-8 rounded-xl border border-white/15 bg-black/40 p-6 backdrop-blur-sm relative overflow-hidden shadow-lg" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 0 30px rgba(16,185,129,0.1)'}}>
<div className="pointer-events-none absolute inset-1 rounded-lg" style={{background: 'radial-gradient(ellipse 70% 50% at 50% 20%, rgba(16,185,129,0.12), transparent 70%)'}}></div>
<div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
<div className="">
<p className="text-sm text-slate-400 font-medium">Balance</p>
<div className="mt-2 flex flex-wrap items-baseline gap-3">
<span className="text-4xl lg:text-5xl font-semibold tracking-tight text-white">€22,193.05</span>
<span className="text-sm font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">+47.3%</span>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center gap-2">
<button className="rounded-lg px-3 py-2 text-sm bg-white/10 hover:bg-white/15 border border-white/10">1D</button>
<button className="rounded-lg px-3 py-2 text-sm bg-white/10 hover:bg-white/15 border border-white/10">7D</button>
<button className="rounded-lg px-3 py-2 text-sm bg-white/10 hover:bg-white/15 border border-white/10">1M</button>
<button className="rounded-lg px-3 py-2 text-sm bg-white text-black border border-white/10">1Y</button>
</div>
</div>
</div>
<div className="relative mt-8">
<div className="relative h-48 lg:h-56">
<canvas className="w-full h-full" height="448" id="mainChart" style={{display: 'block', boxSizing: 'border-box', height: '224px', width: '586px'}} width="1172"></canvas>
</div>
<div className="mt-4 grid grid-cols-3 gap-4 text-xs">
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<p className="text-slate-400">High</p>
<p className="mt-1 text-white font-medium">€25,400</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<p className="text-slate-400">Low</p>
<p className="mt-1 text-white font-medium">€14,800</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
<p className="text-slate-400">Avg. Monthly</p>
<p className="mt-1 text-white font-medium">+3.9%</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 rounded-xl border border-white/15 bg-black/40 p-5 backdrop-blur-sm shadow-lg" style={{boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)'}}>
<h3 className="text-base font-semibold tracking-tight text-white mb-5">Portfolio Distribution</h3>
<div className="relative h-48">
<canvas className="w-full h-full" height="384" id="pieChart" style={{display: 'block', boxSizing: 'border-box', height: '192px', width: '264px'}} width="528"></canvas>
</div>
<div className="mt-4 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.75) 50%, rgba(255,255,255,0.6) 100%)'}}></div>
<span className="text-sm text-slate-300">Bitcoin</span>
</div>
<span className="text-sm text-white font-medium">45.2%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 100%)'}}></div>
<span className="text-sm text-slate-300">Ethereum</span>
</div>
<span className="text-sm text-white font-medium">32.8%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full bg-gray-500"></div>
<span className="text-sm text-slate-300">USDC</span>
</div>
<span className="text-sm text-white font-medium">14.7%</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full bg-gray-600"></div>
<span className="text-sm text-slate-300">Others</span>
</div>
<span className="text-sm text-white font-medium">7.3%</span>
</div>
</div>
</div>
</div>
</main>
</div>
</div>

</div>
</section>

<section className="relative overflow-hidden z-20">

<div className="pointer-events-none absolute inset-0" style="background-image:
      linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
      background-size: 260px 260px;"></div>

<div className="pointer-events-none absolute inset-0 z-10" style={{background: 'radial-gradient(ellipse 85% 75% at 50% 50%, transparent 0%, transparent 60%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.8) 100%)'}}></div>

<svg aria-hidden="true" className="pointer-events-none absolute inset-0 w-full h-full z-20" id="connection-svg">
<defs>
</defs>
<path d="M 613.328125,861.9296875 C 613.328125,961.9296875 773.32890625,961.9296875 879.99609375,962.49609375
                   S 1146.6640625,963.0625 1146.6640625,1063.0625" fill="none" filter="url(#soft-glow)" id="connection-path" stroke="rgba(16,185,129,0.28)" stroke-dasharray="4 8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>

<circle cx="613.328125" cy="861.9296875" fill="rgba(16,185,129,0.9)" id="connection-start" opacity="0.9" r="4"></circle>
<circle cx="879.99609375" cy="962.49609375" fill="rgba(16,185,129,0.7)" id="node-mid" r="3.5"></circle>
<circle cx="1146.6640625" cy="1063.0625" fill="rgba(16,185,129,0.9)" id="connection-end" opacity="0.9" r="4"></circle>
</svg>
<div className="relative max-w-7xl mx-auto px-6 py-24 space-y-24 z-30">

<div className="text-center max-w-4xl mx-auto">
<div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 mb-6">
<svg className="mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<circle cx="12" cy="5" r="2"></circle>
<path d="M12 7v4"></path>
</svg>
        How It Works
      </div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
        Deploy anywhere. <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-300" id="aura-emfmsi6g5">Access everywhere.</span>
</h2>
<p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
        Choose your deployment model and access your secure vault from any environment, whether self-hosted or managed cloud.
      </p>
</div>

<div aria-labelledby="feature-1-heading" className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12" role="region">

<div className="lg:col-span-7">
<div className="relative rounded-3xl overflow-hidden border border-emerald-400/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-[0_0_60px_rgba(16,185,129,0.15)]">

<div className="absolute inset-x-0 top-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-4">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-red-400/60"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60"></span>
<span className="h-2.5 w-2.5 rounded-full bg-green-400/60"></span>
</div>
<div className="flex-1 text-center">
<span className="text-xs text-white/60 font-mono">vaultic-deploy.local</span>
</div>
</div>

<div className="relative aspect-[16/10] sm:aspect-[16/9] w-full h-full pt-10"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/02265b95-7302-4fb0-bcef-44fde128e554/0.mp4"></video>

<div className="pointer-events-none absolute inset-0 mix-blend-overlay" style="background-image:
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
                background-size: 34px 34px;"></div>

<svg aria-hidden="true" className="absolute inset-0 w-[24px] h-[24px]" data-icon-replaced="true" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(226, 232, 240)'}} viewbox="0 0 1200 700">
<defs>
</defs>

<line stroke="rgba(110,231,183,0.15)" stroke-dasharray="6 12" strokeWidth="2" x1="600" x2="600" y1="70" y2="630"></line>

<g transform="translate(320,330)">
<g filter="url(#soft-glow)">
<rect fill="none" height="240" rx="24" stroke="rgba(110,231,183,0.28)" strokeWidth="2" width="240" x="-160" y="-140"></rect>
<rect fill="none" height="200" rx="20" stroke="rgba(16,185,129,0.5)" strokeWidth="2" width="200" x="-140" y="-120"></rect>
</g>

<g>
<polygon fill="rgba(16,185,129,0.18)" points="-40,-50 40,-10 40,70 -40,30" stroke="rgba(110,231,183,0.55)"></polygon>
<polygon fill="rgba(16,185,129,0.18)" points="-40,-50 0,-70 80,-30 40,-10" stroke="rgba(110,231,183,0.55)"></polygon>
<polygon fill="rgba(16,185,129,0.12)" points="40,-10 80,-30 80,50 40,70" stroke="rgba(110,231,183,0.45)"></polygon>
</g>

<g opacity="0.8">
<rect fill="rgba(110,231,183,0.25)" height="8" rx="4" width="160" x="-110" y="90"></rect>
<rect fill="rgba(110,231,183,0.18)" height="8" rx="4" width="120" x="-110" y="110"></rect>
<rect fill="rgba(110,231,183,0.12)" height="8" rx="4" width="90" x="-110" y="130"></rect>
</g>

<text fill="rgba(110,231,183,0.9)" fontSize="18" font-weight="500" text-anchor="middle" x="0" y="180">Self-Hosted</text>
</g>

<g filter="url(#soft-glow)" transform="translate(880,340)">
<path d="M-80 30a70 70 0 1 1 130-50a55 55 0 0 1 20 105h-140a45 45 0 0 1 -10 -55z" fill="rgba(16,185,129,0.15)" stroke="rgba(110,231,183,0.45)" strokeWidth="2"></path>

<circle cx="-40" cy="20" fill="rgba(16,185,129,0.8)" r="10"></circle>
<circle cx="20" cy="10" fill="rgba(16,185,129,0.8)" r="10"></circle>
<circle cx="-5" cy="50" fill="rgba(16,185,129,0.8)" r="10"></circle>

<line stroke="rgba(110,231,183,0.45)" strokeWidth="2" x1="-40" x2="20" y1="20" y2="10"></line>
<line stroke="rgba(110,231,183,0.45)" strokeWidth="2" x1="-5" x2="20" y1="50" y2="10"></line>
<line stroke="rgba(110,231,183,0.45)" strokeWidth="2" x1="-5" x2="-40" y1="50" y2="20"></line>

<text fill="rgba(110,231,183,0.9)" fontSize="18" font-weight="500" text-anchor="middle" x="0" y="150">Managed Cloud</text>
</g>

<g fill="none" stroke="rgba(110,231,183,0.22)" strokeWidth="2">
<path d="M480 330 C 560 330 640 330 720 330" stroke-dasharray="6 10"></path>
<path d="M480 360 C 560 360 640 360 720 360" stroke-dasharray="6 10"></path>
<path d="M480 390 C 560 390 640 390 720 390" stroke-dasharray="6 10"></path>
</g>

<g transform="translate(600,200)">
<text fill="rgba(110,231,183,0.8)" fontSize="16" font-weight="500" text-anchor="middle" x="0" y="-10">Choose Your Deployment</text>
<path d="M-30 20 L30 20 M25 15 L30 20 L25 25" fill="none" stroke="rgba(110,231,183,0.6)" strokeWidth="2"></path>
</g>
</svg>

<div className="absolute left-1/2 -translate-x-1/2 bottom-0 mb-2" id="anchor-a">
<span className="block h-3 w-3 rounded-full bg-emerald-400/90 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
<svg className="mr-2" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" width="18" x="3" y="3"></rect>
<path d="M12 8v8"></path>
<path d="m8 12 4 4 4-4"></path>
</svg>
          Self Hosted or Cloud
        </div>
<h3 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight" id="feature-1-heading">
          You choose where data lives
        </h3>
<p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
          Deploy Vaultic on your own infrastructure for complete control, or use our secure managed cloud for zero-maintenance convenience. Your data, your choice.
        </p>
<ul className="mt-8 space-y-4" role="list">
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300">Docker-ready deployment in minutes</span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300">Cloud sync with isolated vault instances</span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300">Built-in updates with CLI auto-sync</span>
</li>
</ul>

<div className="mt-8 flex items-center gap-6 text-sm">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
<span className="text-slate-400">99.9% Uptime</span>
</div>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-blue-400"></span>
<span className="text-slate-400">&lt; 100ms Sync</span>
</div>
</div>
</div>
</div>

<div aria-labelledby="feature-2-heading" className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12" role="region">

<div className="lg:col-span-5 order-2 lg:order-1">
<div className="inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
<svg className="mr-2" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M4 17l6-6-6-6"></path>
<path d="M12 19h8"></path>
</svg>
          Built for CLI &amp; Dev Environments
        </div>
<h3 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white leading-tight" id="feature-2-heading">
          Designed for developers, not users
        </h3>
<p className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
          Interact with Vaultic entirely via terminal, scripts, or API. Built by developers who understand that the best tools stay out of your way.
        </p>
<ul className="mt-8 space-y-4" role="list">
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300">Full-featured CLI interface</span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300">Secure secrets in shell scripts</span>
</li>
<li className="flex items-start gap-3">
<span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300">RESTful API with SDK support</span>
</li>
</ul>

<div className="text-sm font-mono bg-black/40 border-white/10 border rounded-lg mt-8 pt-4 pr-4 pb-4 pl-4 backdrop-blur-sm overflow-hidden" style={{height: '120px', position: 'relative'}}>
<div className="" style={{animation: 'scrollText 8s linear infinite', position: 'absolute', whiteSpace: 'nowrap'}}>
<div className="flex gap-2 mb-2 items-center">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-slate-400 text-xs">Terminal</span>
</div><div className="text-emerald-300 mb-1">
<span className="text-slate-500">$</span> vault get api-key --env production
    </div>
<div className="text-slate-400 mb-1">
      sk-proj-abc123...xyz789
    </div>
<div className="text-emerald-300 mb-1">
<span className="text-slate-500">$</span> vault set db-password --secure
    </div>
<div className="text-slate-400 mb-1">
      Password stored securely
    </div>
<div className="text-emerald-300 mb-1">
<span className="text-slate-500">$</span> vault sync --all
    </div>
<div className="text-slate-400 mb-1">
      ✓ Synced 42 secrets across 3 environments
    </div>
<div className="text-emerald-300 mb-1">
<span className="text-slate-500">$</span> vault backup create
    </div>
<div className="text-slate-400 mb-1">
      Backup created: vault-backup-2024-01-15.enc
    </div>
</div>
<style>
    @keyframes scrollText {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-200px);
      }
    }
  </style>
</div>
</div>

<div className="lg:col-span-7 order-1 lg:order-2">
<div className="relative rounded-3xl overflow-hidden border border-emerald-400/20 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm shadow-[0_0_60px_rgba(16,185,129,0.15)]">

<div className="absolute inset-x-0 top-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-4">
<div className="flex items-center gap-1.5">
<span className="h-2.5 w-2.5 rounded-full bg-red-400/60"></span>
<span className="h-2.5 w-2.5 rounded-full bg-yellow-400/60"></span>
<span className="h-2.5 w-2.5 rounded-full bg-green-400/60"></span>
</div>
<div className="flex-1 text-center">
<span className="text-xs text-white/60 font-mono">terminal — zsh — 120x40</span>
</div>
</div>

<div className="relative aspect-[16/10] sm:aspect-[16/9] pt-10"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/b684a978-25aa-4f71-9a00-4b906ffa9e86/0.mp4"></video>

<div className="pointer-events-none absolute inset-0 mix-blend-overlay" style="background-image:
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
                background-size: 34px 34px;"></div>

<svg aria-hidden="true" className="absolute inset-0 w-[24px] h-[24px]" data-icon-replaced="true" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(226, 232, 240)'}} viewbox="0 0 1200 700">
<defs>
</defs>

<g className="" filter="url(#soft-glow)" transform="translate(250,220)">
<rect className="" fill="rgba(16,185,129,0.10)" height="180" rx="18" stroke="rgba(110,231,183,0.35)" strokeWidth="2" width="420" x="-120" y="-60"></rect>
<text fill="rgba(110,231,183,0.9)" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="44" letter-spacing="0.5" x="-90" y="-10">vault sync</text>
<text fill="rgba(110,231,183,0.7)" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="28" x="-90" y="40">&gt; Syncing...</text>
<text fill="rgba(110,231,183,0.5)" fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace" fontSize="20" x="-90" y="80">✓ Connected to vault</text>
</g>

<g filter="url(#soft-glow)" transform="translate(640,360)">
<circle fill="rgba(16,185,129,0.25)" r="34" stroke="rgba(110,231,183,0.55)" strokeWidth="2"></circle>
<text fill="rgba(110,231,183,0.95)" fontFamily="ui-monospace" fontSize="28" x="-12" y="10">API</text>
</g>

<g stroke="rgba(110,231,183,0.45)" strokeWidth="2">
<line x1="640" x2="900" y1="360" y2="260"></line>
<line x1="640" x2="940" y1="360" y2="380"></line>
<line x1="640" x2="880" y1="360" y2="510"></line>
</g>

<g className="" filter="url(#soft-glow)">
<g transform="translate(940,250)">
<rect fill="rgba(16,185,129,0.15)" height="50" rx="25" stroke="rgba(110,231,183,0.4)" strokeWidth="2" width="120" x="-60" y="-25"></rect>
<text fill="rgba(110,231,183,0.9)" fontSize="16" font-weight="500" text-anchor="middle" x="0" y="5">Scripts</text>
</g>
<g transform="translate(1000,380)">
<rect fill="rgba(16,185,129,0.15)" height="50" rx="25" stroke="rgba(110,231,183,0.4)" strokeWidth="2" width="120" x="-60" y="-25"></rect>
<text fill="rgba(110,231,183,0.9)" fontSize="16" font-weight="500" text-anchor="middle" x="0" y="5">Webhooks</text>
</g>
<g className="" transform="translate(940,520)">
<rect className="" fill="rgba(16,185,129,0.15)" height="50" rx="25" stroke="rgba(110,231,183,0.4)" strokeWidth="2" width="120" x="-60" y="-25"></rect>
<text fill="rgba(110,231,183,0.9)" fontSize="16" font-weight="500" text-anchor="middle" x="0" y="5">CI/CD</text>
</g>
</g>
</svg>

<div className="absolute left-1/2 -translate-x-1/2 top-0 mt-2" id="anchor-b">
<span className="block h-3 w-3 rounded-full bg-emerald-400/90 shadow-[0_0_15px_rgba(16,185,129,0.8)]"></span>
</div>
</div>
</div>
</div>
</div>

<div className="text-center py-12">
<div className="inline-flex items-center gap-4">
<a className="inline-flex items-center gap-2 hover:bg-emerald-400 transition-colors text-sm font-medium rounded-full pt-3 pr-6 pb-3 pl-6 relative overflow-hidden" href="#" onmouseout="this.style.color='var(--green)'; this.style.boxShadow='inset 0 0 10px rgba(27, 253, 156, 0.4), 0 0 9px 3px rgba(27, 253, 156, 0.1)'; this.querySelector('.sweep-effect').style.transform='translateX(-4em)';" onmouseover="this.style.color='#82ffc9'; this.style.boxShadow='inset 0 0 10px rgba(27, 253, 156, 0.6), 0 0 9px 3px rgba(27, 253, 156, 0.2)'; this.querySelector('.sweep-effect').style.transform='translateX(15em)';" style={{-Green: '#1BFD9C', fontSize: '15px', padding: '0.7em 2.7em', letterSpacing: '0.06em', position: 'relative', fontFamily: 'inherit', borderRadius: '2.6em', overflow: 'hidden', lineHeight: '1.4em', border: '2px solid var(--green)', background: 'linear-gradient(to right, rgba(27, 253, 156, 0.1) 1%, transparent 40%, transparent 60%, rgba(27, 253, 156, 0.1) 100%)', color: 'var(--green)', boxShadow: 'rgba(27, 253, 156, 0.4) 0px 0px 10px inset, rgba(27, 253, 156, 0.1) 0px 0px 9px 3px'}}>
<span className="sweep-effect" style={{content: '""', position: 'absolute', left: '-4em', width: '4em', height: '100%', top: '0px', background: 'linear-gradient(to right, transparent 1%, rgba(27, 253, 156, 0.1) 40%, rgba(27, 253, 156, 0.1) 60%, transparent 100%)', pointerEvents: 'none'}}></span>
  Try Vaultic Now
  <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-slate-300 border border-white/15 hover:bg-white/5 transition-colors" href="#">
          View Documentation
          <svg className="lucide lucide-arrow-right w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-right" fill="none" filllinecap="round" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(203, 213, 225)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>


</section><section className="relative overflow-hidden z-20">
<div className="relative max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">

<div className="relative text-center">
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight">
      Why developers actually switch.
    </h2>
<p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
      Built for speed &amp; privacy. Everything else just… isn't.
    </p>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 pt-2 pr-5 pb-2 pl-2 space-x-4 items-stretch">

<div className="pointer-events-none hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
<div className="relative h-full flex flex-col items-center">
<span className="h-12 w-px rounded bg-emerald-400/25"></span>
<div className="inline-flex items-center justify-center px-3 py-2 rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/40 text-sm font-medium text-emerald-300 tracking-tight">
          VS
        </div>
<span className="flex-1 w-px rounded bg-emerald-400/20"></span>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative sm:p-8 lg:p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:border-emerald-400/40 hover:bg-black/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:scale-[1.02] group bg-black/40 h-full border-emerald-400/20 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
<div className="pointer-events-none absolute inset-x-8 top-2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:via-emerald-400/40 transition-all duration-500"></div>
<div className="pointer-events-none absolute inset-1 rounded-[22px] group-hover:shadow-[inset_0_0_0_2px_rgba(16,185,129,0.25)] transition-all duration-500" style={{boxShadow: 'inset 0 0 0 1px rgba(16,185,129,0.12)'}}></div>

<div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 50% 20%, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 40%, transparent 70%)'}}></div>
<div className="relative z-10 inline-flex gap-3 group-hover:bg-emerald-400/20 group-hover:ring-emerald-400/60 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-500 bg-emerald-400/10 ring-emerald-400/40 ring-1 rounded-2xl pt-2 pr-4 pb-2 pl-4 items-center group-hover:scale-105">
<span className="text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-500">Vaultic</span>
</div>
<ul className="relative z-10 mt-8 space-y-5">
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Zero-knowledge encryption</span>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Instant cross-device sync</span>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
<svg className="lucide lucide-check w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Terminal-first experience</span>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-200">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
<svg className="lucide lucide-check w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Lightweight &amp; scalable</span>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-300">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Self-host or managed vault</span>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-[400ms]">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Usage-based fair pricing</span>
</li>
</ul>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative sm:p-8 lg:p-10 overflow-hidden cursor-pointer transition-all duration-500 hover:border-emerald-400/40 hover:bg-black/60 hover:shadow-[0_0_40px_rgba(16,185,129,0.25)] hover:scale-[1.02] group bg-black/40 h-full border-emerald-400/20 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">
<div className="pointer-events-none absolute inset-x-8 top-2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:via-emerald-400/40 transition-all duration-500"></div>
<div className="pointer-events-none absolute inset-1 rounded-[22px] group-hover:shadow-[inset_0_0_0_2px_rgba(16,185,129,0.25)] transition-all duration-500" style={{boxShadow: 'inset 0 0 0 1px rgba(16,185,129,0.12)'}}></div>

<div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{background: 'radial-gradient(circle at 50% 20%, rgba(16,185,129,0.15) 0%, rgba(16,185,129,0.05) 40%, transparent 70%)'}}></div>
<div className="relative z-10 inline-flex gap-3 group-hover:bg-emerald-400/20 group-hover:ring-emerald-400/60 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-500 bg-emerald-400/10 ring-emerald-400/40 ring-1 rounded-2xl pt-2 pr-4 pb-2 pl-4 items-center group-hover:scale-105">
<span className="text-2xl font-semibold text-white tracking-tight group-hover:text-emerald-50 transition-colors duration-500">Other</span>
</div>
<ul className="relative z-10 mt-8 space-y-5">
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
<svg className="lucide lucide-circle w-3.5 h-3.5 text-emerald-400" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Limited encryption</span>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
<svg className="lucide lucide-circle w-3.5 h-3.5 text-emerald-400" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Slow sync / laggy updates</span>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
<svg className="lucide lucide-circle w-3.5 h-3.5 text-emerald-400" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Bloated UIs, no CLI</span>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-200">
<span className="inline-flex items-center justify-center group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500 bg-emerald-400/20 w-6 h-6 ring-emerald-400/40 ring-1 rounded-full">
<svg className="lucide lucide-circle w-3.5 h-3.5 text-emerald-400" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Heavy, resource-hungry</span>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-300">
<span className="inline-flex items-center justify-center group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500 bg-emerald-400/20 w-6 h-6 ring-emerald-400/40 ring-1 rounded-full">
<svg className="lucide lucide-circle w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Cloud-only, no self-hosting</span>
</li>
<li className="flex items-start gap-3 group-hover:translate-x-1 transition-transform duration-300 delay-[400ms]">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20 ring-1 ring-emerald-400/40 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/60 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-500">
<svg className="lucide lucide-circle w-3.5 h-3.5 text-emerald-400" data-lucide="circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle></svg>
</span>
<span className="text-[14.5px] sm:text-base text-slate-300 group-hover:text-white transition-colors duration-500">Overpriced per-seat models</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section><section className="relative overflow-hidden z-20">
<div className="relative max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="aura-emfms84tu">

<div className="relative text-center max-w-4xl mx-auto">
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight">
        Pricing
      </h2>
<p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-400 leading-relaxed">
        Use Vaultic for free. Upgrade to connect a custom domain, unlock advanced features, and raise your limits.
      </p>

<div className="mt-8 inline-flex items-center rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-sm">
<button className="px-5 py-2 text-sm font-medium rounded-full text-white bg-white/10 border border-white/10 transition-all duration-200" id="seg-personal">
          Personal
        </button>
<button className="px-5 py-2 text-sm font-medium rounded-full text-slate-300 hover:text-white transition-all duration-200" id="seg-business">
          Business
        </button>
</div>

<div className="mt-6 flex items-center justify-center gap-3 text-sm">
<span className="text-slate-400">Monthly</span>
<button aria-pressed="false" className="relative inline-flex h-6 w-11 items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-sm transition-colors cursor-pointer" id="billingToggle">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(90deg, rgba(16,185,129,0.25), rgba(110,231,183,0.25))'}}></span>
<span className="z-10 inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-300" style={{transform: 'translateX(4px)'}}></span>
</button>
<div className="inline-flex items-center gap-2">
<span className="text-white">Yearly</span>
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-emerald-300 border border-emerald-400/30 bg-emerald-400/10">Save 20%</span>
</div>
</div>
</div>

<div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">

<div className="relative rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:bg-black/50 group cursor-pointer">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100 opacity-75" style={{background: 'radial-gradient(120% 100% at 0% 0%, rgba(16,185,129,0.18), rgba(16,185,129,0.06) 40%, transparent 60%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="p-6 sm:p-8">
<div className="flex items-center justify-between">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">Mini</h3>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="uppercase billing-label">Monthly</span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full border border-white/15 bg-white/10 cursor-pointer transition-colors duration-200 hover:bg-white/15" data-card-toggle="">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(90deg, rgba(16,185,129,0.25), rgba(110,231,183,0.2))'}}></span>
<span className="z-10 inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300" style={{transform: 'translateX(4px)'}}></span>
</button>
</div>
</div>
<p className="mt-5 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Landing pages are</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-white text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
<span className="price" data-monthly="US$9" data-yearly="US$7">US$9</span>
</span>
<span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">/month, per site</span>
</div>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">2 pages</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">10 GB bandwidth</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">Custom domain</span>
</li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10">
            Get started
          </button>
</div>
</div>

<div className="relative rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-emerald-400/30 hover:bg-black/50 group cursor-pointer">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100 opacity-75" style={{background: 'radial-gradient(120% 100% at 0% 0%, rgba(16,185,129,0.18), rgba(16,185,129,0.06) 40%, transparent 60%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="p-6 sm:p-8">
<div className="flex items-center justify-between">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">Basic</h3>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="uppercase billing-label">Monthly</span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full border border-white/15 bg-white/10 cursor-pointer transition-colors duration-200 hover:bg-white/15" data-card-toggle="">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(90deg, rgba(16,185,129,0.25), rgba(110,231,183,0.2))'}}></span>
<span className="z-10 inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300" style={{transform: 'translateX(4px)'}}></span>
</button>
</div>
</div>
<p className="mt-5 text-slate-400 group-hover:text-slate-300 transition-colors duration-300">Basic sites are</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-white text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
<span className="price" data-monthly="US$20" data-yearly="US$16">US$20</span>
</span>
<span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">/month, per site</span>
</div>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">1,000 pages</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">50 GB bandwidth</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/25 group-hover:ring-emerald-400/40 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">Password protect</span>
</li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all duration-200 group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10">
            Get started
          </button>
</div>
</div>

<div className="relative rounded-3xl border border-emerald-400/30 bg-black/40 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.2)] group cursor-pointer">
<div className="pointer-events-none absolute inset-0 transition-all duration-300 group-hover:opacity-100" style={{background: 'radial-gradient(120% 120% at 90% 10%, rgba(16,185,129,0.35), rgba(16,185,129,0.15) 40%, rgba(16,185,129,0.06) 60%, transparent 75%)'}}></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="p-6 sm:p-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-emerald-50 transition-colors duration-300">Pro</h3>
<span className="inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium text-emerald-900 bg-emerald-300/95 shadow-[0_0_20px_rgba(16,185,129,0.35)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] transition-all duration-300">Popular</span>
</div>
<div className="flex items-center gap-2 text-xs text-slate-400">
<span className="uppercase billing-label">Monthly</span>
<button className="relative inline-flex h-5 w-9 items-center rounded-full border border-emerald-400/40 bg-emerald-400/20 cursor-pointer transition-colors duration-200 hover:bg-emerald-400/25" data-card-toggle="">
<span className="absolute inset-0 rounded-full" style={{background: 'linear-gradient(90deg, rgba(16,185,129,0.45), rgba(110,231,183,0.35))'}}></span>
<span className="z-10 inline-block h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300" style={{transform: 'translateX(4px)'}}></span>
</button>
</div>
</div>
<p className="mt-5 text-slate-300 group-hover:text-slate-200 transition-colors duration-300">Growing sites are</p>
<div className="mt-1 flex items-baseline gap-2">
<span className="text-white text-3xl sm:text-4xl font-semibold tracking-tight group-hover:text-emerald-50 transition-colors duration-300">
<span className="price" data-monthly="US$41" data-yearly="US$33">US$41</span>
</span>
<span className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">/month, per site</span>
</div>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/50 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">10,000 pages</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/50 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">100 GB bandwidth</span>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 ring-1 ring-emerald-400/30 group-hover:bg-emerald-400/30 group-hover:ring-emerald-400/50 transition-all duration-300">
<svg className="lucide lucide-check w-3.5 h-3.5 text-emerald-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="text-slate-300 text-[14.5px] sm:text-base group-hover:text-slate-200 transition-colors duration-300">10 CMS collections</span>
</li>
</ul>
<button className="mt-8 w-full inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium text-black bg-emerald-400/95 hover:bg-emerald-400 transition-colors shadow-[0_0_20px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
            Get started
          </button>
</div>
</div>
</div>


</div>


</section>

<footer className="relative overflow-hidden bg-black/10 border-white/10 border-t backdrop-blur-xl">
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"></div>
<div className="pointer-events-none absolute inset-0 backdrop-blur-xl"></div>
<div className="relative max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

<div className="lg:col-span-2">
<div className="flex items-center gap-3 mb-4">
<span className="text-2xl font-semibold text-white tracking-tight">Cryptix</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
              Professional-grade digital asset management platform trusted by millions of users worldwide. 
              Secure, fast, and built for the modern crypto economy.
            </p>
<div className="flex items-center gap-4">
<a className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" href="#">
<svg className="text-slate-300" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
</svg>
</a>
<a className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" href="#">
<svg className="text-slate-300" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
</svg>
</a>
<a className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors" href="#">
<svg className="text-slate-300" fill="currentColor" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path>
</svg>
</a>
</div>
</div>

<div className="">
<h3 className="text-white font-medium mb-4">Product</h3>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Security</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">API</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Enterprise</a></li>
</ul>
</div>

<div className="">
<h3 className="text-white font-medium mb-4">Resources</h3>
<ul className="space-y-3 text-sm">
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>

<div className="">
<h3 className="text-white font-medium mb-4">Company</h3>
<ul className="space-y-3 text-sm">
<li className=""><a className="text-slate-400 hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="text-slate-400 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12 pt-8 border-t border-white/10">
<p className="text-slate-400 text-sm">
            © 2024 Cryptix. All rights reserved.
          </p>
<div className="flex items-center gap-6 text-sm">
<span className="flex items-center gap-2 text-slate-400">
<span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              All systems operational
            </span>
<a className="text-slate-400 hover:text-white transition-colors" href="#">Status</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
