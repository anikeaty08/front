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



        // --- Initialization ---
        lucide.createIcons({ attrs: { strokeWidth: 1.5 } });

        // --- State Management ---
        const state = {
            loggedIn: false,
            isProfileComplete: false, // Toggles flow
            isPremium: false,
            history: ['view-explore'],
        };

        // --- Router ---
        function navigateTo(viewId) {
            window.scrollTo(0,0);
            
            // 1. Navigation Bar Logic
            const isUserView = !viewId.startsWith('view-admin');
            const navUser = document.getElementById('navbar-user');
            const navAdmin = document.getElementById('navbar-admin');
            const mainContainer = document.getElementById('main-container');

            if (isUserView) {
                navUser.style.display = 'block';
                navAdmin.style.display = 'none';
                mainContainer.classList.remove('pt-20', 'bg-stone-50', 'max-w-7xl');
                mainContainer.classList.add('max-w-2xl', 'pt-16');
            } else {
                navUser.style.display = 'none';
                if(viewId !== 'view-admin-login') navAdmin.style.display = 'block';
                else navAdmin.style.display = 'none';
                
                mainContainer.classList.remove('max-w-2xl', 'pt-16');
                if(viewId !== 'view-admin-login') mainContainer.classList.add('max-w-full', 'pt-0'); 
            }

            // 2. Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => { if(!el.classList.contains('active')) el.style.display = 'none'; }, 200);
            });

            // 3. Show target view
            const target = document.getElementById(viewId);
            if (target) {
                target.style.display = 'block';
                if(viewId === 'view-login' || viewId === 'view-complete-profile' || viewId === 'view-admin-login') target.style.display = 'flex';
                setTimeout(() => target.classList.add('active'), 10);
                
                // History Push
                if (state.history[state.history.length - 1] !== viewId) {
                    state.history.push(viewId);
                }
            }
        }

        function goBack() {
            if (state.history.length > 1) {
                state.history.pop();
                navigateTo(state.history[state.history.length - 1]);
            } else {
                navigateTo('view-explore');
            }
        }

        // --- Auth & Profile Flow ---
        function handleGoogleLogin() {
            // Mocking Google Auth Success
            state.loggedIn = true;
            
            // Logic: If profile incomplete -> Complete Profile Page. Else -> Home.
            // For demo: Let's assume profile is incomplete first time.
            if (!state.isProfileComplete) {
                navigateTo('view-complete-profile');
            } else {
                updateNavState();
                navigateTo('view-explore');
            }
        }

        function submitProfileSetup(e) {
            e.preventDefault();
            // User submitted form on existing "Complete Profile" page
            state.isProfileComplete = true;
            updateNavState();
            navigateTo('view-explore');
        }

        function updateNavState() {
            if (state.loggedIn) {
                document.getElementById('nav-logged-out').classList.add('hidden');
                document.getElementById('nav-logged-in').classList.remove('hidden');
                document.getElementById('nav-logged-in').classList.add('flex');
            } else {
                document.getElementById('nav-logged-out').classList.remove('hidden');
                document.getElementById('nav-logged-in').classList.add('hidden');
                document.getElementById('nav-logged-in').classList.remove('flex');
            }
        }

        function logoutUser() {
            state.loggedIn = false;
            state.isProfileComplete = false;
            state.isPremium = false;
            updateNavState();
            navigateTo('view-explore');
        }

        // --- Admin Logic ---
        function adminLogin() { navigateTo('view-admin-dashboard'); }
        function adminLogout() { navigateTo('view-explore'); } 

        // --- Premium Logic ---
        function checkPremiumAndNavigate(geoLink) {
            if (state.loggedIn && state.isPremium) {
                window.location.href = geoLink;
            } else if (!state.loggedIn) {
                navigateTo('view-login');
            } else {
                navigateTo('view-premium');
            }
        }

        function activatePremium() {
            state.isPremium = true;
            alert("💎 Welcome to Premium!");
            goBack();
        }

        function toggleSave(btn) {
            if (!state.loggedIn) { navigateTo('view-login'); return; }
            const icon = btn.querySelector('svg');
            if (icon.classList.contains('text-stone-900')) {
                icon.classList.remove('text-stone-900', 'fill-stone-900');
                icon.classList.add('text-stone-400');
            } else {
                icon.classList.add('text-stone-900', 'fill-stone-900');
                icon.classList.remove('text-stone-400');
            }
        }

        // Initial Load
        document.querySelectorAll('.view-section').forEach(el => {
            if(!el.classList.contains('active')) el.style.display = 'none';
        });
    
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
      

