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



        const modal = document.getElementById('leadModal');
        let hubspotFormCreated = false;

        window.openModal = function() {
            modal.classList.remove('hidden');
            if (!hubspotFormCreated) {
                hbspt.forms.create({
                    region: "na1",
                    portalId: "47448125",
                    formId: "2feda348-e0c8-43ca-a598-4321f0f9dc1f", // NOVO FORM ID
                    target: "#hubspot-form-container",
                    cssClass: "bp-hubspot-form",
                    css: "",
                    onFormReady: function($form) {
                        const inputs = $form.find('input');
                        inputs.each(function() {
                            const name = $(this).attr('name');
                            if (name && (name.startsWith('utm_') || name === 'handoff' || name === 'context' || name === 'form_name' || name === 'ip_addr' || $(this).attr('type') === 'hidden')) {
                                $(this).closest('.hs-form-field').hide();
                            }
                        });

                        const phoneField = $form.find('.hs-fieldtype-phonenumber').first();
                        if (phoneField.length) {
                            const inputRoot = phoneField.find('.input').length ? phoneField.find('.input') : phoneField;
                            const select = inputRoot.find('select');
                            const input = inputRoot.find('input[type="tel"]').length ? inputRoot.find('input[type="tel"]') : inputRoot.find('input.hs-input').not('[type="hidden"]');
                            
                            if (select.length && input.length) {
                                const grid = $('<div class="bp-phone-grid"></div>');
                                const left = $('<div class="bp-phone-left"></div>');
                                const right = $('<div class="bp-phone-right"></div>');
                                inputRoot.append(grid);
                                grid.append(left).append(right);
                                left.append(select);
                                right.append(input);
                            }
                        }
                    }
                });
                hubspotFormCreated = true;
            }
        }

        window.closeModal = function() {
            modal.classList.add('hidden');
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape" && !modal.classList.contains('hidden')) {
                window.closeModal();
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
      
<div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none"></div>

<header className="fixed top-0 left-0 w-full z-50 bg-[#0C0F1F]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-[#2563EB] to-[#FF5C8A] w-full opacity-50"></div>
<div className="max-w-[1120px] mx-auto px-6 h-14 md:h-16 flex items-center justify-center md:justify-between">
<a className="flex items-center gap-2 group" href="#">
<img alt="Blueprintt" className="transition-opacity hover:opacity-80 w-auto h-6 md:h-8" src="https://blueprintt.co/wp-content/uploads/2025/01/logo-footer-light.svg"/>
</a>
<div className="hidden md:flex items-center gap-2">
<button className="bg-[#2563EB] hover:bg-[#3B82F6] text-white px-4 py-2 rounded-lg font-medium text-xs transition-colors shadow-lg shadow-blue-900/20" onclick="window.openModal()">Iniciar Diagnóstico</button>
</div>
</div>
</header>

<section className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
<div className="absolute inset-0 z-0 overflow-hidden">
<div className="absolute inset-0 bg-[#0C0F1F]">
<div className="w-full h-full object-cover opacity-20 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddd4f1ba-97f4-4c8b-ae36-b03c136a4d97_1600w.jpg)]"></div>
</div>
<div className="bg-gradient-to-b from-[#0C0F1F]/90 via-[#0C0F1F]/60 to-[#0C0F1F] z-10 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB] opacity-10 blur-[120px] rounded-full mix-blend-screen pointer-events-none animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#FF5C8A] opacity-10 blur-[100px] rounded-full mix-blend-screen pointer-events-none animate-float delay-1000"></div>
<div className="container text-center max-w-[1120px] mx-auto z-20 px-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6 md:mb-8 animate-fade-up">
<span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
<span className="text-xs font-medium text-gray-300 tracking-wide uppercase">Edição Brasil 2026</span>
</div>
<h1 className="text-3xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-4 md:mb-6 leading-[1.1] animate-fade-up delay-100">
                Em que nível de maturidade <br className="hidden md:block"/>
                está a sua área de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">FP&amp;A?</span>
</h1>
<p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-up delay-200">
                Responda ao State of FP&amp;A Brasil 2026 e receba seu diagnóstico de maturidade — comparado ao benchmark de centenas de empresas brasileiras.
            </p>
<div className="flex flex-col gap-4 animate-fade-up delay-300 gap-x-4 gap-y-4 items-center">
<button className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#2563EB] hover:bg-[#3B82F6] rounded-xl hover:-translate-y-0.5 shadow-lg shadow-blue-900/30 overflow-hidden" onclick="window.openModal()">
<span className="relative flex items-center gap-2">
                        Iniciar Diagnóstico
                        <iconify-icon height="20" icon="solar:alt-arrow-right-outline" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</span>
</button>
<div className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon>
<span>12 minutos</span>
<span className="w-1 h-1 rounded-full bg-gray-700"></span>
<span>Devolutiva completa gratuita</span>
</div>
</div>

<div className="mt-12 md:mt-20 pt-8 border-t border-white/5 animate-fade-up delay-300">
<p className="text-xs text-gray-500 mb-8 tracking-wider uppercase font-medium">Junte-se a líderes de empresas como</p>
<div className="relative w-full max-w-5xl mx-auto overflow-hidden">
<div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0C0F1F] to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0C0F1F] to-transparent z-10 pointer-events-none"></div>
<div className="flex flex-nowrap animate-marquee">

