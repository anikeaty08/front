import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Cursor Logic
            const cursor = document.getElementById('cursor');
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;
            let cursorColorDark = false;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            });

            // Interactive Elements Cursor State
            document.querySelectorAll('.interactive').forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hover-active'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hover-active'));
            });

            // Section Observer for Nav & Cursor Color Inversion
            const nav = document.getElementById('main-nav');
            const sections = document.querySelectorAll('section, header, footer');
            
            const sectionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const isRed = entry.target.classList.contains('section-red');
                        if (isRed) {
                            nav.classList.add('nav-inverted');
                            cursor.classList.add('cursor-dark');
                        } else {
                            nav.classList.remove('nav-inverted');
                            cursor.classList.remove('cursor-dark');
                        }
                    }
                });
            }, { threshold: 0.5 });
            
            sections.forEach(sec => sectionObserver.observe(sec));

            // CRT Flicker Trigger on Scroll
            const crtObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !entry.target.classList.contains('is-visible')) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { threshold: 0.2 });
            
            document.querySelectorAll('.crt-trigger').forEach(el => crtObserver.observe(el));

            // Form Submit Logic
            const form = document.getElementById('custom-form');
            const successMsg = document.getElementById('form-success');
            
            if(form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    form.style.display = 'none';
                    successMsg.classList.remove('hidden');
                    // Retrigger CRT animation on success block
                    successMsg.style.animation = 'none';
                    successMsg.offsetHeight; /* trigger reflow */
                    successMsg.style.animation = 'crtFlicker 0.22s steps(1) forwards';
                });

                // Input Focus Flash logic handled in CSS focus state, but exact 50ms flash requires JS
                const inputs = form.querySelectorAll('input, textarea');
                inputs.forEach(input => {
                    input.addEventListener('focus', () => {
                        input.classList.add('form-border-flash');
                        setTimeout(() => input.classList.remove('form-border-flash'), 100);
                    });
                });
            }

            // Marquee Drag Logic (Desktop only)
            const track = document.getElementById('marquee-track');
            const container = document.getElementById('marquee-container');
            let isDown = false;
            let startX;
            let scrollLeft;
            let velX = 0;
            let momentumID;

            if(window.innerWidth > 768) {
                container.addEventListener('mousedown', (e) => {
                    isDown = true;
                    startX = e.pageX - track.offsetLeft;
                    scrollLeft = track.scrollLeft;
                    cancelAnimationFrame(momentumID);
                });
                
                container.addEventListener('mouseleave', () => {
                    if(!isDown) return;
                    isDown = false;
                    beginMomentum();
                });
                
                container.addEventListener('mouseup', () => {
                    isDown = false;
                    beginMomentum();
                });
                
                container.addEventListener('mousemove', (e) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - track.offsetLeft;
                    const walk = (x - startX) * 1.5;
                    const prevScrollLeft = track.scrollLeft;
                    track.scrollLeft = scrollLeft - walk;
                    velX = track.scrollLeft - prevScrollLeft;
                });
            }

            function beginMomentum() {
                track.scrollLeft += velX;
                velX *= 0.92;
                if (Math.abs(velX) > 0.5) {
                    momentumID = requestAnimationFrame(beginMomentum);
                }
            }

            // Mobile Menu
            const menuBtn = document.getElementById('mobile-menu-btn');
            const closeBtn = document.getElementById('mobile-close-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('flex');
            });

            closeBtn.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
            });

            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('flex');
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor">
<div className="cursor-ring"></div>
<div className="cursor-x"></div>
<div className="cursor-y"></div>
<div className="cursor-brackets"></div>
</div>

<nav className="fixed md:h-14 z-[999] border-b-[2px] flex md:px-8 text-[#F0EDE8] bg-zinc-900 w-full h-12 border-[#FF1E00] px-4 top-0 left-0 items-center justify-between" id="main-nav">
<div className="relative flex items-center h-full">
<span className="font-bebas text-[1.375rem] tracking-tight leading-none pt-1">
<span className="nav-logo-filled">HIGH</span> <span className="nav-logo-outline text-outline-bone">SEQUENCE</span>
</span>
<div className="nav-shape red-fragment w-[3.125rem] h-[1.25rem] border-t-[1.5px] border-r-[1.5px] -rotate-12 absolute top-1/2 left-2 -translate-y-1/2 opacity-60 animate-shape-1"></div>
</div>
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-[0.5625rem] opacity-35 tracking-[0.25em] uppercase">
            18.9388 N / 72.8354 E
        </div>
