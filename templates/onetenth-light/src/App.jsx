import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
        
        // Scroll Reveal
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                    }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
        });

        // Scroll to Top Logic
        const scrollToTopBtn = document.getElementById('scrollToTopBtn');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollToTopBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
            } else {
                scrollToTopBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
            }
        });
        scrollToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Advanced Language Toggle & Routing Logic
        const langToggles = document.querySelectorAll('.lang-toggle');
        const inquirySelect = document.getElementById('inquiry-select');

        function setLanguage(lang) {
            // Apply language to document
            document.documentElement.lang = lang;
            
            // Persist preference across pages using Local Storage
            localStorage.setItem('preferredLang', lang);

            // Update URL parameter dynamically without reloading page
            try {
                const currentUrl = new URL(window.location);
                if (currentUrl.searchParams.get('lang') !== lang) {
                    currentUrl.searchParams.set('lang', lang);
                    window.history.replaceState({}, '', currentUrl);
                }
            } catch(e) {}

            // Robustly update all internal links to enforce matching language parameter
            document.querySelectorAll('a').forEach(a => {
                try {
                    const hrefAttr = a.getAttribute('href');
                    // Skip pure page anchors (#) and javascript actions
                    if (hrefAttr && !hrefAttr.startsWith('#') && !hrefAttr.startsWith('javascript:')) {
                        const linkUrl = new URL(a.href, window.location.origin);
                        // Ensure it's a link pointing to the same website
                        if (linkUrl.origin === window.location.origin) {
                            linkUrl.searchParams.set('lang', lang);
                            a.href = linkUrl.toString();
                        }
                    }
                } catch(e) {}
            });

            // Update select options dynamically (if form exists on page)
            if(typeof inquirySelect !== 'undefined' && inquirySelect) {
                Array.from(inquirySelect.options).forEach(opt => {
                    if (opt.dataset[lang]) {
                        opt.textContent = opt.dataset[lang];
                    }
                });
            }
        }

        // Initialize language from URL first, otherwise fallback to local storage
        const urlParams = new URLSearchParams(window.location.search);
        const initialLang = urlParams.get('lang') || localStorage.getItem('preferredLang') || 'en';
        setLanguage(initialLang);

        // Bind toggle buttons
        langToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                const currentLang = document.documentElement.lang || 'en';
                const newLang = currentLang === 'en' ? 'zh' : 'en';
                setLanguage(newLang);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-[#fdfbf9]/90 backdrop-blur-md border-b border-[#e8d9cb]/30">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="md:text-3xl text-2xl uppercase text-[#0d0f0b] tracking-tight font-serif" href="/home">ONETENTH LIGHT</a>

<div className="hidden md:flex items-center space-x-10 text-sm tracking-widest uppercase font-normal text-[#0d0f0b]/80">
<a className="hover:text-[#C5A065] transition-colors duration-300" href="/projects">
<span className="en-text">PROJECTS</span><span className="zh-text">项目</span>
</a>
<a className="hover:text-[#C5A065] transition-colors duration-300" href="/products">
<span className="en-text">PRODUCTS</span><span className="zh-text">产品</span>
</a>
<a className="hover:text-[#C5A065] transition-colors duration-300" href="/services">
<span className="en-text">SERVICES</span><span className="zh-text">服务</span>
</a>
<a className="hover:text-[#C5A065] transition-colors duration-300" href="/about-us">
<span className="en-text">ABOUT US</span><span className="zh-text">关于我们</span>
</a>
<a className="hover:bg-[#0d0f0b] hover:text-white transition-all duration-300 border-[#0d0f0b] border pt-3 pr-6 pb-3 pl-6" href="/contactus">
<span className="en-text">Contact</span><span className="zh-text">联系我们</span>
</a>
<button className="lang-toggle flex items-center gap-2 hover:text-[#C5A065] transition-colors duration-300 ml-2">
<iconify-icon height="18" icon="solar:global-linear" width="18"></iconify-icon>
<span className="en-text">中</span>
<span className="zh-text">EN</span>
</button>
</div>

<div className="md:hidden flex items-center gap-6">
<label className="cursor-pointer z-50 text-[#0d0f0b] p-2 -mr-2" htmlFor="mobile-menu-toggle">
<i className="w-7 h-7" data-lucide="menu" strokeWidth="1.5"></i>
</label>
</div>
</div>
</nav>

<input className="hidden" id="mobile-menu-toggle" type="checkbox"/>
<div className="fixed inset-0 bg-[#fdfbf9] z-[100] transform translate-x-full transition-all duration-500 flex flex-col justify-center items-center space-y-8 opacity-0" id="mobile-menu">
<label className="absolute top-6 right-6 cursor-pointer text-[#0d0f0b] hover:text-[#C5A065] transition-colors p-2" htmlFor="mobile-menu-toggle">
<i className="w-8 h-8" data-lucide="x-circle" strokeWidth="1.5"></i>
</label>
<a className="text-3xl font-serif text-[#0d0f0b] tracking-tight hover:text-[#C5A065] transition-colors" href="/projects">
<span className="en-text">Projects</span><span className="zh-text">项目</span>
</a>
<a className="text-3xl font-serif text-[#0d0f0b] tracking-tight hover:text-[#C5A065] transition-colors" href="/products">
<span className="en-text">Products</span><span className="zh-text">产品</span>
</a>
<a className="text-3xl font-serif text-[#0d0f0b] tracking-tight hover:text-[#C5A065] transition-colors" href="/services">
<span className="en-text">Services</span><span className="zh-text">服务</span>
</a>
<a className="text-3xl font-serif text-[#0d0f0b] tracking-tight hover:text-[#C5A065] transition-colors" href="/about-us">
<span className="en-text">About Us</span><span className="zh-text">关于我们</span>
</a>
<a className="text-xl uppercase tracking-widest border-b border-[#0d0f0b] pb-2 tracking-tight mt-4 hover:text-[#C5A065] hover:border-[#C5A065] transition-all" href="/contactus">
<span className="en-text">Contact</span><span className="zh-text">联系我们</span>
</a>
<button className="lang-toggle flex items-center gap-2 text-lg text-[#0d0f0b] mt-8 uppercase tracking-widest border border-[#0d0f0b] px-6 py-2 rounded-full hover:bg-[#0d0f0b] hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:global-linear" width="20"></iconify-icon>
<span className="en-text">中文版</span>
<span className="zh-text">English</span>
</button>
</div>

<header className="relative h-screen w-full flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Lighting Interior" className="w-full h-full object-cover object-center brightness-75 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c54bf0db-e31f-4d93-8a8d-a0bf33ab9e76_3840w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-[#0d0f0b]/30 z-10"></div>
<div className="relative z-20 text-center text-white px-6 reveal-on-scroll reveal-visible">
<p className="text-sm md:text-base tracking-[0.3em] uppercase mb-6 text-[#f3e5d5]/90 font-light">
<span className="en-text">Bespoke Lighting Solutions</span><span className="zh-text">专属定制照明方案</span>
</p>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-light tracking-tight mb-4 leading-tight">
                ONETENTH<br/><span className="italic font-extralight">Light</span>
</h1>
<p className="text-base md:text-xl font-light tracking-wide max-w-lg mx-auto mb-10 text-white/90">
<span className="en-text">Timeless illumination. Thoughtful design. Creating bespoke lighting that stands the test of time.</span>
<span className="zh-text">隽永的光影。深思熟虑的设计。打造经得起时间考验的定制灯具。</span>
</p>
<a className="group inline-flex items-center gap-3 text-base tracking-widest uppercase border-b border-white pb-2 hover:text-[#f3e5d5] hover:border-[#f3e5d5] transition-all duration-300" href="#partners">
<span className="en-text">Discover Our Projects</span><span className="zh-text">探索我们的项目</span>
<i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce z-20">
<i className="w-6 h-6" data-lucide="mouse" strokeWidth="1.5"></i>
</div>
</header>

<section className="md:py-32 overflow-hidden bg-[#fdfbf9] pt-24 pb-24" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="relative reveal-on-scroll reveal-visible">
<div className="-top-10 -left-10 z-0 hidden md:block w-2/3 h-full border-[#e8d9cb] border absolute"></div>
<img alt="Custom Lighting Design" className="hover:grayscale-0 transition-all duration-700 ease-out bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-amber-400 to-amber-600 w-full h-[600px] object-cover z-10 relative shadow-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ded18638-e3f2-453d-b91e-845c3ef2017b_1600w.jpg"/>
</div>
<div className="lg:pl-12 reveal-on-scroll reveal-visible">
<h2 className="text-5xl md:text-6xl font-serif text-[#0d0f0b] mb-8 leading-tight tracking-tight">
<span className="en-text">Shaping Light. <span className="italic text-[#C5A065]">Defining Space.</span></span>
<span className="zh-text md:text-4xl text-3xl">塑造光影。<span className="italic text-[#C5A065]">定义空间。</span></span>
</h2>
<div className="w-16 h-[1px] bg-[#0d0f0b] mb-8"></div>
<p className="leading-relaxed md:text-lg text-base font-light text-gray-600 mb-6">
<span className="en-text">At ONETENTH LIGHT CO., LTD., we work at the intersection of lighting and architecture — not just as a manufacturer, but as a partner in bringing spaces to life. We go beyond producing fixtures. We develop lighting solutions that enhance atmosphere, support design intent, and perform reliably in real-world environments.</span>
<span className="zh-text">在ONETENTH LIGHT CO., LTD.，我们立足于照明与建筑的交汇点——不仅是制造商，更是赋予空间生命的合作伙伴。我们不只生产灯具，更致力于研发能升华空间氛围、契合设计意图，并在实际环境中表现可靠的照明方案。</span>
</p>
<p className="leading-relaxed md:text-lg text-base font-light text-gray-600 mb-10">
<span className="en-text">Every bespoke piece reflects our focus on material integrity, precision engineering, and thoughtful design. From concept to production, we work closely with architects and designers to translate ideas into buildable, high-quality outcomes. Our approach is simple: combine creativity with technical discipline — and deliver lighting that works as beautifully as it looks.</span>
<span className="zh-text">每一件定制产品都体现了我们对材料本真、精密工艺和严谨设计的极致追求。从概念到生产，我们与建筑师和设计师紧密合作，将创意转化为切实可行的高品质成果。我们的理念很简单：将创造力与技术规范相融合，交付外观与功能同样出众的照明产品。</span>
</p>
<div className="grid grid-cols-2 gap-8 mb-10">
<div className="">
<span className="block text-4xl text-[#0d0f0b] font-serif tracking-tight">9+</span>
<span className="text-sm uppercase tracking-widest text-gray-500 mt-1 block">
<span className="en-text">Years Experience</span><span className="zh-text">年行业经验</span>
</span>
</div>
<div className="">
<span className="block text-4xl font-serif text-[#0d0f0b] tracking-tight">100%</span>
<span className="text-sm uppercase tracking-widest text-gray-500 mt-1 block">
<span className="en-text">Tailored Design</span><span className="zh-text">完全定制设计</span>
</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f3e5d5]/30" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal-on-scroll">
<span className="text-sm tracking-[0.2em] uppercase text-[#C5A065] font-medium mb-3 block">
<span className="en-text">Expertise</span><span className="zh-text">专业领域</span>
</span>
<h2 className="text-4xl md:text-5xl font-serif text-[#0d0f0b] tracking-tight">
<span className="en-text">Our Services</span><span className="zh-text">我们的服务</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="group p-8 bg-white border border-[#e8d9cb]/50 hover:border-[#C5A065] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 reveal-on-scroll">
<div className="mb-6 text-[#0d0f0b] group-hover:text-[#C5A065] transition-colors">
<i className="w-10 h-10" data-lucide="pen-tool" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-serif mb-3 tracking-tight">
<span className="en-text">Custom Fabrication</span><span className="zh-text">定制制造</span>
</h3>
<p className="text-sm leading-relaxed text-gray-500 font-light">
<span className="en-text">Comprehensive design from concept proposals to 3D visualizations and technical lighting documentation.</span>
<span className="zh-text">从概念提案到3D可视化及照明技术文档的全面设计。</span>
</p>
</div>
<div className="group p-8 bg-white border border-[#e8d9cb]/50 hover:border-[#C5A065] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 reveal-on-scroll">
<div className="mb-6 text-[#0d0f0b] group-hover:text-[#C5A065] transition-colors">
<i className="w-10 h-10" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-serif mb-3 tracking-tight">
<span className="en-text">Lighting Consultation</span><span className="zh-text">照明咨询</span>
</h3>
<p className="text-sm leading-relaxed text-gray-500 font-light">
<span className="en-text">Strategic lighting preparation for residential and commercial spaces to maximize aesthetic appeal.</span>
<span className="zh-text">为住宅和商业空间提供战略性照明规划，将美学效果发挥到极致。</span>
</p>
</div>
<div className="group p-8 bg-white border border-[#e8d9cb]/50 hover:border-[#C5A065] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 reveal-on-scroll">
<div className="mb-6 text-[#0d0f0b] group-hover:text-[#C5A065] transition-colors">
<i className="w-10 h-10" data-lucide="monitor" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-serif mb-3 tracking-tight">
<span className="en-text">Visualizations</span><span className="zh-text">可视化渲染</span>
</h3>
<p className="text-sm leading-relaxed text-gray-500 font-light">
<span className="en-text">High-end photorealistic 3D renderings to help you visualize the potential of your lighting.</span>
<span className="zh-text">高端逼真的3D渲染图，帮您直观预见空间照明的最终效果。</span>
</p>
</div>
<div className="group p-8 bg-white border border-[#e8d9cb]/50 hover:border-[#C5A065] transition-all duration-500 hover:shadow-xl hover:-translate-y-2 reveal-on-scroll">
<div className="mb-6 text-[#0d0f0b] group-hover:text-[#C5A065] transition-colors">
<i className="w-10 h-10" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-serif mb-3 tracking-tight">
<span className="en-text">Installation Support</span><span className="zh-text">安装支持</span>
</h3>
<p className="text-sm leading-relaxed text-gray-500 font-light">
<span className="en-text">Collaboration with contractors and remote design advisory to ensure flawless execution.</span>
<span className="zh-text">与承包商协作并提供远程设计咨询，确保完美无瑕的落地执行。</span>
</p>
</div>
</div>
</div>
</section>

