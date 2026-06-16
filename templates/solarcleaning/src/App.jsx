import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();
      const btn = document.getElementById('mobile-toggle');
      const menu = document.getElementById('mobile-menu');
      if(btn && menu) {
          btn.addEventListener('click', () => {
              const isHidden = menu.classList.toggle('hidden');
              btn.innerHTML = isHidden
                  ? '<i data-lucide="menu" class="w-6 h-6"></i>'
                  : '<i data-lucide="x" class="w-6 h-6"></i>';
              lucide.createIcons();
          });
          menu.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
              menu.classList.add('hidden');
              btn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
              lucide.createIcons();
          }));
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-4 left-4 right-4 md:left-10 md:right-10 z-50 rounded-2xl border border-white/40 shadow-sm glass-panel ring-1 ring-black/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-amber-300 group-hover:rotate-180 transition-transform duration-500">
<svg className="lucide lucide-sun w-5 h-5 text-white stroke-[2.5]" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<a className="inline-flex items-center justify-center bg-center w-[200px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a22ab03d-4600-4839-9a4e-ff7a4ab8a580_1600w.png)] bg-cover rounded invert" href="#"></a>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-500 hover:text-violet-600 transition-colors" href="#process">
            Process
          </a>
<a className="text-sm font-semibold text-slate-500 hover:text-violet-600 transition-colors" href="#benefits">
            Benefits
          </a>
<a className="text-sm font-semibold text-slate-500 hover:text-violet-600 transition-colors" href="#compare">
            Comparison
          </a>
<a className="text-sm font-semibold text-slate-500 hover:text-violet-600 transition-colors" href="#faq">
            FAQ
          </a>
</div>
<a className="hidden md:flex items-center gap-2 bg-slate-900 hover:bg-violet-600 text-white text-xs font-bold py-2.5 px-5 rounded-full transition-all shadow-lg hover:shadow-violet-200 hover:-translate-y-0.5 active:translate-y-0" href="#book">
          Get Instant Quote
          <svg className="lucide lucide-sparkles w-3 h-3 stroke-[2]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</a>
<button aria-label="Toggle menu" className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 rounded-lg transition-colors" id="mobile-toggle">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="hidden md:hidden border-t border-slate-200/50 pt-2 pb-4 px-2 flex flex-col gap-1 mt-2" id="mobile-menu">
<a className="block py-3 px-4 text-sm font-bold text-slate-600 hover:text-violet-600 hover:bg-slate-50/80 rounded-xl transition-colors" href="#process">
          Process
        </a>
<a className="block py-3 px-4 text-sm font-bold text-slate-600 hover:text-violet-600 hover:bg-slate-50/80 rounded-xl transition-colors" href="#benefits">
          Benefits
        </a>
<a className="block py-3 px-4 text-sm font-bold text-slate-600 hover:text-violet-600 hover:bg-slate-50/80 rounded-xl transition-colors" href="#compare">
          Comparison
        </a>
<a className="block py-3 px-4 text-sm font-bold text-slate-600 hover:text-violet-600 hover:bg-slate-50/80 rounded-xl transition-colors" href="#faq">
          FAQ
        </a>
<a className="mt-2 flex items-center justify-center gap-2 bg-slate-900 hover:bg-violet-600 text-white text-sm font-bold py-3.5 px-5 rounded-xl transition-all shadow-md mx-2" href="#book">
          Get Instant Quote
          <svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-36 pb-20 relative">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob-anim"></div>
<div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-violet-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob-anim" style={{animationDelay: '2s'}}></div>
<div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 blob-anim" style={{animationDelay: '4s'}}></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-violet-100 mb-8 shadow-[0_2px_10px_-3px_rgba(167,139,250,0.3)] hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gradient-to-r from-orange-500 to-amber-500"></span>
</span>
<span className="text-xs font-bold text-slate-600 tracking-wide uppercase">
            Serving Riverside &amp; San Bernardino
          </span>