<div className="hidden md:flex items-center gap-8 h-full">
<a className="nav-link interactive text-[0.6875rem] uppercase tracking-[0.3em] hover:text-[#FF1E00]" href="#product">PRODUCT · ORDER</a>
<span className="text-[0.5625rem] opacity-25 tracking-[0.25em]">V.1.0</span>
</div>
<button className="md:hidden interactive flex flex-col gap-[4px] w-[1.125rem]" id="mobile-menu-btn">
<span className="w-full h-[1px] bg-current"></span>
<span className="w-full h-[1px] bg-current"></span>
<span className="w-full h-[1px] bg-current"></span>
</button>
</nav>

<div className="fixed inset-0 bg-[#080808] z-[9990] hidden flex-col items-center justify-center" id="mobile-menu">
<button className="absolute top-4 right-4 interactive p-4 text-[#F0EDE8]" id="mobile-close-btn">
<iconify-icon icon="solar:close-linear" width="24"></iconify-icon>
</button>
<a className="mobile-link interactive font-bebas text-[14vw] text-[#F0EDE8] hover:text-[#FF1E00] leading-none mb-4" href="#product">PRODUCT</a>
<a className="mobile-link interactive font-bebas text-[14vw] text-[#F0EDE8] hover:text-[#FF1E00] leading-none" href="#order">ORDER</a>
</div>

<header className="min-h-[100dvh] flex flex-col overflow-hidden bg-center w-full relative items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://images.unsplash.com/photo-1585431414255-3776783ac314?w=3840&amp;q=80"/>

<div className="bokeh w-[18.75rem] h-[18.75rem] top-[10%] left-[10%] animate-drift-1"></div>
<div className="bokeh w-[12.5rem] h-[12.5rem] top-[5%] left-[20%] animate-drift-2"></div>
<div className="bokeh w-[25rem] h-[25rem] top-[40%] right-[-5%] animate-drift-3"></div>
<div className="bokeh w-[18.75rem] h-[18.75rem] bottom-[-10%] right-[10%] animate-drift-1"></div>
<div className="bokeh w-[15.625rem] h-[15.625rem] bottom-[5%] right-[25%] animate-drift-2"></div>
<div className="relative z-10 w-full px-4 md:px-8 text-center mt-12">
<h1 className="font-bebas text-[17vw] md:text-[11vw] leading-[0.85] tracking-tight uppercase relative inline-block mx-auto">
<span className="block rgb-split text-red-800">COVER</span>
<span className="block text-outline-bone rgb-split text-zinc-50 border-red-950 ring-red-900">EVERYTHING.</span>

<div className="red-fragment w-[3.75rem] h-[3.75rem] top-[-10%] left-[10%] rotate-12 animate-shape-1"></div>
<div className="red-fragment w-[5rem] h-[1.875rem] top-[45%] right-[20%] -rotate-15 animate-shape-2"></div>
<div className="red-fragment w-[2.5rem] h-[5rem] bottom-[-5%] left-[40%] rotate-[25deg] animate-shape-1" style={{animationDelay: '-5s'}}></div>
</h1>
<p className="text-[0.8125rem] animate-fade-in delay-500 text-red-950 opacity-75 mt-8">
                One product. One face. No record.
            </p>
<a className="interactive inline-block mt-10 border-[1.5px] border-[#FF1E00] bg-[#080808] text-[#FF1E00] px-8 py-3.5 uppercase tracking-widest text-[0.8125rem] hover:bg-[#FF1E00] hover:text-[#080808] active:bg-[#F0EDE8] animate-fade-in delay-700" href="#order">
                &gt;_EXECUTE_ORDER
            </a>
</div>
<div className="absolute bottom-0 w-full px-4 md:px-8 pb-4">
<div className="text-[0.5625rem] tracking-[0.25em] opacity-40 uppercase mb-2">18.9388 N, 72.8354 E — MUMBAI</div>
<div className="w-full h-[2px] bg-[#FF1E00]"></div>
</div>
<div className="absolute top-[5rem] right-4 md:right-8 w-[1.75rem] h-[1.75rem] border-[1.5px] border-[#FF1E00] rounded-full flex items-center justify-center">
<div className="w-2 h-[1.5px] bg-[#FF1E00] absolute"></div>
<div className="h-2 w-[1.5px] bg-[#FF1E00] absolute"></div>
</div>
</header>

