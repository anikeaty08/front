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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
}
}
}
}



        // Główna funkcja logowania
        function handleLogin(event) {
            // Zapobiegamy przeładowaniu strony
            event.preventDefault();
            
            const authView = document.getElementById('auth-view');
            const appView = document.getElementById('app-view');
            
            // 1. Ukrywamy widok logowania (fade out)
            authView.style.opacity = '0';
            
            setTimeout(() => {
                // 2. Po zakończeniu animacji ukrywamy element całkowicie
                authView.style.display = 'none';
                
                // 3. Pokazujemy aplikację
                appView.classList.remove('hidden');
                
                // Wymuszenie reflow przeglądarki, żeby animacja opacity zadziałała
                void appView.offsetWidth; 
                
                // 4. Animacja wejścia aplikacji (fade in)
                appView.style.opacity = '1';
                appView.classList.add('animate-fade-in');
            }, 500); // Czas zgodny z transition-duration w CSS
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
      

<div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-zinc-950 transition-opacity duration-500" id="auth-view">
<div className="w-full max-w-sm p-8 mx-4 rounded-2xl border border-zinc-800/50 bg-zinc-900/40 backdrop-blur-xl shadow-2xl">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 mb-4 border border-blue-500/20">
<span className="iconify w-6 h-6" data-icon="lucide:hexagon"></span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2">CreatorHub</h1>
<p className="text-sm text-zinc-500">Witaj ponownie. Zaloguj się do swojego konta.</p>
</div>
<form className="space-y-4" id="login-form" onsubmit="handleLogin(event)">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Email</label>
<div className="relative group">
<span className="absolute left-3 top-2.5 text-zinc-500 group-focus-within:text-blue-500 transition-colors">
<span className="iconify w-5 h-5" data-icon="lucide:mail"></span>
</span>

<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-sm" type="email" value="demo@creatorhub.pl"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Hasło</label>
<div className="relative group">
<span className="absolute left-3 top-2.5 text-zinc-500 group-focus-within:text-blue-500 transition-colors">
<span className="iconify w-5 h-5" data-icon="lucide:lock"></span>
</span>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg py-2.5 pl-10 pr-4 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all shadow-sm" type="password" value="password123"/>
</div>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg shadow-lg shadow-blue-900/20 transition-all active:scale-[0.98] text-sm tracking-wide mt-2" type="submit">
                    Zaloguj się
                </button>
</form>
<div className="mt-6 pt-6 border-t border-zinc-800/50 text-center">
<p className="text-xs text-zinc-500">Kliknij przycisk powyżej, aby wejść.</p>
</div>
</div>
</div>

<div className="hidden min-h-screen flex flex-col md:flex-row max-w-[1600px] mx-auto opacity-0 transition-opacity duration-700" id="app-view">

<aside className="hidden md:flex w-64 flex-col fixed h-screen border-r border-zinc-800/50 bg-zinc-950 z-30 pt-6 pb-4 px-4">
<div className="flex items-center gap-3 px-2 mb-8">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
<span className="iconify w-5 h-5" data-icon="lucide:hexagon"></span>
</div>
<span className="text-lg font-semibold tracking-tight text-white">CreatorHub</span>
</div>
<nav className="flex-1 space-y-1">
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-900 text-white border border-zinc-800 shadow-sm" href="#">
<span className="iconify w-5 h-5" data-icon="lucide:home"></span>
<span className="text-sm font-medium">Główna</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 transition-all group" href="#">
<span className="iconify w-5 h-5 group-hover:text-blue-500 transition-colors" data-icon="lucide:hash"></span>
<span className="text-sm font-medium">Odkrywaj</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 transition-all group" href="#">
<span className="iconify w-5 h-5 group-hover:text-pink-500 transition-colors" data-icon="lucide:bell"></span>
<span className="text-sm font-medium">Powiadomienia</span>
<span className="w-1.5 h-1.5 rounded-full bg-pink-500 ml-auto"></span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 transition-all group" href="#">
<span className="iconify w-5 h-5 group-hover:text-green-500 transition-colors" data-icon="lucide:mail"></span>
<span className="text-sm font-medium">Wiadomości</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200 transition-all group" href="#">
<span className="iconify w-5 h-5 group-hover:text-purple-500 transition-colors" data-icon="lucide:bookmark"></span>
<span className="text-sm font-medium">Zapisane</span>
</a>
</nav>
<button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 mb-6">
<span className="iconify w-4 h-4" data-icon="lucide:plus-circle"></span>
<span className="text-sm">Nowy Post</span>
</button>
<div className="mt-auto border-t border-zinc-800 pt-4">
<div className="flex items-center gap-3 px-2">
<img className="w-9 h-9 rounded-full object-cover ring-2 ring-zinc-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-white truncate">Kamil Stępień</p>
<p className="text-xs text-zinc-500 truncate">@kamilstepien</p>
</div>
<span className="iconify w-4 h-4 text-zinc-500" data-icon="lucide:more-horizontal"></span>
</div>
</div>
</aside>

<header className="md:hidden sticky top-0 z-40 glass border-b border-zinc-800/50 px-4 h-14 flex items-center justify-between">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
<span className="iconify w-5 h-5" data-icon="lucide:hexagon"></span>
</div>
<h1 className="font-semibold text-white">Główna</h1>
<img className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</header>

<main className="flex-1 md:ml-64 min-h-screen border-r border-zinc-800/50">

<div className="sticky top-0 z-30 glass border-b border-zinc-800/50 pt-2 backdrop-blur-md">
<div className="flex w-full">
<button className="flex-1 py-4 text-sm font-medium text-white border-b-2 border-blue-500 hover:bg-zinc-900/30 transition-colors">Dla Ciebie</button>
<button className="flex-1 py-4 text-sm font-medium text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/30 transition-colors">Obserwowani</button>
</div>
</div>

<div className="p-4 border-b border-zinc-800/50 hidden md:block">
<div className="flex gap-4">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 space-y-4">
<textarea className="w-full bg-transparent text-lg text-white placeholder-zinc-500 focus:outline-none resize-none h-12 pt-2" placeholder="Co słychać?!"></textarea>
<div className="flex items-center justify-between border-t border-zinc-800 pt-3">
<div className="flex gap-2 text-blue-500">
<button className="p-2 hover:bg-blue-500/10 rounded-full transition-colors"><span className="iconify w-5 h-5" data-icon="lucide:image"></span></button>
<button className="p-2 hover:bg-blue-500/10 rounded-full transition-colors"><span className="iconify w-5 h-5" data-icon="lucide:smile"></span></button>
<button className="p-2 hover:bg-blue-500/10 rounded-full transition-colors"><span className="iconify w-5 h-5" data-icon="lucide:calendar"></span></button>
</div>
<button className="bg-blue-600 hover:bg-blue-500 text-white font-medium px-4 py-1.5 rounded-full text-sm transition-colors opacity-50 hover:opacity-100">
                                Opublikuj
                            </button>
</div>
</div>
</div>
</div>

<div className="divide-y divide-zinc-800/50">

<article className="p-4 hover:bg-zinc-900/20 transition-colors cursor-pointer">
<div className="flex gap-4">
<div className="flex-shrink-0">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5 mb-1">
<span className="font-semibold text-white text-sm">Anna Kowalska</span>
<span className="iconify w-3.5 h-3.5 text-blue-500" data-icon="lucide:badge-check"></span>
<span className="text-zinc-500 text-sm">@annadesign · 2h</span>
<button className="ml-auto text-zinc-500 hover:text-blue-500"><span className="iconify w-4 h-4" data-icon="lucide:more-horizontal"></span></button>
</div>
<p className="text-sm text-zinc-200 leading-relaxed mb-3">Właśnie skończyłam pracę nad nowym interfejsem dla klienta z branży fintech. Uwielbiam te minimalistyczne trendy! 🎨✨ Co myślicie o ciemnych motywach w bankowości?</p>
<div className="rounded-xl overflow-hidden border border-zinc-800 mb-3">
<img className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between max-w-md text-zinc-500">
<button className="flex items-center gap-2 group hover:text-blue-500 transition-colors">
<div className="p-1.5 rounded-full group-hover:bg-blue-500/10"><span className="iconify w-4.5 h-4.5" data-icon="lucide:message-circle"></span></div>
<span className="text-xs">24</span>
</button>
<button className="flex items-center gap-2 group hover:text-green-500 transition-colors">
<div className="p-1.5 rounded-full group-hover:bg-green-500/10"><span className="iconify w-4.5 h-4.5" data-icon="lucide:repeat"></span></div>
<span className="text-xs">5</span>
</button>
<button className="flex items-center gap-2 group hover:text-pink-500 transition-colors">
<div className="p-1.5 rounded-full group-hover:bg-pink-500/10"><span className="iconify w-4.5 h-4.5" data-icon="lucide:heart"></span></div>
<span className="text-xs">142</span>
</button>
<button className="flex items-center gap-2 group hover:text-blue-500 transition-colors">
<div className="p-1.5 rounded-full group-hover:bg-blue-500/10"><span className="iconify w-4.5 h-4.5" data-icon="lucide:bar-chart-2"></span></div>
<span className="text-xs">1.2k</span>
</button>
<button className="group hover:text-blue-500 transition-colors">
<div className="p-1.5 rounded-full group-hover:bg-blue-500/10"><span className="iconify w-4.5 h-4.5" data-icon="lucide:share"></span></div>
</button>
</div>
</div>
</div>
</article>

<article className="p-4 hover:bg-zinc-900/20 transition-colors cursor-pointer">
<div className="flex gap-4">
<div className="flex-shrink-0">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center gap-1.5 mb-1">
<span className="font-semibold text-white text-sm">Piotr Tech</span>
<span className="text-zinc-500 text-sm">@piotr_dev · 5h</span>
<button className="ml-auto text-zinc-500 hover:text-blue-500"><span className="iconify w-4 h-4" data-icon="lucide:more-horizontal"></span></button>
</div>
<p className="text-sm text-zinc-200 leading-relaxed mb-3">Właśnie wdrożyłem Tailwind CSS w nowym projekcie. Szybkość developmentu wzrosła niesamowicie! Polecam każdemu, kto jeszcze się waha. 🚀💻 <span className="text-blue-500">#coding #webdev #css</span></p>
<div className="flex items-center justify-between max-w-md text-zinc-500 mt-2">
<button className="flex items-center gap-2 group hover:text-blue-500">
<div className="p-1.5 rounded-full group-hover:bg-blue-500/10"><span className="iconify w-4.5 h-4.5" data-icon="lucide:message-circle"></span></div>
<span className="text-xs">12</span>
</button>
<button className="flex items-center gap-2 group hover:text-green-500">
<div className="p-1.5 rounded-full group-hover:bg-green-500/10"><span className="iconify w-4.5 h-4.5" data-icon="lucide:repeat"></span></div>
<span className="text-xs">3</span>
</button>
<button className="flex items-center gap-2 group hover:text-pink-500">
<div className="p-1.5 rounded-full group-hover:bg-pink-500/10"><span className="iconify w-4.5 h-4.5" data-icon="lucide:heart"></span></div>
<span className="text-xs">89</span>
</button>
<button className="flex items-center gap-2 group hover:text-blue-500">
<div className="p-1.5 rounded-full group-hover:bg-blue-500/10"><span className="iconify w-4.5 h-4.5" data-icon="lucide:bar-chart-2"></span></div>
<span className="text-xs">850</span>
</button>
<button className="group hover:text-blue-500">
<div className="p-1.5 rounded-full group-hover:bg-blue-500/10"><span className="iconify w-4.5 h-4.5" data-icon="lucide:share"></span></div>
</button>
</div>
</div>
</div>
</article>
</div>
</main>

<aside className="hidden xl:block w-80 sticky top-0 h-screen overflow-y-auto pt-6 px-6">

<div className="relative mb-6">
<span className="absolute left-3 top-2.5 text-zinc-500">
<span className="iconify w-4 h-4" data-icon="lucide:search"></span>
</span>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Szukaj na CreatorHub" type="text"/>
</div>

<div className="rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-4 mb-6">
<h3 className="text-lg font-bold text-white mb-1">Wersja Premium</h3>
<p className="text-xs text-zinc-400 mb-4">Odblokuj ekskluzywne treści, odznakę weryfikacji i brak reklam.</p>
<button className="w-full bg-white text-black font-semibold text-sm py-2 rounded-full hover:bg-zinc-200 transition-colors">
                    Subskrybuj
                </button>
</div>

<div className="bg-zinc-900/30 rounded-xl border border-zinc-800/50 p-4 mb-6">
<h3 className="font-bold text-white text-lg mb-4">Trendy dla Ciebie</h3>
<div className="space-y-4">
<div className="cursor-pointer hover:bg-zinc-900/50 -mx-2 px-2 py-1 rounded-lg transition-colors">
<p className="text-xs text-zinc-500">Technologia · Popularne</p>
<p className="font-semibold text-white">#ArtificialIntelligence</p>
<p className="text-xs text-zinc-500">125k postów</p>
</div>
<div className="cursor-pointer hover:bg-zinc-900/50 -mx-2 px-2 py-1 rounded-lg transition-colors">
<p className="text-xs text-zinc-500">Rozrywka · Trendy</p>
<p className="font-semibold text-white">Cyberpunk 2077</p>
<p className="text-xs text-zinc-500">45k postów</p>
</div>
<div className="cursor-pointer hover:bg-zinc-900/50 -mx-2 px-2 py-1 rounded-lg transition-colors">
<p className="text-xs text-zinc-500">Biznes · Popularne</p>
<p className="font-semibold text-white">#StartupLife</p>
<p className="text-xs text-zinc-500">22k postów</p>
</div>
</div>
<button className="mt-4 text-sm text-blue-500 hover:text-blue-400 w-full text-left">Pokaż więcej</button>
</div>

<div className="bg-zinc-900/30 rounded-xl border border-zinc-800/50 p-4">
<h3 className="font-bold text-white text-lg mb-4">Kogo obserwować</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold text-white hover:underline cursor-pointer">Marta Foto</p>
<p className="text-xs text-zinc-500">@marta_art</p>
</div>
</div>
<button className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors">
                            Obserwuj
                        </button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-semibold text-white hover:underline cursor-pointer">Jan Kowal</p>
<p className="text-xs text-zinc-500">@jankowal</p>
</div>
</div>
<button className="bg-white text-black text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-zinc-200 transition-colors">
                            Obserwuj
                        </button>
</div>
</div>
</div>
</aside>
</div>


    </>
  );
}
