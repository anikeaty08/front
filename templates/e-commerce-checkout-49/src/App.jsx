import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#2563eb',
'neutral-white': '#ffffff',
'neutral-light': '#f9fafb',
'neutral-medium': '#e5e7eb',
'neutral-dark': '#374151',
'error-red': '#dc2626'
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="bg-neutral-white border-b border-neutral-medium">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<span className="text-lg font-medium text-neutral-dark">LuxeStore</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-md">
<i className="w-4 h-4 text-primary" data-lucide="lock" strokeWidth="1.5"></i>
<span className="text-sm font-normal text-primary">Secure Checkout</span>
</div>
</div>
</header>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">

<div className="mb-8">
<h1 className="text-3xl font-medium text-neutral-dark mb-2 tracking-tight">Checkout</h1>
<p className="text-base text-neutral-dark">Complete your purchase securely.</p>
</div>

<div className="mb-8">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-neutral-dark rounded-full flex items-center justify-center">
<span className="text-xs font-normal text-white">1</span>
</div>
<h2 className="text-xl font-medium text-neutral-dark">Contact Information</h2>
</div>
<a className="text-base font-normal text-primary hover:text-blue-700" href="#">Log in</a>
</div>
<div className="space-y-4">
<div>
<label className="block text-sm font-normal text-neutral-dark mb-2">Email Address</label>
<input className="w-full px-3.5 py-2.5 border border-neutral-medium rounded-md text-base text-neutral-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white shadow-sm" placeholder="you@example.com" type="email"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-normal text-neutral-dark mb-2">First Name</label>
<input className="w-full px-3.5 py-2.5 border border-neutral-medium rounded-md text-base text-neutral-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white shadow-sm" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-sm font-normal text-neutral-dark mb-2">Last Name</label>
<input className="w-full px-3.5 py-2.5 border border-neutral-medium rounded-md text-base text-neutral-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white shadow-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-normal text-neutral-dark mb-2">Phone Number</label>
<div className="relative">
<i className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" data-lucide="phone" strokeWidth="1.5"></i>
<input className="w-full pl-10 pr-3.5 py-2.5 border border-neutral-medium rounded-md text-base text-neutral-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white shadow-sm" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<p className="text-sm text-neutral-dark mt-2">Used for shipping updates.</p>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-6 h-6 bg-neutral-dark rounded-full flex items-center justify-center">
<span className="text-xs font-normal text-white">2</span>
</div>
<h2 className="text-xl font-medium text-neutral-dark">Payment Method</h2>
</div>
<div className="space-y-4">

<div className="border-2 border-primary rounded-lg p-5 bg-white shadow-sm">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center">
<div className="w-2.5 h-2.5 bg-primary rounded-full"></div>
</div>
<span className="text-base font-normal text-neutral-dark">Credit or Debit Card</span>
</div>
<div className="flex items-center gap-1.5">
<i className="w-5 h-5 text-gray-400" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
</div>
<div className="space-y-4">
<div>
<input className="w-full px-3.5 py-2.5 border border-neutral-medium rounded-md text-base text-neutral-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm" placeholder="Card number" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<input className="px-3.5 py-2.5 border border-neutral-medium rounded-md text-base text-neutral-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm" placeholder="MM / YY" type="text"/>
<input className="px-3.5 py-2.5 border border-neutral-medium rounded-md text-base text-neutral-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm" placeholder="CVC" type="text"/>
</div>
<div className="flex items-center gap-2 text-sm text-neutral-dark pt-1">
<i className="w-3.5 h-3.5" data-lucide="lock" strokeWidth="1.5"></i>
<span>Your transaction is secured with SSL encryption.</span>
</div>
</div>
</div>

<label className="border border-neutral-medium rounded-lg p-4 bg-white flex items-center justify-between cursor-pointer hover:border-gray-400 transition-colors shadow-sm">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-neutral-medium"></div>
<span className="text-base font-normal text-neutral-dark">Apple Pay</span>
</div>
<div className="w-8 h-8 bg-neutral-dark rounded flex items-center justify-center">
<i className="w-5 h-5 text-white" data-lucide="apple" strokeWidth="1.5"></i>
</div>
</label>

<label className="border border-neutral-medium rounded-lg p-4 bg-white flex items-center justify-between cursor-pointer hover:border-gray-400 transition-colors shadow-sm">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-neutral-medium"></div>
<span className="text-base font-normal text-neutral-dark">Google Pay</span>
</div>
<div className="w-8 h-8 bg-neutral-dark rounded flex items-center justify-center text-white text-xs font-medium">
                                G
                            </div>
</label>

