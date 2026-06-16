import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- State Management ---
        let cart = JSON.parse(localStorage.getItem('imperiumCart')) || [];

        // --- Core Functions ---
        
        function saveCart() {
            localStorage.setItem('imperiumCart', JSON.stringify(cart));
            renderCart();
        }

        function addToCart(productId) {
            const card = document.getElementById(productId);
            if (!card) return;

            const name = card.dataset.name;
            const basePrice = parseInt(card.dataset.price);

            // Get selected meat (radio)
            // Check if meat options exist for this product
            let meat = null;
            const meatOptionsExist = card.querySelector('input[type="radio"][name^="meat_"]');
            
            if (meatOptionsExist) {
                const meatInput = card.querySelector('input[type="radio"]:checked');
                // Validation: Meat is mandatory if options exist
                if (!meatInput) {
                    alert("Proszę wybrać rodzaj mięsa.");
                    return;
                }
                meat = meatInput.value;
            }

            // Get selected sauces (checkboxes)
            const sauceInputs = card.querySelectorAll('input[type="checkbox"]:checked');
            const sauces = Array.from(sauceInputs).map(input => input.value);
            
            // Validation: Sauces 1-3
            if (sauces.length === 0) {
                 alert("Proszę wybrać przynajmniej jeden sos.");
                 return;
            }
            if (sauces.length > 3) {
                alert("Maksymalnie 3 sosy. Proszę odznaczyć nadmiarowe.");
                return;
            }

            // Create unique ID for this variation
            const variationId = `${productId}-${meat || 'vege'}-${sauces.sort().join('')}`;
            
            const existingItem = cart.find(item => item.variationId === variationId);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    variationId,
                    name,
                    price: basePrice,
                    meat, // can be null
                    sauces,
                    quantity: 1
                });
            }

            // Visual feedback
            const btn = card.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Dodano!`;
            btn.classList.add('bg-green-700', 'border-green-600');
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('bg-green-700', 'border-green-600');
            }, 1000);

            saveCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            saveCart();
        }

        function renderCart() {
            const container = document.getElementById('cart-items-container');
            const totalEl = document.getElementById('cart-total-price');
            const badgeEl = document.getElementById('cart-badge-count');
            const navBadgeEl = document.getElementById('nav-cart-count');
            const checkoutBtn = document.getElementById('checkout-btn');
            const finalOrderBtn = document.getElementById('final-order-btn');
            const mobileInfo = document.getElementById('mobile-sticky-info');

            // Calculate totals
            let totalPrice = 0;
            let totalCount = 0;

            cart.forEach(item => {
                totalPrice += item.price * item.quantity;
                totalCount += item.quantity;
            });

            // Update UI Numbers
            totalEl.innerText = `${totalPrice} zł`;
            badgeEl.innerText = `${totalCount} poz.`;
            
            // Nav Badge
            if (totalCount > 0) {
                navBadgeEl.classList.remove('opacity-0');
                navBadgeEl.classList.add('animate-bump');
                setTimeout(() => navBadgeEl.classList.remove('animate-bump'), 300);
            } else {
                navBadgeEl.classList.add('opacity-0');
            }

            // Button States
            if (totalCount > 0) {
                checkoutBtn.classList.remove('opacity-50', 'pointer-events-none');
                finalOrderBtn.classList.remove('opacity-50', 'pointer-events-none');
                finalOrderBtn.innerText = `Zamawiam (${totalPrice} zł)`;
                mobileInfo.innerText = `${totalPrice} zł`;
            } else {
                checkoutBtn.classList.add('opacity-50', 'pointer-events-none');
                finalOrderBtn.classList.add('opacity-50', 'pointer-events-none');
                finalOrderBtn.innerText = 'Koszyk jest pusty';
                mobileInfo.innerText = 'Bez kolejki';
            }

            // Render Items
            if (cart.length === 0) {
                container.innerHTML = `
                    <div class="text-center py-6 text-neutral-600 flex flex-col items-center gap-2">
                        <iconify-icon icon="solar:cart-large-linear" width="32" class="opacity-20"></iconify-icon>
                        <span class="text-sm italic">Twój koszyk jest pusty.</span>
                    </div>
                `;
            } else {
                container.innerHTML = cart.map((item, index) => {
                    // Format description
                    let description = [];
                    if (item.meat) description.push(item.meat);
                    if (item.sauces.length > 0) description.push(item.sauces.join(', '));
                    const descString = description.join(' • ');

                    return `
                    <div class="flex justify-between items-start gap-3 pb-4 border-b border-neutral-800/50 last:border-0 last:pb-0 animate-[fadeIn_0.3s_ease-out]">
                        <div>
                            <div class="flex items-center gap-2">
                                <h4 class="text-sm font-medium text-white">${item.name}</h4>
                                ${item.quantity > 1 ? `<span class="text-[10px] bg-red-900/30 text-red-500 px-1.5 py-0.5 rounded font-mono">x${item.quantity}</span>` : ''}
                            </div>
                            <p class="text-xs text-neutral-500 mt-0.5">${descString}</p>
                        </div>
                        <div class="text-right shrink-0">
                            <span class="text-sm text-white block">${item.price * item.quantity} zł</span>
                            <button onclick="removeFromCart(${index})" class="text-[10px] text-red-500 hover:text-red-400 mt-1 uppercase tracking-wide font-medium transition-colors p-1 -mr-1">Usuń</button>
                        </div>
                    </div>
                    `;
                }).join('');
            }
        }

        // Initialize on Load
        document.addEventListener('DOMContentLoaded', renderCart);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
<a className="text-lg tracking-tight font-semibold text-white uppercase flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<span className="text-red-500">
<iconify-icon icon="solar:fire-linear" width="22"></iconify-icon>
</span>
                Imperium
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#menu">Menu</a>
<a className="hover:text-white transition-colors" href="#about">O Nas</a>
<a className="hover:text-white transition-colors" href="#contact">Kontakt</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-white transition-colors" href="#login">
<iconify-icon icon="solar:user-circle-linear" width="20"></iconify-icon>
                    Logowanie
                </a>
<button className="relative p-2 text-white hover:text-red-500 transition-colors group">
<iconify-icon icon="solar:cart-large-minimalistic-linear" width="24"></iconify-icon>
<span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500 border border-neutral-950 transition-opacity" id="nav-cart-count"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-red-900/10 blur-[130px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                Imperium Kebabowe <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Standard Złota.</span>
</h1>
<p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Najlepszy kebab w mieście. Skomponuj własny zestaw. Świeże składniki, prawdziwy ogień.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="w-full sm:w-auto px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]" href="#menu">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
                    Zamów online
                </a>
<a className="w-full sm:w-auto px-8 py-3 border border-neutral-800 hover:border-neutral-600 bg-neutral-900/50 hover:bg-neutral-900 text-neutral-300 hover:text-white font-medium rounded-lg transition-all" href="#menu">
                    Zobacz menu
                </a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
<div className="flex flex-col items-center text-center gap-3">
<div className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-red-500">
<iconify-icon icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="font-medium text-white tracking-tight">Świeże mięso</h3>
<p className="text-xs text-neutral-500 mt-1">Kroimy codziennie rano.</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-red-500">
<iconify-icon icon="solar:bottle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white tracking-tight">Domowe sosy</h3>
<p className="text-xs text-neutral-500 mt-1">Tajna receptura.</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-red-500">
<iconify-icon icon="solar:stopwatch-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white tracking-tight">Bez kolejki</h3>
<p className="text-xs text-neutral-500 mt-1">Odbierasz na czas.</p>
</div>
</div>
<div className="flex flex-col items-center text-center gap-3">
<div className="p-3 rounded-full bg-neutral-900 border border-neutral-800 text-red-500">
<iconify-icon icon="solar:bag-check-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="font-medium text-white tracking-tight">Wynos / Odbiór</h3>
<p className="text-xs text-neutral-500 mt-1">Solidne pakowanie.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-t border-white/5" id="menu">
<div className="max-w-7xl mx-auto px-4">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-8">Menu</h2>
<div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2 no-scrollbar mask-gradient">
<button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-medium whitespace-nowrap transition-colors shadow-lg shadow-red-900/20">Wszystkie</button>
<button className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all text-sm font-medium whitespace-nowrap">Kebab w bułce</button>
<button className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all text-sm font-medium whitespace-nowrap">Kebab w tortilli</button>
<button className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all text-sm font-medium whitespace-nowrap">Frytki</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group bg-neutral-950 border border-neutral-800 rounded-2xl p-4 hover:border-neutral-600 transition-all flex flex-col h-full product-card" data-name="Kebab w Bułce" data-price="22" id="prod-1">
<div className="h-48 w-full bg-neutral-900 rounded-xl mb-4 overflow-hidden relative shrink-0">
<img alt="Kebab" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500" loading="lazy" src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white tracking-tight">Kebab w Bułce</h3>
<span className="text-lg font-medium text-red-500 tracking-tight">22 zł</span>
</div>
<p className="text-sm text-neutral-500 mb-5 line-clamp-2 leading-relaxed">Klasyk gatunku. Chrupiąca bułka wypiekana na miejscu.</p>

<div className="space-y-5 mb-6">

<div className="">
<span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block mb-2">Mięso (Wymagane)</span>
<div className="grid grid-cols-3 gap-2">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="meat_prod1" type="radio" value="Wołowina"/>
<div className="py-2 px-1 text-center rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-700">Wołowina</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="meat_prod1" type="radio" value="Kurczak"/>
<div className="py-2 px-1 text-center rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-700">Kurczak</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="meat_prod1" type="radio" value="Mieszane"/>
<div className="py-2 px-1 text-center rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-700">Mieszane</div>
</label>
</div>
</div>

<div className="">
<span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block mb-2">Sosy (1-3)</span>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod1" type="checkbox" value="Mieszany"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Mieszany
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod1" type="checkbox" value="Czosnek"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Czosnek
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod1" type="checkbox" value="Ostry"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Ostry
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod1" type="checkbox" value="Łagodny"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Łagodny
                                        </div>
</label>
</div>
</div>
</div>
<button className="mt-auto w-full py-2.5 bg-neutral-900 border border-neutral-700 text-white font-medium rounded-lg hover:bg-neutral-800 hover:border-neutral-500 active:scale-95 transition-all text-sm flex items-center justify-center gap-2" onclick="addToCart('prod-1')">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                            Dodaj do koszyka
                        </button>
</div>

<div className="group bg-neutral-950 border border-neutral-800 rounded-2xl p-4 hover:border-neutral-600 transition-all flex flex-col h-full product-card" data-name="Mega Rollo" data-price="28" id="prod-2">
<div className="h-48 w-full bg-neutral-900 rounded-xl mb-4 overflow-hidden relative shrink-0">
<img alt="Tortilla" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500" loading="lazy" src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white tracking-tight">Mega Rollo</h3>
<span className="text-lg font-medium text-red-500 tracking-tight">28 zł</span>
</div>
<p className="text-sm text-neutral-500 mb-5 line-clamp-2 leading-relaxed">50cm tortilli napakowanej mięsem. Tylko dla graczy wagi ciężkiej.</p>

<div className="space-y-5 mb-6">

<div className="">
<span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block mb-2">Mięso (Wymagane)</span>
<div className="grid grid-cols-3 gap-2">
<label className="cursor-pointer relative">
<input className="peer sr-only" name="meat_prod2" type="radio" value="Wołowina"/>
<div className="py-2 px-1 text-center rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-700">Wołowina</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="meat_prod2" type="radio" value="Kurczak"/>
<div className="py-2 px-1 text-center rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-700">Kurczak</div>
</label>
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="meat_prod2" type="radio" value="Mieszane"/>
<div className="py-2 px-1 text-center rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-700">Mieszane</div>
</label>
</div>
</div>

<div className="">
<span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block mb-2">Sosy (1-3)</span>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod2" type="checkbox" value="Mieszany"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Mieszany
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod2" type="checkbox" value="Czosnek"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Czosnek
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod2" type="checkbox" value="Ostry"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Ostry
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod2" type="checkbox" value="Łagodny"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Łagodny
                                        </div>
</label>
</div>
</div>
</div>
<button className="mt-auto w-full py-2.5 bg-neutral-900 border border-neutral-700 text-white font-medium rounded-lg hover:bg-neutral-800 hover:border-neutral-500 active:scale-95 transition-all text-sm flex items-center justify-center gap-2" onclick="addToCart('prod-2')">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                            Dodaj do koszyka
                        </button>
</div>

<div className="group bg-neutral-950 border border-neutral-800 rounded-2xl p-4 hover:border-neutral-600 transition-all flex flex-col h-full product-card" data-name="Kebab Box" data-price="19" id="prod-3">
<div className="h-48 w-full bg-neutral-900 rounded-xl mb-4 overflow-hidden relative shrink-0">

<img alt="Kebab Box with fries and meat" className="group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500 opacity-80 w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/333b9877-6d39-4e38-97fb-5ce1fe0539fd_3840w.png"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white tracking-tight">Kebab Box</h3>
<span className="text-lg font-medium text-red-500 tracking-tight">19 zł</span>
</div>
<p className="text-sm text-neutral-500 mb-5 line-clamp-2 leading-relaxed">Solidna porcja mięsa, frytek i surówki w wygodnym pudełku.</p>

<div className="space-y-5 mb-6">

<div>
<span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block mb-2">Mięso (Wymagane)</span>
<div className="grid grid-cols-3 gap-2">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="meat_prod3" type="radio" value="Wołowina"/>
<div className="py-2 px-1 text-center rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-700">Wołowina</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="meat_prod3" type="radio" value="Kurczak"/>
<div className="py-2 px-1 text-center rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-700">Kurczak</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="meat_prod3" type="radio" value="Mieszane"/>
<div className="py-2 px-1 text-center rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-700">Mieszane</div>
</label>
</div>
</div>

<div>
<span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block mb-2">Sosy (1-3)</span>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod3" type="checkbox" value="Mieszany"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Mieszany
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod3" type="checkbox" value="Czosnek"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Czosnek
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod3" type="checkbox" value="Ostry"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Ostry
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod3" type="checkbox" value="Łagodny"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Łagodny
                                        </div>
</label>
</div>
</div>
</div>
<button className="mt-auto w-full py-2.5 bg-neutral-900 border border-neutral-700 text-white font-medium rounded-lg hover:bg-neutral-800 hover:border-neutral-500 active:scale-95 transition-all text-sm flex items-center justify-center gap-2" onclick="addToCart('prod-3')">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                            Dodaj do koszyka
                        </button>
</div>

<div className="group bg-neutral-950 border border-neutral-800 rounded-2xl p-4 hover:border-neutral-600 transition-all flex flex-col h-full product-card" data-name="Frytki Belgijskie" data-price="14" id="prod-4">
<div className="h-48 w-full bg-neutral-900 rounded-xl mb-4 overflow-hidden relative shrink-0">
<img alt="Frytki Belgijskie" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity group-hover:scale-105 duration-500" loading="lazy" src="https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-white tracking-tight">Frytki Belgijskie</h3>
<span className="text-lg font-medium text-red-500 tracking-tight">14 zł</span>
</div>
<p className="text-sm text-neutral-500 mb-5 line-clamp-2 leading-relaxed">Grube, podwójnie smażone na złoto. Idealnie chrupiące z zewnątrz, miękkie w środku.</p>

<div className="space-y-5 mb-6">

<div className="">
<span className="text-[10px] uppercase text-neutral-500 font-semibold tracking-wider block mb-2">Sosy (1-2)</span>
<div className="grid grid-cols-2 gap-2">
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod4" type="checkbox" value="Ketchup"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Ketchup
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod4" type="checkbox" value="Majonez"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Majonez
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod4" type="checkbox" value="Czosnek"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Czosnek
                                        </div>
</label>
<label className="cursor-pointer relative group/checkbox">
<input className="peer sr-only" name="sauce_prod4" type="checkbox" value="Belgijski"/>
<div className="px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-400 peer-checked:bg-neutral-800 peer-checked:text-white peer-checked:border-red-500/50 transition-all hover:border-neutral-600 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-700 peer-checked:bg-red-500 transition-colors"></span>
                                            Belgijski
                                        </div>
</label>
</div>
</div>
</div>
<button className="mt-auto w-full py-2.5 bg-neutral-900 border border-neutral-700 text-white font-medium rounded-lg hover:bg-neutral-800 hover:border-neutral-500 active:scale-95 transition-all text-sm flex items-center justify-center gap-2" onclick="addToCart('prod-4')">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
                            Dodaj do koszyka
                        </button>
</div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 shadow-2xl shadow-black/50 backdrop-blur-sm">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-white flex items-center gap-2 tracking-tight">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
                                Twoje zamówienie
                            </h3>
<span className="text-xs font-medium text-neutral-500 px-2 py-1 bg-neutral-900 rounded border border-neutral-800" id="cart-badge-count">5 poz.</span>
</div>

<div className="space-y-4 mb-6 min-h-[100px] flex flex-col justify-center" id="cart-items-container">
<div className="flex justify-between items-start gap-3 pb-4 border-b border-neutral-800/50 last:border-0 last:pb-0 animate-[fadeIn_0.3s_ease-out]">
<div>
<div className="flex items-center gap-2">
<h4 className="text-sm font-medium text-white">Kebab Box</h4>
</div>
<p className="text-xs text-neutral-500 mt-0.5">Mieszane • Mieszany, Ostry</p>
</div>
<div className="text-right shrink-0">
<span className="text-sm text-white block">19 zł</span>
<button className="text-[10px] text-red-500 hover:text-red-400 mt-1 uppercase tracking-wide font-medium transition-colors p-1 -mr-1" onclick="removeFromCart(0)">Usuń</button>
</div>
</div>
<div className="flex justify-between items-start gap-3 pb-4 border-b border-neutral-800/50 last:border-0 last:pb-0 animate-[fadeIn_0.3s_ease-out]">
<div>
<div className="flex items-center gap-2">
<h4 className="text-sm font-medium text-white">Mega Rollo</h4>
</div>
<p className="text-xs text-neutral-500 mt-0.5">Wołowina • Czosnek, Mieszany, Ostry</p>
</div>
<div className="text-right shrink-0">
<span className="text-sm text-white block">28 zł</span>
<button className="text-[10px] text-red-500 hover:text-red-400 mt-1 uppercase tracking-wide font-medium transition-colors p-1 -mr-1" onclick="removeFromCart(1)">Usuń</button>
</div>
</div>
<div className="flex justify-between items-start gap-3 pb-4 border-b border-neutral-800/50 last:border-0 last:pb-0 animate-[fadeIn_0.3s_ease-out]">
<div>
<div className="flex items-center gap-2">
<h4 className="text-sm font-medium text-white">Kebab w Bułce</h4>
</div>
<p className="text-xs text-neutral-500 mt-0.5">Kurczak • Czosnek, Łagodny</p>
</div>
<div className="text-right shrink-0">
<span className="text-sm text-white block">22 zł</span>
<button className="text-[10px] text-red-500 hover:text-red-400 mt-1 uppercase tracking-wide font-medium transition-colors p-1 -mr-1" onclick="removeFromCart(2)">Usuń</button>
</div>
</div>
<div className="flex justify-between items-start gap-3 pb-4 border-b border-neutral-800/50 last:border-0 last:pb-0 animate-[fadeIn_0.3s_ease-out]">
<div>
<div className="flex items-center gap-2">
<h4 className="text-sm font-medium text-white">Frytki Belgijskie</h4>
</div>
<p className="text-xs text-neutral-500 mt-0.5">Ketchup, Majonez</p>
</div>
<div className="text-right shrink-0">
<span className="text-sm text-white block">14 zł</span>
<button className="text-[10px] text-red-500 hover:text-red-400 mt-1 uppercase tracking-wide font-medium transition-colors p-1 -mr-1" onclick="removeFromCart(3)">Usuń</button>
</div>
</div>
<div className="flex justify-between items-start gap-3 pb-4 border-b border-neutral-800/50 last:border-0 last:pb-0 animate-[fadeIn_0.3s_ease-out]">
<div>
<div className="flex items-center gap-2">
<h4 className="text-sm font-medium text-white">Kebab w Bułce</h4>
</div>
<p className="text-xs text-neutral-500 mt-0.5">Wołowina • Czosnek, Mieszany, Łagodny</p>
</div>
<div className="text-right shrink-0">
<span className="text-sm text-white block">22 zł</span>
<button className="text-[10px] text-red-500 hover:text-red-400 mt-1 uppercase tracking-wide font-medium transition-colors p-1 -mr-1" onclick="removeFromCart(4)">Usuń</button>
</div>
</div>
</div>

<div className="flex justify-between items-center mb-6 pt-4 border-t border-neutral-800/50">
<span className="text-neutral-400 text-sm">Suma do zapłaty</span>
<span className="text-xl font-semibold text-white tracking-tight" id="cart-total-price">105 zł</span>
</div>
<a className="hover:bg-red-700 transition-all flex items-center justify-center gap-2 shadow-red-900/20 font-medium text-white bg-red-600 w-full rounded-lg mb-3 pt-3 pb-3 shadow-lg" href="#checkout" id="checkout-btn">
                            Przejdź do kasy
                        </a>
<p className="text-center text-[10px] text-neutral-600">Darmowa dostawa od 50 zł</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 border-t border-neutral-900" id="login">
<div className="max-w-md mx-auto">
<div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8 shadow-xl shadow-black/20">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold text-white tracking-tight">Konto Imperatora</h2>
<p className="text-sm text-neutral-500 mt-2">Zaloguj się, żeby powtórzyć ulubione zamówienie.</p>
</div>
<form className="space-y-4">
<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Email</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-neutral-600" placeholder="jan@przyklad.pl" type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Hasło</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all placeholder:text-neutral-600" placeholder="••••••••" type="password"/>
</div>
<button className="w-full bg-white text-neutral-950 font-medium py-2.5 rounded-lg hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5">
                        Zaloguj się
                    </button>
</form>
<div className="mt-6 flex items-center justify-between text-xs">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Nie masz konta?</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Resetuj hasło</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 px-4 border-t border-white/5" id="checkout">
<div className="max-w-2xl mx-auto">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8">Dostawa i Płatność</h2>
<div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 md:p-8 space-y-6">

<div className="flex items-center gap-4 p-4 bg-neutral-900/50 rounded-xl border border-neutral-800/50">
<div className="p-2 bg-neutral-800 rounded-lg text-neutral-400">
<iconify-icon icon="solar:user-speak-linear" width="24"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-medium text-white">Zamawiasz jako Gość</h4>
<p className="text-xs text-neutral-500 mt-0.5">Nie musisz się rejestrować, ale ominą Cię punkty.</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="md:col-span-1">
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Imię</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors" type="text"/>
</div>
<div className="md:col-span-1">
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Telefon</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors" type="tel"/>
</div>
<div className="md:col-span-2">
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Notatka do zamówienia (opcjonalnie)</label>
<textarea className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-red-500 transition-colors" rows="2"></textarea>
</div>
</div>

<div className="">
<label className="block text-xs font-medium text-neutral-400 mb-3">Płatność</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only" name="payment" type="radio"/>
<div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 peer-checked:border-red-500 peer-checked:bg-red-900/10 transition-all flex flex-col items-center gap-2 hover:border-neutral-600">
<iconify-icon className="text-white" icon="solar:wallet-money-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-white">Przy odbiorze</span>
</div>
</label>
<label className="cursor-pointer relative opacity-50 cursor-not-allowed">
<input className="peer sr-only" disabled="" name="payment" type="radio"/>
<div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col items-center gap-2">
<iconify-icon className="text-white" icon="solar:card-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-white">Online (wkrótce)</span>
</div>
</label>
</div>
</div>
<div className="pt-4 border-t border-neutral-800">
<button className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl text-lg shadow-lg shadow-red-900/20 transition-all hover:shadow-red-900/40 transform hover:-translate-y-0.5" id="final-order-btn">Zamawiam (105 zł)</button>
<p className="text-center text-[10px] text-neutral-500 mt-3">Klikając, akceptujesz regulamin.</p>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-800 pt-16 pb-24 md:pb-8" id="contact">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="" id="about">
<h4 className="text-white font-semibold mb-4 flex items-center gap-2 tracking-tight">
<span className="text-red-500"><iconify-icon icon="solar:fire-linear"></iconify-icon></span> IMPERIUM
                </h4>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                    Powstaliśmy z głodu jakości. W Imperium Kebabowym nie ma kompromisów. Mięso przygotowujemy sami, sosy kręcimy na miejscu. 
                </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:facebook" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:instagram" width="20"></iconify-icon></a>
</div>
</div>

<div className="">
<h4 className="text-white font-semibold mb-4 tracking-tight">Kontakt</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-red-500" icon="solar:map-point-linear"></iconify-icon>
<span className="">ul. burzyn 119b, <br/>33-170 Tuchów</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-500" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+48000000000">123 456 789</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-red-500" icon="solar:clock-circle-linear"></iconify-icon>
<span className="">12:00 – 03:00 (Codziennie)</span>
</li>
</ul>
</div>

<div className="rounded-xl overflow-hidden bg-neutral-900 h-40 border border-neutral-800 flex items-center justify-center relative group cursor-pointer hover:border-neutral-600 transition-all">
<div className="bg-center group-hover:opacity-40 transition-all cursor-pointer opacity-30 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=600&amp;auto=format&amp;fit=crop')] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 flex flex-col relative items-center cursor-pointer">
<iconify-icon className="mb-2 text-red-500 drop-shadow-lg" icon="solar:map-point-bold" width="32"></iconify-icon>
<span className="text-xs font-semibold text-white tracking-wide uppercase drop-shadow-md">Pokaż na mapie</span>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-neutral-900 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] uppercase text-neutral-600 tracking-wide">© 2026 Imperium Kebabowe. Smacznego.</p>
<div className="flex gap-4 text-[10px] text-neutral-600 uppercase tracking-wide">
<a className="hover:text-neutral-400" href="#">Polityka Prywatności</a>
<a className="hover:text-neutral-400" href="#">Regulamin</a>
</div>
</div>
</footer>

<div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
<a className="w-full bg-red-600 text-white font-semibold py-3.5 rounded-xl shadow-2xl shadow-black flex items-center justify-between px-6 border border-red-500/50 hover:bg-red-700 transition-colors" href="#menu">
<span className="flex items-center gap-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
                Zamów teraz
            </span>
<span className="bg-black/20 px-2 py-0.5 rounded text-xs font-medium" id="mobile-sticky-info">105 zł</span>
</a>
</div>



    </>
  );
}
