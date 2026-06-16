import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Mobile nav toggle
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });
    }

    // Chart.js - simple effort reduction chart (colors adjusted for light mode)
    const ctx = document.getElementById('effortChart');
    if (ctx && window.Chart) {
      const chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Screening', 'Evaluation', 'IC Prep', 'Monitoring', 'Reporting'],
          datasets: [
            {
              label: 'Baseline',
              data: [100, 100, 100, 100, 100],
              borderColor: '#cbd5f5',
              backgroundColor: 'rgba(148,163,184,0.18)',
              tension: 0.35,
              borderWidth: 1.5
            },
            {
              label: 'With Arc',
              data: [45, 40, 36, 55, 48],
              borderColor: '#0f172a',
              backgroundColor: 'rgba(15,23,42,0.12)',
              tension: 0.35,
              borderWidth: 2
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: {
              enabled: true,
              backgroundColor: '#0f172a',
              borderColor: '#e5e7eb',
              borderWidth: 1,
              padding: 8,
              titleColor: '#f9fafb',
              bodyColor: '#e5e7eb'
            }
          },
          scales: {
            x: {
              ticks: { color: '#94a3b8', font: { size: 10 } },
              grid: { display: false }
            },
            y: {
              beginAtZero: true,
              ticks: { display: false },
              grid: { color: 'rgba(148,163,184,0.35)', drawBorder: false }
            }
          }
        }
      });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 nav-blur">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center space-x-2 group" href="#top">
<div className="relative flex h-7 w-auto items-center">
<span className="text-xl tracking-tight font-semibold text-slate-900 font-geist" style={{}}>
                brightriver.ai
              </span>
</div>
</a>

<nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors font-geist" href="#features" style={{}}>Features</a>
<a className="hover:text-slate-900 transition-colors font-geist" href="#benefits" style={{}}>Benefits</a>
<a className="hover:text-slate-900 transition-colors font-geist" href="#security" style={{}}>Security</a>
<a className="hover:text-slate-900 transition-colors font-geist" href="#about" style={{}}>About us</a>
<a className="hover:text-slate-900 transition-colors font-geist" href="https://medium.com/@brightriver_ai/" style={{}} target="_blank">Blog</a>
<a className="hover:text-slate-900 transition-colors font-geist" href="#contact" style={{}}>Contact us</a>
</nav>

<div className="hidden md:flex items-center space-x-3">
<a className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors font-geist" href="#contact" style={{}}>
              Schedule a demo
            </a>
<a className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1.5 text-sm font-medium text-slate-50 shadow-sm hover:bg-slate-800 transition-colors font-geist" href="#hero-form" style={{}}>
              Start Trial
            </a>
</div>

<button className="md:hidden inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 p-2 text-slate-700 hover:text-slate-900 hover:border-slate-400 transition-colors" id="mobile-menu-button">
<i className="lucide-menu h-5 w-5"></i>
</button>
</div>

<div className="md:hidden hidden border-t border-slate-200 bg-white/95" id="mobile-menu">
<nav className="flex flex-col space-y-1 py-3 text-sm font-medium text-slate-800">
<a className="px-2 py-1.5 rounded-lg hover:bg-slate-100 font-geist" href="#features" style={{}}>Features</a>
<a className="px-2 py-1.5 rounded-lg hover:bg-slate-100 font-geist" href="#benefits" style={{}}>Benefits</a>
<a className="px-2 py-1.5 rounded-lg hover:bg-slate-100 font-geist" href="#security" style={{}}>Security</a>
<a className="px-2 py-1.5 rounded-lg hover:bg-slate-100 font-geist" href="#about" style={{}}>About us</a>
<a className="px-2 py-1.5 rounded-lg hover:bg-slate-100 font-geist" href="https://medium.com/@brightriver_ai/" style={{}} target="_blank">Blog</a>
<a className="px-2 py-1.5 rounded-lg hover:bg-slate-100 font-geist" href="#contact" style={{}}>Contact us</a>
<div className="flex items-center justify-between pt-2">
<a className="text-xs font-medium text-slate-700 hover:text-slate-900 font-geist" href="#contact" style={{}}>Schedule a demo</a>
<a className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-slate-50 shadow-sm hover:bg-slate-800 transition-colors font-geist" href="#hero-form" style={{}}>
                Start Trial
              </a>
</div>
</nav>
</div>
</div>
</header>
<main className="flex-1" id="top">

<section className="relative overflow-hidden">
<div className="pointer-events-none absolute inset-0">
<div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-slate-200/80 blur-3xl"></div>
<div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-slate-200/80 blur-3xl"></div>
</div>
<div className="flex flex-col sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:py-24 max-w-6xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 gap-x-16 gap-y-16">

<div className="relative z-10 max-w-xl space-y-8">
<div className="inline-flex items-center space-x-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-medium text-slate-700">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span className="font-geist" style={{}}>New · Arc private markets platform</span>
</div>
<div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 font-medium font-playfair" style={{}}>
                Powering private markets
              </h1>
