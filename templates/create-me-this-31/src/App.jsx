import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="w-[280px] bg-white border-r border-gray-100 flex flex-col h-full flex-shrink-0 z-20 relative hidden md:flex">

<div className="px-8 pt-10 pb-10 flex items-center gap-3">
<div className="w-8 h-8 bg-gray-900 rounded-xl flex items-center justify-center shadow-sm">
<div className="w-3 h-3 bg-white rounded-full"></div>
</div>
<span className="text-xl tracking-tight text-gray-900 font-semibold">Untitled</span>
</div>

<nav className="flex-1 px-4 space-y-1">
<p className="px-4 text-xs font-medium text-gray-400 uppercase tracking-widest mb-4 mt-2">Menu</p>
<a className="flex items-center gap-4 px-4 py-3 bg-gray-900 text-white rounded-2xl shadow-sm" href="#">
<iconify-icon className="text-xl text-gray-300" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-base font-medium">Dashboard</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-2xl transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:settings-linear"></iconify-icon>
<span className="text-base font-normal">Settings</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-2xl transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:calendar-linear"></iconify-icon>
<span className="text-base font-normal">Meal planner</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-2xl transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:folder-with-files-linear"></iconify-icon>
<span className="text-base font-normal">Recipes</span>
</a>
<a className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-2xl transition-colors mb-4" href="#">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-base font-normal">Account</span>
</a>
</nav>

<div className="p-4 mb-4">
<a className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-2xl transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:logout-linear"></iconify-icon>
<span className="text-base font-normal">Log Out</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col relative min-w-0">

<header className="flex flex-shrink-0 sticky bg-[#ffffff]/80 h-24 z-10 border-gray-200/50 border-b px-10 top-0 backdrop-blur-xl items-center justify-between">

<div className="flex items-center gap-3 w-80 bg-white/60 border border-gray-200/60 rounded-full px-5 py-2.5 shadow-sm transition-all focus-within:bg-white focus-within:border-gray-300">
<iconify-icon className="text-lg text-gray-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full text-base outline-none placeholder:text-gray-400 text-gray-900 bg-transparent font-normal" placeholder="Search meals..." type="text"/>
</div>

<div className="flex items-center gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="diet" type="radio"/>
<div className="px-5 py-2 rounded-full border border-gray-200 bg-white text-gray-600 text-sm font-medium transition-all peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 hover:border-gray-300 shadow-sm">
                        Meat
                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="diet" type="radio"/>
<div className="px-5 py-2 rounded-full border border-gray-200 bg-white text-gray-600 text-sm font-medium transition-all peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 hover:border-gray-300 shadow-sm">
                        Vegan
                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="px-5 py-2 rounded-full border border-gray-200 bg-white text-gray-600 text-sm font-medium transition-all peer-checked:bg-gray-900 peer-checked:text-white peer-checked:border-gray-900 hover:border-gray-300 shadow-sm">
                        Gluten Free
                    </div>
</label>
</div>
</header>

<div className="flex-1 flex overflow-hidden relative">

<section className="flex-1 overflow-y-auto custom-scrollbar bg-[#ffffff] px-10 py-8 relative">
<div className="max-w-[800px] mx-auto">

<div className="flex items-end justify-between mb-8">
<div>
<div className="flex items-center gap-3 text-base text-gray-500 mb-2 font-normal">
<button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition-colors bg-transparent">
<iconify-icon className="text-base" icon="solar:arrow-left-linear"></iconify-icon>
</button>
<span>Drag &amp; drop to your plan</span>
</div>
<h1 className="text-4xl tracking-tight text-gray-900 font-semibold">Today's options</h1>
</div>
<div className="flex items-center gap-3 pb-1">
<button className="px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors hover:border-gray-300 shadow-sm">
                                Compare
                            </button>
<button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium transition-colors hover:border-gray-300 shadow-sm">
                                Filters
                                <iconify-icon className="text-lg" icon="solar:tuning-square-2-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-8 border-b border-gray-200 mb-8">
