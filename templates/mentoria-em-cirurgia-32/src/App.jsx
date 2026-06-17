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
      

<header className="absolute top-0 w-full z-50">
<div className="container mx-auto px-6 py-8 flex justify-between items-center">
<div className="flex items-baseline gap-1.5 text-black tracking-tight">
<span className="font-serif text-xl tracking-tight uppercase">Refrativa</span>
<span className="font-decorative text-3xl lowercase text-[#D4AF37]">elite</span>
</div>
<a className="hidden md:inline-flex text-xs font-medium uppercase tracking-widest text-black hover:text-[#D4AF37] transition-colors" href="#cta">
                Aplicar agora
            </a>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-[#FAFAFA] via-[#FAFAFA] to-[#EBEBEB] -z-10"></div>
<div className="container mx-auto px-6 lg:flex lg:items-center lg:gap-20">

<div className="lg:w-[55%] flex flex-col items-start space-y-10 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
<iconify-icon className="text-[#D4AF37]" icon="solar:star-fall-linear" width="16"></iconify-icon>
<span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37]">Capacitação Exclusiva</span>
</div>
<h1 className="font-serif text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.1] text-black">
                    Oftalmologista, pare de encaminhar o paciente que deseja eliminar os óculos.
                </h1>
<p className="text-base md:text-lg text-zinc-600 leading-relaxed font-light max-w-2xl">
                    Domine de uma vez por todas as principais técnicas da <strong className="font-medium text-black">Cirurgia Refrativa (Femto LASIK, LASIK e PRK)</strong>, e conquiste a autonomia cirúrgica que a residência médica não te deu.
                </p>

<div className="pt-4 flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
<a className="group flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C5A028] text-black px-8 py-4.5 rounded-xl font-semibold text-sm transition-all shadow-[0_8px_30px_-4px_rgba(212,175,55,0.6)] hover:shadow-[0_12px_40px_-4px_rgba(212,175,55,0.8)] hover:-translate-y-1 w-full sm:w-auto ring-2 ring-[#D4AF37]/30 ring-offset-4 ring-offset-[#FAFAFA]" href="#cta">
                        Quero transformar minha carreira
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="lg:w-[45%] mt-16 lg:mt-0 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E0E0E0] rounded-full blur-3xl opacity-60 mix-blend-multiply pointer-events-none"></div>

