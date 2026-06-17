import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
        lucide.createIcons();

        function switchTab(tabId) {
            document.getElementById('view-home').classList.add('hidden');
            document.getElementById('view-booking').classList.add('hidden');
            document.getElementById('view-contact').classList.add('hidden');
            
            const navItems = ['nav-home', 'nav-booking', 'nav-contact'];
            navItems.forEach(id => {
                document.getElementById(id).classList.remove('text-black');
                document.getElementById(id).classList.add('text-stone-400');
            });

            document.getElementById('view-' + tabId).classList.remove('hidden');
            document.getElementById('nav-' + tabId).classList.remove('text-stone-400');
            document.getElementById('nav-' + tabId).classList.add('text-black');
            
            window.scrollTo(0, 0);
        }

        function setClientType(type) {
            const btnReturning = document.getElementById('btn-returning');
            const btnNew = document.getElementById('btn-new');
            const photoUpload = document.getElementById('photo-upload-section');

            const activeClasses = 'flex-1 py-4 text-xs uppercase tracking-widest font-medium bg-black text-[#C5A059] transition-colors'.split(' ');
            const inactiveClasses = 'flex-1 py-4 text-xs uppercase tracking-widest font-medium text-black hover:bg-[#F5F2EB] transition-colors border-l border-black'.split(' ');
            const inactiveLeftClasses = 'flex-1 py-4 text-xs uppercase tracking-widest font-medium text-black hover:bg-[#F5F2EB] transition-colors border-r border-black'.split(' ');

            if (type === 'returning') {
                btnReturning.className = activeClasses.join(' ');
                btnNew.className = inactiveClasses.join(' ');
                photoUpload.classList.add('hidden');
            } else {
                btnNew.className = activeClasses.join(' ');
                btnReturning.className = inactiveLeftClasses.join(' ');
                photoUpload.classList.remove('hidden'); 
            }
        }

        let selectedDay = null;
        let selectedTime = null;

        function updateServiceTime(radioElement) {
            const duration = radioElement.value;
            document.getElementById('modal-service-info').textContent = `Rezerwacja: ${duration}`;
        }

        function openCalendarModal() {
            const modal = document.getElementById('calendar-modal');
            const modalContent = document.getElementById('calendar-content');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('translate-y-full');
            }, 10);
        }

        function closeCalendarModal() {
            const modal = document.getElementById('calendar-modal');
            const modalContent = document.getElementById('calendar-content');
            modal.classList.add('opacity-0');
            modalContent.classList.add('translate-y-full');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }, 300);
        }

        function selectDay(btn, day) {
            document.querySelectorAll('.day-btn').forEach(el => {
                el.classList.remove('bg-black', 'text-[#C5A059]');
                el.classList.add('text-black', 'hover:bg-black', 'hover:text-[#C5A059]');
                
                const indicator = el.querySelector('.indicator');
                if(indicator) indicator.classList.replace('bg-white', 'bg-black');
            });
            
            btn.classList.add('bg-black', 'text-[#C5A059]');
            btn.classList.remove('text-black', 'hover:bg-black', 'hover:text-[#C5A059]');
            
            const indicator = btn.querySelector('.indicator');
            if(indicator) indicator.classList.replace('bg-black', 'bg-white');
            
            selectedDay = day;
            document.getElementById('time-slots').classList.remove('hidden');
            
            selectedTime = null;
            document.querySelectorAll('.time-btn').forEach(el => {
                el.classList.remove('bg-black', 'text-[#C5A059]');
                el.classList.add('text-black');
            });
            
            document.getElementById('time-slots').scrollIntoView({ behavior: 'smooth', block: 'end' });
        }

        function selectTime(btn, time) {
            document.querySelectorAll('.time-btn').forEach(el => {
                el.classList.remove('bg-black', 'text-[#C5A059]');
                el.classList.add('text-black');
            });
            
            btn.classList.remove('text-black');
            btn.classList.add('bg-black', 'text-[#C5A059]');
            selectedTime = time;
        }

        function confirmDateTime() {
            if(selectedDay && selectedTime) {
                const textElement = document.getElementById('selected-date-text');
                const subElement = document.getElementById('selected-date-sub');
                
                textElement.textContent = `${selectedDay} LISTOPADA 2024`;
                subElement.textContent = `Godzina: ${selectedTime}`;
                textElement.classList.add('text-[#C5A059]');
                textElement.parentElement.parentElement.parentElement.classList.add('border-b-4');
                
                closeCalendarModal();
            } else {
                alert("Wybierz datę i godzinę przed zatwierdzeniem.");
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<main className="w-full max-w-md min-h-screen relative overflow-x-hidden flex flex-col bg-[#FCFCFA] border-x border-black shadow-2xl">

<header className="pt-8 pb-5 px-6 flex justify-between items-start border-b-2 border-black bg-white sticky top-0 z-40">
<div className="flex flex-col">
<h1 className="text-4xl tracking-tighter font-medium uppercase leading-none text-black">Dusy</h1>
<span className="text-xs tracking-widest text-black mt-2 uppercase font-normal">Professional · Atelier</span>
</div>
<button className="w-12 h-12 border border-black bg-white flex items-center justify-center text-black hover:bg-black hover:text-[#C5A059] transition-colors rounded-none">
<i className="w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</button>
</header>

<div className="flex-1 pb-28 animate-fade-in" id="view-home">
<div className="p-4">
<h2 className="text-sm tracking-widest uppercase font-medium mb-4 text-black border-b border-black pb-2">Nadchodząca Wizyta</h2>
<div className="bg-white border border-black rounded-none overflow-hidden">
<div className="h-56 w-full relative border-b border-black group">

<img alt="Salon" className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-6">
<div>
<span className="text-xs uppercase tracking-widest bg-[#F5F2EB] border border-black text-black px-2 py-1 font-medium block w-max mb-3">Oczekująca</span>
<h3 className="font-medium text-lg text-black uppercase tracking-tight">Sombre + Tonowanie</h3>
<div className="flex items-center gap-2 mt-2 text-sm text-stone-600 font-light">
<i className="w-4 h-4" data-lucide="clock" strokeWidth="1.5"></i>
<span>Czas trwania: ~3.5h</span>
</div>
</div>
<div className="text-right flex flex-col items-end">
<span className="text-3xl tracking-tighter font-medium text-black uppercase leading-none">24 PAŹ</span>
<span className="text-xl tracking-tight font-normal text-black mt-1">14:30</span>
</div>
</div>
<div className="grid grid-cols-2 gap-0 border border-black">
<button className="border-r border-black bg-white text-black py-4 text-xs tracking-widest uppercase font-medium hover:bg-black hover:text-white transition-colors">Odwołaj</button>
<button className="bg-white text-black py-4 text-xs tracking-widest uppercase font-medium hover:bg-black hover:text-[#C5A059] transition-colors">Zmień termin</button>
</div>
</div>
</div>
</div>
<div className="px-4 py-4 mt-4">
<h3 className="text-sm tracking-widest uppercase font-medium text-black mb-3 border-b border-black pb-2">Ważne informacje</h3>
<div className="bg-[#F5F2EB] border border-black p-5 flex gap-4 text-black">
<i className="w-6 h-6 flex-shrink-0 mt-0.5" data-lucide="info" strokeWidth="1.5"></i>
<p className="text-sm font-light leading-relaxed">Prosimy o punktualne przybycie. W przypadku spóźnienia powyżej 15 minut, wizyta może zostać anulowana. Szanujmy swój czas.</p>
</div>
</div>
</div>

<div className="flex-1 pb-28 hidden animate-fade-in" id="view-booking">
<div className="p-4">
<h2 className="text-3xl tracking-tighter font-medium mb-6 uppercase text-black">Rezerwacja</h2>

<div className="flex border border-black bg-white mb-8">
<button className="flex-1 py-4 text-xs uppercase tracking-widest font-medium bg-black text-[#C5A059] transition-colors" id="btn-returning" onclick="setClientType('returning')">Stała Klientka</button>
<button className="flex-1 py-4 text-xs uppercase tracking-widest font-medium text-black hover:bg-[#F5F2EB] transition-colors border-l border-black" id="btn-new" onclick="setClientType('new')">Nowa Klientka</button>
</div>

<div className="mb-8">
<h3 className="text-sm tracking-widest uppercase font-medium text-black mb-4 flex items-center gap-2 border-b border-black pb-2">
                        01. Usługa
                    </h3>
<div className="flex flex-col gap-0 border border-black bg-white">
<label className="block relative cursor-pointer group border-b border-black last:border-b-0">
<input checked="" className="service-radio absolute opacity-0 w-0 h-0" name="service" onchange="updateServiceTime(this)" type="radio" value="1h"/>
<div className="p-5 transition-colors duration-300 flex justify-between items-center bg-white border-transparent border-l-4 group-hover:bg-[#F5F2EB]">
<div>
<p className="font-medium text-sm uppercase tracking-wider text-black service-title transition-colors">Strzyżenie + Modelowanie</p>
<p className="text-sm text-stone-500 mt-1 font-light service-desc transition-colors">Od 150 PLN · 1h</p>
</div>
<div className="w-5 h-5 border border-black flex items-center justify-center transition-colors radio-indicator bg-white rounded-none"></div>
</div>
</label>
<label className="block relative cursor-pointer group border-b border-black last:border-b-0">
<input className="service-radio absolute opacity-0 w-0 h-0" name="service" onchange="updateServiceTime(this)" type="radio" value="2h"/>
<div className="p-5 transition-colors duration-300 flex justify-between items-center bg-white border-transparent border-l-4 group-hover:bg-[#F5F2EB]">
<div>
<p className="font-medium text-sm uppercase tracking-wider text-black service-title transition-colors">Koloryzacja Jednolita</p>
<p className="text-sm text-stone-500 mt-1 font-light service-desc transition-colors">Od 300 PLN · 2h</p>
</div>
<div className="w-5 h-5 border border-black flex items-center justify-center transition-colors radio-indicator bg-white rounded-none"></div>
</div>
</label>
<label className="block relative cursor-pointer group border-b border-black last:border-b-0">
<input className="service-radio absolute opacity-0 w-0 h-0" name="service" onchange="updateServiceTime(this)" type="radio" value="3.5h+"/>
<div className="p-5 transition-colors duration-300 flex justify-between items-center bg-white border-transparent border-l-4 group-hover:bg-[#F5F2EB]">
<div>
<p className="font-medium text-sm uppercase tracking-wider text-black service-title transition-colors">Rozjaśnianie / Sombre</p>
<p className="text-sm text-stone-500 mt-1 font-light service-desc transition-colors">Od 450 PLN · 3.5h+</p>
</div>
<div className="w-5 h-5 border border-black flex items-center justify-center transition-colors radio-indicator bg-white rounded-none"></div>
</div>
</label>
</div>
</div>

<div className="mb-8 hidden animate-fade-in" id="photo-upload-section">
<h3 className="text-sm tracking-widest uppercase font-medium text-black mb-4 flex items-center justify-between border-b border-black pb-2">
                        02. Zdjęcie Włosów
                        <i className="w-4 h-4 text-black" data-lucide="info" strokeWidth="1.5"></i>
</h3>
<label className="border border-black bg-white hover:bg-[#F5F2EB] transition-colors rounded-none p-8 flex flex-col items-center justify-center text-center cursor-pointer group">
<input accept="image/*" className="hidden" type="file"/>
<div className="w-14 h-14 border border-black bg-white text-black flex items-center justify-center mb-4 group-hover:bg-black group-hover:text-[#C5A059] transition-colors rounded-none">
<i className="w-6 h-6" data-lucide="camera" strokeWidth="1.5"></i>
</div>
<p className="text-sm font-medium uppercase tracking-widest text-black">Wgraj zdjęcie z tyłu</p>
<p className="text-sm text-stone-500 mt-2 max-w-[260px] font-light">Konieczne do oceny długości i gęstości przy pierwszej wizycie.</p>
</label>
</div>

<div className="mb-10">
<h3 className="text-sm tracking-widest uppercase font-medium text-black mb-4 border-b border-black pb-2">03. Termin</h3>
<button className="w-full border border-black rounded-none p-5 flex justify-between items-center hover:bg-[#F5F2EB] transition-colors text-left bg-white group" onclick="openCalendarModal()" type="button">
<div className="flex items-center gap-4">
<div className="w-12 h-12 border border-black bg-white flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="calendar-plus" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-medium uppercase tracking-widest text-black" id="selected-date-text">Wybierz datę</p>
<p className="text-sm text-stone-500 font-light mt-1" id="selected-date-sub">Sprawdź dostępność w kalendarzu</p>
</div>
</div>
<i className="w-5 h-5 text-black" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<button className="w-full bg-black text-[#C5A059] py-5 rounded-none text-sm font-medium uppercase tracking-widest hover:bg-stone-900 transition-colors flex justify-center items-center gap-3">
                    Potwierdź rezerwację
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="2"></i>
</button>
</div>
</div>

<div className="flex-1 pb-28 hidden animate-fade-in flex flex-col px-4 pt-10" id="view-contact">
<h2 className="text-3xl tracking-tighter font-medium mb-2 uppercase text-black text-center">Kontakt</h2>
<p className="text-sm text-stone-500 mb-10 text-center font-light">Wybierz preferowaną formę kontaktu.</p>
<div className="w-full flex flex-col gap-0 border border-black bg-white">
<button className="w-full border-b border-black bg-white p-5 text-sm font-medium hover:bg-[#F5F2EB] transition-colors flex items-center gap-5 group">
<div className="w-12 h-12 border border-black bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<div className="text-left flex-1">
<p className="text-black uppercase tracking-widest">WhatsApp</p>
<p className="text-sm text-stone-500 font-light mt-1">Preferowany kontakt</p>
</div>
<i className="w-5 h-5 text-black" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="w-full bg-white p-5 text-sm font-medium hover:bg-[#F5F2EB] transition-colors flex items-center gap-5 group">
<div className="w-12 h-12 border border-black bg-white text-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div className="text-left flex-1">
<p className="text-black uppercase tracking-widest">Telefon</p>
<p className="text-sm text-stone-500 font-light mt-1">+48 123 456 789</p>
</div>
<i className="w-5 h-5 text-black" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="mt-12 p-6 border border-black bg-black text-[#C5A059] text-center">
<h4 className="uppercase tracking-widest text-xs font-medium mb-3">Godziny Otwarcia</h4>
<div className="space-y-2 text-sm font-light text-white">
<p className="flex justify-between"><span>PN - PT</span> <span>09:00 - 19:00</span></p>
<p className="flex justify-between"><span>SOBOTA</span> <span>09:00 - 15:00</span></p>
<p className="flex justify-between text-stone-400"><span>NIEDZIELA</span> <span>ZAMKNIĘTE</span></p>
</div>
</div>
</div>

<nav className="fixed bottom-0 w-full max-w-md bg-white border-t-2 border-black flex justify-around px-2 pb-6 pt-3 z-50">
<button className="flex flex-col items-center text-black w-20 py-2 group" id="nav-home" onclick="switchTab('home')">
<i className="w-6 h-6 mb-1.5 transition-transform group-hover:-translate-y-1" data-lucide="ticket" strokeWidth="1.5"></i>
<span className="text-[10px] uppercase tracking-widest font-medium">Wizyta</span>
</button>
<button className="flex flex-col items-center text-stone-400 hover:text-black transition-colors w-20 py-2 group" id="nav-booking" onclick="switchTab('booking')">
<i className="w-6 h-6 mb-1.5 transition-transform group-hover:-translate-y-1" data-lucide="calendar-plus" strokeWidth="1.5"></i>
<span className="text-[10px] uppercase tracking-widest font-medium">Zapisy</span>
</button>
<button className="flex flex-col items-center text-stone-400 hover:text-black transition-colors w-20 py-2 group" id="nav-contact" onclick="switchTab('contact')">
<i className="w-6 h-6 mb-1.5 transition-transform group-hover:-translate-y-1" data-lucide="message-square" strokeWidth="1.5"></i>
<span className="text-[10px] uppercase tracking-widest font-medium">Kontakt</span>
</button>
</nav>

<div className="fixed inset-0 z-[100] hidden flex-col items-center justify-end sm:justify-center bg-stone-900/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="calendar-modal">
<div className="w-full max-w-md bg-[#FCFCFA] border-t-2 sm:border-2 border-black rounded-none shadow-2xl flex flex-col h-[85vh] sm:h-auto sm:max-h-[90vh] transform translate-y-full sm:translate-y-0 transition-transform duration-300" id="calendar-content">
<div className="p-5 flex justify-between items-start border-b border-black sticky top-0 bg-white z-10">
<div>
<h3 className="text-xl tracking-tighter font-medium text-black uppercase">Wybierz datę</h3>
<p className="text-sm text-stone-500 mt-1 font-light uppercase tracking-widest" id="modal-service-info">Rezerwacja: 1h</p>
</div>
<button className="w-10 h-10 border border-black bg-white text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors rounded-none" onclick="closeCalendarModal()">
<i className="w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="p-5 overflow-y-auto pb-8 flex-1">
<div className="flex justify-between items-center mb-6 pb-4 border-b border-black">
<button className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white text-black transition-colors bg-white"><i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i></button>
<span className="text-sm font-medium text-black uppercase tracking-widest">Listopad 2024</span>
<button className="w-10 h-10 border border-black flex items-center justify-center hover:bg-black hover:text-white text-black transition-colors bg-white"><i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i></button>
</div>
<div className="grid grid-cols-7 gap-0 border-t border-l border-black text-center mb-8 bg-white">
<div className="text-[10px] uppercase tracking-widest font-medium text-black py-3 border-b border-r border-black bg-[#F5F2EB]">Pn</div>
<div className="text-[10px] uppercase tracking-widest font-medium text-black py-3 border-b border-r border-black bg-[#F5F2EB]">Wt</div>
<div className="text-[10px] uppercase tracking-widest font-medium text-black py-3 border-b border-r border-black bg-[#F5F2EB]">Śr</div>
<div className="text-[10px] uppercase tracking-widest font-medium text-black py-3 border-b border-r border-black bg-[#F5F2EB]">Cz</div>
<div className="text-[10px] uppercase tracking-widest font-medium text-black py-3 border-b border-r border-black bg-[#F5F2EB]">Pt</div>
<div className="text-[10px] uppercase tracking-widest font-medium text-black py-3 border-b border-r border-black bg-[#F5F2EB]">Sb</div>
<div className="text-[10px] uppercase tracking-widest font-medium text-stone-400 py-3 border-b border-r border-black bg-stone-50">Nd</div>

<div className="border-b border-r border-black bg-stone-50"></div>
<div className="border-b border-r border-black bg-stone-50"></div>
<div className="border-b border-r border-black bg-stone-50"></div>
<button className="py-4 text-sm text-stone-300 w-full border-b border-r border-black bg-stone-50" disabled="">1</button>
<button className="py-4 text-sm text-stone-300 w-full border-b border-r border-black bg-stone-50" disabled="">2</button>
<button className="py-4 text-sm text-stone-300 w-full border-b border-r border-black bg-stone-50" disabled="">3</button>
<button className="day-btn py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black w-full border-b border-r border-black transition-colors" onclick="selectDay(this, 4)">4</button>
<button className="day-btn py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black w-full border-b border-r border-black transition-colors" onclick="selectDay(this, 5)">5</button>
<button className="day-btn py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black w-full border-b border-r border-black transition-colors" onclick="selectDay(this, 6)">6</button>
<button className="day-btn py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black w-full border-b border-r border-black transition-colors relative" onclick="selectDay(this, 7)">
                            7<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-black indicator"></span>
</button>
<button className="day-btn py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black w-full border-b border-r border-black transition-colors" onclick="selectDay(this, 8)">8</button>
<button className="py-4 text-sm text-stone-300 w-full border-b border-r border-black bg-stone-50" disabled="">9</button>
<button className="py-4 text-sm text-stone-300 w-full border-b border-r border-black bg-stone-50" disabled="">10</button>
<button className="day-btn py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black w-full border-b border-r border-black transition-colors" onclick="selectDay(this, 11)">11</button>
<button className="day-btn py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black w-full border-b border-r border-black transition-colors relative" onclick="selectDay(this, 12)">
                            12<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-black indicator"></span>
</button>
<button className="day-btn py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black w-full border-b border-r border-black transition-colors" onclick="selectDay(this, 13)">13</button>
<button className="day-btn py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black w-full border-b border-r border-black transition-colors" onclick="selectDay(this, 14)">14</button>
<button className="day-btn py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black w-full border-b border-r border-black transition-colors" onclick="selectDay(this, 15)">15</button>
</div>
<div className="hidden animate-fade-in" id="time-slots">
<h4 className="text-sm tracking-widest uppercase font-medium text-black mb-4 border-b border-black pb-2">Dostępne godziny</h4>
<div className="grid grid-cols-3 gap-0 border border-black bg-white">
<button className="time-btn border-b border-r border-black py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black transition-colors" onclick="selectTime(this, '09:00')">09:00</button>
<button className="time-btn border-b border-r border-black py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black transition-colors" onclick="selectTime(this, '10:30')">10:30</button>
<button className="time-btn border-b border-black py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black transition-colors" onclick="selectTime(this, '13:00')">13:00</button>
<button className="time-btn border-r border-black py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black transition-colors" onclick="selectTime(this, '14:30')">14:30</button>
<button className="time-btn border-r border-black py-4 text-sm font-medium hover:bg-black hover:text-[#C5A059] text-black transition-colors" onclick="selectTime(this, '16:00')">16:00</button>
<button className="py-4 text-sm font-medium text-stone-300 bg-stone-50 cursor-not-allowed" disabled="">17:30</button>
</div>
</div>
</div>
<div className="p-5 border-t border-black bg-white sticky bottom-0 pb-10 sm:pb-5">
<button className="w-full bg-black text-[#C5A059] py-5 rounded-none text-sm font-medium uppercase tracking-widest hover:bg-stone-900 transition-colors" onclick="confirmDateTime()">Zapisz termin</button>
</div>
</div>
</div>
</main>
<style>
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
    </style>


    </>
  );
}
