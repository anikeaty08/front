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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.getElementById('next-testimonial');
    const prevBtn = document.getElementById('prev-testimonial');
    const indicator = document.getElementById('testimonial-indicator');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove('hidden');
                slide.classList.add('testimonial-fade-in');
            } else {
                slide.classList.add('hidden');
                slide.classList.remove('testimonial-fade-in');
            }
        });
        if (indicator) {
            indicator.textContent = index + 1;
        }
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            showSlide(currentIndex);
        });
    }
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
      

<div className="border-white/[0.05] sm:px-6 flex flex-col bg-[#03050a] w-full z-50 border-b pt-5 pr-4 pb-5 pl-4 relative shadow-[0_0_30px_rgba(0,0,0,0.5)] items-center">
<div className="w-full max-w-2xl flex flex-col items-center gap-3">
<div className="flex flex-col items-center justify-center text-center">
<span className="md:text-lg text-base font-semibold text-red-500 tracking-tight drop-shadow-md">
                ⛔ ACHTUNG: Seite nicht schließen! (Deine Bestellung ist noch nicht abgeschlossen)
            </span>
</div>
<div className="w-full bg-[#050a15] rounded-full h-10 relative overflow-hidden border border-white/10 shadow-inner flex items-center justify-center">
<div className="absolute left-0 top-0 h-full w-[85%] bg-[linear-gradient(90deg,#967534_0%,#C5A059_100%)] overflow-hidden transition-all duration-1000">
<div className="absolute inset-0 w-full h-full" style={{animation: 'shimmer 2.5s infinite', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)', transform: 'skewX(-20deg)'}}></div>
</div>
<div className="absolute inset-0 flex items-center justify-center w-full h-full z-10 pointer-events-none px-2 text-center">
<span className="text-[10px] sm:text-xs uppercase tracking-widest font-medium text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                    Schritt 1 von 2: Bitte warte kurz, dein Zugang wird vorbereitet...
                </span>
</div>
</div>
</div>
</div>
<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0 bg-[#050a15]/60"></div>
<div className="absolute top-[-10%] left-[-10%] w-[120vw] md:w-[60vw] aspect-square bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#283656]/20 via-[#283656]/5 to-transparent rounded-full blur-3xl" style={{animation: 'pulse-glow 8s infinite alternate'}}></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[150vw] md:w-[70vw] aspect-square bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#C5A059]/10 via-[#050a15] to-transparent rounded-full blur-3xl" style={{animation: 'float-slow 12s ease-in-out infinite'}}></div>
</div>

<main className="flex-grow flex flex-col sm:px-6 sm:pt-6 z-10 text-center w-full max-w-[900px] mr-auto ml-auto pt-1 pr-4 pb-20 pl-4 relative items-center">
<h1 className="leading-[1.2] sm:text-4xl md:text-5xl text-3xl font-medium text-white tracking-tight pb-5" style={{fontFamily: '\'Playfair Display\', serif'}}>Bist du bereit All In zu gehen? Dann schau dir dieses kurze Video an — so beschleunigst du deinen Prozess massiv.</h1>
<p className="sm:text-lg leading-relaxed text-base font-light text-slate-300 max-w-2xl mr-auto mb-8 ml-auto">
        Das Video erklärt warum die meisten nur halb so schnell vorankommen — und wie du das änderst.
    </p>

<div className="aspect-video border-white/[0.08] overflow-hidden flex bg-[#03050a]/60 w-full border rounded-3xl mb-8 relative shadow-2xl backdrop-blur-sm items-center justify-center group">
<video className="w-full h-full object-cover" id="promoVideo" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/687d3a41-e87d-426d-a138-f24a8d1a38a0_1600w.png" preload="metadata">
<source src="https://assets.cdn.filesafe.space/vQN5GIVbvhCxn3wdbN0Q/media/69e232aa1c1a09bb01792775.mp4" type="video/mp4"/>
            Dein Browser unterstützt das Video-Tag nicht.
        </video>
<div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#050a15]/20 cursor-pointer z-10 transition-opacity duration-300" onclick="const v = document.getElementById('promoVideo'); v.setAttribute('controls', 'controls'); v.play(); this.style.opacity = '0'; setTimeout(() =&gt; this.style.display = 'none', 300);">
<div className="relative flex items-center justify-center">
<div className="absolute w-16 h-16 sm:w-20 sm:h-20 bg-[#C5A059] rounded-full animate-ping opacity-60"></div>
<div className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 bg-[linear-gradient(135deg,#C5A059_0%,#967534_100%)] border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.5)] transition-transform duration-300 group-hover:scale-105">
<iconify-icon className="text-white text-3xl sm:text-4xl ml-1.5" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center w-full max-w-xl mb-10">
<a className="w-full inline-flex items-center justify-center px-8 py-5 sm:px-10 sm:py-5 bg-[linear-gradient(90deg,#C5A059_0%,#DFB76C_50%,#C5A059_100%)] text-[#050a15] rounded-full text-sm sm:text-base uppercase tracking-widest font-semibold hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_40px_rgba(197,160,89,0.3)] group relative overflow-hidden" href="https://go.realityaccelerator.de/upsell-accept">
<span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
            Ja, ich starte meinen Subconscious Recode jetzt
            <iconify-icon className="ml-3 text-xl group-hover:scale-110 transition-transform" icon="solar:unlock-linear"></iconify-icon>
</a>
<a className="mt-6 text-xs sm:text-sm text-slate-500 underline decoration-slate-700 underline-offset-4 hover:text-slate-300 transition-colors duration-300" href="https://go.realityaccelerator.de/downsell">
            Nein danke, ich arbeite vorerst ohne das System weiter.
        </a>
</div>

<div className="flex flex-col items-center justify-center gap-2.5 w-full mt-2">
<div className="flex items-center gap-2 text-slate-400 text-xs font-medium tracking-widest uppercase">
<iconify-icon className="text-[#C5A059] text-base" icon="solar:lock-keyhole-linear"></iconify-icon>
            Sicherer &amp; Verschlüsselter Checkout
        </div>
<div className="flex items-center gap-3 sm:gap-4 opacity-80 mt-1">
<iconify-icon className="text-2xl sm:text-3xl" icon="logos:visa"></iconify-icon>
<iconify-icon className="text-2xl sm:text-3xl" icon="logos:mastercard"></iconify-icon>
<iconify-icon className="text-2xl sm:text-3xl" icon="logos:amex"></iconify-icon>
<iconify-icon className="text-2xl sm:text-3xl" icon="logos:paypal"></iconify-icon>
</div>
</div>

<div className="w-full mt-24">
<h2 className="text-3xl sm:text-4xl text-white font-medium tracking-tight mb-14" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Dein 4-Stufen Transformations-System im Detail
        </h2>
<div className="flex flex-col gap-10 text-left max-w-4xl mx-auto">
<div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="md:w-1/2 relative shrink-0 flex items-center justify-center p-4 sm:p-5 overflow-visible">
<img alt="Hypnose 1" className="w-[95%] sm:w-full h-auto object-contain rounded-2xl shadow-2xl opacity-90 group-hover:opacity-100 scale-[1.03] group-hover:scale-[1.06] transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/244506da-65cc-4492-9fc3-19d8ef51b94a_800w.jpg"/>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow justify-center relative z-10">
<div className="mb-4">
<h3 className="text-xl md:text-2xl text-white font-medium tracking-tight">Hypnose 1: Nervous System Reset</h3>
</div>
<p className="text-base text-slate-300 leading-relaxed mb-8 flex-grow font-light">
                        Bevor echte Transformation möglich wird, braucht dein Nervensystem Sicherheit. Diese Hypnose führt dich tief in einen Zustand innerer Ruhe — weg vom Kampf-oder-Flucht-Modus, hin zu echten Empfangsbereitschaft. Erst wenn dein System zur Ruhe kommt, kann das Unterbewusstsein wirklich loslassen und sich neu ausrichten.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-white/[0.05] mt-auto">
<span className="text-sm text-slate-500 uppercase tracking-wider">Regulärer Einzelwert</span>
<span className="text-lg text-[#C5A059] font-medium">99,00 €</span>
</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="md:w-1/2 relative shrink-0 flex items-center justify-center p-4 sm:p-5 overflow-visible">
<img alt="Hypnose 2" className="sm:w-full group-hover:opacity-100 group-hover:scale-[1.06] transition-all duration-700 opacity-90 w-[95%] h-auto object-contain rounded-2xl shadow-2xl scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/665cad23-630f-4d99-b80b-d23c99cedb0b_800w.jpg"/>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow justify-center relative z-10">
<div className="mb-4">
<h3 className="text-xl md:text-2xl text-white font-medium tracking-tight">Hypnose 2: Shadow Release</h3>
</div>
<p className="text-base text-slate-300 leading-relaxed mb-8 flex-grow font-light">
                        Aufbauend auf dem Reset geht diese Hypnose direkt an die Wurzel. Tief sitzende Blockaden, alte Glaubenssätze und emotionale Muster die dich immer wieder zurückziehen — werden Schicht für Schicht aufgelöst. Der innere Widerstand verschwindet. Der Weg wird frei.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-white/[0.05] mt-auto">
<span className="text-sm text-slate-500 uppercase tracking-wider">Regulärer Einzelwert</span>
<span className="text-lg text-[#C5A059] font-medium">99,00 €</span>
</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="md:w-1/2 relative shrink-0 flex items-center justify-center p-4 sm:p-5 overflow-visible">
<img alt="Hypnose 3" className="w-[95%] sm:w-full h-auto object-contain rounded-2xl shadow-2xl opacity-90 group-hover:opacity-100 scale-[1.03] group-hover:scale-[1.06] transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba698e57-641a-4769-91f6-a0e44d46315f_800w.jpg"/>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow justify-center relative z-10">
<div className="mb-4">
<h3 className="text-xl md:text-2xl text-white font-medium tracking-tight">Hypnose 3: Creator Awakening</h3>
</div>
<p className="text-base text-slate-300 leading-relaxed mb-8 flex-grow font-light">
                        Irgendwann haben wir alle aufgehört zu vertrauen — uns selbst, unserer inneren Stimme, unserer wahren Größe. Diese Hypnose führt dich zurück zu dir. Sie stärkt die Verbindung zu deinem wahren Selbst, weckt das natürliche Selbstvertrauen das immer in dir war — und schaltet deine Schöpferkraft wieder frei.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-white/[0.05] mt-auto">
<span className="text-sm text-slate-500 uppercase tracking-wider">Regulärer Einzelwert</span>
<span className="text-lg text-[#C5A059] font-medium">99,00 €</span>
</div>
</div>
</div>
<div className="bg-white/[0.02] border border-white/[0.05] rounded-3xl overflow-hidden flex flex-col md:flex-row group hover:border-[#C5A059]/30 transition-colors duration-300">
<div className="md:w-1/2 relative shrink-0 flex items-center justify-center p-4 sm:p-5 overflow-visible">
<img alt="Hypnose 4" className="w-[95%] sm:w-full h-auto object-contain rounded-2xl shadow-2xl opacity-90 group-hover:opacity-100 scale-[1.03] group-hover:scale-[1.06] transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c28cd96e-8e4d-4724-b6ac-0ebfc770e85d_800w.jpg"/>
</div>
<div className="p-8 md:p-10 flex flex-col flex-grow justify-center relative z-10">
<div className="mb-4">
<h3 className="text-xl md:text-2xl text-white font-medium tracking-tight">Hypnose 4: Identity Anchor</h3>
</div>
<p className="text-base text-slate-300 leading-relaxed mb-8 flex-grow font-light">
                        Die letzte Hypnose vollendet den Prozess. Dein neues Selbstbild wird tief im Unterbewusstsein verankert — dauerhaft und unerschütterlich. Nicht eingeredet. Eingebrannt. Du hörst auf zu versuchen diese Person zu sein — und bist sie einfach.
                    </p>
<div className="flex items-center justify-between pt-6 border-t border-white/[0.05] mt-auto">
<span className="text-sm text-slate-500 uppercase tracking-wider">Regulärer Einzelwert</span>
<span className="text-lg text-[#C5A059] font-medium">99,00 €</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full mt-24">
<div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.05] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden backdrop-blur-sm group hover:border-[#C5A059]/20 transition-colors duration-500">

<div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.1),transparent_70%)] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[radial-gradient(circle_at_bottom_left,rgba(40,54,86,0.2),transparent_70%)] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center mb-10">
<span className="text-[#C5A059] uppercase tracking-[0.2em] text-xs font-semibold mb-4 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:history-linear"></iconify-icon>
                    Die Entstehungsgeschichte
                </span>
<h2 className="text-3xl sm:text-4xl text-white font-medium tracking-tight text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Wach auf <span className="text-[#C5A059] font-light mx-2 text-2xl">×</span> Mind Solutions
                </h2>
</div>
<div className="relative z-10 space-y-6 text-slate-300 font-light leading-relaxed max-w-3xl mx-auto text-left sm:text-center text-sm sm:text-base">
<p className="">
<strong className="font-medium text-white">Marcel und Abbas</strong> verbindet mehr als eine gemeinsame Vision — sie verbindet eine langjährige Freundschaft und ein gegenseitiges Vertrauen, das über Jahre gewachsen ist.
                </p>
<p className="">
                    Abbas hat auf Marcels persönlichem Transformationsweg eine entscheidende Rolle gespielt. Als zertifizierter Hypnosetherapeut aus der Schweiz hat er ihm gezeigt, was möglich wird, wenn man wirklich zum Kern geht — und nicht nur an der Oberfläche arbeitet. Diese Erfahrung hat Marcel nachhaltig gepależy.
                </p>
<p className="">
                    Irgendwann war es nur noch eine logische Entscheidung: ihr beider Wissen zu bündeln. Marcels tiefes Verständnis für Bewusstsein, Identität und Manifestation — kombiniert mit Abbas' therapeutischer Expertise im Bereich Hypnose und Unterbewusstsein.
                </p>
<div className="mt-10 pt-8 border-t border-white/[0.05]">
<p className="text-lg md:text-xl text-white font-medium italic" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        "Das Subconscious Recode ist das Ergebnis. Mit Herz erschaffen. Von zwei Menschen, die selbst erlebt haben, was möglich ist, wenn man wirklich bereit ist, sich zu verändern."
                    </p>
</div>
</div>
</div>
</div>

<div className="w-full mt-24">

<div className="flex flex-col items-center justify-center mb-12">
<h2 className="text-3xl sm:text-4xl text-white font-medium tracking-tight mb-8 text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>
                Das sagen Menschen die mit Abbas gearbeitet haben
            </h2>
<div className="flex flex-col sm:flex-row items-center gap-4 bg-white/[0.02] border border-white/[0.08] px-6 py-4 rounded-3xl w-fit mx-auto shadow-lg backdrop-blur-sm">
<div className="flex flex-col items-center sm:items-end sm:border-r border-white/[0.1] sm:pr-6">
<span className="text-white font-medium text-base tracking-wide">Mind Solutions</span>
<span className="text-xs text-slate-400 font-light">9 Verifizierte Google Bewertungen</span>
</div>
<div className="flex items-center gap-3 sm:pl-2">
<span className="text-3xl font-semibold text-white tracking-tighter">5,0</span>
<div className="flex text-[#C5A059]">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="w-full max-w-2xl mx-auto relative flex flex-col items-center text-left">
<div className="w-full relative min-h-[400px]" id="testimonial-container">

<div className="testimonial-slide bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-300 w-full h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex text-[#C5A059]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500">vor 4 Monaten</span>
</div>
<p className="text-base text-slate-300 font-light mb-10 leading-relaxed">
                            "Ich bin von der Ganzjahresbegleitung zutiefst berührt und unendlich dankbar für diese Erfahrung. Es war jeden Franken wert und sogar noch mehr. Von der ersten Begegnung an habe ich mich bei Mind Solutions vollkommen aufgehoben, sicher und willkommen gefühlt.<br/><br/>
                            Abbas ist ein unglaublich professioneller, feinfühliger und herzlicher Mensch. Seine ruhige Art, seine echte Empathie und seine Präsenz schaffen sofort Vertrauen. Ich hatte jederzeit das Gefühl, gesehen und verstanden zu werden, ganz ohne Druck und ohne Bewertung.<br/><br/>
                            Das Coaching war tiefgehend, heilsam und nachhaltig. Mein Thema hat sich aufgelöst und ich fühle mich zum ersten Mal wirklich bereit, meinen wahren Weg zu gehen. Die Resonanz ist fantastisch und die Ergebnisse sind schwarz auf weiß sichtbar. Abbas hat in mir etwas bewegt und angestoßen, das weit über die Sitzungen hinauswirkt. Man spürt deutlich, dass er seine Arbeit mit echter Leidenschaft, Achtsamkeit und großem Respekt gegenüber dem Menschen macht.<br/><br/>
                            Ich kann Mind Solutions aus ganzem Herzen empfehlen und würde diesen Weg jederzeit wieder wählen. Danke für diese wertvolle Begleitung und diese besondere Erfahrung."
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 text-[#C5A059] flex items-center justify-center font-medium text-base border border-white/5 shadow-inner">MD</div>
<div>
<div className="text-base text-white font-medium">Mike Donovan</div>
<div className="text-sm text-slate-500 flex items-center gap-1">1 Rezension</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-sm text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon> 2
                        </div>
</div>
</div>

<div className="testimonial-slide hidden bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-300 w-full h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex text-[#C5A059]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500">vor einem Jahr</span>
</div>
<p className="text-base text-slate-300 font-light mb-10 leading-relaxed">
                            "Abbas ist wirklich die sprichwörtliche Nadel im Heuhaufen. Ich habe noch nie so eine gute Therapie erlebt. Endlich jemand, der mich wirklich versteht und meine Probleme an der Wurzel packen konnte. Die Transformation, die ich dank seiner Arbeit durchgemacht habe, ist unglaublich! Ich habe das Halbjahrespaket bei ihm gebucht, und jeder Rappen war es absolut wert. Wenn in Zukunft ein neues Thema hochkommt, weiß ich ganz genau, an wen ich mich wenden werde – Abbas! Ich kann ihn uneingeschränkt weiterempfehlen."
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 text-[#C5A059] flex items-center justify-center font-medium text-base border border-white/5 shadow-inner">CR</div>
<div>
<div className="text-base text-white font-medium">Claudiu Raducanu</div>
<div className="text-sm text-slate-500 flex items-center gap-1">2 Rezensionen</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-sm text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon> 5
                        </div>
</div>
</div>

<div className="testimonial-slide hidden bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-300 w-full h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex text-[#C5A059]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500">vor einem Jahr</span>
</div>
<p className="text-base text-slate-300 font-light mb-10 leading-relaxed">
                            "Die Hypnose-Sitzungen bei Abbas haben mein Leben wirklich verändert. Ich kam mit dem Wunsch, mein Selbstbewusstsein zu stärken, und war überrascht, wie schnell sich die ersten positiven Veränderungen gezeigt haben. Abbas hat eine unglaublich einfühlsame und professionelle Art, die es mir leicht gemacht hat, mich auf den Prozess einzulassen. Seine Hypnose war nicht nur entspannend, sondern auch tiefgreifend und wirkungsvoll.<br/><br/>
                            Ich fühle mich nun sicherer, selbstbewusster und trete viel souveräner auf – und genau dieses neu gewonnene Selbstbewusstsein hat mir ermöglicht, meine Traumstelle zu finden und angenommen zu werden. Ich verdiene jetzt gutes Geld und kann voller Überzeugung sagen, dass diese Entwicklung ohne die wertschätzende und professionelle Zusammenarbeit mit Abbas nicht so schnell möglich gewesen wäre.<br/><br/>
                            Ich kann Abbas nur jedem empfehlen, der an sich arbeiten und sein volles Potenzial entfalten möchte!"
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 text-[#C5A059] flex items-center justify-center font-medium text-base border border-white/5 shadow-inner">GB</div>
<div>
<div className="text-base text-white font-medium">G BEER</div>
<div className="text-sm text-slate-500 flex items-center gap-1">4 Rezensionen</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-sm text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon> 4
                        </div>
</div>
</div>

<div className="testimonial-slide hidden bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-300 w-full h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex text-[#C5A059]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500">vor einem Jahr</span>
</div>
<p className="text-base text-slate-300 font-light mb-10 leading-relaxed">
                            "Mit Abbas konnte ich tiefe Einblicke in mich selbst erfahren und mich selbst nicht nur besser kennen lernen, sondern ich lernte auch einen verständnisvollen und liebevollen Umgang mit mir selbst zu pflegen. Er versteht es sich komplett auf sein Gegenüber einzulassen und das Beste aus ihm herauszuholen. Mit seiner Art und Weise lässt sich erkennen, dass für ihn das Wohl seines Gegenübers höchste Priorität hat. So nahm ich ihn wahr und bin ihm unendlich dankbar für sein Wirken."
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 text-[#C5A059] flex items-center justify-center font-medium text-base border border-white/5 shadow-inner">FB</div>
<div>
<div className="text-base text-white font-medium">Fabijan Balenovic</div>
<div className="text-sm text-slate-500 flex items-center gap-1">5 Rezensionen</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-sm text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon> 4
                        </div>
</div>
</div>

<div className="testimonial-slide hidden bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-300 w-full h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex text-[#C5A059]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500">vor einem Jahr</span>
</div>
<p className="text-base text-slate-300 font-light mb-10 leading-relaxed">
                            "Ich bin immer noch sprachlos, wie sehr mir die Arbeit mit Abbas geholfen hat! Fünf Jahre lang habe ich täglich 20 Zigaretten geraucht – bis ich eine einzige Sitzung mit ihm hatte. Seitdem bin ich rauchfrei und habe keinerlei Verlangen mehr …"
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 text-[#C5A059] flex items-center justify-center font-medium text-base border border-white/5 shadow-inner">IK</div>
<div>
<div className="text-base text-white font-medium">Ibrahim Kandönmez</div>
<div className="text-sm text-slate-500 flex items-center gap-1">2 Rezensionen</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-sm text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon> 3
                        </div>
</div>
</div>

<div className="testimonial-slide hidden bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-300 w-full h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex text-[#C5A059]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500">vor einem Jahr</span>
</div>
<p className="text-base text-slate-300 font-light mb-10 leading-relaxed">
                            "Ich hatte jahrelang mit Süchten, Prokrastination und Orientierungslosigkeit zu kämpfen. Mein Leben war chaotisch und unproduktiv. Doch mit Abbas’ Unterstützung und den Tools, die er mir an die Hand gegeben hat, konnte ich endlich die Wende schaffen. Nach nur fünf Sitzungen hat sich mein Leben radikal verändert – ich bin jetzt der Produktive in meinem Freundeskreis und habe alles im Griff. Natürlich musste ich selbst motiviert sein, aber Abbas hat genau die richtigen Triggerpunkte gefunden und mich herausgefordert, an mir zu arbeiten. Wer bereit ist, sich wirklich einzulassen, kann mit ihm Großartiges erreichen!"
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 text-[#C5A059] flex items-center justify-center font-medium text-base border border-white/5 shadow-inner">SK</div>
<div>
<div className="text-base text-white font-medium">Samuel Köbe</div>
<div className="text-sm text-slate-500 flex items-center gap-1">1 Rezension</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-sm text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon> 5
                        </div>
</div>
</div>

<div className="testimonial-slide hidden bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-300 w-full h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex text-[#C5A059]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500">vor einem Jahr</span>
</div>
<p className="text-base text-slate-300 font-light mb-10 leading-relaxed">
                            "Abbas von Mind Solutions hat mir extrem in meinem Heilungsprozess geholfen und hilft mir nach wie vor sehr! Nicht nur durch sein fundiertes Fachwissen, sondern auch durch seine menschlichen Kompetenzen. Immer auf Augenhöhe. Ich kann allen nur empfehlen, sich bei Mind Solutions zu melden, wenn man Unterstützung braucht. Danke Abbas!"
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 text-[#C5A059] flex items-center justify-center font-medium text-base border border-white/5 shadow-inner">NS</div>
<div>
<div className="text-base text-white font-medium">Nilai Scheiwiller</div>
<div className="text-sm text-slate-500 flex items-center gap-1">1 Rezension</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-sm text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon> 3
                        </div>
</div>
</div>

<div className="testimonial-slide hidden bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-300 w-full h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex text-[#C5A059]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500">vor einem Jahr</span>
</div>
<p className="text-base text-slate-300 font-light mb-10 leading-relaxed">
                            "Ich bin jetzt schon seit 2 Jahren bei Mind Solutions. Die Therapie bei Mind Solutions hat mir bisher am besten geholfen wenn man sie mit anderen vergleicht, und ich habe schon vieles ausprobiert. Es scheint als könne sich Abbas gut in jemand hereinversetzen, denn bei allen Problemen oder Herausforderungen, hatte Abbas eine Lösung für mich oder hat mich selber auf den richtigen Weg gebracht. Abbas ist sehr weise und ich kann die Therapie bei Mind Solutions sehr stark weiterempfehlen!"
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 text-[#C5A059] flex items-center justify-center font-medium text-base border border-white/5 shadow-inner">JN</div>
<div>
<div className="text-base text-white font-medium">Joshua Nyffeler</div>
<div className="text-sm text-slate-500 flex items-center gap-1">8 Rezensionen</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-sm text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon> 3
                        </div>
</div>
</div>

<div className="testimonial-slide hidden bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-10 relative overflow-hidden group hover:bg-white/[0.03] transition-colors duration-300 w-full h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-6">
<div className="flex text-[#C5A059]">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500">vor einem Jahr</span>
</div>
<p className="text-base text-slate-300 font-light mb-10 leading-relaxed">
                            "Ich hatte immer große Ziele, aber genau die haben mich oft gelähmt. Dank MindSolutions habe ich gelernt, meine Ziele in kleine, machbare Schritte aufzuteilen. Jetzt bin ich endlich dran, meine Träume zu verwirklichen!<br/><br/>
                            Was mich besonders beeindruckt hat: Hier spürt man wirklich, dass es nicht ums Geld geht, sondern darum, Menschen weiterzubringen. Sobald ich bereit bin, werde ich das nächste Thema angehen – Rauchen. Das ist noch ein altes Pflaster, haha. MindSolutions ist wirklich ein Insider-Tipp!"
                        </p>
</div>
<div className="flex items-center justify-between mt-auto pt-6 border-t border-white/[0.05]">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-slate-800 text-[#C5A059] flex items-center justify-center font-medium text-base border border-white/5 shadow-inner">MW</div>
<div>
<div className="text-base text-white font-medium">Markus Wolf</div>
<div className="text-sm text-slate-500 flex items-center gap-1">1 Rezension</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-sm text-slate-400">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon> 3
                        </div>
</div>
</div>
</div>

<div className="flex items-center justify-center gap-6 mt-10">
<button className="w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.02] border border-white/[0.05] text-white hover:bg-white/[0.05] hover:border-[#C5A059]/30 transition-all duration-300 group" id="prev-testimonial">
<iconify-icon className="text-xl group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="text-slate-400 text-sm font-light tracking-widest uppercase">
<span className="text-white font-medium" id="testimonial-indicator">1</span> / 9
                </div>
<button className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.05] text-white hover:bg-white/[0.05] hover:border-[#C5A059]/30 transition-all duration-300 group" id="next-testimonial">
<span className="text-sm font-medium tracking-wide">Nächste</span>
<iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="w-full max-w-3xl mt-24 relative z-10">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.15),transparent_70%)] pointer-events-none"></div>
<div className="bg-[#03050a]/90 border border-[#C5A059]/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden backdrop-blur-md shadow-[0_0_50px_rgba(0,0,0,0.5)]">
<div className="text-center mb-8">
<span className="text-red-400 font-semibold uppercase tracking-widest text-xs flex items-center justify-center gap-2 mb-3">
<iconify-icon className="text-lg" icon="solar:alarm-linear"></iconify-icon>
                    Aktion endet, wenn du die Seite verlässt
                </span>
<h2 className="text-2xl md:text-4xl text-white font-medium tracking-tight mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Sichere dir jetzt deinen unfairen Vorteil
                </h2>
<h3 className="text-[#C5A059] text-xl font-light tracking-wide">Subconscious Recode</h3>
</div>
<p className="leading-relaxed text-sm font-light text-slate-300 text-center max-w-xl mr-auto mb-10 ml-auto">Du hast heute gehandelt, statt nur zuzuschauen – und genau das macht den Unterschied. Da ich Action-Taker belohnen möchte, schalten wir dir heute das gesamte Subconscious Recode System für einen Bruchteil des Preises frei. Nutze die Chance jetzt, solange das Fenster offen ist.</p>
<div className="mb-10 w-full flex justify-center relative group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.2)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl"></div>
<img alt="Premium Audio Program Digital Bundle Mockup" className="w-full max-w-[500px] h-auto object-contain rounded-2xl border border-white/[0.05] shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] transition-transform duration-500 relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/813cefd3-7252-4ca0-9d49-d9f555a16b41_800w.jpg"/>
</div>
<div className="bg-white/[0.03] rounded-2xl p-6 md:p-8 mb-8 text-left border border-white/[0.05]">
<h4 className="text-white text-base font-medium uppercase tracking-wider mb-5 border-b border-white/[0.05] pb-3">Alles, was du sofort freischaltest:</h4>
<ul className="space-y-4">
<li className="flex items-center justify-between text-base">
<div className="flex items-center gap-3 text-slate-300 font-light">
<iconify-icon className="text-[#C5A059] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Hypnose 1: Nervous System Reset
                        </div>
<span className="text-slate-500">(99,00 €)</span>
</li>
<li className="flex items-center justify-between text-base">
<div className="flex items-center gap-3 text-slate-300 font-light">
<iconify-icon className="text-[#C5A059] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Hypnose 2: Shadow Release
                        </div>
<span className="text-slate-500">(99,00 €)</span>
</li>
<li className="flex items-center justify-between text-base">
<div className="flex items-center gap-3 text-slate-300 font-light">
<iconify-icon className="text-[#C5A059] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Hypnose 3: Creator Awakening
                        </div>
<span className="text-slate-500">(99,00 €)</span>
</li>
<li className="flex items-center justify-between text-base">
<div className="flex items-center gap-3 text-slate-300 font-light">
<iconify-icon className="text-[#C5A059] text-xl shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                            Hypnose 4: Identity Anchor
                        </div>
<span className="text-slate-500">(99,00 €)</span>
</li>

<li className="flex items-start sm:items-center justify-between text-base pt-4 mt-4 border-t border-white/[0.05]">
<div className="flex items-start sm:items-center gap-3 text-slate-300 font-light">
<iconify-icon className="text-[#C5A059] text-xl shrink-0 mt-0.5 sm:mt-0" icon="solar:document-text-linear"></iconify-icon>
<div>
<span className="block text-white font-medium">Bonus: Hypnosis Mastery PDF</span>
<span className="block text-sm text-slate-500 mt-0.5">Anleitung, um alles umzusetzen und das meiste aus dem Prozess rauszuholen</span>
</div>
</div>
<span className="text-[#C5A059] font-medium text-sm ml-4 shrink-0 uppercase tracking-wider hidden sm:block">Inklusive</span>
</li>
</ul>
</div>
<div className="flex flex-col items-center justify-center mb-8">
<span className="text-slate-500 text-base font-medium mb-1">
                    ❌ Regulärer Preis: <span className="line-through">396,00 €</span>
</span>
<span className="text-[#C5A059] text-3xl sm:text-4xl font-semibold tracking-tight mt-2 flex items-center gap-3">
<iconify-icon className="text-2xl" icon="solar:tag-price-linear"></iconify-icon>
                    DEIN SONDERPREIS: Nur 111€
                </span>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full inline-flex items-center justify-center px-8 py-5 sm:px-10 sm:py-5 bg-[linear-gradient(90deg,#C5A059_0%,#DFB76C_50%,#C5A059_100%)] text-[#050a15] rounded-full text-sm sm:text-base uppercase tracking-widest font-semibold hover:scale-[1.02] transition-transform duration-300 shadow-[0_0_40px_rgba(197,160,89,0.3)] group relative overflow-hidden" href="https://go.realityaccelerator.de/upsell-accept">
<span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                    Ja, ich starte meinen Subconscious Recode jetzt — 111€
                    <iconify-icon className="ml-3 text-xl group-hover:scale-110 transition-transform" icon="solar:unlock-linear"></iconify-icon>
</a>
<a className="mt-6 text-xs sm:text-sm text-slate-500 underline decoration-slate-700 underline-offset-4 hover:text-slate-300 transition-colors duration-300 text-center" href="https://go.realityaccelerator.de/downsell">
                    Nein danke, ich arbeite vorerst ohne das System weiter.
                </a>
</div>
</div>
</div>

<div className="mt-16 sm:mt-24 w-full max-w-3xl text-left bg-[#C5A059]/5 border border-[#C5A059]/15 rounded-3xl p-6 sm:p-10 relative overflow-hidden backdrop-blur-sm">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.15)_0%,transparent_70%)] rounded-full blur-2xl pointer-events-none"></div>
<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[radial-gradient(circle_at_center,rgba(40,54,86,0.3)_0%,transparent_70%)] rounded-full blur-2xl pointer-events-none"></div>
<p className="text-sm sm:text-base font-light text-slate-300 leading-relaxed italic relative z-10">
<span className="font-medium text-[#DFB76C] not-italic pr-1 text-lg" style={{fontFamily: '\'Playfair Display\', serif'}}>Wichtig —</span> 
            Wenn du diese Seite verlässt, verfällt diese exklusive Chance für immer. Du wirst das komplette 4-Stufen System nie wieder für 111€ (statt 396€) sehen. Triff jetzt die Entscheidung für deinen schnellsten Weg zum Ziel.
        </p>
</div>
</main>

<footer className="w-full py-8 border-t border-slate-800/50 mt-auto relative z-20 bg-[#050a15]">
<div className="flex flex-col md:flex-row items-center justify-between max-w-[1400px] mx-auto px-4 sm:px-6 text-base text-slate-500 font-light">
<span className="uppercase mb-4 md:mb-0 text-xs tracking-widest">© 2026 RealityAccelerator</span>
<div className="flex gap-8">
<a className="hover:text-[#C5A059] transition-colors duration-300 text-xs" href="https://itrk.legal/1jdU.0.10dy.html">Impressum</a>
<a className="hover:text-[#C5A059] transition-colors duration-300 text-xs" href="https://itrk.legal/1jdU.bg.10dy.html">Datenschutz</a>
</div>
</div>
</footer>


    </>
  );
}
