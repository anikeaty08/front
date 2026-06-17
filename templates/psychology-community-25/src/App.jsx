import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/advancedlightandshadowblurmaterial-AkTXlsUYXzV54u5a1pc75N0w/" width="100%"></iframe></div></div>

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300" id="navbar">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-medium tracking-tighter text-sm group-hover:bg-teal-600 group-hover:rotate-6 transition-all duration-300 shadow-md shadow-slate-900/10">
                    SC
                </div>
<span className="text-slate-900 font-medium tracking-tight text-sm">Suflet Conectat</span>
</div>
<a className="hidden sm:flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-full transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 hover:-translate-y-0.5 group btn-shine" href="#join">
<span>Intră în comunitate</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="pt-32 pb-20 sm:pt-40 sm:pb-24 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-teal-50 to-transparent -z-10 rounded-[100%] blur-3xl opacity-70 pointer-events-none animate-pulse" style={{animationDuration: '4s'}}></div>
<div className="max-w-3xl mx-auto text-center space-y-8">
<div className="animate-fade-up flex justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-teal-100 text-teal-800 text-xs font-medium shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default">
<iconify-icon className="text-teal-500" height="14" icon="solar:stars-linear" width="14"></iconify-icon>
<span>Comunitate exclusivă de psihologie &amp; wellbeing</span>
</div>
</div>
<h1 className="animate-fade-up delay-100 text-4xl sm:text-6xl font-medium text-slate-900 tracking-tight leading-[1.1]">
                Redescoperă echilibrul interior într-un spațiu <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-indigo-600">sigur și empatic.</span>
</h1>
<p className="animate-fade-up delay-200 text-lg sm:text-xl text-slate-500 font-light max-w-xl mx-auto leading-relaxed">
                Nu trebuie să treci singur prin furtunile emoționale. Aici găsești sprijin, claritate și instrumente reale pentru liniștea ta.
            </p>
<div className="animate-fade-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-full transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(15,23,42,0.5)] hover:-translate-y-1 group btn-shine" href="#join">
<iconify-icon height="18" icon="solar:login-2-linear" width="18"></iconify-icon>
<span>Intră în comunitatea mea</span>
<iconify-icon className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium rounded-full transition-all duration-300 hover:border-slate-300 hover:shadow-md" href="#about">
<span>Ce este Millennium Vibe</span>
<iconify-icon className="text-slate-400 group-hover:text-slate-600 transition-colors" height="18" icon="solar:info-circle-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="max-w-5xl mx-auto mt-16 relative animate-fade-up delay-300">
<div className="aspect-video sm:aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 group cursor-pointer relative z-10">

<div className="w-full h-full bg-slate-100 relative flex items-center justify-center overflow-hidden">
<img alt="Peaceful Environment" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&amp;w=2938&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent"></div>

<div className="absolute w-16 h-16 rounded-full bg-white/30 animate-[pulse-ring_2s_infinite]"></div>
<button className="absolute bg-white/20 backdrop-blur-md border border-white/40 text-white w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
<iconify-icon className="ml-1" height="36" icon="solar:play-linear" strokeWidth="1.5" width="36"></iconify-icon>
</button>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 blur-2xl -z-10 opacity-50 rounded-[3rem]"></div>
<p className="text-center text-xs text-slate-400 mt-6 font-medium tracking-wide uppercase flex items-center justify-center gap-2">
<span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></span>
                Video introductiv (30 sec)
            </p>
</div>
</header>

<section className="py-24 px-6 bg-white border-y border-slate-100" id="about">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 order-2 md:order-1 reveal">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-2">Comunitatea „Suflet Conectat”</h2>
<p className="text-teal-600 font-medium text-lg flex items-center gap-2">
<iconify-icon height="20" icon="solar:heart-angle-linear" width="20"></iconify-icon>
                        Un sanctuar digital pentru mintea ta.
                    </p>
</div>
<div className="space-y-6">
<p className="text-slate-500">Această comunitate este pentru tine dacă:</p>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-100 transition-colors">
<iconify-icon className="text-teal-600" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">Te simți copleșit de anxietate sau stres și nu știi de unde să începi.</span>
</li>
<li className="flex items-start gap-3 group">
<div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-100 transition-colors">
<iconify-icon className="text-teal-600" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">Cauți validare și înțelegere fără teama de a fi judecat.</span>
</li>
<li className="flex items-start gap-3 group">
<div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-100 transition-colors">
<iconify-icon className="text-teal-600" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">Vrei să înveți să setezi limite sănătoase în relații.</span>
</li>
<li className="flex items-start gap-3 group">
<div className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-teal-100 transition-colors">
<iconify-icon className="text-teal-600" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">Simți nevoia de apartenență la un grup care valorizează creșterea.</span>
</li>
</ul>
</div>
</div>
<div className="order-1 md:order-2 relative reveal delay-200">
<div className="aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 relative group shadow-2xl shadow-slate-200">
<img alt="Community Connection" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-24">
<div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<p className="text-white font-medium text-base mb-1">Conectare autentică</p>
<p className="text-slate-300 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">Dincolo de ecrane, suntem oameni.</p>
</div>
</div>
</div>