<button className="pb-4 text-base text-gray-900 border-b-[2px] border-gray-900 font-medium">All cuisines</button>
<button className="pb-4 text-base text-gray-500 hover:text-gray-800 transition-colors font-normal">Italian</button>
<button className="pb-4 text-base text-gray-500 hover:text-gray-800 transition-colors font-normal">Greek</button>
<button className="pb-4 text-base text-gray-500 hover:text-gray-800 transition-colors font-normal">Asian</button>
<div className="ml-auto flex items-center gap-2 pb-4 cursor-pointer text-gray-500 hover:text-gray-900">
<span className="text-sm font-normal">Sort: <span className="text-gray-900 font-medium">Price</span></span>
<iconify-icon className="text-base" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>

<div className="space-y-5 pb-20">

<div className="flex items-center gap-6 p-4 bg-white rounded-3xl shadow-apple relative z-50 transform -rotate-1 border border-gray-100">
<div className="cursor-grab text-gray-300 pl-2">
<iconify-icon className="text-2xl" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 relative">
<img alt="Dumplings" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
</div>
<div className="flex-1 py-2">
<h3 className="text-2xl tracking-tight text-gray-900 font-medium">Steamed Dumplings</h3>
<p className="text-base text-gray-500 mt-1 font-normal">672 kcal • Traditional</p>
<div className="mt-3 flex gap-2">
<div className="px-2.5 py-1 rounded-md bg-orange-50/50 border border-orange-100/50 flex items-center gap-1.5">
<iconify-icon className="text-sm text-orange-500" icon="solar:flame-linear"></iconify-icon>
<span className="text-xs font-medium text-orange-700">High Protein</span>
</div>
</div>
</div>
<div className="flex flex-col items-end gap-3 pr-4">
<div className="text-xl tracking-tight text-gray-900 font-semibold">
                                    $5.99
                                </div>
<button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-not-allowed">
<iconify-icon className="text-xl" icon="solar:check-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-6 p-4 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-apple transition-all group">
<div className="cursor-grab text-gray-200 hover:text-gray-400 pl-2 transition-colors">
<iconify-icon className="text-2xl" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 relative">
<div className="absolute top-2 left-2 bg-white/90 backdrop-blur text-gray-900 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm z-10">Popular</div>
<img alt="Musli" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex-1 py-2">
<div className="flex items-center gap-1.5 mb-1">
<iconify-icon className="text-sm text-gray-900" icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-medium text-gray-900">5.0</span>
<span className="text-sm text-gray-400 font-normal">(124)</span>
</div>
<h3 className="text-2xl tracking-tight text-gray-900 font-medium">Bio Musli Bowl</h3>
<p className="text-base text-gray-500 mt-1 font-normal">348 kcal • Fresh</p>
</div>
<div className="flex flex-col items-end gap-3 pr-4">
<div className="text-xl tracking-tight text-gray-900 font-semibold">
                                    $3.49
                                </div>
<button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-6 p-4 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-apple transition-all group">
<div className="cursor-grab text-gray-200 hover:text-gray-400 pl-2 transition-colors">
<iconify-icon className="text-2xl" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<div className="w-32 h-32 rounded-2xl overflow-hidden flex-shrink-0 relative">
<img alt="Sandwich" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&amp;fit=crop&amp;q=80&amp;w=400&amp;h=400"/>
</div>
<div className="flex-1 py-2">
<div className="flex items-center gap-1.5 mb-1">
<iconify-icon className="text-sm text-gray-900" icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-medium text-gray-900">4.8</span>
<span className="text-sm text-gray-400 font-normal">(86)</span>
</div>
<h3 className="text-2xl tracking-tight text-gray-900 font-medium">Artisan Sandwich</h3>
<p className="text-base text-gray-500 mt-1 font-normal">522 kcal • Bakery</p>
</div>
<div className="flex flex-col items-end gap-3 pr-4">
<div className="text-xl tracking-tight text-gray-900 font-semibold">
                                    $4.29
                                </div>
<button className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:add-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<aside className="w-[420px] flex-shrink-0 z-10 overflow-y-auto custom-scrollbar bg-white border-l border-gray-100 shadow-[-4px_0_24px_rgba(0,0,0,0.02)]">
<div className="p-8 pb-20 flex flex-col gap-8">

<div>
<h2 className="text-2xl tracking-tight text-gray-900 font-semibold mb-1">Review plan</h2>
<p className="text-sm text-gray-500 font-normal">19 Jan 2024 • 1 person</p>
</div>

