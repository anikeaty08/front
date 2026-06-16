import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                        document.addEventListener("DOMContentLoaded", function () {
                            const chat  = document.getElementById("phone-chat");
                            const input = document.getElementById("phone-demo-input");
                            const send  = document.getElementById("phone-send");
                    
                            if (!chat || !input || !send) return;
                    
                            function scrollDown() {
                              chat.scrollTop = chat.scrollHeight;
                            }
                    
                            function addUserMessage(text) {
                              const bubble = document.createElement("div");
                              bubble.className =
                                "self-end overflow-hidden bg-white max-w-[85%] border-slate-100 border rounded-2xl pt-2 pr-3 pb-3 pl-3 shadow-sm text-slate-700 text-[11px]";
                              bubble.innerHTML = `
                                <p class="text-[10px] italic text-slate-500 mb-1">Message transféré</p>
                                <p>${text}</p>
                              `;
                              chat.appendChild(bubble);
                              scrollDown();
                            }
                    
                            function addAllieMessage(text) {
                              const bubble = document.createElement("div");
                              bubble.className =
                                "self-start bg-[#afc6e2]/20 p-3 rounded-2xl rounded-tl-sm border border-[#afc6e2]/30 max-w-[90%]";
                    
                              bubble.innerHTML = `
                                <div class="flex gap-2 font-semibold text-[#6a8bb5] mb-1 text-[11px] items-center">
                                  <span>🔎 Analyse d’Allie</span>
                                </div>
                                <div class="text-slate-700 text-[11px] leading-snug">
                                  ${text}
                                </div>
                                <p class="text-[10px] mt-2 text-slate-500">
                                  En cas de doute, contactez directement l’organisme officiel via son vrai site.
                                </p>
                              `;
                    
                              chat.appendChild(bubble);
                              scrollDown();
                            }
                    
                            function analyse(text) {
                              const t = text.toLowerCase();
                    
                              let risk = 0;
                              const reasons = [];
                    
                              const patterns = {
                                phishing: ["sécuriser votre compte","connectez-vous","vérifier votre identité","mettre à jour"],
                                urgence: ["urgent","immédiat","dans les 24h","dans les 48h","suspendu","bloqué","dernière tentative"],
                                argent: ["payer","paiement","facture","remboursement","trop-perçu","frais"],
                                autorités: ["amende","procédure","justice","carte vitale","impots","impôts","caf","banque","edf"],
                                liens: /(https?:\/\/[^\s]+|www\.[^\s]+)/g
                              };
                    
                              const hasLink = patterns.liens.test(t);
                              if (hasLink) {
                                risk += 2;
                                reasons.push("Le message contient un lien. Les fraudeurs les utilisent souvent pour voler vos données.");
                              }
                    
                              if (patterns.argent.some(w => t.includes(w))) {
                                risk += 2;
                                reasons.push("La demande concerne un paiement ou un remboursement imprévu.");
                              }
                    
                              if (patterns.urgence.some(w => t.includes(w))) {
                                risk += 1;
                                reasons.push("Le ton est pressant ou alarmant, typique d’une tentative d’arnaque.");
                              }
                    
                              if (patterns.autorités.some(w => t.includes(w))) {
                                risk += 1;
                                reasons.push("Le message prétend venir d’un service officiel — un schéma fréquent d’usurpation.");
                              }
                    
                              if (patterns.phishing.some(w => t.includes(w))) {
                                risk += 1.5;
                                reasons.push("Formulations typiques de phishing détectées.");
                              }
                    
                              if (reasons.length === 0) {
                                reasons.push("Je ne vois pas de signaux évidents, mais restez prudent : les fraudeurs innovent constamment.");
                              }
                    
                              let summary = "";
                              if (risk >= 4) {
                                summary = "⚠️ <strong>Risque élevé</strong> : ce message ressemble clairement à une tentative d’arnaque. Ne cliquez sur rien et ne répondez pas.";
                              } else if (risk >= 2) {
                                summary = "⚠️ <strong>Risque modéré</strong> : quelques signaux suspects. Soyez prudent et vérifiez directement via le site officiel.";
                              } else {
                                summary = "✅ <strong>Risque faible</strong> : aucun signal majeur détecté, mais gardez vos réflexes de vigilance.";
                              }
                    
                              return summary + "<br><br>" + reasons.map(r => "• " + r).join("<br>");
                            }
                    
                            function sendMessage() {
                              const text = input.value.trim();
                              if (!text) return;
                              addUserMessage(text);
                              input.value = "";
                    
                              setTimeout(() => {
                                const result = analyse(text);
                                addAllieMessage(result);
                              }, 700);
                            }
                    
                            send.addEventListener("click", sendMessage);
                            input.addEventListener("keydown", function (e) {
                              if (e.key === "Enter") {
                                e.preventDefault();
                                sendMessage();
                              }
                            });
                    
                            // Carousel boutons (avis)
                            const avisCarousel = document.getElementById("avis-carousel");
                            const prevBtn = document.getElementById("avis-prev");
                            const nextBtn = document.getElementById("avis-next");
                    
                            if (avisCarousel && prevBtn && nextBtn) {
                              const scrollAmount = 320;
                    
                              prevBtn.addEventListener("click", () => {
                                avisCarousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
                              });
                    
                              nextBtn.addEventListener("click", () => {
                                avisCarousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
                              });
                            }
                          });
                    


                        lucide.createIcons();
                    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 pointer-events-none z-0 opacity-40 bg-dots"></div>

