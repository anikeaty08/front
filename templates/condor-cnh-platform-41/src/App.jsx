import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const canvas = document.getElementById('particles-canvas');
        const ctx = canvas.getContext('2d');
        
        function resize() {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        
        window.addEventListener('resize', resize);
        resize();

        const particlesArray = [];
        const numberOfParticles = window.innerWidth > 768 ? 60 : 30;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.5;
                this.speedY = (Math.random() - 0.5) * 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
                particlesArray[i].draw();
            }
            requestAnimationFrame(animate);
        }
        
        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Realize Logo" className="h-7 w-auto" src="https://connexen.site/wp-content/uploads/2026/02/ssafsa.png"/>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-neutral-500">
<a className="hover:text-black transition-colors" href="#como-funciona">Como Funciona</a>
<a className="hover:text-black transition-colors" href="#beneficios">Para Clientes</a>
<a className="hover:text-black transition-colors" href="#beneficios">Para Parceiros</a>
<a className="hover:text-black transition-colors" href="#faq">Consignado</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20" href="#lista-espera">
<span>Entrar na Lista de Espera</span>
<iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="w-full overflow-hidden">

<div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4 relative">
<div className="relative bg-[url('https://connexen.site/wp-content/uploads/2026/02/8309.jpg')] bg-cover bg-center bg-no-repeat rounded-[2.5rem] p-8 md:p-16 overflow-hidden min-h-[650px] md:min-h-[700px] flex flex-col md:flex-row items-center justify-between gap-12">

<div className="absolute inset-0 bg-black/60 z-0"></div>

<canvas className="absolute inset-0 z-0 pointer-events-none opacity-50" id="particles-canvas"></canvas>

<div className="relative z-10 w-full md:w-1/2 mt-8 md:mt-0">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-white">
                        Dinheiro rápido direto no seu benefício.
                    </h1>
<p className="text-xl md:text-2xl font-normal text-neutral-200 mb-10 max-w-md leading-relaxed">
                        Crédito consignado simples, seguro e sem burocracia. A Realize conecta você às melhores condições de empréstimo, com aprovação rápida e desconto direto em folha.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="bg-blue-600 text-white text-base font-medium px-7 py-3.5 rounded-full hover:bg-blue-700 transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-blue-600/30" href="#lista-espera">
<iconify-icon className="w-5 h-5" icon="solar:calculator-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
                            Quero Simular
                        </a>
<a className="text-base font-medium text-neutral-200 flex items-center gap-2 group hover:text-white transition-colors" href="#faq">
<div className="w-8 h-8 rounded-full border border-neutral-400 group-hover:border-white flex items-center justify-center transition-colors">
<iconify-icon className="w-4 h-4" icon="solar:info-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
                            Entenda o Consignado
                        </a>
</div>
</div>

<div className="relative z-10 w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
<img alt="App Realize" className="max-w-md w-full drop-shadow-2xl transform hover:-translate-y-2 transition-transform duration-500" src="https://connexen.site/wp-content/uploads/2026/02/e63a747xsaxsa0-6de2-4682-8322-67958b9bb184-1.png"/>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-12 border-b border-neutral-100">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12">
<div className="text-center md:text-left">
<p className="text-3xl font-semibold tracking-tight">Baseado em</p>
<p className="text-sm text-neutral-500">análise automática</p>
</div>
<div className="w-px h-12 bg-neutral-200 hidden md:block"></div>
<div className="text-center md:text-left">
<p className="text-3xl font-semibold tracking-tight text-blue-600">-35%</p>
<p className="text-sm text-neutral-500">Taxa média reduzida</p>
</div>
<div className="w-px h-12 bg-neutral-200 hidden md:block"></div>
<div className="text-center md:text-left">
<p className="text-3xl font-semibold tracking-tight">98%</p>
<p className="text-sm text-neutral-500">Taxa de Aprovação</p>
</div>
<div className="w-px h-12 bg-neutral-200 hidden md:block"></div>
<div className="text-center md:text-left">
<p className="text-3xl font-semibold tracking-tight">24h</p>
<p className="text-sm text-neutral-500">Liberação do Valor</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<div className="relative">
<div className="absolute inset-0 bg-blue-100 rounded-[2.5rem] transform translate-x-4 translate-y-4 z-0"></div>
<img alt="Pessoa utilizando o aplicativo" className="relative z-10 w-full rounded-[2.5rem] shadow-xl object-cover h-[500px]" src="https://connexen.site/wp-content/uploads/2026/02/ChatGPT-Image-24-de-fev.-de-2026-10_14_43.png"/>
</div>
</div>
<div className="w-full md:w-1/2 text-left">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Chega de filas, papelada e espera.</h2>
<p className="text-lg text-neutral-500 leading-relaxed max-w-xl">
                        A REALIZE cria um ecossistema digital onde aposentados, pensionistas e trabalhadores CLT conseguem crédito consignado direto pelo app, sem atravessadores e com total transparência.
                    </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24" id="beneficios">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-center">Diferenciais do Modelo</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">

