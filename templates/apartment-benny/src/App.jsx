import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Header Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('main-nav');
            if(window.scrollY > 10) {
                nav.classList.add('shadow-sm');
            } else {
                nav.classList.remove('shadow-sm');
            }
        });

        // Setup Dates
        const today = new Date().toISOString().split('T')[0];
        document.getElementById('book-checkin').min = today;
        document.getElementById('book-checkout').min = today;

        // View Navigation
        function switchView(viewId) {
            document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
            document.getElementById(viewId + '-view').classList.remove('hidden');
            window.scrollTo(0, 0);

            if(viewId === 'admin') {
                document.getElementById('admin-login').classList.remove('hidden');
                document.getElementById('admin-dashboard').classList.add('hidden');
            }
        }

        function scrollToSection(id) {
            setTimeout(() => {
                const el = document.getElementById(id);
                if(el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
            }, 50);
        }

        // Booking Logic State
        let currentBooking = { ci: '', co: '', guests: 0, total: 0 };
        const CLEANING_FEE = 80;

        function handleAvailabilityCheck(e) {
            e.preventDefault();
            const ci = document.getElementById('book-checkin').value;
            const co = document.getElementById('book-checkout').value;
            const guests = parseInt(document.getElementById('guest-select').value);
            
            if(new Date(ci) >= new Date(co)) {
                alert("Check-out date must be after check-in.");
                return;
            }

            // Hide step 2/3 if visible
            document.getElementById('booking-step-2').classList.add('hidden');
            document.getElementById('booking-step-3').classList.add('hidden');

            // Show Verifying
            const statusBox = document.getElementById('verification-status');
            statusBox.classList.remove('hidden', 'bg-red-50', 'border-red-100', 'bg-emerald-50', 'border-emerald-100');
            statusBox.classList.add('bg-slate-50', 'border-slate-200');
            
            document.getElementById('status-loading').classList.remove('hidden');
            document.getElementById('status-success').classList.add('hidden');
            document.getElementById('status-error').classList.add('hidden');

            // Simulate Booking.com API Check & Calculation
            setTimeout(() => {
                document.getElementById('status-loading').classList.add('hidden');
                
                // Calculate Price iterating over dates
                let total = 0;
                let cDate = new Date(ci);
                let eDate = new Date(co);
                let nights = 0;
                
                while(cDate < eDate) {
                    let y = cDate.getFullYear();
                    let m = cDate.getMonth();
                    let d = cDate.getDate();
                    
                    // fetch from localStorage or default
                    let price = localStorage.getItem(`benny_price_${y}-${m}-${d}`) || 180;
                    total += parseInt(price);
                    nights++;
                    cDate.setDate(cDate.getDate() + 1);
                }

                // Apply discounts based on guests
                let guestMultiplier = 1;
                if(guests === 5) guestMultiplier = 0.90;
                else if(guests === 4) guestMultiplier = 0.85;
                else if(guests <= 3) guestMultiplier = 0.80;

                total = Math.round(total * guestMultiplier) + CLEANING_FEE;
                
                currentBooking = { ci, co, guests, total };
                document.getElementById('price-display').innerText = `${total} €`;

                statusBox.classList.replace('bg-slate-50', 'bg-emerald-50');
                statusBox.classList.replace('border-slate-200', 'border-emerald-100');
                document.getElementById('status-success').classList.remove('hidden');
                
            }, 1500);
        }

        function proceedToDetails() {
            document.getElementById('booking-step-1').classList.add('hidden');
            document.getElementById('booking-step-2').classList.remove('hidden');
        }

        function backToStep1() {
            document.getElementById('booking-step-2').classList.add('hidden');
            document.getElementById('booking-step-1').classList.remove('hidden');
        }

        function finalizeBooking(e) {
            e.preventDefault();
            const name = document.getElementById('b-name').value;
            const phone = document.getElementById('b-phone').value;
            const email = document.getElementById('b-email').value;
            const note = document.getElementById('b-note').value;

            const res = {
                id: Math.random().toString(36).substr(2, 9),
                date: new Date().toISOString().split('T')[0],
                name, phone, email, note,
                ...currentBooking,
                status: 'Pending'
            };

            // Save to Admin LocalStorage
            let stored = JSON.parse(localStorage.getItem('benny_reservations') || '[]');
            stored.unshift(res);
            localStorage.setItem('benny_reservations', JSON.stringify(stored));

            // Show Success UI
            document.getElementById('booking-step-2').classList.add('hidden');
            document.getElementById('booking-step-3').classList.remove('hidden');

            // --- EMAIL FUNCTIONALITY (MAILTO) ---
            // Construct the email body
            const subject = encodeURIComponent(`Booking Request: ${name} - ${currentBooking.ci}`);
            const body = encodeURIComponent(
                `Hello Benny Team,\n\nI would like to request a reservation.\n\n` +
                `Name: ${name}\n` +
                `Phone: ${phone}\n` +
                `Email: ${email}\n\n` +
                `Check-in: ${currentBooking.ci}\n` +
                `Check-out: ${currentBooking.co}\n` +
                `Guests: ${currentBooking.guests}\n` +
                `Total Price: ${currentBooking.total} €\n\n` +
                `Special Requests:\n${note}\n`
            );
            
            // Trigger Mail Client
            window.location.href = `mailto:info@benny.es?subject=${subject}&body=${body}&cc=info@benny.es`;
        }

        function resetBooking() {
            document.getElementById('booking-step-3').classList.add('hidden');
            document.getElementById('booking-step-1').classList.remove('hidden');
            document.getElementById('verification-status').classList.add('hidden');
            document.getElementById('book-checkin').value = '';
            document.getElementById('book-checkout').value = '';
        }

        // Contact Form Logic with Email Trigger
        function handleContactSubmit(e) {
            e.preventDefault();
            
            const name = document.getElementById('c-name').value;
            const email = document.getElementById('c-email').value;
            const msg = document.getElementById('c-msg').value;

            // Show loading
            const btn = document.getElementById('c-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<div class="loader"></div>';
            
            setTimeout(() => {
                // UI Feedback
                document.getElementById('contact-form').classList.add('hidden');
                document.getElementById('contact-success').classList.remove('hidden');
                document.getElementById('contact-form').reset();
                btn.innerHTML = originalText;

                // --- EMAIL FUNCTIONALITY (MAILTO) ---
                const subject = encodeURIComponent(`New Inquiry from Website: ${name}`);
                const body = encodeURIComponent(
                    `Name: ${name}\n` +
                    `Email: ${email}\n\n` +
                    `Message:\n${msg}`
                );
                
                // Trigger Mail Client
                window.location.href = `mailto:info@benny.es?subject=${subject}&body=${body}&cc=info@benny.es`;

            }, 800);
        }

        // ADMIN LOGIC
        function handleLogin(e) {
            e.preventDefault();
            const u = document.getElementById('username').value;
            const p = document.getElementById('password').value;
            if(p === 'admin123') {
                document.getElementById('admin-login').classList.add('hidden');
                document.getElementById('admin-dashboard').classList.remove('hidden');
                updateMonthOptions();
                loadReservations();
            } else {
                document.getElementById('login-error').classList.remove('hidden');
            }
        }

        function logoutAdmin() {
            document.getElementById('admin-dashboard').classList.add('hidden');
            document.getElementById('admin-login').classList.remove('hidden');
        }

        function switchAdminTab(tab) {
            document.getElementById('admin-prices').classList.add('hidden');
            document.getElementById('admin-reservations').classList.add('hidden');
            document.getElementById('tab-prices').classList.replace('text-teal-600', 'text-slate-500');
            document.getElementById('tab-prices').classList.replace('border-teal-600', 'border-transparent');
            document.getElementById('tab-res').classList.replace('text-teal-600', 'text-slate-500');
            document.getElementById('tab-res').classList.replace('border-teal-600', 'border-transparent');

            if(tab === 'prices') {
                document.getElementById('admin-prices').classList.remove('hidden');
                document.getElementById('tab-prices').classList.replace('text-slate-500', 'text-teal-600');
                document.getElementById('tab-prices').classList.add('border-b-2', 'border-teal-600');
            } else {
                document.getElementById('admin-reservations').classList.remove('hidden');
                document.getElementById('tab-res').classList.replace('text-slate-500', 'text-teal-600');
                document.getElementById('tab-res').classList.add('border-b-2', 'border-teal-600');
                loadReservations();
            }
        }

        function updateMonthOptions() {
            const year = parseInt(document.getElementById('admin-year').value);
            const monthSel = document.getElementById('admin-month');
            monthSel.innerHTML = '';
            const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
            let start = (year === 2026) ? 2 : 0; // Starts March 2026
            for(let i = start; i < 12; i++) {
                monthSel.innerHTML += `<option value="${i}">${months[i]}</option>`;
            }
            renderAdminCalendar();
        }

        function renderAdminCalendar() {
            const year = parseInt(document.getElementById('admin-year').value);
            const month = parseInt(document.getElementById('admin-month').value);
            const grid = document.getElementById('calendar-grid');
            grid.innerHTML = '';

            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const firstDayIndex = new Date(year, month, 1).getDay();
            let offset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

            for(let i=0; i<offset; i++) grid.innerHTML += `<div></div>`;

            for(let i=1; i<=daysInMonth; i++) {
                if(year === 2026 && month === 2 && i < 3) {
                    grid.innerHTML += `<div class="p-2 opacity-30 text-center text-xs text-slate-400 border border-slate-100 rounded-lg">${i}</div>`;
                    continue;
                }
                const saved = localStorage.getItem(`benny_price_${year}-${month}-${i}`) || 180;
                grid.innerHTML += `
                    <div class="border border-slate-200 rounded-xl p-2 bg-slate-50 flex flex-col items-center hover:border-teal-400 transition-colors">
                        <span class="text-xs font-medium text-slate-500 mb-1">${i}</span>
                        <input type="number" id="day-${i}" value="${saved}" class="w-full bg-white border border-slate-200 rounded text-sm py-1 text-center focus:outline-none focus:ring-1 focus:ring-teal-500">
                    </div>
                `;
            }
        }

        function saveAdminPrices() {
            const year = document.getElementById('admin-year').value;
            const month = document.getElementById('admin-month').value;
            const daysInMonth = new Date(year, parseInt(month) + 1, 0).getDate();
            const btn = document.getElementById('save-btn');
            btn.innerText = "Saving...";

            for(let i=1; i<=daysInMonth; i++) {
                const input = document.getElementById(`day-${i}`);
                if(input) localStorage.setItem(`benny_price_${year}-${month}-${i}`, input.value);
            }
            setTimeout(() => { btn.innerText = "Saved ✓"; setTimeout(() => btn.innerText = "Save Prices for Month", 2000); }, 500);
        }

        function loadReservations() {
            const tbody = document.getElementById('res-table-body');
            const empty = document.getElementById('res-empty');
            let data = JSON.parse(localStorage.getItem('benny_reservations') || '[]');
            
            tbody.innerHTML = '';
            if(data.length === 0) {
                empty.classList.remove('hidden');
                return;
            }
            empty.classList.add('hidden');

            data.forEach(r => {
                tbody.innerHTML += `
                    <tr class="hover:bg-slate-50">
                        <td class="px-4 py-3 whitespace-nowrap">${r.date}</td>
                        <td class="px-4 py-3"><div class="font-medium text-slate-900">${r.name}</div></td>
                        <td class="px-4 py-3 text-xs">${r.email}<br>${r.phone}</td>
                        <td class="px-4 py-3 text-xs"><span class="font-medium text-slate-700">${r.ci} to ${r.co}</span><br>${r.guests} Guests</td>
                        <td class="px-4 py-3 font-medium text-teal-600">${r.total} €</td>
                        <td class="px-4 py-3"><span class="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-medium">${r.status}</span></td>
                    </tr>
                `;
            });
        }

        // Basic Multilingual System
        const translations = {
            en: {
                nav_apartment: "Apartment", nav_reviews: "Reviews", nav_gallery: "Gallery", nav_surroundings: "Location", btn_book_nav: "Book Now",
                hero_badge: "Premium Accommodation", hero_title: "Experience the ultimate <br class='hidden md:block' /> escape in Costa Adeje.",
                hero_subtitle: "Spacious 80m² seaside apartment. Just a 5-minute stroll to the pristine sands of Playa del Duque.",
                book_title: "Check Availability & Prices", label_checkin: "Check-in", label_checkout: "Check-out", label_guests: "Guests", btn_check: "Verify Availability",
                status_checking: "Connecting to Booking.com to verify availability...", status_available: "Great news! The apartment is available.", status_synced: "Synchronized with Booking.com",
                est_price: "Total Price", pricing_info: "Includes cleaning fee. Discounts applied.", btn_continue: "Continue Booking", details_title: "Guest Details", btn_back: "Back",
                form_name: "Full Name", form_phone: "Phone Number", form_email: "Email Address", form_note: "Special Requests (Optional)", booking_disclaimer: "By clicking 'Complete Booking', your email client will open to send the request to info@benny.es. Please send the email to finalize the reservation.",
                btn_complete: "Complete Booking", success_title: "Reservation Drafted!", success_desc: "We have prepared your booking email to info@benny.es. Please make sure you have sent it from your email client.", btn_book_another: "Book another stay",
                feat_sup: "The Apartment", feat_title: "Designed for absolute comfort & relaxation.", space_p1: "Welcome to your home away from home. Apartment Benny offers a unique duplex living space that feels incredibly airy and bright. It features two private enclosed bedrooms, a spacious living area, and a fully equipped kitchen.",
                space_p2: "The highlight is the massive 15m² terrace overlooking the quiet surroundings. Enjoy your morning coffee here before taking a short 5-minute stroll to the pristine sands of Playa del Duque or Playa Fanabe. Perfect for families or groups up to 7 people.",
                am_wifi: "Free High-Speed WiFi", am_tv: "Flat-screen TV with streaming", am_kitchen: "Washing machine & Kitchenware", am_towels: "Towels & Bed linen provided",
                f1_desc: "Total Area", f2_title: "Up to 7 Guests", f2_desc: "2 Beds + Sofa", f3_title: "15m² Terrace", f3_desc: "Outdoor seating", f4_title: "5 Min Walk", f4_desc: "To the beach", f5_title: "Kitchen", f5_desc: "Fully equipped", f6_title: "Parking", f6_desc: "Free garage",
                rev_sup: "Guest Feedback", rev_title: "Verified Reviews from Booking.com", rev_word: "Superb",
                surr_sup: "Location", surr_title: "Discover Costa Adeje & Tenerife", surr_subtitle: "Situated in the most premium area of southern Tenerife, you have world-class beaches, dining, and attractions right at your doorstep.",
                loc_beach_title: "Premium Beaches", loc_beach_desc: "Walk just 5 minutes to Playa del Duque, known for its golden sand and crystal-clear waters, or head to Playa Fañabé.",
                loc_attr_title: "World-Class Attractions", loc_attr_desc: "Siam Park, voted the world's best water park, is just a 10-minute drive away.",
                loc_dine_title: "Exceptional Dining", loc_dine_desc: "Surrounded by highly-rated restaurants. Enjoy fresh Canarian seafood at La Caleta.",
                loc_teide_title: "Mount Teide & Nature", loc_teide_desc: "A perfect base camp for exploring the island. Drive up to Teide National Park in under an hour.",
                contact_sup: "Contact Us", contact_title: "Do you have any questions?", contact_subtitle: "Fill out the form below and we will get back to you directly from info@benny.es",
                form_message: "Message", btn_send: "Send Message", contact_success_title: "Message Drafted!", contact_success_desc: "We have opened your email client to send the message to info@benny.es.",
                gal_title: "Apartment Gallery", gal_subtitle: "Take a closer look at Apartment Benny and its beautiful surroundings in Costa Adeje.",
                g1_title: "Spacious Living Area", g2_title: "Fully Equipped Kitchen", g3_title: "Master Bedroom", g4_title: "15m² Private Terrace", g5_title: "Modern Bathroom", g6_title: "Playa del Duque (5 min walk)"
            },
            cs: {
                nav_apartment: "Apartmán", nav_reviews: "Hodnocení", nav_gallery: "Galerie", nav_surroundings: "Okolí", btn_book_nav: "Rezervovat",
                hero_badge: "Prémiové ubytování", hero_title: "Váš dokonalý únik <br class='hidden md:block' /> v Costa Adeje.",
                hero_subtitle: "Prostorný apartmán 80m² u moře. Jen 5 minut chůze od nedotčených písků pláže Playa del Duque.",
                book_title: "Ověření dostupnosti a ceny", label_checkin: "Příjezd", label_checkout: "Odjezd", label_guests: "Hosté", btn_check: "Ověřit dostupnost",
                status_checking: "Připojování na Booking.com pro ověření dostupnosti...", status_available: "Skvělé! Apartmán je volný.", status_synced: "Synchronizováno s Booking.com",
                est_price: "Celková cena", pricing_info: "Včetně úklidu. Slevy započítány.", btn_continue: "Pokračovat k rezervaci", details_title: "Údaje hosta", btn_back: "Zpět",
                form_name: "Celé jméno", form_phone: "Telefon", form_email: "E-mailová adresa", form_note: "Speciální požadavky (Volitelné)", booking_disclaimer: "Kliknutím na 'Dokončit rezervaci' se otevře váš e-mailový klient pro odeslání požadavku na info@benny.es. Prosím odešlete tento e-mail pro dokončení.",
                btn_complete: "Dokončit rezervaci", success_title: "Rezervace připravena!", success_desc: "Připravili jsme pro vás e-mail na info@benny.es. Prosím ujistěte se, že jste jej ve svém klientovi odeslali.", btn_book_another: "Rezervovat další pobyt",
                feat_sup: "Apartmán", feat_title: "Navrženo pro absolutní pohodlí a relaxaci.", space_p1: "Vítejte ve svém domově daleko od domova. Apartmán Benny nabízí unikátní mezonetový prostor, který působí velmi vzdušně. Zahrnuje dvě soukromé ložnice, obývák a plně vybavenou kuchyň.",
                space_p2: "Hlavním lákadlem je obrovská terasa 15m² s výhledem do klidného okolí. Užijte si ranní kávu před krátkou 5minutovou procházkou na pláže Playa del Duque. Ideální pro rodiny a skupiny do 7 osob.",
                am_wifi: "Rychlá WiFi zdarma", am_tv: "TV s plochou obrazovkou", am_kitchen: "Pračka a nádobí", am_towels: "Ručníky a povlečení zajištěny",
                f1_desc: "Celková plocha", f2_title: "Až 7 Osob", f2_desc: "2 Lůžka + Pohovka", f3_title: "15m² Terasa", f3_desc: "Venkovní posezení", f4_title: "5 Min Chůze", f4_desc: "K pláži", f5_title: "Kuchyně", f5_desc: "Plně vybavená", f6_title: "Parkování", f6_desc: "Garáž zdarma",
                rev_sup: "Zpětná vazba", rev_title: "Ověřená hodnocení z Booking.com", rev_word: "Vynikající",
                surr_sup: "Lokalita", surr_title: "Objevte Costa Adeje & Tenerife", surr_subtitle: "Nacházíte se v nejprémiovější části jižního Tenerife. Pláže, restaurace a atrakce máte přímo u dveří.",
                loc_beach_title: "Prémiové pláže", loc_beach_desc: "Jen 5 minut k Playa del Duque, známé zlatým pískem, nebo na Playa Fañabé pro vodní sporty.",
                loc_attr_title: "Top Atrakce", loc_attr_desc: "Siam Park, nejlepší aquapark na světě, je vzdálen pouhých 10 minut jízdy.",
                loc_dine_title: "Výjimečná gastronomie", loc_dine_desc: "Obklopeno vysoce hodnocenými restauracemi. Vychutnejte si čerstvé mořské plody v La Caleta.",
                loc_teide_title: "Příroda a Teide", loc_teide_desc: "Ideální výchozí bod. Za necelou hodinu vyjedete k národnímu parku Teide.",
                contact_sup: "Kontakt", contact_title: "Máte nějaké dotazy?", contact_subtitle: "Vyplňte formulář níže a my se vám ozveme přímo z e-mailu info@benny.es",
                form_message: "Zpráva", btn_send: "Odeslat zprávu", contact_success_title: "Zpráva připravena!", contact_success_desc: "Otevřeli jsme vašeho e-mailového klienta pro odeslání zprávy na info@benny.es.",
                gal_title: "Galerie Apartmánu", gal_subtitle: "Prohlédněte si detailně Apartmán Benny a jeho krásné okolí v Costa Adeje.",
                g1_title: "Prostorný obývák", g2_title: "Vybavená kuchyně", g3_title: "Hlavní ložnice", g4_title: "15m² Soukromá terasa", g5_title: "Moderní koupelna", g6_title: "Playa del Duque (5 min)"
            },
            de: { nav_apartment: "Apartment", nav_reviews: "Bewertungen", nav_gallery: "Galerie", nav_surroundings: "Umgebung", btn_book_nav: "Buchen", hero_title: "Ihr ultimativer Zufluchtsort <br class='hidden md:block' /> in Costa Adeje.", btn_check: "Verfügbarkeit prüfen", book_title: "Verfügbarkeit & Preise", contact_sup: "Kontakt" },
            fr: { nav_apartment: "Appartement", nav_reviews: "Avis", nav_gallery: "Galerie", nav_surroundings: "Environs", btn_book_nav: "Réserver", hero_title: "Votre escapade ultime <br class='hidden md:block' /> à Costa Adeje.", btn_check: "Vérifier", book_title: "Disponibilité & Prix", contact_sup: "Contact" },
            es: { nav_apartment: "Apartamento", nav_reviews: "Opiniones", nav_gallery: "Galería", nav_surroundings: "Entorno", btn_book_nav: "Reservar", hero_title: "Tu escape definitivo <br class='hidden md:block' /> en Costa Adeje.", btn_check: "Comprobar", book_title: "Disponibilidad y Precios", contact_sup: "Contacto" },
            hu: { nav_apartment: "Apartman", nav_reviews: "Értékelések", nav_gallery: "Galéria", nav_surroundings: "Környék", btn_book_nav: "Foglalás", hero_title: "A tökéletes menedék <br class='hidden md:block' /> Costa Adejében.", btn_check: "Ellenőrzés", book_title: "Elérhetőség és Árak", contact_sup: "Kapcsolat" }
        };

        function setLanguage(lang) {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                // Fallback to EN if translation is missing in the simplified map above for DE,FR,ES,HU
                const text = (translations[lang] && translations[lang][key]) ? translations[lang][key] : translations['en'][key];
                if(text) el.innerHTML = text;
            });
            document.getElementById('current-lang').innerHTML = `${lang.toUpperCase()} <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>`;
        }

        // Init Default Language
        setLanguage('en');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-slate-200/50" id="main-nav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center cursor-pointer" onclick="switchView('home')">
