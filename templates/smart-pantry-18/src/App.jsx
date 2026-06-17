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



        // Auth Logic
        function toggleAuth(viewId) {
            document.querySelectorAll('.auth-view').forEach(el => el.classList.remove('active'));
            document.getElementById(viewId).classList.add('active');
        }

        function enterApp() {
            // Hide Auth
            document.getElementById('auth-container').classList.add('hidden');
            // Show App
            const app = document.getElementById('app-container');
            app.classList.remove('hidden');
            app.classList.add('flex'); // Restore flex layout
            
            // Default to home
            switchView('view-home');
        }

        function logout() {
            document.getElementById('app-container').classList.add('hidden');
            document.getElementById('app-container').classList.remove('flex');
            document.getElementById('auth-container').classList.remove('hidden');
            toggleAuth('view-login');
        }

        // App Logic
        function switchView(viewId) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
            });
            
            // Show target view
            const target = document.getElementById(viewId);
            if(target) target.classList.add('active');

            // Scroll to top
            document.getElementById('content-area').scrollTop = 0;

            // Update Nav State
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-emerald-600', 'text-slate-900');
                btn.classList.add('text-slate-400');
                
                if(btn.dataset.target === viewId) {
                    btn.classList.remove('text-slate-400');
                    btn.classList.add('text-emerald-600');
                }
                
                if(viewId === 'view-recipe-detail' && btn.dataset.target === 'view-recipes') {
                    btn.classList.remove('text-slate-400');
                    btn.classList.add('text-emerald-600');
                }
            });
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
      

<div className="w-full max-w-md bg-white h-full min-h-screen shadow-2xl relative overflow-hidden flex flex-col p-8" id="auth-container">

<div className="auth-view active flex-col justify-center h-full" id="view-login">
<div className="mb-10 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-xl mb-6 shadow-xl shadow-slate-200">
<span className="iconify" data-icon="lucide:link-2" data-width="24"></span>
</div>
<h1 className="text-2xl font-bold tracking-tight text-slate-900">Bem-vindo de volta</h1>
<p className="text-sm text-slate-500 mt-2">Gerencie sua casa com inteligência.</p>
</div>
<form className="space-y-4 w-full" onsubmit="event.preventDefault(); enterApp();">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1">Email</label>
<div className="relative">
<span className="iconify absolute left-4 top-3.5 text-slate-400" data-icon="lucide:mail" data-width="18"></span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:bg-white transition-all placeholder-slate-400" placeholder="seu@email.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1">Senha</label>
<div className="relative">
<span className="iconify absolute left-4 top-3.5 text-slate-400" data-icon="lucide:lock" data-width="18"></span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:bg-white transition-all placeholder-slate-400" placeholder="••••••••" type="password"/>
</div>
<div className="flex justify-end pt-1">
<a className="text-xs font-medium text-emerald-600 hover:text-emerald-700" href="#">Esqueceu a senha?</a>
</div>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-slate-200 hover:bg-slate-800 active:scale-95 transition-all mt-2" type="submit">
                    Entrar
                </button>
</form>
<div className="mt-8">
<div className="relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-slate-100"></div>
</div>
<div className="relative flex justify-center text-xs uppercase">
<span className="bg-white px-2 text-slate-400 font-medium">Ou continue com</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3 mt-6">
<button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
<span className="iconify" data-icon="logos:google-icon" data-width="18"></span>
<span className="text-sm font-medium text-slate-600">Google</span>
</button>
<button className="flex items-center justify-center gap-2 px-4 py-2.5 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
<span className="iconify" data-icon="logos:apple" data-width="18"></span>
<span className="text-sm font-medium text-slate-600">Apple</span>
</button>
</div>
</div>
<p className="text-center text-xs text-slate-500 mt-auto pt-8">
                Não tem uma conta? 
                <button className="text-slate-900 font-semibold hover:underline" onclick="toggleAuth('view-register')">Criar conta</button>
</p>
</div>

