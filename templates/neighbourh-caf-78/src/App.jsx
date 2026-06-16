import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter uppercase" href="#">Dee.</a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#menu">Menu</a>
<a className="hover:text-neutral-900 transition-colors" href="#story">Story</a>
<a className="hover:text-neutral-900 transition-colors" href="#community">Community</a>
<a className="hover:text-neutral-900 transition-colors" href="#visit">Visit</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<a className="text-sm font-medium bg-neutral-900 text-white px-4 py-2 rounded-full hover:bg-neutral-800 transition-colors" href="#">
                    Order Ahead
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.1] text-neutral-900">
                    A neighbourhood café, made to feel like home.
                </h1>
<p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed max-w-lg">
                    Thoughtfully brewed coffee, fresh seasonal food, and a calm place to slow down — whether you’re starting your day, meeting friends, or staying a while.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex justify-center items-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all" href="#menu">
                        View Menu
                    </a>
<a className="inline-flex justify-center items-center px-6 py-3 bg-white text-neutral-900 border border-neutral-200 text-sm font-medium rounded-full hover:bg-neutral-50 transition-all" href="#">
                        Order Ahead
                    </a>
</div>
</div>
<div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Calm cafe interior" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-100" id="menu">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Food &amp; drink, done simply — and done well.</h2>
<p className="text-neutral-500 font-light text-lg">Our menu is built around quality ingredients, careful sourcing, and flavours that feel comforting rather than complicated.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center mb-6 text-neutral-900">
<iconify-icon icon="solar:cup-hot-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Coffee &amp; Espresso</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Carefully sourced beans, roasted with balance and clarity.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center mb-6 text-neutral-900">
<iconify-icon icon="solar:chef-hat-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Brunch &amp; Lunch</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Fresh, seasonal dishes designed for any time of day.</p>
</div>

<div className="group bg-white p-8 rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all duration-300">
<div className="w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center mb-6 text-neutral-900">
<iconify-icon icon="solar:donut-bitten-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2">Pastries &amp; Bakes</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed">Made with care, perfect with coffee or to take away.</p>
</div>
</div>
<div className="mt-12">
<a className="inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors group" href="#">
                    Explore Food &amp; Drink
                    <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6" id="story">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Pouring coffee" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1514516345957-556ca7d90a29?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 md:order-2 space-y-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Welcome to Dee.</h2>
<div className="space-y-6 text-neutral-500 font-light text-lg leading-relaxed">
<p>Dee is a neighbourhood café and café-restaurant created as a second home for the local community. A place to return to — not rush through.</p>
<p>We believe great coffee, fresh food, and good design should feel effortless. Everything we do is guided by calm choices, thoughtful details, and respect for the people and place around us.</p>
</div>
<a className="inline-flex items-center px-6 py-3 bg-white text-neutral-900 border border-neutral-200 text-sm font-medium rounded-full hover:bg-neutral-50 transition-all" href="#">
                    Our Story
                </a>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-y border-neutral-200/50">
<div className="max-w-3xl mx-auto px-6 text-center space-y-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white border border-neutral-200 text-green-700 mb-4">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900">Thoughtful choices, quietly made.</h2>
<p className="text-lg text-neutral-500 font-light leading-relaxed">
                From our ingredients to our packaging, we aim to make responsible decisions that feel natural, not performative. Sustainability at Dee is about long-term care — for our suppliers, our neighbourhood, and the environment.
            </p>
<a className="inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900" href="#">
                Our Choices
            </a>
</div>
</section>

<section className="py-24 px-6" id="community">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">What’s on at Dee</h2>
<p className="text-neutral-500 font-light">Dee is more than a café — it’s a place for connection. From small events to local collaborations, there’s always something quietly happening.</p>
</div>
<a className="hidden md:inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors group" href="#">
                    See What's On
                    <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white border border-neutral-200 rounded-xl overflow-hidden group hover:border-neutral-300 transition-all">
