import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          // Enhanced scroll and animation functionality
          function initDashboardAnimations() {
            const dashboard = document.querySelector('[data-dashboard-container]');
            const numberElements = document.querySelectorAll('[data-animate-number]');
            const chartBars = document.querySelectorAll('[data-chart-bar]');
            const pieChart = document.querySelector('[data-animate-pie]');
            const percentageElement = document.querySelector('[data-animate-percentage]');
            
            let hasAnimated = false;

            function animateNumber(element, target, suffix = '') {
              const isDecimal = target.toString().includes('.');
              const isCurrency = suffix.includes('$');
              let current = 0;
              const increment = target / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                  current = target;
                  clearInterval(timer);
                }
                
                let displayValue;
                if (isDecimal) {
                  displayValue = current.toFixed(1);
                } else if (target >= 1000000) {
                  displayValue = (current / 1000000).toFixed(1) + 'M';
                } else if (target >= 1000) {
                  displayValue = (current / 1000).toFixed(1) + 'K';
                } else {
                  displayValue = Math.floor(current).toString();
                }
                
                if (isCurrency) {
                  element.textContent = '$' + displayValue;
                } else if (suffix.includes('%')) {
                  element.textContent = displayValue + '%';
                } else {
                  element.textContent = displayValue;
                }
              }, 20);
            }

            function animateCharts() {
              // Animate chart bars
              chartBars.forEach((bar, index) => {
                const height = bar.dataset.chartBar + '%';
                setTimeout(() => {
                  bar.style.height = height;
                }, index * 100);
              });

              // Animate pie chart
              if (pieChart) {
                setTimeout(() => {
                  pieChart.style.transform = 'rotate(240deg)';
                }, 300);
              }

              // Animate percentage
              if (percentageElement) {
                const target = parseInt(percentageElement.dataset.animatePercentage);
                setTimeout(() => {
                  animateNumber(percentageElement, target, '%');
                }, 500);
              }

              // Animate numbers
              numberElements.forEach((element, index) => {
                const target = parseFloat(element.dataset.animateNumber);
                const suffix = element.textContent.includes('$') ? '$' : '';
                setTimeout(() => {
                  animateNumber(element, target, suffix);
                }, index * 150);
              });
            }

            function checkScrollAndAnimate() {
              const rect = dashboard.getBoundingClientRect();
              const isInView = rect.top < window.innerHeight && rect.bottom > 0;

              if (isInView && !hasAnimated) {
                // Transform dashboard to normal view
                dashboard.style.transform = 'rotateX(0deg)';
                
                // Start animations after transform
                setTimeout(() => {
                  animateCharts();
                }, 400);
                
                hasAnimated = true;
              }
            }

            // Initial check
            checkScrollAndAnimate();

            // Listen for scroll events
            window.addEventListener('scroll', checkScrollAndAnimate, { passive: true });
          }

          // Initialize when DOM is ready
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initDashboardAnimations);
          } else {
            initDashboardAnimations();
          }
        


        (function() {
          const root = document.getElementById('aura-emfn5t1mi');
          const rows = root ? root.querySelectorAll('[data-ticker]') : [];
          rows.forEach((row) => {
            if (row.dataset.duped) return;
            row.dataset.duped = 'true';
            // Duplicate content for seamless loop
            row.innerHTML = row.innerHTML + row.innerHTML;
            const dir = row.dataset.dir === 'right' ? 1 : -1;
            const speed = parseFloat(row.dataset.speed || '0.8'); // px per tick
            let pos = 0;
            const half = () => Math.max(1, Math.floor(row.scrollWidth / 2));

            function tick() {
              pos += dir * speed;
              const limit = half();
              if (dir === -1 && -pos >= limit) pos = 0;
              if (dir === 1 && pos >= 0) pos = -limit;
              row.style.transform = 'translateX(' + pos + 'px)';
              // Use timeout >= 100ms (shorter timers may be disabled upstream)
              setTimeout(tick, 120);
            }
            // Kick off after layout
            setTimeout(tick, 150);
          });
        })();
      


    (function () {
      const root = document.getElementById('aura-emfn7a7d5');
      if (!root) return;
      const cols = root.querySelectorAll('[data-vert-marquee]');
      cols.forEach(function (col) {
        if (col.dataset._init) return;
        col.dataset._init = '1';
        const track = col.querySelector('[data-track]');
        if (!track) return;
        // duplicate to make seamless
        track.innerHTML = track.innerHTML + track.innerHTML;
        const half = () => Math.max(1, Math.floor(track.scrollHeight / 2));
        const dir = col.dataset.dir === 'down' ? 1 : -1;
        const speed = parseFloat(col.dataset.speed || '1.0'); // px per tick
        // start position
        col.scrollTop = dir === -1 ? half() : 0;

        function step() {
          col.scrollTop += dir * speed;
          const limit = half();
          if (dir === 1 && col.scrollTop >= limit) col.scrollTop = 0;
          if (dir === -1 && col.scrollTop <= 0) col.scrollTop = limit;
          setTimeout(step, 130);
        }
        setTimeout(step, 160);
      });
    })();
  


    function toggleYearlyBilling(button) {
      const isYearly = button.getAttribute('aria-pressed') === 'true';
      const willBeYearly = !isYearly;
      
      button.setAttribute('aria-pressed', String(willBeYearly));
      const knob = button.querySelector('span');
      
      if (knob) {
        knob.style.transform = willBeYearly ? 'translateX(1.25rem)' : 'translateX(0)';
      }
      
      const priceElement = document.querySelector('[data-price-monthly]');
      const billingPeriodElement = document.querySelector('[data-billing-period]');
      
      if (priceElement) {
        const monthlyPrice = priceElement.getAttribute('data-price-monthly');
        const yearlyPrice = priceElement.getAttribute('data-price-yearly');
        priceElement.textContent = willBeYearly ? yearlyPrice : monthlyPrice;
      }
      
      if (billingPeriodElement) {
        billingPeriodElement.textContent = willBeYearly ? 'Per user / year' : 'Per user / month';
      }
    }
  


    function toggleYearlyBilling(button) {
      const isYearly = button.getAttribute('aria-pressed') === 'true';
      const willBeYearly = !isYearly;
      
      button.setAttribute('aria-pressed', String(willBeYearly));
      const knob = button.querySelector('span');
      
      if (knob) {
        knob.style.transform = willBeYearly ? 'translateX(1.25rem)' : 'translateX(0)';
      }
      
      const priceElement = document.querySelector('[data-price-monthly]');
      const billingPeriodElement = document.querySelector('[data-billing-period]');
      
      if (priceElement) {
        const monthlyPrice = priceElement.getAttribute('data-price-monthly');
        const yearlyPrice = priceElement.getAttribute('data-price-yearly');
        priceElement.textContent = willBeYearly ? yearlyPrice : monthlyPrice;
      }
      
      if (billingPeriodElement) {
        billingPeriodElement.textContent = willBeYearly ? 'Per user / year' : 'Per user / month';
      }
    }

    // Cursor following glow effect
    document.addEventListener('DOMContentLoaded', function() {
      const cards = document.querySelectorAll('.pricing-card');
      
      cards.forEach(card => {
        const glow = card.querySelector('.cursor-glow');
        
        card.addEventListener('mousemove', function(e) {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          glow.style.left = x + 'px';
          glow.style.top = y + 'px';
        });
        
        card.addEventListener('mouseleave', function() {
          glow.style.opacity = '0';
        });
        
        card.addEventListener('mouseenter', function() {
          glow.style.opacity = '1';
        });
      });
    });
  


    (function () {
      const root = document.getElementById('aura-emfqerdim');
      if (!root) return;
      
      const items = Array.from(root.querySelectorAll('[data-acc-item]'));
      
      items.forEach((card) => {
        const btn = card.querySelector('[data-acc-btn]');
        const panel = card.querySelector('[data-acc-panel]');
        const iconContainer = card.querySelector('[data-acc-icon]');
        const isOpen = card.dataset.open === 'true';

        function setOpen(open) {
          card.dataset.open = open ? 'true' : 'false';
          
          // Smooth panel animation
          if (panel) {
            if (open) {
              panel.style.maxHeight = panel.scrollHeight + 'px';
              panel.style.opacity = '1';
            } else {
              panel.style.maxHeight = '0';
              panel.style.opacity = '0';
            }
          }
          
          // Animate icon - smooth transition between + and -
          if (iconContainer) {
            const minusIcon = iconContainer.children[0]; // minus icon (horizontal line)
            const plusIcon = iconContainer.children[1]; // plus icon (+ shape)
            
            if (open) {
              // Show minus, hide plus
              minusIcon.style.opacity = '1';
              minusIcon.style.transform = 'rotate(0deg)';
              plusIcon.style.opacity = '0';
              plusIcon.style.transform = 'rotate(90deg)';
            } else {
              // Show plus, hide minus  
              minusIcon.style.opacity = '0';
              minusIcon.style.transform = 'rotate(90deg)';
              plusIcon.style.opacity = '1';
              plusIcon.style.transform = 'rotate(0deg)';
            }
          }
          
          // Background transitions
          if (open) {
            card.classList.remove('bg-neutral-900/40');
            card.classList.add('bg-gradient-to-b', 'from-violet-500/15', 'via-violet-500/10', 'to-fuchsia-500/0');
          } else {
            card.classList.add('bg-neutral-900/40');
            card.classList.remove('bg-gradient-to-b', 'from-violet-500/15', 'via-violet-500/10', 'to-fuchsia-500/0');
          }
        }

        // Initialize state
        setOpen(isOpen);

        // Click handler
        if (btn) {
          btn.addEventListener('click', () => {
            const willOpen = card.dataset.open !== 'true';
            
            // Close all other items
            items.forEach(otherCard => {
              if (otherCard !== card) {
                const otherIconContainer = otherCard.querySelector('[data-acc-icon]');
                const otherPanel = otherCard.querySelector('[data-acc-panel]');
                
                otherCard.dataset.open = 'false';
                
                if (otherPanel) {
                  otherPanel.style.maxHeight = '0';
                  otherPanel.style.opacity = '0';
                }
                
                if (otherIconContainer) {
                  const otherMinusIcon = otherIconContainer.children[0];
                  const otherPlusIcon = otherIconContainer.children[1];
                  otherMinusIcon.style.opacity = '0';
                  otherMinusIcon.style.transform = 'rotate(90deg)';
                  otherPlusIcon.style.opacity = '1';
                  otherPlusIcon.style.transform = 'rotate(0deg)';
                }
                
                otherCard.classList.add('bg-neutral-900/40');
                otherCard.classList.remove('bg-gradient-to-b', 'from-violet-500/15', 'via-violet-500/10', 'to-fuchsia-500/0');
              }
            });
            
            // Toggle current item
            setOpen(willOpen);
          });
        }
      });
    })();
  


    (function () {
      const root = document.getElementById('aura-emfndh5nl');
      if (!root) return;
      const items = Array.from(root.querySelectorAll('[data-acc-item]'));
      items.forEach((card) => {
        const btn = card.querySelector('button');
        const panel = card.querySelector('[data-acc-panel]');
        const plus = card.querySelector('[data-acc-plus]');
        const minus = card.querySelector('[data-acc-minus]');

        function setOpen(open) {
          card.dataset.open = open ? 'true' : '';
          if (panel) panel.classList.toggle('hidden', !open);
          if (plus) plus.classList.toggle('hidden', open);
          if (minus) minus.classList.toggle('hidden', !open);
          card.classList.toggle('bg-gradient-to-b', open);
          if (open) {
            card.classList.add('from-violet-500/15','via-violet-500/10','to-fuchsia-500/20','border-white/10');
          } else {
            card.classList.remove('from-violet-500/15','via-violet-500/10','to-fuchsia-500/20');
            card.classList.add('bg-neutral-900/40');
          }
        }

        // Initialize visual state
        const initiallyOpen = card.hasAttribute('data-open');
        setOpen(initiallyOpen);

        btn.addEventListener('click', () => {
          const willOpen = !(card.dataset.open === 'true');
          // close others
          items.forEach(i => { if (i !== card) { i.removeAttribute('data-open'); const p=i.querySelector('[data-acc-panel]'); const pl=i.querySelector('[data-acc-plus]'); const mn=i.querySelector('[data-acc-minus]'); if (p) p.classList.add('hidden'); if (pl) pl.classList.remove('hidden'); if (mn) mn.classList.add('hidden'); i.classList.remove('from-violet-500/15','via-violet-500/10','to-fuchsia-500/20','bg-gradient-to-b'); i.classList.add('bg-neutral-900/40'); }});
          setOpen(willOpen);
        }, { passive: true });
      });
    })();
  


      window.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons();
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative">
<div className="mx-auto max-w-7xl px-6 py-6">
<div className="flex items-center justify-between">

