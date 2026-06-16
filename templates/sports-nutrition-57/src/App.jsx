import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile menu toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        let isMenuOpen = false;
        
        menuBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
            menuBtn.innerHTML = isMenuOpen 
                ? '<span class="iconify w-5 h-5" data-icon="lucide:x" data-width="20" style="stroke-width: 1.5"></span>'
                : '<span class="iconify w-5 h-5" data-icon="lucide:menu" data-width="20" style="stroke-width: 1.5"></span>';
        });
        
        // Close mobile menu when clicking links
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                isMenuOpen = false;
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                menuBtn.innerHTML = '<span class="iconify w-5 h-5" data-icon="lucide:menu" data-width="20" style="stroke-width: 1.5"></span>';
            });
        });
        
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 nav-blur bg-white/80 border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-14">
<a className="text-lg font-semibold tracking-tight text-emerald-800" href="#">eatroutes</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#about">About</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#brands">Brands</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#events">Events</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#awards">Awards</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:inline-flex px-4 py-2 bg-emerald-800 text-white text-sm font-medium rounded-full hover:bg-emerald-700 transition-colors" href="#contact">Get Started</a>
<button className="md:hidden p-2 -mr-2" id="menuBtn">
<span className="iconify w-5 h-5" data-icon="lucide:menu" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white hidden flex-col pt-20 px-6" id="mobileMenu">
<div className="flex flex-col gap-4">
<a className="text-2xl font-medium text-neutral-900 py-2 border-b border-neutral-100" href="#about">About</a>
<a className="text-2xl font-medium text-neutral-900 py-2 border-b border-neutral-100" href="#brands">Brands</a>
<a className="text-2xl font-medium text-neutral-900 py-2 border-b border-neutral-100" href="#events">Events</a>
<a className="text-2xl font-medium text-neutral-900 py-2 border-b border-neutral-100" href="#awards">Awards</a>
<a className="text-2xl font-medium text-neutral-900 py-2 border-b border-neutral-100" href="#contact">Contact</a>
</div>
</div>

<section className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym Background" className="w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&amp;q=80"/>
<div className="absolute inset-0 hero-gradient"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="text-center lg:text-left">
<div className="fade-in stagger-1">
<p className="text-sm font-medium text-emerald-700 uppercase tracking-widest mb-6">Award-Winning Distribution</p>
</div>
<h1 className="fade-in stagger-2 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900 leading-tight">
                        Fueling Athletes with
                        <span className="gradient-text">Premium Nutrition</span>
</h1>
<p className="fade-in stagger-3 mt-8 text-lg md:text-xl text-neutral-500 font-light leading-relaxed">
                        Canada's trusted sports nutrition distributor. Connecting the world's best brands with retailers and athletes since 2016.
                    </p>
<div className="fade-in stagger-4 mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white text-base font-medium rounded-full hover:bg-emerald-700 transition-all hover:scale-105" href="#brands">
                            Explore Our Brands
                            <span className="iconify ml-2 w-5 h-5" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-neutral-100 text-neutral-900 text-base font-medium rounded-full hover:bg-neutral-200 transition-all" href="#about">
                            Our Story
                        </a>
</div>

<div className="fade-in stagger-4 mt-12 flex flex-wrap justify-center lg:justify-start gap-4">
<div className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
<span className="iconify w-4 h-4 text-amber-600" data-icon="lucide:award" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium text-amber-800">2× Financial Times Award</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full">
<span className="iconify w-4 h-4 text-amber-600" data-icon="lucide:trophy" style={{strokeWidth: '1.5'}}></span>
<span className="text-xs font-medium text-amber-800">3× Globe and Mail Award</span>
</div>
</div>
</div>

<div className="fade-in stagger-3 hidden lg:block">
<div className="relative">
<img alt="Sports Nutrition Products" className="rounded-3xl shadow-2xl w-full object-cover aspect-square" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&amp;q=80"/>
<div className="absolute -bottom-6 -left-6 w-48 h-48 bg-emerald-100 rounded-3xl -z-10"></div>
<div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-100 rounded-2xl -z-10"></div>

