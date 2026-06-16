import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Word-by-word animation logic
        document.addEventListener('DOMContentLoaded', () => {
            const elements = document.querySelectorAll('.animate-words');
            
            // Intersection Observer to trigger animations when scrolled into view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const el = entry.target;
                        // Avoid double processing
                        if(el.dataset.animated) return;
                        el.dataset.animated = true;

                        const text = el.innerText;
                        // Split by words, keeping spaces
                        const words = text.split(/(\s+)/);
                        el.innerHTML = '';
                        
                        let wordCount = 0;
                        words.forEach((word) => {
                            if (word.trim() === '') {
                                el.appendChild(document.createTextNode(word));
                            } else {
                                const span = document.createElement('span');
                                span.className = 'word';
                                span.innerText = word;
                                // Stagger delay based on word position
                                span.style.animationDelay = `${0.1 + (wordCount * 0.05)}s`;
                                el.appendChild(span);
                                wordCount++;
                            }
                        });
                        
                        observer.unobserve(el);
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: "0px 0px -10% 0px"
            });

            elements.forEach(el => {
                // Ensure inline/inline-block elements handle text correctly
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 p-6 md:p-12 flex justify-between items-start mix-blend-difference text-stone-100 pointer-events-none">
<div className="pointer-events-auto">
<span className="text-xl tracking-tighter uppercase font-medium animate-words">Estavia</span>
</div>
<div className="hidden md:flex gap-16 pointer-events-auto">
<a className="text-sm tracking-tight hover:text-amber-500 transition-colors animate-words" href="#">About</a>
<a className="text-sm tracking-tight hover:text-amber-500 transition-colors animate-words" href="#">Benefits</a>
<a className="text-sm tracking-tight hover:text-amber-500 transition-colors animate-words" href="#">Contact Us</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center pt-32 pb-20 px-6 md:px-12">

<div className="absolute top-0 right-0 w-full md:w-2/3 h-[75vh] md:h-[90vh] overflow-hidden mask-diagonal z-0">
<img alt="Mountain Architecture" className="w-full h-full object-cover grayscale-[20%] sepia-[10%] scale-105 hover:scale-100 transition-transform duration-[3s] ease-out" src="https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&amp;w=2865&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-stone-900/20"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full mt-24 md:mt-0">
<h1 className="text-6xl md:text-[11rem] leading-[0.85] tracking-tighter font-medium uppercase text-stone-100 mix-blend-difference animate-words">
                Redefining
            </h1>
<h1 className="text-6xl md:text-[11rem] leading-[0.85] tracking-tighter font-medium uppercase text-stone-100 mix-blend-difference ml-0 md:ml-48 animate-words">
                Timeless
            </h1>
<h1 className="text-6xl md:text-[11rem] leading-[0.85] tracking-tighter font-medium uppercase text-stone-100 mix-blend-difference md:-ml-12 animate-words">
                Design
            </h1>
<div className="mt-24 md:mt-32 md:ml-auto md:w-1/3 flex flex-col gap-8">
<p className="text-lg md:text-xl font-light text-stone-600 leading-relaxed animate-words">
                    A limited collection of 12 mountain residences. Where raw natural aesthetics meet uncompromising modern sanctuary.
                </p>
<button className="w-fit pb-2 border-b-2 border-amber-700 text-stone-900 text-sm uppercase tracking-widest hover:text-amber-700 transition-colors animate-words">
                    Explore Residences
                </button>
</div>
</div>
</header>

<section className="py-32 px-6 md:px-12 relative">
<div className="max-w-7xl mx-auto min-h-[50vh] relative">
<div className="md:absolute top-0 left-0 mb-16 md:mb-0 animate-words">
<span className="block text-7xl md:text-9xl tracking-tighter font-light text-stone-900">177</span>
<span className="block text-sm text-stone-500 uppercase tracking-widest mt-4">Square Meters</span>
</div>
<div className="md:absolute top-1/4 left-1/2 md:-translate-x-1/2 mb-16 md:mb-0 animate-words">
<span className="block text-7xl md:text-9xl tracking-tighter font-light text-stone-900">2</span>
<span className="block text-sm text-amber-700 uppercase tracking-widest mt-4">Bathrooms</span>
</div>
<div className="md:absolute bottom-0 right-1/3 mb-16 md:mb-0 animate-words">
<span className="block text-7xl md:text-9xl tracking-tighter font-light text-stone-900">3</span>
<span className="block text-sm text-stone-500 uppercase tracking-widest mt-4">Bedrooms</span>
</div>
<div className="md:absolute top-12 right-0 animate-words">
<span className="block text-7xl md:text-9xl tracking-tighter font-light text-stone-300">2026</span>
<span className="block text-sm text-stone-500 uppercase tracking-widest mt-4 text-right">Completion</span>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-stone-200/50">
<div className="max-w-7xl mx-auto relative">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-7 md:col-start-6 relative z-0 order-2 md:order-1">
<div className="aspect-[4/5] overflow-hidden mask-diagonal">
<img alt="Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="md:col-span-6 md:-ml-32 md:absolute top-1/4 left-0 z-10 order-1 md:order-2">
<h2 className="text-6xl md:text-8xl tracking-tighter font-medium leading-[0.85] text-stone-900 mb-8 mix-blend-multiply animate-words">
                        Your<br/>Private<br/>Sanctuary
                    </h2>
<div className="bg-stone-100 p-8 md:p-12 shadow-2xl shadow-stone-900/5 max-w-lg ml-auto md:ml-0">
<p className="text-lg font-light text-stone-600 leading-relaxed mb-8 animate-words">
                            Wake up to the absolute silence of the peaks and the stark silhouette of the mountains on the horizon. Located in the most prestigious enclave, it offers a pace of life dictated by nature.
                        </p>
<p className="text-lg font-light text-stone-600 leading-relaxed animate-words">
                            Here, the boundary between the indoors and the majestic outdoors dissolves, leaving you with nothing but light, space, and pure tranquility.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 md:px-12 relative overflow-hidden bg-emerald-950 text-stone-100">

<div className="absolute top-0 left-0 w-full overflow-hidden opacity-5 pointer-events-none flex justify-center">
<span className="text-[20rem] tracking-tighter font-medium whitespace-nowrap leading-none mt-20">AMENITIES</span>
</div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="mb-32 max-w-2xl">
<h2 className="text-5xl md:text-7xl tracking-tighter font-normal leading-[0.9] mb-8 animate-words">
                    Designed with<br/>you in mind
                </h2>
<p className="text-lg text-emerald-200/60 font-light animate-words">
                    Every element curated to enhance your connection with the alpine environment.
                </p>
</div>

<div className="relative min-h-[60vh] md:min-h-[40vh] w-full">

<div className="md:absolute top-0 left-0 flex flex-col items-start group mb-16 md:mb-0">
<div className="w-32 h-32 rounded-full border border-emerald-800 flex items-center justify-center mb-6 group-hover:bg-amber-700 group-hover:border-amber-700 transition-all duration-700 group-hover:scale-110">
<i className="w-10 h-10 text-emerald-400 group-hover:text-stone-100 transition-colors" data-lucide="car-front" strokeWidth="1.5"></i>
</div>
<span className="text-sm tracking-widest uppercase font-light">Private Garage</span>
</div>

<div className="md:absolute bottom-0 left-1/4 flex flex-col items-start group mb-16 md:mb-0 md:mt-32">
<div className="w-32 h-32 rounded-full border border-emerald-800 flex items-center justify-center mb-6 group-hover:bg-amber-700 group-hover:border-amber-700 transition-all duration-700 group-hover:scale-110">
<i className="w-10 h-10 text-emerald-400 group-hover:text-stone-100 transition-colors" data-lucide="waves" strokeWidth="1.5"></i>
</div>
<span className="text-sm tracking-widest uppercase font-light">Thermal Pool</span>
</div>

<div className="md:absolute top-12 right-1/4 flex flex-col items-start group mb-16 md:mb-0">
<div className="w-32 h-32 rounded-full border border-emerald-800 flex items-center justify-center mb-6 group-hover:bg-amber-700 group-hover:border-amber-700 transition-all duration-700 group-hover:scale-110">
<i className="w-10 h-10 text-emerald-400 group-hover:text-stone-100 transition-colors" data-lucide="mountain-snow" strokeWidth="1.5"></i>
</div>
<span className="text-sm tracking-widest uppercase font-light">Peak Views</span>
</div>

<div className="md:absolute bottom-12 right-0 flex flex-col items-start group">
<div className="w-32 h-32 rounded-full border border-emerald-800 flex items-center justify-center mb-6 group-hover:bg-amber-700 group-hover:border-amber-700 transition-all duration-700 group-hover:scale-110">
<i className="w-10 h-10 text-emerald-400 group-hover:text-stone-100 transition-colors" data-lucide="sun-dim" strokeWidth="1.5"></i>
</div>
<span className="text-sm tracking-widest uppercase font-light">Sun Terrace</span>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 md:px-12 bg-stone-100">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-16 md:gap-32">

<div className="w-full md:w-1/3 order-2 md:order-1">
<div className="aspect-[9/21] w-full overflow-hidden mask-narrow relative">
<img alt="Architecture Details" className="absolute inset-0 w-full h-full object-cover grayscale-[30%]" src="https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="w-full md:w-2/3 order-1 md:order-2 flex flex-col justify-end pb-0 md:pb-32 pt-20">
<h2 className="text-5xl md:text-[6rem] tracking-tighter font-medium leading-[0.8] mb-16 text-stone-900 animate-words">
                    The Art<br/>of Living,<br/><span className="text-amber-700 italic font-light">Redefined.</span>
</h2>
<div className="pl-8 md:pl-16 border-l border-stone-300 relative">

<div className="absolute top-0 left-[-1px] w-[2px] h-1/3 bg-amber-700"></div>
<h3 className="text-2xl md:text-3xl font-medium mb-6 tracking-tight text-stone-900 animate-words">Thoughtful Curation</h3>
<p className="text-lg text-stone-600 font-light max-w-xl leading-relaxed animate-words">
                        Every material selected echoes the raw beauty of the surrounding mountains. We blend brutalist structural elements with warm, organic textures to create spaces that feel both eternally grounded and breathtakingly light.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-stone-900 text-stone-100 text-center overflow-hidden relative">
<div className="absolute inset-0 opacity-20 pointer-events-none">
<img className="w-full h-full object-cover mix-blend-overlay blur-sm" src="https://images.unsplash.com/photo-1518733057094-95b53143d2a7?q=80&amp;w=2865&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
<h2 className="text-5xl md:text-8xl tracking-tighter font-medium mb-12 animate-words">Experience<br/><span className="font-light italic text-stone-400">Virtual Tour</span></h2>
<button className="group relative flex items-center justify-center w-32 h-32 rounded-full border border-stone-600 hover:border-amber-700 transition-colors duration-500 overflow-hidden">
<div className="absolute inset-0 bg-amber-700 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
<i className="w-10 h-10 relative z-10 text-stone-300 group-hover:text-stone-100 ml-2" data-lucide="play" strokeWidth="1"></i>
</button>
</div>
</section>

<section className="py-40 px-6 md:px-12 bg-stone-200">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
<div className="flex flex-col justify-between">
<div>
<h2 className="text-6xl md:text-8xl tracking-tighter font-normal mb-8 leading-[0.85] animate-words">
                        Template<br/>Customization
                    </h2>
<p className="text-lg text-stone-600 mb-16 font-light max-w-md animate-words">
                        Connect with our concierge to discuss tailoring your alpine residence.
                    </p>
</div>
<div className="space-y-8 text-sm tracking-tight hidden md:block animate-words">
<div className="border-t border-stone-300 pt-4">
<span className="block text-stone-500 mb-1 uppercase tracking-widest text-xs">Phone</span>
<span className="text-lg font-light text-stone-900">+48 530 341 524</span>
</div>
<div className="border-t border-stone-300 pt-4">
<span className="block text-stone-500 mb-1 uppercase tracking-widest text-xs">Address</span>
<span className="text-lg font-light text-stone-900">Pietkuna Avenue, Bialystok, Poland</span>
</div>
</div>
</div>

<form className="space-y-16 mt-8 md:mt-0">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
<div className="relative group">
<input className="w-full bg-transparent border-b border-stone-400 py-4 focus:outline-none focus:border-amber-700 transition-colors text-stone-900 text-lg placeholder-transparent peer" id="fname" placeholder="Name" type="text"/>
<label className="absolute left-0 top-4 text-stone-500 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-amber-700 peer-focus:tracking-widest peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase" htmlFor="fname">First Name</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-stone-400 py-4 focus:outline-none focus:border-amber-700 transition-colors text-stone-900 text-lg placeholder-transparent peer" id="lname" placeholder="Last Name" type="text"/>
<label className="absolute left-0 top-4 text-stone-500 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-amber-700 peer-focus:tracking-widest peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase" htmlFor="lname">Last Name</label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
<div className="relative group">
<input className="w-full bg-transparent border-b border-stone-400 py-4 focus:outline-none focus:border-amber-700 transition-colors text-stone-900 text-lg placeholder-transparent peer" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 top-4 text-stone-500 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-amber-700 peer-focus:tracking-widest peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase" htmlFor="email">Email Address</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-stone-400 py-4 focus:outline-none focus:border-amber-700 transition-colors text-stone-900 text-lg placeholder-transparent peer" id="phone" placeholder="Phone" type="tel"/>
<label className="absolute left-0 top-4 text-stone-500 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-amber-700 peer-focus:tracking-widest peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase" htmlFor="phone">Phone Number</label>
</div>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-stone-400 py-4 focus:outline-none focus:border-amber-700 transition-colors text-stone-900 text-lg placeholder-transparent peer resize-none" id="message" placeholder="Message" rows="1"></textarea>
<label className="absolute left-0 top-4 text-stone-500 text-lg transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-amber-700 peer-focus:tracking-widest peer-focus:uppercase peer-not-placeholder-shown:-top-6 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:tracking-widest peer-not-placeholder-shown:uppercase" htmlFor="message">Your Message</label>
</div>
<div className="pt-8">
<button className="w-full md:w-auto px-12 py-5 bg-[#1c1917] text-stone-100 uppercase tracking-widest text-xs hover:bg-amber-700 hover:scale-95 transition-all duration-300" type="button">
                        Submit Inquiry
                    </button>
</div>
</form>

<div className="space-y-8 text-sm tracking-tight md:hidden border-t border-stone-300 pt-16">
<div>
<span className="block text-stone-500 mb-1 uppercase tracking-widest text-xs">Phone</span>
<span className="text-lg font-light text-stone-900">+48 530 341 524</span>
</div>
<div>
<span className="block text-stone-500 mb-1 uppercase tracking-widest text-xs">Address</span>
<span className="text-lg font-light text-stone-900">Pietkuna Avenue, Bialystok, Poland</span>
</div>
</div>
</div>
</section>

<footer className="bg-stone-100 pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 relative z-10">
<div className="md:w-1/3">
<span className="block text-3xl tracking-tighter uppercase font-medium mb-8">4YouEstate</span>
<p className="text-lg text-stone-600 font-light leading-relaxed mb-8">
                    Creating legacy properties that stand as monuments to both nature and human design.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 border border-stone-300 rounded-full flex items-center justify-center hover:bg-amber-700 hover:border-amber-700 hover:text-stone-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 border border-stone-300 rounded-full flex items-center justify-center hover:bg-amber-700 hover:border-amber-700 hover:text-stone-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 border border-stone-300 rounded-full flex items-center justify-center hover:bg-amber-700 hover:border-amber-700 hover:text-stone-100 transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-12 text-sm tracking-tight">
<div className="flex flex-col gap-4 font-light">
<span className="font-medium mb-2 uppercase tracking-widest text-xs text-stone-400">Navigation</span>
<a className="hover:text-amber-700 transition-colors" href="#">Lifestyle</a>
<a className="hover:text-amber-700 transition-colors" href="#">Services</a>
<a className="hover:text-amber-700 transition-colors" href="#">Location</a>
<a className="hover:text-amber-700 transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-4 font-light">
<span className="font-medium mb-2 uppercase tracking-widest text-xs text-stone-400">Legal</span>
<a className="hover:text-amber-700 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-amber-700 transition-colors" href="#">Terms &amp; Conditions</a>
<a className="hover:text-amber-700 transition-colors" href="#">404</a>
</div>
<div className="flex flex-col gap-4 font-light col-span-2 md:col-span-1">
<span className="font-medium mb-2 uppercase tracking-widest text-xs text-stone-400">Direct</span>
<a className="hover:text-amber-700 transition-colors truncate" href="mailto:ktruszczynski03@gmail.com">ktruszczynski03@gmail.com</a>
<a className="hover:text-amber-700 transition-colors" href="tel:+48530341524">+48 530 341 524</a>
</div>
</div>
</div>

<div className="w-full text-center mt-32 pointer-events-none">
<span className="text-[15vw] leading-none tracking-tighter font-medium text-stone-200">ESTAVIA</span>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-stone-200 text-xs text-stone-500 tracking-tight">
<span>© 2024 Estavia Mountain Residences.</span>
<span className="mt-4 md:mt-0">Designed &amp; Built by Karol Truszczynski</span>
</div>
</footer>



    </>
  );
}
