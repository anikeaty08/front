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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            const splitTextElements = document.querySelectorAll(".reveal-text");
            
            splitTextElements.forEach((element) => {
                if (element.children.length === 0) {
                    const text = element.innerText;
                    const words = text.split(" ");
                    element.innerHTML = words.map(word => 
                        `<span class="word-wrapper"><span class="word-inner">${word}&nbsp;</span></span>`
                    ).join("");
                } else {
                    const wrapper = document.createElement("span");
                    wrapper.className = "word-wrapper block";
                    const inner = document.createElement("span");
                    inner.className = "word-inner block";
                    inner.innerHTML = element.innerHTML;
                    element.innerHTML = "";
                    wrapper.appendChild(inner);
                    element.appendChild(wrapper);
                }
            });

            const reveals = document.querySelectorAll(".reveal-text");
            reveals.forEach((section) => {
                const words = section.querySelectorAll(".word-inner");
                gsap.to(words, {
                    y: 0,
                    duration: 1,
                    stagger: 0.05,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Modal Waitlist Logic
            const modal = document.getElementById('waitlist-modal');
            const backdrop = document.getElementById('waitlist-backdrop');
            const panel = document.getElementById('waitlist-panel');
            const formState = document.getElementById('waitlist-form-state');
            const successState = document.getElementById('waitlist-success-state');
            const form = document.getElementById('waitlist-form');
            const openBtns = document.querySelectorAll('.js-open-waitlist');
            const closeBtns = document.querySelectorAll('#close-modal, #close-success');

            function openModal() {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                setTimeout(() => {
                    backdrop.classList.remove('opacity-0');
                    panel.classList.remove('opacity-0', 'scale-95');
                    panel.classList.add('opacity-100', 'scale-100');
                }, 10);
            }

            function closeModal() {
                backdrop.classList.add('opacity-0');
                panel.classList.remove('opacity-100', 'scale-100');
                panel.classList.add('opacity-0', 'scale-95');
                
                setTimeout(() => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                    
                    // Reset form & states for next opening
                    form.reset();
                    formState.classList.remove('hidden');
                    successState.classList.add('hidden');
                    successState.classList.remove('flex');
                    
                    // Reset gsap properties
                    gsap.set(formState, { opacity: 1, y: 0 });
                    gsap.set(successState, { opacity: 1, y: 0 });
                }, 300);
            }

            openBtns.forEach(btn => btn.addEventListener('click', (e) => {
                e.preventDefault();
                openModal();
            }));

            closeBtns.forEach(btn => btn.addEventListener('click', closeModal));
            backdrop.addEventListener('click', closeModal);

            // Basic Whatsapp Mask
            const whatsappInput = document.getElementById('whatsapp');
            whatsappInput.addEventListener('input', function (e) {
                let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
                e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
            });

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const btn = e.target.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                
                // Show loading state
                btn.innerHTML = '<iconify-icon icon="solar:refresh-linear" class="animate-spin" width="24" height="24"></iconify-icon>';
                btn.disabled = true;
                btn.classList.add('opacity-80', 'cursor-not-allowed');

                // Simulate API call and transition to success state
                setTimeout(() => {
                    gsap.to(formState, {
                        opacity: 0,
                        y: -10,
                        duration: 0.3,
                        onComplete: () => {
                            formState.classList.add('hidden');
                            
                            // Reset button for future openings
                            btn.innerHTML = originalText;
                            btn.disabled = false;
                            btn.classList.remove('opacity-80', 'cursor-not-allowed');
                            
                            // Show success state
                            successState.classList.remove('hidden');
                            successState.classList.add('flex');
                            
                            // Fade in success state
                            gsap.fromTo(successState,
                                { opacity: 0, y: 10 },
                                { opacity: 1, y: 0, duration: 0.4 }
                            );
                            
                            // Pop checkmark icon
                            gsap.fromTo("#success-icon-wrapper",
                                { scale: 0, rotation: -45 },
                                { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.5)", delay: 0.1 }
                            );
                        }
                    });
                }, 1200);
            });
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
      

<div className="gradient-blur">
<div className=""></div><div className=""></div><div className=""></div><div className=""></div><div className=""></div><div className=""></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/50 border-b border-zinc-100/50 backdrop-blur-[2px]">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<a className="block transition-opacity hover:opacity-80" href="#">
<img alt="Arbitralis" className="h-8 w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-zinc-500">
<a className="hover:text-black transition-colors" href="#problema">O Problema</a>
<a className="hover:text-black transition-colors" href="#como-funciona">Como Funciona</a>
<a className="hover:text-black transition-colors" href="#para-quem-e">Para Quem É</a>
<a className="hover:text-black transition-colors" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4 text-sm font-normal">
<span className="text-zinc-400 hidden sm:block">PT</span>
<button className="js-open-waitlist hover:bg-zinc-800 transition-colors text-white bg-indigo-950 rounded-full px-5 py-2.5">
                    Lista de Espera
                </button>
</div>
</div>
</nav>

<header className="md:px-6 max-w-7xl mr-auto ml-auto pt-24 pr-4 pb-6 pl-4 relative">
<div className="overflow-hidden group bg-black w-full h-[85vh] border-zinc-100/20 border rounded-[2rem] relative">

<div className="overflow-hidden absolute top-0 right-0 bottom-0 left-0">
<img alt="Abstract Blue Shapes Background" className="group-hover:scale-100 transition-transform duration-1000 ease-out bg-center opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d387e76-7023-4e50-9245-677039b93b72_3840w.webp"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
</div>
<div className="flex flex-col md:p-12 z-10 text-white h-full pt-8 pr-8 pb-8 pl-8 relative justify-between">

<div className="flex items-start justify-between">
<p className="flex items-center gap-2 text-sm font-normal tracking-wide opacity-80">
<span className="w-1.5 h-1.5 animate-pulse bg-green-400 rounded-full"></span>
                        ACESSO LIMITADO
                    </p>
<div className="flex gap-2">
<span className="js-open-waitlist cursor-pointer border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-normal hover:bg-white/20 transition-colors">Lista de Espera</span>
</div>
</div>

<div className="mt-auto mb-10">
<h1 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.9]"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block">
<span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">Sua </span></span><span className="word-wrapper"><span className="word-inner">equipe </span></span><span className="word-wrapper"><span className="word-inner">toma </span></span></span></span>
</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h1>
<h1 className="font-serif italic font-normal text-zinc-200 text-5xl md:text-7xl lg:text-8xl mt-2 tracking-tight">
<span className="reveal-text"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">decisões. </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
</span></h1>
<h1 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.9] mt-2"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block">
<span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">A </span></span><span className="word-wrapper"><span className="word-inner">IA </span></span><span className="word-wrapper"><span className="word-inner">faz </span></span><span className="word-wrapper"><span className="word-inner">o </span></span><span className="word-wrapper"><span className="word-inner">resto. </span></span></span></span>
</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h1>
<p className="text-zinc-300 mt-6 max-w-xl text-xl font-extralight leading-relaxed">
                        Arbitralis automatiza negociações de cobrança via WhatsApp com agentes de IA — do primeiro contato até o
                        acordo fechado. Você só entra quando realmente importa.
                    </p>
