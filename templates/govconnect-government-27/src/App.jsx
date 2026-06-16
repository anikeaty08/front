import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      // Simple State Management
      function showResults() {
          document.getElementById('intake-section').classList.add('hidden');
          document.getElementById('results-section').classList.remove('hidden');
          window.scrollTo(0,0);
      }

      function resetForm() {
          document.getElementById('results-section').classList.add('hidden');
          document.getElementById('intake-section').classList.remove('hidden');
          window.scrollTo(0,0);
      }

      function switchTab(tab) {
          const schemesBtn = document.getElementById('nav-schemes');
          const healthBtn = document.getElementById('nav-health');

          // Views
          const intake = document.getElementById('intake-section');
          const results = document.getElementById('results-section');
          const health = document.getElementById('health-section');

          if(tab === 'schemes') {
              // Determine if we show intake or results based on if we filled it
              // For demo simplicity, if results are hidden and health was shown, show intake.
              // If results were visible, show results.
              health.classList.add('hidden');

              // Logic: If results were active before switching away, show results, else intake
              // Resetting to Results for demo flow if user already submitted
              if (intake.style.display !== 'none' && results.classList.contains('hidden')) {
                   intake.classList.remove('hidden');
              } else {
                   // If we are just switching back, default to results if available, else intake
                   // Simpler: Just show Intake if Results is hidden
                   if(results.classList.contains('hidden')) intake.classList.remove('hidden');
                   else results.classList.remove('hidden');
              }

              // Style
              schemesBtn.className = "flex flex-col items-center gap-1 text-indigo-600 w-16";
              healthBtn.className = "flex flex-col items-center gap-1 text-slate-400 w-16 hover:text-slate-600";
          }
          else if (tab === 'health') {
              intake.classList.add('hidden');
              results.classList.add('hidden');
              health.classList.remove('hidden');

              // Style
              schemesBtn.className = "flex flex-col items-center gap-1 text-slate-400 w-16 hover:text-slate-600";
              healthBtn.className = "flex flex-col items-center gap-1 text-indigo-600 w-16";
          }
          window.scrollTo(0,0);
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="X0ErZR3QhPzMHfKgBbJJ"></div>
</div>
<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full blur-[120px] animate-float bg-amber-600/20" style={{animationDuration: '10s'}}></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] animate-float bg-amber-600/20" style={{animationDelay: '-5s', animationDuration: '12s'}}></div>
<div className="absolute top-[40%] left-[50%] transform -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] bg-zinc-600/10" style={{}}></div>
</div>

<header className="fixed top-0 w-full z-50 glass-panel border-b-0 transition-all duration-300 border-white/5">
<div className="max-w-lg mx-auto flex justify-between items-center px-5 py-4">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg text-white shadow-amber-500/20 bg-gradient-to-b from-amber-500 to-amber-600" style={{}}>
<iconify-icon className="" icon="solar:shield-check-bold-duotone" width="22"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">
            GovConnect
          </span>
</div>
<button className="glass-card px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-2 hover:bg-white/5 text-orange-300" style={{}}>
<iconify-icon icon="solar:global-linear" width="14"></iconify-icon>
<span className="">EN / हिंदी</span>
</button>
</div>
</header>

<main className="max-w-lg mx-auto px-4">

<section className="fade-in pt-24 pb-32 relative z-10" id="intake-section">
<div className="text-center mb-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] font-semibold uppercase tracking-wider mb-4 animate-float bg-amber-500/10 border-amber-500/20 text-amber-300" style={{}}>
            Beta Access 2.0
          </div>
<h1 className="text-4xl font-semibold tracking-tight mb-3 text-white">
            Find your
            <span className="gradient-text">benefits</span>
</h1>
<p className="text-sm max-w-[280px] mx-auto leading-relaxed text-orange-400" style={{}}>
            Unlock government schemes tailored to your profile in seconds.
          </p>
</div>
<form className="space-y-6" id="benefits-form" onsubmit="event.preventDefault(); showResults();">
<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-amber-400" icon="solar:user-id-linear" style={{}}></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-orange-400" style={{}}>
                Occupation
              </span>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input checked="" className="custom-radio hidden" name="occupation" type="radio"/>
<div className="glass-card rounded-2xl p-5 text-center flex flex-col items-center gap-3">
<div className="p-3 rounded-full transition-all group-hover:text-amber-300 group-hover:bg-amber-500/20 text-amber-400 bg-orange-800/50" style={{}}>
<iconify-icon className="" icon="solar:square-academic-cap-bold-duotone" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium group-hover:text-white text-orange-300" style={{}}>
                    Student
                  </span>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="occupation" type="radio"/>
<div className="glass-card rounded-2xl p-5 text-center flex flex-col items-center gap-3">
<div className="p-3 rounded-full transition-all group-hover:text-green-300 group-hover:bg-green-500/20 text-green-400 bg-orange-800/50" style={{}}>
<iconify-icon icon="solar:user-hand-up-bold-duotone" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium group-hover:text-white text-orange-300" style={{}}>
                    Daily Worker
                  </span>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="occupation" type="radio"/>
<div className="glass-card rounded-2xl p-5 text-center flex flex-col items-center gap-3">
<div className="p-3 rounded-full group-hover:text-amber-300 group-hover:bg-amber-500/20 transition-all text-amber-400 bg-orange-800/50" style={{}}>
<iconify-icon icon="solar:sprout-bold-duotone" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium group-hover:text-white text-orange-300" style={{}}>
                    Farmer
                  </span>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="occupation" type="radio"/>
<div className="glass-card rounded-2xl p-5 text-center flex flex-col items-center gap-3">
<div className="p-3 rounded-full group-hover:text-rose-300 group-hover:bg-rose-500/20 transition-all text-rose-400 bg-orange-800/50" style={{}}>
<iconify-icon className="" icon="solar:shop-bold-duotone" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium group-hover:text-white text-orange-300" style={{}}>
                    Small Biz
                  </span>
</div>
</label>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-amber-400" icon="solar:wallet-money-linear" style={{}}></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-orange-400" style={{}}>
                Annual Income
              </span>
</div>
<div className="space-y-2">
<label className="cursor-pointer block">
<input checked="" className="custom-radio hidden" name="income" type="radio"/>
<div className="glass-card p-4 rounded-xl flex items-center justify-between group">
<span className="text-sm font-medium group-hover:text-white pl-2 text-orange-300" style={{}}>
                    ₹1 Lakh - ₹2.5 Lakhs
                  </span>
<iconify-icon className="opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 text-amber-400" icon="solar:check-circle-bold" style={{}} width="20"></iconify-icon>
</div>
</label>
<label className="cursor-pointer block">
<input className="custom-radio hidden" name="income" type="radio"/>
<div className="glass-card p-4 rounded-xl flex items-center justify-between group">
<span className="text-sm font-medium group-hover:text-white pl-2 text-orange-300" style={{}}>
                    Less than ₹1 Lakh
                  </span>
<iconify-icon className="opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 text-amber-400" icon="solar:check-circle-bold" style={{}} width="20"></iconify-icon>
</div>
</label>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-amber-400" icon="solar:map-point-linear" style={{}}></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider text-orange-400" style={{}}>
                Location
              </span>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input checked="" className="custom-radio hidden" name="location" type="radio"/>
<div className="glass-card rounded-xl p-4 flex items-center justify-center gap-3">
<iconify-icon className="transition-colors group-hover:text-amber-400 text-orange-500" icon="solar:home-smile-bold-duotone" style={{}} width="20"></iconify-icon>
<span className="text-sm font-medium group-hover:text-white text-orange-300" style={{}}>
                    Rural
                  </span>
</div>
</label>
<label className="cursor-pointer group">
<input className="custom-radio hidden" name="location" type="radio"/>
<div className="glass-card flex gap-3 rounded-xl pt-4 pr-4 pb-4 pl-4 gap-x-3 gap-y-3 items-center justify-center">
<iconify-icon className="transition-colors group-hover:text-amber-400 text-orange-500" icon="solar:city-bold-duotone" style={{}} width="20"></iconify-icon>
<span className="text-sm font-medium group-hover:text-white text-orange-300" style={{}}>
                    Urban
                  </span>
</div>
</label>
</div>
</div>
<button className="w-full py-4 mt-6 bg-gradient-to-r font-semibold rounded-2xl shadow-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden group text-white hover:to-amber-500 to-amber-600 hover:from-amber-500 shadow-amber-500/20 from-amber-600" style={{}} type="submit">
<span className="relative z-10">Check Eligibility</span>
<iconify-icon className="relative z-10 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 blur-md bg-white/20"></div>
</button>
</form>
</section>

<section className="hidden fade-in pt-24 pb-32 space-y-8 relative z-10" id="results-section">
<div className="flex items-center justify-between px-1">
<h2 className="text-2xl font-semibold tracking-tight text-white">
            Your Matches
          </h2>
<button className="text-xs font-medium flex items-center gap-1 text-amber-400 hover:text-amber-300" onclick="resetForm()" style={{}}>
<iconify-icon icon="solar:pen-linear"></iconify-icon>
            Edit
          </button>
</div>
<div>
<div className="flex items-center gap-2 mb-4">
<div className="p-2 rounded-lg border bg-amber-500/10 border-amber-500/20 text-amber-400" style={{}}>
<iconify-icon icon="solar:square-academic-cap-bold-duotone" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wider text-orange-300" style={{}}>
              Education
            </h3>
</div>
<div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 border-l border-b text-[10px] font-bold px-3 py-1.5 rounded-bl-xl backdrop-blur-md bg-green-500/20 border-green-500/20 text-green-400" style={{}}>
              ELIGIBLE
            </div>
<h4 className="text-lg font-semibold mb-2 transition-colors text-white group-hover:text-amber-300" style={{}}>
              Pre-Matric Scholarship
            </h4>
<p className="text-xs mb-5 leading-relaxed text-orange-400" style={{}}>
              Financial aid for minority students in grades 1-10 to support
              education costs.
            </p>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border bg-amber-500/10 border-amber-500/20 text-amber-300" style={{}}>
<iconify-icon icon="solar:wallet-money-bold-duotone" width="16"></iconify-icon>
<span>₹8,000 / year</span>
</div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-4">
<div className="p-2 rounded-lg border bg-green-500/10 border-green-500/20 text-green-400" style={{}}>
<iconify-icon icon="solar:home-smile-bold-duotone" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wider text-orange-300" style={{}}>
              Housing
            </h3>
</div>
<div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 border-l border-b text-[10px] font-bold px-3 py-1.5 rounded-bl-xl backdrop-blur-md bg-green-500/20 border-green-500/20 text-green-400" style={{}}>
              ELIGIBLE
            </div>
<h4 className="text-lg font-semibold mb-2 transition-colors text-white group-hover:text-green-300" style={{}}>
              PM Awas Yojana
            </h4>
<p className="text-xs mb-5 leading-relaxed text-orange-400" style={{}}>
              Subsidy for construction of permanent housing for eligible rural
              families.
            </p>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-lg border bg-green-500/10 border-green-500/20 text-green-300" style={{}}>
<iconify-icon icon="solar:home-bold-duotone" width="16"></iconify-icon>
<span>Housing Grant</span>
</div>
</div>
</div>
</div>
<div>
<div className="flex items-center gap-2 mb-4">
<div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400" style={{}}>
<iconify-icon icon="solar:hand-money-bold-duotone" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-wider text-orange-300" style={{}}>
              Finance
            </h3>
</div>
<div className="glass-card p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 border-l border-b text-[10px] font-bold px-3 py-1.5 rounded-bl-xl backdrop-blur-md bg-green-500/20 border-green-500/20 text-green-400" style={{}}>
              ELIGIBLE
            </div>
<h4 className="text-lg font-semibold mb-2 group-hover:text-amber-300 transition-colors text-white" style={{}}>
              Mudra Loan (Shishu)
            </h4>
<p className="text-xs mb-5 leading-relaxed text-orange-400" style={{}}>
              Micro-loans for small business activities up to ₹50,000.
            </p>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 text-xs font-bold bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 text-amber-300" style={{}}>
<iconify-icon icon="solar:wad-of-money-bold-duotone" width="16"></iconify-icon>
<span>₹50k Loan</span>
</div>
</div>
</div>
</div>
</section>

<section className="hidden fade-in pt-24 pb-32 space-y-8 relative z-10" id="health-section">
<div className="flex items-center justify-between px-1">
<h2 className="text-2xl font-semibold tracking-tight text-white">
            Health Passport
          </h2>
<div className="px-2 py-1 rounded-md border text-[10px] bg-white/5 border-white/10 text-orange-400" style={{}}>
            LIVE DATA
          </div>
</div>
<div className="relative w-full aspect-[1.586] rounded-2xl overflow-hidden shadow-2xl group transition-transform duration-500 hover:scale-[1.02] shadow-amber-500/20" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br via-purple-700 from-amber-600 to-amber-900" style={{}}></div>
<div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] opacity-20'></div>
<div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-b to-transparent rotate-45 transform translate-y-full transition-transform duration-1000 group-hover:translate-y-[-50%] from-white/10"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
<div className="flex justify-between items-start">
<div>
<div className="text-[10px] uppercase tracking-widest mb-1 text-amber-200" style={{}}>
                  GovConnect ID
                </div>