<img alt="Benny Logo" className="h-8 object-contain" src="https://benny.es/wp-content/uploads/elementor/thumbs/cropped-Logo-full2-color-qrg4m5vc3nivbocmd7tb4x25yh8i1fizfzpt2qs72o.png"/>
</div>
<div className="hidden md:flex space-x-8 items-center">
<button className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" data-i18n="nav_apartment" onclick="switchView('home'); scrollToSection('apartment')">Apartment</button>
<button className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" data-i18n="nav_reviews" onclick="switchView('home'); scrollToSection('reviews')">Reviews</button>
<button className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" data-i18n="nav_gallery" onclick="switchView('gallery')">Gallery</button>
<button className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" data-i18n="nav_surroundings" onclick="switchView('home'); scrollToSection('surroundings')">Location</button>
</div>
<div className="flex items-center gap-4">

<div className="relative group">
<button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors" id="current-lang">EN <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon></button>
<div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg ring-1 ring-slate-900/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-1">
<button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex justify-between items-center" onclick="setLanguage('en')">English <span className="text-xs text-slate-400">EN</span></button>
<button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex justify-between items-center" onclick="setLanguage('cs')">Čeština <span className="text-xs text-slate-400">CS</span></button>
<button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex justify-between items-center" onclick="setLanguage('de')">Deutsch <span className="text-xs text-slate-400">DE</span></button>
<button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex justify-between items-center" onclick="setLanguage('fr')">Français <span className="text-xs text-slate-400">FR</span></button>
<button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex justify-between items-center" onclick="setLanguage('es')">Español <span className="text-xs text-slate-400">ES</span></button>
<button className="w-full text-left px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 flex justify-between items-center" onclick="setLanguage('hu')">Magyar <span className="text-xs text-slate-400">HU</span></button>
</div>
</div>
<button className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-full hover:bg-teal-700 transition-colors shadow-sm" data-i18n="btn_book_nav" onclick="switchView('home'); scrollToSection('booking-section')">Book Now</button>
</div>
</div>
</div>
</nav>