<div className="auth-view flex-col justify-center h-full" id="view-register">
<div className="mb-8">
<button className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-50 mb-6 transition-colors" onclick="toggleAuth('view-login')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<h1 className="text-2xl font-bold tracking-tight text-slate-900">Criar conta</h1>
<p className="text-sm text-slate-500 mt-2">Comece a organizar sua dispensa hoje.</p>
</div>
<form className="space-y-4 w-full" onsubmit="event.preventDefault(); enterApp();">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1">Nome Completo</label>
<div className="relative">
<span className="iconify absolute left-4 top-3.5 text-slate-400" data-icon="lucide:user" data-width="18"></span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:bg-white transition-all placeholder-slate-400" placeholder="Alex Silva" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1">Email</label>
<div className="relative">
<span className="iconify absolute left-4 top-3.5 text-slate-400" data-icon="lucide:mail" data-width="18"></span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:bg-white transition-all placeholder-slate-400" placeholder="seu@email.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-700 ml-1">Senha</label>
<div className="relative">
<span className="iconify absolute left-4 top-3.5 text-slate-400" data-icon="lucide:lock" data-width="18"></span>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-11 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:bg-white transition-all placeholder-slate-400" placeholder="Criar uma senha forte" type="password"/>
</div>
</div>
<div className="pt-2">
<button className="w-full bg-emerald-600 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-emerald-200 hover:bg-emerald-700 active:scale-95 transition-all" type="submit">
                        Cadastrar
                    </button>
</div>
</form>
<p className="text-center text-xs text-slate-400 mt-6 leading-relaxed px-4">
                Ao se cadastrar, você concorda com nossos <a className="underline" href="#">Termos</a> e <a className="underline" href="#">Política de Privacidade</a>.
            </p>
</div>
</div>

<main className="hidden w-full max-w-md bg-slate-50 h-full min-h-screen shadow-2xl relative overflow-hidden flex flex-col" id="app-container">

<header className="pt-10 pb-4 px-6 flex justify-between items-center bg-white sticky top-0 z-20 border-b border-slate-100/80 backdrop-blur-md bg-opacity-90">
<div className="flex items-center gap-2.5">
<div className="bg-slate-900 text-white p-1.5 rounded-lg">
<span className="iconify" data-icon="lucide:link-2" data-width="16"></span>
</div>
<h1 className="text-base font-bold tracking-tight text-slate-900">Linka Home</h1>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-500" onclick="logout()" title="Sair">
<span className="iconify" data-icon="lucide:log-out" data-width="18"></span>
</button>
<div className="w-8 h-8 bg-slate-200 rounded-full border border-white shadow-sm overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-90" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto pb-28 no-scrollbar relative" id="content-area">

<section className="view-section active px-6 pt-6" id="view-home">

<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Olá, Alex</h2>
<p className="text-sm text-slate-500 mt-1">Sua dispensa está <span className="text-emerald-600 font-medium">85% otimizada</span>.</p>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-32">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:clock" data-width="16"></span>
</div>
<div>
<span className="text-2xl font-bold text-slate-900 tracking-tight">3</span>
<p className="text-xs text-slate-500 font-medium mt-1">Itens vencendo</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-32">
<div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<span className="iconify" data-icon="lucide:leaf" data-width="16"></span>
</div>
<div>
<span className="text-2xl font-bold text-slate-900 tracking-tight">Eco</span>
<p className="text-xs text-slate-500 font-medium mt-1">Nível Warrior</p>
</div>
</div>
</div>

<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Sugestões Rápidas</h3>
<div className="space-y-4">
<div className="group bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex items-center gap-4 hover:border-emerald-200 transition-all cursor-pointer" onclick="switchView('view-recipes')">
<div className="w-16 h-16 bg-slate-100 rounded-lg overflow-hidden shrink-0">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?auto=format&amp;fit=crop&amp;q=80&amp;w=150"/>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-slate-900">Salvar Vegetais</h4>
<p className="text-xs text-slate-500 mt-1">Use espinafre e tomate antes que vençam.</p>
</div>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</div>
<div className="group bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex items-center gap-4 hover:border-emerald-200 transition-all cursor-pointer" onclick="switchView('view-list')">
<div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500 shrink-0">
<span className="iconify" data-icon="lucide:shopping-basket" data-width="24"></span>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium text-slate-900">Lista de Compras</h4>
<p className="text-xs text-slate-500 mt-1">4 itens essenciais faltando.</p>
</div>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</div>
</div>
</div>
</section>

