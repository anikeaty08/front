import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // 1. Loading Screen
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                if(loader) {
                    loader.style.opacity = '0';
                    setTimeout(() => loader.remove(), 700);
                }
            }, 800);
        });

        // 2. Scroll Reveal Animations
        const revealElements = document.querySelectorAll('.reveal, .reveal-right');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        revealElements.forEach(el => revealObserver.observe(el));

        // 3. 3-Dot Menu Dropdown
        const menuBtn = document.getElementById('menuBtn');
        const dropdownMenu = document.getElementById('dropdownMenu');
        let menuOpen = false;

        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            menuOpen = !menuOpen;
            if(menuOpen) {
                dropdownMenu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-2');
                menuBtn.classList.add('text-[#B6FF3C]', 'border-[#B6FF3C]');
            } else {
                dropdownMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
                menuBtn.classList.remove('text-[#B6FF3C]', 'border-[#B6FF3C]');
            }
        });
        document.addEventListener('click', (e) => {
            if (menuOpen && !dropdownMenu.contains(e.target)) {
                menuOpen = false;
                dropdownMenu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-2');
                menuBtn.classList.remove('text-[#B6FF3C]', 'border-[#B6FF3C]');
            }
        });

        // 4. Testimonials Data & Generation (Column Series Layout)
        const clients = [
            { name: "Alex R.", role: "YouTuber", text: "Hemesh completely transformed my channel. The retention rate skyrocketed after his cinematic edits.", img: "https://i.pravatar.cc/150?img=11" },
            { name: "Sarah J.", role: "Brand Manager", text: "Incredible motion graphics work. Professional, fast, and exactly what we needed for our ad campaign.", img: "https://i.pravatar.cc/150?img=5" },
            { name: "Mike T.", role: "Content Creator", text: "The thumbnails are pure fire. My click-through rate doubled in a week. Highly recommended!", img: "https://i.pravatar.cc/150?img=33" },
            { name: "David L.", role: "Filmmaker", text: "His color grading brings a Hollywood feel to simple footage. A true artist behind the screen.", img: "https://i.pravatar.cc/150?img=53" },
            { name: "Emma W.", role: "Vlogger", text: "Smooth transitions and perfect pacing. Hemesh knows how to keep the audience hooked.", img: "https://i.pravatar.cc/150?img=44" },
            { name: "Chris B.", role: "Agency Owner", text: "Reliable and insanely talented. Our go-to guy for all motion design needs.", img: "https://i.pravatar.cc/150?img=12" },
            { name: "Anna K.", role: "Streamer", text: "The intro he made for my streams is so clean. Getting compliments every day.", img: "https://i.pravatar.cc/150?img=20" },
            { name: "Tom H.", role: "Fitness Coach", text: "Made my workout videos look like a Nike commercial. Best investment for my brand.", img: "https://i.pravatar.cc/150?img=60" },
            { name: "Nina P.", role: "Tech Reviewer", text: "Clean text animations that explain complex specs beautifully. 10/10.", img: "https://i.pravatar.cc/150?img=35" },
            { name: "Leo M.", role: "Musician", text: "Edited my music video trailer and it built so much hype. Insane work.", img: "https://i.pravatar.cc/150?img=68" }
        ];

        const track = document.getElementById('testimonial-track');
        track.innerHTML = ''; // Clear prior structure

        clients.forEach((client, index) => {
            const serialNumber = String(index + 1).padStart(2, '0');
            const card = document.createElement('div');
            // Using full width for columns in grid layout
            card.className = "w-full glass-panel p-6 rounded-2xl flex flex-col gap-4 relative overflow-hidden group hover:border-[#B6FF3C]/30 transition-colors reveal";
            // Stagger animation slightly based on index
            card.style.transitionDelay = `${(index % 3) * 100}ms`;
            
            card.innerHTML = `
                <!-- Background Serial Number -->
                <div class="absolute -right-4 -top-4 text-[100px] leading-none font-space-grotesk font-bold text-white/[0.03] group-hover:text-[#B6FF3C]/10 transition-colors select-none z-0">
                    ${serialNumber}
                </div>
                
                <div class="flex items-center justify-between relative z-10">
                    <div class="flex items-center gap-1 text-[#B6FF3C] text-sm">
                        <iconify-icon icon="solar:star-bold"></iconify-icon>
                        <iconify-icon icon="solar:star-bold"></iconify-icon>
                        <iconify-icon icon="solar:star-bold"></iconify-icon>
                        <iconify-icon icon="solar:star-bold"></iconify-icon>
                        <iconify-icon icon="solar:star-bold"></iconify-icon>
                    </div>
                    <span class="text-[10px] uppercase tracking-widest text-[#B6FF3C] font-geist font-semibold bg-[#B6FF3C]/10 px-2 py-1 rounded-md border border-[#B6FF3C]/20">
                        Client #${serialNumber}
                    </span>
                </div>
                
                <p class="text-sm text-[#A0B3A8] italic flex-1 font-geist relative z-10 mt-2">"${client.text}"</p>
                
                <div class="flex items-center gap-3 mt-auto pt-4 border-t border-white/10 relative z-10">
                    <img src="${client.img}" class="w-10 h-10 rounded-full border border-white/20 object-cover" alt="${client.name}">
                    <div>
                        <h5 class="text-sm font-semibold text-white font-geist">${client.name}</h5>
                        <p class="text-xs text-[#6B7F75] font-geist">${client.role}</p>
                    </div>
                </div>
            `;
            track.appendChild(card);
            revealObserver.observe(card); // Ensure new dynamic items fade in on scroll
        });

        // 5. Lightbox Logic
        const lightbox = document.getElementById('lightbox');
        const closeLightbox = document.getElementById('closeLightbox');
        const triggers = document.querySelectorAll('.lightbox-trigger');
        const content = document.getElementById('lightboxContent');

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                lightbox.classList.remove('hidden');
                requestAnimationFrame(() => {
                    lightbox.classList.remove('opacity-0');
                    content.classList.remove('scale-95');
                });
            });
        });

        const closeMod = () => {
            lightbox.classList.add('opacity-0');
            content.classList.add('scale-95');
            setTimeout(() => lightbox.classList.add('hidden'), 300);
        };

        closeLightbox.addEventListener('click', closeMod);
        lightbox.addEventListener('click', (e) => {
            if(e.target === lightbox) closeMod();
        });

        // 6. Payment Popup Animation Simulation
        const popupBtns = document.querySelectorAll('.popup-btn');
        const alertBox = document.getElementById('paymentAlert');

        popupBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                alertBox.classList.remove('translate-y-20', 'opacity-0');
                setTimeout(() => {
                    alertBox.classList.add('translate-y-20', 'opacity-0');
                }, 3000);
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-4 right-4 z-50 flex items-center gap-4">

