import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        darkBlue: {
                            900: '#0f172a',
                            800: '#112240',
                            700: '#1a3257',
                            600: '#1e293b'
                        },
                        accent: {
                            DEFAULT: '#60a5fa',
                            hover: '#93c5fd'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif']
                    },
                    animation: {
                        'gradient-x': 'gradient 25s ease infinite alternate',
                    },
                    keyframes: {
                        gradient: {
                            '0%': { 'background-position': '0% 50%' },
                            '50%': { 'background-position': '100% 50%' },
                            '100%': { 'background-position': '0% 50%' }
                        }
                    }
                }
            }
        }
    


        document.addEventListener('DOMContentLoaded', () => {
            new WOW({
                boxClass: 'wow',
                animateClass: 'animate__animated',
                offset: 10,
                mobile: true,
                live: true
            }).init();
            console.log("Hero-Style CTA Section Initialized (Corrected Styles).");
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="flex-grow flex flex-col">
<section className="relative flex-grow flex items-center justify-center py-24 px-5 overflow-hidden bg-gradient-to-br from-darkBlue-700 via-darkBlue-800 to-darkBlue-900" id="cta">

<div className="absolute inset-0 gradient-overlay opacity-25 hover:opacity-35 transition-opacity duration-700 z-0"></div>
<div className="container max-w-4xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight text-center animate__animated animate__fadeInUp" style={{animationDuration: '0.8s', animationDelay: '0.1s', textShadow: '0 2px 8px rgba(0,0,0,0.3)'}}>
                    Ready to Transform Your Vision into Reality?
                </h2>
<p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto text-center leading-relaxed mb-12 animate__animated animate__fadeInUp" style={{animationDuration: '0.8s', animationDelay: '0.2s'}}>
                    Don't wait to innovate. Partner with us and experience the future of digital solutions, tailored precisely to your needs. Let's start building something extraordinary today.
                </p>
<div className="flex flex-wrap justify-center gap-5 animate__animated animate__fadeInUp" style={{animationDuration: '0.8s', animationDelay: '0.35s'}}>
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold uppercase tracking-wider bg-accent text-darkBlue-900 rounded-full shadow-md hover:bg-accent-hover hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-[0.99]" href="contact.html">
<i className="fas fa-rocket mr-3 text-xl"></i>Get Started Now
                    </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold uppercase tracking-wider bg-transparent text-white border-2 border-white rounded-full shadow-md hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:translate-y-0 active:scale-[0.99]" href="services.html">
                        Explore Services
                    </a>
</div>
</div>
</section>
</main>



    </>
  );
}
