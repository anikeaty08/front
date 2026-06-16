import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    
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
                    navbar.classList.add('shadow-sm', 'bg-white/95');
                } else {
                    navbar.classList.remove('shadow-sm', 'bg-white/95');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10 bg-stone-50"></div>

<nav className="fixed z-50 transition-all duration-500 bg-white/90 w-full border-stone-200 border-b top-0 backdrop-blur-md" id="navbar">
<div className="flex h-16 max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-6 text-stone-900">
<button className="hover:opacity-60 transition-opacity p-1.5 rounded-md hover:bg-stone-100">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</button>
</div>
<div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
<a className="flex items-center gap-2 group" href="#">
<span className="serif text-xl font-semibold text-stone-900 tracking-tight">Madge</span>
</a>
</div>
<div className="flex items-center gap-6">
<div className="hidden md:flex gap-6 text-xs font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#why-madge">About Us</a>
<a className="hover:text-stone-900 transition-colors" href="#reservations">Reservations</a>
</div>
<button className="bg-stone-900 text-white px-4 py-1.5 rounded-md text-xs font-medium hover:bg-stone-800 transition-colors shadow-sm">
                    Order Now
                </button>
</div>
</div>
</nav>

<header className="relative w-full h-[80vh] overflow-hidden flex items-center justify-start rounded-b-2xl shadow-sm z-10 border-b border-stone-100">
<div className="absolute inset-0 z-0">

<img alt="Exquisite Plating" className="w-full h-full object-cover object-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a12ed43-f324-4d1f-aee1-6b1900a8ccca_3840w.jpg"/>
<div className="absolute inset-0 bg-stone-950/20"></div>
<div className="bg-gradient-to-r from-stone-900/90 via-stone-900/40 to-transparent absolute inset-0 w-3/4"></div>
</div>
<div className="relative z-10 text-left text-white px-6 md:px-24 max-w-3xl flex flex-col items-start mt-0 md:mt-8">
<h1 className="animate-fade-in-up animation-delay-100 text-5xl md:text-7xl leading-[0.9] font-normal tracking-tight mb-6">
                Feel the <br/>
<span className="serif font-light italic text-stone-200">Good Taste <br/> from Scratch</span>
</h1>
<div className="animate-fade-in-up animation-delay-200 flex flex-col md:flex-row items-center md:items-start gap-3 mt-2 w-full md:w-auto">
<a className="bg-white text-stone-900 px-6 py-2.5 rounded-md font-medium text-xs hover:bg-stone-100 transition-colors min-w-[140px] text-center md:text-left flex justify-center border border-transparent" href="#menu">View Menu</a>
<a className="group relative overflow-hidden hover:bg-white/10 transition-colors min-w-[140px] text-xs font-medium text-white bg-white/5 border-white/20 border rounded-md px-6 py-2.5 backdrop-blur-sm text-center flex justify-center" href="#reservations">
<span className="relative z-10">Book a Table</span>
</a>
</div>
</div>
</header>

<section className="-mt-8 overflow-hidden text-white bg-stone-900 pt-24 pb-20 relative">
<div className="absolute inset-0 z-0">
<img alt="Dark Sauce Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-stone-900 via-stone-900/90 to-stone-900 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-end">
<div className="reveal">
<h2 className="text-5xl md:text-6xl font-playfair text-stone-100 leading-[0.9] tracking-tight">
                        Curated <br/>
<span className="italic font-light opacity-80">Hits</span>
</h2>
</div>
<div className="flex flex-col items-start md:items-end gap-6 pb-1 reveal delay-100">
<p className="text-base md:text-lg text-stone-400 font-light max-w-sm md:text-right leading-relaxed">
                        Pure, versatile ingredients crafted into unforgettable moments.
                    </p>
<button className="bg-stone-100 text-stone-900 px-4 py-2 rounded-md hover:bg-white transition-colors text-xs font-medium tracking-wide flex items-center gap-2">
                        Menu <span className="w-4 h-px bg-stone-400"></span> Full List
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-5">

<div className="reveal delay-100 group relative glass-card rounded-xl p-2 transition-all duration-300 hover:-translate-y-1">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg relative bg-stone-800">
<img alt="Truffle Risotto" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 border border-white/10">
<span className="w-1 h-1 rounded-full bg-green-500"></span>
<span className="text-[10px] font-bold uppercase tracking-wider text-white">Veg</span>
</div>
<div className="absolute bottom-3 right-3 bg-white text-stone-900 px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                            $28
                        </div>
</div>
<div className="p-3 pt-4">
<h3 className="text-xl font-serif font-medium text-stone-100 leading-none mb-2">Truffle Risotto</h3>
<p className="text-stone-400 text-xs font-normal leading-relaxed mb-4 line-clamp-2">
                            Arborio rice slowly cooked with aged parmesan reggiano and fresh black truffle shavings.
                        </p>
<button className="w-full py-2.5 rounded-md bg-stone-800/50 border border-stone-700 text-stone-300 font-medium text-xs uppercase tracking-wide hover:bg-stone-100 hover:text-stone-900 hover:border-white transition-all duration-200 flex items-center justify-center gap-2 group/btn">
                            Add
                            <svg className="group-hover/btn:rotate-90 transition-transform duration-200" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
</div>

<div className="reveal delay-200 group relative glass-card rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 md:translate-y-6">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg relative bg-stone-800">
<img alt="Wagyu A5" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1663610561489-3fbc54a0e606?w=1600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md flex items-center gap-1 shadow-sm">
<span className="text-[10px] font-bold uppercase tracking-wider text-stone-900">Sign.</span>
</div>
<div className="absolute bottom-3 right-3 bg-white text-stone-900 px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                            $95
                        </div>
</div>
<div className="p-3 pt-4">
<h3 className="text-xl font-serif font-medium text-stone-100 leading-none mb-2">Wagyu A5 Pizza</h3>
<p className="text-stone-400 text-xs font-normal leading-relaxed mb-4 line-clamp-2">
                            Artisan stone-baked pizza topped with premium A5 Japanese Wagyu beef and slow-roasted tomatoes.
                        </p>
<button className="w-full py-2.5 rounded-md bg-white text-stone-900 font-semibold text-xs uppercase tracking-wide hover:bg-stone-200 transition-all duration-200 flex items-center justify-center gap-2">
                            Add
                            <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
</div>

<div className="reveal delay-300 group relative glass-card rounded-xl p-2 transition-all duration-300 hover:-translate-y-1">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg relative bg-stone-800">
<img alt="Lobster Ravioli" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1672636402078-4b957a572e4e?w=1600&amp;q=80"/>
<div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1 border border-white/10">
<span className="w-1 h-1 rounded-full bg-orange-400"></span>
<span className="text-[10px] font-bold uppercase tracking-wider text-white">Sea</span>
</div>
<div className="absolute bottom-3 right-3 bg-white text-stone-900 px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                            $45
                        </div>
</div>
<div className="p-3 pt-4">
<h3 className="text-xl font-serif font-medium text-stone-100 leading-none mb-2">Lobster Ravioli</h3>
<p className="text-stone-400 text-xs font-normal leading-relaxed mb-4 line-clamp-2">
                            Handcrafted ravioli filled with fresh lobster meat in a delicate saffron cream sauce.
                        </p>
<button className="w-full py-2.5 rounded-md bg-stone-800/50 border border-stone-700 text-stone-300 font-medium text-xs uppercase tracking-wide hover:bg-stone-100 hover:text-stone-900 hover:border-white transition-all duration-200 flex items-center justify-center gap-2 group/btn">
                            Add
                            <svg className="group-hover/btn:rotate-90 transition-transform duration-200" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f9f5eb] text-[#2d1b14] px-6 relative z-10 border-t border-stone-200" id="why-madge">
<div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-16">
<div className="lg:w-2/5 lg:sticky lg:top-24 self-start h-fit mb-12 lg:mb-0">
<span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] mb-4 block">The Experience</span>
<h2 className="text-4xl md:text-5xl tracking-tight leading-[0.9] mb-6 font-serif">
                Why eat <br/>at <span className="italic text-stone-400">Madge</span>.
            </h2>
