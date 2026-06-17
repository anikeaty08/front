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



{
"@context": "https://schema.org",
"@type": "LocalBusiness",
"name": "Thiya's Bridal Gown",
"image": "",
"address": {
"@type": "PostalAddress",
"streetAddress": "123 Main Road, Medavakkam",
"addressLocality": "Chennai",
"addressRegion": "Tamil Nadu",
"postalCode": "600100",
"addressCountry": "IN"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": "12.9165",
"longitude": "80.1924"
},
"telephone": "+91-98765-43210",
"openingHours": ["Mo-Sa 10:00-20:00", "Su 11:00-18:00"],
"priceRange": "₹₹₹"
}



        // Sheet elements
        const bookingSheet = document.getElementById('bookingSheet');
        const sheetOverlay = document.getElementById('sheetOverlay');
        const closeSheet = document.getElementById('closeSheet');
        const dragHandle = document.getElementById('dragHandle');
        const sheetContent = document.getElementById('sheetContent');
        const form = document.getElementById('leadForm');
        const formSuccess = document.getElementById('formSuccess');
        const submitBtnContainer = document.getElementById('submitBtnContainer');

        // All buttons that open the sheet
        const openSheetButtons = [
            document.getElementById('openSheetMobile'),
            document.getElementById('openSheetDesktop'),
            document.getElementById('openSheetHero'),
            document.getElementById('openSheetGowns'),
            document.getElementById('openSheetAbout'),
            document.getElementById('openSheetContact'),
            document.getElementById('openSheetCTA')
        ];

        let isDragging = false;
        let startY = 0;
        let currentY = 0;
        let sheetHeight = 0;

        // Open sheet function
        function openSheet() {
            document.body.style.overflow = 'hidden';
            bookingSheet.classList.remove('translate-y-full');
            sheetOverlay.classList.remove('opacity-0', 'pointer-events-none');
            sheetOverlay.classList.add('opacity-100');
            // Reset form state
            form.style.display = 'block';
            formSuccess.classList.add('hidden');
            submitBtnContainer.style.display = 'block';
        }

        // Close sheet function
        function closeSheetFn() {
            document.body.style.overflow = '';
            bookingSheet.classList.add('translate-y-full');
            sheetOverlay.classList.add('opacity-0', 'pointer-events-none');
            sheetOverlay.classList.remove('opacity-100');
            bookingSheet.style.transform = '';
        }

        // Add click handlers to all open buttons
        openSheetButtons.forEach(btn => {
            if (btn) {
                btn.addEventListener('click', openSheet);
            }
        });

        // Close handlers
        closeSheet.addEventListener('click', closeSheetFn);
        sheetOverlay.addEventListener('click', closeSheetFn);
        document.getElementById('closeSuccessBtn')?.addEventListener('click', closeSheetFn);

        // Drag to dismiss functionality
        dragHandle.addEventListener('mousedown', startDrag);
        dragHandle.addEventListener('touchstart', startDrag, { passive: true });

        function startDrag(e) {
            isDragging = true;
            startY = e.type === 'mousedown' ? e.clientY : e.touches[0].clientY;
            sheetHeight = bookingSheet.offsetHeight;
            bookingSheet.style.transition = 'none';
        }

        document.addEventListener('mousemove', drag);
        document.addEventListener('touchmove', drag, { passive: true });

        function drag(e) {
            if (!isDragging) return;
            currentY = e.type === 'mousemove' ? e.clientY : e.touches[0].clientY;
            const deltaY = currentY - startY;
            
            if (deltaY > 0) {
                bookingSheet.style.transform = `translateY(${deltaY}px)`;
            }
        }

        document.addEventListener('mouseup', endDrag);
        document.addEventListener('touchend', endDrag);

        function endDrag() {
            if (!isDragging) return;
            isDragging = false;
            bookingSheet.style.transition = '';
            
            const deltaY = currentY - startY;
            if (deltaY > 150) {
                closeSheetFn();
            } else {
                bookingSheet.style.transform = '';
            }
        }

        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeSheetFn();
            }
        });

        // Form submission
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);
            data.source = 'website';

            // Show success state
            form.style.display = 'none';
            submitBtnContainer.style.display = 'none';
            formSuccess.classList.remove('hidden');
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // FAQ Toggle
        document.querySelectorAll('.faq-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('.iconify');
                content.classList.toggle('hidden');
                icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            });
        });

        // Gallery Filter
        const filterBtns = document.querySelectorAll('.gallery-filter');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                filterBtns.forEach(b => {
                    b.classList.remove('bg-gradient-to-r', 'from-rose-400', 'to-rose-500', 'text-white', 'shadow-lg', 'shadow-rose-400/25');
                    b.classList.add('bg-white', 'text-gray-600', 'border', 'border-rose-100');
                });
                btn.classList.remove('bg-white', 'text-gray-600', 'border', 'border-rose-100');
                btn.classList.add('bg-gradient-to-r', 'from-rose-400', 'to-rose-500', 'text-white', 'shadow-lg', 'shadow-rose-400/25');

                galleryItems.forEach(item => {
                    if (filter === 'all' || item.classList.contains(filter)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
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
      

<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-opacity duration-300" id="sheetOverlay"></div>

<div className="fixed inset-x-0 bottom-0 z-50 translate-y-full transition-transform duration-500 ease-out" id="bookingSheet" style={{maxHeight: '95vh'}}>
<div className="bg-white rounded-t-3xl shadow-2xl overflow-hidden flex flex-col" style={{maxHeight: '95vh'}}>

<div className="flex justify-center pt-3 pb-2 cursor-grab active:cursor-grabbing bg-white sticky top-0 z-10" id="dragHandle">
<div className="w-10 h-1 bg-gray-300 rounded-full"></div>
</div>

<div className="px-6 pb-4 border-b border-gray-100 bg-white sticky top-6 z-10">
<div className="flex items-center justify-between">
<div>
<h3 className="text-xl font-semibold text-gray-900 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Book Appointment</h3>
<p className="text-sm text-gray-500 mt-0.5">We'll get back to you within 24 hours</p>
</div>
<button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors" id="closeSheet">
<span className="iconify text-gray-500" data-icon="lucide:x" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto overscroll-contain px-6 py-6" id="sheetContent">
<form className="space-y-5" id="leadForm">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
<input className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rose-300 focus:ring focus:ring-rose-100 transition-all outline-none text-base" name="name" placeholder="Your full name" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
<input className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rose-300 focus:ring focus:ring-rose-100 transition-all outline-none text-base" name="phone" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Email (Optional)</label>
<input className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rose-300 focus:ring focus:ring-rose-100 transition-all outline-none text-base" name="email" placeholder="your@email.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Event Date</label>
<input className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rose-300 focus:ring focus:ring-rose-100 transition-all outline-none text-base" name="event_date" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Type of Gown</label>
<div className="relative">
<select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rose-300 focus:ring focus:ring-rose-100 transition-all outline-none appearance-none bg-white text-base" name="gown_type">
<option value="">Select gown type</option>
<option value="wedding">Wedding Gown</option>
<option value="reception">Reception Gown</option>
<option value="engagement">Engagement Dress</option>
<option value="bridesmaid">Bridesmaid Dress</option>
<option value="other">Other</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
<div className="relative">
<select className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rose-300 focus:ring focus:ring-rose-100 transition-all outline-none appearance-none bg-white text-base" name="budget_range">
<option value="">Select budget</option>
<option value="under-20k">Under ₹20,000</option>
<option value="20k-35k">₹20,000 - ₹35,000</option>
<option value="35k-50k">₹35,000 - ₹50,000</option>
<option value="50k-75k">₹50,000 - ₹75,000</option>
<option value="above-75k">Above ₹75,000</option>
</select>
<span className="iconify absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">Message / Reference Photo Link</label>
<textarea className="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:border-rose-300 focus:ring focus:ring-rose-100 transition-all outline-none resize-none text-base" name="message" placeholder="Tell us about your dream gown or share a Pinterest/Instagram link" rows="3"></textarea>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-3">Preferred Contact Method</label>
<div className="flex gap-6">
<label className="flex items-center gap-2.5 cursor-pointer">
<input checked="" className="w-5 h-5 text-rose-500 border-gray-300 focus:ring-rose-200" name="contact_method" type="radio" value="whatsapp"/>
<span className="text-base text-gray-600">WhatsApp</span>
</label>
<label className="flex items-center gap-2.5 cursor-pointer">
<input className="w-5 h-5 text-rose-500 border-gray-300 focus:ring-rose-200" name="contact_method" type="radio" value="call"/>
<span className="text-base text-gray-600">Phone Call</span>
</label>
</div>
</div>

<div className="h-20"></div>
</form>

<div className="hidden text-center py-12" id="formSuccess">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-green-500/30">
<span className="iconify text-white" data-icon="lucide:check" data-width="40" style={{strokeWidth: '1.5'}}></span>
</div>
<h4 className="text-2xl font-semibold text-gray-900 mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>Thank You!</h4>
<p className="text-gray-600 mb-6">We'll get back to you within 24 hours.</p>
<button className="px-8 py-3 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors" id="closeSuccessBtn">
                        Close
                    </button>
</div>
</div>

<div className="sticky bottom-0 px-6 py-4 bg-white border-t border-gray-100" id="submitBtnContainer">
<button className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white py-4 rounded-2xl font-medium shadow-xl shadow-rose-400/25 hover:shadow-rose-400/40 transition-all active:scale-[0.98]" form="leadForm" type="submit">
<span className="iconify" data-icon="lucide:send" data-width="18" style={{strokeWidth: '1.5'}}></span>
                    Submit Enquiry
                </button>
<div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-400">
<span className="iconify" data-icon="lucide:shield-check" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Your information is safe with us
                </div>
</div>
</div>
</div>

<div className="fixed bottom-4 left-4 right-4 z-40 flex gap-3 md:hidden">
<a className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3.5 rounded-2xl shadow-lg shadow-green-500/30 font-medium text-sm" href="https://wa.me/919876543210">
<span className="iconify" data-icon="lucide:message-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
            WhatsApp
        </a>
<button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white py-3.5 rounded-2xl shadow-lg shadow-rose-400/30 font-medium text-sm" id="openSheetMobile">
<span className="iconify" data-icon="lucide:calendar" data-width="18" style={{strokeWidth: '1.5'}}></span>
            Book Now
        </button>
</div>

<header className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-rose-100/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16 md:h-20">

<a className="flex items-center gap-2" href="#home">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-rose-400 via-rose-300 to-amber-200 flex items-center justify-center shadow-lg shadow-rose-200/50">
<span className="text-white font-semibold text-lg md:text-xl" style={{fontFamily: '\'Playfair Display\', serif', letterSpacing: '-0.05em'}}>T</span>
</div>
<div className="hidden sm:block">
<span className="text-lg md:text-xl font-medium tracking-tight text-gray-900" style={{fontFamily: '\'Playfair Display\', serif'}}>Thiya's</span>
<span className="block text-xs text-rose-400 font-medium -mt-0.5">Bridal Gown</span>
</div>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors" href="#gowns">Bridal Gowns</a>
<a className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-rose-500 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<a className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-rose-500 transition-colors" href="tel:+919876543210">
<span className="iconify" data-icon="lucide:phone" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        +91 98765 43210
                    </a>
<button className="flex items-center gap-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-lg shadow-rose-400/20 hover:shadow-rose-400/40 transition-all hover:-translate-y-0.5" id="openSheetDesktop">
<span className="iconify" data-icon="lucide:calendar" data-width="16" style={{strokeWidth: '1.5'}}></span>
                        Book Appointment
                    </button>
</div>

<button className="lg:hidden p-2 rounded-xl hover:bg-rose-50 transition-colors" id="menuBtn">
<span className="iconify" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</div>

<div className="hidden lg:hidden bg-white border-t border-rose-100" id="mobileMenu">
<div className="px-4 py-4 space-y-1">
<a className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-rose-50 rounded-xl transition-colors" href="#home">Home</a>
<a className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-rose-50 rounded-xl transition-colors" href="#gowns">Bridal Gowns</a>
<a className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-rose-50 rounded-xl transition-colors" href="#process">Process</a>
<a className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-rose-50 rounded-xl transition-colors" href="#gallery">Gallery</a>
<a className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-rose-50 rounded-xl transition-colors" href="#reviews">Reviews</a>
<a className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-rose-50 rounded-xl transition-colors" href="#about">About</a>
<a className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-rose-50 rounded-xl transition-colors" href="#contact">Contact</a>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden" id="home">

<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-rose-200/40 to-amber-100/40 rounded-full blur-3xl"></div>
<div className="absolute bottom-20 left-0 w-80 h-80 bg-gradient-to-tr from-rose-100/50 to-pink-100/50 rounded-full blur-3xl"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-rose-50 to-amber-50 rounded-full blur-3xl opacity-60"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

<div className="text-center lg:text-left order-2 lg:order-1">

<div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-rose-100/50 mb-6">
<div className="flex items-center gap-0.5 text-amber-400">
<span className="iconify" data-icon="lucide:star" data-width="14" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="14" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="14" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="14" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star-half" data-width="14" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<span className="text-sm font-medium text-gray-700">4.7 • 178 reviews</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        Custom Bridal Gowns
                        <span className="block bg-gradient-to-r from-rose-400 via-rose-500 to-amber-400 bg-clip-text text-transparent">Designed &amp; Stitched</span>
<span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-gray-700">in Medavakkam, Chennai</span>
</h1>
<p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
<span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> Perfect fitting</span>
<span className="mx-3 text-rose-300">•</span>
<span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> Premium finish</span>
<span className="mx-3 text-rose-300">•</span>
<span className="inline-flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> On-time delivery</span>
</p>

<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="group flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl text-base font-medium shadow-xl shadow-green-500/25 hover:shadow-green-500/40 transition-all hover:-translate-y-1" href="https://wa.me/919876543210">
<span className="iconify" data-icon="lucide:message-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                            WhatsApp Us
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<button className="flex items-center justify-center gap-3 bg-white text-gray-800 px-8 py-4 rounded-2xl text-base font-medium shadow-lg shadow-gray-200/50 border border-rose-100 hover:border-rose-200 hover:shadow-xl transition-all hover:-translate-y-1" id="openSheetHero">
<span className="iconify" data-icon="lucide:calendar" data-width="20" style={{strokeWidth: '1.5'}}></span>
                            Book Appointment
                        </button>
</div>

<div className="mt-10 pt-8 border-t border-rose-100/50">
<p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Trusted by brides across Chennai</p>
<div className="flex items-center justify-center lg:justify-start gap-6">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-300 to-rose-400 border-2 border-white shadow-sm"></div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 border-2 border-white shadow-sm"></div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 border-2 border-white shadow-sm"></div>
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-200 to-rose-300 border-2 border-white shadow-sm flex items-center justify-center text-xs font-medium text-white">+50</div>
</div>
<span className="text-sm text-gray-600">Happy brides this year</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">
<div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">

<div className="absolute inset-4 border-2 border-rose-200/50 rounded-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-amber-50 rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/40">
<div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 via-transparent to-transparent"></div>
<img alt="Beautiful bridal gown" className="w-full h-full object-cover" loading="eager" src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=800&amp;h=1000&amp;fit=crop"/>
</div>

<div className="absolute -right-4 top-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-rose-100/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">100% Custom</p>
<p className="text-xs text-gray-500">Made to measure</p>
</div>
</div>
</div>
<div className="absolute -left-4 bottom-1/4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-rose-100/50">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:check-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="text-sm font-medium text-gray-900">On-Time</p>
<p className="text-xs text-gray-500">Delivery guaranteed</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white via-rose-50/30 to-white"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-xs font-medium uppercase tracking-wider mb-4">Why Choose Us</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Your Dream Gown, <span className="text-rose-500">Our Promise</span>
</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all hover:-translate-y-2">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-100 to-transparent rounded-bl-full opacity-50"></div>
<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center mb-6 shadow-lg shadow-rose-400/30 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:palette" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Custom Design from Scratch</h3>
<p className="text-gray-600 leading-relaxed">Every gown is uniquely crafted and tailored to your dream look, body type, and personal style preferences.</p>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all hover:-translate-y-2">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-transparent rounded-bl-full opacity-50"></div>
<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center mb-6 shadow-lg shadow-amber-400/30 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:clock" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Fast, Reliable Delivery</h3>
<p className="text-gray-600 leading-relaxed">We guarantee on-time delivery with multiple fitting sessions to ensure your gown is absolutely perfect.</p>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all hover:-translate-y-2">
<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-transparent rounded-bl-full opacity-50"></div>
<div className="relative">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center mb-6 shadow-lg shadow-pink-400/30 group-hover:scale-110 transition-transform">
<span className="iconify text-white" data-icon="lucide:heart" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">Women-Owned Shop</h3>
<p className="text-gray-600 leading-relaxed">Trusted by local brides for over 15 years. We understand your vision and bring it to life with care.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-gradient-to-b from-white to-rose-50/50" id="gowns">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-xs font-medium uppercase tracking-wider mb-4">Our Collection</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Bridal Gown <span className="text-rose-500">Styles</span>
</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">From classic ball gowns to sleek mermaid silhouettes — we bring your vision to life with premium fabrics and precision tailoring.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-rose-100/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all hover:-translate-y-2">
<div className="aspect-[3/4] bg-gradient-to-br from-rose-100 to-amber-50 overflow-hidden">
<img alt="Ball Gown" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&amp;h=500&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-xl font-semibold text-white mb-1">Ball Gown</h3>
<p className="text-rose-200 text-sm mb-3">Classic &amp; Elegant</p>
<div className="flex items-center justify-between">
<span className="text-white/80 text-sm">From ₹25,000</span>
<span className="text-white/80 text-sm">4-6 weeks</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-rose-100/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all hover:-translate-y-2">
<div className="aspect-[3/4] bg-gradient-to-br from-rose-100 to-amber-50 overflow-hidden">
<img alt="Mermaid" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&amp;h=500&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-xl font-semibold text-white mb-1">Mermaid</h3>
<p className="text-rose-200 text-sm mb-3">Glamorous &amp; Fitted</p>
<div className="flex items-center justify-between">
<span className="text-white/80 text-sm">From ₹30,000</span>
<span className="text-white/80 text-sm">5-7 weeks</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-rose-100/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all hover:-translate-y-2">
<div className="aspect-[3/4] bg-gradient-to-br from-rose-100 to-amber-50 overflow-hidden">
<img alt="A-Line" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&amp;h=500&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-xl font-semibold text-white mb-1">A-Line</h3>
<p className="text-rose-200 text-sm mb-3">Timeless &amp; Flattering</p>
<div className="flex items-center justify-between">
<span className="text-white/80 text-sm">From ₹22,000</span>
<span className="text-white/80 text-sm">4-5 weeks</span>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-rose-100/50 hover:shadow-2xl hover:shadow-rose-200/50 transition-all hover:-translate-y-2">
<div className="aspect-[3/4] bg-gradient-to-br from-rose-100 to-amber-50 overflow-hidden">
<img alt="Reception Gown" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&amp;h=500&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 right-0 p-6">
<h3 className="text-xl font-semibold text-white mb-1">Reception</h3>
<p className="text-rose-200 text-sm mb-3">Modern &amp; Chic</p>
<div className="flex items-center justify-between">
<span className="text-white/80 text-sm">From ₹18,000</span>
<span className="text-white/80 text-sm">3-4 weeks</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<button className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white px-8 py-4 rounded-2xl font-medium shadow-xl shadow-rose-400/25 hover:shadow-rose-400/40 transition-all hover:-translate-y-1" id="openSheetGowns">
<span className="iconify" data-icon="lucide:message-circle" data-width="20" style={{strokeWidth: '1.5'}}></span>
                    Discuss Your Dream Gown
                </button>
</div>
</div>
</section>

<section className="py-20 md:py-28 relative overflow-hidden" id="process">
<div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50/30"></div>
<div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-200/30 to-transparent rounded-full blur-3xl"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-xs font-medium uppercase tracking-wider mb-4">Our Process</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    From Dream to <span className="text-rose-500">Reality</span>
</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Our simple 4-step process ensures your bridal gown is crafted to perfection.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="relative">
<div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-rose-300 to-rose-200"></div>
<div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 text-center relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-rose-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-rose-400/30">1</div>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50 flex items-center justify-center mx-auto mb-6">
<span className="iconify text-rose-500" data-icon="lucide:message-square" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Consultation</h3>
<p className="text-gray-600 text-sm">Share your vision, event details, and style preferences with us via WhatsApp or in-store.</p>
</div>
</div>

<div className="relative">
<div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-rose-200 to-amber-200"></div>
<div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 text-center relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-rose-400/30">2</div>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mx-auto mb-6">
<span className="iconify text-amber-500" data-icon="lucide:pencil-ruler" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Design &amp; Measure</h3>
<p className="text-gray-600 text-sm">We take precise measurements and finalize the design, fabric, and embellishments.</p>
</div>
</div>

<div className="relative">
<div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-amber-200 to-pink-200"></div>
<div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 text-center relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-pink-400 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-amber-400/30">3</div>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center mx-auto mb-6">
<span className="iconify text-pink-500" data-icon="lucide:scissors" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Crafting &amp; Fittings</h3>
<p className="text-gray-600 text-sm">Your gown is handcrafted with multiple trial fittings to ensure perfection.</p>
</div>
</div>

<div className="relative">
<div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 text-center relative">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-pink-400/30">4</div>
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-rose-50 flex items-center justify-center mx-auto mb-6">
<span className="iconify text-rose-500" data-icon="lucide:sparkles" data-width="28" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">Final Delivery</h3>
<p className="text-gray-600 text-sm">Your dream gown is ready! We ensure on-time delivery for your special day.</p>
</div>
</div>
</div>

<div className="mt-20 max-w-3xl mx-auto">
<h3 className="text-2xl font-semibold text-center text-gray-900 mb-8 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Frequently Asked Questions</h3>
<div className="space-y-4">
<div className="bg-white rounded-2xl p-6 shadow-lg shadow-rose-100/30 border border-rose-50">
<button className="faq-btn flex items-center justify-between w-full text-left">
<span className="font-medium text-gray-900">How long does it take to make a custom gown?</span>
<span className="iconify text-rose-400 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="faq-content hidden mt-4 text-gray-600">
                            Typically 4-8 weeks depending on the complexity of the design. We recommend booking at least 2-3 months before your event for a stress-free experience.
                        </div>
</div>
<div className="bg-white rounded-2xl p-6 shadow-lg shadow-rose-100/30 border border-rose-50">
<button className="faq-btn flex items-center justify-between w-full text-left">
<span className="font-medium text-gray-900">Can I bring my own design or reference photos?</span>
<span className="iconify text-rose-400 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="faq-content hidden mt-4 text-gray-600">
                            Absolutely! We encourage you to bring reference photos, Pinterest boards, or sketches. Our designers will work with you to create the perfect interpretation.
                        </div>
</div>
<div className="bg-white rounded-2xl p-6 shadow-lg shadow-rose-100/30 border border-rose-50">
<button className="faq-btn flex items-center justify-between w-full text-left">
<span className="font-medium text-gray-900">How many fittings are included?</span>
<span className="iconify text-rose-400 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="faq-content hidden mt-4 text-gray-600">
                            We include 2-3 fitting sessions in our standard package. Additional fittings can be arranged if needed to ensure your gown fits perfectly.
                        </div>
</div>
<div className="bg-white rounded-2xl p-6 shadow-lg shadow-rose-100/30 border border-rose-50">
<button className="faq-btn flex items-center justify-between w-full text-left">
<span className="font-medium text-gray-900">What is the payment process?</span>
<span className="iconify text-rose-400 transition-transform" data-icon="lucide:chevron-down" data-width="20" style={{strokeWidth: '1.5'}}></span>
</button>
<div className="faq-content hidden mt-4 text-gray-600">
                            We require 50% advance to begin work, with the remaining balance due at final fitting. We accept cash, UPI, and bank transfers.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-gradient-to-b from-white to-rose-50/30" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-xs font-medium uppercase tracking-wider mb-4">Gallery</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Our <span className="text-rose-500">Creations</span>
</h2>
</div>

<div className="flex flex-wrap justify-center gap-3 mb-12">
<button className="gallery-filter active px-6 py-2.5 rounded-full text-sm font-medium transition-all bg-gradient-to-r from-rose-400 to-rose-500 text-white shadow-lg shadow-rose-400/25" data-filter="all">All</button>
<button className="gallery-filter px-6 py-2.5 rounded-full text-sm font-medium transition-all bg-white text-gray-600 border border-rose-100 hover:border-rose-300" data-filter="wedding">Wedding</button>
<button className="gallery-filter px-6 py-2.5 rounded-full text-sm font-medium transition-all bg-white text-gray-600 border border-rose-100 hover:border-rose-300" data-filter="reception">Reception</button>
<button className="gallery-filter px-6 py-2.5 rounded-full text-sm font-medium transition-all bg-white text-gray-600 border border-rose-100 hover:border-rose-300" data-filter="engagement">Engagement</button>
<button className="gallery-filter px-6 py-2.5 rounded-full text-sm font-medium transition-all bg-white text-gray-600 border border-rose-100 hover:border-rose-300" data-filter="bridesmaids">Bridesmaids</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="galleryGrid">
<div className="gallery-item wedding group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
<img alt="Wedding Gown" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1520962880247-cfaf541c8724?w=400&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium">Wedding Gown</p>
<p className="text-sm text-white/80">Classic Ball Gown</p>
</div>
</div>
<div className="gallery-item reception group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
<img alt="Reception Gown" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium">Reception Gown</p>
<p className="text-sm text-white/80">Modern Elegance</p>
</div>
</div>
<div className="gallery-item wedding group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
<img alt="Wedding Gown" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?w=400&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium">Wedding Gown</p>
<p className="text-sm text-white/80">Mermaid Style</p>
</div>
</div>
<div className="gallery-item engagement group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
<img alt="Engagement Dress" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium">Engagement Dress</p>
<p className="text-sm text-white/80">Romantic A-Line</p>
</div>
</div>
<div className="gallery-item bridesmaids group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
<img alt="Bridesmaid Dress" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium">Bridesmaid Dress</p>
<p className="text-sm text-white/80">Elegant Champagne</p>
</div>
</div>
<div className="gallery-item wedding group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
<img alt="Wedding Gown" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium">Wedding Gown</p>
<p className="text-sm text-white/80">Princess Style</p>
</div>
</div>
<div className="gallery-item reception group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
<img alt="Reception Gown" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium">Reception Gown</p>
<p className="text-sm text-white/80">Sleek &amp; Chic</p>
</div>
</div>
<div className="gallery-item engagement group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1">
<img alt="Engagement Dress" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" src="https://images.unsplash.com/photo-1549416878-b9ca95e8e57b?w=400&amp;h=500&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
<p className="font-medium">Engagement Dress</p>
<p className="text-sm text-white/80">Delicate Lace</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 relative overflow-hidden" id="reviews">
<div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50/30"></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-xs font-medium uppercase tracking-wider mb-4">Testimonials</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    What Our <span className="text-rose-500">Brides</span> Say
                </h2>
<div className="flex items-center justify-center gap-2 mt-6">
<div className="flex items-center gap-0.5 text-amber-400">
<span className="iconify" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star-half" data-width="20" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<span className="text-lg font-medium text-gray-700">4.7 out of 5</span>
<span className="text-gray-500">•</span>
<span className="text-gray-600">178 reviews on Google</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 relative">
<div className="absolute top-6 right-6 text-rose-200">
<span className="iconify" data-icon="lucide:quote" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex items-center gap-0.5 text-amber-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"Thiya's created my dream wedding gown exactly as I imagined! The attention to detail was incredible, and they delivered on time. I felt like a princess on my special day."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-300 to-rose-400 flex items-center justify-center text-white font-medium">P</div>
<div>
<p className="font-medium text-gray-900">Priya Sharma</p>
<p className="text-sm text-gray-500">Wedding - December 2024</p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 relative">
<div className="absolute top-6 right-6 text-rose-200">
<span className="iconify" data-icon="lucide:quote" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex items-center gap-0.5 text-amber-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"I was nervous about custom-ordering my gown, but the team at Thiya's made everything so easy. The fittings were thorough and they really listened to what I wanted."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-amber-400 flex items-center justify-center text-white font-medium">A</div>
<div>
<p className="font-medium text-gray-900">Anitha Krishnan</p>
<p className="text-sm text-gray-500">Reception - November 2024</p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 relative">
<div className="absolute top-6 right-6 text-rose-200">
<span className="iconify" data-icon="lucide:quote" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex items-center gap-0.5 text-amber-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star-half" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"The mermaid gown they made for me was stunning! Worth every penny. I got so many compliments. Highly recommend for brides in Chennai looking for quality."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 flex items-center justify-center text-white font-medium">S</div>
<div>
<p className="font-medium text-gray-900">Swetha Rajan</p>
<p className="text-sm text-gray-500">Wedding - October 2024</p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 relative">
<div className="absolute top-6 right-6 text-rose-200">
<span className="iconify" data-icon="lucide:quote" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex items-center gap-0.5 text-amber-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"As a plus-size bride, I was worried about finding the perfect gown. Thiya's never made me feel anything less than beautiful. The gown fit perfectly!"</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-300 to-pink-400 flex items-center justify-center text-white font-medium">D</div>
<div>
<p className="font-medium text-gray-900">Divya Menon</p>
<p className="text-sm text-gray-500">Wedding - September 2024</p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 relative">
<div className="absolute top-6 right-6 text-rose-200">
<span className="iconify" data-icon="lucide:quote" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex items-center gap-0.5 text-amber-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"Got both my wedding and reception gowns done here. The team is so patient and skilled. They even accommodated last-minute changes!"</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-300 to-rose-400 flex items-center justify-center text-white font-medium">M</div>
<div>
<p className="font-medium text-gray-900">Maria Joseph</p>
<p className="text-sm text-gray-500">Wedding &amp; Reception - August 2024</p>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 relative">
<div className="absolute top-6 right-6 text-rose-200">
<span className="iconify" data-icon="lucide:quote" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="flex items-center gap-0.5 text-amber-400 mb-4">
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
<span className="iconify" data-icon="lucide:star" data-width="16" style={{strokeWidth: '1.5', fill: 'currentColor'}}></span>
</div>
<p className="text-gray-600 mb-6 leading-relaxed">"Excellent quality, reasonable pricing, and wonderful service. The bridesmaid dresses for my wedding party were all perfect!"</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 flex items-center justify-center text-white font-medium">R</div>
<div>
<p className="font-medium text-gray-900">Ramya Venkatesh</p>
<p className="text-sm text-gray-500">Bridesmaids - July 2024</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-gradient-to-b from-white to-rose-50/30" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="relative">
<div className="absolute inset-4 border-2 border-rose-200/50 rounded-3xl -rotate-3"></div>
<div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-rose-200/40">
<img alt="Our Shop" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&amp;h=750&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-rose-900/30 to-transparent"></div>
</div>
<div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-rose-100">
<div className="text-center">
<p className="text-4xl font-semibold text-rose-500" style={{fontFamily: '\'Playfair Display\', serif'}}>15+</p>
<p className="text-sm text-gray-600">Years of Excellence</p>
</div>
</div>
</div>

<div>
<span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-xs font-medium uppercase tracking-wider mb-4">Our Story</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
                        A <span className="text-rose-500">Women-Owned</span> Bridal Shop
                    </h2>
<p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        Founded in 2009, Thiya's Bridal Gown has been making dreams come true for brides across Chennai. What started as a small tailoring shop in Medavakkam has grown into one of the most trusted names in custom bridal wear.
                    </p>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        As a women-owned business, we understand the importance of your special day. Every gown we create is crafted with love, precision, and an unwavering commitment to making you feel beautiful.
                    </p>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="bg-white rounded-2xl p-6 shadow-lg shadow-rose-100/30 border border-rose-50">
<p className="text-3xl font-semibold text-rose-500 mb-1" style={{fontFamily: '\'Playfair Display\', serif'}}>500+</p>
<p className="text-sm text-gray-600">Happy Brides</p>
</div>
<div className="bg-white rounded-2xl p-6 shadow-lg shadow-rose-100/30 border border-rose-50">
<p className="text-3xl font-semibold text-rose-500 mb-1" style={{fontFamily: '\'Playfair Display\', serif'}}>100%</p>
<p className="text-sm text-gray-600">Custom Made</p>
</div>
</div>
<button className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-400 to-rose-500 text-white px-8 py-4 rounded-2xl font-medium shadow-xl shadow-rose-400/25 hover:shadow-rose-400/40 transition-all hover:-translate-y-1" id="openSheetAbout">
<span className="iconify" data-icon="lucide:heart" data-width="20" style={{strokeWidth: '1.5'}}></span>
                        Book Your Appointment
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-amber-50/30"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-rose-200/30 to-transparent rounded-full blur-3xl"></div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1.5 bg-rose-100 text-rose-600 rounded-full text-xs font-medium uppercase tracking-wider mb-4">Contact Us</span>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Let's Create Your <span className="text-rose-500">Dream Gown</span>
</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div>
<div className="bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 mb-8">
<h3 className="text-xl font-semibold text-gray-900 mb-6 tracking-tight">Visit Our Shop</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-100 to-rose-50 flex items-center justify-center flex-shrink-0">
<span className="iconify text-rose-500" data-icon="lucide:map-pin" data-width="22" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="font-medium text-gray-900">Address</p>
<p className="text-gray-600">123 Main Road, Medavakkam<br/>Chennai, Tamil Nadu 600100</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center flex-shrink-0">
<span className="iconify text-green-500" data-icon="lucide:phone" data-width="22" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="font-medium text-gray-900">Phone</p>
<a className="text-gray-600 hover:text-rose-500 transition-colors" href="tel:+919876543210">+91 98765 43210</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center flex-shrink-0">
<span className="iconify text-amber-500" data-icon="lucide:clock" data-width="22" style={{strokeWidth: '1.5'}}></span>
</div>
<div>
<p className="font-medium text-gray-900">Hours</p>
<p className="text-gray-600">Mon - Sat: 10:00 AM - 8:00 PM<br/>Sunday: 11:00 AM - 6:00 PM</p>
</div>
</div>
</div>
<div className="mt-8 flex gap-4">
<a className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-xl font-medium shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all" href="https://wa.me/919876543210">
<span className="iconify" data-icon="lucide:message-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
                                WhatsApp
                            </a>
<button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-rose-400 to-rose-500 text-white py-3 rounded-xl font-medium shadow-lg shadow-rose-400/25 hover:shadow-rose-400/40 transition-all" id="openSheetContact">
<span className="iconify" data-icon="lucide:calendar" data-width="18" style={{strokeWidth: '1.5'}}></span>
                                Book Now
                            </button>
</div>
</div>

<div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-rose-100/50 border border-rose-50">
<iframe allowfullscreen="" className="grayscale hover:grayscale-0 transition-all" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31114.35893856978!2d80.17472!3d12.91656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d0b379e21c3%3A0x5a8bfb4c4a6c3b48!2sMedavakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="bg-gradient-to-br from-rose-400 to-rose-500 rounded-3xl p-8 md:p-12 shadow-2xl shadow-rose-400/30 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="relative">
<div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
<span className="iconify" data-icon="lucide:calendar-heart" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-2xl md:text-3xl font-semibold mb-4 tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Ready to Design Your Dream Gown?</h3>
<p className="text-white/90 mb-8 text-lg">Book a free consultation with our expert designers. We'll help bring your vision to life.</p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="14" style={{strokeWidth: '2'}}></span>
</div>
<span>Free consultation &amp; design session</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="14" style={{strokeWidth: '2'}}></span>
</div>
<span>Browse fabric samples &amp; designs</span>
</li>
<li className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
<span className="iconify" data-icon="lucide:check" data-width="14" style={{strokeWidth: '2'}}></span>
</div>
<span>Get an instant quote</span>
</li>
</ul>
<button className="w-full flex items-center justify-center gap-3 bg-white text-rose-500 py-4 rounded-2xl font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1" id="openSheetCTA">
<span className="iconify" data-icon="lucide:calendar" data-width="20" style={{strokeWidth: '1.5'}}></span>
                            Book Free Consultation
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-16 pb-32 md:pb-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="lg:col-span-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-400 via-rose-300 to-amber-200 flex items-center justify-center shadow-lg">
<span className="text-white font-semibold text-xl" style={{fontFamily: '\'Playfair Display\', serif', letterSpacing: '-0.05em'}}>T</span>
</div>
<div>
<span className="text-xl font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Thiya's Bridal Gown</span>
</div>
</div>
<p className="text-gray-400 mb-6 max-w-md">Custom bridal gowns designed and stitched with love in Medavakkam, Chennai. Making brides' dreams come true since 2009.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rose-500 transition-colors" href="#">
<span className="iconify" data-icon="lucide:facebook" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-green-500 transition-colors" href="https://wa.me/919876543210">
<span className="iconify" data-icon="lucide:message-circle" data-width="18" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>

<div>
<h4 className="font-semibold mb-6">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-rose-400 transition-colors" href="#gowns">Bridal Gowns</a></li>
<li><a className="text-gray-400 hover:text-rose-400 transition-colors" href="#process">Our Process</a></li>
<li><a className="text-gray-400 hover:text-rose-400 transition-colors" href="#gallery">Gallery</a></li>
<li><a className="text-gray-400 hover:text-rose-400 transition-colors" href="#reviews">Reviews</a></li>
<li><a className="text-gray-400 hover:text-rose-400 transition-colors" href="#about">About Us</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold mb-6">Contact</h4>
<ul className="space-y-3 text-gray-400">
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-rose-400" data-icon="lucide:map-pin" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            123 Main Road, Medavakkam<br/>Chennai, TN 600100
                        </li>
<li className="flex items-center gap-2">
<span className="iconify text-rose-400" data-icon="lucide:phone" data-width="16" style={{strokeWidth: '1.5'}}></span>
<a className="hover:text-rose-400 transition-colors" href="tel:+919876543210">+91 98765 43210</a>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 text-rose-400" data-icon="lucide:clock" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            Mon-Sat: 10AM-8PM<br/>Sun: 11AM-6PM
                        </li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-gray-500 text-sm">© 2024 Thiya's Bridal Gown. All rights reserved.</p>
<div className="flex items-center gap-2 text-gray-500 text-sm">
<span className="iconify text-rose-400" data-icon="lucide:heart" data-width="14" style={{strokeWidth: '1.5'}}></span>
                    Made with love in Chennai
                </div>
</div>
</div>
</footer>


    </>
  );
}