<div className="absolute -right-6 -bottom-6 w-32 h-32 bg-teal-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
<div className="absolute -left-6 -top-6 w-40 h-40 bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 reveal">
<h3 className="text-2xl font-medium text-slate-900 tracking-tight">Ce găsești în comunitate</h3>
<p className="text-slate-500 mt-2 text-sm">Resurse curate, validate psihologic.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-2">Spațiu de Siguranță</h4>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Acces la un grup moderat profesionist, unde poți fi vulnerabil în siguranță.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 reveal delay-100">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:document-text-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-2">Articole Săptămânale</h4>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Materiale exclusive despre psihologie, scrise pe înțelesul tuturor.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 reveal delay-200">
<div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:chat-round-video-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-2">Sesiuni Live &amp; Q&amp;A</h4>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Întâlniri lunare în care răspund la întrebările tale anonime.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center text-rose-600 mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:heart-pulse-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-2">Resurse Practice</h4>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Fișe de lucru, exerciții de mindfulness și jurnale ghidate.</p>
</div>

<div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-2 flex flex-col md:flex-row items-start md:items-center gap-6 reveal delay-100">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600 mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h4 className="font-medium text-slate-900 mb-2">Reduceri Exclusiviste</h4>
<p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">Prioritate și prețuri preferențiale la workshop-uri, retreat-uri și ședințe de grup.</p>
</div>
<a className="shrink-0 px-6 py-3 bg-white border border-slate-200 text-slate-700 text-xs font-medium rounded-full hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-sm" href="#join">
                        Vreau acces
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-slate-100">
<div className="max-w-3xl mx-auto text-center reveal">
<div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-slate-50 shadow-lg relative group">
<img alt="Portrait" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=2788&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full"></div>
</div>
<p className="text-xs font-medium tracking-wide text-slate-400 uppercase mb-2">Susținut de</p>
<h3 className="text-2xl font-medium text-slate-900 tracking-tight mb-2">Dr. Elena Popescu</h3>
<p className="text-teal-600 font-medium mb-6 flex justify-center items-center gap-2">
                Psiholog Clinician &amp; Psihoterapeut
                <iconify-icon className="text-teal-500" icon="solar:verified-check-bold"></iconify-icon>
</p>
<div className="text-slate-500 leading-relaxed space-y-4 text-sm md:text-base bg-slate-50 p-8 rounded-3xl border border-slate-100 relative">
<iconify-icon className="absolute -top-4 -left-2 text-slate-200 rotate-12" height="40" icon="solar:quote-up-square-linear" width="40"></iconify-icon>
<p>
                    Sunt Elena și lucrez cu oameni care vor să-și transforme anxietatea în putere interioară. 
                    După 10 ani de practică în cabinet, am înțeles că vindecarea nu se întâmplă doar într-o oră de terapie, ci prin conexiunea constantă cu resurse sănătoase.
                </p>
<p className="font-medium text-slate-700">
                    Am creat acest spațiu pentru a democrațiza accesul la sănătate mintală de calitate. Aici, nu ești doar un "pacient", ești parte dintr-un ecosistem de creștere.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-slate-900 text-slate-300" id="join">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-900/20 rounded-full blur-[100px] pointer-events-none animate-pulse"></div>
<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-900/20 rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8 reveal">
<div>
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-900/30 border border-teal-500/30 text-teal-400 text-xs font-medium tracking-wider uppercase mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                        Cadou de bun venit
                    </span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Pentru că primul pas contează.</h2>
<p className="text-slate-400">Când intri în comunitatea <span className="text-white font-medium">Suflet Conectat</span>, primești GRATUIT:</p>
</div>
<div className="p-6 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl">
<h3 className="text-xl text-white font-medium mb-2 flex items-center gap-2">
                        Ghidul Tău de Prim Ajutor Emoțional
                        <span className="text-[10px] bg-white text-slate-900 px-1.5 py-0.5 rounded font-bold">PDF</span>
