import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Age Gate Logic
        function checkAge() {
            const input = document.getElementById('age-input');
            const gate = document.getElementById('age-gate');
            const error = document.getElementById('age-error');
            const year = parseInt(input.value);
            const currentYear = new Date().getFullYear();

            if (year && (currentYear - year) >= 18) {
                // Success
                gate.style.opacity = '0';
                
                // IMPORTANT: Unlock Scroll by setting overflow to auto/visible (emptying property)
                document.body.style.overflow = '';
                document.body.style.removeProperty('overflow');
                
                setTimeout(() => {
                    gate.classList.add('hidden-gate');
                    gate.style.display = 'none'; // Ensure it's gone
                }, 500);
                
                // Set session
                if(document.getElementById('remember-me').checked) {
                    localStorage.setItem('bras_age_verified', 'true');
                } else {
                    sessionStorage.setItem('bras_age_verified', 'true');
                }
            } else {
                // Error
                error.classList.remove('hidden');
                input.classList.add('border-[#961818]');
            }
        }

        // Check verification on load
        window.addEventListener('DOMContentLoaded', () => {
            const isVerified = localStorage.getItem('bras_age_verified') || sessionStorage.getItem('bras_age_verified');
            const gate = document.getElementById('age-gate');
            
            if (isVerified === 'true') {
                // User is verified: ensure gate is gone and scroll is free
                gate.style.display = 'none';
                document.body.style.overflow = ''; // Ensure scroll works
            } else {
                // User is NOT verified: Show gate and LOCK scroll
                gate.style.display = 'flex'; 
                document.body.style.overflow = 'hidden'; // Lock scroll until verified
            }
        });

        // Mobile Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const isHidden = menu.classList.contains('hidden');
            
            if (isHidden) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
                document.body.style.removeProperty('overflow');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F5F5F0] text-center p-6" id="age-gate" style={{display: 'none'}}>
<div className="max-w-md w-full animate-[fadeIn_0.5s_ease-out]">
<div className="mb-8 flex justify-center text-[#961818]">

<svg fill="none" height="60" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="60">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="M12 8v4"></path>
<path d="M12 16h.01"></path>
</svg>
</div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#3E2723] mb-2">We need to check your I.D.</h1>
<p className="text-[#5D4037] text-sm mb-10 font-medium tracking-wide uppercase">Always Enjoy Responsibly.</p>
<div className="space-y-8">
<div>
<label className="block text-xs font-bold uppercase tracking-widest text-[#961818] mb-4">Enter your Year of Birth</label>
<input className="custom-input font-medium placeholder-[#3e2723]/30" id="age-input" max="2025" min="1900" placeholder="YYYY" type="number"/>
</div>
<div className="flex flex-col gap-3 pt-4">
<button className="w-full py-4 bg-[#961818] hover:bg-[#7a1212] text-white font-semibold uppercase tracking-widest text-xs transition-colors shadow-lg cursor-pointer" onclick="checkAge()">
                        Enter
                    </button>
<div className="flex items-center gap-2 justify-center mt-4">
<input className="accent-[#961818] w-4 h-4 cursor-pointer" id="remember-me" type="checkbox"/>
<label className="text-xs text-[#5D4037] cursor-pointer" htmlFor="remember-me">Remember me on this device</label>
</div>
</div>
</div>
<p className="mt-4 text-[#961818] text-xs font-medium hidden" id="age-error">You must be of legal drinking age to enter.</p>
</div>
<div className="absolute bottom-20 md:bottom-8 text-[10px] text-[#5D4037]/60 uppercase tracking-widest">
            © 2025 Bra's Traditional Beer®
        </div>
</div>