<nav className="fixed z-50 glass-nav transition-all duration-300 w-full top-0">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex items-center gap-3">
<span className="text-2xl font-semibold tracking-tight text-slate-900">Allie</span>
<span className="px-3 py-1 rounded-full bg-white border border-allie-blue/30 text-xs font-medium text-slate-500">
                        by DigiProtect
                    </span>
</div>

<div className="hidden lg:flex items-center gap-8">
<a className="hover:text-slate-900 transition-colors text-sm font-medium text-slate-600" href="#pourquoi">Pourquoi Allie
      ?</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#comment">Comment ça
      marche
      ?</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#avis">Avis</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#apropos">À
      propos</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="hover:text-allie-blue transition-colors text-sm font-medium text-slate-600" href="https://drive.google.com/file/d/1iqlmJbf6Y9-bimiWy1YRd3SsVxU6XZBg/view?pli=1">Voir une démo</a>
<a className="btn-primary shadow-[#afc6e2]/20 text-sm font-medium text-slate-900 bg-[#afc6e2] border-white/50 border rounded-full pt-2.5 pr-6 pb-2.5 pl-6 shadow-lg" href="/#comment">
      Tester Allie gratuitement
    </a>
</div>

<div className="lg:hidden">
<button className="p-2 text-slate-600">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-40 pb-26 relative">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="max-w-xl z-10 relative -translate-x-1">
<div className="inline-flex gap-2 text-xs font-medium text-slate-600 bg-white border-[#afc6e2]/30 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 shadow-sm items-center">
<span className="bg-[#afc6e2] w-2 h-2 rounded-full"></span>
          Assistant anti-arnaque IA
        </div>
<h1 className="lg:text-6xl leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tight mb-6">
          Allie, votre alliée numérique contre les <span className="relative inline-block">
                            arnaques
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#afc6e2] opacity-60" preserveaspectratio="none" viewbox="0 0 100 10">
<path className="" d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"></path>
</svg>
</span> en ligne
        </h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-md">
          L’assistante numérique qui vous aide à reconnaître les messages suspects et à protéger vos proches,
          simplement par e-mail, SMS ou WhatsApp.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mb-6">

<a className="btn-primary shadow-[#afc6e2]/30 font-medium text-slate-900 text-center bg-[#afc6e2] border-white/50 border rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" href="/#comment">Faire
            vérifier ses messages par Allie </a>
</div>
<p className="text-xs text-slate-500 pl-4 border-l-2 border-[#afc6e2]">
          Service en phase pilote, 100 % gratuit pour le moment.
        </p>
</div>

<div className="lg:h-[600px] flex lg:justify-end -translate-x-16 text-sm w-full h-[500px] relative items-center justify-center">

<div className="filter bg-white opacity-60 mix-blend-multiply w-72 h-72 rounded-full absolute right-1/3 bottom-1/4 blur-3xl">
</div>

<div className="border-[6px] overflow-hidden transform hover:rotate-0 transition-transform duration-700 -translate-x-16 -translate-y-2 z-20 bg-white w-72 border-white rounded-[2.5rem] absolute shadow-2xl -rotate-2 scale-125 flex flex-col" id="phone-demo">

<div className="flex bg-slate-50 border-slate-100 border-b pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#afc6e2] rounded-full flex items-center justify-center text-slate-900">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="">
<p className="text-xs font-semibold text-slate-900">Allie</p>
<p className="text-[10px] text-slate-500">En ligne</p>
</div>
</div>
<svg className="w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="12" cy="5" r="1"></circle>
<circle cx="12" cy="19" r="1"></circle>
</svg>
</div>

<div className="flex flex-col gap-3 text-xs bg-slate-50/50 h-[320px] pt-4 pr-6 pb-4 pl-2 overflow-y-auto" id="phone-chat">
<div className="p-2 text-[10px] text-center text-slate-400 mb-2">Aujourd'hui</div>

<div className="self-end overflow-hidden bg-white max-w-[85%] border-slate-100 border rounded-2xl pt-2 pr-3 pb-3 pl-3 shadow-sm">
<p className="text-[10px] italic text-slate-500 mb-1">Message transféré</p>
<p className="text-slate-700 text-[11px]">
                EDF : Vous avez un trop-perçu de 219,90 €. Cliquez ici : http://edf-remboursement-secure.com
              </p>
</div>
<div className="self-start bg-[#afc6e2]/20 p-3 rounded-2xl rounded-tl-sm border border-[#afc6e2]/30 max-w-[90%]">
<div className="flex gap-2 font-semibold text-[#6a8bb5] mb-1 text-[11px] items-center">
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
<path d="M12 9v4"></path>
<path d="M12 17h.01"></path>
</svg>
                Analyse terminée
              </div>
<p className="text-slate-600 mt-1 text-[11px]">
                Le lien ne correspond pas au site officiel d’EDF (edf.fr). Ne cliquez pas.
              </p>
</div>
</div>

<div className="flex gap-2 bg-white border-slate-100 border-t pt-3 pr-4 pb-3 pl-4 items-center">
<input className="flex-1 text-[11px] outline-none text-slate-700 bg-slate-100 rounded-full pt-1.5 pr-3 pb-1.5 pl-3" id="phone-demo-input" placeholder="Testez Allie ici …" type="text"/>
<button className="text-[11px] font-semibold text-[#6a8bb5] disabled:opacity-40" id="phone-send">
        Envoyer
      </button>
