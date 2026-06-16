import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State variables
        let state = {
            itemPrice: 25000,
            shippingMethod: 'group', // 'group' or 'solo'
            shippingRates: { group: 2500, solo: 8000 },
            useWallet: false,
            walletBalance: 2500,
            paymentMethod: 'momo' // 'momo' or 'orange'
        };

        // Format number to string with commas
        const formatMoney = (num) => num.toLocaleString('en-US');

        // Logic to update totals UI
        function updateTotals() {
            let shipping = state.shippingRates[state.shippingMethod];
            let rawTotal = state.itemPrice + shipping;
            let finalTotal = rawTotal;

            const oldPriceEl = document.getElementById('old-price');
            const finalPriceEl = document.getElementById('final-price');

            if (state.useWallet) {
                finalTotal = rawTotal - state.walletBalance;
                oldPriceEl.textContent = formatMoney(rawTotal);
                oldPriceEl.classList.remove('hidden');
            } else {
                oldPriceEl.classList.add('hidden');
            }

            finalPriceEl.textContent = formatMoney(finalTotal);
        }

        // Handle Shipping Toggle
        function selectShipping(method) {
            state.shippingMethod = method;
            
            const cardGroup = document.getElementById('card-group');
            const cardSolo = document.getElementById('card-solo');
            const radioGroup = document.getElementById('radio-group');
            const radioSolo = document.getElementById('radio-solo');
            const iconGroup = document.getElementById('icon-group');
            const iconSolo = document.getElementById('icon-solo');

            if (method === 'group') {
                // Activate Group
                cardGroup.classList.replace('border-slate-100', 'border-slate-900');
                cardGroup.classList.replace('bg-white', 'bg-slate-50/50');
                radioGroup.innerHTML = '<div class="w-2 h-2 rounded-full bg-slate-900"></div>';
                iconGroup.classList.replace('text-slate-400', 'text-slate-900');
                
                // Deactivate Solo
                cardSolo.classList.replace('border-slate-900', 'border-slate-100');
                cardSolo.classList.replace('bg-slate-50/50', 'bg-white');
                radioSolo.innerHTML = '<div class="w-2 h-2 rounded-full bg-transparent"></div>';
                iconSolo.classList.replace('text-slate-900', 'text-slate-400');
            } else {
                // Activate Solo
                cardSolo.classList.replace('border-slate-100', 'border-slate-900');
                cardSolo.classList.replace('bg-white', 'bg-slate-50/50');
                radioSolo.innerHTML = '<div class="w-2 h-2 rounded-full bg-slate-900"></div>';
                iconSolo.classList.replace('text-slate-400', 'text-slate-900');

                // Deactivate Group
                cardGroup.classList.replace('border-slate-900', 'border-slate-100');
                cardGroup.classList.replace('bg-slate-50/50', 'bg-white');
                radioGroup.innerHTML = '<div class="w-2 h-2 rounded-full bg-transparent"></div>';
                iconGroup.classList.replace('text-slate-900', 'text-slate-400');
            }
            updateTotals();
        }

        // Handle Wallet Toggle
        function toggleWallet() {
            state.useWallet = !state.useWallet;
            const toggleBg = document.getElementById('wallet-toggle');
            const knob = document.getElementById('wallet-knob');

            if (state.useWallet) {
                toggleBg.classList.replace('bg-slate-200', 'bg-slate-900');
                knob.classList.replace('translate-x-0', 'translate-x-5');
            } else {
                toggleBg.classList.replace('bg-slate-900', 'bg-slate-200');
                knob.classList.replace('translate-x-5', 'translate-x-0');
            }
            updateTotals();
        }

        // Handle Payment Method Toggle
        function selectPayment(method) {
            state.paymentMethod = method;
            
            const btnMomo = document.getElementById('pay-momo');
            const btnOrange = document.getElementById('pay-orange');
            const radioMomo = document.getElementById('radio-momo');
            const radioOrange = document.getElementById('radio-orange');

            if (method === 'momo') {
                btnMomo.classList.replace('border-slate-100', 'border-[#FFCC00]');
                btnMomo.classList.replace('bg-white', 'bg-yellow-50/20');
                radioMomo.innerHTML = '<div class="w-2 h-2 rounded-full bg-slate-900"></div>';
                
                btnOrange.classList.replace('border-[#FF6600]', 'border-slate-100');
                btnOrange.classList.replace('bg-orange-50/10', 'bg-white');
                radioOrange.innerHTML = '<div class="w-2 h-2 rounded-full bg-transparent"></div>';
            } else {
                btnOrange.classList.replace('border-slate-100', 'border-[#FF6600]');
                btnOrange.classList.replace('bg-white', 'bg-orange-50/10');
                radioOrange.innerHTML = '<div class="w-2 h-2 rounded-full bg-slate-900"></div>';
                
                btnMomo.classList.replace('border-[#FFCC00]', 'border-slate-100');
                btnMomo.classList.replace('bg-yellow-50/20', 'bg-white');
                radioMomo.innerHTML = '<div class="w-2 h-2 rounded-full bg-transparent"></div>';
            }
        }

        // Flow logic: Pay -> Load -> Success
        function startPayment() {
            // Show Loading
            const overlayProc = document.getElementById('overlay-processing');
            const modalProc = document.getElementById('modal-processing');
            
            overlayProc.classList.remove('opacity-0', 'pointer-events-none');
            // Small delay for modal slide up
            setTimeout(() => {
                modalProc.classList.remove('translate-y-full');
            }, 50);

            // Simulate Network Request (3 seconds)
            setTimeout(() => {
                showSuccess();
            }, 3000);
        }

        function showSuccess() {
            // Hide Loading
            const overlayProc = document.getElementById('overlay-processing');
            const modalProc = document.getElementById('modal-processing');
            modalProc.classList.add('translate-y-full');
            
            setTimeout(() => {
                overlayProc.classList.add('opacity-0', 'pointer-events-none');
                
                // Show Success Screen
                const overlaySucc = document.getElementById('overlay-success');
                overlaySucc.classList.remove('opacity-0', 'pointer-events-none');
                
                // Trigger Animations
                setTimeout(() => {
                    document.getElementById('success-icon').classList.replace('scale-50', 'scale-100');
                    document.getElementById('success-icon').classList.remove('opacity-0');
                    
                    document.getElementById('success-title').classList.remove('translate-y-4', 'opacity-0');
                    document.getElementById('success-text').classList.remove('translate-y-4', 'opacity-0');
                    document.getElementById('success-btn').classList.remove('translate-y-4', 'opacity-0');
                    
                    createConfetti();
                }, 100);

            }, 300); // Wait for modal to slide down
        }

        function createConfetti() {
            const container = document.getElementById('confetti-container');
            const colors = ['#10B981', '#F59E0B', '#3B82F6', '#6366F1'];
            
            for (let i = 0; i < 40; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti-piece');
                
                // Randomize properties
                const left = Math.random() * 100;
                const animDuration = Math.random() * 2 + 1;
                const delay = Math.random() * 0.5;
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                confetti.style.left = `${left}%`;
                confetti.style.backgroundColor = color;
                confetti.style.animation = `fall ${animDuration}s ease-in ${delay}s forwards`;
                
                container.appendChild(confetti);
            }
        }

        // Just for demo looping purposes
        function resetFlow() {
            window.location.reload();
        }

        // Initialize
        updateTotals();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full max-w-md bg-white min-h-screen relative flex flex-col shadow-sm overflow-hidden">