<div className="bg-neutral-50 rounded-[2.5rem] p-10 border border-neutral-100">
<div className="flex items-center gap-4 mb-8">
<div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
<iconify-icon className="w-7 h-7" icon="solar:user-id-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight">PERFIL CLIENTE</h3>
</div>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<div className="mt-1 bg-blue-100 rounded-full p-1"><iconify-icon className="w-4 h-4 text-blue-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></div>
<div>
<h4 className="font-semibold text-lg">Simulação Livre</h4>
<p className="text-neutral-500 mt-1">Compare valores, parcelas e prazos em tempo real.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 bg-blue-100 rounded-full p-1"><iconify-icon className="w-4 h-4 text-blue-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></div>
<div>
<h4 className="font-semibold text-lg">Processo 100% Online</h4>
<p className="text-neutral-500 mt-1">Sem ir ao banco. Tudo pelo celular.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 bg-blue-100 rounded-full p-1"><iconify-icon className="w-4 h-4 text-blue-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></div>
<div>
<h4 className="font-semibold text-lg">Taxas Justas</h4>
<p className="text-neutral-500 mt-1">Parcelas claras, sem letras miúdas.</p>
</div>
</li>
</ul>
</div>

<div className="bg-black text-white rounded-[2.5rem] p-10 border border-neutral-800 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="flex items-center gap-4 mb-8 relative z-10">
<div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
<iconify-icon className="w-7 h-7" icon="solar:hand-money-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight">PERFIL PARCEIRO</h3>
</div>
<ul className="space-y-6 relative z-10">
<li className="flex gap-4 items-start">
<div className="mt-1 bg-blue-600/20 text-blue-400 rounded-full p-1"><iconify-icon className="w-4 h-4" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></div>
<div>
<h4 className="font-semibold text-lg">Receita Recorrente</h4>
<p className="text-neutral-400 mt-1">Ganhe comissão por cada contrato aprovado.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 bg-blue-600/20 text-blue-400 rounded-full p-1"><iconify-icon className="w-4 h-4" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></div>
<div>
<h4 className="font-semibold text-lg">Painel de Gestão</h4>
<p className="text-neutral-400 mt-1">Acompanhe clientes, propostas e pagamentos.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 bg-blue-600/20 text-blue-400 rounded-full p-1"><iconify-icon className="w-4 h-4" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></div>
<div>
<h4 className="font-semibold text-lg">Expansão Local</h4>
<p className="text-neutral-400 mt-1">Atue na sua cidade com apoio da Realize.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12 bg-neutral-50 rounded-[3rem] mb-24 border border-neutral-100" id="como-funciona">
<div className="p-8 md:p-12">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-center">COMO FUNCIONA O ECOSSISTEMA</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-blue-100">
<div className="relative z-10">
<span className="text-6xl font-semibold text-blue-50 absolute -top-4 -right-4">1</span>
<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-600/20">
<iconify-icon className="w-6 h-6" icon="solar:laptop-minimalistic-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Simulação Digital</h3>
<p className="text-base text-neutral-500 leading-relaxed">O cliente informa dados básicos e recebe ofertas instantâneas.</p>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-blue-100">
<div className="relative z-10">
<span className="text-6xl font-semibold text-blue-50 absolute -top-4 -right-4">2</span>
<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-600/20">
<iconify-icon className="w-6 h-6" icon="solar:document-validation-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Análise Automática</h3>
<p className="text-base text-neutral-500 leading-relaxed">Sistema valida benefício e margem consignável.</p>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-blue-100">
<div className="relative z-10">
<span className="text-6xl font-semibold text-blue-50 absolute -top-4 -right-4">3</span>
<div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-600/20">
<iconify-icon className="w-6 h-6" icon="solar:wad-of-money-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">Liberação do Crédito</h3>
<p className="text-base text-neutral-500 leading-relaxed">Valor cai direto na conta em até 24h.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-4 sm:px-6 mb-24" id="lista-espera">
<div className="bg-blue-600 rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl shadow-blue-600/20">
<div className="relative z-10 text-center mb-10">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4 leading-tight">
                        Garanta seu lugar na fila.
                    </h2>
<p className="text-blue-100 text-lg max-w-lg mx-auto">
                        Seja um dos primeiros a acessar a Realize quando liberarmos na sua região.
                    </p>
</div>
<div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto shadow-xl">
<form className="space-y-5">

<div>
<label className="block text-sm font-medium text-neutral-700 mb-2">Qual seu perfil?</label>
<div className="grid grid-cols-2 gap-4">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="profile" type="radio" value="cliente"/>
<div className="border-2 border-neutral-200 rounded-xl p-4 text-center peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all">
<iconify-icon className="w-6 h-6 mx-auto mb-2 text-neutral-400 peer-checked:text-blue-600" icon="solar:user-id-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="block text-sm font-semibold text-neutral-600 peer-checked:text-blue-700">Sou Cliente</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="profile" type="radio" value="parceiro"/>
<div className="border-2 border-neutral-200 rounded-xl p-4 text-center peer-checked:border-blue-600 peer-checked:bg-blue-50 transition-all">
<iconify-icon className="w-6 h-6 mx-auto mb-2 text-neutral-400 peer-checked:text-blue-600" icon="solar:hand-money-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span className="block text-sm font-semibold text-neutral-600 peer-checked:text-blue-700">Sou Parceiro</span>
</div>
</label>
</div>
</div>

