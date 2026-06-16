import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Onboarding Logic ---
        function nextStep() {
            const input = document.getElementById('invite-input').value;
            if(input.length > 3) {
                // Simulate transition
                document.getElementById('step-invite').classList.add('hidden');
                document.getElementById('step-nick').classList.remove('hidden');
                document.getElementById('step-nick').classList.add('animate-fade-in');
            } else {
                alert("Пожалуйста, введите корректный код.");
            }
        }

        function finishOnboarding() {
            const input = document.getElementById('nick-input').value;
            if(input.length >= 5) {
                // Set username in Wallet Tab (Header username removed per design)
                const finalName = input.startsWith('@') ? input : '@' + input;
                document.getElementById('wallet-username').innerText = finalName;
                
                // Hide onboarding layer
                const layer = document.getElementById('onboarding-layer');
                layer.style.opacity = '0';
                setTimeout(() => {
                    layer.style.display = 'none';
                    // Show App
                    document.getElementById('main-header').classList.remove('hidden');
                    document.getElementById('content-area').classList.remove('hidden');
                    document.getElementById('bottom-nav').classList.remove('hidden');
                    document.getElementById('bottom-nav').classList.add('flex'); // restore flex
                }, 500);
            } else {
                alert("Никнейм должен содержать минимум 5 символов.");
            }
        }

        // --- Tab Logic ---
        function switchTab(tabId) {
            // Hide all tabs
            ['tasks', 'store', 'friends', 'wallet'].forEach(id => {
                document.getElementById('tab-' + id).classList.add('hidden');
            });

            // Show selected tab
            document.getElementById('tab-' + tabId).classList.remove('hidden');

            // Reset nav icons color
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-[#0076FA]');
                btn.classList.add('text-zinc-500');
            });

            // Highlight active nav
            const activeBtn = document.querySelector(`.nav-btn[data-target="${tabId}"]`);
            activeBtn.classList.remove('text-zinc-500');
            activeBtn.classList.add('text-[#0076FA]');
        }

        // --- Sheet Logic ---
        function openSheet(title, reward) {
            document.getElementById('sheet-title').innerText = title;
            document.getElementById('sheet-reward').innerText = reward;
            
            const sheet = document.getElementById('offer-sheet');
            const content = document.getElementById('sheet-content');
            
            sheet.classList.remove('pointer-events-none', 'opacity-0');
            content.classList.remove('translate-y-full');
        }

        function closeSheet() {
            const sheet = document.getElementById('offer-sheet');
            const content = document.getElementById('sheet-content');
            
            content.classList.add('translate-y-full');
            setTimeout(() => {
                sheet.classList.add('opacity-0', 'pointer-events-none');
            }, 100);
        }

        // Close sheet on backdrop click
        document.getElementById('offer-sheet').addEventListener('click', (e) => {
            if (e.target.id === 'offer-sheet') closeSheet();
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full h-full max-w-md bg-zinc-950 sm:shadow-2xl sm:shadow-black sm:rounded-3xl sm:h-[95vh] sm:my-auto relative overflow-hidden flex flex-col sm:border sm:border-zinc-800">

<div className="absolute inset-0 z-50 bg-zinc-950 flex flex-col p-6 justify-between transition-all duration-500" id="onboarding-layer">
<div className="flex-1 flex flex-col justify-center items-center gap-6 animate-fade-in">

<div className="w-20 h-20 bg-[#0076FA] rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-900/20">
<iconify-icon className="text-white text-4xl" icon="solar:stars-minimalistic-bold"></iconify-icon>
</div>
<div className="text-center space-y-2">
<h1 className="text-2xl font-semibold tracking-tight text-white">Добро пожаловать</h1>
<p className="text-sm text-zinc-400 font-normal leading-relaxed max-w-[240px] mx-auto">
                        Ваш доступ к заработку TON через эксклюзивные банковские предложения.
                    </p>
</div>

<div className="w-full space-y-4 mt-8" id="step-invite">
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 font-medium ml-1">Пригласительный код</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-base text-zinc-100 outline-none focus:ring-1 focus:ring-[#0076FA] focus:border-[#0076FA] transition-all placeholder:text-zinc-600 font-normal" id="invite-input" placeholder="например xk6pYk7e" type="text"/>
</div>
<button className="w-full bg-zinc-100 hover:bg-white active:scale-[0.98] text-black font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-sm" onclick="nextStep()">
                        Продолжить
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>

<div className="w-full space-y-4 mt-8 hidden" id="step-nick">
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 font-medium ml-1">Придумайте никнейм</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-base text-zinc-100 outline-none focus:ring-1 focus:ring-[#0076FA] focus:border-[#0076FA] transition-all placeholder:text-zinc-600 font-normal" id="nick-input" placeholder="@username" type="text"/>
<p className="text-[10px] text-zinc-500 ml-1">5-32 символа, только буквы и цифры.</p>
</div>
<button className="w-full bg-[#0076FA] hover:bg-[#006ae0] active:scale-[0.98] text-white font-medium py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-lg shadow-blue-900/30" onclick="finishOnboarding()">
                        Создать аккаунт
                    </button>
</div>
</div>
<div className="text-center py-4">
<p className="text-[10px] text-zinc-600">Paybie v1.0.0</p>
</div>
</div>


<header className="px-5 py-4 flex justify-between items-center bg-zinc-950/80 backdrop-blur-md sticky top-0 z-40 border-b border-zinc-800 hidden" id="main-header">

<div className="flex items-center gap-2.5">
<div className="w-9 h-9 rounded-xl bg-[#0076FA] flex items-center justify-center text-white shadow-lg shadow-blue-900/20">
<iconify-icon icon="solar:stars-minimalistic-bold" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Paybie</span>
</div>
<button className="w-9 h-9 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
</header>

<div className="flex-1 overflow-y-auto overflow-x-hidden relative no-scrollbar bg-zinc-950 pb-24 hidden" id="content-area">

<div className="p-5 space-y-6 animate-fade-in" id="tab-tasks">

<div className="flex p-1 bg-zinc-900 rounded-xl overflow-x-auto no-scrollbar gap-1 border border-zinc-800">
<button className="flex-1 min-w-[90px] py-1.5 px-3 rounded-lg bg-zinc-800 text-xs font-medium text-white shadow-sm border border-zinc-700/50 transition-all text-center">Доступные</button>
<button className="flex-1 min-w-[90px] py-1.5 px-3 rounded-lg text-zinc-500 text-xs font-medium hover:bg-zinc-800/50 transition-all text-center">В работе</button>
<button className="flex-1 min-w-[90px] py-1.5 px-3 rounded-lg text-zinc-500 text-xs font-medium hover:bg-zinc-800/50 transition-all text-center">Готово</button>
</div>

<div className="space-y-3">
<h2 className="text-sm font-semibold text-zinc-100 tracking-tight flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:card-linear"></iconify-icon>
                        Дебетовые карты
                    </h2>

<div className="group relative flex flex-col bg-zinc-900 rounded-2xl p-4 border border-zinc-800 shadow-sm active:scale-[0.99] transition-transform duration-200">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-xl bg-[#FFDD2D] flex items-center justify-center text-xs font-bold text-black tracking-tight">TCS</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 leading-none mb-1">Tinkoff Black</h3>
<p className="text-[10px] text-zinc-500">Покупка от 300₽</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-semibold text-[#0076FA] tracking-tight">+ 4.5 TON</span>
<span className="text-[10px] text-zinc-600">~ 2 200₽</span>
</div>
</div>
<div className="flex gap-2 mb-4">
<span className="px-2 py-0.5 rounded-md bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">14+</span>
<span className="px-2 py-0.5 rounded-md bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">Новый клиент</span>
</div>
<div className="grid grid-cols-2 gap-2 mt-auto">
<button className="py-2.5 rounded-xl border border-zinc-700 text-xs font-medium text-zinc-300 hover:bg-zinc-800 transition-colors" onclick="openSheet('Tinkoff Black', '4.5 TON')">Подробнее</button>
<button className="py-2.5 rounded-xl bg-zinc-100 text-xs font-medium text-black hover:bg-white transition-colors">Начать</button>
</div>
</div>

<div className="group relative flex flex-col bg-zinc-900 rounded-2xl p-4 border border-zinc-800 shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-xl bg-[#EF3124] flex items-center justify-center text-xs font-bold text-white tracking-tight">Alfa</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 leading-none mb-1">Альфа Карта</h3>
<p className="text-[10px] text-zinc-500">Любая покупка</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-semibold text-[#0076FA] tracking-tight">+ 5.2 TON</span>
<span className="text-[10px] text-zinc-600">~ 2 500₽</span>
</div>
</div>
<div className="flex gap-2 mb-4">
<span className="px-2 py-0.5 rounded-md bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">18+</span>
</div>
<div className="grid grid-cols-2 gap-2 mt-auto">
<button className="py-2.5 rounded-xl border border-zinc-700 text-xs font-medium text-zinc-300 hover:bg-zinc-800 transition-colors" onclick="openSheet('Альфа Карта', '5.2 TON')">Подробнее</button>
<button className="py-2.5 rounded-xl bg-zinc-100 text-xs font-medium text-black hover:bg-white transition-colors">Начать</button>
</div>
</div>
</div>

<div className="space-y-3 pt-2">
<h2 className="text-sm font-semibold text-zinc-100 tracking-tight flex items-center gap-2">
<iconify-icon className="text-zinc-500" icon="solar:card-2-linear"></iconify-icon>
                        Кредитные карты
                    </h2>

<div className="group relative flex flex-col bg-zinc-900 rounded-2xl p-4 border border-zinc-800 shadow-sm">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-3">
<div className="w-10 h-10 rounded-xl bg-[#002882] flex items-center justify-center text-xs font-bold text-white tracking-tight">VTB</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 leading-none mb-1">Карта Возможностей</h3>
<p className="text-[10px] text-zinc-500">Выдача и активация</p>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-sm font-semibold text-[#0076FA] tracking-tight">+ 8.0 TON</span>
<span className="text-[10px] text-zinc-600">~ 4 000₽</span>
</div>
</div>
<div className="flex gap-2 mb-4">
<span className="px-2 py-0.5 rounded-md bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">21+</span>
<span className="px-2 py-0.5 rounded-md bg-zinc-800 border border-zinc-700 text-[10px] text-zinc-400 font-medium">Кредитная история</span>
</div>
<div className="grid grid-cols-2 gap-2 mt-auto">
<button className="py-2.5 rounded-xl border border-zinc-700 text-xs font-medium text-zinc-300 hover:bg-zinc-800 transition-colors" onclick="openSheet('ВТБ Возможности', '8.0 TON')">Подробнее</button>
<button className="py-2.5 rounded-xl bg-zinc-100 text-xs font-medium text-black hover:bg-white transition-colors">Начать</button>
</div>
</div>
</div>
</div>

<div className="hidden p-5 space-y-6 animate-fade-in" id="tab-store">

<div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">
<div className="flex flex-col items-center gap-2 min-w-[70px]">
<div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-[#0076FA]">
<iconify-icon icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-zinc-300">Звезды</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[70px]">
<div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-purple-500">
<iconify-icon icon="solar:crown-star-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-zinc-500">Премиум</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[70px]">
<div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-pink-500">
<iconify-icon icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-zinc-500">Подарки</span>
</div>
<div className="flex flex-col items-center gap-2 min-w-[70px]">
<div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-orange-500">
<iconify-icon icon="solar:gallery-linear" width="24"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-zinc-500">NFT</span>
</div>
</div>

<div className="space-y-4">
<h2 className="text-sm font-semibold text-zinc-100 tracking-tight">Telegram Звезды</h2>
<div className="grid grid-cols-2 gap-3">

<div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 flex flex-col items-center text-center gap-2 relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#0076FA] text-white text-[9px] font-bold px-2 py-1 rounded-bl-xl">HOT</div>
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-yellow-500 mb-1">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-zinc-100">50 Звезд</h3>
<button className="w-full py-2 bg-zinc-100 text-black rounded-lg text-xs font-medium mt-1">1.2 TON</button>
</div>

<div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 flex flex-col items-center text-center gap-2">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-yellow-500 mb-1">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-zinc-100">100 Звезд</h3>
<button className="w-full py-2 bg-zinc-800 border border-zinc-700 text-zinc-100 rounded-lg text-xs font-medium mt-1">2.3 TON</button>
</div>

<div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 flex flex-col items-center text-center gap-2">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-yellow-500 mb-1">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-zinc-100">250 Звезд</h3>
<button className="w-full py-2 bg-zinc-800 border border-zinc-700 text-zinc-100 rounded-lg text-xs font-medium mt-1">5.7 TON</button>
</div>

<div className="bg-zinc-900 p-4 rounded-2xl border border-zinc-800 flex flex-col items-center text-center gap-2">
<div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-yellow-500 mb-1">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<h3 className="text-xs font-semibold text-zinc-100">500 Звезд</h3>
<button className="w-full py-2 bg-zinc-800 border border-zinc-700 text-zinc-100 rounded-lg text-xs font-medium mt-1">11.2 TON</button>
</div>
</div>
</div>

<div className="space-y-4">
<h2 className="text-sm font-semibold text-zinc-100 tracking-tight">Premium Подписка</h2>
<div className="bg-gradient-to-br from-purple-700 to-indigo-800 rounded-2xl p-5 text-white flex justify-between items-center shadow-lg shadow-purple-900/30">
<div>
<h3 className="font-semibold text-sm">3 Месяца</h3>
<p className="text-[10px] text-white/80 mt-1">Анимированный аватар, без рекламы</p>
</div>
<button className="bg-white text-purple-700 px-4 py-2 rounded-xl text-xs font-bold shadow-sm">11.9 TON</button>
</div>
<div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 flex justify-between items-center">
<div>
<h3 className="font-semibold text-sm text-zinc-100">6 Месяцев</h3>
<p className="text-[10px] text-zinc-500 mt-1">Выгода 15%</p>
</div>
<button className="bg-zinc-800 border border-zinc-700 text-zinc-100 px-4 py-2 rounded-xl text-xs font-medium">18.5 TON</button>
</div>
</div>
</div>

<div className="hidden p-5 space-y-6 animate-fade-in flex flex-col min-h-full" id="tab-friends">
<div className="flex flex-col items-center gap-2 mt-4">
<div className="text-5xl">👨‍👩‍👧‍👦</div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-100">Пригласи друзей</h2>
</div>

<div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 text-center space-y-3 shadow-sm">
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wider">Неполученный доход</span>
<div className="text-3xl font-semibold text-zinc-100 tracking-tight flex items-center justify-center gap-2">
<iconify-icon className="text-zinc-500 text-xl" icon="solar:wallet-money-linear"></iconify-icon>
                        0.00 TON
                    </div>
<button className="w-full py-3 bg-zinc-800 text-zinc-500 rounded-xl text-sm font-medium cursor-not-allowed" disabled="">Зачислить на баланс</button>
<p className="text-[10px] text-zinc-600 leading-tight px-4">Получайте 15% от друзей 1 уровня, 10% от 2 уровня и 5% от 3 уровня.</p>
</div>

<div className="space-y-2">
<div className="flex justify-between items-end px-1">
<span className="text-xs font-medium text-zinc-500">Ваша ссылка</span>
<span className="text-[10px] font-medium text-[#0076FA]">3 / 10 Исп.</span>
</div>
<button className="w-full bg-[#0076FA] active:bg-[#006ae0] text-white rounded-xl p-1 pr-4 pl-1 flex items-center justify-between transition-all group shadow-lg shadow-blue-900/30">
<div className="bg-white/20 rounded-lg p-2.5">
<iconify-icon icon="solar:copy-linear" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium">t.me/paybiebot?start=ref_xk6p</span>
</button>
</div>

<div className="space-y-3 pt-2">
<h3 className="text-sm font-semibold text-zinc-100 tracking-tight">Друзья 1 уровня</h3>
<div className="bg-zinc-900 rounded-2xl border border-zinc-800 divide-y divide-zinc-800/50">

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
<img className="w-full h-full opacity-80" src="https://api.dicebear.com/7.x/notionists/svg?seed=Alex"/>
</div>
<div>
<p className="text-xs font-semibold text-zinc-100">@alex_trader</p>
<p className="text-[10px] text-zinc-500">Приглашено: 12 (L2+L3)</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-semibold text-[#0076FA]">+ 4.2 TON</p>
</div>
</div>

<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
<img className="w-full h-full opacity-80" src="https://api.dicebear.com/7.x/notionists/svg?seed=Sara"/>
</div>
<div>
<p className="text-xs font-semibold text-zinc-100">@sara_ton</p>
<p className="text-[10px] text-zinc-500">Приглашено: 0 (L2+L3)</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-semibold text-[#0076FA]">+ 0.0 TON</p>
</div>
</div>
</div>
</div>
</div>

<div className="hidden p-5 space-y-6 animate-fade-in" id="tab-wallet">

<div className="flex flex-col items-center pt-4 pb-2">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-700 border border-zinc-700 p-0.5 mb-3 overflow-hidden">
<img alt="User" className="w-full h-full object-cover rounded-full bg-zinc-900" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
<h2 className="text-lg font-semibold text-zinc-100 tracking-tight" id="wallet-username">@paybie_user</h2>
<div className="flex items-center gap-2 mt-1">
<span className="px-2 py-0.5 rounded-md bg-[#0076FA]/10 border border-[#0076FA]/20 text-[10px] text-[#0076FA] font-medium">Верифицирован</span>
</div>
</div>

<div className="bg-gradient-to-b from-[#0076FA] to-[#005bbd] rounded-2xl p-6 text-white shadow-xl shadow-blue-900/40 relative overflow-hidden">
<div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
<div className="absolute -left-8 -bottom-8 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>
<div className="relative z-10 flex flex-col gap-6">
<div>
<p className="text-xs text-blue-100 font-medium opacity-80 mb-1">Общий баланс</p>
<h2 className="text-4xl font-semibold tracking-tighter">12.5 <span className="text-2xl font-normal text-blue-100">TON</span></h2>
<p className="text-sm text-blue-100 mt-1">≈ 6,250.00 ₽</p>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-white text-[#0076FA] py-3 rounded-xl text-xs font-bold transition-transform active:scale-95 shadow-sm">Вывести</button>
<button className="flex-1 bg-black/20 hover:bg-black/30 text-white py-3 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
<iconify-icon icon="solar:history-linear"></iconify-icon> История
                            </button>
</div>
</div>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center text-[#0076FA]">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-zinc-100">Кошелек подключен</p>
<p className="text-[10px] text-zinc-500">UQBc...8a2z</p>
</div>
</div>
<button className="text-[10px] font-medium text-zinc-600 hover:text-red-500 transition-colors">Отключить</button>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
<p className="text-[10px] text-zinc-500 mb-1">Выполнено заданий</p>
<p className="text-lg font-semibold text-zinc-100">4</p>
</div>
<div className="bg-zinc-900 p-4 rounded-xl border border-zinc-800">
<p className="text-[10px] text-zinc-500 mb-1">Ожидает выплаты</p>
<p className="text-lg font-semibold text-zinc-100">14.2 <span className="text-xs font-normal text-zinc-500">TON</span></p>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-zinc-100 tracking-tight mb-3">Последние операции</h3>
<div className="bg-zinc-900 rounded-2xl border border-zinc-800 divide-y divide-zinc-800/50">
<div className="p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-900/20 text-green-500 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-zinc-100">Tinkoff Black</p>
<p className="text-[10px] text-zinc-500">Завершено</p>
</div>
</div>
<span className="text-xs font-medium text-green-500">+4.5 TON</span>
</div>
<div className="p-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-900/20 text-orange-500 flex items-center justify-center">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-zinc-100">Альфа Карта</p>
<p className="text-[10px] text-zinc-500">Ожидает действия</p>
</div>
</div>
<span className="text-xs font-medium text-zinc-500">5.2 TON</span>
</div>
</div>
</div>
</div>
</div>

<nav className="bg-zinc-950 border-t border-zinc-800 px-6 py-3 pb-6 flex justify-between items-center z-40 absolute bottom-0 w-full hidden" id="bottom-nav">
<button className="nav-btn flex flex-col items-center gap-1 text-[#0076FA] transition-colors" data-target="tasks" onclick="switchTab('tasks')">
<iconify-icon icon="solar:case-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Задания</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors" data-target="store" onclick="switchTab('store')">
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Маркет</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors" data-target="friends" onclick="switchTab('friends')">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Друзья</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-zinc-500 hover:text-zinc-300 transition-colors" data-target="wallet" onclick="switchTab('wallet')">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Кошелёк</span>
</button>
</nav>

<div className="absolute inset-0 z-50 bg-black/60 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 flex flex-col justify-end" id="offer-sheet">
<div className="bg-zinc-900 w-full rounded-t-3xl p-6 transform translate-y-full transition-transform duration-300 shadow-2xl pb-10 border-t border-zinc-800" id="sheet-content">
<div className="w-12 h-1 bg-zinc-700 rounded-full mx-auto mb-6"></div>
<div className="flex justify-between items-start mb-6">
<div>
<h2 className="text-xl font-semibold tracking-tight text-zinc-100" id="sheet-title">Название</h2>
<span className="inline-block px-2 py-0.5 mt-2 rounded bg-green-900/30 text-green-400 text-[10px] font-bold tracking-wide uppercase">Проверено</span>
</div>
<div className="bg-[#0076FA]/10 px-3 py-1.5 rounded-lg text-[#0076FA] font-semibold text-sm" id="sheet-reward">0 TON</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 min-w-[18px]" icon="solar:info-circle-linear" width="18"></iconify-icon>
<p className="text-xs text-zinc-400 leading-relaxed">Оформите карту по ссылке ниже. Карта бесплатная навсегда. Доставка курьером обычно на следующий день.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 min-w-[18px]" icon="solar:target-linear" width="18"></iconify-icon>
<div>
<p className="text-xs font-medium text-zinc-200">Целевое действие:</p>
<p className="text-xs text-zinc-400 leading-relaxed">Совершить любую покупку картой (онлайн или оффлайн).</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 mt-0.5 min-w-[18px]" icon="solar:forbidden-circle-linear" width="18"></iconify-icon>
<p className="text-xs text-zinc-400 leading-relaxed">Только для пользователей, у которых не было продуктов этого банка последние 365 дней.</p>
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<button className="col-span-1 py-3.5 border border-zinc-700 text-zinc-300 font-medium rounded-xl text-sm hover:bg-zinc-800 transition-colors" onclick="closeSheet()">Отмена</button>
<button className="col-span-2 py-3.5 bg-[#0076FA] text-white font-medium rounded-xl text-sm hover:bg-[#006ae0] transition-colors shadow-lg shadow-blue-900/40">Начать задание</button>
</div>
</div>
</div>
</main>


    </>
  );
}
