import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        /* State & Data */
        let state = {
            eventsTotal: 12,
            eventsAdded: 2,
            rsvpTotal: 1482,
            myRsvps: 1
        };

        /* Initialization */
        document.addEventListener('DOMContentLoaded', () => {
            initTilt();
            closeActionMenusOnClickOutside();
        });

        /* 3D Tilt Effect */
        function initTilt() {
            const container = document.getElementById('hero-3d-container');
            const tiltElements = document.querySelectorAll('.tilt-element');

            if (container && tiltElements.length > 0) {
                container.addEventListener('mousemove', (e) => {
                    const rect = container.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -10; 
                    const rotateY = ((x - centerX) / centerX) * 10;
                    
                    tiltElements.forEach(el => {
                        el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                    });
                });

                container.addEventListener('mouseleave', () => {
                    tiltElements.forEach(el => {
                        el.style.transform = `rotateX(0deg) rotateY(0deg)`;
                    });
                });
            }
        }

        /* Toast Notifications */
        function showToast(message, type = 'success') {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            
            const icon = type === 'success' ? 'solar:check-circle-linear' : 'solar:danger-circle-linear';
            const bgClass = type === 'success' ? 'bg-black text-white' : 'bg-red-500 text-white';
            
            toast.className = `px-4 py-3 rounded-lg shadow-xl text-sm font-medium transform transition-all duration-300 translate-y-10 opacity-0 flex items-center gap-2 ${bgClass}`;
            toast.innerHTML = `<iconify-icon icon="${icon}" style="font-size:1.2rem;"></iconify-icon> ${message}`;
            
            container.appendChild(toast);
            
            requestAnimationFrame(() => {
                toast.classList.remove('translate-y-10', 'opacity-0');
            });
            
            setTimeout(() => {
                toast.classList.add('translate-y-10', 'opacity-0');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        /* View Switching (Organizer vs Attendee) */
        function switchView(view) {
            const orgView = document.getElementById('organizer-view');
            const attView = document.getElementById('attendee-view');
            const headerTitle = document.getElementById('header-title');
            const roleText = document.getElementById('current-role-text');
            
            // Checkmarks
            const checkOrg = document.querySelector('#role-org .check-icon');
            const checkAtt = document.querySelector('#role-att .check-icon');
            const btnOrg = document.getElementById('role-org');
            const btnAtt = document.getElementById('role-att');

            if(view === 'organizer') {
                orgView.classList.remove('hidden');
                attView.classList.add('hidden');
                headerTitle.textContent = 'Organizer Dashboard';
                roleText.textContent = 'Role: Organizer';
                
                checkOrg.classList.remove('hidden');
                checkAtt.classList.add('hidden');
                btnOrg.classList.replace('text-orange-600', 'text-black');
                btnOrg.classList.replace('hover:bg-orange-50', 'bg-orange-50');
                btnAtt.classList.replace('text-black', 'text-orange-600');
                btnAtt.classList.replace('bg-orange-50', 'hover:bg-orange-50');

                // If coming from landing
                document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
                showToast('Switched to Organizer View');
            } else {
                orgView.classList.add('hidden');
                attView.classList.remove('hidden');
                headerTitle.textContent = 'Attendee Portal';
                roleText.textContent = 'Role: Attendee';

                checkAtt.classList.remove('hidden');
                checkOrg.classList.add('hidden');
                btnAtt.classList.replace('text-orange-600', 'text-black');
                btnAtt.classList.replace('hover:bg-orange-50', 'bg-orange-50');
                btnOrg.classList.replace('text-black', 'text-orange-600');
                btnOrg.classList.replace('bg-orange-50', 'hover:bg-orange-50');

                document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
                showToast('Switched to Attendee View');
            }
            
            // Close mobile menu if open
            if(!document.getElementById('sidebar').classList.contains('-translate-x-full')) {
                toggleMobileMenu();
            }
        }

        /* Sidebar Navigation Mock */
        function navAction(pageName) {
            showToast(`Navigated to ${pageName}`);
        }
        function navSwitch(btn, view) {
            document.querySelectorAll('.sidebar-nav-item').forEach(el => {
                el.classList.remove('bg-orange-100', 'text-black');
                el.classList.add('hover:bg-orange-50', 'hover:text-black', 'text-orange-600');
            });
            btn.classList.remove('hover:bg-orange-50', 'hover:text-black', 'text-orange-600');
            btn.classList.add('bg-orange-100', 'text-black');
            if(view === 'organizer') switchView('organizer');
        }

        /* Mobile Menu */
        function toggleMobileMenu() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('mobile-overlay');
            
            if (sidebar.classList.contains('-translate-x-full')) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
            }
        }

        /* Modals */
        function openCreateModal() {
            const modal = document.getElementById('create-modal');
            const content = document.getElementById('create-modal-content');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('scale-95');
            }, 10);
        }

        function closeCreateModal() {
            const modal = document.getElementById('create-modal');
            const content = document.getElementById('create-modal-content');
            modal.classList.add('opacity-0');
            content.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.getElementById('create-event-form').reset();
            }, 300);
        }

        function openDemoModal() {
            const modal = document.getElementById('demo-modal');
            const content = document.getElementById('demo-modal-content');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('scale-95');
            }, 10);
        }

        function closeDemoModal() {
            const modal = document.getElementById('demo-modal');
            const content = document.getElementById('demo-modal-content');
            modal.classList.add('opacity-0');
            content.classList.add('scale-95');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }

        /* Event Table Logic */
        function toggleStatus(checkbox) {
            const label = checkbox.parentElement.querySelector('.status-label');
            if (checkbox.checked) {
                label.textContent = 'Accepting';
                showToast('Event status set to Accepting');
            } else {
                label.textContent = 'Closed';
                showToast('Event status set to Closed');
            }
        }

        function toggleActionMenu(btn) {
            // Close others
            document.querySelectorAll('.action-menu').forEach(menu => {
                if (menu !== btn.nextElementSibling) menu.classList.add('hidden');
            });
            btn.nextElementSibling.classList.toggle('hidden');
        }

        function closeActionMenusOnClickOutside() {
            document.addEventListener('click', (e) => {
                if (!e.target.closest('td.relative')) {
                    document.querySelectorAll('.action-menu').forEach(m => m.classList.add('hidden'));
                }
            });
        }

        function deleteEvent(btn) {
            const row = btn.closest('tr');
            row.style.opacity = '0';
            row.style.transform = 'scale(0.98)';
            row.style.transition = 'all 0.3s ease';
            
            setTimeout(() => {
                row.remove();
                state.eventsTotal--;
                updateStats();
                showToast('Event deleted successfully', 'success');
            }, 300);
        }

        function handleCreateEvent(e) {
            e.preventDefault();
            
            const name = document.getElementById('new-event-name').value;
            const location = document.getElementById('new-event-location').value;
            const dateStr = document.getElementById('new-event-date').value;
            const timeStr = document.getElementById('new-event-time').value;
            const capacity = document.getElementById('new-event-capacity').value;

            // Simple date formatting
            const dateObj = new Date(dateStr + 'T' + timeStr);
            const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            const formattedTime = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });

            const tbody = document.getElementById('events-tbody');
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-orange-50/80 transition-colors group animate-fade-in-up';
            
            tr.innerHTML = `
                <td class="px-6 py-4">
                    <div class="font-medium text-black">${name}</div>
                    <div class="text-xs text-orange-500 mt-1">${location}</div>
                </td>
                <td class="px-6 py-4">
                    ${formattedDate}
                    <div class="text-xs text-orange-500 mt-1">${formattedTime}</div>
                </td>
                <td class="px-6 py-4">
                    <div class="flex items-center gap-3">
                        <div class="w-full bg-orange-100 rounded-full h-1.5 max-w-[80px] overflow-hidden">
                            <div class="bg-yellow-600 h-1.5 rounded-full" style="width: 0%"></div>
                        </div>
                        <span class="text-xs font-medium text-orange-700">0/${capacity}</span>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer" checked onchange="toggleStatus(this)">
                        <div class="w-9 h-5 bg-orange-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-orange-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-black"></div>
                        <span class="ml-3 text-xs font-medium text-orange-600 select-none status-label">Accepting</span>
                    </label>
                </td>
                <td class="px-6 py-4 text-right relative">
                    <button onclick="toggleActionMenu(this)" class="text-orange-400 hover:text-black transition-colors p-1 rounded-md hover:bg-orange-100">
                        <iconify-icon icon="solar:menu-dots-bold" style="font-size: 1.25rem;"></iconify-icon>
                    </button>
                    <div class="action-menu hidden absolute right-6 top-10 bg-white border border-orange-200 rounded-md shadow-lg z-10 w-32 py-1 text-left">
                        <button onclick="deleteEvent(this)" class="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2">
                            <iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon> Delete
                        </button>
                    </div>
                </td>
            `;

            tbody.prepend(tr);
            
            state.eventsTotal++;
            state.eventsAdded++;
            updateStats();
            
            closeCreateModal();
            showToast('New event created successfully');
        }

        function updateStats() {
            document.getElementById('stat-total-events').innerText = state.eventsTotal;
            document.getElementById('stat-event-growth').innerText = state.eventsAdded;
            document.getElementById('stat-total-rsvps').innerText = state.rsvpTotal.toLocaleString();
        }

        /* Attendee RSVP Logic */
        function handleRSVP(btn) {
            const card = btn.closest('.event-card');
            const evtId = card.getAttribute('data-id');
            const title = card.querySelector('.event-title').innerText;
            const dateHtml = card.querySelector('.event-date').querySelector('span').innerText;
            
            // UI State change for button
            btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" style="font-size: 1.1rem;"></iconify-icon> Confirmed';
            btn.classList.remove('bg-white', 'text-black', 'hover:bg-orange-200');
            btn.classList.add('bg-orange-500/10', 'text-orange-400', 'border', 'border-orange-500/20', 'cursor-not-allowed');
            btn.disabled = true;
            
            // Add to My RSVPs
            const rsvpList = document.getElementById('my-rsvps');
            const newCard = document.createElement('div');
            newCard.className = 'rsvp-ticket bg-orange-800/40 border border-orange-700/50 rounded-xl p-6 animate-fade-in-up transition-all hover:bg-orange-800/60';
            newCard.setAttribute('data-id', evtId);
            
            newCard.innerHTML = `
                <div class="flex justify-between items-start mb-6">
                    <div>
                        <h4 class="text-white font-medium text-base tracking-tight mb-1">${title}</h4>
                        <p class="text-xs text-orange-400 flex items-center gap-1.5">
                            <iconify-icon icon="solar:calendar-linear" style="stroke-width: 1.5;"></iconify-icon>
                            ${dateHtml}
                        </p>
                    </div>
                    <span class="bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-1 rounded-md text-xs font-medium">Confirmed</span>
                </div>
                <div class="flex gap-3">
                    <button onclick="showToast('Ticket QR code sent to email', 'success')" class="flex-1 bg-white text-black text-xs font-medium py-2.5 rounded-lg hover:bg-neutral-200 transition-colors text-center shadow-sm">View Ticket</button>
                    <button class="flex-1 bg-transparent border border-orange-600/50 text-orange-300 text-xs font-medium py-2.5 rounded-lg hover:bg-orange-700 hover:text-white transition-colors text-center" onclick="cancelRSVP(this, '${evtId}')">Cancel RSVP</button>
                </div>
            `;
            rsvpList.prepend(newCard);
            
            state.myRsvps++;
            document.getElementById('rsvp-count').innerText = state.myRsvps;
            
            state.rsvpTotal++;
            updateStats();
            
            showToast('Successfully RSVP\'d to ' + title);
        }

        function cancelRSVP(btn, evtId) {
            // Remove Ticket
            const ticket = btn.closest('.rsvp-ticket');
            ticket.style.opacity = '0';
            ticket.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                ticket.remove();
                state.myRsvps--;
                document.getElementById('rsvp-count').innerText = state.myRsvps;
                
                state.rsvpTotal--;
                updateStats();

                // Re-enable discover button if it exists
                const discoverCard = document.querySelector(`.event-card[data-id="${evtId}"]`);
                if(discoverCard) {
                    const originalBtn = discoverCard.querySelector('.rsvp-btn');
                    originalBtn.innerHTML = 'RSVP Now';
                    originalBtn.classList.add('bg-white', 'text-black', 'hover:bg-orange-200');
                    originalBtn.classList.remove('bg-orange-500/10', 'text-orange-400', 'border', 'border-orange-500/20', 'cursor-not-allowed');
                    originalBtn.disabled = false;
                }
                
                showToast('RSVP Canceled');
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none" id="toast-container"></div>

<div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="demo-modal">
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden transform scale-95 transition-transform duration-300" id="demo-modal-content">
<div className="flex items-center justify-between p-4 border-b border-neutral-800">
<h3 className="text-white font-medium text-sm flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:play-circle-linear"></iconify-icon> Platform Demo
                </h3>
<button className="text-neutral-400 hover:text-white transition-colors" onclick="closeDemoModal()">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
<div className="aspect-video bg-black relative flex items-center justify-center">
<div className="text-center">
<iconify-icon className="text-neutral-700 mb-2" icon="solar:video-frame-linear" style={{fontSize: '3rem'}}></iconify-icon>
<p className="text-neutral-500 text-sm">Demo video playback simulation.</p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="create-modal">
<div className="bg-white border border-orange-200 rounded-xl w-full max-w-md shadow-2xl transform scale-95 transition-transform duration-300" id="create-modal-content">
<form id="create-event-form" onsubmit="handleCreateEvent(event)">
<div className="flex items-center justify-between p-5 border-b border-orange-100">
<h3 className="text-black font-semibold text-base tracking-tight">Create New Event</h3>
<button className="text-orange-400 hover:text-black transition-colors" onclick="closeCreateModal()" type="button">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
<div className="p-5 space-y-4">
<div>
<label className="block text-xs font-medium text-orange-600 mb-1.5">Event Name</label>
<input className="w-full bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-sm text-black focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all placeholder:text-orange-300" id="new-event-name" placeholder="e.g. Developer Summit" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-orange-600 mb-1.5">Location</label>
<input className="w-full bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-sm text-black focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all placeholder:text-orange-300" id="new-event-location" placeholder="e.g. New York, NY or Virtual" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-orange-600 mb-1.5">Date</label>
<input className="w-full bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-sm text-black focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all" id="new-event-date" required="" type="date"/>
</div>
<div>
<label className="block text-xs font-medium text-orange-600 mb-1.5">Time</label>
<input className="w-full bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-sm text-black focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all" id="new-event-time" required="" type="time"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-orange-600 mb-1.5">Capacity</label>
<input className="w-full bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 text-sm text-black focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-all placeholder:text-orange-300" id="new-event-capacity" min="1" placeholder="100" required="" type="number"/>
</div>
</div>
<div className="p-5 border-t border-orange-100 flex items-center justify-end gap-3 bg-neutral-50/50 rounded-b-xl">
<button className="px-4 py-2 text-sm font-medium text-orange-600 hover:text-black transition-colors" onclick="closeCreateModal()" type="button">Cancel</button>
<button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm" type="submit">Create Event</button>
</div>
</form>
</div>
</div>

<div className="fixed inset-0 bg-black/50 z-30 hidden backdrop-blur-sm transition-opacity opacity-0" id="mobile-overlay" onclick="toggleMobileMenu()"></div>

<div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black" id="landing-page">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen" loop="" muted="" playsinline="">
<source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-connections-in-space-26214-large.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-transparent z-0"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50 z-0"></div>
<nav className="absolute top-0 w-full px-8 py-6 flex justify-between items-center z-20">
<span className="text-xl font-semibold tracking-tighter text-white">EVNT.</span>
<div className="flex items-center gap-6">
<a className="text-sm font-medium text-neutral-300 hover:text-white transition-colors hidden sm:block" href="#dashboard" onclick="switchView('attendee-view')">Discover Events</a>
<a className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg flex items-center gap-2" href="#dashboard" onclick="switchView('organizer')">
                    Enter Dashboard
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</nav>
<div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-20 pb-32 flex flex-col lg:flex-row items-center justify-between gap-16">
<div className="flex-1 text-center lg:text-left animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">Platform Update 2.0</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-white mb-6 leading-tight">
                    Manage events <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">in a new dimension.</span>
</h1>
<p className="text-base lg:text-lg text-neutral-400 font-normal max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                    The next-generation platform for creators and organizers. Immerse your audience, manage RSVPs seamlessly, and track analytics in real-time.
                </p>
<div className="flex items-center justify-center lg:justify-start gap-4">
<a className="bg-white text-black hover:bg-neutral-200 text-sm font-medium px-6 py-3 rounded-lg transition-colors shadow-xl" href="#dashboard" onclick="switchView('organizer')">
                        Start Building
                    </a>
<button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium px-6 py-3 rounded-lg transition-colors backdrop-blur-sm flex items-center gap-2" onclick="openDemoModal()">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
                        Watch Demo
                    </button>
</div>
</div>
<div className="flex-1 perspective-1000 w-full relative h-[400px] flex items-center justify-center mt-8 lg:mt-0 cursor-crosshair" id="hero-3d-container">

<div className="tilt-element absolute right-0 lg:-right-4 top-10 w-full max-w-sm z-20">
<div className="animate-float w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl pointer-events-none">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center shadow-inner">
<iconify-icon className="text-white text-2xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="bg-white/10 text-white border border-white/10 px-2.5 py-1 rounded-md text-xs font-medium backdrop-blur-md">Featured</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-1">Design Vision 2024</h3>
<p className="text-xs text-neutral-400 flex items-center gap-1.5 mb-6">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                            San Francisco • Oct 24
                        </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900"></div>
<div className="w-8 h-8 rounded-full bg-neutral-700 border-2 border-neutral-900"></div>
<div className="w-8 h-8 rounded-full bg-neutral-600 border-2 border-neutral-900 flex items-center justify-center text-xs text-white font-medium">+82</div>
</div>
<div className="bg-orange-500 text-white text-xs font-medium px-4 py-2 rounded-lg shadow-lg">Get Tickets</div>
</div>
</div>
</div>

<div className="tilt-element absolute left-0 lg:-left-12 -top-10 w-full max-w-sm z-10 scale-95 opacity-80 mix-blend-luminosity transition-all duration-500">
<div className="animate-float-delayed w-full bg-white/5 backdrop-blur-md border border-white/5 rounded-2xl p-6 shadow-2xl pointer-events-none">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-700 flex items-center justify-center shadow-inner">
<iconify-icon className="text-white text-2xl" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="bg-white/5 text-neutral-300 border border-white/5 px-2.5 py-1 rounded-md text-xs font-medium backdrop-blur-md">Virtual</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-1">DevConf Global</h3>
<p className="text-xs text-neutral-400 flex items-center gap-1.5 mb-6">
<iconify-icon icon="solar:laptop-linear"></iconify-icon>
                            Online • Nov 12
                        </p>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-900"></div>
<div className="w-8 h-8 rounded-full bg-neutral-700 border-2 border-neutral-900"></div>
<div className="w-8 h-8 rounded-full bg-neutral-600 border-2 border-neutral-900 flex items-center justify-center text-xs text-white font-medium">+4k</div>
</div>
<div className="bg-white/10 text-white text-xs font-medium px-4 py-2 rounded-lg">Register</div>
</div>
</div>
</div>

<div className="tilt-element absolute right-12 lg:right-32 -bottom-12 w-48 z-30">
<div className="animate-float-fast bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl p-4 shadow-[0_20px_40px_rgba(249,115,22,0.4)] border border-white/30 text-white backdrop-blur-lg pointer-events-none">
<div className="flex items-center justify-between mb-3 border-b border-white/20 pb-2">
<span className="text-xs font-medium tracking-widest uppercase opacity-90">VIP Pass</span>
<iconify-icon icon="solar:ticket-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div className="text-lg font-semibold tracking-tight leading-tight">All-Access<br/>Admission</div>
<div className="mt-3 text-xs opacity-75 font-medium flex items-center justify-between">
<span>ID: #8921A</span>
<iconify-icon icon="solar:star-fall-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<a className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-neutral-500 hover:text-neutral-300 transition-colors z-20 flex flex-col items-center gap-2" href="#dashboard">
<span className="text-xs font-medium tracking-widest uppercase">Scroll to Explore</span>
<iconify-icon icon="solar:arrow-down-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</a>
</div>

<div className="flex h-screen w-full overflow-hidden relative z-20 bg-neutral-50 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]" id="dashboard">

<aside className="fixed md:relative md:flex w-64 h-full bg-white border-r border-orange-200 flex-col z-40 transform -translate-x-full md:translate-x-0 transition-transform duration-300" id="sidebar">
<div className="h-16 flex items-center justify-between px-6 border-b border-orange-200 shrink-0">
<span className="text-xl font-semibold tracking-tighter text-black">EVNT.</span>
<button className="md:hidden text-orange-500 hover:text-black" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
</button>
</div>
<nav className="flex-1 overflow-y-auto pt-6 pr-3 pb-6 pl-3 space-y-1">
<button className="w-full sidebar-nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium bg-orange-100 text-black rounded-md transition-colors" onclick="navSwitch(this, 'organizer')">
<iconify-icon icon="solar:home-2-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
                    Dashboard
                </button>
<button className="w-full sidebar-nav-item flex items-center gap-3 hover:bg-orange-50 hover:text-black transition-colors text-sm font-medium text-orange-600 rounded-md px-3 py-2" onclick="navAction('All Events')">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
                    All Events
                </button>
<button className="w-full sidebar-nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50 hover:text-black rounded-md transition-colors" onclick="navAction('RSVP List')">
<iconify-icon icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
                    RSVP List
                </button>
<button className="w-full sidebar-nav-item flex items-center gap-3 px-3 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50 hover:text-black rounded-md transition-colors" onclick="navAction('Analytics')">
<iconify-icon icon="solar:chart-square-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
                    Analytics
                </button>
</nav>
<div className="p-4 border-t border-orange-200">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-orange-600 hover:bg-orange-50 hover:text-black rounded-md transition-colors" onclick="navAction('Settings')">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
                    Settings
                </button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden bg-neutral-50 relative">
<header className="flex md:px-8 shrink-0 bg-white h-16 z-10 border-orange-200 border-b pr-4 pl-4 items-center justify-between">
<div className="flex items-center gap-4">
<button className="md:hidden text-orange-500 hover:text-black transition-colors" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5', fontSize: '1.5rem'}}></iconify-icon>
</button>
<h1 className="text-xl font-semibold tracking-tight text-black hidden sm:block" id="header-title">Organizer Dashboard</h1>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<button className="flex items-center gap-2 text-sm font-medium border border-orange-200 bg-white rounded-md px-3 py-1.5 hover:bg-orange-50 transition-colors shadow-sm text-orange-700" id="role-selector-btn">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span id="current-role-text">Role: Organizer</span>
<iconify-icon icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="absolute right-0 mt-2 w-48 bg-white border border-orange-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="py-1 flex flex-col">
<div className="px-4 py-2 border-b border-orange-100">
<p className="text-xs text-orange-500 font-medium uppercase tracking-wider">Switch Dashboard</p>
</div>
<button className="w-full text-left px-4 py-2 text-sm text-orange-600 hover:bg-orange-50 hover:text-black transition-colors" onclick="showToast('Admin view locked.', 'error')">
                                    System Admin
                                </button>
<button className="w-full text-left px-4 py-2 text-sm text-black bg-orange-50 font-medium flex items-center justify-between" id="role-org" onclick="switchView('organizer')">
                                    Organizer
                                    <iconify-icon className="check-icon" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-full text-left px-4 py-2 text-sm text-orange-600 hover:bg-orange-50 hover:text-black flex items-center justify-between transition-colors" id="role-att" onclick="switchView('attendee')">
                                    Attendee View
                                    <iconify-icon className="check-icon hidden" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</header>

<div className="p-4 md:p-8 overflow-y-auto flex-1 pb-24 relative" id="main-scroll-area">

<div className="block transition-opacity duration-300" id="organizer-view">

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
<div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium text-orange-500">Total Events</div>
<iconify-icon className="text-orange-400" icon="solar:calendar-bold-duotone" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="text-3xl font-semibold tracking-tight text-black" id="stat-total-events">12</div>
<div className="text-xs text-orange-500 mt-2 flex items-center gap-1">
<span className="text-amber-600 font-medium flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> <span id="stat-event-growth">2</span>
</span> 
                                since last month
                            </div>
</div>
<div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium text-orange-500">Total RSVPs</div>
<iconify-icon className="text-orange-400" icon="solar:users-group-two-rounded-bold-duotone" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="text-3xl font-semibold tracking-tight text-black" id="stat-total-rsvps">1,482</div>
<div className="text-xs text-orange-500 mt-2 flex items-center gap-1">
<span className="text-amber-600 font-medium flex items-center">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> 154
                                </span> 
                                new this week
                            </div>
</div>
<div className="bg-white border border-orange-200 rounded-xl p-6 shadow-sm">
<div className="flex items-center justify-between mb-2">
<div className="text-sm font-medium text-orange-500">System Status</div>
<iconify-icon className="text-orange-400" icon="solar:server-square-bold-duotone" style={{fontSize: '1.25rem'}}></iconify-icon>
</div>
<div className="flex items-center gap-3 mt-3">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
</span>
<span className="text-sm font-medium text-black">RSVP Engine Active</span>
</div>
<div className="text-xs text-orange-500 mt-3">Django backend operational</div>
</div>
</div>

<div className="bg-white border border-orange-200 rounded-xl shadow-sm overflow-hidden mb-12">
<div className="px-6 py-5 border-b border-orange-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<h2 className="text-lg font-semibold tracking-tight text-black">Active Events</h2>
<button className="bg-white border border-orange-200 text-black text-sm font-medium px-4 py-2 rounded-lg hover:bg-orange-50 transition-colors flex items-center gap-2 shadow-sm" onclick="openCreateModal()">
<iconify-icon icon="solar:add-circle-linear" style={{strokeWidth: '1.5', fontSize: '1.1rem'}}></iconify-icon>
                                Create Event
                            </button>
</div>
<div className="overflow-x-auto min-h-[200px]">
<table className="w-full text-left text-sm text-orange-600 whitespace-nowrap">
<thead className="bg-orange-50/50 text-orange-500 border-b border-orange-200">
<tr>
<th className="px-6 py-4 font-medium">Event Detail</th>
<th className="px-6 py-4 font-medium">Date &amp; Time</th>
<th className="px-6 py-4 font-medium">Capacity / RSVPs</th>
<th className="px-6 py-4 font-medium">RSVP Status</th>
<th className="px-6 py-4 font-medium text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-orange-100" id="events-tbody">

<tr className="hover:bg-orange-50/80 transition-colors group">
<td className="px-6 py-4">
<div className="font-medium text-black">Design Vision 2024</div>
<div className="text-xs text-orange-500 mt-1">San Francisco, CA</div>
</td>
<td className="px-6 py-4">
                                            Oct 24, 2024
                                            <div className="text-xs text-orange-500 mt-1">6:00 PM PST</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-full bg-orange-100 rounded-full h-1.5 max-w-[80px] overflow-hidden">
<div className="bg-yellow-600 h-1.5 rounded-full" style={{width: '85%'}}></div>
</div>
<span className="text-xs font-medium text-orange-700">85/100</span>
</div>
</td>
<td className="px-6 py-4">
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" onchange="toggleStatus(this)" type="checkbox"/>
<div className="w-9 h-5 bg-orange-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-orange-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-black"></div>
<span className="ml-3 text-xs font-medium text-orange-600 select-none status-label">Accepting</span>
</label>
</td>
<td className="px-6 py-4 text-right relative">
<button className="text-orange-400 hover:text-black transition-colors p-1 rounded-md hover:bg-orange-100" onclick="toggleActionMenu(this)">
<iconify-icon icon="solar:menu-dots-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<div className="action-menu hidden absolute right-6 top-10 bg-white border border-orange-200 rounded-md shadow-lg z-10 w-32 py-1 text-left">
<button className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2" onclick="deleteEvent(this)">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon> Delete
                                                </button>
</div>
</td>
</tr>

<tr className="hover:bg-orange-50/80 transition-colors group">
<td className="px-6 py-4">
<div className="font-medium text-black">DevConf Global</div>
<div className="text-xs text-orange-500 mt-1">Virtual Online Event</div>
</td>
<td className="px-6 py-4">
                                            Nov 12, 2024
                                            <div className="text-xs text-orange-500 mt-1">9:00 AM EST</div>
</td>
<td className="px-6 py-4">
<div className="flex items-center gap-3">
<div className="w-full bg-orange-100 rounded-full h-1.5 max-w-[80px] overflow-hidden">
<div className="bg-yellow-600 h-1.5 rounded-full" style={{width: '100%'}}></div>
</div>
<span className="text-xs font-medium text-orange-700">500/500</span>
</div>
</td>
<td className="px-6 py-4">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" onchange="toggleStatus(this)" type="checkbox"/>
<div className="w-9 h-5 bg-orange-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-orange-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-black"></div>
<span className="ml-3 text-xs font-medium text-orange-600 select-none status-label">Closed</span>
</label>
</td>
<td className="px-6 py-4 text-right relative">
<button className="text-orange-400 hover:text-black transition-colors p-1 rounded-md hover:bg-orange-100" onclick="toggleActionMenu(this)">
<iconify-icon icon="solar:menu-dots-bold" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<div className="action-menu hidden absolute right-6 top-10 bg-white border border-orange-200 rounded-md shadow-lg z-10 w-32 py-1 text-left">
<button className="w-full text-left px-4 py-2 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2" onclick="deleteEvent(this)">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon> Delete
                                                </button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="hidden animate-fade-in-up" id="attendee-view">
<div className="bg-orange-950 rounded-2xl shadow-xl overflow-hidden border border-orange-800/50 text-orange-300">
<header className="px-6 py-5 border-b border-orange-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-black/40 gap-4">
<h1 className="text-lg font-semibold tracking-tight text-white">Discover &amp; Manage RSVPs</h1>
<div className="flex items-center gap-2">
<span className="text-xs font-medium bg-orange-900 px-3 py-1.5 rounded-full text-orange-300 border border-orange-800 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                                    Viewing as Attendee
                                </span>
</div>
</header>
<div className="p-6 bg-black/20">
<h2 className="text-white text-base font-medium mb-4 flex items-center gap-2">
<iconify-icon icon="solar:magnifer-linear"></iconify-icon> Explore Upcoming
                            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10" id="discover-events-grid">
<div className="event-card bg-orange-900/30 border border-orange-800/50 rounded-xl p-5 hover:border-orange-600/50 transition-colors" data-id="evt1">
<div className="flex items-center gap-2 mb-3">
<span className="bg-orange-500/20 text-orange-400 text-xs px-2 py-0.5 rounded border border-orange-500/20">Tech</span>
</div>
<h4 className="event-title text-white font-medium text-base tracking-tight mb-1">AI Founders Mixer</h4>
<p className="event-date text-xs text-orange-400/80 flex items-center gap-1.5 mb-5">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> <span>Dec 5 • Austin, TX</span>
</p>
<button className="rsvp-btn w-full bg-white text-black text-xs font-medium py-2 rounded-lg hover:bg-orange-200 transition-colors shadow-sm flex items-center justify-center gap-1.5" onclick="handleRSVP(this)">
                                        RSVP Now
                                    </button>
</div>
<div className="event-card bg-orange-900/30 border border-orange-800/50 rounded-xl p-5 hover:border-orange-600/50 transition-colors" data-id="evt2">
<div className="flex items-center gap-2 mb-3">
<span className="bg-orange-500/20 text-orange-400 text-xs px-2 py-0.5 rounded border border-orange-500/20">Workshop</span>
</div>
<h4 className="event-title text-white font-medium text-base tracking-tight mb-1">Web3 Dev Sprint</h4>
<p className="event-date text-xs text-orange-400/80 flex items-center gap-1.5 mb-5">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> <span>Dec 10 • Virtual</span>
</p>
<button className="rsvp-btn w-full bg-white text-black text-xs font-medium py-2 rounded-lg hover:bg-orange-200 transition-colors shadow-sm flex items-center justify-center gap-1.5" onclick="handleRSVP(this)">
                                        RSVP Now
                                    </button>
</div>
<div className="event-card bg-orange-900/30 border border-orange-800/50 rounded-xl p-5 hover:border-orange-600/50 transition-colors" data-id="evt3">
<div className="flex items-center gap-2 mb-3">
<span className="bg-orange-500/20 text-orange-400 text-xs px-2 py-0.5 rounded border border-orange-500/20">Social</span>
</div>
<h4 className="event-title text-white font-medium text-base tracking-tight mb-1">Year-End Gala</h4>
<p className="event-date text-xs text-orange-400/80 flex items-center gap-1.5 mb-5">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> <span>Dec 20 • New York</span>
</p>
<button className="rsvp-btn w-full bg-white text-black text-xs font-medium py-2 rounded-lg hover:bg-orange-200 transition-colors shadow-sm flex items-center justify-center gap-1.5" onclick="handleRSVP(this)">
                                        RSVP Now
                                    </button>
</div>
</div>
<div className="flex items-center justify-between mb-4 border-t border-orange-800/50 pt-8">
<h2 className="text-white text-base font-medium flex items-center gap-2">
<iconify-icon icon="solar:ticket-linear"></iconify-icon> My RSVPs
                                </h2>
<span className="bg-white/10 text-white text-xs px-2.5 py-1 rounded-full"><span id="rsvp-count">1</span> Confirmed</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="my-rsvps">

<div className="rsvp-ticket bg-orange-800/40 border border-orange-700/50 rounded-xl p-6 transition-all hover:bg-orange-800/60" data-id="evt_pre">
<div className="flex justify-between items-start mb-6">
<div>
<h4 className="text-white font-medium text-base tracking-tight mb-1">Design Vision 2024</h4>
<p className="text-xs text-orange-400 flex items-center gap-1.5">
<iconify-icon icon="solar:calendar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                                Oct 24 • San Francisco, CA
                                            </p>
</div>
<span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2.5 py-1 rounded-md text-xs font-medium">Confirmed</span>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-white text-black text-xs font-medium py-2.5 rounded-lg hover:bg-neutral-200 transition-colors text-center shadow-sm" onclick="showToast('Ticket QR code sent to email', 'success')">View Ticket</button>
<button className="flex-1 bg-transparent border border-orange-600/50 text-orange-300 text-xs font-medium py-2.5 rounded-lg hover:bg-orange-700 hover:text-white transition-colors text-center" onclick="cancelRSVP(this, 'evt_pre')">Cancel RSVP</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