<section className="view-section px-6 pt-6" id="view-pantry">
<div className="flex justify-between items-end mb-6">
<div>
<h2 className="text-xl font-bold tracking-tight text-slate-900">Minha Dispensa</h2>
<p className="text-xs text-slate-500 mt-1">Gerencie seus estoques</p>
</div>
<button className="bg-slate-900 text-white p-2 rounded-lg hover:bg-slate-800 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="18"></span>
</button>
</div>

<div className="relative mb-6">
<span className="iconify absolute left-3 top-3 text-slate-400" data-icon="lucide:search" data-width="18"></span>
<input className="w-full bg-white border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10 placeholder-slate-400" placeholder="Buscar item..." type="text"/>
</div>

<div className="flex gap-2 overflow-x-auto no-scrollbar mb-6 pb-2">
<button className="px-4 py-1.5 bg-slate-900 text-white rounded-full text-xs font-medium whitespace-nowrap">Tudo</button>
<button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium whitespace-nowrap">Geladeira</button>
<button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium whitespace-nowrap">Secos</button>
<button className="px-4 py-1.5 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium whitespace-nowrap">Congelador</button>
</div>

<div className="space-y-3">

<div className="bg-white p-3 rounded-xl border border-rose-100 shadow-sm flex items-center gap-3">
<div className="w-12 h-12 bg-rose-50 rounded-lg flex items-center justify-center text-xl shrink-0">🥛</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-sm font-semibold text-slate-900">Leite Integral</h4>
<span className="w-2 h-2 bg-rose-500 rounded-full"></span>
</div>
<p className="text-xs text-rose-600 font-medium mt-0.5">Vence Hoje</p>
<p className="text-[10px] text-slate-400 mt-1">Geladeira • 1 Unid.</p>
</div>
</div>

<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3">
<div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center text-xl shrink-0">🥬</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-sm font-semibold text-slate-900">Espinafre</h4>
<span className="w-2 h-2 bg-amber-400 rounded-full"></span>
</div>
<p className="text-xs text-amber-600 font-medium mt-0.5">2 dias restantes</p>
<p className="text-[10px] text-slate-400 mt-1">Geladeira • 300g</p>
</div>
</div>

<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3 opacity-90">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-xl shrink-0">🍝</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-sm font-semibold text-slate-900">Macarrão</h4>
<span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
</div>
<p className="text-xs text-slate-500 mt-0.5">Validade longa</p>
<p className="text-[10px] text-slate-400 mt-1">Armário • 2 Pacotes</p>
</div>
</div>

<div className="bg-white p-3 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3 opacity-90">
<div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-xl shrink-0">🥫</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<h4 className="text-sm font-semibold text-slate-900">Molho de Tomate</h4>
<span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
</div>
<p className="text-xs text-slate-500 mt-0.5">Validade longa</p>
<p className="text-[10px] text-slate-400 mt-1">Armário • 3 latas</p>
</div>
</div>
</div>
</section>

<section className="view-section h-full relative bg-black" id="view-scan">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;q=80')] bg-cover bg-center opacity-60"></div>
<div className="absolute inset-0 flex flex-col justify-between p-6 z-10">
<div className="flex justify-between text-white mt-4">
<button className="p-2 bg-black/20 backdrop-blur-md rounded-full" onclick="switchView('view-home')">
<span className="iconify" data-icon="lucide:x" data-width="24"></span>
</button>
<button className="p-2 bg-black/20 backdrop-blur-md rounded-full">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</button>
</div>

<div className="flex-1 flex items-center justify-center relative">
<div className="w-64 h-64 border-2 border-white/50 rounded-3xl relative">

<div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
<div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-white rounded-tl-lg -mt-1 -ml-1"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-white rounded-tr-lg -mt-1 -mr-1"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-white rounded-bl-lg -mb-1 -ml-1"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-white rounded-br-lg -mb-1 -mr-1"></div>
</div>
<div className="absolute bottom-20 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-medium">
                            Aponte para o código de barras
                        </div>