</div>
</div>
<div className="filter animate-pulse bg-[#afc6e2] opacity-30 mix-blend-multiply w-72 h-72 rounded-full absolute top-1/4 right-10 blur-3xl">
</div>
</div>



</div>
</div>
</section>

<div className="border-y bg-white/40 border-[#afc6e2]/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-slate-500 font-medium">Déjà testé par des familles et associations.</p>
<div className="flex gap-8 hover:grayscale-0 transition-all opacity-70 grayscale gap-x-8 gap-y-8 items-center">

<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<span className="text-lg font-bold text-slate-800 tracking-tight cursor-pointer" onclick="window.location.href='https://essec-ventures.essec.edu/home'" role="button">ESSEC</span>
<span className="uppercase cursor-pointer text-xs text-slate-600 tracking-wider bg-slate-200 rounded pr-1 pl-1 translate-x-1 scale-110" onclick="window.location.href='https://essec-ventures.essec.edu/home'" role="button">Ventures</span>
</div>
<div className="h-4 w-px bg-slate-300"></div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-users w-5 h-5 text-slate-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm font-semibold text-slate-600">35+ Bêta-testeurs</span>
</div>
</div>
</div>
</div>

<section className="overflow-hidden [#fdf7f0] pt-24 pb-24 relative" id="comment">

<div className="opacity-30 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#afc6e2 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div><div className="lg:px-8 z-10 -translate-y-3 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="lg:px-8 max-w-7xl mr-auto mb-16 ml-auto pr-6 pl-6">
<h2 className="lg:text-4xl text-3xl font-semibold text-slate-900 tracking-tight text-left mb-4">
    Comment utiliser Allie ?
  </h2>
<p className="text-lg text-slate-600 text-left">
    Allie fonctionne par simple transfert de message. Et c'est gratuit ;)
  </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 -translate-y-3 -translate-y-4 w-fit mr-auto ml-auto -translate-y-6 gap-x-2 gap-y-2 justify-items-center">

<article className="group overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#afc6e2]/40 bg-white/40 w-[280px] h-[420px] border-slate-100 border rounded-3xl relative shadow-soft">