<p className="text-sm text-stone-600 max-w-sm leading-relaxed mb-8">
                A culinary journey isn't just about the plate; it's about the heritage, the heat, and the heart behind every bite.
            </p>
<div className="hidden lg:flex flex-col gap-3 border-l border-stone-200 ml-1">
<a className="nav-link pl-4 text-xs font-bold uppercase tracking-wider text-stone-900 transition-colors" href="#source">01. The Source</a>
<a className="nav-link pl-4 text-xs font-bold uppercase tracking-wider text-stone-300 transition-colors" href="#craft">02. The Craft</a>
<a className="nav-link pl-4 text-xs font-bold uppercase tracking-wider text-stone-300 transition-colors" href="#vibe">03. The Vibe</a>
</div>
</div>
<div className="lg:w-3/5 flex flex-col gap-32">
<div className="reveal-item opacity-0 translate-y-8 transition-all duration-700" id="source">
<div className="relative w-full aspect-[16/10] mb-6 overflow-hidden rounded-md shadow-lg border border-stone-200/50">
<img alt="Fresh organic produce" className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="max-w-md">
<h3 className="text-2xl font-serif mb-3">Real ingredients, real flavor.</h3>
<p className="text-stone-500 leading-relaxed italic font-serif text-sm">"We source from artisans who believe in the old ways."</p>
<p className="text-stone-500 mt-2 text-sm">No shortcuts, just the pure essence of the land brought to your table. Every tomato, every herb, every drop of oil has a name and a story behind it.</p>
</div>
</div>
<div className="reveal-item opacity-0 translate-y-8 transition-all duration-700" id="craft">
<div className="flex gap-4 mb-6">
<div className="w-1/2 aspect-square rounded-md overflow-hidden translate-y-8 shadow-md border border-stone-200/50">
<img alt="Handmade details" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-1/2 aspect-[3/4] rounded-md overflow-hidden shadow-lg border border-stone-200/50">
<img alt="Chef plating" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="max-w-md mt-16">
<h3 className="text-2xl font-serif mb-3">The Art of the Slow.</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Our kitchen operates on the rhythm of the seasons. From 48-hour fermentations to hand-rolled pastas, we honor the time it takes to create perfection.
                    </p>
