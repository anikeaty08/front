import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          !function(){
              if(!window.UnicornStudio){
                window.UnicornStudio={isInitialized:!1};
                var i=document.createElement("script");
                i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
                i.onload=function(){
                  window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)
                },
                (document.head || document.body).appendChild(i)
              }
            }();
        


      // Intersection Observer for premium scroll reveal animations
        const reveals = document.querySelectorAll('.reveal-shell, .reveal-scale-up, .anim-fade-up, .anim-fade-in');
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Only animate once
            }
          });
        }, {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        });

        reveals.forEach(el => observer.observe(el));
    


      // Mobile menu logic
        const siteNav = document.getElementById('site-nav');
        const mobileToggle = document.getElementById('mobile-menu-toggle');
        const mobilePanel = document.getElementById('mobile-menu-panel');
        const menuIconOpen = document.getElementById('menu-icon-open');
        const menuIconClose = document.getElementById('menu-icon-close');

        function openMobileMenu() {
          mobilePanel.classList.remove('mobile-menu-hidden');
          mobilePanel.classList.add('mobile-menu-visible');
          mobileToggle.setAttribute('aria-expanded', 'true');
          menuIconOpen.classList.add('hidden');
          menuIconClose.classList.remove('hidden');
        }

        function closeMobileMenu() {
          mobilePanel.classList.add('mobile-menu-hidden');
          mobilePanel.classList.remove('mobile-menu-visible');
          mobileToggle.setAttribute('aria-expanded', 'false');
          menuIconOpen.classList.remove('hidden');
          menuIconClose.classList.add('hidden');
        }

        function toggleMobileMenu() {
          const isOpen = mobileToggle.getAttribute('aria-expanded') === 'true';
          if (isOpen) {
            closeMobileMenu();
          } else {
            openMobileMenu();
          }
        }

        mobileToggle?.addEventListener('click', toggleMobileMenu);

        document.addEventListener('click', (event) => {
          if (!siteNav.contains(event.target)) {
            closeMobileMenu();
          }
        });

        window.addEventListener('resize', () => {
          if (window.innerWidth >= 768) {
            closeMobileMenu();
          }
        });
    


      document.addEventListener('DOMContentLoaded', () => {
          const ctx = document.getElementById('signalChart').getContext('2d');
          const gradient = ctx.createLinearGradient(0, 0, 0, 180);
          gradient.addColorStop(0, 'rgba(22, 224, 196, 0.4)');
          gradient.addColorStop(1, 'rgba(22, 224, 196, 0)');

          new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
              datasets: [{
                label: 'Signals',
                data: [65, 59, 80, 81, 56, 55, 40, 68, 82, 95, 110, 105],
                borderColor: '#16E0C4',
                backgroundColor: gradient,
                borderWidth: 2,
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 4
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: { x: { display: false }, y: { display: false } },
              animation: { duration: 2000 }
            }
          });
        });
    


      (function () {
        const testimonials = [
          {
            quote: "“SignalOS transformed our operations. Important signals find us, and routine tasks resolve themselves.”",
            name: "Sarah Jenkins",
            role: "VP Operations, TechFlow",
            avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_3840w.webp",
            metric1: {
              value: "94%",
              title: "Fewer missed signals",
              subtitle: "Critical events captured instantly",
              bars: ["35%", "52%", "64%", "82%"]
            },
            metric2: {
              value: "10x",
              title: "Faster response time",
              subtitle: "From detection to routing",
              visual: `<svg viewBox="0 0 200 70" class="w-full h-20">\n<path d="M5 52 C25 52, 28 40, 42 40 S65 62, 82 48 S104 22, 124 26 S152 18, 195 10" fill="none" stroke="rgba(22,224,196,0.9)" stroke-width="3" stroke-linecap="round"></path>\n<path d="M5 52 C25 52, 28 40, 42 40 S65 62, 82 48 S104 22, 124 26 S152 18, 195 10" fill="none" stroke="rgba(127,235,221,0.25)" stroke-width="10" stroke-linecap="round"></path>\n</svg>`
            },
            metric3: {
              title: "Automated triage",
              subtitle: "60% of routine alerts resolve without human intervention, reducing manual follow-up and operational noise.",
              visual: `<div class="absolute inset-3 rounded-full border border-[#16E0C4]/15"></div>\n<div class="flex items-center gap-2">\n<span class="w-2.5 h-2.5 rounded-full bg-[#16E0C4] shadow-[0_0_12px_rgba(22,224,196,0.6)]"></span>\n<span class="w-8 sm:w-12 h-px bg-gradient-to-r from-[#16E0C4] to-[#7FEBDD]"></span>\n<span class="w-2.5 h-2.5 rounded-full bg-[#7FEBDD] shadow-[0_0_12px_rgba(127,235,221,0.5)]"></span>\n</div>`
            }
          },
          {
            quote: "“We stopped losing hours to manual alert review. SignalOS gave our team one clear decision layer across every system we rely on.”",
            name: "Daniel Foster",
            role: "Director of Operations, RelayStack",
            avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_3840w.jpg",
            metric1: {
              value: "42%",
              title: "Lower workflow noise",
              subtitle: "Less low-value alert traffic reaching teams",
              bars: ["82%", "55%", "38%", "22%"]
            },
            metric2: {
              value: "6.8x",
              title: "Faster escalation",
              subtitle: "From detection to team response",
              visual: `<svg viewBox="0 0 200 70" class="w-full h-20">\n<path d="M5 60 L40 45 L75 50 L110 25 L145 30 L195 5" fill="none" stroke="rgba(22,224,196,0.9)" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"></path>\n<path d="M5 60 L40 45 L75 50 L110 25 L145 30 L195 5" fill="none" stroke="rgba(127,235,221,0.25)" stroke-width="10" stroke-linejoin="round" stroke-linecap="round"></path>\n</svg>`
            },
            metric3: {
              title: "Priority routing",
              subtitle: "High-value events are automatically scored, enriched, and routed to the right operator in seconds.",
              visual: `<div class="absolute inset-3 rounded-full border border-[#16E0C4]/15"></div>\n<div class="flex flex-col items-center gap-1.5 w-full px-4">\n<div class="flex justify-between w-full">\n<span class="w-2 h-2 rounded-full bg-[#16E0C4]/40"></span>\n<span class="w-2 h-2 rounded-full bg-[#16E0C4]/40"></span>\n</div>\n<div class="flex items-center justify-center w-full relative">\n<div class="absolute w-full h-px bg-gradient-to-r from-[#16E0C4]/0 via-[#16E0C4]/50 to-[#16E0C4]/0"></div>\n<span class="w-3 h-3 rounded-full bg-[#16E0C4] shadow-[0_0_12px_rgba(22,224,196,0.6)] relative z-10"></span>\n</div>\n<div class="flex justify-center w-full">\n<span class="w-2 h-2 rounded-full bg-[#16E0C4]/40"></span>\n</div>\n</div>`
            }
          },
          {
            quote: "“The biggest win was trust. SignalOS doesn’t just automate action — it verifies the result and gives us a reliable record of what actually happened.”",
            name: "Elena Ruiz",
            role: "Head of Customer Ops, ApexGrid",
            avatar: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_3840w.jpg",
            metric1: {
              value: "99.9%",
              title: "Verified completion",
              subtitle: "Actions tracked end to end",
              bars: ["48%", "64%", "78%", "98%"]
            },
            metric2: {
              value: "3.1x",
              title: "Better workflow confidence",
              subtitle: "Operators trust automated outcomes more",
              visual: `<svg viewBox="0 0 200 70" class="w-full h-20">\n<path d="M5 50 Q50 60, 100 35 T195 10" fill="none" stroke="rgba(22,224,196,0.9)" stroke-width="3" stroke-linecap="round"></path>\n<path d="M5 50 Q50 60, 100 35 T195 10" fill="none" stroke="rgba(127,235,221,0.25)" stroke-width="10" stroke-linecap="round"></path>\n</svg>`
            },
            metric3: {
              title: "Closed-loop visibility",
              subtitle: "Every workflow step is logged, verified, and traceable, giving teams an audit-ready operational record.",
              visual: `<div class="absolute inset-3 rounded-full border border-[#16E0C4]/30 bg-[#16E0C4]/5 flex items-center justify-center">\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16E0C4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="drop-shadow-[0_0_8px_rgba(22,224,196,0.6)]">\n<polyline points="20 6 9 17 4 12"></polyline>\n</svg>\n</div>`
            }
          }
        ];

        const quote = document.getElementById('testimonial-quote');
        const nameEl = document.getElementById('testimonial-name');
        const roleEl = document.getElementById('testimonial-role');
        const avatarEl = document.getElementById('testimonial-avatar');

        const metric1Value = document.getElementById('metric1-value');
        const metric1Title = document.getElementById('metric1-title');
        const metric1Subtitle = document.getElementById('metric1-subtitle');
        const metric1Bar1 = document.getElementById('metric1-bar-1');
        const metric1Bar2 = document.getElementById('metric1-bar-2');
        const metric1Bar3 = document.getElementById('metric1-bar-3');
        const metric1Bar4 = document.getElementById('metric1-bar-4');

        const metric2Value = document.getElementById('metric2-value');
        const metric2Title = document.getElementById('metric2-title');
        const metric2Subtitle = document.getElementById('metric2-subtitle');
        const metric2VisualContainer = document.getElementById('metric2-visual-container');

        const metric3Title = document.getElementById('metric3-title');
        const metric3Subtitle = document.getElementById('metric3-subtitle');
        const metric3VisualContainer = document.getElementById('metric3-visual-container');

        const dots = document.querySelectorAll('.testimonial-dot');
        const prevBtn = document.getElementById('testimonial-prev');
        const nextBtn = document.getElementById('testimonial-next');

        if (!quote || !dots.length || !prevBtn || !nextBtn) return;

        let current;
        let isAnimating = false;
        const TRANSITION_MS = 250;

        function render(index) {
          if (isAnimating || current === index) return;
          const isFirstRender = current === undefined;

          if (!isFirstRender && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
            isAnimating = true;
            const transEls = document.querySelectorAll('.content-transition');
            transEls.forEach(el => el.classList.add('out'));

            setTimeout(() => {
              updateContent(index);
              transEls.forEach(el => el.classList.remove('out'));
              setTimeout(() => { isAnimating = false; }, TRANSITION_MS);
            }, TRANSITION_MS);
          } else {
            updateContent(index);
          }
        }

        function updateContent(index) {
          const item = testimonials[index];

          quote.textContent = item.quote;
          nameEl.textContent = item.name;
          roleEl.textContent = item.role;
          avatarEl.src = item.avatar;
          avatarEl.alt = item.name;

          metric1Value.textContent = item.metric1.value;
          metric1Title.textContent = item.metric1.title;
          metric1Subtitle.textContent = item.metric1.subtitle;
          metric1Bar1.style.height = item.metric1.bars[0];
          metric1Bar2.style.height = item.metric1.bars[1];
          metric1Bar3.style.height = item.metric1.bars[2];
          metric1Bar4.style.height = item.metric1.bars[3];

          metric2Value.textContent = item.metric2.value;
          metric2Title.textContent = item.metric2.title;
          metric2Subtitle.textContent = item.metric2.subtitle;
          if (metric2VisualContainer) metric2VisualContainer.innerHTML = item.metric2.visual;

          metric3Title.textContent = item.metric3.title;
          metric3Subtitle.textContent = item.metric3.subtitle;
          if (metric3VisualContainer) metric3VisualContainer.innerHTML = item.metric3.visual;

          dots.forEach((dot, i) => {
            if (i === index) {
              dot.classList.add('bg-[#16E0C4]');
              dot.classList.remove('bg-white/15');
            } else {
              dot.classList.remove('bg-[#16E0C4]');
              dot.classList.add('bg-white/15');
            }
          });

          current = index;
        }

        prevBtn.addEventListener('click', () => {
          if (!isAnimating) render((current - 1 + testimonials.length) % testimonials.length);
        });

        nextBtn.addEventListener('click', () => {
          if (!isAnimating) render((current + 1) % testimonials.length);
        });

        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => render(index));
        });

        render(0);
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="7WRlj4TRuUxuldc6GVDM"></div>