<p className="mt-5 text-base sm:text-lg text-slate-700 max-w-xl font-geist" style={{}}>
<span className="text-slate-900 font-medium font-geist" style={{}}>Introducing Arc.</span>
                An institutional AI platform for private markets so investors can focus on performance, not paperwork.
              </p>
</div>

<div className="space-y-3" id="hero-form">
<form className="flex flex-col gap-3 sm:flex-row sm:items-center">
<div className="flex-1">
<label className="sr-only font-geist" htmlFor="work-email" style={{}}>Work email</label>
<div className="relative">
<input className="block w-full rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20" id="work-email" placeholder="Enter your work email" type="email"/>
<div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
<i className="lucide-mail h-4 w-4"></i>
</div>
</div>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-50 shadow-sm hover:bg-slate-800 transition-colors w-full sm:w-auto" type="submit">
<span className="font-geist" style={{}}>Start Trial</span>
<i className="lucide-arrow-right h-4 w-4 ml-2"></i>
</button>
</form>
<p className="text-xs text-slate-500 font-geist" style={{}}>
                No obligation trial. Designed for institutional private markets investors.
              </p>
</div>

<dl className="grid grid-cols-2 gap-6 pt-4 sm:max-w-md">
<div>
<dt className="text-xs text-slate-500 font-geist" style={{}}>Designed for</dt>
<dd className="mt-1 text-base font-medium text-slate-900 font-geist" style={{}}>PE · VC · Credit Funds</dd>
</div>
<div>
<dt className="text-xs text-slate-500 font-geist" style={{}}>Coverage</dt>
<dd className="mt-1 text-base font-medium text-slate-900 font-geist" style={{}}>Full fund lifecycle</dd>
</div>
</dl>
</div>

<div className="relative z-10 flex-1">
<div className="gradient-border shadow-xl shadow-slate-200">
<div className="gradient-border-inner p-6 sm:p-8 lg:p-10">
<div className="flex flex-col gap-6 lg:flex-row lg:items-start gap-x-6 gap-y-6">

<div className="relative mx-auto flex h-52 w-52 items-center justify-center rounded-full bg-white shadow-inner shadow-slate-300 border border-slate-300">
<div className="absolute inset-6 rounded-full border border-slate-300/60"></div>
<div className="absolute inset-11 rounded-full border border-slate-300/60"></div>
<div className="absolute inset-16 rounded-full border border-slate-200/80"></div>
<div className="absolute inset-1">
<svg className="h-full w-full opacity-70" viewbox="0 0 182 183">
<g className="" transform="translate(-138 -269)">
<g className="">
<g className="">
<g className="">
<g className="">
<path className="" d="M146.147 159.501C177.376 157.651 204.192 181.467 206.043 212.695L208.673 257.077C210.523 288.306 186.708 315.122 155.479 316.973L110.874 319.616C79.6458 321.467 52.8298 297.651 50.979 266.422L48.3487 222.04C46.4984 190.812 70.3141 163.995 101.543 162.145Z" fill="none" stroke="#94a3b8" strokeWidth="3.5" transform="matrix(1 0 0 1.00552 100.848 120.118)"></path>
<path className="" d="M87.0606 168.834C108.718 146.259 144.575 145.515 167.15 167.172L199.233 197.951C221.808 219.608 222.551 255.466 200.894 278.04L169.961 310.284C148.304 332.859 112.446 333.603 89.8714 311.945L57.7887 281.167C35.2139 259.509 34.4701 223.652 56.1273 201.077Z" fill="none" stroke="#94a3b8" strokeWidth="3.5" transform="matrix(1 0 0 1.00552 100.848 120.118)"></path>
<path className="" d="M167.355 183.18C191.781 191.706 204.671 218.42 196.144 242.846L184.026 277.56C175.499 301.986 148.786 314.875 124.36 306.349L89.4721 294.17C65.046 285.644 52.1568 258.93 60.6834 234.504L72.801 199.79C81.3276 175.364 108.041 162.475 132.468 171.002Z" fill="none" stroke="#94a3b8" strokeWidth="3.5" transform="matrix(1 0 0 1.00552 100.848 120.118)"></path>
<path className="" d="M119.284 171.497C143 161.159 170.607 172.004 180.946 195.72L195.639 229.424C205.978 253.14 195.133 280.747 171.417 291.086L137.543 305.853C113.827 316.191 86.2203 305.347 75.8816 281.631L61.1886 247.926C50.8499 224.21 61.6944 196.603 85.4107 186.264Z" fill="none" stroke="#94a3b8" strokeWidth="3.5" transform="matrix(1 0 0 1.00552 100.848 120.118)"></path>
<path className="" d="M174.277 208.5C190.082 222.071 191.893 245.884 178.322 261.689L159.036 284.15C145.465 299.954 121.652 301.765 105.847 288.194L83.2742 268.811C67.4695 255.241 65.6591 231.427 79.2296 215.623L98.5159 193.162C112.086 177.358 135.9 175.547 151.704 189.117Z" fill="none" stroke="#94a3b8" strokeWidth="3.5" transform="matrix(1 0 0 1.00552 100.848 120.118)"></path>
<path d="M141.676 185.615C162.492 184.835 180 201.078 180.78 221.895L181.888 251.479C182.668 272.295 166.425 289.803 145.608 290.583L115.876 291.697C95.0592 292.476 77.5514 276.233 76.7719 255.417L75.6633 225.833C74.8839 205.016 91.1268 187.508 111.944 186.729Z" fill="none" stroke="#94a3b8" strokeWidth="3.5" transform="matrix(1 0 0 1.00552 100.848 120.118)"></path>
</g>
</g>
</g>
</g>
</g>
</svg>
</div>
<div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 shadow-lg shadow-slate-300/40">
<span className="text-xs font-semibold tracking-tight text-slate-50 font-geist" style={{}}>Arc</span>
</div>
</div>

