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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- MOCK DATA ---
        const appointments = [
            { id: 1, customer: 'Mehmet Yılmaz', plate: '34 ABC 123', service: 'Periyodik Bakım', date: 'Bugün', time: '14:30', status: 'Bekliyor' },
            { id: 2, customer: 'Ayşe Kaya', plate: '06 XYZ 98', service: 'Fren Balata', date: 'Bugün', time: '16:00', status: 'Onaylandı' },
            { id: 3, customer: 'Caner Uğur', plate: '35 TT 2026', service: 'Motor Arıza', date: 'Dün', time: '10:00', status: 'Tamamlandı' },
        ];

        const customers = [
            { id: 1, name: 'Mehmet Yılmaz', phone: '0532 987 65 43', plate: '34 ABC 123', lastVisit: '12 Mayıs 2025' },
            { id: 2, name: 'Ayşe Kaya', phone: '0555 123 45 67', plate: '06 XYZ 98', lastVisit: '04 Şubat 2025' },
            { id: 3, name: 'Caner Uğur', phone: '0533 000 11 22', plate: '35 TT 2026', lastVisit: '20 Ocak 2025' },
        ];

        const stockItems = [
            { id: 1, name: 'Castrol 5W-30 Motor Yağı', qty: 2, status: 'Kritik', unit: 'Adet' },
            { id: 2, name: 'Bosch Silecek Takımı', qty: 15, status: 'Yeterli', unit: 'Takım' },
            { id: 3, name: 'Fren Balatası (Ön)', qty: 8, status: 'Yeterli', unit: 'Çift' },
            { id: 4, name: 'Hava Filtresi (Standart)', qty: 0, status: 'Tükendi', unit: 'Adet' },
        ];

        // --- NAVIGATION LOGIC ---
        function navigate(targetScreen) {
            const screens = ['screen-splash', 'screen-login', 'screen-onboarding', 'screen-main'];
            screens.forEach(s => {
                const el = document.getElementById(s);
                if (el) {
                    if (s === 'screen-' + targetScreen) {
                        el.classList.remove('hidden');
                        el.classList.add('flex');
                    } else {
                        el.classList.add('hidden');
                        el.classList.remove('flex');
                    }
                }
            });
            if (targetScreen === 'main') {
                switchTab('dashboard');
                renderData();
            }
        }

        // --- TAB LOGIC ---
        function switchTab(tabId) {
            const tabs = ['dashboard', 'appointments', 'customers', 'stock', 'profile'];
            tabs.forEach(t => {
                const el = document.getElementById('tab-' + t);
                const navBtn = document.getElementById('nav-' + t);
                if(el && navBtn) {
                    if (t === tabId) {
                        el.classList.remove('hidden');
                        el.classList.add('flex');
                        navBtn.classList.remove('text-slate-400');
                        navBtn.classList.add('text-slate-900');
                        // change icon to bold/filled visual if possible, here we rely on color change
                    } else {
                        el.classList.add('hidden');
                        el.classList.remove('flex');
                        navBtn.classList.remove('text-slate-900');
                        navBtn.classList.add('text-slate-400');
                    }
                }
            });
        }

        // --- MODAL LOGIC ---
        function openModal(modalId) {
            const el = document.getElementById(modalId);
            if(el) {
                el.classList.remove('hidden');
                el.classList.add('flex');
                // slight delay for animation
                setTimeout(() => {
                    el.classList.remove('translate-y-full');
                    el.classList.add('translate-y-0');
                }, 10);
            }
        }

        function closeModal(modalId) {
            const el = document.getElementById(modalId);
            if(el) {
                el.classList.remove('translate-y-0');
                el.classList.add('translate-y-full');
                setTimeout(() => {
                    el.classList.add('hidden');
                    el.classList.remove('flex');
                }, 300); // match transition duration
            }
        }

        // --- RENDER LOGIC ---
        function getStatusColor(status) {
            switch(status) {
                case 'Bekliyor': return 'bg-orange-100 text-orange-700 border-orange-200';
                case 'Onaylandı': return 'bg-blue-100 text-blue-700 border-blue-200';
                case 'Tamamlandı': return 'bg-green-100 text-green-700 border-green-200';
                case 'Kritik': return 'bg-orange-100 text-orange-700 border-orange-200';
                case 'Tükendi': return 'bg-red-100 text-red-700 border-red-200';
                default: return 'bg-slate-100 text-slate-700 border-slate-200';
            }
        }

        function createPlateHTML(plateStr) {
            return `
                <div class="flex items-stretch border border-slate-300 rounded overflow-hidden bg-white shadow-sm inline-flex h-6">
                    <div class="bg-blue-600 w-4 flex items-end justify-center pb-0.5"><span class="text-[8px] text-white font-semibold">TR</span></div>
                    <div class="px-2 flex items-center justify-center text-xs font-bold tracking-widest text-slate-900">${plateStr}</div>
                </div>
            `;
        }

        function renderData() {
            // Render Dashboard Appointments (Only Today/Waiting)
            const dashApptsList = document.getElementById('dashboard-appointments-list');
            dashApptsList.innerHTML = appointments.slice(0, 2).map(apt => `
                <div class="bg-white rounded-2xl p-4 border border-slate-200/60 shadow-sm flex flex-col gap-3">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <iconify-icon icon="solar:clock-circle-linear" class="text-orange-500 text-base"></iconify-icon> ${apt.time}
                        </div>
                        <span class="text-[10px] font-semibold px-2 py-0.5 rounded border ${getStatusColor(apt.status)}">${apt.status}</span>
                    </div>
                    <div class="flex flex-col gap-0.5">
                        <span class="text-sm font-semibold text-slate-900">${apt.customer}</span>
                        <div class="flex items-center justify-between mt-1">
                            <span class="text-xs text-slate-500 font-medium">${apt.service}</span>
                            ${createPlateHTML(apt.plate)}
                        </div>
                    </div>
                </div>
            `).join('');

            // Render All Appointments Tab
            const apptsList = document.getElementById('appointments-list');
            apptsList.innerHTML = appointments.map(apt => `
                <div class="bg-white rounded-2xl p-4 border border-slate-200/60 shadow-sm flex flex-col gap-3">
                    <div class="flex justify-between items-center">
                        <div class="flex items-center gap-2 text-xs font-semibold text-slate-700">
                            <span class="text-slate-400 font-medium">${apt.date}</span> • ${apt.time}
                        </div>
                        <span class="text-[10px] font-semibold px-2 py-0.5 rounded border ${getStatusColor(apt.status)}">${apt.status}</span>
                    </div>
                    <div class="flex flex-col gap-0.5">
                        <span class="text-sm font-semibold text-slate-900">${apt.customer}</span>
                        <div class="flex items-center justify-between mt-1">
                            <span class="text-xs text-slate-500 font-medium">${apt.service}</span>
                            ${createPlateHTML(apt.plate)}
                        </div>
                    </div>
                </div>
            `).join('');

            // Render Customers
            const customersList = document.getElementById('customers-list');
            customersList.innerHTML = customers.map(c => `
                <div onclick="openModal('modal-customer-detail')" class="bg-white rounded-2xl p-4 border border-slate-200/60 shadow-sm flex justify-between items-center active:bg-slate-50 transition-colors">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-semibold text-sm border border-slate-200">
                            ${c.name.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm font-semibold text-slate-900">${c.name}</span>
                            <span class="text-xs text-slate-500 font-medium">${c.phone}</span>
                        </div>
                    </div>
                    <div class="flex flex-col items-end gap-1">
                        ${createPlateHTML(c.plate)}
                        <span class="text-[10px] text-slate-400 font-medium">Son: ${c.lastVisit.split(' ')[0] + ' ' + c.lastVisit.split(' ')[1]}</span>
                    </div>
                </div>
            `).join('');

            // Render Stock
            const stockListElement = document.getElementById('stock-list');
            stockListElement.innerHTML = stockItems.map(s => `
                <div class="bg-white rounded-2xl p-4 border border-slate-200/60 shadow-sm flex justify-between items-center">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400 border border-slate-100">
                            <iconify-icon icon="solar:box-linear" class="text-xl"></iconify-icon>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm font-semibold text-slate-900 line-clamp-1 pr-2">${s.name}</span>
                            <span class="text-[10px] font-semibold px-2 py-0.5 rounded border w-max mt-1 ${getStatusColor(s.status)}">${s.status}</span>
                        </div>
                    </div>
                    <div class="flex flex-col items-end">
                        <span class="text-lg font-semibold tracking-tight text-slate-900">${s.qty}</span>
                        <span class="text-[10px] text-slate-400 font-medium">${s.unit}</span>
                    </div>
                </div>
            `).join('');
        }

        // --- INIT ---
        window.onload = () => {
            // Splash screen demo sequence
            setTimeout(() => {
                navigate('login');
            }, 2000);
        };
    
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
      