<a className="group inline-flex items-center gap-3" href="#">
<span className="text-lg font-semibold text-white tracking-tight">Crypton</span>
</a>

<nav className="hidden md:flex items-center">
<div className="ring-1 ring-white/10 bg-neutral-900/60 rounded-full pt-2 pr-1 pb-2 pl-1 backdrop-blur">
<ul className="flex items-center">
<li className=""><a className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition" href="#">Overview</a></li>
<li className=""><a className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition" href="#">How it works</a></li>
<li className=""><a className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition" href="#">Features</a></li>
<li className=""><a className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition" href="#">Testimonials</a></li>
<li className=""><a className="px-3 py-1.5 text-sm text-neutral-300 hover:text-white hover:bg-white/5 rounded-full transition" href="#">Pricing</a></li>
</ul>
</div>
</nav>

<div className="flex items-center gap-3">
<button className="group relative inline-flex min-w-[120px] cursor-pointer transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white font-semibold text-white/70 tracking-tight rounded-full px-[17px] py-[8px] items-center justify-center" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)'}}>
<span className="relative z-10 font-normal">Sign Up</span>

<span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="text-center max-w-4xl mr-auto ml-auto pt-6 pr-6 pl-6 space-y-8">
<p className="text-sm text-neutral-400">Ship faster with data you trust</p>
<h1 className="mt-3 text-5xl sm:text-6xl font-semibold tracking-tight">
          Take control of your
          <span className="block bg-clip-text bg-gradient-to-br from-neutral-50 to-neutral-300">Product Analytics</span>
</h1>
<p className="text-base text-neutral-400 max-w-2xl mt-5 mr-auto ml-auto">Your funnels, cohorts, and retention streamlined. Nebula delivers real‑time insights, low overhead, and next‑level security.</p>

<div className="">
<button className="button" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner font-space-grotesk" style={{}}>Get Started<svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg></span>
<style>
.button {
cursor: pointer;
position: relative;
display: inline-flex;
align-items: center;
justify-content: center;
overflow: hidden;
transition: all 0.25s ease;
background: radial-gradient(65.28% 65.28% at 50% 100%,
    rgba(99, 102, 241, 0.8) 0%,
    rgba(99, 102, 241, 0) 100%),
  linear-gradient(0deg, #4f46e5, #4f46e5);
border-radius: 9999px;
border: none;
outline: none;
padding: 8px 18px;
min-height: 36px;
min-width: 90px;
}

.button::before,
.button::after {
content: "";
position: absolute;
transition: all 0.5s ease-in-out;
z-index: 0;
}

.button::before {
inset: 1px;
background: black;
border-radius: 9999px;
}

.button::after {
inset: 2px;
background: black),
  linear-gradient(0deg, #4f46e5, #4f46e5);
border-radius: 9999px;
}

.button:active {
transform: scale(0.95);
}

.points_wrapper {
overflow: hidden;
width: 100%;
height: 100%;
pointer-events: none;
position: absolute;
z-index: 1;
}

.points_wrapper .point {
bottom: -8px;
position: absolute;
animation: floating-points infinite ease-in-out;
pointer-events: none;
width: 1.5px;
height: 1.5px;
background-color: #fff;
border-radius: 9999px;
}

@keyframes floating-points {
0% {
  transform: translateY(0);
}

85% {
  opacity: 0;
}

100% {
  transform: translateY(-40px);
  opacity: 0;
}
}

.points_wrapper .point:nth-child(1) {
left: 10%;
opacity: 1;
animation-duration: 2.35s;
animation-delay: 0.2s;
}

.points_wrapper .point:nth-child(2) {
left: 30%;
opacity: 0.7;
animation-duration: 2.5s;
animation-delay: 0.5s;
}

.points_wrapper .point:nth-child(3) {
left: 25%;
opacity: 0.8;
animation-duration: 2.2s;
animation-delay: 0.1s;
}

.points_wrapper .point:nth-child(4) {
left: 44%;
opacity: 0.6;
animation-duration: 2.05s;
}

.points_wrapper .point:nth-child(5) {
left: 50%;
opacity: 1;
animation-duration: 1.9s;
}

.points_wrapper .point:nth-child(6) {
left: 75%;
opacity: 0.5;
animation-duration: 1.5s;
animation-delay: 1.5s;
}

.points_wrapper .point:nth-child(7) {
left: 88%;
opacity: 0.9;
animation-duration: 2.2s;
animation-delay: 0.2s;
}

.points_wrapper .point:nth-child(8) {
left: 58%;
opacity: 0.8;
animation-duration: 2.25s;
animation-delay: 0.2s;
}

.points_wrapper .point:nth-child(9) {
left: 98%;
opacity: 0.6;
animation-duration: 2.6s;
animation-delay: 0.1s;
}

.points_wrapper .point:nth-child(10) {
left: 65%;
opacity: 1;
animation-duration: 2.5s;
animation-delay: 0.2s;
}

.inner {
z-index: 2;
gap: 5px;
position: relative;
width: 100%;
color: white;
display: inline-flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
line-height: 1.5;
transition: color 0.2s ease-in-out;
}

.inner svg.icon {
width: 16px;
height: 16px;
transition: transform 0.3s ease;
stroke: white;
fill: none;
}

.button:hover svg.icon {
transform: translateX(2px);
}

.button:hover svg.icon path {
animation: dash 0.8s linear forwards;
}

@keyframes dash {
0% {
  stroke-dasharray: 0, 20;
  stroke-dashoffset: 0;
}

50% {
  stroke-dasharray: 10, 10;
  stroke-dashoffset: -5;
}

100% {
  stroke-dasharray: 20, 0;
  stroke-dashoffset: -10;
}
}

/* Loading Component Styles */
#h2 {
  color: white;
  mix-blend-mode: difference;
  text-align: center;
  margin: 0;
  font-size: 12px;
  line-height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 0 0 3px;
  padding: 0;
  letter-spacing: 5px;
}

.div {
  position: relative;
  top: 0px;
  left: 0%;
  max-width: 200px;
  width: 100%;
  height: 30px;
  background: linear-gradient(to right, white, black);
  background-size: 200% 100%;
  animation-delay: 2s;
  border-radius: 10px;
  box-shadow: 0 0 3px;
  -webkit-box-reflect: below 1px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  animation: gradientAnimation 10s linear infinite reverse;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0;
  }

  100% {
    background-position: 200% 0;
  }
}

@media (max-width: 768px) {
  .div {
    width: 500px;
    left: 10%;
  }
}
</style>
</button>
</div>
</div>

<div className="relative max-w-5xl mt-14 mr-auto ml-auto pr-6 pl-6" style={{perspective: '1000px'}}>

<div className="pointer-events-none relative mb-4">
<div className="absolute -top-10 left-1/2 h-16 w-full max-w-4xl -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-violet-500/60 to-transparent blur-xl"></div>
<div className="absolute -top-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent blur-lg"></div>
</div>

<div className="relative" data-dashboard-container="" style={{transform: 'rotateX(0deg)', transition: 'transform 0.8s ease-out'}}>
<div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10"></div>
<div className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 shadow-2xl shadow-black/60 ring-1 ring-white/5 backdrop-blur overflow-hidden">

<div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 bg-neutral-900/80">
<div className="flex items-center gap-2">
<span className="h-3 w-3 rounded-full bg-red-500/70"></span>
<span className="h-3 w-3 rounded-full bg-yellow-500/70"></span>
<span className="h-3 w-3 rounded-full bg-green-500/70"></span>
</div>
<div className="flex-1 px-3">
<div className="mx-auto max-w-xs rounded-full bg-neutral-800/60 px-3 py-1 text-center text-xs text-neutral-300 ring-1 ring-white/5">nebula.app</div>
</div>
<div className="flex items-center gap-2 text-neutral-400">
<svg className="lucide lucide-search h-3.5 w-3.5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<svg className="lucide lucide-settings h-3.5 w-3.5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5">

<aside className="hidden lg:block border-r border-white/10 p-3">
<div className="flex items-center gap-2 px-2">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-800 ring-1 ring-white/10">
<img alt="avatar" className="w-6 h-6 object-cover rounded" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/346c8983-c047-4169-902a-df1305819be6_3840w.jpg"/>
</span>
<div className="">
<div className="text-xs font-medium">Alex Carter</div>
<div className="text-[10px] text-neutral-400">Product</div>
</div>
</div>
<nav className="mt-4 space-y-0.5">
<a className="flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 text-xs text-white ring-1 ring-white/10" href="#">
<svg className="lucide lucide-layout-dashboard h-3.5 w-3.5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                    Overview
                  </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-neutral-300 hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-bar-chart-3 h-3.5 w-3.5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                    Analytics
                  </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-neutral-300 hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-database h-3.5 w-3.5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                    Sources
                  </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-neutral-300 hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-bell h-3.5 w-3.5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
                    Alerts
                  </a>
<a className="flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-neutral-300 hover:bg-white/5 hover:text-white transition" href="#">
<svg className="lucide lucide-settings-2 h-3.5 w-3.5" data-lucide="settings-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 17H5"></path><path d="M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                    Settings
                  </a>
</nav>
</aside>

<main className="lg:col-span-4">
<div className="p-4">

<div className="mb-4">
<div className="flex items-center justify-between mb-3">
<h2 className="text-base font-semibold tracking-tight">Dashboard Overview</h2>
<span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-500/20">
<svg className="lucide lucide-trending-up h-3 w-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                        +12.4%
                      </span>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-3">
