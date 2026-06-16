import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
},
colors: {
brand: {
blue: '#003366',
yellow: '#FFCC00',
dark: '#00224d',
}
},
animation: {
'clip-reveal': 'reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) both',
},
keyframes: {
reveal: {
'0%': { clipPath: 'inset(10% 0 10% 0)', filter: 'blur(10px)' },
'100%': { clipPath: 'inset(0 0 0 0)', filter: 'blur(0)' },
}
}
}
}
}



        // Flashlight Effect
        const cards = document.querySelectorAll('.flashlight-card');
        
        document.addEventListener('mousemove', (e) => {
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Parallax Effect on Scroll
        const scroller = document.getElementById('scroller');
        const parallaxBg = document.querySelector('#parallax-bg > div');
        const sections = document.querySelectorAll('section');
        const dotsContainer = document.getElementById('pagination-dots');

        // Create Dots
        dotsContainer.innerHTML = '';
        sections.forEach((_, i) => {
            const btn = document.createElement('button');
            btn.className = `w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full transition-all duration-300 ${i === 0 ? 'bg-brand-blue w-4 lg:w-6' : 'bg-slate-300'}`;
            btn.onclick = () => {
                sections[i].scrollIntoView({ behavior: 'smooth' });
            };
            dotsContainer.appendChild(btn);
        });

        const updatePagination = () => {
            // Parallax
            const scrollPercent = scroller.scrollLeft / (scroller.scrollWidth - window.innerWidth);
            const moveX = scrollPercent * -100; 
            parallaxBg.style.transform = `translateX(${moveX}px) scale(1.1)`;

            // Update Pagination
            const index = Math.round(scroller.scrollLeft / window.innerWidth);
            Array.from(dotsContainer.children).forEach((dot, i) => {
                if (i === index) {
                    dot.classList.remove('bg-slate-300', 'w-1.5', 'lg:w-2');
                    dot.classList.add('bg-brand-blue', 'w-4', 'lg:w-6');
                } else {
                    dot.classList.add('bg-slate-300', 'w-1.5', 'lg:w-2');
                    dot.classList.remove('bg-brand-blue', 'w-4', 'lg:w-6');
                }
            });
        };

        scroller.addEventListener('scroll', updatePagination);
        window.addEventListener('resize', updatePagination);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 bg-white" id="parallax-bg">
<div className="absolute inset-0 bg-grid opacity-40 transform scale-110 transition-transform duration-100 ease-out origin-center"></div>
</div>

<main className="relative z-10 h-full w-full overflow-x-auto overflow-y-hidden whitespace-nowrap snap-x snap-mandatory no-scrollbar scroll-smooth flex" id="scroller">

<section className="inline-flex snap-center shrink-0 w-full h-full p-4 lg:p-12 relative items-center justify-center">
<div className="flashlight-card relative w-full max-w-[1600px] h-full lg:aspect-video bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row animate-clip-reveal" style={{-MouseX: '7290px', -MouseY: '-2px'}}>

<div className="lg:p-14 flex flex-col lg:w-1/2 lg:h-full z-10 order-2 lg:order-1 custom-scroll overflow-y-auto w-full h-1/2 pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="mb-4 lg:mb-0">

<div className="flex bg-white w-48 lg:w-96 h-12 lg:h-16 border-0 rounded-xl mb-4 lg:mb-8 items-center justify-start">
<img alt="Logo Brand" className="opacity-100 mix-blend-normal w-auto h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5a9528a-dfc5-4d4f-adf6-a1a409f89b40_320w.png"/>
</div>
<h1 className="lg:text-5xl leading-tight lg:mb-4 whitespace-normal text-3xl font-bold text-slate-900 tracking-tight mb-3">Presentación <br className=""/><span className="text-brand-blue">Corporativa</span></h1>
<p className="lg:text-xl lg:mb-6 whitespace-normal text-base font-medium text-slate-500 mb-4">Somos Cóndor Carrocerías</p>
<p className="lg:text-lg leading-relaxed whitespace-normal text-sm text-slate-600 max-w-xl">Fábrica Colombiana de vehículos especiales, adaptaciones vehículares y carrocerías para transporte de pasajeros con más de 20 años de experiencia en contratación estatal, y servicios de consultoría estratégica en innovación y desarrollo de soluciones a la medida de sus necesidades.</p>
</div>
<div className="border-t border-slate-100 pt-4 lg:pt-6 mt-auto hidden lg:block">
<div className="grid grid-cols-2 gap-y-4 gap-x-6">

<div className="group">
<div className="flex items-center gap-2 mb-1 text-brand-blue/80">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-brand-blue transition-colors">Dirección</span>
</div>
<div className="pl-0.5 whitespace-normal">
<p className="font-medium text-slate-900 text-xs leading-tight">Cra 22A 43-69 Sur, Bogotá</p>
</div>
</div>

<div className="group">
<div className="flex items-center gap-2 mb-1 text-brand-blue/80">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-brand-blue transition-colors">Fijo</span>
</div>
<div className="pl-0.5">
<p className="font-medium text-slate-900 text-xs leading-tight">601 279 10 49</p>
</div>
</div>

<div className="group">
<div className="flex items-center gap-2 mb-1 text-brand-blue/80">
<iconify-icon icon="solar:smartphone-linear" width="18"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-brand-blue transition-colors">Celular</span>
</div>
<div className="pl-0.5">
<p className="font-medium text-slate-900 text-xs leading-tight">310 123 4567</p>
</div>
</div>

<div className="group">
<div className="flex items-center gap-2 mb-1 text-brand-blue/80">
<iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
<span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 group-hover:text-brand-blue transition-colors">Web</span>
</div>
<div className="pl-0.5">
<p className="leading-tight text-xs font-medium text-slate-900">www.carroceriascondor.com.co</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 h-1/2 lg:h-full bg-slate-50 relative overflow-hidden order-1 lg:order-2">
<img alt="Bus Cover" className="w-full h-full object-cover bg-center absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad8cede1-0683-468d-b6f4-90f069af2298_1600w.png"/>
<div className="bg-center bg-gradient-to-t lg:bg-gradient-to-l from-white via-white/20 to-transparent absolute top-0 right-0 bottom-0 left-0 lg:hidden"></div>
<div className="bg-center hidden lg:block bg-gradient-to-l from-transparent to-white/10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 right-4 lg:top-8 lg:right-8 text-4xl lg:text-6xl font-sans font-medium text-slate-100 lg:text-slate-100 pointer-events-none drop-shadow-lg lg:drop-shadow-none">01</div>
</div>
</div>
</section>

<section className="h-full w-full inline-flex items-center justify-center snap-center shrink-0 p-4 lg:p-12 relative">
<div className="flashlight-card relative w-full max-w-[1600px] h-full lg:aspect-video bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row animate-clip-reveal" style={{-MouseX: '5850px', -MouseY: '-2px'}}>
<div className="w-full lg:w-5/12 h-1/3 lg:h-full relative overflow-hidden order-1 lg:order-2 border-b lg:border-l lg:border-b-0 border-slate-100">
<img alt="Bus History" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9b3cfd13-fcb4-4e4a-aa70-7a8b362d34e0_1600w.jpg"/>
<div className="mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-4 right-4 text-4xl font-sans font-medium text-slate-100 pointer-events-none lg:hidden">02</div>
</div>
<div className="lg:w-7/12 lg:h-full lg:p-14 flex flex-col order-2 lg:order-1 custom-scroll overflow-y-auto w-full h-2/3 z-10 pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-center gap-2 mb-3 lg:mb-4 shrink-0">
<span className="bg-brand-yellow/20 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">Trayectoria</span>
</div>
<h2 className="lg:text-4xl lg:mb-3 whitespace-normal text-2xl font-semibold text-slate-900 tracking-tight mb-2 shrink-0">
                        Nuestras Líneas: <span className="text-slate-400">Una empresa con historia</span>
</h2>
<div className="flex gap-4 lg:mb-6 mb-4 gap-x-4 gap-y-4 items-start shrink-0">
<div className="w-1 bg-brand-yellow h-12 rounded-full mt-1 shrink-0"></div>
<div className="whitespace-normal">
<p className="lg:text-lg text-sm text-slate-600">Reciba un cordial saludo de parte de Cóndor Carrocerías.
En este breve broshure presentamos algunos de nuestros más recientes productos, que hacen parte del extenso portafolio de soluciones con el que contamos gracias a los cientos de proyectos exitosos llevados a cabo a lo largo de nuestra historia de más de 20 años. Dentro de dichos proyectos se encuentran:</p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3 mt-auto w-full pb-4">
<div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-default group">
<iconify-icon className="text-brand-blue group-hover:scale-110 transition-transform flex-shrink-0" icon="solar:siren-linear" width="20"></iconify-icon>
<span className="text-xs lg:text-sm font-medium text-slate-700">CAI Móvil</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-default group">
<iconify-icon className="text-brand-blue group-hover:scale-110 transition-transform flex-shrink-0" icon="solar:wheel-angle-linear" width="20"></iconify-icon>
<span className="text-xs lg:text-sm font-medium text-slate-700">Patrullas Móviles</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-default group">
<iconify-icon className="text-brand-blue group-hover:scale-110 transition-transform flex-shrink-0" icon="solar:box-linear" width="20"></iconify-icon>
<span className="text-xs lg:text-sm font-medium text-slate-700">Necromóvil</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-default group">
<iconify-icon className="text-brand-blue group-hover:scale-110 transition-transform flex-shrink-0" icon="solar:camera-square-linear" width="20"></iconify-icon>
<span className="text-xs lg:text-sm font-medium text-slate-700">SIART (Drones)</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-default group">
<iconify-icon className="text-brand-blue group-hover:scale-110 transition-transform flex-shrink-0" icon="solar:bus-linear" width="20"></iconify-icon>
<span className="text-xs lg:text-sm font-medium text-slate-700">Buses de Traslado</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-default group">
<iconify-icon className="text-brand-blue group-hover:scale-110 transition-transform flex-shrink-0" icon="solar:book-2-linear" width="20"></iconify-icon>
<span className="text-xs lg:text-sm font-medium text-slate-700">Bibliobús</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-default group">
<iconify-icon className="text-brand-blue group-hover:scale-110 transition-transform flex-shrink-0" icon="solar:stethoscope-linear" width="20"></iconify-icon>
<span className="text-xs lg:text-sm font-medium text-slate-700">Unidades Médicas</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-default group">
<iconify-icon className="text-brand-blue group-hover:scale-110 transition-transform flex-shrink-0" icon="solar:heart-pulse-linear" width="20"></iconify-icon>
<span className="text-xs lg:text-sm font-medium text-slate-700">Unidad Rosada</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-default group">
<iconify-icon className="text-brand-blue group-hover:scale-110 transition-transform flex-shrink-0" icon="solar:test-tube-linear" width="20"></iconify-icon>
<span className="text-xs lg:text-sm font-medium text-slate-700">Laboratorios Móviles</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-default group">
<iconify-icon className="text-brand-blue group-hover:scale-110 transition-transform flex-shrink-0" icon="solar:scale-linear" width="20"></iconify-icon>
<span className="text-xs lg:text-sm font-medium text-slate-700">Casas de Justicia Móviles</span>
</div>
<div className="flex items-center gap-2 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-default group">
<iconify-icon className="text-brand-blue group-hover:scale-110 transition-transform flex-shrink-0" icon="solar:music-note-linear" width="20"></iconify-icon>
<span className="text-xs lg:text-sm font-medium text-slate-700">Bus Discoteca</span>
</div>
</div>
</div>
<div className="absolute top-8 right-8 text-6xl font-sans font-medium text-slate-100 pointer-events-none z-0 mix-blend-multiply hidden lg:block">02</div>
</div>
</section>

<section className="inline-flex snap-center shrink-0 lg:p-12 w-full h-full pt-4 pr-4 pb-4 pl-4 relative items-center justify-center">
<div className="flashlight-card relative w-full max-w-[1600px] h-full lg:aspect-video bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row animate-clip-reveal" style={{-MouseX: '4410px', -MouseY: '-2px'}}>
<div className="flex flex-col lg:flex-row w-full h-full">

<div className="lg:w-1/2 lg:p-16 flex flex-col custom-scroll overflow-y-auto lg:h-full w-full h-2/3 z-10 pt-6 pr-6 pb-6 pl-6 relative justify-center order-2 lg:order-1">
<span className="text-pink-600 font-medium tracking-wide uppercase text-xs mb-3 flex items-center gap-2">
<iconify-icon className="" icon="solar:heart-pulse-linear" width="16"></iconify-icon> Impacto Social
                        </span>
<h2 className="text-2xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-3 lg:mb-4 leading-tight whitespace-normal">
                            Unidad Rosada de <br/><span className="text-pink-500">Atención a la Mujer</span>
</h2>
<p className="text-base lg:text-lg text-slate-600 mb-6 lg:mb-8 whitespace-normal">
                            Brindar atención oportuna es nuestra prioridad. Unidad dotada de mamografía, consultorio médico, psicología y ginecología.
                        </p>
<div className="lg:p-6 bg-slate-50 border-slate-100 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<h3 className="text-xs lg:text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3 lg:mb-4">Servicios Integrados</h3>
<ul className="grid grid-cols-2 gap-y-2 lg:gap-y-3 gap-x-4 lg:gap-x-6 whitespace-normal">
<li className="flex items-center gap-2 text-slate-600 text-xs lg:text-sm"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0"></span>Medicina General</li>
<li className="flex items-center gap-2 text-slate-600 text-xs lg:text-sm"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0"></span>Ginecología</li>
<li className="flex items-center gap-2 text-slate-600 text-xs lg:text-sm"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0"></span>Odontología</li>
<li className="flex items-center gap-2 text-slate-600 text-xs lg:text-sm"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0"></span>Rayos X</li>
<li className="flex items-center gap-2 text-slate-600 text-xs lg:text-sm"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0"></span>Vacunación</li>
<li className="flex items-center gap-2 text-slate-600 text-xs lg:text-sm"><span className="w-1.5 h-1.5 bg-brand-blue rounded-full shrink-0"></span>Psicología</li>
</ul>
</div>
</div>

<div className="w-full lg:w-1/2 h-1/3 lg:h-full relative bg-slate-100 overflow-hidden order-1 lg:order-2">
<img alt="Unidad Médica" className="grayscale-[20%] w-full h-1/8 object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebb1418a-f02a-422d-9ce7-d8d943a8e006_1600w.jpg"/>
<div className="bg-gradient-to-t from-black/50 to-transparent h-1/2 absolute right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 text-white">
<p className="lg:text-base text-sm font-medium">Misión Médica Móvil</p>
<p className="text-xs lg:text-sm opacity-80">Equipamiento completo con rampas y toldo</p>
</div>
</div>
</div>
<div className="absolute top-4 left-4 lg:top-8 lg:left-8 text-4xl lg:text-6xl font-sans font-medium text-slate-900/5 pointer-events-none">03</div>
</div>
</section>

<section className="h-full w-full inline-flex items-center justify-center snap-center shrink-0 p-4 lg:p-12 relative">
<div className="flashlight-card relative w-full max-w-[1600px] h-full lg:aspect-video bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col-reverse lg:flex-row animate-clip-reveal" style={{-MouseX: '2970px', -MouseY: '-2px'}}>

<div className="w-full lg:w-1/2 h-1/2 lg:h-full border-t lg:border-t-0 lg:border-r border-slate-100 flex flex-row lg:flex-col">

<div className="w-1/2 lg:w-full h-full lg:h-1/2 relative overflow-hidden group order-1 lg:order-1">
<img alt="Police" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5a109e55-b8a7-461b-baf7-cb7bab4472c1_1600w.jpg"/>
<div className="lg:top-6 lg:left-6 lg:px-4 lg:py-1.5 text-[10px] lg:text-xs uppercase font-semibold text-white tracking-wider rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 left-4">Comercial</div>
</div>

<div className="lg:w-full lg:h-1/2 lg:p-10 flex flex-col order-2 lg:order-2 custom-scroll overflow-y-auto bg-slate-50/50 w-1/2 h-full pt-4 pr-4 pb-4 pl-4 justify-center">
<h2 className="lg:text-2xl lg:mb-3 text-lg font-semibold text-slate-900 tracking-tight mb-2">Vehículos <br className="lg:hidden"/> Policiales</h2>
<p className="text-slate-600 text-xs lg:text-base leading-relaxed mb-2 whitespace-normal">
                            Creadores del primer CAI móvil en Colombia (2007). Más de 250 unidades producidas entre CAI móvil, SIART y patrullas para la seguridad ciudadana.
                        </p>
</div>
</div>

<div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-row lg:flex-col">

<div className="w-1/2 lg:w-full h-full lg:h-1/2 relative overflow-hidden group order-1 lg:order-2">
<img alt="Showroom" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35a77105-2576-44b8-ab19-afc7e1388177_1600w.jpg"/>
<div className="lg:top-6 lg:left-6 text-brand-dark lg:px-4 lg:py-1.5 text-[10px] lg:text-xs uppercase font-semibold tracking-wider rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 left-4">Institucional</div>
</div>

<div className="lg:w-full lg:h-1/2 lg:p-10 flex flex-col custom-scroll overflow-y-auto bg-white w-1/2 h-full pt-4 pr-4 pb-4 pl-4 justify-center order-2 lg:order-1">
<h2 className="text-lg lg:text-2xl font-semibold text-slate-900 tracking-tight mb-2 lg:mb-3">Vitrinas Móviles</h2>
<p className="text-slate-600 text-xs lg:text-base leading-relaxed mb-2 whitespace-normal">
                            Unidad versátil para promoción y entretenimiento. Laterales de vidrio panorámicos, tarima y oficina interior para maximizar el impacto de marca.
                        </p>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-20 border border-slate-100 hidden lg:flex">
<iconify-icon className="text-slate-400" icon="solar:arrow-right-left-linear" width="20"></iconify-icon>
</div>
<div className="absolute top-4 right-4 lg:top-8 lg:right-8 text-4xl lg:text-6xl font-sans font-medium text-slate-900/5 pointer-events-none">04</div>
</div>
</section>

<section className="h-full w-full inline-flex items-center justify-center snap-center shrink-0 p-4 lg:p-12 relative">
<div className="flashlight-card relative w-full max-w-[1600px] h-full lg:aspect-video bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row animate-clip-reveal" style={{-MouseX: '1530px', -MouseY: '-2px'}}>

<div className="w-full lg:w-4/12 h-1/3 lg:h-full bg-brand-blue text-white p-6 lg:p-14 flex flex-col justify-center lg:justify-between relative overflow-hidden order-2 lg:order-1">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
<div className="relative z-10 custom-scroll overflow-y-auto">
<h2 className="text-2xl lg:text-3xl font-semibold tracking-tight leading-tight mb-4 lg:mb-6">Soluciones de <br/>Servicio Pesado</h2>
<ul className="grid grid-cols-2 lg:grid-cols-1 gap-3 lg:gap-4 whitespace-normal">
<li className="flex items-center gap-2 lg:gap-3 text-white/90 text-xs lg:text-base">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon> Volquetas
                            </li>
<li className="flex items-center gap-2 lg:gap-3 text-white/90 text-xs lg:text-base">
<iconify-icon icon="solar:wheel-angle-linear" width="20"></iconify-icon> Maquinaria
                            </li>
<li className="flex items-center gap-2 lg:gap-3 text-white/90 text-xs lg:text-base">
<iconify-icon className="" icon="solar:fire-linear" width="20"></iconify-icon> Bomberos
                            </li>
<li className="flex items-center gap-2 lg:gap-3 text-white/90 text-xs lg:text-base">
<iconify-icon className="" icon="solar:settings-linear" width="20"></iconify-icon> Compactadores
                            </li>
</ul>
</div>
<div className="relative z-10 border-t border-white/20 pt-4 lg:pt-6 mt-4 lg:mt-0 hidden lg:block">
<p className="text-xs lg:text-sm text-white/70">Diseñados para resistir el trabajo duro.</p>
</div>
</div>

<div className="w-full lg:w-8/12 h-2/3 lg:h-full relative order-1 lg:order-2">
<div className="grid grid-cols-1 grid-rows-2 h-full">
<div className="relative overflow-hidden group">
<img alt="Train" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/01623e7a-71ee-41a6-b9d8-e1c67a6950d8_3840w.jpg"/>
<div className="lg:bg-gradient-to-r lg:w-2/3 bg-gradient-to-t from-brand-blue/90 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 text-white max-w-md whitespace-normal">
<h3 className="text-xl lg:text-2xl font-semibold mb-1 lg:mb-2">Bus Turístico "Zipatren"</h3>
<p className="text-white/90 text-xs lg:text-sm">Herramienta de promoción turística que conecta generaciones.</p>
</div>
</div>
<div className="relative overflow-hidden group">
<img alt="Industrial" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e665ebc-edd0-4544-b161-fb1d3523b7db_3840w.jpg"/>
<div className="bg-gradient-to-t from-black/60 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-8 flex gap-2 lg:gap-4">
<span className="lg:px-4 lg:py-2 lg:text-sm text-xs font-medium text-white bg-white/20 border-white/30 border rounded-lg pt-1 pr-3 pb-1 pl-3 backdrop-blur-md">Volquetas</span>
<span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 lg:px-4 lg:py-2 rounded-lg text-xs lg:text-sm font-medium">Grúas</span>
</div>
</div>
</div>
</div>
<div className="absolute top-4 right-4 lg:top-8 lg:right-8 text-4xl lg:text-6xl font-sans font-medium text-white/20 pointer-events-none mix-blend-overlay">05</div>
</div>
</section>

<section className="h-full w-full inline-flex items-center justify-center snap-center shrink-0 p-4 lg:p-12 relative">
<div className="flashlight-card relative w-full max-w-[1600px] h-full lg:aspect-video bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col lg:flex-row animate-clip-reveal" style={{-MouseX: '90px', -MouseY: '-2px'}}>

<div className="lg:w-5/12 lg:p-14 flex flex-col custom-scroll overflow-y-auto order-2 lg:order-1 lg:h-full gap-6 w-full h-2/3 pt-6 pr-6 pb-6 pl-6 relative justify-between">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow to-brand-blue"></div>

<div className="flex-1 flex flex-col lg:pb-6 border-slate-100 border-b pb-4 justify-center">
<div className="flex items-center gap-2 mb-3">
<iconify-icon className="text-brand-blue" icon="solar:book-bookmark-linear" width="24"></iconify-icon>
<span className="text-xs lg:text-sm font-bold text-brand-blue uppercase tracking-widest">Educación</span>
</div>
<h2 className="text-2xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-3 lg:mb-4">Bibliobús</h2>
<ul className="grid grid-cols-2 gap-y-2 gap-x-2 w-full">
<li className="flex items-center gap-1.5 text-slate-600 text-xs lg:text-sm font-medium">
<iconify-icon className="text-brand-blue/70" icon="solar:bus-linear" width="16"></iconify-icon> Aula móvil
                             </li>
<li className="flex items-center gap-1.5 text-slate-600 text-xs lg:text-sm font-medium">
<iconify-icon className="text-brand-blue/70" icon="solar:book-linear" width="16"></iconify-icon> Biblioteca
                             </li>
<li className="flex items-center gap-1.5 text-slate-600 text-xs lg:text-sm font-medium">
<iconify-icon className="text-brand-blue/70" icon="solar:gamepad-linear" width="16"></iconify-icon> Ludoteca
                             </li>
<li className="flex items-center gap-1.5 text-slate-600 text-xs lg:text-sm font-medium">
<iconify-icon className="text-brand-blue/70" icon="solar:laptop-linear" width="16"></iconify-icon> Aula digital
                             </li>
<li className="flex items-center gap-1.5 text-slate-600 text-xs lg:text-sm font-medium">
<iconify-icon className="text-brand-blue/70" icon="solar:videocamera-linear" width="16"></iconify-icon> Cine móvil
                             </li>
<li className="flex items-center gap-1.5 text-slate-600 text-xs lg:text-sm font-medium">
<iconify-icon className="text-brand-blue/70" icon="solar:blackboard-linear" width="16"></iconify-icon> Capacitación
                             </li>
</ul>
</div>

<div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 lg:p-6 relative shadow-sm shrink-0">
<div className="flex gap-2 mb-2 gap-x-2 gap-y-2 items-center">
<span className="bg-brand-yellow/20 p-1.5 rounded-lg text-yellow-700">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</span>
<h3 className="text-sm lg:text-base font-bold text-slate-900 uppercase tracking-wide">Servicio de Diseño</h3>
</div>
<h3 className="text-lg lg:text-xl font-semibold text-slate-800 mb-2 tracking-tight">Diseñamos su proyecto</h3>
<p className="text-xs lg:text-sm leading-relaxed whitespace-normal text-slate-600 mb-4">
                             Visualización 3D y renderizado profesional para validar ideas antes de la fabricación.
                         </p>

<div className="w-full aspect-[2/1] rounded-lg overflow-hidden border border-slate-200 bg-white relative group">
<img alt="3D Wireframe Render" className="group-hover:opacity-100 transition-opacity duration-500 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cf577b1-a6e6-4148-951f-3d5aef0cecba_800w.jpg"/>
<div className="flex pointer-events-none absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
</div>
</div>
</div>
</div>

<div className="lg:w-7/12 lg:grid lg:place-items-center order-1 lg:order-2 lg:h-full overflow-hidden flex w-full h-1/3 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ceac1cd-3ddb-477f-8548-aa5bc744d6be_1600w.jpg)] bg-cover bg-center pt-8 pr-8 pb-8 pl-8 relative items-center justify-center">
<div className="absolute bottom-4 right-4 lg:bottom-12 lg:right-12 bg-black/80 text-white px-2 py-1 lg:px-4 lg:py-2 rounded-full text-[10px] lg:text-xs font-mono">RENDER_FINAL_V2.0</div>
</div>
<div className="absolute top-4 left-4 lg:top-8 lg:left-8 text-4xl lg:text-6xl font-sans font-medium text-slate-900/5 pointer-events-none">06</div>
</div>
</section>

<section className="inline-flex snap-center shrink-0 w-full h-full p-4 lg:p-12 relative items-center justify-center">
<div className="flashlight-card relative w-full max-w-[1600px] h-full lg:aspect-video bg-brand-blue rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center text-center p-4 lg:p-8 animate-clip-reveal" style={{-MouseX: '-1350px', -MouseY: '-2px'}}>
<div className="flex flex-col custom-scroll overflow-y-auto w-full h-full max-w-5xl z-10 relative items-center justify-center">

<div className="flex w-32 h-16 lg:w-64 lg:h-24 border-0 rounded-2xl mb-6 lg:mb-10 items-center justify-center shrink-0">
<div className="flex w-full h-full border-0 rounded-3xl items-center justify-center">
<img alt="Logo Brand" className="opacity-100 mix-blend-normal w-auto h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7153c50-ca34-4e46-86f9-fdfe6133c87a_320w.png"/>
</div>
</div>
<h2 className="lg:text-6xl whitespace-normal lg:mb-4 text-3xl font-semibold text-white tracking-tight mb-2">
                        Vehículos No Convencionales
                    </h2>
<p className="lg:text-2xl text-brand-yellow lg:mb-12 text-lg font-medium tracking-wide mb-8">Unidades especiales</p>
<div className="lg:p-8 lg:max-w-full bg-white/10 w-full max-w-md border-white/20 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-md">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-white">

<div className="flex lg:flex-col items-center lg:items-start gap-3 text-left">
<span className="bg-white/10 p-2 rounded-full text-brand-yellow shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</span>
<div className="">
<p className="text-white/60 text-[10px] lg:text-xs uppercase tracking-wider mb-0.5">Visítanos</p>
<p className="font-medium text-white text-sm lg:text-sm">Cra 22A 43-69 Sur</p>
</div>
</div>

<div className="flex lg:flex-col items-center lg:items-start gap-3 text-left">
<span className="bg-white/10 p-2 rounded-full text-brand-yellow shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</span>
<div className="">
<p className="text-white/60 text-[10px] lg:text-xs uppercase tracking-wider mb-0.5">Fijo</p>
<p className="font-medium text-white text-sm lg:text-sm">601 279 10 49</p>
</div>
</div>

<div className="flex lg:flex-col items-center lg:items-start gap-3 text-left">
<span className="bg-white/10 p-2 rounded-full text-brand-yellow shrink-0">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon>
</span>
<div className="">
<p className="text-white/60 text-[10px] lg:text-xs uppercase tracking-wider mb-0.5">Celular</p>
<p className="text-sm font-medium text-white lg:text-sm">310 123 4567</p>
</div>
</div>

<div className="flex lg:flex-col items-center lg:items-start gap-3 text-left">
<span className="bg-white/10 p-2 rounded-full text-brand-yellow shrink-0">
<iconify-icon className="" icon="solar:global-linear" width="20"></iconify-icon>
</span>
<div className="">
<p className="text-white/60 text-[10px] lg:text-xs uppercase tracking-wider mb-0.5">Web</p>
<p className="text-sm font-medium text-white lg:text-sm">www.carroceriascondor.com.co</p>
</div>
</div>
</div>
</div>
</div>
<div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 text-4xl lg:text-6xl font-sans font-medium text-white/10 pointer-events-none">07</div>
</div>
</section>
</main>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 bg-white/80 backdrop-blur-md border border-slate-200 px-3 py-1.5 lg:px-4 lg:py-2 rounded-full shadow-lg flex gap-2">
<div className="flex gap-2" id="pagination-dots"><button className="h-1.5 lg:h-2 rounded-full transition-all duration-300"></button><button className="h-1.5 lg:h-2 rounded-full transition-all duration-300"></button><button className="h-1.5 lg:h-2 rounded-full transition-all duration-300"></button><button className="h-1.5 lg:h-2 rounded-full transition-all duration-300"></button><button className="h-1.5 lg:h-2 rounded-full transition-all duration-300"></button><button className="h-1.5 lg:h-2 rounded-full transition-all duration-300"></button><button className="h-1.5 lg:h-2 rounded-full transition-all duration-300"></button></div>
</div>


    </>
  );
}
