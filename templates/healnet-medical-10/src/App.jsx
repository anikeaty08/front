import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        // Simple Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        // Apply observer to fade-up elements that aren't initially animated
        document.querySelectorAll('.animate-fade-up').forEach((el) => {
            el.style.opacity = 0; // Ensure they are hidden initially if not using keyframes directly on load
            el.style.animationPlayState = 'paused';
            observer.observe(el);
        });
        
        // Re-enable animation when visible
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        });

        document.querySelectorAll('.animate-fade-up').forEach(el => animationObserver.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-purple-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed w-full z-50 top-0 left-0 border-b border-slate-200/60 bg-white/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
<span className="text-xl font-bold tracking-tight text-slate-900 group-hover:opacity-80 transition-opacity">HealNet</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors" href="#doctors">Find Doctors</a>
<a className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors" href="#about">About us</a>
<a className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors" href="#blog">Blog</a>
<a className="text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors" href="#contact">Contact</a>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors">Join us</button>
<button className="bg-slate-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-blue-500/10">
                    Book Now
                </button>
</div>
<button className="md:hidden p-2 text-slate-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div className="animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                        Digital Healthcare
                    </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        Your trusted partner in <span className="text-gradient">digital healthcare.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-lg">
                        Empowering Your Health at Every Step. Experience personalized medical care from the comfort of your home. Connect with certified doctors and manage prescriptions with ease.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-gradient-primary text-white px-8 py-4 rounded-xl text-base font-bold hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                            Book an appointment
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl text-base font-bold hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                            How it works
                        </button>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 flex items-center gap-4 text-sm text-slate-500 font-medium">
<span className="flex -space-x-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-slate-100" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-slate-100" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="User" className="w-8 h-8 rounded-full border-2 border-white ring-1 ring-slate-100" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</span>
<p>Trusted by <span className="text-slate-900 font-bold">millions</span> across the globe</p>
</div>
</div>
<div className="relative animate-fade-up delay-200">
<div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-100 aspect-[4/5] bg-slate-100">

<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50"></div>
<img alt="Doctor" className="absolute inset-0 w-full h-full object-cover object-top mix-blend-multiply opacity-95" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-lg flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-6 h-6" data-lucide="check-circle-2"></i>
</div>
<div>
<p className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Status</p>
<p className="text-sm font-bold text-slate-900">Available for Consultation</p>
</div>
</div>
</div>

<div className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full blur-3xl -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-100 bg-slate-50/50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
<div className="flex flex-col items-center justify-center p-4 text-center animate-fade-up delay-100">
<h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">10,000+</h3>
<p className="text-slate-500 font-medium">Successful Consultations</p>
</div>
<div className="flex flex-col items-center justify-center p-4 text-center animate-fade-up delay-200">
<h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">2,500+</h3>
<p className="text-slate-500 font-medium">Healthcare Professionals</p>
</div>
<div className="flex flex-col items-center justify-center p-4 text-center animate-fade-up delay-300">
<h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight">98%</h3>
<p className="text-slate-500 font-medium">Patient Satisfaction Rate</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
<h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Top services we offer</h2>
<p className="text-slate-500 text-lg">In today’s fast-paced world, your health deserves the utmost attention. HealNet offers a suite of integrated services designed to cater to your needs digitally.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 lg:gap-8">

<div className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 animate-fade-up delay-100">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="video"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Online Consultations</h3>
<p className="text-slate-500 leading-relaxed">Consult with top doctors across various specialties via video or chat communication. It’s secure, private, and convenient.</p>
</div>

<div className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 animate-fade-up delay-200">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="file-text"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Medical Notes</h3>
<p className="text-slate-500 leading-relaxed">Obtain necessary medical notes for work or school with only a few clicks. Seamless documentation process.</p>
</div>

<div className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 animate-fade-up delay-300">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="pill"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Medicine Refills</h3>
<p className="text-slate-500 leading-relaxed">Skip the pharmacy queues. Receive and renew prescriptions digitally after your consultation with our specialists.</p>
</div>

<div className="group bg-white rounded-3xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 animate-fade-up delay-100">
<div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-7 h-7" data-lucide="calendar-check"></i>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Booking Appointments</h3>
<p className="text-slate-500 leading-relaxed">Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with online features.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white overflow-hidden relative" id="about">

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 animate-fade-up">
<h2 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">HealNet’s Story: Get to know us</h2>
<p className="text-slate-400 text-lg mb-6 leading-relaxed">
                        HealNet is more than just an online medical service; it’s a movement towards accessible, efficient, and compassionate healthcare for all. Founded by a team of visionary doctors and tech experts, we are driven by the mission to deliver exceptional care.
                    </p>
<p className="text-slate-400 text-lg mb-8 leading-relaxed">
                        Our platform is built on trust, innovation, and patient-centricity. With a network of licensed practitioners from diverse fields, we guarantee comprehensive care that’s just a click away.
                    </p>
<a className="inline-flex items-center text-blue-400 font-bold hover:text-blue-300 transition-colors" href="#">
                        Learn more about us <i className="ml-2 w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="order-1 lg:order-2 animate-fade-up delay-200 relative">
<div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-video lg:aspect-square relative group">
<div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-all duration-500 z-10"></div>
<img alt="Medical Team" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
<h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">How our platform works</h2>
<p className="text-slate-500 text-lg">Navigating your healthcare journey with HealNet is seamless. Just follow these steps.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -right-4 -top-4 text-[120px] font-extrabold text-slate-50 opacity-50 z-0">1</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-blue-500/30">1</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Create Your Profile</h3>
<p className="text-slate-500">Sign up and fill in your medical history securely to ensure your doctors stay up-to-date.</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -right-4 -top-4 text-[120px] font-extrabold text-slate-50 opacity-50 z-0">2</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-blue-500/30">2</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Choose Your Service</h3>
<p className="text-slate-500">Select from our range of services and book a consultation. It's fairly simple and straightforward.</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-200 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
<div className="absolute -right-4 -top-4 text-[120px] font-extrabold text-slate-50 opacity-50 z-0">3</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-blue-500/30">3</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Meet Your Doctor</h3>
<p className="text-slate-500">Have a virtual consultation with one of our certified specialists or go for a physical visit.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
<h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Patient Testimonials</h2>
<p className="text-slate-500 text-lg">Hear from those we've cared for.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="text-blue-500 mb-6">
<i className="w-8 h-8 fill-current" data-lucide="quote"></i>
</div>
<p className="text-slate-700 text-lg font-medium mb-6">“After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold text-sm">LA</div>
<div>
<p className="text-slate-900 font-bold text-sm">Linda A.</p>
<div className="flex text-yellow-400 gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="text-blue-500 mb-6">
<i className="w-8 h-8 fill-current" data-lucide="quote"></i>
</div>
<p className="text-slate-700 text-lg font-medium mb-6">“Managing chronic conditions like diabetes requires vigilance, but the medicine refill system has simplified my life.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold text-sm">HB</div>
<div>
<p className="text-slate-900 font-bold text-sm">Henry B.</p>
<div className="flex text-yellow-400 gap-0.5">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
<div className="text-blue-500 mb-6">
<i className="w-8 h-8 fill-current" data-lucide="quote"></i>
</div>
<p className="text-slate-700 text-lg font-medium mb-6">“Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-sm">SK</div>
<div>
<p className="text-slate-900 font-bold text-sm">Samantha K.</p>
<div className="flex text-yellow-400 gap-0.5">
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
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="doctors">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
<h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Masters of Medicine</h2>
<p className="text-slate-500 text-lg">Meet our team of specialists.</p>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 group">
<div className="aspect-[4/3] overflow-hidden relative">
<div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Dr. Sarah Johnson" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-8">
<h3 className="text-2xl font-bold text-slate-900 mb-1">Dr. Sarah Johnson</h3>
<p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide">Cardiologist</p>
<p className="text-slate-500 leading-relaxed mb-6">Heart health is Dr. Johnson’s passion. Her approach integrates cutting-edge technology with compassionate care. She’s a respected voice in prevention.</p>
<button className="text-slate-900 font-bold text-sm border-b-2 border-slate-200 hover:border-blue-600 transition-colors pb-1">View Profile</button>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 group">
<div className="aspect-[4/3] overflow-hidden relative">
<div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-all z-10"></div>
<img alt="Dr. Mark Lee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="p-8">
<h3 className="text-2xl font-bold text-slate-900 mb-1">Dr. Mark Lee</h3>
<p className="text-blue-600 font-semibold mb-4 text-sm uppercase tracking-wide">Dermatologist</p>
<p className="text-slate-500 leading-relaxed mb-6">Dr. Lee is a visionary in dermatology, advancing treatments with a holistic approach. His dedication to clinical excellence makes him a leader.</p>
<button className="text-slate-900 font-bold text-sm border-b-2 border-slate-200 hover:border-blue-600 transition-colors pb-1">View Profile</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Reach our Help Desk for support</h2>
<p className="text-slate-500 text-lg mb-10">Questions? Need assistance? Our dedicated support team is here to help you every step of the way.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="bg-slate-900 text-white px-8 py-4 rounded-xl text-base font-bold hover:bg-slate-800 transition-all w-full sm:w-auto">
                    Contact Help Desk
                </button>
<button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl text-base font-bold hover:bg-slate-50 transition-all w-full sm:w-auto">
                    View FAQ
                </button>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="plus"></i>
</div>
<span className="text-2xl font-bold text-white tracking-tight">HealNet</span>
</a>
<p className="text-slate-400 mb-8 max-w-sm">Experience personalized medical care from the comfort of your home.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="text-white font-bold mb-6">Support</h4>
<ul className="space-y-4 text-sm font-medium">
<li><a className="hover:text-blue-400 transition-colors" href="#">Getting Started</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">FAQS</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Help Articles</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Report an issue</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Contact Help Desk</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Services</h4>
<ul className="space-y-4 text-sm font-medium">
<li><a className="hover:text-blue-400 transition-colors" href="#">Booking appointments</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Online consultations</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Prescriptions</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Medicine Refills</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Medical Notes</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-6">Legal</h4>
<ul className="space-y-4 text-sm font-medium">
<li><a className="hover:text-blue-400 transition-colors" href="#">Terms &amp; Conditions</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Cookie Notice</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Cookie Preferences</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Trust Center</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 text-sm font-medium flex flex-col md:flex-row justify-between items-center gap-4">
<p>HealNet 2024 © All Rights Reserved</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