</div>
<h1 className="text-5xl md:text-8xl font-extrabold tracking-tight text-slate-900 mb-8 max-w-5xl mx-auto leading-[1.1] md:leading-[1.05]">
          Restore your solar to
          <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-violet-600">
            peak performance.
          </span>
</h1>
<p className="text-lg md:text-2xl text-slate-500 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Local dust + Santa Ana winds =
          <span className="inline-block -rotate-2 bg-slate-100 border border-slate-200 px-2 rounded-md text-slate-800 text-base align-middle mx-1 shadow-sm">
            lost money 💸
          </span>
<br/>
          We use pure deionized water to bring your efficiency back to 100%.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
<a className="w-full md:w-auto bg-slate-900 hover:bg-violet-600 text-white h-14 px-8 rounded-full flex items-center justify-center gap-2 text-base font-bold transition-all shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-violet-200 hover:-translate-y-1 active:scale-95 group" href="#book">
            Get Free Estimate
            <svg className="lucide lucide-zap w-5 h-5 fill-yellow-400 text-yellow-400 group-hover:fill-white group-hover:text-white transition-colors" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</a>
<a className="w-full md:w-auto bg-white border-2 border-slate-100 hover:border-slate-300 text-slate-700 h-14 px-8 rounded-full flex items-center justify-center gap-2 text-base font-bold transition-all hover:-translate-y-1 active:scale-95" href="#process">
            See Our Work
          </a>
</div>

<div className="relative max-w-6xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 h-full w-full pointer-events-none"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 relative h-72 md:h-[28rem] rounded-[2rem] overflow-hidden shadow-2xl shadow-violet-100/50 group border-4 border-white rotate-1 hover:rotate-0 transition-all duration-500">
<img alt="Solar panel cleaning on roof" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f3d31038-c5b4-41af-ade4-aff554b56edc_1600w.png"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl border border-white/20 shadow-lg">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-xs">
                      M
                    </div>
<div className="">
<p className="text-sm font-bold text-slate-800">
                        Technician: Marcus
                      </p>
<p className="text-xs font-medium text-slate-500">
                        Job: Corona, CA
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:grid grid-rows-2 gap-6 h-[28rem]">
<div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-amber-100/50 group border-4 border-white -rotate-2 hover:rotate-0 transition-all duration-500 z-10">
<img alt="Clean solar panels blue sky" className="transition-transform duration-700 group-hover:scale-110 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1660330589257-813305a4a383?w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Sparkling! ✨
                </div>