</div>
<div className="flex justify-center mb-8">
<button className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-white/20 backdrop-blur-sm active:scale-95 transition-transform">
<div className="w-12 h-12 bg-white rounded-full"></div>
</button>
</div>
</div>
<style>
                    @keyframes scan {
                        0% { top: 0%; opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { top: 100%; opacity: 0; }
                    }
                </style>
</section>

<section className="view-section px-6 pt-6" id="view-recipes">
<h2 className="text-xl font-bold tracking-tight text-slate-900 mb-6">Receitas Inteligentes</h2>
<div className="space-y-6">

<div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 cursor-pointer group" onclick="switchView('view-recipe-detail')">
<div className="relative h-48 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-semibold text-emerald-700 shadow-sm">
                                Zero Desperdício
                            </div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-slate-900 leading-tight">Creme de Espinafre</h3>
<div className="flex items-center gap-1 text-xs font-medium text-slate-500 bg-slate-50 px-2 py-1 rounded-md">
<span className="iconify" data-icon="lucide:clock" data-width="14"></span> 15m
                                </div>
</div>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Uma receita cremosa perfeita para usar aquele espinafre que está na geladeira.</p>
<div className="flex gap-2 text-xs">
<span className="px-2 py-1 bg-green-50 text-green-700 rounded-md border border-green-100">Espinafre</span>
<span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-md border border-orange-100">Leite</span>
</div>
</div>
</div>

<div className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
<div className="w-20 h-20 bg-slate-200 rounded-xl overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<h4 className="text-sm font-semibold text-slate-900">Molho Branco</h4>
<p className="text-xs text-slate-500 mt-1 mb-2">Use: Leite, Manteiga</p>
<div className="flex items-center gap-1 text-emerald-600 text-xs font-medium">
                                Ver receita <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</div>
</div>
</div>
</div>
</section>

<section className="view-section bg-white min-h-full" id="view-recipe-detail">

<div className="relative h-64 w-full">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&amp;fit=crop&amp;q=80"/>
<button className="absolute top-6 left-6 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-900 shadow-lg hover:bg-white transition-colors" onclick="switchView('view-recipes')">
<span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span>
</button>
<div className="absolute -bottom-6 left-0 right-0 h-12 bg-white rounded-t-3xl"></div>
</div>

<div className="px-6 relative -mt-2">
<div className="flex justify-between items-start mb-4">
<h2 className="text-2xl font-bold tracking-tight text-slate-900 w-2/3">Creme de Espinafre Clássico</h2>
<button className="p-2 rounded-full bg-rose-50 text-rose-500">
<span className="iconify" data-icon="lucide:heart" data-width="20"></span>
</button>
</div>
<div className="flex gap-6 mb-8 border-b border-slate-100 pb-6">
<div className="flex items-center gap-2">
<div className="p-1.5 bg-slate-100 rounded-full text-slate-600">
<span className="iconify" data-icon="lucide:clock" data-width="16"></span>
</div>
<span className="text-xs font-medium text-slate-600">15 min</span>
</div>
<div className="flex items-center gap-2">
<div className="p-1.5 bg-slate-100 rounded-full text-slate-600">
<span className="iconify" data-icon="lucide:flame" data-width="16"></span>
</div>
<span className="text-xs font-medium text-slate-600">120 Kcal</span>
</div>
<div className="flex items-center gap-2">
<div className="p-1.5 bg-slate-100 rounded-full text-slate-600">
<span className="iconify" data-icon="lucide:users" data-width="16"></span>
</div>
<span className="text-xs font-medium text-slate-600">2 porções</span>
</div>
</div>

<h3 className="text-sm font-bold text-slate-900 mb-4">Ingredientes</h3>
<ul className="space-y-3 mb-8">
<li className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
<span className="text-sm text-slate-700">Espinafre</span>
<span className="text-xs font-medium text-slate-500">2 xícaras</span>
</li>
<li className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
<span className="text-sm text-slate-700">Leite Integral</span>
<span className="text-xs font-medium text-slate-500">200ml</span>
</li>
<li className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
<span className="text-sm text-slate-700">Cebola</span>
<span className="text-xs font-medium text-slate-500">1/2 unid</span>
</li>
</ul>

<h3 className="text-sm font-bold text-slate-900 mb-4">Preparo</h3>
<div className="space-y-6 pb-8">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">1</div>
<div className="w-px h-full bg-slate-200 my-2"></div>
</div>
<p className="text-sm text-slate-600 leading-relaxed pb-4">Refogue a cebola picada na manteiga até dourar levemente em fogo médio.</p>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">2</div>
<div className="w-px h-full bg-slate-200 my-2"></div>
</div>
<p className="text-sm text-slate-600 leading-relaxed pb-4">Adicione o espinafre lavado e cozinhe até murchar. Acrescente o leite.</p>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold">3</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed">Bata tudo no mixer até ficar cremoso. Sirva quente.</p>
</div>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-3.5 rounded-xl shadow-lg shadow-slate-200 active:scale-95 transition-transform mb-8">
                        Iniciar Modo Cozinha
                    </button>
</div>
</section>

<section className="view-section px-6 pt-6" id="view-list">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-bold tracking-tight text-slate-900">Lista de Compras</h2>
<button className="text-xs font-medium text-emerald-600 hover:text-emerald-700">Limpar concluídos</button>
</div>

<div className="flex gap-2 mb-6">
<input className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" placeholder="Adicionar item..." type="text"/>
<button className="bg-slate-900 text-white px-4 rounded-xl hover:bg-slate-800 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-width="20"></span>
</button>
</div>

<div className="space-y-2">

<label className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm cursor-pointer select-none group">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-md checked:bg-emerald-500 checked:border-emerald-500 transition-colors" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-sm font-medium text-slate-700 peer-checked:text-slate-400 peer-checked:line-through transition-all">Azeite de Oliva</span>
</label>

<label className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm cursor-pointer select-none group">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-md checked:bg-emerald-500 checked:border-emerald-500 transition-colors" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-sm font-medium text-slate-700 peer-checked:text-slate-400 peer-checked:line-through transition-all">Ovos (Dúzia)</span>
</label>

<label className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-xl shadow-sm cursor-pointer select-none group opacity-60">
<div className="relative flex items-center justify-center w-5 h-5">
<input checked="" className="peer appearance-none w-5 h-5 border-2 border-slate-300 rounded-md checked:bg-emerald-500 checked:border-emerald-500 transition-colors" type="checkbox"/>
<span className="iconify absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" data-icon="lucide:check" data-width="14"></span>
</div>
<span className="text-sm font-medium text-slate-700 peer-checked:text-slate-400 peer-checked:line-through transition-all">Detergente</span>
</label>
</div>
</section>
</div>

<nav className="absolute bottom-0 w-full bg-white border-t border-slate-100 pb-8 pt-3 px-6 flex justify-between items-end z-30 shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
<button className="nav-btn active flex flex-col items-center gap-1.5 w-12 text-slate-400 transition-colors" data-target="view-home" onclick="switchView('view-home')">
<span className="iconify" data-icon="lucide:home" data-width="22"></span>
<span className="text-[10px] font-medium">Início</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 w-12 text-slate-400 transition-colors" data-target="view-pantry" onclick="switchView('view-pantry')">
<span className="iconify" data-icon="lucide:box" data-width="22"></span>
<span className="text-[10px] font-medium">Dispensa</span>
</button>

<div className="relative -top-6">
<button className="bg-slate-900 text-white w-14 h-14 rounded-full shadow-lg shadow-slate-400/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center border-4 border-slate-50" onclick="switchView('view-scan')">
<span className="iconify" data-icon="lucide:scan-barcode" data-width="24"></span>
</button>
</div>
<button className="nav-btn flex flex-col items-center gap-1.5 w-12 text-slate-400 transition-colors" data-target="view-recipes" onclick="switchView('view-recipes')">
<span className="iconify" data-icon="lucide:chef-hat" data-width="22"></span>
<span className="text-[10px] font-medium">Receitas</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1.5 w-12 text-slate-400 transition-colors" data-target="view-list" onclick="switchView('view-list')">
<span className="iconify" data-icon="lucide:list-todo" data-width="22"></span>
<span className="text-[10px] font-medium">Lista</span>
</button>
</nav>
</main>



    </>
  );
}
