import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Sticky Header Logic
        const header = document.getElementById('main-header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-md');
            } else {
                header.classList.remove('shadow-md');
            }
        });

        // Mobile Menu Logic
        const trigger = document.getElementById('mobile-menu-trigger');
        const overlay = document.getElementById('mobile-menu-overlay');
        const panel = document.getElementById('mobile-menu-panel');
        const closeBtn = document.getElementById('mobile-menu-close');
        const backdrop = document.getElementById('mobile-backdrop');
        const links = document.querySelectorAll('.mobile-link');

        function openMenu() {
            overlay.classList.remove('opacity-0', 'invisible', 'pointer-events-none');
            overlay.classList.add('opacity-100', 'visible', 'pointer-events-auto');
            panel.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            overlay.classList.add('opacity-0', 'invisible', 'pointer-events-none');
            overlay.classList.remove('opacity-100', 'visible', 'pointer-events-auto');
            panel.classList.add('translate-x-full');
            document.body.style.overflow = '';
        }

        trigger.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);
        backdrop.addEventListener('click', closeMenu);
        
        // Close menu when clicking a link
        links.forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-gray-200" id="main-header">

<div className="hidden lg:block bg-[#1e2454] text-white py-2 px-6">
<div className="max-w-7xl mx-auto flex justify-between items-center text-xs tracking-wider uppercase font-medium">
<div className="flex items-center gap-4">
<span className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Cherry Hill, NJ (Serving All Counties)</span>
<span className="text-[#D1AA51]">Nosotros Hablamos Español</span>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-[#D1AA51] transition-colors" href="mailto:jeff@criminalcivillawyer.com">jeff@criminalcivillawyer.com</a>
<a className="hover:text-[#D1AA51] transition-colors font-bold" href="tel:8664275529">(866) 427-5529</a>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-[#a70b0b] text-white flex items-center justify-center font-serif font-bold text-xl rounded-sm">H</div>
<div className="flex flex-col">
<span className="font-serif font-bold text-[#1e2454] text-lg leading-tight group-hover:text-[#a70b0b] transition-colors">HARK LAW</span>
<span className="text-[10px] text-gray-500 uppercase tracking-widest">Criminal &amp; Civil Litigation</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-700 hover:text-[#a70b0b] transition-colors" href="#services">Practice Areas</a>
<a className="text-sm font-medium text-gray-700 hover:text-[#a70b0b] transition-colors" href="#about">About Jeff Hark</a>
<a className="text-sm font-medium text-gray-700 hover:text-[#a70b0b] transition-colors" href="#locations">Locations</a>
<a className="text-sm font-medium text-gray-700 hover:text-[#a70b0b] transition-colors" href="#reviews">Reviews</a>
</nav>

<div className="flex items-center gap-4">
<a className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-[#1e2454]" href="tel:8664275529">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</a>
<a className="hidden lg:inline-flex items-center justify-center h-11 px-6 bg-[#a70b0b] hover:bg-[#870000] text-white text-xs font-bold uppercase tracking-widest rounded-sm transition-colors" href="#contact">
                    Free Consultation
                </a>

<button className="lg:hidden p-2 text-[#1e2454]" id="mobile-menu-trigger">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>

<div className="fixed inset-0 z-[60] opacity-0 invisible pointer-events-none mobile-menu-overlay" id="mobile-menu-overlay">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" id="mobile-backdrop"></div>

<div className="absolute top-0 right-0 h-full w-[300px] bg-white shadow-2xl transform translate-x-full mobile-menu-panel flex flex-col" id="mobile-menu-panel">
<div className="p-6 flex justify-between items-center border-b border-gray-100">
<span className="font-serif font-bold text-[#1e2454]">Menu</span>
<button className="p-2 text-gray-400 hover:text-[#a70b0b]" id="mobile-menu-close">
<iconify-icon icon="solar:close-circle-linear" width="28"></iconify-icon>
</button>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
<div className="flex flex-col space-y-4">
<a className="mobile-link text-lg font-medium text-[#1e2454]" href="#services">Practice Areas</a>
<a className="mobile-link text-lg font-medium text-[#1e2454]" href="#about">About Jeff Hark</a>
<a className="mobile-link text-lg font-medium text-[#1e2454]" href="#locations">Locations served</a>
<a className="mobile-link text-lg font-medium text-[#1e2454]" href="#reviews">Client Reviews</a>
</div>
<div className="pt-6 border-t border-gray-100 space-y-4">
<a className="flex items-center gap-3 text-gray-600" href="tel:8664275529">
<iconify-icon className="text-[#D1AA51]" icon="solar:phone-calling-linear"></iconify-icon>
                        (866) 427-5529
                    </a>
<a className="flex items-center gap-3 text-gray-600" href="mailto:jeff@criminalcivillawyer.com">
<iconify-icon className="text-[#D1AA51]" icon="solar:letter-linear"></iconify-icon>
                        Email Us
                    </a>
<div className="flex items-center gap-3 text-gray-600">
<iconify-icon className="text-[#D1AA51]" icon="solar:map-point-linear"></iconify-icon>
<span className="text-sm">1101 Marlton Pike West<br/>Cherry Hill, NJ 08002</span>
</div>
</div>
</nav>
<div className="p-6 bg-gray-50">
<a className="mobile-link block w-full py-4 bg-[#a70b0b] text-white text-center font-bold uppercase tracking-widest text-xs rounded-sm" href="#contact">
                    Book Appointment
                </a>
</div>
</div>
</div>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#1e2454]">

<div className="absolute inset-0 z-0">

<img alt="New Jersey Courthouse" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1e2454] via-[#1e2454]/90 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D1AA51]/20 border border-[#D1AA51]/30 rounded-full">
<span className="w-2 h-2 rounded-full bg-[#D1AA51]"></span>
<span className="text-[#D1AA51] text-[10px] font-bold uppercase tracking-widest">Est. 1984 • 25+ Years Experience</span>
</div>
<h1 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">
                    Award Winning <br/>
<span className="text-[#D1AA51]">New Jersey Lawyer</span>
</h1>
<p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                    Civil &amp; Criminal Defense. We investigate, represent, and win cases involving law enforcement, criminal charges, and civil suits. Proudly serving all of New Jersey.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="inline-flex items-center justify-center h-14 px-8 bg-[#a70b0b] hover:bg-[#870000] text-white font-semibold rounded-sm transition-all shadow-lg shadow-red-900/20" href="#contact">
                        Free Case Evaluation
                    </a>
<a className="inline-flex items-center justify-center h-14 px-8 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md text-white font-semibold rounded-sm transition-all" href="tel:8664275529">
<iconify-icon className="mr-2" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        (866) 427-5529
                    </a>
</div>
<div className="pt-8 border-t border-white/10 flex items-center gap-6">

<div className="flex flex-col">
<div className="flex text-[#D1AA51] text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-white/60 text-xs font-medium mt-1">4.8/5 Rating on Google</span>
</div>
<div className="h-8 w-px bg-white/10"></div>
<div className="flex items-center gap-2">
<img alt="Avvo 10.0 Top Attorney" className="h-10 w-auto opacity-90 grayscale hover:grayscale-0 transition-all" src="https://www.criminalcivillawyer.com/wp-content/uploads/2021-Avvo-Rating.png"/>
</div>
</div>
</div>

<div className="relative hidden lg:block">
<div className="relative rounded-lg overflow-hidden border-4 border-white/5 shadow-2xl">
<img alt="Jeffrey Hark Attorney" className="w-full h-auto object-cover bg-gray-800" src="https://www.criminalcivillawyer.com/wp-content/uploads/jeff-hark.png"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
<p className="text-white font-serif text-xl">Jeffrey Hark, Esq.</p>
<p className="text-[#D1AA51] text-sm uppercase tracking-wider">Founding Attorney</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-serif font-bold text-[#1e2454] mb-4">Areas of Practice</h2>
<div className="w-16 h-1 bg-[#D1AA51] mx-auto mb-6"></div>
<p className="text-gray-600">Aggressive representation in both Criminal and Civil courts. We leverage extensive experience to build a strategy that helps win your case.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm" href="#">
<div className="w-14 h-14 bg-[#1e2454] text-white flex items-center justify-center rounded-sm mb-6 group-hover:bg-[#a70b0b] transition-colors">
<iconify-icon icon="solar:hand-stars-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-[#a70b0b]">Criminal Law</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">White collar crime, fraud, sex crimes, domestic violence, and drug offenses.</p>
<span className="text-[#D1AA51] text-xs font-bold uppercase tracking-widest flex items-center gap-1">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>

<a className="group p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm" href="#">
<div className="w-14 h-14 bg-[#1e2454] text-white flex items-center justify-center rounded-sm mb-6 group-hover:bg-[#a70b0b] transition-colors">
<iconify-icon icon="solar:scale-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-[#a70b0b]">Civil Law</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">Family law, divorce, custody, restraining orders, and property settlements.</p>
<span className="text-[#D1AA51] text-xs font-bold uppercase tracking-widest flex items-center gap-1">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>

<a className="group p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm" href="#">
<div className="w-14 h-14 bg-[#1e2454] text-white flex items-center justify-center rounded-sm mb-6 group-hover:bg-[#a70b0b] transition-colors">
<iconify-icon icon="solar:bus-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-[#a70b0b]">Truck Accidents</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">Commercial truck accidents, cement trucks, rollover accidents, and negligence.</p>
<span className="text-[#D1AA51] text-xs font-bold uppercase tracking-widest flex items-center gap-1">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>

<a className="group p-8 border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm" href="#">
<div className="w-14 h-14 bg-[#1e2454] text-white flex items-center justify-center rounded-sm mb-6 group-hover:bg-[#a70b0b] transition-colors">
<iconify-icon icon="solar:accessibility-linear" width="32"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-[#a70b0b]">Workers Comp</h3>
<p className="text-sm text-gray-500 mb-4 leading-relaxed">Medical benefits, disability benefits, and nursing home staff injuries.</p>
<span className="text-[#D1AA51] text-xs font-bold uppercase tracking-widest flex items-center gap-1">Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</a>
</div>
<div className="mt-12 text-center">
<p className="text-gray-500 text-sm">Also specializing in: <span className="text-[#1e2454] font-semibold">DUI/DWI Defense</span>, <span className="text-[#1e2454] font-semibold">License Defense</span>, and <span className="text-[#1e2454] font-semibold">Appellate Opinions</span>.</p>
</div>
</div>
</section>

<section className="py-24 bg-[#1e2454] text-white relative" id="about">
<div className="absolute inset-0 bg-[url('https://www.criminalcivillawyer.com/wp-content/themes/jhark/css/images/truck-accident.jpg')] bg-cover opacity-5 mix-blend-overlay"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-[#D1AA51] font-bold tracking-widest uppercase text-xs mb-2 block">About The Firm</span>
<h2 className="text-4xl lg:text-5xl font-serif font-bold mb-8">Aggressive &amp; Experienced Representation</h2>
<div className="space-y-6 text-gray-300 font-light leading-relaxed">
<p>
                        I am an aggressive New Jersey criminal and civil law attorney that is experienced in investigating, representing, and winning cases involving different law enforcement agencies, criminal charges, civil suits, and more.
                    </p>
<p>
                        I leverage my extensive experience and knowledge to build a strategy that will help win your case in court. We work with payment plans that fit your budget.
                    </p>
<div className="flex flex-col sm:flex-row gap-8 pt-6">
<div className="flex items-start gap-4">
<div className="p-3 bg-white/10 rounded-full text-[#D1AA51]">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg text-white">Proven Results</h4>
<p className="text-xs text-gray-400 mt-1">Hundreds of cases won across NJ.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-white/10 rounded-full text-[#D1AA51]">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-serif text-lg text-white">Payment Plans</h4>
<p className="text-xs text-gray-400 mt-1">Flexible options for your budget.</p>
</div>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-[#D1AA51]/20 rounded-lg transform rotate-3"></div>
<img alt="Jeff Hark Office" className="relative rounded-lg shadow-2xl bg-gray-800 w-full object-cover transform -rotate-1 hover:rotate-0 transition-transform duration-500" src="https://www.criminalcivillawyer.com/wp-content/uploads/jeff-hark.png"/>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="locations">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white p-8 lg:p-12 rounded-lg shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12">
<div className="lg:w-1/3 space-y-6">
<h3 className="font-serif text-2xl font-bold text-[#1e2454]">Contact Information</h3>
<div className="space-y-4">
<div className="flex items-start gap-4">
<iconify-icon className="text-[#a70b0b] mt-1" icon="solar:map-point-bold" width="20"></iconify-icon>
<div>
<p className="text-sm font-bold text-gray-900">Headquarters</p>
<p className="text-sm text-gray-600">1101 Marlton Pike West,<br/>Cherry Hill, NJ 08002</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#a70b0b] mt-1" icon="solar:phone-bold" width="20"></iconify-icon>
<div>
<p className="text-sm font-bold text-gray-900">Phone</p>
<a className="text-sm text-gray-600 hover:text-[#a70b0b]" href="tel:8664275529">(866) 427-5529</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#a70b0b] mt-1" icon="solar:letter-bold" width="20"></iconify-icon>
<div>
<p className="text-sm font-bold text-gray-900">Email</p>
<a className="text-sm text-gray-600 hover:text-[#a70b0b]" href="mailto:jeff@criminalcivillawyer.com">jeff@criminalcivillawyer.com</a>
</div>
</div>
</div>
</div>
<div className="lg:w-2/3 border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-12 pt-8 lg:pt-0">
<h3 className="font-serif text-2xl font-bold text-[#1e2454] mb-6">Serving All NJ Counties</h3>
<p className="text-sm text-gray-500 mb-6">We have appeared in every municipal court in New Jersey. Our reach extends to:</p>
<div className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4 text-xs font-medium text-gray-700">
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Atlantic</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Bergen</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Burlington</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Camden</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Cape May</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Cumberland</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Essex</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Gloucester</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Hudson</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Mercer</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Middlesex</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Monmouth</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Morris</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Ocean</span>
<span className="flex items-center gap-2"><div className="w-1 h-1 bg-[#D1AA51] rounded-full"></div> Somerset</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="contact">
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-[#1e2454] rounded-xl shadow-2xl overflow-hidden">
<div className="p-8 lg:p-12">
<div className="text-center mb-10">
<h2 className="text-3xl font-serif font-bold text-white mb-4">Request a Free Consultation</h2>
<p className="text-gray-300 text-sm">Immediate response between 7:30am - 11:30pm.</p>
</div>

<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#D1AA51] transition-colors" placeholder="Your Name *" type="text"/>
<input className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#D1AA51] transition-colors" placeholder="Your Email *" type="email"/>
</div>
<input className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#D1AA51] transition-colors" placeholder="Phone Number *" type="tel"/>
<select className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-sm text-gray-400 focus:outline-none focus:border-[#D1AA51] transition-colors">
<option>Preferred Location</option>
<option>Cherry Hill (HQ)</option>
<option>Virtual / Phone</option>
</select>
<textarea className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#D1AA51] transition-colors" placeholder="Describe Your Case Here..." rows="4"></textarea>
<div className="pt-4">
<button className="w-full py-4 bg-[#D1AA51] hover:bg-[#b38f3f] text-[#1e2454] font-bold uppercase tracking-widest rounded-sm transition-colors shadow-lg" type="button">
                                Submit Request
                            </button>
<p className="text-center text-white/30 text-[10px] mt-4">Connects to instant email autoresponder + staff notification email.</p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white py-12 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 text-center">
<a className="inline-block font-serif font-bold text-2xl mb-6" href="#">HARK LAW</a>
<div className="flex flex-wrap justify-center gap-8 mb-8 text-xs font-medium text-gray-400 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Home</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#locations">Locations</a>
<a className="hover:text-white transition-colors" href="#">New Patients</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="flex justify-center gap-4 mb-8 text-gray-400">
<iconify-icon className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" icon="logos:facebook" width="24"></iconify-icon>
<iconify-icon className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" icon="logos:twitter" width="24"></iconify-icon>
<iconify-icon className="grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" icon="logos:linkedin-icon" width="24"></iconify-icon>
</div>
<p className="text-gray-600 text-xs">
                © 2026 Law Offices of Jeffrey Hark. All Rights Reserved. Attorney Advertising.<br/>
                1101 Marlton Pike West, Cherry Hill, NJ 08002
            </p>
</div>
</footer>



    </>
  );
}