<div className="text-xs text-neutral-400">Total Events</div>
<div className="text-lg font-semibold" data-animate-number="2400000">2.4M</div>
<div className="text-xs text-emerald-400">+8.2%</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-3">
<div className="text-xs text-neutral-400">Conversion</div>
<div className="text-lg font-semibold" data-animate-number="4.2">4.2</div>
<div className="text-xs text-emerald-400">+0.3%</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-3">
<div className="text-xs text-neutral-400">Revenue</div>
<div className="text-lg font-semibold" data-animate-number="124000">$124.0K</div>
<div className="text-xs text-emerald-400">+15.1%</div>
</div>
<div className="rounded-lg border border-white/10 bg-neutral-900/60 p-3">
<div className="text-xs text-neutral-400">Users</div>
<div className="text-lg font-semibold" data-animate-number="18300">18.3K</div>
<div className="text-xs text-rose-400">-2.1%</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold">Event Timeline</h3>
<button className="text-neutral-400 hover:text-white">
<svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="flex bg-gradient-to-b from-[#ffffff]/10 to-[#ffffff]/0 h-24 border-white/5 border rounded-lg pt-2 pr-2 pb-2 pl-2 items-end justify-between" data-animate-chart="">
<div className="transition-all duration-1000 bg-gradient-to-t from-violet-500 to-violet-400 w-2 rounded-t" data-chart-bar="40" style={{height: '40%'}}></div>
<div className="w-2 bg-gradient-to-t from-violet-500 to-violet-400 rounded-t transition-all duration-1000 delay-100" data-chart-bar="60" style={{height: '60%'}}></div>
<div className="w-2 bg-gradient-to-t from-violet-500 to-violet-400 rounded-t transition-all duration-1000 delay-200" data-chart-bar="80" style={{height: '80%'}}></div>
<div className="w-2 bg-gradient-to-t from-violet-500 to-violet-400 rounded-t transition-all duration-1000 delay-300" data-chart-bar="45" style={{height: '45%'}}></div>
<div className="w-2 bg-gradient-to-t from-violet-500 to-violet-400 rounded-t transition-all duration-1000 delay-400" data-chart-bar="75" style={{height: '75%'}}></div>
<div className="w-2 bg-gradient-to-t from-fuchsia-500 to-fuchsia-400 rounded-t transition-all duration-1000 delay-500" data-chart-bar="90" style={{height: '90%'}}></div>
<div className="w-2 bg-gradient-to-t from-fuchsia-500 to-fuchsia-400 rounded-t transition-all duration-1000 delay-600" data-chart-bar="70" style={{height: '70%'}}></div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-neutral-900/60 p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-sm font-semibold">Top Sources</h3>
<button className="text-neutral-400 hover:text-white">
<svg className="lucide lucide-more-horizontal h-4 w-4" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
</div>

<div className="h-24 flex items-center justify-center">
<div className="relative">
<div className="w-16 h-16 rounded-full border-8 border-violet-500/30 border-t-violet-500 border-r-fuchsia-500 border-b-indigo-500 transition-transform duration-1000" data-animate-pie="" style={{transform: 'rotate(240deg)'}}></div>
<div className="absolute inset-0 flex items-center justify-center text-xs font-semibold" data-animate-percentage="67">67%</div>
</div>
</div>
</div>
</div>

<div className="rounded-xl border border-white/10 bg-neutral-900/60 overflow-hidden">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<h4 className="text-sm font-semibold">Recent Events</h4>
<a className="text-xs text-neutral-300 hover:text-white" href="#">View all</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="text-xs text-neutral-400">
<tr className="border-b border-white/10">
<th className="px-4 py-2 font-medium">Event</th>
<th className="px-4 py-2 font-medium">User</th>
<th className="px-4 py-2 font-medium">Count</th>
<th className="px-4 py-2 font-medium">Time</th>
</tr>
</thead>
<tbody className="divide-y divide-white/10 text-xs">
<tr className="hover:bg-white/5">
<td className="px-4 py-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                signup_completed
                              </div>
</td>
<td className="px-4 py-2 text-neutral-300">user_1204</td>
<td className="px-4 py-2" data-animate-number="1234">1.2K</td>
<td className="px-4 py-2 text-neutral-400">2m ago</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-violet-400"></span>
                                page_view
                              </div>
</td>
<td className="px-4 py-2 text-neutral-300">user_8847</td>
<td className="px-4 py-2" data-animate-number="892">892</td>
<td className="px-4 py-2 text-neutral-400">5m ago</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-4 py-2">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-fuchsia-400"></span>
                                purchase
                              </div>
</td>
<td className="px-4 py-2 text-neutral-300">user_5521</td>
<td className="px-4 py-2" data-animate-number="456">456</td>
<td className="px-4 py-2 text-neutral-400">8m ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
</div>
</div>

</div>
</section><section className="relative">


<div className="max-w-7xl mt-16 mr-auto ml-auto pr-6 pl-6">
<div className="text-center">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-200">Support top 30+ chains</h3>
<p className="mt-2 text-sm text-neutral-400">Compatible across the leading ecosystems</p>
</div>
<div className="mt-8 space-y-4">

<div className="flex items-center justify-center gap-10 py-5">
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
<svg className="lucide lucide-orbit h-4 w-4 text-neutral-300" data-lucide="orbit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 6.484A10 10 0 0 1 10.266 21.85"></path><path d="M3.659 17.516A10 10 0 0 1 13.74 2.152"></path><circle cx="12" cy="12" r="3"></circle><circle cx="19" cy="5" r="2"></circle><circle cx="5" cy="19" r="2"></circle></svg>
</span>
<span className="text-sm font-medium text-neutral-300">Elrond</span>
</div>
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
<svg className="lucide lucide-box h-4 w-4 text-neutral-300" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-300">Binance</span>
</div>
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
<svg className="lucide lucide-diamond h-4 w-4 text-neutral-300" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-300">TON</span>
</div>
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
<svg className="lucide lucide-layers h-4 w-4 text-neutral-300" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-300">Solana</span>
</div>
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
<svg className="lucide lucide-sparkles h-4 w-4 text-neutral-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="text-sm font-medium text-neutral-300">Ethereum</span>
</div>
</div>

<div className="flex gap-10 pt-5 pb-5 items-center justify-center">
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
<svg className="lucide lucide-link h-4 w-4 text-neutral-300" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-300">Polygon</span>
</div>
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
<svg className="lucide lucide-asterisk h-4 w-4 text-neutral-300" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v12"></path><path d="M17.196 9 6.804 15"></path><path d="m6.804 9 10.392 6"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-300">Stacks</span>
</div>
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
<svg className="lucide lucide-hexagon h-4 w-4 text-neutral-300" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-300">Arbitrum</span>
</div>
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
<svg className="lucide lucide-mountain h-4 w-4 text-neutral-300" data-lucide="mountain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-300">Avalanche</span>
</div>
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
<svg className="lucide lucide-triangle h-4 w-4 text-neutral-300" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-300">TRON</span>
</div>
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-800 ring-1 ring-white/10">
<svg className="lucide lucide-shield h-4 w-4 text-neutral-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</span>
<span className="text-sm font-medium text-neutral-300">Gnosis</span>
</div>
</div>
</div>

</div></section><section className="relative">
<div className="max-w-7xl mx-auto px-6 pt-24 pb-16">

<div className="text-center mb-16">
<h2 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold tracking-tight">
<span className="text-neutral-200">Redefining the future of</span>
<span className="block text-neutral-100">investing solutions</span>
</h2>
<p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed">
        Harness cutting-edge technology built to the highest industry standard, setting a new benchmark for modern investing experiences.
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="group relative overflow-hidden ring-1 ring-white/5 transition-all duration-500 hover:border-white-500/30 hover:ring-violet-500/20 bg-neutral-50/0 border-white/10 border rounded-2xl">

<div className="absolute -bottom-12 -right-12 transition-all duration-700 group-hover:scale-110 bg-gradient-to-tr from-white-500/25 via-white-500/15 to-transparent w-48 h-48 rounded-full blur-3xl"></div>
<div className="absolute -top-6 -left-6 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-transparent w-36 h-36 rounded-full blur-2xl"></div>
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#ffffff] bg-[#ffffff]/0 ring-[#ffffff]/20 ring-1 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5 grayscale-0">
<div className="h-1.5 w-1.5 bg-fuchsia-400 rounded-full"></div>
          Active
        </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-100 mb-2">Effortless payments &amp; requests</h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">Easily send or request payments from anyone just like you would with your bank with support for 100+ currencies and instant settlements.</p>
<div className="flex items-center justify-between text-xs text-neutral-400 mb-4">
<span className="font-medium">Recent History</span>
<a className="inline-flex items-center gap-1 text-neutral-300 hover:text-violet-300 transition-colors group/link" href="#">
<span className="">Show all</span>
<svg className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>

<div className="mb-4">
<div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-300 transition-all duration-300 hover:bg-white/10 focus-within:border-violet-500/50 focus-within:ring-1 focus-within:ring-violet-500/20">
<svg className="text-neutral-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
<span className="flex-1">Search payment requests</span>
<span className="text-xs text-neutral-500">⌘K</span>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
<div className="flex items-center gap-3">
<div className="relative">
<span className="inline-flex items-center justify-center bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/76429a90-b7c6-459f-bcdb-2a8b795efa9a_320w.jpg)] bg-cover ring-white/10 ring-1 rounded-full">
</span>
<div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-neutral-900"></div>
</div>
<div className="">
<div className="text-sm font-medium text-neutral-200">John Doe</div>
<div className="text-xs text-neutral-400">Premium Member</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-emerald-300">+0.025 ETH</div>
<div className="text-xs text-neutral-400">2 hours ago</div>
</div>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
<div className="flex items-center gap-3">
<div className="relative">
<span className="inline-flex items-center justify-center ring-white/10 ring-1 bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e7518623-5aeb-4f28-bace-436a99f814d4_320w.jpg)] bg-cover rounded-full">
</span>
<div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-neutral-900"></div>
</div>
<div className="">
<div className="text-sm font-medium text-neutral-200">Sean Dale</div>
<div className="text-xs text-neutral-400">Standard Member</div>
</div>
</div>
<div className="text-right">
<div className="text-sm font-medium text-emerald-300">+0.025 ETH</div>
<div className="text-xs text-neutral-400">5 hours ago</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden transition-all duration-500 hover:border-fuchsia-500/30 hover:ring-fuchsia-500/20 bg-gradient-to-br from-neutral-900/80 to-neutral-950/90 border-white/10 border ring-white/5 ring-1 rounded-2xl">
<div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/20 to-cyan-500/10 blur-3xl transition-all duration-700 group-hover:scale-110"></div>
<div className="absolute -top-8 -left-8 bg-gradient-to-br from-fuchsia-500/25 via-violet-500/15 to-transparent w-40 h-40 rounded-full blur-2xl"></div>
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#ffffff] bg-[#ffffff]/0 ring-[#ffffff]/20 ring-1 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5 grayscale-0">
<div className="h-1.5 w-1.5 animate-pulse bg-fuchsia-400 rounded-full"></div>
          AI Powered
        </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-100 mb-2">Built‑in AI for smarter workflows</h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">Get your investments on autopilot with powerful AI integrated right into the platform always ready to help you stay ahead of market trends.</p>

<div className="relative overflow-hidden bg-gradient-to-b from-white/5 via-white/5 to-transparent h-44 ring-white/5 ring-1 rounded-xl px-48 py-3 items-center justify-center">
<div className="relative w-[150px] h-[150px] rounded-full border border-[#333] shadow-[25px_25px_75px_rgba(0,0,0,0.55)] flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-5 before:rounded-full before:border before:border-dashed before:border-[#444] before:shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)] after:content-[''] after:absolute after:w-[50px] after:h-[50px] after:rounded-full after:border after:border-dashed after:border-[#444] after:shadow-[inset_-5px_-5px_25px_rgba(0,0,0,0.25),inset_5px_5px_35px_rgba(0,0,0,0.25)]">
<span className="absolute top-1/2 left-1/2 origin-top-left border-dashed animate-[radar81_4s_linear_infinite] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-fuchsia-500/50 before:to-fuchsia-500/0 before:origin-top-left before:rotate-[-55deg] before:blur-xl bg-transparent w-1/2 h-full border-white border-t"></span>
</div>
<style>
          @keyframes radar81 {
            0% {
              transform: rotate(0deg);
            }
        
            100% {
              transform: rotate(360deg);
            }
          }
        </style>

