import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
turquoise: '#3CC6C4',
pink: '#F58AA7',
gold: '#F4C542',
offwhite: '#FAF9F7',
sand: '#F3EFEA',
charcoal: '#2D2D2D',
},
fontFamily: {
playfair: ['"Playfair Display"', 'serif'],
inter: ['"Inter"', 'sans-serif'],
poppins: ['"Poppins"', 'sans-serif'],
},
backgroundImage: {
'hero-gradient': 'linear-gradient(135deg, #3CC6C4 0%, #F58AA7 100%)',
'pink-gold': 'linear-gradient(135deg, #F58AA7 0%, #F4C542 100%)',
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 10px 40px -10px rgba(245, 138, 167, 0.4)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Set Year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Header Scroll Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                header.classList.add('shadow-sm', 'bg-offwhite/95');
                header.classList.remove('bg-offwhite/80');
            } else {
                header.classList.remove('shadow-sm', 'bg-offwhite/95');
                header.classList.add('bg-offwhite/80');
            }
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu on click
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Accordion Logic
        const accordions = document.querySelectorAll('.accordion-button');
        accordions.forEach(acc => {
            acc.addEventListener('click', function() {
                const expanded = this.getAttribute('aria-expanded') === 'true';
                
                // Close all other accordions
                accordions.forEach(otherAcc => {
                    if (otherAcc !== this) {
                        otherAcc.setAttribute('aria-expanded', 'false');
                        otherAcc.nextElementSibling.classList.remove('open');
                    }
                });

                // Toggle current
                this.setAttribute('aria-expanded', !expanded);
                const content = this.nextElementSibling;
                if (!expanded) {
                    content.classList.add('open');
                } else {
                    content.classList.remove('open');
                }
            });
        });

        // Language Toggle Logic
        let currentLang = 'en';
        const langToggleBtn = document.getElementById('langToggle');
        
        function updateLanguage() {
            const elements = document.querySelectorAll('[data-en]');
            elements.forEach(el => {
                // If it's an input with placeholder, update placeholder, else innerHTML
                if (el.placeholder !== undefined && el.tagName === 'INPUT') {
                     el.placeholder = el.getAttribute(`data-${currentLang}`);
                } else {
                     el.innerHTML = el.getAttribute(`data-${currentLang}`);
                }
            });

            // Update button visual
            if (currentLang === 'en') {
                langToggleBtn.innerHTML = 'EN | <span class="text-charcoal/40">ES</span>';
            } else {
                langToggleBtn.innerHTML = '<span class="text-charcoal/40">EN</span> | ES';
            }
        }

        langToggleBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            updateLanguage();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed border-sand/50 transition-all duration-300 bg-orange-50/90 w-full z-50 border-b top-0 backdrop-blur-md" id="header">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-playfair font-medium text-2xl tracking-tighter text-charcoal hover:text-turquoise transition-colors" data-en="DS" data-es="DS" href="#">
                DS
            </a>

<nav className="hidden md:flex space-x-8 text-sm font-medium text-charcoal/80">
<a className="hover:text-pink transition-colors" data-en="About the Course" data-es="Sobre el Curso" href="#about">About the Course</a>
<a className="hover:text-pink transition-colors" data-en="What You Will Learn" data-es="Lo Que Aprenderás" href="#learn">What You Will Learn</a>
<a className="hover:text-pink transition-colors" data-en="Benefits" data-es="Beneficios" href="#benefits">Benefits</a>
<a className="hover:text-pink transition-colors" data-en="Testimonials" data-es="Testimonios" href="#testimonials">Testimonials</a>
<a className="hover:text-pink transition-colors" data-en="FAQ" data-es="Preguntas Frecuentes" href="#faq">FAQ</a>
</nav>

<div className="flex items-center space-x-4">
<button className="text-xs font-poppins font-medium text-charcoal/60 hover:text-charcoal transition-colors px-2 py-1 rounded border border-sand" id="langToggle">
                    EN | <span className="text-charcoal/40">ES</span>
</button>
<a className="hidden md:inline-flex items-center justify-center font-poppins font-medium text-sm bg-pink text-white px-6 py-2.5 rounded-full hover:bg-gold transition-all duration-300 shadow-soft hover:shadow-glow hover:-translate-y-0.5" data-en="Start Your Journey" data-es="Comienza Tu Viaje" href="https://go.hotmart.com/C104694019Y?ap=c372">
                    Start Your Journey
                </a>

<button className="md:hidden text-charcoal p-2" id="mobileMenuBtn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-sand absolute w-full left-0 top-20 shadow-soft" id="mobileMenu">
<div className="flex flex-col p-6 space-y-4 text-center font-medium">
<a className="text-charcoal hover:text-pink" data-en="About the Course" data-es="Sobre el Curso" href="#about">About the Course</a>
<a className="text-charcoal hover:text-pink" data-en="What You Will Learn" data-es="Lo Que Aprenderás" href="#learn">What You Will Learn</a>
<a className="text-charcoal hover:text-pink" data-en="Benefits" data-es="Beneficios" href="#benefits">Benefits</a>
<a className="text-charcoal hover:text-pink" data-en="Testimonials" data-es="Testimonios" href="#testimonials">Testimonials</a>
<a className="text-charcoal hover:text-pink" data-en="FAQ" data-es="Preguntas" href="#faq">FAQ</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-hero-gradient">

