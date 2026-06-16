import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
navy: {
50: '#f0f4f8',
100: '#d9e2ec',
800: '#102a43',
900: '#0B1120', // Deep Navy
950: '#060911',
},
brand: {
yellow: '#FACC15', // Bright Friendly Yellow
blue: '#1E3A8A',   // Navy Blue
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Outfit', 'sans-serif'],
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-brand-yellow shadow-lg shadow-brand-blue/20 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:sparkle-bold" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xl font-heading font-bold text-slate-900 leading-none tracking-tight">Mauris</span>
<span className="text-[10px] font-medium text-slate-400 uppercase tracking-widest">Cleaning Service</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-sm font-semibold text-brand-blue" href="tel:0243302580">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    0243 302 580
                </a>
<a className="px-5 py-2.5 bg-brand-yellow text-slate-900 text-sm font-semibold rounded-full hover:bg-yellow-300 transition-all shadow-md shadow-yellow-400/20" href="#contact">
                    Book Now
                </a>
</div>

<button className="md:hidden text-slate-900" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl" id="mobile-menu">
<a className="text-base font-medium text-slate-800" href="#home">Home</a>
<a className="text-base font-medium text-slate-800" href="#services">Services</a>
<a className="text-base font-medium text-slate-800" href="#about">About</a>
<a className="text-base font-medium text-slate-800" href="#contact">Contact</a>
<a className="w-full py-3 bg-brand-blue text-white rounded-lg text-center font-medium" href="tel:0243302580">Call Now</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-navy-900" id="home">

<div className="absolute top-0 right-0 w-[50%] h-full bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[30%] h-[50%] bg-brand-yellow/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-yellow text-xs font-medium uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse"></span>
                    Professional Home &amp; Commercial Care
                </div>
<h1 className="text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight">
                    We look forward to making your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">space shine!</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                    Experience the joy of a spotless home. We provide trusted cleaning, cooking, and nanny services tailored to your family's needs.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="px-8 py-4 bg-brand-yellow text-slate-900 font-semibold rounded-full hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/20" href="tel:0243302580">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
                        Call Now
                    </a>
<a className="px-8 py-4 bg-white/10 text-white font-medium border border-white/10 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm" href="#services">
                        View Services
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
<div className="pt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-slate-400">
<div className="flex -space-x-3">
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-10 h-10 rounded-full border-2 border-navy-900 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<span>Trusted by 500+ families</span>
</div>
</div>
<div className="relative lg:h-[600px] w-full hidden lg:block">

<div className="absolute right-0 top-10 w-4/5 h-[500px] rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/30 border border-white/10 bg-navy-800">
<img alt="Professional Cleaner" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581578731117-104f2a8060a7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-navy-900/10"></div>
</div>

<div className="absolute bottom-20 left-0 p-6 bg-white rounded-2xl shadow-xl max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:verified-check-bold" width="24"></iconify-icon>
</div>
<div>
<div className="text-slate-900 font-bold font-heading">100% Verified</div>
<div className="text-xs text-slate-500">Trained Professionals</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-brand-blue font-semibold text-sm uppercase tracking-widest">Why Choose Mauris</span>
<h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mt-3">Reliable support for your home</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-yellow/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Trusted Pros</h3>
<p className="text-sm text-slate-500 leading-relaxed">Every staff member is vetted, background-checked, and trained for safety.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-yellow/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-brand-yellow text-slate-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:emoji-funny-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Friendly Staff</h3>
<p className="text-sm text-slate-500 leading-relaxed">Our team is known for being polite, respectful, and family-friendly.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-yellow/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-brand-blue text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Flexible Options</h3>
<p className="text-sm text-slate-500 leading-relaxed">Daily, weekly, or monthly plans tailored to your specific schedule.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-yellow/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-brand-yellow text-slate-900 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2">Affordable</h3>
<p className="text-sm text-slate-500 leading-relaxed">Premium service quality at prices that fit your household budget.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<span className="text-brand-blue font-semibold text-sm uppercase tracking-widest">Our Services</span>
<h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mt-3">Everything you need for a<br/>happy home</h2>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-yellow transition-colors" href="#contact">
                    Get a Quote <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
<div className="h-56 overflow-hidden relative bg-slate-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584622050111-993a426fbf0a?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-brand-blue/10"></div>
<div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
<iconify-icon className="text-brand-blue" icon="solar:broom-linear" width="24"></iconify-icon>
</div>
</div>
<div className="p-8">
<h3 className="text-xl font-bold text-slate-900 mb-3">Cleaning Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Deep cleaning for homes and offices. We handle scrubbing, dusting, polishing, and trash removal to leave your space sparkling.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs font-medium text-slate-700">
<iconify-icon className="text-brand-yellow" icon="solar:check-circle-bold"></iconify-icon> General Home Cleaning
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-700">
<iconify-icon className="text-brand-yellow" icon="solar:check-circle-bold"></iconify-icon> Office &amp; Commercial
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-700">
<iconify-icon className="text-brand-yellow" icon="solar:check-circle-bold"></iconify-icon> Move-in/Move-out
                            </li>
</ul>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
<div className="h-56 overflow-hidden relative bg-slate-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-brand-blue/10"></div>
<div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
<iconify-icon className="text-brand-blue" icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
</div>
<div className="p-8">
<h3 className="text-xl font-bold text-slate-900 mb-3">Cooking Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Delicious, hygienic meals prepared in your kitchen. Our cooks can handle local dishes and dietary requirements tailored to your family.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs font-medium text-slate-700">
<iconify-icon className="text-brand-yellow" icon="solar:check-circle-bold"></iconify-icon> Meal Prep
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-700">
<iconify-icon className="text-brand-yellow" icon="solar:check-circle-bold"></iconify-icon> Event Catering
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-700">
<iconify-icon className="text-brand-yellow" icon="solar:check-circle-bold"></iconify-icon> Daily Cooking
                            </li>
</ul>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-2 transition-transform duration-300">
<div className="h-56 overflow-hidden relative bg-slate-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1602682412678-c0b240907577?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-brand-blue/10"></div>
<div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
<iconify-icon className="text-brand-blue" icon="solar:user-heart-linear" width="24"></iconify-icon>
</div>
</div>
<div className="p-8">
<h3 className="text-xl font-bold text-slate-900 mb-3">Nanny Services</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Compassionate care for your children. Our nannies are trained in child safety, basic education, and creating fun environments.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs font-medium text-slate-700">
<iconify-icon className="text-brand-yellow" icon="solar:check-circle-bold"></iconify-icon> Newborn Care
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-700">
<iconify-icon className="text-brand-yellow" icon="solar:check-circle-bold"></iconify-icon> Toddler Supervision
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-700">
<iconify-icon className="text-brand-yellow" icon="solar:check-circle-bold"></iconify-icon> After-school Help
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute inset-0 bg-brand-yellow/20 rounded-3xl transform rotate-3"></div>
<img alt="About Team" className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute -bottom-10 -right-10 bg-navy-900 p-8 rounded-2xl shadow-xl max-w-xs text-white">
<div className="text-4xl font-bold font-heading text-brand-yellow mb-2">5+</div>
<div className="text-sm font-medium">Years of Experience delivering quality service in Ghana</div>
</div>
</div>
<div className="space-y-6">
<span className="text-brand-blue font-semibold text-sm uppercase tracking-widest">About Us</span>
<h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900">Committed to Excellence in Service</h2>
<p className="text-slate-500 leading-relaxed">
                        Founded on the principles of reliability and trust, Mauris Cleaning Service has grown to become a leading provider of domestic solutions. We understand that inviting someone into your home requires trust, which is why we go above and beyond in our vetting and training processes.
                    </p>
<p className="text-slate-500 leading-relaxed">
                        Whether you need a one-time deep clean or a full-time nanny, our goal is to make your life easier so you can focus on what matters most to you.
                    </p>
<div className="pt-4 grid grid-cols-2 gap-6">
<div>
<h4 className="text-2xl font-bold text-slate-900">500+</h4>
<p className="text-xs text-slate-500 mt-1">Happy Clients</p>
</div>
<div>
<h4 className="text-2xl font-bold text-slate-900">50+</h4>
<p className="text-xs text-slate-500 mt-1">Trained Staff</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-navy-900 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow/10 rounded-full blur-3xl"></div>
<div className="relative z-10 space-y-6">
<h2 className="text-3xl lg:text-5xl font-heading font-bold text-white tracking-tight">Ready to reclaim your time?</h2>
<p className="text-slate-400 max-w-xl mx-auto text-lg">
                        Book your service today. Our team is ready to assist you with a customized plan that fits your lifestyle.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
<a className="px-8 py-4 bg-brand-yellow text-slate-900 font-semibold rounded-full hover:bg-yellow-300 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-yellow/20" href="tel:0243302580">
<iconify-icon icon="solar:phone-calling-bold" width="20"></iconify-icon>
                            0243 302 580
                        </a>
<button className="px-8 py-4 bg-white/10 text-white font-medium border border-white/10 rounded-full hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
                            Send Email
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-brand-blue flex items-center justify-center text-brand-yellow">
<iconify-icon icon="solar:sparkle-bold" width="18"></iconify-icon>
</div>
<span className="text-lg font-heading font-bold text-slate-900">Mauris</span>
</a>
<p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                        Professional cleaning, cooking, and nanny services designed to bring comfort and hygiene to your home.
                    </p>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">House Cleaning</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Office Cleaning</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Cooking</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Nanny Services</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> 0243 302 580
                        </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Accra, Ghana
                        </li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2024 Mauris Cleaning Service. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand-blue transition-colors" href="#"><iconify-icon icon="brandico:facebook" width="16"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-blue transition-colors" href="#"><iconify-icon icon="brandico:instagram" width="16"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-blue transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