<div className="w-full max-w-md h-[100dvh] bg-slate-50 relative overflow-hidden shadow-2xl sm:rounded-[2rem] sm:h-[850px] sm:border-8 border-slate-900 flex flex-col" id="app">

<div className="absolute inset-0 bg-slate-900 z-50 flex flex-col items-center justify-center transition-opacity duration-500" id="screen-splash">
<div className="flex flex-col items-center gap-4">
<div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
<iconify-icon className="text-white text-3xl" icon="solar:wrench-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h1 className="text-2xl tracking-tighter font-semibold text-white">USTAPLAN</h1>
</div>
<div className="absolute bottom-12 flex flex-col items-center gap-2">
<div className="w-6 h-6 border-2 border-slate-700 border-t-orange-500 rounded-full animate-spin"></div>
<span className="text-xs text-slate-400 font-medium">İşiniz dijitalde güvende</span>
</div>
</div>

<div className="absolute inset-0 bg-white z-40 hidden flex-col p-6 overflow-y-auto hide-scroll" id="screen-login">
<div className="pt-12 pb-8 flex flex-col items-center">
<h1 className="text-2xl tracking-tighter font-semibold text-slate-900">USTAPLAN</h1>
<p className="text-sm text-slate-500 mt-2 font-medium">İşletmenizi yönetmeye başlayın</p>
</div>
<div className="flex flex-col gap-4 mt-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700 pl-1">Telefon veya E-posta</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 text-lg" icon="solar:user-linear"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400" placeholder="05XX XXX XX XX" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700 pl-1">Şifre</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 text-lg" icon="solar:lock-password-linear"></iconify-icon>
</div>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3.5 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400" placeholder="••••••••" type="password"/>
</div>
</div>
<div className="flex justify-end">
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">Şifremi Unuttum</button>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-3.5 text-sm font-medium mt-4 shadow-sm transition-all active:scale-[0.98]" onclick="navigate('onboarding')">
                    Giriş Yap
                </button>