<section className="section-red relative w-full min-h-[100dvh] bg-[#FF1E00] text-[#080808] flex items-center justify-center px-4 md:px-8 py-20" id="manifesto">
<div className="absolute top-[5rem] left-4 md:left-8 flex flex-col gap-1">
<span className="text-[0.625rem] tracking-[0.3em] uppercase">[ SIGNAL_02 ]</span>
<span className="text-[0.5625rem] opacity-50 tracking-[0.25em] uppercase">35.6764 N, 139.6500 E</span>
</div>
<div className="absolute top-[5rem] right-4 md:right-8">
<span className="text-[0.5625rem] opacity-40 tracking-[0.25em] uppercase">VERSION: 1.0.0-HS</span>
</div>
<div className="w-full max-w-[50rem] mx-auto crt-trigger opacity-0">
<div className="w-full h-[1px] bg-[#080808] mb-8"></div>
<h2 className="font-bebas text-[12vw] md:text-[5.5vw] leading-[1.1] text-center uppercase tracking-tight">
<span className="block">A face is information.</span>
<span className="block">Information can be <span className="text-outline-dark">WEAPONISED.</span></span>
<span className="block font-semibold">HIGH SEQUENCE removes the variable.</span>
<span className="block font-semibold">One piece. Yours. Final.</span>
</h2>
<div className="w-full h-[1px] bg-[#080808] mt-8"></div>
</div>
<div className="absolute bottom-4 right-4 md:bottom-6 md:right-8">
<span className="text-[0.5625rem] opacity-50 tracking-[0.25em] uppercase">&gt;_SCROLL_DOWN</span>
</div>
</section>

<section className="relative w-full min-h-[100dvh] bg-[#080808] pt-24 pb-16 flex flex-col overflow-hidden" id="product">

<div className="bokeh w-[25rem] h-[25rem] top-[20%] left-[-5%] animate-drift-2"></div>
<div className="bokeh w-[18.75rem] h-[18.75rem] top-[10%] right-[10%] animate-drift-3"></div>
<div className="bokeh w-[31.25rem] h-[31.25rem] bottom-[-10%] left-[30%] animate-drift-1"></div>
<div className="w-full px-4 md:px-16 mb-16 relative z-10 crt-trigger opacity-0">
<div className="text-[0.625rem] tracking-[0.3em] uppercase text-[#F0EDE8] mb-6">[ COLLECTION ]</div>
<h2 className="font-bebas text-[12vw] md:text-[7vw] leading-[0.9] tracking-tight uppercase">
<span className="block">ONE FORM.</span>
<span className="block text-outline-bone">THREE EXECUTIONS.</span>
</h2>
<p className="mt-4 text-[0.8125rem] opacity-55 max-w-md">
                No two pieces leave the same. Pick your execution.
            </p>
</div>

<div className="w-full overflow-hidden cursor-grab active:cursor-grabbing relative z-20 md:mb-auto flex-grow flex items-center" id="marquee-container">
<div className="flex flex-col md:flex-row gap-8 md:gap-12 px-4 md:px-16 overflow-x-auto hide-scrollbar w-full md:w-max snap-y md:snap-x snap-mandatory" id="marquee-track">

<div className="interactive product-card snap-center group flex flex-col w-full max-w-[20rem] md:w-[20rem] shrink-0 mx-auto md:mx-0 relative">
<div className="w-5 h-5 border-[1.5px] border-[#FF1E00] rounded-full mx-auto mb-3 flex items-center justify-center relative">
<div className="w-2 h-[1.5px] bg-[#FF1E00] absolute"></div><div className="h-2 w-[1.5px] bg-[#FF1E00] absolute"></div>
</div>
<div className="aspect-[4/5] overflow-hidden flex group-hover:border-[#333] w-full bg-[url(https://images.unsplash.com/photo-1587701712213-826b561028f7?w=800&amp;q=80)] bg-cover bg-center border-transparent border relative items-center justify-center">

<div className="red-fragment w-[2rem] h-[2rem] top-0 left-0 opacity-0 group-hover:opacity-85 transition-opacity duration-150 ease-out"></div>
<div className="red-fragment w-[2rem] h-[2rem] bottom-0 right-0 rotate-180 opacity-0 group-hover:opacity-85 transition-opacity duration-150 ease-out"></div>
</div>
<div className="w-5 h-5 border-[1.5px] border-[#FF1E00] rounded-full mx-auto mt-3 flex items-center justify-center relative">
<div className="w-2 h-[1.5px] bg-[#FF1E00] absolute"></div><div className="h-2 w-[1.5px] bg-[#FF1E00] absolute"></div>
</div>
<div className="mt-5">
<h3 className="font-bebas text-[7vw] md:text-[2.2vw] leading-none uppercase group-hover:text-[#FF1E00]">MODEL 01 — THE VOID</h3>
<p className="text-[0.6875rem] opacity-55 mt-1.5 uppercase tracking-widest">Total coverage. Zero aperture. Identity: null.</p>
<div className="text-[0.5625rem] text-[#FF1E00] tracking-[0.3em] uppercase mt-3">CUSTOM ORDER ONLY</div>
</div>
</div>

