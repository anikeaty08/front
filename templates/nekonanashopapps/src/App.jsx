import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- DATA OBJECT ---
        const DATA = {
            streaming: {
                "Netflix": [
                    { plan: "Sharing", price: 10, duration: "1 Month" },
                    { plan: "Private", price: 18, duration: "1 Month" },
                    { plan: "Semi-Private", price: 26, duration: "1 Month" }
                ],
                "VIU": [
                    { plan: "Sharing", price: 3, duration: "1 Month" },
                    { plan: "Private", price: 15, duration: "1 Month" }
                ],
                "iQIYI": [
                    { plan: "Sharing Premium", price: 1.5, duration: "1 Month" },
                    { plan: "Sharing Anti-Limit", price: 5, duration: "1 Month" },
                    { plan: "Sharing Standard", price: 0.8, duration: "1 Month" }
                ],
                "Youku": [
                    { plan: "Sharing", price: 0.9, duration: "1 Month" },
                    { plan: "Sharing", price: 2.5, duration: "3 Month" },
                    { plan: "Sharing", price: 4.5, duration: "1 Year" }
                ],
                "Disney+ Hotstar": [
                    { plan: "Private", price: 11, duration: "1 Month" }
                ],
                "Bilibili": [
                    { plan: "Sharing", price: 1.5, duration: "1 Month" },
                    { plan: "Sharing", price: 3, duration: "3 Month" },
                    { plan: "Sharing", price: 5, duration: "1 Year" }
                ],
                "Amazon Prime": [
                    { plan: "Private", price: 2.5, duration: "1 Month" }
                ],
                "Loklok": [
                    { plan: "Sharing Basic", price: 5, duration: "1 Month" },
                    { plan: "Sharing Standard", price: 6.5, duration: "1 Month" },
                    { plan: "Private", price: 15, duration: "1 Month" }
                ],
                "HBO Max": [
                    { plan: "Sharing", price: 5, duration: "1 Month" }
                ],
                "DramaBox": [
                    { plan: "Sharing", price: 5, duration: "1 Month" }
                ],
                "Reelshort": [
                    { plan: "Sharing", price: 3.5, duration: "1 Month" }
                ],
                "CrunchyRoll": [
                    { plan: "Sharing", price: 1.5, duration: "1 Month" },
                    { plan: "Sharing", price: 5, duration: "1 Year" }
                ],
                "YouTube Premium": [
                    { plan: "Family Plan", price: 2, duration: "1 Month" },
                    { plan: "IndPlan", price: 4, duration: "1 Month" }
                ]
            },
            editing: {
                "Canva": [
                    { plan: "Member", price: 0.3, duration: "1 Month" },
                    { plan: "Member", price: 0.9, duration: "3 Month" },
                    { plan: "Member", price: 1.5, duration: "6 Month" },
                    { plan: "Lifetime EDU", price: 0.7, duration: "LifeTime" },
                    { plan: "Canva Head", price: 2.5, duration: "1 Month" },
                    { plan: "Canva Head", price: 5, duration: "2 Month" }
                ],
                "Capcut": [
                    { plan: "Sharing", price: 2.5, duration: "1 Month" },
                    { plan: "Private", price: 5, duration: "1 Month" }
                ],
                "Alight Motion": [
                    { plan: "Private", price: 0.5, duration: "6 Month" },
                    { plan: "Private", price: 0.9, duration: "1 Year" }
                ],
                "Picsart": [
                    { plan: "Sharing", price: 2.5, duration: "1 Month" },
                    { plan: "Private", price: 3.5, duration: "1 Month" }
                ],
                "Meltu": [
                    { plan: "Sharing", price: 4.5, duration: "1 Month" },
                    { plan: "Private 7-Day Android", price: 2.5, duration: "7 Days" }
                ],
                "Lightroom": [
                    { plan: "Sharing", price: 0.5, duration: "1 Month" },
                    { plan: "Sharing", price: 4.5, duration: "1 Year" }
                ]
            }
        };

        // --- GLOBAL VARIABLES ---
        let currentApp = "";
        let currentPlan = "";

        // --- INIT EMAILJS (Updated) ---
        (function () {
            emailjs.init("XGEYSKj3_xbmc2XlO");
        })();

        // --- NAVIGATION LOGIC ---
        function switchView(viewId) {
            document.querySelectorAll('[id^="view-"]').forEach(el => el.classList.add('hidden'));
            const view = document.getElementById(viewId);
            view.classList.remove('hidden');
            view.classList.remove('fade-in');
            void view.offsetWidth; 
            view.classList.add('fade-in');
            window.scrollTo(0, 0);
        }

        function goHome() {
            switchView('view-home');
        }

        function selectCategory(cat) {
            const listContainer = document.getElementById('apps-list');
            const label = document.getElementById('selected-cat-label');
            listContainer.innerHTML = '';
            
            label.innerText = cat === 'streaming' ? 'Streaming Apps' : 'Editing Tools';
            const currentCat = cat;

            Object.keys(DATA[cat]).forEach(appName => {
                const btn = document.createElement('button');
                btn.className = "bg-white/60 hover:bg-white border border-pink-100 hover:border-pink-300 rounded-2xl p-4 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:scale-[1.02] flex flex-col items-center gap-2";
                
                let icon = 'solar:smartphone-linear';
                if(cat === 'streaming') icon = 'solar:play-circle-linear';
                if(cat === 'editing') icon = 'solar:magic-stick-3-linear';
                
                btn.innerHTML = `
                    <div class="w-10 h-10 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center mb-1">
                        <iconify-icon icon="${icon}" width="20"></iconify-icon>
                    </div>
                    ${appName}
                `;
                btn.onclick = () => selectApp(currentCat, appName);
                listContainer.appendChild(btn);
            });
            switchView('view-apps');
        }

        function selectApp(cat, appName) {
            currentApp = appName;
            document.getElementById('plan-app-title').innerText = appName;
            const plansContainer = document.getElementById('plans-list');
            plansContainer.innerHTML = '';

            DATA[cat][appName].forEach(p => {
                const btn = document.createElement('button');
                btn.className = "w-full bg-white/70 hover:bg-white border border-pink-100 hover:border-pink-400 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition-all group";
                btn.innerHTML = `
                    <div class="flex justify-between items-center">
                        <div>
                            <span class="block font-semibold text-slate-800 text-lg">${p.plan}</span>
                            <span class="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">${p.duration}</span>
                        </div>
                        <div class="text-right">
                            <span class="block text-xl font-bold text-pink-600">RM${p.price}</span>
                        </div>
                    </div>
                `;
                btn.onclick = () => selectPlan(p.plan);
                plansContainer.appendChild(btn);
            });
            switchView('view-plans');
        }

        function selectPlan(planName) {
            currentPlan = planName;
            prepareOrderForm();
            switchView('view-order');
        }

        // --- ORDER FORM PREPARATION (Updated Logic) ---
        function prepareOrderForm() {
            // Mapping global variables to local ones to match logic structure
            const app = currentApp;
            const plan = currentPlan;

            // AUTO DATE (TODAY)
            document.getElementById("orderDate").value = new Date().toLocaleDateString();

            // SHOW APP & PLAN
            document.getElementById("appText").innerText = app;
            document.getElementById("planText").innerText = plan;

            // HIDDEN INPUTS
            document.querySelector("input[name='app']").value = app;
            document.querySelector("input[name='plan']").value = plan;

            // PRIVATE PLAN → PROFILE NAME
            if (plan && plan.toLowerCase().includes("private")) {
                document.getElementById("profileBox").style.display = "block";
            } else {
                document.getElementById("profileBox").style.display = "none";
            }

            // NETFLIX → PIN
            if (app && app.toLowerCase() === "netflix") {
                document.getElementById("pinBox").style.display = "block";
            } else {
                document.getElementById("pinBox").style.display = "none";
            }
        }

        // --- FORM SUBMIT (Updated Logic) ---
        document.getElementById("orderForm").addEventListener("submit", function (e) {
            e.preventDefault();

            // Visual loading state
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = "Sending...";
            btn.disabled = true;

            emailjs
                .sendForm(
                    "service_zuo1ddi", // Updated Service ID
                    "template_o2ctqzh", // Updated Template ID
                    this
                )
                .then(
                    function () {
                        // Success
                        alert("Order sent successfully!Please Wait Until The Owner Chat You In Telegram or Whatsapp");
                        goHome();
                        // Reset form visual
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        document.getElementById("orderForm").reset();
                    },
                    function (error) {
                        // Error
                        console.error("EMAILJS ERROR:", error);
                        alert("Error sending order. Check console.");
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                    }
                );
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/50">
<div className="max-w-2xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer" onclick="goHome()">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-pink-500/30">
<iconify-icon icon="solar:cat-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-bold tracking-tight text-lg bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">Nekonana</span>
</div>
<button className="p-2 rounded-full hover:bg-pink-50 text-pink-500 transition-colors" onclick="goHome()">
<iconify-icon icon="solar:home-2-linear" width="22"></iconify-icon>
</button>
</div>
</nav>

<main className="pt-24 pb-12 px-6 max-w-xl mx-auto min-h-screen flex flex-col justify-center">

<div className="fade-in space-y-8 text-center" id="view-home">
<div className="relative inline-block">
<div className="absolute inset-0 bg-pink-400 blur-2xl opacity-20 rounded-full"></div>
<div className="relative w-24 h-24 mx-auto bg-white rounded-2xl shadow-xl shadow-pink-500/20 flex items-center justify-center text-pink-500 mb-6 border border-pink-100">
<iconify-icon icon="solar:bag-heart-linear" width="48"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<h1 className="text-4xl font-bold tracking-tight text-slate-900">
                    Premium Apps,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-500">Petite Prices.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed">
                    Trusted memberships and premium upgrades for your favorite creative and streaming apps.
                </p>
</div>
<button className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold text-lg shadow-xl shadow-pink-500/30 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2" onclick="switchView('view-category')">
<span>Start Shopping</span>
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

<div className="hidden fade-in" id="view-category">
<h2 className="text-2xl font-bold text-center mb-2">What do you need?</h2>
<p className="text-slate-500 text-center mb-8">Choose a category to browse apps</p>
<div className="grid grid-cols-1 gap-4">
<button className="group relative overflow-hidden p-6 rounded-3xl glass-panel text-left hover:border-pink-300 transition-all hover:shadow-lg shadow-pink-500/10" onclick="selectCategory('streaming')">
<div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-purple-100 rounded-full blur-2xl transition-all group-hover:bg-purple-200"></div>
<div className="relative z-10 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center">
<iconify-icon icon="solar:tv-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-lg text-slate-800">Streaming Apps</h3>
<p className="text-sm text-slate-500">Netflix, Disney+, Viu &amp; more</p>
</div>
</div>
</button>
<button className="group relative overflow-hidden p-6 rounded-3xl glass-panel text-left hover:border-pink-300 transition-all hover:shadow-lg shadow-pink-500/10" onclick="selectCategory('editing')">
<div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-pink-100 rounded-full blur-2xl transition-all group-hover:bg-pink-200"></div>
<div className="relative z-10 flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-pink-50 text-pink-500 flex items-center justify-center">
<iconify-icon icon="solar:palette-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="font-semibold text-lg text-slate-800">Editing Apps</h3>
<p className="text-sm text-slate-500">Canva, CapCut, Adobe &amp; more</p>
</div>
</div>
</button>
</div>
<button className="mt-8 mx-auto flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors" onclick="switchView('view-home')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                Back to Home
            </button>
</div>

<div className="hidden fade-in" id="view-apps">
<h2 className="text-2xl font-bold text-center mb-2">Select App</h2>
<p className="text-slate-500 text-center mb-8" id="selected-cat-label">Browsing apps</p>
<div className="grid grid-cols-2 gap-3" id="apps-list">

</div>
<button className="mt-8 mx-auto flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors" onclick="switchView('view-category')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                Back to Categories
            </button>
</div>

<div className="hidden fade-in" id="view-plans">
<h2 className="text-2xl font-bold text-center mb-2" id="plan-app-title">App Name</h2>
<p className="text-slate-500 text-center mb-8">Choose your subscription plan</p>
<div className="space-y-3" id="plans-list">

</div>
<button className="mt-8 mx-auto flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors" onclick="switchView('view-apps')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                Back to Apps
            </button>
</div>

<div className="hidden fade-in pb-20" id="view-order">
<div className="glass-panel p-6 rounded-3xl border-t border-white/60">
<h2 className="text-xl font-bold mb-6 flex items-center gap-2">
<iconify-icon className="text-pink-500" icon="solar:bag-check-linear"></iconify-icon>
                    Complete Your Order
                </h2>
<div className="bg-pink-50/50 rounded-xl p-4 mb-6 border border-pink-100">
<div className="flex justify-between items-center mb-1">
<span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Application</span>
<span className="text-sm font-semibold text-slate-800" id="appText"></span>
</div>
<div className="flex justify-between items-center">
<span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Plan</span>
<span className="text-sm font-semibold text-pink-600" id="planText"></span>
</div>
</div>
<form className="space-y-4" id="orderForm">

<input name="app" type="hidden"/>
<input name="plan" type="hidden"/>

<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Your Name</label>
<input className="w-full bg-white/50 border border-pink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 transition-all placeholder:text-slate-400" name="name" placeholder="Your Name" required=""/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Email</label>
<input className="w-full bg-white/50 border border-pink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 transition-all placeholder:text-slate-400" name="email" placeholder="Email" required="" type="email"/>
</div>

<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Order Date</label>
<input className="w-full bg-slate-100 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-500 cursor-not-allowed" id="orderDate" name="date" readonly="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">WhatsApp Number</label>
<input className="w-full bg-white/50 border border-pink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 transition-all placeholder:text-slate-400" name="phone" placeholder="Phone Number (WhatsApp)" required="" type="tel"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Device Type</label>
<div className="relative">
<select className="w-full bg-white/50 border border-pink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 transition-all appearance-none text-slate-700" name="device_type" required="">
<option value="">Device Type</option>
<option>Android</option>
<option>iPhone</option>
<option>PC / Laptop</option>
<option>Smart TV</option>
</select>
<iconify-icon className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Device Brand</label>
<input className="w-full bg-white/50 border border-pink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 transition-all placeholder:text-slate-400" name="device_brand" placeholder="Device Brand" required=""/>
</div>
</div>
<div id="profileBox" style={{display: 'none'}}>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Profile Name (Private Plan)</label>
<input className="w-full bg-white/50 border border-pink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 transition-all placeholder:text-slate-400" name="profile_name" placeholder="Profile Name"/>
</div>
<div id="pinBox" style={{display: 'none'}}>
<label className="block text-xs font-semibold text-slate-500 mb-1.5 ml-1">Netflix PIN</label>
<input className="w-full bg-white/50 border border-pink-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 transition-all placeholder:text-slate-400" maxlength="4" name="netflix_pin" placeholder="4-digit Netflix PIN"/>
</div>
<button className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold shadow-lg shadow-pink-500/30 hover:shadow-pink-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2" type="submit">
<span>Submit Order</span>
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="20"></iconify-icon>
</button>
</form>
</div>
<button className="mt-8 mx-auto flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 transition-colors" onclick="switchView('view-plans')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                Change Plan
            </button>
</div>
</main>


    </>
  );
}
