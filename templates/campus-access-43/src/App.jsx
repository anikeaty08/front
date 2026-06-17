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



        // App Switcher (Demo purposes)
        function switchApp(appId) {
            document.querySelectorAll('.app-entity').forEach(el => el.classList.remove('active'));
            document.getElementById('app-' + appId).classList.add('active');
            
            document.querySelectorAll('.demo-btn').forEach(btn => {
                btn.className = 'demo-btn px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-all';
            });
            
            const activeBtn = document.getElementById('btn-' + appId);
            activeBtn.className = 'demo-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-neutral-900 transition-all shadow-sm';
            window.scrollTo(0, 0);
        }

        // Workable Date Selection
        function selectDate(selectedBtn) {
            // Reset all buttons
            document.querySelectorAll('.date-btn').forEach(btn => {
                btn.className = 'date-btn flex flex-col items-center p-3 rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition-all text-neutral-900';
                btn.querySelector('.day-label').className = 'day-label text-xs text-neutral-400 mb-1';
            });
            // Set active state on clicked
            selectedBtn.className = 'date-btn flex flex-col items-center p-3 rounded-2xl border-2 border-neutral-900 bg-neutral-900 text-white shadow-md transform scale-105 transition-all';
            selectedBtn.querySelector('.day-label').className = 'day-label text-xs text-neutral-300 mb-1';
        }

        // Workable Booking Submission
        function submitReservation(btn) {
            const nameInput = document.getElementById('guest-name').value;
            if(!nameInput) {
                document.getElementById('guest-name').focus();
                return;
            }

            const originalText = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="18"></iconify-icon> Processing Request...';
            btn.classList.add('opacity-90');

            setTimeout(() => {
                btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Reservation Confirmed';
                btn.classList.replace('bg-neutral-900', 'bg-emerald-600');
                btn.classList.replace('hover:bg-neutral-800', 'hover:bg-emerald-700');
                
                // Reset after 3 seconds
                setTimeout(() => {
                    btn.disabled = false;
                    btn.innerHTML = originalText;
                    btn.classList.replace('bg-emerald-600', 'bg-neutral-900');
                    btn.classList.replace('hover:bg-emerald-700', 'hover:bg-neutral-800');
                    btn.classList.remove('opacity-90');
                }, 3000);
            }, 1500);
        }

        // Workable Admin Approvals
        let pendingCount = 2;
        function approveRequest(btn, rowId) {
            btn.disabled = true;
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin"></iconify-icon>';
            
            setTimeout(() => {
                const row = document.getElementById(rowId);
                row.style.opacity = '0';
                row.style.transform = 'translateX(20px)';
                row.style.transition = 'all 0.3s ease-out';
                
                setTimeout(() => {
                    row.remove();
                    pendingCount--;
                    document.getElementById('pending-count').innerText = pendingCount;
                    if(pendingCount === 0) {
                        document.getElementById('admin-table-body').innerHTML = '<tr><td colspan="4" class="py-12 text-center text-sm text-neutral-500">No pending reservations.</td></tr>';
                    }
                }, 300);
            }, 800);
        }

        function declineRequest(rowId) {
            const row = document.getElementById(rowId);
            row.style.opacity = '0';
            row.style.transition = 'all 0.3s ease-out';
            setTimeout(() => {
                row.remove();
                pendingCount--;
                document.getElementById('pending-count').innerText = pendingCount;
                if(pendingCount === 0) {
                    document.getElementById('admin-table-body').innerHTML = '<tr><td colspan="4" class="py-12 text-center text-sm text-neutral-500">No pending reservations.</td></tr>';
                }
            }, 300);
        }

        // Modal Functionality
        function toggleModal(modalId) {
            const modal = document.getElementById(modalId);
            const content = document.getElementById(modalId + '-content');
            
            if (modal.classList.contains('active')) {
                content.style.transform = 'scale(0.95)';
                modal.classList.remove('active');
            } else {
                modal.classList.add('active');
                setTimeout(() => {
                    content.style.transform = 'scale(1)';
                }, 10);
            }
        }

        // Star Rating Logic
        function setRating(rating) {
            const stars = document.getElementById('star-rating').children;
            for(let i = 0; i < stars.length; i++) {
                if(i < rating) {
                    stars[i].className = 'text-neutral-900 hover:text-neutral-900 transition-colors transform scale-110';
                } else {
                    stars[i].className = 'text-neutral-300 hover:text-neutral-900 transition-colors transform scale-100';
                }
            }
        }

        // Submit Review
        function submitReview() {
            const btn = document.getElementById('submit-review-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="18"></iconify-icon> Submitting...';
            
            setTimeout(() => {
                btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Thank you!';
                btn.classList.replace('bg-neutral-900', 'bg-emerald-600');
                
                setTimeout(() => {
                    toggleModal('review-modal');
                    // Reset
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.classList.replace('bg-emerald-600', 'bg-neutral-900');
                        setRating(0);
                    }, 300);
                }, 1000);
            }, 1200);
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
      

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-neutral-900/90 backdrop-blur-md px-2 py-2 rounded-full shadow-2xl flex items-center gap-2 border border-neutral-700/50">
<span className="text-xs font-medium text-neutral-400 pl-3 pr-2 uppercase tracking-widest">Workspace</span>
<button className="demo-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white text-neutral-900 transition-all" id="btn-visitor" onclick="switchApp('visitor')">Guest Portal</button>
<button className="demo-btn px-4 py-1.5 rounded-full text-xs font-medium text-neutral-400 hover:text-white transition-all" id="btn-admin" onclick="switchApp('admin')">Concierge Admin</button>
</div>

