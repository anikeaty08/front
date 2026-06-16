import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Reveal on Scroll Animation (Entrance Animations)
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Trigger only once
                    }
                });
            }, observerOptions);

            const sections = document.querySelectorAll('.reveal-on-scroll');
            sections.forEach(section => {
                observer.observe(section);
            });
        });

        // Countdown Animation for Stats
        const animateValue = (obj, start, end, duration) => {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                obj.innerHTML = Math.floor(progress * (end - start) + start);
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }

        const statsSection = document.querySelector('.grid-cols-2'); 
        let hasAnimated = false;

        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    document.querySelectorAll('.counter').forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        animateValue(counter, 0, target, 2000);
                    });
                }
            });
        }, { threshold: 0.5 });

        if(statsSection) statsObserver.observe(statsSection);

        // Slideshow Logic
        const track = document.getElementById('carouselTrack');
        const prevBtn = document.getElementById('slidePrev');
        const nextBtn = document.getElementById('slideNext');

        if(track && prevBtn && nextBtn) {
            nextBtn.addEventListener('click', () => {
                track.scrollBy({ left: 350, behavior: 'smooth' });
            });
            prevBtn.addEventListener('click', () => {
                track.scrollBy({ left: -350, behavior: 'smooth' });
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-lg font-medium tracking-tight text-slate-900 uppercase">Dr. Urologia</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all shadow-sm hover:shadow-md" href="#agendar">
                    Agendar Consulta
                </a>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 transition-colors" href="#sobre">Especialidades</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 transition-colors" href="#robotica">Cirurgia Robótica</a>
</li>
<li>
<a className="block py-2 px-3 text-slate-600 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-teal-600 md:p-0 transition-colors" href="#fertilidade">Fertilidade</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#ccfbf1,transparent)]"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center reveal-on-scroll">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-medium tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                    Atendimento em Fortaleza, CE
                </div>
<h1 className="text-4xl lg:text-6xl font-medium tracking-tight text-slate-900 leading-[1.1]">
                    Recupere sua qualidade de vida com <span className="text-teal-600">precisão robótica</span>.
                </h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed">
                    Especialista em tratamento minimamente invasivo de cálculos renais e fertilidade masculina. Tecnologia avançada para uma recuperação rápida e sem dor.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3.5 text-base font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" href="#agendar">
                        Agendar via WhatsApp
                        <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex justify-center items-center px-6 py-3.5 text-base font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:text-slate-900 transition-all" href="#robotica">
                        Entenda a Tecnologia
                    </a>
</div>
<div className="pt-4 flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;q=80&amp;w=64&amp;h=64"/>
<img alt="" className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=64&amp;h=64"/>
</div>
<p>Mais de <span className="font-semibold text-slate-800">2.000 pacientes</span> atendidos.</p>
</div>
</div>
<div className="relative lg:h-[600px] w-full flex justify-center lg:justify-end">
<div className="relative w-full max-w-md lg:max-w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-slate-100">

<img alt="Médico Urologista Especialista" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-medium text-lg">Dr. Nome Sobrenome</p>
<p className="text-sm text-slate-200">Cirurgião Urologista &amp; Andrologista</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-white reveal-on-scroll">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
<div className="p-4">
<p className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight flex justify-center items-baseline">
                        +<span className="counter" data-target="1500">0</span>
</p>
<p className="text-sm text-slate-500 mt-1">Cirurgias Realizadas</p>
</div>
<div className="p-4">
<p className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight flex justify-center items-baseline">
<span className="counter" data-target="98">0</span>%
                    </p>
<p className="text-sm text-slate-500 mt-1">Sucesso no Tratamento</p>
</div>
<div className="p-4">
<p className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight flex justify-center items-baseline">
<span className="counter" data-target="12">0</span>h
                    </p>
<p className="text-sm text-slate-500 mt-1">Recuperação Média</p>
</div>
<div className="p-4">
<p className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight flex justify-center items-baseline">
<span className="counter" data-target="15">0</span>
</p>
<p className="text-sm text-slate-500 mt-1">Anos de Experiência</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 reveal-on-scroll" id="sobre">
<div className="max-w-3xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Cuidado especializado onde você mais precisa</h2>
<p className="text-slate-500 text-lg">
                Seja para eliminar a dor aguda de cálculos renais ou para realizar o sonho da paternidade, oferecemos tratamentos modernos e humanos.
            </p>
</div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-teal-50 rounded-lg flex items-center justify-center mb-6 text-teal-600">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Cálculos Renais (Pedra nos Rins)</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                    A dor renal é incapacitante. Utilizamos ureterorrenolitotripsia flexível a laser e cirurgia robótica para pulverizar as pedras com incisões mínimas, permitindo alta no mesmo dia na maioria dos casos.
                </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center text-sm text-slate-600">
<i className="w-4 h-4 text-teal-500 mr-2" data-lucide="check"></i> Sem cortes grandes
                    </li>
<li className="flex items-center text-sm text-slate-600">
<i className="w-4 h-4 text-teal-500 mr-2" data-lucide="check"></i> Retorno rápido à rotina
                    </li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-6 text-sky-600">
<i className="w-6 h-6" data-lucide="baby"></i>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-3">Fertilidade Masculina</h3>
<p className="text-slate-500 mb-6 leading-relaxed">
                    Diagnóstico preciso e tratamento de varicocele e reversão de vasectomia utilizando microscopia e técnicas robóticas para maximizar as chances de concepção.
                </p>
<ul className="space-y-3 mb-6">
<li className="flex items-center text-sm text-slate-600">
<i className="w-4 h-4 text-sky-500 mr-2" data-lucide="check"></i> Microcirurgia avançada
                    </li>
<li className="flex items-center text-sm text-slate-600">
<i className="w-4 h-4 text-sky-500 mr-2" data-lucide="check"></i> Acompanhamento personalizado
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden reveal-on-scroll" id="robotica">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="absolute -top-10 -left-10 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
<div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
<img alt="Cirurgia Robótica Da Vinci" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-6">
<p className="text-sm font-medium text-teal-400">Tecnologia de Ponta</p>
<p className="text-xs text-slate-400">Precisão milimétrica em cada movimento.</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight">O futuro da cirurgia já chegou em Fortaleza.</h2>
<p className="text-slate-400 text-lg leading-relaxed">
                    A cirurgia robótica oferece uma visão 3D ampliada e instrumentos articulados que superam a capacidade da mão humana. Isso se traduz em maior segurança e preservação de tecidos saudáveis.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
<div className="flex flex-col gap-2">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-teal-400">
<i className="w-4 h-4" data-lucide="scan-eye"></i>
</div>
<h4 className="font-medium text-slate-100">Visão Ampliada 3D</h4>
<p className="text-sm text-slate-500">O cirurgião enxerga estruturas minúsculas com clareza absoluta.</p>
</div>
<div className="flex flex-col gap-2">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-teal-400">
<i className="w-4 h-4" data-lucide="move"></i>
</div>
<h4 className="font-medium text-slate-100">Movimentos Precisos</h4>
<p className="text-sm text-slate-500">Filtra tremores e permite rotações impossíveis para a mão humana.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white reveal-on-scroll">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div className="max-w-xl">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Vantagens do Tratamento Robótico</h2>
<p className="text-slate-500">Por que escolher a cirurgia assistida por robô para o seu tratamento?</p>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-600 transition-all" id="slidePrev">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="p-2 rounded-full border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-600 transition-all" id="slideNext">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="relative overflow-hidden">
<div className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8" id="carouselTrack" style={{scrollBehavior: 'smooth'}}>

<div className="min-w-[85%] md:min-w-[350px] snap-start bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-teal-600 mb-4" data-lucide="timer"></i>
<h3 className="text-lg font-medium text-slate-900 mb-2">Recuperação Acelerada</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                                A maioria dos pacientes recebe alta em até 24 horas, retornando às atividades cotidianas em poucos dias, ao invés de semanas.
                            </p>
</div>
</div>

<div className="min-w-[85%] md:min-w-[350px] snap-start bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-teal-600 mb-4" data-lucide="shield-check"></i>
<h3 className="text-lg font-medium text-slate-900 mb-2">Menor Risco de Infecção</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                                Incisões menores significam menos exposição dos tecidos internos, reduzindo drasticamente o risco de complicações pós-operatórias.
                            </p>
</div>
</div>

<div className="min-w-[85%] md:min-w-[350px] snap-start bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-teal-600 mb-4" data-lucide="smile"></i>
<h3 className="text-lg font-medium text-slate-900 mb-2">Menos Dor e Cicatrizes</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                                Cortes milimétricos resultam em menos trauma tecidual, menor necessidade de analgésicos e cicatrizes praticamente invisíveis.
                            </p>
</div>
</div>

<div className="min-w-[85%] md:min-w-[350px] snap-start bg-slate-50 rounded-2xl p-8 border border-slate-100 flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-teal-600 mb-4" data-lucide="target"></i>
<h3 className="text-lg font-medium text-slate-900 mb-2">Maior Preservação Funcional</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                                Essencial em cirurgias de próstata e rins, preservando nervos responsáveis pela continência e potência sexual.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-teal-900/5 reveal-on-scroll">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-12">Histórias de quem recuperou a saúde</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-left">
<div className="flex text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 text-sm mb-4">"Eu sofria com cólicas renais há anos. A cirurgia foi incrivelmente rápida e no dia seguinte já estava em casa. O Dr. foi extremamente atencioso."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">RM</div>
<div>
<p className="text-sm font-medium text-slate-900">Ricardo M.</p>
<p className="text-xs text-slate-400">Paciente Cirurgia Renal</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-left">
<div className="flex text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 text-sm mb-4">"A tecnologia robótica me passou muita segurança. A recuperação da cirurgia de próstata foi muito melhor do que imaginei."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">JS</div>
<div>
<p className="text-sm font-medium text-slate-900">João S.</p>
<p className="text-xs text-slate-400">Paciente Oncologia</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-left">
<div className="flex text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-slate-600 text-sm mb-4">"O acompanhamento na parte de fertilidade foi fundamental para o nosso sonho. Profissionalismo e técnica impecáveis."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">AL</div>
<div>
<p className="text-sm font-medium text-slate-900">André L.</p>
<p className="text-xs text-slate-400">Paciente Fertilidade</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-center px-6 reveal-on-scroll" id="agendar">
<div className="max-w-3xl mx-auto space-y-8">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">Pronto para viver sem dor?</h2>
<p className="text-slate-400 text-lg">As vagas para consulta são limitadas. Garanta seu horário e tenha acesso ao que há de mais moderno na medicina urológica em Fortaleza.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-slate-900 bg-teal-400 rounded-lg hover:bg-teal-300 transition-all shadow-lg hover:shadow-teal-400/20 transform hover:-translate-y-1" href="#">
<i className="w-5 h-5 mr-2" data-lucide="calendar"></i>
                    Agendar Consulta Agora
                </a>
<a className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-white border border-slate-700 rounded-lg hover:bg-slate-800 transition-all" href="#">
<i className="w-5 h-5 mr-2" data-lucide="message-circle"></i>
                    Falar no WhatsApp
                </a>
</div>
<p className="text-xs text-slate-500 pt-4">Atendemos convênios e particular. Consulte disponibilidade.</p>
</div>
</section>

<footer className="bg-white py-12 border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-lg font-medium text-slate-900 uppercase tracking-tight">Dr. Urologia</p>
<p className="text-sm text-slate-400 mt-1">CRM-CE XXXXX | RQE XXXXX</p>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-teal-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-slate-400 hover:text-teal-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-slate-400 hover:text-teal-600 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-8 text-center text-xs text-slate-300">
            © 2024 Dr. Urologia Fortaleza. Todos os direitos reservados.
        </div>
</footer>



    </>
  );
}
