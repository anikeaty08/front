import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



lucide.createIcons();
// Function to switch between phones
function switchPhone(phoneNumber) {
const phone1 = document.getElementById('phone1');
const phone2 = document.getElementById('phone2');
const phone3 = document.getElementById('phone3');
// Reset all phones to original position
phone1.style.transform = '';
phone2.style.transform = '';
phone3.style.transform = '';
phone1.style.transition = 'transform 0.5s ease';
phone2.style.transition = 'transform 0.5s ease';
phone3.style.transition = 'transform 0.5s ease';
// Move phones based on selection
if (phoneNumber === 1) {
phone2.style.transform = 'translateX(430px)';
phone3.style.transform = 'translateX(430px)';
} else if (phoneNumber === 2) {
// Already centered
} else if (phoneNumber === 3) {
phone1.style.transform = 'translateX(-430px)';
phone2.style.transform = 'translateX(-430px)';
}
// Update tab highlights across all phones
updateAllTabs(phoneNumber);
// Trigger animations for the visible screen
setTimeout(() => {
if (phoneNumber === 1) {
animateChartBars();
animateCounter();
} else if (phoneNumber === 2) {
animateStats();
}
}, 500);
}
// Function to update tab highlights across all phones
function updateAllTabs(activePhone) {
// Get all tab buttons across all phones
const allTabBtns = document.querySelectorAll('.tab-btn');
allTabBtns.forEach(btn => {
const targetPhone = parseInt(btn.getAttribute('data-phone'));
if (targetPhone === activePhone) {
btn.classList.add('active');
btn.classList.remove('text-neutral-500');
btn.classList.add('text-lime-400');
const span = btn.querySelector('span');
if (span) span.classList.add('font-medium');
} else {
btn.classList.remove('active');
btn.classList.remove('text-lime-400');
btn.classList.add('text-neutral-500');
const span = btn.querySelector('span');
if (span) span.classList.remove('font-medium');
}
});
// Re-initialize lucide icons
lucide.createIcons();
}
// Function to animate chart bars
function animateChartBars() {
const bars = document.querySelectorAll('.chart-bar');
bars.forEach(bar => {
const targetHeight = bar.getAttribute('data-height');
// Reset animation
bar.style.animation = 'none';
setTimeout(() => {
bar.style.animation = '';
bar.style.height = targetHeight + '%';
}, 10);
});
}
// Function to animate counter
function animateCounter() {
const counterElement = document.querySelector('[data-count="387"]');
if (!counterElement) return;
const target = 387;
const duration = 1500;
const start = 0;
const startTime = performance.now();
function update(currentTime) {
const elapsed = currentTime - startTime;
const progress = Math.min(elapsed / duration, 1);
const current = Math.floor(progress * target);
counterElement.textContent = '+' + current + '%';
if (progress < 1) {
requestAnimationFrame(update);
}
}
requestAnimationFrame(update);
}
// Function to animate stats
function animateStats() {
const statElements = document.querySelectorAll('#phone2 [data-count]');
statElements.forEach(element => {
const target = parseInt(element.getAttribute('data-count'));
const duration = 1500;
const start = 0;
const startTime = performance.now();
const isPercent = target === 98;
const is24 = target === 24;
function update(currentTime) {
const elapsed = currentTime - startTime;
const progress = Math.min(elapsed / duration, 1);
const current = Math.floor(progress * target);
if (is24) {
element.textContent = current + '/7';
} else if (isPercent) {
element.textContent = current + '%';
} else if (target >= 10000) {
element.textContent = Math.floor(current / 1000) + 'k+';
} else {
element.textContent = current;
}
if (progress < 1) {
requestAnimationFrame(update);
}
}
requestAnimationFrame(update);
});
}
// Intersection Observer for animations when scrolling
const observerOptions = {
threshold: 0.5,
rootMargin: '0px'
};
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const phone = entry.target;
if (phone.id === 'phone1') {
animateChartBars();
animateCounter();
} else if (phone.id === 'phone2') {
animateStats();
}
}
});
}, observerOptions);
// Observe the scrollable content areas
document.querySelectorAll('.overflow-y-auto').forEach(el => {
const chartSection = el.querySelector('[data-count="387"]');
if (chartSection) {
const sectionObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
animateChartBars();
animateCounter();
}
});
}, { threshold: 0.3, root: el });
sectionObserver.observe(chartSection.closest('.glass'));
}
const statsSection = el.querySelector('[data-count="10000"]');
if (statsSection) {
const sectionObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
animateStats();
}
});
}, { threshold: 0.3, root: el });
sectionObserver.observe(statsSection.closest('.glass'));
}
});
// Initial animations and tab setup
setTimeout(() => {
animateStats();
updateAllTabs(2); // Start with phone 2 (Home) active
}, 500);



      lucide.createIcons();

      // Function to switch between phones
      function switchPhone(phoneNumber) {
        const phone1 = document.getElementById('phone1');
        const phone2 = document.getElementById('phone2');
        const phone3 = document.getElementById('phone3');

        // Reset all phones to original position
        phone1.style.transform = '';
        phone2.style.transform = '';
        phone3.style.transform = '';
        phone1.style.transition = 'transform 0.5s ease';
        phone2.style.transition = 'transform 0.5s ease';
        phone3.style.transition = 'transform 0.5s ease';

        // Move phones based on selection
        if (phoneNumber === 1) {
          phone2.style.transform = 'translateX(430px)';
          phone3.style.transform = 'translateX(430px)';
        } else if (phoneNumber === 2) {
          // Already centered
        } else if (phoneNumber === 3) {
          phone1.style.transform = 'translateX(-430px)';
          phone2.style.transform = 'translateX(-430px)';
        }

        // Update tab highlights
        updateTabs();

        // Trigger animations for the visible screen
        setTimeout(() => {
          if (phoneNumber === 1) {
            animateChartBars();
            animateCounter();
          } else if (phoneNumber === 2) {
            animateStats();
          }
        }, 500);
      }

      // Function to update tab highlights
      function updateTabs() {
        // This would normally update based on which phone is centered
        // For simplicity, we're handling it inline with onclick
      }

      // Function to animate chart bars
      function animateChartBars() {
        const bars = document.querySelectorAll('.chart-bar');
        bars.forEach(bar => {
          const targetHeight = bar.getAttribute('data-height');
          // Reset animation
          bar.style.animation = 'none';
          setTimeout(() => {
            bar.style.animation = '';
            bar.style.height = targetHeight + '%';
          }, 10);
        });
      }

      // Function to animate counter
      function animateCounter() {
        const counterElement = document.querySelector('[data-count="387"]');
        if (!counterElement) return;

        const target = 387;
        const duration = 1500;
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const current = Math.floor(progress * target);
          counterElement.textContent = '+' + current + '%';

          if (progress < 1) {
            requestAnimationFrame(update);
          }
        }

        requestAnimationFrame(update);
      }

      // Function to animate stats
      function animateStats() {
        const statElements = document.querySelectorAll('#phone2 [data-count]');

        statElements.forEach(element => {
          const target = parseInt(element.getAttribute('data-count'));
          const duration = 1500;
          const start = 0;
          const startTime = performance.now();
          const isPercent = target === 98;
          const is24 = target === 24;

          function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const current = Math.floor(progress * target);

            if (is24) {
              element.textContent = current + '/7';
            } else if (isPercent) {
              element.textContent = current + '%';
            } else if (target >= 10000) {
              element.textContent = Math.floor(current / 1000) + 'k+';
            } else {
              element.textContent = current;
            }

            if (progress < 1) {
              requestAnimationFrame(update);
            }
          }

          requestAnimationFrame(update);
        });
      }

      // Intersection Observer for animations when scrolling
      const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const phone = entry.target;
            if (phone.id === 'phone1') {
              animateChartBars();
              animateCounter();
            } else if (phone.id === 'phone2') {
              animateStats();
            }
          }
        });
      }, observerOptions);

      // Observe the scrollable content areas
      document.querySelectorAll('.overflow-y-auto').forEach(el => {
        const chartSection = el.querySelector('[data-count="387"]');
        if (chartSection) {
          const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                animateChartBars();
                animateCounter();
              }
            });
          }, { threshold: 0.3, root: el });

          sectionObserver.observe(chartSection.closest('.glass'));
        }

        const statsSection = el.querySelector('[data-count="10000"]');
        if (statsSection) {
          const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                animateStats();
              }
            });
          }, { threshold: 0.3, root: el });

          sectionObserver.observe(statsSection.closest('.glass'));
        }
      });

      // Initial animations
      setTimeout(() => {
        animateStats();
      }, 500);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 blur-sm bg-cover bg-center" data-alpha-mask="80" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0de312e9-1b5a-4eaf-bb8b-5630032a6636_3840w.webp")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="flex items-center justify-center gap-10">