<div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
<span className="iconify w-6 h-6 text-emerald-700" data-icon="lucide:trending-up" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-xs text-neutral-500">Growth Rate</p>
<p className="text-lg font-semibold text-neutral-900">+340%</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
<span className="iconify w-6 h-6 text-neutral-400" data-icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></span>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-50" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<p className="text-sm font-medium text-emerald-700 uppercase tracking-widest mb-4">Our Journey</p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 leading-tight">
                        Nearly a Decade of Excellence
                    </h2>
<p className="mt-6 text-lg text-neutral-500 font-light leading-relaxed">
                        Since 2016, Eat Routes Inc has grown from a passionate startup to an award-winning sports nutrition distributor. We've built lasting partnerships with the world's most trusted brands, delivering premium products to retailers and athletes across Canada.
                    </p>
<div className="mt-10 grid grid-cols-3 gap-8">
<div>
<p className="text-3xl md:text-4xl font-semibold text-emerald-800">8+</p>
<p className="mt-1 text-sm text-neutral-500">Years Strong</p>
</div>
<div>
<p className="text-3xl md:text-4xl font-semibold text-emerald-800">50+</p>
<p className="mt-1 text-sm text-neutral-500">Brand Partners</p>
</div>
<div>
<p className="text-3xl md:text-4xl font-semibold text-emerald-800">5</p>
<p className="mt-1 text-sm text-neutral-500">Major Awards</p>
</div>
</div>
</div>
<div className="relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Athlete Training" className="rounded-2xl w-full h-48 object-cover" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&amp;q=80"/>
<img alt="Protein Supplements" className="rounded-2xl w-full h-48 object-cover mt-8" src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=400&amp;q=80"/>
<img alt="Gym Workout" className="rounded-2xl w-full h-48 object-cover" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&amp;q=80"/>
<img alt="Fitness Products" className="rounded-2xl w-full h-48 object-cover mt-8" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&amp;q=80"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-2xl -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-900 relative overflow-hidden" id="awards">

<div className="absolute inset-0 z-0">
<img alt="Awards Background" className="w-full h-full object-cover opacity-5" src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=1920&amp;q=80"/>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-sm font-medium text-emerald-400 uppercase tracking-widest mb-4">Recognition</p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                    Award-Winning Excellence
                </h2>
<p className="mt-6 text-lg text-neutral-400 font-light max-w-2xl mx-auto">
                    Our commitment to quality and service has been recognized by Canada's most prestigious business publications.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="relative bg-gradient-to-br from-neutral-800 to-neutral-850 rounded-3xl p-8 overflow-hidden card-hover">
<div className="award-shine absolute inset-0 rounded-3xl"></div>
<div className="relative">
<div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify w-8 h-8 text-amber-400" data-icon="lucide:award" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Financial Times</h3>
<p className="mt-2 text-amber-400 font-medium">2 Awards</p>
<p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                            Recognized for outstanding business growth and innovation in the sports nutrition industry.
                        </p>
</div>
</div>

<div className="relative bg-gradient-to-br from-neutral-800 to-neutral-850 rounded-3xl p-8 overflow-hidden card-hover">
<div className="award-shine absolute inset-0 rounded-3xl"></div>
<div className="relative">
<div className="w-16 h-16 bg-amber-500/10 rounded-2xl flex items-center justify-center mb-6">
<span className="iconify w-8 h-8 text-amber-400" data-icon="lucide:trophy" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight">Globe and Mail</h3>
<p className="mt-2 text-amber-400 font-medium">3 Awards</p>
<p className="mt-4 text-neutral-400 text-sm leading-relaxed">
                            Celebrated as one of Canada's fastest-growing companies with exceptional market performance.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white overflow-hidden" id="brands">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-sm font-medium text-emerald-700 uppercase tracking-widest mb-4">Our Partners</p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
                    World-Class Brands
                </h2>
<p className="mt-6 text-lg text-neutral-500 font-light max-w-2xl mx-auto">
                    We partner with the most trusted names in sports nutrition to bring you premium products.
                </p>
</div>
</div>

<div className="relative">
<div className="flex overflow-hidden">
<div className="flex brand-scroll gap-8 py-8">

