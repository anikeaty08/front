import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "BarberShop",
"name": "The Fade Factory",
"image": "https://images.unsplash.com/photo-1585747860715-2ba37e788b70",
"@id": "https://www.thefadefactory.com",
"url": "https://www.thefadefactory.com",
"telephone": "+12482211256",
"priceRange": "$$",
"address": {
"@type": "PostalAddress",
"streetAddress": "7419 Middlebelt Road",
"addressLocality": "West Bloomfield",
"addressRegion": "MI",
"postalCode": "48322",
"addressCountry": "US"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 42.5336,
"longitude": -83.3355
},
"openingHoursSpecification": [
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Monday",
"opens": "14:00",
"closes": "19:00"
},
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
"opens": "10:00",
"closes": "20:00"
},
{
"@type": "OpeningHoursSpecification",
"dayOfWeek": "Sunday",
"opens": "13:30",
"closes": "18:00"
}
],
"sameAs": [
"https://instagram.com/thefadefactorywb"
]
}



tailwind.config = {
theme: {
extend: {
colors: {
cream: '#F5F5F5',
dark: '#050505',
charcoal: '#1A1A1A',
steel: '#D4D4D4'
},
letterSpacing: {
tightest: '-0.05em',
}
}
}
}



        lucide.createIcons();

        // Reveal Animation on Scroll
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, { threshold: 0.1 });
        revealElements.forEach(el => revealObserver.observe(el));

        // Toggle Mobile Menu
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('translate-y-full');
        }

        // Accordion
        function toggleDetails(id) {
            const el = document.getElementById(id);
            el.classList.toggle('hidden');
        }

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('py-4', 'bg-dark/80', 'backdrop-blur-md');
                nav.classList.remove('py-6');
            } else {
                nav.classList.remove('py-4', 'bg-dark/80', 'backdrop-blur-md');
                nav.classList.add('py-6');
            }
        });

        // ----------------------------------------------------
        // DYNAMIC BARBER SERVICES LOGIC
        // ----------------------------------------------------
        const servicesData = [
            { 
                id: 0, 
                name: "Color & Highlights", 
                img: "https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800&auto=format&fit=crop"
            },
            { 
                id: 1, 
                name: "Cut & Styling", 
                img: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop"
            },
            { 
                id: 2, 
                name: "Treatments & Care", 
                img: "https://images.unsplash.com/photo-1593702295094-aea22597af5f?q=80&w=800&auto=format&fit=crop"
            },
            { 
                id: 3, 
                name: "Texture & Perms", 
                img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&w=800&auto=format&fit=crop"
            },
            { 
                id: 4, 
                name: "Beard Grooming", 
                img: "https://images.unsplash.com/photo-1503951914875-452162b7f300?q=80&w=800&auto=format&fit=crop"
            },
            { 
                id: 5, 
                name: "Kids Haircut", 
                img: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=800&auto=format&fit=crop"
            }
        ];

        let activeServiceIndex = 1; 

        const serviceButtons = document.querySelectorAll('.service-option');
        const previewImg = document.getElementById('service-preview-img');

        function updateServiceUI(index) {
            serviceButtons.forEach((btn, idx) => {
                const textSpan = btn.querySelector('span');
                
                if (idx === index) {
                    btn.className = "service-option group w-full text-right md:text-left py-3 px-4 bg-dark text-white shadow-md transition-all duration-300 z-10";
                    textSpan.className = "text-[10px] md:text-xs uppercase tracking-widest font-normal";
                    textSpan.textContent = servicesData[idx].name;
                } else {
                    btn.className = "service-option group w-full text-right md:text-left py-3 px-2 transition-all duration-300 hover:opacity-100 opacity-60";
                    textSpan.className = "text-[10px] md:text-xs uppercase tracking-widest text-gray-400 group-hover:text-black font-light transition-colors";
                    textSpan.textContent = servicesData[idx].name;
                }
            });
        }

        serviceButtons.forEach((btn, index) => {
            const activate = () => {
                if (index === activeServiceIndex) return;
                activeServiceIndex = index;
                updateServiceUI(activeServiceIndex);
                
                // Smooth Image Transition
                previewImg.classList.add('opacity-50', 'scale-95');
                setTimeout(() => {
                    previewImg.src = servicesData[activeServiceIndex].img;
                    previewImg.onload = () => {
                        previewImg.classList.remove('opacity-50', 'scale-95');
                    };
                    setTimeout(() => previewImg.classList.remove('opacity-50', 'scale-95'), 50);
                }, 200);
            };

            btn.addEventListener('mouseenter', activate);
            btn.addEventListener('click', activate);
        });

        // Initialize default state for Services
        updateServiceUI(activeServiceIndex);

        // ----------------------------------------------------
        // STYLISTS CAROUSEL LOGIC
        // ----------------------------------------------------
        const stylists = [
            {
                name: "Nellie Russell",
                exp: "8 Years of Experience",
                bio: "I am an expert hairdresser, advising clients and tailoring cuts, colouring and hairstyles to suit their looks.",
                img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800&auto=format&fit=crop"
            },
            {
                name: "Julian Reed",
                exp: "12 Years of Experience",
                bio: "Specializing in classic barbering techniques and modern fades. I focus on precision and sharp lines.",
                img: "https://images.unsplash.com/photo-1534030347209-7147fd2e7a33?q=80&w=800&auto=format&fit=crop"
            },
             {
                name: "Sarah Jenkins",
                exp: "5 Years of Experience",
                bio: "Creative colorist and texture expert. Bringing vibrant life and movement to every style I create.",
                img: "https://images.unsplash.com/photo-1618077553789-35e5f43ee697?q=80&w=800&auto=format&fit=crop"
            }
        ];

        let currentStylistIndex = 0;
        
        const sImg = document.getElementById('stylist-img');
        const sName = document.getElementById('stylist-name');
        const sExp = document.getElementById('stylist-exp');
        const sBio = document.getElementById('stylist-bio');
        const sInfoContainer = document.querySelector('.stylist-info-container');

        function changeStylist(direction) {
            currentStylistIndex += direction;
            if (currentStylistIndex >= stylists.length) currentStylistIndex = 0;
            if (currentStylistIndex < 0) currentStylistIndex = stylists.length - 1;
            
            const data = stylists[currentStylistIndex];
            
            // Animate Out
            sImg.classList.add('opacity-50', 'scale-95');
            sInfoContainer.classList.add('opacity-0', 'translate-y-4');

            setTimeout(() => {
                // Update Data
                sImg.src = data.img;
                sName.innerText = data.name;
                sExp.innerText = data.exp;
                sBio.innerText = data.bio;
                
                // Animate In
                sImg.onload = () => {
                    sImg.classList.remove('opacity-50', 'scale-95');
                }
                sInfoContainer.classList.remove('opacity-0', 'translate-y-4');
                sInfoContainer.classList.add('transition-all', 'duration-500');
            }, 300);
        }
    


    DELIVERABLE A: CONNECTION SHEET
    --------------------------------
    Google Review Link: TODO (Generate from GBP -> Get more reviews)
    GBP Short Name: TODO (e.g. g.page/fade-factory-wb)
    Booking URL: TODO (e.g., Square, Fresha link)
    GA4 Measurement ID: TODO (G-XXXXXXXXXX)
    GTM ID: TODO (GTM-XXXXXXX)
    
    UTM Parameters:
    - GBP Website Link: ?utm_source=google&utm_medium=organic&utm_campaign=gbp_website
    - GBP Appointment Link: ?utm_source=google&utm_medium=organic&utm_campaign=gbp_booking
    
    DELIVERABLE B: 2-MONTH EXECUTION CHECKLIST
    --------------------------------
    Day 1-3: Setup
    [ ] Claim/Verify GBP.
    [ ] Install GA4 & GTM.
    [ ] Update all booking links with UTMs.
    [ ] Send "Reviews System" script to staff.
    
    Week 1-2: Build & Cleanup
    [ ] Launch new HTML structure (this file).
    [ ] Audit and redirect old URLs (See Deliverable D).
    [ ] Order citations (BrightLocal/WhiteSpark) for NAP: 7419 Middlebelt Road.
    
    Week 3-8: Cadence
    [ ] Post 1x Photo to GBP weekly (Staff/Shop/Cut).
    [ ] Post 1x Update to GBP weekly (Use Templates in E).
    [ ] Reply to all new reviews within 24hrs.
    
    DELIVERABLE C: TECHNICAL SPEC
    --------------------------------
    (Already implemented in HTML <head> and Schema script above).
    - Mobile-first: Tailwind classes used.
    - Schema: LocalBusiness (BarberShop) injected.
    - Meta: Description and OpenGraph tags added.
    
    DELIVERABLE D: REDIRECT MAP
    --------------------------------
    Assumed Redirects (301 Permanent):
    /home -> /
    /contact-us -> /#footer
    /book-appointment -> [EXTERNAL BOOKING URL] or /
    /services/mens-haircut -> /#services
    
    DELIVERABLE E: GBP PLAYBOOK
    --------------------------------
    Primary Category: Barber shop
    Secondary Categories: Hair salon, Hairdresser
    
    Description (Draft):
    "The Fade Factory is West Bloomfield's premier barbershop for modern grooming. Located on Middlebelt Road, we specialize in precision skin fades, beard sculpting, and hot towel razor shaves. Our industrial-style workshop focuses on craftsmanship and detail. Open 7 days a week including Sundays. Walk-ins welcome, appointments recommended."
    
    Services List (Add manually to GBP):
    - Skin Fade
    - Beard Trim & Sculpt
    - Hot Towel Shave
    - Scissor Cut
    - Line Up / Edge Up
    - Kids Haircut
    
    Q&A Seed List:
    Q: Do you take walk-ins? A: Yes, we welcome walk-ins at 7419 Middlebelt Road, but appointments are recommended to avoid wait times.
    Q: Are you open Sundays? A: Yes, we are open Sundays from 1:30 pm to 6:00 pm.
    Q: Do you do beard trims? A: Yes, we specialize in beard sculpting and hot towel finishes.
    
    DELIVERABLE F: REVIEWS SYSTEM
    --------------------------------
    In-Shop QR Copy:
    "Support Local Business. Scan to leave an honest review of your cut."
    
    SMS Template (Post-visit):
    "Thanks for visiting The Fade Factory! If you're looking sharp, drop us a quick review here: [LINK]. See you next time!"
    
    Staff One-Liner:
    "If you liked the cut, a Google review helps me out a lot." (No bribe).
    
    DELIVERABLE G: CITATIONS & NAP
    --------------------------------
    Exact NAP to use everywhere:
    Name: The Fade Factory
    Address: 7419 Middlebelt Road, West Bloomfield, MI 48322
    Phone: (248) 221-1256
    
    Top Targets: Apple Maps, Bing Places, Yelp (Free profile only), Facebook Local, YellowPages, Nextdoor.
    
    DELIVERABLE H: PROOF PACK TEMPLATE
    --------------------------------
    Metric Tracking (Monthly):
    1. GBP Search Views (Direct vs Discovery)
    2. GBP Actions (Calls, Directions, Website Clicks)
    3. Keyword Rank (Grid Tracker for "Barber West Bloomfield")
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-exclusion text-white transition-all duration-300" id="navbar">
<a aria-label="The Fade Factory Home" className="font-display text-2xl tracking-tighter uppercase font-medium z-50 relative" href="/">FADE<span className="opacity-50">.</span></a>
<div className="hidden md:flex gap-8 text-[10px] font-medium uppercase tracking-widest items-center">
<a className="hover:text-white/50 transition-colors" href="#services">Services</a>
<a className="hover:text-white/50 transition-colors" href="#about">Shop</a>
<a className="hover:text-white/50 transition-colors" href="#gallery">Looks</a>
<a className="hover:text-white/50 transition-colors" href="#stylists">Team</a>