<div className="font-mono text-lg tracking-wider text-white/90">
                  110 223 445
                </div>
</div>
<iconify-icon className="text-white/20" icon="solar:shield-check-bold" width="32"></iconify-icon>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-[10px] uppercase tracking-widest mb-1 text-amber-200" style={{}}>
                  Beneficiary
                </div>
<div className="text-lg font-semibold tracking-wide">
                  Riya Sharma
                </div>
</div>
<div className="text-right">
<div className="text-[10px] uppercase tracking-widest mb-1 text-amber-200" style={{}}>
                  Next Due
                </div>
<div className="text-sm font-medium">15 Dec 23</div>
</div>
</div>
</div>
</div>
<div className="glass-card rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<h4 className="text-sm font-semibold uppercase tracking-wider text-orange-200" style={{}}>
              Vaccination Timeline
            </h4>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] font-bold bg-green-500/10 border-green-500/20 text-green-400" style={{}}>
<div className="w-1.5 h-1.5 rounded-full animate-pulse bg-green-500" style={{}}></div>
              ON TRACK
            </div>
</div>
<div className="relative pl-4 border-l space-y-8 border-orange-700/50" style={{}}>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] bg-green-500" style={{}}></div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<div className="text-sm font-medium text-white">
                    COVID-19 Booster
                  </div>
