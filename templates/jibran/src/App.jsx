import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons and year
      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        var yEl = document.getElementById('year'); if (yEl) yEl.textContent = new Date().getFullYear();
      });

      // Chart.js helpers
      function gradient(ctx, colorFrom, colorTo) {
        const g = ctx.createLinearGradient(0, 0, 0, 200);
        g.addColorStop(0, colorFrom);
        g.addColorStop(1, colorTo);
        return g;
      }

      // Build charts after load
      window.addEventListener('load', () => {
        // Radar
        const radarEl = document.getElementById('radarChart');
        if (radarEl) {
          const radarCtx = radarEl.getContext('2d');
          new Chart(radarCtx, {
            type: 'radar',
            data: {
              labels: ['Anatomy', 'Research', 'Drawing', 'Notes', 'Teamwork', 'Communication'],
              datasets: [{
                label: 'Skill',
                data: [85, 70, 88, 80, 76, 82],
                borderColor: 'rgba(217, 70, 239, 0.9)',
                backgroundColor: 'rgba(217, 70, 239, 0.18)',
                pointBackgroundColor: '#e879f9',
                pointBorderColor: 'transparent',
                borderWidth: 2
              }]
            },
            options: {
              plugins: { legend: { display: false } },
              scales: {
                r: {
                  angleLines: { color: 'rgba(255,255,255,0.08)' },
                  grid: { color: 'rgba(255,255,255,0.08)' },
                  pointLabels: { color: '#cbd5e1', font: { size: 11 } },
                  ticks: { display: false, maxTicksLimit: 4, beginAtZero: true, suggestedMax: 100 }
                }
              }
            }
          });
        }

        // Donut
        const donutEl = document.getElementById('donutChart');
        if (donutEl) {
          const donutCtx = donutEl.getContext('2d');
          new Chart(donutCtx, {
            type: 'doughnut',
            data: {
              labels: ['Lecture', 'Self-study', 'Drawing', 'Research', 'Rest'],
              datasets: [{
                data: [25, 35, 15, 15, 10],
                backgroundColor: ['#a78bfa', '#e879f9', '#7c3aed', '#f472b6', '#6b7280'],
                borderWidth: 0
              }]
            },
            options: {
              plugins: { legend: { display: true, labels: { color: '#e2e8f0', boxWidth: 12 } } },
              cutout: '65%'
            }
          });
        }

        // Line
        const lineEl = document.getElementById('lineChart');
        if (lineEl) {
          const lineCtx = lineEl.getContext('2d');
          const grad = gradient(lineCtx, 'rgba(124,58,237,0.45)', 'rgba(124,58,237,0.02)');
          new Chart(lineCtx, {
            type: 'line',
            data: {
              labels: ['W1', 'W2', 'W3', 'W4'],
              datasets: [{
                label: 'Hours',
                data: [18, 22, 20, 26],
                fill: true,
                backgroundColor: grad,
                borderColor: '#a78bfa',
                pointBackgroundColor: '#e879f9',
                pointRadius: 3,
                tension: 0.35
              }]
            },
            options: {
              plugins: { legend: { display: false } },
              scales: {
                x: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.06)' } },
                y: { ticks: { color: '#cbd5e1' }, grid: { color: 'rgba(255,255,255,0.06)' }, suggestedMin: 0, suggestedMax: 30 }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%"></iframe></div></div>

<div className="fixed inset-0 -z-50">
<div className="absolute inset-0 bg-[#0b0618]"></div>
<div className="absolute inset-0 bg-[radial-gradient(1200px_700px_at_20%_-10%,#5b21b6_0%,transparent_60%),radial-gradient(900px_600px_at_90%_10%,#a21caf_0%,transparent_55%),radial-gradient(800px_500px_at_50%_120%,#3b0764_0%,transparent_60%)] opacity-80"></div>
<div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-[0.17]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?q=80&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
</div>

<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-3 pl-3">
<div className="relative my-4 sm:my-6 rounded-[28px] p-[1px] bg-gradient-to-b from-indigo-500/50 via-cyan-500/40 to-neutral-700/30">
<div className="rounded-[27px] bg-[#0f0720]/80 ring-1 backdrop-blur-xl shadow-[0_30px_120px_-40px_rgba(168,85,247,0.55),inset_0_0_0_1px_rgba(255,255,255,0.04)] ring-white/10">

<header className="sticky top-3 z-40">
<div className="px-4 sm:px-6 pt-4">
<div className="rounded-2xl px-4 sm:px-5 py-3 ring-1 backdrop-blur supports-[backdrop-filter]:bg-white/5 flex items-center justify-between bg-white/5 ring-white/10">
<a className="group inline-flex items-center gap-3 min-w-0" href="#home">
<div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 flex items-center justify-center text-sm font-semibold tracking-tight shadow-[0_8px_30px_rgba(168,85,247,0.55)] to-blue-600 text-white font-jakarta" style={{}}>MJ</div>

<span className="font-medium tracking-tight truncate max-w-[48vw] sm:max-w-none text-neutral-100 font-jakarta" style={{}}>Muhammad Jibran Mubashir</span>
</a>
<nav className="hidden md:flex items-center gap-2">
<a className="px-3 py-2 rounded-lg text-sm transition text-neutral-300 hover:text-white hover:bg-white/5 font-jakarta" href="#home" style={{}}>Home</a>
<a className="px-3 py-2 rounded-lg text-sm transition text-neutral-300 hover:text-white hover:bg-white/5 font-jakarta" href="#about" style={{}}>About</a>
<a className="px-3 py-2 rounded-lg text-sm transition text-neutral-300 hover:text-white hover:bg-white/5 font-jakarta" href="#services" style={{}}>Services</a>
<a className="px-3 py-2 rounded-lg text-sm transition text-neutral-300 hover:text-white hover:bg-white/5 font-jakarta" href="#insights" style={{}}>Insights</a>
<a className="px-3 py-2 rounded-lg text-sm transition text-neutral-300 hover:text-white hover:bg-white/5 font-jakarta" href="#projects" style={{}}>Projects</a>
<a className="px-3 py-2 rounded-lg text-sm transition text-neutral-300 hover:text-white hover:bg-white/5 font-jakarta" href="#testimonials" style={{}}>Testimonials</a>
<a className="px-3 py-2 rounded-lg text-sm transition text-neutral-300 hover:text-white hover:bg-white/5 font-jakarta" href="#contact" style={{}}>Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 px-4 py-2 text-sm font-medium shadow-[0_8px_30px_rgba(168,85,247,0.6)] hover:brightness-110 transition to-blue-600 text-white font-jakarta" href="#contact" style={{}}>
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                    Contact
                  </a>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 bg-white/5 ring-white/10">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</header>

<section className="relative px-4 sm:px-6 pt-14 sm:pt-16" id="home">
<div className="absolute -left-10 top-14 h-40 w-40 rounded-full bg-indigo-500/30 blur-3xl animate-pulse"></div>
<div className="absolute right-10 -top-6 h-48 w-48 rounded-full blur-3xl animate-pulse bg-blue-600/30"></div>
<div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

<div className="lg:col-span-7">
<p className="inline-flex items-center gap-2 text-xs ring-1 rounded-full px-2.5 py-1 backdrop-blur text-neutral-300/90 ring-white/10 bg-white/5 font-jakarta" style={{}}>
<svg className="lucide lucide-stethoscope w-3.5 h-3.5" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
                  Welcome to my world
                </p>
<h1 className="sm:text-5xl leading-tight text-4xl text-white tracking-tight mt-4 font-medium font-manrope" style={{}}>
                  Hi, I’m Muhammad Jibran — MBBS Student
                </h1>
<p className="sm:text-lg text-base text-neutral-300 mt-3 font-jakarta" style={{}}>
                  Passionate about clinical learning, visual medical arts, and evidence‑based research. Exploring how clear visuals and structured thinking can elevate understanding.
                </p>
<div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium ring-1 transition text-white bg-white/10 ring-white/15 hover:bg-white/15 font-jakarta" href="#projects" style={{}}>
<svg className="lucide lucide-folder-open w-4 h-4" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
                    My Projects
                  </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium bg-gradient-to-r from-indigo-500 shadow-[0_10px_35px_-10px_rgba(168,85,247,0.7)] hover:brightness-110 transition text-white to-blue-600 font-jakarta" href="#" style={{}}>
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                    Download CV
                  </a>
</div>
<div className="mt-6 flex items-center gap-3">
<a className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center transition bg-white/10 ring-white/15 hover:bg-white/20" href="#"><svg className="lucide lucide-github w-4.5 h-4.5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
<a className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center transition bg-white/10 ring-white/15 hover:bg-white/20" href="#"><svg className="lucide lucide-linkedin w-4.5 h-4.5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="h-9 w-9 rounded-lg ring-1 flex items-center justify-center transition bg-white/10 ring-white/15 hover:bg-white/20" href="#"><svg className="lucide lucide-twitter w-4.5 h-4.5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>

<div className="lg:col-span-5">
<div className="relative h-[420px] sm:h-[480px] rounded-[28px] p-3 bg-gradient-to-br ring-1 from-indigo-600/30 via-cyan-700/20 to-blue-900/20 ring-white/10">
<div className="absolute -right-6 -top-6 h-28 w-28 rounded-2xl bg-gradient-to-b from-indigo-500 blur-2xl opacity-60 to-blue-600"></div>
<div className="relative h-full rounded-2xl overflow-hidden bg-[#120828]/80 ring-1 ring-white/10">
<img alt="Portrait" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#120828] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 right-4">
<div className="flex items-center gap-2 text-xs text-neutral-200/90 font-jakarta" style={{}}>
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        Karachi, Pakistan • Open to collaborations
                      </div>
</div>
<div className="absolute -left-6 top-10 h-16 w-16 rounded-xl ring-1 rotate-12 bg-white/5 ring-white/10"></div>
<div className="absolute right-6 -bottom-5 h-14 w-14 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 blur-xl opacity-60"></div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 pt-10 sm:pt-14" id="about">
<div className="sm:p-7 bg-white/5 ring-white/10 ring-1 rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur">
<div className="grid md:grid-cols-5 gap-6">
<div className="md:col-span-1">
<div className="h-28 w-28 rounded-2xl bg-gradient-to-b from-indigo-500 p-[2px] to-blue-600">
<div className="h-full w-full rounded-2xl bg-[#0f0720] ring-1 flex items-center justify-center overflow-hidden ring-white/10">
<img alt="Avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>
</div>
<div className="md:col-span-4">
<h2 className="text-2xl sm:text-3xl tracking-tight text-white font-medium font-manrope" style={{}}>About me</h2>
<p className="mt-2 text-sm text-neutral-300 font-jakarta" style={{}}>
                    I’m a medical student focused on clarity in learning and communication. I enjoy translating complex topics into visual stories through tracing and clean diagramming, and I’m developing stronger skills in research and scientific writing.
                  </p>
<div className="mt-4 grid sm:grid-cols-3 gap-3">
<div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
<div className="text-xs text-neutral-300/90 font-jakarta" style={{}}>Education</div>
<div className="mt-1 text-sm text-white font-jakarta" style={{}}>MBBS — JSMU, Karachi (Ongoing)</div>
</div>
<div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
<div className="text-xs text-neutral-300/90 font-jakarta" style={{}}>Focus</div>
<div className="mt-1 text-sm text-white font-jakarta" style={{}}>Anatomy, Physiology, Public Health</div>
</div>
<div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
<div className="text-xs text-neutral-300/90 font-jakarta" style={{}}>Availability</div>
<div className="mt-1 text-sm text-white font-jakarta" style={{}}>Electives, observerships, research</div>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs bg-indigo-500/20 ring-1 text-indigo-200 ring-indigo-400/30 font-jakarta" style={{}}><svg className="lucide lucide-pencil-ruler w-3.5 h-3.5" data-lucide="pencil-ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path><path d="m8 6 2-2"></path><path d="m18 16 2-2"></path><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>Tracing</span>
<span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs bg-blue-500/20 ring-1 text-blue-200 ring-blue-400/30 font-jakarta" style={{}}><svg className="lucide lucide-flask-conical w-3.5 h-3.5" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>Research</span>
<span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs bg-cyan-500/20 ring-1 text-cyan-200 ring-cyan-400/30 font-jakarta" style={{}}><svg className="lucide lucide-book-open w-3.5 h-3.5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>Study Notes</span>
<span className="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs bg-cyan-500/20 ring-1 text-cyan-200 ring-cyan-400/30 font-jakarta" style={{}}><svg className="lucide lucide-gamepad-2 w-3.5 h-3.5" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>Teamwork</span>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 pt-12 sm:pt-16" id="services">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-white font-medium font-manrope" style={{}}>Services</h2>
<p className="mt-1 text-sm text-neutral-300 font-jakarta" style={{}}>Transforming study topics into memorable visuals and clear summaries.</p>
</div>
</div>
<div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

<div className="group rounded-2xl p-5 ring-1 transition bg-white/5 ring-white/10 hover:bg-white/7">
<div className="h-10 w-10 rounded-lg ring-1 flex items-center justify-center bg-white/10 ring-white/15">
<svg className="lucide lucide-pen-tool w-5 h-5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<div className="mt-3 font-medium text-neutral-200 font-jakarta" style={{}}>UI‑style Medical Diagrams</div>
<p className="mt-1.5 text-sm text-neutral-300/90 font-jakarta" style={{}}>Clean line art with clear labels for rapid recall.</p>
</div>

<div className="group rounded-2xl p-5 bg-gradient-to-b ring-1 shadow-[0_20px_70px_-20px_rgba(168,85,247,0.55)] transition hover:brightness-110 from-indigo-600/25 to-blue-700/25 ring-indigo-400/30">
<div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 flex items-center justify-center to-blue-600 text-white">
<svg className="lucide lucide-pencil-ruler w-5 h-5" data-lucide="pencil-ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"></path><path d="m8 6 2-2"></path><path d="m18 16 2-2"></path><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"></path><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</div>
<div className="mt-3 font-medium text-white font-jakarta" style={{}}>Tracing &amp; Drawing</div>
<p className="mt-1.5 text-sm text-neutral-100/90 font-jakarta" style={{}}>Anatomy plates, neat redraws, and labeled sets.</p>
</div>

<div className="group rounded-2xl p-5 ring-1 transition bg-white/5 ring-white/10 hover:bg-white/7">
<div className="h-10 w-10 rounded-lg ring-1 flex items-center justify-center bg-white/10 ring-white/15">
<svg className="lucide lucide-notebook-text w-5 h-5" data-lucide="notebook-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect><path d="M9.5 8h5"></path><path d="M9.5 12H16"></path><path d="M9.5 16H14"></path></svg>
</div>
<div className="mt-3 font-medium text-neutral-200 font-jakarta" style={{}}>Structured Notes</div>
<p className="mt-1.5 text-sm text-neutral-300/90 font-jakarta" style={{}}>Topic breakdowns with mnemonics and visuals.</p>
</div>

<div className="group rounded-2xl p-5 ring-1 transition bg-white/5 ring-white/10 hover:bg-white/7">
<div className="h-10 w-10 rounded-lg ring-1 flex items-center justify-center bg-white/10 ring-white/15">
<svg className="lucide lucide-flask-conical w-5 h-5" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</div>
<div className="mt-3 font-medium text-neutral-200 font-jakarta" style={{}}>Research Support</div>
<p className="mt-1.5 text-sm text-neutral-300/90 font-jakarta" style={{}}>Literature search, synthesis, and figure drafting.</p>
</div>
</div>
</section>

<section className="px-4 sm:px-6 pt-12 sm:pt-16" id="insights">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-white font-medium font-manrope" style={{}}>Insights</h2>
<p className="mt-1 text-sm text-neutral-300 font-jakarta" style={{}}>A quick visual snapshot of skills and study patterns.</p>
</div>
</div>
<div className="mt-7 grid gap-6 lg:grid-cols-3">

<div className="rounded-2xl p-5 ring-1 bg-white/5 ring-white/10">
<div className="flex items-center gap-2 text-xs text-neutral-300 font-jakarta" style={{}}>
<svg className="lucide lucide-radar w-4 h-4" data-lucide="radar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.07 4.93A10 10 0 0 0 6.99 3.34"></path><path d="M4 6h.01"></path><path d="M2.29 9.62A10 10 0 1 0 21.31 8.35"></path><path d="M16.24 7.76A6 6 0 1 0 8.23 16.67"></path><path d="M12 18h.01"></path><path d="M17.99 11.66A6 6 0 0 1 15.77 16.67"></path><circle cx="12" cy="12" r="2"></circle><path d="m13.41 10.59 5.66-5.66"></path></svg>
                  Skills radar
                </div>
<div className="mt-2 text-sm text-white/90 font-jakarta" style={{}}>Balanced strengths across study and visuals</div>
<div className="mt-4 rounded-xl bg-[#120828]/70 ring-1 p-3 ring-white/10">
<div className="relative h-56">
<canvas className="absolute inset-0 w-full h-full" height="280" id="radarChart" style={{display: 'block', boxSizing: 'border-box', height: '224px', width: '224px'}} width="280"></canvas>
</div>
</div>
</div>

<div className="rounded-2xl p-5 ring-1 bg-white/5 ring-white/10">
<div className="flex items-center gap-2 text-xs text-neutral-300 font-jakarta" style={{}}>
<svg className="lucide lucide-pie-chart w-4 h-4" data-lucide="pie-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
                  Weekly focus
                </div>
<div className="mt-2 text-sm text-white/90 font-jakarta" style={{}}>How time is allocated</div>
<div className="mt-4 rounded-xl bg-[#120828]/70 ring-1 p-3 ring-white/10">
<div className="relative h-56">
<canvas className="absolute inset-0 w-full h-full" height="280" id="donutChart" style={{display: 'block', boxSizing: 'border-box', height: '224px', width: '224px'}} width="280"></canvas>
</div>
</div>
</div>

<div className="rounded-2xl p-5 ring-1 bg-white/5 ring-white/10">
<div className="flex items-center gap-2 text-xs text-neutral-300 font-jakarta" style={{}}>
<svg className="lucide lucide-line-chart w-4 h-4" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
                  Study trend
                </div>
<div className="mt-2 text-sm text-white/90 font-jakarta" style={{}}>Hours studied this month</div>
<div className="mt-4 rounded-xl bg-[#120828]/70 ring-1 p-3 ring-white/10">
<div className="relative h-56">
<canvas className="absolute inset-0 w-full h-full" height="143" id="lineChart" style={{display: 'block', boxSizing: 'border-box', height: '114px', width: '228px'}} width="286"></canvas>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 pt-12 sm:pt-16" id="projects">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-white font-medium font-manrope" style={{}}>My Projects</h2>
<p className="mt-1 text-sm text-neutral-300 font-jakarta" style={{}}>Selected work in visual study and academic contributions.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 text-sm transition text-neutral-200 hover:text-white font-jakarta" href="#contact" style={{}}>
                Collaborate
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

<article className="group rounded-2xl overflow-hidden ring-1 transition bg-white/5 ring-white/10 hover:bg-white/7">
<div className="relative aspect-[16/10]">
<img alt="Anatomy workspace" className="absolute inset-0 w-full h-full object-cover opacity-95" src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#120828] via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-300 font-jakarta" style={{}}>
<svg className="lucide lucide-pencil w-3.5 h-3.5" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
                    Visual Study
                  </div>
<h3 className="mt-1.5 text-lg tracking-tight font-semibold text-white font-jakarta" style={{}}>Anatomy Tracing &amp; Diagramming</h3>
<p className="mt-1.5 text-sm text-neutral-300 font-jakarta" style={{}}>Clean linework and labeled diagrams for memorization and clarity.</p>
</div>
</article>

<article className="group rounded-2xl overflow-hidden ring-1 transition bg-white/5 ring-white/10 hover:bg-white/7">
<div className="relative aspect-[16/10]">
<img alt="Study notes" className="absolute inset-0 w-full h-full object-cover opacity-95" src="https://images.unsplash.com/photo-1557825835-70d97c4aa567?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#120828] via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-300 font-jakarta" style={{}}>
<svg className="lucide lucide-book-open w-3.5 h-3.5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                    Academics
                  </div>
<h3 className="mt-1.5 text-lg tracking-tight font-semibold text-white font-jakarta" style={{}}>Structured Notes &amp; Summaries</h3>
<p className="mt-1.5 text-sm text-neutral-300 font-jakarta" style={{}}>Concise topic breakdowns aligning theory with applied understanding.</p>
</div>
</article>

<article className="group rounded-2xl overflow-hidden ring-1 transition bg-white/5 ring-white/10 hover:bg-white/7">
<div className="relative aspect-[16/10]">
<img alt="Lab research" className="absolute inset-0 w-full h-full object-cover opacity-95" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#120828] via-transparent to-transparent"></div>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-neutral-300 font-jakarta" style={{}}>
<svg className="lucide lucide-beaker w-3.5 h-3.5" data-lucide="beaker" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 3h15"></path><path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path><path d="M6 14h12"></path></svg>
                    Research
                  </div>
<h3 className="mt-1.5 text-lg tracking-tight font-semibold text-white font-jakarta" style={{}}>Areas of Interest</h3>
<p className="mt-1.5 text-sm text-neutral-300 font-jakarta" style={{}}>Exploring opportunities in anatomy education and public health topics.</p>
</div>
</article>
</div>
</section>

<section className="px-4 sm:px-6 pt-12 sm:pt-16" id="testimonials">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight text-white font-medium font-manrope" style={{}}>Testimonials</h2>
<p className="mt-1 text-sm text-neutral-300 font-jakarta" style={{}}>Kind words from collaborators and peers.</p>
</div>
</div>
<div className="mt-7 grid gap-5 md:grid-cols-3">
<div className="rounded-2xl p-5 ring-1 backdrop-blur transition bg-white/5 ring-white/10 hover:bg-white/7">
<p className="text-sm text-neutral-200/90 font-jakarta" style={{}}>“Clear visuals and structured notes made complex concepts far easier for our group.”</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Person" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-jakarta" style={{}}>Peer, Study Circle</div>
<div className="text-xs text-neutral-400 font-jakarta" style={{}}>Anatomy</div>
</div>
</div>
</div>
<div className="rounded-2xl p-5 bg-gradient-to-b ring-1 shadow-[0_20px_70px_-20px_rgba(168,85,247,0.45)] transition from-indigo-600/20 to-blue-700/20 ring-indigo-400/25">
<p className="text-sm text-neutral-100 font-jakarta" style={{}}>“Great attention to detail and an evidence‑based mindset in research summaries.”</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Person" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-jakarta" style={{}}>Research Mentor</div>
<div className="text-xs text-neutral-400 font-jakarta" style={{}}>Public Health</div>
</div>
</div>
</div>
<div className="rounded-2xl p-5 ring-1 backdrop-blur transition bg-white/5 ring-white/10 hover:bg-white/7">
<p className="text-sm text-neutral-200/90 font-jakarta" style={{}}>“Collaborative, punctual, and strong communication across the team.”</p>
<div className="mt-4 flex items-center gap-3">
<img alt="Person" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1547427513-0f137f8d2c37?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm text-white font-jakarta" style={{}}>Team Lead</div>
<div className="text-xs text-neutral-400 font-jakarta" style={{}}>Student Project</div>
</div>
</div>
</div>
</div>
</section>

<section className="px-4 sm:px-6 pt-12 sm:pt-16 pb-10 sm:pb-14" id="contact">
<div className="grid lg:grid-cols-5 gap-8">
<div className="lg:col-span-2">
<h2 className="text-2xl sm:text-3xl tracking-tight text-white font-medium font-manrope" style={{}}>Let’s create something great</h2>
<p className="mt-2 text-sm text-neutral-300 font-jakarta" style={{}}>For electives, observerships, or research—reach out anytime.</p>
<div className="mt-6 space-y-3">
<a className="group flex items-center gap-3 text-sm text-neutral-200 hover:text-white" href="mailto:">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 group-hover:bg-white/10 transition bg-white/5 ring-white/10">
<svg className="lucide lucide-mail w-4.5 h-4.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</span>
<span className="font-jakarta" style={{}}>Email</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 opacity-70 group-hover:opacity-100 transition ml-auto" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
<a className="group flex items-center gap-3 text-sm text-neutral-200 hover:text-white" href="#">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 group-hover:bg-white/10 transition bg-white/5 ring-white/10">
<svg className="lucide lucide-linkedin w-4.5 h-4.5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</span>
<span className="font-jakarta" style={{}}>LinkedIn</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4 opacity-70 group-hover:opacity-100 transition ml-auto" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
<div className="lg:col-span-3">
<form action="mailto:?subject=Contact%20from%20Portfolio" className="rounded-2xl p-5 sm:p-6 ring-1 bg-white/5 ring-white/10" enctype="text/plain" method="post">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-neutral-200 font-jakarta" style={{}}>Name</label>
<input className="mt-1 w-full rounded-xl border-0 ring-1 px-3 py-2 text-sm placeholder-neutral-400 focus:ring-2 focus:ring-indigo-500/50 outline-none ring-white/10 bg-white/5 text-white" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="text-sm text-neutral-200 font-jakarta" style={{}}>Email</label>
<input className="mt-1 w-full rounded-xl border-0 ring-1 px-3 py-2 text-sm placeholder-neutral-400 focus:ring-2 focus:ring-indigo-500/50 outline-none ring-white/10 bg-white/5 text-white" placeholder="you@example.com" required="" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-neutral-200 font-jakarta" style={{}}>Subject</label>
<input className="mt-1 w-full rounded-xl border-0 ring-1 px-3 py-2 text-sm placeholder-neutral-400 focus:ring-2 focus:ring-indigo-500/50 outline-none ring-white/10 bg-white/5 text-white" placeholder="How can I help?" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm text-neutral-200 font-jakarta" style={{}}>Message</label>
<textarea className="mt-1 w-full rounded-xl border-0 ring-1 px-3 py-2 text-sm placeholder-neutral-400 focus:ring-2 focus:ring-indigo-500/50 outline-none ring-white/10 bg-white/5 text-white" placeholder="Write your message..." rows="5"></textarea>
</div>
</div>
<div className="mt-4 flex items-center justify-between">
<p className="text-xs text-neutral-400 font-jakarta" style={{}}>I usually reply within a couple of days.</p>
<button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 px-4 py-2 text-sm font-medium shadow-[0_10px_30px_-10px_rgba(168,85,247,0.7)] hover:brightness-110 transition to-blue-600 text-white font-jakarta" style={{}} type="submit">
                      Send message
                      <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="px-4 sm:px-6 pb-8">
<div className="rounded-2xl px-5 py-5 ring-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/5 ring-white/10">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 flex items-center justify-center text-sm font-semibold to-blue-600 text-white font-jakarta" style={{}}>MJ</div>
<div>
<p className="text-sm font-medium text-white font-jakarta" style={{}}>Muhammad Jibran Mubashir</p>
<p className="text-xs text-neutral-400 font-jakarta" style={{}}>MBBS Student • JSMU, Karachi</p>
</div>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="text-neutral-300 hover:text-white font-jakarta" href="#home" style={{}}>Home</a>
<a className="text-neutral-300 hover:text-white font-jakarta" href="#projects" style={{}}>Projects</a>
<a className="text-neutral-300 hover:text-white font-jakarta" href="#insights" style={{}}>Insights</a>
<a className="text-neutral-300 hover:text-white font-jakarta" href="#contact" style={{}}>Contact</a>
</div>
</div>
<div className="mt-4 text-xs text-neutral-500 font-jakarta" style={{}}>© <span className="font-jakarta" id="year" style={{}}>2025</span> Muhammad Jibran Mubashir. All rights reserved.</div>
</footer>
</div>
</div>
</div>





    </>
  );
}
