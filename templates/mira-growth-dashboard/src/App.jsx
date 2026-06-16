import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/* Animation on scroll when visible */
(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



        !function () {
          if (!window.UnicornStudio) {
            window.UnicornStudio = { isInitialized: !1 };
            var i = document.createElement("script");
            i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",
            i.onload = function () {
              window.UnicornStudio.isInitialized || (UnicornStudio.init(), window.UnicornStudio.isInitialized = !0)
            },
            (document.head || document.body).appendChild(i)
          }
        }();
      


      window.addEventListener("DOMContentLoaded", () => {
        if (window.lucide) {
          window.lucide.createIcons();
        }

        const yearEl = document.getElementById("year");
        if (yearEl) {
          yearEl.textContent = new Date().getFullYear();
        }

        const engagementCtx = document.getElementById("engagementChart");
        if (engagementCtx) {
          new Chart(engagementCtx, {
            type: "bar",
            data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [{
                label: "Engagement",
                data: [26, 42, 32, 22, 36, 74, 58, 28, 44, 38, 20, 20],
                backgroundColor: function(ctx) {
                  const index = ctx.dataIndex;
                  if (index === 5) {
                    return "rgba(56, 189, 248, 1)";
                  }
                  return "rgba(56, 189, 248, 0.35)";
                },
                borderRadius: 999,
                borderSkipped: false
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: "rgba(15,23,42,0.95)",
                  titleColor: "#5e7eb",
                  bodyColor: "#e5e7eb",
                  borderColor: "rgba(148,163,184,0.4)",
                  borderWidth: 1,
                  displayColors: false
                }
              },
              scales: {
                x: {
                  grid: { display: false },
                  ticks: {
                    color: "rgba(148,163,184,1)",
                    font: { size: 10, family: "Inter" }
                  }
                },
                y: {
                  beginAtZero: true,
                  grid: { color: "rgba(30,64,175,0.35)" },
                  ticks: {
                    color: "rgba(148,163,184,0.8)",
                    font: { size: 9, family: "Inter" },
                    callback: (value) => value + "k"
                  }
                }
              }
            }
          });
        }

        const distributionCtx = document.getElementById("distributionChart");
        if (distributionCtx) {
          new Chart(distributionCtx, {
            type: "doughnut",
            data: {
              labels: ["Enterprise", "SMB", "Startups"],
              datasets: [{
                data: [45, 35, 20],
                backgroundColor: [
                  "rgba(56, 189, 248, 1)",
                  "rgba(59, 130, 246, 1)",
                  "rgba(30, 64, 175, 0.6)"
                ],
                borderWidth: 0,
                hoverOffset: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              cutout: "70%",
              plugins: {
                legend: { display: false },
                tooltip: {
                  backgroundColor: "rgba(15,23,42,0.95)",
                  titleColor: "#e5e7eb",
                  bodyColor: "#e5e7eb",
                  borderColor: "rgba(148,163,184,0.4)",
                  borderWidth: 1
                }
              }
            }
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component w-full top-0 saturate-150 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="bcBYZIStYXwiogchBNHO"></div>

</div>

<header className="z-20 relative [animation:fadeSlideIn_0.8s_ease-out_0.1s_both]">
<div className="flex lg:px-8 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] w-full max-w-6xl mr-auto ml-auto pt-6 pr-4 pl-4 items-center justify-between">

<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[80px] h-[40px] bg-[url(https://cdn.midjourney.com/4fdcbe53-a079-41fc-a33d-b0cd4c903386/0_2.png?w=800&amp;q=80)] bg-cover rounded invert-0" href="#"></a>

<div className="hidden lg:flex items-center space-x-3">
<div className="relative" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<button className="text-[11px] hover:border-white/40 transition-colors font-medium text-white tracking-tight bg-black border-white/20 border pt-2 pr-5 pb-2 pl-5 flex items-center gap-2" onclick="this.nextElementSibling.classList.toggle('hidden')">
              MENU
              <svg className="lucide lucide-chevron-down" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="hidden absolute top-full right-0 mt-2 w-48 bg-slate-900/95 border border-white/20 rounded-md overflow-hidden shadow-lg backdrop-blur z-50">
<a className="block px-4 py-3 text-[11px] font-medium text-white tracking-tight hover:bg-white/10 transition-colors border-b border-white/10" href="#">
                HOME
              </a>
<a className="block px-4 py-3 text-[11px] font-medium text-white tracking-tight hover:bg-white/10 transition-colors border-b border-white/10" href="#">
                FEATURES
              </a>
<a className="block px-4 py-3 text-[11px] font-medium text-white tracking-tight hover:bg-white/10 transition-colors border-b border-white/10" href="#">
                PRICING
              </a>
<a className="block px-4 py-3 text-[11px] font-medium text-white tracking-tight hover:bg-white/10 transition-colors" href="#">
                CONTACT US
              </a>
</div>
</div>
</div>

<button aria-label="Open navigation" className="inline-flex hover:bg-white/10 lg:hidden text-slate-100 bg-white/5 w-9 h-9 border-white/15 border rounded-sm items-center justify-center">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</header>

<main className="z-10 pb-0 relative">

<section className="flex flex-col lg:px-8 lg:pt-20 max-w-6xl mr-auto ml-auto pt-16 pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto">

<div className="flex flex-col [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] mb-6 space-y-3 items-center">
<div className="flex items-center space-x-3">
<div className="flex -space-x-2">
<img alt="Customer avatar" className="h-8 w-8 rounded-full border-2 border-slate-950 object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<img alt="Customer avatar" className="h-8 w-8 rounded-full border-2 border-slate-950 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<img alt="Customer avatar" className="h-8 w-8 rounded-full border-2 border-slate-950 object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<img alt="Customer avatar" className="h-8 w-8 rounded-full border-2 border-slate-950 object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-950 bg-white/10 text-[10px] font-medium text-slate-100">
          +9k
        </div>
</div>
<p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-200/80" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
        Trusted by #10,000 delighted customers
      </p>
</div>
</div>

<div className="space-y-4">
<h1 className="sm:text-5xl lg:text-6xl [animation:fadeSlideIn_0.8s_ease-out_0.3s_both] text-4xl font-semibold text-slate-50 tracking-tight" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
      Designed to elevate your
    </h1>
<div className="flex flex-col sm:flex-row sm:justify-center [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] gap-x-1 gap-y-1 items-center">
<p className="sm:text-5xl lg:text-6xl text-4xl italic text-slate-100 tracking-tight" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
        growth-ready
      </p>
<p className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-slate-50 tracking-tight" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
        momentum
      </p>
</div>
</div>

<p className="sm:text-base [animation:fadeSlideIn_0.8s_ease-out_0.5s_both] text-sm font-normal text-slate-200/80 max-w-xl mt-5 mr-auto ml-auto" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
    Become customer #10,001 and start winning with a dashboard that
    surfaces every growth opportunity in real time.
  </p>

<div className="flex flex-col sm:flex-row sm:justify-center [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] mt-8 gap-x-4 gap-y-4 items-center">
<button className="relative cursor-pointer inline-flex items-center justify-center bg-black/60 hover:bg-black/70 text-xs font-medium text-white tracking-tight pt-3 pb-3 px-8 rounded-md border-none transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>

<div className="pointer-events-none absolute inset-y-[-40px] left-[-2px] w-[2px]" style="background: linear-gradient(
        transparent,
        rgba(255,255,255,0.2) 40px,
        rgba(255,255,255,0.7) 40px,
        white,
        rgba(255,255,255,0.7) calc(100% - 40px),
        rgba(255,255,255,0.2) calc(100% - 40px),
        transparent
      );">
<div className="absolute inset-0 blur-[4px] opacity-80 bg-inherit"></div>
<div className="hover-blur-left absolute inset-0 blur-[10px] opacity-0 bg-inherit"></div>
</div>

<div className="pointer-events-none absolute inset-y-[-40px] right-[-2px] w-[2px]" style="background: linear-gradient(
        transparent,
        rgba(255,255,255,0.2) 40px,
        rgba(255,255,255,0.7) 40px,
        white,
        rgba(255,255,255,0.7) calc(100% - 40px),
        rgba(255,255,255,0.2) calc(100% - 40px),
        transparent
      );">
<div className="absolute inset-0 blur-[4px] opacity-80 bg-inherit"></div>
<div className="hover-blur-right absolute inset-0 blur-[10px] opacity-0 bg-inherit"></div>
</div>

<div className="pointer-events-none absolute left-[-40px] right-[-40px] top-[-2px] h-[2px]" style="background: linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,0.2) 40px,
        rgba(255,255,255,0.7) 40px,
        white,
        rgba(255,255,255,0.7) calc(100% - 40px),
        rgba(255,255,255,0.2) calc(100% - 40px),
        transparent
      );">
<div className="absolute inset-0 blur-[4px] opacity-80 bg-inherit"></div>
<div className="hover-blur-top absolute inset-0 blur-[10px] opacity-0 bg-inherit"></div>
</div>

<div className="pointer-events-none absolute left-[-40px] right-[-40px] bottom-[-2px] h-[2px]" style="background: linear-gradient(
        90deg,
        transparent,
        rgba(255,255,255,0.2) 40px,
        rgba(255,255,255,0.7) 40px,
        white,
        rgba(255,255,255,0.7) calc(100% - 40px),
        rgba(255,255,255,0.2) calc(100% - 40px),
        transparent
      );">
<div className="absolute inset-0 blur-[4px] opacity-80 bg-inherit"></div>
<div className="hover-blur-bottom absolute inset-0 blur-[10px] opacity-0 bg-inherit"></div>
</div>

<div className="hover-radial-glow pointer-events-none absolute inset-[-20px] opacity-0 bg-[radial-gradient(circle,rgba(56,189,248,0.25),transparent_60%)] blur-[18px]"></div>

<span className="relative z-10">BOOK YOUR CALL</span>
<style>
                button:hover .hover-blur-left,
                button:hover .hover-blur-right,
                button:hover .hover-blur-top,
                button:hover .hover-blur-bottom {
                  opacity: 1;
                }
                button:hover .hover-radial-glow {
                  opacity: 1;
                }
              </style>
</button>
</div>

</div>

<div className="w-full mt-14 [animation:fadeSlideIn_0.8s_ease-out_0.7s_both]">
<div className="sm:pr-4 sm:pl-4 bg-gradient-to-br from-black/10 to-black/0 max-w-5xl rounded-3xl mr-auto ml-auto pt-4 pr-2 pb-4 pl-2 relative shadow-[0_24px_80px_rgba(0,0,0,0.8)] backdrop-blur space-y-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '24px', maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}>

<div className="flex bg-slate-900/80 rounded-2xl px-4 py-3 items-center justify-between">
<div className="flex items-center space-x-2">
<span className="h-2.5 w-2.5 rounded-full bg-red-400/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-amber-300/80"></span>
<span className="h-2.5 w-2.5 rounded-full bg-sky-400/80"></span>
<span className="ml-3 text-[11px] font-medium tracking-tight text-slate-300" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                  Mira Growth Console
                </span>
</div>
<div className="flex items-center gap-2 text-slate-400">
<button className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800/80">
<svg className="lucide lucide-sun-medium h-3 w-3" data-lucide="sun-medium" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 3v1"></path><path d="M12 20v1"></path><path d="M3 12h1"></path><path d="M20 12h1"></path><path d="m18.364 5.636-.707.707"></path><path d="m6.343 17.657-.707.707"></path><path d="m5.636 5.636.707.707"></path><path d="m17.657 17.657.707.707"></path></svg>
</button>
<button className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800/80">
<svg className="lucide lucide-bell h-3 w-3" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
</div>
</div>

<div className="grid gap-4 rounded-2xl bg-slate-900/70 p-2 sm:p-4 lg:grid-cols-5">

<div className="space-y-4 rounded-2xl bg-slate-950/80 p-3 sm:p-4 lg:col-span-3">
<div className="flex items-center justify-between">
<div className="">
<h2 className="text-sm font-medium tracking-tight text-slate-100" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      Client Engagement Over Time
                    </h2>
<p className="mt-1 text-[11px] text-slate-400" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      Monitor weekly performance and spot inflection points
                      instantly.
                    </p>
</div>
<button className="inline-flex items-center gap-1 rounded-full bg-slate-800/80 px-3 py-1 text-[10px] font-medium text-slate-100">
<span className="h-1.5 w-1.5 rounded-full bg-sky-400"></span>
                    Live
                  </button>
</div>

<div className="mt-3 rounded-2xl bg-gradient-to-b from-sky-500/10 via-sky-400/5 to-slate-950/80 p-3">
<div className="relative h-52 w-full">
<div className="h-full w-full">
<canvas className="" height="416" id="engagementChart" style={{display: 'block', boxSizing: 'border-box', height: '208px', width: '513.6px'}} width="1027"></canvas>
</div>
</div>
</div>

<div className="grid gap-3 sm:grid-cols-3">
<div className="rounded-xl border border-white/5 bg-slate-950/70 p-3">
<p className="text-[11px] text-slate-400" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      Total Clients
                    </p>
<p className="mt-1 text-lg font-medium tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      248
                    </p>
<p className="mt-1 inline-flex items-center rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-300">
<svg className="lucide lucide-trending-up mr-1 h-3 w-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                      +12%
                    </p>
</div>
<div className="rounded-xl border border-white/5 bg-slate-950/70 p-3">
<p className="text-[11px] text-slate-400" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      Active Projects
                    </p>
<p className="mt-1 text-lg font-medium tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      42
                    </p>
<p className="mt-1 inline-flex items-center rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-300">
<svg className="lucide lucide-sparkles mr-1 h-3 w-3" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                      +5%
                    </p>
</div>
<div className="rounded-xl border border-white/5 bg-slate-950/70 p-3">
<p className="text-[11px] text-slate-400" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      Retention Rate
                    </p>
<p className="mt-1 text-lg font-medium tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      94.5%
                    </p>
<p className="mt-1 inline-flex items-center rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-300">
<svg className="lucide lucide-arrow-up-right mr-1 h-3 w-3" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
                      +23%
                    </p>
</div>
</div>
</div>

<div className="space-y-4 lg:col-span-2">

<div className="rounded-2xl bg-slate-950/80 p-4">
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-sm font-medium tracking-tight text-slate-100" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                        Client Distribution
                      </h3>
<p className="mt-1 text-[11px] text-slate-400" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                        By revenue segment
                      </p>
</div>
<p className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300">
                      50% Growth
                    </p>
</div>
<div className="mt-4 flex items-center gap-4">
<div className="relative h-28 w-28">
<div className="h-full w-full">
<canvas className="" height="224" id="distributionChart" style={{display: 'block', boxSizing: 'border-box', height: '112px', width: '112px'}} width="224"></canvas>
</div>
</div>
<div className="space-y-2 text-[11px] text-slate-300" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<div className="flex items-center gap-2">
<span className="h-1.5 w-4 rounded-full bg-sky-400"></span>
<span className="flex-1 text-slate-300">Enterprise</span>
<span className="text-slate-400">45%</span>
</div>
<div className="flex items-center gap-2">
<span className="h-1.5 w-4 rounded-full bg-blue-400"></span>
<span className="flex-1 text-slate-300">SMB</span>
<span className="text-slate-400">35%</span>
</div>
<div className="flex items-center gap-2">
<span className="h-1.5 w-4 rounded-full bg-slate-600"></span>
<span className="flex-1 text-slate-300">Startups</span>
<span className="text-slate-400">20%</span>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-slate-950 via-sky-950/70 to-blue-900/60 rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-between">
<div className="">
<h3 className="text-sm font-medium tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                        AI Expansion Assistant
                      </h3>
<p className="mt-1 text-[11px] text-slate-300">
                        Instant recommendations for your next move.
                      </p>
</div>
<button className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/70 text-slate-300">
<svg className="lucide lucide-maximize-2 h-3 w-3" data-lucide="maximize-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="m21 3-7 7"></path><path d="m3 21 7-7"></path><path d="M9 21H3v-6"></path></svg>
</button>
</div>
<div className="mt-4 grid gap-3 text-[11px] sm:grid-cols-2" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<button className="flex items-center justify-between rounded-xl bg-slate-950/60 px-3 py-2 text-left text-slate-100 hover:bg-slate-900/70">
<span className="">Show most engaged clients</span>
<svg className="lucide lucide-radar ml-2 h-3.5 w-3.5 text-sky-300" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
</button>
<button className="flex items-center justify-between rounded-xl bg-slate-950/60 px-3 py-2 text-left text-slate-100 hover:bg-slate-900/70">
<span className="">Identify at-risk accounts</span>
<svg className="lucide lucide-alert-circle ml-2 h-3.5 w-3.5 text-amber-300" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</button>
<button className="flex items-center justify-between rounded-xl bg-slate-950/60 px-3 py-2 text-left text-slate-100 hover:bg-slate-900/70">
<span className="">Surface growth plays</span>
<svg className="lucide lucide-sparkles ml-2 h-3.5 w-3.5 text-sky-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
<button className="flex items-center justify-between rounded-xl bg-slate-950/60 px-3 py-2 text-left text-slate-100 hover:bg-slate-900/70">
<span>Forecast next quarter</span>
<svg className="lucide lucide-line-chart ml-2 h-3.5 w-3.5 text-sky-300" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</button>
</div>
<div className="mt-4 flex items-center rounded-full bg-slate-950/70 px-3 py-1.5">
<svg className="lucide lucide-sparkles mr-2 h-3.5 w-3.5 text-sky-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<input className="flex-1 bg-transparent text-[11px] text-slate-100 placeholder:text-slate-500 focus:outline-none" placeholder="Ask anything about your client expansion pipeline..."/>
<button className="ml-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500">
<svg className="lucide lucide-arrow-up-right h-3 w-3 text-slate-950" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="flex flex-col lg:px-8 lg:pt-20 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] max-w-6xl mr-auto ml-auto pt-16 pr-6 pl-6 items-center">
<div className="overflow-hidden sm:px-8 sm:py-10 bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-none pt-8 pr-4 pb-8 pl-4 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '0'}}>

<div className="flex border-slate-900 border-b pb-4 gap-x-4 gap-y-4 items-center justify-between">
<span className="text-[11px] uppercase font-medium text-sky-300 tracking-[0.2em]" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
              OUR PRODUCT · WORKFLOWS
            </span>
<button className="hidden text-[11px] font-medium text-slate-300 hover:text-slate-50 sm:inline-flex items-center gap-1" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
              Read more
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-800/80">
<svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>

<div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
<div className="text-left">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                You control the targets. Mira compounds the growth.
              </h2>
</div>
<p className="sm:text-sm md:text-right md:ml-auto text-xs text-slate-300 max-w-md" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
              Mira watches every signal across your stack, 24/7. No
              spreadsheets, no guesswork—just a clear lane from insight to
              impact.
            </p>
</div>

<div className="grid md:grid-cols-3 mt-10 gap-x-4 gap-y-4 sm:gap-x-6 sm:gap-y-6">

<div className="overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-sm pt-5 pr-5 pb-5 pl-5 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '2px'}}>

<div className="flex items-center justify-between text-[10px] text-slate-400" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<span className="uppercase tracking-[0.16em] text-slate-300">
                  ACTIVE SIGNALS
                </span>
<span className="text-slate-500">#1</span>
</div>

<div className="overflow-hidden sm:h-56 bg-center w-full h-52 bg-cover border-0 rounded-2xl mt-4" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/46310446-fa52-4b6b-a02e-ec8293b13acf/0_2.png?w=800&amp'}}></div>

<h3 className="mt-5 text-sm font-medium tracking-tight text-slate-50">
                Stay informed, always.
              </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
                Get instant alerts when usage spikes, risk behavior appears, or
                expansion intent crosses your threshold.
              </p>
<div className="mt-4 flex items-center gap-2 text-[11px] text-slate-300">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-600">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
                Automated trading-style alerts for your pipeline.
              </div>
</div>

<div className="overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-sm pt-5 pr-5 pb-5 pl-5 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '2px'}}>
<div className="flex items-center justify-between text-[10px] text-slate-400">
<span className="uppercase tracking-[0.16em] text-slate-300">
                  ADVANCED ENGINE
                </span>
<span className="text-slate-500">#2</span>
</div>
<div className="overflow-hidden sm:h-56 bg-center w-full h-52 bg-cover border-0 rounded-2xl mt-4" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/9342fab6-af2f-477a-93c9-7ec9543783ca/0_1.png?w=800&amp'}}></div>
<h3 className="mt-5 text-sm font-medium tracking-tight text-slate-50">
                AI-powered precision.
              </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
                Let Mira handle the split-second decisions—so reps and CSMs stay
                focused on conversations, not configuration.
              </p>
<ul className="mt-4 space-y-1.5 text-[11px] text-slate-300">
<li className="flex items-center gap-2">
<span className="inline-flex h-1.5 bg-sky-400 w-4 rounded-full"></span>
                  Real-time health &amp; expansion scoring
                </li>
<li className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-4 rounded-full bg-blue-400"></span>
                  SLA-aware task generation
                </li>
</ul>
</div>

<div className="overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-500/0 rounded-sm pt-5 pr-5 pb-5 pl-5 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '2px'}}>
<div className="flex items-center justify-between text-[10px] text-slate-400">
<span className="uppercase tracking-[0.16em] text-slate-300">
                  REAL-TIME TRIGGERS
                </span>
<span className="text-slate-500">#3</span>
</div>
<div className="overflow-hidden sm:h-56 bg-center w-full h-52 bg-cover border-0 rounded-2xl ring-0 mt-4" style={{backgroundImage: 'url(\'https://cdn.midjourney.com/bad59b7f-e21e-48bd-910b-ca59e24c2644/0_0.png?w=800&amp'}}></div>
<h3 className="mt-5 text-sm font-medium tracking-tight text-slate-50">
                Tailor your experience.
              </h3>
<p className="mt-2 text-xs sm:text-sm text-slate-300">
                Customize triggers, thresholds, and owners to match how your
                team really works—no engineering ticket required.
              </p>
<div className="mt-4 flex items-center gap-2 text-[11px] text-slate-300">
<span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-slate-600">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</span>
                Multi-channel actions: tasks, emails, webhooks, and more.
              </div>
</div>
</div>

<div className="grid gap-4 text-[11px] sm:grid-cols-3 text-slate-400 border-slate-900 border-t mt-8 pt-4 gap-x-4 gap-y-4">
<div className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<p className="">
                Automated workflows keep your revenue motion running—even while
                you sleep.
              </p>
</div>
<div className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-blue-400"></span>
<p className="">
                SOC2-ready, enterprise secure, and live in under 14 days for
                most teams.
              </p>
</div>
<div className="flex items-start gap-2">
<span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<p className="">
                Trusted by growth teams at 100+ modern B2B companies.
              </p>
</div>
</div>
</div>
</section>
<section className="flex flex-col lg:px-8 lg:pt-20 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-6xl mr-auto ml-auto pt-20 pr-4 pl-4">
<div className="overflow-hidden sm:px-8 sm:py-10 bg-center bg-slate-950/95 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ebff6d5-cc57-4279-972f-e83f6c19894e_1600w.jpg)] bg-cover rounded-none pt-8 pr-4 pb-8 pl-4 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '0'}}>

<div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
<span className="text-[11px] uppercase font-medium text-sky-300 tracking-[0.2em]" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
              REVIEWS FROM REAL PEOPLE
            </span>
<button className="hidden text-[11px] font-medium text-slate-300 hover:text-slate-50 sm:inline-flex items-center gap-1" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
              Read more
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-800/80">
<svg className="h-2.5 w-2.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>

<div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,2.2fr)_minmax(0,1.4fr)] items-start">
<div className="text-left">
<h2 className="sm:text-3xl lg:text-4xl text-2xl font-semibold text-slate-50 tracking-tight" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                What our customers are saying
              </h2>
</div>
<p className="sm:text-sm md:ml-auto md:text-right text-xs text-slate-300 max-w-md ml-auto" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
              Teams across product, revenue, and customer success rely on Mira
              to uncover opportunities faster, reduce risk earlier, and turn
              insight into action with confidence.
            </p>
</div>

<div className="grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] bg-slate-950/70 border-white/5 border rounded-sm mt-8 mb-8 pt-6 pr-4 pb-6 pl-4 sm:pt-8 sm:pr-8 sm:pb-8 sm:pl-8 gap-x-6 gap-y-6 sm:gap-x-10 sm:gap-y-10">

<div className="flex flex-col justify-center">
<p className="mt-4 text-xl font-medium tracking-tight text-slate-50 sm:text-2xl" style={{fontFamily: '\'Playfair Display\', ui-serif, Georgia, \'Times New Roman\', serif'}}>
                “Mira turned our scattered client data into a single growth map.
                We spotted 3 expansion plays in the first week and closed all of
                them within the quarter.”
              </p>
<div className="mt-6 flex items-center gap-3">
<div className="h-9 w-9 overflow-hidden rounded-full bg-slate-700">
<img alt="Customer" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="">
<p className="text-sm font-medium text-slate-100" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                    Head of Customer Success
                  </p>
<p className="text-[11px] text-slate-400" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                    B2B SaaS, Series C · +18% NRR in 90 days
                  </p>
</div>
</div>
</div>

<div className="sm:p-6 bg-[#000000]/60 border-white/10 border rounded-sm pt-5 pr-5 pb-5 pl-5 space-y-5" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>

<div className="flex items-center justify-between gap-3">
<p className="text-[11px] font-medium tracking-[0.18em] uppercase text-slate-300">
                  Impact at a glance
                </p>
<div className="hidden sm:inline-flex items-center gap-2 text-[11px] text-slate-400"></div>
</div>

<div className="grid gap-4 sm:grid-cols-3">

<div className="space-y-1">
<p className="text-[11px] text-slate-400">
                    Net Revenue Retention
                  </p>
<p className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-sky-300">
                    +18%
                  </p>
<p className="text-[11px] text-slate-500">within 90 days</p>
</div>

<div className="space-y-1 sm:border-l sm:border-white/5 sm:pl-5">
<p className="text-[11px] text-slate-400">Expansion wins</p>
<p className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-sky-300">
                    3.7×
                  </p>
<p className="text-[11px] text-slate-500">per quarter</p>
</div>

<div className="space-y-1 sm:border-l sm:border-white/5 sm:pl-5">
<p className="text-[11px] text-slate-400">Time to insight</p>
<p className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-sky-300">
                    −74%
                  </p>
<p className="text-[11px] text-slate-500">faster decisions</p>
</div>
</div>

<div className="pt-2">
<button className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-5 py-2.5 text-[11px] font-medium tracking-tight text-slate-950 shadow-[0_14px_40px_rgba(56,189,248,0.45)] hover:from-sky-300 hover:to-blue-400 transition-colors">
                  VIEW FULL CASE STUDY
                  <svg className="ml-2 h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,2.2fr)] mt-8 gap-x-8 gap-y-8">

<div className="flex flex-col gap-x-0 gap-y-0 justify-between">
<div className="space-y-4">
<div className="flex items-center gap-3 text-slate-400"></div>
</div>
<div className="flex items-center gap-4 text-[11px] text-slate-400" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<button aria-label="Previous testimonial" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-200 hover:bg-slate-900">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="flex flex-1 items-center gap-2">
<span className="h-[2px] w-10 rounded-full bg-sky-400"></span>
<span className="h-[2px] flex-1 rounded-full bg-slate-700"></span>
</div>
<button aria-label="Next testimonial" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-200 hover:bg-slate-900">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>

</div>
</div>
</section>


<section className="flex flex-col lg:px-8 lg:pt-20 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-6xl mr-auto ml-auto pt-20 pr-4 pl-4">
<div className="sm:px-10 sm:py-10 lg:py-12 bg-gradient-to-br from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-none pt-8 pr-4 pb-8 pl-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '0'}}>
<div className="grid gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1.1fr)_minmax(0,1.1fr)] items-stretch">

<div className="flex flex-col justify-between gap-8">
<div className="">
<span className="text-[11px] uppercase font-medium text-sky-300 tracking-[0.2em]" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                  PRICING
                </span>
<h2 className="mt-4 text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                  Powerful pricing for expansion-first teams
                </h2>
<p className="mt-4 max-w-md text-sm text-slate-300" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                  Start with the plan that matches your current motion, then
                  grow into automation, guided playbooks, and deep forecasting
                  as your team scales with Mira.
                </p>
</div>

<div className="inline-flex items-center gap-3 text-[11px] text-slate-400" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<span className="text-slate-400">Monthly</span>
<button className="relative inline-flex h-6 w-12 items-center rounded-full bg-slate-900/80 border border-slate-700 px-0.5 transition-colors">
<span className="absolute left-0.5 h-5 w-5 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 shadow-md shadow-sky-500/50 transition-transform"></span>
<span className="sr-only">Toggle billing</span>
</button>
<span className="flex items-center gap-1">
<span className="text-slate-100">Yearly</span>
<span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] text-sky-300">
                    Save 20%
                  </span>
</span>
</div>
</div>

<div className="flex flex-col border-t lg:border-l lg:border-t-0 border-white/5 pt-6 lg:pt-0 lg:pl-8">
<div className="flex-1 flex flex-col">
<div className="">
<p className="text-lg font-medium tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                    Launch
                  </p>
<p className="mt-2 text-sm text-slate-400 max-w-xs" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                    Ideal for lean CS and RevOps teams validating a repeatable
                    expansion motion.
                  </p>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      $79
                    </span>
<span className="text-[11px] text-slate-400" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      /month
                    </span>
</div>
</div>
<div className="mt-6 border-t border-white/5 pt-5">
<button className="flex hover:bg-slate-900 transition-all text-sm font-medium text-slate-50 tracking-tight bg-slate-900/85 w-full rounded-sm pt-3 pr-4 pb-3 pl-4 items-center justify-between" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<span>Get started with Launch</span>
<span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-slate-100">
<svg className="h-3.5 w-3.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>
<ul className="mt-6 space-y-2 text-[12px] text-slate-300" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<li className="flex items-center gap-2">
<span className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-500 text-[10px] text-slate-200">
<svg className="h-2.5 w-2.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span>Up to 500 active clients</span>
</li>
<li className="flex items-center gap-2 text-slate-500">
<span className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-600 text-[10px] text-slate-400">
<svg className="h-2.5 w-2.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</span>
<span className="">AI Expansion Assistant</span>
</li>
</ul>
</div>

<div className="flex flex-col border-t lg:border-l lg:border-t-0 border-white/5 pt-6 lg:pt-0 lg:pl-8">
<div className="flex-1 flex flex-col">
<div className="">
<div className="flex items-center justify-between gap-2">
<p className="text-lg font-medium tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      Scale
                    </p>
<span className="inline-flex items-center rounded-full bg-sky-500/15 px-2.5 py-1 text-[10px] font-medium text-sky-200" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      Most popular
                    </span>
</div>
<p className="mt-2 text-sm text-slate-400 max-w-xs" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                    For revenue teams that need automation, guided playbooks,
                    and forecasting in one workspace.
                  </p>
<div className="mt-6 flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      $179
                    </span>
<span className="text-[11px] text-slate-400" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
                      /month
                    </span>
</div>
</div>
<div className="mt-6 border-t border-white/5 pt-5">
<button className="flex hover:bg-white transition-all shadow-black/60 text-sm font-medium text-slate-950 tracking-tight bg-slate-50 w-full rounded-sm pt-3 pr-4 pb-3 pl-4 shadow-lg items-center justify-between" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<span className="">Talk to sales about Scale</span>
<span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-slate-50">
<svg className="h-3.5 w-3.5" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>
<ul className="mt-6 space-y-2 text-[12px] text-slate-300" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<li className="flex items-center gap-2">
<span className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-200 bg-slate-900 text-[10px] text-slate-50">
<svg className="h-2.5 w-2.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="">
                    Up to 5,000 active clients and workspaces
                  </span>
</li>
<li className="flex items-center gap-2">
<span className="flex h-4 w-4 items-center justify-center rounded-full border border-slate-200 bg-slate-900 text-[10px] text-slate-50">
<svg className="h-2.5 w-2.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</span>
<span className="">
                    AI Expansion Assistant and guided playbooks
                  </span>
</li>
</ul>
</div>
</div>

<div className="mt-8 flex flex-col gap-3 border-t border-slate-900 pt-4 text-[11px] text-slate-400 sm:flex-row sm:items-center sm:justify-between" style={{fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', sans-serif'}}>
<p className="">
              No setup fees · SOC2-ready · White-glove onboarding for Scale
              customers.
            </p>
<div className="flex items-center gap-2">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400"></span>
<span className="">
                Ask us about custom Enterprise pricing for multi-region data
                residency.
              </span>
</div>
</div>
</div>
</section>

<section className="flex flex-col lg:px-8 lg:pt-20 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-6xl mr-auto ml-auto pt-20 pr-4 pl-4">
<div className="sm:px-10 sm:py-10 lg:py-12 bg-gradient-to-br from-blue-500/10 via-blue-500/0 to-blue-500/10 w-full rounded-none pt-8 pr-4 pb-8 pl-4" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(59, 130, 246, 0))', -BorderRadiusBefore: '0'}}>

<footer className="text-[11px] uppercase font-medium text-sky-300 tracking-[0.2em] w-full">
<div className="flex flex-col items-center">

<div className="grid grid-cols-1 overflow-hidden sm:grid-cols-2 lg:grid-cols-4 bg-slate-950/80 w-full border-slate-800/80 border rounded-sm mt-2">

<a className="flex items-center justify-between sm:border-b-0 sm:border-r lg:border-b-0 hover:bg-slate-900/60 transition-colors border-slate-800/80 border-b pt-4 pr-5 pb-4 pl-5" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15">
<svg className="h-3.5 w-3.5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.8 8.001a2.503 2.503 0 0 0-1.76-1.77C18.41 5.75 12 5.75 12 5.75s-6.41 0-8.04.48a2.503 2.503 0 0 0-1.76 1.77C1.71 9.64 1.71 12 1.71 12s0 2.36.49 3.999c.24.9.95 1.6 1.86 1.85 1.63.48 7.94.48 7.94.48s6.41 0 8.04-.48a2.503 2.503 0 0 0 1.76-1.77C22.29 14.36 22.29 12 22.29 12s0-2.36-.49-3.999Z"></path>
<path className="text-slate-950" d="M10 15.15 15 12 10 8.85v6.3Z"></path>
</svg>
</span>
<span className="text-sm font-medium tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui'}}>
                      YouTube
                    </span>
</div>
<span className="text-slate-400">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>

<a className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 sm:border-b-0 lg:border-r hover:bg-slate-900/60 transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15">
<span className="text-[11px] font-medium text-slate-50">
                        X
                      </span>
</span>
<span className="text-sm font-medium tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui'}}>
                      Twitter
                    </span>
</div>
<span className="text-slate-400">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>

<a className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 sm:border-b-0 sm:border-r hover:bg-slate-900/60 transition-colors" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="5" width="18" x="3" y="3"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</span>
<span className="text-sm font-medium tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui'}}>
                      Instagram
                    </span>
</div>
<span className="text-slate-400">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>

<a className="flex items-center justify-between sm:border-t-0 hover:bg-slate-900/60 transition-colors border-slate-800/80 border-t pt-4 pr-5 pb-4 pl-5" href="#">
<div className="flex items-center gap-3">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15">
<span className="text-[10px] font-medium tracking-[0.16em] uppercase text-slate-50">
                        in
                      </span>
</span>
<span className="text-sm font-medium tracking-tight text-slate-50" style={{fontFamily: 'Inter, system-ui'}}>
                      LinkedIn
                    </span>
</div>
<span className="text-slate-400">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</a>
</div>

<div className="mt-10 grid gap-6 sm:gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] w-full">

<div className="flex flex-col justify-between gap-6">
<div className="">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[80px] h-[40px] bg-[url(https://cdn.midjourney.com/4fdcbe53-a079-41fc-a33d-b0cd4c903386/0_2.png?w=800&amp;q=80)] bg-cover rounded" href="#"></a>
<p className="mt-5 max-w-sm text-sm text-slate-300" style={{fontFamily: 'Inter, system-ui'}}>
                      In the new era of expansion, Mira helps revenue teams look
                      ahead with certainty—connecting every client signal to the
                      next best move.
                    </p>
</div>

<form className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
<div className="flex-1">
<label className="sr-only" htmlFor="mira-footer-email">
                        Email
                      </label>
<div className="rounded-md bg-slate-950 border border-white/10 flex items-center px-3 py-2">
<input className="w-full bg-transparent text-[13px] text-slate-100 placeholder:text-slate-500 focus:outline-none" id="mira-footer-email" placeholder="name@email.com" style={{fontFamily: 'Inter, system-ui'}} type="email"/>
</div>
</div>
<button className="inline-flex items-center justify-center rounded-md border border-white/10 bg-slate-900 px-4 py-2 text-[11px] font-medium tracking-tight text-slate-50 hover:bg-slate-50 hover:text-slate-900 transition-colors" style={{fontFamily: 'Inter, system-ui'}} type="submit">
                      SUBSCRIBE
                    </button>
</form>
</div>

<div className="grid gap-8 text-sm text-slate-200 sm:grid-cols-3" style={{fontFamily: 'Inter, system-ui'}}>
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      Product
                    </p>
<ul className="mt-3 space-y-2 text-[13px]">
<li>
<a className="hover:text-slate-50" href="#">Overview</a>
</li>
<li>
<a className="hover:text-slate-50" href="#">Playbooks</a>
</li>
</ul>
</div>
<div>
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      Resources
                    </p>
<ul className="mt-3 space-y-2 text-[13px]">
<li><a className="hover:text-slate-50" href="#">Docs</a></li>
<li>
<a className="hover:text-slate-50" href="#">
                          API Reference
                        </a>
</li>
</ul>
</div>
<div className="">
<p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                      Company
                    </p>
<ul className="mt-3 space-y-2 text-[13px]">
<li><a className="hover:text-slate-50" href="#">About</a></li>
<li>
<a className="hover:text-slate-50" href="#">Careers</a>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-10 border-t border-slate-900 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[11px] text-slate-500 w-full" style={{fontFamily: 'Inter, system-ui'}}>
<p>
                  ©
                  <span id="year">2025</span>
                  Mira Technologies Inc. All rights reserved.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="hover:text-slate-300" href="#">Imprint</a>
<a className="hover:text-slate-300" href="#">Privacy</a>
<a className="hover:text-slate-300" href="#">Cookies</a>
<a className="hover:text-slate-300" href="#">Accessibility</a>
<a className="hover:text-slate-300" href="#">Terms</a>
</div>
</div>
</div>
</footer>

</div>
</section>

<div className="pointer-events-none fixed bottom-4 right-4 z-30 hidden max-w-xs flex-col space-y-2 sm:flex">
<div className="flex flex-col items-end space-y-2">
<button aria-label="Chat" className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-slate-950 shadow-lg shadow-sky-500/40">
<svg className="lucide lucide-message-circle h-4 w-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</button>
</div>
</div>
</main>


    </>
  );
}
