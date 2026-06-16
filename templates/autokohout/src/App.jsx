import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Reveal Animation
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

        // 3D Tilt Effect
        document.addEventListener('mousemove', (e) => {
            document.querySelectorAll('.tilt-card').forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -3; 
                    const rotateY = ((x - centerX) / centerX) * 3;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                } else {
                    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
                }
            });
        });
        
        document.querySelectorAll('.tilt-card').forEach(card => {
            card.addEventListener('mouseleave', () => {
                card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
            });
        });

        // Form Logic
        function isEmail(e) {
            return String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        }

        function formCheck() {
            const form = document.forms['f1'];
            const email = form.email;
            
            if (!isEmail(email.value)) {
                email.classList.add('ring-2', 'ring-red-500');
                email.focus();
                return;
            }
            
            email.classList.remove('ring-2', 'ring-red-500');
            // Mock submission
            alert('Děkujeme za váš zájem, odpověď pošleme co nejdříve.');
            
            // In real scenario:
            // httpRequest('/svcSend.php?sec=069ee59478da04ba36d73ed59ae9cb5c&email='+email.value+'&body='+encodeURIComponent(form.body.value));
        }

        // Video Logic
        function playVideo(id) {
            const container = document.getElementById('video-container');
            const placeholder = document.getElementById('video-placeholder');
            const iframe = document.getElementById('video-frame');
            
            placeholder.style.display = 'none';
            iframe.style.display = 'block';
            iframe.src = 'https://www.youtube.com/embed/' + id + '?autoplay=1';
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid-pattern"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b border-gray-200/80 bg-white/90 backdrop-blur-xl transition-all duration-300">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight uppercase">Autokohout.cz</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-xs font-medium text-gray-500 uppercase tracking-wide">
<a className="hover:text-blue-700 transition-colors" href="#autoservis">Autoservis</a>
<a className="hover:text-blue-700 transition-colors" href="#pneuservis">Pneuservis</a>
<a className="hover:text-blue-700 transition-colors" href="#cisteni">Čištění</a>
<a className="hover:text-blue-700 transition-colors" href="#racing">HKC Racing</a>
<a className="hover:text-blue-700 transition-colors" href="#contacts">Kontakty</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-blue-700 text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-blue-800 transition-colors shadow-sm flex items-center gap-2" href="#contacts">
<span>Rezervovat</span>
<iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a>
</div>
</nav>

<section className="min-h-[85vh] flex flex-col items-center justify-center relative px-4 overflow-hidden border-b border-gray-200 bg-white">

<div className="absolute inset-0 z-0">
<img alt="Autokohout Workshop" className="w-full h-full object-cover opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27a7d049-52a9-48be-b9c3-e7542b692dc8_3840w.jpg" style={{}}/>
<div className="bg-gradient-to-t from-gray-50 via-white/80 to-white/60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 flex flex-col reveal active text-center max-w-4xl mr-auto ml-auto pt-20 relative space-y-8 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm text-[10px] uppercase tracking-wider font-medium text-gray-600">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Otevřeno od roku 1989
            </div>
<h1 className="md:text-7xl leading-[1.1] uppercase text-5xl font-semibold text-gray-900 tracking-tight">AUTOSERVIS<br/> <span className="text-blue-700" style={{}}>STANISLAV KOHOUT.</span></h1>
<p className="text-sm md:text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
                Komplexní péče o vašeho přítele se čtyřmi koly. Servis, pneuservis a diagnostika na profesionální úrovni.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mt-12">

<a className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group text-left cursor-pointer tilt-card" href="#autoservis">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wrench-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-tight">Autoservis</h3>
<p className="text-[10px] text-gray-500 mt-2 leading-relaxed">Pravidelná kontrola, výměny oleje a technická péče.</p>
</a>

<a className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group text-left cursor-pointer tilt-card" href="#pneuservis">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
<iconify-icon icon="solar:wheel-bold-duotone" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-tight">Pneuservis</h3>
<p className="text-[10px] text-gray-500 mt-2 leading-relaxed">Přezutí, vyvážení a sezónní uskladnění pneu.</p>
</a>

<a className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all group text-left cursor-pointer tilt-card" href="#cisteni">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4 text-blue-700 group-hover:bg-blue-700 group-hover:text-white transition-colors">
<iconify-icon icon="solar:snowflake-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold uppercase tracking-tight">Klimatizace</h3>
<p className="text-[10px] text-gray-500 mt-2 leading-relaxed">Dezinfekce a čištění interiérů vozů.</p>
</a>
</div>
</div>
</section>

<section className="bg-white pt-24 pr-6 pb-24 pl-6" id="autoservis">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal active">
<div className="space-y-8">
<div>
<h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Služby</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 uppercase">Autoservis</h3>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                        Pravidelná kontrola a péče zaručí, že vůz bude dlouho sloužit. Vašeho přítele se čtyřmi koly umíme precizně nejen umýt a vyčistit, ale rádi mu zabezpečíme i výměnu pneu a nadstandardní technickou péči a servis.
                    </p>
<div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
<h4 className="text-xs font-semibold uppercase mb-4 text-gray-400">Rozsah prací</h4>
<ul className="grid grid-cols-1 gap-3 text-xs font-medium text-gray-800">
<li className="flex items-start gap-2"><iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Základní diagnostika vozu</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Pravidelné servisy s výměnou motorového oleje a filtru</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Zápis do elektronické servisní knížky VW Group</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Příprava vozidla na STK + zajištění</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Výměny rozvodů, brzd a podvozkových komponentů</li>
<li className="flex items-start gap-2"><iconify-icon className="text-blue-600 mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon> Výměny oleje v automatických převodovkách</li>
</ul>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-xs rounded-lg border border-blue-100">
<iconify-icon icon="solar:tag-price-linear" width="16"></iconify-icon>
<span className="font-semibold">Sazba:</span> Osobní 1200 Kč / Dodávky + SUV 1400 Kč (vč. DPH)
                    </div>
</div>
<div className="relative h-[500px] w-full rounded-2xl overflow-hidden group tilt-card border border-gray-200">
<img alt="Autoservis Workshop" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eb43273e-033f-4228-93cd-b6c6a311947d_800w.jpg" style={{}}/>
<div className="bg-gradient-to-t from-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-gray-200 border-t pt-24 pr-6 pb-24 pl-6" id="pneuservis">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal">

<div className="order-2 md:order-1 relative h-[400px] w-full rounded-2xl overflow-hidden group tilt-card border border-gray-200">
<img alt="Pneuservis" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86820d86-1fda-40d3-be4d-f0f5630a5467_800w.jpg" style={{}}/>
</div>
<div className="order-1 md:order-2 space-y-6">
<div className="">
<h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Kola &amp; Disky</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 uppercase">Pneuservis</h3>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                        Ať panuje tuhá zima, nebo se vůkol rozprostírá léto, měli bychom se ujistit, že jezdíme na správných pneumatikách. V opačném případě bychom si nejen poškozovali materiál, ale především ohrožovali na životech sebe i ostatní účastníky provozu.
                    </p>
<div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
<iconify-icon icon="solar:box-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-sm font-semibold mb-1">Uskladnění pneu</h4>
<p className="text-xs text-gray-500 leading-relaxed">
                                    Kromě vlastního přezutí vašeho vozidla a vyvážení disků vám pneumatiky rádi přes sezónu uskladníme. Příště už s sebou v kufru nemusíte tahat náhradní sadu.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-gray-200" id="cisteni">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center reveal">
<div className="space-y-6">
<div>
<h2 className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Hygiena Vozu</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 uppercase">Čištění klimatizací</h3>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                        K odstranění nepříjemných zápachů vycházejících z Vaší klimatizace máme připraven kompletní program dezinfekce.
                    </p>
<div className="grid grid-cols-1 gap-4">
<div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-start gap-3">
<iconify-icon className="text-red-500 mt-1 flex-shrink-0" icon="solar:danger-triangle-linear"></iconify-icon>
<div className="text-xs text-red-900">
<strong className="block mb-1 font-semibold">Rizika zanedbání</strong>
                                Na výparníku se hromadí bakterie a plísně. Může být až 7x více bakterií než venku. Způsobuje pálení očí, alergie a kašel.
                            </div>
</div>
<div className="bg-green-50 border border-green-100 rounded-lg p-4 flex items-start gap-3">
<iconify-icon className="text-green-600 mt-1 flex-shrink-0" icon="solar:shield-check-linear"></iconify-icon>
<div className="text-xs text-green-900">
<strong className="block mb-1 font-semibold">Naše řešení</strong>
                                Kompletní antibakteriální čištění na různých úrovních. Doporučujeme vždy vyměnit i pylový filtr.
                            </div>
</div>
</div>
</div>
<div className="relative h-[400px] w-full rounded-2xl overflow-hidden group tilt-card border border-gray-200">
<img alt="Interior Cleaning" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c15b5dd-86b8-4a16-9312-61a7e09aad11_1600w.jpg" style={{}}/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gray-900 text-white relative overflow-hidden" id="racing">
<div className="absolute inset-0 bg-[url('/assets/img/racing.jpg?2')] bg-cover bg-center opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 reveal">
<div className="space-y-8">
<div className="">
<h2 className="text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">Motorsport</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-white uppercase">HKC Racing Team</h3>
</div>
<div className="space-y-4 text-sm text-gray-400 leading-relaxed font-light">
<p className="">
                            Firma Autoservis Kohout byla založena v roce 1989. Od roku 2005 používáme moderní diagnostiky Magneti Marelli, SuperVag a Actia s osciloskopem pro 90% vozů (Alfa Romeo, Fiat, BMW, VW Group, atd.).
                        </p>
<p className="">
                            Máme dlouholeté zkušenosti s vozy Fiat, Lancia, Alfa Romeo a Škoda, ale i Ford, Opel a BMW.
                        </p>
</div>
<div className="pt-4">
<h4 className="text-xs font-bold uppercase text-white mb-4">Racing Videa</h4>
<div className="grid grid-cols-1 gap-3">
<button className="hover:bg-white/10 flex transition-colors group text-left bg-white/5 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4 items-center justify-between" onclick="playVideo('ys1rNoIkMyo')">
<span className="text-xs font-medium text-gray-300 group-hover:text-white">HKC racing trailer</span>
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</button>
<button className="w-full text-left px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg flex items-center justify-between transition-colors group" onclick="playVideo('J8Sp3g4oKUQ')">
<span className="text-xs font-medium text-gray-300 group-hover:text-white">Most free test 2010</span>
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</button>
<button className="w-full text-left px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-lg flex items-center justify-between transition-colors group" onclick="playVideo('dO7-dJlMTsk')">
<span className="text-xs font-medium text-gray-300 group-hover:text-white">MMCR minimoto 2019 warm up crash</span>
<iconify-icon className="text-gray-400 group-hover:text-white transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative w-full aspect-video bg-black rounded-xl border border-gray-800 flex items-center justify-center overflow-hidden" id="video-container">
<div className="text-center" id="video-placeholder">
<iconify-icon className="text-gray-700 text-5xl mb-2" icon="solar:clapperboard-play-linear"></iconify-icon>
<div className="text-xs text-gray-600 uppercase tracking-widest">Select video to play</div>
</div>
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full hidden" frameborder="0" id="video-frame" src=""></iframe>
</div>
</div>
</div>
</section>

<section className="bg-blue-700 pt-24 pr-6 pb-24 pl-6" id="contacts">
<div className="max-w-6xl mx-auto space-y-16">
<div className="text-center">
<h3 className="text-3xl font-semibold tracking-tight text-white uppercase">Kontaktujte Nás</h3>
<p className="text-blue-200 text-sm mt-2">Dvě specializované pobočky pro vaše potřeby</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 reveal">

<div className="bg-white rounded-xl p-8 shadow-xl">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700">
<iconify-icon icon="solar:wrench-linear" width="22"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-bold text-gray-900 uppercase">Autoservis</h4>
<div className="text-xs text-gray-500 font-semibold">Aleš Kohout</div>
</div>
</div>
<div className="space-y-4 text-sm">
<div className="flex gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="text-gray-600">Nad Zlíchovem 4, 152 00, Praha 5</span>
</div>
<div className="flex gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:phone-calling-linear"></iconify-icon>
<div className="flex flex-col text-gray-600">
<a className="hover:text-black" href="tel:603874831">603 874 831</a>
<a className="hover:text-black" href="tel:603874924">603 874 924</a>
</div>
</div>
<div className="flex gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:letter-linear"></iconify-icon>
<a className="text-gray-600 hover:text-black hover:underline" href="mailto:kohout@autokohout.cz">kohout@autokohout.cz</a>
</div>
<div className="flex gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<div className="text-gray-600 text-xs">
<div><span className="font-semibold text-gray-900">Po-Čt:</span> 7:30-12:00   13:00-17:00</div>
<div><span className="font-semibold text-gray-900">Pá:</span> 7:30-12:00   13:00-16:00</div>
</div>
</div>
</div>
<a className="mt-8 block w-full h-32 rounded-lg overflow-hidden relative group border border-gray-200" href="https://en.mapy.cz/s/38Dgj" target="_blank">
<img alt="Map Autoservis" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e99fb6e-b60f-48b6-b382-8595e3630054_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
<span className="bg-white text-xs font-bold px-3 py-1 rounded shadow-sm text-black">Zobrazit na mapě</span>
</div>
</a>
</div>

<div className="bg-white rounded-xl p-8 shadow-xl">
<div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-700">
<iconify-icon icon="solar:wheel-bold-duotone" width="22"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg font-bold text-gray-900 uppercase">Pneuservis</h4>
<div className="text-xs text-gray-500 font-semibold">Tomáš Kohout</div>
</div>
</div>
<div className="space-y-4 text-sm">
<div className="flex gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="text-gray-600">Pod Žvahovem 70, 152 00, Praha 5</span>
</div>
<div className="flex gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:phone-calling-linear"></iconify-icon>
<div className="flex flex-col text-gray-600">
<a className="hover:text-black" href="tel:603873905">603 873 905</a>
<a className="hover:text-black" href="tel:774874123">774 874 123</a>
</div>
</div>
<div className="flex gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:letter-linear"></iconify-icon>
<a className="text-gray-600 hover:text-black hover:underline" href="mailto:pneu@autokohout.cz">pneu@autokohout.cz</a>
</div>
<div className="flex gap-3">
<iconify-icon className="text-blue-600 mt-0.5" icon="solar:clock-circle-linear"></iconify-icon>
<div className="text-gray-600 text-xs">
<div className=""><span className="font-semibold text-gray-900">Po-Čt:</span> 7:30-12:00   13:00-17:00</div>
<div><span className="font-semibold text-gray-900">Pá:</span> 7:30-12:00   13:00-16:00</div>
</div>
</div>
</div>
<a className="mt-8 block w-full h-32 rounded-lg overflow-hidden relative group border border-gray-200" href="https://en.mapy.cz/s/38Drx" target="_blank">
<img alt="Map Pneuservis" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aa0a13a8-1e4a-458c-bad0-52451f81be65_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 flex items-center justify-center group-hover:bg-black/20 transition-colors">
<span className="bg-white text-xs font-bold px-3 py-1 rounded shadow-sm text-black">Zobrazit na mapě</span>
</div>
</a>
</div>
</div>

</div>
</section>

<footer className="bg-gray-900 border-t border-gray-800 pt-12 pb-8 px-6 text-white">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:wheel-angle-linear"></iconify-icon>
<span className="text-xs font-bold tracking-tight uppercase">Autokohout.cz</span>
</div>
<div className="text-[10px] text-gray-500">
                © 2026 Autoservis Stanislav Kohout
            </div>
</div>
</footer>


    </>
  );
}
