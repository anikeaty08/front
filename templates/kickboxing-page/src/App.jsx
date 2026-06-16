import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize Lucide Icons
      lucide.createIcons();
      // Mobile Menu Logic
      const mobileMenuBtn = document.getElementById("mobile-menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      const menuIcon = document.getElementById("menu-icon");
      const closeIcon = document.getElementById("close-icon");
      if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
          const isExpanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
          mobileMenuBtn.setAttribute("aria-expanded", !isExpanded);
          mobileMenu.classList.toggle("hidden");
          menuIcon.classList.toggle("hidden");
          closeIcon.classList.toggle("hidden");
        });
      }
      // Intersection Observer for Scroll Animations
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15,
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      document.querySelectorAll(".reveal-on-scroll, .mobile-scale-in").forEach((el) => {
        observer.observe(el);
      });
      // Testimonial Carousel Logic
      const testimonials = [{
        name: "Sarah M.",
        age: "Age 42",
        quote: "“I was intimidated at first, but the instructors made me feel welcome. Now I’m addicted! I’ve lost 15 pounds and my stress levels are way down.”",
        image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      }, {
        name: "Mike T.",
        age: "Age 35",
        quote: "“The best 45 minutes of my day. I've tried every gym out there, but nothing compares to the energy and community at CKO. It's a total game changer.”",
        image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      }, {
        name: "Jessica R.",
        age: "Age 28",
        quote: "“I never thought I'd be punching a heavy bag, but here I am! I feel stronger, more confident, and I've made some amazing friends along the way.”",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
      }];
      let currentIndex = 0;
      const prevBtn = document.getElementById("prev-testimonial");
      const nextBtn = document.getElementById("next-testimonial");
      const dots = document.querySelectorAll(".testimonial-dot");
      const tImage = document.getElementById("testimonial-image");
      const tNameCard = document.getElementById("testimonial-name-card");
      const tQuote = document.getElementById("testimonial-quote");
      const tAuthor = document.getElementById("testimonial-author");
      const tAge = document.getElementById("testimonial-age");

      function updateTestimonial(index) {
        const container = document.getElementById("testimonial-container");
        tImage.style.opacity = "0.5";
        container.style.opacity = "0.5";
        setTimeout(() => {
          const data = testimonials[index];
          tImage.src = data.image;
          tNameCard.textContent = data.name;
          tQuote.textContent = data.quote;
          tAuthor.textContent = data.name;
          tAge.textContent = data.age;
          dots.forEach((dot, i) => {
            if (i === index) {
              dot.classList.remove("bg-black/20");
              dot.classList.add("bg-black");
            } else {
              dot.classList.remove("bg-black");
              dot.classList.add("bg-black/20");
            }
          });
          tImage.style.opacity = "1";
          container.style.opacity = "1";
        }, 200);
      }
      if (prevBtn && nextBtn) {
        prevBtn.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
          updateTestimonial(currentIndex);
        });
        nextBtn.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % testimonials.length;
          updateTestimonial(currentIndex);
        });
      }
      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
          currentIndex = index;
          updateTestimonial(currentIndex);
        });
      });

      function redirectToHeroZip() {
        const zipInput = document.getElementById("zip-input");
        if (zipInput) {
          zipInput.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
          setTimeout(() => {
            zipInput.focus();
            zipInput.classList.add("ring-2", "ring-[#fec400]");
            setTimeout(() => zipInput.classList.remove("ring-2", "ring-[#fec400]"), 1000);
          }, 600);
        }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden md:flex text-xs uppercase font-semibold text-gray-400 tracking-[0.15em] bg-[#0a0a0a] z-50 border-white/5 border-b py-2 px-8 relative items-center justify-between">
<button aria-label="Open search" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/5">
<svg aria-hidden="true" className="lucide lucide-grid-3x3 w-4 h-4" data-lucide="grid-3x3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</button>
<div className="flex items-center gap-8">
<a className="hover:text-white transition-colors" href="/franchise-page">Own a Franchise</a>
</div>
</div>

<nav className="sticky w-full top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10 shadow-2xl">
<div className="flex h-20 max-w-[1600px] mx-auto px-6 relative items-center justify-between">
<a className="flex items-center gap-3 group z-50 shrink-0" href="javascript:void(0)">
<img alt="CKO Kickboxing Logo" className="w-auto h-10 object-contain" onclick="window.location.href='/home'" role="button" src="https://i.ibb.co/rRwkwHR2/cko-logo-2.png"/>
</a>
<div className="hidden lg:flex items-center gap-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<a className="uppercase hover:text-accent transition-colors text-sm font-semibold text-white tracking-[0.1em] font-heading" href="/home">Home</a>
<a className="uppercase hover:text-accent transition-colors text-sm font-semibold text-white tracking-[0.1em] font-heading" href="/about-page">About</a>
<a className="uppercase hover:text-accent transition-colors text-sm font-semibold text-white tracking-[0.1em] font-heading" href="/kickboxing">Kickboxing</a>
<a className="uppercase hover:text-accent transition-colors text-sm font-semibold text-white tracking-[0.1em] font-heading" href="/group-fitness">Group Fitness</a>
</div>
<div className="hidden md:flex items-center shrink-0"></div>
<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" className="lg:hidden p-2 text-white hover:text-accent transition-colors" id="mobile-menu-btn">
<svg aria-hidden="true" className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg aria-hidden="true" className="lucide lucide-x w-6 h-6 hidden" data-lucide="x" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="hidden lg:hidden bg-black text-white absolute w-full top-20 left-0 px-6 pb-8 border-b border-white/10 shadow-2xl" id="mobile-menu">
<div className="flex flex-col space-y-6 pt-8 text-2xl font-heading font-semibold uppercase tracking-widest text-center">
<a className="block hover:text-accent transition-colors" href="javascript:void(0)">Home</a>
<a className="block hover:text-accent transition-colors" href="javascript:void(0)">About</a>
<a className="block hover:text-accent transition-colors" href="javascript:void(0)">Kickboxing</a>
<a className="mt-4 w-full bg-accent text-black font-semibold py-4 uppercase tracking-widest block" href="javascript:void(0)"> Book Class </a>
</div>
</div>
</nav>

<section className="min-h-[700px] flex overflow-hidden bg-black h-[95vh] relative items-center justify-center" id="hero-section">
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute w-[300%] h-[300%] lg:w-[150%] lg:h-[150%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover opacity-90" frameborder="0" src="https://www.youtube.com/embed/S_yWGemBM9Q?autoplay=1&amp;mute=1&amp;loop=1&amp;playlist=S_yWGemBM9Q&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;rel=0&amp;iv_load_policy=3&amp;playsinline=1&amp;enablejsapi=1" title="Workout video background"></iframe>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black via-black/30 to-black z-10 opacity-90"></div>
<div className="absolute inset-0 bg-black/40 z-10"></div>
</div>
<div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center pointer-events-none">
<h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[0.95] uppercase tracking-tight mb-6 reveal-on-scroll is-visible"> Start Living <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fec400] to-yellow-200">Your Fit Life</span>
</h1>
<p className="text-gray-300 text-base md:text-xl font-light leading-relaxed mb-10 max-w-3xl reveal-on-scroll delay-100 is-visible mx-auto">
<span className="block text-white font-medium text-xl md:text-2xl mb-3 tracking-wide">Finally, a workout you'll look forward to.</span> Burn up to 1,200 calories and relieve stress in a supportive, non-intimidating environment. <span className="text-white font-medium underline decoration-accent decoration-2 underline-offset-4">Your first class is completely free.</span>
</p>
<div className="reveal-on-scroll delay-200 is-visible pointer-events-auto w-full max-w-lg mr-auto ml-auto">
<label className="uppercase text-accent block text-xs font-semibold tracking-[0.2em] mb-3">Find Your Studio &amp; Book Your Free Class</label>
<form action="/thank-you.html" className="w-full mb-4 relative" method="GET">
<div className="flex group relative items-center">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-accent">
<svg aria-hidden="true" className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<input className="placeholder-gray-400 focus:outline-none focus:border-[#fec400] transition-colors text-sm font-medium text-white bg-white/10 w-full h-14 border-white/20 border rounded-sm pt-2 pr-6 pb-2 pl-12 backdrop-blur-md" id="zip-input" name="zip" placeholder="Enter Zip Code or City" required="" type="text"/>
<button className="absolute right-0 inset-y-0 px-4 hover:bg-[#e68600] uppercase transition-colors text-accent hover:text-white" type="submit">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</form>
<a className="flex items-center justify-center hover:border-[#fec400] hover:text-[#fec400] transition-all group text-gray-400 bg-transparent w-full h-12 border-white/10 border rounded-sm" href="javascript:void(0)">
<span className="uppercase text-xs font-semibold tracking-[0.2em]">Skip Search &amp; Book Class</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-gray-400 reveal-on-scroll delay-300 is-visible pointer-events-auto">
<div aria-label="5 star rating" className="flex text-accent gap-1">
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg className="w-4 h-4" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<span className="font-light tracking-wide"> from 20,000+ members</span>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20 text-white/50">
<svg aria-hidden="true" className="lucide lucide-arrow-down w-6 h-6" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
<style>
        @keyframes navGlow {

          0%,
          100% {
            box-shadow: 0 0 20px rgba(254, 196, 0, 0.1), 0 0 40px rgba(254, 196, 0, 0.05);
          }

          50% {
            box-shadow: 0 0 30px rgba(254, 196, 0, 0.2), 0 0 60px rgba(254, 196, 0, 0.1);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }

          100% {
            background-position: 200% center;
          }
        }

        @keyframes pulse-border {

          0%,
          100% {
            border-color: rgba(255, 255, 255, 0.1);
          }

          50% {
            border-color: rgba(254, 196, 0, 0.3);
          }
        }

        nav {
          animation: navGlow 4s ease-in-out infinite, pulse-border 3s ease-in-out infinite;
        }

        nav::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(254, 196, 0, 0.5), transparent);
          animation: shimmer 3s linear infinite;
          background-size: 200% auto;
        }

        nav::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(254, 196, 0, 0.3), transparent);
          animation: shimmer 4s linear infinite reverse;
          background-size: 200% auto;
        }

        nav a {
          position: relative;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        nav a::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #fec400, #fef08a);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        nav a:hover::after {
          width: 100%;
        }

        nav a:hover {
          text-shadow: 0 0 20px rgba(254, 196, 0, 0.5);
          transform: translateY(-1px);
        }
      </style>
