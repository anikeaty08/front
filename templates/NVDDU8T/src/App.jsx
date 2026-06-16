import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="w-full px-6 md:px-14 py-4 flex items-center justify-between gap-3 glass fade-in" style={{backdropFilter: 'blur(14px)', zIndex: '90', position: 'sticky', top: '0'}}>
<div className="flex items-center gap-2">
<span className="text-2xl md:text-3xl title-section tracking-tight font-semibold select-none" style={{fontWeight: '600', letterSpacing: '-.04em'}}>Bereia Urbana</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-base font-medium">
<a className="hover:text-[#fbbf24] focus:text-[#fbbf24] transition-colors" href="#blog">Blog</a>
<a className="hover:text-[#fbbf24] transition-colors" href="#produtos">Produtos</a>
<a className="hover:text-[#fbbf24] transition-colors" href="#youtube">YouTube</a>
<a className="hover:text-[#fbbf24] transition-colors" href="#podcast">Podcast</a>
<a className="hover:text-[#fbbf24] transition-colors" href="#eventos">Eventos</a>
<a className="hover:text-[#fbbf24] transition-colors" href="#comunidade">Comunidade</a>
</nav>
<div className="flex items-center gap-3">
<a className="btn px-4 py-2 rounded-md bg-[#23243a] hover:bg-[#fbbf24] text-[#fbbf24] hover:text-[#181924] transition-colors font-semibold text-sm" href="#entrar">Entrar</a>
<a className="btn px-4 py-2 rounded-md bg-[#fbbf24] text-[#181924] font-semibold text-sm hover:bg-[#fbbf24]/90 shadow-md" href="#assine">Assine</a>
<button className="md:hidden ml-2">
<i className="w-7 h-7 text-[#f9f9fb]" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="w-full max-w-7xl mx-auto py-4 md:py-6 px-4 md:px-0 fade-in delay-1">
<div className="flex items-center gap-3 overflow-x-auto scrollbar-thin">
<div className="flex flex-col items-center cursor-pointer">
<div className="story-avatar w-16 h-16 rounded-full bg-gradient-to-tr from-[#fbbf24] to-[#a3a4f7] flex items-center justify-center shadow-lg mb-1 border-4 border-[#23243a] hover-outline transition-all">
<i className="w-7 h-7 text-[#23243a]" data-lucide="plus"></i>
</div>
<span className="text-xs text-[#c0c0c5]">Adicionar</span>
</div>
<div className="flex flex-col items-center cursor-pointer">
<img className="story-avatar w-16 h-16 rounded-full object-cover border-4 border-[#fbbf24] shadow-lg mb-1 hover-outline" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=facearea&amp;w=128&amp;q=80"/>
<span className="text-xs text-[#f9f9fb]">Priscila</span>
</div>
<div className="flex flex-col items-center cursor-pointer">
<img className="story-avatar w-16 h-16 rounded-full object-cover border-4 border-[#23243a] shadow-lg mb-1 hover-outline" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=facearea&amp;w=128&amp;q=80"/>
<span className="text-xs text-[#f9f9fb]">João Paulo</span>
</div>
<div className="flex flex-col items-center cursor-pointer">
<img className="story-avatar w-16 h-16 rounded-full object-cover border-4 border-[#23243a] shadow-lg mb-1 hover-outline" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&amp;fit=facearea&amp;w=128&amp;q=80"/>
<span className="text-xs text-[#f9f9fb]">Lídia</span>
</div>
<div className="flex flex-col items-center cursor-pointer">
<img className="story-avatar w-16 h-16 rounded-full object-cover border-4 border-[#23243a] shadow-lg mb-1 hover-outline" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=facearea&amp;w=128&amp;q=80"/>
<span className="text-xs text-[#f9f9fb]">Lucas</span>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-4 md:px-0 py-10 md:py-18 flex flex-col md:flex-row items-center gap-10 fade-in delay-2">
<div className="flex-1">
<h1 className="title-section text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{fontWeight: '700', letterSpacing: '-.04em'}}>
        Um novo olhar sobre a vida cristã<br/>
