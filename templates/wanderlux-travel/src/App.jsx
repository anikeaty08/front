import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    import { createIcons, icons } from "https://cdn.jsdelivr.net/npm/lucide@latest/+esm";
    createIcons({ 
      icons,
      attrs: {
        'stroke-width': 1.5
      }
    });
  


    // Update time every second
    function updateTime() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeString = `${hours}:${minutes.toString().padStart(2, '0')}`;
      
      document.getElementById('time1').textContent = timeString;
      document.getElementById('time2').textContent = timeString;
      document.getElementById('time3').textContent = timeString;
    }
    
    updateTime();
    setInterval(updateTime, 60000);

    // Tab Bar Functionality - Screen 1
    const tabBtns1 = document.querySelectorAll('.tab-btn-1');
    tabBtns1.forEach(btn => {
      btn.addEventListener('click', function() {
        const tab = this.dataset.tab;
        
        // Reset all tabs
        tabBtns1.forEach(b => {
          const icon = b.querySelector('svg');
          const text = b.querySelector('span');
          icon.classList.remove('text-slate-900');
          icon.classList.add('text-slate-400');
          text.classList.remove('text-slate-900');
          text.classList.add('text-slate-400');
        });
        
        // Activate current tab
        const icon = this.querySelector('svg');
        const text = this.querySelector('span');
        icon.classList.add('text-slate-900');
        icon.classList.remove('text-slate-400');
        text.classList.add('text-slate-900');
        text.classList.remove('text-slate-400');
        
        console.log('Screen 1 - Navigated to:', tab);
        alert(`Screen 1: Navigating to ${tab} section`);
      });
    });

    // Tab Bar Functionality - Screen 2
    const tabBtns2 = document.querySelectorAll('.tab-btn-2');
    tabBtns2.forEach(btn => {
      btn.addEventListener('click', function() {
        const tab = this.dataset.tab;
        
        // Reset all tabs
        tabBtns2.forEach(b => {
          const icon = b.querySelector('svg');
          const text = b.querySelector('span');
          icon.classList.remove('text-slate-900');
          icon.classList.add('text-slate-400');
          text.classList.remove('text-slate-900');
          text.classList.add('text-slate-400');
        });
        
        // Activate current tab
        const icon = this.querySelector('svg');
        const text = this.querySelector('span');
        icon.classList.add('text-slate-900');
        icon.classList.remove('text-slate-400');
        text.classList.add('text-slate-900');
        text.classList.remove('text-slate-400');
        
        console.log('Screen 2 - Navigated to:', tab);
        alert(`Screen 2: Navigating to ${tab} section`);
      });
    });

    // Tab Bar Functionality - Screen 3
    const tabBtns3 = document.querySelectorAll('.tab-btn-3');
    tabBtns3.forEach(btn => {
      btn.addEventListener('click', function() {
        const tab = this.dataset.tab;
        
        // Reset all tabs
        tabBtns3.forEach(b => {
          const icon = b.querySelector('svg');
          const text = b.querySelector('span');
          icon.classList.remove('text-slate-900');
          icon.classList.add('text-slate-400');
          text.classList.remove('text-slate-900');
          text.classList.add('text-slate-400');
        });
        
        // Activate current tab
        const icon = this.querySelector('svg');
        const text = this.querySelector('span');
        icon.classList.add('text-slate-900');
        icon.classList.remove('text-slate-400');
        text.classList.add('text-slate-900');
        text.classList.remove('text-slate-400');
        
        console.log('Screen 3 - Navigated to:', tab);
        alert(`Screen 3: Navigating to ${tab} section`);
      });
    });

    // Screen 1: Discover functionality
    let notificationActive = true;
    document.getElementById('notificationBtn').addEventListener('click', () => {
      const dot = document.getElementById('notificationDot');
      if (notificationActive) {
        dot.style.opacity = '0';
        notificationActive = false;
        setTimeout(() => {
          alert('No new notifications');
        }, 100);
      }
    });

    document.getElementById('searchInput').addEventListener('input', (e) => {
      if (e.target.value.length > 0) {
        e.target.parentElement.style.borderColor = '#1e293b';
      } else {
        e.target.parentElement.style.borderColor = '';
      }
    });

    document.getElementById('filterBtn').addEventListener('click', () => {
      alert('Filter menu opened');
    });

    document.getElementById('joinTravelersBtn').addEventListener('click', () => {
      alert('Join 2.4M travelers - Sign up page');
    });

    // Category selection
    const categoryBtns = document.querySelectorAll('.category-btn');
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        categoryBtns.forEach(b => {
          b.classList.remove('bg-slate-900', 'text-white', 'shadow-lg');
          b.classList.add('bg-slate-50', 'text-slate-700', 'ring-1', 'ring-slate-200');
        });
        btn.classList.add('bg-slate-900', 'text-white', 'shadow-lg');
        btn.classList.remove('bg-slate-50', 'text-slate-700', 'ring-1', 'ring-slate-200');
        
        const category = btn.dataset.category;
        console.log('Selected category:', category);
      });
    });

    let bookmarked1 = false;
    document.getElementById('bookmarkBtn1').addEventListener('click', function() {
      const icon = this.querySelector('svg');
      bookmarked1 = !bookmarked1;
      
      if (bookmarked1) {
        icon.style.fill = '#1e293b';
        icon.style.color = '#1e293b';
      } else {
        icon.style.fill = 'none';
        icon.style.color = '#475569';
      }
    });

    document.getElementById('bookNowBtn').addEventListener('click', () => {
      alert('Booking Azure Bay Residence - Redirecting to booking page...');
    });

    document.getElementById('detailsBtn').addEventListener('click', () => {
      alert('Showing property details for Azure Bay Residence');
    });

    document.querySelectorAll('.trust-card').forEach(card => {
      card.addEventListener('click', function() {
        const title = this.querySelector('p').textContent;
        alert(`Learn more about: ${title}`);
      });
    });

    // Screen 2: Hero Landing functionality
    document.getElementById('exploreBtn').addEventListener('click', () => {
      alert('Starting exploration - Loading destinations...');
    });

    document.getElementById('watchBtn').addEventListener('click', () => {
      alert('Playing promotional video...');
    });

    document.getElementById('reviewsBtn').addEventListener('click', () => {
      alert('Showing all 12.5k reviews');
    });

    const planBtns = document.querySelectorAll('.plan-btn');
    planBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const action = this.querySelector('p').textContent;
        alert(`Opening: ${action}`);
        
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 150);
      });
    });

    let guestsCounter = 2400000;
    setInterval(() => {
      guestsCounter += Math.floor(Math.random() * 5);
      document.getElementById('guestsCount').textContent = (guestsCounter / 1000000).toFixed(1) + 'M+';
    }, 3000);

    // Screen 3: Booking functionality
    document.getElementById('backBtn').addEventListener('click', () => {
      alert('Going back to search results');
    });

    document.getElementById('shareBtn').addEventListener('click', () => {
      alert('Share options:\n• Copy link\n• Share via email\n• Share on social media');
    });

    let heartActive = false;
    document.getElementById('heartBtn').addEventListener('click', function() {
      const icon = this.querySelector('svg');
      heartActive = !heartActive;
      
      if (heartActive) {
        icon.classList.add('filled-heart');
        this.style.transform = 'scale(1.1)';
        setTimeout(() => {
          this.style.transform = 'scale(1)';
        }, 200);
      } else {
        icon.classList.remove('filled-heart');
      }
    });

    document.querySelectorAll('.amenity-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const amenity = this.querySelector('span').textContent;
        alert(`Amenity details: ${amenity}`);
      });
    });

    document.getElementById('calendarBtn').addEventListener('click', () => {
      alert('Opening full calendar view');
    });

    // Date selection functionality
    let selectedDates = [9, 10, 11, 12];
    const dateBtns = document.querySelectorAll('.date-btn');
    
    dateBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const date = parseInt(this.dataset.date);
        const isSelected = this.dataset.selected === 'true';
        
        if (isSelected) {
          this.dataset.selected = 'false';
          this.classList.remove('bg-slate-900', 'text-white', 'font-medium');
          this.classList.add('bg-slate-50', 'hover:bg-slate-100', 'ring-1', 'ring-slate-200', 'text-slate-700');
          selectedDates = selectedDates.filter(d => d !== date);
        } else {
          this.dataset.selected = 'true';
          this.classList.add('bg-slate-900', 'text-white', 'font-medium');
          this.classList.remove('bg-slate-50', 'hover:bg-slate-100', 'ring-1', 'ring-slate-200', 'text-slate-700');
          selectedDates.push(date);
          selectedDates.sort((a, b) => a - b);
        }
        
        updatePricing();
      });
    });

    function updatePricing() {
      const nights = selectedDates.length;
      const pricePerNight = 1250;
      const basePrice = nights * pricePerNight;
      const serviceFee = 150;
      const cleaningFee = 200;
      const discount = 250;
      const total = basePrice + serviceFee + cleaningFee - discount;
      
      document.getElementById('nightsCount').textContent = nights;
      document.getElementById('basePrice').textContent = '$' + basePrice.toLocaleString();
      document.getElementById('totalPrice').textContent = '$' + total.toLocaleString();
      document.getElementById('finalAmount').textContent = '$' + total.toLocaleString();
      
      if (nights > 0) {
        const minDate = Math.min(...selectedDates);
        const maxDate = Math.max(...selectedDates);
        document.getElementById('dateInfo').innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" class="lucide lucide-info w-4 h-4 text-blue-600"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
          <p class="text-[12px] text-blue-900">${nights} night${nights !== 1 ? 's' : ''} selected (Dec ${minDate} - Dec ${maxDate})</p>
        `;
      } else {
        document.getElementById('dateInfo').innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-lucide="info" class="lucide lucide-info w-4 h-4 text-slate-400"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
          <p class="text-[12px] text-slate-600">No dates selected</p>
        `;
      }
      
      // Reinitialize Lucide icons
      if (window.lucide) {
        window.lucide.createIcons();
      }
    }

    document.getElementById('paymentBtn').addEventListener('click', () => {
      const nights = selectedDates.length;
      if (nights === 0) {
        alert('Please select your dates first');
        return;
      }
      
      const total = document.getElementById('finalAmount').textContent;
      alert(`Processing payment of ${total}\n\nPayment methods:\n• Credit/Debit Card\n• PayPal\n• Apple Pay\n• Google Pay`);
    });

    // Add smooth scroll behavior
    document.querySelectorAll('section').forEach(section => {
      section.style.scrollBehavior = 'smooth';
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full -z-10 h-screen bg-cover bg-center blur-3xl" id="aura-image" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/bb230a81-04eb-4600-a67d-85e86a4b3c40_3840w.webp")'}}></div>

<main className="min-h-screen flex w-full py-8 items-center justify-center">
<div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-4">

<section className="w-[393px] h-[852px] bg-white rounded-[46px] border border-slate-200 overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)]" style={{animation: '0.8s ease-out 0s 1 normal both running scaleIn', scrollBehavior: 'smooth'}}>
<div className="h-full flex flex-col overflow-y-auto pb-20">

<div className="px-6 pt-6 pb-3 flex items-center justify-between text-slate-800" style={{animation: 'slideDown 0.6s ease-out 0.2s both'}}>
<span className="text-sm font-medium" id="time1">23:04</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery-charging w-5 h-5" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
</div>

<div className="px-6 pb-5 flex items-center justify-between" style={{animation: 'slideDown 0.6s ease-out 0.3s both'}}>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-white flex items-center justify-center shadow-sm">
<span className="text-[15px] font-semibold tracking-tighter">WL</span>
</div>
<div className="">
<h1 className="text-[24px] leading-6 font-semibold tracking-tight text-slate-900">Wanderlux</h1>
<p className="text-[12px] text-slate-500">Explore destinations</p>
</div>
</div>
<button className="h-11 w-11 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700 transition-colors relative" id="notificationBtn">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" id="notificationDot"></span>
</button>
</div>

<div className="px-6 mb-5" style={{animation: 'slideUp 0.6s ease-out 0.4s both'}}>
<div className="relative">
<svg className="lucide lucide-search w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100 text-slate-800 placeholder-slate-400 ring-1 ring-slate-200 focus:ring-2 focus:ring-slate-300 focus:outline-none text-[14px] transition-all" id="searchInput" placeholder="Search destinations, experiences..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors" id="filterBtn">
<svg className="lucide lucide-sliders-horizontal w-4 h-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
</button>
</div>
</div>

<div className="px-6 mb-6" style={{animation: 'slideUp 0.6s ease-out 0.5s both'}}>
<button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 ring-1 ring-slate-200 hover:ring-slate-300 transition-all" id="joinTravelersBtn">
<div className="flex -space-x-3">
<img alt="" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-9 h-9 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div className="w-9 h-9 rounded-full ring-2 ring-white bg-slate-700 flex items-center justify-center text-white text-[11px] font-semibold">+50</div>
</div>
<div className="flex-1 text-left">
<p className="text-[13px] font-semibold text-slate-900">Join 2.4M travelers</p>
<p className="text-[11px] text-slate-600">Booking their dream stays</p>
</div>
<svg className="lucide lucide-arrow-right w-4 h-4 text-slate-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="px-6 mb-6" style={{animation: 'slideLeft 0.6s ease-out 0.6s both'}}>
<div className="flex items-center justify-between mb-4">
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900">Browse by type</h3>
<button className="text-[13px] text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 transition-colors">
                View all
                <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
<div className="grid grid-cols-4 gap-3">
<button className="category-btn flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-slate-900 text-white shadow-lg hover:shadow-xl transition-all" data-category="villas">
<svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[12px] font-medium">Villas</span>
</button>
<button className="category-btn flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-slate-700 transition-all" data-category="flights">
<svg className="lucide lucide-plane w-6 h-6" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
<span className="text-[12px] font-medium">Flights</span>
</button>
<button className="category-btn flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-slate-700 transition-all" data-category="resorts">
<svg className="lucide lucide-palmtree w-6 h-6" data-lucide="palmtree" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path><path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path><path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path></svg>
<span className="text-[12px] font-medium">Resorts</span>
</button>
<button className="category-btn flex flex-col items-center justify-center gap-2.5 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-slate-700 transition-all" data-category="cruises">
<svg className="lucide lucide-ship w-6 h-6" data-lucide="ship" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10.189V14"></path><path d="M12 2v3"></path><path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path><path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path><path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path></svg>
<span className="text-[12px] font-medium">Cruises</span>
</button>
</div>
</div>

<div className="px-6 mb-6" style={{animation: 'blurIn 0.8s ease-out 0.7s both'}}>
<div className="flex items-center justify-between mb-4">
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900">Featured this week</h3>
<button className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 transition-colors" id="bookmarkBtn1">
<svg className="lucide lucide-bookmark w-4 h-4 text-slate-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
<div className="relative overflow-hidden rounded-3xl">
<img alt="Azure Bay Residence" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 flex items-center gap-2">
<span className="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm text-[11px] font-semibold text-slate-900 flex items-center gap-1">
<svg className="lucide lucide-star w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                  4.9
                </span>
<span className="px-3 py-1.5 rounded-full bg-emerald-500/95 backdrop-blur-sm text-[11px] font-semibold text-white">
                  Super Host
                </span>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<div className="flex items-start justify-between mb-2">
<div className="">
<h4 className="text-[20px] font-semibold tracking-tight">Azure Bay Residence</h4>
<p className="text-[13px] text-white/90 flex items-center gap-1 mt-1">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Santorini, Greece
                    </p>
</div>
<div className="text-right">
<p className="text-[12px] text-white/80">from</p>
<p className="text-[19px] font-semibold tracking-tight">$850<span className="text-[12px] font-medium">/night</span></p>
</div>
</div>
<div className="flex items-center gap-2 mt-4">
<button className="flex-1 px-4 py-2.5 rounded-xl bg-white hover:bg-white/90 text-slate-900 text-[13px] font-medium transition-all flex items-center justify-center gap-2" id="bookNowBtn">
<svg className="lucide lucide-calendar-check w-4 h-4" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
                    Book now
                  </button>
<button className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 ring-1 ring-white/30 text-white text-[13px] font-medium backdrop-blur transition-all flex items-center gap-2" id="detailsBtn">
<svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                    Details
                  </button>
</div>
</div>
</div>
</div>

<div className="px-6 mb-6" style={{animation: 'slideUp 0.6s ease-out 0.8s both'}}>
<h4 className="text-[16px] font-semibold tracking-tight text-slate-900 mb-4">Why book with Wanderlux</h4>
<div className="grid grid-cols-3 gap-3">
<button className="trust-card p-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-3">
<svg className="lucide lucide-shield-check w-5 h-5 text-emerald-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-[12px] font-semibold text-slate-900">Verified</p>
<p className="text-[11px] text-slate-600 mt-1">All properties checked</p>
</button>
<button className="trust-card p-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-3">
<svg className="lucide lucide-headphones w-5 h-5 text-blue-600" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<p className="text-[12px] font-semibold text-slate-900">24/7 Support</p>
<p className="text-[11px] text-slate-600 mt-1">Always here to help</p>
</button>
<button className="trust-card p-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center mb-3">
<svg className="lucide lucide-zap w-5 h-5 text-purple-600" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<p className="text-[12px] font-semibold text-slate-900">Instant Book</p>
<p className="text-[11px] text-slate-600 mt-1">Confirm in seconds</p>
</button>
</div>
</div>
<div className="h-8"></div>
</div>

<div className="tab-bar-shadow bg-white/95 border-slate-200 border-t pt-3 pr-6 pb-3 pl-6 absolute right-0 bottom-0 left-0 backdrop-blur-xl" style={{animation: 'slideUp 0.6s ease-out 1.3s both'}}>
<div className="flex items-center justify-around">
<button className="tab-btn-2 flex flex-col items-center gap-1 py-2 px-4" data-tab="home">
<svg className="lucide lucide-home w-6 h-6 text-slate-900" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-medium text-slate-900">Home</span>
</button>
<button className="tab-btn-2 flex flex-col items-center gap-1 py-2 px-4" data-tab="discover">
<svg className="lucide lucide-search w-6 h-6 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-[10px] font-medium text-slate-400">Discover</span>
</button>
<button className="tab-btn-2 flex flex-col items-center gap-1 py-2 px-4" data-tab="bookings">
<svg className="lucide lucide-calendar-days w-6 h-6 text-slate-400" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Bookings</span>
</button>
<button className="tab-btn-2 flex flex-col items-center gap-1 py-2 px-4" data-tab="account">
<svg className="lucide lucide-user-round w-6 h-6 text-slate-400" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Account</span>
</button>
</div>
</div>
</section>

<section className="w-[393px] h-[852px] bg-white rounded-[46px] border border-slate-200 overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)]" style={{animation: '0.8s ease-out 0.2s 1 normal both running scaleIn', scrollBehavior: 'smooth'}}>
<div className="h-full flex flex-col pb-20">

<div className="px-6 pt-6 pb-3 flex items-center justify-between text-slate-800" style={{animation: 'slideDown 0.6s ease-out 0.4s both'}}>
<span className="text-sm font-medium" id="time2">23:04</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery-charging w-5 h-5" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
</div>

<div className="relative w-full h-[480px]" style={{animation: 'blurIn 1s ease-out 0.5s both'}}>
<img alt="Mountain Vista" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent"></div>


<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
<div className="" style={{animation: 'slideUp 0.6s ease-out 0.8s both'}}>
<div className="flex items-center gap-2 mb-2">
<span className="text-[11px] font-medium text-white bg-white/10 ring-white/20 ring-1 rounded-full pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur-sm">Premium Collection</span>
<span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20 text-[11px] font-medium text-white flex items-center gap-1">
<svg className="lucide lucide-trending-up w-3 h-3" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                    Trending
                  </span>
</div>
<h1 className="mt-3 text-[38px] leading-[1.05] font-semibold tracking-tight">Discover Your Perfect Escape</h1>
<p className="mt-3 text-[15px] leading-relaxed text-white/90">Experience handpicked luxury stays in the world's most breathtaking destinations. From mountain lodges to coastal villas.</p>
</div>
<div className="mt-6 space-y-3" style={{animation: 'slideUp 0.6s ease-out 0.9s both'}}>
<div className="flex items-center gap-3">
<button className="flex-1 px-5 py-3.5 rounded-xl bg-white hover:bg-white/95 text-slate-900 text-[14px] font-medium transition-all flex items-center justify-center gap-2 shadow-lg" id="exploreBtn">
<svg className="lucide lucide-compass w-4 h-4" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Start exploring
                  </button>
<button className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 ring-1 ring-white/30 text-white text-[14px] font-medium backdrop-blur transition-all flex items-center gap-2" id="watchBtn">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    Watch
                  </button>
</div>
</div>
</div>
</div>

<div className="px-6 py-6" style={{animation: 'slideUp 0.6s ease-out 1s both'}}>
<button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all" id="reviewsBtn">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<img alt="" className="w-8 h-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-[13px] font-semibold text-slate-900">Trusted by millions</p>
<div className="flex items-center gap-1 mt-0.5">
<div className="flex">
<svg className="lucide lucide-star w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-[11px] text-slate-600 ml-1">4.9 (12.5k reviews)</span>
</div>
</div>
</div>
<svg className="lucide lucide-chevron-right w-5 h-5 text-slate-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="px-6" style={{animation: 'slideLeft 0.6s ease-out 1.1s both'}}>
<h3 className="text-[15px] font-semibold tracking-tight text-slate-900 mb-4">Plan your trip</h3>
<div className="grid grid-cols-3 gap-3">
<button className="plan-btn p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 hover:ring-slate-300 text-slate-700 transition-all" id="datesBtn">
<svg className="lucide lucide-calendar-range w-5 h-5 mb-2" data-lucide="calendar-range" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M16 2v4"></path><path d="M3 10h18"></path><path d="M8 2v4"></path><path d="M17 14h-6"></path><path d="M13 18H7"></path><path d="M7 14h.01"></path><path d="M17 18h.01"></path></svg>
<p className="text-[12px] font-medium">Select dates</p>
</button>
<button className="plan-btn p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 hover:ring-slate-300 text-slate-700 transition-all" id="locationBtn">
<svg className="lucide lucide-map-pinned w-5 h-5 mb-2" data-lucide="map-pinned" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"></path><circle cx="12" cy="8" r="2"></circle><path d="M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"></path></svg>
<p className="text-[12px] font-medium">Location</p>
</button>
<button className="plan-btn p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 hover:ring-slate-300 text-slate-700 transition-all" id="guestsBtn">
<svg className="lucide lucide-users-round w-5 h-5 mb-2" data-lucide="users-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
<p className="text-[12px] font-medium">Guests</p>
</button>
</div>
</div>

<div className="px-6 mt-6" style={{animation: 'slideUp 0.6s ease-out 1.2s both'}}>
<div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 ring-1 ring-slate-200">
<div className="text-center">
<p className="text-[20px] font-semibold tracking-tight text-slate-900" id="guestsCount">2.4M+</p>
<p className="text-[11px] text-slate-600 mt-0.5">Happy guests</p>
</div>
<div className="text-center border-x border-slate-200">
<p className="text-[20px] font-semibold tracking-tight text-slate-900">150+</p>
<p className="text-[11px] text-slate-600 mt-0.5">Countries</p>
</div>
<div className="text-center">
<p className="text-[20px] font-semibold tracking-tight text-slate-900">50k+</p>
<p className="text-[11px] text-slate-600 mt-0.5">Properties</p>
</div>
</div>
</div>
<div className="mt-auto py-6"></div>
</div>

<div className="tab-bar-shadow bg-white/95 border-slate-200 border-t pt-3 pr-6 pb-3 pl-6 absolute right-0 bottom-0 left-0 backdrop-blur-xl" style={{animation: 'slideUp 0.6s ease-out 1.3s both'}}>
<div className="flex items-center justify-around">
<button className="tab-btn-2 flex flex-col items-center gap-1 py-2 px-4" data-tab="home">
<svg className="lucide lucide-home w-6 h-6 text-slate-900" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] font-medium text-slate-900">Home</span>
</button>
<button className="tab-btn-2 flex flex-col items-center gap-1 py-2 px-4" data-tab="discover">
<svg className="lucide lucide-search w-6 h-6 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-[10px] font-medium text-slate-400">Discover</span>
</button>
<button className="tab-btn-2 flex flex-col items-center gap-1 py-2 px-4" data-tab="bookings">
<svg className="lucide lucide-calendar-days w-6 h-6 text-slate-400" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Bookings</span>
</button>
<button className="tab-btn-2 flex flex-col items-center gap-1 py-2 px-4" data-tab="account">
<svg className="lucide lucide-user-round w-6 h-6 text-slate-400" data-lucide="user-round" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="5"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Account</span>
</button>
</div>
</div>
</section>