<div className="flex-1 space-y-4">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500 font-geist" style={{}}>Arc overview</p>
<p className="mt-1 text-sm text-slate-700 font-geist" style={{}}>Private markets knowledge graph</p>
</div>
<div className="flex -space-x-2">
<img alt="Team" className="h-7 w-7 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="Team" className="h-7 w-7 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
<img alt="Team" className="h-7 w-7 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?auto=format&amp;fit=crop&amp;w=80&amp;q=80"/>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-3">
<div className="flex items-center justify-between text-xs text-slate-500">
<div className="flex items-center space-x-1.5">
<i className="lucide-database h-3.5 w-3.5 text-slate-700"></i>
<span className="font-geist" style={{}}>Deals indexed</span>
</div>
<span className="text-emerald-600 font-geist" style={{}}>+18% QoQ</span>
</div>
<p className="mt-1 text-lg font-medium text-slate-900 font-geist" style={{}}>12,480</p>
<div className="mt-3 h-20">
<div className="h-full w-full">
<div className="h-full w-full flex items-end space-x-1">
<div className="w-full rounded-full bg-slate-200">
<div className="h-6 w-full rounded-full bg-slate-900"></div>
</div>
<div className="w-full rounded-full bg-slate-200">
<div className="h-9 w-full rounded-full bg-slate-900"></div>
</div>
<div className="w-full rounded-full bg-slate-200">
<div className="h-12 w-full rounded-full bg-slate-900"></div>
</div>
<div className="w-full rounded-full bg-slate-200">
<div className="h-16 w-full rounded-full bg-slate-900"></div>
</div>
<div className="w-full rounded-full bg-slate-200">
<div className="h-20 w-full rounded-full bg-slate-900"></div>
</div>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3 text-xs">
<div className="rounded-xl border border-slate-200 bg-white p-3">
<div className="flex items-center justify-between">
<span className="text-slate-500 font-geist" style={{}}>Avg. IC prep time</span>
<i className="lucide-clock-3 h-3.5 w-3.5 text-slate-700"></i>
</div>
<p className="mt-1 text-lg font-medium text-slate-900 font-geist" style={{}}>-64%</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-3">
<div className="flex items-center justify-between">
<span className="text-slate-500 font-geist" style={{}}>Automated analyses</span>
<i className="lucide-sparkles h-3.5 w-3.5 text-slate-700"></i>
</div>
<p className="mt-1 text-lg font-medium text-slate-900 font-geist" style={{}}>3,240</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="features">
<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
<div className="flex flex-col gap-12 lg:flex-row lg:items-start">
<div className="max-w-md">
<p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 font-geist" style={{}}>Features</p>
              &lt;2 class="mt-3 text-3xl sm:text-4xl tracking-tight text-slate-900 font-medium font-playfair style={{}}&gt;
                Clear insights for high conviction decisions
              
              <p className="mt-4 text-sm sm-base text-slate-700 font-geist" style={{}}>
                Arc consolidates the unique experience and know-how of each investor. The unlocks insights from diverse sources of information across past and present investment opportunities and builds proprietary information advantages.
              </p>
<div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">

<article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p- hover:border-slate-400 transition-colors">
<div className="flex items-center justify-between">
<h3 classtext-base="" font-geist"="" font-medium="" style={{}} text-slate-900="">Analyse deals in minutes</h3>
<span bg-white="" border="" border-slate-200"="" classinline-flex="" h-8="" items-center="" justify-center="" rounded-full="" text-slate-700="" w-8="">
<i className="lucide-search h-4 w-4"></i>
</span>
</div>
<p className="mt-3 text-sm text-slate-700 font-geist" style={{}}>
                  Access and visualize your firm's comprehensive knowledge base, including documents, data sets, and historical records. Integrate proprietary and third-party data, cross-reference deals, managers, and companies over time, and export your findings in multiple formats.
                </p>
</article>

<article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-slate-400 transition-colors">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 font-geist" style={{}}>Automate detailed analysis and reporting</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200">
<i className="lucide-sparkles h-4 w-4"></i>
</span>
</div>
<p className="mt-3 text-sm text-slate-700 font-geist" style={{}}>
                  Upload sample analyses and Arc's automation agents generate customised analysis. Templates can be shared across the organization for a consistent, transparent, and reliable foundation for AI-driven investment and portfolio management.
                </p>