</div>
</div>
<div className="reveal-item opacity-0 translate-y-8 transition-all duration-700 pb-12" id="vibe">
<div className="relative w-full aspect-video mb-6 overflow-hidden rounded-md shadow-lg border border-stone-200/50">
<img alt="Moody restaurant atmosphere" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="max-w-md">
<h3 className="text-2xl font-serif mb-3">A Table for Memories.</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Madge is designed to be an extension of your home. Dim lights, soft linens, and the hum of shared stories—this is where the journey finds its home.
                    </p>
</div>
</div>
</div>
</div>
</section>


<section className="relative py-24 w-full block overflow-hidden z-30 min-h-[400px] flex items-center" id="press-elegant">
<div className="absolute inset-0 z-0">
<img alt="Culinary Craft" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-950/90 mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-screen-2xl mx-auto px-6 w-full">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-playfair italic tracking-tight text-stone-200">
                In the press
            </h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 items-center justify-items-center opacity-80">
<div className="w-full max-w-[140px] md:max-w-[160px] flex justify-center reveal delay-100">
<img alt="Fast Company" className="w-full h-10 md:h-12 object-contain brightness-0 invert hover:opacity-100 transition-all duration-300" src="https://www.vectorlogo.zone/logos/fastcompany/fastcompany-ar21.svg"/>
</div>
<div className="w-full max-w-[100px] md:max-w-[120px] flex justify-center reveal delay-200">
<img alt="Axios" className="w-full h-8 md:h-10 object-contain brightness-0 invert hover:opacity-100 transition-all duration-300" src="https://www.vectorlogo.zone/logos/axios/axios-ar21.svg"/>
</div>
<div className="w-full max-w-[140px] md:max-w-[180px] flex justify-center reveal delay-300">
<img alt="Bloomberg" className="w-full h-8 md:h-10 object-contain brightness-0 invert hover:opacity-100 transition-all duration-300" src="https://www.vectorlogo.zone/logos/bloomberg/bloomberg-ar21.svg"/>
</div>
<div className="w-full max-w-[160px] md:max-w-[200px] flex justify-center reveal delay-400">
<img alt="The Guardian" className="w-full h-10 md:h-12 object-contain brightness-0 invert hover:opacity-100 transition-all duration-300" src="https://www.vectorlogo.zone/logos/theguardian/theguardian-ar21.svg"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white overflow-hidden rounded-t-2xl -mt-6 relative z-20 shadow-[0_-5px_30px_rgba(0,0,0,0.02)]" id="chef">
<div className="max-w-screen-xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-12">

