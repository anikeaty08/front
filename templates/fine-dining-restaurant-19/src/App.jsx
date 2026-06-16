import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
cream: '#FDFCF8',
savor: '#F3EFE0',
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
950: '#0c0a09',
}
},
borderRadius: {
'4xl': '2rem',
}
}
}
}



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // observer.unobserve(entry.target); // Keep observing for re-entry if desired, or unobserve
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
            
            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('py-0', 'shadow-sm', 'bg-white/95');
                } else {
                    navbar.classList.remove('py-0', 'shadow-sm', 'bg-white/95');
                }
            });
        });
    


    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    
                    // Update the sidebar navigation colors
                    const id = entry.target.getAttribute('id');
                    document.querySelectorAll('.nav-link').forEach(link => {
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.replace('text-stone-300', 'text-stone-900');
                        } else {
                            link.classList.replace('text-stone-900', 'text-stone-300');
                        }
                    });
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-item').forEach(item => {
            observer.observe(item);
        });
    });



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
            
            // Navbar scroll effect
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('py-0', 'shadow-sm', 'bg-white/95');
                } else {
                    navbar.classList.remove('py-0', 'shadow-sm', 'bg-white/95');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component w-full absolute top-0 hue-rotate-15 saturate-150 brightness-125 h-[700px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full" style={{}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="opxjeAzlg0dkUUVGEZri"></div>

</div></div></div>

<nav className="fixed transition-all duration-500 bg-white/80 w-full z-50 border-stone-100 border-b top-0 backdrop-blur-xl" id="navbar" style={{}}>
<div className="flex h-20 max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-6 text-stone-900" style={{}}>
<button className="hover:opacity-60 transition-opacity p-2 rounded-full hover:bg-stone-100" style={{}}>
</button>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
<a className="flex items-center gap-2 group" href="#">
<span className="serif text-3xl font-semibold text-stone-900 tracking-tighter cursor-pointer" onclick="window.location.href='/home'" role="button" style={{}}>Burj</span>
</a>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-6 text-sm font-medium text-stone-600" style={{}}>
<a className="transition-colors hover:text-stone-900" href="#why-madge" style={{}}>About Us</a>
<a className="transition-colors hover:text-stone-900" href="#reservations" style={{}}>Reservations</a>
</div>
<button className="px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform text-white bg-stone-900" style={{}}>
                    Order Now
                </button>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center rounded-b-[3rem] shadow-sm z-10">
<div className="absolute inset-0 z-0">
<img alt="Exquisite Plating" className="w-full h-full object-cover object-center scale-105 animate-[pulse_15s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c9460fbc-492e-4035-b88d-4795f56ac672_3840w.jpg" style={{}}/>
<div className="bg-stone-950/20 absolute top-0 right-0 bottom-0 left-0" style={{}}></div>
<div className="bg-gradient-to-t to-transparent from-stone-900/60 w-full h-1/2 absolute bottom-0"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center mt-20 text-white" style={{}}>
<h1 className="animate-fade-in-up animation-delay-100 leading-[0.85] md:text-9xl text-sm font-normal tracking-tighter mb-8">Experience the <br className=""/> <span className="serif font-light italic text-stone-100">Middle East</span><span className="serif font-light italic text-stone-100"> in Christchurch</span></h1>
<div className="animate-fade-in-up animation-delay-200 flex flex-col md:flex-row items-center gap-4 mt-8">
<a className="px-8 py-4 rounded-full font-medium text-base transition-colors min-w-[180px] bg-white text-stone-900 hover:bg-stone-100" href="#menu" style={{}}>View Menu</a>
<a className="group relative overflow-hidden transition-colors min-w-[180px] text-base font-medium border rounded-full pt-4 pr-8 pb-4 pl-8 backdrop-blur-sm hover:bg-white/20 text-white bg-white/10 border-white/20" href="#reservations" style={{}}>
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out -skew-x-12 via-white/40"></div>
<span className="relative z-10">Book a Table</span>
</a>
</div>
</div>
</header>


<section className="text-[#2d1b14] bg-[#000c33] z-10 pt-32 pr-6 pb-32 pl-6 relative" id="why-madge">
<div className="flex flex-col lg:flex-row max-w-screen-xl mr-auto ml-auto gap-x-20 gap-y-20">
<div className="lg:w-2/5 lg:sticky lg:top-32 self-start lg:mb-0 h-fit mb-20">
<span className="text-xs font-bold uppercase tracking-[0.3em] mb-6 block text-stone-400" style={{}}>The Experience</span>
<h2 className="md:text-8xl leading-[0.85] text-6xl text-[#666670] tracking-tighter font-serif mb-8">
                Why eat <br/>at <span className="italic text-[#b8932e]">Burj</span>.
            </h2>
<p className="leading-relaxed text-lg text-zinc-50 max-w-sm mb-10">
                A culinary journey isn't just about the plate; it's about the heritage, the heat, and the heart behind every bite.
            </p>
<div className="hidden lg:flex flex-col gap-4 border-l ml-1 border-stone-200" style={{}}>
<a className="nav-link uppercase transition-colors text-sm font-bold text-gray-50 tracking-widest pl-4" href="#source">01. The Source</a>
<a className="nav-link uppercase transition-colors text-sm font-bold text-gray-50 tracking-widest pl-4" href="#craft">02. The Craft</a>
<a className="nav-link uppercase transition-colors text-sm font-bold text-gray-50 tracking-widest pl-4" href="#vibe">03. The Vibe</a>
</div>
</div>
<div className="lg:w-3/5 flex flex-col gap-48 gap-x-48 gap-y-48">
<div className="reveal-item transition-all duration-1000" id="source">
<div className="relative w-full aspect-[4/5] mb-8 overflow-hidden rounded-sm shadow-2xl">
<img alt="Fresh organic produce" className="grayscale-[20%] hover:grayscale-0 transition-all duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/860d2b09-da9f-473d-bf13-6215296a7f61_1600w.jpg"/>
</div>
<div className="max-w-md">
<h3 className="text-3xl text-[#b8932e] font-serif mb-4">Real ingredients, real flavor.</h3>
<p className="leading-relaxed text-lg italic text-gray-50 font-serif">"We source from artisans who believe in the old ways."</p>
<p className="text-neutral-50 mt-4">No shortcuts, just the pure essence of the land brought to your table. Every tomato, every herb, every drop of oil has a name and a story behind it.</p>
</div>
</div>
<div className="reveal-item transition-all duration-1000" id="craft">
<div className="flex gap-4 mb-8">
<div className="w-1/2 aspect-square rounded-sm overflow-hidden translate-y-16 shadow-lg">
<img alt="Handmade details" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80dc5654-f93d-45c9-b3a5-c5b722468c6b_800w.jpg"/>
</div>
<div className="w-1/2 aspect-[3/4] rounded-sm overflow-hidden shadow-xl">
<img alt="Chef plating" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/601c4088-569e-4736-ac9f-fabe926acedd_800w.jpg"/>
</div>
</div>
<div className="max-w-md mt-24">
<h3 className="text-3xl text-[#b8932e] font-serif mb-4">The Art of the Slow.</h3>
<p className="leading-relaxed text-neutral-50">
                        Our kitchen operates on the rhythm of the seasons. From 48-hour fermentations to hand-rolled pastas, we honor the time it takes to create perfection.
                    </p>
</div>
</div>
<div className="reveal-item transition-all duration-1000 pb-32" id="vibe">
<div className="relative w-full aspect-video mb-8 overflow-hidden rounded-sm shadow-2xl">
<img alt="Moody restaurant atmosphere" className="w-full h-full object-cover rotate-x-15" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6dff9612-c366-45d4-88de-02d485950548_1600w.jpg"/>
</div>
<div className="max-w-md">
<h3 className="text-3xl text-[#b8932e] font-serif mb-4">A Table for Memories.</h3>
<p className="leading-relaxed text-stone-50">
                        Madge is designed to be an extension of your home. Dim lights, soft linens, and the hum of shared stories—this is where the journey finds its home.
                    </p>
</div>
</div>
</div>
</div>
</section><div className="fixed top-0 w-full h-screen -z-10 bg-stone-50"></div><nav className="fixed transition-all duration-500 bg-white/90 w-full z-50 border-stone-100 border-b top-0 backdrop-blur-xl" id="navbar">
<div className="flex h-20 max-w-screen-2xl mx-auto px-6 items-center justify-between">
<div className="flex items-center gap-6">

</div>
<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
<a className="flex items-center gap-2" href="#">
<span className="serif text-3xl font-semibold text-stone-900 tracking-tighter">Burj</span>
</a>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-6 text-sm font-medium text-stone-600">
<a className="transition-colors hover:text-stone-900" href="#why-madge">About Us</a>
<a className="transition-colors hover:text-stone-900" href="#menu">Menu</a>
<a className="transition-colors hover:text-stone-900" href="#reservations">Reservations</a>
</div>
<button className="px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform text-white bg-stone-900">
                    Order Now
                </button>
</div>
</div>
</nav><section className="z-20 -mt-20 overflow-hidden bg-stone-50 rounded-t-[3rem] pt-32 pb-32 relative" id="menu">
<div className="max-w-screen-xl mx-auto px-6 relative">

<div className="reveal text-center mb-24">
<span className="text-[#b8932e] text-xs font-semibold uppercase tracking-[0.3em] block mb-6">Seasonal Selection</span>
<h2 className="text-6xl md:text-7xl font-serif text-[#2d1b14] tracking-tighter mb-8">
                    The <span className="italic text-[#b8932e]">Chef's</span> Table
                </h2>
<div className="h-px w-24 bg-[#b8932e]/30 mx-auto"></div>
<p className="mt-8 text-stone-500 max-w-lg mx-auto font-light text-lg">
                    Dishes that define our journey, crafted with patience, fire, and the finest seasonal produce.
                </p>
</div>

<div className="flex flex-col border-t border-[#2d1b14]/10 reveal">

<div className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-[#2d1b14]/10 hover:bg-white transition-colors cursor-default px-6 rounded-2xl">
<div className="flex items-baseline gap-8 md:gap-16">
<span className="font-serif italic text-2xl text-[#b8932e] opacity-60 group-hover:opacity-100 transition-opacity">01</span>
<div className="">
<h3 className="text-3xl font-serif text-[#2d1b14] mb-2 group-hover:text-[#b8932e] transition-colors tracking-tight">Smoked Kingfish</h3>
<p className="text-stone-500 font-sans tracking-wide text-sm md:text-base">Preserved lemon, green chili oil, coriander seeds</p>
</div>
</div>
<span className="mt-4 md:mt-0 font-serif text-xl text-stone-400">$32</span>

<div className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[26rem] z-50 opacity-0 group-hover:opacity-100 transition-all duration-700 rotate-6 group-hover:rotate-3 scale-95 group-hover:scale-100 shadow-2xl rounded-sm overflow-hidden border-4 border-white">
<img alt="Smoked Kingfish" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
</div>

<div className="group flex flex-col md:flex-row md:items-center hover:bg-white transition-colors cursor-default border-[#2d1b14]/10 rounded-2xl border-b pt-12 pr-6 pb-12 pl-6 relative justify-between">
<div className="flex items-baseline gap-8 md:gap-16">
<span className="font-serif italic text-2xl text-[#b8932e] opacity-60 group-hover:opacity-100 transition-opacity">02</span>
<div className="">
<h3 className="text-3xl font-serif text-[#2d1b14] mb-2 group-hover:text-[#b8932e] transition-colors tracking-tight">Slow-Braised Lamb</h3>
<p className="text-stone-500 font-sans tracking-wide text-sm md:text-base">Pomegranate molasses, saffron risotto, charred onions</p>
</div>
</div>
<span className="mt-4 md:mt-0 font-serif text-xl text-stone-400">$48</span>
<div className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[26rem] z-50 opacity-0 group-hover:opacity-100 transition-all duration-700 -rotate-3 group-hover:-rotate-1 scale-95 group-hover:scale-100 shadow-2xl rounded-sm overflow-hidden border-4 border-white">
<img alt="Slow Braised Lamb" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-center justify-between py-12 border-b border-[#2d1b14]/10 hover:bg-white transition-colors cursor-default px-6 rounded-2xl">
<div className="flex items-baseline gap-8 md:gap-16">
<span className="font-serif italic text-2xl text-[#b8932e] opacity-60 group-hover:opacity-100 transition-opacity">03</span>
<div>
<h3 className="text-3xl font-serif text-[#2d1b14] mb-2 group-hover:text-[#b8932e] transition-colors tracking-tight">Cardamom Sponge</h3>
<p className="text-stone-500 font-sans tracking-wide text-sm md:text-base">Rose water cream, pistachio crumble, dark honey</p>
</div>
</div>
<span className="mt-4 md:mt-0 font-serif text-xl text-stone-400">$24</span>
<div className="pointer-events-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20rem] h-[26rem] z-50 opacity-0 group-hover:opacity-100 transition-all duration-700 rotate-2 group-hover:rotate-0 scale-95 group-hover:scale-100 shadow-2xl rounded-sm overflow-hidden border-4 border-white">
<img alt="Cardamom Sponge" className="w-full h-full object-cover grayscale-[20%]" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
</div>
</div>
<div className="reveal text-center mt-20">
<a className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#2d1b14] border-b border-[#b8932e] pb-1 hover:text-[#b8932e] transition-colors group" href="#">
                    View Full Menu
                    <svg className="lucide lucide-arrow-up-right group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</div>
</section><section className="text-center bg-stone-100 z-10 pt-32 pr-6 pb-32 pl-6 relative" id="reservations">
<div className="max-w-2xl mx-auto reveal">
<h2 className="text-4xl md:text-6xl tracking-tighter font-normal mb-6">Reserve Your Table</h2>
<p className="text-xl font-light mb-10 text-stone-500">
                Immerse yourself in an unforgettable dining experience. 
            </p>
<form className="grid grid-cols-1 md:grid-cols-3 gap-2 p-2 rounded-[2rem] shadow-sm border mb-8 bg-white border-stone-200">
<div className="relative flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-stone-100">
<svg className="mr-2 text-stone-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<select className="w-full bg-transparent outline-none font-medium cursor-pointer appearance-none text-stone-600">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>Large Party</option>
</select>
</div>
<div className="relative flex items-center px-4 py-3 border-b md:border-b-0 md:border-r border-stone-100">
<svg className="mr-2 text-stone-400" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<input className="w-full bg-transparent outline-none font-medium text-stone-600" onfocus="(this.type='date')" placeholder="Date" type="text"/>
</div>
<button className="px-6 py-4 rounded-3xl transition-colors font-semibold uppercase text-sm tracking-wide text-white bg-stone-900 hover:bg-stone-800" type="button">
                    Check
                </button>
</form>
</div>
</section><footer className="py-20 rounded-t-[3rem] -mt-10 relative z-30 bg-stone-950 text-stone-400">
<div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<span className="serif text-3xl font-medium text-white">Madge</span>
</a>
<p className="text-sm font-light leading-relaxed max-w-xs mb-6 text-stone-500">
                    A celebration of flavor, texture, and the joy of gathering.
                </p>
<div className="flex gap-4">
<a className="transition-colors hover:text-white" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="transition-colors hover:text-white" href="#"><svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div className="col-span-1">
<h4 className="font-semibold mb-6 uppercase tracking-widest text-xs text-white">Explore</h4>
<ul className="space-y-3 font-medium text-sm">
<li><a className="transition-colors hover:text-white" href="#">Our Story</a></li>
<li><a className="transition-colors hover:text-white" href="#">Menus</a></li>
<li><a className="transition-colors hover:text-white" href="#">Private Dining</a></li>
<li><a className="transition-colors hover:text-white" href="#">Gift Cards</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-semibold mb-6 uppercase tracking-widest text-xs text-white">Hours</h4>
<ul className="space-y-3 font-medium text-sm">
<li className="flex justify-between"><span>Mon - Thu</span> <span>5pm - 10pm</span></li>
<li className="flex justify-between text-white"><span>Fri - Sat</span> <span>5pm - 11pm</span></li>
<li className="flex justify-between"><span>Sunday</span> <span>4pm - 9pm</span></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-semibold mb-6 uppercase tracking-widest text-xs text-white">Find Us</h4>
<p className="text-sm font-medium leading-relaxed">
                     1024 Culinary Ave,
                     Metropolis, NY 10012
                 </p>
</div>
</div>
<div className="max-w-screen-2xl mx-auto px-6 mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs font-medium border-stone-900 text-stone-600">
<p className="">© 2025 Madge Restaurant.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</footer>








    </>
  );
}
