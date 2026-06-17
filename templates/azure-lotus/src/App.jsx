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



    (function() {
      const header = document.querySelector('header');
      const toggleBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const iconHamburger = document.getElementById('icon-hamburger');
      const iconClose = document.getElementById('icon-close');
      let isMenuOpen = false;

      const updateHeaderState = () => {
        // If menu is open, force solid background
        if (isMenuOpen) {
          header.classList.add('bg-slate-900');
          header.classList.remove('bg-slate-900/90', 'backdrop-blur-md', 'shadow-lg', 'bg-gradient-to-b', 'from-black/50', 'to-transparent');
          return;
        }

        // Standard scroll behavior
        if (window.scrollY > 20) {
          header.classList.add('bg-slate-900/90', 'backdrop-blur-md', 'shadow-lg', 'scrolled');
          header.classList.remove('bg-gradient-to-b', 'from-black/50', 'to-transparent', 'bg-slate-900');
        } else {
          header.classList.remove('bg-slate-900/90', 'backdrop-blur-md', 'shadow-lg', 'scrolled', 'bg-slate-900');
          header.classList.add('bg-gradient-to-b', 'from-black/50', 'to-transparent');
        }
      };

      toggleBtn.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        
        if (isMenuOpen) {
          // Open Menu
          mobileMenu.classList.remove('opacity-0', 'invisible', 'translate-y-4');
          document.body.style.overflow = 'hidden'; // Prevent scrolling
          
          // Animate Icons
          iconHamburger.classList.add('rotate-90', 'scale-0', 'opacity-0');
          iconClose.classList.remove('rotate-90', 'scale-0', 'opacity-0');
          iconClose.classList.add('rotate-0', 'scale-100');
        } else {
          // Close Menu
          mobileMenu.classList.add('opacity-0', 'invisible', 'translate-y-4');
          document.body.style.overflow = ''; // Restore scrolling
          
          // Animate Icons
          iconHamburger.classList.remove('rotate-90', 'scale-0', 'opacity-0');
          iconClose.classList.add('rotate-90', 'scale-0', 'opacity-0');
          iconClose.classList.remove('rotate-0', 'scale-100');
        }
        
        updateHeaderState();
      });

      window.addEventListener('scroll', updateHeaderState);
      updateHeaderState(); // Initial check
    })();
  


        (function() {
          const heroImages = [
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d80f636-487b-454b-8c2b-0c645d1cbb3e_3840w.webp',
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4571251e-3c75-4445-981c-0bd59e188a87_1600w.jpg',
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a6f6b05b-c17e-4412-8193-86a1747ece50_1600w.webp',
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c0ea6c9-f89d-42c3-910d-c4f6f18e620a_1600w.webp',
            'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/567a078e-2ae6-47f7-a564-9c4680e46768_1600w.jpg'
          ];
          
          let currentIndex = 0;
          
          function updateSlider() {
            const imgEl = document.getElementById('hero-slider-image');
            const counterEl = document.getElementById('hero-slider-counter');
            
            if (imgEl) {
              imgEl.style.opacity = '0';
              setTimeout(function() {
                imgEl.src = heroImages[currentIndex];
                imgEl.style.opacity = '1';
              }, 250);
            }
            
            if (counterEl) {
              const displayNum = String(currentIndex + 1).padStart(2, '0');
              counterEl.textContent = displayNum + ' / 0' + heroImages.length;
            }
          }
          
          function nextSlide() {
            currentIndex = (currentIndex + 1) % heroImages.length;
            updateSlider();
          }
          
          function prevSlide() {
            currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
            updateSlider();
          }
          
          document.getElementById('hero-next-btn').addEventListener('click', nextSlide);
          document.getElementById('hero-prev-btn').addEventListener('click', prevSlide);
        })();
      


    let calendarState = {
      checkin: { month: 9, year: 2023, selected: new Date(2023, 9, 24) },
      checkout: { month: 9, year: 2023, selected: new Date(2023, 9, 28) }
    };
    let guests = { adults: 2, children: 0 };
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    function renderCalendar(type) {
      const state = calendarState[type];
      const calendarEl = document.getElementById(type + '-calendar');
      const monthYearEl = document.getElementById(type + '-month-year');
      
      monthYearEl.textContent = months[state.month] + ' ' + state.year;
      
      const firstDay = new Date(state.year, state.month, 1).getDay();
      const daysInMonth = new Date(state.year, state.month + 1, 0).getDate();
      
      let html = '';
      for (let i = 0; i < firstDay; i++) {
        html += '<span></span>';
      }
      
      for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(state.year, state.month, day);
        const isSelected = state.selected && date.toDateString() === state.selected.toDateString();
        const isToday = date.toDateString() === new Date().toDateString();
        
        let classes = 'w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors';
        if (isSelected) classes += ' bg-orange-500 text-white hover:bg-orange-600';
        else if (isToday) classes += ' border border-orange-300';
        
        html += '<button class="' + classes + '" onclick="selectDate(\'' + type + '\', ' + day + ')">' + day + '</button>';
      }
      
      calendarEl.innerHTML = html;
    }
    
    function changeMonth(type, delta) {
      calendarState[type].month += delta;
      if (calendarState[type].month > 11) {
        calendarState[type].month = 0;
        calendarState[type].year++;
      } else if (calendarState[type].month < 0) {
        calendarState[type].month = 11;
        calendarState[type].year--;
      }
      renderCalendar(type);
    }
    
    function selectDate(type, day) {
      const state = calendarState[type];
      state.selected = new Date(state.year, state.month, day);
      
      const options = { month: 'short', day: 'numeric', year: 'numeric' };
      document.getElementById(type + '-display').textContent = state.selected.toLocaleDateString('en-US', options);
      document.getElementById(type + '-date').value = state.selected.toISOString().split('T')[0];
      document.getElementById(type + '-picker').classList.add('hidden');
      
      renderCalendar(type);
    }
    
    function updateGuests(type, delta) {
      guests[type] = Math.max(type === 'adults' ? 1 : 0, guests[type] + delta);
      guests[type] = Math.min(10, guests[type]);
      
      document.getElementById(type + '-count').textContent = guests[type];
      
      let display = guests.adults + ' Adult' + (guests.adults !== 1 ? 's' : '');
      if (guests.children > 0) {
        display += ', ' + guests.children + ' Child' + (guests.children !== 1 ? 'ren' : '');
      }
      document.getElementById('guests-display').textContent = display;
    }
    
    function searchAvailability() {
      const checkin = document.getElementById('checkin-date').value;
      const checkout = document.getElementById('checkout-date').value;
      const promo = document.getElementById('promo-code').value;
      
      const checkinDate = new Date(checkin);
      const checkoutDate = new Date(checkout);
      
      if (checkoutDate <= checkinDate) {
        alert('Check-out date must be after check-in date');
        return;
      }
      
      const nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
      
      const searchParams = new URLSearchParams({
        checkin: checkin,
        checkout: checkout,
        adults: guests.adults,
        children: guests.children,
        nights: nights,
        promo: promo
      });
      
      alert('Searching for availability:\n\nCheck-in: ' + checkin + '\nCheck-out: ' + checkout + '\nNights: ' + nights + '\nGuests: ' + guests.adults + ' Adults, ' + guests.children + ' Children' + (promo ? '\nPromo Code: ' + promo : ''));
    }
    
    document.addEventListener('click', function(e) {
      const pickers = ['checkin-picker', 'checkout-picker', 'guests-dropdown'];
      pickers.forEach(function(id) {
        const picker = document.getElementById(id);
        if (picker && !picker.contains(e.target) && !e.target.closest('[onclick*="' + id + '"]')) {
          picker.classList.add('hidden');
        }
      });
    });
    
    renderCalendar('checkin');
    renderCalendar('checkout');
  
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
      

