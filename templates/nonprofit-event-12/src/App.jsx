import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.carousel-slide');
            const indicators = document.querySelectorAll('.carousel-indicator');
            let currentSlide = 0;
            let slideInterval;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    if(i === index) {
                        slide.classList.remove('opacity-0', 'z-0');
                        slide.classList.add('opacity-100', 'z-10');
                        if(indicators[i]) {
                            indicators[i].classList.replace('bg-white/40', 'bg-[#facd54]');
                            indicators[i].classList.remove('hover:bg-white/60');
                        }
                    } else {
                        slide.classList.remove('opacity-100', 'z-10');
                        slide.classList.add('opacity-0', 'z-0');
                        if(indicators[i]) {
                            indicators[i].classList.replace('bg-[#facd54]', 'bg-white/40');
                            indicators[i].classList.add('hover:bg-white/60');
                        }
                    }
                });
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            function startCarousel() {
                slideInterval = setInterval(nextSlide, 6000);
            }

            function resetCarousel() {
                clearInterval(slideInterval);
                startCarousel();
            }

            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    currentSlide = index;
                    showSlide(currentSlide);
                    resetCarousel();
                });
            });

            // Start auto-rotation
            startCarousel();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
<div className="absolute top-[5%] left-[2%] w-96 h-96 bg-[#079da1]/10 rounded-full mix-blend-multiply filter blur-[100px]"></div>
<div className="absolute top-[25%] right-[5%] w-[30rem] h-[30rem] bg-[#facd54]/10 rounded-full mix-blend-multiply filter blur-[120px]"></div>
<div className="absolute top-[50%] left-[10%] w-[25rem] h-[25rem] bg-[#f15b32]/5 rounded-full mix-blend-multiply filter blur-[100px]"></div>
<div className="absolute bottom-[10%] right-[15%] w-96 h-96 bg-[#b7d542]/10 rounded-full mix-blend-multiply filter blur-[100px]"></div>
<div className="absolute bottom-[30%] left-[20%] w-[20rem] h-[20rem] bg-[#004c54]/5 rounded-full mix-blend-multiply filter blur-[80px]"></div>
</div>

<header className="bg-[#004c54] w-full z-50 relative shadow-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center py-4">

<div className="flex-shrink-0 flex items-center">
<a className="bg-[#079da1] text-white rounded-full w-14 h-14 flex items-center justify-center text-center leading-tight shadow-sm shrink-0 hover:bg-[#196e70] transition-colors" href="#">
<span className="font-['Roboto',_sans-serif] font-semibold text-xs tracking-tight">I Live Here<br/>I Give Here</span>
</a>
</div>

<nav className="hidden lg:flex flex-1 justify-center items-center space-x-2 xl:space-x-4 px-4">
<a className="bg-[#079da1] hover:bg-[#196e70] text-white px-4 py-2 rounded-md font-['Roboto_Condensed',_sans-serif] text-sm xl:text-base font-medium transition-colors duration-200 shadow-sm" href="#">Who We Are</a>
<a className="bg-[#079da1] hover:bg-[#196e70] text-white px-4 py-2 rounded-md font-['Roboto_Condensed',_sans-serif] text-sm xl:text-base font-medium transition-colors duration-200 shadow-sm" href="#">Our Mission</a>
<a className="bg-[#079da1] hover:bg-[#196e70] text-white px-4 py-2 rounded-md font-['Roboto_Condensed',_sans-serif] text-sm xl:text-base font-medium transition-colors duration-200 shadow-sm" href="#">Our Impact</a>
<a className="bg-[#079da1] hover:bg-[#196e70] text-white px-4 py-2 rounded-md font-['Roboto_Condensed',_sans-serif] text-sm xl:text-base font-medium transition-colors duration-200 shadow-sm" href="#">Donate Now</a>
<a className="bg-[#079da1] hover:bg-[#196e70] text-white px-4 py-2 rounded-md font-['Roboto_Condensed',_sans-serif] text-sm xl:text-base font-medium transition-colors duration-200 shadow-sm" href="#">Find Nonprofits</a>
</nav>

