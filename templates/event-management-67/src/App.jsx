import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Track registered event IDs (Initial state matches design)
        const registeredEvents = new Set(['2']);
        let currentTab = 'browse'; // 'browse' or 'registered'

        // Styles toggling definitions
        const baseClasses = ['border-slate-200/80', 'bg-white/90', 'shadow-slate-200/50', 'hover:shadow-md', 'hover:border-indigo-200'];
        const regClasses = ['border-emerald-200', 'bg-emerald-50/40', 'shadow-emerald-100/50'];
        
        const baseFooterClasses = ['border-slate-100'];
        const regFooterClasses = ['border-emerald-200/60'];

        const baseTitleClasses = ['group-hover:text-indigo-600'];
        const regTitleClasses = ['group-hover:text-emerald-700'];

        // Function: Switch Tab Layout
        function switchTab(tabName) {
            currentTab = tabName;
            const tabBrowse = document.getElementById('tab-browse');
            const tabRegs = document.getElementById('tab-regs');

            const activeClass = "text-indigo-600 font-medium border-b-2 border-indigo-600 pb-2 -mb-[9px] transition-colors cursor-pointer".split(' ');
            const inactiveClass = "text-slate-500 hover:text-slate-900 pb-2 transition-colors cursor-pointer border-b-2 border-transparent -mb-[9px]".split(' ');

            if (tabName === 'browse') {
                tabBrowse.className = activeClass.join(' ');
                tabRegs.className = inactiveClass.join(' ');
            } else {
                tabRegs.className = activeClass.join(' ');
                tabBrowse.className = inactiveClass.join(' ');
            }

            filterCards();
        }

        // Function: Filter Grid based on Tab state
        function filterCards() {
            const cards = document.querySelectorAll('.event-card');
            cards.forEach(card => {
                const eventId = card.getAttribute('data-event');
                if (currentTab === 'registered') {
                    card.style.display = registeredEvents.has(eventId) ? 'flex' : 'none';
                } else {
                    card.style.display = 'flex';
                }
            });
        }

        // Function: Handle Register/Cancel click
        function toggleRegister(eventId) {
            const card = document.querySelector(`.event-card[data-event="${eventId}"]`);
            
            if (registeredEvents.has(eventId)) {
                registeredEvents.delete(eventId);
                setCardStyling(card, false);
            } else {
                registeredEvents.add(eventId);
                setCardStyling(card, true);
            }
            
            // Update counter in UI
            document.getElementById('reg-count').innerText = registeredEvents.size;
            
            // Re-filter immediately if we are viewing the 'Registered' tab
            if (currentTab === 'registered') {
                filterCards();
            }
        }

        // Function: Safely toggle specific HTML elements
        function setCardStyling(card, isRegistered) {
            const footer = card.querySelector('.card-footer');
            const title = card.querySelector('.title-text');
            const badge = card.querySelector('.registered-badge');
            const availInfo = card.querySelector('.availability-info');
            const ticketInfo = card.querySelector('.ticket-info');
            const btnReg = card.querySelector('.btn-register');
            const btnCancel = card.querySelector('.btn-cancel');

            if (isRegistered) {
                // To Registered State
                card.classList.remove(...baseClasses);
                card.classList.add(...regClasses);
                footer.classList.remove(...baseFooterClasses);
                footer.classList.add(...regFooterClasses);
                title.classList.remove(...baseTitleClasses);
                title.classList.add(...regTitleClasses);
                
                badge.classList.remove('hidden');
                availInfo.classList.add('hidden');
                ticketInfo.classList.remove('hidden');
                btnReg.classList.add('hidden');
                btnCancel.classList.remove('hidden');
            } else {
                // To Available State
                card.classList.remove(...regClasses);
                card.classList.add(...baseClasses);
                footer.classList.remove(...regFooterClasses);
                footer.classList.add(...baseFooterClasses);
                title.classList.remove(...regTitleClasses);
                title.classList.add(...baseTitleClasses);
                
                badge.classList.add('hidden');
                availInfo.classList.remove('hidden');
                ticketInfo.classList.add('hidden');
                btnReg.classList.remove('hidden');
                btnCancel.classList.add('hidden');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-violet-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
</div>

<header className="sticky top-0 z-50 flex h-14 w-full items-center justify-between border-b border-slate-200/80 bg-white/70 px-6 backdrop-blur-md">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-500 to-violet-600 text-white shadow-sm shadow-indigo-200">
<span className="text-sm font-semibold tracking-tighter">ER</span>
</div>
<span className="text-sm font-medium text-slate-800">EventSystem</span>
</div>
<nav className="flex items-center gap-6 text-sm text-slate-500">
<a className="text-indigo-600 font-medium transition-colors" href="#">Dashboard</a>
<a className="hover:text-slate-900 transition-colors" href="#">Events</a>
<a className="hover:text-slate-900 transition-colors" href="#">Participants</a>
</nav>
<div className="flex items-center gap-3">
<button className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white/50 text-slate-500 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all">
<iconify-icon icon="solar:bell-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-indigo-200 to-fuchsia-200 border border-white shadow-sm"></div>
</div>
</header>
<main className="mx-auto max-w-6xl px-6 pt-10 relative z-10">
<div className="mb-12 flex flex-col gap-2">
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">UI Components Overview</h1>
<p className="text-sm text-slate-500">A unified, colorful view of all screens for the JavaFX application design.</p>
</div>

<section className="mb-16">
<div className="mb-6 border-b border-slate-200/80 pb-2">
<h2 className="text-lg font-medium tracking-tight text-slate-800">1 &amp; 2. Authentication (Login &amp; Registration)</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

<div className="rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-6 shadow-sm shadow-slate-200/50 transition-shadow hover:shadow-md">
<div className="mb-6 flex flex-col items-center text-center">
<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-100 bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100/50">
<iconify-icon icon="solar:login-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900">Welcome back</h3>
<p className="text-sm text-slate-500 mt-1">Please enter your details to sign in.</p>
</div>
<form className="flex flex-col gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Username</label>
<input className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" type="text" value="admin_user"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Password</label>
<input className="w-full rounded-md border border-rose-300 bg-rose-50/30 px-3 py-2 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 text-rose-600" type="password" value="••••••••"/>

<span className="text-xs text-rose-500 flex items-center gap-1 mt-0.5 font-medium">
<iconify-icon icon="solar:danger-circle-linear" width="14"></iconify-icon>
                                Invalid username or password.
                            </span>
</div>
<div className="flex items-center justify-between mt-2">
<label className="flex items-center gap-2 cursor-pointer group">
<input className="h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 accent-indigo-600 transition-colors" type="checkbox"/>
<span className="text-xs text-slate-600 group-hover:text-slate-900 transition-colors">Remember me</span>
</label>
<a className="text-xs font-medium text-indigo-600 hover:text-indigo-700 hover:underline transition-all" href="#">Forgot password?</a>
</div>
<button className="mt-2 w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 active:scale-[0.98]" type="button">
                            Login
                        </button>
<p className="text-center text-xs text-slate-500 mt-2">
                            Don't have an account? <a className="font-medium text-indigo-600 hover:text-indigo-700 hover:underline transition-all" href="#">Register</a>
</p>
</form>
</div>

<div className="rounded-xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-6 shadow-sm shadow-slate-200/50 transition-shadow hover:shadow-md">
<div className="mb-6 flex flex-col text-left">
<h3 className="text-xl font-medium tracking-tight text-slate-900">Create an account</h3>
<p className="text-sm text-slate-500 mt-1">Sign up to browse and register for exciting events.</p>
</div>
<form className="flex flex-col gap-4">
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Full Name</label>
<input className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="John Doe" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Username</label>
<input className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="johndoe" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Email Address</label>
<input className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="john@example.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Password</label>
<input className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Create a password" type="password"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Confirm Password</label>
<input className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Confirm password" type="password"/>
</div>
</div>
<button className="mt-4 w-full rounded-md bg-indigo-600 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-[0.98]" type="button">
                            Create Account
                        </button>
</form>
</div>
</div>
</section>

<section className="mb-16">
<div className="mb-6 border-b border-slate-200/80 pb-2">
<h2 className="text-lg font-medium tracking-tight text-slate-800">3 &amp; 4. Admin Dashboard (Event Management)</h2>
</div>
<div className="rounded-xl border border-slate-200/80 bg-white shadow-sm shadow-slate-200/50 overflow-hidden flex flex-col">

<div className="flex items-center justify-between border-b border-slate-200 p-4 bg-slate-50/50">
<div className="relative w-72">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full rounded-md border border-slate-200 bg-white pl-9 pr-3 py-1.5 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" placeholder="Search events..." type="text"/>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-all">
<iconify-icon icon="solar:filter-linear" width="16"></iconify-icon>
                            Filter
                        </button>
<button className="flex items-center gap-2 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-medium text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700 transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                            Add Event
                        </button>
</div>
</div>

<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="border-b border-slate-200 bg-slate-50/80 text-slate-500">
<tr>
<th className="px-4 py-3 font-medium">Event Name</th>
<th className="px-4 py-3 font-medium">Date &amp; Time</th>
<th className="px-4 py-3 font-medium">Venue</th>
<th className="px-4 py-3 font-medium">Status</th>
<th className="px-4 py-3 font-medium text-right">Available Seats</th>
<th className="px-4 py-3 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-slate-700">
<tr className="hover:bg-indigo-50/30 transition-colors group">
<td className="px-4 py-3">
<div className="font-medium text-slate-900">Tech Conference 2024</div>
<div className="text-xs text-slate-500">Annual developer meetup</div>
</td>
<td className="px-4 py-3">Oct 15, 2024 • 09:00 AM</td>
<td className="px-4 py-3">Moscone Center</td>
<td className="px-4 py-3">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">Upcoming</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '40%'}}></div>
</div>
<span className="text-xs">120/300</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-md hover:bg-indigo-100/50 transition-colors" title="Edit">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors" title="Delete">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-indigo-50/30 transition-colors group">
<td className="px-4 py-3">
<div className="font-medium text-slate-900">Design Systems Workshop</div>
<div className="text-xs text-slate-500">Figma &amp; React best practices</div>
</td>
<td className="px-4 py-3">Nov 02, 2024 • 14:00 PM</td>
<td className="px-4 py-3">Online (Zoom)</td>
<td className="px-4 py-3">
<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">Upcoming</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-rose-500 rounded-full" style={{width: '95%'}}></div>
</div>
<span className="text-xs text-rose-600 font-medium">2/50</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-md hover:bg-indigo-100/50 transition-colors" title="Edit">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors" title="Delete">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</td>
</tr>
<tr className="hover:bg-indigo-50/30 transition-colors group">
<td className="px-4 py-3">
<div className="font-medium text-slate-900">Q3 Townhall</div>
<div className="text-xs text-slate-500">Company wide meeting</div>
</td>
<td className="px-4 py-3">Sep 30, 2024 • 10:00 AM</td>
<td className="px-4 py-3">Main Auditorium</td>
<td className="px-4 py-3">
<span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-500/10">Completed</span>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-2">
<div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-slate-300 rounded-full" style={{width: '100%'}}></div>
</div>
<span className="text-xs text-slate-400">0/500</span>
</div>
</td>
<td className="px-4 py-3 text-right">
<div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-md hover:bg-indigo-100/50 transition-colors" title="Edit">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 text-slate-400 hover:text-rose-600 rounded-md hover:bg-rose-50 transition-colors" title="Delete">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>

<div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3 sm:px-6">
<p className="text-xs text-slate-500">Showing <span className="font-medium text-slate-900">1</span> to <span className="font-medium text-slate-900">3</span> of <span className="font-medium text-slate-900">12</span> results</p>
<div className="flex gap-1">
<button className="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors" disabled="">Prev</button>
<button className="rounded-md border border-slate-200 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600 hover:border-indigo-200 transition-colors">Next</button>
</div>
</div>
</div>
</section>

<section>
<div className="mb-6 border-b border-slate-200/80 pb-2 flex items-center justify-between">
<h2 className="text-lg font-medium tracking-tight text-slate-800">5. User Dashboard (Event Browsing)</h2>
<div className="flex gap-4 text-sm border-b border-transparent">
<button className="text-indigo-600 font-medium border-b-2 border-indigo-600 pb-2 -mb-[9px] transition-colors cursor-pointer" id="tab-browse" onclick="switchTab('browse')">Browse Events</button>
<button className="text-slate-500 hover:text-slate-900 pb-2 transition-colors cursor-pointer border-b-2 border-transparent -mb-[9px]" id="tab-regs" onclick="switchTab('registered')">My Registrations (<span id="reg-count">1</span>)</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="events-container">

<div className="event-card group flex flex-col rounded-xl border border-slate-200/80 bg-white/90 backdrop-blur-sm p-5 shadow-sm shadow-slate-200/50 transition-all hover:shadow-md hover:border-indigo-200 relative overflow-hidden" data-event="1">
<div className="registered-badge hidden absolute top-0 right-0 border-b border-l border-emerald-200 bg-emerald-100/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-800 rounded-bl-lg">
                        Registered
                    </div>
<div className="mb-4 flex items-center justify-between mt-2">
<div className="inline-flex items-center gap-1.5 rounded-md bg-indigo-50/80 px-2 py-1 text-xs font-medium text-indigo-700 border border-indigo-100/50">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
                            Oct 15, 2024
                        </div>
<span className="text-xs font-medium text-slate-500">09:00 AM</span>
</div>
<h3 className="title-text text-base font-medium text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">Tech Conference 2024</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Join us for the annual developer meetup featuring keynotes from industry leaders and hands-on technical sessions.</p>
<div className="mt-auto flex flex-col gap-4">
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-indigo-400" icon="solar:map-point-linear" width="16"></iconify-icon>
                            Moscone Center
                        </div>
<div className="card-footer flex items-center justify-between pt-4 border-t border-slate-100">
<div className="availability-info flex flex-col gap-0.5">
<span className="text-xs text-slate-500">Availability</span>
<span className="text-sm font-medium text-slate-900">180 spots left</span>
</div>
<div className="ticket-info hidden flex flex-col gap-0.5">
<span className="text-xs text-slate-500">Ticket</span>
<span className="text-sm font-medium text-slate-900">Standard Pass</span>
</div>
<button className="btn-register rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700 transition-colors active:scale-[0.98]" onclick="toggleRegister('1')">
                                Register
                            </button>
<button className="btn-cancel hidden rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-rose-600 shadow-sm hover:bg-rose-50 hover:border-rose-200 transition-colors" onclick="toggleRegister('1')">
                                Cancel
                            </button>
</div>
</div>
</div>

<div className="event-card group flex flex-col rounded-xl border border-emerald-200 bg-emerald-50/40 backdrop-blur-sm p-5 shadow-sm shadow-emerald-100/50 transition-all relative overflow-hidden" data-event="2">
<div className="registered-badge absolute top-0 right-0 border-b border-l border-emerald-200 bg-emerald-100/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-emerald-800 rounded-bl-lg">
                        Registered
                    </div>
<div className="mb-4 flex items-center justify-between mt-2">
<div className="inline-flex items-center gap-1.5 rounded-md bg-white px-2 py-1 text-xs font-medium text-slate-600 border border-slate-200 shadow-sm">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
                            Nov 02, 2024
                        </div>
<span className="text-xs font-medium text-slate-500">14:00 PM</span>
</div>
<h3 className="title-text text-base font-medium text-slate-900 mb-1 group-hover:text-emerald-700 transition-colors">Design Systems Workshop</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Learn how to build and maintain scalable design systems using modern tools like Figma and React.</p>
<div className="mt-auto flex flex-col gap-4">
<div className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-emerald-500" icon="solar:laptop-minimalistic-linear" width="16"></iconify-icon>
                            Online (Zoom)
                        </div>
<div className="card-footer flex items-center justify-between pt-4 border-t border-emerald-200/60">
<div className="availability-info hidden flex flex-col gap-0.5">
<span className="text-xs text-slate-500">Availability</span>
<span className="text-sm font-medium text-slate-900">48 spots left</span>
</div>
<div className="ticket-info flex flex-col gap-0.5">
<span className="text-xs text-slate-500">Ticket</span>
<span className="text-sm font-medium text-slate-900">Standard Pass</span>
</div>
<button className="btn-register hidden rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700 transition-colors active:scale-[0.98]" onclick="toggleRegister('2')">
                                Register
                            </button>
<button className="btn-cancel rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-rose-600 shadow-sm hover:bg-rose-50 hover:border-rose-200 transition-colors" onclick="toggleRegister('2')">
                                Cancel
                            </button>
</div>
</div>
</div>

<div className="event-card group flex flex-col rounded-xl border border-slate-200/60 bg-white/50 backdrop-blur-sm p-5 shadow-sm opacity-75 grayscale-[20%] transition-all hover:grayscale-0 relative overflow-hidden" data-event="3">
<div className="mb-4 flex items-center justify-between mt-2">
<div className="inline-flex items-center gap-1.5 rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500 border border-slate-200/60">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
                            Dec 10, 2024
                        </div>
<span className="text-xs font-medium text-slate-400">18:00 PM</span>
</div>
<h3 className="text-base font-medium text-slate-900 mb-1">End of Year Gala</h3>
<p className="text-sm text-slate-500 mb-4 line-clamp-2">Celebrate the achievements of the year with dining, awards, and networking opportunities.</p>
<div className="mt-auto flex flex-col gap-4">
<div className="flex items-center gap-2 text-sm text-slate-500">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear" width="16"></iconify-icon>
                            Grand Hotel Ballroom
                        </div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<div className="flex flex-col gap-0.5">
<span className="text-xs text-slate-500">Availability</span>
<span className="text-sm font-medium text-rose-500">Sold Out</span>
</div>
<button className="rounded-md border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-400 cursor-not-allowed" disabled="">
                                Register
                            </button>
</div>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
