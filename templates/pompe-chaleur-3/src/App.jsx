import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleFaq(id) {
            const element = document.getElementById(id);
            const content = element.querySelector('.accordion-content');
            const icon = element.querySelector('.icon-rotate');
            
            // Close others (optional, for accordion behavior)
            document.querySelectorAll('[id^="faq"]').forEach(el => {
                if (el.id !== id) {
                    el.classList.remove('accordion-open');
                    el.querySelector('.accordion-content').classList.add('hidden');
                    el.querySelector('.icon-rotate').style.transform = 'rotate(0deg)';
                }
            });

            // Toggle current
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
                element.classList.add('accordion-open');
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                element.classList.remove('accordion-open');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative w-full min-h-[90vh] flex items-center justify-center bg-[#0A0A0A] overflow-hidden py-20 lg:py-0 border-b border-[#2A2A2A]">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3A86FF] rounded-full mix-blend-screen filter blur-[120px] opacity-[0.05] pointer-events-none"></div>
<div className="container mx-auto px-6 lg:px-12 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="w-full lg:w-1/2 space-y-8">
<div className="inline-flex items-center space-x-2 border border-[#2A2A2A] bg-[#1A1A1A] rounded-full px-3 py-1">
<span className="w-2 h-2 rounded-full bg-[#3A86FF]"></span>
<span className="text-xs font-medium text-[#A0A0A0] tracking-wide uppercase">Innovation Énergétique</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
                        Pompe à chaleur air-eau : <br/>
<span className="text-[#E5E5E5]">le guide clair (sans jargon).</span>
</h1>
<p className="text-lg text-[#A0A0A0] leading-relaxed max-w-lg font-light">
                        Transformez l'air extérieur en chauffage durable pour votre maison. Une solution économique qui remplace votre chaudière tout en divisant vos factures par trois.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="group bg-[#E63946] hover:bg-[#ff4d5a] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(230,57,70,0.3)] hover:shadow-[0_0_30px_rgba(230,57,70,0.5)] flex items-center justify-center gap-2">
<span>Demander un devis</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="20"></span>
</button>
<button className="group px-8 py-4 rounded-lg font-medium text-[#E5E5E5] hover:text-white border border-[#2A2A2A] hover:border-[#3A86FF] transition-colors duration-300 flex items-center justify-center gap-2">
<span className="iconify text-[#3A86FF]" data-icon="lucide:play-circle" data-width="20"></span>
<span>Voir le fonctionnement</span>
</button>
</div>
</div>

<div className="w-full lg:w-1/2 relative">
<div className="relative rounded-2xl overflow-hidden border border-[#2A2A2A] bg-[#1A1A1A] shadow-2xl">

<div className="aspect-[4/3] bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] p-8 flex items-center justify-center relative">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
<div className="relative z-10 w-3/4 h-3/4 bg-[#151515] border border-[#333] rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center">
<div className="w-32 h-32 rounded-full border border-[#2A2A2A] flex items-center justify-center bg-[#0A0A0A]">
<span className="iconify text-[#3A86FF] animate-pulse" data-icon="lucide:fan" data-width="48"></span>
</div>
<div className="mt-6 space-y-2 text-center">
<div className="w-16 h-1 bg-[#3A86FF] mx-auto rounded-full"></div>
<p className="text-xs text-[#A0A0A0] uppercase tracking-widest">Unité Extérieure</p>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-[#1A1A1A] border border-[#2A2A2A] p-4 rounded-lg shadow-xl flex items-center gap-3">
<div className="w-10 h-10 bg-[#3A86FF]/10 rounded-full flex items-center justify-center text-[#3A86FF]">
<span className="iconify" data-icon="lucide:trending-down" data-width="20"></span>
</div>
<div>
<p className="text-xs text-[#A0A0A0]">Économies estimées</p>
<p className="text-white font-bold text-lg">-70% / an</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] px-6">
<div className="max-w-4xl mx-auto bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-8 md:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
<div className="flex flex-col md:flex-row gap-8 items-start">
<div className="w-full md:w-12 h-12 rounded-lg bg-[#3A86FF]/10 flex items-center justify-center flex-shrink-0 text-[#3A86FF]">
<span className="iconify" data-icon="lucide:info" data-width="24"></span>
</div>
<div>
<h2 className="text-3xl font-bold text-white mb-6 tracking-tight">Qu'est-ce qu'une PAC air-eau ?</h2>
<div className="space-y-6 text-[#E5E5E5] text-lg leading-relaxed font-light">
<p>
                            La pompe à chaleur (PAC) air-eau est un système de chauffage thermodynamique ingénieux. Contrairement à une chaudière classique qui brûle du gaz ou du fioul, elle capte les calories naturellement présentes dans l'air extérieur, même par temps froid.
                        </p>
<p>
                            Ces calories sont ensuite compressées pour augmenter leur température et injectées dans votre circuit de chauffage central (radiateurs ou plancher chauffant). C'est un principe de transfert d'énergie plutôt que de création d'énergie, ce qui explique son rendement exceptionnel.
                        </p>
<p>
                            En résumé : pour 1 kWh d'électricité consommé pour faire fonctionner le système, la PAC restitue 3 à 4 kWh de chaleur dans votre maison. C'est ce qu'on appelle le COP (Coefficient de Performance).
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] relative border-y border-[#2A2A2A]">
<div className="container mx-auto px-6 lg:px-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Comment fonctionne une PAC air-eau ?</h2>
<p className="text-[#A0A0A0]">Un cycle thermodynamique en 4 étapes simples.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">

<div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#1A1A1A] via-[#3A86FF] to-[#1A1A1A] opacity-30 z-0"></div>

<div className="relative z-10 group">
<div className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#3A86FF]/50 p-6 rounded-xl h-full transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-[#3A86FF] text-[#3A86FF] flex items-center justify-center font-bold text-lg mb-6 shadow-[0_0_10px_rgba(58,134,255,0.2)]">1</div>
<h3 className="text-xl font-semibold text-white mb-3">Captation</h3>
<p className="text-[#A0A0A0] text-sm leading-relaxed">L'unité extérieure aspire l'air ambiant. Le fluide frigorigène, alors à l'état liquide froid, récupère ces calories et s'évapore.</p>
</div>
</div>

<div className="relative z-10 group">
<div className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#3A86FF]/50 p-6 rounded-xl h-full transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-[#3A86FF] text-[#3A86FF] flex items-center justify-center font-bold text-lg mb-6 shadow-[0_0_10px_rgba(58,134,255,0.2)]">2</div>
<h3 className="text-xl font-semibold text-white mb-3">Compression</h3>
<p className="text-[#A0A0A0] text-sm leading-relaxed">Le compresseur (électrique) met le gaz sous haute pression. Cette action fait monter brusquement la température du fluide.</p>
</div>
</div>

<div className="relative z-10 group">
<div className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#3A86FF]/50 p-6 rounded-xl h-full transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-[#3A86FF] text-[#3A86FF] flex items-center justify-center font-bold text-lg mb-6 shadow-[0_0_10px_rgba(58,134,255,0.2)]">3</div>
<h3 className="text-xl font-semibold text-white mb-3">Restitution</h3>
<p className="text-[#A0A0A0] text-sm leading-relaxed">Via le condenseur, le gaz chaud transmet sa chaleur à l'eau de votre circuit de chauffage. Il redevient liquide.</p>
</div>
</div>

<div className="relative z-10 group">
<div className="bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#3A86FF]/50 p-6 rounded-xl h-full transition-all duration-300 hover:-translate-y-1">
<div className="w-10 h-10 rounded-full bg-[#0A0A0A] border border-[#3A86FF] text-[#3A86FF] flex items-center justify-center font-bold text-lg mb-6 shadow-[0_0_10px_rgba(58,134,255,0.2)]">4</div>
<h3 className="text-xl font-semibold text-white mb-3">Détente</h3>
<p className="text-[#A0A0A0] text-sm leading-relaxed">Le détendeur fait chuter la pression du fluide, ce qui abaisse sa température. Il est prêt pour un nouveau cycle.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1A1A] px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-bold text-white mb-12 text-center tracking-tight">Monobloc ou Bibloc : lequel choisir ?</h2>
<div className="grid md:grid-cols-2 bg-[#0A0A0A] rounded-2xl border border-[#2A2A2A] overflow-hidden">

<div className="p-8 border-b md:border-b-0 md:border-r border-[#2A2A2A]">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-[#3A86FF]" data-icon="lucide:box" data-width="28"></span>
<h3 className="text-2xl font-bold text-white">Monobloc</h3>
</div>
<p className="text-[#A0A0A0] mb-8 text-sm min-h-[40px]">Tout est situé dans l'unité extérieure. Seule l'eau circule vers la maison.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-[#3A86FF] mt-1 shrink-0" data-icon="lucide:check" data-width="18"></span>
<div>
<strong className="text-white block text-sm">Installation simple</strong>
<span className="text-[#A0A0A0] text-xs">Pas de manipulation de fluide frigorigène.</span>
</div>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[#3A86FF] mt-1 shrink-0" data-icon="lucide:check" data-width="18"></span>
<div>
<strong className="text-white block text-sm">Gain de place</strong>
<span className="text-[#A0A0A0] text-xs">Pas de module intérieur encombrant.</span>
</div>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[#3A86FF] mt-1 shrink-0" data-icon="lucide:check" data-width="18"></span>
<div>
<strong className="text-white block text-sm">Moins cher</strong>
<span className="text-[#A0A0A0] text-xs">Coût matériel souvent inférieur.</span>
</div>
</li>
</ul>
</div>

<div className="p-8">
<div className="flex items-center gap-3 mb-6">
<span className="iconify text-[#3A86FF]" data-icon="lucide:layers" data-width="28"></span>
<h3 className="text-2xl font-bold text-white">Bibloc (Split)</h3>
</div>
<p className="text-[#A0A0A0] mb-8 text-sm min-h-[40px]">Une unité dehors, une unité dedans. Reliées par une liaison frigorifique.</p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-[#3A86FF] mt-1 shrink-0" data-icon="lucide:check" data-width="18"></span>
<div>
<strong className="text-white block text-sm">Meilleure performance</strong>
<span className="text-[#A0A0A0] text-xs">Moins de pertes thermiques en hiver.</span>
</div>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[#3A86FF] mt-1 shrink-0" data-icon="lucide:check" data-width="18"></span>
<div>
<strong className="text-white block text-sm">Pas de risque de gel</strong>
<span className="text-[#A0A0A0] text-xs">L'eau reste à l'intérieur de la maison.</span>
</div>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[#3A86FF] mt-1 shrink-0" data-icon="lucide:check" data-width="18"></span>
<div>
<strong className="text-white block text-sm">Plus silencieux</strong>
<span className="text-[#A0A0A0] text-xs">Le compresseur est mieux isolé.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] px-6">
<div className="container mx-auto">
<div className="grid lg:grid-cols-2 gap-8">

<div className="bg-[#1A1A1A] rounded-2xl p-8 border border-[#2A2A2A] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981] opacity-[0.05] filter blur-[40px] pointer-events-none"></div>
<h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
<span className="text-[#10B981]">✅</span> Les avantages
                    </h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-[#10B981]" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-semibold text-lg">Écologique</h4>
<p className="text-[#A0A0A0] text-sm mt-1">Réduit drastiquement l'empreinte carbone (jusqu'à -90% de CO2 vs fioul).</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-[#10B981]" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-semibold text-lg">Économique</h4>
<p className="text-[#A0A0A0] text-sm mt-1">Facture de chauffage divisée par 3 grâce à l'énergie gratuite de l'air.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-[#10B981]" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-semibold text-lg">Polyvalente</h4>
<p className="text-[#A0A0A0] text-sm mt-1">Assure le chauffage et l'eau chaude sanitaire (ECS) toute l'année.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-[#10B981]/10 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-[#10B981]" data-icon="lucide:check" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-semibold text-lg">Valorisation</h4>
<p className="text-[#A0A0A0] text-sm mt-1">Améliore le DPE de votre logement et augmente sa valeur verte.</p>
</div>
</div>
</div>
</div>

<div className="bg-[#1A1A1A] rounded-2xl p-8 border border-[#2A2A2A] relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#F59E0B] opacity-[0.05] filter blur-[40px] pointer-events-none"></div>
<h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
<span className="text-[#F59E0B]">⚠️</span> Points de vigilance
                    </h3>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-[#F59E0B]" data-icon="lucide:alert-triangle" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-semibold text-lg">Isolation préalable</h4>
<p className="text-[#A0A0A0] text-sm mt-1">Une maison mal isolée ("passoire thermique") réduira l'efficacité de la PAC.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-[#F59E0B]" data-icon="lucide:alert-triangle" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-semibold text-lg">Emplacement extérieur</h4>
<p className="text-[#A0A0A0] text-sm mt-1">L'unité extérieure peut être bruyante et inesthétique. Emplacement à étudier.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-[#F59E0B]" data-icon="lucide:alert-triangle" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-semibold text-lg">Radiateurs existants</h4>
<p className="text-[#A0A0A0] text-sm mt-1">Il faut vérifier s'ils sont compatibles "basse température" ou s'il faut les changer.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-6 h-6 rounded-full bg-[#F59E0B]/10 flex items-center justify-center shrink-0 mt-1">
<span className="iconify text-[#F59E0B]" data-icon="lucide:alert-triangle" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-semibold text-lg">Maintenance</h4>
<p className="text-[#A0A0A0] text-sm mt-1">Entretien obligatoire tous les 2 ans pour assurer la longévité.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1A1A] border-t border-[#2A2A2A]">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Prix d'une PAC air-eau &amp; aides disponibles</h2>
<p className="text-[#A0A0A0] max-w-2xl mx-auto">L'investissement initial est conséquent, mais les aides de l'État français peuvent financer jusqu'à 90% du projet selon vos revenus.</p>
</div>
<div className="relative bg-[#0A0A0A] border border-[#3A86FF] rounded-2xl p-8 lg:p-12 shadow-[0_0_40px_rgba(58,134,255,0.1)]">

<div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#3A86FF] to-transparent opacity-50"></div>
<div className="grid md:grid-cols-2 gap-10 items-center mb-10">
<div className="space-y-2">
<div className="flex items-center gap-2 text-[#E5E5E5] text-sm font-medium uppercase tracking-wider">
<span className="iconify text-[#3A86FF]" data-icon="lucide:banknote" data-width="18"></span>
<span>Budget indicatif</span>
</div>
<p className="text-3xl lg:text-4xl font-bold text-white">10 000€ <span className="text-[#3A86FF]">→</span> 18 000€</p>
<p className="text-xs text-[#A0A0A0]">Matériel et pose inclus, avant déduction des aides.</p>
</div>
<div className="bg-[#1A1A1A] rounded-xl p-6 border border-[#2A2A2A]">
<div className="flex items-center gap-2 mb-3">
<span className="iconify text-[#3A86FF]" data-icon="lucide:gift" data-width="20"></span>
<span className="text-white font-semibold">Aides cumulables :</span>
</div>
<ul className="text-[#A0A0A0] text-sm space-y-2">
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#3A86FF]"></span> MaPrimeRénov'
                            </li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#3A86FF]"></span> Primes CEE (Certificats d'Économie d'Énergie)
                            </li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#3A86FF]"></span> Éco-PTZ (Prêt taux zéro)
                            </li>
<li className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#3A86FF]"></span> TVA réduite à 5,5%
                            </li>
</ul>
</div>
</div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-[#3A86FF] hover:bg-[#4d91ff] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-[#3A86FF]/20">
                        Estimer mes aides
                    </button>
<button className="bg-transparent border border-[#E63946] text-[#E63946] hover:bg-[#E63946] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                        Me rappeler
                    </button>
</div>
<p className="text-center text-[10px] text-[#555] mt-6">
                    *Les montants varient selon les revenus du foyer, la zone géographique et le gain énergétique réalisé. Devis gratuit obligatoire.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0A] px-6">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl font-bold text-white mb-10 text-center">FAQ</h2>
<div className="space-y-4">

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#3A86FF]/50" id="faq1">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq('faq1')">
<span className="text-lg font-medium text-white">Qui peut installer une PAC air-eau ?</span>
<span className="iconify text-[#3A86FF] transition-transform duration-300 icon-rotate" data-icon="lucide:chevron-down" data-width="20"></span>
</button>
<div className="hidden px-6 pb-6 text-[#A0A0A0] text-sm leading-relaxed accordion-content">
                        L'installation doit impérativement être réalisée par un professionnel certifié RGE (Reconnu Garant de l'Environnement). C'est une condition sine qua non pour bénéficier des aides de l'État et garantir la conformité de l'installation.
                    </div>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#3A86FF]/50" id="faq2">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq('faq2')">
<span className="text-lg font-medium text-white">Quelle durée de vie pour une PAC air-eau ?</span>
<span className="iconify text-[#3A86FF] transition-transform duration-300 icon-rotate" data-icon="lucide:chevron-down" data-width="20"></span>
</button>
<div className="hidden px-6 pb-6 text-[#A0A0A0] text-sm leading-relaxed accordion-content">
                        Avec un entretien régulier, une pompe à chaleur air-eau a une durée de vie moyenne comprise entre 15 et 20 ans. Le compresseur est généralement la pièce la plus sollicitée.
                    </div>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#3A86FF]/50" id="faq3">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq('faq3')">
<span className="text-lg font-medium text-white">Entretien : c'est obligatoire ?</span>
<span className="iconify text-[#3A86FF] transition-transform duration-300 icon-rotate" data-icon="lucide:chevron-down" data-width="20"></span>
</button>
<div className="hidden px-6 pb-6 text-[#A0A0A0] text-sm leading-relaxed accordion-content">
                        Oui, depuis le décret de juillet 2020, l'entretien est obligatoire tous les 2 ans pour les systèmes dont la puissance est comprise entre 4 et 70 kW. Cela permet de vérifier l'étanchéité du circuit frigorigène et de nettoyer les filtres.
                    </div>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#3A86FF]/50" id="faq4">
<button className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none" onclick="toggleFaq('faq4')">
<span className="text-lg font-medium text-white">Est-ce que ça marche quand il fait froid ?</span>
<span className="iconify text-[#3A86FF] transition-transform duration-300 icon-rotate" data-icon="lucide:chevron-down" data-width="20"></span>
</button>
<div className="hidden px-6 pb-6 text-[#A0A0A0] text-sm leading-relaxed accordion-content">
                        Absolument. Les modèles modernes fonctionnent efficacement jusqu'à -20°C voire -25°C. Cependant, le rendement (COP) baisse lorsque la température extérieure chute. Dans les régions très froides, un chauffage d'appoint peut parfois être utile pour les quelques jours de grand gel.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1A1A] border-t border-[#2A2A2A] px-6">
<div className="max-w-md mx-auto bg-[#0A0A0A] border border-[#2A2A2A] p-8 rounded-2xl relative shadow-2xl">

<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E63946] to-[#3A86FF] rounded-t-2xl"></div>
<div className="text-center mb-8">
<h2 className="text-2xl font-bold text-white mb-2">Demander un devis</h2>
<p className="text-[#A0A0A0] text-sm">Recevez une étude personnalisée sous 24h. Sans engagement.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-[#A0A0A0] mb-1.5 ml-1">Nom complet</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-[#A0A0A0] group-focus-within:text-[#3A86FF]" data-icon="lucide:user" data-width="18"></span>
</div>
<input className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white text-sm rounded-lg block pl-10 p-3 placeholder-[#555] focus:outline-none focus:border-[#3A86FF] focus:ring-1 focus:ring-[#3A86FF] transition-all" placeholder="Jean Dupont" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#A0A0A0] mb-1.5 ml-1">Email professionnel</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="iconify text-[#A0A0A0] group-focus-within:text-[#3A86FF]" data-icon="lucide:mail" data-width="18"></span>
</div>
<input className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white text-sm rounded-lg block pl-10 p-3 placeholder-[#555] focus:outline-none focus:border-[#3A86FF] focus:ring-1 focus:ring-[#3A86FF] transition-all" placeholder="jean@exemple.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-[#A0A0A0] mb-1.5 ml-1">Votre projet</label>
<textarea className="w-full bg-[#1A1A1A] border border-[#2A2A2A] text-white text-sm rounded-lg block p-3 placeholder-[#555] focus:outline-none focus:border-[#3A86FF] focus:ring-1 focus:ring-[#3A86FF] transition-all resize-none" placeholder="Je souhaite remplacer ma chaudière fioul..." rows="3"></textarea>
</div>
<button className="w-full bg-[#E63946] hover:bg-[#ff4d5a] text-white font-bold py-3.5 rounded-lg shadow-[0_4px_14px_0_rgba(230,57,70,0.39)] hover:shadow-[0_6px_20px_rgba(230,57,70,0.23)] hover:-translate-y-0.5 transition-all duration-200" type="submit">
                    Envoyer ma demande
                </button>
<p className="text-center text-[11px] text-[#555] leading-tight">
                    En cliquant sur envoyer, vous acceptez notre politique de confidentialité. Vos données ne sont jamais revendues.
                </p>
</form>
</div>
</section>


    </>
  );
}