<span className="text-[#fbbf24]">Bereia Urbana</span>
</h1>
<p className="text-lg text-[#c0c0c5] mb-6 max-w-xl">
        Inspire-se, aprofunde-se e viva sua fé de verdade.<br/>
        Refúgio para quem busca um cristianismo autêntico, conteúdo profundo, entretenimento, comunidade vibrante e conexão com Deus.<br/>
<span className="block mt-2 text-[#fbbf24] font-medium">#VolteÀsEscrituras #BereiaUrbana</span>
</p>
<div className="flex gap-4 mt-4">
<a className="btn px-6 py-3 rounded-lg bg-[#fbbf24] text-[#181924] font-semibold text-base shadow-lg hover:bg-[#fbbf24]/80" href="#assine">Assine já</a>
<a className="btn px-6 py-3 rounded-lg bg-[#23243a] text-[#fbbf24] font-semibold text-base hover:bg-[#fbbf24] hover:text-[#181924]" href="#doar">Doar</a>
</div>
</div>
<div className="flex-1 flex justify-center md:justify-end">
<img alt="Imagem Bereia Urbana" className="rounded-2xl shadow-2xl w-full max-w-[400px] h-[340px] object-cover glass" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&amp;fit=crop&amp;w=550&amp;q=80" style={{objectPosition: 'center 60%'}}/>
</div>
</section>
<div className="divider"></div>

<section className="max-w-7xl mx-auto px-4 md:px-0 py-2 fade-in delay-3">
<h2 className="title-section text-2xl md:text-3xl font-semibold tracking-tight mb-4">Categorias</h2>
<div className="flex flex-wrap gap-3 md:gap-4 mb-4">
<span className="category-chip hover-outline cursor-pointer">Vida cristã</span>
<span className="category-chip hover-outline cursor-pointer">Religião</span>
<span className="category-chip hover-outline cursor-pointer">Cristão Hoje</span>
<span className="category-chip hover-outline cursor-pointer">Moda</span>
<span className="category-chip hover-outline cursor-pointer">Política</span>
<span className="category-chip hover-outline cursor-pointer">Filosofia</span>
<span className="category-chip hover-outline cursor-pointer">Cultura</span>
<span className="category-chip hover-outline cursor-pointer">Literatura</span>
<span className="category-chip hover-outline cursor-pointer">IA</span>
<span className="category-chip hover-outline cursor-pointer">Viagem</span>
<span className="category-chip hover-outline cursor-pointer">Música</span>
<span className="category-chip hover-outline cursor-pointer">Estudos bíblicos</span>
<span className="category-chip hover-outline cursor-pointer">Devocional</span>
<span className="category-chip hover-outline cursor-pointer">Reflexões</span>
<span className="category-chip hover-outline cursor-pointer">Playlist Musical</span>
<span className="category-chip hover-outline cursor-pointer">Curiosidades</span>
<span className="category-chip hover-outline cursor-pointer">Dicas de negócios</span>
</div>
</section>
<div className="divider"></div>

<section className="max-w-7xl mx-auto px-4 md:px-0 py-2 fade-in delay-4" id="blog">
<h2 className="title-section text-2xl md:text-3xl font-semibold tracking-tight mb-4">Últimos Artigos</h2>
<div className="grid md:grid-cols-3 gap-8">

