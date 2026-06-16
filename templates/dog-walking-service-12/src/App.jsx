import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showPage(pageId) {
            // Hide all pages
            const pages = ['home-page', 'login-page', 'booking-page', 'checkout-page'];
            pages.forEach(id => {
                const el = document.getElementById(id);
                if(el) el.classList.add('hidden');
            });

            // Show selected page
            const target = document.getElementById(pageId + '-page');
            if (target) {
                target.classList.remove('hidden');
            } else {
                // Default to home if something goes wrong
                document.getElementById('home-page').classList.remove('hidden');
            }

            // Scroll to top
            window.scrollTo(0, 0);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-zinc-900 flex items-center gap-2 cursor-pointer" href="#" onclick="showPage('home')">
<span className="iconify text-indigo-600" data-icon="lucide:dog" data-width="24" style={{strokeWidth: '1.5'}}></span>
                WOOFWALK
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="showPage('home')">Como funciona</a>
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="showPage('home')">Segurança</a>
<a className="hover:text-zinc-900 transition-colors" href="#" onclick="showPage('home')">Planos</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#" onclick="showPage('login')">Login</a>
<a className="text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200" href="#" onclick="showPage('booking')">
                    Agendar Agora
                </a>
</div>
</div>
</nav>

<main className="page-section pt-16 flex-grow" id="home-page">

<section className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-20 right-10 w-72 h-72 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 uppercase tracking-wide">Disponível em São Paulo e Rio</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight mb-6 leading-[1.1]">
                    Passeios que seu cão <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">simplesmente ama.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                    Conectamos donos amorosos a passeadores verificados. Rastreamento GPS, seguro veterinário e relatórios fotográficos em cada caminhada.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full md:w-auto h-12 px-8 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group" onclick="showPage('booking')">
                        Começar Agora
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</button>
<button className="w-full md:w-auto h-12 px-8 rounded-full bg-white border border-zinc-200 text-zinc-700 font-medium hover:bg-zinc-50 hover:border-zinc-300 transition-all" onclick="showPage('home')">
                        Ver Preços
                    </button>
</div>

<div className="relative max-w-5xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full"></div>
<img alt="Dog walking" className="rounded-2xl shadow-2xl border border-zinc-200/50 w-full object-cover h-[400px] md:h-[600px]" src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-12 left-4 md:left-12 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-white/50 max-w-xs w-full text-left">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
<span className="iconify" data-icon="lucide:user" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-xs text-zinc-500">Passeador</p>
<p className="text-sm font-semibold text-zinc-900">Gabriel S.</p>
</div>
<div className="ml-auto flex items-center gap-1 text-green-600 bg-green-50 px-2 py-1 rounded-md">
<span className="iconify" data-icon="lucide:activity" data-width="14" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-semibold">Ao vivo</span>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-500">Tempo</span>
<span className="font-medium text-zinc-900">45:00 min</span>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-zinc-500">Distância</span>
<span className="font-medium text-zinc-900">3.2 km</span>
</div>

<div className="h-1.5 w-full bg-zinc-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-3/4 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-zinc-500 mb-6 font-medium">Confiado por donos de pets das melhores empresas</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
<span className="text-xl font-bold tracking-tighter text-zinc-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:triangle" style={{strokeWidth: '2'}}></span> Vercel</span>
<span className="text-xl font-bold tracking-tighter text-zinc-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:hexagon" style={{strokeWidth: '2'}}></span> Linear</span>
<span className="text-xl font-bold tracking-tighter text-zinc-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:box" style={{strokeWidth: '2'}}></span> Dropbox</span>
<span className="text-xl font-bold tracking-tighter text-zinc-800 flex items-center gap-1"><span className="iconify" data-icon="lucide:circle" style={{strokeWidth: '2'}}></span> Stripe</span>
</div>
</div>
</section>

<section className="py-24 bg-white" id="seguranca">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">Segurança em primeiro lugar, <br/> diversão garantida.</h2>
<p className="text-zinc-500 text-lg">Entendemos que deixar seu cão com alguém exige confiança. Por isso construímos a plataforma mais segura do mercado.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-lg hover:shadow-zinc-100/50">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-indigo-600" data-icon="lucide:map-pin" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">GPS em Tempo Real</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Acompanhe cada passo do passeio diretamente pelo nosso app. Veja onde seu cão está e por onde passou.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-lg hover:shadow-zinc-100/50">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-indigo-600" data-icon="lucide:shield-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Passeadores Verificados</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Menos de 5% dos candidatos são aprovados. Checamos antecedentes criminais e realizamos treinamento prático.</p>
</div>

<div className="group p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-all hover:shadow-lg hover:shadow-zinc-100/50">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-indigo-600" data-icon="lucide:heart-pulse" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Seguro Veterinário</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Tranquilidade total. Cada passeio reservado pela WoofWalk inclui cobertura de seguro veterinário completa.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="planos">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">Escolha o plano ideal</h2>
<p className="text-zinc-500">Flexibilidade para sua rotina e felicidade para seu pet.</p>

<div className="mt-8 flex items-center justify-center gap-4">
<span className="text-sm font-medium text-zinc-900">Avulso</span>
<label className="custom-toggle relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
</label>
<span className="text-sm font-medium text-zinc-900">Mensal <span className="text-indigo-600 text-xs bg-indigo-50 px-2 py-0.5 rounded-full ml-1">-20% OFF</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all flex flex-col">
<h3 className="font-semibold text-lg text-zinc-900">Rápido</h3>
<p className="text-sm text-zinc-500 mt-1">Ideal para necessidades rápidas.</p>
<div className="my-6">
<span className="text-3xl font-semibold text-zinc-900">R$35</span><span className="text-zinc-500">/passeio</span>
</div>
<button className="w-full py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-all" onclick="showPage('checkout')">Selecionar</button>
<ul className="mt-8 space-y-3">
<li className="text-sm text-zinc-600 flex items-center gap-2"><span className="iconify text-zinc-400" data-icon="lucide:check" data-width="16"></span> 30 minutos</li>
<li className="text-sm text-zinc-600 flex items-center gap-2"><span className="iconify text-zinc-400" data-icon="lucide:check" data-width="16"></span> Relatório básico</li>
</ul>
</div>

<div className="relative p-8 rounded-2xl border border-indigo-200 bg-white shadow-xl shadow-indigo-100 ring-1 ring-indigo-500/10 flex flex-col">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Mais Popular</div>
<h3 className="font-semibold text-lg text-zinc-900">Standard</h3>
<p className="text-sm text-zinc-500 mt-1">Para gastar energia de verdade.</p>
<div className="my-6">
<span className="text-3xl font-semibold text-zinc-900">R$55</span><span className="text-zinc-500">/passeio</span>
</div>
<button className="w-full py-2.5 rounded-lg bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200" onclick="showPage('checkout')">Selecionar</button>
<ul className="mt-8 space-y-3">
<li className="text-sm text-zinc-600 flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check" data-width="16"></span> 60 minutos</li>
<li className="text-sm text-zinc-600 flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check" data-width="16"></span> Relatório completo + Fotos</li>
<li className="text-sm text-zinc-600 flex items-center gap-2"><span className="iconify text-indigo-500" data-icon="lucide:check" data-width="16"></span> Alimentação inclusa</li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all flex flex-col">
<h3 className="font-semibold text-lg text-zinc-900">Aventura</h3>
<p className="text-sm text-zinc-500 mt-1">Para cães atléticos e ativos.</p>
<div className="my-6">
<span className="text-3xl font-semibold text-zinc-900">R$80</span><span className="text-zinc-500">/passeio</span>
</div>
<button className="w-full py-2.5 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-all" onclick="showPage('checkout')">Selecionar</button>
<ul className="mt-8 space-y-3">
<li className="text-sm text-zinc-600 flex items-center gap-2"><span className="iconify text-zinc-400" data-icon="lucide:check" data-width="16"></span> 90 minutos</li>
<li className="text-sm text-zinc-600 flex items-center gap-2"><span className="iconify text-zinc-400" data-icon="lucide:check" data-width="16"></span> Trilha ou Parque</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-20"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Seu pet merece o melhor.</h2>
<p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">Junte-se a milhares de donos felizes. O primeiro passeio é por nossa conta.</p>
<button className="px-8 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all whitespace-nowrap shadow-lg shadow-indigo-900/50" onclick="showPage('booking')">
                    Agendar Meu Passeio Grátis
                </button>
</div>
</section>
</main>

<section className="hidden page-section pt-32 pb-20 flex-grow bg-zinc-50 flex items-center justify-center" id="login-page">
<div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl border border-zinc-200/60 mx-4">
<div className="text-center mb-8">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-indigo-600">
<span className="iconify" data-icon="lucide:lock" data-width="24"></span>
</div>
<h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">Bem-vindo de volta</h2>
<p className="text-zinc-500 text-sm mt-1">Acesse sua conta para gerenciar passeios</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); showPage('home');">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 uppercase tracking-wide">Email</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-sm" placeholder="nome@exemplo.com" type="email"/>
</div>
<div>
<div className="flex justify-between mb-1.5">
<label className="block text-xs font-medium text-zinc-700 uppercase tracking-wide">Senha</label>
<a className="text-xs text-indigo-600 hover:text-indigo-500" href="#">Esqueceu?</a>
</div>
<input className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 bg-zinc-50 focus:bg-white focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-sm" placeholder="••••••••" type="password"/>
</div>
<button className="w-full py-2.5 bg-zinc-900 text-white rounded-lg font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200 text-sm">Entrar</button>
</form>
<div className="relative my-8">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-100"></div></div>
<div className="relative flex justify-center text-xs"><span className="bg-white px-2 text-zinc-400">Ou continue com</span></div>
</div>
<button className="w-full py-2.5 border border-zinc-200 text-zinc-700 rounded-lg font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2 text-sm bg-white">
<span className="iconify" data-icon="lucide:chrome" data-width="16"></span>
                Google
            </button>
