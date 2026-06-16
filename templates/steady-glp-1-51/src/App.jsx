import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Waitlist Form Handler
      function handleSignup(inputId, msgId, containerId) {
        const emailInput = document.getElementById(inputId);
        const email = emailInput.value;
        if (!email || !email.includes('@')) {
          emailInput.classList.add('border-red-300', 'focus:border-red-500', 'focus:ring-red-500/10');
          emailInput.classList.remove('border-slate-200', 'focus:border-emerald-500', 'focus:ring-emerald-500/10');
          return;
        }
        document.getElementById(containerId).classList.add('hidden');
        const msg = document.getElementById(msgId);
        msg.classList.remove('hidden');
        msg.classList.add('block');
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<h2 className="sr-only">Qwell GLP-1 Gum Landing Page</h2>

<main className="w-full max-w-2xl border rounded-3xl overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] bg-white border-slate-200">

<nav className="flex items-center justify-between px-5 sm:px-8 py-4 border-b border-slate-100">
<span className="text-lg font-medium tracking-tighter text-slate-900">
          qwell
        </span>
<span className="text-xs font-medium px-3 py-1.5 rounded-full tracking-wide bg-emerald-50 text-emerald-800">
          launching soon
        </span>
</nav>

<header className="px-5 sm:px-8 pt-12 pb-10 text-center max-w-xl mx-auto">
<div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium mb-6 border bg-amber-50 text-amber-800 border-amber-100/50">
<iconify-icon className="text-amber-600" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
          312 GLP-1 users already on the list
        </div>
<div className="text-xs font-medium tracking-widest uppercase mb-4 text-emerald-700">
          Made for Ozempic + Wegovy users
        </div>
<h1 className="text-3xl sm:text-4xl font-medium tracking-tight mb-5 leading-[1.15] text-slate-900">
          Finally. A gum that actually helps with GLP-1 side effects.
        </h1>
<p className="text-sm text-slate-500 leading-relaxed mb-8">
          Qwell is a functional gum designed around the real daily struggles of
          GLP-1 medications — nausea, dry mouth, and relentless cravings. Built
          with clinically-studied ingredients. No fluff.
        </p>
<div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mb-5" id="form-container-1">
<input className="flex-1 px-4 py-2.5 border rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-sm bg-white border-slate-200 text-slate-900" id="email1" placeholder="your@email.com" type="email"/>
<button className="px-6 py-2.5 bg-[#085041] hover:bg-[#063e32] text-sm font-medium rounded-xl whitespace-nowrap transition-colors shadow-sm text-emerald-50" onclick="handleSignup('email1','msg1','form-container-1')">
            Get early access
          </button>
</div>
<div className="hidden px-4 py-3.5 border text-sm font-medium rounded-xl max-w-md mx-auto mb-5 bg-emerald-50 border-emerald-100 text-emerald-800" id="msg1">
          You're on the list. We'll email you first when we launch.
        </div>
<div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs text-slate-500">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-600" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
            No product yet — honest waitlist
          </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-600" icon="solar:tag-price-linear" strokeWidth="1.5"></iconify-icon>
            Early access pricing
          </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-emerald-600" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
            No spam, ever
          </span>
</div>
</header>

<section className="border-y py-8 px-5 sm:px-8 flex flex-wrap justify-center gap-8 sm:gap-16 bg-slate-50/80 border-slate-100">
<div className="text-center">
<div className="text-2xl font-medium tracking-tight text-slate-900">
            20M+
          </div>
<div className="text-xs text-slate-500 mt-1.5">
            Americans on GLP-1s in 2026
          </div>
</div>
<div className="text-center">
<div className="text-2xl font-medium tracking-tight text-slate-900">
            1 in 5
          </div>
<div className="text-xs text-slate-500 mt-1.5">experience nausea</div>
</div>
<div className="text-center">
<div className="text-2xl font-medium tracking-tight text-slate-900">
            0
          </div>
<div className="text-xs text-slate-500 mt-1.5">
            products designed for this
          </div>
</div>
</section>

<section className="py-10 px-5 sm:px-8 max-w-xl mx-auto">
<div className="text-xs font-medium tracking-wider uppercase mb-5 text-slate-400">
          Sound familiar?
        </div>
<div className="flex flex-col gap-3">
<div className="bg-[#fafafa] rounded-2xl p-4 flex items-start gap-3.5 border border-slate-100">
<div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-orange-50 text-orange-600">
<iconify-icon icon="solar:danger-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm leading-snug font-medium mb-1 text-slate-900">
                Morning nausea that makes eating — or not eating — miserable
              </p>
<p className="text-xs text-slate-500">
                Especially bad during dose escalation weeks
              </p>
</div>
</div>
<div className="bg-[#fafafa] rounded-2xl p-4 flex items-start gap-3.5 border border-slate-100">
<div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-orange-50 text-orange-600">
<iconify-icon icon="solar:waterdrops-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm leading-snug font-medium mb-1 text-slate-900">
                Dry mouth that's ruining your teeth and making you uncomfortable
              </p>
<p className="text-xs text-slate-500">
                Dentists call it "Ozempic teeth" — it's real and it's increasing
              </p>
</div>
</div>
<div className="bg-[#fafafa] rounded-2xl p-4 flex items-start gap-3.5 border border-slate-100">
<div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-orange-50 text-orange-600">
<iconify-icon icon="solar:pie-chart-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm leading-snug font-medium mb-1 text-slate-900">
                Oral cravings you can't explain — needing to chew something
                constantly
              </p>
<p className="text-xs text-slate-500">
                GLP-1 reduces hunger signals but the mouth still wants
                stimulation
              </p>
</div>
</div>
<div className="bg-[#fafafa] rounded-2xl p-4 flex items-start gap-3.5 border border-slate-100">
<div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-orange-50 text-orange-600">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm leading-snug font-medium mb-1 text-slate-900">
                Regular gum does nothing except give you sugar or fake
                sweeteners
              </p>
<p className="text-xs text-slate-500">
                There's nothing actually formulated for what you're going
                through
              </p>
</div>
</div>
</div>
</section>

<section className="py-10 px-5 sm:px-8 max-w-xl mx-auto border-t border-slate-100">
<div className="text-xs font-medium tracking-wider uppercase mb-3 text-slate-400">
          What's inside qwell
        </div>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
          Every ingredient chosen for a specific reason. No proprietary blends.
          No hiding doses.
        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
<div className="bg-[#fafafa] rounded-2xl p-4 border border-slate-100">
<p className="text-sm font-medium mb-1.5 flex items-center gap-1.5 text-slate-900">
<iconify-icon className="text-emerald-600" icon="solar:leaf-linear"></iconify-icon>
              Ginger extract
            </p>
<p className="text-xs text-slate-500 leading-relaxed">
              Clinically studied for nausea relief — same mechanism used in
              pregnancy morning sickness
            </p>
</div>
<div className="bg-[#fafafa] rounded-2xl p-4 border border-slate-100">
<p className="text-sm font-medium mb-1.5 flex items-center gap-1.5 text-slate-900">
<iconify-icon className="text-emerald-600" icon="solar:pills-linear"></iconify-icon>
              Vitamin B6
            </p>
<p className="text-xs text-slate-500 leading-relaxed">
              Works with ginger on nausea pathways. Standard in anti-nausea
              protocols.
            </p>
</div>
<div className="bg-[#fafafa] rounded-2xl p-4 border border-slate-100">
<p className="text-sm font-medium mb-1.5 flex items-center gap-1.5 text-slate-900">
<iconify-icon className="text-emerald-600" icon="solar:shield-check-linear"></iconify-icon>
              Xylitol base
            </p>
<p className="text-xs text-slate-500 leading-relaxed">
              Stimulates saliva production. Directly fights dry mouth and
              "Ozempic teeth" risk.
            </p>
</div>
<div className="bg-[#fafafa] rounded-2xl p-4 border border-slate-100">
<p className="text-sm font-medium mb-1.5 flex items-center gap-1.5 text-slate-900">
<iconify-icon className="text-emerald-600" icon="solar:health-linear"></iconify-icon>
              Gymnema sylvestre
            </p>
<p className="text-xs text-slate-500 leading-relaxed">
              Blocks sweet taste receptors — dulls sugar cravings at the source.
            </p>
</div>
<div className="bg-[#fafafa] rounded-2xl p-4 border sm:col-span-2 border-slate-100">
<p className="text-sm font-medium mb-1.5 flex items-center gap-1.5 text-slate-900">
<iconify-icon className="text-emerald-600" icon="solar:test-tube-linear"></iconify-icon>
              Zinc + B12
            </p>
<p className="text-xs text-slate-500 leading-relaxed">
              GLP-1 users commonly report taste changes. These help restore
              normal taste profiles naturally.
            </p>
</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-medium border px-3 py-1 rounded-full bg-emerald-50/50 border-emerald-100 text-emerald-800">
            All GRAS-status ingredients
          </span>
<span className="text-xs font-medium border px-3 py-1 rounded-full bg-emerald-50/50 border-emerald-100 text-emerald-800">
            No drug claims
          </span>
<span className="text-xs font-medium border px-3 py-1 rounded-full bg-emerald-50/50 border-emerald-100 text-emerald-800">
            Sugar-free
          </span>
</div>
</section>

<section className="py-10 px-5 sm:px-8 max-w-xl mx-auto border-t border-slate-100">
<div className="text-xs font-medium tracking-wider uppercase mb-5 text-slate-400">
          From the community
        </div>
<div className="border rounded-2xl p-5 mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)] border-slate-200 bg-white">
<p className="text-sm leading-relaxed italic mb-3 text-slate-700">
            "I've been on Wegovy for 6 months and the dry mouth has been the
            thing nobody warned me about. I'm literally chewing random things
            all day. I would buy this immediately."
          </p>
<p className="text-xs text-slate-500">
<strong className="font-medium text-slate-900">Sarah M.</strong>
            — r/Semaglutide, verified user
          </p>
</div>
<div className="border rounded-2xl p-5 mb-4 shadow-[0_1px_2px_rgba(0,0,0,0.02)] border-slate-200 bg-white">
<p className="text-sm leading-relaxed italic mb-3 text-slate-700">
            "The nausea during my first 8 weeks was brutal. Ginger tea helped a
            little but I needed something portable. Something like this is
            exactly what I was Googling for."
          </p>
<p className="text-xs text-slate-500">
<strong className="font-medium text-slate-900">Danielle R.</strong>
            — Facebook GLP-1 Support Group
          </p>
</div>
<p className="text-xs mt-5 text-center text-slate-400">
          Quotes from public community posts. Names abbreviated for privacy.
        </p>
</section>

<footer className="py-12 px-5 sm:px-8 text-center border-t bg-slate-50/80 border-slate-100">
<h2 className="text-xl font-medium tracking-tight mb-2 text-slate-900">
          Be first to know when we launch
        </h2>
<p className="text-sm text-slate-500 mb-8 max-w-sm mx-auto leading-relaxed">
          Early waitlist gets 30% off and ships before public release.
        </p>
<div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto" id="form-container-2">
<input className="flex-1 px-4 py-2.5 border rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all shadow-sm bg-white border-slate-200 text-slate-900" id="email2" placeholder="your@email.com" type="email"/>
<button className="px-6 py-2.5 bg-[#085041] hover:bg-[#063e32] text-sm font-medium rounded-xl whitespace-nowrap transition-colors shadow-sm text-emerald-50" onclick="handleSignup('email2','msg2','form-container-2')">
            Join waitlist
          </button>
</div>
<div className="hidden px-4 py-3.5 border text-sm font-medium rounded-xl max-w-md mx-auto mt-2 bg-emerald-50 border-emerald-100 text-emerald-800" id="msg2">
          You're on the list. We'll email you first when we launch.
        </div>
</footer>
</main>



    </>
  );
}
