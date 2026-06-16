import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Scroll Stopping Animation Logic (Intersection Observer)
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200/50 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-neutral-900 flex items-center gap-2" href="#">
<i className="w-5 h-5 text-emerald-600" data-lucide="footprints"></i>
                WalkLite®
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#benefits">Benefits</a>
<a className="hover:text-neutral-900 transition-colors" href="#technology">Technology</a>
<a className="hover:text-neutral-900 transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#shop">Log in</a>
<button className="bg-neutral-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md">
                    Shop Now
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="lg:w-1/2 text-center lg:text-left reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                        Doctor Recommended for Diabetic Care
                    </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 text-gradient">
                        Step Lightly.<br/>Live Freely.
                    </h1>
<p className="text-lg text-neutral-600 leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8 font-normal">
                        WalkLite® diabetic socks are engineered with premium bamboo viscose to provide non-binding comfort, moisture control, and superior protection for sensitive feet.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="w-full sm:w-auto bg-neutral-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 group">
                            Shop Collections
                            <i className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto bg-white border border-neutral-200 text-neutral-700 px-8 py-3.5 rounded-full font-medium hover:bg-neutral-50 transition-all">
                            Learn the Science
                        </button>
</div>
<div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-neutral-500">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>
<span>Podiatrist Approved</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="check"></i>
<span>100% Bamboo Viscose</span>
</div>
</div>
</div>
<div className="lg:w-1/2 relative reveal delay-200">
<div className="relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-100 aspect-square lg:aspect-[4/5]">

<img alt="Comfortable Socks" className="object-cover w-full h-full opacity-90 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl border border-white/20 shadow-lg max-w-xs">
<div className="flex items-start gap-3">
<div className="p-2 bg-emerald-100 rounded-lg text-emerald-700">
<i className="w-5 h-5" data-lucide="droplet"></i>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Moisture Wicking</p>
<p className="text-xs text-neutral-500 mt-0.5">Keeps feet dry to prevent infection.</p>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-100/30 blur-3xl rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-200 bg-white py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-400 uppercase tracking-widest mb-8">Trusted by medical professionals worldwide</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 grayscale opacity-60">

<span className="text-xl font-semibold tracking-tighter">MEDICARE+</span>
<span className="text-xl font-bold italic tracking-tight">HealthWalk</span>
<span className="text-xl font-serif tracking-tight">DiabetesUK</span>
<span className="text-xl font-mono tracking-tighter">PODIATRY.CO</span>
<span className="text-xl font-medium tracking-wide">OrthoSole</span>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mx-auto text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Designed for the Diabetic Foot</h2>
<p className="text-neutral-600">Ordinary socks constrict. WalkLite® protects. Every stitch is engineered to minimize risk and maximize freedom.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm relative overflow-hidden group reveal delay-100">
<div className="relative z-10 max-w-md">
<div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mb-6 border border-neutral-100">
<i className="w-6 h-6 text-neutral-900" data-lucide="expand"></i>
</div>
<h3 className="text-xl font-semibold mb-2">Non-Binding Construction</h3>
<p className="text-neutral-500 leading-relaxed">
                            Our "easy-stretch" bamboo viscose tops conform gently to your legs without digging in or restricting circulation. Essential for reducing swelling and maintaining healthy blood flow.
                        </p>
</div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
<i className="w-64 h-64" data-lucide="maximize"></i>
</div>
</div>

<div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm group hover:border-emerald-200 transition-colors reveal delay-200">
<div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mb-6 border border-emerald-100 text-emerald-700">
<i className="w-6 h-6" data-lucide="leaf"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Bamboo Viscose</h3>
<p className="text-sm text-neutral-500">Naturally soft, hypoallergenic, and antibacterial to keep skin healthy.</p>
</div>

<div className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-sm group hover:border-blue-200 transition-colors reveal delay-300">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 border border-blue-100 text-blue-700">
<i className="w-6 h-6" data-lucide="cloud-rain"></i>
</div>
<h3 className="text-lg font-semibold mb-2">Moisture Wicking</h3>
<p className="text-sm text-neutral-500">Pulls sweat away instantly, reducing fungal risk and keeping feet dry.</p>
</div>

<div className="md:col-span-3 bg-neutral-900 rounded-3xl p-8 border border-neutral-800 shadow-sm text-white relative overflow-hidden reveal">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
<div className="max-w-xl">
<div className="flex items-center gap-2 text-emerald-400 mb-4">
<i className="w-5 h-5" data-lucide="layers"></i>
<span className="text-sm font-medium uppercase tracking-wider">Dual-Layer Protection</span>
</div>
<h3 className="text-2xl font-semibold mb-4">Double Padding Technology</h3>
<p className="text-neutral-400">
                                Extra cushioning in the soles and heels acts as a shock absorber for your steps. This critical layer helps prevent the formation of blisters and calluses—the first line of defense against foot ulcers.
                            </p>
</div>
<div className="flex-shrink-0">
<button className="bg-white text-neutral-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
                                View Size Guide
                            </button>
</div>
</div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="technology">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-20">
<div className="lg:w-1/2 relative reveal">
<div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
<img alt="Bamboo Texture" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1533241242324-a7455822f9a7?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-white max-w-xs text-center">
<span className="text-4xl font-semibold block mb-2">40%</span>
<span className="text-sm text-white/80">More absorbent than organic cotton</span>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2 reveal delay-100">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-8">Why Material Matters</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                                1
                            </div>