<div className="fixed inset-0 pointer-events-none z-50 bg-grain opacity-40 mix-blend-multiply"></div>

<nav className="fixed top-0 w-full z-40 bg-[#FDFCF8]/95 backdrop-blur-md border-b border-stone-200/60 transition-transform duration-300" id="navbar-user">
<div className="max-w-2xl mx-auto px-4 h-16 flex items-center justify-between gap-3">

<div className="flex items-center gap-3 md:gap-4 shrink-0">
<a className="cursor-pointer group flex items-center transform transition-transform hover:scale-105 duration-300" onclick="navigateTo('view-explore')">
<div className="relative bg-stone-900 text-white px-1.5 py-0.5 transform -rotate-2 shadow-sm">
<span className="font-black text-sm tracking-tighter font-sans">TOO</span>
</div>
<div className="relative bg-stone-900 text-white px-1.5 py-0.5 transform rotate-2 -ml-0.5 mt-0.5 shadow-sm">
<span className="font-black text-sm tracking-tighter font-sans">LET</span>
</div>
</a>
<div className="hidden md:flex items-center gap-1 cursor-pointer hover:bg-stone-100 px-2 py-1 rounded-lg transition-colors">
<i className="w-3.5 h-3.5 text-orange-600" data-lucide="map-pin"></i>
<span className="text-xs font-semibold text-stone-900">Bangalore</span>
</div>
</div>

<div className="flex-1 max-w-xs">
<div className="relative group">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-stone-400 group-focus-within:text-stone-800 transition-colors" data-lucide="search"></i>
<input className="w-full bg-stone-100 border-none rounded-full py-2 pl-9 pr-4 text-xs font-medium focus:ring-1 focus:ring-stone-900 focus:bg-white transition-all placeholder:text-stone-400" placeholder="Search locality..." type="text"/>
</div>
</div>

<div className="flex items-center gap-2 md:gap-3 shrink-0">
<div className="flex items-center gap-2" id="nav-logged-out">
<button className="text-xs font-semibold text-stone-600 hover:text-stone-900" onclick="navigateTo('view-login')">Log in</button>
</div>
<div className="hidden flex items-center gap-3" id="nav-logged-in">
<button className="hidden md:flex items-center gap-1 bg-gradient-to-r from-amber-100 to-yellow-50 border border-yellow-200 px-2 py-1 rounded-full shadow-sm hover:shadow-md transition-all" onclick="navigateTo('view-premium')">
<i className="w-3 h-3 text-amber-600 fill-amber-600" data-lucide="crown"></i>
<span className="text-[10px] font-bold text-amber-800 uppercase tracking-wide">Premium</span>
</button>

<button className="w-8 h-8 rounded-full overflow-hidden border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900 transition-all hover:scale-105" onclick="navigateTo('view-dashboard')">
<img alt="user" className="w-full h-full object-cover bg-stone-100" id="user-avatar-img" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</button>
</div>
</div>
</div>
</nav>