<div className="flex-grow pt-20" id="app-content">

<main className="view-section" id="home-view">

<section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
<img alt="Tenerife Costa Adeje" className="w-full h-full object-cover object-center animate-ken-burns opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 hero-overlay z-10"></div>
</div>
<div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
<span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-medium tracking-widest uppercase mb-6" data-i18n="hero_badge">Premium Accommodation</span>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 text-shadow-sm leading-tight" data-i18n="hero_title">Experience the ultimate <br className="hidden md:block"/> escape in Costa Adeje.</h1>
<p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-100 mb-12 text-shadow-sm font-light" data-i18n="hero_subtitle">Spacious 80m² seaside apartment. Just a 5-minute stroll to the pristine sands of Playa del Duque.</p>
</div>
</section>

<section className="relative z-30 -mt-24 pb-16" id="booking-section">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5">

<div className="" id="booking-step-1">
<h3 className="text-lg font-medium text-slate-900 mb-6" data-i18n="book_title">Check Availability &amp; Prices</h3>
<form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end" onsubmit="handleAvailabilityCheck(event)">
<div>
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2" data-i18n="label_checkin">Check-in</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" id="book-checkin" min="2026-03-03" required="" type="date"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2" data-i18n="label_checkout">Check-out</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" id="book-checkout" min="2026-03-03" required="" type="date"/>
</div>
<div className="relative">
<label className="block text-xs font-medium text-slate-500 uppercase tracking-wider mb-2" data-i18n="label_guests">Guests</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all appearance-none cursor-pointer" id="guest-select">
<option value="1">1</option><option selected="" value="2">2</option><option value="3">3</option>
<option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<button className="w-full hover:bg-teal-700 transition-all flex text-sm font-medium text-white bg-teal-600 rounded-xl px-4 py-3.5 shadow-sm gap-2 items-center justify-center" id="btn-verify" type="submit">
<iconify-icon icon="solar:calendar-search-linear" width="18"></iconify-icon>
<span data-i18n="btn_check">Verify Availability</span>
</button>
</div>
</form>

