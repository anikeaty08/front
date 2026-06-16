import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#60a5fa',
                        primaryHover: '#93c5fd',
                        darkBg: '#0f172a',
                        darkHeader: '#1e293b',
                        darkText: '#e2e8f0',
                        darkSecondary: '#94a3b8',
                        darkBorder: '#334155'
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif']
                    }
                }
            }
        }
    


        document.addEventListener('DOMContentLoaded', () => {
            new WOW({
                boxClass: 'wow',
                animateClass: 'animate__animated',
                offset: 50,
                mobile: true,
                live: true
            }).init();

            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    header.classList.add('py-2', 'shadow-md', 'backdrop-blur-md', 'bg-opacity-85');
                } else {
                    header.classList.remove('py-2', 'shadow-md', 'backdrop-blur-md', 'bg-opacity-85');
                }
            });

            window.scrollToNextSection = function() {
                console.log("Scroll indicator clicked");
            };
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="fixed top-0 left-0 right-0 z-50 bg-darkHeader border-b border-darkBorder transition-all duration-300" id="header">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300" href="index.html">
                MODERN<span className="opacity-70">SOLUTIONS</span>
</a>

</div>
</header>
<main>
<section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden border-b border-darkBorder pt-24">
<div className="hero-gradient absolute inset-0 opacity-60"></div>
<div className="relative z-10 max-w-4xl px-6">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-primaryHover wow animate__animated animate__fadeInDown" data-wow-delay="0.3s" data-wow-duration="1s">
                    Elevate Your Digital <span className="text-primary inline-block">Experience</span>.
                </h1>
<p className="text-lg md:text-xl text-darkSecondary mb-12 max-w-2xl mx-auto leading-relaxed wow animate__animated animate__fadeInUp" data-wow-delay="0.6s" data-wow-duration="1s">
                    Discover innovative solutions designed to transform your workflow and drive unprecedented growth. Experience the next generation of digital excellence.
                </p>
<div className="flex flex-wrap gap-4 justify-center wow animate__animated animate__fadeInUp" data-wow-delay="0.9s" data-wow-duration="1s">
<a className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-darkBg font-semibold uppercase tracking-wider text-sm md:text-base shadow-md hover:bg-primaryHover hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-103 group" href="features.html">
<i className="fas fa-rocket mr-2 text-lg transition-transform duration-200 group-hover:scale-110 group-hover:-translate-x-1"></i>
<span>Get Started</span>
</a>
<a className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-transparent text-primary border-2 border-primary font-semibold uppercase tracking-wider text-sm md:text-base hover:bg-opacity-10 hover:bg-primary hover:border-primaryHover hover:text-primaryHover transition-all duration-300 transform hover:-translate-y-1 hover:scale-103 hover:shadow-md group" href="contact.html">
<span>Learn More</span>
<i className="fas fa-arrow-right ml-2 text-lg transition-transform duration-200 group-hover:scale-110 group-hover:translate-x-1"></i>
</a>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-darkSecondary opacity-70 hover:opacity-100 transition-all duration-300 cursor-pointer hover:scale-110 wow animate__animated animate__fadeIn" data-wow-delay="1.5s" data-wow-duration="1s" onclick="scrollToNextSection()">
<i className="fas fa-chevron-down text-3xl bounce-arrow"></i>
</div>
</section>
</main>



    </>
  );
}
