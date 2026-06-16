import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
// Intro Logic
document.addEventListener('DOMContentLoaded', () => {
// 1. Immediately trigger "Coming Together" animation
setTimeout(() => {
document.getElementById('intro-container').classList.add('intro-active');
}, 100);
// 2. Fade out after 4 seconds total (Wait 4s then fade)
setTimeout(() => {
document.getElementById('intro-container').classList.add('intro-fade-out');
// 3. Remove from DOM/Interaction after fade completes
setTimeout(() => {
document.getElementById('intro-container').style.display = 'none';
initObserver(); // Start observing elements on page
}, 1000); // 1s fade duration
}, 4000);
});
// Navigation Logic
function navigateTo(pageId) {
const pages = document.querySelectorAll('.page-section');
if (pageId === 'footer-contact') {
closeMenu();
const home = document.getElementById('page-home');
if(home.classList.contains('hidden')) {
pages.forEach(p => p.classList.add('hidden'));
home.classList.remove('hidden');
}
setTimeout(() => {
document.getElementById('footer-contact').scrollIntoView({ behavior: 'smooth' });
}, 100);
return;
}
pages.forEach(page => {
page.classList.add('hidden');
});
const target = document.getElementById(pageId);
if (target) {
target.classList.remove('hidden');
window.scrollTo(0, 0);
setTimeout(() => {
const elements = target.querySelectorAll('.fade-up, .reveal-text');
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
}
});
}, { threshold: 0.1 });
elements.forEach(el => observer.observe(el));
}, 100);
}
closeMenu();
}
function toggleMenu() {
const menu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('menu-backdrop');
if (menu.classList.contains('translate-x-full')) {
menu.classList.remove('translate-x-full');
backdrop.classList.remove('opacity-0', 'pointer-events-none');
document.body.style.overflow = 'hidden';
} else {
closeMenu();
}
}
function closeMenu() {
const menu = document.getElementById('mobile-menu');
const backdrop = document.getElementById('menu-backdrop');
menu.classList.add('translate-x-full');
backdrop.classList.add('opacity-0', 'pointer-events-none');
document.body.style.overflow = '';
document.querySelectorAll('.mobile-submenu').forEach(el => el.classList.remove('open'));
document.querySelectorAll('.mobile-menu-item').forEach(el => el.classList.remove('active'));
}
function toggleMobileSubmenu(id, btn) {
const submenu = document.getElementById(id);
const parent = btn;
const isOpen = submenu.classList.contains('open');
if (isOpen) {
submenu.classList.remove('open');
parent.classList.remove('active');
} else {
submenu.classList.add('open');
parent.classList.add('active');
}
}
function toggleFeeAccordion(id, btn) {
const content = document.getElementById(id);
const chevron = btn.querySelector('.fee-chevron');
if (content.classList.contains('open')) {
content.classList.remove('open');
if(chevron) chevron.style.transform = 'rotate(0deg)';
} else {
content.classList.add('open');
if(chevron) chevron.style.transform = 'rotate(180deg)';
}
}
function initObserver() {
const observerOptions = {
root: null,
rootMargin: '0px',
threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('is-visible');
observer.unobserve(entry.target);
}
});
}, observerOptions);
const elements = document.querySelectorAll('.fade-up, .reveal-text');
elements.forEach(el => observer.observe(el));
}
function openBookingModal() {
const modal = document.getElementById('booking-modal');
const modalContent = document.getElementById('booking-modal-content');
modal.classList.remove('modal-enter');
modal.classList.add('modal-enter-active');
setTimeout(() => {
modalContent.classList.remove('modal-content-enter');
modalContent.classList.add('modal-content-active');
}, 50);
document.body.style.overflow = 'hidden';
}
function closeBookingModal() {
const modal = document.getElementById('booking-modal');
const modalContent = document.getElementById('booking-modal-content');
modalContent.classList.remove('modal-content-active');
modalContent.classList.add('modal-content-enter');
setTimeout(() => {
modal.classList.remove('modal-enter-active');
modal.classList.add('modal-enter');
setTimeout(() => {
document.getElementById('booking-form-state').classList.remove('hidden');
document.getElementById('booking-success-state').classList.add('hidden');
}, 300);
}, 300);
document.body.style.overflow = '';
}
function submitBooking(e) {
e.preventDefault();
const btn = e.target.querySelector('button[type="submit"]');
const originalText = btn.innerText;
btn.innerText = 'Requesting...';
setTimeout(() => {
document.getElementById('booking-form-state').classList.add('hidden');
document.getElementById('booking-success-state').classList.remove('hidden');
btn.innerText = originalText;
}, 1000);
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full z-[100]" id="intro-container">

<div className="intro-panel border-r-2 border-[#F9F7F2]/20" id="panel-left"></div>

<div className="intro-panel border-l-2 border-[#F9F7F2]/20" id="panel-right"></div>
</div>

<div className="fixed inset-0 z-[110] flex items-center justify-center p-4 modal-enter transition-opacity duration-300" id="booking-modal">
<div className="absolute inset-0 bg-[#2C2A26]/80 backdrop-blur-sm" onclick="closeBookingModal()"></div>
<div className="relative w-full max-w-lg bg-[#F9F7F2] rounded-[2px] shadow-2xl modal-content-enter transition-all duration-500 overflow-hidden flex flex-col max-h-[90vh]" id="booking-modal-content">
<button className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 z-10 p-2" onclick="closeBookingModal()">
<iconify-icon height="20" icon="lucide:x" width="20"></iconify-icon>
</button>
<div className="p-8 md:p-10 overflow-y-auto" id="booking-form-state">
<span className="text-[#B58E61] text-[10px] uppercase font-bold tracking-[0.2em] mb-3 block font-geist">Concierge Care</span>
<h3 className="text-2xl text-neutral-900 mb-2 font-geist font-semibold">Request an Appointment</h3>
<p className="text-sm text-neutral-500 font-light mb-8 font-geist">Select your preferred time and we will confirm availability.</p>
<form className="space-y-5" onsubmit="submitBooking(event)">
<div className="space-y-1">
<label className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium font-geist">Name</label>
<input className="w-full bg-white border border-[#E5E0D8] p-3 text-sm focus:outline-none focus:border-[#728C69] transition-colors rounded-[2px]" placeholder="Your name" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium font-geist">Email</label>
<input className="w-full bg-white border border-[#E5E0D8] p-3 text-sm focus:outline-none focus:border-[#728C69] transition-colors rounded-[2px]" placeholder="email@address.com" required="" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium font-geist">Preferred Date</label>
<input className="w-full bg-white border border-[#E5E0D8] p-3 text-sm focus:outline-none focus:border-[#728C69] transition-colors rounded-[2px] text-neutral-600" required="" type="date"/>
</div>
<div className="space-y-1">
<label className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium font-geist">Preferred Time</label>
<select className="w-full bg-white border border-[#E5E0D8] p-3 text-sm focus:outline-none focus:border-[#728C69] transition-colors rounded-[2px] text-neutral-600 font-geist">
<option>Morning (7:30 - 12:00)</option>
<option>Afternoon (12:00 - 4:00)</option>
<option>Late Afternoon (4:00 - 6:00)</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-[11px] uppercase tracking-wider text-neutral-500 font-medium font-geist">Message (Optional)</label>
<textarea className="w-full bg-white border border-[#E5E0D8] p-3 text-sm focus:outline-none focus:border-[#728C69] transition-colors rounded-[2px]" placeholder="Specific treatment needed?" rows="2"></textarea>
</div>
<button className="w-full bg-[#2C2A26] text-white uppercase tracking-[0.15em] text-[11px] font-bold py-4 hover:bg-[#B58E61] transition-colors duration-300 rounded-[2px] mt-2 font-geist" type="submit">
                        Request Booking
                    </button>
</form>
</div>
<div className="hidden h-full flex flex-col bg-white" id="booking-success-state">
<div className="bg-[#728C69] text-white p-6 text-center">
<div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
<iconify-icon height="24" icon="lucide:check" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-geist">Request Received</h3>
</div>
<div className="p-8 md:p-10 overflow-y-auto bg-[#F9F7F2]">
<p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-6 text-center font-geist">What happens next?</p>
<div className="bg-white border border-[#E5E0D8] p-8 shadow-sm rounded-[2px] text-sm text-neutral-600 font-light leading-relaxed space-y-4">
<p className="font-geist">Thank you for requesting an appointment with Oral Health Solutions.</p>
<p className="font-geist">We will check our schedule against your preferred date and time, and contact you shortly to confirm the appointment.</p>
<div className="pt-4 border-t border-[#E5E0D8] mt-6">
<p className="font-medium text-neutral-900 font-geist">Anna Caldwell</p>
<p className="mt-1 font-geist">Clinical Director</p>
</div>
</div>
<button className="w-full mt-6 text-xs uppercase tracking-widest text-neutral-500 hover:text-neutral-900 font-geist" onclick="closeBookingModal()">Close Window</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-neutral-900/20 backdrop-blur-sm z-[60] opacity-0 pointer-events-none transition-opacity duration-500" id="menu-backdrop" onclick="closeMenu()"></div>

<div className="fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-[#F9F7F2] z-[70] transform translate-x-full shadow-2xl flex flex-col transition-transform duration-300" id="mobile-menu">
<div className="h-24 flex items-center justify-between px-6 border-b border-[#E5E0D8]">
<span className="text-sm text-[#728C69] tracking-widest border-[#728C69] border pt-1 pr-2.5 pb-1 pl-2.5 uppercase font-medium font-geist">OHS</span>
<button className="text-neutral-900 hover:text-[#728C69] transition-colors p-2 -mr-2" onclick="closeMenu()">
<iconify-icon height="24" icon="lucide:x" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-2">
<a className="mobile-menu-item text-xl font-serif tracking-tight text-neutral-900 py-3 border-b border-[#E5E0D8]/50 font-geist" href="javascript:navigateTo('page-home')">Home</a>
<div className="mobile-menu-item border-b border-[#E5E0D8]/50" onclick="toggleMobileSubmenu('mobile-submenu-about', this)">
<div className="flex items-center justify-between py-3 cursor-pointer">
<span className="text-xl font-serif tracking-tight text-neutral-900 font-geist">About</span>
<iconify-icon className="mobile-chevron text-neutral-400" icon="lucide:chevron-down" width="20"></iconify-icon>
</div>
<div className="mobile-submenu flex flex-col pl-4 gap-3 pb-3" id="mobile-submenu-about">
<a className="text-sm uppercase tracking-widest text-neutral-500 hover:text-[#728C69] font-geist" href="javascript:navigateTo('page-about')">Our Philosophy</a>
<a className="text-sm uppercase tracking-widest text-neutral-500 hover:text-[#728C69] font-geist" href="javascript:navigateTo('page-team')">Our Team</a>
</div>
</div>
<div className="mobile-menu-item border-b border-[#E5E0D8]/50" onclick="toggleMobileSubmenu('mobile-submenu-services', this)">
<div className="flex items-center justify-between py-3 cursor-pointer">
<span className="text-xl font-serif tracking-tight text-neutral-900 font-geist">Services</span>
<iconify-icon className="mobile-chevron text-neutral-400" icon="lucide:chevron-down" width="20"></iconify-icon>
</div>
<div className="mobile-submenu flex flex-col pl-4 gap-3 pb-3" id="mobile-submenu-services">
<a className="text-sm uppercase tracking-widest text-neutral-500 hover:text-[#728C69] font-geist" href="javascript:navigateTo('page-dentistry')">General Dentistry</a>
<a className="text-sm uppercase tracking-widest text-neutral-500 hover:text-[#728C69] font-geist" href="javascript:navigateTo('page-cosmetic')">Cosmetic Dentistry</a>
<a className="text-sm uppercase tracking-widest text-neutral-500 hover:text-[#728C69] font-geist" href="javascript:navigateTo('page-facial')">Appearance Medicine</a>
</div>
</div>
<a className="mobile-menu-item text-xl font-serif tracking-tight text-neutral-900 py-3 border-b border-[#E5E0D8]/50 font-geist" href="javascript:navigateTo('page-prices')">Fee</a>
<a className="mobile-menu-item text-xl font-serif tracking-tight text-neutral-900 py-3 border-b border-[#E5E0D8]/50 font-geist" href="javascript:navigateTo('footer-contact')">Contact Us</a>
<div className="mt-8 flex flex-col gap-4">
<button className="w-full bg-[#2C2A26] text-white py-4 px-4 text-xs uppercase tracking-widest font-bold font-geist" onclick="openBookingModal()">Book Appointment</button>
</div>
</div>
</div>

<div className="fixed top-0 w-full z-50 flex flex-col shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)]" id="main-header">
<button className="bg-[#2C2A26] text-white h-11 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.15em] font-semibold hover:bg-[#B58E61] transition-colors duration-300 cursor-pointer px-4 text-center w-full" onclick="openBookingModal()">
<span className="font-geist">Book your complimentary consultation</span>
<iconify-icon height="12" icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
<nav className="w-full bg-[#F9F7F2]/95 backdrop-blur-md border-b border-[#E5E0D8] transition-all duration-300">
<div className="flex h-20 lg:h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a aria-label="Go to Homepage" className="text-xl tracking-widest font-medium uppercase text-neutral-900 flex items-center gap-3 cursor-pointer group" href="javascript:navigateTo('page-home')">
<span className="text-sm text-[#728C69] group-hover:bg-[#728C69] group-hover:text-white transition-colors duration-500 tracking-widest border-[#728C69] border pt-1 pr-2.5 pb-1 pl-2.5 font-semibold font-geist">OHS</span>
<span className="font-geist">Oral Health Solutions</span>
</a>
<div className="hidden lg:flex items-center gap-8 text-sm font-light tracking-wide text-neutral-500">
<a className="hover:text-neutral-900 transition-colors font-geist" href="javascript:navigateTo('page-home')">Home</a>
<div className="group relative py-4">
<button className="hover:text-neutral-900 transition-colors flex items-center gap-1 cursor-default font-geist">About</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 w-48 pt-2 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
<div className="bg-white border border-[#E5E0D8] shadow-xl rounded-[2px] p-2 flex flex-col">
<a className="block px-4 py-3 text-xs uppercase tracking-widest hover:bg-[#F9F7F2] hover:text-[#728C69] transition-colors text-left rounded-[2px] font-geist" href="javascript:navigateTo('page-about')">Our Philosophy</a>
<a className="block px-4 py-3 text-xs uppercase tracking-widest hover:bg-[#F9F7F2] hover:text-[#728C69] transition-colors text-left rounded-[2px] font-geist" href="javascript:navigateTo('page-team')">Our Team</a>
</div>
</div>
</div>
<div className="group relative py-4">
<button className="hover:text-neutral-900 transition-colors flex items-center gap-1 cursor-default font-geist">Services</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-2 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
<div className="bg-white border border-[#E5E0D8] shadow-xl rounded-[2px] p-2 flex flex-col">
<a className="block px-4 py-3 text-xs uppercase tracking-widest hover:bg-[#F9F7F2] hover:text-[#728C69] transition-colors text-left rounded-[2px] font-geist" href="javascript:navigateTo('page-dentistry')">General Dentistry</a>
<a className="block px-4 py-3 text-xs uppercase tracking-widest hover:bg-[#F9F7F2] hover:text-[#728C69] transition-colors text-left rounded-[2px] font-geist" href="javascript:navigateTo('page-cosmetic')">Cosmetic Dentistry</a>
<a className="block px-4 py-3 text-xs uppercase tracking-widest hover:bg-[#F9F7F2] hover:text-[#728C69] transition-colors text-left rounded-[2px] font-geist" href="javascript:navigateTo('page-facial')">Appearance Medicine</a>
</div>
</div>
</div>
<a className="hover:text-neutral-900 transition-colors font-geist" href="javascript:navigateTo('page-prices')">Fee</a>
<a className="hover:text-neutral-900 transition-colors font-geist" href="javascript:navigateTo('footer-contact')">Contact Us</a>
<div className="h-4 w-px bg-[#E5E0D8] ml-4 mr-4"></div>
<div className="flex flex-col items-end leading-none gap-1">
<span className="text-[10px] uppercase tracking-widest text-[#728C69] font-medium font-geist">Book Today</span>
<a className="text-neutral-900 font-medium hover:text-[#728C69] transition-colors font-geist" href="tel:0277275262">027 727 5262</a>
</div>
</div>
<button aria-label="Open Menu" className="lg:hidden text-neutral-900 p-2 -mr-2 hover:text-[#728C69] transition-colors" onclick="toggleMenu()">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>
</div>

<main className="page-section pt-36 lg:pt-40" id="page-home">

<section className="md:h-[750px] flex overflow-hidden bg-[#F9F7F2] w-full relative items-center justify-center group">
<div className="absolute inset-0 w-full h-full overflow-hidden">
<img alt="Aesthetic Dental Environment" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/88762b5a-d1f1-4059-8217-3e015ab0b0b4_3840w.jpg" style={{}}/>
<div className="absolute inset-0 bg-[#F9F7F2]/80 backdrop-blur-[2px]"></div>
</div>
<div className="container flex h-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center justify-center md:justify-start">
<div className="md:p-14 bg-[#F9F7F2]/95 w-full max-w-3xl border-[#728C69] border-t-4 pt-8 pr-8 pb-8 pl-8 shadow-2xl backdrop-blur-md transform transition-all duration-1000 translate-y-0">

<div className="flex flex-wrap gap-2 mb-6 fade-up">
<span className="px-3 py-1 border border-[#728C69] text-[#728C69] text-[10px] uppercase tracking-widest rounded-full bg-white/50 font-geist">Otago Trained</span>
<span className="px-3 py-1 border border-[#728C69] text-[#728C69] text-[10px] uppercase tracking-widest rounded-full bg-white/50 font-geist">Architecture Background</span>
<span className="px-3 py-1 border border-[#728C69] text-[#728C69] text-[10px] uppercase tracking-widest rounded-full bg-white/50 font-geist">Owner-Operated</span>
</div>

<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] text-neutral-900 leading-[1.05] mb-6 tracking-tight">
<span className="reveal-text">
<span className="delay-100 font-geist font-semibold tracking-tighter text-5xl md:text-7xl">The Art of the Smile.</span>
</span>
<span className="reveal-text mt-2">
<span className="text-[#728C69] delay-200 font-geist font-semibold tracking-tighter text-5xl md:text-7xl">The Science of Health.</span>
</span>
</h1>
<div className="reveal-text mb-8">
<span className="delay-500">
<p className="leading-relaxed text-neutral-600 text-lg font-light font-geist">
                                A decade of dedication. Three years in the making.  Now open on Queen Street.
                            </p>