<div className="unicorn-teal-tint"></div>
</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-vertical-grid opacity-100"></div>
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#16E0C4]/[0.03] rounded-full blur-[120px] animate-ambient mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-[#16E0C4]/[0.025] rounded-full blur-[130px] animate-ambient-delayed mix-blend-screen"></div>
</div>

<header className="fixed inset-x-0 top-6 z-50 flex justify-center px-3 sm:px-4">
<div className="nav-shell w-full max-w-5xl rounded-full px-3 sm:px-4 py-2.5" id="site-nav">
<div className="flex items-center justify-between gap-3">

<a className="flex min-w-0 items-center gap-3 rounded-full pl-0 pr-2 py-1.5 group" href="#">
<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#16E0C4]/20 bg-[#16E0C4]/10 text-[#16E0C4] transition-transform duration-300 group-hover:scale-110">
<iconify-icon className="text-[18px]" icon="solar:pulse-linear" strokeWidth="2"></iconify-icon>
</span>
<span className="min-w-0">
<span className="block text-[13px] leading-none font-medium tracking-[0.14em] text-zinc-100 font-['Space_Grotesk',sans-serif]">
                SIGNALOS
              </span>
<span className="hidden sm:block text-[10px] leading-none text-zinc-500 mt-1 tracking-[0.16em] uppercase">
                Signal orchestration
              </span>
</span>
</a>

<nav className="hidden md:flex items-center gap-7 lg:gap-8">
<a className="nav-link" href="#platform">Platform</a>
<a className="nav-link" href="#integrations">Integrations</a>
<a className="nav-link" href="#workflow">Workflow</a>
<a className="nav-link" href="#outcomes">Outcomes</a>
<a className="nav-link" href="#pricing">Pricing</a>
</nav>

<div className="hidden md:flex items-center gap-2 lg:gap-3">
<a className="nav-cta-secondary rounded-full px-3 lg:px-4 py-2 text-[12px] font-medium text-zinc-300" href="#">
              Sign in
            </a>
<a className="nav-cta-primary rounded-full px-4 lg:px-5 py-2.5 text-[12px] font-medium" href="#">
              Start free
            </a>
</div>

<button aria-controls="mobile-menu-panel" aria-expanded="false" className="md:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-200 transition hover:bg-white/[0.07]" id="mobile-menu-toggle" type="button">
<span className="sr-only">Toggle menu</span>
<svg className="h-[18px] w-[18px]" fill="none" id="menu-icon-open" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<svg className="hidden h-[18px] w-[18px]" fill="none" id="menu-icon-close" stroke="currentColor" strokeWidth="1.8" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="mobile-menu-panel mobile-menu-hidden md:hidden absolute left-0 right-0 top-[calc(100%+12px)] rounded-[1.75rem] p-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]" id="mobile-menu-panel">
<div className="grid gap-2">
<a className="mobile-menu-link rounded-2xl px-4 py-3 text-sm font-medium text-zinc-200" href="#platform">
              Platform
            </a>
