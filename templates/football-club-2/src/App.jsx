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



tailwind.config = {
theme: {
extend: {
colors: {
campia: {
50: '#f0fdf4',
100: '#dcfce7',
200: '#bbf7d0',
300: '#86efac',
400: '#4ade80',
500: '#22c55e',
600: '#16a34a',
700: '#0b7a34', // Brand Color
800: '#166534',
900: '#14532d',
}
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
}
}
}
}



        lucide.createIcons();

        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });
        });

        // Modal Logic
        function openModal(id) {
            const modal = document.getElementById(id);
            if (modal) {
                modal.classList.remove('hidden-modal');
                modal.classList.add('visible-modal');
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            }
        }

        function closeModal(id) {
            const modal = document.getElementById(id);
            if (modal) {
                modal.classList.remove('visible-modal');
                modal.classList.add('hidden-modal');
                document.body.style.overflow = ''; // Restore scrolling
            }
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
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-campia-700 rounded-lg flex items-center justify-center text-white font-semibold text-xs tracking-tighter">
                    GD
                </div>
<span className="font-semibold text-zinc-900 tracking-tight group-hover:text-campia-700 transition-colors">GD CAMPIA</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#clube">O Clube</a>
<a className="hover:text-zinc-900 transition-colors" href="#plantel">Plantel</a>
<a className="hover:text-zinc-900 transition-colors" href="#jogos">Jogos</a>
<a className="hover:text-zinc-900 transition-colors" href="#noticias">Notícias</a>
<a className="hover:text-zinc-900 transition-colors" href="#apoiar">Sócios</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900" href="#contactos">Contactos</a>
<a className="bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm flex items-center gap-2" href="#apoiar">
<span>Apoiar Clube</span>
<i className="w-3.5 h-3.5" data-lucide="heart"></i>
</a>
</div>
<button className="md:hidden p-2 text-zinc-600" id="mobile-menu-btn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-zinc-200 p-6 flex-col gap-4 shadow-lg" id="mobile-menu">
<a className="text-base font-medium text-zinc-700" href="#clube">O Clube</a>
<a className="text-base font-medium text-zinc-700" href="#plantel">Plantel</a>
<a className="text-base font-medium text-zinc-700" href="#jogos">Jogos</a>
<a className="text-base font-medium text-zinc-700" href="#noticias">Notícias</a>
<a className="text-base font-medium text-campia-700" href="#apoiar">Torna-te Sócio</a>
<a className="text-base font-medium text-zinc-700" href="#contactos">Contactos</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden hero-bg" id="home">

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40 z-0"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8 fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 text-xs font-medium backdrop-blur-sm">
<span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                    Época 2023/2024
                </div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1]">
                    1980 — A Paixão de Campia Dentro de Campo
                </h1>
<p className="text-lg text-zinc-200 max-w-lg leading-relaxed font-light">
                    O orgulho da freguesia. Um clube comunitário, movido por esforço, união e amor à camisola no futebol distrital de Viseu.
                </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="bg-white text-campia-700 hover:bg-zinc-50 font-medium px-6 py-3 rounded-lg transition-all shadow-lg shadow-black/20 flex items-center gap-2" href="#jogos">
<span>Ver Próximo Jogo</span>
<i className="w-4 h-4" data-lucide="calendar"></i>
</a>
<a className="px-6 py-3 rounded-lg text-white font-medium hover:bg-white/10 border border-white/20 transition-all flex items-center gap-2" href="#apoiar">
<span>Tornar-me Sócio</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
<div className="relative fade-in-up" style={{animationDelay: '0.2s'}}>
<div className="absolute inset-0 bg-white/5 blur-3xl rounded-full"></div>
<div className="relative bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 text-white space-y-6 shadow-2xl">
<div className="border-b border-white/10 pb-6">
<div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-green-200 mb-4">
<span>Próximo Jogo</span>
<span>Jornada 12</span>
</div>
<div className="flex items-center justify-between">
<div className="text-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-campia-700 font-bold mx-auto mb-2 text-sm">GDC</div>
<span className="text-sm font-semibold">Campia</span>
</div>
<div className="text-center px-4">
<div className="text-2xl font-semibold tracking-tight">VS</div>
<div className="text-xs text-green-100 mt-1">Dom, 15:00</div>
<div className="text-xs text-green-200 mt-0.5">Complexo de Campia</div>
</div>
<div className="text-center">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 font-bold mx-auto mb-2 text-xs border border-white/10">ADV</div>
<span className="text-sm font-semibold">Vouzela</span>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-zinc-300 mb-3">
<span>Último Resultado</span>
<span className="text-green-300">Vitória</span>
</div>
<div className="flex items-center justify-between bg-black/40 rounded-lg p-4">
<span className="font-medium text-sm">Oliveira de Frades</span>
<div className="flex items-center gap-3 font-mono text-lg font-semibold">
<span className="text-zinc-400">1</span>
<span className="text-xs text-zinc-500">-</span>
<span className="text-white">2</span>
</div>
<span className="font-medium text-sm text-green-400">GD Campia</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="clube">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 text-campia-700 font-medium text-sm bg-campia-50 px-3 py-1 rounded-full border border-campia-100">
<i className="w-4 h-4" data-lucide="shield"></i>
<span>Desde 21 de Maio de 1980</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight">
                    Mais do que futebol, somos a identidade de Campia.
                </h2>