<div className="absolute top-4 left-4">
<span className="inline-flex items-center ring-1 ring-white/10 text-xs font-medium text-neutral-200 bg-[#ffffff]/10 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">consult</span>
</div>
<div className="absolute top-3 right-4">
<span className="inline-flex items-center text-xs font-medium text-neutral-200 bg-[#ffffff]/10 ring-white/10 ring-1 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">How to check balance?</span>
</div>
<div className="absolute left-3 top-1/2 -translate-y-1/2">
<span className="inline-flex items-center text-xs font-medium text-neutral-200 bg-[#ffffff]/10 ring-white/10 ring-1 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">Summarize last week</span>
</div>
<div className="absolute right-3 top-1/2 -translate-y-1/2">
<span className="inline-flex items-center text-xs font-medium text-neutral-200 bg-[#ffffff]/10 ring-white/10 ring-1 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">report</span>
</div>
<div className="absolute bottom-4 left-4">
<span className="inline-flex items-center text-xs font-medium text-neutral-200 bg-[#ffffff]/10 ring-white/10 ring-1 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">invest</span>
</div>
<div className="absolute bottom-3 right-4">
<span className="inline-flex items-center text-xs font-medium text-neutral-200 bg-[#ffffff]/10 ring-white/10 ring-1 rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">Generate report</span>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 ring-1 ring-white/5 bg-gradient-to-br from-neutral-900/80 to-neutral-950/90 transition-all duration-500 hover:border-cyan-500/30 hover:ring-cyan-500/20">
<div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-gradient-to-tr from-violet-500/25 via-cyan-500/15 to-fuchsia-500/20 blur-3xl transition-all duration-700 group-hover:scale-110"></div>
<div className="absolute -top-6 -left-6 bg-gradient-to-br from-cyan-500/20 via-violet-500/15 to-transparent w-36 h-36 rounded-full blur-2xl"></div>
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#ffffff] bg-[#ffffff]/0 ring-[#ffffff]/20 ring-1 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5 grayscale-0">
<svg className="w-[10px] h-[10px]" data-icon-replaced="true" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '10px', height: '10px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
          49% faster
        </span>
</div>
<h3 className="text-lg font-semibold text-neutral-100 tracking-tight mb-2">Instant access to all markets</h3>
<p className="leading-relaxed text-sm text-neutral-400 mb-6">Access real‑time data across crypto and stock markets instantly, without switching platforms. Stream live prices and execute trades seamlessly.</p>

<div className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl bg-zinc-900/50 border-white/10 border rounded-xl backdrop-blur-sm">
<div className="sm:p-5 pt-4 pr-4 pb-4 pl-4 space-y-4">

<div className="relative rounded-xl ring-1 ring-inset ring-white/5 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 overflow-hidden">

<div className="flex items-center justify-between px-3 py-2 border-b border-white/10 bg-neutral-900/80">
<div className="flex items-center gap-1.5 text-neutral-300">
<button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
<svg className="lucide lucide-chevron-left h-3.5 w-3.5" data-lucide="chevron-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
<svg className="lucide lucide-chevron-right h-3.5 w-3.5" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="flex-1 px-3">
<div className="mx-auto max-w-xs sm:max-w-sm rounded-md bg-neutral-800/60 px-3 py-1 text-center text-[10px] sm:text-xs text-neutral-400 ring-1 ring-white/5">automation.py</div>
</div>
<div className="flex items-center gap-1.5 text-neutral-400">
<button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
<svg className="lucide lucide-minus h-3.5 w-3.5" data-lucide="minus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
<svg className="lucide lucide-square h-3.5 w-3.5" data-lucide="square" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
</button>
<button className="inline-flex h-6 w-6 items-center justify-center rounded hover:bg-white/5">
<svg className="lucide lucide-x h-3.5 w-3.5" data-lucide="x" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-[42px_1fr]">

<aside className="hidden sm:flex flex-col items-center gap-3 py-4 border-r border-white/10">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-neutral-300">
<svg className="lucide lucide-file-code-2 h-4 w-4" data-lucide="file-code-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m5 12-3 3 3 3"></path><path d="m9 18 3-3-3-3"></path></svg>
</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-neutral-300">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</span>
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 text-neutral-300">
<svg className="lucide lucide-settings h-4 w-4" data-lucide="settings" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</span>
</aside>

<div className="p-4 sm:p-5">
<div className="relative ring-inset sm:p-4 overflow-hidden bg-black/40 ring-white/10 ring-1 rounded-lg pt-3 pr-3 pb-3 pl-3" style={{height: '320px'}}>
<div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10"></div>

<div className="overflow-hidden h-full relative">
<div className="font-geist-mono text-[12px] sm:text-[13px] leading-relaxed" style={{animation: 'smoothCodeScroll 20s linear infinite'}}>

<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">1</span>
<span><span className="text-purple-400">class</span> <span className="text-neutral-200">Automation</span>:</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">2</span>
<span className="whitespace-pre"><span className="text-purple-400">    def</span> <span className="text-purple-400">__init__</span>(self):</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">3</span>
<span className="whitespace-pre">        self.status = <span className="text-emerald-400">"idle"</span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">4</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">5</span>
<span className="whitespace-pre"><span className="text-purple-400">    def</span> <span className="text-purple-400">run</span>(self, event):</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">6</span>
<span className="whitespace-pre"> <span className="text-purple-400">if</span> event == <span className="text-emerald-400">"threshold_reached"</span>:</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">7</span>
<span className="whitespace-pre">            self.status = <span className="text-emerald-400">"active"</span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">8</span>
<span className="whitespace-pre"> <span className="text-purple-400">return</span> <span className="text-emerald-400">"Automation triggered!"</span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">9</span>
<span className="whitespace-pre"> <span className="text-purple-400">else</span>:</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">10</span>
<span className="whitespace-pre"> <span className="text-purple-400">return</span> <span className="text-emerald-400">"No action taken."</span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">11</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">12</span>
<span className="whitespace-pre"><span className="text-purple-400">    def</span> <span className="text-purple-400">get_status</span>(self):</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">13</span>
<span className="whitespace-pre"> <span className="text-purple-400">return</span> f<span className="text-emerald-400">"Status: {self.status}"</span></span>
</div>

<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">14</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">15</span>
<span className="whitespace-pre"><span className="text-purple-400">    def</span> <span className="text-purple-400">execute_trade</span>(self, symbol, amount):</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">16</span>
<span className="whitespace-pre"> <span className="text-purple-400">try</span>:</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">17</span>
<span className="whitespace-pre">            result = self.api.place_order(symbol, amount)</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">18</span>
<span className="whitespace-pre"> <span className="text-purple-400">return</span> result</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">19</span>
<span className="whitespace-pre"> <span className="text-purple-400">except</span> Exception <span className="text-purple-400">as</span> e:</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">20</span>
<span className="whitespace-pre">            print(f<span className="text-emerald-400">"Error: {e}"</span>)</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">21</span>
<span className="whitespace-pre"> <span className="text-purple-400">return</span> <span className="text-emerald-400">None</span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">22</span>
<span></span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">23</span>
<span className="whitespace-pre"><span className="text-purple-400">    def</span> <span className="text-purple-400">analyze_market</span>(self):</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">24</span>
<span className="whitespace-pre">        data = self.fetch_market_data()</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">25</span>
<span className="whitespace-pre">        signals = self.process_indicators(data)</span>
</div>
<div className="flex gap-4">
<span className="w-6 text-right text-neutral-500 select-none">26</span>
<span className="whitespace-pre"> <span className="text-purple-400">return</span> signals</span>
</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/5 to-transparent pointer-events-none z-10"></div>
<style>
              @keyframes smoothCodeScroll {
                0% {
                  transform: translateY(0);
                }
                100% {
                  transform: translateY(-50%);
                }
              }
              
              /* Pause animation on hover */
              .relative:hover [style*="smoothCodeScroll"] {
                animation-play-state: paused;
              }
            </style>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="group relative overflow-hidden transition-all duration-500 hover:border-emerald-500/30 hover:ring-emerald-500/20 bg-gradient-to-br from-neutral-900/80 to-neutral-950/90 max-h-fit border-white/10 border ring-white/5 ring-1 rounded-2xl">

<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex mb-4 items-start justify-between">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#ffffff] bg-[#ffffff]/0 ring-[#ffffff]/20 ring-1 rounded-lg pt-1 pr-2.5 pb-1 pl-2.5 grayscale-0">
<svg className="text-violet-400" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<circle cx="12" cy="12" r="4"></circle>
</svg>
          Real-time
        </span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-neutral-100 mb-2">Data that drives decisions</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Analyse your investments from every angle. Dive into performance and returns, and easily filter your data using advanced analytics and machine learning insights.</p>
<div className="relative overflow-visi overflow-visible bg-black/40 max-h-fit border-white/10 border rounded-2xl pt-4 pr-4 pb-8 pl-4">
<div className="absolute inset-0 pointer-events-none" style="background:
      radial-gradient(220px 140px at 0% 100%, rgba(139,92,246,0.20), transparent 60%),
      radial-gradient(240px 160px at 100% 0%, rgba(232,121,249,0.10), transparent 70%),
      linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.00))"></div>
<h3 className="text-lg tracking-tight font-semibold mb-2">Crypto Data Solutions</h3>
<p className="text-sm text-gray-300 mb-4">Your on‑chain guide to making informed crypto decisions.</p>
<div className="relative rounded-xl bg-neutral-900/60 border border-white/10 ring-1 ring-white/5 overflow-hidden p-4 sm:p-6">

<div className="absolute inset-y-0 left-28 right-28 sm:left-36 sm:right-36 z-0 flex flex-col items-stretch justify-center gap-2 pointer-events-none">
<div className="h-px bg-gradient-to-r from-transparent via-violet-400/80 to-transparent"></div>
<div className="h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"></div>
<div className="h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent"></div>
</div>

<div className="relative z-10 flex items-center justify-between">

<div className="flex flex-col items-center gap-2">
<div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border border-white/10 bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur-sm overflow-hidden">
<div className="absolute -left-4 top-2 w-20 h-20 rounded-full bg-gradient-to-tr from-violet-500/70 to-fuchsia-500/40 blur-2xl"></div>
<div className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-tr from-fuchsia-400/70 to-violet-500/30 blur-xl"></div>
<div className="absolute right-3 bottom-3 w-8 h-8 rounded-full bg-gradient-to-tr from-violet-300/60 to-transparent blur-lg"></div>
<div className="absolute inset-0 ring-white/5 ring-1 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/11dcbbda-ccca-43b6-9524-e205dbeae5f7_320w.jpg)] bg-cover rounded-xl"></div>
</div>
<span className="text-xs text-neutral-300">Our solution</span>
</div>

<div className="absolute inset-y-0 left-28 right-28 sm:left-36 sm:right-36 z-0 flex flex-col items-stretch justify-center gap-2 pointer-events-none">
<div className="h-px bg-gradient-to-r from-transparent via-violet-400/80 to-transparent relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 h-full animate-pulse" style={{animation: 'flowLeft 2s ease-in-out infinite', transform: 'translateX(-100%)'}}></div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 h-full" style={{animation: 'flowLeft 2s ease-in-out infinite 0.3s', transform: 'translateX(-100%)'}}></div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-fuchsia-400 h-full" style={{animation: 'flowLeft 2s ease-in-out infinite 0.6s', transform: 'translateX(-100%)'}}></div>
</div>
</div>

<div className="flex flex-col items-center gap-2">
<div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl border border-white/10 bg-neutral-900/70 ring-1 ring-white/10 backdrop-blur-sm overflow-hidden">

