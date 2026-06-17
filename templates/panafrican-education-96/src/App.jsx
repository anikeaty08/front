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
      

<div className="grain fixed w-full h-full"></div>

<nav className="fixed top-0 left-0 w-full z-40 border-b border-[#C6A878]/10 bg-[#0D1B2A]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-2xl font-display tracking-tight text-[#D9B871]" href="#">SELHA.</a>
<div className="hidden md:flex items-center space-x-12 text-sm font-light tracking-wide text-[#F9F5EC]/80">
<a className="hover:text-[#D9B871] transition-colors duration-500" href="#why">Vision</a>
<a className="hover:text-[#D9B871] transition-colors duration-500" href="#system">Système</a>
<a className="hover:text-[#D9B871] transition-colors duration-500" href="#programs">Programmes</a>
<a className="hover:text-[#D9B871] transition-colors duration-500" href="#transmission">Héritage</a>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2 border border-[#C6A878]/30 hover:border-[#D9B871] text-xs font-medium tracking-widest uppercase transition-all duration-500 hover:bg-[#D9B871]/10" href="#join">
<span>Contribuer</span>
<iconify-icon icon="lucide:arrow-up-right" width="16"></iconify-icon>
</a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">

<div className="absolute inset-0 stars-bg"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0D1B2A] via-[#0D1B2A]/80 to-transparent z-10"></div>
<div className="absolute inset-0 w-full h-full z-0 opacity-40">

<img alt="Desert Starry Night" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-20 text-center max-w-4xl mx-auto px-6 space-y-12">
<div className="space-y-6">
<h1 className="text-7xl md:text-9xl font-display tracking-tighter text-[#F9F5EC] leading-none">
                    SELHA.
                </h1>
<p className="text-xl md:text-2xl font-quote italic text-[#D9B871] tracking-wide">
                    Former ceux qui bâtiront demain.
                </p>
</div>
<p className="max-w-xl mx-auto text-base text-[#F9F5EC]/70 leading-relaxed font-light">
                Une institution panafricaine dédiée à la transmission du savoir scientifique et technologique.<br/>
                Le futur ne se reçoit pas : il se construit.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
<button className="px-8 py-4 bg-[#D9B871] text-[#0D1B2A] font-medium tracking-wide text-sm hover:bg-[#C6A878] transition-colors duration-500 w-full md:w-auto">
                    Rejoindre la Diaspora SELHA
                </button>
<button className="px-8 py-4 bg-transparent border border-[#F9F5EC]/20 text-[#F9F5EC] font-medium tracking-wide text-sm hover:border-[#D9B871] hover:text-[#D9B871] transition-colors duration-500 w-full md:w-auto">
                    Parrainer un(e) Étudiant(e)
                </button>
</div>
</div>
</section>

<section className="py-32 relative border-t border-[#C6A878]/10 bg-[#0D1B2A]" id="why">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24">
<h2 className="text-4xl md:text-5xl font-display text-[#F9F5EC] mb-6">L'Horizon.</h2>
<p className="text-lg text-[#F9F5EC]/60 max-w-2xl font-light">
                    Le monde vieillit, mais l’Afrique grandit. SELHA. existe pour franchir cette fenêtre historique.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-[#C6A878]/20 bg-[#F9F5EC]/[0.02] hover:bg-[#F9F5EC]/[0.04] transition-colors duration-500 flex flex-col justify-between h-80">
<iconify-icon className="text-[#D9B871] mb-4" icon="lucide:users" width="32"></iconify-icon>
<div>
<span className="block text-5xl font-display text-[#F9F5EC] mb-2">60%</span>
<p className="text-[#F9F5EC]/60 text-sm font-light leading-relaxed">
                            De la population africaine a moins de 25 ans. Une force vitale prête à apprendre.
                        </p>
</div>
</div>

<div className="p-8 border border-[#C6A878]/20 bg-[#F9F5EC]/[0.02] hover:bg-[#F9F5EC]/[0.04] transition-colors duration-500 flex flex-col justify-between h-80">
<iconify-icon className="text-[#D9B871] mb-4" icon="lucide:book-open" width="32"></iconify-icon>
<div>
<span className="block text-2xl font-display text-[#F9F5EC] mb-4">Savoir Accessible</span>
<p className="text-[#F9F5EC]/60 text-sm font-light leading-relaxed">
                            Jamais le savoir n’a été aussi accessible. Nous le structurons pour l'excellence.
                        </p>
</div>
</div>

<div className="p-8 border border-[#C6A878]/20 bg-[#F9F5EC]/[0.02] hover:bg-[#F9F5EC]/[0.04] transition-colors duration-500 flex flex-col justify-between h-80 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1481277542470-605612bd2d61?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-overlay"></div>
<iconify-icon className="text-[#D9B871] mb-4 relative z-10" icon="lucide:hourglass" width="32"></iconify-icon>
<div className="relative z-10">
<span className="block text-2xl font-display text-[#F9F5EC] mb-4">Momentum</span>
<p className="text-[#F9F5EC]/60 text-sm font-light leading-relaxed">
                            C'est maintenant que se dessine l'architecture du prochain siècle africain.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#111111] relative border-t border-[#C6A878]/10" id="system">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[#D9B871] tracking-widest text-xs uppercase mb-4 block">Méthodologie</span>
<h2 className="text-3xl md:text-5xl font-display text-[#F9F5EC]">Le Système SELHA.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C6A878]/30 to-transparent"></div>

<div className="relative flex flex-col items-center text-center p-6 group">
<div className="w-24 h-24 rounded-full bg-[#0D1B2A] border border-[#C6A878]/30 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#D9B871] transition-colors duration-500">
<iconify-icon className="text-[#F9F5EC]" icon="lucide:graduation-cap" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-display text-[#F9F5EC] mb-3">Former</h3>
<p className="text-sm text-[#F9F5EC]/50 font-light leading-relaxed">
                        Sciences du XXIe siècle.<br/>IA, data, robotique.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center p-6 group">
<div className="w-24 h-24 rounded-full bg-[#0D1B2A] border border-[#C6A878]/30 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#D9B871] transition-colors duration-500">
<iconify-icon className="text-[#F9F5EC]" icon="lucide:hammer" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-display text-[#F9F5EC] mb-3">Construire</h3>
<p className="text-sm text-[#F9F5EC]/50 font-light leading-relaxed">
                        Entreprises et laboratoires locaux.<br/>Infrastructures réelles.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center p-6 group">
<div className="w-24 h-24 rounded-full bg-[#0D1B2A] border border-[#C6A878]/30 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#D9B871] transition-colors duration-500">
<iconify-icon className="text-[#F9F5EC]" icon="lucide:scroll" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-display text-[#F9F5EC] mb-3">Transmettre</h3>
<p className="text-sm text-[#F9F5EC]/50 font-light leading-relaxed">
                        Savoir intergénérationnel.<br/>L'expérience guide l'énergie.
                    </p>
</div>

<div className="relative flex flex-col items-center text-center p-6 group">
<div className="w-24 h-24 rounded-full bg-[#0D1B2A] border border-[#C6A878]/30 flex items-center justify-center mb-8 relative z-10 group-hover:border-[#D9B871] transition-colors duration-500">
<iconify-icon className="text-[#F9F5EC]" icon="lucide:refresh-cw" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-display text-[#F9F5EC] mb-3">Réinvestir</h3>
<p className="text-sm text-[#F9F5EC]/50 font-light leading-relaxed">
                        Cycle durable de progrès.<br/>De la réussite au partage.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0D1B2A] border-t border-[#C6A878]/10" id="programs">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-4xl md:text-5xl font-display text-[#F9F5EC] mb-4">Piliers Fondateurs</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-8 h-80 md:h-full relative group overflow-hidden border border-[#C6A878]/20">
<div className="absolute inset-0 bg-[#000000]/40 z-10 group-hover:bg-[#000000]/30 transition-all duration-700"></div>
<img alt="Students learning" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 p-8 z-20">
<span className="text-[#D9B871] text-xs uppercase tracking-widest mb-2 block">Éducation</span>
<h3 className="text-3xl font-display text-[#F9F5EC] mb-2">Académie SELHA</h3>
<p className="text-[#F9F5EC]/80 font-light max-w-md">Formation scientifique et technologique d'élite pour les talents du continent.</p>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-6 h-full">

<div className="flex-1 relative group overflow-hidden border border-[#C6A878]/20 bg-[#111111]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2940&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<iconify-icon className="text-[#D9B871] mb-4" icon="lucide:cpu" width="24"></iconify-icon>
<h3 className="text-2xl font-display text-[#F9F5EC] mb-1">Studios SELHA</h3>
<p className="text-[#F9F5EC]/60 text-sm font-light">Incubation, mentorat, accès IA et cloud.</p>
</div>
</div>

<div className="flex-1 relative group overflow-hidden border border-[#C6A878]/20 bg-[#111111]">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599695690324-4f51e0cc9628?q=80&amp;w=2940&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale opacity-20 group-hover:opacity-30 transition-opacity duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 z-20">
<iconify-icon className="text-[#D9B871] mb-4" icon="lucide:factory" width="24"></iconify-icon>
<h3 className="text-2xl font-display text-[#F9F5EC] mb-1">Industries SELHA</h3>
<p className="text-[#F9F5EC]/60 text-sm font-light">Emplois locaux et production durable.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F9F5EC] text-[#0D1B2A]" id="transmission">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="absolute -inset-4 border border-[#C6A878]/30 z-0"></div>
<img alt="Elder Portrait" className="relative z-10 w-full aspect-[4/5] object-cover grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="order-1 md:order-2 space-y-8">
<h2 className="text-4xl md:text-5xl font-display text-[#0D1B2A] leading-tight">
                    Le savoir ne s’hérite pas : <br/><span className="text-[#C6A878] italic font-quote">il se transmet.</span>
</h2>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<iconify-icon className="text-[#C6A878] mt-1 flex-shrink-0" icon="lucide:quote" width="20"></iconify-icon>
<div>
<h4 className="text-lg font-semibold font-display mb-1">Les Sages forment les Jeunes</h4>
<p className="text-[#111111]/70 font-light">Une chaîne de connaissances ininterrompue, garantissant que la sagesse ancestrale guide l'innovation future.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-[#C6A878] mt-1 flex-shrink-0" icon="lucide:sun" width="20"></iconify-icon>
<div>
<h4 className="text-lg font-semibold font-display mb-1">Les Femmes portent la lumière</h4>
<p className="text-[#111111]/70 font-light">Pilier central de notre société, l'éducation scientifique des femmes est la clé de voûte du développement.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0D1B2A] relative overflow-hidden border-t border-[#111111]">

<div className="absolute right-0 top-0 h-full w-1/2 opacity-10 bg-[url('https://images.unsplash.com/photo-1548232675-81676648174f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center grayscale pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-display text-[#F9F5EC] mb-6">
                Si tu as trouvé ta voie ailleurs,
                <span className="text-[#D9B871]">aide-nous à construire la nôtre ici.</span>
</h2>
<div className="flex justify-center mt-10">
<button className="group relative px-8 py-4 bg-transparent border border-[#C6A878] text-[#F9F5EC] font-medium tracking-wide text-sm overflow-hidden transition-all duration-300 hover:text-[#0D1B2A]">
<span className="absolute inset-0 w-full h-full bg-[#C6A878] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
<span className="relative flex items-center gap-2">
                        Devenir Mentor
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</button>
</div>
</div>
</section>

<section className="py-20 bg-[#111111] border-y border-[#C6A878]/10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-light text-[#F9F5EC]/40 mb-12 tracking-widest uppercase">Les géants du monde soutiennent ceux qui bâtiront le leur</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 opacity-40 grayscale">

<div className="flex items-center justify-center gap-2">
<div className="h-8 w-8 border border-[#F9F5EC] rotate-45"></div>
<span className="font-display tracking-widest text-[#F9F5EC]">ATLAS</span>
</div>
<div className="flex items-center justify-center gap-2">
<div className="h-8 w-8 rounded-full border border-[#F9F5EC]"></div>
<span className="font-display tracking-widest text-[#F9F5EC]">ORION</span>
</div>
<div className="flex items-center justify-center gap-2">
<div className="h-8 w-8 border border-[#F9F5EC]"></div>
<span className="font-display tracking-widest text-[#F9F5EC]">SIRIUS</span>
</div>
<div className="flex items-center justify-center gap-2">
<div className="h-8 w-8 rotate-12 border border-[#F9F5EC]"></div>
<span className="font-display tracking-widest text-[#F9F5EC]">VEGA</span>
</div>
</div>
</div>
</section>

<section className="py-32 relative flex items-center justify-center bg-gradient-to-b from-[#0D1B2A] to-[#1a2d42]" id="join">
<div className="absolute inset-0 stars-bg opacity-30"></div>
<div className="relative z-10 text-center max-w-2xl px-6">
<h2 className="text-5xl md:text-6xl font-display text-[#F9F5EC] mb-6 tracking-tight">
                Le futur commence maintenant.
            </h2>
<p className="text-xl text-[#D9B871] font-quote italic mb-10">
                Rejoins SELHA.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-[#F9F5EC] text-[#0D1B2A] font-semibold hover:bg-[#D9B871] transition-colors duration-300">
                    Rejoindre le Mouvement
                </button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#F9F5EC]/30 text-[#F9F5EC] font-medium hover:border-[#F9F5EC] transition-colors duration-300">
                    Contact
                </button>
</div>
</div>
</section>

<footer className="py-12 bg-[#0D1B2A] border-t border-[#C6A878]/10 text-center md:text-left">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<span className="text-lg font-display text-[#F9F5EC] block">SELHA.</span>
<span className="text-xs text-[#F9F5EC]/50 tracking-widest uppercase">Fondation du Progrès</span>
</div>
<div className="text-sm text-[#F9F5EC]/40 font-light">
                © 2025 SELHA Institute
            </div>
</div>
</footer>

    </>
  );
}