<div className="space-y-4 text-zinc-600 leading-relaxed">
<p>
                        Fundado em 1980, o <strong>Grupo Desportivo de Campia</strong> nasceu da vontade de unir a freguesia em torno do desporto. Localizados no concelho de Vouzela, somos um clube humilde, amador, mas com uma ambição gigante: honrar a nossa terra.
                    </p>
<p>
                        A nossa missão vai além das quatro linhas. Queremos promover o desporto, desenvolver atletas locais e ser um ponto de encontro para todas as gerações de Campia.
                    </p>
</div>
<div className="grid grid-cols-2 gap-4 pt-4">
<div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl">
<i className="w-6 h-6 text-campia-700 mb-3" data-lucide="users"></i>
<h4 className="font-semibold text-zinc-900 text-sm">Comunidade</h4>
<p className="text-xs text-zinc-500 mt-1">Feito de pessoas, para as pessoas.</p>
</div>
<div className="p-4 bg-zinc-50 border border-zinc-100 rounded-xl">
<i className="w-6 h-6 text-campia-700 mb-3" data-lucide="trophy"></i>
<h4 className="font-semibold text-zinc-900 text-sm">Ambição</h4>
<p className="text-xs text-zinc-500 mt-1">Esforço máximo na AF Viseu.</p>
</div>
</div>
</div>
<div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100 group">
<div className="absolute inset-0 bg-zinc-300 flex items-center justify-center text-zinc-400">
<div className="text-center">
<i className="w-12 h-12 mx-auto mb-2 opacity-50" data-lucide="image"></i>
<span className="text-sm">Complexo Desportivo de Campia</span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-medium text-lg">A nossa casa</p>
<p className="text-sm text-zinc-300">Campia, Vouzela</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-y border-zinc-200" id="plantel">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
<div>
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">Plantel Sénior</h2>
<p className="text-zinc-500 mt-2">Os guerreiros que defendem o verde e branco.</p>
</div>
<div className="flex gap-2">
<button className="px-4 py-2 text-sm font-medium text-zinc-600 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 transition-colors" onclick="openModal('modal-staff')">Equipa Técnica</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-campia-700 border border-campia-700 rounded-lg shadow-sm hover:bg-campia-800 transition-colors">Jogadores</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

<div className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
<div className="h-64 bg-zinc-100 relative flex items-end justify-center">
<i className="w-24 h-24 text-zinc-300 mb-4" data-lucide="user"></i>
<div className="absolute top-3 right-3 bg-white text-xs font-bold px-2 py-1 rounded border border-zinc-200 shadow-sm">#1</div>
</div>
<div className="p-4 border-t border-zinc-100">
<div className="text-xs font-semibold text-campia-700 uppercase tracking-wide mb-1">Guarda-Redes</div>
<h3 className="font-semibold text-zinc-900">Rui Silva</h3>
<p className="text-xs text-zinc-500 mt-1">24 Anos • Local</p>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
<div className="h-64 bg-zinc-100 relative flex items-end justify-center">
<i className="w-24 h-24 text-zinc-300 mb-4" data-lucide="user"></i>
<div className="absolute top-3 right-3 bg-white text-xs font-bold px-2 py-1 rounded border border-zinc-200 shadow-sm">#4</div>
</div>
<div className="p-4 border-t border-zinc-100">
<div className="text-xs font-semibold text-campia-700 uppercase tracking-wide mb-1">Defesa</div>
<h3 className="font-semibold text-zinc-900">André Costa</h3>
<p className="text-xs text-zinc-500 mt-1">21 Anos • Formação</p>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
<div className="h-64 bg-zinc-100 relative flex items-end justify-center">
<i className="w-24 h-24 text-zinc-300 mb-4" data-lucide="user"></i>
<div className="absolute top-3 right-3 bg-white text-xs font-bold px-2 py-1 rounded border border-zinc-200 shadow-sm">#10</div>
</div>
<div className="p-4 border-t border-zinc-100">
<div className="text-xs font-semibold text-campia-700 uppercase tracking-wide mb-1">Médio</div>
<h3 className="font-semibold text-zinc-900">João Pinho</h3>
<p className="text-xs text-zinc-500 mt-1">Capitão</p>
</div>
</div>

