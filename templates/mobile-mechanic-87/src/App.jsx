import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const header = document.getElementById('main-header');
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');

            // Header scroll effect
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    header.classList.add('bg-[#111111]/95', 'backdrop-blur-md', 'border-white/10', 'py-3');
                    header.classList.remove('bg-transparent', 'border-transparent', 'py-4');
                } else {
                    header.classList.remove('bg-[#111111]/95', 'backdrop-blur-md', 'border-white/10', 'py-3');
                    header.classList.add('bg-transparent', 'border-transparent', 'py-4');
                }
            });

            // Mobile menu toggle
            mobileBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                const icon = mobileMenu.classList.contains('hidden') ? 'solar:hamburger-menu-linear' : 'solar:close-circle-linear';
                mobileBtn.innerHTML = `<iconify-icon icon="${icon}" class="text-2xl"></iconify-icon>`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none -z-10">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#E10600] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
<div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#ff3c3c] rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
</div>

<header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent bg-transparent py-4" id="main-header">
<div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#E10600] text-white p-1.5 rounded-lg flex items-center justify-center group-hover:bg-[#ff3c3c] transition-colors shadow-[0_0_15px_rgba(225,6,0,0.4)]">
<iconify-icon className="text-xl" icon="solar:wrench-linear"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-white" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                    RedLine
                </span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white relative group transition-colors" href="#">
                    Home
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#E10600] rounded-full shadow-[0_0_8px_#E10600]"></span>
</a>
<a className="text-sm font-medium text-gray-400 hover:text-white relative group transition-colors" href="#">
                    Services
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E10600] rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#E10600]"></span>
</a>
<a className="text-sm font-medium text-gray-400 hover:text-white relative group transition-colors" href="#">
                    About
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E10600] rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#E10600]"></span>
</a>
<a className="text-sm font-medium text-gray-400 hover:text-white relative group transition-colors" href="#">
                    Pricing
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E10600] rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#E10600]"></span>
</a>
<a className="text-sm font-medium text-gray-400 hover:text-white relative group transition-colors" href="#">
                    Contact
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E10600] rounded-full transition-all duration-300 group-hover:w-full shadow-[0_0_8px_#E10600]"></span>
</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-[#E10600] text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#b30500] hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(225,6,0,0.3)]" href="tel:+1234567890">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                    Call Now
                </a>
<button className="md:hidden text-gray-300 hover:text-white p-2" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-[#111111]/95 backdrop-blur-xl border-b border-white/10 flex flex-col py-4 px-6 gap-4 shadow-2xl" id="mobile-menu">
<a className="text-base font-medium text-white py-2 border-b border-white/5" href="#">Home</a>
<a className="text-base font-medium text-gray-400 hover:text-white py-2 border-b border-white/5" href="#">Services</a>
<a className="text-base font-medium text-gray-400 hover:text-white py-2 border-b border-white/5" href="#">About</a>
<a className="text-base font-medium text-gray-400 hover:text-white py-2 border-b border-white/5" href="#">Pricing</a>
<a className="text-base font-medium text-gray-400 hover:text-white py-2" href="#">Contact</a>
<a className="mt-2 flex items-center justify-center gap-2 bg-[#E10600] text-white px-5 py-3 rounded-xl text-sm font-semibold text-center shadow-[0_0_15px_rgba(225,6,0,0.3)]" href="tel:+1234567890">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                Call Now
            </a>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-24 pb-12 lg:pt-0 lg:pb-0">
<div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="flex flex-col justify-center animate-[fade-in_1s_ease-out]">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 w-fit mb-6 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E10600] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#E10600]"></span>
</span>
<span className="text-xs font-medium text-gray-300 tracking-wide uppercase">On-Demand Service</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1]" style={{fontFamily: '\'Montserrat\', sans-serif'}}>
                    Fast. Reliable.<br/>
<span className="text-[#E10600] relative inline-block mt-2">
                        Mobile Auto Repair.
                        
<svg className="absolute w-full h-3 -bottom-1 left-0 text-[#E10600]/30" fill="none" viewbox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00021 6.84039C54.8322 1.3415 129.742 -1.53489 198.005 6.84039" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path></svg>
</span>
</h1>
<h2 className="text-lg sm:text-xl text-gray-300 mt-6 font-medium leading-snug">
                    We come to you. Anytime. Anywhere.
                </h2>
<p className="text-sm sm:text-base text-gray-400 mt-4 max-w-lg leading-relaxed">
                    Skip the tow truck and the waiting room. Our certified mobile mechanics bring the shop to your driveway, office, or roadside emergency with premium tools and expertise.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10">
<button className="flex items-center justify-center gap-2 bg-[#E10600] text-white px-8 py-3.5 rounded-xl text-sm font-semibold hover:bg-[#b30500] hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(225,6,0,0.4)] group">
                        Book Service
                        <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-xl text-sm font-medium hover:border-[#E10600] hover:bg-[#E10600]/10 transition-all duration-300">
<iconify-icon className="text-lg text-gray-400" icon="solar:calculator-linear"></iconify-icon>
                        Get Free Quote
                    </button>
</div>

<div className="mt-10 flex items-center gap-6 text-xs text-gray-500 font-medium">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg text-[#E10600]" icon="solar:shield-check-linear"></iconify-icon>
                        Fully Insured
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg text-[#E10600]" icon="solar:star-fall-linear"></iconify-icon>
                        5-Star Rated
                    </div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-lg text-[#E10600]" icon="solar:diploma-verified-linear"></iconify-icon>
                        Certified Techs
                    </div>
</div>
</div>

<div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl md:rounded-[2rem] overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

<img alt="Mobile Mechanic repairing engine" className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-[#E10600]/50 to-transparent mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80"></div>

<div className="absolute top-4 right-4 w-24 h-24 bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-white/20 to-transparent rounded-full blur-xl mix-blend-overlay pointer-events-none"></div>

<div className="absolute bottom-6 left-6 md:bottom-10 md:left-[-1rem] bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 p-4 md:p-5 rounded-2xl flex items-center gap-4 shadow-[0_10px_30px_rgba(225,6,0,0.15)] animate-subtle-float z-10">
<div className="w-12 h-12 rounded-full bg-[#E10600]/10 flex items-center justify-center border border-[#E10600]/30 shadow-[0_0_15px_rgba(225,6,0,0.2)]">
<iconify-icon className="text-2xl text-[#E10600]" icon="solar:siren-rounded-linear"></iconify-icon>
</div>
<div>
<p className="text-white font-semibold text-sm tracking-tight" style={{fontFamily: '\'Montserrat\', sans-serif'}}>24/7 Emergency</p>
<p className="text-xs text-gray-400 mt-0.5">Rapid Response Team</p>
</div>
</div>
</div>
</div>
</section>



    </>
  );
}
