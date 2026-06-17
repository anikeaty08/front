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
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
slate: { 850: '#1f2937', 900: '#0f172a' },
brand: { 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca' }
},
fontSize: { xxs: '0.65rem' },
animation: {
'blob': 'blob 7s infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        let currentRole = 'vendor'; 

        function switchRole(role) {
            currentRole = role;
            document.querySelectorAll('.role-tab').forEach(el => {
                el.classList.remove('active', 'bg-white', 'shadow-sm', 'text-slate-900', 'ring-1', 'ring-black/5');
                el.classList.add('text-slate-500');
            });
            const activeTab = document.getElementById('tab-' + role);
            activeTab.classList.add('active', 'bg-white', 'shadow-sm', 'text-slate-900', 'ring-1', 'ring-black/5');
            activeTab.classList.remove('text-slate-500');
            
            const title = document.getElementById('auth-title');
            const sub = document.getElementById('auth-subtitle');
            const email = document.getElementById('email-input');
            const registerLink = document.getElementById('register-link');

            if (role === 'admin') {
                title.innerText = 'Admin Paneli';
                sub.innerText = 'Korporativ idarəetmə mərkəzi.';
                email.value = 'admin@procureflow.az';
                registerLink.classList.add('hidden');
            } else {
                title.innerText = 'Xoş Gəlmisiniz';
                sub.innerText = 'Təchizatçı portalına daxil olun.';
                email.value = 'info@vendor.az';
                registerLink.classList.remove('hidden');
            }
        }

        function nav(pageId) {
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            const activeBtn = Array.from(document.querySelectorAll('.nav-item')).find(el => el.getAttribute('onclick').includes(pageId));
            if(activeBtn) activeBtn.classList.add('active');

            document.querySelectorAll('.page-content').forEach(el => el.classList.add('hidden'));
            const target = document.getElementById('page-' + pageId);
            if(target) target.classList.remove('hidden');

            const titles = {
                'dashboard': 'Dashboard', 'admin-dashboard': 'Admin Overview',
                'rfq-list': 'Sorğular', 'admin-rfq': 'Sorğu İdarəetməsi',
                'po-list': 'Sifarişlər', 'admin-vendors': 'Vendor Bazası',
                'profile': 'Profil', 'tracking-list': 'İzləmə',
                'admin-compare': 'Müqayisə Analizi', 'admin-performance': 'Vendor Reytinqi'
            };
            if(document.getElementById('page-title') && titles[pageId]) document.getElementById('page-title').innerText = titles[pageId];
        }

        function toggleAuth(type) {
            document.getElementById('login-form').classList.add('hidden');
            document.getElementById('register-form').classList.add('hidden');
            document.getElementById(type + '-form').classList.remove('hidden');
        }

        function toggleProposalMode(mode) {
            if(mode === 'manual') {
                document.getElementById('prop-manual').classList.remove('hidden');
                document.getElementById('prop-file').classList.add('hidden');
                document.getElementById('prop-tab-manual').classList.add('bg-white', 'shadow-sm', 'text-slate-900');
                document.getElementById('prop-tab-manual').classList.remove('text-slate-500');
                document.getElementById('prop-tab-file').classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
                document.getElementById('prop-tab-file').classList.add('text-slate-500');
            } else {
                document.getElementById('prop-manual').classList.add('hidden');
                document.getElementById('prop-file').classList.remove('hidden');
                document.getElementById('prop-tab-file').classList.add('bg-white', 'shadow-sm', 'text-slate-900');
                document.getElementById('prop-tab-file').classList.remove('text-slate-500');
                document.getElementById('prop-tab-manual').classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
                document.getElementById('prop-tab-manual').classList.add('text-slate-500');
            }
        }

        function handleLogin(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalContent = btn.innerHTML;
            btn.innerHTML = '<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="20"></span>';
            setTimeout(() => {
                document.getElementById('auth-view').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('auth-view').classList.add('hidden');
                    document.getElementById('app-view').classList.remove('hidden');
                    if (currentRole === 'admin') {
                        document.getElementById('nav-vendor').classList.add('hidden');
                        document.getElementById('nav-admin').classList.remove('hidden');
                        document.getElementById('logo-bg').classList.remove('from-brand-600', 'to-indigo-500');
                        document.getElementById('logo-bg').classList.add('bg-slate-900');
                        document.getElementById('user-name').innerText = "Admin User";
                        nav('admin-dashboard');
                    } else {
                        document.getElementById('nav-vendor').classList.remove('hidden');
                        document.getElementById('nav-admin').classList.add('hidden');
                        nav('dashboard');
                    }
                }, 700);
            }, 1000);
        }

        function handleRegister(e) {
            e.preventDefault();
            alert("Müraciət göndərildi! Sizinlə əlaqə saxlanılacaq.");
            toggleAuth('login');
        }
        function submitProposal(e) {
            e.preventDefault();
            alert("Təklif göndərildi!");
            nav('rfq-list');
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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%236366f1\' fillOpacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
</div>



<div className="flex w-full h-full absolute z-50 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] bg-white/50 backdrop-blur-sm" id="auth-view">

<div className="hidden lg:flex w-5/12 bg-slate-900 flex-col justify-between p-12 relative overflow-hidden text-white">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-violet-800 opacity-90"></div>

<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full animate-[spin_40s_linear_infinite]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/20 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 perspective-1000">
<div className="absolute top-0 right-[-40px] w-48 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-2xl animate-float" style={{animationDelay: '1s'}}>
<div className="h-2 w-12 bg-white/30 rounded mb-2"></div>
<div className="h-2 w-24 bg-white/20 rounded mb-4"></div>
<div className="flex gap-2 mb-2"><div className="h-6 w-6 rounded-full bg-emerald-400/80"></div><div className="h-2 w-16 bg-white/20 rounded mt-2"></div></div>
</div>
<div className="absolute bottom-10 left-[-40px] w-56 bg-white/20 backdrop-blur-xl border border-white/30 rounded-xl p-5 shadow-2xl animate-float">
<div className="flex justify-between items-center mb-4">
<div className="h-8 w-8 rounded-lg bg-indigo-500 flex items-center justify-center"><span className="iconify" data-icon="lucide:check" data-width="16"></span></div>
<div className="h-2 w-10 bg-white/40 rounded"></div>
</div>
<div className="h-2 w-full bg-white/20 rounded mb-2"></div>
<div className="h-2 w-2/3 bg-white/20 rounded"></div>
</div>
</div>
</div>
<div className="relative z-10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center border border-white/20 backdrop-blur">
<span className="iconify" data-icon="lucide:boxes" data-width="18"></span>
</div>
<span className="text-xl font-bold tracking-tight">ProcureFlow</span>
</div>
</div>
<div className="relative z-10 max-w-sm">
<h1 className="text-4xl font-bold tracking-tight mb-4 leading-tight">Gələcəyin Satınalma Ekosistemi</h1>
<p className="text-indigo-200 leading-relaxed text-sm font-light">Süni intellekt dəstəkli təhlillər və real vaxt rejimində izləmə ilə işinizi sürətləndirin.</p>
</div>
<div className="relative z-10 text-xs text-indigo-300/60 font-medium">v2.4.0 (Stable)</div>
</div>

<div className="flex-1 flex flex-col justify-center items-center p-8 overflow-y-auto w-full relative">
<div className="w-full max-w-md">

<div className="fade-in" id="login-form">
<div className="mb-10 text-center">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mx-auto mb-4 text-brand-600 border border-indigo-100 shadow-sm">
<span className="iconify" data-icon="lucide:lock-keyhole" data-width="24"></span>
</div>
<h2 className="text-2xl font-bold tracking-tight text-slate-900" id="auth-title">Xoş Gəlmisiniz</h2>
<p className="mt-2 text-sm text-slate-500" id="auth-subtitle">Davam etmək üçün hesab növünü seçin və giriş edin.</p>
</div>
<div className="flex p-1 bg-slate-100/80 rounded-xl mb-8 p-1.5 border border-slate-200">
<button className="role-tab flex-1 py-2.5 text-sm rounded-lg flex items-center justify-center gap-2 font-medium transition-all text-slate-500 hover:text-slate-900" id="tab-admin" onclick="switchRole('admin')">
                            Satınalma (Admin)
                        </button>
<button className="role-tab active bg-white shadow-sm text-slate-900 flex-1 py-2.5 text-sm rounded-lg flex items-center justify-center gap-2 font-semibold ring-1 ring-black/5" id="tab-vendor" onclick="switchRole('vendor')">
                            Təchizatçı (Vendor)
                        </button>
</div>
<form className="space-y-5" onsubmit="handleLogin(event)">
<div className="group">
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email ünvanı</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><span className="iconify" data-icon="lucide:mail" data-width="16"></span></span>
<input className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm transition-all focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 placeholder:text-slate-300" id="email-input" placeholder="name@company.com" required="" type="email" value="info@vendor.az"/>
</div>
</div>
<div className="group">
<label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Şifrə</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"><span className="iconify" data-icon="lucide:key" data-width="16"></span></span>
<input className="block w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm transition-all focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 placeholder:text-slate-300" placeholder="••••••••" required="" type="password" value="password123"/>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<label className="flex items-center gap-2 cursor-pointer">
<input className="rounded border-slate-300 text-brand-600 focus:ring-brand-500" type="checkbox"/>
<span className="text-slate-600">Məni xatırla</span>
</label>
<a className="text-brand-600 font-medium hover:text-brand-700" href="#">Şifrəni unutmusuz?</a>
</div>
<button className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group" type="submit">
                            Hesaba daxil ol <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</form>
<p className="mt-8 text-center text-sm text-slate-500" id="register-link">
                        Hələ hesabınız yoxdur? 
                        <button className="font-bold text-brand-600 hover:text-brand-500 hover:underline decoration-2 underline-offset-4" onclick="toggleAuth('register')">Qeydiyyatdan keçin</button>
</p>
</div>

<div className="hidden fade-in space-y-6" id="register-form">
<button className="group flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-slate-900 mb-6 uppercase tracking-wider transition-colors" onclick="toggleAuth('login')">
<div className="p-1 rounded bg-slate-100 group-hover:bg-slate-200"><span className="iconify" data-icon="lucide:chevron-left" data-width="14"></span></div>
                        Girişə qayıt
                    </button>
<div className="text-center mb-6">
<h2 className="text-2xl font-bold tracking-tight text-slate-900">Təchizatçı Qeydiyyatı</h2>
<p className="mt-2 text-sm text-slate-500">Qlobal təchizat şəbəkəsinə qoşulun.</p>
</div>
<form className="space-y-6" onsubmit="handleRegister(event)">

<div className="space-y-4 bg-white/60 p-5 rounded-2xl border border-slate-100 backdrop-blur-sm">
<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<label className="block text-xxs font-bold text-slate-400 uppercase mb-1">Şirkət Adı</label>
<input className="block w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none" required="" type="text"/>
</div>
<div>
<label className="block text-xxs font-bold text-slate-400 uppercase mb-1">VÖEN</label>
<input className="block w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none" required="" type="text"/>
</div>
<div>
<label className="block text-xxs font-bold text-slate-400 uppercase mb-1">Əlaqə</label>
<input className="block w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none" required="" type="text"/>
</div>
</div>
</div>
<div className="bg-white/60 p-5 rounded-2xl border border-slate-100 border-dashed backdrop-blur-sm hover:border-brand-300 transition-colors cursor-pointer group">
<div className="flex flex-col items-center gap-2 text-center">
<div className="p-3 bg-brand-50 text-brand-600 rounded-full group-hover:scale-110 transition-transform"><span className="iconify" data-icon="lucide:upload-cloud" data-width="20"></span></div>
<div>
<p className="text-sm font-semibold text-slate-700">Sənədləri Yüklə</p>
<p className="text-xs text-slate-400">PDF, JPG (Max 5MB)</p>
</div>
</div>
</div>
<button className="w-full py-3 bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-500 hover:to-indigo-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-500/30 transition-all transform hover:-translate-y-0.5" type="submit">
                            Müraciəti Göndər
                        </button>
</form>
</div>
</div>
</div>
</div>



<div className="hidden h-full flex relative z-10" id="app-view">

<aside className="w-[280px] bg-white/80 backdrop-blur-xl border-r border-slate-200/60 flex flex-col h-full z-30 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-all">
<div className="h-20 flex items-center px-8">
<div className="flex items-center gap-3">
<div className="bg-gradient-to-tr from-brand-600 to-indigo-500 text-white p-1.5 rounded-lg shadow-lg shadow-brand-500/30" id="logo-bg">
<span className="iconify" data-icon="lucide:boxes" data-width="20"></span>
</div>
<span className="font-bold text-slate-900 tracking-tight text-lg">ProcureFlow</span>
</div>
</div>

<div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">

<nav className="space-y-1" id="nav-vendor">
<p className="px-4 text-xxs font-bold text-slate-400 uppercase tracking-widest mb-3 mt-2">Workspace</p>
<button className="nav-item active w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 group" onclick="nav('dashboard')">
<span className="iconify group-hover:text-slate-900 transition-colors" data-icon="lucide:layout-grid" data-width="18"></span> Dashboard
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 group" onclick="nav('rfq-list')">
<span className="iconify group-hover:text-slate-900 transition-colors" data-icon="lucide:file-input" data-width="18"></span> Sorğular
                        <span className="ml-auto bg-red-100 text-red-600 py-0.5 px-2 rounded-full text-xxs font-bold shadow-sm">3</span>
</button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 group" onclick="nav('po-list')">
<span className="iconify group-hover:text-slate-900 transition-colors" data-icon="lucide:shopping-bag" data-width="18"></span> Sifarişlər
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 group" onclick="nav('tracking-list')">
<span className="iconify group-hover:text-slate-900 transition-colors" data-icon="lucide:truck" data-width="18"></span> İzləmə
                    </button>
<p className="px-4 text-xxs font-bold text-slate-400 uppercase tracking-widest mb-3 mt-6">Settings</p>
<button className="nav-item w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 group" onclick="nav('profile')">
<span className="iconify group-hover:text-slate-900 transition-colors" data-icon="lucide:user-circle" data-width="18"></span> Profil &amp; Sənədlər
                    </button>
</nav>

<nav className="hidden space-y-1" id="nav-admin">
<p className="px-4 text-xxs font-bold text-slate-400 uppercase tracking-widest mb-3 mt-2">Management</p>
<button className="nav-item active w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 group" onclick="nav('admin-dashboard')">
<span className="iconify group-hover:text-slate-900" data-icon="lucide:layout-template" data-width="18"></span> Admin Panel
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 group" onclick="nav('admin-rfq')">
<span className="iconify group-hover:text-slate-900" data-icon="lucide:file-plus" data-width="18"></span> Sorğular (RFQ)
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 group" onclick="nav('admin-compare')">
<span className="iconify group-hover:text-slate-900" data-icon="lucide:scale" data-width="18"></span> Müqayisə
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-900 group" onclick="nav('admin-vendors')">
<span className="iconify group-hover:text-slate-900" data-icon="lucide:users" data-width="18"></span> Vendorlar
                    </button>
</nav>
</div>

<div className="p-4 border-t border-slate-100 bg-slate-50/50 backdrop-blur-md">
<button className="flex items-center gap-3 w-full p-2 rounded-xl hover:bg-white hover:shadow-sm transition-all text-left border border-transparent hover:border-slate-200">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-100 to-white text-indigo-600 flex items-center justify-center font-bold text-sm border border-indigo-100 shadow-sm" id="user-avatar">V</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-bold text-slate-900 truncate" id="user-name">Vendor MMC</p>
<p className="text-xs text-slate-500 truncate" id="user-role">Pro Hesab</p>
</div>
<span className="iconify text-slate-400" data-icon="lucide:more-vertical" data-width="16"></span>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full relative overflow-hidden">

<header className="h-20 bg-white/70 backdrop-blur-md border-b border-slate-200/60 flex items-center justify-between px-8 z-20 sticky top-0">
<div>
<h2 className="text-xl font-bold text-slate-900 tracking-tight" id="page-title">Ümumi Baxış</h2>
<p className="text-xs text-slate-500 font-medium mt-0.5">Xoş gəldiniz, işlər yolundadır.</p>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
<button className="p-2 text-slate-400 hover:text-slate-600 transition-colors"><span className="iconify" data-icon="lucide:bell" data-width="20"></span></button>
</div>
<div className="h-8 w-[1px] bg-slate-200 mx-1"></div>
<button className="text-xs font-semibold text-slate-600 hover:text-red-600 flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm hover:shadow hover:-translate-y-0.5 transition-all" onclick="location.reload()">
<span className="iconify" data-icon="lucide:log-out" data-width="14"></span> Çıxış
                    </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 scroll-smooth z-10" id="content-container">

<div className="page-content fade-in space-y-8" id="page-dashboard">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1" onclick="nav('rfq-list')">
<div className="absolute right-0 top-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-indigo-500/20"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><span className="iconify" data-icon="lucide:inbox" data-width="24"></span></div>
<span className="bg-red-50 text-red-600 border border-red-100 text-xxs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">3 Təcili</span>
</div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">3</div>
<div className="text-sm font-medium text-slate-500 mt-1">Aktiv Sorğular</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden group cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1" onclick="nav('po-list')">
<div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-emerald-500/20"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><span className="iconify" data-icon="lucide:shopping-bag" data-width="24"></span></div>
<span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-xxs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">+1 Yeni</span>
</div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">1</div>
<div className="text-sm font-medium text-slate-500 mt-1">Yeni Sifarişlər (PO)</div>
</div>
</div>

<div className="glass-panel p-6 rounded-2xl relative overflow-hidden group transition-all hover:shadow-lg">
<div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-amber-500/20"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><span className="iconify" data-icon="lucide:trophy" data-width="24"></span></div>
</div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">98%</div>
<div className="text-sm font-medium text-slate-500 mt-1">Uğur Reytinqi</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl border border-white/60">
<div className="flex justify-between items-center mb-8">
<h3 className="font-bold text-slate-900">Aylıq Satış Həcmi</h3>
<select className="bg-slate-50 border border-slate-200 text-xs rounded-lg px-3 py-1.5 outline-none"><option>Son 6 ay</option></select>
</div>
<div className="h-64 flex items-end justify-between gap-4 px-2">

<div className="w-full bg-slate-100 rounded-t-lg h-[40%] relative group transition-all hover:bg-indigo-100"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">40%</div></div>
<div className="w-full bg-slate-100 rounded-t-lg h-[60%] relative group transition-all hover:bg-indigo-100"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">60%</div></div>
<div className="w-full bg-slate-100 rounded-t-lg h-[30%] relative group transition-all hover:bg-indigo-100"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">30%</div></div>
<div className="w-full bg-slate-100 rounded-t-lg h-[80%] relative group transition-all hover:bg-indigo-100"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">80%</div></div>
<div className="w-full bg-indigo-500 rounded-t-lg h-[75%] relative shadow-[0_0_15px_rgba(99,102,241,0.4)]"><div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-indigo-600">Okt</div></div>
<div className="w-full bg-slate-100 rounded-t-lg h-[50%] relative group transition-all hover:bg-indigo-100"></div>
</div>
<div className="flex justify-between mt-4 text-xs text-slate-400 font-medium px-2">
<span>May</span><span>İyun</span><span>İyul</span><span>Avq</span><span className="text-indigo-600">Okt</span><span>Noy</span>
</div>
</div>
</div>

<div className="page-content hidden fade-in absolute inset-0 bg-slate-50/50 backdrop-blur-xl z-20 flex flex-col" id="page-rfq-detail">
<div className="bg-white/80 border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-30 shadow-sm backdrop-blur-md">
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-slate-100 rounded-lg text-slate-500 transition-colors" onclick="nav('rfq-list')"><span className="iconify" data-icon="lucide:arrow-left" data-width="20"></span></button>
<div>
<div className="flex items-center gap-3 mb-0.5"><h2 className="text-lg font-bold text-slate-900">RFQ-2024-001</h2><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xxs font-bold uppercase tracking-wide">Aktiv</span></div>
<p className="text-xs text-slate-500">IT Avadanlıqları kateqoriyası</p>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto p-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 space-y-6">
<div className="glass-panel p-8 rounded-2xl">
<h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Tələblər</h3>
<p className="text-slate-700 leading-relaxed mb-8 text-sm">Baş ofis üçün yüksək performanslı Server və Şəbəkə avadanlıqlarının təchizatı. Çatdırılma: Port Baku.</p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-slate-50/50 rounded-xl border border-slate-100"><span className="text-slate-400 text-xs block mb-1">Miqdar</span><span className="font-semibold text-slate-900">20 ədəd</span></div>
<div className="p-4 bg-red-50/50 rounded-xl border border-red-100"><span className="text-red-400 text-xs block mb-1">Son Tarix</span><span className="font-semibold text-red-600">15 Okt 2024</span></div>
</div>
</div>
</div>
<div className="lg:col-span-1">
<div className="bg-white border border-indigo-100 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.2)] rounded-2xl p-6 sticky top-6">
<h3 className="text-lg font-bold text-slate-900 mb-6">Təklif Göndər</h3>
<div className="flex p-1 bg-slate-100 rounded-lg mb-6">
<button className="flex-1 py-2 text-xs font-bold rounded-md bg-white shadow-sm text-slate-900 transition-all" id="prop-tab-manual" onclick="toggleProposalMode('manual')">Sistemdən</button>
<button className="flex-1 py-2 text-xs font-bold rounded-md text-slate-500 hover:text-slate-900 transition-all" id="prop-tab-file" onclick="toggleProposalMode('file')">Fayl Yüklə</button>
</div>
<form className="space-y-4" onsubmit="submitProposal(event)">
<div className="space-y-4" id="prop-manual">
<div><label className="block text-xs font-bold text-slate-700 mb-1.5">Qiymət (AZN)</label><input className="w-full px-3 py-2.5 bg-slate-50 border-0 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 font-medium" type="number"/></div>
<div><label className="block text-xs font-bold text-slate-700 mb-1.5">Müddət (Gün)</label><input className="w-full px-3 py-2.5 bg-slate-50 border-0 rounded-lg text-sm focus:ring-2 focus:ring-brand-500 font-medium" type="number"/></div>
</div>
<div className="hidden" id="prop-file">
<div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-brand-400 hover:bg-brand-50/50 transition-all cursor-pointer">
<span className="iconify mx-auto text-slate-400 mb-2" data-icon="lucide:file-up" data-width="24"></span>
<p className="text-xs font-medium text-slate-500">PDF yüklə</p>
</div>
</div>
<button className="w-full py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-brand-500/30 transition-all mt-2" type="submit">Göndər</button>
</form>
</div>
</div>
</div>
</div>

<div className="page-content hidden fade-in space-y-6" id="page-tracking-list">
<h1 className="text-2xl font-bold text-slate-900 mb-6">Sifariş İzləmə</h1>
<div className="glass-panel rounded-2xl p-8 relative overflow-hidden">
<div className="flex justify-between mb-12 border-b border-slate-100 pb-6 relative z-10">
<div><h3 className="font-bold text-slate-900 text-lg">PO-7822: Server Avadanlıqları</h3><p className="text-sm text-slate-500 mt-1">Status: <span className="text-brand-600 font-bold">Yoldadır</span></p></div>
</div>
<div className="relative flex justify-between items-center w-full px-4 py-4">
<div className="step-connector absolute top-1/2 -translate-y-1/2 left-0 w-full h-1 bg-slate-100 z-0 rounded-full"></div>

<div className="step-item completed relative z-10 flex flex-col items-center group">
<div className="step-circle w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 transition-transform group-hover:scale-110"><span className="iconify" data-icon="lucide:check" data-width="16"></span></div>
<span className="text-[10px] font-bold text-emerald-600 uppercase mt-4 absolute -bottom-8 w-32 text-center">Təsdiqləndi</span>
</div>
<div className="step-item active relative z-10 flex flex-col items-center group">
<div className="step-circle w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-[0_0_0_4px_rgba(99,102,241,0.2)] animate-pulse-slow"><span className="iconify" data-icon="lucide:truck" data-width="16"></span></div>
<span className="text-[10px] font-bold text-brand-600 uppercase mt-4 absolute -bottom-8 w-32 text-center">Yoldadır</span>
</div>
<div className="step-item relative z-10 flex flex-col items-center group">
<div className="step-circle w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-300 flex items-center justify-center"><span className="iconify" data-icon="lucide:package-check" data-width="16"></span></div>
<span className="text-[10px] font-bold text-slate-400 uppercase mt-4 absolute -bottom-8 w-32 text-center">Qəbul</span>
</div>
<div className="step-item relative z-10 flex flex-col items-center group">
<div className="step-circle w-10 h-10 rounded-full bg-white border-2 border-slate-200 text-slate-300 flex items-center justify-center"><span className="iconify" data-icon="lucide:credit-card" data-width="16"></span></div>
<span className="text-[10px] font-bold text-slate-400 uppercase mt-4 absolute -bottom-8 w-32 text-center">Ödəniş</span>
</div>
</div>
<div className="mt-12"></div>
</div>
</div>

<div className="page-content hidden fade-in space-y-6" id="page-admin-compare">
<h1 className="text-2xl font-bold text-slate-900">Müqayisə Cədvəli</h1>
<div className="glass-panel rounded-2xl overflow-hidden shadow-sm">
<table className="w-full text-sm text-left">
<thead className="bg-slate-50/50 text-xs font-bold text-slate-500 uppercase border-b border-slate-200">
<tr>
<th className="px-8 py-5">Meyarlar</th>
<th className="px-8 py-5 bg-brand-50/30 text-brand-700 text-center relative border-l border-r border-brand-100/50">
<div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-brand-600 text-white px-3 py-1 rounded-b-lg text-[10px] font-bold shadow-md shadow-brand-500/20">Tövsiyə</div>
                                        Vendor A
                                    </th>
<th className="px-8 py-5 text-center">Vendor B</th>
<th className="px-8 py-5 text-center">Vendor C</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-8 py-5 font-semibold text-slate-900">Qiymət (Cəmi)</td>
<td className="px-8 py-5 text-center font-bold text-emerald-600 bg-brand-50/10 border-x border-brand-100/50">12,450 ₼</td>
<td className="px-8 py-5 text-center font-medium">13,200 ₼</td>
<td className="px-8 py-5 text-center font-medium">14,500 ₼</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-8 py-5 font-semibold text-slate-900">Çatdırılma</td>
<td className="px-8 py-5 text-center bg-brand-50/10 border-x border-brand-100/50">10 Gün</td>
<td className="px-8 py-5 text-center text-emerald-600 font-bold">7 Gün</td>
<td className="px-8 py-5 text-center">15 Gün</td>
</tr>
<tr className="hover:bg-slate-50/50 transition-colors">
<td className="px-8 py-5"></td>
<td className="px-8 py-5 text-center border-x border-brand-100/50 bg-brand-50/10">
<button className="px-6 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 shadow-lg shadow-slate-900/20">Seç</button>
</td>
<td className="px-8 py-5 text-center"><button className="text-slate-400 font-bold text-xs hover:text-slate-600">Seç</button></td>
<td className="px-8 py-5 text-center"><button className="text-slate-400 font-bold text-xs hover:text-slate-600">Seç</button></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="page-content hidden fade-in text-center pt-20" id="page-admin-dashboard">
<div className="inline-block p-6 rounded-full bg-slate-100 mb-4"><span className="iconify text-slate-400" data-icon="lucide:bar-chart-3" data-width="48"></span></div>
<h2 className="text-2xl font-bold text-slate-900">Admin Dashboard</h2>
<p className="text-slate-500 mt-2">Göstəricilər tezliklə burada əks olunacaq.</p>
</div>
<div className="page-content hidden fade-in space-y-4" id="page-rfq-list">
<h1 className="text-2xl font-bold text-slate-900 mb-6">Aktiv Sorğular</h1>
<div className="glass-panel p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:border-brand-300 transition-all hover:shadow-md group" onclick="nav('rfq-detail')">
<div className="flex items-center gap-4">
<div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors"><span className="iconify" data-icon="lucide:server" data-width="20"></span></div>
<div>
<h3 className="font-bold text-slate-900">RFQ-2024-001</h3>
<p className="text-sm text-slate-500">IT Avadanlıqları • Port Baku</p>
</div>
</div>
<div className="text-right">
<p className="text-xs font-bold text-slate-400 uppercase mb-1">Son Tarix</p>
<p className="text-sm font-bold text-red-500">15 Okt 2024</p>
</div>
</div>
</div>
<div className="page-content hidden fade-in space-y-4" id="page-po-list">
<h1 className="text-2xl font-bold text-slate-900 mb-6">Sifarişlər</h1>
<div className="glass-panel p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:border-brand-300 transition-all hover:shadow-md group" onclick="nav('tracking-list')">
<div className="flex items-center gap-4">
<div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors"><span className="iconify" data-icon="lucide:box" data-width="20"></span></div>
<div>
<h3 className="font-bold text-slate-900">PO-7822</h3>
<p className="text-sm text-slate-500">Global Tech MMC</p>
</div>
</div>
<span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">Aktiv</span>
</div>
</div>
<div className="page-content hidden fade-in" id="page-profile">
<h1 className="text-2xl font-bold text-slate-900 mb-6">Profil</h1>
<div className="glass-panel p-8 rounded-2xl">
<div className="flex items-center gap-6 mb-8">
<div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center text-3xl font-bold text-slate-400">V</div>
<div>
<h2 className="text-xl font-bold text-slate-900">Vendor MMC</h2>
<p className="text-slate-500">Təsdiqlənmiş Təchizatçı</p>
</div>
</div>
<div className="grid grid-cols-2 gap-8 text-sm">
<div><span className="text-slate-400 block mb-1">Email</span><span className="font-medium">info@vendor.az</span></div>
<div><span className="text-slate-400 block mb-1">VÖEN</span><span className="font-medium">991200331</span></div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
