import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
nmex: {
bg: '#1C1C1E',
card: '#2C2C2E',
input: '#2C2C2E',
border: '#38383A',
blue: '#0A84FF',
green: '#34C759',
red: '#FF3B30',
gold: '#C5A059',
text: '#FFFFFF',
subtext: '#A1A1A6',
muted: '#8E8E93',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tight: '-0.025em',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full flex flex-col items-center justify-center min-h-screen py-12 gap-12 fade-in" id="login-view">

<div className="w-[480px] bg-[#1C1C1E] rounded-3xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] border border-white/5 p-8 flex flex-col gap-8 relative z-10">

<div className="text-center space-y-2">
<div className="flex flex-col items-center gap-1">
<h1 className="text-2xl font-bold tracking-tight text-white">NMEX</h1>
<span className="text-[10px] font-medium tracking-wider text-nmex-subtext uppercase">Verification &amp; Authorization Services</span>
</div>
<h2 className="text-2xl font-bold text-white pt-4">Client Portal</h2>
</div>

<div className="space-y-4">
<div className="space-y-1">
<input autocomplete="off" className="w-full bg-nmex-input border border-nmex-border rounded-lg px-3 py-3 text-white placeholder-transparent focus:outline-none focus:border-nmex-blue focus:ring-1 focus:ring-nmex-blue transition-all" type="email"/>
</div>
<div className="space-y-1">
<input className="w-full bg-nmex-input border border-nmex-border rounded-lg px-3 py-3 text-white font-mono placeholder-nmex-subtext focus:outline-none focus:border-nmex-blue focus:ring-1 focus:ring-nmex-blue transition-all" placeholder="Enter NPP" type="password"/>
</div>
<div className="flex items-center gap-2 pt-1">
<input className="w-4 h-4 rounded border-nmex-subtext bg-transparent text-nmex-blue focus:ring-0 focus:ring-offset-0" id="remember" type="checkbox"/>
<label className="text-sm text-nmex-subtext cursor-pointer select-none" htmlFor="remember">Remember this device</label>
</div>
</div>

<button className="w-full bg-nmex-blue hover:bg-blue-600 text-white font-medium text-lg py-4 rounded-xl transition-colors tracking-tight flex items-center justify-center gap-2" onclick="simulateLogin()">
                Log In
            </button>
</div>

<div className="flex gap-8 opacity-60 hover:opacity-100 transition-opacity">

<div className="w-[320px] bg-[#1C1C1E] rounded-2xl border border-white/5 p-6 transform scale-90">
<div className="text-xs uppercase text-nmex-subtext mb-2 text-center">State A: Validation Error</div>
<button className="w-full bg-nmex-blue text-white font-medium py-3 rounded-lg text-sm mb-4">Log In</button>
<div className="flex items-center justify-center gap-2 text-nmex-red">
<iconify-icon icon="solar:info-circle-linear" width="16"></iconify-icon>
<span className="text-sm">Incorrect email or PIN. Please try again.</span>
</div>
</div>

<div className="w-[320px] bg-[#1C1C1E] rounded-2xl border border-white/5 p-6 transform scale-90">
<div className="text-xs uppercase text-nmex-subtext mb-2 text-center">State B: Loading</div>
<button className="w-full bg-nmex-blue text-white font-medium py-3 rounded-lg text-sm flex items-center justify-center gap-2 cursor-wait">
<iconify-icon className="animate-spin" icon="solar:spinner-linear" width="20"></iconify-icon>
                    Logging in...
                </button>
</div>
</div>
</div>

<div className="hidden w-full max-w-[1200px] flex-col gap-8 p-8 fade-in" id="dashboard-view">

<header className="flex items-center justify-between w-full pb-4 border-b border-white/5">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-nmex-card flex items-center justify-center text-sm font-semibold border border-white/10">SC</div>
<div>
<div className="flex items-center gap-2">
<h1 className="text-xl font-semibold text-white tracking-tight">Welcome back, Sharday Charley SW</h1>
<span className="flex items-center gap-1 bg-[#34C759]/10 text-nmex-green text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#34C759]/20">
<iconify-icon icon="solar:check-circle-linear" width="12"></iconify-icon>
                            VERIFIED
                        </span>
</div>
<div className="flex items-center gap-3 mt-1">
<span className="text-xs text-nmex-subtext">NM-REG-8829</span>
<span className="text-xs text-nmex-border">•</span>
<span className="text-xs text-nmex-subtext">Last login: Feb 13, 2026 – 10:47 AM</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-1">
<div className="flex items-center gap-2 text-xs text-nmex-muted">
<iconify-icon icon="solar:lock-keyhole-linear" width="12"></iconify-icon>
                    Logged in via NPP
                </div>
<div className="text-xs text-nmex-muted font-mono tracking-widest">PIN: ••••</div>
</div>
</header>

<nav className="flex items-center gap-8 border-b border-white/5">
<button className="tab-btn active text-base font-medium pb-3 border-b-2 border-nmex-blue text-nmex-blue hover:text-nmex-blue transition-colors" id="tab-vehicle" onclick="switchTab('vehicle')">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:car-linear" width="20"></iconify-icon>
                    Vehicle
                </div>
</button>
<button className="tab-btn text-base font-medium pb-3 border-b-2 border-transparent text-nmex-subtext hover:text-white transition-colors" id="tab-logistics" onclick="switchTab('logistics')">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:delivery-linear" width="20"></iconify-icon>
                    Logistics
                </div>
</button>
<button className="tab-btn text-base font-medium pb-3 border-b-2 border-transparent text-nmex-subtext hover:text-white transition-colors" id="tab-payment" onclick="switchTab('payment')">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:card-linear" width="20"></iconify-icon>
                    Payment
                </div>
</button>
<button className="tab-btn text-base font-medium pb-3 border-b-2 border-transparent text-nmex-subtext hover:text-white transition-colors" id="tab-release" onclick="switchTab('release')">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:key-square-linear" width="20"></iconify-icon>
                    Release
                </div>
</button>
<button className="tab-btn text-base font-medium pb-3 border-b-2 border-transparent text-nmex-subtext hover:text-white transition-colors" id="tab-ongoing" onclick="switchTab('ongoing')">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
                    Ongoing Verification
                </div>
</button>
</nav>

<main className="w-full">

<div className="tab-content grid grid-cols-2 gap-5" id="content-vehicle">

<div className="bg-nmex-card rounded-2xl p-6 border border-white/5 relative group hover:border-white/10 transition-colors">
<div className="flex justify-between items-start mb-6">
<div className="bg-nmex-blue/10 p-3 rounded-xl text-nmex-blue">
<iconify-icon icon="solar:wheel-angle-linear" width="24"></iconify-icon>
</div>
<span className="bg-nmex-green text-white text-xs font-semibold px-3 py-1.5 rounded-md">Release Authorized</span>
</div>
<h3 className="text-lg font-semibold text-white mb-4 tracking-tight">2022 Chevrolet Silverado 1500 RST</h3>
<div className="space-y-3">
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-sm text-nmex-subtext">Color</span>
<span className="text-sm text-nmex-subtext">Red</span>
</div>
<div className="flex justify-between border-b border-white/5 pb-2">
<span className="text-sm text-nmex-subtext">VIN</span>
<span className="text-sm text-white font-mono">3GCPYBEKONG123456</span></div></div></div></div></main></div>
    </>
  );
}