<div className="w-[393px] h-[852px] bg-black rounded-[60px] p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" id="phone1">
<div className="w-full h-full bg-neutral-950 rounded-[48px] overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-3xl z-50"></div>

<div className="w-full h-full flex flex-col text-neutral-100">
<div className="absolute inset-0 dot-pattern opacity-20"></div>

<header className="relative z-10 px-6 pt-16 pb-4 flex items-center justify-between">
<button className="p-2 rounded-lg glass">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<span className="text-sm font-medium">Platform Overview</span>
<button className="p-2 rounded-lg glass">
<svg className="lucide lucide-share-2 w-5 h-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
</button>
</header>

<div className="flex-1 overflow-y-auto">

<div className="relative z-10 px-6 py-6">
<div className="glass rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<div className="">
<p className="text-xs text-neutral-400 mb-1">
                        Development Speed
                      </p>
<h2 className="text-2xl font-light tracking-tight">
                        Time to Production
                      </h2>
</div>
<div className="px-3 py-1 rounded-full bg-lime-400/15 border border-lime-300/20">
<span className="text-sm font-medium text-lime-300" data-count="387">
                        +387%
                      </span>
</div>
</div>
<div className="glass rounded-2xl overflow-hidden p-5 mb-4">
<div className="text-center mb-4">
<span className="text-[10px] uppercase tracking-[0.2em] text-lime-300/90">
                        Development Flow
                      </span>
<h4 className="text-2xl font-light tracking-tight mt-1">
                        From Idea to Deploy
                      </h4>
<p className="text-xs text-neutral-400">
                        Automated development pipeline
                      </p>
</div>

<div className="flex items-center justify-between px-2 mb-2">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
<svg className="w-4 h-4 text-neutral-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
</div>
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
<svg className="w-4 h-4 text-neutral-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="16 18 22 12 16 6"></polyline>
<polyline points="8 6 2 12 8 18"></polyline>
</svg>
</div>
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
<svg className="w-4 h-4 text-neutral-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
</div>
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
<svg className="w-4 h-4 text-neutral-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
<svg className="w-4 h-4 text-neutral-200" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
</div>