<div className="relative flex items-center py-4">
<div className="flex-grow border-t border-slate-200"></div>
<span className="flex-shrink-0 mx-4 text-xs text-slate-400 font-medium">veya</span>
<div className="flex-grow border-t border-slate-200"></div>
</div>
<button className="w-full bg-orange-50 hover:bg-orange-100 text-orange-600 border border-orange-200 rounded-xl py-3.5 text-sm font-medium transition-all active:scale-[0.98]">
                    Hemen Başla / Demo Talep Et
                </button>
</div>
</div>

<div className="absolute inset-0 bg-white z-40 hidden flex-col p-6" id="screen-onboarding">
<div className="flex-1 flex flex-col justify-center items-center text-center gap-6 mt-12">
<div className="w-64 h-64 bg-slate-50 rounded-full flex items-center justify-center border border-slate-100 mb-4 shadow-sm relative">
<div className="absolute inset-0 border-2 border-orange-100 rounded-full animate-pulse-subtle scale-110"></div>
<iconify-icon className="text-6xl text-slate-900" icon="solar:calendar-mark-linear" strokeWidth="1.5"></iconify-icon>
<div className="absolute bottom-4 right-4 bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
<iconify-icon className="text-xl" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
<h2 className="text-2xl tracking-tight font-semibold text-slate-900">Randevuları Yönet</h2>
<p className="text-sm text-slate-500 font-medium px-4 leading-relaxed">Müşterilerinizi bekletmeyin. Tüm işlerinizi ve randevularınızı tek bir ekrandan kolayca planlayın.</p>
</div>
<div className="flex flex-col gap-6 pb-8">
<div className="flex justify-center gap-2">
<div className="w-6 h-1.5 bg-slate-900 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
<div className="w-1.5 h-1.5 bg-slate-200 rounded-full"></div>
</div>
<button className="w-full bg-slate-900 text-white rounded-xl py-3.5 text-sm font-medium shadow-sm active:scale-[0.98]" onclick="navigate('main')">
                    Başla
                </button>
</div>
</div>

<div className="absolute inset-0 bg-slate-50 z-30 hidden flex-col" id="screen-main">

<div className="flex-1 overflow-y-auto hide-scroll pb-20 relative" id="main-content-area">

<div className="flex flex-col min-h-full pb-6" id="tab-dashboard">

<div className="bg-slate-900 text-white px-5 pt-12 pb-6 rounded-b-3xl shadow-md">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border border-slate-700">
<span className="text-sm font-medium text-orange-400">AU</span>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-400 font-medium">İyi çalışmalar,</span>
<span className="text-sm font-semibold tracking-tight">Ahmet Usta</span>
</div>
</div>
<button className="relative p-2 bg-slate-800 rounded-full border border-slate-700" onclick="openModal('modal-notifications')">
<iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full border border-slate-800"></span>
</button>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 flex flex-col gap-1">
<span className="text-xs text-slate-400 font-medium">Bugünkü Randevu</span>
<span className="text-xl font-semibold tracking-tight text-white">4</span>
</div>
<div className="bg-orange-500 rounded-2xl p-4 flex flex-col gap-1 shadow-inner">
<span className="text-xs text-orange-100 font-medium">Bekleyen İşler</span>
<span className="text-xl font-semibold tracking-tight text-white">12</span>
</div>
</div>
</div>

