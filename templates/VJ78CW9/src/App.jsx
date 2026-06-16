import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'work': ['Work Sans', 'sans-serif'],
                        'manrope': ['Manrope', 'sans-serif'],
                    },
                    colors: {
                        'finance-aqua': '#06B6D4',
                        'finance-blue': '#0F172A',
                        'finance-green': '#10B981',
                    }
                }
            }
        }
    


        document.addEventListener('DOMContentLoaded', () => {
            // Initialize ParticlesJS with aqua theme
            particlesJS('particles-js', {
                particles: {
                    number: { value: 60, density: { enable: true, value_area: 800 } },
                    color: { value: "#06B6D4" },
                    shape: { type: "circle" },
                    opacity: { value: 0.3, random: false },
                    size: { value: 2, random: true },
                    line_linked: { enable: true, distance: 150, color: "#06B6D4", opacity: 0.2, width: 1 },
                    move: { enable: true, speed: 3, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                    modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 2 } }
                },
                retina_detect: true
            });

            const sections = document.querySelectorAll('.section');
            const dots = document.querySelectorAll('.progress-dot');
            const magneticElements = document.querySelectorAll('.magnetic');
            let currentIndex = 0;
            let isScrolling = false;
            let touchStartY = 0;
            
            updateActiveDot(currentIndex);
            
            magneticElements.forEach(el => {
                el.addEventListener('mousemove', (e) => {
                    const rect = el.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
                });
                
                el.addEventListener('mouseleave', () => {
                    el.style.transform = 'translate(0px, 0px)';
                });
            });
            
            window.addEventListener('wheel', (e) => {
                if (isScrolling) return;
                
                isScrolling = true;
                if (e.deltaY > 0) {
                    if (currentIndex < sections.length - 1) {
                        currentIndex++;
                        changeSection(currentIndex);
                    }
                } else {
                    if (currentIndex > 0) {
                        currentIndex--;
                        changeSection(currentIndex);
                    }
                }
                
                setTimeout(() => {
                    isScrolling = false;
                }, 1200);
            });
            
            document.addEventListener('touchstart', (e) => {
                touchStartY = e.touches[0].clientY;
            });
            
            document.addEventListener('touchend', (e) => {
                if (isScrolling) return;
                
                const touchEndY = e.changedTouches[0].clientY;
                const diff = touchStartY - touchEndY;
                
                isScrolling = true;
                if (diff > 50) {
                    if (currentIndex < sections.length - 1) {
                        currentIndex++;
                        changeSection(currentIndex);
                    }
                } else if (diff < -50) {
                    if (currentIndex > 0) {
                        currentIndex--;
                        changeSection(currentIndex);
                    }
                }
                
                setTimeout(() => {
                    isScrolling = false;
                }, 1200);
            });
            
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const index = parseInt(dot.getAttribute('data-index'));
                    currentIndex = index;
                    changeSection(currentIndex);
                });
            });
            
            function changeSection(index) {
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                
                sections[index].classList.add('active');
                updateActiveDot(index);
                
                const reveals = sections[index].querySelectorAll('.reveal');
                reveals.forEach((el, i) => {
                    setTimeout(() => {
                        el.classList.add('active');
                    }, i * 150);
                });
                
                sections.forEach((section, i) => {
                    if (i !== index) {
                        const otherReveals = section.querySelectorAll('.reveal');
                        otherReveals.forEach(el => {
                            el.classList.remove('active');
                        });
                    }
                });
            }
            
            function updateActiveDot(index) {
                dots.forEach(dot => {
                    dot.classList.remove('active');
                });
                dots[index].classList.add('active');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50">
<div className="text-4xl font-work font-light tracking-wide magnetic glitch text-finance-aqua" data-text="APEX">APEX</div>
<div className="space-x-12 hidden md:block font-manrope text-lg">
<a className="magnetic hover:text-finance-aqua transition-all duration-300 hover:scale-110" href="#">Services</a>
<a className="magnetic hover:text-finance-aqua transition-all duration-300 hover:scale-110" href="#">Insights</a>
<a className="magnetic hover:text-finance-aqua transition-all duration-300 hover:scale-110" href="#">Contact</a>
</div>
<div className="md:hidden">
<button className="text-3xl magnetic text-finance-aqua">☰</button>
</div>
</nav>

<div className="progress-bar">
<div className="progress-dot" data-index="0"></div>
<div className="progress-dot" data-index="1"></div>
<div className="progress-dot" data-index="2"></div>
<div className="progress-dot" data-index="3"></div>
</div>

<section className="section active bg-slate-900" data-index="0">
<div id="particles-js"></div>
<div className="content-overlay container mx-auto h-full flex flex-col justify-center px-8">
<h1 className="font-work font-light heading-tight mb-8 reveal active glitch" data-text="Wealth Management" style={{fontSize: 'clamp(96px, 12vw, 140px)', lineHeight: '0.85'}}>
<span className="text-gradient">Wealth</span><br/>Management
            </h1>
<p className="font-manrope text-gray-300 max-w-3xl reveal active" style={{fontSize: '24px', lineHeight: '1.4', transitionDelay: '0.2s'}}>
                Elite financial strategies designed for sophisticated investors. We create personalized wealth solutions that preserve and grow your assets across generations.
            </p>
<div className="flex items-center space-x-12 mt-12 reveal active" style={{transitionDelay: '0.3s'}}>
<div className="text-center">
<div className="text-4xl font-work font-light text-finance-aqua number-counter">$2.4B</div>
<div className="text-sm text-gray-400 font-manrope">Assets Under Management</div>
</div>
<div className="text-center">
<div className="text-4xl font-work font-light text-finance-aqua number-counter">15%</div>
<div className="text-sm text-gray-400 font-manrope">Average Annual Return</div>
</div>
<div className="text-center">
<div className="text-4xl font-work font-light text-finance-aqua number-counter">500+</div>
<div className="text-sm text-gray-400 font-manrope">Elite Clients</div>
</div>
</div>
<div className="mt-16 reveal active" style={{transitionDelay: '0.4s'}}>
<button className="border-2 border-finance-aqua px-12 py-4 font-manrope hover:bg-finance-aqua hover:text-slate-900 transition-all duration-500 pulse-btn magnetic text-lg tracking-wide">
                    Schedule Consultation
                </button>
</div>
</div>
</section>
<section className="section bg-slate-800" data-index="1">
<div className="container mx-auto h-full flex flex-col justify-center px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-work font-light heading-tight mb-8 reveal glitch" data-text="Portfolio Growth" style={{fontSize: 'clamp(64px, 8vw, 88px)', lineHeight: '0.9'}}>Portfolio Growth</h2>
<p className="font-manrope text-gray-300 mb-12 reveal" style={{fontSize: '20px', lineHeight: '1.5', transitionDelay: '0.2s'}}>
                        Our proprietary investment strategies have consistently outperformed market benchmarks, delivering exceptional returns while managing risk through sophisticated portfolio optimization.
                    </p>
<div className="space-y-6 reveal" style={{transitionDelay: '0.4s'}}>
<div className="flex justify-between items-center">
<span className="font-manrope">5-Year Return</span>
<span className="text-finance-green font-work font-light">+127%</span>
</div>
<div className="flex justify-between items-center">
<span className="font-manrope">Risk-Adjusted Return</span>
<span className="text-finance-green font-work font-light">2.8 Sharpe</span>
</div>
<div className="flex justify-between items-center">
<span className="font-manrope">Max Drawdown</span>
<span className="text-finance-aqua font-work font-light">-4.2%</span>
</div>
</div>
</div>
<div className="reveal floating" style={{transitionDelay: '0.3s'}}>
<div className="glass-effect p-8 rounded-2xl interactive-card relative overflow-hidden">
<h3 className="font-work font-light text-2xl mb-6 text-finance-aqua">Growth Chart</h3>
<div className="flex items-end space-x-3 h-64">
<div className="bg-finance-aqua w-8 chart-bar" style={{height: '40%', transformOrigin: 'bottom'}}></div>
<div className="bg-finance-aqua w-8 chart-bar" style={{height: '60%', transformOrigin: 'bottom', animationDelay: '0.2s'}}></div>
<div className="bg-finance-aqua w-8 chart-bar" style={{height: '75%', transformOrigin: 'bottom', animationDelay: '0.4s'}}></div>
<div className="bg-finance-aqua w-8 chart-bar" style={{height: '55%', transformOrigin: 'bottom', animationDelay: '0.6s'}}></div>
<div className="bg-finance-aqua w-8 chart-bar" style={{height: '85%', transformOrigin: 'bottom', animationDelay: '0.8s'}}></div>
<div className="bg-finance-aqua w-8 chart-bar" style={{height: '95%', transformOrigin: 'bottom', animationDelay: '1s'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="section bg-slate-700" data-index="2">
<div className="container mx-auto h-full flex flex-col justify-center px-8">
<h2 className="font-work font-light heading-tight mb-16 text-center reveal glitch" data-text="Our Services" style={{fontSize: 'clamp(64px, 8vw, 88px)', lineHeight: '0.9'}}>Our Services</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="glass-effect p-8 rounded-2xl interactive-card reveal" style={{transitionDelay: '0.2s'}}>
<div className="text-6xl mb-6">📈</div>
<h3 className="font-work font-light heading-tight mb-6 text-3xl text-finance-aqua">Investment Advisory</h3>
<p className="font-manrope text-gray-300 text-lg leading-relaxed">Sophisticated investment strategies tailored to your risk profile and financial objectives, leveraging institutional-grade research and analytics.</p>
</div>
<div className="glass-effect p-8 rounded-2xl interactive-card reveal" style={{transitionDelay: '0.3s'}}>
<div className="text-6xl mb-6">🏛️</div>
<h3 className="font-work font-light heading-tight mb-6 text-3xl text-finance-aqua">Private Banking</h3>
<p className="font-manrope text-gray-300 text-lg leading-relaxed">Exclusive banking services for high-net-worth individuals, including credit facilities, currency exchange, and liquidity management solutions.</p>
</div>
<div className="glass-effect p-8 rounded-2xl interactive-card reveal" style={{transitionDelay: '0.4s'}}>
<div className="text-6xl mb-6">⚖️</div>
<h3 className="font-work font-light heading-tight mb-6 text-3xl text-finance-aqua">Estate Planning</h3>
<p className="font-manrope text-gray-300 text-lg leading-relaxed">Comprehensive wealth transfer strategies designed to minimize tax obligations while preserving family legacy across generations.</p>
</div>
</div>
</div>
</section>
<section className="section bg-slate-900" data-index="3">
<div className="container mx-auto h-full flex flex-col justify-center items-center px-8 text-center">
<h2 className="font-work font-light heading-tight mb-8 reveal glitch floating" data-text="Begin Your Journey" style={{fontSize: 'clamp(64px, 8vw, 88px)', lineHeight: '0.9'}}>Begin Your Journey</h2>
<p className="font-manrope text-gray-300 max-w-4xl mb-16 reveal" style={{fontSize: '22px', lineHeight: '1.5', transitionDelay: '0.2s'}}>
                Join an exclusive community of sophisticated investors who trust us with their most important financial decisions. Schedule a confidential consultation today.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 reveal" style={{transitionDelay: '0.3s'}}>
<div className="glass-effect p-6 rounded-xl">
<div className="text-3xl font-work font-light text-finance-aqua">24/7</div>
<div className="text-sm text-gray-400">Portfolio Monitoring</div>
</div>
<div className="glass-effect p-6 rounded-xl">
<div className="text-3xl font-work font-light text-finance-aqua">$1M</div>
<div className="text-sm text-gray-400">Minimum Investment</div>
</div>
<div className="glass-effect p-6 rounded-xl">
<div className="text-3xl font-work font-light text-finance-aqua">1:1</div>
<div className="text-sm text-gray-400">Client Advisor Ratio</div>
</div>
</div>
<div className="reveal" style={{transitionDelay: '0.4s'}}>
<button className="bg-finance-aqua text-slate-900 px-16 py-5 font-manrope hover:bg-cyan-400 transition-all duration-500 pulse-btn magnetic text-xl tracking-wide rounded-full">
                    Get Started Today
                </button>
</div>
</div>
</section>


    </>
  );
}
