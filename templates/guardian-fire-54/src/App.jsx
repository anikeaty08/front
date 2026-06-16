import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('bg-black/90', 'backdrop-blur-lg', 'nav-shadow');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('bg-black/90', 'backdrop-blur-lg', 'nav-shadow');
                navbar.classList.add('bg-transparent');
            }
        });

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Quote form toggle
        const quoteToggle = document.getElementById('quoteToggle');
        const quoteForm = document.getElementById('quoteForm');
        quoteToggle.addEventListener('click', () => {
            quoteForm.classList.toggle('hidden');
            if (!quoteForm.classList.contains('hidden')) {
                quoteForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });

        // Scroll reveal animation
        const fadeElements = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 lg:h-20">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tight text-white" href="#">
<span className="text-red-500">Guardian</span> Fire Protection
                    </a>
<div className="hidden lg:flex items-center gap-6">
<a className="text-sm font-medium text-white/80 hover:text-white transition" href="#">Home</a>
<div className="relative group">
<button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition">
                                Services
                                <iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
<div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
<div className="bg-white rounded-lg shadow-xl border border-slate-100 py-2 w-56">
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">Fire Sprinkler Systems</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">Fire Alarm Systems</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">Fire Extinguishers</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">24/7 Monitoring</a>
<a className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50" href="#">Kitchen Suppression</a>
</div>
</div>
</div>
<a className="text-sm font-medium text-white/80 hover:text-white transition" href="#">About</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition" href="#">Locations</a>
<a className="text-sm font-medium text-white/80 hover:text-white transition" href="#">Contact</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-white/80" href="tel:800-555-1234">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                        800-555-1234
                    </a>
<a className="hidden sm:inline-flex px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition" href="#quote">
                        Get a Free Quote
                    </a>
<button className="lg:hidden p-2 text-white" id="mobileMenuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="lg:hidden hidden bg-black/90 backdrop-blur-lg border-t border-white/10" id="mobileMenu">
<div className="px-4 py-4 space-y-3">
<a className="block text-sm font-medium text-white/80 py-2" href="#">Home</a>
<a className="block text-sm font-medium text-white/80 py-2" href="#">Services</a>
<a className="block text-sm font-medium text-white/80 py-2" href="#">About</a>
<a className="block text-sm font-medium text-white/80 py-2" href="#">Locations</a>
<a className="block text-sm font-medium text-white/80 py-2" href="#">Contact</a>
<a className="flex items-center gap-2 text-sm font-medium text-red-500 py-2" href="tel:800-555-1234">
<iconify-icon icon="solar:phone-linear" width="18"></iconify-icon>
                    800-555-1234
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col bg-black overflow-hidden">

<div className="absolute inset-0">
<div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black"></div>

<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pulse-slow"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pulse-slow" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/5 rounded-full blur-3xl"></div>
</div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '60px 60px'}}></div>
</div>

<div className="relative flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-20 pb-16">
<div className="max-w-5xl mx-auto text-center">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-medium text-white/70">Protecting 10,000+ Commercial Properties</span>
</div>

<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 text-glow">
                    Commercial Fire Protection<br/>
<span className="text-red-500">Reimagined</span>
</h1>

<p className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    Inspection • Installation • Monitoring • Repair<br className="hidden sm:block"/>
<span className="text-white/40">for Maryland, DC &amp; Northern Virginia</span>
</p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="group w-full sm:w-auto px-8 py-4 bg-red-600 text-white font-medium rounded-full hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 flex items-center justify-center gap-2" id="quoteToggle">
                        Get a Free Quote
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm" href="tel:800-555-1234">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                        800-555-1234
                    </a>
</div>