<div className="fixed bottom-0 left-0 w-full z-50 bg-[#1A1A1A] text-[#F5F5F0] border-t border-[#333] shadow-2xl">
<div className="max-w-[1400px] mx-auto px-4 py-3 md:py-4 flex items-center justify-center text-center">
<p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-[#D4AF37] leading-tight">
                Alcohol Not for Sale to Persons Under the Age of 18.
            </p>
</div>
</div>

<nav className="fixed z-40 transition-all duration-300 bg-white/95 w-full border-[#E5E5E5] border-b top-0 backdrop-blur-md supports-[backdrop-filter]:bg-white/80">
<div className="flex h-20 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<button aria-label="Toggle menu" className="lg:hidden text-[#3E2723] p-2 -ml-2 hover:bg-gray-100 rounded-md transition-colors" onclick="toggleMenu()">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>

<a className="flex items-center gap-2 group absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:left-auto" href="#">
<img alt="Bra's Beer" className="w-auto h-12 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/daa88be2-89a2-4406-ac1a-e3a913f64629_320w.png"/>
</a>

<div className="hidden lg:flex items-center space-x-10">
<a className="text-xs font-semibold uppercase tracking-widest text-[#3E2723] hover:text-[#961818] transition-colors" href="#heritage">Heritage</a>
<a className="text-xs font-semibold uppercase tracking-widest text-[#3E2723] hover:text-[#961818] transition-colors" href="#product">Our Beer</a>
<a className="text-xs font-semibold uppercase tracking-widest text-[#3E2723] hover:text-[#961818] transition-colors" href="#story">Story</a>
</div>

<div className="hidden lg:flex items-center">
<a className="px-6 py-3 bg-[#961818] text-white font-semibold uppercase tracking-widest text-[10px] hover:bg-[#3E2723] transition-colors shadow-sm" href="#buy">
                    Buy Beer
                </a>
</div>

<div className="lg:hidden w-6"></div>
</div>

<div className="absolute top-20 left-0 w-full bg-white border-b border-[#E5E5E5] p-6 flex-col gap-6 hidden shadow-xl lg:hidden z-50" id="mobile-menu">
<a className="text-sm font-bold uppercase tracking-widest text-[#3E2723]" href="#heritage" onclick="toggleMenu()">Heritage</a>
<a className="text-sm font-bold uppercase tracking-widest text-[#3E2723]" href="#product" onclick="toggleMenu()">Our Beer</a>
<a className="text-sm font-bold uppercase tracking-widest text-[#3E2723]" href="#story" onclick="toggleMenu()">Story</a>
<a className="w-full py-3 bg-[#961818] text-center text-white font-bold uppercase tracking-widest text-xs" href="#buy" onclick="toggleMenu()">Buy Beer</a>
</div>
</nav>
<main className="">


<section className="relative min-h-[90vh] flex items-center justify-center bg-[#8B2323] pt-20 pb-20">

<div className="absolute inset-0 z-0 overflow-hidden">

<img alt="Bra's Traditional Beer Background" className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50c6d569-1567-42fe-9988-41d179c583ed_800w.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-[#5a1212] via-transparent to-[#8B2323]/50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white pb-10 mt-10">
<div className="animate-[fadeIn_0.8s_ease-out] mb-6">
<span className="inline-block text-[10px] uppercase font-bold text-[#D4AF37] tracking-[0.2em] border-[#D4AF37] border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm">
                        Best Taste. Truly South African.
                    </span>
<h1 className="md:text-7xl lg:text-8xl leading-none text-5xl font-semibold tracking-tighter mb-6 drop-shadow-xl" style={{}}>BRA's Beer Traditional<br/> <span className="font-light italic text-[#F5F5F0]">Sorghum Beer</span></h1>
</div>
<p className="text-lg md:text-xl text-[#F5F5F0]/90 font-light leading-relaxed max-w-2xl mx-auto mb-10 text-balance animate-[fadeIn_1s_ease-out_0.2s_both]">
                    Tastes like home! The beer that carries culture. Brewed from sorghum, honoring African traditions.
                </p>

<a className="inline-block animate-[bounce_2s_infinite] opacity-50 cursor-pointer hover:opacity-100 transition-opacity" href="#product">
<svg aria-hidden="true" className="mx-auto" data-icon="lucide:arrow-down" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#FAFAFA] to-transparent z-20 pointer-events-none"></div>
</section>

<section className="scroll-mt-20 bg-white pt-24 pb-24 relative" id="product">
<div className="max-w-[1400px] mr-auto ml-auto pr-6 pl-6">

<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-[#961818] font-bold text-xs uppercase tracking-widest mb-4 block">Our Signature Brew</span>
<h2 className="md:text-5xl text-4xl font-semibold text-[#1A1A1A] tracking-tight mb-6">Experience Bra's Quality</h2>
<p className="leading-relaxed text-lg font-light text-[#525252]" style={{}}>Crafted for the moment. Our premium sorghum beer is perfectly crafted to suit any gathering.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 gap-x-6 gap-y-6">

<div className="group relative h-[600px] w-full bg-[#F9F9F7] border border-[#E5E5E5] hover:border-[#961818]/30 transition-all duration-500 overflow-hidden flex flex-col items-center pt-10 pb-10">
<div className="relative z-10 w-full flex-grow flex items-center justify-center p-6">
<div className="absolute w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all duration-700"></div>

<img alt="1 Litre Carton" className="group-hover:scale-105 transition-transform duration-700 ease-out h-full max-h-[400px] w-auto object-contain drop-shadow-2xl" onerror="this.src='https://placehold.co/200x500/e0e0e0/909090?text=Paste+Bottle+Here';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e752b521-de4d-4042-9c15-a5c9f49cc138_800w.png"/>
</div>
<div className="relative z-20 text-center mt-6">
<h3 className="text-2xl font-semibold text-[#3E2723] tracking-tight" style={{}}>Full of Flavour</h3>
<p className="text-[#961818] text-xs font-bold uppercase tracking-widest mt-2">Daily Freshness</p>
</div>
</div>

<div className="group shadow-[#D4AF37]/5 hover:shadow-[#D4AF37]/10 transition-all duration-500 overflow-hidden flex flex-col bg-[#FFFFFF] w-full h-[600px] border-[#D4AF37]/30 border ring-[#D4AF37]/20 ring-1 pt-10 pb-10 relative shadow-2xl items-center">
<div className="relative z-10 w-full flex-grow flex items-center justify-center p-6">
<div className="absolute w-64 h-64 bg-[#961818]/10 rounded-full blur-3xl group-hover:bg-[#961818]/20 transition-all duration-700"></div>

<img alt="2 Litre Pack" className="group-hover:scale-105 transition-transform duration-700 ease-out w-auto h-full max-h-[440px] object-contain drop-shadow-2xl" onerror="this.src='https://placehold.co/250x550/e0e0e0/909090?text=Paste+Main+Bottle';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70fabd17-2d3f-4928-b44e-82be3af85377_800w.png"/>
</div>
<div className="relative z-20 text-center mt-6">
<h3 className="text-2xl font-semibold text-[#1A1A1A] tracking-tight" style={{}}>1 Litre Carton</h3><p className="text-[#961818] text-xs font-bold uppercase tracking-widest mt-2">Premium taste</p>
</div>
</div>

<div className="group relative h-[600px] w-full bg-[#F9F9F7] border border-[#E5E5E5] hover:border-[#961818]/30 transition-all duration-500 overflow-hidden flex flex-col items-center pt-10 pb-10">
<div className="z-10 flex-grow flex w-full pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<div className="absolute w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl group-hover:bg-[#D4AF37]/20 transition-all duration-700"></div>

<img alt="Family Share" className="group-hover:scale-105 transition-transform duration-700 ease-out h-full max-h-[400px] w-auto object-contain drop-shadow-2xl" onerror="this.src='https://placehold.co/200x500/e0e0e0/909090?text=Paste+Bottle+Here';" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/088f4a5d-96b7-4a08-99f1-496b9ecf3695_800w.png"/>
</div>
<div className="relative z-20 text-center mt-6">
<h3 className="text-2xl font-semibold text-[#3E2723] tracking-tight" style={{}}>Family Sharing</h3>
<p className="text-[#961818] text-xs font-bold uppercase tracking-widest mt-2">Perfect for Gatherings</p>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 overflow-hidden scroll-mt-20 bg-[#FAFAFA] pt-24 pb-24" id="heritage">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="relative h-[500px] lg:h-[700px] bg-[#F5F5F0]">
<img alt="Sorghum Grains" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22c7d5f4-eb2f-419d-80fd-90845e7179dc_1600w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 max-w-xs shadow-sm">
<p className="text-[#961818] font-bold uppercase text-[10px] tracking-widest mb-1">Established Expertise</p>
<p className="text-[#3E2723] text-sm">70 years of combined experience in the traditional beer market.</p>
</div>
</div>

<div className="max-w-lg">
<div className="flex items-center gap-3 mb-6 text-[#961818]">
<svg aria-hidden="true" data-icon="lucide:history" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5m4-1v5l4 2"></path></g></svg>
<span className="text-xs font-bold uppercase tracking-widest">Our Roots</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-[#1A1A1A] mb-8 tracking-tight leading-[1.1]">
                            # Honoring African<br/>Brewing Heritage
                        </h2>
<div className="space-y-6 text-[#525252] text-lg font-light leading-relaxed">
<p className="">
                                Bra's has been crafting the finest traditional sorghum beer with quality local ingredients since its inception in South Africa. We draw from over 70 years of combined experience, preserving ancient fermentation rituals that have defined our culture for centuries.
                            </p>
<p className="">
                                A blend of history, expertise, and dedication to deliver a beverage that reflects generations of knowledge, culture, and passion.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#1A1A1A] overflow-hidden flex items-center scroll-mt-20" id="story">

<div className="absolute inset-0 z-0">
<img alt="Community Gathering" className="w-full h-full object-cover object-center opacity-40 grayscale hover:grayscale-0 transition-all duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79c1f966-ef8d-48ce-b7ff-21cdd3034b2d_3840w.jpg"/>
<div className="bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-[1400px] w-full mx-auto px-6">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-full text-[#D4AF37]">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-[10px] font-bold uppercase tracking-widest">The Legacy</span>
</div>
<h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-[1.1]">
                        Discover the Story<br/>
                        Behind Bra's
                    </h2>
<p className="text-xl text-[#F5F5F0]/80 font-light mb-10 leading-relaxed border-l-2 border-[#D4AF37] pl-6">
                        Where heritage meets today. Experience the taste of home in every sip. From ancient fermentation rituals to modern gatherings, we keep the spirit of Ubuntu alive.
                    </p>
</div>
</div>
</section>

<section className="text-white bg-[#C26B07] pt-24 pb-24 scroll-mt-20" id="buy">
<div className="max-w-[1000px] mx-auto px-6 text-center">
<svg aria-hidden="true" className="mx-auto mb-6" data-icon="lucide:shopping-bag" data-strokeWidth="1" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<h2 className="md:text-5xl text-4xl font-semibold tracking-tight mb-6">Stock up on BRA's Beer<br/>Sorghum Beer</h2>
<p className="text-[#F5F5F0]/80 text-lg font-light mb-10 max-w-lg mx-auto">
                    Find and purchase your favorite traditional beer. Bring the taste of home to your next celebration.
                </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center">
<a className="inline-block min-w-[200px] py-4 bg-[#F5F5F0] text-[#556B2F] font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-[#3E2723] transition-colors shadow-lg rounded-none" href="#">
                        Buy Beer
                    </a>
</div>
</div>
</section>

<section className="border-t border-[#E5E5E5] bg-white">
<div className="grid md:grid-cols-2">
<a className="flex items-center justify-center py-16 px-6 bg-white hover:bg-[#F5F5F0] transition-colors group border-b md:border-b-0 md:border-r border-[#E5E5E5]" href="#buy">
<div className="text-center">
<span className="block text-3xl font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#961818] transition-colors tracking-tight">Purchase Beer</span>
<span className="text-xs text-[#737373] uppercase tracking-widest flex items-center justify-center gap-2">
                            Order Now <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</a>
<a className="flex items-center justify-center py-16 px-6 bg-white hover:bg-[#F5F5F0] transition-colors group" href="mailto:info@brasbeer.co.za">
<div className="text-center">
<span className="block text-3xl font-semibold text-[#1A1A1A] mb-2 group-hover:text-[#961818] transition-colors tracking-tight">Contact Us</span>
<span className="text-xs text-[#737373] uppercase tracking-widest flex items-center justify-center gap-2">
                            Get in Touch <svg aria-hidden="true" data-icon="lucide:mail" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</span>
</div>
</a>
</div>
</section>
</main>

<footer className="bg-[#1A1A1A] text-[#F5F5F0] pt-20 pb-10">
<div className="max-w-[1400px] mx-auto px-6">

<div className="mb-12">
<img alt="Bra's Beer" className="opacity-80 w-auto h-16 object-contain invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d7c36fc-0d8d-46a4-ac8a-a5c12049c4c6_320w.png"/>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20 border-b border-white/10 pb-20">

<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6">Company</h4>
<ul className="space-y-4 text-xs text-[#A3A3A3]">
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">Heritage</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6">Support</h4>
<ul className="space-y-4 text-xs text-[#A3A3A3]">
<li className=""><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Store Locator</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6">Legal</h4>
<ul className="space-y-4 text-xs text-[#A3A3A3]">
<li className=""><a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">PAIA Manual</a></li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-6">Connect</h4>
<div className="flex gap-4">
<a className="hover:text-[#D4AF37] transition-colors" href="https://www.instagram.com/bras_beer/"><svg aria-hidden="true" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="hover:text-[#D4AF37] transition-colors" href="https://web.facebook.com/profile.php?id=61581944095983"><svg aria-hidden="true" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="hover:text-[#D4AF37] transition-colors" href="https://www.tiktok.com/@brasbeer"><svg aria-hidden="true" data-icon="lucide:video" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16 13l5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></g></svg></a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
<div className="flex flex-col gap-2">
<p className="text-[#D4AF37] text-sm font-bold uppercase tracking-widest">Always Enjoy Responsibly.</p>
<p className="text-[10px] text-[#525252]">© 2025 Bra's Traditional Beer®, Brewed in South Africa.</p>
</div>
<div className="max-w-md text-[10px] text-[#525252] text-center md:text-right">
<p className="">Bra's Beer is committed to digital accessibility. If you are having difficulty viewing or navigating the content on this website, please contact our team at <a className="underline hover:text-white" href="mailto:info@brasbeer.co.za">info@brasbeer.co.za</a>.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