</article>

<article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-slate-400 transition-colors">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 font-geist" style={{}}>Collaborate seamlessly to make decisions</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200">
<i className="lucide-users h-4 w-4"></i>
</span>
</div>
<p className="mt-3 text-sm text-slate-700 font-geist" style={{}}>
                  Bring investment teams together to co-create and review analysis in real-time. Collectively update and comment upon AI-generated outputs and track the evolution of each deal over time.
                </p>
</article>

<article className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-slate-400 transition-colors">
<div className="flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 font-geist" style={{}}>Unlock the full potential of your proprietary knowledge</h3>
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200">
<i className="lucide-key-square h-4 w-4"></i>
</span>
</div>
<p className="mt-3 text-sm text-slate-700 font-geist" style={{}}>
                  Consolidate information locked in unstructured documents, legacy file systems, and large data files. Integrate past and present data on investments, processes, and outcomes into a single, defensible information advantage.
                </p>
</article>
</div>
</div>
</div>
</div></section>

<section className="border-t border-slate-200 bg-slate-50">
<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
<div className="flex flex-col gap-10 lg:flex-row lg:items-start">
<div className="max-w-md">
<p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 font-geist" style={{}}>Agents</p>
<h2 className="mt-3 text-3xl tracking-tight text-slate-900 font-medium font-playfair" style={{}}>
                Your deal team's intelligence, supercharged by AI agents designed for private markets
              </h2>
<p className="mt-4 text-sm sm:text-base text-slate-700 font-geist" style={{}}>
                Arc orchestrates specialized agents that understand private markets workflows — from cross-deal comparisons to quantitative analysis and external data enrichment.
              </p>
</div>
<div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2">

<article className="rounded-2xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="font-medium text-slate-700 font-geist" style={{}}>01</span>
<span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-700 border border-slate-200 font-geist" style={{}}>
<i className="lucide-square-split-horizontal h-3 w-3 mr-1"></i>
                    Deal comparison
                  </span>
</div>
<h3 className="mt-2 text-sm font-medium text-slate-900 font-geist" style={{}}>Cross Deal Agent</h3>
<p className="mt-2 text-xs sm:text-sm text-slate-700 font-geist" style={{}}>
                  Instantly compare deals side-by-side to surface differences and opportunities across structures, sponsors, and performance.
                </p>
</article>

<article className="rounded-2xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="font-medium text-slate-700 font-geist" style={{}}>02</span>
<span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-700 border border-slate-200 font-geist" style={{}}>
<i className="lucide-globe-2 h-3 w-3 mr-1"></i>
                    Research
                  </span>
</div>
<h3 className="mt-2 text-sm font-medium text-slate-900 font-geist" style={{}}>Web Search Agent</h3>
<p className="mt-2 text-xs sm:text-sm text-slate-700 font-geist" style={{}}>
                  From quick answers to deep dives, gather insights from thousands of curated web sources while maintaining institutional controls.
                </p>
</article>

<article className="rounded-2xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="font-medium text-slate-700 font-geist" style={{}}>03</span>
<span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-700 border border-slate-200 font-geist" style={{}}>
<i className="lucide-sigma h-3 w-3 mr-1"></i>
                    Quant
                  </span>
</div>
<h3 className="mt-2 text-sm font-medium text-slate-900 font-geist" style={{}}>Quant Mode</h3>
<p className="mt-2 text-xs sm:text-sm text-slate-700 font-geist" style={{}}>
                  Analyze large datasets and run complex calculations or statistical models in seconds, integrated directly into your workflows.
                </p>
</article>

<article className="rounded-2xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between text-xs text-slate-500">
<span className="font-medium text-slate-700 font-geist" style={{}}>04</span>
<span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-1 text-[11px] text-slate-700 border border-slate-200 font-geist" style={{}}>
<i className="lucide-cloudy h-3 w-3 mr-1"></i>
                    External data
                  </span>
</div>
<h3 className="mt-2 text-sm font-medium text-slate-900 font-geist" style={{}}>External Data Agents</h3>
<p className="mt-2 text-xs sm:text-sm text-slate-700 font-geist" style={{}}>
                  Enrich your analysis with data pulled from trusted external APIs, keeping your models grounded in up-to-date information.
                </p>
</article>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="benefits">
<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
<div className="max-w-3xl">
<p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 font-geist" style={{}}>Benefits</p>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight text-slate-900 font-medium font-playfair" style={{}}>
              Workflows that drive value across the investment life cycle
            </h2>
<p className="mt-4 text-sm sm:text-base text-slate-700 font-geist" style={{}}>
              Arc's private markets domain focus, leading-edge technical architecture, and flexible interface allow investors to realize significant value across the fund lifecycle for any private markets investment strategy.
            </p>
</div>
<div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr,1.1fr,1.1fr]">

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
<h3 className="text-sm font-medium text-slate-900 font-geist" style={{}}>Across Investment Strategies</h3>
<ul className="mt-3 space-y-2 text-sm text-slate-700">
<li className="flex items-center font-geist" style={{}}>
<span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200">
<span className="h-1 w-1 rounded-full bg-slate-700"></span>
</span>
                  PE Funds
                </li>