<div className="group bg-white rounded-xl border border-zinc-200 overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
<div className="h-64 bg-zinc-100 relative flex items-end justify-center">
<i className="w-24 h-24 text-zinc-300 mb-4" data-lucide="user"></i>
<div className="absolute top-3 right-3 bg-white text-xs font-bold px-2 py-1 rounded border border-zinc-200 shadow-sm">#9</div>
</div>
<div className="p-4 border-t border-zinc-100">
<div className="text-xs font-semibold text-campia-700 uppercase tracking-wide mb-1">Avançado</div>
<h3 className="font-semibold text-zinc-900">Pedro Martins</h3>
<p className="text-xs text-zinc-500 mt-1">Goleador</p>
</div>
</div>
</div>
<div className="mt-10 text-center">
<button className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-campia-700 transition-colors" onclick="openModal('modal-staff')">
                    Ver equipa técnica e staff completo
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="jogos">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="lg:col-span-2 space-y-8">
<div className="flex items-center justify-between">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">Calendário</h2>
<div className="flex gap-2">
<button className="text-sm text-campia-700 font-medium hover:underline" onclick="openModal('modal-calendar')">Ver tudo</button>
</div>
</div>
<div className="space-y-4">

<div className="flex flex-col md:flex-row items-center bg-white border border-zinc-200 rounded-xl p-6 hover:border-campia-200 transition-colors shadow-sm">
<div className="flex items-center gap-4 text-zinc-500 text-sm font-medium md:w-32 mb-4 md:mb-0">
<div className="bg-zinc-100 p-2 rounded text-center min-w-[50px]">
<div className="text-zinc-900 font-bold">12</div>
<div className="text-xs uppercase">Nov</div>
</div>
<div>15:00</div>
</div>
<div className="flex-1 flex items-center justify-between w-full md:px-8">
<div className="flex items-center gap-3 w-1/3 justify-end text-right">
<span className="font-semibold text-zinc-900">GD Campia</span>
<div className="w-8 h-8 rounded-full bg-campia-700 text-white flex items-center justify-center text-xs font-bold">GD</div>
</div>
<div className="px-4 text-xs font-medium text-zinc-400 uppercase tracking-widest">VS</div>
<div className="flex items-center gap-3 w-1/3">
<div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-bold text-zinc-500">SC</div>
<span className="font-semibold text-zinc-900">Santacruzense</span>
</div>
</div>
<div className="md:w-32 text-right mt-4 md:mt-0">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600">Em casa</span>
</div>
</div>