<div className="flex-shrink-0 flex items-center justify-end">
<button className="text-[#b7d542] hover:text-white transition-colors p-2 bg-[#004c54] border border-[#b7d542]/30 rounded-md hover:bg-[#196e70]">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main>

<section className="relative pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-[45rem] sm:h-[40rem]">
<div className="relative w-full h-full rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl bg-[#004c54]" id="hero-carousel">

<div className="carousel-slide absolute inset-0 transition-opacity duration-1000 opacity-100 z-10">
<img alt="Happy community" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-[#004c54]/70 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#004c54]/50 to-transparent"></div>
<div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white max-w-3xl mx-auto pt-8">
<h1 className="font-['Roboto',_sans-serif] font-semibold tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-8 drop-shadow-lg">
                            JOIN US<br/>
<span className="text-white/95 font-medium">Amplify Generosity Across Central Texas</span>
</h1>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8">
<a className="w-full sm:w-auto bg-[#f15b32] hover:bg-[#cf654a] text-white px-8 py-3.5 rounded-md font-['Roboto_Condensed',_sans-serif] text-lg font-medium transition-all shadow-[0_4px_14px_0_rgba(241,91,50,0.39)] hover:shadow-[0_6px_20px_rgba(241,91,50,0.23)]" href="#">
                                Find Nonprofits
                            </a>
<a className="w-full sm:w-auto bg-[#f15b32] hover:bg-[#cf654a] text-white px-8 py-3.5 rounded-md font-['Roboto_Condensed',_sans-serif] text-lg font-medium transition-all shadow-[0_4px_14px_0_rgba(241,91,50,0.39)] hover:shadow-[0_6px_20px_rgba(241,91,50,0.23)]" href="#">
                                Donate Now
                            </a>
</div>
</div>
</div>

<div className="carousel-slide absolute inset-0 transition-opacity duration-1000 opacity-0 z-0">
<img alt="Supported people" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1529156069898-49953eb1f5bc?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-[#004c54]/75 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#004c54]/60 to-transparent"></div>
<div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white max-w-4xl mx-auto">
<iconify-icon className="text-[#facd54] mb-6 opacity-90" height="48" icon="solar:quote-left-bold" width="48"></iconify-icon>
<h2 className="font-['Roboto',_sans-serif] font-medium tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-snug mb-8 drop-shadow-md italic">
                            "Amplify Austin gave our community center the funds to stay open all year round. We've supported hundreds of local families because of this generosity."
                        </h2>
<p className="font-['Roboto_Condensed',_sans-serif] text-[#b7d542] text-xl font-semibold tracking-tight uppercase">Sarah Jenkins</p>
<p className="text-sm text-white/80 mt-1">Community Center Director</p>
</div>
</div>

<div className="carousel-slide absolute inset-0 transition-opacity duration-1000 opacity-0 z-0">
<img alt="Happy supported people" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&amp;fit=crop&amp;q=80&amp;w=1600"/>
<div className="absolute inset-0 bg-[#004c54]/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#004c54]/60 to-transparent"></div>
<div className="relative z-20 flex flex-col items-center justify-center h-full px-6 text-center text-white max-w-4xl mx-auto">
<iconify-icon className="text-[#079da1] mb-6 opacity-90" height="48" icon="solar:quote-left-bold" width="48"></iconify-icon>
<h2 className="font-['Roboto',_sans-serif] font-medium tracking-tight text-2xl sm:text-3xl lg:text-4xl leading-snug mb-8 drop-shadow-md italic">
                            "Thanks to the incredible support during the event, our youth mentorship program doubled in size. The kids now have the resources they truly deserve."
                        </h2>
<p className="font-['Roboto_Condensed',_sans-serif] text-[#facd54] text-xl font-semibold tracking-tight uppercase">Marcus Reed</p>
<p className="text-sm text-white/80 mt-1">Youth Program Coordinator</p>
</div>
</div>

<div className="absolute bottom-8 left-0 right-0 z-30 flex items-center justify-center gap-3">
<button aria-label="Slide 1" className="carousel-indicator w-3 h-3 rounded-full bg-[#facd54] transition-colors"></button>
<button aria-label="Slide 2" className="carousel-indicator w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-colors"></button>
<button aria-label="Slide 3" className="carousel-indicator w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-colors"></button>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
<h2 className="text-center font-['Roboto',_sans-serif] font-semibold tracking-tight text-3xl md:text-4xl text-[#004c54] mb-16 md:mb-24">
                How to Participate in Amplify Austin Event?
            </h2>
<div className="space-y-16 md:space-y-24 relative">

<div className="absolute top-[20%] left-0 w-full h-[400px] bg-white/60 backdrop-blur-sm transform -skew-y-6 -z-10 rounded-3xl border border-white/50 shadow-[0_0_40px_rgba(0,0,0,0.03)]"></div>

<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="w-full md:w-1/2 flex justify-center md:justify-end">
<div className="relative w-[280px] h-[320px] rounded-xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">

<img alt="Using computer to discover non-profits" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col items-start">
<div className="bg-[#b7d542] text-[#004c54] px-6 py-1.5 rounded-md font-['Roboto_Condensed',_sans-serif] text-lg font-semibold tracking-tight mb-6 shadow-sm">
                            1 Discover
                        </div>
<p className="text-lg md:text-xl text-[#004c54] leading-relaxed mb-8 max-w-sm">
                            Browse through over 700 verified local organizations.
                        </p>
<a className="bg-[#079da1] hover:bg-[#196e70] text-white px-6 py-2.5 rounded-md font-['Roboto_Condensed',_sans-serif] text-base transition-colors shadow-sm" href="#">
                            Learn More
                        </a>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
<div className="w-full md:w-1/2 flex justify-center md:justify-start">
<div className="relative w-[280px] h-[320px] rounded-xl overflow-hidden shadow-lg border-4 border-white bg-[#e3af25]">
<img alt="Choosing a cause" className="w-full h-full object-cover mix-blend-overlay opacity-80" src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col items-start md:items-end md:text-right">
<div className="bg-[#cf654a] text-white px-6 py-1.5 rounded-md font-['Roboto_Condensed',_sans-serif] text-lg font-semibold tracking-tight mb-6 shadow-sm">
                            2 Choose
                        </div>
<p className="text-lg md:text-xl text-[#004c54] leading-relaxed mb-8 max-w-sm">
                            Select the causes that resonate most with your values.
                        </p>
<a className="bg-[#facd54] hover:bg-[#e3af25] text-[#004c54] px-6 py-2.5 rounded-md font-['Roboto_Condensed',_sans-serif] text-base transition-colors shadow-sm font-medium" href="#">
                            Learn More
                        </a>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
<div className="w-full md:w-1/2 flex justify-center md:justify-end">
<div className="relative w-[280px] h-[320px] rounded-xl overflow-hidden shadow-lg border-4 border-white bg-slate-100">

<img alt="Reading a credit card to donate" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col items-start">
<div className="bg-[#cf654a] text-white px-6 py-1.5 rounded-md font-['Roboto_Condensed',_sans-serif] text-lg font-semibold tracking-tight mb-6 shadow-sm">
                            3 Donate
                        </div>
<p className="text-lg md:text-xl text-[#004c54] leading-relaxed mb-8 max-w-sm">
                            Easily contribute through our secure platform checkout.
                        </p>
<a className="bg-[#facd54] hover:bg-[#e3af25] text-[#004c54] px-6 py-2.5 rounded-md font-['Roboto_Condensed',_sans-serif] text-base transition-colors shadow-sm font-medium" href="#">
                            Learn More
                        </a>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
<div className="w-full md:w-1/2 flex justify-center md:justify-start">
<div className="relative w-[280px] h-[320px] rounded-xl overflow-hidden shadow-lg border-4 border-white">
<img alt="Amplify Austin sign" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col items-start md:items-end md:text-right">
<div className="bg-[#b7d542] text-[#004c54] px-6 py-1.5 rounded-md font-['Roboto_Condensed',_sans-serif] text-lg font-semibold tracking-tight mb-6 shadow-sm">
                            4 Amplify
                        </div>
<p className="text-lg md:text-xl text-[#004c54] leading-relaxed mb-8 max-w-sm">
                            Share your impact and encourage friends to join the movement.
                        </p>
<a className="bg-[#079da1] hover:bg-[#196e70] text-white px-6 py-2.5 rounded-md font-['Roboto_Condensed',_sans-serif] text-base transition-colors shadow-sm" href="#">
                            Learn More
                        </a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white/60 backdrop-blur-md border-y border-white/80 shadow-[0_0_30px_rgba(0,0,0,0.02)]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-center font-['Roboto',_sans-serif] font-semibold tracking-tight text-3xl md:text-4xl text-[#004c54] mb-12">
                    Still Unsure? See The Impact For Yourself
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col h-full bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<img alt="Family receiving help" className="w-full h-40 object-cover rounded-xl mb-6 shadow-sm" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<blockquote className="flex-grow">
<p className="text-[#004c54] text-base leading-relaxed italic mb-6">
                                "The donations we received allowed us to serve 5,000 more meals to families."
                            </p>
</blockquote>
<div className="mt-auto flex justify-center">
<a className="bg-[#cf654a] hover:bg-[#f15b32] text-white px-5 py-2 rounded-md text-sm font-medium transition-colors shadow-sm" href="#">
                                Read Their Story
                            </a>
</div>
</div>

<div className="flex flex-col h-full bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<img alt="Kids in after-school program" className="w-full h-40 object-cover rounded-xl mb-6 shadow-sm" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<blockquote className="flex-grow">
<p className="text-[#004c54] text-base leading-relaxed italic mb-6">
                                "Funding secured essential after-school programming for an entire semester."
                            </p>
</blockquote>
<div className="mt-auto flex justify-center">
<a className="bg-[#cf654a] hover:bg-[#f15b32] text-white px-5 py-2 rounded-md text-sm font-medium transition-colors shadow-sm" href="#">
                                Read Their Story
                            </a>
</div>
</div>

<div className="flex flex-col h-full bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<img alt="Dogs in an animal shelter" className="w-full h-40 object-cover rounded-xl mb-6 shadow-sm" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<blockquote className="flex-grow">
<p className="text-[#004c54] text-base leading-relaxed italic mb-6">
                                "We upgraded our shelter facilities and successfully saved and adopted out 30% more rescues."
                            </p>
</blockquote>
<div className="mt-auto flex justify-center">
<a className="bg-[#cf654a] hover:bg-[#f15b32] text-white px-5 py-2 rounded-md text-sm font-medium transition-colors shadow-sm" href="#">
                                Read Their Story
                            </a>
</div>
</div>

<div className="flex flex-col h-full bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<img alt="Job training" className="w-full h-40 object-cover rounded-xl mb-6 shadow-sm" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<blockquote className="flex-grow">
<p className="text-[#004c54] text-base leading-relaxed italic mb-6">
                                "Because of the generosity, I accessed job training leading to my new career."
                            </p>
</blockquote>
<div className="mt-auto flex justify-center">
<a className="bg-[#cf654a] hover:bg-[#f15b32] text-white px-5 py-2 rounded-md text-sm font-medium transition-colors shadow-sm" href="#">
                                Read Their Story
                            </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 relative overflow-hidden bg-transparent">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-center font-['Roboto',_sans-serif] font-semibold tracking-tight text-2xl md:text-3xl text-[#004c54] mb-16 max-w-2xl mx-auto leading-tight">
                    Follow Us Or Reach Out To Learn About Future Events And Opportunities
                </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
<a className="w-20 h-20 bg-[#cf654a] text-white rounded-full flex items-center justify-center transition-all hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(207,101,74,0.39)] hover:shadow-[0_6px_20px_rgba(207,101,74,0.3)] group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" height="36" icon="simple-icons:instagram" width="36"></iconify-icon>
</a>
<a className="w-20 h-20 bg-[#079da1] text-white rounded-full flex items-center justify-center transition-all hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(7,157,161,0.39)] hover:shadow-[0_6px_20px_rgba(7,157,161,0.3)] group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" height="36" icon="simple-icons:facebook" width="36"></iconify-icon>
</a>
<a className="w-20 h-20 bg-[#004c54] text-white rounded-full flex items-center justify-center transition-all hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(0,76,84,0.39)] hover:shadow-[0_6px_20px_rgba(0,76,84,0.3)] group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" height="32" icon="simple-icons:x" width="32"></iconify-icon>
</a>
<a className="w-20 h-20 bg-[#f15b32] text-white rounded-full flex items-center justify-center transition-all hover:-translate-y-1 shadow-[0_4px_14px_0_rgba(241,91,50,0.39)] hover:shadow-[0_6px_20px_rgba(241,91,50,0.3)] group" href="#">
<iconify-icon className="group-hover:scale-110 transition-transform" height="34" icon="simple-icons:tiktok" width="34"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 relative">
<h3 className="font-['Roboto',_sans-serif] font-semibold tracking-tight text-2xl text-[#004c54] mb-2 text-center">Stay Connected</h3>
<p className="text-slate-500 text-sm text-center mb-8">Sign up to receive our monthly newsletter and important updates.</p>
<form className="space-y-5">
<div>
<label className="sr-only" htmlFor="name">First Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#079da1] focus:bg-white transition-all text-base text-slate-800 placeholder-slate-400" id="name" placeholder="First Name" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#079da1] focus:bg-white transition-all text-base text-slate-800 placeholder-slate-400" id="email" placeholder="Email Address" type="email"/>
</div>
<div className="flex items-start mt-4">
<div className="flex items-center h-5">
<input className="w-4 h-4 text-[#079da1] bg-slate-50 border-slate-300 rounded focus:ring-[#079da1] focus:ring-2 cursor-pointer accent-[#079da1]" id="consent" type="checkbox"/>
</div>
<div className="ml-3 text-xs">
<label className="text-slate-500 cursor-pointer" htmlFor="consent">I consent to receive emails and updates. I understand I can unsubscribe at any time.</label>
</div>
</div>
<div className="flex justify-center gap-4 pt-4">
<button className="px-6 py-2.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-50 transition-colors text-base font-medium" type="button">
                                    Cancel
                                </button>
<button className="px-8 py-2.5 rounded-full bg-[#004c54] hover:bg-[#196e70] text-white transition-colors text-base font-medium shadow-sm" type="submit">
                                    Submit
                                </button>
</div>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#004c54] text-white pt-16 pb-8 border-t border-[#079da1]/30 mt-8 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">

<div className="flex flex-col items-center md:items-start">
<a className="bg-[#079da1] text-white rounded-full w-14 h-14 flex items-center justify-center text-center leading-tight shadow-sm mb-6 hover:bg-[#196e70] transition-colors" href="#">
<span className="font-['Roboto',_sans-serif] font-semibold text-xs tracking-tight">I Live Here<br/>I Give Here</span>
</a>
<p className="text-white/70 text-sm max-w-xs leading-relaxed">
                        Amplify Austin is a community-wide day of giving focused on building up central Texas nonprofits to make a lasting impact.
                    </p>
</div>

<div className="flex flex-col items-center md:items-start">
<h4 className="font-['Roboto',_sans-serif] font-semibold text-lg tracking-tight mb-6 text-[#facd54]">Quick Links</h4>
<ul className="space-y-3 text-sm text-white/80">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Find a Nonprofit</a></li>
<li><a className="hover:text-white transition-colors" href="#">Volunteer Opportunities</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div className="flex flex-col items-center md:items-start">
<h4 className="font-['Roboto',_sans-serif] font-semibold text-lg tracking-tight mb-6 text-[#facd54]">Contact Info</h4>
<ul className="space-y-3 text-sm text-white/80">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="mailto:hello@amplifyatx.org"><iconify-icon icon="solar:letter-linear" width="18"></iconify-icon> hello@amplifyatx.org</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="tel:+15551234567"><iconify-icon icon="solar:phone-linear" width="18"></iconify-icon> (555) 123-4567</a></li>
<li className="flex items-center gap-2 justify-center md:justify-start"><iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon> Austin, TX 78701</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
<p>© 2024 I Live Here I Give Here. All rights reserved.</p>
<div className="flex space-x-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
