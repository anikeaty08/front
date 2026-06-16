import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", function() {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('reveal-visible');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
observer.observe(el);
});
});



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full h-[52px] z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50 transition-all duration-300">
<div className="max-w-screen-xl mx-auto h-full px-4 md:px-6 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tight text-black hover:opacity-70 transition-opacity" href="#">
                MyPhone
            </a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-xs font-normal text-neutral-600 hover:text-black transition-colors" href="#">Inicio</a>
<a className="text-xs font-normal text-neutral-600 hover:text-black transition-colors" href="#">Modelos</a>
<a className="text-xs font-normal text-neutral-600 hover:text-black transition-colors" href="#">Comparar</a>
<a className="text-xs font-normal text-neutral-600 hover:text-black transition-colors" href="#">Accesorios</a>
<a className="text-xs font-normal text-neutral-600 hover:text-black transition-colors" href="#">Soporte</a>
</div>

<div className="flex items-center space-x-4">
<button className="text-neutral-600 hover:text-black transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
<button className="text-neutral-600 hover:text-black transition-colors">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
</button>
<div className="md:hidden">
<i className="w-5 h-5 text-neutral-800" data-lucide="menu"></i>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-12 overflow-hidden bg-white">
<div className="flex flex-col items-center text-center z-10 px-4 mt-10 md:mt-0 reveal-on-scroll">
<h2 className="text-lg md:text-2xl font-medium text-amber-600 mb-3 tracking-wide">Nuevo</h2>
<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-black mb-4 leading-tight">
                MyPhone Pro.
            </h1>
<p className="text-xl md:text-2xl font-light text-neutral-500 tracking-tight max-w-2xl mx-auto mb-8">
                Titanio. Tan fuerte. Tan ligero. Tan Pro.
            </p>
<div className="flex items-center space-x-6">
<a className="px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors" href="#">
                    Comprar
                </a>
<a className="text-blue-600 text-sm font-medium hover:underline flex items-center" href="#">
                    Más información <i className="w-4 h-4 ml-1" data-lucide="chevron-right"></i>
</a>
</div>
</div>

<div className="relative w-full max-w-5xl mt-12 md:mt-16 reveal-on-scroll flex justify-center">
<img alt="Smartphone Titanium" className="w-full h-auto object-cover md:rounded-[3rem] shadow-none md:shadow-2xl mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{maxHeight: '70vh', maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'}}/>
</div>
</section>

<section className="py-24 bg-neutral-50">
<div className="max-w-screen-xl mx-auto px-6">
<h3 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16 text-neutral-900 reveal-on-scroll">
                Descubre la línea completa.
            </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="group bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 hover:scale-[1.01] flex flex-col items-center text-center reveal-on-scroll cursor-pointer h-[500px] justify-between">
<div className="mt-4">
<span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">Lo último</span>
<h4 className="text-3xl font-semibold tracking-tight mt-2 text-black">MyPhone Pro</h4>
<p className="text-neutral-500 mt-2 text-sm font-light">El chip definitivo.</p>
</div>
<img alt="Pro" className="w-48 h-auto object-contain my-8 mix-blend-multiply" src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col gap-4 w-full">
<div className="flex justify-center gap-2">
<div className="w-3 h-3 rounded-full bg-neutral-800 border border-neutral-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-300 border border-neutral-200"></div>
<div className="w-3 h-3 rounded-full bg-blue-900 border border-neutral-200"></div>
</div>
<div className="flex justify-center gap-4 mt-2">
<button className="px-4 py-1.5 bg-blue-600 text-white text-xs rounded-full">Comprar</button>
<a className="text-blue-600 text-xs hover:underline py-1.5" href="#">Más info</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 hover:scale-[1.01] flex flex-col items-center text-center reveal-on-scroll cursor-pointer h-[500px] justify-between">
<div className="mt-4">
<span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Novedad</span>
<h4 className="text-3xl font-semibold tracking-tight mt-2 text-black">MyPhone 15</h4>
<p className="text-neutral-500 mt-2 text-sm font-light">Increíble en todo.</p>
</div>
<img alt="Standard" className="w-48 h-auto object-contain my-8 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex flex-col gap-4 w-full">
<div className="flex justify-center gap-2">
<div className="w-3 h-3 rounded-full bg-rose-200 border border-neutral-200"></div>
<div className="w-3 h-3 rounded-full bg-yellow-100 border border-neutral-200"></div>
<div className="w-3 h-3 rounded-full bg-black border border-neutral-200"></div>
</div>
<div className="flex justify-center gap-4 mt-2">
<button className="px-4 py-1.5 bg-blue-600 text-white text-xs rounded-full">Comprar</button>
<a className="text-blue-600 text-xs hover:underline py-1.5" href="#">Más info</a>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] transition-all duration-500 hover:scale-[1.01] flex flex-col items-center text-center reveal-on-scroll cursor-pointer h-[500px] justify-between md:col-span-2 lg:col-span-1">
<div className="mt-4">
<h4 className="text-3xl font-semibold tracking-tight mt-2 text-black">MyPhone SE</h4>
<p className="text-neutral-500 mt-2 text-sm font-light">Potencia seria. Precio ideal.</p>
</div>
<img alt="SE" className="w-40 h-auto object-contain my-8 mix-blend-multiply" src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col gap-4 w-full">
<div className="flex justify-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-600 border border-neutral-200"></div>
<div className="w-3 h-3 rounded-full bg-neutral-100 border border-neutral-200"></div>
<div className="w-3 h-3 rounded-full bg-neutral-900 border border-neutral-200"></div>
</div>
<div className="flex justify-center gap-4 mt-2">
<button className="px-4 py-1.5 bg-blue-600 text-white text-xs rounded-full">Comprar</button>
<a className="text-blue-600 text-xs hover:underline py-1.5" href="#">Más info</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden">
<div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
<div className="md:w-1/2 reveal-on-scroll">
<h3 className="text-sm font-semibold text-neutral-500 mb-2">Chip A18 Pro</h3>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-black mb-6 leading-[1.1]">
                    Un monstruo de la <br/>velocidad.
                </h2>
