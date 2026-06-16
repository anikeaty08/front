import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        function togglePricing() {
            const isAnnual = document.getElementById('pricing-toggle').checked;
            const priceElements = document.querySelectorAll('.price-val');
            const labelMonthly = document.getElementById('label-monthly');
            const labelAnnual = document.getElementById('label-annual');
            const periodTexts = document.querySelectorAll('.period-text');

            if (isAnnual) {
                labelMonthly.classList.replace('text-white', 'text-slate-400');
                labelAnnual.classList.replace('text-slate-400', 'text-white');
                priceElements.forEach(el => {
                    el.innerText = el.getAttribute('data-annual');
                });
                periodTexts.forEach(el => el.innerText = '/mês (faturado anualmente)');
            } else {
                labelMonthly.classList.replace('text-slate-400', 'text-white');
                labelAnnual.classList.replace('text-white', 'text-slate-400');
                priceElements.forEach(el => {
                    el.innerText = el.getAttribute('data-monthly');
                });
                periodTexts.forEach(el => el.innerText = '/mês');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-white/5 bg-slate-950/80">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-lg shadow-blue-500/20 overflow-hidden relative">
<svg className="w-full h-full absolute inset-0" viewbox="-20 -10 130 130">
<path d="M -10,90 L 35,45 L 15,25 L 95,5 L 75,85 L 55,65 L 10,110 Z" fill="black"></path>
</svg>
</div>
<span className="text-xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Flow Deal</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-lg transition-colors text-slate-400 hover:text-white" href="#aflowdeal">A Flow Deal</a>
<a className="text-lg transition-colors text-slate-400 hover:text-white" href="#precos">Preços</a>
<a className="transition-colors text-lg font-medium rounded-full pt-2 pr-4 pb-2 pl-4 text-white bg-emerald-600 hover:bg-emerald-500" href="#demo">Agendar demonstração</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 px-6 overflow-hidden">
<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[120px] -z-10 pointer-events-none bg-blue-600/20"></div>
<div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-lg font-medium mb-8 text-blue-400">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                Criada por especialistas em automação, AV e tecnologia
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-b leading-tight from-white to-slate-400">
                A forma mais rápida, inteligente e profissional de montar orçamentos.
            </h1>
<p className="md:text-2xl leading-relaxed text-xl text-slate-400 max-w-2xl mt-8 mr-auto ml-auto">A Flow Deal é uma plataforma feita sob medida para quem trabalha com automação, áudio, redes, segurança, energia solar e muito mais. Crie propostas comerciais em minutos, com produtos sempre atualizados, layout profissional e sem complicação.</p>
<div className="flex flex-col sm:flex-row mt-10 gap-x-4 gap-y-4 items-center justify-center">
<a className="sm:w-auto hover:from-emerald-500 transition-all inline-flex items-center justify-center gap-2 shadow-emerald-500/25 hover:to-emerald-400 text-xl font-medium text-white bg-gradient-to-r to-emerald-500 from-emerald-600 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#demo">
                    Agendar demonstração
                    <i className="w-5 h-5" data-lucide="arrow-right"></i></a>
</div>
</div>
<div className="max-w-5xl mx-auto mt-20 relative group">
<div className="absolute -inset-1 bg-gradient-to-r via-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 from-blue-600 to-sky-400"></div>
<div className="relative aspect-video border rounded-2xl overflow-hidden flex items-center justify-center cursor-pointer shadow-2xl bg-slate-900 border-white/10 shadow-black">
<img alt="Flow Deal Dashboard Preview" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
<div className="absolute inset-0 group-hover:bg-slate-950/20 transition-colors bg-slate-950/40"></div>
<div className="w-20 h-20 rounded-full backdrop-blur-md border flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl z-10 bg-white/10 border-white/20 text-white">
<i className="w-8 h-8 ml-1 fill-white" data-lucide="play"></i>
</div>
</div>
</div>
</section>

<section className="border-y bg-white/[0.02] py-16 px-6 border-white/5">
<div className="flex flex-col md:flex-row justify-center items-stretch gap-12 md:gap-16 max-w-5xl mx-auto text-center">
<div className="flex flex-col gap-6 items-center flex-1">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">82%</h2>
<p className="text-xl md:text-2xl font-medium max-w-md leading-relaxed text-slate-300">
                    dos compradores dizem que ser o primeiro a apresentar uma proposta influencia fortemente na decisão de compra.
                </p>
<div className="mt-auto flex flex-col items-center gap-2">
<p className="text-lg text-slate-400"></p>
<p className="text-sm text-slate-500 font-medium">Fonte: Gartner e HubSpot.</p>
</div>
</div>
<div className="hidden md:block w-px bg-white/10 self-stretch my-4"></div>
<div className="md:hidden w-32 h-px bg-white/10 mx-auto"></div>
<div className="flex flex-col gap-6 items-center flex-1">
<h2 className="text-5xl md:text-7xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">50%</h2>
<p className="text-xl md:text-2xl font-medium max-w-md leading-relaxed text-slate-300">
                    A primeira proposta recebida tem 50% mais chance de ser aceita se for clara, objetiva e entregue rapidamente.
                </p>
<div className="mt-auto flex flex-col items-center gap-2">
<p aria-hidden="true" className="text-lg text-slate-400 invisible">-</p>
<p className="text-sm text-slate-500 font-medium">Fonte: Gartner e HubSpot.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-7xl mx-auto">
<div className="max-w-5xl mx-auto text-center mb-20">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.3] mb-10 text-white">
                    Você ainda <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 shadow-[0_0_20px_rgba(239,68,68,0.2)] align-middle -mt-2 text-red-400"><iconify-icon className="text-red-500" icon="solar:hourglass-line-linear"></iconify-icon>perde horas</span><br className="hidden md:block"/> montando propostas no...
                </h2>
<div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-5">
<div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-2xl md:text-3xl font-medium tracking-tight shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-transform duration-300 text-blue-400">
<iconify-icon className="text-blue-500" icon="solar:document-text-linear"></iconify-icon> Word
                    </div>
<span className="hidden sm:block text-3xl font-medium text-slate-600">,</span>
<div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-2xl md:text-3xl font-medium tracking-tight shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-1 transition-transform duration-300 text-emerald-400">
<iconify-icon className="text-emerald-500" icon="solar:chart-square-linear"></iconify-icon> Excel
                    </div>
<span className="hidden sm:block text-3xl font-medium text-slate-600">e</span>
<div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-orange-500/10 border border-orange-500/20 text-2xl md:text-3xl font-medium tracking-tight shadow-[0_0_30px_rgba(249,115,22,0.15)] hover:-translate-y-1 transition-transform duration-300 text-orange-400">
<iconify-icon className="text-orange-500" icon="solar:presentation-graph-linear"></iconify-icon> PowerPoint
                    </div>
<span className="hidden sm:block text-4xl font-medium text-slate-600">?</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group p-8 rounded-2xl border border-red-500/40 bg-red-500/5 shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:border-red-500/60">
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-300 text-red-400">
<i data-lucide="clock"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-white">Propostas lentas e manuais</h3>
<p className="text-xl leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400">
                        Você perde horas montando cada proposta do zero — quando poderia estar vendendo ou atendendo mais clientes.
                    </p>
</div>
<div className="group p-8 rounded-2xl border border-red-500/40 bg-red-500/5 shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:border-red-500/60">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-300 text-orange-400">
<i data-lucide="alert-triangle"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-white">Erros e preços desatualizados</h3>
<p className="text-xl leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400">
                        Atualizar preços manualmente ou depender de planilhas aumenta o risco de falhas que custam dinheiro e confiança.
                    </p>
</div>
<div className="group p-8 rounded-2xl border border-red-500/40 bg-red-500/5 shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_30px_rgba(239,68,68,0.4)] hover:border-red-500/60">
<div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-yellow-500/20 transition-all duration-300 text-yellow-400">
<i data-lucide="trending-down"></i>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-white">Baixa conversão por demora</h3>
<p className="text-xl leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400">
                        Enquanto a proposta não chega, o cliente esfria — e muitas vezes fecha com quem respondeu mais rápido.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t overflow-hidden border-white/5 bg-slate-900/40">
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-70">
<div className="absolute top-1/2 left-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" style={{transform: 'translate(-50%, -50%)'}}></div>
<div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] border border-sky-500/10 rounded-full border-dashed" style={{animation: 'spin-slow 25s linear infinite'}}></div>
<div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] border border-blue-500/10 rounded-full border-dashed opacity-50" style={{animation: 'spin-slow-reverse 35s linear infinite'}}></div>
<div className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] border border-cyan-500/5 rounded-full border-dashed opacity-30" style={{animation: 'spin-slow 45s linear infinite'}}></div>
<div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" style={{animation: 'ai-float2 20s ease-in-out infinite'}}></div>
<div className="absolute top-10 left-10 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px]" style={{animation: 'ai-float1 18s ease-in-out infinite reverse'}}></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sm font-medium mb-8 uppercase tracking-widest shadow-[0_0_20px_rgba(56,189,248,0.15)] text-sky-400">
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
                    A Solução Definitiva
                </div>