<header className="z-50 fixed transition-all duration-300 group top-0 right-0 left-0 bg-gradient-to-b from-black/50 to-transparent">
<div className="relative z-50 flex transition-all duration-300 group-[.scrolled]:h-16 md:group-[.scrolled]:h-20 h-20 md:h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 text-white" href="/">
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight leading-none">AZURE LOTUS</span>
<span className="text-xs text-white/80 tracking-widest uppercase">Resort &amp; Spa</span>
</div>
</a>

<nav className="hidden lg:flex gap-8 text-sm font-medium text-white tracking-wide gap-x-8 gap-y-8 items-center">
<a className="transition-colors hover:text-orange-200 text-orange-200" href="/home">Home</a>
<a className="transition-colors hover:text-orange-200" href="/villa">Villas &amp; Suites</a>
<a className="transition-colors hover:text-orange-200" href="/offers">Offers</a>
<a className="transition-colors hover:text-orange-200" href="/dining">Dining</a>
<a className="transition-colors hover:text-orange-200" href="/experiences">Experiences</a>
<a className="transition-colors hover:text-orange-200" href="/weddings">Weddings</a>
</nav>

<div className="flex gap-4 text-white gap-x-4 gap-y-4 items-center">
<button className="flex gap-2 hover:opacity-80 text-sm font-medium gap-x-2 gap-y-2 items-center">
<iconify-icon icon="solar:globe-linear" width="20"></iconify-icon>
<span className="hidden sm:inline">EN</span>
</button>