<p className="text-lg text-neutral-600 font-medium leading-relaxed max-w-md">
                    El chip más avanzado jamás creado para un smartphone. Rediseñado para un rendimiento gráfico extremo y eficiencia energética sin precedentes.
                </p>
<div className="mt-8 flex gap-8">
<div>
<p className="text-3xl font-semibold text-black">20%</p>
<p className="text-xs text-neutral-500 mt-1">Más rápido</p>
</div>
<div>
<p className="text-3xl font-semibold text-black">6-core</p>
<p className="text-xs text-neutral-500 mt-1">GPU Pro-class</p>
</div>
</div>
</div>
<div className="md:w-1/2 reveal-on-scroll flex justify-center">
<div className="relative w-64 h-64 md:w-80 md:h-80 bg-neutral-900 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555664424-778a693065af?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover opacity-50 mix-blend-overlay"></div>
<span className="text-white font-medium text-xl tracking-widest z-10">A18 PRO</span>
<div className="absolute w-full h-full border border-neutral-700 rounded-3xl"></div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F5F5F7]">
<div className="max-w-screen-xl mx-auto px-6 text-center reveal-on-scroll">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-black mb-6">
                Cámaras Pro. <br/> Captura tu imaginación.
            </h2>
<p className="text-xl text-neutral-500 font-light max-w-2xl mx-auto mb-16">
                Desde la flexibilidad del encuadre hasta la nueva generación de retratos.
            </p>
<div className="relative rounded-[3rem] overflow-hidden bg-black aspect-video shadow-2xl">
<img alt="Camera Sample" className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-left">
<p className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Cámara Principal</p>
<p className="text-white text-3xl md:text-4xl font-semibold tracking-tight">48 MP</p>
<p className="text-neutral-400 text-sm mt-2">Resolución ultra alta para detalles infinitos.</p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 text-left">
<div className="p-6">
<i className="w-8 h-8 text-neutral-900 mb-4" data-lucide="aperture" strokeWidth="1"></i>
<h4 className="font-semibold text-sm">Zoom Óptico 5x</h4>
<p className="text-xs text-neutral-500 mt-1">Llega más lejos.</p>
</div>
<div className="p-6">
<i className="w-8 h-8 text-neutral-900 mb-4" data-lucide="moon" strokeWidth="1"></i>
<h4 className="font-semibold text-sm">Modo Noche</h4>
<p className="text-xs text-neutral-500 mt-1">Brilla en la oscuridad.</p>
</div>
<div className="p-6">
<i className="w-8 h-8 text-neutral-900 mb-4" data-lucide="video" strokeWidth="1"></i>
<h4 className="font-semibold text-sm">Acción 4K</h4>
<p className="text-xs text-neutral-500 mt-1">Estabilidad de cine.</p>
</div>
<div className="p-6">
<i className="w-8 h-8 text-neutral-900 mb-4" data-lucide="focus" strokeWidth="1"></i>
<h4 className="font-semibold text-sm">Macro</h4>
<p className="text-xs text-neutral-500 mt-1">Detalles minúsculos.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black text-white">
<div className="max-w-screen-xl mx-auto px-6 flex flex-col items-center text-center reveal-on-scroll">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4 text-gradient">
                Pantalla Super Retina XDR.
            </h2>
