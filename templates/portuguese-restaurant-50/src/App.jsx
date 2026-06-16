import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const translations = {
            pt: {
                nav_about: "A Casa",
                nav_menu: "Petiscos",
                nav_location: "Localização",
                nav_book: "Reservar",
                hero_badge: "Aberto agora • Open now",
                hero_subtitle: "TRADIÇÃO & ALMA",
                hero_title: "O Verdadeiro<br><i class='font-serif italic text-orange-200'>Sabor Português</i>",
                hero_desc: "Petiscos caseiros, bom vinho e a hospitalidade de Sintra. Onde os amigos se encontram e o tempo pára.",
                hero_cta_menu: "Ver o Menu",
                hero_cta_loc: "Como Chegar",
                about_label: "NOSSA HISTÓRIA",
                about_title: "Mais que um restaurante,<br>uma tradição.",
                about_p1: "No coração de Sintra, o Tasco do Strauss mantém viva a alma das antigas tabernas portuguesas. Aqui não há pressa. Há pratos cheios, conversas altas e o tilintar dos copos de barro.",
                about_p2: "A nossa cozinha é simples, honesta e feita com amor. Do chouriço assado na hora ao bacalhau que desfaz na boca, cada prato conta uma história da nossa região.",
                feat_1_title: "Vinhos Regionais",
                feat_1_desc: "Seleção de adegas locais",
                feat_2_title: "Comida Caseira",
                feat_2_desc: "Ingredientes frescos diários",
                menu_title: "Os Favoritos da Casa",
                menu_subtitle: "Sabores que não pode perder.",
                menu_full: "Ver Menu Completo",
                dish_1_name: "Bacalhau à Lagareiro",
                dish_1_desc: "Lombo de bacalhau assado com azeite, alho e batatas a murro. Um clássico intemporal.",
                dish_2_name: "Chouriço Assado",
                dish_2_desc: "Assado na mesa em canoa de barro com aguardente. Acompanha pão saloio.",
                dish_3_name: "Tábua do Tasco",
                dish_3_desc: "Seleção de queijos curados, presunto serrano, azeitonas e compota caseira.",
                loc_label: "VISITE-NOS",
                loc_title: "No Coração de Sintra",
                loc_desc: "Escondido nas ruelas mágicas da vila, o refúgio perfeito após um dia a explorar o Palácio da Pena ou a Quinta da Regaleira.",
                address_title: "Morada",
                hours_title: "Horário",
                hours_desc: "Terça a Domingo: 12h00 - 23h00<br>Segunda: Fechado para descanso",
                directions_btn: "Ver no Mapa"
            },
            en: {
                nav_about: "Our Story",
                nav_menu: "Menu",
                nav_location: "Location",
                nav_book: "Book Table",
                hero_badge: "Open now • Aberto agora",
                hero_subtitle: "TRADITION & SOUL",
                hero_title: "The Authentic<br><i class='font-serif italic text-orange-200'>Portuguese Taste</i>",
                hero_desc: "Homemade tapas, good wine, and Sintra's hospitality. Where friends meet and time stands still.",
                hero_cta_menu: "View Menu",
                hero_cta_loc: "Get Directions",
                about_label: "OUR STORY",
                about_title: "More than a restaurant,<br>a tradition.",
                about_p1: "In the heart of Sintra, Tasco do Strauss keeps the soul of old Portuguese taverns alive. Here there is no rush. Just full plates, loud conversations, and the clinking of clay cups.",
                about_p2: "Our kitchen is simple, honest, and made with love. From roasted chorizo to codfish that melts in your mouth, every dish tells a story of our region.",
                feat_1_title: "Regional Wines",
                feat_1_desc: "Selection from local wineries",
                feat_2_title: "Homemade Food",
                feat_2_desc: "Fresh daily ingredients",
                menu_title: "House Favorites",
                menu_subtitle: "Flavors you cannot miss.",
                menu_full: "View Full Menu",
                dish_1_name: "Codfish Lagareiro Style",
                dish_1_desc: "Roasted codfish loin with olive oil, garlic, and punched potatoes. A timeless classic.",
                dish_2_name: "Flaming Chorizo",
                dish_2_desc: "Roasted at the table in a clay boat with aguardente. Served with rustic bread.",
                dish_3_name: "Tasco Board",
                dish_3_desc: "Selection of cured cheeses, serrano ham, olives, and homemade jam.",
                loc_label: "VISIT US",
                loc_title: "In the Heart of Sintra",
                loc_desc: "Hidden in the magical alleys of the village, the perfect refuge after a day exploring Pena Palace or Quinta da Regaleira.",
                address_title: "Address",
                hours_title: "Hours",
                hours_desc: "Tuesday to Sunday: 12 PM - 11 PM<br>Monday: Closed for rest",
                directions_btn: "Get Directions"
            }
        };

        let currentLang = 'pt';
        const indicator = document.getElementById('lang-indicator');
        const elements = document.querySelectorAll('.data-text');

        function toggleLanguage() {
            elements.forEach(el => el.classList.add('fade-out'));

            setTimeout(() => {
                currentLang = currentLang === 'pt' ? 'en' : 'pt';
                
                if (currentLang === 'en') {
                    indicator.classList.remove('translate-x-0');
                    indicator.classList.add('translate-x-[38px]');
                } else {
                    indicator.classList.remove('translate-x-[38px]');
                    indicator.classList.add('translate-x-0');
                }

                elements.forEach(el => {
                    const key = el.getAttribute('data-key');
                    if (translations[currentLang][key]) {
                        el.innerHTML = translations[currentLang][key];
                    }
                    el.classList.remove('fade-out');
                });
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-stone-200/60 transition-all duration-300">
<div className="flex h-20 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex flex-col items-start group" href="#">
<span className="group-hover:text-orange-900 transition-colors text-xl font-medium text-orange-950 tracking-tight font-serif">TASCO DO STRAUSS</span>
<span className="text-[0.65rem] tracking-[0.2em] uppercase text-stone-500 font-medium">Sintra • Portugal</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-orange-900 transition-colors data-text" data-key="nav_about" href="#about">A Casa</a>
<a className="hover:text-orange-900 transition-colors data-text" data-key="nav_menu" href="#menu">Petiscos</a>
<a className="hover:text-orange-900 transition-colors data-text" data-key="nav_location" href="#location">Localização</a>
</div>
<div className="flex items-center gap-4">
<button className="relative flex items-center bg-stone-200/50 rounded-full p-1 w-20 h-8 border border-stone-300/50 hover:border-stone-400 transition-colors" id="lang-toggle" onclick="toggleLanguage()">
<div className="absolute left-1 top-1 w-[34px] h-6 bg-white rounded-full shadow-sm transition-all duration-300 transform translate-x-0" id="lang-indicator"></div>
<span className="w-1/2 text-[10px] font-semibold text-center z-10 text-stone-900">PT</span>
<span className="w-1/2 text-[10px] font-semibold text-center z-10 text-stone-400">EN</span>
</button>
<a className="hidden md:flex hover:bg-orange-900 transition-all hover:translate-y-px shadow-orange-900/10 items-center gap-2 text-xs font-medium text-orange-50 bg-orange-950 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg" href="tel:+351219234567">
<iconify-icon className="" icon="solar:phone-calling-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="data-text" data-key="nav_book">Reservar</span>
</a>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">

<img alt="Ambiente Tasca" className="w-full h-full object-cover object-center scale-105 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78caa91b-a6db-45b0-8a83-6570c2a16812_3840w.jpg"/>
<div className="bg-gradient-to-tl from-stone-950 via-stone-900/60 to-stone-900/30 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-orange-50 text-xs font-medium backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
<span className="data-text" data-key="hero_badge">Aberto agora • Open now</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight font-serif mb-6 drop-shadow-lg">
<span className="block text-orange-100/90 text-2xl md:text-3xl font-sans font-light tracking-widest uppercase mb-2 data-text" data-key="hero_subtitle">Tradição &amp; Alma</span>
<span className="data-text" data-key="hero_title">O Verdadeiro<br/><i className="font-serif italic text-orange-200">Sabor Português</i></span>
</h1>
<p className="text-stone-200 text-lg md:text-xl font-light max-w-xl mx-auto leading-relaxed mb-10 data-text" data-key="hero_desc">
                Petiscos caseiros, bom vinho e a hospitalidade de Sintra. 
                Onde os amigos se encontram e o tempo pára.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-orange-100 text-orange-950 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white transition-all hover:-translate-y-1 shadow-xl shadow-black/20 flex items-center justify-center gap-2 group">
<span className="data-text" data-key="hero_cta_menu">Ver o Menu</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full md:w-auto bg-stone-900/40 backdrop-blur-md border border-white/20 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-900/60 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
<span className="data-text" data-key="hero_cta_loc">Como Chegar</span>
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="bg-[#faf9f6] pt-24 pr-6 pb-24 pl-6" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative order-2 md:order-1">
<div className="aspect-[4/5] rounded-2xl overflow-hidden border border-stone-200 shadow-2xl rotate-2">

<img alt="Vinho e Petiscos" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2be8b8dd-2080-401b-932c-2e9462d8d9d5_3840w.png"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] max-w-[200px]">
<p className="font-serif italic text-xl text-stone-900 mb-1">"A melhor tasca de Sintra!"</p>
<div className="flex text-orange-500 gap-0.5 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-8">
<div className="">
<span className="text-orange-800 text-xs font-semibold tracking-widest uppercase mb-3 block data-text" data-key="about_label">Nossa História</span>
<h2 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 tracking-tight leading-tight mb-6 data-text" data-key="about_title">
                            Mais que um restaurante,<br/>uma tradição.
                        </h2>
<p className="text-stone-600 leading-relaxed font-light data-text" data-key="about_p1">
                            No coração de Sintra, o Tasco do Strauss mantém viva a alma das antigas tabernas portuguesas. Aqui não há pressa. Há pratos cheios, conversas altas e o tilintar dos copos de barro.
                        </p>
<p className="text-stone-600 leading-relaxed font-light mt-4 data-text" data-key="about_p2">
                            A nossa cozinha é simples, honesta e feita com amor. Do chouriço assado na hora ao bacalhau que desfaz na boca, cada prato conta uma história da nossa região.
                        </p>
</div>
<div className="grid grid-cols-2 gap-6 pt-4 border-t border-stone-200">
<div className="">
<iconify-icon className="text-orange-900 mb-2" icon="solar:wineglass-linear" width="28"></iconify-icon>
<h3 className="font-medium text-stone-900 data-text" data-key="feat_1_title">Vinhos Regionais</h3>
<p className="text-xs text-stone-500 mt-1 data-text" data-key="feat_1_desc">Seleção de adegas locais</p>
</div>
<div className="">
<iconify-icon className="text-orange-900 mb-2" icon="solar:chef-hat-linear" width="28"></iconify-icon>
<h3 className="font-medium text-stone-900 data-text" data-key="feat_2_title">Comida Caseira</h3>
<p className="text-xs text-stone-500 mt-1 data-text" data-key="feat_2_desc">Ingredientes frescos diários</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-stone-200 pt-24 pr-6 pb-24 pl-6" id="menu">
<div className="mr-auto ml-auto">
<div className="flex flex-col md:flex-row mb-16 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-serif font-medium text-stone-900 tracking-tight data-text" data-key="menu_title">Os Favoritos da Casa</h2>
<p className="text-stone-500 mt-3 font-light data-text" data-key="menu_subtitle">Sabores que não pode perder.</p>
</div>
<button className="hover:bg-stone-50 transition-colors flex group text-sm font-medium text-stone-900 border-stone-200 border rounded-full pt-2.5 pr-6 pb-2.5 pl-6 gap-x-2 gap-y-2 items-center">
<span className="data-text" data-key="menu_full">Ver Menu Completo</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="relative overflow-hidden rounded-2xl h-72 w-full mb-6 bg-stone-100">

<img alt="Bacalhau" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48b71223-7c39-4c62-8b68-251c951fd4b7_800w.png?w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl font-serif text-stone-900 data-text" data-key="dish_1_name">Bacalhau à Lagareiro</h3>
<span className="font-mono text-sm text-stone-500">€16</span>
</div>
<p className="text-stone-500 text-sm font-light leading-relaxed data-text" data-key="dish_1_desc">Lombo de bacalhau assado com azeite, alho e batatas a murro. Um clássico intemporal.</p>
</div>

<div className="group">
<div className="overflow-hidden bg-stone-100 w-full h-72 rounded-2xl mb-6 relative">

<img alt="Chouriço" className="group-hover:scale-105 transition-transform duration-700 z-0 w-full h-full max-h-full object-cover pr-1 pl-1 absolute" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1b55f3e-8abe-4175-a4bb-e319706adfdc_800w.jpg?w=800&amp;q=80"/><div className="absolute top-4 right-4 bg-orange-900/90 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">Top</div>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl font-serif text-stone-900 data-text" data-key="dish_2_name">Chouriço Assado</h3>
<span className="font-mono text-sm text-stone-500">€8.50</span>
</div>
<p className="text-stone-500 text-sm font-light leading-relaxed data-text" data-key="dish_2_desc">Assado na mesa em canoa de barro com aguardente. Acompanha pão saloio.</p>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-2xl h-72 w-full mb-6 bg-stone-100">

<img alt="Tábua" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2be8b8dd-2080-401b-932c-2e9462d8d9d5_3840w.png?w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-baseline mb-2">
<h3 className="text-xl font-serif text-stone-900 data-text" data-key="dish_3_name">Tábua do Tasco</h3>
<span className="font-mono text-sm text-stone-500">€18</span>
</div>
<p className="text-stone-500 text-sm font-light leading-relaxed data-text" data-key="dish_3_desc">Seleção de queijos curados, presunto serrano, azeitonas e compota caseira.</p>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 bg-[#2c2a26] text-stone-300 overflow-hidden" id="location">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#d6d3d1 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
<div className="space-y-8">
<div className="">
<span className="text-orange-400 text-xs font-semibold tracking-widest uppercase mb-2 block data-text" data-key="loc_label">Visite-nos</span>
<h2 className="text-4xl font-serif font-medium text-stone-100 tracking-tight mb-4 data-text" data-key="loc_title">No Coração de Sintra</h2>
<p className="text-stone-400 font-light max-w-md data-text" data-key="loc_desc">
                            Escondido nas ruelas mágicas da vila, o refúgio perfeito após um dia a explorar o Palácio da Pena ou a Quinta da Regaleira.
                        </p>
</div>
<div className="space-y-6 pt-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-orange-400 mt-1" icon="solar:map-point-linear" width="24"></iconify-icon>
<div>
<h4 className="text-white font-medium mb-1 data-text" data-key="address_title">Morada</h4>

<p className="text-sm font-light text-stone-400">Largo Aliados 2<br/>2710-507 Sintra, Portugal</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-orange-400 mt-1" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<div className="">
<h4 className="text-white font-medium mb-1 data-text" data-key="hours_title">Horário</h4>
<p className="text-sm font-light text-stone-400 data-text" data-key="hours_desc">
                                    Terça a Domingo: 12h00 - 23h00<br/>
                                    Segunda: Fechado para descanso
                                </p>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center w-full md:w-auto bg-stone-100 text-stone-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-all hover:-translate-y-1 gap-2" href="https://maps.app.goo.gl/TascoDoStrauss" target="_blank">
<iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
<span className="data-text" data-key="directions_btn">Ver no Mapa</span>
</a>
</div>
<div className="h-[400px] w-full rounded-2xl overflow-hidden bg-stone-800 border border-stone-700/50 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.6644487467655!2d-9.3906!3d38.7963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ed23456789abc%3A0x123456789abc!2sSintra!5e0!3m2!1spt-PT!2spt!4v1620000000000" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</section>

<footer className="bg-stone-100 py-12 border-t border-stone-200">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<h3 className="font-serif font-medium text-lg text-stone-900">TASCO DO STRAUSS</h3>
<p className="text-xs text-stone-500 mt-1">Sintra © 2024</p>
</div>
<div className="flex gap-6">

<a aria-label="Facebook" className="text-stone-400 hover:text-orange-900 transition-colors" href="https://www.facebook.com/people/Tasco-do-Strauss/100054452885998/" target="_blank">
<iconify-icon icon="solar:facebook-linear" width="24"></iconify-icon>
</a>
<a aria-label="Instagram" className="text-stone-400 hover:text-orange-900 transition-colors" href="https://www.instagram.com/explore/locations/334582830026362/tasco-do-strauss/" target="_blank">
<iconify-icon icon="solar:instagram-linear" width="24"></iconify-icon>
</a>
<a aria-label="TripAdvisor" className="text-stone-400 hover:text-orange-900 transition-colors" href="https://www.tripadvisor.com/Restaurant_Review-g189164-d6529881-Reviews-Tasco_do_Strauss-Sintra_Sintra_Municipality_Lisbon_District_Central_Portugal.html" target="_blank">
<iconify-icon icon="solar:trip-advisor-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