<section className="md:py-32 bg-[#fdfbf9] pt-24 pb-24 overflow-hidden" id="partners">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center reveal-on-scroll">
<span className="text-sm tracking-[0.2em] uppercase text-[#C5A065] font-medium mb-3 block">
<span className="en-text">Partners</span><span className="zh-text">合作伙伴</span>
</span>
<h2 className="text-4xl md:text-5xl font-serif text-[#0d0f0b] tracking-tight mb-6">
<span className="en-text">Trusted By</span><span className="zh-text">深受信任</span>
</h2>
<p className="text-gray-500 font-light text-base md:text-lg max-w-2xl mx-auto">
<span className="en-text">Partnering with industry leaders to deliver exceptional lighting solutions.</span>
<span className="zh-text">与行业领导者携手，提供卓越的照明解决方案。</span>
</p>
</div>

<div className="overflow-hidden flex reveal-on-scroll before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-24 before:bg-gradient-to-r before:from-[#fdfbf9] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-24 after:bg-gradient-to-l after:from-[#fdfbf9] after:to-transparent w-full h-28 relative items-center">
<div className="flex w-max animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused] cursor-pointer">

<div className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24">
<img alt="Partner Logo 1 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11a7e2a4-1443-42c2-bc03-5d8783d23540_320w.png"/>
<img alt="Partner Logo 2 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d29b3416-f0cf-46f1-aa79-7bd075235ec2_800w.png"/>
<img alt="Partner Logo 3 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14a162d8-77ec-4fdc-8f45-f4fcd4601628_800w.jpg"/>
<img alt="Partner Logo 4 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aad62922-b369-48f8-9c4c-905b6c000b34_800w.webp"/>
<img alt="Partner Logo 5 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb26547d-9d97-492a-836e-6e6addb0ac63_800w.png"/>
<img alt="Partner Logo 6 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50b76d70-01e0-4d18-95b1-729080006a11_800w.jpg"/>
<img alt="Partner Logo 7 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf331995-4427-4fd8-aa2e-59ed67761b47_800w.jpg"/>
<img alt="Partner Logo 8 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a10b388e-360c-4a52-91a5-60abc11654f8_800w.png"/>
<img alt="Partner Logo 9 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04da2212-87d2-4fb1-97e6-ac37fc2edddb_800w.png"/>
<img alt="Partner Logo 10 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3541062-0c5e-4bbe-9f83-2a932ff4ac18_320w.png"/>
<img alt="Partner Logo 11 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3054692-bb0e-4a9c-8812-0fdf62ec1a09_800w.png"/>
<img alt="Partner Logo 12 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6aab07d-d7ea-40cb-846e-850d23ea23ca_original.gif"/>
</div>