<li className="flex items-center font-geist" style={{}}>
<span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200">
<span className="h-1 w-1 rounded-full bg-slate-700"></span>
</span>
                  VC Funds
                </li>
<li className="flex items-center font-geist" style={{}}>
<span className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-slate-700 border border-slate-200">
<span className="h-1 w-1 rounded-full bg-slate-700"></span>
</span>
                  Credit Funds
                </li>
</ul>
<div className="mt-6">
<h4 className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 font-geist" style={{}}>Example impact</h4>
<p className="mt-2 text-xs text-slate-700 font-geist" style={{}}>
                  Consolidate deal and portfolio information across strategies into a single, queryable platform for insights that span your entire capital stack.
                </p>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
<h3 className="text-sm font-medium text-slate-900 font-geist" style={{}}>Across the Investment Lifecycle</h3>
<div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-slate-700">
<span className="font-geist" style={{}}>Deal Screening</span>
<span className="font-geist" style={{}}>Document Creation</span>
<span className="font-geist" style={{}}>Meeting Prep</span>
<span className="font-geist" style={{}}>Deal Evaluation</span>
<span className="font-geist" style={{}}>IC Prep</span>
<span className="font-geist" style={{}}>Portfolio Tracking</span>
<span className="font-geist" style={{}}>Pipeline Mgmt</span>
<span className="font-geist" style={{}}>Data Extraction</span>
<span className="font-geist" style={{}}>Research Synthesis</span>
<span className="font-geist" style={{}}>Red-Teaming</span>
<span className="font-geist" style={{}}>Risk Mgmt</span>
<span className="font-geist" style={{}}>Fund Admin</span>
</div>
<div className="mt-5">
<h4 className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 font-geist" style={{}}>
                  Time savings
                </h4>
<p className="mt-2 text-xs text-slate-700 font-geist" style={{}}>
                  Automate repetitive workflows so teams can focus on differentiated analysis and decision-making.
                </p>
</div>
</div>

<div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex flex-col">
<h3 className="text-sm font-medium text-slate-900 font-geist" style={{}}>Arc delivers</h3>
<ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700">
<li className="flex items-start font-geist" style={{}}>
<i className="lucide-check-circle-2 h-4 w-4 text-emerald-600 mr-2 mt-0.5"></i>
                  Create a combined database of your investment information
                </li>
<li className="flex items-start font-geist" style={{}}>
<i className="lucide-check-circle-2 h-4 w-4 text-emerald-600 mr-2 mt-0.5"></i>
                  Access and create analysis across all past and present investments
                </li>
<li className="flex items-start font-geist" style={{}}>
<i className="lucide-check-circle-2 h-4 w-4 text-emerald-600 mr-2 mt-0.5"></i>
                  Switch easily between generated analysis and original source documents
                </li>
</ul>
<div className="mt-5 flex-1 flex flex-col">
<h4 className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 font-geist" style={{}}>Operational impact</h4>
<p className="mt-2 text-xs text-slate-700 font-geist" style={{}}>
                  Representative reduction in manual effort across the investment lifecycle.
                </p>
<div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 flex-1">
<div className="flex items-center justify-between text-[11px] text-slate-500">
<span className="font-geist" style={{}}>Manual effort (baseline vs. Arc)</span>
<span className="flex items-center text-slate-700 font-geist" style={{}}>
<i className="lucide-line-chart h-3 w-3 mr-1"></i> Model
                    </span>
</div>
<div className="mt-2 h-32">
<div className="h-full w-full flex flex-col">
<div className="relative flex-1">
<canvas className="absolute inset-0" height="256" id="effortChart" style={{display: 'block', boxSizing: 'border-box', height: '128px', width: '273px'}} width="546"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50">
<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
<div className="max-w-3xl text-center mx-auto">
<h2 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-medium font-playfair" style={{}}>
              3 simple steps to improve your workflow
            </h2>
<p className="mt-4 text-sm sm:text-base text-slate-700 font-geist" style={{}}>
              Our straightforward onboarding process helps you realize benefits immediately.
            </p>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-3">

<div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
<div className="flex items-center justify-between">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200 font-geist" style={{}}>
                  01
                </span>
<i className="lucide-monitor-play h-4 w-4 text-slate-700"></i>
</div>
<h3 className="mt-4 text-sm font-medium text-slate-900 font-geist" style={{}}>See a demo</h3>
<p className="mt-2 text-xs sm:text-sm text-slate-700 font-geist" style={{}}>
                Explore Arc's capabilities live and map them to your investment processes and governance requirements.
              </p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
<div className="flex items-center justify-between">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200 font-geist" style={{}}>
                  02
                </span>
<i className="lucide-badge-check h-4 w-4 text-slate-700"></i>
</div>
<h3 className="mt-4 text-sm font-medium text-slate-900 font-geist" style={{}}>Start your trial</h3>
<p className="mt-2 text-xs sm:text-sm text-slate-700 font-geist" style={{}}>
                Experience the benefits with minimal integration and no long-term commitment. Validate value early with your teams.
              </p>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