<div className="bg-gradient-to-br from-[#a6946e] to-[#CA93A1] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-offwhite to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2 text-center lg:text-left text-white">
<span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-xs font-poppins font-medium mb-6 tracking-wide uppercase" data-en="Self Mastery Course" data-es="Curso de Maestría Personal">Self Mastery Course</span>
<h1 className="font-playfair font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-6 drop-shadow-sm" data-en="Discover the Clarity That Transforms Your Life" data-es="Descubre la Claridad Que Transforma Tu Vida">
                    Discover the Clarity That Transforms Your Life
                </h1>
<p className="font-inter font-light text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed" data-en="A deep inner journey to reconnect with your true self through mindfulness, emotional healing and conscious awareness." data-es="Un profundo viaje interior para reconectar con tu verdadero ser a través del mindfulness, la sanación emocional y la conciencia.">
                    A deep inner journey to reconnect with your true self through mindfulness, emotional healing and conscious awareness.
                </p>
<ul className="space-y-3 mb-10 text-left text-base font-light text-white/90 inline-block lg:block">
<li className="flex items-center space-x-3">
<iconify-icon className="text-gold" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="" data-en="Break limiting patterns" data-es="Rompe patrones limitantes">Break limiting patterns</span>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-gold" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span data-en="Cultivate inner peace" data-es="Cultiva la paz interior">Cultivate inner peace</span>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-gold" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="" data-en="Gain emotional clarity" data-es="Obtén claridad emocional">Gain emotional clarity</span>
</li>
<li className="flex items-center space-x-3">
<iconify-icon className="text-gold" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="" data-en="Connect with your authentic self" data-es="Conecta con tu ser auténtico">Connect with your authentic self</span>
</li>
</ul>
<div className="flex flex-col items-center lg:items-start space-y-3">
<a className="inline-flex items-center justify-center font-poppins font-medium text-base lg:text-lg bg-white text-turquoise px-8 py-4 rounded-full hover:bg-gold hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto" data-en="Start the Course Today" data-es="Comienza el Curso Hoy" href="https://go.hotmart.com/C104694019Y?ap=c372">
                        Start the Course Today
                    </a>
<span className="text-xs font-light text-white/80" data-en="Instant access after purchase." data-es="Acceso instantáneo tras la compra.">Instant access after purchase.</span>
</div>
</div>

<div className="w-full lg:w-1/2 relative hidden md:block">
<div className="aspect-[4/5] rounded-[3rem] bg-gradient-to-tr from-white/10 to-white/30 backdrop-blur-md border border-white/20 p-4 shadow-2xl relative overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700">
<div className="flex overflow-hidden w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d9fc165-6645-4b4d-b23e-7e75b358cc56_1600w.png)] bg-cover bg-center rounded-[2.5rem] relative items-center justify-center">

<div className="absolute w-64 h-64 bg-gold/40 rounded-full blur-3xl -top-10 -right-10"></div>
<div className="absolute w-72 h-72 bg-turquoise/30 rounded-full blur-3xl bottom-10 -left-10"></div>
<iconify-icon className="text-pink/50 stroke-[1]" height="120" icon="solar:lotus-linear" width="120"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-offwhite">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-playfair font-medium text-3xl md:text-4xl tracking-tight text-charcoal mb-8" data-en="Why So Many People Feel Lost Today" data-es="Por Qué Tantas Personas Se Sienten Perdidas Hoy">
                Why So Many People Feel Lost Today
            </h2>
<p className="font-inter text-lg text-charcoal/70 mb-12" data-en="Modern life disconnects us from ourselves." data-es="La vida moderna nos desconecta de nosotros mismos.">
                Modern life disconnects us from ourselves.
            </p>
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft text-left mb-12 border border-sand">
<p className="font-medium text-charcoal mb-6" data-en="Many people struggle with:" data-es="Muchas personas luchan con:">Many people struggle with:</p>
<ul className="space-y-4 text-charcoal/70">
<li className="flex items-start">
<span className="w-2 h-2 rounded-full bg-pink mt-2 mr-4 flex-shrink-0"></span>
<span className="" data-en="Emotional confusion and overwhelm" data-es="Confusión y agobio emocional">Emotional confusion and overwhelm</span>
</li>
<li className="flex items-start">
<span className="w-2 h-2 rounded-full bg-pink mt-2 mr-4 flex-shrink-0"></span>
<span data-en="Repeating painful patterns in relationships and life" data-es="Repetición de patrones dolorosos en relaciones y en la vida">Repeating painful patterns in relationships and life</span>
</li>
<li className="flex items-start">
<span className="w-2 h-2 rounded-full bg-pink mt-2 mr-4 flex-shrink-0"></span>
<span data-en="A chronic lack of inner peace" data-es="Una falta crónica de paz interior">A chronic lack of inner peace</span>
</li>
<li className="flex items-start">
<span className="w-2 h-2 rounded-full bg-pink mt-2 mr-4 flex-shrink-0"></span>
<span data-en="Feeling disconnected from their true purpose" data-es="Sentirse desconectado de su verdadero propósito">Feeling disconnected from their true purpose</span>
</li>
</ul>
</div>
<p className="font-playfair text-xl md:text-2xl text-turquoise mb-10 italic" data-en="Clarity is not something you find outside. It is something you awaken within." data-es="La claridad no es algo que encuentras afuera. Es algo que despiertas en tu interior.">
                "Clarity is not something you find outside.<br className="hidden md:block"/> It is something you awaken within."
            </p>