<div className="relative h-44">
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 320 176">
<path className="animated-line animated-line-1" d="M16 16 C 24 96, 120 120, 160 164" fill="none" stroke="rgba(163,230,53,0.3)" strokeWidth="2"></path>
<path className="animated-line animated-line-2" d="M80 16 C 88 92, 128 118, 160 164" fill="none" stroke="rgba(163,230,53,0.35)" strokeWidth="2"></path>
<path className="animated-line animated-line-3" d="M144 16 C 150 100, 146 126, 160 164" fill="none" stroke="#a3e635" strokeWidth="2.5"></path>
<path className="animated-line animated-line-4" d="M176 16 C 170 100, 174 126, 160 164" fill="none" stroke="#a3e635" strokeWidth="2.5"></path>
<path className="animated-line animated-line-5" d="M240 16 C 232 92, 192 118, 160 164" fill="none" stroke="rgba(163,230,53,0.35)" strokeWidth="2"></path>
<path className="animated-line animated-line-6" d="M304 16 C 296 96, 200 120, 160 164" fill="none" stroke="rgba(163,230,53,0.3)" strokeWidth="2"></path>
<path className="animated-line animated-line-3" d="M144 16 C 150 100, 146 126, 160 164" fill="none" opacity="0.35" stroke="rgba(163,230,53,0.35)" strokeWidth="6"></path>
<path className="animated-line animated-line-4" d="M176 16 C 170 100, 174 126, 160 164" fill="none" opacity="0.35" stroke="rgba(163,230,53,0.35)" strokeWidth="6"></path>
</svg>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.45)]">
<svg className="w-4 h-4 text-neutral-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
</svg>
</div>
</div>
</div>
<p className="text-xs text-neutral-400 mt-3">
                    Comparison with traditional development over 8 weeks
                  </p>
</div>
</div>

<div className="relative z-10 px-6 py-4">
<div className="glass overflow-hidden rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 mb-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
</div>
<span className="text-xs text-neutral-400 ml-2">App.tsx</span>
</div>
<div className="bg-neutral-900/50 rounded-lg p-3 font-mono text-xs overflow-hidden relative" style={{height: '140px'}}>
<div className="" style={{animation: 'scrollCode 8s linear infinite'}}>
<div className="text-purple-400 mb-1">
                        import
                        <span className="text-neutral-200">React</span>
                        from
                        <span className="text-lime-300">'react'</span>
                        ;
                      </div>
<div className="text-purple-400 mb-1">
                        import
                        <span className="text-neutral-200">{ AI }</span>
                        from
                        <span className="text-lime-300">'hova'</span>
                        ;
                      </div>
<div className="mt-2 mb-1"></div>
<div className="text-blue-400 mb-1">
                        const
                        <span className="text-neutral-200">App</span>
                        = () =&gt; {
                      </div>
<div className="pl-4 text-purple-400 mb-1">
                        return
                        <span className="text-neutral-200">
                          &lt;AI.Component /&gt;
                        </span>
</div>
<div className="text-blue-400 mb-1">}</div>
<div className="mt-2 mb-1"></div>
<div className="text-purple-400 mb-1">
                        export
                        <span className="text-blue-400">default</span>
<span className="text-neutral-200">App</span>
                        ;
                      </div>
<div className="mt-2 mb-1"></div>
<div className="text-neutral-500 mb-1">
                        // AI-powered development
                      </div>
<div className="text-neutral-500 mb-1">
                        // Build faster with Hova
                      </div>
</div>
</div>
<style>
                    @keyframes scrollCode {
                      0% {
                        transform: translateY(0);
                      }
                      100% {
                        transform: translateY(-50%);
                      }
                    }
                  </style>
</div>
</div>

<div className="relative z-10 px-6 py-4">
<h3 className="text-lg font-light tracking-tight mb-4">
                  Connect Your Stack
                </h3>
<div className="grid grid-cols-3 gap-3 mb-6">
<div className="glass rounded-xl p-4 flex flex-col items-center gap-2">
<svg className="lucide lucide-github w-6 h-6 text-neutral-300" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</svg>
<span className="text-xs text-neutral-400">GitHub</span>
</div>
<div className="glass rounded-xl p-4 flex flex-col items-center gap-2">
<svg className="lucide lucide-database w-6 h-6 text-neutral-300" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 21 19V5"></path>
<path d="M3 12A9 3 0 0 0 21 12"></path>
</svg>
<span className="text-xs text-neutral-400">Database</span>
</div>
<div className="glass rounded-xl p-4 flex flex-col items-center gap-2">
<svg className="lucide lucide-cloud w-6 h-6 text-neutral-300" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
</svg>
<span className="text-xs text-neutral-400">Cloud</span>
</div>
</div>

<div className="space-y-3 mb-6">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '3'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      Instant sync across all tools
                    </span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '3'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      Enterprise-grade security
                    </span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '3'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      Real-time updates
                    </span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '3'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="text-sm text-neutral-300">
                      One-click setup
                    </span>
</div>
</div>

<div className="glass overflow-hidden rounded-2xl mb-6 pt-5 pr-5 pb-5 pl-5">
<div className="text-center mb-4">
<span className="text-[10px] uppercase tracking-[0.2em] text-lime-300/90">
                      Integrations
                    </span>
<h4 className="text-2xl font-light tracking-tight mt-1">
                      Seamlessly integrate
                    </h4>
<p className="text-xs text-neutral-400">
                      with your favourite tools
                    </p>
</div>