<div className="hidden mt-6 p-4 rounded-xl border transition-all" id="verification-status">
<div className="flex items-center gap-3 text-sm text-slate-600" id="status-loading">
<div className="loader"></div>
<span data-i18n="status_checking">Connecting to Booking.com to verify availability...</span>
</div>
<div className="hidden flex flex-col md:flex-row md:items-center justify-between gap-4" id="status-success">
<div className="flex items-center gap-3 text-sm text-emerald-700">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center"><iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon></div>
<div>
<strong className="block font-medium" data-i18n="status_available">Great news! The apartment is available.</strong>
<span className="text-xs opacity-80" data-i18n="status_synced">Synchronized with Booking.com</span>
</div>
</div>
<div className="flex flex-col items-end">
<span className="text-xs text-slate-500 uppercase tracking-wider mb-1" data-i18n="est_price">Total Price</span>
<div className="text-2xl font-medium tracking-tight text-slate-900" id="price-display">-- €</div>
<span className="text-[10px] text-slate-400" data-i18n="pricing_info">Includes cleaning fee. Discounts applied.</span>
</div>
<button className="mt-2 md:mt-0 bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl px-6 py-3 transition-colors shadow-sm whitespace-nowrap" data-i18n="btn_continue" onclick="proceedToDetails()" type="button">Continue Booking</button>
</div>
<div className="hidden flex items-center gap-3 text-sm text-red-600" id="status-error">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
<span data-i18n="status_unavailable">Sorry, the selected dates are not valid or unavailable.</span>
</div>
</div>
</div>

