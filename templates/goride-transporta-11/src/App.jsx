import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    const quickBookingForm = document.getElementById('quickBookingForm');
    const quickBookingMessage = document.getElementById('quickBookingMessage');

    quickBookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const pickup = document.getElementById('pickup').value.trim();
      const dropoff = document.getElementById('dropoff').value.trim();
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;
      const service = document.getElementById('serviceType').value;

      if (!pickup || !dropoff || !date || !time) {
        quickBookingMessage.classList.remove('hidden');
        quickBookingMessage.classList.remove('bg-emerald-50', 'text-emerald-700');
        quickBookingMessage.classList.add('bg-rose-50', 'text-rose-700');
        quickBookingMessage.textContent = 'Please fill in pickup, drop-off, date, and time.';
        return;
      }

      quickBookingMessage.classList.remove('hidden', 'bg-rose-50', 'text-rose-700');
      quickBookingMessage.classList.add('bg-emerald-50', 'text-emerald-700');
      quickBookingMessage.textContent = `Availability checked for ${service} from ${pickup} to ${dropoff}. Please continue below to confirm your booking.`;

      document.getElementById('bookPickup').value = pickup;
      document.getElementById('bookDropoff').value = dropoff;
      document.getElementById('bookDate').value = date;
      document.getElementById('bookTime').value = time;
      document.getElementById('bookService').value = service;
      updateSummary();
      window.location.hash = 'booking';
    });

    const summaryFields = ['bookPickup', 'bookDropoff', 'bookDate', 'bookTime', 'bookService', 'bookCar'];
    summaryFields.forEach(id => {
      document.getElementById(id).addEventListener('input', updateSummary);
      document.getElementById(id).addEventListener('change', updateSummary);
    });

    function updateSummary() {
      const pickup = document.getElementById('bookPickup').value.trim();
      const dropoff = document.getElementById('bookDropoff').value.trim();
      const date = document.getElementById('bookDate').value;
      const time = document.getElementById('bookTime').value;
      const service = document.getElementById('bookService').value;
      const car = document.getElementById('bookCar').value;

      document.getElementById('summaryPickup').textContent = pickup || '—';
      document.getElementById('summaryDropoff').textContent = dropoff || '—';
      document.getElementById('summaryDateTime').textContent = (date || time) ? `${date || '—'} ${time || ''}`.trim() : '—';
      document.getElementById('summaryService').textContent = service;
      document.getElementById('summaryCar').textContent = car;
    }

    const bookingForm = document.getElementById('bookingForm');
    const bookingMessage = document.getElementById('bookingMessage');

    bookingForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const required = [
        'bookPickup',
        'bookDropoff',
        'bookDate',
        'bookTime',
        'bookName',
        'bookPhone',
        'bookEmail'
      ];

      const isValid = required.every(id => document.getElementById(id).value.trim() !== '');

      if (!isValid) {
        bookingMessage.classList.remove('hidden');
        bookingMessage.classList.remove('bg-emerald-50', 'text-emerald-700');
        bookingMessage.classList.add('bg-rose-50', 'text-rose-700');
        bookingMessage.textContent = 'Please complete all required booking details before confirming.';
        return;
      }

      bookingMessage.classList.remove('hidden', 'bg-rose-50', 'text-rose-700');
      bookingMessage.classList.add('bg-emerald-50', 'text-emerald-700');
      bookingMessage.textContent = 'Your booking request has been submitted successfully. Our team will contact you shortly to confirm your ride.';
      bookingForm.reset();
      updateSummary();
    });

    const contactForm = document.getElementById('contactForm');
    const contactMessage = document.getElementById('contactMessage');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('contactName').value.trim();
      const phone = document.getElementById('contactPhone').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessageInput').value.trim();

      if (!name || !phone || !email || !message) {
        contactMessage.classList.remove('hidden');
        contactMessage.classList.remove('bg-emerald-50', 'text-emerald-700');
        contactMessage.classList.add('bg-rose-50', 'text-rose-700');
        contactMessage.textContent = 'Please fill in all contact form fields.';
        return;
      }

      contactMessage.classList.remove('hidden', 'bg-rose-50', 'text-rose-700');
      contactMessage.classList.add('bg-emerald-50', 'text-emerald-700');
      contactMessage.textContent = 'Thanks for reaching out. We have received your message and will get back to you soon.';
      contactForm.reset();
    });

    updateSummary();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen">
