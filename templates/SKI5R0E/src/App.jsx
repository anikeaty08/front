import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Icons
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
        
        // Cursor trail effect
        const trailContainer = document.getElementById('cursor-trail');
        const particles = [];
        const colors = ['#7c3aed', '#8b5cf6', '#a855f7', '#c084fc', '#d97706', '#f59e0b', '#fbbf24', '#fcd34d'];
        let mouseX = 0;
        let mouseY = 0;
        
        // Create particle
        function createParticle(x, y) {
          const particle = document.createElement('div');
          particle.style.position = 'absolute';
          particle.style.pointerEvents = 'none';
          particle.style.width = '6px';
          particle.style.height = '6px';
          particle.style.borderRadius = '50%';
          particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          particle.style.left = x + 'px';
          particle.style.top = y + 'px';
          particle.style.opacity = '0.8';
          particle.style.transform = 'scale(1)';
          particle.style.transition = 'all 0.6s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
          particle.style.zIndex = '60';
          
          trailContainer.appendChild(particle);
          
          // Animate particle
          requestAnimationFrame(() => {
            particle.style.opacity = '0';
            particle.style.transform = 'scale(0.2) translate(' + (Math.random() - 0.5) * 40 + 'px, ' + (Math.random() - 0.5) * 40 + 'px)';
          });
          
          // Remove particle
          setTimeout(() => {
            if (particle.parentNode) {
              particle.parentNode.removeChild(particle);
            }
          }, 600);
        }
        
        // Mouse move handler
        document.addEventListener('mousemove', (e) => {
          mouseX = e.clientX;
          mouseY = e.clientY;
          
          // Create particle with some randomness
          if (Math.random() > 0.7) {
            createParticle(mouseX - 3, mouseY - 3);
          }
        });
        
        // Touch move handler for mobile
        document.addEventListener('touchmove', (e) => {
          if (e.touches.length > 0) {
            const touch = e.touches[0];
            mouseX = touch.clientX;
            mouseY = touch.clientY;
            
            if (Math.random() > 0.7) {
              createParticle(mouseX - 3, mouseY - 3);
            }
          }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/flowingribbon-TlkEaNrvCCNZuJBNJN3LXpRF" width="100%"></iframe></div>

<div className="fixed inset-0 pointer-events-none z-50" id="cursor-trail"></div>

<div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_-10%,rgba(139,69,19,0.08),transparent_60%),radial-gradient(900px_500px_at_20%_10%,rgba(79,70,229,0.06),transparent_55%)]"></div>

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(to right, rgb(139,69,19) 1px, transparent 1px), linear-gradient(to bottom, rgb(79,70,229) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>

<div className="absolute left-[10%] top-[30%] size-2 rounded-full blur-[2px] animate-bounce bg-violet-400"></div>
<div className="absolute right-[18%] top-[22%] size-2 rounded-full blur-[2px] animate-bounce bg-amber-400" style={{animationDelay: '0.6s'}}></div>
<div className="absolute right-[30%] bottom-[18%] size-2 rounded-full blur-[2px] animate-bounce bg-violet-500" style={{animationDelay: '1.2s'}}></div>
<div className="absolute left-[22%] bottom-[12%] size-2 rounded-full blur-[2px] animate-bounce bg-amber-500" style={{animationDelay: '0.3s'}}></div>
</div>

<header className="sticky top-0 z-30 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 border-b border-gray-200/80">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-clip-text text-transparent bg-gradient-to-r to-amber-700 from-violet-700 ring-1 shadow-sm ring-violet-200/50">
<span className="bg-clip-text text-sm font-semibold text-transparent tracking-tight bg-gradient-to-r to-amber-700 from-violet-700" style={{fontFamily: 'Orbitron, Inter, sans-serif'}}>E</span>
</div>
<span className="hidden sm:inline text-sm text-gray-600">Eliting</span>
</div>
<nav className="hidden items-center gap-6 text-sm md:flex text-gray-700">
<a className="transition-colors hover:text-gray-900" href="#programs">Programs</a>
<a className="transition-colors hover:text-gray-900" href="#about">About</a>
<a className="transition-colors hover:text-gray-900" href="#success">Success</a>
<a className="transition-colors hover:text-gray-900" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<a className="group relative rounded-md bg-gradient-to-r p-[1px] shadow-sm to-amber-700 from-violet-700" href="#cta">
<span className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium tracking-tight transition-all duration-300 group-hover:bg-gray-50 text-gray-900">
<svg className="lucide lucide-calendar size-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Book Now
            </span>
</a>
</div>
</div>
</header>

<section className="relative z-10 overflow-hidden">
<div className="grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-2 md:py-20 mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 items-center">
<div className="space-y-7">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] uppercase tracking-[0.12em] border-violet-200 bg-violet-50 text-violet-800">
<span className="h-1 w-1 rounded-full bg-gradient-to-r to-amber-700 from-violet-700"></span>
            Next-Gen Coaching
          </div>