<div className="flex shrink-0 items-center gap-16 md:gap-24 pr-16 md:pr-24">
<img alt="Partner Logo 1 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11a7e2a4-1443-42c2-bc03-5d8783d23540_320w.png"/>
<img alt="Partner Logo 2 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d29b3416-f0cf-46f1-aa79-7bd075235ec2_800w.png"/>
<img alt="Partner Logo 3 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/14a162d8-77ec-4fdc-8f45-f4fcd4601628_800w.jpg"/>
<img alt="Partner Logo 4 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aad62922-b369-48f8-9c4c-905b6c000b34_800w.webp"/>
<img alt="Partner Logo 5 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb26547d-9d97-492a-836e-6e6addb0ac63_800w.png"/>
<img alt="Partner Logo 6 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/50b76d70-01e0-4d18-95b1-729080006a11_800w.jpg"/>
<img alt="Partner Logo 7 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf331995-4427-4fd8-aa2e-59ed67761b47_800w.jpg"/>
<img alt="Partner Logo 8 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a10b388e-360c-4a52-91a5-60abc11654f8_800w.png"/>
<img alt="Partner Logo 9 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/04da2212-87d2-4fb1-97e6-ac37fc2edddb_800w.png"/>
<img alt="Partner Logo 10 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3541062-0c5e-4bbe-9f83-2a932ff4ac18_320w.png"/>
<img alt="Partner Logo 11 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3054692-bb0e-4a9c-8812-0fdf62ec1a09_800w.png"/>
<img alt="Partner Logo 12 Placeholder" className="h-10 md:h-12 w-auto max-w-none shrink-0 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6aab07d-d7ea-40cb-846e-850d23ea23ca_original.gif"/>
</div>
</div>
</div>
</section>

