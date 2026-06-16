import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
red: '#EF233C',
dark: '#141519',
card: '#161A1D',
gray: '#C9CACC',
grayDark: '#676B6E',
border: '#2b2c30'
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
screens: {
'xl': '1440px',
'2xl': '1920px',
},
backgroundImage: {
'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")",
},
animation: {
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- SCROLL ANIMATIONS ---
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const animateElements = document.querySelectorAll('.animate-on-scroll');
            animateElements.forEach(el => observer.observe(el));

            // --- DRAGGABLE SLIDER LOGIC ---
            const slider = document.getElementById('expertise-slider');
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('is-dragging');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });

            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('is-dragging');
            });

            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('is-dragging');
            });

            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 1.5; // Scroll-fast multiplier for momentum feel
                slider.scrollLeft = scrollLeft - walk;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed w-full top-0 z-50 bg-[#141519]/90 backdrop-blur-sm border-b border-white/5 transition-all duration-300 hover:border-white/10">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-[156px] h-28 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 relative group-hover:rotate-90 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
<svg className="w-full h-full text-white" fill="none" viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H18V18H0V0Z" fill="white"></path>
<path d="M22 0H40V18H22V0Z" fill="white"></path>
<path d="M0 22H18V40H0V22Z" fill="white"></path>
<path d="M22 22H40V30H22V22Z" fill="#EF233C"></path>
</svg>
</div>
<span className="text-2xl font-display font-semibold tracking-tighter-logo uppercase ml-2 group-hover:text-white/80 transition-colors">Output</span>
</a>

<nav className="hidden xl:flex items-center gap-12">
<a className="text-lg font-light text-brand-red border-b border-brand-red pb-1 transition-all duration-300 hover:tracking-wide" href="#">Início</a>
<a className="text-lg font-light text-white hover:text-brand-red transition-all duration-300 pb-1 border-b border-transparent hover:border-brand-red/50" href="#">Sobre nós</a>
<a className="text-lg font-light text-white hover:text-brand-red transition-all duration-300 pb-1 border-b border-transparent hover:border-brand-red/50" href="#">Serviços</a>
<a className="text-lg font-light text-white hover:text-brand-red transition-all duration-300 pb-1 border-b border-transparent hover:border-brand-red/50" href="#">Projetos</a>
<a className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-light text-white transition duration-300 ease-out border border-brand-red rounded-full shadow-md bg-brand-red hover:bg-transparent hover:text-brand-red active:scale-95" href="#">
<span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-brand-red group-hover:translate-x-0 ease">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</span>
<span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Contactos</span>
<span className="relative invisible">Contactos</span>
</a>
</nav>

<button className="xl:hidden text-white hover:text-brand-red transition-colors active:scale-90 transform duration-200">
<iconify-icon height="32" icon="solar:hamburger-menu-linear" style={{color: 'rgb(239, 35, 60)'}} width="32"></iconify-icon>
</button>
</div>
</header>
<main className="pt-28">

<section className="relative min-h-[900px] flex items-center overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-pattern opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
<svg className="absolute top-1/2 left-0 -translate-y-1/2 w-[90%] h-auto text-white opacity-[0.03]" fill="none" viewbox="0 0 1310 657" xmlns="http://www.w3.org/2000/svg">
<path className="animate-on-scroll delay-100" d="M1 1H1309V656H1V1Z" stroke="currentColor" strokeWidth="1"></path>
<path className="animate-on-scroll delay-200" d="M130 1V656" stroke="currentColor" strokeWidth="1"></path>
<path className="animate-on-scroll delay-300" d="M260 1V656" stroke="currentColor" strokeWidth="1"></path>
<circle className="animate-on-scroll delay-500" cx="655" cy="328" r="200" stroke="currentColor" strokeWidth="1"></circle>
</svg>
</div>
<div className="md:px-12 xl:px-[156px] xl:py-[160px] grid grid-cols-1 xl:grid-cols-2 xl:gap-[48px] w-full max-w-[1920px] z-10 mr-auto ml-auto pt-10 pr-6 pb-10 pl-6 relative gap-x-12 gap-y-12 items-stretch">

<div className="flex flex-col xl:gap-[160px] gap-x-12 gap-y-12 justify-between">
<div className="space-y-12">
<h1 className="md:text-5xl xl:text-[52px] leading-[1.2] text-4xl font-light text-white tracking-tight font-hubot animate-on-scroll">
<span className="block font-light italic opacity-90 mb-2">Building from experience:</span>
<span className="">Engenharia e construção de rigor</span>
</h1>
<p className="xl:text-[22px] leading-[1.5] text-brand-gray text-lg font-light max-w-[561px] animate-on-scroll delay-100">
                            A experiência de construir para promover a experiência de viver. Soluções técnicas de excelência para os setores residencial, industrial e hoteleiro.
                        </p>
</div>
<div className="animate-on-scroll delay-200">
<a className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red hover:bg-red-600 text-white rounded-full transition-all duration-300 group font-light text-base xl:text-lg hover:shadow-[0_0_20px_rgba(239,35,60,0.3)] active:scale-95" href="#">
                            Ver serviços
                            <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="relative w-full h-[500px] xl:h-[739px] bg-brand-red rounded-sm flex items-end justify-end overflow-hidden group animate-on-scroll delay-300">
<svg className="absolute inset-0 w-full h-full opacity-10 text-black group-hover:scale-110 transition-transform duration-[1.5s] ease-out" preserveaspectratio="none" viewbox="0 0 100 100">
<line stroke="currentColor" strokeWidth="0.5" x1="0" x2="100" y1="100" y2="0"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="20" x2="100" y1="100" y2="20"></line>
<line stroke="currentColor" strokeWidth="0.5" x1="0" x2="80" y1="80" y2="0"></line>
</svg>
<div className="absolute bottom-8 right-8 text-black/20 font-hubot text-9xl font-bold leading-none tracking-tighter opacity-20 select-none group-hover:opacity-30 group-hover:tracking-normal transition-all duration-700">
                         OUT
                     </div>
</div>
</div>
</section>

<section className="bg-brand-dark py-16 xl:py-[160px] overflow-hidden">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-[156px] flex flex-col gap-12 xl:gap-20">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 animate-on-scroll">
<h2 className="font-hubot font-light text-4xl xl:text-[48px] text-white max-w-[652px] leading-[1.2] tracking-tight">
                        Expertise em múltiplos setores de mercado
                    </h2>
<a className="inline-flex items-center justify-center px-8 py-3 bg-brand-red text-white rounded-full font-light text-base hover:bg-transparent hover:text-brand-red border border-brand-red transition-all duration-300 hover:shadow-lg active:scale-95" href="#">
                        Ver detalhes dos serviços
                    </a>
</div>


<div className="slider-container flex gap-12 overflow-x-auto pb-12 -mx-6 px-6 md:-mx-12 md:px-12 xl:-mx-[156px] xl:px-[156px] snap-x" id="expertise-slider">

<div className="animate-on-scroll delay-100 flex-shrink-0 w-[366px] h-[514px] bg-brand-card p-8 flex flex-col justify-between snap-start group hover:bg-[#1C2024] hover:-translate-y-2 transition-all duration-500 rounded-sm hover:shadow-2xl hover:shadow-brand-red/5 select-none">
<div className="flex flex-col gap-6 pointer-events-none">
<div className="flex justify-between items-start w-full">
<h3 className="font-hubot font-light text-[36px] text-white leading-tight group-hover:text-brand-red transition-colors duration-300">Residencial</h3>
<span className="font-sans font-light text-[22px] text-brand-red">01.</span>
</div>
<p className="font-sans font-light text-[18px] text-[#C9CACC] leading-[1.6]">
                                Habitação de alto padrão focada no conforto e inovação.
                            </p>
</div>
<div className="relative w-full h-[302px] mt-auto pointer-events-none">

<svg className="w-full h-full group-hover:scale-105 transition-transform duration-700" fill="none" viewbox="0 0 302 302" xmlns="http://www.w3.org/2000/svg">
<path d="M0 302H302V0H0V302Z" stroke="white" stroke-opacity="0.05" strokeWidth="0.5"></path>
<path className="card-svg-path group-hover:stroke-brand-red/50" d="M220 220V120H80V220" stroke="white" strokeWidth="0.5"></path>
<path className="card-svg-path" d="M80 120L150 50L220 120" stroke="#EF233C" strokeWidth="0.5"></path>
<path className="card-svg-path" d="M110 220V160H190V220" stroke="white" strokeWidth="0.5"></path>
<path className="card-svg-path" d="M150 50V0" stroke="#EF233C" strokeWidth="0.5"></path>
<line stroke="#EF233C" strokeWidth="0.5" x1="0" x2="302" y1="301" y2="301"></line>
</svg>
</div>
</div>

<div className="animate-on-scroll delay-200 flex-shrink-0 w-[366px] h-[514px] bg-brand-card p-8 flex flex-col justify-between snap-start group hover:bg-[#1C2024] hover:-translate-y-2 transition-all duration-500 rounded-sm hover:shadow-2xl hover:shadow-brand-red/5 select-none">
<div className="flex flex-col gap-6 pointer-events-none">
<div className="flex justify-between items-start w-full">
<h3 className="font-hubot font-light text-[36px] text-white leading-tight group-hover:text-brand-red transition-colors duration-300">Hotelaria</h3>
<span className="font-sans font-light text-[22px] text-brand-red">02.</span>
</div>
<p className="font-sans font-light text-[18px] text-[#C9CACC] leading-[1.6]">
                                Construção especializada para elevar a experiência do hóspede.
                            </p>
</div>
<div className="relative w-full h-[302px] mt-auto pointer-events-none">

<svg className="w-full h-full group-hover:scale-105 transition-transform duration-700" fill="none" viewbox="0 0 302 302" xmlns="http://www.w3.org/2000/svg">
<path className="card-svg-path" d="M40 280V80H160V280" stroke="white" strokeWidth="0.5"></path>
<path className="card-svg-path" d="M160 280V140H260V280" stroke="#EF233C" strokeWidth="0.5"></path>
<rect className="card-svg-path group-hover:fill-white/5" height="30" stroke="white" strokeWidth="0.5" width="20" x="60" y="100"></rect>
<rect className="card-svg-path group-hover:fill-white/5" height="30" stroke="white" strokeWidth="0.5" width="20" x="100" y="100"></rect>
<rect className="card-svg-path group-hover:fill-white/5" height="30" stroke="white" strokeWidth="0.5" width="20" x="60" y="150"></rect>
<rect className="card-svg-path group-hover:fill-white/5" height="30" stroke="white" strokeWidth="0.5" width="20" x="100" y="150"></rect>
<line stroke="white" strokeWidth="0.5" x1="0" x2="302" y1="280" y2="280"></line>
</svg>
</div>
</div>

<div className="animate-on-scroll delay-300 flex-shrink-0 w-[366px] h-[514px] bg-brand-card p-8 flex flex-col justify-between snap-start group hover:bg-[#1C2024] hover:-translate-y-2 transition-all duration-500 rounded-sm hover:shadow-2xl hover:shadow-brand-red/5 select-none">
<div className="flex flex-col gap-6 pointer-events-none">
<div className="flex justify-between items-start w-full">
<h3 className="font-hubot font-light text-[36px] text-white leading-tight group-hover:text-brand-red transition-colors duration-300">Indústria</h3>
<span className="font-sans font-light text-[22px] text-brand-red">03.</span>
</div>
<p className="font-sans font-light text-[18px] text-[#C9CACC] leading-[1.6]">
                                Estruturas logísticas eficientes para máxima produtividade.
                            </p>
</div>
<div className="relative w-full h-[302px] mt-auto pointer-events-none">

<svg className="w-full h-full group-hover:scale-105 transition-transform duration-700" fill="none" viewbox="0 0 302 302" xmlns="http://www.w3.org/2000/svg">
<path className="card-svg-path" d="M20 260V160L80 120L140 160V260" stroke="#EF233C" strokeWidth="0.5"></path>
<path className="card-svg-path group-hover:stroke-brand-red/30" d="M140 260V160L200 120L260 160V260" stroke="white" strokeWidth="0.5"></path>
<path d="M20 260H280" stroke="white" strokeWidth="0.5"></path>
<path className="card-svg-path" d="M80 120V80" stroke="#EF233C" strokeWidth="0.5"></path>
<path className="card-svg-path" d="M200 120V80" stroke="white" strokeWidth="0.5"></path>
<rect className="card-svg-path group-hover:fill-brand-red/10" height="40" stroke="#EF233C" strokeWidth="0.5" width="60" x="50" y="180"></rect>
</svg>
</div>
</div>

<div className="animate-on-scroll delay-100 flex-shrink-0 w-[366px] h-[514px] bg-brand-card p-8 flex flex-col justify-between snap-start group hover:bg-[#1C2024] hover:-translate-y-2 transition-all duration-500 rounded-sm hover:shadow-2xl hover:shadow-brand-red/5 select-none">
<div className="flex flex-col gap-6 pointer-events-none">
<div className="flex justify-between items-start w-full">
<h3 className="font-hubot font-light text-[36px] text-white leading-tight group-hover:text-brand-red transition-colors duration-300">Escritórios</h3>
<span className="font-sans font-light text-[22px] text-brand-red">04.</span>
</div>
<p className="font-sans font-light text-[18px] text-[#C9CACC] leading-[1.6]">
                                Espaços corporativos modernos que potenciam o rendimento.
                            </p>
</div>
<div className="relative w-full h-[302px] mt-auto pointer-events-none">

<svg className="w-full h-full group-hover:scale-105 transition-transform duration-700" fill="none" viewbox="0 0 302 302" xmlns="http://www.w3.org/2000/svg">
<rect className="card-svg-path" height="220" stroke="white" strokeWidth="0.5" width="140" x="80" y="40"></rect>
<line className="card-svg-path" stroke="white" strokeWidth="0.5" x1="80" x2="220" y1="80" y2="80"></line>
<line className="card-svg-path" stroke="white" strokeWidth="0.5" x1="80" x2="220" y1="120" y2="120"></line>
<line className="card-svg-path" stroke="#EF233C" strokeWidth="0.5" x1="80" x2="220" y1="160" y2="160"></line>
<line className="card-svg-path" stroke="#EF233C" strokeWidth="0.5" x1="80" x2="220" y1="200" y2="200"></line>
<line className="card-svg-path" stroke="white" strokeWidth="0.5" x1="150" x2="150" y1="40" y2="260"></line>
</svg>
</div>
</div>

<div className="animate-on-scroll delay-200 flex-shrink-0 w-[366px] h-[514px] bg-brand-card p-8 flex flex-col justify-between snap-start group hover:bg-[#1C2024] hover:-translate-y-2 transition-all duration-500 rounded-sm hover:shadow-2xl hover:shadow-brand-red/5 select-none">
<div className="flex flex-col gap-6 pointer-events-none">
<div className="flex justify-between items-start w-full">
<h3 className="font-hubot font-light text-[36px] text-white leading-tight group-hover:text-brand-red transition-colors duration-300">Comercial</h3>
<span className="font-sans font-light text-[22px] text-brand-red">05.</span>
</div>
<p className="font-sans font-light text-[18px] text-[#C9CACC] leading-[1.6]">
                                Soluções de retalho focadas na funcionalidade e estética.
                            </p>
</div>
<div className="relative w-full h-[302px] mt-auto pointer-events-none">

<svg className="w-full h-full group-hover:scale-105 transition-transform duration-700" fill="none" viewbox="0 0 302 302" xmlns="http://www.w3.org/2000/svg">
<path className="card-svg-path" d="M40 240V140H260V240" stroke="white" strokeWidth="0.5"></path>
<path className="card-svg-path" d="M40 140L260 100" stroke="#EF233C" strokeWidth="0.5"></path>
<rect className="card-svg-path group-hover:fill-white/5" height="80" stroke="white" strokeWidth="0.5" width="40" x="80" y="160"></rect>
<rect className="card-svg-path group-hover:fill-white/5" height="80" stroke="white" strokeWidth="0.5" width="40" x="180" y="160"></rect>
<line stroke="#EF233C" strokeWidth="0.5" x1="20" x2="280" y1="240" y2="240"></line>
</svg>
</div>
</div>

<div className="animate-on-scroll delay-300 flex-shrink-0 w-[366px] h-[514px] bg-brand-card p-8 flex flex-col justify-between snap-start group hover:bg-[#1C2024] hover:-translate-y-2 transition-all duration-500 rounded-sm hover:shadow-2xl hover:shadow-brand-red/5 select-none">
<div className="flex flex-col gap-6 pointer-events-none">
<div className="flex justify-between items-start w-full">
<h3 className="font-hubot font-light text-[36px] text-white leading-tight group-hover:text-brand-red transition-colors duration-300">Restauração</h3>
<span className="font-sans font-light text-[22px] text-brand-red">06.</span>
</div>
<p className="font-sans font-light text-[18px] text-[#C9CACC] leading-[1.6]">
                                Projetos técnicos otimizados para o setor alimentar.
                            </p>
</div>
<div className="relative w-full h-[302px] mt-auto pointer-events-none">

<svg className="w-full h-full group-hover:scale-105 transition-transform duration-700" fill="none" viewbox="0 0 302 302" xmlns="http://www.w3.org/2000/svg">
<path className="card-svg-path" d="M100 220V120C100 100 150 100 150 120V220" stroke="white" strokeWidth="0.5"></path>
<path className="card-svg-path" d="M200 220V120H180" stroke="#EF233C" strokeWidth="0.5"></path>
<line stroke="white" strokeWidth="0.5" x1="50" x2="250" y1="220" y2="220"></line>
<rect className="card-svg-path" height="30" stroke="white" strokeWidth="0.5" width="30" x="110" y="140"></rect>
<path className="card-svg-path" d="M200 120L220 100" stroke="#EF233C" strokeWidth="0.5"></path>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white text-brand-dark py-16 xl:py-[160px]">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-[156px]">
<div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-[48px] gap-x-12 gap-y-12">

<div className="xl:col-span-4 animate-on-scroll">
<h2 className="md:text-4xl xl:text-[48px] leading-[1.2] text-brand-dark text-3xl font-light tracking-tight font-hubot">
                            Solidez e especialização em cada detalhe
                        </h2>
</div>

<div className="hidden xl:block xl:col-span-2"></div>

<div className="xl:col-span-6 flex flex-col gap-8 xl:gap-8 animate-on-scroll delay-100">
<div className="space-y-8">
<p className="text-lg xl:text-[22px] leading-[1.5] font-light text-brand-grayDark">
                                Na Output Engenharia, focamos a nossa expertise na entrega de soluções de construção e reabilitação que aliam a máxima qualidade técnica a uma gestão transparente e rigorosa de todos os processos.
                            </p>
<p className="text-lg xl:text-[22px] leading-[1.5] font-light text-brand-grayDark">
                                Oferecemos o melhor serviço e as melhores soluções técnicas aos nossos clientes e parceiros estratégicos.
                            </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 px-8 py-4 bg-brand-red text-white hover:bg-brand-dark rounded-full transition-all duration-300 font-light text-base xl:text-lg shadow-lg shadow-brand-red/20 hover:shadow-xl hover:-translate-y-1 group" href="#">
                                Saber mais
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white text-brand-dark pb-16 xl:pb-[160px] border-t border-gray-100">
<div className="md:px-12 xl:px-[156px] max-w-[1920px] mr-auto ml-auto pt-16 pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 xl:gap-[48px]">

<div className="flex flex-col gap-4 group cursor-default animate-on-scroll delay-100">
<span className="font-hubot font-light text-5xl xl:text-[80px] leading-tight text-brand-dark group-hover:text-brand-red transition-colors duration-500 group-hover:scale-105 origin-left transform">+250k</span>
<span className="font-light text-lg xl:text-[22px] text-brand-grayDark border-t border-gray-200 pt-4 w-fit pr-8 group-hover:border-brand-red/50 transition-colors">M2 de área construída</span>
</div>

<div className="flex flex-col gap-4 group cursor-default animate-on-scroll delay-200">
<span className="font-hubot font-light text-5xl xl:text-[80px] leading-tight text-brand-dark group-hover:text-brand-red transition-colors duration-500 group-hover:scale-105 origin-left transform">+120</span>
<span className="font-light text-lg xl:text-[22px] text-brand-grayDark border-t border-gray-200 pt-4 w-fit pr-8 group-hover:border-brand-red/50 transition-colors">Projetos concluídos</span>
</div>

<div className="flex flex-col gap-4 group cursor-default animate-on-scroll delay-300">
<span className="font-hubot font-light text-5xl xl:text-[80px] leading-tight text-brand-dark group-hover:text-brand-red transition-colors duration-500 group-hover:scale-105 origin-left transform">+100</span>
<span className="font-light text-lg xl:text-[22px] text-brand-grayDark border-t border-gray-200 pt-4 w-fit pr-8 group-hover:border-brand-red/50 transition-colors">Técnicos especializados</span>
</div>

<div className="flex flex-col gap-4 group cursor-default animate-on-scroll delay-400">
<span className="font-hubot font-light text-5xl xl:text-[80px] leading-tight text-brand-dark group-hover:text-brand-red transition-colors duration-500 group-hover:scale-105 origin-left transform">100%</span>
<span className="font-light text-lg xl:text-[22px] text-brand-grayDark border-t border-gray-200 pt-4 w-fit pr-8 group-hover:border-brand-red/50 transition-colors">Satisfação do cliente</span>
</div>
</div>
</div>
</section>

<section className="bg-white text-brand-dark py-16 xl:py-[160px] border-t border-gray-100">
<div className="max-w-[1920px] mx-auto px-6 md:px-12 xl:px-[156px] flex flex-col">

<h2 className="font-hubot font-light text-3xl md:text-5xl xl:text-[48px] leading-[1.2] tracking-tight text-[#141519] animate-on-scroll">
                    Projetos que definem o nosso percurso
                </h2>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-[48px] mt-12 xl:mt-[80px]">

<div className="animate-on-scroll delay-100 flex flex-col gap-6 cursor-pointer group">

<div className="w-full aspect-square bg-[#D9D9D9] relative overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-brand-red/10 transition-all duration-500">

<svg className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-[0.8s] ease-out opacity-60" fill="none" viewbox="0 0 504 504" xmlns="http://www.w3.org/2000/svg">
<rect fill="#F0F0F0" height="504" width="504"></rect>
<path d="M0 504L504 0H252L0 252V504Z" fill="#E5E5E5"></path>
<path d="M126 504L504 126V504H126Z" fill="#D4D4D4"></path>
<line stroke="white" strokeWidth="1" x1="0" x2="504" y1="126" y2="126"></line>
<line stroke="white" strokeWidth="1" x1="0" x2="504" y1="252" y2="252"></line>
<line stroke="white" strokeWidth="1" x1="0" x2="504" y1="378" y2="378"></line>
<line stroke="white" strokeWidth="1" x1="126" x2="126" y1="0" y2="504"></line>
<line stroke="white" strokeWidth="1" x1="252" x2="252" y1="0" y2="504"></line>
<line stroke="white" strokeWidth="1" x1="378" x2="378" y1="0" y2="504"></line>
</svg>

<div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/5 transition-colors duration-500"></div>
</div>

<div className="flex flex-col gap-2 transform group-hover:translate-x-2 transition-transform duration-300">
<h3 className="font-sans font-light text-[22px] text-[#141519] leading-[1.5] group-hover:text-brand-red transition-colors">
                                Verdant Metropolis Residence
                            </h3>
<p className="font-sans font-light text-[18px] text-[#676B6E] leading-[1.6]">
                                Residencial / 2024
                            </p>
</div>
</div>

<div className="animate-on-scroll delay-200 flex flex-col gap-6 cursor-pointer group">

<div className="w-full aspect-square bg-[#D9D9D9] relative overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-brand-red/10 transition-all duration-500">

<svg className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-1 transition-transform duration-[0.8s] ease-out opacity-60" fill="none" viewbox="0 0 504 504" xmlns="http://www.w3.org/2000/svg">
<rect fill="#F0F0F0" height="504" width="504"></rect>
<circle cx="252" cy="252" r="200" stroke="#D4D4D4" strokeWidth="40"></circle>
<circle cx="252" cy="252" r="100" stroke="#E5E5E5" strokeWidth="40"></circle>
<path d="M252 0V504M0 252H504" stroke="white" strokeWidth="2"></path>
</svg>

<div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/5 transition-colors duration-500"></div>
</div>

<div className="flex flex-col gap-2 transform group-hover:translate-x-2 transition-transform duration-300">
<h3 className="font-sans font-light text-[22px] text-[#141519] leading-[1.5] group-hover:text-brand-red transition-colors">
                                Verdant Metropolis Residence
                            </h3>
<p className="font-sans font-light text-[18px] text-[#676B6E] leading-[1.6]">
                                Residencial / 2024
                            </p>
</div>
</div>

<div className="animate-on-scroll delay-300 flex flex-col gap-6 cursor-pointer group">

<div className="w-full aspect-square bg-[#D9D9D9] relative overflow-hidden shadow-sm group-hover:shadow-2xl group-hover:shadow-brand-red/10 transition-all duration-500">

<svg className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-[0.8s] ease-out opacity-60" fill="none" viewbox="0 0 504 504" xmlns="http://www.w3.org/2000/svg">
<rect fill="#F0F0F0" height="504" width="504"></rect>
<path d="M0 0H504V504H0V0Z" fill="none"></path>
<path d="M40 40H464V464H40V40Z" stroke="#D4D4D4" strokeWidth="2"></path>
<path d="M80 80H424V424H80V80Z" stroke="#E5E5E5" strokeWidth="20"></path>
<path d="M160 160H344V344H160V160Z" fill="#D4D4D4"></path>
</svg>

<div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/5 transition-colors duration-500"></div>
</div>

<div className="flex flex-col gap-2 transform group-hover:translate-x-2 transition-transform duration-300">
<h3 className="font-sans font-light text-[22px] text-[#141519] leading-[1.5] group-hover:text-brand-red transition-colors">
                                Verdant Metropolis Residence
                            </h3>
<p className="font-sans font-light text-[18px] text-[#676B6E] leading-[1.6]">
                                Residencial / 2024
                            </p>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white py-8 border-t border-gray-100">
<div className="max-w-[1920px] mx-auto px-6 xl:px-[156px] flex justify-between items-center text-xs text-brand-grayDark font-light">
<p className="animate-on-scroll">© 2024 Output Engenharia. Todos os direitos reservados.</p>
<div className="flex gap-4 animate-on-scroll delay-100">
<a className="hover:text-brand-red transition-colors" href="#">Privacidade</a>
<a className="hover:text-brand-red transition-colors" href="#">Termos</a>
</div>
</div>
</footer>



    </>
  );
}