<button className="group hidden lg:inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-2xl pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center cursor-pointer" onclick="window.location.href='/signin'" role="button">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-full bg-zinc-900 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white text-sm font-medium text-zinc-400 bg-zinc-900 w-full h-full rounded-2xl pt-2 pr-4 pb-2 pl-4 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<span className="z-10 dynamic-text tracking-tight relative">Sign In</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>

<button aria-label="Toggle Menu" className="lg:hidden p-2 -mr-2 relative w-10 h-10 flex items-center justify-center group" id="mobile-menu-btn">
<iconify-icon className="absolute transition-all duration-300 rotate-0 scale-100" icon="solar:hamburger-menu-linear" id="icon-hamburger" width="24"></iconify-icon>
<iconify-icon className="absolute transition-all duration-300 rotate-90 scale-0 opacity-0" icon="solar:close-circle-linear" id="icon-close" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-slate-900 z-40 pt-28 px-6 pb-8 flex flex-col opacity-0 invisible translate-y-4 transition-all duration-500 lg:hidden" id="mobile-menu">
<nav className="flex flex-col gap-4">
<a className="group flex items-center justify-between py-3 border-b border-white/10 text-xl font-light text-white tracking-tight" href="/home">
<span>Home</span>
<iconify-icon className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-orange-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between py-3 border-b border-white/10 text-xl font-light text-white tracking-tight" href="/villa">
<span>Villas &amp; Suites</span>
<iconify-icon className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-orange-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between py-3 border-b border-white/10 text-xl font-light text-white tracking-tight" href="/offers">
<span>Offers</span>
<iconify-icon className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-orange-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between py-3 border-b border-white/10 text-xl font-light text-white tracking-tight" href="/dining">
<span>Dining</span>
<iconify-icon className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-orange-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between py-3 border-b border-white/10 text-xl font-light text-white tracking-tight" href="/experiences">
<span>Experiences</span>
<iconify-icon className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-orange-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between py-3 border-b border-white/10 text-xl font-light text-white tracking-tight" href="/weddings">
<span>Weddings</span>
<iconify-icon className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-orange-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="group flex items-center justify-between py-3 border-b border-white/10 text-xl font-light text-white tracking-tight" href="/signin">
<span>Sign In</span>
<iconify-icon className="opacity-0 -translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-orange-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</nav>
<div className="mt-auto space-y-8">
<button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-4 rounded-lg shadow-lg shadow-orange-500/20 transition-all active:scale-[0.98]">
        Check Availability
      </button>
<div className="flex items-center justify-between text-white/50 text-sm">
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:instagram" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:facebook" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:twitter" width="20"></iconify-icon></a>
</div>
<span>+1 (808) 555-0199</span>
</div>
</div>
</div>

</header>

<div className="min-h-[600px] overflow-hidden w-full h-[85vh] relative">
<img alt="Resort Aerial" className="transition-opacity duration-500 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" id="hero-slider-image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d80f636-487b-454b-8c2b-0c645d1cbb3e_3840w.webp"/>
<div className="flex text-white absolute right-12 bottom-20 gap-x-4 gap-y-4 items-center">
<span className="text-sm font-medium" id="hero-slider-counter">01 / 05</span>
<div className="flex gap-2 gap-x-2 gap-y-2">
<button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm hover:bg-white/10" id="hero-prev-btn">
<iconify-icon className="" icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm hover:bg-white/10" id="hero-next-btn">
<iconify-icon className="" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

</div>

<div className="-mt-16 z-40 max-w-6xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="bg-white rounded-xl shadow-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-end border border-slate-100">
<div className="md:col-span-3 flex flex-col gap-2 relative">
<label className="text-xs text-slate-500 font-medium uppercase tracking-wider">
        Check In
      </label>