<div className="h-48 bg-neutral-100 overflow-hidden">
<img alt="Brunch" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 block">Every Weekend</span>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Weekend brunch specials</h3>
<p className="text-sm text-neutral-500 font-light">Seasonal favorites available only on Sat &amp; Sun.</p>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl overflow-hidden group hover:border-neutral-300 transition-all">
<div className="h-48 bg-neutral-100 overflow-hidden">
<img alt="Art" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 block">This Month</span>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Local art exhibitions</h3>
<p className="text-sm text-neutral-500 font-light">Featuring photography from our talented neighbours.</p>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-xl overflow-hidden group hover:border-neutral-300 transition-all">
<div className="h-48 bg-neutral-100 overflow-hidden">
<img alt="Community" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-2 block">Workshops</span>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Community gatherings</h3>
<p className="text-sm text-neutral-500 font-light">Coffee tasting and brewing basics workshops.</p>
</div>
</div>
</div>
<div className="mt-8 md:hidden">
<a className="inline-flex items-center text-sm font-medium text-neutral-900 hover:text-neutral-600 transition-colors" href="#">
                    See What's On
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Inside Dee</h2>
<p className="text-neutral-400 font-light text-lg">A calm, welcoming space designed for conversation, focus, and moments in between.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="rounded-lg overflow-hidden h-64 md:h-80 col-span-2 md:col-span-2 bg-neutral-800">
<img className="w-full h-full object-cover hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg overflow-hidden h-64 md:h-80 col-span-1 bg-neutral-800">
<img className="w-full h-full object-cover hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg overflow-hidden h-64 md:h-80 col-span-1 bg-neutral-800">
<img className="w-full h-full object-cover hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-neutral-200">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-16 text-center">Loved by our neighbours</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
<div className="space-y-4">
<iconify-icon className="text-neutral-300" icon="solar:quote-up-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-lg text-neutral-900 font-light leading-relaxed">“A beautiful space with coffee that’s genuinely exceptional.”</p>
<div className="h-px w-12 bg-neutral-200"></div>
</div>
<div className="space-y-4">
<iconify-icon className="text-neutral-300" icon="solar:quote-up-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-lg text-neutral-900 font-light leading-relaxed">“A calm place to work, meet friends, or just breathe for a moment.”</p>
<div className="h-px w-12 bg-neutral-200"></div>
</div>
<div className="space-y-4">
<iconify-icon className="text-neutral-300" icon="solar:quote-up-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
<p className="text-lg text-neutral-900 font-light leading-relaxed">“Feels like a local café that’s been here forever — in the best way.”</p>
<div className="h-px w-12 bg-neutral-200"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-50" id="visit">
<div className="max-w-4xl mx-auto bg-white rounded-2xl border border-neutral-200 p-8 md:p-12 shadow-sm">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">Visit Dee</h2>
<p className="text-neutral-500 font-light">We can't wait to see you.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-8">
<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">Address</h4>
<p className="text-neutral-900 font-light">128 High Street,<br/>North District, ND4 2QT</p>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">Hours</h4>
<ul className="text-neutral-900 font-light space-y-1">
<li className="flex justify-between max-w-[200px]"><span>Mon - Fri</span> <span>7am — 6pm</span></li>
<li className="flex justify-between max-w-[200px]"><span>Sat - Sun</span> <span>8am — 5pm</span></li>
</ul>
</div>
</div>
<div className="space-y-8">
<div>
<h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-3">Good to know</h4>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-neutral-700 font-light text-sm">
<iconify-icon icon="solar:wheelchair-linear" width="18"></iconify-icon>
                                Wheelchair accessible
                            </li>
<li className="flex items-center gap-3 text-neutral-700 font-light text-sm">
<iconify-icon icon="solar:paw-linear" width="18"></iconify-icon>
                                Dog-friendly
                            </li>
<li className="flex items-center gap-3 text-neutral-700 font-light text-sm">
<iconify-icon icon="solar:bicycle-linear" width="18"></iconify-icon>
                                Bike racks available
                            </li>
<li className="flex items-center gap-3 text-neutral-700 font-light text-sm">
<iconify-icon icon="solar:wifi-square-linear" width="18"></iconify-icon>
                                Free Wi-Fi
                            </li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex justify-center items-center px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-all w-full sm:w-auto">
                    Find Us
                </button>
<button className="inline-flex justify-center items-center px-6 py-3 bg-white text-neutral-900 border border-neutral-200 text-sm font-medium rounded-full hover:bg-neutral-50 transition-all w-full sm:w-auto">
                    Contact Us
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-semibold tracking-tighter uppercase block mb-1">Dee.</span>
<span className="text-xs text-neutral-400">Made with care for our neighbourhood.</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500 font-medium">
<a className="hover:text-neutral-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Email</a>
</div>
</div>

<div className="hidden">
<p>Looking for something?</p>
<p>Order now, pick up when it suits you.</p>
<p>Dietary options clearly marked.</p>
</div>
</footer>

    </>
  );
}
