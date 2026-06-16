import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Mobile Menu Toggle Logic
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        const menuIcon = menuToggle.querySelector('svg');

        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('hidden');
                // Small timeout to allow transition to work
                setTimeout(() => {
                    mobileMenu.classList.add('open');
                }, 10);
                menuIcon.innerHTML = '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'; // X icon
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            } else {
                mobileMenu.classList.remove('open');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                }, 300); // Wait for transition
                menuIcon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>'; // Menu icon
                document.body.style.overflow = '';
            }
            lucide.createIcons();
        }

        menuToggle.addEventListener('click', toggleMenu);

        // Close menu when clicking a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="flex items-center gap-2 group z-50 relative" href="#">
<img alt="Siwa Oasis Logo" className="h-12 w-auto object-contain" src="https://siwaoasisaesthetics.com/wp-content/uploads/2025/07/SiwaLogoTransparent.png"/>
</a>

<div className="hidden lg:flex items-center gap-8 text-[13px] font-semibold uppercase tracking-widest text-slate-500">
<a className="hover:text-[#101C3F] transition-colors" href="#services">Services</a>
<a className="hover:text-[#101C3F] transition-colors" href="#locations">Locations</a>
<a className="hover:text-[#101C3F] transition-colors" href="#new-patients">New Patients</a>
<a className="hover:text-[#101C3F] transition-colors" href="#reviews">Reviews</a>
</div>

<div className="flex items-center gap-4 z-50">

<div className="hidden md:flex items-center gap-2 text-[11px] font-medium text-slate-500 bg-stone-100 px-3 py-1.5 rounded-full">
<i className="w-3 h-3 text-[#BA8D56]" data-lucide="map-pin"></i>
                    Saddle Brook, NJ
                </div>
<a className="hidden md:flex justify-center items-center w-10 h-10 rounded-full border border-stone-200 hover:border-[#101C3F] hover:text-[#101C3F] transition-colors" href="tel:+19735677492">
<i className="w-4 h-4" data-lucide="phone"></i>
</a>
<a className="hidden sm:flex bg-[#101C3F] text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-[#BA8D56] transition-all shadow-md active:scale-95" href="#booking">
                    Book Now
                </a>

<button aria-label="Toggle Menu" className="lg:hidden p-2 text-[#101C3F]" id="menu-toggle">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 gap-6 hidden" id="mobile-menu">
<a className="mobile-link text-2xl font-serif text-[#101C3F] border-b border-stone-100 pb-4" href="#services">Services</a>
<a className="mobile-link text-2xl font-serif text-[#101C3F] border-b border-stone-100 pb-4" href="#locations">Locations</a>
<a className="mobile-link text-2xl font-serif text-[#101C3F] border-b border-stone-100 pb-4" href="#new-patients">New Patients</a>
<a className="mobile-link text-2xl font-serif text-[#101C3F] border-b border-stone-100 pb-4" href="#reviews">Reviews</a>
<a className="flex items-center gap-3 text-lg font-medium text-slate-500 mt-4" href="tel:+19735677492">
<i className="w-5 h-5 text-[#BA8D56]" data-lucide="phone"></i> (973) 567-7492
        </a>
<a className="mobile-link bg-[#101C3F] text-white py-4 rounded-xl text-center font-bold uppercase tracking-widest mt-auto mb-8" href="#booking">
            Request Appointment
        </a>
</div>

<header className="relative min-h-[90vh] flex items-center overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-r from-[#101C3F]/90 via-[#101C3F]/70 to-transparent z-10"></div>

<img alt="Aesthetic Clinic Interior" className="absolute inset-0 w-full h-full object-cover z-0" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-10">
<div className="max-w-2xl space-y-8 fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#BA8D56]/20 backdrop-blur-md border border-[#BA8D56]/40 text-[#f0dcb0] text-[10px] uppercase tracking-[0.2em] font-bold">
                    Medical Aesthetics • Saddle Brook, NJ
                </div>
