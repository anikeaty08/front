import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();
    // Aplica fade-in sequencial
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('[class*="delay-"]').forEach(el => el.classList.remove('opacity-0','translate-y-8'));
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6 pt-10 pb-20">

<div className="flex-1 space-y-6">
<h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight opacity-0 translate-y-8 transition-all duration-700 delay-100">Transforme qualquer ambiente em um refúgio de paz com velas aromáticas artesanais</h1>
<p className="text-lg lg:text-xl text-neutral-600 opacity-0 translate-y-8 transition-all duration-700 delay-200">Aromas naturais que relaxam, decoram e acolhem — experimente a mágica da aromaterapia em casa</p>
<p className="text-xl font-medium opacity-0 translate-y-8 transition-all duration-700 delay-300">A partir de <span className="font-semibold text-emerald-600">R$29,90</span> ou 3x de R$9,97</p>
<button className="relative inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md px-6 py-3 shadow-lg ring-1 ring-emerald-800/20 focus:outline-none transition-all duration-300 opacity-0 translate-y-8 delay-400">Quero minhas velas agora! <i className="w-5 h-5" data-lucide="arrow-right"></i></button>
</div>

<div className="flex-1 flex justify-center lg:justify-end opacity-0 translate-y-8 transition-all duration-700 delay-500">
<img alt="Vela acesa em ambiente aconchegante" className="w-full max-w-md rounded-xl shadow-lg object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-px bg-neutral-200"></div>
</header>

<section className="max-w-6xl mx-auto px-6 py-20 space-y-16">

<div className="space-y-6">
<h2 className="text-3xl font-semibold tracking-tight">Você merece se sentir bem dentro da sua própria casa.</h2>
<p className="text-neutral-700 leading-relaxed">Nossas velas artesanais são produzidas com ceras 100% naturais e óleos essenciais puros, oferecendo uma experiência sensorial única para corpo e mente.</p>
<p className="text-neutral-700 leading-relaxed">Imagine... chegar em casa após um dia cansativo e ser acolhido por um aroma calmante que alivia o estresse e te envolve em conforto.</p>
<p className="text-neutral-700 leading-relaxed">Muitos preferem comprar velas industrializadas com fragrâncias artificiais, mas isso só agride o olfato e o ambiente.</p>
<p className="text-neutral-700 leading-relaxed">...eu prefiro algo que realmente faça bem: um produto artesanal, com propósito e feito com amor.</p>
<p className="text-neutral-700 leading-relaxed font-medium">Por isso, criamos a linha <span className="text-emerald-600 font-semibold">Essência Viva</span> — velas aromáticas artesanais para transformar seu espaço em um verdadeiro refúgio.</p>
</div>

<div className="grid md:grid-cols-2 gap-10">
<div className="p-8 rounded-xl border border-neutral-200 shadow-sm">
<h3 className="text-2xl font-semibold tracking-tight mb-4">Para quem é</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="check-circle"></i> Quem busca relaxamento e bem-estar</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="check-circle"></i> Quem ama decoração com estilo natural</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="check-circle"></i> Quem valoriza produtos artesanais e sustentáveis</li>
</ul>
</div>
<div className="p-8 rounded-xl border border-neutral-200 shadow-sm">
<h3 className="text-2xl font-semibold tracking-tight mb-4">Para quem NÃO é</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-rose-600 mt-0.5" data-lucide="x-circle"></i> Quem prefere produtos industrializados e sintéticos</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-rose-600 mt-0.5" data-lucide="x-circle"></i> Quem não gosta de aromas no ambiente</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-rose-600 mt-0.5" data-lucide="x-circle"></i> Quem busca apenas o mais barato, sem se importar com qualidade</li>
</ul>
</div>
</div>

<div className="space-y-6">
<h3 className="text-2xl font-semibold tracking-tight">Você vai aprender</h3>
<ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 list-decimal list-inside text-neutral-700">
<li>Como escolher a vela ideal para cada ambiente</li>
<li>O poder da aromaterapia natural</li>
<li>Combinações de aromas e emoções</li>
<li>Cuidados para prolongar a queima da vela</li>
<li>Como usar velas em rituais de relaxamento</li>
<li>Dicas de decoração com velas</li>
<li>Os benefícios emocionais dos óleos essenciais</li>
<li>Como montar kits para presente</li>
<li>Velas como ferramenta de meditação</li>
<li>Os riscos de velas industrializadas e como evitá-los</li>
</ol>
</div>
</section>

<div className="w-full h-px bg-neutral-200"></div>

<section className="max-w-6xl mx-auto px-6 py-20 space-y-16">