<section className="w-[393px] h-[852px] bg-white rounded-[46px] border border-slate-200 overflow-hidden shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.02),_0_6.7px_5.3px_rgba(0,_0,_0,_0.028),_0_12.5px_10px_rgba(0,_0,_0,_0.035),_0_22.3px_17.9px_rgba(0,_0,_0,_0.042),_0_41.8px_33.4px_rgba(0,_0,_0,_0.05),_0_100px_80px_rgba(0,_0,_0,_0.07)]" style={{animation: '0.8s ease-out 0.4s 1 normal both running scaleIn', scrollBehavior: 'smooth'}}>
<div className="h-full flex flex-col overflow-y-auto pb-20">

<div className="px-6 pt-6 pb-3 flex items-center justify-between text-slate-800" style={{animation: 'slideDown 0.6s ease-out 0.6s both'}}>
<span className="text-sm font-medium" id="time3">23:04</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery-charging w-5 h-5" data-lucide="battery-charging" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 7-3 5h4l-3 5"></path><path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935"></path><path d="M22 14v-4"></path><path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936"></path></svg>
</div>
</div>

<div className="px-6 pb-4 flex items-center justify-between" style={{animation: 'slideDown 0.6s ease-out 0.7s both'}}>
<div className="flex items-center gap-3">
<button className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors" id="backBtn">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<h2 className="text-[22px] font-semibold tracking-tight text-slate-900">Booking details</h2>
</div>
<button className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors" id="shareBtn">
<svg className="lucide lucide-share-2 w-5 h-5" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</button>
</div>

