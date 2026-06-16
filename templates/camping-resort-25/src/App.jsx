import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "Campground",
"name": "Hampen Camping",
"image": "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1200",
"address": {
"@type": "PostalAddress",
"streetAddress": "Hovedgaden 12",
"addressLocality": "Hampen",
"postalCode": "7362",
"addressCountry": "DK"
},
"geo": {
"@type": "GeoCoordinates",
"latitude": 56.0024,
"longitude": 9.3876
},
"url": "https://hampencamping.com",
"telephone": "+45-12345678",
"priceRange": "DKK",
"amenityFeature": [
"Strøm",
"Badefaciliteter",
"Fælleskøkken",
"Legeplads",
"Søadgang"
]
}



tailwind.config = {
theme: {
extend: {
colors: {
forest: '#2C4A3B',    // Deep Danish Green
'forest-light': '#4A7A62',
sand: '#EAE6DF',      // Warm Scandinavian background
stone: '#96948D',
clay: '#C26D53',      // Accent color
charcoal: '#1F2937',
white: '#FFFFFF',
'off-white': '#F9F9F7'
},
fontFamily: {
'sans': ['Inter', 'sans-serif']
}
}
}
}



        // ========================
        // Initialization
        // ========================
        document.addEventListener('DOMContentLoaded', () => {
            // Loader
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => loader.style.display = 'none', 700);
            }, 1000);

            initHeaderScroll();
            initMobileMenu();
            initScrollActivity();
            initBookingModal();
            initContactForm();
            setDateInputs();
        });

        // ========================
        // Header Logic
        // ========================
        function initHeaderScroll() {
            const header = document.getElementById('header');
            const bg = document.getElementById('headerBg');
            const logoImg = document.getElementById('logoImg');
            const links = document.querySelectorAll('.nav-link');
            const menuIcon = document.getElementById('menuIcon');

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    // Scrolled state (White background, Dark content)
                    bg.classList.remove('bg-white/0');
                    bg.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
                    
                    // Logo Filter: Remove invert (shows black logo)
                    logoImg.classList.remove('invert');
                    
                    menuIcon.classList.replace('text-white', 'text-forest');
                    links.forEach(l => {
                        l.classList.replace('text-white/90', 'text-stone');
                        l.classList.replace('hover:text-white', 'hover:text-forest');
                    });
                } else {
                    // Top state (Transparent background, White content)
                    bg.classList.add('bg-white/0');
                    bg.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm');
                    
                    // Logo Filter: Add invert (shows white logo from black source)
                    logoImg.classList.add('invert');
                    
                    menuIcon.classList.replace('text-forest', 'text-white');
                    links.forEach(l => {
                        l.classList.replace('text-stone', 'text-white/90');
                        l.classList.replace('hover:text-forest', 'hover:text-white');
                    });
                }
            });
        }

        // ========================
        // Mobile Menu
        // ========================
        function initMobileMenu() {
            const btn = document.getElementById('mobileMenuBtn');
            const menu = document.getElementById('mobileMenu');
            const links = menu.querySelectorAll('a');
            let isOpen = false;

            btn.addEventListener('click', () => {
                isOpen = !isOpen;
                if (isOpen) {
                    menu.classList.remove('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = 'hidden';
                } else {
                    menu.classList.add('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = '';
                }
            });

            links.forEach(l => l.addEventListener('click', () => {
                isOpen = false;
                menu.classList.add('opacity-0', 'pointer-events-none');
                document.body.style.overflow = '';
            }));
        }

        // ========================
        // Activities Scroll
        // ========================
        function initScrollActivity() {
            const container = document.getElementById('activityScroll');
            const prev = document.getElementById('prevActivity');
            const next = document.getElementById('nextActivity');

            next.addEventListener('click', () => {
                container.scrollBy({ left: 340, behavior: 'smooth' });
            });
            
            prev.addEventListener('click', () => {
                container.scrollBy({ left: -340, behavior: 'smooth' });
            });
        }

        // ========================
        // Booking Logic
        // ========================
        function openBooking(type, price) {
            const modal = document.getElementById('bookingModal');
            const content = document.getElementById('bookingModalContent');
            
            document.getElementById('modalSpotType').textContent = type;
            document.getElementById('modalPrice').textContent = price + " DKK";
            
            modal.classList.remove('opacity-0', 'pointer-events-none');
            content.classList.remove('scale-95');
            content.classList.add('scale-100');
            document.body.style.overflow = 'hidden';
        }

        function closeBooking() {
            const modal = document.getElementById('bookingModal');
            const content = document.getElementById('bookingModalContent');
            
            modal.classList.add('opacity-0', 'pointer-events-none');
            content.classList.add('scale-95');
            content.classList.remove('scale-100');
            document.body.style.overflow = '';
        }

        function initBookingModal() {
            const form = document.getElementById('bookingForm');
            
            // Close on outside click
            document.getElementById('bookingModal').addEventListener('click', (e) => {
                if (e.target === document.getElementById('bookingModal')) closeBooking();
            });

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                closeBooking();
                showToast();
                form.reset();
            });
        }

        // ========================
        // Contact Form
        // ========================
        function initContactForm() {
            const form = document.getElementById('contactForm');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                showToast();
                form.reset();
            });
        }

        // ========================
        // Utils
        // ========================
        function showToast() {
            const toast = document.getElementById('successToast');
            toast.classList.remove('translate-y-32');
            setTimeout(() => {
                toast.classList.add('translate-y-32');
            }, 4000);
        }

        function setDateInputs() {
            const inputs = document.querySelectorAll('input[type="date"]');
            const today = new Date().toISOString().split('T')[0];
            inputs.forEach(input => input.min = today);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-forest z-50 flex items-center justify-center transition-opacity duration-700" id="loader">
<div className="text-center">
<div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">

<img alt="Hampen Camping" className="w-full h-full object-contain brightness-0 invert animate-pulse opacity-90" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBUcmVlIEZhciBMZWZ0IC0tPgogIDxwYXRoIGQ9Ik0zMCAxMjAgTDU1IDcwIEw4MCAxMjAgWiIgZmlsbD0iYmxhY2siLz4KICA8IS0tIFRyZWUgTGVmdCAtLT4KICA8cGF0aCBkPSJNNjAgMTIwIEw5MCA1NSBMMTIwIDEyMCBaIiBmaWxsPSJibGFjayIvPgogIDwhLS0gVHJlZSBSaWdodCAtLT4KICA8cGF0aCBkPSJNMjIwIDEyMCBMMjQ1IDcwIEwyNzAgMTIwIFoiIGZpbGw9ImJsYWNrIi8+CiAgPCEtLSBUcmVlIEZhciBSaWdodCAtLT4KICA8cGF0aCBkPSJNMjUwIDEyMCBMMjgwIDYwIEwzMTAgMTIwIFoiIGZpbGw9ImJsYWNrIi8+CiAgPCEtLSBUZW50IC0tPgogIDxwYXRoIGQ9Ik04MCAxMjAgTDE1MCA0MCBMMjIwIDEyMCBaIiBmaWxsPSJibGFjayIvPgogIDxwYXRoIGQ9Ik0xNTAgNTAgTDE5NSAxMjAgSDEwNSBaIiBmaWxsPSJ3aGl0ZSIvPgogIDxwYXRoIGQ9Ik0xNTAgNTAgTDE4MCAxMjAgSDEyMCBaIiBmaWxsPSJibGFjayIvPgogIDwhLS0gTW9vbiAtLT4KICA8cGF0aCBkPSJNMjAwIDMwIEEgMjAgMjAgMCAxIDAgMjAwIDYwIEEgMTUgMTUgMCAxIDEgMjAwIDMwIiBmaWxsPSJibGFjayIvPgogIDwhLS0gVGV4dCAtLT4KICA8dGV4dCB4PSIxNTAiIHk9IjE2NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIiBsZXR0ZXItc3BhY2luZz0iMiI+SEFNUEVOIENBTVBJTkc8L3RleHQ+Cjwvc3ZnPg=="/>
</div>
</div>
</div>

<header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 border-b border-transparent" id="header">
<div className="absolute inset-0 bg-white/0 backdrop-blur-none transition-all duration-500" id="headerBg"></div>
<nav className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-24">

<a className="flex items-center z-50" href="#home">
<img alt="Hampen Camping" className="h-16 w-auto transition-all duration-300 brightness-0 invert" id="logoImg" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBUcmVlIEZhciBMZWZ0IC0tPgogIDxwYXRoIGQ9Ik0zMCAxMjAgTDU1IDcwIEw4MCAxMjAgWiIgZmlsbD0iYmxhY2siLz4KICA8IS0tIFRyZWUgTGVmdCAtLT4KICA8cGF0aCBkPSJNNjAgMTIwIEw5MCA1NSBMMTIwIDEyMCBaIiBmaWxsPSJibGFjayIvPgogIDwhLS0gVHJlZSBSaWdodCAtLT4KICA8cGF0aCBkPSJNMjIwIDEyMCBMMjQ1IDcwIEwyNzAgMTIwIFoiIGZpbGw9ImJsYWNrIi8+CiAgPCEtLSBUcmVlIEZhciBSaWdodCAtLT4KICA8cGF0aCBkPSJNMjUwIDEyMCBMMjgwIDYwIEwzMTAgMTIwIFoiIGZpbGw9ImJsYWNrIi8+CiAgPCEtLSBUZW50IC0tPgogIDxwYXRoIGQ9Ik04MCAxMjAgTDE1MCA0MCBMMjIwIDEyMCBaIiBmaWxsPSJibGFjayIvPgogIDxwYXRoIGQ9Ik0xNTAgNTAgTDE5NSAxMjAgSDEwNSBaIiBmaWxsPSJ3aGl0ZSIvPgogIDxwYXRoIGQ9Ik0xNTAgNTAgTDE4MCAxMjAgSDEyMCBaIiBmaWxsPSJibGFjayIvPgogIDwhLS0gTW9vbiAtLT4KICA8cGF0aCBkPSJNMjAwIDMwIEEgMjAgMjAgMCAxIDAgMjAwIDYwIEEgMTUgMTUgMCAxIDEgMjAwIDMwIiBmaWxsPSJibGFjayIvPgogIDwhLS0gVGV4dCAtLT4KICA8dGV4dCB4PSIxNTAiIHk9IjE2NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIiBsZXR0ZXItc3BhY2luZz0iMiI+SEFNUEVOIENBTVBJTkc8L3RleHQ+Cjwvc3ZnPg=="/>
</a>

<div className="hidden lg:flex items-center space-x-8">
<a className="nav-link text-base font-medium text-white/90 hover:text-white transition-colors duration-300" href="#home">Forside</a>
<a className="nav-link text-base font-medium text-white/90 hover:text-white transition-colors duration-300" href="#stay">Overnatning</a>
<a className="nav-link text-base font-medium text-white/90 hover:text-white transition-colors duration-300" href="#facilities">Faciliteter</a>
<a className="nav-link text-base font-medium text-white/90 hover:text-white transition-colors duration-300" href="#activities">Aktiviteter</a>
<a className="nav-link text-base font-medium text-white/90 hover:text-white transition-colors duration-300" href="#contact">Kontakt</a>
<a className="inline-flex items-center px-6 py-2.5 bg-white text-forest text-base font-medium rounded-full hover:bg-sand transition-all duration-300" href="#booking">
                        Book Plads
                    </a>
</div>

<button aria-label="Toggle menu" className="lg:hidden z-50 p-2" id="mobileMenuBtn">
<span className="iconify w-6 h-6 text-white" data-icon="lucide:menu" id="menuIcon" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</nav>

<div className="lg:hidden fixed inset-0 bg-forest z-40 opacity-0 pointer-events-none transition-all duration-500 flex items-center justify-center" id="mobileMenu">
<nav className="flex flex-col items-center space-y-8 p-6 w-full max-w-sm">
<a className="mobile-nav-link text-2xl font-medium text-white/90 hover:text-white" href="#home">Forside</a>
<a className="mobile-nav-link text-2xl font-medium text-white/90 hover:text-white" href="#stay">Overnatning</a>
<a className="mobile-nav-link text-2xl font-medium text-white/90 hover:text-white" href="#facilities">Faciliteter</a>
<a className="mobile-nav-link text-2xl font-medium text-white/90 hover:text-white" href="#activities">Aktiviteter</a>
<a className="mobile-nav-link w-full py-4 bg-white text-forest text-center font-medium rounded-xl mt-4" href="#booking">Book Nu</a>
</nav>
</div>
</header>
<main>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Camping i Danmark" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-forest/30 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-transparent to-black/20"></div>
</div>

<div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
<span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-widest uppercase mb-8 animate-fade-in">
                    Hjertet af Jylland
                </span>
<h1 className="text-5xl sm:text-6xl lg:text-7xl text-white font-medium tracking-tight leading-tight mb-10 animate-slide-up">
                    Find Hyggen i <br/>
<span className="text-sand italic font-serif">Naturen</span>
</h1>
<p className="text-white/80 text-xl leading-relaxed max-w-2xl mx-auto mb-12 animate-slide-up" style={{animationDelay: '0.2s'}}>
                    Oplev autentisk dansk camping i Hampen. Pladser ved søen, dybe skove og minder der venter på at blive skabt.
                </p>

<div className="bg-white/95 backdrop-blur-xl p-2.5 rounded-3xl sm:rounded-full max-w-4xl mx-auto shadow-2xl animate-slide-up" style={{animationDelay: '0.4s'}}>
<form className="flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-stone/10" id="heroSearchForm">
<div className="w-full sm:w-1/4 px-8 py-4">
<label className="block text-xs uppercase tracking-wider text-stone mb-1 font-medium">Ankomst</label>
<input className="w-full bg-transparent text-charcoal font-medium focus:outline-none text-base cursor-pointer" required="" type="date"/>
</div>
<div className="w-full sm:w-1/4 px-8 py-4">
<label className="block text-xs uppercase tracking-wider text-stone mb-1 font-medium">Afrejse</label>
<input className="w-full bg-transparent text-charcoal font-medium focus:outline-none text-base cursor-pointer" required="" type="date"/>
</div>
<div className="w-full sm:w-1/4 px-8 py-4 relative">
<label className="block text-xs uppercase tracking-wider text-stone mb-1 font-medium">Type</label>
<select className="w-full bg-transparent text-charcoal font-medium focus:outline-none text-base appearance-none cursor-pointer">
<option>Teltplads</option>
<option>Campingvogn</option>
<option>Luksushytte</option>
</select>
<span className="iconify absolute right-8 top-1/2 mt-1 w-4 h-4 text-stone pointer-events-none" data-icon="lucide:chevron-down"></span>
</div>
<div className="w-full sm:w-1/4 p-2">
<button className="w-full h-14 bg-forest text-white font-medium rounded-full hover:bg-forest-light transition-all duration-300 shadow-lg flex items-center justify-center gap-2 text-base" type="submit">
<span className="iconify w-5 h-5" data-icon="lucide:search"></span>
                                Søg
                            </button>
</div>
</form>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
<a className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300" href="#stay">
<span className="iconify w-6 h-6" data-icon="lucide:arrow-down" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</section>

<section className="py-28 bg-off-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-3xl overflow-hidden">
<img alt="Campingliv" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526491109672-74740652028d?w=1200&amp;q=80"/>
</div>
<div className="absolute -bottom-8 -right-8 w-56 h-56 bg-white p-8 rounded-3xl shadow-xl flex flex-col justify-center items-center text-center">
<span className="iconify w-10 h-10 text-forest mb-3" data-icon="lucide:award" style={{strokeWidth: '1'}}></span>
<span className="text-4xl font-medium text-charcoal tracking-tight">4.8</span>
<span className="text-stone text-xs uppercase tracking-wide mt-2">Google Reviews</span>
</div>
</div>
<div>
<span className="text-forest text-sm font-medium tracking-wide uppercase block mb-5">Velkommen til Hampen</span>
<h2 className="text-4xl md:text-5xl font-medium text-charcoal tracking-tight mb-8">
                            Hvor Dansk Natur <br/>Møder Det Simple Liv
                        </h2>
<p className="text-stone text-lg leading-relaxed mb-6">
                            Beliggende blot et stenkast fra den klare Hampen Sø og omgivet af den frodige Palsgård Skov, er Hampen Camping dit frirum fra hverdagen.
                        </p>
<p className="text-stone text-lg leading-relaxed mb-10">
                            Uanset om du slår telt op under stjernerne, parkerer campingvognen til en uges udforskning, eller bor i en af vores hyggelige hytter, tilbyder vi et rent, familievenligt miljø med rødder i danske traditioner.
                        </p>
<div className="grid grid-cols-2 gap-8 mb-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center text-forest">
<span className="iconify w-6 h-6" data-icon="lucide:trees"></span>
</div>
<span className="text-base font-medium">Dyb Skov</span>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-sand/50 flex items-center justify-center text-forest">
<span className="iconify w-6 h-6" data-icon="lucide:waves"></span>
</div>
<span className="text-base font-medium">Reneste Sø</span>
</div>
</div>
<a className="text-forest font-medium hover:text-forest-light inline-flex items-center text-lg transition-colors" href="#stay">
                            Se Overnatning
                            <span className="iconify w-5 h-5 ml-2" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-28 bg-white" id="stay">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-20">
<span className="text-forest text-sm font-medium tracking-wide uppercase block mb-3">Bo Hos Os</span>
<h2 className="text-4xl md:text-5xl font-medium text-charcoal tracking-tight">Vælg Din Plads</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="group rounded-3xl overflow-hidden bg-off-white border border-stone/10 hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Teltplads" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1496947850313-7743325fa58c?w=800&amp;q=80"/>
<div className="absolute top-5 right-5 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-medium text-forest">
                                fra 150 DKK
                            </div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-charcoal mb-3">Natur Teltplads</h3>
<p className="text-stone text-base mb-6">Græspladser beliggende mellem træerne, perfekt til autentisk camping.</p>
<div className="flex flex-wrap gap-3 mb-8">
<span className="px-3 py-1.5 bg-white border border-stone/10 rounded-lg text-xs text-stone flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:users" width="14"></span> 1-6
                                </span>
<span className="px-3 py-1.5 bg-white border border-stone/10 rounded-lg text-xs text-stone">Bilfri</span>
</div>
<button className="w-full py-3.5 bg-white border border-stone/20 text-charcoal font-medium rounded-xl hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 text-base" onclick="openBooking('Natur Teltplads', 150)">
                                Book Plads
                            </button>
</div>
</div>

<div className="group rounded-3xl overflow-hidden bg-off-white border border-stone/10 hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Campingvogn" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&amp;q=80"/>
<div className="absolute top-5 right-5 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-medium text-forest">
                                fra 250 DKK
                            </div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-charcoal mb-3">Campingvogn &amp; Auto</h3>
<p className="text-stone text-base mb-6">Rummelige pladser på græs eller fast underlag med strømtilslutning.</p>
<div className="flex flex-wrap gap-3 mb-8">
<span className="px-3 py-1.5 bg-white border border-stone/10 rounded-lg text-xs text-stone flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:zap" width="14"></span> 10A Strøm
                                </span>
<span className="px-3 py-1.5 bg-white border border-stone/10 rounded-lg text-xs text-stone flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:droplets" width="14"></span> Vand
                                </span>
</div>
<button className="w-full py-3.5 bg-white border border-stone/20 text-charcoal font-medium rounded-xl hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 text-base" onclick="openBooking('Campingvogn Plads', 250)">
                                Book Plads
                            </button>
</div>
</div>

<div className="group rounded-3xl overflow-hidden bg-off-white border border-stone/10 hover:shadow-xl transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden">
<img alt="Træhytte" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800&amp;q=80"/>
<div className="absolute top-5 left-5 bg-clay text-white px-4 py-1.5 rounded-full text-xs font-medium">
                                Populær
                            </div>
<div className="absolute top-5 right-5 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-medium text-forest">
                                fra 600 DKK
                            </div>
</div>
<div className="p-8">
<h3 className="text-2xl font-medium text-charcoal mb-3">Klassisk Træhytte</h3>
<p className="text-stone text-base mb-6">Hyggelige hytter med tekøkken, terrasse og senge. Medbring eget linned.</p>
<div className="flex flex-wrap gap-3 mb-8">
<span className="px-3 py-1.5 bg-white border border-stone/10 rounded-lg text-xs text-stone flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:home" width="14"></span> 25m²
                                </span>
<span className="px-3 py-1.5 bg-white border border-stone/10 rounded-lg text-xs text-stone flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:users" width="14"></span> 4 Pers.
                                </span>
<span className="px-3 py-1.5 bg-white border border-stone/10 rounded-lg text-xs text-stone">Køkken</span>
</div>
<button className="w-full py-3.5 bg-white border border-stone/20 text-charcoal font-medium rounded-xl hover:bg-forest hover:text-white hover:border-forest transition-all duration-300 text-base" onclick="openBooking('Klassisk Hytte', 600)">
                                Book Hytte
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-sand/30" id="facilities">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<span className="text-forest text-sm font-medium tracking-wide uppercase block mb-3">Komfort &amp; Bekvemmelighed</span>
<h2 className="text-4xl md:text-5xl font-medium text-charcoal tracking-tight mb-8">Moderne Faciliteter</h2>
<p className="text-stone text-lg leading-relaxed mb-10">
                            Camping betyder ikke, at man skal gå på kompromis med komforten. Vores servicebygninger er moderne, opvarmede og rengøres dagligt for at sikre et behageligt ophold.
                        </p>
<div className="grid sm:grid-cols-2 gap-8">
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-forest shadow-sm shrink-0">
<span className="iconify w-5 h-5" data-icon="lucide:utensils"></span>
</div>
<div>
<h4 className="font-medium text-charcoal text-lg">Fælleskøkken</h4>
<p className="text-base text-stone mt-1">Fuldt udstyrede fælleskøkkener med ovne og mikroovne.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-forest shadow-sm shrink-0">
<span className="iconify w-5 h-5" data-icon="lucide:droplet"></span>
</div>
<div>
<h4 className="font-medium text-charcoal text-lg">Moderne Badeforhold</h4>
<p className="text-base text-stone mt-1">Rene, opvarmede familierum og brusebad.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-forest shadow-sm shrink-0">
<span className="iconify w-5 h-5" data-icon="lucide:croissant"></span>
</div>
<div>
<h4 className="font-medium text-charcoal text-lg">Morgenbrød</h4>
<p className="text-base text-stone mt-1">Bestil friske rundstykker hver morgen.</p>
</div>
</div>
<div className="flex gap-5">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-forest shadow-sm shrink-0">
<span className="iconify w-5 h-5" data-icon="lucide:wifi"></span>
</div>
<div>
<h4 className="font-medium text-charcoal text-lg">Gratis WiFi</h4>
<p className="text-base text-stone mt-1">Vær online på det meste af pladsen.</p>
</div>
</div>
</div>
</div>
<div className="relative rounded-[2rem] overflow-hidden h-96 lg:h-auto">
<img alt="Lejrbål" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1533630654593-b26a15bc2c68?w=1000&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-28 bg-white overflow-hidden" id="activities">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="max-w-xl">
<span className="text-forest text-sm font-medium tracking-wide uppercase block mb-3">Udforsk Jylland</span>
<h2 className="text-4xl md:text-5xl font-medium text-charcoal tracking-tight">Aktiviteter &amp; Natur</h2>
</div>
<div className="flex gap-3 mt-6 md:mt-0">
<button className="w-12 h-12 rounded-full border border-stone/20 flex items-center justify-center text-stone hover:bg-forest hover:text-white hover:border-forest transition-colors" id="prevActivity">
<span className="iconify w-5 h-5" data-icon="lucide:arrow-left"></span>
</button>
<button className="w-12 h-12 rounded-full border border-stone/20 flex items-center justify-center text-stone hover:bg-forest hover:text-white hover:border-forest transition-colors" id="nextActivity">
<span className="iconify w-5 h-5" data-icon="lucide:arrow-right"></span>
</button>
</div>
</div>

<div className="flex gap-8 overflow-x-auto pb-10 snap-x" id="activityScroll" style={{scrollbarWidth: 'none'}}>
<div className="min-w-[320px] md:min-w-[420px] snap-start group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer">
<img alt="Hampen Sø" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1438201275276-2dd536c84852?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-3xl font-medium mb-2">Hampen Sø</h3>
<p className="text-white/80 text-base">En af Danmarks reneste søer, perfekt til en svømmetur.</p>
</div>
</div>
<div className="min-w-[320px] md:min-w-[420px] snap-start group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer">
<img alt="Vandring" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-3xl font-medium mb-2">Skovstier</h3>
<p className="text-white/80 text-base">Afmærkede vandre- og løberuter i Palsgård Skov.</p>
</div>
</div>
<div className="min-w-[320px] md:min-w-[420px] snap-start group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer">
<img alt="Cykling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-3xl font-medium mb-2">Cykling</h3>
<p className="text-white/80 text-base">Lej cykler og udforsk Hærvejen.</p>
</div>
</div>
<div className="min-w-[320px] md:min-w-[420px] snap-start group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer">
<img alt="Legeplads" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1473221326025-9183b464bb6e?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-8 left-8 text-white">
<h3 className="text-3xl font-medium mb-2">Børn &amp; Leg</h3>
<p className="text-white/80 text-base">To legepladser, hoppepuder og minigolf.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-forest text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 opacity-50"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-20">
<div>
<span className="text-sand text-sm font-medium tracking-wide uppercase block mb-3">Find Os</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-10">Besøg Hampen Camping</h2>
<div className="space-y-10">
<div className="flex items-start gap-5">
<span className="iconify w-7 h-7 text-sand mt-1" data-icon="lucide:map-pin"></span>
<div>
<h4 className="font-medium text-xl">Adresse</h4>
<p className="text-white/70 text-lg">Hovedgaden 12<br/>7362 Hampen, Danmark</p>
</div>
</div>
<div className="flex items-start gap-5">
<span className="iconify w-7 h-7 text-sand mt-1" data-icon="lucide:phone"></span>
<div>
<h4 className="font-medium text-xl">Telefon</h4>
<p className="text-white/70 text-lg">Ring til os<br/>+45 12 34 56 78</p>
</div>
</div>
<div className="flex items-start gap-5">
<span className="iconify w-7 h-7 text-sand mt-1" data-icon="lucide:mail"></span>
<div>
<h4 className="font-medium text-xl">E-mail</h4>
<p className="text-white/70 text-lg">info@hampencamping.dk</p>
</div>
</div>
</div>
<div className="mt-16">
<h4 className="font-medium mb-6 text-xl">Sæsonåbning</h4>
<div className="flex gap-10 text-base text-white/70">
<div>
<span className="block text-white font-medium">Sommersæson</span>
                                    1. April - 30. September
                                </div>
<div>
<span className="block text-white font-medium">Reception</span>
                                    08:00 - 20:00 Hver dag
                                </div>
</div>
</div>
</div>

<div className="bg-white text-charcoal p-10 rounded-[2rem] shadow-2xl">
<h3 className="text-3xl font-medium mb-8">Send os en besked</h3>
<form className="space-y-5" id="contactForm">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs uppercase text-stone font-medium mb-1.5">Navn</label>
<input className="w-full bg-off-white border border-stone/20 rounded-xl px-5 py-3.5 focus:outline-none focus:border-forest transition-colors text-base" required="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase text-stone font-medium mb-1.5">E-mail</label>
<input className="w-full bg-off-white border border-stone/20 rounded-xl px-5 py-3.5 focus:outline-none focus:border-forest transition-colors text-base" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs uppercase text-stone font-medium mb-1.5">Emne</label>
<select className="w-full bg-off-white border border-stone/20 rounded-xl px-5 py-3.5 focus:outline-none focus:border-forest transition-colors text-base">
<option>Generel Forespørgsel</option>
<option>Ændring af Booking</option>
<option>Gruppereservation</option>
</select>
</div>
<div>
<label className="block text-xs uppercase text-stone font-medium mb-1.5">Besked</label>
<textarea className="w-full bg-off-white border border-stone/20 rounded-xl px-5 py-3.5 focus:outline-none focus:border-forest transition-colors resize-none text-base" required="" rows="4"></textarea>
</div>
<button className="w-full bg-forest text-white font-medium py-4 rounded-xl hover:bg-forest-light transition-all duration-300 text-base" type="submit">
                                Send Besked
                            </button>
</form>
</div>
</div>
</div>
</section>

<div className="h-[30rem] w-full relative grayscale opacity-90 hover:grayscale-0 transition-all duration-700">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.653494793639!2d9.3876!3d56.0024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464bfbd085555555%3A0x0!2sHampen!5e0!3m2!1sen!2sdk!4v1600000000000!5m2!1sen!2sdk" style={{border: '0'}} width="100%"></iframe>
</div>
</main>

<footer className="bg-charcoal text-white/60 py-16 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<img alt="Hampen Camping" className="h-12 w-auto brightness-0 invert opacity-80" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPCEtLSBUcmVlIEZhciBMZWZ0IC0tPgogIDxwYXRoIGQ9Ik0zMCAxMjAgTDU1IDcwIEw4MCAxMjAgWiIgZmlsbD0iYmxhY2siLz4KICA8IS0tIFRyZWUgTGVmdCAtLT4KICA8cGF0aCBkPSJNNjAgMTIwIEw5MCA1NSBMMTIwIDEyMCBaIiBmaWxsPSJibGFjayIvPgogIDwhLS0gVHJlZSBSaWdodCAtLT4KICA8cGF0aCBkPSJNMjIwIDEyMCBMMjQ1IDcwIEwyNzAgMTIwIFoiIGZpbGw9ImJsYWNrIi8+CiAgPCEtLSBUcmVlIEZhciBSaWdodCAtLT4KICA8cGF0aCBkPSJNMjUwIDEyMCBMMjgwIDYwIEwzMTAgMTIwIFoiIGZpbGw9ImJsYWNrIi8+CiAgPCEtLSBUZW50IC0tPgogIDxwYXRoIGQ9Ik04MCAxMjAgTDE1MCA0MCBMMjIwIDEyMCBaIiBmaWxsPSJibGFjayIvPgogIDxwYXRoIGQ9Ik0xNTAgNTAgTDE5NSAxMjAgSDEwNSBaIiBmaWxsPSJ3aGl0ZSIvPgogIDxwYXRoIGQ9Ik0xNTAgNTAgTDE4MCAxMjAgSDEyMCBaIiBmaWxsPSJibGFjayIvPgogIDwhLS0gTW9vbiAtLT4KICA8cGF0aCBkPSJNMjAwIDMwIEEgMjAgMjAgMCAxIDAgMjAwIDYwIEEgMTUgMTUgMCAxIDEgMjAwIDMwIiBmaWxsPSJibGFjayIvPgogIDwhLS0gVGV4dCAtLT4KICA8dGV4dCB4PSIxNTAiIHk9IjE2NSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI4MDAiIGZvbnQtc2l6ZT0iMjQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9ImJsYWNrIiBsZXR0ZXItc3BhY2luZz0iMiI+SEFNUEVOIENBTVBJTkc8L3RleHQ+Cjwvc3ZnPg=="/>
</div>
<div className="flex gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Privatlivspolitik</a>
<a className="hover:text-white transition-colors" href="#">Handelsbetingelser</a>
<a className="hover:text-white transition-colors" href="#">Cookiepolitik</a>
</div>
<div className="text-sm font-medium">
                    © 2024 Hampen Camping. Alle rettigheder forbeholdes.
                </div>
</div>
</div>
</footer>

<div className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50 opacity-0 pointer-events-none transition-all duration-500 flex items-center justify-center p-4" id="bookingModal">
<div className="bg-white rounded-[2rem] max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl transform scale-95 transition-transform duration-300" id="bookingModalContent">
<div className="p-10">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-3xl font-medium text-charcoal">Book Dit Ophold</h3>
<p className="text-stone text-base mt-1">ved <span className="text-forest font-medium" id="modalSpotType">Plads</span></p>
</div>
<button className="w-10 h-10 rounded-full bg-off-white flex items-center justify-center hover:bg-stone/20 transition-colors" onclick="closeBooking()">
<span className="iconify w-5 h-5 text-charcoal" data-icon="lucide:x"></span>
</button>
</div>
<form className="space-y-6" id="bookingForm">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs uppercase text-stone font-medium mb-1.5">Ankomst</label>
<input className="w-full bg-off-white border border-stone/20 rounded-xl px-5 py-3.5 focus:outline-none focus:border-forest text-base" required="" type="date"/>
</div>
<div>
<label className="block text-xs uppercase text-stone font-medium mb-1.5">Afrejse</label>
<input className="w-full bg-off-white border border-stone/20 rounded-xl px-5 py-3.5 focus:outline-none focus:border-forest text-base" required="" type="date"/>
</div>
</div>
<div>
<label className="block text-xs uppercase text-stone font-medium mb-1.5">Gæster</label>
<select className="w-full bg-off-white border border-stone/20 rounded-xl px-5 py-3.5 focus:outline-none focus:border-forest text-base">
<option>1 Voksen</option>
<option>2 Voksne</option>
<option>2 Voksne, 1 Barn</option>
<option>2 Voksne, 2 Børn</option>
<option>Stor Familie (5+)</option>
</select>
</div>
<div className="bg-off-white p-5 rounded-xl border border-stone/10">
<label className="flex items-center gap-4 cursor-pointer">
<input className="w-5 h-5 text-forest rounded focus:ring-forest border-stone/30" type="checkbox"/>
<span className="text-base font-medium text-charcoal">Tilføj Strøm (+45 DKK/dag)</span>
</label>
</div>
<div className="space-y-4 pt-2">
<input className="w-full bg-off-white border border-stone/20 rounded-xl px-5 py-3.5 focus:outline-none focus:border-forest text-base" placeholder="Fulde Navn" required="" type="text"/>
<input className="w-full bg-off-white border border-stone/20 rounded-xl px-5 py-3.5 focus:outline-none focus:border-forest text-base" placeholder="E-mail Adresse" required="" type="email"/>
<input className="w-full bg-off-white border border-stone/20 rounded-xl px-5 py-3.5 focus:outline-none focus:border-forest text-base" placeholder="Telefonnummer" required="" type="tel"/>
</div>
<div className="pt-6 border-t border-stone/10 flex justify-between items-center">
<div>
<span className="text-xs text-stone uppercase block">Basispris</span>
<span className="text-2xl font-medium text-forest" id="modalPrice">0 DKK</span> <span className="text-sm text-stone">/nat</span>
</div>
<button className="px-8 py-3.5 bg-forest text-white font-medium rounded-xl hover:bg-forest-light transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base" type="submit">
                            Bekræft Booking
                        </button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed bottom-10 right-10 bg-forest text-white px-8 py-5 rounded-2xl shadow-2xl transform translate-y-32 transition-transform duration-500 z-50 flex items-center gap-4" id="successToast">
<span className="iconify w-7 h-7 text-sand" data-icon="lucide:check-circle"></span>
<div>
<h4 className="font-medium text-lg">Bookingforespørgsel Sendt!</h4>
<p className="text-base text-white/80">Vi bekræfter din plads hurtigst muligt.</p>
</div>
</div>

<style>
        /* Custom Animations */
        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-slide-up { opacity: 0; animation: slide-up 0.8s ease-out forwards; }
        
        /* Hide scrollbar for gallery */
        #activityScroll::-webkit-scrollbar {
            display: none;
        }
        
        /* Form inputs date icon override */
        input[type="date"]::-webkit-calendar-picker-indicator {
            opacity: 0.5;
            cursor: pointer;
        }
    </style>

    </>
  );
}