<article className="glass p-5 rounded-2xl shadow-lg hover-outline hover:shadow-2xl transition-all">
<img className="rounded-lg w-full h-40 object-cover mb-4 transition-all" src="https://images.unsplash.com/photo-1457694587812-e8bf29a43845?auto=format&amp;fit=crop&amp;w=600&amp;q=80" />
<div className="flex gap-2 mb-1">
<span className="category-chip">Reflexões</span>
<span className="category-chip">Vida cristã</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Como Manter a Fé em Tempos de Crise</h3>
<p className="text-[#c0c0c5] text-base mb-2">Descubra princípios bíblicos práticos para fortalecer sua fé mesmo em meio à instabilidade do mundo moderno.</p>
<div className="flex items-center gap-2 mt-2">
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&amp;fit=facearea&amp;w=32&amp;q=80"/>
<span className="text-sm text-[#fbbf24]">por Priscila Santos</span>
</div>
</img></article>

<article className="glass p-5 rounded-2xl shadow-lg hover-outline hover:shadow-2xl transition-all">
<img className="rounded-lg w-full h-40 object-cover mb-4 transition-all" src="https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="flex gap-2 mb-1">
<span className="category-chip">Cristão Hoje</span>
<span className="category-chip">Notícias</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Cristãos e o Desafio da Cultura "Nutella"</h3>
<p className="text-[#c0c0c5] text-base mb-2">Análise crítica sobre os impactos da cultura superficial nas igrejas e como resgatar o compromisso com a Palavra.</p>
<div className="flex items-center gap-2 mt-2">
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=facearea&amp;w=32&amp;q=80"/>
<span className="text-sm text-[#fbbf24]">por João Paulo</span>
</div>
</article>

<article className="glass p-5 rounded-2xl shadow-lg hover-outline hover:shadow-2xl transition-all">
<img className="rounded-lg w-full h-40 object-cover mb-4 transition-all" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="flex gap-2 mb-1">
<span className="category-chip">Estudos bíblicos</span>
<span className="category-chip">Devocional</span>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">7 Dias lendo Salmos: Desafio de Profundidade</h3>
<p className="text-[#c0c0c5] text-base mb-2">Participe do desafio mensal e aprofunde-se nos Salmos em comunidade. Conteúdo exclusivo para assinantes premium!</p>
<div className="flex items-center gap-2 mt-2">
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&amp;fit=facearea&amp;w=32&amp;q=80"/>
<span className="text-sm text-[#fbbf24]">por Lucas Silva</span>
</div>
</article>
</div>
<div className="flex justify-center mt-8">
<a className="btn px-6 py-3 rounded-lg bg-[#23243a] text-[#fbbf24] font-semibold hover:bg-[#fbbf24] hover:text-[#181924] transition-all" href="#blog">Ver todos os artigos</a>
</div>
</section>
<div className="divider"></div>

<section className="max-w-7xl mx-auto px-4 md:px-0 py-6 fade-in delay-1" id="produtos">
<h2 className="title-section text-2xl md:text-3xl font-semibold tracking-tight mb-4">Produtos Digitais</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="glass p-6 rounded-2xl flex items-center gap-4 hover-outline hover:shadow-lg transition-all">
<img className="rounded-xl w-36 h-32 object-cover" src="https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<h3 className="font-semibold text-lg mb-1">Curso: Como Ler a Bíblia com Profundidade</h3>
<p className="text-[#c0c0c5] text-base mb-2">Aprenda métodos de estudo bíblico, contexto histórico e como aplicar a Palavra na vida real.</p>
<button className="btn px-4 py-2 rounded-md bg-[#fbbf24] text-[#181924] font-semibold text-sm hover:bg-[#fbbf24]/90">Saiba Mais</button>
</div>
</div>
<div className="glass p-6 rounded-2xl flex items-center gap-4 hover-outline hover:shadow-lg transition-all">
<img className="rounded-xl w-36 h-32 object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div>
<h3 className="font-semibold text-lg mb-1">eBook: Vida Cristã no Século XXI</h3>
<p className="text-[#c0c0c5] text-base mb-2">Descubra como viver a fé de forma relevante e autêntica em meio aos desafios contemporâneos.</p>
<button className="btn px-4 py-2 rounded-md bg-[#23243a] text-[#fbbf24] font-semibold text-sm hover:bg-[#fbbf24] hover:text-[#181924]">Baixar</button>
</div>
</div>
</div>
</section>
<div className="divider"></div>

