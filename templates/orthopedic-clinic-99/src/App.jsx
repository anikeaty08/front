import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icons
        lucide.createIcons({
            attrs: {
                "stroke-width": 1.5
            }
        });

        // Reveal Animation on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-sky-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-600/20">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-slate-900">OrthoZentrum</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-sky-700 transition-colors" href="#ansatz">Der Ansatz</a>
<a className="hover:text-sky-700 transition-colors" href="#behandlung">Behandlung</a>
<a className="hover:text-sky-700 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-sky-700 transition-colors" href="#stories">Patientenstimmen</a>
</div>
<a className="hidden md:inline-flex bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all hover:scale-[1.02] shadow-lg shadow-slate-900/10 items-center gap-2" href="#termin">
                Termin buchen
                <svg className="lucide lucide-arrow-up-right w-4 h-4 text-slate-400" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</nav>

<header className="md:pt-44 md:pb-32 overflow-hidden pt-32 pr-6 pb-16 pl-6 relative">

<div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-sky-50 via-white to-transparent -z-10"></div>
<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[100px] -z-10 opacity-60"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-medium mb-8 border border-sky-100 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                    Neue Termine für Privat &amp; Selbstzahler verfügbar
                </div>

<h1 className="md:text-7xl leading-[1.05] text-5xl font-medium text-slate-900 tracking-tight font-roboto mb-8">
                    Bewegung ohne Schmerz. <br/> <span className="text-slate-400">Ihr Leben zurück.</span>
</h1>
<p className="text-xl text-slate-500 leading-relaxed max-w-lg mb-10 font-normal">
                    Moderne Orthopädie, die den Ursprung behandelt, nicht nur das Symptom. Minimal-invasiv, präzise und nachhaltig.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
<a className="bg-sky-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-sky-500 transition-all hover:shadow-xl hover:shadow-sky-600/20 hover:-translate-y-0.5 flex items-center gap-2" href="#termin">
                        Erstgespräch vereinbaren
                        <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<div className="flex items-center gap-4 px-6 py-4 border border-slate-200 rounded-full bg-white/50 backdrop-blur-sm">
<div className="flex -space-x-3">

<img alt="Arzt" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Ärztin" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="text-sm font-medium text-slate-600">
<span className="text-sky-700 font-semibold">4.9</span>/5 auf Jameda
                        </div>
</div>
</div>

<div className="flex flex-wrap gap-x-8 gap-y-4 text-slate-400 text-sm font-medium pt-8 border-t border-slate-200/60">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-sky-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Zertifizierte Praxis
                    </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-microscope w-4 h-4 text-sky-600" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg> Modernste Diagnostik
                    </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-sky-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Keine Wartezeiten
                    </div>
</div>
</div>

<div className="relative lg:h-[640px] reveal delay-200 hidden lg:block active">

<div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 border border-white">
<img alt="Chefarzt Orthopädie" className="object-top w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/84db338a-8fce-4a7c-844c-d0f35c412829_1600w.jpg"/>
<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Chefarzt in der Praxis" className="w-full h-full object-cover object-top scale-105" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>
</div>
</div>

<div className="absolute top-16 -left-10 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 animate-float w-64">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
<svg className="lucide lucide-bone w-5 h-5" data-lucide="bone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"></path></svg>
</div>
<div className="">
<div className="text-xs text-slate-400 font-medium uppercase tracking-wider">Status</div>
<div className="text-sm font-semibold text-slate-900">Kniegelenk stabil</div>
</div>
</div>
<div className="flex justify-between items-end">
<div className="flex gap-1 h-8 items-end">
<div className="w-1.5 h-3 bg-sky-200 rounded-full"></div>
<div className="w-1.5 h-4 bg-sky-300 rounded-full"></div>
<div className="w-1.5 h-6 bg-sky-400 rounded-full"></div>
<div className="w-1.5 h-8 bg-sky-500 rounded-full"></div>
</div>
<span className="text-xs font-medium text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2 py-1 rounded-md">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> +24% Mobilität
                        </span>
</div>
</div>

<div className="absolute bottom-20 -right-8 bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60 animate-float-delayed">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-slate-50">

<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
</div>
<div>
<p className="text-sm font-medium text-slate-900">"Endlich wieder Sport."</p>
<div className="text-xs text-slate-500 mt-0.5">Anna S., Meniskusriss</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 mx-2 md:mx-6 bg-white rounded-[2.5rem] shadow-sm border border-slate-100 relative overflow-hidden" id="ansatz">
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight mb-16 text-center max-w-3xl mx-auto reveal leading-tight">
                Herkömmliche Medizin behandelt oft zu spät. <br/>