</div>
<div className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-cyan-100/50 group border-4 border-white rotate-2 hover:rotate-0 transition-all duration-500">
<img alt="Water fed pole equipment" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-center bg-violet-900/10 bg-[url(https://images.unsplash.com/photo-1660330589505-9a433a742a7b?w=320&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md rounded-full p-4 border border-white/40 shadow-inner">
<svg className="lucide lucide-droplets w-8 h-8 text-white stroke-[2] drop-shadow-md" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
</div>
</div>
</div>
</div>
<div className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-80">
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-bold tracking-widest text-slate-500">
              LICENSED #94821
            </span>
</div>
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-xs font-bold tracking-widest text-slate-500">
              INSURED
            </span>
</div>
<div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
<div className="w-2 h-2 rounded-full bg-amber-500"></div>
<span className="text-xs font-bold tracking-widest text-slate-500">
              5-STAR RATED
            </span>
</div>
</div>
</div>
</section>

<section className="py-28 bg-white border-y border-slate-100 relative" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div className="">
<div className="mb-12">
<span className="text-violet-600 font-bold tracking-wider text-xs uppercase mb-2 block">
                How it works
              </span>
<h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Professional care,
                <br/>
                zero hassle.
              </h2>
<p className="text-lg text-slate-500 font-medium max-w-sm">
                We've simplified the process to get your system back to 100%
                output without you lifting a finger.
              </p>
</div>
<div className="space-y-8">

<div className="flex gap-6 group p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
<div className="flex-shrink-0 w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
<svg className="lucide lucide-calendar-check w-6 h-6 text-blue-600 stroke-[2]" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900 mb-2">
                    1. Instant Assessment
                  </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-sm font-medium">
                    We review satellite imagery of your roof to provide an
                    instant quote by phone or email. No home visit needed.
                  </p>
</div>
</div>

<div className="flex gap-6 group p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
<div className="flex-shrink-0 w-14 h-14 bg-violet-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
<svg className="lucide lucide-waves w-6 h-6 text-violet-600 stroke-[2]" data-lucide="waves" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900 mb-2">
                    2. Pure Water Scrub
                  </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-sm font-medium">
                    Technicians use mobile RODI systems to filter local water to
                    0 PPM. We scrub with specialized boar's hair brushes.
                  </p>
</div>
</div>

<div className="flex gap-6 group p-4 rounded-2xl hover:bg-slate-50 transition-colors duration-300">
<div className="flex-shrink-0 w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
<svg className="lucide lucide-sun-medium w-6 h-6 text-amber-600 stroke-[2]" data-lucide="sun-medium" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 3v1"></path><path d="M12 20v1"></path><path d="M3 12h1"></path><path d="M20 12h1"></path><path d="m18.364 5.636-.707.707"></path><path d="m6.343 17.657-.707.707"></path><path d="m5.636 5.636.707.707"></path><path d="m17.657 17.657.707.707"></path></svg>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900 mb-2">
                    3. Proof of Results
                  </h3>
<p className="text-sm text-slate-500 leading-relaxed max-w-sm font-medium">
                    You receive a completion report with high-res before/after
                    photos, and your system returns to peak efficiency.
                  </p>
</div>
</div>
</div>
</div>

<div className="relative h-[650px] rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white group">
<img alt="Technician cleaning solar panel" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-10 left-8 right-8 bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-transform">
<div className="flex items-center justify-between mb-6">
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Before / After
                  </p>
<p className="text-lg font-bold text-slate-900">
                    Efficiency Restoration
                  </p>
</div>
<span className="bg-green-100 text-green-700 text-xs font-extrabold px-3 py-1.5 rounded-full border border-green-200 shadow-sm">
                  +28% Gain
                </span>
</div>
<div className="h-4 w-full bg-slate-100 rounded-full overflow-hidden flex ring-1 ring-slate-900/5">
<div className="h-full bg-slate-300 w-[70%] relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]"></div>
</div>
<div className="h-full bg-green-500 w-[30%] relative overflow-hidden">
<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_2s_infinite]"></div>
</div>
</div>
<div className="flex justify-between mt-3 text-xs font-bold text-slate-400">
<span>Dirty Output</span>
<span className="text-green-600">Restored Output</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-slate-50 relative overflow-hidden" id="benefits">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[30rem] h-[30rem] bg-amber-100 rounded-full blur-3xl opacity-60"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[30rem] h-[30rem] bg-violet-100 rounded-full blur-3xl opacity-60"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
<div className="">
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
              Why clean panels matter
              <br/>
              in the Inland Empire
            </h2>
<div className="space-y-4">
<div className="flex gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-green-100 hover:border-green-100 transition-all duration-300 group cursor-default">
<div className="mt-1 bg-green-100 rounded-2xl p-3 h-fit text-green-600 group-hover:scale-110 group-hover:rotate-6 transition-transform">
<svg className="lucide lucide-dollar-sign w-6 h-6 stroke-[2.5]" data-lucide="dollar-sign" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
</div>
<div>
<h4 className="text-lg font-bold text-slate-900">
                    Lower True-Up Bills
                  </h4>
<p className="text-base text-slate-500 mt-2 font-medium">
                    Dirty panels can lose 20-30% production. For an average IE
                    home, that's $300-$500/year lost in potential savings.
                  </p>
</div>
</div>
<div className="flex gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:border-blue-100 transition-all duration-300 group cursor-default">
<div className="mt-1 bg-blue-100 rounded-2xl p-3 h-fit text-blue-600 group-hover:scale-110 group-hover:-6 transition-transform">
<svg className="lucide lucide-shield-check w-6 h-6 stroke-[2.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="text-lg font-bold text-slate-900">
                    Protect Manufacturer Warranty
                  </h4>
<p className="text-base text-slate-500 mt-2 font-medium">
                    Many manufacturers require regular professional cleaning to
                    maintain warranty validity against corrosion and etching.
                  </p>
</div>
</div>
<div className="flex gap-6 p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-amber-100 hover:border-amber-100 transition-all duration-300 group cursor-default">
<div className="mt-1 bg-amber-100 rounded-2xl p-3 h-fit text-amber-600 group-hover:scale-110 group-hover:rotate-6 transition-transform">
<svg className="lucide lucide-leaf w-6 h-6 stroke-[2.5]" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-bold text-slate-900">
                    Extend Equipment Lifespan
                  </h4>
<p className="text-base text-slate-500 mt-2 font-medium">
                    Prevent permanent etching from bird droppings, pollen, and
                    hard water buildup common in our region.
                  </p>
</div>
</div>
</div>
</div>
<div className="grid gap-6">
<div className="grid grid-cols-2 gap-4">
<img alt="Solar array close up" className="hover:rotate-2 transition-transform duration-500 w-full h-56 object-cover border-white border-4 rounded-[2rem] shadow-lg" src="https://images.unsplash.com/photo-1745393753678-c376bf8664d3?w=800&amp;q=80"/>
<img alt="Clean energy" className="hover:-rotate-2 transition-transform duration-500 w-full h-56 object-cover border-white border-4 rounded-[2rem] shadow-lg" src="https://images.unsplash.com/photo-1583345237708-add35a664d77?w=800&amp;q=80"/>
</div>

<div className="bg-violet-900 text-white p-10 rounded-[2.5rem] shadow-2xl shadow-violet-200 relative overflow-hidden group">

<div className="absolute top-0 right-0 w-32 h-32 bg-violet-600 rounded-full -mr-10 -mt-10 opacity-50 blur-2xl"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-500 rounded-full -ml-10 -mb-10 opacity-50 blur-2xl"></div>
<h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
<div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
<svg className="lucide lucide-check w-5 h-5 text-white stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                Our Standard
              </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6 relative z-10">
<div>
<h5 className="text-sm font-bold text-violet-200 mb-2 uppercase tracking-wide">
                    3-Stage Filtration
                  </h5>
<p className="text-sm text-white/80 font-medium">
                    Sediment, Carbon, and RO filters remove 99.9% of minerals.
                  </p>
</div>
<div>
<h5 className="text-sm font-bold text-violet-200 mb-2 uppercase tracking-wide">
                    Soft Bristle Tech
                  </h5>
<p className="text-sm text-white/80 font-medium">
                    Specialized boar's hair brushes agitate dirt without
                    scratching.
                  </p>
</div>
<div>
<h5 className="text-sm font-bold text-violet-200 mb-2 uppercase tracking-wide">
                    Visual Proof
                  </h5>
<p className="text-sm text-white/80 font-medium">
                    We provide high-res before and after images of every job.
                  </p>
</div>
<div className="">
<h5 className="text-sm font-bold text-violet-200 mb-2 uppercase tracking-wide">
                    7-Day Rain Guarantee
                  </h5>
<p className="text-sm text-white/80 font-medium">
                    If it rains within a week, we'll touch up the spots for
                    free.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-xs font-bold uppercase tracking-wider mb-4">
            Community Love
          </span>
<h2 className="text-4xl font-bold tracking-tight text-slate-900">
            Trusted by your neighbors
          </h2>
<p className="text-slate-500 font-medium mt-4 text-lg">
            Helping homeowners in Corona, Riverside, and Fontana save money.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-10 bg-slate-50 rounded-[2.5rem] relative group hover:bg-white hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-slate-100">
<div className="flex gap-1 mb-6">
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-base text-slate-600 mb-8 leading-relaxed font-medium">
              "I thought my panels were broken because production was down.
              Turns out they were just filthy from the construction nearby.
              After Lumina came out, my output jumped back up to 6.2kW
              immediately."
            </p>
<div className="flex items-center gap-4">
<img alt="James D." className="w-12 h-12 rounded-full object-cover ring-4 ring-white shadow-md" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-bold text-slate-900">James D.</p>
<p className="text-xs font-semibold text-slate-400">
                  Riverside, CA
                </p>
</div>
</div>
</div>

<div className="p-10 bg-slate-50 rounded-[2.5rem] relative group hover:bg-white hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-slate-100">
<div className="flex gap-1 mb-6">
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-base text-slate-600 mb-8 leading-relaxed font-medium">
              "Professional, on time, and they didn't need me to be home. The
              photos they sent afterwards were shocking. I didn't realize how
              much dust we get here in Fontana until I saw the clean panels."
            </p>
<div className="flex items-center gap-4">
<img alt="Sarah M." className="w-12 h-12 rounded-full object-cover ring-4 ring-white shadow-md" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-bold text-slate-900">Sarah M.</p>
<p className="text-xs font-semibold text-slate-400">Fontana, CA</p>
</div>
</div>
</div>

<div className="p-10 bg-slate-50 rounded-[2.5rem] relative group hover:bg-white hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-slate-100">
<div className="flex gap-1 mb-6">
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
<svg className="w-5 h-5 fill-amber-400 text-amber-400" viewbox="0 0 24 24">
<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
</svg>
</div>
<p className="text-base text-slate-600 mb-8 leading-relaxed font-medium">
              "Great service. I used to try hosing them down myself but the hard
              water spots made it worse. Their deionized water system actually
              leaves the glass spotless. Highly recommend."
            </p>
<div className="flex items-center gap-4">
<img alt="Michael R." className="w-12 h-12 rounded-full object-cover ring-4 ring-white shadow-md" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-bold text-slate-900">Michael R.</p>
<p className="text-xs font-semibold text-slate-400">Corona, CA</p>
</div>
</div>
</div>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-slate-100 pt-16">
<div className="text-center group">
<p className="text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-violet-600 transition-colors">
              12k+
            </p>
<p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-bold">
              Panels Cleaned
            </p>
</div>
<div className="text-center group">
<p className="text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-green-500 transition-colors">
              100%
            </p>
<p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-bold">
              Accident Free
            </p>
</div>
<div className="text-center group">
<p className="text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-amber-500 transition-colors">
              25%
            </p>
<p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-bold">
              Avg. Efficiency Gain
            </p>
</div>
<div className="text-center group">
<p className="text-4xl font-extrabold text-slate-900 tracking-tight group-hover:text-orange-500 transition-colors">
              4.9
            </p>
<p className="text-xs text-slate-400 mt-2 uppercase tracking-widest font-bold">
              Customer Rating
            </p>
</div>
</div>
</div>
</section>

<section className="py-28 bg-slate-900 text-white relative overflow-hidden" id="compare">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              Why not just use a garden hose?
            </h2>
<p className="text-slate-400 font-medium max-w-lg text-lg">
              Inland Empire tap water has a high TDS (Total Dissolved Solids)
              count. Spraying your panels does more harm than good.
            </p>
</div>
</div>
<div className="overflow-x-auto rounded-[2rem] border border-slate-800 shadow-2xl">
<table className="w-full text-left border-collapse bg-slate-900/50 backdrop-blur-md">
<thead>
<tr className="border-b border-slate-800 bg-slate-800/50">
<th className="py-8 px-8 text-xs font-extrabold uppercase tracking-widest text-slate-400 w-1/3">
                  Feature
                </th>
<th className="py-8 px-8 text-xs font-extrabold uppercase tracking-widest text-green-400 w-1/3">
                  Lumina (Professional)
                </th>
<th className="py-8 px-8 text-xs font-extrabold uppercase tracking-widest text-red-400 w-1/3">
                  DIY (Garden Hose)
                </th>
</tr>
</thead>
<tbody className="text-base">
<tr className="border-b border-slate-800 hover:bg-slate-800/40 transition-colors">
<td className="py-8 px-8 font-bold text-slate-300">
                  Water Quality
                </td>
<td className="py-8 px-8 text-white font-medium flex items-center gap-2">
<div className="bg-green-500/10 p-1.5 rounded-full">
<svg className="lucide lucide-droplet w-4 h-4 text-green-400" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
                  Deionized (0 TDS), Spot-free
                </td>
<td className="py-8 px-8 text-slate-500 font-medium">
                  Hard Water (High Calcium/Lime)
                </td>
</tr>
<tr className="border-b border-slate-800 hover:bg-slate-800/40 transition-colors">
<td className="py-8 px-8 font-bold text-slate-300">Residue</td>
<td className="py-8 px-8 text-white font-medium">Zero residue</td>
<td className="py-8 px-8 text-slate-500 font-medium">
                  Calcified water spots (blocks sun)
                </td>
</tr>
<tr className="border-b border-slate-800 hover:bg-slate-800/40 transition-colors">
<td className="py-8 px-8 font-bold text-slate-300">Risk Factor</td>
<td className="py-8 px-8 text-white font-medium">
                  Insured Professionals
                </td>
<td className="py-8 px-8 text-slate-500 font-medium">
                  Personal Injury Risk (Ladders)
                </td>
</tr>
<tr className="hover:bg-slate-800/40 transition-colors">
<td className="py-8 px-8 font-bold text-slate-300">Outcome</td>
<td className="py-8 px-8 text-green-400 font-bold">
                  Restored Efficiency
                </td>
<td className="py-8 px-8 text-red-400 font-medium">
                  Often Lower Efficiency
                </td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-28 bg-slate-50" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-16 text-center">
          Common Questions
        </h2>
<div className="space-y-6">
<div className="bg-white border-2 border-slate-100 rounded-3xl p-8 transition-all hover:shadow-lg hover:border-violet-200 group cursor-help">
<h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center justify-between">
              Doesn't the rain clean my panels?
              <span className="text-slate-300 group-hover:text-violet-500 transition-colors text-2xl">
                +
              </span>
</h3>
<p className="text-base text-slate-500 leading-relaxed font-medium">
              Not effectively. Rain contains dust particles and isn't
              pressurized. Think of your car windshield after it rains—it's
              usually spotted and dirty. Solar panels require scrubbing to
              remove the film of grime that rain leaves behind.
            </p>
</div>
<div className="bg-white border-2 border-slate-100 rounded-3xl p-8 transition-all hover:shadow-lg hover:border-violet-200 group cursor-help">
<h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center justify-between">
              How much does it cost?
              <span className="text-slate-300 group-hover:text-violet-500 transition-colors text-2xl">
                +
              </span>
</h3>
<p className="text-base text-slate-500 leading-relaxed font-medium">
              Our pricing is based on the number of panels and accessibility
              (1-story vs 2-story). Most residential jobs range between $150 and
              $250. Considering the efficiency gain, the service often pays for
              itself in energy savings within a few months.
            </p>
</div>
<div className="bg-white border-2 border-slate-100 rounded-3xl p-8 transition-all hover:shadow-lg hover:border-violet-200 group cursor-help">
<h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center justify-between">
              Are you insured?
              <span className="text-slate-300 group-hover:text-violet-500 transition-colors text-2xl">
                +
              </span>
</h3>
<p className="text-base text-slate-500 leading-relaxed font-medium">
              Yes, we carry full general liability insurance. You are protected
              against any damage to your property or injury to our workers while
              they are on your roof.
            </p>
</div>
<div className="bg-white border-2 border-slate-100 rounded-3xl p-8 transition-all hover:shadow-lg hover:border-violet-200 group cursor-help">
<h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center justify-between">
              How often should I clean them?
              <span className="text-slate-300 group-hover:text-violet-500 transition-colors text-2xl">
                +
              </span>
</h3>
<p className="text-base text-slate-500 leading-relaxed font-medium">
              In the Inland Empire, we recommend twice a year—once in late
              spring (after pollen season) and once in late autumn (after the
              dry dusty summer). This maintains optimal output year-round.
            </p>
</div>
</div>
</div>
</section>

<section className="py-28 bg-white relative overflow-hidden" id="book">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-[3rem] shadow-2xl shadow-violet-200 overflow-hidden border border-slate-100 flex flex-col md:flex-row">

<div className="p-10 md:p-14 md:w-1/2 flex flex-col justify-center">
<div className="mb-10">
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">
                Get a free estimate
              </h2>
<p className="text-sm text-slate-500 font-medium">
                No home visit required. We use satellite data to quote.
              </p>
</div>
<form className="space-y-5">
<div className="group">
<label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide group-focus-within:text-violet-600 transition-colors" htmlFor="address">
                  Property Address
                </label>
<input className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-violet-500 text-sm transition-all font-medium placeholder:text-slate-400" id="address" placeholder="e.g. 123 Sunshine Blvd, Riverside" type="text"/>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="group">
<label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide group-focus-within:text-violet-600 transition-colors" htmlFor="name">
                    Name
                  </label>
<input className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-violet-500 text-sm transition-all font-medium placeholder:text-slate-400" id="name" placeholder="Your Name" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-bold text-slate-700 mb-2 uppercase tracking-wide group-focus-within:text-violet-600 transition-colors" htmlFor="phone">
                    Phone
                  </label>
<input className="w-full px-5 py-4 rounded-xl bg-slate-50 border-2 border-slate-100 focus:outline-none focus:border-violet-500 text-sm transition-all font-medium placeholder:text-slate-400" id="phone" placeholder="(951) 555-0123" type="tel"/>
</div>
</div>
<button className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-violet-200 flex items-center justify-center gap-2 mt-6" type="button">
                Get Quote Now
                <svg className="lucide lucide-arrow-right w-5 h-5 stroke-[2.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[10px] text-slate-400 text-center mt-4 font-medium">
                We respect your privacy &amp; your roof. 🏠
              </p>
</form>
</div>

<div className="relative md:w-1/2 min-h-[350px] md:min-h-0">
<img alt="Sunset over solar panels" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&amp;w=2532&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-violet-900/40 to-amber-900/20 mix-blend-multiply"></div>
<div className="absolute bottom-10 left-10 right-10 text-white">
<div className="flex items-center gap-2 mb-3 bg-white/20 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/20">
<svg className="lucide lucide-check-circle w-4 h-4 text-green-400 fill-white" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-xs font-bold">
                  100% Satisfaction Guarantee
                </span>
</div>
<p className="text-sm font-medium text-white/90 leading-relaxed">
                "My bills are finally negative again! Best investment I've made
                this year."
              </p>
</div>
</div>
</div>
</div>
</section>
<footer className="bg-white border-t border-slate-100 py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-400">
<svg className="lucide lucide-sun w-4 h-4 stroke-[2.5]" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<span className="text-sm font-bold text-slate-900 tracking-tight font-heading" style={{}}>
            S&amp;S Solar Services
          </span>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-violet-600 transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-slate-400 hover:text-blue-600 transition-colors" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
<p className="text-xs text-slate-400 font-medium">
          © 2024 Lumina Solar Care. Serving the Inland Empire with ☀️.
        </p>
</div>
</footer>


    </>
  );
}