</h3>
<p className="text-xs text-slate-400 mb-6">(disponibil imediat după înscriere)</p>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-400 shadow-teal-400/50 drop-shadow-sm" height="18" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm">Tehnici de respirație pentru atacuri de panică</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-400 shadow-teal-400/50 drop-shadow-sm" height="18" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm">Jurnal de monitorizare a stării de bine</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-teal-400 shadow-teal-400/50 drop-shadow-sm" height="18" icon="solar:check-circle-bold" width="18"></iconify-icon>
<span className="text-sm">Audio: Meditație ghidată de 10 minute</span>
</li>
</ul>
</div>
<div className="pt-2">
<p className="text-sm text-slate-400 mb-6 italic">"O mică trusă de unelte psihologice pe care să o ai mereu în buzunar."</p>
<button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-teal-500 hover:bg-teal-400 text-teal-950 font-semibold rounded-full transition-all duration-300 hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(20,184,166,0.5)] hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.7)] group relative overflow-hidden">
<span className="relative z-10">Intră în comunitate și ia cadoul</span>
<iconify-icon className="relative z-10 group-hover:rotate-12 transition-transform" height="18" icon="solar:gift-linear" width="18"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</button>
<p className="mt-4 text-[10px] text-slate-500 text-center sm:text-left">Datele tale sunt protejate. Te poți dezabona oricând.</p>
</div>
</div>
<div className="relative flex justify-center reveal delay-200">

<div className="animate-float w-64 aspect-[3/4] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-xl shadow-2xl hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center p-6 text-center group cursor-pointer relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-slate-700 transition-colors shadow-inner">
<iconify-icon className="text-teal-400 group-hover:scale-110 transition-transform duration-300" height="40" icon="solar:book-bookmark-linear" strokeWidth="1" width="40"></iconify-icon>
</div>
<span className="text-white font-serif text-xl mb-1 tracking-wide">GHID</span>
<span className="text-teal-400 text-xs tracking-[0.2em] uppercase font-bold">Prim Ajutor</span>
<span className="text-slate-500 text-[10px] mt-8 py-1 px-3 border border-slate-700 rounded-full">PDF Download</span>
</div>

<div className="absolute inset-0 bg-teal-500/20 blur-[60px] -z-10 rounded-full animate-pulse"></div>
</div>
</div>
</section>

<section className="py-20 px-6 bg-slate-50 border-t border-slate-200">
<div className="max-w-4xl mx-auto reveal">
<div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm relative overflow-hidden group hover:shadow-xl transition-shadow duration-500">

<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:rotate-12">
<iconify-icon height="200" icon="solar:global-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-slate-900 flex items-center justify-center text-white text-[10px] font-bold">MV</div>
<span className="text-sm font-semibold text-slate-900 tracking-tight">Millennium Vibe</span>
</div>
<h2 className="text-2xl sm:text-3xl font-medium text-slate-900 tracking-tight mb-4">
                        Comunitatea ta este parte dintr-un ecosistem viu.
                    </h2>
<p className="text-slate-500 text-sm sm:text-base mb-8 max-w-2xl">
                        Millennium Vibe nu este o platformă clasică, ci un hub de comunități tematice interconectate. 
                        Aderând la , primești cheia către întregul oraș digital.
                    </p>
<div className="grid sm:grid-cols-2 gap-4 mb-8">
<div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-teal-50 hover:scale-[1.02] transition-all cursor-default">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" height="20" icon="solar:earth-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-700">Acces la alte comunități complementare (sport, nutriție, artă)</span>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-teal-50 hover:scale-[1.02] transition-all cursor-default">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" height="20" icon="solar:hand-shake-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-700">Colaborări facilitate între membri și experți</span>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-teal-50 hover:scale-[1.02] transition-all cursor-default">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" height="20" icon="solar:mortarboard-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-700">Cursuri, evenimente și resurse educaționale premium</span>
</div>
<div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-teal-50 hover:scale-[1.02] transition-all cursor-default">
<iconify-icon className="text-slate-900 shrink-0 mt-0.5" height="20" icon="solar:wallet-money-linear" width="20"></iconify-icon>
<span className="text-sm text-slate-700">Recompense financiare și beneficii prin sistemul de afiliere</span>
</div>
</div>
<a className="inline-flex items-center gap-2 text-slate-900 font-medium text-sm hover:gap-3 transition-all group/link" href="#">
                        Descoperă ecosistemul Millennium Vibe
                        <iconify-icon className="group-hover/link:text-teal-600 transition-colors" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 py-12 px-6">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-200 rounded flex items-center justify-center text-slate-600 font-bold text-xs">SC</div>
<span className="text-slate-500 font-medium text-xs tracking-tight">© 2023 Suflet Conectat.</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Termeni și condiții</a>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Politica de confidențialitate</a>
<a className="text-xs text-slate-400 hover:text-slate-900 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
