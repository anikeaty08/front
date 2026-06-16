import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
orange: '#F5A623',
gold: '#FFD700',
beige: '#D2B48C',
green: '#228B22',
brown: '#8B4513',
darkBrown: '#3E2723',
light: '#FAF9F6'
}
},
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
heading: ['Oswald', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
backgroundImage: {
'plus-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B4513' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Age Gate Logic ---
        function checkAge() {
            const day = document.getElementById('day').value;
            const month = document.getElementById('month').value;
            const year = document.getElementById('year').value;
            const errorMsg = document.getElementById('age-error');
            const modal = document.getElementById('age-gate');

            if (!day || !month || !year) {
                document.getElementById('age-form').classList.add('animate-pulse');
                setTimeout(() => document.getElementById('age-form').classList.remove('animate-pulse'), 500);
                return;
            }

            const birthDate = new Date(year, month - 1, day);
            const today = new Date();
            let age = today.getFullYear() - birthDate.getFullYear();
            const m = today.getMonth() - birthDate.getMonth();
            
            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }

            if (age >= 18) {
                modal.classList.add('opacity-0', 'pointer-events-none');
                document.body.classList.remove('modal-open');
            } else {
                errorMsg.classList.remove('hidden');
            }
        }

        // Auto-focus next input field
        const inputs = document.querySelectorAll('#age-form input');
        inputs.forEach((input, index) => {
            input.addEventListener('input', () => {
                if(input.value.length === input.maxLength && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
        });

        // --- Scroll Animation (Intersection Observer) ---
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
        });

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed z-[3000] flex transition-opacity duration-700 top-0 right-0 bottom-0 left-0 backdrop-blur-md items-center justify-center" id="age-gate">

<div className="pattern-overlay pointer-events-none opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 text-center bg-white/10 w-full max-w-md border-white/20 border rounded-3xl mr-4 ml-4 pt-8 pr-8 pb-8 pl-8 relative shadow-2xl backdrop-blur-sm">
<div className="flex flex-col mb-6 items-center justify-center">
<div className="bg-center border-brand-orange bg-white w-24 h-24 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7839d19f-817e-4c55-be1b-ecdf7c670d4f_3840w.png)] bg-contain border-2 rounded-full mb-3 shadow-lg"></div>
<h1 className="uppercase text-3xl font-semibold text-white tracking-wide font-heading drop-shadow-md">BRA's Beer</h1>
<p className="text-brand-gold uppercase text-xs font-medium tracking-[0.2em] font-sans mt-2">Taste's Like Home</p>
</div>
<h2 className="text-2xl text-white font-heading mb-2">Confirm Your Age</h2>
<p className="text-sm text-white/80 mb-8 font-light leading-relaxed">You must be of legal drinking age (18+) to enter this site. Please enter your birthdate.</p>
<form className="space-y-6" id="age-form" onsubmit="return false;">
<div className="flex gap-3 justify-center">
<input className="focus:border-brand-gold text-brand-brown placeholder:text-brand-brown/30 transition-all text-xl font-bold text-center bg-white/90 w-16 h-14 border-transparent border-2 rounded-xl shadow-inner" id="day" inputmode="numeric" maxlength="2" placeholder="DD" required="" type="tel"/>
<input className="focus:border-brand-gold text-brand-brown placeholder:text-brand-brown/30 transition-all text-xl font-bold text-center bg-white/90 w-16 h-14 border-transparent border-2 rounded-xl shadow-inner" id="month" inputmode="numeric" maxlength="2" placeholder="MM" required="" type="tel"/>
<input className="focus:border-brand-gold text-brand-brown placeholder:text-brand-brown/30 transition-all text-xl font-bold text-center bg-white/90 w-24 h-14 border-transparent border-2 rounded-xl shadow-inner" id="year" inputmode="numeric" maxlength="4" placeholder="YYYY" required="" type="tel"/>
</div>
<div className="hidden text-sm font-semibold text-red-200 bg-red-900/50 border border-red-500/30 rounded-lg p-3 animate-pulse" id="age-error">
                    Access Denied. You must be 18 or older to enter.
                </div>
<button className="bg-brand-gold hover:bg-white text-brand-darkBrown uppercase hover:shadow-brand-orange/50 transform active:scale-95 transition-all duration-300 text-lg font-bold tracking-wider font-heading w-full rounded-xl pt-4 pb-4 shadow-lg" onclick="checkAge()">
                    Enter Site
                </button>
</form>
<div className="flex gap-6 text-[10px] uppercase text-white/40 tracking-widest mt-8 justify-center">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<span className="w-px h-3 bg-white/20"></span>
<a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>

<nav className="fixed z-[1000] transition-all duration-300 w-full border-b top-0 backdrop-blur-md" id="navbar">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative overflow-hidden">
<img alt="BRA's Official Logo" className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border border-brand-orange/20 shadow-sm bg-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7839d19f-817e-4c55-be1b-ecdf7c670d4f_3840w.png?w=800&amp;q=80"/>
</div>
<div className="flex flex-col">
<span className="font-heading font-semibold text-xl md:text-2xl text-brand-brown leading-none group-hover:text-brand-orange transition-colors">BRA's Premium Beer</span>
<span className="text-[10px] font-medium tracking-widest text-brand-brown/70 uppercase">Tastes Like Home</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="font-sans text-sm font-medium text-brand-brown hover:text-brand-orange transition-colors" href="#">Home</a>
<a className="font-sans text-sm font-medium text-brand-brown hover:text-brand-orange transition-colors" href="#our-brew">Our Brew</a>
<a className="font-sans text-sm font-medium text-brand-brown hover:text-brand-orange transition-colors" href="#identity">About Us</a>
<a className="font-sans text-sm font-medium text-brand-brown hover:text-brand-orange transition-colors" href="#contact">Contact</a>
<div className="h-6 w-px bg-brand-brown/20"></div>
<div className="flex gap-4">
<a className="text-brand-brown hover:text-brand-orange transition-colors" href="https://web.facebook.com/profile.php?id=61581944095983" rel="noopener noreferrer" target="_blank"><iconify-icon icon="mingcute:facebook-line" width="20"></iconify-icon></a>
<a className="text-brand-brown hover:text-brand-orange transition-colors" href="https://www.tiktok.com/@bras.beer" rel="noopener noreferrer" target="_blank"><iconify-icon icon="mingcute:tiktok-line" width="20"></iconify-icon></a>
</div>
</div>

<button className="md:hidden text-brand-brown pt-2 pr-2 pb-2 pl-2" onclick="toggleMobileMenu()">
<iconify-icon className="" icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden border-brand-brown/10 flex-col gap-4 w-full border-b pt-6 pr-6 pb-6 pl-6 absolute top-20 left-0 shadow-xl bg-white" id="mobile-menu">
<a className="text-brand-brown text-lg font-medium font-heading" href="#" onclick="toggleMobileMenu()">Home</a>
<a className="text-brand-brown text-lg font-medium font-heading" href="#our-brew" onclick="toggleMobileMenu()">Our Brew</a>
<a className="text-brand-brown text-lg font-medium font-heading" href="#identity" onclick="toggleMobileMenu()">About Us</a>
<a className="text-brand-brown text-lg font-medium font-heading" href="#contact" onclick="toggleMobileMenu()">Contact</a>
</div>
</nav>

<header className="min-h-screen flex overflow-hidden z-[2000] bg-black relative items-center justify-center">

<div className="z-0 select-none absolute top-0 right-0 bottom-0 left-0">
<img alt="Hero Background" className="opacity-90 w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e651cfa8-daca-4b75-98ea-3f6d4a15cb8c_3840w.jpg?w=800&amp;q=80"/>

<div className="bg-gradient-to-t from-black via-brand-brown/30 to-black/40 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pt-20 pr-6 pl-6 relative">

<h1 className="md:text-8xl leading-none reveal active text-6xl font-semibold text-white tracking-tight font-heading mb-6 drop-shadow-2xl">
                BRA'S Premium Beer  <br/>
<span className="text-brand-gold drop-shadow-lg">Taste's Like Home </span>
</h1>

<p className="md:text-xl leading-relaxed reveal active text-lg font-medium text-white/90 font-sans max-w-xl mr-auto mb-12 ml-auto drop-shadow-md">
                Authentic African flavours, brewed with heritage. A taste of home in every carton.
            </p>

<div className="flex flex-col sm:flex-row gap-5 reveal active cursor-pointer items-center justify-center" onclick="window.location.href='https://myurbanafrica.co.za'" role="button">
<a className="min-w-[200px] hover:bg-white text-brand-darkBrown uppercase transition-all duration-300 transform hover:-translate-y-1 font-semibold tracking-widest font-heading rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_30px_rgba(245,166,35,0.4)]" href="#our-brew">
                    Taste the Heritage
                </a>
<a className="group flex items-center gap-3 hover:bg-white/10 transition-colors hover:border-white/20 text-white border-transparent border rounded-full pt-3 pr-6 pb-3 pl-6" href="https://myurbanafrica.co.za" target="_blank">
<div className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-brand-gold group-hover:scale-110 transition-all">
<iconify-icon className="ml-1 text-lg" icon="solar:play-linear"></iconify-icon>
</div>
<span className="font-medium tracking-wide group-hover:text-brand-gold transition-colors">Watch Our Story</span>
</a>
</div>
</div>
</header>

<section className="overflow-hidden bg-neutral-50 pt-24 pb-24 relative" id="identity">

<div className="opacity-40 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="bg-gradient-to-r from-brand-light via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 reveal">
<div>
<span className="text-brand-brown/80 font-heading font-medium uppercase tracking-[0.2em] text-xs mb-4 block">Premium Taste &amp; Quality</span>
<h2 className="text-4xl md:text-6xl text-brand-darkBrown font-heading font-semibold leading-[1.1]">
                            Connecting Tradition <br/>
<span className="font-serif italic font-normal text-brand-brown">with Modern Urban Life</span>
</h2>
</div>
<div className="space-y-6 text-brand-brown/80 text-lg font-light leading-relaxed">
<p>
                            Experience the rhythm of heritage. A sorghum beer crafted with passion, celebrating the vibrant spirit of South African
                            culture.
                        </p>
<p>
                            Sorghum is the heart of African brewing. It is resilient, nutritious, and deeply cultural. At My Urban Africa, we treat
                            this ingredient with the reverence it deserves, creating BRA's Premium Traditional Beer that offer authentic
                            taste with modern consistency
                        </p>
</div>
<div className="w-full h-px bg-brand-brown/20 my-8"></div>
<div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
<div>
<h4 className="text-3xl font-heading font-bold text-brand-darkBrown mb-1">100%</h4>
<p className="text-xs uppercase tracking-widest text-brand-brown/60">Locally Sourced</p>
</div>
<div>
<h4 className="text-3xl font-heading font-bold text-brand-darkBrown mb-1">100%</h4>
<p className="text-xs uppercase tracking-widest text-brand-brown/60">Truly African Beer</p>
</div>
</div>
</div>

<div className="relative reveal delay-200">
<div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
<img alt="African Giraffe at Sunset" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/720efe9e-5cb8-4b26-a789-9ceaa2f37aa0_3840w.jpg?w=800&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

<div className="absolute bottom-8 left-8 right-8">
<p className="font-serif italic text-2xl text-white/90">"Innovating for the people."</p>
</div>
</div>

<div className="absolute -z-10 -top-6 -right-6 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl"></div>
<div className="absolute -z-10 -bottom-6 -left-6 w-40 h-40 bg-brand-gold/20 rounded-full blur-2xl"></div>
</div>
</div>
</div>
</section><section className="border-brand-brown/5 bg-white border-t pt-20 pb-20 relative" id="responsibility">
<div className="pattern-overlay absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 mb-6 bg-brand-green/10 px-4 py-2 rounded-full">
<iconify-icon className="text-brand-green" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs font-semibold tracking-widest text-brand-green uppercase">Enjoy Responsibly</span>
</div>
<h2 className="font-heading font-semibold text-3xl md:text-5xl text-brand-green mb-12">CELEBRATE SAFELY</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 reveal">
<div className="w-16 h-16 mx-auto bg-brand-green/10 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
<iconify-icon className="text-3xl text-brand-green" icon="solar:wheel-angle-linear"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-lg text-brand-brown">Don't Drink &amp; Drive</h3>
</div>
<div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 reveal">
<div className="w-16 h-16 mx-auto bg-brand-green/10 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
<iconify-icon className="text-3xl text-brand-green" icon="solar:user-block-linear"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-lg text-brand-brown">Not for Under 18</h3>
</div>
<div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 reveal">
<div className="w-16 h-16 mx-auto bg-brand-green/10 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
<iconify-icon className="text-3xl text-brand-green" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-lg text-brand-brown">Health First</h3>
</div>
<div className="group p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 reveal">
<div className="w-16 h-16 mx-auto bg-brand-green/10 rounded-full flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform">
<iconify-icon className="text-3xl text-brand-green" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-lg text-brand-brown">Respect Others</h3>
</div>
</div>
</div>
</section><section className="overflow-hidden bg-gradient-to-b from-brand-light to-white pt-24 pb-24 relative" id="our-brew">
<div className="pattern-overlay pointer-events-none opacity-30 w-full h-full absolute top-0 left-0"></div>
<div className="z-10 max-w-7xl mx-auto px-6 relative">
<div className="text-center mb-16 reveal">
<h2 className="font-heading font-semibold text-4xl md:text-5xl text-brand-brown mb-4">OUR BREW</h2>
<div className="w-20 h-1 bg-brand-orange mx-auto rounded-full mb-4"></div>
<p className="text-brand-brown/70 max-w-xl mx-auto font-light">Rich, creamy, and packed with natural energy. A delicious blend of traditional flavour and wholesome nutrition in every sip.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

<div className="md:col-span-4 space-y-12 order-2 md:order-1">
<div className="reveal">
<div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-brand-orange" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-brand-brown mb-2">Purely Traditional</h3>
<p className="text-sm text-brand-brown/70 leading-relaxed">Our beer is rooted in goodness, drawing its strength from the grain—honoring our rich heritage and celebrating the spirit of African culture.</p>
</div>
<div className="reveal">
<div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center mb-4">
<iconify-icon className="text-2xl text-brand-orange" icon="solar:cup-star-linear"></iconify-icon>
</div>
<h3 className="font-heading font-semibold text-xl text-brand-brown mb-2">Unbeatable Taste</h3>
<p className="text-sm text-brand-brown/70 leading-relaxed">Smooth, full-bodied, and deeply satisfying—crafted with care and grounded in goodness, carrying a tradition you can taste and a quality you can trust.</p>
</div>
</div>

<div className="md:col-span-4 flex justify-center order-1 md:order-2 relative group reveal">
<div className="absolute inset-0 bg-brand-gold/20 blur-3xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-700"></div>
<img alt="BRA's Beer 1L Carton" className="relative w-64 h-[400px] object-cover rounded-lg shadow-[0_20px_50px_rgba(139,69,19,0.15)] transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 animate-float z-20" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/160ea10d-bedb-4e90-944d-08cbb018ca03_3840w.png?w=800&amp;q=80"/>
</div>

<div className="md:col-span-4 space-y-6 order-3 md:order-3">
<div className="relative h-64 rounded-2xl overflow-hidden shadow-lg group reveal">
<div className="absolute inset-0 bg-brand-brown/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="People enjoying responsibly" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc360f91-12ca-4219-b14b-24fefe3428ef_3840w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-white font-heading text-lg drop-shadow-md">Festive Moments</span>
</div>
</div>
<div className="relative h-48 rounded-2xl overflow-hidden shadow-lg group reveal">
<div className="absolute inset-0 bg-brand-brown/20 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Traditional brewing" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1b84c21-ddc8-403f-ba79-ffab0033bfbf_800w.jpg"/>
<div className="absolute bottom-4 left-4 z-20">
<span className="text-white font-heading text-lg drop-shadow-md">Natural Ingredients</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="reveal bg-white pt-24 pb-24 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 justify-between">
<div className="">
<h2 className="md:text-5xl text-brand-brown text-4xl font-semibold font-serif mb-2">Latest Updates</h2>
<p className="text-brand-brown/60 text-lg font-light">Stories from My Urban Africa</p>
</div>
<a className="group flex items-center gap-2 text-brand-brown hover:text-brand-orange transition-colors text-lg font-medium font-heading" href="#">
                    View Archive 
                    <svg className="group-hover:translate-x-1 transition-transform" data-icon-set="solar" data-solar="arrow-right-linear" height="18" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer" onclick="window.location.href='https://myurbanafrica.co.za'" role="button">
<div className="overflow-hidden rounded-2xl mb-6 shadow-sm">
<img alt="Distribution warehouse" className="w-full aspect-[16/10] object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2949a7b3-b3be-487f-b718-39b2f2bb5a8e_3840w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-2 text-xs font-bold tracking-widest mb-3">
<span className="text-brand-orange uppercase">Corporate</span>
<span className="text-brand-brown/30">•</span>
<span className="text-brand-brown/40 uppercase">Feb 1, 2026</span>
</div>
<h3 className="font-serif text-2xl text-brand-darkBrown font-semibold mb-3 leading-tight group-hover:text-brand-orange transition-colors">Expanding Our Footprint in Gauteng</h3>
<p className="text-brand-brown/70 leading-relaxed text-sm">New distribution centers open to better serve our urban customers across the province.</p>
</article>

<article className="group cursor-pointer" onclick="window.location.href='https://myurbanafrica.co.za'" role="button">
<div className="overflow-hidden rounded-2xl mb-6 shadow-sm">
<img alt="Sorghum fields" className="w-full aspect-[16/10] object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e274d140-556e-4b50-a564-85a6c9848746_3840w.jpg?w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-2 text-xs font-bold tracking-widest mb-3">
<span className="text-brand-green uppercase">Events</span>
<span className="text-brand-brown/30">•</span>
<span className="text-brand-brown/40 uppercase">Feb 13, 2026</span>
</div>
<h3 className="font-serif text-2xl text-brand-darkBrown font-semibold mb-3 leading-tight group-hover:text-brand-orange transition-colors">BRA's Moment's</h3>
<p className="text-brand-brown/70 leading-relaxed text-sm">A gallery of memories and moments with BRA's Premium Beer  </p>
</article>

<article className="group cursor-pointer" onclick="window.location.href='https://myurbanafrica.co.za'" role="button">
<div className="overflow-hidden rounded-2xl mb-6 shadow-sm">
<img alt="Lab technology" className="w-full aspect-[16/10] object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0723dec7-0f32-45ce-bd6f-794f69e7b610_3840w.png?w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-2 text-xs font-bold tracking-widest mb-3">
<span className="text-brand-gold uppercase">Innovation</span>
<span className="text-brand-brown/30">•</span>
<span className="text-brand-brown/40 uppercase">Sep 15, 2025</span>
</div>
<h3 className="font-serif text-2xl text-brand-darkBrown font-semibold mb-3 leading-tight group-hover:text-brand-orange transition-colors">Eco Friendly Carton</h3>
<p className="text-brand-brown/70 leading-relaxed text-sm">Our eco-friendly cartons are fully recycable and can also be repurposed as a safe, high-heat fuel source of cooking. Made from natural wood fibres, they burn hotter and cleaner than regular wood, offering practical solution that supports a greener environment. MUA is a member of Fibre circle. Please visit their website at www.fibrecircle.co.za to find out more..</p>
</article>
</div>
</div>
</section>

<section className="overflow-hidden bg-slate-50 pt-24 pb-24 relative" id="contact">

<div className="-right-20 pointer-events-none w-80 h-80 rounded-full absolute top-20 blur-3xl"></div>
<div className="-left-20 pointer-events-none w-80 h-80 rounded-full absolute bottom-20 blur-3xl"></div>
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row reveal">

<div className="w-full md:w-5/12 bg-brand-darkBrown p-10 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dfc7f8ea-374b-4749-b05f-0e74d5c5d728_3840w.png?w=800&amp;q=80)]"></div>
<div className="relative z-10">
<h2 className="font-heading font-semibold text-3xl mb-2 text-brand-orange">Connect With Us</h2>
<p className="text-brand-beige/80 mb-10 text-sm">Have questions about distribution or our product? Reach out.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-brand-orange mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<h4 className="font-semibold text-sm uppercase tracking-wide text-brand-gold mb-1">Address</h4>
<p className="text-sm font-light leading-relaxed opacity-90">130 Paterson Rd, North End, Gqeberha (Port Elizabeth), 6001</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-brand-orange mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<h4 className="font-semibold text-sm uppercase tracking-wide text-brand-gold mb-1">Office Tel</h4>
<p className="text-sm font-light leading-relaxed opacity-90">041 484 4644</p>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-2xl text-brand-orange mt-1" icon="solar:letter-linear"></iconify-icon>
<div>
<h4 className="font-semibold text-sm uppercase tracking-wide text-brand-gold mb-1">Email</h4>
<a className="text-sm font-light leading-relaxed opacity-90 hover:text-brand-orange transition-colors" href="mailto:sales@myurbanafrica.co.za">sales@myurbanafrica.co.za</a>
</div>
</div>
</div>
</div>
<div className="mt-12 relative z-10">
<h4 className="text-xs uppercase tracking-widest text-brand-beige/60 mb-4">Follow Us</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-brand-brown transition-all" href="https://web.facebook.com/profile.php?id=61581944095983" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="mingcute:facebook-fill"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-brand-brown transition-all" href="https://www.tiktok.com/@bras.beer" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="mingcute:tiktok-fill"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-brand-orange hover:border-brand-orange hover:text-brand-brown transition-all" href="https://www.instagram.com/bras_beer/" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="mingcute:instagram-fill"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="w-full md:w-7/12 p-10 md:p-12 bg-white relative">
<form action="mailto:sales@myurbanafrica.co.za" className="space-y-6" enctype="text/plain" id="contact-form" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-brand-brown uppercase tracking-wider">Name</label>
<input className="w-full border-b border-brand-brown/20 py-3 text-brand-brown placeholder:text-brand-brown/30 focus:border-brand-orange transition-colors bg-transparent" name="Name" placeholder="Thabo Sehume" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-brand-brown uppercase tracking-wider">Email</label>
<input className="w-full border-b border-brand-brown/20 py-3 text-brand-brown placeholder:text-brand-brown/30 focus:border-brand-orange transition-colors bg-transparent" name="Email" placeholder="Thabo@example.com" required="" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-brand-brown uppercase tracking-wider">Subject</label>
<select className="w-full border-b border-brand-brown/20 py-3 text-brand-brown bg-transparent focus:border-brand-orange outline-none" name="Subject">
<option>General Inquiry</option>
<option>Sales &amp; Distribution</option>
<option>Feedback</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-brand-brown uppercase tracking-wider">Message</label>
<textarea className="w-full border-b border-brand-brown/20 py-3 text-brand-brown placeholder:text-brand-brown/30 focus:border-brand-orange transition-colors bg-transparent resize-none" name="Message" placeholder="How can we help you?" required="" rows="3"></textarea>
</div>
<div className="pt-4 flex items-center justify-between">
<p className="text-[10px] text-brand-brown/50">Protected by reCAPTCHA</p>
<button className="bg-brand-brown text-white px-8 py-3 rounded-full font-heading font-medium tracking-wide hover:bg-brand-orange hover:text-brand-brown transition-all shadow-lg flex items-center gap-2" type="submit">
<span>Send Message</span>
<iconify-icon className="text-lg" icon="solar:plain-2-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="text-brand-beige/60 border-brand-orange bg-yellow-800 border-t-4 pt-16 pb-12">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row gap-8 items-center justify-between">

<div className="md:text-left flex flex-col md:flex-row gap-4 text-center items-center">
<img alt="BRA's Official Logo" className="border-brand-orange/20 bg-white w-16 h-16 object-cover border-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b0b86e6-53ba-4dde-823f-4f7272465fcf_3840w.jpg"/>
<div className="">
<h2 className="leading-none text-2xl font-semibold text-white font-heading">BRA's Premium Traditional Beer </h2>
<p className="text-xs tracking-widest uppercase mt-1 text-brand-gold">Taste's Like Home</p>
</div>
</div>
<div className="flex gap-8 text-xs font-medium uppercase tracking-wider">
<a className="hover:text-brand-orange transition-colors" href="#">Privacy</a>
<a className="hover:text-brand-orange transition-colors" href="#">Terms</a>
<a className="hover:text-brand-orange transition-colors" href="#">Cookies</a>
<a className="hover:text-brand-orange transition-colors" href="#">PAIA</a>
</div>
<div className="text-xs text-center md:text-right">
<p>© 2026 My Urban Africa. All Rights Reserved.</p>
<p className="mt-1 text-brand-orange">Not for sale to persons under the age of 18.</p>
</div>
</div>
</div>
</footer>



    </>
  );
}