<div className="hidden max-w-2xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/10 mb-16" id="quoteForm">
<h3 className="text-lg font-semibold text-white mb-4 tracking-tight">Request Your Free Quote</h3>
<form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent" placeholder="Your Name" type="text"/>
<input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent" placeholder="Email Address" type="email"/>
<input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent" placeholder="Phone Number" type="tel"/>
<select className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent">
<option>Select Service Type</option>
<option>Fire Sprinkler Systems</option>
<option>Fire Alarm Systems</option>
<option>Fire Extinguishers</option>
<option>24/7 Monitoring</option>
<option>Kitchen Suppression</option>
<option>Emergency Service</option>
</select>
<textarea className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent resize-none" placeholder="Tell us about your needs..." rows="3"></textarea>
<button className="sm:col-span-2 px-6 py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition" type="submit">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>

<div className="relative border-t border-white/10 bg-black/50 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
<div className="text-center md:text-left">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">40+</div>
<div className="text-xs sm:text-sm text-white/50 mt-1">Years Experience</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">24/7</div>
<div className="text-xs sm:text-sm text-white/50 mt-1">Emergency Service</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">NICET</div>
<div className="text-xs sm:text-sm text-white/50 mt-1">Certified Techs</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">10,000+</div>
<div className="text-xs sm:text-sm text-white/50 mt-1">Protected Sites</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-32 left-1/2 -translate-x-1/2 float-animation">
<div className="flex flex-col items-center gap-2">
<span className="text-xs text-white/40">Scroll to explore</span>
<iconify-icon className="text-white/40" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 lg:mb-16 fade-in">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Our Core Services</h2>
<p className="text-base text-slate-600 max-w-2xl mx-auto">Complete fire protection solutions for commercial properties of all sizes</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="card-hover bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 fade-in">
<div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
<iconify-icon className="text-red-600" icon="solar:water-drops-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Fire Sprinkler Systems</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">NFPA-compliant installation, inspection, and repair for commercial buildings of all types.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition" href="#">
                        Learn More
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>

<div className="card-hover bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 fade-in">
<div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
<iconify-icon className="text-red-600" icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Fire Alarm Systems</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">24/7 monitoring and installation for code compliance and maximum safety assurance.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition" href="#">
                        Learn More
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>

<div className="card-hover bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 fade-in">
<div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
<iconify-icon className="text-red-600" icon="solar:fire-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Fire Extinguishers</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Annual inspections, recharging, and replacement for restaurants, offices, and retail.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition" href="#">
                        Learn More
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>

<div className="card-hover bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 fade-in">
<div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
<iconify-icon className="text-red-600" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">24/7 Monitoring</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Round-the-clock monitoring services with immediate emergency response coordination.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition" href="#">
                        Learn More
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>

<div className="card-hover bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 fade-in">
<div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
<iconify-icon className="text-red-600" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Kitchen Suppression</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Specialized hood and duct suppression systems for commercial kitchens and restaurants.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition" href="#">
                        Learn More
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>

<div className="card-hover bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 fade-in">
<div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-5">
<iconify-icon className="text-red-600" icon="solar:lightbulb-bolt-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-3 tracking-tight">Emergency Lighting</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Exit signs and emergency lighting installation, testing, and maintenance services.</p>
<a className="inline-flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition" href="#">
                        Learn More
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 lg:mb-16 fade-in">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Why Choose Guardian?</h2>
<p className="text-base text-slate-600 max-w-2xl mx-auto">Trusted by thousands of property managers and facility owners across the DMV region</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24 fade-in">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
<iconify-icon className="text-green-600" icon="solar:chart-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">100%</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Proven Compliance Record</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">We deliver 100% inspection pass rates with detailed digital reports and real-time dashboards. Our meticulous approach ensures your properties always meet or exceed fire code requirements.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Digital inspection reports
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Real-time compliance dashboards
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Proactive deficiency alerts
                        </li>