<div className="flex items-center justify-between">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs font-medium text-slate-700 border border-slate-200 font-geist" style={{}}>
                  03
                </span>
<i className="lucide-link-2 h-4 w-4 text-slate-700"></i>
</div>
<h3 className="mt-4 text-sm font-medium text-slate-900 font-geist" style={{}}>Integrate with your workflow</h3>
<p className="mt-2 text-xs sm:text-sm text-slate-700 font-geist" style={{}}>
                Tailor the platform to fit how your team operates — from data pipelines to permissions and reporting templates.
              </p>
</div>
</div>
<div className="mt-10 flex justify-center">
<a className="inline-flex items-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-slate-50 shadow-sm hover:bg-slate-800 transition-colors font-geist" href="#contact" style={{}}>
              SCHEDULE A DEMO
              <i className="lucide-calendar-clock h-4 w-4 ml-2"></i>
</a>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="security">
<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
<div className="grid gap-10 lg:grid-cols-[1.1fr,1.2fr] lg:items-start">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-medium font-playfair" style={{}}>
                Be protected with enterprise-grade security
              </h2>
<p className="mt-4 text-sm sm:text-base text-slate-700 font-geist" style={{}}>
                We protect your data, models, and insights with world-class security measures designed for institutional investors.
              </p>
<div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-sm">
<div className="flex items-center space-x-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
<i className="lucide-shield-check h-4 w-4 text-emerald-600"></i>
<span className="font-geist" style={{}}>SOC 2 certified</span>
</div>
<div className="flex items-center space-x-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
<i className="lucide-shield h-4 w-4 text-slate-700"></i>
<span className="font-geist" style={{}}>ISO 27001 certified</span>
</div>
<div className="flex items-center space-x-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
<i className="lucide-lock-keyhole h-4 w-4 text-slate-700"></i>
<span className="font-geist" style={{}}>Encryption in transit &amp; at rest</span>
</div>
<div className="flex items-center space-x-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
<i className="lucide-gavel h-4 w-4 text-slate-700"></i>
<span className="font-geist" style={{}}>Zero data retention when possible</span>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-7">
<h3 className="text-sm font-medium text-slate-900 font-geist" style={{}}>Security capabilities</h3>
<p className="mt-3 text-xs sm:text-sm text-slate-700 font-geist" style={{}}>
                Arc is built for regulated environments and institutional governance standards.
              </p>
<ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700">
<li className="flex items-start font-geist" style={{}}>
<i className="lucide-x-octagon h-4 w-4 text-emerald-600 mr-2 mt-0.5"></i>
                  We never train our models on your data.
                </li>
<li className="flex items-start font-geist" style={{}}>
<i className="lucide-radio-tower h-4 w-4 text-emerald-600 mr-2 mt-0.5"></i>
                  All data encrypted at rest and in transit.
                </li>
<li className="flex items-start font-geist" style={{}}>
<i className="lucide-trash-2 h-4 w-4 text-emerald-600 mr-2 mt-0.5"></i>
                  Zero data retention policy when possible.
                </li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="about">
<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
<div className="grid gap-10 lg:grid-cols-[1.1fr,1.1fr] lg:items-center">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight text-slate-900 font-medium font-playfair" style={{}}>
                About us
              </h2>
<p className="mt-4 text-sm sm:text-base text-slate-700 font-geist" style={{}}>
                We build AI solutions that enable private market investors to deploy capital more effectively.
              </p>
<p className="mt-4 text-sm sm:text-base text-slate-700 font-geist" style={{}}>
                Our team has been developing AI tools for private markets since 2018 as part of institutional asset managers and sovereign wealth funds. We saw how natural language processing and knowledge graphs could empower institutional investors with new approaches to evaluating and managing private investments.
              </p>
<p className="mt-4 text-sm sm:text-base text-slate-700 font-geist" style={{}}>
                Today, we are building AI solutions that private markets investors can rely upon to improve investment outcomes as we prepare for a future when AI becomes an integral part of every investment process.
              </p>
<div className="mt-6">
<a className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700 font-geist" href="#about-detail" style={{}}>
                  Learn more
                  <i className="lucide-arrow-right h-4 w-4 ml-1"></i>
</a>
</div>
</div>

<div className="grid gap-4 sm:grid-cols-2">
<div className="space-y-4">
<div className="relative h-40 sm:h-44 overflow-hidden rounded-2xl border border-slate-200 bg-white">
<img alt="Office" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="relative h-40 sm:h-44 overflow-hidden rounded-2xl border border-slate-200 bg-white">
<img alt="Data visualization" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1489659639091-8b687bc4386e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="space-y-4">
<div className="relative h-40 sm:h-44 overflow-hidden rounded-2xl border border-slate-200 bg-white">
<img alt="Team" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="relative h-40 sm:h-44 overflow-hidden rounded-2xl border border-slate-200 bg-white">
<img alt="Workspace" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-white" id="about-detail">
<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
<div className="max-w-2xl">
<p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 font-geist" style={{}}>About us</p>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight text-slate-900 font-medium font-playfair" style={{}}>
              Our Vision &amp; Mission
            </h2>