<div className="flex flex-col md:flex-row items-center bg-white border border-zinc-200 rounded-xl p-6 hover:border-campia-200 transition-colors shadow-sm opacity-70">
<div className="flex items-center gap-4 text-zinc-500 text-sm font-medium md:w-32 mb-4 md:mb-0">
<div className="bg-zinc-100 p-2 rounded text-center min-w-[50px]">
<div className="text-zinc-900 font-bold">19</div>
<div className="text-xs uppercase">Nov</div>
</div>
<div>15:00</div>
</div>
<div className="flex-1 flex items-center justify-between w-full md:px-8">
<div className="flex items-center gap-3 w-1/3 justify-end text-right">
<span className="font-semibold text-zinc-900">Nespereira</span>
<div className="w-8 h-8 rounded-full bg-zinc-200 text-zinc-500 flex items-center justify-center text-xs font-bold">FC</div>
</div>
<div className="px-4 text-xs font-medium text-zinc-400 uppercase tracking-widest">VS</div>
<div className="flex items-center gap-3 w-1/3">
<div className="w-8 h-8 rounded-full bg-campia-700 flex items-center justify-center text-xs font-bold text-white">GD</div>
<span className="font-semibold text-zinc-900">GD Campia</span>
</div>
</div>
<div className="md:w-32 text-right mt-4 md:mt-0">
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600">Fora</span>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<h3 className="text-xl font-semibold text-zinc-900 tracking-tight">Classificação</h3>
<div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm">
<table className="w-full text-sm text-left">
<thead className="bg-zinc-50 border-b border-zinc-100 text-zinc-500 font-medium">
<tr>
<th className="px-4 py-3 font-medium">#</th>
<th className="px-4 py-3 font-medium">Clube</th>
<th className="px-4 py-3 font-medium text-center">P</th>
<th className="px-4 py-3 font-medium text-center">PTS</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100">
<tr className="hover:bg-zinc-50">
<td className="px-4 py-3 text-zinc-400">1</td>
<td className="px-4 py-3 font-medium text-zinc-900">Viseu 2001</td>
<td className="px-4 py-3 text-center text-zinc-500">10</td>
<td className="px-4 py-3 text-center font-bold text-zinc-900">24</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="px-4 py-3 text-zinc-400">2</td>
<td className="px-4 py-3 font-medium text-zinc-900">Resende</td>
<td className="px-4 py-3 text-center text-zinc-500">10</td>
<td className="px-4 py-3 text-center font-bold text-zinc-900">21</td>
</tr>
<tr className="bg-campia-50/50">
<td className="px-4 py-3 text-campia-700 font-semibold border-l-4 border-campia-600">3</td>
<td className="px-4 py-3 font-semibold text-zinc-900">GD Campia</td>
<td className="px-4 py-3 text-center text-zinc-500">10</td>
<td className="px-4 py-3 text-center font-bold text-campia-700">19</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="px-4 py-3 text-zinc-400">4</td>
<td className="px-4 py-3 font-medium text-zinc-900">Vouzela</td>
<td className="px-4 py-3 text-center text-zinc-500">10</td>
<td className="px-4 py-3 text-center font-bold text-zinc-900">18</td>
</tr>
</tbody>
</table>
<div className="px-4 py-3 bg-zinc-50 border-t border-zinc-100 text-center">
<button className="text-xs font-medium text-zinc-500 hover:text-campia-700 transition-colors w-full" onclick="openModal('modal-table')">Ver tabela completa</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50 border-y border-zinc-200" id="noticias">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-12">Notícias do Clube</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="aspect-[16/10] bg-zinc-200 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-zinc-400 bg-zinc-200">
<i className="w-10 h-10" data-lucide="image"></i>
</div>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<div className="flex items-center gap-3 text-xs font-medium text-zinc-500 mb-2">
<span className="text-campia-700 bg-campia-50 px-2 py-0.5 rounded">Equipa Sénior</span>
<span>12 Out, 2023</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-campia-700 transition-colors">Vitória importante frente ao Vouzela no dérbi concelhio.</h3>
<p className="text-sm text-zinc-600 line-clamp-2">Num jogo de grandes emoções, o Campia saiu vitorioso com um golo nos últimos minutos.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="aspect-[16/10] bg-zinc-200 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-zinc-400 bg-zinc-200">
<i className="w-10 h-10" data-lucide="image"></i>
</div>
</div>
<div className="flex items-center gap-3 text-xs font-medium text-zinc-500 mb-2">
<span className="text-blue-700 bg-blue-50 px-2 py-0.5 rounded">Comunidade</span>
<span>08 Out, 2023</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-campia-700 transition-colors">Jantar de Natal do Grupo Desportivo de Campia.</h3>
<p className="text-sm text-zinc-600 line-clamp-2">As inscrições já estão abertas para o nosso convívio anual. Junta-te à família.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="aspect-[16/10] bg-zinc-200 rounded-xl mb-4 overflow-hidden relative">
<div className="absolute inset-0 flex items-center justify-center text-zinc-400 bg-zinc-200">
<i className="w-10 h-10" data-lucide="image"></i>
</div>
</div>
<div className="flex items-center gap-3 text-xs font-medium text-zinc-500 mb-2">
<span className="text-orange-700 bg-orange-50 px-2 py-0.5 rounded">Formação</span>
<span>01 Out, 2023</span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2 group-hover:text-campia-700 transition-colors">Captações abertas para a nova época.</h3>
<p className="text-sm text-zinc-600 line-clamp-2">Procuramos novos talentos nascidos entre 2005 e 2010. Aparece no treino.</p>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="apoiar">
<div className="bg-zinc-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-6">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4 border border-white/10">
<i className="w-6 h-6 text-green-400" data-lucide="heart"></i>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Torna-te Sócio</h2>
<p className="text-zinc-400 text-lg">O GD Campia vive da paixão dos seus adeptos. Ao fazeres-te sócio, estás a apoiar o desporto local, a formação de jovens e a manutenção do nosso complexo.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
<div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:bg-white/10 transition-colors cursor-pointer">
<div className="flex justify-between items-center mb-4">
<h3 className="font-semibold text-lg">Sócio Efetivo</h3>
<span className="text-green-400 font-mono">30€/ano</span>
</div>
<ul className="text-sm text-zinc-400 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Entrada gratuita nos jogos</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Direito a voto</li>
</ul>
</div>
<div className="bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:bg-white/10 transition-colors cursor-pointer">
<div className="flex justify-between items-center mb-4">
<h3 className="font-semibold text-lg">Sócio Jovem</h3>
<span className="text-green-400 font-mono">15€/ano</span>
</div>
<ul className="text-sm text-zinc-400 space-y-2">
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> &lt; 18 anos</li>
<li className="flex items-center gap-2"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Entrada gratuita</li>
</ul>
</div>
</div>
<div className="pt-8">
<button className="bg-green-600 hover:bg-green-500 text-white font-medium py-3 px-8 rounded-lg shadow-lg shadow-green-900/50 transition-all w-full md:w-auto">
                        Preencher Ficha de Inscrição
                    </button>