<div className="absolute right-4 top-4 w-8 h-6 bg-gradient-to-br from-violet-400 to-fuchsia-500" style={{clipPath: 'polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%)'}}></div>
<div className="absolute left-4 bottom-5 w-12 h-7 bg-gradient-to-br from-fuchsia-500 to-violet-500" style={{clipPath: 'polygon(0% 0%, 100% 0%, 85% 100%, 0% 100%)'}}></div>
<div className="absolute inset-0 ring-white/5 ring-1 bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3133e077-6514-4fb3-8f8f-36301b5d2934_320w.jpg)] bg-cover rounded-xl"></div>
</div>
<span className="text-xs text-neutral-300">Your stack</span>
</div>
<style>
    @keyframes flowLeft {
      0% {
        transform: translateX(-100%);
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  </style>
</div>
</div>

<div className="mt-3 flex items-center gap-2">
<span className="inline-flex items-center gap-1.5 text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
<svg className="w-3 h-3 text-emerald-300" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path>
</svg>
      See Growth
    </span>
<span className="text-[10px] px-2 py-0.5 rounded bg-black/40 border border-white/10 text-gray-300">On‑chain metrics</span>
<span className="text-[10px] px-2 py-0.5 rounded bg-black/40 border border-white/10 text-gray-300">Last 24h</span>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent"></div>
</div>
</div>
</div>
</div>
</section><section className="relative">
<div className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-16 pl-6">

<div className="text-center mb-14">
<h2 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold tracking-tight">
<span className="text-neutral-200">Powerful features built for</span>
<span className="block text-neutral-100">crypto confidence</span>
</h2>
<p className="sm:text-lg leading-relaxed text-base text-neutral-400 max-w-3xl mt-4 mr-auto ml-auto">Streamline your experience with tools designed to keep you secure, informed, and in control every step of the way.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

<div className="rounded-2xl border border-white/5 bg-neutral-900/40 p-6 sm:p-7 transition hover:bg-white/5">
<div className="flex items-start gap-4">
<div className="inline-flex bg-neutral-800/60 w-10 h-10 ring-white/10 ring-1 rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-send h-5 w-5 text-neutral-300" data-lucide="send" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<div className="">
<h3 className="text-base sm:text-lg font-semibold text-neutral-100 tracking-tight">Instant transfers</h3>
<p className="mt-2 text-sm text-neutral-400">Send and receive crypto in seconds, without delays or bottlenecks.</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/5 bg-neutral-900/40 p-6 sm:p-7 transition hover:bg-white/5">
<div className="flex items-start gap-4">
<div className="inline-flex bg-neutral-800/60 w-10 h-10 ring-white/10 ring-1 rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-line-chart h-5 w-5 text-neutral-300" data-lucide="line-chart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div className="">
<h3 className="text-base sm:text-lg font-semibold text-neutral-100 tracking-tight">Risk analysis</h3>
<p className="mt-2 text-sm text-neutral-400">Stay ahead of the market with smart insights into potential risks.</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/5 bg-neutral-900/40 p-6 sm:p-7 transition hover:bg-white/5">
<div className="flex items-start gap-4">
<div className="inline-flex bg-neutral-800/60 w-10 h-10 ring-white/10 ring-1 rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-bell h-5 w-5 text-neutral-300" data-lucide="bell" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<div className="">
<h3 className="text-base sm:text-lg font-semibold text-neutral-100 tracking-tight">Real–time alerts</h3>
<p className="mt-2 text-sm text-neutral-400">Get notified instantly about price moves, trends, and key events.</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/5 bg-neutral-900/40 p-6 sm:p-7 transition hover:bg-white/5">
<div className="flex items-start gap-4">
<div className="inline-flex bg-neutral-800/60 w-10 h-10 ring-white/10 ring-1 rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-receipt-text h-5 w-5 text-neutral-300" data-lucide="receipt-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M14 8H8"></path><path d="M16 12H8"></path><path d="M13 16H8"></path></svg>
</div>
<div className="">
<h3 className="text-base sm:text-lg font-semibold text-neutral-100 tracking-tight">Tax Optimization</h3>
<p className="mt-2 text-sm text-neutral-400">Automate reports and minimise your tax burden with built‑in tools.</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/5 bg-neutral-900/40 p-6 sm:p-7 transition hover:bg-white/5">
<div className="flex items-start gap-4">
<div className="inline-flex bg-neutral-800/60 w-10 h-10 ring-white/10 ring-1 rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-gauge h-5 w-5 text-neutral-300" data-lucide="gauge" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<div className="">
<h3 className="text-base sm:text-lg font-semibold text-neutral-100 tracking-tight">Autopilot mode</h3>
<p className="mt-2 text-sm text-neutral-400">Let smart algorithms manage your assets while you stay hands‑off.</p>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/5 bg-neutral-900/40 p-6 sm:p-7 transition hover:bg-white/5">
<div className="flex items-start gap-4">
<div className="inline-flex bg-neutral-800/60 w-10 h-10 ring-white/10 ring-1 rounded-xl pr-3 pl-3 items-center justify-center">
<svg className="lucide lucide-shield h-5 w-5 text-neutral-300" data-lucide="shield" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="">
<h3 className="text-base sm:text-lg font-semibold text-neutral-100 tracking-tight">Maximum security</h3>
<p className="mt-2 text-sm text-neutral-400">Protect your funds with top‑tier encryption and multi‑layer defences.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-24 py-24 items-center">
<div className="">
<h3 className="" classtext-4xl="" font-semibold="" sm:text-5xl="" text-neutral-300"="" tracking-tight="">
<span className="block">Stay on &lt; className="text-neutral-100"&gt;top of market</span>
<span className="block text-neutral-100">moves in <span className="text-neutral-100">real time</span></span>
</h3>
<p className="mt-4 max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed">
      Track live price changes, market shifts, and key events as they happen. Never miss an opportunity or a critical update again.
    </p>
<div className="mt-6">
<a className="flex justify-center gap-2 items-center lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 overflow-hidden group text-lg text-neutral-900 bg-gray-50 max-w-fit border-gray-50 border-2 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-xl backdrop-blur-md" href="#">
  Start investing
  <svg className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45" viewbox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
<path className="fill-gray-800 group-hover:fill-gray-800" d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"></path>
</svg>
</a>
</div>
</div>

<div className="rounded-3xl border border-white/5 bg-neutral-900/50 p-5 sm:p-6 relative overflow-hidden">
<div className="flex items-center justify-between mb-4">
<div className="text-sm font-medium text-neutral-300">Watchlist</div>
<div className="inline-flex items-center gap-2 text-xs text-neutral-400">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span> Live
      </div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="relative h-80 sm:h-96 overflow-y-scroll pr-1" data-_init="1" data-dir="down" data-speed="1.2" data-vert-marquee="" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<ul className="space-y-3" data-track="" style={{animation: 'scrollDown 20s linear infinite'}}>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-shield h-4 w-4 text-neutral-300" data-lucide="shield" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-neutral-200">NEM</div>
<div className="text-[10px] text-neutral-500">$0.0193</div>
</div>
</div>
<div className="flex items-center gap-3">

<svg aria-hidden="true" className="opacity-90 w-[72px] h-[22px]" data-icon-replaced="true" height="22" strokeWidth="2" style={{width: '72px', height: '22px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 72 22" width="72">
<path className="" d="M1 16 L10 10 L18 12 L26 7 L33 9 L41 6 L49 9 L57 5 L66 8" fill="none" stroke="rgb(244,63,94)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.0193</div>
<div className="text-xs text-neutral-500">24.80%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-share-2 h-4 w-4 text-neutral-300" data-lucide="share-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</span>
<div className="">
<div className="text-sm font-medium text-neutral-200">XRP</div>
<div className="text-[10px] text-neutral-500">$2.14</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path className="" d="M1 14 L8 15 L16 12 L22 14 L30 9 L38 12 L46 8 L54 11 L63 6 L71 9" fill="none" stroke="rgb(16,185,129)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$2.14</div>
<div className="text-xs text-neutral-500">13.45%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-equal h-4 w-4 text-neutral-300" data-lucide="equal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="9" y2="9"></line><line x1="5" x2="19" y1="15" y2="15"></line></svg>
</span>
<div className="">
<div className="text-sm font-medium text-neutral-200">EDR</div>
<div className="text-[10px] text-neutral-500">$0.0049</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90 w-[72px] h-[22px]" data-icon-replaced="true" height="22" strokeWidth="2" style={{width: '72px', height: '22px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 72 22" width="72">
<path className="" d="M1 8 L10 11 L18 10 L26 12 L34 9 L42 11 L50 8 L58 10 L66 6" fill="none" stroke="rgb(244,63,94)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.0049</div>
<div className="text-xs text-neutral-500">4.80%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-link-2 h-4 w-4 text-neutral-300" data-lucide="link-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
<div>
<div className="text-sm font-medium text-neutral-200">VIN</div>
<div className="text-[10px] text-neutral-500">$0.026889</div>
</div>
</div>
<div className="flex gap-3 items-center">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 16 L8 14 L16 12 L24 13 L32 10 L40 12 L48 9 L56 11 L64 8" fill="none" stroke="rgb(16,185,129)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.026889</div>
<div className="text-xs text-neutral-500">4.75%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-droplets h-4 w-4 text-neutral-300" data-lucide="droplets" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-neutral-200">ETH</div>
<div className="text-[10px] text-neutral-500">$1,829.04</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 18 L9 12 L17 14 L25 10 L33 9 L41 11 L49 8 L57 9 L65 7" fill="none" stroke="rgb(16,185,129)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$1,829.04</div>
<div className="text-xs text-neutral-500">2.55%</div>
</div>
</div>
</li>


<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-shield h-4 w-4 text-neutral-300" data-lucide="shield" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</span>
<div>
<div className="text-sm font-medium text-neutral-200">NEM</div>
<div className="text-[10px] text-neutral-500">$0.0193</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 16 L10 10 L18 12 L26 7 L33 9 L41 6 L49 9 L57 5 L66 8" fill="none" stroke="rgb(244,63,94)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.0193</div>
<div className="text-xs text-rose-400">24.80%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-share-2 h-4 w-4 text-neutral-300" data-lucide="share-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</span>
<div>
<div className="text-sm font-medium text-neutral-200">XRP</div>
<div className="text-[10px] text-neutral-500">$2.14</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 14 L8 15 L16 12 L22 14 L30 9 L38 12 L46 8 L54 11 L63 6 L71 9" fill="none" stroke="rgb(16,185,129)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$2.14</div>
<div className="text-xs text-emerald-300">13.45%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-equal h-4 w-4 text-neutral-300" data-lucide="equal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="9" y2="9"></line><line x1="5" x2="19" y1="15" y2="15"></line></svg>
</span>
<div>
<div className="text-sm font-medium text-neutral-200">EDR</div>
<div className="text-[10px] text-neutral-500">$0.0049</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 8 L10 11 L18 10 L26 12 L34 9 L42 11 L50 8 L58 10 L66 6" fill="none" stroke="rgb(244,63,94)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.0049</div>
<div className="text-xs text-rose-400">4.80%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-link-2 h-4 w-4 text-neutral-300" data-lucide="link-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</span>
<div>
<div className="text-sm font-medium text-neutral-200">VIN</div>
<div className="text-[10px] text-neutral-500">$0.026889</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 16 L8 14 L16 12 L24 13 L32 10 L40 12 L48 9 L56 11 L64 8" fill="none" stroke="rgb(16,185,129)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.026889</div>
<div className="text-xs text-emerald-300">4.75%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-droplets h-4 w-4 text-neutral-300" data-lucide="droplets" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</span>
<div>
<div className="text-sm font-medium text-neutral-200">ETH</div>
<div className="text-[10px] text-neutral-500">$1,829.04</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 18 L9 12 L17 14 L25 10 L33 9 L41 11 L49 8 L57 9 L65 7" fill="none" stroke="rgb(16,185,129)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$1,829.04</div>
<div className="text-xs text-emerald-300">2.55%</div>
</div>
</div>
</li>
</ul>
</div>

<div className="relative h-80 sm:h-96 overflow-y-scroll pl-1" data-_init="1" data-dir="up" data-speed="1.2" data-vert-marquee="" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<ul className="space-y-3" data-track="" style={{animation: 'scrollUp 20s linear infinite'}}>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-box h-4 w-4 text-neutral-300" data-lucide="box" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-neutral-200">BNB</div>
<div className="text-[10px] text-neutral-500">$604.76</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 17 L9 14 L16 12 L24 15 L31 10 L39 12 L47 9 L55 11 L63 7 L71 9" fill="none" stroke="rgb(16,185,129)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$604.76</div>
<div className="text-xs text-neutral-500">7.40%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-circle-dot h-4 w-4 text-neutral-300" data-lucide="circle-dot" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
</span>
<div className="">
<div className="text-sm font-medium text-neutral-200">GXS</div>
<div className="text-[10px] text-neutral-500">$0.55</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 6 L10 9 L18 8 L26 10 L34 9 L42 11 L50 8 L58 9 L66 7" fill="none" stroke="rgb(244,63,94)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.55</div>
<div className="text-xs text-neutral-500">8.20%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-pie-chart h-4 w-4 text-neutral-300" data-lucide="pie-chart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-neutral-200">PPC</div>
<div className="text-[10px] text-neutral-500">$0.2778</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path className="" d="M1 9 L9 8 L17 10 L25 7 L33 9 L41 7 L49 10 L57 6 L65 8" fill="none" stroke="rgb(244,63,94)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.2778</div>
<div className="text-xs text-neutral-500">27.35%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-flame h-4 w-4 text-neutral-300" data-lucide="flame" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-neutral-200">HOT</div>
<div className="text-[10px] text-neutral-500">$0.009484</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 7 L8 10 L16 9 L24 11 L32 8 L40 10 L48 7 L56 9 L64 6" fill="none" stroke="rgb(244,63,94)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.009484</div>
<div className="text-xs text-neutral-500">7.25%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-activity h-4 w-4 text-neutral-300" data-lucide="activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-neutral-200">PHR</div>
<div className="text-[10px] text-neutral-500">$0.057030</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path className="" d="M1 15 L8 13 L16 12 L24 14 L32 11 L40 12 L48 10 L56 12 L64 9" fill="none" stroke="rgb(16,185,129)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.057030</div>
<div className="text-xs text-neutral-500">2.55%</div>
</div>
</div>
</li>


<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-box h-4 w-4 text-neutral-300" data-lucide="box" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
</span>
<div>
<div className="text-sm font-medium text-neutral-200">BNB</div>
<div className="text-[10px] text-neutral-500">$604.76</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 17 L9 14 L16 12 L24 15 L31 10 L39 12 L47 9 L55 11 L63 7 L71 9" fill="none" stroke="rgb(16,185,129)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$604.76</div>
<div className="text-xs text-emerald-300">7.40%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-circle-dot h-4 w-4 text-neutral-300" data-lucide="circle-dot" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="1"></circle></svg>
</span>
<div>
<div className="text-sm font-medium text-neutral-200">GXS</div>
<div className="text-[10px] text-neutral-500">$0.55</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 6 L10 9 L18 8 L26 10 L34 9 L42 11 L50 8 L58 9 L66 7" fill="none" stroke="rgb(244,63,94)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.55</div>
<div className="text-xs text-rose-400">8.20%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-pie-chart h-4 w-4 text-neutral-300" data-lucide="pie-chart" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</span>
<div>
<div className="text-sm font-medium text-neutral-200">PPC</div>
<div className="text-[10px] text-neutral-500">$0.2778</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 9 L9 8 L17 10 L25 7 L33 9 L41 7 L49 10 L57 6 L65 8" fill="none" stroke="rgb(244,63,94)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.2778</div>
<div className="text-xs text-rose-400">27.35%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-flame h-4 w-4 text-neutral-300" data-lucide="flame" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-neutral-200">HOT</div>
<div className="text-[10px] text-neutral-500">$0.009484</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 7 L8 10 L16 9 L24 11 L32 8 L40 10 L48 7 L56 9 L64 6" fill="none" stroke="rgb(244,63,94)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.009484</div>
<div className="text-xs text-rose-400">7.25%</div>
</div>
</div>
</li>

<li className="rounded-2xl border border-white/5 bg-neutral-900/60 ring-1 ring-white/5 px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-neutral-800/60 ring-1 ring-white/10">
<svg className="lucide lucide-activity h-4 w-4 text-neutral-300" data-lucide="activity" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</span>
<div className="">
<div className="text-sm font-medium text-neutral-200">PHR</div>
<div className="text-[10px] text-neutral-500">$0.057030</div>
</div>
</div>
<div className="flex items-center gap-3">
<svg className="opacity-90" height="22" viewbox="0 0 72 22" width="72">
<path d="M1 15 L8 13 L16 12 L24 14 L32 11 L40 12 L48 10 L56 12 L64 9" fill="none" stroke="rgb(16,185,129)" strokeWidth="2"></path>
</svg>
<div className="text-right">
<div className="text-sm text-neutral-300">$0.057030</div>
<div className="text-xs text-emerald-300">2.55%</div>
</div>
</div>
</li>
</ul>
</div>

<style>
        @keyframes scrollDown {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }
      </style>
</div>

<div className="pointer-events-none absolute inset-x-3 top-12 h-10 bg-gradient-to-b from-neutral-900/80 to-transparent"></div>
<div className="pointer-events-none absolute inset-x-3 bottom-3 h-10 bg-gradient-to-t from-neutral-900/80 to-transparent"></div>
</div>

</div>
</div>
</section><section className="relative">

<div className="pointer-events-none absolute inset-0">

</div>
<div className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-16 pl-6" id="aura-emfr8yji1">

<div className="text-center mb-14">
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-100 leading-[1.1]"></h2><h2 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold tracking-tight">
<span className="text-neutral-200">Simple Steps to</span>
<span className="block text-neutral-100">crypto confidence</span>
</h2>
<p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed">
      Get started in minutes and take full control of your digital assets. From signup to secure trading, everything is built for speed and clarity.
    </p>
</div>

<div className="relative mt-24 mb-24 items-center justify-center">

<div className="absolute left-0 right-0 top-10 h-0.5 border-t border-dashed border-violet-500/30 overflow-hidden">
<div className="absolute inset-0 h-full bg-gradient-to-r from-transparent via-violet-400 via-fuchsia-400 to-transparent animate-pulse" style={{width: '200px', animation: 'connectionFlow 3s linear infinite'}}></div>
</div>
<div className="relative max-w-5xl mt-14 mr-auto ml-auto pr-6 pl-6 space-y-20">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

<div className="flex flex-col items-center text-center">
<div className="h-20 w-full relative flex items-center justify-center">
<span className="inline-flex items-center justify-center font-semibold text-white bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-fuchsia-300/0 to-violet-800 w-12 h-12 ring-neutral-50/30 ring-8 rounded-full shadow-lg backdrop-blur-md" id="aura-emfr8ygkm">1</span>
</div>
<p className="leading-relaxed text-sm text-neutral-200 max-w-xs mt-3">Create your account in seconds</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="relative flex w-full h-20 items-center justify-center">
<span className="inline-flex items-center justify-center font-semibold text-white bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-fuchsia-300/0 to-violet-800 w-12 h-12 ring-neutral-50/30 ring-8 rounded-full shadow-lg backdrop-blur-md" id="aura-emfr8ykci">2</span>
</div>
<p className="leading-relaxed text-sm text-neutral-200 max-w-xs mt-3">Complete identity verification process</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="h-20 w-full relative flex items-center justify-center">
<span className="inline-flex items-center justify-center font-semibold text-white bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-fuchsia-300/0 to-violet-800 w-12 h-12 ring-neutral-50/30 ring-8 rounded-full shadow-lg backdrop-blur-md" id="aura-emfr8yne7">3</span>
</div>
<p className="mt-3 max-w-xs text-sm text-neutral-200 leading-relaxed">
          Fund your wallet with preferred methods
        </p>
</div>

<div className="flex flex-col items-center text-center">
<div className="h-20 w-full relative flex items-center justify-center">
<span className="inline-flex items-center justify-center font-semibold text-white bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-fuchsia-300/0 to-violet-800 w-12 h-12 ring-neutral-50/30 ring-8 rounded-full shadow-lg backdrop-blur-md" id="aura-emfr8yqf7">4</span>
</div>
<p className="mt-3 max-w-xs text-sm text-neutral-200 leading-relaxed">
          Start trading instantly withreal‑time tools
        </p>
</div>
</div>

<div className="mt-10 flex justify-center">
<a className="flex justify-center gap-2 items-center lg:font-semibold isolation-auto before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 overflow-hidden group text-lg text-neutral-900 bg-gray-50 max-w-fit border-gray-50 border-2 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-xl backdrop-blur-md" href="#">Create Account<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></a>
</div>
</div>
<style>
    @keyframes connectionFlow {
      0% {
        transform: translateX(-200px);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateX(calc(100vw + 200px));
        opacity: 0;
      }
    }
  </style>
</div>
</div></section>
<section className="relative">

<div className="pointer-events-none absolute inset-0">
</div>
<div className="max-w-max mr-auto ml-auto pt-16 pr-24 pb-16 pl-24">

<div className="relative overflow-visible bg-neutral-900/50 border-white/10 border ring-white/5 ring-1 rounded-3xl" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '18px 18px', backgroundPosition: '-9px -9px'}}>

<div className="hidden lg:block absolute inset-y-0 left-1/2 w-px bg-white/10"></div>
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="relative sm:p-12 flex pt-10 pr-10 pb-10 pl-30 items-center justify-center">
<div className="relative sm:h-96 w-full h-400 max-w-7xl max-h-full">
<div className="container max-w-full" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>

<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255,255,255,0.1), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 25px 25px rgba(0, 0, 0, 0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.5s', borderRadius: '1rem', margin: '0 -50px', backdropFilter: 'blur(10px)', transform: 'rotate(-10deg)', -R: '-32'}}>
<div className="absolute inset-4 rounded-xl bg-white text-neutral-900 shadow-2xl ring-1 ring-black/5 overflow-hidden">
<div className="p-6">

<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-black/5 mb-4">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4">
              "Working with Jeremi was a game‑changer. He translated our vision into a polished product and delivered beyond expectations — fast, reliable, and detail‑obsessed."
            </p>

<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Jordan Avery avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b868b942-246c-46ca-812c-31b49fd61a16_3840w.jpg"/>
<div>
<div className="text-xs font-medium text-neutral-900">Jordan Avery</div>
<div className="text-xs text-neutral-500">Head of Product, Acme Co.</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255,255,255,0.08), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 25px 25px rgba(0, 0, 0, 0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.5s', borderRadius: '1rem', margin: '0 -50px', backdropFilter: 'blur(10px)', transform: 'rotate(-6deg)', -R: '-6'}}>
<div className="absolute inset-4 rounded-xl bg-white/90 text-neutral-900 shadow-xl ring-1 ring-black/5 backdrop-blur overflow-hidden">
<div className="p-6">

<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-black/5 mb-4">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4">
              "The platform's AI‑powered insights have completely transformed how I approach trading. The real‑time analytics and seamless interface make complex decisions feel effortless."
            </p>

<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Sarah Chen avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/149e33ce-f3dc-40ee-b985-cb0735411ff5_3840w.jpg"/>
<div className="">
<div className="text-xs font-medium text-neutral-900">Sarah Chen</div>
<div className="text-xs text-neutral-500">Senior Trader, FinTech Labs</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255,255,255,0.06), transparent)', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 25px 25px rgba(0, 0, 0, 0.25)', display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '0.5s', borderRadius: '1rem', margin: '0 -50px', backdropFilter: 'blur(10px)', transform: 'rotate(0deg)', -R: '0'}}>
<div className="absolute inset-4 rounded-xl bg-white/80 text-neutral-900 shadow-lg ring-1 ring-black/5 backdrop-blur overflow-hidden">
<div className="p-6">