<div className="grid sm:grid-cols-2 gap-4">
<label className="border border-neutral-medium rounded-lg p-4 bg-white cursor-pointer hover:border-gray-400 transition-colors shadow-sm">
<div className="flex items-center gap-3 mb-1">
<div className="w-5 h-5 rounded-full border-2 border-neutral-medium"></div>
<span className="text-base font-normal text-neutral-dark">Tabby</span>
</div>
<p className="text-sm text-neutral-dark ml-8">Split in 4 payments. No interest.</p>
</label>
<label className="border border-neutral-medium rounded-lg p-4 bg-white cursor-pointer hover:border-gray-400 transition-colors shadow-sm">
<div className="flex items-center gap-3 mb-1">
<div className="w-5 h-5 rounded-full border-2 border-neutral-medium"></div>
<span className="text-base font-normal text-neutral-dark">Tamara</span>
</div>
<p className="text-sm text-neutral-dark ml-8">Split in 3 payments.</p>
</label>
</div>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<button className="flex items-center gap-2 text-base font-normal text-neutral-dark hover:text-gray-900">
<i className="w-4 h-4" data-lucide="arrow-left" strokeWidth="1.5"></i>
                        Back to Cart
                    </button>
<button className="w-full sm:w-auto px-6 py-2.5 bg-primary hover:bg-blue-700 text-white font-normal rounded-lg transition-colors text-base shadow-sm">
                        Pay Now <span className="ml-1">$384.00</span>
</button>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-white rounded-lg border border-neutral-medium p-6 sticky top-8 shadow-sm">
<h2 className="text-xl font-medium text-neutral-dark mb-6">Order Summary</h2>

<div className="space-y-4 mb-6">

<div className="flex gap-4">
<div className="relative w-16 h-16 bg-gray-100 rounded-md flex-shrink-0">
<img alt="Product" className="w-full h-full object-cover rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-neutral-dark text-white text-xs font-normal rounded flex items-center justify-center">1</div>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-base font-normal text-neutral-dark truncate">Premium L...</h3>
<p className="text-sm text-neutral-dark">Color: Brown ...</p>
</div>
<div className="text-base font-normal text-neutral-dark">$240.00</div>
</div>

<div className="flex gap-4">
<div className="relative w-16 h-16 bg-gray-900 rounded-md flex-shrink-0">
<div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-neutral-dark text-white text-xs font-normal rounded flex items-center justify-center">1</div>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-base font-normal text-neutral-dark truncate">Minimalist ...</h3>
<p className="text-sm text-neutral-dark">Color: Silver</p>
</div>
<div className="text-base font-normal text-neutral-dark">$119.00</div>
</div>

<div className="flex gap-4">
<div className="relative w-16 h-16 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center">
<span className="text-2xl text-gray-400">?</span>
<div className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-neutral-dark text-white text-xs font-normal rounded flex items-center justify-center">1</div>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-base font-normal text-neutral-dark truncate">Premium Co...</h3>
<p className="text-sm text-neutral-dark">Size: M, Color: ...</p>
</div>
<div className="text-base font-normal text-neutral-dark">$25.00</div>
</div>
</div>

<div className="flex gap-2 mb-6">
<input className="flex-1 px-3.5 py-2.5 border border-neutral-medium rounded-md text-base text-neutral-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm" placeholder="Discount code" type="text"/>
<button className="px-5 py-2.5 bg-neutral-light hover:bg-gray-200 text-neutral-dark font-normal rounded-lg text-base transition-colors shadow-sm">Apply</button>
</div>

<div className="space-y-4 pb-4 mb-4 border-b border-neutral-medium">
<div className="flex justify-between text-base text-neutral-dark">
<span>Subtotal</span>
<span className="font-normal">$384.00</span>
</div>
<div className="flex justify-between text-base text-neutral-dark">
<span>Shipping</span>
<span className="font-normal text-green-600">Free</span>
</div>
<div className="flex justify-between text-base text-neutral-dark">
<span>Tax (Estimated)</span>
<span className="font-normal">$0.00</span>
</div>
</div>

<div className="mb-6">
<div className="flex justify-between items-baseline mb-0.5">
<span className="text-base font-normal text-neutral-dark">Total</span>
<span className="text-xs text-neutral-dark">USD</span>
</div>
<div className="text-right">
<span className="text-3xl font-medium text-neutral-dark tracking-tight">$384.00</span>
</div>
</div>

<div className="flex items-center justify-center gap-4 pt-4 border-t border-neutral-medium">
<i className="w-5 h-5 text-gray-400" data-lucide="lock" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-gray-400" data-lucide="shield-check" strokeWidth="1.5"></i>
<i className="w-5 h-5 text-gray-400" data-lucide="truck" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>

<footer className="mt-16 pt-8 border-t border-neutral-medium text-center">
<p className="text-base text-neutral-dark mb-2">© 2024 LuxeStore Inc. All rights reserved.</p>
<div className="flex items-center justify-center gap-6 text-base">
<a className="text-neutral-dark hover:text-gray-900" href="#">Privacy Policy</a>
<a className="text-neutral-dark hover:text-gray-900" href="#">Terms of Service</a>
</div>
</footer>
</main>


    </>
  );
}
