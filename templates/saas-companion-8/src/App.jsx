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



        lucide.createIcons();

        let userCoins = 350;
        let currentHotSetCost = 0;
        let currentHotSetTitle = "";
        
        switchTab('hotset'); 

        function switchTab(tabId) {
            ['view-dashboard', 'view-saas-money', 'view-one-of-one', 'view-hotset'].forEach(id => {
                const el = document.getElementById(id);
                el.classList.add('hidden');
                el.classList.remove('fade-in');
            });

            const selectedView = document.getElementById('view-' + tabId);
            selectedView.classList.remove('hidden');
            requestAnimationFrame(() => selectedView.classList.add('fade-in'));
            document.getElementById('main-scroll').scrollTop = 0;
            updateMobileNav(tabId);
        }

        function updateMobileNav(activeId) {
            const tabs = ['dashboard', 'saas-money', 'one-of-one', 'hotset'];
            tabs.forEach(tab => {
                const el = document.getElementById('mob-nav-' + tab);
                const icon = el.querySelector('svg');
                const label = el.querySelector('span');
                
                el.className = "group flex flex-col items-center justify-center w-[72px] h-[56px] rounded-2xl transition-all duration-300 border-2";

                if (tab === activeId) {
                    let activeColor = 'blue';
                    let activeBg = 'bg-blue-50';
                    let activeBorder = 'border-blue-600';
                    let activeText = 'text-blue-700';
                    let activeIcon = 'text-blue-600';

                    // Custom colors per tab
                    if(tab === 'hotset') {
                        activeBg = 'bg-pink-50';
                        activeBorder = 'border-pink-500';
                        activeText = 'text-pink-600';
                        activeIcon = 'text-pink-500';
                    }

                    el.classList.add(activeBorder, activeBg, 'gap-0.5');
                    el.classList.remove('border-transparent', 'gap-1');
                    
                    icon.classList.add(activeIcon);
                    icon.classList.remove('text-slate-400');
                    
                    label.classList.add('font-bold', activeText);
                    label.classList.remove('font-medium', 'text-slate-400');
                } else {
                    el.classList.add('border-transparent', 'text-slate-400', 'hover:bg-slate-50', 'gap-1');
                    el.classList.remove('border-blue-600', 'bg-blue-50', 'bg-pink-50', 'border-pink-500', 'gap-0.5');
                    
                    icon.classList.add('text-slate-400');
                    icon.classList.remove('text-blue-600', 'text-pink-500', 'fill-blue-600/10');
                    
                    label.classList.add('font-medium', 'text-slate-400');
                    label.classList.remove('font-bold', 'text-blue-700', 'text-pink-600');
                }
            });
            lucide.createIcons();
        }

        // --- Chat Logic ---
        function fillPrompt(text) { document.getElementById('chat-input').value = text; }
        function handleChatSubmit(e) {
            e.preventDefault();
            const input = document.getElementById('chat-input');
            const val = input.value.trim();
            if (!val) return;
            const container = document.getElementById('chat-container');
            container.innerHTML += `<div class="flex items-center justify-end gap-2 fade-in"><div class="bg-blue-600 text-white px-5 py-3 rounded-2xl rounded-tr-none text-base max-w-[80%] shadow-md">${val}</div></div>`;
            input.value = '';
            container.scrollTop = container.scrollHeight;
            setTimeout(() => {
                container.innerHTML += `<div class="flex items-start gap-3 fade-in mt-4"><div class="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-1"><i data-lucide="bot" class="w-4 h-4 text-white"></i></div><div class="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-base text-slate-700 border border-slate-100 max-w-[85%]"><p>Je réfléchis à ta demande...</p></div></div>`;
                lucide.createIcons();
                container.scrollTop = container.scrollHeight;
            }, 600);
        }

        // --- Booking Logic ---
        function openBookingModal(day, time, cost) {
            document.getElementById('modal-details').innerText = `${day} • ${time}`;
            document.getElementById('modal-cost').innerText = cost;
            const modal = document.getElementById('booking-modal');
            modal.classList.remove('hidden');
            setTimeout(() => document.getElementById('booking-modal-content').classList.remove('translate-y-full'), 20);
        }
        function closeBookingModal() {
            document.getElementById('booking-modal-content').classList.add('translate-y-full');
            setTimeout(() => document.getElementById('booking-modal').classList.add('hidden'), 300);
        }
        function confirmBooking() {
            const cost = parseInt(document.getElementById('modal-cost').innerText);
            if (userCoins >= cost) {
                userCoins -= cost;
                document.getElementById('mobile-coin-balance').innerText = userCoins;
                closeBookingModal();
            } else { alert('Pas assez de coins !'); }
        }

        // --- HotSet Logic (NEW) ---
        function openHotSetModal(title, type, cost) {
            currentHotSetCost = cost;
            currentHotSetTitle = title;
            document.getElementById('hotset-modal-title').innerText = title;
            document.getElementById('hotset-modal-price').innerText = cost;
            document.getElementById('hotset-url').value = '';
            document.getElementById('hotset-context').value = '';
            
            const modal = document.getElementById('hotset-modal');
            modal.classList.remove('hidden');
            setTimeout(() => document.getElementById('hotset-modal-content').classList.remove('translate-y-full'), 20);
        }

        function closeHotSetModal() {
            document.getElementById('hotset-modal-content').classList.add('translate-y-full');
            setTimeout(() => document.getElementById('hotset-modal').classList.add('hidden'), 300);
        }

        function submitHotSet() {
            const url = document.getElementById('hotset-url').value;
            if(!url) { alert('Merci de mettre une URL.'); return; }
            
            if (userCoins >= currentHotSetCost) {
                userCoins -= currentHotSetCost;
                document.getElementById('mobile-coin-balance').innerText = userCoins;
                
                // Add to active list
                const container = document.getElementById('hotset-active-container');
                const list = document.getElementById('hotset-active-list');
                
                container.classList.remove('hidden');
                
                const newItem = document.createElement('div');
                newItem.className = "bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4 fade-in";
                newItem.innerHTML = `
                    <div class="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 shrink-0">
                        <i data-lucide="loader" class="w-5 h-5 animate-spin"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex justify-between items-start">
                            <h4 class="font-bold text-slate-900 text-sm truncate pr-2">${currentHotSetTitle}</h4>
                            <span class="text-[10px] font-bold text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">1h</span>
                        </div>
                        <div class="flex items-center gap-2 mt-0.5">
                            <span class="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                            <span class="text-xs text-slate-500 font-medium truncate">En cours de traitement</span>
                        </div>
                    </div>
                `;
                
                list.insertBefore(newItem, list.firstChild);
                lucide.createIcons();
                closeHotSetModal();
            } else {
                alert('Pas assez de coins pour ce HotSet !');
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
      

<div className="hidden fixed inset-0 z-[60] bg-white flex items-center justify-center p-6" id="auth-screen"></div>

<aside className="hidden md:flex w-72 flex-col bg-white border-r border-slate-200 h-full p-6 z-20">
<div className="flex items-center gap-3 mb-10 px-2">
<div className="bg-slate-900 text-white rounded-xl p-2 flex items-center justify-center">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl font-semibold text-slate-900 tracking-tight">SaaS Mate</span>
</div>
<nav className="flex-1 space-y-2">
<button className="nav-item w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-slate-900 bg-slate-50 rounded-xl transition-all border border-slate-100" id="nav-dashboard" onclick="switchTab('dashboard')">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
                Dashboard
            </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all border border-transparent" id="nav-saas-money" onclick="switchTab('saas-money')">
<i className="w-5 h-5" data-lucide="sparkles"></i>
                SaaS Money
            </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all border border-transparent" id="nav-one-of-one" onclick="switchTab('one-of-one')">
<i className="w-5 h-5" data-lucide="phone"></i>
                Calls
            </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all border border-transparent" id="nav-hotset" onclick="switchTab('hotset')">
<i className="w-5 h-5" data-lucide="flame"></i>
                HotSet
            </button>
</nav>
</aside>

<div className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#f2f4f6]" id="app-layout">

<header className="md:hidden flex items-center justify-between px-5 py-4 bg-[#f2f4f6] sticky top-0 z-30 pt-safe-top">

<div className="flex items-center gap-3">
<div className="bg-[#0f172a] text-white w-9 h-9 rounded-xl flex items-center justify-center shadow-sm">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<span className="font-semibold tracking-tight text-lg text-slate-900">SaaS Mate</span>
</div>

<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-slate-200/60 shadow-sm">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<span className="text-sm font-semibold text-slate-700 tabular-nums" id="mobile-coin-balance">350</span>
</div>
<button className="w-9 h-9 rounded-full bg-slate-200 border border-white shadow-sm overflow-hidden active:scale-95 transition-transform">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto overflow-x-hidden relative scroll-smooth pb-safe-content px-4 md:px-10 md:pt-10" id="main-scroll">

<div className="hidden space-y-4 max-w-7xl mx-auto w-full fade-in pb-4" id="view-dashboard">

<div className="relative overflow-hidden rounded-[32px] bg-[#0f111a] text-white p-6 md:p-10 shadow-xl shadow-slate-900/5">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/5 text-[11px] font-semibold uppercase tracking-wider mb-5 backdrop-blur-md self-start">
<span className="relative flex h-2.5 w-2.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#e900bd]"></span>
</span>
                        IA v2.0 Live
                    </div>
<h3 className="text-[28px] leading-[1.15] font-semibold tracking-tight mb-3">SaaS Money IA est en ligne.</h3>
<p className="text-slate-400 text-lg font-medium leading-relaxed mb-8 max-w-sm">Valide ton marché et génère des idées de pricing en quelques secondes.</p>
<button className="w-full bg-white text-slate-900 rounded-2xl py-4 font-semibold text-base hover:bg-slate-50 active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5" onclick="switchTab('saas-money')">
                        Essayer maintenant
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="bg-white p-6 rounded-[32px] shadow-sm active:scale-[0.98] transition-all duration-200 cursor-pointer border border-transparent hover:border-slate-100" onclick="switchTab('saas-money')">
<div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-5">
<i className="w-7 h-7 text-[#e900bd]" data-lucide="sparkles"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight text-slate-900 mb-1">Coach IA</h4>
<p className="text-slate-500 font-medium text-base">Questions business 24/7.</p>
</div>
<div className="bg-white p-6 rounded-[32px] shadow-sm active:scale-[0.98] transition-all duration-200 cursor-pointer border border-transparent hover:border-slate-100" onclick="switchTab('one-of-one')">
<div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-5">
<i className="w-7 h-7 text-[#de783c]" data-lucide="video"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight text-slate-900 mb-1">One of One</h4>
<p className="text-slate-500 font-medium text-base">Coaching vidéo privé.</p>
</div>
<div className="bg-white p-6 rounded-[32px] shadow-sm active:scale-[0.98] transition-all duration-200 cursor-pointer border border-transparent hover:border-slate-100 md:col-span-2 lg:col-span-1" onclick="switchTab('hotset')">
<div className="w-14 h-14 rounded-2xl bg-pink-50 flex items-center justify-center mb-5">
<i className="w-7 h-7 text-pink-500" data-lucide="flame"></i>
</div>
<h4 className="text-xl font-semibold tracking-tight text-slate-900 mb-1">HotSet</h4>
<p className="text-slate-500 font-medium text-base">Audit express &amp; refonte.</p>
</div>
</div>
<div className="h-8"></div>
</div>

<div className="hidden flex flex-col h-full absolute inset-0 md:relative bg-[#f2f4f6]" id="view-saas-money">
<div className="px-5 py-3 border-b border-slate-200/50 bg-white/80 backdrop-blur-md flex justify-between items-center shadow-sm z-20 shrink-0 sticky top-0">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-slate-900">Chat IA</span>
<span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-purple-100 text-purple-700 border border-purple-200">BETA</span>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
<i className="w-4 h-4 text-slate-600" data-lucide="plus"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth pb-32" id="chat-container">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-white" data-lucide="bot"></i>
</div>
<div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm text-base text-slate-700 leading-relaxed border border-slate-100 max-w-[85%]">
<p className="font-semibold text-slate-900 mb-2">Bonjour Thomas !</p>
<p>Je suis prêt. On analyse ton pricing ou on cherche des idées ?</p>
<div className="flex flex-wrap gap-2 mt-3">
<button className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600" onclick="fillPrompt('Analyse mon pricing')">💰 Pricing</button>
<button className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600" onclick="fillPrompt('Idée de Growth B2B')">🚀 Growth</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white via-white to-transparent pt-10 z-30 md:mb-0 mb-[80px]">
<form className="relative flex items-center gap-2 bg-white rounded-full p-1 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-slate-100" onsubmit="handleChatSubmit(event)">
<input className="w-full pl-5 pr-12 py-3 bg-transparent rounded-full text-base text-slate-900 focus:ring-0 border-none outline-none placeholder:text-slate-400 placeholder:font-medium" id="chat-input" placeholder="Message..." type="text"/>
<button className="absolute right-1.5 p-2 bg-blue-600 text-white rounded-full shadow-md active:scale-90 transition-transform flex items-center justify-center w-9 h-9" type="submit">
<i className="w-5 h-5 stroke-[2.5]" data-lucide="arrow-up"></i>
</button>
</form>
</div>
</div>

<div className="hidden space-y-6 max-w-7xl mx-auto w-full fade-in pb-10" id="view-one-of-one">
<div className="bg-white p-6 rounded-[32px] shadow-sm">
<h2 className="text-2xl font-semibold text-slate-900 mb-2">Réserver un Call</h2>
<p className="text-slate-500 mb-6 text-base">Choisis un créneau pour ton coaching.</p>
<div className="space-y-3">
<button className="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50 transition-all group" onclick="openBookingModal('Lun 23 Oct', '10:00', 50)">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600">
<span className="font-semibold text-xs">23</span>
</div>
<div className="text-left">
<p className="font-semibold text-slate-900">Lundi Matin</p>
<p className="text-xs text-slate-500 font-medium">10:00 - 10:30</p>
</div>
</div>
<div className="px-3 py-1 bg-slate-100 rounded-full text-xs font-semibold text-slate-600">50 coins</div>
</button>

</div>
</div>
</div>

<div className="hidden flex flex-col space-y-6 max-w-7xl mx-auto w-full fade-in pb-24" id="view-hotset">

<div className="pt-2 px-2">
<h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-1">HotSet 🔥</h2>
<p className="text-slate-500 font-medium text-base">Audits express et optimisations en 24h.</p>
</div>

<div className="hidden px-2" id="hotset-active-container">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 pl-1">En cours</h3>
<div className="space-y-3" id="hotset-active-list">

</div>
</div>

<div className="px-2">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 pl-1">Catalogue</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<button className="group relative bg-white p-6 rounded-[28px] text-left shadow-sm border border-transparent hover:border-pink-200 transition-all active:scale-[0.98] overflow-hidden" onclick="openHotSetModal('Audit Landing Page', 'audit-landing', 100)">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-24 h-24 text-pink-600 transform rotate-12" data-lucide="layout"></i>
</div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600">
<i className="w-6 h-6" data-lucide="layout"></i>
</div>
<span className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-600 tabular-nums">100 coins</span>
</div>
<h4 className="font-bold text-slate-900 text-lg mb-1 relative z-10">Audit Landing Page</h4>
<p className="text-sm text-slate-500 leading-relaxed relative z-10 pr-4">Vidéo Loom de 5min analysant ta conversion, ton copy et ton UX.</p>
</button>

<button className="group relative bg-white p-6 rounded-[28px] text-left shadow-sm border border-transparent hover:border-purple-200 transition-all active:scale-[0.98] overflow-hidden" onclick="openHotSetModal('Roast mon Pricing', 'audit-pricing', 150)">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-24 h-24 text-purple-600 transform rotate-12" data-lucide="coins"></i>
</div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
<i className="w-6 h-6" data-lucide="coins"></i>
</div>
<span className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-600 tabular-nums">150 coins</span>
</div>
<h4 className="font-bold text-slate-900 text-lg mb-1 relative z-10">Roast mon Pricing</h4>
<p className="text-sm text-slate-500 leading-relaxed relative z-10 pr-4">Analyse psychologique de tes plans et opportunités d'upsell.</p>
</button>

<button className="group relative bg-white p-6 rounded-[28px] text-left shadow-sm border border-transparent hover:border-blue-200 transition-all active:scale-[0.98] overflow-hidden" onclick="openHotSetModal('Tech Stack Check', 'tech-check', 80)">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-24 h-24 text-blue-600 transform rotate-12" data-lucide="code-2"></i>
</div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
<i className="w-6 h-6" data-lucide="code-2"></i>
</div>
<span className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-600 tabular-nums">80 coins</span>
</div>
<h4 className="font-bold text-slate-900 text-lg mb-1 relative z-10">Tech Stack Check</h4>
<p className="text-sm text-slate-500 leading-relaxed relative z-10 pr-4">Validation express de ton architecture et choix d'outils.</p>
</button>

<button className="group relative bg-white p-6 rounded-[28px] text-left shadow-sm border border-transparent hover:border-orange-200 transition-all active:scale-[0.98] overflow-hidden" onclick="openHotSetModal('Copywriting Review', 'copy-check', 120)">
<div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
<i className="w-24 h-24 text-orange-600 transform rotate-12" data-lucide="pen-tool"></i>
</div>
<div className="flex justify-between items-start mb-4 relative z-10">
<div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
</div>
<span className="px-3 py-1.5 rounded-full bg-slate-100 text-xs font-bold text-slate-600 tabular-nums">120 coins</span>
</div>
<h4 className="font-bold text-slate-900 text-lg mb-1 relative z-10">Copywriting Review</h4>
<p className="text-sm text-slate-500 leading-relaxed relative z-10 pr-4">Optimisation de tes textes pour maximiser l'impact.</p>
</button>
</div>
</div>
</div>
</main>

<nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 pb-safe-nav pt-2 px-6 flex justify-between items-start z-50 rounded-t-[24px] shadow-[0_-5px_30px_rgba(0,0,0,0.04)] h-auto min-h-[85px]">

<button className="group flex flex-col items-center justify-center gap-1 w-[72px] h-[56px] rounded-2xl transition-all duration-300 relative border-2 border-transparent" id="mob-nav-dashboard" onclick="switchTab('dashboard')">
<div className="flex items-center justify-center relative">
<i className="w-[22px] h-[22px] stroke-[1.5]" data-lucide="layout-grid"></i>
</div>
<span className="text-[10px] font-medium tracking-wide">Accueil</span>
</button>
<button className="group flex flex-col items-center justify-center gap-1 w-[72px] h-[56px] rounded-2xl transition-all duration-300 border-2 border-transparent" id="mob-nav-saas-money" onclick="switchTab('saas-money')">
<i className="w-[22px] h-[22px] stroke-[1.5]" data-lucide="sparkles"></i>
<span className="text-[10px] font-medium tracking-wide">IA</span>
</button>
<button className="group flex flex-col items-center justify-center gap-1 w-[72px] h-[56px] rounded-2xl transition-all duration-300 border-2 border-transparent" id="mob-nav-one-of-one" onclick="switchTab('one-of-one')">
<i className="w-[22px] h-[22px] stroke-[1.5]" data-lucide="phone"></i>
<span className="text-[10px] font-medium tracking-wide">Calls</span>
</button>
<button className="group flex flex-col items-center justify-center gap-1 w-[72px] h-[56px] rounded-2xl transition-all duration-300 border-2 border-transparent" id="mob-nav-hotset" onclick="switchTab('hotset')">
<i className="w-[22px] h-[22px] stroke-[1.5]" data-lucide="flame"></i>
<span className="text-[10px] font-medium tracking-wide">HotSet</span>
</button>
</nav>
</div>

<div className="hidden fixed inset-0 z-[70] flex items-end justify-center bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300" id="booking-modal">
<div className="bg-white w-full rounded-t-[32px] p-6 pb-10 transform translate-y-full transition-transform duration-300 shadow-2xl" id="booking-modal-content">
<div className="w-12 h-1.5 bg-slate-200/80 rounded-full mx-auto mb-8"></div>
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-xl font-bold text-slate-900 tracking-tight">Confirmer</h3>
<p className="text-sm text-slate-500 font-medium mt-1" id="modal-details">Lundi • 10:00</p>
</div>
<div className="text-right">
<span className="block text-3xl font-bold text-slate-900 tracking-tight" id="modal-cost">50</span>
<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Coins</span>
</div>
</div>
<button className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold text-lg shadow-lg shadow-blue-500/25 active:scale-[0.98] transition-all" onclick="confirmBooking()">
                Valider la réservation
            </button>
<button className="w-full py-4 mt-3 text-slate-500 font-semibold text-sm hover:text-slate-800 transition-colors" onclick="closeBookingModal()">Annuler</button>
</div>
</div>

<div className="hidden fixed inset-0 z-[70] flex items-end justify-center bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300" id="hotset-modal">
<div className="bg-white w-full rounded-t-[32px] p-6 pb-8 transform translate-y-full transition-transform duration-300 shadow-2xl max-h-[90vh] overflow-y-auto" id="hotset-modal-content">
<div className="w-12 h-1.5 bg-slate-200/80 rounded-full mx-auto mb-6"></div>
<div className="flex justify-between items-start mb-6">
<div>
<span className="text-xs font-bold text-pink-500 uppercase tracking-widest">Nouveau HotSet</span>
<h3 className="text-xl font-bold text-slate-900 tracking-tight mt-1" id="hotset-modal-title">Audit Landing Page</h3>
</div>
<div className="flex items-center gap-1 bg-slate-100 px-3 py-1 rounded-full">
<span className="text-sm font-bold text-slate-900" id="hotset-modal-price">100</span>
<i className="w-3 h-3 text-slate-500" data-lucide="coins"></i>
</div>
</div>
<div className="space-y-4 mb-8">
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Lien du projet</label>
<input className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-medium" id="hotset-url" placeholder="https://monsaas.com" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">Contexte &amp; Objectif</label>
<textarea className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-medium resize-none" id="hotset-context" placeholder="J'ai peu de conversion sur le pricing..." rows="3"></textarea>
</div>
</div>
<button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-semibold text-lg shadow-lg shadow-slate-900/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2" onclick="submitHotSet()">
                Lancer le HotSet
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="w-full py-4 mt-2 text-slate-500 font-semibold text-sm hover:text-slate-800 transition-colors" onclick="closeHotSetModal()">Fermer</button>
</div>
</div>


    </>
  );
}