<p className="text-xs text-zinc-500 mt-4">Ou visita a secretaria do clube.</p>
</div>
</div>
</div>
<div className="mt-20 border-t border-zinc-200 pt-12">
<p className="text-center text-sm font-medium text-zinc-500 uppercase tracking-widest mb-8">Parceiros Oficiais</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="h-8 w-32 bg-zinc-300 rounded"></div>
<div className="h-10 w-24 bg-zinc-300 rounded"></div>
<div className="h-12 w-12 bg-zinc-300 rounded-full"></div>
<div className="h-8 w-28 bg-zinc-300 rounded"></div>
<div className="h-10 w-32 bg-zinc-300 rounded"></div>
</div>
<div className="text-center mt-8">
<a className="text-sm text-campia-700 font-medium hover:underline" href="#contactos">Quer patrocinar o clube?</a>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-20 pb-10 px-6" id="contactos">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
<div>
<h2 className="text-2xl font-semibold text-zinc-900 mb-6 tracking-tight">Fale Connosco</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100">
<i className="w-5 h-5 text-campia-700" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-medium text-zinc-900">Morada</h4>
<p className="text-zinc-500 text-sm mt-1">Complexo Desportivo de Campia,<br/>3670 Vouzela, Portugal</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-zinc-50 rounded-lg border border-zinc-100">
<i className="w-5 h-5 text-campia-700" data-lucide="mail"></i>
</div>
<div>
<h4 className="font-medium text-zinc-900">Email</h4>
<p className="text-zinc-500 text-sm mt-1">geral@gdcampia.pt</p>
</div>
</div>
<div className="h-48 bg-zinc-100 rounded-xl border border-zinc-200 mt-6 flex items-center justify-center text-zinc-400">
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="map"></i> Mapa Google</span>
</div>
</div>
</div>
<div className="bg-zinc-50 rounded-2xl p-6 md:p-8 border border-zinc-200">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-medium text-zinc-700 mb-1">Nome</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-sm custom-input" placeholder="O teu nome" type="text"/>
</div>
<div className="col-span-2 md:col-span-1">
<label className="block text-xs font-medium text-zinc-700 mb-1">Email</label>
<input className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-sm custom-input" placeholder="email@exemplo.com" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Assunto</label>
<select className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-sm custom-input">
<option>Informação Geral</option>
<option>Sócios</option>
<option>Escolinhas</option>
<option>Patrocínios</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1">Mensagem</label>
<textarea className="w-full bg-white border border-zinc-200 rounded-lg px-3 py-2 text-sm custom-input" placeholder="Como podemos ajudar?" rows="4"></textarea>
</div>
<button className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium py-2.5 rounded-lg transition-colors text-sm" type="button">
                        Enviar Mensagem
                    </button>
</form>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-campia-700 rounded text-white flex items-center justify-center text-[10px] font-bold">GD</div>
<span className="text-sm font-semibold text-zinc-900">GD CAMPIA</span>
</div>
<div className="text-xs text-zinc-400 text-center md:text-right">
                © 2023 Grupo Desportivo de Campia. Todos os direitos reservados.
            </div>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-campia-700 transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="text-zinc-400 hover:text-campia-700 transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 flex items-center justify-center hidden-modal modal" id="modal-staff">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onclick="closeModal('modal-staff')"></div>