<div>
<label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="name">Nome Completo</label>
<input className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-blue-600 focus:ring-0 outline-none transition-colors" id="name" placeholder="Digite seu nome" type="text"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="whatsapp">WhatsApp</label>
<input className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-blue-600 focus:ring-0 outline-none transition-colors" id="whatsapp" placeholder="(00) 00000-0000" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="email">E-mail</label>
<input className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-blue-600 focus:ring-0 outline-none transition-colors" id="email" placeholder="seu@email.com" type="email"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="uf">Estado (UF)</label>
<select className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-blue-600 focus:ring-0 outline-none transition-colors bg-white" id="uf">
<option disabled="" selected="" value="">UF</option>
<option value="SP">SP</option>
<option value="RJ">RJ</option>
<option value="MG">MG</option>
<option value="RS">RS</option>
</select>
</div>
<div className="md:col-span-2">
<label className="block text-sm font-medium text-neutral-700 mb-1" htmlFor="city">Cidade</label>
<input className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-blue-600 focus:ring-0 outline-none transition-colors" id="city" placeholder="Sua cidade" type="text"/>
</div>
</div>
<button className="w-full bg-blue-600 text-white text-base font-medium px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mt-4 shadow-lg shadow-blue-600/20" type="button">
                            Entrar na Lista
                            <iconify-icon className="w-4 h-4" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
<p className="text-xs text-neutral-500 text-center mt-4 leading-relaxed">
<iconify-icon className="w-3 h-3 inline mr-1 align-text-bottom" icon="solar:lock-password-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<strong>Sem compromisso financeiro.</strong> Usaremos seus dados apenas para avisar sobre o lançamento da Realize na sua região.
                        </p>
</form>
</div>

<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="absolute top-10 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-24" id="faq">
<h2 className="text-3xl font-semibold tracking-tight mb-8 text-center">Dúvidas Frequentes</h2>
<div className="space-y-4">
<details className="group bg-neutral-50 p-6 rounded-2xl cursor-pointer border border-neutral-100">
<summary className="flex justify-between items-center font-semibold list-none text-neutral-800">
<span>O que é empréstimo consignado?</span>
<span className="transition group-open:rotate-180 text-blue-600"><iconify-icon className="w-5 h-5" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></span>
</summary>
<p className="text-neutral-600 mt-4 text-sm leading-relaxed">É uma modalidade de crédito onde as parcelas são descontadas diretamente da sua folha de pagamento ou benefício do INSS, garantindo as menores taxas de juros do mercado.</p>
</details>
<details className="group bg-neutral-50 p-6 rounded-2xl cursor-pointer border border-neutral-100">
<summary className="flex justify-between items-center font-semibold list-none text-neutral-800">
<span>Quem pode solicitar?</span>
<span className="transition group-open:rotate-180 text-blue-600"><iconify-icon className="w-5 h-5" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></span>
</summary>
<p className="text-neutral-600 mt-4 text-sm leading-relaxed">Aposentados e pensionistas do INSS, servidores públicos e trabalhadores com carteira assinada (CLT) que possuam margem consignável disponível.</p>
</details>
<details className="group bg-neutral-50 p-6 rounded-2xl cursor-pointer border border-neutral-100">
<summary className="flex justify-between items-center font-semibold list-none text-neutral-800">
<span>Em quanto tempo o dinheiro cai?</span>
<span className="transition group-open:rotate-180 text-blue-600"><iconify-icon className="w-5 h-5" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></span>
</summary>
<p className="text-neutral-600 mt-4 text-sm leading-relaxed">Após a aprovação digital e validação dos dados, o valor é depositado diretamente na sua conta bancária cadastrada em até 24 horas úteis.</p>
</details>
</div>
</section>
</main>

<footer className="bg-black text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-neutral-800 pb-16">

<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<img alt="Realize Logo" className="h-8 w-auto brightness-0 invert" src="https://connexen.site/wp-content/uploads/2026/02/ssafsa.png"/>
</div>
<p className="text-sm text-neutral-400">Facilitando o acesso ao crédito no Brasil.</p>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Plataforma</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-blue-400 transition-colors" href="#">Para Clientes</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Para Parceiros</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Seja um Afiliado</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Sobre</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-blue-400 transition-colors" href="#">Consignado</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Termos de Uso</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Privacidade</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Contato</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-center gap-2"><iconify-icon className="w-4 h-4 text-blue-500" icon="solar:letter-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> contato@realize.com.br</li>
<li className="flex items-center gap-2"><iconify-icon className="w-4 h-4 text-blue-500" icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> WhatsApp Suporte</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 text-neutral-500 text-sm gap-4">
<p>© 2026 Realize Tecnologia LTDA.</p>
<div className="flex gap-4">
<a className="hover:text-blue-400 transition-colors" href="#"><iconify-icon className="w-5 h-5" icon="solar:camera-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></a>
<a className="hover:text-blue-400 transition-colors" href="#"><iconify-icon className="w-5 h-5" icon="solar:link-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