<a className="border border-white/30 px-5 py-2 rounded-sm hover:bg-white hover:text-dark transition-colors" href="#">Book Chair</a>
</div>
<button aria-label="Toggle Menu" className="md:hidden z-50 p-2 -mr-2 text-white" onclick="toggleMenu()">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="menu"></i>
</button>
</nav>

<div className="fixed inset-0 bg-dark z-40 transform translate-y-full transition-transform duration-500 flex flex-col justify-center items-center text-white" id="mobile-menu">
<div className="flex flex-col gap-6 text-center">
<a className="font-display text-5xl uppercase tracking-tighter hover:text-gray-400 transition-colors" href="#services" onclick="toggleMenu()">Services</a>
<a className="font-display text-5xl uppercase tracking-tighter hover:text-gray-400 transition-colors" href="#about" onclick="toggleMenu()">Shop</a>
<a className="font-display text-5xl uppercase tracking-tighter hover:text-gray-400 transition-colors" href="#gallery" onclick="toggleMenu()">Looks</a>
<a className="font-display text-5xl uppercase tracking-tighter hover:text-gray-400 transition-colors" href="#stylists" onclick="toggleMenu()">Team</a>
<a className="font-display text-5xl uppercase tracking-tighter hover:text-gray-400 transition-colors" href="#" onclick="toggleMenu()">Book</a>
</div>
</div>