<a className="inline-flex items-center justify-center font-poppins font-medium text-sm bg-turquoise text-white px-8 py-3 rounded-full hover:bg-charcoal transition-all duration-300 shadow-md hover:-translate-y-0.5" data-en="Find Your Clarity" data-es="Encuentra Tu Claridad" href="https://go.hotmart.com/C104694019Y?ap=c372">
                Find Your Clarity
            </a>
</div>
</section>

<section className="py-24 bg-sand relative overflow-hidden" id="about">

<div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-offwhite to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<span className="text-pink font-poppins font-medium text-xs tracking-widest uppercase mb-4 block" data-en="The Process" data-es="El Proceso">The Process</span>
<h2 className="font-playfair font-medium text-3xl md:text-4xl tracking-tight text-charcoal mb-6" data-en="About This Transformational Journey" data-es="Sobre Este Viaje Transformador">
                    About This Transformational Journey
                </h2>
<div className="space-y-6 text-charcoal/70 font-light text-lg">
<p data-en="This course guides you through a powerful process of self-discovery and emotional clarity." data-es="Este curso te guía a través de un poderoso proceso de autodescubrimiento y claridad emocional.">
                        This course guides you through a powerful process of self-discovery and emotional clarity.
                    </p>
<p className="" data-en="Through practical teachings and inner practices, you will learn how to reconnect with your natural state of awareness and peace." data-es="A través de enseñanzas prácticas y prácticas internas, aprenderás cómo reconectar con tu estado natural de conciencia y paz.">
                        Through practical teachings and inner practices, you will learn how to reconnect with your natural state of awareness and peace.
                    </p>
<p className="font-medium text-charcoal pt-4" data-en="You will explore four fundamental pillars:" data-es="Explorarás cuatro pilares fundamentales:">
                        You will explore four fundamental pillars:
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
<div className="flex items-center space-x-3 bg-white/50 p-3 rounded-xl">
<iconify-icon className="text-turquoise" height="24" icon="solar:spa-linear" width="24"></iconify-icon>
<span className="font-medium text-sm text-charcoal" data-en="Mindfulness" data-es="Mindfulness">Mindfulness</span>
</div>
<div className="flex items-center space-x-3 bg-white/50 p-3 rounded-xl">
<iconify-icon className="text-pink" height="24" icon="solar:heart-angle-linear" width="24"></iconify-icon>
<span className="font-medium text-sm text-charcoal" data-en="Emotional Healing" data-es="Sanación Emocional">Emotional Healing</span>
</div>
<div className="flex items-center space-x-3 bg-white/50 p-3 rounded-xl">
<iconify-icon className="text-gold" height="24" icon="solar:sun-2-linear" width="24"></iconify-icon>
<span className="font-medium text-sm text-charcoal" data-en="Inner Clarity" data-es="Claridad Interior">Inner Clarity</span>
</div>
<div className="flex items-center space-x-3 bg-white/50 p-3 rounded-xl">
<iconify-icon className="text-turquoise" height="24" icon="solar:user-hands-linear" width="24"></iconify-icon>
<span className="font-medium text-sm text-charcoal" data-en="Devotion &amp; Presence" data-es="Devoción y Presencia">Devotion &amp; Presence</span>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center justify-center font-poppins font-medium text-sm bg-pink text-white px-8 py-3 rounded-full hover:bg-gold transition-all duration-300 shadow-soft hover:-translate-y-0.5" data-en="Join the Journey" data-es="Únete al Viaje" href="https://go.hotmart.com/C104694019Y?ap=c372">
                        Join the Journey
                    </a>
</div>
</div>
<div className="w-full lg:w-1/2">

<div className="relative w-full aspect-square max-w-md mx-auto">
<div className="absolute top-10 right-10 w-48 h-48 bg-pink/20 rounded-full blur-2xl animate-pulse mix-blend-multiply"></div>
<div className="absolute bottom-10 left-10 w-56 h-56 bg-turquoise/20 rounded-full blur-2xl animate-pulse mix-blend-multiply" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/40 backdrop-blur-md rounded-[3rem] border border-white flex items-center justify-center shadow-xl rotate-3">
<div className="text-center p-6">
<iconify-icon className="text-turquoise mb-4 stroke-[1]" height="64" icon="solar:infinity-linear" width="64"></iconify-icon>
<p className="font-playfair text-xl text-charcoal" data-en="A return to self" data-es="Un retorno al ser">A return to self</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-offwhite" id="learn">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-playfair font-medium text-3xl md:text-4xl tracking-tight text-charcoal mb-4" data-en="What You Will Learn" data-es="Lo Que Aprenderás">
                    What You Will Learn
                </h2>
<p className="text-charcoal/60 font-light" data-en="Core modules designed for deep transformation." data-es="Módulos principales diseñados para una transformación profunda.">Core modules designed for deep transformation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="bg-white p-8 rounded-[2rem] shadow-soft border border-sand/30 hover:shadow-md transition-shadow duration-300 group">
<div className="w-14 h-14 bg-turquoise/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-turquoise" height="28" icon="solar:eye-scan-linear" width="28"></iconify-icon>
</div>
<h3 className="font-poppins font-medium text-xl text-charcoal mb-3 tracking-tight" data-en="Mindfulness Foundations" data-es="Fundamentos del Mindfulness">Mindfulness Foundations</h3>
<p className="text-charcoal/70 font-light leading-relaxed" data-en="Learn to observe your thoughts and emotions without judgment, creating space between stimulus and response." data-es="Aprende a observar tus pensamientos y emociones sin juzgar, creando espacio entre el estímulo y la respuesta.">
                        Learn to observe your thoughts and emotions without judgment, creating space between stimulus and response.
                    </p>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-soft border border-sand/30 hover:shadow-md transition-shadow duration-300 group">