<div className="hidden booking-step-enter pt-4 border-t border-slate-100 mt-6" id="booking-step-2">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-medium text-slate-900" data-i18n="details_title">Guest Details</h3>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-1" onclick="backToStep1()" type="button">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon> <span data-i18n="btn_back">Back</span>
</button>
</div>
<form className="space-y-5" onsubmit="finalizeBooking(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" data-i18n="form_name">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500" id="b-name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" data-i18n="form_phone">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500" id="b-phone" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" data-i18n="form_email">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500" id="b-email" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" data-i18n="form_note">Special Requests (Optional)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 resize-none" id="b-note" rows="2"></textarea>
</div>
<div className="bg-slate-50 p-4 rounded-xl flex items-start gap-3 border border-slate-100">
<iconify-icon className="text-teal-600 mt-0.5" icon="solar:info-circle-linear" width="20"></iconify-icon>
<p className="text-xs text-slate-600 leading-relaxed" data-i18n="booking_disclaimer">By clicking 'Complete Booking', your email client will open to send the request to info@benny.es. Please send the email to finalize the reservation.</p>
</div>
<button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium text-base rounded-xl px-4 py-4 transition-colors shadow-md flex justify-center items-center gap-2" type="submit">
<span data-i18n="btn_complete">Complete Booking</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>

