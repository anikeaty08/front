import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            // Scroll Animation Observer
            const observerOptions = {
                root: null,
                rootMargin: "0px",
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal:not(.hero-reveal)').forEach((element) => {
                observer.observe(element);
            });

            setTimeout(() => {
                document.querySelectorAll('.hero-reveal').forEach((element) => {
                    element.classList.add('active');
                });
            }, 100);

            // Auth Modal Logic
            const authModal = document.getElementById('auth-modal');
            const authBackdrop = document.getElementById('auth-backdrop');
            const authBox = document.getElementById('auth-box');
            const authTriggers = document.querySelectorAll('.auth-trigger');
            const authClose = document.getElementById('auth-close');
            
            const loginView = document.getElementById('login-view');
            const registerView = document.getElementById('register-view');
            const showRegisterBtn = document.getElementById('show-register');
            const showLoginBtn = document.getElementById('show-login');

            function openModal() {
                authModal.classList.remove('hidden');
                authModal.classList.add('flex');
                
                // Force reflow
                void authModal.offsetWidth;
                
                authBackdrop.classList.remove('opacity-0');
                authBackdrop.classList.add('opacity-100');
                authBox.classList.remove('opacity-0', 'translate-y-4');
                authBox.classList.add('opacity-100', 'translate-y-0');
            }

            function closeModal() {
                authBackdrop.classList.remove('opacity-100');
                authBackdrop.classList.add('opacity-0');
                authBox.classList.remove('opacity-100', 'translate-y-0');
                authBox.classList.add('opacity-0', 'translate-y-4');
                
                setTimeout(() => {
                    authModal.classList.remove('flex');
                    authModal.classList.add('hidden');
                    
                    // Reset to login view
                    setTimeout(() => {
                        registerView.classList.add('hidden');
                        loginView.classList.remove('hidden');
                    }, 100);
                }, 300);
            }

            authTriggers.forEach(btn => btn.addEventListener('click', openModal));
            authClose.addEventListener('click', closeModal);
            authBackdrop.addEventListener('click', closeModal);

            // Toggle Views
            showRegisterBtn.addEventListener('click', () => {
                loginView.classList.add('hidden');
                registerView.classList.remove('hidden');
            });

            showLoginBtn.addEventListener('click', () => {
                registerView.classList.add('hidden');
                loginView.classList.remove('hidden');
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-zinc-900 text-zinc-100 text-xs py-2.5 px-4 text-center flex items-center justify-center font-medium tracking-wide">
<span>Complimentary global shipping on all orders over $200</span>
</div>

<header className="sticky top-0 z-40 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
<button className="flex items-center sm:hidden text-zinc-900 hover:text-zinc-500 transition-colors">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<nav className="hidden sm:flex items-center gap-8 flex-1">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Shop</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Collections</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Editorial</a>
</nav>
<a className="text-2xl font-semibold tracking-tighter uppercase text-zinc-900 flex-shrink-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2" href="#">
                SNAD
            </a>
<div className="flex items-center justify-end gap-5 sm:gap-6 text-zinc-900 flex-1">
<button className="hidden sm:flex hover:text-zinc-500 transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="hidden sm:flex hover:text-zinc-500 transition-colors auth-trigger">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex hover:text-zinc-500 transition-colors relative group">
<iconify-icon className="text-xl group-hover:scale-105 transition-transform" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-white text-xs scale-75 origin-center font-medium">2</span>
</button>
</div>
</div>
</header>
<main className="flex-grow">
<section className="relative h-[85vh] min-h-[600px] w-full bg-zinc-100 flex items-center justify-center overflow-hidden">
<img alt="SNAD Autumn Collection" className="absolute inset-0 w-full h-full object-cover object-center animate-hero-bg" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40"></div>
<div className="relative z-10 text-center px-4 flex flex-col items-center mt-32 sm:mt-48">
<h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 drop-shadow-sm hero-reveal reveal">Core Elements</h1>
<p className="text-base sm:text-lg text-zinc-100 mb-10 max-w-lg font-medium drop-shadow-sm hero-reveal reveal delay-100">Redefining the modern uniform with meticulous construction and uncompromising quality.</p>
<a className="bg-white text-zinc-900 px-8 py-3.5 text-sm font-medium rounded-sm hover:bg-zinc-100 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-black/10 hero-reveal reveal delay-200" href="#">
                    Explore Collection
                </a>
</div>
</section>
<section className="py-20 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-12 reveal">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">Wardrobe Foundations</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
<a className="group relative aspect-[4/5] overflow-hidden bg-zinc-100 rounded-sm block reveal delay-100" href="#">
<img alt="Outerwear" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
<h3 className="text-white text-xl font-medium tracking-tight">Outerwear</h3>
<div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-colors duration-300">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>
<a className="group relative aspect-[4/5] overflow-hidden bg-zinc-100 rounded-sm block reveal delay-200" href="#">
<img alt="Knitwear" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
<h3 className="text-white text-xl font-medium tracking-tight">Knitwear</h3>
<div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-colors duration-300">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>
<a className="group relative aspect-[4/5] overflow-hidden bg-zinc-100 rounded-sm block sm:hidden lg:block reveal delay-300" href="#">
<img alt="Bottoms" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
<h3 className="text-white text-xl font-medium tracking-tight">Trousers</h3>
<div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-colors duration-300">
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</a>
</div>
</section>
<section className="py-20 sm:py-32 bg-zinc-50 border-t border-zinc-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between mb-12 reveal">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">New Arrivals</h2>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors flex items-center gap-1 group" href="#">
                        View Complete List
                        <iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-8 sm:gap-y-12">
<div className="group cursor-pointer flex flex-col relative reveal delay-100">
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-200 rounded-sm mb-4">
<img alt="Product" className="object-cover w-full h-full object-center group-hover:opacity-90 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full bg-white/95 backdrop-blur-sm text-zinc-900 py-3 text-sm font-medium rounded-sm hover:bg-zinc-900 hover:text-white transition-colors shadow-sm">
                                    Quick Add
                                </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 leading-tight">Structured Cotton Mac</h3>
<p className="text-sm text-zinc-500 mt-1">Bone</p>
<p className="text-sm font-medium text-zinc-900 mt-3">$280</p>
</div>
</div>
<div className="group cursor-pointer flex flex-col relative reveal delay-200">
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-200 rounded-sm mb-4">
<img alt="Product" className="object-cover w-full h-full object-center group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full bg-white/95 backdrop-blur-sm text-zinc-900 py-3 text-sm font-medium rounded-sm hover:bg-zinc-900 hover:text-white transition-colors shadow-sm">
                                    Quick Add
                                </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 leading-tight">Heavyweight Basic Tee</h3>
<p className="text-sm text-zinc-500 mt-1">Washed Black</p>
<p className="text-sm font-medium text-zinc-900 mt-3">$55</p>
</div>
</div>
<div className="group cursor-pointer flex flex-col relative reveal delay-300">
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-200 rounded-sm mb-4">
<img alt="Product" className="object-cover w-full h-full object-center group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-zinc-900 text-white text-xs px-2 py-1 rounded-sm font-medium z-10">New</div>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full bg-white/95 backdrop-blur-sm text-zinc-900 py-3 text-sm font-medium rounded-sm hover:bg-zinc-900 hover:text-white transition-colors shadow-sm">
                                    Quick Add
                                </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 leading-tight">Relaxed Oxford Shirt</h3>
<p className="text-sm text-zinc-500 mt-1">Sky Blue</p>
<p className="text-sm font-medium text-zinc-900 mt-3">$110</p>
</div>
</div>
<div className="group cursor-pointer flex flex-col relative reveal delay-400">
<div className="relative aspect-[3/4] overflow-hidden bg-zinc-200 rounded-sm mb-4">
<img alt="Product" className="object-cover w-full h-full object-center group-hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out z-10">
<button className="w-full bg-white/95 backdrop-blur-sm text-zinc-900 py-3 text-sm font-medium rounded-sm hover:bg-zinc-900 hover:text-white transition-colors shadow-sm">
                                    Quick Add
                                </button>
</div>
</div>
<div className="flex flex-col flex-grow">
<h3 className="text-sm font-medium text-zinc-900 leading-tight">Pleated Wide Trousers</h3>
<p className="text-sm text-zinc-500 mt-1">Charcoal</p>
<p className="text-sm font-medium text-zinc-900 mt-3">$145</p>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
<div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center reveal">
<span className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-4 block">Our Philosophy</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">Designed for longevity.</h2>
<p className="text-base text-zinc-600 mb-10 leading-relaxed max-w-md">
                        We believe in creating garments that transcend seasonal trends. Every piece is meticulously crafted using premium materials, ensuring they become enduring staples in your wardrobe. Our commitment is rooted in quality, intentional simplicity, and considered design.
                    </p>
<a className="inline-flex items-center text-sm font-medium text-zinc-900 border-b border-zinc-300 pb-1 self-start hover:text-zinc-500 hover:border-zinc-500 transition-colors group" href="#">
                        Read Our Story
                        <iconify-icon className="ml-2 text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 order-1 lg:order-2 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] bg-zinc-100 rounded-sm overflow-hidden relative reveal delay-200">
<img alt="Editorial" className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>
</main>
<footer className="bg-zinc-950 text-zinc-400 py-16 sm:py-24 border-t border-zinc-900 mt-auto overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
<div className="lg:col-span-4 pr-4 reveal">
<span className="text-3xl font-semibold tracking-tighter uppercase text-white mb-6 block">SNAD</span>
<p className="text-sm text-zinc-500 max-w-xs leading-relaxed mb-6">
                        Elevated essentials crafted for the modern individual. Prioritizing fabric, fit, and form over fast fashion.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="lg:col-span-2 lg:col-start-6 reveal delay-100">
<h4 className="text-sm font-medium text-white mb-6 tracking-wide">Shop</h4>
<ul className="space-y-3.5 text-sm">
<li><a className="hover:text-white transition-colors" href="#">All Products</a></li>
<li><a className="hover:text-white transition-colors" href="#">New Arrivals</a></li>
<li><a className="hover:text-white transition-colors" href="#">Outerwear</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tops</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bottoms</a></li>
</ul>
</div>
<div className="lg:col-span-2 reveal delay-200">
<h4 className="text-sm font-medium text-white mb-6 tracking-wide">Support</h4>
<ul className="space-y-3.5 text-sm">
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Shipping &amp; Returns</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Size Guide</a></li>
</ul>
</div>
<div className="lg:col-span-4 reveal delay-300">
<h4 className="text-sm font-medium text-white mb-4 tracking-wide">Newsletter</h4>
<p className="text-sm text-zinc-500 mb-6 leading-relaxed">Subscribe to receive early access to new collections and exclusive editorial content.</p>
<form className="flex flex-col sm:flex-row gap-3 relative" onsubmit="event.preventDefault();">
<div className="relative flex-grow">
<iconify-icon className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 text-lg" icon="solar:letter-linear"></iconify-icon>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 focus:bg-zinc-900 transition-all" placeholder="Email address" required="" type="email"/>
</div>
<button className="bg-white text-zinc-900 px-6 py-3 text-sm font-medium rounded-sm hover:bg-zinc-200 transition-colors whitespace-nowrap shadow-sm" type="submit">
                            Subscribe
                        </button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800/50 text-xs text-zinc-500 reveal delay-400">
<p>© 2024 SNAD. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="auth-modal">

<div className="absolute inset-0 bg-zinc-900/40 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="auth-backdrop"></div>

<div className="relative bg-white w-full max-w-[420px] p-8 shadow-2xl opacity-0 translate-y-4 transition-all duration-300 rounded-sm" id="auth-box">
<button className="absolute top-5 right-5 text-zinc-400 hover:text-zinc-900 transition-colors p-1" id="auth-close">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>

<div className="block" id="login-view">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">Welcome back</h2>
<p className="text-sm text-zinc-500 mb-8">Enter your details to access your account.</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Email address</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-2.5 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors" placeholder="name@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Password</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-2.5 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-2 cursor-pointer custom-checkbox">
<input className="sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded-sm flex items-center justify-center transition-colors">
<iconify-icon className="text-white text-xs opacity-0 transition-opacity" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-600">Remember me</span>
</label>
<a className="text-xs font-medium text-zinc-900 hover:text-zinc-500 transition-colors" href="#">Forgot password?</a>
</div>
<button className="w-full bg-zinc-900 text-white text-sm font-medium py-3 rounded-sm hover:bg-zinc-800 transition-colors mt-6 shadow-sm" type="submit">
                        Sign In
                    </button>
</form>
<div className="mt-8 text-center">
<p className="text-sm text-zinc-500">
                        Don't have an account? 
                        <button className="font-medium text-zinc-900 hover:text-zinc-500 transition-colors ml-1" id="show-register">Create one</button>
</p>
</div>
</div>

<div className="hidden" id="register-view">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-2">Create an account</h2>
<p className="text-sm text-zinc-500 mb-8">Join us to receive exclusive benefits and track your orders.</p>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">First name</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-2.5 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors" placeholder="John" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Last name</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-2.5 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Email address</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-2.5 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors" placeholder="name@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Password</label>
<input className="w-full text-sm bg-zinc-50 border border-zinc-200 rounded-sm px-3 py-2.5 focus:outline-none focus:border-zinc-900 focus:bg-white transition-colors" placeholder="Create a password" required="" type="password"/>
</div>
<button className="w-full bg-zinc-900 text-white text-sm font-medium py-3 rounded-sm hover:bg-zinc-800 transition-colors mt-6 shadow-sm" type="submit">
                        Create Account
                    </button>
</form>
<div className="mt-8 text-center">
<p className="text-sm text-zinc-500">
                        Already have an account? 
                        <button className="font-medium text-zinc-900 hover:text-zinc-500 transition-colors ml-1" id="show-login">Sign in</button>
</p>
</div>
</div>
</div>
</div>



    </>
  );
}
