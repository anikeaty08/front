import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
moss: {
50: '#F4F7F5',
100: '#E3EBE5',
200: '#C5D6CA',
800: '#344E41',
900: '#263A2F',
},
stone: {
50: '#FAFAF9',
100: '#F5F5F4',
200: '#E7E5E4',
300: '#D6D3D1',
800: '#57534E',
900: '#44403C',
},
cream: '#FDFCF8',
},
borderRadius: {
'4xl': '2rem',
}
}
}
}



        // Init Icons with 1.5 stroke
        lucide.createIcons();

        // SEO Configuration
        const seoConfig = {
            'home': {
                title: "YFB Yoga Foundation Bashundhara | Yoga Center in Dhaka",
                desc: "YFB Yoga Foundation Bashundhara is a yoga & meditation center in Bashundhara, Dhaka offering daily yoga, freehand exercise, and mental wellness programs."
            },
            'about': {
                title: "About YFB Yoga Foundation | Wellness Sanctuary Dhaka",
                desc: "Learn about YFB Yoga Foundation Bashundhara, a community-driven yoga and meditation center dedicated to mental and physical well-being in Dhaka."
            },
            'programs': {
                title: "Classes & Programs | YFB Yoga Foundation",
                desc: "Explore daily yoga, freehand exercise, and meditation programs at YFB Yoga Foundation Bashundhara, Dhaka."
            },
            'gallery': {
                title: "Moments of Calm | YFB Yoga Foundation Gallery",
                desc: "View photos from yoga and meditation sessions at YFB Yoga Foundation Bashundhara, Dhaka."
            },
            'contact': {
                title: "Contact Us | YFB Yoga Foundation Bashundhara",
                desc: "Contact YFB Yoga Foundation Bashundhara for yoga and meditation sessions in Bashundhara, Dhaka. Call +8801716850590."
            }
        };

        // Routing Logic
        function route(event, pageId) {
            if(event) event.preventDefault();
            
            // Hide all pages
            document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
            
            // Show target page
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.remove('hidden');
                target.classList.add('fade-in');
                
                // Re-trigger animation
                target.style.animation = 'none';
                target.offsetHeight; 
                target.style.animation = null; 
            }

            // Update URL and Title
            history.pushState(null, null, `#${pageId}`);
            if(seoConfig[pageId]) {
                document.title = seoConfig[pageId].title;
                document.getElementById('page-desc').setAttribute('content', seoConfig[pageId].desc);
            }

            window.scrollTo(0, 0);
            
            // Close mobile menu
            const mobileMenu = document.getElementById('mobile-menu');
            if(!mobileMenu.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // Init
        window.addEventListener('load', () => {
            const hash = window.location.hash.replace('#', '');
            if(hash && seoConfig[hash]) {
                route(null, hash);
            } else {
                route(null, 'home');
            }
        });

        window.addEventListener('popstate', () => {
            const hash = window.location.hash.replace('#', '');
            if(hash && seoConfig[hash]) {
                route(null, hash);
            } else {
                route(null, 'home');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2.5 group" href="#home" onclick="route(event, 'home')">

<div className="w-9 h-9 bg-moss-800 rounded-xl flex items-center justify-center text-white shadow-sm group-hover:bg-moss-900 transition-colors">
<span className="font-medium text-xs tracking-wider">YFB</span>
</div>
<span className="text-sm font-semibold tracking-tight text-stone-800 group-hover:text-stone-600 transition-colors">Yoga Foundation</span>
</a>

<nav className="hidden md:flex items-center gap-1 bg-white/50 p-1.5 rounded-full border border-stone-200/50 backdrop-blur-sm">
<a className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-moss-900 hover:bg-white rounded-full transition-all" href="#home" onclick="route(event, 'home')">Home</a>
<a className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-moss-900 hover:bg-white rounded-full transition-all" href="#about" onclick="route(event, 'about')">About</a>
<a className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-moss-900 hover:bg-white rounded-full transition-all" href="#programs" onclick="route(event, 'programs')">Programs</a>
<a className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-moss-900 hover:bg-white rounded-full transition-all" href="#gallery" onclick="route(event, 'gallery')">Gallery</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex px-5 py-2.5 bg-moss-800 text-white rounded-full hover:bg-moss-900 transition-all text-xs font-medium tracking-wide shadow-sm hover:shadow-md" href="#contact" onclick="route(event, 'contact')">
                    Contact Us
                </a>

<button className="md:hidden p-2 text-stone-800" onclick="toggleMobileMenu()">
<i className="w-5 h-5" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-stone-50 border-b border-stone-200 p-6 flex-col gap-4 shadow-lg animate-in slide-in-from-top-2" id="mobile-menu">
<a className="text-sm font-medium text-stone-600 block" href="#home" onclick="route(event, 'home')">Home</a>
<a className="text-sm font-medium text-stone-600 block" href="#about" onclick="route(event, 'about')">About</a>
<a className="text-sm font-medium text-stone-600 block" href="#programs" onclick="route(event, 'programs')">Programs</a>
<a className="text-sm font-medium text-stone-600 block" href="#gallery" onclick="route(event, 'gallery')">Gallery</a>
<a className="text-sm font-medium text-moss-800 block font-semibold" href="#contact" onclick="route(event, 'contact')">Contact</a>
</div>
</header>

<main className="flex-grow pt-20">

<section className="page-view fade-in" id="home">
<div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
<div className="flex flex-col items-center text-center space-y-8">

<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-moss-50 text-moss-800 text-[11px] font-medium tracking-wide border border-moss-100">
                        Sanctuary for Wellness in Dhaka
                    </span>

<h1 className="text-4xl md:text-6xl font-semibold text-stone-900 tracking-tight leading-[1.1] max-w-4xl">
                        Find balance within the<br/>
<span className="text-stone-400">chaos of the city.</span>
</h1>

<p className="text-lg text-stone-500 max-w-xl leading-relaxed font-light">
                        YFB provides a serene space in Bashundhara R/A for daily yoga, freehand exercise, and meditation to cultivate a peaceful mind and body.
                    </p>

<div className="flex flex-col sm:flex-row gap-4 pt-6">
<a className="px-8 py-3.5 bg-moss-800 text-white rounded-full font-medium text-sm hover:bg-moss-900 transition-all shadow-lg shadow-moss-800/20 flex items-center justify-center gap-2" href="#programs" onclick="route(event, 'programs')">
                            Explore Programs <i className="w-4 h-4 opacity-70" data-lucide="arrow-right"></i>
</a>
<a className="px-8 py-3.5 bg-white text-stone-700 border border-stone-200 rounded-full font-medium text-sm hover:bg-stone-50 hover:border-stone-300 transition-all shadow-sm" href="#contact" onclick="route(event, 'contact')">
                            Visit Center
                        </a>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 h-64 md:h-80 w-full">

<div className="col-span-1 md:col-span-2 h-full rounded-3xl overflow-hidden relative group">
<div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-all duration-500"></div>
<img alt="Yoga Session Group" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544367563-12123d895951?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="col-span-1 h-full rounded-3xl overflow-hidden relative mt-8 md:mt-0">
<img alt="Stretching on Pink Mat" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593164842264-854604eb8a4e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="hidden md:block col-span-1 h-full rounded-3xl overflow-hidden relative -mt-8">
<img alt="Meditation" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
<div className="p-8 rounded-[2rem] bg-white border border-stone-100 soft-shadow hover:translate-y-[-4px] transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-moss-50 flex items-center justify-center mb-6 text-moss-800">
<i className="w-5 h-5" data-lucide="leaf"></i>
</div>
<h3 className="text-stone-900 font-semibold mb-3 tracking-tight">Morning Yoga</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Begin your day with intention. Our morning sessions focus on flexibility and awakening energy.</p>
</div>
<div className="p-8 rounded-[2rem] bg-white border border-stone-100 soft-shadow hover:translate-y-[-4px] transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center mb-6 text-stone-800">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<h3 className="text-stone-900 font-semibold mb-3 tracking-tight">Freehand Exercise</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Build strength naturally. Guided bodyweight exercises designed for all age groups.</p>
</div>
<div className="p-8 rounded-[2rem] bg-white border border-stone-100 soft-shadow hover:translate-y-[-4px] transition-all duration-300">
<div className="w-12 h-12 rounded-2xl bg-moss-50 flex items-center justify-center mb-6 text-moss-800">
<i className="w-5 h-5" data-lucide="wind"></i>
</div>
<h3 className="text-stone-900 font-semibold mb-3 tracking-tight">Meditation</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Find stillness. Guided practices to reduce stress and improve mental clarity.</p>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in" id="about">
<div className="max-w-3xl mx-auto px-6 py-20">
<span className="text-moss-800 text-xs font-semibold tracking-wider uppercase mb-3 block">Who We Are</span>
<h1 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight mb-10 leading-snug">
                    Cultivating wellness through community<br/> in the heart of Bashundhara.
                </h1>
<div className="prose prose-stone prose-lg prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-stone-500 prose-p:font-light prose-p:leading-8">
<p>
                        Yoga Freehand Exercise and Meditation (YFM) is a complimentary health awareness club. We believe that wellness should be accessible, communal, and holistic. Located in <strong>Bashundhara R/A, Dhaka</strong>, we offer a sanctuary away from the noise.
                    </p>
<div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
<div className="bg-white p-6 rounded-3xl border border-stone-100 soft-shadow">
<h4 className="font-semibold text-stone-900 mb-2">Our Mission</h4>
<p className="text-sm text-stone-500 font-light">To provide an inclusive space where residents can engage in daily exercises under expert guidance.</p>
</div>
<div className="bg-white p-6 rounded-3xl border border-stone-100 soft-shadow">
<h4 className="font-semibold text-stone-900 mb-2">Our Vision</h4>
<p className="text-sm text-stone-500 font-light">A healthy, active community that values both physical vitality and mental peace.</p>
</div>
</div>
<p>
                        Our programs are designed for everyone—from beginners taking their first breath on the mat to experienced practitioners looking to deepen their flow. We combine traditional yoga practices with modern freehand exercises to create a balanced routine.
                    </p>
</div>
<div className="mt-12 p-8 bg-moss-50/50 rounded-3xl border border-moss-100 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="font-semibold text-moss-900 mb-1">Join our Community</h3>
<p className="text-sm text-moss-800/70">Experience the difference of a supportive environment.</p>
</div>
<a className="px-6 py-3 bg-white text-moss-900 rounded-full text-xs font-medium border border-moss-100 hover:border-moss-200 transition-all shadow-sm shrink-0" href="#contact" onclick="route(event, 'contact')">
                        Get in Touch
                    </a>
</div>
</div>
</section>

<section className="page-view hidden fade-in" id="programs">
<div className="max-w-5xl mx-auto px-6 py-20">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-moss-800 text-xs font-semibold tracking-wider uppercase mb-3 block">Our Offerings</span>
<h1 className="text-3xl md:text-4xl font-semibold text-stone-900 tracking-tight">Wellness Programs</h1>
</div>
<p className="text-stone-500 max-w-sm text-sm font-light leading-relaxed text-right md:text-left">
                        Curated sessions designed to harmonize body and mind. Open to all residents of Bashundhara.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<article className="group rounded-[2rem] bg-white p-3 border border-stone-100 soft-shadow hover:shadow-lg transition-all duration-500">
<div className="h-64 rounded-[1.5rem] overflow-hidden relative">
<img alt="Morning Yoga" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-semibold text-stone-800 uppercase tracking-wide">Daily • 6:00 AM</div>
</div>
<div className="p-5">
<h2 className="text-xl font-semibold text-stone-900 mb-3 mt-2">Morning Yoga Flow</h2>
<p className="text-stone-500 text-sm leading-relaxed mb-6 font-light">
                                Wake up your body with our signature morning routine. Focuses on flexibility, breath work, and core strength to start your day right.
                            </p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-600 text-xs font-medium hover:bg-moss-50 hover:text-moss-900 hover:border-moss-200 transition-colors" onclick="route(event, 'contact')">
                                View Schedule
                            </button>
</div>
</article>

<article className="group rounded-[2rem] bg-white p-3 border border-stone-100 soft-shadow hover:shadow-lg transition-all duration-500">
<div className="h-64 rounded-[1.5rem] overflow-hidden relative">
<img alt="Freehand Exercise" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-semibold text-stone-800 uppercase tracking-wide">Daily • 7:00 AM</div>
</div>
<div className="p-5">
<h2 className="text-xl font-semibold text-stone-900 mb-3 mt-2">Freehand &amp; Calisthenics</h2>
<p className="text-stone-500 text-sm leading-relaxed mb-6 font-light">
                                Dynamic bodyweight movements to improve stamina and agility. No equipment needed, just your dedication.
                            </p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-600 text-xs font-medium hover:bg-moss-50 hover:text-moss-900 hover:border-moss-200 transition-colors" onclick="route(event, 'contact')">
                                View Schedule
                            </button>
</div>
</article>

<article className="group rounded-[2rem] bg-white p-3 border border-stone-100 soft-shadow hover:shadow-lg transition-all duration-500">
<div className="h-64 rounded-[1.5rem] overflow-hidden relative">
<img alt="Meditation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-semibold text-stone-800 uppercase tracking-wide">Weekly • Friday</div>
</div>
<div className="p-5">
<h2 className="text-xl font-semibold text-stone-900 mb-3 mt-2">Mindfulness Meditation</h2>
<p className="text-stone-500 text-sm leading-relaxed mb-6 font-light">
                                Guided sessions to unplug from the city noise. Learn techniques to manage stress and find inner equilibrium.
                            </p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-600 text-xs font-medium hover:bg-moss-50 hover:text-moss-900 hover:border-moss-200 transition-colors" onclick="route(event, 'contact')">
                                View Schedule
                            </button>
</div>
</article>

<article className="group rounded-[2rem] bg-white p-3 border border-stone-100 soft-shadow hover:shadow-lg transition-all duration-500">
<div className="h-64 rounded-[1.5rem] overflow-hidden relative">
<img alt="Community" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-semibold text-stone-800 uppercase tracking-wide">Monthly</div>
</div>
<div className="p-5">
<h2 className="text-xl font-semibold text-stone-900 mb-3 mt-2">Community Workshops</h2>
<p className="text-stone-500 text-sm leading-relaxed mb-6 font-light">
                                Special events covering nutrition, posture correction, and holistic living tips for the Bashundhara community.
                            </p>
<button className="w-full py-3 rounded-xl border border-stone-200 text-stone-600 text-xs font-medium hover:bg-moss-50 hover:text-moss-900 hover:border-moss-200 transition-colors" onclick="route(event, 'contact')">
                                View Schedule
                            </button>
</div>
</article>
</div>
</div>
</section>

<section className="page-view hidden fade-in" id="gallery">
<div className="max-w-6xl mx-auto px-6 py-20">
<div className="mb-12 text-center max-w-2xl mx-auto">
<span className="text-moss-800 text-xs font-semibold tracking-wider uppercase mb-3 block">Visual Journey</span>
<h1 className="text-3xl font-semibold text-stone-900 tracking-tight mb-4">Moments of Calm</h1>
<p className="text-stone-500 font-light">Glimpses from our daily sessions. A collection of peace, movement, and community.</p>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid rounded-3xl overflow-hidden hover:opacity-95 transition-opacity">
<img alt="Yoga Group" className="w-full" loading="lazy" src="https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid rounded-3xl overflow-hidden hover:opacity-95 transition-opacity">
<img alt="Meditation outdoors" className="w-full" loading="lazy" src="https://images.unsplash.com/photo-1599447292180-45fd84092ef0?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid rounded-3xl overflow-hidden hover:opacity-95 transition-opacity">
<img alt="Greenery Yoga" className="w-full" loading="lazy" src="https://images.unsplash.com/photo-1588286840104-4bd298077af7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid rounded-3xl overflow-hidden hover:opacity-95 transition-opacity">
<img alt="Instructor" className="w-full" loading="lazy" src="https://images.unsplash.com/photo-1556816723-295fa529a3e6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid rounded-3xl overflow-hidden hover:opacity-95 transition-opacity">
<img alt="Peaceful pose" className="w-full" loading="lazy" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid rounded-3xl overflow-hidden hover:opacity-95 transition-opacity">
<img alt="Stretching" className="w-full" loading="lazy" src="https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="break-inside-avoid rounded-3xl overflow-hidden hover:opacity-95 transition-opacity">
<img alt="Yoga Mat" className="w-full" loading="lazy" src="https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-in" id="contact">
<div className="max-w-5xl mx-auto px-6 py-20">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

<div>
<span className="text-moss-800 text-xs font-semibold tracking-wider uppercase mb-3 block">Get in Touch</span>
<h1 className="text-3xl font-semibold text-stone-900 tracking-tight mb-6">Visit Our Center</h1>
<p className="text-stone-500 mb-10 font-light leading-relaxed">
                            We invite you to join us for a session. No prior registration required for your first visit. Just bring a mat and an open mind.
                        </p>
<div className="space-y-8">
<div className="flex gap-5 group">
<div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center shrink-0 group-hover:bg-moss-50 group-hover:text-moss-800 transition-colors">
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="font-semibold text-stone-900 mb-1">Location</h3>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                                        21 Afroza Begum Road, Block-I,<br/>
                                        Bashundhara R/A, Dhaka, Bangladesh
                                    </p>
</div>
</div>
<div className="flex gap-5 group">
<div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center shrink-0 group-hover:bg-moss-50 group-hover:text-moss-800 transition-colors">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
<p className="text-sm text-stone-500 font-light">
<a className="hover:text-moss-800 transition-colors border-b border-transparent hover:border-moss-800" href="tel:+8801716850590">+880 1716-850590</a>
</p>
</div>
</div>
<div className="flex gap-5 group">
<div className="w-12 h-12 rounded-2xl bg-stone-100 flex items-center justify-center shrink-0 group-hover:bg-moss-50 group-hover:text-moss-800 transition-colors">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div>
<h3 className="font-semibold text-stone-900 mb-1">Opening Hours</h3>
<p className="text-sm text-stone-500 font-light">
                                        Daily: 6:00 AM - 8:00 PM
                                    </p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-[2rem] border border-stone-100 soft-shadow h-fit">
<h3 className="font-semibold text-stone-900 mb-1">Send a Message</h3>
<p className="text-xs text-stone-400 mb-6 uppercase tracking-wide">We usually respond within 24 hours</p>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Thank you! We will contact you soon.');">
<div>
<label className="block text-xs font-semibold text-stone-600 mb-2 ml-1">Full Name</label>
<input className="w-full px-5 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-moss-100 focus:border-moss-300 text-sm transition-all" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold text-stone-600 mb-2 ml-1">Contact Number</label>
<input className="w-full px-5 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-moss-100 focus:border-moss-300 text-sm transition-all" placeholder="+880..." required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold text-stone-600 mb-2 ml-1">I'm interested in</label>
<div className="relative">
<select className="w-full px-5 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-moss-100 focus:border-moss-300 text-sm appearance-none cursor-pointer transition-all">
<option>Joining Morning Yoga</option>
<option>Freehand Exercise Info</option>
<option>Meditation Classes</option>
<option>General Inquiry</option>
</select>
<i className="absolute right-4 top-3.5 w-4 h-4 text-stone-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div>
<label className="block text-xs font-semibold text-stone-600 mb-2 ml-1">Message</label>
<textarea className="w-full px-5 py-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-moss-100 focus:border-moss-300 text-sm transition-all" placeholder="How can we help you?" rows="3"></textarea>
</div>
<button className="w-full py-3.5 bg-moss-800 text-white rounded-xl font-medium text-sm hover:bg-moss-900 transition-all shadow-lg shadow-moss-800/20" type="submit">Send Message</button>
</form>
</div>
</div>

<div className="mt-16 rounded-[2rem] overflow-hidden border border-stone-200 h-80 bg-stone-100 relative grayscale hover:grayscale-0 transition-all duration-700">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.123456!2d90.423!3d23.812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c62fb95f16c1%3A0xb33324832740e634!2sBashundhara%20Residential%20Area%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1600000000000!5m2!1sen!2sbd" style={{border: '0'}} title="YFB Location Map" width="100%">
</iframe>
</div>
</div>
</section>
</main>

<footer className="bg-stone-100 border-t border-stone-200 py-16">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-10">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-7 h-7 bg-moss-800 rounded-lg text-white flex items-center justify-center">
<span className="font-bold text-[10px]">YFB</span>
</div>
<span className="font-semibold text-stone-900 tracking-tight text-lg">Yoga Foundation</span>
</div>
<p className="text-sm text-stone-500 font-light leading-relaxed mb-6">
                        Promoting holistic health and wellness in Bashundhara, Dhaka through accessible yoga, exercise, and meditation.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-moss-800 hover:border-moss-200 transition-all" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-600 hover:text-moss-800 hover:border-moss-200 transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-12">
<div>
<h4 className="font-semibold text-stone-900 text-sm mb-4">Navigation</h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li><a className="hover:text-moss-800 transition-colors" href="#about" onclick="route(event, 'about')">About Us</a></li>
<li><a className="hover:text-moss-800 transition-colors" href="#programs" onclick="route(event, 'programs')">Programs</a></li>
<li><a className="hover:text-moss-800 transition-colors" href="#gallery" onclick="route(event, 'gallery')">Gallery</a></li>
<li><a className="hover:text-moss-800 transition-colors" href="#contact" onclick="route(event, 'contact')">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-stone-900 text-sm mb-4">Visit Us</h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li>21 Afroza Begum Road</li>
<li>Block-I, Bashundhara R/A</li>
<li>Dhaka, Bangladesh</li>
<li className="pt-2"><a className="text-moss-800 font-medium hover:underline" href="tel:+8801716850590">+880 1716-850590</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-light">
<p>© 2023 YFB Yoga Foundation Bashundhara.</p>
<p>Designed with mindfulness.</p>
</div>
</div>
</footer>



    </>
  );
}
