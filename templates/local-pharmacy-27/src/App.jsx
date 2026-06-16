import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icons
        lucide.createIcons();

        // Reveal Animation on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#FBF9F6]/80 backdrop-blur-md border-b border-stone-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center">
<span className="text-xl font-bold tracking-tight text-emerald-950">Live Oak Pharmacy</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-stone-600">
<a className="hover:text-emerald-900 transition-colors" href="#about">About Us</a>
<a className="hover:text-emerald-900 transition-colors" href="#services">Services</a>
<a className="hover:text-emerald-900 transition-colors" href="#app">Mobile App</a>
<a className="hover:text-emerald-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex text-emerald-900 font-medium text-sm gap-2 items-center" href="tel:9725321008">
<i className="w-4 h-4" data-lucide="phone"></i> 972-532-1008
                </a>
<a className="hidden md:inline-flex bg-emerald-900 text-[#FBF9F6] px-5 py-2.5 rounded-full text-base font-medium hover:bg-emerald-800 transition-all hover:scale-[1.02] shadow-lg shadow-emerald-900/10" href="https://patient.rxlocal.com" target="_blank">
                    Refill Rx
                </a>
</div>
</div>
</nav>

<header className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/50 text-emerald-900 rounded-full text-sm font-medium mb-6 border border-emerald-200/50">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Serving Plano &amp; All of DFW
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-emerald-950 leading-[1.1] mb-8">
                    Locally owned. <br/> Personally focused.
                </h1>
<p className="text-xl text-stone-600 leading-relaxed max-w-lg mb-10 font-normal">
                    More than just filling prescriptions. We help manage your health with <span className="italic serif text-emerald-800 font-medium">free delivery</span>, smart app tools, and competitive prices.
                </p>
<div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
<a className="bg-emerald-900 text-[#FBF9F6] px-8 py-4 rounded-full text-lg font-medium hover:bg-emerald-800 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2" href="#transfer">
                        Transfer to Us
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<div className="flex items-center gap-4 px-6 py-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#FBF9F6]" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#FBF9F6]" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-10 h-10 rounded-full border-2 border-[#FBF9F6] bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-800">4.9</div>
</div>
<div className="text-sm font-medium text-stone-600">
<span className="text-emerald-900 font-bold">Trusted</span> by locals
                        </div>
</div>
</div>

<div className="flex flex-wrap gap-x-8 gap-y-2 text-stone-500 text-sm font-medium pt-8 border-t border-stone-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="check-circle"></i> Powered by PioneerRx
                    </div>
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700 fill-emerald-700" data-lucide="map-pin"></i> 2105 Spring Creek Pkwy
                    </div>
</div>
</div>

<div className="relative lg:h-[600px] reveal delay-200 hidden lg:block">

<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-2xl">
<img alt="Pharmacist helping patient" className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1576602976047-174e57a47881?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
</div>

<div className="absolute top-12 -left-8 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl border border-white/50 animate-float max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700">
<i className="w-4 h-4" data-lucide="truck"></i>
</div>
<div>
<div className="text-xs text-stone-500 font-medium">Local Delivery</div>
<div className="text-sm font-semibold text-emerald-950">Free in Texas</div>
</div>
</div>
<div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-full rounded-full"></div>
</div>
</div>

<div className="absolute bottom-24 -right-8 bg-white/95 backdrop-blur rounded-2xl p-5 shadow-xl border border-white/50 animate-float-delayed">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden bg-emerald-50 flex items-center justify-center text-emerald-900">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<div>
<p className="text-sm font-medium text-stone-900">"Refills are so easy."</p>
<div className="flex text-emerald-500 mt-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 mx-2 md:mx-6 bg-white rounded-[3rem] shadow-sm border border-stone-100 relative overflow-hidden" id="about">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-stone-100 rounded-full blur-3xl"></div>
<div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] bg-emerald-50 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-16 text-center max-w-3xl mx-auto reveal">
                Big chain pharmacies treat you like a number. <br/> <span className="italic serif text-stone-400">We treat you like family.</span>