<nav className="hidden fixed top-0 w-full z-40 bg-stone-900 text-white border-b border-stone-800" id="navbar-admin">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-black text-lg tracking-tight">TOOLET</span>
<span className="bg-stone-800 text-stone-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-stone-700 uppercase tracking-wider">Admin</span>
</div>
<div className="flex gap-6 text-sm font-medium text-stone-400">
<button className="hover:text-white transition-colors" onclick="navigateTo('view-admin-dashboard')">Dashboard</button>
<button className="hover:text-white transition-colors" onclick="navigateTo('view-admin-listings')">Listings</button>
<button className="hover:text-white transition-colors" onclick="navigateTo('view-admin-reports')">Reports</button>
</div>
<button className="text-xs text-stone-500 hover:text-white" onclick="adminLogout()">Exit Admin</button>
</div>
</nav>

<main className="pt-16 max-w-2xl mx-auto min-h-screen relative" id="main-container">

<section className="view-section active pb-20" id="view-explore">
<div className="sticky top-16 z-30 bg-[#FDFCF8]/95 backdrop-blur-sm pt-3 pb-2 border-b border-stone-200/50 px-4">
<div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2 snap-x">
<button className="snap-start flex items-center gap-1 px-3 py-1.5 bg-stone-900 text-white rounded-full text-xs font-medium border border-stone-900 whitespace-nowrap shadow-sm">All</button>
<button className="snap-start px-3 py-1.5 bg-white text-stone-600 rounded-full text-xs font-medium border border-stone-200 hover:border-stone-400 whitespace-nowrap transition-colors">1 BHK</button>
<button className="snap-start px-3 py-1.5 bg-white text-stone-600 rounded-full text-xs font-medium border border-stone-200 hover:border-stone-400 whitespace-nowrap transition-colors">2 BHK</button>
<button className="snap-start px-3 py-1.5 bg-white text-stone-600 rounded-full text-xs font-medium border border-stone-200 hover:border-stone-400 whitespace-nowrap transition-colors">&lt; ₹15k</button>
</div>
</div>
<div className="px-4 py-4 space-y-6">

<div className="bg-white rounded-2xl border border-stone-200 shadow-sm overflow-hidden group hover:shadow-lg transition-all duration-300">
<div className="relative aspect-[4/3] bg-stone-100 cursor-pointer" onclick="navigateTo('view-detail')">
<div className="absolute inset-0 flex items-center justify-center p-6">
<div className="bg-[#fff9e6] w-full h-full shadow-lg transform rotate-1 border border-stone-300 p-4 flex flex-col items-center justify-center text-center">
<span className="text-red-600 font-black text-3xl tracking-tighter border-b-2 border-stone-800 pb-1 mb-2">TO-LET</span>
<span className="text-stone-900 font-bold text-sm uppercase leading-tight">2 BHK, 1st Floor<br/>Parking<br/>9900...</span>
</div>
</div>
<div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-stone-900 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm border border-stone-100">
                            2 days ago
                        </div>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<div className="cursor-pointer" onclick="navigateTo('view-detail')">
<div className="flex items-center gap-2 mb-1">
<span className="px-1.5 py-0.5 rounded bg-stone-100 text-[10px] font-bold text-stone-600 uppercase tracking-wide">2 BHK</span>
<span className="px-1.5 py-0.5 rounded bg-orange-50 text-[10px] font-bold text-orange-700 uppercase tracking-wide">For Rent</span>
</div>
<h3 className="font-serif text-xl font-medium text-stone-900 leading-tight">Indiranagar, Stage 2</h3>
<p className="text-xs text-stone-500 mt-0.5">Near 12th Main Road</p>
</div>
<button className="p-2 -mr-2 text-stone-400 hover:text-stone-900" onclick="toggleSave(this)"><i className="w-5 h-5" data-lucide="bookmark"></i></button>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-green-200 bg-green-50 text-green-700 text-xs font-bold hover:bg-green-100 transition-colors" onclick="checkPremiumAndNavigate('tel:9845012345')">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> Call Owner
                            </button>
<button className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-400 text-xs font-bold hover:bg-stone-50 transition-colors" onclick="checkPremiumAndNavigate('geo:12.9716,77.5946')">
<i className="w-3.5 h-3.5" data-lucide="lock"></i> Directions
                            </button>