<div className="text-xs text-orange-500" style={{}}>
                    PHC Rampur • Batch #2291
                  </div>
</div>
<div className="text-[10px] font-mono text-orange-500" style={{}}>12 OCT</div>
</div>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full border bg-orange-700 border-orange-600" style={{}}></div>
<div className="flex justify-between items-start">
<div className="space-y-1">
<div className="text-sm font-medium text-orange-400" style={{}}>
                    Annual Flu Shot
                  </div>
<div className="text-xs text-orange-600" style={{}}>Upcoming Appointment</div>
</div>
<div className="text-[10px] font-mono text-orange-600" style={{}}>15 DEC</div>
</div>
</div>
</div>
</div>
</section>
</main>

<nav className="fixed bottom-0 left-0 w-full z-50 pb-6 pt-2">
<div className="mx-auto max-w-[280px] glass-nav rounded-full px-6 py-3 flex justify-between items-center shadow-2xl shadow-black/40">
<button className="flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 text-amber-400" id="nav-schemes" onclick='switchTab("schemes")' style={{}}>
<iconify-icon icon="solar:compass-bold-duotone" width="24"></iconify-icon>
</button>
<div className="w-px h-6 bg-white/10"></div>
<button className="flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 text-orange-500 hover:text-orange-300" id="nav-health" onclick='switchTab("health")' style={{}}>
<iconify-icon icon="solar:heart-pulse-bold-duotone" width="24"></iconify-icon>
</button>
<div className="w-px h-6 bg-white/10"></div>
<button className="flex flex-col items-center gap-1 transition-all duration-300 hover:scale-110 text-orange-500 hover:text-orange-300" style={{}}>
<iconify-icon icon="solar:user-circle-bold-duotone" width="24"></iconify-icon>
</button>
</div>
</nav>


    </>
  );
}