<div className="flex hover:border-slate-300 transition-colors cursor-pointer border-slate-200 border rounded-lg pt-3 pr-3 pb-3 pl-3 gap-x-2 gap-y-2 items-center" onclick="document.getElementById('checkin-picker').classList.toggle('hidden')">
<iconify-icon className="text-slate-400" icon="solar:calendar-linear" width="20"></iconify-icon>
<span className="text-sm font-medium" id="checkin-display">Oct 24, 2023</span>
</div>
<div className="hidden absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-200 p-4 z-50 w-72" id="checkin-picker">
<div className="flex items-center justify-between mb-4">
<button className="p-1 hover:bg-slate-100 rounded" onclick="changeMonth('checkin', -1)"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<span className="font-medium text-sm" id="checkin-month-year">October 2023</span>
<button className="p-1 hover:bg-slate-100 rounded" onclick="changeMonth('checkin', 1)"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></button>
</div>
<div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-500 mb-2">
<span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
</div>
<div className="grid grid-cols-7 gap-1" id="checkin-calendar"><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 1)">1</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 2)">2</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 3)">3</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 4)">4</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 5)">5</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 6)">6</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 7)">7</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 8)">8</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 9)">9</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 10)">10</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 11)">11</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 12)">12</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 13)">13</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 14)">14</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 15)">15</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 16)">16</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 17)">17</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 18)">18</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 19)">19</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 20)">20</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 21)">21</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 22)">22</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 23)">23</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors bg-orange-500 text-white hover:bg-orange-600" onclick="selectDate('checkin', 24)">24</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 25)">25</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 26)">26</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 27)">27</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 28)">28</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 29)">29</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 30)">30</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkin', 31)">31</button></div>
</div>
<input id="checkin-date" type="hidden" value="2023-10-24"/>
</div>
<div className="md:col-span-3 flex flex-col gap-2 relative">
<label className="text-xs text-slate-500 font-medium uppercase tracking-wider">
        Check Out
      </label>
<div className="flex items-center gap-2 border border-slate-200 rounded-lg p-3 hover:border-slate-300 transition-colors cursor-pointer" onclick="document.getElementById('checkout-picker').classList.toggle('hidden')">
<iconify-icon className="text-slate-400" icon="solar:calendar-linear" width="20"></iconify-icon>
<span className="text-sm font-medium" id="checkout-display">Oct 28, 2023</span>
</div>
<div className="hidden absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-200 p-4 z-50 w-72" id="checkout-picker">
<div className="flex items-center justify-between mb-4">
<button className="p-1 hover:bg-slate-100 rounded" onclick="changeMonth('checkout', -1)"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<span className="font-medium text-sm" id="checkout-month-year">October 2023</span>
<button className="p-1 hover:bg-slate-100 rounded" onclick="changeMonth('checkout', 1)"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></button>
</div>
<div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-500 mb-2">
<span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
</div>
<div className="grid grid-cols-7 gap-1" id="checkout-calendar"><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 1)">1</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 2)">2</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 3)">3</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 4)">4</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 5)">5</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 6)">6</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 7)">7</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 8)">8</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 9)">9</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 10)">10</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 11)">11</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 12)">12</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 13)">13</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 14)">14</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 15)">15</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 16)">16</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 17)">17</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 18)">18</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 19)">19</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 20)">20</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 21)">21</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 22)">22</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 23)">23</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 24)">24</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 25)">25</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 26)">26</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 27)">27</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors bg-orange-500 text-white hover:bg-orange-600" onclick="selectDate('checkout', 28)">28</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 29)">29</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 30)">30</button><button className="w-8 h-8 flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-orange-100 transition-colors" onclick="selectDate('checkout', 31)">31</button></div>
</div>
<input id="checkout-date" type="hidden" value="2023-10-28"/>
</div>
<div className="md:col-span-2 flex flex-col gap-2 relative">
<label className="text-xs text-slate-500 font-medium uppercase tracking-wider">
        Guests
      </label>
<div className="flex items-center justify-between border border-slate-200 rounded-lg p-3 hover:border-slate-300 transition-colors cursor-pointer" onclick="document.getElementById('guests-dropdown').classList.toggle('hidden')">
<span className="text-sm font-medium" id="guests-display">2 Adults</span>
<iconify-icon className="text-slate-400" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="hidden absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl border border-slate-200 p-4 z-50 w-full min-w-48" id="guests-dropdown">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-slate-700">Adults</span>
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600" onclick="updateGuests('adults', -1)">-</button>
<span className="text-sm font-medium w-4 text-center" id="adults-count">2</span>
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600" onclick="updateGuests('adults', 1)">+</button>
</div>
</div>
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-slate-700">Children</span>
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600" onclick="updateGuests('children', -1)">-</button>
<span className="text-sm font-medium w-4 text-center" id="children-count">0</span>
<button className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600" onclick="updateGuests('children', 1)">+</button>
</div>
</div>
<button className="w-full bg-slate-900 text-white py-2 rounded-lg text-sm font-medium hover:bg-slate-800" onclick="document.getElementById('guests-dropdown').classList.add('hidden')">Done</button>
</div>
</div>
<div className="md:col-span-2 flex flex-col gap-2">
<label className="text-xs text-slate-500 font-medium uppercase tracking-wider">
        Promo Code
      </label>