</div>

<div className="border-gradient rounded-[2rem] md:rounded-full mt-4 md:mt-0 max-w-2xl">
<div className="flex flex-col md:flex-row bg-black/40 backdrop-blur-xl rounded-[2rem] md:rounded-full p-2 md:pl-8 items-center relative z-10 justify-between gap-4 md:gap-0">
<div className="text-center md:text-left px-2">
<p className="text-base font-normal">Garantir acesso antecipado</p>
</div>
<div className="hidden md:block border-l border-white/10 px-6">
<p className="text-sm text-zinc-400 mb-1">Status</p>
<p className="text-base font-normal text-green-400">Vagas limitadas</p>
</div>
<button className="js-open-waitlist bg-white text-black h-12 rounded-full flex items-center justify-center px-8 hover:bg-zinc-200 transition-colors w-full md:w-auto">
<span className="text-base font-normal">Entrar para a lista</span>
<i className="ml-2 w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<p className="text-sm text-white/50 mt-4 md:pl-8 font-extralight">Acesso limitado. Vagas liberadas por ordem de cadastro.</p>
</div><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10 pointer-events-none"></div>
</div>
</header>

<section className="overflow-hidden bg-zinc-50/50 border-zinc-100 border-b pt-12 pb-12">
<div className="text-center mb-8">
<p className="text-sm uppercase tracking-widest text-zinc-400 font-normal">Operações que já confiam na Arbitralis</p>
</div>
<div className="flex w-full overflow-hidden">
<div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-32 items-center min-w-full">

