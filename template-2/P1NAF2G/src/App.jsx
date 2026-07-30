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
        // Render lucide icons with 1.5 stroke width
        if (window.lucide && typeof lucide.createIcons === 'function') {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        const overlay = document.getElementById('quizOverlay');
        const overlayBg = document.getElementById('overlayBg');
        const quizPanel = document.getElementById('quizPanel');
        const startBtn = document.getElementById('startTestBtn');
        const closeBtn = document.getElementById('closeQuizBtn');
        const stepLabel = document.getElementById('stepLabel');
        const progressBar = document.getElementById('progressBar');
        const steps = Array.from(document.querySelectorAll('.step-section'));
        const totalSteps = steps.length; // 6 (steps 2..7)
        const absoluteStart = 2; // Etapa 2
        const absoluteTotal = 7; // Até Etapa 7

        let currentStep = 0;
        let branch = null;

        function updateLabel() {
          const absoluteStep = absoluteStart + currentStep;
          stepLabel.textContent = `Etapa ${absoluteStep} de ${absoluteTotal}`;
        }

        function updateProgress() {
          const pct = ((currentStep + 1) / totalSteps) * 100;
          progressBar.style.width = `${pct}%`;
        }

        function showStep(index) {
          steps.forEach((s, i) => s.classList.toggle('hidden', i !== index));
          currentStep = index;
          updateLabel();
          updateProgress();
        }

        function resetQuiz() {
          // Clear selections
          document.querySelectorAll('.option.selected').forEach(el => el.classList.remove('selected'));
          document.querySelectorAll('.option[aria-checked="true"]').forEach(el => el.setAttribute('aria-checked', 'false'));
          // Hide all results
          document.querySelectorAll('[data-result]').forEach(el => el.classList.add('hidden'));
          branch = null;
          showStep(0);
        }

        function openOverlay() {
          overlay.classList.remove('hidden');
          requestAnimationFrame(() => {
            overlayBg.style.opacity = '1';
            quizPanel.style.opacity = '1';
            quizPanel.style.transform = 'translateY(0)';
          });
          resetQuiz();
        }

        function closeOverlay() {
          overlayBg.style.opacity = '0';
          quizPanel.style.opacity = '0';
          quizPanel.style.transform = 'translateY(1rem)';
          setTimeout(() => {
            overlay.classList.add('hidden');
          }, 250);
        }

        startBtn?.addEventListener('click', (e) => {
          e.preventDefault();
          openOverlay();
        });
        // Support for additional "open quiz" buttons (e.g., Sobre section)
        document.querySelectorAll('[data-open-quiz]').forEach(el => {
          el.addEventListener('click', (e) => {
            e.preventDefault();
            openOverlay();
          });
        });

        closeBtn?.addEventListener('click', () => closeOverlay());
        overlayBg?.addEventListener('click', () => closeOverlay());

        // Option behavior
        steps.forEach((step, stepIndex) => {
          step.querySelectorAll('.option').forEach(btn => {
            btn.addEventListener('click', () => {
              // Set selection within this step
              step.querySelectorAll('.option').forEach(o => {
                o.classList.remove('selected');
                o.setAttribute('aria-checked', 'false');
              });
              btn.classList.add('selected');
              btn.setAttribute('aria-checked', 'true');

              // Capture branch on first step
              if (stepIndex === 0 && btn.dataset.branch) {
                branch = btn.dataset.branch;
              }

              // If last question step, go to result
              if (stepIndex === 4) {
                // Show result matching branch
                const resultSelector = branch ? `[data-result="${branch}"]` : null;
                if (resultSelector) {
                  document.querySelectorAll('[data-result]').forEach(el => el.classList.add('hidden'));
                  const resultEl = document.querySelector(resultSelector);
                  if (resultEl) resultEl.classList.remove('hidden');
                }
                showStep(5);
              } else {
                // Advance to next step
                setTimeout(() => showStep(stepIndex + 1), 180);
              }
            });
          });
        });

        // Initialize state
        showStep(0);

        // Testimonial slider controls
        const track = document.getElementById('testimonialTrack');
        const prevBtn = document.getElementById('testiPrev');
        const nextBtn = document.getElementById('testiNext');
        const prevBtnMobile = document.getElementById('testiPrevMobile');
        const nextBtnMobile = document.getElementById('testiNextMobile');

        function scrollAmount() {
          return Math.max(280, Math.floor(track.clientWidth * 0.9));
        }

        function goPrev() {
          track?.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
        }
        function goNext() {
          track?.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        }

        prevBtn?.addEventListener('click', goPrev);
        nextBtn?.addEventListener('click', goNext);
        prevBtnMobile?.addEventListener('click', goPrev);
        nextBtnMobile?.addEventListener('click', goNext);
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
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url('Você.png')`}}></div>

<div className="absolute inset-0 bg-[#1B0F23]/70 mix-blend-multiply"></div>

<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-24 -right-16 w-[48rem] h-[48rem] rounded-full blur-[120px] opacity-30 bg-[#4B0082]"></div>
<div className="absolute bottom-0 -left-10 w-[36rem] h-[36rem] rounded-full blur-[140px] opacity-20 bg-[#FFD700]"></div>
</div>

<div className="absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 1px)`, backgroundSize: `24px 24px`}}></div>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-6">
<a className="inline-flex items-center gap-2" href="#">
<span className="text-[15px] sm:text-base font-medium tracking-tight text-white/90">Pai Marcel</span>
</a>
<nav className="hidden sm:flex items-center gap-6">
<a className="text-sm font-normal text-white/70 hover:text-white transition-colors" href="#sobre">Sobre</a>
<a className="text-sm font-normal text-white/70 hover:text-white transition-colors" href="#depoimentos">Depoimentos</a>
<a className="text-sm font-normal text-white/70 hover:text-white transition-colors" href="#">Contato</a>
</nav>
</div>