<div className="flex items-center gap-20 px-10 shrink-0">
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-5-1.png?w=800&amp;q=80"/>
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-6.png?w=800&amp;q=80"/>
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-3-1.png?w=800&amp;q=80"/>
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-4-1.png?w=800&amp;q=80"/>
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-2-1.png?w=800&amp;q=80"/>
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-1-1.png?w=800&amp;q=80"/>
</div>

<div className="flex items-center gap-20 px-10 shrink-0">
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-5-1.png?w=800&amp;q=80"/>
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-6.png?w=800&amp;q=80"/>
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-3-1.png?w=800&amp;q=80"/>
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-4-1.png?w=800&amp;q=80"/>
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-2-1.png?w=800&amp;q=80"/>
<img alt="Logo Partner" className="h-8 md:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300" src="https://paginas.blueprintt.co/wp-content/uploads/2026/02/teste-1-1-1.png?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 relative overflow-hidden">
<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-blue-graphs-and-connections-13583-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-[#0C0F1F]/90 backdrop-blur-[2px]"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#0C0F1F] via-[#0C0F1F]/80 to-transparent"></div>
</div>
<div className="container max-w-[1120px] px-6 mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
<div className="relative">
<div className="absolute -left-4 -top-4 w-12 h-12 bg-[#2563EB] rounded-full blur-[40px] opacity-40"></div>
<h2 className="md:text-5xl md:bg-clip-text md:text-transparent text-3xl font-semibold tracking-tight mb-4 md:mb-6 relative">Você sabe onde está. <br/> <span className="text-gray-300">Mas sabe onde deveria estar?</span></h2>
<p className="text-base md:text-lg text-gray-400 max-w-md">
                        A incerteza não vem da falta de dados internos, mas da ausência de contexto externo. O State of FP&amp;A é a sua bússola.
                    </p>
</div>
<div className="space-y-4">
<div className="group relative p-5 md:p-6 bg-[#111827]/60 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-[#1F2937]/80 hover:border-[#2563EB]/40 transition-all duration-300 hover:-translate-x-1 cursor-default">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563EB] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-[#2563EB]/10 text-[#2563EB] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 group-hover:text-[#60A5FA] transition-colors">Visão Limitada</h3>
<p className="text-sm text-gray-400 leading-relaxed">Forecast longo ou equipe enxuta? Sem benchmark, você só conhece seus problemas, mas não se eles são normais no mercado.</p>
</div>
</div>
</div>
<div className="group relative p-5 md:p-6 bg-[#111827]/60 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-[#1F2937]/80 hover:border-[#FF5C8A]/40 transition-all duration-300 hover:-translate-x-1 cursor-default">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF5C8A] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-[#FF5C8A]/10 text-[#FF5C8A] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 group-hover:text-[#FF5C8A] transition-colors">Argumentos Fracos</h3>
<p className="text-sm text-gray-400 leading-relaxed">É difícil defender budget para tecnologia ou pessoas sem provar que seus concorrentes já estão à frente.</p>
</div>
</div>
</div>
<div className="group relative p-5 md:p-6 bg-[#111827]/60 backdrop-blur-md border border-white/5 rounded-2xl hover:bg-[#1F2937]/80 hover:border-[#10B981]/40 transition-all duration-300 hover:-translate-x-1 cursor-default">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#10B981] rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-[#10B981]/10 text-[#10B981] group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-white font-medium mb-1 group-hover:text-[#10B981] transition-colors">A Solução Definitiva</h3>
<p className="text-sm text-gray-400 leading-relaxed">Feche a lacuna entre percepção e realidade com um diagnóstico estruturado e validado pelo mercado.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0C0F1F] py-12 md:py-24 relative">
<div className="container max-w-[1120px] mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">O que o diagnóstico avalia</h2>
<p className="text-gray-400 text-sm md:text-base">O questionário mapeia a maturidade da função em seis dimensões:</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group p-6 md:p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#2563EB]/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mb-4 md:mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">1. Estratégia</h3>
<p className="text-sm text-gray-400 leading-relaxed">Alinhamento entre FP&amp;A e a agenda estratégica da organização.</p>
</div>
<div className="group p-6 md:p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#2563EB]/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mb-4 md:mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
<iconify-icon icon="solar:graph-new-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">2. Execução</h3>
<p className="text-sm text-gray-400 leading-relaxed">Eficiência dos processos de planejamento, orçamento e forecast.</p>
</div>
<div className="group p-6 md:p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#2563EB]/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mb-4 md:mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">3. Pessoas</h3>
<p className="text-sm text-gray-400 leading-relaxed">Estrutura de equipe, competências e remuneração.</p>
</div>
<div className="group p-6 md:p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#2563EB]/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mb-4 md:mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
<iconify-icon icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">4. Tecnologia</h3>
<p className="text-sm text-gray-400 leading-relaxed">Grau de automação e adoção de ferramentas especializadas.</p>
</div>
<div className="group p-6 md:p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#2563EB]/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mb-4 md:mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">5. Dados</h3>
<p className="text-sm text-gray-400 leading-relaxed">Qualidade, integração e governança das fontes de informação.</p>
</div>
<div className="group p-6 md:p-8 rounded-2xl bg-[#111827] border border-white/5 hover:border-[#2563EB]/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] mb-4 md:mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">6. Gestão</h3>
<p className="text-sm text-gray-400 leading-relaxed">Modelo de governança, KPIs e cadência de revisão.</p>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-xs md:text-sm text-gray-500">Cada dimensão gera um score de maturidade (1 a 5). O resultado é um mapa claro de onde você está forte, onde está defasado e como se compara ao mercado.</p>
</div>
</div>
</section>