<h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-gray-900">
            Transform Your Body. <span className="bg-clip-text text-transparent bg-gradient-to-r to-amber-700 from-violet-700">Unlock Your Potential.</span>
</h1>
<p className="max-w-xl text-gray-600">
            A precision method combining personalized training, adaptive programming, and data-driven nutrition to help you build strength, drop fat, and sustain elite performance.
          </p>
<div className="flex flex-wrap items-center gap-3 pt-2">

<a className="group relative inline-flex items-center rounded-xl bg-gradient-to-r p-[1px] focus:outline-none focus:ring-2 to-amber-700 from-violet-700 focus:ring-violet-400/40 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:blur-lg before:scale-110" href="#cta">
<span className="relative inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-gray-900 hover:bg-gradient-to-r hover:to-amber-700 hover:from-violet-700 hover:text-white">
<span className="absolute -inset-3 -z-10 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity bg-gradient-to-r to-amber-700 from-violet-700"></span>
<svg className="lucide lucide-zap size-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                Book a Free Session
                <svg className="lucide lucide-arrow-right size-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>

<a className="group relative inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-50 border-gray-200 bg-white hover:text-gray-900 hover:border-violet-300 text-gray-700 shadow-sm before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:blur-lg" href="#programs">
<svg className="lucide lucide-layers size-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
              View Programs
            </a>
</div>

<div className="mt-8 flex flex-wrap items-center gap-8 text-xs text-gray-600">
<div className="flex items-center gap-2">
<svg className="lucide lucide-award size-4 text-violet-700" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
              Certified Strength &amp; Conditioning Specialist
            </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-heart-pulse size-4 text-amber-700" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
              Science-Backed Nutrition
            </div>
</div>
</div>

<div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border ring-1 shadow-xl border-gray-200 bg-white ring-gray-100">
<img alt="Personal Training Session" className="absolute inset-0 size-full object-cover" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&amp;q=80"/>

<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

<div className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] backdrop-blur-sm border-white/20 bg-white/80 text-gray-800">
<svg className="lucide lucide-cpu size-3.5 text-violet-700" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
            AI-Enhanced Tracking
          </div>
</div>
</div>
</section>

<section className="relative z-10 border-t bg-gradient-to-b from-transparent to-gray-50 border-gray-200" id="about">
<div className="grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">

<div className="group relative">
<div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr to-amber-700/10 from-violet-700/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="relative overflow-hidden rounded-3xl border shadow-xl ring-1 transition-transform duration-500 ease-out hover:[transform:perspective(900px)_rotateX(4deg)_rotateY(-6deg)_scale(1.02)] border-gray-200 bg-white ring-gray-100">
<img alt="Professional Fitness Coach" className="h-[520px] w-full object-cover" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-black/20"></div>
<div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-md border px-3 py-1 text-xs backdrop-blur border-white/20 bg-white/80 text-gray-800">
<svg className="lucide lucide-sparkles size-4 text-amber-700" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              10+ Years Transforming Athletes
            </div>
</div>
</div>

<div className="relative">
<div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(400px_200px_at_20%_30%,rgba(79,70,229,0.08),transparent_60%)]"></div>
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-gray-900">Your Coach, Your Edge.</h2>
<p className="mt-4 max-w-xl text-gray-600">
            I blend performance coaching, habit design, and nutritional science to engineer breakthroughs. Expect structured phases, progressive overload, mobility foundations, and precise macro frameworks—delivered with accountability and clarity.
          </p>