<header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="text-lg font-semibold tracking-tight text-slate-900" href="#home">GORIDE</a>
<nav className="hidden items-center gap-6 md:flex">
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#fleet">Fleet</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#safety">Drivers &amp; Safety</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#booking">Booking</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 transition hover:text-slate-900" href="#contact">Contact</a>
</nav>
<a className="hidden rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 md:inline-flex" href="#booking">Book Your Ride</a>
<button className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-700 md:hidden" id="menuBtn">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" width="20"></iconify-icon>
</button>
</div>
<div className="hidden border-t border-slate-200 py-4 md:hidden" id="mobileMenu">
<div className="flex flex-col gap-3">
<a className="text-sm font-medium text-slate-700" href="#home">Home</a>
<a className="text-sm font-medium text-slate-700" href="#services">Services</a>
<a className="text-sm font-medium text-slate-700" href="#fleet">Fleet</a>
<a className="text-sm font-medium text-slate-700" href="#safety">Drivers &amp; Safety</a>
<a className="text-sm font-medium text-slate-700" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-slate-700" href="#booking">Booking</a>
<a className="text-sm font-medium text-slate-700" href="#about">About</a>
<a className="text-sm font-medium text-slate-700" href="#contact">Contact</a>
</div>
</div>
</div>
</header>
<main className="" id="home">
<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>
<div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
<div className="flex flex-col justify-center">
<div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Available 24/7 across major routes
            </div>
<h1 className="max-w-xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Reliable Car Hire Across Bangladesh
            </h1>
<p className="mt-5 max-w-xl text-base font-normal leading-7 text-slate-600 sm:text-lg">
              Airport transfers, city rides, and long-distance trips — all in one place.
            </p>
<div className="mt-8 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800" href="#booking">
                Book Your Ride
              </a>
<a className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900" href="#services">
                Explore Services
              </a>
</div>
<div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
<div className="rounded-2xl border border-slate-200 bg-white p-4">
<div className="text-lg font-semibold tracking-tight text-slate-950">24/7</div>
<div className="mt-1 text-xs font-medium text-slate-500">Support</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4">
<div className="text-lg font-semibold tracking-tight text-slate-950">Verified</div>
<div className="mt-1 text-xs font-medium text-slate-500">Drivers</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4">
<div className="text-lg font-semibold tracking-tight text-slate-950">Clean</div>
<div className="mt-1 text-xs font-medium text-slate-500">Vehicles</div>
</div>
<div className="rounded-2xl border border-slate-200 bg-white p-4">
<div className="text-lg font-semibold tracking-tight text-slate-950">Fair</div>
<div className="mt-1 text-xs font-medium text-slate-500">Pricing</div>
</div>
</div>
</div>
<div className="lg:pl-8">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl font-semibold text-slate-950">Quick Booking</h2>
<p className="mt-1 text-sm font-normal text-slate-500">Reserve a ride in a few steps</p>
</div>
<div className="rounded-full bg-slate-100 p-3">
<iconify-icon height="22" icon="solar:map-point-wave-linear" style={{color: '#0f172a'}} width="22"></iconify-icon>
</div>
</div>
<form className="mt-6 grid gap-4" id="quickBookingForm">
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Pickup location</label>
<input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400" id="pickup" placeholder="e.g. Hazrat শাহজালাল Airport, Dhaka" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Drop-off location</label>
<input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400" id="dropoff" placeholder="e.g. Gulshan, Dhaka" type="text"/>
</div>
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Date</label>
<input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:border-slate-400" id="date" type="date"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Time</label>
<input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-normal text-slate-900 outline-none transition focus:border-slate-400" id="time" type="time"/>
</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Service type</label>
<div className="relative">
<select className="w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 pr-10 text-sm font-normal text-slate-900 outline-none transition focus:border-slate-400" id="serviceType">
<option>Airport Transfer</option>
<option>City Ride</option>
<option>Long Trip</option>
<option>Hourly Rental</option>
<option>Daily Rental</option>
</select>
<iconify-icon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
<button className="mt-2 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800" type="submit">
                  Check Availability
                </button>