</div>
</div>
</div>
</div>
<div className="text-center mt-12 mb-4">
<button className="text-[10px] text-stone-300 uppercase tracking-widest hover:text-stone-500" onclick="navigateTo('view-admin-login')">Admin Panel Access</button>
</div>
</section>

<section className="view-section fixed inset-0 z-50 bg-[#FDFCF8] flex items-center justify-center p-4 min-h-screen w-full" id="view-login">
<div className="w-full max-w-sm relative">
<button className="absolute -top-12 right-0 p-2 rounded-full hover:bg-stone-100 transition-colors" onclick="navigateTo('view-explore')">
<i className="w-6 h-6 text-stone-400" data-lucide="x"></i>
</button>
<div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-stone-100 text-center relative overflow-hidden">
<div className="w-16 h-16 bg-stone-50 rounded-2xl mx-auto flex items-center justify-center mb-6 border border-stone-100 rotate-3 shadow-sm">
<i className="w-8 h-8 text-stone-900" data-lucide="fingerprint"></i>
</div>
<h2 className="text-3xl font-serif text-stone-900 mb-3">Welcome Back</h2>
<p className="text-stone-500 text-sm mb-8 leading-relaxed px-4">Sign in to verify posters and earn credits.</p>
<button className="w-full flex items-center justify-center gap-3 bg-white border border-stone-200 hover:bg-stone-50 text-stone-700 font-medium py-3.5 rounded-xl transition-all shadow-sm" onclick="handleGoogleLogin()">
<span className="font-bold text-blue-500">G</span> Continue with Google
                    </button>
</div>
</div>
</section>


<section className="view-section fixed inset-0 z-50 bg-[#FDFCF8] flex items-center justify-center p-4 min-h-screen w-full" id="view-complete-profile">
<div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-stone-200 p-6 relative">
<div className="text-center mb-6">
<h2 className="text-2xl font-serif text-stone-900">Complete Profile</h2>
<p className="text-xs text-stone-500">Just a few details to set up your account.</p>
</div>
<form className="space-y-4" onsubmit="submitProfileSetup(event)">
<div>
<label className="block text-[10px] font-bold uppercase tracking-wide text-stone-500 mb-1">Full Name</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-3 py-3 text-sm focus:ring-2 focus:ring-stone-900 outline-none" placeholder="e.g. Arjun Kumar" required="" type="text"/>
</div>
<div>
<label className="block text-[10px] font-bold uppercase tracking-wide text-stone-500 mb-1">Mobile Number</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-3 py-3 text-sm focus:ring-2 focus:ring-stone-900 outline-none" placeholder="+91" required="" type="tel"/>
</div>
<button className="w-full bg-stone-900 text-white font-semibold py-3.5 rounded-xl shadow-lg mt-2" type="submit">Complete Setup</button>
</form>
</div>
</section>

<section className="view-section pb-24" id="view-detail">
<div className="sticky top-16 z-20 bg-[#FDFCF8]/95 backdrop-blur py-3 px-4 border-b border-stone-200/50 flex items-center justify-between">
<button className="flex items-center gap-1 text-sm font-medium text-stone-600 hover:text-stone-900" onclick="goBack()">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back
                </button>