<div className="interactive product-card snap-center group flex flex-col w-full max-w-[20rem] md:w-[20rem] shrink-0 mx-auto md:mx-0 relative">
<div className="w-5 h-5 border-[1.5px] border-[#FF1E00] rounded-full mx-auto mb-3 flex items-center justify-center relative">
<div className="w-2 h-[1.5px] bg-[#FF1E00] absolute"></div><div className="h-2 w-[1.5px] bg-[#FF1E00] absolute"></div>
</div>
<div className="aspect-[4/5] overflow-hidden flex group-hover:border-[#333] w-full bg-[url(https://images.unsplash.com/photo-1652000025920-155f11487525?w=800&amp;q=80)] bg-cover bg-center border-transparent border relative items-center justify-center">
<div className="red-fragment w-[2.5rem] h-[1rem] top-4 right-[-0.5rem] rotate-90 opacity-0 group-hover:opacity-85 transition-opacity duration-150 ease-out"></div>
</div>
<div className="w-5 h-5 border-[1.5px] border-[#FF1E00] rounded-full mx-auto mt-3 flex items-center justify-center relative">
<div className="w-2 h-[1.5px] bg-[#FF1E00] absolute"></div><div className="h-2 w-[1.5px] bg-[#FF1E00] absolute"></div>
</div>
<div className="mt-5">
<h3 className="font-bebas text-[7vw] md:text-[2.2vw] leading-none uppercase group-hover:text-[#FF1E00]">MODEL 02 — SPLIT</h3>
<p className="text-[0.6875rem] opacity-55 mt-1.5 uppercase tracking-widest">Dual material. Single eye cut. Contrast: absolute.</p>
<div className="text-[0.5625rem] text-[#FF1E00] tracking-[0.3em] uppercase mt-3">CUSTOM ORDER ONLY</div>
</div>
</div>

<div className="interactive product-card snap-center group flex flex-col w-full max-w-[20rem] md:w-[20rem] shrink-0 mx-auto md:mx-0 relative">
<div className="w-5 h-5 border-[1.5px] border-[#FF1E00] rounded-full mx-auto mb-3 flex items-center justify-center relative">
<div className="w-2 h-[1.5px] bg-[#FF1E00] absolute"></div><div className="h-2 w-[1.5px] bg-[#FF1E00] absolute"></div>
</div>
<div className="aspect-[4/5] overflow-hidden flex group-hover:border-[#333] w-full bg-[url(https://images.unsplash.com/photo-1759418468177-de10546ca8f0?w=800&amp;q=80)] bg-cover bg-center border-transparent border relative items-center justify-center">
<div className="red-fragment w-[1.5rem] h-[3rem] bottom-0 left-4 opacity-0 group-hover:opacity-85 transition-opacity duration-150 ease-out"></div>
</div>
<div className="w-5 h-5 border-[1.5px] border-[#FF1E00] rounded-full mx-auto mt-3 flex items-center justify-center relative">
<div className="w-2 h-[1.5px] bg-[#FF1E00] absolute"></div><div className="h-2 w-[1.5px] bg-[#FF1E00] absolute"></div>
</div>
<div className="mt-5">
<h3 className="font-bebas text-[7vw] md:text-[2.2vw] leading-none uppercase group-hover:text-[#FF1E00]">MODEL 03 — SIGNAL</h3>
<p className="text-[0.6875rem] opacity-55 mt-1.5 uppercase tracking-widest">Open weave. Full movement. Presence: controlled.</p>
<div className="text-[0.5625rem] text-[#FF1E00] tracking-[0.3em] uppercase mt-3">CUSTOM ORDER ONLY</div>
</div>
</div>
</div>
</div>
<div className="w-full px-4 md:px-8 mt-16 md:mt-0 pb-16 absolute bottom-0 left-0">
<div className="w-full h-[1px] bg-[#FF1E00]"></div>
</div>
</section>

