import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        const rates = {
            'personal': 9.0,
            'home': 8.5,
            'car': 9.5
        };

        const formatCurrency = (amount) => {
            return new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'BDT',
                maximumFractionDigits: 0
            }).format(amount).replace('BDT', '৳');
        };

        const formatNumber = (num) => {
            return new Intl.NumberFormat('en-IN').format(num);
        };

        let currentOpen = null;
        function toggleSection(id) {
            const content = document.getElementById(`content-${id}`);
            const icon = document.getElementById(`icon-${id}`);

            if (currentOpen && currentOpen !== id) {
                document.getElementById(`content-${currentOpen}`).classList.add('hidden');
                document.getElementById(`icon-${currentOpen}`).classList.remove('rotate-180');
            }

            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-180');
                currentOpen = id;
                
                if(id === 'emi-calc') {
                    calculateEMI();
                }
            } else {
                content.classList.add('hidden');
                icon.classList.remove('rotate-180');
                currentOpen = null;
            }
        }

        function expandCalculator() {
            if (currentOpen !== 'emi-calc') {
                toggleSection('emi-calc');
                document.getElementById('content-emi-calc').scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }

        function updateAmountDisplay() {
            const val = document.getElementById('calc-amount').value;
            document.getElementById('amount-display').innerText = formatNumber(val);
        }

        function updateTenorDisplay() {
            const val = document.getElementById('calc-tenor').value;
            document.getElementById('tenor-display').innerText = val;
        }

        function calculateEMI() {
            const product = document.getElementById('calc-product').value;
            const principal = parseFloat(document.getElementById('calc-amount').value);
            const months = parseFloat(document.getElementById('calc-tenor').value);
            
            const annualRate = rates[product];
            const monthlyRate = (annualRate / 100) / 12;

            let emi = 0;
            if (monthlyRate > 0) {
                emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
            } else {
                emi = principal / months;
            }

            const totalPayment = emi * months;
            const totalInterest = totalPayment - principal;
            const yearlyPayment = emi * 12;

            document.getElementById('res-monthly').innerText = formatCurrency(emi);
            document.getElementById('res-yearly').innerText = formatCurrency(yearlyPayment);
            document.getElementById('res-interest').innerText = formatCurrency(totalInterest);
            document.getElementById('res-total').innerText = formatCurrency(totalPayment);
        }

        window.onload = () => {
            updateAmountDisplay();
            updateTenorDisplay();
        };
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="max-w-md mx-auto bg-[#0b081c] min-h-screen relative shadow-2xl shadow-black/50 overflow-x-hidden pb-32 z-0">

<div className="absolute inset-0 z-[-1] pointer-events-none overflow-hidden opacity-90">

<div className="absolute top-[-20%] right-[-20%] w-[70%] h-[150%] bg-[#251c5b] transform rotate-[22deg]"></div>

<div className="absolute top-[25%] left-[-35%] w-[55%] h-[120%] bg-[#251c5b] transform rotate-[22deg]"></div>

<div className="absolute bottom-[20%] right-[-10%] w-[90%] h-[12%] bg-[#251c5b]"></div>
</div>

<header className="flex justify-between items-center px-6 py-5 sticky top-0 bg-[#0b081c]/60 backdrop-blur-xl z-20 border-b border-white/5">
<div className="flex items-center gap-3">
<img alt="Jamuna Bank Logo" className="h-8 object-contain brightness-0 invert" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<button className="w-11 h-11 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors focus:outline-none">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</header>

<section className="px-5 pt-6 pb-6 space-y-5 relative z-10">
<h2 className="text-4xl font-light tracking-tight mb-8 px-1 text-white">Loans Designed for You</h2>

<div className="bg-[#151030]/90 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl shadow-black/20 overflow-hidden transition-all duration-300">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none group" onclick="toggleSection('personal-loan')">
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<i className="w-7 h-7" data-lucide="user" strokeWidth="1.5"></i>
</div>
<div>
<span className="block font-normal text-xl tracking-tight text-white">Personal Loan</span>
<span className="block text-base font-light text-white/60 mt-1">Quick funds for your needs</span>
</div>
</div>
<i className="w-6 h-6 text-white/40 transition-transform duration-300" data-lucide="chevron-down" id="icon-personal-loan" strokeWidth="1.5"></i>
</button>
<div className="hidden px-6 pb-6 pt-2" id="content-personal-loan">
<div className="p-5 bg-black/20 rounded-2xl border border-white/5 mb-6">
<h4 className="text-base font-light text-white/50 uppercase tracking-widest mb-4">Key Benefits</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg font-light text-white/90">
<i className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>No hidden charges or processing fees</span>
</li>
<li className="flex items-start gap-3 text-lg font-light text-white/90">
<i className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>Flexible repayment up to 60 months</span>
</li>
<li className="flex items-start gap-3 text-lg font-light text-white/90">
<i className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>Fast approval within 24 hours</span>
</li>
</ul>
</div>
<button className="flex items-center gap-4 bg-[#1a133b] hover:bg-[#251c5b] text-white py-3 px-6 rounded-full transition-all duration-300 group border border-white/5 shadow-lg shadow-black/20">
<span className="text-lg font-light tracking-wide">let's get started</span>
<div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</button>
</div>
</div>

<div className="bg-[#151030]/90 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl shadow-black/20 overflow-hidden transition-all duration-300">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none group" onclick="toggleSection('home-loan')">
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<i className="w-7 h-7" data-lucide="home" strokeWidth="1.5"></i>
</div>
<div>
<span className="block font-normal text-xl tracking-tight text-white">Home Loan</span>
<span className="block text-base font-light text-white/60 mt-1">Build your dream house</span>
</div>
</div>
<i className="w-6 h-6 text-white/40 transition-transform duration-300" data-lucide="chevron-down" id="icon-home-loan" strokeWidth="1.5"></i>
</button>
<div className="hidden px-6 pb-6 pt-2" id="content-home-loan">
<div className="p-5 bg-black/20 rounded-2xl border border-white/5 mb-6">
<h4 className="text-base font-light text-white/50 uppercase tracking-widest mb-4">Key Benefits</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg font-light text-white/90">
<i className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>Competitive interest rates</span>
</li>
<li className="flex items-start gap-3 text-lg font-light text-white/90">
<i className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>Maximum loan amount based on eligibility</span>
</li>
<li className="flex items-start gap-3 text-lg font-light text-white/90">
<i className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>Tenure up to 25 years</span>
</li>
</ul>
</div>
<button className="flex items-center gap-4 bg-[#1a133b] hover:bg-[#251c5b] text-white py-3 px-6 rounded-full transition-all duration-300 group border border-white/5 shadow-lg shadow-black/20">
<span className="text-lg font-light tracking-wide">let's get started</span>
<div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</button>
</div>
</div>

<div className="bg-[#151030]/90 backdrop-blur-md rounded-3xl border border-white/10 shadow-xl shadow-black/20 overflow-hidden transition-all duration-300">
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none group" onclick="toggleSection('car-loan')">
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
<i className="w-7 h-7" data-lucide="car" strokeWidth="1.5"></i>
</div>
<div>
<span className="block font-normal text-xl tracking-tight text-white">Car Loan</span>
<span className="block text-base font-light text-white/60 mt-1">Drive your own vehicle</span>
</div>
</div>
<i className="w-6 h-6 text-white/40 transition-transform duration-300" data-lucide="chevron-down" id="icon-car-loan" strokeWidth="1.5"></i>
</button>
<div className="hidden px-6 pb-6 pt-2" id="content-car-loan">
<div className="p-5 bg-black/20 rounded-2xl border border-white/5 mb-6">
<h4 className="text-base font-light text-white/50 uppercase tracking-widest mb-4">Key Benefits</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-lg font-light text-white/90">
<i className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>Up to 100% financing for new cars</span>
</li>
<li className="flex items-start gap-3 text-lg font-light text-white/90">
<i className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>Partner discounts at top dealerships</span>
</li>
<li className="flex items-start gap-3 text-lg font-light text-white/90">
<i className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" data-lucide="check-circle" strokeWidth="1.5"></i>
<span>Easy documentation process</span>
</li>
</ul>
</div>
<button className="flex items-center gap-4 bg-[#1a133b] hover:bg-[#251c5b] text-white py-3 px-6 rounded-full transition-all duration-300 group border border-white/5 shadow-lg shadow-black/20">
<span className="text-lg font-light tracking-wide">let's get started</span>
<div className="w-8 h-8 rounded-full bg-black/30 flex items-center justify-center group-hover:bg-black/50 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</button>
</div>
</div>

<div className="bg-[#181238]/90 backdrop-blur-xl rounded-3xl border border-[#251c5b]/50 shadow-2xl shadow-black/40 overflow-hidden transition-all duration-300 mt-10 relative">
<div className="absolute top-0 right-0 w-48 h-48 bg-[#251c5b]/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
<button className="w-full flex justify-between items-center p-6 text-left focus:outline-none group relative z-10" onclick="toggleSection('emi-calc')">
<div className="flex items-center gap-5">
<div className="w-14 h-14 rounded-2xl bg-[#251c5b]/40 flex items-center justify-center text-white border border-white/10 backdrop-blur-sm">
<i className="w-7 h-7" data-lucide="calculator" strokeWidth="1.5"></i>
</div>
<div>
<span className="block font-normal text-xl tracking-tight text-white">EMI Calculator</span>
<span className="block text-base font-light text-white/60 mt-1">Plan your repayments</span>
</div>
</div>
<i className="w-6 h-6 text-white/40 transition-transform duration-300" data-lucide="chevron-down" id="icon-emi-calc" strokeWidth="1.5"></i>
</button>
<div className="hidden px-6 pb-6 pt-2 relative z-10" id="content-emi-calc">

<div className="space-y-8 bg-black/20 border border-white/5 rounded-2xl p-6 mb-6 shadow-inner">

<div>
<label className="block text-base font-light text-white/50 mb-3">Select Product</label>
<div className="relative">
<select className="w-full appearance-none bg-white/5 border border-white/10 text-white text-lg rounded-xl px-5 py-4 pr-12 focus:outline-none focus:ring-1 focus:ring-white/30 font-light" id="calc-product" onchange="calculateEMI()">
<option className="bg-[#151030]" value="personal">Personal Loan (9% p.a.)</option>
<option className="bg-[#151030]" value="home">Home Loan (8.5% p.a.)</option>
<option className="bg-[#151030]" value="car">Car Loan (9.5% p.a.)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-5 text-white/50">
<i className="w-6 h-6" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4">
<label className="block text-base font-light text-white/50">Loan Amount (BDT)</label>
<span className="text-xl font-normal text-white" id="amount-display">500,000</span>
</div>
<input className="w-full appearance-none bg-transparent h-6" id="calc-amount" max="10000000" min="50000" oninput="updateAmountDisplay(); calculateEMI()" step="50000" type="range" value="500000"/>
<div className="flex justify-between mt-3 text-white/40 text-sm font-light">
<span>50K</span>
<span>10M</span>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4">
<label className="block text-base font-light text-white/50">Tenor (Months)</label>
<span className="text-xl font-normal text-white" id="tenor-display">36</span>
</div>
<input className="w-full appearance-none bg-transparent h-6" id="calc-tenor" max="300" min="12" oninput="updateTenorDisplay(); calculateEMI()" step="12" type="range" value="36"/>
<div className="flex justify-between mt-3 text-white/40 text-sm font-light">
<span>12</span>
<span>300</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-white/5 rounded-2xl p-5 border border-white/5 backdrop-blur-sm">
<p className="text-base font-light text-white/50 mb-2">Monthly Installment</p>
<p className="text-2xl font-normal tracking-tight text-white" id="res-monthly">৳0</p>
</div>
<div className="bg-white/5 rounded-2xl p-5 border border-white/5 backdrop-blur-sm">
<p className="text-base font-light text-white/50 mb-2">Yearly Payment</p>
<p className="text-2xl font-normal tracking-tight text-white" id="res-yearly">৳0</p>
</div>
<div className="bg-white/5 rounded-2xl p-5 border border-white/5 backdrop-blur-sm">
<p className="text-base font-light text-white/50 mb-2">Total Interest</p>
<p className="text-2xl font-normal tracking-tight text-white" id="res-interest">৳0</p>
</div>
<div className="bg-white/5 rounded-2xl p-5 border border-white/5 backdrop-blur-sm">
<p className="text-base font-light text-white/50 mb-2">Total Payment</p>
<p className="text-2xl font-normal tracking-tight text-white" id="res-total">৳0</p>
</div>
</div>
<button className="flex items-center justify-center gap-4 bg-white text-[#0b081c] hover:bg-gray-200 py-4 w-full rounded-2xl transition-colors focus:outline-none font-normal text-lg">
                        Apply Now for this Loan
                    </button>
</div>
</div>
</section>

<nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#0b081c]/80 backdrop-blur-2xl border-t border-white/10 pb-safe z-30">
<div className="flex justify-around items-center px-3 py-4">
<button className="flex flex-col items-center gap-2 p-2 text-white focus:outline-none">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
<span className="text-sm font-light">Home</span>
</button>
<button className="flex flex-col items-center gap-2 p-2 text-white/40 hover:text-white transition-colors focus:outline-none" onclick="expandCalculator()">
<i className="w-6 h-6" data-lucide="calculator" strokeWidth="1.5"></i>
<span className="text-sm font-light">Calculator</span>
</button>
<button className="flex flex-col items-center gap-2 p-2 text-white/40 hover:text-white transition-colors focus:outline-none">
<i className="w-6 h-6" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-sm font-light">Applications</span>
</button>
<button className="flex flex-col items-center gap-2 p-2 text-white/40 hover:text-white transition-colors focus:outline-none">
<i className="w-6 h-6" data-lucide="user" strokeWidth="1.5"></i>
<span className="text-sm font-light">Profile</span>
</button>
</div>
</nav>
</main>


    </>
  );
}