</ul>
</div>
<div className="order-1 lg:order-2 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 aspect-video flex items-center justify-center">
<div className="text-center p-8">
<iconify-icon className="text-slate-400" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
<p className="text-sm text-slate-500 mt-4">Compliance Dashboard Preview</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24 fade-in">
<div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 aspect-video flex items-center justify-center">
<div className="text-center p-8">
<iconify-icon className="text-slate-400" icon="solar:map-point-wave-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
<p className="text-sm text-slate-500 mt-4">Multi-Site Coverage Map</p>
</div>
</div>
<div>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
<iconify-icon className="text-blue-600" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">2hr</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Fast Multi-Site Response</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">One contact for your entire MD/DC/VA portfolio. Our strategically located teams deliver an average 2-hour emergency response time across all service areas.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Single point of contact
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Coordinated multi-site scheduling
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Priority emergency dispatch
                        </li>
</ul>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 lg:mb-24 fade-in">
<div className="order-2 lg:order-1">
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
<iconify-icon className="text-amber-600" icon="solar:diploma-verified-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">NICET</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Certified Expert Technicians</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Every technician on our team holds NICET certification and undergoes continuous training. We maintain the highest standards of technical excellence in the industry.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-amber-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            NICET Level II-IV certified
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-amber-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Ongoing professional development
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-amber-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Background verified
                        </li>
</ul>
</div>
<div className="order-1 lg:order-2 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 aspect-video flex items-center justify-center">
<div className="text-center p-8">
<iconify-icon className="text-slate-400" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
<p className="text-sm text-slate-500 mt-4">Our Expert Team</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center fade-in">
<div className="rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 aspect-video flex items-center justify-center">
<div className="text-center p-8">
<iconify-icon className="text-slate-400" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
<p className="text-sm text-slate-500 mt-4">Transparent Pricing</p>
</div>
</div>
<div>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
<iconify-icon className="text-purple-600" icon="solar:hand-money-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<span className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">$0</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">No Hidden Fees Ever</h3>
<p className="text-sm text-slate-600 leading-relaxed mb-4">Transparent pricing with detailed quotes upfront. We believe in honest, straightforward business practices that build long-term partnerships.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-purple-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Free detailed estimates
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-purple-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            No surprise charges
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-purple-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                            Flexible payment options
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 lg:mb-16 fade-in">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">What Our Clients Say</h2>
<p className="text-base text-slate-600 max-w-2xl mx-auto">Trusted by property managers and facility directors across the region</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 fade-in">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">"Professional, prompt, and reliable. Guardian has been our go-to fire protection partner for over 5 years. Their team always goes above and beyond to ensure our properties are compliant."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
<span className="text-sm font-medium text-slate-600">JM</span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Jennifer Martinez</p>
<p className="text-xs text-slate-500">Property Manager, Washington DC</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 fade-in">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">"The digital reporting and dashboard access has transformed how we manage compliance across our portfolio. Excellent support team and their response time is unmatched in the industry."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
<span className="text-sm font-medium text-slate-600">RK</span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Robert Kim</p>
<p className="text-xs text-slate-500">Facility Director, Bethesda MD</p>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 fade-in">
<div className="flex gap-1 mb-4">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-6">"Trusted for all our multi-site fire protection needs. Having one reliable partner across Maryland, DC, and Virginia has simplified our operations tremendously. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center">
<span className="text-sm font-medium text-slate-600">SW</span>
</div>
<div>
<p className="text-sm font-medium text-slate-900">Sarah Williams</p>
<p className="text-xs text-slate-500">Building Owner, Alexandria VA</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12 lg:mb-16 fade-in">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Serving Maryland, DC &amp; Northern Virginia</h2>
<p className="text-base text-slate-600 max-w-2xl mx-auto">Proudly local, fully licensed in all jurisdictions</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center fade-in">
<div className="rounded-2xl overflow-hidden bg-slate-100 aspect-square lg:aspect-video">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792598.7460982791!2d-77.51796442968749!3d38.89509849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus" style={{border: '0', minHeight: '300px'}} width="100%"></iframe>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-6 tracking-tight">Our Service Areas</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
<iconify-icon className="text-red-600 mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Maryland</p>
<p className="text-xs text-slate-500">Baltimore, Bethesda, Silver Spring, Rockville, Columbia</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
<iconify-icon className="text-red-600 mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Washington DC</p>
<p className="text-xs text-slate-500">Downtown, Georgetown, Capitol Hill, Navy Yard</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
<iconify-icon className="text-red-600 mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Northern Virginia</p>
<p className="text-xs text-slate-500">Arlington, Alexandria, Fairfax, Tysons, Reston</p>
</div>
</div>
<div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50">
<iconify-icon className="text-red-600 mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-900">Extended Coverage</p>
<p className="text-xs text-slate-500">Frederick, Annapolis, Loudoun County</p>
</div>
</div>
</div>
<div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-100">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-green-600" icon="solar:verified-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm font-medium text-green-800">Licensed &amp; Insured</span>
</div>
<p className="text-xs text-green-700">Fully licensed contractor in MD, DC, and VA with $2M liability coverage</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 bg-black relative overflow-hidden" id="quote">