<a className="w-12 h-12 rounded-full bg-[#25D366] text-black flex items-center justify-center hover:scale-110 hover:shadow-[0_0_20px_#25D366] transition-all duration-300" href="https://wa.me/918475046358" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>

<div className="relative">
<button className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:border-[#B6FF3C] hover:text-[#B6FF3C] transition-colors" id="menuBtn">
<iconify-icon icon="solar:menu-dots-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<div className="absolute right-0 top-16 w-64 glass-panel rounded-xl p-4 opacity-0 pointer-events-none transition-all duration-300 transform translate-y-2" id="dropdownMenu">
<h4 className="text-xs font-semibold text-[#A0B3A8] mb-2 tracking-widest uppercase font-geist">Admin Access</h4>
<div className="space-y-2 text-sm text-[#A0B3A8]">
<div className="flex items-center gap-2 font-geist">
<iconify-icon icon="solar:letter-linear"></iconify-icon> rtfriderm@gmail.com
                    </div>
<div className="flex items-center gap-2 font-geist">
<iconify-icon icon="solar:key-linear"></iconify-icon> xxxxxxxx
                    </div>
</div>
<hr className="border-[#B6FF3C]/10 my-3"/>
<nav className="flex flex-col gap-2">
<a className="hover:text-[#B6FF3C] transition-colors text-sm font-geist" href="#about">About</a>
<a className="hover:text-[#B6FF3C] transition-colors text-sm font-geist" href="#services">Services</a>
<a className="hover:text-[#B6FF3C] transition-colors text-sm font-geist" href="#portfolio">Portfolio</a>
</nav>
</div>
</div>
</div>

<section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 cinematic-bg overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B6FF3C]/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="container mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs text-[#B6FF3C] mb-8 font-medium tracking-wide reveal active font-geist">
<span className="w-2 h-2 rounded-full bg-[#B6FF3C] animate-pulse"></span> Available for projects
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter mb-6 glow-text reveal active font-space-grotesk font-semibold" style={{transitionDelay: '100ms'}}>
                Hemesh Editor
            </h1>