<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&amp;q=80"/>
</div>
<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&amp;q=80"/>
</div>
<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=200&amp;q=80"/>
</div>
<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&amp;q=80"/>
</div>
<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=200&amp;q=80"/>
</div>
<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&amp;q=80"/>
</div>

<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=200&amp;q=80"/>
</div>
<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?w=200&amp;q=80"/>
</div>
<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=200&amp;q=80"/>
</div>
<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=200&amp;q=80"/>
</div>
<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=200&amp;q=80"/>
</div>
<div className="flex-shrink-0 w-48 h-24 bg-neutral-50 rounded-xl flex items-center justify-center p-4 border border-neutral-100">
<img alt="Brand" className="w-full h-full object-contain opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=200&amp;q=80"/>
</div>
</div>
</div>
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 mt-16 text-center">
<a className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors" href="#">
                View All Brands
                <span className="iconify ml-2 w-4 h-4" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-sm font-medium text-emerald-700 uppercase tracking-widest mb-4">Featured</p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
                    Top Products
                </h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl overflow-hidden card-hover">
<div className="aspect-square bg-neutral-100 relative overflow-hidden">
<img alt="Protein Powder" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&amp;q=80"/>
</div>
<div className="p-5">
<p className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Protein</p>
<h3 className="mt-1 text-base font-semibold text-neutral-900 tracking-tight">Whey Protein Isolate</h3>
<p className="mt-1 text-sm text-neutral-500">Premium quality protein</p>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden card-hover">
<div className="aspect-square bg-neutral-100 relative overflow-hidden">
<img alt="Pre-Workout" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&amp;q=80"/>
</div>
<div className="p-5">
<p className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Pre-Workout</p>
<h3 className="mt-1 text-base font-semibold text-neutral-900 tracking-tight">Energy Booster</h3>
<p className="mt-1 text-sm text-neutral-500">Maximum performance</p>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden card-hover">
<div className="aspect-square bg-neutral-100 relative overflow-hidden">
<img alt="BCAA" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&amp;q=80"/>
</div>
<div className="p-5">
<p className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Recovery</p>
<h3 className="mt-1 text-base font-semibold text-neutral-900 tracking-tight">BCAA Complex</h3>
<p className="mt-1 text-sm text-neutral-500">Muscle recovery formula</p>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden card-hover">
<div className="aspect-square bg-neutral-100 relative overflow-hidden">
<img alt="Vitamins" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?w=400&amp;q=80"/>
</div>
<div className="p-5">
<p className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Vitamins</p>
<h3 className="mt-1 text-base font-semibold text-neutral-900 tracking-tight">Multi-Vitamin Pack</h3>
<p className="mt-1 text-sm text-neutral-500">Complete nutrition</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white" id="events">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-sm font-medium text-emerald-700 uppercase tracking-widest mb-4">Community</p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
                    Events &amp; Activations
                </h2>
<p className="mt-6 text-lg text-neutral-500 font-light max-w-2xl mx-auto">
                    From trade shows to athlete sponsorships, we're actively engaged in the sports nutrition community.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white rounded-2xl overflow-hidden card-hover border border-neutral-100">
<div className="aspect-video relative overflow-hidden">
<img alt="Trade Show" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&amp;q=80"/>
<div className="image-overlay absolute inset-0"></div>
</div>
<div className="p-6">
<p className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Trade Show</p>
<h3 className="mt-2 text-lg font-semibold text-neutral-900 tracking-tight group-hover:text-emerald-800 transition-colors">Canadian Health Food Expo</h3>
<p className="mt-2 text-sm text-neutral-500">Showcasing our premium brands at Canada's largest health expo.</p>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden card-hover border border-neutral-100">
<div className="aspect-video relative overflow-hidden">
<img alt="Athlete Sponsorship" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&amp;q=80"/>
<div className="image-overlay absolute inset-0"></div>
</div>
<div className="p-6">
<p className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Sponsorship</p>
<h3 className="mt-2 text-lg font-semibold text-neutral-900 tracking-tight group-hover:text-emerald-800 transition-colors">Athlete Partnership Program</h3>
<p className="mt-2 text-sm text-neutral-500">Supporting elite athletes with premium nutrition products.</p>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden card-hover border border-neutral-100 md:col-span-2 lg:col-span-1">
<div className="aspect-video relative overflow-hidden">
<img alt="Community Event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&amp;q=80"/>
<div className="image-overlay absolute inset-0"></div>
</div>
<div className="p-6">
<p className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Community</p>
<h3 className="mt-2 text-lg font-semibold text-neutral-900 tracking-tight group-hover:text-emerald-800 transition-colors">Fitness Community Meetups</h3>
<p className="mt-2 text-sm text-neutral-500">Connecting with fitness enthusiasts across the country.</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 transition-colors" href="#">
                    View All Events
                    <span className="iconify ml-2 w-4 h-4" data-icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<p className="text-sm font-medium text-emerald-700 uppercase tracking-widest mb-4">What We Do</p>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900">
                    Distribution Excellence
                </h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="text-center p-8 bg-white rounded-2xl card-hover">