<input className="w-full border border-slate-200 rounded-lg p-3 text-sm focus:outline-none focus:ring-2 transition-all focus:ring-orange-500/20 focus:border-orange-500" id="promo-code" placeholder="Optional" type="text"/>
</div>
<div className="md:col-span-2">
<button className="w-full text-white font-medium py-3 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 shadow-orange-500/30" onclick="searchAvailability()">
<span>Search</span>
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</button>
</div>
</div>

</div>

<section className="py-24 px-6 max-w-4xl mx-auto text-center">
<h1 className="text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">
        Welcome to Azure Lotus
        <br/>
<span className="text-orange-500">The 5-Star Ocean Sanctuary</span>
</h1>
<p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
        Experience the epitome of overwater luxury. From private infinity pools
        to world-class dining, every moment at Azure Lotus is curated for your
        absolute tranquility and wonder. Discover a paradise where the sky meets
        the sea in perfect harmony.
      </p>
<a className="inline-flex items-center gap-2 font-medium border-b pb-0.5 transition-all text-orange-600 hover:text-orange-700 border-orange-200 hover:border-orange-600" href="#">
        Read our story
        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</section>

<section className="py-16 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
            Discover Our Villas
          </h2>
<div className="flex gap-2">
<button className="p-3 rounded-full border border-slate-200 hover:bg-white transition-colors text-slate-600">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="p-3 rounded-full border border-slate-200 hover:bg-white transition-colors text-slate-600">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
<div className="h-80 overflow-hidden relative">
<img alt="Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16d24aa0-488c-445c-8624-bfb26b7d1665_1600w.jpg" style={{}}/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-slate-800">
                Popular
              </div>
</div>
<div className="p-8">
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">
                Executive Pool Villa
              </h3>
<p className="text-lg text-slate-500 mb-6 font-light">
                Warm, welcoming, and family-friendly. The Executive Pool Villas
                offer spacious modern interiors creating the perfect vacation
                home with unique character.
              </p>
<div className="flex items-end justify-between mt-6 pt-6 border-t border-slate-100">
<div>
<p className="text-sm text-slate-400 mb-1">Starting from</p>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold text-slate-900">
                      $450
                    </span>
<span className="text-sm text-slate-500">/ night</span>
</div>
</div>
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm">
                  View Details
                </button>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
<div className="h-80 overflow-hidden relative">
<img alt="Villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/73ecfa52-af92-4e86-a055-485059887add_1600w.jpg" style={{}}/>
</div>
<div className="p-8">
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight">
                Premium Ocean Suite
              </h3>
<p className="text-lg text-slate-500 mb-6 font-light">
                Infusing luxury living with a range of exclusive features. Glass
                floor panels for viewing marine life, private sauna, and direct
                access to the tranquil waters below.
              </p>
<div className="flex items-end justify-between mt-6 pt-6 border-t border-slate-100">
<div>
<p className="text-sm text-slate-400 mb-1">Starting from</p>
<div className="flex items-baseline gap-1">
<span className="text-xl font-semibold text-slate-900">
                      $620
                    </span>
<span className="text-sm text-slate-500">/ night</span>
</div>
</div>
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors font-medium text-sm">
                  View Details
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">
            Exclusive Offers
          </h2>
<a className="font-medium inline-flex items-center gap-1 text-orange-600 hover:text-orange-700" href="#">
            View All Offers
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 relative">
<img alt="Spa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3210201e-6a1f-400c-880d-5134f3f0f5e9_800w.jpg" style={{}}/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
              Wellness Retreat Package
            </h3>
<p className="text-slate-500 text-lg leading-relaxed mb-4">
              Enjoy added savings when you book early. Includes daily spa
              treatments and yoga.
            </p>
<span className="font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all text-orange-600">
              Learn More
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 relative">
<img alt="Family" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d5aec85-d61b-4bcd-b596-c40879cd9c10_800w.jpg" style={{}}/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
              Family Getaway
            </h3>
<p className="text-slate-500 text-lg leading-relaxed mb-4">
              Add even more fun and excitement to your next family staycation
              with our all-new family activities.
            </p>
<span className="font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all text-orange-600">
              Learn More
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 relative">
<img alt="Dining" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9abda98a-3cc0-4b9b-9ddc-7279fc21f7cf_800w.webp" style={{}}/>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">
              Romantic Dining
            </h3>