<h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-6 leading-none text-white">
                    Com <span className="text-transparent bg-clip-text bg-gradient-to-r drop-shadow-[0_0_40px_rgba(56,189,248,0.4)] from-blue-400 via-sky-300 to-cyan-300">Flow Deal.</span>
</h2>
<p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mt-8 text-slate-400">
                    Transforme processos lentos em uma máquina de vendas imbatível. Orçamentos impecáveis em uma fração do tempo.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group p-8 rounded-2xl border backdrop-blur-sm shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] border-sky-400/50 bg-sky-900/10 hover:border-sky-400/80">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300 text-blue-400">
<iconify-icon className="text-3xl" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-white">Propostas ágeis.</h3>
<p className="text-xl leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400">
                        Ganhe velocidade sem abrir mão da qualidade. Com a Flow Deal, você monta propostas profissionais em poucos cliques, economizando tempo precioso no dia a dia e atendendo seus clientes com muito mais rapidez.
                    </p>
</div>
<div className="group p-8 rounded-2xl border backdrop-blur-sm shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] border-sky-400/50 bg-sky-900/10 hover:border-sky-400/80">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300 text-emerald-400">
<iconify-icon className="text-3xl" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-white">Produtos e preços atualizados.</h3>
<p className="text-xl leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400">
                        Seu portfólio de produtos e soluções disponíveis por completo dentro da plataforma. Organizados por categorias e grupos de produtos.
                    </p>