<p className="text-center text-xs text-zinc-500 mt-6">
                Não tem uma conta? <a className="text-indigo-600 hover:text-indigo-500 font-medium" href="#" onclick="showPage('booking')">Cadastre-se</a>
</p>
</div>
</section>

<section className="hidden page-section pt-24 pb-20 flex-grow bg-white" id="booking-page">
<div className="max-w-3xl mx-auto px-6">
<div className="mb-10">
<a className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-6 transition-colors" href="#" onclick="showPage('home')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="16"></span> Voltar
                </a>
<h1 className="text-3xl font-semibold text-zinc-900 tracking-tight">Agendar Serviço</h1>
<p className="text-zinc-500 mt-2">Preencha os detalhes para agendar o próximo passeio do seu melhor amigo.</p>
</div>
<form className="space-y-8" onsubmit="event.preventDefault(); showPage('checkout');">

<div className="space-y-4">
<h3 className="text-sm font-medium text-zinc-900 uppercase tracking-wide">1. Tipo de Serviço</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<label className="radio-card cursor-pointer group">
<input checked="" className="hidden" name="service" type="radio"/>
<div className="border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 transition-all bg-white relative overflow-hidden">
<div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-zinc-200 bg-white flex items-center justify-center check-icon transition-all scale-0 opacity-0">
<span className="iconify text-indigo-600" data-icon="lucide:check" data-width="12"></span>
</div>
<div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 mb-3">
<span className="iconify" data-icon="lucide:footprints" data-width="20"></span>
</div>
<div className="font-medium text-zinc-900">Passeio Avulso</div>
<div className="text-xs text-zinc-500 mt-1">30 a 90 minutos de caminhada</div>
</div>
</label>
<label className="radio-card cursor-pointer group">
<input className="hidden" name="service" type="radio"/>
<div className="border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 transition-all bg-white relative overflow-hidden">
<div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-zinc-200 bg-white flex items-center justify-center check-icon transition-all scale-0 opacity-0">
<span className="iconify text-indigo-600" data-icon="lucide:check" data-width="12"></span>
</div>
<div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-3">
<span className="iconify" data-icon="lucide:home" data-width="20"></span>
</div>
<div className="font-medium text-zinc-900">Pet Sitter</div>
<div className="text-xs text-zinc-500 mt-1">Visita em casa de 60min</div>
</div>
</label>
</div>
</div>