<div className="w-14 h-14 bg-pink/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-pink" height="28" icon="solar:heart-pulse-linear" width="28"></iconify-icon>
</div>
<h3 className="font-poppins font-medium text-xl text-charcoal mb-3 tracking-tight" data-en="Emotional Awareness" data-es="Conciencia Emocional">Emotional Awareness</h3>
<p className="text-charcoal/70 font-light leading-relaxed" data-en="Understand how emotions can guide your healing rather than control your actions." data-es="Entiende cómo las emociones pueden guiar tu sanación en lugar de controlar tus acciones.">
                        Understand how emotions can guide your healing rather than control your actions.
                    </p>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-soft border border-sand/30 hover:shadow-md transition-shadow duration-300 group">
<div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-gold" height="28" icon="solar:link-broken-linear" width="28"></iconify-icon>
</div>
<h3 className="font-poppins font-medium text-xl text-charcoal mb-3 tracking-tight" data-en="Breaking Patterns" data-es="Rompiendo Patrones">Breaking Patterns</h3>
<p className="text-charcoal/70 font-light leading-relaxed" data-en="Recognize and transform unconscious patterns that keep you stuck in cycles of pain." data-es="Reconoce y transforma patrones inconscientes que te mantienen atrapado en ciclos de dolor.">
                        Recognize and transform unconscious patterns that keep you stuck in cycles of pain.
                    </p>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-soft border border-sand/30 hover:shadow-md transition-shadow duration-300 group">
<div className="w-14 h-14 bg-turquoise/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-turquoise" height="28" icon="solar:sun-fog-linear" width="28"></iconify-icon>
</div>
<h3 className="font-poppins font-medium text-xl text-charcoal mb-3 tracking-tight" data-en="Living with Presence" data-es="Viviendo con Presencia">Living with Presence</h3>
<p className="text-charcoal/70 font-light leading-relaxed" data-en="Develop a deeper connection with your authentic self and learn to live fully in the present moment." data-es="Desarrolla una conexión más profunda con tu ser auténtico y aprende a vivir plenamente en el momento presente.">
                        Develop a deeper connection with your authentic self and learn to live fully in the present moment.
                    </p>
</div>
</div>
<div className="text-center mt-16">
<a className="inline-flex items-center justify-center font-poppins font-medium text-sm bg-turquoise text-white px-8 py-3 rounded-full hover:bg-pink transition-all duration-300 shadow-soft hover:-translate-y-0.5" data-en="Start Learning Today" data-es="Comienza a Aprender Hoy" href="https://go.hotmart.com/C104694019Y?ap=c372">
                    Start Learning Today
                </a>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-white to-sand" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-playfair font-medium text-3xl md:text-4xl tracking-tight text-charcoal text-center mb-16" data-en="What Changes After This Course" data-es="Qué Cambia Después de Este Curso">
                What Changes After This Course
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white p-8 rounded-[2rem] shadow-sm relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-turquoise transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<iconify-icon className="text-turquoise mb-4" height="32" icon="solar:cup-star-linear" width="32"></iconify-icon>
<p className="font-medium text-lg text-charcoal" data-en="You experience deeper calm in chaotic situations." data-es="Experimentas una calma más profunda en situaciones caóticas.">You experience deeper calm in chaotic situations.</p>
</div>
<div className="bg-white p-8 rounded-[2rem] shadow-sm relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-pink transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<iconify-icon className="text-pink mb-4" height="32" icon="solar:book-bookmark-linear" width="32"></iconify-icon>
<p className="font-medium text-lg text-charcoal" data-en="You understand your emotions and triggers better." data-es="Entiendes mejor tus emociones y detonantes.">You understand your emotions and triggers better.</p>
</div>
<div className="bg-white p-8 rounded-[2rem] shadow-sm relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<iconify-icon className="text-gold mb-4" height="32" icon="solar:scissors-linear" width="32"></iconify-icon>
<p className="font-medium text-lg text-charcoal" data-en="You break cycles and habits that no longer serve you." data-es="Rompes ciclos y hábitos que ya no te sirven.">You break cycles and habits that no longer serve you.</p>
</div>
<div className="bg-white p-8 rounded-[2rem] shadow-sm relative overflow-hidden group md:col-span-1 md:col-start-2 lg:col-span-1 lg:col-start-auto">
<div className="absolute top-0 left-0 w-full h-1 bg-turquoise transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<iconify-icon className="text-turquoise mb-4" height="32" icon="solar:user-heart-linear" width="32"></iconify-icon>
<p className="font-medium text-lg text-charcoal" data-en="You reconnect with your authentic, joyful self." data-es="Te reconectas con tu yo auténtico y alegre.">You reconnect with your authentic, joyful self.</p>
</div>
<div className="bg-white p-8 rounded-[2rem] shadow-sm relative overflow-hidden group md:col-span-1 md:col-start-auto lg:col-span-1 lg:col-start-auto">
<div className="absolute top-0 left-0 w-full h-1 bg-pink transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
<iconify-icon className="text-pink mb-4" height="32" icon="solar:sun-linear" width="32"></iconify-icon>
<p className="font-medium text-lg text-charcoal" data-en="You develop lasting inner clarity for life decisions." data-es="Desarrollas claridad interior duradera para decisiones de vida.">You develop lasting inner clarity for life decisions.</p>
</div>
</div>
<div className="text-center mt-16">
<a className="inline-flex items-center justify-center font-poppins font-medium text-sm bg-pink text-white px-8 py-3 rounded-full hover:bg-turquoise transition-all duration-300 shadow-soft hover:-translate-y-0.5" data-en="Start Your Transformation" data-es="Comienza Tu Transformación" href="https://go.hotmart.com/C104694019Y?ap=c372">
                    Start Your Transformation
                </a>