<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">Creditas</span>
<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">QuintoAndar</span>
<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">CAIXA</span>
<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">Creditas</span>
<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">QuintoAndar</span>
<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">CAIXA</span>

<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">Creditas</span>
<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">QuintoAndar</span>
<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">CAIXA</span>
<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">Creditas</span>
<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">QuintoAndar</span>
<span className="text-3xl font-semibold tracking-tight text-zinc-300 uppercase hover:text-zinc-600 transition-colors">CAIXA</span>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-12 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-12 gap-y-12" id="problema">
<div className="md:col-span-3">
<h3 className="reveal-text font-serif italic text-3xl tracking-tight text-zinc-400"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">O </span></span><span className="word-wrapper"><span className="word-inner">Problema </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h3>
</div>
<div className="md:col-span-9">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight leading-tight mb-8">
<span className="reveal-text block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">Negociar </span></span><span className="word-wrapper"><span className="word-inner">em </span></span><span className="word-wrapper"><span className="word-inner">escala </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span className="reveal-text block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">do </span></span><span className="word-wrapper"><span className="word-inner">jeito </span></span><span className="word-wrapper"><span className="word-inner">atual </span></span><span className="word-wrapper"><span className="word-inner">não </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
<span className="reveal-text block font-serif italic text-zinc-500"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">funciona. </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span>
</h2>
<div className="flex flex-col md:flex-row gap-8 items-start justify-between">
<p className="text-zinc-500 text-xl max-w-xl leading-relaxed font-extralight">
                    Operadores que mandam mensagem um a um. Scripts que dependem de improviso. Negociações que somem sem resposta e ninguém sabe por quê. Times sobrecarregados gastando energia em conversas que uma IA poderia resolver sozinha. <br/><br/>
                    O problema não é falta de esforço. É falta de um sistema que trabalhe por você.
                </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="md:p-6 overflow-hidden bg-zinc-50 rounded-[2rem] pt-4 pr-4 pb-4 pl-4 relative">

<div className="relative h-[600px] rounded-3xl overflow-hidden mb-6">
<img alt="Server Room" className="bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/621a32d1-0983-452c-8a0d-ca87f78f5acc_3840w.webp"/>
<div className="absolute top-6 right-6">
<span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-normal border border-white/10">Arbitralis OS</span>
</div>
<div className="absolute bottom-12 left-8 md:left-12 right-8 md:right-12">
<h3 className="text-3xl md:text-5xl font-extralight tracking-tight text-white leading-tight max-w-3xl drop-shadow-lg">
                        E se a IA conduzisse cada negociação — e você só aparecesse para fechar?
                    </h3>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 pb-4">