<section className="max-w-7xl mx-auto px-4 md:px-0 py-8 flex flex-col md:flex-row gap-8 fade-in delay-2" id="youtube">

<div className="flex-1">
<h2 className="title-section text-2xl md:text-3xl font-semibold tracking-tight mb-4">Canal no YouTube</h2>
<div className="glass p-4 rounded-2xl shadow-lg mb-4">
<iframe allowfullscreen="" className="rounded-lg w-full aspect-video" src="https://www.youtube.com/embed/7p9bD4M5bsg" title="Bereia Urbana - YouTube"></iframe>
</div>
<a className="btn px-4 py-2 rounded-md bg-[#fbbf24] text-[#181924] font-semibold text-sm hover:bg-[#fbbf24]/90" href="https://youtube.com" target="_blank">Inscreva-se</a>
</div>

<div className="flex-1" id="podcast">
<h2 className="title-section text-2xl md:text-3xl font-semibold tracking-tight mb-4">Podcast</h2>
<div className="glass p-4 rounded-2xl shadow-lg podcast-card mb-4 flex items-center gap-4">
<img className="w-20 h-20 rounded-xl object-cover" src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&amp;fit=crop&amp;w=96&amp;q=80"/>
<div>
<h4 className="font-semibold mb-1">#03 - Como ser Bereiano em 2024?</h4>
<span className="text-[#c0c0c5] text-sm">com Pastor André | 34min</span>
</div>
<button className="ml-auto outline-hover p-2 rounded-full bg-[#23243a] hover:bg-[#fbbf24] hover:text-[#181924]">
<i className="w-6 h-6" data-lucide="play"></i>
</button>
</div>
<div className="glass p-4 rounded-2xl shadow-lg podcast-card flex items-center gap-4">
<img className="w-20 h-20 rounded-xl object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&amp;fit=crop&amp;w=96&amp;q=80"/>
<div>
<h4 className="font-semibold mb-1">#02 - Desafios da Juventude Cristã</h4>
<span className="text-[#c0c0c5] text-sm">com Lídia Souza | 28min</span>
</div>
<button className="ml-auto outline-hover p-2 rounded-full bg-[#23243a] hover:bg-[#fbbf24] hover:text-[#181924]">
<i className="w-6 h-6" data-lucide="play"></i>
</button>
</div>
</div>
</section>
<div className="divider"></div>

<section className="max-w-7xl mx-auto px-4 md:px-0 py-8 fade-in delay-3" id="comunidade">
<h2 className="title-section text-2xl md:text-3xl font-semibold tracking-tight mb-4">Desafios &amp; Comunidade</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="glass p-6 rounded-2xl flex flex-col gap-4">
<h4 className="font-semibold text-lg mb-2">Desafio do Mês</h4>
<p className="text-[#c0c0c5]">Participe do desafio "7 dias lendo Salmos" e compartilhe seus aprendizados nos comentários ou no grupo exclusivo do Facebook!</p>
<button className="btn px-4 py-2 rounded-md bg-[#fbbf24] text-[#181924] font-semibold text-sm hover:bg-[#fbbf24]/90">Entrar no desafio</button>
</div>
<div className="glass p-6 rounded-2xl flex flex-col gap-4">
<h4 className="font-semibold text-lg mb-2">Enquete</h4>
<p className="text-[#c0c0c5] mb-3">Qual livro da Bíblia você gostaria de estudar no próximo mês?</p>
<div className="flex flex-col gap-2">
<div className="custom-checkbox mb-2">
<input id="salmos" type="checkbox"/><label htmlFor="salmos">Salmos</label>
</div>
<div className="custom-checkbox mb-2">
<input id="provérbios" type="checkbox"/><label htmlFor="provérbios">Provérbios</label>
</div>
<div className="custom-checkbox mb-2">
<input id="atos" type="checkbox"/><label htmlFor="atos">Atos</label>
</div>
<div className="custom-checkbox">
<input id="romanos" type="checkbox"/><label htmlFor="romanos">Romanos</label>
</div>
</div>
<button className="btn px-4 py-2 rounded-md bg-[#23243a] text-[#fbbf24] font-semibold text-sm hover:bg-[#fbbf24] hover:text-[#181924] mt-3">Votar</button>
</div>
</div>
<div className="mt-8 text-center">
<a className="btn px-6 py-3 rounded-lg bg-[#23243a] text-[#fbbf24] font-semibold hover:bg-[#fbbf24] hover:text-[#181924]" href="https://facebook.com/groups/bereiaurbana" target="_blank">Acesse o grupo Bereia Urbana</a>
</div>
</section>
<div className="divider"></div>

