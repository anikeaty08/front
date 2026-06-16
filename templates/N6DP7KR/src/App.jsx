import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    lucide.createIcons();

    // mobile nav toggle
    document.getElementById('menuBtn').addEventListener('click', () => {
      document.getElementById('mobileNav').classList.toggle('hidden');
    });

    // testimonial slider
    const list = document.getElementById('testimonialList');
    const items = list.children.length;
    let idx = 0;
    function slide(to) {
      idx = (to + items) % items;
      list.style.transform = `translateX(-${idx * 100}%)`;
    }
    document.getElementById('prevTest').addEventListener('click', () => slide(idx - 1));
    document.getElementById('nextTest').addEventListener('click', () => slide(idx + 1));
    setInterval(() => slide(idx + 1), 8000);

    // fade-in on scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section, article').forEach(el => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'all 0.8s ease-out';
      observer.observe(el);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/ventura2copy-QlljPuDvQWfMiAnUXFOrCrsY" width="100%"></iframe></div>

<header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-stone-50/80 border-b border-stone-200">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
<a className="text-2xl font-semibold tracking-tight text-emerald-700" href="#home">Nutrivida</a>
<nav className="hidden md:flex gap-8 text-stone-700">
<a className="hover:text-emerald-700 transition-colors" href="#home">Inicio</a>
<a className="hover:text-emerald-700 transition-colors" href="#about">Sobre mí</a>
<a className="hover:text-emerald-700 transition-colors" href="#services">Servicios</a>
<a className="hover:text-emerald-700 transition-colors" href="#testimonials">Testimonios</a>
<a className="hover:text-emerald-700 transition-colors" href="#blog">Blog</a>
<a className="hover:text-emerald-700 transition-colors" href="#contact">Contacto</a>
</nav>
<button className="md:hidden p-2 rounded hover:bg-stone-200" id="menuBtn">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<div className="absolute top-full inset-x-0 bg-stone-50 border-t border-stone-200 hidden flex-col text-center py-4 md:hidden" id="mobileNav">
<a className="py-2 hover:text-emerald-700" href="#home">Inicio</a>
<a className="py-2 hover:text-emerald-700" href="#about">Sobre mí</a>
<a className="py-2 hover:text-emerald-700" href="#services">Servicios</a>
<a className="py-2 hover:text-emerald-700" href="#testimonials">Testimonios</a>
<a className="py-2 hover:text-emerald-700" href="#blog">Blog</a>
<a className="py-2 hover:text-emerald-700" href="#contact">Contacto</a>
</div>
</header>
<main className="pt-24 space-y-36">

<section className="relative overflow-hidden" id="home">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-stone-900" style={{lineHeight: '1.1'}}>Nutrición pensada para ti</h1>
<p className="text-lg text-stone-600">Planes alimenticios que se adaptan a tu estilo de vida y celebran tu individualidad.</p>
<a className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md shadow transition" href="#contact">
            Agenda tu consulta
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="relative">
<img alt="Ilustración vegetal" className="rounded-2xl shadow-lg w-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-200/50 rounded-full blur-2xl"></div>
<div className="absolute bottom-0 -left-6 w-16 h-16 bg-amber-300/60 rounded-full blur-xl"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6" id="about">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="relative">
<img alt="Nutricionista" className="rounded-2xl shadow-lg w-full" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-8 left-8 w-24 h-24 border-4 border-stone-50 rounded-full"></div>
</div>
<div className="space-y-4">
<h2 className="text-4xl font-semibold tracking-tight text-stone-900">Hola, soy Mariana Suárez</h2>
<p className="text-stone-600 leading-relaxed">Nutricionista apasionada por el bienestar integral. Creo en la alimentación consciente, disfrutable, y en el poder de los hábitos sostenibles.</p>
<p className="text-stone-600 leading-relaxed">Con más de 8 años de experiencia, he acompañado a cientos de personas a reconectar con su cuerpo y alcanzar sus metas de salud.</p>
<div className="flex gap-4">
<i className="w-6 h-6 text-emerald-700" data-lucide="leaf"></i>
<i className="w-6 h-6 text-rose-500" data-lucide="heart"></i>
<i className="w-6 h-6 text-amber-600" data-lucide="activity"></i>
</div>
</div>
</div>
</section>