<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-neutral-100 ring-1 ring-black/5 mb-4">
<svg className="h-4 w-4 text-neutral-700" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<p className="text-sm leading-relaxed text-neutral-900 mb-4">
              "Security was my biggest concern when choosing a crypto platform. Nebula's multi‑layer protection and transparent approach gave me the confidence to invest significantly."
            </p>

<div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Marcus Rodriguez avatar" className="h-6 w-6 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/890b16bf-eac1-46aa-b8b5-b74ae7a0d51a_3840w.jpg"/>
<div className="">
<div className="text-xs font-medium text-neutral-900">Marcus Rodriguez</div>
<div className="text-xs text-neutral-500">Portfolio Manager, InvestCorp</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="text-amber-400" fill="currentColor" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
</div>
</div>
</div>
<style>
        .container:hover .glass {
          transform: rotate(0deg) !important;
          margin: 0 -30px !important;
        }
      </style>
</div>
</div>
</div>

<div className="sm:p-12 lg:p-14 flex flex-col pt-10 pr-10 pb-10 pl-10 justify-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100 leading-[1.1]">Trusted by Industry Leaders</h2>
<p className="mt-6 max-w-xl text-base sm:text-lg text-neutral-400 leading-relaxed">
            Join 50+ satisfied clients who've transformed their digital presence with exceptional design and development.
          </p>