</section>

<section className="bg-black relative z-20 -mt-10 md:-mt-20 pb-20 px-4 md:px-8">
<div className="max-w-[1600px] mx-auto">
<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
<div className="group relative min-h-[500px] bg-[#0a0a0a] border border-white/10 p-8 md:p-10 flex flex-col justify-center reveal-on-scroll mobile-scale-in">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<svg aria-hidden="true" className="lucide lucide-heart-pulse w-16 h-16 text-[#fec400]" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
<span className="text-[#fec400] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Why Members Love CKO</span>
<h3 className="font-heading text-3xl md:text-4xl font-semibold uppercase text-white mb-4 leading-[0.9] tracking-tight"> Melt Away <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fec400] to-yellow-200">Stress</span>. Punch Out <span className="text-white">Your Day</span>. </h3>
<p className="text-gray-400 text-base leading-relaxed mb-8 font-light border-l border-white/10 pl-4"> The heavy bag is your safe, fun outlet for tension. End every class feeling energized, focused, and mentally clear. </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-300 font-medium">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-[#fec400]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Release endorphins naturally
              </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-medium">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-[#fec400]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Reduce anxiety and tension
              </li>
<li className="flex items-center gap-3 text-sm text-gray-300 font-medium">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4 text-[#fec400]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Reset mentally
              </li>
</ul>
</div>
<a className="group relative min-h-[500px] overflow-hidden bg-[#111] reveal-on-scroll mobile-scale-in delay-100 block cursor-pointer" href="javascript:void(0)" onclick="redirectToHeroZip()">
<img alt="Kickboxing" className="w-full h-full object-cover opacity-80 md:opacity-60 group-hover:opacity-80 transition-all duration-700 md:group-hover:scale-110 md:grayscale md:group-hover:grayscale-0" src="https://i.ibb.co/0VZVLQgz/cko-new-banner-22.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 right-8 z-20">
<h3 className="font-heading text-3xl font-semibold uppercase text-white mb-2 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500"> Kickboxing </h3>
<div className="h-1 w-12 bg-accent mb-4 scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<span className="text-accent text-sm font-semibold uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:translate-y-4 md:group-hover:translate-y-0 block">Book Class →</span>
</div>
</a>
<a className="group relative min-h-[500px] overflow-hidden bg-[#111] reveal-on-scroll mobile-scale-in delay-200 block cursor-pointer" href="javascript:void(0)" onclick="redirectToHeroZip()">
<img alt="Group Fitness" className="w-full h-full object-cover opacity-80 md:opacity-60 group-hover:opacity-80 transition-all duration-700 md:group-hover:scale-110 md:grayscale md:group-hover:grayscale-0" src="https://i.ibb.co/xtDQMgVY/home-section-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 right-8 z-20">
<h3 className="font-heading text-3xl font-semibold uppercase text-white mb-2 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500"> Group Fitness </h3>
<div className="h-1 w-12 bg-accent mb-4 scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<span className="text-accent text-sm font-semibold uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:translate-y-4 md:group-hover:translate-y-0 block">Book Class →</span>
</div>
</a>
<a className="group relative min-h-[500px] overflow-hidden bg-[#111] reveal-on-scroll mobile-scale-in delay-300 block cursor-pointer" href="javascript:void(0)" onclick="redirectToHeroZip()">
<img alt="Community" className="w-full h-full object-cover opacity-80 md:opacity-60 group-hover:opacity-80 transition-all duration-700 md:group-hover:scale-110 md:grayscale md:group-hover:grayscale-0" src="https://i.ibb.co/BH2MXFkM/section-latest-specials-img.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-8 left-8 right-8 z-20">
<h3 className="font-heading text-3xl font-semibold uppercase text-white mb-2 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500"> Community </h3>
<div className="h-1 w-12 bg-accent mb-4 scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<span className="text-accent text-sm font-semibold uppercase tracking-widest opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:translate-y-4 md:group-hover:translate-y-0 block">Book Class →</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
<div className="absolute -top-20 left-0 text-[200px] font-heading font-semibold text-white/5 whitespace-nowrap select-none pointer-events-none"> REAL RESULTS </div>
<div className="max-w-[1600px] mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="reveal-on-scroll">
<div className="flex items-center gap-4 mb-6">
<div className="h-[1px] w-12 bg-accent"></div>
<span className="text-accent text-sm font-semibold uppercase tracking-[0.3em]">About Us</span>
</div>
<h2 className="font-heading text-5xl lg:text-7xl font-semibold uppercase text-white leading-[0.9] mb-8 tracking-tight"> What is CKO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fec400] to-yellow-200">Kickboxing</span>
</h2>
<p className="text-gray-400 text-xl mb-8 leading-relaxed font-light border-l border-white/10 pl-6"> At CKO Kickboxing, get ready to burn fat, reduce stress and tone up by punching and kicking real heavy bags. Fitness Kickboxing is the number one fat-burning, cardio exercise. </p>
<div className="mb-10">
<h3 className="text-white font-heading text-2xl font-medium uppercase tracking-tight mb-3"> Burn Up to 1,200 Calories <span className="text-accent">in 45 Minutes</span>
</h3>
<p className="text-gray-400 text-base font-light leading-relaxed mb-6"> Our signature HIIT + Active Rest combination delivers twice the results in half the time. Full-body toning and weight loss guaranteed. </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-base text-gray-300 font-light">
<div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div> Cardio + strength in one session
                </li>