</div>
<div className="mt-10 grid gap-8 md:grid-cols-2">
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
<h3 className="text-sm font-medium text-slate-900 font-geist" style={{}}>Our Vision</h3>
<p className="mt-3 text-sm text-slate-700 font-geist" style={{}}>
                We believe AI will improve investment outcomes for private markets investors and facilitate access by new types of investors in this complicated asset class. We are building the technological foundation for a future where AI is integral to every private markets investment process.
              </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
<h3 className="text-sm font-medium text-slate-900 font-geist" style={{}}>Our Mission</h3>
<p className="mt-3 text-sm text-slate-700 font-geist" style={{}}>
                We build AI solutions that enable our clients — private markets investors — to deploy capital more effectively, with better insights, governance, and speed.
              </p>
</div>
</div>
<div className="mt-12 grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
<div>
<h3 className="text-base font-medium text-slate-900 font-geist" style={{}}>Our Team</h3>
<p className="mt-3 text-sm text-slate-700 font-geist" style={{}}>
                We understand the challenges of investing in private markets and navigating the fast-moving and complex world of AI. Our team members have deployed capital and managed portfolios as senior executives at allocators, fund managers, and advisors.
              </p>
<p className="mt-3 text-sm text-slate-700 font-geist" style={{}}>
                They were among the first to start working with big data, machine learning, and AI for private markets decision-making. Let our decades of experience in private markets and deep technical expertise help you to enhance your investment process.
              </p>
</div>
<div className="grid gap-4">
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
<h4 className="text-sm font-medium text-slate-900 font-geist" style={{}}>We are Innovators</h4>
<p className="mt-2 text-xs sm:text-sm text-slate-700 font-geist" style={{}}>
                  Decades of experience in founding and leading technology teams at financial technology companies.
                </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
<h4 className="text-sm font-medium text-slate-900 font-geist" style={{}}>We are Investors</h4>
<p className="mt-2 text-xs sm:text-sm text-slate-700 font-geist" style={{}}>
                  Deep experience in private markets investing across strategies, geographies, and cycles.
                </p>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
<h4 className="text-sm font-medium text-slate-900 font-geist" style={{}}>We are Allocators</h4>
<p className="mt-2 text-xs sm:text-sm text-slate-700 font-geist" style={{}}>
                  Backgrounds from major global asset allocators, understanding institutional governance from the inside.
                </p>
</div>
</div>
</div>

<div className="mt-12">
<h3 className="text-sm font-medium text-slate-900 font-geist" style={{}}>We come from</h3>
<div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 text-xs text-slate-700">
<div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
<span className="font-geist" style={{}}>GIC</span>
</div>
<div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
<span className="font-geist" style={{}}>ADIA</span>
</div>
<div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
<span className="font-geist" style={{}}>BlackRock</span>
</div>
<div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
<span className="font-geist" style={{}}>Cambridge Associates</span>
</div>
<div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
<span className="font-geist" style={{}}>AIF Capital</span>
</div>
<div className="flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
<span className="font-geist" style={{}}>V Capital</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50" id="contact">
<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
<div className="max-w-xl">
<span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 font-geist" style={{}}>
              Connect
            </span>
<h2 className="mt-3 text-3xl sm:text-4xl tracking-tight text-slate-900 font-medium font-playfair" style={{}}>
              Contact us
            </h2>
<p className="mt-3 text-sm sm:text-base text-slate-700 font-geist" style={{}}>
              Discover how the Arc platform can help you.
            </p>
<p className="mt-1 text-xs sm:text-sm text-slate-500 font-geist" style={{}}>
              Please fill in your details below.
            </p>
</div>
<div className="mt-8 grid gap-10 lg:grid-cols-[1.3fr,1fr] lg:items-start">

<form className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="block text-xs font-medium text-slate-800 font-geist" htmlFor="first-name" style={{}}>First name<span className="text-rose-500 font-geist" style={{}}>*</span></label>
<input className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15" id="first-name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-800 font-geist" htmlFor="last-name" style={{}}>Last name<span className="text-rose-500 font-geist" style={{}}>*</span></label>
<input className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15" id="last-name" required="" type="text"/>
</div>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="block text-xs font-medium text-slate-800 font-geist" htmlFor="contact-email" style={{}}>Email address<span className="text-rose-500 font-geist" style={{}}>*</span></label>
<input className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15" id="contact-email" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-800 font-geist" htmlFor="firm-name" style={{}}>Firm Name<span className="text-rose-500 font-geist" style={{}}>*</span></label>
<input className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15" id="firm-name" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-800 font-geist" htmlFor="message" style={{}}>Let us know how we can help</label>
<textarea className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/15" id="message" rows="4"></textarea>
</div>
<div className="flex items-start space-x-2">
<input className="mt-1 h-4 w-4 rounded border-slate-300 bg-white text-slate-900 focus:ring-slate-900/40" id="agreement" required="" type="checkbox"/>
<label className="text-xs text-slate-700 font-geist" htmlFor="agreement" style={{}}>
                  I hereby agree to the Terms &amp; Conditions of Brightriver.ai.
                </label>