<section className="bg-[#0B1220] py-12 md:py-24 relative">
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent"></div>
<div className="container max-w-[1120px] px-6 mx-auto">
<div className="mb-8 md:mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">Quanto mais você contribui,<br className="md:hidden"/> mais você recebe</h2>
<p className="text-gray-400 text-sm md:text-base">O State of FP&amp;A Brasil 2026 opera no modelo <span className="text-white italic">"give to get"</span>.</p>
</div>
<div className="hidden lg:block overflow-hidden rounded-2xl border border-white/5 bg-[#111827]">
<div className="grid grid-cols-12 bg-[#1F2937]/50 text-xs font-semibold uppercase tracking-wider text-gray-400 p-4">
<div className="col-span-4 pl-4">Sua Participação</div>
<div className="col-span-6">O que você recebe</div>
<div className="col-span-2 text-right pr-4">Investimento</div>
</div>
<div className="grid grid-cols-12 group bg-green-400/10 border-white/5 border-b px-6 py-6 relative">
<div className="bg-teal-500 w-1 absolute top-0 bottom-0 left-0"></div>
<div className="col-span-4 flex flex-col justify-center pl-4">
<span className="text-lg font-semibold text-white mb-1">Questionário completo</span>
<span className="text-sm text-gray-400 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> ~12 minutos</span>
<span className="inline-block text-[10px] uppercase font-bold text-white tracking-wide bg-green-400 w-fit rounded mt-2 px-2 py-0.5">Recomendado</span>
</div>
<div className="col-span-6 text-sm text-gray-300 space-y-2">
<ul className="space-y-1.5">
<li className="flex items-start gap-2"><iconify-icon height="14" icon="solar:check-circle-linear" style={{color: 'rgb(74, 222, 128)'}} width="14"></iconify-icon> Diagnóstico individual nas 6 dimensões</li>
<li className="flex gap-2 items-start"><iconify-icon height="14" icon="solar:check-circle-linear" style={{color: 'rgb(74, 222, 128)'}} width="14"></iconify-icon> Comparação vs. média geral do mercado</li>
<li className="flex items-start gap-2"><iconify-icon height="14" icon="solar:check-circle-linear" style={{color: 'rgb(74, 222, 128)'}} width="14"></iconify-icon> Relatório consolidado (Landscape Report)</li>
<li className="flex items-start gap-2"><iconify-icon height="14" icon="solar:check-circle-linear" style={{color: 'rgb(74, 222, 128)'}} width="14"></iconify-icon> Comparativo de remuneração por cargo</li>
</ul>
</div>
<div className="col-span-2 flex items-center justify-end text-right pr-4">
<span className="text-2xl font-bold text-white">Gratuito</span>
</div>
</div>
<div className="grid grid-cols-12 p-6 border-b border-white/5 hover:bg-white/2 transition-colors">
<div className="col-span-4 flex flex-col justify-center pl-4">
<span className="text-base font-medium text-white mb-1">Questionário parcial</span>
</div>
<div className="col-span-6 text-sm text-gray-400 space-y-2">
<ul className="space-y-1.5 opacity-80">
<li className="flex items-start gap-2"><iconify-icon className="text-gray-500 mt-0.5" icon="solar:minus-circle-linear"></iconify-icon> Diagnóstico limitado às dimensões respondidas</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-500 mt-0.5" icon="solar:minus-circle-linear"></iconify-icon> Upgrade para Devolutiva Completa disponível</li>
</ul>
</div>
<div className="col-span-2 flex flex-col justify-center items-end text-right pr-4">
<span className="text-sm text-gray-400">ou</span>
<span className="text-lg font-semibold text-white">R$ 2.900</span>
<span className="text-xs text-gray-500">para completar</span>
</div>
</div>
<div className="grid grid-cols-12 p-6 hover:bg-white/2 transition-colors">
<div className="col-span-4 flex flex-col justify-center pl-4">
<span className="text-base font-medium text-white mb-1">Não participou</span>
</div>
<div className="col-span-6 text-sm text-gray-400 space-y-2">
<ul className="space-y-1.5 opacity-80">
<li className="flex items-start gap-2"><iconify-icon className="text-gray-500 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Apenas dados agregados do mercado</li>
<li className="flex items-start gap-2"><iconify-icon className="text-gray-500 mt-0.5" icon="solar:close-circle-linear"></iconify-icon> Sem diagnóstico individual</li>
</ul>
</div>
<div className="col-span-2 flex flex-col justify-center items-end text-right pr-4">
<span className="text-lg font-semibold text-white">R$ 4.890</span>
<span className="text-xs text-gray-500">para adquirir</span>
</div>
</div>
</div>
<div className="lg:hidden space-y-4">
<div className="rounded-xl bg-[#111827] border border-[#2563EB] p-6 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#2563EB] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">RECOMENDADO</div>
<h3 className="text-lg font-bold text-white mb-2">Questionário Completo</h3>
<p className="text-xs text-gray-400 mb-4 flex items-center gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 12 minutos</p>
<ul className="text-sm text-gray-300 space-y-2 mb-6">
<li className="flex items-start gap-2"><iconify-icon className="text-[#2563EB] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Diagnóstico individual</li>
<li className="flex items-start gap-2"><iconify-icon className="text-[#2563EB] shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Benchmark vs. mercado</li>
</ul>
<div className="pt-4 border-t border-white/10 flex justify-between items-center">
<span className="text-gray-400 text-sm">Investimento</span>
<span className="text-xl font-bold text-white">Gratuito</span>
</div>
</div>
<div className="rounded-xl bg-[#111827] border border-white/5 p-6 opacity-80">
<h3 className="text-base font-semibold text-white mb-2">Questionário Parcial</h3>
<p className="text-sm text-gray-400 mb-4">Devolutiva limitada aos dados fornecidos.</p>
<div className="pt-4 border-t border-white/10 flex justify-between items-center">
<span className="text-gray-400 text-sm">Completar</span>
<span className="text-lg font-semibold text-white">R$ 2.900</span>
</div>
</div>
</div>
<div className="text-center mt-8">
<button className="inline-flex items-center gap-2 px-6 py-3 bg-[#2563EB] hover:bg-[#3B82F6] text-white rounded-lg font-semibold transition-colors shadow-lg shadow-blue-900/20" onclick="window.openModal()">
                    Iniciar Diagnóstico Agora
                </button>