<div className="px-5 mt-6 flex flex-col gap-3">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider pl-1">Hızlı İşlemler</span>
<div className="flex gap-3 overflow-x-auto hide-scroll pb-2 -mx-5 px-5">
<button className="flex-shrink-0 w-24 bg-white border border-slate-200/60 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform" onclick="openModal('modal-new-appointment')">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900">
<iconify-icon className="text-xl" icon="solar:calendar-add-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600 text-center">Randevu<br/>Ekle</span>
</button>
<button className="flex-shrink-0 w-24 bg-white border border-slate-200/60 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform" onclick="openModal('modal-plate-inquiry')">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600 text-center">Araç<br/>Sorgula</span>
</button>
<button className="flex-shrink-0 w-24 bg-white border border-slate-200/60 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform" onclick="switchTab('customers')">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-900">
<iconify-icon className="text-xl" icon="solar:user-plus-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600 text-center">Müşteri<br/>Ekle</span>
</button>
<button className="flex-shrink-0 w-24 bg-white border border-slate-200/60 rounded-2xl p-3 flex flex-col items-center justify-center gap-2 shadow-sm active:scale-95 transition-transform" onclick="openModal('modal-revenue')">
<div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon className="text-xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-600 text-center">Gelir /<br/>Ciro</span>
</button>
</div>
</div>

<div className="px-5 mt-4 flex flex-col gap-3">
<div className="flex justify-between items-center pl-1">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Yaklaşan İşler</span>
<button className="text-xs font-medium text-orange-600" onclick="switchTab('appointments')">Tümünü Gör</button>
</div>
<div className="flex flex-col gap-3" id="dashboard-appointments-list">

</div>
</div>
</div>

<div className="hidden flex-col min-h-full px-5 pt-12 pb-6" id="tab-appointments">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl tracking-tight font-semibold text-slate-900">Randevular</h2>
<button className="bg-slate-100 p-2 rounded-xl text-slate-600 border border-slate-200">
<iconify-icon className="text-lg" icon="solar:calendar-date-linear"></iconify-icon>
</button>
</div>

<div className="flex gap-2 mb-6 overflow-x-auto hide-scroll pb-1">
<button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-medium whitespace-nowrap">Bugün</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-medium whitespace-nowrap">Yarın</button>
<button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-xs font-medium whitespace-nowrap">Bu Hafta</button>
</div>
<div className="flex flex-col gap-3" id="appointments-list">

</div>

<button className="fixed bottom-24 right-5 w-14 h-14 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30 active:scale-95 transition-transform z-10" onclick="openModal('modal-new-appointment')">
<iconify-icon className="text-2xl" icon="solar:add-linear"></iconify-icon>
</button>
</div>

<div className="hidden flex-col min-h-full px-5 pt-12 pb-6" id="tab-customers">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl tracking-tight font-semibold text-slate-900">Müşteriler</h2>
</div>

<div className="relative mb-6">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400 text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="w-full bg-white border border-slate-200 shadow-sm rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all placeholder:text-slate-400" placeholder="İsim, telefon veya plaka ara..." type="text"/>
</div>
<div className="flex flex-col gap-3" id="customers-list">

</div>
</div>

<div className="hidden flex-col min-h-full px-5 pt-12 pb-6" id="tab-stock">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl tracking-tight font-semibold text-slate-900">Stok Takibi</h2>
<button className="text-orange-600 text-sm font-medium flex items-center gap-1">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon> Ürün Ekle
                        </button>
</div>
<div className="flex flex-col gap-3" id="stock-list">

</div>
</div>

<div className="hidden flex-col min-h-full px-5 pt-12 pb-6" id="tab-profile">
<h2 className="text-xl tracking-tight font-semibold text-slate-900 mb-6">İşletmem</h2>
<div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-sm flex items-center gap-4 mb-6">
<div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center border border-slate-200">
<iconify-icon className="text-2xl text-slate-400" icon="solar:shop-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold text-slate-900">Ahmet Oto Servis</span>
<span className="text-xs text-slate-500 font-medium">0532 123 45 67</span>
<span className="text-xs text-green-600 font-medium mt-1 bg-green-50 px-2 py-0.5 rounded inline-block w-max">Pro Paket</span>
</div>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider pl-1 mb-1">Yönetim Araçları</span>
<button className="w-full bg-white border border-slate-200/60 rounded-xl p-4 flex items-center justify-between shadow-sm active:bg-slate-50" onclick="openModal('modal-revenue')">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center"><iconify-icon className="text-lg" icon="solar:wallet-linear"></iconify-icon></div>
<span className="text-sm font-medium text-slate-700">Gelir ve Ciro</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full bg-white border border-slate-200/60 rounded-xl p-4 flex items-center justify-between shadow-sm active:bg-slate-50" onclick="openModal('modal-campaign')">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center"><iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon></div>
<span className="text-sm font-medium text-slate-700">Kampanya Yönetimi</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="w-full bg-white border border-slate-200/60 rounded-xl p-4 flex items-center justify-between shadow-sm active:bg-slate-50" onclick="openModal('modal-website')">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center"><iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon></div>
<span className="text-sm font-medium text-slate-700">Ücretsiz Web Sitem</span>
</div>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="mt-8 flex justify-center">
<button className="text-sm font-medium text-red-500 flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-50" onclick="navigate('login')">
<iconify-icon icon="solar:logout-2-linear"></iconify-icon> Çıkış Yap
                        </button>