<button className="text-stone-400 hover:text-stone-900" onclick="toggleSave(this)"><i className="w-5 h-5" data-lucide="bookmark"></i></button>
</div>
<div className="px-4 py-6">
<div className="relative bg-stone-100 rounded-2xl aspect-square overflow-hidden flex items-center justify-center mb-6 border border-stone-200">
<div className="bg-[#FFFBF0] w-[85%] aspect-[3/4] shadow-2xl transform rotate-1 border-4 border-stone-300 p-6 flex flex-col items-center justify-center text-center">
<span className="text-red-600 font-black text-3xl tracking-tighter border-b-2 border-stone-800 pb-1 mb-3 block">TO-LET</span>
<span className="text-stone-900 font-bold text-sm uppercase leading-relaxed font-sans">2 BHK<br/>Ground Floor<br/>Parking</span>
</div>
<div className="absolute top-4 right-4 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full border border-emerald-100 shadow-sm flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i>
<span className="text-[10px] font-bold uppercase tracking-wide">Verified</span>
</div>
</div>
<h1 className="text-3xl font-serif text-stone-900 leading-none mb-2 tracking-tight">2 BHK Independent Floor</h1>
<p className="text-stone-500 text-sm mb-6 flex items-center gap-1"><i className="w-3.5 h-3.5" data-lucide="map-pin"></i> Indiranagar, Stage 2</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<button className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-green-600 text-white text-sm font-bold shadow-lg shadow-green-200 hover:bg-green-700 transition-all" onclick="checkPremiumAndNavigate('tel:9845012345')">
<i className="w-4 h-4" data-lucide="phone"></i> Call Owner
                    </button>
<button className="flex items-center justify-center gap-2 py-3.5 rounded-xl bg-stone-900 text-white text-sm font-bold shadow-lg hover:bg-stone-800 transition-all" onclick="checkPremiumAndNavigate('geo:12.9716,77.5946')">
<i className="w-4 h-4" data-lucide="navigation"></i> Directions
                    </button>
</div>
</div>
</section>


<section className="view-section pb-24" id="view-dashboard">
<div className="px-4 py-6 bg-white border-b border-stone-100">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full overflow-hidden border border-stone-200">
<img alt="user" className="w-full h-full object-cover" id="dashboard-avatar" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
<div>
<h1 className="text-2xl font-serif text-stone-900">Hello, Arjun</h1>
<button className="text-xs text-stone-400 hover:text-red-500" onclick="logoutUser()">Log out</button>
</div>
</div>
</div>
<div className="p-4 space-y-4">

<button className="w-full bg-gradient-to-r from-stone-900 to-stone-800 rounded-3xl p-6 text-white relative overflow-hidden shadow-xl text-left group" onclick="navigateTo('view-premium')">
<div className="relative z-10 flex justify-between items-center">
<div>
<p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-1">Premium</p>
<h3 className="text-xl font-serif">Unlock all features</h3>
</div>
<i className="w-5 h-5 text-stone-400 group-hover:text-white transition-colors" data-lucide="arrow-up-right"></i>
</div>
</button>

<div className="space-y-2">
<button className="w-full bg-white p-4 rounded-xl border border-stone-200 shadow-sm hover:border-stone-400 transition-all text-left flex items-center justify-between group" onclick="navigateTo('view-my-uploads')">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-blue-50 text-blue-600"><i className="w-4 h-4" data-lucide="camera"></i></div>
<span className="font-medium text-sm text-stone-900">My Uploads</span>
</div>
<i className="w-4 h-4 text-stone-300 group-hover:text-stone-600" data-lucide="chevron-right"></i>
</button>
<button className="w-full bg-white p-4 rounded-xl border border-stone-200 shadow-sm hover:border-stone-400 transition-all text-left flex items-center justify-between group" onclick="navigateTo('view-saved')">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-orange-50 text-orange-600"><i className="w-4 h-4" data-lucide="bookmark"></i></div>
<span className="font-medium text-sm text-stone-900">Saved Listings</span>
</div>
<i className="w-4 h-4 text-stone-300 group-hover:text-stone-600" data-lucide="chevron-right"></i>
</button>
<button className="w-full bg-white p-4 rounded-xl border border-stone-200 shadow-sm hover:border-stone-400 transition-all text-left flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-green-50 text-green-600"><i className="w-4 h-4" data-lucide="coins"></i></div>
<span className="font-medium text-sm text-stone-900">Credits: 100</span>
</div>
<i className="w-4 h-4 text-stone-300 group-hover:text-stone-600" data-lucide="chevron-right"></i>
</button>
<button className="w-full bg-white p-4 rounded-xl border border-stone-200 shadow-sm hover:border-stone-400 transition-all text-left flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-stone-50 text-stone-600"><i className="w-4 h-4" data-lucide="settings"></i></div>
<span className="font-medium text-sm text-stone-900">Settings</span>
</div>
<i className="w-4 h-4 text-stone-300 group-hover:text-stone-600" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>