<p className="text-lg md:text-xl text-[#A0B3A8] max-w-2xl mx-auto mb-10 font-light reveal active font-geist" style={{transitionDelay: '200ms'}}>
                Turning your vision into <span className="text-[#D8FF7A] font-geist">cinematic reality</span>. International-level video editing, motion graphics, and photography.
            </p>

<div className="flex flex-wrap items-center justify-center gap-4 mb-16 reveal active" style={{transitionDelay: '300ms'}}>
<a className="flex items-center gap-2 hover:shadow-[0_0_20px_#B6FF3C] hover:scale-105 transition-all sweep-effect font-semibold text-black font-geist bg-[#B6FF3C] rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#contact">
                    Hire Me <iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</a>
<a className="px-8 py-3.5 rounded-full border border-[#B6FF3C]/50 text-white font-semibold flex items-center gap-2 hover:bg-[#B6FF3C]/10 transition-all group font-geist" href="#portfolio">
                    View Portfolio <iconify-icon className="group-hover:text-[#B6FF3C] transition-colors" icon="solar:play-circle-linear" width="20"></iconify-icon>
</a>
</div>

<div className="flex flex-wrap justify-center gap-4 reveal active" style={{transitionDelay: '400ms'}}>
<a className="px-5 py-2.5 rounded-xl bg-[#B6FF3C] text-black text-sm font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_#B6FF3C] hover:scale-105 transition-all font-geist" href="https://youtube.com/@sb.tech.ax7?si=0VIsodl7vmKYDq9P" target="_blank">
<iconify-icon icon="solar:play-bold" width="18"></iconify-icon> YouTube
                </a>
<a className="px-5 py-2.5 rounded-xl bg-[#B6FF3C] text-black text-sm font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_#B6FF3C] hover:scale-105 transition-all font-geist" href="https://instagram.com/__ankit_777r" target="_blank">
<iconify-icon icon="solar:camera-bold" width="18"></iconify-icon> Instagram
                </a>
