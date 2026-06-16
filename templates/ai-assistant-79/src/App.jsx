import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function(d, t) {
var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
v.onload = function() {
window.voiceflow.chat.load({
verify: { projectID: '69c5bcaf37f59d955f2e53af' },
url: 'https://general-runtime.voiceflow.com',
versionID: 'production',
voice: {
url: "https://runtime-api.voiceflow.com"
}
});
}
v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
})(document, 'script');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const rootClinic = document.querySelector('#card-realtime-clinic');
        const aiProg = rootClinic.querySelector('#ai-progress');
        const aiPct = rootClinic.querySelector('#ai-revenue-pct');
        let animatedClinic = false;
        const animateClinic = () => {
          if (animatedClinic) return;
          animatedClinic = true;
          const dur = 2000;
          const start = performance.now();
          const tick = (now) => {
            const t = Math.min(1, (now - start) / dur);
            const ease = (x) => 1 - Math.pow(1 - x, 3);
            const e = ease(t);
            const val = Math.round(20 * e);
            aiProg.style.width = (val * 4) + '%';
            aiPct.textContent = '+' + val + '%';
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        };
        const ioClinic = new IntersectionObserver((entries) => {
          entries.forEach((e) => { if (e.isIntersecting) animateClinic(); });
        }, { threshold: 0.4 });
        ioClinic.observe(rootClinic);
      


      function openModal(packageName = 'Jeszcze nie wiem') {
        const modal = document.getElementById('leadModal');
        const content = document.getElementById('modalContent');
        const select = document.getElementById('packageSelect');

        if (select) select.value = packageName;

        document.getElementById('formSection').classList.remove('hidden');
        document.getElementById('successMessage').classList.add('hidden');
        document.getElementById('leadForm').reset();

        modal.classList.remove('hidden');
        setTimeout(() => {
          modal.classList.remove('opacity-0');
          content.classList.remove('scale-95');
        }, 10);
      }

      function closeModal() {
        const modal = document.getElementById('leadModal');
        const content = document.getElementById('modalContent');

        modal.classList.add('opacity-0');
        content.classList.add('scale-95');

        setTimeout(() => {
          modal.classList.add('hidden');
        }, 300);
      }

      function submitForm(e) {
        e.preventDefault();
        document.getElementById('formSection').classList.add('hidden');
        document.getElementById('successMessage').classList.remove('hidden');
        document.getElementById('successMessage').classList.add('flex');

        setTimeout(() => {
          closeModal();
        }, 3000);
      }

      function pulseChat() {
        const chat = document.getElementById('chat-mockup');
        chat.classList.add('pulse-anim');
        setTimeout(() => {
          chat.classList.remove('pulse-anim');
        }, 2000);
      }
    


      setTimeout(() => AOS.init({duration: 1200, easing: 'ease-out-cubic', once: true, offset: 50}), 100);
    


      window.triggerFlashAndModal = function() {
        const overlay = document.getElementById('super-animation-overlay');
        const stars = document.getElementById('anim-stars');
        const t1 = document.getElementById('anim-text-1');
        const t2 = document.getElementById('anim-text-2');
        const t3 = document.getElementById('anim-text-3');
        const t4 = document.getElementById('anim-text-4');
        const tLast = document.getElementById('anim-text-last');

        overlay.classList.remove('hidden');
        void overlay.offsetWidth;
        overlay.classList.remove('opacity-0');
        overlay.classList.add('opacity-100');

        setTimeout(() => {
          if(stars) {
            stars.classList.remove('opacity-0');
            stars.classList.add('opacity-100');
          }
        }, 100);

        setTimeout(() => {
          if(stars) {
            stars.classList.remove('opacity-100');
            stars.classList.add('opacity-0');
          }
        }, 2500);

        const showHide = (el, showTime, hideTime) => {
          setTimeout(() => {
            if(el) {
              el.classList.remove('opacity-0', 'scale-95', 'scale-110');
              el.classList.add('opacity-100', 'scale-105');
            }
          }, showTime);
          setTimeout(() => {
            if(el) {
              el.classList.remove('opacity-100', 'scale-105');
              el.classList.add('opacity-0', 'scale-110');
            }
          }, hideTime);
        };

        showHide(t1, 3500, 6000);
        showHide(t2, 6500, 9000);
        showHide(t3, 9500, 12000);
        showHide(t4, 12500, 15500);

        setTimeout(() => {
          if(tLast) {
            tLast.classList.remove('opacity-0', 'scale-90');
            tLast.classList.add('opacity-100');
            setTimeout(() => {
              tLast.style.textShadow = '0 0 100px #FFFFFF, 0 0 250px #FFFFFF, 0 0 400px #FFFFFF, 0 0 600px #FFFFFF, 0 0 1000px #FFFFFF';
              tLast.style.transform = 'scale(1.5)';
              tLast.style.color = '#FFFFFF';
            }, 500);
          }
        }, 18500);

        setTimeout(() => {
          overlay.classList.remove('opacity-100');
          overlay.classList.add('opacity-0');
          setTimeout(() => {
            overlay.classList.add('hidden');
            [t1, t2, t3, t4, tLast].forEach(el => {
              if(el) {
                el.classList.add('opacity-0', 'scale-95');
                el.classList.remove('opacity-100', 'scale-105', 'scale-110');
              }
            });
            if(tLast) {
              tLast.classList.add('scale-90');
              tLast.style.textShadow = 'none';
              tLast.style.transform = '';
              tLast.style.color = '';
            }
            if(typeof openModal === 'function') openModal();
          }, 500);
        }, 24000);
      };
    


      const _origOpenModal = window.openModal; window.openModal = function(p){ if(_origOpenModal) _origOpenModal(p); const s1 = document.getElementById('step-1'), s2 = document.getElementById('step-2'), s3 = document.getElementById('step-3'); if(s1) s1.classList.remove('hidden'); if(s2) s2.classList.add('hidden'); if(s3) s3.classList.add('hidden'); };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#A3D8D4] rounded-full blur-[120px] opacity-20 float-anim float-crazy zoom-pulse"></div>
<div className="absolute top-[20%] right-[-10%] w-[30%] h-[50%] bg-[#FFFFFF] rounded-full blur-[100px] opacity-60 float-anim-delay rotate-3d border-dance"></div>
<div className="absolute bottom-[10%] left-[20%] w-[40%] h-[40%] bg-[#A3D8D4] rounded-full blur-[120px] opacity-20 float-anim pulse-anim float-crazy border-dance zoom-pulse"></div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-[#1A1A1A]/10 bg-[#000000]/80" data-aos="fade-down">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl text-[#A3D8D4] spin-slow" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-lg font-bold tracking-tighter text-[#1A1A1A] neon-text">
            HAPPY ANSWER
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-semibold">
<a className="hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 inline-block text-[#D4AF37] hover:text-[#b5952f] hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.8)]" href="#rozwiazanie">
            Rozwiązanie
          </a>
<a className="hover:text-[#1A1A1A] hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 inline-block" href="#korzysci">
            Korzyści
          </a>
<a className="hover:text-[#1A1A1A] hover:scale-110 hover:-translate-y-0.5 transition-all duration-300 inline-block" href="#cennik">
            Cennik
          </a>
</div>
<div className="flex items-center gap-4">
<button className="hover:bg-[#82C4C0] text-sm font-bold text-[#1A1A1A] bg-[#A3D8D4] rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 cursor-pointer cyan-glow-hover border-dance glitch-hover" onclick="openModal()" style={{}}>
            Zarezerwuj Demo
          </button>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid lg:grid-cols-1 gap-16 gap-x-16 gap-y-16 items-center">

<div className="max-w-3xl z-10 flex flex-col items-center text-center mx-auto" data-aos="fade-right">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#1A1A1A]/10 soft-shadow mb-6 float-rotate">
<span className="flex h-2 w-2 rounded-full bg-[#A3D8D4]"></span>
<span className="text-xs font-bold text-[#1A1A1A]/70">
              Dedykowane dla Medycyny Estetycznej
            </span>
</div>
<h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-[#1A1A1A] leading-[1.2] mb-6" data-aos="zoom-in" data-aos-duration="1000">
<span className="text-shine">
              Przestań tracić pacjentów, którzy boją się zadzwonić. Automatyzuj
              rezerwacje 24/7.
            </span>
</h1>
<p className="text-lg text-[#1A1A1A]/70 leading-relaxed mb-8">
            Ponad połowa Twoich potencjalnych pacjentek przegląda ofertę
            wieczorami. Mają pytania o ból, czas rekonwalescencji i ceny, ale
            nie chcą dzwonić. Nasz wirtualny asystent wchodzi w dialog
            natychmiast, rozwiewa obawy i prowadzi prosto do kalendarza w
            Booksy. Ty śpisz, on zapełnia grafik.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="flex items-center justify-center gap-2 hover:bg-[#9E7309] text-base font-bold text-[#FFFFFF] bg-[#B8860B] rounded-lg pt-3.5 pr-6 pb-3.5 pl-6 cursor-pointer extravagant-button zoom-pulse float-crazy" onclick="openModal()">
              Zacznij odzyskiwać pacjentów
              <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 bg-[#FFFFFF] text-[#1A1A1A] border border-[#1A1A1A]/10 text-base font-bold px-6 py-3.5 rounded-lg cursor-pointer cyan-glow-hover glitch-hover border-dance" onclick="openModal()">
              Zobacz, jak to działa na żywo
            </button>
</div>
<div className="mt-8 flex items-center gap-4 text-sm font-medium text-[#1A1A1A]/60 justify-center">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-[#EAE0D8] border-2 border-[#F5F5F5] bounce-slow"></div>
<div className="w-8 h-8 rounded-full bg-[#A3D8D4] border-2 border-[#F5F5F5] float-anim"></div>
<div className="w-8 h-8 rounded-full bg-[#1A1A1A]/10 border-2 border-[#F5F5F5] float-rotate"></div>
</div>
<p>Zaufany przez 50+ klinik w Polsce</p>
</div>
</div>

</div>
</section>

<section className="relative bg-[#FFFFFF] py-12 my-12 soft-shadow mx-4 lg:mx-auto max-w-7xl rounded-lg">
<div className="absolute inset-0 bg-[#A3D8D4] opacity-5 blur-xl rounded-lg pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10" data-aos="fade-up">
<p className="uppercase text-xs font-bold text-[#1A1A1A]/50 tracking-wide text-center mb-8">
          Zaufali nam liderzy branży
        </p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter text-[#1A1A1A] hover:opacity-100 hover:scale-110 hover:-translate-y-1 transition-all duration-500 cursor-default float-anim rotate-3d" data-aos="fade-up" data-aos-delay="0">
            LUMINA
          </span>
<span className="text-xl font-bold tracking-tighter text-[#1A1A1A] hover:opacity-100 hover:scale-110 hover:-translate-y-1 transition-all duration-500 cursor-default float-subtle float-crazy" data-aos="fade-up" data-aos-delay="100">
            AURA CLINIC
          </span>
<span className="text-xl font-bold tracking-tighter text-[#1A1A1A] hover:opacity-100 hover:scale-110 hover:-translate-y-1 transition-all duration-500 cursor-default float-rotate zoom-pulse border-dance" data-aos="fade-up" data-aos-delay="200">
            DERMA MED
          </span>
<span className="text-xl font-bold tracking-tighter text-[#1A1A1A] hover:opacity-100 hover:scale-110 hover:-translate-y-1 transition-all duration-500 cursor-default float-anim-delay rotate-3d" data-aos="fade-up" data-aos-delay="300">
            ESTETICA
          </span>
<span className="text-xl font-bold tracking-tighter text-[#1A1A1A] hover:opacity-100 hover:scale-110 hover:-translate-y-1 transition-all duration-500 cursor-default float-subtle float-crazy zoom-pulse" data-aos="fade-up" data-aos-delay="400">
            CLINIC ONE
          </span>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-32 pl-6 overflow-hidden">
<div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
<h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-4 text-glow">
<span className="text-pan-x">
            Gdzie uciekają Twoje zyski, gdy klinika jest zamknięta?
          </span>
</h2>
<p className="text-base text-[#1A1A1A]/70 leading-relaxed">
          Pacjentka szukająca zabiegu chce konkretów tu i teraz. Jeśli Twoja
          strona nie odpowie jej w kilka sekund – kliknie 'wstecz' i pójdzie do
          konkurencji. AI rozwiązuje ten problem. Błyskawicznie, dyskretnie i z
          pełną empatią, zachowując najwyższe standardy obsługi.
        </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="group bg-[#FFFFFF] p-6 rounded-lg border border-[#1A1A1A]/5 card-extravagant hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-[#D4AF37] hover:z-20 z-10 transition-all duration-500" data-aos="fade-up" data-aos-delay="0">
<div className="w-12 h-12 rounded-lg bg-[#F5F5F5] text-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#A3D8D4] group-hover:text-[#FFFFFF] transition-all duration-500 float-subtle">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<h3 className="text-base font-bold text-[#1A1A1A] mb-2 group-hover:text-[#A3D8D4] transition-colors duration-300">
            Przeładowana Recepcja
          </h3>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
            Każdy nieodebrany telefon to oddany walkowerem pacjent. Wirtualny
            asystent przejmuje powtarzalne pytania, dając Twojemu zespołowi czas
            na realną obsługę gości w klinice.
          </p>
</div>
<div className="group bg-[#FFFFFF] p-6 rounded-lg border border-[#1A1A1A]/5 card-extravagant hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-[#D4AF37] hover:z-20 z-10 transition-all duration-500" data-aos="fade-up" data-aos-delay="100">
<div className="w-12 h-12 rounded-lg bg-[#F5F5F5] text-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#A3D8D4] group-hover:text-[#FFFFFF] transition-all duration-500 float-anim">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-base font-bold text-[#1A1A1A] mb-2 group-hover:text-[#A3D8D4] transition-colors duration-300">
            Koniec z kopiuj-wklej na Instagramie
          </h3>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
            Zamiast setny raz odpowiadać, czy po kwasie hialuronowym można iść
            na siłownię, pozwól systemowi załatwić to w ułamku sekundy. Twoja
            recepcja wreszcie odetchnie.
          </p>
</div>
<div className="group bg-[#FFFFFF] p-6 rounded-lg border border-[#1A1A1A]/5 card-extravagant hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-[#D4AF37] hover:z-20 z-10 transition-all duration-500" data-aos="fade-up" data-aos-delay="200">
<div className="w-12 h-12 rounded-lg bg-[#F5F5F5] text-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#A3D8D4] group-hover:text-[#FFFFFF] transition-all duration-500 float-subtle">
<iconify-icon className="text-2xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-base font-bold text-[#1A1A1A] mb-2 group-hover:text-[#A3D8D4] transition-colors duration-300">
            Błyskawiczny zwrot
          </h3>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
            Ten system zarabia sam na siebie. Wystarczą 2-3 rezerwacje w
            miesiącu od osób, które normalnie zamknęłyby stronę, aby w pełni
            pokryć koszty utrzymania bota.
          </p>
</div>
<div className="group bg-[#FFFFFF] p-6 rounded-lg border border-[#1A1A1A]/5 card-extravagant hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:border-[#D4AF37] hover:z-20 z-10 transition-all duration-500" data-aos="fade-up" data-aos-delay="300">
<div className="w-12 h-12 rounded-lg bg-[#F5F5F5] text-[#1A1A1A] flex items-center justify-center mb-6 group-hover:bg-[#A3D8D4] group-hover:text-[#FFFFFF] transition-all duration-500 float-anim">
<iconify-icon className="text-2xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<h3 className="text-base font-bold text-[#1A1A1A] mb-2 group-hover:text-[#A3D8D4] transition-colors duration-300">
            Zarabiasz w weekendy i noce
          </h3>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
            Najwięcej decyzji zakupowych zapada w niedzielne popołudnia i późne
            wieczory. Bądź tam, gdzie Twoja konkurencja ma ustawioną
            automatyczną odpowiedź 'odpiszemy w poniedziałek'.
          </p>
</div>
</div>
</section>

<section className="py-32 bg-[#FFFFFF]" id="rozwiazanie">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-24 items-center">
<div data-aos="fade-right">
<h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-6">
<span className="text-glow-anim">
                Przeprowadź pacjenta za rękę, wprost do kalendarza.
              </span>
</h2>
<p className="text-base text-[#1A1A1A]/70 mb-10 leading-relaxed">
              Nikt nie lubi czytać długich bloków tekstu na smartfonie.
              Pacjentki chcą zadać jedno, konkretne pytanie i natychmiast
              otrzymać precyzyjną odpowiedź. Nasz system to nie jest zwykły
              chat. To wirtualny concierge, który zna Twoją ofertę na wylot i
              potrafi idealnie dobrać ton rozmowy.
            </p>
<div className="space-y-8">
<div className="flex gap-4 group hover:translate-x-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="100">
<div className="w-12 h-12 rounded-lg bg-[#F5F5F5] border border-[#1A1A1A]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#A3D8D4] group-hover:border-[#A3D8D4] transition-colors duration-300">
<iconify-icon className="text-[#A3D8D4] group-hover:text-[#1A1A1A] text-xl transition-colors duration-300" icon="solar:ghost-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-bold text-[#1A1A1A] mb-1 group-hover:text-[#A3D8D4] transition-colors duration-300">
                    Dyskretny doradca
                  </h4>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                    Zapewniamy komfort osobom, które czują blokadę przed
                    dzwonieniem. Intymne pytania dużo łatwiej zadać w wiadomości
                    tekstowej.
                  </p>
</div>
</div>
<div className="flex gap-4 group hover:translate-x-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="200">
<div className="w-12 h-12 rounded-lg bg-[#F5F5F5] border border-[#1A1A1A]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#A3D8D4] group-hover:border-[#A3D8D4] transition-colors duration-300">
<iconify-icon className="text-[#A3D8D4] group-hover:text-[#1A1A1A] text-xl transition-colors duration-300" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-bold text-[#1A1A1A] mb-1 group-hover:text-[#A3D8D4] transition-colors duration-300">
                    Merytoryczne przygotowanie
                  </h4>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                    System dokładnie tłumaczy przebieg zabiegu, przeciwwskazania
                    i proces gojenia, budując zaufanie jeszcze przed wizytą.
                  </p>
</div>
</div>
<div className="flex gap-4 group hover:translate-x-2 transition-transform duration-300" data-aos="fade-up" data-aos-delay="300">
<div className="w-12 h-12 rounded-lg bg-[#F5F5F5] border border-[#1A1A1A]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#A3D8D4] group-hover:border-[#A3D8D4] transition-colors duration-300">
<iconify-icon className="text-[#A3D8D4] group-hover:text-[#1A1A1A] text-xl transition-colors duration-300" icon="solar:link-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-bold text-[#1A1A1A] mb-1 group-hover:text-[#A3D8D4] transition-colors duration-300">
                    Prosto do rezerwacji
                  </h4>
<p className="text-sm text-[#1A1A1A]/70 leading-relaxed">
                    Odpowiedź na pytanie gładko przechodzi w propozycję
                    umówienia wizyty, serwując gotowy link do konkretnej usługi
                    w Booksy.
                  </p>
</div>
</div>
</div>
</div>
<div className="relative bg-[#F5F5F5] rounded-lg p-8 border border-[#1A1A1A]/5 flex items-center justify-center min-h-[400px] soft-shadow float-anim-delay hover:scale-[1.02] transition-transform duration-500" data-aos="fade-left">
<div className="absolute inset-0 bg-[radial-gradient(#1A1A1A_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] rounded-lg"></div>
<div className="space-y-4">
<details className="group bg-[#F5F5F5] rounded-lg border border-[#1A1A1A]/5 [&amp;_summary::-webkit-details-marker]:hidden soft-shadow hover:scale-[1.02] hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="0">
<summary className="flex justify-between items-center font-bold cursor-pointer list-none px-6 py-5 text-[#1A1A1A]">
                  Czy to oznacza, że muszę zwolnić kogoś z recepcji?
                  <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-[#1A1A1A]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#1A1A1A]/70 leading-relaxed border-t border-[#1A1A1A]/5 pt-4 font-medium animate-[fade-in_0.3s_ease-out]">
                  Absolutnie nie. Asystent to wsparcie, nie zamiennik. Przejmuje
                  na siebie rutynowe zapytania, dzięki czemu Twój zespół ma czas
                  zająć się pacjentami w poczekalni i budowaniem prawdziwych
                  relacji.
                </div>
</details>
<details className="group bg-[#F5F5F5] rounded-lg border border-[#1A1A1A]/5 [&amp;_summary::-webkit-details-marker]:hidden soft-shadow hover:scale-[1.02] hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
<summary className="flex justify-between items-center font-bold cursor-pointer list-none px-6 py-5 text-[#1A1A1A]">
                  Co z RODO i poufnością danych medycznych?
                  <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-[#1A1A1A]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#1A1A1A]/70 leading-relaxed border-t border-[#1A1A1A]/5 pt-4 font-medium animate-[fade-in_0.3s_ease-out]">
                  Bezpieczeństwo to nasz priorytet. Asystent nie przechowuje
                  historii medycznej ani wrażliwych danych. Służy wyłącznie jako
                  bezpieczny pomost do systemu rezerwacyjnego.
                </div>
</details>
<details className="group bg-[#F5F5F5] rounded-lg border border-[#1A1A1A]/5 [&amp;_summary::-webkit-details-marker]:hidden soft-shadow hover:scale-[1.02] hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
<summary className="flex justify-between items-center font-bold cursor-pointer list-none px-6 py-5 text-[#1A1A1A]">
                  Jak szybko zauważę wzrost zysków?
                  <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-[#1A1A1A]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#1A1A1A]/70 leading-relaxed border-t border-[#1A1A1A]/5 pt-4 font-medium animate-[fade-in_0.3s_ease-out]">
                  Nasze partnerskie gabinety zazwyczaj obserwują nagły przypływ
                  umówionych wizyt pochodzących z nocnych i weekendowych zapytań
                  już w pierwszym tygodniu od uruchomienia.
                </div>
</details>
<details className="group bg-[#F5F5F5] rounded-lg border border-[#1A1A1A]/5 [&amp;_summary::-webkit-details-marker]:hidden soft-shadow hover:scale-[1.02] hover:shadow-lg transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
<summary className="flex justify-between items-center font-bold cursor-pointer list-none px-6 py-5 text-[#1A1A1A]">
                  A co jeśli bot poda złą informację medyczną?
                  <span className="transition-transform duration-300 group-open:rotate-180">
<iconify-icon className="text-[#1A1A1A]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#1A1A1A]/70 leading-relaxed border-t border-[#1A1A1A]/5 pt-4 font-medium animate-[fade-in_0.3s_ease-out]">
                  Nie ma na to szans. System opiera się w 100% na autoryzowanej
                  bazie wiedzy, którą wspólnie ustalamy. Zawsze informuje, że
                  ostateczna kwalifikacja odbywa się w gabinecie. Zero diagnoz,
                  sama rzetelna edukacja.
                </div>
</details>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#1A1A1A] text-[#FFFFFF] my-12 mx-4 lg:mx-auto max-w-7xl rounded-lg soft-shadow" id="korzysci">
<div className="px-6">
<div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#FFFFFF]/10 text-center">
<div className="group py-4 px-2 hover:-translate-y-2 transition-transform duration-500" data-aos="fade-up" data-aos-delay="0">
<div className="flex justify-center mb-6 text-[#A3D8D4] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
<iconify-icon className="text-4xl pulse-anim" icon="solar:moon-stars-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#FFFFFF] mb-3 tracking-tight group-hover:text-[#A3D8D4] transition-colors duration-300">
              Przechwytywanie utraconych szans
            </h3>
<p className="text-sm text-[#FFFFFF]/70 leading-relaxed">
              Przestaniesz tracić osoby, które wchodzą na stronę po godzinach
              pracy gabinetu. Gdy inni milczą, Twój bot konwertuje zapytania na
              wizyty.
            </p>
</div>
<div className="group py-4 px-2 hover:-translate-y-2 transition-transform duration-500" data-aos="fade-up" data-aos-delay="150">
<div className="flex justify-center mb-6 text-[#A3D8D4] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
<iconify-icon className="text-4xl float-subtle" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#FFFFFF] mb-3 tracking-tight group-hover:text-[#A3D8D4] transition-colors duration-300">
              Niezawodna wiedza
            </h3>
<p className="text-sm text-[#FFFFFF]/70 leading-relaxed">
              Brak pomyłek. System podaje tylko sprawdzone informacje,
              zatwierdzone przez Ciebie. Zero domysłów, sama medyczna precyzja.
            </p>
</div>
<div className="group py-4 px-2 hover:-translate-y-2 transition-transform duration-500" data-aos="fade-up" data-aos-delay="300">
<div className="flex justify-center mb-6 text-[#A3D8D4] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
<iconify-icon className="text-4xl float-subtle" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#FFFFFF] mb-3 tracking-tight group-hover:text-[#A3D8D4] transition-colors duration-300">
              Zdecydowani pacjenci
            </h3>
<p className="text-sm text-[#FFFFFF]/70 leading-relaxed">
              Ktoś, kto klika 'zarezerwuj' po rozmowie z naszym asystentem, wie
              czego chce. Drastycznie spada odsetek niepojawiających się
              pacjentów.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-4 text-glow-cyan">
<span className="text-color-shift">Idealna harmonia z Booksy</span>
</h2>
<p className="text-base text-[#1A1A1A]/70 leading-relaxed">
          Proces zaprojektowany tak, aby zminimalizować zaangażowanie po Twojej
          stronie, a zmaksymalizować liczbę rezerwacji.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">
<div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-[#A3D8D4]/30 to-transparent"></div>
<div className="relative flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="0">
<div className="w-16 h-16 bg-[#FFFFFF] rounded-lg border border-[#A3D8D4] flex items-center justify-center text-[#1A1A1A] mb-6 soft-shadow z-10 group-hover:-translate-y-2 transition-all duration-500 group-hover:shadow-[0_10px_20px_rgba(163,216,212,0.2)] float-subtle rotate-3d border-dance">
<iconify-icon className="text-2xl" icon="solar:book-bookmark-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#A3D8D4] transition-colors duration-300">
            Bot edukuje
          </h3>
<p className="text-sm text-[#1A1A1A]/70 px-2 leading-relaxed">
            W przyjazny sposób odpowiada na pytania o zabiegi, preparaty i
            zalecenia.
          </p>
</div>
<div className="relative flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="150">
<div className="w-16 h-16 bg-[#FFFFFF] rounded-lg border border-[#A3D8D4] flex items-center justify-center text-[#1A1A1A] mb-6 soft-shadow z-10 group-hover:-translate-y-2 transition-all duration-500 group-hover:shadow-[0_10px_20px_rgba(163,216,212,0.2)] float-anim zoom-pulse float-crazy">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#A3D8D4] transition-colors duration-300">
            Bot rozwiewa obawy
          </h3>
<p className="text-sm text-[#1A1A1A]/70 px-2 leading-relaxed">
            Dyskretnie uspokaja pacjenta, wyjaśniając kwestie bólu,
            rekonwalescencji i przeciwwskazań.
          </p>
</div>
<div className="relative flex flex-col items-center text-center group" data-aos="fade-up" data-aos-delay="300">
<div className="w-16 h-16 bg-[#A3D8D4] rounded-lg border border-[#A3D8D4] flex items-center justify-center text-[#1A1A1A] mb-6 soft-shadow z-10 group-hover:-translate-y-2 transition-all duration-500 group-hover:shadow-[0_15px_30px_rgba(163,216,212,0.4)] pulse-anim shimmer-effect rotate-3d border-dance float-crazy">
<iconify-icon className="text-2xl" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#A3D8D4] transition-colors duration-300">
            Bot podaje Booksy
          </h3>
<p className="text-sm text-[#1A1A1A]/70 px-2 leading-relaxed">
            Do Twojej kliniki trafiają pacjenci zdecydowani, poinformowani i
            gotowi na wizytę, z automatycznie utworzoną rezerwacją.
          </p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto py-32 px-6 hover:-translate-y-2 transition-transform duration-500" id="revenue-increase-section">
<div className="text-center mb-16" data-aos="fade-up">
<h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-4">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#FFFFFF] animate-pulse inline-block">
            Potencjalny wzrost przychodu o nawet 20%
          </span>
</h2>
<p className="text-base text-[#1A1A1A]/70 leading-relaxed max-w-2xl mx-auto">
          Zobacz jak automatyzacja rezerwacji po godzinach i w weekendy wpływa
          na liczbę umówionych wizyt i Twój miesięczny przychód.
        </p>
</div>
<div className="max-w-2xl mx-auto bg-[#FFFFFF] rounded-3xl p-8 border border-[#1A1A1A]/10 soft-shadow group hover:-translate-y-2 transition-transform duration-500" id="card-realtime-clinic">
<div className="flex items-center gap-3 text-[#1A1A1A] text-base mb-8 font-bold">
<iconify-icon className="text-[#A3D8D4] text-2xl group-hover:-translate-y-1 transition-transform" icon="solar:chart-square-bold"></iconify-icon>
          Bieżący Wzrost Rezerwacji
        </div>
<div className="space-y-8">
<div className="rounded-2xl bg-[#F5F5F5] p-5 border border-[#1A1A1A]/5 group-hover:-translate-y-1 transition-transform duration-300">
<div className="flex items-center justify-between mb-3">
<p className="text-sm font-bold text-[#1A1A1A]">
                Standardowe wizyty (Recepcja)
              </p>
<p className="text-xs font-bold text-[#1A1A1A]/60">100% normy</p>
</div>
<div className="h-3 w-full rounded-full bg-[#1A1A1A]/10 overflow-hidden">
<div className="h-full rounded-full bg-[#1A1A1A]" style={{width: '80%'}}></div>
</div>
</div>
<div className="rounded-2xl bg-[#A3D8D4]/10 p-5 border border-[#A3D8D4]/30 relative overflow-hidden group-hover:-translate-y-1 transition-transform duration-300">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A3D8D4]/20 to-transparent -translate-x-full shimmer-slide-anim"></div>
<div className="flex items-center justify-between mb-3 relative z-10">
<p className="text-sm font-bold text-[#1A1A1A]">
                Dodatkowe z AI (Noce i Weekendy)
              </p>
<p className="text-base font-bold text-[#D4AF37]" id="ai-revenue-pct">
                +0%
              </p>
</div>
<div className="h-3 w-full rounded-full bg-[#A3D8D4]/20 overflow-hidden relative z-10">
<div className="h-full rounded-full bg-gradient-to-r from-[#D4AF37] to-[#b5952f]" id="ai-progress" style={{width: '0%'}}></div>
</div>
</div>
</div>
<div className="mt-8 flex items-center justify-between text-xs text-[#1A1A1A]/60 font-semibold">
<span>Zwiększona dostępność kalendarza AI</span>
<span className="flex items-center gap-1.5 text-[#D4AF37]">
            Analiza na żywo
          </span>
</div>
</div>

</section>
<section className="py-32 bg-[#F5F5F5] border-t border-[#1A1A1A]/5" id="cennik">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-4xl font-bold tracking-tight text-[#1A1A1A] mb-6">
            Proste, przejrzyste inwestycje.
          </h2>
<div className="inline-block bg-[#A3D8D4]/20 border border-[#A3D8D4] rounded-lg px-6 py-3 mb-4">
<p className="text-lg font-bold text-[#1A1A1A]">
              Jednorazowy koszt pełnego wdrożenia, nauki systemu i konfiguracji:
              <span className="text-[#A3D8D4] bg-[#1A1A1A] px-2 py-1 rounded-md ml-1 border-dance zoom-pulse rotate-3d">
                4100 zł netto
              </span>
</p>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
<div className="bg-[#FFFFFF] rounded-lg p-8 border border-[#1A1A1A]/10 soft-shadow flex flex-col transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:border-[#D4AF37] relative z-10 hover:z-20 cursor-default" data-aos="fade-up">
<h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
              Essential (Site Only)
            </h3>
<p className="text-sm text-[#1A1A1A]/60 mb-6 h-10">
              Idealne dla gabinetów, które chcą sprawdzić, jak działa asystent
              na żywym organizmie.
            </p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-[#1A1A1A]">
                1897 zł
              </span>
<span className="text-sm font-medium text-[#1A1A1A]/50">/ mies.</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Inteligentny bot na Twoją stronę www
              </li>
<li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Pełna baza wiedzy o Twoich zabiegach
              </li>
<li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Przekierowanie do Booksy na końcu rozmowy
              </li>
<li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Podstawowy support (odpowiedź do 48h)
              </li>
</ul>
<button className="w-full text-center bg-[#F5F5F5] text-[#1A1A1A] border border-[#1A1A1A]/10 text-base font-bold px-6 py-4 rounded-lg hover:bg-[#EAEAEA] transition-all cursor-pointer" onclick="openModal('Essential')">
              Wybieram ten plan
            </button>
</div>
<div className="bg-[#1A1A1A] rounded-lg p-8 border border-[#1A1A1A] soft-shadow flex flex-col relative overflow-hidden transform lg:-translate-y-4 transition-all duration-500 hover:-translate-y-6 lg:hover:-translate-y-8 hover:shadow-[0_0_50px_rgba(212,175,55,0.8)] hover:border-[#D4AF37] z-10 hover:z-20 cursor-default" data-aos="fade-up" data-aos-delay="150">
<div className="absolute top-0 right-0 bg-[#A3D8D4] text-[#1A1A1A] text-xs font-bold px-4 py-1.5 rounded-bl-lg shimmer-effect">
              Najczęstszy wybór
            </div>
<h3 className="text-xl font-bold text-[#FFFFFF] mb-1">
              Professional (Site + Socials)
            </h3>
<p className="text-sm text-[#FFFFFF]/60 mb-6 h-10">
              Kompleksowa obsługa wszystkich kanałów. Konwersja z Instagrama i
              strony www w jednym miejscu.
            </p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-[#FFFFFF]">
                2497 zł
              </span>
<span className="text-sm font-medium text-[#FFFFFF]/50">/ mies.</span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-[#FFFFFF] font-bold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Wszystko z planu Essential
              </li>
<li className="flex items-start gap-3 text-sm text-[#FFFFFF] font-bold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Integracja: Instagram DM
              </li>
<li className="flex items-start gap-3 text-sm text-[#FFFFFF] font-bold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Integracja: Messenger &amp; WhatsApp
              </li>
<li className="flex items-start gap-3 text-sm text-[#FFFFFF]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Aktywne protokoły zbierania leadów
              </li>
<li className="flex items-start gap-3 text-sm text-[#FFFFFF]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Szybki support (odpowiedź do 24h)
              </li>
</ul>
<button className="w-full text-center bg-[#B8860B] text-[#FFFFFF] text-base font-bold px-6 py-4 rounded-lg cursor-pointer extravagant-button" onclick="openModal('Professional')">
              Wybieram ten plan
            </button>
</div>
<div className="bg-[#FFFFFF] rounded-lg p-8 border border-[#1A1A1A]/10 soft-shadow flex flex-col transition-all duration-500 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:border-[#D4AF37] relative z-10 hover:z-20 cursor-default" data-aos="fade-up" data-aos-delay="300">
<h3 className="text-xl font-bold text-[#1A1A1A] mb-1">
              Enterprise (Consulting/Custom)
            </h3>
<p className="text-sm text-[#1A1A1A]/60 mb-6 h-10">
              Dla dużych klinik i sieci, które wymagają pełnej integracji z
              własnymi systemami CRM.
            </p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-[#1A1A1A]">
                Wycena
              </span>
</div>
<ul className="space-y-4 mb-10 flex-1">
<li className="flex items-start gap-3 text-sm text-[#1A1A1A] font-bold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Wszystko z planu Professional
              </li>
<li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Strategia i prompty uszyte na miarę (Bespoke AI)
              </li>
<li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Dedykowany Opiekun Klienta
              </li>
<li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Osobista integracja z CRM/ERP kliniki (API)
              </li>
<li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Priorytetowy support (odpowiedź do 6h)
              </li>
<li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Testy A/B powitań (optymalizacja konwersji)
              </li>
<li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80 font-semibold">
<iconify-icon className="text-[#A3D8D4] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                Funkcja RECALL (Automatyczna Reaktywacja Pacjentów)
              </li>
</ul>
<button className="w-full text-center bg-[#F5F5F5] text-[#1A1A1A] border border-[#1A1A1A]/10 text-base font-bold px-6 py-4 rounded-lg hover:bg-[#EAEAEA] transition-all cursor-pointer" onclick="openModal('Enterprise')">
              Wybieram ten plan
            </button>
</div>
</div>
</div>
</section>

<section className="bg-[#FFFFFF] py-32">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] mb-12 text-center">
          Często zadawane pytania
        </h2>
<div className="space-y-4" data-aos="zoom-in">
<details className="group bg-[#F5F5F5] rounded-lg border border-[#1A1A1A]/5 [&amp;_summary::-webkit-details-marker]:hidden soft-shadow" data-aos="fade-right">
<summary className="flex justify-between items-center font-bold cursor-pointer list-none px-6 py-5 text-[#1A1A1A]">
              Czy to oznacza, że muszę zwolnić kogoś z recepcji?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-[#1A1A1A]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#1A1A1A]/70 leading-relaxed border-t border-[#1A1A1A]/5 pt-4 font-medium">
              Absolutnie nie. Asystent to wsparcie, nie zamiennik. Przejmuje na
              siebie rutynowe zapytania, dzięki czemu Twój zespół ma czas zająć
              się pacjentami w poczekalni i budowaniem prawdziwych relacji.
            </div>
</details>
<details className="group bg-[#F5F5F5] rounded-lg border border-[#1A1A1A]/5 [&amp;_summary::-webkit-details-marker]:hidden soft-shadow" data-aos="fade-left">
<summary className="flex justify-between items-center font-bold cursor-pointer list-none px-6 py-5 text-[#1A1A1A]">
              Co z RODO i poufnością danych medycznych?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-[#1A1A1A]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#1A1A1A]/70 leading-relaxed border-t border-[#1A1A1A]/5 pt-4 font-medium">
              Bezpieczeństwo to nasz priorytet. Asystent nie przechowuje
              historii medycznej ani wrażliwych danych. Służy wyłącznie jako
              bezpieczny pomost do systemu rezerwacyjnego.
            </div>
</details>
<details className="group bg-[#F5F5F5] rounded-lg border border-[#1A1A1A]/5 [&amp;_summary::-webkit-details-marker]:hidden soft-shadow" data-aos="fade-right">
<summary className="flex justify-between items-center font-bold cursor-pointer list-none px-6 py-5 text-[#1A1A1A]">
              Jak szybko zauważę wzrost zysków?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-[#1A1A1A]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#1A1A1A]/70 leading-relaxed border-t border-[#1A1A1A]/5 pt-4 font-medium">
              Nasze partnerskie gabinety zazwyczaj obserwują nagły przypływ
              umówionych wizyt pochodzących z nocnych i weekendowych zapytań już
              w pierwszym tygodniu od uruchomienia.
            </div>
</details>
<details className="group bg-[#F5F5F5] rounded-lg border border-[#1A1A1A]/5 [&amp;_summary::-webkit-details-marker]:hidden soft-shadow" data-aos="fade-left">
<summary className="flex justify-between items-center font-bold cursor-pointer list-none px-6 py-5 text-[#1A1A1A]">
              A co jeśli bot poda złą informację medyczną?
              <span className="transition group-open:rotate-180">
<iconify-icon className="text-[#1A1A1A]/50" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#1A1A1A]/70 leading-relaxed border-t border-[#1A1A1A]/5 pt-4 font-medium">
              Nie ma na to szans. System opiera się w 100% na autoryzowanej
              bazie wiedzy, którą wspólnie ustalamy. Zawsze informuje, że
              ostateczna kwalifikacja odbywa się w gabinecie. Zero diagnoz, sama
              rzetelna edukacja.
            </div>
</details>
</div>
</div>
</section>

<section className="bg-[#000000] min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden pt-32 pb-32 mt-12" id="final-cta-section">
<div className="fixed inset-0 bg-[#FFFFFF] opacity-0 pointer-events-none z-[999] transition-opacity duration-1000" id="flash-overlay"></div>
<div className="max-w-4xl mx-auto flex flex-col items-center justify-center flex-1 w-full space-y-24" data-aos="fade-up">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#FFFFFF] leading-relaxed">
          A teraz zastanów się, czy rozwiązanie które oferujemy przemawia do
          Ciebie?
          <br/>
<br/>
          Czy przemawia do Ciebie lepsza obsługa Twoich pacjentów?
          <br/>
<br/>
          Czy przemawia do Ciebie potencjalne zwiększenie przychodu nawet o
          <span className="text-[#D4AF37]">20%</span>
          ?
        </h2>
<div>
<button className="relative group inline-flex items-center justify-center bg-transparent text-[#FFFFFF] border-2 border-[#D4AF37] font-bold text-2xl px-16 py-6 rounded-full overflow-hidden hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_80px_rgba(212,175,55,0.8)] transition-all duration-500 cursor-pointer" onclick="triggerFlashAndModal()">
<span className="relative z-10 group-hover:text-[#000000] transition-colors duration-500">
              Wdrażam
            </span>
<div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
</button>
</div>
</div>
<div className="w-full max-w-7xl mx-auto px-6 border-t border-[#FFFFFF]/10 pt-12 mt-32 flex flex-col md:flex-row items-center justify-between gap-6 opacity-50 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-2 text-[#FFFFFF]">
<iconify-icon className="text-xl text-[#A3D8D4]" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="font-bold tracking-tighter">HAPPY ANSWER</span>
</div>
<div className="flex items-center gap-8 text-sm text-[#FFFFFF] font-semibold">
<a className="hover:text-[#D4AF37] transition-colors hover:-translate-y-1 inline-block" href="#">
            Polityka Prywatności
          </a>
<a className="hover:text-[#D4AF37] transition-colors hover:-translate-y-1 inline-block" href="#">
            Regulamin
          </a>
<a className="hover:text-[#D4AF37] transition-colors hover:-translate-y-1 inline-block" href="#">
            Kontakt
          </a>
</div>
<p className="text-xs text-[#FFFFFF] font-semibold">
          © 2024 AILINE. Wszelkie prawa zastrzeżone.
        </p>
</div>
</section>

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center bg-[#1A1A1A]/40 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="leadModal">
<div className="bg-[#111111]/95 backdrop-blur-xl border border-[#D4AF37]/20 rounded-2xl w-full max-w-lg p-8 md:p-10 relative soft-shadow transform scale-95 transition-transform duration-300 mx-4 shadow-[0_0_50px_rgba(0,0,0,0.5)]" id="modalContent">
<button className="absolute top-4 right-4 text-[#FFFFFF]/40 hover:text-[#FFFFFF] transition-colors cursor-pointer z-50" onclick="closeModal()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<div id="formSection">
<div className="transition-all duration-500 animate-[fade-in_0.3s_ease-out]" id="step-1">
<div className="text-[#D4AF37] mb-4 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Krok 1/3
            </div>
<h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-2 tracking-tight">
              Sprawdź, ile pacjentów ucieka Twojej klinice
            </h3>
<p className="text-sm text-[#FFFFFF]/60 mb-8 leading-relaxed font-medium">
              Wybierz główny obszar, który wymaga automatyzacji:
            </p>
<div className="space-y-4">
<button className="w-full text-left p-5 rounded-xl border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300 group flex items-center gap-5 cursor-pointer" onclick="document.getElementById('step-1').classList.add('hidden'); document.getElementById('step-2').classList.remove('hidden');" type="button">
<div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-300 shadow-inner">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<span className="text-[#FFFFFF] font-semibold text-base group-hover:text-[#D4AF37] transition-colors">
                  Nieodebrane telefony i brak terminów
                </span>
</button>
<button className="w-full text-left p-5 rounded-xl border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300 group flex items-center gap-5 cursor-pointer" onclick="document.getElementById('step-1').classList.add('hidden'); document.getElementById('step-2').classList.remove('hidden');" type="button">
<div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-300 shadow-inner">
<iconify-icon className="text-2xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<span className="text-[#FFFFFF] font-semibold text-base group-hover:text-[#D4AF37] transition-colors">
                  Zalew pytań na Instagramie/Messengerze
                </span>
</button>
<button className="w-full text-left p-5 rounded-xl border border-[#FFFFFF]/10 bg-[#FFFFFF]/5 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37] transition-all duration-300 group flex items-center gap-5 cursor-pointer" onclick="document.getElementById('step-1').classList.add('hidden'); document.getElementById('step-2').classList.remove('hidden');" type="button">
<div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#D4AF37] group-hover:scale-110 transition-transform duration-300 shadow-inner">
<iconify-icon className="text-2xl" icon="solar:moon-stars-linear"></iconify-icon>
</div>
<span className="text-[#FFFFFF] font-semibold text-base group-hover:text-[#D4AF37] transition-colors">
                  Brak rezerwacji w nocy i w weekendy
                </span>
</button>
</div>
</div>
<div className="hidden transition-all duration-500 animate-[fade-in_0.3s_ease-out]" id="step-2">
<button className="absolute top-4 left-4 text-[#FFFFFF]/40 hover:text-[#FFFFFF] transition-colors cursor-pointer flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold z-50" onclick="document.getElementById('step-2').classList.add('hidden'); document.getElementById('step-1').classList.remove('hidden');" type="button">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
              Wstecz
            </button>
<div className="text-[#D4AF37] mb-4 mt-6 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Krok 2/3
            </div>
<h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-2 tracking-tight">
              Skala Twojego biznesu
            </h3>
<p className="text-sm text-[#FFFFFF]/60 mb-8 leading-relaxed font-medium">
              Ile wizyt miesięcznie obsługuje obecnie Twój zespół?
            </p>
<div className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-xl p-8 mb-8 text-center relative overflow-hidden group hover:border-[#D4AF37]/30 transition-colors">
<div className="text-5xl font-bold text-[#D4AF37] mb-2 drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all" id="visits-value">
                500
              </div>
<div className="text-sm text-[#FFFFFF]/60 font-medium">
                Wizyt miesięcznie
              </div>
<div className="mt-8 relative">
<input className="w-full h-2 bg-[#FFFFFF]/20 rounded-lg appearance-none cursor-pointer accent-[#D4AF37]" max="1000" min="50" oninput="document.getElementById('visits-value').innerText = this.value + (this.value == 1000 ? '+' : '');" step="50" type="range" value="500"/>
</div>
<div className="mt-8 pt-6 border-t border-[#FFFFFF]/10">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
<iconify-icon className="text-[#D4AF37] text-lg" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-[#D4AF37] font-bold text-sm pulse-anim">
                    Potential Revenue Gain: +20%
                  </span>
</div>
</div>
</div>
<button className="w-full bg-[#D4AF37] text-[#1A1A1A] px-6 py-4 rounded-xl hover:bg-[#b5952f] transition-all text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 cursor-pointer" onclick="document.getElementById('step-2').classList.add('hidden'); document.getElementById('step-3').classList.remove('hidden');" type="button">
              Dalej
              <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="hidden transition-all duration-500 animate-[fade-in_0.3s_ease-out]" id="step-3">
<button className="absolute top-4 left-4 text-[#FFFFFF]/40 hover:text-[#FFFFFF] transition-colors cursor-pointer flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold z-50" onclick="document.getElementById('step-3').classList.add('hidden'); document.getElementById('step-2').classList.remove('hidden');" type="button">
<iconify-icon className="text-lg" icon="solar:alt-arrow-left-linear"></iconify-icon>
              Wstecz
            </button>
<div className="text-[#D4AF37] mb-4 mt-6 text-sm font-bold tracking-widest uppercase flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Finał
            </div>
<h3 className="text-2xl md:text-3xl font-bold text-[#FFFFFF] mb-3 tracking-tight">
              Zostań liderem innowacji w swojej okolicy
            </h3>
<p className="text-sm text-[#FFFFFF]/60 mb-8 leading-relaxed font-medium">
              Nasze rozwiązanie wdrażamy tylko w wybranych klinikach, aby
              zapewnić najwyższą jakość wsparcia. Zostaw dane, a przygotujemy
              dla Ciebie dedykowaną symulację zysków.
            </p>
<form className="space-y-6" id="leadForm" onsubmit="submitForm(event)">
<div className="relative group">
<iconify-icon className="absolute left-0 bottom-3 text-[#FFFFFF]/50 text-xl group-focus-within:text-[#D4AF37] transition-colors" icon="solar:user-linear"></iconify-icon>
<input className="w-full bg-transparent border-b border-[#FFFFFF]/20 pl-10 pr-0 py-3 text-base text-[#FFFFFF] font-medium focus:outline-none focus:border-[#D4AF37] transition-all placeholder-[#FFFFFF]/30" placeholder="Imię i Nazwisko *" required="" type="text"/>
</div>
<div className="relative group">
<iconify-icon className="absolute left-0 bottom-3 text-[#FFFFFF]/50 text-xl group-focus-within:text-[#D4AF37] transition-colors" icon="solar:hospital-linear"></iconify-icon>
<input className="w-full bg-transparent border-b border-[#FFFFFF]/20 pl-10 pr-0 py-3 text-base text-[#FFFFFF] font-medium focus:outline-none focus:border-[#D4AF37] transition-all placeholder-[#FFFFFF]/30" placeholder="Nazwa Kliniki / Gabinetu *" required="" type="text"/>
</div>
<div className="relative group">
<iconify-icon className="absolute left-0 bottom-3 text-[#FFFFFF]/50 text-xl group-focus-within:text-[#D4AF37] transition-colors" icon="solar:phone-linear"></iconify-icon>
<input className="w-full bg-transparent border-b border-[#FFFFFF]/20 pl-10 pr-0 py-3 text-base text-[#FFFFFF] font-medium focus:outline-none focus:border-[#D4AF37] transition-all placeholder-[#FFFFFF]/30" placeholder="Numer telefonu *" required="" type="tel"/>
</div>
<button className="w-full bg-[#D4AF37] text-[#1A1A1A] text-sm font-bold tracking-widest uppercase px-6 py-5 rounded-xl hover:bg-[#b5952f] transition-all mt-4 cursor-pointer shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] flex items-center justify-center gap-2 group" type="submit">
                GENERUJ SYMULACJĘ ZYSKÓW
                <iconify-icon className="text-xl group-hover:rotate-12 transition-transform" icon="solar:magic-stick-3-linear"></iconify-icon>
</button>
<div className="text-center mt-6 space-y-3">
<p className="text-xs text-[#FFFFFF]/50 leading-relaxed max-w-[90%] mx-auto">
                  Dołącz do grona innowacyjnych klinik, które wyznaczają nowe
                  standardy obsługi pacjenta 24/7.
                </p>
<p className="text-[11px] text-[#A3D8D4]/70 flex items-center justify-center gap-1.5 font-semibold">
<iconify-icon className="text-sm" icon="solar:shield-check-bold"></iconify-icon>
                  Pełna poufność danych medycznych i zgodność z RODO.
                </p>
</div>
</form>
</div>
</div>
<div className="hidden flex-col items-center justify-center py-16 text-center animate-[fade-in_0.5s_ease-out]" id="successMessage">
<div className="w-20 h-20 bg-[#D4AF37]/20 rounded-full flex items-center justify-center text-[#D4AF37] mb-6 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
<iconify-icon className="text-5xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<h3 className="text-3xl font-bold text-[#FFFFFF] mb-3 tracking-tight">
            Dziękujemy!
          </h3>
<p className="text-base text-[#FFFFFF]/70 font-medium max-w-sm mx-auto leading-relaxed">
            Twoje zgłoszenie zostało przyjęte. Przygotujemy symulację i
            skontaktujemy się z Tobą wkrótce.
          </p>
</div>
</div>
</div>



<div className="fixed inset-0 z-[9999] bg-[#000000] hidden flex-col items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500" id="super-animation-overlay">
<div className="absolute inset-0 z-0 opacity-0 transition-opacity duration-[1500ms]" id="anim-stars">
<div className="anim-star w-2 h-2 top-[10%] left-[20%]" style={{animationDuration: '2s', animationDelay: '0.1s'}}></div>
<div className="anim-star w-3 h-3 top-[30%] left-[80%]" style={{animationDuration: '1.5s', animationDelay: '0.5s'}}></div>
<div className="anim-star w-1.5 h-1.5 top-[70%] left-[40%] bg-[#FFFFFF]" style={{animationDuration: '2.5s', animationDelay: '0.3s'}}></div>
<div className="anim-star w-2.5 h-2.5 top-[50%] left-[10%]" style={{animationDuration: '1.8s', animationDelay: '0.8s'}}></div>
<div className="anim-star w-2 h-2 top-[80%] left-[85%] bg-[#FFFFFF]" style={{animationDuration: '2.2s', animationDelay: '0.2s'}}></div>
<div className="anim-star w-3 h-3 top-[15%] left-[60%]" style={{animationDuration: '1.7s', animationDelay: '0.6s'}}></div>
<div className="anim-star w-2 h-2 top-[85%] left-[25%] bg-[#FFFFFF]" style={{animationDuration: '2.1s', animationDelay: '0.9s'}}></div>
<div className="anim-star w-1.5 h-1.5 top-[45%] left-[75%]" style={{animationDuration: '1.6s', animationDelay: '0.4s'}}></div>
<div className="anim-star w-4 h-4 top-[20%] left-[40%]" style={{animationDuration: '2.8s', animationDelay: '0.7s'}}></div>
<div className="anim-star w-2 h-2 top-[60%] left-[90%]" style={{animationDuration: '1.9s', animationDelay: '0.1s'}}></div>
<div className="anim-star w-2.5 h-2.5 top-[35%] left-[15%] bg-[#FFFFFF]" style={{animationDuration: '2.4s', animationDelay: '0.5s'}}></div>
<div className="anim-star w-3 h-3 top-[75%] left-[65%]" style={{animationDuration: '2.0s', animationDelay: '0.3s'}}></div>
<div className="anim-star w-1 h-1 top-[5%] left-[85%]" style={{animationDuration: '1.5s', animationDelay: '0.8s'}}></div>
<div className="anim-star w-2 h-2 top-[95%] left-[10%]" style={{animationDuration: '2.2s', animationDelay: '0.2s'}}></div>
<div className="anim-star w-3.5 h-3.5 top-[55%] left-[50%] bg-[#FFFFFF]" style={{animationDuration: '2.6s', animationDelay: '0.6s'}}></div>
<div className="anim-star w-2.5 h-2.5 top-[25%] left-[90%]" style={{animationDuration: '1.7s', animationDelay: '0.4s'}}></div>
<div className="anim-star w-1.5 h-1.5 top-[65%] left-[20%] bg-[#FFFFFF]" style={{animationDuration: '2.1s', animationDelay: '0.7s'}}></div>
<div className="anim-star w-3 h-3 top-[40%] left-[50%]" style={{animationDuration: '2.5s', animationDelay: '0.2s'}}></div>
</div>
<div className="text-center text-[#FFFFFF] relative w-full h-full flex flex-col items-center justify-center px-4 max-w-5xl mx-auto z-10">
<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight opacity-0 absolute transition-all duration-[1500ms] transform scale-95 gold-frame" id="anim-text-1" style={{textShadow: '0 0 30px rgba(255,255,255,0.4)'}}>
          Pacjenci Ci za to podziękują
        </h2>
<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight opacity-0 absolute transition-all duration-[1500ms] transform scale-95 gold-frame" id="anim-text-2" style={{textShadow: '0 0 30px rgba(255,255,255,0.4)'}}>
          Pokaż im, że dbasz o nich
        </h2>
<h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight opacity-0 absolute transition-all duration-[1500ms] transform scale-95 gold-frame" id="anim-text-3" style={{textShadow: '0 0 30px rgba(255,255,255,0.4)'}}>
          Pokaż że Ci na nich zależy
        </h2>
<h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold tracking-tight opacity-0 absolute transition-all duration-[1500ms] transform scale-95 px-4 gold-frame" id="anim-text-4" style={{textShadow: '0 0 30px rgba(255,255,255,0.4)'}}>
          Nie pozwól im odejść do konkurencji...
        </h2>
<h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter opacity-0 absolute transform scale-90" id="anim-text-last" style={{transition: 'all 4s cubic-bezier(0.2, 0.8, 0.2, 1)'}}>
          Zaczynamy
        </h2>
</div>
</div>



    </>
  );
}