</div>
</div>
</section>

<section className="py-24 bg-offwhite">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/3">
<div className="aspect-square rounded-full bg-sand flex items-center justify-center border-4 border-white shadow-xl overflow-hidden relative">
<div className="bg-center opacity-100 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57c6ad30-2874-49fe-b57d-e0d0801078a0_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>

<iconify-icon className="text-charcoal/20" height="100" icon="solar:user-circle-linear" width="100"></iconify-icon>
</div>
</div>
<div className="w-full md:w-2/3 text-center md:text-left">
<h2 className="font-playfair font-medium text-3xl md:text-4xl tracking-tight text-charcoal mb-2" data-en="Meet Your Guide" data-es="Conoce a Tu Guía">Meet Your Guide</h2>
<p className="font-poppins text-turquoise font-medium tracking-wide mb-6">Durga Stef</p>
<div className="space-y-4 text-charcoal/70 font-light mb-8">
<p className="" data-en="Durga Stef is dedicated to helping people reconnect with their true nature through awareness, healing and spiritual practice." data-es="Durga Stef se dedica a ayudar a las personas a reconectar con su verdadera naturaleza a través de la conciencia, la sanación y la práctica espiritual.">
                            Durga Stef is dedicated to helping people reconnect with their true nature through awareness, healing and spiritual practice.
                        </p>
<p className="" data-en="Her teachings combine mindfulness, emotional integration and deep presence to guide students toward clarity and inner freedom." data-es="Sus enseñanzas combinan el mindfulness, la integración emocional y la presencia profunda para guiar a los estudiantes hacia la claridad y la libertad interior.">
                            Her teachings combine mindfulness, emotional integration and deep presence to guide students toward clarity and inner freedom.
                        </p>
</div>
<a className="inline-flex items-center justify-center font-poppins font-medium text-sm border-2 border-turquoise text-turquoise hover:bg-turquoise hover:text-white px-8 py-2.5 rounded-full transition-all duration-300" data-en="Learn With Durga" data-es="Aprende Con Durga" href="https://go.hotmart.com/C104694019Y?ap=c372">
                        Learn With Durga
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sand" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-playfair font-medium text-3xl md:text-4xl tracking-tight text-charcoal text-center mb-16" data-en="What Students Are Saying" data-es="Lo Que Dicen Los Estudiantes">
                What Students Are Saying
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-[2rem] shadow-sm relative">
<iconify-icon className="text-pink/20 absolute top-6 right-6" height="40" icon="solar:quote-left-linear" width="40"></iconify-icon>
<p className="text-charcoal/80 font-light italic mb-6 relative z-10" data-en="This course helped me understand myself in a way I never had before. The emotional clarity module was life-changing." data-es="Este curso me ayudó a entenderme de una manera que nunca antes lo había hecho. El módulo de claridad emocional me cambió la vida.">
                        "This course helped me understand myself in a way I never had before. The emotional clarity module was life-changing."
                    </p>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center text-charcoal/40 font-poppins text-sm font-medium">S</div>
<span className="font-medium text-sm text-charcoal">Sarah T.</span>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm relative">
<iconify-icon className="text-turquoise/20 absolute top-6 right-6" height="40" icon="solar:quote-left-linear" width="40"></iconify-icon>
<p className="text-charcoal/80 font-light italic mb-6 relative z-10" data-en="I finally feel clarity and peace in my daily life. The practices are simple to follow but incredibly deep." data-es="Por fin siento claridad y paz en mi vida diaria. Las prácticas son fáciles de seguir pero increíblemente profundas.">
                        "I finally feel clarity and peace in my daily life. The practices are simple to follow but incredibly deep."
                    </p>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center text-charcoal/40 font-poppins text-sm font-medium">M</div>
<span className="font-medium text-sm text-charcoal">Michael R.</span>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] shadow-sm relative">
<iconify-icon className="text-gold/20 absolute top-6 right-6" height="40" icon="solar:quote-left-linear" width="40"></iconify-icon>
<p className="text-charcoal/80 font-light italic mb-6 relative z-10" data-en="The practices are simple but incredibly powerful. Durga guides you with such warmth and deep wisdom." data-es="Las prácticas son simples pero increíblemente poderosas. Durga te guía con tanta calidez y sabiduría profunda.">
                        "The practices are simple but incredibly powerful. Durga guides you with such warmth and deep wisdom."
                    </p>
<div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full bg-offwhite flex items-center justify-center text-charcoal/40 font-poppins text-sm font-medium">E</div>
<span className="font-medium text-sm text-charcoal">Elena G.</span>
</div>
</div>
</div>
<div className="text-center mt-16">
<a className="inline-flex items-center justify-center font-poppins font-medium text-sm bg-turquoise text-white px-8 py-3 rounded-full hover:bg-charcoal transition-all duration-300 shadow-soft hover:-translate-y-0.5" data-en="Start Your Journey Today" data-es="Comienza Tu Viaje Hoy" href="https://go.hotmart.com/C104694019Y?ap=c372">
                    Start Your Journey Today
                </a>