<section className="view-section pb-24" id="view-my-uploads">
<div className="sticky top-16 bg-[#FDFCF8]/95 backdrop-blur p-4 border-b border-stone-200/50 flex items-center gap-3">
<button className="p-1 -ml-1" onclick="goBack()"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<h1 className="text-lg font-serif">My Uploads</h1>
</div>
<div className="p-8 text-center">
<p className="text-stone-500 text-sm">You haven't uploaded any posters yet.</p>
</div>
</section>

<section className="view-section pb-24" id="view-premium">
<div className="sticky top-16 bg-[#FDFCF8]/95 backdrop-blur p-4 border-b border-stone-200/50">
<button className="flex items-center gap-1 text-sm font-medium text-stone-600" onclick="goBack()"><i className="w-4 h-4" data-lucide="arrow-left"></i> Back</button>
</div>
<div className="p-6">
<h1 className="text-4xl font-serif text-stone-900 mb-4 tracking-tight">Upgrade to Premium</h1>
<p className="text-stone-500 mb-8 leading-relaxed">Stop chasing ghosts. Get direct access to owners and exact locations.</p>
<div className="space-y-4 mb-8">
<label className="block relative cursor-pointer">
<input checked="" className="peer sr-only" name="plan" type="radio"/>
<div className="p-6 rounded-2xl border border-stone-200 bg-white shadow-sm peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 transition-all">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold uppercase tracking-wider text-stone-500">Weekly</span>
<div className="w-5 h-5 rounded-full border border-stone-300 peer-checked:bg-stone-900 peer-checked:border-stone-900"></div>
</div>
<p className="text-3xl font-serif text-stone-900">₹49 <span className="text-sm font-sans text-stone-400">/ 7 days</span></p>
</div>
</label>
<label className="block relative cursor-pointer">
<input className="peer sr-only" name="plan" type="radio"/>
<div className="p-6 rounded-2xl border border-stone-200 bg-white shadow-sm peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 transition-all">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-bold uppercase tracking-wider text-stone-500">Monthly</span>
<span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">Best Value</span>
</div>
<p className="text-3xl font-serif text-stone-900">₹99 <span className="text-sm font-sans text-stone-400">/ 30 days</span></p>
</div>
</label>
</div>
<div className="space-y-4 mb-10">
<h3 className="font-bold text-sm uppercase text-stone-400 tracking-wider">What's Included</h3>
<div className="flex items-center gap-3"><div className="p-1 rounded-full bg-green-100 text-green-600"><i className="w-3 h-3" data-lucide="check"></i></div><span className="text-sm text-stone-700">View exact map location</span></div>
<div className="flex items-center gap-3"><div className="p-1 rounded-full bg-green-100 text-green-600"><i className="w-3 h-3" data-lucide="check"></i></div><span className="text-sm text-stone-700">One-click driving directions</span></div>
<div className="flex items-center gap-3"><div className="p-1 rounded-full bg-green-100 text-green-600"><i className="w-3 h-3" data-lucide="check"></i></div><span className="text-sm text-stone-700">Full owner contact details</span></div>
</div>
<button className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold text-lg shadow-xl hover:bg-stone-800 transition-transform active:scale-95" onclick="activatePremium()">Upgrade Now</button>
</div>
</section>