<div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto m-6 rounded-2xl shadow-2xl animate-fade-in-up">
<div className="sticky top-0 bg-white/90 backdrop-blur border-b border-zinc-200 px-6 py-4 flex items-center justify-between z-10">
<h3 className="text-xl font-semibold text-zinc-900">Equipa Técnica &amp; Staff</h3>
<button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors" onclick="closeModal('modal-staff')">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="col-span-full mb-4">
<h4 className="text-sm font-semibold text-campia-700 uppercase tracking-widest border-b border-zinc-100 pb-2 mb-4">Direção</h4>
</div>
<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-center">
<div className="w-20 h-20 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-zinc-400">
<i className="w-8 h-8" data-lucide="user"></i>
</div>
<h4 className="font-semibold text-zinc-900">Carlos Silva</h4>
<p className="text-xs text-zinc-500 mt-1">Presidente</p>
</div>
<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-center">
<div className="w-20 h-20 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-zinc-400">
<i className="w-8 h-8" data-lucide="user"></i>
</div>
<h4 className="font-semibold text-zinc-900">Manuel Santos</h4>
<p className="text-xs text-zinc-500 mt-1">Diretor Desportivo</p>
</div>

<div className="col-span-full mb-4 mt-6">
<h4 className="text-sm font-semibold text-campia-700 uppercase tracking-widest border-b border-zinc-100 pb-2 mb-4">Equipa Técnica</h4>
</div>
<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-center">
<div className="w-20 h-20 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-zinc-400">
<i className="w-8 h-8" data-lucide="user"></i>
</div>
<h4 className="font-semibold text-zinc-900">Paulo Sousa</h4>
<p className="text-xs text-zinc-500 mt-1">Treinador Principal</p>
</div>
<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-center">
<div className="w-20 h-20 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-zinc-400">
<i className="w-8 h-8" data-lucide="user"></i>
</div>
<h4 className="font-semibold text-zinc-900">Miguel Oliveira</h4>
<p className="text-xs text-zinc-500 mt-1">Treinador Adjunto</p>
</div>
<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-center">
<div className="w-20 h-20 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-zinc-400">
<i className="w-8 h-8" data-lucide="user"></i>
</div>
<h4 className="font-semibold text-zinc-900">Ricardo Almeida</h4>
<p className="text-xs text-zinc-500 mt-1">Tr. Guarda-Redes</p>
</div>