<div className="md:col-span-3">
<div className="border border-zinc-200 bg-white p-4 rounded-xl h-full min-h-[10rem] flex items-center justify-center">
<i className="w-16 h-16 text-zinc-300" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
</div>
<div className="md:col-span-9 flex flex-col justify-center">
<h4 className="reveal-text font-normal text-xl tracking-tight mb-2"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">A </span></span><span className="word-wrapper"><span className="word-inner">Virada </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h4>
<p className="text-zinc-500 text-lg leading-relaxed max-w-3xl font-extralight">
                        É exatamente o que a Arbitralis faz. Agentes de IA treinados iniciam o contato, respondem dúvidas, avançam propostas e gerenciam objeções pelo WhatsApp. Você acompanha tudo em tempo real e intervém só nos momentos que exigem julgamento humano. Trabalho pesado com a IA. Decisão final com você.
                    </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<h3 className="reveal-text font-serif italic text-3xl tracking-tight text-zinc-400 mb-12 text-center md:text-left"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">Resultado </span></span><span className="word-wrapper"><span className="word-inner">mensurável, </span></span><span className="word-wrapper"><span className="word-inner">não </span></span><span className="word-wrapper"><span className="word-inner">promessa. </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h3>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
<div className="border border-zinc-100 rounded-[2rem] p-8 bg-white hover:shadow-lg transition-shadow duration-300">
<p className="text-5xl md:text-6xl font-extralight text-[#09090b] mb-2 tracking-tight">74<span className="text-3xl text-zinc-400">%</span></p>
<p className="text-base font-normal text-zinc-500 leading-snug">Taxa de sucesso nas negociações via IA</p>
</div>
<div className="border border-zinc-100 rounded-[2rem] p-8 bg-white hover:shadow-lg transition-shadow duration-300">
<p className="text-5xl md:text-6xl font-extralight text-[#09090b] mb-2 tracking-tight">7 <span className="text-3xl text-zinc-400 font-serif italic">dias</span></p>
<p className="text-base font-normal text-zinc-500 leading-snug">Tempo médio até o fechamento</p>
</div>
<div className="border border-zinc-100 rounded-[2rem] p-8 bg-white hover:shadow-lg transition-shadow duration-300">
<p className="text-5xl md:text-6xl font-extralight text-[#09090b] mb-2 tracking-tight font-serif italic">Zero</p>
<p className="text-base font-normal text-zinc-500 leading-snug">Convencimento manual no dia a dia</p>
</div>
<div className="border border-zinc-100 rounded-[2rem] p-8 bg-white hover:shadow-lg transition-shadow duration-300">
<p className="text-5xl md:text-6xl font-extralight text-[#09090b] mb-2 tracking-tight">100<span className="text-3xl text-zinc-400">%</span></p>
<p className="text-base font-normal text-zinc-500 leading-snug">Interações registradas e auditáveis</p>
</div>
</div>
<p className="text-sm text-zinc-400 mt-6 text-center md:text-left font-extralight italic">*Baseado em operações reais na plataforma.</p>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24" id="como-funciona">
<div className="mb-16">
<h3 className="reveal-text font-serif italic text-4xl tracking-tight text-[#09090b] mb-4"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">Simples </span></span><span className="word-wrapper"><span className="word-inner">para </span></span><span className="word-wrapper"><span className="word-inner">configurar. </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h3>
<h3 className="reveal-text font-serif italic text-4xl tracking-tight text-zinc-500"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">Poderoso </span></span><span className="word-wrapper"><span className="word-inner">para </span></span><span className="word-wrapper"><span className="word-inner">escalar. </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
<div className="md:col-span-4">
<div className="flex items-baseline gap-4 mb-4">
<span className="font-serif italic text-3xl tracking-tight text-zinc-300">1.</span>
<h3 className="text-3xl tracking-tight font-serif text-[#09090b] leading-tight">
                        Você define <br/><span className="italic text-zinc-500">o objetivo</span>