<section className="section-red relative w-full min-h-[100dvh] bg-[#FF1E00] text-[#080808] pt-20 pb-24 px-4 md:px-8 flex flex-col items-center" id="order">
<div className="w-full absolute top-[4rem] left-0 px-4 md:px-8 flex justify-between">
<span className="text-[0.625rem] uppercase tracking-[0.3em] scale-150">[ CUSTOM_ORDER ]</span>
<span className="text-[0.5625rem] opacity-45 tracking-[0.25em] uppercase">18.9388 N, 72.8354 E</span>
</div>
<div className="w-full max-w-[40rem] mt-12 md:mt-16 crt-trigger opacity-0">
<h2 className="font-bebas text-[14vw] md:text-[8vw] leading-[0.85] tracking-tight uppercase mb-4">
<span className="block">BUILD</span>
<span className="block text-outline-dark">YOURS.</span>
</h2>
<p className="text-[0.8125rem] opacity-80 mb-10 max-w-sm">
                Specify everything. We build once. No revisions. No returns.
            </p>

<form className="w-full flex flex-col gap-7 relative z-20" id="custom-form">
<div className="flex flex-col">
<label className="text-[0.625rem] tracking-[0.3em] uppercase mb-2">YOUR NAME</label>
<input className="interactive w-full bg-transparent border-b-[1px] border-[#080808] h-10 text-[0.8125rem] placeholder-[#080808]/35 rounded-none" placeholder="First and last." required="" type="text"/>
</div>
<div className="flex flex-col">
<label className="text-[0.625rem] tracking-[0.3em] uppercase mb-2">STYLE REFERENCE</label>
<input className="interactive w-full bg-transparent border-b-[1px] border-[#080808] h-10 text-[0.8125rem] placeholder-[#080808]/35 rounded-none" placeholder="Full-face / half-face / open-crown — describe the structure." required="" type="text"/>
</div>
<div className="flex flex-col">
<label className="text-[0.625rem] tracking-[0.3em] uppercase mb-2">COLOR DIRECTION</label>
<input className="interactive w-full bg-transparent border-b-[1px] border-[#080808] h-10 text-[0.8125rem] placeholder-[#080808]/35 rounded-none" placeholder="#000000 / bleached / two-tone / state the exact spec." required="" type="text"/>
</div>
<div className="flex flex-col">
<label className="text-[0.625rem] tracking-[0.3em] uppercase mb-2">SIZE</label>
<input className="interactive w-full bg-transparent border-b-[1px] border-[#080808] h-10 text-[0.8125rem] placeholder-[#080808]/35 rounded-none" placeholder="S — M — L — XL — or measure head circumference and state it." required="" type="text"/>
</div>
<div className="flex flex-col">
<label className="text-[0.625rem] tracking-[0.3em] uppercase mb-2">ANYTHING ELSE</label>
<textarea className="interactive w-full bg-transparent border-b-[1px] border-[#080808] h-[6.25rem] resize-none text-[0.8125rem] pt-2 placeholder-[#080808]/35 rounded-none" placeholder="Deadline. Inspo refs. Hard requirements. State them here or they don't exist." rows="4"></textarea>
</div>
<button className="interactive mt-2 w-full h-[3.25rem] bg-[#080808] text-[#FF1E00] text-[0.8125rem] tracking-[0.2em] uppercase hover:bg-[#F0EDE8] hover:text-[#080808] active:bg-[#080808] active:text-[#F0EDE8]" type="submit">
                    &gt;_SUBMIT ORDER
                </button>
</form>

<div className="hidden w-full pt-12" id="form-success">
<h3 className="font-bebas text-[10vw] md:text-[5vw] leading-none uppercase mb-6">
<span className="block">&gt;_ ORDER_FILED.</span>
<span className="block text-outline-dark">AWAIT CONTACT.</span>
</h3>
<p className="text-[0.75rem] opacity-65">
                    Response window: 48h. Build begins on confirmation only.
                </p>
</div>
</div>
</section>

<footer className="w-full bg-[#080808] text-[#F0EDE8] border-t-[1px] border-[#FF1E00] py-6 px-4 md:px-8 relative z-50">
<div className="flex flex-col md:flex-row justify-between items-center gap-4">
<span className="font-bebas text-[1.125rem] tracking-tight">
                HIGH <span className="text-outline-bone">SEQUENCE</span>
</span>
<span className="text-[0.5625rem] opacity-30 tracking-[0.25em] uppercase text-center">18.9388 N, 72.8354 E</span>
<span className="text-[0.625rem] opacity-35 tracking-[0.1em] uppercase text-center">
                © 2025 — NO STOCK. NO RETURNS. ALL CUSTOM.
            </span>
</div>
<div className="absolute bottom-6 right-4 md:right-8 hidden md:block">
<span className="text-[0.5rem] opacity-20 tracking-[0.2em] uppercase">VERSION: 1.0.0-HS</span>
</div>
</footer>


    </>
  );
}