<div className="col-span-full mb-4 mt-6">
<h4 className="text-sm font-semibold text-campia-700 uppercase tracking-widest border-b border-zinc-100 pb-2 mb-4">Saúde</h4>
</div>
<div className="bg-zinc-50 p-6 rounded-xl border border-zinc-100 text-center">
<div className="w-20 h-20 bg-zinc-200 rounded-full mx-auto mb-4 flex items-center justify-center text-zinc-400">
<i className="w-8 h-8" data-lucide="heart-pulse"></i>
</div>
<h4 className="font-semibold text-zinc-900">Dr. Ana Pereira</h4>
<p className="text-xs text-zinc-500 mt-1">Fisioterapeuta</p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center hidden-modal modal" id="modal-table">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onclick="closeModal('modal-table')"></div>
<div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto m-6 rounded-2xl shadow-2xl animate-fade-in-up">
<div className="sticky top-0 bg-white/90 backdrop-blur border-b border-zinc-200 px-6 py-4 flex items-center justify-between z-10">
<div>
<h3 className="text-xl font-semibold text-zinc-900">Classificação Geral</h3>
<p className="text-xs text-zinc-500">AF Viseu 1ª Divisão</p>
</div>
<button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors" onclick="closeModal('modal-table')">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-6">
<div className="overflow-x-auto border border-zinc-200 rounded-xl">
<table className="w-full text-sm text-left">
<thead className="bg-zinc-50 border-b border-zinc-100 text-zinc-500 font-medium whitespace-nowrap">
<tr>
<th className="px-4 py-3">#</th>
<th className="px-4 py-3 w-full">Clube</th>
<th className="px-4 py-3 text-center">J</th>
<th className="px-4 py-3 text-center">V</th>
<th className="px-4 py-3 text-center">E</th>
<th className="px-4 py-3 text-center">D</th>
<th className="px-4 py-3 text-center">GM</th>
<th className="px-4 py-3 text-center">GS</th>
<th className="px-4 py-3 text-center">PTS</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-100 whitespace-nowrap">
<tr className="hover:bg-zinc-50">
<td className="px-4 py-3 text-zinc-400">1</td>
<td className="px-4 py-3 font-medium text-zinc-900">Viseu 2001</td>
<td className="px-4 py-3 text-center">10</td>
<td className="px-4 py-3 text-center">8</td>
<td className="px-4 py-3 text-center">0</td>
<td className="px-4 py-3 text-center">2</td>
<td className="px-4 py-3 text-center">24</td>
<td className="px-4 py-3 text-center">5</td>
<td className="px-4 py-3 text-center font-bold text-zinc-900">24</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="px-4 py-3 text-zinc-400">2</td>
<td className="px-4 py-3 font-medium text-zinc-900">Resende</td>
<td className="px-4 py-3 text-center">10</td>
<td className="px-4 py-3 text-center">7</td>
<td className="px-4 py-3 text-center">0</td>
<td className="px-4 py-3 text-center">3</td>
<td className="px-4 py-3 text-center">18</td>
<td className="px-4 py-3 text-center">10</td>
<td className="px-4 py-3 text-center font-bold text-zinc-900">21</td>
</tr>
<tr className="bg-campia-50/50">
<td className="px-4 py-3 text-campia-700 font-semibold border-l-4 border-campia-600">3</td>
<td className="px-4 py-3 font-semibold text-zinc-900">GD Campia</td>
<td className="px-4 py-3 text-center">10</td>
<td className="px-4 py-3 text-center">6</td>
<td className="px-4 py-3 text-center">1</td>
<td className="px-4 py-3 text-center">3</td>
<td className="px-4 py-3 text-center">15</td>
<td className="px-4 py-3 text-center">11</td>
<td className="px-4 py-3 text-center font-bold text-campia-700">19</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="px-4 py-3 text-zinc-400">4</td>
<td className="px-4 py-3 font-medium text-zinc-900">Vouzela</td>
<td className="px-4 py-3 text-center">10</td>
<td className="px-4 py-3 text-center">5</td>
<td className="px-4 py-3 text-center">3</td>
<td className="px-4 py-3 text-center">2</td>
<td className="px-4 py-3 text-center">14</td>
<td className="px-4 py-3 text-center">8</td>
<td className="px-4 py-3 text-center font-bold text-zinc-900">18</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="px-4 py-3 text-zinc-400">5</td>
<td className="px-4 py-3 font-medium text-zinc-900">Nespereira</td>
<td className="px-4 py-3 text-center">10</td>
<td className="px-4 py-3 text-center">5</td>
<td className="px-4 py-3 text-center">1</td>
<td className="px-4 py-3 text-center">4</td>
<td className="px-4 py-3 text-center">12</td>
<td className="px-4 py-3 text-center">12</td>
<td className="px-4 py-3 text-center font-bold text-zinc-900">16</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="px-4 py-3 text-zinc-400">6</td>
<td className="px-4 py-3 font-medium text-zinc-900">Oliveira de Frades</td>
<td className="px-4 py-3 text-center">10</td>
<td className="px-4 py-3 text-center">4</td>
<td className="px-4 py-3 text-center">2</td>
<td className="px-4 py-3 text-center">4</td>
<td className="px-4 py-3 text-center">10</td>
<td className="px-4 py-3 text-center">15</td>
<td className="px-4 py-3 text-center font-bold text-zinc-900">14</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="px-4 py-3 text-zinc-400">7</td>
<td className="px-4 py-3 font-medium text-zinc-900">Carregal do Sal</td>
<td className="px-4 py-3 text-center">10</td>
<td className="px-4 py-3 text-center">3</td>
<td className="px-4 py-3 text-center">2</td>
<td className="px-4 py-3 text-center">5</td>
<td className="px-4 py-3 text-center">8</td>
<td className="px-4 py-3 text-center">14</td>
<td className="px-4 py-3 text-center font-bold text-zinc-900">11</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="px-4 py-3 text-zinc-400">8</td>
<td className="px-4 py-3 font-medium text-zinc-900">Santacruzense</td>
<td className="px-4 py-3 text-center">10</td>
<td className="px-4 py-3 text-center">2</td>
<td className="px-4 py-3 text-center">3</td>
<td className="px-4 py-3 text-center">5</td>
<td className="px-4 py-3 text-center">9</td>
<td className="px-4 py-3 text-center">16</td>
<td className="px-4 py-3 text-center font-bold text-zinc-900">9</td>
</tr>
<tr className="hover:bg-zinc-50">
<td className="px-4 py-3 text-zinc-400">9</td>
<td className="px-4 py-3 font-medium text-zinc-900">Vale de Açores</td>
<td className="px-4 py-3 text-center">10</td>
<td className="px-4 py-3 text-center">1</td>
<td className="px-4 py-3 text-center">1</td>
<td className="px-4 py-3 text-center">8</td>
<td className="px-4 py-3 text-center">5</td>
<td className="px-4 py-3 text-center">22</td>
<td className="px-4 py-3 text-center font-bold text-zinc-900">4</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center hidden-modal modal" id="modal-calendar">
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onclick="closeModal('modal-calendar')"></div>
<div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto m-6 rounded-2xl shadow-2xl animate-fade-in-up">
<div className="sticky top-0 bg-white/90 backdrop-blur border-b border-zinc-200 px-6 py-4 flex items-center justify-between z-10">
<div>
<h3 className="text-xl font-semibold text-zinc-900">Calendário Completo</h3>
<p className="text-xs text-zinc-500">Temporada 2023/24</p>
</div>
<button className="p-2 hover:bg-zinc-100 rounded-lg transition-colors" onclick="closeModal('modal-calendar')">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-6 space-y-8">