<div className="mt-8 grid gap-6 sm:grid-cols-2">
<div className="group relative rounded-xl border p-5 ring-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-gray-200 bg-white ring-gray-100 hover:border-violet-300 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 before:blur-xl">
<div className="flex items-center gap-3 relative z-10">
<div className="flex size-9 items-center justify-center rounded-md ring-1 bg-violet-50 text-violet-700 ring-violet-200">
<svg className="lucide lucide-bar-chart-3 size-4" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="text-sm">
<div className="font-medium text-gray-900">Adaptive Programming</div>
<div className="text-gray-600">Plans evolve with your data and recovery.</div>
</div>
</div>
</div>
<div className="group relative rounded-xl border p-5 ring-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg border-gray-200 bg-white ring-gray-100 hover:border-amber-300 before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 before:blur-xl">
<div className="flex items-center gap-3 relative z-10">
<div className="flex size-9 items-center justify-center rounded-md ring-1 bg-amber-50 text-amber-700 ring-amber-200">
<svg className="lucide lucide-apple size-4" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
</div>
<div className="text-sm">
<div className="font-medium text-gray-900">Precision Nutrition</div>
<div className="text-gray-600">Macro targets and meals you'll actually enjoy.</div>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-wrap gap-4 text-sm text-gray-700">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 border-gray-200 bg-white shadow-sm">
<svg className="lucide lucide-clock size-4 text-violet-700" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> 24/7 Support
            </div>
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 border-gray-200 bg-white shadow-sm">
<svg className="lucide lucide-smartphone size-4 text-amber-700" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg> App-Based Tracking
            </div>
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 border-gray-200 bg-white shadow-sm">
<svg className="lucide lucide-medal size-4 text-violet-700" data-lucide="medal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"></path><path d="M11 12 5.12 2.2"></path><path d="m13 12 5.88-9.8"></path><path d="M8 7h8"></path><circle cx="12" cy="17" r="5"></circle><path d="M12 18v-2h-.5"></path></svg> Goal-Crushing Roadmaps
            </div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-t py-20 border-gray-200" id="programs">
<div className="mx-auto max-w-7xl px-6">
<div className="mb-10 flex items-end justify-between gap-6">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-gray-900">Programs</h2>
<p className="mt-2 max-w-xl text-gray-600">Choose a pathway engineered for your goals—each with accountability, metrics, and momentum.</p>
</div>
<a className="group relative hidden items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors md:inline-flex border-gray-200 bg-white hover:text-gray-900 hover:border-violet-300 text-gray-700 shadow-sm before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 before:blur-lg" href="#cta">
<svg className="lucide lucide-flashlight size-4" data-lucide="flashlight" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"></path><line x1="6" x2="18" y1="6" y2="6"></line><line x1="12" x2="12" y1="12" y2="12"></line></svg>
            Get Recommendation
          </a>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative rounded-2xl p-[1px]">
<div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r to-amber-700 from-violet-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="absolute -inset-6 rounded-2xl bg-gradient-to-r to-amber-600/20 from-violet-600/20 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100"></div>
<div className="relative h-full rounded-2xl border p-6 ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-gray-200 bg-white ring-gray-100 hover:shadow-violet-500/10">
<div className="mb-5 flex items-center justify-between">
<div className="flex size-11 items-center justify-center rounded-lg ring-1 transition-transform group-hover:-translate-y-0.5 bg-violet-50 text-violet-700 ring-violet-200 group-hover:bg-gradient-to-r group-hover:to-amber-700 group-hover:from-violet-700 group-hover:text-white group-hover:ring-0">
<svg className="lucide lucide-activity size-5 transition-transform group-hover:animate-bounce" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="rounded-md border px-2 py-1 text-[11px] border-violet-200 bg-violet-50 text-violet-800 group-hover:bg-gradient-to-r group-hover:to-amber-700 group-hover:from-violet-700 group-hover:text-white group-hover:border-transparent transition-all duration-300">Most Popular</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:to-amber-700 group-hover:from-violet-700 transition-all duration-300">Personal Coaching</h3>
<p className="mt-2 text-sm text-gray-600">1:1 training blocks, custom workouts, and weekly check‑ins designed to accelerate your transformation.</p>
<div className="mt-6 flex items-center gap-2 text-sm text-gray-700">
<svg className="lucide lucide-calendar-check size-4 text-violet-700" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
                Weekly progress reviews
              </div>