<header className="flex items-center justify-between px-5 pt-12 pb-4 bg-white border-b border-slate-100 z-10">
<button className="p-2 -ml-2 text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<div className="text-base font-medium tracking-tighter text-slate-900">KOLI</div>
<button className="p-2 -mr-2 text-slate-500 hover:text-slate-900 transition-colors">
<iconify-icon className="text-xl" icon="solar:question-circle-linear"></iconify-icon>
</button>
</header>

<main className="flex-1 overflow-y-auto no-scrollbar pb-40 bg-slate-50/50">

<section className="p-5 bg-white border-b border-slate-100">
<h2 className="text-sm font-medium text-slate-900 mb-4 tracking-tight">Order Summary</h2>
<div className="flex items-center gap-4">
<div className="w-16 h-16 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 overflow-hidden">
<img alt="Item" className="w-full h-full object-cover mix-blend-multiply" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&amp;h=150&amp;fit=crop"/>
</div>
<div className="flex-1">
<h3 className="text-sm font-medium text-slate-800">Nike Air Max 270</h3>
<p className="text-xs text-slate-500 mt-0.5">Size 42 • White/Red</p>
</div>
<div className="text-right">
<span className="text-sm font-medium text-slate-900">25,000</span>
<span className="text-xs text-slate-500">FCFA</span>
</div>
</div>
</section>

