import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<nav className="bg-black/95 backdrop-blur-md text-white px-6 md:px-12 py-4 flex justify-between items-center sticky top-0 z-50 shadow-sm">
<div className="flex items-center gap-4">
<img alt="Logo" className="h-10 w-10 rounded-full border border-gray-700 object-cover" src="https://cdn.website.dish.co/media/b6/93/9717503/Mahrischer-Spatz-3B3DE0CF-4562-4D08-8AAF-89947326404B-jpeg.jpg"/>
</div>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-[#ffc107] transition-colors" href="#">MENU</a>
<a className="hover:text-[#ffc107] transition-colors" href="#">LOCATION</a>
<a className="hover:text-[#ffc107] transition-colors" href="#">OPENING TIMES</a>
<a className="hover:text-[#ffc107] transition-colors" href="#">PAYMENT OPTIONS</a>
<a className="hover:text-[#ffc107] transition-colors" href="#">SERVICES</a>
<a className="hover:text-[#ffc107] transition-colors" href="#">REVIEWS</a>
<a className="hover:text-[#ffc107] transition-colors" href="#">CONTACT</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block bg-[#ffc107] text-black px-6 py-2 rounded-md text-sm font-semibold hover:bg-amber-400 transition-colors shadow-sm">RESERVATION</button>
<div className="hidden sm:flex items-center gap-3 border-l border-gray-700 pl-4 ml-2">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i></a>
</div>
<div className="flex items-center gap-1 ml-4 cursor-pointer hover:text-[#ffc107] transition-colors text-sm font-medium">
<img alt="EN" className="w-5 h-5 rounded-sm" src="https://cdn.website.dish.co/static/20260409144919/static/img/flags/flags-iso/flat/32/GB.png"/>
<span>ENGLISH</span>
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<button className="lg:hidden ml-4 text-white"><i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i></button>
</div>
</nav>

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center text-center px-4 overflow-hidden">
<div className="absolute inset-0 bg-gray-900">
<img alt="Schnitzel" className="w-full h-full object-cover opacity-60" src="https://cdn.website.dish.co/media/e4/3f/8929709/Mahrischer-Spatz-IMG-6442-jpeg.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
</div>
<div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto mt-12">
<h1 className="text-[#ffc107] text-3xl md:text-5xl font-semibold tracking-tight mb-4 drop-shadow-sm">Where every flavor tells a story</h1>
<h2 className="font-['Pacifico'] text-white text-6xl md:text-8xl mb-8 drop-shadow-md">Mährischer Spatz</h2>
<p className="text-white text-lg md:text-xl font-medium mb-10 tracking-wide">Today we are open until 23:00</p>
<button className="bg-[#ffc107] text-black px-10 py-4 rounded-md text-base font-semibold hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg ring-1 ring-black/10">
                Reservation
            </button>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto text-center bg-white">
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-gray-900">Mährischer Spatz: RESTAURANT~BEER BAR</h3>
<p className="text-lg text-gray-600 mb-12 leading-relaxed">
            Welcome to Mährischer Spatz, situated in the beautiful city of Wien. 5 min from Prater. We're looking forward to hosting you as our guest! Be prepared to be captivated by our delicious selection of austrian cuisine. Experience awesome fast food, home made cuisine, local products, and traditional cuisine served by our friendly staff. Our delicious food are waiting to be tried by you. Enjoy tasty craft beer, cocktails and coffee in our comfortable setting with your meal. Our helpful servers are waiting to delight you with tasty lunch and dinner. We have nice beer garden, on top of our great service.
        </p>
<div className="w-16 h-[2px] bg-[#ffc107] mx-auto mb-12 rounded-full opacity-50"></div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6 text-gray-900">Indulge in Delectable Austrian Cuisine!</h3>
<p className="text-lg text-gray-600 leading-relaxed">
            Not in the mood to cook? Our takeaway service, brings delectable meals to your doorstep. We have great options available to enhance your experience. Easy accessibility is provided for the convenience of all our guests. Pets are also warmly welcomed at our establishment. With us, you can choose to pay with several payment options. Reserve your table by contacting us today!
        </p>
</section>

<section className="py-24 bg-gray-50/50 flex flex-col items-center border-y border-gray-100">
<div className="text-center mb-16 relative">
<span className="text-[#ffc107] text-4xl md:text-5xl font-semibold block tracking-tight">Our</span>
<span className="font-['Pacifico'] text-5xl md:text-6xl text-gray-900 block mt-2">menu</span>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#ffc107] rounded-full"></div>
</div>
<div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto px-6 w-full">
<a className="bg-[#ffc107] text-gray-900 flex items-center justify-center gap-3 py-4 px-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all w-full md:w-auto font-medium text-lg" href="#">
<span>Getränke Karte</span>
<i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
</a>
<a className="bg-[#ffc107] text-gray-900 flex items-center justify-center gap-3 py-4 px-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all w-full md:w-auto font-medium text-lg" href="#">
<span>Bier Menu</span>
<i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
</a>
<a className="bg-[#ffc107] text-gray-900 flex items-center justify-center gap-3 py-4 px-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all w-full md:w-auto font-medium text-lg" href="#">
<span>Speisekarte</span>
<i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
</a>
<a className="bg-[#ffc107] text-gray-900 flex items-center justify-center gap-3 py-4 px-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all w-full md:w-auto font-medium text-lg" href="#">
<span>Kids Menu</span>
<i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
</a>
<a className="bg-[#ffc107] text-gray-900 flex items-center justify-center gap-3 py-4 px-8 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all w-full md:w-auto font-medium text-lg" href="#">
<span>Mittags 13.04-17.04.</span>
<i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="relative py-32 flex items-center justify-center text-center overflow-hidden">
<div className="absolute inset-0 bg-gray-900">
<img alt="Background" className="w-full h-full object-cover opacity-40 mix-blend-overlay blur-[2px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
</div>
<div className="relative z-10">
<span className="text-[#ffc107] text-4xl md:text-5xl font-semibold block tracking-tight mb-2 drop-shadow-sm">Make your</span>
<span className="font-['Pacifico'] text-6xl md:text-7xl text-white block drop-shadow-md">reservation</span>
<div className="mt-12 flex items-center justify-center gap-3 text-white text-2xl font-medium bg-black/20 px-8 py-4 rounded-full backdrop-blur-sm border border-white/10">
<i className="w-6 h-6 text-[#ffc107]" data-lucide="phone" strokeWidth="1.5"></i>
<span className="tracking-wide">+4366493214922</span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto bg-white">
<div className="text-center mb-16 relative">
<span className="text-[#ffc107] text-4xl md:text-5xl font-semibold block tracking-tight">Our</span>
<span className="font-['Pacifico'] text-5xl md:text-6xl text-gray-900 block mt-2">opening times</span>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#ffc107] rounded-full"></div>
</div>
<div className="space-y-5 text-lg">
<div className="flex justify-between items-center border-b border-gray-100 pb-4">
<span className="font-semibold text-gray-900">Monday</span>
<span className="text-[#ffc107] font-medium bg-[#ffc107]/10 px-4 py-1 rounded-full">12:00 PM – 11:00 PM</span>
</div>
<div className="flex justify-between items-center border-b border-gray-100 pb-4">
<span className="font-semibold text-gray-900">Tuesday</span>
<span className="text-[#ffc107] font-medium bg-[#ffc107]/10 px-4 py-1 rounded-full">12:00 PM – 11:00 PM</span>
</div>
<div className="flex justify-between items-center border-b border-gray-100 pb-4">
<span className="font-semibold text-gray-900">Wednesday</span>
<span className="text-[#ffc107] font-medium bg-[#ffc107]/10 px-4 py-1 rounded-full">12:00 PM – 11:00 PM</span>
</div>
<div className="flex justify-between items-center border-b border-gray-100 pb-4">
<span className="font-semibold text-gray-900">Thursday</span>
<span className="text-[#ffc107] font-medium bg-[#ffc107]/10 px-4 py-1 rounded-full">12:00 PM – 11:00 PM</span>
</div>
<div className="flex justify-between items-center border-b border-gray-100 pb-4">
<span className="font-semibold text-gray-900">Friday</span>
<span className="text-[#ffc107] font-medium bg-[#ffc107]/10 px-4 py-1 rounded-full">12:00 PM – 12:00 AM</span>
</div>
<div className="flex justify-between items-center border-b border-gray-100 pb-4">
<span className="font-semibold text-gray-900">Saturday</span>
<span className="text-[#ffc107] font-medium bg-[#ffc107]/10 px-4 py-1 rounded-full">12:00 PM – 12:00 AM</span>
</div>
<div className="flex justify-between items-center pb-2">
<span className="font-semibold text-gray-900">Sunday</span>
<span className="text-[#ffc107] font-medium bg-[#ffc107]/10 px-4 py-1 rounded-full">12:00 PM – 11:00 PM</span>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 relative overflow-hidden">
<div className="absolute inset-0">
<img alt="Background" className="w-full h-full object-cover opacity-20 blur-sm mix-blend-luminosity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
<div className="mb-20 relative">
<span className="text-[#ffc107] text-4xl md:text-5xl font-semibold block tracking-tight">Our</span>
<span className="font-['Pacifico'] text-5xl md:text-6xl text-white block mt-2">services</span>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-white rounded-full"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-y-12 gap-x-8">
<div className="flex flex-col items-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 text-[#ffc107] shadow-xl group-hover:scale-105 transition-transform group-hover:bg-[#ffc107] group-hover:text-white duration-300">
<i className="w-10 h-10" data-lucide="accessibility" strokeWidth="1.5"></i>
</div>
<span className="text-zinc-300 text-lg font-medium group-hover:text-white transition-colors">Accessible</span>
</div>
<div className="flex flex-col items-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 text-[#ffc107] shadow-xl group-hover:scale-105 transition-transform group-hover:bg-[#ffc107] group-hover:text-white duration-300">
<i className="w-10 h-10" data-lucide="utensils" strokeWidth="1.5"></i>
</div>
<span className="text-zinc-300 text-lg font-medium group-hover:text-white transition-colors">Buffet</span>
</div>
<div className="flex flex-col items-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 text-[#ffc107] shadow-xl group-hover:scale-105 transition-transform group-hover:bg-[#ffc107] group-hover:text-white duration-300">
<i className="w-10 h-10" data-lucide="concierge-bell" strokeWidth="1.5"></i>
</div>
<span className="text-zinc-300 text-lg font-medium group-hover:text-white transition-colors">Catering</span>
</div>
<div className="flex flex-col items-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 text-[#ffc107] shadow-xl group-hover:scale-105 transition-transform group-hover:bg-[#ffc107] group-hover:text-white duration-300">
<i className="w-10 h-10" data-lucide="wind" strokeWidth="1.5"></i>
</div>
<span className="text-zinc-300 text-lg font-medium group-hover:text-white transition-colors">Air conditioning</span>
</div>
<div className="flex flex-col items-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 text-[#ffc107] shadow-xl group-hover:scale-105 transition-transform group-hover:bg-[#ffc107] group-hover:text-white duration-300">
<i className="w-10 h-10" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<span className="text-zinc-300 text-lg font-medium group-hover:text-white transition-colors">Outside seating</span>
</div>
<div className="flex flex-col items-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 text-[#ffc107] shadow-xl group-hover:scale-105 transition-transform group-hover:bg-[#ffc107] group-hover:text-white duration-300">
<i className="w-10 h-10" data-lucide="car-front" strokeWidth="1.5"></i>
</div>
<span className="text-zinc-300 text-lg font-medium group-hover:text-white transition-colors">Self parking</span>
</div>
<div className="flex flex-col items-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 text-[#ffc107] shadow-xl group-hover:scale-105 transition-transform group-hover:bg-[#ffc107] group-hover:text-white duration-300">
<i className="w-10 h-10" data-lucide="glass-water" strokeWidth="1.5"></i>
</div>
<span className="text-zinc-300 text-lg font-medium group-hover:text-white transition-colors">Private events</span>
</div>
<div className="flex flex-col items-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 text-[#ffc107] shadow-xl group-hover:scale-105 transition-transform group-hover:bg-[#ffc107] group-hover:text-white duration-300">
<i className="w-10 h-10" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</div>
<span className="text-zinc-300 text-lg font-medium group-hover:text-white transition-colors">Takeaway</span>
</div>
<div className="flex flex-col items-center group">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 text-[#ffc107] shadow-xl group-hover:scale-105 transition-transform group-hover:bg-[#ffc107] group-hover:text-white duration-300">
<i className="w-10 h-10" data-lucide="users" strokeWidth="1.5"></i>
</div>
<span className="text-zinc-300 text-lg font-medium group-hover:text-white transition-colors">Wedding receptions</span>
</div>
<div className="flex flex-col items-center group lg:col-start-auto md:col-start-2">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 text-[#ffc107] shadow-xl group-hover:scale-105 transition-transform group-hover:bg-[#ffc107] group-hover:text-white duration-300">
<i className="w-10 h-10" data-lucide="wifi" strokeWidth="1.5"></i>
</div>
<span className="text-zinc-300 text-lg font-medium group-hover:text-white transition-colors">Free Wifi</span>
</div>
<div className="flex flex-col items-center group lg:col-start-auto md:col-start-3">
<div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-5 text-[#ffc107] shadow-xl group-hover:scale-105 transition-transform group-hover:bg-[#ffc107] group-hover:text-white duration-300">
<i className="w-10 h-10" data-lucide="paw-print" strokeWidth="1.5"></i>
</div>
<span className="text-zinc-300 text-lg font-medium group-hover:text-white transition-colors">Pets allowed</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white max-w-6xl mx-auto px-6">
<div className="text-center mb-20 relative">
<span className="text-[#ffc107] text-4xl md:text-5xl font-semibold block tracking-tight">Our</span>
<span className="font-['Pacifico'] text-5xl md:text-6xl text-gray-900 block mt-2">recent reviews</span>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#ffc107] rounded-full"></div>
</div>
<div className="flex flex-col lg:flex-row gap-16 items-start">

<div className="lg:w-1/3 flex flex-col items-center lg:items-start text-center lg:text-left w-full">
<span className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">Average Rating</span>
<div className="text-7xl font-semibold tracking-tight text-gray-900 mb-8 flex items-baseline gap-1">
                    4.6<span className="text-3xl text-gray-300">/5</span>
</div>
<div className="space-y-4 w-full max-w-sm">
<div className="flex justify-between items-center text-lg">
<span className="font-medium text-gray-700">Service</span>
<div className="flex text-[#ffc107] gap-0.5">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star-half" strokeWidth="0"></i>
</div>
</div>
<div className="flex justify-between items-center text-lg">
<span className="font-medium text-gray-700">Food and Beverage</span>
<div className="flex text-[#ffc107] gap-0.5">
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
<i className="w-5 h-5 fill-current" data-lucide="star" strokeWidth="0"></i>
</div>
</div>
</div>
</div>

<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
<div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow bg-gray-50 flex flex-col h-full">
<h4 className="font-semibold text-xl text-gray-900 mb-1">Anonymous</h4>
<p className="text-sm text-gray-400 mb-6">16/09/2025</p>
<p className="text-gray-600 text-lg leading-relaxed flex-grow">"Very interesting beer and food, would repeat the experience 100% "</p>
</div>
<div className="border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow bg-gray-50 flex flex-col h-full">
<h4 className="font-semibold text-xl text-gray-900 mb-1">Karl L.</h4>
<p className="text-sm text-gray-400 mb-6">28/05/2025</p>
<p className="text-gray-600 text-lg leading-relaxed flex-grow">"Hatten eine Feier mit 12 Personen. Alles perfekt geklappt. Essen sehr gut und die Preise auch und das Service war freundlich und aufmerksam aber nicht aufdringlich! Das Lokal empfehle ich uneingeschränkt weiter!!"</p>
</div>
</div>
</div>
<div className="text-center mt-16">
<a className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-[#ffc107] transition-colors text-lg group" href="#">
                See more reviews
                <i className="w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="py-20 text-center max-w-5xl mx-auto px-6 border-t border-gray-100">
<div className="mb-16">
<span className="text-[#ffc107] text-3xl font-semibold block tracking-tight">Available</span>
<span className="font-['Pacifico'] text-4xl text-gray-900 block mt-1">payment options</span>
</div>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 text-gray-400 items-center">
<div className="flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<i className="w-10 h-10" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">AMEX</span>
</div>
<div className="flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<i className="w-10 h-10" data-lucide="banknote" strokeWidth="1.5"></i>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Cash</span>
</div>
<div className="flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default text-center">
<i className="w-10 h-10" data-lucide="contactless-payment" strokeWidth="1.5"></i>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500 max-w-[80px]">Contactless payment</span>
</div>
<div className="flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<i className="w-10 h-10" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Mastercard</span>
</div>
<div className="flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<i className="w-10 h-10" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">VISA</span>
</div>
<div className="flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<i className="w-10 h-10" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Debit Card</span>
</div>
<div className="flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<i className="w-10 h-10" data-lucide="smartphone-nfc" strokeWidth="1.5"></i>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Apple Pay</span>
</div>
<div className="flex flex-col items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
<i className="w-10 h-10" data-lucide="credit-card" strokeWidth="1.5"></i>
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Maestro</span>
</div>
</div>
</section>

<section className="relative py-40 bg-gray-100 border-y border-gray-200 flex flex-col justify-between overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-30">
<img alt="Map" className="w-full h-full object-cover max-w-none" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
<button className="bg-[#ffc107] text-gray-900 font-semibold px-10 py-4 rounded-md shadow-md hover:bg-amber-400 hover:shadow-lg transition-all mb-6 text-lg">
                Show Map
            </button>
<p className="text-base text-gray-500 font-medium">Your IP address will be sent to Google Maps.</p>
</div>
<div className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-lg z-20 border border-gray-100">
<i className="w-6 h-6 text-[#ffc107] fill-current" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
</section>
<div className="bg-white py-12 text-center">
<p className="text-xl text-gray-700 font-medium tracking-wide">Ybbsstraße 25, 1020 Wien, Austria</p>
</div>

<section className="py-24 bg-gray-50 relative">
<div className="text-center mb-20 relative">
<span className="text-[#ffc107] text-4xl md:text-5xl font-semibold block tracking-tight">Everything</span>
<span className="font-['Pacifico'] text-5xl md:text-6xl text-gray-900 block mt-2">at a glance</span>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-[3px] bg-[#ffc107] rounded-full"></div>
</div>
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
<div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center group hover:border-[#ffc107]/30 transition-colors">
<div className="bg-gray-50 p-4 rounded-full mb-6 group-hover:bg-[#ffc107]/10 transition-colors">
<i className="text-[#ffc107] w-8 h-8" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h5 className="font-semibold text-gray-900 mb-3 text-xl">Find us</h5>
<p className="text-[#ffc107] text-lg font-medium leading-relaxed">Ybbsstraße 25<br/>1020 Wien<br/>Austria</p>
</div>
<div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center group hover:border-[#ffc107]/30 transition-colors">
<div className="bg-gray-50 p-4 rounded-full mb-6 group-hover:bg-[#ffc107]/10 transition-colors">
<i className="text-[#ffc107] w-8 h-8" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<h5 className="font-semibold text-gray-900 mb-3 text-xl">E-mail us</h5>
<a className="text-[#ffc107] text-lg font-medium hover:underline underline-offset-4 break-all" href="mailto:office@zummaehrischenspatzen.at">office@zummaehrischenspatzen.at</a>
</div>
</div>
<div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm border border-gray-100">
<div className="flex flex-col items-center mb-10 text-gray-900">
<div className="bg-[#ffc107] p-3 rounded-xl shadow-sm mb-4">
<i className="w-6 h-6 text-black" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<p className="text-xl font-semibold tracking-tight">Send us your message</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<input className="bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-4 w-full focus:outline-none focus:ring-2 focus:ring-[#ffc107]/50 focus:border-[#ffc107] transition-all text-lg placeholder:text-gray-400" placeholder="Your name" type="text"/>
<input className="bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-4 w-full focus:outline-none focus:ring-2 focus:ring-[#ffc107]/50 focus:border-[#ffc107] transition-all text-lg placeholder:text-gray-400" placeholder="Your email" type="email"/>
<input className="bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-4 w-full focus:outline-none focus:ring-2 focus:ring-[#ffc107]/50 focus:border-[#ffc107] transition-all text-lg placeholder:text-gray-400" placeholder="Your phone" type="tel"/>
</div>
<input className="bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-4 w-full focus:outline-none focus:ring-2 focus:ring-[#ffc107]/50 focus:border-[#ffc107] transition-all text-lg placeholder:text-gray-400" placeholder="Subject" type="text"/>
<div className="relative">
<textarea className="bg-gray-50/50 border border-gray-200 rounded-xl px-5 py-4 w-full focus:outline-none focus:ring-2 focus:ring-[#ffc107]/50 focus:border-[#ffc107] transition-all text-lg placeholder:text-gray-400 resize-none" placeholder="Your message" rows="5"></textarea>
<div className="absolute bottom-4 right-4 text-sm text-gray-400 font-medium">0 / 500</div>
</div>
<div className="text-center pt-4">
<button className="bg-[#ffc107] text-gray-900 font-semibold px-16 py-4 rounded-xl shadow-md hover:bg-amber-400 hover:-translate-y-0.5 transition-all text-lg w-full md:w-auto" type="submit">
                            Send
                        </button>
</div>
</form>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-zinc-400 py-16 text-center border-t border-zinc-800">
<div className="flex justify-center gap-8 mb-12">
<a className="bg-zinc-800 p-3 rounded-full hover:bg-[#ffc107] hover:text-black transition-colors shadow-sm" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="bg-zinc-800 p-3 rounded-full hover:bg-[#ffc107] hover:text-black transition-colors shadow-sm" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 font-medium text-sm tracking-widest uppercase">
<a className="hover:text-white transition-colors" href="#">Imprint</a>
<a className="hover:text-white transition-colors" href="#">Data Privacy</a>
<a className="hover:text-white transition-colors" href="#">Change Cookie Settings</a>
</div>
<p className="text-[#ffc107] text-sm tracking-wide font-medium">Designed by DISH Digital Solutions GmbH. All rights reserved.</p>
</footer>


    </>
  );
}
