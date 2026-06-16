import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
}
},
animation: {
'spin-slow': 'spin 12s linear infinite',
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
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<button className="md:hidden p-2 -ml-2 text-stone-600">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<a className="text-lg font-semibold tracking-tighter uppercase z-50" href="#">Lumina.</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#shop">Shop</a>
<a className="hover:text-stone-900 transition-colors" href="#science">Science</a>
<a className="hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="hover:text-stone-900 transition-colors" href="#journal">Journal</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex text-stone-500 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="relative group flex items-center gap-2 text-stone-900">
<span className="hidden md:block text-xs font-medium mr-1">Cart (0)</span>
<iconify-icon icon="solar:bag-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="pt-24 pb-20">

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="shop">
<div className="grid lg:grid-cols-2 gap-12 items-start">

<div className="relative group lg:sticky lg:top-32">
<div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/60 relative">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100/50 via-stone-100/20 to-transparent opacity-60"></div>

<img alt="Lumina Face Oil" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-white/50 rounded-full text-xs font-medium text-stone-600 uppercase tracking-wide">Best Seller</span>
<span className="px-3 py-1 bg-white/60 backdrop-blur-sm border border-white/50 rounded-full text-xs font-medium text-stone-600 uppercase tracking-wide">Organic</span>
</div>
</div>

<div className="flex gap-4 mt-4 overflow-x-auto pb-2">
<button className="w-20 h-20 rounded-lg border border-stone-300 overflow-hidden flex-shrink-0 opacity-100 ring-1 ring-stone-900 ring-offset-2 ring-offset-stone-50">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</button>
<button className="w-20 h-20 rounded-lg border border-stone-200 overflow-hidden flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</button>
<button className="w-20 h-20 rounded-lg border border-stone-200 overflow-hidden flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1615396899839-c99c121888b0?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</button>
</div>
</div>

<div className="flex flex-col gap-8 pt-4">

<div className="border-b border-stone-200 pb-8">
<div className="flex justify-between items-start mb-2">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">The Repair Oil.</h1>
<div className="flex flex-col items-end">
<span className="text-xl font-medium text-stone-900">$48.00</span>
<div className="flex items-center gap-1 mt-1 text-stone-500">
<iconify-icon className="text-orange-400" icon="solar:star-bold" width="14"></iconify-icon>
<span className="text-xs font-medium">4.9 (128)</span>
</div>
</div>
</div>
<p className="text-lg text-stone-500 font-light leading-relaxed max-w-md">
                            A concentrated botanical elixir designed to restore luminosity. Rich in antioxidants and essential fatty acids for deep hydration.
                        </p>
</div>

<div className="space-y-4">

<label className="flex items-center cursor-pointer hover:border-stone-400 transition-colors group border-stone-300 border rounded-xl pt-4 pr-4 pb-4 pl-4 relative">
<input checked="" className="peer sr-only" name="purchase_type" type="radio"/>
<div className="w-5 h-5 rounded-full border border-stone-300 peer-checked:border-stone-900 peer-checked:bg-stone-900 flex items-center justify-center transition-colors mr-4">
<div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
</div>
<div className="flex-1">
<div className="flex justify-between">
<span className="font-medium text-stone-900">One-time purchase</span>
<span className="font-medium text-stone-900">$48.00</span>
</div>
</div>
<div className="absolute -inset-px rounded-xl border-2 border-transparent peer-checked:border-stone-900 pointer-events-none"></div>
</label>

<label className="relative flex items-center p-4 border border-stone-200 rounded-xl cursor-pointer hover:border-stone-300 transition-colors bg-stone-50/50">
<input className="peer sr-only" name="purchase_type" type="radio"/>
<div className="w-5 h-5 rounded-full border border-stone-300 peer-checked:border-stone-900 peer-checked:bg-stone-900 flex items-center justify-center transition-colors mr-4">
<div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 peer-checked:opacity-100"></div>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="font-medium text-stone-900">Subscribe &amp; Save 15%</span>
<span className="font-medium text-stone-900">$40.80</span>
</div>
<span className="text-xs text-stone-500 mt-0.5 block">Cancel or pause anytime.</span>
</div>
<div className="absolute -inset-px rounded-xl border-2 border-transparent peer-checked:border-stone-900 pointer-events-none"></div>
</label>
</div>

<div className="flex gap-4 pt-4 border-t border-stone-200">

<div className="flex items-center h-12 border border-stone-200 rounded-lg w-32 px-2 bg-white">
<button className="w-8 h-full flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:minus-linear" width="16"></iconify-icon>
</button>
<input className="w-full text-center text-sm font-medium text-stone-900 bg-transparent focus:outline-none" type="number" value="1"/>
<button className="w-8 h-full flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
</div>

<button className="flex-1 h-12 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-all duration-200 flex items-center justify-center gap-2 text-sm font-medium shadow-lg shadow-stone-900/10 active:scale-[0.98]">
<span>Add to Bag</span>
<span className="w-px h-3 bg-white/20 mx-1"></span>
<span>$48.00</span>
</button>
</div>

<div className="mt-8 space-y-0 divide-y divide-stone-200">
<details className="group py-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-stone-800 list-none">
<span>Key Ingredients</span>
<iconify-icon className="text-stone-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-stone-500 text-sm leading-relaxed pt-3 pb-1">
<p>Squalane (Olive derived), Rosa Canina (Rosehip) Fruit Oil, Simmondsia Chinensis (Jojoba) Seed Oil, Tocopherol (Vitamin E).</p>
</div>
</details>
<details className="group py-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-stone-800 list-none">
<span>How to Use</span>
<iconify-icon className="text-stone-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-stone-500 text-sm leading-relaxed pt-3 pb-1">
<p>Apply 3-5 drops to clean, damp skin morning and night. Massage gently in upward circular motions until absorbed.</p>
</div>
</details>
<details className="group py-4 cursor-pointer">
<summary className="flex justify-between items-center font-medium text-sm text-stone-800 list-none">
<span>Shipping &amp; Returns</span>
<iconify-icon className="text-stone-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="text-stone-500 text-sm leading-relaxed pt-3 pb-1">
<p>Free shipping on orders over $100. Returns accepted within 30 days of purchase for a full refund.</p>
</div>
</details>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-stone-200 mt-24" id="science">
<div className="mb-12 max-w-2xl">
<h2 className="text-3xl font-medium tracking-tight text-stone-900">Formulated without compromise.</h2>
<p className="mt-4 text-stone-500">We prioritize bioavailability and purity. Our oils are cold-pressed to retain maximum potency.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 mb-6">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">100% Organic</h3>
<p className="text-sm text-stone-500 leading-relaxed">Sourced from certified organic farms ensuring no pesticides or synthetic fertilizers touch the ingredients.</p>
</div>

<div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
<iconify-icon icon="solar:test-tube-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Clinically Tested</h3>
<p className="text-sm text-stone-500 leading-relaxed">Dermatologist tested and approved for sensitive skin. Non-comedogenic formula.</p>
</div>

<div className="p-8 bg-white border border-stone-200 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Cruelty Free</h3>
<p className="text-sm text-stone-500 leading-relaxed">Leaping Bunny certified. We never test on animals and neither do our suppliers.</p>
</div>
</div>
</section>

<section className="border-y border-stone-200 bg-white overflow-hidden py-10">
<div className="flex items-center gap-16 whitespace-nowrap animate-[marquee_20s_linear_infinite] opacity-50 grayscale">
<span className="text-2xl font-serif font-medium tracking-tight">VOGUE</span>
<span className="text-2xl font-serif font-medium tracking-tight">Kinfolk</span>
<span className="text-2xl font-serif font-medium tracking-tight">Allure</span>
<span className="text-2xl font-serif font-medium tracking-tight">Harper's BAZAAR</span>
<span className="text-2xl font-serif font-medium tracking-tight">ELLE</span>
<span className="text-2xl font-serif font-medium tracking-tight">Vanity Fair</span>

<span className="text-2xl font-serif font-medium tracking-tight">VOGUE</span>
<span className="text-2xl font-serif font-medium tracking-tight">Kinfolk</span>
<span className="text-2xl font-serif font-medium tracking-tight">Allure</span>
</div>
</section>

<section className="relative h-[600px] w-full mt-24">
<img alt="Skincare Ritual" className="w-full h-full object-cover grayscale-[20%] contrast-[0.95]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-stone-900/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 max-w-lg mx-4 rounded-3xl text-center shadow-2xl">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">The Evening Ritual</h2>
<p className="text-stone-100 mb-8 font-light">Transform your routine into a moment of mindfulness. Breath in deeply, apply gently.</p>
<a className="inline-flex items-center justify-center h-10 px-6 bg-white text-stone-900 rounded-full text-sm font-medium hover:bg-stone-100 transition-colors" href="#">
                        Read the Journal
                    </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 flex flex-col items-center text-center">
<iconify-icon className="text-stone-400 mb-6" icon="solar:letter-linear" width="32"></iconify-icon>
<h2 className="text-2xl font-medium tracking-tight text-stone-900">Join the inner circle</h2>
<p className="mt-2 text-stone-500 max-w-md">Receive access to early drops, skincare guides, and 10% off your first order.</p>
<form className="mt-8 flex w-full max-w-sm gap-2">
<input className="flex-1 h-10 px-4 bg-white border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-stone-400 transition-colors placeholder:text-stone-300" placeholder="email@example.com" type="email"/>
<button className="h-10 px-6 bg-stone-900 text-white text-sm font-medium rounded-lg hover:bg-stone-800 transition-colors" type="submit">
                    Subscribe
                </button>
</form>
</section>
</main>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div>
<h4 className="text-sm font-medium text-stone-900 mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Sets</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-stone-900 mb-4">Support</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<span className="text-lg font-semibold tracking-tighter uppercase">Lumina.</span>
<p className="mt-2 text-xs text-stone-400">
                        © 2024 Lumina Skincare Inc.<br/>
                        Designed with purity in mind.
                    </p>
<div className="flex gap-4 mt-4 text-stone-400">
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-stone-900 transition-colors" href="#"><iconify-icon icon="solar:brand-tiktok-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 text-xs text-stone-400">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-stone-600" href="#">Privacy Policy</a>
<a className="hover:text-stone-600" href="#">Terms of Service</a>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
<span>Systems Operational</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