</div>
</div>
</section>

<section className="py-12 md:py-24 bg-[#0C0F1F] relative overflow-hidden">
<div className="container max-w-[1120px] px-6 mx-auto relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Para quem precisa de <br/><span className="text-[#FF5C8A]">mais precisão</span></h2>
<div className="space-y-4 text-gray-400 leading-relaxed mb-8">
<p>A devolutiva base compara sua operação com a média geral de todos os respondentes. Para a maioria das decisões, essa referência é suficiente.</p>
<p>Mas se você opera em um contexto muito específico — um setor regulado, uma região com dinâmicas próprias, um porte de empresa com desafios distintos — pode fazer sentido uma comparação mais granular.</p>
</div>
<a className="text-white border-b border-[#FF5C8A] pb-0.5 hover:text-[#FF5C8A] transition-colors inline-flex items-center gap-1" href="#">
                        Quero comparação por peer group <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-[#FF5C8A] to-[#2563EB]">
<div className="bg-[#111827] rounded-2xl p-8 h-full relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5C8A] opacity-10 blur-[50px]"></div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-[#FF5C8A]/10 flex items-center justify-center text-[#FF5C8A]">
<iconify-icon icon="solar:pie-chart-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-white">Peer Group Comparison</h3>
</div>
<p className="text-gray-300 mb-6">Seu diagnóstico comparado a empresas do seu setor, região, porte ou faixa de faturamento.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-2 text-sm text-gray-400"><iconify-icon className="text-[#FF5C8A] mt-0.5" icon="solar:check-square-linear"></iconify-icon> Devolutiva completa inclusa</li>
<li className="flex items-start gap-2 text-sm text-gray-400"><iconify-icon className="text-[#FF5C8A] mt-0.5" icon="solar:check-square-linear"></iconify-icon> Segmentação personalizada (até 3 critérios)</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 bg-gradient-to-br from-[#0B1220] to-[#111827] relative">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="container max-w-[1120px] px-6 mx-auto relative z-10">
<div className="text-center mb-8 md:mb-12">
<span className="text-[#F59E0B] text-xs font-bold tracking-wider uppercase mb-2 block">Inteligência Contínua</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">De um snapshot para uma trajetória</h2>
</div>
<div className="max-w-4xl mx-auto bg-[#0C0F1F] border border-[#F59E0B]/30 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 relative">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#F59E0B]/5 to-transparent pointer-events-none"></div>
<div className="p-8 md:p-14 text-center">
<div className="inline-block px-3 py-1 bg-[#F59E0B]/10 border border-[#F59E0B]/20 rounded-full text-[#F59E0B] text-xs font-bold uppercase tracking-wide mb-6">FOUNDER MEMBERS</div>
<h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Blueprintt Council</h3>
<p className="text-gray-400 mb-10 leading-relaxed text-base md:text-lg max-w-2xl mx-auto">Muito mais que um relatório estático, o Council é um ecossistema de inteligência executiva para líderes de FP&amp;A. Conectamos você a dados proprietários, benchmarks dinâmicos e uma rede de advisory com executivos seniores.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-2xl mx-auto text-left">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] shrink-0"><iconify-icon icon="solar:star-circle-linear" width="18"></iconify-icon></div>
<span className="text-gray-300 font-medium">Peer Group Comparison incluso</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] shrink-0"><iconify-icon icon="solar:database-linear" width="18"></iconify-icon></div>
<span className="text-gray-300 font-medium">Acesso ao Decision Board Hub</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] shrink-0"><iconify-icon icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon></div>
<span className="text-gray-300 font-medium">Executive Roundtables</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] shrink-0"><iconify-icon icon="solar:user-speak-rounded-linear" width="18"></iconify-icon></div>
<span className="text-gray-300 font-medium">Advisory 1:1 com seniores</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#0C0F1F] text-center border-t border-white/5">
<div className="container max-w-3xl px-6 mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-8">
                12 minutos para saber onde você está. <br/>
<span className="text-gray-500">E onde o mercado está.</span>
</h2>
<button className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white transition-all duration-200 bg-[#2563EB] hover:bg-[#3B82F6] rounded-xl shadow-lg shadow-blue-900/30" onclick="window.openModal()">
                Iniciar Diagnóstico
                <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<p className="mt-6 text-xs text-gray-600">
<iconify-icon className="relative top-0.5 mr-1" icon="solar:shield-check-linear"></iconify-icon>
                Todos os dados são tratados de forma agregada e anonimizada.
            </p>
</div>
</section>

<footer className="py-16 bg-[#080a14] border-t border-white/5 relative">
<div className="container max-w-[1120px] px-6 mx-auto flex flex-col items-center text-center">
<img alt="Blueprintt" className="h-10 mb-8 opacity-90" src="https://blueprintt.co/wp-content/uploads/2025/01/logo-footer-light.svg"/>
<p className="text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
                Ao utilizar nossos serviços, você concorda com nossos Termos de Uso e com nossa Política de Privacidade. Seus dados são tratados com segurança, confidencialidade e em conformidade com a LGPD (Lei nº 13.709/2018), exclusivamente para gestão de acesso, personalização de conteúdo, comunicação sobre sua assinatura e melhoria da experiência na plataforma. Não comercializamos dados pessoais.
            </p>
</div>
<div className="fixed bottom-6 right-6 z-50">
<button className="w-12 h-12 rounded-full bg-[#2563EB] hover:bg-[#3B82F6] text-white flex items-center justify-center shadow-lg transition-all hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2563EB] focus:ring-offset-[#0C0F1F]">
<iconify-icon height="24" icon="solar:accessibility-linear" width="24"></iconify-icon>
</button>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="bp-modal fixed inset-0 z-[100] hidden" id="leadModal" role="dialog">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" onclick="window.closeModal()"></div>
<div className="fixed inset-0 z-10 overflow-y-auto">
<div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 w-full max-w-[680px]">
<div className="absolute right-4 top-4 z-10">
<button className="rounded-full bg-gray-100 p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors focus:outline-none" onclick="window.closeModal()" type="button">
<span className="sr-only">Close</span>
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="bg-white px-8 pt-10 pb-4">
<div className="text-center sm:text-left">
<h3 className="text-2xl font-semibold leading-6 text-gray-900 tracking-tight" id="modal-title">Preencha para iniciar o seu diagnóstico</h3>
<div className="mt-3">
<p className="text-sm text-gray-500 leading-relaxed">O State of FP&amp;A Brasil 2026 será enviado para o seu e-mail.</p>
</div>
</div>
</div>
<div className="px-8 pb-10 pt-2">
<div className="w-full" id="hubspot-form-container"></div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