<div className="space-y-10">
<h2 className="text-3xl font-semibold tracking-tight">O que nossos clientes dizem</h2>
<div className="grid md:grid-cols-3 gap-8">
<blockquote className="p-6 border border-neutral-200 rounded-lg shadow-sm bg-neutral-50 italic">"Comprei 3 velas e minha casa virou um spa. Recomendo demais!"<br/><span className="not-italic font-medium text-neutral-700">— Juliana S.</span></blockquote>
<blockquote className="p-6 border border-neutral-200 rounded-lg shadow-sm bg-neutral-50 italic">"Os aromas são suaves e naturais. Dá vontade de acender todos os dias."<br/><span className="not-italic font-medium text-neutral-700">— Camila M.</span></blockquote>
<blockquote className="p-6 border border-neutral-200 rounded-lg shadow-sm bg-neutral-50 italic">"Além de lindas, elas duram muito. Um dos melhores presentes que já dei."<br/><span className="not-italic font-medium text-neutral-700">— Rodrigo F.</span></blockquote>
</div>
</div>

<div className="space-y-6">
<h3 className="text-2xl font-semibold tracking-tight">Bônus exclusivos</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3"><i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="gift"></i> Guia digital de Aromaterapia para Ambientes</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="music"></i> Playlist exclusiva de relaxamento no Spotify</li>
<li className="flex items-start gap-3"><i className="w-5 h-5 text-emerald-600 mt-0.5" data-lucide="book-open"></i> E-book "Rituais de Autocuidado com Velas"</li>
</ul>
</div>
</section>

<div className="w-full h-px bg-neutral-200"></div>

<section className="max-w-6xl mx-auto px-6 py-20 space-y-12 text-center">
<h2 className="text-3xl font-semibold tracking-tight">Oferta por tempo limitado</h2>
<p className="text-lg text-neutral-700 max-w-3xl mx-auto">Compre agora com frete fixo de R$9,90 e ganhe 1 amostra surpresa de brinde.</p>
<p className="text-lg text-neutral-700 max-w-3xl mx-auto">GARANTIA: Se você não amar o aroma, devolvemos 100% do valor em até 7 dias.</p>
<button className="relative inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md px-8 py-4 shadow-lg ring-1 ring-emerald-800/20 focus:outline-none transition-all duration-300">Quero minha vela com bônus e garantia! <i className="w-5 h-5" data-lucide="arrow-right-circle"></i></button>
</section>

<footer className="bg-neutral-50 border-t border-neutral-200">
<div className="max-w-6xl mx-auto px-6 py-16 space-y-12">

<div>
<h3 className="text-2xl font-semibold tracking-tight mb-6">Perguntas frequentes</h3>
<div className="space-y-4">
<details className="group border border-neutral-200 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">1. As velas são veganas? <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-neutral-700">Sim, usamos apenas ingredientes naturais e não testamos em animais.</p>
</details>
<details className="group border border-neutral-200 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">2. A cera é de soja ou parafina? <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-neutral-700">Nossas velas são feitas com cera vegetal (soja).</p>
</details>
<details className="group border border-neutral-200 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">3. Os aromas são artificiais? <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-neutral-700">Não. Utilizamos apenas óleos essenciais naturais.</p>
</details>
<details className="group border border-neutral-200 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">4. Quanto tempo dura uma vela? <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-neutral-700">Entre 20h e 40h de queima, dependendo do tamanho.</p>
</details>
<details className="group border border-neutral-200 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">5. Posso usar para meditação? <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-neutral-700">Sim! São ideais para práticas de mindfulness.</p>
</details>
<details className="group border border-neutral-200 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">6. As velas vêm em embalagem para presente? <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-neutral-700">Sim, com acabamento artesanal.</p>
</details>
<details className="group border border-neutral-200 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">7. Fazem entrega para todo o Brasil? <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-neutral-700">Sim, entregamos em todo o território nacional.</p>
</details>
<details className="group border border-neutral-200 rounded-lg p-4">
<summary className="flex justify-between items-center cursor-pointer font-medium">8. Tem desconto em kits? <i className="w-5 h-5 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i></summary>
<p className="mt-2 text-neutral-700">Sim, combos com até 20% OFF.</p>
</details>
</div>
</div>

<div className="text-sm text-neutral-500">
        Essência Viva Produtos Naturais Ltda — CNPJ 12.345.678/0001-99<br/>
        Suporte: contato@essenciaviva.com.br — Termos de uso e política de privacidade no site
      </div>
</div>
</footer>



    </>
  );
}
