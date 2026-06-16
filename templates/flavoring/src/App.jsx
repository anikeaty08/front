import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        /* Language Toggle Logic */
        function setLanguage(lang) {
            document.documentElement.lang = lang;
            
            const korBtn = document.getElementById('lang-kor-btn');
            const engBtn = document.getElementById('lang-eng-btn');
            
            if (lang === 'en') {
                // Set ENG active
                engBtn.classList.add('bg-white', 'text-black', 'shadow-[0_1px_3px_rgba(0,0,0,0.1)]');
                engBtn.classList.remove('text-neutral-500', 'hover:text-black');
                
                // Set KOR inactive
                korBtn.classList.remove('bg-white', 'text-black', 'shadow-[0_1px_3px_rgba(0,0,0,0.1)]');
                korBtn.classList.add('text-neutral-500', 'hover:text-black');
            } else {
                // Set KOR active
                korBtn.classList.add('bg-white', 'text-black', 'shadow-[0_1px_3px_rgba(0,0,0,0.1)]');
                korBtn.classList.remove('text-neutral-500', 'hover:text-black');
                
                // Set ENG inactive
                engBtn.classList.remove('bg-white', 'text-black', 'shadow-[0_1px_3px_rgba(0,0,0,0.1)]');
                engBtn.classList.add('text-neutral-500', 'hover:text-black');
            }
        }

        /* Accordion Toggle Logic for Projects */
        function toggleProject(el) {
            const content = el.querySelector('.project-content');
            const icon = el.querySelector('.arrow-icon');
            const isOpen = el.classList.contains('is-open');

            // Close all others
            document.querySelectorAll('.project-item').forEach(item => {
                item.classList.remove('is-open');
                const otherContent = item.querySelector('.project-content');
                const otherIcon = item.querySelector('.arrow-icon');
                
                otherContent.style.maxHeight = '0px';
                otherContent.style.opacity = '0';
                otherIcon.style.transform = 'rotate(0deg)';
            });

            // Open clicked item if it wasn't open
            if (!isOpen) {
                el.classList.add('is-open');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                icon.style.transform = 'rotate(180deg)';
            }
        }

        /* Accordion Toggle Logic for FAQs */
        function toggleFaq(el) {
            const content = el.querySelector('.faq-content');
            const icon = el.querySelector('.faq-icon');
            const isOpen = el.classList.contains('is-open');

            if (!isOpen) {
                el.classList.add('is-open');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                icon.style.transform = 'rotate(180deg)';
            } else {
                el.classList.remove('is-open');
                content.style.maxHeight = '0px';
                content.style.opacity = '0';
                icon.style.transform = 'rotate(0deg)';
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="noise-overlay"></div>

<nav className="fixed z-50 flex bg-[rgb(246,246,248)]/90 backdrop-blur-md w-full pt-6 pr-6 pb-6 pl-6 top-0 left-0 items-center justify-center">

<a className="absolute left-6 flex items-center gap-2.5 hover:opacity-60 transition-opacity duration-300" href="#hero">
<span className="w-2.5 h-2.5 rounded-full bg-[#3D3BFF]"></span>
<span className="text-xl font-normal tracking-widest text-[#111] uppercase mt-0.5">K-STUDIO</span>
</a>

<div className="hidden lg:flex items-center text-xl font-normal text-[#111] tracking-wide text-center gap-x-12">
<a className="hover:opacity-50 transition-opacity" href="#story">
<span className="lang-kor">브랜드스토리</span>
<span className="lang-eng">Brand Story</span>
</a>
<a className="hover:opacity-50 transition-opacity" href="#value">
<span className="lang-kor">핵심가치</span>
<span className="lang-eng">Core Value</span>
</a>
<a className="hover:opacity-50 transition-opacity text-center" href="#lineup">
<span className="lang-kor">맛 라인업</span>
<span className="lang-eng">Flavor Lineup</span>
</a>
<a className="hover:opacity-50 transition-opacity text-center" href="#faq">
<span className="lang-kor">자주 묻는 질문</span>
<span className="lang-eng">FAQ</span>
</a>
<a className="hover:bg-[#111] hover:text-white transition-colors duration-300 font-normal text-center border-[#111] border rounded-full ml-4 pt-1.5 pr-4 pb-1.5 pl-4" href="https://smore.im/form/0XEDQZ80Xw" target="_blank">
<span className="lang-kor">사전 주문</span>
<span className="lang-eng">Pre-order</span>
</a>
</div>

<div className="absolute right-6 flex items-center bg-black/5 p-1 rounded-full border border-black/5">
<button className="px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 bg-white text-black shadow-[0_1px_3px_rgba(0,0,0,0.1)]" id="lang-kor-btn" onclick="setLanguage('ko')">KOR</button>
<button className="transition-all duration-300 hover:text-black text-xs font-medium text-neutral-500 tracking-wide rounded-full pt-1.5 pr-3 pb-1.5 pl-3" id="lang-eng-btn" onclick="setLanguage('en')">ENG</button>
</div>
</nav>

<header className="flex flex-col overflow-hidden w-full h-screen relative items-center justify-center scroll-mt-24" id="hero">

<div className="absolute inset-0 z-0 pointer-events-none bg-black">
<video autoplay="" className="w-full h-full object-cover opacity-80" loop="" muted="" playsinline="">
<source src="https://res.cloudinary.com/dyeckjiuj/video/upload/v1774794560/Woman_sprinkling_seasoning_202603292327_mm1ktb.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<div className="absolute inset-0 w-full h-full flex justify-center items-center z-10 opacity-80 pointer-events-none">
<div className="liquid-container w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] relative">
<div className="blob absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-gray-300 to-gray-100 opacity-90 mix-blend-normal"></div>
<div className="blob absolute -bottom-10 left-10 w-2/3 h-2/3 bg-gray-400 opacity-70 mix-blend-overlay animation-delay-4000"></div>
</div>
</div>

<div className="relative z-20 text-center mix-blend-difference">
<h1 className="text-[11vw] leading-[0.8] select-none text-white tracking-tighter font-medium">
                FlavoRing
            </h1>
</div>

<div className="flex z-30 text-base font-extralight text-[#111] tracking-tight mix-blend-darken w-full pr-6 pl-6 absolute bottom-8 left-0 items-end justify-between">
<div className="flex flex-col gap-1">
</div>
<div className="text-right flex flex-col items-end gap-1">
<span className="opacity-50">Scroll to explore</span>
<i className="w-6 h-6 animate-bounce" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
</div>
</header>

<div className="border-y overflow-hidden -translate-y-44 backdrop-blur-sm bg-white/50 w-full z-20 border-neutral-300 pt-3 pb-3 relative -rotate-5 scale-110">
<div className="marquee-content whitespace-nowrap flex gap-x-12 gap-y-12 items-center">
<span className="uppercase text-xl font-extralight text-[#111] tracking-widest">Flavor + ing</span>
<span className="w-2.5 h-2.5 rounded-full bg-[#3D3BFF]"></span>
<span className="uppercase text-xl font-extralight text-[#111] tracking-widest">ANYWHERE ANYTIME</span>
<span className="w-2.5 h-2.5 rounded-full bg-[#3D3BFF]"></span>
<span className="uppercase text-xl font-extralight text-[#111] tracking-widest">customize my taste</span>
<span className="w-2.5 h-2.5 rounded-full bg-[#3D3BFF]"></span>
<span className="uppercase text-xl font-extralight text-[#111] tracking-widest">FLAVOR &amp; RING</span>
<span className="w-2.5 h-2.5 rounded-full bg-[#3D3BFF]"></span>
<span className="uppercase text-xl font-extralight text-[#111] tracking-widest">OWN YOUR VIBE</span>
<span className="w-2.5 h-2.5 rounded-full bg-[#3D3BFF]"></span>
<span className="uppercase text-xl font-extralight text-[#111] tracking-widest">my food, Redefined</span>
<span className="w-2.5 h-2.5 rounded-full bg-[#3D3BFF]"></span>
<span className="uppercase text-xl font-extralight text-[#111] tracking-widest">BYO</span>
<span className="w-2.5 h-2.5 rounded-full bg-[#3D3BFF]"></span>
<span className="text-xl font-extralight uppercase tracking-widest text-[#111]">UI/UX Engineering</span>
</div>
</div>

<section className="scroll-mt-24 w-full pt-32 pr-6 pb-32 pl-6" id="story">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 gap-x-8 gap-y-8">
<div className="lg:col-span-3 flex flex-col h-full justify-between">
<div className="mt-8 lg:mt-0 flex-1">
<video autoplay="" className="w-full h-full object-cover translate-x-12 scale-110" loop="" muted="" playsinline="">
<source src="https://res.cloudinary.com/dyeckjiuj/video/upload/v1773899764/Close-up_shot_of_202603191450_jm29vs.mp4" type="video/mp4"/>
</video>
</div>
</div>
<div className="lg:col-span-8 lg:col-start-5">
<h2 className="leading-[1.1] md:text-4xl text-3xl font-normal text-[#111] tracking-tight mb-12">
<span className="lang-kor font-semibold">어딘가 늘 아쉬운 한 끼,<br/>왜 그대로 먹어야 하죠?<br/><br/>우리는 음식을 바꿀수 없습니다. <br/>대신, <span className="text-ultramarine font-semibold">경험</span>을 바꿉니다.</span>
<span className="lang-eng">An ordinary meal,<br/>why eat it as it is?<br/><br/>We cannot change the food. <br/>Instead, we change the <span className="text-ultramarine font-light">experience</span>.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm md:text-base leading-relaxed text-neutral-600 font-extralight">
<p className="">
<span className="lang-kor font-semibold">우리는 언제 어디서든<br/>맛의 선택권을 제공하는 '씨즈닝 키링'을 만듭니다<br/><br/>사무실, 여행지, 배달 음식까지<br/>당신의 '맛'은 언제나 항상 함께 움직입니다<br/><br/>씨즈닝 키링으로 나를 표현해보세요😉</span>
<span className="lang-eng">We create a 'Seasoning Keyring' that provides<br/>the freedom of flavor anytime, anywhere.<br/><br/>From the office to travels and delivery food,<br/>your 'taste' always moves with you.<br/><br/>Express yourself with the Seasoning Keyring😉</span>
</p>
<p>
<span className="lang-kor font-semibold">이건 단순한 씨즈닝이 아닙니다<br/>하나의 습관이고, 나의 표현 방식 입니다<br/><br/>한 번의 톡톡이 평범한 식사를 특별한 경험으로 바꿉니다<br/>작지만 확실한 변화, 매일의 식사를 새롭게 디자인 합니다</span>
<span className="lang-eng">This is not just seasoning.<br/>It's a habit and a way to express yourself.<br/><br/>A single tap turns an ordinary meal into a special experience.<br/>A small but certain change, redesigning your everyday meals.</span>
</p>
</div>
<div className="mt-12 flex items-center">
<a className="inline-flex items-center text-xl font-extralight tracking-wide text-[#111] border border-[#111] rounded-full px-7 py-3 hover:bg-[#111] hover:text-white transition-colors duration-300" href="https://smore.im/form/0XEDQZ80Xw" target="_blank">
<span className="lang-kor font-semibold">사전 주문</span>
<span className="lang-eng">Pre-order now</span>
</a>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 min-h-screen flex flex-col bg-white w-full pt-32 pr-6 pb-32 pl-6 justify-center" id="value">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-[1600px] mx-auto">
<div className="col-span-1 flex items-center justify-center">
<img alt="FlavoRing Value" className="w-full h-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6040174f-61b9-4386-94f1-5b14e46201ba_800w.png"/>
</div>

<div className="flex flex-col gap-4 border-l border-neutral-200 pl-6 hover:border-ultramarine transition-colors duration-500 group">
<i className="group-hover:text-ultramarine transition-colors text-neutral-400 w-12 h-12" data-lucide="disc" strokeWidth="1.5"></i>
<h4 className="text-2xl font-extralight tracking-tight mt-2">Taste, On You</h4>
<p className="leading-relaxed text-base text-neutral-500 font-medium md:text-lg">
<span className="lang-kor">들고 다니는 맛, 보여지는 취향.<br/><br/>단순한 시즈닝이 아니라<br/>당신을 표현하는 하나의 스타일이 됩니다.</span>
<span className="lang-eng">Flavor you carry, taste you show.<br/><br/>It's not just seasoning,<br/>it becomes a style that expresses who you are.</span>
</p>
</div>

<div className="flex flex-col gap-4 border-l border-neutral-200 pl-6 hover:border-ultramarine transition-colors duration-500 group">
<i className="group-hover:text-ultramarine transition-colors text-neutral-400 w-12 h-12" data-lucide="refresh-cw" strokeWidth="1.5"></i>
<h4 className="text-2xl font-extralight tracking-tight mt-2">Instant Upgrade</h4>
<p className="leading-relaxed text-base text-neutral-500 font-medium md:text-lg">
<span className="lang-kor">넣는 순간, 바로 달라집니다.<br/><br/>한 번의 추가로 평범한 식사가 달라지고,<br/>그 변화 자체가 하나의 재미가 됩니다.</span>
<span className="lang-eng">Changes instantly the moment you add it.<br/><br/>A single addition transforms an ordinary meal,<br/>and that change itself becomes a joy.</span>
</p>
</div>

<div className="flex flex-col gap-4 border-l border-neutral-200 pl-6 hover:border-ultramarine transition-colors duration-500 group">
<i className="group-hover:text-ultramarine transition-colors text-neutral-400 w-12 h-12" data-lucide="smile" strokeWidth="1.5"></i>
<h4 className="text-2xl font-extralight tracking-tight mt-2">Always With You</h4>
<p className="leading-relaxed text-base text-neutral-500 font-medium md:text-lg">
<span className="lang-kor">어디서든, 꺼내는 순간 바로.<br/><br/>일상 속 어디에서든 자연스럽게 꺼내 쓰고,<br/>당신의 방식대로 즐깁니다.</span>
<span className="lang-eng">Anywhere, right when you take it out.<br/><br/>Take it out naturally anywhere in your daily life,<br/>and enjoy it your own way.</span>
</p>
</div>
</div>
</section>

<section className="w-full pt-32 pr-6 pb-32 pl-6 scroll-mt-24" id="lineup">
<div className="flex flex-col">

<div className="project-item group cursor-pointer transition-colors hover:bg-white border-neutral-300 border-t pt-10 pb-10" onclick="toggleProject(this)">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center select-none">
<div className="md:col-span-1 text-base font-normal text-neutral-400 group-hover:text-ultramarine transition-colors">01</div>
<div className="md:col-span-5 md:text-5xl group-hover:translate-x-4 transition-transform duration-500 text-4xl font-normal text-[#111] tracking-tight">Kimchi Powder</div>
<div className="md:col-span-3 text-base uppercase tracking-wide text-neutral-500 flex gap-2 font-extralight">
<span className="border-neutral-200 border rounded-full pt-1 pr-3 pb-1 pl-3">Kick</span>
<span className="border-neutral-200 border rounded-full pt-1 pr-3 pb-1 pl-3">TANGY</span>
</div>
<div className="md:col-span-3 flex justify-end">
<i className="arrow-icon transition-transform duration-500 text-neutral-400 group-hover:text-[#111] w-10 h-10" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="project-content overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-in-out">
<div className="pt-10 pb-2 grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-default" onclick="event.stopPropagation()">
<div className="md:col-span-5 md:col-start-2">
<img alt="Kimchi Kick" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af261c15-b582-4988-95b3-55dbfc08d5a3_1600w.png"/>
</div>
<div className="md:col-span-5">
<p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-extralight">
<span className="lang-kor">발효된 감칠맛과 매콤함의 완벽한 밸런스. 한국 고유의 전통적인 김치 풍미를 농축하여, 익숙한 요리도 전혀 새로운 차원의 맛으로 끌어올려 주는 마법 같은 파우더입니다.</span>
<span className="lang-eng">The perfect balance of fermented umami and spiciness. Concentrating the traditional flavor of Korean Kimchi, this magical powder elevates familiar dishes to a whole new dimension of taste.</span>
</p>
</div>
</div>
</div>
</div>

<div className="project-item group cursor-pointer transition-colors hover:bg-white border-neutral-300 border-t pt-10 pb-10" onclick="toggleProject(this)">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center select-none">
<div className="md:col-span-1 text-base font-normal text-neutral-400 group-hover:text-ultramarine transition-colors">02</div>
<div className="md:col-span-5 md:text-5xl group-hover:translate-x-4 transition-transform duration-500 text-4xl font-normal text-[#111] tracking-tight">Hot Chicken Flavor</div>
<div className="md:col-span-3 text-base uppercase tracking-wide text-neutral-500 flex gap-2 font-extralight">
<span className="border-neutral-200 border rounded-full pt-1 pr-3 pb-1 pl-3">FIRE</span>
<span className="border-neutral-200 border rounded-full pt-1 pr-3 pb-1 pl-3">SWEET</span>
</div>
<div className="md:col-span-3 flex justify-end">
<i className="arrow-icon transition-transform duration-500 text-neutral-400 group-hover:text-[#111] w-10 h-10" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="project-content overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-in-out">
<div className="pt-10 pb-2 grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-default" onclick="event.stopPropagation()">
<div className="md:col-span-5 md:col-start-2">
<img alt="Hot Chicken Flavor" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1493ae9e-7c06-44d5-a55e-ca5e08300943_1600w.png"/>
</div>
<div className="md:col-span-5">
<p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-extralight">
<span className="lang-kor">화끈하게 타오르는 매운맛과 은은한 단맛의 강렬한 조화. 지루한 일상에 강력하고 자극적인 한 방이 필요할 때 완벽한 선택이 되어줍니다.</span>
<span className="lang-eng">An intense harmony of fiery spiciness and subtle sweetness. The perfect choice when you need a strong, stimulating kick in your boring daily routine.</span>
</p>
</div>
</div>
</div>
</div>

<div className="project-item group cursor-pointer transition-colors hover:bg-white border-neutral-300 border-t pt-10 pb-10" onclick="toggleProject(this)">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center select-none">
<div className="md:col-span-1 text-base font-normal text-neutral-400 group-hover:text-ultramarine transition-colors">03</div>
<div className="md:col-span-5 md:text-5xl group-hover:translate-x-4 transition-transform duration-500 text-4xl font-normal text-[#111] tracking-tight">Garlic Flavor</div>
<div className="md:col-span-3 text-base uppercase tracking-wide text-neutral-500 flex gap-2 font-extralight">
<span className="border-neutral-200 border rounded-full pt-1 pr-3 pb-1 pl-3">Mild</span>
<span className="border-neutral-200 border rounded-full pt-1 pr-3 pb-1 pl-3">SAVORY</span>
</div>
<div className="md:col-span-3 flex justify-end">
<i className="arrow-icon transition-transform duration-500 text-neutral-400 group-hover:text-[#111] w-10 h-10" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="project-content overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-in-out">
<div className="pt-10 pb-2 grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-default" onclick="event.stopPropagation()">
<div className="md:col-span-5 md:col-start-2">
<img alt="Garlic Flavor" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a12bb4da-30a5-4c39-ae16-88455706d466_1600w.png"/>
</div>
<div className="md:col-span-5">
<p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-extralight">
<span className="lang-kor">깊고 풍부하게 구워낸 마늘의 진한 풍미. 부드러우면서도 묵직한 존재감으로 기름진 음식이나 밋밋한 요리 어디에든 완벽한 감칠맛을 더해줍니다.</span>
<span className="lang-eng">The deep, rich flavor of roasted garlic. With a smooth yet heavy presence, it adds perfect savory notes to greasy or bland dishes anywhere.</span>
</p>
</div>
</div>
</div>
</div>

<div className="project-item group cursor-pointer transition-colors hover:bg-white border-neutral-300 border-t border-b pt-10 pb-10" onclick="toggleProject(this)">
<div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center select-none">
<div className="md:col-span-1 text-base font-normal text-neutral-400 group-hover:text-ultramarine transition-colors">04</div>
<div className="md:col-span-5 md:text-5xl group-hover:translate-x-4 transition-transform duration-500 text-4xl font-normal text-[#111] tracking-tight">Masala Flavor</div>
<div className="md:col-span-3 text-base uppercase tracking-wide text-neutral-500 flex gap-2 font-extralight">
<span className="border-neutral-200 border rounded-full pt-1 pr-3 pb-1 pl-3">HEAT</span>
<span className="border-neutral-200 border rounded-full pt-1 pr-3 pb-1 pl-3">WARM SPICE</span>
</div>
<div className="md:col-span-3 flex justify-end">
<i className="arrow-icon transition-transform duration-500 text-neutral-400 group-hover:text-[#111] w-10 h-10" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>

<div className="project-content overflow-hidden max-h-0 opacity-0 transition-all duration-700 ease-in-out">
<div className="pt-10 pb-2 grid grid-cols-1 md:grid-cols-12 gap-8 items-center cursor-default" onclick="event.stopPropagation()">
<div className="md:col-span-5 md:col-start-2">
<img alt="Masala Flavor" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/95df1e82-5599-4505-aa10-3d708def7b8b_1600w.png"/>
</div>
<div className="md:col-span-5">
<p className="text-xl md:text-2xl text-neutral-600 leading-relaxed font-extralight">
<span className="lang-kor">따뜻한 향신료들이 만들어내는 이국적이고 다채로운 향연. 입맛을 돋우는 특유의 스파이시함이 평범한 한 끼를 순식간에 특별한 미식 여행으로 바꿔놓습니다.</span>
<span className="lang-eng">An exotic and colorful feast created by warm spices. The unique spiciness that whets the appetite instantly turns an ordinary meal into a special gourmet journey.</span>
</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 w-full pt-32 pr-6 pb-40 pl-6" id="faq">
<div className="max-w-4xl mx-auto flex flex-col w-full">
<h2 className="text-5xl md:text-6xl font-normal tracking-tight text-[#111] mb-20 text-center">
<span className="lang-kor">자주 묻는 질문</span>
<span className="lang-eng">Frequently Asked Questions</span>
</h2>
<div className="flex flex-col gap-6 w-full">

<div className="cursor-pointer border border-[#111] rounded-2xl bg-[#F5F4F1] overflow-hidden transition-colors hover:bg-[#EBEAE5]" onclick="toggleFaq(this)">
<div className="pt-8 pb-8 pr-8 pl-8 flex justify-between items-start gap-4 select-none">
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-[#111] leading-snug">
<span className="lang-kor">Q. 가방에 달고 다니다가 내용물이 새면 어쩌죠?</span>
<span className="lang-eng">Q. What if the contents leak while carrying it on my bag?</span>
</h3>
<i className="faq-icon transition-transform duration-500 text-[#111] w-7 h-7 shrink-0 mt-0.5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="faq-content overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out">
<div className="pt-0 pb-8 pr-8 pl-8 text-lg md:text-xl font-light leading-relaxed text-neutral-600">
<span className="lang-kor">A. 안심하고 달고 다니세요. 이중 밀폐 구조로 꼼꼼하게 설계되어 일상적인 흔들림이나 부딪힘에도 내용물이 밖으로 새지 않습니다.</span>
<span className="lang-eng">A. Carry it with peace of mind. Carefully designed with a double-sealed structure, the contents won't leak out even with daily shaking or bumps.</span>
</div>
</div>
</div>

<div className="cursor-pointer border border-[#111] rounded-2xl bg-[#F5F4F1] overflow-hidden transition-colors hover:bg-[#EBEAE5]" onclick="toggleFaq(this)">
<div className="pt-8 pb-8 pr-8 pl-8 flex justify-between items-start gap-4 select-none">
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-[#111] leading-snug">
<span className="lang-kor">Q. 다 먹고 나면 키링은 버려야 하나요?</span>
<span className="lang-eng">Q. Do I have to throw away the keyring after eating it all?</span>
</h3>
<i className="faq-icon transition-transform duration-500 text-[#111] w-7 h-7 shrink-0 mt-0.5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="faq-content overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out">
<div className="pt-0 pb-8 pr-8 pl-8 text-lg md:text-xl font-light leading-relaxed text-neutral-600">
<span className="lang-kor">A. 아닙니다. 언제든 간편하게 전용 리필팩으로 채워 넣을 수 있어, 지속적으로 사용 가능한 구조입니다.</span>
<span className="lang-eng">A. No. You can easily refill it with a dedicated refill pack anytime, making it a sustainable structure for continuous use.</span>
</div>
</div>
</div>

<div className="cursor-pointer border border-[#111] rounded-2xl bg-[#F5F4F1] overflow-hidden transition-colors hover:bg-[#EBEAE5]" onclick="toggleFaq(this)">
<div className="pt-8 pb-8 pr-8 pl-8 flex justify-between items-start gap-4 select-none">
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-[#111] leading-snug">
<span className="lang-kor">Q. 세척 관리는 어떻게 하나요?</span>
<span className="lang-eng">Q. How do I clean and manage it?</span>
</h3>
<i className="faq-icon transition-transform duration-500 text-[#111] w-7 h-7 shrink-0 mt-0.5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="faq-content overflow-hidden max-h-0 opacity-0 transition-all duration-500 ease-in-out">
<div className="pt-0 pb-8 pr-8 pl-8 text-lg md:text-xl font-light leading-relaxed text-neutral-600">
<span className="lang-kor">A. 파츠별로 완전 분리가 가능해 물로 가볍게 헹구기만 해도 위생적이고 깨끗하게 관리할 수 있습니다.</span>
<span className="lang-eng">A. It can be completely disassembled by parts, so you can manage it hygienically and cleanly just by rinsing it lightly with water.</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full bg-[#0A0A0A] text-[#F4F4F4] pt-32 pb-8 px-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-b from-ultramarine to-transparent blur-3xl pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-32 relative z-10">
<div className="lg:col-span-6">
<h2 className="text-6xl md:text-8xl font-extralight tracking-tighter leading-none mb-8">
                    Let's start<br/>the <span className="text-ultramarine font-light">FlavoRing</span>
</h2>
</div>
<div className="lg:col-span-4 lg:col-start-8 flex flex-col justify-between">
<div className="flex flex-col gap-6">
<p className="text-xl text-neutral-400 max-w-sm font-extralight leading-relaxed">
                        Available for select projects in Q4 2023. Reach out to discuss your vision.
                    </p>
<a className="inline-flex items-center gap-2 hover:text-ultramarine transition-colors text-4xl font-extralight tracking-tight mt-4" href="mailto:hello@K.studio">hello@K.studio</a>
</div>
<div className="mt-16 grid grid-cols-2 gap-8">
<div className="flex flex-col gap-3">
<span className="text-base text-neutral-500 uppercase tracking-wider font-extralight mb-1">Socials</span>
<a className="text-xl md:text-2xl hover:text-ultramarine transition-colors font-extralight" href="#">Twitter / X</a>
<a className="text-xl md:text-2xl hover:text-ultramarine transition-colors font-extralight" href="#">Instagram</a>
<a className="text-xl md:text-2xl hover:text-ultramarine transition-colors font-extralight" href="#">Awwwards</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-base text-neutral-500 uppercase tracking-wider font-extralight mb-1">Location</span>
<span className="text-xl md:text-2xl text-neutral-300 font-extralight">Seoul, KR</span>
<span className="text-xl md:text-2xl text-neutral-300 font-extralight">Remote Worldwide</span>
</div>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-base text-neutral-500 font-extralight tracking-wide uppercase">
<span className="">© 2023 recit. Collective.</span>
<div className="flex gap-8 mt-6 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Imprint</a>
</div>
<span className="mt-6 md:mt-0">Design by recit.</span>
</div>
</footer>



    </>
  );
}