<div className="app-entity active flex-col min-h-screen w-full" id="app-visitor">

<header className="w-full bg-white border-b border-neutral-200/60 sticky top-0 z-40">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-xl bg-neutral-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:buildings-linear" width="16"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-wide uppercase text-neutral-900">GuestKey</span>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-1.5" onclick="toggleModal('review-modal')">
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon> <span className="hidden sm:inline">Guest Feedback</span>
</button>
<div className="h-4 w-px bg-neutral-200 hidden sm:block"></div>
<span className="text-sm font-medium text-neutral-900 hidden sm:block">Parent Portal</span>
<div className="w-8 h-8 rounded-full bg-neutral-50 flex items-center justify-center text-neutral-600 border border-neutral-200 cursor-pointer hover:bg-neutral-100 transition-colors">
<iconify-icon icon="solar:user-rounded-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</header>

<main className="flex-1 w-full max-w-6xl mx-auto py-12 px-6">
<div className="mb-12 max-w-2xl">
<span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-2 block">Arrival &amp; Stay</span>
<h1 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-3">Plan Your Visit</h1>
<p className="text-base text-neutral-500 leading-relaxed">Reserve your visitation date. Our concierge desk will review your details and prepare your digital campus pass for a seamless arrival experience.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

<div className="lg:col-span-7 flex flex-col gap-6">
<div className="bg-white rounded-[24px] p-8 border border-neutral-200/60 premium-glow">

<div className="mb-8">
<label className="flex items-center gap-2 text-sm font-medium text-neutral-900 mb-4">
<iconify-icon className="text-neutral-400" icon="solar:calendar-date-linear" width="18"></iconify-icon> Select Arrival Date
                            </label>
