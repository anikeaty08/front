import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"DM Sans"', 'sans-serif'],
serif: ['"Playfair Display"', 'serif'],
},
colors: {
brand: {
navy: '#1a2234',
orange: '#e8a838',
cream: '#f5f2eb',
peach: '#f4c4a8',
gray: '#6b6b6b',
white: '#ffffff',
}
},
backgroundImage: {
'paper-texture': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.08%22/%3E%3C/svg%3E')",
},
boxShadow: {
'sketch': '4px 4px 0px 0px #1a2234',
'sketch-hover': '2px 2px 0px 0px #1a2234',
'card': '0 4px 20px -2px rgba(26, 34, 52, 0.1)',
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-50 bg-paper-texture mix-blend-multiply"></div>

<nav className="fixed top-0 w-full z-40 bg-brand-cream/95 backdrop-blur-sm border-b-2 border-brand-navy/10">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex flex-col group" href="#">
<div className="flex items-center gap-2">
<span className="icon-[lucide--compass] w-6 h-6 text-brand-orange"></span>
<span className="text-brand-navy group-hover:text-brand-orange transition-colors text-2xl font-bold tracking-tight font-serif">Comunidad de hábitos saludables</span>
</div>
<span className="text-[10px] text-brand-gray uppercase font-bold tracking-[0.2em] pl-8">healthy swappers - spain</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-bold tracking-widest uppercase text-brand-navy hover:text-brand-orange transition-colors" href="#episodes">Episodes</a>
<a className="text-xs font-bold tracking-widest uppercase text-brand-navy hover:text-brand-orange transition-colors" href="#hosts">Hosts</a>
<a className="text-xs font-bold tracking-widest uppercase text-brand-navy hover:text-brand-orange transition-colors" href="#framework">Our Framework</a>
<button className="sketchy-btn border-2 border-brand-navy px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-brand-navy hover:text-brand-white transform hover:-rotate-1">
                    Contact
                </button>
</div>

<button className="md:hidden text-brand-navy">
<span className="icon-[lucide--menu] w-6 h-6"></span>
</button>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 relative z-10">

<div className="lg:col-span-6 flex flex-col reveal active space-y-8 items-start justify-center">

<div className="relative inline-block mb-2">
<div className="absolute inset-0 border-2 border-brand-orange sketchy-oval transform -rotate-2"></div>
<span className="relative block px-5 py-2 text-[10px] font-bold tracking-[0.15em] text-brand-navy uppercase">
                        New Episode Streaming
                    </span>
</div>
<h1 className="sm:text-6xl lg:text-7xl text-brand-navy leading-[1.05] text-5xl font-medium tracking-tight font-serif">Más información. <br/> <span className="marker-highlight inline-block transform pr-1 pl-1 -rotate-1">Mejor salud.</span> <br/> Mejor vida.</h1>
<p className="text-brand-gray leading-relaxed text-lg font-light max-w-lg">Cuando no entendemos cómo funciona nuestro cuerpo ni qué hábitos lo favorecen, es fácil adoptar rutinas que, sin darnos cuenta, nos perjudican a largo plazo. Una educación clara y accesible sobre alimentación, descanso, movimiento y gestión del estrés puede marcar una diferencia enorme, no solo para prevenir enfermedades, sino para mejorar nuestra calidad de vida día a día.</p>
<div className="flex flex-wrap items-center gap-6 pt-4">
<button className="sketchy-btn text-brand-navy border-brand-navy uppercase hover:shadow-sketch-hover hover:translate-x-[2px] hover:translate-y-[2px] flex gap-3 text-xs font-bold tracking-widest border-2 pt-4 pr-8 pb-4 pl-8 shadow-sketch gap-x-3 gap-y-3 items-center">
<span className="icon-[lucide--play] w-4 h-4 fill-current"></span>
                        Latest Episode
                    </button>
<button className="sketchy-btn bg-transparent text-brand-navy border-2 border-brand-navy px-8 py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-white transition-colors">
                        Subscribe
                    </button>
</div>
</div>

<div className="lg:col-span-6 flex lg:justify-end reveal delay-100 active bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7934730b-f74a-4795-970a-eedfbba34fcf_1600w.jpg)] bg-cover bg-center relative items-center justify-center">

<svg className="absolute -top-12 -left-12 w-24 h-24 text-brand-navy/20 transform rotate-12 z-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 100">
<path d="M10,50 Q30,20 60,10" marker-end="url(#arrowhead)"></path>
<defs>
<marker id="arrowhead" markerheight="7" markerwidth="10" orient="auto" refx="9" refy="3.5">
<polygon fill="currentColor" points="0 0, 10 3.5, 0 7"></polygon>
</marker>
</defs>
</svg>
</div>
</div>
</header>

<section className="border-y-2 border-brand-navy/10 bg-orange-100 pt-24 pb-24 relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="reveal text-center mb-16 active">
<div className="inline-block border-brand-navy sketchy-box transform border-2 mb-6 pt-1 pr-4 pb-1 pl-4 -rotate-1">
<span className="font-bold text-xs tracking-widest text-brand-navy uppercase">The Problem</span>
</div>
<h2 className="md:text-5xl text-brand-navy leading-tight text-4xl font-serif max-w-3xl mr-auto ml-auto">
    La mayor parte de los problemas de salud se pueden
    <span className="marker-highlight pr-2 pl-2">evitar con unos buenos hábitos </span>
<span className="border-b-4 border-brand-orange/50">Los datos actuales no mienten. </span>.
  </h2>
<p className="mt-6 text-brand-gray font-light max-w-2xl mx-auto text-lg">
    Hay una gran necesidad de integrar hábitos saludables en el día a día. Desde la alimentación, hasta el
    ejercicio físico y el control del stress.
  </p>
</div>

<div className="grid md:grid-cols-3 gap-12 mt-20 gap-x-12 gap-y-12">
<div className="relative text-center group">
<svg className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 text-brand-navy stroke-[1.5] opacity-80" fill="none" viewbox="0 0 100 100">
<path d="M50,70 Q40,40 50,0" marker-end="url(#arrowhead-up)" stroke="currentColor"></path>
</svg>
<div className="border-2 border-brand-navy p-8 sketchy-box bg-brand-white group-hover:-translate-y-2 transition-transform duration-300 shadow-sketch">
<span className="block font-serif text-5xl font-medium text-brand-navy mb-2">+230%</span>
<span className="font-sans text-xs font-bold tracking-widest text-brand-gray uppercase">Aumento Estrés Severo</span>
</div>
</div>
<div className="relative text-center group">
<svg className="absolute -top-8 -right-4 w-16 h-16 text-brand-orange stroke-[2] opacity-80 transform rotate-12" fill="none" viewbox="0 0 100 100">
<path d="M10,10 Q50,50 10,90" stroke="currentColor"></path>
</svg>
<div className="border-brand-navy sketchy-box bg-brand-white group-hover:-translate-y-2 transition-transform duration-300 border-2 p-8 shadow-sketch">
<span className="block font-serif text-5xl font-medium text-brand-navy mb-2">14.1%</span>
<span className="font-sans text-xs font-bold tracking-widest text-brand-gray uppercase">Prevalencia Diabetes</span>
</div>
</div>
<div className="relative text-center group">
<div className="border-2 border-brand-navy p-8 sketchy-box bg-brand-white group-hover:-translate-y-2 transition-transform duration-300 shadow-sketch">
<span className="block font-serif text-5xl font-medium text-brand-navy mb-2">73%</span>
<span className="font-sans text-xs font-bold tracking-widest text-brand-gray uppercase">Sin Control Colesterol</span>
</div>
<svg className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-32 h-4 text-brand-orange" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<defs>
<marker id="arrowhead-down" markerheight="7" markerwidth="10" orient="auto" refx="5" refy="7">
<polygon fill="#1a2234" points="0 0, 5 7, 10 0">
</polygon></marker>
</defs>
</section>


<section className="border-brand-navy/10 bg-slate-50 border-t-2 pt-24 pb-24" id="episodes">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row gap-6 cursor-pointer mb-16 gap-x-6 gap-y-6 items-end justify-between" onclick="window.location.href='/blog'" role="button">
<div className="">
<span className="text-brand-gray uppercase block text-xs font-bold tracking-widest mb-2">tu salud</span>
<h2 className="text-brand-navy text-4xl font-medium font-serif">Categorías</h2>
</div>
<a className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-navy hover:text-brand-orange transition-colors" href="#">
</a><a className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-navy hover:text-brand-orange transition-colors" href="/videos">
<span className="icon-[lucide--arrow-right] group-hover:translate-x-1 transition-transform"></span>
</a>
<span className="icon-[lucide--arrow-right] group-hover:translate-x-1 transition-transform"></span>
</div>
<div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
<article className="group cursor-pointer">
<div className="aspect-video border-brand-navy sketchy-box overflow-hidden group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all border-2 mb-6 relative shadow-sketch">
<img className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec5a2bc1-5eca-4df7-aa90-36641ab04910_1600w.jpg"/>
</div>
<div className="space-y-3">
<span className="text-[10px] text-brand-orange uppercase border-brand-orange inline-block font-bold tracking-widest border rounded-full pt-0.5 pr-3 pb-0.5 pl-3">PSICOLOGÍA</span>
<h4 className="text-brand-navy leading-tight group-hover:text-brand-orange transition-colors text-xl font-medium font-serif">Indice de temas de gestión del estrés</h4>
<p className="text-brand-gray leading-relaxed line-clamp-2 text-sm font-light">Encuentra videos y artículos que te ayudarán a gestionar el estrés de una forma calmada</p>
</div>
</article>
<article className="group cursor-pointer">
<div className="aspect-video border-brand-navy sketchy-box overflow-hidden group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all border-2 mb-6 relative shadow-sketch">
<img className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9757e043-5a31-47b3-8ff0-7d2f368514e2_800w.jpg"/>
</div>
<div className="space-y-3">
<span className="text-[10px] text-brand-orange uppercase border-brand-orange inline-block font-bold tracking-widest border rounded-full pt-0.5 pr-3 pb-0.5 pl-3">DEPORTE</span>
<h4 className="text-brand-navy leading-tight group-hover:text-brand-orange transition-colors text-xl font-medium font-serif">Índice de temas sobre ejercicio físico</h4>
<p className="text-brand-gray leading-relaxed line-clamp-2 text-sm font-light">Encuentra videos y artículos que te ayudarán a incluir una rutina de ejercicios saludables en tu día a día</p>
</div>
</article>
<article className="group cursor-pointer" onclick="window.location.href='/alimentacion'" role="button">
<div className="aspect-video border-brand-navy sketchy-box overflow-hidden group-hover:shadow-sketch-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all border-2 mb-6 relative shadow-sketch">
<img className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b12eb248-50a2-4d45-a40e-93a3a318c37b_800w.jpg"/>
</div>
<div className="space-y-3">
<span className="text-[10px] text-brand-orange uppercase border-brand-orange inline-block font-bold tracking-widest border rounded-full pt-0.5 pr-3 pb-0.5 pl-3">ALIMENTACIÓN</span>
<h4 className="text-brand-navy leading-tight group-hover:text-brand-orange transition-colors text-xl font-medium font-serif">Indice de temas sobre alimentación sana</h4>
<p className="text-brand-gray leading-relaxed line-clamp-2 text-sm font-light">Encuentra videos y artículos que te ayudarán a mejorar tu alimentación</p>
</div>
</article>
</div>
</div>
</section><header className="overflow-hidden pt-32 pb-20 relative lg:pt-20 lg:pb-20">
<div className="grid z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-0 gap-y-0 lg:grid-cols-12">

<div className="lg:col-span-12 flex flex-col reveal active bg-center opacity-90 mix-blend-multiply h-64 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29f3c664-0bd3-49e7-a0f8-0b124d9d84fe_1600w.png)] object-cover rounded-2xl mb-8 relative top-0 right-0 bottom-0 left-0">
<div className="relative inline-block mb-2">
<div className="absolute inset-0 border-2 border-brand-orange sketchy-oval transform -rotate-2"></div>
</div>
<div className="flex flex-wrap items-center gap-6 pt-4">
</div>
</div>

<div className="lg:col-span-6 flex lg:justify-end reveal delay-100 active bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7934730b-f74a-4795-970a-eedfbba34fcf_1600w.jpg)] bg-cover relative items-center justify-center">

<svg className="absolute -top-12 -left-12 w-24 h-24 text-brand-navy/20 transform rotate-12 z-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 100">
<path d="M10,50 Q30,20 60,10" marker-end="url(#arrowhead)"></path>
<defs>
<marker id="arrowhead" markerheight="7" markerwidth="10" orient="auto" refx="9" refy="3.5">
<polygon fill="currentColor" points="0 0, 10 3.5, 0 7"></polygon>
</marker>
</defs>
</svg>
</div>
</div>
</header>

<section className="py-32 bg-brand-navy relative overflow-hidden text-brand-cream" id="subscribe">

<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%23e8a838\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'3\\' cy=\\'3\\' r=\\'1\\'/%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="text-center max-w-2xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="w-16 h-16 bg-brand-orange text-brand-navy mx-auto mb-8 flex items-center justify-center rounded-full border-2 border-brand-cream transform rotate-3">
<span className="icon-[lucide--mail] w-8 h-8"></span>
</div>
<h2 className="md:text-4xl text-3xl font-medium font-serif mb-4">CCOO se preocupa por tu bienestar. Entra en la comunidad gratis y encuentra todos estos
  beneficios</h2>
<ul className="max-w-3xl mx-auto space-y-4 mb-10">
<li className="flex items-start justify-center gap-3">
<svg className="w-6 h-6 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-brand-cream/90 text-lg font-light text-left">Descubre consejos para mantenerte en forma solo y en grupo</span>
</li>
<li className="flex items-start justify-center gap-3">
<svg className="w-6 h-6 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-brand-cream/90 text-lg font-light text-left">Miles de recetas de comida sana con la que cuidarte tú y a tu familia</span>
</li>
<li className="flex items-start justify-center gap-3">
<svg className="w-6 h-6 text-green-400 shrink-0 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
<span className="text-brand-cream/90 text-lg font-light text-left">Encuentra personas con los mismo objetivos para apoyarte</span>
</li>
</ul>
<form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
<input className="flex-1 px-6 py-4 bg-brand-navy border-2 border-brand-cream focus:outline-none focus:border-brand-orange placeholder-brand-cream/30 text-xs font-bold tracking-wide uppercase sketchy-box" placeholder="ENTER EMAIL ADDRESS" type="email"/>
<button className="bg-brand-orange text-brand-navy px-8 py-4 text-xs font-bold uppercase tracking-widest border-2 border-transparent hover:bg-brand-cream transition-colors sketchy-btn shadow-lg" type="button">
                    Subscribe
                </button>
</form>
<p className="text-[10px] font-sans font-bold text-brand-cream/50 mt-6 uppercase tracking-widest">Join 12,000+ Healthcare Leaders</p>
</div>
</section>

<footer className="bg-brand-cream border-t border-brand-navy/10 py-20 relative">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2 space-y-6">
<a className="flex items-center gap-2" href="#">
<span className="icon-[lucide--compass] w-5 h-5 text-brand-navy"></span>
<span className="font-serif font-bold text-lg text-brand-navy tracking-tight">Deciding Health</span>
</a>
<p className="text-xs font-sans text-brand-gray max-w-sm leading-relaxed">
                    A journalistic inquiry into the economics of health. <br/>Est. 2024.
                </p>
</div>
<div className="space-y-6">
<h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Listen On</h4>
<ul className="space-y-3 text-sm font-sans font-medium text-brand-navy">
<li className=""><a className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all" href="#">Apple Podcasts</a></li>
<li><a className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all" href="#">Spotify</a></li>
<li><a className="hover:text-brand-orange hover:underline decoration-wavy underline-offset-4 decoration-brand-orange transition-all" href="#">YouTube</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-[10px] font-bold text-brand-gray uppercase tracking-widest">Legal</h4>
<ul className="space-y-3 text-sm font-sans font-medium text-brand-navy">
<li><a className="hover:text-brand-orange transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-brand-orange transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-brand-navy/5 flex justify-between items-center text-[10px] font-sans font-bold text-brand-gray uppercase tracking-widest">
<span>© 2026 Deciding Health. All rights reserved.</span>
<span>Case File #88392</span>
</div>
</footer>



    </>
  );
}
