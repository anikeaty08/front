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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          (function() {
                const el = document.querySelector('[data-element-id="aura-emk8laq0l10k8qs95"]');
                if(el) {
                    const update = () => {
                        el.setAttribute('data-scrolled', window.scrollY > 50 ? 'true' : 'false');
                    };
                    window.addEventListener('scroll', update, {passive: true});
                    update();
                }
            })();
        


                (function() {
                    const el = document.querySelector('[data-element-id="aura-emk44ocuw5ffcn5l"]');
                    if (el) {
                      const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                          if (entry.isIntersecting) {
                            setTimeout(() => el.classList.add('animate-flash-scroll'), 150);
                            observer.disconnect();
                          }
                        });
                      }, {
                        threshold: 0.5
                      });
                      observer.observe(el);
                    }
                  })();
              


      // --- State Management for Calendar ---
        const today = new Date();
        let state = {
            hero: { arrival: null, departure: null },
            float: { arrival: null, departure: null },
            visibleDropdown: null,
            viewDate: new Date(today.getFullYear(), today.getMonth(), 1)
        };

        /**
         * 1. Datum beim Laden vorausfüllen
         */
        window.addEventListener('DOMContentLoaded', () => {
          const today = new Date();
          const tomorrow = new Date();
          tomorrow.setDate(today.getDate() + 1);

          const isoToday = today.toISOString().split('T')[0];
          const isoTomorrow = tomorrow.toISOString().split('T')[0];

          // Update Calendar State for visual feedback if user opens calendar
          state.hero.arrival = today;
          state.hero.departure = tomorrow;
          state.float.arrival = today;
          state.float.departure = tomorrow;

          // Für beide Bar-Typen setzen (falls vorhanden)
          ['hero', 'float'].forEach(prefix => {
            const arr = document.getElementById(`${prefix}-arrival`);
            const dep = document.getElementById(`${prefix}-departure`);
            const disp = document.getElementById(`${prefix}-date-display`);

            if (arr && dep) {
              arr.value = isoToday;
              dep.value = isoTomorrow;
              if (disp) {
                // Anzeige-Format für den Button (TT.MM.JJJJ)
                const d1 = isoToday.split('-').reverse().join('.');
                const d2 = isoTomorrow.split('-').reverse().join('.');
                disp.innerText = `${d1} - ${d2}`;
              }
            }
          });

          // Floating Bar Observer
          const heroBar = document.getElementById('hero-booking-bar');
          const floatingBtn = document.getElementById('floating-booking');
          if (heroBar && floatingBtn) {
              const observer = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                          floatingBtn.classList.remove('floating-booking-hidden');
                          floatingBtn.classList.add('floating-booking-visible');
                      } else {
                          floatingBtn.classList.remove('floating-booking-visible');
                          floatingBtn.classList.add('floating-booking-hidden');
                          closeAllDropdowns();
                      }
                  });
              }, { threshold: 0, rootMargin: "-20px 0px 0px 0px" });
              observer.observe(heroBar);
          }

          // Click Outside to close
          document.addEventListener('click', closeAllDropdowns);
        });

        // --- Mobile Menu Logic ---
        function toggleMobileMenu() {
          const menu = document.getElementById('mobile-menu-overlay');
          const iconOpen = document.getElementById('menu-icon-open');
          const iconClose = document.getElementById('menu-icon-close');

          if (menu.classList.contains('translate-x-full')) {
            // Open
            menu.classList.remove('translate-x-full');
            menu.classList.add('translate-x-0');
            document.body.style.overflow = 'hidden'; // Prevent scrolling

            // Icon Switch
            iconOpen.classList.add('opacity-0', 'rotate-90');
            iconClose.classList.remove('hidden');
            setTimeout(() => {
               iconClose.classList.remove('scale-50', 'opacity-0');
               iconOpen.classList.add('hidden');
            }, 150);
          } else {
            // Close
            menu.classList.remove('translate-x-0');
            menu.classList.add('translate-x-full');
            document.body.style.overflow = '';

            // Icon Switch
            iconOpen.classList.remove('hidden', 'opacity-0', 'rotate-90');
            iconClose.classList.add('scale-50', 'opacity-0');
            setTimeout(() => iconClose.classList.add('hidden'), 150);
          }
        }

        function toggleMobileSubmenu(id, btn) {
          const el = document.getElementById(id);
          const isHidden = el.classList.contains('mobile-submenu-hidden');

          // Update styling state
          if (isHidden) {
            el.classList.remove('mobile-submenu-hidden');
            el.classList.add('mobile-submenu-visible');
            btn.setAttribute('aria-expanded', 'true');
          } else {
            el.classList.remove('mobile-submenu-visible');
            el.classList.add('mobile-submenu-hidden');
            btn.setAttribute('aria-expanded', 'false');
          }
        }


        // --- Dropdown Logic ---
        function toggleDropdown(id) {
            event.stopPropagation();
            const el = document.getElementById(id);
            const isHidden = el.classList.contains('hidden');

            closeAllDropdowns(); // Close others first

            if(isHidden) {
                el.classList.remove('hidden');
                el.classList.add('dropdown-enter', 'dropdown-enter-active');
                state.visibleDropdown = id;
                setTimeout(() => el.classList.remove('dropdown-enter', 'dropdown-enter-active'), 200);
            }
        }

        function closeAllDropdowns() {
            if(!state.visibleDropdown) return;
            // Updated list of dropdown IDs including new ones from snippet if any
            const ids = ['hero-guests-dropdown', 'hero-rooms-dropdown', 'hero-calendar-dropdown', 'float-guests-dropdown', 'float-rooms-dropdown', 'float-calendar-dropdown'];

            ids.forEach(id => {
                const el = document.getElementById(id);
                if (el && !el.classList.contains('hidden')) {
                    el.classList.add('dropdown-exit', 'dropdown-exit-active');
                    setTimeout(() => {
                        el.classList.add('hidden');
                        el.classList.remove('dropdown-exit', 'dropdown-exit-active');
                    }, 150);
                }
            });
            state.visibleDropdown = null;
        }

        function selectOption(prefix, type, value, label) {
            // Update hiddeninput
            const input = document.getElementById(`${prefix}-${type}-value`);
            if (input) input.value = value;

            // Update display text
            const display = document.getElementById(`${prefix}-${type}-display`);
            if (display) display.innerText = label;

            closeAllDropdowns();
        }

        // --- Search Execution ---
        function executeSearch(prefix) {
            const arrival = document.getElementById(`${prefix}-arrival`).value;
            const departure = document.getElementById(`${prefix}-departure`).value;
            const guests = document.getElementById(`${prefix}-guests-value`).value;
            const rooms = document.getElementById(`${prefix}-rooms-value`).value;

            // Construct URL for OnePageBooking (Example parameters)
            const baseUrl = "https://onepagebooking.com/hotel-oma-ida";
            const url = `${baseUrl}?arrival=${arrival}&departure=${departure}&adults=${guests}&rooms=${rooms}`;

            window.location.href = url;
        }

        // --- Calendar Logic ---
        function changeMonth(offset, prefix) {
           state.viewDate.setMonth(state.viewDate.getMonth() + offset);
           renderCalendar(prefix);
        }

        function toggleCalendar(prefix) {
           event.stopPropagation();
           const id = `${prefix}-calendar-dropdown`;
           const el = document.getElementById(id);

           if(state.visibleDropdown === id) {
              closeAllDropdowns();
           } else {
              closeAllDropdowns();
              el.classList.remove('hidden');
              el.classList.add('dropdown-enter', 'dropdown-enter-active');
              state.visibleDropdown = id;
              setTimeout(() => el.classList.remove('dropdown-enter', 'dropdown-enter-active'), 200);
              renderCalendar(prefix);
           }
        }

        function renderCalendar(prefix) {
            const container = document.getElementById(`${prefix}-calendar-dropdown`);
            if(!container) return;
            container.innerHTML = ''; // Clear existing

            const m1 = new Date(state.viewDate);
            const m2 = new Date(state.viewDate);
            m2.setMonth(m2.getMonth() + 1);

            // Wrapper for two months
            const wrapper = document.createElement('div');
            wrapper.className = "flex flex-col md:flex-row gap-8 relative select-none";

            // Navigation Arrows (Absolute position)
            const nav = document.createElement('div');
            nav.className = "absolute w-full flex justify-between top-0 left-0 px-1 z-10 pointer-events-none";
            nav.innerHTML = `
              <button onclick="event.stopPropagation(); changeMonth(-1, '${prefix}')" class="pointer-events-auto p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button onclick="event.stopPropagation(); changeMonth(1, '${prefix}')" class="pointer-events-auto p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            `;
            wrapper.appendChild(nav);

            // Render Month 1
            wrapper.appendChild(buildMonthGrid(m1, prefix));

            // Render Month 2 (Hidden on mobile)
            const month2Div = buildMonthGrid(m2, prefix);
            month2Div.classList.add('hidden', 'md:block');
            wrapper.appendChild(month2Div);

            container.appendChild(wrapper);
        }

        function buildMonthGrid(date, prefix) {
            const year = date.getFullYear();
            const month = date.getMonth();
            const monthName = new Intl.DateTimeFormat('de-DE', { month: 'long', year: 'numeric' }).format(date);

            const div = document.createElement('div');
            div.className = "flex-1 min-w-[260px]";

            // Month Header
            const header = document.createElement('div');
            header.className = "text-center text-white font-medium mb-4";
            header.textContent = monthName;
            div.appendChild(header);

            // Weekday Labels
            const daysRow = document.createElement('div');
            daysRow.className = "grid grid-cols-7 mb-2 text-center";
            ['Mo','Di','Mi','Do','Fr','Sa','So'].forEach(d => {
                const span = document.createElement('span');
                span.className = "text-[10px] uppercase text-zinc-500 font-medium tracking-wider";
                span.textContent = d;
                daysRow.appendChild(span);
            });
            div.appendChild(daysRow);

            // Days Grid
            const grid = document.createElement('div');
            grid.className = "grid grid-cols-7 gap-1";

            // Calculate offset (Monday start)
            const firstDay = new Date(year, month, 1).getDay(); // 0 = Sun
            const offset = firstDay === 0 ? 6 : firstDay - 1;
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Empty slots
            for(let i=0; i<offset; i++) {
                const empty = document.createElement('div');
                empty.className = "h-9 w-full"; // placeholder
                grid.appendChild(empty);
            }

            // Render Days
            const today = new Date();
            today.setHours(0,0,0,0);

            for(let d=1; d<=daysInMonth; d++) {
                const currentDate = new Date(year, month, d);
                const cell = document.createElement('div');

                // Styling logic
                let classes = "h-9 w-full flex items-center justify-center text-sm cursor-pointer calendar-day text-zinc-300";

                const sDate = state[prefix].arrival;
                const eDate = state[prefix].departure;

                // Comparison logic
                const isStart = sDate && isSameDay(currentDate, sDate);
                const isEnd = eDate && isSameDay(currentDate, eDate);
                // Normalize times for range check
                const cTime = currentDate.getTime();
                const sTime = sDate ? sDate.getTime() : null;
                const eTime = eDate ? eDate.getTime() : null;

                const isInRange = sTime && eTime && cTime > sTime && cTime < eTime;
                const isPast = currentDate < today;

                if(isPast) {
                    classes += " disabled opacity-30 pointer-events-none";
                } else if(isStart) {
                    classes += " selected-start font-bold bg-white text-black rounded-l-md";
                } else if(isEnd) {
                    classes += " selected-end font-bold bg-white text-black rounded-r-md";
                } else if(isInRange) {
                    classes += " in-range bg-white/10 text-white";
                } else if (sTime && !eTime && cTime > sTime && state.hoverDate && cTime <= state.hoverDate.getTime()) {
                    // Hover preview range could be added here
                }

                cell.className = classes;
                cell.textContent = d;
                cell.onclick = (e) => {
                    e.stopPropagation();
                    handleDateSelect(currentDate, prefix);
                };

                grid.appendChild(cell);
            }
            div.appendChild(grid);
            return div;
        }

        function isSameDay(d1, d2) {
            if(!d1 || !d2) return false;
            return d1.getFullYear() === d2.getFullYear() &&
                   d1.getMonth() === d2.getMonth() &&
                   d1.getDate() === d2.getDate();
        }

        function handleDateSelect(date, prefix) {
            const currentStart = state[prefix].arrival;
            const currentEnd = state[prefix].departure;

            // Selection Logic:
            // 1. Reset if both selected
            if (currentStart && currentEnd) {
                state[prefix].arrival = date;
                state[prefix].departure = null;
            }
            // 2. Set End date if Start exists and date is after Start
            else if (currentStart && !currentEnd && date > currentStart) {
                state[prefix].departure = date;
                // Sync logic (optional): if we set float dates, maybe update hero?
                // For now, kept separate per state logic, but could sync:
                // syncDates(prefix, state[prefix].arrival, state[prefix].departure);

                setTimeout(() => closeAllDropdowns(), 400); // Auto close
            }
            // 3. New Start date
            else {
                state[prefix].arrival = date;
                state[prefix].departure = null;
            }

            // Update Inputs & UI
            updateInputs(prefix);
            updateDateDisplay(prefix);
            renderCalendar(prefix);
        }

        function updateInputs(prefix) {
            if(state[prefix].arrival) {
                const el = document.getElementById(`${prefix}-arrival`);
                if(el) el.value = formatDateISO(state[prefix].arrival);
            }
            if(state[prefix].departure) {
                const el = document.getElementById(`${prefix}-departure`);
                if(el) el.value = formatDateISO(state[prefix].departure);
            }
        }

        function updateDateDisplay(prefix) {
            const disp = document.getElementById(`${prefix}-date-display`);
            const s = state[prefix].arrival;
            const e = state[prefix].departure;

            if(s && e) {
                disp.innerText = `${formatDateDE(s)} - ${formatDateDE(e)}`;
            } else if(s) {
                disp.innerText = `${formatDateDE(s)} - ...`;
            } else {
                disp.innerText = "Reisedaten wählen";
            }
        }

        function formatDateISO(d) {
            const year = d.getFullYear();
            const month = String(d.getMonth()+1).padStart(2, '0');
            const day = String(d.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        function formatDateDE(d) {
             const day = String(d.getDate()).padStart(2, '0');
             const month = String(d.getMonth()+1).padStart(2, '0');
             return `${day}.${month}.${d.getFullYear()}`;
        }
    


      // WICHTIG: Definiert das fehlende heroWidget Objekt
        window.heroWidget = {
          toggleCalendar: function() {
            // Ruft die globale Funktion auf mit 'hero' Prefix
            toggleCalendar('hero');
          },

          toggleDropdown: function(type) {
            // Baut die ID zusammen: 'guests' -> 'hero-guests-dropdown'
            toggleDropdown('hero-' + type + '-dropdown');
          },

          selectOption: function(type, value, label, event) {
            if(event) event.stopPropagation();
            // Ruft die globale selectOption auf
            selectOption('hero', type, value, label);
          },

          prevMonth: function(event) {
            if(event) event.stopPropagation();
            changeMonth(-1, 'hero');
          },

          nextMonth: function(event) {
            if(event) event.stopPropagation();
            changeMonth(1, 'hero');
          },

          search: function() {
            executeSearch('hero');
          }
        };

        // Initialisierung sicherstellen
        document.addEventListener('DOMContentLoaded', () => {
          // Initiales Datum setzen, falls noch nicht geschehen
          if(typeof updateDateDisplay === 'function') {
            updateDateDisplay('hero');
          }
        });
    
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
      

<nav className="fixed transition-all duration-300 z-[100] font-['Geist'] bg-zinc-900/80 w-full border-white/5 border-b top-0 backdrop-blur-xl">
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-12 items-center">
<button className="md:hidden uppercase hover:bg-zinc-200 transition-all duration-300 cursor-pointer text-xs font-medium text-black tracking-widest bg-white rounded-full px-5 py-2" onclick="window.location.href='https://onepagebooking.com/hotel-oma-ida'">
            Jetzt buchen
          </button>
<a className="hidden md:block hover:opacity-80 transition-opacity" href="/">
<img alt="Oma Ida Logo" className="filter opacity-90 mix-blend-screen w-auto h-16 object-cover invert brightness-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76f1cea4-6358-4b8b-90f4-e2afc989943e_320w.png"/>
</a>

<div className="hidden md:flex gap-8 uppercase text-xs text-zinc-400 tracking-widest items-center">
<div className="relative group">
<a className="hover:text-white transition-colors duration-300 flex items-center gap-1 pt-6 pb-6" href="/">
                Zimmer
                <svg className="opacity-70 group-hover:rotate-180 transition-transform" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block">
<div className="glass-dropdown rounded-xl p-1 min-w-[220px] flex flex-col gap-0.5">
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/zimmer">
                    Alle Zimmer
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/doppelzimmer">
                    Doppelzimmer
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/komfort-doppelzimmer">
                    Komfort Doppelzimmer
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/superior-doppelzimmer">
                    Superior Doppelzimmer
                  </a>
</div>
</div>
</div>
<a className="hover:text-white transition-colors duration-300" href="/fruehstueck">
              Frühstück
            </a>
<a className="hover:text-white transition-colors duration-300" href="/angebote">
              Angebote
            </a>
<div className="relative group">
<button className="hover:text-white transition-colors duration-300 flex gap-1 uppercase text-xs tracking-widest pt-6 pb-6 gap-x-1 gap-y-1 items-center">
                Erleben
                <svg className="opacity-70 group-hover:rotate-180 transition-transform" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block">
<div className="glass-dropdown rounded-xl p-1 min-w-[140px] flex flex-col gap-0.5">
<a className="block hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap text-zinc-400 text-center rounded-lg pt-2 pr-4 pb-2 pl-4" href="/harz">
                    Harz
                  </a>
<a className="block px-4 py-2 hover:bg-white/10 rounded-lg text-zinc-400 hover:text-white transition-colors text-center whitespace-nowrap" href="/relax">
                    Relax
                  </a>
</div>
</div>
</div>
<div className="relative group">
<button className="hover:text-white transition-colors duration-300 flex gap-1 uppercase text-xs tracking-widest pt-6 pb-6 gap-x-1 gap-y-1 items-center">
                Informationen
                <svg className="opacity-70 group-hover:rotate-180 transition-transform" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block">
<div className="glass-dropdown rounded-xl p-1 min-w-[160px] flex flex-col gap-0.5">
<a className="block hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap text-zinc-400 text-center rounded-lg pt-2 pr-4 pb-2 pl-4" href="/anfahrt-lage">
                    Anfahrt &amp; Lage
                  </a>
<a className="block hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap text-zinc-400 text-center rounded-lg px-4 py-2" href="/faq">
                    FAQ
                  </a>
<a className="block hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap text-zinc-400 text-center rounded-lg pt-2 pr-4 pb-2 pl-4" href="/anfragen">
                    Kontakt
                  </a>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block uppercase hover:bg-zinc-200 transition-all duration-300 cursor-pointer text-xs font-medium text-black tracking-widest bg-white rounded-full px-5 py-2" onclick="window.location.href='https://onepagebooking.com/hotel-oma-ida'">
            Jetzt buchen
          </button>

<button className="md:hidden p-2 text-zinc-300 hover:text-white transition-colors relative z-[110]" id="mobile-menu-btn" onclick="toggleMobileMenu()">
<svg className="transition-transform duration-300" height="24" id="menu-icon-open" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12h18M3 6h18M3 18h18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<svg className="hidden absolute top-2 left-2 transition-transform duration-300" height="24" id="menu-icon-close" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>

<div className="md:hidden fixed h-[calc(100vh-6rem)] transform transition-transform duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-y-auto backdrop-blur-3xl w-full border-white/5 border-t top-24 left-0 shadow-2xl z-[200] translate-x-full bg-zinc-900" id="mobile-menu-overlay">
<div className="flex flex-col p-6 space-y-2">
<div className="border-b border-white/5 pb-2">
<a className="block w-full py-4 text-white uppercase text-sm tracking-widest font-medium hover:text-zinc-300 transition-colors" href="/start">
              Start
            </a>
</div>

<div className="border-b border-white/5 pb-2">
<button className="w-full flex justify-between items-center py-4 text-white uppercase text-sm tracking-widest font-medium group" onclick="toggleMobileSubmenu('mobile-submenu-zimmer', this)">
              Zimmer
              <svg className="text-zinc-500 transition-transform duration-300 group-aria-expanded:rotate-180" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="mobile-submenu-hidden transition-all duration-300 ease-in-out" id="mobile-submenu-zimmer">
<div className="flex flex-col pl-4 pb-2 gap-3 text-zinc-400 text-sm font-light">
<a className="block py-1 hover:text-white transition-colors" href="/zimmer">
                  Alle Zimmer
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/doppelzimmer">
                  Doppelzimmer
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/komfort-doppelzimmer">
                  Komfort Doppelzimmer
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/superior-doppelzimmer">
                  Superior Doppelzimmer
                </a>
</div>
</div>
</div>
<div className="border-b border-white/5 pb-2">
<a className="block w-full py-4 text-white uppercase text-sm tracking-widest font-medium hover:text-zinc-300 transition-colors" href="/fruehstueck">
              Frühstück
            </a>
</div>

<div className="border-b border-white/5 pb-2">
<a className="block w-full py-4 text-white uppercase text-sm tracking-widest font-medium hover:text-zinc-300 transition-colors" href="/angebote">
              Angebote
            </a>
</div>

<div className="border-b border-white/5 pb-2">
<button className="w-full flex justify-between items-center py-4 text-white uppercase text-sm tracking-widest font-medium group" onclick="toggleMobileSubmenu('mobile-submenu-erleben', this)">
              Erleben
              <svg className="text-zinc-500 transition-transform duration-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="mobile-submenu-hidden transition-all duration-300 ease-in-out" id="mobile-submenu-erleben">
<div className="flex flex-col pl-4 pb-2 gap-3 text-zinc-400 text-sm font-light">
<a className="block py-1 hover:text-white transition-colors" href="/harz">
                  Natur &amp; Umgebung
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/relax">
                  Relax
                </a>
</div>
</div>
</div>

<div className="border-b border-white/5 pb-2">
<button className="w-full flex justify-between items-center py-4 text-white uppercase text-sm tracking-widest font-medium group" onclick="toggleMobileSubmenu('mobile-submenu-infos', this)">
              Informationen
              <svg className="text-zinc-500 transition-transform duration-300" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<div className="mobile-submenu-hidden transition-all duration-300 ease-in-out" id="mobile-submenu-infos">
<div className="flex flex-col pl-4 pb-2 gap-3 text-zinc-400 text-sm font-light">
<a className="block py-1 hover:text-white transition-colors" href="/anfahrt-lage">
                  Anfahrt &amp; Lage
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/faq">
                  FAQ
                </a>
<a className="block py-1 hover:text-white transition-colors" href="/anfragen">
                  Kontakt
                </a>
</div>
</div>
</div>

<div className="pt-8 pb-8">
<button className="w-full uppercase bg-white text-black font-medium tracking-widest text-xs py-4 rounded-full hover:bg-zinc-200 transition-colors" onclick="window.location.href='https://onepagebooking.com/hotel-oma-ida'">
              Jetzt buchen
            </button>
</div>
</div>
</div>
</nav>

<div className="banner-notify fixed z-[90] text-center bg-[#0c1424]/95 w-full border-white/10 border-b top-24 shadow-lg backdrop-blur-md" id="Angebot-Banner">
<div className="hidden md:block md:py-2.5 transition-all duration-300 data-[scrolled=true]:py-1.5 md:data-[scrolled=true]:py-2.5 max-w-7xl mr-auto ml-auto pt-3 pr-6 pb-3 pl-6" data-scrolled="false" id="Angebote">

<a className="group flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-[11px] md:text-xs tracking-wide leading-relaxed hover:opacity-90 transition-opacity relative z-10 data-[scrolled=true]:hidden md:data-[scrolled=true]:flex" href="/winterzauber">
<span className="animate-pulse uppercase whitespace-nowrap font-medium text-blue-200 tracking-widest bg-blue-500/20 border-blue-400/20 border rounded pt-0.5 pr-2.5 pb-0.5 pl-2.5 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
            Wintermarkt
          </span>
<span className="text-zinc-300 font-light">
            inkl. Frühstück, im Viktoria &amp; auf dem Wintermarkt.
          </span>
<span className="hidden md:inline text-zinc-600">|</span>
<span className="flex items-center gap-1 text-white group-hover:underline underline-offset-4 decoration-white/30 font-medium">
            Jetzt Angebot entdecken
            <svg className="group-hover:translate-x-0.5 transition-transform" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</a>
<a className="hidden data-[scrolled=true]:inline-flex md:hidden bg-white text-zinc-900 text-[10px] font-bold uppercase tracking-widest px-6 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:bg-zinc-200 transition-all mx-auto whitespace-nowrap" href="/angebote">
          Angebote &amp; Hotdeals
        </a>
</div>
</div>

<header className="bg-zinc-900 w-full h-screen relative">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Hotel Oma Ida in Braunlage" className="animate-[pulse_15s_ease-in-out_infinite] opacity-40 w-full h-full object-cover scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/328abd23-6c89-49cb-8f0b-0d9f18aea036_3840w.jpg"/>
<div className="bg-gradient-to-br from-zinc-900 via-zinc-900/60 to-black/40 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none"></div>
</div>
</div>

<div className="flex flex-col md:pt-24 z-10 h-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pl-7 relative justify-center">
<div className="max-w-4xl">
<div className="flex items-center gap-3 mb-6 animate-[fadeIn_1s_ease-out]">
<div className="w-8 h-[1px] bg-white/30"></div>
<span className="uppercase text-xs text-zinc-300 tracking-[0.3em]">
              Braunlage, Harz
            </span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.9] text-glow text-5xl text-white tracking-tighter mb-8">
<span className="block font-medium">Hotel Oma Ida</span>
<span className="block serif md:mt-0 font-normal italic text-white/90 mt-1">
              Bed &amp; Breakfast
            </span>
</h1>
<p className="md:text-lg leading-relaxed text-base font-light text-zinc-400 max-w-lg mb-12">
            Entfliehe in ein stilvolles Refugium im Herzen von Braunlage, nur
            wenige Schritte vom Kurpark entfernt.
          </p>
</div>

<div className="glass-panel flex flex-col md:flex-row md:mt-12 md:rounded-full -translate-y-12 overflow-visible w-full max-w-7xl z-50 rounded-3xl mt-8 pt-1 pr-1 pb-1 pl-1 relative items-center" id="hero-booking-bar">
<div className="group md:py-4 flex-1 md:w-auto md:border-b-0 md:border-r hover:bg-white/5 transition-colors md:rounded-l-full md:rounded-tr-none cursor-pointer w-full border-white/5 rounded-t-3xl border-b pt-3 pr-6 pb-3 pl-6 relative gap-x-2 gap-y-2" onclick="heroWidget.toggleCalendar()">
<label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-zinc-500 mb-1 cursor-pointer pointer-events-none">
<svg className="" data-lucide="calendar" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M8 2v4m8-4v4"></path>
<rect height="18" rx="2" width="18" x="3" y="4"></rect>
<path d="M3 10h18"></path>
</g>
</svg>
              Reisedaten
            </label>
<div className="flex gap-2 text-sm font-medium text-white items-center pointer-events-none" id="hero-date-display">
              10.04.2026 - 11.04.2026
            </div>
<input id="hero-arrival" type="hidden" value="2026-04-10"/>
<input id="hero-departure" type="hidden" value="2026-04-11"/>
<div className="hidden absolute top-[calc(100%+12px)] left-0 z-50 p-6 rounded-3xl glass-dropdown min-w-[320px] md:min-w-[350px] shadow-2xl origin-top-left transition-all duration-200 fade-in bg-zinc-900 border border-white/10" id="hero-calendar-dropdown" onclick="event.stopPropagation()">
<div className="flex items-center justify-between mb-4">
<button className="p-2 hover:bg-white/10 rounded-full text-white transition-colors" onclick="heroWidget.prevMonth(event)">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M15 18l-6-6 6-6"></path>
</svg>
</button>
<span className="text-sm font-medium text-white" id="hero-calendar-month">
                  Januar 2026
                </span>
<button className="p-2 hover:bg-white/10 rounded-full text-white transition-colors" onclick="heroWidget.nextMonth(event)">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M9 18l6-6-6-6"></path>
</svg>
</button>
</div>
<div className="grid grid-cols-7 gap-1 text-center mb-2">
<span className="text-[10px] text-zinc-500 font-medium">Mo</span>
<span className="text-[10px] text-zinc-500 font-medium">Di</span>
<span className="text-[10px] text-zinc-500 font-medium">Mi</span>
<span className="text-[10px] text-zinc-500 font-medium">Do</span>
<span className="text-[10px] text-zinc-500 font-medium">Fr</span>
<span className="text-[10px] text-zinc-500 font-medium">Sa</span>
<span className="text-[10px] text-zinc-500 font-medium">So</span>
</div>
<div className="grid grid-cols-7 gap-1" id="hero-calendar-grid"></div>
</div>
</div>
<div className="relative group px-6 py-3 md:py-4 flex-1 w-full md:w-auto border-b md:border-b-0 border-white/5 md:border-r hover:bg-white/5 transition-colors cursor-pointer" onclick="heroWidget.toggleDropdown('guests')">
<label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-zinc-500 mb-1 cursor-pointer pointer-events-none">
<svg className="" data-lucide="users" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
              Gäste
            </label>
<div className="flex items-center justify-between pointer-events-none">
<span className="text-white font-medium" id="hero-guests-display">
                2 Erwachsene
              </span>
<svg className="text-zinc-500" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="hidden absolute top-[calc(100%+8px)] left-0 w-full min-w-[200px] glass-dropdown rounded-2xl p-1 z-50 flex flex-col shadow-xl origin-top transition-all duration-200 fade-in bg-zinc-900 border border-white/10" id="hero-guests-dropdown" onclick="event.stopPropagation()">
<div className="hover:bg-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-300 hover:text-white cursor-pointer transition-colors" onclick="heroWidget.selectOption('guests', '1', '1 Erwachsener', event)">
                1 Erwachsener
              </div>
<div className="hover:bg-white/10 rounded-lg px-4 py-2.5 text-sm text-white font-medium bg-white/5 cursor-pointer transition-colors" onclick="heroWidget.selectOption('guests', '2', '2 Erwachsene', event)">
                2 Erwachsene
              </div>
<div className="hover:bg-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-300 hover:text-white cursor-pointer transition-colors" onclick="heroWidget.selectOption('guests', '3', '3 Erwachsene', event)">
                3 Erwachsene
              </div>
<div className="hover:bg-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-300 hover:text-white cursor-pointer transition-colors" onclick="heroWidget.selectOption('guests', '4', '4 Erwachsene', event)">
                4 Erwachsene
              </div>
</div>
<input id="hero-guests-value" type="hidden" value="2"/>
</div>
<div className="relative group px-6 py-3 md:py-4 flex-1 w-full md:w-auto border-b md:border-b-0 border-white/5 md:border-r hover:bg-white/5 transition-colors cursor-pointer" onclick="heroWidget.toggleDropdown('rooms')">
<label className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-zinc-500 mb-1 cursor-pointer pointer-events-none">
<svg className="" data-lucide="bed-double" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M2 20v-8m20 8v-8M4 10h16M2 14h20M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Zimmer
            </label>
<div className="flex items-center justify-between pointer-events-none">
<span className="text-white font-medium" id="hero-rooms-display">
                1 Zimmer
              </span>
<svg className="text-zinc-500" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="hidden absolute top-[calc(100%+8px)] left-0 w-full min-w-[200px] glass-dropdown rounded-2xl p-1 z-50 flex flex-col shadow-xl origin-top transition-all duration-200 fade-in bg-zinc-900 border border-white/10" id="hero-rooms-dropdown" onclick="event.stopPropagation()">
<div className="hover:bg-white/10 rounded-lg px-4 py-2.5 text-sm text-white font-medium bg-white/5 cursor-pointer transition-colors" onclick="heroWidget.selectOption('rooms', '1', '1 Zimmer', event)">
                1 Zimmer
              </div>
<div className="hover:bg-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-300 hover:text-white cursor-pointer transition-colors" onclick="heroWidget.selectOption('rooms', '2', '2 Zimmer', event)">
                2 Zimmer
              </div>
<div className="hover:bg-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-300 hover:text-white cursor-pointer transition-colors" onclick="heroWidget.selectOption('rooms', '3', '3 Zimmer', event)">
                3 Zimmer
              </div>
<div className="hover:bg-white/10 rounded-lg px-4 py-2.5 text-sm text-zinc-300 hover:text-white cursor-pointer transition-colors" onclick="heroWidget.selectOption('rooms', '4', '4+ Zimmer', event)">
                4+ Zimmer
              </div>
</div>
<input id="hero-rooms-value" type="hidden" value="1"/>
</div>
<div className="p-1.5 w-full md:w-auto">
<button className="w-full md:w-auto bg-white text-black rounded-full px-8 py-3.5 md:py-3 flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)] group cursor-pointer relative overflow-hidden" onclick="heroWidget.search()">
<span className="text-xs tracking-widest uppercase font-medium relative z-10">
                Suchen
              </span>
<svg className="group-hover:translate-x-0.5 transition-transform relative z-10" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="hidden md:flex -translate-x-1/2 flex-col z-10 opacity-50 absolute bottom-10 left-1/2 items-center">
<span className="text-[10px] uppercase text-zinc-50 tracking-[0.2em]">
          Scrollen
        </span>
<div className="bg-gradient-to-br from-[#ffffff] to-transparent w-[1px] h-12"></div>
</div>
</header>

<section className="bg-zinc-900 pt-32 pb-24 relative" id="offers">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="">
<span className="uppercase hidden md:block text-xs text-zinc-500 tracking-widest mb-4">
              Warum Oma Ida?
            </span>
<h2 className="md:text-5xl leading-[1.1] text-4xl font-medium text-white tracking-tight">
              Harz
              <span className="serif italic text-zinc-400">Hideaway</span>
</h2>
</div>
<div className="flex items-center gap-4">
<a className="group flex items-center gap-2 uppercase hover:text-white transition-colors text-xs text-zinc-400 tracking-widest" href="/angebote">
              Alle Angebote ansehen
              <svg className="group-hover:translate-x-1 transition-transform" data-icon-set="lucide" data-lucide="arrow-right" height="14" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 lg:h-[600px] gap-6 h-auto gap-x-6 gap-y-6">

<div className="lg:col-span-1 group overflow-hidden cursor-pointer lg:h-full h-[500px] border-white/5 border rounded-3xl relative">
<img alt="Spa Wellness" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 opacity-100 saturate-[1.25] brightness-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af505753-4e51-449e-80d8-63038ffeae6b_800w.jpg"/>
<div className="group-hover:bg-black/60 transition-colors duration-500 z-10 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="bg-gradient-to-t from-black/80 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0 pointer-events-none z-10"></div>
<div className="absolute top-6 left-6 glass-badge px-3 py-1 rounded-full border border-white/10 z-20">
<span className="text-[10px] uppercase font-medium text-white tracking-widest">
                Beliebt
              </span>
</div>
<div className="z-20 w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0 gap-x-2 gap-y-2">
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight">
                Harz Sanctuary
              </h3>
<p className="leading-relaxed text-base font-light text-zinc-200 border-white/20 border-l mb-6 pl-4 drop-shadow-md">
                Entspannen Sie nach einer Wanderung in unserem Lounge Bereich
                mit Gas-Kamin.
              </p>
<span className="inline-flex items-center gap-2 uppercase hover:text-zinc-300 transition-colors text-xs text-white tracking-widest" onclick="window.location.href='/relax'" role="button">
                Details
                <svg className="" data-icon-set="lucide" data-lucide="chevron-right" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>

<div className="lg:col-span-2 flex flex-col lg:grid lg:grid-rows-2 gap-6 lg:h-full h-auto gap-x-6 gap-y-6">

<div className="group overflow-hidden cursor-pointer border-white/5 border rounded-3xl relative h-[250px] lg:h-full">
<div className="group-hover:bg-black/60 transition-colors duration-500 z-10 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Breakfast" className="transition-transform duration-700 group-hover:scale-105 saturate-[1.25] opacity-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 blur-none brightness-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5130bc3-7e53-4f2a-982d-df01c646d2ea_3840w.jpg"/>
<div className="flex flex-col z-20 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 drop-shadow-md gap-x-2 gap-y-2 items-start justify-center" onclick="window.location.href='/harz'" role="button">
<h3 className="transition-transform duration-500 text-3xl font-medium text-white tracking-tight mb-2 shadow-black">
                  Direkt an der
                  <span className="serif italic">Natur</span>
</h3>
<p className="text-base font-light text-zinc-100 max-w-md mt-2 drop-shadow-md border-l border-white/20 pl-4 mb-6">
                  Nur ein Katzensprung vom Kurpark und den Wäldern des Harzes.
                </p>
<span className="inline-flex items-center gap-2 uppercase hover:text-zinc-300 transition-colors text-xs text-white tracking-widest" onclick="window.location.href='/harz'" role="button">
                  Details
                  <svg className="" data-icon-set="lucide" data-lucide="chevron-right" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<style className="">
                @keyframes flash-attention {
                  0% {
                    filter: brightness(1);
                    border-color: rgba(255, 255, 255, 0.05);
                  }

                  15% {
                    filter: brightness(1.5);
                    border-color: rgba(255, 255, 255, 0.8);
                    box-shadow: 0 0 40px rgba(255, 255, 255, 0.15);
                  }

                  100% {
                    filter: brightness(1);
                    border-color: rgba(255, 255, 255, 0.05);
                  }
                }

                .animate-flash-scroll {
                  animation: flash-attention 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
                }
              </style>
<div className="group overflow-hidden cursor-pointer hover:border-white/10 transition-colors flex flex-col min-h-[250px] md:min-h-0 md:text-left md:h-full text-center bg-zinc-800 h-full border-white/5 border rounded-3xl p-6 md:p-8 relative justify-between gap-6" onclick="window.location.href='/relax'">
<div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-4 items-center">
<span className="serif text-2xl md:text-4xl text-zinc-100 bg-zinc-800 tracking-tight leading-tight">
                    Unser Highlight
                  </span>
<div className="bg-white/10 p-2 rounded-full border border-white/10 group-hover:bg-white/20 transition-colors shrink-0">
<svg className="" data-lucide="gem" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(254, 249, 195)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3h12l4 6-10 13L2 9Z"></path>
<path d="M11 3 8 9l4 13 4-13-3-6"></path>
<path d="M2 9h20"></path>
</svg>
</div>
</div>
<div className="flex flex-col md:block items-center w-full">
<h4 className="text-lg font-normal text-white mb-2">
                    exklusive Vino-Lounge
                  </h4>
<p className="leading-relaxed text-xs text-zinc-400 mb-6">
                    Jetzt verschiedene Weine testen und genießen. Alles läuft
                    automatisch über unseren modernen Wein-Automaten.
                  </p>
<span className="inline-flex items-center gap-2 uppercase hover:text-zinc-300 transition-colors text-xs text-white tracking-widest" role="button">
                    Details
                    <svg className="" data-lucide="chevron-right" height="12" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</span>
</div>
</div>


<div className="group overflow-hidden cursor-pointer border-white/5 border rounded-3xl relative h-[250px] md:h-full">
<img alt="Mountain View" className="transition-all duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 opacity-100 saturate-[1.25] brightness-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8ea3acd-21c7-4a41-b820-01f3cbec7573_800w.jpg"/>
<div className="group-hover:bg-black/50 transition-colors duration-500 bg-black/0 z-10 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='/relax'" role="button"></div>
<div className="absolute bottom-8 left-8 z-20">
<span className="text-xs font-medium text-white bg-black/50 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur" onclick="window.location.href='/relax'" role="button">
                    Wein-Automat
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-y text-white bg-zinc-800 border-white/5 pt-16 pb-16 relative">
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="md:text-4xl serif leading-snug text-2xl text-zinc-200 tracking-tight mb-10">
          "Entfliehe in ein exklusives Refugium im Herzen des Harzes, wo moderne
          Gemütlichkeit auf beeindruckende Natur trifft."
        </h2>
<div className="flex flex-col items-center">
<div className="bg-zinc-700 w-12 h-[1px] mb-8"></div>
<img alt="Christian Lindner" className="w-20 h-20 object-cover border-white/10 border rounded-full ring-zinc-800 ring-4 mb-4 shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2508905-ecce-48d6-8ef6-5cae0c997c79_320w.jpg"/>
<span className="text-sm font-medium tracking-wide text-white">
            Christian Lindner
          </span>
<span className="uppercase text-xs text-zinc-500 tracking-widest mt-1">
            Geschäftsführer, StrandBerg GmbH
          </span>
</div>
</div>
</section>
<section className="bg-zinc-900 border-white/5 border-t pt-32 pb-32 backdrop-blur-xl" id="rooms">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-24">
<span className="uppercase block text-xs text-zinc-500 tracking-widest mb-4">
            Unsere Zimmer
          </span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight mb-6 font-medium">
            Oasen der Ruhe
          </h2>
<p className="leading-relaxed text-base font-light text-zinc-400">
            Entworfen mit einem Fokus auf Komfort und rustikale Ästhetik, bieten
            unsere Zimmer einen gemütlichen Rückzugsort.
          </p>
</div>
<div className="space-y-32">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="aspect-[4/3] overflow-hidden group border-white/5 border rounded-2xl relative">
<div className="group-hover:bg-transparent transition-colors z-10 bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Doppelzimmer" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/24d92cda-0bfa-49af-bdbd-1af8ae707ac4_1600w.jpg"/>
</div>
<div className="lg:pl-10">
<div className="flex items-center gap-4 mb-6">
<span className="text-zinc-600 text-xl serif">01</span>
<div className="h-[1px] w-12 bg-zinc-800"></div>
</div>
<h3 className="text-3xl font-medium text-white mb-4">Doppelzimmer</h3>
<p className="text-zinc-400 text-base font-light leading-relaxed mb-8">
                Ein gemütliches Zimmer für erholsame Nächte mit allem, was Sie
                brauchen.
              </p>
<div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 border-t border-b border-white/5 py-6">
<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="maximize" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs tracking-wide uppercase">16-22 m²</span>
</div>
<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="tv" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path className="" d="m17 2l-5 5l-5-5"></path>
<rect height="15" rx="2" width="20" x="2" y="7"></rect>
</g>
</svg>
<span className="text-xs tracking-wide uppercase">TV</span>
</div>
<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="droplets" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path>
<path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
</g>
</svg>
<span className="text-xs tracking-wide uppercase">
                    Regendusche
                  </span>
</div>
<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="wifi" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs tracking-wide uppercase">Wifi</span>
</div>
</div>
<button className="uppercase hover:bg-white hover:text-black transition-all duration-300 text-xs text-white tracking-widest border-white/20 border rounded-full pt-3 pr-8 pb-3 pl-8" onclick="window.location.href='/doppelzimmer'" role="button">
                Details ansehen
              </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="lg:order-2 relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 group">
<div className="group-hover:bg-transparent transition-colors z-10 bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Komfort Doppelzimmer" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66cda4d5-be81-4082-b2f9-406efaeb1c26_1600w.jpg"/>
</div>
<div className="lg:order-1 lg:pr-10 pr-10">
<div className="flex items-center gap-4 mb-6">
<span className="text-zinc-600 text-xl serif">02</span>
<div className="h-[1px] w-12 bg-zinc-800"></div>
</div>
<h3 className="text-3xl text-white mb-4 font-medium">
                Komfort Doppelzimmer
              </h3>
<p className="text-zinc-400 text-base font-light leading-relaxed mb-8">
                Mehr Raum für Ihre Entspannung mit hochwertiger Ausstattung und
                Komfort.
              </p>
<div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 border-t border-b border-white/5 py-6">

<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="maximize" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs tracking-wide uppercase">20-27 m²</span>
</div>
<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="tv" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m17 2l-5 5l-5-5"></path>
<rect height="15" rx="2" width="20" x="2" y="7"></rect>
</g>
</svg>
<span className="text-xs tracking-wide uppercase">TV</span>
</div>
<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="droplets" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path>
<path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
</g>
</svg>
<span className="text-xs tracking-wide uppercase">
                    Regendusche
                  </span>
</div>
<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="wifi" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs tracking-wide uppercase">Wifi</span>
</div>
</div>
<button className="uppercase hover:bg-white hover:text-black transition-all duration-300 cursor-pointer text-xs text-white tracking-widest border-white/20 border rounded-full pt-3 pr-8 pb-3 pl-8" onclick="window.location.href='/komfort-doppelzimmer'" role="button">
                Details ansehen
              </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/5 group">
<div className="group-hover:bg-transparent transition-colors z-10 bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Superior Doppelzimmer" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c3e86bc-de8b-4c79-a38f-bb26895c103a_1600w.jpg"/>
</div>
<div className="lg:pl-10">
<div className="flex items-center gap-4 mb-6">
<span className="text-zinc-600 text-xl serif">03</span>
<div className="h-[1px] w-12 bg-zinc-800"></div>
</div>
<h3 className="text-3xl font-medium text-white mb-4">
                Superior Doppelzimmer
              </h3>
<p className="text-zinc-400 text-base font-light leading-relaxed mb-8">
                Unser größtes Zimmerangebot mit eigener Sitzecke für das
                besondere Wohlfühlambiente.
              </p>
<div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10 border-t border-b border-white/5 py-6">
<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="maximize" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs tracking-wide uppercase">30-35 m²</span>
</div>
<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="armchair" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
<path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path>
</g>
</svg>
<span className="text-xs tracking-wide uppercase">Sitzecke</span>
</div>
<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="droplets" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path>
<path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
</g>
</svg>
<span className="text-xs tracking-wide uppercase">
                    Regendusche
                  </span>
</div>
<div className="flex items-center gap-3 text-zinc-400">
<svg className="" data-icon-set="lucide" data-lucide="wifi" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs tracking-wide uppercase">Wifi</span>
</div>
</div>
<button className="uppercase hover:bg-white hover:text-black transition-all duration-300 text-xs text-white tracking-widest border-white/20 border rounded-full pt-3 pr-8 pb-3 pl-8" onclick="window.location.href='/superior-doppelzimmer'" role="button">
                Details ansehen
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-zinc-900 border-white/5 border-t pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-12">
<span className="uppercase block text-xs text-zinc-500 tracking-widest mb-4">
            Gästestimmen
          </span>
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-medium">
            Was unsere Gäste sagen
          </h2>
</div>

<div className="elfsight-app-4929e548-8d8c-4086-ad75-5be6e240dff6" data-elfsight-app-lazy="" data-miwrid="175d16ff-4149-47a5-9ac3-675e73e80021">
<div className="EmbedRoot__Root-sc-67f2186e-0 cqAxeQ es-embed-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" style={{maxWidth: '1280px'}}>
<div className="Main__Container-sc-a5e5d75f-0 hBUGyh es-main-container">
<div className="WidgetBackground__Container-sc-386b5057-0 jFNRRy es-widget-background-container WidgetBackground__StyledWidgetBackground-sc-b6fb78c-0 iltOVH es-background-container" style={{borderRadius: '24px'}}>
<div className="WidgetBackground__Wrapper-sc-386b5057-1 dIlOny es-widget-background-wrapper" style={{padding: '40px'}}>
<div className="Background__Container-sc-fd94690c-0 iRfhKy es-background-container" style={{borderRadius: '24px'}}>
<div className="Background__Base-sc-fd94690c-1 kinpGA es-background-base" style={{display: 'block', backgroundColor: 'rgb(24, 24, 27)'}}></div>
<div className="Background__Overlay-sc-fd94690c-2 jtZZdl es-background-overlay" style={{display: 'block', backgroundColor: 'rgba(255, 255, 255, 0)'}}></div>
</div>
<div className="WidgetBackground__Content-sc-386b5057-2 cMTovS es-widget-background-content WidgetBackground__ContentContainer-sc">
<div className="Main__Content-sc-a5e5d75f-1 fZvkTJ es-main-content">
<div className="CarouselLayout__CarouselContainer-sc-850130f-1 DhnPA es-carousel-layout-container Carousel__StyledCarousel-sc-568197e-1 bXnsHx">
<div className="CarouselLayout__CarouselWrapper-sc-850130f-0 fwpcct es-carousel-layout-wrapper">
<div className="Carousel__CarouselContainer-sc-7293b13f-0 dZhZOh es-carousel-container es-carousel-layout">
<div className="Carousel__CarouselOuter-sc-7293b13f-1 lSLkU es-carousel-outer">
<div aria-hidden="true" aria-label="Previous" className="Carousel__CarouselArrowControlContainer-sc-7293b13f-9 jtAqtc es-carousel-arrow-control-container" role="button" style={{width: '32px', height: '32px', flexBasis: '32px', left: '-16px'}}></div>
<div aria-label="Carousel" className="Carousel__CarouselInner-sc-7293b13f-2 jwMZDh es-carousel-inner" role="region">
<div className="Carousel__CarouselSwiperWrapper-sc-7293b13f-11 emmNPp es-carousel-swiper-wrapper">
<div className="swiper" dir="ltr">
<div className="swiper-wrapper" style={{height: '0px', transform: 'translate3d(0px, 0px, 0px)'}}></div>
</div>
</div>
</div>
<div aria-hidden="true" aria-label="Next" className="Carousel__CarouselArrowControlContainer-sc-7293b13f-9 jtAqtc es-carousel-arrow-control-container" role="button" style={{width: '32px', height: '32px', flexBasis: '32px', right: '-16px'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section aria-label="Bekannt aus" className="overflow-hidden bg-zinc-900 border-zinc-900/5 border-t pt-20 pb-16 relative" id="Untermarken Überschrift">
<div className="z-20 text-center max-w-7xl mr-auto mb-12 ml-auto pr-6 pl-6 relative translate-x-1 -translate-y-8">
<span className="text-sm text-zinc-500 uppercase tracking-widest">
          Nicht fündig geworden?
        </span>
<h3 className="mt-2 text-xl md:text-2xl text-white font-medium tracking-tight">
          Entdecken Sie die weiteren Marken der StrandBerg Familie!
        </h3>
</div>
<div className="z-10 pointer-events-none bg-gradient-to-r from-zinc-950 to-transparent w-24 absolute top-0 bottom-0 left-0"></div>
<div className="z-10 pointer-events-none bg-gradient-to-l from-zinc-950 to-transparent w-24 absolute top-0 right-0 bottom-0"></div>
<div className="hidden md:flex overflow-hidden group">
<div className="flex shrink-0 animate-[infinite-scroll_10s_linear_infinite] md:animate-[infinite-scroll_40s_linear_infinite] group-hover:[animation-play-state:paused] min-w-full md:px-12 md:space-x-24 h-24 pr-4 pl-4 space-x-8 items-center justify-around">

<img alt="Geo Magazin" className="hover:opacity-100 transition-opacity duration-300 bg-center -translate-y-2 cursor-pointer shrink-0 md:translate-x-16 opacity-100 w-auto h-50 object-cover invert brightness-0 translate-x-4" onclick="window.location.href='https://www.strand-berg.de/auberge-chalet-residences/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cda3e3bb-322c-4d8b-be2e-68cb6c944353_320w.png"/>

<img alt="Cosmopolitan" className="hover:opacity-100 transition-opacity duration-300 bg-center cursor-pointer shrink-0 opacity-100 w-auto h-48 object-cover invert brightness-0 translate-y-2" onclick="window.location.href='https://www.strand-berg.de/unterkuenfte/ursprung/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df0af0f7-1fb5-4512-9701-0fba9220e248_800w.png"/>

<img alt="Stern" className="hover:opacity-100 transition-opacity duration-300 opacity-100 w-auto h-24 object-contain invert brightness-0 scale-150 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/strandbergs-gin-destille/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9da315c9-095a-4f7c-9db2-72846587b435_320w.png"/>

<img alt="Gala" className="hover:opacity-100 transition-opacity duration-300 bg-center opacity-100 w-auto h-16 object-cover invert brightness-0 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/613992d3-60a2-431a-8292-763561ec8ca3_320w.png"/>

<img alt="Architectural Digest" className="hover:opacity-100 transition-opacity duration-300 opacity-100 w-auto h-8 object-contain invert brightness-0 shrink-0 cursor-pointer" onclick="window.location.href='https://designhotel-viktoria.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cde068b-8250-4788-b4da-d19ec25043e8_800w.png"/>
</div>

<div className="flex shrink-0 animate-[infinite-scroll_10s_linear_infinite] md:animate-[infinite-scroll_40s_linear_infinite] group-hover:[animation-play-state:paused] min-w-full h-24 pr-12 pl-12 space-x-24 items-center justify-around">

<img alt="Geo Magazin" className="hover:opacity-100 transition-opacity duration-300 bg-center -translate-y-2 cursor-pointer shrink-0 md:translate-x-16 opacity-100 w-auto h-50 object-cover invert brightness-0 translate-x-4" onclick="window.location.href='https://www.strand-berg.de/auberge-chalet-residences/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cda3e3bb-322c-4d8b-be2e-68cb6c944353_320w.png"/>

<img alt="Cosmopolitan" className="hover:opacity-100 transition-opacity duration-300 bg-center cursor-pointer shrink-0 opacity-100 w-auto h-48 object-cover invert brightness-0 translate-y-2" onclick="window.location.href='https://www.strand-berg.de/unterkuenfte/ursprung/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df0af0f7-1fb5-4512-9701-0fba9220e248_800w.png"/>

<img alt="Stern" className="hover:opacity-100 transition-opacity duration-300 opacity-100 w-auto h-24 object-contain invert brightness-0 scale-150 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/strandbergs-gin-destille/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9da315c9-095a-4f7c-9db2-72846587b435_320w.png"/>

<img alt="Gala" className="hover:opacity-100 transition-opacity duration-300 bg-center opacity-100 w-auto h-16 object-cover invert brightness-0 shrink-0 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/613992d3-60a2-431a-8292-763561ec8ca3_320w.png"/>

<img alt="Architectural Digest" className="hover:opacity-100 transition-opacity duration-300 opacity-100 w-auto h-8 object-contain invert brightness-0 shrink-0 cursor-pointer" onclick="window.location.href='https://designhotel-viktoria.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cde068b-8250-4788-b4da-d19ec25043e8_800w.png"/>
</div>
</div>
<div className="md:hidden relative w-full overflow-hidden mt-8 group">
<div className="absolute z-10 left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none"></div>
<div className="absolute z-10 right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none"></div>
<div className="flex animate-[infinite-scroll_25s_linear_infinite] w-max group-active:[animation-play-state:paused] group-hover:[animation-play-state:paused]">
<div className="flex gap-8 pr-4 pl-4 gap-x-8 gap-y-8 items-center">
<img className="cursor-pointer opacity-70 w-auto h-12 object-contain invert brightness-0 scale-150" onclick="window.location.href='https://www.strand-berg.de/auberge-chalet-residences/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cda3e3bb-322c-4d8b-be2e-68cb6c944353_320w.png"/>
<img className="opacity-70 w-auto h-10 object-contain invert brightness-0 scale-150 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/unterkuenfte/ursprung/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df0af0f7-1fb5-4512-9701-0fba9220e248_800w.png"/>
<img className="opacity-70 w-auto h-14 object-contain invert brightness-0 scale-125 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/strandbergs-gin-destille/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9da315c9-095a-4f7c-9db2-72846587b435_320w.png"/>
<img className="cursor-pointer opacity-70 w-auto h-8 object-contain invert brightness-0" onclick="window.location.href='https://www.strand-berg.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/613992d3-60a2-431a-8292-763561ec8ca3_320w.png"/>
<img className="opacity-70 w-auto h-6 object-contain invert brightness-0 scale-75 cursor-pointer" onclick="window.location.href='https://designhotel-viktoria.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cde068b-8250-4788-b4da-d19ec25043e8_800w.png"/>
</div>
<div className="flex gap-8 items-center px-4">
<img className="cursor-pointer opacity-70 w-auto h-12 object-contain invert brightness-0 scale-150" onclick="window.location.href='https://www.strand-berg.de/auberge-chalet-residences/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cda3e3bb-322c-4d8b-be2e-68cb6c944353_320w.png"/>
<img className="cursor-pointer opacity-70 w-auto h-10 object-contain invert brightness-0 scale-150" onclick="window.location.href='https://www.strand-berg.de/unterkuenfte/ursprung/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df0af0f7-1fb5-4512-9701-0fba9220e248_800w.png"/>
<img className="h-14 w-auto object-contain invert brightness-0 opacity-70 scale-125 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/strandbergs-gin-destille/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9da315c9-095a-4f7c-9db2-72846587b435_320w.png"/>
<img className="h-8 w-auto object-contain invert brightness-0 opacity-70 cursor-pointer" onclick="window.location.href='https://www.strand-berg.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/613992d3-60a2-431a-8292-763561ec8ca3_320w.png"/>
<img className="h-6 w-auto object-contain invert brightness-0 opacity-70 cursor-pointer" onclick="window.location.href='https://designhotel-viktoria.de/'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2cde068b-8250-4788-b4da-d19ec25043e8_800w.png"/>
</div>
</div>
</div>
</section>

<section className="bg-zinc-800 border-white/5 border-t pt-24 pb-24 relative">
<div className="z-10 text-center max-w-xl mr-auto ml-auto pr-6 pl-6 relative">
<span className="text-xs text-zinc-500 uppercase tracking-widest mb-4 block">
          Bleiben Sie informiert
        </span>
<h2 className="text-3xl mb-6 text-white font-medium tracking-tight">
          Angebote aus dem Harz
        </h2>
<p className="text-sm text-zinc-400 font-light mb-10">
          Abonnieren Sie unsere Newsletter für saisonale Angebote und
          Neuigkeiten.
        </p>
<form className="relative max-w-sm mx-auto">
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-full py-3.5 pl-6 pr-32 outline-none text-white placeholder-zinc-600 focus:border-zinc-600 transition-colors text-sm" placeholder="E-Mail Adresse" type="email"/>
<button className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black px-5 rounded-full text-[10px] uppercase tracking-widest font-bold hover:bg-zinc-200 transition-colors" type="submit">
            Abonnieren
          </button>
</form>
</div>
<div className="bg-center bg-gradient-to-b from-zinc-900/20 to-transparent border-zinc-900 absolute top-0 right-0 bottom-0 left-0"></div>
</section>

<footer className="text-sm font-light text-zinc-500 bg-zinc-900 border-white/5 border-t pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

<div className="col-span-1 sm:col-span-2 lg:col-span-1">
<h3 className="serif text-2xl text-white tracking-tighter mb-6">
              Hotel Oma Ida
            </h3>
<p className="leading-relaxed mb-6">
              Herzog Wilhelm Straße 10 38700 Braunlage, Deutschland
            </p>
<div className="flex flex-col gap-2 mb-8">
<a className="hover:text-white transition-colors text-xs tracking-wide" href="/tel:+49055209997979">
                +49 (0) 5520 999 79 79
              </a>
<a className="hover:text-white transition-colors text-xs tracking-wide" href="/mailto:mail@strand-berg.de">
                mail@strand-berg.de
              </a>
</div>

<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all" href="https://www.instagram.com/strandberg_fewo/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-instagram" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all" href="https://www.facebook.com/strandbergferienwohnungen" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-facebook" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a className="flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all w-8 h-8 border-zinc-800 border rounded-full" href="https://www.tiktok.com/@strandberg_fewo" rel="noopener noreferrer" target="_blank">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14">
<path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center hover:border-zinc-600 hover:text-white transition-all" href="https://www.linkedin.com/company/strandbergfewo" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-linkedin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
              Zimmer
            </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li className="">
<a className="hover:text-white transition-colors" href="/zimmer">
                  Alle Zimmer
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/doppelzimmer">
                  Doppelzimmer
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/komfort-doppelzimmer">
                  Komfort Doppelzimmer
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/superior-doppelzimmer">
                  Superior Doppelzimmer
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
              Entdecken
            </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li className="">
<a className="hover:text-white transition-colors" href="/angebote">
                  Angebote
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/harz">
                  Harz
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/relax">
                  Relax
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
              Informationen
            </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li className=""></li>
<li className="">
<a className="hover:text-white transition-colors" href="/anfragen">
                  Kontakt
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/anfahrt-lage">
                  Anfahrt &amp; Lage
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/faq">
                  FAQ
                </a>
</li>
</ul>
</div>

<div className="">
<h4 className="text-white uppercase text-[10px] tracking-widest mb-6">
              Rechtliches
            </h4>
<ul className="space-y-3 text-xs tracking-wide">
<li className="">
<a className="hover:text-white transition-colors" href="/datenschutz">
                  Datenschutzerklärung
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/impressum">
                  Impressum
                </a>
</li>
<li className="">
<a className="hover:text-white transition-colors" href="/barrierefreiheit">
                  Barrierefreiheitserklärung
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p className="">© 2026 StrandBerg GmbH. Alle Rechte vorbehalten.</p>
</div>
</div>
</footer>



<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>

<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-da3126b9-0 csMGxI es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-d7ae4337-0 dPpwIA es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-d7ae4337-0 dPpwIA es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-d7ae4337-0 dPpwIA es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-d7ae4337-0 dPpwIA es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-d7ae4337-0 dPpwIA es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-d7ae4337-0 dPpwIA es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-d7ae4337-0 dPpwIA es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-d7ae4337-0 dPpwIA es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-d7ae4337-0 dPpwIA es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>
<div className="portal-nest-provider__ElfsightPortalNest-sc-d7ae4337-0 dPpwIA es-portal-root eapps-all-in-one-reviews-4929e548-8d8c-4086-ad75-5be6e240dff6-custom-css-root" id="__EAAPS_PORTAL"></div>

    </>
  );
}