<div className="flex items-center justify-between px-2 mb-2">
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-zap w-4 h-4 text-neutral-200" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-image w-4 h-4 text-neutral-200" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
</div>
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-asterisk w-4 h-4 text-neutral-200" data-lucide="asterisk" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v12"></path>
<path d="M17.196 9 6.804 15"></path>
<path d="m6.804 9 10.392 6"></path>
</svg>
</div>
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-layers w-4 h-4 text-neutral-200" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
</div>
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-puzzle w-4 h-4 text-neutral-200" data-lucide="puzzle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"></path>
</svg>
</div>
<div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
<svg className="lucide lucide-waves w-4 h-4 text-neutral-200" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
<path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
<path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
</svg>
</div>
</div>

<div className="relative h-44">
<svg className="absolute inset-0 w-full h-full" viewbox="0 0 320 176">

<path className="wave-path" d="M0 88 Q 53 40, 106 88 T 212 88 T 320 88" fill="none" stroke="rgba(163,230,53,0.2)" strokeWidth="2" style={{animation: 'wave 4s ease-in-out infinite'}}></path>
<path className="wave-path" d="M0 88 Q 53 60, 106 88 T 212 88 T 320 88" fill="none" stroke="rgba(163,230,53,0.3)" strokeWidth="2" style={{animation: 'wave 3.5s ease-in-out infinite 0.2s'}}></path>

<path className="wave-path" d="M0 88 Q 53 70, 106 88 T 212 88 T 320 88" fill="none" stroke="rgba(163,230,53,0.5)" strokeWidth="2.5" style={{animation: 'wave 3s ease-in-out infinite 0.4s'}}></path>
<path className="wave-path" d="M0 88 Q 53 75, 106 88 T 212 88 T 320 88" fill="none" stroke="#a3e635" strokeWidth="3" style={{animation: 'wave 2.8s ease-in-out infinite 0.6s'}}></path>

<path className="wave-path" d="M0 88 Q 53 75, 106 88 T 212 88 T 320 88" fill="none" opacity="0.3" stroke="rgba(163,230,53,0.4)" strokeWidth="8" style={{animation: 'wave 2.8s ease-in-out infinite 0.6s', filter: 'blur(4px)'}}></path>

<circle className="flowing-particle" cx="80" cy="88" fill="#a3e635" opacity="0.8" r="3" style={{animation: 'flowParticle 5s ease-in-out infinite'}}></circle>
<circle className="flowing-particle" cx="160" cy="88" fill="#a3e635" opacity="0.6" r="2.5" style={{animation: 'flowParticle 4.5s ease-in-out infinite 1s'}}></circle>
<circle className="flowing-particle" cx="240" cy="88" fill="#a3e635" opacity="0.7" r="3" style={{animation: 'flowParticle 5.5s ease-in-out infinite 2s'}}></circle>
</svg>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center shadow-[0_0_30px_rgba(163,230,53,0.45)]" style={{animation: 'destinationPulse 2s ease-in-out infinite'}}>
<i className="w-4 h-4 text-neutral-900" data-lucide="cube"></i>
</div>
</div>
<style>
                    @keyframes wave {
                      0%, 100% {
                        d: path("M0 88 Q 53 70, 106 88 T 212 88 T 320 88");
                      }
                      25% {
                        d: path("M0 88 Q 53 100, 106 88 T 212 88 T 320 88");
                      }
                      50% {
                        d: path("M0 88 Q 53 76, 106 88 T 212 88 T 320 88");
                      }
                      75% {
                        d: path("M0 88 Q 53 94, 106 88 T 212 88 T 320 88");
                      }
                    }

                    @keyframes flowParticle {
                      0% {
                        cx: 0;
                        cy: 88;
                        opacity: 0;
                      }
                      10% {
                        opacity: 0.8;
                      }
                      50% {
                        cy: 70;
                      }
                      90% {
                        opacity: 0.8;
                      }
                      100% {
                        cx: 320;
                        cy: 88;
                        opacity: 0;
                      }
                    }

                    @keyframes destinationPulse {
                      0%, 100% {
                        transform: translate(-50%, 0) scale(1);
                        box-shadow: 0 0 30px rgba(163,230,53,0.45);
                      }
                      50% {
                        transform: translate(-50%, 0) scale(1.1);
                        box-shadow: 0 0 45px rgba(163,230,53,0.7);
                      }
                    }

                    .wave-path {
                      transform-origin: center;
                    }
                  </style>
</div>

<div className="glass rounded-2xl mb-6 pt-3 pr-3 pb-3 pl-3">
<div className="aspect-video rounded-lg bg-gradient-to-br from-lime-400/20 via-neutral-800 to-neutral-900 flex items-center justify-center overflow-hidden relative cursor-pointer hover:from-lime-400/30 transition-all" onclick="alert('Opening demo video...')">
<div className="absolute inset-0 opacity-10">
<div className="grid grid-cols-8 grid-rows-6 h-full bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d3fa6e03-31ef-45b2-8597-0456c52d55c4_800w.webp)]">
<div className="border border-lime-400/20"></div>
<div className="border border-lime-400/20"></div>
<div className="border border-lime-400/20"></div>
<div className="border border-lime-400/20"></div>
<div className="border border-lime-400/20"></div>
<div className="border border-lime-400/20"></div>
<div className="border border-lime-400/20"></div>
<div className="border border-lime-400/20"></div>
</div>
</div>
<div className="relative z-10">
<svg className="w-12 h-12 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
</div>
<p className="text-xs text-neutral-400 mt-2 text-center">
                    Watch platform demo (2:30)
                  </p>