</div>
</div>
</div>

<nav className="absolute bottom-0 w-full bg-white border-t border-slate-200/60 flex justify-between items-center pb-safe z-20 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
<div className="flex w-full justify-around pt-3 pb-4">
<button className="flex flex-col items-center gap-1 w-16 text-slate-900 transition-colors" id="nav-dashboard" onclick="switchTab('dashboard')">
<iconify-icon className="text-2xl" icon="solar:home-smile-linear"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Ana Sayfa</span>
</button>
<button className="flex flex-col items-center gap-1 w-16 text-slate-400 hover:text-slate-900 transition-colors" id="nav-appointments" onclick="switchTab('appointments')">
<iconify-icon className="text-2xl" icon="solar:calendar-linear"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Randevu</span>
</button>
<button className="flex flex-col items-center gap-1 w-16 text-slate-400 hover:text-slate-900 transition-colors" id="nav-customers" onclick="switchTab('customers')">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Müşteri</span>
</button>
<button className="flex flex-col items-center gap-1 w-16 text-slate-400 hover:text-slate-900 transition-colors" id="nav-stock" onclick="switchTab('stock')">
<iconify-icon className="text-2xl" icon="solar:box-linear"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Stok</span>
</button>
<button className="flex flex-col items-center gap-1 w-16 text-slate-400 hover:text-slate-900 transition-colors" id="nav-profile" onclick="switchTab('profile')">
<iconify-icon className="text-2xl" icon="solar:settings-linear"></iconify-icon>
<span className="text-[10px] font-medium tracking-wide">Ayarlar</span>
</button>
</div>
</nav>
</div>


<div className="absolute inset-0 bg-slate-50 z-50 hidden flex-col transition-transform transform translate-y-full duration-300" id="modal-new-appointment">
<div className="bg-white border-b border-slate-200/60 px-5 pt-12 pb-4 flex items-center justify-between sticky top-0 z-10">
<button className="p-2 -ml-2 text-slate-600 rounded-full active:bg-slate-100" onclick="closeModal('modal-new-appointment')">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Yeni Randevu</h3>
<div className="w-8"></div> 
</div>
<div className="flex-1 overflow-y-auto hide-scroll p-5 flex flex-col gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700 pl-1">Müşteri Adı</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-slate-400 shadow-sm placeholder:text-slate-400" placeholder="Örn: Mehmet Yılmaz" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700 pl-1">Telefon</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-slate-400 shadow-sm placeholder:text-slate-400" placeholder="05XX XXX XX XX" type="tel"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700 pl-1">Araç Plakası</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm font-medium tracking-widest uppercase focus:outline-none focus:border-slate-400 shadow-sm placeholder:text-slate-400 placeholder:tracking-normal placeholder:font-normal" placeholder="34 ABC 123" type="text"/>
</div>
<div className="flex gap-4">
<div className="flex flex-col gap-1.5 flex-1">
<label className="text-xs font-medium text-slate-700 pl-1">Tarih</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-slate-400 shadow-sm text-slate-700" type="date"/>
</div>
<div className="flex flex-col gap-1.5 flex-1">
<label className="text-xs font-medium text-slate-700 pl-1">Saat</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-slate-400 shadow-sm text-slate-700" type="time"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700 pl-1">Hizmet Türü</label>
<div className="relative">
<select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-slate-400 shadow-sm appearance-none text-slate-700">
<option>Periyodik Bakım</option>
<option>Motor / Mekanik</option>
<option>Elektrik / Elektronik</option>
<option>Fren Sistemi</option>
<option>Diğer</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-1.5 pb-20">
<label className="text-xs font-medium text-slate-700 pl-1">Notlar</label>
<textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-400 shadow-sm placeholder:text-slate-400 h-24 resize-none" placeholder="Eklemek istediğiniz notlar..."></textarea>
</div>
</div>
<div className="absolute bottom-0 w-full bg-white p-5 border-t border-slate-200/60 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
<button className="w-full bg-slate-900 text-white rounded-xl py-3.5 text-sm font-medium shadow-sm active:scale-[0.98]" onclick="closeModal('modal-new-appointment')">
                    Randevuyu Kaydet
                </button>