</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<h3 className="text-2xl font-medium text-emerald-950 mb-3 tracking-tight">Respect for your time.</h3>
<p className="text-lg text-stone-600 leading-relaxed">No endless lines. Fast processing and free delivery means you get your meds when you need them.</p>
</div>

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal delay-100">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="badge-dollar-sign"></i>
</div>
<h3 className="text-2xl font-medium text-emerald-950 mb-3 tracking-tight">Competitive Prices.</h3>
<p className="text-lg text-stone-600 leading-relaxed">We accept most major insurance plans and offer competitive pricing to ensure your health is affordable.</p>
</div>

<div className="bg-[#FBF9F6]/80 backdrop-blur p-10 rounded-3xl group hover:bg-[#FBF9F6] transition-colors reveal delay-200">
<div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 text-stone-600 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-2xl font-medium text-emerald-950 mb-3 tracking-tight">Real Relationships.</h3>
<p className="text-lg text-stone-600 leading-relaxed">We review your history, check for interactions, and actually answer the phone when you call.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-medium text-emerald-950 tracking-tight mb-6">
                        Complete Pharmacy Care
                    </h2>
<p className="text-xl text-stone-600 leading-relaxed mb-8">
                        We provide services and products to our patients in a manner that maximizes our community's welfare. We work together to take an active role in your healthcare.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4">
<img alt="Vitamins" className="w-20 h-20 rounded-2xl object-cover shadow-sm" src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="flex-1">
<h4 className="font-medium text-emerald-950">Vitamins &amp; Supplements</h4>
<p className="text-sm text-stone-500">High-quality wellness products.</p>
</div>
</div>
<div className="flex items-center gap-4">
<img alt="Pills" className="w-20 h-20 rounded-2xl object-cover shadow-sm" src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div className="flex-1">
<h4 className="font-medium text-emerald-950">Prescription Services</h4>
<p className="text-sm text-stone-500">Expert counseling and management.</p>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xl reveal delay-100 transform rotate-1 hover:rotate-0 transition-transform duration-500">
<div className="grid grid-cols-2 text-lg text-center font-medium border-b border-stone-100">
<div className="py-6 text-stone-400 bg-stone-50/50">Chain Store</div>
<div className="py-6 text-emerald-900 bg-emerald-50/30 font-semibold">Live Oak</div>
</div>
<div className="divide-y divide-stone-100">
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-sm md:text-base">Long lines</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-sm md:text-base">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
                                Fast Service
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-sm md:text-base">Robocall support</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-sm md:text-base">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
                                Human Support
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-sm md:text-base">Drive-thru only</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-sm md:text-base">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
                                Free Delivery
                            </div>
</div>
<div className="grid grid-cols-2 py-5 px-6 items-center group hover:bg-stone-50 transition-colors">
<div className="text-stone-500 text-sm md:text-base">Corporate focus</div>
<div className="text-emerald-900 font-medium flex items-center gap-2 text-sm md:text-base">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2"></i>
                                Locally Owned
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 mx-2 md:mx-6 rounded-[3rem] relative overflow-hidden" id="app">

<div className="absolute inset-0">
<img alt="Background" className="w-full h-full object-cover grayscale brightness-[0.3]" src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-emerald-950/80 mix-blend-multiply"></div>
</div>
<div className="max-w-7xl mx-auto relative z-10 text-[#FBF9F6]">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-center reveal">Pharmacy in your pocket</h2>
<p className="text-lg text-emerald-100/70 text-center max-w-2xl mx-auto mb-20 reveal">
                Download the <strong>RxLocal</strong> app to manage your entire family's health from your smartphone.
            </p>
<div className="grid md:grid-cols-4 gap-12 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-white/10 z-0"></div>