<p className="hidden rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700" id="quickBookingMessage"></p>
</form>
</div>
</div>
</div>
</section>
<section className="border-y border-slate-200 bg-slate-50">
<div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:px-6 lg:grid-cols-4 lg:px-8">
<div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
<div className="flex items-start gap-3">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="20" icon="solar:airplane-takeoff-linear" style={{color: '#0f172a'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Airport Transfer</h3>
<p className="mt-1 text-xs font-normal leading-5 text-slate-600">Reliable pickup and drop for all major airports.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
<div className="flex items-start gap-3">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="20" icon="solar:streets-map-point-linear" style={{color: '#0f172a'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">City Ride</h3>
<p className="mt-1 text-xs font-normal leading-5 text-slate-600">Quick and convenient travel within the city.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
<div className="flex items-start gap-3">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="20" icon="solar:route-linear" style={{color: '#0f172a'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Long Trip</h3>
<p className="mt-1 text-xs font-normal leading-5 text-slate-600">Comfortable intercity travel across Bangladesh.</p>
</div>
</div>
</div>
<div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
<div className="flex items-start gap-3">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="20" icon="solar:clock-circle-linear" style={{color: '#0f172a'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900">Hourly Rental</h3>
<p className="mt-1 text-xs font-normal leading-5 text-slate-600">Flexible rides for meetings, errands, or events.</p>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24" id="services">
<div className="max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Services</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Transport solutions for every kind of trip</h2>
<p className="leading-6 sm:text-base text-sm font-normal text-slate-600 mt-4">
            Built for travelers, business professionals, families, and tourists looking for dependable transport across Bangladesh.
          </p>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-2">
<div className="group rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-8">
<div className="flex items-center gap-3">
<div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
<iconify-icon height="22" icon="solar:airplane-takeoff-linear" style={{color: '#0f172a'}} width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-950">Airport Transfer</h3>
</div>
<p className="mt-4 text-sm font-normal leading-6 text-slate-600">
              On-time pickup and drop at all major airports with professional drivers and clean vehicles.
            </p>
</div>
<div className="group rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-8">
<div className="flex items-center gap-3">
<div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
<iconify-icon height="22" icon="solar:streets-map-point-linear" style={{color: '#0f172a'}} width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-950">City Ride</h3>
</div>
<p className="mt-4 text-sm font-normal leading-6 text-slate-600">
              Quick and convenient rides within the city for work, errands, shopping, or local travel.
            </p>
</div>
<div className="group rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-8">
<div className="flex items-center gap-3">
<div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
<iconify-icon height="22" icon="solar:route-linear" style={{color: '#0f172a'}} width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-950">Long Trips</h3>
</div>
<p className="mt-4 text-sm font-normal leading-6 text-slate-600">
              Comfortable travel between cities like Dhaka, Chittagong, Sylhet, and more with reliable long-distance service.
            </p>
</div>
<div className="group rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-8">
<div className="flex items-center gap-3">
<div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
<iconify-icon height="22" icon="solar:clock-circle-linear" style={{color: '#0f172a'}} width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-950">Hourly Rental</h3>
</div>
<p className="mt-4 text-sm font-normal leading-6 text-slate-600">
              Flexible booking for meetings, errands, or events when you need a car available on your schedule.
            </p>
</div>
<div className="group rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-8 lg:col-span-2">
<div className="flex items-center gap-3">
<div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
<iconify-icon height="22" icon="solar:calendar-linear" style={{color: '#0f172a'}} width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-950">Daily Rental</h3>
</div>
<p className="mt-4 max-w-3xl text-sm font-normal leading-6 text-slate-600">
              Full-day hire for travel or business needs, designed for convenience, comfort, and reliable availability throughout the day.
            </p>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800" href="#booking">
            Book Now
          </a>
</div>
</section>
<section className="bg-slate-50 py-16 lg:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Why Choose Us</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Dependable service with comfort built in</h2>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50">
<iconify-icon height="22" icon="solar:user-check-linear" style={{color: '#047857'}} width="22"></iconify-icon>
</div>
<h3 className="mt-4 text-base font-semibold text-slate-950">Professional drivers</h3>
<p className="mt-2 text-sm font-normal leading-6 text-slate-600">Experienced drivers trained for city and highway travel.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50">
<iconify-icon height="22" icon="solar:stars-line-duotone" style={{color: '#0369a1'}} width="22"></iconify-icon>
</div>
<h3 className="mt-4 text-base font-semibold text-slate-950">Clean vehicles</h3>
<p className="mt-2 text-sm font-normal leading-6 text-slate-600">Well-maintained cars prepared for comfort and cleanliness.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50">
<iconify-icon height="22" icon="solar:wallet-money-linear" style={{color: '#b45309'}} width="22"></iconify-icon>
</div>
<h3 className="mt-4 text-base font-semibold text-slate-950">Transparent pricing</h3>
<p className="mt-2 text-sm font-normal leading-6 text-slate-600">Clear package ranges with no hidden surprises.</p>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50">
<iconify-icon height="22" icon="solar:shield-check-linear" style={{color: '#7c3aed'}} width="22"></iconify-icon>
</div>
<h3 className="mt-4 text-base font-semibold text-slate-950">24/7 availability</h3>
<p className="mt-2 text-sm font-normal leading-6 text-slate-600">Support and bookings available day and night.</p>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24" id="fleet">
<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
<div className="max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Fleet</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Choose the right car for your journey</h2>
<p className="mt-4 text-sm font-normal leading-6 text-slate-600 sm:text-base">
              Clear options for solo rides, business travel, family trips, and group transport.
            </p>
</div>
<a className="inline-flex w-fit items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900" href="#booking">
            Reserve a Car
          </a>
</div>
<div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
<div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 p-6">
<div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60">
<span className="text-sm font-medium text-slate-500">Toyota Axio</span>
</div>
</div>
<div className="p-6">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-lg font-semibold text-slate-950">Economy Cars</h3>
<p className="mt-1 text-sm font-normal text-slate-500">Example: Toyota Axio</p>
</div>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Budget</span>
</div>
<div className="mt-5 space-y-3 text-sm text-slate-600">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span>Passenger capacity: 4</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:snowflake-linear" width="18"></iconify-icon>
<span>AC available</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:case-round-linear" width="18"></iconify-icon>
<span>Best for: city rides, solo travel, couples</span>
</div>
</div>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
<div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 p-6">
<div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60">
<span className="text-sm font-medium text-slate-500">Toyota Premio</span>
</div>
</div>
<div className="p-6">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-lg font-semibold text-slate-950">Sedans</h3>
<p className="mt-1 text-sm font-normal text-slate-500">Example: Toyota Premio</p>
</div>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Comfort</span>
</div>
<div className="mt-5 space-y-3 text-sm text-slate-600">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span>Passenger capacity: 4</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:snowflake-linear" width="18"></iconify-icon>
<span>AC available</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:case-round-linear" width="18"></iconify-icon>
<span>Best for: business, airport transfer, couples</span>
</div>
</div>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
<div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 p-6">
<div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60">
<span className="text-sm font-medium text-slate-500">Toyota Prado</span>
</div>
</div>
<div className="p-6">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-lg font-semibold text-slate-950">SUVs</h3>
<p className="mt-1 text-sm font-normal text-slate-500">Example: Toyota Prado</p>
</div>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Premium</span>
</div>
<div className="mt-5 space-y-3 text-sm text-slate-600">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span>Passenger capacity: 6-7</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:snowflake-linear" width="18"></iconify-icon>
<span>AC available</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:case-round-linear" width="18"></iconify-icon>
<span>Best for: family travel, tourism, long trips</span>
</div>
</div>
</div>
</div>
<div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
<div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 p-6">
<div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white/60">
<span className="text-sm font-medium text-slate-500">Hiace</span>
</div>
</div>
<div className="p-6">
<div className="flex items-start justify-between gap-3">
<div>
<h3 className="text-lg font-semibold text-slate-950">Microbuses</h3>
<p className="mt-1 text-sm font-normal text-slate-500">Example: Hiace</p>
</div>
<span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Group</span>
</div>
<div className="mt-5 space-y-3 text-sm text-slate-600">
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
<span>Passenger capacity: 10-14</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:snowflake-linear" width="18"></iconify-icon>
<span>AC / Non-AC options</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon height="18" icon="solar:case-round-linear" width="18"></iconify-icon>
<span>Best for: group travel, family tours, events</span>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-50 py-16 lg:py-24" id="safety">
<div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Drivers &amp; Safety</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Your safety and comfort are our top priorities</h2>
<p className="mt-4 text-sm font-normal leading-6 text-slate-600 sm:text-base">
              We focus on secure, professional, and dependable travel for every passenger.
            </p>
</div>
<div className="grid gap-4">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="22" icon="solar:user-check-linear" style={{color: '#0f172a'}} width="22"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-slate-950">Verified and trained drivers</h3>
<p className="mt-2 text-sm font-normal leading-6 text-slate-600">Each driver is selected and trained to deliver professional service on every ride.</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="22" icon="solar:shield-user-linear" style={{color: '#0f172a'}} width="22"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-slate-950">Background-checked staff</h3>
<p className="mt-2 text-sm font-normal leading-6 text-slate-600">Our team is screened carefully to help ensure peace of mind for all passengers.</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="22" icon="solar:road-circle-linear" style={{color: '#0f172a'}} width="22"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-slate-950">Experienced in city and highway driving</h3>
<p className="mt-2 text-sm font-normal leading-6 text-slate-600">Drivers are prepared for traffic conditions, airport routes, and intercity journeys.</p>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="flex items-start gap-4">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="22" icon="solar:shield-check-linear" style={{color: '#0f172a'}} width="22"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold text-slate-950">Safety-first approach</h3>
<p className="mt-2 text-sm font-normal leading-6 text-slate-600">We prioritize safe driving practices, reliable scheduling, and comfortable travel conditions.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24" id="pricing">
<div className="max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Pricing &amp; Packages</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Simple package ranges for common journeys</h2>
<p className="mt-4 text-sm font-normal leading-6 text-slate-600 sm:text-base">
            Final fare may vary based on distance and time.
          </p>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="text-base font-semibold text-slate-950">Airport Transfer</h3>
<p className="mt-2 text-sm font-normal text-slate-600">Fixed ranges for pickup and drop service.</p>
<div className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">৳1500–৳3500</div>
<ul className="mt-5 space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span>Dhaka airport routes</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span>Pickup or drop available</span></li>
</ul>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="text-base font-semibold text-slate-950">Hourly Rental</h3>
<p className="mt-2 text-sm font-normal text-slate-600">Flexible rates for short-term use.</p>
<div className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">৳800–৳1500<span className="ml-1 text-sm font-medium text-slate-500">/hour</span></div>
<ul className="mt-5 space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span>Ideal for meetings and errands</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span>Vehicle type affects final rate</span></li>
</ul>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="text-base font-semibold text-slate-950">Daily Rental</h3>
<p className="mt-2 text-sm font-normal text-slate-600">Full-day booking packages.</p>
<div className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">৳6500–৳14000<span className="ml-1 text-sm font-medium text-slate-500">/day</span></div>
<ul className="mt-5 space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span>Useful for business and family travel</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span>Economy to premium options</span></li>
</ul>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="text-base font-semibold text-slate-950">Long Trip</h3>
<p className="mt-2 text-sm font-normal text-slate-600">Estimated intercity pricing.</p>
<div className="mt-6 text-2xl font-semibold tracking-tight text-slate-950">৳9000–৳28000</div>
<ul className="mt-5 space-y-3 text-sm text-slate-600">
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span>Dhaka, Chittagong, Sylhet and more</span></li>
<li className="flex gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400"></span><span>Depends on route, time, and car type</span></li>
</ul>
</div>
</div>
</section>
<section className="bg-slate-50 py-16 lg:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Testimonials</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Trusted by travelers, families, and professionals</h2>
</div>
<div className="mt-10 grid gap-6 lg:grid-cols-3">
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<p className="text-sm font-normal leading-6 text-slate-600">“Very smooth airport pickup in Dhaka. The driver arrived on time and the car was clean and comfortable.”</p>
<div className="mt-5">
<div className="text-sm font-semibold text-slate-900">Rahim Uddin</div>
<div className="text-xs font-medium text-slate-500">Business Traveler</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<p className="text-sm font-normal leading-6 text-slate-600">“We booked a long trip for family travel and the experience was safe, easy, and reliable throughout the journey.”</p>
<div className="mt-5">
<div className="text-sm font-semibold text-slate-900">Nusrat Jahan</div>
<div className="text-xs font-medium text-slate-500">Family Customer</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<p className="text-sm font-normal leading-6 text-slate-600">“Great service for local city meetings. Booking was simple and pricing was clear from the beginning.”</p>
<div className="mt-5">
<div className="text-sm font-semibold text-slate-900">Daniel R.</div>
<div className="text-xs font-medium text-slate-500">International Visitor</div>
</div>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24" id="booking">
<div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Booking</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Confirm your ride</h2>
<p className="mt-4 text-sm font-normal leading-6 text-slate-600 sm:text-base">
              Share your trip details and we’ll help arrange the right car and service for your journey.
            </p>
<form className="mt-8 grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" id="bookingForm">
<div className="grid gap-4 sm:grid-cols-2">
<div className="sm:col-span-2">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Pickup location</label>
<input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400" id="bookPickup" placeholder="Enter pickup point" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Drop-off location</label>
<input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400" id="bookDropoff" placeholder="Enter destination" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Date</label>
<input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400" id="bookDate" type="date"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Time</label>
<input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400" id="bookTime" type="time"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Service type</label>
<div className="relative">
<select className="w-full appearance-none rounded-2xl border border-slate-200 px-4 py-3 pr-10 text-sm outline-none transition focus:border-slate-400" id="bookService">
<option>Airport Transfer</option>
<option>City Ride</option>
<option>Long Trip</option>
<option>Hourly Rental</option>
<option>Daily Rental</option>
</select>
<iconify-icon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Car type</label>
<div className="relative">
<select className="w-full appearance-none rounded-2xl border border-slate-200 px-4 py-3 pr-10 text-sm outline-none transition focus:border-slate-400" id="bookCar">
<option>Economy Car</option>
<option>Sedan</option>
<option>SUV</option>
<option>Microbus</option>
</select>
<iconify-icon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400" height="18" icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Full name</label>
<input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400" id="bookName" placeholder="Your name" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Phone number</label>
<input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400" id="bookPhone" placeholder="+8801XXXXXXXXX" type="tel"/>
</div>
<div className="sm:col-span-2">
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Email</label>
<input className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400" id="bookEmail" placeholder="you@example.com" type="email"/>
</div>
</div>
<div className="mt-2 flex flex-col gap-3 sm:flex-row">
<button className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800" type="submit">
                  Confirm Booking
                </button>
<a className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900" href="tel:+8801700000000">
                  Call Now
                </a>
<a className="inline-flex items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-700 transition hover:bg-emerald-100" href="https://wa.me/8801700000000" target="_blank">
                  WhatsApp Booking
                </a>
</div>
<p className="hidden rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700" id="bookingMessage"></p>
</form>
</div>
<div className="space-y-6">
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
<h3 className="text-base font-semibold text-slate-950">Booking summary</h3>
<div className="mt-5 space-y-4 text-sm text-slate-600">
<div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
<span>Pickup</span>
<span className="font-medium text-slate-900" id="summaryPickup">—</span>
</div>
<div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
<span>Drop-off</span>
<span className="font-medium text-slate-900" id="summaryDropoff">—</span>
</div>
<div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
<span>Date &amp; time</span>
<span className="font-medium text-slate-900" id="summaryDateTime">—</span>
</div>
<div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-3">
<span>Service</span>
<span className="font-medium text-slate-900" id="summaryService">Airport Transfer</span>
</div>
<div className="flex items-center justify-between gap-4">
<span>Car</span>
<span className="font-medium text-slate-900" id="summaryCar">Economy Car</span>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="text-base font-semibold text-slate-950">What happens next</h3>
<div className="mt-5 space-y-4">
<div className="flex gap-3">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-medium text-white">1</div>
<p className="text-sm font-normal leading-6 text-slate-600">Submit your booking request with trip details.</p>
</div>
<div className="flex gap-3">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-medium text-white">2</div>
<p className="text-sm font-normal leading-6 text-slate-600">We confirm availability, pricing, and driver assignment.</p>
</div>
<div className="flex gap-3">
<div className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-xs font-medium text-white">3</div>
<p className="text-sm font-normal leading-6 text-slate-600">Receive your ride confirmation by phone or email.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-50 py-16 lg:py-24" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">About Us</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Reliable transport in Bangladesh, built around trust</h2>
</div>
<div className="space-y-5 text-sm font-normal leading-7 text-slate-600 sm:text-base">
<p>
                GoRide Bangladesh provides dependable car hire services for airport transfers, city rides, intercity travel, hourly rentals, and daily rentals.
              </p>
<p>
                Our mission is to make reliable transport in Bangladesh simple, comfortable, and accessible for local travelers, international visitors, business professionals, tourists, and families.
              </p>
<p>
                With experience in the industry and a focus on professional drivers, clear pricing, and quality vehicles, we aim to deliver a smooth travel experience on every booking.
              </p>
</div>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24" id="contact">
<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Contact</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Get in touch with GoRide Bangladesh</h2>
<p className="mt-4 text-sm font-normal leading-6 text-slate-600 sm:text-base">
              Reach out for bookings, package details, or route assistance.
            </p>
<div className="mt-8 space-y-4">
<div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="20" icon="solar:phone-linear" style={{color: '#0f172a'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">Phone</div>
<a className="mt-1 block text-sm font-semibold text-slate-900" href="tel:+8801700000000">+880 1700 000000</a>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="20" icon="solar:chat-round-linear" style={{color: '#0f172a'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">WhatsApp</div>
<a className="mt-1 block text-sm font-semibold text-slate-900" href="https://wa.me/8801700000000" target="_blank">Chat on WhatsApp</a>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="20" icon="solar:letter-linear" style={{color: '#0f172a'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">Email</div>
<a className="mt-1 block text-sm font-semibold text-slate-900" href="mailto:hello@goridebd.com">hello@goridebd.com</a>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3">
<div className="rounded-2xl bg-slate-100 p-3">
<iconify-icon height="20" icon="solar:map-point-linear" style={{color: '#0f172a'}} width="20"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium uppercase tracking-wide text-slate-500">Office</div>
<div className="mt-1 text-sm font-semibold text-slate-900">Dhaka, Bangladesh</div>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
<h3 className="text-lg font-semibold text-slate-950">Send a message</h3>
<form className="mt-6 grid gap-4" id="contactForm">
<div className="grid gap-4 sm:grid-cols-2">
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Name</label>
<input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400" id="contactName" placeholder="Your name" type="text"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Phone</label>
<input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400" id="contactPhone" placeholder="+8801XXXXXXXXX" type="tel"/>
</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Email</label>
<input className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400" id="contactEmail" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="mb-2 block text-xs font-medium uppercase tracking-wide text-slate-500">Message</label>
<textarea className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-400" id="contactMessageInput" placeholder="Tell us about your travel needs" rows="5"></textarea>
</div>
<button className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800" type="submit">
                Send Message
              </button>
<p className="hidden rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700" id="contactMessage"></p>
</form>
</div>
</div>
</section>
<section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
<div className="rounded-[2rem] bg-slate-900 px-6 py-10 text-white sm:px-10 sm:py-12">
<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
<div className="max-w-2xl">
<p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Final CTA</p>
<h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Ready to book your next ride in Bangladesh?</h2>
<p className="mt-4 text-sm font-normal leading-6 text-slate-300 sm:text-base">
                Reserve airport transfers, city rides, long trips, hourly rentals, or daily rentals with one trusted service.
              </p>
</div>
<div className="flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100" href="#booking">
                Book Your Ride
              </a>
<a className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15" href="https://wa.me/8801700000000" target="_blank">
                WhatsApp Booking
              </a>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
<div>
<div className="text-lg font-semibold tracking-tight text-slate-950">GORIDE</div>
<p className="mt-1 text-xs font-medium text-slate-500">GoRide Bangladesh — Reliable car hire across Bangladesh.</p>
</div>
<div className="flex flex-wrap gap-4 text-xs font-medium text-slate-500">
<a className="transition hover:text-slate-900" href="#services">Services</a>
<a className="transition hover:text-slate-900" href="#fleet">Fleet</a>
<a className="transition hover:text-slate-900" href="#pricing">Pricing</a>
<a className="transition hover:text-slate-900" href="#booking">Booking</a>
<a className="transition hover:text-slate-900" href="#contact">Contact</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