</div>

<div className="mb-6">
<h3 className="text-lg font-light tracking-tight mb-4">
                    What Developers Say
                  </h3>
<div className="space-y-3">
<div className="glass rounded-xl p-4">
<div className="flex items-start gap-3 mb-2">
<div className="w-10 h-10 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0 text-sm font-semibold text-lime-300">
                          JD
                        </div>
<div className="">
<div className="font-medium text-sm">Jane Doe</div>
<div className="text-xs text-neutral-400">
                            Senior Developer
                          </div>
</div>
</div>
<p className="text-sm text-neutral-300">
                        "Reduced our development time by 70%. The AI suggestions
                        are incredibly accurate."
                      </p>
<div className="flex gap-0.5 mt-2">
<svg className="lucide lucide-star w-3 h-3 fill-lime-400 text-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400 text-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400 text-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400 text-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400 text-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
</div>
<div className="glass rounded-xl p-4">
<div className="flex items-start gap-3 mb-2">
<div className="w-10 h-10 rounded-full bg-lime-400/20 flex items-center justify-center flex-shrink-0 text-sm font-semibold text-lime-300">
                          MS
                        </div>
<div>
<div className="font-medium text-sm">Mike Smith</div>
<div className="text-xs text-neutral-400">Tech Lead</div>
</div>
</div>
<p className="text-sm text-neutral-300">
                        "Game changer for our startup. We shipped in weeks, not
                        months."
                      </p>
<div className="flex gap-0.5 mt-2">
<svg className="lucide lucide-star w-3 h-3 fill-lime-400 text-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400 text-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400 text-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400 text-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
<svg className="lucide lucide-star w-3 h-3 fill-lime-400 text-lime-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="glass rounded-2xl p-6 text-center mb-6">
<h3 className="text-xl font-light tracking-tight mb-2">
                    Ready to Build?
                  </h3>
<p className="text-sm text-neutral-400 mb-4">
                    Join 10,000+ developers building faster
                  </p>
<button className="w-full bg-lime-400 text-neutral-950 font-medium py-3 rounded-full hover:bg-lime-300 transition-colors">
                    Get Started Free
                  </button>
</div>
</div>
</div>

<div className="relative z-10 px-6 pb-8 pt-4 border-t border-white/5">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1 text-lime-400 tab-btn active" data-phone="1" onclick="switchPhone(1)">
<div className="relative">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs font-medium">Features</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500 tab-btn" data-phone="2" onclick="switchPhone(2)">
<div className="relative">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500 tab-btn" data-phone="3" onclick="switchPhone(3)">
<div className="relative">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs">Pricing</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500" onclick="event.preventDefault()">
<div className="relative">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<span className="text-xs">Profile</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="w-[393px] h-[852px] bg-black rounded-[60px] p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" id="phone2">
<div className="w-full h-full bg-neutral-950 rounded-[48px] overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-3xl z-50"></div>

<div className="w-full h-full flex flex-col text-neutral-100">
<div className="absolute inset-0 dot-pattern opacity-30"></div>
<div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-lime-400/10 to-transparent"></div>

<header className="relative z-10 px-6 pt-16 pb-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-lime-400 flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-neutral-950" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<span className="text-lg font-semibold tracking-tight">Hova</span>
</div>
<button className="p-2 rounded-lg glass">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 5h16"></path>
<path d="M4 12h16"></path>
<path d="M4 19h16"></path>
</svg>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto">

<main className="relative z-10 px-6 py-8">
<div className="text-center mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass mb-4">
<div className="w-2 h-2 rounded-full bg-lime-400 pulse-glow"></div>
<span className="text-xs font-medium text-lime-300">
                      AI-Powered Development
                    </span>
</div>
<h1 className="text-4xl font-semibold tracking-tight leading-tight mb-4">
                    Build faster with
                    <span className="text-lime-400">AI development</span>
</h1>
<p className="leading-relaxed text-sm text-neutral-400 max-w-sm mr-auto ml-auto">
                    Transform ideas into production-ready applications with
                    intelligent automation and modern workflows
                  </p>
</div>

<div className="glass rounded-2xl mb-8 pt-3 pr-3 pb-3 pl-3">
<div className="aspect-video flex overflow-hidden bg-gradient-to-br from-lime-400/30 via-lime-400/10 to-neutral-900 rounded-lg relative items-center justify-center">
<div className="absolute inset-0">
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-12 glass rounded-lg float" style={{animationDelay: '1s'}}></div>
</div>
<div className="z-10 text-center relative">
<svg className="mr-auto mb-3 ml-auto w-[128px] h-[128px]" data-icon-replaced="true" strokeWidth="2" style={{color: 'rgb(245, 245, 245)', width: '128px', height: '128px'}} viewbox="0 0 200 200">
<defs></defs>

<circle className="" cx="100" cy="100" fill="none" r="80" stroke="rgba(163,230,53,0.2)" strokeWidth="2"></circle>

<circle className="" cx="100" cy="100" fill="none" r="60" stroke="url(#pulseGradient)" strokeWidth="3">
<animate attributename="r" dur="2s" repeatcount="indefinite" values="60;65;60"></animate>
<animate attributename="stroke-width" dur="2s" repeatcount="indefinite" values="3;1.5;3"></animate>
</circle>

<circle className="" cx="100" cy="100" fill="rgba(163,230,53,0.2)" r="40" stroke="rgba(163,230,53,0.6)" strokeWidth="2">
<animate attributename="r" dur="1.5s" repeatcount="indefinite" values="40;42;40"></animate>
</circle>