<div className="relative z-10 reveal delay-100">
<div className="w-12 h-12 bg-white text-emerald-900 rounded-full flex items-center justify-center font-serif text-xl font-medium mb-6 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
<i className="w-5 h-5" data-lucide="pill"></i>
</div>
<h3 className="text-2xl font-medium mb-4">Manage</h3>
<p className="text-lg text-emerald-100/70 leading-relaxed">
                        Manage your family’s medicine profile in one secure place.
                    </p>
</div>

<div className="relative z-10 reveal delay-200">
<div className="w-12 h-12 bg-emerald-800 border border-emerald-600 text-emerald-100 rounded-full flex items-center justify-center font-serif text-xl font-medium mb-6">
<i className="w-5 h-5" data-lucide="bell"></i>
</div>
<h3 className="text-2xl font-medium mb-4">Reminders</h3>
<p className="text-lg text-emerald-100/70 leading-relaxed">
                        Set medication reminders so you never miss a dose.
                    </p>
</div>

<div className="relative z-10 reveal delay-300">
<div className="w-12 h-12 bg-emerald-800 border border-emerald-600 text-emerald-100 rounded-full flex items-center justify-center font-serif text-xl font-medium mb-6">
<i className="w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<h3 className="text-2xl font-medium mb-4">Refill</h3>
<p className="text-lg text-emerald-100/70 leading-relaxed">
                        Order refills instantly with just a few taps on your screen.
                    </p>
</div>

<div className="relative z-10 reveal delay-400">
<div className="w-12 h-12 bg-emerald-800 border border-emerald-600 text-emerald-100 rounded-full flex items-center justify-center font-serif text-xl font-medium mb-6">
<i className="w-5 h-5" data-lucide="message-square"></i>
</div>
<h3 className="text-2xl font-medium mb-4">Chat</h3>
<p className="text-lg text-emerald-100/70 leading-relaxed">
                        Message our pharmacy team directly for quick questions.
                    </p>
</div>
</div>
<div className="flex justify-center gap-4 mt-16 reveal delay-500">
<a className="hover:scale-105 transition-transform" href="https://itunes.apple.com/us/app/rxlocal/id437564871?mt=8"><img alt="App Store" className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"/></a>
<a className="hover:scale-105 transition-transform" href="https://play.google.com/store/apps/details?id=com.newtechsys.rxlocalmobile&amp;hl=en_US"><img alt="Google Play" className="h-12" src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"/></a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-200" id="services">
<div className="max-w-5xl mx-auto text-center reveal">
<h2 className="text-4xl font-medium text-emerald-950 tracking-tight mb-12">Services Tailored to You</h2>
<div className="flex flex-wrap justify-center gap-4 mb-12">
<span className="px-6 py-3 rounded-full bg-stone-50 border border-stone-200 text-lg text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Free Texas Delivery</span>
<span className="px-6 py-3 rounded-full bg-stone-50 border border-stone-200 text-lg text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">24/7 Refill</span>
<span className="px-6 py-3 rounded-full bg-stone-50 border border-stone-200 text-lg text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Vitamins &amp; Supplements</span>
<span className="px-6 py-3 rounded-full bg-stone-50 border border-stone-200 text-lg text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Immunizations</span>
<span className="px-6 py-3 rounded-full bg-stone-50 border border-stone-200 text-lg text-stone-700 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-900 transition-colors cursor-default">Prescription Mgmt</span>
</div>
<a className="inline-flex items-center gap-2 text-emerald-900 font-medium text-lg hover:underline underline-offset-4 decoration-emerald-500" href="#contact">
                Have questions? Contact us today
                <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<section className="py-24 px-6 mx-2 md:mx-6 bg-gradient-to-br from-emerald-50 to-[#FBF9F6] rounded-[3rem] border border-stone-100">