</div>
<div className="pt-2">
<button className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-50 shadow-sm hover:bg-slate-800 transition-colors font-geist" style={{}} type="submit">
                  Submit Now
                  <i className="lucide-send h-4 w-4 ml-2"></i>
</button>
</div>
</form>

<div className="space-y-6">
<div className="rounded-2xl border border-slate-200 bg-white p-5">
<h3 className="text-sm font-medium text-slate-900 font-geist" style={{}}>Global coverage</h3>
<p className="mt-3 text-sm text-slate-700 font-geist" style={{}}>
                  We are based in the US and Singapore, partnering with private markets investors globally.
                </p>
<dl className="mt-4 space-y-3 text-xs sm:text-sm text-slate-700">
<div>
<dt className="flex items-center text-slate-500 font-geist" style={{}}>
<i className="lucide-mail h-4 w-4 mr-2 text-slate-700"></i>Email
                    </dt>
<dd className="mt-1">
<a className="text-slate-900 hover:text-slate-700 font-geist" href="mailto:team@brightriver.ai" style={{}}>team@brightriver.ai</a>
</dd>
</div>
<div>
<dt className="flex items-center text-slate-500 font-geist" style={{}}>
<i className="lucide-map-pin h-4 w-4 mr-2 text-slate-700"></i>Locations
                    </dt>
<dd className="mt-1 font-geist" style={{}}>United States &amp; Singapore</dd>
</div>
</dl>
</div>
<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs sm:text-sm text-slate-600">
<p className="font-geist" style={{}}>
                  Prefer to share materials first? Send us anonymised examples of your IC packs or reporting templates and we will demonstrate how Arc can automate them.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100">
<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
<div className="rounded-3xl border border-slate-200 bg-white px-6 py-10 sm:px-10 sm:py-12 lg:flex lg:items-center lg:justify-between">
<div className="max-w-xl">
<h2 className="text-2xl sm:text-3xl tracking-tight text-slate-900 font-medium font-playfair" style={{}}>
                The future of private markets investing
              </h2>
<p className="mt-3 text-sm sm:text-base text-slate-700 font-geist" style={{}}>
                Improve your investment process and decision-making with Arc. Let us collaborate together to bring innovation to your workflows.
              </p>
</div>
<div className="mt-6 lg:mt-0 flex flex-col items-start space-y-3">
<a className="inline-flex items-center rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-slate-50 shadow-sm hover:bg-slate-800 transition-colors font-geist" href="#contact" style={{}}>
                SCHEDULE A DEMO
                <i className="lucide-calendar-clock h-4 w-4 ml-2"></i>
</a>
<p className="text-xs text-slate-500 font-geist" style={{}}>
                Typical implementation timelines measured in weeks, not quarters.
              </p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
<div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
<div className="space-y-3">
<div className="flex items-center space-x-2">
<span className="text-lg tracking-tight font-semibold text-slate-900 font-geist" style={{}}>
                brightriver.ai
              </span>
</div>
<p className="text-xs sm:text-sm text-slate-600 font-geist" style={{}}>
              AI solutions for institutional private markets investors.
            </p>
<p className="text-xs text-slate-400 font-geist" style={{}}>
              © 2025 Brightriver.ai. All rights reserved.
            </p>
</div>
<div className="grid grid-cols-2 gap-8 text-xs sm:text-sm text-slate-700">
<div>
<h4 className="font-medium text-slate-900 font-geist" style={{}}>Pages</h4>
<ul className="mt-3 space-y-2">
<li><a className="hover:text-slate-900 font-geist" href="#about-detail" style={{}}>About us</a></li>
<li><a className="hover:text-slate-900 font-geist" href="#contact" style={{}}>Contact us</a></li>
<li><a className="hover:text-slate-900 font-geist" href="https://medium.com/@brightriver_ai/" style={{}} target="_blank">Blog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 font-geist" style={{}}>Utilities</h4>
<ul className="mt-3 space-y-2">
<li><a className="hover:text-slate-900 font-geist" href="#" style={{}}>Privacy Policy</a></li>
<li><a className="hover:text-slate-900 font-geist" href="#" style={{}}>Terms &amp; Conditions</a></li>
</ul>
</div>
</div>
<div className="space-y-3 text-xs sm:text-sm text-slate-700">
<div>
<div className="flex items-center text-slate-500 font-geist" style={{}}>
<i className="lucide-mail h-4 w-4 mr-2 text-slate-700"></i>Email
              </div>
<a className="mt-1 inline-block text-slate-900 hover:text-slate-700 font-geist" href="mailto:team@brightriver.ai" style={{}}>
                team@brightriver.ai
              </a>
</div>
<div>
<div className="flex items-center text-slate-500 font-geist" style={{}}>
<i className="lucide-map-pin h-4 w-4 mr-2 text-slate-700"></i>Locations
              </div>
<p className="mt-1 text-slate-700 font-geist" style={{}}>US &amp; Singapore</p>
</div>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