<section className="text-white bg-[#0d0f0b] pt-24 pb-24" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 reveal-on-scroll">
<div className="">
<h2 className="text-4xl md:text-5xl font-serif tracking-tight mb-2">
<span className="en-text">The Process</span><span className="zh-text">工作流程</span>
</h2>
<p className="text-gray-400 font-light text-base">
<span className="en-text">From concept to realization.</span><span className="zh-text">从概念走向现实。</span>
</p>
</div>
</div>
<div className="relative">
<div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gray-800"></div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
<div className="relative reveal-on-scroll">
<div className="w-12 h-12 rounded-full bg-[#1a1c18] border border-gray-700 flex items-center justify-center mb-6 relative z-10 mx-auto lg:mx-0">
<span className="text-[#C5A065] font-serif">01</span>
</div>
<h3 className="text-2xl font-serif mb-3 text-center lg:text-left tracking-tight">
<span className="en-text">Consultation</span><span className="zh-text">初步咨询</span>
</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed text-center lg:text-left">
<span className="en-text">We begin with a deep dive into your lighting needs, lifestyle, and aesthetic preferences.</span>
<span className="zh-text">我们首先深入了解您的照明需求、生活方式以及审美偏好。</span>
</p>
</div>
<div className="relative reveal-on-scroll">
<div className="w-12 h-12 rounded-full bg-[#1a1c18] border border-gray-700 flex items-center justify-center mb-6 relative z-10 mx-auto lg:mx-0">
<span className="text-[#C5A065] font-serif">02</span>
</div>
<h3 className="text-2xl font-serif mb-3 text-center lg:text-left tracking-tight">
<span className="en-text">Concept &amp; 3D</span><span className="zh-text">概念与3D渲染</span>
</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed text-center lg:text-left">
<span className="en-text">Development of functional fixture designs and photorealistic visualizations of the lighting.</span>
<span className="zh-text">开发兼具功能性的灯具设计，并提供逼真的光影渲染图。</span>
</p>
</div>
<div className="relative reveal-on-scroll">
<div className="w-12 h-12 rounded-full bg-[#1a1c18] border border-gray-700 flex items-center justify-center mb-6 relative z-10 mx-auto lg:mx-0">
<span className="text-[#C5A065] font-serif">03</span>
</div>
<h3 className="text-2xl font-serif mb-3 text-center lg:text-left tracking-tight">
<span className="en-text">Documentation</span><span className="zh-text">技术文档</span>
</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed text-center lg:text-left">
<span className="en-text">Detailed executive drawings, material lists, and technical specifications for manufacturing.</span>
<span className="zh-text">输出详尽的施工图纸、材料清单及用于制造的技术规格。</span>
</p>
</div>
<div className="relative reveal-on-scroll">
<div className="w-12 h-12 rounded-full bg-[#1a1c18] border border-gray-700 flex items-center justify-center mb-6 relative z-10 mx-auto lg:mx-0">
<span className="text-[#C5A065] font-serif">04</span>
</div>
<h3 className="text-2xl font-serif mb-3 text-center lg:text-left tracking-tight">
<span className="en-text">Realization</span><span className="zh-text">生产落地</span>
</h3>
<p className="text-sm text-gray-400 font-light leading-relaxed text-center lg:text-left">
<span className="en-text">Coordination with craftsmen, supervision, and final installation to bring the light to life.</span>
<span className="zh-text">协同工匠进行监督制造与最终安装，让光影完美融入空间。</span>
</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#f3e5d5] text-[#0d0f0b]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="reveal-on-scroll flex flex-col items-center">
<i className="w-12 h-12 mb-4 text-[#0d0f0b]" data-lucide="star" strokeWidth="1.5"></i>
<h3 className="text-2xl font-serif mb-2 tracking-tight">
<span className="en-text">Timeless Aesthetics</span><span className="zh-text">永恒美学</span>
</h3>
<p className="text-base font-light text-gray-700">
<span className="en-text">Designs that remain elegant and relevant for years to come.</span>
<span className="zh-text text-sm">设计历久弥新，在未来的岁月中始终保持优雅与适用。</span>
</p>
</div>
<div className="reveal-on-scroll flex flex-col items-center">
<i className="w-12 h-12 mb-4 text-[#0d0f0b]" data-lucide="users" strokeWidth="1.5"></i>
<h3 className="text-2xl font-serif mb-2 tracking-tight">
<span className="en-text">Client-Centric</span><span className="zh-text">客户至上</span>
</h3>
<p className="text-base font-light text-gray-700">
<span className="en-text">A collaborative approach that prioritizes your vision and comfort.</span>
<span className="zh-text text-sm">采用以您的愿景与舒适度为首要考量的协作设计方式。</span>
</p>
</div>
<div className="reveal-on-scroll flex flex-col items-center">
<i className="w-12 h-12 mb-4 text-[#0d0f0b]" data-lucide="shield-check" strokeWidth="1.5"></i>
<h3 className="text-2xl font-serif mb-2 tracking-tight">
<span className="en-text">Technical Precision</span><span className="zh-text">严谨工艺</span>
</h3>
<p className="text-base font-light text-gray-700">
<span className="en-text">Rigorous attention to detail in documentation and execution.</span>
<span className="zh-text text-sm">在文档制作与执行落地阶段对每个细节都保持严苛标准。</span>
</p>
</div>
</div>
</div>
</section>