<div className="absolute inset-0">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center fade-in">
<h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">Ready to Safeguard Your Property?</h2>
<p className="text-base text-white/60 mb-8">Get a free quote today or call for immediate assistance</p>
<div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 mb-8 border border-white/10">
<form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent" placeholder="Your Name" type="text"/>
<input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent" placeholder="Email Address" type="email"/>
<input className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent" placeholder="Phone Number" type="tel"/>
<select className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent">
<option>Select Service Type</option>
<option>Fire Sprinkler Systems</option>
<option>Fire Alarm Systems</option>
<option>Fire Extinguishers</option>
<option>24/7 Monitoring</option>
<option>Kitchen Suppression</option>
<option>Emergency Service</option>
</select>
<button className="sm:col-span-2 px-6 py-4 bg-red-600 text-white font-medium rounded-xl hover:bg-red-700 transition shadow-lg shadow-red-600/30" type="submit">
                            Get Your Free Quote
                        </button>
</form>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<span className="text-sm text-white/40">Or call us directly:</span>
<a className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition" href="tel:800-555-1234">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                        800-555-1234
                    </a>
</div>
</div>
</div>
</section>

<footer className="py-12 lg:py-16 bg-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
<div>
<a className="text-lg font-semibold tracking-tight text-white mb-4 block" href="#">
<span className="text-red-500">Guardian</span> Fire Protection
                    </a>
<p className="text-sm text-slate-400 leading-relaxed mb-4">Comprehensive commercial fire protection services for Maryland, DC, and Northern Virginia since 1984.</p>
<div className="flex items-center gap-3">
<a className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition" href="#">
<iconify-icon icon="solar:facebook-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition" href="#">
<iconify-icon icon="solar:linkedin-square-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-400 hover:text-white transition" href="#">Home</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition" href="#">About Us</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition" href="#">Our Services</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition" href="#">Service Areas</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Services</h4>
<ul className="space-y-2">
<li><a className="text-sm text-slate-400 hover:text-white transition" href="#">Fire Sprinkler Systems</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition" href="#">Fire Alarm Systems</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition" href="#">Fire Extinguishers</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition" href="#">24/7 Monitoring</a></li>
<li><a className="text-sm text-slate-400 hover:text-white transition" href="#">Kitchen Suppression</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-white mb-4">Contact Info</h4>
<ul className="space-y-3">
<li className="flex items-start gap-2">
<iconify-icon className="text-red-500 mt-0.5" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-slate-400">800-555-1234</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-red-500 mt-0.5" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-slate-400">info@guardianfire.com</span>
</li>
<li className="flex items-start gap-2">
<iconify-icon className="text-red-500 mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-sm text-slate-400">123 Safety Lane<br/>Rockville, MD 20850</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">© 2025 Guardian Fire Protection. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-slate-500 hover:text-slate-400 transition" href="#">Privacy Policy</a>
<a className="text-xs text-slate-500 hover:text-slate-400 transition" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