</div>
<div className="group p-8 rounded-2xl border backdrop-blur-sm shadow-[0_0_20px_rgba(56,189,248,0.25)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] border-sky-400/50 bg-sky-900/10 hover:border-sky-400/80">
<div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300 text-cyan-400">
<iconify-icon className="text-3xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 text-white">Mais conversão, menos retrabalho.</h3>
<p className="text-xl leading-relaxed group-hover:text-slate-300 transition-colors text-slate-400">
                        A agilidade e precisão das propostas feitas com a Flow Deal aumentam suas chances de fechar negócio. Menos correções, menos retrabalho — mais foco em vender e fazer seu negócio crescer.
                    </p>
</div>
</div>
<div className="mt-32 text-center max-w-4xl mx-auto">
<h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-white">
                    Menos tempo planilhando, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">mais tempo vendendo.</span>
</h3>
<p className="mt-6 text-xl text-slate-400">
                    Transforme orçamentos complexos em propostas irresistíveis em minutos e escale os resultados da sua operação comercial.
                </p>
</div>

<div className="mt-16 max-w-5xl mx-auto relative grid md:grid-cols-2 gap-6 px-4 sm:px-0">

<div className="relative bg-slate-900/60 backdrop-blur-xl border border-emerald-500/20 p-6 md:p-8 rounded-3xl shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-50"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<div>
<div className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">Fechamentos</div>
<div className="text-2xl font-medium text-white flex items-center gap-3">
                                Volume de Vendas
                                <span className="inline-flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> Alta
                                </span>
</div>
</div>
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
<iconify-icon className="text-2xl" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
</div>
<div className="relative w-full aspect-[4/3] sm:aspect-[21/9] md:aspect-[4/3] lg:aspect-[16/9]">
<svg className="w-full h-full overflow-visible" viewbox="0 0 400 200">
<defs>
<lineargradient id="sales-area" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="sales-line" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#34d399"></stop>
<stop offset="100%" stop-color="#10b981"></stop>
</lineargradient>
<filter height="140%" id="glow-sales" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="4"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<g stroke="#ffffff" stroke-dasharray="4 4" stroke-opacity="0.05" strokeWidth="1.5">
<line x1="0" x2="400" y1="40" y2="40"></line>
<line x1="0" x2="400" y1="100" y2="100"></line>
<line x1="0" x2="400" y1="160" y2="160"></line>
</g>

<path className="area-new" d="M 0 180 C 100 180, 150 120, 200 100 S 250 60, 300 40 S 350 20, 400 20 L 400 200 L 0 200 Z" fill="url(#sales-area)"></path>

<path className="line-new" d="M 0 180 C 100 180, 150 120, 200 100 S 250 60, 300 40 S 350 20, 400 20" fill="none" filter="url(#glow-sales)" stroke="url(#sales-line)" strokeLinecap="round" strokeWidth="4"></path>

<g transform="translate(400, 20)">
<circle cx="0" cy="0" fill="#10b981" r="6"></circle>
<circle className="node-pop-new" cx="0" cy="0" fill="#10b981" opacity="0.4" r="14"></circle>
</g>
</svg>
</div>
</div>

<div className="relative bg-slate-900/60 backdrop-blur-xl border border-sky-500/20 p-6 md:p-8 rounded-3xl shadow-[0_0_40px_-10px_rgba(14,165,233,0.2)] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 to-transparent opacity-50"></div>
<div className="flex items-center justify-between mb-8 relative z-10">
<div>
<div className="text-slate-400 text-sm font-medium mb-1 uppercase tracking-wider">Produtividade</div>
<div className="text-2xl font-medium text-white flex items-center gap-3">
                                Tempo Gasto
                                <span className="inline-flex items-center gap-1 text-sm font-medium px-2 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
<iconify-icon icon="solar:arrow-right-down-linear"></iconify-icon> Reduzido
                                </span>
</div>
</div>
<div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
<iconify-icon className="text-2xl" icon="solar:stopwatch-linear"></iconify-icon>
</div>
</div>
<div className="relative w-full aspect-[4/3] sm:aspect-[21/9] md:aspect-[4/3] lg:aspect-[16/9]">
<svg className="w-full h-full overflow-visible" viewbox="0 0 400 200">
<defs>
<lineargradient id="time-area" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.4"></stop>
<stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"></stop>
</lineargradient>
<lineargradient id="time-line" x1="0" x2="1" y1="0" y2="0">
<stop offset="0%" stop-color="#38bdf8"></stop>
<stop offset="100%" stop-color="#0ea5e9"></stop>
</lineargradient>
<filter height="140%" id="glow-time" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="4"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>

<g stroke="#ffffff" stroke-dasharray="4 4" stroke-opacity="0.05" strokeWidth="1.5">
<line x1="0" x2="400" y1="40" y2="40"></line>
<line x1="0" x2="400" y1="100" y2="100"></line>
<line x1="0" x2="400" y1="160" y2="160"></line>
</g>

<path className="area-new" d="M 0 40 C 100 40, 150 100, 200 140 S 250 170, 300 180 S 350 190, 400 190 L 400 200 L 0 200 Z" fill="url(#time-area)"></path>

<path className="line-new" d="M 0 40 C 100 40, 150 100, 200 140 S 250 170, 300 180 S 350 190, 400 190" fill="none" filter="url(#glow-time)" stroke="url(#time-line)" strokeLinecap="round" strokeWidth="4"></path>