<circle cx="180" cy="100" fill="rgba(163,230,53,0.9)" r="4">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.9;0.3;0.9"></animate>
</circle>
<circle cx="140" cy="50" fill="rgba(163,230,53,0.7)" r="3">
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0.7;0.2;0.7"></animate>
</circle>
<circle cx="60" cy="50" fill="rgba(163,230,53,0.8)" r="3.5">
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.8;0.3;0.8"></animate>
</circle>

<circle className="" cx="100" cy="100" fill="none" opacity="0" r="20" stroke="rgba(163,230,53,0.6)" strokeWidth="2">
<animate attributename="r" dur="3s" repeatcount="indefinite" values="20;80;80"></animate>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0;0.8;0"></animate>
<animate attributename="stroke-width" dur="3s" repeatcount="indefinite" values="2;0.5;0.5"></animate>
</circle>
<circle cx="100" cy="100" fill="none" opacity="0" r="20" stroke="rgba(163,230,53,0.6)" strokeWidth="2">
<animate attributename="r" begin="1s" dur="3s" repeatcount="indefinite" values="20;80;80"></animate>
<animate attributename="opacity" begin="1s" dur="3s" repeatcount="indefinite" values="0;0.8;0"></animate>
<animate attributename="stroke-width" begin="1s" dur="3s" repeatcount="indefinite" values="2;0.5;0.5"></animate>
</circle>
<circle className="" cx="100" cy="100" fill="none" opacity="0" r="20" stroke="rgba(163,230,53,0.6)" strokeWidth="2">
<animate attributename="r" begin="2s" dur="3s" repeatcount="indefinite" values="20;80;80"></animate>
<animate attributename="opacity" begin="2s" dur="3s" repeatcount="indefinite" values="0;0.8;0"></animate>
<animate attributename="stroke-width" begin="2s" dur="3s" repeatcount="indefinite" values="2;0.5;0.5"></animate>
</circle>

<path d="M100,85 L100,115 M85,100 L115,100" stroke="rgba(163,230,53,1)" strokeLinecap="round" strokeWidth="3">
<animate attributename="opacity" dur="1.5s" repeatcount="indefinite" values="1;0.5;1"></animate>
</path>
<circle cx="100" cy="100" fill="rgba(163,230,53,0.3)" r="8" stroke="rgba(163,230,53,0.8)" strokeWidth="2">
<animate attributename="r" dur="1.5s" repeatcount="indefinite" values="8;10;8"></animate>
</circle>
</svg>
<div className="text-xs font-medium text-lime-300">
      AI Code Generation
    </div>
</div>
</div>
</div>

<div className="space-y-3 mb-8">
<div className="glass rounded-2xl p-4 flex items-start gap-3">
<div className="w-10 h-10 rounded-lg gradient-lime flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-sparkles w-5 h-5 text-lime-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<div className="">
<h3 className="font-medium text-sm mb-1">
                        Intelligent Code Generation
                      </h3>
<p className="text-xs text-neutral-400">
                        Context-aware AI generates clean, maintainable code
                      </p>
</div>
</div>
<div className="glass rounded-2xl p-4 flex items-start gap-3">
<div className="w-10 h-10 rounded-lg gradient-lime flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-workflow w-5 h-5 text-lime-300" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" width="8" x="3" y="3"></rect>
<path d="M7 11v4a2 2 0 0 0 2 2h4"></path>
<rect height="8" rx="2" width="8" x="13" y="13"></rect>
</svg>
</div>
<div className="">
<h3 className="font-medium text-sm mb-1">
                        Infrastructure Automation
                      </h3>
<p className="text-xs text-neutral-400">
                        Databases, APIs, and cloud resources auto-configured
                      </p>
</div>
</div>
<div className="glass rounded-2xl p-4 flex items-start gap-3">
<div className="w-10 h-10 rounded-lg gradient-lime flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-rocket w-5 h-5 text-lime-300" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<div>
<h3 className="font-medium text-sm mb-1">Deploy 5x Faster</h3>
<p className="text-xs text-neutral-400">
                        Production-ready in minutes, not hours
                      </p>
</div>
</div>
</div>

<div className="glass rounded-2xl p-5 mb-8">
<h3 className="text-sm font-semibold mb-4 text-center">
                    Trusted by Developers
                  </h3>
<div className="grid grid-cols-2 gap-4">
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-lime-400 mb-1" data-count="10000">
                        0
                      </div>
<div className="text-xs text-neutral-400">
                        Active Developers
                      </div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-lime-400 mb-1" data-count="50000">
                        0
                      </div>
<div className="text-xs text-neutral-400">Projects Built</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-lime-400 mb-1" data-count="98">
                        0
                      </div>
<div className="text-xs text-neutral-400">Uptime SLA</div>
</div>
<div className="text-center">
<div className="text-2xl font-semibold tracking-tight text-lime-400 mb-1" data-count="24">
                        0
                      </div>
<div className="text-xs text-neutral-400">Support</div>
</div>
</div>
</div>

<div className="mb-8">
<h3 className="text-lg font-thin tracking-tight mb-4">
                    How It Works
                  </h3>
<div className="space-y-3">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-400/20 flex items-center justify-center text-lime-300 text-sm font-semibold">
                        1
                      </div>
<div>
<h4 className="font-medium text-sm mb-1">
                          Describe Your App
                        </h4>
