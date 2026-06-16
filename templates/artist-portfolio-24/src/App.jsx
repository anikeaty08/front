import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-[#0B0B0D]/80 backdrop-blur-md border-b border-[#242427]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-serif text-2xl tracking-tight font-medium logo-gradient" href="#">
                GISEL ROSSO
            </a>

<nav className="hidden md:flex items-center gap-8 text-[#B8B8B8] text-sm tracking-wide">
<a className="hover:text-white transition-colors duration-300" href="#about">Sobre mí</a>
<a className="hover:text-white transition-colors duration-300" href="#portfolio">Obras</a>
<a className="hover:text-white transition-colors duration-300" href="#shop">Comprar</a>
<a className="hover:text-white transition-colors duration-300" href="#contact">Contacto</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:block px-5 py-2 border border-white/30 text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300" href="#commissions">
                    Encargar
                </a>

<button className="md:hidden text-white">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Arte abstracto" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#0B0B0D] via-[#0B0B0D]/40 to-[#0B0B0D]/30 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter text-white mb-6">
                Obras que <br/><span className="font-light italic">transforman</span> espacios.
            </h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-[#B8B8B8] max-w-2xl mr-auto mb-10 ml-auto">
                Arte contemporáneo que dialoga con la arquitectura y la emoción. <br className="hidden md:block"/> Piezas únicas creadas desde la introspección.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<a className="w-full sm:w-auto px-8 py-3 bg-white text-black text-sm uppercase tracking-widest hover:bg-[#B8B8B8] transition-colors duration-300 font-medium" href="#portfolio">
                    Ver Obras
                </a>
<a className="w-full sm:w-auto px-8 py-3 border border-white text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300" href="#shop">
                    Comprar Cuadros
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
<iconify-icon height="24" icon="lucide:arrow-down" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 md:py-32 bg-[#0B0B0D]" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="relative aspect-[3/4] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out">
<img alt="Retrato Gisel Rosso" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
</div>

<div className="space-y-8">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white">Soy Gisel Rosso</h2>
<div className="space-y-6 text-[#B8B8B8] font-light leading-relaxed text-lg">
<p>
                            Mi trabajo explora la relación entre la textura y el silencio. Pinto para materializar lo intangible, buscando un equilibrio entre el caos del gesto y la calma de la composición.
                        </p>
<p>
                            Cada obra es un testimonio de un momento presente, utilizando acrílicos y técnicas mixtas para crear capas de profundidad que invitan al espectador a detenerse y contemplar.
                        </p>
</div>
<ul className="space-y-3 text-[#8A8A8A] text-sm tracking-wide border-l border-[#242427] pl-6">
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            Técnica mixta sobre lienzo de gran formato.
                        </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            Inspiración en la naturaleza y el brutalismo.
                        </li>
<li className="flex items-center gap-3">
<span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                            Obras que aportan serenidad y carácter.
                        </li>
</ul>
<div className="pt-4">
<a className="inline-flex items-center gap-2 text-white border-b border-white/30 pb-1 hover:border-white transition-colors uppercase text-xs tracking-widest" href="#process">
                            Conocer mi proceso
                            <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0B0D] border-t border-[#242427]" id="portfolio">
<div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white">Obras Realizadas</h2>
<span className="hidden md:block text-[#8A8A8A] text-sm tracking-widest uppercase">Galería Seleccionada</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-[#1a1a1c] mb-4">
<img alt="Obra Conexión" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&amp;w=1287&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-serif text-white tracking-wide">Conexión</h3>
<p className="text-[#8A8A8A] text-sm font-light mt-1">Acrílico sobre lienzo • 120x150cm</p>
</div>
<span className="px-2 py-1 border border-white/20 text-[10px] uppercase tracking-widest text-[#B8B8B8]">Vendida</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-[#1a1a1c] mb-4">
<img alt="Obra Umbral" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=1288&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-serif text-white tracking-wide">Umbral</h3>
<p className="text-[#8A8A8A] text-sm font-light mt-1">Óleo y grafito • 100x100cm</p>
</div>
<span className="px-2 py-1 border border-white/20 text-[10px] uppercase tracking-widest text-[#B8B8B8]">Disponible</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/5] bg-[#1a1a1c] mb-4">
<img alt="Obra Raíz" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=1471&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-serif text-white tracking-wide">Raíz</h3>
<p className="text-[#8A8A8A] text-sm font-light mt-1">Técnica mixta • 80x120cm</p>
</div>
<span className="px-2 py-1 border border-white/20 text-[10px] uppercase tracking-widest text-[#B8B8B8]">Disponible</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0B0D] border-t border-[#242427]" id="shop">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white mb-16 text-center">Comprar Cuadros</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="flex flex-col group">
<div className="relative aspect-square overflow-hidden bg-[#1a1a1c] mb-5">
<img alt="Latido" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-medium text-lg text-white">Latido</h3>
<span className="text-white font-serif italic text-lg">1.200 €</span>
</div>
<p className="text-[#8A8A8A] text-xs mb-4">Acrílico • 80x80cm</p>
<button className="w-full py-2 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-[#B8B8B8] transition-colors">
                        Comprar
                    </button>
</div>

<div className="flex flex-col group">
<div className="relative aspect-square overflow-hidden bg-[#1a1a1c] mb-5">
<img alt="Ecos" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1545989253-02cc26577f88?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-medium text-lg text-white">Ecos</h3>
<span className="text-white font-serif italic text-lg">950 €</span>
</div>
<p className="text-[#8A8A8A] text-xs mb-4">Óleo • 60x90cm</p>
<button className="w-full py-2 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-[#B8B8B8] transition-colors">
                        Comprar
                    </button>
</div>

<div className="flex flex-col group">
<div className="relative aspect-square overflow-hidden bg-[#1a1a1c] mb-5">
<img alt="Silencio II" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-medium text-lg text-white">Silencio II</h3>
<span className="text-white font-serif italic text-lg">1.800 €</span>
</div>
<p className="text-[#8A8A8A] text-xs mb-4">Mixta • 120x120cm</p>
<button className="w-full py-2 bg-white text-black text-xs uppercase tracking-widest font-medium hover:bg-[#B8B8B8] transition-colors">
                        Comprar
                    </button>
</div>

<div className="flex flex-col group">
<div className="relative aspect-square overflow-hidden bg-[#1a1a1c] mb-5">
<img alt="Fragmento" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&amp;w=1258&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<div className="flex justify-between items-baseline mb-1">
<h3 className="font-medium text-lg text-white">Fragmento</h3>
<span className="text-white font-serif italic text-lg">Consultar</span>
</div>
<p className="text-[#8A8A8A] text-xs mb-4">Acrílico • 200x150cm</p>
<button className="w-full py-2 border border-white text-white text-xs uppercase tracking-widest font-medium hover:bg-white hover:text-black transition-colors">
                        Consultar
                    </button>
</div>
</div>

<div className="mt-20 pt-10 border-t border-[#242427] grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-white" height="24" icon="lucide:package" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[#B8B8B8] text-sm tracking-wide">Embalaje de seguridad</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-white" height="24" icon="lucide:award" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[#B8B8B8] text-sm tracking-wide">Certificado de autenticidad</span>
</div>
<div className="flex flex-col items-center gap-3">
<iconify-icon className="text-white" height="24" icon="lucide:truck" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[#B8B8B8] text-sm tracking-wide">Envíos internacionales</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0B0D] border-t border-[#242427]" id="commissions">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white mb-16">Encargos a medida</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border border-[#242427] flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:lightbulb" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-2">1. Idea</h3>
<p className="text-[#8A8A8A] text-sm leading-relaxed">Definimos la paleta, el tamaño y la atmósfera que buscas.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border border-[#242427] flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-2">2. Propuesta</h3>
<p className="text-[#8A8A8A] text-sm leading-relaxed">Te presento un boceto conceptual para su aprobación.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full border border-[#242427] flex items-center justify-center mb-4 text-white">
<iconify-icon icon="lucide:palette" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-white text-lg font-medium mb-2">3. Entrega</h3>
<p className="text-[#8A8A8A] text-sm leading-relaxed">Ejecución de la obra y envío asegurado a tu domicilio.</p>
</div>
</div>
<a className="inline-block px-8 py-3 border border-white text-white text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300" href="#contact">
                Pedir un encargo
            </a>
</div>
</section>

<section className="py-24 bg-[#0B0B0D] border-t border-[#242427]" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight text-white mb-4">Contacto</h2>
<p className="text-[#8A8A8A] font-light">Cuéntame qué obra te interesa o qué tienes en mente.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs text-[#8A8A8A] uppercase tracking-wider ml-1">Nombre</label>
<input className="w-full bg-transparent border-b border-[#242427] text-white py-3 px-1 focus:outline-none focus:border-white transition-colors placeholder-[#333]" placeholder="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-[#8A8A8A] uppercase tracking-wider ml-1">Email</label>
<input className="w-full bg-transparent border-b border-[#242427] text-white py-3 px-1 focus:outline-none focus:border-white transition-colors placeholder-[#333]" placeholder="" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-[#8A8A8A] uppercase tracking-wider ml-1">Motivo</label>
<div className="relative">
<select className="w-full bg-[#0B0B0D] border-b border-[#242427] text-white py-3 px-1 focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
<option>Comprar una obra disponible</option>
<option>Solicitar un encargo</option>
<option>Prensa / Colaboración</option>
</select>
<div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#8A8A8A]">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-[#8A8A8A] uppercase tracking-wider ml-1">Mensaje</label>
<textarea className="w-full bg-transparent border-b border-[#242427] text-white py-3 px-1 focus:outline-none focus:border-white transition-colors resize-none" rows="4"></textarea>
</div>
<div className="pt-6">
<button className="w-full py-4 bg-white text-black text-sm uppercase tracking-widest font-medium hover:bg-[#B8B8B8] transition-colors" type="submit">
                        Enviar Mensaje
                    </button>
</div>
</form>
<div className="mt-12 flex justify-center gap-8 items-center">
<a className="text-[#8A8A8A] hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
<a className="text-[#8A8A8A] hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</a>
<a className="text-[#8A8A8A] hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="py-12 bg-[#0B0B0D] border-t border-[#242427]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="font-serif text-lg tracking-tight text-white/50">GISEL ROSSO</span>
<div className="flex gap-6 text-xs text-[#8A8A8A] tracking-wider uppercase">
<a className="hover:text-white transition-colors" href="#">Política de Privacidad</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
<a className="hover:text-white transition-colors" href="#">Términos</a>
</div>
<p className="text-[#333] text-xs">© 2023 Gisel Rosso. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
