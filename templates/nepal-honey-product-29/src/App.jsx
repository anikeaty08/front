import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Counter Animation
        const counters = document.querySelectorAll('.counter');
        const observerOptions = { threshold: 0.5 };
        
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.closest('.stat-item').dataset.target);
                    let current = 0;
                    const increment = target / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= target) {
                            counter.textContent = target.toLocaleString();
                            clearInterval(timer);
                        } else {
                            counter.textContent = Math.floor(current).toLocaleString();
                        }
                    }, 30);
                    counterObserver.unobserve(counter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => counterObserver.observe(counter));

        // Timeline Animation
        const timelineItems = document.querySelectorAll('.timeline-item');
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                }
            });
        }, { threshold: 0.3 });

        timelineItems.forEach(item => timelineObserver.observe(item));

        // Benefit Cards Toggle
        function toggleBenefit(card) {
            const details = card.querySelector('.benefit-details');
            const arrow = card.querySelector('.benefit-arrow');
            details.classList.toggle('hidden');
            arrow.classList.toggle('rotate-180');
        }

        // Product Tabs
        function switchTab(tab) {
            document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-amber-900', 'text-white');
                btn.classList.add('bg-stone-100', 'text-stone-600');
            });
            
            document.getElementById(`tab-${tab}`).classList.remove('hidden');
            event.target.classList.remove('bg-stone-100', 'text-stone-600');
            event.target.classList.add('bg-amber-900', 'text-white');
        }

        // Map Locations
        const locations = {
            lamjung: {
                name: 'Lamjung District',
                desc: 'Home to traditional honey hunting communities. Famous for wild cliff honey harvested at 3,500m altitude.'
            },
            kaski: {
                name: 'Kaski District',
                desc: 'Near the Annapurna range. Known for rhododendron-rich forests producing the finest mad honey.'
            },
            dolakha: {
                name: 'Dolakha District',
                desc: 'Eastern Nepal region with diverse flora. Produces exceptional multi-floral forest honey.'
            }
        };

        function showLocation(loc) {
            const info = locations[loc];
            document.getElementById('loc-name').textContent = info.name;
            document.getElementById('loc-desc').textContent = info.desc;
        }

        // Testimonial Carousel
        let currentTestimonial = 0;
        
        function goToTestimonial(index) {
            currentTestimonial = index;
            document.getElementById('testimonial-track').style.transform = `translateX(-${index * 100}%)`;
            document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
                dot.classList.toggle('bg-amber-500', i === index);
                dot.classList.toggle('bg-stone-300', i !== index);
            });
        }

        // Auto-advance testimonials
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % 3;
            goToTestimonial(currentTestimonial);
        }, 5000);

        // Newsletter Subscribe
        function handleSubscribe(e) {
            e.preventDefault();
            document.getElementById('subscribe-message').classList.remove('hidden');
            e.target.reset();
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-amber-50/80 backdrop-blur-md z-50 border-b border-amber-100">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tight text-amber-900">nepalhoney</div>
<div className="hidden md:flex items-center gap-8 text-sm text-stone-600">
<a className="hover:text-amber-700 transition-colors" href="#story">Our Story</a>
<a className="hover:text-amber-700 transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-amber-700 transition-colors" href="#varieties">Varieties</a>
<a className="hover:text-amber-700 transition-colors" href="#harvest">Harvest</a>
</div>
<button className="bg-amber-900 text-amber-50 px-4 py-2 rounded-full text-sm font-medium hover:bg-amber-800 transition-colors">
                Shop Now
            </button>
</div>
</nav>

<section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-50/30"></div>
<div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium mb-6">
<i className="w-3 h-3" data-lucide="mountain-snow"></i>
                        From the Himalayas
                    </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 leading-tight mb-6">
                        Pure Himalayan<br/>
<span className="text-amber-600">Wild Honey</span>
</h1>
<p className="text-lg text-stone-600 mb-8 max-w-md leading-relaxed">
                        Harvested by cliff-hanging hunters from the world's highest peaks. Experience honey in its most authentic, untouched form.
                    </p>
<div className="flex flex-wrap gap-4">
<button className="bg-amber-900 text-amber-50 px-6 py-3 rounded-full font-medium hover:bg-amber-800 transition-all hover:scale-105">
                            Explore Collection
                        </button>
<button className="border border-stone-300 text-stone-700 px-6 py-3 rounded-full font-medium hover:border-amber-400 transition-colors flex items-center gap-2" onclick="playVideo()">
<i className="w-4 h-4" data-lucide="play"></i>
                            Watch Story
                        </button>
</div>
</div>
<div className="relative">
<div className="w-80 h-80 lg:w-96 lg:h-96 mx-auto bg-gradient-to-br from-amber-300 to-amber-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-300/50 animate-pulse" style={{animationDuration: '3s'}}>
<div className="w-64 h-64 lg:w-72 lg:h-72 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
<i className="w-32 h-32 text-amber-100/80" data-lucide="hexagon"></i>
</div>
</div>
<div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
<div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
<i className="w-5 h-5 text-amber-600" data-lucide="award"></i>
</div>
<div>
<div className="text-xs text-stone-500">Certified Organic</div>
<div className="text-sm font-medium">100% Pure &amp; Natural</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-amber-900 text-amber-50">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="stat-item" data-target="4500">
<div className="text-4xl font-semibold tracking-tight mb-2"><span className="counter">0</span>m</div>
<div className="text-amber-200 text-sm">Altitude Harvested</div>
</div>
<div className="stat-item" data-target="200">
<div className="text-4xl font-semibold tracking-tight mb-2"><span className="counter">0</span>+</div>
<div className="text-amber-200 text-sm">Flower Species</div>
</div>
<div className="stat-item" data-target="50">
<div className="text-4xl font-semibold tracking-tight mb-2"><span className="counter">0</span>+</div>
<div className="text-amber-200 text-sm">Years of Tradition</div>
</div>
<div className="stat-item" data-target="10000">
<div className="text-4xl font-semibold tracking-tight mb-2"><span className="counter">0</span>+</div>
<div className="text-amber-200 text-sm">Happy Customers</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="story">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-4">The Ancient Art of Honey Hunting</h2>
<p className="text-stone-600 max-w-2xl mx-auto">For centuries, the Gurung people of Nepal have risked their lives scaling sheer cliffs to harvest the world's most precious honey.</p>
</div>

<div className="relative">
<div className="absolute left-1/2 top-0 bottom-0 w-px bg-amber-200 hidden md:block"></div>
<div className="space-y-12">
<div className="timeline-item opacity-0 translate-y-8 transition-all duration-700 md:flex items-center gap-8">
<div className="md:w-1/2 md:text-right md:pr-12">
<div className="bg-amber-50 rounded-2xl p-6 inline-block">
<i className="w-8 h-8 text-amber-600 mb-3" data-lucide="sunrise"></i>
<h3 className="text-xl font-medium mb-2">Dawn Preparation</h3>
<p className="text-stone-600 text-sm">Hunters gather before sunrise, performing ancient rituals to seek blessings from the forest spirits.</p>
</div>
</div>
<div className="hidden md:flex w-4 h-4 bg-amber-500 rounded-full relative z-10 mx-auto"></div>
<div className="md:w-1/2"></div>
</div>
<div className="timeline-item opacity-0 translate-y-8 transition-all duration-700 md:flex items-center gap-8">
<div className="md:w-1/2"></div>
<div className="hidden md:flex w-4 h-4 bg-amber-500 rounded-full relative z-10 mx-auto"></div>
<div className="md:w-1/2 md:pl-12">
<div className="bg-amber-50 rounded-2xl p-6 inline-block">
<i className="w-8 h-8 text-amber-600 mb-3" data-lucide="mountain"></i>
<h3 className="text-xl font-medium mb-2">The Climb</h3>
<p className="text-stone-600 text-sm">Using handmade rope ladders, hunters descend hundreds of feet down sheer cliff faces.</p>
</div>
</div>
</div>
<div className="timeline-item opacity-0 translate-y-8 transition-all duration-700 md:flex items-center gap-8">
<div className="md:w-1/2 md:text-right md:pr-12">
<div className="bg-amber-50 rounded-2xl p-6 inline-block">
<i className="w-8 h-8 text-amber-600 mb-3" data-lucide="flame"></i>
<h3 className="text-xl font-medium mb-2">Smoke &amp; Harvest</h3>
<p className="text-stone-600 text-sm">Burning grass creates smoke to calm the giant Himalayan bees while the precious honeycomb is carefully extracted.</p>
</div>
</div>
<div className="hidden md:flex w-4 h-4 bg-amber-500 rounded-full relative z-10 mx-auto"></div>
<div className="md:w-1/2"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-amber-50 to-white" id="benefits">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Why Nepal Honey is Extraordinary</h2>
<p className="text-stone-600 max-w-2xl mx-auto">Unique properties that make Himalayan honey unlike any other in the world.</p>
</div>

<div className="grid md:grid-cols-3 gap-6">
<div className="benefit-card group bg-white rounded-2xl p-8 border border-stone-100 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 cursor-pointer" onclick="toggleBenefit(this)">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-6 h-6 text-amber-600 group-hover:text-white" data-lucide="heart-pulse"></i>
</div>
<h3 className="text-xl font-medium mb-3">Medicinal Properties</h3>
<p className="text-stone-600 text-sm mb-4">Rich in antioxidants and natural compounds that boost immunity and heal wounds.</p>
<div className="benefit-details hidden">
<div className="pt-4 border-t border-stone-100 space-y-2 text-sm text-stone-500">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-amber-500" data-lucide="check"></i>Anti-inflammatory</div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-amber-500" data-lucide="check"></i>Antibacterial</div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-amber-500" data-lucide="check"></i>Wound healing</div>
</div>
</div>
<div className="text-amber-600 text-sm font-medium flex items-center gap-1 mt-2">
                        Learn more <i className="w-4 h-4 benefit-arrow transition-transform" data-lucide="chevron-down"></i>
</div>
</div>
<div className="benefit-card group bg-white rounded-2xl p-8 border border-stone-100 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 cursor-pointer" onclick="toggleBenefit(this)">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-6 h-6 text-amber-600 group-hover:text-white" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium mb-3">Mad Honey Effect</h3>
<p className="text-stone-600 text-sm mb-4">Contains grayanotoxins from rhododendron flowers, creating mild euphoric sensations.</p>
<div className="benefit-details hidden">
<div className="pt-4 border-t border-stone-100 space-y-2 text-sm text-stone-500">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-amber-500" data-lucide="check"></i>Natural relaxant</div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-amber-500" data-lucide="check"></i>Stress relief</div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-amber-500" data-lucide="check"></i>Sleep aid</div>
</div>
</div>
<div className="text-amber-600 text-sm font-medium flex items-center gap-1 mt-2">
                        Learn more <i className="w-4 h-4 benefit-arrow transition-transform" data-lucide="chevron-down"></i>
</div>
</div>
<div className="benefit-card group bg-white rounded-2xl p-8 border border-stone-100 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300 cursor-pointer" onclick="toggleBenefit(this)">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-6 h-6 text-amber-600 group-hover:text-white" data-lucide="leaf"></i>
</div>
<h3 className="text-xl font-medium mb-3">100% Raw &amp; Pure</h3>
<p className="text-stone-600 text-sm mb-4">Never heated, filtered, or processed. Contains all natural enzymes and pollen.</p>
<div className="benefit-details hidden">
<div className="pt-4 border-t border-stone-100 space-y-2 text-sm text-stone-500">
<div className="flex items-center gap-2"><i className="w-4 h-4 text-amber-500" data-lucide="check"></i>Live enzymes</div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-amber-500" data-lucide="check"></i>Natural pollen</div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-amber-500" data-lucide="check"></i>No additives</div>
</div>
</div>
<div className="text-amber-600 text-sm font-medium flex items-center gap-1 mt-2">
                        Learn more <i className="w-4 h-4 benefit-arrow transition-transform" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="varieties">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Our Honey Collection</h2>
<p className="text-stone-600 max-w-2xl mx-auto">Each variety offers a unique taste profile and set of benefits.</p>
</div>

<div className="flex flex-wrap justify-center gap-4 mb-12">
<button className="tab-btn active px-6 py-2 rounded-full text-sm font-medium transition-all bg-amber-900 text-white" onclick="switchTab('wild')">Wild Cliff Honey</button>
<button className="tab-btn px-6 py-2 rounded-full text-sm font-medium transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" onclick="switchTab('mad')">Mad Honey</button>
<button className="tab-btn px-6 py-2 rounded-full text-sm font-medium transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" onclick="switchTab('forest')">Forest Honey</button>
</div>
<div className="tab-content" id="tab-wild">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-3xl p-12 flex items-center justify-center">
<div className="w-48 h-64 bg-gradient-to-b from-amber-400 to-amber-600 rounded-2xl shadow-2xl flex items-center justify-center relative">
<i className="w-16 h-16 text-amber-100" data-lucide="droplets"></i>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">500g</div>
</div>
</div>
<div>
<div className="text-amber-600 text-sm font-medium mb-2">Premium Selection</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">Wild Cliff Honey</h3>
<p className="text-stone-600 mb-6">Harvested from the giant Himalayan honeybee (Apis laboriosa) at altitudes above 4,000 meters. Rich, complex flavor with notes of wildflowers and herbs.</p>

<div className="space-y-4 mb-8">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-stone-600">Sweetness</span>
<span className="text-amber-600">85%</span>
</div>
<div className="h-2 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-stone-600">Floral Notes</span>
<span className="text-amber-600">70%</span>
</div>
<div className="h-2 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '70%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-stone-600">Earthiness</span>
<span className="text-amber-600">60%</span>
</div>
<div className="h-2 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-amber-500 rounded-full" style={{width: '60%'}}></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-3xl font-semibold text-stone-900">$89</div>
<button className="bg-amber-900 text-white px-6 py-3 rounded-full font-medium hover:bg-amber-800 transition-colors">Add to Cart</button>
</div>
</div>
</div>
</div>
<div className="tab-content hidden" id="tab-mad">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="bg-gradient-to-br from-rose-100 to-amber-100 rounded-3xl p-12 flex items-center justify-center">
<div className="w-48 h-64 bg-gradient-to-b from-rose-400 to-amber-500 rounded-2xl shadow-2xl flex items-center justify-center relative">
<i className="w-16 h-16 text-rose-100" data-lucide="sparkles"></i>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">250g</div>
</div>
</div>
<div>
<div className="text-rose-600 text-sm font-medium mb-2">Rare &amp; Limited</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">Mad Honey</h3>
<p className="text-stone-600 mb-6">The legendary hallucinogenic honey from rhododendron-rich regions. Used for centuries in traditional medicine and spiritual practices. Consume with caution.</p>
<div className="space-y-4 mb-8">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-stone-600">Potency</span>
<span className="text-rose-600">95%</span>
</div>
<div className="h-2 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 rounded-full" style={{width: '95%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-stone-600">Rarity</span>
<span className="text-rose-600">98%</span>
</div>
<div className="h-2 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 rounded-full" style={{width: '98%'}}></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-3xl font-semibold text-stone-900">$149</div>
<button className="bg-rose-700 text-white px-6 py-3 rounded-full font-medium hover:bg-rose-800 transition-colors">Add to Cart</button>
</div>
</div>
</div>
</div>
<div className="tab-content hidden" id="tab-forest">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="bg-gradient-to-br from-emerald-100 to-amber-100 rounded-3xl p-12 flex items-center justify-center">
<div className="w-48 h-64 bg-gradient-to-b from-emerald-500 to-amber-500 rounded-2xl shadow-2xl flex items-center justify-center relative">
<i className="w-16 h-16 text-emerald-100" data-lucide="trees"></i>
<div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">750g</div>
</div>
</div>
<div>
<div className="text-emerald-600 text-sm font-medium mb-2">Everyday Essential</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">Forest Honey</h3>
<p className="text-stone-600 mb-6">Multi-floral honey from Nepal's lush forest regions. Perfect for daily use with a balanced, smooth taste and excellent health benefits.</p>
<div className="space-y-4 mb-8">
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-stone-600">Versatility</span>
<span className="text-emerald-600">90%</span>
</div>
<div className="h-2 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '90%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-2">
<span className="text-stone-600">Smoothness</span>
<span className="text-emerald-600">85%</span>
</div>
<div className="h-2 bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 rounded-full" style={{width: '85%'}}></div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="text-3xl font-semibold text-stone-900">$59</div>
<button className="bg-emerald-700 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-800 transition-colors">Add to Cart</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white" id="harvest">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-4">Where Magic Happens</h2>
<p className="text-stone-400 max-w-2xl mx-auto">Explore the regions where our honey is harvested.</p>
</div>

<div className="relative bg-stone-800 rounded-3xl p-8 lg:p-12">
<div className="aspect-video relative">
<svg className="w-full h-full" viewbox="0 0 800 400">

<path d="M100,200 Q150,150 250,180 Q350,120 450,160 Q550,100 650,150 Q700,180 750,200 Q700,280 600,260 Q500,300 400,280 Q300,320 200,280 Q150,260 100,200 Z" fill="none" stroke="#78716c" strokeWidth="2"></path>

<path d="M300,200 L330,150 L360,200" fill="none" stroke="#a8a29e" strokeWidth="1.5"></path>
<path d="M450,180 L490,110 L530,180" fill="none" stroke="#a8a29e" strokeWidth="1.5"></path>
<path d="M550,170 L580,130 L610,170" fill="none" stroke="#a8a29e" strokeWidth="1.5"></path>
</svg>

<button className="map-point absolute w-6 h-6 bg-amber-500 rounded-full hover:scale-150 transition-transform cursor-pointer animate-pulse" onclick="showLocation('lamjung')" style={{left: '35%', top: '35%'}}>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-stone-900 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">Lamjung</span>
</button>
<button className="map-point absolute w-6 h-6 bg-amber-500 rounded-full hover:scale-150 transition-transform cursor-pointer animate-pulse" onclick="showLocation('kaski')" style={{left: '55%', top: '28%', animationDelay: '0.5s'}}>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-stone-900 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">Kaski</span>
</button>
<button className="map-point absolute w-6 h-6 bg-amber-500 rounded-full hover:scale-150 transition-transform cursor-pointer animate-pulse" onclick="showLocation('dolakha')" style={{left: '70%', top: '32%', animationDelay: '1s'}}>
<span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-stone-900 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">Dolakha</span>
</button>
</div>

<div className="mt-8 p-6 bg-stone-700/50 rounded-xl" id="location-info">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-6 h-6 text-amber-500" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="text-lg font-medium mb-1" id="loc-name">Select a Location</h4>
<p className="text-stone-400 text-sm" id="loc-desc">Click on the golden dots to learn about our harvest regions.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-amber-50">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-stone-900 mb-4">What People Say</h2>
</div>

<div className="relative overflow-hidden">
<div className="flex transition-transform duration-500" id="testimonial-track">
<div className="w-full flex-shrink-0 px-4">
<div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto text-center shadow-lg">
<div className="flex justify-center gap-1 mb-4">
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-700 mb-6">"This is hands down the best honey I've ever tasted. The flavor is complex, rich, and absolutely divine. Worth every penny."</p>
<div className="font-medium text-stone-900">Sarah M.</div>
<div className="text-sm text-stone-500">California, USA</div>
</div>
</div>
<div className="w-full flex-shrink-0 px-4">
<div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto text-center shadow-lg">
<div className="flex justify-center gap-1 mb-4">
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-700 mb-6">"The mad honey experience was incredible. Used it responsibly and felt a beautiful sense of calm. Truly unique product."</p>
<div className="font-medium text-stone-900">James L.</div>
<div className="text-sm text-stone-500">London, UK</div>
</div>
</div>
<div className="w-full flex-shrink-0 px-4">
<div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto text-center shadow-lg">
<div className="flex justify-center gap-1 mb-4">
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
<i className="w-5 h-5 text-amber-500 fill-amber-500" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-700 mb-6">"As a chef, I appreciate quality ingredients. This Himalayan honey has elevated my desserts to a whole new level."</p>
<div className="font-medium text-stone-900">Marco R.</div>
<div className="text-sm text-stone-500">Milan, Italy</div>
</div>
</div>
</div>
<div className="flex justify-center gap-2 mt-8">
<button className="testimonial-dot w-3 h-3 rounded-full bg-amber-500" onclick="goToTestimonial(0)"></button>
<button className="testimonial-dot w-3 h-3 rounded-full bg-stone-300" onclick="goToTestimonial(1)"></button>
<button className="testimonial-dot w-3 h-3 rounded-full bg-stone-300" onclick="goToTestimonial(2)"></button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-amber-900">
<div className="max-w-4xl mx-auto px-6 text-center">
<i className="w-12 h-12 text-amber-300 mx-auto mb-6" data-lucide="mail"></i>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">Get 10% Off Your First Order</h2>
<p className="text-amber-200 mb-8">Subscribe to receive updates on new harvests and exclusive offers.</p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onsubmit="handleSubscribe(event)">
<input className="flex-1 px-4 py-3 rounded-full bg-white/10 border border-amber-700 text-white placeholder-amber-300 focus:outline-none focus:border-amber-400" placeholder="Enter your email" type="email"/>
<button className="px-6 py-3 bg-white text-amber-900 rounded-full font-medium hover:bg-amber-50 transition-colors" type="submit">
                    Subscribe
                </button>
</form>
<p className="text-amber-300 text-sm mt-4 hidden" id="subscribe-message">Thank you for subscribing! 🍯</p>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div>
<div className="text-xl font-semibold tracking-tight text-white mb-4">nepalhoney</div>
<p className="text-sm">Bringing the pure taste of the Himalayas to the world since 1975.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Products</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-amber-400 transition-colors" href="#">Wild Cliff Honey</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Mad Honey</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Forest Honey</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Gift Sets</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-amber-400 transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Follow Us</h4>
<div className="flex gap-4">
<a className="hover:text-amber-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-amber-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-amber-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-amber-400 transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
</div>
<div className="border-t border-stone-800 pt-8 text-sm text-center">
<p>© 2024 Nepal Honey. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