<div className="grid grid-cols-4 sm:grid-cols-7 gap-2 mb-4">
<button className="date-btn flex flex-col items-center p-3 rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition-all" onclick="selectDate(this)">
<span className="day-label text-xs text-neutral-400 mb-1">Thu</span>
<span className="text-base font-medium">10</span>
</button>
<button className="date-btn flex flex-col items-center p-3 rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition-all" onclick="selectDate(this)">
<span className="day-label text-xs text-neutral-400 mb-1">Fri</span>
<span className="text-base font-medium">11</span>
</button>
<button className="date-btn flex flex-col items-center p-3 rounded-2xl border-2 border-neutral-900 bg-neutral-900 text-white shadow-md transform scale-105 transition-all" onclick="selectDate(this)">
<span className="day-label text-xs text-neutral-300 mb-1">Sat</span>
<span className="text-base font-medium text-current">12</span>
</button>
<button className="date-btn flex flex-col items-center p-3 rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition-all" onclick="selectDate(this)">
<span className="day-label text-xs text-neutral-400 mb-1">Sun</span>
<span className="text-base font-medium">13</span>
</button>
<button className="date-btn hidden sm:flex flex-col items-center p-3 rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition-all" onclick="selectDate(this)">
<span className="day-label text-xs text-neutral-400 mb-1">Mon</span>
<span className="text-base font-medium">14</span>
</button>
<button className="date-btn hidden sm:flex flex-col items-center p-3 rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition-all" onclick="selectDate(this)">
<span className="day-label text-xs text-neutral-400 mb-1">Tue</span>
<span className="text-base font-medium">15</span>
</button>
<button className="date-btn hidden sm:flex flex-col items-center p-3 rounded-2xl border border-neutral-100 hover:border-neutral-300 hover:bg-neutral-50 transition-all" onclick="selectDate(this)">
<span className="day-label text-xs text-neutral-400 mb-1">Wed</span>
<span className="text-base font-medium">16</span>
</button>
</div>
</div>

<div className="space-y-5">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2 ml-1">Guest Name (Parent / Guardian)</label>
<input className="w-full h-12 px-4 bg-[#FAFAFA] border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors placeholder:text-neutral-400" id="guest-name" placeholder="Enter your full name" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2 ml-1">Resident Student Name</label>
<input className="w-full h-12 px-4 bg-[#FAFAFA] border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors placeholder:text-neutral-400" placeholder="Ward's name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-500 mb-2 ml-1">Hostel Room</label>
<input className="w-full h-12 px-4 bg-[#FAFAFA] border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors placeholder:text-neutral-400" placeholder="e.g. A-402" type="text"/>
</div>
</div>
</div>
<button className="w-full h-12 mt-8 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-all shadow-[0_4px_14px_rgba(0,0,0,0.1)] flex items-center justify-center gap-2" id="book-btn" onclick="submitReservation(this)">
                            Reserve Guest Pass
                        </button>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">
<div className="bg-white rounded-[24px] border border-neutral-200/60 overflow-hidden premium-glow flex flex-col h-full">

<div className="px-6 py-5 border-b border-neutral-100 bg-neutral-50/50">
<h3 className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:map-point-linear" width="18"></iconify-icon> Property Location
                            </h3>
</div>

<div className="w-full h-64 bg-neutral-100 relative">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 contrast-125" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.6457195726223!2d81.58309137542008!3d26.257106088390747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ac83832d20d4f%3A0xc07cefb013de8f07!2sRajiv%20Gandhi%20Institute%20of%20Petroleum%20Technology!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin">
</iframe>
</div>

<div className="p-6 flex-1 flex flex-col justify-center">
<p className="text-sm font-semibold text-neutral-900 mb-2">Rajiv Gandhi Institute of Petroleum Technology</p>
<p className="text-sm text-neutral-500 leading-relaxed mb-4">
                                Bahadurpur, Jais, Post Harbanshganj,<br/>
                                Amethi - 229304,<br/>
                                Uttar Pradesh, India
                            </p>
<div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
<a className="text-xs font-medium text-neutral-900 hover:text-neutral-600 flex items-center gap-1 transition-colors" href="https://maps.google.com" target="_blank">
                                    Get Directions <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="w-full bg-white border-t border-neutral-200/60 mt-auto">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
<span className="text-xs text-neutral-500 font-medium tracking-wide">MADE WITH</span>
<span className="text-xs font-bold tracking-widest text-neutral-900 bg-neutral-100 px-2 py-1 rounded-md border border-neutral-200">UNITEAM</span>
</div>
<div className="text-center sm:text-right">
<p className="text-xs text-neutral-400">© 2024 GuestKey Access System.</p>
<p className="text-xs text-neutral-400 mt-1">RGIPT, Amethi, UP, India - 229304</p>
</div>
</div>
</footer>
</div>

