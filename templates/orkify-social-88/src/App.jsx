import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();
        
        // Page navigation
        function showPage(pageName) {
            const pages = ['homePage', 'profilePage', 'messagesPage', 'friendsPage', 'communitiesPage', 'photosPage', 'videosPage', 'notificationsPage'];
            pages.forEach(page => {
                document.getElementById(page).classList.add('hidden');
            });
            document.getElementById(pageName + 'Page').classList.remove('hidden');
            window.scrollTo(0, 0);
            lucide.createIcons();
        }

        // Mobile menu toggle
        function toggleMobileMenu() {
            document.getElementById('mobileMenu').classList.toggle('hidden');
        }

        // Login handler
        function handleLogin(event) {
            event.preventDefault();
            document.getElementById('loginPage').classList.add('hidden');
            document.getElementById('mainApp').classList.remove('hidden');
            lucide.createIcons();
        }

        // Logout handler
        function logout() {
            document.getElementById('mainApp').classList.add('hidden');
            document.getElementById('loginPage').classList.remove('hidden');
        }

        // Post submission
        function handlePostSubmit(event) {
            event.preventDefault();
            const textarea = document.getElementById('postText');
            if (textarea.value.trim()) {
                alert('Post publicado com sucesso!');
                textarea.value = '';
            }
        }

        // Show modal (placeholder)
        function showModal(modalId) {
            alert('Funcionalidade de ' + modalId + ' será implementada em breve!');
        }

        // Show signup (placeholder)
        function showSignup() {
            alert('Página de cadastro será implementada em breve!');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex items-center justify-center p-4" id="loginPage">
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft p-8 w-full max-w-md border border-white/50">
<div className="text-center mb-8">
<div className="inline-block gradient-orkut rounded-2xl px-6 py-3 mb-4">
<h1 className="text-5xl font-bold text-white tracking-tight">ORKIFY</h1>
</div>
<p className="text-sm text-gray-600 font-medium">Conecte-se com seus amigos</p>
</div>
<form className="space-y-5" id="loginForm" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-semibold text-gray-700 mb-2">E-mail</label>
<input className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#5B88D6] focus:ring-2 focus:ring-[#5B88D6]/20 transition-all" id="loginEmail" placeholder="seu@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-semibold text-gray-700 mb-2">Senha</label>
<input className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#5B88D6] focus:ring-2 focus:ring-[#5B88D6]/20 transition-all" id="loginPassword" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full gradient-orkut text-white font-semibold py-3 px-4 rounded-xl shadow-soft hover:shadow-md transition-all text-sm" type="submit">
                    Entrar
                </button>
</form>
<div className="mt-6 text-center">
<a className="text-sm text-[#5B88D6] hover:text-[#4A77C5] font-medium transition-colors" href="#" onclick="showSignup(); return false;">Não tem uma conta? <span className="font-semibold">Cadastre-se</span></a>
</div>
</div>
</div>

<div className="hidden" id="mainApp">

<header className="gradient-orkut shadow-soft sticky top-0 z-50 backdrop-blur-lg bg-opacity-95">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-center justify-between h-16">
<div className="flex items-center space-x-8">
<h1 className="text-2xl font-bold text-white tracking-tight cursor-pointer" onclick="showPage('home')">ORKIFY</h1>
<nav className="hidden md:flex space-x-1">
<a className="px-4 py-2 text-white text-sm font-medium hover:bg-white/20 rounded-lg transition-colors" href="#" onclick="showPage('home'); return false;">Início</a>
<a className="px-4 py-2 text-white text-sm font-medium hover:bg-white/20 rounded-lg transition-colors" href="#" onclick="showPage('profile'); return false;">Perfil</a>
<a className="px-4 py-2 text-white text-sm font-medium hover:bg-white/20 rounded-lg transition-colors" href="#" onclick="showPage('messages'); return false;">Mensagens</a>
<a className="px-4 py-2 text-white text-sm font-medium hover:bg-white/20 rounded-lg transition-colors" href="#" onclick="showPage('friends'); return false;">Amigos</a>
<a className="px-4 py-2 text-white text-sm font-medium hover:bg-white/20 rounded-lg transition-colors" href="#" onclick="showPage('communities'); return false;">Comunidades</a>
<a className="px-4 py-2 text-white text-sm font-medium hover:bg-white/20 rounded-lg transition-colors" href="#" onclick="showPage('photos'); return false;">Fotos</a>
</nav>
</div>
<div className="flex items-center space-x-3">
<div className="relative hidden md:block">
<input className="w-56 px-4 py-2 text-sm border border-white/30 rounded-lg bg-white/10 text-white placeholder-white/70 focus:outline-none focus:bg-white focus:text-gray-900 focus:placeholder-gray-500 transition-all backdrop-blur-sm" id="searchInput" placeholder="Buscar..." type="text"/>
</div>
<button className="relative text-white hover:bg-white/20 p-2 rounded-lg transition-colors" onclick="showPage('notifications'); return false;">
<i className="w-5 h-5" data-lucide="bell"></i>
<span className="absolute top-1 right-1 w-2 h-2 bg-[#DE5A9B] rounded-full"></span>
</button>
<button className="text-white text-sm font-medium hover:bg-white/20 px-4 py-2 rounded-lg transition-colors" onclick="logout(); return false;">Sair</button>
<button className="md:hidden text-white p-2" onclick="toggleMobileMenu(); return false;">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-[#4A77C5] border-t border-white/20" id="mobileMenu">
<nav className="flex flex-col">
<a className="px-4 py-3 text-white text-sm font-medium hover:bg-white/20 border-b border-white/10" href="#" onclick="showPage('home'); toggleMobileMenu(); return false;">Início</a>
<a className="px-4 py-3 text-white text-sm font-medium hover:bg-white/20 border-b border-white/10" href="#" onclick="showPage('profile'); toggleMobileMenu(); return false;">Perfil</a>
<a className="px-4 py-3 text-white text-sm font-medium hover:bg-white/20 border-b border-white/10" href="#" onclick="showPage('messages'); toggleMobileMenu(); return false;">Mensagens</a>
<a className="px-4 py-3 text-white text-sm font-medium hover:bg-white/20 border-b border-white/10" href="#" onclick="showPage('friends'); toggleMobileMenu(); return false;">Amigos</a>
<a className="px-4 py-3 text-white text-sm font-medium hover:bg-white/20 border-b border-white/10" href="#" onclick="showPage('communities'); toggleMobileMenu(); return false;">Comunidades</a>
<a className="px-4 py-3 text-white text-sm font-medium hover:bg-white/20" href="#" onclick="showPage('photos'); toggleMobileMenu(); return false;">Fotos</a>
</nav>
</div>
</header>
<div className="max-w-7xl mx-auto p-4">
<div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-6">

<aside className="space-y-6" id="leftSidebar">
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6 hover-lift">
<div className="flex justify-center mb-4">
<div className="relative">
<img alt="Profile" className="w-32 h-32 rounded-2xl border-4 border-white shadow-md object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&amp;h=150&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
</div>
</div>
<h2 className="text-base font-bold text-center text-gray-800 mb-1">João Silva</h2>
<p className="text-xs text-gray-600 text-center italic mb-4">"Vivendo a vida! 🎉"</p>
<div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-100">
<div className="text-center">
<div className="text-lg font-bold text-[#5B88D6]">324</div>
<div className="text-xs text-gray-600">Amigos</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-[#DE5A9B]">47</div>
<div className="text-xs text-gray-600">Comunid.</div>
</div>
<div className="text-center">
<div className="text-lg font-bold text-[#FFA500]">203</div>
<div className="text-xs text-gray-600">Fotos</div>
</div>
</div>
<nav className="space-y-1">
<a className="flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-[#F0F6FC] rounded-lg transition-colors font-medium group" href="#" onclick="showPage('profile'); return false;">
<i className="w-4 h-4 text-gray-400 group-hover:text-[#5B88D6]" data-lucide="user"></i>
<span>Meu Perfil</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-[#F0F6FC] rounded-lg transition-colors font-medium group" href="#" onclick="showPage('messages'); return false;">
<i className="w-4 h-4 text-gray-400 group-hover:text-[#5B88D6]" data-lucide="mail"></i>
<span>Mensagens</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-[#F0F6FC] rounded-lg transition-colors font-medium group" href="#" onclick="showPage('photos'); return false;">
<i className="w-4 h-4 text-gray-400 group-hover:text-[#5B88D6]" data-lucide="image"></i>
<span>Fotos</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-[#F0F6FC] rounded-lg transition-colors font-medium group" href="#" onclick="showPage('videos'); return false;">
<i className="w-4 h-4 text-gray-400 group-hover:text-[#5B88D6]" data-lucide="video"></i>
<span>Vídeos</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-[#F0F6FC] rounded-lg transition-colors font-medium group" href="#" onclick="showPage('friends'); return false;">
<i className="w-4 h-4 text-gray-400 group-hover:text-[#5B88D6]" data-lucide="users"></i>
<span>Amigos</span>
</a>
<a className="flex items-center space-x-3 px-3 py-2.5 text-sm text-gray-700 hover:bg-[#F0F6FC] rounded-lg transition-colors font-medium group" href="#" onclick="showPage('communities'); return false;">
<i className="w-4 h-4 text-gray-400 group-hover:text-[#5B88D6]" data-lucide="users-2"></i>
<span>Comunidades</span>
</a>
</nav>
</div>
</aside>

<main id="centerContent">

<div className="space-y-6" id="homePage">

<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<div className="flex items-center space-x-3 mb-4">
<img alt="User" className="w-12 h-12 rounded-xl border-2 border-white shadow object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&amp;h=50&amp;fit=crop"/>
<h2 className="text-base font-semibold text-gray-800">O que você está pensando?</h2>
</div>
<form className="space-y-4" onsubmit="handlePostSubmit(event)">
<textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm resize-none focus:outline-none focus:border-[#5B88D6] focus:ring-2 focus:ring-[#5B88D6]/20 transition-all" id="postText" maxlength="500" placeholder="Compartilhe algo com seus amigos..." rows="3"></textarea>
<div className="flex justify-between items-center">
<div className="flex space-x-2">
<button className="p-2 text-gray-400 hover:text-[#5B88D6] hover:bg-[#F0F6FC] rounded-lg transition-colors" type="button">
<i className="w-5 h-5" data-lucide="image"></i>
</button>
<button className="p-2 text-gray-400 hover:text-[#5B88D6] hover:bg-[#F0F6FC] rounded-lg transition-colors" type="button">
<i className="w-5 h-5" data-lucide="video"></i>
</button>
<button className="p-2 text-gray-400 hover:text-[#5B88D6] hover:bg-[#F0F6FC] rounded-lg transition-colors" type="button">
<i className="w-5 h-5" data-lucide="smile"></i>
</button>
</div>
<button className="gradient-orkut text-white font-semibold py-2 px-6 rounded-xl shadow-soft hover:shadow-md transition-all text-sm" type="submit">
                                        Publicar
                                    </button>
</div>
</form>
</div>

<div className="space-y-6">

<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6 hover-lift">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<img alt="User" className="w-12 h-12 rounded-xl border-2 border-white shadow object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&amp;h=50&amp;fit=crop"/>
<div>
<a className="text-sm font-semibold text-gray-800 hover:text-[#5B88D6] transition-colors" href="#">Maria Santos</a>
<p className="text-xs text-gray-500">há 2 horas</p>
</div>
</div>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-sm text-gray-700 mb-4">Que dia lindo! Adorando esse domingo de sol ☀️🌻</p>
<img alt="Post image" className="w-full rounded-xl mb-4" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&amp;h=400&amp;fit=crop"/>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center space-x-6">
<button className="flex items-center space-x-2 text-gray-600 hover:text-[#DE5A9B] transition-colors group">
<i className="w-5 h-5 group-hover:fill-current" data-lucide="heart"></i>
<span className="text-sm font-medium">45</span>
</button>
<button className="flex items-center space-x-2 text-gray-600 hover:text-[#5B88D6] transition-colors">
<i className="w-5 h-5" data-lucide="message-circle"></i>
<span className="text-sm font-medium">12</span>
</button>
<button className="flex items-center space-x-2 text-gray-600 hover:text-[#5B88D6] transition-colors">
<i className="w-5 h-5" data-lucide="share-2"></i>
<span className="text-sm font-medium">3</span>
</button>
</div>
</div>
</div>

<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6 hover-lift">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<img alt="User" className="w-12 h-12 rounded-xl border-2 border-white shadow object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&amp;h=50&amp;fit=crop"/>
<div>
<a className="text-sm font-semibold text-gray-800 hover:text-[#5B88D6] transition-colors" href="#">Pedro Costa</a>
<p className="text-xs text-gray-500">há 5 horas</p>
</div>
</div>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-sm text-gray-700 mb-4">Quem vai no show hoje? 🎸🎵</p>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center space-x-6">
<button className="flex items-center space-x-2 text-gray-600 hover:text-[#DE5A9B] transition-colors group">
<i className="w-5 h-5 group-hover:fill-current" data-lucide="heart"></i>
<span className="text-sm font-medium">23</span>
</button>
<button className="flex items-center space-x-2 text-gray-600 hover:text-[#5B88D6] transition-colors">
<i className="w-5 h-5" data-lucide="message-circle"></i>
<span className="text-sm font-medium">8</span>
</button>
<button className="flex items-center space-x-2 text-gray-600 hover:text-[#5B88D6] transition-colors">
<i className="w-5 h-5" data-lucide="share-2"></i>
<span className="text-sm font-medium">2</span>
</button>
</div>
</div>
</div>

<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6 hover-lift">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center space-x-3">
<img alt="User" className="w-12 h-12 rounded-xl border-2 border-white shadow object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&amp;h=50&amp;fit=crop"/>
<div>
<a className="text-sm font-semibold text-gray-800 hover:text-[#5B88D6] transition-colors" href="#">Ana Paula</a>
<p className="text-xs text-gray-500">ontem</p>
</div>
</div>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="more-horizontal"></i>
</button>
</div>
<p className="text-sm text-gray-700 mb-4">Nova receita de bolo que fiz hoje! Ficou uma delícia 🍰😋</p>
<img alt="Post image" className="w-full rounded-xl mb-4" src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&amp;h=400&amp;fit=crop"/>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div className="flex items-center space-x-6">
<button className="flex items-center space-x-2 text-gray-600 hover:text-[#DE5A9B] transition-colors group">
<i className="w-5 h-5 group-hover:fill-current" data-lucide="heart"></i>
<span className="text-sm font-medium">78</span>
</button>
<button className="flex items-center space-x-2 text-gray-600 hover:text-[#5B88D6] transition-colors">
<i className="w-5 h-5" data-lucide="message-circle"></i>
<span className="text-sm font-medium">34</span>
</button>
<button className="flex items-center space-x-2 text-gray-600 hover:text-[#5B88D6] transition-colors">
<i className="w-5 h-5" data-lucide="share-2"></i>
<span className="text-sm font-medium">7</span>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6" id="profilePage">

<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 overflow-hidden">
<div className="h-48 gradient-orkut relative">
<button className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors">
<i className="w-4 h-4 inline mr-2" data-lucide="camera"></i>Alterar Capa
                                </button>
</div>
<div className="px-6 pb-6">
<div className="flex flex-col md:flex-row items-start md:items-end space-y-4 md:space-y-0 md:space-x-6 -mt-16">
<div className="relative">
<img alt="Profile" className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&amp;h=150&amp;fit=crop"/>
<button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-lg shadow-soft flex items-center justify-center text-[#5B88D6] hover:bg-[#F0F6FC] transition-colors">
<i className="w-5 h-5" data-lucide="camera"></i>
</button>
</div>
<div className="flex-1">
<h2 className="text-2xl font-bold text-gray-800 mb-1">João Silva</h2>
<p className="text-sm text-gray-600 mb-3">São Paulo, SP • Programador</p>
<div className="flex flex-wrap gap-2">
<button className="gradient-orkut text-white font-medium py-2 px-4 rounded-lg shadow-soft hover:shadow-md transition-all text-sm" onclick="showModal('editProfileModal')">
<i className="w-4 h-4 inline mr-2" data-lucide="edit"></i>Editar Perfil
                                            </button>
<button className="bg-white text-gray-700 font-medium py-2 px-4 rounded-lg shadow-soft hover:shadow-md transition-all text-sm border border-gray-200">
<i className="w-4 h-4 inline mr-2" data-lucide="share-2"></i>Compartilhar
                                            </button>
</div>
</div>
</div>

<div className="grid grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
<div className="text-center">
<div className="text-2xl font-bold text-[#5B88D6]">324</div>
<div className="text-xs text-gray-600 font-medium">Amigos</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-[#DE5A9B]">47</div>
<div className="text-xs text-gray-600 font-medium">Comunidades</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-[#FFA500]">203</div>
<div className="text-xs text-gray-600 font-medium">Fotos</div>
</div>
<div className="text-center">
<div className="text-2xl font-bold text-[#28A745]">1.2k</div>
<div className="text-xs text-gray-600 font-medium">Visitas</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<h3 className="text-lg font-bold text-gray-800 mb-4">Sobre</h3>
<p className="text-sm text-gray-700 leading-relaxed mb-4">
                                        Apaixonado por tecnologia, música e viagens. Adoro conhecer pessoas novas e fazer amizades. Sempre de bom humor e pronto para novas aventuras! 🚀
                                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-[#F0F6FC] rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-[#5B88D6]" data-lucide="briefcase"></i>
</div>
<div>
<div className="text-xs text-gray-500">Profissão</div>
<div className="text-sm font-medium text-gray-800">Programador</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-[#FFF4F0] rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-[#DE5A9B]" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-xs text-gray-500">Localização</div>
<div className="text-sm font-medium text-gray-800">São Paulo, SP</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-[#FFF9F0] rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-[#FFA500]" data-lucide="calendar"></i>
</div>
<div>
<div className="text-xs text-gray-500">Aniversário</div>
<div className="text-sm font-medium text-gray-800">15 de março</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 bg-[#F0FFF4] rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-[#28A745]" data-lucide="heart"></i>
</div>
<div>
<div className="text-xs text-gray-500">Relacionamento</div>
<div className="text-sm font-medium text-gray-800">Solteiro</div>
</div>
</div>
</div>
</div>

<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-bold text-gray-800">Fotos Recentes</h3>
<a className="text-sm text-[#5B88D6] hover:text-[#4A77C5] font-medium" href="#" onclick="showPage('photos'); return false;">Ver todas</a>
</div>
<div className="grid grid-cols-3 gap-2">
<img alt="Photo" className="w-full aspect-square rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&amp;h=200&amp;fit=crop"/>
<img alt="Photo" className="w-full aspect-square rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&amp;h=200&amp;fit=crop"/>
<img alt="Photo" className="w-full aspect-square rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&amp;h=200&amp;fit=crop"/>
<img alt="Photo" className="w-full aspect-square rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=200&amp;h=200&amp;fit=crop"/>
<img alt="Photo" className="w-full aspect-square rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&amp;h=200&amp;fit=crop"/>
<img alt="Photo" className="w-full aspect-square rounded-xl object-cover cursor-pointer hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=200&amp;h=200&amp;fit=crop"/>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-bold text-gray-800">Amigos</h3>
<a className="text-sm text-[#5B88D6] hover:text-[#4A77C5] font-medium" href="#" onclick="showPage('friends'); return false;">Ver todos</a>
</div>
<div className="grid grid-cols-3 gap-2">
<a className="text-center group" href="#">
<img alt="Friend" className="w-full aspect-square rounded-xl border-2 border-white shadow object-cover group-hover:border-[#5B88D6] transition-all mb-1" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&amp;h=60&amp;fit=crop"/>
<span className="text-xs text-gray-700 block truncate">Maria</span>
</a>
<a className="text-center group" href="#">
<img alt="Friend" className="w-full aspect-square rounded-xl border-2 border-white shadow object-cover group-hover:border-[#5B88D6] transition-all mb-1" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=60&amp;h=60&amp;fit=crop"/>
<span className="text-xs text-gray-700 block truncate">Pedro</span>
</a>
<a className="text-center group" href="#">
<img alt="Friend" className="w-full aspect-square rounded-xl border-2 border-white shadow object-cover group-hover:border-[#5B88D6] transition-all mb-1" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&amp;h=60&amp;fit=crop"/>
<span className="text-xs text-gray-700 block truncate">Ana</span>
</a>
<a className="text-center group" href="#">
<img alt="Friend" className="w-full aspect-square rounded-xl border-2 border-white shadow object-cover group-hover:border-[#5B88D6] transition-all mb-1" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&amp;h=60&amp;fit=crop"/>
<span className="text-xs text-gray-700 block truncate">Lucas</span>
</a>
<a className="text-center group" href="#">
<img alt="Friend" className="w-full aspect-square rounded-xl border-2 border-white shadow object-cover group-hover:border-[#5B88D6] transition-all mb-1" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&amp;h=60&amp;fit=crop"/>
<span className="text-xs text-gray-700 block truncate">Julia</span>
</a>
<a className="text-center group" href="#">
<img alt="Friend" className="w-full aspect-square rounded-xl border-2 border-white shadow object-cover group-hover:border-[#5B88D6] transition-all mb-1" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&amp;h=60&amp;fit=crop"/>
<span className="text-xs text-gray-700 block truncate">Carlos</span>
</a>
</div>
</div>
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-bold text-gray-800">Comunidades</h3>
<a className="text-sm text-[#5B88D6] hover:text-[#4A77C5] font-medium" href="#" onclick="showPage('communities'); return false;">Ver todas</a>
</div>
<div className="space-y-3">
<a className="flex items-center space-x-3 p-2 hover:bg-[#F0F6FC] rounded-lg transition-colors group" href="#">
<div className="w-10 h-10 gradient-orkut rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm">EU</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-800 truncate group-hover:text-[#5B88D6]">Eu odeio acordar cedo</div>
<div className="text-xs text-gray-500">1.2M membros</div>
</div>
</a>
<a className="flex items-center space-x-3 p-2 hover:bg-[#F0F6FC] rounded-lg transition-colors group" href="#">
<div className="w-10 h-10 gradient-pink rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm">PG</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-800 truncate group-hover:text-[#5B88D6]">Programadores</div>
<div className="text-xs text-gray-500">987K membros</div>
</div>
</a>
<a className="flex items-center space-x-3 p-2 hover:bg-[#F0F6FC] rounded-lg transition-colors group" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm">MU</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-800 truncate group-hover:text-[#5B88D6]">Músicos Amadores</div>
<div className="text-xs text-gray-500">456K membros</div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="hidden" id="messagesPage">
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 overflow-hidden h-[calc(100vh-12rem)]">
<div className="grid grid-cols-1 md:grid-cols-[320px_1fr] h-full">

<div className="border-r border-gray-200">
<div className="p-4 border-b border-gray-200">
<h2 className="text-lg font-bold text-gray-800 mb-3">Mensagens</h2>
<input className="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5B88D6] focus:ring-2 focus:ring-[#5B88D6]/20" placeholder="Buscar conversas..." type="text"/>
</div>
<div className="overflow-y-auto h-[calc(100%-8rem)]">

<div className="flex items-center space-x-3 p-4 hover:bg-[#F0F6FC] cursor-pointer border-b border-gray-100 transition-colors bg-[#F0F6FC]">
<div className="relative">
<img alt="User" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&amp;h=50&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-semibold text-gray-800 truncate">Maria Santos</span>
<span className="text-xs text-gray-500">10:30</span>
</div>
<p className="text-xs text-gray-600 truncate">Oi! Tudo bem? Vamos marcar...</p>
</div>
<div className="w-5 h-5 bg-[#5B88D6] rounded-full flex items-center justify-center text-white text-xs font-bold">2</div>
</div>

<div className="flex items-center space-x-3 p-4 hover:bg-[#F0F6FC] cursor-pointer border-b border-gray-100 transition-colors">
<div className="relative">
<img alt="User" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&amp;h=50&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 rounded-full border-2 border-white"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-gray-800 truncate">Pedro Costa</span>
<span className="text-xs text-gray-500">Ontem</span>
</div>
<p className="text-xs text-gray-600 truncate">Valeu! Até mais tarde</p>
</div>
</div>

<div className="flex items-center space-x-3 p-4 hover:bg-[#F0F6FC] cursor-pointer border-b border-gray-100 transition-colors">
<div className="relative">
<img alt="User" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&amp;h=50&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-1">
<span className="text-sm font-medium text-gray-800 truncate">Ana Paula</span>
<span className="text-xs text-gray-500">Domingo</span>
</div>
<p className="text-xs text-gray-600 truncate">Adorei as fotos! 😍</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col">

<div className="flex items-center justify-between p-4 border-b border-gray-200">
<div className="flex items-center space-x-3">
<img alt="User" className="w-10 h-10 rounded-xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&amp;h=50&amp;fit=crop"/>
<div>
<h3 className="text-sm font-semibold text-gray-800">Maria Santos</h3>
<p className="text-xs text-green-500">Online</p>
</div>
</div>
<div className="flex items-center space-x-2">
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="phone"></i>
</button>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="video"></i>
</button>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="more-vertical"></i>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4">

<div className="flex items-start space-x-2">
<img alt="User" className="w-8 h-8 rounded-lg object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&amp;h=40&amp;fit=crop"/>
<div className="flex-1">
<div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 inline-block max-w-md">
<p className="text-sm text-gray-800">Oi! Tudo bem? Vamos marcar aquele café?</p>
</div>
<span className="text-xs text-gray-500 ml-2">10:25</span>
</div>
</div>

<div className="flex items-start space-x-2 justify-end">
<div className="flex-1 text-right">
<div className="gradient-orkut rounded-2xl rounded-tr-sm p-3 inline-block max-w-md">
<p className="text-sm text-white">Oi Maria! Tudo ótimo! Claro, que tal hoje às 15h?</p>
</div>
<span className="text-xs text-gray-500 mr-2">10:27</span>
</div>
</div>

<div className="flex items-start space-x-2">
<img alt="User" className="w-8 h-8 rounded-lg object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&amp;h=40&amp;fit=crop"/>
<div className="flex-1">
<div className="bg-gray-100 rounded-2xl rounded-tl-sm p-3 inline-block max-w-md">
<p className="text-sm text-gray-800">Perfeito! Te encontro na cafeteria de sempre 😊</p>
</div>
<span className="text-xs text-gray-500 ml-2">10:30</span>
</div>
</div>
</div>

<div className="p-4 border-t border-gray-200">
<div className="flex items-center space-x-2">
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="smile"></i>
</button>
<button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
<i className="w-5 h-5" data-lucide="paperclip"></i>
</button>
<input className="flex-1 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5B88D6] focus:ring-2 focus:ring-[#5B88D6]/20" placeholder="Digite sua mensagem..." type="text"/>
<button className="gradient-orkut text-white p-2 rounded-lg hover:shadow-md transition-all">
<i className="w-5 h-5" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6" id="friendsPage">
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
<h2 className="text-xl font-bold text-gray-800">Meus Amigos (324)</h2>
<div className="flex gap-2 w-full sm:w-auto">
<input className="flex-1 sm:w-64 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5B88D6] focus:ring-2 focus:ring-[#5B88D6]/20" placeholder="Buscar amigos..." type="text"/>
<button className="gradient-orkut text-white font-medium py-2 px-4 rounded-lg shadow-soft hover:shadow-md transition-all text-sm whitespace-nowrap">
<i className="w-4 h-4 inline mr-2" data-lucide="user-plus"></i>Adicionar
                                    </button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">

<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-xl p-4 text-center hover-lift border border-gray-100">
<img alt="Friend" className="w-20 h-20 mx-auto rounded-xl border-2 border-white shadow object-cover mb-3" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop"/>
<a className="text-sm font-semibold text-gray-800 hover:text-[#5B88D6] block mb-1 transition-colors" href="#">Maria Santos</a>
<p className="text-xs text-gray-600 mb-3">São Paulo, SP</p>
<div className="flex gap-2">
<button className="flex-1 bg-[#F0F6FC] text-[#5B88D6] font-medium py-2 px-3 rounded-lg hover:bg-[#E0EBFA] transition-all text-xs">
<i className="w-3 h-3 inline mr-1" data-lucide="mail"></i>Mensagem
                                        </button>
</div>
</div>

<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-xl p-4 text-center hover-lift border border-gray-100">
<img alt="Friend" className="w-20 h-20 mx-auto rounded-xl border-2 border-white shadow object-cover mb-3" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&amp;h=100&amp;fit=crop"/>
<a className="text-sm font-semibold text-gray-800 hover:text-[#5B88D6] block mb-1 transition-colors" href="#">Pedro Costa</a>
<p className="text-xs text-gray-600 mb-3">Rio de Janeiro, RJ</p>
<div className="flex gap-2">
<button className="flex-1 bg-[#F0F6FC] text-[#5B88D6] font-medium py-2 px-3 rounded-lg hover:bg-[#E0EBFA] transition-all text-xs">
<i className="w-3 h-3 inline mr-1" data-lucide="mail"></i>Mensagem
                                        </button>
</div>
</div>

<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-xl p-4 text-center hover-lift border border-gray-100">
<img alt="Friend" className="w-20 h-20 mx-auto rounded-xl border-2 border-white shadow object-cover mb-3" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&amp;h=100&amp;fit=crop"/>
<a className="text-sm font-semibold text-gray-800 hover:text-[#5B88D6] block mb-1 transition-colors" href="#">Ana Paula</a>
<p className="text-xs text-gray-600 mb-3">Belo Horizonte, MG</p>
<div className="flex gap-2">
<button className="flex-1 bg-[#F0F6FC] text-[#5B88D6] font-medium py-2 px-3 rounded-lg hover:bg-[#E0EBFA] transition-all text-xs">
<i className="w-3 h-3 inline mr-1" data-lucide="mail"></i>Mensagem
                                        </button>
</div>
</div>

<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-xl p-4 text-center hover-lift border border-gray-100">
<img alt="Friend" className="w-20 h-20 mx-auto rounded-xl border-2 border-white shadow object-cover mb-3" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<a className="text-sm font-semibold text-gray-800 hover:text-[#5B88D6] block mb-1 transition-colors" href="#">Lucas Silva</a>
<p className="text-xs text-gray-600 mb-3">Curitiba, PR</p>
<div className="flex gap-2">
<button className="flex-1 bg-[#F0F6FC] text-[#5B88D6] font-medium py-2 px-3 rounded-lg hover:bg-[#E0EBFA] transition-all text-xs">
<i className="w-3 h-3 inline mr-1" data-lucide="mail"></i>Mensagem
                                        </button>
</div>
</div>

<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-xl p-4 text-center hover-lift border border-gray-100">
<img alt="Friend" className="w-20 h-20 mx-auto rounded-xl border-2 border-white shadow object-cover mb-3" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<a className="text-sm font-semibold text-gray-800 hover:text-[#5B88D6] block mb-1 transition-colors" href="#">Julia Oliveira</a>
<p className="text-xs text-gray-600 mb-3">Porto Alegre, RS</p>
<div className="flex gap-2">
<button className="flex-1 bg-[#F0F6FC] text-[#5B88D6] font-medium py-2 px-3 rounded-lg hover:bg-[#E0EBFA] transition-all text-xs">
<i className="w-3 h-3 inline mr-1" data-lucide="mail"></i>Mensagem
                                        </button>
</div>
</div>
<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-xl p-4 text-center hover-lift border border-gray-100">
<img alt="Friend" className="w-20 h-20 mx-auto rounded-xl border-2 border-white shadow object-cover mb-3" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<a className="text-sm font-semibold text-gray-800 hover:text-[#5B88D6] block mb-1 transition-colors" href="#">Carlos Mendes</a>
<p className="text-xs text-gray-600 mb-3">Salvador, BA</p>
<div className="flex gap-2">
<button className="flex-1 bg-[#F0F6FC] text-[#5B88D6] font-medium py-2 px-3 rounded-lg hover:bg-[#E0EBFA] transition-all text-xs">
<i className="w-3 h-3 inline mr-1" data-lucide="mail"></i>Mensagem
                                        </button>
</div>
</div>
<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-xl p-4 text-center hover-lift border border-gray-100">
<img alt="Friend" className="w-20 h-20 mx-auto rounded-xl border-2 border-white shadow object-cover mb-3" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&amp;h=100&amp;fit=crop"/>
<a className="text-sm font-semibold text-gray-800 hover:text-[#5B88D6] block mb-1 transition-colors" href="#">Fernanda Lima</a>
<p className="text-xs text-gray-600 mb-3">Fortaleza, CE</p>
<div className="flex gap-2">
<button className="flex-1 bg-[#F0F6FC] text-[#5B88D6] font-medium py-2 px-3 rounded-lg hover:bg-[#E0EBFA] transition-all text-xs">
<i className="w-3 h-3 inline mr-1" data-lucide="mail"></i>Mensagem
                                        </button>
</div>
</div>
<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-xl p-4 text-center hover-lift border border-gray-100">
<img alt="Friend" className="w-20 h-20 mx-auto rounded-xl border-2 border-white shadow object-cover mb-3" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&amp;h=100&amp;fit=crop"/>
<a className="text-sm font-semibold text-gray-800 hover:text-[#5B88D6] block mb-1 transition-colors" href="#">Rafael Santos</a>
<p className="text-xs text-gray-600 mb-3">Recife, PE</p>
<div className="flex gap-2">
<button className="flex-1 bg-[#F0F6FC] text-[#5B88D6] font-medium py-2 px-3 rounded-lg hover:bg-[#E0EBFA] transition-all text-xs">
<i className="w-3 h-3 inline mr-1" data-lucide="mail"></i>Mensagem
                                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6" id="communitiesPage">
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
<h2 className="text-xl font-bold text-gray-800">Minhas Comunidades (47)</h2>
<div className="flex gap-2 w-full sm:w-auto">
<input className="flex-1 sm:w-64 px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#5B88D6] focus:ring-2 focus:ring-[#5B88D6]/20" placeholder="Buscar comunidades..." type="text"/>
<button className="gradient-pink text-white font-medium py-2 px-4 rounded-lg shadow-soft hover:shadow-md transition-all text-sm whitespace-nowrap" onclick="showModal('createCommunityModal')">
<i className="w-4 h-4 inline mr-2" data-lucide="plus"></i>Criar
                                    </button>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

<div className="text-center group cursor-pointer">
<div className="relative mb-3">
<div className="w-full aspect-square gradient-orkut rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-soft group-hover:shadow-md transition-all">EU</div>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-soft flex items-center justify-center text-[#5B88D6] text-xs font-bold">47</div>
</div>
<h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#5B88D6] transition-colors">Eu odeio acordar cedo</h3>
<p className="text-xs text-gray-500">1.2M membros</p>
</div>

<div className="text-center group cursor-pointer">
<div className="relative mb-3">
<div className="w-full aspect-square gradient-pink rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-soft group-hover:shadow-md transition-all">PG</div>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-soft flex items-center justify-center text-[#DE5A9B] text-xs font-bold">32</div>
</div>
<h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#5B88D6] transition-colors">Programadores</h3>
<p className="text-xs text-gray-500">987K membros</p>
</div>

<div className="text-center group cursor-pointer">
<div className="relative mb-3">
<div className="w-full aspect-square bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-soft group-hover:shadow-md transition-all">MU</div>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-soft flex items-center justify-center text-[#FFA500] text-xs font-bold">28</div>
</div>
<h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#5B88D6] transition-colors">Músicos Amadores</h3>
<p className="text-xs text-gray-500">456K membros</p>
</div>

<div className="text-center group cursor-pointer">
<div className="relative mb-3">
<div className="w-full aspect-square bg-gradient-to-br from-[#28A745] to-[#218838] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-soft group-hover:shadow-md transition-all">FT</div>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-soft flex items-center justify-center text-[#28A745] text-xs font-bold">19</div>
</div>
<h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#5B88D6] transition-colors">Fotografia</h3>
<p className="text-xs text-gray-500">654K membros</p>
</div>

<div className="text-center group cursor-pointer">
<div className="relative mb-3">
<div className="w-full aspect-square bg-gradient-to-br from-[#DC3545] to-[#C82333] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-soft group-hover:shadow-md transition-all">VI</div>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-soft flex items-center justify-center text-[#DC3545] text-xs font-bold">15</div>
</div>
<h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#5B88D6] transition-colors">Viagens pelo Mundo</h3>
<p className="text-xs text-gray-500">789K membros</p>
</div>

<div className="text-center group cursor-pointer">
<div className="relative mb-3">
<div className="w-full aspect-square bg-gradient-to-br from-[#6F42C1] to-[#5A32A3] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-soft group-hover:shadow-md transition-all">JO</div>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-soft flex items-center justify-center text-[#6F42C1] text-xs font-bold">12</div>
</div>
<h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#5B88D6] transition-colors">Jogos Online</h3>
<p className="text-xs text-gray-500">1.5M membros</p>
</div>
<div className="text-center group cursor-pointer">
<div className="relative mb-3">
<div className="w-full aspect-square bg-gradient-to-br from-[#17A2B8] to-[#117A8B] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-soft group-hover:shadow-md transition-all">CI</div>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-soft flex items-center justify-center text-[#17A2B8] text-xs font-bold">10</div>
</div>
<h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#5B88D6] transition-colors">Cinema e Séries</h3>
<p className="text-xs text-gray-500">2.3M membros</p>
</div>
<div className="text-center group cursor-pointer">
<div className="relative mb-3">
<div className="w-full aspect-square bg-gradient-to-br from-[#E83E8C] to-[#D63384] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-soft group-hover:shadow-md transition-all">GA</div>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-soft flex items-center justify-center text-[#E83E8C] text-xs font-bold">8</div>
</div>
<h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#5B88D6] transition-colors">Gastronomia</h3>
<p className="text-xs text-gray-500">876K membros</p>
</div>
<div className="text-center group cursor-pointer">
<div className="relative mb-3">
<div className="w-full aspect-square bg-gradient-to-br from-[#FFC107] to-[#E0A800] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-soft group-hover:shadow-md transition-all">ES</div>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-soft flex items-center justify-center text-[#FFC107] text-xs font-bold">5</div>
</div>
<h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#5B88D6] transition-colors">Esportes Radicais</h3>
<p className="text-xs text-gray-500">543K membros</p>
</div>
<div className="text-center group cursor-pointer">
<div className="relative mb-3">
<div className="w-full aspect-square bg-gradient-to-br from-[#20C997] to-[#1AA179] rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-soft group-hover:shadow-md transition-all">LI</div>
<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-lg shadow-soft flex items-center justify-center text-[#20C997] text-xs font-bold">3</div>
</div>
<h3 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2 group-hover:text-[#5B88D6] transition-colors">Livros e Literatura</h3>
<p className="text-xs text-gray-500">1.0M membros</p>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6" id="photosPage">
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
<h2 className="text-xl font-bold text-gray-800">Meus Álbuns de Fotos</h2>
<button className="gradient-orkut text-white font-medium py-2 px-4 rounded-lg shadow-soft hover:shadow-md transition-all text-sm" onclick="showModal('uploadPhotoModal')">
<i className="w-4 h-4 inline mr-2" data-lucide="upload"></i>Upload de Fotos
                                </button>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">

<div className="cursor-pointer group">
<div className="relative overflow-hidden rounded-2xl mb-2 hover-lift">
<img alt="Album" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
<div className="text-white">
<p className="text-sm font-semibold">Férias 2024</p>
<p className="text-xs opacity-90">24 fotos</p>
</div>
</div>
</div>
</div>

<div className="cursor-pointer group">
<div className="relative overflow-hidden rounded-2xl mb-2 hover-lift">
<img alt="Album" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
<div className="text-white">
<p className="text-sm font-semibold">Natureza</p>
<p className="text-xs opacity-90">56 fotos</p>
</div>
</div>
</div>
</div>

<div className="cursor-pointer group">
<div className="relative overflow-hidden rounded-2xl mb-2 hover-lift">
<img alt="Album" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
<div className="text-white">
<p className="text-sm font-semibold">Viagens</p>
<p className="text-xs opacity-90">89 fotos</p>
</div>
</div>
</div>
</div>

<div className="cursor-pointer group">
<div className="relative overflow-hidden rounded-2xl mb-2 hover-lift">
<img alt="Album" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=300&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
<div className="text-white">
<p className="text-sm font-semibold">Momentos</p>
<p className="text-xs opacity-90">34 fotos</p>
</div>
</div>
</div>
</div>
</div>
<h3 className="text-lg font-bold text-gray-800 mb-4 pb-3 border-t border-gray-200 pt-6">Todas as Fotos</h3>
<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
<div className="relative group cursor-pointer overflow-hidden rounded-lg hover-lift">
<img alt="Photo" className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110" src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&amp;h=200&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6" id="videosPage">
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-3">
<h2 className="text-xl font-bold text-gray-800">Meus Vídeos (12)</h2>
<button className="gradient-orkut text-white font-medium py-2 px-4 rounded-lg shadow-soft hover:shadow-md transition-all text-sm" onclick="showModal('uploadVideoModal')">
<i className="w-4 h-4 inline mr-2" data-lucide="upload"></i>Upload de Vídeo
                                </button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-2xl overflow-hidden hover-lift border border-gray-100 cursor-pointer group">
<div className="relative">
<img alt="Video thumbnail" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=400&amp;h=250&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
<div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#5B88D6] ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg font-medium">3:24</div>
</div>
<div className="p-4">
<h3 className="text-sm font-semibold text-gray-800 mb-1">Viagem à praia</h3>
<p className="text-xs text-gray-600">há 2 dias • 45 visualizações</p>
</div>
</div>

<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-2xl overflow-hidden hover-lift border border-gray-100 cursor-pointer group">
<div className="relative">
<img alt="Video thumbnail" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=400&amp;h=250&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
<div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#5B88D6] ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg font-medium">1:45</div>
</div>
<div className="p-4">
<h3 className="text-sm font-semibold text-gray-800 mb-1">Show ao vivo</h3>
<p className="text-xs text-gray-600">há 5 dias • 123 visualizações</p>
</div>
</div>

<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-2xl overflow-hidden hover-lift border border-gray-100 cursor-pointer group">
<div className="relative">
<img alt="Video thumbnail" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&amp;h=250&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
<div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#5B88D6] ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg font-medium">5:12</div>
</div>
<div className="p-4">
<h3 className="text-sm font-semibold text-gray-800 mb-1">Tutorial de código</h3>
<p className="text-xs text-gray-600">há 1 semana • 234 visualizações</p>
</div>
</div>

<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-2xl overflow-hidden hover-lift border border-gray-100 cursor-pointer group">
<div className="relative">
<img alt="Video thumbnail" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&amp;h=250&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
<div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#5B88D6] ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg font-medium">2:18</div>
</div>
<div className="p-4">
<h3 className="text-sm font-semibold text-gray-800 mb-1">Treino de hoje</h3>
<p className="text-xs text-gray-600">há 2 semanas • 89 visualizações</p>
</div>
</div>

<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-2xl overflow-hidden hover-lift border border-gray-100 cursor-pointer group">
<div className="relative">
<img alt="Video thumbnail" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&amp;h=250&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
<div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#5B88D6] ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg font-medium">4:05</div>
</div>
<div className="p-4">
<h3 className="text-sm font-semibold text-gray-800 mb-1">Festa de aniversário</h3>
<p className="text-xs text-gray-600">há 3 semanas • 156 visualizações</p>
</div>
</div>

<div className="bg-gradient-to-br from-white to-[#F8FBFF] rounded-2xl overflow-hidden hover-lift border border-gray-100 cursor-pointer group">
<div className="relative">
<img alt="Video thumbnail" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&amp;h=250&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
<div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-[#5B88D6] ml-1" data-lucide="play"></i>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg font-medium">6:33</div>
</div>
<div className="p-4">
<h3 className="text-sm font-semibold text-gray-800 mb-1">Receita favorita</h3>
<p className="text-xs text-gray-600">há 1 mês • 567 visualizações</p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6" id="notificationsPage">
<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-bold text-gray-800">Notificações</h2>
<button className="text-sm text-[#5B88D6] hover:text-[#4A77C5] font-medium">Marcar todas como lidas</button>
</div>
<div className="space-y-3">

<div className="flex items-start space-x-3 p-4 hover:bg-[#F0F6FC] rounded-xl transition-colors cursor-pointer bg-[#F0F6FC]">
<img alt="User" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&amp;h=50&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm text-gray-800"><span className="font-semibold">Maria Santos</span> curtiu sua foto</p>
<span className="text-xs text-gray-500">há 5 minutos</span>
</div>
<div className="w-2 h-2 bg-[#5B88D6] rounded-full mt-2"></div>
</div>

<div className="flex items-start space-x-3 p-4 hover:bg-[#F0F6FC] rounded-xl transition-colors cursor-pointer bg-[#F0F6FC]">
<img alt="User" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&amp;h=50&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm text-gray-800"><span className="font-semibold">Pedro Costa</span> comentou em sua publicação</p>
<span className="text-xs text-gray-500">há 15 minutos</span>
</div>
<div className="w-2 h-2 bg-[#5B88D6] rounded-full mt-2"></div>
</div>

<div className="flex items-start space-x-3 p-4 hover:bg-[#F0F6FC] rounded-xl transition-colors cursor-pointer">
<img alt="User" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&amp;h=50&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm text-gray-800"><span className="font-semibold">Ana Paula</span> enviou uma solicitação de amizade</p>
<span className="text-xs text-gray-500">há 1 hora</span>
<div className="flex gap-2 mt-2">
<button className="gradient-orkut text-white font-medium py-1 px-3 rounded-lg text-xs">Aceitar</button>
<button className="bg-gray-200 text-gray-700 font-medium py-1 px-3 rounded-lg text-xs hover:bg-gray-300">Recusar</button>
</div>
</div>
</div>

<div className="flex items-start space-x-3 p-4 hover:bg-[#F0F6FC] rounded-xl transition-colors cursor-pointer">
<div className="w-12 h-12 gradient-pink rounded-xl flex items-center justify-center text-white font-bold text-sm">PG</div>
<div className="flex-1">
<p className="text-sm text-gray-800">Novo post na comunidade <span className="font-semibold">Programadores</span></p>
<span className="text-xs text-gray-500">há 2 horas</span>
</div>
</div>

<div className="flex items-start space-x-3 p-4 hover:bg-[#F0F6FC] rounded-xl transition-colors cursor-pointer">
<img alt="User" className="w-12 h-12 rounded-xl object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&amp;h=50&amp;fit=crop"/>
<div className="flex-1">
<p className="text-sm text-gray-800"><span className="font-semibold">Lucas Silva</span> compartilhou sua publicação</p>
<span className="text-xs text-gray-500">há 3 horas</span>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden lg:block space-y-6" id="rightSidebar">

<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<h3 className="text-base font-bold text-gray-800 mb-4 flex items-center">
<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Amigos Online (8)
                        </h3>
<div className="space-y-3">
<div className="flex items-center space-x-3 cursor-pointer group">
<div className="relative">
<img alt="Friend" className="w-10 h-10 rounded-xl border-2 border-white shadow object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&amp;h=40&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<a className="text-sm text-gray-800 hover:text-[#5B88D6] flex-1 truncate font-medium transition-colors" href="#">Maria Santos</a>
</div>
<div className="flex items-center space-x-3 cursor-pointer group">
<div className="relative">
<img alt="Friend" className="w-10 h-10 rounded-xl border-2 border-white shadow object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=40&amp;h=40&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<a className="text-sm text-gray-800 hover:text-[#5B88D6] flex-1 truncate font-medium transition-colors" href="#">Pedro Costa</a>
</div>
<div className="flex items-center space-x-3 cursor-pointer group">
<div className="relative">
<img alt="Friend" className="w-10 h-10 rounded-xl border-2 border-white shadow object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&amp;h=40&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<a className="text-sm text-gray-800 hover:text-[#5B88D6] flex-1 truncate font-medium transition-colors" href="#">Ana Paula</a>
</div>
<div className="flex items-center space-x-3 cursor-pointer group">
<div className="relative">
<img alt="Friend" className="w-10 h-10 rounded-xl border-2 border-white shadow object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&amp;h=40&amp;fit=crop"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<a className="text-sm text-gray-800 hover:text-[#5B88D6] flex-1 truncate font-medium transition-colors" href="#">Lucas Silva</a>
</div>
</div>
</div>

<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<h3 className="text-base font-bold text-gray-800 mb-4">Comunidades em Alta</h3>
<div className="space-y-3">
<a className="flex items-center space-x-3 p-2 hover:bg-[#F0F6FC] rounded-lg transition-colors group" href="#">
<div className="w-10 h-10 gradient-orkut rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm flex-shrink-0">EU</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-800 truncate group-hover:text-[#5B88D6]">Eu odeio acordar cedo</div>
<div className="text-xs text-gray-500">1.2M membros</div>
</div>
</a>
<a className="flex items-center space-x-3 p-2 hover:bg-[#F0F6FC] rounded-lg transition-colors group" href="#">
<div className="w-10 h-10 gradient-pink rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm flex-shrink-0">PG</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-800 truncate group-hover:text-[#5B88D6]">Programadores</div>
<div className="text-xs text-gray-500">987K membros</div>
</div>
</a>
<a className="flex items-center space-x-3 p-2 hover:bg-[#F0F6FC] rounded-lg transition-colors group" href="#">
<div className="w-10 h-10 bg-gradient-to-br from-[#FFA500] to-[#FF8C00] rounded-lg flex items-center justify-center text-white text-xs font-bold shadow-sm flex-shrink-0">MU</div>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-gray-800 truncate group-hover:text-[#5B88D6]">Músicos Amadores</div>
<div className="text-xs text-gray-500">456K membros</div>
</div>
</a>
</div>
</div>

<div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/50 p-6">
<h3 className="text-base font-bold text-gray-800 mb-4">Sugestões de Amizade</h3>
<div className="space-y-4">
<div className="flex items-center space-x-3">
<img alt="User" className="w-10 h-10 rounded-xl border-2 border-white shadow object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&amp;h=40&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<a className="text-sm font-medium text-gray-800 hover:text-[#5B88D6] block truncate" href="#">Julia Oliveira</a>
<p className="text-xs text-gray-500">12 amigos em comum</p>
</div>
<button className="w-8 h-8 bg-[#F0F6FC] text-[#5B88D6] rounded-lg hover:bg-[#E0EBFA] transition-colors flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="user-plus"></i>
</button>
</div>
<div className="flex items-center space-x-3">
<img alt="User" className="w-10 h-10 rounded-xl border-2 border-white shadow object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&amp;h=40&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<a className="text-sm font-medium text-gray-800 hover:text-[#5B88D6] block truncate" href="#">Fernanda Lima</a>
<p className="text-xs text-gray-500">8 amigos em comum</p>
</div>
<button className="w-8 h-8 bg-[#F0F6FC] text-[#5B88D6] rounded-lg hover:bg-[#E0EBFA] transition-colors flex items-center justify-center flex-shrink-0">
<i className="w-4 h-4" data-lucide="user-plus"></i>
</button>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>

<footer className="bg-white/50 backdrop-blur-sm border-t border-white/50 mt-8 py-6">
<div className="max-w-7xl mx-auto px-4 text-center">
<p className="text-xs text-gray-600 mb-2 font-medium">© 2024 ORKIFY - Todos os direitos reservados</p>
<div className="flex justify-center flex-wrap gap-4 text-xs">
<a className="text-[#5B88D6] hover:text-[#4A77C5] font-medium transition-colors" href="#">Sobre</a>
<a className="text-[#5B88D6] hover:text-[#4A77C5] font-medium transition-colors" href="#">Termos de Uso</a>
<a className="text-[#5B88D6] hover:text-[#4A77C5] font-medium transition-colors" href="#">Privacidade</a>
<a className="text-[#5B88D6] hover:text-[#4A77C5] font-medium transition-colors" href="#">Ajuda</a>
<a className="text-[#5B88D6] hover:text-[#4A77C5] font-medium transition-colors" href="#">Contato</a>
</div>
</div>
</footer>


    </>
  );
}