<div>
<h4 className="text-lg font-medium text-neutral-900 mb-2">Seamless Toe Closure</h4>
<p className="text-neutral-600 text-sm leading-relaxed">Friction is the enemy. Our hand-linked toe seams eliminate the bulky ridges that cause abrasion and irritation.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                                2
                            </div>
<div>
<h4 className="text-lg font-medium text-neutral-900 mb-2">Anatomical Fit</h4>
<p className="text-neutral-600 text-sm leading-relaxed">Designed to stay in place without sliding down or bunching up inside the shoe, preventing pressure points.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                                3
                            </div>
<div>
<h4 className="text-lg font-medium text-neutral-900 mb-2">Thermo-Regulating</h4>
<p className="text-neutral-600 text-sm leading-relaxed">Bamboo fibers expand when warm and contract when cold, maintaining an ideal foot temperature year-round.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200" id="shop">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Invest in Your Foot Health</h2>
<p className="text-neutral-500">Choose the pack that fits your lifestyle. 100% Satisfaction Guarantee.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col reveal delay-100">
<div className="bg-neutral-50 rounded-xl h-48 mb-6 flex items-center justify-center">
<i className="w-12 h-12 text-neutral-300" data-lucide="footprints"></i>
</div>
<div className="mb-auto">
<h3 className="text-lg font-medium text-neutral-900">The Starter Pair</h3>
<p className="text-sm text-neutral-500 mt-1">Perfect for trying out WalkLite.</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-2xl font-semibold text-neutral-900">$14</span>
<span className="text-sm text-neutral-500">/ pair</span>
</div>
</div>
<button className="w-full mt-6 py-3 rounded-lg border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all">Add to Cart</button>
</div>

<div className="bg-white rounded-2xl p-6 border-2 border-emerald-500 shadow-lg relative flex flex-col transform md:-translate-y-4 reveal delay-200">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase">
                        Most Popular
                    </div>
<div className="bg-emerald-50 rounded-xl h-48 mb-6 flex items-center justify-center">
<div className="flex gap-2">
<i className="w-12 h-12 text-emerald-300" data-lucide="footprints"></i>
<i className="w-12 h-12 text-emerald-400" data-lucide="footprints"></i>
<i className="w-12 h-12 text-emerald-300" data-lucide="footprints"></i>
</div>
</div>
<div className="mb-auto">
<h3 className="text-lg font-medium text-neutral-900">The Weekender (3-Pack)</h3>
<p className="text-sm text-neutral-500 mt-1">Daily protection and comfort.</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-2xl font-semibold text-neutral-900">$36</span>
<span className="text-sm text-emerald-600 font-medium ml-2">Save 15%</span>
</div>
</div>
<button className="w-full mt-6 py-3 rounded-lg bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-all shadow-md">Add to Cart</button>
</div>

<div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col reveal delay-300">
<div className="bg-neutral-50 rounded-xl h-48 mb-6 flex items-center justify-center">
<div className="flex flex-wrap gap-2 justify-center px-8">
<i className="w-8 h-8 text-neutral-300" data-lucide="footprints"></i>
<i className="w-8 h-8 text-neutral-300" data-lucide="footprints"></i>
<i className="w-8 h-8 text-neutral-300" data-lucide="footprints"></i>
<i className="w-8 h-8 text-neutral-300" data-lucide="footprints"></i>
<i className="w-8 h-8 text-neutral-300" data-lucide="footprints"></i>
<i className="w-8 h-8 text-neutral-300" data-lucide="footprints"></i>
</div>
</div>
<div className="mb-auto">
<h3 className="text-lg font-medium text-neutral-900">Care Bundle (6-Pack)</h3>
<p className="text-sm text-neutral-500 mt-1">Complete rotation for the week.</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-2xl font-semibold text-neutral-900">$65</span>
<span className="text-sm text-emerald-600 font-medium ml-2">Save 25%</span>
</div>
</div>
<button className="w-full mt-6 py-3 rounded-lg border border-neutral-200 text-sm font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all">Add to Cart</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-neutral-900 mb-6">Prevention is better than cure.</h2>
<p className="text-lg text-neutral-600 mb-10 max-w-2xl mx-auto">
                Join thousands of customers who have switched to WalkLite® for better foot health, reduced pain, and peace of mind.
            </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 px-5 py-3.5 rounded-full border border-neutral-300 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 transition-all text-sm" placeholder="Enter email for 10% off" type="email"/>
<button className="bg-neutral-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-neutral-800 transition-all whitespace-nowrap">
                    Get Started
                </button>
</form>
<p className="text-xs text-neutral-400 mt-4">Free shipping on orders over $50. No spam, ever.</p>
</div>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-50 to-transparent -z-10"></div>
</section>

<footer className="bg-neutral-50 border-t border-neutral-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<a className="text-xl font-semibold tracking-tighter text-neutral-900 flex items-center gap-2 mb-4" href="#">
<i className="w-5 h-5 text-emerald-600" data-lucide="footprints"></i>
                        WalkLite®
                    </a>
<p className="text-sm text-neutral-500 max-w-xs mb-6">
                        Specially designed bamboo viscose socks meeting the unique needs of people with diabetes. Maximum comfort, support, and protection.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4 text-sm">Shop</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Men's Socks</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Women's Socks</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Bundles</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Our Technology</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Medical Reviews</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-emerald-600 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-600 transition-colors" href="#">Shipping &amp; Returns</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">© 2023 WalkLite Inc. All rights reserved.</p>
<div className="flex gap-4">
<i className="w-6 h-6 text-neutral-300" data-lucide="credit-card"></i>

</div>
</div>
</div>
</footer>



    </>
  );
}