<header className="relative w-full h-screen min-h-[600px] flex items-end justify-between px-6 pb-12 overflow-hidden bg-dark text-white">
<div className="absolute inset-0 z-0 opacity-40">
<img alt="Interior of The Fade Factory Barbershop in West Bloomfield" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
<div className="max-w-xl">
<span className="inline-block mb-4 px-3 py-1 border border-white/20 rounded-sm text-[10px] uppercase tracking-widest backdrop-blur-md">West Bloomfield — MI</span>
<h1 className="font-display text-7xl md:text-9xl leading-[0.85] tracking-tighter mb-4 font-semibold">SHARP<br/><span className="italic font-light font-serif opacity-80">PRECISION</span></h1>
</div>
<div className="flex flex-col items-start md:items-end gap-6">
<p className="text-sm font-light text-gray-400 max-w-xs md:text-right leading-relaxed">
                    Modern grooming for the contemporary man. Precision fades, sharp lines, and classic service at 7419 Middlebelt Road.
                </p>
<div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center animate-bounce">
<i className="w-4 h-4 stroke-[1.5]" data-lucide="arrow-down"></i>
</div>
</div>
</div>
</header>

<div className="bg-white text-dark py-4 border-y border-dark overflow-hidden whitespace-nowrap z-20 relative">
<div className="inline-flex animate-marquee font-display font-medium">
<span className="text-sm md:text-base uppercase tracking-tight px-8">Skin Fades</span>
<span className="text-sm md:text-base uppercase tracking-tight px-8">+</span>
<span className="text-sm md:text-base uppercase tracking-tight px-8">Beard Sculpt</span>
<span className="text-sm md:text-base uppercase tracking-tight px-8">+</span>
<span className="text-sm md:text-base uppercase tracking-tight px-8">Hot Towel</span>
<span className="text-sm md:text-base uppercase tracking-tight px-8">+</span>
<span className="text-sm md:text-base uppercase tracking-tight px-8">Line Ups</span>
<span className="text-sm md:text-base uppercase tracking-tight px-8">+</span>
<span className="text-sm md:text-base uppercase tracking-tight px-8">Skin Fades</span>
<span className="text-sm md:text-base uppercase tracking-tight px-8">+</span>
<span className="text-sm md:text-base uppercase tracking-tight px-8">Beard Sculpt</span>
<span className="text-sm md:text-base uppercase tracking-tight px-8">+</span>
</div>
</div>