<div>
<h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-widest mb-4">Outubro 2023</h4>
<div className="space-y-3">

<div className="flex items-center bg-zinc-50 border border-zinc-100 rounded-lg p-4 opacity-75">
<div className="w-16 text-center text-xs font-bold text-zinc-400">
                                01 OUT
                            </div>
<div className="flex-1 flex items-center justify-between px-4">
<div className="text-right w-1/3 font-semibold text-zinc-900">GD Campia</div>
<div className="px-4 font-mono font-bold text-zinc-700">2 - 0</div>
<div className="w-1/3 font-semibold text-zinc-900">Vale de Açores</div>
</div>
<div className="w-20 text-right text-xs text-green-600 font-bold uppercase">Vitória</div>
</div>
<div className="flex items-center bg-zinc-50 border border-zinc-100 rounded-lg p-4 opacity-75">
<div className="w-16 text-center text-xs font-bold text-zinc-400">
                                08 OUT
                            </div>
<div className="flex-1 flex items-center justify-between px-4">
<div className="text-right w-1/3 font-semibold text-zinc-900">Carregal do Sal</div>
<div className="px-4 font-mono font-bold text-zinc-700">1 - 1</div>
<div className="w-1/3 font-semibold text-zinc-900">GD Campia</div>
</div>
<div className="w-20 text-right text-xs text-zinc-500 font-bold uppercase">Empate</div>
</div>
<div className="flex items-center bg-zinc-50 border border-zinc-100 rounded-lg p-4 opacity-75">
<div className="w-16 text-center text-xs font-bold text-zinc-400">
                                22 OUT
                            </div>
<div className="flex-1 flex items-center justify-between px-4">
<div className="text-right w-1/3 font-semibold text-zinc-900">Oliveira de Frades</div>
<div className="px-4 font-mono font-bold text-zinc-700">1 - 2</div>
<div className="w-1/3 font-semibold text-zinc-900">GD Campia</div>
</div>
<div className="w-20 text-right text-xs text-green-600 font-bold uppercase">Vitória</div>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-semibold text-campia-700 uppercase tracking-widest mb-4">Novembro 2023</h4>
<div className="space-y-3">
<div className="flex items-center bg-white border border-campia-200 shadow-sm rounded-lg p-4 border-l-4 border-l-campia-600">
<div className="w-16 text-center text-xs font-bold text-zinc-900">
                                12 NOV
                            </div>
<div className="flex-1 flex items-center justify-between px-4">
<div className="text-right w-1/3 font-semibold text-zinc-900">GD Campia</div>
<div className="px-4 text-xs text-zinc-400 font-bold uppercase">VS</div>
<div className="w-1/3 font-semibold text-zinc-900">Santacruzense</div>
</div>
<div className="w-20 text-right text-xs text-zinc-400">15:00</div>
</div>
<div className="flex items-center bg-white border border-zinc-200 rounded-lg p-4">
<div className="w-16 text-center text-xs font-bold text-zinc-900">
                                19 NOV
                            </div>
<div className="flex-1 flex items-center justify-between px-4">
<div className="text-right w-1/3 font-semibold text-zinc-900">Nespereira</div>
<div className="px-4 text-xs text-zinc-400 font-bold uppercase">VS</div>
<div className="w-1/3 font-semibold text-zinc-900">GD Campia</div>
</div>
<div className="w-20 text-right text-xs text-zinc-400">15:00</div>
</div>
<div className="flex items-center bg-white border border-zinc-200 rounded-lg p-4">
<div className="w-16 text-center text-xs font-bold text-zinc-900">
                                26 NOV
                            </div>
<div className="flex-1 flex items-center justify-between px-4">
<div className="text-right w-1/3 font-semibold text-zinc-900">GD Campia</div>
<div className="px-4 text-xs text-zinc-400 font-bold uppercase">VS</div>
<div className="w-1/3 font-semibold text-zinc-900">Viseu 2001</div>
</div>
<div className="w-20 text-right text-xs text-zinc-400">15:00</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