</div>
</div>

<div className="absolute inset-0 bg-slate-50 z-50 hidden flex-col transition-transform transform translate-y-full duration-300" id="modal-plate-inquiry">
<div className="bg-white border-b border-slate-200/60 px-5 pt-12 pb-4 flex items-center justify-between sticky top-0 z-10">
<button className="p-2 -ml-2 text-slate-600 rounded-full active:bg-slate-100" onclick="closeModal('modal-plate-inquiry')">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Araç / Plaka Sorgula</h3>
<div className="w-8"></div>
</div>
<div className="p-5 flex flex-col gap-6">
<div className="flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-4 text-center text-xl font-semibold tracking-widest uppercase focus:outline-none focus:border-slate-400 shadow-sm placeholder:text-slate-300 placeholder:tracking-normal placeholder:font-normal" id="plate-input" placeholder="PLAKA GİRİNİZ" type="text"/>
<button className="absolute right-2 top-2 bottom-2 bg-orange-500 text-white px-4 rounded-lg text-sm font-medium" onclick="document.getElementById('plate-result').classList.remove('hidden')">Sorgula</button>
</div>
<span className="text-xs text-slate-500 text-center font-medium">Geçmiş bakım kayıtlarını görmek için plakayı girin.</span>
</div>

<div className="hidden animate-fade-in flex flex-col gap-4" id="plate-result">
<div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col gap-4">
<div className="flex justify-between items-start">

<div className="flex items-stretch border-2 border-slate-300 rounded overflow-hidden bg-white shadow-sm inline-flex h-10">
<div className="bg-blue-600 w-6 flex items-end justify-center pb-0.5">
<span className="text-[10px] text-white font-semibold tracking-tighter">TR</span>
</div>
<div className="px-3 flex items-center justify-center text-lg font-bold tracking-widest text-slate-900">
                                    34 XYZ 89
                                </div>
</div>
<span className="bg-green-100 text-green-700 text-xs font-semibold px-2.5 py-1 rounded-md">Kayıtlı</span>
</div>
<div className="flex flex-col gap-1 border-t border-slate-100 pt-3">
<span className="text-xs text-slate-500 font-medium">Araç Sahibi</span>
<span className="text-sm font-semibold text-slate-900">Kemal Sunal</span>
<span className="text-xs text-slate-500 font-medium flex items-center gap-1"><iconify-icon icon="solar:phone-linear"></iconify-icon> 0532 *** ** 12</span>
</div>
<div className="bg-slate-50 rounded-xl p-3 flex justify-between items-center border border-slate-100">
<div className="flex flex-col">
<span className="text-xs text-slate-500 font-medium">Son Ziyaret</span>
<span className="text-sm font-semibold text-slate-900">12 Mayıs 2025</span>
</div>
<div className="flex flex-col text-right">
<span className="text-xs text-slate-500 font-medium">İşlem</span>
<span className="text-sm font-semibold text-slate-900">Baskı Balata</span>
</div>
</div>
<button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl py-3 text-sm font-medium transition-colors" onclick="closeModal('modal-plate-inquiry'); openModal('modal-new-appointment');">
                            Bu Araca Randevu Oluştur
                        </button>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-slate-50 z-50 hidden flex-col transition-transform transform translate-y-full duration-300" id="modal-customer-detail">
<div className="bg-slate-900 px-5 pt-12 pb-6 flex flex-col relative text-white">
<button className="absolute top-12 left-5 p-2 -ml-2 text-white/80 rounded-full active:bg-white/10" onclick="closeModal('modal-customer-detail')">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="flex flex-col items-center mt-4">
<div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-2xl font-semibold mb-3">
                        MY
                    </div>