<nav className="sm:hidden -mt-3 pb-4 flex items-center gap-6">
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#sobre">Sobre</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#depoimentos">Depoimentos</a>
<a className="text-sm font-normal text-white/80 hover:text-white transition-colors" href="#">Contato</a>
</nav>
</div>
</header>

<main className="relative z-10">
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="min-h-[70vh] sm:min-h-[78vh] lg:min-h-[82vh] flex items-center">
<div className="w-full">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
<svg className="lucide lucide-sparkles w-4 h-4 text-[#FFD700]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-[12.5px] font-medium text-[#E6D7FF]">Leitura inicial gratuita</span>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white">
                🔮 Descubra agora se o seu relacionamento tem futuro
              </h1>
<p className="mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed text-[#E6D7FF] max-w-xl">
                Responda 5 perguntas rápidas e receba minha análise inicial gratuita sobre o que está acontecendo e como reverter.
              </p>
<div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
<a className="group inline-flex items-center justify-center gap-2 text-[15px] transition-all hover:bg-[#6A0DAD]/90 ring-1 ring-white/10 shadow-[0_10px_30px_-10px_rgba(106,13,173,0.8)] hover:shadow-[0_16px_40px_-12px_rgba(106,13,173,0.95)] font-semibold text-white tracking-tight bg-[#6A0DAD] rounded-xl pt-3 pr-6 pb-3 pl-6" href="#" id="startTestBtn">
<span className="">Começar teste gratuito</span>
<svg className="lucide lucide-chevron-right transition-transform group-hover:translate-x-0.5 w-[20px] h-[20px]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<div className="flex items-center gap-3">
<div className="flex -space-x-3">
<img alt="Pessoa 1" className="h-9 w-9 rounded-full ring-2 ring-[#1B0F23] object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=64&auto=format&fit=crop" />
<img alt="Pessoa 2" className="h-9 w-9 rounded-full ring-2 ring-[#1B0F23] object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=64&auto=format&fit=crop" />
<img alt="Pessoa 3" className="h-9 w-9 rounded-full ring-2 ring-[#1B0F23] object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=64&auto=format&fit=crop" />
</div>
<span className="text-sm text-white/80 font-normal">+2.000 leituras esta semana</span>
</div>
</div>

