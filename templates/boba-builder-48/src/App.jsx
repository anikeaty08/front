import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
milk: '#E8DCCA',
taro: '#E0C7E8',
matcha: '#C1DBC6',
fruit: '#F7C6C6',
thai: '#F5D0A9',
brownsugar: '#5C4033',
},
animation: {
'float': 'float 3s ease-in-out infinite',
'jiggle': 'jiggle 2s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-5px)' },
},
jiggle: {
'0%, 100%': { transform: 'rotate(-1deg)' },
'50%': { transform: 'rotate(1deg)' },
}
}
}
}
}



        const liquid = document.getElementById('liquid');
        const pearlContainer = document.getElementById('pearls-container');
        const iceContainer = document.getElementById('ice-container');
        const totalPriceEl = document.getElementById('total-price');
        const labelFlavor = document.getElementById('label-flavor');
        
        function placeOrder() {
            const btn = document.getElementById('add-to-order-btn');
            const actionArea = document.getElementById('order-action-area');
            const successView = document.getElementById('order-success-view');
            const timeDisplay = document.getElementById('delivery-time');

            // 1. Loading state
            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" width="18" class="animate-spin"></iconify-icon> Processing...';
            btn.classList.add('opacity-80', 'cursor-not-allowed');
            btn.disabled = true;

            // 2. Simulate delay & show time
            setTimeout(() => {
                // Calculate time (Current + 25 mins)
                const now = new Date();
                now.setMinutes(now.getMinutes() + 25);
                
                // Format time (e.g. 12:45 PM)
                const timeString = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
                timeDisplay.innerText = timeString;

                // Toggle views
                actionArea.classList.add('hidden');
                successView.classList.remove('hidden');
            }, 1200);
        }

        function resetBuilder() {
            document.getElementById('boba-form').reset();
            updateSimulator();
            
            // Reset UI States
            document.getElementById('sugar-display').innerText = '100%';
            document.getElementById('ice-display').innerText = 'Normal';
            
            // Reset Order/Button State
            const actionArea = document.getElementById('order-action-area');
            const successView = document.getElementById('order-success-view');
            const btn = document.getElementById('add-to-order-btn');
            
            successView.classList.add('hidden');
            actionArea.classList.remove('hidden');
            
            btn.disabled = false;
            btn.classList.remove('opacity-80', 'cursor-not-allowed');
            btn.innerHTML = `<span>Add to Order</span><iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>`;
        }

        function updateLabel(type, value) {
            document.getElementById(`${type}-display`).innerText = value;
            document.getElementById(`label-${type}`).innerText = value;
        }

        function updateSimulator() {
            // 1. Get Values
            const form = document.getElementById('boba-form');
            const flavorInput = form.querySelector('input[name="flavor"]:checked');
            const toppingsInputs = form.querySelectorAll('input[name="toppings"]:checked');
            const iceInput = form.querySelector('input[name="ice"]:checked');
            
            // 2. Update Liquid Color
            if(flavorInput) {
                liquid.style.backgroundColor = flavorInput.dataset.color;
                labelFlavor.innerText = flavorInput.closest('div').querySelector('.font-medium').innerText;
            }

            // 3. Update Price
            let total = 0;
            if(flavorInput) total += parseFloat(flavorInput.dataset.price);
            toppingsInputs.forEach(t => total += parseFloat(t.dataset.price));
            totalPriceEl.innerText = total.toFixed(2);

            // 4. Update Pearls (Visual)
            const hasBoba = Array.from(toppingsInputs).some(t => t.value === 'boba');
            pearlContainer.innerHTML = '';
            
            if (hasBoba) {
                pearlContainer.classList.remove('hidden');
                // Generate random pearls
                for (let i = 0; i < 20; i++) {
                    const pearl = document.createElement('div');
                    pearl.className = 'boba-pearl absolute rounded-full w-4 h-4 animate-float';
                    pearl.style.left = Math.random() * 80 + 10 + '%';
                    pearl.style.bottom = Math.random() * 60 + '%';
                    pearl.style.animationDelay = Math.random() * 2 + 's';
                    pearlContainer.appendChild(pearl);
                }
            } else {
                pearlContainer.classList.add('hidden');
            }

            // 5. Update Ice (Visual)
            iceContainer.innerHTML = '';
            let iceCount = 0;
            const iceVal = iceInput ? iceInput.value : 'Normal Ice';
            
            if (iceVal === 'Less Ice') iceCount = 3;
            else if (iceVal === 'Normal Ice') iceCount = 6;
            else if (iceVal === 'More Ice') iceCount = 10;
            else iceCount = 0;

            for (let i = 0; i < iceCount; i++) {
                const ice = document.createElement('div');
                ice.className = 'ice-cube absolute w-8 h-8 rounded-sm animate-jiggle';
                ice.style.top = Math.random() * 10 + '%';
                ice.style.left = Math.random() * 70 + 10 + '%';
                ice.style.transform = `rotate(${Math.random() * 360}deg)`;
                ice.style.animationDelay = Math.random() * 2 + 's';
                iceContainer.appendChild(ice);
            }
        }

        // Initialize on load
        window.addEventListener('DOMContentLoaded', () => {
            updateSimulator();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-6xl grid lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">

<div className="lg:col-span-5 lg:sticky lg:top-8 flex flex-col items-center justify-center min-h-[500px] bg-white rounded-3xl border border-zinc-200 shadow-sm p-8 relative overflow-hidden order-1 lg:order-1">
<div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>

<div className="relative z-10 group">

<div className="w-4 h-64 bg-zinc-200 absolute -top-24 left-1/2 -translate-x-1/2 -rotate-12 rounded-full border border-zinc-300 z-0 transform transition-transform duration-500 origin-bottom"></div>

<div className="w-56 h-8 bg-zinc-50/80 backdrop-blur-md border border-zinc-200 rounded-full absolute -top-4 left-1/2 -translate-x-1/2 z-30 shadow-sm"></div>

<div className="w-48 h-72 border-x border-b border-zinc-200 rounded-b-[3rem] relative overflow-hidden bg-white/30 backdrop-blur-sm shadow-2xl shadow-zinc-200/50 mx-auto">

<div className="absolute bottom-0 left-0 right-0 transition-all duration-700 ease-out" id="liquid" style={{height: '85%', backgroundColor: '#E8DCCA'}}>

<div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/20 pointer-events-none"></div>
</div>

<div className="absolute inset-0 overflow-hidden p-4 flex flex-col justify-end">

<div className="w-full h-24 relative hidden" id="pearls-container">

</div>

<div className="w-full h-full absolute top-0 left-0 pointer-events-none transition-opacity duration-500 opacity-100" id="ice-container">

</div>
</div>
</div>

<div className="absolute top-24 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur border border-zinc-100 px-4 py-3 rounded-lg shadow-sm text-center min-w-[120px] z-20">
<p className="text-xs uppercase tracking-widest text-zinc-400 font-medium mb-1">Order #001</p>
<h3 className="text-sm font-semibold text-zinc-800 tracking-tight" id="label-flavor">Classic Milk</h3>
<div className="flex justify-center gap-1 mt-2 text-zinc-400">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="12"></iconify-icon>
<span className="text-[10px]" id="label-sugar">100%</span>
<span className="text-[10px] mx-1">|</span>
<iconify-icon icon="lucide:snowflake" strokeWidth="1.5" width="12"></iconify-icon>
<span className="text-[10px]" id="label-ice">Normal</span>
</div>
</div>
</div>

<div className="mt-12 flex items-center gap-2">
<span className="text-3xl font-medium tracking-tight text-zinc-900">$<span id="total-price">5.50</span></span>
</div>
</div>

<div className="lg:col-span-7 space-y-8 order-2 lg:order-2 pb-12">
<div className="flex items-center justify-between">
<div>
<h1 className="text-2xl font-medium tracking-tight text-zinc-900">Customize Drink</h1>
<p className="text-zinc-500 text-sm mt-1">Craft your perfect blend with premium ingredients.</p>
</div>
<button className="text-xs font-medium text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-1" onclick="resetBuilder()">
<iconify-icon icon="lucide:rotate-ccw" width="14"></iconify-icon> Reset
                </button>
</div>
<form id="boba-form" onchange="updateSimulator()">

<section className="space-y-4">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-900">
<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:cup-soda" width="12"></iconify-icon>
</div>
                        Base Flavor
                    </div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">

<label className="cursor-pointer group relative">
<input checked="" className="peer sr-only" data-color="#E8DCCA" data-price="5.50" name="flavor" type="radio" value="milk"/>
<div className="option-card h-full p-4 rounded-xl bg-white border border-zinc-200 ring-0 peer-checked:ring-2 peer-checked:ring-zinc-900 peer-checked:border-transparent hover:bg-zinc-50 flex flex-col items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#E8DCCA] shadow-inner"></div>
<div>
<span className="block text-sm font-medium text-zinc-900">Classic Milk</span>
<span className="block text-xs text-zinc-400 mt-0.5">Black tea blend</span>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" data-color="#E0C7E8" data-price="6.00" name="flavor" type="radio" value="taro"/>
<div className="option-card h-full p-4 rounded-xl bg-white border border-zinc-200 ring-0 peer-checked:ring-2 peer-checked:ring-zinc-900 peer-checked:border-transparent hover:bg-zinc-50 flex flex-col items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#E0C7E8] shadow-inner"></div>
<div>
<span className="block text-sm font-medium text-zinc-900">Royal Taro</span>
<span className="block text-xs text-zinc-400 mt-0.5">Sweet earthy root</span>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" data-color="#C1DBC6" data-price="6.25" name="flavor" type="radio" value="matcha"/>
<div className="option-card h-full p-4 rounded-xl bg-white border border-zinc-200 ring-0 peer-checked:ring-2 peer-checked:ring-zinc-900 peer-checked:border-transparent hover:bg-zinc-50 flex flex-col items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#C1DBC6] shadow-inner"></div>
<div>
<span className="block text-sm font-medium text-zinc-900">Uji Matcha</span>
<span className="block text-xs text-zinc-400 mt-0.5">Premium green tea</span>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" data-color="#F7C6C6" data-price="5.75" name="flavor" type="radio" value="fruit"/>
<div className="option-card h-full p-4 rounded-xl bg-white border border-zinc-200 ring-0 peer-checked:ring-2 peer-checked:ring-zinc-900 peer-checked:border-transparent hover:bg-zinc-50 flex flex-col items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#F7C6C6] shadow-inner"></div>
<div>
<span className="block text-sm font-medium text-zinc-900">Strawberry</span>
<span className="block text-xs text-zinc-400 mt-0.5">Fresh puree</span>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" data-color="#F5D0A9" data-price="5.50" name="flavor" type="radio" value="thai"/>
<div className="option-card h-full p-4 rounded-xl bg-white border border-zinc-200 ring-0 peer-checked:ring-2 peer-checked:ring-zinc-900 peer-checked:border-transparent hover:bg-zinc-50 flex flex-col items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#F5D0A9] shadow-inner"></div>
<div>
<span className="block text-sm font-medium text-zinc-900">Thai Tea</span>
<span className="block text-xs text-zinc-400 mt-0.5">Spiced ceylon</span>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" data-color="#D7CCC8" data-price="6.50" name="flavor" type="radio" value="brownsugar"/>
<div className="option-card h-full p-4 rounded-xl bg-white border border-zinc-200 ring-0 peer-checked:ring-2 peer-checked:ring-zinc-900 peer-checked:border-transparent hover:bg-zinc-50 flex flex-col items-start gap-3">
<div className="w-8 h-8 rounded-full bg-[#D7CCC8] shadow-inner border border-zinc-300"></div>
<div>
<span className="block text-sm font-medium text-zinc-900">Brown Sugar</span>
<span className="block text-xs text-zinc-400 mt-0.5">Tiger syrup milk</span>
</div>
</div>
</label>
</div>
</section>
<div className="h-px bg-zinc-100 my-8"></div>

<section className="space-y-4">
<div className="flex items-center gap-2 text-sm font-medium text-zinc-900">
<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:circle-dot" width="12"></iconify-icon>
</div>
                        Toppings
                    </div>
<div className="space-y-3">

<label className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 hover:bg-zinc-50 cursor-pointer group transition-colors has-[:checked]:bg-zinc-50 has-[:checked]:border-zinc-400">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none w-5 h-5 border border-zinc-300 rounded bg-white checked:bg-zinc-900 checked:border-zinc-900 transition-colors" data-price="0.50" name="toppings" type="checkbox" value="boba"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-700 font-medium">Tapioca Pearls</span>
</div>
<span className="text-xs text-zinc-400">+$0.50</span>
</label>

<label className="flex items-center justify-between p-3 rounded-lg border border-zinc-200 hover:bg-zinc-50 cursor-pointer group transition-colors has-[:checked]:bg-zinc-50 has-[:checked]:border-zinc-400">
<div className="flex items-center gap-3">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none w-5 h-5 border border-zinc-300 rounded bg-white checked:bg-zinc-900 checked:border-zinc-900 transition-colors" data-price="0.75" name="toppings" type="checkbox" value="pudding"/>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="lucide:check" width="12"></iconify-icon>
</div>
<span className="text-sm text-zinc-700 font-medium">Egg Pudding</span>
</div>
<span className="text-xs text-zinc-400">+$0.75</span>
</label>
</div>
</section>
<div className="h-px bg-zinc-100 my-8"></div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<section className="space-y-4">
<div className="flex items-center justify-between text-sm font-medium text-zinc-900">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:droplets" width="12"></iconify-icon>
</div>
                                Sweetness
                            </div>
<span className="text-xs text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full" id="sugar-display">100%</span>
</div>
<div className="relative h-12 bg-zinc-100 rounded-lg p-1 flex">

<div className="w-full h-full grid grid-cols-4 gap-1 relative z-10">
<label className="cursor-pointer text-center flex items-center justify-center rounded-md transition-all has-[:checked]:bg-white has-[:checked]:shadow-sm">
<input className="sr-only" name="sugar" onchange="updateLabel('sugar', '0%')" type="radio" value="0%"/>
<span className="text-xs font-medium text-zinc-500">0%</span>
</label>
<label className="cursor-pointer text-center flex items-center justify-center rounded-md transition-all has-[:checked]:bg-white has-[:checked]:shadow-sm">
<input className="sr-only" name="sugar" onchange="updateLabel('sugar', '30%')" type="radio" value="30%"/>
<span className="text-xs font-medium text-zinc-500">30%</span>
</label>
<label className="cursor-pointer text-center flex items-center justify-center rounded-md transition-all has-[:checked]:bg-white has-[:checked]:shadow-sm">
<input className="sr-only" name="sugar" onchange="updateLabel('sugar', '50%')" type="radio" value="50%"/>
<span className="text-xs font-medium text-zinc-500">50%</span>
</label>
<label className="cursor-pointer text-center flex items-center justify-center rounded-md transition-all has-[:checked]:bg-white has-[:checked]:shadow-sm">
<input checked="" className="sr-only" name="sugar" onchange="updateLabel('sugar', '100%')" type="radio" value="100%"/>
<span className="text-xs font-medium text-zinc-500">100%</span>
</label>
</div>
</div>
</section>

<section className="space-y-4">
<div className="flex items-center justify-between text-sm font-medium text-zinc-900">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-500">
<iconify-icon icon="lucide:snowflake" width="12"></iconify-icon>
</div>
                                Ice Level
                            </div>
<span className="text-xs text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full" id="ice-display">Normal</span>
</div>
<div className="relative h-12 bg-zinc-100 rounded-lg p-1 flex">
<div className="w-full h-full grid grid-cols-4 gap-1 relative z-10">
<label className="cursor-pointer text-center flex items-center justify-center rounded-md transition-all has-[:checked]:bg-white has-[:checked]:shadow-sm">
<input className="sr-only" name="ice" onchange="updateLabel('ice', 'None')" type="radio" value="No Ice"/>
<span className="text-xs font-medium text-zinc-500">None</span>
</label>
<label className="cursor-pointer text-center flex items-center justify-center rounded-md transition-all has-[:checked]:bg-white has-[:checked]:shadow-sm">
<input className="sr-only" name="ice" onchange="updateLabel('ice', 'Less')" type="radio" value="Less Ice"/>
<span className="text-xs font-medium text-zinc-500">Less</span>
</label>
<label className="cursor-pointer text-center flex items-center justify-center rounded-md transition-all has-[:checked]:bg-white has-[:checked]:shadow-sm">
<input checked="" className="sr-only" name="ice" onchange="updateLabel('ice', 'Normal')" type="radio" value="Normal Ice"/>
<span className="text-xs font-medium text-zinc-500">Normal</span>
</label>
<label className="cursor-pointer text-center flex items-center justify-center rounded-md transition-all has-[:checked]:bg-white has-[:checked]:shadow-sm">
<input className="sr-only" name="ice" onchange="updateLabel('ice', 'Extra')" type="radio" value="More Ice"/>
<span className="text-xs font-medium text-zinc-500">Extra</span>
</label>
</div>
</div>
</section>
</div>

<div className="mt-12">

<div id="order-action-area">
<button className="w-full bg-zinc-900 text-white h-12 rounded-lg font-medium text-sm hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-200 active:scale-[0.99]" id="add-to-order-btn" onclick="placeOrder()" type="button">
<span>Add to Order</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<p className="text-center text-xs text-zinc-400 mt-4">Free delivery on orders over $15</p>
</div>

<div className="hidden fade-enter" id="order-success-view">
<div className="bg-zinc-900 text-white p-5 rounded-xl shadow-xl shadow-zinc-300/50 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2.5">
<div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="14"></iconify-icon>
</div>
<div>
<span className="block font-medium text-sm tracking-tight text-white">Order Confirmed</span>
<span className="block text-[10px] text-zinc-400">Preparing your drink</span>
</div>
</div>
<span className="text-zinc-500 text-xs font-mono">#8829</span>
</div>
<div className="h-px bg-zinc-800/50"></div>
<div className="flex justify-between items-end">
<div>
<p className="text-[10px] uppercase tracking-wider text-zinc-500 font-medium mb-1">Estimated Arrival</p>
<div className="flex items-baseline gap-1.5">
<p className="text-2xl font-semibold tracking-tight text-white" id="delivery-time">--:--</p>
<span className="text-xs text-zinc-500">Today</span>
</div>
</div>
<button className="text-xs bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white px-3 py-2 rounded-md transition-colors border border-zinc-700" onclick="resetBuilder()" type="button">
                                    New Order
                                </button>
</div>
</div>
</div>
</div>
</form>
</div>
</div>



    </>
  );
}