<h2 className="text-xl font-semibold tracking-tight">Mehmet Yılmaz</h2>
<span className="text-sm text-slate-400 font-medium mt-1">0532 987 65 43</span>
</div>
<div className="flex justify-center gap-4 mt-6">
<button className="flex flex-col items-center gap-1.5 w-16">
<div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"><iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon></div>
<span className="text-[10px] font-medium text-slate-300">Ara</span>
</button>
<button className="flex flex-col items-center gap-1.5 w-16">
<div className="w-12 h-12 bg-slate-800 border border-slate-700 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"><iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon></div>
<span className="text-[10px] font-medium text-slate-300">Mesaj</span>
</button>
<button className="flex flex-col items-center gap-1.5 w-16">
<div className="w-12 h-12 bg-slate-800 border border-slate-700 text-white rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"><iconify-icon className="text-xl" icon="solar:calendar-add-linear"></iconify-icon></div>
<span className="text-[10px] font-medium text-slate-300">Randevu</span>
</button>
</div>
</div>
<div className="flex-1 overflow-y-auto hide-scroll p-5 flex flex-col gap-6">
<div className="bg-white rounded-2xl p-4 border border-slate-200/60 shadow-sm flex flex-col gap-3">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Kayıtlı Araçlar</span>
<div className="flex items-center justify-between border border-slate-100 bg-slate-50 p-3 rounded-xl">
<div className="flex items-stretch border border-slate-300 rounded overflow-hidden bg-white shadow-sm inline-flex h-8">
<div className="bg-blue-600 w-5 flex items-end justify-center pb-0.5"><span className="text-[10px] text-white font-semibold tracking-tighter">TR</span></div>
<div className="px-2 flex items-center justify-center text-sm font-bold tracking-widest text-slate-900">34 ABC 123</div>
</div>
<span className="text-xs text-slate-500 font-medium">Ford Focus 2018</span>
</div>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider pl-1">Geçmiş İşlemler</span>
<div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm flex flex-col divide-y divide-slate-100">
<div className="p-4 flex justify-between items-center">
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-slate-900">Periyodik Bakım</span>
<span className="text-xs text-slate-500 font-medium">12 Mayıs 2025 • Tamamlandı</span>
</div>
<span className="text-sm font-semibold text-slate-900">₺3.500</span>
</div>
<div className="p-4 flex justify-between items-center">
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-slate-900">Fren Balata Değişimi</span>
<span className="text-xs text-slate-500 font-medium">04 Şubat 2025 • Tamamlandı</span>
</div>
<span className="text-sm font-semibold text-slate-900">₺1.200</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-slate-50 z-50 hidden flex-col transition-transform transform translate-y-full duration-300" id="modal-revenue">
<div className="bg-white border-b border-slate-200/60 px-5 pt-12 pb-4 flex items-center justify-between sticky top-0 z-10">
<button className="p-2 -ml-2 text-slate-600 rounded-full active:bg-slate-100" onclick="closeModal('modal-revenue')">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Gelir &amp; Ciro Özeti</h3>
<div className="w-8"></div>
</div>
<div className="p-5 flex flex-col gap-6 overflow-y-auto hide-scroll pb-20">
<div className="bg-slate-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10"></div>
<span className="text-xs text-slate-300 font-medium">Bu Ayki Tahmini Ciro</span>
<div className="text-3xl font-semibold tracking-tight mt-1 mb-4">₺45.250<span className="text-lg text-slate-400 font-normal">,00</span></div>
<div className="flex gap-4 border-t border-slate-700/50 pt-4">
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 uppercase tracking-wider">İşlem Adedi</span>
<span className="text-sm font-medium mt-0.5">24 Araç</span>
</div>
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 uppercase tracking-wider">Geçen Aya Göre</span>
<span className="text-sm font-medium text-green-400 mt-0.5 flex items-center gap-1"><iconify-icon icon="solar:course-up-linear"></iconify-icon> %12</span>
</div>
</div>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider pl-1">En Çok Gelir Getirenler</span>
<div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-4 flex flex-col gap-4">
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-xs font-medium">
<span className="text-slate-700">Periyodik Bakım</span>
<span className="text-slate-900">₺22.000</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
<div className="bg-orange-500 h-2 rounded-full w-[60%]"></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-xs font-medium">
<span className="text-slate-700">Motor / Mekanik</span>
<span className="text-slate-900">₺15.000</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
<div className="bg-slate-800 h-2 rounded-full w-[40%]"></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex justify-between text-xs font-medium">
<span className="text-slate-700">Elektrik Aksam</span>
<span className="text-slate-900">₺8.250</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
<div className="bg-slate-400 h-2 rounded-full w-[25%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-slate-50 z-50 hidden flex-col transition-transform transform translate-y-full duration-300" id="modal-campaign">
<div className="bg-white border-b border-slate-200/60 px-5 pt-12 pb-4 flex items-center justify-between sticky top-0 z-10">
<button className="p-2 -ml-2 text-slate-600 rounded-full active:bg-slate-100" onclick="closeModal('modal-campaign')">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Kampanya Yönetimi</h3>
<div className="w-8"></div>
</div>
<div className="p-5 flex flex-col gap-5 overflow-y-auto hide-scroll pb-20">
<div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex gap-3">
<iconify-icon className="text-blue-500 text-xl flex-shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-blue-800 font-medium leading-relaxed">Müşterilerinize toplu SMS veya WhatsApp mesajı göndererek kış bakımı, yaz bakımı gibi dönemlerde işlerinizi artırın.</p>
</div>
<div className="flex flex-col gap-1.5 mt-2">
<label className="text-xs font-medium text-slate-700 pl-1">Hedef Kitle</label>
<div className="relative">
<select className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-slate-400 shadow-sm appearance-none text-slate-700">
<option>Son 6 aydır gelmeyenler (45 Kişi)</option>
<option>Tüm Müşteriler (120 Kişi)</option>
<option>Sadece VIP Müşteriler (12 Kişi)</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700 pl-1">Mesaj Şablonu</label>
<textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-400 shadow-sm text-slate-700 h-28 resize-none">Değerli müşterimiz, kış aylarına girmeden aracınızın periyodik kış bakımını yaptırmayı unutmayın. Bu aya özel %10 indirim fırsatı için servisimize bekleriz. Ahmet Oto Servis</textarea>
<span className="text-[10px] text-slate-400 text-right pr-1">160 Karakter • 1 SMS</span>
</div>
<button className="w-full bg-slate-900 text-white rounded-xl py-3.5 text-sm font-medium mt-2 shadow-sm active:scale-[0.98]">
                    Kampanyayı Gönder
                </button>
