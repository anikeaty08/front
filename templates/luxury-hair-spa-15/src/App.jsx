import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
zeva: {
light: '#7BC258',
DEFAULT: '#65A344', // Approximate main green
dark: '#4A7A32',
bg: '#F9FAF7'
}
},
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
}
}
}
}



        lucide.createIcons();

        // Navbar scroll effect
        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.remove('py-4');
                navbar.classList.add('bg-zeva', 'shadow-md', 'py-2');
            } else {
                navbar.classList.add('py-4');
                navbar.classList.remove('bg-zeva', 'shadow-md', 'py-2');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-12 text-white" id="navbar">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<div className="hidden md:flex items-center space-x-6 text-sm tracking-wide font-medium opacity-90">
<a className="hover:text-zeva-light transition" href="#">BLOG</a>
<a className="hover:text-zeva-light transition" href="#">ENG / 繁</a>
</div>

<div className="absolute left-1/2 transform -translate-x-1/2 text-center">
<h1 className="font-serif text-3xl tracking-tight text-white leading-none">Zeva</h1>
<p className="text-[10px] tracking-[0.3em] uppercase opacity-80">Hair Spa</p>
</div>

<div className="flex items-center space-x-8">
<div className="hidden lg:flex space-x-6 text-sm font-medium tracking-wide">
<a className="hover:text-zeva-light transition" href="#">Hair Spa Services</a>
<a className="hover:text-zeva-light transition" href="#">Hair Tips</a>
<a className="hover:text-zeva-light transition" href="#">About</a>
<a className="hover:text-zeva-light transition" href="#">Exclusive Offers</a>
<a className="hover:text-zeva-light transition" href="#">Find Us</a>
</div>
<div className="flex items-center space-x-4">
<button className="hover:text-zeva-light transition"><svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></button>
<button className="hover:text-zeva-light transition"><svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg></button>
<a className="hidden md:inline-block bg-zeva hover:bg-zeva-dark text-white text-xs font-medium px-5 py-3 tracking-widest uppercase transition duration-300" href="#">Book an Appointment</a>
</div>
</div>
</div>
</nav>

<header className="overflow-hidden w-full h-screen relative">

<div className="absolute top-0 right-0 bottom-0 left-0">
<img alt="Hair Spa Treatment" className="object-top w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51ec72d6-6f9f-4605-a61d-d3582a0f3e48_3840w.png"/>

<div className="bg-gradient-to-b from-black/30 via-transparent to-zeva/90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="md:px-12 md:pb-24 text-white w-full pr-6 pb-20 pl-6 absolute bottom-0 left-0">
<div className="md:ml-20 max-w-4xl mr-auto ml-auto">
<h2 className="md:text-5xl lg:text-6xl leading-tight text-4xl font-normal tracking-tight font-serif mb-8 drop-shadow-sm">
            Bespoke Luxury Hair And Scalp Treatments And Science-Backed Hair Care And Maintenance For Your Hair
        </h2>
<p className="text-lg md:text-xl font-light opacity-90 mb-10 max-w-2xl leading-relaxed drop-shadow-sm">
            Personalised hair care. Proven science. Wellness rituals.
        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="hover:bg-gray-50 uppercase transition duration-300 text-xs font-medium text-gray-900 tracking-widest text-center bg-white pt-4 pr-8 pb-4 pl-8" href="#">
                Book an Appointment
            </a>
<a className="border border-white hover:bg-white/10 text-white text-xs font-medium px-8 py-4 tracking-widest uppercase transition duration-300 text-center" href="#">
                Explore Our Hair Treatments
            </a>
</div>
</div>
</div>

<div className="absolute bottom-20 right-10 md:right-32 w-48 h-48 md:w-80 md:h-80 opacity-40 mix-blend-screen pointer-events-none hidden md:block">
<svg className="text-white w-full h-full animate-pulse-slow" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 200 200">
<path d="M100,100 C100,50 150,50 150,100 C150,150 100,150 100,100 Z M100,100 C50,100 50,50 100,50 M100,100 C100,150 50,150 50,100 M100,100 C120,80 140,20 100,20 M100,100 C80,120 20,140 20,100"></path>
<path d="M110,110 C160,120 180,160 140,180"></path>
</svg>
</div>
</header>

<div className="flex overflow-hidden bg-white pt-12 pb-12 relative items-center justify-center">
<div className="absolute left-10 md:left-32 top-1/2 -translate-y-1/2 text-zeva opacity-80">
<svg className="animate-spin-slow" fill="none" height="60" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24" width="60">
<path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
</svg>
</div>
<p className="text-center font-serif text-xl md:text-2xl font-medium tracking-tight text-gray-900 max-w-2xl px-6 leading-relaxed">
            Indulge yourself in Zeva's urban wellness sanctuary and pamper yourself and your hair with a spa day
         </p>
</div>

<section className="bg-white pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto text-center">
<p className="text-xs font-semibold tracking-[0.2em] text-zeva uppercase mb-6">Hong Kong's Premier Hair Spa</p>
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-16 leading-tight">
                Our Mission Is To Revolutionize Hair And Scalp Health By Providing An Unparalleled Blend Of Luxury And Science
            </h2>
<div className="relative inline-block mb-16">

<svg className="absolute -top-12 -left-20 w-48 h-64 text-zeva opacity-60 z-0" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 100 200">
<path d="M10,10 Q50,50 10,90 T10,170 M30,10 Q70,50 30,90 T30,170 M50,10 Q90,50 50,90 T50,170"></path>
</svg>
<svg className="absolute -bottom-12 -right-20 w-48 h-64 text-zeva opacity-60 z-0 transform rotate-180" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 100 200">
<path d="M10,10 Q50,50 10,90 T10,170 M30,10 Q70,50 30,90 T30,170 M50,10 Q90,50 50,90 T50,170"></path>
</svg>
<img alt="Spa Interior" className="w-full h-[400px] max-w-lg object-cover z-10 rounded-sm relative shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc1f8c47-fa64-4e6a-ad94-851af8e6efad_1600w.png"/>
</div>
<div className="max-w-xl mx-auto text-center space-y-6">
<p className="text-xs font-bold tracking-[0.3em] uppercase text-gray-400">E S T . 2 0 1 7</p>
<p className="leading-relaxed text-lg font-light text-gray-600">
                    Long before scalp wellness became a global trend, Zeva pioneered the Hair Spa concept in Hong Kong in 2017 - seamlessly <strong className="font-semibold text-gray-900">blending the science of trichology with the indulgence of luxury spa care</strong>. As Hong Kong's premier destination for hair health, we take a truly holistic approach, uniting scientific trichological solutions with the sensory delights of a spa experience.
                </p>
</div>
</div>
</section>

<section className="bg-[#5FA93D] py-24 px-6 md:px-12 relative overflow-hidden">

<div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply wavy-pattern bg-repeat"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 text-white border-b border-white/20 pb-8">
<div>
<p className="text-xs font-semibold tracking-widest uppercase opacity-80 mb-2">Our Services</p>
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight">Let's Design Your CustomHair Care Journey</h2>
</div>
<div className="max-w-md mt-6 md:mt-0 text-right md:text-left">
<p className="text-lg font-light leading-relaxed">
                        We've supported  through our signature 6-step Zeva Hair Wellness Journey.
                    </p>
</div>
</div>

<p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-6">Most Popular Services</p>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-sm aspect-square mb-3">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white text-[10px] font-bold tracking-widest uppercase text-center">Hair Regeneration</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-sm aspect-square mb-3">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white text-[10px] font-bold tracking-widest uppercase text-center">Hair Spa</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-sm aspect-square mb-3">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white text-[10px] font-bold tracking-widest uppercase text-center">Head &amp; Body Spa</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-sm aspect-square mb-3">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white text-[10px] font-bold tracking-widest uppercase text-center">Traditional Chinese</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-sm aspect-square mb-3">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<p className="text-white text-[10px] font-bold tracking-widest uppercase text-center">Microneedling</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-sm aspect-square mb-3">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white text-[10px] font-bold tracking-widest uppercase text-center">Microneedling</p>
</div>
</div>
<div className="flex justify-center mb-16">
<button className="bg-white text-zeva font-bold text-[10px] tracking-widest uppercase px-10 py-3 hover:bg-gray-100 transition shadow-lg">View All</button>
</div>

<p className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-6 border-t border-white/20 pt-8">Most Common Concerns</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-full aspect-square w-32 h-32 mx-auto mb-3 border-2 border-white/30">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white text-[10px] font-bold tracking-widest uppercase text-center leading-tight">Female PatternHair Loss</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-full aspect-square w-32 h-32 mx-auto mb-3 border-2 border-white/30">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white text-[10px] font-bold tracking-widest uppercase text-center leading-tight">Male PatternHair Loss</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-full aspect-square w-32 h-32 mx-auto mb-3 border-2 border-white/30">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<p className="text-white text-[10px] font-bold tracking-widest uppercase text-center leading-tight">Alopecia Areata</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-full aspect-square w-32 h-32 mx-auto mb-3 border-2 border-white/30">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<p className="text-white text-[10px] font-bold tracking-widest uppercase text-center leading-tight">Greasy Scalp</p>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-full aspect-square w-32 h-32 mx-auto mb-3 border-2 border-white/30">
<img className="w-full h-full object-cover transition duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<p className="text-white text-[10px] font-bold tracking-widest uppercase text-center leading-tight">Itchy &amp; SensitiveScalp</p>
</div>
</div>
<div className="flex justify-center">
<button className="bg-white text-zeva font-bold text-[10px] tracking-widest uppercase px-10 py-3 hover:bg-gray-100 transition shadow-lg">View All</button>
</div>
</div>
</section>

<section className="py-16 px-6 bg-white border-b border-gray-100">
<div className="max-w-4xl mx-auto text-center mb-10">
<p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Featured By</p>
</div>
<div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale">
<img className="h-6 md:h-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<img className="h-6 md:h-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<span className="font-serif text-3xl font-bold italic">PRESTIGE</span>
<span className="font-serif text-3xl font-bold lowercase">marie claire</span>
<span className="font-sans text-2xl font-bold text-green-700">#legend</span>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative min-h-[600px] flex items-center justify-center">

<svg className="absolute top-0 left-0 w-full h-full text-zeva opacity-20 pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="scale-150" d="M0,0 Q50,20 100,0 V100 Q50,80 0,100 Z" fill="none" stroke="currentColor" stroke-dasharray="2,2" strokeWidth="0.5"></path>
<path className="text-zeva" d="M-20,20 Q50,50 120,20" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="text-zeva" d="M-20,40 Q50,70 120,40" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="text-zeva" d="M-20,60 Q50,90 120,60" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path className="text-zeva" d="M-20,80 Q50,110 120,80" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
<div className="relative z-10 w-64 h-80 bg-gray-200 border-[12px] border-white shadow-xl -rotate-6 transform translate-y-[-20%] translate-x-[-20%]">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute z-20 w-72 h-96 bg-gray-200 border-[12px] border-white shadow-2xl transform translate-x-[10%]">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute z-30 w-56 h-64 bg-gray-200 border-[12px] border-white shadow-xl rotate-6 bottom-0 left-0 transform translate-y-[-10%] translate-x-[10%]">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>

<div className="bg-zeva text-white p-12 md:p-16 relative shadow-2xl">
<p className="text-xs font-semibold tracking-widest uppercase mb-4 opacity-80">Our Approach</p>
<h3 className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-8">Hair To Toe Care</h3>
<div className="space-y-6 text-lg font-light leading-relaxed">
<p>
                        At Zeva Hair Spa, personalization is at the heart of everything we do. Every hair and scalp problem is unique, and our expert team is dedicated to crafting solutions that are as individual as you are.
                    </p>
<p>
                        Experience the difference of a truly tailored scalp wellness journey, .
                    </p>
</div>
<div className="mt-12 text-center text-gray-900">
<p className="mb-4 font-medium">Discover your personalised hair &amp; scalp treatment plan designed just for you.</p>
<button className="bg-zeva-dark hover:bg-green-900 text-white text-[10px] font-bold tracking-widest uppercase px-8 py-3 transition">Book an Appointment</button>
</div>
</div>
</div>
</section>

<section className="relative h-[600px] bg-fixed bg-center bg-cover flex items-center justify-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp'}}>
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative z-10 max-w-3xl mx-auto text-center px-6 text-white">
<div className="text-6xl font-serif text-zeva opacity-50 mb-6">“</div>
<p className="text-xl md:text-2xl font-light leading-relaxed italic mb-8">
                Thank you Zeva Hair Spa! Alice and your team, was very impressed with the in-depth service provided. Individually tailored to each person. The time spent with the assessment and treatment provided, will definitely be back when returning to Hong Kong.
            </p>
<p className="text-sm font-bold tracking-widest uppercase mb-8">Melnii D</p>
<div className="flex justify-center space-x-2 mb-8">
<span className="w-2 h-2 rounded-full bg-white"></span>
<span className="w-2 h-2 rounded-full bg-white/30"></span>
<span className="w-2 h-2 rounded-full bg-white/30"></span>
<span className="w-2 h-2 rounded-full bg-white/30"></span>
<span className="w-2 h-2 rounded-full bg-white/30"></span>
</div>
<button className="bg-zeva hover:bg-zeva-light text-white text-[10px] font-bold tracking-widest uppercase px-8 py-3 transition">Read More</button>
</div>
</section>

<section className="bg-[#5FA93D] py-24 px-6 md:px-12 text-white relative">

<svg className="absolute bottom-0 right-0 w-96 h-96 text-white opacity-20 pointer-events-none transform translate-y-1/4 translate-x-1/4" fill="none" stroke="currentColor" viewbox="0 0 200 200">

<path d="M100,100 Q150,50 180,100 T100,180 T20,100 T100,20" strokeWidth="1"></path>
<path d="M100,100 Q140,60 160,100 T100,160 T40,100 T100,40" strokeWidth="1"></path>
</svg>
<div className="max-w-7xl mx-auto">
<h2 className="font-serif text-3xl font-medium tracking-tight mb-12">Visit Our Convenient Locations</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-6">
<div className="bg-gray-200 aspect-square w-full relative group overflow-hidden">

<div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
<svg className="lucide lucide-map-pin w-12 h-12 text-gray-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<iframe allowfullscreen="" className="w-full h-full opacity-0 group-hover:opacity-100 transition duration-500" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.0163353702513!2d114.18491871533504!3d22.27734184936359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005137555555%3A0x123456789!2sCauseway+Bay!5e0!3m2!1sen!2shk!4v1500000000000" style={{border: '0'}}></iframe>
</div>
<div>
<h3 className="font-serif text-xl mb-2">Flagship</h3>
<p className="text-sm font-light opacity-90 leading-relaxed">
                            703, Lee Garden 2, 28 Yun Ping Rd,Causeway Bay
                        </p>
<p className="text-[10px] mt-4 opacity-70">Hours: Sun to Sat, 10AM to 7PM</p>
<a className="inline-block mt-2 text-[10px] font-bold underline decoration-1 underline-offset-4 uppercase" href="#">Get Directions</a>
</div>
</div>

<div className="space-y-6">
<div className="bg-gray-200 aspect-square w-full relative group overflow-hidden">

<div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
<svg className="lucide lucide-map-pin w-12 h-12 text-gray-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
<div>
<h3 className="font-serif text-xl mb-2">Yun Wellness at Shangri-La</h3>
<p className="text-sm font-light opacity-90 leading-relaxed">
                            Level 8, Island Shangri-La, Hong Kong Pacific Place,Supreme Ct Rd, Admiralty
                        </p>
<p className="text-[10px] mt-4 opacity-70">Hours: Sun to Sat, 10AM to 7PM</p>
<a className="inline-block mt-2 text-[10px] font-bold underline decoration-1 underline-offset-4 uppercase" href="#">Get Directions</a>
</div>
</div>

<div className="flex flex-col space-y-4 justify-start pt-0 md:pt-0">
<button className="bg-white hover:bg-gray-50 text-zeva w-full p-6 text-left flex justify-between items-center group transition">
<div>
<span className="block text-xl font-serif text-gray-900 group-hover:text-zeva transition">Whatsapp</span>
<span className="text-xs font-bold tracking-widest text-gray-500 group-hover:text-zeva transition">+ 852 9441 8733</span>
</div>
<svg className="lucide lucide-message-circle opacity-0 group-hover:opacity-100 transition transform translate-x-[-10px]" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</button>
<button className="border border-white hover:bg-white hover:text-zeva w-full p-6 text-left flex justify-between items-center group transition">
<div>
<span className="block text-xl font-serif">Call</span>
<span className="text-xs font-bold tracking-widest">+852 2146 3118</span>
<span className="block text-[10px] opacity-60 mt-1">Available Sun to Sat, 10AM to 7PM</span>
</div>
</button>
<button className="border border-white hover:bg-white hover:text-zeva w-full p-6 text-left flex justify-between items-center group transition">
<div>
<span className="block text-xl font-serif">Email</span>
<span className="text-xs font-bold tracking-widest">info@zevahair.com</span>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="bg-[#C8D9B6] relative overflow-hidden h-[500px]">
<div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 gap-0 opacity-80">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-full w-full object-cover hidden md:block" src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="h-full w-full object-cover hidden md:block" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-zeva/60 flex flex-col items-center justify-center p-6 text-center">
<h2 className="font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter uppercase outline-text mb-8 drop-shadow-lg leading-none" style={{WebkitTextStroke: '1px rgba(255,255,255,0.5)', color: 'transparent', backgroundClip: 'text'}}>
                Book An Appointment With Us
            </h2>
<h2 className="absolute font-sans font-bold text-4xl md:text-6xl lg:text-7xl text-white tracking-tighter uppercase mb-8 leading-none mix-blend-overlay">
                Book An Appointment With Us
            </h2>
<button className="bg-zeva hover:bg-white hover:text-zeva text-white text-xs font-bold tracking-widest uppercase px-10 py-4 transition border border-transparent hover:border-zeva">
                Explore Our Signature Services
            </button>
</div>
</section>

<footer className="bg-gray-50 pt-20 pb-10 px-6 border-t border-gray-200">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<a className="block text-sm text-gray-600 hover:text-zeva transition" href="#">Hair &amp; Scalp Treatments</a>
<a className="block text-sm text-gray-600 hover:text-zeva transition" href="#">Our Team</a>
<a className="block text-sm text-gray-600 hover:text-zeva transition" href="#">Offers and Promotions</a>
<a className="block text-sm text-gray-600 hover:text-zeva transition" href="#">Hair Tips</a>
<a className="block text-sm text-gray-600 hover:text-zeva transition" href="#">Testimonials</a>
</div>

<div className="md:col-span-2 text-center flex flex-col items-center">
<div className="mb-8">
<h1 className="font-serif text-4xl tracking-tight text-gray-900 leading-none">Zeva</h1>
<p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Hair Spa</p>
</div>
<div className="space-y-6 text-sm text-gray-500 font-light">
<div>
<strong className="block text-gray-900 font-medium mb-1">Flagship:</strong>
<p>703, Lee Garden 2, 28 Yun Ping Rd,<br/>Causeway Bay</p>
</div>
<div>
<strong className="block text-gray-900 font-medium mb-1">Shangri-La</strong>
<p>Level 8, Island Shangri-La, Hong Kong Pacific Place,<br/>Supreme Ct Rd, Admiralty</p>
</div>
</div>
</div>

<div className="space-y-2">
<div className="bg-zeva text-white p-4">
<p className="font-serif text-lg">Whatsapp</p>
<p className="text-[10px] tracking-widest font-bold">+ 852 9441 8733</p>
</div>
<div className="bg-zeva text-white p-4">
<p className="font-serif text-lg">Call</p>
<p className="text-[10px] tracking-widest font-bold">+852 2146 3118</p>
<p className="text-[9px] opacity-70">Available Sun to Sat, 10AM to 7PM</p>
</div>
<div className="bg-zeva text-white p-4">
<p className="font-serif text-lg">Email</p>
<p className="text-[10px] tracking-widest font-bold">info@zevahair.com</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 uppercase tracking-widest">
<p>© 2024 Zeva Hair Spa. All Rights Reserved.</p>
<div className="space-x-6 mt-4 md:mt-0 flex items-center">
<a className="hover:text-zeva transition" href="#">Privacy Policy</a>
<a className="hover:text-zeva transition" href="#">Terms of Service</a>
<a className="hover:text-zeva transition" href="#">FAQ</a>
<div className="flex space-x-4 ml-4 text-gray-600">
<svg className="lucide lucide-facebook w-4 h-4 hover:text-zeva cursor-pointer transition" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<svg className="lucide lucide-instagram w-4 h-4 hover:text-zeva cursor-pointer transition" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
