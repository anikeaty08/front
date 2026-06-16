import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



{
"@context": "https://schema.org",
"@type": "BarberShop",
"name": "Barbearia Clássica",
"image": "https://images.unsplash.com/photo-1621605815971-fbc98d665033",
"telephone": "+5511999999999",
"address": {
"@type": "PostalAddress",
"streetAddress": "Rua Principal, 123",
"addressLocality": "São Paulo",
"addressCountry": "BR"
},
"url": "https://barbeariaclassica.com.br",
"priceRange": "$$"
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- BOOKING LOGIC COM WEBHOOK ---
        const confirmBtn = document.getElementById('confirm-btn');
        
        if (confirmBtn) {
            confirmBtn.addEventListener('click', async () => {
                const name = document.getElementById('booking-name').value.trim();
                const phone = document.getElementById('booking-phone').value.trim();
                const service = document.getElementById('booking-service').value;
                const date = document.getElementById('date-display').value;
                const time = document.getElementById('booking-time').value;

                // Validação simples
                if (!name || !phone || !date || !time) {
                    alert("Por favor, preencha todos os campos.");
                    return;
                }

                // Estado de Carregamento UI
                const btnTextElement = document.getElementById('btn-text');
                const originalText = btnTextElement.innerText;
                btnTextElement.innerText = "PROCESSANDO...";
                confirmBtn.disabled = true;
                confirmBtn.classList.add('opacity-50', 'cursor-not-allowed');

                const webhookUrl = "https://n8n-f14clc8hb57i69150liwvgu9.futuramarketing.cloud/webhook/1ec67d34-587f-4ba5-978a-f12e900d08cf";

                try {
                    // Enviar dados para o Webhook via POST
                    const response = await fetch(webhookUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            nome: name,
                            telefone: phone,
                            servico: service,
                            data: date,
                            hora: time
                        })
                    });

                    if (response.ok) {
                        alert("Agendamento enviado com sucesso!");
                        
                        // Limpar os campos do formulário
                        document.getElementById('booking-name').value = '';
                        document.getElementById('booking-phone').value = '';
                        document.getElementById('date-display').value = '';
                        document.getElementById('booking-time').value = '';
                    } else {
                        alert("Não foi possível enviar o agendamento no momento. Tente novamente.");
                    }

                } catch (error) {
                    console.error("Erro ao enviar dados para o webhook: ", error);
                    alert("Houve um erro de conexão ao tentar realizar o agendamento.");
                } finally {
                    // Resetar botão UI
                    btnTextElement.innerText = originalText;
                    confirmBtn.disabled = false;
                    confirmBtn.classList.remove('opacity-50', 'cursor-not-allowed');
                }
            });
        }

        // --- SCROLL REVEAL ANIMATION ---
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // --- LANGUAGE SWITCHER ---
        let currentLang = 'pt';
        function toggleLanguage() {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            document.querySelectorAll('[data-lang]').forEach(el => {
                if (el.getAttribute('data-lang') === currentLang) el.classList.remove('hidden');
                else el.classList.add('hidden');
            });
            const langDisplay = document.getElementById('lang-display');
            langDisplay.innerHTML = currentLang === 'pt' 
                ? 'PT | <span class="opacity-50">EN</span>' 
                : '<span class="opacity-50">PT</span> | EN';
        }

        // --- MOBILE MENU ---
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            const isOpen = !menu.classList.contains('translate-y-full');
            if (isOpen) menu.classList.add('translate-y-full');
            else menu.classList.remove('translate-y-full');
        }

        // --- CUSTOM CALENDAR UI LOGIC ---
        const dateInput = document.getElementById('date-display');
        const calendarDropdown = document.getElementById('calendar-dropdown');
        const daysContainer = document.getElementById('calendar-days');
        const currentMonthEl = document.getElementById('current-month');
        let currentDate = new Date();
        
        // Toggle Calendar
        document.getElementById('custom-calendar-wrapper').addEventListener('click', (e) => {
            e.stopPropagation();
            calendarDropdown.classList.toggle('hidden');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            const wrapper = document.getElementById('custom-calendar-wrapper');
            if (wrapper && !wrapper.contains(e.target)) {
                calendarDropdown.classList.add('hidden');
            }
        });

        function renderCalendar(date) {
            const year = date.getFullYear();
            const month = date.getMonth();
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const monthNames = ["JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"];
            
            currentMonthEl.innerText = `${monthNames[month]} ${year}`;
            daysContainer.innerHTML = '';

            // Empty slots for days before first of month
            for (let i = 0; i < firstDay; i++) {
                daysContainer.innerHTML += `<div></div>`;
            }

            // Days
            const today = new Date();
            for (let i = 1; i <= daysInMonth; i++) {
                const dayDate = new Date(year, month, i);
                const isToday = dayDate.toDateString() === today.toDateString();
                const isPast = dayDate < new Date().setHours(0,0,0,0);
                
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = `calendar-day-btn w-8 h-8 rounded-full text-xs flex items-center justify-center mx-auto transition-all ${isToday ? 'today' : ''} ${isPast ? 'text-muted' : 'text-white'}`;
                btn.innerText = i;
                
                if (!isPast) {
                    btn.onclick = (e) => {
                        e.stopPropagation();
                        // Format date nicely
                        const selected = dayDate.toLocaleDateString('pt-BR', { weekday: 'short', day: 'numeric', month: 'short' });
                        dateInput.value = selected.toUpperCase();
                        
                        // Remove previous selection style
                        document.querySelectorAll('.calendar-day-btn').forEach(b => b.classList.remove('selected'));
                        btn.classList.add('selected');
                        
                        setTimeout(() => calendarDropdown.classList.add('hidden'), 200);
                    };
                }
                
                daysContainer.appendChild(btn);
            }
        }

        const prevBtn = document.getElementById('prev-month');
        const nextBtn = document.getElementById('next-month');

        if(prevBtn && nextBtn) {
            prevBtn.onclick = (e) => { e.stopPropagation(); currentDate.setMonth(currentDate.getMonth() - 1); renderCalendar(currentDate); };
            nextBtn.onclick = (e) => { e.stopPropagation(); currentDate.setMonth(currentDate.getMonth() + 1); renderCalendar(currentDate); };
        }

        renderCalendar(currentDate);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<a className="fixed bottom-6 right-6 z-50 bg-white text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group" href="https://wa.link/a3k1hf" target="_blank">
