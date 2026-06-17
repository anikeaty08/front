import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple Intersection Observer for reveal animations
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
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-900" href="#">
<iconify-icon className="text-blue-600" height="24" icon="solar:window-frame-linear" width="24"></iconify-icon>
                Lee's Window Cleaning
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
<a className="hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="hover:text-gray-900 transition-colors" href="#about">About</a>
<a className="hover:text-gray-900 transition-colors" href="#reviews">Reviews</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="tel:#">
<iconify-icon height="18" icon="solar:phone-linear" width="18"></iconify-icon>
                    07000 000 000
                </a>
<a className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-sm shadow-blue-600/20 active:scale-95" href="#contact">
                    Get a Quote
                </a>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-white to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<iconify-icon height="14" icon="solar:star-linear" width="14"></iconify-icon>
                        Trusted Local Service
                    </div>
<h1 className="text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Professional Window Cleaning You Can Trust.
                    </h1>
<p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
                        Reliable, friendly and professional window cleaning services for your home. We bring the shine back to your property with attention to detail.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 text-center" href="#contact">
                            Get a Free Quote
                        </a>
<a className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 transition-all text-center" href="#services">
                            Explore Services
                        </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-gray-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">⭐</div>
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">⭐</div>
<div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs">⭐</div>
</div>
<p>Rated 5 stars by local homeowners</p>
</div>
</div>
<div className="relative reveal delay-100 active lg:ml-auto">

