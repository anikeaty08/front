import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Elements
        const viewLogin = document.getElementById('view-login');
        const viewOtp = document.getElementById('view-otp');
        const appShell = document.getElementById('app-shell');
        
        const loginPhone = document.getElementById('login-phone');
        const loginPass = document.getElementById('login-pass');
        const btnLogin = document.getElementById('btn-login');
        const loginText = document.getElementById('login-text');
        const loginLoader = document.getElementById('login-loader');
        const loginError = document.getElementById('login-error');

        const otpInputs = document.querySelectorAll('.otp-input');
        const btnVerify = document.getElementById('btn-verify');

        const pageTitles = {
            'dashboard': 'Tableau de bord',
            'history': 'Historique des transactions',
            'card': 'Ma Carte Bancaire',
            'settings': 'Paramètres & Sécurité'
        };

        // Logic: Login field check
        function checkLoginFields() {
            loginError.classList.add('hidden'); // Hide error on type
            if (loginPhone.value.length > 5 && loginPass.value.length > 3) {
                btnLogin.removeAttribute('disabled');
                btnLogin.classList.remove('opacity-50', 'cursor-not-allowed');
            } else {
                btnLogin.setAttribute('disabled', 'true');
                btnLogin.classList.add('opacity-50', 'cursor-not-allowed');
            }
        }

        // Logic: Start Login Flow (Show OTP)
        function startLogin() {
            // Optional fake error logic for realism (uncomment to test)
            /*
            if(loginPass.value === "error") {
                loginError.classList.remove('hidden');
                return;
            }
            */
            
            loginText.classList.add('hidden');
            loginLoader.classList.remove('hidden');
            
            setTimeout(() => {
                loginText.classList.remove('hidden');
                loginLoader.classList.add('hidden');
                showView('otp');
                otpInputs[0].focus();
            }, 1200);
        }

        // Logic: OTP Inputs auto-advance
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                // only digits
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                if(e.target.value.length === 1) {
                    if(index < otpInputs.length - 1) otpInputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', (e) => {
                if(e.key === 'Backspace' && !e.target.value) {
                    if(index > 0) otpInputs[index - 1].focus();
                }
            });
        });

        // Logic: Verify OTP & Enter App
        function verifyOTP() {
            const verifyText = document.getElementById('verify-text');
            const verifyLoadingText = document.getElementById('verify-loading-text');
            
            verifyText.classList.add('hidden');
            verifyLoadingText.classList.remove('hidden');

            setTimeout(() => {
                showView('app');
                verifyText.classList.remove('hidden');
                verifyLoadingText.classList.add('hidden');
            }, 1800);
        }

        // View Management
        function showView(viewName) {
            viewLogin.classList.add('opacity-0', 'pointer-events-none');
            viewOtp.classList.add('hidden', 'opacity-0');
            appShell.classList.add('hidden', 'opacity-0');

            setTimeout(() => {
                viewLogin.classList.add('hidden');
                
                if(viewName === 'login') {
                    viewLogin.classList.remove('hidden');
                    setTimeout(() => viewLogin.classList.remove('opacity-0', 'pointer-events-none'), 50);
                } else if (viewName === 'otp') {
                    viewOtp.classList.remove('hidden');
                    setTimeout(() => viewOtp.classList.remove('opacity-0'), 50);
                } else if (viewName === 'app') {
                    appShell.classList.remove('hidden');
                    setTimeout(() => appShell.classList.remove('opacity-0'), 50);
                }
            }, 300);
        }

        // App Tabs Logic
        function switchTab(tabId) {
            // Hide all tabs
            ['dashboard', 'history', 'card', 'settings'].forEach(id => {
                document.getElementById(`tab-${id}`).classList.add('hidden');
                document.getElementById(`tab-${id}`).classList.remove('block');
            });
            
            // Show target tab
            const target = document.getElementById(`tab-${tabId}`);
            target.classList.remove('hidden');
            target.classList.add('block', 'animate-fade-in');
            
            // Update Title
            document.getElementById('page-title').innerText = pageTitles[tabId];

            // Update Nav styling
            document.querySelectorAll('.nav-item').forEach(item => {
                if(item.dataset.target === tabId) {
                    item.classList.add('bg-[#4DA6FF]/10', 'text-[#4DA6FF]');
                    item.classList.remove('text-gray-500', 'hover:text-gray-900', 'hover:bg-gray-50');
                } else {
                    item.classList.remove('bg-[#4DA6FF]/10', 'text-[#4DA6FF]');
                    item.classList.add('text-gray-500', 'hover:text-gray-900', 'hover:bg-gray-50');
                }
            });
        }

        function logout() {
            // Reset state
            loginPhone.value = '';
            loginPass.value = '';
            otpInputs.forEach(i => i.value = '');
            checkLoginFields();
            switchTab('dashboard'); // reset tab for next login
            showView('login');
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<div className="fixed inset-0 bg-gray-50 z-50 flex flex-col justify-center items-center transition-opacity duration-300" id="view-login">
<div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">

<div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#4DA6FF]/10 to-transparent pointer-events-none"></div>
<div className="text-center mb-10 relative z-10">
<img alt="Ecobank" className="h-8 mx-auto mb-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c97f012c-38ca-482f-a5ec-9e27bdb358d6_320w.png"/>
<h1 className="text-2xl tracking-tight font-medium text-gray-900">Connexion sécurisée</h1>
<p className="text-sm text-gray-500 mt-2">Dernière connexion : Dakar, Sénégal</p>
</div>
<div className="space-y-5 relative z-10">
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
<span className="text-gray-500 font-medium text-base">+221</span>
</div>
<input className="w-full pl-16 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-1 focus:ring-[#4DA6FF] focus:border-[#4DA6FF] transition-all placeholder-gray-400" id="login-phone" oninput="checkLoginFields()" placeholder="77 673 18 02" type="tel"/>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
<iconify-icon className="text-gray-400 text-lg" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<input className="w-full pl-12 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl text-base focus:outline-none focus:ring-1 focus:ring-[#4DA6FF] focus:border-[#4DA6FF] transition-all placeholder-gray-400" id="login-pass" oninput="checkLoginFields()" placeholder="Mot de passe" type="password"/>
<button className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600" type="button">
<iconify-icon className="text-lg" icon="solar:eye-linear"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-center px-1">
<button className="text-xs text-[#4DA6FF] font-medium hover:underline">Mot de passe oublié ?</button>
<button className="text-xs text-gray-500 hover:text-gray-800 font-medium transition-colors">Code OTP (SMS)</button>
</div>
<div className="hidden text-xs text-red-500 font-medium text-center bg-red-50 py-2 rounded-lg border border-red-100" id="login-error">
                    Identifiants incorrects
                </div>
<button className="w-full py-3 rounded-xl bg-[#4DA6FF] text-white font-medium text-sm opacity-50 cursor-not-allowed transition-all relative overflow-hidden mt-2 shadow-sm hover:shadow-md flex justify-center items-center" disabled="" id="btn-login" onclick="startLogin()">
<span id="login-text">Se connecter</span>
<iconify-icon className="text-lg animate-spin hidden" icon="solar:refresh-linear" id="login-loader"></iconify-icon>
</button>
<div className="pt-4 border-t border-gray-100">
<button className="w-full py-3 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium text-sm flex justify-center items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
<iconify-icon className="text-lg text-[#4DA6FF]" icon="solar:fingerprint-linear"></iconify-icon>
                        Se connecter avec empreinte digitale
                    </button>
</div>
</div>
</div>
<div className="mt-8 text-center flex items-center justify-center gap-2 text-xs text-gray-400">
<iconify-icon className="text-base" icon="solar:shield-check-linear"></iconify-icon>
<span>Vos données sont protégées par un chiffrement de niveau bancaire.</span>
</div>
</div>



<div className="fixed inset-0 bg-gray-50 z-40 hidden opacity-0 flex justify-center items-center transition-opacity duration-300" id="view-otp">
<div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-sm border border-gray-100">
<button className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mb-8 border border-gray-100 hover:bg-gray-100 transition-colors" onclick="showView('login')">
<iconify-icon className="text-lg text-gray-700" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h2 className="text-2xl tracking-tight font-medium text-gray-900 mb-2">Vérification OTP</h2>
<p className="text-sm text-gray-500 mb-8 leading-relaxed">
                Un code de vérification a été envoyé au <br/>
<span className="font-medium text-gray-800">+221 77 673 18 02</span>
</p>
<div className="flex gap-2 justify-between mb-8">
<input className="w-12 h-14 text-center text-xl font-medium border border-gray-200 rounded-xl bg-gray-50 focus:border-[#4DA6FF] focus:ring-1 focus:ring-[#4DA6FF] outline-none transition-all otp-input" maxlength="1" type="text"/>
<input className="w-12 h-14 text-center text-xl font-medium border border-gray-200 rounded-xl bg-gray-50 focus:border-[#4DA6FF] focus:ring-1 focus:ring-[#4DA6FF] outline-none transition-all otp-input" maxlength="1" type="text"/>
<input className="w-12 h-14 text-center text-xl font-medium border border-gray-200 rounded-xl bg-gray-50 focus:border-[#4DA6FF] focus:ring-1 focus:ring-[#4DA6FF] outline-none transition-all otp-input" maxlength="1" type="text"/>
<input className="w-12 h-14 text-center text-xl font-medium border border-gray-200 rounded-xl bg-gray-50 focus:border-[#4DA6FF] focus:ring-1 focus:ring-[#4DA6FF] outline-none transition-all otp-input" maxlength="1" type="text"/>
<input className="w-12 h-14 text-center text-xl font-medium border border-gray-200 rounded-xl bg-gray-50 focus:border-[#4DA6FF] focus:ring-1 focus:ring-[#4DA6FF] outline-none transition-all otp-input" maxlength="1" type="text"/>
<input className="w-12 h-14 text-center text-xl font-medium border border-gray-200 rounded-xl bg-gray-50 focus:border-[#4DA6FF] focus:ring-1 focus:ring-[#4DA6FF] outline-none transition-all otp-input" maxlength="1" type="text"/>
</div>
<button className="w-full py-3 rounded-xl bg-[#4DA6FF] text-white font-medium text-sm shadow-sm hover:shadow-md transition-all flex justify-center items-center h-12" id="btn-verify" onclick="verifyOTP()">
<span id="verify-text">Valider</span>
<span className="hidden flex items-center gap-2" id="verify-loading-text">
<iconify-icon className="text-lg animate-spin" icon="solar:refresh-linear"></iconify-icon>
                    Connexion en cours...
                </span>
</button>
<div className="mt-8 text-center">
<button className="text-sm text-gray-500 font-medium hover:text-gray-800 transition-colors">Renvoyer le code (00:45)</button>
</div>
</div>
</div>



<div className="flex-1 flex h-full hidden opacity-0 transition-opacity duration-500" id="app-shell">

<aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between hidden md:flex shrink-0">
<div>
<div className="h-20 flex items-center px-8 border-b border-gray-50">
<img alt="Ecobank" className="h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c97f012c-38ca-482f-a5ec-9e27bdb358d6_320w.png"/>
</div>
<nav className="p-4 space-y-1 mt-4">
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors bg-[#4DA6FF]/10 text-[#4DA6FF]" data-target="dashboard" onclick="switchTab('dashboard')">
<iconify-icon className="text-xl" icon="solar:widget-linear"></iconify-icon>
                        Tableau de bord
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-gray-500 hover:text-gray-900 hover:bg-gray-50" data-target="history" onclick="switchTab('history')">
<iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon>
                        Historique
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-gray-500 hover:text-gray-900 hover:bg-gray-50" data-target="card" onclick="switchTab('card')">
<iconify-icon className="text-xl" icon="solar:card-linear"></iconify-icon>
                        Ma Carte
                    </button>
<button className="nav-item w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-gray-500 hover:text-gray-900 hover:bg-gray-50" data-target="settings" onclick="switchTab('settings')">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
                        Paramètres
                    </button>
</nav>
</div>
<div className="p-4 border-t border-gray-100">
<button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors text-red-500 hover:bg-red-50" onclick="logout()">
<iconify-icon className="text-xl" icon="solar:logout-2-linear"></iconify-icon>
                    Se déconnecter
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 shrink-0">
<div className="flex items-center gap-4">
<h2 className="text-xl tracking-tight font-medium text-gray-900" id="page-title">Tableau de bord</h2>
<div className="hidden lg:flex items-center gap-2 text-xs text-gray-500 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-100">
<iconify-icon className="text-sm" icon="solar:map-point-linear"></iconify-icon>
                        Dakar, Sénégal
                    </div>
</div>
<div className="flex items-center gap-5">
<button className="relative text-gray-400 hover:text-gray-600 transition-colors">
<iconify-icon className="text-2xl" icon="solar:bell-linear"></iconify-icon>
<span className="absolute top-0 right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<div className="h-8 w-px bg-gray-200"></div>
<div className="flex items-center gap-3 cursor-pointer group">
<div className="text-right hidden sm:block">
<p className="text-sm font-medium text-gray-900 leading-tight">Alfousseni COULIBALY</p>
<p className="text-xs text-gray-500">+221 77 673 18 02</p>
</div>
<div className="w-10 h-10 rounded-full bg-[#4DA6FF]/10 flex items-center justify-center border border-[#4DA6FF]/20 group-hover:bg-[#4DA6FF]/20 transition-colors">
<span className="text-[#4DA6FF] font-medium text-sm">AC</span>
</div>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar p-8">
<div className="max-w-6xl mx-auto h-full">



<div className="space-y-8 animate-fade-in block" id="tab-dashboard">

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-6">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group hover:border-[#4DA6FF]/30 transition-colors">
<div className="absolute -right-4 -top-4 p-4 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
<iconify-icon className="text-9xl" icon="solar:bank-linear"></iconify-icon>
</div>
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-gray-500 font-medium">Solde principal</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-yellow-50 text-yellow-700 text-xs font-medium ring-1 ring-inset ring-yellow-600/20">
<iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon> 
                                                En validation
                                            </span>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl tracking-tight font-medium text-gray-900">475 000 000</h3>
<span className="text-base text-gray-500 font-medium">FCFA</span>
</div>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-green-500/30 transition-colors flex flex-col justify-between">
<div className="flex justify-between items-start mb-4">
<span className="text-sm text-gray-500 font-medium">Solde disponible</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-xs font-medium ring-1 ring-inset ring-green-600/20">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon> 
                                                Immédiat
                                            </span>
</div>
<div className="flex items-baseline gap-2">
<h4 className="text-2xl tracking-tight font-medium text-gray-900">350 000</h4>
<span className="text-sm text-gray-500 font-medium">FCFA</span>
</div>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-gray-900 mb-4">Actions rapides</h4>
<div className="flex flex-wrap gap-4">
<button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-[#4DA6FF] hover:bg-[#4DA6FF]/5 transition-colors group">
<div className="w-8 h-8 rounded-full bg-[#4DA6FF]/10 flex items-center justify-center text-[#4DA6FF] group-hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Envoyer de l'argent</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-[#4DA6FF] hover:bg-[#4DA6FF]/5 transition-colors group">
<div className="w-8 h-8 rounded-full bg-[#4DA6FF]/10 flex items-center justify-center text-[#4DA6FF] group-hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:arrow-left-down-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Recevoir</span>
</button>
<button className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white border border-gray-200 shadow-sm hover:border-[#4DA6FF] hover:bg-[#4DA6FF]/5 transition-colors group" onclick="switchTab('history')">
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-hover:scale-110 transition-transform">
<iconify-icon className="text-lg" icon="solar:history-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-700">Historique</span>
</button>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-5 flex items-start gap-3 shadow-sm">
<iconify-icon className="text-xl text-yellow-600 shrink-0 mt-0.5" icon="solar:shield-warning-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-yellow-800">Vérification en cours</h4>
<p className="text-xs text-yellow-700 mt-1.5 leading-relaxed">Votre transaction de 475 000 000 FCFA est en cours de vérification par nos services de conformité.</p>
</div>
</div>

<div className="relative w-full aspect-[1.586] rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 shadow-lg border border-gray-700 overflow-hidden cursor-pointer hover:shadow-xl transition-shadow group" onclick="switchTab('card')">
<div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:bg-white/20 transition-colors"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="text-xs font-medium tracking-widest text-gray-400">BLACK CARD</div>
<img alt="Ecobank" className="h-4 opacity-80 object-contain invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c97f012c-38ca-482f-a5ec-9e27bdb358d6_320w.png"/>
</div>
<div className="space-y-4">
<div className="text-lg tracking-widest font-medium text-gray-100 flex gap-4">
<span>****</span>
<span>****</span>
<span>****</span>
<span>4821</span>
</div>
<div className="flex justify-between items-end">
<div className="text-sm font-medium text-gray-300 uppercase tracking-wide">A. COULIBALY</div>
<div className="text-xs text-gray-400 font-medium">12/28</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8">
<div className="flex justify-between items-center mb-4">
<h4 className="text-sm font-medium text-gray-900">Transactions récentes</h4>
<button className="text-xs font-medium text-[#4DA6FF] hover:underline" onclick="switchTab('history')">Voir tout</button>
</div>
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

<div className="p-4 sm:px-6 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
<div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-yellow-600" icon="solar:arrow-left-down-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Banque internationale anonyme - États-Unis</p>
<p className="text-xs text-gray-500 mt-0.5">Aujourd'hui • 09:12 • Virement SWIFT</p>
</div>
<div className="flex flex-col items-end shrink-0">
<p className="text-sm font-medium text-green-600">+ 475 000 000 FCFA</p>
<span className="inline-flex items-center gap-1 mt-1 text-[10px] text-yellow-600 font-medium bg-yellow-50 px-2 py-0.5 rounded">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon> En attente
                                        </span>
</div>
</div>

<div className="p-4 sm:px-6 flex items-center gap-4 hover:bg-gray-50 transition-colors border-b border-gray-50">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-red-600" icon="solar:smartphone-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-gray-900 truncate">Paiement Mobile (Orange)</p>
<p className="text-xs text-gray-500 mt-0.5">Hier • 18:45 • Facture</p>
</div>
<div className="flex flex-col items-end shrink-0">
<p className="text-sm font-medium text-gray-900">- 15 000 FCFA</p>
<span className="inline-flex items-center gap-1 mt-1 text-[10px] text-green-600 font-medium">
                                            Validé
                                        </span>
</div>
</div>
</div>
</div>
</div>



<div className="hidden space-y-6" id="tab-history">
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
<div className="px-6 py-4 border-b border-gray-100 bg-gray-50/50 flex justify-between items-center">
<span className="text-xs font-medium text-gray-500 uppercase tracking-wider">Toutes les transactions</span>
<button className="text-xs text-gray-500 flex items-center gap-1 border border-gray-200 bg-white px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors">
<iconify-icon icon="solar:slider-horizontal-linear"></iconify-icon> Filtrer
                                </button>
</div>
<div className="divide-y divide-gray-50">

<div className="p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
<div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center shrink-0 border border-yellow-100">
<iconify-icon className="text-xl text-yellow-600" icon="solar:arrow-left-down-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-base font-medium text-gray-900 truncate">Banque internationale anonyme - États-Unis</p>
<p className="text-sm text-gray-500 mt-1">Virement SWIFT • Aujourd'hui, 09:12</p>
<div className="flex items-center gap-1.5 mt-2">
<iconify-icon className="text-sm text-yellow-600 animate-spin" icon="solar:refresh-linear"></iconify-icon>
<span className="text-xs text-yellow-700 font-medium">Transaction en cours de traitement</span>
</div>
</div>
<div className="text-right shrink-0">
<p className="text-lg font-medium text-green-600">+ 475 000 000 FCFA</p>
</div>
</div>

<div className="p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-red-600" icon="solar:smartphone-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-base font-medium text-gray-900 truncate">Paiement Mobile (Orange)</p>
<p className="text-sm text-gray-500 mt-1">Facture • Hier, 18:45</p>
</div>
<div className="text-right shrink-0">
<p className="text-base font-medium text-gray-900">- 15 000 FCFA</p>
</div>
</div>
<div className="p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-red-600" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-base font-medium text-gray-900 truncate">Le Lagon 1 - Dakar</p>
<p className="text-sm text-gray-500 mt-1">Carte **** 4821 • Hier, 13:20</p>
</div>
<div className="text-right shrink-0">
<p className="text-base font-medium text-gray-900">- 8 500 FCFA</p>
</div>
</div>
<div className="p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-green-600" icon="solar:arrow-left-down-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-base font-medium text-gray-900 truncate">Amadou DIOP</p>
<p className="text-sm text-gray-500 mt-1">Virement local • Hier, 10:05</p>
</div>
<div className="text-right shrink-0">
<p className="text-base font-medium text-green-600">+ 120 000 FCFA</p>
</div>
</div>
<div className="p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors">
<div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl text-gray-600" icon="solar:bank-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-base font-medium text-gray-900 truncate">Retrait DAB Sea Plaza</p>
<p className="text-sm text-gray-500 mt-1">Espèces • 12 Mai, 16:30</p>
</div>
<div className="text-right shrink-0">
<p className="text-base font-medium text-gray-900">- 25 000 FCFA</p>
</div>
</div>
</div>
</div>
</div>



<div className="hidden" id="tab-card">
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div>
<div className="relative w-full aspect-[1.586] max-w-md mx-auto rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8 shadow-2xl border border-gray-700 overflow-hidden mb-8">
<div className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="text-sm font-medium tracking-widest text-gray-400">ECOBANK BLACK</div>
<img alt="Ecobank" className="h-6 opacity-80 object-contain invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c97f012c-38ca-482f-a5ec-9e27bdb358d6_320w.png"/>
</div>
<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="w-12 h-8 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-md sm opacity-80"></div>
<iconify-icon className="text-3xl text-gray-400" icon="solar:card-transfer-linear"></iconify-icon>
</div>
<div className="text-2xl tracking-widest font-medium text-gray-100 flex gap-4">
<span>****</span>
<span>****</span>
<span>****</span>
<span>4821</span>
</div>
<div className="flex justify-between items-end pt-2">
<div className="text-base font-medium text-gray-200 uppercase tracking-wide">Alfousseni Coulibaly</div>
<div className="flex flex-col items-end">
<span className="text-[10px] text-gray-400 uppercase">Expire</span>
<span className="text-sm text-gray-200 font-medium">12/28</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-md">
<h3 className="text-lg font-medium text-gray-900 mb-6">Gestion de la carte</h3>
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
<div className="p-5 flex items-center justify-between border-b border-gray-50">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500">
<iconify-icon className="text-xl" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Bloquer la carte</p>
<p className="text-xs text-gray-500">Désactiver temporairement</p>
</div>
</div>

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4DA6FF]"></div>
</label>
</div>
<div className="p-5 flex items-center justify-between border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#4DA6FF]/10 flex items-center justify-center text-[#4DA6FF]">
<iconify-icon className="text-xl" icon="solar:eye-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Voir le code PIN</p>
<p className="text-xs text-gray-500">Authentification requise</p>
</div>
</div>
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="p-5 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#4DA6FF]/10 flex items-center justify-center text-[#4DA6FF]">
<iconify-icon className="text-xl" icon="solar:slider-horizontal-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Modifier le plafond</p>
<p className="text-xs text-gray-500">Paiements et retraits</p>
</div>
</div>
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>



<div className="hidden" id="tab-settings">
<div className="max-w-3xl space-y-8">

<div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 flex items-start gap-4">
<iconify-icon className="text-2xl text-yellow-600 shrink-0" icon="solar:shield-warning-linear"></iconify-icon>
<div>
<h4 className="text-base font-medium text-yellow-800">Vérification de compte requise</h4>
<p className="text-sm text-yellow-700 mt-2 leading-relaxed">Votre transaction entrante de 475 000 000 FCFA est en cours de vérification par nos services. Cette opération exceptionnelle nécessite une validation manuelle. Un conseiller vous contactera sous 24h.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-fit">
<div className="p-5 border-b border-gray-50 font-medium text-xs text-gray-500 uppercase tracking-wider bg-gray-50/50">Informations personnelles</div>
<div className="p-5 flex items-center justify-between border-b border-gray-50">
<div className="flex items-center gap-4">
<iconify-icon className="text-xl text-gray-400" icon="solar:user-linear"></iconify-icon>
<div>
<span className="text-sm font-medium text-gray-900 block">Titulaire du compte</span>
<span className="text-xs text-gray-500">Alfousseni COULIBALY</span>
</div>
</div>
</div>
<div className="p-5 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors group">
<div className="flex items-center gap-4">
<iconify-icon className="text-xl text-gray-400" icon="solar:smartphone-linear"></iconify-icon>
<div>
<span className="text-sm font-medium text-gray-900 block">Numéro de téléphone</span>
<span className="text-xs text-gray-500">+221 77 673 18 02</span>
</div>
</div>
<span className="text-xs text-[#4DA6FF] font-medium group-hover:underline">Modifier</span>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden h-fit">
<div className="p-5 border-b border-gray-50 font-medium text-xs text-gray-500 uppercase tracking-wider bg-gray-50/50">Sécurité</div>
<div className="p-5 flex items-center justify-between border-b border-gray-50">
<div className="flex items-center gap-4">
<iconify-icon className="text-xl text-gray-400" icon="solar:fingerprint-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Authentification biométrique</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4DA6FF]"></div>
</label>
</div>
<div className="p-5 flex items-center justify-between border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors group">
<div className="flex items-center gap-4">
<iconify-icon className="text-xl text-gray-400" icon="solar:lock-keyhole-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Code PIN de l'application</span>
</div>
<span className="text-xs text-[#4DA6FF] font-medium group-hover:underline">Modifier</span>
</div>
<div className="p-5 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors group">
<div className="flex items-center gap-4">
<iconify-icon className="text-xl text-gray-400" icon="solar:history-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-900">Historique des connexions</span>
</div>
<iconify-icon className="text-xl text-gray-400 group-hover:text-gray-900" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
