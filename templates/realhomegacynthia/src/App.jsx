import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Language Toggle Logic
        function setLanguage(lang) {
            // Toggle Content
            const enElements = document.querySelectorAll('.lang-en');
            const esElements = document.querySelectorAll('.lang-es');
            
            if (lang === 'es') {
                enElements.forEach(el => el.classList.add('hidden'));
                esElements.forEach(el => el.classList.remove('hidden'));
                esElements.forEach(el => el.classList.add('fade-in')); // Add simple animation
                
                // Button Styling
                document.getElementById('btn-es').classList.remove('text-stone-500');
                document.getElementById('btn-es').classList.add('bg-white', 'shadow-sm', 'text-stone-900');
                
                document.getElementById('btn-en').classList.remove('bg-white', 'shadow-sm', 'text-stone-900');
                document.getElementById('btn-en').classList.add('text-stone-500');
            } else {
                esElements.forEach(el => el.classList.add('hidden'));
                enElements.forEach(el => el.classList.remove('hidden'));
                enElements.forEach(el => el.classList.add('fade-in'));

                // Button Styling
                document.getElementById('btn-en').classList.remove('text-stone-500');
                document.getElementById('btn-en').classList.add('bg-white', 'shadow-sm', 'text-stone-900');
                
                document.getElementById('btn-es').classList.remove('bg-white', 'shadow-sm', 'text-stone-900');
                document.getElementById('btn-es').classList.add('text-stone-500');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/80 backdrop-blur-md border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex-shrink-0 group" href="#">
<img alt="Universal Home Realty" className="h-16 w-auto object-contain transition-transform duration-500 group-hover:scale-105" src="https://i.imgur.com/gKj3qIq.png"/>
</a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-stone-600 hover:text-stone-900 text-base font-medium transition-colors lang-en" href="#properties">Properties</a>
<a className="hidden text-stone-600 hover:text-stone-900 text-base font-medium transition-colors lang-es" href="#properties">Propiedades</a>
<a className="text-stone-600 hover:text-stone-900 text-base font-medium transition-colors lang-en" href="#about">About</a>
<a className="hidden text-stone-600 hover:text-stone-900 text-base font-medium transition-colors lang-es" href="#about">Nosotros</a>
<a className="text-stone-600 hover:text-stone-900 text-base font-medium transition-colors lang-en" href="#testimonials">Testimonials</a>
<a className="hidden text-stone-600 hover:text-stone-900 text-base font-medium transition-colors lang-es" href="#testimonials">Testimonios</a>
</div>

<div className="flex items-center gap-4">

<div className="flex items-center bg-stone-200 rounded-full p-1">
<button className="px-3 py-1 rounded-full text-xs font-medium bg-white shadow-sm text-stone-900 transition-all" id="btn-en" onclick="setLanguage('en')">EN</button>
<button className="px-3 py-1 rounded-full text-xs font-medium text-stone-500 hover:text-stone-900 transition-all" id="btn-es" onclick="setLanguage('es')">ES</button>
</div>
<a className="hidden md:flex items-center gap-2 bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all hover:shadow-lg hover:-translate-y-0.5" href="#contact">
<span className="lang-en">Book Consultation</span>
<span className="lang-es hidden">Reservar Cita</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>

<button className="md:hidden text-stone-900 flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100/50 border border-yellow-200 text-yellow-800 text-sm font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-yellow-600 animate-pulse"></span>
<span className="lang-en">#1 Global Real Estate Agency</span>
<span className="lang-es hidden">#1 Agencia Inmobiliaria Global</span>
</div>
<h1 className="text-5xl lg:text-7xl leading-[1.1] tracking-tight font-medium text-stone-900 mb-8">
<span className="lang-en">Discover luxury living without boundaries.</span>
<span className="lang-es hidden">Descubra una vida de lujo sin fronteras.</span>
</h1>
<p className="text-xl text-stone-600 leading-relaxed max-w-lg mb-10 font-light">
<span className="lang-en">Universal Home Realty connects discerning clients with the world's most prestigious properties. Experience excellence in every detail.</span>
<span className="lang-es hidden">Universal Home Realty conecta a clientes exigentes con las propiedades más prestigiosas del mundo. Excelencia en cada detalle.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-stone-800 transition-all hover:shadow-xl group" href="#properties">
<span className="lang-en">View Properties</span>
<span className="lang-es hidden">Ver Propiedades</span>
<iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 bg-white border border-stone-200 text-stone-900 px-8 py-4 rounded-full text-base font-medium hover:bg-stone-50 transition-all hover:border-stone-300" href="#contact">
<span className="lang-en">Contact Agent</span>
<span className="lang-es hidden">Contactar Agente</span>
</a>
</div>
<div className="mt-12 flex items-center gap-8 text-stone-400">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-stone-900">250+</span>
<span className="text-sm uppercase tracking-wider lang-en">Sold Homes</span>
<span className="text-sm uppercase tracking-wider lang-es hidden">Ventas</span>
</div>
<div className="w-px h-10 bg-stone-200"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-stone-900">$120M</span>
<span className="text-sm uppercase tracking-wider lang-en">Volume</span>
<span className="text-sm uppercase tracking-wider lang-es hidden">Volumen</span>
</div>
<div className="w-px h-10 bg-stone-200"></div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-stone-900">12</span>
<span className="text-sm uppercase tracking-wider lang-en">Years Exp.</span>
<span className="text-sm uppercase tracking-wider lang-es hidden">Años Exp.</span>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-yellow-200/20 to-stone-100/50 rounded-[2rem] transform rotate-3 scale-95 z-0"></div>
<img alt="Luxury Home Interior" className="relative z-10 w-full aspect-[4/5] object-cover rounded-[2rem] shadow-2xl" src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&amp;w=1973&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-12 -left-6 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/50 max-w-xs hidden md:block">
<div className="flex items-start gap-4">
<div className="bg-yellow-100 p-3 rounded-full text-yellow-700 flex items-center justify-center">
<iconify-icon height="24" icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-stone-900 lang-en">Global Reach</p>
<p className="text-sm font-semibold text-stone-900 lang-es hidden">Alcance Global</p>
<p className="text-xs text-stone-500 mt-1 lang-en">Connecting buyers from over 30 countries.</p>
<p className="text-xs text-stone-500 mt-1 lang-es hidden">Conectando compradores de más de 30 países.</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white" id="properties">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-4xl tracking-tight font-medium text-stone-900 mb-4">
<span className="lang-en">Featured Listings</span>
<span className="lang-es hidden">Propiedades Destacadas</span>
</h2>
<p className="text-lg text-stone-500 max-w-xl">
<span className="lang-en">Curated selection of exclusive properties tailored to your lifestyle.</span>
<span className="lang-es hidden">Selección curada de propiedades exclusivas adaptadas a su estilo de vida.</span>
</p>
</div>
<a className="group inline-flex items-center text-stone-900 font-medium hover:text-yellow-700 transition-colors" href="#">
<span className="lang-en">View all properties</span>
<span className="lang-es hidden">Ver todo</span>
<iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
<img alt="Villa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-stone-900">
<span className="lang-en">For Sale</span>
<span className="lang-es hidden">En Venta</span>
</div>
<div className="absolute bottom-4 right-4 bg-stone-900/90 backdrop-blur px-4 py-2 rounded-lg text-white font-medium">
                            $2,450,000
                        </div>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-1 group-hover:text-yellow-700 transition-colors">The Highland Estate</h3>
<p className="text-stone-500 text-base mb-4">Beverly Hills, California</p>
<div className="flex items-center gap-6 text-stone-500 border-t border-stone-100 pt-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bed-linear" width="18"></iconify-icon>
<span className="text-sm">4 Beds</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bath-linear" width="18"></iconify-icon>
<span className="text-sm">3 Baths</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:maximize-square-linear" width="18"></iconify-icon>
<span className="text-sm">3,200 sqft</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
<img alt="Modern Home" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-stone-900">
<span className="lang-en">Pending</span>
<span className="lang-es hidden">Pendiente</span>
</div>
<div className="absolute bottom-4 right-4 bg-stone-900/90 backdrop-blur px-4 py-2 rounded-lg text-white font-medium">
                            $4,100,000
                        </div>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-1 group-hover:text-yellow-700 transition-colors">Oceanview Modern</h3>
<p className="text-stone-500 text-base mb-4">Miami Beach, Florida</p>
<div className="flex items-center gap-6 text-stone-500 border-t border-stone-100 pt-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bed-linear" width="18"></iconify-icon>
<span className="text-sm">6 Beds</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bath-linear" width="18"></iconify-icon>
<span className="text-sm">5 Baths</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:maximize-square-linear" width="18"></iconify-icon>
<span className="text-sm">5,100 sqft</span>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6">
<img alt="Garden Home" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-stone-900">
<span className="lang-en">New</span>
<span className="lang-es hidden">Nuevo</span>
</div>
<div className="absolute bottom-4 right-4 bg-stone-900/90 backdrop-blur px-4 py-2 rounded-lg text-white font-medium">
                            $1,850,000
                        </div>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-1 group-hover:text-yellow-700 transition-colors">The Garden Retreat</h3>
<p className="text-stone-500 text-base mb-4">Austin, Texas</p>
<div className="flex items-center gap-6 text-stone-500 border-t border-stone-100 pt-4">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bed-linear" width="18"></iconify-icon>
<span className="text-sm">3 Beds</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:bath-linear" width="18"></iconify-icon>
<span className="text-sm">2 Baths</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:maximize-square-linear" width="18"></iconify-icon>
<span className="text-sm">2,400 sqft</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="Real Estate Agent" className="rounded-[2rem] shadow-2xl w-full max-w-md mx-auto lg:max-w-full grayscale-[10%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs hidden lg:block">
<img alt="Logo" className="h-16 w-auto mb-4 mx-auto opacity-80" src="https://i.imgur.com/gKj3qIq.png"/>
<p className="text-center text-sm text-stone-500 italic">"Universal Home Realty represents the gold standard in modern real estate."</p>
</div>
</div>
<div>
<h2 className="text-4xl tracking-tight font-medium text-stone-900 mb-6">
<span className="lang-en">Beyond the transaction.</span>
<span className="lang-es hidden">Más allá de la transacción.</span>
</h2>
<div className="space-y-6 text-lg text-stone-600 leading-relaxed">
<p>
<span className="lang-en">With over a decade of experience in the luxury market, I founded Universal Home Realty with a singular mission: to provide an experience that is as exceptional as the properties we represent.</span>
<span className="lang-es hidden">Con más de una década de experiencia en el mercado de lujo, fundé Universal Home Realty con una misión singular: brindar una experiencia tan excepcional como las propiedades que representamos.</span>
</p>
<p>
<span className="lang-en">Whether you are buying your dream home across the globe or selling a cherished estate, we bring a data-driven approach combined with unmatched personal service.</span>
<span className="lang-es hidden">Ya sea que esté comprando la casa de sus sueños en todo el mundo o vendiendo una propiedad preciada, ofrecemos un enfoque basado en datos combinado con un servicio personal inigualable.</span>
</p>
</div>
<div className="mt-10 grid grid-cols-2 gap-6">
<div className="flex items-start gap-3">
<div className="bg-stone-200 p-2 rounded-full text-stone-900 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<span className="font-medium text-stone-900 mt-1 lang-en">Market Analysis</span>
<span className="font-medium text-stone-900 mt-1 lang-es hidden">Análisis de Mercado</span>
</div>
<div className="flex items-start gap-3">
<div className="bg-stone-200 p-2 rounded-full text-stone-900 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<span className="font-medium text-stone-900 mt-1 lang-en">Global Marketing</span>
<span className="font-medium text-stone-900 mt-1 lang-es hidden">Marketing Global</span>
</div>
<div className="flex items-start gap-3">
<div className="bg-stone-200 p-2 rounded-full text-stone-900 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<span className="font-medium text-stone-900 mt-1 lang-en">Concierge Service</span>
<span className="font-medium text-stone-900 mt-1 lang-es hidden">Servicio Concierge</span>
</div>
<div className="flex items-start gap-3">
<div className="bg-stone-200 p-2 rounded-full text-stone-900 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<span className="font-medium text-stone-900 mt-1 lang-en">Negotiation Experts</span>
<span className="font-medium text-stone-900 mt-1 lang-es hidden">Expertos Negociadores</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="testimonials">
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h2 className="text-4xl tracking-tight font-medium text-stone-900 mb-4">
<span className="lang-en">Client Stories</span>
<span className="lang-es hidden">Historias de Clientes</span>
</h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

<div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-lg text-stone-600 mb-6 lang-en">"The most professional team I've ever worked with. They found us an off-market gem that wasn't even listed yet."</p>
<p className="text-lg text-stone-600 mb-6 lang-es hidden">"El equipo más profesional con el que he trabajado. Encontraron una joya fuera del mercado que ni siquiera estaba listada."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 font-semibold">JD</div>
<div className="text-left">
<p className="text-sm font-semibold text-stone-900">James Delaney</p>
<p className="text-xs text-stone-500">Buyer, New York</p>
</div>
</div>
</div>

<div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-lg text-stone-600 mb-6 lang-en">"Sold our home in record time for above asking price. The marketing materials were simply stunning."</p>
<p className="text-lg text-stone-600 mb-6 lang-es hidden">"Vendimos nuestra casa en tiempo récord por encima del precio de venta. El material de marketing fue simplemente impresionante."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 font-semibold">SM</div>
<div className="text-left">
<p className="text-sm font-semibold text-stone-900">Sarah Miller</p>
<p className="text-xs text-stone-500">Seller, London</p>
</div>
</div>
</div>

<div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
<div className="flex gap-1 text-yellow-500 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-lg text-stone-600 mb-6 lang-en">"Universal Home Realty made relocating internationally seamless. Their attention to detail is unmatched."</p>
<p className="text-lg text-stone-600 mb-6 lang-es hidden">"Universal Home Realty hizo que la reubicación internacional fuera perfecta. Su atención al detalle es inigualable."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-600 font-semibold">MR</div>
<div className="text-left">
<p className="text-sm font-semibold text-stone-900">Michael Ross</p>
<p className="text-xs text-stone-500">Investor, Toronto</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-96 h-96 bg-yellow-600/20 blur-[120px] rounded-full"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<img alt="Logo White" className="h-20 w-auto mx-auto mb-8 brightness-0 invert opacity-90" src="https://i.imgur.com/gKj3qIq.png"/>
<h2 className="text-4xl lg:text-5xl tracking-tight font-medium mb-6">
<span className="lang-en">Let's find your dream home.</span>
<span className="lang-es hidden">Encontremos la casa de sus sueños.</span>
</h2>
<p className="text-xl text-stone-400 mb-12 max-w-lg mx-auto">
<span className="lang-en">Schedule a private consultation today and take the first step towards your new lifestyle.</span>
<span className="lang-es hidden">Programe una consulta privada hoy y dé el primer paso hacia su nuevo estilo de vida.</span>
</p>
<form className="space-y-5 max-w-md mx-auto text-left">

<div>
<label className="block text-xs font-medium text-stone-400 mb-1 ml-1 lang-en">Full Name</label>
<label className="block text-xs font-medium text-stone-400 mb-1 ml-1 lang-es hidden">Nombre Completo</label>
<input className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/50 transition-all" placeholder="John Doe" type="text"/>
</div>

<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-stone-400 mb-1 ml-1 lang-en">Email</label>
<label className="block text-xs font-medium text-stone-400 mb-1 ml-1 lang-es hidden">Correo</label>
<input className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/50 transition-all" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-400 mb-1 ml-1 lang-en">Phone Number</label>
<label className="block text-xs font-medium text-stone-400 mb-1 ml-1 lang-es hidden">Teléfono</label>
<input className="w-full bg-stone-800/50 border border-stone-700 rounded-lg px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:ring-2 focus:ring-yellow-600/50 transition-all" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
</div>

<div className="space-y-3 pt-4 border-t border-stone-800/50">
<label className="block text-xs font-medium text-stone-400 ml-1">
<span className="lang-en">Document Identification</span>
<span className="lang-es hidden">Identificación de Documento</span>
</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

<label className="cursor-pointer relative">
<input className="peer sr-only" name="doctype" type="radio" value="ssn"/>
<div className="flex flex-col items-center justify-center py-4 px-2 rounded-xl border border-stone-700 bg-stone-800/30 text-stone-400 transition-all duration-300 hover:bg-stone-700 group">
<iconify-icon className="mb-2 transition-colors" height="24" icon="solar:user-id-linear" width="24"></iconify-icon>
<span className="text-xs font-medium lang-en">Social Security</span>
<span className="text-xs font-medium lang-es hidden">Seguro Social</span>
</div>
</label>

<label className="cursor-pointer relative">
<input className="peer sr-only" name="doctype" type="radio" value="tax"/>
<div className="flex flex-col items-center justify-center py-4 px-2 rounded-xl border border-stone-700 bg-stone-800/30 text-stone-400 transition-all duration-300 hover:bg-stone-700 group">
<iconify-icon className="mb-2 transition-colors" height="24" icon="solar:bill-list-linear" width="24"></iconify-icon>
<span className="text-xs font-medium lang-en">Tax ID</span>
<span className="text-xs font-medium lang-es hidden">RFC/NIT</span>
</div>
</label>

<label className="cursor-pointer relative">
<input className="peer sr-only" name="doctype" type="radio" value="other"/>
<div className="flex flex-col items-center justify-center py-4 px-2 rounded-xl border border-stone-700 bg-stone-800/30 text-stone-400 transition-all duration-300 hover:bg-stone-700 group">
<iconify-icon className="mb-2 transition-colors" height="24" icon="solar:menu-dots-square-linear" width="24"></iconify-icon>
<span className="text-xs font-medium lang-en">Other</span>
<span className="text-xs font-medium lang-es hidden">Otro</span>
</div>
</label>
</div>
</div>
<button className="w-full bg-white text-stone-900 font-medium py-3 rounded-lg hover:bg-stone-200 transition-colors mt-6 shadow-lg shadow-white/5" type="button">
<span className="lang-en">Submit Request</span>
<span className="lang-es hidden">Enviar Solicitud</span>
</button>
</form>
<div className="mt-16 flex justify-center gap-8 text-stone-500">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Facebook</a>
</div>
</div>
</section>

<footer className="bg-stone-950 text-stone-600 py-12 border-t border-stone-900">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
<p className="text-sm">© 2024 Universal Home Realty. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0 text-sm">
<a className="hover:text-stone-400" href="#">Privacy</a>
<a className="hover:text-stone-400" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