<div className="lg:w-1/2 relative reveal">
<div className="aspect-[3/4] rounded-lg overflow-hidden bg-stone-200 relative z-10">
<img alt="Chef Adrian" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-md shadow-sm border border-stone-100">
<div className="flex items-center justify-between text-stone-900">
<div>
<h5 className="font-serif text-base leading-none mb-1">Adrian Moretti</h5>
<span className="text-[10px] text-stone-500 uppercase tracking-wider">Executive Chef</span>
</div>
<svg className="text-stone-900" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
</div>
</div>
</div>
</div>

<div className="lg:w-1/2 reveal delay-200">
<div className="flex items-center gap-2 mb-3">
<span className="h-px w-6 bg-stone-300"></span>
<span className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">The Visionary</span>
</div>
<h2 className="text-4xl md:text-5xl tracking-tight font-normal mb-6">Meet Adrian <span className="italic text-stone-400 serif">Moretti</span></h2>
<p className="text-stone-500 text-sm md:text-base font-light leading-relaxed mb-6">
                        Chef Adrian Moretti, the culinary mastermind behind Madge, brings over two decades of experience from the world's most prestigious kitchens. 
                    </p>
<div className="mt-8">
<a className="inline-flex items-center justify-center px-6 py-2.5 bg-stone-900 text-white rounded-md text-xs font-bold uppercase tracking-wide hover:bg-stone-800 transition-colors w-full md:w-auto shadow-sm" href="#">
                            Read Full Bio
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 px-6 text-center" id="reservations">
<div className="max-w-xl mx-auto reveal">
<h2 className="text-3xl md:text-4xl tracking-tight font-normal mb-4">Reserve Your Table</h2>
<p className="text-stone-500 text-sm font-light mb-8">
                Immerse yourself in an unforgettable dining experience. 
            </p>
<form className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white p-1 rounded-lg shadow-sm border border-stone-200 mb-6">
<div className="relative flex items-center px-3 py-2 border-b md:border-b-0 md:border-r border-stone-100">
<svg className="text-stone-400 mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<select className="w-full bg-transparent outline-none text-xs text-stone-600 font-medium cursor-pointer appearance-none">
<option>2 Guests</option>
<option>3 Guests</option>
<option>4 Guests</option>
<option>Large Party</option>
</select>
</div>
<div className="relative flex items-center px-3 py-2 border-b md:border-b-0 md:border-r border-stone-100">
<svg className="text-stone-400 mr-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
<input className="w-full bg-transparent outline-none text-xs text-stone-600 font-medium" onfocus="(this.type='date')" placeholder="Date" type="text"/>
</div>
<button className="bg-stone-900 text-white px-4 py-2 rounded-md hover:bg-stone-800 transition-colors font-bold uppercase text-xs tracking-wide" type="button">
                    Check
                </button>
</form>
</div>
</section>

<footer className="bg-stone-950 text-stone-400 py-16 rounded-t-2xl -mt-6 relative z-30">
<div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<span className="serif text-xl text-white font-medium">Madge</span>
</a>
<p className="text-xs font-light leading-relaxed max-w-xs mb-6 text-stone-500">
                    A celebration of flavor, texture, and the joy of gathering.
                </p>
<div className="flex gap-3">
<a className="hover:text-white transition-colors" href="#"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div className="col-span-1">
<h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Explore</h4>
<ul className="space-y-2 font-medium text-xs">
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">Menus</a></li>
<li><a className="hover:text-white transition-colors" href="#">Private Dining</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Hours</h4>
<ul className="space-y-2 font-medium text-xs">
<li className="flex justify-between"><span>Mon - Thu</span> <span>5pm - 10pm</span></li>
<li className="flex justify-between text-white"><span>Fri - Sat</span> <span>5pm - 11pm</span></li>
<li className="flex justify-between"><span>Sunday</span> <span>4pm - 9pm</span></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-white font-bold mb-4 uppercase tracking-widest text-[10px]">Find Us</h4>
<p className="text-xs font-medium leading-relaxed">
                     1024 Culinary Ave,
                     Metropolis, NY 10012
                 </p>
</div>
</div>
<div className="max-w-screen-2xl mx-auto px-6 mt-12 pt-6 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-medium text-stone-600">
<p>© 2025 Madge Restaurant.</p>
<div className="flex gap-4 mt-2 md:mt-0">
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
</div>
</footer>



    </>
  );
}