<a className="px-5 py-2.5 rounded-xl bg-[#B6FF3C] text-black text-sm font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_#B6FF3C] hover:scale-105 transition-all font-geist" href="mailto:rtfriderm@gmail.com">
<iconify-icon icon="solar:letter-bold" width="18"></iconify-icon> Email
                </a>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-[#0B1410]" id="about">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative group reveal">
<div className="absolute inset-0 bg-gradient-to-tr from-[#00FFC6] to-[#B6FF3C] rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
<div className="glass-panel p-2 rounded-2xl relative">
<div className="w-full h-[400px] md:h-[500px] rounded-xl bg-[#1A3A2A] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
<img alt="Hemesh" className="w-full h-full object-cover mix-blend-luminosity opacity-70" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
<div className="space-y-6 reveal-right">
<h2 className="text-4xl md:text-5xl tracking-tighter font-space-grotesk font-semibold">
                        The Architect of <br/><span className="text-[#B6FF3C] font-space-grotesk font-semibold">Visual Stories.</span>
</h2>
<div className="space-y-4 text-[#A0B3A8]">
<p className="flex items-center gap-3 font-geist"><iconify-icon className="text-[#00FFC6]" icon="solar:user-id-linear" width="24"></iconify-icon> <span className="text-white font-medium font-geist">Name:</span> Hemesh Kumar</p>
<p className="flex items-center gap-3 font-geist"><iconify-icon className="text-[#00FFC6]" icon="solar:book-linear" width="24"></iconify-icon> <span className="text-white font-medium font-geist">Course:</span> BBA (F&amp;T), ADCA</p>
<div className="pt-4 pb-2">
<h4 className="text-sm uppercase tracking-widest text-[#6B7F75] mb-3 font-geist">Core Skills</h4>
<p className="text-lg text-white font-heading font-medium leading-relaxed sweep-effect text-transparent bg-clip-text bg-gradient-to-r from-white via-[#B6FF3C] to-white bg-[length:200%_auto] font-geist">
                                Video Editing • Photography • Motion Graphics • Typography • Color Grading
                            </p>
</div>
<div className="glass-panel p-4 rounded-xl mt-6 border-l-2 border-l-[#B6FF3C]">
<p className="text-sm text-[#D8FF7A] flex items-start gap-2 font-geist">
<iconify-icon className="shrink-0" icon="solar:star-fall-linear" width="20"></iconify-icon>
                                Highlights: Successfully collaborated with top creators &amp; brands to deliver high-retention cinematic content.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5" id="services">
<div className="container mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-4 font-space-grotesk font-semibold">Premium <span className="text-[#B6FF3C] font-space-grotesk font-semibold">Services</span></h2>
<p className="text-[#A0B3A8] max-w-xl mx-auto font-geist">Crafting visual excellence across every discipline.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl glow-hover group reveal-right" style={{transitionDelay: '100ms'}}>
<iconify-icon className="text-[#B6FF3C] mb-6 group-hover:scale-110 transition-transform" icon="solar:video-frame-linear" width="40"></iconify-icon>
<a className="block" href="https://youtube.com/shorts/58z7cM7RBok?si=IKRCLcrjjPammcx2" target="_blank">
<h3 className="text-xl mb-2 group-hover:text-[#B6FF3C] transition-colors font-space-grotesk font-semibold">Cinematic Editing</h3>
</a>
<p className="text-sm text-[#A0B3A8] mb-6 min-h-[40px] font-geist">High-retention storytelling with premium color grading.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl text-white font-space-grotesk font-semibold">₹400</span>
<a className="text-xs bg-white/5 hover:bg-[#B6FF3C] hover:text-black px-4 py-2 rounded-lg transition-all font-medium border border-white/10 hover:border-transparent popup-btn font-geist" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH%20KUMAR&amp;mc=0000&amp;mode=02&amp;purpose=00">Order Now</a>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl glow-hover group reveal-right" style={{transitionDelay: '200ms'}}>
<iconify-icon className="text-[#00FFC6] mb-6 group-hover:scale-110 transition-transform" icon="solar:magic-stick-3-linear" width="40"></iconify-icon>
<a className="block" href="https://www.instagram.com/reel/DVFy2HtDXQq/?igsh=NTd1ZHdoNGh5d3Vl" target="_blank">
<h3 className="text-xl mb-2 group-hover:text-[#00FFC6] transition-colors font-space-grotesk font-semibold">Motion Graphics</h3>
</a>
<p className="text-sm text-[#A0B3A8] mb-6 min-h-[40px] font-geist">Dynamic animations and visual effects that captivate.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl text-white font-space-grotesk font-semibold">₹500</span>
<a className="text-xs bg-white/5 hover:bg-[#B6FF3C] hover:text-black px-4 py-2 rounded-lg transition-all font-medium border border-white/10 hover:border-transparent popup-btn font-geist" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH%20KUMAR&amp;mc=0000&amp;mode=02&amp;purpose=00">Order Now</a>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl glow-hover group reveal-right" style={{transitionDelay: '300ms'}}>
<iconify-icon className="text-[#D8FF7A] mb-6 group-hover:scale-110 transition-transform" icon="solar:text-field-focus-linear" width="40"></iconify-icon>
<h3 className="text-xl mb-2 font-space-grotesk font-semibold">Typography</h3>
<p className="text-sm text-[#A0B3A8] mb-6 min-h-[40px] font-geist">Kinetic text animations and title design.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl text-white font-space-grotesk font-semibold">₹250</span>
<a className="text-xs bg-white/5 hover:bg-[#B6FF3C] hover:text-black px-4 py-2 rounded-lg transition-all font-medium border border-white/10 hover:border-transparent popup-btn font-geist" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH%20KUMAR&amp;mc=0000&amp;mode=02&amp;purpose=00">Order Now</a>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl glow-hover group reveal-right" style={{transitionDelay: '400ms'}}>
<iconify-icon className="text-[#B6FF3C] mb-6 group-hover:scale-110 transition-transform" icon="solar:gallery-bold-duotone" width="40"></iconify-icon>
<a className="block" href="http://youtube.com/post/UgkxLSru9O19ZeDuOpQ1GW9zGC5EqUe6jwJY?si=_Q-ZL904GpxCBzmz" target="_blank">
<h3 className="text-xl mb-2 group-hover:text-[#B6FF3C] transition-colors font-space-grotesk font-semibold">Thumbnail Design</h3>
</a>
<p className="text-sm text-[#A0B3A8] mb-6 min-h-[40px] font-geist">High CTR custom thumbnails for YouTube.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl text-white font-space-grotesk font-semibold">₹100</span>
<a className="text-xs bg-white/5 hover:bg-[#B6FF3C] hover:text-black px-4 py-2 rounded-lg transition-all font-medium border border-white/10 hover:border-transparent popup-btn font-geist" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH%20KUMAR&amp;mc=0000&amp;mode=02&amp;purpose=00">Order Now</a>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl glow-hover group reveal-right" style={{transitionDelay: '500ms'}}>
<iconify-icon className="text-[#00FFC6] mb-6 group-hover:scale-110 transition-transform" icon="solar:clapperboard-play-linear" width="40"></iconify-icon>
<a className="block" href="https://youtu.be/9BxLpIM4Pgs?si=j-jXx2e30yIJtocL" target="_blank">
<h3 className="text-xl mb-2 group-hover:text-[#00FFC6] transition-colors font-space-grotesk font-semibold">Movie Trailer</h3>
</a>
<p className="text-sm text-[#A0B3A8] mb-6 min-h-[40px] font-geist">Impactful, dramatic cuts to tease your content.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl text-white font-space-grotesk font-semibold">₹150</span>
<a className="text-xs bg-white/5 hover:bg-[#B6FF3C] hover:text-black px-4 py-2 rounded-lg transition-all font-medium border border-white/10 hover:border-transparent popup-btn font-geist" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH%20KUMAR&amp;mc=0000&amp;mode=02&amp;purpose=00">Order Now</a>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl glow-hover group reveal-right" style={{transitionDelay: '600ms'}}>
<iconify-icon className="text-[#D8FF7A] mb-6 group-hover:scale-110 transition-transform" icon="solar:screencast-2-linear" width="40"></iconify-icon>
<h3 className="text-xl mb-2 font-space-grotesk font-semibold">Intro / Outro</h3>
<p className="text-sm text-[#A0B3A8] mb-6 min-h-[40px] font-geist">Branded openers and end screens.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-2xl text-white font-space-grotesk font-semibold">Custom</span>
<a className="text-xs bg-white/5 hover:bg-[#B6FF3C] hover:text-black px-4 py-2 rounded-lg transition-all font-medium border border-white/10 hover:border-transparent popup-btn font-geist" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH%20KUMAR&amp;mc=0000&amp;mode=02&amp;purpose=00">Order Now</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-[#0B1410]" id="portfolio">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
<div>
<h2 className="text-4xl md:text-5xl tracking-tighter mb-4 font-space-grotesk font-semibold">Selected <span className="text-[#B6FF3C] font-space-grotesk font-semibold">Works</span></h2>
<p className="text-[#A0B3A8] font-geist">Click to preview cinematic projects.</p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full bg-[#B6FF3C] text-black text-sm font-medium transition-colors font-geist">All</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 hover:border-[#B6FF3C]/50 text-[#A0B3A8] hover:text-white text-sm font-medium transition-colors font-geist">Editing</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 hover:border-[#B6FF3C]/50 text-[#A0B3A8] hover:text-white text-sm font-medium transition-colors font-geist">Motion Ads</button>
<button className="px-4 py-1.5 rounded-full border border-white/10 hover:border-[#B6FF3C]/50 text-[#A0B3A8] hover:text-white text-sm font-medium transition-colors font-geist">Thumbnails</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1A3A2A] aspect-video reveal lightbox-trigger">
<img alt="Work 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<iconify-icon className="text-[#B6FF3C] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" icon="solar:play-circle-bold" width="48"></iconify-icon>
<span className="text-xs text-[#00FFC6] font-medium mb-1 font-geist">Cinematic Edit</span>
<h4 className="font-heading text-lg font-semibold font-geist">Urban Neon Drift</h4>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1A3A2A] aspect-video reveal lightbox-trigger" style={{transitionDelay: '100ms'}}>
<img alt="Work 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<iconify-icon className="text-[#B6FF3C] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" icon="solar:play-circle-bold" width="48"></iconify-icon>
<span className="text-xs text-[#00FFC6] font-medium mb-1 font-geist">Motion Ad</span>
<h4 className="font-heading text-lg font-semibold font-geist">Tech Product Launch</h4>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer bg-[#1A3A2A] aspect-video reveal lightbox-trigger" style={{transitionDelay: '200ms'}}>
<img alt="Work 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<iconify-icon className="text-[#B6FF3C] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500" icon="solar:gallery-bold" width="48"></iconify-icon>
<span className="text-xs text-[#00FFC6] font-medium mb-1 font-geist">Thumbnail</span>
<h4 className="font-heading text-lg font-semibold font-geist">Creator Vlog Cover</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5">
<div className="container mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-4 font-space-grotesk font-semibold">Transparent <span className="text-[#B6FF3C] font-space-grotesk font-semibold">Pricing</span></h2>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="glass-panel p-8 rounded-3xl flex flex-col reveal">
<h3 className="text-xl text-[#A0B3A8] mb-4 font-space-grotesk font-semibold">Basic Editing</h3>
<div className="text-4xl mb-6 font-space-grotesk font-semibold">₹300<span className="text-sm text-[#6B7F75] font-normal font-geist">/min</span></div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-[#A0B3A8]">
<li className="flex items-center gap-2 font-geist"><iconify-icon className="text-[#B6FF3C]" icon="solar:check-circle-bold"></iconify-icon> Crisp Cuts &amp; Trimming</li>
<li className="flex items-center gap-2 font-geist"><iconify-icon className="text-[#B6FF3C]" icon="solar:check-circle-bold"></iconify-icon> Basic Color Correction</li>
<li className="flex items-center gap-2 font-geist"><iconify-icon className="text-[#B6FF3C]" icon="solar:check-circle-bold"></iconify-icon> Standard Text overlays</li>
</ul>
<a className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-center hover:bg-[#B6FF3C] hover:text-black hover:border-transparent transition-all popup-btn text-sm font-geist" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH%20KUMAR&amp;mc=0000&amp;mode=02&amp;purpose=00">Pay Now</a>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col relative transform md:-translate-y-4 border-[#B6FF3C]/50 shadow-[0_0_30px_rgba(182,255,60,0.1)] reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B6FF3C] text-black text-xs font-semibold px-3 py-1 rounded-full font-geist">Most Popular</div>
<h3 className="text-xl text-white mb-4 font-space-grotesk font-semibold">Advanced Cinematic</h3>
<div className="text-4xl mb-6 text-[#B6FF3C] font-space-grotesk font-semibold">₹800<span className="text-sm text-[#6B7F75] font-normal text-white font-geist">/min</span></div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-[#A0B3A8]">
<li className="flex items-center gap-2 text-white font-geist"><iconify-icon className="text-[#B6FF3C]" icon="solar:check-circle-bold"></iconify-icon> Hollywood Color Grading</li>
<li className="flex items-center gap-2 text-white font-geist"><iconify-icon className="text-[#B6FF3C]" icon="solar:check-circle-bold"></iconify-icon> Motion Graphics &amp; VFX</li>
<li className="flex items-center gap-2 text-white font-geist"><iconify-icon className="text-[#B6FF3C]" icon="solar:check-circle-bold"></iconify-icon> Premium Sound Design</li>
</ul>
<a className="w-full py-3 rounded-xl bg-[#B6FF3C] text-black font-semibold text-center hover:shadow-[0_0_20px_#B6FF3C] hover:scale-105 transition-all popup-btn sweep-effect text-sm font-geist" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH%20KUMAR&amp;mc=0000&amp;mode=02&amp;purpose=00">Pay Now</a>
</div>

<div className="glass-panel p-8 rounded-3xl flex flex-col reveal" style={{transitionDelay: '200ms'}}>
<h3 className="text-xl text-[#A0B3A8] mb-4 font-space-grotesk font-semibold">Thumbnail Pack</h3>
<div className="text-4xl mb-6 font-space-grotesk font-semibold">₹400<span className="text-sm text-[#6B7F75] font-normal font-geist">/5 pcs</span></div>
<ul className="space-y-4 mb-8 flex-1 text-sm text-[#A0B3A8]">
<li className="flex items-center gap-2 font-geist"><iconify-icon className="text-[#B6FF3C]" icon="solar:check-circle-bold"></iconify-icon> High CTR Concepts</li>
<li className="flex items-center gap-2 font-geist"><iconify-icon className="text-[#B6FF3C]" icon="solar:check-circle-bold"></iconify-icon> Photo Manipulation</li>
<li className="flex items-center gap-2 font-geist"><iconify-icon className="text-[#B6FF3C]" icon="solar:check-circle-bold"></iconify-icon> Source Files Included</li>
</ul>
<a className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-center hover:bg-[#B6FF3C] hover:text-black hover:border-transparent transition-all popup-btn text-sm font-geist" href="upi://pay?pa=8475046358@axl&amp;pn=HEMESH%20KUMAR&amp;mc=0000&amp;mode=02&amp;purpose=00">Pay Now</a>
</div>
</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5 bg-[#0B1410]">
<div className="container mx-auto px-6 mb-12 text-center reveal">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-4 font-space-grotesk font-semibold">Client <span className="text-[#B6FF3C] font-space-grotesk font-semibold">Trust</span></h2>
<p className="text-[#A0B3A8] font-geist">Feedback from creators worldwide.</p>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="testimonial-track">

</div>
</div>
</section>

<section className="py-24 relative border-t border-white/5" id="contact">
<div className="container mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
<div className="reveal">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 font-space-grotesk font-semibold">Let's build something <br/><span className="text-[#B6FF3C] font-space-grotesk font-semibold">legendary.</span></h2>
<p className="text-[#A0B3A8] mb-10 font-geist">Ready to elevate your content? Drop a message and let's discuss your next cinematic project.</p>
<div className="space-y-6">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#B6FF3C] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-[#6B7F75] mb-1 font-geist">Email</p>
<a className="text-lg font-medium hover:text-[#B6FF3C] transition-colors font-geist" href="mailto:rtfriderm@gmail.com">rtfriderm@gmail.com</a>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#B6FF3C] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-[#6B7F75] mb-1 font-geist">Phone / WhatsApp</p>
<p className="text-lg font-medium text-white font-geist">8475046358</p>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center text-[#B6FF3C] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm text-[#6B7F75] mb-1 font-geist">Instagram</p>
<a className="text-lg font-medium hover:text-[#B6FF3C] transition-colors font-geist" href="https://instagram.com/__ankit_777r" target="_blank">@__ankit_777r</a>
</div>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-3xl reveal-right">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Message sent conceptually!');">
<div>
<label className="block text-xs font-medium text-[#A0B3A8] mb-2 font-geist">Name</label>
<input className="w-full bg-[#050807] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B6FF3C]/50 transition-colors placeholder:text-[#6B7F75]" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-[#A0B3A8] mb-2 font-geist">Email</label>
<input className="w-full bg-[#050807] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B6FF3C]/50 transition-colors placeholder:text-[#6B7F75]" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-[#A0B3A8] mb-2 font-geist">Message</label>
<textarea className="w-full bg-[#050807] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#B6FF3C]/50 transition-colors placeholder:text-[#6B7F75] resize-none" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 mt-2 rounded-xl bg-[#B6FF3C] text-black font-semibold hover:shadow-[0_0_20px_#B6FF3C] hover:scale-[1.02] transition-all sweep-effect flex justify-center items-center gap-2 font-geist" type="submit">
                            Let's Work Together <iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-8 border-t border-white/10 bg-[#050807]">
<div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xl tracking-widest text-white/80 font-space-grotesk font-semibold">H E M E S H</div>
<div className="flex gap-6 text-sm text-[#A0B3A8]">
<a className="hover:text-[#B6FF3C] transition-colors font-geist" href="#about">About</a>
<a className="hover:text-[#B6FF3C] transition-colors font-geist" href="#services">Services</a>
<a className="hover:text-[#B6FF3C] transition-colors font-geist" href="#portfolio">Portfolio</a>
</div>
<p className="text-xs text-[#6B7F75] font-geist">© 2023 Hemesh Editor. All rights reserved.</p>
</div>
</footer>

<div className="fixed inset-0 z-[100] bg-black/95 hidden items-center justify-center opacity-0 transition-opacity duration-300" id="lightbox">
<button className="absolute top-6 right-6 text-white hover:text-[#B6FF3C] transition-colors" id="closeLightbox">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1" width="40"></iconify-icon>
</button>
<div className="w-full max-w-4xl p-6 transform scale-95 transition-transform duration-300" id="lightboxContent">

<div className="w-full aspect-video bg-[#1A3A2A] rounded-2xl border border-white/10 flex items-center justify-center flex-col relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&amp;w=1200')] bg-cover bg-center opacity-30"></div>
<iconify-icon className="text-[#B6FF3C] z-10 animate-pulse" icon="solar:play-circle-bold" width="80"></iconify-icon>
<p className="text-white mt-4 z-10 font-heading tracking-widest text-sm font-geist">CINEMATIC PREVIEW</p>
</div>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 glass-panel px-6 py-3 rounded-full text-sm font-medium flex items-center gap-3 transform translate-y-20 opacity-0 transition-all duration-500 z-50 font-geist" id="paymentAlert">
<iconify-icon className="text-[#B6FF3C]" icon="solar:wallet-check-linear" width="20"></iconify-icon>
        Redirecting to UPI gateway...
    </div>


    </>
  );
}