<div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl shadow-black/10 aspect-[3/4] max-w-md mx-auto lg:max-w-none border-4 border-white/80">
<img alt="Dra. Oftalmologista Profissional" className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] grayscale-[0.2]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-black mix-blend-overlay opacity-10"></div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 border-t border-black/5">
<div className="container mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-4 block">Identifique seu momento</span>
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-black">Você reconhece alguma dessas limitações na sua prática diária?</h2>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="flex items-start gap-6 p-8 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] hover:border-[#D4AF37]/50 transition-colors">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#D4AF37]">
<iconify-icon icon="solar:forward-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-black leading-relaxed font-medium">Encaminha ao colega realizar o laser que você gostaria tanto de fazer no seu próprio paciente.</p>
</div>
</div>

<div className="flex items-start gap-6 p-8 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] hover:border-[#D4AF37]/50 transition-colors">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#D4AF37]">
<iconify-icon icon="solar:question-circle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-black leading-relaxed font-medium">Se sente inseguro ao indicar a técnica correta (LASIK vs PRK) para casos limítrofes.</p>
</div>
</div>

<div className="flex items-start gap-6 p-8 rounded-2xl bg-[#FAFAFA] border border-[#EBEBEB] hover:border-[#D4AF37]/50 transition-colors">
<div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-[#D4AF37]">
<iconify-icon icon="solar:shield-warning-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-black leading-relaxed font-medium">Tem receio de lidar com intercorrências cirúrgicas e complicações sozinho.</p>
</div>
</div>

<div className="flex items-start gap-6 p-8 rounded-2xl bg-black text-white shadow-xl shadow-black/10 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-0"></div>
<div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-sm text-black relative z-10">
<iconify-icon icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
<div className="relative z-10">
<p className="text-sm font-medium leading-relaxed text-[#FAFAFA]">Deseja elevar o patamar profissional e atender à seleta demanda de pacientes que buscam refrativa.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[#FAFAFA] overflow-hidden">

<div className="absolute inset-y-0 right-0 w-[60%] lg:w-[40%] opacity-[0.08] pointer-events-none mix-blend-multiply flex justify-end">
<img alt="Conhecimento" className="h-full object-cover grayscale mask-image: linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%); -webkit-mask-image: linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-black">Uma formação completa e definitiva.</h2>
<p className="mt-6 text-base text-zinc-600 font-light max-w-2xl mx-auto">A flexibilidade do online, o rigor técnico do centro cirúrgico e o suporte de encontros ao vivo.</p>
</div>
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="lg:w-1/2 space-y-12 order-2 lg:order-1">
<div className="group">
<div className="flex gap-6">
<div className="flex-shrink-0 w-10 h-10 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
<span className="font-serif text-base font-medium">1</span>
</div>
<div>
<h3 className="font-serif text-xl font-medium tracking-tight text-black mb-3">Aulas online estruturadas</h3>
<p className="text-sm text-zinc-600 leading-relaxed font-light">Fundamentos teóricos, screening avançado (interpretação das tomografias mais modernas) e seleção criteriosa de pacientes para evitar ectasias.</p>
</div>
</div>
</div>
<div className="group">
<div className="flex gap-6">
<div className="flex-shrink-0 w-10 h-10 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
<span className="font-serif text-base font-medium">2</span>
</div>
<div>
<h3 className="font-serif text-xl font-medium tracking-tight text-black mb-3">Cirurgias gravadas e comentadas</h3>
<p className="text-sm text-zinc-600 leading-relaxed font-light">Assista a procedimentos detalhados passo a passo, com a visão do cirurgião: FEMTO LASIK, LASIK, PRK, PTK e Femto Anel.</p>
</div>
</div>
</div>
<div className="group">
<div className="flex gap-6">
<div className="flex-shrink-0 w-10 h-10 border border-[#D4AF37] rounded-full flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
<span className="font-serif text-base font-medium">3</span>
</div>
<div>
<h3 className="font-serif text-xl font-medium tracking-tight text-black mb-3">Encontros semanais ao vivo</h3>
<p className="text-sm text-zinc-600 leading-relaxed font-light">Discussão ao vivo de casos clínicos complexos e plantão de dúvidas para que você aplique todo o conhecimento com máxima segurança.</p>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 w-full order-1 lg:order-2">
<div className="relative mx-auto border-[#EBEBEB] bg-[#EBEBEB] border-[6px] md:border-[8px] rounded-t-2xl h-[220px] md:h-[320px] max-w-[500px] shadow-2xl shadow-black/10">
<div className="rounded-lg overflow-hidden h-full bg-[#FAFAFA] relative flex flex-col">

<div className="h-6 bg-[#E0E0E0] flex items-center px-3 gap-1.5 border-b border-[#D0D0D0]">
<div className="w-2 h-2 rounded-full bg-[#C0C0C0]"></div>
<div className="w-2 h-2 rounded-full bg-[#C0C0C0]"></div>
<div className="w-2 h-2 rounded-full bg-[#C0C0C0]"></div>
</div>

<div className="p-6 flex flex-col gap-4 opacity-70">
<div className="w-1/3 h-4 bg-[#D4AF37]/40 rounded-sm"></div>
<div className="w-3/4 h-8 bg-black/10 rounded-sm"></div>
<div className="w-1/2 h-3 bg-zinc-400/20 rounded-sm"></div>
<div className="w-1/4 h-8 bg-[#D4AF37] rounded-md mt-2 shadow-sm"></div>
<div className="flex gap-4 mt-6">
<div className="w-1/2 h-24 bg-white rounded-md shadow-sm border border-[#EBEBEB]"></div>
<div className="w-1/2 h-24 bg-white rounded-md shadow-sm border border-[#EBEBEB]"></div>
</div>
</div>
</div>
</div>

<div className="relative mx-auto bg-[#D0D0D0] rounded-b-xl rounded-t-sm h-[12px] md:h-[16px] max-w-[580px] shadow-xl">
<div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-md w-[60px] h-[4px] md:w-[80px] md:h-[6px] bg-[#B0B0B0]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-20 max-w-6xl mx-auto">

<div className="lg:w-1/2 bg-[#FAFAFA] p-10 md:p-14 rounded-[2rem] border border-black/5">
<h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-black mb-8">Por que esse formato funciona?</h2>
<div className="relative">
<iconify-icon className="text-[#D4AF37] opacity-60 mb-4" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-base text-zinc-600 leading-relaxed font-light mb-8 italic">
                            A residência oferece a base, mas a maturidade clínica e a autonomia na tomada de decisão exigem uma mentoria contínua.
                        </p>
<p className="text-sm text-black leading-relaxed font-medium">
                            O formato semanal online simula o ambiente de discussão das reuniões clínicas de grandes centros, permitindo que você tire dúvidas sobre seus próprios pacientes de forma direcionada.
                        </p>
</div>
</div>

<div className="lg:w-1/2 py-4">
<span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-4 block">Resultados práticos</span>
<h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-black mb-10">O que você vai dominar ao final de 3 meses:</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<div>
<span className="block text-sm text-black font-medium mb-1">Indicação precisa e sem erro</span>
<span className="block text-sm text-zinc-600 font-light">Segurança total para escolher entre LASIK, PRK e Lentes Fácicas.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
<iconify-icon icon="solar:graph-up-linear" width="16"></iconify-icon>
</div>
<div>
<span className="block text-sm text-black font-medium mb-1">Interpretação avançada de exames</span>
<span className="block text-sm text-zinc-600 font-light">Leitura clínica aprofundada de Pentacam e MS-39.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
<iconify-icon icon="solar:shield-keyhole-linear" width="16"></iconify-icon>
</div>
<div>
<span className="block text-sm text-black font-medium mb-1">Manejo de complicações</span>
<span className="block text-sm text-zinc-600 font-light">Autonomia para lidar com intercorrências e indicar retratamentos.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
<iconify-icon icon="solar:heart-angle-linear" width="16"></iconify-icon>
</div>
<div>
<span className="block text-sm text-black font-medium mb-1">Protocolos de excelência</span>
<span className="block text-sm text-zinc-600 font-light">Pós-operatório desenhado para o máximo conforto do seu paciente.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FAFAFA]">
<div className="container mx-auto px-6">
<div className="max-w-4xl mx-auto bg-white rounded-[2rem] p-10 md:p-16 shadow-2xl shadow-black/5 border border-white/80">
<div className="flex flex-col md:flex-row gap-12 items-center">
<div className="md:w-1/3 flex-shrink-0 relative">

<div className="absolute inset-0 border border-[#D4AF37]/30 rounded-t-full rounded-b-[4rem] scale-105 transform translate-y-2"></div>
<div className="w-48 h-56 md:w-56 md:h-64 mx-auto rounded-t-full rounded-b-[3rem] overflow-hidden shadow-inner bg-[#EBEBEB]">

<img alt="Experiência Prática" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
<div className="md:w-2/3 text-center md:text-left">
<span className="text-xs font-semibold tracking-widest uppercase text-[#D4AF37] mb-3 block">Quem guia sua jornada</span>
<h2 className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">Experiência prática moldada na excelência.</h2>
<p className="text-sm text-zinc-600 leading-relaxed font-light mb-6">
                            Minha motivação para a criação dessa capacitação foram meus <strong className="font-medium text-black">12 anos de experiência prática diária</strong> dentro da sala do laser.
                        </p>
<p className="text-sm text-zinc-600 leading-relaxed font-light">
                            Toda a metodologia é baseada em uma jornada extensa e vivência nos maiores centros de excelência do mundo:
                        </p>
<div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
<span className="text-xs font-medium px-3 py-1 bg-[#FAFAFA] border border-black/5 rounded-md text-black">HC-FMRP</span>
<span className="text-xs font-medium px-3 py-1 bg-[#FAFAFA] border border-black/5 rounded-md text-black">HC-UFPR</span>
<span className="text-xs font-medium px-3 py-1 bg-[#FAFAFA] border border-black/5 rounded-md text-black">Harvard University</span>
<span className="text-xs font-medium px-3 py-1 bg-[#FAFAFA] border border-black/5 rounded-md text-black">Tufts Medical Center</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] py-24 md:py-32 relative overflow-hidden" id="cta">

<div className="absolute inset-0 opacity-[0.05]" style={{backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-[#D4AF37] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-[#FAFAFA] mb-6 leading-tight">
                Eleve o nível da sua prática cirúrgica hoje mesmo.
            </h2>
<p className="text-base text-[#FAFAFA]/70 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
                Tenho um número de <strong className="text-white font-medium">vagas limitadas ao mês</strong>, pois a mentoria é conduzida exclusivamente por mim. Garanta seu lugar o quanto antes e não perca mais nenhum paciente no seu consultório.
            </p>

<a className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] hover:bg-[#C5A028] text-black px-10 py-5 rounded-xl font-semibold text-sm md:text-base transition-all shadow-[0_8px_30px_-4px_rgba(212,175,55,0.4)] hover:shadow-[0_12px_40px_-4px_rgba(212,175,55,0.6)] hover:-translate-y-1 w-full sm:w-auto ring-2 ring-[#D4AF37]/20 ring-offset-4 ring-offset-[#0A0A0A]" href="#">
                Quero transformar minha carreira
                <iconify-icon icon="solar:lock-keyhole-linear" width="20"></iconify-icon>
</a>
<div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#FAFAFA]/50 font-light">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon> Ambiente Seguro</span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:refresh-linear" width="16"></iconify-icon> Acesso Imediato</span>
</div>
</div>
</section>

<footer className="bg-black py-10 border-t border-white/5 text-center">
<div className="container mx-auto px-6 flex flex-col items-center">
<div className="flex items-baseline gap-1 mb-6 text-white/50 opacity-40 grayscale">
<span className="font-serif text-lg tracking-tight uppercase">Refrativa</span>
<span className="font-decorative text-xl lowercase">elite</span>
</div>
<p className="text-xs text-[#FAFAFA]/40 font-light">
                © 2024 Refrativa Elite. Todos os direitos reservados.<br/>
                Capacitação exclusiva para médicos oftalmologistas.
            </p>
</div>
</footer>

    </>
  );
}