<div className="max-w-5xl mx-auto">
<h2 className="text-4xl font-medium text-emerald-950 tracking-tight mb-12 text-center reveal">Everything you need. <br/><span className="text-stone-400 font-normal serif italic">Nothing you don't.</span></h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal delay-100">
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="clock"></i></div>
<div>
<span className="block text-lg text-stone-700 font-medium">Mon-Fri: 9am - 6pm</span>
<span className="text-sm text-stone-500">Sat: 10am-2pm | Sun: Closed</span>
</div>
</div>
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="truck"></i></div>
<span className="text-lg text-stone-700">Free Delivery (Texas)</span>
</div>
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="file-check"></i></div>
<span className="text-lg text-stone-700">Major Insurance Accepted</span>
</div>
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="smartphone"></i></div>
<span className="text-lg text-stone-700">RxLocal App Access</span>
</div>
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="users"></i></div>
<span className="text-lg text-stone-700">Locally Owned</span>
</div>
<div className="flex items-center gap-4 p-5 bg-white rounded-2xl shadow-sm border border-emerald-100/50 hover:-translate-y-1 transition-transform">
<div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700"><i className="w-5 h-5" data-lucide="pill"></i></div>
<span className="text-lg text-stone-700">Synchronized Refills</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-200" id="contact">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
<div className="reveal">
<h2 className="text-5xl md:text-6xl font-medium text-emerald-950 tracking-tight mb-6 leading-tight">
                    Visit us today.
                </h2>
<div className="space-y-6 text-lg text-stone-600 mb-10">
<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-emerald-900 shrink-0 mt-1" data-lucide="map-pin"></i>
<p>2105 Spring Creek Pkwy #325<br/>Plano, TX 75023</p>
</div>
<div className="flex gap-4 items-center">
<i className="w-6 h-6 text-emerald-900 shrink-0" data-lucide="phone"></i>
<p>972-532-1008</p>
</div>
<div className="flex gap-4 items-start">
<i className="w-6 h-6 text-emerald-900 shrink-0 mt-1" data-lucide="clock"></i>
<div>
<p>Mon-Fri: 9:00AM - 6:00PM</p>
<p>Sat: 10:00AM - 2:00PM</p>
<p className="text-stone-400">Sun: Closed</p>
</div>
</div>
</div>
</div>
<div className="bg-[#FBF9F6] p-8 md:p-10 rounded-3xl border border-stone-100 shadow-xl reveal delay-100 relative">
<div className="absolute -top-6 -right-6 w-24 h-24 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>
<form className="space-y-5 relative z-10">
<h3 className="text-2xl font-medium text-emerald-950 mb-2">Send us a message</h3>
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 ml-1">First Name</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all placeholder:text-stone-300" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 ml-1">Last Name</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all placeholder:text-stone-300" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 ml-1">Email</label>
<input className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all placeholder:text-stone-300" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-500 ml-1">Subject</label>
<div className="relative">
<select className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-900/10 focus:border-emerald-900 transition-all text-stone-600 appearance-none">
<option>General Inquiry</option>
<option>Prescription Transfer</option>
<option>Delivery Question</option>
<option>Feedback</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<button className="w-full bg-emerald-900 text-white font-medium text-lg py-4 rounded-xl mt-4 hover:bg-emerald-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform" type="button">
                        Send Message
                    </button>
<p className="text-center text-sm text-stone-400 mt-4 flex items-center justify-center gap-2">
<i className="w-3 h-3" data-lucide="lock"></i> Secure &amp; Confidential
                    </p>
</form>
</div>
</div>
</section>

<footer className="py-12 text-center text-stone-400 text-sm border-t border-stone-200 bg-[#FBF9F6]">
<div className="mb-8">
<i className="w-6 h-6 mx-auto text-emerald-900 mb-2" data-lucide="tree-pine"></i>
</div>
<p className="font-medium tracking-wide text-stone-500 mb-4">LIVE OAK PHARMACY</p>
<p>Locally Owned. Serving all of DFW.</p>
<p className="mt-8">© 2024 Live Oak Pharmacy. All rights reserved.</p>
</footer>


    </>
  );
}
