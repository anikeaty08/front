import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Menu Filter
        const menuTabs = document.querySelectorAll('.menu-tab');
        const menuItems = document.querySelectorAll('.menu-item');
        
        menuTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // Update active tab
                menuTabs.forEach(t => {
                    t.classList.remove('bg-orange-900', 'text-white', 'shadow-md');
                    t.classList.add('bg-stone-100', 'text-stone-600', 'hover:bg-stone-200');
                });
                tab.classList.remove('bg-stone-100', 'text-stone-600', 'hover:bg-stone-200');
                tab.classList.add('bg-orange-900', 'text-white', 'shadow-md');
                
                // Filter items
                const category = tab.dataset.category;
                menuItems.forEach(item => {
                    // Simple animation for switching
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(10px)';
                    
                    setTimeout(() => {
                        if (category === 'all' || item.dataset.category === category) {
                            item.style.display = 'block';
                            // Trigger reflow
                            void item.offsetWidth;
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        } else {
                            item.style.display = 'none';
                        }
                    }, 200);
                });
            });
        });
        
        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    mobileMenu.classList.add('hidden');
                }
            });
        });
        
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md', 'bg-white/95');
                nav.classList.remove('bg-stone-50/90');
            } else {
                nav.classList.remove('shadow-md', 'bg-white/95');
                nav.classList.add('bg-stone-50/90');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<a className="flex items-center gap-2" href="#home">
<span className="text-xl lg:text-2xl font-bold tracking-tight text-orange-900" style={{fontFamily: '\'Playfair Display\', serif'}}>AURELIA</span>
<span className="hidden sm:block text-xs font-medium text-stone-500 tracking-wide uppercase">Ristorante</span>
</a>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-orange-900 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-stone-600 hover:text-orange-900 transition-colors" href="#about">Story</a>
<a className="text-sm font-medium text-stone-600 hover:text-orange-900 transition-colors" href="#menu">Menu</a>
<a className="text-sm font-medium text-stone-600 hover:text-orange-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-stone-600 hover:text-orange-900 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-stone-600 hover:text-orange-900 transition-colors" href="#contact">Visit</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-2 text-sm text-stone-600 hover:text-orange-900 transition-colors" href="tel:07737283668">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>077372 83668</span>
</a>
<a className="bg-orange-900 hover:bg-orange-950 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors shadow-lg shadow-orange-900/20" href="#contact">
                        Reserve Table
                    </a>
<button className="lg:hidden p-2 text-stone-600" id="mobileMenuBtn">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden lg:hidden bg-stone-50 border-t border-stone-200" id="mobileMenu">
<div className="px-4 py-4 space-y-3">
<a className="block text-sm font-medium text-stone-600 hover:text-orange-900 py-2" href="#home">Home</a>
<a className="block text-sm font-medium text-stone-600 hover:text-orange-900 py-2" href="#about">Story</a>
<a className="block text-sm font-medium text-stone-600 hover:text-orange-900 py-2" href="#menu">Menu</a>
<a className="block text-sm font-medium text-stone-600 hover:text-orange-900 py-2" href="#gallery">Gallery</a>
<a className="block text-sm font-medium text-stone-600 hover:text-orange-900 py-2" href="#reviews">Reviews</a>
<a className="block text-sm font-medium text-stone-600 hover:text-orange-900 py-2" href="#contact">Visit</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-16 lg:pt-20 overflow-hidden" id="home">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-br from-stone-50 via-orange-50/40 to-stone-100"></div>
<div className="absolute top-20 right-10 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-10 w-[30rem] h-[30rem] bg-stone-200/30 rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="text-center lg:text-left">
<div className="inline-flex items-center gap-2 bg-white border border-stone-200 text-orange-900 text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full mb-8 shadow-sm">
<svg aria-hidden="true" data-icon="lucide:award" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" fill="none" r="7" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="M8.21 13.89L7 23l5-3l5 3l-1.21-9.12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Authentic Italian Cuisine</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-stone-900 mb-8 leading-[1.1]" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Tradition in<br/>
<span className="text-orange-900">Every Bite</span>,<br/>
                        Passion in<br/>
<span className="italic text-stone-500 font-normal">Every Dish</span>
</h1>
<p className="text-lg text-stone-600 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
                        Experience the soulful flavors of Italy right here in Raipur. Hand-rolled pasta, wood-fired pizzas, and wines that tell a story.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
<a className="inline-flex items-center justify-center gap-2 bg-orange-900 hover:bg-orange-950 text-white text-sm font-medium px-8 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-orange-900/20" href="#menu">
<svg aria-hidden="true" data-icon="lucide:utensils" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2zm0 0v7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            View Full Menu
                        </a>
<a className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-50 text-stone-800 text-sm font-medium px-8 py-4 rounded-full border border-stone-200 transition-all shadow-sm hover:shadow-md" href="#contact">
<svg aria-hidden="true" data-icon="lucide:calendar" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                            Reserve Table
                        </a>
</div>

<div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-stone-200 pt-8">
<div>
<div className="flex items-center gap-1.5 text-orange-900 mb-2">
<svg aria-hidden="true" data-icon="lucide:chef-hat" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54a5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6A4 4 0 0 1 18 13.87V21H6Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M6 17h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-semibold tracking-wide uppercase">Kitchen</span>
</div>
<p className="text-sm font-medium text-stone-900">Authentic</p>
<p className="text-xs text-stone-500">Italian Chefs</p>
</div>
<div className="border-l border-stone-200 pl-6">
<div className="flex items-center gap-1.5 text-orange-900 mb-2">
<svg aria-hidden="true" data-icon="lucide:clock" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-xs font-semibold tracking-wide uppercase">Hours</span>
</div>
<p className="text-sm font-medium text-stone-900">Open Daily</p>
<p className="text-xs text-stone-500">11 AM - 11 PM</p>
</div>
<div className="border-l border-stone-200 pl-6">
<div className="flex items-center gap-1.5 text-orange-900 mb-2">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="text-xs font-semibold tracking-wide uppercase">Location</span>
</div>
<p className="text-sm font-medium text-stone-900">Civil Lines</p>
<p className="text-xs text-stone-500">Raipur, CG</p>
</div>
</div>
</div>
<div className="relative pl-4 lg:pl-0">
<div className="relative aspect-[4/5] max-w-md mx-auto">

<div className="absolute -inset-4 bg-orange-100 rounded-[2rem] transform rotate-3"></div>
<div className="absolute inset-0 bg-stone-200 rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-900/10 border border-white/50">
<img alt="Italian Pasta Dish" className="w-full h-full object-cover transform scale-105" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&amp;h=1000&amp;fit=crop" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl shadow-stone-900/10 border border-stone-100 max-w-[200px]">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 text-orange-900">
<svg aria-hidden="true" data-icon="lucide:flame" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3l-1.47-2.86A4.5 4.5 0 0 0 3.75 10a4.5 4.5 0 1 0 1.25 7.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M15.5 14.5a2.5 2.5 0 0 0 2.5-2.5c0-1.38-.5-2-1-3l-1.47-2.86A4.5 4.5 0 0 0 10.75 10a4.5 4.5 0 1 0 1.25 7.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<p className="text-sm font-bold text-stone-900">Wood Fired</p>
<p className="text-xs text-stone-500 leading-snug">Traditional napoleon style oven</p>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 bg-stone-900 text-white rounded-full w-24 h-24 flex flex-col items-center justify-center p-2 shadow-2xl border-4 border-stone-50">
<span className="text-2xl font-bold font-serif italic">15+</span>
<span className="text-[10px] uppercase tracking-wider opacity-80">Years Exp</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-xs font-bold text-orange-900 uppercase tracking-widest">Our Selection</span>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Signature Plates
                    </h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-orange-900 transition-colors group" href="#menu">
                    View Full Menu 
                    <svg aria-hidden="true" className="group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
<div className="group-hover:bg-black/0 transition-colors bg-black/5 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Truffle Pizza" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/281a9baf-0631-47f9-8d93-825871d9f7c3_800w.jpg"/>
</div>
<div className="">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 group-hover:text-orange-900 transition-colors">Truffle Mushroom Pizza</h3>
<span className="text-sm font-medium text-stone-500">₹449</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Wild mushrooms, truffle oil, mozzarella, fresh thyme</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10"></div>
<img alt="Pasta Carbonara" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1612874742237-6526221588e3?w=500&amp;h=600&amp;fit=crop"/>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 group-hover:text-orange-900 transition-colors">Spaghetti Carbonara</h3>
<span className="text-sm font-medium text-stone-500">₹389</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Guanciale, pecorino romano, farm fresh egg yolk, black pepper</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10"></div>
<img alt="Risotto" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=500&amp;h=600&amp;fit=crop"/>
</div>
<div className="">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 group-hover:text-orange-900 transition-colors">Saffron Risotto</h3>
<span className="text-sm font-medium text-stone-500">₹419</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Arborio rice, saffron threads, parmesan crisp, white wine</p>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
<div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors z-10"></div>
<img alt="Tiramisu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&amp;h=600&amp;fit=crop"/>
</div>
<div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-stone-900 group-hover:text-orange-900 transition-colors">Classic Tiramisu</h3>
<span className="text-sm font-medium text-stone-500">₹299</span>
</div>
<p className="text-sm text-stone-500 leading-relaxed">Savoiardi biscuits, mascarpone cream, espresso soak</p>
</div>
</div>
</div>
<div className="mt-12 text-center md:hidden">
<a className="inline-flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-900 text-sm font-medium px-6 py-3 rounded-full transition-all" href="#menu">
                    View Full Menu
                </a>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-stone-100" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200">
<img alt="Restaurant Interior" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&amp;h=533&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-square rounded-2xl overflow-hidden bg-stone-200">
<img alt="Chef Cooking" className="opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/99f1d99c-8d35-4c4e-babd-54000b67ff9e_800w.webp"/>
</div>
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-200">
<img alt="Fresh Ingredients" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&amp;h=533&amp;fit=crop"/>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-xs font-bold text-orange-900 uppercase tracking-widest">Our Heritage</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-4 mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        A Culinary Journey<br/>to the Heart of Italy
                    </h2>
<div className="space-y-6 text-stone-600 text-lg leading-relaxed font-light">
<p>
                            Nestled in the vibrant district of Civil Lines, <span className="font-medium text-stone-900">Aurelia Ristorante</span> brings the authentic taste of Italy to Raipur. We believe that great food begins with the finest ingredients and ends with a shared memory.
                        </p>
<p>
                            Our kitchen is led by chefs who understand the delicate balance of Italian cuisine—simple ingredients, expertly prepared. From our hand-kneaded dough to our slow-simmered sauces, every dish is a tribute to traditional cooking methods.
                        </p>
<p>
                            With an ambiance designed for conversation and a menu crafted for delight, Aurelia is more than a restaurant; it is a destination for those who appreciate the art of dining well.
                        </p>
</div>
<div className="grid grid-cols-3 gap-8 mt-12 pt-10 border-t border-stone-200/60">
<div>
<p className="text-3xl lg:text-4xl font-semibold text-orange-900" style={{fontFamily: '\'Playfair Display\', serif'}}>2010</p>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide mt-2">Established</p>
</div>
<div>
<p className="text-3xl lg:text-4xl font-semibold text-orange-900" style={{fontFamily: '\'Playfair Display\', serif'}}>50+</p>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide mt-2">Classic Recipes</p>
</div>
<div>
<p className="text-3xl lg:text-4xl font-semibold text-orange-900" style={{fontFamily: '\'Playfair Display\', serif'}}>12k+</p>
<p className="text-xs font-medium text-stone-500 uppercase tracking-wide mt-2">Guests Served</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="menu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-bold text-orange-900 uppercase tracking-widest">Gastronomy</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    The Menu
                </h2>
<p className="text-stone-500 mt-4 max-w-xl mx-auto font-light text-lg">Authentic recipes passed down through generations</p>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-16">
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-orange-900 text-white shadow-md shadow-orange-900/10" data-category="all">All</button>
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-category="antipasti">Antipasti</button>
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-category="primi">Primi</button>
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-category="secondi">Secondi</button>
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-category="pizza">Pizze</button>
<button className="menu-tab px-6 py-2.5 text-sm font-medium rounded-full transition-all bg-stone-100 text-stone-600 hover:bg-stone-200" data-category="dolci">Dolci</button>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8" id="menuGrid">

<div className="menu-item bg-white rounded-xl p-8 border border-stone-100 hover:border-orange-100 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300" data-category="antipasti">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-900">
<span className="text-xl">🍅</span>
</div>
<span className="text-[10px] font-bold text-orange-900 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">Starters</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Antipasti</h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Bruschetta Pomodoro</span>
<p className="text-xs text-stone-500 mt-0.5">Toasted ciabatta, basil, garlic</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹249</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Caprese Salad</span>
<p className="text-xs text-stone-500 mt-0.5">Mozzarella di bufala, vine tomatoes</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹329</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Calamari Fritti</span>
<p className="text-xs text-stone-500 mt-0.5">Crispy squid, lemon aioli</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹399</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Arancini di Riso</span>
<p className="text-xs text-stone-500 mt-0.5">Fried risotto balls, marinara</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹299</span>
</li>
</ul>
</div>

<div className="menu-item bg-white rounded-xl p-8 border border-stone-100 hover:border-orange-100 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300" data-category="primi">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-900">
<span className="text-xl">🍝</span>
</div>
<span className="text-[10px] font-bold text-orange-900 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">Pasta</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Primi Piatti</h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Penne Arrabbiata</span>
<p className="text-xs text-stone-500 mt-0.5">Spicy tomato sauce, parsley</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹349</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Fettuccine Alfredo</span>
<p className="text-xs text-stone-500 mt-0.5">Parmesan cream sauce</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹379</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Ravioli Spinaci</span>
<p className="text-xs text-stone-500 mt-0.5">Spinach &amp; ricotta filled</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹399</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Spaghetti Aglio e Olio</span>
<p className="text-xs text-stone-500 mt-0.5">Garlic, olive oil, chili flakes</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹329</span>
</li>
</ul>
</div>

<div className="menu-item bg-white rounded-xl p-8 border border-stone-100 hover:border-orange-100 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300" data-category="pizza">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-900">
<span className="text-xl">🍕</span>
</div>
<span className="text-[10px] font-bold text-orange-900 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">Wood Fired</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Pizze Classiche</h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Margherita</span>
<p className="text-xs text-stone-500 mt-0.5">San Marzano tomato, mozzarella, basil</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹399</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Quattro Formaggi</span>
<p className="text-xs text-stone-500 mt-0.5">Mozzarella, gorgonzola, parmesan, fontina</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹499</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Diavola</span>
<p className="text-xs text-stone-500 mt-0.5">Spicy salami, chili oil</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹479</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Ortolana</span>
<p className="text-xs text-stone-500 mt-0.5">Grilled zucchini, eggplant, peppers</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹429</span>
</li>
</ul>
</div>

<div className="menu-item bg-white rounded-xl p-8 border border-stone-100 hover:border-orange-100 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300" data-category="secondi">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-900">
<span className="text-xl">🥩</span>
</div>
<span className="text-[10px] font-bold text-orange-900 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">Mains</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Secondi Piatti</h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Grilled Salmon</span>
<p className="text-xs text-stone-500 mt-0.5">Asparagus, lemon butter sauce</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹699</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Chicken Parmigiana</span>
<p className="text-xs text-stone-500 mt-0.5">Breaded breast, marinara, mozzarella</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹549</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Mushroom Risotto</span>
<p className="text-xs text-stone-500 mt-0.5">Porcini mushrooms, truffle oil</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹499</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Eggplant Parmigiana</span>
<p className="text-xs text-stone-500 mt-0.5">Layered aubergine, tomato, parmesan</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹449</span>
</li>
</ul>
</div>

<div className="menu-item bg-white rounded-xl p-8 border border-stone-100 hover:border-orange-100 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300" data-category="dolci">
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-900">
<span className="text-xl">🍰</span>
</div>
<span className="text-[10px] font-bold text-orange-900 bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">Dessert</span>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>Dolci</h3>
<ul className="space-y-4">
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Tiramisu</span>
<p className="text-xs text-stone-500 mt-0.5">Classic coffee-flavoured dessert</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹299</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Panna Cotta</span>
<p className="text-xs text-stone-500 mt-0.5">Vanilla bean, berry coulis</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹249</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Cannoli Siciliani</span>
<p className="text-xs text-stone-500 mt-0.5">Ricotta filling, pistachios</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹279</span>
</li>
<li className="flex justify-between items-baseline group">
<div className="flex-1">
<span className="text-stone-800 font-medium group-hover:text-orange-900 transition-colors">Gelato</span>
<p className="text-xs text-stone-500 mt-0.5">Assorted artisanal flavors</p>
</div>
<span className="text-sm font-semibold text-stone-900 ml-4">₹199</span>
</li>
</ul>
</div>
</div>
<div className="text-center mt-16">
<a className="inline-flex items-center gap-2 text-stone-500 hover:text-orange-900 font-medium text-sm transition-colors border-b border-transparent hover:border-orange-900 pb-0.5" href="#">
<svg aria-hidden="true" data-icon="lucide:download" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
                    Download Seasonal Menu (PDF)
                </a>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-stone-900" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-bold text-orange-400 uppercase tracking-widest">Visual Experience</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mt-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Our Atmosphere
                </h2>
<p className="text-stone-400 mt-4 max-w-xl mx-auto font-light">Elegance in every detail</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Restaurant Interior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer md:col-span-2 lg:col-span-1">
<img alt="Plating" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Pizza Oven" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Cocktails" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Dining Area" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Pasta Making" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Chef Plating" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden group cursor-pointer">
<img alt="Fresh Pasta" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-stone-50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs font-bold text-orange-900 uppercase tracking-widest">Testimonials</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Guest Stories
                </h2>
<div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-sm border border-stone-200 mt-8">
<div className="flex items-center gap-0.5 text-orange-900">
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '0', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '0', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '0', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '0', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path></svg>
<svg aria-hidden="true" data-icon="lucide:star" data-width="16" height="16" role="img" style={{strokeWidth: '0', fill: 'currentColor'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xl font-bold text-stone-900">4.8</span>
<span className="text-xs text-stone-500 border-l border-stone-200 pl-3">2,400+ reviews</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                        "The most authentic Italian food I've had in Raipur. The truffle pizza was incredible, perfectly crisp crust. The ambiance feels like a warm evening in Florence."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-900 font-bold text-sm">
                            PR
                        </div>
<div>
<p className="text-sm font-semibold text-stone-900">Priya R.</p>
<p className="text-[10px] uppercase tracking-wide text-stone-400">Dined Last Week</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                        "A gem in Civil Lines. The handmade pasta is a game changer. Staff is knowledgeable about wine pairings. Highly recommend the Carbonara and Tiramisu."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 font-bold text-sm">
                            AK
                        </div>
<div>
<p className="text-sm font-semibold text-stone-900">Amit K.</p>
<p className="text-[10px] uppercase tracking-wide text-stone-400">Regular Guest</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl p-8 shadow-sm border border-stone-100">
<p className="text-stone-600 text-sm leading-relaxed mb-6 italic">
                        "Perfect spot for a date night. Quiet, elegant, and the food is consistently excellent. The Risotto is to die for. Will definitely be returning soon."
                    </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-900 font-bold text-sm">
                            SM
                        </div>
<div>
<p className="text-sm font-semibold text-stone-900">Sneha M.</p>
<p className="text-[10px] uppercase tracking-wide text-stone-400">2 Days Ago</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
<div className="">
<span className="text-xs font-bold text-orange-900 uppercase tracking-widest">Reservations</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-stone-900 mt-3 mb-8" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Visit Us
                    </h2>
<div className="space-y-8">
<div className="flex gap-5">
<div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 text-orange-900">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<h3 className="text-base font-semibold text-stone-900 mb-1">Location</h3>
<p className="text-sm text-stone-600 leading-relaxed">48/726, Kali Mata Mandir Road,Akashwani Chowk, Civil Lines,Raipur, Chhattisgarh 492001</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 text-orange-900">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h3 className="text-base font-semibold text-stone-900 mb-1">Contact</h3>
<a className="text-sm text-stone-600 hover:text-orange-900 transition-colors block mb-1" href="tel:07737283668">077372 83668</a>
<p className="text-sm text-stone-500">reservations@aurelia.com</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 border border-stone-200 rounded-full flex items-center justify-center flex-shrink-0 text-orange-900">
<svg aria-hidden="true" data-icon="lucide:clock" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<h3 className="text-base font-semibold text-stone-900 mb-1">Opening Hours</h3>
<p className="text-sm text-stone-600">Daily: 11:00 AM - 11:00 PM</p>
<p className="text-sm text-stone-500 mt-1">Happy Hour: 4:00 PM - 7:00 PM</p>
</div>
</div>
</div>
</div>

<div className="relative h-full min-h-[400px]">
<div className="absolute inset-0 rounded-2xl overflow-hidden bg-stone-100 shadow-lg">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.123456789!2d81.6296!3d21.2514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMore%20Over%20Coffee!5e0!3m2!1sen!2sin!4v1234567890" style={{border: '0', filter: 'grayscale(1) contrast(1.2) opacity(0.8)'}} width="100%">
</iframe>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-xl border border-white/50">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-bold text-stone-900">Reserve a Table</h3>
<p className="text-xs text-stone-500 mt-1">Book your dining experience</p>
</div>
<a className="inline-flex items-center justify-center gap-2 bg-orange-900 hover:bg-orange-950 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all" href="tel:07737283668">
                                Book Now
                            </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 lg:py-24 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="sm:col-span-2 lg:col-span-1">
<a className="inline-block mb-6" href="#home">
<span className="text-3xl font-bold tracking-tight text-white" style={{fontFamily: '\'Playfair Display\', serif'}}>AURELIA</span>
</a>
<p className="text-sm leading-relaxed mb-6">
                        Authentic Italian cuisine crafted with passion and tradition in the heart of Raipur.
                    </p>
<div className="flex gap-4">
<a className="text-white hover:text-orange-400 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-white hover:text-orange-400 transition-colors" href="#">
<svg aria-hidden="true" data-icon="lucide:facebook" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Explore</h4>
<ul className="space-y-3">
<li><a className="text-sm hover:text-white transition-colors" href="#about">Our Story</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#menu">Menu</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#gallery">Gallery</a></li>
<li><a className="text-sm hover:text-white transition-colors" href="#contact">Private Dining</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Visit</h4>
<ul className="space-y-3">
<li className="text-sm">Civil Lines, Raipur</li>
<li className="text-sm">Chhattisgarh 492001</li>
<li className="pt-2"><a className="text-sm text-white hover:text-orange-400 transition-colors" href="tel:07737283668">077372 83668</a></li>
<li className="text-sm">reservations@aurelia.com</li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Opening</h4>
<ul className="space-y-3">
<li className="text-sm flex justify-between"><span>Mon - Thu</span> <span className="text-white">11am - 11pm</span></li>
<li className="text-sm flex justify-between"><span>Fri - Sat</span> <span className="text-white">11am - 12am</span></li>
<li className="text-sm flex justify-between"><span>Sunday</span> <span className="text-white">11am - 11pm</span></li>
</ul>
</div>
</div>
<div className="border-t border-stone-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Aurelia Ristorante. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
