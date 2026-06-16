import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Calculator Logic
        const marginInput = document.getElementById('marginInput');
        const marginDisplay = document.getElementById('marginDisplay');
        const dailyDisplay = document.getElementById('dailyDisplay');
        const weeklyDisplay = document.getElementById('weeklyDisplay');
        const monthlyDisplay = document.getElementById('monthlyDisplay');
        const annualDisplay = document.getElementById('annualDisplay');

        const ANNUAL_RATE = 0.03; // 3%

        function formatCurrency(value) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
        }

        function updateCalculator() {
            const margin = parseFloat(marginInput.value);
            
            // Calculations
            const daily = (margin * ANNUAL_RATE) / 365;
            const weekly = daily * 7;
            const monthly = margin * (ANNUAL_RATE / 12);
            const annual = margin * ANNUAL_RATE;

            // Update UI
            marginDisplay.textContent = formatCurrency(margin);
            dailyDisplay.textContent = formatCurrency(daily);
            weeklyDisplay.textContent = formatCurrency(weekly);
            monthlyDisplay.textContent = formatCurrency(monthly);
            annualDisplay.textContent = formatCurrency(annual);
        }

        marginInput.addEventListener('input', updateCalculator);

        // Initialize with default values
        updateCalculator();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-50/60 via-amber-50/20 to-transparent blur-[80px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-multiply"></div>
</div>

<nav className="relative z-50 max-w-7xl mx-auto px-6 py-5 flex items-center justify-between animate-entry">
<div className="flex items-center gap-2">

<div className="flex gap-2 items-center">
<img alt="Logo Placeholder" className="border-dashed hover:border-neutral-400 transition-colors cursor-pointer w-auto h-9 object-contain border-neutral-300 border rounded pr-2 pl-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66bf23d2-528c-43fa-87d9-2b0080eb3264_320w.png"/>
</div>
</div>
<div className="hidden md:flex items-center gap-1 bg-white/70 border border-neutral-200/60 rounded-full p-1.5 backdrop-blur-md shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<a className="px-5 py-2 text-xs font-medium text-neutral-900 bg-white rounded-full shadow-sm border border-neutral-100 tracking-wide" href="#">Overview</a>
<a className="px-5 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors tracking-wide" href="#calculator">Calculator</a>
<a className="px-5 py-2 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors tracking-wide" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-6">
<a className="hidden sm:block text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors tracking-wide" href="#">Log In</a>
<a className="px-5 py-2.5 text-xs font-semibold text-white bg-[#111] hover:bg-black transition-all rounded-full shadow-lg shadow-neutral-200 tracking-wide font-display" href="#">
                Open Account
            </a>
</div>
</nav>

<main className="lg:pt-28 z-10 pt-16 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-[11px] font-semibold tracking-wide uppercase mb-6 animate-entry font-display">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Live on Standard Accounts
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 mb-6 leading-[1.05] animate-entry delay-200">
                    Make Your Money <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400">Work Autonomously.</span>
</h1>
<p className="text-lg text-neutral-500 font-normal max-w-xl leading-relaxed mb-10 animate-entry delay-300">
                    Your Free Margin shouldn't sit idle. With <span className="text-neutral-900 font-medium">Wisuno Earn+</span>, every dollar earns competitive interest. Daily calculations, weekly payouts, zero friction.
                </p>
<div className="flex flex-wrap items-center gap-4 animate-entry delay-500 font-display">
<a className="group relative px-8 py-3.5 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-full transition-all shadow-[0_10px_40px_-10px_rgba(249,115,22,0.4)] flex items-center gap-2 text-sm tracking-wide" href="#">
                        Start Earning
                        <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="px-8 py-3.5 text-neutral-600 border border-neutral-200 bg-white hover:bg-neutral-50 rounded-full transition-colors font-semibold text-sm tracking-wide shadow-sm" href="#how-it-works">
                        View Rates
                    </a>
</div>

<div className="mt-8 flex items-center gap-3 animate-entry delay-500">
<div className="flex items-center gap-1">

<div className="bg-[#00b67a] p-1 rounded-[2px] w-6 h-6 flex items-center justify-center">
<svg fill="white" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<div className="bg-[#00b67a] p-1 rounded-[2px] w-6 h-6 flex items-center justify-center">
<svg fill="white" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<div className="bg-[#00b67a] p-1 rounded-[2px] w-6 h-6 flex items-center justify-center">
<svg fill="white" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<div className="bg-[#00b67a] p-1 rounded-[2px] w-6 h-6 flex items-center justify-center">
<svg fill="white" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>

<div className="bg-[#00b67a] p-1 rounded-[2px] w-6 h-6 flex items-center justify-center">
<svg height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">

<path d="M12 2 L 8.91 8.26 L 2 9.27 L 7 14.14 L 5.82 21.02 L 12 17.77 Z" fill="white"></path>

<path d="M12 2 L 15.09 8.26 L 22 9.27 L 17 14.14 L 18.18 21.02 L 12 17.77 Z" fill="rgba(255,255,255,0.3)"></path>
</svg>
</div>
</div>
<div className="text-sm text-neutral-500 font-display flex items-center gap-1.5">
<span className="font-semibold text-neutral-900">Excellent</span> on 
                        <span className="flex items-center gap-0.5">
<svg className="w-5 h-5" fill="#00b67a" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<span className="font-bold text-neutral-900 tracking-tight">Trustpilot</span>
</span>
</div>
</div>
<div className="mt-8 flex items-center gap-8 animate-entry delay-500 border-t border-neutral-100 pt-8 w-full max-w-md">
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-neutral-900 font-numeric tracking-tight">3.00%</span>
<span className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">Annual Yield (USD)</span>
</div>
<div className="w-px h-10 bg-neutral-100"></div>
<div className="flex flex-col gap-1">
<span className="text-2xl font-semibold text-neutral-900 font-numeric tracking-tight">Weekly</span>
<span className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium">Payout Schedule</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative animate-entry delay-500 lg:translate-x-6">

<div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-amber-100/60 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="relative bg-white/80 backdrop-blur-xl border border-white/40 ring-1 ring-black/5 rounded-[32px] overflow-hidden shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08)]">

<div className="flex border-neutral-100/50 border-b pt-8 pr-8 pb-8 pl-8 items-center justify-between">
<div className="">
<div className="text-xs font-semibold text-orange-600 tracking-wider uppercase mb-1 font-display">My Earnings</div>
<div className="text-3xl font-semibold text-neutral-900 font-numeric tracking-tight">$1,240.52</div>
</div>
<div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
<svg className="lucide lucide-more-horizontal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>

<div className="w-full">
<label className="group flex cursor-pointer flex-col items-center justify-center bg-top transition-all w-full h-56 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/407a9567-1151-40b4-98db-097b8c85eda5_1600w.png)] bg-cover relative">
<input accept="image/*" className="hidden" type="file"/>
</label>
</div>

<div className="bg-neutral-50/50 p-6 space-y-3">
<div className="flex items-center justify-between p-3 rounded-2xl hover:bg-white transition-colors cursor-default group border border-transparent hover:border-neutral-100 hover:shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100/50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-arrow-down-left" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M17 7 7 17"></path><path d="M17 17H7V7"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold text-neutral-900 font-display">Interest Payout</div>
<div className="text-[11px] font-medium text-neutral-500">Dec 12, 10:00 AM</div>
</div>
</div>
<span className="text-sm font-semibold text-green-600 font-numeric">+$100</span>
</div>
<div className="flex items-center justify-between p-3 rounded-2xl hover:bg-white transition-colors cursor-default group border border-transparent hover:border-neutral-100 hover:shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-wallet" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold text-neutral-900 font-display">Deposit</div>
<div className="text-[11px] text-neutral-500 font-medium">Dec 10, 09:24 AM</div>
</div>
</div>
<span className="text-sm font-semibold text-neutral-900 font-numeric">+$1,000.00</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="py-24 border-t border-neutral-100 relative overflow-hidden" id="how-it-works">
<div className="absolute inset-0 bg-neutral-50/40"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4 tracking-tight">Passive Income, Simplified</h2>
<p className="text-neutral-500 font-normal">Turn idle funds into a growth engine in three steps.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-[48px] left-[20%] right-[20%] h-px bg-gradient-to-r from-neutral-200 via-orange-200 to-neutral-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-[2rem] bg-white border border-neutral-100 flex items-center justify-center mb-8 shadow-xl shadow-neutral-100/50 relative transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
<span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-xs font-bold text-white shadow-md font-numeric border-[3px] border-white">1</span>
<svg className="lucide lucide-wallet-cards w-10 h-10 text-neutral-700 group-hover:text-orange-500 transition-colors" data-lucide="wallet-cards" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"></path><path d="M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Automated Eligibility</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs font-normal">
                        Any Free Margin in your Standard account qualifies automatically. No forms to fill.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-[2rem] bg-white border border-neutral-100 flex items-center justify-center mb-8 shadow-xl shadow-neutral-100/50 relative transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
<span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-xs font-bold text-white shadow-md font-numeric border-[3px] border-white">2</span>
<svg className="lucide lucide-clock-4 w-10 h-10 text-neutral-700 group-hover:text-orange-500 transition-colors" data-lucide="clock-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Daily Calculation</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs font-normal">
                        Interest is calculated every day at midnight (0:00am) based on your snapshot.
                    </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-[2rem] bg-white border border-neutral-100 flex items-center justify-center mb-8 shadow-xl shadow-neutral-100/50 relative transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
<span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-xs font-bold text-white shadow-md font-numeric border-[3px] border-white">3</span>
<svg className="lucide lucide-coins w-10 h-10 text-neutral-700 group-hover:text-orange-500 transition-colors" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path><path d="m16.71 13.88.7.71-2.82 2.82"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Weekly Payouts</h3>
<p className="text-sm text-neutral-500 leading-relaxed max-w-xs font-normal">
                        Accumulated earnings are deposited directly to your trading account every week.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-neutral-900 mb-12 tracking-tight">Why Traders Choose Earn+</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card-hover p-8 rounded-3xl border border-neutral-100 bg-neutral-50/30 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-orange-600 shadow-sm group-hover:border-orange-200 transition-colors">
<svg className="lucide lucide-trending-up" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Competitive Rates</h3>
<p className="text-sm text-neutral-500 font-normal">Earn 3% annual interest on USD Free Margin—industry leading rates for idle capital.</p>
</div>

<div className="glass-card-hover p-8 rounded-3xl border border-neutral-100 bg-neutral-50/30 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-blue-600 shadow-sm group-hover:border-blue-200 transition-colors">
<svg className="lucide lucide-zap" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Daily Compounding</h3>
<p className="text-sm text-neutral-500 font-normal">Calculations happen every 24 hours. Your potential grows with every passing day.</p>
</div>

<div className="glass-card-hover p-8 rounded-3xl border border-neutral-100 bg-neutral-50/30 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-purple-600 shadow-sm group-hover:border-purple-200 transition-colors">
<svg className="lucide lucide-shield-check" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Fully Regulated</h3>
<p className="text-sm text-neutral-500 font-normal">Operated under strict regulatory oversight. Your funds and interest are secure.</p>
</div>

<div className="glass-card-hover p-8 rounded-3xl border border-neutral-100 bg-neutral-50/30 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-emerald-600 shadow-sm group-hover:border-emerald-200 transition-colors">
<svg className="lucide lucide-mouse-pointer-click" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Zero Effort</h3>
<p className="text-sm text-neutral-500 font-normal">No separate accounts. No "staking" lock-ups. It just works with your trading account.</p>
</div>

<div className="glass-card-hover p-8 rounded-3xl border border-neutral-100 bg-neutral-50/30 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-pink-600 shadow-sm group-hover:border-pink-200 transition-colors">
<svg className="lucide lucide-layers" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Multi-Platform</h3>
<p className="text-sm text-neutral-500 font-normal">Works seamlessly across MT4, MT5, Copy Trading, and PAMM accounts.</p>
</div>

<div className="glass-card-hover p-8 rounded-3xl border border-neutral-100 bg-neutral-50/30 group">
<div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-amber-600 shadow-sm group-hover:border-amber-200 transition-colors">
<svg className="lucide lucide-lock-keyhole" data-lucide="lock-keyhole" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="16" r="1"></circle><rect height="12" rx="2" width="18" x="3" y="10"></rect><path d="M7 10V7a5 5 0 0 1 10 0v3"></path></svg>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-2">Liquid Funds</h3>
<p className="text-sm text-neutral-500 font-normal">Your interest is paid in cash. Withdraw it, trade it, or keep it growing.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-neutral-50 border-t border-neutral-100" id="calculator">

<div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-orange-100/40 to-transparent blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

<div className="glass-panel p-8 rounded-[32px] relative border-neutral-200/60 shadow-xl shadow-neutral-200/20 bg-white/60">
<h3 className="text-2xl font-semibold text-neutral-900 mb-8 tracking-tight">Calculate Potential</h3>
<div className="mb-12">
<div className="flex justify-between items-end mb-6">
<label className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Free Margin Balance</label>
<div className="text-4xl font-semibold text-neutral-900 tracking-tight font-numeric" id="marginDisplay">$10,000.00</div>
</div>
<div className="relative h-6 flex items-center">
<input className="w-full z-20 relative" id="marginInput" max="100000" min="1000" step="500" type="range" value="10000"/>
</div>
<div className="flex justify-between text-[11px] font-medium text-neutral-400 mt-2 font-display">
<span>$1K</span>
<span>$100K+</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm">
<div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-1 font-display">Daily</div>
<div className="text-xl font-semibold text-neutral-900 font-numeric" id="dailyDisplay">$0.82</div>
</div>
<div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm">
<div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-1 font-display">Weekly</div>
<div className="text-xl font-semibold text-neutral-900 font-numeric" id="weeklyDisplay">$5.75</div>
</div>
<div className="bg-white p-5 rounded-2xl border border-neutral-100 shadow-sm">
<div className="text-[10px] font-semibold text-neutral-400 uppercase tracking-widest mb-1 font-display">Monthly</div>
<div className="text-xl font-semibold text-neutral-900 font-numeric" id="monthlyDisplay">$25.00</div>
</div>
<div className="bg-neutral-900 p-5 rounded-2xl border border-neutral-900 text-white shadow-lg">
<div className="text-[10px] font-semibold text-orange-400 uppercase tracking-widest mb-1 font-display">Annual</div>
<div className="text-xl font-bold font-numeric" id="annualDisplay">$300.00</div>
</div>
</div>
<button className="w-full py-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-500 transition-colors shadow-lg shadow-orange-200 flex items-center justify-center gap-2 text-sm tracking-wide font-display">
                    Start Earning Now
                    <svg className="lucide lucide-chevron-right" data-lucide="chevron-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="space-y-12 lg:pt-8">
<div className="">
<h3 className="text-2xl font-semibold text-neutral-900 mb-6 tracking-tight">Transparent Formula</h3>
<div className="bg-white border border-neutral-200 rounded-2xl p-6 font-mono text-sm text-neutral-600 shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-20 h-20 bg-orange-50 rounded-bl-full -mr-10 -mt-10"></div>
<p className="mb-3 relative z-10"><span className="text-orange-600 font-bold">Interest</span> = Free Margin × (Rate / 365)</p>
<p className="text-neutral-400 text-xs relative z-10 font-sans">Calculated daily. No complex tiers. No hidden conditions.</p>
</div>
<div className="mt-8 space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-neutral-200 shadow-sm">
<svg className="lucide lucide-percent text-neutral-900" data-lucide="percent" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
</div>
<div className="">
<h4 className="text-neutral-900 font-semibold text-lg">3% USD Annual Rate</h4>
<p className="text-sm text-neutral-500 mt-1 font-normal leading-relaxed">Interest rates are currency-specific. We offer one of the most competitive rates in the FX industry for USD balances.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 border border-neutral-200 shadow-sm">
<svg className="lucide lucide-calendar-check-2 text-neutral-900" data-lucide="calendar-check-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path><path d="M3 10h18"></path><path d="m16 20 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-neutral-900 font-semibold text-lg">Weekly Settlement</h4>
<p className="text-sm text-neutral-500 mt-1 font-normal leading-relaxed">While interest accrues daily, we batch transfers weekly to keep your statement clean and your funds accessible.</p>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-200 pt-8">
<h4 className="text-sm font-semibold text-neutral-900 mb-4 uppercase tracking-wider font-display">Eligibility Criteria</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-600 font-normal">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
<svg className="text-green-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                            Standard Accounts (MT4/MT5/PAMM)
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-600 font-normal">
<div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
<svg className="text-green-600" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
                            Positive Free Margin
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-neutral-900 mb-12 tracking-tight">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-lg open:border-neutral-300">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors select-none font-display">
                        Do I need to opt-in?
                        <svg className="lucide lucide-plus text-neutral-400 group-open:rotate-45 transition-transform duration-300" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed font-normal">
                        No. Wisuno Earn+ is automatically enabled for all eligible Standard accounts. If you have Free Margin, you are earning interest immediately.
                    </div>
</details>
<details className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-lg open:border-neutral-300">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors select-none font-display">
                        What exactly is "Free Margin"?
                        <svg className="lucide lucide-plus text-neutral-400 group-open:rotate-45 transition-transform duration-300" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed font-normal">
                        Free Margin is the equity in your account that is not tied up in open positions. It is calculated as Equity minus Margin. This means you earn even while you trade, as long as you have unused margin.
                    </div>
</details>
<details className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-lg open:border-neutral-300">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors select-none font-display">
                        Are the earnings withdrawable?
                        <svg className="lucide lucide-plus text-neutral-400 group-open:rotate-45 transition-transform duration-300" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed font-normal">
                        Yes, absolutely. Once the interest is credited to your wallet (weekly), it is treated as cash. You can withdraw it, transfer it, or use it to open new positions immediately.
                    </div>
</details>
<details className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden transition-all duration-300 open:shadow-lg open:border-neutral-300">
<summary className="flex items-center justify-between p-5 cursor-pointer text-sm font-medium text-neutral-900 hover:bg-neutral-50 transition-colors select-none font-display">
                        Does this affect my trading leverage?
                        <svg className="lucide lucide-plus text-neutral-400 group-open:rotate-45 transition-transform duration-300" data-lucide="plus" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="px-5 pb-5 text-sm text-neutral-500 leading-relaxed font-normal">
                        No. The program is completely passive and does not lock your funds or change your account's leverage settings. You retain full control over your capital at all times.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-neutral-900 text-white">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold mb-8 tracking-tight font-display">Let Your Capital  <span className="text-orange-500">Do More.</span></h2>
<p className="text-lg text-neutral-400 mb-12 max-w-2xl mx-auto font-normal">
                Join thousands of traders who are maximizing their efficiency with Wisuno Earn+. Open a standard account today.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-10 py-4 bg-white text-neutral-900 font-semibold rounded-full hover:bg-neutral-100 transition-colors tracking-wide font-display" href="#">
                    Open Free Account
                </a>
<a className="w-full sm:w-auto px-10 py-4 bg-transparent border border-neutral-700 text-white font-semibold rounded-full hover:bg-neutral-800 transition-colors tracking-wide font-display" href="#">
                    Contact Sales
                </a>
</div>
<div className="mt-12 flex items-center justify-center gap-6 text-xs text-neutral-500">
<span>Regulated</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span>Secure</span>
<span className="w-1 h-1 bg-neutral-700 rounded-full"></span>
<span>Transparent</span>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex gap-2 mb-6 items-center">
<img alt="Wisuno" className="border-dashed hover:border-neutral-400 transition-colors cursor-pointer w-auto h-9 object-contain border-neutral-300 border rounded pr-2 pl-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66bf23d2-528c-43fa-87d9-2b0080eb3264_320w.png"/>
</div>
<div className="space-y-3 text-xs text-neutral-500 font-normal">
<p className="">Licensed &amp; Regulated Broker</p>
<p>Providing premium trading conditions since 2015.</p>
</div>
</div>
<div>
<h4 className="text-neutral-900 text-sm font-semibold mb-4 font-display">Platform</h4>
<ul className="space-y-2 text-xs text-neutral-500 font-normal">
<li><a className="hover:text-orange-600 transition-colors" href="#">Account Types</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Earn+ Program</a></li>
</ul>
</div>
<div>
<h4 className="text-neutral-900 text-sm font-semibold mb-4 font-display">Support</h4>
<ul className="space-y-2 text-xs text-neutral-500 font-normal">
<li><a className="hover:text-orange-600 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-neutral-900 text-sm font-semibold mb-4 font-display">Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500 font-normal">
<li><a className="hover:text-orange-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-orange-600 transition-colors" href="#">Client Agreement</a></li>
</ul>
</div>
</div>

<div className="border-t border-neutral-100 pt-10 text-[11px] leading-relaxed text-neutral-400 font-normal space-y-4 text-justify">
<p>© Wisuno Ltd 2025</p>
<p>Wisuno is the trading name of WISUNO LIMITED. WISUNO LIMITED is part of a group of affiliated companies operating in multiple jurisdictions.</p>
<p>WISUNO LIMITED is regulated by the Financial Services Authority of Seychelles (“FSA”) under the License Number SD178. The registered office address of WISUNO LIMITED is Office 12, 3rd Floor, IMAD Complex, Ile Du Port, Mahe, Republic of Seychelles.</p>
<p>WISUNO LIMITED is the seller of the financial products described or available on this website. This website is exclusively operated by WISUNO LIMITED.</p>
<p>WSN Capital Ltd licensed and regulated by the Cyprus Securities and Exchange Commission (CySEC) under the License CIF 450/24). The registered office address is Vasileos Konstantinou 152, Office 102, Frema Tsirio Center, 3080, Limassol, Cyprus</p>
<p><span className="font-semibold text-neutral-500">Risk Warning:</span> Trading in forex, securities and other leveraged products carries a high level of risk and may not be suitable for all investors. The value of your investments may fluctuate, and you may lose all of your invested capital, particularly when trading with leverage. Price fluctuations may render securities valueless, and engaging in the buying and selling of securities may result in losses exceeding potential profits. In some cases, you may incur unlimited losses that exceed your initial deposit.</p>
<p>CFDs are complex financial instruments that require a thorough understanding before trading. You should carefully assess your investment objectives, level of experience, and risk tolerance before deciding to trade, especially when using. It is your responsibility to ensure that you fully understand the risks involved and seek independent advice if necessary.</p>
<p>You are strongly advised to obtain independent financial, legal and tax advice before proceeding with any trading activity. Nothing on this site should be read or construed as financial advice from Wisuno or any of its affiliates, directors, officers or employees. Clients must be at least 18 years old to use Wisuno’s services.</p>
<p><span className="font-semibold text-neutral-500">Residence:</span> WISUNO LIMITED does not offer its services to residents of the United States, Canada, North Korea, Iran, Belgium or any particular country and is not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.</p>
<div className="flex items-center justify-between pt-4">
<div className="flex gap-6 font-medium">
<a className="hover:text-neutral-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-neutral-600 transition-colors" href="#">Cookies Policy</a>
</div>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