<div className="mt-6 flex items-center gap-3 text-white/70">
<svg className="lucide lucide-shield-check w-5 h-5 text-[#FFD700]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<p className="text-sm font-normal">Privado e confidencial • Sem cartão necessário</p>
</div>
</div>
</div>
</div>
</section>

<div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-1/2">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-px w-full bg-gradient-to-r from-transparent via-[#FFD700]/40 to-transparent"></div>
</div>
</div>
</main>

<section className="relative z-10" id="sobre">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Sobre</h2>
<div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/85">
<p className="">Oi, aqui é o Pai Marcel. Eu sei como é sentir que alguém especial está se afastando ou que ainda nem conseguimos criar uma conexão. Eu já ajudei muitas pessoas que passaram exatamente por isso, e quero te mostrar que há um caminho para mudar essa situação.</p>
<p className="">Com essa análise, eu vou olhar para o seu caso de forma individual e cuidadosa. Vou te mostrar:</p>
<ul className="list-disc pl-5 space-y-2 text-white/85">
<li className="">O que está bloqueando a conexão entre vocês;</li>
<li className="">Como reverter o afastamento antes que ele se torne definitivo;</li>
<li className="">Como criar ou reacender um vínculo verdadeiro e duradouro.</li>
</ul>
<p className="">Não é uma fórmula pronta — cada orientação é feita pensando em você, na sua história e nas suas emoções. Meu objetivo é que você consiga despertar interesse, fortalecer vínculos e abrir portas para algo real e positivo.</p>
<p>Se você sente que é hora de agir, clique no botão e eu vou te mostrar exatamente como podemos transformar seu caso.</p>
</div>
<div className="mt-6">
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-white font-semibold text-[15px] tracking-tight transition-all bg-[#6A0DAD] hover:bg-[#6A0DAD]/90 ring-1 ring-white/10" data-open-quiz="" href="#">
            Começar teste gratuito
            <svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="mt-10 h-px w-full bg-white/10"></div>
</div>
</section>

<section className="relative z-10" id="depoimentos" style={{backgroundColor: `#F9F9F9`, fontFamily: `'Poppins', ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial`, color: `#333333`}}>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold" style={{color: `#5A2E8A`}}>Depoimentos</h2>
<p className="mt-3 text-[15px] leading-relaxed max-w-3xl">
          Veja o que algumas pessoas que passaram pelo meu acompanhamento têm a dizer. Cada história é única, mas todas mostram como é possível transformar relações com orientação e energia certas.
        </p>
<div className="mt-6 relative">

<div className="absolute -top-12 right-0 hidden sm:flex items-center gap-2">
<button aria-label="Anterior" className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-black/10 bg-white hover:bg-black/5 transition" id="testiPrev">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Próximo" className="inline-flex items-center justify-center h-9 w-9 rounded-lg border border-black/10 bg-white hover:bg-black/5 transition" id="testiNext">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2" id="testimonialTrack">

<article className="min-w-[85%] sm:min-w-[360px] max-w-[420px] snap-center rounded-2xl ring-1 ring-black/5" style={{background: `#FFFFFF`, boxShadow: `0px 4px 15px rgba(0,0,0,0.1)`}}>
<div className="p-5">
<div className="flex items-center gap-3">
<img alt="Amanda S." className="h-12 w-12 rounded-full object-cover ring-2 ring-white" src="https://linkdafoto.com/amanda.jpg" style={{borderRadius: `50%`}} />
<div>
<p className="text-[15px] font-medium" style={{color: `#333333`}}>Amanda S.</p>
<p className="text-[13px]" style={{color: `#666666`}}>28 anos</p>
</div>
</div>
<p className="mt-4 text-[15px]" style={{color: `#333333`}}>Eu não sabia mais o que fazer para me reaproximar dele. A análise do Pai Marcel me deu clareza e me mostrou exatamente como agir. Hoje conseguimos conversar de forma leve e o carinho voltou a crescer.</p>
</div>
</article>

<article className="min-w-[85%] sm:min-w-[360px] max-w-[420px] snap-center rounded-2xl ring-1 ring-black/5" style={{background: `#FFFFFF`, boxShadow: `0px 4px 15px rgba(0,0,0,0.1)`}}>
<div className="p-5">
<div className="flex items-center gap-3">
<img alt="Carlos M." className="h-12 w-12 rounded-full object-cover ring-2 ring-white" src="https://linkdafoto.com/carlos.jpg" style={{borderRadius: `50%`}} />
<div>
<p className="text-[15px] font-medium" style={{color: `#333333`}}>Carlos M.</p>
<p className="text-[13px]" style={{color: `#666666`}}>32 anos</p>
</div>
</div>
<p className="mt-4 text-[15px]" style={{color: `#333333`}}>Sempre me senti perdido com relação a ela. Depois da leitura personalizada, consegui entender os bloqueios e, com as orientações, nossa relação começou a se abrir novamente. Recomendo muito!</p>
</div>
</article>

<article className="min-w-[85%] sm:min-w-[360px] max-w-[420px] snap-center rounded-2xl ring-1 ring-black/5" style={{background: `#FFFFFF`, boxShadow: `0px 4px 15px rgba(0,0,0,0.1)`}}>
<div className="p-5">
<div className="flex items-center gap-3">
<img alt="Juliana P." className="h-12 w-12 rounded-full object-cover ring-2 ring-white" src="https://linkdafoto.com/juliana.jpg" style={{borderRadius: `50%`}} />
<div>
<p className="text-[15px] font-medium" style={{color: `#333333`}}>Juliana P.</p>
<p className="text-[13px]" style={{color: `#666666`}}>25 anos</p>
</div>
</div>
<p className="mt-4 text-[15px]" style={{color: `#333333`}}>Nunca tinha tido contato com ele, mas queria mudar isso. O Pai Marcel me mostrou o caminho certo para despertar interesse sem forçar nada. Hoje sinto que estamos conectando de forma verdadeira.</p>
</div>
</article>

<article className="min-w-[85%] sm:min-w-[360px] max-w-[420px] snap-center rounded-2xl ring-1 ring-black/5" style={{background: `#FFFFFF`, boxShadow: `0px 4px 15px rgba(0,0,0,0.1)`}}>
<div className="p-5">
<div className="flex items-center gap-3">
<img alt="Renato L." className="h-12 w-12 rounded-full object-cover ring-2 ring-white" src="https://linkdafoto.com/renato.jpg" style={{borderRadius: `50%`}} />
<div>
<p className="text-[15px] font-medium" style={{color: `#333333`}}>Renato L.</p>
<p className="text-[13px]" style={{color: `#666666`}}>30 anos</p>
</div>
</div>
<p className="mt-4 text-[15px]" style={{color: `#333333`}}>Estava há meses sem contato e quase perdi a esperança. A leitura detalhada me deu estratégias práticas e energia positiva para reaproximar a pessoa. Funcionou melhor do que eu imaginava!</p>
</div>
</article>
</div>

<div className="mt-4 flex sm:hidden justify-center gap-3">
<button aria-label="Anterior" className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-black/10 bg-white hover:bg-black/5 transition" id="testiPrevMobile">
<svg className="lucide lucide-chevron-left w-5 h-5" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Próximo" className="inline-flex items-center justify-center h-10 w-10 rounded-lg border border-black/10 bg-white hover:bg-black/5 transition" id="testiNextMobile">
<svg className="lucide lucide-chevron-right w-5 h-5" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-50 hidden" id="quizOverlay">
<div className="absolute inset-0 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 bg-black/60" id="overlayBg" style={{opacity: `0`}}></div>
<div className="relative mx-auto max-w-xl px-4 sm:px-6 h-full flex items-center justify-center">
<div className="w-full translate-y-4 opacity-0 transition-all duration-300" id="quizPanel" style={{opacity: `0`, transform: `translateY(1rem)`}}>
<div className="rounded-xl border border-white/10 bg-[#110918]/95 shadow-2xl ring-1 ring-white/10">

<div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-white/10">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#6A0DAD]/20 ring-1 ring-white/10">
<svg className="lucide lucide-sparkles w-4 h-4 text-[#FFD700]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<div>
<p className="text-[13px] text-white/60">Análise do Relacionamento</p>
<p aria-live="polite" className="text-sm sm:text-[15px] font-medium tracking-tight text-white/90" id="stepLabel">Etapa 2 de 7</p>
</div>
</div>
<button aria-label="Fechar" className="inline-flex items-center justify-center h-9 w-9 rounded-lg hover:bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition" id="closeQuizBtn">
<svg className="lucide lucide-x w-[18px] h-[18px]" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="px-5 sm:px-6 pt-3">
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-[#6A0DAD] rounded-full transition-all duration-300" id="progressBar" style={{width: `16.6667%`}}></div>
</div>
</div>

<div className="px-5 sm:px-6 py-6">

<section className="step-section" data-step-index="0">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold" id="q1">Situação atual</h2>
<p className="mt-2 text-[15px] text-[#E6D7FF]">Vamos começar... me conta com sinceridade: como está a relação entre vocês hoje?</p>
<div aria-labelledby="q1" className="mt-5 space-y-3" role="radiogroup">
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" data-branch="R1" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">💔 Estamos juntos, mas sinto que ele está se afastando de mim.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" data-branch="R2" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">😞 Terminamos há pouco tempo e eu quero ele de volta.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" data-branch="R3" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">🕰️ Estamos afastados há meses, mas não consigo esquecê-lo.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" data-branch="R4" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">✨ Nunca ficamos, mas quero conquistar o coração dele.</span>
</button>
</div>
</section>

<section className="step-section hidden" data-step-index="1">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold" id="q2">Principal preocupação</h2>
<p className="mt-2 text-[15px] text-[#E6D7FF]">Qual dessas situações mais tira o seu sono e aperta o coração?</p>
<div aria-labelledby="q2" className="mt-5 space-y-3" role="radiogroup">
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">💔 Tenho medo que ele não me ame mais.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">👀 Acho que existe outra pessoa na história.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">😢 Tenho medo de que nunca mais volte para mim.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">🤔 Não aguento mais viver sem saber o que ele sente.</span>
</button>
</div>
</section>

<section className="step-section hidden" data-step-index="2">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold" id="q3">Tempo de problema</h2>
<p className="mt-2 text-[15px] text-[#E6D7FF]">Há quanto tempo você sente que algo está errado entre vocês?</p>
<div aria-labelledby="q3" className="mt-5 space-y-3" role="radiogroup">
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">⏳ Há poucos dias.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">📆 Há semanas.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">📅 Há meses.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">📜 Há mais de um ano.</span>
</button>
</div>
</section>

<section className="step-section hidden" data-step-index="3">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold" id="q4">Tentativas anteriores</h2>
<p className="mt-2 text-[15px] text-[#E6D7FF]">Você já tentou fazer algo para mudar essa situação?</p>
<div aria-labelledby="q4" className="mt-5 space-y-3" role="radiogroup">
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">😔 Sim… mas nada funcionou até agora.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">🙏 Não, essa é minha primeira tentativa.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">♻️ Já tentei várias vezes, mas sempre acabo no mesmo lugar.</span>
</button>
</div>
</section>

<section className="step-section hidden" data-step-index="4">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold" id="q5">Próximo Passo</h2>
<p className="mt-2 text-[15px] text-[#E6D7FF]">Quer que eu te envie agora a minha análise APROFUNDADA, com o que pode ser feito para mudar essa situação?</p>
<div aria-labelledby="q5" className="mt-5 space-y-3" role="radiogroup">
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">✅ Sim, quero receber agora mesmo.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">⏲️ Sim, mas pode ser mais tarde hoje.</span>
</button>
<button aria-checked="false" className="option group w-full text-left rounded-lg ring-1 ring-white/10 hover:ring-white/20 hover:bg-white/5 transition px-4 py-3 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#6A0DAD] focus:ring-offset-2 focus:ring-offset-[#110918]" role="radio" type="button">
<span className="flex h-5 w-5 items-center justify-center rounded-full ring-1 ring-white/20 group-[.selected]:bg-[#6A0DAD] group-[.selected]:ring-[#6A0DAD] transition">
<span className="h-2.5 w-2.5 rounded-full bg-transparent group-[.selected]:bg-white transition"></span>
</span>
<span className="text-[15px] text-white/90">🤷‍♀️ Ainda estou na dúvida, mas quero ver o que você vai dizer.</span>
</button>
</div>
</section>

<section className="step-section hidden" data-step-index="5">
<div className="flex items-start gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFD700]/10 ring-1 ring-white/10">
<svg className="lucide lucide-message-circle w-4.5 h-4.5 text-[#FFD700]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</span>
<div className="flex-1">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold">Mensagem final</h2>
<p className="mt-1.5 text-[15px] text-white/70">Preparada especialmente para o seu caso.</p>
</div>
</div>

<div className="mt-5 rounded-lg ring-1 ring-white/10 bg-white/5 p-4 sm:p-5 hidden" data-result="R1">
<p className="text-[15px] text-white/90">Pelas suas respostas, vejo sinais de afastamento emocional que podem se intensificar se nada for feito.</p>
<p className="mt-2 text-[15px] text-white/90">A boa notícia é que essa situação pode ser revertida mais rápido do que você imagina.</p>
<a className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-white font-semibold text-[15px] tracking-tight transition-all bg-[#6A0DAD] hover:bg-[#6A0DAD]/90 ring-1 ring-white/10" href="https://wa.me/558596395837?text=Oi%2C+acabei+de+fazer+o+quiz.+Estou+junto+com+ele%2C+mas+ele+est%C3%A1+distante.+Quero+sua+an%C3%A1lise" rel="noopener noreferrer" target="_blank">
                    Receber análise no WhatsApp
                    <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-5 rounded-lg ring-1 ring-white/10 bg-white/5 p-4 sm:p-5 hidden" data-result="R2">
<p className="text-[15px] text-white/90">Ainda existe energia forte entre vocês, mas ela está se dissipando rapidamente.</p>
<p className="mt-2 text-[15px] text-white/90">O tempo é crucial para reacender o vínculo.</p>
<a className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-white font-semibold text-[15px] tracking-tight transition-all bg-[#6A0DAD] hover:bg-[#6A0DAD]/90 ring-1 ring-white/10" href="https://wa.me/558596395837?text=Oi%2C+acabei+de+fazer+o+quiz.+Terminamos+h%C3%A1+pouco+tempo.+Quero+sua+an%C3%A1lise+para+reconquistar" rel="noopener noreferrer" target="_blank">
                    Receber análise no WhatsApp
                    <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-5 rounded-lg ring-1 ring-white/10 bg-white/5 p-4 sm:p-5 hidden" data-result="R3">
<p className="text-[15px] text-white/90">O vínculo esfriou, mas ainda há caminhos para reativar o interesse.</p>
<p className="mt-2 text-[15px] text-white/90">Isso precisa ser feito com estratégia.</p>
<a className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-white font-semibold text-[15px] tracking-tight transition-all bg-[#6A0DAD] hover:bg-[#6A0DAD]/90 ring-1 ring-white/10" href="https://wa.me/558596395837?text=Oi%2C+acabei+de+fazer+o+quiz.+Estamos+afastados+h%C3%A1+meses.+Quero+sua+an%C3%A1lise+para+restaurar+o+relacionamento" rel="noopener noreferrer" target="_blank">
                    Receber análise no WhatsApp
                    <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="mt-5 rounded-lg ring-1 ring-white/10 bg-white/5 p-4 sm:p-5 hidden" data-result="R4">
<p className="text-[15px] text-white/90">Existe desejo, mas ainda não há vínculo consolidado.</p>
<p className="mt-2 text-[15px] text-white/90">Vou te mostrar como despertar o interesse dessa pessoa usando uma leitura direcionada ao seu caso.</p>
<a className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-white font-semibold text-[15px] tracking-tight transition-all bg-[#6A0DAD] hover:bg-[#6A0DAD]/90 ring-1 ring-white/10" href="https://wa.me/558596395837?text=Oi%2C+acabei+de+fazer+o+quiz.+Nunca+ficamos,+mas+quero+conquistar+essa+pessoa.+Quero+sua+an%C3%A1lise" rel="noopener noreferrer" target="_blank">
                    Receber análise no WhatsApp
                    <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