</div>
</div>
</section>

<section className="py-24 bg-offwhite">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-soft border border-sand">
<h2 className="font-playfair font-medium text-3xl tracking-tight text-charcoal text-center mb-10" data-en="Your Course Includes" data-es="Tu Curso Incluye">
                    Your Course Includes
                </h2>
<ul className="space-y-6 max-w-xl mx-auto">
<li className="flex items-center space-x-4">
<div className="w-8 h-8 rounded-full bg-turquoise/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-turquoise" height="20" icon="solar:play-circle-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-charcoal/80" data-en="Complete online video program" data-es="Programa completo en video online">Complete online video program</span>
</li>
<li className="flex items-center space-x-4">
<div className="w-8 h-8 rounded-full bg-pink/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-pink" height="20" icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-charcoal/80" data-en="Practical exercises and guided practices" data-es="Ejercicios prácticos y prácticas guiadas">Practical exercises and guided practices</span>
</li>
<li className="flex items-center space-x-4">
<div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-gold" height="20" icon="solar:infinity-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-charcoal/80" data-en="Lifetime access to all materials" data-es="Acceso de por vida a todos los materiales">Lifetime access to all materials</span>
</li>
<li className="flex items-center space-x-4">
<div className="w-8 h-8 rounded-full bg-turquoise/10 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-turquoise" height="20" icon="solar:clock-circle-linear" width="20"></iconify-icon>
</div>
<span className="font-medium text-charcoal/80" data-en="Learn at your own pace, anytime" data-es="Aprende a tu propio ritmo, en cualquier momento">Learn at your own pace, anytime</span>
</li>
</ul>
<div className="text-center mt-12 pt-10 border-t border-sand">
<a className="inline-flex items-center justify-center font-poppins font-medium text-base bg-pink text-white w-full sm:w-auto px-10 py-4 rounded-full hover:bg-gold transition-all duration-300 shadow-md hover:-translate-y-1" data-en="Access the Course Now" data-es="Accede al Curso Ahora" href="https://go.hotmart.com/C104694019Y?ap=c372">
                        Access the Course Now
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gold/10">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 text-gold mb-6">
<iconify-icon height="32" icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h2 className="font-playfair font-medium text-3xl tracking-tight text-charcoal mb-4" data-en="Risk-Free Experience" data-es="Experiencia Sin Riesgo">
                Risk-Free Experience
            </h2>
<p className="font-light text-charcoal/80 mb-8 max-w-lg mx-auto" data-en="Your purchase is protected by Hotmart’s secure checkout and guarantee policy. You can explore the course with confidence." data-es="Tu compra está protegida por el pago seguro de Hotmart y su política de garantía. Puedes explorar el curso con confianza.">
                Your purchase is protected by Hotmart’s secure checkout and guarantee policy. You can explore the course with confidence.
            </p>
<a className="font-poppins font-medium text-sm text-charcoal border border-charcoal/20 px-8 py-2.5 rounded-full hover:bg-white transition-colors" data-en="Start Now" data-es="Comenzar Ahora" href="https://go.hotmart.com/C104694019Y?ap=c372">Start Now</a>
</div>
</section>

<section className="py-24 bg-offwhite">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-playfair font-medium text-3xl tracking-tight text-charcoal mb-12" data-en="You May Also Like" data-es="También te Puede Interesar">
                You May Also Like
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-[2rem] overflow-hidden border border-sand hover:shadow-soft transition-shadow duration-300 flex flex-col">
<div className="flex bg-center h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/57c6ad30-2874-49fe-b57d-e0d0801078a0_800w.jpg)] bg-cover relative items-center justify-center" onclick="window.location.href='https://go.hotmart.com/D104731386L?ap=d619'" role="button">
<iconify-icon className="text-pink/50" height="48" icon="solar:heart-angle-linear" style={{color: 'rgb(245, 138, 167)'}} width="48"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-charcoal text-base font-medium font-poppins mb-2" data-en="Healing Emotional Patterns" data-es="Sanando Patrones Emocionales" onclick="window.location.href='https://go.hotmart.com/D104731386L?ap=d619'" role="button">Claridad Plus</h3>
<p className="text-charcoal/70 flex-grow text-sm font-light mb-6" data-en="Learn how to transform emotional patterns that keep repeating in your life." data-es="Aprende a transformar patrones emocionales que se repiten en tu vida.">Aprende a cuestionar los pensamientos que te hacen sufrir.</p>
<a className="text-turquoise hover:text-pink transition-colors uppercase text-xs font-medium tracking-wide" data-en="View Course" data-es="Ver Curso" href="https://go.hotmart.com/D104731386L?ap=d619">View Course</a>
</div>
</div>