<div className="mt-10">
<a className="group inline-flex items-center gap-3 hover:bg-white/10 transition text-sm font-semibold text-white bg-white/5 ring-white/10 ring-1 rounded-full pt-2.5 pr-4 pb-2.5 pl-4 backdrop-blur-lg" href="#waitlist">View all reviews<span className="inline-flex items-center justify-center group-hover:translate-x-0.5 transition text-neutral-900 bg-[#ffffff] w-7 h-7 rounded-full">
<svg className="lucide lucide-arrow-up-right w-[24px] h-[16px]" data-icon-replaced="true" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '16px', color: 'rgb(23, 23, 23)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</span></a>
</div>
</div>
</div>
</div>
</div>
</section><section className="relative">

<div className="pointer-events-none absolute inset-0">
<div className="hidden sm:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>
</div>
<div className="max-w-7xl mx-auto pt-24 pb-16 px-6">

<div className="text-center mb-14">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">Simple and transparent pricing</h2>
<p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed">Choose the plan that fits your investments.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">

<div className="pricing-card group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 ring-1 ring-white/5 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:ring-white-500/20 hover:bg-white/5" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px', backgroundPosition: '-9px -9px'}}>
<div className="flex flex-col relative z-10 h-full max-h-full">
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-neutral-100">Free</h3>
<p className="mt-2 text-sm text-neutral-400">Start your crypto journey at no cost. Access essential tools — all in one place.</p>
<div className="mt-6">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">$0</div>
<div className="mt-2 text-sm text-neutral-400">Free forever / no hidden fees</div>
</div>
<div className="mt-8 mb-6 h-px bg-white/10"></div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">Dedicated dashboard</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Real‑time charts</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span>Basic portfolio tracker</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">Wallet integration</span>
</li><li className="flex items-center gap-3 text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">Wallet integration</span>
</li>
</ul>
</div>
<div className="mt-8">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium shadow-lg ring-1 ring-white/10 transition hover:brightness-110" href="#">
          Start for free
          <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="pricing-card group relative overflow-hidden sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white-500/40 hover:ring-white-500/30 hover:bg-white/5 bg-neutral-50/0 border-white/10 border ring-white/5 ring-1 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/20 to-transparent blur-3xl"></div>
<div className="flex flex-col relative z-10 h-full">
<div className="flex items-start justify-between">
<h3 className="text-lg font-semibold tracking-tight text-neutral-100">Pro</h3>
<span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-neutral-200 ring-1 ring-white/10">
<svg className="lucide lucide-sparkles h-3.5 w-3.5 text-violet-300" data-lucide="sparkles" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
          Popular
        </span>
</div>
<p className="mt-2 text-sm text-neutral-300">Unlock full potential with advanced analytics, portfolio tracking, and priority support.</p>
<div className="mt-6">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight text-white" data-price-monthly="$19" data-price-yearly="$159">$19</div>
<div className="mt-2 text-sm text-neutral-300" data-billing-period="monthly">Per user / month</div>
</div>

<div className="mt-5 flex items-center gap-3">
<button aria-pressed="false" className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/10 ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/20 focus:outline-none" data-toggle-yearly="" onclick="toggleYearlyBilling(this)" type="button">
<span className="absolute left-0.5 inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow transition-transform duration-300"></span>
</button>
<span className="text-sm text-neutral-300">Yearly</span>
<span className="ml-2 inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-medium text-neutral-200 ring-1 ring-white/10">30% OFF</span>
</div>
<div className="mt-6 mb-6 h-px bg-white/10"></div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-neutral-100">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">AI‑powered dashboard</span>
</li>
<li className="flex items-center gap-3 text-neutral-100">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">Advanced analytics</span>
</li>
<li className="flex items-center gap-3 text-neutral-100">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">Pro portfolio tools</span>
</li>
<li className="flex items-center gap-3 text-neutral-100">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">Price alerts</span>
</li>
</ul>
<div className="mt-8">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-tr from-violet-500 to-fuchsia-500 text-white px-6 py-3 text-sm font-medium shadow-lg ring-1 ring-white/10 transition hover:brightness-110" href="#">
          Sign up with pro
          <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>

<div className="pricing-card group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 ring-1 ring-white/5 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:ring-violet-500/20 hover:bg-white/5" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '18px 18px', backgroundPosition: '-9px -9px'}}>
<div className="flex flex-col h-full relative z-10">
<div className="">
<h3 className="text-lg font-semibold tracking-tight text-neutral-100">Lifetime</h3>
<p className="mt-2 text-sm text-neutral-400">Pay once, use forever. All premium features, lifetime updates.</p>
<div className="mt-6">
<div className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">$249</div>
<div className="mt-2 text-sm text-neutral-400">Single payment / lifetime access</div>
</div>
<div className="mt-8 mb-6 h-px bg-white/10"></div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">All pro features</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">Exclusive lifetime updates</span>
</li><li className="flex items-center gap-3 text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">Exclusive lifetime updates</span>
</li>
<li className="flex items-center gap-3 text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">No recurring fees</span>
</li><li className="flex items-center gap-3 text-neutral-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<svg className="lucide lucide-check h-3.5 w-3.5 text-emerald-300" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</span>
<span className="">No recurring fees</span>
</li>
</ul>
</div>
<div className="mt-8">
<a className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 text-sm font-medium shadow-lg ring-1 ring-white/10 transition hover:brightness-110" href="#">
          Get lifetime access
          <svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</div>

</div>
</div>
<style>
    .pricing-card {
      cursor: none;
    }

    .cursor-glow {
      position: absolute;
      top: 0;
      left: 0;
      width: 200px;
      height: 200px;
      background: radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, rgba(236, 72, 153, 0.1) 30%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s ease;
      z-index: 1;
      transform: translate(-50%, -50%);
    }

    .pricing-card:hover .cursor-glow {
      opacity: 1;
    }
  </style>

</section><section className="relative">

<div className="pointer-events-none absolute inset-0">
<div className="hidden sm:block absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"></div>
</div>
<div className="max-w-4xl mr-auto ml-auto pt-24 pr-6 pb-16 pl-6">

<div className="text-center mb-12 sm:mb-16">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-100">Your Questions, Answered</h2>
<p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-neutral-400 leading-relaxed">Get instant answers to most common questions about Crypton.</p>
</div>

<div className="space-y-5">

<div className="ring-1 ring-white/5 overflow-hidden bg-gradient-to-b from-violet-500/15 via-violet-500/10 to-fuchsia-500/0 border-white/10 border rounded-3xl transition-all duration-300" data-acc-item="" data-open="true">
<button className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-start justify-between gap-6 hover:bg-white/5 transition-colors" data-acc-btn="" type="button">
<span className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-100">How do I create and verify my Crypton account?</span>
<span className="inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white h-8 w-8 shrink-0 transition-transform duration-200">

