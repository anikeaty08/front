import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Instrument Serif', 'serif'],
},
colors: {
brand: {
gold: '#C4A470',
goldglow: '#D4B480',
dark: '#020204',
panel: '#0A0B10',
border: 'rgba(255,255,255,0.08)'
}
},
animation: {
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'marquee': 'marquee 40s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        // Init Icons
        lucide.createIcons();

        // Scroll Reveal Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none -z-10 bg-grid"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[800px] h-[600px] bg-indigo-900/20 rounded-full blur-[80px] md:blur-[120px] -z-10"></div>
<div className="fixed bottom-0 right-0 w-[400px] h-[400px] bg-brand-gold/5 rounded-full blur-[100px] -z-10"></div>

<nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[92%] max-w-5xl z-50 transition-all duration-300">
<div className="glass-panel rounded-full p-2 pl-4 md:pl-6 flex items-center justify-between shadow-2xl shadow-black/50">
<div className="flex items-center gap-3">
<div className="w-3 h-3 bg-brand-gold rounded-sm rotate-45 shadow-[0_0_12px_rgba(196,164,112,0.8)]"></div>
<div className="flex flex-col">
<span className="text-sm font-serif tracking-wide text-white leading-none">ADEKVAT</span>
<span className="text-[8px] uppercase tracking-[0.2em] text-white/40 leading-none mt-0.5">Jurídico Premium</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors tracking-wide" href="#atuacao">Atuação</a>
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors tracking-wide" href="#sobre">O Escritório</a>
<a className="text-xs font-normal text-white/60 hover:text-white transition-colors tracking-wide" href="#equipe">Sócios</a>
</div>
<div className="flex items-center gap-3">
<a className="bg-white text-brand-dark px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-brand-gold hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#contato">
                    Consultoria
                </a>
</div>
</div>
</nav>
<main className="pt-32 md:pt-40 pb-20">

<section className="container mx-auto px-6 max-w-6xl text-center mb-20 md:mb-32 relative">
<div className="reveal active flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-gold/20 bg-brand-gold/5 backdrop-blur-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-brand-gold"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
</span>
<span className="text-[10px] font-medium text-brand-gold tracking-widest uppercase">Est. 2005 • São Paulo</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-white tracking-tight leading-[0.95] mb-8">
                    Defesa <br className="hidden md:block"/>
<span className="text-white/40 italic pr-2">Estratégica</span>
<span className="text-gradient">Absoluta.</span>
</h1>
<div className="h-px w-32 bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent mb-8"></div>
<p className="text-base md:text-xl font-light text-white/50 max-w-2xl leading-relaxed mb-10 mx-auto">
                    Advocacia artesanal para casos de alta complexidade. Quando o resultado define o futuro do seu patrimônio.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center px-4">
<a className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none" href="#atuacao">
<span className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#020402_0%,#C4A470_50%,#020402_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-full bg-brand-panel px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-3xl transition-all group-hover:bg-[#151515]">
                            Conheça nossa expertise
                            <i className="w-4 h-4 text-brand-gold group-hover:translate-y-0.5 transition-transform" data-lucide="arrow-down"></i>
</span>
</a>
</div>
</div>
</section>

<section className="container mx-auto px-4 max-w-7xl mb-32 reveal">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-brand-gold/30 transition-colors group">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-md bg-brand-gold/10 text-brand-gold">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-brand-gold transition-colors">Patrimônio</span>
</div>
<span className="block font-serif text-3xl text-white">R$ 500M+</span>
<span className="text-[10px] text-white/30">Preservado em litígios</span>
</div>

<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-brand-gold/30 transition-colors group">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-md bg-brand-gold/10 text-brand-gold">
<i className="w-5 h-5" data-lucide="hourglass"></i>
</div>
<span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-brand-gold transition-colors">Tradição</span>
</div>
<span className="block font-serif text-3xl text-white">20 Anos</span>
<span className="text-[10px] text-white/30">Excelência jurídica</span>
</div>

<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-brand-gold/30 transition-colors group">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-md bg-brand-gold/10 text-brand-gold">
<i className="w-5 h-5" data-lucide="layers"></i>
</div>
<span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-brand-gold transition-colors">Atuação</span>
</div>
<span className="block font-serif text-3xl text-white">Full Service</span>
<span className="text-[10px] text-white/30">Integração total</span>
</div>

<div className="glass-panel p-6 rounded-xl border border-white/5 hover:border-brand-gold/30 transition-colors group">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 rounded-md bg-brand-gold/10 text-brand-gold">
<i className="w-5 h-5" data-lucide="award"></i>
</div>
<span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-brand-gold transition-colors">Certificação</span>
</div>
<span className="block font-serif text-3xl text-white">ISO 9001</span>
<span className="text-[10px] text-white/30">Processos auditados</span>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-6xl mb-32" id="atuacao">
<div className="mb-16 md:text-center max-w-2xl mx-auto reveal">
<span className="text-brand-gold text-[10px] tracking-[0.25em] uppercase font-bold mb-4 block">Áreas de Atuação</span>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6">Jurídico sob medida <br/><span className="italic text-white/40">para o seu legado.</span></h2>
<p className="text-white/50 font-light leading-relaxed">
                    Não acreditamos em soluções de prateleira. Cada estratégia é desenhada exclusivamente para o cenário do cliente, combinando profundidade técnica e visão de negócios.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 rounded-3xl glass-panel p-8 md:p-10 relative overflow-hidden group reveal hover:bg-white/[0.02] transition-colors">
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[80px] rounded-full pointer-events-none transition-opacity opacity-50 group-hover:opacity-100"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="mb-8">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-gold">
<i className="w-6 h-6" data-lucide="gavel"></i>
</div>
<h3 className="text-3xl font-serif text-white mb-3">Contencioso Cível</h3>
<p className="text-white/50 text-sm font-light leading-relaxed max-w-md">
                                Resolução de disputas complexas, arbitragem e mediação com foco na preservação de valor. Estratégia processual cirúrgica.
                            </p>
</div>

<div className="w-full relative border-t border-white/10 mt-4 pt-6">
<div className="flex justify-between items-center text-[10px] text-white/30 uppercase tracking-widest font-mono mb-2">
<span>Início</span>
<span className="text-brand-gold">Sentença Favorável</span>
</div>
<div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-brand-gold/20 via-brand-gold to-brand-gold w-[85%] relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
</div>
</div>
<div className="mt-4 flex gap-4">
<div className="bg-black/40 border border-white/10 px-3 py-2 rounded text-[10px] text-white/60 font-mono">
                                    DOC_REF: <span className="text-white">LIMINAR_DEFERIDA</span>
</div>
<div className="bg-black/40 border border-white/10 px-3 py-2 rounded text-[10px] text-white/60 font-mono">
                                    STATUS: <span className="text-green-400">ATIVO</span>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-3xl glass-panel p-8 relative overflow-hidden group reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-gold">
<i className="w-6 h-6" data-lucide="building-2"></i>
</div>
<h3 className="text-2xl font-serif text-white mb-2">Direito Empresarial</h3>
<p className="text-white/50 text-sm font-light mb-8">
                        Assessoria em contratos, M&amp;A, governança corporativa e estruturação societária.
                    </p>

<div className="bg-brand-dark/50 rounded-lg p-4 border border-white/5 transform group-hover:scale-105 transition-transform duration-500">
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-[10px] text-white/60 font-mono border-b border-white/5 pb-2">
<i className="w-3 h-3 text-brand-gold" data-lucide="file-check"></i>
<span>Contrato Social.pdf</span>
</div>
<div className="flex items-center gap-3 text-[10px] text-white/60 font-mono border-b border-white/5 pb-2">
<i className="w-3 h-3 text-brand-gold" data-lucide="file-check"></i>
<span>Acordo Sócios.pdf</span>
</div>
<div className="flex items-center gap-3 text-[10px] text-white/60 font-mono">
<i className="w-3 h-3 text-brand-gold" data-lucide="file-check"></i>
<span>Compliance.docx</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-3xl glass-panel p-8 relative overflow-hidden group reveal delay-100">
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-gold/10 blur-[60px] rounded-full"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-brand-gold">
<i className="w-6 h-6" data-lucide="scroll"></i>
</div>
<h3 className="text-2xl font-serif text-white mb-2">Sucessão Patrimonial</h3>
<p className="text-white/50 text-sm font-light mb-8">
                        Holdings familiares e proteção de ativos para as próximas gerações.
                    </p>
<div className="relative h-24">
<div className="absolute inset-0 flex flex-col gap-3">

<div className="relative w-full bg-brand-dark/50 rounded-xl p-3 flex items-center justify-between border border-brand-gold/20 shadow-[0_0_15px_rgba(196,164,112,0.1)]">
<span className="text-xs text-white/80 font-medium">Blindagem</span>
<div className="flex items-center gap-2">
<span className="text-[9px] text-brand-gold uppercase tracking-wider">Ativada</span>
<div className="w-8 h-4 bg-brand-gold rounded-full relative">
<div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 rounded-3xl glass-panel p-8 md:p-10 relative overflow-hidden group reveal">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 h-full">
<div className="max-w-md">
<i className="w-8 h-8 text-brand-gold mb-6 fill-brand-gold/20" data-lucide="quote"></i>
<p className="font-serif text-xl md:text-2xl text-white italic mb-6 leading-relaxed">
                                "A excelência não é um ato, mas um hábito. Nossa obsessão é a perfeição técnica em cada detalhe do processo."
                            </p>
<div className="flex items-center gap-4">
<div className="h-px w-12 bg-white/20"></div>
<span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Dr. Roberto Adekvat, Sócio Fundador</span>
</div>
</div>

<div className="hidden md:block w-[240px] bg-[#0A0A0A] border border-white/10 rounded-xl p-6 font-serif text-center shadow-2xl relative rotate-3 group-hover:rotate-0 transition-transform duration-500">
<div className="w-full h-px bg-white/10 mb-4"></div>
<h4 className="text-brand-gold text-lg">OAB/SP 00.000</h4>
<p className="text-xs text-white/40 mt-2">Inscrito desde 2005</p>
<div className="mt-6 flex justify-center">
<i className="w-8 h-8 text-white/20" data-lucide="feather"></i>
</div>
<div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/20 to-transparent blur opacity-20 -z-10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 relative overflow-hidden border-y border-white/5">
<div className="absolute inset-0 bg-brand-dark opacity-90"></div>
<div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-8">Da Complexidade à Clareza</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 items-center">

<div className="flex flex-col gap-4 items-center opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100 group">
<div className="relative w-64 h-64">

<div className="absolute top-4 left-10 p-4 bg-white/5 border border-white/10 rounded shadow-lg transform -rotate-12 group-hover:-translate-y-2 transition-transform">
<i className="w-8 h-8 text-red-400" data-lucide="file-warning"></i>
</div>
<div className="absolute bottom-10 right-4 p-4 bg-white/5 border border-white/10 rounded shadow-lg transform rotate-6 group-hover:translate-y-2 transition-transform">
<i className="w-8 h-8 text-white/40" data-lucide="scale"></i>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-dashed border-white/20 rounded-full flex items-center justify-center">
<span className="text-xs text-white/20">LITÍGIO</span>
</div>
</div>
<p className="text-xs font-medium text-white/40 uppercase tracking-widest">Risco Jurídico</p>
</div>

<div className="flex flex-col gap-4 items-center">
<div className="relative w-64 h-64 flex items-center justify-center">

<div className="absolute inset-0 border border-brand-gold/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 border border-brand-gold/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

<div className="w-24 h-24 bg-brand-panel rounded-full border border-brand-gold/30 flex items-center justify-center shadow-[0_0_30px_rgba(196,164,112,0.2)] relative z-10">
<i className="w-10 h-10 text-brand-gold" data-lucide="shield-check"></i>
</div>

<div className="absolute top-0 left-1/2 w-1 h-1 bg-brand-gold rounded-full shadow-[0_0_10px_#C4A470]"></div>
</div>
<p className="text-xs font-medium text-brand-gold uppercase tracking-widest">Segurança Jurídica</p>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 max-w-4xl text-center mb-24 mt-24" id="contato">
<div className="glass-panel p-8 md:p-16 rounded-[2rem] border border-white/10 relative overflow-hidden reveal">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-brand-gold/5 to-transparent pointer-events-none"></div>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-6 relative z-10">Inicie uma conversa.</h2>
<p className="text-base md:text-lg text-white/50 font-light mb-12 max-w-lg mx-auto relative z-10">
                    O sigilo é absoluto desde o primeiro contato.
                </p>
<form className="space-y-4 max-w-md mx-auto relative z-10 text-left">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-white/40 ml-1">Nome</label>
<input className="w-full rounded-lg px-4 py-3 text-sm text-white tech-input placeholder-white/20" placeholder="Seu nome" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-white/40 ml-1">Email</label>
<input className="w-full rounded-lg px-4 py-3 text-sm text-white tech-input placeholder-white/20" placeholder="corp@email.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-white/40 ml-1">Assunto</label>
<input className="w-full rounded-lg px-4 py-3 text-sm text-white tech-input placeholder-white/20" placeholder="Natureza do caso" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-white/40 ml-1">Relato (Criptografado)</label>
<textarea className="w-full rounded-lg px-4 py-3 text-sm text-white tech-input placeholder-white/20 resize-none" placeholder="Breve descrição..." rows="3"></textarea>
</div>
<button className="w-full bg-brand-gold text-brand-dark px-8 py-4 rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(196,164,112,0.3)] mt-4" type="button">
                        Agendar Reunião
                    </button>
<div className="flex items-center justify-center gap-2 mt-6">
<i className="w-3 h-3 text-white/30" data-lucide="lock"></i>
<span className="text-[10px] text-white/30">Comunicação Protegida</span>
</div>
</form>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#020402] pt-20 pb-10">
<div className="container mx-auto px-6 max-w-6xl">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-3 h-3 bg-brand-gold rounded-sm rotate-45"></div>
<span className="text-sm font-serif tracking-wide text-white">ADEKVAT</span>
</div>
<p className="text-white/40 text-sm max-w-xs font-light">
                        Av. Paulista, 1000 - Cj. 1501<br/>
                        Bela Vista, São Paulo - SP
                    </p>
<div className="mt-6 flex flex-col gap-2">
<a className="text-xs text-white/60 hover:text-brand-gold transition-colors" href="tel:+551130000000">+55 11 3000-0000</a>
<a className="text-xs text-white/60 hover:text-brand-gold transition-colors" href="mailto:contato@adekvat.com.br">contato@adekvat.com.br</a>
</div>
</div>
<div className="grid grid-cols-2 gap-12 md:gap-24">
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-xs uppercase tracking-widest text-brand-gold">Áreas</h4>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Contencioso Cível</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Direito Empresarial</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Sucessão Patrimonial</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium text-xs uppercase tracking-widest text-brand-gold">Institucional</h4>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Sobre Nós</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Equipe</a>
<a className="text-white/40 text-sm hover:text-white transition-colors" href="#">Política de Privacidade</a>
</div>
</div>
</div>
<div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4 sm:gap-0">
<span className="text-white/20 text-xs font-mono">© 2025 Adekvat Jurídica. OAB/SP 00.000.</span>
<div className="flex gap-4">
<i className="w-4 h-4 text-white/30 hover:text-white cursor-pointer transition-colors" data-lucide="linkedin"></i>
<i className="w-4 h-4 text-white/30 hover:text-white cursor-pointer transition-colors" data-lucide="instagram"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