<span className="text-slate-400">Wir agieren, bevor der Schmerz chronisch wird.</span>
</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-10 rounded-3xl group hover:bg-sky-50/50 transition-colors duration-500 reveal border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-600 shadow-sm border border-slate-100 group-hover:text-sky-600 transition-colors">
<svg className="lucide lucide-timer w-6 h-6" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Keine 5-Minuten Medizin</h3>
<p className="text-base text-slate-500 leading-relaxed">Wir nehmen uns Zeit für eine fundierte Anamnese. Eine präzise Diagnose erfordert Zuhören, nicht nur Röntgenbilder.</p>
</div>

<div className="bg-slate-50 p-10 rounded-3xl group hover:bg-sky-50/50 transition-colors duration-500 reveal delay-100 border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-600 shadow-sm border border-slate-100 group-hover:text-sky-600 transition-colors">
<svg className="lucide lucide-activity-square w-6 h-6" data-lucide="activity-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M17 12h-2l-2 5-2-10-2 5H7"></path></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Konservativ vor Operativ</h3>
<p className="text-base text-slate-500 leading-relaxed">Operationen sind der letzte Ausweg. Wir nutzen modernste regenerative Therapien, um den Eingriff zu vermeiden.</p>
</div>

<div className="bg-slate-50 p-10 rounded-3xl group hover:bg-sky-50/50 transition-colors duration-500 reveal delay-200 border border-slate-100 hover:border-sky-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-slate-600 shadow-sm border border-slate-100 group-hover:text-sky-600 transition-colors">
<svg className="lucide lucide-user-check w-6 h-6" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Maßgeschneiderte Reha</h3>
<p className="text-base text-slate-500 leading-relaxed">Jeder Körper ist anders. Ihr Therapieplan wird individuell auf Ihren Alltag und Ihre sportlichen Ziele abgestimmt.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl font-medium text-slate-900 tracking-tight mb-6">
                        Orthopädie neu gedacht
                    </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-8">
                        Vom Leistungssportler bis zum Senior: Wir kombinieren universitäre High-Tech Medizin mit der persönlichen Atmosphäre einer Privatpraxis.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
<svg className="lucide lucide-scan w-6 h-6" data-lucide="scan" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path></svg>
</div>
<div className="flex-1">
<h4 className="font-medium text-slate-900">Digitale Volumentomographie</h4>
<p className="text-sm text-slate-500">3D-Diagnostik bei minimaler Strahlung.</p>
</div>
</div>
<div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700">
<svg className="lucide lucide-syringe w-6 h-6" data-lucide="syringe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 2 4 4"></path><path d="m17 7 3-3"></path><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"></path><path d="m9 11 4 4"></path><path d="m5 19-3 3"></path><path d="m14 4 6 6"></path></svg>
</div>
<div className="flex-1">
<h4 className="font-medium text-slate-900">Eigenbluttherapie (ACP)</h4>
<p className="text-sm text-slate-500">Biologische Regeneration für Knorpel &amp; Sehnen.</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xl shadow-slate-200/50 reveal delay-100">
<div className="grid grid-cols-2 text-lg text-center font-medium border-b border-slate-100">
<div className="py-6 text-slate-400 bg-slate-50">Standard</div>
<div className="py-6 text-sky-700 bg-sky-50/30 font-semibold relative overflow-hidden">
                            OrthoZentrum
                            <div className="absolute top-0 left-0 w-full h-1 bg-sky-500"></div>
</div>
</div>
<div className="divide-y divide-slate-50">
<div className="grid grid-cols-2 py-5 px-6 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-slate-500 text-sm md:text-base">Symptomorientiert</div>
<div className="text-slate-900 font-medium flex items-center gap-2 text-sm md:text-base">
<svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Ursachenorientiert
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-slate-500 text-sm md:text-base">Lange Wartezeiten</div>
<div className="text-slate-900 font-medium flex items-center gap-2 text-sm md:text-base">
<svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Termin in 48h
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-slate-500 text-sm md:text-base">Standard-Schema</div>
<div className="text-slate-900 font-medium flex items-center gap-2 text-sm md:text-base">
<svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Individueller Plan
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center hover:bg-slate-50/50 transition-colors">
<div className="text-slate-500 text-sm md:text-base">Anonyme Abfertigung</div>
<div className="text-slate-900 font-medium flex items-center gap-2 text-sm md:text-base">
<svg className="lucide lucide-check w-4 h-4 text-sky-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Persönlicher Arzt
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 mx-2 md:mx-6 bg-slate-900 rounded-[2.5rem] relative overflow-hidden text-white" id="behandlung">