<button className="relative mt-6 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all hover:-translate-y-0.5 border-gray-200 bg-gray-50 hover:text-gray-900 hover:border-violet-300 text-gray-700 group-hover:bg-gradient-to-r group-hover:to-amber-700 group-hover:from-violet-700 group-hover:text-white group-hover:border-transparent before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-20 before:blur-lg">
<svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Learn More
              </button>
</div>
</div>

<div className="group relative rounded-2xl p-[1px]">
<div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r to-amber-700 from-violet-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="absolute -inset-6 rounded-2xl bg-gradient-to-r to-amber-600/20 from-violet-600/20 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100"></div>
<div className="relative h-full rounded-2xl border p-6 ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-gray-200 bg-white ring-gray-100 hover:shadow-amber-500/10">
<div className="mb-5 flex items-center justify-between">
<div className="flex size-11 items-center justify-center rounded-lg ring-1 transition-transform group-hover:-translate-y-0.5 bg-amber-50 text-amber-700 ring-amber-200 group-hover:bg-gradient-to-r group-hover:to-amber-700 group-hover:from-violet-700 group-hover:text-white group-hover:ring-0">
<svg className="lucide lucide-apple size-5 transition-transform group-hover:animate-bounce" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:to-amber-700 group-hover:from-violet-700 transition-all duration-300">Nutrition Plan</h3>
<p className="mt-2 text-sm text-gray-600">Macro targets, meal templates, and flexible frameworks tailored to your metabolism and taste.</p>
<div className="mt-6 flex items-center gap-2 text-sm text-gray-700">
<svg className="lucide lucide-chef-hat size-4 text-amber-700" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
                Easy, sustainable guidelines
              </div>
<button className="relative mt-6 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all hover:-translate-y-0.5 border-gray-200 bg-gray-50 hover:text-gray-900 hover:border-amber-300 text-gray-700 group-hover:bg-gradient-to-r group-hover:to-amber-700 group-hover:from-violet-700 group-hover:text-white group-hover:border-transparent before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-20 before:blur-lg">
<svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Learn More
              </button>
</div>
</div>

<div className="group relative rounded-2xl p-[1px]">
<div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-gradient-to-r to-amber-700 from-violet-700 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="absolute -inset-6 rounded-2xl bg-gradient-to-r to-amber-600/20 from-violet-600/20 opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100"></div>
<div className="relative h-full rounded-2xl border p-6 ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-gray-200 bg-white ring-gray-100 hover:shadow-violet-500/10">
<div className="mb-5 flex items-center justify-between">
<div className="flex size-11 items-center justify-center rounded-lg ring-1 transition-transform group-hover:-translate-y-0.5 bg-violet-50 text-violet-700 ring-violet-200 group-hover:bg-gradient-to-r group-hover:to-amber-700 group-hover:from-violet-700 group-hover:text-white group-hover:ring-0">
<svg className="lucide lucide-users size-5 transition-transform group-hover:animate-bounce" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="rounded-md border px-2 py-1 text-[11px] border-gray-200 bg-gray-50 text-gray-800 group-hover:bg-gradient-to-r group-hover:to-amber-700 group-hover:from-violet-700 group-hover:text-white group-hover:border-transparent transition-all duration-300">Live Weekly</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:to-amber-700 group-hover:from-violet-700 transition-all duration-300">Online Group Sessions</h3>
<p className="mt-2 text-sm text-gray-600">High-energy sessions, community push, and coaching at scale—where progress becomes contagious.</p>
<div className="mt-6 flex items-center gap-2 text-sm text-gray-700">
<svg className="lucide lucide-video size-4 text-violet-700" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
                Interactive coaching room
              </div>