<iconify-icon icon="solar:chat-round-call-linear" strokeWidth="1.5" width="28"></iconify-icon>
<span className="absolute right-full mr-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            WhatsApp
        </span>
</a>

<nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 flex justify-between items-center transition-all duration-300 border-b border-transparent" id="navbar">

<a className="font-display text-2xl tracking-tighter uppercase font-semibold text-white z-50 mix-blend-difference" href="#">
            BARBEARIA<span className="font-light opacity-70">CLÁSSICA</span>
</a>

<div className="hidden md:flex gap-8 text-xs font-medium uppercase tracking-widest items-center text-white mix-blend-difference">
<a className="hover:opacity-50 transition-opacity" href="#inicio"><span data-lang="pt">Início</span><span className="hidden" data-lang="en">Home</span></a>
<a className="hover:opacity-50 transition-opacity" href="#servicos"><span data-lang="pt">Serviços</span><span className="hidden" data-lang="en">Services</span></a>
<a className="hover:opacity-50 transition-opacity" href="#galeria"><span data-lang="pt">Galeria</span><span className="hidden" data-lang="en">Gallery</span></a>
<a className="hover:opacity-50 transition-opacity" href="#equipe"><span data-lang="pt">Equipe</span><span className="hidden" data-lang="en">Team</span></a>

<button className="border-l border-white/30 pl-8 hover:text-gray-300 transition-colors" onclick="toggleLanguage()">
<span id="lang-display">PT | <span className="opacity-50">EN</span></span>
</button>

<a className="bg-white text-black px-6 py-2 rounded-sm hover:bg-gray-200 transition-colors font-semibold" href="#reservas">
<span data-lang="pt">Agendar Horário</span><span className="hidden" data-lang="en">Book Now</span>
</a>
</div>

<button className="md:hidden z-50 text-white mix-blend-difference" onclick="toggleMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</nav>