<a className="mobile-menu-link rounded-2xl px-4 py-3 text-sm font-medium text-zinc-200" href="#integrations">
              Integrations
            </a>
<a className="mobile-menu-link rounded-2xl px-4 py-3 text-sm font-medium text-zinc-200" href="#workflow">
              Workflow
            </a>
<a className="mobile-menu-link rounded-2xl px-4 py-3 text-sm font-medium text-zinc-200" href="#outcomes">
              Outcomes
            </a>
<a className="mobile-menu-link rounded-2xl px-4 py-3 text-sm font-medium text-zinc-200" href="#pricing">
              Pricing
            </a>
</div>
<div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
<a className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-sm font-medium text-zinc-200 transition hover:bg-white/[0.06]" href="#">
              Sign in
            </a>
<a className="nav-cta-primary rounded-full px-4 py-3 text-center text-sm font-medium" href="#">
              Start free
            </a>
</div>
</div>
</div>
</header>

<main className="relative z-10">

<section className="overflow-hidden min-h-[auto] md:min-h-[1000px] md:pt-32 md:pb-32 pt-28 pb-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] z-0 pointer-events-none mask-radar-bottom select-none">
<div className="relative w-full h-full flex items-center justify-center">
<div className="absolute inset-0 w-full h-full rounded-full animate-[radar-scan_8s_linear_infinite]">
<div className="radar-sweep w-full h-full rounded-full"></div>
<div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-gradient-to-b from-[#16E0C4] via-[#16E0C4]/50 to-transparent origin-bottom -translate-x-1/2 shadow-[0_0_30px_#16E0C4]"></div>
</div>
<div className="absolute w-[98%] h-[98%] rounded-full border border-dashed border-[#16E0C4]/10 opacity-30 animate-[spin-slow_120s_linear_infinite]"></div>
<div className="absolute w-[80%] h-[80%] rounded-full border border-[#16E0C4]/10 opacity-60"></div>
<div className="absolute w-full h-full opacity-10">
<div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#16E0C4]/30"></div>
<div className="absolute left-0 right-0 top-1/2 h-px bg-[#16E0C4]/30"></div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] flex items-center justify-center">
<div className="absolute inset-0 bg-[#16E0C4]/10 blur-xl rounded-full animate-pulse"></div>
<div className="w-[60%] h-[60%] border border-[#16E0C4]/30 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-[#16E0C4] rounded-full shadow-[0_0_10px_#16E0C4]"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="text-center max-w-4xl mx-auto mb-10 md:mb-16 pt-8 md:pt-10">
<div className="inline-flex items-center gap-2 rounded-full border border-[#16E0C4]/20 bg-[#16E0C4]/5 px-4 py-1.5 mb-8 backdrop-blur-md anim-fade-up delay-100">
<div className="h-1.5 w-1.5 animate-pulse bg-[#16E0C4] rounded-full"></div>
<span className="text-[10px] font-semibold tracking-widest uppercase text-[#16E0C4] font-['Space_Grotesk']">
                Live signal orchestration
              </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-[5.4rem] font-medium tracking-[-0.05em] text-white mb-6 leading-[0.96] font-['Space_Grotesk'] max-w-[11ch] mx-auto anim-fade-up delay-200">
              Turn live signals
              <span className="text-gradient-accent relative block">
                into action
              </span>
</h1>
<p className="text-lg text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed mb-10 anim-fade-up delay-300">
              Connect your stack, detect what matters, and trigger the right
              workflow automatically with full visibility from signal to
              outcome.
            </p>
<div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 w-full max-w-[34rem] mx-auto anim-fade-up delay-400">
<button className="w-full md:w-auto text-sm font-semibold px-8 py-4 bg-[#16E0C4] text-[#0A0B0D] rounded-full hover:bg-[#18f0d3] hover:shadow-[0_0_24px_rgba(22,224,196,0.25)] transition-all flex items-center justify-center">
                Start free
              </button>
<button className="hero-cta-nebula w-full md:w-auto" type="button">
<span className="hero-cta-nebula-beam"></span>
<span className="hero-cta-nebula-border"></span>
<span className="hero-cta-nebula-surface">
                  Explore integrations
                  <svg className="hero-cta-nebula-icon" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>

<div className="hidden md:block w-full max-w-6xl z-20 mt-[-20px] relative perspective-1000 anim-fade-up delay-500">
<div className="glass-surface overflow-hidden bg-[#0A0B0D]/95 border-white/20 rounded-t-2xl border-x border-b relative backdrop-blur-md">
<div className="glass-top-border"></div>
<div className="z-20 flex bg-black/40 border-white/5 border-b pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
</div>
<div className="h-4 w-px bg-white/10 mx-2"></div>
<div className="flex items-center gap-2 text-xs font-mono text-[#16E0C4]">
<iconify-icon className="text-sm" icon="lucide:activity"></iconify-icon>
<span className="tracking-tight font-semibold">
                      SIGNAL.ORCHESTRATOR
                    </span>
<span className="text-slate-600">/</span>
<span className="text-slate-300">CORE_ROUTING</span>
</div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#16E0C4]/10 border border-[#16E0C4]/20">
<div className="w-1.5 h-1.5 rounded-full bg-[#16E0C4] animate-pulse"></div>
<span className="text-[10px] font-semibold text-[#16E0C4] tracking-wide">
                    LIVE SIGNALS
                  </span>
</div>
</div>
<div className="z-20 flex h-[480px] relative">
<div className="flex flex-col gap-6 bg-black/10 w-16 border-white/5 border-r pt-6 pb-6 items-center">
<div className="p-2.5 rounded-xl bg-[#16E0C4]/10 text-[#16E0C4] shadow-[0_0_15px_rgba(22,224,196,0.2)]">
<iconify-icon className="text-xl" icon="lucide:zap"></iconify-icon>
</div>
<div className="p-2.5 rounded-xl text-zinc-500 hover:text-zinc-200 transition-colors cursor-pointer">
<iconify-icon className="text-xl" icon="lucide:layers"></iconify-icon>
</div>
<div className="p-2.5 rounded-xl text-zinc-500 hover:text-zinc-200 transition-colors cursor-pointer">
<iconify-icon className="text-xl" icon="lucide:share-2"></iconify-icon>
</div>
<div className="mt-auto p-2.5 rounded-xl text-zinc-500 hover:text-zinc-200 transition-colors cursor-pointer">
<iconify-icon className="text-xl" icon="lucide:settings"></iconify-icon>
</div>
</div>
<div className="flex-1 grid grid-cols-12 gap-6 p-6">
<div className="col-span-12 grid grid-cols-3 gap-6 h-32">
<div className="rounded-xl border border-white/5 bg-white/[0.03] p-5 flex flex-col justify-between group hover:border-[#16E0C4]/30 transition-all">
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                            Signals Processed
                          </p>
<h3 className="text-2xl font-semibold text-white tracking-tight">
                            1.24M
                          </h3>