<section className="max-w-7xl mx-auto px-4 md:px-0 py-8 fade-in delay-4" id="eventos">
<h2 className="title-section text-2xl md:text-3xl font-semibold tracking-tight mb-4">Eventos &amp; Conferências</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="glass p-6 rounded-2xl flex items-center gap-4">
<img className="rounded-xl w-32 h-28 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<h4 className="font-semibold text-lg mb-1">Conferência Jovens Bereianos</h4>
<span className="text-[#fbbf24] font-medium text-sm">17-19 Maio, SP</span>
<p className="text-[#c0c0c5] text-sm mb-1">Encontro nacional de jovens cristãos para aprendizado, louvor e discipulado.</p>
<button className="btn px-3 py-2 rounded-md bg-[#fbbf24] text-[#181924] font-semibold text-xs hover:bg-[#fbbf24]/90">Inscreva-se</button>
</div>
</div>
<div className="glass p-6 rounded-2xl flex items-center gap-4">
<img className="rounded-xl w-32 h-28 object-cover" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&amp;fit=crop&amp;w=160&amp;q=80"/>
<div>
<h4 className="font-semibold text-lg mb-1">Retiro de Inverno Bereia Urbana</h4>
<span className="text-[#fbbf24] font-medium text-sm">22-25 Julho, MG</span>
<p className="text-[#c0c0c5] text-sm mb-1">Dias de imersão bíblica, espiritualidade e comunhão cristã em meio à natureza.</p>
<button className="btn px-3 py-2 rounded-md bg-[#23243a] text-[#fbbf24] font-semibold text-xs hover:bg-[#fbbf24] hover:text-[#181924]">Saiba mais</button>
</div>
</div>
</div>
</section>
<div className="divider"></div>

<section className="max-w-7xl mx-auto px-4 md:px-0 py-8 fade-in delay-1" id="doar">
<h2 className="title-section text-2xl md:text-3xl font-semibold tracking-tight mb-4">Doe &amp; Faça Parte</h2>
<p className="text-lg text-[#c0c0c5] mb-6 max-w-2xl">
      "Você pode ajudar o Bereia Urbana a exaltar o que é bom, superar o que é mau e curar o que está quebrado, elevando as histórias e ideias do Reino de Deus."
      <br/><span className="block mt-3 text-[#fbbf24] font-medium">Doe para apoiar o blog, missões, orfanatos e mães solo de autistas.</span>