<div className="flex items-center gap-4 pb-6 border-b border-gray-100">
<div className="w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 relative shadow-sm">
<img alt="Plan" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&amp;fit=crop&amp;q=80&amp;w=200&amp;h=200"/>
</div>
<div>
<h3 className="text-base font-semibold text-gray-900">Daily Balanced</h3>
<div className="flex items-center gap-1.5 mt-0.5">
<iconify-icon className="text-xs text-gray-900" icon="solar:star-bold"></iconify-icon>
<span className="text-sm font-medium text-gray-900">5.0</span>
</div>
</div>
</div>

<div className="space-y-6">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
<iconify-icon className="text-lg" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div>
<h5 className="text-base text-gray-900 font-medium">Tomato Omelette</h5>
<p className="text-xs text-gray-400 font-normal mt-0.5">Breakfast</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-base font-medium text-gray-900">$4.99</span>
<button className="text-gray-300 hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400">
<iconify-icon className="text-lg" icon="solar:sun-linear"></iconify-icon>
</div>
<div>
<h5 className="text-base text-gray-900 font-medium">Fruit Yoghurt</h5>
<p className="text-xs text-gray-400 font-normal mt-0.5">Lunch</p>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-base font-medium text-gray-900">$2.29</span>
<button className="text-gray-300 hover:text-gray-900 transition-colors opacity-0 group-hover:opacity-100">
<iconify-icon className="text-lg" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex items-center gap-4 p-3 border border-dashed border-gray-300 rounded-2xl bg-gray-50/50 cursor-pointer hover:bg-gray-50 transition-colors group">
<div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 group-hover:text-gray-900 transition-colors shadow-sm">
<iconify-icon className="text-lg" icon="solar:moon-linear"></iconify-icon>
</div>
<span className="text-sm text-gray-500 font-medium group-hover:text-gray-900 transition-colors">Add dinner</span>
</div>
</div>

<div className="pt-6 border-t border-gray-100 space-y-3">
<div className="flex justify-between items-center text-base font-normal text-gray-600">
<span>Subtotal</span>
<span className="text-gray-900 font-medium">$7.28</span>
</div>
<div className="flex justify-between items-center text-base font-normal text-gray-600">
<span className="underline underline-offset-4 decoration-gray-300">Service fee</span>
<span className="text-gray-900 font-medium">$0.00</span>
</div>
</div>

<div className="flex items-end justify-between pt-4 pb-2">
<div>
<span className="text-sm font-medium text-gray-900 block">Total (USD)</span>
</div>
<span className="text-3xl tracking-tight font-semibold text-gray-900">$7.28</span>
</div>

<div className="pt-6">
<h3 className="text-base font-semibold text-gray-900 mb-4">Pay with</h3>
<div className="space-y-3">

<label className="flex items-center justify-between p-4 border border-gray-200 rounded-2xl hover:border-gray-900 cursor-pointer transition-all has-[:checked]:border-gray-900 has-[:checked]:bg-gray-50/50">
<div className="flex items-center gap-3">
<input className="w-4 h-4 accent-gray-900" name="payment" type="radio"/>
<iconify-icon className="text-2xl text-gray-900" icon="solar:apple-linear"></iconify-icon>
<span className="text-base font-medium text-gray-900">Apple Pay</span>
</div>
</label>

<label className="flex flex-col p-4 border border-gray-200 rounded-2xl hover:border-gray-900 cursor-pointer transition-all has-[:checked]:border-gray-900 has-[:checked]:bg-gray-50/50">
<div className="flex items-center justify-between mb-1">
<div className="flex items-center gap-3">
<input checked="" className="w-4 h-4 accent-gray-900" name="payment" type="radio"/>
<iconify-icon className="text-2xl text-gray-900" icon="solar:card-linear"></iconify-icon>
<span className="text-base font-medium text-gray-900">Card</span>
</div>
</div>
<div className="flex gap-2 ml-7 pl-1 mt-1">
<span className="text-xs px-2.5 py-1 border border-gray-200 rounded-md bg-white text-gray-500 font-medium">Visa</span>
<span className="text-xs px-2.5 py-1 border border-gray-200 rounded-md bg-white text-gray-500 font-medium">Mastercard</span>
</div>
</label>
</div>

<button className="w-full mt-8 bg-gray-900 text-white py-4 rounded-2xl text-lg font-medium hover:bg-gray-800 transition-colors shadow-sm flex items-center justify-center gap-2 active:scale-[0.98]">
                            Confirm plan
                        </button>
</div>
</div>
</aside>
</div>
</main>

    </>
  );
}