<div className="px-6 mb-5" style={{animation: 'blurIn 0.8s ease-out 0.8s both'}}>
<div className="rounded-3xl ring-1 ring-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
<div className="relative">
<img alt="Mountain Peak Lodge" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<button className="heart-btn absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all" id="heartBtn">
<svg className="lucide lucide-heart w-5 h-5 text-slate-700" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
<div className="absolute top-3 left-3">
<span className="px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-sm text-white text-[11px] font-semibold">Featured</span>
</div>
</div>
<div className="p-5">
<div className="flex items-start justify-between mb-3">
<div>
<h3 className="text-[17px] font-semibold tracking-tight text-slate-900">Mountain Peak Lodge</h3>
<p className="text-[13px] text-slate-600 flex items-center gap-1 mt-1">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Aspen, Colorado
                    </p>
</div>
<div className="text-right">
<div className="flex items-center gap-1 mb-1">
<svg className="lucide lucide-star w-4 h-4 fill-yellow-400 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-[14px] font-semibold text-slate-900">4.95</span>
</div>
<p className="text-[11px] text-slate-500">238 reviews</p>
</div>
</div>
<div className="flex items-center gap-2 mb-4">
<span className="px-3 py-1.5 rounded-xl bg-slate-50 ring-1 ring-slate-200 text-[11px] font-medium text-slate-700 flex items-center gap-1">
<svg className="lucide lucide-bed-double w-3.5 h-3.5" data-lucide="bed-double" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path><path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path><path d="M12 4v6"></path><path d="M2 18h20"></path></svg>
                    6 bedrooms
                  </span>