<p className="text-slate-500 text-lg leading-relaxed mb-4">
              Experience a lavish feast for the senses with our "Sunset Dinner"
              package by the beach.
            </p>
<span className="font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all text-orange-600">
              Learn More
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
<div className="mt-12 text-center">
<button className="text-white px-8 py-3 rounded-lg shadow-lg transition-all font-medium bg-orange-500 hover:bg-orange-600 shadow-orange-500/30">
            Check Availability
          </button>
</div>
</div>
</section>

<section className="bg-slate-50 pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 text-center tracking-tight mb-12">
          Signature Dining
        </h2>
<div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">
<div className="relative h-[500px]">
<img alt="Restaurant" className="w-full h-full object-cover" src="https://cdn.midjourney.com/58252755-7dd1-4e0d-8538-f91f7518f2bf/0_0.png?w=800&amp;q=80" style={{}}/>
</div>
<div className="p-12 flex flex-col justify-center text-white relative bg-orange-500">
<div className="absolute top-12 right-12 opacity-20">
<iconify-icon icon="solar:wine-glass-linear" width="64"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">
              The Azure Grill
            </h3>
<p className="text-lg leading-relaxed mb-8 text-orange-100">
              Experience the catch of the day at our signature open-air seafood
              restaurant. Enjoy panoramic ocean views while savoring locally sourced
              ingredients prepared with Mediterranean influences.
            </p>
<div className="flex items-center gap-4">
<button className="bg-white px-6 py-3 rounded-lg font-medium transition-colors text-orange-600 hover:bg-orange-50">
                Reserve Table
              </button>
</div>
<div className="absolute bottom-8 right-8 flex items-center gap-2 text-sm text-orange-200">
<span>2 / 5</span>
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:arrow-left-linear"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 tracking-tight mb-16">
          Resort Facilities
        </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center group">
<div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-slate-100 transition-all group-hover:ring-orange-100">
<img alt="Gym" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8834385-856e-48bd-ae88-dda318a2722b_800w.jpg" style={{}}/>
</div>
<h3 className="font-semibold text-lg text-slate-900">Indoor Gym</h3>
<a className="text-sm mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" href="#">
              Explore
            </a>
</div>
<div className="text-center group">
<div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-slate-100 transition-all group-hover:ring-orange-100">
<img alt="Pool" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c0ea6c9-f89d-42c3-910d-c4f6f18e620a_800w.webp" style={{}}/>
</div>
<h3 className="font-semibold text-lg text-slate-900">Infinity Pools</h3>
<a className="text-sm mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" href="#">
              Explore
            </a>
</div>
<div className="text-center group">
<div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-slate-100 transition-all group-hover:ring-orange-100">
<img alt="Water Sports" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddad27f7-ae57-4c76-93b0-69fc49cee78f_800w.webp" style={{}}/>
</div>
<h3 className="font-semibold text-lg text-slate-900">Water Sports</h3>
<a className="text-sm mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" href="#">
              Explore
            </a>
</div>
<div className="text-center group">
<div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-6 ring-4 ring-slate-100 transition-all group-hover:ring-orange-100">
<img alt="Gardens" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b04da5da-6123-49f1-b1d4-dd7b8342249a_800w.jpg" style={{}}/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Paradise Walk</h3>
<a className="text-sm mt-2 inline-block opacity-0 group-hover:opacity-100 transition-opacity text-orange-500" href="#">
              Explore
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 text-white bg-orange-500">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-center tracking-tight mb-4">
          Make Every Celebration Bloom with Brilliance
        </h2>
<p className="text-center text-lg mb-16 max-w-2xl mx-auto text-orange-100">
          From grand corporate galas to intimate beachfront weddings, we create
          unforgettable moments.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="group">
<div className="rounded-xl overflow-hidden mb-6 shadow-xl relative">
<img alt="Meetings" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55fdf1ea-242c-44ac-bf86-4834bc57c054_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<h3 className="text-2xl font-semibold text-center mb-3">
              Meetings &amp; Events
            </h3>
<p className="text-center leading-relaxed text-base mb-6 px-4 text-orange-100">
              Host inspiring indoor or outdoor events and forge lasting
              connections. State-of-the-art facilities paired with gourmet
              dining ignite creativity.
            </p>
<div className="text-center">
<a className="inline-block border border-white/30 hover:bg-white text-white px-6 py-2 rounded-lg transition-all text-sm font-medium hover:text-orange-500" href="#">
                Plan an Event
              </a>
</div>
</div>