<div className="absolute inset-0 opacity-20">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500 rounded-full blur-[128px]"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[128px]"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-20 text-center reveal">Ihr Weg zur Beschwerdefreiheit</h2>
<div className="grid md:grid-cols-4 gap-12 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-slate-800 z-0"></div>

<div className="relative z-10 reveal delay-100 group">
<div className="w-12 h-12 bg-slate-800 border border-slate-700 text-sky-400 rounded-full flex items-center justify-center text-lg font-medium mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">1</div>
<h3 className="text-xl font-medium mb-3 text-white">Analyse</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Ausführliches Gespräch, klinische Untersuchung und bildgebende Verfahren (MRT/Ultraschall) direkt vor Ort.
                    </p>
</div>

<div className="relative z-10 reveal delay-200 group">
<div className="w-12 h-12 bg-slate-800 border border-slate-700 text-sky-400 rounded-full flex items-center justify-center text-lg font-medium mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">2</div>
<h3 className="text-xl font-medium mb-3 text-white">Strategie</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Wir entwickeln einen Stufenplan. Konservative Maßnahmen stehen immer an erster Stelle.
                    </p>
</div>

<div className="relative z-10 reveal delay-300 group">
<div className="w-12 h-12 bg-slate-800 border border-slate-700 text-sky-400 rounded-full flex items-center justify-center text-lg font-medium mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">3</div>
<h3 className="text-xl font-medium mb-3 text-white">Therapie</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Start der Behandlung. Ob Injektion, Stoßwelle oder manuelle Therapie – wir begleiten jeden Schritt.
                    </p>
</div>

<div className="relative z-10 reveal delay-400 group">
<div className="w-12 h-12 bg-slate-800 border border-slate-700 text-sky-400 rounded-full flex items-center justify-center text-lg font-medium mb-6 shadow-xl group-hover:scale-110 transition-transform duration-300">4</div>
<h3 className="text-xl font-medium mb-3 text-white">Prävention</h3>
<p className="text-base text-slate-400 leading-relaxed">
                        Nach der Heilung sorgen wir dafür, dass Sie stabil bleiben. Trainingsempfehlungen für dauerhaften Erfolg.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="expertise">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium text-slate-900 tracking-tight mb-16 reveal">Messbare Erfolge</h2>
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal order-2 lg:order-1">
<div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
<img alt="Active person jogging" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1552674605-4694c0cc5ce6?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>

<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 hidden md:block animate-float w-64">
<div className="flex items-center gap-3 mb-4">
<div className="bg-sky-50 p-2 rounded-lg text-sky-600">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<div>
<div className="text-xs text-slate-500 font-medium">Recovery Rate</div>
<div className="font-semibold text-slate-900">Überdurchschnittlich</div>
</div>
</div>

<div className="flex gap-2 items-end h-16 w-full">
<div className="w-1/5 bg-slate-200 rounded-t-sm h-[30%]"></div>
<div className="w-1/5 bg-slate-200 rounded-t-sm h-[45%]"></div>
<div className="w-1/5 bg-sky-200 rounded-t-sm h-[50%]"></div>
<div className="w-1/5 bg-sky-400 rounded-t-sm h-[75%]"></div>
<div className="w-1/5 bg-sky-600 rounded-t-sm h-[95%]"></div>
</div>
</div>
</div>

<div className="space-y-10 order-1 lg:order-2 reveal delay-100">
<div className="border-l-4 border-slate-100 pl-8 hover:border-sky-500 transition-colors duration-300 cursor-default group">
<div className="text-6xl font-semibold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">92%</div>
<p className="text-lg text-slate-600">der Patienten vermeiden eine Operation durch unsere konservative Therapie.</p>
</div>
<div className="border-l-4 border-slate-100 pl-8 hover:border-sky-500 transition-colors duration-300 cursor-default group">
<div className="text-6xl font-semibold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">3k+</div>
<p className="text-lg text-slate-600">erfolgreich behandelte Sportverletzungen im letzten Jahr.</p>
</div>
<div className="border-l-4 border-slate-100 pl-8 hover:border-sky-500 transition-colors duration-300 cursor-default group">
<div className="text-6xl font-semibold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">24h</div>
<p className="text-lg text-slate-600">Garantierte Terminvergabe für akute Schmerzpatienten.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-100">
<div className="max-w-5xl mx-auto text-center reveal">
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-12">Unsere Schwerpunkte</h2>
<div className="flex flex-wrap justify-center gap-3 mb-12">
<span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-base text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-all cursor-default">Kniegelenksarthrose</span>
<span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-base text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-all cursor-default">Kreuzbandriss</span>
<span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-base text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-all cursor-default">Bandscheibenvorfall</span>
<span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-base text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-all cursor-default">Schulterimpingement</span>
<span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-base text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-all cursor-default">Sporttraumatologie</span>
<span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-base text-slate-700 hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-all cursor-default">Fußchirurgie</span>
</div>
<a className="inline-flex items-center gap-2 text-slate-900 font-medium text-base hover:text-sky-600 transition-colors group" href="#termin">
                Haben Sie Fragen zu anderen Beschwerden? Kontaktieren Sie uns 
                <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<section className="py-24 px-6" id="stories">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-16 text-center reveal">Zurück im Leben</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm reveal hover:shadow-xl hover:shadow-slate-200/40 transition-shadow">