<div className="hidden booking-step-enter py-8 text-center" id="booking-step-3">
<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:check-read-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-2" data-i18n="success_title">Reservation Drafted!</h3>
<p className="text-slate-500 text-sm max-w-md mx-auto" data-i18n="success_desc">We have prepared your booking email to info@benny.es. Please make sure you have sent it from your email client.</p>
<button className="mt-8 text-sm font-medium text-teal-600 hover:text-teal-700" data-i18n="btn_book_another" onclick="resetBooking()">Book another stay</button>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-50" id="apartment">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5">
<span className="text-teal-600 text-sm font-medium tracking-wider uppercase mb-2 block" data-i18n="feat_sup">The Apartment</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6" data-i18n="feat_title">Designed for absolute comfort &amp; relaxation.</h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed" data-i18n="space_p1">Welcome to your home away from home. Apartment Benny offers a unique duplex living space that feels incredibly airy and bright. It features two private enclosed bedrooms, a spacious living area, and a fully equipped kitchen.</p>
<p className="text-base text-slate-600 mb-8 leading-relaxed" data-i18n="space_p2">The highlight is the massive 15m² terrace overlooking the quiet surroundings. Enjoy your morning coffee here before taking a short 5-minute stroll to the pristine sands of Playa del Duque or Playa Fanabe. Perfect for families or groups up to 7 people.</p>
<div className="space-y-4">
<div className="flex items-center gap-3"><iconify-icon className="text-teal-600 text-xl" icon="solar:check-circle-linear"></iconify-icon> <span className="text-sm text-slate-700" data-i18n="am_wifi">Free High-Speed WiFi</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-teal-600 text-xl" icon="solar:check-circle-linear"></iconify-icon> <span className="text-sm text-slate-700" data-i18n="am_tv">Flat-screen TV with streaming</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-teal-600 text-xl" icon="solar:check-circle-linear"></iconify-icon> <span className="text-sm text-slate-700" data-i18n="am_kitchen">Washing machine &amp; Kitchenware</span></div>
<div className="flex items-center gap-3"><iconify-icon className="text-teal-600 text-xl" icon="solar:check-circle-linear"></iconify-icon> <span className="text-sm text-slate-700" data-i18n="am_towels">Towels &amp; Bed linen provided</span></div>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-slate-700 mb-3" icon="solar:home-angle-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900">80m²</h3>
<p className="text-xs text-slate-500 mt-1" data-i18n="f1_desc">Total Area</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-slate-700 mb-3" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900" data-i18n="f2_title">Up to 7 Guests</h3>
<p className="text-xs text-slate-500 mt-1" data-i18n="f2_desc">2 Beds + Sofa</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-slate-700 mb-3" icon="solar:sun-2-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900" data-i18n="f3_title">15m² Terrace</h3>
<p className="text-xs text-slate-500 mt-1" data-i18n="f3_desc">Outdoor seating</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-slate-700 mb-3" icon="solar:routing-2-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900" data-i18n="f4_title">5 Min Walk</h3>
<p className="text-xs text-slate-500 mt-1" data-i18n="f4_desc">To the beach</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-slate-700 mb-3" icon="solar:chef-hat-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900" data-i18n="f5_title">Kitchen</h3>
<p className="text-xs text-slate-500 mt-1" data-i18n="f5_desc">Fully equipped</p>
</div>
<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
<iconify-icon className="text-3xl text-slate-700 mb-3" icon="solar:car-linear"></iconify-icon>
<h3 className="text-sm font-medium text-slate-900" data-i18n="f6_title">Parking</h3>
<p className="text-xs text-slate-500 mt-1" data-i18n="f6_desc">Free garage</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-y border-slate-100" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<span className="text-teal-600 text-sm font-medium tracking-wider uppercase mb-2 block" data-i18n="rev_sup">Guest Feedback</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900" data-i18n="rev_title">Verified Reviews from Booking.com</h2>
</div>
<div className="flex items-center gap-4 bg-slate-50 px-6 py-4 rounded-2xl border border-slate-100">
<div className="text-4xl font-semibold text-slate-900">9.4</div>
<div>
<div className="text-sm font-medium text-slate-900" data-i18n="rev_word">Superb</div>
<div className="text-xs text-slate-500">Based on 45+ reviews</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<div className="flex items-center gap-1 text-teal-500 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"Fantastic location, just a few minutes from Playa del Duque. The apartment was spotless, very spacious, and the private garage was a lifesaver in Tenerife."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">M</div>
<div><div className="text-sm font-medium text-slate-900">Martin</div><div className="text-xs text-slate-500">Czech Republic</div></div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<div className="flex items-center gap-1 text-teal-500 mb-4">
<iconify-icon className="" icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"The huge terrace is amazing for breakfasts! Fully equipped kitchen and very comfortable beds. Host was extremely communicative. Will definitely return."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">S</div>
<div><div className="text-sm font-medium text-slate-900">Sarah</div><div className="text-xs text-slate-500">United Kingdom</div></div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<div className="flex items-center gap-1 text-teal-500 mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-bold" width="18"></iconify-icon><iconify-icon icon="solar:star-half-bold" width="18"></iconify-icon>
</div>
<p className="text-slate-700 text-sm leading-relaxed mb-6">"Sehr schönes und sauberes Apartment. Die Lage ist unschlagbar. Alles, was man braucht, ist fußläufig erreichbar. Ideal für Familien."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-sm">T</div>
<div><div className="text-sm font-medium text-slate-900">Thomas</div><div className="text-xs text-slate-500">Germany</div></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-slate-50" id="surroundings">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 max-w-2xl mx-auto">
<span className="text-teal-600 text-sm font-medium tracking-wider uppercase mb-2 block" data-i18n="surr_sup">Location</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4" data-i18n="surr_title">Discover Costa Adeje &amp; Tenerife</h2>
<p className="text-sm md:text-base text-slate-600" data-i18n="surr_subtitle">Situated in the most premium area of southern Tenerife, you have world-class beaches, dining, and attractions right at your doorstep.</p>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="grid grid-cols-2 gap-4">
<div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-md">
<img alt="Tenerife Beach" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="grid grid-rows-2 gap-4">
<div className="rounded-3xl overflow-hidden shadow-md">
<img alt="Siam Park area" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="rounded-3xl overflow-hidden shadow-md">
<img alt="Teide" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<ul className="space-y-8">
<li className="flex gap-4">
<div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0"><iconify-icon icon="solar:water-linear" width="24"></iconify-icon></div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1" data-i18n="loc_beach_title">Premium Beaches</h4>
<p className="text-sm text-slate-600 leading-relaxed" data-i18n="loc_beach_desc">Walk just 5 minutes to Playa del Duque, known for its golden sand and crystal-clear waters, or head to Playa Fañabé.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0"><iconify-icon icon="solar:ticket-linear" width="24"></iconify-icon></div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1" data-i18n="loc_attr_title">World-Class Attractions</h4>
<p className="text-sm text-slate-600 leading-relaxed" data-i18n="loc_attr_desc">Siam Park, voted the world's best water park, is just a 10-minute drive away.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 flex-shrink-0"><iconify-icon icon="solar:cup-linear" width="24"></iconify-icon></div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1" data-i18n="loc_dine_title">Exceptional Dining</h4>
<p className="text-sm text-slate-600 leading-relaxed" data-i18n="loc_dine_desc">Surrounded by highly-rated restaurants. Enjoy fresh Canarian seafood at La Caleta.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0"><iconify-icon icon="solar:map-linear" width="24"></iconify-icon></div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-1" data-i18n="loc_teide_title">Mount Teide &amp; Nature</h4>
<p className="text-sm text-slate-600 leading-relaxed" data-i18n="loc_teide_desc">A perfect base camp for exploring the island. Drive up to Teide National Park in under an hour.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-white border-t border-slate-100" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<span className="uppercase block text-sm font-medium text-teal-600 tracking-wider mb-2" data-i18n="contact_sup">Contact Us</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4" data-i18n="contact_title">Do you have any questions?</h2>
<p className="text-base text-slate-600" data-i18n="contact_subtitle">Fill out the form below and we will get back to you directly from info@benny.es</p>
</div>
<div className="grid lg:grid-cols-2 gap-8 items-start">