<p className="text-xs text-neutral-400">
                          Tell our AI what you want to build in natural language
                        </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-400/20 flex items-center justify-center text-lime-300 text-sm font-semibold">
                        2
                      </div>
<div>
<h4 className="font-medium text-sm mb-1">
                          Review &amp; Customize
                        </h4>
<p className="text-xs text-neutral-400">
                          AI generates code, you refine with simple prompts
                        </p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-lime-400/20 flex items-center justify-center text-lime-300 text-sm font-semibold">
                        3
                      </div>
<div>
<h4 className="font-medium text-sm mb-1">
                          Deploy Instantly
                        </h4>
<p className="text-xs text-neutral-400">
                          One-click deployment to production with zero config
                        </p>
</div>
</div>
</div>
</div>

<div className="glass rounded-2xl overflow-hidden mb-8">
<div className="bg-gradient-to-r from-lime-400/20 to-lime-400/5 px-5 py-4 border-b border-white/5">
<h3 className="font-semibold text-sm">Live Demo</h3>
<p className="text-xs text-neutral-400 mt-1">
                      See AI in action
                    </p>
</div>
<div className="p-4">
<div className="bg-neutral-900/50 rounded-lg p-3 mb-3">
<div className="text-xs text-neutral-400 mb-2">Input:</div>
<div className="text-sm text-neutral-200">
                        "Create a dashboard with charts"
                      </div>
</div>
<div className="flex items-center justify-center py-3">
<svg className="lucide lucide-arrow-down w-5 h-5 text-lime-400 animate-bounce" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14"></path>
<path d="m19 12-7 7-7-7"></path>
</svg>
</div>
<div className="bg-neutral-900/50 rounded-lg p-3">
<div className="text-xs text-neutral-400 mb-2">Output:</div>
<div className="font-mono text-xs text-lime-300">
                        ✓ React dashboard created ✓ Charts configured ✓ API
                        connected
                      </div>
</div>
</div>
</div>

<button className="w-full bg-lime-400 text-neutral-950 font-medium py-4 rounded-full flex items-center justify-center gap-2 hover:bg-lime-300 transition-colors mb-4">
                  Start Building Free
                  <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<p className="text-xs text-neutral-500 text-center mb-8">
                  No credit card required • Free forever plan
                </p>
</main>
</div>

<div className="relative z-10 px-6 pb-8 pt-4 border-t border-white/5">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1 text-neutral-500 tab-btn" data-phone="1" onclick="switchPhone(1)">
<div className="relative">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs">Features</span>
</button>
<button className="flex flex-col items-center gap-1 text-lime-400 tab-btn active" data-phone="2" onclick="switchPhone(2)">
<div className="relative">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs font-medium">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500 tab-btn" data-phone="3" onclick="switchPhone(3)">
<div className="relative">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs">Pricing</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500" onclick="event.preventDefault()">
<div className="relative">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<span className="text-xs">Profile</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="w-[393px] h-[852px] bg-black rounded-[60px] p-3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" id="phone3">
<div className="w-full h-full bg-neutral-950 rounded-[48px] overflow-hidden relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-3xl z-50"></div>

<div className="w-full h-full flex flex-col text-neutral-100">
<div className="absolute inset-0 dot-pattern opacity-20"></div>
<div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-lime-400/10 to-transparent"></div>

<header className="relative z-10 px-6 pt-16 pb-4">
<div className="flex items-center justify-between">
<button className="p-2 rounded-lg glass">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<span className="text-sm font-medium">Get Started</span>
<button className="p-2 rounded-lg glass">
<svg className="lucide lucide-more-vertical w-5 h-5" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="12" cy="5" r="1"></circle>
<circle cx="12" cy="19" r="1"></circle>
</svg>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto">

<main className="relative z-10 px-6 py-6">
<h2 className="text-2xl font-light tracking-tight text-center mb-2">
                  Choose Your Plan
                </h2>
<p className="text-sm text-neutral-400 text-center mb-6">
                  Start free, upgrade when you scale
                </p>

<div className="glass rounded-2xl p-6 mb-4">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-light tracking-tight">
                      Developer
                    </h3>
<div className="px-2 py-1 rounded-full glass">
<span className="text-xs text-lime-300 font-medium">
                        Free
                      </span>
</div>
</div>
<div className="mb-4">
<span className="text-3xl font-semibold tracking-tight">
                      $0
                    </span>
<span className="text-neutral-400 text-sm">/month</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">5 active projects</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Core generation features</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Community support</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Basic integrations</span>
</div>
</div>
<button className="w-full border border-white/10 text-neutral-200 font-medium py-3 rounded-full hover:bg-white/5 transition-colors">
                    Get Started Free
                  </button>
</div>

<div className="glass rounded-2xl p-6 border-2 border-lime-300/30 relative overflow-hidden mb-4">
<div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-lime-400">
<span className="text-xs text-neutral-950 font-medium">
                      Popular
                    </span>
</div>
<h3 className="text-lg font-light tracking-tight mb-4">
                    Professional
                  </h3>
<div className="mb-4">
<span className="text-3xl font-semibold tracking-tight">
                      $49
                    </span>
<span className="text-neutral-400 text-sm">/month</span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Unlimited projects</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Advanced AI models</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Team collaboration (5 seats)</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Priority support</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>All integrations</span>
</div>
</div>
<button className="w-full bg-lime-400 text-neutral-950 font-medium py-3 rounded-full hover:bg-lime-300 transition-colors pulse-glow">
                    Start 14-Day Trial
                  </button>
</div>

<div className="glass rounded-2xl p-6 mb-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-light tracking-tight">
                      Enterprise
                    </h3>
