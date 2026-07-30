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
theme: {
extend: {
colors: {
primary: {
500: 'hsl(260, 95%, 63%)', // purple
600: 'hsl(250, 95%, 58%)', // darker purple
700: 'hsl(270, 95%, 68%)', // lighter purple
},
secondary: {
800: 'hsl(280, 90%, 80%)', // light purple
},
darkGray: {
50: 'hsl(225, 20%, 10%)', // dark purple-tinted gray
100: 'hsl(225, 15%, 15%)', // slightly lighter
}
},
fontFamily: {
jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
inter: ['Inter', 'sans-serif'],
}
}
}
}



        // Close functionality
        document.getElementById('closeBtn').addEventListener('click', function() {
            document.body.innerHTML = '<div class="min-h-screen bg-slate-900 flex items-center justify-center text-white font-medium">Modal Closed</div>';
        });

        document.getElementById('cancelBtn').addEventListener('click', function() {
            document.getElementById('closeBtn').click();
        });

        // Upgrade functionality
        document.getElementById('upgradeBtn').addEventListener('click', function() {
            const btn = this;
            btn.innerHTML = '<i class="fas fa-spinner animate-spin"></i> Processing...';
            btn.disabled = true;
            
            setTimeout(() => {
                document.body.innerHTML = `
                    <div class="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                        <div class="text-center">
                            <div class="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                <i class="fas fa-check text-2xl text-emerald-400"></i>
                            </div>
                            <h2 class="text-2xl font-bold text-white mb-2">Upgrade Successful!</h2>
                            <p class="text-white/70">Welcome to StreamFlow Pro</p>
                        </div>
                    </div>
                `;
            }, 2000);
        });

        // Payment method selection
        document.querySelectorAll('input[name="payment"]').forEach(radio => {
            radio.addEventListener('change', function() {
                document.querySelectorAll('.payment-method').forEach(method => {
                    method.classList.remove('selected');
                });
                this.closest('.payment-method').classList.add('selected');
            });
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url("/assets/04f24b31-1be5-4425-bd2c-46dbf17db590_3840w.jpg")`}}></div>

<div className="absolute inset-0">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
</div>
<div className="relative">

<div className="modal-card absolute glow z-0 h-2/3 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-[url(/assets/e923ad25-c307-4eeb-a564-655c0bce21f7_1600w.jpg)] bg-cover translate-x-20 translate-y-28" style={{}}></div>

<div className="modal-card glass-effect overflow-hidden relative z-10 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-3xl top-8">

<div className="absolute inset-0 rounded-[1.5em] border border-white/50 [mask-image:linear-gradient(135deg,white,transparent_50%)]"></div>
<div className="absolute inset-0 rounded-[1.5em] border border-primary-500/50 [mask-image:linear-gradient(135deg,transparent_50%,white)]"></div>

<div className="flex flex-col h-full card-content-gradient relative">

<div className="flex pt-6 pr-6 pb-0 pl-6 items-start justify-between">
<div className="flex items-center gap-4">
<div className="icon-circle shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<i className="fas fa-bolt text-lg text-primary-300"></i>
</div>
<div className="">
<h1 className="text-2xl font-semibold font-jakarta tracking-tight">Upgrade Plan</h1>
<p className="text-sm opacity-80">Unlock premium AI capabilities</p>
</div>
</div>
<button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors" id="closeBtn">
<i className="fas fa-times text-sm opacity-60 hover:opacity-100"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto scrollable-content pt-6 pr-6 pb-6 pl-6">

<div className="flex items-center gap-3 text-sm font-medium opacity-80 mb-4">
<i className="fas fa-arrow-right text-xs text-emerald-400"></i>
                        Upgrading from Basic to Pro
                    </div>

<div className="flex gap-2 mb-6 items-end">
<div className="price-value gradient-text bg-gradient-to-r from-white/90 to-white/70">$49</div>
<div className="text-lg opacity-70 mb-2">/month</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="feature-label flex items-center gap-2">
<i className="fas fa-check text-emerald-400 text-xs"></i>
                            25,000 AI tokens/month
                        </div>
<div className="feature-label flex items-center gap-2">
<i className="fas fa-check text-emerald-400 text-xs"></i>
                            Priority processing
                        </div>
<div className="feature-label flex items-center gap-2">
<i className="fas fa-check text-emerald-400 text-xs"></i>
                            Advanced templates
                        </div>
<div className="feature-label flex items-center gap-2">
<i className="fas fa-check text-emerald-400 text-xs"></i>
                            24/7 priority support
                        </div>
<div className="feature-label flex items-center gap-2">
<i className="fas fa-check text-emerald-400 text-xs"></i>
                            Custom integrations
                        </div>
<div className="feature-label flex items-center gap-2">
<i className="fas fa-check text-emerald-400 text-xs"></i>
                            API access
                        </div>
<div className="feature-label flex items-center gap-2">
<i className="fas fa-check text-emerald-400 text-xs"></i>
                            Advanced analytics
                        </div>
<div className="feature-label flex items-center gap-2">
<i className="fas fa-check text-emerald-400 text-xs"></i>
                            Multi-user workspace
                        </div>
</div>

<div className="flex flex-wrap gap-2 mb-6">
<span className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/20">AI POWERED</span>
<span className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/20">CLOUD SYNC</span>
<span className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/20">TEAM READY</span>
<span className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/20">ENTERPRISE</span>
</div>
<div className="card-divider w-full mb-6"></div>

<div className="bg-white/5 border-white/10 border rounded-2xl mb-6 pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
<i className="fas fa-info text-blue-400 text-xs"></i>
</div>
<div className="text-sm">
<p className="font-medium mb-1">Prorated Billing</p>
<p className="opacity-80">You'll be charged <span className="font-semibold text-white">$31.50</span> today for the remaining 19 days. Next month: full $49.</p>
</div>
</div>
</div>

<div className="space-y-4 mb-6">
<h3 className="font-medium text-white flex items-center gap-2">
<i className="fas fa-credit-card text-sm opacity-70"></i>
                            Payment Method
                        </h3>
<div className="space-y-3">
<label className="payment-method flex items-center justify-between cursor-pointer selected rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<div className="flex items-center gap-4">
<div className="w-12 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
                                        VISA
                                    </div>
<div>
<p className="font-medium">•••• •••• •••• 4582</p>
<p className="text-xs opacity-70">Expires 12/28</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-[10px] px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">Default</span>
<input checked className="text-primary-500" name="payment" type="radio" />
</div>
</label>
<label className="payment-method flex items-center justify-between p-4 rounded-xl cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-8 bg-gradient-to-r from-red-500 to-yellow-500 rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
                                        MC
                                    </div>
<div>
<p className="font-medium">•••• •••• •••• 8291</p>
<p className="text-xs opacity-70">Expires 09/27</p>
</div>
</div>
<input className="text-primary-500" name="payment" type="radio" />
</label>
<label className="payment-method flex items-center justify-between p-4 rounded-xl cursor-pointer">
<div className="flex items-center gap-4">
<div className="w-12 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-white text-[10px] font-bold">
                                        AMEX
                                    </div>
<div>
<p className="font-medium">•••• •••• •••• 7739</p>
<p className="text-xs opacity-70">Expires 05/26</p>
</div>
</div>
<input className="text-primary-500" name="payment" type="radio" />
</label>
</div>
</div>
<div className="card-divider w-full mb-6"></div>

<div className="mb-6">
<h3 className="font-medium text-white mb-4">What's included:</h3>
<div className="space-y-3">
<div className="flex items-start gap-3 text-sm">
<i className="fas fa-star text-yellow-400 text-xs mt-1"></i>
<div>
<p className="font-medium">Advanced AI Models</p>
<p className="opacity-70 text-xs">Access to GPT-4, Claude, and more premium models</p>
</div>
</div>
<div className="flex items-start gap-3 text-sm">
<i className="fas fa-users text-blue-400 text-xs mt-1"></i>
<div>
<p className="font-medium">Team Collaboration</p>
<p className="opacity-70 text-xs">Share projects and collaborate with team members</p>
</div>
</div>
<div className="flex items-start gap-3 text-sm">
<i className="fas fa-chart-line text-green-400 text-xs mt-1"></i>
<div>
<p className="font-medium">Advanced Analytics</p>
<p className="opacity-70 text-xs">Detailed insights and usage analytics</p>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 pt-0 border-t border-white/10">
<div className="flex flex-col sm:flex-row gap-3">
<button className="flex-1 px-6 py-3 rounded-xl glass-button bg-white/5 border border-white/20 font-medium hover:bg-white/10 transition-all" id="cancelBtn">
                            Cancel
                        </button>
<button className="flex-1 px-6 py-3 rounded-xl glass-button bg-primary-500/30 border border-primary-500/50 font-medium hover:bg-primary-500/40 transition-all flex items-center justify-center gap-2" id="upgradeBtn">
<i className="fas fa-rocket text-sm"></i>
                            Upgrade to Pro
                        </button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