<h1 className="text-5xl md:text-7xl font-serif font-medium text-white leading-[1.1]">
                    Reimagine Your <br/>
<span className="italic text-[#BA8D56]">Natural Radiance</span>
</h1>
<p className="text-lg text-slate-200 font-light leading-relaxed max-w-lg">
                    Experience the pinnacle of aesthetic excellence. Bespoke skincare and medical precision designed for transformative, lasting results.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="bg-white text-[#101C3F] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-stone-100 transition-all text-center" href="#booking">
                        Request Appointment
                    </a>
<a className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center justify-center gap-2" href="tel:+19735677492">
<i className="w-4 h-4" data-lucide="phone"></i>
                        (973) 567-7492
                    </a>
</div>
</div>
</div>
</header>

<div className="bg-white border-b border-stone-100">
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-[#BA8D56]">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<div>
<span className="block text-sm font-bold text-[#101C3F]">5-Star Rated</span>
<span className="text-xs text-slate-500">Google Reviews</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-[#BA8D56]">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<span className="block text-sm font-bold text-[#101C3F]">Medically Guided</span>
<span className="text-xs text-slate-500">Expert Staff</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-[#BA8D56]">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
<div>
<span className="block text-sm font-bold text-[#101C3F]">Open Saturdays</span>
<span className="text-xs text-slate-500">10:00 AM - 4:00 PM</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center text-[#BA8D56]">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<div>
<span className="block text-sm font-bold text-[#101C3F]">State of the Art</span>
<span className="text-xs text-slate-500">Modern Facility</span>
</div>
</div>
</div>
</div>

<section className="py-24 bg-stone-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#BA8D56] text-xs font-bold tracking-[0.2em] uppercase">The Collection</span>
<h2 className="text-3xl md:text-4xl font-serif text-[#101C3F] mt-3 mb-4">Curated Treatments</h2>
<p className="text-slate-500 font-light">Advanced skincare treatments tailored to your unique radiance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#BA8D56]/30 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-[#101C3F] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-serif text-[#101C3F] mb-3">Facials</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Advanced skincare including Filter Free and Hydration facials for restored radiance.</p>
<a className="text-xs font-bold uppercase tracking-wider text-[#BA8D56] flex items-center gap-2" href="#">Learn More <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#BA8D56]/30 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-[#101C3F] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="syringe"></i>
</div>
<h3 className="text-xl font-serif text-[#101C3F] mb-3">Tox &amp; Filler</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Expertly administered injectables (Botox) for natural facial balancing and rejuvenation.</p>
<a className="text-xs font-bold uppercase tracking-wider text-[#BA8D56] flex items-center gap-2" href="#">Learn More <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#BA8D56]/30 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-[#101C3F] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="eraser"></i>
</div>
<h3 className="text-xl font-serif text-[#101C3F] mb-3">Microneedling</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Regenerative Microneedling and Salmon DNA to stimulate long-term cellular health.</p>
<a className="text-xs font-bold uppercase tracking-wider text-[#BA8D56] flex items-center gap-2" href="#">Learn More <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#BA8D56]/30 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-[#101C3F] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-serif text-[#101C3F] mb-3">Wellness &amp; IV</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Optimize your vitality with customized IV Cocktail Drips and NAD+ shots.</p>
<a className="text-xs font-bold uppercase tracking-wider text-[#BA8D56] flex items-center gap-2" href="#">Learn More <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#BA8D56]/30 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-[#101C3F] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="scale"></i>
</div>
<h3 className="text-xl font-serif text-[#101C3F] mb-3">Weight Loss</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Supervised metabolic programs featuring Semaglutide therapeutic solutions.</p>
<a className="text-xs font-bold uppercase tracking-wider text-[#BA8D56] flex items-center gap-2" href="#">Learn More <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>

<div className="group bg-white p-8 rounded-2xl border border-stone-100 hover:border-[#BA8D56]/30 transition-all hover:shadow-lg">
<div className="w-12 h-12 bg-[#101C3F] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-serif text-[#101C3F] mb-3">Laser Hair Removal</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Advanced Laser Hair Removal for lasting surface clarity and smooth skin.</p>
<a className="text-xs font-bold uppercase tracking-wider text-[#BA8D56] flex items-center gap-2" href="#">Learn More <i className="w-3 h-3" data-lucide="arrow-right"></i></a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="locations">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">
<div>
<span className="text-[#BA8D56] text-xs font-bold tracking-[0.2em] uppercase">Visit Us</span>
<h2 className="text-4xl font-serif text-[#101C3F] mt-3">Saddle Brook, NJ</h2>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#101C3F]/5 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-[#101C3F]" data-lucide="map-pin"></i>
</div>
<div>
<h4 className="font-bold text-[#101C3F] mb-1">Siwa Oasis Aesthetics</h4>
<p className="text-sm text-slate-500">350 Market St<br/>Saddle Brook, NJ 07663</p>
<a className="text-xs font-bold text-[#BA8D56] mt-2 inline-block hover:underline" href="https://maps.google.com/?q=350+Market+St,+Saddle+Brook,+NJ+07663" target="_blank">Get Directions</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#101C3F]/5 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-[#101C3F]" data-lucide="clock"></i>
</div>
<div>
<h4 className="font-bold text-[#101C3F] mb-1">Hours</h4>
<p className="text-sm text-slate-500">Mon - Fri: 10:00 AM – 7:00 PM</p>
<p className="text-sm text-slate-500">Saturday: 10:00 AM – 4:00 PM</p>
<p className="text-sm text-slate-500">Sunday: Closed</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-[#101C3F]/5 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-[#101C3F]" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-bold text-[#101C3F] mb-1">Contact</h4>
<a className="block text-sm text-slate-500 hover:text-[#101C3F] transition-colors" href="tel:+19735677492">(973) 567-7492</a>
<a className="block text-sm text-slate-500 hover:text-[#101C3F] transition-colors" href="mailto:info@siwaoasisaesthetics.com">info@siwaoasisaesthetics.com</a>
</div>
</div>
</div>
</div>

<div className="h-[400px] bg-slate-100 rounded-2xl overflow-hidden shadow-lg border border-stone-200">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3015.877335291197!2d-74.09807782372076!3d40.89650557136644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2fb8b4b6a8139%3A0xe34d18ba0aec32d5!2sSiwa%20Oasis%20Aesthetics!5e0!3m2!1sen!2sus!4v1753428204722!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#101C3F] text-white" id="reviews">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="flex justify-center gap-1 text-[#BA8D56] mb-6">
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
<i className="w-6 h-6 fill-current" data-lucide="star"></i>
</div>
<h2 className="text-2xl md:text-4xl font-serif leading-relaxed mb-8">
                "Siwa Oasis literally surpasses everything and everywhere I’ve ever been. Their office was sparkling clean! Prices are super affordable, staff is super friendly, beautiful and knowledgeable!"
            </h2>
<div className="text-sm font-bold tracking-widest uppercase text-slate-400">
                — J.C., Google Review
            </div>
</div>
</section>

<section className="py-24 bg-stone-50" id="booking">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-stone-100">
<div className="text-center mb-10">
<h2 className="text-3xl font-serif text-[#101C3F] mb-3">Request Appointment</h2>
<p className="text-sm text-slate-500">Fill out the form below and we will contact you to confirm your appointment.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault(); document.getElementById('success-message').classList.remove('hidden'); this.reset();">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:border-[#BA8D56] focus:ring-1 focus:ring-[#BA8D56] transition-all" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:border-[#BA8D56] focus:ring-1 focus:ring-[#BA8D56] transition-all" required="" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:border-[#BA8D56] focus:ring-1 focus:ring-[#BA8D56] transition-all" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Interested Service</label>
<select className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:border-[#BA8D56] focus:ring-1 focus:ring-[#BA8D56] transition-all">
<option>Facial Treatment</option>
<option>Botox / Filler</option>
<option>Microneedling</option>
<option>IV Therapy / Wellness</option>
<option>Medical Weight Loss</option>
<option>Laser Hair Removal</option>
<option>Other / Consultation</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Preferred Day/Time</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:border-[#BA8D56] focus:ring-1 focus:ring-[#BA8D56] transition-all" placeholder="e.g. Tuesday mornings, or Sat Feb 24th" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message (Optional)</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 focus:outline-none focus:border-[#BA8D56] focus:ring-1 focus:ring-[#BA8D56] transition-all" rows="3"></textarea>
</div>
<button className="w-full bg-[#101C3F] text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-[#BA8D56] transition-colors shadow-lg mt-4" type="submit">
                        Submit Request
                    </button>

<div className="hidden p-4 bg-green-50 text-green-800 text-center rounded-lg border border-green-100 text-sm" id="success-message">
                        Thank you! We have received your request and will contact you shortly to confirm.
                    </div>
<p className="text-xs text-center text-slate-400 italic">
                        Note to dev: Connect this form to instant email autoresponder + staff notification email.
                    </p>
</form>
</div>
</div>
</section>

<section className="py-16 border-t border-stone-200 bg-white" id="new-patients">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-serif text-[#101C3F] mb-8 text-center">New Patient Information</h2>
<div className="grid md:grid-cols-2 gap-8">
<div>
<h4 className="font-bold text-[#101C3F] mb-2 flex items-center gap-2"><i className="w-4 h-4 text-[#BA8D56]" data-lucide="file-text"></i> Appointments</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                        We require a credit card on file to hold all appointments. Please arrive 10 minutes early to complete any necessary paperwork.
                    </p>
</div>
<div>
<h4 className="font-bold text-[#101C3F] mb-2 flex items-center gap-2"><i className="w-4 h-4 text-[#BA8D56]" data-lucide="credit-card"></i> Payment Options</h4>
<p className="text-sm text-slate-500 leading-relaxed">
                        We accept cash, all major credit cards, and Cherry Payment Plans. We do not accept insurance for cosmetic procedures.
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-[#101C3F] text-slate-300 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 border-b border-white/10 pb-12">

<div className="space-y-6">
<img alt="Siwa Oasis Logo" className="h-10 w-auto brightness-0 invert opacity-80" src="https://siwaoasisaesthetics.com/wp-content/uploads/2025/07/SiwaLogoTransparent.png"/>
<p className="text-sm leading-relaxed max-w-sm">
                        Experience the pinnacle of aesthetic excellence. Your journey to timeless beauty begins here in Northern New Jersey.
                    </p>
</div>

<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<i className="w-4 h-4 mt-0.5 text-[#BA8D56]" data-lucide="map-pin"></i>
<span>350 Market St<br/>Saddle Brook, NJ 07663</span>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#BA8D56]" data-lucide="phone"></i>
<a className="hover:text-white transition-colors" href="tel:+19735677492">(973) 567-7492</a>
</li>
<li className="flex items-center gap-3">
<i className="w-4 h-4 text-[#BA8D56]" data-lucide="mail"></i>
<a className="hover:text-white transition-colors" href="mailto:info@siwaoasisaesthetics.com">info@siwaoasisaesthetics.com</a>
</li>
</ul>
</div>

<div>
<h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-[#BA8D56] transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-[#BA8D56] transition-colors" href="#locations">Locations</a></li>
<li><a className="hover:text-[#BA8D56] transition-colors" href="#membership">Membership</a></li>
<li><a className="hover:text-[#BA8D56] transition-colors" href="#faq">FAQ</a></li>
<li><a className="hover:text-[#BA8D56] transition-colors" href="#privacy">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 text-center text-xs text-slate-500">
<p>© 2026 Siwa Oasis Aesthetics. All Rights Reserved.</p>
<p className="mt-2 opacity-50">Designed by safetechsupport</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-40 md:hidden">
<a className="bg-[#BA8D56] text-[#101C3F] p-4 rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center" href="#booking">
<i className="w-6 h-6" data-lucide="calendar-days"></i>
</a>
</div>


    </>
  );
}