<section className="py-16 md:py-24 px-4 md:px-6 bg-[#F5F5F5] text-dark" id="services">
<div className="max-w-6xl mx-auto">

<div className="mb-6 md:mb-10 text-center md:text-left">
<span className="block text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">Reveal Your Inner Beauty</span>
<h2 className="font-display text-7xl md:text-8xl uppercase tracking-tighter leading-none text-dark font-semibold">Services</h2>
</div>

<div className="flex flex-row gap-8 h-[500px] md:h-[600px] w-full items-stretch">

<div className="w-[60%] md:w-[70%] relative bg-gray-200 overflow-hidden">
<img alt="Barber cutting hair in West Bloomfield" className="service-image w-full h-full object-cover grayscale" id="service-preview-img" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="w-[40%] md:w-[30%] flex flex-col justify-center gap-1 pl-2">
<button className="service-option group w-full text-right md:text-left py-3 px-2 transition-all duration-300" data-index="0">
<span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 group-hover:text-black font-light transition-colors">Color &amp; Highlights</span>
</button>
<button className="service-option group w-full text-right md:text-left py-3 px-4 bg-dark text-white shadow-md transition-all duration-300" data-index="1">
<span className="text-[10px] md:text-xs uppercase tracking-widest font-normal">Cut &amp; Styling</span>
</button>
<button className="service-option group w-full text-right md:text-left py-3 px-2 transition-all duration-300" data-index="2">
<span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 group-hover:text-black font-light transition-colors">Treatments &amp; Care</span>
</button>
<button className="service-option group w-full text-right md:text-left py-3 px-2 transition-all duration-300" data-index="3">
<span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 group-hover:text-black font-light transition-colors">Texture &amp; Perms</span>
</button>
<button className="service-option group w-full text-right md:text-left py-3 px-2 transition-all duration-300" data-index="4">
<span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 group-hover:text-black font-light transition-colors">Beard Grooming</span>
</button>
<button className="service-option group w-full text-right md:text-left py-3 px-2 transition-all duration-300" data-index="5">
<span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-400 group-hover:text-black font-light transition-colors">Kids Haircut</span>
</button>
</div>
</div>