<button className="relative mt-6 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-all hover:-translate-y-0.5 border-gray-200 bg-gray-50 hover:text-gray-900 hover:border-violet-300 text-gray-700 group-hover:bg-gradient-to-r group-hover:to-amber-700 group-hover:from-violet-700 group-hover:text-white group-hover:border-transparent before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 group-hover:before:opacity-20 before:blur-lg">
<svg className="lucide lucide-arrow-right size-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                Learn More
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 overflow-hidden border-t border-gray-200 bg-gradient-to-b from-white to-gray-50" id="success">
<div className="mx-auto max-w-7xl px-6 py-20">
<div className="mb-8 flex items-end justify-between">
<div className="">
<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-gray-900">Success Stories</h2>
<p className="mt-2 max-w-xl text-gray-600">Real people, real results. Momentum you can feel.</p>
</div>
<div className="hidden items-center gap-2 md:flex">
<span className="text-xs text-gray-600">Scroll</span>
<svg className="lucide lucide-arrow-right size-4 text-gray-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2">

<article className="group relative min-w-[320px] snap-start overflow-hidden rounded-2xl border p-6 ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-gray-200 bg-white ring-gray-100 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 before:blur-xl">
<div className="flex items-center gap-4 relative z-10">
<img alt="Client Jordan" className="size-12 ring-2 ring-gray-200 object-cover rounded-full" src="https://images.unsplash.com/photo-1485875437342-9b39470b3d95?w=320&amp;q=80"/>
<div className="">
<div className="text-sm font-medium text-gray-900">Jordan P.</div>
<div className="text-xs text-gray-600">Lost 18 lbs • PR Deadlift +85 lbs</div>
</div>
</div>
<p className="mt-4 text-sm text-gray-700 relative z-10">
              "The structure and accountability changed everything. I look forward to training again."
            </p>
<div className="mt-4 inline-flex items-center gap-2 rounded-md border px-2 py-1 text-[11px] border-violet-200 bg-violet-50 text-violet-800 relative z-10">
<svg className="lucide lucide-sparkles size-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> 12 Weeks
            </div>
</article>

<article className="group relative min-w-[320px] snap-start overflow-hidden rounded-2xl border p-6 ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-gray-200 bg-white ring-gray-100 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 before:blur-xl">
<div className="flex items-center gap-4 relative z-10">
<img alt="Client Ava" className="size-12 rounded-full object-cover ring-2 ring-gray-200" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&amp;q=80"/>
<div className="">
<div className="text-sm font-medium text-gray-900">Ava R.</div>
<div className="text-xs text-gray-600">Recomp • Visible Abs • Energy ↑</div>
</div>
</div>
<p className="mt-4 text-sm text-gray-700 relative z-10">
              "Macros made simple. I'm stronger, leaner, and actually enjoy the process."
            </p>
<div className="mt-4 inline-flex items-center gap-2 rounded-md border px-2 py-1 text-[11px] border-amber-200 bg-amber-50 text-amber-800 relative z-10">
<svg className="lucide lucide-leaf size-3.5" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg> 16 Weeks
            </div>
</article>

<article className="group relative min-w-[320px] snap-start overflow-hidden rounded-2xl border p-6 ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-gray-200 bg-white ring-gray-100 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 before:blur-xl">
<div className="flex items-center gap-4 relative z-10">
<img alt="Client Marcus" className="size-12 rounded-full object-cover ring-2 ring-gray-200" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;q=80"/>
<div className="">
<div className="text-sm font-medium text-gray-900">Marcus T.</div>
<div className="text-xs text-gray-600">Strength Cycle • +10% Power</div>
</div>
</div>
<p className="mt-4 text-sm text-gray-700 relative z-10">
              "The programming is elite. Every session has a purpose and builds on the last."
            </p>
<div className="mt-4 inline-flex items-center gap-2 rounded-md border px-2 py-1 text-[11px] border-gray-200 bg-gray-50 text-gray-800 relative z-10">
<svg className="lucide lucide-dumbbell size-3.5" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg> 8 Weeks
            </div>
</article>