<div className="group">
<div className="rounded-xl overflow-hidden mb-6 shadow-xl relative">
<img alt="Weddings" className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1e3372e-7192-46d0-a15d-93355a12e70b_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
</div>
<h3 className="text-2xl font-semibold text-center mb-3">Weddings</h3>
<p className="text-center leading-relaxed text-base mb-6 px-4 text-orange-100">
              Say "I do" by the glittering straits. Beautifully styled venues,
              bespoke menus, and impeccable service come together for a beach
              resort wedding.
            </p>
<div className="text-center">
<a className="inline-block border border-white/30 hover:bg-white text-white px-6 py-2 rounded-lg transition-all text-sm font-medium hover:text-orange-500" href="#">
                Plan Your Wedding
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2 text-orange-500">
            Places of Interest
          </h2>
<button className="text-xs font-semibold uppercase tracking-widest text-slate-400 transition-colors hover:text-orange-500">
            View Map
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl">
<div className="relative h-[400px]">
<img alt="Attraction" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=1600&amp;q=80" style={{}}/>
</div>
<div className="p-12 flex flex-col justify-center text-white relative bg-orange-500">
<h3 className="text-3xl font-semibold tracking-tight mb-4">
              Explore the Coast
            </h3>
<p className="text-lg leading-relaxed mb-8 text-orange-100">
              Discover the rich history and vibrant culture surrounding Azure
              Lotus. From the historic Diamond Head crater to the bustling
              Waikiki strip, adventure awaits just minutes away.
            </p>
<div className="absolute bottom-8 right-8 flex items-center gap-2 text-sm text-orange-200">
<span>2 / 5</span>
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:arrow-left-linear"></iconify-icon>
<iconify-icon className="cursor-pointer hover:text-white" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 text-center tracking-tight mb-2">
          Our Popular Blog Posts
        </h2>
<div className="text-center mb-12">
<a className="text-xs font-bold uppercase tracking-widest text-orange-500" href="#">
            Read All
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="rounded-lg overflow-hidden mb-4">
<img alt="Travel" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&amp;w=2673&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug transition-colors group-hover:text-orange-500">
              Top 5 Hidden Gems Near Maui You Must Visit
            </h3>
<a className="text-sm font-medium flex items-center gap-1 mt-3 text-orange-500" href="#">
              Read More
              <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="group">
<div className="rounded-lg overflow-hidden mb-4">
<img alt="Food" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/78e4d1e9-cdc2-44dc-bff8-ad1bde7e9940_800w.jpg" style={{}}/>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug transition-colors group-hover:text-orange-500">
              Best Local Poke Spots in Hawaii For All Foodies
            </h3>
<a className="text-sm font-medium flex items-center gap-1 mt-3 text-orange-500" href="#">
              Read More
              <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>

<div className="group">
<div className="rounded-lg overflow-hidden mb-4">
<img alt="Dining" className="w-full h-48 object-cover group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cbbbb801-bf0b-4d3a-a949-368b1848ddee_800w.jpg" style={{}}/>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 leading-snug transition-colors group-hover:text-orange-500">
              A Guide to Luau Feasts: Local Delicacies You Can't Miss
            </h3>
<a className="text-sm font-medium flex items-center gap-1 mt-3 text-orange-500" href="#">
              Read More
              <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex items-center justify-between mb-8">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">
            News &amp; Social
          </h2>
<a className="text-sm text-slate-500 hover:text-slate-900" href="#">
            View all
          </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-orange-500">
<iconify-icon icon="simple-icons:instagram"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">
                  Azure Lotus Resort
                </p>
<p className="text-xs text-slate-500">2 hours ago</p>
</div>
<iconify-icon className="ml-auto text-slate-400" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<p className="text-slate-600 text-base mb-4">
              Holidays done right with sea, sky, and serenity. Wishing everyone a
              wonderful weekend ahead! 🌊☀️ #AzureLotus #LuxuryTravel
            </p>
<div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden mb-4">
<img className="w-full h-48 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0b74570f-e8e7-45b1-9125-611aa1fa8dad_800w.webp"/>
<img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-center justify-between text-slate-500 text-sm border-t border-slate-100 pt-3">
<div className="flex gap-4">
<span className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
                  245
                </span>
<span className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
<iconify-icon icon="solar:chat-round-linear"></iconify-icon>
                  12
                </span>
</div>
<iconify-icon className="cursor-pointer hover:text-orange-500" icon="solar:share-linear"></iconify-icon>
</div>
</div>
<div className="border border-slate-200 rounded-xl p-4 bg-white shadow-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-blue-600">
<iconify-icon icon="simple-icons:facebook"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">
                  Azure Lotus Resort
                </p>