</div>
<iconify-icon className="text-[#16E0C4] bg-[#16E0C4]/10 p-1.5 rounded-md" icon="lucide:pulse"></iconify-icon>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-2">
<div className="h-full w-[85%] bg-[#16E0C4] rounded-full"></div>
</div>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.03] p-5 flex flex-col justify-between group hover:border-[#16E0C4]/30 transition-all">
<div className="flex justify-between items-start">
<div>
<p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                            Decision Latency
                          </p>
<h3 className="text-2xl font-semibold text-white tracking-tight">
                            0.4
                            <span className="text-sm text-zinc-500 ml-1">ms</span>
</h3>
</div>
<iconify-icon className="text-[#7FEBDD] bg-[#16E0C4]/10 p-1.5 rounded-md" icon="lucide:timer"></iconify-icon>
</div>
<div className="text-[10px] text-emerald-400 mt-2 flex items-center gap-1">
<iconify-icon icon="lucide:trending-down"></iconify-icon>
                        -2.4% vs baseline
                      </div>
</div>
<div className="rounded-xl border border-white/5 bg-white/[0.03] p-5 flex flex-col justify-between group hover:border-[#16E0C4]/30 transition-all">
<div className="flex justify-between items-start">
<div className="">
<p className="text-[10px] font-semibold text-zinc-500 uppercase tracking-wider mb-1">
                            Routing Success
                          </p>
<h3 className="text-2xl font-semibold text-white tracking-tight">
                            99.9%
                          </h3>
</div>
<iconify-icon className="text-emerald-400 bg-emerald-500/10 p-1.5 rounded-md" icon="lucide:check-circle"></iconify-icon>
</div>
<div className="flex gap-1 mt-2">
<div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
<div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
<div className="h-1 flex-1 bg-emerald-500 rounded-full"></div>
<div className="h-1 flex-1 bg-emerald-500/20 rounded-full"></div>
</div>
</div>
</div>
<div className="col-span-8 bg-white/[0.02] border border-white/5 rounded-xl p-6 relative">
<div className="flex items-center justify-between mb-4">
<h4 className="text-xs font-semibold text-white">
                        Signal Volume
                      </h4>
<div className="flex gap-2">
<button className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white">
                          Live Feed
                        </button>
</div>
</div>
<div className="relative w-full h-[180px]">
<canvas className="w-full h-full" height="360" id="signalChart" style={{display: 'block', boxSizing: 'border-box', height: '180px', width: '634px'}} width="1268"></canvas>
</div>
</div>
<div className="col-span-4 bg-white/[0.02] border border-white/5 rounded-xl flex flex-col">
<div className="p-4 border-b border-white/5 flex justify-between items-center">
<h4 className="text-xs font-semibold text-white">
                        Workflow Log
                      </h4>
<span className="flex h-2 w-2">
<span className="animate-ping absolute h-2 w-2 rounded-full bg-[#16E0C4] opacity-75"></span>
<span className="relative h-2 w-2 bg-[#16E0C4] rounded-full"></span>
</span>
</div>
<div className="flex-1 p-3 space-y-2 font-mono text-[10px] overflow-hidden opacity-80">
<div className="flex gap-2">
<span>10:42:01</span>
<span className="text-[#16E0C4]">INFO</span>
<span>Stripe Webhook Captured</span>
</div>
<div className="flex gap-2">
<span>10:42:05</span>
<span className="text-emerald-400">ROUTED</span>
<span>Slack: #revenue-alerts</span>
</div>
<div className="flex gap-2">
<span>10:42:12</span>
<span className="text-red-400">ALERT</span>
<span>High Priority Churn Signal</span>
</div>
<div className="flex gap-2">
<span>10:42:18</span>
<span className="text-[#16E0C4]">SYNC</span>
<span>Salesforce Record Updated</span>
</div>
<div className="flex gap-2">
<span>10:42:22</span>
<span className="text-zinc-500">WAIT</span>
<span>Verifying Outcome...</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-10 left-0 right-0 h-20 bg-[#16E0C4]/10 blur-[50px] pointer-events-none z-0"></div>
</div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent via-black/70 to-black z-[15]"></div>
</section>

<section className="py-10 border-y border-white/[0.04] bg-[#0A0B0D]/50 backdrop-blur-sm relative overflow-hidden anim-fade-in delay-200">
<div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-[#0A0B0D] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 lg:w-24 bg-gradient-to-l from-[#0A0B0D] to-transparent z-10 pointer-events-none"></div>
<div className="relative z-20 w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
<div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)] lg:[mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)] opacity-40 grayscale hover:grayscale-0 transition-all duration-700 group">
<style>
              @keyframes infinite-scroll {
                0% {
                  transform: translateX(0);
                }

                100% {
                  transform: translateX(-50%);
                }
              }

              .animate-infinite-scroll {
                animation: infinite-scroll 40s linear infinite;
              }

              .group:hover .animate-infinite-scroll {
                animation-play-state: paused;
              }
            </style>
<div className="flex items-center justify-center md:justify-start [&amp;_div]:mx-6 sm:[&amp;_div]:mx-7 lg:[&amp;_div]:mx-8 w-max animate-infinite-scroll">

<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-2xl text-white iconify--simple-icons" data-icon="simple-icons:git" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                  git
                </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-3xl text-white iconify--simple-icons" data-icon="simple-icons:npm" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor"></path>
</svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:lucid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                  Lucidchart
                </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:wrike"></span>
<span className="font-medium text-lg text-white font-sans">
                  wrike
                </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:jquery" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                  jQuery
                </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:openstack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                  openstack
                </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:servicenow"></span>
<span className="font-medium text-lg text-white tracking-tight font-sans">
                  servicenow
                </span>
</div>
<div className="group flex items-center gap-2">
<span className="font-bold text-xl text-white tracking-tight font-sans">
                  paysafe:
                </span>
</div>

<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-2xl text-white iconify--simple-icons" data-icon="simple-icons:git" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039a1.837 1.837 0 0 1-2.6 0a1.85 1.85 0 0 1-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348a1.85 1.85 0 0 1 0 2.6a1.844 1.844 0 0 1-2.609 0a1.834 1.834 0 0 1 0-2.598c.182-.18.387-.316.605-.406V8.835a1.834 1.834 0 0 1-.996-2.41L7.636 3.7L.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477a1.545 1.545 0 0 0 2.186 0l10.43-10.43a1.544 1.544 0 0 0 0-2.187" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                  git
                </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-3xl text-white iconify--simple-icons" data-icon="simple-icons:npm" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor"></path>
</svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:lucid" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                  Lucidchart
                </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:wrike"></span>
<span className="font-medium text-lg text-white font-sans">
                  wrike
                </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:jquery" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                  jQuery
                </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl text-white iconify--simple-icons" data-icon="simple-icons:openstack" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg text-white font-sans">
                  openstack
                </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl text-white" data-icon="simple-icons:servicenow"></span>
<span className="font-medium text-lg text-white tracking-tight font-sans">
                  servicenow
                </span>
</div>
<div className="group flex items-center gap-2">
<span className="font-bold text-xl text-white tracking-tight font-sans">
                  paysafe:
                </span>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-12 md:py-28 lg:py-32 max-w-[90rem] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="relative rounded-[2rem] overflow-hidden aspect-square lg:aspect-[4/5] group gradient-border-shell inner-highlight p-2 anim-fade-up delay-100">
