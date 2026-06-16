import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Global Coupon Flow Logic
        const starterPriceArea = document.getElementById('starter-price-area');
        const proPriceArea = document.getElementById('pro-price-area');

        // Store original HTML states
        const originalStarterHTML = starterPriceArea.innerHTML;
        const originalProHTML = proPriceArea.innerHTML;

        const showBtn = document.getElementById('show-global-coupon-btn');
        const inputGroup = document.getElementById('global-coupon-input-group');
        const applyBtn = document.getElementById('apply-global-coupon-btn');
        const input = document.getElementById('global-coupon-input');
        const message = document.getElementById('global-coupon-message');
        const successArea = document.getElementById('global-coupon-success-area');
        const appliedCodeText = document.getElementById('applied-global-code-text');
        const removeBtn = document.getElementById('remove-global-coupon-btn');

        showBtn.addEventListener('click', () => {
            showBtn.classList.add('hidden');
            inputGroup.classList.remove('hidden');
            inputGroup.classList.add('flex');
            input.focus();
        });

        const resetState = () => {
            inputGroup.classList.remove('hidden');
            inputGroup.classList.add('flex');
            successArea.classList.add('hidden');
            successArea.classList.remove('flex');
            input.value = '';
            message.classList.add('hidden');
            
            // Revert Prices
            starterPriceArea.innerHTML = originalStarterHTML;
            proPriceArea.innerHTML = originalProHTML;
        };

        applyBtn.addEventListener('click', () => {
            const code = input.value.trim().toUpperCase();
            
            if (code === '') {
                message.textContent = 'Please enter a code.';
                message.className = 'text-xs text-red-500 mt-1 block text-center';
            } else if (code === 'SAVE20') {
                // Success State
                inputGroup.classList.add('hidden');
                inputGroup.classList.remove('flex');
                
                successArea.classList.remove('hidden');
                successArea.classList.add('flex');
                appliedCodeText.textContent = `${code} (-20%)`;
                
                // Update Starter Price
                starterPriceArea.innerHTML = `
                    <div class="flex flex-col gap-0.5">
                        <span class="text-base text-gray-400 line-through decoration-gray-300">NGN 4,500</span>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-semibold tracking-tight">NGN 3,600</span>
                            <span class="text-base text-gray-500">/month</span>
                        </div>
                    </div>
                `;

                // Update Pro Price
                proPriceArea.innerHTML = `
                    <div class="flex flex-col gap-0.5">
                        <span class="text-base text-gray-400 line-through decoration-gray-300">NGN 10,000</span>
                        <div class="flex items-baseline gap-2">
                            <span class="text-3xl font-semibold tracking-tight">NGN 8,000</span>
                            <span class="text-base text-gray-500">/month</span>
                        </div>
                    </div>
                `;
            } else {
                // Error State
                message.textContent = 'Invalid promotion code.';
                message.className = 'text-xs text-red-500 mt-1 block text-center';
            }
        });

        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                applyBtn.click();
            }
        });

        removeBtn.addEventListener('click', resetState);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="flex justify-between items-center p-6 lg:px-12 relative z-10">
<div className="text-2xl font-semibold tracking-tight">fisco</div>
<div className="flex items-center gap-3">
<button className="text-red-500 border border-red-200 rounded-full px-5 py-2 text-base font-medium hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-100">
                Logout
            </button>
<div className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center text-base font-medium">
                N
            </div>
</div>
</header>

<main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 relative z-10 flex flex-col items-center">
<div className="text-center mb-8">
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">See what's included</h1>
<p className="text-base text-gray-600">Choose the plan that's right for your business</p>
</div>