<div className="bg-white rounded-[2rem] overflow-hidden border border-sand hover:shadow-soft transition-shadow duration-300 flex flex-col">
<div className="flex cursor-pointer h-40 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad21a0bc-9b3a-4a8a-a607-d58f54190393_800w.png)] bg-cover bg-center relative items-center justify-center" onclick="window.location.href='https://go.hotmart.com/V104733897P?ap=2234'" role="button">
<iconify-icon className="text-turquoise/50" height="48" icon="solar:spa-linear" width="48"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-charcoal text-base font-medium font-poppins mb-2" data-en="Mindfulness for Daily Life" data-es="Mindfulness para la Vida Diaria">Anti Burnout</h3>
<p className="text-sm font-light text-charcoal/70 mb-6 flex-grow" data-en="Simple practices to cultivate awareness and calm in everyday moments." data-es="Prácticas simples para cultivar la conciencia y la calma en momentos cotidianos.">Simple practices to cultivate awareness and calm in everyday moments.</p>
<a className="text-turquoise hover:text-pink transition-colors uppercase text-xs font-medium tracking-wide" data-en="View Course" data-es="Ver Curso" href="https://go.hotmart.com/V104733897P?ap=2234">View Course</a>
</div>
</div>

<div className="bg-white rounded-[2rem] overflow-hidden border border-sand hover:shadow-soft transition-shadow duration-300 flex flex-col">
<div className="h-40 bg-sand relative flex items-center justify-center">
<iconify-icon className="text-gold/50" height="48" icon="solar:sun-2-linear" width="48"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="font-poppins font-medium text-base text-charcoal mb-2" data-en="Inner Peace Meditation" data-es="Meditación de Paz Interior">Inner Peace Meditation</h3>
<p className="text-sm font-light text-charcoal/70 mb-6 flex-grow" data-en="Meditation techniques to reduce stress and deepen presence." data-es="Técnicas de meditación para reducir el estrés y profundizar la presencia.">Meditation techniques to reduce stress and deepen presence.</p>
<a className="text-xs font-medium text-turquoise hover:text-pink transition-colors uppercase tracking-wide" data-en="View Course" data-es="Ver Curso" href="#">View Course</a>
</div>
</div>

<div className="bg-white rounded-[2rem] overflow-hidden border border-sand hover:shadow-soft transition-shadow duration-300 flex flex-col">
<div className="h-40 bg-sand relative flex items-center justify-center">
<iconify-icon className="text-charcoal/30" height="48" icon="solar:map-arrow-up-linear" width="48"></iconify-icon>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="font-poppins font-medium text-base text-charcoal mb-2" data-en="Self Discovery Journey" data-es="Viaje de Autodescubrimiento">Self Discovery Journey</h3>
<p className="text-sm font-light text-charcoal/70 mb-6 flex-grow" data-en="A guided path to reconnect with your authentic self." data-es="Un camino guiado para reconectar con tu yo auténtico.">A guided path to reconnect with your authentic self.</p>
<a className="text-xs font-medium text-turquoise hover:text-pink transition-colors uppercase tracking-wide" data-en="View Course" data-es="Ver Curso" href="#">View Course</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-sand" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-playfair font-medium text-3xl md:text-4xl tracking-tight text-charcoal text-center mb-12" data-en="Frequently Asked Questions" data-es="Preguntas Frecuentes">
                Frequently Asked Questions
            </h2>
<div className="space-y-4">

<div className="bg-white rounded-2xl shadow-sm border border-sand/30 overflow-hidden">
<button aria-expanded="false" className="accordion-button w-full flex items-center justify-between p-6 text-left">
<span className="font-medium text-charcoal" data-en="How do I access the course?" data-es="¿Cómo accedo al curso?">How do I access the course?</span>
<iconify-icon className="accordion-icon text-charcoal/50" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-white px-6">
<p className="pb-6 font-light text-charcoal/70" data-en="After purchase, you will receive an email from Hotmart with your login credentials to access the platform instantly." data-es="Después de la compra, recibirás un correo electrónico de Hotmart con tus credenciales para acceder a la plataforma al instante.">
                            After purchase, you will receive an email from Hotmart with your login credentials to access the platform instantly.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-sand/30 overflow-hidden">
<button aria-expanded="false" className="accordion-button w-full flex items-center justify-between p-6 text-left">
<span className="font-medium text-charcoal" data-en="Is the course beginner friendly?" data-es="¿Es el curso apto para principiantes?">Is the course beginner friendly?</span>
<iconify-icon className="accordion-icon text-charcoal/50" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-white px-6">
<p className="pb-6 font-light text-charcoal/70" data-en="Absolutely. The concepts are broken down into simple, actionable steps that anyone can follow, regardless of previous experience." data-es="Absolutamente. Los conceptos se dividen en pasos simples y procesables que cualquiera puede seguir, independientemente de la experiencia previa.">
                            Absolutely. The concepts are broken down into simple, actionable steps that anyone can follow, regardless of previous experience.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-sand/30 overflow-hidden">
<button aria-expanded="false" className="accordion-button w-full flex items-center justify-between p-6 text-left">
<span className="font-medium text-charcoal" data-en="Can I watch on my phone?" data-es="¿Puedo verlo en mi teléfono?">Can I watch on my phone?</span>
<iconify-icon className="accordion-icon text-charcoal/50" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-white px-6">
<p className="pb-6 font-light text-charcoal/70" data-en="Yes, Hotmart has a mobile app (Hotmart Sparkle) that allows you to watch the videos on your phone, even offline." data-es="Sí, Hotmart tiene una aplicación móvil (Hotmart Sparkle) que te permite ver los videos en tu teléfono, incluso sin conexión.">
                            Yes, Hotmart has a mobile app (Hotmart Sparkle) that allows you to watch the videos on your phone, even offline.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-sand/30 overflow-hidden">