<div className="mt-8 max-w-xs md:ml-auto">
<a className="block w-full text-center bg-dark text-white py-4 text-[10px] font-semibold uppercase tracking-widest hover:bg-gray-800 transition-colors shadow-xl" href="#">
                    Book An Appointment
                </a>
</div>
</div>
</section>

<section className="px-6 py-20 md:py-32 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
<div className="reveal border-l border-white/20 pl-6">
<span className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-4 block">The Shop</span>
<h2 className="text-4xl md:text-6xl font-display leading-[0.9] tracking-tight uppercase text-white font-semibold">Not a salon.<br/>A <span className="text-gray-500">Workshop.</span></h2>
</div>
<div className="reveal space-y-8 pt-4">
<p className="text-sm leading-relaxed text-gray-400 font-light">
                    We strip away the unnecessary. The Fade Factory is an industrial space dedicated to the craft of barbering in West Bloomfield. Concrete floors, steel chairs, and razor-sharp focus. We engineer confidence through precision.
                </p>
<div className="flex gap-12 border-t border-white/10 pt-8">
<div>
<span className="block text-3xl md:text-4xl font-display text-white">04</span>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Master Barbers</span>
</div>
<div>
<span className="block text-3xl md:text-4xl font-display text-white">100%</span>
<span className="text-[10px] uppercase tracking-wider text-gray-500">Satisfaction</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white text-dark py-20" id="full-menu">
<div className="px-6 mb-12 flex items-end justify-between relative overflow-hidden">
<h2 className="text-8xl md:text-[12rem] leading-none font-display tracking-tighter opacity-5 select-none absolute left-0 right-0 text-center pointer-events-none font-semibold">PRICING</h2>
<div className="relative z-10 w-full flex justify-between items-end border-b border-dark pb-4">
<span className="text-sm font-semibold uppercase tracking-widest">Pricing Breakdown</span>
<span className="text-xs text-gray-500">EST. 2024</span>
</div>
</div>
<div className="flex flex-col max-w-5xl mx-auto">

<div className="group border-b border-gray-200 relative overflow-hidden cursor-pointer transition-colors hover:bg-dark hover:text-white" onclick="toggleDetails('s1')">
<div className="px-6 py-6 md:py-8 flex justify-between items-center relative z-10">
<div className="flex items-baseline gap-4 md:gap-8">
<span className="text-xs font-mono opacity-50">01</span>
<h3 className="text-2xl md:text-4xl font-display uppercase tracking-tight font-medium">Skin Fade</h3>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-medium uppercase tracking-widest hidden md:block">$45.00</span>
<i className="w-4 h-4 stroke-[1.5] transition-transform group-hover:rotate-45" data-lucide="plus"></i>
</div>
</div>
<div className="hidden px-6 pb-6 md:pl-20 text-xs md:text-sm font-light opacity-70" id="s1">
<p className="max-w-md">Zero on the sides blended to the top. Includes straight razor line up and styling.</p>
</div>
</div>
<div className="group border-b border-gray-200 relative overflow-hidden cursor-pointer transition-colors hover:bg-dark hover:text-white" onclick="toggleDetails('s2')">
<div className="px-6 py-6 md:py-8 flex justify-between items-center relative z-10">
<div className="flex items-baseline gap-4 md:gap-8">
<span className="text-xs font-mono opacity-50">02</span>
<h3 className="text-2xl md:text-4xl font-display uppercase tracking-tight font-medium">Scissor Cut</h3>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-medium uppercase tracking-widest hidden md:block">$50.00</span>
<i className="w-4 h-4 stroke-[1.5] transition-transform group-hover:rotate-45" data-lucide="plus"></i>
</div>
</div>
<div className="hidden px-6 pb-6 md:pl-20 text-xs md:text-sm font-light opacity-70" id="s2">
<p className="max-w-md">Classic gentlemen's cut using shears only. For longer styles requiring flow and texture.</p>
</div>
</div>
<div className="group border-b border-gray-200 relative overflow-hidden cursor-pointer transition-colors hover:bg-dark hover:text-white" onclick="toggleDetails('s3')">
<div className="px-6 py-6 md:py-8 flex justify-between items-center relative z-10">
<div className="flex items-baseline gap-4 md:gap-8">
<span className="text-xs font-mono opacity-50">03</span>
<h3 className="text-2xl md:text-4xl font-display uppercase tracking-tight font-medium">Beard Trim</h3>
</div>
<div className="flex items-center gap-4">
<span className="text-xs font-medium uppercase tracking-widest hidden md:block">$30.00</span>
<i className="w-4 h-4 stroke-[1.5] transition-transform group-hover:rotate-45" data-lucide="plus"></i>
</div>
</div>
<div className="hidden px-6 pb-6 md:pl-20 text-xs md:text-sm font-light opacity-70" id="s3">
<p className="max-w-md">Sculpting, shaping, and lining. Finished with beard oil and hot towel.</p>
</div>
</div>
</div>
</section>