<div className="w-full flex justify-center mb-12 min-h-[48px]">
<div className="w-full max-w-md flex flex-col items-center">
<button className="text-base text-gray-500 hover:text-gray-900 transition-colors focus:outline-none group flex items-center gap-1.5" id="show-global-coupon-btn">
<iconify-icon className="text-lg text-gray-400 group-hover:text-gray-900 transition-colors" icon="solar:tag-linear"></iconify-icon>
<span className="underline decoration-transparent group-hover:decoration-gray-300 underline-offset-4 transition-all">Have a promotion code?</span>
</button>
<div className="hidden w-full flex-col gap-2" id="global-coupon-input-group">
<div className="flex gap-2 w-full">
<input className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-base bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all placeholder:text-gray-400 text-center" id="global-coupon-input" placeholder="Enter code (e.g. SAVE20)" type="text"/>
<button className="px-6 py-2 bg-gray-900 text-white rounded-lg text-base font-medium hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" id="apply-global-coupon-btn">
                            Apply
                        </button>
</div>
<p className="text-xs hidden text-center" id="global-coupon-message"></p>
</div>
<div className="hidden w-full items-center justify-between py-2.5 px-4 bg-green-50/80 backdrop-blur-sm border border-green-200 rounded-lg shadow-sm" id="global-coupon-success-area">
<div className="flex items-center gap-2 text-green-700">
<iconify-icon className="text-lg" icon="solar:tag-linear"></iconify-icon>
<span className="text-base font-medium" id="applied-global-code-text"></span>
</div>
<button className="text-gray-400 hover:text-gray-700 focus:outline-none flex items-center" id="remove-global-coupon-btn">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">

<div className="bg-white/40 backdrop-blur-md border border-gray-200 rounded-[2rem] p-8 flex flex-col relative">
<h3 className="text-xl font-medium mb-4">Starter</h3>
<div className="min-h-[72px] flex flex-col justify-center mb-6" id="starter-price-area">
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight">NGN 4,500</span>
<span className="text-base text-gray-500">/month</span>
</div>
</div>
<button className="w-full py-3 px-4 border border-gray-300 rounded-full font-medium text-base hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 mb-8">
                    Subscribe
                </button>
<div className="h-px w-full bg-gray-200 mb-6"></div>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">1 team member</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">50 inventory items</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">100 customers</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Storefront with basic themes</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Stock tracking &amp; order management</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">NGN currency only</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Email support</span>
</li>
</ul>
</div>

<div className="bg-white/60 backdrop-blur-md border border-gray-900 rounded-[2rem] p-8 flex flex-col relative mt-4 md:mt-0 shadow-sm">
<div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full tracking-wide">
                    Recommended
                </div>
<h3 className="text-xl font-medium mb-4">Pro</h3>
<div className="min-h-[72px] flex flex-col justify-center mb-6" id="pro-price-area">
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold tracking-tight">NGN 10,000</span>
<span className="text-base text-gray-500">/month</span>
</div>
</div>
<button className="w-full py-3 px-4 bg-gray-600 text-white rounded-full font-medium text-base hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mb-8">
                    Current Plan
                </button>
<div className="h-px w-full bg-gray-200 mb-6"></div>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">5 team members</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">1,000 inventory items</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">5,000 customers</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Multi-currency (NGN, USD)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Advanced analytics &amp; reporting</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Custom domain &amp; advanced theming</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Data export</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Cryptocurrency payments</span>
</li>
</ul>
</div>

<div className="bg-white/40 backdrop-blur-md border border-gray-200 rounded-[2rem] p-8 flex flex-col relative">
<h3 className="text-xl font-medium mb-4">Enterprise</h3>
<div className="mb-6 flex items-baseline gap-2 min-h-[72px] flex-col justify-center">
<span className="text-3xl font-semibold tracking-tight">Custom</span>
</div>
<button className="w-full py-3 px-4 border border-gray-300 rounded-full font-medium text-base hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200 mb-8">
                    Contact Sales
                </button>
<div className="h-px w-full bg-gray-200 mb-6"></div>
<ul className="space-y-4 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">10 team members (expandable)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Unlimited inventory items</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Unlimited customers</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Full API access</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Headless commerce</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-green-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-base text-gray-600">Priority support</span>
</li>
</ul>
</div>
</div>
<div className="mt-16 mb-8">
<button className="px-8 py-3 border border-gray-300 rounded-full text-base font-medium text-gray-700 hover:bg-white/50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200">
                Back
            </button>
</div>
</main>


    </>
  );
}