<g transform="translate(400, 190)">
<circle cx="0" cy="0" fill="#0ea5e9" r="6"></circle>
<circle className="node-pop-new" cx="0" cy="0" fill="#0ea5e9" opacity="0.4" r="14"></circle>
</g>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t relative overflow-hidden border-white/5 bg-slate-950" id="aflowdeal">
<div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[120px] -z-10 pointer-events-none bg-blue-600/10"></div>
<div className="max-w-7xl mr-auto ml-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
<div className="">
<span className="font-medium text-lg tracking-wide uppercase mb-4 block text-blue-400">A Flow Deal</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight text-white">
                        Nossa missão é <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">simplificar o jeito</span> que o mercado técnico vende.
                    </h2>
<p className="text-xl leading-relaxed mb-6 text-slate-400">
                        A Flow Deal é uma plataforma criada especialmente para fabricantes, distribuidores, revendas e integradores, de automação, áudio, vídeo, redes, segurança e energia solar que precisam montar orçamentos com agilidade, precisão e profissionalismo.
                    </p>
<p className="text-xl leading-relaxed text-slate-400">
                        Fomos fundados por pessoas que atuam no mercado e sentem na pele os desafios de orçar projetos com dezenas de produtos, tabelas desatualizadas e processos manuais.
                    </p>
</div>
<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 from-blue-600 to-sky-400"></div>
<img alt="Profissionais técnicos e engenharia" className="relative rounded-3xl border shadow-2xl object-cover aspect-[4/3] w-full border-white/10 shadow-black/50" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
</div>
</div>
<div>
<div className="text-center mb-16 max-w-3xl mx-auto">
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-white">Para revendedores e integradores, a Flow Deal oferece:</h3>
<p className="text-xl text-slate-400">Agilidade, organização e vendas mais rápidas — tudo em uma só plataforma.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl border bg-gradient-to-b to-transparent relative overflow-hidden group hover:border-sky-500/30 transition-colors border-white/10 from-white/5">
<div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform text-sky-400">
<iconify-icon className="text-3xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h4 className="text-2xl font-medium tracking-tight mb-3 relative z-10 text-white">Eficiência e velocidade</h4>
<p className="text-xl leading-relaxed relative z-10 text-slate-400">
                            Criação de propostas comerciais 5x mais rápidas.
                        </p>
</div>
<div className="p-8 rounded-2xl border bg-gradient-to-b to-transparent relative overflow-hidden group hover:border-blue-500/30 transition-colors border-white/10 from-white/5">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform text-blue-400">
<iconify-icon className="text-3xl" icon="solar:refresh-square-linear"></iconify-icon>
</div>
<h4 className="text-2xl font-medium tracking-tight mb-3 relative z-10 text-white">Agilidade e menos erros</h4>
<p className="text-xl leading-relaxed relative z-10 text-slate-400">
                            Acesso automático a catálogos e preços atualizados de fabricantes parceiros.
                        </p>
</div>
<div className="p-8 rounded-2xl border bg-gradient-to-b to-transparent relative overflow-hidden group hover:border-teal-500/30 transition-colors border-white/10 from-white/5">
<div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform text-teal-400">
<iconify-icon className="text-3xl" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h4 className="text-2xl font-medium tracking-tight mb-3 relative z-10 text-white">Mais conversão</h4>
<p className="text-xl leading-relaxed relative z-10 text-slate-400">
                            Economia de tempo e mais foco no que realmente importa: fechar negócios.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t relative overflow-hidden border-white/5 bg-slate-950">
<div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 leading-tight text-white">
                    Tenha o controle com <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">dados reais.</span>
</h2>
<p className="text-xl leading-relaxed text-slate-400">
                    Acompanhe a performance das suas propostas e entenda o perfil dos seus projetos através de um dashboard interativo e focado em resultados.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-6">
