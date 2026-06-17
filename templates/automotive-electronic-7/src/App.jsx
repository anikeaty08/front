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



        lucide.createIcons();
    


        // Auto-show popup after delay
        setTimeout(function() {
            const popup = document.getElementById('lead-capture-overlay');
            if (popup && !localStorage.getItem('maytaLeadPopupShown')) {
                popup.classList.add('show');
            }
        }, 8000);

        function closeLeadPopup(event) {
            if (event && event.target !== event.currentTarget) return;
            const popup = document.getElementById('lead-capture-overlay');
            popup.classList.remove('show');
            localStorage.setItem('maytaLeadPopupShown', 'true');
        }

        function submitLeadForm(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const name = formData.get('name');
            const phone = formData.get('phone');
            const city = formData.get('city');
            const message = formData.get('message');

            let leadMessage = '🎓 *Interesse no Curso Mayta*\n\n';
            leadMessage += '👤 *Nome:* ' + name + '\n';
            leadMessage += '📱 *Tel:* ' + phone + '\n';
            if (city) {
                leadMessage += '📍 *Local:* ' + city + '\n';
            }
            if (message) {
                leadMessage += '💬 *Dúvida:* ' + message + '\n';
            }
            leadMessage += '\n⏰ *Enviado em:* ' + new Date().toLocaleString('pt-BR');

            const whatsappUrl = 'https://wa.me/?text=' + encodeURIComponent(leadMessage);
            window.open(whatsappUrl, '_blank');

            // Show success message and close popup
            alert('✅ Mensagem preparada! Redirecionando para o WhatsApp...');
            closeLeadPopup();
            
            // Reset form
            event.target.reset();
        }
    
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
      