<div className="fixed inset-0 bg-neutral-950 z-30 transform translate-y-full transition-transform duration-500 flex flex-col justify-center items-center text-white" id="mobile-menu">
<div className="flex flex-col gap-8 text-center">
<a className="font-display text-4xl uppercase tracking-tight" href="#inicio" onclick="toggleMenu()"><span data-lang="pt">Início</span><span className="hidden" data-lang="en">Home</span></a>
<a className="font-display text-4xl uppercase tracking-tight" href="#servicos" onclick="toggleMenu()"><span data-lang="pt">Serviços</span><span className="hidden" data-lang="en">Services</span></a>
<a className="font-display text-4xl uppercase tracking-tight" href="#galeria" onclick="toggleMenu()"><span data-lang="pt">Galeria</span><span className="hidden" data-lang="en">Gallery</span></a>
<a className="font-display text-4xl uppercase tracking-tight text-neutral-500" href="#reservas" onclick="toggleMenu()"><span data-lang="pt">Agendar</span><span className="hidden" data-lang="en">Book</span></a>
<button className="text-xs tracking-widest uppercase border border-white/20 px-4 py-2 mt-4" onclick="toggleLanguage()">Mudar Idioma</button>
</div>
</div>

<header className="relative w-full h-screen min-h-[700px] flex items-end justify-between px-6 pb-12 overflow-hidden bg-black text-white" id="inicio">

<div className="absolute inset-0 z-0 opacity-50">
<img alt="Interior da Barbearia" className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 z-1 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
<div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-12">
<div className="max-w-2xl reveal active">
<span className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-white/20 rounded-sm text-xs uppercase tracking-widest backdrop-blur-md">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon> Brasil
                </span>
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-6 font-semibold">
<span data-lang="pt">PRECISÃO.<br/><span className="italic font-light opacity-80 font-serif">ESTILO.</span></span>
<span className="hidden" data-lang="en">PRECISION.<br/><span className="italic font-light opacity-80 font-serif">STYLE.</span></span>
</h1>
<p className="text-sm md:text-base font-light text-gray-300 max-w-md leading-relaxed mb-8">
<span data-lang="pt">Barbearia clássica especializada em cortes profissionais e rituais premium. Experimente o luxo do cuidado pessoal.</span>
<span className="hidden" data-lang="en">Classic barbershop specializing in professional haircuts and premium grooming. Experience the luxury of self-care.</span>
</p>
<div className="flex flex-col md:flex-row gap-4">
<a className="bg-white text-black px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors text-center" href="#reservas">
<span data-lang="pt">Agendar Horário</span><span className="hidden" data-lang="en">Book Appointment</span>
</a>
<a className="border border-white/30 text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest hover:bg-white hover:text-black transition-colors text-center flex items-center justify-center gap-2" href="https://wa.link/a3k1hf" target="_blank">
<iconify-icon icon="solar:chat-round-call-linear" width="16"></iconify-icon> WhatsApp
                    </a>
</div>
</div>
<div className="flex flex-col items-start md:items-end gap-6 reveal delay-200">
<div className="flex gap-8 text-xs uppercase tracking-widest text-gray-400">
<span className="flex items-center gap-2"><iconify-icon icon="solar:star-linear"></iconify-icon> Premium</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:scissors-linear"></iconify-icon> Profissional</span>
</div>
</div>
</div>
</header>

<div className="bg-neutral-900 border-y border-neutral-800 py-8 px-6 relative z-30" id="reservas">
<div className="max-w-7xl mx-auto">
<h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6 text-center md:text-left">
<span data-lang="pt">Agendamento Rápido</span><span className="hidden" data-lang="en">Quick Booking</span>
</h3>
<form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2" id="booking-form">

<div className="relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:user-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-black border border-neutral-700 text-white text-sm py-4 pl-10 pr-4 focus:outline-none focus:border-white transition-colors rounded-sm uppercase placeholder-neutral-600" id="booking-name" placeholder="NOME / NAME" type="text"/>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-black border border-neutral-700 text-white text-sm py-4 pl-10 pr-4 focus:outline-none focus:border-white transition-colors rounded-sm uppercase placeholder-neutral-600" id="booking-phone" placeholder="TELEFONE / PHONE" type="tel"/>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:scissors-square-linear" width="18"></iconify-icon>
</div>
<select className="w-full bg-black border border-neutral-700 text-white text-sm py-4 pl-10 pr-4 focus:outline-none focus:border-white transition-colors cursor-pointer rounded-sm appearance-none" id="booking-service">
<option value="Corte + Lavagem">Corte + Lavagem</option>
<option value="Ritual de barba">Ritual de barba</option>
<option value="Corte + Barba">Corte + Barba</option>
<option value="Domicilio">Em Domicílio</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>