<div className="p-6 md:p-8 rounded-2xl border shadow-2xl flex flex-col border-white/10 bg-slate-900">
<h3 className="text-xl font-medium tracking-tight mb-10 text-white">Propostas por Status</h3>
<div className="relative flex-1 min-h-[280px] flex items-end pl-8 pb-12">
<div className="absolute left-0 top-0 bottom-12 flex flex-col justify-between text-xs text-slate-500 font-medium">
<span>16</span><span>12</span><span>8</span><span>4</span><span>0</span>
</div>
<div className="absolute inset-x-8 top-1.5 bottom-12 flex flex-col justify-between pointer-events-none z-0">
<div className="border-b w-full border-white/5"></div><div className="border-b w-full border-white/5"></div>
<div className="border-b w-full border-white/5"></div><div className="border-b w-full border-white/5"></div>
<div className="border-b w-full border-white/5"></div>
</div>
<div className="relative z-10 flex items-end justify-between w-full h-full gap-2 lg:gap-4 px-2">
<div className="flex-1 flex justify-center h-full relative group">
<span className="absolute -bottom-10 text-[10px] sm:text-xs font-medium -rotate-12 whitespace-nowrap text-slate-600">TEMPORARIA</span>
</div>
<div className="flex-1 flex justify-center h-full relative group">
<span className="absolute -bottom-10 text-[10px] sm:text-xs font-medium -rotate-12 whitespace-nowrap text-slate-600">RASCUNHO</span>
</div>
<div className="flex-1 flex justify-center h-full relative group items-end">
<div className="w-full max-w-[48px] bg-[#3b82f6] rounded-t-sm transition-all duration-300 group-hover:bg-[#60a5fa] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]" style={{height: '31%'}}></div>
<span className="absolute -bottom-10 text-[10px] sm:text-xs font-medium -rotate-12 whitespace-nowrap group-hover:text-white transition-colors text-slate-400">ENVIADA</span>
</div>
<div className="flex-1 flex justify-center h-full relative group items-end">
<div className="w-full max-w-[48px] bg-[#facc15] rounded-t-sm transition-all duration-300 group-hover:bg-[#fde047] group-hover:shadow-[0_0_15px_rgba(250,204,21,0.5)]" style={{height: '100%'}}></div>
<span className="absolute -bottom-10 text-[10px] sm:text-xs font-medium -rotate-12 whitespace-nowrap group-hover:text-white transition-colors text-slate-400">LIDA</span>
</div>
<div className="flex-1 flex justify-center h-full relative group items-end">
<div className="w-full max-w-[48px] bg-[#10b981] rounded-t-sm transition-all duration-300 group-hover:bg-[#34d399] group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]" style={{height: '43%'}}></div>
<span className="absolute -bottom-10 text-[10px] sm:text-xs font-medium -rotate-12 whitespace-nowrap group-hover:text-white transition-colors text-slate-400">ACEITA</span>
</div>
<div className="flex-1 flex justify-center h-full relative group items-end">
<div className="w-full max-w-[48px] bg-[#ef4444] rounded-t-sm transition-all duration-300 group-hover:bg-[#f87171] group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]" style={{height: '6%'}}></div>
<span className="absolute -bottom-10 text-[10px] sm:text-xs font-medium -rotate-12 whitespace-nowrap group-hover:text-white transition-colors text-slate-400">REJEITADA</span>
</div>
<div className="flex-1 flex justify-center h-full relative group">
<span className="absolute -bottom-10 text-[10px] sm:text-xs font-medium -rotate-12 whitespace-nowrap text-slate-600">EXPIRADA</span>
</div>
<div className="flex-1 flex justify-center h-full relative group">
<span className="absolute -bottom-10 text-[10px] sm:text-xs font-medium -rotate-12 whitespace-nowrap text-slate-600">CANCELADA</span>
</div>
<div className="flex-1 flex justify-center h-full relative group items-end">
<div className="w-full max-w-[48px] bg-[#f97316] rounded-t-sm transition-all duration-300 group-hover:bg-[#fb923c] group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]" style={{height: '12%'}}></div>
<span className="absolute -bottom-10 text-[10px] sm:text-xs font-medium -rotate-12 whitespace-nowrap group-hover:text-white transition-colors text-slate-400">NOVO_CONTATO</span>
</div>
</div>
</div>
</div>
<div className="p-6 md:p-8 rounded-2xl border shadow-2xl flex flex-col border-white/10 bg-slate-900">
<h3 className="text-xl font-medium tracking-tight mb-4 text-white">Tipos de Projeto</h3>
<div className="flex-1 flex flex-col items-center justify-center min-h-[280px]">
<div className="relative w-56 h-56 md:w-64 md:h-64 mb-8">
<svg className="w-full h-full transform -rotate-90 drop-shadow-lg" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="28" stroke="#0f172a" strokeWidth="26"></circle>
<circle className="transition-all duration-300 hover:stroke-width-26 cursor-pointer" cx="50" cy="50" fill="transparent" r="28" stroke="#eab308" stroke-dasharray="83 175.93" stroke-dashoffset="0" strokeWidth="24"></circle>
<circle className="transition-all duration-300 hover:stroke-width-26 cursor-pointer" cx="50" cy="50" fill="transparent" r="28" stroke="#6366f1" stroke-dasharray="65 175.93" stroke-dashoffset="-85" strokeWidth="24"></circle>
<circle className="transition-all duration-300 hover:stroke-width-26 cursor-pointer" cx="50" cy="50" fill="transparent" r="28" stroke="#14b8a6" stroke-dasharray="12 175.93" stroke-dashoffset="-152" strokeWidth="24"></circle>
<circle className="transition-all duration-300 hover:stroke-width-26 cursor-pointer" cx="50" cy="50" fill="transparent" r="28" stroke="#8b5cf6" stroke-dasharray="10 175.93" stroke-dashoffset="-166" strokeWidth="24"></circle>
</svg>
<div className="absolute inset-[26%] rounded-full shadow-[inset_0_4px_10px_rgba(0,0,0,0.5)] bg-slate-900"></div>
</div>
<div className="flex flex-wrap justify-center gap-x-6 gap-y-3 w-full">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-4 h-1.5 bg-[#8b5cf6] rounded-sm group-hover:scale-110 transition-transform"></div>
<span className="text-sm font-medium group-hover:text-white transition-colors text-slate-400">Condomínio Fechado</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-4 h-1.5 bg-[#14b8a6] rounded-sm group-hover:scale-110 transition-transform"></div>
<span className="text-sm font-medium group-hover:text-white transition-colors text-slate-400">Apartamento</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-4 h-1.5 bg-[#eab308] rounded-sm group-hover:scale-110 transition-transform"></div>
<span className="text-sm font-medium group-hover:text-white transition-colors text-slate-400">Residencial</span>
</div>
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-4 h-1.5 bg-[#6366f1] rounded-sm group-hover:scale-110 transition-transform"></div>
<span className="text-sm font-medium group-hover:text-white transition-colors text-slate-400">Corporativo</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t relative overflow-hidden border-white/5 bg-slate-950">
<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_90%)]">
<div className="absolute inset-0 ai-grid opacity-30" style={{animation: 'flow-bg-pan 15s linear infinite'}}></div>
<div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent to-transparent via-blue-900/40">
<div className="absolute top-[-1px] left-0 w-[300px] h-[3px] bg-gradient-to-r from-transparent to-transparent blur-[2px] via-blue-400" style={{animation: 'stream-fast 3s ease-in-out infinite'}}></div>
</div>
<div className="absolute top-[60%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent to-transparent via-cyan-900/30">
<div className="absolute top-[-1px] left-0 w-[200px] h-[2px] bg-gradient-to-r from-transparent to-transparent blur-[1px] via-cyan-300" style={{animation: 'stream-fast-reverse 4s ease-in-out infinite 1s'}}></div>
</div>
<div className="absolute top-[85%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent to-transparent via-blue-900/30">
<div className="absolute top-[-1px] left-0 w-[400px] h-[2px] bg-gradient-to-r from-transparent to-transparent blur-[1px] via-sky-400" style={{animation: 'stream-fast 2.5s ease-in-out infinite 2s'}}></div>
</div>
<svg className="absolute inset-0 w-full h-full opacity-60" preserveaspectratio="xMidYMid slice" viewbox="0 0 1000 1000">
<defs>
<filter height="140%" id="ai-glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="6"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<g fill="none" opacity="0.5" stroke="#1e3a8a" strokeWidth="1.5">
<path d="M 150 250 L 350 450 L 700 300 L 850 600 L 500 800 L 250 650 Z"></path>
<path d="M 350 450 L 500 800"></path>
<path d="M 700 300 L 250 650"></path>
</g>
<g fill="none" filter="url(#ai-glow)" stroke="#38bdf8" strokeWidth="2.5">
<path d="M 150 250 L 350 450 L 700 300" stroke-dasharray="80 2000" style={{animation: 'data-packet 4s cubic-bezier(0.4, 0, 0.2, 1) infinite'}}></path>
<path d="M 700 300 L 850 600 L 500 800" stroke-dasharray="60 2000" style={{animation: 'data-packet 3s cubic-bezier(0.4, 0, 0.2, 1) infinite 1s'}}></path>
<path d="M 500 800 L 250 650 L 150 250" stroke-dasharray="100 2000" style={{animation: 'data-packet 5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.5s'}}></path>
<path d="M 350 450 L 500 800" stroke-dasharray="50 2000" style={{animation: 'data-packet 2s cubic-bezier(0.4, 0, 0.2, 1) infinite 2s'}}></path>
</g>
<g fill="#0ea5e9">
<circle cx="150" cy="250" r="5" style={{animation: 'node-pulse 3s infinite'}}></circle>
<circle cx="350" cy="450" r="7" style={{animation: 'node-pulse 4s infinite 1s'}}></circle>
<circle cx="700" cy="300" r="6" style={{animation: 'node-pulse 2.5s infinite 0.5s'}}></circle>
<circle cx="850" cy="600" r="5" style={{animation: 'node-pulse 3.5s infinite 2s'}}></circle>
<circle cx="500" cy="800" r="8" style={{animation: 'node-pulse 5s infinite 1.5s'}}></circle>
<circle cx="250" cy="650" r="6" style={{animation: 'node-pulse 3s infinite 0.8s'}}></circle>
</g>
<g fill="none" stroke="#38bdf8">
<circle cx="350" cy="450" r="10" style={{animation: 'sonar-ping 4s infinite 1s'}}></circle>
<circle cx="500" cy="800" r="12" style={{animation: 'sonar-ping 5s infinite 1.5s'}}></circle>
<circle cx="700" cy="300" r="8" style={{animation: 'sonar-ping 2.5s infinite 0.5s'}}></circle>
</g>
</svg>
<div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px] bg-blue-600/10"></div>
<div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[100px]"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-lg font-medium mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)] text-blue-400">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
                    Flow AI
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mt-3 text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
                    Seu agente de AI que lhe ajuda a<br/>montar propostas.
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-8 rounded-2xl border backdrop-blur-md relative overflow-hidden group hover:border-blue-500/40 transition-colors shadow-xl border-white/10 bg-slate-900/60">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 relative z-10 text-blue-400">
<iconify-icon className="text-3xl" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 relative z-10 text-white">Recomendação Inteligente</h3>
<p className="text-xl leading-relaxed relative z-10 text-slate-400">
                        A FLOW AI analisa o perfil do projeto e do cliente para sugerir automaticamente os produtos ideais do seu portfólio, combinando performance, compatibilidade e estratégia comercial.
                    </p>
</div>
<div className="p-8 rounded-2xl border backdrop-blur-md relative overflow-hidden group hover:border-blue-500/40 transition-colors shadow-xl border-white/10 bg-slate-900/60">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 relative z-10 text-blue-400">
<iconify-icon className="text-3xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 relative z-10 text-white">Montagem Automatizada</h3>
<p className="text-xl leading-relaxed relative z-10 text-slate-400">
                        Com base no seu portfólio e nos dados do cliente, a IA gera propostas completas em poucos cliques, com textos prontos, kits sugeridos e foco em conversão. Edite quantas vezes quiser.
                    </p>
</div>
<div className="p-8 rounded-2xl border backdrop-blur-md relative overflow-hidden group hover:border-blue-500/40 transition-colors shadow-xl border-white/10 bg-slate-900/60">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 relative z-10 text-blue-400">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight mb-3 relative z-10 text-white">Otimização de Margem</h3>
<p className="text-xl leading-relaxed relative z-10 text-slate-400">
                        A FLOW AI considera o histórico de vendas e preferências do integrador para montar propostas que maximizam o valor percebido, aumentam o ticket médio e protegem sua margem de lucro.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-black border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="precos">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="md:text-5xl text-3xl font-medium tracking-tight mb-6">Planos simples e transparentes</h2>
<div className="flex items-center justify-center gap-4 mt-8">
<span className="text-lg font-medium text-white" id="label-monthly">Mensal</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="pricing-toggle" onchange="togglePricing()" type="checkbox"/>
<div className="peer-focus:outline-none peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600 bg-white/10 w-14 h-7 rounded-full"></div>
</label>
<div className="flex items-center gap-2">
<span className="text-lg font-medium text-slate-400" id="label-annual">Anual</span>
<span className="text-sm font-medium px-2 py-0.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400">15% OFF</span>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8 mt-16 gap-x-8 gap-y-8 items-start">
<div className="p-8 rounded-3xl border flex flex-col h-full transition-colors border-white/10 bg-slate-900/50 hover:border-white/20">
<h3 className="text-2xl font-medium tracking-tight mb-2">Lite</h3>
<p className="text-lg mb-6 min-h-[48px] text-slate-400">Ideal para integradores individuais ou pequenas revendas.</p>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tight">R$ <span className="price-val" data-annual="84,15" data-monthly="99,00">99,00</span></span>
<span className="text-lg text-slate-500 period-text">/mês</span>
</div>
<a className="w-full py-3 px-4 rounded-xl border text-lg font-medium text-center transition-colors mb-8 bg-white/5 border-white/10 hover:bg-white/10 text-white" href="#demo">Começar com Lite</a>
<ul className="space-y-4 text-lg flex-1 text-slate-300">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="check"></i>
<span>Até 7 propostas por mês</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="check"></i>
<span>R$ 6,99 por proposta adicional</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="check"></i>
<span className="">Edições ilimitadas da mesma proposta</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="check"></i>
<span className="">Edições de catálogo ilimitadas</span>
</li>
</ul>
</div>
<div className="p-8 rounded-3xl border border-blue-500/50 relative shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] flex flex-col h-full transform lg:-translate-y-4 bg-slate-900">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 text-base font-medium rounded-full tracking-wide bg-blue-600 text-white">
                        MAIS ESCOLHIDO
                    </div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Pro</h3>
<p className="text-lg mb-6 min-h-[48px] text-slate-400">Para revendas em crescimento que buscam escala e eficiência.</p>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tight">R$ <span className="price-val" data-annual="169,99" data-monthly="199,99">199,99</span></span>
<span className="text-lg text-slate-500 period-text">/mês</span>
</div>
<a className="w-full py-3 px-4 rounded-xl bg-gradient-to-r to-sky-500 hover:from-blue-500 text-lg font-medium text-center transition-all mb-8 shadow-lg shadow-blue-500/25 from-blue-600 hover:to-sky-400 text-white" href="#demo">Começar com Pro</a>
<ul className="space-y-4 text-lg flex-1 text-slate-300">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="check"></i>
<span>Envie até 50 propostas por mês</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="check"></i>
<span className="">R$ 3,99 por proposta adicional</span>
</li>
<li className="flex items-start gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 -mx-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="sparkles"></i>
<span className="font-medium text-white">FLOW AI: Agente de AI para montar propostas</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="check"></i>
<span className="">Edições ilimitadas da mesma proposta</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="check"></i>
<span className="">Edições de catálogo ilimitadas</span>
</li>
</ul>
</div>
<div className="p-8 rounded-3xl border flex flex-col h-full transition-colors border-white/10 bg-slate-900/50 hover:border-white/20">
<h3 className="text-2xl font-medium tracking-tight mb-2">Elite</h3>
<p className="text-lg mb-6 min-h-[48px] text-slate-400">Para operações maduras com grandes volumes e equipes.</p>
<div className="mb-8">
<span className="text-4xl font-medium tracking-tight">R$ <span className="price-val" data-annual="339,15" data-monthly="399,00">399,00</span></span>
<span className="text-lg text-slate-500 period-text">/mês</span>
</div>
<a className="w-full py-3 px-4 rounded-xl text-lg font-medium text-center transition-colors mb-8 bg-white text-black hover:bg-slate-200" href="#demo">Contratar o Elite</a>
<ul className="space-y-4 text-lg flex-1 text-slate-300">
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="check"></i>
<span className="font-medium text-white">Propostas ilimitadas</span>
</li>
<li className="flex items-start gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 -mx-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="sparkles"></i>
<span className="font-medium text-white">FLOW AI: Agente de AI para montar propostas</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="check"></i>
<span className="">Edições ilimitadas da mesma proposta</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 shrink-0 mt-0.5 text-blue-400" data-lucide="check"></i>
<span>Edições de catálogo ilimitadas</span>
</li>
</ul>
</div>
</div>
<p className="text-center text-base text-slate-500 mt-8">
                * Implementação de tabela adicional: R$ 90,00 por tabela em qualquer plano. Valores faturados na periodicidade escolhida.
            </p>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-950 relative">
<div className="max-w-7xl mx-auto">
<div className="overflow-hidden group bg-slate-900 border-white/10 border rounded-3xl relative shadow-2xl">
<div className="absolute inset-0">
<img alt="Ecossistema e colaboração" className="w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:opacity-30 transition-opacity duration-700 transform group-hover:scale-105" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=2070"/>
<div className="bg-gradient-to-r to-transparent from-slate-950 via-slate-950/90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="md:p-20 z-10 max-w-3xl pt-10 pr-10 pb-10 pl-10 relative">
<span className="font-medium text-lg tracking-wide uppercase mb-4 block text-teal-400">O nosso propósito</span>
<h3 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-6 text-white">
                        Ajudar o ecossistema técnico a vender melhor.
                    </h3>
<p className="text-xl leading-relaxed text-slate-300">
                        Criando mais eficiência, mais resultado e mais colaboração entre fabricantes e revendas.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-950" id="faq">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                    Perguntas frequentes
                </h2>
</div>
<div className="space-y-4">
<details className="group rounded-2xl border border-white/10 bg-slate-900/50 open:bg-slate-900 transition-colors duration-300">
<summary className="flex items-center justify-between p-6 text-lg md:text-xl font-medium text-white cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
                        Como a Flow Deal ajuda?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300 text-2xl shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-lg leading-relaxed">
                        A Flow Deal otimiza a criação de propostas, reduzindo o tempo gasto e aumentando a precisão. Crie propostas comerciais personalizadas e profissionais em minutos.
                    </div>
</details>
<details className="group rounded-2xl border border-white/10 bg-slate-900/50 open:bg-slate-900 transition-colors duration-300">
<summary className="flex items-center justify-between p-6 text-lg md:text-xl font-medium text-white cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
                        O que é a Flow AI?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300 text-2xl shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-lg leading-relaxed">
                        A FLOW AI é a assistente inteligente da Flow Deal que transforma a forma como integradores elaboram propostas comerciais. Com base no perfil do cliente, nas necessidades do projeto e no portfólio de produtos cadastrados, ela recomenda automaticamente as melhores soluções para cada cenário.
                    </div>
</details>
<details className="group rounded-2xl border border-white/10 bg-slate-900/50 open:bg-slate-900 transition-colors duration-300">
<summary className="flex items-center justify-between p-6 text-lg md:text-xl font-medium text-white cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
                        O sistema serve só para automação residencial?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300 text-2xl shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-lg leading-relaxed">
                        Não. Ele atende também revendas técnicas que trabalham com diversos segmentos como áudio, segurança, redes, energia solar, aspiração central e etc. Cadastre qualquer produto ou categoria de serviços que você trabalhe.
                    </div>
</details>
<details className="group rounded-2xl border border-white/10 bg-slate-900/50 open:bg-slate-900 transition-colors duration-300">
<summary className="flex items-center justify-between p-6 text-lg md:text-xl font-medium text-white cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
                        Como cadastro meus produtos e serviços?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300 text-2xl shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-lg leading-relaxed">
                        Você pode importar através de uma planilha de excel todos os seus produtos para a plataforma ou utilizar o serviço de implementação da Flow Deal. Você envia as tabelas de preços dos fabricantes com os quais você trabalha e a equipe da Flow Deal se encarrega de cadastrar os produtos no sistema, organizar por categorias e marcas.
                    </div>
</details>
<details className="group rounded-2xl border border-white/10 bg-slate-900/50 open:bg-slate-900 transition-colors duration-300">
<summary className="flex items-center justify-between p-6 text-lg md:text-xl font-medium text-white cursor-pointer list-none [&amp;::-webkit-details-marker]:hidden">
                        O que é a implementação Flow Deal?
                        <iconify-icon className="text-slate-400 group-open:rotate-180 transition-transform duration-300 text-2xl shrink-0 ml-4" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-slate-400 text-lg leading-relaxed">
                        Sabemos que uma das maiores barreiras para começar a usar uma nova plataforma está no tempo necessário para configurar tudo do zero. Pensando nisso, criamos uma etapa de implementação opcional para facilitar a vida do integrador. A equipe da Flow Deal se encarrega de cadastrar os produtos no seu sistema, organizar por categorias e marcas. Isto garante que você possa começar a gerar propostas rapidamente, com tudo já pronto. O valor para 4 tabelas é um pagamento único de R$ 500,00 e depois de R$ 90,00 por tabela adicional.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="demo">
<div className="absolute inset-0 bg-blue-600/10"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 border rounded-3xl p-12 md:p-20 shadow-2xl bg-slate-900 border-white/10">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6 text-white">
                Pronto para acelerar suas vendas?
            </h2>
<p className="text-xl mb-10 max-w-2xl mx-auto text-slate-400">
                Deixe as planilhas para trás. Agende uma demonstração e veja como a Flow Deal pode transform a forma como você cria propostas.
            </p>
<button className="bg-gradient-to-r to-sky-500 px-8 py-4 rounded-full font-medium text-xl hover:from-blue-500 transition-all inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 from-blue-600 text-white hover:to-sky-400">
                Agendar demonstração gratuita
                <i className="w-5 h-5" data-lucide="calendar"></i>
</button>
</div>
</section>

<footer className="border-t py-12 px-6 border-white/10 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-md shadow-blue-500/20 overflow-hidden relative">

<svg className="w-full h-full absolute inset-0" viewbox="-20 -10 130 130">
<path d="M -10,90 L 35,45 L 15,25 L 95,5 L 75,85 L 55,65 L 10,110 Z" fill="black"></path>
</svg>
</div>
<span className="text-xl font-medium tracking-tight text-slate-300">Flow Deal</span>
</div>
<p className="text-lg text-slate-500">
                © 2024 Flow Deal. Todos os direitos reservados.
            </p>
</div>
</footer>


    </>
  );
}