<div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
<span className="iconify w-8 h-8 text-emerald-700" data-icon="lucide:truck" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mt-6 text-lg font-semibold text-neutral-900 tracking-tight">Nationwide Delivery</h3>
<p className="mt-3 text-neutral-500 text-sm leading-relaxed">Fast, reliable shipping to retailers across Canada with real-time tracking.</p>
</div>
<div className="text-center p-8 bg-white rounded-2xl card-hover">
<div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
<span className="iconify w-8 h-8 text-emerald-700" data-icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mt-6 text-lg font-semibold text-neutral-900 tracking-tight">Quality Assured</h3>
<p className="mt-3 text-neutral-500 text-sm leading-relaxed">Every product meets strict quality standards before reaching our partners.</p>
</div>
<div className="text-center p-8 bg-white rounded-2xl card-hover">
<div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto">
<span className="iconify w-8 h-8 text-emerald-700" data-icon="lucide:headphones" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="mt-6 text-lg font-semibold text-neutral-900 tracking-tight">Dedicated Support</h3>
<p className="mt-3 text-neutral-500 text-sm leading-relaxed">Expert team ready to help with orders, inventory, and product knowledge.</p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-emerald-900 relative overflow-hidden" id="contact">

<div className="absolute inset-0 z-0">
<img alt="CTA Background" className="w-full h-full object-cover opacity-10" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&amp;q=80"/>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
                Ready to Partner?
            </h2>
<p className="mt-6 text-lg text-emerald-200 font-light max-w-2xl mx-auto">
                Join Canada's fastest-growing sports nutrition distribution network. Let's fuel success together.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-900 text-base font-medium rounded-full hover:bg-emerald-50 transition-all hover:scale-105" href="mailto:info@eatroutes.com">
<span className="iconify mr-2 w-5 h-5" data-icon="lucide:mail" style={{strokeWidth: '1.5'}}></span>
                    Get in Touch
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white text-base font-medium rounded-full hover:bg-emerald-700 transition-all border border-emerald-700" href="tel:+1234567890">
<span className="iconify mr-2 w-5 h-5" data-icon="lucide:phone" style={{strokeWidth: '1.5'}}></span>
                    Call Us
                </a>
</div>
</div>
</section>

<footer className="py-16 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<a className="text-xl font-semibold tracking-tight text-white" href="#">eatroutes</a>
<p className="mt-4 text-neutral-400 text-sm max-w-sm leading-relaxed">
                        Canada's trusted sports nutrition distributor since 2016. Fueling athletes with premium nutrition products.
                    </p>
<div className="mt-6 flex gap-4">
<a className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<span className="iconify w-5 h-5 text-neutral-400" data-icon="lucide:instagram" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<span className="iconify w-5 h-5 text-neutral-400" data-icon="lucide:linkedin" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors" href="#">
<span className="iconify w-5 h-5 text-neutral-400" data-icon="lucide:facebook" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wide">Quick Links</h4>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#brands">Our Brands</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#events">Events</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#awards">Awards</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wide">Contact</h4>
<ul className="mt-4 space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="mailto:info@eatroutes.com">info@eatroutes.com</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="http://www.eatroutes.com">www.eatroutes.com</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-500">© 2024 Eat Routes Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-neutral-400 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-neutral-500 hover:text-neutral-400 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