<div className="relative" id="custom-calendar-wrapper">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-black border border-neutral-700 text-white text-sm py-4 pl-10 pr-4 focus:outline-none focus:border-white transition-colors rounded-sm uppercase tracking-wide placeholder-neutral-500 cursor-pointer" id="date-display" placeholder="DATA / DATE" readonly="" type="text"/>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>

<div className="hidden absolute top-full left-0 mt-2 w-full min-w-[280px] bg-[#0A0A0A] border border-neutral-800 rounded-sm shadow-2xl z-50 p-4" id="calendar-dropdown">
<div className="flex justify-between items-center mb-4">
<button className="text-white hover:bg-neutral-800 p-1 rounded-sm" id="prev-month" type="button"><iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon></button>
<span className="text-sm font-semibold uppercase tracking-widest text-white" id="current-month"></span>
<button className="text-white hover:bg-neutral-800 p-1 rounded-sm" id="next-month" type="button"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></button>
</div>
<div className="grid grid-cols-7 gap-1 mb-2 text-center">
<span className="text-[10px] text-gray-500 uppercase">D</span>
<span className="text-[10px] text-gray-500 uppercase">S</span>
<span className="text-[10px] text-gray-500 uppercase">T</span>
<span className="text-[10px] text-gray-500 uppercase">Q</span>
<span className="text-[10px] text-gray-500 uppercase">Q</span>
<span className="text-[10px] text-gray-500 uppercase">S</span>
<span className="text-[10px] text-gray-500 uppercase">S</span>
</div>
<div className="grid grid-cols-7 gap-1 text-sm text-center" id="calendar-days"></div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon>
</div>
<select className="w-full bg-black border border-neutral-700 text-white text-sm py-4 pl-10 pr-4 focus:outline-none focus:border-white transition-colors cursor-pointer rounded-sm appearance-none" id="booking-time">
<option disabled="" selected="" value="">HORA / TIME</option>
<option value="10:00 AM">10:00 AM</option>
<option value="11:00 AM">11:00 AM</option>
<option value="12:00 PM">12:00 PM</option>
<option value="01:00 PM">13:00</option>
<option value="02:00 PM">14:00</option>
<option value="03:00 PM">15:00</option>
<option value="04:00 PM">16:00</option>
<option value="05:00 PM">17:00</option>
<option value="06:00 PM">18:00</option>
<option value="07:00 PM">19:00</option>
<option value="08:00 PM">20:00</option>
</select>
<div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>

<button className="bg-white text-black font-semibold uppercase tracking-widest text-xs py-4 hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group w-full" id="confirm-btn" type="button">
<span id="btn-text">CONFIRMAR</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>

<section className="py-24 bg-black text-white relative" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal">
<div>
<span className="text-xs uppercase tracking-widest text-neutral-500 mb-2 block">Nosso Menu</span>
<h2 className="font-display text-5xl md:text-6xl uppercase"><span data-lang="pt">Serviços</span><span className="hidden" data-lang="en">Services</span></h2>
</div>
<p className="text-neutral-400 max-w-sm mt-4 md:mt-0 text-sm font-light">
<span data-lang="pt">Cada serviço inclui consultoria de imagem, lavagem, finalização e produtos premium.</span>
<span className="hidden" data-lang="en">Each service includes image consultation, wash, styling and premium products.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

<div className="group border-b border-neutral-800 pb-8 hover:border-white transition-colors duration-500 reveal">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-display text-2xl uppercase group-hover:pl-4 transition-all">Fade Clássico</h3>
<span className="text-lg font-light">R$ 50</span>
</div>
<p className="text-neutral-500 text-sm font-light group-hover:text-neutral-300 transition-colors">
<span data-lang="pt">Degradê perfeito, alinhamento e acabamento na navalha.</span>
<span className="hidden" data-lang="en">Perfect fade, lining and razor finish.</span>
</p>
</div>

