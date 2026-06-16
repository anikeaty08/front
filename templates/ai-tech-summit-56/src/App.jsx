import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
purple: {
400: '#c084fc',
500: '#a855f7',
900: '#581c87',
950: '#3b0764',
},
zinc: {
850: '#1f1f22',
950: '#09090b', // Deep black
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 nav-glass">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-purple-500/20 rounded flex items-center justify-center border border-purple-500/30">
<span className="iconify text-purple-400" data-icon="lucide:zap" data-width="12"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-200">
            TNT 1.0
          </span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#schedule">
            Schedule
          </a>
<a className="hover:text-white transition-colors" href="#speakers">
            Speakers
          </a>
<a className="hover:text-white transition-colors" href="#partners">
            Partners
          </a>
<a className="hover:text-white transition-colors" href="#resources">
            Resources
          </a>
</div>
<button className="text-xs font-medium px-3 py-1.5 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all shadow-[0_0_15px_-5px_rgba(168,85,247,0.4)]">
          Register Interest
        </button>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center border-b border-white/5">
<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none opacity-50"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
<span className="text-xs text-zinc-300 tracking-wide font-medium uppercase">
          Jan 17th 2026
        </span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-4">
        The Next Tech
        <span className="text-purple-400 opacity-90">1.0</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 tracking-tight mb-8 font-light">
        Unwire
        <span className="text-zinc-600 px-2">|</span>
        Unplug
        <span className="text-zinc-600 px-2">|</span>
        Unleash
      </p>
<div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-sm text-zinc-400">
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-white/5">
<span className="iconify text-purple-400" data-icon="lucide:map-pin"></span>
          Masters’ Union Campus | DLF Audi
        </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900/50 border border-white/5">
<span className="iconify text-purple-400" data-icon="lucide:clock"></span>
          1000 - 1900 IST
        </div>
</div>
</header>
<main className="max-w-6xl mx-auto px-6 py-16 space-y-24">

<section>
<h2 className="text-lg font-medium tracking-tight mb-6 flex items-center gap-2">
<span className="iconify text-purple-400" data-icon="lucide:box"></span>
          Experience Zones
        </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="glass-card p-6 rounded-xl hover:border-purple-500/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-zinc-500 group-hover:text-purple-400 transition-colors" data-icon="lucide:gamepad-2" data-width="24"></span>
<span className="text-[10px] uppercase tracking-wider bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/20">
                Demo
              </span>
</div>
<h3 className="text-sm font-semibold text-zinc-200 mb-1">
              Tesla Suit Experience
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              Haptic feedback VR immersion. 10-minute dedicated slots available.
            </p>
</div>
<div className="glass-card p-6 rounded-xl hover:border-purple-500/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-zinc-500 group-hover:text-purple-400 transition-colors" data-icon="lucide:rocket" data-width="24"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-200 mb-1">
              Startup Alley
            </h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              5-6 SaaS startups pitching and demoing cutting-edge offerings.
            </p>
</div>
<div className="glass-card p-6 rounded-xl hover:border-purple-500/30 transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="iconify text-zinc-500 group-hover:text-purple-400 transition-colors" data-icon="lucide:cpu" data-width="24"></span>
</div>
<h3 className="text-sm font-semibold text-zinc-200 mb-1">Makers Lab</h3>
<p className="text-xs text-zinc-500 leading-relaxed">
              MU PwC AI Tech Lab projects. Student work showcase.
            </p>
</div>
</div>
</section>

<section className="relative" id="schedule">
<div className="space-y-32">

<div>
<div className="flex items-center justify-between mb-10">
<div>
<span className="text-xs font-mono text-purple-400 mb-2 block">
                  Variation 01
                </span>
<h2 className="text-2xl font-semibold tracking-tight text-white">
                  Minimal Timeline
                </h2>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-500">
<span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                Live Updates
              </div>
</div>
<div className="relative border-l border-white/10 ml-3 space-y-12 pb-4">

<div className="relative pl-8 group">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-purple-500 group-hover:border-purple-400 transition-colors"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
<span className="text-xs font-mono text-zinc-500 min-w-[80px]">
                    0900 – 1000
                  </span>
<div className="flex-1">
<h3 className="text-sm font-medium text-white">
                      Arrival + Registrations
                    </h3>
<p className="text-xs text-zinc-500 mt-1">Emcee: Dr Nandini</p>
</div>
</div>
</div>

<div className="relative pl-8 group">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-purple-500 group-hover:border-purple-400 transition-colors"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
<span className="text-xs font-mono text-zinc-500 min-w-[80px]">
                    1000 – 1015
                  </span>
<div className="flex-1">
<h3 className="text-sm font-medium text-white">
                      Grand Welcome &amp; Opening
                    </h3>
<p className="text-xs text-zinc-500 mt-1">
                      Brand Video + Summit Objective
                    </p>
</div>
</div>
</div>

<div className="relative pl-8 group">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
<div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
<span className="text-xs font-mono text-purple-400 min-w-[80px]">
                    1130 – 1200
                  </span>
<div className="flex-1 glass-card p-4 rounded-lg border-purple-500/20">
<div className="flex items-center gap-2 mb-2">
<span className="iconify text-purple-400" data-icon="lucide:play-circle"></span>
<h3 className="text-sm font-semibold text-white">
                        Special Screening: Teslasuit Demo
                      </h3>
</div>
<p className="text-xs text-zinc-600 mt-2 italic">
                      Host: Dr Nandini
                    </p>
</div>
</div>
</div>

<div className="relative pl-8 group">
<div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600 group-hover:bg-purple-500 group-hover:border-purple-400 transition-colors"></div>
<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
<span className="text-xs font-mono text-zinc-500 min-w-[80px]">
                    1230 – 1340
                  </span>
<div className="flex-1">
<h3 className="text-sm font-medium text-white">
                      Masterclass: Gemini 2.5
                    </h3>
<p className="text-xs text-zinc-500 mt-1">
                      Nano-Banana Architecture
                    </p>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="mb-10">
<span className="text-xs font-mono text-purple-400 mb-2 block">
                Variation 02
              </span>
<h2 className="text-2xl font-semibold tracking-tight text-white">
                Structured Grid
              </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-zinc-900/30 border border-white/5 p-5 rounded-xl hover:border-purple-500/20 transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">
                    09:00 AM
                  </span>
<span className="iconify text-zinc-600 group-hover:text-purple-400 transition-colors" data-icon="lucide:user"></span>
</div>
<h3 className="text-sm font-semibold text-white mb-1">
                  Arrival + Registrations
                </h3>
<p className="text-xs text-zinc-500">Emcee: Dr Nandini</p>
</div>
<div className="bg-zinc-900/30 border border-white/5 p-5 rounded-xl hover:border-purple-500/20 transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">
                    10:00 AM
                  </span>
<span className="iconify text-zinc-600 group-hover:text-purple-400 transition-colors" data-icon="lucide:mic"></span>
</div>
<h3 className="text-sm font-semibold text-white mb-1">
                  Grand Welcome
                </h3>
<p className="text-xs text-zinc-500">
                  Brand Video + Summit Objective
                </p>
</div>
<div className="bg-purple-900/10 border border-purple-500/20 p-5 rounded-xl hover:bg-purple-900/20 transition-all group md:col-span-2">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-purple-300 bg-purple-500/20 px-2 py-1 rounded">
                    11:30 AM
                  </span>
<span className="iconify text-purple-400 animate-pulse" data-icon="lucide:zap"></span>
</div>
<h3 className="text-sm font-semibold text-white mb-1">
                  Special Screening: Teslasuit Live Demo
                </h3>
<p className="text-xs text-zinc-400">
                  2 volunteers for stage demo | 5 lucky winners
                </p>
</div>
<div className="bg-zinc-900/30 border border-white/5 p-5 rounded-xl hover:border-purple-500/20 transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">
                    12:30 PM
                  </span>
<span className="iconify text-zinc-600 group-hover:text-purple-400 transition-colors" data-icon="lucide:cpu"></span>
</div>
<h3 className="text-sm font-semibold text-white mb-1">
                  Masterclass: Gemini 2.5
                </h3>
<p className="text-xs text-zinc-500">
                  Deep-Dive into Nano-Banana Architecture
                </p>
</div>
<div className="bg-zinc-900/30 border border-white/5 p-5 rounded-xl hover:border-purple-500/20 transition-all group">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-zinc-500 bg-zinc-800/50 px-2 py-1 rounded">
                    14:45 PM
                  </span>
<span className="iconify text-zinc-600 group-hover:text-purple-400 transition-colors" data-icon="lucide:flame"></span>
</div>
<h3 className="text-sm font-semibold text-white mb-1">
                  Fireside: AI Inflection
                </h3>
<p className="text-xs text-zinc-500">From Consumers to Creators</p>
</div>
</div>
</div>

<div>
<div className="mb-10">
<span className="text-xs font-mono text-purple-400 mb-2 block">
                Variation 03
              </span>
<h2 className="text-2xl font-semibold tracking-tight text-white">
                Visual Timeline
              </h2>
</div>
<div className="space-y-6">

<div className="flex flex-col md:flex-row gap-6 group">
<div className="hidden md:flex flex-col items-end min-w-[100px] pt-4">
<span className="text-sm font-semibold text-white">10:00</span>
<span className="text-xs text-zinc-500">AM</span>
</div>
<div className="relative flex-1 bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden flex flex-col sm:flex-row hover:border-purple-500/30 transition-all">
<div className="w-full sm:w-48 h-32 relative">
<img alt="Keynote" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent sm:bg-gradient-to-r"></div>
</div>
<div className="p-6 flex flex-col justify-center">
<h3 className="text-base font-semibold text-white mb-2">
                      Opening Ceremony
                    </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                      Grand welcome note by the organizers followed by a
                      cinematic brand video reveal.
                    </p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 group">
<div className="hidden md:flex flex-col items-end min-w-[100px] pt-4">
<span className="text-sm font-semibold text-white">11:30</span>
<span className="text-xs text-zinc-500">AM</span>
</div>
<div className="relative flex-1 bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden flex flex-col sm:flex-row hover:border-purple-500/30 transition-all">
<div className="w-full sm:w-48 h-32 relative">
<img alt="VR" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent sm:bg-gradient-to-r"></div>
<div className="absolute top-2 left-2 bg-purple-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      LIVE DEMO
                    </div>
</div>
<div className="p-6 flex flex-col justify-center">
<h3 className="text-base font-semibold text-white mb-2">
                      Teslasuit Experience
                    </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                      Live demonstration of haptic feedback suits with volunteer
                      participation on stage.
                    </p>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 group">
<div className="hidden md:flex flex-col items-end min-w-[100px] pt-4">
<span className="text-sm font-semibold text-white">16:00</span>
<span className="text-xs text-zinc-500">PM</span>
</div>
<div className="relative flex-1 bg-zinc-900/40 border border-white/5 rounded-2xl overflow-hidden flex flex-col sm:flex-row hover:border-purple-500/30 transition-all">
<div className="w-full sm:w-48 h-32 relative">
<img alt="E-commerce" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent sm:bg-gradient-to-r"></div>
</div>
<div className="p-6 flex flex-col justify-center">
<h3 className="text-base font-semibold text-white mb-2">
                      E-Commerce Demos
                    </h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                      Real-world AI implementation showcases from Blinkit,
                      Zepto, and Lenskart engineering teams.
                    </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section id="partners">
<h2 className="text-lg font-medium tracking-tight mb-8 text-center text-zinc-300">
          Supported By Industry Leaders
        </h2>
<div className="space-y-12">

<div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-lg overflow-hidden">

<div className="bg-[#050505] p-6 flex items-center justify-center hover:bg-zinc-900 transition-colors group h-24">
<span className="font-semibold text-sm tracking-tight text-zinc-400 group-hover:text-white">
                Google Cloud
              </span>
</div>
<div className="bg-[#050505] p-6 flex items-center justify-center hover:bg-zinc-900 transition-colors group h-24">
<span className="font-semibold text-sm tracking-tight text-zinc-400 group-hover:text-white">
                Microsoft Azure
              </span>
</div>
<div className="bg-[#050505] p-6 flex items-center justify-center hover:bg-zinc-900 transition-colors group h-24">
<span className="font-semibold text-sm tracking-tight text-zinc-400 group-hover:text-white">
                AWS India
              </span>
</div>
<div className="bg-[#050505] p-6 flex items-center justify-center hover:bg-zinc-900 transition-colors group h-24">
<span className="font-semibold text-sm tracking-tight text-zinc-400 group-hover:text-white">
                NVIDIA
              </span>
</div>
<div className="bg-[#050505] p-6 flex items-center justify-center hover:bg-zinc-900 transition-colors group h-24">
<span className="font-semibold text-sm tracking-tight text-zinc-400 group-hover:text-white">
                Sarvam AI
              </span>
</div>
<div className="bg-[#050505] p-6 flex items-center justify-center hover:bg-zinc-900 transition-colors group h-24">
<span className="font-semibold text-sm tracking-tight text-zinc-400 group-hover:text-white">
                Krutrim AI
              </span>
</div>
<div className="bg-[#050505] p-6 flex items-center justify-center hover:bg-zinc-900 transition-colors group h-24">
<span className="font-semibold text-sm tracking-tight text-zinc-400 group-hover:text-white">
                Ola Electric
              </span>
</div>
<div className="bg-[#050505] p-6 flex items-center justify-center hover:bg-zinc-900 transition-colors group h-24">
<span className="font-semibold text-sm tracking-tight text-zinc-400 group-hover:text-white">
                Fractal
              </span>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<div className="text-center p-3 rounded bg-white/5 border border-white/5 text-xs text-zinc-500 font-medium">
              Peak XV
            </div>
<div className="text-center p-3 rounded bg-white/5 border border-white/5 text-xs text-zinc-500 font-medium">
              Accel
            </div>
<div className="text-center p-3 rounded bg-white/5 border border-white/5 text-xs text-zinc-500 font-medium">
              Pi Ventures
            </div>
<div className="text-center p-3 rounded bg-white/5 border border-white/5 text-xs text-zinc-500 font-medium">
              Elevation
            </div>
<div className="text-center p-3 rounded bg-white/5 border border-white/5 text-xs text-zinc-500 font-medium">
              Yellow.ai
            </div>
</div>

<div className="flex flex-wrap justify-center gap-6 pt-6 border-t border-white/5">
<span className="text-xs text-zinc-600 font-medium flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:book-open"></span>
              NASSCOM
            </span>
<span className="text-xs text-zinc-600 font-medium flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:code-2"></span>
              Google Developers
            </span>
<span className="text-xs text-zinc-600 font-medium flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:bar-chart-2"></span>
              Analytics India
            </span>
<span className="text-xs text-zinc-600 font-medium flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:newspaper"></span>
              Inc42
            </span>
</div>
</div>
</section>

<footer className="pt-12 border-t border-white/10 mt-12" id="resources">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div>
<h3 className="text-sm font-semibold text-zinc-200">
              Internal Resources
            </h3>
<p className="text-xs text-zinc-500 mt-1">
              Restricted Access for MR Team
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full md:w-auto">
<a className="flex items-center justify-between gap-4 px-4 py-2 rounded bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 hover:bg-zinc-800 transition-all group w-full md:w-64" href="#">
<div className="flex items-center gap-2">
<span className="iconify text-purple-400" data-icon="lucide:file-spreadsheet"></span>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200">
                  Outreach Status Sheet
                </span>
</div>
<span className="iconify text-zinc-600 group-hover:text-zinc-400" data-icon="lucide:arrow-right" data-width="12"></span>
</a>
<a className="flex items-center justify-between gap-4 px-4 py-2 rounded bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 hover:bg-zinc-800 transition-all group w-full md:w-64" href="#">
<div className="flex items-center gap-2">
<span className="iconify text-green-400" data-icon="lucide:dollar-sign"></span>
<span className="text-xs text-zinc-400 group-hover:text-zinc-200">
                  Commercial Strategy
                </span>
</div>
<span className="iconify text-zinc-600 group-hover:text-zinc-400" data-icon="lucide:lock" data-width="12"></span>
</a>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-[10px] text-zinc-700 font-mono">
            © 2026 The Next Tech. All rights reserved.
            <br/>
            Design System v1.0.4
          </p>
</div>
</footer>
</main>

    </>
  );
}