<section className="w-full bg-black text-white px-5 py-12 md:py-24 relative overflow-hidden" id="gallery">

<div className="flex justify-between items-end mb-4 relative z-20 mix-blend-difference">
<span className="text-[10px] uppercase tracking-widest text-white/80 font-medium">Trusted by West Bloomfield</span>
<a className="text-[10px] text-white underline underline-offset-4 decoration-1 decoration-white/50 hover:decoration-white transition-all" href="https://instagram.com/thefadefactorywb" target="_blank">View more on IG</a>
</div>

<div className="relative w-full z-0 pointer-events-none select-none leading-none">
<h2 className="font-display text-[17vw] uppercase tracking-tighter text-white leading-[0.75] font-semibold">
                Gallery <span className="tracking-widest">—</span> H”
            </h2>
</div>

<div className="grid grid-cols-2 gap-3 relative z-10 w-full mt-4">

<div className="flex flex-col gap-16 mt-16">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/5] bg-neutral-900 overflow-hidden mb-2">
<img alt="Short haircut style" className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<span className="block text-[10px] uppercase tracking-widest font-medium text-white/90">Short Crop</span>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[3/4] bg-neutral-900 overflow-hidden mb-2">
<img alt="Beard trim and fade" className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1523264626875-92c90c769493?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<span className="block text-[10px] uppercase tracking-widest font-medium text-white/90">Beard Detail</span>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[4/5] bg-neutral-900 overflow-hidden mb-2">
<img alt="Textured men's haircut" className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<span className="block text-[10px] uppercase tracking-widest font-medium text-white/90">Textured Cut</span>
</div>
</div>

<div className="flex flex-col gap-16 -mt-12 md:-mt-24">

<div className="group cursor-pointer">
<div className="w-full aspect-[9/14] bg-neutral-900 overflow-hidden mb-2">
<img alt="Modern Mullet Wolf Cut" className="w-full h-full object-cover grayscale brightness-75 contrast-125 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<span className="block text-[10px] uppercase tracking-widest font-medium text-white/90">Wolf Cut</span>
</div>

<div className="group cursor-pointer">
<div className="w-full aspect-[3/4] bg-neutral-900 overflow-hidden mb-2">
<img alt="Classic side part fade" className="w-full h-full object-cover grayscale brightness-90 contrast-125 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<span className="block text-[10px] uppercase tracking-widest font-medium text-white/90">Classic Part</span>
</div>
</div>
</div>
</section>

<section className="bg-white text-dark py-20 md:py-32 border-b border-dark/5" id="stylists">
<div className="max-w-xl md:max-w-5xl mx-auto px-6">

<div className="mb-10 text-left">
<span className="block text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">Our Team</span>
<h2 className="font-display text-6xl md:text-8xl uppercase tracking-tighter leading-none text-dark font-semibold">Stylists</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">