<section className="bg-[#fdfbf9] relative" id="contact">
<div className="flex flex-col w-full min-h-screen bg-[#181816]">

<div className="lg:p-24 flex flex-col flex-grow text-white bg-[#181816] w-full pt-16 pr-6 pb-16 pl-6 relative items-center justify-center">
<div className="relative z-10 reveal-on-scroll w-full max-w-6xl mx-auto">
<h2 className="lg:text-6xl text-4xl text-white tracking-tight font-serif mb-16 text-center">
<span className="en-text">Contact Us</span><span className="zh-text">联系我们</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">

<div className="flex flex-col items-center text-center gap-5 group">
<div className="p-5 bg-[#23211a] text-[#C5A065] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#C5A065] group-hover:text-[#181816] transition-all duration-500 shadow-lg">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-xl font-serif text-white mb-3 tracking-tight"><span className="en-text">Visit Us</span><span className="zh-text">欢迎访问</span></h3>
<p className="text-base font-light text-gray-400 leading-relaxed group-hover:text-white transition-colors duration-300">
<span className="en-text">1&amp;3/F, Building D, No.6, Third Kanglong Road<br/>
                            Henglan Town, Zhongshan City<br/>
                            Guangdong Province, China 528478</span>
<span className="zh-text">中国广东省中山市<br/>横栏镇康龙三路6号<br/>D栋1楼和3楼 528478</span>
</p>
</div>
</div>

