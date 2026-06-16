import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function saveSettings() {
            const toast = document.getElementById('toast');
            
            // Show toast
            toast.classList.remove('translate-y-20', 'opacity-0');
            
            // Hide after 3s
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }

        function copyToken(btn) {
            // Fake copy interaction
            const originalIcon = btn.innerHTML;
            navigator.clipboard.writeText("yal_live_59384759283475928347598234");
            
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-500"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            
            setTimeout(() => {
                btn.innerHTML = originalIcon;
                lucide.createIcons();
            }, 2000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0 opacity-40"></div>
<div className="fixed top-0 left-0 w-full max-w-2xl h-96 orange-glow blur-3xl pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<a className="w-5 h-5 bg-orange-600 rounded-sm flex items-center justify-center shadow-[0_0_10px_rgba(234,88,12,0.5)] hover:scale-105 transition-transform" href="index.html">
<span className="text-black font-bold text-xs ui-font">Y</span>
</a>
<a className="text-sm font-medium tracking-tight text-white opacity-90 ui-font" href="index.html">Yallax base</a>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-300 ui-font" href="#">Промты</a>
<a className="text-xs text-neutral-400 hover:text-white transition-colors duration-300 ui-font" href="index.html">Инструменты</a>

<a className="text-xs text-white transition-colors duration-300 ui-font border-b border-orange-500 pb-0.5" href="settings.html">Настройки</a>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neutral-700 to-neutral-600 border border-white/10 flex items-center justify-center text-[10px] text-white font-medium cursor-pointer hover:border-orange-500/50 transition-colors">
                    YB
                </div>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow pt-28 pb-20 px-4 md:px-6">
<div className="max-w-3xl mx-auto">

<div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-6 mb-8 animate-item">
<div>
<h1 className="header-font text-3xl font-bold text-white tracking-tight mb-2">Настройки</h1>
<p className="text-neutral-400 text-sm ui-font">Управление профилем и предпочтениями.</p>
</div>
<button className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-semibold rounded-md hover:bg-neutral-200 transition-colors ui-font" onclick="saveSettings()">
<i className="w-3.5 h-3.5" data-lucide="save"></i>
                    Сохранить изменения
                </button>
</div>
<div className="space-y-6">

<div className="settings-card rounded-xl p-6 animate-item delay-100">
<h2 className="text-lg font-medium text-white mb-4 ui-font flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="user"></i> Профиль
                    </h2>
<div className="flex flex-col md:flex-row gap-6 items-start">

<div className="flex-shrink-0">
<div className="w-20 h-20 rounded-full bg-neutral-900 border border-dashed border-neutral-600 flex flex-col items-center justify-center cursor-pointer hover:border-orange-500 hover:bg-neutral-800 transition-all group relative overflow-hidden">
<i className="w-5 h-5 text-neutral-500 group-hover:text-orange-500 transition-colors" data-lucide="upload"></i>
<span className="text-[9px] text-neutral-500 mt-1 uppercase tracking-wide group-hover:text-neutral-300">Фото</span>
<input className="absolute inset-0 opacity-0 cursor-pointer" type="file"/>
</div>
</div>

<div className="flex-grow w-full space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 ui-font">Отображаемое имя</label>
<input className="w-full input-dark rounded-md px-3 py-2 text-sm text-white placeholder-neutral-600 ui-font" type="text" value="Yallax User"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 ui-font">Никнейм</label>
<div className="relative">
<span className="absolute left-3 top-2 text-neutral-500 text-sm">@</span>
<input className="w-full input-dark rounded-md pl-7 pr-3 py-2 text-sm text-white placeholder-neutral-600 ui-font" type="text" value="yallax_base"/>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 ui-font">Email</label>
<input className="w-full input-dark rounded-md px-3 py-2 text-sm text-white placeholder-neutral-600 ui-font" type="email" value="user@example.com"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 ui-font">О себе</label>
<textarea className="w-full input-dark rounded-md px-3 py-2 text-sm text-white placeholder-neutral-600 ui-font resize-none" rows="3">Digital creator exploring the AI frontier.</textarea>
</div>
</div>
</div>
</div>

<div className="settings-card rounded-xl p-6 animate-item delay-200">
<h2 className="text-lg font-medium text-white mb-4 ui-font flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="bell"></i> Уведомления
                    </h2>
<div className="space-y-4 divide-y divide-white/5">
<div className="flex items-center justify-between pt-2">
<div>
<p className="text-sm text-white font-medium ui-font">Новые инструменты</p>
<p className="text-xs text-neutral-500 ui-font mt-0.5">Получать уведомления о добавлении новых тулзов.</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer hidden" id="toggle-1" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle-1"></label>
</input></div>
</div>
<div className="flex items-center justify-between pt-4">
<div>
<p className="text-sm text-white font-medium ui-font">Дайджест недели</p>
<p className="text-xs text-neutral-500 ui-font mt-0.5">Лучшие находки за неделю на почту.</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer hidden" id="toggle-2" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle-2"></label>
</input></div>
</div>
<div className="flex items-center justify-between pt-4">
<div>
<p className="text-sm text-white font-medium ui-font">Обновления продукта</p>
<p className="text-xs text-neutral-500 ui-font mt-0.5">Новости о развитии платформы Yallax.</p>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer hidden" id="toggle-3" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-neutral-800 cursor-pointer" htmlFor="toggle-3"></label>
</input></div>
</div>
</div>
</div>

<div className="settings-card rounded-xl p-6 animate-item delay-300">
<h2 className="text-lg font-medium text-white mb-4 ui-font flex items-center gap-2">
<i className="w-4 h-4 text-orange-500" data-lucide="key"></i> API Доступ
                    </h2>
<div className="bg-black/30 rounded-lg border border-white/5 p-4">
<label className="block text-xs font-medium text-neutral-400 mb-2 ui-font">Ваш персональный токен (Read Only)</label>
<div className="flex gap-2">
<code className="flex-grow bg-[#0a0a0a] border border-white/10 rounded px-3 py-2 text-xs font-mono text-neutral-300 truncate select-all">yal_live_59384759283475928347598234</code>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded px-3 transition-colors" onclick="copyToken(this)">
<i className="w-3.5 h-3.5" data-lucide="copy"></i>
</button>
</div>
<p className="text-[10px] text-neutral-600 mt-2 ui-font">Никому не сообщайте этот ключ.</p>
</div>
</div>

<div className="border border-red-900/30 bg-red-900/5 rounded-xl p-6 animate-item delay-300">
<h2 className="text-sm font-bold text-red-500 mb-2 ui-font uppercase tracking-wider">Danger Zone</h2>
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<div>
<p className="text-sm text-white font-medium ui-font">Удалить аккаунт</p>
<p className="text-xs text-neutral-500 ui-font mt-0.5">Это действие необратимо. Все данные будут стерты.</p>
</div>
<button className="px-4 py-2 border border-red-500/50 text-red-500 hover:bg-red-500 hover:text-white rounded-md text-xs font-medium transition-all ui-font w-full md:w-auto">
                            Удалить аккаунт
                        </button>
</div>
</div>

<button className="md:hidden w-full py-3 bg-white text-black font-semibold rounded-lg mt-4 shadow-lg active:scale-95 transition-transform" onclick="saveSettings()">
                    Сохранить изменения
                </button>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-black z-20 mt-auto">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500 ui-font">© 2024 Yallax base.</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-neutral-600 hover:text-orange-500 transition-colors ui-font" href="#">GitHub</a>
<a className="text-xs text-neutral-600 hover:text-orange-500 transition-colors ui-font" href="#">Discord</a>
</div>
</div>
</footer>

<div className="fixed bottom-10 right-10 bg-white text-black px-4 py-3 rounded-lg shadow-2xl transform translate-y-20 opacity-0 transition-all duration-300 flex items-center gap-3 z-50" id="toast">
<div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
<svg fill="none" height="12" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<div className="text-sm font-semibold ui-font">Настройки сохранены</div>
</div>


    </>
  );
}