<div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden relative">
<img alt="Stylist Portrait" className="w-full h-full object-cover grayscale transition-all duration-500" id="stylist-img" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="flex flex-col justify-between h-full pt-4 min-h-[400px]">
<div className="stylist-info-container">
<span className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-400 mb-4 font-medium" id="stylist-exp">8 Years of Experience</span>
<h3 className="font-display text-4xl md:text-5xl uppercase tracking-tighter font-semibold mb-6" id="stylist-name">Nellie Russell</h3>
<p className="text-sm md:text-base font-light text-gray-600 leading-relaxed max-w-sm mb-12" id="stylist-bio">
                            I am an expert hairdresser, advising clients and tailoring cuts, colouring and hairstyles to suit their looks.
                        </p>
</div>
<div className="mt-auto">

<div className="flex gap-12 mb-10">
<button aria-label="Previous Stylist" className="group" onclick="changeStylist(-1)">
<i className="w-8 h-8 stroke-[1.2] text-dark group-hover:text-gray-400 transition-colors" data-lucide="arrow-left"></i>
</button>
<button aria-label="Next Stylist" className="group" onclick="changeStylist(1)">
<i className="w-8 h-8 stroke-[1.2] text-dark group-hover:text-gray-400 transition-colors" data-lucide="arrow-right"></i>
</button>
</div>

<button className="w-full bg-dark text-white py-5 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] hover:bg-gray-800 transition-colors">
                            Choose A Specialist
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="w-full h-[60vh] relative overflow-hidden flex items-center justify-center bg-black">
<div className="absolute inset-0 bg-dark">
<img alt="Barber Tools Close Up" className="w-full h-full object-cover opacity-40 grayscale hover:scale-105 transition-transform duration-[3s]" src="https://images.unsplash.com/photo-1622287162716-f311baa3129e?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 text-center text-white px-6">
<h2 className="text-5xl md:text-8xl font-display tracking-tighter uppercase mb-6 mix-blend-lighten font-semibold">Stay Sharp</h2>
<a className="inline-block border border-white/50 text-white px-8 py-3 rounded-sm text-[10px] font-semibold uppercase tracking-widest hover:bg-white hover:text-dark transition-colors" href="https://instagram.com/thefadefactorywb" target="_blank">Instagram</a>
</div>
</section>

<footer className="bg-charcoal text-white pt-24 pb-8 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-24">
<div className="w-full md:w-1/2">
<h2 className="text-6xl md:text-8xl font-display tracking-tighter leading-none mb-6 font-semibold">NEXT<br/>CUT.</h2>
<div className="flex gap-4">
<a className="inline-block bg-white text-dark px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors" href="#">Book Now</a>
<a className="inline-block border border-white/30 px-6 py-3 rounded-sm text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-dark transition-colors" href="tel:2482211256">Call (248) 221-1256</a>
</div>
</div>
<div className="w-full md:w-1/2 grid grid-cols-2 gap-8 text-gray-400">
<div itemscope="" itemtype="https://schema.org/PostalAddress">
<h4 className="text-[10px] font-semibold uppercase tracking-widest mb-4 text-white">Location</h4>
<p className="text-xs leading-relaxed">
<span itemprop="streetAddress">7419 Middlebelt Road</span><br/>
<span itemprop="addressLocality">West Bloomfield</span>, <span itemprop="addressRegion">MI</span> <span itemprop="postalCode">48322</span>
</p>
<a className="text-[10px] uppercase underline mt-2 inline-block" href="https://www.google.com/maps?q=7419+Middlebelt+Road,+West+Bloomfield,+MI+48322" target="_blank">Get Directions</a>
</div>
<div>
<h4 className="text-[10px] font-semibold uppercase tracking-widest mb-4 text-white">Hours</h4>
<div className="text-xs leading-relaxed space-y-1">
<p><span className="w-8 inline-block">Mon</span> 2:00 pm – 7:00 pm</p>
<p><span className="w-8 inline-block">Tu-Sa</span> 10:00 am – 8:00 pm</p>
<p><span className="w-8 inline-block">Sun</span> 1:30 pm – 6:00 pm</p>
</div>
</div>
</div>
</div>
<div className="mt-24 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-600">
<span>© 2024 The Fade Factory.</span>
</div>
</footer>





    </>
  );
}