<section className="bg-stone-100/60 py-24" id="services">
<div className="max-w-7xl mx-auto px-6 text-center space-y-16">
<div className="space-y-3">
<h2 className="text-4xl font-semibold tracking-tight text-stone-900">Servicios</h2>
<p className="text-stone-600 max-w-xl mx-auto">Soluciones personalizadas para cada etapa de tu camino hacia la salud.</p>
</div>
<div className="grid lg:grid-cols-3 gap-10">
<div className="bg-white px-8 py-12 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
<i className="w-8 h-8 text-emerald-700 mb-4" data-lucide="video"></i>
<h3 className="text-xl font-medium tracking-tight mb-2">Consultas Online</h3>
<p className="text-stone-600">Asesoría nutricional desde cualquier lugar, con seguimiento cercano y flexible.</p>
</div>
<div className="bg-white px-8 py-12 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
<i className="w-8 h-8 text-emerald-700 mb-4" data-lucide="list-checks"></i>
<h3 className="text-xl font-medium tracking-tight mb-2">Planes Personalizados</h3>
<p className="text-stone-600">Diseño de menús adaptados a tu metabolismo, gustos y objetivos.</p>
</div>
<div className="bg-white px-8 py-12 rounded-2xl shadow hover:shadow-lg transition transform hover:-translate-y-1">
<i className="w-8 h-8 text-emerald-700 mb-4" data-lucide="dumbbell"></i>
<h3 className="text-xl font-medium tracking-tight mb-2">Asesoría Deportiva</h3>
<p className="text-stone-600">Optimiza tu rendimiento y recuperación con una estrategia nutricional inteligente.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6" id="testimonials">
<div className="space-y-12">
<div className="text-center space-y-3">
<h2 className="text-4xl font-semibold tracking-tight text-stone-900">Lo que dicen mis clientes</h2>
<p className="text-stone-600">Historias reales de transformación y bienestar.</p>
</div>
<div className="relative">
<div className="overflow-hidden" id="testimonialSlider">
<ul className="flex transition-all duration-700" id="testimonialList">
<li className="min-w-full px-6">
<div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center gap-6">
<img alt="Cliente 1" className="w-24 h-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
<p className="text-stone-600 italic max-w-xl text-center">“Mariana cambió mi relación con la comida. Hoy disfruto comer sin culpa y tengo más energía que nunca.”</p>
<span className="font-medium text-stone-800">Ana López</span>
</div>
</li>
<li className="min-w-full px-6">
<div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center gap-6">
<img alt="Cliente 2" className="w-24 h-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
<p className="text-stone-600 italic max-w-xl text-center">“Con su asesoría deportiva, mi rendimiento mejoró y logré mis objetivos de carrera sin lesiones.”</p>
<span className="font-medium text-stone-800">Jorge Martínez</span>
</div>
</li>
<li className="min-w-full px-6">
<div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col items-center gap-6">
<img alt="Cliente 3" className="w-24 h-24 rounded-full object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
<p className="text-stone-600 italic max-w-xl text-center">“Su plan personalizado me ayudó a recuperar mi salud digestiva y sentirme ligera cada día.”</p>
<span className="font-medium text-stone-800">María Fernández</span>
</div>
</li>
</ul>
</div>

<button className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-100 hover:bg-stone-200 shadow" id="prevTest"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<button className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-stone-100 hover:bg-stone-200 shadow" id="nextTest"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>
</section>

<section className="bg-stone-100/60 py-24" id="blog">
<div className="max-w-7xl mx-auto px-6 space-y-16">
<div className="text-center space-y-3">
<h2 className="text-4xl font-semibold tracking-tight text-stone-900">Blog</h2>
<p className="text-stone-600">Consejos y educación alimenticia basada en ciencia.</p>
</div>
<div className="grid md:grid-cols-3 gap-10">
<article className="bg-white rounded-2xl shadow group hover:shadow-lg transition">
<img alt="Artículo 1" className="rounded-t-2xl" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-6 space-y-4">
<h3 className="text-xl font-medium tracking-tight group-hover:text-emerald-700 transition">Cómo crear un plato equilibrado</h3>
<p className="text-stone-600">Aprende la fórmula sencilla para combinar macronutrientes y micronutrientes.</p>
<a className="text-emerald-700 inline-flex items-center gap-1 hover:underline" href="#">Leer más <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</article>
<article className="bg-white rounded-2xl shadow group hover:shadow-lg transition">
<img alt="Artículo 2" className="rounded-t-2xl" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-6 space-y-4">
<h3 className="text-xl font-medium tracking-tight group-hover:text-emerald-700 transition">Mitos sobre carbohidratos</h3>
<p className="text-stone-600">Desmontamos creencias comunes y te ayudamos a elegir los mejores carbohidratos.</p>
<a className="text-emerald-700 inline-flex items-center gap-1 hover:underline" href="#">Leer más <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</article>
<article className="bg-white rounded-2xl shadow group hover:shadow-lg transition">
<img alt="Artículo 3" className="rounded-t-2xl" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-6 space-y-4">
<h3 className="text-xl font-medium tracking-tight group-hover:text-emerald-700 transition">Hidratación: más que agua</h3>
<p className="text-stone-600">Bebidas, electrolitos y cómo mantener un balance hídrico óptimo.</p>
<a className="text-emerald-700 inline-flex items-center gap-1 hover:underline" href="#">Leer más <i className="w-4 h-4" data-lucide="arrow-right"></i></a>
</div>
</article>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6" id="contact">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-4xl font-semibold tracking-tight text-stone-900">¿Listo para comenzar?</h2>
<p className="text-stone-600">Déjame tus datos y nos pondremos en contacto para diseñar tu plan.</p>
<div className="relative">
<img alt="Ilustración contacto" className="rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute -bottom-6 -right-6 w-20 h-20 bg-emerald-200/60 rounded-full blur-xl"></div>
</div>
</div>
<form className="bg-white p-10 rounded-2xl shadow space-y-6">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="name">Nombre</label>
<input className="w-full px-4 py-3 rounded-md border border-stone-300 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition" id="name" placeholder="Tu nombre" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="email">Email</label>
<input className="w-full px-4 py-3 rounded-md border border-stone-300 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition" id="email" placeholder="tucorreo@ejemplo.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="message">Mensaje</label>
<textarea className="w-full px-4 py-3 rounded-md border border-stone-300 focus:ring-emerald-600 focus:border-emerald-600 outline-none transition" id="message" placeholder="Cuéntame tus objetivos..." rows="4"></textarea>
</div>
<button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-md shadow" type="submit">Enviar</button>
</form>
</div>
</section>
</main>

<footer className="mt-24 bg-stone-900 text-stone-200">
<div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
<div className="space-y-4">
<h3 className="text-2xl font-semibold tracking-tight">Nutrivida</h3>
<p className="text-stone-400">Nutrición que celebra tu individualidad.</p>
</div>
<div className="md:text-right space-y-2">
<p className="text-stone-400">© 2024 Nutrivida. Todos los derechos reservados.</p>
<a className="text-emerald-400 hover:text-emerald-300" href="#home">Volver arriba</a>
</div>
</div>
</footer>



    </>
  );
}