<div className="px-2 py-1 rounded-full glass">
<span className="text-xs text-neutral-300 font-medium">
                        Custom
                      </span>
</div>
</div>
<div className="mb-4">
<span className="text-3xl font-light tracking-tight">
                      Custom
                    </span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span className="">Unlimited everything</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Dedicated support team</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>Custom AI training</span>
</div>
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-check w-4 h-4 text-lime-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '2.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
<span>SLA guarantees</span>
</div>
</div>
<button className="w-full border border-white/10 text-neutral-200 font-medium py-3 rounded-full hover:bg-white/5 transition-colors">
                    Contact Sales
                  </button>
</div>

<div className="glass rounded-2xl p-4 mb-6">
<h3 className="text-sm font-semibold mb-3 text-center">
                    Plan Comparison
                  </h3>
<div className="aspect-[4/3] rounded-lg bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-0 grid grid-cols-3 gap-3 p-4">
<div className="glass rounded-lg flex flex-col items-center justify-center gap-2 p-3">
<div className="text-xs text-neutral-400">Free</div>
<div className="w-full h-2 bg-lime-400/20 rounded-full"></div>
</div>
<div className="glass rounded-lg flex flex-col items-center justify-center gap-2 p-3">
<div className="text-xs text-lime-300 font-medium">Pro</div>
<div className="w-full h-2 bg-lime-400/60 rounded-full"></div>
</div>
<div className="glass rounded-lg flex flex-col items-center justify-center gap-2 p-3">
<div className="text-xs text-neutral-400">Enterprise</div>
<div className="w-full h-2 bg-lime-400 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="glass rounded-xl p-4 mb-6">
<div className="flex items-center justify-around text-center">
<button className="flex flex-col items-center gap-1 text-neutral-500 tab-btn" data-phone="1" onclick="switchPhone(1)">
<div className="relative">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs">Features</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500 tab-btn" data-phone="2" onclick="switchPhone(2)">
<div className="relative">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-lime-400 tab-btn active" data-phone="3" onclick="switchPhone(3)">
<div className="relative">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs font-medium">Pricing</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500" onclick="event.preventDefault()">
<div className="relative">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<span className="text-xs">Profile</span>
</button>
</div>
</div>

<div className="mb-6">
<h3 className="text-lg font-semibold mb-4 tracking-tight">
                    Frequently Asked
                  </h3>
<div className="space-y-3">
<div className="glass rounded-xl p-4">
<div className="flex items-start justify-between gap-3">
<div className="flex-1">
<h4 className="font-medium text-sm mb-1">
                            Can I switch plans anytime?
                          </h4>
<p className="text-xs text-neutral-400">
                            Yes, upgrade or downgrade at any time. Changes take
                            effect immediately.
                          </p>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-500 flex-shrink-0" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
<div className="glass rounded-xl p-4">
<div className="flex items-start justify-between gap-3">
<div className="flex-1">
<h4 className="font-medium text-sm mb-1">
                            What payment methods do you accept?
                          </h4>
<p className="text-xs text-neutral-400">
                            We accept all major credit cards, PayPal, and wire
                            transfers for Enterprise.
                          </p>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-500 flex-shrink-0" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
<div className="glass rounded-xl p-4">
<div className="flex items-start justify-between gap-3">
<div className="flex-1">
<h4 className="font-medium text-sm mb-1">
                            Is there a setup fee?
                          </h4>
<p className="text-xs text-neutral-400">
                            No setup fees for any plan. Start building
                            immediately after signup.
                          </p>
</div>
<svg className="lucide lucide-chevron-right w-4 h-4 text-neutral-500 flex-shrink-0" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="glass rounded-2xl p-6 text-center mb-6 border border-lime-400/20">
<svg className="lucide lucide-gift w-10 h-10 text-lime-400 mx-auto mb-3" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" width="18" x="3" y="8"></rect>
<path d="M12 8v13"></path>
<path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
<path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
</svg>
<h3 className="text-lg font-semibold tracking-tight mb-2">
                    Special Offer
                  </h3>
<p className="text-sm text-neutral-400 mb-4">
                    Get 20% off Pro plan with annual billing
                  </p>
<button className="w-full bg-lime-400 text-neutral-950 font-medium py-3 rounded-full hover:bg-lime-300 transition-colors">
                    Claim Offer
                  </button>
</div>
</main>
</div>

<div className="relative z-10 px-6 pb-8 pt-4 border-t border-white/5">
<div className="flex items-center justify-around">
<button className="flex flex-col items-center gap-1 text-neutral-500 tab-btn" data-phone="1" onclick="switchPhone(1)">
<div className="relative">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="9" rx="1" width="7" x="3" y="3"></rect>
<rect height="5" rx="1" width="7" x="14" y="3"></rect>
<rect height="9" rx="1" width="7" x="14" y="12"></rect>
<rect height="5" rx="1" width="7" x="3" y="16"></rect>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs">Features</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500 tab-btn" data-phone="2" onclick="switchPhone(2)">
<div className="relative">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs">Home</span>
</button>
<button className="flex flex-col items-center gap-1 text-lime-400 tab-btn active" data-phone="3" onclick="switchPhone(3)">
<div className="relative">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
<div className="tab-glow"></div>
</div>
<span className="text-xs font-medium">Pricing</span>
</button>
<button className="flex flex-col items-center gap-1 text-neutral-500" onclick="event.preventDefault()">
<div className="relative">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<span className="text-xs">Profile</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