</span>
</div>
<div className="flex flex-col sm:flex-row gap-4 fade-up delay-700">
<button className="rounded-[4px] inline-flex items-center justify-center uppercase transition-all duration-300 text-xs text-white font-semibold tracking-widest bg-[#B58E61] hover:bg-[#728C69] hover:-translate-y-1 px-8 py-4 min-w-[160px] font-geist" onclick="openBookingModal()">
                            Book Your Consultation
                        </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-b border-[#E5E0D8]">
<div className="max-w-4xl mx-auto text-center">
<span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#728C69] mb-6 block fade-up font-geist">A Personal Introduction</span>
<h2 className="text-3xl md:text-4xl text-neutral-900 tracking-tight mb-8 fade-up delay-100 font-geist font-semibold">A Vision for Your Care</h2>
<div className="text-lg text-neutral-600 font-light leading-relaxed space-y-6 fade-up delay-200">
<p className="font-geist">
                        Over two decades ago, I entered the health and beauty sector, where I found a love for science and sparked a curiosity into how to enhance people’s smiles. A decade ago, I trained at the University of Otago as a dual Oral Health Therapist and Dental Hygienist.
                     </p>
<p className="font-geist">
                        Today, this practice on Queen Street is the result of a three-year plan to bring a new standard of care to the Auckland CBD. As an owner-operator and a proud Kiwi, I take this opportunity with every bit of my heart to welcome you into my practice.
                     </p>
</div>
</div>
</section>

<div className="bg-[#2C2A26] text-white py-24 px-6 border-b border-neutral-800 relative z-20" id="philosophy">
<div className="max-w-4xl mx-auto text-center">
<span className="text-[#B58E61] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block fade-up font-geist">Our Manifesto</span>
<h3 className="text-2xl md:text-3xl tracking-tight mb-8 fade-up delay-100 font-geist font-semibold">Beyond Traditional Boundaries</h3>
<p className="text-neutral-300 font-light leading-relaxed text-lg mb-8 fade-up delay-200 max-w-3xl mx-auto font-geist">
                    "Dentistry is an evolving science. I don't settle for the 'standard' because I believe my patients deserve the latest international breakthroughs. My practice is built on pushing the boundaries of what’s possible—combining the latest peer-reviewed research with innovative materials to ensure your results last longer and look more natural."
                </p>
</div>
</div>

<section className="py-24 px-6 bg-[#F9F7F2] border-b border-[#E5E0D8]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
<div className="md:w-1/2 order-2 md:order-1">
<span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#728C69] mb-4 block fade-up font-geist">The Founder's Story</span>
<h2 className="text-3xl md:text-4xl text-neutral-900 tracking-tight mb-6 fade-up delay-100 font-geist font-semibold">Where Architectural Precision Meets Research</h2>
<div className="text-lg text-neutral-600 font-light leading-relaxed space-y-6 fade-up delay-200">
<p className="font-geist">
                            My journey is driven by a passion for results that are scientifically proven using national and international accredited research. My Degree in Architecture allows me to understand your smile through three-dimensional precision, function, and aesthetics.
                        </p>
<p className="font-geist">
                            Currently undertaking Postgraduate studies in Dental Restorative, I am dedicated to the fact that science is constantly evolving. I love using new materials that have proven longevity, ensuring my patients are given the absolute best of the best care.
                        </p>
</div>
</div>
<div className="md:w-1/2 order-1 md:order-2 w-full fade-up delay-200">
<div className="reveal-img-wrapper rounded-[2px] overflow-hidden">
<div className="reveal-img">
<img alt="Architectural Detail" className="w-full h-[400px] object-cover grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af706831-697d-4c9b-812d-2ca24a9bb68b_1600w.png?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-3xl mx-auto">
<span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B58E61] mb-4 block fade-up font-geist">What I Offer</span>
<h2 className="text-3xl md:text-4xl text-neutral-900 tracking-tight mb-6 fade-up delay-100 font-geist font-semibold">High-Quality Care, Made Accessible</h2>
<div className="text-neutral-600 font-light leading-relaxed space-y-4 fade-up delay-200">
<p className="font-geist">
                            I believe everybody should have access to high-quality work lead by the latest research. I offer my patients a unique opportunity: when you are at a crossroads regarding expensive porcelain veneers, I provide cost-effective, high-end alternatives.
                         </p>