<div className="flex flex-col items-center text-center gap-5 group">
<div className="p-5 bg-[#23211a] text-[#C5A065] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#C5A065] group-hover:text-[#181816] transition-all duration-500 shadow-lg">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-serif text-white mb-3 tracking-tight"><span className="en-text">Call Us</span><span className="zh-text">致电我们</span></h3>
<p className="text-base font-light text-gray-400 group-hover:text-white transition-colors duration-300">+86 760-87296867</p>
</div>
</div>

<div className="flex flex-col group text-center gap-x-5 gap-y-5 items-center">
<div className="p-5 bg-[#23211a] text-[#C5A065] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#C5A065] group-hover:text-[#181816] transition-all duration-500 shadow-lg">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<h3 className="text-xl font-serif text-white mb-3 tracking-tight"><span className="en-text">Email Us</span><span className="zh-text">发送邮件</span></h3>
<a className="text-base font-light text-gray-400 hover:text-white transition-colors block" href="mailto:nigel@onetenthlight.com">nigel@onetenthlight.com</a>
</div>
</div>
</div>

<div className="rounded-xl overflow-hidden border border-gray-800/50 relative w-full h-[500px] bg-[#23211a] shadow-2xl">
<iframe allowfullscreen="" className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700 ease-in-out" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://maps.google.com/maps?q=No.6,+Third+Kanglong+Road,+Henglan+Town,+Zhongshan+City,+Guangdong+Province,+China&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed" style={{border: '0'}} width="100%">
</iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#181816] text-white border-t border-gray-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
<div className="">
<h3 className="text-3xl font-serif mb-2 tracking-tight">ONETENTH LIGHT</h3>
<p className="text-sm text-gray-500 tracking-widest uppercase">
<span className="en-text">Custom Lighting Co., Ltd.</span><span className="zh-text">定制照明有限公司</span>
</p>
</div>
<div className="flex gap-6 mt-6 md:mt-0 text-gray-400">
<a className="hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="link" strokeWidth="1.5"></i></a>
</div>
</div>
<div className="w-full h-px bg-gray-800 mb-8"></div>
<div className="flex flex-col md:flex-row justify-between text-sm font-light text-gray-500">
<p>
<span className="en-text">© 2023 ONETENTH LIGHT CO., LTD. All rights reserved.</span>
<span className="zh-text">© 2023 ONETENTH LIGHT CO., LTD. 版权所有。</span>
</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="/privacy-policy">
<span className="en-text">Privacy Policy</span><span className="zh-text">隐私政策</span>
</a>
<a className="hover:text-white transition-colors" href="/terms-of-service">
<span className="en-text cursor-pointer" onclick="window.location.href='/terms-of-service'" role="button">Terms of Service</span><span className="zh-text">服务条款</span>
</a>
</div>
</div>
</div>
</footer>

<button className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#0d0f0b] text-[#C5A065] w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-500 z-50 hover:bg-[#C5A065] hover:text-[#0d0f0b] border border-[#C5A065]/30" id="scrollToTopBtn">
<iconify-icon height="24" icon="solar:alt-arrow-up-linear" width="24"></iconify-icon>
</button>


    </>
  );
}