<div className="mt-4 flex flex-col gap-3">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider pl-1">Geçmiş Gönderimler</span>
<div className="bg-white rounded-xl border border-slate-200 p-3 flex justify-between items-center shadow-sm">
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">Yaz Bakımı İndirimi</span>
<span className="text-xs text-slate-500 font-medium">10 Haziran 2025 • 85 Kişi</span>
</div>
<span className="bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-1 rounded">Tamamlandı</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-slate-50 z-50 hidden flex-col transition-transform transform translate-y-full duration-300" id="modal-website">
<div className="bg-white border-b border-slate-200/60 px-5 pt-12 pb-4 flex items-center justify-between sticky top-0 z-10">
<button className="p-2 -ml-2 text-slate-600 rounded-full active:bg-slate-100" onclick="closeModal('modal-website')">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Web Sitesi</h3>
<div className="w-8"></div>
</div>
<div className="p-5 flex flex-col gap-6 overflow-y-auto hide-scroll pb-20">
<div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-white shadow-lg flex flex-col items-center text-center gap-3">
<div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-2">
<iconify-icon className="text-3xl text-orange-400" icon="solar:global-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight">Dijitalde Görünür Olun</h4>
<p className="text-xs text-slate-300 font-medium leading-relaxed">İşletmenize özel, arama motorlarına uyumlu ücretsiz web siteniz yayına hazır. Müşterileriniz sizi Google'da daha kolay bulsun.</p>
</div>
<div className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<span className="text-sm font-semibold text-slate-900">Site Durumu</span>
<div className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-semibold text-green-600">Yayında</span>
</div>
</div>
<div className="border-t border-slate-100 pt-3 flex flex-col gap-1">
<span className="text-xs text-slate-500 font-medium">Domain (Alan Adı)</span>
<span className="text-sm font-medium text-blue-600">ahmetotoservis.ustaplan.com</span>
</div>
<div className="flex gap-3 mt-2">
<button className="flex-1 bg-white border border-slate-200 text-slate-700 rounded-xl py-2.5 text-xs font-semibold active:bg-slate-50 transition-colors">
                            Düzenle
                        </button>
<button className="flex-1 bg-slate-900 text-white rounded-xl py-2.5 text-xs font-semibold active:scale-95 transition-transform shadow-sm">
                            Sitemi Görüntüle
                        </button>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-slate-50 z-50 hidden flex-col transition-transform transform translate-y-full duration-300" id="modal-notifications">
<div className="bg-white border-b border-slate-200/60 px-5 pt-12 pb-4 flex items-center justify-between sticky top-0 z-10">
<button className="p-2 -ml-2 text-slate-600 rounded-full active:bg-slate-100" onclick="closeModal('modal-notifications')">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h3 className="text-base font-semibold tracking-tight text-slate-900">Bildirimler</h3>
<div className="w-8"></div>
</div>
<div className="p-5 flex flex-col gap-3 overflow-y-auto hide-scroll pb-20">
<div className="bg-white rounded-xl border border-slate-200 p-4 flex gap-3 shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500"></div>
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0 text-orange-600">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-slate-900">Yaklaşan Randevu</span>
<span className="text-xs text-slate-500 font-medium">Mehmet Yılmaz (34 ABC 123) için randevu saati yaklaşıyor. 14:30.</span>
<span className="text-[10px] text-slate-400 mt-1">10 dk önce</span>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-4 flex gap-3 shadow-sm">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
<iconify-icon className="text-lg" icon="solar:box-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-sm font-semibold text-slate-900">Kritik Stok Uyarısı</span>
<span className="text-xs text-slate-500 font-medium">Castrol 5W-30 Motor Yağı stoğunuz 2 adede düştü.</span>
<span className="text-[10px] text-slate-400 mt-1">2 saat önce</span>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