<div className="flex items-center justify-between mb-8">
<div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">

<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="flex text-amber-400 gap-0.5">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                        "Nach drei Jahren Knieschmerzen und unzähligen Arztbesuchen endlich eine Diagnose, die Sinn macht. Die PRP-Therapie hat mir die OP erspart. Ich gehe wieder joggen!"
                    </p>
<div>
<div className="font-medium text-slate-900">Michael Weber</div>
<div className="text-sm text-slate-400">Patient seit 2023</div>
</div>
</div>

<div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm reveal delay-100 hover:shadow-xl hover:shadow-slate-200/40 transition-shadow">
<div className="flex items-center justify-between mb-8">
<div className="w-12 h-12 rounded-full overflow-hidden bg-slate-100">

<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="flex text-amber-400 gap-0.5">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                        "Sehr moderne Praxis, extrem gut organisiert. Dr. Müller hat sich Zeit genommen und mir alles genau am Modell erklärt. Man fühlt sich als Mensch wahrgenommen."
                    </p>
<div>
<div className="font-medium text-slate-900">Sabine K.</div>
<div className="text-sm text-slate-400">Schulter-Behandlung</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-slate-200" id="termin">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-medium text-slate-900 tracking-tight mb-6 leading-tight">
                    Bereit für den ersten Schritt?
                </h2>
<p className="text-lg text-slate-500 mb-10 leading-relaxed">
                    Vereinbaren Sie jetzt Ihren Termin. Einfach, schnell und digital. Wir melden uns umgehend zur Bestätigung.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 flex-shrink-0">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h4 className="font-medium text-slate-900">OrthoZentrum München</h4>
<p className="text-slate-500 text-sm">Maximilianstraße 34, 80539 München</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 flex-shrink-0">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h4 className="font-medium text-slate-900">Telefon</h4>
<p className="text-slate-500 text-sm">+49 (0) 89 123 456 78</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 reveal delay-100 relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-200 rounded-full blur-[60px] opacity-40"></div>
<form className="space-y-5 relative z-10">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Vorname</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-300" placeholder="Max" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Nachname</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-300" placeholder="Mustermann" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Email</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all placeholder:text-slate-300" placeholder="max@beispiel.de" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-500 uppercase tracking-wider ml-1">Beschwerde</label>
<div className="relative">
<select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all text-slate-600 appearance-none cursor-pointer">
<option>Bitte wählen...</option>
<option>Kniebeschwerden</option>
<option>Rückenschmerzen</option>
<option>Schulter / Nacken</option>
<option>Sportunfall</option>
<option>Kontrolltermin</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-sky-600 text-white font-medium text-lg py-3.5 rounded-lg hover:bg-sky-500 transition-all shadow-lg shadow-sky-600/20 hover:-translate-y-0.5 active:translate-y-0" type="button">
                            Termin anfragen
                        </button>
</div>
<p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-2">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Ihre Daten werden verschlüsselt übertragen.
                    </p>
</form>
</div>
</div>
</section>

<footer className="py-12 border-t border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-800 rounded-md flex items-center justify-center text-white">
<svg className="lucide lucide-activity w-3 h-3" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">OrthoZentrum</span>
</div>
<div className="flex gap-8 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Impressum</a>
<a className="hover:text-slate-900 transition-colors" href="#">Datenschutz</a>
<a className="hover:text-slate-900 transition-colors" href="#">Kontakt</a>
</div>
<div className="text-sm text-slate-400">
                © 2024 OrthoZentrum. Alle Rechte vorbehalten.
            </div>
</div>
</footer>


    </>
  );
}
