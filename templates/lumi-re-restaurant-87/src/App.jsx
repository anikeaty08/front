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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
bg: '#09090b', // zinc-950
surface: '#18181b', // zinc-900
border: '#27272a', // zinc-800
primary: '#f4f4f5', // zinc-100
secondary: '#a1a1aa', // zinc-400
accent: '#fb923c', // orange-400
}
}
}
}



        const DB_KEY = 'lumiere_bookings_db';
        
        function getBookings() {
            return JSON.parse(localStorage.getItem(DB_KEY)) || [];
        }

        function saveBookings(bookings) {
            localStorage.setItem(DB_KEY, JSON.stringify(bookings));
        }

        function switchTab(tab) {
            const bookBtn = document.getElementById('tab-book');
            const manageBtn = document.getElementById('tab-manage');
            const bookPanel = document.getElementById('booking-panel');
            const managePanel = document.getElementById('manage-panel');

            if(tab === 'book') {
                bookBtn.className = "px-6 py-2 text-sm font-medium rounded-lg transition-all text-black bg-white shadow-sm";
                manageBtn.className = "px-6 py-2 text-sm font-medium rounded-lg text-secondary hover:text-primary transition-all";
                bookPanel.classList.remove('hidden');
                managePanel.classList.add('hidden');
            } else {
                manageBtn.className = "px-6 py-2 text-sm font-medium rounded-lg transition-all text-black bg-white shadow-sm";
                bookBtn.className = "px-6 py-2 text-sm font-medium rounded-lg text-secondary hover:text-primary transition-all";
                managePanel.classList.remove('hidden');
                bookPanel.classList.add('hidden');
            }
        }

        // Generate Unique ID
        function generateId() {
            return 'RES-' + Math.random().toString(36).substr(2, 5).toUpperCase();
        }

        function formatTime(timeStr) {
            const [hour, minute] = timeStr.split(':');
            const h = parseInt(hour);
            const ampm = h >= 12 ? 'PM' : 'AM';
            const h12 = h % 12 || 12;
            return `${h12}:${minute} ${ampm}`;
        }

        // Send Email (Simulated with Mailto)
        function sendEmail(booking) {
            const subject = `Reservation Confirmation - ${booking.id}`;
            const body = `Dear ${booking.name},\n\nWe are pleased to confirm your reservation at Lumière.\n\nHere are your booking details:\n-----------------------------\nReservation ID: ${booking.id}\nDate: ${booking.date}\nTime: ${formatTime(booking.time)}\nGuests: ${booking.guests} People\n\nPlease present this ID upon arrival.\n\nWarm regards,\nThe Lumière Team`;
            
            // Construct mailto link
            const mailtoLink = `mailto:${booking.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            // Trigger mailto
            window.location.href = mailtoLink;
        }

        // Handle Booking
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // UI Loading State
            const btn = document.getElementById('submitBtn');
            const btnText = document.getElementById('btnText');
            const btnSpinner = document.getElementById('btnSpinner');
            const btnIcon = document.getElementById('btnIcon');

            btn.disabled = true;
            btnText.innerText = "Processing...";
            btnSpinner.classList.remove('hidden');
            btnIcon.classList.add('hidden');

            const booking = {
                id: generateId(),
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                guests: document.getElementById('guests').value,
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                createdAt: new Date().toISOString()
            };

            // Simulate API Delay
            setTimeout(() => {
                const bookings = getBookings();
                bookings.push(booking);
                saveBookings(bookings);

                // Trigger Email Action
                sendEmail(booking);

                // Reset UI
                this.reset();
                btn.disabled = false;
                btnText.innerText = "Confirm Reservation";
                btnSpinner.classList.add('hidden');
                btnIcon.classList.remove('hidden');

                // Show Success Modal
                document.getElementById('new-booking-id').innerText = booking.id;
                const modal = document.getElementById('success-modal');
                const content = document.getElementById('modal-content');
                
                modal.classList.remove('opacity-0', 'pointer-events-none');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            }, 1200);
        });

        function closeModal() {
            const modal = document.getElementById('success-modal');
            const content = document.getElementById('modal-content');
            modal.classList.add('opacity-0', 'pointer-events-none');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
        }
        
        function copyId() {
            const idText = document.getElementById('new-booking-id').innerText;
            navigator.clipboard.writeText(idText).then(() => {
                const toast = document.getElementById('copy-toast');
                toast.classList.remove('opacity-0');
                setTimeout(() => {
                    toast.classList.add('opacity-0');
                }, 2000);
            });
        }

        // Manage Bookings Logic
        let currentSearchId = null;

        function findBooking() {
            const id = document.getElementById('searchId').value.trim().toUpperCase();
            const bookings = getBookings();
            const booking = bookings.find(b => b.id === id);
            
            const resultDiv = document.getElementById('booking-result');
            const errorDiv = document.getElementById('booking-error');

            if (booking) {
                currentSearchId = booking.id;
                document.getElementById('res-name').innerText = booking.name;
                document.getElementById('res-date').innerText = booking.date;
                document.getElementById('res-time').innerText = formatTime(booking.time);
                document.getElementById('res-guests').innerText = booking.guests + (booking.guests == 1 ? ' Person' : ' People');
                
                resultDiv.classList.remove('hidden');
                errorDiv.classList.add('hidden');
            } else {
                currentSearchId = null;
                resultDiv.classList.add('hidden');
                errorDiv.classList.remove('hidden');
            }
        }

        function cancelBooking() {
            if(!currentSearchId) return;

            if(confirm('Are you sure you want to cancel this reservation?')) {
                let bookings = getBookings();
                bookings = bookings.filter(b => b.id !== currentSearchId);
                saveBookings(bookings);
                
                document.getElementById('booking-result').classList.add('hidden');
                document.getElementById('searchId').value = '';
                alert('Reservation cancelled successfully.');
            }
        }

        // Set min date to today
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('date').setAttribute('min', today);
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-bg/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<iconify-icon icon="solar:chef-hat-heart-linear" strokeWidth="1.5" width="24"></iconify-icon>
                Lumière
            </a>
<div className="hidden md:flex gap-8 text-sm text-secondary font-medium">
<a className="hover:text-primary transition-colors" href="#menu">Menu</a>
<a className="hover:text-primary transition-colors" href="#about">Philosophy</a>
<a className="hover:text-primary transition-colors" href="#location">Location</a>
</div>
<a className="text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors tracking-tight" href="#reservations">
                Reserve Table
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 border-b border-white/5 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/20 via-bg to-bg -z-10"></div>
<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-secondary">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    Open for Dinner Service
                </div>
<h1 className="text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-500">
                    Taste the ephemeral.
                </h1>
<p className="text-secondary text-lg font-light leading-relaxed max-w-md">
                    Modern gastronomy rooted in tradition. Experience seasonal textures and flavors in an intimate setting.
                </p>
<div className="flex gap-4 pt-2">
<a className="inline-flex items-center gap-2 text-sm font-medium border border-white/20 hover:border-white hover:bg-white/5 rounded-lg px-6 py-3 transition-all" href="#reservations">
                        Book a Table
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden border border-white/10 group">
<img alt="Plating" className="object-cover w-full h-full opacity-80 group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent"></div>
</div>
</div>
</header>

<main className="flex-grow py-24 px-6" id="reservations">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-3">Reservations</h2>
<p className="text-secondary font-light">Secure your experience or manage an existing booking.</p>
</div>

<div className="flex justify-center mb-8">
<div className="bg-surface border border-border p-1 rounded-xl inline-flex">
<button className="px-6 py-2 text-sm font-medium rounded-lg transition-all text-black bg-white shadow-sm" id="tab-book" onclick="switchTab('book')">
                        New Booking
                    </button>
<button className="px-6 py-2 text-sm font-medium rounded-lg text-secondary hover:text-primary transition-all" id="tab-manage" onclick="switchTab('manage')">
                        Manage Booking
                    </button>
</div>
</div>

<div className="bg-surface border border-border rounded-2xl p-8 shadow-2xl shadow-black/50 animate-fade-in" id="booking-panel">
<form className="space-y-6" id="bookingForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2 group">
<label className="text-xs text-secondary font-medium uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon> Date
                            </label>
<div className="relative">
<input className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-secondary outline-none transition-colors text-white placeholder-zinc-600 appearance-none" id="date" required="" type="date"/>
</div>
</div>

<div className="space-y-2 group">
<label className="text-xs text-secondary font-medium uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="14"></iconify-icon> Time
                            </label>
<div className="relative">
<select className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-secondary outline-none transition-colors text-white appearance-none cursor-pointer" id="time" required="">
<option disabled="" selected="" value="">Select time</option>
<option value="17:00">5:00 PM</option>
<option value="17:30">5:30 PM</option>
<option value="18:00">6:00 PM</option>
<option value="18:30">6:30 PM</option>
<option value="19:00">7:00 PM</option>
<option value="19:30">7:30 PM</option>
<option value="20:00">8:00 PM</option>
<option value="20:30">8:30 PM</option>
<option value="21:00">9:00 PM</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2 group">
<label className="text-xs text-secondary font-medium uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon> Guests
                            </label>
<div className="relative">
<select className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-secondary outline-none transition-colors text-white appearance-none cursor-pointer" id="guests" required="">
<option value="1">1 Person</option>
<option selected="" value="2">2 People</option>
<option value="3">3 People</option>
<option value="4">4 People</option>
<option value="5">5 People</option>
<option value="6">6 People</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-secondary">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-2 group">
<label className="text-xs text-secondary font-medium uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:user-circle-linear" width="14"></iconify-icon> Full Name
                            </label>
<input className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-secondary outline-none transition-colors text-white placeholder-zinc-700" id="name" placeholder="John Doe" required="" type="text"/>
</div>
</div>

<div className="space-y-2 group">
<label className="text-xs text-secondary font-medium uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon> Email Address
                        </label>
<input className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-secondary outline-none transition-colors text-white placeholder-zinc-700" id="email" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="pt-4">
<button className="w-full bg-white text-black hover:bg-zinc-200 font-medium py-3 rounded-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed" id="submitBtn" type="submit">
<span id="btnText">Confirm Reservation</span>
<div className="hidden loading-spinner" id="btnSpinner"></div>
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:check-circle-linear" id="btnIcon" width="20"></iconify-icon>
</button>
</div>
<p className="text-center text-xs text-zinc-600 mt-4">A confirmation email will be generated for the customer.</p>
</form>
</div>

<div className="hidden bg-surface border border-border rounded-2xl p-8 shadow-2xl shadow-black/50 animate-fade-in" id="manage-panel">
<div className="space-y-6">
<div className="space-y-2">
<label className="text-xs text-secondary font-medium uppercase tracking-wider flex items-center gap-1">
<iconify-icon icon="solar:ticket-linear" width="14"></iconify-icon> Booking ID
                        </label>
<div className="flex gap-2">
<input className="flex-grow bg-bg border border-border rounded-lg px-4 py-3 text-sm focus:border-secondary outline-none transition-colors text-white placeholder-zinc-700 uppercase font-mono" id="searchId" placeholder="e.g. RES-8X29A" type="text"/>
<button className="bg-white/10 hover:bg-white/20 text-white px-6 rounded-lg transition-colors" onclick="findBooking()">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-xs text-zinc-500">Enter the reservation ID sent to your confirmation screen.</p>
</div>

<div className="hidden border-t border-white/5 pt-6 mt-6" id="booking-result">
<div className="bg-bg/50 rounded-xl p-5 border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
<div>
<h3 className="text-white font-medium text-lg" id="res-name">User Name</h3>
<div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm text-secondary">
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:calendar-linear"></iconify-icon> <span id="res-date">Date</span></span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> <span id="res-time">Time</span></span>
<span className="flex items-center gap-1.5"><iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> <span id="res-guests">Guests</span></span>
</div>
<div className="mt-3 inline-block px-2 py-1 bg-green-500/10 text-green-500 text-xs rounded border border-green-500/20">Active Reservation</div>
</div>
<button className="text-red-400 hover:text-red-300 text-sm font-medium border border-red-500/20 hover:bg-red-500/10 px-4 py-2 rounded-lg transition-all flex items-center gap-2" onclick="cancelBooking()">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon> Cancel
                            </button>
</div>
</div>
<div className="hidden text-center py-4 text-secondary text-sm" id="booking-error">
                        No active booking found with that ID.
                    </div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-[60] flex items-center justify-center px-4 opacity-0 pointer-events-none transition-opacity duration-300" id="success-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeModal()"></div>
<div className="bg-surface border border-border rounded-2xl p-8 max-w-sm w-full relative z-10 text-center transform scale-95 transition-transform duration-300 shadow-2xl" id="modal-content">
<div className="w-12 h-12 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-4 border border-white/10">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 tracking-tight">Booking Confirmed</h3>
<p className="text-secondary text-sm mb-6 leading-relaxed">Your table is reserved. An email draft with the details has been generated for you.</p>
<div className="bg-bg border border-white/10 rounded-lg p-4 mb-6 relative group cursor-pointer" onclick="copyId()">
<p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1 font-semibold">Reservation ID</p>
<div className="flex items-center justify-center gap-2">
<p className="text-2xl font-mono text-white tracking-widest" id="new-booking-id">---</p>
<iconify-icon className="text-zinc-600 group-hover:text-white transition-colors" icon="solar:copy-linear" width="16"></iconify-icon>
</div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] py-1 px-2 rounded opacity-0 transition-opacity pointer-events-none font-medium" id="copy-toast">Copied!</div>
</div>
<button className="w-full bg-white text-black font-medium py-2.5 rounded-lg hover:bg-zinc-200 transition-colors text-sm" onclick="closeModal()">Done</button>
</div>
</div>

<footer className="border-t border-white/5 py-12 px-6 bg-bg mt-auto">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-zinc-500">
<iconify-icon icon="solar:chef-hat-heart-linear" width="20"></iconify-icon>
<span className="text-sm tracking-tight font-medium">LUMIÈRE RESTAURANT</span>
</div>
<div className="text-xs text-zinc-600">
                © 2023 Lumière. All rights reserved.
            </div>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