<div className="space-y-4">
<h3 className="text-sm font-medium text-zinc-900 uppercase tracking-wide">2. Data e Hora</h3>
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
<span className="iconify" data-icon="lucide:calendar" data-width="16"></span>
</span>
<input className="w-full pl-10 pr-4 py-3 rounded-lg border border-zinc-200 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all text-zinc-700" type="date"/>
</div>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
<span className="iconify" data-icon="lucide:clock" data-width="16"></span>
</span>
<select className="w-full pl-10 pr-10 py-3 rounded-lg border border-zinc-200 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all appearance-none bg-white text-zinc-700">
<option>08:00</option>
<option>10:00</option>
<option>14:00</option>
<option>16:00</option>
<option>18:00</option>
</select>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-sm font-medium text-zinc-900 uppercase tracking-wide">3. Quem vai passear?</h3>
<div className="p-4 border border-zinc-200 rounded-xl bg-zinc-50 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-400 overflow-hidden">
<span className="iconify" data-icon="lucide:dog" data-width="20"></span>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Adicionar novo pet</p>
<p className="text-xs text-zinc-500">Preencha os dados do cão</p>
</div>
</div>
<button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium" type="button">Editar</button>
</div>
<div className="grid grid-cols-2 gap-4">
<input className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all" placeholder="Nome do Pet" type="text"/>
<input className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all" placeholder="Raça" type="text"/>
<div className="col-span-2">
<textarea className="w-full px-4 py-3 rounded-lg border border-zinc-200 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all resize-none" placeholder="Observações (comportamento, alergias, etc)" rows="2"></textarea>
</div>
</div>
</div>
<div className="pt-6 border-t border-zinc-100 flex justify-end">
<button className="bg-zinc-900 text-white px-8 py-3 rounded-full font-medium hover:bg-zinc-800 transition-all shadow-lg flex items-center gap-2" type="submit">
                        Ir para Pagamento
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</form>
</div>
</section>