<div className="app-entity flex-col h-screen w-full bg-[#FAFAFA] overflow-hidden" id="app-admin">

<header className="w-full bg-white border-b border-neutral-200/60 shrink-0">
<div className="px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded-lg bg-neutral-900 flex items-center justify-center text-white">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-wide text-neutral-900">Concierge Desk</span>
</div>
<div className="flex items-center gap-4">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
<span className="text-xs font-medium text-neutral-500">System Online</span>
</div>
</div>
</header>
<div className="flex flex-1 overflow-hidden">

<aside className="w-64 bg-white border-r border-neutral-200/60 flex flex-col shrink-0">
<nav className="flex-1 p-4 flex flex-col gap-1 overflow-y-auto">
<span className="text-xs font-semibold tracking-widest text-neutral-400 px-3 mb-2 mt-2 uppercase">Reservations</span>
<a className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium bg-neutral-100 text-neutral-900 transition-colors" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:inbox-in-linear" width="18"></iconify-icon> Pending Approvals
                        </div>
<span className="bg-neutral-900 text-white text-[10px] px-2 py-0.5 rounded-full" id="pending-count">2</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors" href="#">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Confirmed Guests
                    </a>
<span className="text-xs font-semibold tracking-widest text-neutral-400 px-3 mb-2 mt-6 uppercase">Management</span>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon> Guest Registry
                    </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors" href="#">
<iconify-icon icon="solar:star-linear" width="18"></iconify-icon> Guest Reviews
                    </a>
</nav>

<div className="p-4 border-t border-neutral-100 bg-neutral-50/50 mt-auto">
<div className="flex items-center gap-2 opacity-70 mb-2">
<span className="text-[10px] text-neutral-500 font-medium tracking-wide">MADE WITH</span>
<span className="text-[10px] font-bold tracking-widest text-neutral-900 bg-neutral-200 px-1.5 py-0.5 rounded border border-neutral-300">UNITEAM</span>
</div>
<p className="text-[10px] text-neutral-400 leading-tight">RGIPT, Amethi - 229304</p>
</div>
</aside>

<main className="flex-1 p-8 overflow-y-auto">
<div className="max-w-5xl mx-auto">
<div className="mb-8">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-1">Pending Approvals</h2>
<p className="text-sm text-neutral-500">Review guest reservation requests and issue digital access passes.</p>
</div>

<div className="bg-white rounded-[20px] border border-neutral-200/60 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead className="bg-neutral-50/80 border-b border-neutral-200/60">
<tr>
<th className="py-3 font-semibold text-neutral-500 text-xs uppercase tracking-widest px-6">Arrival Date</th>
<th className="py-3 font-semibold text-neutral-500 text-xs uppercase tracking-widest px-6">Guest Details</th>
<th className="py-3 font-semibold text-neutral-500 text-xs uppercase tracking-widest px-6">Resident &amp; Room</th>
<th className="py-3 font-semibold text-neutral-500 text-xs uppercase tracking-widest px-6 text-right">Concierge Action</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-neutral-100" id="admin-table-body">

<tr className="hover:bg-neutral-50/50 transition-colors group" id="req-1">
<td className="py-4 px-6">
<div className="flex flex-col">
<span className="font-medium text-neutral-900">Oct 12, 2024</span>
<span className="text-xs text-neutral-400 mt-0.5">Submitted 2h ago</span>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 shrink-0">
                                                    EV
                                                </div>