<p className="font-geist">
                            By utilizing my specialized hand-adaptation skills and performing complex work in-house, I remove the need for external tech labs and specialists. This allows me to pass those savings directly to you while maintaining total control over the quality and artistry of your result.
                         </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="fade-up delay-100 bg-[#F9F7F2] p-8 rounded-[2px] hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-[#E5E0D8]">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#728C69] mb-6 shadow-sm">
<iconify-icon height="20" icon="lucide:pen-tool" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-neutral-900 mb-4 font-geist">Restorative Smile Architecture</h3>
<p className="text-sm text-neutral-600 font-light leading-relaxed font-geist">
                            Instead of the high cost of traditional porcelain veneers, I use my architectural training and hand-adaptation skills to build your smile in-house. This gives you a high-end, cost-effective result that is built to last.
                        </p>
</div>

<div className="fade-up delay-200 bg-[#F9F7F2] p-8 rounded-[2px] hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-[#E5E0D8]">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#728C69] mb-6 shadow-sm">
<iconify-icon height="20" icon="lucide:shield" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-neutral-900 mb-4 font-geist">Foundational Periodontal Care</h3>
<p className="text-sm text-neutral-600 font-light leading-relaxed font-geist">
                            I have spent a decade dedicated to perfecting oral health services. I focus on the foundation of your smile—treating periodontal disease using the latest international research to ensure your teeth and gums are healthy for life.
                        </p>