<div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-sm h-full">
<form className="space-y-5 text-left h-full" id="contact-form" onsubmit="handleContactSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1" data-i18n="form_name">Full Name</label>
<input className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" id="c-name" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1" data-i18n="form_email">Email Address</label>
<input className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all" id="c-email" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-slate-700 mb-1" data-i18n="form_message">Message</label>
<textarea className="w-full bg-white border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all resize-none" id="c-msg" required="" rows="5"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl px-4 py-4 transition-colors shadow-sm mt-2 flex justify-center items-center gap-2" id="c-btn" type="submit">
<span data-i18n="btn_send">Send Message</span>
<iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</form>
<div className="hidden h-full flex flex-col justify-center items-center text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800" id="contact-success">
<iconify-icon className="mb-4 text-emerald-600" icon="solar:check-circle-bold" width="48"></iconify-icon>
<h4 className="font-medium text-lg mb-2" data-i18n="contact_success_title">Message Drafted!</h4>
<p className="text-sm" data-i18n="contact_success_desc">We have opened your email client to send the message to info@benny.es.</p>
<button className="mt-4 text-xs font-medium underline" onclick="document.getElementById('contact-success').classList.add('hidden'); document.getElementById('contact-form').classList.remove('hidden');">Send another</button>
</div>
</div>

<div className="h-full min-h-[400px] bg-slate-200 rounded-3xl overflow-hidden shadow-sm border border-slate-100 relative group">
<iframe allowfullscreen="" className="absolute inset-0 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14032.548882895684!2d-16.746146199999998!3d28.0934969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a90a2a4729c15%3A0x889895c1a7046b0a!2sCosta%20Adeje%2C%20Santa%20Cruz%20de%20Tenerife%2C%20Spain!5e0!3m2!1sen!2scz!4v1709420000000!5m2!1sen!2scz" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-200 text-sm">
<div className="flex items-center gap-2 font-medium text-slate-900 mb-1">
<iconify-icon className="text-teal-600" icon="solar:map-point-bold"></iconify-icon> Costa Adeje, Tenerife
                                 </div>
<p className="text-xs text-slate-500 pl-6">Just 5 mins from Playa del Duque</p>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="view-section hidden py-12 md:py-20" id="gallery-view">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900" data-i18n="gal_title">Apartment Gallery</h2>
<p className="mt-4 text-base text-slate-500 max-w-2xl mx-auto" data-i18n="gal_subtitle">Take a closer look at Apartment Benny and its beautiful surroundings in Costa Adeje.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group rounded-3xl overflow-hidden shadow-sm bg-white border border-slate-100">
<div className="aspect-[4/3] overflow-hidden"><img alt="Living Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/></div>
<div className="p-5"><h3 className="text-sm font-medium text-slate-900" data-i18n="g1_title">Spacious Living Area</h3></div>
</div>
<div className="group rounded-3xl overflow-hidden shadow-sm bg-white border border-slate-100">
<div className="aspect-[4/3] overflow-hidden"><img alt="Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/></div>
<div className="p-5"><h3 className="text-sm font-medium text-slate-900" data-i18n="g2_title">Fully Equipped Kitchen</h3></div>
</div>
<div className="group rounded-3xl overflow-hidden shadow-sm bg-white border border-slate-100">
<div className="aspect-[4/3] overflow-hidden"><img alt="Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/></div>
<div className="p-5"><h3 className="text-sm font-medium text-slate-900" data-i18n="g3_title">Master Bedroom</h3></div>
</div>
<div className="group rounded-3xl overflow-hidden shadow-sm bg-white border border-slate-100">
<div className="aspect-[4/3] overflow-hidden"><img alt="Terrace" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/></div>
<div className="p-5"><h3 className="text-sm font-medium text-slate-900" data-i18n="g4_title">15m² Private Terrace</h3></div>
</div>
<div className="group rounded-3xl overflow-hidden shadow-sm bg-white border border-slate-100">
<div className="aspect-[4/3] overflow-hidden"><img alt="Bathroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/></div>
<div className="p-5"><h3 className="text-sm font-medium text-slate-900" data-i18n="g5_title">Modern Bathroom</h3></div>
</div>
<div className="group rounded-3xl overflow-hidden shadow-sm bg-white border border-slate-100">
<div className="aspect-[4/3] overflow-hidden"><img alt="Playa del Duque" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://tripito.cz/wp-content/uploads/pages/kanarske_ostrovy_tenerife_playa_el_duque.jpg"/></div>
<div className="p-5"><h3 className="text-sm font-medium text-slate-900" data-i18n="g6_title">Playa del Duque (5 min walk)</h3></div>
</div>
</div>
</div>
</main>