<div className="absolute -inset-4 bg-blue-50/50 rounded-[2.5rem] transform rotate-3"></div>
<img alt="Clean modern home exterior" className="relative rounded-3xl shadow-2xl shadow-gray-200/50 w-full max-w-lg object-cover aspect-[4/5]" src="https://gorilladesk.com/wp-content/uploads/2024/12/image1-min-2.png?w=800&amp;q=80"/>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-gray-900">Fully Insured</p>
<p className="text-xs text-gray-500">Guaranteed quality</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-[#FAFAFA] border-t border-gray-100" id="about">
<div className="max-w-7xl mx-auto px-6 text-center max-w-3xl reveal">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">About Lee's Window Cleaning</h2>
<p className="text-lg text-gray-600 leading-relaxed">
                Lee's Window Cleaning Services is dedicated to delivering high quality window cleaning with attention to detail. The team prides itself on being friendly, professional, and dependable, ensuring every job is completed to the highest standard. We don't just clean windows; we care for your property.
            </p>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Our Services</h2>
<p className="text-gray-600 max-w-2xl mx-auto">Comprehensive exterior cleaning solutions to keep your home looking its absolute best year-round.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 reveal">
<div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:window-frame-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Window Cleaning</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Exterior window cleaning
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Regular maintenance cleans
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Streak-free professional finish
                        </li>
</ul>
</div>

<div className="group bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 reveal delay-100">
<div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:home-angle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Soffit &amp; Fascia</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Restore original appearance
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Remove ingrained dirt
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Clear green algae buildup
                        </li>
</ul>
</div>

<div className="group bg-[#FAFAFA] rounded-3xl p-8 border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 reveal delay-200">
<div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="28" icon="solar:waterdrop-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-4">Gutter Cleaning</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Clear blocked gutters
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Remove leaves and debris
                        </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-blue-500 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            Prevent costly water damage
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="reveal">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6 text-white">Why Choose Us</h2>
<p className="text-gray-400 mb-8 text-lg">We've built our reputation on being a local business that puts the customer first, delivering consistent quality every time.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium">Reliable and punctual</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium">Friendly professional service</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium">Competitive pricing</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium">Attention to detail</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-blue-400" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm font-medium">Trusted by local customers</span>
</div>
</div>
</div>
<div className="relative rounded-3xl overflow-hidden reveal delay-100 hidden md:block h-full min-h-[400px]">
<img alt="Clean windows reflecting sky" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://alinasadventuresinhomemaking.com/wp-content/uploads/2022/07/A-TO-Z-1.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Customer Reviews</h2>
<p className="text-gray-600">Don't just take our word for it. See what our customers say.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm reveal">
<div className="text-yellow-400 mb-4 text-sm tracking-widest">⭐️⭐️⭐️⭐️⭐️</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"I contacted these guys to get my windows cleaned—really impressed! They turned up on time, did a great job, and were both friendly and professional. Their prices were competitive, and I especially appreciated their can-do attitude and eye for detail. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-semibold text-sm">NT</div>
<div className="text-sm font-medium text-gray-900">Nick Taylor</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm reveal delay-100">
<div className="text-yellow-400 mb-4 text-sm tracking-widest">⭐️⭐️⭐️⭐️⭐️</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"Very friendly and reliable team. Lee's Windows do my regular window clean and recently cleaned my soffit and facias and done a great job as usual. Would highly recommend."</p>
<div className="flex items-center gap-3 mt-auto">
<div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center font-semibold text-sm">RP</div>
<div className="text-sm font-medium text-gray-900">Rhiannon Porter</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm reveal">
<div className="text-yellow-400 mb-4 text-sm tracking-widest">⭐️⭐️⭐️⭐️⭐️</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"I'm a new customer and had been trying to get my windows cleaned for a long time but had been let down by a number of local window cleaners. However not the case with Lee's. Responded quickly to my initial request, came and quoted and was honest and professional."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center font-semibold text-sm">LT</div>
<div className="text-sm font-medium text-gray-900">Laura Taylor</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm reveal delay-100">
<div className="text-yellow-400 mb-4 text-sm tracking-widest">⭐️⭐️⭐️⭐️⭐️</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed">"Excellent service. My windows always look great after they have been done. I have had my guttering cleared and cleaned in the past too. Would highly recommend."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center font-semibold text-sm">RH</div>
<div className="text-sm font-medium text-gray-900">Rosie Harris</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="reveal">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-6">Ready for clearer views?</h2>
<p className="text-gray-600 mb-10 text-lg">Contact us today to arrange a free, no-obligation quote for your property.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 shrink-0">
<iconify-icon height="24" icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-500 mb-1">Call us</p>
<p className="text-lg font-medium text-gray-900">07000 000 000</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 shrink-0">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-500 mb-1">Email us</p>
<p className="text-lg font-medium text-gray-900">hello@leeswindows.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 shrink-0">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-500 mb-1">Service Area</p>
<p className="text-lg font-medium text-gray-900">Local Area &amp; Surrounding Towns</p>
</div>
</div>
</div>
</div>

<div className="bg-[#FAFAFA] p-8 md:p-10 rounded-3xl border border-gray-100 reveal delay-100">
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">First Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm transition-all focus:border-blue-500" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">Last Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm transition-all focus:border-blue-500" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">Email Address</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm transition-all focus:border-blue-500" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">Service Required</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm transition-all focus:border-blue-500 appearance-none text-gray-600">
<option>Window Cleaning</option>
<option>Soffit &amp; Fascia Cleaning</option>
<option>Gutter Cleaning</option>
<option>Multiple Services</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">Message (Optional)</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm transition-all focus:border-blue-500 resize-none" placeholder="Tell us about your property..." rows="4"></textarea>
</div>
<button className="w-full bg-blue-600 text-white px-6 py-4 rounded-xl text-sm font-medium hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20 active:scale-[0.98]" type="button">
                            Get Your Free Quote Today
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
<div className="flex items-center gap-2 font-semibold text-gray-900 tracking-tight">
<iconify-icon className="text-blue-600" height="20" icon="solar:window-frame-linear" width="20"></iconify-icon>
                Lee's Window Cleaning
            </div>
<div className="flex gap-6">
<a className="hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="hover:text-gray-900 transition-colors" href="#about">About</a>
<a className="hover:text-gray-900 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-gray-900 transition-colors" href="#contact">Contact</a>
</div>
<div>
                © 2024 Lee's Window Cleaning. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