<div className="bg-center w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3de76da-d87d-46b2-a7ab-c5ea9b8dc71c_800w.jpg)] bg-cover">
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 px-4 pb-3 pt-20 bg-gradient-to-t from-[#f9f0e4]/90 via-[#f3e7d7]/70 to-transparent">
<div className="pointer-events-auto">
<p className="text-[10px] uppercase font-bold text-neutral-400 tracking-[0.2em] mb-1">
        Étape 1
      </p>
<h3 className="text-base font-semibold text-slate-900">
        Réception
      </h3>

<p className="mt-1.5 text-xs leading-snug text-slate-600 overflow-hidden max-h-0 opacity-0 translate-y-1 group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
        Vous recevez un message suspect (e-mail, SMS ou WhatsApp) et vous hésitez à cliquer ou répondre.
      </p>
</div>
</div>
</article>

<article className="group overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#afc6e2]/40 bg-white/40 w-[280px] h-[420px] border-slate-200 border rounded-3xl relative shadow-soft">
<div className="bg-center w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70501b8a-4fc1-4c01-9702-28123c3d9df0_800w.jpg?w=800&amp;q=80)] bg-cover">
</div>
<div className="pointer-events-none backdrop-blur-[1px] bg-gradient-to-t from-[#f9f0e4]/80 via-[#f3e7d7]/60 to-transparent pt-20 pr-4 pb-3 pl-4 absolute right-0 bottom-0 left-0 translate-y-1">
<p className="text-[10px] uppercase font-bold text-neutral-400 tracking-[0.2em] mb-1 -translate-y-1">Étape 2</p>
<h3 className="text-base font-semibold text-slate-900 -translate-y-1">
      Transfert à <span className="italic">Allie</span>
</h3>
<div className="leading-snug overflow-hidden group-hover:max-h-40 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out -translate-y-1 text-xs text-slate-600 opacity-0 max-h-0 mt-1.5">
<p className="mb-1">Vous transférez le message à <span className="italic">Allie</span> :</p>
<div className="flex gap-1 items-center mb-1">
<span className="text-[10px] uppercase text-slate-400">SMS :</span>
<a className="font-mono text-[11px] bg-slate-100 px-1 rounded text-slate-700 hover:text-[#6a8bb5]" href="tel:+33770054187">
          +33 7 70 05 41 87
        </a>
</div>
<div className="flex -translate-y-1 items-center">
<span className="text-[10px] uppercase text-slate-400">E-mail :</span>
<a className="font-mono text-[11px] bg-slate-100 px-1 rounded underline text-slate-700 hover:text-[#6a8bb5]" href="mailto:allie@digiprotect.fr">
          allie@digiprotect.fr
        </a>
</div>
</div>
</div>
</article>

<article className="group overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#afc6e2]/40 bg-white/40 w-[280px] h-[420px] border-slate-200 border rounded-3xl relative shadow-soft">
<div className="bg-center w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d105c28-a5e8-4a0f-ad8f-f043dc9211d0_800w.jpg)] bg-contain">
</div>
<div className="pointer-events-none backdrop-blur-[1px] bg-gradient-to-t from-[#f9f0e4]/80 via-[#f3e7d7]/60 to-transparent pt-20 pr-4 pb-3 pl-4 absolute right-0 bottom-0 left-0">
<p className="text-[10px] uppercase font-bold text-neutral-400 tracking-[0.2em] mb-1">Étape 3</p>
<h3 className="text-base font-semibold text-slate-900">Analyse</h3>
<p className="mt-1.5 text-xs leading-snug text-slate-600 overflow-hidden max-h-0 opacity-0 translate-y-1 group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
<span className="italic">Allie</span> analyse le contenu (ton, liens, expéditeur) grâce à l’IA et à des règles
      anti-arnaques.
    </p>
</div>
</article>

<article className="group overflow-hidden transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#afc6e2]/40 bg-white/40 w-[280px] h-[420px] border-slate-200 border rounded-3xl relative shadow-soft">
<div className="bg-center w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df7f991a-d88b-472a-972f-bc6f15b65956_800w.jpg)] bg-cover" style={{}}>
</div>
<div className="bg-[#f9f0e4]/70 h-20 absolute right-0 bottom-0 left-0 backdrop-blur-sm">
</div>
<div className="pointer-events-none backdrop-blur-[1px] bg-gradient-to-t from-[#f9f0e4]/80 via-[#f3e7d7]/60 to-transparent pt-20 pr-4 pb-3 pl-4 absolute right-0 bottom-0 left-0">
<p className="text-[10px] uppercase font-bold text-neutral-400 tracking-[0.2em] mb-1">Étape 4</p>
<h3 className="text-base font-semibold text-slate-900">Réponse</h3>
<p className="mt-1.5 text-xs leading-snug text-slate-600 overflow-hidden max-h-0 opacity-0 translate-y-1 group-hover:max-h-24 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
      Verdict immédiat : « ⚠️ Risque détecté » ou « ✅ Aucun risque apparent », avec recommandations adaptées.
    </p>
</div>
</article>
</div>

<div className="mt-4 mb-10 translate-y-6">
<p className="uppercase text-xs font-semibold text-slate-400 tracking-[0.25em] text-center mb-4">Quels types d’arnaques Allie détecte-t-elle ?</p>
<div className="relative overflow-hidden">
<div className="allie-carousel-track flex gap-4 whitespace-nowrap gap-x-4 gap-y-4">


<div className="flex gap-2 text-sm text-slate-700 bg-white/80 border-slate-200 border rounded-full pt-2 pr-4 pb-2 pl-4 shadow-soft gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="lucide lucide-landmark w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
<span className="">Phishing bancaire et impôts</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 shadow-soft text-sm text-slate-700">
<svg aria-hidden="true" className="lucide lucide-package-x w-[14px] h-[14px] text-slate-400" data-icon-replaced="true" data-lucide="package-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line><path d="m17 13 5 5m-5 0 5-5"></path></svg>
<span className="">Faux colis et fausses factures</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 shadow-soft text-sm text-slate-700">
<svg aria-hidden="true" className="lucide lucide-user-x text-slate-400 w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="user-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><line x1="17" x2="22" y1="8" y2="13"></line><line x1="22" x2="17" y1="8" y2="13"></line></svg>
<span className="">Usurpation de services publics et d’identité</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 shadow-soft text-sm text-slate-700">
<svg aria-hidden="true" className="lucide lucide-link text-slate-400 w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<span className="">Liens malveillants et pièces jointes</span>
</div>

<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 shadow-soft text-sm text-slate-700">
<svg aria-hidden="true" className="lucide lucide-landmark w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '14px', height: '14px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7"></path><path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path><path d="M14 18v-7"></path><path d="M18 18v-7"></path><path d="M3 22h18"></path><path d="M6 18v-7"></path></svg>
<span className="">Phishing bancaire et impôts</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 shadow-soft text-sm text-slate-700">
<span className="w-2 h-2 rounded-full bg-[#afc6e2]"></span>
<span>Faux colis et fausses factures</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 shadow-soft text-sm text-slate-700">
<span className="w-2 h-2 rounded-full bg-[#afc6e2]"></span>
<span>Usurpation de services publics et d’identité</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 shadow-soft text-sm text-slate-700">
<span className="w-2 h-2 rounded-full bg-[#afc6e2]"></span>
<span>Liens malveillants et pièces jointes</span>
</div>
</div>
</div>
</div>

</div>
</section><section className="bg-white pt-24 pb-24" id="avis">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-10 text-center">
      Ils utilisent déjà Allie
    </h2>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scroll-smooth" id="avis-carousel">

<div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 snap-center min-w-[280px] sm:min-w-[320px] md:min-w-[360px]">
<div className="flex items-center gap-4 mb-4">
<div className="flex font-bold text-slate-500 bg-slate-200 w-10 h-10 rounded-full items-center justify-center">I
          </div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Iris</p>
<p className="text-xs text-slate-500">Aidante familiale, 26 ans</p>
</div>
</div>
<p className="text-slate-600 text-sm italic">
          "Maintenant ma grand-mère transfère tout à Allie et est beaucoup plus indépendante. C'est beaucoup plus
          rassurant pour nous deux."
        </p>
</div>

<div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 snap-center min-w-[280px] sm:min-w-[320px] md:min-w-[360px]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
            M
          </div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Michel</p>
<p className="text-xs text-slate-500">Retraité, 74 ans</p>
</div>
</div>
<p className="text-slate-600 text-sm italic">
          "Je n'ai rien eu à installer. J'envoie juste le SMS et j'ai la réponse. C'est pratique et très rassurant."
        </p>
</div>

<div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 snap-center min-w-[280px] sm:min-w-[320px] md:min-w-[360px]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
            S
          </div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Sarah</p>
<p className="text-xs text-slate-500">Médiatrice numérique, 47 ans</p>
</div>
</div>
<p className="text-slate-600 text-sm italic">
          "Un outil formidable pour nos ateliers. Cela permet d'éduquer sur les signes de fraude en temps réel."
        </p>
</div>

<div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 snap-center min-w-[280px] sm:min-w-[320px] md:min-w-[360px]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
            A
          </div>
<div className="">
<p className="text-sm font-semibold text-slate-900" style={{}}>Ahmed</p>
<p className="text-xs text-slate-500">Aidant, 33 ans</p>
</div>
</div>
<p className="text-slate-600 text-sm italic">
          "Allie m’évite d’appeler mes parents à chaque SMS suspect. Je sais qu’ils ont un réflexe simple."
        </p>
</div>

<div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 snap-center min-w-[280px] sm:min-w-[320px] md:min-w-[360px]">
<div className="flex items-center gap-4 mb-4">
<div className="flex font-bold text-slate-500 bg-slate-200 w-10 h-10 rounded-full items-center justify-center">A
          </div>
<div className="">
<p className="text-sm font-semibold text-slate-900" style={{}}>Auguste</p>
<p className="text-xs text-slate-500">Retraité, 69 ans</p>
</div>
</div>
<p className="text-slate-600 text-sm italic">
          "Je transfère tous les messages bizarres. J’ai déjà évité deux arnaques grâce à Allie."
        </p>
</div>

<div className="glass-card p-8 rounded-3xl hover:shadow-glow transition-all duration-500 snap-center min-w-[280px] sm:min-w-[320px] md:min-w-[360px]">
<div className="flex items-center gap-4 mb-4">
<div className="flex font-bold text-slate-500 bg-slate-200 w-10 h-10 rounded-full items-center justify-center">A
          </div>
<div className="">
<p className="text-sm font-semibold text-slate-900" style={{}}>Anna</p>
<p className="text-xs text-slate-500">Fille d’utilisatrice, 41 ans</p>
</div>
</div>
<p className="text-slate-600 text-sm italic">
          "Ma mère se sent moins jugée : elle envoie à Allie, puis on en parle après si besoin."
        </p>
</div>
</div>

<div className="flex flex-col sm:flex-row mt-10 gap-x-3 gap-y-3 justify-center">
<div className="inline-flex [--fx-filter:blur(9px)_liquid-glass(3.9,10)_saturate(1.2)_noise(0.5,1,0)] bg-white/60 border-slate-200 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-sm backdrop-blur-sm gap-x-3 gap-y-3 items-center">
<span className="font-semibold text-slate-900 text-sm whitespace-nowrap">Particuliers</span>
<span className="text-xs text-slate-500 border-l border-slate-200 pl-3 leading-tight">Pour vérifier sans stress</span>
</div>
<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 border border-slate-200 shadow-sm backdrop-blur-sm">
<span className="font-semibold text-slate-900 text-sm whitespace-nowrap">Aidants</span>
<span className="text-xs text-slate-500 border-l border-slate-200 pl-3 leading-tight">Pour protéger vos proches</span>
</div>
<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 border border-slate-200 shadow-sm backdrop-blur-sm">
<span className="font-semibold text-slate-900 text-sm whitespace-nowrap">Pros</span>
<span className="leading-tight text-xs text-slate-500 border-slate-200 border-l pl-3" style={{}}>Accompagnement utilisateurs</span>
</div>
</div>
</div>
</section>
<section className="pt-24 pb-24 relative" id="pourquoi">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-x-16 gap-y-16">
<div className="">
<span className="uppercase block text-sm font-semibold text-[#6a8bb5] tracking-wide mb-2" style={{}}>L'APPROCHE</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Pourquoi Allie ?</h2>
<p className="leading-relaxed text-lg text-slate-600 mb-8" style={{}}>Les arnaques par SMS, e-mail ou WhatsApp sont de plus en plus difficiles à repérer. Avec Allie, vous adoptez un réflexe clair : dès que vous avez un doute, vous transférez le message. Allie le lit pour vous, analyse la situation et vous explique quoi faire.</p>
<div className="overflow-hidden bg-white border-slate-100 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-soft">
<div className="absolute top-0 left-0 w-1 h-full bg-[#afc6e2]"></div>
<p className="font-medium italic text-slate-700 z-10 relative">
            "J'ai eu un doute avant de cliquer sur un lien pour un colis soi-disant bloqué. Allie a expliqué que ce lien
            était faux et comment le vérifier."
          </p>
</div>
</div>
<div className="translate-x-6 translate-y-6 space-y-6">

<div className="hover-card flex gap-5 bg-white border-slate-100 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm scale-95 items-start">
<div className="flex shrink-0 text-[#5e7dca] bg-[#afc6e2]/20 w-12 h-12 rounded-2xl items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-heart-handshake w-6 h-6" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Pensé pour les seniors</h3>
<p className="leading-relaxed text-sm text-slate-600" style={{}}>Mots simples, phrases courtes, pas de jargon. Allie
        explique avec des exemples concrets et un ton rassurant.</p>
</div>
</div>

<div className="hover-card flex gap-5 bg-white border-slate-100 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm scale-95 items-start">
<div className="w-12 h-12 rounded-2xl bg-[#afc6e2]/20 flex items-center justify-center shrink-0 text-[#5e7dca]">
<svg aria-hidden="true" className="lucide lucide-zap w-6 h-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900 mb-2">Zéro installation complexe</h3>
<p className="leading-relaxed text-sm text-slate-600" style={{}}>Pas d'application à télécharger. Un simple transfert de
        message ou un envoi de photo suffit.</p>
</div>
</div>

<div className="hover-card flex gap-5 bg-white border-slate-100 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm scale-95 items-start">
<div className="w-12 h-12 rounded-2xl bg-[#afc6e2]/20 flex items-center justify-center shrink-0 text-[#5e7dca]">
<svg aria-hidden="true" className="lucide lucide-lock-keyhole" data-icon-replaced="true" data-icon-set="lucide" data-lucide="lock-keyhole" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(94, 125, 202)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="16" r="1"></circle><rect height="12" rx="2" width="18" x="3" y="10"></rect><path d="M7 10V7a5 5 0 0 1 10 0v3"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-semibold text-slate-900 mb-2" style={{}}>Protection des données</h3>
<p className="leading-relaxed text-sm text-slate-600">
  Les échanges sont traités uniquement pour la réponse, sans création de base de données personnelle.
</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="bg-white border-[#afc6e2]/20 border-t pt-24 pb-24" id="apropos">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">À propos de DigiProtect</h2>
<p className="leading-relaxed text-slate-600 mb-6">
                                        Allie est le premier projet de <strong className="">DigiProtect</strong>, une jeune entreprise dédiée à la
                                        protection numérique des citoyens.
                                        Nous construisons des outils simples, éthiques et accessibles, pour restaurer la confiance dans le
                                        numérique.
                                    </p>
<div className="pl-4 border-l-4 border-[#afc6e2] py-2">
<p className="font-medium italic text-slate-800">
                                            "Nous voulons que chacun, quel que soit son âge, puisse naviguer en ligne sans risque."
                                        </p>
</div>
</div>
<div className="relative">
<div className="flex bg-[#fdf7f0] border-slate-100 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 shadow-soft translate-x-3 gap-x-6 gap-y-6 items-center">
<div className="flex-shrink-0 overflow-hidden bg-center bg-slate-300 w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c89a7c34-f45a-4357-9c0a-ccdb8d6de685_320w.jpg?w=800&amp;q=80)] bg-cover rounded-full" style={{}}>
</div>
<div className="">
<p className="hover:text-slate-500 cursor-pointer hover:underline transition-colors text-lg font-bold text-slate-900" onclick="window.location.href='https://www.linkedin.com/in/ana%C3%AFs-leca/'" role="button">
                                                Anaïs Leca
                                            </p>
<p className="text-sm text-[#6a8bb5] font-medium mb-2">Fondatrice</p>
<p className="leading-snug text-xs text-slate-600">
                                                Entrepreneure (ESSEC &amp; CentraleSupélec), passionnée par la confiance numérique. Au
                                                plaisir d’échanger !
                                            </p>
</div>
</div>
</div>
</div>
</div>
</section><section className="bg-[#fdf7f0] pt-24 pb-24" id="faq">
<div className="lg:px-8 max-w-3xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight text-center mb-8">
    Questions Fréquentes
  </h2>
<div className="space-y-4">

<details className="group bg-white rounded-2xl shadow-sm border border-slate-100">
<summary className="flex cursor-pointer marker:content-none font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 gap-x-4 gap-y-4 items-center justify-between">
        Est-ce que le service est payant ?
        <svg aria-hidden="true" className="lucide lucide-chevron-down transition group-open:rotate-180 w-[20px] h-[20px]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(148, 163, 184)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
        Allie est actuellement en phase pilote, donc entièrement gratuit pour tous les utilisateurs.
      </div>
</details>

<details className="group bg-white rounded-2xl shadow-sm border border-slate-100" id="faq-transfert">
<summary className="flex cursor-pointer gap-4 marker:content-none font-medium text-slate-900 pt-6 pr-6 pb-6 pl-6 items-center justify-between">
        Comment transférer mes messages ?
        <svg className="lucide lucide-chevron-down transition group-open:rotate-180 text-slate-400 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="leading-relaxed text-sm text-slate-600 pr-6 pb-6 pl-6 space-y-8">

<div className="space-y-4">
<h4 className="text-sm font-semibold text-slate-900">📱 Par SMS</h4>

<ol className="list-decimal pl-5 space-y-2">
<li>Appuyez longuement sur le message suspect jusqu’à voir apparaître les options.</li>
<li>Dans le menu qui apparaît, sélectionnez “More…” ou “Plus…”.</li>
<li>Une fois le message sélectionné, appuyez sur l’icône de transfert (flèche) en bas à droite.</li>
<li>
              Dans l’écran d’envoi, sélectionnez <span className="italic">Allie</span> dans vos contacts ou entrez le
              numéro :
              <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-xs text-slate-700">+33 7 70 05 41 87</span>.
            </li>
<li>Appuyez sur le bouton d’envoi (flèche bleue).</li>
<li>Retournez dans votre conversation avec <span className="italic">Allie</span>. Votre message est envoyé !
            </li>
</ol>

<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="relative mx-auto w-full max-w-md rounded-2xl border-2 border-dashed border-slate-200 bg-white/60 overflow-hidden group">
<div className="w-full h-full bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0680e664-0766-4734-acb2-f0b3ca47c4a5_800w.png?w=800&amp;q=80')] bg-no-repeat bg-cover bg-top transition-transform duration-300 ease-out group-hover:scale-105" style={{aspectRatio: '16/10'}}></div>
</div>

<div className="relative mx-auto w-full max-w-md rounded-2xl border-2 border-dashed border-slate-200 bg-white/60 overflow-hidden group">
<div className="w-full h-full bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/adf004b8-9a6f-41e3-a71a-77b6cd532c4d_800w.png?w=800&amp;q=80')] bg-no-repeat bg-cover bg-top transition-transform duration-300 ease-out group-hover:scale-105" style={{aspectRatio: '16 / 10'}}></div>
</div>
</div>
</div>

<div className="space-y-4">
<h4 className="text-sm font-semibold text-slate-900">📧 Par e-mail</h4>
<p className="mb-1">
            Depuis votre messagerie, cliquez sur “Transférer” et envoyez le message à
            <span className="font-mono bg-slate-100 px-1 py-0.5 rounded text-xs text-slate-700">allie@digiprotect.fr</span>.
          </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">

<div className="relative mx-auto w-full max-w-xl rounded-2xl border-2 border-dashed border-slate-200 bg-white/60 overflow-hidden group">
<div className="w-full h-full bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/26d7c193-9b96-4ab9-8b3e-dce7a5430d18_800w.png?w=800&amp;q=80')] bg-cover bg-top transition-transform duration-300 ease-out group-hover:scale-105" style={{aspectRatio: '16/10'}}></div>
</div>

<div className="relative mx-auto w-full max-w-xl rounded-2xl border-2 border-dashed border-slate-200 bg-white/60 overflow-hidden group">
<div className="w-full h-full bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9b65f9a-3437-4f75-adf1-e956f4dd4396_800w.png?w=800&amp;q=80')] bg-cover bg-top transition-transform duration-300 ease-out group-hover:scale-105" style={{aspectRatio: '16/10'}}></div>
</div>
</div>
</div>

<div className="space-y-4">
<h4 className="text-sm font-semibold text-slate-900">💬 Via WhatsApp</h4>
<p>
            Faites un appui long sur le message, choisissez “Transférer”, puis sélectionnez le contact
            <span className="italic">Allie</span>. Voici les explications détaillées inspirées des tutoriels officiels :
          </p>

<div className="rounded-xl bg-slate-50/70 border border-slate-100 px-4 py-3">
<p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
              Tutoriel de transfert – iPhone
            </p>
<ol className="list-decimal pl-5 space-y-2">
<li>Dans une discussion individuelle ou de groupe, appuyez longuement sur le message que vous voulez
                transférer, puis appuyez sur <span className="font-semibold">Transférer</span>.</li>
<li className="ml-1 list-none">
                • Pour transférer plusieurs messages, vous pouvez sélectionner d’autres messages après avoir
                sélectionné le premier.
              </li>
<li>Appuyez sur l’icône de transfert dans la barre d’actions.</li>
<li>Recherchez ou sélectionnez les discussions individuelles ou de groupe sur lesquelles vous voulez
                transférer les messages.</li>
<li>Appuyez sur <span className="font-semibold">Transférer</span> pour envoyer.</li>
</ol>
</div>

<div className="rounded-xl bg-slate-50/70 border border-slate-100 px-4 py-3">
<p className="text-xs font-semibold text-slate-500 mb-2 uppercase tracking-wide">
              Tutoriel de transfert – Android
            </p>
<ol className="list-decimal pl-5 space-y-2">
<li>Dans une discussion individuelle ou de groupe, maintenez appuyé sur le message que vous voulez
                transférer.</li>
<li className="ml-1 list-none">
                • Pour transférer plusieurs messages, sélectionnez d’autres messages après avoir choisi le premier.
              </li>
<li>Appuyez sur l’icône de flèche de transfert en bas à droite de l’écran.</li>
<li>Choisissez la conversation de <span className="italic">Allie</span> ou un autre contact à qui vous
                voulez envoyer le message.</li>
<li>Appuyez sur le bouton d’envoi (flèche bleue) pour finaliser le transfert.</li>
</ol>
</div>
</div>

<div className="pt-4 border-t border-slate-100 space-y-2">
<p className="text-xs font-medium text-slate-500 uppercase tracking-wide">
            Voir la démonstration en vidéo
          </p>
<div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-md bg-black/80">
<div style={{position: 'relative', width: '100%', paddingTop: '56.25%'}}>
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" src="https://www.youtube.com/embed/tRZaatckjKY?rel=0" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', border: 'none'}} title="Tutoriel transfert SMS vers Allie"></iframe>
</div>
</div>
</div>
</div>
</details>

<details className="group bg-white rounded-2xl shadow-sm border border-slate-100">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-slate-900 marker:content-none">
        Quels canaux sont supportés ?
        <svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
        Vous pouvez interagir avec Allie par e-mail, par SMS et via WhatsApp.
      </div>
</details>

<details className="group bg-white rounded-2xl shadow-sm border border-slate-100">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-slate-900 marker:content-none">
        Combien de temps prend la réponse ?
        <svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition group-open:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
        Dans la majorité des cas, l'analyse prend quelques secondes (5 à 30 secondes selon le canal).
        Il arrive cependant que le service soit en maintenance durant la nuit.
      </div>
</details>

<details className="group bg-white rounded-2xl shadow-sm border border-slate-100">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-slate-900 marker:content-none">
        Allie remplace-t-elle mon antivirus ?
        <svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition group-open:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
        Allie est une assistante pédagogique qui vous aide à décrypter les messages que vous trouvez suspects.
        Elle ne bloque pas automatiquement les virus sur votre ordinateur comme un antivirus le ferait.
      </div>
</details>
<details className="group bg-white rounded-2xl shadow-sm border border-slate-100">
<summary className="flex cursor-pointer items-center justify-between gap-4 p-6 font-medium text-slate-900 marker:content-none hover:bg-slate-50 transition-colors">
    Mes données sont-elles en sécurité avec Allie ?
    <svg className="lucide lucide-chevron-down w-5 h-5 text-slate-400 transition group-open:rotate-180" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
    Oui. Vos messages ne servent qu’à analyser l’arnaque potentielle et à vous répondre : aucune base d’utilisateurs
    n’est créée et rien n’est revendu. Durant la phase pilote, nous pouvons occasionnellement consulter certains
    messages envoyés à Allie et il est donc conseillé d’éviter d’envoyer des données très sensibles (CB, mots de passe).
  </div>
</details>
</div>
</div>
</section>

<section className="py-20 px-6" id="test">
<div className="max-w-5xl mx-auto bg-gradient-to-br from-[#afc6e2] to-[#cfdcef] rounded-[2.5rem] p-12 lg:p-20 text-center shadow-2xl shadow-[#afc6e2]/20 relative overflow-hidden">

<div className="opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC40KSIvPjwvc3ZnPg==')] absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="relative z-10">
<h2 className="text-3xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-6">Envie de tester Allie ?</h2>
<p className="text-lg text-slate-800 mb-10 max-w-2xl mx-auto font-medium opacity-90">
                    Rejoignez la phase pilote et aidez-nous à construire un internet plus sûr pour tous.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
<a className="hover:bg-slate-800 transition-colors hover:shadow-2xl hover:-translate-y-1 transform duration-300 font-semibold text-white bg-slate-900 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl" download="allie.vcf" href="/data:text/vcard;charset=utf-8,BEGIN%3AVCARD%0AVERSION%3A3.0%0AN%3AAllie%3BAssistante%0AFN%3AAllie%20(D%C3%A9tection%20d'arnaques)%0AORG%3ADigiProtect%0ATEL%3BTYPE%3DCELL%3A%2B33770054187%0AEMAIL%3Aallie%40digiprotect.fr%0ANOTE%3AEnvoyez-moi%20vos%20SMS%2C%20e-mails%20et%20messages%20suspects%20pour%20analyse.%0AEND%3AVCARD">
  Tester Allie gratuitement
</a>
<a className="hover:bg-white transition-colors font-semibold text-slate-900 bg-white/60 border-white border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-md" href="https://tally.so/r/nG2Nkk">
                        Recevoir plus d'informations
                    </a>
</div>
<div className="inline-flex [--fx-filter:blur(10px)_liquid-glass(3.7,10)_saturate(1.25)_noise(0.5,1,0)] text-sm font-medium text-slate-800 bg-white/30 border-white/20 border rounded-full px-6 py-2 backdrop-blur-sm gap-x-6 gap-y-6 items-center">
<span className="cursor-pointer" onclick="window.location.href='/mailto:allie@digiprotect.fr'" role="button">📧 allie@digiprotect.fr</span>
<span className="w-px h-3 bg-slate-800/20"></span>
<span className="">💬 +33 7 70 05 41 87</span>
</div>
</div>
</div>
</section>









<footer className="bg-[#fdfdfc] border-slate-100 border-t pt-12 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<span className="text-xl font-bold text-slate-900">Allie</span>
<span className="text-xs text-slate-500">by DigiProtect</span>
</div>
<p className="text-sm text-slate-500 max-w-xs leading-relaxed">
                                        Construire la confiance numérique par l'accompagnement et l'innovation technologique éthique.
                                    </p>
</div>
<div className="">
<h4 className="font-semibold text-slate-900 mb-4">Liens</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li><a className="hover:text-[#afc6e2] transition-colors" href="#faq">FAQ</a></li>
<li><a className="hover:text-[#afc6e2] transition-colors" href="#">Mentions légales</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-600">
<li className="cursor-pointer hover:text-slate-500 hover:underline transition-colors text-slate-700" onclick="window.location.href='mailto:allie@digiprotect.fr'" role="button">
                                            allie@digiprotect.fr
                                        </li>
<li className="cursor-pointer text-slate-700 hover:text-slate-500 hover:underline transition-colors" onclick="window.location.href='tel:+33770054187'" role="button">
                                            +33 7 70 05 41 87
                                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 text-center md:text-left">
<p className="text-xs text-slate-400">© DigiProtect 2025 – Tous droits réservés.</p>
</div>
</div>
</footer>



<style>
@keyframes allie-carousel-scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.allie-carousel-track {
  animation: allie-carousel-scroll 28s linear infinite;
  display: inline-flex;
}

.allie-carousel-track:hover {
  animation-play-state: paused;
}
</style>

    </>
  );
}