<main className="view-section hidden py-12 bg-slate-50 min-h-[80vh]" id="admin-view">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="max-w-md mx-auto bg-white rounded-3xl p-8 shadow-sm border border-slate-200 mt-10" id="admin-login">
<div className="text-center mb-8 flex flex-col items-center">
<img alt="Benny Logo" className="h-10 object-contain mb-4" src="https://benny.es/wp-content/uploads/elementor/thumbs/cropped-Logo-full2-color-qrg4m5vc3nivbocmd7tb4x25yh8i1fizfzpt2qs72o.png"/>
<h2 className="text-lg font-medium text-slate-900">Admin Portal</h2>
</div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/20" id="username" type="text" value="info@benny.es"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Password</label>
<input className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500/20" id="password" type="password" value="admin123"/>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm rounded-xl px-4 py-3 transition-colors" type="submit">Login</button>
<p className="text-xs text-red-500 text-center hidden mt-2" id="login-error">Invalid credentials.</p>
</form>
</div>

<div className="hidden" id="admin-dashboard">
<div className="flex justify-between items-end mb-8 border-b border-slate-200 pb-4">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Dashboard</h2>
<div className="flex gap-4 mt-4">
<button className="text-sm font-medium text-teal-600 border-b-2 border-teal-600 pb-2 transition-colors" id="tab-prices" onclick="switchAdminTab('prices')">Prices &amp; Availability</button>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 pb-2 transition-colors" id="tab-res" onclick="switchAdminTab('reservations')">Reservations</button>
</div>
</div>
<button className="text-sm text-slate-500 hover:text-slate-900 mb-2" onclick="logoutAdmin()">Logout</button>
</div>

<div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden" id="admin-prices">
<div className="p-6 border-b border-slate-100 flex flex-col md:flex-row justify-between items-center bg-slate-50 gap-4">
<div className="flex gap-2 w-full sm:w-auto">
<select className="bg-white border border-slate-200 text-sm rounded-xl px-4 py-2 focus:outline-none" id="admin-month" onchange="renderAdminCalendar()"></select>
<select className="bg-white border border-slate-200 text-sm rounded-xl px-4 py-2 focus:outline-none" id="admin-year" onchange="updateMonthOptions()">
<option value="2026">2026</option><option value="2027">2027</option><option value="2028">2028</option>
</select>
</div>
<span className="text-xs text-slate-500">Base Default Price: 180 €</span>
</div>
<div className="p-6">
<div className="grid grid-cols-7 gap-2 sm:gap-4 mb-2">
<div className="text-[10px] font-medium text-slate-400 text-center uppercase">Mo</div><div className="text-[10px] font-medium text-slate-400 text-center uppercase">Tu</div><div className="text-[10px] font-medium text-slate-400 text-center uppercase">We</div><div className="text-[10px] font-medium text-slate-400 text-center uppercase">Th</div><div className="text-[10px] font-medium text-slate-400 text-center uppercase">Fr</div><div className="text-[10px] font-medium text-slate-400 text-center uppercase">Sa</div><div className="text-[10px] font-medium text-slate-400 text-center uppercase">Su</div>
</div>
<div className="grid grid-cols-7 gap-2 sm:gap-4" id="calendar-grid"></div>
<div className="mt-8 flex justify-end">
<button className="bg-teal-600 hover:bg-teal-700 text-white font-medium text-sm rounded-xl px-6 py-2 transition-colors" id="save-btn" onclick="saveAdminPrices()">Save Prices for Month</button>
</div>
</div>
</div>

<div className="hidden bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden p-6" id="admin-reservations">
<h3 className="text-lg font-medium text-slate-900 mb-6">Recent Web Reservations</h3>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-600">
<thead className="text-xs text-slate-400 uppercase bg-slate-50">
<tr>
<th className="px-4 py-3 font-medium rounded-l-lg">Date</th>
<th className="px-4 py-3 font-medium">Guest</th>
<th className="px-4 py-3 font-medium">Contact</th>
<th className="px-4 py-3 font-medium">Stay Details</th>
<th className="px-4 py-3 font-medium">Price</th>
<th className="px-4 py-3 font-medium rounded-r-lg">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100" id="res-table-body">

</tbody>
</table>
<div className="hidden text-center py-8 text-slate-400 text-sm" id="res-empty">No reservations found.</div>
</div>
</div>
</div>
</div>
</main>
</div>

<footer className="bg-white border-t border-slate-200 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
<img alt="Benny" className="h-6 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all" src="https://benny.es/wp-content/uploads/elementor/thumbs/cropped-Logo-full2-color-qrg4m5vc3nivbocmd7tb4x25yh8i1fizfzpt2qs72o.png"/>
<div className="text-xs text-slate-500 text-center">© 2026 Apartment Benny, Tenerife. All rights reserved. </div>
<div className="flex gap-4 items-center">
<button className="text-xs font-medium text-slate-400 hover:text-slate-900 transition-colors" onclick="switchView('admin')">Admin Login</button>
</div>
</div>
</footer>



    </>
  );
}