<div className="flex flex-col">
<span className="font-medium text-neutral-900">Eleanor Vance</span>
<span className="text-xs text-neutral-500 mt-0.5">Parent</span>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="flex flex-col">
<span className="text-neutral-700">Julian Vance</span>
<span className="text-xs font-mono text-neutral-500 mt-0.5">Room A-402</span>
</div>
</td>
<td className="py-4 px-6 text-right">
<div className="flex justify-end gap-2">
<button className="px-4 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-600 text-xs font-medium hover:bg-neutral-50 hover:text-red-600 transition-colors" onclick="declineRequest('req-1')">Decline</button>
<button className="px-4 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors shadow-sm min-w-[120px]" onclick="approveRequest(this, 'req-1')">Confirm Guest</button>
</div>
</td>
</tr>

<tr className="hover:bg-neutral-50/50 transition-colors group" id="req-2">
<td className="py-4 px-6">
<div className="flex flex-col">
<span className="font-medium text-neutral-900">Oct 15, 2024</span>
<span className="text-xs text-neutral-400 mt-0.5">Submitted 5h ago</span>
</div>
</td>
<td className="py-4 px-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-500 shrink-0">
                                                    RS
                                                </div>
<div className="flex flex-col">
<span className="font-medium text-neutral-900">Rajesh Sharma</span>
<span className="text-xs text-neutral-500 mt-0.5">Guardian</span>
</div>
</div>
</td>
<td className="py-4 px-6">
<div className="flex flex-col">
<span className="text-neutral-700">Amit Sharma</span>
<span className="text-xs font-mono text-neutral-500 mt-0.5">Room B-105</span>
</div>
</td>
<td className="py-4 px-6 text-right">
<div className="flex justify-end gap-2">
<button className="px-4 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-600 text-xs font-medium hover:bg-neutral-50 hover:text-red-600 transition-colors" onclick="declineRequest('req-2')">Decline</button>
<button className="px-4 py-1.5 rounded-lg bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors shadow-sm min-w-[120px]" onclick="approveRequest(this, 'req-2')">Confirm Guest</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
</div>

<div className="modal-overlay fixed inset-0 z-50 bg-neutral-900/40 backdrop-blur-sm items-center justify-center p-4" id="review-modal">
<div className="bg-white rounded-[24px] p-8 border border-neutral-200/60 shadow-2xl max-w-md w-full relative transform transition-transform scale-95" id="review-modal-content">
<button className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-900 transition-colors" onclick="toggleModal('review-modal')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="mb-6">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 mb-4">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-1">Guest Feedback</h3>
<p className="text-sm text-neutral-500">How was your recent visit to the campus? Your review helps us improve our concierge services.</p>
</div>

<div className="flex gap-2 mb-6" id="star-rating">
<button className="text-neutral-300 hover:text-neutral-900 transition-colors" onclick="setRating(1)"><iconify-icon icon="solar:star-linear" width="28"></iconify-icon></button>
<button className="text-neutral-300 hover:text-neutral-900 transition-colors" onclick="setRating(2)"><iconify-icon icon="solar:star-linear" width="28"></iconify-icon></button>
<button className="text-neutral-300 hover:text-neutral-900 transition-colors" onclick="setRating(3)"><iconify-icon icon="solar:star-linear" width="28"></iconify-icon></button>
<button className="text-neutral-300 hover:text-neutral-900 transition-colors" onclick="setRating(4)"><iconify-icon icon="solar:star-linear" width="28"></iconify-icon></button>
<button className="text-neutral-300 hover:text-neutral-900 transition-colors" onclick="setRating(5)"><iconify-icon icon="solar:star-linear" width="28"></iconify-icon></button>
</div>
<div className="mb-6">
<label className="block text-xs font-medium text-neutral-500 mb-2 ml-1">Comments (Optional)</label>
<textarea className="w-full p-4 bg-[#FAFAFA] border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-neutral-900 focus:bg-white transition-colors placeholder:text-neutral-400 resize-none" placeholder="Tell us about your experience..." rows="3"></textarea>
</div>
<button className="w-full h-12 bg-neutral-900 text-white rounded-xl text-sm font-medium hover:bg-neutral-800 transition-all shadow-sm flex items-center justify-center gap-2" id="submit-review-btn" onclick="submitReview()">
                Submit Review
            </button>
</div>
</div>



    </>
  );
}
