import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Countdown Timer
        function updateCountdown() {
            const targetDate = new Date('2024-12-18T23:59:59').getTime();
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById('days').textContent = String(days).padStart(2, '0');
                document.getElementById('hours').textContent = String(hours).padStart(2, '0');
                document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
                document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
            }
        }
        setInterval(updateCountdown, 1000);
        updateCountdown();

        // Snowfall Effect
        function createSnowflake() {
            const snowfall = document.getElementById('snowfall');
            const snowflake = document.createElement('div');
            snowflake.style.cssText = `
                position: absolute;
                top: -10px;
                left: ${Math.random() * 100}%;
                width: ${Math.random() * 4 + 2}px;
                height: ${Math.random() * 4 + 2}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1});
                border-radius: 50%;
                animation: fall ${Math.random() * 10 + 10}s linear forwards;
                pointer-events: none;
            `;
            snowfall.appendChild(snowflake);
            
            setTimeout(() => snowflake.remove(), 20000);
        }

        // Add snowfall animation keyframes
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(360deg);
                    opacity: 0;
                }
            }
            @keyframes float {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
            .animate-float {
                animation: float 3s ease-in-out infinite;
            }
        `;
        document.head.appendChild(style);

        setInterval(createSnowflake, 300);

        // Product Toggle
        const toggleBtns = document.querySelectorAll('[id^="toggle-"]');
        toggleBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                toggleBtns.forEach(b => {
                    b.classList.remove('bg-amber-500', 'text-neutral-950');
                    b.classList.add('text-neutral-400');
                });
                this.classList.add('bg-amber-500', 'text-neutral-950');
                this.classList.remove('text-neutral-400');
            });
        });

        // FAQ Toggle
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('.faq-icon');
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(45deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-gradient-to-r from-amber-500/90 to-amber-600/90 py-2 px-4 text-center relative overflow-hidden">
<div className="flex items-center justify-center gap-2 text-sm font-medium text-neutral-950">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Order by Dec 18th for Christmas delivery:</span>
<div className="flex gap-1 ml-2">
<span className="bg-neutral-950 text-amber-400 px-2 py-0.5 rounded text-xs font-semibold" id="days">00</span>
<span>:</span>
<span className="bg-neutral-950 text-amber-400 px-2 py-0.5 rounded text-xs font-semibold" id="hours">00</span>
<span>:</span>
<span className="bg-neutral-950 text-amber-400 px-2 py-0.5 rounded text-xs font-semibold" id="minutes">00</span>
<span>:</span>
<span className="bg-neutral-950 text-amber-400 px-2 py-0.5 rounded text-xs font-semibold" id="seconds">00</span>
</div>
</div>
</div>

<nav className="fixed top-10 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-xl border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter">COLLIDER</div>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">Our Story</a>
<a className="hover:text-white transition-colors" href="#">Science</a>
</div>
<div className="flex items-center gap-4">
<span className="hidden sm:inline text-xs text-amber-400 font-medium bg-amber-400/10 px-3 py-1.5 rounded-full">FESTIVE10 = 10% OFF</span>
<button className="bg-white text-neutral-950 px-4 py-2 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">Shop Now</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">

<div className="absolute inset-0 pointer-events-none z-10" id="snowfall"></div>

<div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl"></div>
<div className="relative z-20 max-w-6xl mx-auto px-6 text-center">

<div className="mb-12 relative">
<div className="relative inline-block">

<div className="relative">
<div className="w-32 h-48 md:w-40 md:h-56 mx-auto bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-xl relative overflow-hidden border border-white/10">

<div className="absolute inset-x-2 top-8 bottom-8 bg-gradient-to-b from-amber-500 to-amber-600 rounded-lg flex flex-col items-center justify-center">
<span className="text-xs font-semibold tracking-tighter text-neutral-950">COLLIDER</span>
<span className="text-xs text-neutral-950/70 mt-1">UNWIND</span>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent"></div>
<div className="absolute top-12 left-3 w-1 h-1 bg-white/40 rounded-full"></div>
<div className="absolute top-16 left-5 w-0.5 h-0.5 bg-white/30 rounded-full"></div>
<div className="absolute top-20 right-4 w-1 h-2 bg-white/20 rounded-full"></div>
<div className="absolute top-28 left-4 w-0.5 h-1 bg-white/30 rounded-full"></div>
</div>

<div className="absolute -inset-4 bg-amber-500/20 blur-2xl rounded-full -z-10"></div>
</div>
</div>
</div>
<p className="text-amber-400 text-sm font-medium mb-4 tracking-wide">SURVIVE THE SEASON</p>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight">
                The "Night Off" That Still<br className="hidden md:block"/> Feels Like A Party
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Keep the buzz, lose the booze. The perfect Lager for the designated drivers, the mid-week breathers, and the 'Betwixtmas' recovery.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<button className="bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 px-8 py-4 rounded-full text-base font-medium hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2">
<span>Shop The Festive Bundles</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
<i className="w-5 h-5" data-lucide="play-circle"></i>
<span>Watch the story</span>
</button>
</div>
<p className="text-sm text-neutral-500 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="truck"></i>
                Order by Dec 18th for Guaranteed Christmas Delivery
            </p>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
<i className="w-6 h-6 text-neutral-500" data-lucide="chevron-down"></i>
</div>
</section>

<section className="py-24 px-6 bg-neutral-900/50 border-y border-white/5">
<div className="max-w-6xl mx-auto">
<p className="text-amber-400 text-sm font-medium mb-4 text-center tracking-wide">THE FESTIVE PROBLEM</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16">Sound Familiar?</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:border-amber-500/20 transition-colors group">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<i className="w-6 h-6 text-amber-400" data-lucide="battery-low"></i>
</div>
<h3 className="text-lg font-medium mb-3">The "Always On" Fatigue</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Office parties, family dinners, New Year's Eve. Alcohol every night is a recipe for burnout. Take a night off without killing the vibe.</p>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:border-amber-500/20 transition-colors group">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<i className="w-6 h-6 text-amber-400" data-lucide="glass-water"></i>
</div>
<h3 className="text-lg font-medium mb-3">The "Boring Soda" Guest</h3>
<p className="text-neutral-400 text-sm leading-relaxed">There's always someone not drinking. Don't hand them a warm cola. Give them a craft brew that actually gives them a mood-boost.</p>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:border-amber-500/20 transition-colors group">
<div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
<i className="w-6 h-6 text-amber-400" data-lucide="calendar-range"></i>
</div>
<h3 className="text-lg font-medium mb-3">The "Betwixtmas" Blur</h3>
<p className="text-neutral-400 text-sm leading-relaxed">That weird week between Xmas and New Year? Recover from the big day while staying sharp for the next one.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="relative">

<div className="aspect-square bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-3xl border border-white/5 flex items-center justify-center relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-48 h-48 border border-amber-500/20 rounded-full animate-pulse"></div>
<div className="absolute w-64 h-64 border border-amber-500/10 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
<div className="absolute w-80 h-80 border border-amber-500/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
</div>

<div className="relative z-10">
<div className="w-20 h-32 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-lg border border-white/10 flex flex-col items-center justify-center">
<span className="text-xs font-semibold tracking-tighter text-amber-400">C</span>
</div>
</div>

<div className="absolute top-16 left-16 bg-amber-500/20 backdrop-blur-sm border border-amber-500/20 rounded-full px-3 py-1 text-xs text-amber-400 animate-float">Lion's Mane</div>
<div className="absolute top-24 right-16 bg-amber-500/20 backdrop-blur-sm border border-amber-500/20 rounded-full px-3 py-1 text-xs text-amber-400 animate-float" style={{animationDelay: '0.3s'}}>L-Theanine</div>
<div className="absolute bottom-24 left-20 bg-amber-500/20 backdrop-blur-sm border border-amber-500/20 rounded-full px-3 py-1 text-xs text-amber-400 animate-float" style={{animationDelay: '0.6s'}}>Ashwagandha</div>
<div className="absolute bottom-16 right-20 bg-amber-500/20 backdrop-blur-sm border border-amber-500/20 rounded-full px-3 py-1 text-xs text-amber-400 animate-float" style={{animationDelay: '0.9s'}}>British Malt</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<p className="text-amber-400 text-sm font-medium mb-4 tracking-wide">THE SCIENCE OF CELEBRATION</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Real Relaxation,<br/>No Hangover.</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
                        It's not just 0.5% beer. It's micro-dosed with Lion's Mane and Ashwagandha. We didn't just remove the alcohol; we replaced the feeling.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4 bg-neutral-900/50 border border-white/5 rounded-xl p-4">
<div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-400" data-lucide="check"></i>
</div>
<div>
<p className="font-medium text-sm">Social Relaxation</p>
<p className="text-neutral-500 text-xs">L-Theanine for calm focus</p>
</div>
</div>
<div className="flex items-center gap-4 bg-neutral-900/50 border border-white/5 rounded-xl p-4">
<div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-400" data-lucide="check"></i>
</div>
<div>
<p className="font-medium text-sm">Mood Lift</p>
<p className="text-neutral-500 text-xs">Lion's Mane for mental clarity</p>
</div>
</div>
<div className="flex items-center gap-4 bg-neutral-900/50 border border-white/5 rounded-xl p-4">
<div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-green-400" data-lucide="check"></i>
</div>
<div>
<p className="font-medium text-sm">36 Calories</p>
<p className="text-neutral-500 text-xs">Room for more mince pies</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border-y border-white/5">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<p className="text-amber-400 text-sm font-medium mb-4 tracking-wide">HOST MODE ACTIVATED</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Build Your Christmas Stockpile</h2>
<p className="text-neutral-400">Stock up and save. The more you buy, the more you save.</p>
</div>

<div className="flex justify-center mb-12">
<div className="bg-neutral-900 border border-white/10 rounded-full p-1 inline-flex">
<button className="px-6 py-2.5 rounded-full text-sm font-medium transition-all bg-amber-500 text-neutral-950" id="toggle-lager">Unwind Lager</button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium transition-all text-neutral-400 hover:text-white" id="toggle-ipa">Session IPA</button>
<button className="px-6 py-2.5 rounded-full text-sm font-medium transition-all text-neutral-400 hover:text-white" id="toggle-mixed">Mixed Case</button>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all group">
<div className="text-sm text-neutral-500 mb-2">The "Solo Sipper"</div>
<h3 className="text-2xl font-semibold tracking-tight mb-1">12 Pack</h3>
<p className="text-neutral-400 text-sm mb-6">Good for a quiet night in.</p>
<div className="mb-6">
<span className="text-3xl font-semibold">£24</span>
<span className="text-neutral-500 text-sm">.99</span>
<span className="text-neutral-500 text-sm ml-2">£2.08/can</span>
</div>
<button className="w-full bg-neutral-800 hover:bg-neutral-700 border border-white/10 text-white py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
                        Add to Cart
                    </button>
</div>

<div className="bg-gradient-to-b from-amber-500/10 to-neutral-900/50 border-2 border-amber-500/30 rounded-2xl p-8 relative scale-105 shadow-xl shadow-amber-500/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-neutral-950 text-xs font-semibold px-4 py-1 rounded-full">RECOMMENDED</div>
<div className="text-sm text-amber-400 mb-2">The "Host with the Most"</div>
<h3 className="text-2xl font-semibold tracking-tight mb-1">24 Pack</h3>
<p className="text-neutral-400 text-sm mb-6">Enough for you and the guests.</p>
<div className="mb-6">
<span className="text-3xl font-semibold">£44</span>
<span className="text-neutral-500 text-sm">.99</span>
<span className="text-neutral-500 text-sm ml-2">£1.87/can</span>
<span className="text-green-400 text-xs ml-2 bg-green-400/10 px-2 py-0.5 rounded">Save 10%</span>
</div>
<button className="w-full bg-amber-500 hover:bg-amber-400 text-neutral-950 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
                        Add to Cart
                    </button>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all group">
<div className="text-sm text-neutral-500 mb-2">The "Festive Survivalist"</div>
<h3 className="text-2xl font-semibold tracking-tight mb-1">48 Pack</h3>
<p className="text-neutral-400 text-sm mb-6">See you through to Dry January.</p>
<div className="mb-6">
<span className="text-3xl font-semibold">£79</span>
<span className="text-neutral-500 text-sm">.99</span>
<span className="text-neutral-500 text-sm ml-2">£1.67/can</span>
<span className="text-green-400 text-xs ml-2 bg-green-400/10 px-2 py-0.5 rounded">Best Value</span>
</div>
<button className="w-full bg-neutral-800 hover:bg-neutral-700 border border-white/10 text-white py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
                        Add to Cart
                    </button>
</div>
</div>

<div className="mt-8 text-center">
<div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/20 rounded-full px-6 py-3">
<i className="w-5 h-5 text-amber-400" data-lucide="tag"></i>
<span className="text-amber-400 font-medium">Use code <span className="font-semibold">FESTIVE10</span> for 10% off your order</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<p className="text-amber-400 text-sm font-medium mb-4 tracking-wide">THE PARTY PROOF</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">The Drink of the Season</h2>
<div className="flex items-center justify-center gap-1 text-amber-400">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<span className="text-neutral-400 text-sm ml-2">4.9 from 2,847 reviews</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-6">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-4">"I brought a 12-pack to my office party. I drove home, slept great, and still felt like I had a 'drink' with the team. Game changer."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-neutral-950 font-semibold text-sm">SL</div>
<div>
<p className="text-sm font-medium">Sarah L.</p>
<p className="text-xs text-neutral-500">Verified Buyer</p>
</div>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-6">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-4">"Perfect for Boxing Day when you just can't face another glass of wine but want something cold and crisp. Already ordered my second case."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">TD</div>
<div>
<p className="text-sm font-medium">Tom D.</p>
<p className="text-xs text-neutral-500">Verified Buyer</p>
</div>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl p-6">
<div className="flex items-center gap-1 text-amber-400 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-4">"My pregnant wife finally has something decent to drink at parties! She says it's the first NA drink that actually feels like a proper beer."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">MK</div>
<div>
<p className="text-sm font-medium">Mike K.</p>
<p className="text-xs text-neutral-500">Verified Buyer</p>
</div>
</div>
</div>
</div>

<div className="mt-12 grid grid-cols-4 md:grid-cols-8 gap-2">
<div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-amber-900/40 to-neutral-900 flex items-center justify-center text-amber-500/50">
<i className="w-6 h-6" data-lucide="image"></i>
</div>
</div>
<div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-red-900/40 to-neutral-900 flex items-center justify-center text-red-500/50">
<i className="w-6 h-6" data-lucide="image"></i>
</div>
</div>
<div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-green-900/40 to-neutral-900 flex items-center justify-center text-green-500/50">
<i className="w-6 h-6" data-lucide="image"></i>
</div>
</div>
<div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-amber-900/40 to-neutral-900 flex items-center justify-center text-amber-500/50">
<i className="w-6 h-6" data-lucide="image"></i>
</div>
</div>
<div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden hidden md:block">
<div className="w-full h-full bg-gradient-to-br from-red-900/40 to-neutral-900 flex items-center justify-center text-red-500/50">
<i className="w-6 h-6" data-lucide="image"></i>
</div>
</div>
<div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden hidden md:block">
<div className="w-full h-full bg-gradient-to-br from-amber-900/40 to-neutral-900 flex items-center justify-center text-amber-500/50">
<i className="w-6 h-6" data-lucide="image"></i>
</div>
</div>
<div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden hidden md:block">
<div className="w-full h-full bg-gradient-to-br from-green-900/40 to-neutral-900 flex items-center justify-center text-green-500/50">
<i className="w-6 h-6" data-lucide="image"></i>
</div>
</div>
<div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden hidden md:block">
<div className="w-full h-full bg-gradient-to-br from-red-900/40 to-neutral-900 flex items-center justify-center text-red-500/50">
<i className="w-6 h-6" data-lucide="image"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950 border-y border-white/5">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<p className="text-amber-400 text-sm font-medium mb-4 tracking-wide">THE "IN-BETWEEN" DAYS</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Conquer Betwixtmas</h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-8">
                        The period between Christmas and New Year is for recovery. Collider gives you that 'ahhh' moment of relaxation without resetting your recovery progress. Wake up fresh for 2026.
                    </p>
<div className="flex flex-wrap gap-4">
<div className="bg-neutral-800/50 border border-white/5 rounded-xl px-5 py-3 text-sm">
<span className="text-neutral-500">Dec 26</span>
<span className="text-white ml-2">Boxing Day Recovery</span>
</div>
<div className="bg-neutral-800/50 border border-white/5 rounded-xl px-5 py-3 text-sm">
<span className="text-neutral-500">Dec 27-30</span>
<span className="text-white ml-2">The Quiet Days</span>
</div>
<div className="bg-amber-500/10 border border-amber-500/20 rounded-xl px-5 py-3 text-sm">
<span className="text-amber-400">Dec 31</span>
<span className="text-amber-300 ml-2">Ready for NYE</span>
</div>
</div>
</div>

<div className="relative">
<div className="aspect-square bg-gradient-to-br from-amber-900/20 via-neutral-900 to-neutral-950 rounded-3xl border border-white/5 flex items-center justify-center relative overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-t from-orange-500/30 via-amber-500/10 to-transparent blur-2xl"></div>

<div className="relative z-10 text-center p-8">
<div className="flex items-center justify-center gap-4 mb-6">
<div className="w-16 h-24 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-lg border border-white/10 flex items-center justify-center">
<span className="text-xs font-semibold text-amber-400 tracking-tighter">C</span>
</div>
</div>
<p className="text-neutral-400 text-sm">Feet up. Leftovers ready.</p>
<p className="text-white font-medium mt-2">The perfect recovery drink.</p>
</div>

<div className="absolute top-8 right-8 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
<div className="absolute top-12 right-16 w-1 h-1 bg-red-500 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
<div className="absolute top-16 right-10 w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<p className="text-amber-400 text-sm font-medium mb-4 tracking-wide">GOT QUESTIONS?</p>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Frequently Asked</h2>
</div>
<div className="space-y-4">

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left faq-toggle" onclick="toggleFaq(this)">
<span className="font-medium">Will it arrive by Christmas?</span>
<i className="w-5 h-5 text-neutral-400 faq-icon transition-transform" data-lucide="plus"></i>
</button>
<div className="px-6 pb-5 hidden faq-content">
<p className="text-neutral-400 text-sm leading-relaxed">Yes, if ordered by December 18th. We ship with 24h tracked delivery to ensure your festive stockpile arrives on time. Orders placed after the 18th may still arrive before Christmas but we can't guarantee it.</p>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left faq-toggle" onclick="toggleFaq(this)">
<span className="font-medium">Does it actually taste like beer?</span>
<i className="w-5 h-5 text-neutral-400 faq-icon transition-transform" data-lucide="plus"></i>
</button>
<div className="px-6 pb-5 hidden faq-content">
<p className="text-neutral-400 text-sm leading-relaxed">100%. Brewed with British malt and hops using traditional methods. The only thing missing is the headache. Our Unwind Lager has a crisp, clean finish while our Session IPA delivers those hoppy notes you love.</p>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left faq-toggle" onclick="toggleFaq(this)">
<span className="font-medium">Can I drive after drinking this?</span>
<i className="w-5 h-5 text-neutral-400 faq-icon transition-transform" data-lucide="plus"></i>
</button>
<div className="px-6 pb-5 hidden faq-content">
<p className="text-neutral-400 text-sm leading-relaxed">Absolutely. At 0.5% ABV, Collider is legally classified as alcohol-free and is completely safe for driving. You'd need to drink around 10 cans in quick succession to register any alcohol in your system at all.</p>
</div>
</div>

<div className="bg-neutral-900/50 border border-white/5 rounded-2xl overflow-hidden">
<button className="w-full px-6 py-5 flex items-center justify-between text-left faq-toggle" onclick="toggleFaq(this)">
<span className="font-medium">What are the functional ingredients?</span>
<i className="w-5 h-5 text-neutral-400 faq-icon transition-transform" data-lucide="plus"></i>
</button>
<div className="px-6 pb-5 hidden faq-content">
<p className="text-neutral-400 text-sm leading-relaxed">Each can contains L-Theanine (for calm focus), Lion's Mane (for cognitive clarity), and Ashwagandha (for stress relief). These are all natural, well-researched adaptogens and nootropics used for centuries in traditional medicine.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-b from-neutral-950 to-neutral-900">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Survive<br/>the Season?</h2>
<p className="text-neutral-400 text-lg mb-10">Join thousands of smart celebrators who've discovered the secret to festive endurance.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<button className="bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 px-8 py-4 rounded-full text-base font-medium hover:from-amber-400 hover:to-amber-500 transition-all shadow-lg shadow-amber-500/25 flex items-center gap-2">
<span>Shop The Festive Bundles</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
<p className="text-sm text-neutral-500 flex items-center justify-center gap-4">
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="truck"></i> Free shipping over £30</span>
<span className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="shield-check"></i> 30-day returns</span>
</p>
</div>
</section>

<footer className="py-16 px-6 border-t border-white/5">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div>
<div className="text-xl font-semibold tracking-tighter mb-4">COLLIDER</div>
<p className="text-neutral-500 text-sm leading-relaxed">Brewed for the Holidays.<br/>And every other day you want to feel good without the hangover.</p>
</div>
<div>
<p className="font-medium text-sm mb-4">Products</p>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Unwind Lager</a></li>
<li><a className="hover:text-white transition-colors" href="#">Session IPA</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mixed Cases</a></li>
<li><a className="hover:text-white transition-colors" href="#">Merchandise</a></li>
</ul>
</div>
<div>
<p className="font-medium text-sm mb-4">Company</p>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">The Science</a></li>
<li><a className="hover:text-white transition-colors" href="#">Stockists</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<p className="font-medium text-sm mb-4">Support</p>
<ul className="space-y-3 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">FAQs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping</a></li>
<li><a className="hover:text-white transition-colors" href="#">Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-neutral-500 text-xs">© 2024 Collider Brewing Co. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-0 left-0 right-0 bg-neutral-950/95 backdrop-blur-xl border-t border-white/10 p-4 md:hidden z-50">
<div className="flex items-center justify-between gap-4">
<div>
<p className="text-xs text-amber-400 font-medium">FESTIVE10 = 10% OFF</p>
<p className="text-xs text-neutral-500">Auto-applied at checkout</p>
</div>
<button className="bg-amber-500 text-neutral-950 px-6 py-3 rounded-full text-sm font-medium flex-shrink-0">
                Shop Now
            </button>
</div>
</div>


    </>
  );
}
