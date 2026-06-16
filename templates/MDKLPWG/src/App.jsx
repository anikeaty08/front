import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Icons
      lucide.createIcons({ attrs: { "stroke-width": 1.5 } });

      // Mobile menu toggle
      const toggle = document.getElementById('mobile-toggle');
      const menu = document.getElementById('mobile-menu');
      toggle?.addEventListener('click', () => {
        menu.classList.toggle('hidden');
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/spaceparticlesanimation-UGnU6SB7nUK6sFI6N5WzasEx" width="100%"></iframe></div>

<div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
<div className="absolute -top-16 -left-24 h-[42rem] w-[42rem] rounded-full bg-[#7C3AED]/20 blur-[110px] opacity-70 animate-pulse"></div>
<div className="absolute -bottom-24 -right-24 h-[40rem] w-[40rem] rounded-full bg-[#00E5A8]/10 blur-[120px] opacity-70"></div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[22rem] w-[22rem] rounded-full bg-[#3B82F6]/10 blur-[90px] opacity-70"></div>
</div>

<div className="relative z-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-3 mb-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-2 flex items-center justify-between text-xs sm:text-sm">
<div className="flex items-center gap-2">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<p className="text-white/80">Free delivery for your first 3 orders this week.</p>
</div>
<a className="inline-flex items-center gap-2 text-white/80 hover:text-white transition" href="#restaurants">
            Browse restaurants
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B0F1A]/70 backdrop-blur-xl">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<a className="inline-flex items-center gap-3 group" href="#">
<div className="h-7 w-7 rounded-md bg-white/10 ring-1 ring-white/15 grid place-items-center transition group-hover:ring-white/25">
<span className="text-[11px] font-semibold tracking-tight">SB</span>
</div>
<span className="text-sm sm:text-base font-semibold tracking-tight text-white">SwiftBite</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-white/70 hover:text-white transition" href="#features">Features</a>
<a className="text-white/70 hover:text-white transition" href="#restaurants">Restaurants</a>
<a className="text-white/70 hover:text-white transition" href="#tracker">Tracking</a>
<a className="text-white/70 hover:text-white transition" href="#testimonials">Stories</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium bg-white/0 hover:bg-white/10 ring-1 ring-white/15 hover:ring-white/25 transition">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              Support
            </button>
<button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-white text-black hover:opacity-90 transition">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
              Order now
            </button>
</div>
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-white/15 hover:ring-white/25 hover:bg-white/10 transition" id="mobile-toggle">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-white/10" id="mobile-menu">
<div className="px-4 py-4 space-y-2 text-sm">
<a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="#features">Features</a>
<a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="#restaurants">Restaurants</a>
<a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="#tracker">Tracking</a>
<a className="block rounded-lg px-3 py-2 hover:bg-white/10" href="#testimonials">Stories</a>
<div className="pt-3 flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium bg-white/0 hover:bg-white/10 ring-1 ring-white/15 hover:ring-white/25 transition w-full justify-center">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
              Support
            </button>
<button className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium bg-white text-black hover:opacity-90 transition w-full justify-center">
<svg className="lucide lucide-shopping-bag w-4 h-4" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
              Order
            </button>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-10 sm:pb-16 lg:pb-24">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-3 py-1.5 text-xs text-white/80">
<svg className="lucide lucide-timer w-4 h-4" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
              Avg. delivery under 25 minutes
            </div>
<h1 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight"> Delivered faster than you can say “I’m hungry.”</h1>
<p className="text-white/70 text-base sm:text-lg leading-relaxed">
              From iconic local spots to trending kitchens—discover, order, and track in real-time. No calls, no queues, just great food.
            </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<div className="inline-flex rounded-xl bg-white/5 ring-1 ring-white/15 p-1.5 w-full sm:w-auto">

<label className="relative flex-1">
<input checked="" className="peer sr-only" name="mode" type="radio" value="delivery"/>
<div className="cursor-pointer select-none rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition peer-checked:bg-white peer-checked:text-black">
                    Delivery
                  </div>
</label>
<label className="relative flex-1">
<input className="peer sr-only" name="mode" type="radio" value="pickup"/>
<div className="cursor-pointer select-none rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition peer-checked:bg-white peer-checked:text-black">
                    Pickup
                  </div>
</label>
</div>
<div className="flex-1 sm:flex-none grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="relative">
<svg className="lucide lucide-map-pin w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<input className="w-full rounded-lg bg-white/5 ring-1 ring-white/15 placeholder:text-white/40 text-white px-9 py-2.5 outline-none focus:ring-white/30 transition" placeholder="Enter your address" type="text"/>
</div>
<div className="relative sm:col-span-1">
<svg className="lucide lucide-utensils w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/50" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<input className="w-full rounded-lg bg-white/5 ring-1 ring-white/15 placeholder:text-white/40 text-white px-9 py-2.5 outline-none focus:ring-white/30 transition" placeholder="Cuisine" type="text"/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-white text-black hover:opacity-90 transition">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                  Search
                </button>
</div>
</div>

<div className="grid grid-cols-3 gap-4 pt-2">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-2xl font-semibold tracking-tight">2,100+</div>
<div className="text-xs text-white/60 mt-1">Partner restaurants</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-2xl font-semibold tracking-tight">4.9</div>
<div className="text-xs text-white/60 mt-1">App Store rating</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-4">
<div className="text-2xl font-semibold tracking-tight">25 min</div>
<div className="text-xs text-white/60 mt-1">Avg. delivery time</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-8 -right-6 h-44 w-44 bg-[#22D3EE]/20 blur-2xl rounded-full"></div>
<div className="absolute -bottom-10 -left-10 h-52 w-52 bg-[#22C55E]/20 blur-2xl rounded-full"></div>
<div className="relative grid gap-4">

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5 shadow-xl hover:-translate-y-0.5 transition">
<div className="flex items-center gap-3">
<img alt="Burger House" className="h-12 w-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="font-medium text-white">Burger House</p>
<span className="text-xs text-white/70 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.8
                      </span>
</div>
<p className="text-xs text-white/60">Burgers • Fast Food • $ • 15–25m</p>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2">
<img alt="Cheese Burger" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<p className="text-xs mt-2 text-white">Cheese Burger</p>
<div className="flex items-center justify-between mt-1.5">
<span className="text-[11px] text-white/70">$8.50</span>
<button className="h-7 w-7 grid place-items-center rounded-md bg-white text-black hover:opacity-90 transition">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2">
<img alt="Fresh Salad" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<p className="text-xs mt-2 text-white">Fresh Salad</p>
<div className="flex items-center justify-between mt-1.5">
<span className="text-[11px] text-white/70">$6.20</span>
<button className="h-7 w-7 grid place-items-center rounded-md bg-white text-black hover:opacity-90 transition">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2">
<img alt="Fries" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<p className="text-xs mt-2 text-white">Crispy Fries</p>
<div className="flex items-center justify-between mt-1.5">
<span className="text-[11px] text-white/70">$3.70</span>
<button className="h-7 w-7 grid place-items-center rounded-md bg-white text-black hover:opacity-90 transition">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5 shadow-xl hover:-translate-y-0.5 transition">
<div className="flex items-center gap-3">
<img alt="Sushi Co." className="h-12 w-12 rounded-lg object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="font-medium text-white">Sushi Co.</p>
<span className="text-xs text-white/70 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.9
                      </span>
</div>
<p className="text-xs text-white/60">Sushi • Japanese • $$ • 20–30m</p>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2">
<img alt="Nigiri" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<p className="text-xs mt-2 text-white">Nigiri Set</p>
<div className="flex items-center justify-between mt-1.5">
<span className="text-[11px] text-white/70">$12.90</span>
<button className="h-7 w-7 grid place-items-center rounded-md bg-white text-black hover:opacity-90 transition">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2">
<img alt="Sashimi" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<p className="text-xs mt-2 text-white">Salmon Sashimi</p>
<div className="flex items-center justify-between mt-1.5">
<span className="text-[11px] text-white/70">$10.40</span>
<button className="h-7 w-7 grid place-items-center rounded-md bg-white text-black hover:opacity-90 transition">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="rounded-lg bg-white/5 ring-1 ring-white/10 p-2">
<img alt="Miso" className="h-20 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<p className="text-xs mt-2 text-white">Miso Soup</p>
<div className="flex items-center justify-between mt-1.5">
<span className="text-[11px] text-white/70">$3.50</span>
<button className="h-7 w-7 grid place-items-center rounded-md bg-white text-black hover:opacity-90 transition">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-4 shadow-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-full bg-white/10 grid place-items-center ring-1 ring-white/15">
<svg className="lucide lucide-bike w-5 h-5" data-lucide="bike" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18.5" cy="17.5" r="3.5"></circle><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="15" cy="5" r="1"></circle><path d="M12 17.5V14l-3-3 4-3 2 3h2"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white">Courier is on the way</p>
<p className="text-xs text-white/60">Arriving in 12–18 minutes</p>
</div>
</div>
<button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md bg-white text-black hover:opacity-90 transition">
                    Track
                    <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="mt-3">
<div className="h-1.5 rounded-full bg-white/10">
<div className="h-1.5 rounded-full bg-white w-2/3"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 lg:py-20 border-t border-white/10" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Why order with us</h2>
<a className="text-sm inline-flex items-center gap-2 text-white/80 hover:text-white transition" href="#restaurants">
            Explore restaurants
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 transition">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 grid place-items-center mb-3">
<svg className="lucide lucide-map w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<p className="text-white font-medium">Live tracking</p>
<p className="text-sm text-white/70 mt-1.5">Track your courier on the map with minute-by-minute updates.</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 transition">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 grid place-items-center mb-3">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<p className="text-white font-medium">Curated menus</p>
<p className="text-sm text-white/70 mt-1.5">Order signature dishes from top-rated local restaurants.</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 transition">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 grid place-items-center mb-3">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-white font-medium">Safe &amp; reliable</p>
<p className="text-sm text-white/70 mt-1.5">Secure payments and vetted couriers for every order.</p>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 transition">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 grid place-items-center mb-3">
<svg className="lucide lucide-badge-percent w-5 h-5" data-lucide="badge-percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg>
</div>
<p className="text-white font-medium">No surge pricing</p>
<p className="text-sm text-white/70 mt-1.5">Transparent fees. What you see is what you pay. Always.</p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 lg:py-20 border-t border-white/10" id="restaurants">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-start md:items-center justify-between gap-6 flex-col md:flex-row">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Popular near you</h2>
<p className="text-sm text-white/70 mt-1">Hand-picked places delivering to your area now.</p>
</div>
<div className="flex flex-wrap items-center gap-2">

<button className="px-3 py-1.5 rounded-full text-sm bg-white text-black hover:opacity-90 transition">All</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-white/5 ring-1 ring-white/15 hover:bg-white/10 transition">Burgers</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-white/5 ring-1 ring-white/15 hover:bg-white/10 transition">Sushi</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-white/5 ring-1 ring-white/15 hover:bg-white/10 transition">Italian</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-white/5 ring-1 ring-white/15 hover:bg-white/10 transition">Vegan</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-white/5 ring-1 ring-white/15 hover:bg-white/10 transition">Desserts</button>
<button className="px-3 py-1.5 rounded-full text-sm bg-white/5 ring-1 ring-white/15 hover:bg-white/10 transition">Breakfast</button>
</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<a className="group rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col" href="#">
<div className="relative">
<img alt="Pizza Palace" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 px-2 py-1 rounded-md text-[11px] bg-black/60 backdrop-blur ring-1 ring-white/15">20–30m</div>
<button className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-white text-black grid place-items-center hover:opacity-90 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between">
<p className="font-medium text-white group-hover:opacity-90">Pizza Palace</p>
<span className="text-xs text-white/70 inline-flex items-center gap-1">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.7
                </span>
</div>
<p className="text-xs text-white/60 mt-1">Pizza • Italian • $$</p>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-white/70">$2.99 delivery</div>
<button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
                  Open menu
                  <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col" href="#">
<div className="relative">
<img alt="Green Bowl" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 px-2 py-1 rounded-md text-[11px] bg-black/60 backdrop-blur ring-1 ring-white/15">10–20m</div>
<button className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-white text-black grid place-items-center hover:opacity-90 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between">
<p className="font-medium text-white group-hover:opacity-90">Green Bowl</p>
<span className="text-xs text-white/70 inline-flex items-center gap-1"><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.8</span>
</div>
<p className="text-xs text-white/60 mt-1">Salads • Vegan • $</p>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-white/70">Free delivery</div>
<button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
                  Open menu
                  <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col" href="#">
<div className="relative">
<img alt="Ramen Katana" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 px-2 py-1 rounded-md text-[11px] bg-black/60 backdrop-blur ring-1 ring-white/15">25–35m</div>
<button className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-white text-black grid place-items-center hover:opacity-90 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between">
<p className="font-medium text-white group-hover:opacity-90">Ramen Katana</p>
<span className="text-xs text-white/70 inline-flex items-center gap-1"><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.9</span>
</div>
<p className="text-xs text-white/60 mt-1">Ramen • Japanese • $$</p>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-white/70">$1.49 delivery</div>
<button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
                  Open menu
                  <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col" href="#">
<div className="relative">
<img alt="Street Tacos" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 px-2 py-1 rounded-md text-[11px] bg-black/60 backdrop-blur ring-1 ring-white/15">15–25m</div>
<button className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-white text-black grid place-items-center hover:opacity-90 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between">
<p className="font-medium text-white group-hover:opacity-90">Street Tacos</p>
<span className="text-xs text-white/70 inline-flex items-center gap-1"><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.6</span>
</div>
<p className="text-xs text-white/60 mt-1">Tacos • Mexican • $</p>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-white/70">Free delivery</div>
<button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
                  Open menu
                  <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col" href="#">
<div className="relative">
<img alt="Smash &amp; Co" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-2 left-2 px-2 py-1 rounded-md text-[11px] bg-black/60 backdrop-blur ring-1 ring-white/15">10–15m</div>
<button className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-white text-black grid place-items-center hover:opacity-90 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between">
<p className="font-medium text-white group-hover:opacity-90">Smash &amp; Co</p>
<span className="text-xs text-white/70 inline-flex items-center gap-1"><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.8</span>
</div>
<p className="text-xs text-white/60 mt-1">Burgers • Fast Food • $</p>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-white/70">$1.99 delivery</div>
<button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
                  Open menu
                  <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col" href="#">
<div className="relative">
<img alt="Pasta Fresca" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1540914124281-342587941389?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 px-2 py-1 rounded-md text-[11px] bg-black/60 backdrop-blur ring-1 ring-white/15">18–25m</div>
<button className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-white text-black grid place-items-center hover:opacity-90 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between">
<p className="font-medium text-white group-hover:opacity-90">Pasta Fresca</p>
<span className="text-xs text-white/70 inline-flex items-center gap-1"><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.7</span>
</div>
<p className="text-xs text-white/60 mt-1">Pasta • Italian • $$</p>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-white/70">$1.49 delivery</div>
<button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
                  Open menu
                  <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col" href="#">
<div className="relative">
<img alt="Morning &amp; Co" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1497888329096-51c27beff665?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 px-2 py-1 rounded-md text-[11px] bg-black/60 backdrop-blur ring-1 ring-white/15">8–12m</div>
<button className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-white text-black grid place-items-center hover:opacity-90 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between">
<p className="font-medium text-white group-hover:opacity-90">Morning &amp; Co</p>
<span className="text-xs text-white/70 inline-flex items-center gap-1"><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.5</span>
</div>
<p className="text-xs text-white/60 mt-1">Breakfast • Coffee • $</p>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-white/70">Free delivery</div>
<button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
                  Open menu
                  <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</a>
<a className="group rounded-xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition flex flex-col" href="#">
<div className="relative">
<img alt="Sweet Studio" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-2 left-2 px-2 py-1 rounded-md text-[11px] bg-black/60 backdrop-blur ring-1 ring-white/15">20–25m</div>
<button className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-white text-black grid place-items-center hover:opacity-90 transition">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-4 flex-1 flex flex-col">
<div className="flex items-center justify-between">
<p className="font-medium text-white group-hover:opacity-90">Sweet Studio</p>
<span className="text-xs text-white/70 inline-flex items-center gap-1"><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.9</span>
</div>
<p className="text-xs text-white/60 mt-1">Desserts • Bakery • $</p>
<div className="mt-3 flex items-center justify-between">
<div className="text-xs text-white/70">$0.99 delivery</div>
<button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition">
                  Open menu
                  <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</a>
</div>

<div className="mt-8 flex items-center justify-center gap-2">
<button className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition grid place-items-center">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<div className="inline-flex items-center gap-1">
<span className="h-2 w-6 rounded-full bg-white"></span>
<span className="h-2 w-2 rounded-full bg-white/30"></span>
<span className="h-2 w-2 rounded-full bg-white/30"></span>
<span className="h-2 w-2 rounded-full bg-white/30"></span>
</div>
<button className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition grid place-items-center">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-12 sm:py-16 lg:py-20 border-t border-white/10" id="tracker">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
<div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 sm:p-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-white/10 ring-1 ring-white/15 grid place-items-center">
<svg className="lucide lucide-pizza w-5 h-5" data-lucide="pizza" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14-1 1"></path><path d="m13.75 18.25-1.25 1.42"></path><path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"></path><path d="M18.8 9.3a1 1 0 0 0 2.1 7.7"></path><path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"></path></svg>
</div>
<div>
<p className="text-sm font-medium text-white">Order #8421</p>
<p className="text-xs text-white/60">From Pizza Palace — 2 items</p>
</div>
</div>
<span className="text-xs px-2 py-1 rounded-md bg-white/10 ring-1 ring-white/15">ETA 14–20m</span>
</div>
<div className="mt-6 grid sm:grid-cols-2 gap-5">
<div className="rounded-xl bg-black/30 ring-1 ring-white/10 p-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<p className="text-sm font-medium">Delivery address</p>
</div>
<p className="text-xs text-white/70 mt-1">245 Grand Ave, Apt 9B</p>
<div className="mt-3 h-36 rounded-lg overflow-hidden">
<img alt="Map preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
</div>
<div className="rounded-xl bg-black/30 ring-1 ring-white/10 p-4 flex flex-col">
<div className="flex items-center gap-2">
<svg className="lucide lucide-route w-4 h-4" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<p className="text-sm font-medium">Status timeline</p>
</div>
<div className="mt-3 space-y-4">
<div className="flex gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-white grid place-items-center text-black text-[10px]">1</div>
<div>
<p className="text-sm text-white">Order confirmed</p>
<p className="text-xs text-white/60">Restaurant started preparing</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-white grid place-items-center text-black text-[10px]">2</div>
<div>
<p className="text-sm text-white">Picked up</p>
<p className="text-xs text-white/60">Courier on the move</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 h-5 w-5 rounded-full bg-white/20 ring-1 ring-white/25 grid place-items-center text-white/80 text-[10px]">3</div>
<div>
<p className="text-sm text-white/80">Arriving soon</p>
<p className="text-xs text-white/50">ETA in 14–20 minutes</p>
</div>
</div>
</div>
<div className="mt-auto pt-4">
<div className="h-1.5 rounded-full bg-white/10">
<div className="h-1.5 rounded-full bg-white w-2/3"></div>
</div>
</div>
</div>
</div>
</div>

<div className="rounded-2xl bg-gradient-to-b from-white/10 to-white/5 ring-1 ring-white/10 p-6 flex flex-col justify-between">
<div>
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-xs text-white/80">
<svg className="lucide lucide-smartphone w-4 h-4" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                Order faster with the app
              </div>
<h3 className="mt-4 text-xl sm:text-2xl font-semibold tracking-tight">One-tap reorders, smarter suggestions.</h3>
<p className="text-sm text-white/70 mt-2">Save your favorites, reorder in seconds, and get exclusive app-only perks.</p>
</div>
<div className="mt-6 grid grid-cols-2 gap-3">
<button className="rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition px-4 py-2.5 text-sm flex items-center justify-center gap-2">
<svg className="lucide lucide-apple w-4 h-4" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
                App Store
              </button>
<button className="rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition px-4 py-2.5 text-sm flex items-center justify-center gap-2">
<svg className="lucide lucide-store w-4 h-4" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
                Play Store
              </button>
</div>
<div className="mt-6 rounded-xl overflow-hidden ring-1 ring-white/10">
<img alt="App preview" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 lg:py-20 border-t border-white/10" id="testimonials">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Stories from our community</h2>
<div className="hidden sm:flex items-center gap-2">
<button className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition grid place-items-center">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition grid place-items-center">
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4">
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-white">Maya</p>
<p className="text-xs text-white/60">NYC</p>
</div>
</div>
<p className="text-sm text-white/80 mt-3">The live tracking is spot on. My sushi arrives fresh every time.</p>
<div className="mt-3 inline-flex items-center gap-1 text-xs text-white/70">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-white">Ibrahim</p>
<p className="text-xs text-white/60">San Francisco</p>
</div>
</div>
<p className="text-sm text-white/80 mt-3">Huge selection and no random surge fees. It’s become my go-to.</p>
<div className="mt-3 inline-flex items-center gap-1 text-xs text-white/70">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="rounded-xl bg-white/5 ring-1 ring-white/10 p-5 hover:-translate-y-0.5 transition">
<div className="flex items-center gap-3">
<img alt="Avatar" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<p className="text-sm font-medium text-white">Lin</p>
<p className="text-xs text-white/60">Seattle</p>
</div>
</div>
<p className="text-sm text-white/80 mt-3">Reordering is insanely fast. My “usual” is literally one tap.</p>
<div className="mt-3 inline-flex items-center gap-1 text-xs text-white/70">
<svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-3.5 h-3.5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 lg:py-20 border-t border-white/10">
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-xs text-white/80">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
          Join our insider list
        </div>
<h3 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">Get drops, deals, and new restaurants first.</h3>
<p className="text-sm text-white/70 mt-1.5">We’ll send you only the good stuff. No spam, ever.</p>
<form className="mt-6 mx-auto max-w-md flex gap-2">
<input className="flex-1 rounded-lg bg-white/5 ring-1 ring-white/15 placeholder:text-white/40 text-white px-3.5 py-2.5 outline-none focus:ring-white/30 transition" placeholder="Your email address" type="email"/>
<button className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium bg-white text-black hover:opacity-90 transition">
            Subscribe
            <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</form>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="inline-flex items-center gap-3">
<div className="h-7 w-7 rounded-md bg-white/10 ring-1 ring-white/15 grid place-items-center">
<span className="text-[11px] font-semibold tracking-tight">SB</span>
</div>
<span className="text-sm font-semibold tracking-tight text-white">SwiftBite</span>
</div>
<p className="text-sm text-white/60 mt-3">Food you love, delivered with care. Available in 40+ cities.</p>
<div className="mt-4 flex items-center gap-2">
<a className="h-9 w-9 grid place-items-center rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="h-9 w-9 grid place-items-center rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="h-9 w-9 grid place-items-center rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
<div>
<p className="text-sm font-medium text-white mb-3">Company</p>
<ul className="space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition" href="#">About</a></li>
<li><a className="hover:text-white transition" href="#">Careers</a></li>
<li><a className="hover:text-white transition" href="#">Press</a></li>
<li><a className="hover:text-white transition" href="#">Partner with us</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-white mb-3">Support</p>
<ul className="space-y-2 text-sm text-white/70">
<li><a className="hover:text-white transition" href="#">Help Center</a></li>
<li><a className="hover:text-white transition" href="#">Safety</a></li>
<li><a className="hover:text-white transition" href="#">Refunds</a></li>
<li><a className="hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-white mb-3">Get the app</p>
<div className="grid grid-cols-2 gap-3">
<button className="rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition px-3 py-2 text-sm flex items-center justify-center gap-2">
<svg className="lucide lucide-apple w-4 h-4" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
                App Store
              </button>
<button className="rounded-lg bg-white/10 ring-1 ring-white/15 hover:bg-white/15 transition px-3 py-2 text-sm flex items-center justify-center gap-2">
<svg className="lucide lucide-store w-4 h-4" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
                Play Store
              </button>
</div>
</div>
</div>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
<p>© <span id="year">2025</span> SwiftBite Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-white transition" href="#">Privacy</a>
<a className="hover:text-white transition" href="#">Terms</a>
<a className="hover:text-white transition" href="#">Cookies</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