<p className="text-xs text-slate-500">5 hours ago</p>
</div>
<iconify-icon className="ml-auto text-slate-400" icon="solar:menu-dots-linear"></iconify-icon>
</div>
<p className="text-slate-600 text-base mb-4">
              Join us for a magical evening under the stars at The Azure Grill. 
              Our chef's special seafood platter is waiting for you! 🦐🍷 #Dining #AzureLotus
            </p>
<div className="rounded-lg overflow-hidden mb-4">
<img className="w-full h-48 object-cover" src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1000&amp;auto=format&amp;fit=crop&amp;q=80"/>
</div>
<div className="flex items-center justify-between text-slate-500 text-sm border-t border-slate-100 pt-3">
<div className="flex gap-4">
<span className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
<iconify-icon icon="solar:heart-linear"></iconify-icon>
                  182
                </span>
<span className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
<iconify-icon icon="solar:chat-round-linear"></iconify-icon>
                  28
                </span>
</div>
<iconify-icon className="cursor-pointer hover:text-orange-500" icon="solar:share-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<div className="bg-white py-20 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 overflow-hidden relative" style={{WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'}}>
<style>
      @keyframes infinite-scroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    </style>
<div className="flex items-center w-max gap-24 animate-[infinite-scroll_60s_linear_infinite] hover:[animation-play-state:paused]">

<div className="flex items-center gap-24 shrink-0 text-slate-800">
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:stripe" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:airbnb" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:spotify" width="64"></iconify-icon>
</div>

<div className="flex items-center gap-24 shrink-0 text-slate-800">
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:stripe" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:airbnb" width="64"></iconify-icon>
<iconify-icon className="hover:text-black transition-colors" height="64" icon="simple-icons:spotify" width="64"></iconify-icon>
</div>
</div>
</div>
</div>

<footer className="bg-slate-900 text-slate-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
<div className="lg:col-span-1">
<div className="flex items-center gap-2 text-white mb-6">
<iconify-icon icon="simple-icons:hilton" width="24"></iconify-icon>
<span className="text-base font-semibold tracking-tight">
                AZURE LOTUS
              </span>
</div>
<p className="text-sm leading-relaxed mb-6 text-slate-500">
              555 Kalanianaole Highway,
              <br/>
              Honolulu, Hawaii 96821,
              <br/>
              United States.
            </p>
<p className="text-sm mb-2">
<span className="text-slate-600">Tel:</span>
              +1 (808) 555-0199
            </p>
<p className="text-sm">
<span className="text-slate-600">Email:</span>
              reservations@azurelotus.com
            </p>
</div>
<div className="lg:col-span-2 flex flex-wrap gap-12">
<div>
<h4 className="text-white font-medium mb-4">Resort</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                    About Us
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Villas &amp; Suites
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Dining
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Gallery
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Support</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Contact Us
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">FAQ</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Sitemap
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Careers
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm">
<li>
<a className="hover:text-white transition-colors" href="#">
                    Privacy Policy
                  </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                    Terms of Use
                  </a>
</li>
</ul>
</div>
</div>
<div className="lg:col-span-1">
<h4 className="text-white font-medium mb-4">Newsletter</h4>
<div className="flex gap-2 mb-6">
<input className="bg-slate-800 border-none rounded text-sm px-4 py-2 w-full text-white focus:ring-1 focus:ring-orange-500" placeholder="Your email" type="email"/>
<button className="text-white text-xs font-bold uppercase px-4 py-2 rounded bg-orange-500 hover:bg-orange-600">
                Subscribe
              </button>
</div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:facebook"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:instagram"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:twitter"></iconify-icon>
</a>
<a className="hover:text-white transition-colors" href="#">
<iconify-icon icon="simple-icons:youtube"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-4">
<iconify-icon className="text-slate-600" icon="simple-icons:hawaiianairlines" width="48"></iconify-icon>
<p className="text-xs text-slate-600">
              © 2023 Azure Lotus Hospitality Group. All Rights Reserved.
            </p>
</div>
<div className="flex items-center gap-4 bg-slate-800 px-4 py-2 rounded-full">
<div className="text-right">
<p className="text-xs font-semibold text-white uppercase tracking-wider">
                Honolulu
              </p>
<p className="text-[10px] text-slate-500">Weather</p>
</div>
<iconify-icon className="text-white" icon="solar:cloud-sun-linear" width="24"></iconify-icon>
<span className="text-xl font-light text-white">28°C</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