<h3 className="text-2xl md:text-3xl text-neutral-400 font-light mb-12">
                Brillante. Incluso bajo el sol.
            </h3>
<div className="relative w-full max-w-4xl mx-auto">
<img alt="Screen" className="w-full h-auto rounded-[2.5rem] border border-neutral-800 shadow-[0_0_80px_-20px_rgba(255,255,255,0.1)]" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 max-w-4xl w-full text-left">
<div>
<h4 className="text-3xl font-semibold text-white">2000 nits</h4>
<p className="text-sm text-neutral-500 mt-2 font-medium">Brillo máximo en exteriores.</p>
</div>
<div>
<h4 className="text-3xl font-semibold text-white">120 Hz</h4>
<p className="text-sm text-neutral-500 mt-2 font-medium">ProMotion adaptativo.</p>
</div>
<div>
<h4 className="text-3xl font-semibold text-white">Always-On</h4>
<p className="text-sm text-neutral-500 mt-2 font-medium">Siempre lista. Siempre visible.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-screen-md mx-auto px-6 text-center reveal-on-scroll">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 mb-6">
<i className="w-8 h-8 text-green-600" data-lucide="battery-charging"></i>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-6">
                 Batería para todo el día.
             </h2>
<p className="text-lg text-neutral-500 leading-relaxed">
                 Hasta 29 horas de reproducción de video. Para que sigas haciendo lo que amas, por mucho más tiempo.
             </p>
</div>
</section>

<section className="py-24 bg-neutral-100 mb-12">
<div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between reveal-on-scroll">
<div className="md:w-1/2 p-8">
<div className="flex items-center gap-3 mb-4">
<i className="w-6 h-6 text-neutral-400" data-lucide="lock"></i>
<span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Privacidad</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
                     Tus datos son solo tuyos.
                 </h2>
<p className="text-neutral-600 font-medium max-w-sm">
                     Face ID no guarda imágenes de tu cara. Tus datos de salud se encriptan. La privacidad viene de serie.
                 </p>
</div>
<div className="md:w-1/3 flex justify-center">
<div className="w-48 h-48 bg-white rounded-full flex items-center justify-center shadow-lg">
<i className="w-20 h-20 text-blue-600" data-lucide="shield-check" strokeWidth="1"></i>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-50 border-t border-neutral-200 pt-16 pb-12 text-xs text-neutral-500">
<div className="max-w-screen-xl mx-auto px-6">

<div className="border-b border-neutral-200 pb-8 mb-8">
<p className="mb-2">1. Los datos son aproximados y dependen del uso y la configuración.</p>
<p>2. La pantalla tiene esquinas redondeadas que siguen el elegante diseño curvo del teléfono.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="flex flex-col gap-3">
<h4 className="font-semibold text-neutral-900 mb-1">Descubrir</h4>
<a className="hover:underline" href="#">Mac</a>
<a className="hover:underline" href="#">iPad</a>
<a className="hover:underline" href="#">iPhone</a>
<a className="hover:underline" href="#">Watch</a>
<a className="hover:underline" href="#">AirPods</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-semibold text-neutral-900 mb-1">Cuenta</h4>
<a className="hover:underline" href="#">Gestionar ID</a>
<a className="hover:underline" href="#">Tienda</a>
<a className="hover:underline" href="#">iCloud</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-semibold text-neutral-900 mb-1">Tienda</h4>
<a className="hover:underline" href="#">Buscar tienda</a>
<a className="hover:underline" href="#">Genius Bar</a>
<a className="hover:underline" href="#">Financiación</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-semibold text-neutral-900 mb-1">Empresas</h4>
<a className="hover:underline" href="#">MyPhone y la empresa</a>
<a className="hover:underline" href="#">Comprar para empresa</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-semibold text-neutral-900 mb-1">Valores</h4>
<a className="hover:underline" href="#">Accesibilidad</a>
<a className="hover:underline" href="#">Medio ambiente</a>
<a className="hover:underline" href="#">Privacidad</a>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200">
<p className="mb-4 md:mb-0">Copyright © 2023 MyPhone Inc. Todos los derechos reservados.</p>
<div className="flex space-x-6">
<a className="hover:underline text-neutral-700" href="#">Privacidad</a>
<a className="hover:underline text-neutral-700" href="#">Términos de uso</a>
<a className="hover:underline text-neutral-700" href="#">Ventas y reembolsos</a>
<a className="hover:underline text-neutral-700" href="#">Legal</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