</div>

<div className="fade-up delay-300 bg-[#F9F7F2] p-8 rounded-[2px] hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-[#E5E0D8]">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#728C69] mb-6 shadow-sm">
<iconify-icon height="20" icon="lucide:microscope" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-neutral-900 mb-4 font-geist">Evidence-Based Aesthetics</h3>
<p className="text-sm text-neutral-600 font-light leading-relaxed font-geist">
                            I push the boundaries of materials science. I don’t use "standard" methods; I use the latest scientifically proven materials to ensure your cosmetic work looks natural and has maximum longevity.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F9F7F2] border-t border-[#E5E0D8]">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="order-2 md:order-1">
<span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#728C69] mb-4 block fade-up font-geist">Visit Us</span>
<h2 className="text-3xl md:text-4xl text-neutral-900 tracking-tight mb-6 fade-up delay-100 font-geist font-semibold">Welcome to Queen Street</h2>
<p className="text-lg text-neutral-600 font-light leading-relaxed mb-8 fade-up delay-200 font-geist">
                            I have worked so hard for this moment, and it is now time the world sees what I can do for them. I look forward to meeting you and ensuring you receive the dedication and commitment you deserve.
                        </p>
<div className="flex flex-col gap-6 text-sm text-neutral-500 font-light fade-up delay-300 bg-white p-6 rounded-[2px] border border-[#E5E0D8]">
<div className="flex flex-col gap-1">
<span className="uppercase tracking-widest text-[#B58E61] font-medium text-[10px] font-geist">Address</span>
<span className="font-geist">Level 3 / 79 Queen Street, Auckland CBD, 1010</span>
</div>
<div className="flex flex-col gap-1">
<span className="uppercase tracking-widest text-[#B58E61] font-medium text-[10px] font-geist">Access</span>
<span className="font-geist">Lift and Wheelchair Accessible</span>
</div>
</div>
<div className="mt-8 fade-up delay-400">
<button className="rounded-[4px] inline-flex items-center justify-center uppercase transition-all duration-300 text-xs text-white font-semibold tracking-widest bg-[#2C2A26] hover:bg-[#B58E61] px-8 py-4 w-full md:w-auto font-geist" onclick="openBookingModal()">
                                Start Your Journey Today
                            </button>
</div>
</div>

<div className="order-1 md:order-2 w-full fade-up delay-200">
<div className="relative w-full h-[750px] rounded-[2px] overflow-hidden shadow-xl border border-[#E5E0D8] group">
<img alt="79 Queen Street Building" className="w-full h-full object-cover transform scale-[1.35] transition-transform duration-[2s] object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ccddfc87-926f-4787-b2b6-4a072d9719d9_3840w.jpg?w=800&amp;q=80"/>

<div className="absolute top-[38%] left-[20%] z-10 flex items-center gap-3">
<div className="level-marker relative bg-[#B58E61] rounded-full w-2 h-2 shadow-[0_0_15px_rgba(181,142,97,0.8)]"></div>
<div className="bg-white/95 backdrop-blur-sm border border-[#B58E61] px-4 py-2 rounded-[2px] flex items-center gap-2 shadow-xl animate-in fade-in slide-in-from-left-4 duration-1000">
<span className="text-[10px] uppercase font-bold tracking-widest text-[#2C2A26] font-geist">Level 3</span>
<iconify-icon className="text-[#B58E61]" icon="lucide:arrow-left"></iconify-icon>
</div>
</div>
</div>
<p className="text-center text-[10px] uppercase tracking-widest text-neutral-400 mt-4 font-geist">79 Queen Street</p>
</div>
</div>
</div>
</section>
</main>

<section className="page-section hidden pt-36 lg:pt-40 min-h-screen" id="page-about">
<div className="bg-[#2C2A26] text-white py-24 px-6 mb-16">
<div className="max-w-7xl mx-auto text-center">
<span className="text-[#B58E61] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block font-geist">Our Philosophy</span>
<h2 className="text-4xl md:text-5xl tracking-tight mb-8 font-geist font-semibold">Artistry Meets Evidence</h2>
<p className="text-neutral-300 text-lg max-w-2xl mx-auto font-light leading-relaxed font-geist">
                    We believe that oral health is not just about functionality, but about the harmonious balance between biological health and aesthetic beauty.
                </p>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
<div className="flex flex-col md:flex-row gap-12 items-start fade-up">
<div className="w-full md:w-1/3 text-[#728C69] uppercase tracking-widest text-xs font-bold pt-2 font-geist">The Approach</div>
<div className="w-full md:w-2/3 text-lg text-neutral-600 font-light leading-relaxed space-y-6">
<p className="font-geist">At Oral Health Solutions, we reject the "drill and fill" mentality. Instead, we embrace a holistic, architectural approach to dentistry. Every treatment is planned with the final structural integrity and visual harmony in mind.</p>
<p className="font-geist">By combining Anna Caldwell's background in architecture with her specialized training from the University of Otago, we offer a unique perspective on smile design—one that respects the structural foundation of the face while enhancing its natural beauty.</p>
</div>
</div>
<div className="w-full h-px bg-[#E5E0D8]"></div>
<div className="flex flex-col md:flex-row gap-12 items-start fade-up">
<div className="w-full md:w-1/3 text-[#728C69] uppercase tracking-widest text-xs font-bold pt-2 font-geist">The Standard</div>
<div className="w-full md:w-2/3 text-lg text-neutral-600 font-light leading-relaxed space-y-6">
<p className="font-geist">We are strictly an evidence-based practice. This means every material we use and every technique we employ is backed by current peer-reviewed research. We do not follow trends; we follow science.</p>
<p className="font-geist">This commitment ensures that our patients receive care that is not only beautiful today but healthy and stable for years to come.</p>
</div>
</div>
</div>
</section>

<section className="page-section hidden pt-36 lg:pt-40 min-h-screen" id="page-team">
<div className="max-w-7xl mx-auto px-6 py-12">

<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="fade-up">
<div className="aspect-[3/4] rounded-[2px] overflow-hidden bg-neutral-200">
<img alt="Anna Caldwell" className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5683f89a-88c1-4146-a785-ae04d902ebdb_3840w.jpg?w=800&amp;q=80" style={{}}/>
</div>
</div>
<div className="fade-up delay-100">
<span className="text-[#728C69] text-xs font-semibold tracking-[0.2em] uppercase mb-2 block font-geist leading-relaxed">Clinical Director and Registered Oral Health Therapist (Otago, 2016)</span>
<h2 className="text-4xl md:text-5xl tracking-tight text-neutral-900 mb-8 font-geist font-semibold">Anna Caldwell</h2>
<div className="space-y-6 text-neutral-600 font-light leading-relaxed text-lg">
<p className="font-geist">
                            Anna Caldwell is a dual-qualified Oral Health Therapist and Dental Hygienist, having completed her training at the prestigious University of Otago. With a unique background in Architecture, Anna brings a distinct eye for structural precision and aesthetic balance to her clinical practice.
                        </p>
<p className="font-geist">
                            Her career began over 20 years ago in the health and beauty sector, sparking a lifelong curiosity about the intersection of biology and aesthetics. Today, she is completing Postgraduate studies in Dental Restorative to further refine her mastery of modern biomaterials.
                        </p>
<p className="font-geist">
                            As the founder of Oral Health Solutions, Anna is committed to providing high-end, research-driven care that remains accessible. She specializes in hand-adapted composite restorations, periodontal therapy, and non-invasive cosmetic enhancements.
                        </p>
</div>
<div className="mt-10 pt-10 border-t border-[#E5E0D8]">
<h3 className="text-sm font-bold uppercase tracking-widest text-neutral-900 mb-4 font-geist">Credentials</h3>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="font-geist">• Bachelor of Oral Health (University of Otago)</li>
<li className="font-geist">• Bachelor of Architecture (Wellington, 2024)</li>
<li className="font-geist">• Postgraduate Certificate in Restorative Dentistry (Current)</li>
<li className="font-geist">• Background in Architecture &amp; Design</li>
<li className="font-geist">• 20+ Years in Health &amp; Beauty Sector</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden pt-36 lg:pt-40 min-h-screen" id="page-dentistry">
<div className="bg-[#F9F7F2] border-b border-[#E5E0D8] py-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<span className="text-[#728C69] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block font-geist">Services</span>
<h2 className="text-4xl text-neutral-900 mb-6 font-geist font-semibold">General Dentistry &amp; Hygiene</h2>
<p className="text-neutral-600 font-light text-lg font-geist">The foundation of a beautiful smile is exceptional health.</p>
</div>
</div>
<div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
<div className="space-y-6 fade-up">
<div className="w-12 h-12 bg-white border border-[#E5E0D8] flex items-center justify-center text-[#728C69] rounded-[2px] mb-4">
<iconify-icon icon="lucide:activity" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-neutral-900 font-geist">Comprehensive Examinations</h3>
<p className="text-neutral-500 font-light leading-relaxed font-geist">
                    A thorough assessment of your teeth, gums, and soft tissues. We use digital imaging to detect issues early, ensuring conservative and effective treatment.
                </p>
</div>
<div className="space-y-6 fade-up delay-100">
<div className="w-12 h-12 bg-white border border-[#E5E0D8] flex items-center justify-center text-[#728C69] rounded-[2px] mb-4">
<iconify-icon icon="lucide:droplets" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-neutral-900 font-geist">Periodontal Therapy</h3>
<p className="text-neutral-500 font-light leading-relaxed font-geist">
                    Targeted treatment for gum disease. We utilize the latest protocols to halt progression, reduce inflammation, and restore the pink foundation of your smile.
                </p>
</div>
<div className="space-y-6 fade-up delay-200">
<div className="w-12 h-12 bg-white border border-[#E5E0D8] flex items-center justify-center text-[#728C69] rounded-[2px] mb-4">
<iconify-icon icon="lucide:sparkles" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-neutral-900 font-geist">Dental Hygiene</h3>
<p className="text-neutral-500 font-light leading-relaxed font-geist">
                    Professional cleaning using gentle, effective technology to remove plaque and calculus, preventing decay and leaving your teeth feeling smooth and polished.
                </p>
</div>
<div className="space-y-6 fade-up delay-300">
<div className="w-12 h-12 bg-white border border-[#E5E0D8] flex items-center justify-center text-[#728C69] rounded-[2px] mb-4">
<iconify-icon icon="lucide:shield-check" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-neutral-900 font-geist">Preventative Care</h3>
<p className="text-neutral-500 font-light leading-relaxed font-geist">
                    Tailored advice on home care, diet, and lifestyle factors to empower you to maintain optimal oral health between visits.
                </p>
</div>
</div>
</section>

<section className="page-section hidden pt-36 lg:pt-40 min-h-screen" id="page-cosmetic">
<div className="bg-[#2C2A26] text-white py-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<span className="text-[#B58E61] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block font-geist">Services</span>
<h2 className="text-4xl mb-6 font-geist font-semibold">Cosmetic Dentistry</h2>
<p className="text-neutral-300 font-light text-lg font-geist">Enhancing nature with architectural precision.</p>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 py-20">
<div className="grid md:grid-cols-2 gap-16 items-center mb-24 fade-up">
<div className="order-2 md:order-1">
<h3 className="text-2xl text-neutral-900 mb-4 font-geist font-semibold">Restorative Smile Architecture</h3>
<p className="text-neutral-600 font-light leading-relaxed mb-6 font-geist">
                        Our signature service. Using high-end composite materials, Anna hand-sculpts restorations directly onto your teeth. This offers a cost-effective, minimally invasive alternative to porcelain veneers without compromising on aesthetics or longevity.
                    </p>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex items-center gap-2 font-geist"><iconify-icon className="text-[#728C69]" icon="lucide:check"></iconify-icon> Single visit transformation</li>
<li className="flex items-center gap-2 font-geist"><iconify-icon className="text-[#728C69]" icon="lucide:check"></iconify-icon> Minimally invasive (often no drilling)</li>
<li className="flex items-center gap-2 font-geist"><iconify-icon className="text-[#728C69]" icon="lucide:check"></iconify-icon> Easy to repair and modify</li>
</ul>
</div>
<div className="order-1 md:order-2 h-[400px] bg-neutral-100 rounded-[2px] overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-16 items-center fade-up">
<div className="h-[400px] bg-neutral-100 rounded-[2px] overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h3 className="text-2xl text-neutral-900 mb-4 font-geist font-semibold">Professional Whitening</h3>
<p className="text-neutral-600 font-light leading-relaxed mb-6 font-geist">
                        We offer premium in-office and take-home whitening systems. Our protocols are designed to minimize sensitivity while maximizing brightness, giving you a radiant, youthful smile safely.
                    </p>
<button className="text-[#728C69] uppercase tracking-widest text-xs font-bold hover:text-neutral-900 transition-colors font-geist" onclick="openBookingModal()">Book Consultation</button>
</div>
</div>
</div>
</section>

<section className="page-section hidden pt-36 lg:pt-40 min-h-screen" id="page-facial">
<div className="bg-[#F9F7F2] border-b border-[#E5E0D8] py-20 px-6">
<div className="max-w-4xl mx-auto text-center">
<span className="text-[#728C69] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block font-geist">Services</span>
<h2 className="text-4xl text-neutral-900 mb-6 font-geist font-semibold">Appearance Medicine</h2>
<p className="text-neutral-600 font-light text-lg font-geist">Subtle refinements to frame your smile.</p>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 py-20 text-center">
<div className="p-8 border border-[#E5E0D8] bg-white rounded-[2px] shadow-sm fade-up">
<h3 className="text-xl font-serif text-neutral-900 mb-6 font-geist">Consultation Required</h3>
<p className="text-neutral-500 font-light leading-relaxed mb-8 font-geist">
                     Due to New Zealand regulations regarding prescription medicines, we cannot advertise specific brand names or treatments online. However, we offer comprehensive facial aesthetic consultations to discuss how we can rejuvenate your appearance and frame your smile using safe, non-surgical techniques.
                 </p>
<button className="bg-[#2C2A26] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-[#B58E61] transition-colors rounded-[2px] font-geist" onclick="openBookingModal()">
                     Book Confidential Consultation
                 </button>
</div>
</div>
</section>

<main className="page-section hidden pt-36 lg:pt-40" id="page-prices">
<header className="bg-[#2F3131] py-20 px-6 border-b border-neutral-700">
<div className="max-w-4xl mx-auto text-center">
<span className="text-[#B58E61] text-xs font-semibold tracking-[0.2em] uppercase mb-4 block fade-up font-geist">Transparent Care</span>
<h1 className="text-4xl md:text-5xl text-[#F9F7F2] tracking-tight mb-6 fade-up delay-100 font-geist font-semibold">Fee Guide</h1>
<p className="text-neutral-400 font-light max-w-lg mx-auto leading-relaxed fade-up delay-200 font-geist">
                    We believe in open and honest pricing. No hidden costs, just exceptional care.
                </p>
</div>
</header>
<section className="py-24 px-6 bg-[#F9F7F2]">
<div className="max-w-4xl mx-auto space-y-16">
<div className="fade-up delay-100">
<button className="w-full text-left group" onclick="toggleFeeAccordion('fee-specials', this)">
<div className="flex items-center justify-between border-b-2 border-[#B58E61] pb-4">
<h3 className="text-2xl text-[#B58E61] flex items-center gap-3 font-geist font-semibold">
<iconify-icon className="text-[#B58E61]" icon="lucide:gift"></iconify-icon>
                                Current Specials and Promotions
                            </h3>
<iconify-icon className="fee-chevron text-[#B58E61] transition-transform duration-300" icon="lucide:chevron-down" width="24"></iconify-icon>
</div>
</button>
<div className="fee-accordion-content bg-white border-x border-b border-[#E5E0D8] rounded-b-[4px]" id="fee-specials">
<div className="p-8 space-y-6">
<div className="bg-[#F9F7F2] p-6 rounded-[2px] border border-[#E5E0D8]">
<h4 className="text-lg font-serif text-neutral-900 mb-2 font-geist font-bold">New Patient Welcome Offer</h4>
<p className="text-sm text-[#728C69] font-medium mb-3 uppercase tracking-wider font-geist">Save 20 – 30%</p>
<ul className="space-y-3 text-sm text-neutral-600 font-light font-geist">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#B58E61] shrink-0" icon="lucide:check-circle"></iconify-icon>
<span><strong>$130</strong> for 30 min Dental Hygiene</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#B58E61] shrink-0" icon="lucide:check-circle"></iconify-icon>
<span><strong>$180</strong> for 40 min appointment (Dental Hygiene + Check-up + x2 small intra oral x-rays)</span>
</li>
</ul>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-[#F9F7F2] p-6 rounded-[2px] border border-[#E5E0D8] flex flex-col justify-center text-center">
<h4 className="text-md font-serif text-neutral-900 mb-2 font-geist">Complimentary Cosmetic Consultation</h4>
<p className="text-xs text-neutral-500 font-light mb-0 font-geist">Includes Complimentary Teeth Whitening Consultation</p>
</div>
<div className="bg-[#F9F7F2] p-6 rounded-[2px] border border-[#E5E0D8] flex flex-col justify-center text-center">
<h4 className="text-md font-serif text-neutral-900 mb-2 font-geist">10% Off Standard Fees</h4>
<p className="text-xs text-neutral-500 font-light mb-0 font-geist">For Gold Card Holders and Students</p>
</div>
</div>
<button className="w-full text-xs font-bold uppercase tracking-widest text-[#728C69] hover:text-[#B58E61] font-geist border border-[#E5E0D8] py-3 mt-2" onclick="openBookingModal()">Book A Special</button>
</div>
</div>
</div>
<div className="fade-up delay-100">
<h3 className="text-2xl text-neutral-900 mb-6 flex items-center gap-3 font-geist font-semibold">
<iconify-icon className="text-[#728C69]" icon="lucide:clipboard-list"></iconify-icon>
                        Dental Check-up
                    </h3>
<div className="bg-white border border-[#E5E0D8] rounded-[4px] overflow-hidden divide-y divide-[#E5E0D8]">
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<div>
<h4 className="font-medium text-neutral-900 text-sm font-geist">New Patient Consultation</h4>
<p className="text-xs text-neutral-500 mt-1 font-light italic font-geist">Full Records, 40 min appointment</p>
</div>
<span className="font-serif text-lg text-[#B58E61] font-geist">$110</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<div>
<h4 className="font-medium text-neutral-900 text-sm font-geist">Routine Dental Check-up</h4>
<p className="text-xs text-neutral-500 mt-1 font-light italic font-geist">30 min appointment</p>
</div>
<span className="font-serif text-lg text-[#B58E61] font-geist">$70</span>
</div>
<div className="p-4 bg-[#F2EFE9] text-[11px] text-neutral-500 font-light text-center uppercase tracking-wider font-geist">
                            Includes: x2 Intra-oral X-rays, Photos, Periodontal Assessment, Oral Cancer Check, Treatment Plan
                        </div>
</div>
</div>
<div className="fade-up delay-200">
<h3 className="text-2xl text-neutral-900 mb-6 flex items-center gap-3 font-geist font-semibold">
<iconify-icon className="text-[#728C69]" icon="lucide:sparkles"></iconify-icon>
                        Thorough Professional Dental Hygiene – EMS Airflow®
                    </h3>
<div className="bg-white border border-[#E5E0D8] rounded-[4px] overflow-hidden divide-y divide-[#E5E0D8]">
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<div>
<h4 className="font-medium text-neutral-900 text-sm font-geist">New Patients</h4>
<p className="text-xs text-neutral-500 mt-1 font-light italic font-geist">60 min appointment</p>
</div>
<span className="font-serif text-lg text-[#B58E61] font-geist">$305</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<div>
<h4 className="font-medium text-neutral-900 text-sm font-geist">Existing Patients</h4>
<p className="text-xs text-neutral-500 mt-1 font-light italic font-geist">50 min appointment</p>
</div>
<span className="font-serif text-lg text-[#B58E61] font-geist">$280</span>
</div>
</div>
<h4 className="text-lg font-serif text-neutral-900 mt-10 mb-4 ml-2 font-geist">Time Sensitive Dental Hygiene – EMS Airflow®</h4>
<div className="bg-white border border-[#E5E0D8] rounded-[4px] overflow-hidden divide-y divide-[#E5E0D8]">
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">40 min appointment</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$240</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">30 min appointment</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$200</span>
</div>
<div className="p-4 bg-[#F2EFE9] text-[11px] text-neutral-500 font-light text-center uppercase tracking-wider leading-relaxed font-geist">
                            All hygiene appointments include Periodontal Assessment, EMS Airflow®, option for numbing gel or local anaesthetic at no extra costs
                        </div>
</div>
<h4 className="text-lg font-serif text-neutral-900 mt-10 mb-4 ml-2 font-geist">Standard Ultrasonic Cleaning (No EMS Airflow®)</h4>
<div className="bg-white border border-[#E5E0D8] rounded-[4px] overflow-hidden divide-y divide-[#E5E0D8]">
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">30 min appointment</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$140</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">50 min appointment</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$180</span>
</div>
</div>
</div>
<div className="fade-up delay-300">
<h3 className="text-2xl text-neutral-900 mb-6 flex items-center gap-3 font-geist font-semibold">
<iconify-icon className="text-[#728C69]" icon="lucide:activity"></iconify-icon>
                        Non-Surgical Periodontal Therapy
                    </h3>
<div className="bg-white border border-[#E5E0D8] rounded-[4px] overflow-hidden divide-y divide-[#E5E0D8]">
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<div>
<h4 className="font-medium text-neutral-900 text-sm font-geist">Consultation Required</h4>
<p className="text-xs text-neutral-500 mt-1 font-light italic font-geist">Full Records Taken - 40 min appointment</p>
</div>
<span className="font-serif text-lg text-[#B58E61] font-geist">$110</span>
</div>
<div className="px-6 py-4 bg-[#FAFAF8] border-t border-[#E5E0D8] text-xs font-semibold uppercase tracking-widest text-[#728C69] font-geist">Scaling &amp; Root Planning (SRP) with local anaesthetic</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Multiple Teeth with Periodontal Pocketing upto 5mm</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$350</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Multiple Teeth Periodontal Pocketing greater than 5mm</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$450</span>
</div>
</div>
</div>
<div className="fade-up delay-300">
<h3 className="text-2xl text-neutral-900 mb-6 flex items-center gap-3 font-geist font-semibold">
<iconify-icon className="text-[#728C69]" icon="lucide:moon"></iconify-icon>
                        Bruxism &amp; Facial Injectables
                    </h3>
<div className="bg-white border border-[#E5E0D8] rounded-[4px] overflow-hidden divide-y divide-[#E5E0D8]">
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<div>
<h4 className="font-medium text-neutral-900 text-sm font-geist">Nightguard</h4>
<p className="text-xs text-neutral-500 mt-1 font-light italic font-geist">Custom fitted occlusal splint for grinding</p>
</div>
<span className="font-serif text-lg text-[#B58E61] font-geist">$350</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<div>
<h4 className="font-medium text-neutral-900 text-sm font-geist">Muscle Relaxant (Masseter)</h4>
<p className="text-xs text-neutral-500 mt-1 font-light italic font-geist">Botulinum Toxin Injection - 40 units</p>
</div>
<span className="font-serif text-lg text-[#B58E61] font-geist">$600</span>
</div>
</div>
</div>
<div className="fade-up delay-400">
<h3 className="text-2xl text-neutral-900 mb-6 flex items-center gap-3 font-geist font-semibold">
<iconify-icon className="text-[#728C69]" icon="lucide:shield-check"></iconify-icon>
                        White Fillings
                    </h3>
<div className="bg-white border border-[#E5E0D8] rounded-[4px] overflow-hidden divide-y divide-[#E5E0D8]">
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Cosmetic Front Tooth Direct Composite Veneers</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$850 <span className="text-xs text-neutral-400 font-geist">/ tooth</span></span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Fissure Sealant</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$95</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Temporary Filling</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$135 - $280</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Small (1 surface)</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$225</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Medium (2 surfaces)</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$330</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Large (3+ surfaces)</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$390</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Complex build-up</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$430 - $600</span>
</div>
<div className="p-4 bg-[#F2EFE9] text-[11px] text-neutral-500 font-light text-center uppercase tracking-wider font-geist">
                            Includes local anaesthetic
                        </div>
</div>
</div>
<div className="fade-up delay-500">
<h3 className="text-2xl text-neutral-900 mb-6 flex items-center gap-3 font-geist font-semibold">
<iconify-icon className="text-[#728C69]" icon="lucide:scan"></iconify-icon>
                        Dental X-rays
                    </h3>
<div className="bg-white border border-[#E5E0D8] rounded-[4px] overflow-hidden divide-y divide-[#E5E0D8]">
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Intraoral X-rays</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$25 <span className="text-xs text-neutral-400 font-geist">each</span></span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Panoramic X-ray (OPG)</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$90</span>
</div>
<div className="p-4 bg-[#F2EFE9] text-[11px] text-neutral-500 font-light text-center uppercase tracking-wider font-geist">
                            Existing X-rays must be emailed prior to appointments and no older than 6 months.
                        </div>
</div>
</div>
<div className="fade-up delay-500">
<h3 className="text-2xl text-neutral-900 mb-6 flex items-center gap-3 font-geist font-semibold">
<iconify-icon className="text-[#728C69]" icon="lucide:sun"></iconify-icon>
                        Teeth Whitening
                    </h3>
<div className="bg-white border border-[#E5E0D8] rounded-[4px] overflow-hidden divide-y divide-[#E5E0D8]">
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Pola Take Home Kit</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$350</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Pola In-house</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$550</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Zoom Philips In-house</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$860</span>
</div>
<div className="p-6 flex justify-between items-center hover:bg-[#FAFAF8] transition-colors">
<span className="font-medium text-neutral-900 text-sm font-geist">Zoom Philips In-house + Take Home</span>
<span className="font-serif text-lg text-[#B58E61] font-geist">$1150</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#2C2A26] text-neutral-400 py-24 border-t border-neutral-800 text-sm font-light relative z-20" id="footer-contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

<div className="space-y-6 fade-up border-b md:border-b-0 border-neutral-800 pb-8 md:pb-0">
<h4 className="uppercase text-xs font-semibold text-white tracking-widest mb-6 font-geist">Our Location</h4>
<div className="space-y-4">
<a className="text-lg tracking-widest font-medium uppercase text-white block mb-4 font-geist" href="javascript:navigateTo('page-home')">
                            Oral Health Solutions
                        </a>
<p className="font-geist">Level 3 / 79 Queen Street<br/>Auckland CBD</p>
<p><a className="hover:text-white transition-colors font-geist" href="tel:0277275262">027 727 5262</a></p>
<p><a className="hover:text-white transition-colors font-geist" href="mailto:info@oralhealthsolutions.co.nz">info@oralhealthsolutions.co.nz</a></p>
</div>
</div>

<div className="space-y-6 fade-up delay-100 border-b md:border-b-0 border-neutral-800 pb-8 md:pb-0">
<h4 className="uppercase text-xs font-semibold text-white tracking-widest mb-6 font-geist">Essential Services</h4>
<ul className="space-y-3">
<li className="hover:text-[#B58E61] transition-colors cursor-default font-geist">• General Oral Health &amp; Exams</li>
<li className="hover:text-[#B58E61] transition-colors cursor-default font-geist">• Periodontal &amp; Gum Therapy</li>
<li className="hover:text-[#B58E61] transition-colors cursor-default font-geist">• Restorative Dental Artistry</li>
</ul>
</div>

<div className="space-y-6 fade-up delay-200">
<h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-6 font-geist">Practice Hours</h4>
<ul className="space-y-3">
<li className="flex flex-col gap-1 pb-2">
<span className="text-white font-medium font-geist">Monday – Thursday</span>
<span className="font-geist">7:30am – 6:00pm</span>
</li>
<li className="flex flex-col gap-1 pb-2 pt-2 border-t border-neutral-800">
<span className="text-white font-medium font-geist">Friday</span>
<span className="font-geist">10:00am – 5:00pm</span>
</li>
<li className="flex flex-col gap-1 pb-2 pt-2 border-t border-neutral-800">
<span className="text-white font-medium font-geist">Saturday</span>
<span className="text-[10px] uppercase text-[#B58E61] tracking-wider font-geist">By Appointment</span>
</li>
</ul>
<div className="pt-4">
<button className="w-full md:w-auto bg-[#F9F7F2] text-[#2C2A26] hover:bg-[#B58E61] hover:text-white uppercase tracking-[0.15em] text-[10px] font-bold py-3 px-6 rounded-[2px] transition-colors duration-300 font-geist" onclick="openBookingModal()">
                            Book Now
                        </button>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