<section className="view-section pb-24" id="view-saved">
<div className="sticky top-16 bg-[#FDFCF8]/95 backdrop-blur p-4 border-b border-stone-200/50 flex justify-between items-center">
<button className="flex items-center gap-1 text-sm font-medium text-stone-600" onclick="goBack()"><i className="w-4 h-4" data-lucide="arrow-left"></i> Back</button>
<h1 className="text-lg font-serif">Saved Homes</h1>
</div>
<div className="p-4 space-y-4" id="saved-list-container">
<div className="bg-white rounded-2xl border border-stone-200 p-4 flex gap-4">
<div className="w-24 h-24 bg-stone-100 rounded-xl shrink-0 flex items-center justify-center text-xs text-stone-400 font-serif overflow-hidden">
<div className="bg-[#FFFBF0] w-[80%] h-[80%] border border-stone-300 shadow-sm flex items-center justify-center text-[8px] text-center rotate-2 p-1">TO-LET<br/>2BHK</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-start">
<div>
<h3 className="font-serif text-lg leading-tight mb-1">Indiranagar</h3>
<p className="text-xs text-stone-500 mb-3">2 BHK • Rent</p>
</div>
<button className="text-stone-900"><i className="w-4 h-4" data-lucide="bookmark-minus"></i></button>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded-lg bg-green-50 text-green-700 text-xs font-bold border border-green-100">Call</button>
<button className="flex-1 py-2 rounded-lg bg-white text-stone-700 text-xs font-bold border border-stone-200">Directions</button>
</div>
</div>
</div>
</div>
</section>




<section className="view-section fixed inset-0 z-50 bg-[#111] flex items-center justify-center p-4 min-h-screen w-full" id="view-admin-login">
<div className="w-full max-w-sm bg-stone-900 border border-stone-800 p-8 rounded-2xl text-center">
<h2 className="text-2xl font-serif text-white mb-2">Admin Portal</h2>
<p className="text-stone-500 text-sm mb-8">Authorized personnel only.</p>
<button className="w-full bg-white text-stone-900 font-bold py-3 rounded-lg hover:bg-stone-200 transition-colors" onclick="adminLogin()">Sign in with Google</button>
<button className="mt-6 text-xs text-stone-600 hover:text-stone-400" onclick="navigateTo('view-explore')">Back to Public Site</button>
</div>
</section>

<section className="view-section pt-20 pb-12 bg-stone-50 min-h-screen" id="view-admin-dashboard">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-3xl font-serif text-stone-900 mb-8">Overview</h1>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
<div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
<p className="text-xs font-bold uppercase text-stone-400 mb-1">Total Listings</p>
<p className="text-3xl font-serif text-stone-900">1,248</p>
</div>
<div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
<p className="text-xs font-bold uppercase text-amber-500 mb-1">Under Review</p>
<p className="text-3xl font-serif text-stone-900">42</p>
</div>
</div>
</div>
</section>

<section className="view-section pt-20 pb-12 bg-stone-50 min-h-screen" id="view-admin-listings">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-3xl font-serif text-stone-900 mb-6">Listings Management</h1>
<div className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-sm">
<table className="w-full text-left text-sm">
<thead className="bg-stone-50 border-b border-stone-200">
<tr>
<th className="px-6 py-4 font-semibold text-stone-500">ID</th>
<th className="px-6 py-4 font-semibold text-stone-500">Area</th>
<th className="px-6 py-4 font-semibold text-stone-500">Status</th>
<th className="px-6 py-4 font-semibold text-stone-500">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-stone-100">
<tr className="hover:bg-stone-50 cursor-pointer" onclick="alert('Open Admin Detail')">
<td className="px-6 py-4 font-mono text-xs">#TL-8821</td>
<td className="px-6 py-4">Indiranagar</td>
<td className="px-6 py-4"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">Active</span></td>
<td className="px-6 py-4 text-stone-400"><i className="w-4 h-4" data-lucide="chevron-right"></i></td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="view-section pt-20 pb-12 bg-stone-50 min-h-screen" id="view-admin-reports">
<div className="max-w-7xl mx-auto px-6">
<h1 className="text-3xl font-serif text-stone-900 mb-6">Reports</h1>
<div className="bg-white p-8 rounded-xl border border-stone-200 text-center text-stone-500">
                    No active reports.
                </div>
</div>
</section>
</main>


    </>
  );
}