<button aria-expanded="false" className="accordion-button w-full flex items-center justify-between p-6 text-left">
<span className="font-medium text-charcoal" data-en="How long do I have access?" data-es="¿Por cuánto tiempo tengo acceso?">How long do I have access?</span>
<iconify-icon className="accordion-icon text-charcoal/50" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-white px-6">
<p className="pb-6 font-light text-charcoal/70" data-en="You get lifetime access to the course materials, including any future updates to the content." data-es="Tienes acceso de por vida a los materiales del curso, incluyendo cualquier actualización futura del contenido.">
                            You get lifetime access to the course materials, including any future updates to the content.
                        </p>
</div>
</div>

<div className="bg-white rounded-2xl shadow-sm border border-sand/30 overflow-hidden">
<button aria-expanded="false" className="accordion-button w-full flex items-center justify-between p-6 text-left">
<span className="font-medium text-charcoal" data-en="Do I need prior experience with meditation?" data-es="¿Necesito experiencia previa en meditación?">Do I need prior experience with meditation?</span>
<iconify-icon className="accordion-icon text-charcoal/50" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="accordion-content bg-white px-6">
<p className="pb-6 font-light text-charcoal/70" data-en="No prior experience is necessary. The practices are guided and explain exactly what to do." data-es="No es necesaria experiencia previa. Las prácticas son guiadas y explican exactamente qué hacer.">
                            No prior experience is necessary. The practices are guided and explain exactly what to do.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-hero-gradient pt-32 pb-32 mt-12 rounded-t-[3rem] relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 mix-blend-overlay"></div>
<div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-turquoise/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-playfair font-medium text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6 drop-shadow-sm" data-en="Your Clarity Begins Today" data-es="Tu Claridad Comienza Hoy">
                Your Clarity Begins Today
            </h2>
<p className="font-inter font-light text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto" data-en="If you feel ready to reconnect with your authentic self, this journey begins with a single step." data-es="Si te sientes listo para reconectar con tu yo auténtico, este viaje comienza con un solo paso.">
                If you feel ready to reconnect with your authentic self, this journey begins with a single step.
            </p>
<a className="inline-flex items-center justify-center font-poppins font-medium text-lg bg-white text-pink px-10 py-5 rounded-full hover:bg-charcoal hover:text-white transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1" data-en="Start Your Journey Now" data-es="Comienza Tu Viaje Ahora" href="https://go.hotmart.com/C104694019Y?ap=c372">
                Start Your Journey Now
            </a>
</div>
</section>

<footer className="bg-charcoal text-white/70 py-16 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<a className="font-playfair font-medium text-2xl tracking-tighter text-white mb-4 block" data-en="DS" data-es="DS" href="#">DS</a>
<p className="font-light text-sm" data-en="Clarity / Self Mastery Course by Durga Stef." data-es="Curso de Claridad / Maestría Personal por Durga Stef.">Clarity / Self Mastery Course by Durga Stef.</p>
</div>
<div>
<h4 className="font-poppins font-medium text-white mb-4 uppercase text-xs tracking-wider" data-en="Quick Links" data-es="Enlaces Rápidos">Quick Links</h4>
<ul className="space-y-3 font-light text-sm">
<li><a className="hover:text-white transition-colors" data-en="About the Course" data-es="Sobre el Curso" href="#about">About the Course</a></li>
<li><a className="hover:text-white transition-colors" data-en="Modules" data-es="Módulos" href="#learn">Modules</a></li>
<li><a className="hover:text-white transition-colors" data-en="Testimonials" data-es="Testimonios" href="#testimonials">Testimonials</a></li>
<li><a className="hover:text-white transition-colors" data-en="FAQ" data-es="Preguntas" href="#faq">FAQ</a></li>
</ul>
</div>
<div className="">
<h4 className="font-poppins font-medium text-white mb-4 uppercase text-xs tracking-wider" data-en="Support" data-es="Soporte">Support</h4>
<ul className="space-y-3 font-light text-sm">
<li><a className="hover:text-white transition-colors" data-en="Contact Creator" data-es="Contactar al Creador" href="#">Contact Creator</a></li>
<li className=""><a className="hover:text-white transition-colors" data-en="Hotmart Support" data-es="Soporte Hotmart" href="#">Hotmart Support</a></li>
</ul>
</div>
<div>
<h4 className="font-poppins font-medium text-white mb-4 uppercase text-xs tracking-wider" data-en="Legal" data-es="Legal">Legal</h4>
<ul className="space-y-3 font-light text-sm">
<li><a className="hover:text-white transition-colors" data-en="Privacy Policy" data-es="Política de Privacidad" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" data-en="Terms of Service" data-es="Términos de Servicio" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-light">
<p>© <span id="year">2026</span> Durga Stef. <span data-en="All rights reserved." data-es="Todos los derechos reservados.">All rights reserved.</span></p>
<div className="mt-4 md:mt-0 flex space-x-4">
<iconify-icon className="hover:text-white cursor-pointer transition-colors" height="20" icon="solar:instagram-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-white cursor-pointer transition-colors" height="20" icon="solar:letter-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

<div className="md:hidden fixed bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-sand p-4 z-50 flex justify-center">
<a className="w-full inline-flex items-center justify-center font-poppins font-medium text-sm bg-pink text-white px-6 py-3 rounded-full hover:bg-gold shadow-md" data-en="Begin Your Journey" data-es="Comienza Tu Viaje" href="https://go.hotmart.com/C104694019Y?ap=c372">
            Begin Your Journey
        </a>
</div>



    </>
  );
}