<article className="group relative min-w-[320px] snap-start overflow-hidden rounded-2xl border p-6 ring-1 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border-gray-200 bg-white ring-gray-100 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-10 before:blur-xl">
<div className="flex items-center gap-4 relative z-10">
<img alt="Client Sarah" className="size-12 rounded-full object-cover ring-2 ring-gray-200" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;q=80"/>
<div>
<div className="text-sm font-medium text-gray-900">Sarah K.</div>
<div className="text-xs text-gray-600">Marathon PR • Injury Free</div>
</div>
</div>
<p className="mt-4 text-sm text-gray-700 relative z-10">
              "Recovery protocols and strength work made me faster and resilient than ever."
            </p>
<div className="mt-4 inline-flex items-center gap-2 rounded-md border px-2 py-1 text-[11px] border-violet-200 bg-violet-50 text-violet-800 relative z-10">
<svg className="lucide lucide-zap size-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> 20 Weeks
            </div>
</article>
</div>

<div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
<div className="aspect-square overflow-hidden rounded-xl border border-gray-200 bg-white ring-1 ring-gray-100">
<img alt="Weight Training" className="size-full object-cover" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&amp;q=80"/>
</div>
<div className="aspect-square overflow-hidden rounded-xl border border-gray-200 bg-white ring-1 ring-gray-100">
<img alt="Cardio Training" className="size-full object-cover" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&amp;q=80"/>
</div>
<div className="aspect-square overflow-hidden rounded-xl border border-gray-200 bg-white ring-1 ring-gray-100">
<img alt="Stretching" className="size-full object-cover" src="https://images.unsplash.com/photo-1549476464-37392f717541?w=400&amp;q=80"/>
</div>
<div className="aspect-square overflow-hidden rounded-xl border border-gray-200 bg-white ring-1 ring-gray-100">
<img alt="Group Training" className="size-full object-cover" src="https://images.unsplash.com/photo-1517963628607-235ccdd5476c?w=400&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="relative z-10 overflow-hidden border-t border-gray-200 bg-gradient-to-b from-white to-gray-100" id="cta">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_1000px_400px_at_50%_200px,rgba(139,69,19,0.15),transparent_70%),radial-gradient(ellipse_800px_300px_at_80%_-100px,rgba(79,70,229,0.1),transparent_70%)]"></div>
<div className="relative max-w-5xl text-center mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl text-gray-900">
          Ready to Build Your <span className="bg-clip-text text-transparent bg-gradient-to-r to-amber-700 from-violet-700">Future Self?</span>
</h2>
<p className="mx-auto mt-4 max-w-2xl text-gray-600">
          Step into a system designed for momentum. Start with a free session—no pressure, just precision.
        </p>
<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
<a className="group relative inline-flex items-center rounded-2xl bg-gradient-to-r p-[2px] to-amber-700 from-violet-700 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:blur-lg before:scale-110" href="#contact">
<span className="relative inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-gray-900 hover:bg-gradient-to-r hover:to-amber-700 hover:from-violet-700 hover:text-white">
<span className="pointer-events-none absolute -inset-8 -z-10 rounded-[28px] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity bg-gradient-to-r to-amber-700 from-violet-700"></span>
<svg className="lucide lucide-calendar size-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Book a Free Session
              <svg className="lucide lucide-arrow-right size-5 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
<a className="group relative inline-flex items-center gap-2 rounded-2xl border px-6 py-3.5 text-sm font-medium transition-all hover:-translate-y-0.5 border-gray-200 bg-white hover:text-gray-900 hover:border-amber-300 text-gray-700 shadow-sm before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:blur-lg" href="#programs">
<svg className="lucide lucide-play size-5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
            Explore Programs
          </a>
</div>

<div className="mt-16 grid grid-cols-3 gap-4 opacity-60">
<div className="aspect-video overflow-hidden rounded-lg border border-gray-200">
<img alt="Gym Equipment" className="size-full object-cover" src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&amp;q=80"/>
</div>
<div className="aspect-video overflow-hidden rounded-lg border border-gray-200">
<img alt="Nutrition Planning" className="size-full object-cover" src="https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=400&amp;q=80"/>
</div>
<div className="aspect-video overflow-hidden rounded-lg border border-gray-200">
<img alt="Progress Tracking" className="size-full object-cover" src="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?w=400&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-t py-16 border-gray-200 bg-gray-50" id="contact">
<div className="mx-auto max-w-7xl px-6">
<div className="grid gap-10 lg:grid-cols-2">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">Let's map your next 90 days.</h3>
<p className="mt-2 max-w-lg text-gray-600">Tell me about your goals and constraints—I'll outline a strategic plan you can execute immediately.</p>
<div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 border-gray-200 bg-white shadow-sm">
<svg className="lucide lucide-target size-4 text-violet-700" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg> Goal Analysis
              </div>
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 border-gray-200 bg-white shadow-sm">
<svg className="lucide lucide-brain size-4 text-amber-700" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg> Habit Systems
              </div>