<span className="px-3 py-1.5 rounded-xl bg-slate-50 ring-1 ring-slate-200 text-[11px] font-medium text-slate-700 flex items-center gap-1">
<svg className="lucide lucide-bath w-3.5 h-3.5" data-lucide="bath" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 4 8 6"></path><path d="M17 19v2"></path><path d="M2 12h20"></path><path d="M7 19v2"></path><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"></path></svg>
                    5 baths
                  </span>
<span className="px-3 py-1.5 rounded-xl bg-slate-50 ring-1 ring-slate-200 text-[11px] font-medium text-slate-700 flex items-center gap-1">
<svg className="lucide lucide-users w-3.5 h-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                    12 guests
                  </span>
</div>
<div className="grid grid-cols-4 gap-2">
<button className="amenity-btn flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<svg className="lucide lucide-wifi w-4 h-4 text-slate-700" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<span className="text-[10px] text-slate-600">Wi‑Fi</span>
</button>
<button className="amenity-btn flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<svg className="lucide lucide-utensils w-4 h-4 text-slate-700" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<span className="text-[10px] text-slate-600">Kitchen</span>
</button>
<button className="amenity-btn flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<svg className="lucide lucide-flame w-4 h-4 text-slate-700" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
<span className="text-[10px] text-slate-600">Fireplace</span>
</button>
<button className="amenity-btn flex flex-col items-center gap-1 p-2 rounded-xl bg-slate-50 ring-1 ring-slate-200 hover:ring-slate-300 transition-all">
<svg className="lucide lucide-mountain-snow w-4 h-4 text-slate-700" data-lucide="mountain-snow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m8 3 4 8 5-5 5 15H2L8 3z"></path><path d="M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"></path></svg>
<span className="text-[10px] text-slate-600">Ski-in</span>
</button>
</div>
<div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between">
<div>
<p className="text-[12px] text-slate-500">Price per night</p>
<p className="text-[22px] font-semibold tracking-tight text-slate-900">$1,250<span className="text-[14px] font-medium text-slate-500">/night</span></p>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-info w-4 h-4 text-slate-400" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="text-[11px] text-slate-500">+$150 fees</span>
</div>
</div>
</div>
</div>
</div>