<nav className="fixed w-full z-40 glass border-b border-gray-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#0284c7]/10 p-1.5 rounded-lg group-hover:bg-[#0284c7]/20 transition-colors">
<i className="w-5 h-5 text-[#0284c7]" data-lucide="zap" strokeWidth="2"></i>
</div>
<span className="font-semibold text-[#0f172a] tracking-tight text-lg">MAYTA</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-[#0284c7] transition-colors" href="#curriculum">Conteúdo</a>
<a className="hover:text-[#0284c7] transition-colors" href="#lab">Laboratório</a>
<a className="hover:text-[#0284c7] transition-colors" href="#results">Resultados</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex text-sm font-medium text-[#0f172a] hover:text-[#0284c7] transition-colors">Área do Aluno</button>
<button className="bg-[#0f172a] text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-[#0284c7] hover:shadow-lg hover:shadow-[#0284c7]/30 transition-all duration-300">
                    Matricule-se
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">

<div className="flex-1 text-center md:text-left space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0284c7]/10 border border-[#0284c7]/20 text-[#0284c7] text-xs font-semibold uppercase tracking-wide">
<span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse"></span>
                        Turmas Abertas 2024
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#0f172a] tracking-tight leading-[1.05]">
                        Domine a <br/>
<span className="text-[#0284c7]">Eletrônica Auto.</span>
</h1>
<p className="text-lg text-gray-500 max-w-lg mx-auto md:mx-0 leading-relaxed font-normal">
                        Multimídias · Módulos · Diagnóstico · Reparo de Placas · Esquemas Elétricos
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
<button className="w-full sm:w-auto bg-[#0284c7] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0369a1] transition-all shadow-xl shadow-[#0284c7]/20 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                            Começar Agora
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
<button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-[#0f172a] hover:bg-gray-50 transition-all flex items-center justify-center gap-2 border border-gray-200">
                            Ver Metodologia
                        </button>
</div>
<div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-400">
<div className="flex -space-x-3">
<div className="w-9 h-9 rounded-full bg-gray-200 border-[3px] border-white flex items-center justify-center text-[10px] overflow-hidden">
<img alt="Student" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="w-9 h-9 rounded-full bg-gray-300 border-[3px] border-white flex items-center justify-center text-[10px] overflow-hidden">
<img alt="Student" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="w-9 h-9 rounded-full bg-gray-400 border-[3px] border-white flex items-center justify-center text-[10px] overflow-hidden">
<img alt="Student" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
<p className="font-medium">+1.500 Alunos Formados</p>
</div>
</div>

<div className="flex-1 w-full relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-[#0284c7]/20 to-transparent rounded-[2.5rem] blur-3xl opacity-40"></div>
<div className="relative aspect-[4/5] md:aspect-square lg:aspect-[5/4] rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 group">

<img alt="Electronics Repair" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-8 left-8 right-8 glass p-5 rounded-2xl shadow-lg border border-white/60 flex items-center justify-between">
<div>
<p className="text-xs text-gray-500 font-medium uppercase tracking-wide">Certificação</p>
<p className="text-[#0f172a] font-semibold text-lg">Especialista Auto</p>
</div>
<div className="h-12 w-12 bg-[#0284c7]/10 rounded-full flex items-center justify-center text-[#0284c7]">
<i className="w-6 h-6" data-lucide="award" strokeWidth="2"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="max-w-4xl mx-auto px-6 -mt-12 relative z-20">
<div className="glass p-8 rounded-3xl shadow-2xl shadow-gray-200/60 border border-white/70 text-center">
<h3 className="text-sm font-semibold uppercase tracking-wide text-[#0284c7] mb-3">O Método Mayta</h3>
<p className="text-lg md:text-xl text-[#0f172a] font-medium leading-relaxed">
                A metodologia definitiva que combina teoria aprofundada com prática intensiva de bancada. Saia do "troca-peças" e torne-se um técnico capaz de resolver falhas complexas em centrais multimídia e módulos eletrônicos.
            </p>
</div>
</div>

<section className="py-24 bg-white" id="curriculum">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">Grade Curricular</h2>
<p className="text-gray-500 text-lg">Um treinamento completo, do básico ao avançado.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#0284c7]/5 transition-all duration-300 group border border-transparent hover:border-[#0284c7]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#0284c7] transition-colors duration-300">
<i className="w-6 h-6 text-[#0284c7] group-hover:text-white transition-colors" data-lucide="microchip" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#0f172a] mb-2">Eletrônica Digital</h3>
<p className="text-sm text-gray-500 leading-relaxed">Fundamentos essenciais, portas lógicas e análise de sinais.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#0284c7]/5 transition-all duration-300 group border border-transparent hover:border-[#0284c7]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#0284c7] transition-colors duration-300">
<i className="w-6 h-6 text-[#0284c7] group-hover:text-white transition-colors" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#0f172a] mb-2">Diagnóstico</h3>
<p className="text-sm text-gray-500 leading-relaxed">Uso de multímetro e osciloscópio para encontrar falhas ocultas.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#0284c7]/5 transition-all duration-300 group border border-transparent hover:border-[#0284c7]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#0284c7] transition-colors duration-300">
<i className="w-6 h-6 text-[#0284c7] group-hover:text-white transition-colors" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#0f172a] mb-2">Solda BGA/SMD</h3>
<p className="text-sm text-gray-500 leading-relaxed">Técnicas de reballing, reflow e substituição de processadores.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#0284c7]/5 transition-all duration-300 group border border-transparent hover:border-[#0284c7]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#0284c7] transition-colors duration-300">
<i className="w-6 h-6 text-[#0284c7] group-hover:text-white transition-colors" data-lucide="file-code" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#0f172a] mb-2">Software &amp; BIOS</h3>
<p className="text-sm text-gray-500 leading-relaxed">Gravação de NAND, recuperação de firmware e desbloqueios.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#0284c7]/5 transition-all duration-300 group border border-transparent hover:border-[#0284c7]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#0284c7] transition-colors duration-300">
<i className="w-6 h-6 text-[#0284c7] group-hover:text-white transition-colors" data-lucide="map" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#0f172a] mb-2">Esquemas Elétricos</h3>
<p className="text-sm text-gray-500 leading-relaxed">Interpretação de diagramas e boardviews complexos.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#0284c7]/5 transition-all duration-300 group border border-transparent hover:border-[#0284c7]/10">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#0284c7] transition-colors duration-300">
<i className="w-6 h-6 text-[#0284c7] group-hover:text-white transition-colors" data-lucide="bluetooth" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-[#0f172a] mb-2">Conectividade</h3>
<p className="text-sm text-gray-500 leading-relaxed">Reparo de módulos Bluetooth, GPS e Wi-Fi integrados.</p>
</div>

<div className="bg-[#FAFAFA] p-8 rounded-[1.5rem] hover:bg-white hover:shadow-xl hover:shadow-[#0284c7]/5 transition-all duration-300 group border border-transparent hover:border-[#0284c7]/10 md:col-span-2 lg:col-span-2">
<div className="flex items-start gap-6">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-[#0284c7] transition-colors duration-300 shrink-0">
<i className="w-6 h-6 text-[#0284c7] group-hover:text-white transition-colors" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-lg font-semibold text-[#0f172a] mb-2">Comunidade &amp; Suporte VIP</h3>
<p className="text-sm text-gray-500 leading-relaxed">Acesso exclusivo ao grupo de técnicos para troca de esquemas, arquivos de BIOS e solução de dúvidas do dia a dia da bancada.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="lab">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">Laboratório Modelo</h2>
<p className="text-gray-500 max-w-2xl text-lg">Aprenda com equipamentos de ponta e simulações reais.</p>
</div>
<a className="text-[#0284c7] font-medium flex items-center gap-2 hover:gap-3 transition-all text-sm group" href="#enroll">
                    Ver Planos <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#0284c7]/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
<img alt="Oscilloscope" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl font-semibold text-white">Osciloscópio</h3>
<p className="text-gray-300 text-sm mt-1">Análise de Sinais</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#0284c7]/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
<img alt="Soldering" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1597424214716-15a95b8fae4a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl font-semibold text-white">Solda Precisão</h3>
<p className="text-gray-300 text-sm mt-1">Estações SMD/BGA</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#0284c7]/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
<img alt="Microscope" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl font-semibold text-white">Microscopia</h3>
<p className="text-gray-300 text-sm mt-1">Inspeção Visual</p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] mb-5 shadow-sm group-hover:shadow-2xl group-hover:shadow-[#0284c7]/10 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
<img alt="Dashboard" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1530903605624-d1a537e7565b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<h3 className="text-xl font-semibold text-white">Centrais</h3>
<p className="text-gray-300 text-sm mt-1">Sistemas Reais</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="why-csi">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] tracking-tight mb-4">Por que escolher o Mayta?</h2>
<p className="text-gray-500 text-lg">Vantagens exclusivas para sua carreira profissional.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#FAFAFA] rounded-[2rem] p-8 border border-gray-100 hover:border-[#0284c7]/30 transition-all">
<div className="w-10 h-10 bg-[#0284c7]/10 rounded-full flex items-center justify-center text-[#0284c7] mb-6">
<i className="w-5 h-5" data-lucide="monitor-play" strokeWidth="2"></i>
</div>
<h3 className="text-lg font-semibold text-[#0f172a] mb-3">100% Online</h3>
<p className="text-gray-500 text-sm leading-relaxed">Assista às aulas em alta definição quando e onde quiser, com acesso vitalício ao conteúdo.</p>
</div>

<div className="bg-[#FAFAFA] rounded-[2rem] p-8 border border-gray-100 hover:border-[#0284c7]/30 transition-all">
<div className="w-10 h-10 bg-[#0284c7]/10 rounded-full flex items-center justify-center text-[#0284c7] mb-6">
<i className="w-5 h-5" data-lucide="shield-check" strokeWidth="2"></i>
</div>
<h3 className="text-lg font-semibold text-[#0f172a] mb-3">Certificado</h3>
<p className="text-gray-500 text-sm leading-relaxed">Certificação reconhecida no mercado para valorizar seu currículo e sua oficina.</p>
</div>

<div className="bg-[#FAFAFA] rounded-[2rem] p-8 border border-gray-100 hover:border-[#0284c7]/30 transition-all">
<div className="w-10 h-10 bg-[#0284c7]/10 rounded-full flex items-center justify-center text-[#0284c7] mb-6">
<i className="w-5 h-5" data-lucide="database" strokeWidth="2"></i>
</div>
<h3 className="text-lg font-semibold text-[#0f172a] mb-3">Banco de Arquivos</h3>
<p className="text-gray-500 text-sm leading-relaxed">Download liberado de firmwares, esquemas e manuais de serviço difíceis de encontrar.</p>
</div>

<div className="bg-[#FAFAFA] rounded-[2rem] p-8 border border-gray-100 hover:border-[#0284c7]/30 transition-all">
<div className="w-10 h-10 bg-[#0284c7]/10 rounded-full flex items-center justify-center text-[#0284c7] mb-6">
<i className="w-5 h-5" data-lucide="trending-up" strokeWidth="2"></i>
</div>
<h3 className="text-lg font-semibold text-[#0f172a] mb-3">Retorno Rápido</h3>
<p className="text-gray-500 text-sm leading-relaxed">Conhecimento prático para aplicar imediatamente e aumentar o faturamento da sua assistência.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f172a] relative overflow-hidden" id="enroll">
<div className="absolute inset-0 bg-[#0284c7]/10 pattern-grid opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Evolua sua Carreira Hoje</h2>
<p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">Não perca mais serviços por falta de conhecimento. Junte-se à elite da eletrônica automotiva.</p>
<button className="bg-[#0284c7] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0369a1] transition-all shadow-xl shadow-[#0284c7]/20 transform hover:-translate-y-1">
                Garantir Minha Vaga
            </button>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="bg-[#0284c7]/10 p-1.5 rounded-lg">
<i className="w-5 h-5 text-[#0284c7]" data-lucide="zap" strokeWidth="2"></i>
</div>
<span className="font-semibold text-[#0f172a] tracking-tight">MAYTA</span>
</a>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">Formando os melhores especialistas em eletrônica automotiva do país.</p>
<div className="flex gap-5">
<a className="text-gray-400 hover:text-[#0284c7] transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="text-gray-400 hover:text-[#0284c7] transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i></a>
<a className="text-gray-400 hover:text-[#0284c7] transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-[#0f172a] mb-6">Curso</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#0284c7] transition-colors" href="#">Conteúdo Programático</a></li>
<li><a className="hover:text-[#0284c7] transition-colors" href="#">Preços e Planos</a></li>
<li><a className="hover:text-[#0284c7] transition-colors" href="#">Depoimentos</a></li>
<li><a className="hover:text-[#0284c7] transition-colors" href="#">Garantia</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#0f172a] mb-6">Suporte</h4>
<ul className="space-y-4 text-sm text-gray-500">
<li><a className="hover:text-[#0284c7] transition-colors" href="#">Área do Aluno</a></li>
<li><a className="hover:text-[#0284c7] transition-colors" href="#">Dúvidas Frequentes</a></li>
<li><a className="hover:text-[#0284c7] transition-colors" href="#">Fale Conosco</a></li>
<li><a className="hover:text-[#0284c7] transition-colors" href="#">Termos de Uso</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-[#0f172a] mb-6">Novidades</h4>
<p className="text-sm text-gray-500 mb-4">Receba dicas técnicas gratuitas.</p>
<form className="flex gap-2">
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#0284c7] transition-colors" placeholder="Seu email" type="email"/>
<button className="bg-[#0f172a] text-white px-5 py-2.5 rounded-lg hover:bg-[#0284c7] transition-colors text-sm font-medium" type="button">
                            Enviar
                        </button>
</form>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2024 Mayta Cursos. Todos os direitos reservados.</p>
<div className="flex items-center gap-1 text-xs text-gray-400">
<span>Alta Performance em</span>
<i className="w-3 h-3 text-[#0284c7] fill-[#0284c7]" data-lucide="cpu" strokeWidth="1.5"></i>
<span>Eletrônica.</span>
</div>
</div>
</div>
</footer>

<button aria-label="Abrir Widget" className="widgetify-widget" onclick="document.getElementById('lead-capture-overlay').classList.add('show')">
<svg fill="white" height="32" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
</button>

<div className="lead-popup-overlay" id="lead-capture-overlay" onclick="closeLeadPopup(event)">
<div className="lead-popup-container" onclick="event.stopPropagation()">
<button aria-label="Fechar popup" className="lead-popup-close" onclick="closeLeadPopup()">×</button>
<h2 className="lead-popup-title">Fale com um Especialista</h2>
<p className="lead-popup-subtitle">Tire suas dúvidas sobre o curso via WhatsApp.</p>
<form id="lead-capture-form" onsubmit="submitLeadForm(event)">
<input className="lead-form-field" name="name" placeholder="Nome Completo *" required="" type="text"/>
<input className="lead-form-field" name="phone" placeholder="WhatsApp / Celular *" required="" type="tel"/>
<input className="lead-form-field" name="city" placeholder="Sua Cidade/Estado (Opcional)" type="text"/>
<textarea className="lead-form-field" name="message" placeholder="Dúvida sobre o curso (Ex: Formas de pagamento, conteúdo...)" rows="3" style={{resize: 'vertical', minHeight: '80px'}}></textarea>
<button className="lead-form-button" type="submit">
<svg fill="currentColor" height="18" viewbox="0 0 24 24" width="18">
<path d="M17.6 6.32A7.85 7.85 0 0 0 12 4.02a7.95 7.95 0 0 0-6.9 12.07L4 20.02l4.05-1.06A8.02 8.02 0 0 0 12 20.02a7.98 7.98 0 0 0 8-7.93c0-2.12-.83-4.12-2.4-5.62V6.32z"></path>
</svg>
                    Enviar Mensagem
                </button>
</form>
<div className="lead-popup-footer">
<a href="#" target="_blank">Atendimento Rápido</a>
</div>
</div>
</div>





    </>
  );
}