<section className="p-5 mt-2">
<h2 className="text-sm font-medium text-slate-900 mb-3 tracking-tight">Shipping Method</h2>
<div className="grid grid-cols-2 gap-3 mb-5">

<div className="relative p-4 rounded-xl border-2 border-slate-900 bg-slate-50/50 cursor-pointer transition-all" id="card-group" onclick="selectShipping('group')">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-lg text-slate-900" icon="solar:users-group-two-rounded-linear" id="icon-group"></iconify-icon>
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center" id="radio-group">
<div className="w-2 h-2 rounded-full bg-slate-900"></div>
</div>
</div>
<h4 className="text-sm font-medium text-slate-900">Group</h4>
<p className="text-xs text-slate-500 mt-1">10-15 Days</p>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-sm font-medium text-slate-900">2,500</span>
<span className="text-xs text-slate-500">FCFA</span>
</div>
</div>

<div className="relative p-4 rounded-xl border-2 border-slate-100 bg-white cursor-pointer transition-all hover:border-slate-200" id="card-solo" onclick="selectShipping('solo')">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-lg text-slate-400" icon="solar:plane-linear" id="icon-solo"></iconify-icon>
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center" id="radio-solo">
<div className="w-2 h-2 rounded-full bg-transparent"></div>
</div>
</div>
<h4 className="text-sm font-medium text-slate-800">Express</h4>
<p className="text-xs text-slate-500 mt-1">3-5 Days</p>
<div className="mt-3 flex items-baseline gap-1">
<span className="text-sm font-medium text-slate-900">8,000</span>
<span className="text-xs text-slate-500">FCFA</span>
</div>
</div>
</div>

<h2 className="text-sm font-medium text-slate-900 mb-2 tracking-tight">Pickup Location</h2>
<button className="w-full flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] active:bg-slate-50 transition-colors">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon className="text-base" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="text-left">
<h4 className="text-sm font-medium text-slate-800">Koli Hub Akwa</h4>
<p className="text-xs text-slate-500 mt-0.5">Bd de la Liberté, Douala</p>
</div>
</div>
<iconify-icon className="text-slate-400 text-lg" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</section>

<section className="px-5">
<div className="bg-white border border-slate-200 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-slate-800">Use Wallet Balance</h4>
<p className="text-xs text-slate-500 mt-0.5">Available: <span className="font-medium text-slate-700">2,500 FCFA</span></p>
</div>
</div>

<button className="w-12 h-7 rounded-full bg-slate-200 relative transition-colors duration-300 ease-in-out focus:outline-none" id="wallet-toggle" onclick="toggleWallet()">
<div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out transform translate-x-0" id="wallet-knob"></div>
</button>
</div>
</section>

<section className="p-5 mt-2">
<h2 className="text-sm font-medium text-slate-900 mb-3 tracking-tight">Payment Method</h2>
<div className="grid grid-cols-2 gap-3">

