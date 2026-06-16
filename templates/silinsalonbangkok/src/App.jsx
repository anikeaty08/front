import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Reveal Animation on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            mobileMenu.classList.toggle('translate-x-full');
            document.body.classList.toggle('overflow-hidden');
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-sm', 'bg-[#F8F5F1]/95');
            } else {
                nav.classList.remove('shadow-sm', 'bg-[#F8F5F1]/80');
            }
        });

        // Before/After Slider Logic
        function slide(event, element) {
            const rect = element.getBoundingClientRect();
            let x = event.clientX || event.touches[0].clientX;
            let position = ((x - rect.left) / rect.width) * 100;
            position = Math.max(0, Math.min(100, position));

            const beforeImg = element.querySelector('.before-img');
            const handle = element.querySelector('.resize-handle');
            
            beforeImg.style.width = `${position}%`;
            handle.style.left = `${position}%`;
        }

        // Service Accordion Logic
        function toggleService(element) {
            const content = element.querySelector('.service-content');
            const icon = element.querySelector('.icon-plus');
            
            // Toggle current
            const isOpen = content.classList.contains('open');
            
            // Close all others
            document.querySelectorAll('.service-content').forEach(el => {
                el.classList.remove('open');
                el.parentElement.querySelector('.icon-plus').classList.remove('rotate-45');
                el.parentElement.classList.remove('bg-white', 'shadow-md');
            });

            if (!isOpen) {
                content.classList.add('open');
                icon.classList.add('rotate-45');
                element.classList.add('bg-white', 'shadow-md');
                
                // Scroll into view slightly if needed
                setTimeout(() => {
                    const yOffset = -100; 
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({top: y, behavior: 'smooth'});
                }, 300);
            }
        }

        // Simulated Auto Translation Logic
        let currentLang = 'EN';
        function toggleLanguage() {
            currentLang = currentLang === 'EN' ? 'TH' : 'EN';
            document.getElementById('lang-indicator').innerText = currentLang;
            
            const translatableElements = document.querySelectorAll('[data-en]');
            
            translatableElements.forEach(el => {
                // Add a small fade effect
                el.style.opacity = '0';
                setTimeout(() => {
                    if (currentLang === 'TH') {
                        el.innerText = el.getAttribute('data-th');
                    } else {
                        el.innerText = el.getAttribute('data-en');
                    }
                    el.style.opacity = '1';
                }, 200);
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-[#F8F5F1]/80 border-b border-stone-200/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="flex flex-col items-center leading-none group" href="#">
<span className="font-script text-4xl text-stone-900 -mb-2 relative z-10">Silin</span>
<span className="font-serif text-[10px] tracking-[0.3em] text-stone-900 uppercase ml-1">Salon</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" data-en="Services" data-th="บริการ" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors" data-en="Gallery" data-th="แกลเลอรี" href="#gallery">Gallery</a>
<a className="hover:text-stone-900 transition-colors" data-en="Stories" data-th="รีวิว" href="#reviews">Stories</a>
<a className="hover:text-stone-900 transition-colors" data-en="Locations" data-th="สาขา" href="#locations">Locations</a>
</div>
<div className="flex items-center gap-4">

<button className="text-xs font-medium border border-stone-300 rounded-full px-3 py-1 hover:bg-stone-200 transition-colors flex items-center gap-2" onclick="toggleLanguage()">
<span id="lang-indicator">EN</span>
<i className="w-3 h-3" data-lucide="globe"></i>
</button>
<a className="hidden md:flex items-center gap-2 bg-[#06C755] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#05b34c] transition-all shadow-lg shadow-green-900/10" href="https://line.me/ti/p/example" target="_blank">
<span className="font-sans font-semibold" data-en="Book via LINE" data-th="จองผ่าน LINE">Book via LINE</span>
<i className="w-4 h-4" data-lucide="message-circle"></i>
</a>
<button className="md:hidden" id="mobile-menu-btn">
<i className="w-6 h-6 text-stone-800" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-[#F8F5F1] z-40 transform translate-x-full transition-transform duration-300 flex flex-col items-center justify-center space-y-8" id="mobile-menu">
<a className="text-3xl font-serif text-stone-800 mobile-link" data-en="Services" data-th="บริการ" href="#services">Services</a>
<a className="text-3xl font-serif text-stone-800 mobile-link" data-en="Gallery" data-th="แกลเลอรี" href="#gallery">Gallery</a>
<a className="text-3xl font-serif text-stone-800 mobile-link" data-en="Locations" data-th="สาขา" href="#locations">Locations</a>
<a className="mt-8 bg-[#06C755] text-white px-8 py-3 rounded-full text-lg font-medium shadow-xl" href="https://line.me/ti/p/example">
            Book Appointment
        </a>
<button className="absolute top-6 right-6" id="close-menu">
<i className="w-8 h-8 text-stone-800" data-lucide="x"></i>
</button>
</div>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-[120px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative z-10 reveal-on-scroll">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 mb-8 shadow-sm">
<span className="w-2 h-2 rounded-full bg-[#06C755]"></span>
<span className="text-xs font-medium uppercase tracking-wider text-stone-500" data-en="5 Locations in Bangkok" data-th="5 สาขาในกรุงเทพฯ">5 Locations in Bangkok</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.1]">
<span data-en="Unlock your hair's" data-th="ปลดล็อคศักยภาพ">Unlock your hair's</span> <br/>
<span className="italic text-stone-500" data-en="true potential." data-th="เส้นผมของคุณ">true potential.</span>
</h1>
<p className="text-xl text-stone-600 mb-10 max-w-md leading-normal" data-en="Experience the Silin standard. Precision cuts, organic treatments, and color correction across 5 premium locations." data-th="สัมผัสมาตรฐาน Silin ตัดผมอย่างแม่นยำ ทรีตเมนต์ออร์แกนิก และแก้ไขสีผม พร้อมให้บริการทั้ง 5 สาขา">
                    Experience the Silin standard. Precision cuts, organic treatments, and color correction across 5 premium locations.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-stone-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-stone-800 transition-all flex items-center gap-2 shadow-xl shadow-stone-900/10" href="https://line.me/ti/p/example">
<span data-en="Book Now" data-th="จองทันที">Book Now</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="px-8 py-4 rounded-full text-base font-medium text-stone-700 hover:bg-stone-100 transition-all border border-stone-200 bg-white/50 backdrop-blur-sm" data-en="View Services" data-th="ดูบริการ" href="#services">
                        View Services
                    </a>
</div>
<div className="mt-12 flex items-center gap-4">
<div className="flex -space-x-4">
<img alt="Client" className="w-12 h-12 rounded-full border-2 border-[#F8F5F1] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-12 h-12 rounded-full border-2 border-[#F8F5F1] object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-12 h-12 rounded-full border-2 border-[#F8F5F1] object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div>
<div className="flex items-center text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-xs font-medium text-stone-500 mt-1" data-en="Trusted by 5,000+ clients" data-th="ลูกค้าไว้วางใจกว่า 5,000 คน">Trusted by 5,000+ clients</p>
</div>
</div>
</div>
<div className="relative h-[600px] hidden lg:block reveal-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="absolute top-10 left-10 w-64 h-80 rounded-[4rem] overflow-hidden shadow-2xl rotate-[-4deg] z-20 hover:rotate-0 transition-transform duration-500">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-white/50 backdrop-blur-md bg-white/30 z-30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
<div className="w-full h-full rounded-full border-dashed border-2 border-stone-400 opacity-30"></div>
<span className="font-script text-3xl text-stone-800 absolute">Silin</span>
</div>
<div className="absolute bottom-20 right-10 w-56 h-72 rounded-[3rem] overflow-hidden shadow-2xl rotate-[6deg] z-10 hover:rotate-0 transition-transform duration-500">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="absolute top-20 right-20 w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-white z-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="services">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal-on-scroll">
<div>
<span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-2 block" data-en="Experience" data-th="ประสบการณ์">Experience</span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight" data-en="Our Signature Services" data-th="บริการที่เป็นเอกลักษณ์ของเรา">Our Signature Services</h2>
</div>
<p className="mt-4 md:mt-0 max-w-xs text-stone-500 text-sm" data-en="Tap to explore details and view real results from our clients." data-th="แตะเพื่อดูรายละเอียดและผลลัพธ์จริงจากลูกค้าของเรา">Tap to explore details and view real results from our clients.</p>
</div>
<div className="space-y-6">

<div className="group border border-stone-200 rounded-3xl overflow-hidden bg-[#F8F5F1]/50 hover:bg-[#F8F5F1] transition-all duration-300 reveal-on-scroll cursor-pointer" onclick="toggleService(this)">
<div className="p-8 flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-stone-200 text-stone-400 group-hover:text-stone-900 group-hover:scale-110 transition-all">
<i className="w-5 h-5" data-lucide="scissors"></i>
</div>
<div>
<h3 className="text-2xl font-serif text-stone-900" data-en="Precision Cut &amp; Style" data-th="ตัดผมและจัดแต่งทรง">Precision Cut &amp; Style</h3>
<p className="text-stone-500 text-sm mt-1">Starting from 800 THB</p>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center transition-transform duration-300 transform group-hover:rotate-90 icon-plus">
<i className="w-4 h-4 text-stone-500" data-lucide="plus"></i>
</div>
</div>
<div className="service-content">
<div className="service-inner px-8 pb-8">
<p className="text-stone-600 mb-6 max-w-2xl leading-relaxed" data-en="A personalized consultation followed by a precision cut tailored to your face shape and lifestyle. Includes a relaxing scalp massage, wash, and signature blow-dry styling." data-th="การปรึกษาส่วนตัวตามด้วยการตัดผมที่เหมาะกับรูปหน้าและไลฟ์สไตล์ของคุณ รวมบริการนวดหนังศีรษะ สระผม และไดร์จัดแต่งทรง">
                                A personalized consultation followed by a precision cut tailored to your face shape and lifestyle. Includes a relaxing scalp massage, wash, and signature blow-dry styling.
                            </p>
<h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">Gallery</h4>

<div className="flex gap-4 overflow-x-auto hide-scroll snap-x-mandatory pb-4">
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium">Layered Bob</span>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium">Pixie Cut</span>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium">Long Layers</span>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center relative flex items-center justify-center bg-stone-100 group-hover:bg-white transition-colors">
<a className="flex flex-col items-center gap-2 text-stone-500 hover:text-stone-900" href="#gallery">
<div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
<span className="text-xs font-medium">View All</span>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="group border border-stone-200 rounded-3xl overflow-hidden bg-[#F8F5F1]/50 hover:bg-[#F8F5F1] transition-all duration-300 reveal-on-scroll cursor-pointer" onclick="toggleService(this)">
<div className="p-8 flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-stone-200 text-stone-400 group-hover:text-stone-900 group-hover:scale-110 transition-all">
<i className="w-5 h-5" data-lucide="palette"></i>
</div>
<div>
<h3 className="text-2xl font-serif text-stone-900" data-en="Organic Color &amp; Balayage" data-th="ทำสีออร์แกนิกและบาลายาจ">Organic Color &amp; Balayage</h3>
<p className="text-stone-500 text-sm mt-1">Starting from 2,500 THB</p>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center transition-transform duration-300 transform group-hover:rotate-90 icon-plus">
<i className="w-4 h-4 text-stone-500" data-lucide="plus"></i>
</div>
</div>
<div className="service-content">
<div className="service-inner px-8 pb-8">
<p className="text-stone-600 mb-6 max-w-2xl leading-relaxed" data-en="Using premium ammonia-free organic products. Our specialized balayage technique creates natural, sun-kissed dimensions that grow out seamlessly." data-th="ใช้ผลิตภัณฑ์ออร์แกนิกพรีเมียมปราศจากแอมโมเนีย เทคนิคบาลายาจพิเศษของเราสร้างมิติที่เป็นธรรมชาติ">
                                Using premium ammonia-free organic products. Our specialized balayage technique creates natural, sun-kissed dimensions that grow out seamlessly.
                            </p>
<h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">Gallery</h4>
<div className="flex gap-4 overflow-x-auto hide-scroll snap-x-mandatory pb-4">
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595867372361-92b774026604?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium">Ash Blonde Balayage</span>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium">Copper Tones</span>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620331313174-d7ee76b628a9?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium">Full Color</span>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center relative flex items-center justify-center bg-stone-100 group-hover:bg-white transition-colors">
<a className="flex flex-col items-center gap-2 text-stone-500 hover:text-stone-900" href="#gallery">
<div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
<span className="text-xs font-medium">View All</span>
</a>
</div>
</div>
</div>
</div>
</div>

<div className="group border border-stone-200 rounded-3xl overflow-hidden bg-[#F8F5F1]/50 hover:bg-[#F8F5F1] transition-all duration-300 reveal-on-scroll cursor-pointer" onclick="toggleService(this)">
<div className="p-8 flex items-center justify-between">
<div className="flex items-center gap-6">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center border border-stone-200 text-stone-400 group-hover:text-stone-900 group-hover:scale-110 transition-all">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<div>
<h3 className="text-2xl font-serif text-stone-900" data-en="Keratin &amp; Treatments" data-th="เคราตินและทรีตเมนต์">Keratin &amp; Treatments</h3>
<p className="text-stone-500 text-sm mt-1">Starting from 3,500 THB</p>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center transition-transform duration-300 transform group-hover:rotate-90 icon-plus">
<i className="w-4 h-4 text-stone-500" data-lucide="plus"></i>
</div>
</div>
<div className="service-content">
<div className="service-inner px-8 pb-8">
<p className="text-stone-600 mb-6 max-w-2xl leading-relaxed" data-en="Restore health and shine to damaged hair. Our Brazilian Keratin treatment smooths frizz for up to 4 months, while our Detox Spa rejuvenates the scalp." data-th="คืนสุขภาพและความเงางามให้กับผมเสีย ทรีตเมนต์เคราตินบราซิลเลียนของเราช่วยลดผมชี้ฟูได้นานถึง 4 เดือน">
                                Restore health and shine to damaged hair. Our Brazilian Keratin treatment smooths frizz for up to 4 months, while our Detox Spa rejuvenates the scalp.
                            </p>
<h4 className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">Gallery</h4>
<div className="flex gap-4 overflow-x-auto hide-scroll snap-x-mandatory pb-4">
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1492106087820-71f171d7d32c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium">Keratin Results</span>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519699047748-40baea614f42?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
<span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-medium">Hair Spa</span>
</div>
<div className="min-w-[280px] h-[350px] rounded-2xl overflow-hidden snap-center relative flex items-center justify-center bg-stone-100 group-hover:bg-white transition-colors">
<a className="flex flex-col items-center gap-2 text-stone-500 hover:text-stone-900" href="#gallery">
<div className="w-12 h-12 rounded-full border border-stone-300 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</div>
<span className="text-xs font-medium">View All</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center reveal-on-scroll">
<a className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-stone-800 transition-all" href="https://line.me/ti/p/example">
<span data-en="Consultation via Line" data-th="ปรึกษาทาง LINE">Consultation via Line</span>
<i className="w-4 h-4" data-lucide="message-circle"></i>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#F8F5F1]" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 tracking-tight" data-en="Before &amp; After" data-th="ก่อนและหลัง">Before &amp; After</h2>
<p className="text-stone-500" data-en="Slide to see the transformation." data-th="เลื่อนเพื่อดูการเปลี่ยนแปลง">Slide to see the transformation.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg reveal-on-scroll comparison-container group">
<div className="before-after-slider w-full h-full" onmousemove="slide(event, this)" ontouchmove="slide(event, this)">
<div className="after-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&amp'}}></div>
<div className="before-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&amp', width: '50%'}}></div>
<div className="resize-handle" style={{left: '50%'}}>
<div className="resize-circle">
<i className="w-4 h-4" data-lucide="move-horizontal"></i>
</div>
</div>
</div>
<div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
<span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-medium text-stone-900">Color Correction</span>
</div>
</div>

<div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg reveal-on-scroll comparison-container group" style={{transitionDelay: '100ms'}}>
<div className="before-after-slider w-full h-full" onmousemove="slide(event, this)" ontouchmove="slide(event, this)">
<div className="after-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1492106087820-71f171d7d32c?auto=format&amp'}}></div>
<div className="before-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&amp', width: '50%'}}></div>
<div className="resize-handle" style={{left: '50%'}}>
<div className="resize-circle">
<i className="w-4 h-4" data-lucide="move-horizontal"></i>
</div>
</div>
</div>
<div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
<span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-medium text-stone-900">Keratin Treatment</span>
</div>
</div>

<div className="relative h-[500px] rounded-2xl overflow-hidden shadow-lg reveal-on-scroll comparison-container group" style={{transitionDelay: '200ms'}}>
<div className="before-after-slider w-full h-full" onmousemove="slide(event, this)" ontouchmove="slide(event, this)">
<div className="after-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1595867372361-92b774026604?auto=format&amp'}}></div>
<div className="before-img" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1616428230230-0584b4249a50?auto=format&amp', width: '50%'}}></div>
<div className="resize-handle" style={{left: '50%'}}>
<div className="resize-circle">
<i className="w-4 h-4" data-lucide="move-horizontal"></i>
</div>
</div>
</div>
<div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
<span className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-medium text-stone-900">Balayage</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-100" id="locations">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal-on-scroll">
<div>
<span className="text-xs font-medium tracking-widest text-stone-500 uppercase mb-2 block" data-en="Visit Us" data-th="เยี่ยมชมเรา">Visit Us</span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 tracking-tight" data-en="5 Locations in Bangkok" data-th="5 สาขาในกรุงเทพฯ">5 Locations in Bangkok</h2>
</div>
<a className="mt-4 md:mt-0 text-stone-500 hover:text-stone-900 border-b border-stone-300 hover:border-stone-900 transition-colors pb-1" href="#">View Map</a>
</div>
<div className="grid md:grid-cols-5 gap-6 reveal-on-scroll">

<div className="group cursor-pointer">
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-serif text-lg text-stone-900">Thong Lo (HQ)</h3>
<p className="text-xs text-stone-500 mt-1">Sukhumvit 55</p>
</div>

<div className="group cursor-pointer" style={{transitionDelay: '50ms'}}>
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-serif text-lg text-stone-900">Siam Paragon</h3>
<p className="text-xs text-stone-500 mt-1">2nd Floor, North Zone</p>
</div>

<div className="group cursor-pointer" style={{transitionDelay: '100ms'}}>
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-serif text-lg text-stone-900">Central Embassy</h3>
<p className="text-xs text-stone-500 mt-1">4th Floor</p>
</div>

<div className="group cursor-pointer" style={{transitionDelay: '150ms'}}>
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-serif text-lg text-stone-900">Ari</h3>
<p className="text-xs text-stone-500 mt-1">Ari Soi 2</p>
</div>

<div className="group cursor-pointer" style={{transitionDelay: '200ms'}}>
<div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
</div>
<h3 className="font-serif text-lg text-stone-900">Ladprao</h3>
<p className="text-xs text-stone-500 mt-1">Central Ladprao, 3rd Fl</p>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-16">
<div className="max-w-sm mb-10 md:mb-0">
<div className="mb-6">
<span className="font-script text-4xl">Silin</span>
<span className="font-serif text-[10px] tracking-[0.3em] uppercase ml-1 block">Salon</span>
</div>
<p className="text-stone-400 mb-8" data-en="Redefining hair care in Bangkok. Where science meets art." data-th="นิยามใหม่ของการดูแลเส้นผมในกรุงเทพฯ ที่ซึ่งวิทยาศาสตร์พบกับศิลปะ">Redefining hair care in Bangkok. Where science meets art.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full border border-stone-700 flex items-center justify-center hover:bg-white hover:text-stone-900 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-16">
<div>
<h4 className="font-serif text-lg mb-4">Salon</h4>
<ul className="space-y-3 text-stone-400 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#locations">Locations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Team</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-lg mb-4">Contact</h4>
<ul className="space-y-3 text-stone-400 text-sm">
<li>Main: Thong Lo, Sukhumvit 55</li>
<li>Bangkok, Thailand</li>
<li>+66 2 123 4567</li>
<li>hello@silinsalon.com</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-800">
<p className="text-stone-500 text-sm mb-4 md:mb-0">© 2024 Silin Salon. All rights reserved.</p>
<a className="flex items-center gap-2 bg-[#06C755] px-6 py-2 rounded-full font-medium text-sm hover:bg-[#05b34c] transition-colors" href="https://line.me/ti/p/example">
<i className="w-4 h-4" data-lucide="message-circle"></i>
                    Add Line Friend
                </a>
</div>
</div>
</footer>


    </>
  );
}