<div className="relative" data-acc-icon="">
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{opacity: '1', transform: 'rotate(0deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
<div className="flex items-center justify-center transition-all duration-300" style={{opacity: '0', transform: 'rotate(90deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</span>
</button>
<div className="transition-all duration-300 ease-in-out overflow-hidden" data-acc-panel="" style={{maxHeight: '102px', opacity: '1'}}>
<div className="sm:px-8 sm:pb-8 pt-0 pr-6 pb-6 pl-6">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Creating a Crypton account is easy—just sign up with your email and a secure password. After that, confirm your email address, and you're ready to start exploring the platform. No lengthy forms or complicated steps involved.</p>
</div>
</div>
</div>

<div className="rounded-3xl border border-white/10 ring-1 ring-white/5 overflow-hidden bg-neutral-900/40 hover:bg-white/5 transition-all duration-300" data-acc-item="" data-open="false">
<button className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-6 hover:bg-white/5 transition-colors" data-acc-btn="" type="button">
<span className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-100">How secure is Crypton with my digital assets?</span>
<span className="inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white h-8 w-8 shrink-0 transition-transform duration-200">
<div className="relative" data-acc-icon="">
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{opacity: '0', transform: 'rotate(90deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
<div className="flex items-center justify-center transition-all duration-300" style={{opacity: '1', transform: 'rotate(0deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</span>
</button>
<div className="transition-all duration-300 ease-in-out overflow-hidden" data-acc-panel="" style={{maxHeight: '0', opacity: '0'}}>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">We use industry‑standard encryption, multi‑sig cold storage, and routine security audits. Your funds and data are protected by multiple layers of defense.</p>
</div>
</div>
</div>

<div className="rounded-3xl border border-white/10 ring-1 ring-white/5 overflow-hidden bg-neutral-900/40 hover:bg-white/5 transition-all duration-300" data-acc-item="" data-open="false">
<button className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-6 hover:bg-white/5 transition-colors" data-acc-btn="" type="button">
<span className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-100">What cryptocurrencies can I trade on the platform?</span>
<span className="inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white h-8 w-8 shrink-0 transition-transform duration-200">
<div className="relative" data-acc-icon="">
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{opacity: '0', transform: 'rotate(90deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
<div className="flex items-center justify-center transition-all duration-300" style={{opacity: '1', transform: 'rotate(0deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</span>
</button>
<div className="transition-all duration-300 ease-in-out overflow-hidden" data-acc-panel="" style={{maxHeight: '0', opacity: '0'}}>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">Trade leading assets like BTC, ETH, SOL, and 100+ more pairs. We add new markets regularly based on demand and security reviews.</p>
</div>
</div>
</div>

<div className="rounded-3xl border border-white/10 ring-1 ring-white/5 overflow-hidden bg-neutral-900/40 hover:bg-white/5 transition-all duration-300" data-acc-item="" data-open="false">
<button className="w-full text-left px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between gap-6 hover:bg-white/5 transition-colors" data-acc-btn="" type="button">
<span className="text-lg sm:text-xl font-semibold tracking-tight text-neutral-100">What fees are associated with trading and transfers?</span>
<span className="inline-flex items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10 text-white h-8 w-8 shrink-0 transition-transform duration-200">
<div className="relative" data-acc-icon="">
<div className="absolute inset-0 flex items-center justify-center transition-all duration-300" style={{opacity: '0', transform: 'rotate(90deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
<div className="flex items-center justify-center transition-all duration-300" style={{opacity: '1', transform: 'rotate(0deg)'}}>
<svg className="h-4 w-4" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</span>
</button>
<div className="transition-all duration-300 ease-in-out overflow-hidden" data-acc-panel="" style={{maxHeight: '0', opacity: '0'}}>
<div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0">
<p className="text-sm sm:text-base text-neutral-300 leading-relaxed">We offer transparent, tiered trading fees with discounts for higher volumes. Network transfer fees are passed through at cost with no hidden markups.</p>
</div>
</div>
</div>

</div>
</div>


</section><section className="relative">

<div className="pointer-events-none absolute inset-0">
</div>
<div className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">

<div className="relative overflow-hidden bg-neutral-50/0 border-white/10 border ring-white/5 ring-1 rounded-3xl">

<div className="pointer-events-none absolute inset-0" style="background:
        radial-gradient(600px 240px at 25% 10%, rgba(139,92,246,0.12), transparent 65%),
        radial-gradient(700px 280px at 90% 100%, rgba(88,28,135,0.12), transparent 70%)"></div>

<div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 sm:p-10 lg:p-14 pt-8 pr-8 pb-8 pl-8 items-center">

<div className="">
<h2 className="sm:text-5xl leading-[1.1] text-4xl font-semibold text-neutral-100 tracking-tight">
            Take control of your
            <span className="block text-neutral-100">crypto future</span>
</h2>
<p className="sm:text-lg leading-relaxed text-base text-neutral-400 max-w-xl mt-5">
            Thousands of investors are already maximising their gains with Crypton. Don’t get left behind — start trading smarter today.
          </p>
<div className="mt-8">
<button className="button" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner font-space-grotesk" style={{}}>Get Started<svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg></span>
<style>
.button {
cursor: pointer;
position: relative;
display: inline-flex;
align-items: center;
justify-content: center;
overflow: hidden;
transition: all 0.25s ease;
background: radial-gradient(65.28% 65.28% at 50% 100%,
    rgba(99, 102, 241, 0.8) 0%,
    rgba(99, 102, 241, 0) 100%),
  linear-gradient(0deg, #4f46e5, #4f46e5);
border-radius: 9999px;
border: none;
outline: none;
padding: 8px 18px;
min-height: 36px;
min-width: 90px;
}

.button::before,
.button::after {
content: "";
position: absolute;
transition: all 0.5s ease-in-out;
z-index: 0;
}

.button::before {
inset: 1px;
background: black;
border-radius: 9999px;
}

.button::after {
inset: 2px;
background: black),
  linear-gradient(0deg, #4f46e5, #4f46e5);
border-radius: 9999px;
}

.button:active {
transform: scale(0.95);
}

.points_wrapper {
overflow: hidden;
width: 100%;
height: 100%;
pointer-events: none;
position: absolute;
z-index: 1;
}

.points_wrapper .point {
bottom: -8px;
position: absolute;
animation: floating-points infinite ease-in-out;
pointer-events: none;
width: 1.5px;
height: 1.5px;
background-color: #fff;
border-radius: 9999px;
}

@keyframes floating-points {
0% {
  transform: translateY(0);
}

85% {
  opacity: 0;
}

100% {
  transform: translateY(-40px);
  opacity: 0;
}
}

.points_wrapper .point:nth-child(1) {
left: 10%;
opacity: 1;
animation-duration: 2.35s;
animation-delay: 0.2s;
}

.points_wrapper .point:nth-child(2) {
left: 30%;
opacity: 0.7;
animation-duration: 2.5s;
animation-delay: 0.5s;
}

.points_wrapper .point:nth-child(3) {
left: 25%;
opacity: 0.8;
animation-duration: 2.2s;
animation-delay: 0.1s;
}

.points_wrapper .point:nth-child(4) {
left: 44%;
opacity: 0.6;
animation-duration: 2.05s;
}

.points_wrapper .point:nth-child(5) {
left: 50%;
opacity: 1;
animation-duration: 1.9s;
}

.points_wrapper .point:nth-child(6) {
left: 75%;
opacity: 0.5;
animation-duration: 1.5s;
animation-delay: 1.5s;
}

.points_wrapper .point:nth-child(7) {
left: 88%;
opacity: 0.9;
animation-duration: 2.2s;
animation-delay: 0.2s;
}

.points_wrapper .point:nth-child(8) {
left: 58%;
opacity: 0.8;
animation-duration: 2.25s;
animation-delay: 0.2s;
}

.points_wrapper .point:nth-child(9) {
left: 98%;
opacity: 0.6;
animation-duration: 2.6s;
animation-delay: 0.1s;
}

.points_wrapper .point:nth-child(10) {
left: 65%;
opacity: 1;
animation-duration: 2.5s;
animation-delay: 0.2s;
}

.inner {
z-index: 2;
gap: 5px;
position: relative;
width: 100%;
color: white;
display: inline-flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
line-height: 1.5;
transition: color 0.2s ease-in-out;
}

.inner svg.icon {
width: 16px;
height: 16px;
transition: transform 0.3s ease;
stroke: white;
fill: none;
}

.button:hover svg.icon {
transform: translateX(2px);
}

.button:hover svg.icon path {
animation: dash 0.8s linear forwards;
}

@keyframes dash {
0% {
  stroke-dasharray: 0, 20;
  stroke-dashoffset: 0;
}

50% {
  stroke-dasharray: 10, 10;
  stroke-dashoffset: -5;
}

100% {
  stroke-dasharray: 20, 0;
  stroke-dashoffset: -10;
}
}

/* Loading Component Styles */
#h2 {
  color: white;
  mix-blend-mode: difference;
  text-align: center;
  margin: 0;
  font-size: 12px;
  line-height: 30px;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 0 0 3px;
  padding: 0;
  letter-spacing: 5px;
}

.div {
  position: relative;
  top: 0px;
  left: 0%;
  max-width: 200px;
  width: 100%;
  height: 30px;
  background: linear-gradient(to right, white, black);
  background-size: 200% 100%;
  animation-delay: 2s;
  border-radius: 10px;
  box-shadow: 0 0 3px;
  -webkit-box-reflect: below 1px
    linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  animation: gradientAnimation 10s linear infinite reverse;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0;
  }

  100% {
    background-position: 200% 0;
  }
}

@media (max-width: 768px) {
  .div {
    width: 500px;
    left: 10%;
  }
}
</style>
</button>
</div>
</div>

<div className="lg:pl-4">
<div className="rounded-3xl bg-white/5 border border-white/10 ring-1 ring-white/5 p-6 sm:p-8 shadow-lg shadow-black/20 backdrop-blur">

<div className="flex items-center gap-1 text-amber-400">
<svg className="h-4 w-4" fill="currentColor" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.75 14.66 9l6.84.52-5.2 4.19 1.64 6.54L12 17.98 6.06 20.25 7.7 13.71l-5.2-4.19L9.34 9 12 2.75z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.75 14.66 9l6.84.52-5.2 4.19 1.64 6.54L12 17.98 6.06 20.25 7.7 13.71l-5.2-4.19L9.34 9 12 2.75z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.75 14.66 9l6.84.52-5.2 4.19 1.64 6.54L12 17.98 6.06 20.25 7.7 13.71l-5.2-4.19L9.34 9 12 2.75z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" height="" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.75 14.66 9l6.84.52-5.2 4.19 1.64 6.54L12 17.98 6.06 20.25 7.7 13.71l-5.2-4.19L9.34 9 12 2.75z"></path></svg>
<svg className="h-4 w-4" fill="currentColor" height="16" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.75 14.66 9l6.84.52-5.2 4.19 1.64 6.54L12 17.98 6.06 20.25 7.7 13.71l-5.2-4.19L9.34 9 12 2.75z"></path></svg>
</div>

<p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              “Switching to Crypton was a total game‑changer! Trading is seamless, transactions happen instantly, and managing my portfolio has never been easier or more secure.”
            </p>

<div className="mt-6">
<div className="text-sm font-semibold tracking-tight text-neutral-100">Lucas Clarke</div>
<div className="text-xs text-neutral-500 mt-1">Investor at Shortline</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-6 sm:inset-x-10 bottom-0">
<div className="h-px w-full rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
<div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-10 sm:h-12 w-[88%] sm:w-[82%] rounded-full bg-violet-500/25 blur-2xl"></div>
</div>
</div>
</div>
</section><section className="relative">

<div className="pointer-events-none absolute inset-0">
</div>
<div className="max-w-7xl mr-auto ml-auto px-24 py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5">
<a className="inline-flex items-center gap-3" href="#">
<span className="text-lg font-semibold text-white tracking-tight">Crypton</span>
</a>
<p className="leading-relaxed text-base text-neutral-400 max-w-sm mt-5">
          Take control of your crypto investments.
        </p>

<div className="pt-2 pb-2 space-y-4">
<svg className="lucide lucide-linkedin h-4.5 w-4.5" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-neutral-200 ring-1 ring-white/10 hover:bg-white/20 transition" href="#">
<svg className="lucide lucide-twitter h-4.5 w-4.5" data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-neutral-200 ring-1 ring-white/10 hover:bg-white/20 transition" href="#">
<svg className="lucide lucide-instagram h-4.5 w-4.5" data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-neutral-200 ring-1 ring-white/10 hover:bg-white/20 transition" href="#">
<svg className="lucide lucide-facebook h-4.5 w-4.5" data-lucide="facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-neutral-200 ring-1 ring-white/10 hover:bg-white/20 transition" href="#">
<svg className="lucide lucide-copyright h-4.5 w-4.5" data-lucide="copyright" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M14.83 14.83a4 4 0 1 1 0-5.66"></path></svg>
</a>
</div>
<p className="inline-flex items-center gap-2 text-sm text-neutral-400 mt-10">Created with love
          
          in Aura.</p>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-2 gap-10 sm:gap-16">

<div className="">
<h4 className="text-2xl font-semibold tracking-tight text-neutral-200">Navigation</h4>
<ul className="mt-6 space-y-5">
<li className=""><a className="text-neutral-300 hover:text-white transition text-base" href="#">Overview</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition text-base" href="#">How it works</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition text-base" href="#">Features</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition text-base" href="#">Testimonials</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition text-base" href="#">Pricing</a></li>
</ul>
</div>

<div className="">
<h4 className="text-2xl font-semibold tracking-tight text-neutral-200">Information</h4>
<ul className="mt-6 space-y-5">
<li className=""><a className="text-neutral-300 hover:text-white transition text-base" href="#">Contact</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition text-base" href="#">404</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition text-base" href="#">Use template</a></li>
</ul>
</div>
</div>
</div>
</div>

<div className="mt-16">
<div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
</section>



  
&gt;
    </>
  );
}
