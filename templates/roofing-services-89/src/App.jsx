import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const modal = document.getElementById('quiz-modal');
        const backdrop = document.getElementById('modal-backdrop');
        const panel = document.getElementById('modal-panel');
        const progressBar = document.getElementById('progress-bar');
        
        function openFunnel() {
            modal.classList.remove('hidden');
            // Small delay for transition
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                panel.classList.remove('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
                panel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
            }, 10);
            resetFunnel();
        }

        function closeFunnel() {
            backdrop.classList.add('opacity-0');
            panel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');
            panel.classList.add('opacity-0', 'translate-y-4', 'sm:translate-y-0', 'sm:scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function nextStep(stepNumber) {
            // Hide all steps
            document.querySelectorAll('.funnel-step').forEach(el => {
                el.classList.add('hidden');
                el.classList.remove('fade-in');
            });
            
            // Show requested step with animation
            const next = document.getElementById(`step-${stepNumber}`);
            next.classList.remove('hidden');
            void next.offsetWidth; // trigger reflow
            next.classList.add('fade-in');

            // Update Progress
            const progress = (stepNumber / 5) * 100;
            progressBar.style.width = `${progress}%`;
        }

        function prevStep(stepNumber) {
            nextStep(stepNumber);
        }

        function submitFunnel(e) {
            e.preventDefault();
            // Simulate API call/processing
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Bezig met verwerken...';
            btn.disabled = true;
            
            setTimeout(() => {
                nextStep(5);
                // Reset button for next time
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1000);
        }

        function resetFunnel() {
            // Reset to step 1
            nextStep(1);
            // Clear inputs
            document.querySelectorAll('input').forEach(input => {
                if(input.type === 'radio') input.checked = false;
                if(input.type === 'text' || input.type === 'email' || input.type === 'tel') input.value = '';
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<span className="font-semibold text-xl tracking-tighter text-slate-900">APEX.</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Diensten</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#process">Werkwijze</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#testimonials">Reviews</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900" href="tel:+31201234567">
<svg aria-hidden="true" data-icon="lucide:phone" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        020 - 123 4567
                    </a>
<button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" onclick="openFunnel()">
                        Offerte Aanvragen
                    </button>
</div>
</div>
</div>
</nav>

<main className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
<div className="lg:col-span-6 text-center lg:text-left">

<div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-6 border border-blue-100">
<span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                        Beschikbaar voor spoedreparaties
                    </div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Dakwerk zonder zorgen, <br className="hidden lg:block"/>gebouwd voor de toekomst.
                    </h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Ontvang binnen 2 minuten een eerlijke indicatie voor reparatie of renovatie. Wij beschermen uw woning met vakmanschap en 10 jaar garantie.
                    </p>
<div className="flex flex-col gap-3">
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<button className="inline-flex h-12 items-center justify-center px-8 font-medium text-white transition-all duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 shadow-lg shadow-blue-600/20" onclick="openFunnel()">
                                Start Gratis Check
                                <svg aria-hidden="true" className="ml-2" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<p className="text-xs text-slate-400 font-medium justify-center lg:justify-start flex gap-1">
<svg aria-hidden="true" className="text-green-500" data-icon="lucide:check" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Vrijblijvend &amp; binnen 24u reactie
                        </p>
</div>

<div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-4">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="text-sm">
<div className="flex text-yellow-400 gap-0.5">
<svg aria-hidden="true" data-icon="lucide:star" data-strokeWidth="2" fill="currentColor" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-strokeWidth="2" fill="currentColor" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-strokeWidth="2" fill="currentColor" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-strokeWidth="2" fill="currentColor" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-strokeWidth="2" fill="currentColor" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="font-medium text-slate-900 mt-1">4.9/5 uit <span className="underline decoration-slate-300">240+ reviews</span></p>
</div>
</div>
</div>

<div className="lg:col-span-6 mt-12 lg:mt-0 relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-50 aspect-[4/3]">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white"></div>
<div className="-translate-x-1/2 -translate-y-1/2 flex flex-col bg-white w-3/4 h-3/4 border-slate-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 absolute top-1/2 left-1/2 shadow-xl">
<div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
<div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<svg aria-hidden="true" data-icon="lucide:check-circle" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Inspectie Voltooid</div>
<div className="text-xs text-slate-500">Dorpsstraat 12, Amsterdam</div>
</div>
</div>
<div className="space-y-3">
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
</div>
<div className="flex justify-between text-xs font-medium text-slate-500">
<span>Analyse Dakstaat</span>
<span>Uitstekend</span>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<div className="bg-slate-50 border-slate-100 border rounded-lg pt-3 pr-3 pb-3 pl-3">
<svg aria-hidden="true" data-icon="lucide:cloud-rain" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M16 14v6m-8-6v6m4-4v6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="text-xs font-medium text-slate-900 mt-1">Waterdicht</div>
</div>
<div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
<svg aria-hidden="true" data-icon="lucide:shield-check" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<div className="text-xs font-medium text-slate-900 mt-1">Garantie</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
</div>
</div>
</div>
</main>

<section className="py-10 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<p className="text-xs font-semibold tracking-wider text-slate-400 mb-6 uppercase">Erkend door toonaangevende instanties</p>
<div className="flex flex-wrap gap-8 md:gap-16 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 font-bold text-lg text-slate-800"><svg aria-hidden="true" data-icon="lucide:award" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15.477 12.89l1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></g></svg> BouwGarant</div>
<div className="flex items-center gap-2 font-bold text-lg text-slate-800"><svg aria-hidden="true" data-icon="lucide:shield-check" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg> KOMO</div>
<div className="flex items-center gap-2 font-bold text-lg text-slate-800"><svg aria-hidden="true" data-icon="lucide:thumbs-up" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12m8-16.62c.38-1.94 2.6-2.22 4.05-1.1c.73.57 1.2 1.4 1.2 2.32c0 1.55-1.15 3.1-3 3.4c1.86.3 3 1.85 3 3.4c0 1.14-.65 2.1-1.6 2.65c1.5.55 2.6 1.95 2.6 3.55c0 1.9-1.9 3.4-4.25 3.4H5a2 2 0 0 1-2-2V10c0-1.1.9-2 2-2h4c1 0 2-.9 2-2V4.5l1-2.5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> VCA gecertificeerd</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Complete bescherming voor uw huis</h2>
<p className="text-slate-500">Wij lappen niet alleen op. Wij leveren dakwerk dat bestand is tegen de zwaarste Nederlandse weersomstandigheden.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 bg-white">
<div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:droplets" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.8-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05m10 5.45c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S17.29 12.2 17 10.75c-.29 1.45-1.14 2.8-2.29 3.76S13 16.55 13 17.7c0 2.22 1.8 4.05 4 4.05" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Lekkage &amp; Spoed</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Snel ter plaatse bij lekkages om waterschade te voorkomen. Wij sporen het lek op en dichten het vakkundig.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 bg-white">
<div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:home" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Complete Renovatie</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Van pannendak tot bitumen. Volledige vervanging inclusief isolatie, loodwerk en afvoer. 10 jaar garantie.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 bg-white">
<div className="h-12 w-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" data-icon="lucide:wind" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.8 19.6A2 2 0 1 0 14 16H2m15.5-8a2.5 2.5 0 1 1 2 4H2m7.8-7.6A2 2 0 1 1 11 8H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-3">Stormschade</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Schade door wind of hagel? Wij maken het rapport op voor uw verzekering en herstellen de schade direct.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Een duidelijk proces zonder verrassingen</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center text-sm font-medium text-slate-600 bg-white">1</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-1">Online Check</h4>
<p className="text-sm text-slate-500">Vul de vragenlijst in. Dit kost 1 minuut en geeft ons direct inzicht in uw situatie.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center text-sm font-medium text-slate-600 bg-white">2</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-1">Gratis Inspectie</h4>
<p className="text-sm text-slate-500">Wij komen langs om het dak te bekijken en geven direct een heldere prijsopgave.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 h-8 w-8 rounded-full border border-slate-300 flex items-center justify-center text-sm font-medium text-slate-600 bg-white">3</div>
<div>
<h4 className="text-base font-medium text-slate-900 mb-1">Uitvoering &amp; Garantie</h4>
<p className="text-sm text-slate-500">Onze vakmensen voeren het werk uit. U betaalt pas als u tevreden bent.</p>
</div>
</div>
</div>
<div className="mt-8">
<button className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 text-sm" onclick="openFunnel()">
                            Direct een afspraak inplannen <svg aria-hidden="true" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-2xl bg-slate-200 overflow-hidden relative shadow-lg">
<div className="absolute inset-0 bg-slate-900/10"></div>

<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="w-full max-w-sm bg-white rounded-xl shadow-2xl p-6 transform rotate-3 transition-transform hover:rotate-0 duration-500">
<div className="flex justify-between items-center mb-6">
<div className="h-2 w-24 bg-slate-200 rounded"></div>
<div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
<svg aria-hidden="true" data-icon="lucide:calendar-check" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16l2 2l4-4"></path></g></svg>
</div>
</div>
<div className="space-y-3 mb-6">
<div className="h-2 w-full bg-slate-100 rounded"></div>
<div className="h-2 w-5/6 bg-slate-100 rounded"></div>
<div className="h-2 w-4/6 bg-slate-100 rounded"></div>
</div>
<div className="w-full py-2 bg-green-600 text-white text-center rounded text-xs font-medium">Afspraak Bevestigd</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<span className="font-semibold text-xl tracking-tighter text-slate-900">APEX.</span>
<p className="mt-4 text-xs text-slate-500">Specialist in dakrenovatie en onderhoud voor heel Nederland. Kwaliteit en transparantie staan voorop.</p>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Diensten</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Dakrenovatie</a></li>
<li><a className="hover:text-slate-900" href="#">Lekkage Service</a></li>
<li><a className="hover:text-slate-900" href="#">Dakisolatie</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 mb-4">Bedrijf</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900" href="#">Over ons</a></li>
<li><a className="hover:text-slate-900" href="#">Projecten</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Apex Dakwerken BV. Alle rechten voorbehouden.</p>
<div className="flex gap-4">
<svg aria-hidden="true" className="text-slate-400 hover:text-slate-600 cursor-pointer" data-icon="lucide:facebook" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="text-slate-400 hover:text-slate-600 cursor-pointer" data-icon="lucide:instagram" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
<svg aria-hidden="true" className="text-slate-400 hover:text-slate-600 cursor-pointer" data-icon="lucide:linkedin" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="4" cy="4" fill="none" r="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
</div>
</div>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="quiz-modal" role="dialog">

<div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" id="modal-panel">

<div className="h-1 w-full bg-slate-100">
<div className="h-full bg-blue-600 transition-all duration-500 ease-out" id="progress-bar" style={{width: '20%'}}></div>
</div>

<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 z-20" onclick="closeFunnel()">
<svg aria-hidden="true" data-icon="lucide:x" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="p-8">

<div className="funnel-step fade-in" id="step-1">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Om wat voor type woning gaat het?</h3>
<p className="text-sm text-slate-500 mb-6">Zo sturen we de juiste specialist (Particulier of Zakelijk).</p>
<div className="grid grid-cols-1 gap-4">
<label className="cursor-pointer group relative">
<input className="peer sr-only radio-card" name="property_type" onclick="nextStep(2)" type="radio" value="residential"/>
<div className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-all flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
<svg aria-hidden="true" data-icon="lucide:home" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<span className="font-medium text-slate-900">Woonhuis</span>
</div>
<svg aria-hidden="true" className="check-icon opacity-0 transition-opacity text-blue-600 scale-90" data-icon="lucide:check-circle" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
</label>
<label className="cursor-pointer group relative">
<input className="peer sr-only radio-card" name="property_type" onclick="nextStep(2)" type="radio" value="commercial"/>
<div className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-all flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
<svg aria-hidden="true" data-icon="lucide:building-2" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
</div>
<span className="font-medium text-slate-900">Bedrijfspand / VvE</span>
</div>
<svg aria-hidden="true" className="check-icon opacity-0 transition-opacity text-blue-600 scale-90" data-icon="lucide:check-circle" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
</label>
</div>
</div>

<div className="funnel-step hidden" id="step-2">
<button className="text-xs font-medium text-slate-400 hover:text-slate-600 mb-4 flex items-center gap-1" onclick="prevStep(1)">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Terug
                            </button>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Waarmee kunnen we helpen?</h3>
<p className="text-sm text-slate-500 mb-6">Selecteer de hoofdreden voor uw aanvraag.</p>
<div className="grid grid-cols-1 gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only radio-card" name="service_type" onclick="nextStep(3)" type="radio" value="repair"/>
<div className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-all flex items-center justify-between">
<span className="font-medium text-slate-900">Daklekkage / Reparatie</span>
<svg aria-hidden="true" data-icon="lucide:chevron-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only radio-card" name="service_type" onclick="nextStep(3)" type="radio" value="replace"/>
<div className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-all flex items-center justify-between">
<span className="font-medium text-slate-900">Nieuw Dak / Renovatie</span>
<svg aria-hidden="true" data-icon="lucide:chevron-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only radio-card" name="service_type" onclick="nextStep(3)" type="radio" value="storm"/>
<div className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-all flex items-center justify-between">
<span className="font-medium text-slate-900">Stormschade Controle</span>
<svg aria-hidden="true" data-icon="lucide:chevron-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</label>
</div>
</div>

<div className="funnel-step hidden" id="step-3">
<button className="text-xs font-medium text-slate-400 hover:text-slate-600 mb-4 flex items-center gap-1" onclick="prevStep(2)">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Terug
                            </button>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Hoeveel spoed heeft het?</h3>
<p className="text-sm text-slate-500 mb-6">Wij houden ruimte vrij voor noodgevallen.</p>
<div className="grid grid-cols-1 gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only radio-card" name="timeline" onclick="nextStep(4)" type="radio" value="emergency"/>
<div className="p-4 rounded-xl border border-slate-200 hover:border-red-200 hover:bg-red-50 transition-all flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="font-medium text-slate-900">Spoed / Direct (Lekkage)</span>
</div>
</div>
</label>

<div className="text-center text-xs text-slate-400 my-1">of</div>
<a className="block w-full text-center p-3 rounded-lg bg-slate-100 text-slate-700 font-medium text-sm hover:bg-slate-200 transition-colors mb-2" href="tel:0201234567">
<span className="flex items-center justify-center gap-2"><svg aria-hidden="true" data-icon="lucide:phone" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Direct bellen: 020 - 123 4567</span>
</a>
<label className="cursor-pointer group">
<input className="peer sr-only radio-card" name="timeline" onclick="nextStep(4)" type="radio" value="soon"/>
<div className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-all flex items-center justify-between">
<span className="font-medium text-slate-900">Binnen 2 weken</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only radio-card" name="timeline" onclick="nextStep(4)" type="radio" value="planning"/>
<div className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-slate-50 transition-all flex items-center justify-between">
<span className="font-medium text-slate-900">Geen haast / Oriënterend</span>
</div>
</label>
</div>
</div>

<div className="funnel-step hidden" id="step-4">
<button className="text-xs font-medium text-slate-400 hover:text-slate-600 mb-4 flex items-center gap-1" onclick="prevStep(3)">
<svg aria-hidden="true" data-icon="lucide:arrow-left" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> Terug
                            </button>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Waar mogen we de offerte naartoe sturen?</h3>
<p className="text-sm text-slate-500 mb-6">Uw gegevens zijn veilig. Wij sturen geen spam.</p>
<form className="space-y-4" onsubmit="submitFunnel(event)">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="name">Volledige Naam</label>
<input className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3 bg-slate-50 border outline-none transition-all placeholder:text-slate-400" id="name" placeholder="Jan de Vries" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">E-mailadres</label>
<input className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3 bg-slate-50 border outline-none transition-all placeholder:text-slate-400" id="email" placeholder="jan@voorbeeld.nl" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="phone">Telefoonnummer</label>
<input className="block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-4 py-3 bg-slate-50 border outline-none transition-all placeholder:text-slate-400" id="phone" placeholder="06 12345678" required="" type="tel"/>
</div>
<button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all mt-6" type="submit">
                                    Bekijk mijn indicatie
                                </button>
<p className="text-[10px] text-center text-slate-400 mt-2">
<svg aria-hidden="true" className="inline mb-0.5" data-icon="lucide:lock" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                                    Uw privacy is gegarandeerd. Geen verplichtingen.
                                </p>
</form>
</div>

<div className="funnel-step hidden text-center py-8" id="step-5">
<div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
<svg aria-hidden="true" data-icon="lucide:check" data-strokeWidth="2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Aanvraag ontvangen!</h3>
<p className="text-sm text-slate-500 mb-8 max-w-xs mx-auto">Eén van onze dakspecialisten bekijkt nu uw situatie. Wilt u niet wachten?</p>
<div className="bg-slate-50 rounded-xl p-6 border border-slate-200 mb-6">
<h4 className="text-sm font-medium text-slate-900 mb-4">Plan direct uw inspectie in</h4>

<button className="w-full flex justify-center items-center gap-2 py-3 px-4 border border-blue-600 rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all">
<svg aria-hidden="true" data-icon="lucide:calendar-days" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"><path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"></path></rect></g></svg>
                                    Kies een datum in de agenda
                                </button>
</div>
<button className="text-xs text-slate-400 hover:text-slate-600 underline" onclick="closeFunnel()">Nee bedankt, ik wacht op jullie belletje</button>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