<div className="group border-b border-neutral-800 pb-8 hover:border-white transition-colors duration-500 reveal">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-display text-2xl uppercase group-hover:pl-4 transition-all">Ritual de Barba</h3>
<span className="text-lg font-light">R$ 40</span>
</div>
<p className="text-neutral-500 text-sm font-light group-hover:text-neutral-300 transition-colors">
<span data-lang="pt">Toalha quente, óleos essenciais, alinhamento e massagem.</span>
<span className="hidden" data-lang="en">Hot towel, essential oils, shaping and massage.</span>
</p>
</div>

<div className="group border-b border-neutral-800 pb-8 hover:border-white transition-colors duration-500 reveal">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-display text-2xl uppercase group-hover:pl-4 transition-all">Full Experience</h3>
<span className="text-lg font-light">R$ 80</span>
</div>
<p className="text-neutral-500 text-sm font-light group-hover:text-neutral-300 transition-colors">
<span data-lang="pt">Corte + Barba + Máscara Negra + Bebida cortesia.</span>
<span className="hidden" data-lang="en">Haircut + Beard + Black Mask + Complimentary drink.</span>
</p>
</div>

<div className="group border-b border-neutral-800 pb-8 hover:border-white transition-colors duration-500 reveal">
<div className="flex justify-between items-baseline mb-2">
<h3 className="font-display text-2xl uppercase group-hover:pl-4 transition-all">Corte Infantil</h3>
<span className="text-lg font-light">R$ 45</span>
</div>
<p className="text-neutral-500 text-sm font-light group-hover:text-neutral-300 transition-colors">
<span data-lang="pt">Corte para crianças com a mesma precisão e paciência.</span>
<span className="hidden" data-lang="en">Haircut for kids with the same precision and patience.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-12 bg-neutral-950 overflow-hidden" id="galeria">
<div className="flex gap-4 animate-marquee w-max">
<div className="w-[300px] h-[400px] image-hover-zoom relative grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Fade Cut" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] h-[400px] image-hover-zoom relative grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Beard Grooming" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] h-[400px] image-hover-zoom relative grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Scissor Cut" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="w-[300px] h-[400px] image-hover-zoom relative grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Barber Tools" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] h-[400px] image-hover-zoom relative grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Barber Shop Interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="w-[300px] h-[400px] image-hover-zoom relative grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Fade Cut" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-[300px] h-[400px] image-hover-zoom relative grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Beard Grooming" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="bg-black text-white pt-24 pb-12 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div>
<h4 className="font-display text-3xl uppercase mb-6 tracking-tighter">Barbearia<span className="font-light text-neutral-500">Clássica</span></h4>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6 max-w-xs">
                        Elevando o padrão da barbearia. Um espaço onde a tradição encontra o estilo moderno.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-full" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 border border-neutral-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors rounded-full" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="space-y-4">
<h5 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">Contato</h5>
<div className="flex items-start gap-4 text-sm font-light">
<iconify-icon className="mt-1 text-neutral-500" icon="solar:map-point-linear"></iconify-icon>
<span>Rua Principal, 123,<br/>São Paulo, Brasil</span>
</div>
<div className="flex items-center gap-4 text-sm font-light">
<iconify-icon className="text-neutral-500" icon="solar:phone-calling-linear"></iconify-icon>
<span>+55 11 99999-9999</span>
</div>
<div className="flex items-center gap-4 text-sm font-light">
<iconify-icon className="text-neutral-500" icon="solar:clock-circle-linear"></iconify-icon>
<span>Seg - Sáb: 10:00 - 21:00</span>
</div>
</div>

<div className="w-full h-48 bg-neutral-900 relative group overflow-hidden grayscale hover:grayscale-0 transition-all">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1973687258944!2d-46.6560942!3d-23.5613393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQwLjgiUyA0NsKwMzknMjEuOSJX!5e0!3m2!1spt-BR!2sbr!4v1635000000000!5m2!1spt-BR!2sbr" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 Barbearia Clássica. Todos os direitos reservados.</p>
<p>Designed for Excellence.</p>
</div>
</div>
</footer>



    </>
  );
}