</h3>
</div>
</div>
<div className="md:col-span-4">
<div className="h-64 rounded-2xl overflow-hidden relative border-gradient">
<img alt="AI Configuration" className="z-10 w-full h-full object-cover relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/661b06c6-f044-4c52-b89c-0e8c62072976_800w.webp"/>
<div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
</div>
</div>
<div className="md:col-span-4 pl-4">
<p className="text-zinc-500 text-xl font-extralight leading-relaxed mb-8">
                    Configure o agente com as regras da sua operação: qual proposta oferecer, como responder objeções, quando escalar para um humano.
                </p>
</div>
</div>

<div className="border-t border-zinc-100">
<div className="group py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors border-b border-zinc-100 px-4 gap-4">
<div className="flex items-center gap-8 w-full md:w-1/3">
<span className="text-base font-normal text-zinc-300 w-8">2</span>
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-[#09090b] group-hover:text-white transition-colors shrink-0">
<i className="w-6 h-6" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl tracking-tight font-serif text-[#09090b] italic group-hover:not-italic transition-all">A IA <span className="not-italic group-hover:italic font-normal">trabalha</span></h3>
</div>
<div className="w-full md:w-2/3 md:pl-12">
<p className="text-zinc-500 text-lg font-extralight leading-relaxed">
                        O agente inicia e conduz a negociação automaticamente via WhatsApp. Ele responde, avança e registra tudo — 24h por dia, em paralelo para quantos contatos você precisar.
                    </p>
</div>
</div>
<div className="group py-8 flex flex-col md:flex-row md:items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors border-b border-zinc-100 px-4 gap-4">
<div className="flex items-center gap-8 w-full md:w-1/3">
<span className="text-base font-normal text-zinc-300 w-8">3</span>
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-[#09090b] group-hover:text-white transition-colors shrink-0">
<i className="w-6 h-6" data-lucide="user-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl tracking-tight font-serif text-[#09090b] italic group-hover:not-italic transition-all">Você <span className="not-italic group-hover:italic font-normal">decide</span></h3>
</div>
<div className="w-full md:w-2/3 md:pl-12">
<p className="text-zinc-500 text-lg font-extralight leading-relaxed">
                        Quando a negociação aquece ou surge uma situação fora do padrão, o sistema te avisa. Você entra, avalia o contexto completo e toma a decisão. Simples assim.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 border-y border-zinc-100 py-24 px-6 mt-12">
<div className="max-w-4xl mx-auto text-center">
<h3 className="reveal-text font-serif italic text-4xl tracking-tight text-[#09090b] mb-6"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper"><span className="word-inner">Vagas </span></span><span className="word-wrapper"><span className="word-inner">limitadas </span></span><span className="word-wrapper"><span className="word-inner">por </span></span><span className="word-wrapper"><span className="word-inner">design. </span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h3>
<p className="text-zinc-500 font-extralight text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Abrimos acesso de forma gradual para garantir que cada cliente tenha onboarding dedicado e operação configurada corretamente desde o início. Empresas na lista têm prioridade de acesso e condições exclusivas de lançamento.
            </p>
<button className="js-open-waitlist bg-[#09090b] text-white px-8 py-4 rounded-full hover:bg-zinc-800 transition-colors font-normal text-xl w-full sm:w-auto">
                Quero garantir minha vaga
            </button>
<p className="text-sm text-zinc-400 mt-4 font-extralight">Sem compromisso. Você será notificado quando sua vaga for liberada.</p>
</div>
</section>

<footer className="bg-[#09090b] text-white rounded-t-[3rem] overflow-hidden relative mt-12">
<div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

<div className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-8 mb-16 gap-6 md:gap-0">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-white" data-lucide="circle-dollar-sign" strokeWidth="1.5"></i>
<span className="text-xl font-normal tracking-tight italic font-serif">Arbitralis</span>
</div>
<div className="flex gap-8 text-sm text-zinc-500 uppercase tracking-widest text-center font-extralight">
<span>Automação</span>
<span className="text-zinc-700">//</span>
<span>Escala</span>
<span className="text-zinc-700">//</span>
<span>Controle</span>
</div>
</div>

<div className="text-center mb-24 max-w-4xl mx-auto">
<h2 className="reveal-text text-5xl md:text-7xl font-extralight tracking-tight mb-6"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block"><span className="word-wrapper block"><span className="word-inner block">
                    Sua operação trabalhando enquanto você <span className="font-serif italic text-zinc-400">decide.</span>
</span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></span></h2>
<p className="text-2xl text-zinc-400 font-extralight tracking-tight mb-12">
                    Pare de negociar um contato por vez. Deixe a IA fazer o trabalho pesado.
                </p>
<button className="js-open-waitlist bg-white text-black px-10 py-4 rounded-full hover:bg-zinc-200 transition-colors font-normal text-xl">
                    Entrar para a lista de espera
                </button>
<p className="text-base text-zinc-500 mt-6 font-extralight">Vagas limitadas. Acesso por ordem de cadastro.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-zinc-500 border-t border-white/10 pt-8 font-extralight">
<div className="text-center md:text-left">
<p className="text-white mb-1">Arbitralis OS</p>
<p>©2024 Todos os direitos reservados.</p>
</div>
<div className="flex justify-center md:justify-end gap-6">
<a className="hover:text-white transition-colors" href="#">Termos de Uso</a>
<a className="hover:text-white transition-colors" href="#">Política de Privacidade</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center" id="waitlist-modal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity opacity-0 duration-300" id="waitlist-backdrop"></div>

<div className="relative bg-white rounded-[2rem] shadow-2xl w-[calc(100%-2rem)] max-w-md p-8 transform scale-95 opacity-0 transition-all duration-300" id="waitlist-panel">
<button aria-label="Fechar" className="absolute top-6 right-6 text-zinc-400 hover:text-black transition-colors" id="close-modal">
<iconify-icon height="28" icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>

<div className="transition-opacity duration-300" id="waitlist-form-state">
<h3 className="text-3xl font-serif italic tracking-tight text-[#09090b] mb-2">Garantir acesso</h3>
<p className="text-zinc-500 font-extralight text-sm mb-8 leading-relaxed">Preencha seus dados para entrar na lista de prioridade. Avisaremos quando sua vaga for liberada.</p>
<form className="space-y-4" id="waitlist-form">
<div>
<label className="block text-xs font-normal text-zinc-500 mb-1.5 ml-1" htmlFor="nome">Nome completo</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all font-light placeholder:text-zinc-300" id="nome" placeholder="Seu nome" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-normal text-zinc-500 mb-1.5 ml-1" htmlFor="empresa">Empresa</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all font-light placeholder:text-zinc-300" id="empresa" placeholder="Nome da empresa" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-normal text-zinc-500 mb-1.5 ml-1" htmlFor="whatsapp">WhatsApp</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-400 transition-all font-light placeholder:text-zinc-300" id="whatsapp" placeholder="(00) 00000-0000" required="" type="tel"/>
</div>
<button className="w-full bg-[#09090b] text-white rounded-full py-3.5 mt-4 hover:bg-zinc-800 transition-all duration-300 text-base font-normal shadow-sm flex items-center justify-center gap-2" type="submit">
                        Entrar para a lista
                    </button>
</form>
</div>

<div className="hidden flex-col items-center justify-center text-center py-6" id="waitlist-success-state">
<div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6" id="success-icon-wrapper">
<iconify-icon height="32" icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-3xl font-serif italic tracking-tight text-[#09090b] mb-3">Tudo certo!</h3>
<p className="text-zinc-500 font-extralight text-sm leading-relaxed max-w-[250px] mx-auto">Você está na nossa lista de espera. Entraremos em contato via WhatsApp assim que sua vaga for liberada.</p>
<button className="mt-10 bg-zinc-100 text-[#09090b] rounded-full px-8 py-3 hover:bg-zinc-200 transition-colors text-sm font-normal" id="close-success">
                    Fechar janela
                </button>
</div>
</div>
</div>



    </>
  );
}