<div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-[#0A0B0D]/60">
<img alt="SignalOS orchestration engine" className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c44f05e7-c171-431a-895b-d0a2efd34b9e_3840w.jpg?w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-tr from-[#16E0C4]/12 via-transparent to-[#16E0C4]/[0.05] mix-blend-screen pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-[#0A0B0D]/72 to-transparent pointer-events-none"></div>

<div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A0B0D]/70 px-3 py-1.5 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#16E0C4] shadow-[0_0_10px_rgba(22,224,196,0.65)]"></span>
<span className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-300 font-['Space_Grotesk']">
                  Core engine
                </span>
</div>

<div className="absolute left-5 right-5 bottom-5">
<div className="glass-shell rounded-[1.25rem] border border-white/10 px-4 py-4 backdrop-blur-xl">
<div className="flex items-center justify-between gap-4 mb-3">
<div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-medium font-['Space_Grotesk']">
                      Routing layer
                    </div>
<div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[#16E0C4]">
<span className="w-1.5 h-1.5 rounded-full bg-[#16E0C4]"></span>
                      stable
                    </div>
</div>
<div className="grid grid-cols-3 gap-3">
<div className="">
<div className="text-[10px] uppercase tracking-[0.14em] text-zinc-500 mb-1">
                        Latency
                      </div>
<div className="text-sm text-white font-medium">0.4ms</div>
</div>
<div>
<div className="text-[10px] uppercase tracking-[0.14em] text-zinc-500 mb-1">
                        Confidence
                      </div>
<div className="text-sm text-white font-medium">99.2%</div>
</div>
<div className="">
<div className="text-[10px] uppercase tracking-[0.14em] text-zinc-500 mb-1">
                        Mode
                      </div>
<div className="text-sm text-white font-medium">
                        Autonomous
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col">

<div className="inline-flex w-fit self-start items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#16E0C4]/20 bg-[#16E0C4]/[0.06] text-[#16E0C4] text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] font-['Space_Grotesk'] mb-6 anim-fade-up delay-100">
<span className="w-1.5 h-1.5 rounded-full bg-[#16E0C4] shadow-[0_0_10px_rgba(22,224,196,0.65)]"></span>
              Core architecture
            </div>

<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight font-['Space_Grotesk'] leading-[1.04] mb-7 max-w-[12ch] anim-fade-up delay-200">
              The routing engine behind every decision
            </h2>

<p className="text-xl md:text-2xl text-white leading-relaxed mb-6 max-w-2xl anim-fade-up delay-300">
              A unified layer that turns fragmented events into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16E0C4] via-[#7FEBDD] to-[#B8FFF4] font-medium">
                clear, prioritized action
              </span>
              across your stack.
            </p>

<p className="text-base text-zinc-400 leading-relaxed mb-10 max-w-2xl anim-fade-up delay-400">
              SignalOS ingests events from every connected system, normalizes
              them in real time, applies routing logic instantly, and sends the
              right action to the right workflow without adding manual
              operational overhead.
            </p>

<div className="flex flex-col gap-8">

<div className="flex items-start gap-5 group/feature anim-fade-up delay-500">
<div className="w-12 h-12 rounded-xl bg-[#16E0C4]/5 border border-[#16E0C4]/20 flex items-center justify-center shrink-0 group-hover/feature:bg-[#16E0C4]/10 transition-colors duration-300">
<iconify-icon className="text-xl text-[#16E0C4]" icon="lucide:activity"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-1.5 font-['Space_Grotesk']">
                    Live signal detection
                  </h4>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                    Capture product, CRM, billing, and support events the moment
                    they happen, with one normalized event stream ready for
                    action.
                  </p>
</div>
</div>

<div className="flex items-start gap-5 group/feature anim-fade-up delay-600">
<div className="w-12 h-12 rounded-xl bg-[#16E0C4]/5 border border-[#16E0C4]/20 flex items-center justify-center shrink-0 group-hover/feature:bg-[#16E0C4]/10 transition-colors duration-300">
<iconify-icon className="text-xl text-[#16E0C4]" icon="lucide:filter"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-1.5 font-['Space_Grotesk']">
                    Priority engine
                  </h4>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                    Apply deterministic rules and confidence scoring to separate
                    noise from high-value signals before they reach downstream
                    teams.
                  </p>
</div>
</div>

<div className="flex items-start gap-5 group/feature anim-fade-up delay-700">
<div className="w-12 h-12 rounded-xl bg-[#16E0C4]/5 border border-[#16E0C4]/20 flex items-center justify-center shrink-0 group-hover/feature:bg-[#16E0C4]/10 transition-colors duration-300">
<iconify-icon className="text-xl text-[#16E0C4]" icon="lucide:git-branch-plus"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-white tracking-tight mb-1.5 font-['Space_Grotesk']">
                    Workflow routing
                  </h4>
<p className="text-sm text-zinc-400 leading-relaxed max-w-xl">
                    Trigger the right playbook automatically, sync context
                    across systems, and verify the outcome without manual triage
                    loops.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-28 lg:py-32 pt-24 pb-24 relative" id="workflow">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 relative items-start">

<div className="lg:col-span-5 lg:sticky lg:top-32 reveal-shell">
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#16E0C4]/20 bg-[#16E0C4]/[0.06] text-[#16E0C4] text-[11px] sm:text-xs font-medium mb-6 uppercase tracking-[0.14em] font-['Space_Grotesk'] anim-fade-up delay-100">
<span className="w-1.5 h-1.5 rounded-full bg-[#16E0C4] shadow-[0_0_10px_rgba(22,224,196,0.65)]"></span>
              Workflow logic
            </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight font-['Space_Grotesk'] leading-[1.05] mb-6 max-w-[12ch] anim-fade-up delay-200">
              From scattered data to
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#16E0C4] via-[#8AF3E6] to-[#D7FFF8]">
                verified outcomes.
              </span>
</h2>
<p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-xl mb-8 anim-fade-up delay-300">
              SignalOS gives every event a clear operational path from intake to
              prioritization, automated routing, and final confirmation, so
              nothing high-value gets lost in manual triage.
            </p>

<div className="gradient-border-panel inner-highlight rounded-[1.5rem] p-5 max-w-md hidden lg:block bg-white/[0.02] anim-fade-up delay-400">
<div className="flex items-center justify-between mb-4">
<span className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-medium font-['Space_Grotesk']">
                  Workflow summary
                </span>
<span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.16em] text-[#16E0C4]">
<span className="w-1.5 h-1.5 rounded-full bg-[#16E0C4]"></span>
                  autonomous
                </span>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-400">Signal intake</span>
<span className="text-white font-medium">Live</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-400">Decision layer</span>
<span className="text-white font-medium">0.4ms</span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-zinc-400">Outcome verification</span>
<span className="text-white font-medium">99.9%</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="gradient-border-panel rounded-[2rem] p-6 sm:p-8 md:p-9 inner-highlight reveal-scale-up">
<div className="flex flex-col gap-5">
<div className="flex items-start gap-4 sm:gap-5">
<div className="text-4xl sm:text-5xl font-['Space_Grotesk'] font-medium text-white/20 select-none leading-none mt-1 shrink-0 anim-fade-up delay-100">
                    01
                  </div>
<div className="min-w-0">
<div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3 anim-fade-up delay-200">
<h3 className="text-xl sm:text-2xl font-medium text-white font-['Space_Grotesk'] tracking-tight">
                        Capture
                      </h3>
<span className="inline-flex w-fit items-center gap-2 px-2.5 py-1 rounded-full border border-[#16E0C4]/15 bg-[#16E0C4]/10 text-[10px] uppercase tracking-[0.16em] text-[#16E0C4]">
                        live intake
                      </span>
</div>
</div>
</div>
<div className="pl-0">
<p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-2xl anim-fade-up delay-300">
                    Connect your core systems once. SignalOS listens passively
                    to product activity, billing changes, CRM updates, support
                    events, and internal triggers without disrupting your
                    existing workflow.
                  </p>
<div className="flex gap-2 flex-wrap anim-fade-up delay-400">
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:database-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:chart-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-zinc-400" icon="solar:wallet-linear"></iconify-icon>
</div>
<div className="px-3 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-medium text-zinc-500">
                      +12 sources
                    </div>
</div>
</div>
</div>
</div>

<div className="gradient-border-panel rounded-[2rem] p-6 sm:p-8 md:p-9 inner-highlight reveal-shell">
<div className="flex flex-col gap-5">
<div className="flex items-start gap-4 sm:gap-5">
<div className="text-4xl sm:text-5xl font-['Space_Grotesk'] font-medium text-white/20 select-none leading-none mt-1 shrink-0">
                    02
                  </div>
<div className="min-w-0">
<div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3">
<h3 className="text-xl sm:text-2xl font-medium text-white font-['Space_Grotesk'] tracking-tight">
                        Prioritize
                      </h3>
<span className="inline-flex w-fit items-center gap-2 px-2.5 py-1 rounded-full border border-[#16E0C4]/15 bg-[#16E0C4]/10 text-[10px] uppercase tracking-[0.16em] text-[#16E0C4]">
                        confidence scoring
                      </span>
</div>
</div>
</div>
<div className="pl-0">
<p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-2xl">
                    Apply business rules and signal scoring to separate noise
                    from events that actually require action. A churn-risk event
                    tied to a high-value account is treated very differently
                    from a low-impact system log.
                  </p>
<div className="bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-xs text-zinc-400 overflow-x-auto anim-fade-up delay-400">
                    if (event.type == "churn_risk" &amp;&amp; account.tier ==
                    "enterprise") {
                    <br/>
                      
                    <span className="text-[#16E0C4]">priority = "CRITICAL";</span>
<br/>
                      
                    <span className="text-[#16E0C4]">
                      route = "customer-success";
                    </span>
<br/>
                    }
                  </div>
</div>
</div>
</div>

<div className="gradient-border-panel rounded-[2rem] p-6 sm:p-8 md:p-9 inner-highlight reveal-shell">
<div className="flex flex-col gap-5">
<div className="flex items-start gap-4 sm:gap-5">
<div className="text-4xl sm:text-5xl font-['Space_Grotesk'] font-medium text-white/20 select-none leading-none mt-1 shrink-0">
                    03
                  </div>
<div className="min-w-0">
<div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3">
<h3 className="text-xl sm:text-2xl font-medium text-white font-['Space_Grotesk'] tracking-tight">
                        Route
                      </h3>
<span className="inline-flex w-fit items-center gap-2 px-2.5 py-1 rounded-full border border-[#16E0C4]/15 bg-[#16E0C4]/10 text-[10px] uppercase tracking-[0.16em] text-[#16E0C4]">
                        automated response
                      </span>
</div>
</div>
</div>
<div className="pl-0">
<p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-2xl">
                    Dispatch the next best action automatically. SignalOS can
                    create a Jira issue, update Salesforce, notify Slack,
                    trigger a billing workflow, and attach the right context
                    across systems at the same time.
                  </p>
<button className="text-xs font-medium px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-zinc-200 flex items-center gap-2 hover:bg-white/10 transition-colors anim-fade-up delay-400 transition-transform duration-300 hover:-translate-y-0.5">
<iconify-icon icon="solar:play-linear"></iconify-icon>
                    Preview routing flow
                  </button>
</div>
</div>
</div>

<div className="gradient-border-panel rounded-[2rem] p-6 sm:p-8 md:p-9 inner-highlight reveal-shell">
<div className="flex flex-col gap-5">
<div className="flex items-start gap-4 sm:gap-5">
<div className="text-4xl sm:text-5xl font-['Space_Grotesk'] font-medium text-white/20 select-none leading-none mt-1 shrink-0">
                    04
                  </div>
<div className="min-w-0">
<div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3">
<h3 className="text-xl sm:text-2xl font-medium text-white font-['Space_Grotesk'] tracking-tight">
                        Verify
                      </h3>
<span className="inline-flex w-fit items-center gap-2 px-2.5 py-1 rounded-full border border-[#16E0C4]/15 bg-[#16E0C4]/10 text-[10px] uppercase tracking-[0.16em] text-[#16E0C4]">
                        closed loop
                      </span>
</div>
</div>
</div>
<div className="pl-0">
<p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-2xl">
                    Confirm that the destination system actually completed the
                    action. SignalOS tracks the result, records the outcome, and
                    gives your team an auditable view of what happened next.
                  </p>
<div className="flex items-center gap-3 text-xs text-zinc-500 uppercase tracking-[0.16em] flex-wrap anim-fade-up delay-400">
<span className="inline-flex items-center gap-2 text-[#16E0C4]">
<span className="w-1.5 h-1.5 rounded-full bg-[#16E0C4]"></span>
                      verified
                    </span>
<span className="w-1 h-1 rounded-full bg-white/15"></span>
<span>traceable</span>
<span className="w-1 h-1 rounded-full bg-white/15"></span>
<span>audit-ready</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 md:py-28 lg:py-32 overflow-hidden" id="outcomes">

<div className="bg-[#0A0B0D]/50 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm"></div>
<div className="absolute inset-0 bg-vertical-grid opacity-20 pointer-events-none"></div>
<div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-[#0A0B0D] to-transparent pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 lg:w-24 bg-gradient-to-l from-[#0A0B0D] to-transparent pointer-events-none"></div>
<div className="absolute -top-24 left-[8%] w-[24rem] h-[24rem] bg-[#16E0C4]/[0.05] rounded-full blur-[110px] pointer-events-none"></div>
<div className="absolute -bottom-24 right-[10%] w-[22rem] h-[22rem] bg-[#16E0C4]/[0.04] rounded-full blur-[110px] pointer-events-none"></div>
<div className="z-20 relative">

<div className="flex justify-center mb-12">
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#16E0C4]/20 bg-[#16E0C4]/[0.06] text-[#16E0C4] text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] font-['Space_Grotesk'] anim-fade-up delay-100">
<span className="w-1.5 h-1.5 rounded-full bg-[#16E0C4] shadow-[0_0_10px_rgba(22,224,196,0.65)]"></span>
              Trusted outcomes
            </div>
</div>
<div className="max-w-[96rem] mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-10 items-start">

<div className="reveal-shell flex flex-col min-w-0 lg:pr-0 delay-200">

<div className="flex items-center justify-between gap-6 mb-6">
<div className="flex items-center gap-4 min-w-0">
<img alt="Sarah Jenkins" className="w-14 h-14 rounded-full object-cover border border-white/10 shrink-0 content-transition" id="testimonial-avatar" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e825b87-0682-49e3-98c2-dbdab1f8f9c5_3840w.webp?w=800&amp;q=80"/>
<div className="min-w-0">
<p className="text-sm font-medium text-white content-transition" id="testimonial-name">
                        Sarah Jenkins
                      </p>
<p className="text-xs text-zinc-400 truncate content-transition" id="testimonial-role">
                        VP Operations, TechFlow
                      </p>
</div>
</div>

<div className="flex items-center gap-3 shrink-0">
<button className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.06] transition-all flex items-center justify-center" id="testimonial-prev">
<iconify-icon className="text-lg" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="flex items-center gap-2">
<button aria-label="Go to testimonial 1" className="testimonial-dot active w-2.5 h-2.5 rounded-full bg-[#16E0C4]"></button>
<button aria-label="Go to testimonial 2" className="testimonial-dot w-2.5 h-2.5 rounded-full bg-white/15 hover:bg-white/30 transition-colors"></button>
<button aria-label="Go to testimonial 3" className="testimonial-dot w-2.5 h-2.5 rounded-full bg-white/15 hover:bg-white/30 transition-colors"></button>
</div>
<button className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] text-zinc-200 hover:bg-white/[0.06] transition-all flex items-center justify-center" id="testimonial-next">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="">
<iconify-icon className="text-4xl text-white/10 mb-6" icon="solar:quote-left-linear"></iconify-icon>
<h2 className="text-3xl md:text-3xl lg:text-[2.65rem] font-['Space_Grotesk'] text-white leading-[1.08] tracking-[-0.03em] mb-8 font-medium max-w-[20ch] content-transition" id="testimonial-quote">
                    “SignalOS transformed our operations. Important signals find
                    us, and routine tasks resolve themselves.”
                  </h2>
</div>
</div>

<div className="grid sm:grid-cols-2 gap-4 reveal-shell">

<div className="gradient-border-panel rounded-[2rem] p-6 inner-highlight flex flex-col justify-between min-h-[18rem] delay-300 transition-transform duration-500 hover:-translate-y-1">
<div className="flex items-start justify-between mb-5">
<iconify-icon className="text-2xl text-[#16E0C4]" icon="solar:target-linear" id="metric1-icon"></iconify-icon>
<span className="text-[10px] uppercase font-medium text-zinc-500 tracking-[0.18em] font-['Space_Grotesk']">
                      Signal performance
                    </span>
</div>
<div className="">
<p className="text-4xl font-['Space_Grotesk'] font-medium text-white tracking-tight mb-1 content-transition" id="metric1-value">
                      94%
                    </p>
<p className="text-sm font-medium text-zinc-200 mb-1 content-transition" id="metric1-title">
                      Fewer missed signals
                    </p>
<p className="text-xs text-zinc-500 mb-5 content-transition" id="metric1-subtitle">
                      Critical events captured instantly
                    </p>

<div className="rounded-[1rem] bg-[#0A0B0D]/80 border border-white/10 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]">
<div className="flex items-end gap-2 h-20">
<div className="w-full rounded-t-md bg-[#16E0C4]/25 h-[35%] transition-all duration-500" id="metric1-bar-1" style={{height: '35%'}}></div>
<div className="w-full rounded-t-md bg-[#16E0C4]/35 h-[52%] transition-all duration-500" id="metric1-bar-2" style={{height: '52%'}}></div>
<div className="w-full rounded-t-md bg-[#16E0C4]/45 h-[64%] transition-all duration-500" id="metric1-bar-3" style={{height: '64%'}}></div>
<div className="w-full rounded-t-md bg-[#16E0C4]/60 h-[82%] transition-all duration-500" id="metric1-bar-4" style={{height: '82%'}}></div>
</div>
</div>
</div>
</div>

<div className="gradient-border-panel rounded-[2rem] p-6 inner-highlight flex flex-col justify-between min-h-[18rem] delay-400">
<div className="flex items-start justify-between mb-5">
<iconify-icon className="text-2xl text-[#7FEBDD]" icon="solar:stopwatch-linear" id="metric2-icon"></iconify-icon>
<span className="text-[10px] uppercase font-medium text-zinc-500 tracking-[0.18em] font-['Space_Grotesk']">
                      Operational speed
                    </span>
</div>
<div className="">
<p className="text-4xl font-['Space_Grotesk'] font-medium text-white tracking-tight mb-1 content-transition" id="metric2-value">
                      10x
                    </p>
<p className="text-sm font-medium text-zinc-200 mb-1 content-transition" id="metric2-title">
                      Faster response time
                    </p>
<p className="text-xs text-zinc-500 mb-5 content-transition" id="metric2-subtitle">
                      From detection to routing
                    </p>

<div className="rounded-[1rem] bg-[#0A0B0D]/80 border border-white/10 px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] content-transition" id="metric2-visual-container">
<svg className="w-full h-20" viewbox="0 0 200 70">
<path d="M5 52 C25 52, 28 40, 42 40 S65 62, 82 48 S104 22, 124 26 S152 18, 195 10" fill="none" stroke="rgba(22,224,196,0.9)" strokeLinecap="round" strokeWidth="3"></path>
<path d="M5 52 C25 52, 28 40, 42 40 S65 62, 82 48 S104 22, 124 26 S152 18, 195 10" fill="none" stroke="rgba(127,235,221,0.25)" strokeLinecap="round" strokeWidth="10"></path>
</svg>
</div>
</div>
</div>

<div className="sm:col-span-2 gradient-border-panel rounded-[2rem] p-6 inner-highlight flex items-center justify-between gap-8 overflow-hidden relative min-h-[8.5rem] delay-500">
<div className="absolute inset-y-0 right-0 w-[42%] bg-gradient-to-l from-[#16E0C4]/[0.06] to-transparent pointer-events-none"></div>
<div className="relative z-10 max-w-[28rem]">
<p className="text-sm font-medium text-white mb-1 content-transition" id="metric3-title">
                      Automated triage
                    </p>
<p className="text-sm text-zinc-400 max-w-[26rem] leading-relaxed content-transition" id="metric3-subtitle">
                      60% of routine alerts resolve without human intervention,
                      reducing manual follow-up and operational noise.
                    </p>
</div>

<div className="relative z-10 shrink-0 w-28 sm:w-36 h-16 sm:h-20 rounded-[1rem] bg-[#0A0B0D]/80 border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] flex items-center justify-center content-transition" id="metric3-visual-container">
<div className="absolute inset-3 rounded-full border border-[#16E0C4]/15"></div>
<div className="flex items-center gap-2">
<span className="w-2.5 h-2.5 rounded-full bg-[#16E0C4] shadow-[0_0_12px_rgba(22,224,196,0.6)]"></span>
<span className="w-8 sm:w-12 h-px bg-gradient-to-r from-[#16E0C4] to-[#7FEBDD]"></span>
<span className="w-2.5 h-2.5 rounded-full bg-[#7FEBDD] shadow-[0_0_12px_rgba(127,235,221,0.5)]"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-28 lg:py-28 overflow-hidden relative">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] gradient-border-shell inner-highlight">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 left-[8%] w-[24rem] h-[24rem] bg-[#16E0C4]/[0.08] rounded-full blur-[110px]"></div>
<div className="absolute -bottom-24 right-[10%] w-[22rem] h-[22rem] bg-[#16E0C4]/[0.06] rounded-full blur-[110px]"></div>
<div className="absolute inset-0 bg-vertical-grid opacity-20"></div>
</div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_0.92fr] gap-0">

<div className="p-6 sm:p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#16E0C4]/20 bg-[#16E0C4]/[0.06] text-[#16E0C4] text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] font-['Space_Grotesk'] mb-6 anim-fade-up delay-100">
<span className="w-1.5 h-1.5 rounded-full bg-[#16E0C4] shadow-[0_0_10px_rgba(22,224,196,0.65)]"></span>
                  SignalOS platform
                </div>
<h2 className="text-3xl md:text-3xl lg:text-4xl text-white tracking-tight leading-[1.04] font-medium font-['Space_Grotesk'] max-w-[15ch] anim-fade-up delay-200">
                  See how SignalOS turns
                  <span className="text-transparent bg-clip-text bg-gradient-to-tl from-[#16E0C4] via-[#8AF3E6] to-[#D7FFF8]">
                    signals into action
                  </span>
</h2>
<p className="mt-4 text-base md:text-lg text-zinc-400 max-w-2xl leading-relaxed anim-fade-up delay-300">
                  Book a focused walkthrough to see how SignalOS captures live
                  signals, prioritizes what matters, and routes the right
                  workflow automatically across your stack.
                </p>
<div className="mt-8 space-y-4 anim-fade-up delay-400">
<div className="flex items-center gap-3 text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-[#16E0C4]"></span>
                    Connect existing tools in minutes
                  </div>
<div className="flex items-center gap-3 text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-[#16E0C4]"></span>
                    Route high-value signals automatically
                  </div>
<div className="flex items-center gap-3 text-zinc-300">
<span className="h-1.5 w-1.5 rounded-full bg-[#16E0C4]"></span>
                    Verify outcomes with full visibility
                  </div>
</div>
<p className="mt-8 text-xs text-zinc-500 anim-fade-up delay-500">
                  No credit card. No complicated setup. Just a focused
                  walkthrough of the workflow.
                </p>
</div>

<div className="p-6 sm:p-8 md:p-10 lg:p-12">
<div className="gradient-border-panel inner-highlight rounded-[1.5rem] p-5 sm:p-6 reveal-scale-up delay-400">
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-[10px] uppercase tracking-[0.18em] text-zinc-500 font-medium font-['Space_Grotesk']">
                        Demo request
                      </p>
<h3 className="mt-2 text-xl text-white font-medium tracking-tight font-['Space_Grotesk']">
                        Book your walkthrough
                      </h3>
</div>
<div className="w-11 h-11 rounded-2xl bg-[#16E0C4]/10 border border-[#16E0C4]/20 flex items-center justify-center text-[#16E0C4]">
<iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
<form action="#" aria-label="Demo request form" className="space-y-4" method="post">
<label className="block">
<span className="text-sm text-neutral-300">Work email</span>
<input className="mt-1.5 w-full rounded-xl bg-[#0A0B0D]/80 border border-white/10 text-white placeholder:text-neutral-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#16E0C4]/40 focus:border-[#16E0C4]/30" placeholder="you@company.com" required="" type="email"/>
</label>
<label className="block">
<span className="text-sm text-neutral-300">
                        Team or use case
                      </span>
<input className="mt-1.5 w-full rounded-xl bg-[#0A0B0D]/80 border border-white/10 text-white placeholder:text-neutral-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#16E0C4]/40 focus:border-[#16E0C4]/30" placeholder="Revenue ops, support, growth, product..." type="text"/>
</label>
<label className="block">
<span className="text-sm text-neutral-300">
                        Optional note
                      </span>
<textarea className="mt-1.5 w-full rounded-xl bg-[#0A0B0D]/80 border border-white/10 text-white placeholder:text-neutral-500 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#16E0C4]/40 focus:border-[#16E0C4]/30" placeholder="Tell us what signals or workflows you want to automate." rows="4"></textarea>
</label>
<div className="pt-2 flex flex-col xl:flex-row items-stretch xl:items-center gap-3">
<button className="w-full xl:w-auto justify-center text-sm font-semibold px-7 py-3.5 bg-[#16E0C4] text-[#0A0B0D] rounded-full hover:bg-[#18f0d3] hover:shadow-[0_0_24px_rgba(22,224,196,0.25)] transition-all flex items-center gap-2" type="submit">
                        Request a demo
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="hero-cta-nebula w-full xl:w-auto" type="button">
<span className="hero-cta-nebula-beam"></span>
<span className="hero-cta-nebula-border"></span>
<span className="hero-cta-nebula-surface">
                          Contact sales
                          <svg className="hero-cta-nebula-icon" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
<p className="text-xs text-neutral-500 pt-1">
                      We’ll only use this to coordinate your walkthrough and
                      relevant product updates.
                    </p>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden pt-20 md:pt-24 lg:pt-24 pb-12">

<div className="bg-[#0A0B0D]/55 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm"></div>
<div className="absolute inset-0 bg-vertical-grid opacity-20 pointer-events-none"></div>
<div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 lg:w-24 bg-gradient-to-r from-[#0A0B0D] to-transparent pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 lg:w-24 bg-gradient-to-l from-[#0A0B0D] to-transparent pointer-events-none"></div>
<div className="absolute -top-24 left-[10%] w-[22rem] h-[22rem] bg-[#16E0C4]/[0.05] rounded-full blur-[110px] pointer-events-none"></div>
<div className="absolute -bottom-20 right-[12%] w-[18rem] h-[18rem] bg-[#16E0C4]/[0.04] rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 max-w-[90rem] mx-auto px-6 lg:px-12">

<div className="grid lg:grid-cols-[1fr_0.9fr] gap-12 lg:gap-14 items-start pb-8 border-b border-white/[0.06]">

<div className="anim-fade-up delay-100">
<div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#16E0C4]/20 bg-[#16E0C4]/[0.06] text-[#16E0C4] text-[11px] sm:text-xs font-medium uppercase tracking-[0.14em] font-['Space_Grotesk'] mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#16E0C4] shadow-[0_0_10px_rgba(22,224,196,0.65)]"></span>
                SignalOS platform
              </div>
<h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-medium text-white tracking-tight font-['Space_Grotesk'] leading-[1.04] max-w-[18ch] mb-5">
                Operational clarity for every signal.
              </h2>
<p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[40rem] mb-7">
                SignalOS captures events, prioritizes intent, routes the right
                workflow, and verifies the outcome giving teams a reliable
                system for turning scattered signals into action.
              </p>
<div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-zinc-500">
<span className="inline-flex items-center gap-2 text-[#16E0C4]">
<span className="w-1.5 h-1.5 rounded-full bg-[#16E0C4]"></span>
                  Live signal intake
                </span>
<span className="w-1 h-1 rounded-full bg-white/15"></span>
<span>Priority routing</span>
<span className="w-1 h-1 rounded-full bg-white/15"></span>
<span>Outcome verification</span>
</div>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-8 lg:pt-6">
<div className="anim-fade-up delay-200">
<h3 className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-medium font-['Space_Grotesk'] mb-4">
                  Platform
                </h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#platform">
                      Overview
                    </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#workflow">
                      Workflow logic
                    </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#outcomes">
                      Trusted outcomes
                    </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#pricing">
                      Pricing
                    </a>
</li>
</ul>
</div>
<div className="anim-fade-up delay-300">
<h3 className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-medium font-['Space_Grotesk'] mb-4">
                  Resources
                </h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                      Documentation
                    </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                      API reference
                    </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                      Integrations
                    </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                      Changelog
                    </a>
</li>
</ul>
</div>
<div className="col-span-2 sm:col-span-1 anim-fade-up delay-400">
<h3 className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 font-medium font-['Space_Grotesk'] mb-4">
                  Company
                </h3>
<ul className="space-y-3">
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                      About
                    </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                      Contact sales
                    </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                      Privacy
                    </a>
</li>
<li>
<a className="text-sm text-zinc-300 hover:text-white transition-colors" href="#">
                      Terms
                    </a>
</li>
</ul>
</div>
</div>
</div>

<div className="pt-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 opacity-100">
<p className="text-sm text-zinc-500">
              © 2026 SignalOS. Built for modern operational teams.
            </p>
<div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</div>
</div>
</div>
</footer>
</main>





    </>
  );
}