</p>
<div className="grid md:grid-cols-3 gap-8 mb-6">
<div className="glass p-6 rounded-2xl flex flex-col items-center gap-3">
<i className="w-9 h-9 text-[#fbbf24] mb-2" data-lucide="heart-handshake"></i>
<h4 className="font-semibold">Doação Única</h4>
<p className="text-[#c0c0c5] text-sm">Contribua com qualquer valor, de forma espontânea e direta.</p>
<button className="btn px-4 py-2 rounded-md bg-[#fbbf24] text-[#181924] font-semibold text-sm hover:bg-[#fbbf24]/90">Doar agora</button>
</div>
<div className="glass p-6 rounded-2xl flex flex-col items-center gap-3">
<i className="w-9 h-9 text-[#fbbf24] mb-2" data-lucide="repeat"></i>
<h4 className="font-semibold">Doação Recorrente</h4>
<p className="text-[#c0c0c5] text-sm">Apoie mensalmente e ajude a manter o projeto vivo. Parte das doações é destinada a missões e causas sociais.</p>
<button className="btn px-4 py-2 rounded-md bg-[#23243a] text-[#fbbf24] font-semibold text-sm hover:bg-[#fbbf24] hover:text-[#181924]">Tornar-se doador</button>
</div>
<div className="glass p-6 rounded-2xl flex flex-col items-center gap-3">
<i className="w-9 h-9 text-[#fbbf24] mb-2" data-lucide="gift"></i>
<h4 className="font-semibold">Doe para Missões</h4>
<p className="text-[#c0c0c5] text-sm">Ajude missionários, orfanatos e mães solo de autistas. Sua oferta faz diferença!</p>
<button className="btn px-4 py-2 rounded-md bg-[#fbbf24] text-[#181924] font-semibold text-sm hover:bg-[#fbbf24]/90">Ofertar</button>
</div>
</div>
<div className="text-center text-[#fbbf24] font-semibold mt-4">
<span>Juntos, fortalecemos vidas e espalhamos o Evangelho autêntico.</span>
</div>
</section>
<div className="divider"></div>

<section className="max-w-7xl mx-auto px-4 md:px-0 py-8 fade-in delay-2" id="assine">
<h2 className="title-section text-2xl md:text-3xl font-semibold tracking-tight mb-4">Assine &amp; Viva o Premium</h2>
<div className="grid md:grid-cols-2 gap-8">
<div>
<h4 className="font-semibold text-lg mb-2">Bereianos Premium</h4>
<ul className="list-disc ml-6 text-[#c0c0c5] text-base mb-4 space-y-1">
<li>Estudos bíblicos avançados, análises e devocionais inéditos</li>
<li>Desafios exclusivos, conteúdo em vídeo e lives privadas</li>
<li>Participação em enquetes, fóruns privados e grupo fechado</li>
<li>Descontos em cursos, eBooks e eventos</li>
<li>Direito a pagar individualmente por conteúdo premium</li>
<li>Receba a newsletter semanal e conteúdos por e-mail marketing</li>
<li>Concorra a mentorias e consultorias de fé &amp; negócios cristãos</li>
</ul>
<div className="flex gap-4 mb-4">
<button className="btn px-6 py-3 rounded-lg bg-[#fbbf24] text-[#181924] font-semibold text-base hover:bg-[#fbbf24]/80">Assinar Mensal</button>
<button className="btn px-6 py-3 rounded-lg bg-[#23243a] text-[#fbbf24] font-semibold text-base hover:bg-[#fbbf24] hover:text-[#181924]">Pagar por Conteúdo</button>
</div>
<p className="text-[#fbbf24] font-medium text-sm">Seja um Bereiano Premium e tenha acesso a uma fé profunda e comunidade engajada.</p>
</div>
<div className="glass p-6 rounded-2xl flex flex-col justify-center space-y-4">
<h4 className="font-semibold text-lg mb-2">Receba conteúdos exclusivos</h4>
<form className="flex flex-col gap-3">
<input className="glass px-4 py-2 rounded-md outline-none text-base text-[#181924] font-medium" placeholder="Seu e-mail" required="" style={{background: '#f9f9fb', color: '#181924'}} type="email"/>
<button className="btn px-4 py-2 rounded-md bg-[#fbbf24] text-[#181924] font-semibold text-sm hover:bg-[#fbbf24]/90">Assinar Newsletter</button>
</form>
</div>
</div>
</section>

    </>
  );
}
