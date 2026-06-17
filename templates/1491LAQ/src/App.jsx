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
      
      // Initialize lucide icons with stroke width 1.5
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // Data
      const borrowers = [
        { id: 1, name: "Amina Hassan", location: "Kenya", region: "Africa", amountNeeded: 250, amountFunded: 120, story: "Amina runs a small bakery and needs funds to buy a new oven to expand her business and support her children’s education.", photo: "https://images.unsplash.com/photo-1525450754258-0f4cbd7d3cdf?q=80&w=600&auto=format&fit=crop", coords: [-1.286389, 36.817223] },
        { id: 2, name: "Carlos Ramirez", location: "Peru", region: "South America", amountNeeded: 500, amountFunded: 300, story: "Carlos is a farmer seeking funds to buy better seeds and tools to improve crop yield for his village.", photo: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600&auto=format&fit=crop", coords: [-12.046374, -77.042793] },
        { id: 3, name: "Sita Devi", location: "India", region: "Asia", amountNeeded: 400, amountFunded: 150, story: "Sita wants to expand her tailoring business to employ more women in her community.", photo: "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=600&auto=format&fit=crop", coords: [26.912434, 75.787271] },
      ];

      const donors = [
        { id: 1, name: "John Smith", location: "USA", coords: [37.7749, -122.4194] },
        { id: 2, name: "Emma Li", location: "UK", coords: [51.5072, -0.1276] },
        { id: 3, name: "Hiroshi Tanaka", location: "Japan", coords: [35.6762, 139.6503] },
      ];

      // State
      let user = null; // { name, history: [] }
      let country = "All";
      let sortBy = "needed"; // needed | funded
      let search = "";
      let selectedBorrower = null;
      const cardRefs = new Map();
      let map, borrowersLayer, donorsLayer, legendDiv;

      // Elements
      const listEl = document.getElementById('borrower-list');
      const searchEl = document.getElementById('search-input');
      const countryPills = Array.from(document.querySelectorAll('.country-pill'));
      const sortPills = Array.from(document.querySelectorAll('.sort-pill'));
      const dashSection = document.getElementById('dashboard');
      const dashName = document.getElementById('dash-name');
      const historyList = document.getElementById('history-list');
      const dashBorrowers = document.getElementById('dash-borrowers');
      const authModal = document.getElementById('auth-modal');
      const donationModal = document.getElementById('donation-modal');
      const donationAmountEl = document.getElementById('donation-amount');
      const donationPhoto = document.getElementById('donation-photo');
      const donationName = document.getElementById('donation-name');
      const donationLocation = document.getElementById('donation-location');
      const donationNeeded = document.getElementById('donation-needed');
      const toast = document.getElementById('toast');
      const toastText = document.getElementById('toast-text');

      const authActions = document.getElementById('auth-actions');
      const userChip = document.getElementById('user-chip');
      const openDashboardBtn = document.getElementById('open-dashboard');
      const loginBtn = document.getElementById('login-btn');
      const signupBtn = document.getElementById('signup-btn');
      const logoutBtn = document.getElementById('logout-btn');
      const authClose = document.getElementById('auth-close');
      const authSubmit = document.getElementById('auth-submit');
      const authSwitch = document.getElementById('auth-switch');
      const authTitle = document.getElementById('auth-title');
      const signupExtra = document.getElementById('signup-extra');
      const authUsername = document.getElementById('auth-username');
      const userNameTop = document.getElementById('user-name');

      const donationClose = document.getElementById('donation-close');
      const donationCancel = document.getElementById('donation-cancel');
      const donationConfirm = document.getElementById('donation-confirm');
      const quickAmts = [];

      // Utils
      const fmtUSD = (n) => `$${Number(n).toLocaleString()}`;
      const showToast = (msg) => {
        toastText.textContent = msg;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 2200);
      };
      const toggleAuthUI = () => {
        if (user) {
          authActions.classList.add('hidden');
          userChip.classList.remove('hidden');
          openDashboardBtn.dataset.auth = "true";
          openDashboardBtn.classList.remove('hidden');
          userNameTop.textContent = user.name;
          dashName.textContent = user.name;
        } else {
          authActions.classList.remove('hidden');
          userChip.classList.add('hidden');
          openDashboardBtn.dataset.auth = "false";
          openDashboardBtn.classList.add('hidden');
          userNameTop.textContent = 'Guest';
          dashName.textContent = 'Guest';
        }
      };

      // Render borrower cards
      function progressPct(b) {
        return Math.min(100, Math.round((b.amountFunded / b.amountNeeded) * 100));
      }
      function filteredSortedBorrowers() {
        let arr = borrowers.filter(b => {
          const q = search.toLowerCase();
          const matchSearch =
            b.name.toLowerCase().includes(q) ||
            b.location.toLowerCase().includes(q) ||
            b.story.toLowerCase().includes(q);
          const matchCountry = country === "All" || b.location === country;
          return matchSearch && matchCountry;
        });
        if (sortBy === "needed") {
          arr.sort((a, b) => (a.amountNeeded - a.amountFunded) - (b.amountNeeded - b.amountFunded));
        } else {
          arr.sort((a, b) => (b.amountFunded / b.amountNeeded) - (a.amountFunded / a.amountNeeded));
        }
        return arr;
      }
      function renderBorrowerList() {
        listEl.innerHTML = '';
        cardRefs.clear();
        const arr = filteredSortedBorrowers();
        if (arr.length === 0) {
          listEl.innerHTML = '<div class="p-6 text-[14px] text-neutral-400">No results. Try adjusting your filters.</div>';
          return;
        }
        arr.forEach(b => {
          const percent = progressPct(b);
          const li = document.createElement('div');
          li.className = "p-4 hover:bg-neutral-800 transition group";
          li.dataset.id = b.id;

          li.innerHTML = `
            <div class="flex items-start gap-3">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-16 w-16 rounded-md object-cover ring-1 ring-neutral-800" alt="${b.name}" />
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between gap-2">
                  <div>
                    <h4 class="text-[15px] font-semibold tracking-tight">${b.name}</h4>
                    <div class="text-[12px] text-neutral-400 flex items-center gap-1.5 mt-0.5">
                      <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                      ${b.location} • ${b.region}
                    </div>
                  </div>
                  <div class="text-right">
                    <div class="text-[11px] text-neutral-400">Still needed</div>
                    <div class="text-[14px] font-medium">${fmtUSD(b.amountNeeded - b.amountFunded)}</div>
                  </div>
                </div>
                <p class="text-[12px] text-neutral-300 mt-2 line-clamp-2">${b.story}</p>
                <div class="mt-3">
                  <div class="h-2 rounded-full bg-neutral-800 ring-1 ring-neutral-800 overflow-hidden">
                    <div class="h-full bg-emerald-600" style="width:${percent}%"></div>
                  </div>
                  <div class="flex items-center justify-between mt-2 text-[12px] text-neutral-400">
                    <span>${fmtUSD(b.amountFunded)} raised</span>
                    <span>${percent}%</span>
                  </div>
                </div>
                <div class="mt-3 flex items-center justify-between">
                  <button class="inline-flex items-center gap-1.5 px-2.5 h-9 rounded-md bg-neutral-900 text-[12px] text-neutral-200 hover:bg-neutral-800 shadow-sm ring-1 ring-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-700 view-on-map">
                    <i data-lucide="map" class="w-3.5 h-3.5"></i>
                    View on map
                  </button>
                  <button class="inline-flex items-center gap-1.5 px-3 h-9 rounded-md bg-emerald-600 text-white text-[13px] font-medium hover:bg-emerald-700 transition-colors shadow-sm ring-1 ring-emerald-700/40 donate-btn">
                    <i data-lucide="hand-coins" class="w-4 h-4"></i>
                    Donate
                  </button>
                </div>
              </div>
            </div>
          `;
          listEl.appendChild(li);
          cardRefs.set(b.id, li);

          // Wire up buttons per card
          li.querySelector('.view-on-map').addEventListener('click', () => focusBorrowerOnMap(b));
          li.querySelector('.donate-btn').addEventListener('click', () => openDonation(b));
        });
        // Refresh icons inside dynamic content
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Dashboard renders
      function renderHistory() {
        if (!user || !user.history || user.history.length === 0) {
          historyList.innerHTML = '<div class="text-[14px] text-neutral-400">No donations yet.</div>';
          return;
        }
        historyList.innerHTML = '';
        user.history.slice().reverse().forEach(h => {
          const row = document.createElement('div');
          row.className = "p-3 rounded-lg ring-1 ring-neutral-800 bg-neutral-900 mb-2 flex items-center justify-between";
          row.innerHTML = `
            <div class="flex items-center gap-3">
              <i data-lucide="badge-dollar-sign" class="w-4 h-4 text-emerald-500"></i>
              <div>
                <div class="text-[13px] font-medium">${fmtUSD(h.amount)} to ${h.borrower}</div>
                <div class="text-[11px] text-neutral-400">${new Date(h.date).toLocaleString()}</div>
              </div>
            </div>
            <div class="text-[12px] text-neutral-400">${h.location}</div>
          `;
          historyList.appendChild(row);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
      function renderDashBorrowers() {
        dashBorrowers.innerHTML = '';
        borrowers.forEach(b => {
          const percent = progressPct(b);
          const card = document.createElement('div');
          card.className = "group p-3 rounded-lg ring-1 ring-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition cursor-pointer";
          card.innerHTML = `
            <div class="flex items-start gap-3">
              <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" class="h-12 w-12 rounded-md object-cover ring-1 ring-neutral-800" />
              <div class="flex-1 min-w-0">
                <div class="flex items-center justify-between">
                  <div class="text-[14px] font-medium tracking-tight">${b.name}</div>
                  <div class="text-[12px] text-neutral-400">${percent}%</div>
                </div>
                <div class="text-[11px] text-neutral-400 flex items-center gap-1.5">
                  <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
                  ${b.location}
                </div>
                <div class="mt-2 h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                  <div class="h-full bg-emerald-600" style="width:${percent}%"></div>
                </div>
              </div>
            </div>
            <div class="mt-3 flex items-center justify-end">
              <button class="inline-flex items-center gap-1.5 px-2.5 h-8 rounded-md bg-emerald-600 text-white text-[12px] hover:bg-emerald-700 shadow-sm">
                <i data-lucide="hand-coins" class="w-3.5 h-3.5"></i>
                Donate
              </button>
            </div>
          `;
          card.querySelector('button').addEventListener('click', () => openDonation(b));
          card.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            document.getElementById('discover-from-dash').scrollIntoView({ behavior: 'smooth' });
            focusBorrowerOnMap(b);
          });
          dashBorrowers.appendChild(card);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Map Setup
      function initMap() {
        const savedCenter = JSON.parse(localStorage.getItem('mapCenter')) || [20, 0];
        const savedZoom = JSON.parse(localStorage.getItem('mapZoom')) || 2;

        map = L.map('map', { worldCopyJump: true, maxZoom: 15 }).setView(savedCenter, savedZoom);
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
          attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
        }).addTo(map);

        map.on('moveend', () => {
          localStorage.setItem('mapCenter', JSON.stringify(map.getCenter()));
        });
        map.on('zoomend', () => {
          localStorage.setItem('mapZoom', JSON.stringify(map.getZoom()));
        });

        // Icons
        const borrowerIcon = L.icon({ iconUrl: "https://cdn-icons-png.flaticon.com/512/190/190411.png", iconSize: [28, 28] });
        const donorIcon = L.icon({ iconUrl: "https://cdn-icons-png.flaticon.com/512/616/616408.png", iconSize: [28, 28] });

        borrowersLayer = L.layerGroup().addTo(map);
        donorsLayer = L.layerGroup().addTo(map);

        borrowers.forEach(b => {
          const m = L.marker(b.coords, { icon: borrowerIcon }).addTo(borrowersLayer);
          m.bindPopup(`<strong>${b.name}</strong><br/>Borrower — ${b.location}`);
          m.on('click', () => {
            const el = cardRefs.get(b.id);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              el.classList.add('bg-neutral-800');
              setTimeout(() => el.classList.remove('bg-neutral-800'), 800);
            }
          });
          b._marker = m;
        });

        donors.forEach(d => {
          const m = L.marker(d.coords, { icon: donorIcon }).addTo(donorsLayer);
          m.bindPopup(`<strong>${d.name}</strong><br/>Donor — ${d.location}`);
        });

        // Legend (draggable + collapsible)
        addLegendControl();
      }

      function addLegendControl() {
        const pos = JSON.parse(localStorage.getItem('legendPosition')) || { bottom: '20px', right: '20px' };
        const collapsed = JSON.parse(localStorage.getItem('legendCollapsed') || 'true');

        legendDiv = L.DomUtil.create('div', 'leaflet-control legend');
        Object.assign(legendDiv.style, {
          position: 'absolute',
          zIndex: 500,
          cursor: 'move',
          minWidth: '140px',
          bottom: pos.bottom || '',
          right: pos.right || '',
          top: pos.top || '',
          left: pos.left || ''
        });

        const renderLegend = () => {
          legendDiv.innerHTML = '';
          const container = document.createElement('div');
          container.className = "bg-neutral-900 p-2 rounded-md shadow-md text-[12px] ring-1 ring-neutral-800 text-neutral-200";
          if (collapsed) {
            const btn = document.createElement('button');
            btn.className = "w-full h-8 rounded bg-emerald-600 text-white text-[12px] font-medium hover:bg-emerald-700";
            btn.textContent = 'Show Legend';
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              localStorage.setItem('legendCollapsed', 'false');
              addLegendControl(); // re-render
            });
            container.appendChild(btn);
          } else {
            const title = document.createElement('div');
            title.className = 'mb-2 text-[12px] font-semibold tracking-tight';
            title.textContent = 'Legend';
            const donorRow = document.createElement('div');
            donorRow.className = 'flex items-center gap-2 mb-1';
            donorRow.innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/616/616408.png' width='16' height='16'/> Donor";
            const borRow = document.createElement('div');
            borRow.className = 'flex items-center gap-2 mb-2';
            borRow.innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/190/190411.png' width='16' height='16'/> Borrower";
            const btn = document.createElement('button');
            btn.className = "w-full h-8 rounded bg-red-600 text-white text-[12px] font-medium hover:bg-red-700";
            btn.textContent = 'Hide Legend';
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              localStorage.setItem('legendCollapsed', 'true');
              addLegendControl();
            });
            container.appendChild(title);
            container.appendChild(donorRow);
            container.appendChild(borRow);
            container.appendChild(btn);
          }
          legendDiv.appendChild(container);
        };

        renderLegend();

        // Dragging
        let isDragging = false, startX = 0, startY = 0;
        legendDiv.onmousedown = (e) => {
          isDragging = true;
          startX = e.clientX;
          startY = e.clientY;
          document.onmousemove = (ev) => {
            if (!isDragging) return;
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;
            startX = ev.clientX;
            startY = ev.clientY;
            const rect = legendDiv.getBoundingClientRect();
            legendDiv.style.top = (rect.top + dy) + 'px';
            legendDiv.style.left = (rect.left + dx) + 'px';
            legendDiv.style.bottom = '';
            legendDiv.style.right = '';
          };
          document.onmouseup = () => {
            isDragging = false;
            localStorage.setItem('legendPosition', JSON.stringify({
              top: legendDiv.style.top,
              left: legendDiv.style.left,
              bottom: legendDiv.style.bottom,
              right: legendDiv.style.right
            }));
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };

        // Attach into map container overlay pane
        const mapContainer = document.getElementById('map');
        const old = mapContainer.querySelector('.leaflet-control.legend');
        if (old) old.remove();
        mapContainer.appendChild(legendDiv);
      }

      function focusBorrowerOnMap(b) {
        if (!map || !b || !b._marker) return;
        map.setView(b.coords, Math.max(map.getZoom(), 5), { animate: true });
        b._marker.openPopup();
        const el = cardRefs.get(b.id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('bg-neutral-800');
          setTimeout(() => el.classList.remove('bg-neutral-800'), 800);
        }
      }

      // Donation flow
      function openDonation(b) {
        selectedBorrower = b;
        donationPhoto.src = b.photo;
        donationName.textContent = b.name;
        donationLocation.textContent = b.location;
        const remaining = b.amountNeeded - b.amountFunded;
        donationNeeded.textContent = fmtUSD(remaining > 0 ? remaining : 0);
        donationAmountEl.value = '';
        donationModal.classList.remove('hidden');

        // Ensure quick amount handlers exist once
        if (quickAmts.length === 0) {
          document.querySelectorAll('.quick-amt').forEach(btn => {
            quickAmts.push(btn);
            btn.addEventListener('click', () => {
              donationAmountEl.value = btn.dataset.amt;
            });
          });
        }
      }
      function closeDonation() {
        donationModal.classList.add('hidden');
      }
      function ensureAuthThenDonate() {
        if (!user) {
          openAuth('login');
          return false;
        }
        return true;
      }

      // Auth flow
      let authMode = 'login';
      function openAuth(mode = 'login') {
        authMode = mode;
        authTitle.textContent = mode === 'login' ? 'Login' : 'Create Account';
        authSubmit.innerHTML = mode === 'login'
          ? '<i data-lucide="log-in" class="w-4 h-4"></i> Continue'
          : '<i data-lucide="user-plus" class="w-4 h-4"></i> Create Account';
        authSwitch.textContent = mode === 'login' ? 'Create an account' : 'Have an account? Login';
        signupExtra.classList.toggle('hidden', mode === 'login');
        authModal.classList.remove('hidden');
        authUsername.focus();
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }
      function closeAuth() {
        authModal.classList.add('hidden');
      }

      // Wire global events
      searchEl.addEventListener('input', (e) => { search = e.target.value; renderBorrowerList(); });
      countryPills.forEach(btn => {
        btn.addEventListener('click', () => {
          country = btn.dataset.country;
          countryPills.forEach(b => {
            if (b.dataset.country === country) {
              b.className = "country-pill inline-flex items-center px-2.5 h-9 rounded-md bg-neutral-200/10 text-white text-[12px] font-medium ring-1 ring-neutral-800";
            } else {
              b.className = "country-pill inline-flex items-center px-2.5 h-9 rounded-md bg-neutral-900 text-neutral-200 text-[12px] ring-1 ring-neutral-800 hover:bg-neutral-800";
            }
          });
          renderBorrowerList();
        });
      });
      sortPills.forEach(btn => {
        btn.addEventListener('click', () => {
          sortBy = btn.dataset.sort;
          sortPills.forEach(b => {
            const active = b.dataset.sort === sortBy;
            b.className = active
              ? "sort-pill px-2.5 h-9 text-[12px] rounded bg-neutral-900 ring-1 ring-neutral-800"
              : "sort-pill px-2.5 h-9 text-[12px] rounded text-neutral-400 hover:text-neutral-200";
          });
          renderBorrowerList();
        });
      });

      // Auth/UI events
      loginBtn.addEventListener('click', () => openAuth('login'));
      signupBtn.addEventListener('click', () => openAuth('signup'));
      authClose.addEventListener('click', closeAuth);
      authSwitch.addEventListener('click', () => openAuth(authMode === 'login' ? 'signup' : 'login'));
      authSubmit.addEventListener('click', () => {
        const name = authUsername.value.trim() || 'Supporter';
        user = { name, history: [] };
        localStorage.setItem('mr_user', JSON.stringify(user));
        toggleAuthUI();
        renderHistory();
        renderDashBorrowers();
        closeAuth();
        showToast(`Welcome, ${name}!`);
      });
      logoutBtn.addEventListener('click', () => {
        user = null;
        localStorage.removeItem('mr_user');
        toggleAuthUI();
        renderHistory();
        showToast('Logged out.');
      });

      // Dashboard open/close
      document.getElementById('open-dashboard').addEventListener('click', () => {
        dashSection.classList.remove('hidden');
        dashSection.scrollIntoView({ behavior: 'smooth' });
      });
      document.getElementById('discover-from-dash').addEventListener('click', () => {
        dashSection.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      // Donation events
      donationClose.addEventListener('click', closeDonation);
      donationCancel.addEventListener('click', closeDonation);
      donationConfirm.addEventListener('click', () => {
        if (!ensureAuthThenDonate()) return;
        const amt = Math.max(1, Number(donationAmountEl.value || 0));
        if (!amt || isNaN(amt)) {
          showToast('Enter a valid amount.');
          return;
        }
        // Simulate payment success
        selectedBorrower.amountFunded = Math.min(
          selectedBorrower.amountNeeded,
          selectedBorrower.amountFunded + amt
        );
        // Update user history
        user.history = user.history || [];
        user.history.push({
          borrower: selectedBorrower.name,
          amount: amt,
          location: selectedBorrower.location,
          date: new Date().toISOString(),
        });
        localStorage.setItem('mr_user', JSON.stringify(user));
        renderBorrowerList();
        renderHistory();
        renderDashBorrowers();
        closeDonation();
        showToast(`Donation of ${fmtUSD(amt)} to ${selectedBorrower.name} successful!`);
      });

      // Map extras
      document.getElementById('recenter-map').addEventListener('click', () => {
        map.setView([20, 0], 2, { animate: true });
      });

      // Initial load
      function init() {
        // Load user
        const savedUser = JSON.parse(localStorage.getItem('mr_user') || 'null');
        if (savedUser) user = savedUser;
        toggleAuthUI();

        // Render UI pieces
        renderBorrowerList();
        renderHistory();
        renderDashBorrowers();

        // Map
        initMap();
      }
      init();
    
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
      

<div className="min-h-screen flex flex-col" id="app">

<header className="sticky top-0 z-30 backdrop-blur bg-neutral-950/70 border-b border-neutral-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md grid place-items-center bg-emerald-600 text-white font-semibold tracking-tight text-sm shadow-sm ring-1 ring-emerald-700/40">
              MR
            </div>
<div className="flex flex-col">
<span className="text-[18px] sm:text-[20px] font-semibold tracking-tight leading-none">MyResponsibility</span>
<span className="text-[11px] text-neutral-400 leading-none mt-1">Microgiving Network</span>
</div>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="text-[14px] text-neutral-400 hover:text-neutral-200 transition-colors" href="#">Discover</a>
<a className="text-[14px] text-neutral-400 hover:text-neutral-200 transition-colors" href="#">Impact</a>
<a className="text-[14px] text-neutral-400 hover:text-neutral-200 transition-colors" href="#">About</a>
</div>
<div className="flex items-center gap-2">
<button className="hidden data-[auth=true]:inline-flex items-center gap-2 px-3 h-9 rounded-md bg-neutral-200/10 text-white text-[13px] font-medium hover:bg-neutral-200/20 transition-colors shadow-sm ring-1 ring-neutral-800" data-auth="false" id="open-dashboard">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
              Dashboard
            </button>
<div className="flex items-center gap-2" id="auth-actions">
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-md bg-neutral-800 text-neutral-100 text-[13px] font-medium hover:bg-neutral-700 transition-colors shadow-sm ring-1 ring-neutral-700" id="login-btn">
<i className="w-4 h-4" data-lucide="log-in"></i>
                Login
              </button>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-md bg-emerald-600 text-white text-[13px] font-medium hover:bg-emerald-700 transition-colors shadow-sm ring-1 ring-emerald-700/40" id="signup-btn">
<i className="w-4 h-4" data-lucide="user-plus"></i>
                Sign Up
              </button>
</div>
<div className="hidden items-center gap-3 pl-2 pr-2 h-10 rounded-md bg-neutral-900 shadow-sm ring-1 ring-neutral-800" id="user-chip">
<img alt="avatar" className="h-7 w-7 rounded-full ring-1 ring-neutral-800 object-cover" id="user-avatar" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=96&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col leading-tight">
<span className="text-[13px] font-medium tracking-tight" id="user-name">Guest</span>
<span className="text-[11px] text-neutral-400">Supporter</span>
</div>
<button className="ml-1 inline-flex items-center gap-1.5 px-2 h-7 rounded bg-neutral-800 text-white text-[12px] hover:bg-neutral-700 transition-colors" id="logout-btn">
<i className="w-3.5 h-3.5" data-lucide="log-out"></i>
                Logout
              </button>
</div>
</div>
</div>
</header>

<main className="flex-1">

<section className="border-b border-neutral-800 bg-neutral-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
<div className="rounded-xl bg-neutral-900 ring-1 ring-neutral-800 shadow-sm overflow-hidden">

<div className="p-3 border-b border-neutral-800">
<div className="flex flex-col sm:flex-row gap-2">
<div className="relative flex-1">
<i className="w-4 h-4 absolute left-3 top-2.5 text-neutral-500" data-lucide="search"></i>
<input className="w-full pl-9 pr-3 h-10 rounded-md bg-neutral-950 text-[13px] placeholder:text-neutral-500 ring-1 ring-neutral-800 focus:ring-neutral-700 focus:bg-neutral-900 outline-none transition" id="search-input" placeholder="Search borrowers, locations, stories..."/>
</div>
<div className="flex items-center gap-2">

<div className="hidden sm:flex gap-1.5">
<button className="country-pill inline-flex items-center px-2.5 h-9 rounded-md bg-neutral-200/10 text-white text-[12px] font-medium ring-1 ring-neutral-800" data-country="All">All</button>
<button className="country-pill inline-flex items-center px-2.5 h-9 rounded-md bg-neutral-900 text-neutral-200 text-[12px] ring-1 ring-neutral-800 hover:bg-neutral-800" data-country="Kenya">Kenya</button>
<button className="country-pill inline-flex items-center px-2.5 h-9 rounded-md bg-neutral-900 text-neutral-200 text-[12px] ring-1 ring-neutral-800 hover:bg-neutral-800" data-country="India">India</button>
<button className="country-pill inline-flex items-center px-2.5 h-9 rounded-md bg-neutral-900 text-neutral-200 text-[12px] ring-1 ring-neutral-800 hover:bg-neutral-800" data-country="Peru">Peru</button>
</div>

<div className="hidden sm:flex p-0.5 rounded-md bg-neutral-800 ring-1 ring-neutral-800">
<button className="sort-pill px-2.5 h-9 text-[12px] rounded bg-neutral-900 ring-1 ring-neutral-800" data-sort="needed">Needed</button>
<button className="sort-pill px-2.5 h-9 text-[12px] rounded text-neutral-400 hover:text-neutral-200" data-sort="funded">Funded</button>
</div>
</div>
</div>
</div>

<div className="px-3 pt-3">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<span className="inline-flex items-center gap-2 text-[13px] text-neutral-400">
<i className="w-4 h-4" data-lucide="globe-2"></i>
                      Live Impact Map
                    </span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 px-2.5 h-8 rounded-md bg-neutral-900 text-[12px] text-neutral-200 hover:bg-neutral-800 shadow-sm ring-1 ring-neutral-800" id="recenter-map">
<i className="w-3.5 h-3.5" data-lucide="crosshair"></i>
                      Reset
                    </button>
</div>
</div>
<div className="h-[360px] w-full rounded-xl ring-1 ring-neutral-800 overflow-hidden bg-neutral-900" id="map"></div>
<div className="mt-2 text-[12px] text-neutral-500">
                  Donors and borrowers are represented across the globe. Click markers or cards to explore.
                </div>
</div>

<div className="max-h-[400px] overflow-y-auto divide-y divide-neutral-800 mt-3" id="borrower-list">

</div>
</div>
</div>
</section>

<section className="hidden border-b border-neutral-800 bg-neutral-950" id="dashboard">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-[22px] sm:text-[24px] font-semibold tracking-tight">Welcome back, <span id="dash-name">Guest</span></h2>
<p className="text-[13px] text-neutral-400 mt-1">Track your donations and discover more borrowers.</p>
</div>
<button className="inline-flex items-center gap-2 px-3 h-9 rounded-md bg-neutral-200/10 text-white text-[13px] font-medium hover:bg-neutral-200/20 transition-colors shadow-sm ring-1 ring-neutral-800" id="discover-from-dash">
<i className="w-4 h-4" data-lucide="compass"></i>
                Discover
              </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-5 rounded-xl ring-1 ring-neutral-800 bg-neutral-900 shadow-sm">
<div className="p-4 border-b border-neutral-800">
<h3 className="text-[16px] font-semibold tracking-tight">Donation History</h3>
</div>
<div className="p-4" id="history-list">
<div className="text-[14px] text-neutral-400">No donations yet.</div>
</div>
</div>
<div className="lg:col-span-7 rounded-xl ring-1 ring-neutral-800 bg-neutral-900 shadow-sm">
<div className="p-4 border-b border-neutral-800 flex items-center justify-between">
<h3 className="text-[16px] font-semibold tracking-tight">Borrowers</h3>
<button className="inline-flex items-center gap-1.5 px-2.5 h-8 rounded-md bg-neutral-900 text-[12px] text-neutral-200 hover:bg-neutral-800 shadow-sm ring-1 ring-neutral-800" onclick="document.querySelector('#search-input').focus()">
<i className="w-3.5 h-3.5" data-lucide="search"></i>
                    Search
                  </button>
</div>
<div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4" id="dash-borrowers">

</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-neutral-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 border-t border-neutral-800">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3 text-[13px] text-neutral-400">
<i className="w-4 h-4" data-lucide="heart-handshake"></i>
              Empowering small businesses through community microgiving.
            </div>
<div className="flex items-center gap-4 text-[12px] text-neutral-400">
<a className="hover:text-neutral-200" href="#">Terms</a>
<a className="hover:text-neutral-200" href="#">Privacy</a>
<a className="hover:text-neutral-200" href="#">Contact</a>
</div>
</div>
</div>
</footer>
</div>

<div className="hidden fixed inset-0 z-40" id="auth-modal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-md rounded-xl bg-neutral-900 ring-1 ring-neutral-800 shadow-2xl overflow-hidden">
<div className="p-4 border-b border-neutral-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 grid place-items-center rounded-md bg-emerald-600 text-white text-[12px] font-semibold tracking-tight">MR</div>
<h3 className="text-[18px] font-semibold tracking-tight" id="auth-title">Login</h3>
</div>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-neutral-800" id="auth-close">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-5">
<div className="space-y-3">
<div>
<label className="block text-[12px] text-neutral-400 mb-1">Username</label>
<input className="w-full h-10 px-3 rounded-md bg-neutral-950 ring-1 ring-neutral-800 focus:ring-neutral-700 focus:bg-neutral-900 outline-none text-[13px]" id="auth-username" placeholder="e.g. janedoe"/>
</div>
<div className="hidden" id="signup-extra">
<label className="block text-[12px] text-neutral-400 mb-1">Email</label>
<input className="w-full h-10 px-3 rounded-md bg-neutral-950 ring-1 ring-neutral-800 focus:ring-neutral-700 focus:bg-neutral-900 outline-none text-[13px]" id="auth-email" placeholder="you@example.com"/>
</div>
<div className="flex items-center justify-between pt-1">
<button className="inline-flex items-center gap-2 px-3 h-10 rounded-md bg-emerald-600 text-white text-[13px] font-medium hover:bg-emerald-700 transition-colors shadow-sm ring-1 ring-emerald-700/40" id="auth-submit">
<i className="w-4 h-4" data-lucide="log-in"></i>
                  Continue
                </button>
<button className="text-[13px] text-neutral-400 hover:text-neutral-200" id="auth-switch">
                  Create an account
                </button>
</div>
</div>
</div>
<div className="px-5 pb-5">
<div className="rounded-lg bg-neutral-950 ring-1 ring-neutral-800 p-3 text-[12px] text-neutral-400">
              By continuing you agree to our Terms and Privacy Policy.
            </div>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-40" id="donation-modal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="w-full max-w-lg rounded-xl bg-neutral-900 ring-1 ring-neutral-800 shadow-2xl overflow-hidden">
<div className="p-4 border-b border-neutral-800 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-500" data-lucide="hand-coins"></i>
<h3 className="text-[18px] font-semibold tracking-tight">Donate</h3>
</div>
<button className="h-8 w-8 grid place-items-center rounded-md hover:bg-neutral-800" id="donation-close">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>
<div className="p-5">
<div className="flex items-start gap-4">
<img className="h-16 w-16 rounded-md object-cover ring-1 ring-neutral-800" id="donation-photo" src=""/>
<div className="flex-1">
<div className="flex items-center justify-between">
<div>
<div className="text-[16px] font-semibold tracking-tight" id="donation-name"></div>
<div className="text-[12px] text-neutral-400 flex items-center gap-1.5">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i>
<span id="donation-location"></span>
</div>
</div>
<div className="text-right">
<div className="text-[12px] text-neutral-400">Needed</div>
<div className="text-[14px] font-medium" id="donation-needed"></div>
</div>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
<button className="quick-amt px-3 h-10 rounded-md bg-neutral-800 text-[13px] ring-1 ring-neutral-800 hover:bg-neutral-700" data-amt="25">$25</button>
<button className="quick-amt px-3 h-10 rounded-md bg-neutral-800 text-[13px] ring-1 ring-neutral-800 hover:bg-neutral-700" data-amt="50">$50</button>
<button className="quick-amt px-3 h-10 rounded-md bg-neutral-800 text-[13px] ring-1 ring-neutral-800 hover:bg-neutral-700" data-amt="100">$100</button>
</div>
<div className="mt-3">
<label className="block text-[12px] text-neutral-400 mb-1">Amount (USD)</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-[12px] text-neutral-400">$</span>
<input className="w-full h-10 pl-6 pr-3 rounded-md bg-neutral-950 ring-1 ring-neutral-800 focus:ring-neutral-700 focus:bg-neutral-900 outline-none text-[13px]" id="donation-amount" min="1" placeholder="Enter custom amount" step="1" type="number"/>
</div>
</div>
<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-[12px] text-neutral-400 mb-1">Card number</label>
<input className="w-full h-10 px-3 rounded-md bg-neutral-950 ring-1 ring-neutral-800 focus:ring-neutral-700 focus:bg-neutral-900 outline-none text-[13px]" placeholder="4242 4242 4242 4242"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-[12px] text-neutral-400 mb-1">Expiry</label>
<input className="w-full h-10 px-3 rounded-md bg-neutral-950 ring-1 ring-neutral-800 focus:ring-neutral-700 focus:bg-neutral-900 outline-none text-[13px]" placeholder="MM/YY"/>
</div>
<div>
<label className="block text-[12px] text-neutral-400 mb-1">CVC</label>
<input className="w-full h-10 px-3 rounded-md bg-neutral-950 ring-1 ring-neutral-800 focus:ring-neutral-700 focus:bg-neutral-900 outline-none text-[13px]" placeholder="CVC"/>
</div>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3 h-10 rounded-md bg-neutral-900 text-neutral-200 text-[13px] font-medium hover:bg-neutral-800 transition-colors shadow-sm ring-1 ring-neutral-800" id="donation-cancel">
                Cancel
              </button>
<button className="inline-flex items-center gap-2 px-3 h-10 rounded-md bg-emerald-600 text-white text-[13px] font-medium hover:bg-emerald-700 transition-colors shadow-sm ring-1 ring-emerald-700/40" id="donation-confirm">
<i className="w-4 h-4" data-lucide="credit-card"></i>
                Donate Now
              </button>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="flex items-center gap-2 px-3 h-10 rounded-md bg-neutral-900 text-white text-[13px] shadow-lg ring-1 ring-neutral-800">
<i className="w-4 h-4 text-emerald-400" data-lucide="badge-check"></i>
<span id="toast-text">Success</span>
</div>
</div>


    </>
  );
}