<section className="hidden page-section pt-24 pb-24 flex-grow bg-zinc-50" id="checkout-page">
<div className="max-w-6xl mx-auto px-6">
<a className="inline-flex items-center gap-1 text-sm text-zinc-500 hover:text-zinc-900 mb-8 transition-colors" href="#" onclick="showPage('planos')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="16"></span> Voltar aos planos
            </a>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-7 space-y-8">
<div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
<h2 className="text-xl font-semibold text-zinc-900 mb-6">Pagamento</h2>
<div className="space-y-5">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 uppercase tracking-wide">Titular do Cartão</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all" placeholder="Nome impresso no cartão" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 uppercase tracking-wide">Número do Cartão</label>
<div className="relative">
<input className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all" placeholder="0000 0000 0000 0000" type="text"/>
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400">
<span className="iconify" data-icon="lucide:credit-card" data-width="16"></span>
</span>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 uppercase tracking-wide">Validade</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all" placeholder="MM/AA" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 uppercase tracking-wide">CVC</label>
<div className="relative">
<input className="w-full px-4 py-2.5 rounded-lg border border-zinc-200 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-500 outline-none transition-all" placeholder="123" type="text"/>
<span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-300">
<span className="iconify" data-icon="lucide:help-circle" data-width="16"></span>
</span>
</div>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between text-zinc-500 text-xs">
<div className="flex items-center gap-2">
<span className="iconify" data-icon="lucide:lock" data-width="14"></span>
                                Pagamento criptografado e seguro
                            </div>
<div className="flex gap-2 opacity-50">
<span className="iconify" data-icon="lucide:credit-card" data-width="20"></span>
</div>
</div>
</div>
<button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-200 flex items-center justify-center gap-2">
                        Assinar e Pagar R$55,00
                        <span className="iconify" data-icon="lucide:check" data-width="18"></span>
</button>
<p className="text-center text-xs text-zinc-400">Ao confirmar, você aceita nossos termos de uso.</p>
</div>

<div className="lg:col-span-5">
<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-sm sticky top-24">
<h3 className="font-semibold text-zinc-900 mb-6">Resumo do Pedido</h3>
<div className="flex gap-4 mb-6 pb-6 border-b border-zinc-100">
<div className="w-16 h-16 bg-indigo-50 rounded-lg flex items-center justify-center text-indigo-600 flex-shrink-0">
<span className="iconify" data-icon="lucide:crown" data-width="24"></span>
</div>
<div>
<h4 className="font-medium text-zinc-900">Plano Standard</h4>
<p className="text-sm text-zinc-500">Assinatura Mensal</p>
<span className="inline-block mt-2 text-xs font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">Cobrança Mensal</span>
</div>
</div>
<ul className="space-y-3 mb-6">
<li className="flex justify-between text-sm">
<span className="text-zinc-500">Subtotal</span>
<span className="text-zinc-900 font-medium">R$ 55,00</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-zinc-500">Taxa de serviço</span>
<span className="text-zinc-900 font-medium">R$ 0,00</span>
</li>
<li className="flex justify-between text-sm pt-3 border-t border-zinc-100">
<span className="text-zinc-900 font-semibold">Total</span>
<span className="text-xl text-zinc-900 font-bold tracking-tight">R$ 55,00<span className="text-xs text-zinc-400 font-normal ml-1">/mês</span></span>
</li>
</ul>
<div className="bg-zinc-50 p-4 rounded-lg border border-zinc-100">
<p className="text-xs text-zinc-500 leading-relaxed">
<span className="font-medium text-zinc-900 block mb-1">Garantia WoofWalk</span>
                                Se seu cão não amar o primeiro passeio, devolvemos seu dinheiro integralmente. Sem perguntas.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-zinc-100 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter text-zinc-900 flex items-center gap-2 mb-4" href="#" onclick="showPage('home')">
<span className="iconify text-indigo-600" data-icon="lucide:dog" data-width="20" style={{strokeWidth: '1.5'}}></span>
                        WOOFWALK
                    </a>
<p className="text-sm text-zinc-500">Cuidando do seu melhor amigo como se fosse nosso.</p>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Empresa</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Sobre</a></li>
<li><a className="hover:text-zinc-900" href="#">Carreiras</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Serviços</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Passeios</a></li>
<li><a className="hover:text-zinc-900" href="#">Hospedagem</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Privacidade</a></li>
<li><a className="hover:text-zinc-900" href="#">Termos</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2023 WoofWalk Inc.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="18"></span></a>
<a className="text-zinc-400 hover:text-zinc-900" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