<div className="px-6 mb-5" style={{animation: 'slideUp 0.6s ease-out 0.9s both'}}>
<div className="flex items-center justify-between mb-3">
<h4 className="text-[15px] font-semibold tracking-tight text-slate-900">Select your dates</h4>
<button className="text-[12px] text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1 transition-colors" id="calendarBtn">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                View calendar
              </button>
</div>
<div className="grid grid-cols-7 gap-2 mb-3">
<div className="text-center">
<p className="text-[10px] text-slate-500 font-medium mb-1">SUN</p>
<button className="date-btn w-full aspect-square rounded-xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-[13px] text-slate-400 transition-all" data-date="8">8</button>
</div>
<div className="text-center">
<p className="text-[10px] text-slate-500 font-medium mb-1">MON</p>
<button className="date-btn w-full aspect-square rounded-xl bg-slate-900 text-white text-[13px] font-medium shadow-sm" data-date="9" data-selected="true">9</button>
</div>
<div className="text-center">
<p className="text-[10px] text-slate-500 font-medium mb-1">TUE</p>
<button className="date-btn w-full aspect-square rounded-xl bg-slate-900 text-white text-[13px] font-medium" data-date="10" data-selected="true">10</button>
</div>
<div className="text-center">
<p className="text-[10px] text-slate-500 font-medium mb-1">WED</p>
<button className="date-btn w-full aspect-square rounded-xl bg-slate-900 text-white text-[13px] font-medium" data-date="11" data-selected="true">11</button>
</div>
<div className="text-center">
<p className="text-[10px] text-slate-500 font-medium mb-1">THU</p>
<button className="date-btn w-full aspect-square rounded-xl bg-slate-900 text-white text-[13px] font-medium shadow-sm" data-date="12" data-selected="true">12</button>
</div>
<div className="text-center">
<p className="text-[10px] text-slate-500 font-medium mb-1">FRI</p>
<button className="date-btn w-full aspect-square rounded-xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-[13px] text-slate-700 transition-all" data-date="13">13</button>
</div>
<div className="text-center">
<p className="text-[10px] text-slate-500 font-medium mb-1">SAT</p>
<button className="date-btn w-full aspect-square rounded-xl bg-slate-50 hover:bg-slate-100 ring-1 ring-slate-200 text-[13px] text-slate-700 transition-all" data-date="14">14</button>
</div>
</div>
<div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50 ring-1 ring-blue-200" id="dateInfo">
<svg className="lucide lucide-info w-4 h-4 text-blue-600" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<p className="text-[12px] text-blue-900">4 nights selected (Dec 9 - Dec 12)</p>
</div>
</div>