<div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 border-gray-200 bg-white shadow-sm">
<svg className="lucide lucide-chart-line size-4 text-violet-700" data-lucide="chart-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg> Metrics &amp; Check‑ins
              </div>
</div>
</div>

<form className="rounded-2xl border p-6 ring-1 border-gray-200 bg-white ring-gray-100 shadow-sm">
<div className="grid gap-4 sm:grid-cols-2">
<div className="sm:col-span-1">
<label className="mb-1 block text-xs text-gray-600">Name</label>
<input className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none border-gray-200 bg-gray-50 text-gray-900 focus:border-violet-400 focus:bg-white placeholder:text-gray-500" placeholder="Your name"/>
</div>
<div className="sm:col-span-1">
<label className="mb-1 block text-xs text-gray-600">Email</label>
<input className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none border-gray-200 bg-gray-50 text-gray-900 focus:border-violet-400 focus:bg-white placeholder:text-gray-500" placeholder="you@example.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="mb-1 block text-xs text-gray-600">Goals</label>
<textarea className="w-full rounded-lg border px-3 py-2 text-sm focus:outline-none border-gray-200 bg-gray-50 text-gray-900 focus:border-amber-400 focus:bg-white placeholder:text-gray-500" placeholder="Share your goals, timeline, and challenges..." rows="4"></textarea>
</div>
</div>
<button className="group relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r px-4 py-2.5 text-sm font-semibold tracking-tight transition-all hover:shadow-lg text-white to-amber-700 from-violet-700 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100 before:blur-lg before:scale-110" type="button">
<svg className="lucide lucide-send size-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              Request Plan
            </button>
</form>
</div>
</div>
</section>

<footer className="relative z-10 border-t border-gray-200 bg-white">
<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br ring-1 ring-gray-200 to-amber-100 from-violet-100">
<span className="text-[11px] bg-clip-text font-semibold text-transparent tracking-tight bg-gradient-to-r to-amber-700 from-violet-700" style={{fontFamily: 'Orbitron, Inter, sans-serif'}}>E</span>
</div>
<span className="text-xs text-gray-600">©  Eliting. All rights reserved.<span id="year">2025</span></span>
</div>
<div className="flex items-center gap-4">
<a className="group inline-flex size-9 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 border-gray-200 bg-gray-50 hover:text-gray-900 hover:border-violet-300 text-gray-700 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:blur-lg relative" href="#">
<svg className="lucide lucide-twitter size-4 transition-transform group-hover:rotate-6 relative z-10" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="group inline-flex size-9 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 border-gray-200 bg-gray-50 hover:text-gray-900 hover:border-amber-300 text-gray-700 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:blur-lg relative" href="#">
<svg className="lucide lucide-instagram size-4 transition-transform group-hover:rotate-6 relative z-10" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="group inline-flex size-9 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 border-gray-200 bg-gray-50 hover:text-gray-900 hover:border-violet-300 text-gray-700 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:blur-lg relative" href="#">
<svg className="lucide lucide-youtube size-4 transition-transform group-hover:rotate-6 relative z-10" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a className="group inline-flex size-9 items-center justify-center rounded-full border transition-all hover:-translate-y-0.5 border-gray-200 bg-gray-50 hover:text-gray-900 hover:border-violet-300 text-gray-700 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r before:to-amber-700 before:from-violet-700 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20 before:blur-lg relative" href="#">
<svg className="lucide lucide-linkedin size-4 transition-transform group-hover:rotate-6 relative z-10" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</footer>



    </>
  );
}
