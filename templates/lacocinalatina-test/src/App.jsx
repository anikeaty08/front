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



tailwind.config = {
theme: {
extend: {
colors: {
latin: {
green: '#2D5C3F',
red: '#CE1126',
yellow: '#FCD116',
orange: '#E8823A',
black: '#1A1A1A',
cream: '#F4EDE3',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
condensed: ['Oswald', 'sans-serif'],
display: ['Anton', 'sans-serif'],
},
backgroundImage: {
'gradient-colombia': 'linear-gradient(to right, #2D5C3F, #E8823A, #CE1126)',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            // Translations Object (English & Spanish Mix for Mexican-Colombian Vibe)
            const translations = {
                en: {
                    nav_menu: "Menu",
                    nav_story: "Our Story",
                    nav_catering: "Catering",
                    nav_locations: "Locations",
                    nav_reserve: "Reserve",
                    nav_reserve_table: "Reserve Table",
                    hero_sub: "Bogotá meets Baja",
                    hero_desc: "A documentary of flavor. Experience the collision of the Colombian soul and Mexican fire in every bite.",
                    hero_btn_menu: "View Menu",
                    hero_btn_story: "Our Story",
                    menu_subtitle: "Curated Plates",
                    menu_title: "The Collection",
                    menu_badge: "Halal Beef & Chicken Options",
                    menu_quote: "\"Authenticity is our main ingredient.\"",
                    card1_tag: "The Specialty",
                    card1_title: "The Don Birria Taco",
                    card1_desc: "The one that built this place. The reason people cross Edmonton in February.",
                    card2_tag: "Sweet & Spicy",
                    card2_title: "Chulados Mangonada",
                    card2_desc: "Mango sorbet, chamoy, tajin, lime and tamarind straw. The ultimate refreshment.",
                    card3_tag: "Main Course",
                    card3_title: "Smokin' Burrito",
                    card3_desc: "Charcoal carne asada, Mexican rice, beans, cheese and chipotle mayo.",
                    order_now: "Order Now",
                    story_tag: "A Family Dream",
                    story_title_html: "From Colombia <br> <span class=\"text-transparent bg-clip-text bg-gradient-colombia\">To Edmonton</span>",
                    story_p1: "What started with Grandma's recipes and one woman's determination has grown into something bigger than we imagined. This is more than a restaurant: it's a meeting place, built from scratch in the coldest city with the warmest hearts.",
                    story_p2: "Led by a Colombian mother who knows what it means to start from the bottom and cook her way to the top, alongside her two sons—half Mexican—who have worked in the restaurant since childhood. We unite two countries in every dish.",
                    story_p3: "We are here to serve the community. To support women. To build something real in a city that embraces you when you need it most. This is our love letter to Latin cuisine, served with pride in Edmonton.",
                    story_sign: "— The La Cocina Latina Family",
                    feat_1_title: "3 Days",
                    feat_1_desc: "Slow Cooked",
                    feat_2_title: "100%",
                    feat_2_desc: "Handmade Tortillas",
                    feat_3_title: "Halal",
                    feat_3_desc: "Beef & Chicken",
                    feat_4_title: "Licensed",
                    feat_4_desc: "Beer & Cocktails",
                    marquee_text: "TACOS • AREPAS • MARGARITAS • EMPANADAS • BEER • TACOS • AREPAS • MARGARITAS • EMPANADAS • BEER • TACOS • AREPAS • MARGARITAS • EMPANADAS • BEER •",
                    cat_sub: "Events & Private Dining",
                    cat_title: "Host the Fiesta",
                    cat_desc: "Bring the soul of our kitchen to your next event. From corporate lunches to weddings, we offer live taco stations, custom buffet menus, and full-service catering that turns any gathering into a celebration.",
                    cat_btn: "Request Catering Menu",
                    cat_quote: "\"The best tacos we've ever had at an office party.\"",
                    day_mon_thu: "Mon - Thu",
                    day_fri_sat: "Fri - Sat",
                    day_sun: "Sunday",
                    form_title: "Group Reservations",
                    form_sub: "We accept reservations for groups of 6 or more with 24 hours notice. <br><span class=\"text-latin-orange\">Smaller groups are welcome for walk-ins.</span>",
                    label_date: "Date (24h Notice)",
                    label_guests: "Guests (Min. 6)",
                    opt_select: "Select Party Size",
                    opt_6: "6 People",
                    opt_7: "7 People",
                    opt_8: "8 People",
                    opt_9: "9 People",
                    opt_10: "10+ People",
                    label_name: "Full Name",
                    ph_name: "Your Name",
                    label_email: "Email Address",
                    label_phone: "Phone Number",
                    form_privacy: "I accept the <a href=\"#\" class=\"underline decoration-latin-black/30 hover:decoration-latin-black\">Privacy Policy</a> and consent to providing my name, email, and phone number for this reservation.",
                    btn_confirm: "Confirm Reservation",
                    footer_title: "Join Our Familia",
                    footer_desc: "Be the first to know about new dishes, special events, and community gatherings.",
                    ph_email: "Your email address",
                    btn_sub: "Subscribe",
                    link_privacy: "Privacy Policy",
                    link_terms: "Terms of Service",
                    copyright: "© 2024 La Cocina Latina. Made with spice in Edmonton."
                },
                es: {
                    nav_menu: "Menú",
                    nav_story: "Nuestra Historia",
                    nav_catering: "Catering",
                    nav_locations: "Ubicaciones",
                    nav_reserve: "Reservar",
                    nav_reserve_table: "Reservar Mesa",
                    hero_sub: "Bogotá se encuentra con Baja",
                    hero_desc: "Un documental de sabor. Experimenta la colisión del alma colombiana y el fuego mexicano en cada bocado.",
                    hero_btn_menu: "Ver Menú",
                    hero_btn_story: "Historia",
                    menu_subtitle: "Platos Curados",
                    menu_title: "La Colección",
                    menu_badge: "Opciones Halal de Res y Pollo",
                    menu_quote: "\"La autenticidad es nuestro ingrediente principal.\"",
                    card1_tag: "La Especialidad",
                    card1_title: "El Taco Don Birria",
                    card1_desc: "El plato que construyó este lugar. La razón por la que la gente cruza Edmonton en febrero.",
                    card2_tag: "Dulce y Picante",
                    card2_title: "Chulados Mangonada",
                    card2_desc: "Sorbete de mango, chamoy, tajín, lima y popote de tamarindo. El refresco definitivo.",
                    card3_tag: "Plato Fuerte",
                    card3_title: "Burrito Ahumado",
                    card3_desc: "Carne asada al carbón, arroz mexicano, frijoles, queso y mayonesa de chipotle.",
                    order_now: "Ordenar",
                    story_tag: "Un Sueño Familiar",
                    story_title_html: "De Colombia <br> <span class=\"text-transparent bg-clip-text bg-gradient-colombia\">Para Edmonton</span>",
                    story_p1: "Lo que comenzó con las recetas de la abuela y la determinación de una mujer ha crecido más allá de lo imaginado. Esto es más que un restaurante: es un punto de encuentro, construido desde cero en la ciudad más fría con los corazones más cálidos.",
                    story_p2: "Liderado por una madre colombiana que sabe lo que significa empezar desde abajo y cocinar hasta la cima, junto a sus dos hijos—mitad mexicanos—quienes han trabajado en el restaurante desde la infancia. Unimos dos países en cada plato.",
                    story_p3: "Estamos aquí para servir a la comunidad. Para apoyar a las mujeres. Para construir algo real en una ciudad que te abraza cuando más lo necesitas. Esta es nuestra carta de amor a la cocina latina, servida con orgullo en Edmonton.",
                    story_sign: "— La Familia Cocina Latina",
                    feat_1_title: "3 Días",
                    feat_1_desc: "Cocción Lenta",
                    feat_2_title: "100%",
                    feat_2_desc: "Tortillas A Mano",
                    feat_3_title: "Halal",
                    feat_3_desc: "Res y Pollo",
                    feat_4_title: "Licencia",
                    feat_4_desc: "Cerveza y Cócteles",
                    marquee_text: "TACOS • AREPAS • MARGARITAS • EMPANADAS • CERVEZA • TACOS • AREPAS • MARGARITAS • EMPANADAS • CERVEZA • TACOS • AREPAS • MARGARITAS • EMPANADAS • CERVEZA •",
                    cat_sub: "Eventos y Cenas Privadas",
                    cat_title: "Organiza la Fiesta",
                    cat_desc: "Lleva el alma de nuestra cocina a tu próximo evento. Desde almuerzos corporativos hasta bodas, ofrecemos estaciones de tacos en vivo, menús de buffet personalizados y catering completo.",
                    cat_btn: "Solicitar Menú de Catering",
                    cat_quote: "\"Los mejores tacos que hemos probado en una fiesta.\"",
                    day_mon_thu: "Lun - Jue",
                    day_fri_sat: "Vie - Sab",
                    day_sun: "Domingo",
                    form_title: "Reservas de Grupo",
                    form_sub: "Aceptamos reservas para grupos de 6 o más con 24 horas de antelación. <br><span class=\"text-latin-orange\">Grupos pequeños bienvenidos sin reserva.</span>",
                    label_date: "Fecha (24h Aviso)",
                    label_guests: "Invitados (Min. 6)",
                    opt_select: "Tamaño del Grupo",
                    opt_6: "6 Personas",
                    opt_7: "7 Personas",
                    opt_8: "8 Personas",
                    opt_9: "9 Personas",
                    opt_10: "10+ Personas",
                    label_name: "Nombre Completo",
                    ph_name: "Tu Nombre",
                    label_email: "Correo Electrónico",
                    label_phone: "Número de Teléfono",
                    form_privacy: "Acepto la <a href=\"#\" class=\"underline decoration-latin-black/30 hover:decoration-latin-black\">Política de Privacidad</a> y doy consentimiento para dar mis datos para esta reserva.",
                    btn_confirm: "Confirmar Reserva",
                    footer_title: "Únete a la Familia",
                    footer_desc: "Sé el primero en saber sobre nuevos platos, eventos especiales y reuniones comunitarias.",
                    ph_email: "Tu correo electrónico",
                    btn_sub: "Suscribirse",
                    link_privacy: "Privacidad",
                    link_terms: "Términos",
                    copyright: "© 2024 La Cocina Latina. Hecho con picante en Edmonton."
                }
            };

            const updateLanguage = (lang) => {
                // Update text content elements
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (translations[lang][key]) {
                        // Check if it's an element that needs innerHTML (for spans inside headings)
                        if (key === 'story_title_html' || key === 'form_sub' || key === 'form_privacy') {
                            el.innerHTML = translations[lang][key];
                        } else {
                            el.textContent = translations[lang][key];
                        }
                    }
                });

                // Update placeholders
                document.querySelectorAll('[data-placeholder-i18n]').forEach(el => {
                    const key = el.getAttribute('data-placeholder-i18n');
                    if (translations[lang][key]) {
                        el.placeholder = translations[lang][key];
                    }
                });

                // Update Marquee specifically
                const marquee = document.getElementById('marquee-text');
                if (marquee) {
                    marquee.textContent = translations[lang]['marquee_text'];
                }
            };

            // Language Toggle
            const toggleBtn = document.getElementById('lang-toggle');
            const knob = document.getElementById('lang-knob');
            const label = document.getElementById('lang-label');
            let isEs = false;

            if (toggleBtn && knob && label) {
                toggleBtn.addEventListener('click', () => {
                    isEs = !isEs;
                    if (isEs) {
                        // Switch to Spanish
                        knob.style.transform = 'translateX(20px)';
                        knob.classList.remove('bg-latin-cream');
                        knob.classList.add('bg-white');
                        toggleBtn.classList.remove('bg-white/10');
                        toggleBtn.classList.add('bg-latin-green');
                        label.textContent = 'ES';
                        updateLanguage('es');
                    } else {
                        // Switch to English
                        knob.style.transform = 'translateX(0)';
                        knob.classList.add('bg-latin-cream');
                        knob.classList.remove('bg-white');
                        toggleBtn.classList.add('bg-white/10');
                        toggleBtn.classList.remove('bg-latin-green');
                        label.textContent = 'EN';
                        updateLanguage('en');
                    }
                });
            }

            // Mobile Menu Toggle
            const menuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const hamburgerIcon = document.getElementById('hamburger-icon');
            const closeIcon = document.getElementById('close-icon');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            const revealItems = document.querySelectorAll('.reveal-item');
            let isMenuOpen = false;

            if (menuBtn && mobileMenu) {
                menuBtn.addEventListener('click', () => {
                    isMenuOpen = !isMenuOpen;
                    if (isMenuOpen) {
                        // Open Menu: Remove -translate-y-full, add translate-y-0
                        mobileMenu.classList.remove('-translate-y-full');
                        mobileMenu.classList.add('translate-y-0');
                        
                        // Switch Icons
                        hamburgerIcon.classList.add('hidden');
                        closeIcon.classList.remove('hidden');
                        document.body.style.overflow = 'hidden'; 
                        
                        // Animate Items
                        setTimeout(() => {
                            mobileLinks.forEach(link => {
                                link.classList.remove('opacity-0', 'translate-y-4');
                            });
                            revealItems.forEach(item => {
                                item.classList.remove('opacity-0', 'translate-y-4');
                            });
                        }, 100);

                    } else {
                        // Close Menu
                        mobileMenu.classList.add('-translate-y-full');
                        mobileMenu.classList.remove('translate-y-0');
                        
                        hamburgerIcon.classList.remove('hidden');
                        closeIcon.classList.add('hidden');
                        document.body.style.overflow = '';

                        // Reset Items animation
                        mobileLinks.forEach(link => {
                            link.classList.add('opacity-0', 'translate-y-4');
                        });
                        revealItems.forEach(item => {
                            item.classList.add('opacity-0', 'translate-y-4');
                        });
                    }
                });

                mobileLinks.forEach(link => {
                    link.addEventListener('click', () => {
                        isMenuOpen = false;
                        mobileMenu.classList.add('-translate-y-full');
                        mobileMenu.classList.remove('translate-y-0');
                        hamburgerIcon.classList.remove('hidden');
                        closeIcon.classList.add('hidden');
                        document.body.style.overflow = '';
                        
                        // Reset Items animation
                        mobileLinks.forEach(l => {
                            l.classList.add('opacity-0', 'translate-y-4');
                        });
                        revealItems.forEach(item => {
                            item.classList.add('opacity-0', 'translate-y-4');
                        });
                    });
                });
            }

            // Date Picker Minimum Date
            const dateInput = document.getElementById('res-date');
            if (dateInput) {
                const tomorrow = new Date();
                tomorrow.setDate(tomorrow.getDate() + 1);
                
                const yyyy = tomorrow.getFullYear();
                let mm = tomorrow.getMonth() + 1; 
                let dd = tomorrow.getDate();

                if (dd < 10) dd = '0' + dd;
                if (mm < 10) mm = '0' + mm;

                const minDate = yyyy + '-' + mm + '-' + dd;
                dateInput.setAttribute('min', minDate);
            }
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
      

<div className="film-grain"></div>

<nav className="fixed top-0 left-0 w-full z-[100] bg-latin-black border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative bg-latin-black z-[101]">

<a className="block w-40 md:w-56 transition-opacity hover:opacity-80" href="#">
<img alt="La Cocina Latina" className="w-full h-auto" onclick="window.location.href='/home'" role="button" src="https://storage.googleapis.com/msgsndr/PtAzmz3tDPp9hvPhhCFY/media/695e2bc9153bbc2401de5d65.png"/>
</a>

<div className="hidden md:flex items-center gap-8 font-condensed uppercase tracking-widest text-sm font-medium text-latin-cream/90">
<a className="hover:text-latin-red transition-colors" data-i18n="nav_menu" href="/menu">Menu</a>
<a className="hover:text-latin-green transition-colors" data-i18n="nav_story" href="#story">Our Story</a>
<a className="hover:text-latin-yellow transition-colors" data-i18n="nav_catering" href="#catering">Catering</a>
<a className="hover:text-latin-orange transition-colors" data-i18n="nav_locations" href="#locations">Locations</a>
<a className="bg-latin-cream text-latin-black px-6 py-2 hover:bg-latin-green hover:text-white transition-colors duration-300" data-i18n="nav_reserve" href="#locations">
                    Reserve
                </a>

<div className="flex items-center gap-3 border-l border-white/10 pl-6 h-8">
<button aria-label="Change Language" className="relative w-11 h-6 bg-white/10 rounded-full transition-colors duration-300 focus:outline-none cursor-pointer" id="lang-toggle">
<div className="absolute left-1 top-1 w-4 h-4 bg-latin-cream rounded-full shadow-sm transition-transform duration-300" id="lang-knob"></div>
</button>
<span className="font-condensed text-xs font-bold tracking-widest w-4 transition-opacity duration-300 text-white" id="lang-label">EN</span>
</div>
</div>

<button className="md:hidden text-latin-cream focus:outline-none w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors z-[102] relative" id="mobile-menu-btn">
<svg aria-hidden="true" className="iconify text-2xl transition-transform duration-300" data-icon="lucide:menu" data-strokeWidth="1.5" height="1em" id="hamburger-icon" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-2xl hidden transition-transform duration-300" data-icon="lucide:x" data-strokeWidth="1.5" height="1em" id="close-icon" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="fixed inset-0 bg-latin-black z-[90] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] -translate-y-full md:hidden pt-20" id="mobile-menu">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-1/4 -right-20 w-80 h-80 bg-latin-red/10 rounded-full blur-[100px]"></div>
<div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-latin-green/10 rounded-full blur-[100px]"></div>
</div>
<nav className="flex flex-col items-center gap-6 relative z-10 w-full px-8">
<a className="mobile-link text-4xl font-condensed uppercase tracking-tight text-latin-cream hover:text-latin-red transition-colors duration-300 translate-y-4 opacity-0 transition-all duration-700 delay-100" data-i18n="nav_menu" href="#menu">Menu</a>
<a className="mobile-link text-4xl font-condensed uppercase tracking-tight text-latin-cream hover:text-latin-green transition-colors duration-300 translate-y-4 opacity-0 transition-all duration-700 delay-200" data-i18n="nav_story" href="#story">Our Story</a>
<a className="mobile-link text-4xl font-condensed uppercase tracking-tight text-latin-cream hover:text-latin-yellow transition-colors duration-300 translate-y-4 opacity-0 transition-all duration-700 delay-300" data-i18n="nav_catering" href="#catering">Catering</a>
<a className="mobile-link text-4xl font-condensed uppercase tracking-tight text-latin-cream hover:text-latin-orange transition-colors duration-300 translate-y-4 opacity-0 transition-all duration-700 delay-400" data-i18n="nav_locations" href="#locations">Locations</a>
<div className="w-12 h-px bg-white/10 my-2"></div>
<a className="mobile-link w-full max-w-xs text-center py-4 border border-latin-yellow/30 text-latin-yellow font-condensed uppercase tracking-widest text-lg hover:bg-latin-yellow hover:text-latin-black transition-all duration-300 translate-y-4 opacity-0 duration-700 delay-500" data-i18n="nav_reserve_table" href="#locations">
                    Reserve Table
                </a>
</nav>

<div className="flex gap-6 mt-4 relative z-10 translate-y-4 opacity-0 transition-all duration-700 delay-500 reveal-item">
<a className="text-white/50 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify" data-icon="lucide:instagram" height="1.5em" role="img" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-white/50 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="iconify" data-icon="lucide:facebook" height="1.5em" role="img" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
</div>
</nav>

<header className="overflow-hidden flex w-full h-screen relative items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="Birria Tacos Cinematic" className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite] opacity-90" src="https://storage.googleapis.com/msgsndr/PtAzmz3tDPp9hvPhhCFY/media/695e32cec98330d3ae0b14bc.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-latin-cream/80"></div>

<div className="absolute inset-0 z-[1] opacity-30 mix-blend-overlay pointer-events-none">
<img alt="Texture" className="w-full h-full object-cover" src="https://storage.googleapis.com/msgsndr/PtAzmz3tDPp9hvPhhCFY/media/695e2be10597df16e2801791.png"/>
</div>

<div className="absolute inset-0 bg-gradient-to-br from-latin-green/70 via-latin-orange/50 to-latin-red/70 mix-blend-overlay z-[2]"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-latin-yellow/20 via-transparent to-transparent mix-blend-soft-light z-[3]"></div>
</div>

<div className="hidden md:block absolute right-[-10%] top-[-10%] w-[600px] h-[600px] rounded-full bg-latin-green/40 blur-[100px] mix-blend-multiply z-10 pointer-events-none float-slow"></div>

<div className="hidden md:block absolute left-[-5%] top-[20%] w-[500px] h-[500px] rounded-full bg-latin-orange/30 blur-[120px] mix-blend-screen z-10 pointer-events-none float-delayed"></div>

<div className="hidden md:block absolute right-[20%] bottom-[-20%] w-[700px] h-[700px] rounded-full bg-latin-red/30 blur-[100px] mix-blend-overlay z-10 pointer-events-none"></div>

<div className="text-center max-w-5xl z-20 mt-10 px-6 relative w-full">
<h2 className="text-latin-yellow font-condensed tracking-widest uppercase text-sm md:text-base mb-10 flex items-center justify-center gap-3">
<span className="h-px w-12 bg-latin-yellow"></span>
<span className="" data-i18n="hero_sub">Bogotá meets Baja</span>
<span className="h-px w-12 bg-latin-yellow"></span>
</h2>

<div className="w-full max-w-3xl mx-auto mb-12">
<img alt="La Cocina Latina" className="w-full h-auto drop-shadow-2xl opacity-95" src="https://storage.googleapis.com/msgsndr/PtAzmz3tDPp9hvPhhCFY/media/695e2bb9a0a4842c42f9127f.png"/>
</div>
<p className="text-white/90 font-light text-lg md:text-xl max-w-xl mx-auto tracking-wide mb-12" data-i18n="hero_desc">
                A documentary of flavor. Experience the collision of the Colombian soul and Mexican fire in every bite.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="bg-latin-red hover:bg-latin-green text-white font-condensed uppercase tracking-wider px-8 py-3 text-lg transition-colors duration-300 w-full md:w-auto flex items-center justify-center gap-2 shadow-lg group" href="#menu">
<span data-i18n="hero_btn_menu">View Menu</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white text-white hover:text-latin-black font-condensed uppercase tracking-wider px-8 py-3 text-lg transition-all duration-300 w-full md:w-auto flex justify-center items-center" data-i18n="hero_btn_story" href="#story">
                    Our Story
                </a>
</div>
</div>
</header>

<div className="w-full h-12 bg-latin-cream relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-10">
<div className="w-full h-px bg-latin-black"></div>
<svg aria-hidden="true" className="iconify text-latin-black text-2xl absolute" data-icon="lucide:flower-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12m0 0c4.2 0 7-1.667 7-5c-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5c4.2 0 7 1.667 7 5"></path></g></svg>
</div>
</div>

<section className="py-24 px-6 md:px-12 relative overflow-hidden bg-latin-cream w-full" id="menu">

<div className="hidden md:block absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-latin-orange/20 to-latin-red/10 blur-[100px] rounded-full pointer-events-none mix-blend-multiply opacity-50"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-16 md:flex justify-between items-end relative">
<div>
<h3 className="text-latin-orange font-condensed uppercase tracking-widest mb-2" data-i18n="menu_subtitle">Curated Plates</h3>
<h2 className="text-4xl md:text-6xl font-display text-latin-black tracking-tight uppercase" data-i18n="menu_title">The Collection</h2>

<div className="mt-4 inline-flex items-center gap-2 border border-latin-green/30 px-3 py-1.5 rounded-full bg-latin-green/5">
<svg aria-hidden="true" className="iconify text-latin-green" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle><path d="m9 12l2 2l4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-semibold uppercase tracking-wider text-latin-green" data-i18n="menu_badge">Halal Beef &amp; Chicken Options</span>
</div>
</div>
<div className="mt-6 md:mt-0 text-right hidden md:block">
<p className="text-latin-black/60 font-serif italic text-lg" data-i18n="menu_quote">"Authenticity is our main ingredient."</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative h-[480px] overflow-hidden bg-latin-black">
<img alt="Birria Tacos" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://storage.googleapis.com/msgsndr/PtAzmz3tDPp9hvPhhCFY/media/695e32cda0a48497b0f9ff1d.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-latin-red text-white text-xs font-condensed px-2 py-1 uppercase tracking-widest" data-i18n="card1_tag">The Specialty</div>
<div className="absolute bottom-6 left-6 right-6 text-white">
<h3 className="text-3xl font-condensed uppercase tracking-wide mb-2 group-hover:text-latin-yellow transition-colors leading-none" data-i18n="card1_title">The Don Birria Taco</h3>
<p className="text-sm text-gray-200 font-light mb-4 leading-relaxed" data-i18n="card1_desc">The one that built this place. The reason people cross Edmonton in February.</p>
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-white/30 pb-1">
<span data-i18n="order_now">Order Now</span> <svg aria-hidden="true" className="iconify" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
</div>

<div className="group cursor-pointer mt-0 md:-mt-12 relative">
<div className="relative h-[480px] overflow-hidden bg-latin-black">
<img alt="Chulados Mangonada" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://storage.googleapis.com/msgsndr/PtAzmz3tDPp9hvPhhCFY/media/695e32cec983306f150b14b4.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-latin-yellow text-latin-black text-xs font-condensed px-2 py-1 uppercase tracking-widest" data-i18n="card2_tag">Sweet &amp; Spicy</div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-3xl font-condensed uppercase tracking-wide mb-1 group-hover:text-latin-orange transition-colors" data-i18n="card2_title">Chulados Mangonada</h3>
<p className="text-sm text-gray-300 font-light mb-3" data-i18n="card2_desc">Mango sorbet, chamoy, tajin, lime and tamarind straw. The ultimate refreshment.</p>
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-white/30 pb-1">
<span data-i18n="order_now">Order Now</span> <svg aria-hidden="true" className="iconify" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
</div>

<div className="group cursor-pointer relative">
<div className="relative h-[480px] overflow-hidden bg-latin-black">
<img alt="Smokin Burrito" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-latin-green text-white text-xs font-condensed px-2 py-1 uppercase tracking-widest" data-i18n="card3_tag">Main Course</div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="text-3xl font-condensed uppercase tracking-wide mb-1 group-hover:text-latin-green transition-colors" data-i18n="card3_title">Smokin' Burrito</h3>
<p className="text-sm text-gray-300 font-light mb-3" data-i18n="card3_desc">Charcoal carne asada, Mexican rice, beans, cheese and chipotle mayo.</p>
<span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b border-white/30 pb-1">
<span data-i18n="order_now">Order Now</span> <svg aria-hidden="true" className="iconify" data-icon="lucide:arrow-up-right" data-strokeWidth="1.5" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-latin-black text-latin-cream relative overflow-hidden w-full" id="story">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-colombia"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="relative order-2 lg:order-1">

<div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-latin-yellow/50"></div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-latin-red/50"></div>
<img alt="Chef in Kitchen" className="w-full grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="order-1 lg:order-2">
<div className="flex items-center gap-3 mb-4">
<svg aria-hidden="true" className="iconify text-latin-yellow text-xl" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<span className="text-latin-green font-condensed uppercase tracking-widest text-sm" data-i18n="story_tag">A Family Dream</span>
</div>
<h2 className="text-5xl md:text-7xl font-display uppercase tracking-tight mb-8 leading-[0.9]" data-i18n="story_title_html">
                    From Colombia <br/> <span className="text-transparent bg-clip-text bg-gradient-colombia">To Edmonton</span>
</h2>
<div className="space-y-6 text-white/70 font-light text-lg leading-relaxed">
<p data-i18n="story_p1">
                        What started with Grandma's recipes and one woman's determination has grown into something bigger than we imagined. This is more than a restaurant: it's a meeting place, built from scratch in the coldest city with the warmest hearts.
                    </p>
<p data-i18n="story_p2">
                        Led by a Colombian mother who knows what it means to start from the bottom and cook her way to the top, alongside her two sons—half Mexican—who have worked in the restaurant since childhood. We unite two countries in every dish.
                    </p>
<p className="text-white/90" data-i18n="story_p3">
                        We are here to serve the community. To support women. To build something real in a city that embraces you when you need it most. This is our love letter to Latin cuisine, served with pride in Edmonton.
                    </p>
</div>
<p className="mt-8 font-serif italic text-latin-yellow text-lg" data-i18n="story_sign">— The La Cocina Latina Family</p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 border-t border-white/10 pt-8">
<div>
<h4 className="text-xl font-display text-white mb-1" data-i18n="feat_1_title">3 Days</h4>
<p className="text-xs text-white/50 uppercase tracking-widest" data-i18n="feat_1_desc">Slow Cooked</p>
</div>
<div>
<h4 className="text-xl font-display text-white mb-1" data-i18n="feat_2_title">100%</h4>
<p className="text-xs text-white/50 uppercase tracking-widest" data-i18n="feat_2_desc">Handmade Tortillas</p>
</div>
<div>
<h4 className="text-xl font-display text-white mb-1" data-i18n="feat_3_title">Halal</h4>
<p className="text-xs text-white/50 uppercase tracking-widest" data-i18n="feat_3_desc">Beef &amp; Chicken</p>
</div>
<div>
<h4 className="text-xl font-display text-white mb-1" data-i18n="feat_4_title">Licensed</h4>
<p className="text-xs text-white/50 uppercase tracking-widest" data-i18n="feat_4_desc">Beer &amp; Cocktails</p>
</div>
</div>
</div>
</div>
</section>

<div className="bg-latin-red py-4 overflow-hidden whitespace-nowrap relative z-10 w-full">
<div className="inline-block animate-[marquee_20s_linear_infinite] text-latin-black font-display uppercase text-2xl md:text-4xl tracking-tight" id="marquee-text">
            TACOS • AREPAS • MARGARITAS • EMPANADAS • BEER • TACOS • AREPAS • MARGARITAS • EMPANADAS • BEER • TACOS • AREPAS • MARGARITAS • EMPANADAS • BEER •
        </div>
<style>
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        </style>
</div>

<section className="relative py-24 bg-white overflow-hidden w-full" id="catering">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="relative z-10 order-2 lg:order-1">
<span className="text-latin-orange font-condensed uppercase tracking-widest mb-4 block" data-i18n="cat_sub">Events &amp; Private Dining</span>
<h2 className="text-5xl md:text-6xl font-display text-latin-black tracking-tight uppercase mb-6 leading-none" data-i18n="cat_title">Host the Fiesta</h2>
<p className="text-latin-black/70 font-light text-lg mb-8 leading-relaxed max-w-lg" data-i18n="cat_desc">
                    Bring the soul of our kitchen to your next event. From corporate lunches to weddings, we offer live taco stations, custom buffet menus, and full-service catering that turns any gathering into a celebration.
                </p>

<div className="grid grid-cols-2 gap-6 mb-10">
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-latin-cream flex items-center justify-center text-latin-green shrink-0">
<svg className="iconify" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"></path><line x1="6" x2="18" y1="17" y2="17"></line></svg>
</div>
<div>
<h4 className="font-display uppercase text-lg text-latin-black">Live Stations</h4>
<p className="text-xs text-latin-black/50 uppercase tracking-wide">Fresh Tacos On Site</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-10 h-10 rounded-full bg-latin-cream flex items-center justify-center text-latin-orange shrink-0">
<svg className="iconify" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
<div>
<h4 className="font-display uppercase text-lg text-latin-black">Large Groups</h4>
<p className="text-xs text-latin-black/50 uppercase tracking-wide">Up to 200 Guests</p>
</div>
</div>
</div>

<a className="inline-flex items-center gap-3 bg-latin-black text-white px-8 py-4 font-condensed uppercase tracking-widest hover:bg-latin-orange transition-colors duration-300 group" href="catering.html">
<span data-i18n="cat_btn">Request Catering Menu</span>
<svg className="iconify group-hover:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="relative order-1 lg:order-2 h-[400px] lg:h-[600px] w-full">

<div className="absolute inset-0 bg-latin-black overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
<img alt="Catering Spread" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-latin-cream p-4 shadow-xl max-w-[200px] hidden md:block transform -rotate-2">
<p className="font-serif italic text-latin-black text-sm text-center" data-i18n="cat_quote">"The best tacos we've ever had at an office party."</p>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 w-full" id="locations">

<div className="relative h-[500px] lg:h-auto bg-latin-green flex items-center justify-center overflow-hidden">
<img alt="Restaurant Interior" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50" src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-br from-latin-green/80 to-latin-black/80"></div>
<div className="relative z-10 text-center p-8 border border-white/20 backdrop-blur-sm max-w-sm mx-auto w-full">
<svg aria-hidden="true" className="iconify text-latin-yellow text-4xl mx-auto mb-4" data-icon="lucide:map-pin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<h3 className="text-white font-display uppercase text-3xl mb-2">Edmonton</h3>
<p className="text-white/80 font-light mb-6">13119 156 St NW, Edmonton, AB T5V 0A4</p>
<div className="w-8 h-px bg-white/50 mx-auto mb-6"></div>
<div className="text-white/90 font-condensed uppercase tracking-widest text-xs space-y-2 max-w-[200px] mx-auto">
<div className="flex justify-between border-b border-white/10 pb-1">
<span data-i18n="day_mon_thu">Mon - Thu</span>
<span>11:00am – 9:00pm</span>
</div>
<div className="flex justify-between border-b border-white/10 pb-1">
<span data-i18n="day_fri_sat">Fri - Sat</span>
<span>11:00am – 10:00pm</span>
</div>
<div className="flex justify-between">
<span data-i18n="day_sun">Sunday</span>
<span>11:00am – 8:00pm</span>
</div>
</div>
</div>
</div>

<div className="bg-latin-cream p-8 md:p-12 lg:p-24 flex flex-col justify-center">
<h2 className="text-4xl lg:text-5xl font-display text-latin-black uppercase mb-2" data-i18n="form_title">Group Reservations</h2>
<p className="text-latin-black/60 mb-2 font-light text-sm md:text-base" data-i18n="form_sub">We accept reservations for groups of 6 or more with 24 hours notice. <span className="text-latin-orange">Smaller groups are welcome for walk-ins.</span></p>
<form className="space-y-6 mt-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-xs uppercase tracking-widest text-latin-black/50 mb-2 font-semibold" data-i18n="label_date">Date (24h Notice)</label>
<div className="relative">
<input className="w-full bg-transparent border-b border-latin-black/20 py-2 text-latin-black font-sans focus:outline-none focus:border-latin-green transition-colors" id="res-date" min="2026-01-08" required="" type="date"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-latin-black/50 mb-2 font-semibold" data-i18n="label_guests">Guests (Min. 6)</label>
<div className="relative">
<select className="w-full bg-transparent border-b border-latin-black/20 py-2 text-latin-black font-sans focus:outline-none focus:border-latin-green transition-colors appearance-none" id="guest-select" required="">
<option data-i18n="opt_select" disabled="" selected="" value="">Select Party Size</option>
<option data-i18n="opt_6" value="6">6 People</option>
<option data-i18n="opt_7" value="7">7 People</option>
<option data-i18n="opt_8" value="8">8 People</option>
<option data-i18n="opt_9" value="9">9 People</option>
<option data-i18n="opt_10" value="10+">10+ People</option>
</select>
<svg aria-hidden="true" className="iconify absolute right-0 top-3 text-latin-black/40 pointer-events-none" data-icon="lucide:chevron-down" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-latin-black/50 mb-2 font-semibold" data-i18n="label_name">Full Name</label>
<input className="w-full bg-transparent border-b border-latin-black/20 py-2 text-latin-black font-sans placeholder-latin-black/30 focus:outline-none focus:border-latin-green transition-colors" data-placeholder-i18n="ph_name" placeholder="Your Name" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase tracking-widest text-latin-black/50 mb-2 font-semibold" data-i18n="label_email">Email Address</label>
<input className="w-full bg-transparent border-b border-latin-black/20 py-2 text-latin-black font-sans placeholder-latin-black/30 focus:outline-none focus:border-latin-green transition-colors" placeholder="email@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-latin-black/50 mb-2 font-semibold" data-i18n="label_phone">Phone Number</label>
<input className="w-full bg-transparent border-b border-latin-black/20 py-2 text-latin-black font-sans placeholder-latin-black/30 focus:outline-none focus:border-latin-green transition-colors" placeholder="(555) 555-5555" required="" type="tel"/>
</div>
</div>

<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="relative flex items-center mt-1">
<input className="peer custom-checkbox h-4 w-4 appearance-none border border-latin-black/30 rounded-sm transition-all checked:bg-latin-green checked:border-latin-green" required="" type="checkbox"/>
<svg className="absolute left-0 top-0 h-4 w-4 hidden peer-checked:block text-white pointer-events-none" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-sm text-latin-black/60 font-light group-hover:text-latin-black transition-colors" data-i18n="form_privacy">
                            I accept the <a className="underline decoration-latin-black/30 hover:decoration-latin-black" href="#">Privacy Policy</a> and consent to providing my name, email, and phone number for this reservation.
                        </span>
</label>
</div>
<div className="pt-4">
<button className="w-full bg-latin-black text-latin-cream font-condensed uppercase tracking-widest py-4 hover:bg-latin-red transition-colors duration-300 flex items-center justify-center gap-2" data-i18n="btn_confirm" type="submit">
                        Confirm Reservation
                    </button>
</div>
</form>
</div>
</section>

<section className="bg-latin-green py-20 px-6 border-b border-white/10 text-center relative overflow-hidden w-full">

<svg aria-hidden="true" className="iconify absolute -left-10 bottom-0 text-9xl text-white/5 opacity-50 rotate-45" data-icon="lucide:sun" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path></g></svg>
<svg aria-hidden="true" className="iconify absolute -right-10 top-0 text-9xl text-white/5 opacity-50 -rotate-12" data-icon="lucide:heart-handshake" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="text-4xl md:text-6xl font-display text-white uppercase tracking-tight mb-4" data-i18n="footer_title">Join Our Familia</h2>
<p className="text-white/80 font-light text-lg mb-8 leading-relaxed" data-i18n="footer_desc">
                Be the first to know about new dishes, special events, and community gatherings.
            </p>
<form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
<input className="flex-1 bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:bg-white/20 transition-all font-sans" data-placeholder-i18n="ph_email" placeholder="Your email address" type="email"/>
<button className="bg-latin-yellow text-latin-black font-condensed uppercase tracking-widest px-8 py-3 hover:bg-white transition-colors" data-i18n="btn_sub">
                    Subscribe
                </button>
</form>
</div>
</section>

<footer className="bg-latin-black text-latin-cream pt-20 pb-10 w-full">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
<div>

<img alt="La Cocina Latina" className="w-64 md:w-80 mb-6" src="https://storage.googleapis.com/msgsndr/PtAzmz3tDPp9hvPhhCFY/media/695e2bb9a0a4842c42f9127f.png"/>
</div>
<div className="flex gap-6">
<a className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full hover:bg-latin-yellow hover:text-latin-black hover:border-transparent transition-all" href="#">
<svg aria-hidden="true" className="iconify" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="w-12 h-12 border border-white/20 flex items-center justify-center rounded-full hover:bg-latin-red hover:text-white hover:border-transparent transition-all" href="#">
<svg aria-hidden="true" className="iconify" data-icon="lucide:facebook" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between text-sm text-white/40 font-light gap-4">
<div className="flex flex-col md:flex-row gap-6">
<a className="hover:text-white transition-colors" data-i18n="link_privacy" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" data-i18n="link_terms" href="#">Terms of Service</a>
</div>
<p data-i18n="copyright">© 2024 La Cocina Latina. Made with spice in Edmonton.</p>
</div>
</div>
</footer>


    </>
  );
}