<button className="relative p-4 rounded-xl border-2 border-[#FFCC00] bg-yellow-50/20 text-left transition-all" id="pay-momo" onclick="selectPayment('momo')">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded-full bg-[#FFCC00] flex items-center justify-center text-slate-900 font-medium tracking-tighter text-xs">
                                MTN
                            </div>
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center" id="radio-momo">
<div className="w-2 h-2 rounded-full bg-slate-900"></div>
</div>
</div>
<h4 className="text-sm font-medium text-slate-900">Mobile Money</h4>
</button>

<button className="relative p-4 rounded-xl border-2 border-slate-100 bg-white text-left transition-all hover:border-orange-200" id="pay-orange" onclick="selectPayment('orange')">
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded-full bg-[#FF6600] flex items-center justify-center text-white font-medium tracking-tighter text-xs">
                                OM
                            </div>
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center" id="radio-orange">
<div className="w-2 h-2 rounded-full bg-transparent"></div>
</div>
</div>
<h4 className="text-sm font-medium text-slate-900">Orange Money</h4>
</button>
</div>
</section>
</main>

<div className="absolute bottom-0 inset-x-0 bg-white border-t border-slate-100 px-5 py-4 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.04)]">
<div className="flex justify-between items-end mb-4">
<div className="flex flex-col gap-1">
<span className="text-xs text-slate-500">Total to pay</span>
<div className="flex items-center gap-2">
<span className="text-sm text-slate-400 line-through hidden" id="old-price">27,500</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-medium tracking-tight text-slate-900" id="final-price">27,500</span>
<span className="text-xs font-medium text-slate-500">FCFA</span>
</div>
</div>
</div>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white rounded-xl py-3.5 flex items-center justify-center gap-2 transition-all active:scale-[0.98]" onclick="startPayment()">
<iconify-icon className="text-lg text-slate-300" icon="solar:lock-password-unlocked-linear"></iconify-icon>
<span className="text-sm font-medium">Pay Securely</span>
</button>
</div>




<div className="absolute inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-end opacity-0 pointer-events-none transition-opacity duration-300" id="overlay-processing">
<div className="bg-white w-full rounded-t-3xl p-8 flex flex-col items-center justify-center min-h-[50vh] transform translate-y-full transition-transform duration-500 ease-out shadow-[0_-20px_40px_rgba(0,0,0,0.1)]" id="modal-processing">
<div className="relative mb-8">
<div className="w-20 h-20 rounded-full border-4 border-slate-100 flex items-center justify-center">
<iconify-icon className="text-3xl text-slate-400" icon="solar:smartphone-rotate-linear"></iconify-icon>
</div>

<div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-transparent border-t-slate-900 border-r-slate-900 animate-spin-slow"></div>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Authorizing transaction</h3>
<p className="text-sm text-slate-500 text-center max-w-[260px] leading-relaxed">
                    Please check your phone. A MoMo prompt has been sent to your number.
                </p>
<div className="mt-8 flex gap-2">
<div className="w-1.5 h-1.5 bg-slate-900 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
<div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
<div className="w-1.5 h-1.5 bg-slate-200 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center px-6 opacity-0 pointer-events-none transition-opacity duration-500" id="overlay-success">

<div className="absolute inset-0 overflow-hidden pointer-events-none" id="confetti-container"></div>
<div className="w-24 h-24 rounded-full bg-emerald-50 flex items-center justify-center mb-6 scale-50 opacity-0 transition-all duration-700 ease-out" id="success-icon">
<iconify-icon className="text-5xl text-emerald-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900 mb-3 text-center transform translate-y-4 opacity-0 transition-all duration-700 delay-100" id="success-title">
                Order Validated!
            </h2>
<p className="text-sm text-slate-500 text-center max-w-[280px] leading-relaxed mb-10 transform translate-y-4 opacity-0 transition-all duration-700 delay-200" id="success-text">
                Your payment was successful. Your item will be purchased in China within 24 hours.
            </p>
<button className="w-full bg-slate-900 text-white rounded-xl py-4 flex items-center justify-center gap-2 transform translate-y-4 opacity-0 transition-all duration-700 delay-300" id="success-btn" onclick="resetFlow()">
<iconify-icon className="text-lg" icon="solar:routing-linear"></iconify-icon>
<span className="text-sm font-medium">Track Order</span>
</button>
</div>
</div>


    </>
  );
}