<li className="flex items-center gap-3 text-base text-gray-300 font-light">
<div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div> Afterburn effect (24–36 hours)
                </li>
<li className="flex items-center gap-3 text-base text-gray-300 font-light">
<div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
<svg aria-hidden="true" className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div> Visible results in weeks
                </li>
</ul>
</div>
<a className="bg-white hover:bg-gray-200 text-black font-semibold uppercase tracking-[0.2em] py-4 px-10 text-xs transition-all hover:scale-105 rounded-sm inline-flex items-center gap-2 group mt-2" href="javascript:void(0)" onclick="redirectToHeroZip()"> Book First Class <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="relative reveal-on-scroll mobile-scale-in delay-200">
<div className="absolute -inset-4 bg-[#fec400]/20 blur-2xl rounded-full opacity-20"></div>
<img alt="Group Workout" className="w-full h-auto shadow-2xl md:grayscale md:hover:grayscale-0 transition-all duration-1000 relative z-10 rounded-sm" src="https://i.ibb.co/GQv9NHQZ/l.webp"/>
<div className="absolute inset-0 z-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="bg-[#111] py-24">
<div className="max-w-[1400px] mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="font-heading text-4xl font-semibold uppercase text-white tracking-tight">Why <span className="text-accent">CKO?</span>
</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group p-8 border border-white/5 hover:border-accent/50 bg-black transition-all duration-300 reveal-on-scroll">
<div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-users w-10 h-10" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="font-heading text-xl font-semibold uppercase text-white mb-3 tracking-wide">Instructor Led</h3>
<p className="text-gray-500 text-base leading-relaxed font-light"> Expert instructors guiding you through high-energy kickboxing and calisthenics combinations. </p>
</div>
<div className="group p-8 border border-white/5 hover:border-accent/50 bg-black transition-all duration-300 reveal-on-scroll delay-100">
<div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-music w-10 h-10" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
</div>
<h3 className="font-heading text-xl font-semibold uppercase text-white mb-3 tracking-wide">Pumping Music</h3>
<p className="text-gray-500 text-base leading-relaxed font-light">Curated beats that sync with your movements to keep your adrenaline spiking.</p>
</div>
<div className="group p-8 border border-white/5 hover:border-accent/50 bg-black transition-all duration-300 reveal-on-scroll delay-200">
<div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-activity w-10 h-10" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="font-heading text-xl font-semibold uppercase text-white mb-3 tracking-wide">Full Body</h3>
<p className="text-gray-500 text-base leading-relaxed font-light">Tone muscles, burn fat, and reduce stress in one comprehensive session.</p>
</div>
<div className="group p-8 border border-white/5 hover:border-accent/50 bg-black transition-all duration-300 reveal-on-scroll">
<div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-heart-handshake w-10 h-10" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="font-heading text-xl font-semibold uppercase text-white mb-3 tracking-wide">Community Gym</h3>
<p className="text-gray-500 text-base leading-relaxed font-light">A safe place to workout, make friends, and achieve goals together.</p>
</div>
<div className="group p-8 border border-white/5 hover:border-accent/50 bg-black transition-all duration-300 reveal-on-scroll delay-100">
<div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-scale w-10 h-10" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
</div>
<h3 className="font-heading text-xl font-semibold uppercase text-white mb-3 tracking-wide">Weight Loss</h3>
<p className="text-gray-500 text-base leading-relaxed font-light">Notorious for shedding pounds. Thousands of transformation stories.</p>
</div>
<div className="group p-8 border border-white/5 hover:border-accent/50 bg-black transition-all duration-300 reveal-on-scroll delay-200">
<div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-smile w-10 h-10" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="font-heading text-xl font-semibold uppercase text-white mb-3 tracking-wide">Stress Relief</h3>
<p className="text-gray-500 text-base leading-relaxed font-light">Punch and kick the heavy bag. Finish class feeling EPIC.</p>
</div>
</div>
<div className="mt-12 border border-white/5 bg-[#161616] p-8 md:p-12 reveal-on-scroll">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h3 className="font-heading text-3xl font-semibold uppercase text-white mb-3 tracking-tight"> No Judgment. <span className="text-accent">Just Encouragement.</span>
</h3>
<p className="text-gray-400 text-base font-light leading-relaxed"> Join the CKO FITFAM. Our non-competitive, welcoming community celebrates every member at every fitness level. </p>
</div>
<div>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-base text-gray-200 font-light">
<div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div> Supportive instructors &amp; members
                </li>
<li className="flex items-center gap-3 text-base text-gray-200 font-light">
<div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div> Modifications for all levels
                </li>
<li className="flex items-center gap-3 text-base text-gray-200 font-light">
<div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
<svg aria-hidden="true" className="lucide lucide-check w-4 h-4" data-lucidecheck"="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div> Build lasting friendships
                </li>
</ul>
</div>
</div>
</div>
<div className="text-center mt-12 reveal-on-scroll">
<a className="bg-transparent border border-white/20 hover:border-accent hover:text-accent text-white font-semibold uppercase tracking-[0.2em] py-4 px-12 text-xs transition-all rounded-sm inline-block" href="javascript:void(0)" onclick="redirectToHeroZip()"> Experience The Difference </a>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F5F0] text-black">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center reveal-on-scroll">
<div className="relative p-4 border border-gray-200 bg-white shadow-xl rotate-2 hover:rotate-0 transition-transform duration-500">
<img alt="Member Sarah M." className="w-full h-96 object-cover md:grayscale contrast-110 transition-opacity duration-300" id="testimonial-image" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-8 py-3 shadow-lg border border-gray-100">
<span className="font-heading font-semibold text-xl uppercase tracking-widest whitespace-nowrap" id="testimonial-name-card">Sarah M.</span>
</div>
</div>
<div id="testimonial-container">
<h3 className="font-heading text-4xl font-semibold uppercase mb-2 tracking-tight">Real Results. <span className="text-accent">Real People.</span>
</h3>
<h4 className="font-heading text-xl font-medium uppercase text-gray-500 mb-8 tracking-wide">Success stories from members just like you.</h4>
<div className="min-h-[220px]">
<div className="flex text-accent gap-1 mb-4">
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="16" stroke="none" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<p className="text-gray-700 text-xl md:text-2xl font-light italic leading-relaxed mb-6" id="testimonial-quote">“I was intimidated at first, but the instructors made me feel welcome. Now I’m addicted! I’ve lost 15 pounds and my stress levels are way down.”</p>
<div className="mb-8">
<div className="font-heading font-semibold text-lg uppercase" id="testimonial-author">Sarah M.</div>
<div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-400" id="testimonial-age">Age 42</div>
</div>
</div>
<div className="flex items-center justify-between mt-8 border-t border-gray-200 pt-8">
<div className="flex gap-2">
<button aria-label="Previous testimonial" className="w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors" id="prev-testimonial">
<svg aria-hidden="true" className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button aria-label="Next testimonial" className="w-10 h-10 border border-black rounded-full flex items-center justify-center bg-black text-white hover:bg-accent hover:text-black transition-colors" id="next-testimonial">
<svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="flex flex-col md:flex-row items-end md:items-center gap-4">
<a className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 hover:text-black underline decoration-2 decoration-transparent hover:decoration-accent underline-offset-4 transition-all" href="javascript:void(0)" onclick="redirectToHeroZip()">Read More Success Stories</a>
<a className="bg-accent hover:bg-[#e5b000] text-black font-semibold uppercase tracking-[0.1em] py-3 px-6 text-xs rounded-sm transition-all hover:shadow-lg" href="javascript:void(0)" onclick="redirectToHeroZip()">Book Your Free Class</a>
</div>
</div>
<div aria-label="Testimonial pagination" className="flex gap-2 mt-8">
<button aria-label="Show testimonial 1" className="testimonial-dot w-2.5 h-2.5 rounded-full hover:bg-black/50 transition-colors bg-black" data-index="0" type="button"></button>
<button aria-label="Show testimonial 2" className="testimonial-dot w-2.5 h-2.5 rounded-full bg-black/20 hover:bg-black/50 transition-colors" data-index="1" type="button"></button>
<button aria-label="Show testimonial 3" className="testimonial-dot w-2.5 h-2.5 rounded-full bg-black/20 hover:bg-black/50 transition-colors" data-index="2" type="button"></button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a]">
<div className="max-w-[1100px] mx-auto px-6">
<div className="text-center mb-14 reveal-on-scroll">
<div className="text-xs uppercase tracking-[0.3em] text-accent font-semibold mb-3">FAQ</div>
<h2 className="font-heading text-4xl md:text-5xl font-semibold uppercase tracking-tight">Your First Class, Answered</h2>
<p className="text-gray-400 text-base md:text-lg font-light mt-4 max-w-2xl mx-auto"> Everything you need to feel confident walking in—and walking out stronger. </p>
</div>
<div className="space-y-4">
<details className="group border border-white/10 bg-black p-6 rounded-sm reveal-on-scroll">
<summary className="cursor-pointer list-none flex items-center justify-between gap-6">
<span className="font-heading uppercase text-lg tracking-wide">Do I need experience?</span>
<span className="text-accent group-open:rotate-45 transition-transform">
<svg aria-hidden="true" className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="text-gray-400 text-base font-light leading-relaxed mt-4"> Not at all. Classes are beginner-friendly, and instructors provide modifications and quick technique cues throughout. </p>
</details>
<details className="group border border-white/10 bg-black p-6 rounded-sm reveal-on-scroll delay-100">
<summary className="cursor-pointer list-none flex items-center justify-between gap-6">
<span className="font-heading uppercase text-lg tracking-wide">What should I wear?</span>
<span className="text-accent group-open:rotate-45 transition-transform">
<svg aria-hidden="true" className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="text-gray-400 text-base font-light leading-relaxed mt-4"> Comfortable workout clothes and athletic shoes. Bring water. If you don’t have gloves, ask your studio about rentals or purchase options. </p>
</details>
<details className="group border border-white/10 bg-black p-6 rounded-sm reveal-on-scroll delay-200">
<summary className="cursor-pointer list-none flex items-center justify-between gap-6">
<span className="font-heading uppercase text-lg tracking-wide">Is the first class really free?</span>
<span className="text-accent group-open:rotate-45 transition-transform">
<svg aria-hidden="true" className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="text-gray-400 text-base font-light leading-relaxed mt-4"> Yes. Your first class is free for new guests (studio participation may vary). You’re welcome to decide what’s next after you try it. </p>
</details>
<details className="group border border-white/10 bg-black p-6 rounded-sm reveal-on-scroll delay-300">
<summary className="cursor-pointer list-none flex items-center justify-between gap-6">
<span className="font-heading uppercase text-lg tracking-wide">How early should I arrive?</span>
<span className="text-accent group-open:rotate-45 transition-transform">
<svg aria-hidden="true" className="lucide lucide-plus w-5 h-5" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</summary>
<p className="text-gray-400 text-base font-light leading-relaxed mt-4"> Arrive 10 minutes early for your first class. We’ll get you checked in and set up with a bag station. </p>
</details>
</div>
<div className="text-center mt-12 reveal-on-scroll">
<a className="bg-accent hover:bg-[#e5b000] text-black font-semibold uppercase tracking-[0.2em] py-4 px-10 text-xs rounded-sm transition-all inline-flex items-center gap-2 group" href="javascript:void(0)" onclick="redirectToHeroZip()"> Book Now <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10">
<div className="max-w-[1400px] mx-auto px-6 py-14">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
<div>
<div className="leading-none text-3xl font-semibold italic text-white tracking-tighter font-heading">CKO</div>
<div className="text-xs text-accent uppercase leading-none font-semibold tracking-[0.3em] mt-2">Kickboxing</div>
<p className="text-gray-500 text-base font-light leading-relaxed mt-6 max-w-sm"> High-energy kickboxing classes for every level. Hit the bags, sweat hard, and leave feeling unstoppable. </p>
</div>
<div>
<div className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-4">Explore</div>
<ul className="space-y-3 text-base text-gray-400 font-light">
<li>
<a className="hover:text-accent transition-colors" href="javascript:void(0)" onclick="redirectToHeroZip()">Home</a>
</li>
<li>
<a className="hover:text-accent transition-colors" href="javascript:void(0)" onclick="redirectToHeroZip()">Book a Class</a>
</li>
<li>
<a className="hover:text-accent transition-colors" href="javascript:void(0)" onclick="redirectToHeroZip()">Memberships</a>
</li>
</ul>
</div>
<div>
<div className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-4">Contact</div>
<ul className="space-y-3 text-base text-gray-400 font-light">
<li className="flex items-center gap-3">
<span className="text-accent">
<svg aria-hidden="true" className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</span>
<a className="hover:text-accent transition-colors" href="javascript:void(0)" onclick="redirectToHeroZip()">(555) 123-4567</a>
</li>
<li className="flex items-center gap-3">
<span className="text-accent">
<svg aria-hidden="true" className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</span>
<a className="hover:text-accent transition-colors" href="javascript:void(0)" onclick="redirectToHeroZip()">hello@ckokickboxing.com</a>
</li>
<li className="flex items-center gap-3">
<span className="text-accent">
<svg aria-hidden="true" className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</span>
<button className="text-left hover:text-accent transition-colors" onclick="redirectToHeroZip()" type="button">Find your nearest studio</button>
</li>
</ul>
</div>
<div>
<div className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-4">Follow</div>
<div className="flex items-center gap-3">
<a aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-accent/50 hover:bg-white/10 transition-all flex items-center justify-center" href="javascript:void(0)" onclick="redirectToHeroZip()">
<svg aria-hidden="true" className="lucide lucide-instagram w-5 h-5 text-gray-200" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-accent/50 hover:bg-white/10 transition-all flex items-center justify-center" href="javascript:void(0)" onclick="redirectToHeroZip()">
<svg aria-hidden="true" className="lucide lucide-facebook w-5 h-5 text-gray-200" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="YouTube" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-accent/50 hover:bg-white/10 transition-all flex items-center justify-center" href="javascript:void(0)" onclick="redirectToHeroZip()">
<svg aria-hidden="true" className="lucide lucide-youtube w-5 h-5 text-gray-200" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
</div>
<div className="mt-8">
<div className="text-xs uppercase tracking-[0.25em] text-gray-400 font-semibold mb-3">Newsletter</div>
<form action="javascript:void(0)" className="flex gap-2" onsubmit="redirectToHeroZip()">
<label className="sr-only" htmlFor="newsletter">Email</label>
<input className="w-full h-11 bg-white/5 border border-white/10 focus:border-accent/70 focus:outline-none rounded-sm px-4 text-sm text-white placeholder:text-gray-500" id="newsletter" placeholder="Email address" type="email"/>
<button className="h-11 px-5 bg-accent hover:bg-[#e5b000] text-black font-heading font-semibold uppercase tracking-wider rounded-sm transition-colors" type="submit"> Join </button>
</form>
<p className="text-xstext-gray-500 font-light mt-2">By signing up, you agree to our Terms and Privacy Policy.</p>
</div>
</div>
</div>
<div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-500 font-light">© 2024 CKO Kickboxing. All rights reserved.</p>
<div className="flex gap-6 text-xs text-gray-500 font-light">
<a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="redirectToHeroZip()">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="redirectToHeroZip()">Terms of Service</a>
<a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="redirectToHeroZip()">Cookie Settings</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
