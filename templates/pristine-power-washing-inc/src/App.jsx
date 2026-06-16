import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Lato', 'sans-serif'],
display: ['Abel', 'sans-serif'],
},
colors: {
brand: {
blue: '#0080bb',
orange: '#fe9800',
dark: '#353535',
gray: '#444444'
}
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-brand-blue text-white text-xs py-2 hidden md:block border-b border-brand-orange">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="flex gap-6 font-medium tracking-wide">
<a className="flex items-center gap-2 hover:text-brand-orange transition-colors" href="tel:7812198012">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                    781-219-8012
                </a>
<a className="flex items-center gap-2 hover:text-brand-orange transition-colors" href="mailto:info@pristinepowerwashinginc.com">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                    info@pristinepowerwashinginc.com
                </a>
<span className="flex items-center gap-2 text-brand-orange">
<iconify-icon icon="solar:verified-check-linear" width="16"></iconify-icon>
                    FREE ESTIMATES
                </span>
</div>
<div className="flex gap-4">
<a className="hover:text-brand-orange transition-colors" href="http://www.facebook.com/PristinePowerWashing%20" target="_blank"><iconify-icon icon="logos:facebook" style={{filter: 'brightness(0) invert(1)'}} width="14"></iconify-icon></a>
<a className="hover:text-brand-orange transition-colors" href="https://www.yelp.com/biz/pristine-power-washing-inc-woburn" target="_blank"><iconify-icon icon="logos:yelp" width="14"></iconify-icon></a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center" href="#">
<img alt="Pristine Power Washing Inc" className="h-14 w-auto object-contain" src="https://pristinepowerwashinginc.com/wp-content/uploads/2025/01/Pristine-Logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-brand-blue hover:text-brand-orange transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors" href="#portfolio">Portfolio</a>
<a className="bg-brand-blue hover:bg-brand-orange text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-lg shadow-brand-blue/20 transition-all hover:-translate-y-0.5" href="#contact">
                    Contact Us
                </a>
</div>

<button className="lg:hidden text-brand-blue p-2" onclick="toggleMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl p-6 flex-col gap-4 lg:hidden" id="mobile-menu">
<a className="text-lg font-medium text-brand-blue" href="#">Home</a>
<a className="text-lg font-medium text-slate-700" href="#about">About</a>
<a className="text-lg font-medium text-slate-700" href="#services">Services</a>
<a className="text-lg font-medium text-slate-700" href="#portfolio">Portfolio</a>
<a className="text-lg font-medium text-brand-orange" href="#contact">Contact Us</a>
</div>
</nav>

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Pristine Power Washing Truck" className="w-full h-full object-cover" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/Desktop-pristine-power-washing-inc-truck.jpg?id=191"/>
<div className="absolute inset-0 hero-overlay"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 animate-fade-in">
<span className="text-brand-orange text-xs font-semibold tracking-wide uppercase flex items-center gap-2">
<iconify-icon icon="solar:star-bold"></iconify-icon> 30 Years of Experience
                </span>
</div>
<h1 className="font-display text-5xl md:text-7xl font-normal text-white tracking-tight mb-6 animate-slide-up leading-tight">
                We Have Affordable Rates &amp; <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-white font-bold">Quality Work</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-slide-up delay-100">
                Welcome to Pristine Power Washing Inc. If you want it clean, call Pristine. Fully licensed, insured, and serving Reading, MA since 2014.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
<a className="w-full sm:w-auto bg-brand-orange hover:bg-orange-500 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-xl transition-all hover:-translate-y-1" href="#contact">
                    Get Free Estimate
                </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2" href="#services">
                    View Services
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-brand-blue font-semibold tracking-wider uppercase text-xs mb-2 block">Who We Are</span>
<h2 className="font-display text-4xl text-brand-dark mb-6">Welcome To Pristine Power Washing</h2>
<div className="flex justify-center gap-2 mb-8">
<span className="h-1.5 w-1.5 rounded-full bg-brand-blue"></span>
<span className="h-1.5 w-1.5 rounded-full bg-brand-blue/60"></span>
<span className="h-1.5 w-1.5 rounded-full bg-brand-blue/30"></span>
</div>
<p className="text-lg text-slate-600 leading-relaxed">
                    With over 30 years of combined experience, we are a local company rooted in the belief that our client’s preferences are of the utmost importance. Owner-operated with a driven focus on quality, safety, and professionalism. Founded in Woburn, MA in 2014 and under new management in 2025.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:border-brand-blue/30 transition-all duration-300 card-hover">
<div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:delivery-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-brand-blue mb-3">Routine Services</h3>
<p className="text-slate-500 text-sm leading-relaxed">Whether you need daily servicing, weekly, bi-weekly, or monthly services, we can be relied on for dependability from start to finish.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:border-brand-blue/30 transition-all duration-300 card-hover">
<div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:medal-star-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-brand-blue mb-3">Superior Quality</h3>
<p className="text-slate-500 text-sm leading-relaxed">We firmly believe in providing the best quality environment. Professionalism, honesty, and integrity are part of what we honor daily.</p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center hover:border-brand-blue/30 transition-all duration-300 card-hover">
<div className="w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:verified-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-brand-blue mb-3">Satisfaction Guaranteed</h3>
<p className="text-slate-500 text-sm leading-relaxed">Committed to client satisfaction. We respond to individual requests 24/7 and are always transparent &amp; honest.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display text-4xl text-brand-blue text-center mb-16">What We Can Do For You</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative rounded-2xl overflow-hidden shadow-lg h-96">
<img alt="Commercial Power Washing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/pristine-power-washing-3.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-3 text-white mb-2">
<iconify-icon icon="solar:buildings-linear" width="24"></iconify-icon>
<h3 className="font-display text-2xl">Commercial</h3>
</div>
<p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            Pristine Power Washing Inc. is the leader in the power washing industry throughout New England and beyond.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-lg h-96">
<img alt="Residential Power Washing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/pristine-16.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-3 text-white mb-2">
<iconify-icon icon="solar:home-linear" width="24"></iconify-icon>
<h3 className="font-display text-2xl">Residential</h3>
</div>
<p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            Pristine Power Washing Inc. has extensive knowledge in power washing homes safely and effectively.
                        </p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-lg h-96">
<img alt="Condo Cleaning" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/pristine-15.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div className="flex items-center gap-3 text-white mb-2">
<iconify-icon icon="solar:city-linear" width="24"></iconify-icon>
<h3 className="font-display text-2xl">Condos &amp; Apartments</h3>
</div>
<p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                            Environmentally friendly products utilized by a professional and caring staff for multi-unit properties.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-fixed bg-center bg-cover" style={{backgroundImage: 'url(\'https://pristinepowerwashinginc.com/wp-content/uploads/2025/01/Pristine-Power-Washing-banner-e1736547141514.jpg?id=684\')'}}>
<div className="absolute inset-0 bg-brand-blue/90 mix-blend-multiply"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
<h2 className="font-display text-4xl font-normal mb-10">Why Pristine Power Washing Inc</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 text-left text-lg font-light mb-12">
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-orange" icon="solar:check-circle-bold"></iconify-icon>
                    Mobile Hot Water &amp; Commercial Equipment
                </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-orange" icon="solar:check-circle-bold"></iconify-icon>
                    Over 30 Years Of Combined Experience
                </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-orange" icon="solar:check-circle-bold"></iconify-icon>
                    Fully Insured &amp; Locally Owned
                </div>
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-orange" icon="solar:check-circle-bold"></iconify-icon>
                    Properly Trained &amp; Safety Focused
                </div>
</div>
<p className="text-2xl font-display mb-8">If You Want It Clean <span className="text-brand-orange font-bold">CALL PRISTINE</span></p>
<a className="inline-flex items-center gap-2 bg-white text-brand-blue font-bold px-8 py-4 rounded-xl hover:bg-brand-orange hover:text-white transition-all shadow-xl" href="tel:7812198012">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon> 781-219-8012
            </a>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/3">
<div className="relative">
<div className="absolute inset-0 bg-brand-orange rounded-full translate-x-2 translate-y-2"></div>
<img alt="Happy Customer" className="relative rounded-full w-full max-w-[300px] border-4 border-white shadow-xl mx-auto" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/Shaking-hands-ppwi-426x426.jpg"/>
</div>
</div>
<div className="w-full md:w-2/3">
<h2 className="font-display text-4xl text-brand-blue mb-8">Really Happy Clientele</h2>
<div className="relative pl-8 border-l-4 border-brand-orange">
<iconify-icon className="absolute -top-4 -left-4 text-4xl text-brand-blue bg-white" icon="solar:quote-up-linear"></iconify-icon>
<p className="text-xl text-slate-600 italic leading-relaxed mb-6">
                        "We contracted with Pristine Power Washing, Inc. to wash our house and deck. Their service was truly amazing! Upon initial quote, everything had been explained to us and they even did our sidewalk at no additional cost. These days when good service often comes at premium, they were truly great to work with."
                    </p>
<cite className="font-bold text-brand-dark not-italic block">– Mark K. Lexington MA</cite>
</div>
<div className="mt-8">
<a className="text-brand-blue font-semibold hover:text-brand-orange transition-colors flex items-center gap-2" href="#">
                        Read More 5-Star Reviews <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-brand-blue font-semibold tracking-wider uppercase text-xs mb-2 block">Our Work</span>
<h2 className="font-display text-4xl text-brand-dark">Recent Projects</h2>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="YMCA" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/ymca-PPW.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Walmart" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/walmart-pristine-power-washing.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Victorias Secret" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/Victoris-secret-PPW.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Kohls" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/PPW-Kohls.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Post Office" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/Post-Office-PPW.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Gillette" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/Gillette-pristine-power-washing-inc.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Aerial Shot" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/arial-shot-PPW.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Residential" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" src="https://pristinepowerwashinginc.com/wp-content/uploads/2019/03/residential-PW3.jpg"/>
</div>
</div>
</div>
</section>

<section className="w-full">
<img alt="Call to Action" className="w-full h-auto object-cover" src="https://pristinepowerwashinginc.com/wp-content/uploads/2025/01/Pristine-powerwashing-call-to-action.jpg"/>
</section>

<footer className="bg-brand-blue text-white pt-24 pb-12" id="contact">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-display text-5xl font-bold mb-6">PRISTINE POWER WASHING INC</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-lg">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                    Reading, MA 01867
                </div>
<div className="hidden md:block text-brand-orange">•</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-brand-orange transition-colors" href="tel:7812198012">781.219.8012</a>
</div>
<div className="hidden md:block text-brand-orange">•</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-brand-orange transition-colors" href="mailto:info@pristinepowerwashinginc.com">info@pristinepowerwashinginc.com</a>
</div>
</div>
<div className="flex justify-center gap-6 mb-16">
<a className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors" href="https://pristinepowerwashinginc.com/">Home</a>
<a className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors" href="#about">About</a>
<a className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors" href="#services">Services</a>
<a className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors" href="#portfolio">Portfolio</a>
<a className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors" href="#contact">Contact</a>
</div>
<div className="flex justify-center gap-6 mb-12">
<a className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-all" href="https://www.facebook.com/PristinePowerWashing/" target="_blank">
<iconify-icon icon="logos:facebook" style={{filter: 'brightness(0) invert(1)'}} width="20"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-all" href="https://www.yelp.com/biz/pristine-power-washing-inc-woburn" target="_blank">
<iconify-icon icon="logos:yelp" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-all" href="mailto:info@pristinepowerwashinginc.com">
<iconify-icon icon="solar:letter-bold" width="24"></iconify-icon>
</a>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
<p>© 2026 Pristine Power Washing Inc. All Rights Reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<span>|</span>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
