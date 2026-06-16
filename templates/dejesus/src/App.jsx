import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


!function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.36/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();


        (function() {
            const container = document.getElementById('card-orbit-container');
            if (!container) return;
            
            const cards = Array.from(container.querySelectorAll('.orbit-card'));
            const totalCards = cards.length;
            
            let animationTime = 0;
            const speed = 0.0006; 
            
            function updateOrbit() {
                animationTime += speed;
                
                const containerWidth = container.offsetWidth;
                const containerHeight = container.offsetHeight;
                const centerX = containerWidth / 2;
                const centerY = containerHeight * 0.6;
                
                // Ellipse dimensions based on container width
                const radiusX = Math.min(containerWidth * 0.40, 380);
                const radiusY = Math.min(containerHeight * 0.30, 120);
                
                cards.forEach((card, index) => {
                    const angleOffset = (index / totalCards) * Math.PI * 2;
                    const angle = animationTime + angleOffset;
                    
                    const x = centerX + Math.cos(angle) * radiusX;
                    const y = centerY + Math.sin(angle) * radiusY;
                    
                    // Depth defines scale, z-index, opacity and blur
                    const depth = Math.sin(angle);
                    const scale = 0.85 + (depth + 1) * 0.15;
                    const zIndex = Math.round(50 + depth * 50);
                    
                    const rotation = Math.cos(angle) * 8; // subtle tilt
                    
                    let opacity, blur;
                    if (depth < -0.6) {
                        opacity = 0;
                        blur = 6;
                    } else if (depth < 0) {
                        opacity = 0.4 + (depth + 0.6) * 1.0;
                        blur = Math.abs(depth) * 4;
                    } else {
                        opacity = 0.7 + depth * 0.3;
                        blur = 0;
                    }
                    
                    card.style.left = x + 'px';
                    card.style.top = y + 'px';
                    card.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${scale})`;
                    card.style.opacity = opacity;
                    card.style.zIndex = zIndex;
                    card.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
                });
                
                requestAnimationFrame(updateOrbit);
            }
            
            updateOrbit();
        })();
    


        window.addEventListener("load", () => {
            gsap.registerPlugin(ScrollTrigger);

            // General GSAP Fade Up Animations
            gsap.utils.toArray('.gsap-fade-up').forEach(element => {
                gsap.fromTo(element, 
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1.2, ease: "power3.out",
                      scrollTrigger: {
                          trigger: element,
                          start: "top 85%",
                      }
                    }
                );
            });

            // Native DOM/GSAP Implementation of the Column Slide & Blur Animation
            document.querySelectorAll('.image-anim-container').forEach(container => {
                if(container.classList.contains('initialized')) return;
                container.classList.add('initialized');

                const img = container.querySelector('img');
                const src = img.src;
                const alt = img.alt;
                
                // Hide the original image
                img.style.display = 'none';

                // Remove any pre-rendered duplicate nodes to ensure clean execution
                container.querySelectorAll('div.absolute').forEach(el => el.remove());

                const cols = 4;

                for(let i = 0; i < cols; i++) {
                    const wrapper = document.createElement('div');
                    wrapper.className = 'absolute inset-0 overflow-hidden';
                    
                    // Create vertical slices using clip-path
                    const left = (i / cols) * 100;
                    const right = 100 - ((i + 1) / cols) * 100;
                    wrapper.style.clipPath = `inset(0 ${right}% 0 ${left}%)`;
                    wrapper.style.webkitClipPath = `inset(0 ${right}% 0 ${left}%)`;

                    const innerImg = document.createElement('img');
                    innerImg.src = src;
                    innerImg.alt = alt;
                    innerImg.className = 'absolute w-full object-cover';
                    
                    // Make image taller to prevent empty edges during scroll translation
                    innerImg.style.height = '140%';
                    innerImg.style.top = '-20%';
                    innerImg.style.left = '0';

                    wrapper.appendChild(innerImg);
                    container.appendChild(wrapper);

                    // Y Parallax animation
                    gsap.fromTo(innerImg,
                        { yPercent: (i % 2 === 0) ? -15 : -5 },
                        {
                            yPercent: (i % 2 === 0) ? 15 : 5,
                            ease: "none",
                            scrollTrigger: {
                                trigger: container,
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true,
                            }
                        }
                    );

                    // Scroll-based Blur effect for columns
                    gsap.fromTo(innerImg,
                        { filter: "blur(12px) brightness(0.9)" },
                        {
                            filter: "blur(0px) brightness(1)",
                            ease: "power2.out",
                            scrollTrigger: {
                                trigger: container,
                                start: "top 95%",
                                end: "center center",
                                scrub: true,
                            }
                        }
                    );
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative z-10 flex items-center justify-between px-6 py-5 border-b border-[#cdc9c1] lg:px-12">
<nav className="flex items-center gap-8">
<a className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans" href="#">Services</a>
<a className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans" href="#">Process</a>
<a className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans" href="#">Portfolio</a>
<a className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans" href="#">Reviews</a>
<a className="text-sm font-medium hover:text-[#8c7b66] transition-colors font-sans hidden sm:flex" href="#">About Us</a>
</nav>
<a className="flex items-center gap-1 text-sm font-semibold border-b border-[#3b3631] pb-0.5 hover:text-[#8c7b66] hover:border-[#8c7b66] transition-all font-sans hidden sm:flex" href="#contact">
            FREE CONSULTATION <iconify-icon height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</a>
</header>

<section className="relative pt-12 pb-24 overflow-hidden z-10">

<h1 className="gsap-fade-up absolute top-0 w-full text-center text-9xl tracking-tighter text-[#3b3631] select-none z-0 mt-8 opacity-10 font-google-sans-flex font-normal" style={{fontSize: '18vw', lineHeight: '0.8'}}>
            DEJESUS<sup className="text-5xl align-top font-google-sans-flex font-normal">®</sup>
</h1>

<div className="image-anim-container relative z-10 mx-auto w-11/12 max-w-7xl mt-24 lg:mt-32 shadow-2xl bg-[#dfdcd5] h-[60vh] overflow-hidden initialized">
<img alt="Modern Architecture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4514c63-6bbd-4f90-a84b-21d5681df87d_1600w.jpg" style={{display: 'none'}}/>
<div className="absolute inset-0 overflow-hidden" style={{clipPath: 'inset(0px 75% 0px 0%)'}}><img alt="Modern Architecture" className="absolute w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4514c63-6bbd-4f90-a84b-21d5681df87d_1600w.jpg" style={{height: '140%', top: '-20%', left: '0px', filter: 'blur(0px) brightness(1)'}}/></div><div className="absolute inset-0 overflow-hidden" style={{clipPath: 'inset(0px 50% 0px 25%)'}}><img alt="Modern Architecture" className="absolute w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4514c63-6bbd-4f90-a84b-21d5681df87d_1600w.jpg" style={{height: '140%', top: '-20%', left: '0px', filter: 'blur(0px) brightness(1)'}}/></div><div className="absolute inset-0 overflow-hidden" style={{clipPath: 'inset(0px 25% 0px 50%)'}}><img alt="Modern Architecture" className="absolute w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4514c63-6bbd-4f90-a84b-21d5681df87d_1600w.jpg" style={{height: '140%', top: '-20%', left: '0px', filter: 'blur(0px) brightness(1)'}}/></div><div className="absolute inset-0 overflow-hidden" style={{clipPath: 'inset(0px 0% 0px 75%)'}}><img alt="Modern Architecture" className="absolute w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e4514c63-6bbd-4f90-a84b-21d5681df87d_1600w.jpg" style={{height: '140%', top: '-20%', left: '0px', filter: 'blur(0px) brightness(1)'}}/></div></div>

<div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24">
<h2 className="gsap-fade-up text-3xl lg:text-5xl tracking-tight leading-tight max-w-4xl font-google-sans-flex font-normal">
                We commit ourselves entirely to our partners and the solutions we deliver, bringing <span className="text-[#8c7b66] font-google-sans-flex font-normal">unmatched expertise.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-24 items-start">
<div className="gsap-fade-up md:col-span-3">
<span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase border border-[#cdc9c1] px-3 py-1 rounded-sm font-sans">
<span className="w-1.5 h-1.5 bg-[#3b3631] rounded-full"></span> Our Identity
                    </span>
</div>
<div className="gsap-fade-up md:col-span-6 flex flex-col gap-6">
<p className="text-base text-[#6b645c] leading-relaxed max-w-md font-sans">
                        We are a comprehensive property consultancy specializing in residential and commercial assets. With profound regional insights and a partner-centric philosophy, we navigate buyers and investors through every phase of the real estate cycle.
                    </p>
<div className="">
<a className="inline-flex items-center gap-1 text-sm font-semibold border-b border-[#3b3631] pb-0.5 hover:text-[#8c7b66] hover:border-[#8c7b66] transition-all font-sans" href="#contact">
                            CONNECT WITH US <iconify-icon height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</a>
</div>
</div>
<div className="gsap-fade-up md:col-span-3 text-right">
<p className="text-7xl tracking-tighter font-google-sans-flex font-normal">750+</p>
</div>
</div>

<div className="gsap-fade-up flex flex-wrap items-center justify-between gap-8 mt-32 text-xs font-semibold tracking-wider text-[#8c7b66] uppercase">
<p className="font-sans">BEYOND CONVENTIONAL REAL ESTATE.</p>
<div className="flex gap-4">
<img alt="Detail 1" className="w-32 h-20 object-cover bg-[#dfdcd5]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab939642-9744-4d1b-9924-388870efcac0_320w.webp"/>
<img alt="Detail 2" className="w-32 h-20 object-cover bg-[#dfdcd5]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4367c447-b57a-4fe0-832f-8b5e61a0252d_320w.webp"/>
<img alt="Detail 3" className="w-32 h-20 object-cover bg-[#dfdcd5]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b28eb2bd-1d0c-426c-b984-b9828cd8a5ea_320w.webp"/>
</div>
<p className="font-sans">WE FORGE TRUST.</p>
</div>
</div>
</section>

<section className="relative bg-[#3b3631] text-[#ece9e4] pt-24 pb-32 z-10 overflow-hidden">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="gsap-fade-up flex flex-col md:flex-row justify-between items-start md:items-center mb-24 gap-6">
<h2 className="text-4xl md:text-5xl tracking-tight uppercase max-w-2xl leading-tight font-google-sans-flex font-normal">
                    Flawless finishes for luxury residences
                </h2>
<span className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase border border-[#6b645c] px-3 py-1.5 rounded-full font-sans">
<span className="w-1.5 h-1.5 bg-[#ece9e4] rounded-full"></span> Our Expertise
                </span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 gap-x-16 gap-y-16">
<div className="flex flex-col gap-12 gap-x-12 gap-y-12">
<h3 className="gsap-fade-up leading-snug text-3xl font-normal text-[#a69c91] tracking-tight font-google-sans-flex max-w-md">
            Delivering high-quality finishes <span className="text-[#ece9e4] font-google-sans-flex font-normal">with strong attention to detail</span> and seamless execution.
        </h3>

<div className="gsap-fade-up relative max-w-sm">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#a69c91]" height="16" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
<input className="w-full bg-transparent border border-[#6b645c] rounded-full py-3 pl-12 pr-4 text-sm text-[#ece9e4] placeholder-[#a69c91] focus:outline-none focus:border-[#8c7b66] transition-colors" placeholder="Search services..." type="text"/>
</div>
<div className="gsap-fade-up flex items-center gap-8 mt-8">
<div className="bg-[#322d28] border border-[#4a453f] rounded-lg p-4 flex flex-col gap-2">
<span className="text-xs text-[#a69c91] font-medium font-sans">California License</span>
<div className="flex items-center gap-2 font-semibold text-lg tracking-tight font-sans">
<iconify-icon height="20" icon="solar:hexagon-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
                    LIC. 1057752
                </div>
</div>
<div className="flex-1">
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 rounded-full border border-[#8c7b66]/50 bg-[#8c7b66]/20 text-[#ece9e4] text-xs font-medium font-sans">INTERIOR</span>
<span className="px-3 py-1 rounded-full border border-[#6b645c] text-[#a69c91] text-xs font-medium hover:border-[#8c7b66] transition-colors cursor-pointer font-sans">EXTERIOR</span>
<span className="px-3 py-1 rounded-full border border-[#6b645c] text-[#a69c91] text-xs font-medium hover:border-[#8c7b66] transition-colors cursor-pointer font-sans">TRIM &amp; MOLDING</span>
<span className="px-3 py-1 rounded-full border border-[#6b645c] text-[#a69c91] text-xs font-medium hover:border-[#8c7b66] transition-colors cursor-pointer font-sans">STAINING</span>
</div>
<p className="text-sm text-[#a69c91] leading-relaxed mb-4 max-w-sm font-sans">
                    We specialize exclusively in residential painting throughout San Diego County. From start to finish, we ensure a seamless, professional experience.
                </p>
<a className="inline-flex items-center gap-1 text-xs font-semibold text-[#8c7b66] border-b border-[#8c7b66]/50 pb-0.5 hover:border-[#8c7b66] transition-all uppercase tracking-wider font-sans" href="#">
                    View Our Portfolio <iconify-icon height="12" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}} width="12"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="gsap-fade-up relative w-full aspect-square max-w-md ml-auto flex items-center justify-center opacity-70">
<div className="grid grid-cols-12 gap-2 w-full h-full rotate-12 scale-110">
<div className="col-span-12 h-1 border-b border-dashed border-[#544e47]"></div>
<div className="col-span-12 h-1 border-b border-dashed border-[#544e47]"></div>
<div className="col-span-12 h-1 border-b border-dashed border-[#544e47]"></div>
<div className="col-span-12 h-1 border-b border-dashed border-[#544e47]"></div>
<div className="col-span-12 h-1 border-b border-dashed border-[#544e47]"></div>
<div className="bg-gradient-to-tr from-[#3b3631] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="Jv9KbHuCYWf4sr35MmdO"></div>

</div>
<iconify-icon className="-translate-x-1/2 -translate-y-1/2 text-[#544e47] absolute top-1/2 left-1/2" height="96" icon="solar:square-double-alt-arrow-up-outline" style={{strokeWidth: '0.5px'}} width="96"></iconify-icon>
</div>
</div>
</div>

<div className="gsap-fade-up grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="border border-[#4a453f] rounded-xl p-8 bg-[#322d28]/50 hover:bg-[#322d28] transition-colors group">
<div className="flex justify-between items-start mb-6">
<p className="text-5xl tracking-tighter group-hover:text-[#8c7b66] transition-colors font-google-sans-flex font-normal">100<span className="text-4xl text-[#a69c91] font-google-sans-flex font-normal">%</span></p>
<iconify-icon className="text-[#a69c91] group-hover:text-[#8c7b66] transition-colors" height="20" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<p className="text-sm text-[#a69c91] font-sans">Clean and organized job sites, ensuring your home is respected and pristine throughout the project.</p>
</div>
<div className="border border-[#4a453f] rounded-xl p-8 bg-[#322d28]/50 hover:bg-[#322d28] transition-colors group">
<div className="flex justify-between items-start mb-6">
<p className="text-5xl tracking-tighter group-hover:text-[#8c7b66] transition-colors font-google-sans-flex font-normal">1<span className="text-2xl text-[#a69c91] font-google-sans-flex font-normal">st</span></p>
<iconify-icon className="text-[#a69c91] group-hover:text-[#8c7b66] transition-colors" height="20" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<p className="text-sm text-[#a69c91] font-sans">Unmatched attention to detail. We deliver high-quality craftsmanship on every single finish.</p>
</div>
<div className="border border-[#4a453f] rounded-xl p-8 bg-[#322d28]/50 hover:bg-[#322d28] transition-colors group">
<div className="flex justify-between items-start mb-6">
<p className="group-hover:text-[#8c7b66] transition-colors text-5xl font-normal tracking-tighter font-google-sans-flex">100<span className="text-4xl text-[#a69c91] font-google-sans-flex font-normal">%</span></p>
<iconify-icon className="text-[#a69c91] group-hover:text-[#8c7b66] transition-colors" height="20" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<p className="text-sm text-[#a69c91] font-sans">Professional and experienced team providing reliable scheduling and clear communication.</p>
</div>
</div>
</div>
</section>

<section className="relative bg-[#3b3631] text-[#ece9e4] pb-32 z-10">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="flex flex-col md:flex-row mb-20 gap-x-8 gap-y-8 items-end justify-between">
<div className="flex flex-col gap-6">
<span className="text-xs font-semibold tracking-widest text-[#a69c91] uppercase font-sans">[ OUR PORTFOLIO ]</span>
<h2 className="text-4xl md:text-5xl tracking-tight uppercase leading-tight font-google-sans-flex font-normal max-w-xl text-[#ece9e4]">
                PRECISION &amp; CRAFTSMANSHIP
            </h2>
</div>
<p className="text-sm text-[#a69c91] leading-relaxed max-w-sm font-sans">
            De Jesus Painting is a custom residential painting company based in San Diego, CA. We focus on delivering high-quality finishes with a seamless, professional experience from start to finish.
        </p>
</div>

<div className="max-w-6xl mr-auto ml-auto relative w-full mb-32">

<span className="hidden items-center -top-6 -left-2 bubble-float-1 sm:inline-flex text-xs font-semibold tracking-wider rounded-sm pt-2 pr-3 pb-2 pl-3 absolute z-50 bg-[#8c7b66] text-[#ece9e4] shadow-xl shadow-[#8c7b66]/20 font-sans uppercase" style={{animation: 'floatBubble1 4s ease-in-out infinite'}}>
            Premium Finishes
            <i className="w-2 h-2 absolute -bottom-1 left-6 rotate-45 bg-[#8c7b66]"></i>
</span>
<span className="hidden sm:inline-flex items-center -top-12 text-xs font-semibold tracking-wider rounded-sm pt-2 pr-3 pb-2 pl-3 absolute right-0 bubble-float-2 z-50 bg-[#544e47] text-[#ece9e4] shadow-xl shadow-[#544e47]/20 font-sans uppercase" style={{animation: 'floatBubble2 4s ease-in-out 1s infinite'}}>
            Lasting Durability
            <i className="w-2 h-2 absolute -bottom-1 right-6 rotate-45 bg-[#544e47]"></i>
</span>

<div className="flex min-h-[450px] sm:px-6 relative gap-x-0 gap-y-0 items-end justify-center" id="card-orbit-container">

<div className="orbit-card group absolute w-[180px] sm:w-[240px] aspect-[4/5] rounded-lg overflow-hidden border border-[#4a453f] bg-[#322d28] transition-all duration-300 hover:-translate-y-2 shadow-2xl" data-orbit-index="0" style={{left: '860.5px', top: '270.072px', zIndex: '50', filter: 'none'}}>
<img alt="Custom Home Painting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#3b3631]/40 group-hover:bg-transparent transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#322d28] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-xs font-semibold tracking-wider text-[#ece9e4] uppercase font-sans">Interior Space</p>
</div>
</div>

<div className="orbit-card group absolute w-[180px] sm:w-[240px] aspect-[4/5] rounded-lg overflow-hidden border border-[#4a453f] bg-[#322d28] transition-all duration-300 hover:-translate-y-2 shadow-2xl" data-orbit-index="1" style={{left: '670.303px', top: '373.959px', zIndex: '93', filter: 'none'}}>
<img alt="Luxury Estate Painting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#3b3631]/40 group-hover:bg-transparent transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#322d28] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-xs font-semibold tracking-wider text-[#ece9e4] uppercase font-sans">Exterior Finish</p>
</div>
</div>

<div className="orbit-card group absolute w-[180px] sm:w-[240px] aspect-[4/5] rounded-lg overflow-hidden border border-[#4a453f] bg-[#322d28] transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:z-50" data-orbit-index="2" style={{left: '290.303px', top: '373.887px', zIndex: '93', filter: 'none'}}>
<img alt="Cabinet Refinishing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#3b3631]/40 group-hover:bg-transparent transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#322d28] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-xs font-semibold tracking-wider text-[#ece9e4] uppercase font-sans">Trim &amp; Molding</p>
</div>
</div>

<div className="orbit-card group absolute w-[180px] sm:w-[240px] aspect-[4/5] rounded-lg overflow-hidden border border-[#4a453f] bg-[#322d28] transition-all duration-300 hover:-translate-y-2 shadow-2xl" data-orbit-index="3" style={{left: '100.5px', top: '269.928px', zIndex: '50', filter: 'blur(0.0024px)'}}>
<img alt="Detail Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#3b3631]/40 group-hover:bg-transparent transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#322d28] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-xs font-semibold tracking-wider text-[#ece9e4] uppercase font-sans">Color Consulting</p>
</div>
</div>

<div className="orbit-card group absolute w-[180px] sm:w-[240px] aspect-[4/5] rounded-lg overflow-hidden border border-[#4a453f] bg-[#322d28] transition-all duration-300 hover:-translate-y-2 shadow-2xl" data-orbit-index="4" style={{left: '290.697px', top: '166.041px', zIndex: '7', filter: 'blur(6px)'}}>
<img alt="Preparation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#3b3631]/40 group-hover:bg-transparent transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#322d28] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-xs font-semibold tracking-wider text-[#ece9e4] uppercase font-sans">Preparation</p>
</div>
</div>

<div className="orbit-card group absolute w-[180px] sm:w-[240px] aspect-[4/5] rounded-lg overflow-hidden border border-[#4a453f] bg-[#322d28] transition-all duration-300 hover:-translate-y-2 shadow-2xl hover:z-50" data-orbit-index="5" style={{left: '670.697px', top: '166.113px', zIndex: '7', filter: 'blur(6px)'}}>
<img alt="Final Polish" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-[#3b3631]/40 group-hover:bg-transparent transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#322d28] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-xs font-semibold tracking-wider text-[#ece9e4] uppercase font-sans">Final Finish</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="group relative rounded-xl border border-[#4a453f] bg-[#322d28]/50 p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#8c7b66]">
<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #ece9e4 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<div className="relative flex flex-col gap-6">
<div className="w-12 h-12 rounded-lg bg-[#3b3631] border border-[#544e47] flex items-center justify-center group-hover:border-[#8c7b66] transition-colors duration-300">
<iconify-icon className="text-[#a69c91] group-hover:text-[#8c7b66] transition-colors" height="24" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-[#ece9e4] text-lg font-normal tracking-tight mb-2 font-google-sans-flex">Guaranteed Quality</h3>
<p className="text-[#a69c91] text-sm leading-relaxed font-sans">Every corner, trim, and wall is finished to perfection. We stand proudly behind the quality of our craftsmanship.</p>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-[#4a453f] bg-[#322d28]/50 p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#8c7b66]">
<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #ece9e4 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<div className="relative flex flex-col gap-6">
<div className="w-12 h-12 rounded-lg bg-[#3b3631] border border-[#544e47] flex items-center justify-center group-hover:border-[#8c7b66] transition-colors duration-300">
<iconify-icon className="text-[#a69c91] group-hover:text-[#8c7b66] transition-colors" height="24" icon="solar:ruler-pen-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-[#ece9e4] text-lg font-normal tracking-tight mb-2 font-google-sans-flex">Immaculate Preparation</h3>
<p className="text-[#a69c91] text-sm leading-relaxed font-sans">A perfect coat starts with perfect prep. We ensure surfaces are expertly treated for long-lasting vibrancy.</p>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-[#4a453f] bg-[#322d28]/50 p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#8c7b66]">
<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, #ece9e4 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<div className="relative flex flex-col gap-6">
<div className="w-12 h-12 rounded-lg bg-[#3b3631] border border-[#544e47] flex items-center justify-center group-hover:border-[#8c7b66] transition-colors duration-300">
<iconify-icon className="text-[#a69c91] group-hover:text-[#8c7b66] transition-colors" height="24" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-[#ece9e4] text-lg font-normal tracking-tight mb-2 font-google-sans-flex">Professional Team</h3>
<p className="text-[#a69c91] text-sm leading-relaxed font-sans">Our dedicated crew maintains a clean site, respects your home, and operates with complete transparency.</p>
</div>
</div>
</div>
</div>
<style>
        @keyframes floatBubble1 {
            0%, 100% { transform: translateY(0px) rotate(-4deg); }
            50% { transform: translateY(-8px) rotate(-4deg); }
        }
        @keyframes floatBubble2 {
            0%, 100% { transform: translateY(0px) rotate(4deg); }
            50% { transform: translateY(-8px) rotate(4deg); }
        }
    </style>

</div>
</section>

<section className="relative bg-[#ece9e4] text-[#3b3631] py-32 z-10 border-t border-[#cdc9c1]">
<div className="lg:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="gsap-fade-up flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<h2 className="text-4xl md:text-5xl tracking-tight uppercase leading-tight font-google-sans-flex font-normal max-w-xl">
            Words from our clients
        </h2>
<span className="text-xs font-medium tracking-widest text-[#8c7b66] uppercase font-sans">[ CLIENT REVIEWS ]</span>
</div>
<div className="relative flex flex-col md:flex-row items-center justify-center py-12 md:py-20 w-full">

<div className="group relative w-[300px] md:w-[340px] h-[300px] md:h-[340px] -my-6 md:-my-0 md:-mx-12 z-10 hover:z-50 transition-all duration-500">
<div className="absolute inset-0 transition-all duration-500 ease-out -rotate-6 md:-rotate-12 group-hover:rotate-0 group-hover:scale-105 group-hover:-translate-y-4 rounded-xl border border-[#cdc9c1]/50 backdrop-blur-md shadow-2xl" style={{background: 'linear-gradient(rgba(223, 220, 213, 0.4), transparent)'}}>
<div className="absolute inset-4 rounded-xl bg-[#dfdcd5]/90 text-[#3b3631] shadow-xl ring-1 ring-[#cdc9c1] overflow-hidden flex flex-col justify-between p-6">
<div className="">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-[#ece9e4] ring-1 ring-[#cdc9c1] mb-6">
<svg className="text-[#8c7b66]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-[#6b645c] mb-4 font-sans line-clamp-4">
                            "The owner is knowledgeable, honest and professional. He made sure the process was seamless and on schedule. The staff were fantastic. You won't regret hiring this company."
                        </p>
</div>
<div className="pt-4 border-t border-[#cdc9c1] flex items-center justify-between mt-auto">
<div className="flex items-center gap-3">
<img alt="Client" className="h-8 w-8 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="text-xs font-medium text-[#3b3631] font-sans">O H.</div>
<div className="text-[10px] uppercase tracking-wider text-[#8c7b66] font-sans mt-0.5">Rancho Bernardo, CA</div>
</div>
</div>
<div className="flex items-center gap-1 text-[#8c7b66]">
<svg fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<span className="text-xs font-medium font-sans">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative w-[300px] md:w-[340px] h-[300px] md:h-[340px] -my-6 md:-my-0 md:-mx-12 z-20 hover:z-50 transition-all duration-500">
<div className="absolute inset-0 transition-all duration-500 ease-out rotate-2 group-hover:rotate-0 group-hover:scale-105 group-hover:-translate-y-4 rounded-xl border border-[#cdc9c1]/50 backdrop-blur-md shadow-2xl" style={{background: 'linear-gradient(rgba(236, 233, 228, 0.5), transparent)'}}>
<div className="absolute inset-4 rounded-xl bg-[#ece9e4]/95 text-[#3b3631] shadow-xl ring-1 ring-[#cdc9c1] overflow-hidden flex flex-col justify-between p-6">
<div className="">
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-[#dfdcd5] ring-1 ring-[#cdc9c1] mb-6">
<svg className="text-[#8c7b66]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-[#6b645c] mb-4 font-sans line-clamp-4">
                            "Did a great job, on-time, on budget and good communications. Will use De Jesus Painting again. Super professional and a pleasure to work with."
                        </p>
</div>
<div className="pt-4 border-t border-[#cdc9c1] flex items-center justify-between mt-auto">
<div className="flex items-center gap-3">
<img alt="Client" className="h-8 w-8 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="text-xs font-medium text-[#3b3631] font-sans">Buzz L.</div>
<div className="text-[10px] uppercase tracking-wider text-[#8c7b66] font-sans mt-0.5">Las Vegas, NV</div>
</div>
</div>
<div className="flex items-center gap-1 text-[#8c7b66]">
<svg fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<span className="text-xs font-medium font-sans">5.0</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative w-[300px] md:w-[340px] h-[300px] md:h-[340px] -my-6 md:-my-0 md:-mx-12 z-10 hover:z-50 transition-all duration-500">
<div className="absolute inset-0 transition-all duration-500 ease-out rotate-6 md:rotate-12 group-hover:rotate-0 group-hover:scale-105 group-hover:-translate-y-4 rounded-xl border border-[#cdc9c1]/50 backdrop-blur-md shadow-2xl" style={{background: 'linear-gradient(rgba(223, 220, 213, 0.3), transparent)'}}>
<div className="absolute inset-4 rounded-xl bg-[#dfdcd5]/90 text-[#3b3631] shadow-xl ring-1 ring-[#cdc9c1] overflow-hidden flex flex-col justify-between p-6">
<div>
<div className="inline-flex items-center justify-center h-8 w-8 rounded-lg bg-[#ece9e4] ring-1 ring-[#cdc9c1] mb-6">
<svg className="text-[#8c7b66]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="text-sm leading-relaxed text-[#6b645c] mb-4 font-sans line-clamp-4">
                            "Great team! They pay attention to detail and take their time to finish the job. Very clean work and excellent follow-up. Highly recommended."
                        </p>
</div>
<div className="pt-4 border-t border-[#cdc9c1] flex items-center justify-between mt-auto">
<div className="flex items-center gap-3">
<img alt="Client" className="h-8 w-8 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="text-xs font-medium text-[#3b3631] font-sans">SD C.</div>
<div className="text-[10px] uppercase tracking-wider text-[#8c7b66] font-sans mt-0.5">San Diego, CA</div>
</div>
</div>
<div className="flex items-center gap-1 text-[#8c7b66]">
<svg fill="currentColor" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<span className="text-xs font-medium font-sans">5.0</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#3b3631] text-[#ece9e4] py-32 z-10 border-t border-[#4a453f]" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="gsap-fade-up flex flex-col justify-between h-full">
<div className="">
<span className="text-xs font-semibold tracking-widest text-[#a69c91] uppercase font-sans block mb-6">[ FREE CONSULTATION ]</span>
<h2 className="text-4xl md:text-5xl tracking-tight uppercase leading-tight font-google-sans-flex font-normal mb-8 max-w-md">
                            Want a Free Consultation?
                        </h2>
<p className="text-sm text-[#a69c91] leading-relaxed max-w-sm font-sans mb-12">
                            Schedule a quick consultation and let’s bring your vision to life. We specialize exclusively in residential painting throughout San Diego County, guaranteeing high-quality finishes and a clean, organized process.
                        </p>
</div>
<div className="flex flex-col sm:flex-row gap-12 border-t border-[#4a453f] pt-10 mt-8 lg:mt-auto">
<div className="flex flex-col gap-2">
<span className="text-xs tracking-wider text-[#a69c91] uppercase font-semibold font-sans">Operating Hours</span>
<span className="text-sm font-medium text-[#ece9e4] transition-colors font-sans">Mon – Sat, 7:00 AM – 4:30 PM</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs tracking-wider text-[#a69c91] uppercase font-semibold font-sans">California License</span>
<span className="text-sm font-medium text-[#ece9e4] transition-colors font-sans">Lic. 1057752</span>
</div>
</div>
</div>
<div className="gsap-fade-up bg-[#322d28] rounded-2xl p-4 md:p-6 border border-[#4a453f] flex items-center justify-center min-h-[600px]">

<div className="calendly-inline-widget w-full h-full rounded-xl overflow-hidden" data-processed="true" data-url="https://calendly.com/paintngdejesus/30min?hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;background_color=322d28&amp;text_color=ece9e4&amp;primary_color=8c7b66" style={{position: 'relative', minWidth: '320px', height: '600px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/paintngdejesus/30min?embed_domain=&amp;embed_type=Inline&amp;hide_event_type_details=1&amp;hide_gdpr_banner=1&amp;background_color=322d28&amp;text_color=ece9e4&amp;primary_color=8c7b66" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</div>
</div>
</section>

<footer className="relative bg-[#322d28] text-[#ece9e4] pt-24 pb-12 overflow-hidden z-10 border-t border-[#4a453f]">
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
<div className="gsap-fade-up flex justify-between items-center text-xs font-semibold tracking-wider text-[#a69c91] uppercase mb-16 border-b border-[#4a453f] pb-6">
<span className="font-sans">LIC. 1057752</span>
<span className="font-sans hidden md:inline">Interior // Exterior // Staining</span>
<button className="hover:text-[#ece9e4] transition-colors font-sans">DIRECTORY</button>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-[#a69c91] font-medium gap-6 pt-4">
<div className="flex flex-col gap-1 text-center md:text-left">
<span className="font-sans">ALL RIGHTS RETAINED.</span>
<span className="font-sans">©2024 DE JESUS PAINTING</span>
</div>
<div className="text-center flex flex-col gap-1">
<span className="font-sans">CUSTOM RESIDENTIAL PAINTING COMPANY</span>
<span className="font-sans">SAN DIEGO COUNTY, CA</span>
</div>
<div className="flex flex-col items-center md:items-end gap-1">
<div className="flex gap-4">
<a className="hover:text-[#ece9e4] transition-colors font-sans" href="https://www.instagram.com/dejesuspainting/" target="_blank">INSTAGRAM</a>
<a className="hover:text-[#ece9e4] transition-colors font-sans" href="https://www.yelp.com/biz/de-jesus-painting-san-marcos-2" target="_blank">YELP</a>
</div>
<a className="hover:text-[#ece9e4] transition-colors font-sans" href="#">TERMS &amp; PRIVACY</a>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none opacity-[0.03] transform translate-y-1/4">
<h1 className="text-center tracking-tighter text-[#ece9e4] select-none font-google-sans-flex font-normal" style={{fontSize: '25vw'}}>
                DE JESUS
            </h1>
</div>
</footer>


    </>
  );
}