<div className="px-6 mb-5" style={{animation: 'slideUp 0.6s ease-out 1s both'}}>
<h4 className="text-[15px] font-semibold tracking-tight text-slate-900 mb-3">Price breakdown</h4>
<div className="rounded-2xl bg-slate-50 ring-1 ring-slate-200 p-4 space-y-3">
<div className="flex items-center justify-between">
<p className="text-[13px] text-slate-600">$1,250 × <span id="nightsCount">4</span> nights</p>
<p className="text-[14px] font-semibold text-slate-900" id="basePrice">$5,000</p>
</div>
<div className="flex items-center justify-between">
<p className="text-[13px] text-slate-600 flex items-center gap-1">
                  Service fee
                  <svg className="lucide lucide-info w-3 h-3 text-slate-400" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</p>
<p className="text-[14px] font-semibold text-slate-900">$150</p>
</div>
<div className="flex items-center justify-between">
<p className="text-[13px] text-slate-600">Cleaning fee</p>
<p className="text-[14px] font-semibold text-slate-900">$200</p>
</div>
<div className="flex items-center justify-between text-emerald-700">
<p className="text-[13px] font-medium flex items-center gap-1">
<svg className="lucide lucide-tag w-3.5 h-3.5" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
                  Early bird discount
                </p>
