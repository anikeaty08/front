import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



function setLanguage(lang) {
const ptElements = document.querySelectorAll('.lang-pt');
const enElements = document.querySelectorAll('.lang-en');
const ptBtn = document.getElementById('btn-pt');
const enBtn = document.getElementById('btn-en');
if (lang === 'en') {
ptElements.forEach(el => el.classList.add('hidden'));
enElements.forEach(el => el.classList.remove('hidden'));
ptBtn.classList.remove('font-bold', 'text-[#0E3F5C]');
ptBtn.classList.add('text-[#2C2420]/50');
enBtn.classList.add('font-bold', 'text-[#0E3F5C]');
enBtn.classList.remove('text-[#2C2420]/50');
} else {
ptElements.forEach(el => el.classList.remove('hidden'));
enElements.forEach(el => el.classList.add('hidden'));
ptBtn.classList.add('font-bold', 'text-[#0E3F5C]');
ptBtn.classList.remove('text-[#2C2420]/50');
enBtn.classList.remove('font-bold', 'text-[#0E3F5C]');
enBtn.classList.add('text-[#2C2420]/50');
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="uppercase text-xs text-[#FDFBF7] tracking-widest font-mono text-center bg-[#2C2420] border-[#2C2420]/10 border-b pt-2 pb-2">
<span className="lang-pt">Aberto de Terça a Domingo das 12:00 às 22:30 — Encerrado às Segundas</span>
<span className="lang-en hidden">Open Tuesday to Sunday 12:00 to 22:30 — Closed on Mondays</span>
</div>

<nav className="sticky top-0 z-40 w-full bg-[#FDFBF7]/90 backdrop-blur-sm border-b border-[#2C2420]/10 transition-all duration-300">
<div className="flex flex-col md:flex-row max-w-6xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 gap-x-4 gap-y-4 items-center justify-between">
<button className="md:hidden absolute left-6 top-6 text-[#2C2420]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<a className="group flex flex-col items-center" href="#">
<h1 className="font-serif text-3xl md:text-4xl tracking-tighter text-[#0E3F5C] group-hover:opacity-80 transition-opacity uppercase">
                    O CRÔA
                </h1>
<span className="text-[10px] uppercase text-[#2C2420]/60 tracking-[0.2em] font-mono mt-1">
<span className="lang-pt">Restaurante &amp; Marisqueira</span>
<span className="lang-en hidden">Restaurant &amp; Seafood</span>
</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide uppercase text-[#2C2420]/80">
<a className="hover:text-[#0E3F5C] transition-colors" href="#about">
<span className="lang-pt">Sobre</span><span className="lang-en hidden">About</span>
</a>
<a className="hover:text-[#0E3F5C] transition-colors" href="#menu">
<span className="lang-pt">Menu</span><span className="lang-en hidden">Menu</span>
</a>
<a className="hover:text-[#0E3F5C] transition-colors" href="#gallery">
<span className="lang-pt">Galeria</span><span className="lang-en hidden">Gallery</span>
</a>

<div className="flex items-center gap-2 border-r border-[#2C2420]/10 pr-6 mr-[-10px] text-xs font-mono">
<button className="hover:text-[#0E3F5C] transition-colors font-bold text-[#0E3F5C]" id="btn-pt" onclick="setLanguage('pt')">PT</button>
<span className="text-[#2C2420]/20">/</span>
<button className="hover:text-[#0E3F5C] transition-colors text-[#2C2420]/50" id="btn-en" onclick="setLanguage('en')">EN</button>
</div>
<div className="relative group cursor-pointer hover:text-[#0E3F5C] transition-colors">
<span className="flex items-center gap-2 border border-[#2C2420]/20 px-4 py-2 rounded-full text-xs hover:border-[#0E3F5C]">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span className="lang-pt">Reservar</span><span className="lang-en hidden">Book Now</span>
</span>
</div>
</div>
</div>
</nav>

<header className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-[#2C2420]/10">
<div className="absolute inset-0 z-0">
<img alt="Restaurante O Crôa Destaque" className="w-full h-full object-cover" src="https://img.youtube.com/vi/qGLi0oF_bRw/maxresdefault.jpg"/>
<div className="absolute inset-0 bg-black/10"></div>
<div className="opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto reveal">
<div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#FDFBF7]/30 bg-[#FDFBF7]/10 backdrop-blur-md text-[#FDFBF7] text-xs tracking-widest uppercase font-medium mb-6 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse"></span>
<span className="lang-pt">Peixe Fresco Diário</span>
<span className="lang-en hidden">Daily Fresh Fish</span>
</div>
<h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FDFBF7] leading-[0.9] tracking-tight mb-8 drop-shadow-xl shadow-black/50">
<span className="lang-pt">O Sabor do<br/><span className="italic font-light text-[#bfdbfe]">Mar Português.</span></span>
<span className="lang-en hidden">The Taste of the<br/><span className="italic font-light text-[#bfdbfe]">Portuguese Sea.</span></span>
</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="group relative px-8 py-3 bg-[#0E3F5C] text-[#FDFBF7] text-sm tracking-widest uppercase hover:bg-[#092b40] transition-all duration-300 shadow-lg border border-[#0E3F5C]" href="#menu">
<span className="relative z-10 flex items-center gap-2">
<span className="lang-pt">Ver Ementa</span><span className="lang-en hidden">View Menu</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</div>
</header>

<section className="bg-[#F5F2EB] border-[#2C2420]/10 border-b pt-24 pb-24" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-x-16 gap-y-16 items-center">

<div className="order-2 md:order-1">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-[#0E3F5C]"></div>
<span className="font-mono text-xs tracking-[0.2em] uppercase text-[#0E3F5C]">
<span className="lang-pt">A Nossa Tradição</span>
<span className="lang-en hidden">Our Tradition</span>
</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-[#2C2420] mb-8 tracking-tight leading-tight">
<span className="lang-pt">"Cozinhamos com alma, servimos com <span className="italic text-[#0E3F5C]">coração.</span>"</span>
<span className="lang-en hidden">"We cook with soul, we serve with <span className="italic text-[#0E3F5C]">heart.</span>"</span>
</h2>
<div className="space-y-6 text-[#2C2420]/70 font-light leading-relaxed">
<p className="lang-pt">O Restaurante O Crôa nasceu da paixão pela gastronomia tradicional portuguesa e pelo respeito pelos produtos que o nosso mar nos oferece.</p>
<p className="lang-en hidden">Restaurante O Crôa was born from a passion for traditional Portuguese gastronomy and respect for the products our sea offers us.</p>
<p className="lang-pt">
                            Situado num local privilegiado, dedicamo-nos a trazer à sua mesa o peixe mais fresco, grelhado no carvão com a mestria de quem sabe, e pratos de tacho que reconfortam o estômago e a alma. Quer seja um almoço de família ou um jantar especial, a nossa missão é fazer com que se sinta em casa.
                        </p>
<p className="lang-en hidden">
                            Located in a privileged spot, we are dedicated to bringing the freshest fish to your table, charcoal-grilled with the mastery of experts, and pot dishes that comfort both stomach and soul. Whether it's a family lunch or a special dinner, our mission is to make you feel at home.
                        </p>
</div>
<div className="mt-10 flex items-center gap-4">
<div className="text-xs uppercase tracking-widest text-[#2C2420]/40 font-mono pt-2">
<span className="lang-pt">A Gerência</span><span className="lang-en hidden">The Management</span>
</div>
</div>
</div>

<div className="order-1 md:order-2 relative">
<div className="relative z-10 aspect-[4/5] overflow-hidden bg-[#E6DCD3] shadow-2xl rotate-1 transition-transform duration-500 hover:rotate-0">
<img alt="A Cozinha" className="filter sepia-[0.2] contrast-[0.9] cursor-pointer w-full h-full object-cover" onclick="window.location.href='https://www.facebook.com/restaurante.ocroa/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3e1dd3e-9024-41ab-941c-e47945194cd0_800w.jpg"/>
<div className="absolute inset-4 border border-[#FDFBF7]/30 pointer-events-none"></div>
</div>
<div className="absolute top-8 -right-4 w-full h-full border-2 border-[#0E3F5C]/20 z-0 -rotate-2"></div>
</div>
</div>
</div>
</section>

<section className="bg-white border-[#2C2420]/10 border-b pt-24 pb-24" id="gallery">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
<div className="">
<h2 className="font-serif text-4xl md:text-5xl text-[#2C2420] tracking-tight">
<span className="lang-pt">Vislumbre</span><span className="lang-en hidden">Glimpse</span>
</h2>
<p className="md:text-base text-sm text-[#2C2420]/60 max-w-md mt-4">
<span className="lang-pt">Uma coleção visual dos nossos pratos favoritos, o peixe fresco e o ambiente acolhedor que define O Crôa.</span>
<span className="lang-en hidden">A visual collection of our favorite dishes, fresh fish, and the welcoming atmosphere that defines O Crôa.</span>
</p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-[#2C2420]/40 font-mono">
<iconify-icon icon="solar:camera-linear" width="16"></iconify-icon>
<span className="lang-pt">Momentos Capturados</span><span className="lang-en hidden">Captured Moments</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-x-4 gap-y-4">
<div className="md:col-span-2 relative group overflow-hidden bg-[#E6DCD3]">
<img alt="Peixe Grelhado" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4d792af3-b5ec-43fc-88a3-f8de53104a01_3840w.jpg"/>
<div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="md:row-span-2 group overflow-hidden bg-[#E6DCD3] relative">
<img alt="Vinho e Ambiente" className="transition-transform duration-700 group-hover:scale-105 filter sepia-[0.1] w-full h-full object-cover relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e95cfc8b-6432-4b03-9350-bf82d76d8150_3840w.jpg"/>
<div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/20 absolute top-0 right-0 bottom-0 left-0 scale-100"></div>
</div>
<div className="relative group overflow-hidden bg-[#E6DCD3]">
<img alt="Marisco" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91f1e05a-4bd4-4aea-b15f-a5c8b46212b7_800w.jpg"/>
<div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative group overflow-hidden bg-[#E6DCD3]">
<img alt="Sobremesas" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 filter sepia-[0.1]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6477ae4-dded-4b6c-8e63-2926c5055e1f_800w.jpg"/>
<div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#F5F2EB] pt-24 pb-24 relative" id="menu">

<div className="hidden lg:block absolute top-10 right-12 z-20 float-card rotate-2 hover:rotate-0 transition-transform duration-300">
<div className="bg-[#FDFBF7] p-5 w-64 shadow-[8px_8px_0px_0px_rgba(14,63,92,0.15)] border border-[#2C2420]/10 flex flex-col items-center text-center relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0E3F5C] shadow-sm z-10 border border-white/20"></div>
<span className="font-mono text-[10px] uppercase tracking-widest text-[#0E3F5C] border-b border-[#0E3F5C]/20 pb-1 mb-3 w-full">
<span className="lang-pt">Sugestão do Chef</span><span className="lang-en hidden">Chef's Suggestion</span>
</span>
<h4 className="text-2xl text-[#2C2420] font-serif mb-1">Polvo à Lagareiro</h4>
<p className="text-[11px] italic text-[#2C2420]/60 mb-3">
<span className="lang-pt">Com batata a murro e grelos</span>
<span className="lang-en hidden">With roasted potatoes and greens</span>
</p>
<div className="flex items-center gap-3">
<span className="font-mono text-lg text-[#2C2420] font-bold">€18.00</span>
</div>
</div>
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-[#FDFBF7] border border-[#2C2420]/10 rotate-45 z-10"></div>
<div className="max-w-6xl mx-auto px-6 relative" id="menu-content">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-4xl text-[#2C2420] tracking-tight font-serif">
<span className="lang-pt">A Nossa Ementa</span><span className="lang-en hidden">Our Menu</span>
</h2>
<div className="w-24 h-px bg-[#0E3F5C]/30 mx-auto mt-6"></div>
</div>

<div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-16">
<div className="space-y-12">

<div className="">
<div className="flex items-center gap-4 mb-6">
<iconify-icon className="text-[#0E3F5C]" icon="solar:chef-hat-heart-linear" width="24"></iconify-icon>
<h3 className="text-2xl text-[#2C2420] font-serif uppercase tracking-wider">
<span className="lang-pt">Entradas</span><span className="lang-en hidden">Starters</span>
</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Pão, Azeitonas e Manteiga</span><span className="lang-en hidden">Bread, Olives &amp; Butter</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€2.50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Sopa do Dia</span><span className="lang-en hidden">Soup of the Day</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€3.00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Ameijoas à Bulhão Pato</span><span className="lang-en hidden">Clams Bulhão Pato</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€14.00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Gambas ao Alho</span><span className="lang-en hidden">Garlic Prawns</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€12.00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Salada de Polvo</span><span className="lang-en hidden">Octopus Salad</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€9.50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Choco Frito</span><span className="lang-en hidden">Fried Cuttlefish</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€8.00</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<iconify-icon className="text-[#0E3F5C]" icon="solar:water-linear" width="24"></iconify-icon>
<h3 className="text-2xl text-[#2C2420] font-serif uppercase tracking-wider">
<span className="lang-pt">Peixe</span><span className="lang-en hidden">Fish</span>
</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Peixe Fresco do Dia (Kg)</span><span className="lang-en hidden">Fresh Fish of the Day (Kg)</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">V.M.</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Polvo à Lagareiro</span><span className="lang-en hidden">Octopus Lagareiro Style</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€18.00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Bacalhau à Brás</span><span className="lang-en hidden">Codfish à Brás</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€13.50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Bacalhau Assado na Brasa</span><span className="lang-en hidden">Grilled Codfish</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€16.00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Arroz de Marisco (2px)</span><span className="lang-en hidden">Seafood Rice (2px)</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€35.00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="text-lg font-medium"><span className="lang-pt">Choquinhos Grelhados</span><span className="lang-en hidden">Grilled Baby Cuttlefish</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€14.00</span></div></div>
</div>
</div>
</div>
<div className="space-y-12">

<div className="">
<div className="flex items-center gap-4 mb-6">
<iconify-icon className="text-[#0E3F5C]" icon="solar:fire-linear" width="24"></iconify-icon>
<h3 className="font-serif text-2xl text-[#2C2420] uppercase tracking-wider">
<span className="lang-pt">Carne</span><span className="lang-en hidden">Meat</span>
</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg"><span className="lang-pt">Bife da Vazia Grelhado</span><span className="lang-en hidden">Grilled Sirloin Steak</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€15.00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg"><span className="lang-pt">Bitoque à O Crôa</span><span className="lang-en hidden">Steak O Crôa Style</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€12.50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg"><span className="lang-pt">Carne de Porco à Alentejana</span><span className="lang-en hidden">Pork Alentejo Style</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€14.00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg"><span className="lang-pt">Secretos de Porco Preto</span><span className="lang-en hidden">Black Pork Secrets</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€15.50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg"><span className="lang-pt">Posta Mirandesa</span><span className="lang-en hidden">Mirandesa Steak</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€19.00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg"><span className="lang-pt">Costeletão de Novilho</span><span className="lang-en hidden">Veal Chop</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€22.00</span></div></div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<iconify-icon className="text-[#0E3F5C]" icon="solar:star-linear" width="24"></iconify-icon>
<h3 className="font-serif text-2xl text-[#2C2420] uppercase tracking-wider">
<span className="lang-pt">Sobremesas</span><span className="lang-en hidden">Desserts</span>
</h3>
</div>
<div className="space-y-4">
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg"><span className="lang-pt">Mousse de Chocolate Caseira</span><span className="lang-en hidden">Homemade Chocolate Mousse</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€3.50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg"><span className="lang-pt">Leite Creme Queimado</span><span className="lang-en hidden">Crème Brûlée</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€4.00</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg"><span className="lang-pt">Doce da Casa</span><span className="lang-en hidden">House Sweet</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€3.50</span></div></div>
<div className="group"><div className="flex items-baseline justify-between w-full text-[#2C2420]"><h4 className="font-medium text-lg"><span className="lang-pt">Fruta da Época</span><span className="lang-en hidden">Seasonal Fruit</span></h4><div className="flex-grow border-b border-dotted border-[#2C2420]/30 mx-3 h-1"></div><span className="font-mono text-sm">€2.50</span></div></div>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-12">
<p className="text-xs text-[#2C2420]/50 italic">
<span className="lang-pt">Nota: IVA incluído à taxa legal em vigor. Se tiver alguma alergia alimentar, por favor informe o nosso staff.</span>
<span className="lang-en hidden">Note: VAT included at the legal rate. If you have any food allergies, please inform our staff.</span>
</p>
</div>
</div>
</section>

<footer className="bg-[#2C2420] text-[#FDFBF7] pt-20 pb-10 border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<h3 className="font-serif text-2xl mb-6 text-[#0E3F5C] drop-shadow-sm">O CRÔA</h3>
<p className="text-white/60 text-sm leading-relaxed mb-6">
<span className="lang-pt">Hospitalidade à antiga num mundo moderno. Venha pelo peixe fresco, fique pela simpatia.</span>
<span className="lang-en hidden">Old-fashioned hospitality in a modern world. Come for the fresh fish, stay for the friendliness.</span>
</p>
<div className="flex gap-4">
<a className="text-white/60 hover:text-white transition-colors" href="https://www.facebook.com/restaurante.ocroa" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="text-white/60 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="">
<h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6"><span className="lang-pt">Morada</span><span className="lang-en hidden">Address</span></h4>
<p className="text-sm text-white/80 leading-relaxed">
                        Rua do Sol, n°4<br/>
                        Praia de Santa Rita<br/>
                        2560-193 Maceira, Torres Vedras
                        <br/><span className="opacity-50 text-xs mt-2 block"><span className="lang-pt">(Coordenadas: 39°10'39.7"N 9°17'56.2"W)</span><span className="lang-en hidden">(Coordinates: 39°10'39.7"N 9°17'56.2"W)</span></span>
</p>
</div>
<div className="">
<h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6"><span className="lang-pt">Contacto</span><span className="lang-en hidden">Contact</span></h4>
<ul className="text-sm text-white/80 leading-loose">
<li className="break-words cursor-pointer hover:text-[#0E3F5C] transition-colors">restaurante.ocroa@gmail.com</li>
<li className="cursor-pointer hover:text-[#0E3F5C] transition-colors">+351 261 984 215</li>
<li className="text-xs opacity-50"><span className="lang-pt">(Chamada rede fixa nacional)</span><span className="lang-en hidden">(National landline call)</span></li>
</ul>
</div>
<div className="">
<h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6"><span className="lang-pt">Horário</span><span className="lang-en hidden">Hours</span></h4>
<ul className="text-sm text-white/80 leading-loose">
<li className="flex justify-between w-full max-w-[200px]"><span className="lang-pt">Ter-Sáb</span><span className="lang-en hidden">Tue-Sat</span> <span>12:00-15:00 / 19:00-22:30</span></li>
<li className="flex justify-between w-full max-w-[200px]"><span className="lang-pt">Domingo</span><span className="lang-en hidden">Sunday</span> <span>12:00-15:30 / 19:00-22:30</span></li>
<li className="flex justify-between w-full max-w-[200px] text-[#0E3F5C] font-semibold"><span className="lang-pt">Segunda</span><span className="lang-en hidden">Monday</span> <span><span className="lang-pt">Encerrado</span><span className="lang-en hidden">Closed</span></span></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-mono">
<p>© 2024 Restaurante O Crôa. <span className="lang-pt">Todos os direitos reservados.</span><span className="lang-en hidden">All rights reserved.</span></p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#"><span className="lang-pt">Privacidade</span><span className="lang-en hidden">Privacy</span></a>
<a className="hover:text-white" href="#"><span className="lang-pt">Termos</span><span className="lang-en hidden">Terms</span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