<p className="text-[14px] font-semibold">-$250</p>
</div>
<div className="pt-3 border-t border-slate-200 flex items-center justify-between">
<p className="text-[14px] font-semibold text-slate-900">Total</p>
<p className="text-[20px] font-semibold tracking-tight text-slate-900" id="totalPrice">$5,100</p>
</div>
</div>
</div>

<div className="px-6 mb-6" style={{animation: 'slideUp 0.6s ease-out 1.1s both'}}>
<div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white shadow-lg">
<div className="flex items-start justify-between mb-4">
<div>
<p className="text-[13px] text-white/80">Final amount</p>
<p className="text-[26px] font-semibold tracking-tight mt-1" id="finalAmount">$5,100</p>
<p className="text-[12px] text-white/70 mt-1">Includes all taxes and fees</p>
</div>
<div className="p-2 rounded-xl bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<button className="w-full px-5 py-3.5 rounded-xl bg-white hover:bg-white/95 text-slate-900 text-[14px] font-medium transition-all flex items-center justify-center gap-2 shadow-lg" id="paymentBtn">
<svg className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Proceed to payment
              </button>
<p className="text-[11px] text-white/60 text-center mt-3">Free cancellation within 48 hours</p>
</div>
</div>
<div className="h-8"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200 tab-bar-shadow px-6 py-3" style={{animation: 'slideUp 0.6s ease-out 1.4s both'}}>
<div className="flex items-center justify-around">
<button className="tab-btn-3 flex flex-col items-center gap-1 py-2 px-4" data-tab="search">
<svg className="lucide lucide-search w-6 h-6 text-slate-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<span className="text-[10px] font-medium text-slate-400">Search</span>
</button>
<button className="tab-btn-3 flex flex-col items-center gap-1 py-2 px-4" data-tab="booking">
<svg className="lucide lucide-receipt w-6 h-6 text-slate-900" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
<span className="text-[10px] font-medium text-slate-900">Booking</span>
</button>
<button className="tab-btn-3 flex flex-col items-center gap-1 py-2 px-4" data-tab="inbox">
<svg className="lucide lucide-message-circle w-6 h-6 text-slate-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Inbox</span>
</button>
<button className="tab-btn-3 flex flex-col items-center gap-1 py-2 px-4" data-tab="menu">
<svg className="lucide lucide-menu w-6 h-6 text-slate-400" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<span className="text-[10px] font-medium text-slate-400">Menu</span>
</button>
</div>
</div>
</section>
</div>
</main>




    </>
  );
}
